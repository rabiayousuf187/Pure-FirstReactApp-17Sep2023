// import logo from './logo.svg';

import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import './App.css';
import Contact from './containers/Contact';

function App() {

  return (
    <div className="App">
       <Heading title = "Welcome to React App"/>
        {/* <Heading title = "React Component"/>
        <Button title = "Click me" /> */}
        <Contact title="Add"/>

    </div>
  );
}

export default App;
