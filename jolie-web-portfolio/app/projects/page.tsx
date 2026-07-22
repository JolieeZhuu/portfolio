import ProjectCard from "../components/project-card"

export default function Projects() {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <ProjectCard
                    projectTitle="Art Log"
                    projectDescription="Art Log is a web application I am currently building for the admins 
                    at my local art studio. It is intended to automate tasks for the front-desk workers, 
                    such managing student attendances and payment processes. It features a RBAC system, 
                    automatic announcement calls, search tables on students and classes, and studio-related 
                    statistics."
                />
                <ProjectCard
                    projectTitle="MLF"
                    projectDescription="Blah blah"
                />
            </div>
        </div>
    )
}