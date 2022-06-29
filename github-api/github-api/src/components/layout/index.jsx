import react from "react";
import { Header } from "../header/Header";

import * as S from "./styled";

export default function Layout({children}){
    return(
        <S.wrapperLayout>
            <Header/>
            {children}
        </S.wrapperLayout>
        
    )
};