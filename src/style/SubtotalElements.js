import styled from "styled-components";

export const SubContainer = styled.div`
    width: 300px;
    height: 500px;
    background-color: #E0D8B0;
    color: #F0A500;

    @media only screen and (max-width: 1000px) {
        grid-row: 1;
        width: 100%;
        height: 100px;
        border-top: 1px solid #F0A500;
  }
`
export const SubHeader = styled.h1`
    color: #F0A500;
    text-align: center;

    @media only screen and (max-width: 1000px){
        font-size: 25px;
    }
`
export const SubAmount = styled.h2`
    color: #F0A500;
    padding-left: 20px;

    @media only screen and (max-width: 1000px) {
        text-align: center;
        font-size: 20px;
    }
`