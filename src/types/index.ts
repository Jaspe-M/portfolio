export interface Project {
    id: string;
    title: string;
    description?: string;
    stack?: string[];
    githubUrl?: string; //if not provided, no github icon.
    liveUrl?: string; //if not provided, no external link icon.
    image?: string;
    stockImage?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string; // e.g. "2023 — Present"
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
