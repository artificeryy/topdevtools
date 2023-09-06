import ToolCard from "./tool-card"

export default function Tools() {
    return (
        <div className="container mt-7 flex flex-row flex-wrap">
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