"use client"

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react"

export default function Header() {
    return (
        <div className="flex flex-row justify-between max-width border-b p-3">
            <div>
                {/* Put in my name */}
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Jolie Zhu',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        '',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div className="flex flex-row gap-4">
                {/* Put in the buttons */}
                <Button variant="outline" size="icon" aria-label="Email">
                    <ArrowUpIcon/>
                </Button>
                <Button variant="outline" size="icon" aria-label="LinkedIn">
                    <ArrowUpIcon/>
                </Button>
                <Button variant="outline" size="icon" aria-label="Resume">
                    <ArrowUpIcon/>
                </Button>
                <Button variant="outline" size="icon" aria-label="Switch mode">
                    <ArrowUpIcon/>
                </Button>
            </div>
        </div>
    )
}