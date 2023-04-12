import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



        const ConceptData = [
            {id: 0, name:"Tất cả" },
            {id: 1, name:"Áo dài" },
            {id: 2, name:"Việt phục/Cổ phục" },
            {id: 3, name:"Cử nhân" },
            {id: 4, name:"Cô ba Sài Gòn" },
            {id: 5, name:"Kingsman" },
            {id: 6, name:"Nông trại/Rustic" },
            {id: 7, name:"We are young" },
            {id: 8, name:"Dutch lady" },
            {id: 9, name:"Đồng phục" },
            {id: 10, name:"Tenis" },
            {id: 11, name:"Retro" },
            {id: 12, name:"Romatic" },
            {id: 13, name:"Fashion" },
            {id: 14, name:"Party day" },
            {id: 15, name:"Party night" },
            {id: 16, name:"Bohemian" },

        ]

        
function Filter({getFilter}){
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
export default Filter;