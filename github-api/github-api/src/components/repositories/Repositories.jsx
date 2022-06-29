import React from "react";

import * as S from "./styled";
import { RepositoryItem } from "../repository-item/RepositoryItem";
import useGithub from "../../hooks/githubHooks";
import { useEffect } from "react";

export function Repositories(){
    const { githubState,getUserRepos,getUserStarred } = useGithub();

     useEffect(() => {
        if (!!githubState.user.login) {
           getUserRepos(githubState.user.login);
           getUserStarred(githubState.user.login);
        }
       
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [githubState.user.login]);

   
    return(
        <>
            {githubState.user.name?(
                 <S.wrapperTabs
                 selectedTabClassName="is-selected"
                 selectedTabPanelClassName="is-selected"
                 >
                 <S.wrapperTabList>
                     <S.wrapperTab>Repositories</S.wrapperTab>
                     <S.wrapperTab>Starred</S.wrapperTab>
                 </S.wrapperTabList>
                 <S.wrapperTabPanel>
                    <S.WrapperList>
                        {githubState.repositories.map((item) => (
                           
                            <RepositoryItem
                            
                            key={item.id}
                            name={item.name}
                            linkToRepo={item.html_url}
                            fullName={item.full_name}
                            />
                        ))}
                        
                    </S.WrapperList>
                 </S.wrapperTabPanel>
                 <S.wrapperTabPanel>
                    <S.WrapperList>
                        {githubState.starred.map((item) => (
                            <RepositoryItem
                                key={item.id}
                                name={item.name}
                                linkToRepo={item.html_url}
                                fullName={item.full_name}
                            />
                        ))}
                    </S.WrapperList>
                 </S.wrapperTabPanel>
             </S.wrapperTabs>
            ):("")}
           
        </>
    )
}