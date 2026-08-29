import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: "proj-1",
        title: "Finance Software",
        description: "This is my interface for monitoring company spending, managing department budget allocations, and handling invoice approvals.",
        stack: ["React.js", "Java" , "Spring Boot" , "PostgreSQL"],
        githubUrl: "https://github.com/Jaspe-M/invoice-tracker-frontend",
        liveUrl: "https://novatech-finance.vercel.app/",
        image: "/images/stock1.png",
        stockImage: "/images/project1.png"
    },
    {
        id: "proj-2",
        title: "Portfolio",
        description: "My personal developer portfolio, built to highlight my skills and showcase recent projects",
        stack: ["React.js", "TypeScript", "Vite", "CSS"],
        githubUrl: "https://github.com/yourname/project-two",
        stockImage: "/images/project2.jpg" },
];