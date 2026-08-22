"use client"

import { TypeAnimation } from "react-type-animation";
import TypeIt from "typeit-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export default function Home() {

    const router = useRouter();

    useEffect(() => {
        function handleKeyPress(e: KeyboardEvent) {
            if (e.key === "Enter" || e.key === "Tab") {
                router.push('/about-me')
            }
        }
        function handleMousePress(e: MouseEvent) {
            router.push('/about-me')
        }
        window.addEventListener("keydown", handleKeyPress);
        window.addEventListener("click", handleMousePress);

        return () => {
            // will run only when eventListener is added
            // must remove otherwise accidental triggers
            window.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("click", handleMousePress);
        }
    }, [router])

    return (
        <div className="flex flex-col items-center justify-center h-screen pb-20">
            <div>
                <Badge>tab</Badge>/<Badge>enter</Badge>/<Badge>tap</Badge> to continue
            </div>
            <div className="relative text-left flex">
                <span 
                    className="invisible pointer-events-none select-none whitespace-nowrap"
                    style={{ fontSize: '7em' }}
                >Jolie Zhu|</span>

                <span className="absolute top-0 left-0 text-gray-200 select-none" style={{ fontSize: '7em' }}>
                    Jolie
                </span>

                <div className="absolute top-0 left-0 w-full h-full" 
                style={{
                    fontSize: '7em'
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
            </div>
        </div>
    )
}