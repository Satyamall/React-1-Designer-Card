
import './App.css';
import HeaderList from './Components/HeaderList';
import TextList from './Components/TextList';
import TempList from './Components/TempList';
import PriceList from './Components/PriceList';

function App() {
  return (
    <>
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSqwCFx0cCZaSOaxHDrP2uXdzhj6MxQi9aQ&usqp=CAU" alt=""/>
      <div className="i-tag">i</div>
      <HeaderList/>
      <TextList/>
      <TempList/>
      <PriceList/>
    </div>
    <div className="space"></div>
    </>
  );
}

export default App;
