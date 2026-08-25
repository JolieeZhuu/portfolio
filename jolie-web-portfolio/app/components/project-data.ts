import ArtLog from "@/app/components/project-components/art-log";
import MLF from "@/app/components/project-components/mlf";
import TAAM from "@/app/components/project-components/taam";
import PathoQuery from "@/app/components/project-components/patho-query";
import TheTale from "@/app/components/project-components/the-tale";

export interface ProjectProps {
    id: number,
    title: string,
    desc: string,
    image: string[],
    component: React.ComponentType
}

export const projects = [
    {
        id: 7,
        title: "Art Log (July 2024 - Present)",
        desc: "Art Log is a web application I am currently building for the front-desk workers at my local art studio. It is intended to automate tasks for the front-desk workers, such managing student attendances and payment processes. It features a RBAC system (admin, IT, general user), automatic announcement calls, search tables on students and classes, and studio-related statistics and summaries.",
        image: ["/images/artlog.png", "cat image"],
        component: ArtLog
    },
    {
        id: 6,
        title: "MLF 2026 (January 2026 - Present)",
        desc: "MLF 2026 (Machine Learning Fundamentals 2026) is a project I am working on with a couple other U of T students, where we're developing an application that measures the volume of any object given either a video or a sequence of images. This requires knowledge of stereovision, camera intrinsics, and a bit of ML to estimate the feature-matching accurately with a small supply of frames.",
        image: ["/images/mlf.png", "cat image"],
        component: MLF
    },
    {
        id: 5,
        title: "TAAM Inventory Management System (July 2026 - August 2026)",
        desc: "The TAAM Inventory Management System is a project for course CSCB07, where our team created an Android application that allows both admins and users to view artifacts from the museum digitally. It offers several user interactions (i.e. likes, comments, save-to-collection). This application relies on clean architecture, software design principles, robust testing, and clean UI/UX, allowing for ease of extendibility and reusability.",
        image: ["/images/TAAM.png", "image of TAAM logo"],
        component: TAAM
    },
    {
        id: 4,
        title: "PathoQuery (March 2026)",
        desc: "PathoQuery is an AI-powered platform designed to help to general public visualize the spread of viral diseases and learn about viral behaviour, built for GenAI Genesis. It utilizes a custom RAG model we designed to extract medical information from credible sources (i.e. journal articles), and features stage-to-stage animations of how particular diseases progress through the human body.",
        image: ["/images/PathoQuery.png", "image of PathoQuery dashboard"],
        component: PathoQuery
    },
    {
        id: 3,
        title: "The Tale of Two Sequences and Fingerprints (March 2026)",
        desc: "The Tale (for short) is a forensics support system for BacsaHacks that takes in information about the crime and potential suspects of a particular crime scene (notably fingerprints and DNA samples), and ranks the most likely suspect. It offers streamlined UI experience, an automatically generated case report, and additional analysis tools and information extracted from the primary sources.",
        image: ["/images/TheTale.png", "image of TheTale dashboard"],
        component: TheTale
    },
    // {
    //     id: 2,
    //     title: "Send It (January 2026 - February 2026)",
    //     desc: "Send It is a project for UTRAHacks 2026 where our team built a line follower robot from scratch using PID (Proportional-Integral-Derivative).",
    //     image: ["/images/adopting-a-cat-2048px-06052.webp", "cat image"],
    //     component: MLF
    // }
]