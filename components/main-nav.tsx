import { BsTools, BsTwitter } from "react-icons/bs"

export default function MainNav() {
    return (
        <header className="border-b">
            <div className="container flex h-14 items-center justify-between">
                <div>
                    <a href="/" className="flex flex-row items-center">
                        <BsTools className="inline" />
                        <span className="ml-2 text-xl font-bold">TopDev.tools</span>
                    </a>
                </div>
                <div>
                    <nav className="flex items-center">
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