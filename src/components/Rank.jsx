import styled from "styled-components";


const Container = styled.div`

  position: relative;
   
@media only screen and (max-width: 380px) {
  width:100%;
  position:relative;
  height: 50vh;
  font-size:6px;
  margin-right:30px;

}

`;




const Title = styled.h1`
margin-top:40px;
    color:black;
    text-align:center;
    font-weight:390;
    background-color:var(--bl)
    @media only screen and (max-width: 380px) {
      
    margin-bottom: 10px;
    
    background-color:var(--bl)
    }
`;

const Titl = styled.h1`
font-size:25px;
color:brown;
text-align:center;
font-weight:420;
margin-top:50px;
`;




const Rank = () => {
  return (
    <Container>
    
  
    <Titl>We have one of the best lecturer in all the world</Titl>
        <Title>See our lecturer list   </Title>
       
   
    
    </Container>
  );
};

export default Rank;
