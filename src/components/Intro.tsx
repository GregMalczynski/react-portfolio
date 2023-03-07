import styled from "styled-components";

const Intro:React.FC = () => {

  return(
    <Wrapper>
        <img width="70px" src="./logo.svg" />  
    </Wrapper>
  )
}

export default Intro;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
`