import SingleBoiCanh from "./SingleBoiCanh";
import { Box } from "@mui/system";


const conCeptData = 
    [
        {id:1,name: "Updating.. ", description:"Updating...", more:"here",image:"media/test.jpg", img1:"media/test.jpg",img2:"media/test.jpg",img3:"media/test.jpg",img4:"media/test.jpg"},
        
      
    ];


function BoiCanh(){
    
    return(
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around",  alignItems:"center"}}>
        <Box sx={{width:"100%", height:"5vh"}}></Box>
        {
            conCeptData.map((boicanh)=>(
                <Box key={boicanh.id} sx={{marginTop:"4vh"}}>
                <SingleBoiCanh infor={boicanh} />
                </Box>  
            ))
        }
        
        </Box>
    )
}
export default BoiCanh;