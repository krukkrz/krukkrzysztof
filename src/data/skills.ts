
export type Skill = {
    name: string;
    level: level;
}

export enum level {
    basic = 'basic',
    intemediate = 'intermediate',
    advanced = 'advanced',
}


export const skills: Skill[] = [
    {
        name: 'Spring Boot',
        level: level.advanced
    },
    {
        name: 'Java 11',
        level: level.advanced
    },
    {
        name: 'Go',
        level: level.advanced
    },
    {
        name: 'Typescript',
        level: level.intemediate
    },
    {
        name: 'Docker',
        level: level.intemediate
    },
    {
        name: 'TDD',
        level: level.intemediate
    },
    {
        name: 'SQL',
        level: level.intemediate
    },
    {
        name: 'gRPC',
        level: level.intemediate
    },
    {
        name: 'GraphQL',
        level: level.intemediate
    },
    {
        name: 'Apache Kafka',
        level: level.basic
    },
    {
        name: 'ReactJS',
        level: level.basic
    },
    {
        name: 'Serverless framework',
        level: level.basic
    }
]