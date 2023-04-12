import SingleBoiCanh from "./SingleBoiCanh";
import { Box } from "@mui/system";
import Filter2 from "./Filter2";
import React from "react";


const conCeptData = 
    [
        {id:1,name: "Trường học", description:<p>Không cần phải tìm đâu xa, chính khuôn viên ngôi trường đã gắn bó với các bạn học sinh là địa điểm chụp lý tưởng để lưu trữ những kỷ niệm<br/>Kinh phí:<b>  Miễn Phí.</b><br/> Concept:<b> áo dài, my youth, cử nhân, vest,...</b></p>, image:"media/school/nen.jpg", img1:"media/school/1.jpg",img2:"media/school/2.jpg",img3:"media/school/3.jpg",img4:"media/school/4.jpg"},
        {id:2,name: "Công viên Yên Sở ", description:<p>Là công viên đô thị lớn nhất cả nước. Công viên Yên Sở sở hữu nhiều loại cảnh quan như hồ nước, vườn cây, đường xá. Thích hợp chụp những dự án chi phí thấp.<br/><br/>Kinh phí:<b> Miễn Phí.</b><br/> Concept:<b> my youth, picnic, party day,... </b><br/>Địa chỉ: <b>Quốc lộ 1a, Hoàng Liệt, Hoàng Mai, Hà Nội</b></p>, image:"media/YenSo/nen.jpg", img1:"media/YenSo/1.jpg",img2:"media/YenSo/2.jpg",img3:"media/YenSo/3.jpg",img4:"media/YenSo/4.jpg"},
        {id:3,name: "Thảo nguyên hoa Long Biên ", description:<p> Một phim trường đầy hoa, nắng và gió. Là địa điểm lý tưởng cho những tín đồ yêu thiên nhiên và phong cách Rustic giản dị<br/><br/>Chi phí:<b> 50-70k/1 người.</b><br/>Concept: <b>Nông trại, Rustic, Romatic, Muse, my youth, áo dài...</b><br/>Địa điểm: <b>bãi Thạch Cầu, phường Long Biên, đối diện vườn nhãn Long Biên</b></p>, image:"media/HoaLongBien/nen.jpg", img1:"media/HoaLongBien/1.jpg",img2:"media/HoaLongBien/2.jpg",img3:"media/HoaLongBien/3.jpg",img4:"media/HoaLongBien/4.jpg"},
        {id:4,name: "Làng hoa Quảng Bá ", description:<p>Một chợ hoa điển hình của Hà Nội. Mang hơi thở rất riêng của đất Hà Thành. Nhộn nhịp, xô bồ và vẫn giữ được những vẻ đẹp xưa cũ.<br/><br/>Chi phí:<b> Miễn phí</b><br/>Concept:<b> Cổ phục, my youth, retro, vintage, áo dài,...</b><br/>Địa điểm:<b> 236, Âu Cơ, Quảng An, Tây Hồ, Hà Nội.  </b></p>, image:"media/LangHoa/nen.jpg", img1:"media/LangHoa/1.jpg",img2:"media/LangHoa/2.jpg",img3:"media/LangHoa/3.jpg",img4:"media/LangHoa/4.jpg"},
        {id:5,name: "Phố cổ Hà Nội ", description:<p>Nếu có một nơi mang trong mình giá trị vĩnh cửu của Hà thành thì đó chính là những con phố cổ Hà Nội. Với nhiều cung đường, mỗi cung đường đem đến một cảm giác riêng, những con phố cổ Hà Nội là sự kết hợp hoàn hảo giữa vẻ đẹp hiện đại và bao cấp.<br/><br/>Chi phí:<b> Miễn phí</b><br/>Concept: <b>Cô ba Sài Gòn, vintage, áo dài, cổ phục, retro,...</b><br/>Địa điểm:<b>Phía tây bắc Quận Hoàn Kiếm.</b></p>, image:"media/PhoCo/nen.jpg", img1:"media/PhoCo/1.jpg",img2:"media/PhoCo/2.jpg",img3:"media/PhoCo/3.jpg",img4:"media/PhoCo/4.jpg"},
        {id:6,name: "Nhà thờ lớn", description:<p>Chính tòa của tổng giáo hội Hà Nội. Địa điểm mang cả giá trị vẻ đẹp kiến trúc lẫn văn hóa. Nét cổ kính nghệ thuật của kiến trúc nước Pháp chắc chắn đem lại những khoảnh khắc tuyệt vời.<br/><br/>Chi phí:<b> Miễn phí</b><br/>Concept:<b> áo dài, retro sang trọng, cô ba Sài Gòn, cử nhân</b><br/>Địa điểm:<b> 40 Nhà Chung, quận Hoàn Kiếm</b></p>, image:"media/NhaTho/nen.jpg", img1:"media/NhaTho/1.jpg",img2:"media/NhaTho/2.jpg",img3:"media/NhaTho/3.jpg",img4:"media/NhaTho/4.jpg"},
        {id:7,name: "Phim trường Smiley Ville", description:<p>Đa dạng concept, chuyên nghiệp là những gì phim trường này mang lại. Từ phong cách rustic đơn giản hay concept dạ hội quý phái, Smiley Ville đều có thể đáp ứng. Nơi đây rất hợp với những khách hàng chịu chi để có những bộ ảnh chất lượng.<br/><br/>Chi phí:<b> 100-200k/1 người</b><br/>Concept:<b> Rustic, day party, dạ hội, kingsman, âu phục, my youth</b><br/>Địa điểm:<b> ngõ 1, đường Đông Hội, Đông Anh, Hà Nội</b></p>, image:"media/Smiley/nen.jpg", img1:"media/Smiley/1.jpg",img2:"media/Smiley/2.jpg",img3:"media/Smiley/3.jpg",img4:"media/Smiley/4.jpg"},
        
      
    ];


function BoiCanh(){
    const [filter, setFilter] = React.useState(0);
    const getFiter =(num)=>{
          setFilter(num);
    }
    
    return(
        <Box>
            <Filter2 getFilter = {getFiter}/>
            {
                filter==0?
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around",  alignItems:"center"}}>
                <Box sx={{width:"100%", height:"1vh"}}></Box>
                {
                    conCeptData.map((boicanh)=>(
                        <Box key={boicanh.id} sx={{marginTop:"4vh"}}>
                        <SingleBoiCanh infor={boicanh} />
                        </Box>  
                    ))
                }
                
                </Box>
                :
                <>
                {
            conCeptData.map((concept)=>(
                <>
                {
                    concept.id === filter && 
                    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around",  alignItems:"center"}}>
                       <Box sx={{width:"100%", height:"1vh"}}></Box>
                       <Box key={concept.id} sx={{marginTop:"4vh"}}>
                              <SingleBoiCanh infor={concept} />
                       </Box>  
                   </Box>  
                }
                </>
            ))
          }
                </>

            }
           
        </Box>
        
    )
}
export default BoiCanh;