import RecentsCarousel from "@/app/components/recents-carousel"
import Image from "next/image"

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
        'ISC2 certificate',
        'Website portfolio',
        'Work study position as a web assistant for the University of Toronto Communications Team',
        '86th place in team "atea6" for BoroCTF',
        'N/A',
        'N/A',
        'N/A',
    ]
    return (
        <div>
            <div className="flex flex-row gap-10">
                <div className="relative w-50 h-50 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={"/images/adopting-a-cat-2048px-06052.webp"}
                        alt={"cat image"}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="200px"
                    />
                </div>
                <p>Hi! I’m Jolie, a Computer Science student at the University of Toronto. 
                    I love learning new things, and am currently interested in the intersections 
                    of machine learning, cybersecurity, and software development. I’ve collected 
                    experience over the past years through projects, hackathons, certifications, 
                    and a work study! Outside of school, I enjoy typing tests, making 3D paper crafts, 
                    and immersing myself in productivity apps. Thanks for visiting my website!</p>
            </div>
            <h1 className="mt-10">Recents</h1>
            <RecentsCarousel
                images={images}
                descriptions={descriptions}
            />
        </div>
    )
}