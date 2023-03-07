import styled from "styled-components"
import { styles } from "../app-data/styles";
import { colorMode } from "../app-data/colorMode";
import { Fade, Slide } from "react-awesome-reveal";

interface Props{
    isDarkMode: any,
}

const About:React.FC<Props> = ({isDarkMode}) => {

    return(
        <Wrapper id="about">
            <SectionLeft isDarkMode={isDarkMode}>
                <Image>
                    <img src="./bike.svg" />
                </Image>
            </SectionLeft>
            <SectionRight isDarkMode={isDarkMode}>
                <Title>
                    <div style={{lineHeight: '5.2rem'}}>
                        <h1 style={{fontSize: styles.h1}}>About</h1>
                    </div>
                </Title>  
                <Text>
                    <p>
                        Front-End Developer with <b>2 years of experience as a freelancer, and graphic designer and designer with over 10 years of experience.</b> 
                        I was exposed to the broader concept of computer science as early as elementary school through Basic and Pascal programming, 
                        which allowed me to understand the mechanics of how code works, as well as computer graphics. 
                        Later I focused more on 2D / 3D computer graphics, MacromediaFlash technology and corporate identity resulting in the implementation 
                        of <b>more than 100 projects for international clients ( website design, branding, animation ).</b>  
                        I also ran an online store on the PrestaShop platform in which, among other things, I introduced new functionalities, modules, 
                        integrations and updates.<br /><br />
                        Over time, however, I found that the wolf is drawn to the forest and the desire to create, build ( graphics, UI design, coding ) 
                        caused me to explore the secrets of Web-Developer. From time to time as a Freelancer I do small projects, but I would like 
                        to participate in something bigger, develop myself, learn new technologies in this field.<br /><br />
                        In my free time, I love mountain biking, running and realizing my creativity in music production. 
                    </p><br />
                    <h4 style={{fontSize: styles.h4, fontWeight: 400}}>Technologies what I used</h4><br />
                    <TechnologiesWrapper isDarkMode={isDarkMode}>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                        </div>
                        <div>
                            <p>React JS</p>
                            <p>Styled-Components</p>
                        </div>
                        <div>
                            <p>Figma</p>
                            <p>AdobeXD</p>
                            <p>Adobe Illustrator</p>
                            <p>Adobe Photoshop</p>
                            <p>SketchUp</p>
                        </div>
                    </TechnologiesWrapper>
                </Text>      
            </SectionRight>
            
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
`
const SectionRight = styled.div<Props>`
    width: 55%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 2rem;
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
const SectionLeft = styled.div<Props>`
    width: 40%;
    display: flex;
    color: ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
`
const Title = styled.div`
   
`
const Text = styled.div`
    
`
const TechnologiesWrapper = styled.div<Props>`
    display: flex;
    flex-direction: row;
    width: 600px;
    color: ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
    gap: 80px;
    line-height: 25px;
`
const Image = styled.div`
    img{
        width: 100%;
        max-width: 600px;
    }
`