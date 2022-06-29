import React from "react";

import * as S from './styled'
export function RepositoryItem({name,linkToRepo,fullName}){
    return(
        <S.wrapper>
        
            <h2>{name}</h2>
            <h4>full name</h4>
            <a href={linkToRepo}>
                {fullName}
            </a>

        </S.wrapper>
    )
};