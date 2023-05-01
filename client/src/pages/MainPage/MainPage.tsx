import React from 'react';
import Head from './components/Head/Head.tsx';
import Body from './components/Body/Body.tsx';

const MainPage = () => (
   <div className='mainPage'>
      <Head title={'Добро пожаловать!'}/>
      <Body gallery_left_items={[]} gallery_right_items={[]}/>
   </div>
);

export default MainPage;
