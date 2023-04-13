import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import '../css/slider.css'

function Slider(props){
  
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

    const advertisementList = [
      props.infor.img1,
      props.infor.img2,
      props.infor.img3,
      props.infor.img4,
    ]
   
    const slideContainer = React.useRef(null);
    const currentRadio = React.useRef([]);
    
    let index=0;
    const handleDirectionChange = (event) => {
      index = event.target.value;
      slideContainer.current.style.transform = `translateX(-${slideContainer.current.clientWidth*index}px)`;
    };

    function next(){
      if(index<advertisementList.length-1){
        index++;
      }else{
        index=0;
      }
      currentRadio.current[index].checked=true;
      slideContainer.current.style.transform = `translateX(-${slideContainer.current.clientWidth*index}px)`;
    }

    function prev(){
      if(index===0){
        index= advertisementList.length-1
      }else{
        index--;
      }
      currentRadio.current[index].checked=true;
      slideContainer.current.style.transform = `translateX(-${slideContainer.current.clientWidth*index}px)`;
    }

   
 
    return(
       <Box id ="box1" sx={{display:"flex", width:"100%"}}>
         <Box className='buttonBox1'>
          <ThemeProvider theme={theme}>
          <Button color="primary" className='control1' id='prev1' onClick={prev} sx={{backgroundColor:"rgba(255, 255, 255, 0.7)"}}><ArrowBackIosNewIcon sx={{color:"black"}}/></Button>
          </ThemeProvider>
         
         <Box sx={{display:"flex", alignItems:"flex-end"}}>
          {
            advertisementList.map((image,indexList)=>(
              <input key={indexList} onClick={handleDirectionChange} value={indexList} type="radio" name ="radioGroup1" ref={st=>currentRadio.current[indexList]=st} style={{margin:"2vh", accentColor:"#404040"}} />
              )
            )
          }
         </Box>
         <ThemeProvider theme={theme}>
         <Button color="primary" className='control1' id='next' onClick={next} sx={{backgroundColor:"rgba(255, 255, 255, 0.7)"}}><ArrowForwardIosIcon sx={{color:"black"}}/></Button>
         </ThemeProvider>
         </Box>
         <Box className ='slide-container1'>
           <Box id='slides1'  ref={slideContainer} >
             {
               advertisementList.map((image,index)=>(
                 <div key ={index}>
                    <img src ={image}  alt="" className='slide1'  />
                 </div>
               ))
             }
           </Box>
         </Box>  
       </Box>
    )
}
export default Slider;