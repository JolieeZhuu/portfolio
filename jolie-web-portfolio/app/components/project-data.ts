import ArtLog from "@/app/components/project-components/art-log";
import MLF from "@/app/components/project-components/mlf";

export interface ProjectProps {
    id: number,
    title: string,
    desc: string,
    image: string[],
    component: React.ComponentType
}

export const projects = [
    {
        id: 1,
        title: "Art Log (July 2024 - Current)",
        desc: "Art Log is a web application I am currently building for the admins at my local art studio. It is intended to automate tasks for the front-desk workers, such managing student attendances and payment processes. It features a RBAC system, automatic announcement calls, search tables on students and classes, and studio-related statistics.",
        image: ["/images/adopting-a-cat-2048px-06052.webp", "cat image"],
        component: ArtLog
    },
    {
        id: 2,
        title: "MLF 2026 (January 2026 - Present)",
        desc: "Art Log is a web application I am currently building for the admins at my local art studio. It is intended to automate tasks for the front-desk workers, such managing student attendances and payment processes. It features a RBAC system, automatic announcement calls, search tables on students and classes, and studio-related statistics.",
        image: ["/images/adopting-a-cat-2048px-06052.webp", "cat image"],
        component: MLF
    },
    {
        id: 3,
        title: "MLF 2026 (January 2026 - Present)",
        desc: "Art Log is a web application I am currently building for the admins at my local art studio. It is intended to automate tasks for the front-desk workers, such managing student attendances and payment processes. It features a RBAC system, automatic announcement calls, search tables on students and classes, and studio-related statistics.",
        image: ["/images/adopting-a-cat-2048px-06052.webp", "cat image"],
        component: MLF
    },
    {
        id: 4,
        title: "MLF 2026 (January 2026 - Present)",
        desc: "Art Log is a web application I am currently building for the admins at my local art studio. It is intended to automate tasks for the front-desk workers, such managing student attendances and payment processes. It features a RBAC system, automatic announcement calls, search tables on students and classes, and studio-related statistics.",
        image: ["/images/adopting-a-cat-2048px-06052.webp", "cat image"],
        component: MLF
    }
]