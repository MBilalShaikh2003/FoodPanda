import React from 'react';
import Header from '@/components/Header';
import AuthForm from '@/components/AuthForm';
import Body from '@/components/Body';
import Footer from '@/components/Footer';



function Home(props) {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    {/* <AuthForm/> */}
    </div>
  );
}

export default Home;