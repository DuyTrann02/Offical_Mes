import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



        const ConceptData = [
            {id: 0, name:"Tất cả" },
            {id: 1, name:"Trường học" },
            {id: 2, name:"Công viên Yên Sở" },
            {id: 3, name:"Thảo nguyên hoa Long Biên" },
            {id: 4, name:"Làng hoa Quảng Bá" },
            {id: 5, name:"Phố cổ Hà Nội" },
            {id: 6, name:"Nhà thờ lớn" },
            {id: 7, name:"Phim trường Smiley Ville" },
            

        ]

        
function Filter2({getFilter}){
    const [age, setAge] = React.useState(0);
   
   const handleChange = (event) => {
     setAge(event.target.value);
     getFilter(event.target.value)
   };
   
   
    return (
        
        <Box sx={{ width:"20vw", marginTop:"2vh", marginLeft:"40%" }}>
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><b>Lọc</b></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            {
                ConceptData.map((concept)=>(
                    <MenuItem value={concept.id}>{concept.name}</MenuItem>
                ))
            }
        </Select>
      </FormControl>
    </Box>
        
    )
}
export default Filter2;