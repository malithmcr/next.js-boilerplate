import React, {useEffect} from "react";
import { getArticles } from "../../services/articles";
import Card from  "../../components/Card";
import styled from 'styled-components';

/**
 * @slug { /de, /en, /anylang}
 * @param {optional} props 
 */
function HomePage(props) {
  const { articles }  = props;
  
  return (
    <PageWrapper>
        <h1>Welcome to Nextjs Home</h1>
        {articles && articles.map((article)=>{
            return(<Card key={article.id} img={article.thumbnailUrl} title={article.title}/>)
        })}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
    margin-top: 170px;
`;

//This gets called at build time
export async function getServerSideProps(context) {
  const articles = await getArticles('photos', 20);
  return {
    props: {
      articles: articles.data,
    }, // will be passed to the page component as props
  }
}

export default HomePage;
