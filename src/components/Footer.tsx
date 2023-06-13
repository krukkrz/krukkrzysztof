import styled from 'styled-components'
import { footerText } from '../data/footer'
import { Bold } from './fonts'

const FooterText = styled(Bold)`
margin-top: 100px;
`

const Footer = () => {
    return (
        <FooterText>{footerText}</FooterText>
    )
}

export default Footer