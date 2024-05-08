import { useEffect } from "react";
import Swiper from "swiper";

import 'swiper/css'; 
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box } from "@mui/system";

const Cards = ({data,onClick}) => {
  const bull = (
    <Box
    
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      speed: 100,
      spaceBetween:100,
      // navigation:true,
      initialSlide: 0,
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
   
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    return () => {
      mySwiper.destroy(true, true); 
    };
  }, []);

  return (
    <Box sx={{overflowX:"hidden",minWidth:"47vw"}}>
    
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {data.map((image, index) => (
          <div className="swiper-slide" onClick={onClick} key={index}>
<CardContent sx={{
    minWidth: { xs: '14vw', sm: '10vw', md: '14vw', lg: '18vw' }, 
    maxWidth: { xs: '14vw', sm: '10vw', md: '14vw', lg: '18vw' }, 
    minHeight: { xs: '7xsm', sm: '7xsm', md: '14vw', lg: '23vw' }, 
    backgroundColor: "grey",
    padding: { xs: '4vw 1vw', sm: '4vw 1vw', md: '4vw 1vw', lg: '4vw 1vw' } 
}}>              <img src={image.src} alt={image.label} style={{ width: "8vh", paddingBottom: "3vh" }} />
              <Typography variant="h6">{image.label}</Typography>
              <Typography color="text.secondary">Services</Typography>
              <Typography variant="body2">{image.description}</Typography>
            </CardContent>
          </div>
        ))}

      </div>
    
      <Box sx={{ marginLeft: "24rem", padding: "1vw 0" ,display:"flex"}}>
    <IconButton className="swiper-button-prev" sx={{ borderRadius: "1px", gap: "1vw" }} aria-label="prev">
      <KeyboardArrowLeftIcon  sx={{ bgcolor: "grey", padding: "4px" }} />
    </IconButton>
    <IconButton sx={{ borderRadius: "1px", gap: "1vw" }}   aria-label="prev">

      <KeyboardArrowRightIcon  className="swiper-button-next" sx={{ bgcolor: "#5E69FC", padding: "4px" }} />
      </IconButton>
      

  </Box>
    </div>
    </Box>
  );
};

export default Cards;
