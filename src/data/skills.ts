import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGoland,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiMui,
  SiDocker,
  SiGit,
  SiCplusplus,
  SiJavascript
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  level: number;
  category: "Languages" | "Frontend" | "Backend" | "Database & DevOps";
  description: string;
}

export const skillsData: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 90,
    category: "Languages",
    description: "Primary language for frontend and backend web applications. Strong focus on type safety and object-oriented architecture."
  },
  {
    name: "Golang",
    icon: SiGoland,
    level: 80,
    category: "Languages",
    description: "Used for high-performance backend microservices, encryption pipelines, concurrent systems, and REST/gRPC APIs."
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 92,
    category: "Languages",
    description: "Core language used extensively for UI logic, DOM manipulation, asynchronous operations, and legacy scripts."
  },
  {
    name: "C++",
    icon: SiCplusplus,
    level: 75,
    category: "Languages",
    description: "Experienced in object-oriented structures, algorithms, memory management, and competitive programming challenges."
  },

  // Frontend
  {
    name: "React",
    icon: SiReact,
    level: 90,
    category: "Frontend",
    description: "Expertise in functional components, hooks, custom hooks, React Query, context API, and advanced state management."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 85,
    category: "Frontend",
    description: "Proficient in Next.js App Router, Server-Side Rendering (SSR), API routes, middlewares, and layouts."
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    category: "Frontend",
    description: "Utilized for rapid development of responsive, sleek utility-first layout styling and custom components."
  },
  {
    name: "Material UI (MUI)",
    icon: SiMui,
    level: 88,
    category: "Frontend",
    description: "Deeply experienced in theme customization, styled components, responsive layouts, grids, and complex dialog systems."
  },

  // Backend
  {
    name: "NestJS",
    icon: SiNestjs,
    level: 85,
    category: "Backend",
    description: "Used for scalable, enterprise-level modular backend architectures, integrating TypeORM, Mongoose, and guards/interceptors."
  },

  // Database & DevOps
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: 82,
    category: "Database & DevOps",
    description: "Design relational models, writing optimized SQL queries, indexes, joins, and utilizing ORMs like Prisma."
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 85,
    category: "Database & DevOps",
    description: "Sleek document database integration for flexible schema structures, aggregations, and high-read volume systems."
  },
  {
    name: "Docker",
    icon: SiDocker,
    level: 75,
    category: "Database & DevOps",
    description: "Containerizing backend and frontend environments for predictable local development and production deployments."
  },
  {
    name: "Git & Version Control",
    icon: SiGit,
    level: 88,
    category: "Database & DevOps",
    description: "Advanced branching workflows (Git Flow, Trunk Based), merging, rebasing, and collaborating on repository codebases."
  }
];
