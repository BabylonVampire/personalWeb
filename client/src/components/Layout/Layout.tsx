import React from 'react';
import './Layout.scss';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

const Layout = ({ children }) => (
    <div className='layout'>
        {/* <Header anchors={[{text: 'a', place: ''}, {text: 'b', place: ''}]}/> */}
        <div className='contaner'>
            {children}
        </div>
        <Footer email="" phone="" logo=""/>
    </div>
);

export default Layout;
