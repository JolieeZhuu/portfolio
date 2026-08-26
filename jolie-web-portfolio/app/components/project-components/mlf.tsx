"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassesIcon, BookCopyIcon, SparklesIcon } from "lucide-react"
import Image from "next/image"

export default function MLF() {
    return (
        <div className="text-[var(--foreground)]">
            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-lg font-medium pb-3 text-[var(--secondary)] flex flex-row gap-2"><GlassesIcon/>project overview</h1>
                    <div className="flex flex-row gap-10">
                        <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/mlf.png"
                                alt="image of 3D reconstruction - MLF"
                                fill
                                sizes="200px"
                                className="object-cover"
                            />
                        </div>
                        <p>MLF 2026 (Machine Learning Fundamentals 2026) is a project I am working 
                            on with a couple other U of T students, where we're developing an 
                            application that measures the volume of any object given either a video 
                            or a sequence of images. This requires knowledge of stereovision, camera 
                            intrinsics, and a bit of ML to estimate the feature-matching accurately 
                            with a small supply of frames.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><BookCopyIcon/>tech stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">pytorch</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">mast3r</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">opencv</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><SparklesIcon/>features</h1>
                    Still a work in progress!
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                </div> */}
            </div>
        </div>
    )
}