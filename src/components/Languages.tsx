import styled from "styled-components"
import { Bold, H2 } from "./fonts"


const Wrapper = styled.div`
width: 100%
`

const Languages = () => {
    return (
        <Wrapper>
            <H2>Languages</H2>
            <ul style={{lineHeight: 1.6}}>
                <li>
                    Polish - native
                </li>
                <li>
                    English - fluent
                </li>
            </ul>
        </Wrapper>
    )
}

export default Languages