import styled from "styled-components";
import {FaShoppingCart} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    color: #F0A500;
    background-color: #E0D8B0;
    display: flex;
    justify-content: space-around;
    z-index: 10;
`
export const NavLogo = styled(LinkR)`
    text-decoration: none;
    font-size: 30px;
    margin: auto 0;
    font-weight: bold;
    color: #F0A500;

    @media only screen and (max-width: 1000px){
        font-size: 20px;
    }
`
export const NavInput = styled.input`
    display: flex;
    width: 30vw;
    margin: 15px 0;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    color: #F0A500;
    outline-color: #F0A500;
`
export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 400px;
    margin-top: -15px;
    margin-left: -300px;
    min-width: 160px;
    max-height: 350px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    overflow-y: auto;

       
    @media only screen and (max-width: 1200px){
        display: none;
    }

`
export const DropLink = styled(LinkR)`
    text-decoration: none;
    color: #000;
`
export const DropItem = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #D6E4E5;
    justify-content: space-around;
    align-items: center;
`
export const DropImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
`
export const DropTitle = styled.p`
    font-size: 18px;
`
export const DropPrice = styled.p`
    font-size: 15px;
`
export const ButtonContainer = styled.div`
    height: 100%;
    position: relative;
    display: inline-block;

    &:hover ${DropdownContent} {
        color: #000;
        display: block;
    }
 
`
export const NavButton = styled.button`
    display: flex;
    justify-content: space-around;
    width: 100px;
    height: 65%;
    margin: 15px 0;
    background-color: #FFEE63;
    color: #F0A500;
    border-radius: 10px;
    border: none;
`
export const Cart = styled(FaShoppingCart)`
    font-size: 25px;
    border: none;
    margin: auto 0;
`
export const ItemCount = styled(LinkR)`
    font-size: 25px;
    margin: auto 0;
    color: #F0A500;
    text-decoration: none;
`
