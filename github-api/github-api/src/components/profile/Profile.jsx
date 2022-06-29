import React from "react";
import useGithub from "../../hooks/githubHooks";

import * as S from "./styled";

export default function Profile(){
  const {githubState} = useGithub();
  
 return(
    <>
        
        {githubState.user.name?(
             <S.wrapper>
             <S.wrapperImage src={githubState.user.avatar_url} alt="Avatar of user" />
             <div>
             <S.wrapperName>
                 <h1>{githubState.user.name}</h1>
                 <h3>Username: <a 
                                     href={githubState.user.html_url}>
                                     {githubState.user.login}
                                 </a> 
                 </h3>
 
                 <h3>blog: <span>{githubState.user.company?(githubState.user.company):("undefined")}</span></h3>
 
                 <h3>Blog: <a 
                                 href={githubState.user.blog} 
                                 target="_blank" 
                                 rel="noreferrer">
                                 {githubState.user.blog?(githubState.user.blog):("undefined")}
                             </a>
                 </h3>
                 
 
             </S.wrapperName>
             <S.wrapperStatusCount>
                 <div>
                 <h4>followers</h4>
                 <span>{githubState.user.followers}</span>
                 </div>
                 <div>
                     <h4>followings</h4>
                     <span>{githubState.user.following}</span>
                 </div>
                 <div>
                     <h4>Gists</h4>
                     <span>{githubState.user.public_gists}</span>
                 </div>
                 <div>
                     <h4>Repos</h4>
                     <span>{githubState.user.public_repos}</span>
                 </div>
             </S.wrapperStatusCount>
             </div>
             
         </S.wrapper>
        ):( <S.wrapperText>Nehum usuário pesquisado</S.wrapperText>)}
       
    </>
 )
}