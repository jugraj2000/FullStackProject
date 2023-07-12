
import {Toolbar,AppBar,styled, Box, Typography} from '@mui/material'

const StyleHeader = styled(AppBar)`
background: #2874f0;
height:55px;
`
const BoxStyle = styled(Box)`
margin-left: 12%;
line-height:0;
`
const TypographyStyle = styled(Typography)`
font-size: 10px;
    font-style: italic;
`
const Header =()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyleHeader>
            <Toolbar>
                <BoxStyle>
                    <img src={logoURL} style={{width:75}}></img>
                    <Box>
                        <TypographyStyle>Explore Plus</TypographyStyle>
                    </Box>
                </BoxStyle>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;