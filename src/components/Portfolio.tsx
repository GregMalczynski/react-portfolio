import styled from "styled-components";
import { styles } from "../app-data/styles";
import { colorMode } from "../app-data/colorMode";

interface Props{
    isDarkMode: any,
}

const Portfolio:React.FC<Props> = ({isDarkMode}) => {

    return(
        <Wrapper id="portfolio">
            <Section isDarkMode={isDarkMode}>
                <div style={{lineHeight: '5.2rem'}}>
                    <h1 style={{fontSize: styles.h1}}>Portfolio</h1>
                </div>
                <div style={{lineHeight: '30px'}}>
                    <h4 style={{fontSize: styles.h4, fontWeight: 400}}>Front-End Developer</h4>
                    <h4 style={{fontSize: styles.h4, fontWeight: 400}}>/ Graphic Designer</h4>
                </div>              
            </Section>
        </Wrapper>
    )
}

export default Portfolio;

const Wrapper = styled.div`
    height: 100vh;
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Section = styled.div<Props>`
    color: ${(props: any) => props.isDarkMode ? colorMode.darkMode.color : colorMode.brightMode.color};
`