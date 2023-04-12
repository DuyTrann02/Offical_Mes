import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import React from 'react';

import '../css/switcher.css'


function Switcher({handleOnClickChangeStatus}){
    
    const [status, setStatus] = React.useState(false);
    const handleOnclickChangeNailDesignView = (e)=>{
          setStatus(false);
          handleOnClickChangeStatus(0);
    }
    const handleOnclickChangeTrainingCourseView = (e)=>{
          setStatus(true);
          handleOnClickChangeStatus(1);
    }


    return(
      
      <Box sx={{display:"flex",justifyContent:"center",marginBottom:"-1px"}}>
        <Box sx={{ width:"20vw", borderBottom:"2px solid black"}}></Box>
        {status===false &&
          <>
          <Box sx={{display:"flex",justifyContent:"center", background:"white"}} className ="switcher"  onClick ={handleOnclickChangeNailDesignView}> <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Concept</Typography></Box>
          <Box sx={{display:"flex",justifyContent:"center", background:"#A9A9A9"}} className ="switcher"  onClick ={handleOnclickChangeTrainingCourseView}><Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Bối cảnh</Typography></Box>
          </>
        }
        {
        status===true &&
          <>
          <Box sx={{display:"flex",justifyContent:"center", background:"#A9A9A9"}} className ="switcher"  onClick={handleOnclickChangeNailDesignView}> <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Concept</Typography></Box>
          <Box sx={{display:"flex",justifyContent:"center", background:"white"}} className ="switcher"  onClick={handleOnclickChangeTrainingCourseView}><Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Bối Cảnh</Typography></Box>
          </>
        }
        <Box sx={{ width:"20vw", borderBottom:"2px solid black"}}></Box>
      </Box>
      
      
    )
}
export default Switcher;