import React, { useEffect, useRef, useState } from "react";
import { m } from "@/paraglide/messages";

function BootLoader({ exiting }: { exiting: boolean }) {
  return (
    <div
      className={[
        "fixed inset-0 z-[9999] grid place-items-center bg-black text-foreground",
        "transition-all duration-200 ease-out",
        exiting ? "opacity-0 scale-[1.01] blur-[1px]" : "opacity-100 scale-100 blur-0",
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-label="Loading application"
    >
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        <span className="text-white/80" aria-hidden="true">
          {m.loading_text()}
        </span>
      </div>
    </div>
  );
}

export function BootGate({
  children,
  minDurationMs = 150,
  exitMs = 200,
}: {
  children: React.ReactNode;
  minDurationMs?: number;
  exitMs?: number;
}) {
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [exiting, setExiting] = useState(false);

  // Prevent StrictMode double-run in dev from doing weird stuff
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const startTs = performance.now();
    let cancelled = false;

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    (async () => {
      try {
        if (document.fonts?.ready) await document.fonts.ready;
      } catch {}

      await new Promise<void>((res) => {
        if (document.readyState === "complete") return res();
        window.addEventListener("load", () => res(), { once: true });
      });

      await new Promise<void>((r) =>
        requestAnimationFrame(() => requestAnimationFrame(() => r()))
      );

      const elapsed = performance.now() - startTs;
      const remaining = Math.max(0, minDurationMs - elapsed);
      if (remaining > 0) await sleep(remaining);

      if (cancelled) return;

      // ✅ start fade out
      setExiting(true);
      await sleep(exitMs);

      if (cancelled) return;

      // ✅ now unmount loader + show app
      setShowLoader(false);
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [minDurationMs, exitMs]);

  return (
    <>
      {/* Keep the app mounted behind the loader so it's ready instantly */}
      <div className={showLoader ? "pointer-events-none" : ""}>
        {children}
      </div>

      {showLoader && <BootLoader exiting={exiting} />}
    </>
  );
}
