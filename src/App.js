import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainContencts from './components/MainContents';
import Footer from './components/Footer';
import { Component } from 'react';
import Form from './components/Form';

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      isLoading: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 3000);
    this.setState({isLoading: true})

  }

  render(){
    
    
    return(

    
      <div>
        <NavBar></NavBar>
        <Form/>
        {/* <MainContencts isLoading={this.state.isLoading}></MainContencts>
  
        <Footer></Footer> */}
     </div>
    );

  }
 
}

export default App;
