import styled from "styled-components";
import { styles } from "../app-data/styles";
import { colorMode } from "../app-data/colorMode";

interface Props{
    isDarkMode: any,
}

const Experience:React.FC<Props> = ({isDarkMode}) => {

    return(
        <Wrapper id="experience">
            <SectionLeft isDarkMode={isDarkMode}>
                <div style={{lineHeight: '5.2rem'}}>
                    <h2 style={{fontSize: styles.h2}}>My</h2>
                    <h1 style={{fontSize: styles.h1}}>Experience</h1>
                </div>
                <div style={{lineHeight: '30px'}}>
                    <h4 style={{fontSize: styles.h4, fontWeight: 400}}>Front-End Developer</h4>
                    <h4 style={{fontSize: styles.h4, fontWeight: 400}}>/ Graphic Designer</h4>
                </div>
                <a href="#about">
                    <Button isDarkMode={isDarkMode}>
                        You want know me ?
                    </Button>
                </a>                 
            </SectionLeft>
            <SectionRight>
                <Image>
                    <img src="./bike.svg" />
                </Image>
            </SectionRight>
        </Wrapper>
    )
}

export default Experience;

const Wrapper = styled.div`
    position: absolute
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 50px;
`
const SectionLeft = styled.div<Props>`
    width: 60%;
    height: 100vh;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 1rem;
    color: ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
`
const Button = styled.button<Props>`
    margin-top: 30px;
    width: 220px;
    height: 40px;
    cursor: pointer;
    border: 3px solid ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
    background: none;
    color: ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
    transition: 0.2s ease-in-out;

    &:hover {
        background: ${(props: any) => props.isDarkMode ? colorMode.brightMode.backgroundColor : colorMode.darkMode.backgroundColor};
        color: ${(props: any) => props.isDarkMode ? colorMode.brightMode.color : colorMode.darkMode.color}
    }
`
const SectionRight = styled.div`
    height: 100vh;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Image = styled.div`
    img{
        width: 100%;
        max-width: 690px;
    }
`