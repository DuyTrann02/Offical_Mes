import Box from '@mui/material/Box'; 
import '../css/header.css'
function Header(){
    return(
        <>
        <Box id="container">
            <img src = "media/Mes_logo.png" id = "logo" alt='chua load dc' />
        </Box>
        <Box sx = {{width:"100vw",height:"2px", backgroundColor:"#9370DB", marginTop:"3px"}}>

        </Box>
        </>
        
    )
}
export default Header;