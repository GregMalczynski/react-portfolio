import { styles } from "../app-data/styles";
import { colorMode } from "../app-data/colorMode";
import { useState } from 'react';
import styled from "styled-components";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";


interface Props{
    isDarkMode: any,
}

const Main:React.FC = () => {

    const [ isDarkMode, setIsDarkMode ] = useState<any>(true)

    return(
        <Wrapper isDarkMode={isDarkMode}>
            <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            <Home isDarkMode={isDarkMode}/>
            <About isDarkMode={isDarkMode}/> 
            <Experience isDarkMode={isDarkMode}/>
            <Portfolio isDarkMode={isDarkMode}/>  
        </Wrapper>
    )
}
  
export default Main;

const Wrapper = styled.div<Props>`
    width: 100%;
    background: ${(props: any) => props.isDarkMode ? colorMode.darkMode.backgroundColor : colorMode.brightMode.backgroundColor};
`