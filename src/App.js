// import logo from './logo.svg';

import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import './App.css';

function App() {
  return (
    <div className="App">
       <Heading title = "Welcome to React App"/>
        <Heading title = "React Component"/>
        <Button title = "Click me" />

    </div>
  );
}

export default App;
