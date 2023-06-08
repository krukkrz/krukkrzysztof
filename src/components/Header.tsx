import styled from 'styled-components';
import face from '../assets/face.jpeg';
import { H1 } from './fonts';

const Face = styled.img`
width:300px;
height:300px;
object-fit:cover;
border-radius:50%;
`

const FaceAndName = styled.div`
display: flex;
align-items: center;
gap: 100px
`

const Header = () => {
    return (
        <FaceAndName>
        <Face src={face}></Face>
        <H1>Krzysztof Kruk</H1>
      </FaceAndName>
    )
}

export default Header