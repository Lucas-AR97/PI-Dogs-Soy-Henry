import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreation from './components/DogCreation/DogCreation';
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.Stock}>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/dogs/:id' component={DogDetail}/>
        <Route path='/newDog/' component={DogCreation}/>
      </div>
    </BrowserRouter>
  );
}

export default App;