import {
 
    ContactPhone
     
   } from "@material-ui/icons";
   import styled from "styled-components";
   
   const Info = styled.div`
    
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     background-color: var( --blue)
     z-index: 3;
     
     align-items: center;
     justify-content: center;
     transition: all 0.5s ease;
     cursor: pointer;
   `;
   
   const Container = styled.div`
     flex: 1;
     margin: 16px;
     min-width: 280px;
     height: 350px;
     border-radius: 5%;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: var(--blue);
     position: relative;
   
     &:hover ${Info}{
       opacity: 1;
     }
   
     @media only screen and (max-width: 380px) {
       min-width: 140px;
       height: 250px;
          }
   `;
   
   const Circle = styled.div`
     width: 210px;
     height: 220px;
     border-radius: 10%;
   
     position: absolute;
   
   
     @media only screen and (max-width: 380px) {
       width: 130px;
       height: 220px;
          }
   `;
   
   const Image = styled.img`
   width:260px;
     height: 255px;
     border-radius: 10%;
   
     z-index: 2;
   
     @media only screen and (max-width: 380px) {
       width: 120px;
       height: 190px;
          }
   
   `;
   
   const Icon = styled.div`
     width: 37px;
     height: 37px;
     border-radius: 20%;
     background-color: var(--bl);
     display: flex;
     color:var(--col);
     align-items: center;
     justify-content: center;
     margin: 5px;
     transition: all 0.5s ease;
     &:hover {
    
       color:var(--ic);
       transform: scale(1.1);
     }
   `;
   
   const Lectrurer = ({ item }) => {
     return (
       <Container>
         <Circle />
         <Image src={item.img} />
         <Info>
           <Icon>
             <ContactPhone/>
           </Icon>
          
          
         </Info>
       </Container>
     );
   };
   
   export default Lectrurer;
   