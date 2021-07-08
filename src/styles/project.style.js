import styled from 'styled-components'
export const Row = styled.div`
margin-top:10px;
height:426px;
width: 100%;
display: flex;
@media only screen and (max-width: 500px) {
    height:2000px;
     width:340px;
     display:inherit;
    
    }
`;
export const Column = styled.div`
width: 384.5px;
height: 426px;


`;
export const Box = styled.div`
margin-right:50px;
margin-left: 40px;
@media only screen and (max-width: 500px) {
    margin-right:10px;
 margin-left: 10px;
 margin-top:180px;
 width:340px;
  height:540px ;
    }
width:300px;
height:426px;
background-color: rgb(10, 19, 60);
border-radius:7px;

`;
export const Images = styled.img`
width:300px;
height:175px;
border-radius:7px;
@media only screen and (max-width: 500px) {
 width:340px;
  height:250px ;
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
@media only screen and (max-width: 500px) {
    width:309px;
    font-size: 14px;
    line-height:21px;
    margin-top:5px;
    
    }
`;
export const Totalheadine = styled.div`
width:299px;
height:70px;
display: flex;
@media only screen and (max-width: 500px) {
    width:300px;
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
@media only screen and (max-width: 500px) {
   font-weight: 18px;
   margin-top:25px;
   
    }
`;
export const Arrow = styled.div`
flex:50%;
color:white;
`;

