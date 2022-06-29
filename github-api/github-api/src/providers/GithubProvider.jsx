import React,{ createContext, useCallback, useState} from "react";

import api from '../services/api'

export const GithubContext= createContext({
  loading:false,
  user:{},
  repositories:[],
  starred:[],  
});
export function GithubProvider({children}){
    const [githubState,setGithubState]=useState({
        loading:false,
        user:{
            id:undefined,
            login:undefined,
            name:undefined,
            html_url:undefined,
            blog:undefined,
            company:undefined,
            avatar_url:undefined,

            followers:0,
            following:0,
            public_gists:0,
            public_repos:0,
        },
        repositories:[],
        starred:[],  
    });
   
    const getUser =  (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
          }));
         
        api.get(`users/${username}`).then(({ data}) =>{
            setGithubState((prevState) => ({
                ...prevState,
                user:{
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    avatar_url: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                },
            }));
        });
    };
    const getUserRepos =  (username) => {
         
        api.get(`users/${username}/repos`).then(({ data}) =>{
            
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
                    
            }));
        });
    };
    
    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
      }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username),[]),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
};