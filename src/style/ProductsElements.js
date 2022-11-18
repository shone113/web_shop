import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    color: green;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 50px;

    @media only screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
export const ProductCard = styled.div`
    width: 100%;
    height: 350px;
    border: 3px solid #F0A500;
    box-shadow: 7px 7px 4px #888888;
    color: #F0A500;
    display: grid;
    align-items: center;
    justify-items: center;
`
export const ProductTitle = styled.h2`
    font-size: 18px;
`
export const ProductImg = styled.img`
    width: 80%;
    max-height: 200px;
    object-fit: contain;
    margin: auto 0;
`
export const PriceTag = styled.p``

export const DeliveryTag = styled.p``

export const AddButton = styled.button`
    padding: 10px;
    width: 90%;
    color: #000;
    border: 1px solid #F0A500;
    cursor: pointer;
    margin-top: -50px;
    font-weight: bold;
    background-color: transparent;

    &:hover{
        border: 3px solid #F0A500;
        color: #F0A500;
        box-shadow: 2px 2px 1px 2px #888888;
    }
`
export const RemoveButton = styled.button`
    padding: 10px;
    color: white;
    background-color: red;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: -50px;
`