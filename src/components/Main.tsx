import { styles } from "../app-data/styles";
import { colorMode } from "../app-data/colorMode";
import { useState } from 'react';
import styled from "styled-components";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";


interface Props{
    darkMode: any
}

const Main:React.FC = () => {

    const [ darkMode, setDarkMode ] = useState(true)

    return(
        <Wrapper darkMode={darkMode} >
            <Navigation 
                styles={styles} 
                colorMode={colorMode}
            />
            <Home />
            <About />    
        </Wrapper>
    )
}
  
export default Main;

const Wrapper = styled.div<Props>`
    width: 100vw;
    background: ${(props: any) => props.darkMode ? styles.darkMode.backgroundColor : styles.brightMode.backgroundColor};
`