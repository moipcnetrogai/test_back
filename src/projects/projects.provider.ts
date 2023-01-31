import { Project } from "./projects.model";

export const ProjectsProviders = [
    {
        provide: 'PROJECTS_REPOSITORY',
        useValue: Project,
    },
];