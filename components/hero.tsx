import { BsRocketTakeoff } from "react-icons/bs"

export default function Hero() {
    return (
        <div className="container mt-10 flex flex-col items-center">
            <header className="font-bold text-center text-4xl sm:text-5xl">
                Build Products Fast <BsRocketTakeoff className="inline" />
            </header>
            <div className="mt-4 font-semibold text-center text-lg sm:text-xl">
                Tools to
                <span className="text-pink-500"> Design</span>,
                <span className="text-fuchsia-600"> Develop</span> and
                <span className="text-orange-500"> Ship </span>
                Your Products
            </div>
        </div>
    )
}