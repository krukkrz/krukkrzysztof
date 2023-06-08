import styled from "styled-components"
import { H2, P } from "./fonts"

const Wrapper = styled.div`
width: 100%
`

const Profile = () => {
    return (
        <Wrapper>
            <H2>Profile</H2>
            <P>
                I am a highly skilled software engineer with 4 years of commercial experience in developing and delivering software solutions. My expertise lies in Java and Go programming languages, and I have a strong focus on building software products that are user-centric and meet the needs of the target audience. I believe that a product-centric approach is crucial for shaping software solutions and strive to put the needs of the end users at the forefront of every project I work on. 
            </P>
        </Wrapper>
    )
}

export default Profile