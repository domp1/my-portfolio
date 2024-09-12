import { styled } from "@mui/material"


const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        color: "white"
    }))
    
    return (
      <>
        <StyledHero>Hero</StyledHero>
      </>
    )
  }
  
  export default Hero