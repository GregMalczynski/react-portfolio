import styled from "styled-components";
import { colorMode } from "../app-data/colorMode";

interface Props{
    isDarkMode: any,
}

interface Mode{
    setIsDarkMode: any,
}


const Navigation:React.FC <Props & Mode> = ({isDarkMode, setIsDarkMode}) => {

    return(
        <Wrapper isDarkMode={isDarkMode}>
            <Logo>
                <a href="#"><img width="40px" src="./logo.svg"/></a>
            </Logo>
            <MenuTop isDarkMode={isDarkMode}>
                <a href="#">HOME</a>
                <a href='#about'>ABOUT</a>
                <a href='#experience'>EXPERIENCE</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#contact">CONTACT</a>
            </MenuTop>
            <ColorMode>
                <div>
                    <button onClick={() => setIsDarkMode(!isDarkMode)}>click</button>
                </div>
            </ColorMode>
        </Wrapper>
    )
}
  
export default Navigation;

const Wrapper = styled.div<Props>`
    width: 100%;
    height: 70px;
    background: ${(props: any) => props.isDarkMode ? colorMode.darkMode.backgroundColor : colorMode.brightMode.backgroundColor};
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
`
const MenuTop = styled.div<Props>`
    display: flex;
    flex-direction: row;
    gap: 40px;
    a{
        text-decoration: none;
        color: ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
    }
`
const ColorMode = styled.div`
    width: 80px;
    background-color: white;
`