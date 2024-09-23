import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
      <Header />
      </header>      
      <main>
         <Outlet />
      </main>
      <Footer />   
    </>
  );
}

export default App;
