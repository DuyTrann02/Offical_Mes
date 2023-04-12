import SingleConcept from "./SingleConcept";
import { Box } from "@mui/system";
import Filter from "./Filter";
import React from "react";


const conCeptData = 
    [
        {id:1,name: "1. Áo dài", description:"Áo dài - quốc phục Việt Nam, là phương tiện để tôn vinh vẻ đẹp thuần khiết, mộc mạc của người con gái Việt. Concept áo dài đơn giản nhưng tinh tế, dễ chọn góc chụp  cả cảnh cận và cảnh toàn. Concept áo dài không hề kén người chụp và đạo cụ.",image:"media/AoDai/nen.jpg", img1:"media/AoDai/1.jpg",img2:"media/AoDai/2.jpg",img3:"media/AoDai/3.jpg",img4:"media/AoDai/4.jpg"},
        {id:2,name: "2. Việt phục/Cổ phục", description:"Vẻ đẹp cổ truyền luôn mang lại một vẻ đẹp cuốn hút đến kỳ lạ. Việt phục là concept vô cùng bắt mắt với nhiều loại trang phục cổ truyền từ giản dị đến hoàng tộc, đa dạng mẫu mã và màu sắc. Ngoài ra, Việt Phục rất được lòng các phụ huynh, những người mang trong mình quan niệm về một vẻ đẹp hoài cổ.", image:"media/VietPhuc/nen.jpg", img1:"media/VietPhuc/1.jpg",img2:"media/VietPhuc/2.jpg",img3:"media/VietPhuc/3.jpg",img4:"media/VietPhuc/4.jpg"},
        {id:3,name: "3. Cử Nhân", description:"Nếu có một concept mang đậm màu sắc học đường nhất, thì đó là cử nhân. Trang phục cử nhân tân thời được du nhập từ Châu Âu ra toàn thế giới. Concept cử nhân như là một cột mốc đánh dấu một bước ngoặt lớn trong cuộc đời học tập của một học sinh.", image:"media/CuNhan/nen.jpg", img1:"media/CuNhan/1.jpg",img2:"media/CuNhan/2.jpg",img3:"media/CuNhan/3.jpg",img4:"media/CuNhan/4.jpg"},
        {id:4,name: "4. Cô ba Sài Gòn", description:"Concept lấy ý tưởng sau thời kì Pháp thuộc của thành phố Sài Gòn hoa mỹ. Nơi nổi tiếng với vẻ đẹp của những tiểu thư Sài thành quý phái, yêu kiều, tươi thắm và mang đậm màu sắc vintage những năm 80 của thế kỷ trước.", image:"media/CoBa/nen.jpg", img1:"media/CoBa/1.jpg",img2:"media/CoBa/2.jpg",img3:"media/CoBa/3.jpg",img4:"media/CoBa/4.jpg"},
        {id:5,name: "5. King Man", description:"Concept Kingman nổi lên như một hiện tượng sau khi bộ phim cùng tên ra mắt năm 2015. Kingsman là bộ phim của những quý ông London với phong thái và trang phục chỉnh chu, lịch thiệp. Bộ concept hợp với khách hàng đam mê thời trang và phong cách quý ông của giới quý tộc Anh hiện đại.", image:"media/KingMan/nen.jpg", img1:"media/KingMan/1.jpg",img2:"media/KingMan/2.jpg",img3:"media/KingMan/3.jpg",img4:"media/KingMan/4.jpg"},
        {id:6,name: "6. Nông trại/Rustic", description:"Như là một concept dành riêng cho những ai thích sự mộc mạc, giản dị nhưng vẫn thanh nhã và thoải mái. Với ý tưởng từ kiến trúc kết hợp giữa làng quê và hiện đại của những nông trại, đồn điền trời Âu, đây chắc chắn là một trải nghiệm concept khó quên với người chụp.", image:"media/NongTrai/nen.jpg", img1:"media/NongTrai/1.jpg",img2:"media/NongTrai/2.jpg",img3:"media/NongTrai/3.jpg",img4:"media/NongTrai/4.jpg"},
        {id:7,name: "7. We are young", description:"Đây không phải là một phong cách, đây là một tinh thần. Tinh thần của concept này là Yolo, là sống hết mình với tuổi trẻ. Người chụp có thể chọn background là một chuyến đi chơi xa, trung tâm thương mại, thư viện,... với trang phục tự do. Nhiệm vụ của người chụp là tạo ra những khoảnh khắc vui vẻ nhất của các bạn chụp.",image:"media/Young/nen.jpg", img1:"media/Young/1.jpg",img2:"media/Young/2.jpg",img3:"media/Young/3.jpg",img4:"media/Young/4.jpg"},
        {id:8,name: "8. Dutch lady", description:"Hình ảnh cô gái nông trại ở miền quê Hà Lan đã đem lại một ý tưởng Concept vô cùng thú vị. Là một biến thể của concept nông trại, nhưng kết hợp với những phụ kiện đặc trưng của văn hóa nông trại Hà Lan.", image:"media/Dutch/nen.jpg", img1:"media/Dutch/1.jpg",img2:"media/Dutch/2.jpg",img3:"media/Dutch/3.jpg",img4:"media/Dutch/4.jpg"},
        {id:9,name: "9. Đồng Phục ", description:"Không cần quá cầu kì, chính bộ đồng phục các bạn học sinh mặc hàng ngày đã là một concept đẹp. Vẻ đẹp của sự hồn nhiên nhưng vẫn vui tươi và tràn đầy sức sống. Còn gì làm nổi bật lên cả học đường, thanh xuân, bạn bè hơn concept này.", image:"media/DongPhuc/nen.jpg", img1:"media/DongPhuc/1.jpg",img2:"media/DongPhuc/2.jpg",img3:"media/DongPhuc/3.jpg",img4:"media/DongPhuc/4.jpg"},
        {id:10,name: "10. Tenis", description:"Năng động, trẻ trung, cá tính là những gì mà concept này mang lại. Ta dễ dàng thấy vẻ nét trẻ tràn đầy năng lượng của concept này. Bên cạnh đó, concept vẫn có những góc riêng để mỗi người thể hiện cá tính của riêng mình.", image:"media/Tenis/nen.jpg", img1:"media/Tenis/1.jpg",img2:"media/Tenis/2.jpg",img3:"media/Tenis/3.jpg",img4:"media/Tenis/4.jpg"},
        {id:11,name: "11. Retro", description:"Retro mang đến hơi thở vintage, hoài niệm của những năm 70, 80 của thế kỷ trước. Concept phù hợp những bối cảnh những thành phố lớn của thế kỷ trước. Hoặc giới quý tộc với Âu Phục của năm 80.", image:"media/Retro/nen.jpg", img1:"media/Retro/1.jpg",img2:"media/Retro/2.jpg",img3:"media/Retro/3.jpg",img4:"media/Retro/4.jpg"},
        {id:12,name: "12. Romatic", description:"Lãng mạn hóa mọi thứ là tóm tắt những gì concept này mang lại. Bạn muốn những phút giây bên cạnh bạn bè của bạn như bước ra từ chuyện cổ tích, đây là concept dành cho bạn.", image:"media/Romatic/nen.jpg", img1:"media/Romatic/1.jpg",img2:"media/Romatic/2.jpg",img3:"media/Romatic/3.jpg",img4:"media/Romatic/4.jpg"},
        {id:13,name: "13. Fashion", description:"Dành cho những tín đồ của thời trang. Lấy ý tưởng từ những show thời trang đẳng cấp của kinh đô thời trang thế giới- Italy. Hãy đắm mình vào không gian quý phái bất tận này.", image:"media/Fashion/nen.jpg", img1:"media/Fashion/1.jpg",img2:"media/Fashion/2.jpg",img3:"media/Fashion/3.jpg",img4:"media/Fashion/4.jpg"},
        {id:14,name: "14. Party Day", description:"Còn gì vừa thể hiện không khí hoan hỉ nhưng concept vẫn bling hơn một bữa tiệc. Bữa tiệc là nơi tạo câu chuyện, tạo khoảnh khắc, tạo ra những kỷ niệm đẹp.",image:"media/Day/nen.jpg", img1:"media/Day/1.jpg",img2:"media/Day/2.jpg",img3:"media/Day/3.jpg",img4:"media/Day/4.jpg"},
        {id:15,name: "15. Party Night", description:"Party Night đem người chụp đến không khí vừa quây quần, ấm cúng những vẫn có nét thơ và sang trọng. Hãy để một bữa tiệc ban đêm lưu giữ câu chuyện của bạn và những người bạn yêu thương.", image:"media/Night/nen.jpg", img1:"media/Night/1.jpg",img2:"media/Night/2.jpg",img3:"media/Night/3.jpg",img4:"media/Night/4.jpg"},
        {id:16,name: "16. Bohemian", description:"Bohemain là cái tên bắt nguồn từ nét văn hóa du mục của quốc gia cùng tên. Bohemain mang một cái hồn phóng khoáng tự do và lãng mạn. Chủ đạo của concept này là tông màu nóng và trang phục thoải mái rất bắt mắt.", image:"media/Bohemian/nen.jpg", img1:"media/Bohemian/1.jpg",img2:"media/Bohemian/2.jpg",img3:"media/Bohemian/3.jpg",img4:"media/Bohemian/4.jpg"},
    ];


function Concept(){
    const [filter, setFilter] = React.useState(0);
    const getFiter =(num)=>{
          setFilter(num);
    }
    
    return(
        <Box>
            
         <Filter getFilter = {getFiter}/>
         {
                filter===0?
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around",  alignItems:"center"}}>
        <Box sx={{width:"100%", height:"1vh"}}></Box>
        {
            conCeptData.map((concept)=>(
                <Box key={concept.id} sx={{marginTop:"4vh"}}>
                <SingleConcept infor={concept} />
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
                              <SingleConcept infor={concept} />
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
export default Concept;