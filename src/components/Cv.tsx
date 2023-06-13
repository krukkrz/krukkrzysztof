import styled from "styled-components"
import Contents from "./Contents"

const margin = 40

const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding-left: 20px;
padding-right: 20px;
gap: 30px;
font-size: 20px;
@page {
  margin-top: ${margin}px !important;
  margin-bottom: ${margin}px !important;
}
`

const Cv = () => {
    return (
        <Page>
          <Contents/>
        </Page>
    )
}

export default Cv