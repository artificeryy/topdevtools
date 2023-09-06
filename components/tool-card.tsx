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
    desc: string
    demoPath: string
    link: string
    tags: string[]
}

export default function ToolCard({ name, desc, demoPath, link, tags }: Card) {
    return (
        <div className="mr-5 mt-5">
            <Card className="w-[350px]">
                <CardHeader>
                    <Link href={link}>
                        <CardTitle>{name}<BsLink45Deg className="inline ml-1" /></CardTitle>
                    </Link>
                    <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={demoPath} alt="demo" width="533" height="300" className="rounded-md" />
                </CardContent>
                <CardFooter >
                    {tags.map((tag, index) => {
                        return <Badge key={index} variant={tag} className="mr-1.5">{tag}</Badge>
                    })}
                </CardFooter>
            </Card>
        </div>
    )
}