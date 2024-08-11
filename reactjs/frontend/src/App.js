import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { StudentData } from './components/studentsdata/students';

function App() {


  const Sample = () => {

  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/students' element={<StudentData />} />
        </Routes>
      </BrowserRouter>


      {/* <SignIn /> */}

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
