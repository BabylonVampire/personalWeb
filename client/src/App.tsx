import { FC } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';

const App: FC = () => {
  return (
    <div className= "App" >
      <Layout>
        <MainPage/>
      </Layout>
    </div>
  );
}

export default App;
