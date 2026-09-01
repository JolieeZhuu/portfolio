import React from "react"
import { ProjectProps } from "./project-data";

interface ProjectSidePageProps {
    project: ProjectProps
}

export default function ProjectSidePage({ project } : ProjectSidePageProps) {
    const ProjectComponent = project.component;
    return (
        <div>
            { ProjectComponent && <ProjectComponent/> }
        </div>
    )
}