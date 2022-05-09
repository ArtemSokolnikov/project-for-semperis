import './App.css';
import HomePage from './components/home/HomePage';
import { HomeContainer } from './components/home/styles/HomePageStyles';
import 'animate.css';

function App() {

  return (
      <HomeContainer>
        <HomePage/>
      </HomeContainer>
  );
}

export default App;
