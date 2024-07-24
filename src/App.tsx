import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './app/content/signUp/SignupPage';
import Header from './app/shared/components/header/Header';
import Home from './app/content/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="/sign-up" element={<SignupPage/>} />
      <Route path='/login' element={<div>Login Page</div>}/>
      <Route path='*' element={<Home/>}></Route>
      <Route path='/featured' element={<div>Featured</div>}></Route>
      <Route path='/dropstocks' element={<div>Drop Stocks</div>}></Route>
      <Route path='/dropoffer' element={<div>Drop Offer</div>}></Route>
      <Route path='/collection' element={<div>Collection</div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
