import { Status } from "./status.model";

export const StatusesProviders = [
    {
        provide: 'STATUSES_REPOSITORY',
        useValue: Status,
    },
];