
import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 10% 0 auto;
    &>button, &>p, &>div{
        margin-right:40px;
        font-size:14px;
        align-items:center;
    }
    
`

const Container = styled(Box)`
    display: flex;
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    border-radius: 2;
    padding: 5px 40px;
    height: 32px;
    box-shadow: none;
    font-weight:600px;
 `   

const CustomButtons = ()=>{
    return (
        <Wrapper>
       
        <LoginButton variant="contained">Login</LoginButton>
            
        <Typography style={{ marginTop: 3, width: 150 }}>Become a Seller</Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
        
        <Container>
            <ShoppingCart />
            <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Container>
    </Wrapper>
    )
}
export default CustomButtons;