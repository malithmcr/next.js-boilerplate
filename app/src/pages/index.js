import{ useEffect } from 'react';
import Router from 'next/router';
import Loader from "../components/Loader";


function HomePage() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
       Router.push('/en')
    }
  }, []);

  return(<Loader />)
}



export default HomePage;
