import styled from 'styled-components'
export const Row = styled.div`
margin-top:10px;
height:426px;
width: 100%;
display: flex;
@media only screen and (max-width: 500px) {
    height:1700px ;
     width:384.5px;
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
 margin-top:60px;
 width:375;
 height:730;
    
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
`;
export const Contents = styled.p`
color:white;
font-size: 13.5px;
width:276px;
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
line-height:20px;
padding:0px 13px;
text-align: left;
`;
export const Totalheadine = styled.div`
width:299px;
height:70px;
display: flex;
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
`;
export const Arrow = styled.div`
flex:50%;
color:white;
`;

