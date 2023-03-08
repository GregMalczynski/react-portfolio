import styled from "styled-components";
import { colorMode } from "../app-data/colorMode";
import { useEffect, useState, useRef } from "react";

interface Props{
    isDarkMode: any,
}

interface Mode{
    setIsDarkMode: any,
}

const Navigation:React.FC <Props & Mode> = ({isDarkMode, setIsDarkMode}) => {

    const markerWidthInitial = useRef<any>(null)
        
    const [ markerLeft, setMarkerLeft ] = useState(0);
    const [ markerWidth, setMarkerWidth] = useState(0);

    useEffect(() => {
        setMarkerWidth(markerWidthInitial.current?.clientWidth)
    }, [])

    useEffect(() => {  
        const items = document.querySelectorAll('.nav a')
        const indicator = (e: any) => {
            setMarkerLeft(e.offsetLeft)
            setMarkerWidth(e.offsetWidth)
        }
        items.forEach(link => {
            link.addEventListener('click', (e) => {
                indicator(e.target)
            })
            return () => link.removeEventListener('click', (e) => {indicator(e.target)})
        })  
    }, [])

    console.log(markerWidthInitial?.current?.clientWidth)
    
    return(
        <Wrapper isDarkMode={isDarkMode}>
            <Background>
            <Logo>
                <a href="#start"><img width="40px" src="./logo.svg"/></a>
            </Logo>
            <RightSide>
                <MenuTop className="nav" isDarkMode={isDarkMode}>
                    <div className="marker" style={{left: `${markerLeft}px`, width: `${markerWidth}px`}}></div>
                    <a ref={markerWidthInitial} href="#">HOME</a>
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
                <Language>
                    EN  |  PL
                </Language>
            </RightSide>
            </Background>
        </Wrapper>
    )
}
  
export default Navigation;

const Wrapper = styled.div<Props>`
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`
const Logo = styled.div`
  
    margin-left: 50px;
`
const RightSide = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
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
const Language = styled.div`
    width: 70px;
    color: white;
`
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    background-color: rgb(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(15px);
`