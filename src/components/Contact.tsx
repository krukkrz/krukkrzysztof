import styled from "styled-components";
import { A, Bold, Li } from "./fonts";
import { ContactData, channels } from "../data/contact";


const Wrapper = styled.div`
width: 100%
`

const List = (props: {channels: ContactData[]}) => {
    const mapToList = props.channels.map(c => {
        return <Li>
                <Bold>{c.name}</Bold> 
                &nbsp;
                <A href={c.href} target='_blank'>{c.displayLink}</A>
            </Li>
    })
    return (
        <ul>
            {mapToList}
        </ul>
    )
}

const Contact = () => {
    return (
        <Wrapper>
            <List channels={channels}/>
        </Wrapper>
        
    )
}

export default Contact