"use client"

import ProjectCard from "@/app/components/project-card"
import ProjectSidePage from "@/app/components/project-side-page"
import { projects } from "@/app/components/project-data"
import { ProjectProps } from "@/app/components/project-data"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"


export default function Projects() {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    //isSidePageOpen = selectedProject !== null;

    function clickShowMore(project: ProjectProps) {
        setSelectedProject(project);
        setIsOpen(true);
    }
    
    return (
        <div>
            <div className="flex flex-row gap-10 w-full pt-5">
                <div className="flex flex-col gap-20 transition-all duration-300">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <ProjectCard
                                projectTitle={project.title}
                                image={project.image}
                                projectDescription={project.desc}
                                onShowMore={() => clickShowMore(project)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* {
                isSidePageOpen ? (
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-10 w-[50vw]">
                            <div className="flex flex-row justify-between">
                                <ProjectCard
                                    projectTitle="Art Log (July 2024 - Present)"
                                    image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                    projectDescription="Art Log is a web application I am currently building for the admins 
                                    at my local art studio. It is intended to automate tasks for the front-desk workers, 
                                    such managing student attendances and payment processes. It features a RBAC system, 
                                    automatic announcement calls, search tables on students and classes, and studio-related 
                                    statistics."
                                    isSidePageOpen={isSidePageOpen}
                                    setIsSidePageOpen={setIsSidePageOpen}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <ProjectCard
                                    projectTitle="MLF 2026 (January 2026 - Present)"
                                    image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                    projectDescription="Blah blah"
                                    isSidePageOpen={isSidePageOpen}
                                    setIsSidePageOpen={setIsSidePageOpen}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <ProjectCard
                                    projectTitle="MLF 2026 (January 2026 - Present)"
                                    image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                    projectDescription="Blah blah"
                                    isSidePageOpen={isSidePageOpen}
                                    setIsSidePageOpen={setIsSidePageOpen}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <ProjectCard
                                    projectTitle="MLF 2026 (January 2026 - Present)"
                                    image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                    projectDescription="Blah blah"
                                    isSidePageOpen={isSidePageOpen}
                                    setIsSidePageOpen={setIsSidePageOpen}
                                />
                            </div>
                        </div>
                        <div className="w-[50vw] border-l pl-10">
                            <Button variant="outline" size="icon" onClick={() => closeSidePage()}>
                                <ArrowRightIcon/>
                            </Button>
                            <ProjectSidePage/>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-row justify-between">
                            <ProjectCard
                                projectTitle="Art Log (July 2024 - Present)"
                                image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                projectDescription="Art Log is a web application I am currently building for the admins 
                                at my local art studio. It is intended to automate tasks for the front-desk workers, 
                                such managing student attendances and payment processes. It features a RBAC system, 
                                automatic announcement calls, search tables on students and classes, and studio-related 
                                statistics."
                                isSidePageOpen={isSidePageOpen}
                                setIsSidePageOpen={setIsSidePageOpen}
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <ProjectCard
                                projectTitle="MLF 2026 (January 2026 - Present)"
                                image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                projectDescription="Blah blah"
                                isSidePageOpen={isSidePageOpen}
                                setIsSidePageOpen={setIsSidePageOpen}
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <ProjectCard
                                projectTitle="MLF 2026 (January 2026 - Present)"
                                image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                projectDescription="Blah blah"
                                isSidePageOpen={isSidePageOpen}
                                setIsSidePageOpen={setIsSidePageOpen}
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <ProjectCard
                                projectTitle="MLF 2026 (January 2026 - Present)"
                                image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                                projectDescription="Blah blah"
                                isSidePageOpen={isSidePageOpen}
                                setIsSidePageOpen={setIsSidePageOpen}
                            />
                        </div>
                    </div>
                )
            } */}

                {
                    selectedProject && (
                        <div>
                            {/* <Button variant="outline" size="icon" onClick={() => setSelectedProject(null)}>
                                <ArrowRightIcon/>
                            </Button> */}
                            {/* <ProjectSidePage project={selectedProject}/> */}
                            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                <DialogContent className="xl:max-w-xl !max-w-fit text-base p-10">
                                    <DialogHeader>
                                        <DialogTitle className="text-xl text-[var(--secondary)] font-medium">{selectedProject.title}</DialogTitle>
                                    </DialogHeader>
                                    <div className="leading-normal max-h-[50vh] overflow-y-auto">
                                        <ProjectSidePage project={selectedProject}/>
                                    </div>
                                    {/* <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                    </DialogHeader> */}
                                <DialogFooter>
                                    <DialogClose render={<Button className="p-4 rounded-md text-base text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">close</Button>} />
                                </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    )
                }
        </div>
    )
}