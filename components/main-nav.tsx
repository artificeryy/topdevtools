import Link from "next/link"
import { BsTools, BsTwitter } from "react-icons/bs"

export default function MainNav() {
    return (
        <header className="border-b">
            <div className="container flex h-14 items-center justify-between">
                <div>
                    <Link href="/" className="flex flex-row items-center">
                        <BsTools className="inline" />
                        <span className="ml-2 text-xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">TopDev.tools</span>
                    </Link>
                </div>
                <div>
                    <nav className="flex items-center">
                        <div className="flex flex-row items-center justify-center rounded-md font-medium px-1">
                            <iframe src="https://ghbtns.com/github-btn.html?user=artificeryy&repo=topdevtools&type=star&count=true&size=large" width="110" height="30" title="GitHub" className="duration-200"></iframe>
                        </div>
                        <a target="_blank" href="https://twitter.com/artificery_">
                            <div className="flex flex-row items-center justify-center rounded-md font-medium hover:bg-accent hover:text-accent-foreground py-2 px-4 duration-200">
                                <BsTwitter className="inline text-xl" />
                                <span className="ml-1">@artificery_</span>
                            </div>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}