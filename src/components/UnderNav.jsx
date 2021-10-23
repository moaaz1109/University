import { Search} from "@material-ui/icons";

import styled from "styled-components";



import '../index.css';

const Container = styled.div`

  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 50vh;
       }
 
`;


const Wrapper = styled.div`
  
  display: flex;
  min-height: 54vh;
  background:url(/img/19.png) no-repeat ;

  background-position: center;
  display: grid;
  place-items: center;
  padding-top: 11rem;
  background-repeat: no-repeat;
  background-size: 100%;

  @media only screen and (max-width: 380px) {
    height: 100%;
       }
`;


const InfoContainer = styled.div`
  flex: 1;

`;

const Title = styled.h1`
font-size: 43px;
background-color:var(--org);
  color:var(--pp);
`;




const Input = styled.input`
width:440px;
height:44px;
font-size:17px;
font-weight:580;
color:black;
background-color:var(--in);
border-radius:11% ;
@media only screen and (max-width: 380px) {

  padding: 40px;
  margin-top:-150px;
  margin-left:30px;

}

&:hover {
  background-color:var(--se);
  width:430px;
  transform: scale(1.1);
  
}
`;


const UnderNav = () => {
 

  return (
    <Container>
     
      
      <Wrapper>
      <InfoContainer>
              <Title>Welcome you in our university</Title>
              
          
            </InfoContainer>
      
        
                <Input placeholder="You Can Search here ..." />
            <Search style={{ color: "gray", fontSize: 16 }} />
   
        
      
      </Wrapper>
    
       
    </Container>
  );
};

export default UnderNav;
