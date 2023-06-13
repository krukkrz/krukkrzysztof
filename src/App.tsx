import './App.css';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Cv from './components/Cv';
import styled from 'styled-components';

const ContentWrapper = styled.div`
padding-bottom: 100px;
padding-top: 100px;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const Button = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
font-size: 30px;
text-decoration: underline;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
`

const App = () => {
  const componentRef = useRef(null);
  
  return (
    <Wrapper>
      <ContentWrapper ref={componentRef}>
        <Cv/>
      </ContentWrapper>
      <ReactToPrint
        trigger={() => <Button>Print this cv</Button>}
        content={() => componentRef.current}
      />
    </Wrapper>
  );
}

export default App;
