import RecentsCarousel from "@/app/components/recents-carousel"
import Image from "next/image"
import { ClockFadingIcon, GraduationCapIcon } from "lucide-react"

export default function AboutMe() {
    const images = [
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
        [
            "/images/adopting-a-cat-2048px-06052.webp",
            "cat image"
        ],
    ]
    const descriptions = [
        'ISC2 CC certificate',
        'MPAC Continuing Academic Excellence Award',
        'Website portfolio',
        'UofT web assistant @ UTC',
        'TAAM inventory Android app',
        '169 wpm, 97% accuracy',
        '$10K UofT scholarship',
    ]
    return (
        <div>
            <div className="flex flex-row gap-15 pt-5">
                {/* <div className="relative w-50 h-50 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={"/images/adopting-a-cat-2048px-06052.webp"}
                        alt={"cat image"}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="200px"
                    />
                </div> */}
                <p>Hi! I’m Jolie, a Computer Science student at the University of Toronto. 
                    I love learning new things, and am currently interested in the intersections 
                    of machine learning, cybersecurity, and software development. I’ve collected 
                    experience over the past years through projects, hackathons, certifications, 
                    and a work study! Outside of school, I enjoy typing tests, making 3D paper crafts, 
                    and immersing myself in productivity apps. Thanks for visiting my website!</p>
            </div>
            <div className="mt-20 pb-3 flex flex-row text-[var(--secondary)] gap-2">
                <ClockFadingIcon className="size-7"/>
                <h1 className="text-2xl font-medium">recent achievements</h1>
            </div>
            <RecentsCarousel
                images={images}
                descriptions={descriptions}
            />
            <div className="mt-20 pb-3 space-y-4">
                <div className="flex flex-row text-[var(--secondary)] gap-2">
                    <GraduationCapIcon className="size-7"/>
                    <h1 className="text-2xl font-medium">education</h1>
                </div>
                <div>
                    <p className="font-bold">University of Toronto (September 2025 - Present)</p>
                    <p className="pl-5">Candidate for Bachelor of Science</p>
                    <p className="pl-5">U of T Scholars Program: $10K scholarship awarded to first years based on academic merit</p>
                </div>
                <div>
                    <p className="font-bold">Victoria Park Collegiate Institute (September 2025 - June 2025)</p>
                    <p className="pl-5">International Baccalaureate Diploma Program (IBDP); graduated with 42/45</p>
                    <p className="pl-5">Ontario Secondary School Diploma (OSSD)</p>
                </div>
            </div>
        </div>
    )
}