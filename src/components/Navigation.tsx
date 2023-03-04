import styled from "styled-components";

interface Props{
    styles: any,
    colorMode: any
}

const Navigation:React.FC <Props> = ({...args}) => {

    const {darkMode, brightMode} = args.colorMode
    const {h1} = args.styles

    return(
        <div>
            <h1>Navigation</h1>     
        </div>
    )
}
  
export default Navigation;