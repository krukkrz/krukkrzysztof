import styled from "styled-components"
import { H2, Italic, Li } from "./fonts"
import { Skill, skills } from "../data/skills"

const Wrapper = styled.div`
width: 100%
`

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
            <List skills={skills}/>
        </Wrapper>
    )
}

export default Skills