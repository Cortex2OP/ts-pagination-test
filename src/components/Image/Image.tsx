import styled from "styled-components";

interface IImage {
    url: string
}

const StyledImage = styled.div({
    display: "flex",
    paddingTop: "10px",
    //paddingBottom: "40px",,
    padding: "25px"
})

const StyledImageImg = styled.img ({
    boxShadow: "0px 3px 57px 0px white",
    borderRadius: "10px",
    maxWidth: "20vw",
    padding: "20px",
    alignSelf: "center",
    backgroundColor: "white",
    
})

//const TestImg = styled.img<{visible?: boolean}>`
//    display: ${props=>props.visible ?"block":"none"};
//    width: 20px;
//
//`

const Image: React.FC<IImage> = (props) => {

    return (
        <StyledImage className="image-wrapper">
            <StyledImageImg src={props.url}></StyledImageImg>
        </StyledImage>
    )
    }

export default Image;

