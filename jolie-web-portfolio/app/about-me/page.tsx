import RecentsCarousel from "../components/recents"

export default function AboutMe() {
    return (
        <div>
            <div className="flex flex-row gap-10">
                <p>image</p>
                <p>Hi! I’m Jolie, a Computer Science student at the University of Toronto. 
                    I love learning new things, and am currently interested in the intersections 
                    of machine learning, cybersecurity, and software development. I’ve collected 
                    experience over the past years through projects, hackathons, certifications, 
                    and a work study! Outside of school, I enjoy typing tests, making 3D paper crafts, 
                    and immersing myself in productivity apps. Thanks for visiting my website!</p>
            </div>
            <h1 className="mt-10">Recents</h1>
            <RecentsCarousel/>
        </div>
    )
}