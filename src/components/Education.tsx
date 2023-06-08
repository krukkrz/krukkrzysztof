import styled from "styled-components"
import { Bold, H2 } from "./fonts"


const Wrapper = styled.div`
width: 100%
`

const Education = () => {
    return (
        <Wrapper>
            <H2>Education</H2>
            <ul style={{lineHeight: 1.6}}>
                <li>
                    <Bold>Aalborg University</Bold> - Entrepreneurial Engineering
                </li>
                <li>
                    <Bold>Lodz University of Technology</Bold> - Power Engineering
                </li>
            </ul>
        </Wrapper>
    )
}

export default Education