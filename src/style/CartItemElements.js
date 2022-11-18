import styled from "styled-components";
import {MdDelete} from 'react-icons/md';

export const CartItems = styled.div`
    
`
export const CartItemContainer = styled.div`
    width: 90%;
    height: 100px;
    margin: 10px auto;
    border: 1px solid #F0A500;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const ImgContainer = styled.div`
    width: 150px;
    heigh: 100%;
`
export const ItemImage = styled.img`
    width: 100%;
    height: 90px;
    object-fit: contain;

`
export const ItemPrice = styled.p`
    font-size: 20px;
`
export const ItemCount = styled.input`
    font-size: 20px;
    width: 100px;
`
export const DeleteItem = styled(MdDelete)`
    font-size: 30px;
    color: #000;
    cursor: pointer;
`
