
import {Toolbar,AppBar,styled, Box, Typography} from '@mui/material'
import CustomButtons from './customButtons'

import Search from './search'
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
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonHeader=styled(Box)`
margin: 0 0 0 3%;
`

const Header =()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyleHeader>
            <Toolbar>
                <BoxStyle>
                    <img src={logoURL} style={{width:75}}></img>
                    <Box component="span" style={{ display: 'flex' }}>
                        <TypographyStyle>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </TypographyStyle>
                        <PlusImage src={subURL} />
                    </Box>
                </BoxStyle>
                <Search/>
                <CustomButtonHeader>
                    <CustomButtons/>
                </CustomButtonHeader>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;