import { Box } from "@mui/system";
import "../css/conceptSingle.css"
import SliderDialog from "./dialog";

function SingleConcept(props){
  
    return(
        <>
        <Box sx ={{width:"70vw", height:"30vh", background:"rgba(147,112,219,0.4)", border:"1px solid black", display:"flex"}}>
            <Box sx = {{width:"40vw",height:"30vh"}}>
                <Box sx={{width:"28vw", height:"37px", backgroundColor:"black", clipPath:"polygon(0% 0%, 100% 0%, 100% 52%, 92% 100%, 0% 100%)", padding:"3px"}}>
                   <Box sx={{width:"27.9vw", height:"36px", backgroundColor:"white", clipPath:"polygon(0% 0%, 100% 0%, 100% 50%, 93% 100%, 0% 100%)", display:"flex", justifyContent:"space-around",alignItems:"center"}}>
                       <b>{props.infor.name}</b> 
                   </Box>
                </Box>
                
                <Box sx={{ textAlign:"left", marginLeft:"4vw", width:"35vw",marginTop:"3vh"}}>
                   {props.infor.description}
                </Box>
            </Box>
            <Box sx={{width:"25vw"}}>
                <img src={props.infor.image} alt="chưa load được" className="img"/>
            </Box>
        </Box>
        <Box sx={{border:"1px solid black", width:"70vw"}}>
        <SliderDialog infor={props.infor}/>
        </Box>
        </>
    )
}
export default SingleConcept;