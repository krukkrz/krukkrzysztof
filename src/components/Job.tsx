import styled from "styled-components"
import { Bold, H3, Italic } from "./fonts"
import { JobProps } from "../data/jobs"

const Wrapper = styled.div`
    font-size: 20px;
    line-height: 1.6;
    break-inside: avoid;
`

const Job = ({company, role, from, to, responsibilites}: JobProps) => {
    return (
        <Wrapper>  
            <H3>{company}</H3>
            <Bold>role:</Bold> {role} [ <Italic>{from} - {to}</Italic> ]
            <br/>
            <Bold>responsibilities: </Bold>
            <ul style={{lineHeight: 1.6}}>
                {responsibilites.map(r => <li>{r}</li>)}
            </ul>
        </Wrapper>
    )
}

export default Job