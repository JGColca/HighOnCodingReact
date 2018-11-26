import React, {
  Component
} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainArticle from './components/MainArticle'
import Articles from './components/Articles'

class App extends Component {
  render() {
    return ( <div className ="container">
      <Header/>
      <MainArticle/>
      <Articles/>
      <Footer/>
      </div>
    );
  }
}

export default App;
