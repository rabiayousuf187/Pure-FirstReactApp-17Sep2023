// import logo from './logo.svg';

import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import './App.css';
import Contact from './containers/Contact';
import Header from './components/Header/Header';
import Card from './components/UI/Card/Card';
import Expenses from './components/Expenses/Expenses';

function App() {

  return (
    <div className="App">

<Heading title = "Expense Tracer App"/> 
      <Expenses/>
      {/* <Header title="Welcome to React App" btnTitle = "Home" btnTitle2 = "Signup"/> 
       <Heading title = "Welcome to React App"/> 
        <Heading title = "React Component"/>
        <Button title = "Click me" />
        <Contact title="Add"/> */}

    </div>
  );
}

export default App;
