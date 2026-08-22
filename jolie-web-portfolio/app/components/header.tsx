"use client"

import { TypeAnimation } from "react-type-animation";
import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";
import { SunMoon, Mail } from "lucide-react"

export default function Header() {
    return (
        <div className="flex flex-row justify-between max-width border-b p-3 px-10">
            <a href="/">
                <div style={{
                        fontSize: '1.5em'
                    }}>
                    <TypeIt
                        options={{ loop: true }}
                        getBeforeInit={(instance) => {
                            instance
                            .type("Jolie <span style='color: #AD4F4E;'>Zhu</span>")
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
                    <Mail/>
                </Button>
                <Button variant="outline" size="icon" aria-label="LinkedIn">
                    <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        className="size-4 object-contain"
                    />
                </Button>
                <Button variant="outline" size="icon" aria-label="GitHub">
                    <img
                        src="/images/github.png"
                        alt="GitHub"
                        className="size-4 object-contain"
                    />
                </Button>
                {/* <Button variant="outline" size="icon" aria-label="Switch mode">
                    <SunMoon/>
                </Button> */}
            </div>
        </div>
    )
}