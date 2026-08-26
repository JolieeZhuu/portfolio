"use client"

import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-between max-width border-b border-[var(--primary)] p-5 px-[20%] bg-[var(--background)] ">
            <a href="/">
                <span className="absolute py-3 mx-[20%] top-0 left-0 text-[var(--primary)] select-none" style={{ fontSize: '1.5em' }}>
                    Jolie
                </span>
                <div className="absolute py-3 mx-[20%] top-0 left-0" style={{
                        fontSize: '1.5em'
                    }}>
                    <TypeIt
                        options={{ loop: true }}
                        getBeforeInit={(instance) => {
                            instance
                            .type("Jolie <span style='color:#AD4F4E;'>Zhu</span>")
                            .pause(3000) // Wait for 3 seconds (3000 milliseconds)
                            .delete(4)
                            return instance;
                        }}
                    />
                </div>
            </a>
            <div className="flex flex-row gap-10">
                {/* Put in the buttons */}
                <Link href="mailto:joliezhu34@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
                    <p className="hover:text-[var(--secondary-accent)] hover:font-medium">email</p>
                    {/* <Button variant="outline" size="icon" aria-label="Email" className="hover:bg-[var(--secondary-accent)]">
                        <Mail/>
                    </Button> */}
                </Link>
                <Link href="https://www.linkedin.com/in/jolie-z/" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
                    <p className="hover:text-[var(--secondary-accent)] hover:font-medium">linkedin</p>
                    {/* <Button variant="outline" size="icon" aria-label="LinkedIn" className="hover:bg-[var(--secondary-accent)]">
                        <img
                            src="/images/linkedin.png"
                            alt="LinkedIn"
                            className="size-4 object-contain"
                        />
                    </Button> */}
                </Link>
                <Link href="https://github.com/JolieeZhuu" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2">
                    <p className="hover:text-[var(--secondary-accent)] hover:font-medium">github</p>
                    {/* <Button variant="outline" size="icon" aria-label="GitHub" className="hover:bg-[var(--secondary-accent)]">
                        <img
                            src="/images/github.png"
                            alt="GitHub"
                            className="size-4 object-contain"
                        />
                    </Button> */}
                </Link>
                {/* <Button variant="outline" size="icon" aria-label="Switch mode">
                    <SunMoon/>
                </Button> */}
            </div>
        </div>
    )
}