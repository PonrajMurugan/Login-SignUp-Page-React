import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Contact from './Components/Pages/contact';
import Books from './Components/Pages/books';
import BooksLayout from './Components/Pages/books-layout';
import NewBook from './Components/Pages/new-book';
import Todo from './Components/Todo/todo';
import Auth from './Auth/auth';
import LoginPage from './Auth/login-page';
import SignUpPage from './Auth/signup-page';












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



    
    
    

 

     <BrowserRouter basename='/'>

    

    

     <Routes>

     {/* Auth Page Router  */}


     <Route path='auth' element={<Auth/>}>

       <Route path='login-page' element={<LoginPage/>}/>
       <Route path='signup' element={<SignUpPage/>}/>


     </Route>

     {/* Main Page Router */}
  
  <Route path='/' element={<App/>}>
   <Route index element={<Todo/>}/>
 

  <Route path='home-page' element={<Home/>}/>
  <Route path='about-page' element={<About/>}/>
  <Route path='contact-page' element={<Contact/>}/>

  </Route>


  
  <Route path='books' element={<BooksLayout />}>
  <Route index element={<NewBook />}/>
  <Route path=':id' element={<Books />}/>
 

  </Route>


  <Route path='*' element={<h1>404 Page Not Found</h1>}  />

</Routes>

     </BrowserRouter> 
  
  




    




    



  
);


reportWebVitals();
