import logo from './logo.svg';
import './App.css';
import FormDisabledInputExample from './compoments/formulaires';
import BasicExample from './compoments/formulaires';
import ColorSchemesExample from './compoments/navbar';
import BgColorExample from './compoments/cards';
import BasicExample2 from './compoments/cards';
import Slidecountry from './compoments/slide';


function App() {
  return (
    <div className="App">
      <div className="nav" >
      <ColorSchemesExample />
      </div>
      <div className='name'>
        <div className='styleecard'>
      <BasicExample2 />
      </div>
      </div>
      <div className = 'ss'>
      <div className='styleslide'>
      <Slidecountry/>
      </div>
      </div>
      <div className='styletitre'>
      <h3 className='titre'>you are welcome </h3> 
       <BasicExample></BasicExample> 
       </div>
       
    </div>
  );
}

export default App;
