"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"

export default function TheTale() {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src="/images/TheTale.png"
                            alt="image of TheTale logo"
                            fill
                            sizes="200px"
                            className="object-cover"
                        />
                    </div>
                    <p>The Tale (for short) is a forensics support system for BacsaHacks 
                        that takes in information about the crime and potential suspects 
                        of a particular crime scene (notably fingerprints and DNA samples), 
                        and ranks the most likely suspect. It offers streamlined UI experience, 
                        an automatically generated case report, and additional analysis tools 
                        and information extracted from the primary sources.</p>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Tech Stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge variant="outline" className="text-sm font-normal">React</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Vite</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Flask</Badge>
                        <Badge variant="outline" className="text-sm font-normal">OpenCV</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Features</h1>
                    <ul>
                        <li>&bull; OpenCV ORB for feature-matching fingerprints; works with extreme edge cases too.</li>
                        <li>&bull; Needleman-Wunsch dynamic programming algorithm for DNA sequence alignment.</li>
                        <li>&bull; Input handling for users to provide images</li>
                        <li>&bull; Dashboard that displays statistics on suspect ranking and analytical evidence</li>
                        <li>&bull; Integrated Gemini API to auto-generate a well-formatted case report.</li>
                        <li>&bull; Clean and intuitive UI/UX design.</li>
                    </ul>
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                </div> */}

            </div>
        </div>
    )
}