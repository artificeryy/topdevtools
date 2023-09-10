import ToolCard from "./tool-card"
import { useEffect, useState } from 'react';

export default function Tools() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="container mt-2 sm:mt-7 flex flex-col justify-center sm:flex-row sm:flex-wrap sm:justify-normal">
            <ToolCard
                name="Proj Manager for Devs"
                desc={["Juggling too many tasks as a dev? FREE Notion template to manage your projects and tasks so you can focus more on building"]}
                demoPath="/demos/project_manager_demo.png"
                link="/projmanager"
                tags={["management"]}
            />
            <ToolCard
                name="FontChroma"
                desc={["Visualize your color palettes and fonts instantly on this web app"]}
                demoPath="/demos/fontchroma.gif"
                link="/fontchroma"
                tags={["design", "frontend"]}
            />
        </div>
    )
}