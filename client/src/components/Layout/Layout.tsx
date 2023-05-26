import './Layout.scss';
import Footer from './components/Footer/Footer.tsx';
import { FC } from 'react';

interface ILayoutProps {
    children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
    <div className='layout'>
        <div className='container'>
            {children}
        </div>
        <Footer email="nikitatabalov@gmail.com" phone="" people={['Вавилонский Вампир', 'Артем Правдеподобный']}/>
    </div>
);

export default Layout;
