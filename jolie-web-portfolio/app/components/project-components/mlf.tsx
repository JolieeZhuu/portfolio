"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"

export default function MLF() {
    return (
        <div>
            <div className="flex flex-col gap-10">
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
                <div>
                    <h1 className="text-lg font-medium">Tech Stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge variant="outline" className="text-sm font-normal">PyTorch</Badge>
                        <Badge variant="outline" className="text-sm font-normal">MASt3R</Badge>
                        <Badge variant="outline" className="text-sm font-normal">OpenCV</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Features</h1>
                    Still a work in progress!
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                </div> */}
            </div>
        </div>
    )
}