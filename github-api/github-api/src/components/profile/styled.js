import styled from "styled-components";

export const wrapper= styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 1.5rem;
   
`;
export const wrapperImage= styled.img`
    border-radius: 50%;
    width: 11rem;
    margin-right: 1rem;

`;
export const wrapperName= styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap:0.8rem;
    a{
        font-weight:400;
        color:blue;
    }
    
`;
export const wrapperStatusCount= styled.div`
    margin-top:3rem;
    display: flex;
    align-items:center;
    text-align:center;
    gap:0.8rem;
    h4{
       margin-bottom:0.5rem
    }
`;
// estilização para o texto "nenhum usuário pesquisado"
export const wrapperText= styled.div`
    
    font-weight: bold;
    font-size: 2rem;
   
`;
