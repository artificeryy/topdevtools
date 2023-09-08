import Image from "next/image"
import { BsLink45Deg } from "react-icons/bs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


interface Card {
    name: string
    desc: string[]
    demoPath: string
    link: string
    tags: string[]
}

export default function ToolCard({ name, desc, demoPath, link, tags }: Card) {
    return (
        <div className="sm:mr-5 mt-5">
            <Card className="w-full sm:w-[350px]">
                <CardHeader>
                    <Link href={link} placeholder="blur">
                        <CardTitle>{name}<BsLink45Deg className="inline ml-1" /></CardTitle>
                    </Link>
                    <CardDescription>
                        {desc.map((para, idx) => {
                            return <p key={idx}>{para}</p>
                        })}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={demoPath} alt="demo" width="533" height="300" className="rounded-md" />
                </CardContent>
                <CardFooter >
                    <div className="flex flex-row flex-wrap gap-y-1">
                        {tags.map((tag, idx) => {
                            return <Badge key={idx} variant={tag} className="mr-1.5">{tag}</Badge>
                        })}
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}