import './Layout.scss';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import { FC } from 'react';

interface ILayoutProps {
    children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
    <div className='layout'>
        {/* <Header anchors={[{text: 'a', place: ''}, {text: 'b', place: ''}]}/> */}
        <div className='contaner'>
            {children}
        </div>
        <Footer email="" phone="" logo=""/>
    </div>
);

export default Layout;
