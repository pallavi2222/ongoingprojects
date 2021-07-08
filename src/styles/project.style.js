import styled from 'styled-components'
export const Row = styled.div`
margin-top:10px;
height:426px;
width: 100%;
display: flex;
@media only screen and (max-width: 600px) {
    height:2000px;
     width:350px;
     display:inherit;
     
    
    }
`;
export const Column = styled.div`
width: 384.5px;
height: 426px;

@media only screen and (max-width: 600px) {
    width:348px;

       }

`;
export const Box = styled.div`
margin-right:50px;
margin-left: 40px;
@media only screen and (max-width: 600px) {
    
 
 margin-top:200px;
 width:348px;
  height:563.5px ;
  margin-left:14.5px;
  
    }
width:300px;
height:426px;
background-color: rgb(10, 19, 60);
border-radius:10px;

`;
export const Images = styled.img`
width:300px;
height:175px;
border-radius:10px;
@media only screen and (max-width: 600px) {
 width:348px;
  height:270px ;
    }
`;
export const Contents = styled.p`
color:white;
font-size: 13.5px;
width:276px;
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
line-height:20px;
padding:0px 15px;
text-align: left;
@media only screen and (max-width: 600px) {
    width:309px;
    font-size: 14.6px;
    line-height:24px;
    margin-top:0px;
    padding:0px 13px;
    
    
    }
`;
export const Totalheadine = styled.div`
width:299px;
height:70px;
display: flex;
@media only screen and (max-width: 600px) {
    width:350px;
    height: 100px;
    }
`;
export const Headline = styled.p`
color:white;
font-size:15px;
flex: 111%;
font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
font-weight: bold;
line-height: 20px;
margin-left: 16px;
text-align: left;
@media only screen and (max-width: 600px) {
   font-size:17px;
   margin-top:25px;
   letter-spacing:0.5px;
   
    }
`;
export const Arrow = styled.div`
flex:50%;
color:white;
`;

