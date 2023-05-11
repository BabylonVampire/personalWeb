import './Layout.scss';
import Footer from './components/Footer/Footer.tsx';
import { FC } from 'react';

interface ILayoutProps {
    children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
    <div className='layout'>
        <div className='contaner'>
            {children}
        </div>
        <Footer email="asd" phone="asd" people={['a', 'a', 'a', 'a']}/>
    </div>
);

export default Layout;
