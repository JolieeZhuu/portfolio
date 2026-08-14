"use client"

import { TypeAnimation } from "react-type-animation";
import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react"

export default function Header() {
    return (
        <div className="flex flex-row justify-between max-width border-b p-3">
            <a href="/">
                <div style={{
                        fontSize: '1.5em'
                    }}>
                    <TypeIt
                        options={{ loop: true }}
                        getBeforeInit={(instance) => {
                            instance
                            .type("Jolie <span style='color: #C10B0B;'>Zhu</span>")
                            .pause(3000) // Wait for 3 seconds (3000 milliseconds)
                            .delete(3)
                            return instance;
                        }}
                    />
                </div>
            </a>
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