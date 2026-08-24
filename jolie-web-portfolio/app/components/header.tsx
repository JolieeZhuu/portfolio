"use client"

import { TypeAnimation } from "react-type-animation";
import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";
import { SunMoon, Mail } from "lucide-react"
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-between max-width border-b p-3 px-10">
            <a href="/">
                <span className="absolute p-3 px-10 top-0 left-0 text-[var(--primary)] select-none" style={{ fontSize: '1.5em' }}>
                    Jolie
                </span>
                <div className="absolute p-3 px-10 top-0 left-0" style={{
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
                <Link href="mailto:joliezhu34@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="Email">
                        <Mail/>
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/jolie-z/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="LinkedIn">
                        <img
                            src="/images/linkedin.png"
                            alt="LinkedIn"
                            className="size-4 object-contain"
                        />
                    </Button>
                </Link>
                <Link href="https://github.com/JolieeZhuu" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="GitHub">
                        <img
                            src="/images/github.png"
                            alt="GitHub"
                            className="size-4 object-contain"
                        />
                    </Button>
                </Link>
                {/* <Button variant="outline" size="icon" aria-label="Switch mode">
                    <SunMoon/>
                </Button> */}
            </div>
        </div>
    )
}