import React, { useState}from "react";

import * as S from './styled'
import useGithub from '../../hooks/githubHooks'

export function Header(){
    const {getUser}= useGithub();
    const [usernameForSearch,setUsernameForSearch]= useState()

    const submitGetUser=()=>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return(
        <header>
            <S.wrapper>
                {/* <label for="input">Digite o username para pesquisa</label> */}
                <input id ="input" type="text" 
                    placeholder="Digite o username para pesquisa" 
                    onChange={(event)=>setUsernameForSearch(event.target.value)}/>
                <button 
                    type="submit" 
                    onClick={submitGetUser}>buscar
                </button>
            </S.wrapper>
        </header>
    )
};