"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function MLF() {
    const router = useRouter();
    return (
        <div>
            <h1>MLF 2026 (January 2026 - Present)</h1>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src="/images/adopting-a-cat-2048px-06052.webp"
                            alt="cat image"
                            fill
                            sizes="200px"
                        />
                    </div>
                    <p>something</p>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h1>Tech Stack</h1>
                        <ul>
                            <li>- Java Spring Boot</li>
                            <li>- React TS + Vite</li>
                            <li>- ShadCN component library</li>
                            <li>- gTTs4j (TTS API)</li>
                            <li>- Supabase (Postgres)</li>
                            <li>- Flyway Migration</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Features</h1>
                        <p></p>
                    </div>
                </div>
                <div>
                    <h1>Thoughts & Improvements</h1>
                </div>

            </div>
        </div>
    )
}