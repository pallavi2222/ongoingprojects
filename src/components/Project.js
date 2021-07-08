import React from 'react'
import Logo from '../images/google.jpg'
import {Row,Column,Box,Images,Headline,Contents,Totalheadine,Arrow,Total} from "../styles/project.style";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
function Project() {
    return (
        <div>
            <Total>
            <Row>
                <Column>
                <Box >
                    
                    <Images src="https://static.wixstatic.com/media/nsplsh_79714c727149736c323934~mv2.jpg/v1/fill/w_326,h_245,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Praveen%20kumar%20Mathivanan.webp"/>
                <Totalheadine>
                <Headline>Digital Literacy & Cyber 
                    Security</Headline>
                    <Arrow>
                        <ArrowRightAltIcon style={{color:"#d55342",fontSize:"60"}}></ArrowRightAltIcon>
                    </Arrow>
                    </Totalheadine>
                <Contents>DLCS will bring awareness in the society to use digital technology efficiently and help them reduce their functional disability using it to their comfort. We also teach them the threat and health of Internet. How to be safe on them and the behaviour using it.</Contents>
                </Box>
                   
                </Column>
                <Column>
                <Box></Box>
                </Column>
                <Column>
                <Box></Box>
                </Column>
            </Row>
            </Total>
        </div>
    )
}

export default Project
