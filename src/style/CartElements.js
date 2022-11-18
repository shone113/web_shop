import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 300px;

    @media only screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
      }
`