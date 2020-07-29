import React, { useEffect } from 'react';
import Header from '../Header';
import Head from 'next/head';
import {useRouter} from 'next/router'
import { MainWrapper } from "./main.style";


/**
 * Global Layout
 * @param { <Components> } props 
 */
const MainLayout = (props) => {
    const router = useRouter();
    const [language, setLanguage] = React.useState('en');

    useEffect(() => {
        if(router.pathname.split('/').slice(0,-1)[1] !== undefined){
            setLanguage(router.pathname.split('/').slice(0,-1)[1]);
        }else{
            setLanguage(router.pathname.split('/')[1]);
        }
        localStorage.setItem('language', language);
      },[language]);

    return(
    <>
        <Head>
            <title>Forum.eu</title>
            <meta name="keywords" content="articles, europe, forum"/>
            <meta property="og:url" content={`${props.baseUrl}`}/>
            <meta property="og:type" content="website"/>

        </Head>
        <div>
            <Header {...props}/>
            <MainWrapper>
                {props.children}
            </MainWrapper>
            {/* You can add footer or any other global components here */}
        </div>
    </>
)
}

export default MainLayout;