"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"

export default function TAAM() {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src="/images/TAAM.png"
                            alt="image of TAAM logo"
                            fill
                            sizes="200px"
                            className="object-cover"
                        />
                    </div>
                    <p>The TAAM Inventory Management System is a project for course CSCB07, 
                        where our team created an Android application that allows both admins 
                        and users to view artifacts from the museum digitally. It offers several 
                        user interactions (i.e. likes, comments, save-to-collection). This application 
                        relies on clean architecture, software design principles, robust testing, 
                        and clean UI/UX, allowing for ease of extendibility and reusability.</p>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Tech Stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge variant="outline" className="text-sm font-normal">Java</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Gradle</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Kotlin</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Firebase Realtime</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Firebase Authentication</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Mockito</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Features</h1>
                    <ul>
                        <li>&bull; User login and signup with secure authentication.</li>
                        <li>&bull; Admin and general user roles, with separate permissions.</li>
                        <li>&bull; Artifact gallery view, choice of pagination, and choice of filters.</li>
                        <li>&bull; Personal artifact collections that users can save.</li>
                        <li>&bull; Expanded artifact view, where users can interact (i.e. like, save, comment)</li>
                        <li>&bull; Standardized UI and colour scheme, with intuitive UX</li>
                    </ul>
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                    <p>I learned</p>
                </div> */}

            </div>
        </div>
    )
}