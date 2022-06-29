import styled from "styled-components";

export const wrapper = styled.div`
    width: 80%;
    display: flex;
    padding-bottom: 4rem;
    align-items: center;
    justify-content: space-between;
    input{
        flex: 1;
        border-radius:10px;
        border: 1px solid #ccc;
        margin-right: 0.5rem;
        height: 40px;
        padding: 0.25rem;
    }
    button{
        background-color: green;
        padding: 0.5rem;
        border-radius:10px;
        border: none;
        color: white;
        cursor: pointer;
    }
    label{
        display: none;
    }
`;