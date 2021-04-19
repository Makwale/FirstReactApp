import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainContencts from './components/MainContents';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
   
      <MainContencts></MainContencts>

      <Footer></Footer>
   </div>
  );
}

export default App;
