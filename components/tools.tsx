import ToolCard from "./tool-card"

export default function Tools() {
    return (
        <div className="container mt-2 sm:mt-7 flex flex-col justify-center sm:flex-row sm:flex-wrap sm:justify-normal">
            <ToolCard
                name="FontChroma"
                desc="Visualize your color palettes and fonts instantly on this web app"
                demoPath="/demos/fontchroma.gif"
                link="/fontchroma"
                tags={["design", "frontend"]}
            />
        </div>
    )
}