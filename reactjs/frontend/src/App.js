import './App.css';
import { Component } from './components/component';
import { Events } from './components/events/events';
import { Elephant, Sun } from './components/functions/functions';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { UseStateFunction } from './components/usesate&useeffect/usestate&useefect';

function App() {


  const Sample=()=>{

  }
  return (
    <>
    <SignIn/>

    {/* <SignUp/> */}
    
    {/* <UseStateFunction/>
    <h1>Hello world....</h1>
    <h1>Hello darlings...</h1>
    <Component />
    <Sun/>
    <Elephant/>
    <Events/> */}
    </>
  );
}

export default App;
