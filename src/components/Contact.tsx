import styled from "styled-components";
import { A, Bold, Li } from "./fonts";


const Wrapper = styled.div`
width: 100%
`

type Channel = {
    name: string;
    details: string;
    href: string;
}

const List = (props: {channels: Channel[]}) => {
    const mapToList = props.channels.map(c => {
        return <Li>
                <Bold>{c.name}</Bold> 
                &nbsp;
                <A href={c.href}>{c.details}</A>
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
            <List channels={[
                {
                    name: 'github',
                    details: 'https://github.com/krukkrz',
                    href: 'github.com/krukkrz'
                },
                {
                    name: 'medium',
                    details: 'https://medium.com/@krzysztof-t-kruk',
                    href: 'medium.com/@krzysztof-t-kruk'
                },
                {
                    name: 'email',
                    details: 'krzysztof.t.kruk@gmail.com',
                    href: 'mailto:krzysztof.t.kruk@gmail.com'
                },
                {
                    name: 'phone',
                    details: '+48 792 232 304',
                    href: 'tel:+48792232304'
                }
            ]}/>
        </Wrapper>
        
    )
}

export default Contact