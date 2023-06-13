import styled from "styled-components"
import { H2, P } from "./fonts"
import { profileText } from "../data/profile"

const Wrapper = styled.div`
width: 100%
`

const Profile = () => {
    return (
        <Wrapper>
            <H2>Profile</H2>
            <P>
                {profileText}
            </P>
        </Wrapper>
    )
}

export default Profile