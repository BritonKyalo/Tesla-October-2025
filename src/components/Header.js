import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header=()=>{
    const [burgerStatus,setBurgerStatus]=useState(false)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model X</a>
                <a href="#">Model 3</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>               
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
            </BurgerNav>
        </Container>
    )
}
export default Header


const Container = styled.div`
        min-height:60px;
        position:fixed;
        display:flex;
        aligh-items:center;
        justify-content:space-between;
        padding:0 20px;
        top:0;
        left:0;
        right:0;
        z-index:1;
`
// const Image=styled.img`
//         height:100%
// `
const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        color: #000;
        img{
            width:100%;
        }
    }

    @media screen and (max-width:768px){
        display:none;
    }
`

const RightMenu=styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
        color:#000;
    }
`

const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    color:#000;
    width:300px;
    z-index:16;
    list-style-type:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show ? `translateX(0)` : `translateX(100%)`};
    transition:transform 0.2s linear;
    li{
        padding:15px 0;
        border-bottom:1px solid rgb(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
`
const CloseWrapper=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
const CustomClose=styled(CloseIcon)`
    cursor:pointer;
`