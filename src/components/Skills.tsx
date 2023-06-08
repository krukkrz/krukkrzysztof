import styled from "styled-components"
import { H2, Italic, Li } from "./fonts"

const Wrapper = styled.div`
width: 100%
`

type Skill = {
    name: string;
    level: level;
}

enum level {
    basic = 'basic',
    intemediate = 'intermediate',
    advanced = 'advanced',
}

const List = (props: {skills: Skill[]}) => {
    const mapToList = props.skills.map(s => {
        return <Li>
               {s.name} 
               &nbsp;
               &nbsp;
               <Italic>{s.level}</Italic>
            </Li>
    })
    return (
        <ul>
            {mapToList}
        </ul>
    )
}

const Skills = () => {
    return (
        <Wrapper>
            <H2>Skills</H2>
            <List skills={[
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
            ]}/>
        </Wrapper>
    )
}

export default Skills