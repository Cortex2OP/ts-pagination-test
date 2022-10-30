import styled from "styled-components";

const StyledImage = styled.div({
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "40px"
})

const StyledImageImg = styled.img ({
    boxShadow: "0px 3px 57px 0px rgb(0 0 0 / 36%)",
    borderRadius: "10px"
})


const Image: React.FC = () => {
    let baseUrl = "https://picsum.photos/720/720?random=";

    return (
        <StyledImage className="image-wrapper">
            <StyledImageImg src={baseUrl + Math.random() * 100000}></StyledImageImg>
        </StyledImage>
    )
    }

export default Image;

