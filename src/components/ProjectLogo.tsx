

// This is a genius function that returns the logo of the project based on the theme just give it a name (for alt)
// and an id for the file name, how? it actually returns both in a div element but hides unused one..


export function ProjectLogo({ projectId, projectName, tailwind = "" }: { projectId: string, projectName: string, tailwind?: string }) {


    // for tailwind injection
    const lightMode = `block dark:hidden w-full h-full ${tailwind}`.trim()
    const darkMode = `hidden dark:block w-full h-full ${tailwind}`.trim()

    return (
        <div className="flex items-center justify-center w-12 h-12">
            {/* Light Mode Logo */}
            <img
                src={`/projects/${projectId}-light.svg`}
                alt={`${projectName} Logo`}
                className={lightMode}
            />

            {/* Dark Mode Logo */}
            <img
                src={`/projects/${projectId}-dark.svg`}
                alt={`${projectName} Logo`}
                className={darkMode}
            />
        </div>
    );
}