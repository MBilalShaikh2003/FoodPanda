import React from 'react';
import Header from '@/components/Header';
import AuthForm from '@/components/AuthForm';
import Body from '@/components/Body';




function Home(props) {
  return (
    <div>
      <Header/>
      <Body/>

    <AuthForm/>
    </div>
  );
}

export default Home;