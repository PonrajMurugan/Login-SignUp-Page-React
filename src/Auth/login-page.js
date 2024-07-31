import React, { useContext , useEffect, useState } from 'react';
// import userData from '../userData.json';
import { Link , useNavigate } from 'react-router-dom';
import { UserContext  } from '../store/userContext';


const LoginPage = () => {

    const {userItem, addUser } = useContext (UserContext);
   

    const navigate = useNavigate(); 
    // const [userData, setUserData] = useState(null);
    const [inputState, setInputState] = useState({

        email:"",
        password:""

    });

    const [loginErr , setLoginErr] = useState("")

    const [errInput , setErrInput] = useState({

            email: {isValid:false, mesg:''},
            password: {isValid:false , mesg:''}

    });

    const onChangeInput = (e) =>{

        let name = e.target.name;
        let val = e.target.value;

        setInputState(prevInpt => ({...prevInpt, [name]: val }));
    }





    // const onLogin = (e)=>{ 
    //     e.preventDefault();

    //     if(inputState.email.trim().length > 0 && inputState.password.trim().length > 0  ){
           
    //         const findUser = user.find(item => item.email === inputState.email);
             
    //         if(!findUser){

    //         }

           
    //     } else {
               
    //         console.log("Email id or password should not be empty")
    //     }

    // }


    // const navigate= useNavigate();

    


        //   All inputs should not be empty 


     const validateInput = ()=>{

           let isValidInputs = [];

    
    
            if(inputState.email.trim().length > 0 ){
               
                // if(findUser){
    
                    // const findUser = user.find(item => item.email === inputState.email);
                    setErrInput(prev => ({...prev, email: {isValid: false , mesg:""}}))
    
    
                
                  
                  
               }else{
                setErrInput(prev => ({...prev, email: {isValid: true , mesg:"Please Enter Email Id"}}))
                isValidInputs[0] = false;
               }
               if(inputState.password.trim().length > 0){
                 
                  if(inputState.password.trim().length > 6){
                    setErrInput(prev => ({...prev, password: {isValid: false , mesg:""}}))
    
                  }else{ 
                    setErrInput(prev => ({...prev, password: {isValid: true , mesg:"Password Must Be Minimum Six Digits"}}))
                    isValidInputs[1] = false;
                  }
    
    
               } 
               else{
                setErrInput(prev => ({...prev, password:{isValid: true , mesg:"Please Enter Your Password"}}))
                isValidInputs[1] = false;
               }

               return isValidInputs;
    
            }
     


     const onLogin = (e) => {

           e.preventDefault();
           let formValid = validateInput();

           console.log(formValid)

            if(formValid.length === 0){  
  
                const findUser = userItem.find(user=> user.email === inputState.email);
                if(findUser){

                     if(inputState.password === findUser.password){
                        localStorage.setItem("token" , JSON.stringify(findUser))
                        setLoginErr("")
                        navigate("/");
                     
                     } else {
                        setLoginErr("Invalid Email or Password!")
                     }
                }
          

            }

 

     }



        
    return (

        userItem ?

        <div className='mm'>
            <h1 className='h1'>Welcome To Our Website</h1>
        <div className='auth-form '>
           


            <h1>Login-Page</h1>
            {loginErr && <p style={{color:"red"}}>{loginErr}</p> }

            <form onSubmit={onLogin}>

                <div className='form-group'>
                    <label htmlFor='email'> Email id</label> <br></br>
                    <input type='email' name='email' id='email' value={inputState.email}  onChange={onChangeInput}/>
                    {errInput.email.isValid && <p className='inpt-err'>{errInput.email.mesg}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password</label> <br></br>
                    <input type='password' name='password' id='password' value={inputState.password}   onChange={onChangeInput}/> <br></br>
                    {errInput.password.isValid && <p className='inpt-err'>{errInput.password.mesg}</p>}
                </div> 
                
                <button type='submit' className='btn btn-primary w-100'>Login</button>
                
                <div className='text-center par'>
                <br></br>
                   <p>If Don't Have An Account. Please </p>  <Link to ={"/auth/signup"}> Sign Up</Link>
                </div>
            </form>
         
        </div>
        </div>


           :
           
            <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh"}}>
              <p>Loading . . .</p>
              </div>
    );
};

export default LoginPage;