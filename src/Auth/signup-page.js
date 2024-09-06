import React , {  useContext,useState  , useEffect} from 'react';
import userData from "../userData.json";
import { Link, useNavigate  } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { UserContext } from '../store/userContext';





const SignUpPage = () => {
    const navigate = useNavigate(); 

    const {userItem, addUser} = useContext(UserContext);
    

    // const [userData, setUserData] = useState(null);
    const [inputState, setInputState] = useState({
        fname:"",
        lname:"",
        email:"",
        password:""

    })





    const onChangeInput = (e) =>{

   let name = e.target.name;
   let val = e.target.value;
   setInputState(prev => ({...prev, [name]: val}));




    }

     




    // const passwordHintId = useId();

    // const unique_id = uuid();

    const onSignup = (e) =>{
           
        e.preventDefault();
        const unique_id = uuid();
        const useNavigate = uuid();
         console.log(unique_id) 
         const newUser = {
            id:unique_id,
            firstName : inputState.fname,
            lastName : inputState.lname,
            email : inputState.email,
            password : inputState.password

         }

       
      
         addUser(prev => [...prev, newUser])
        
        navigate("/auth/login-page")

    }
       




    // useEffect(()=>{
       

    //     localStorage.setItem("userdata", JSON.stringify(userData) )

    // },[userData])
  

    return (

         userItem ?

        <div className='mm'>
            <h1 className='h1'>You Need To Sign Up</h1>
        <div className='auth-form'>
            <h1>Sign-Up-Page</h1>
            <form onSubmit={onSignup}>

                <div className='form-group'>
                    <label htmlFor='fname'> First Name</label> <br></br>
                    <input type='text' name='fname' id='fname' value={inputState.fname} onChange={onChangeInput}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='lname'>Last Name</label> <br></br>
                    <input type='text' name='lname' id='lname' value={inputState.lname} onChange={onChangeInput}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>E mail</label> <br></br>
                    <input type='email' name='email' id='email' value={inputState.email} onChange={onChangeInput}/> <br></br>
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password</label> <br></br>
                    <input type='password' name='password' id='password' value={inputState.password} onChange={onChangeInput}/> <br></br>
                </div>
                
                <button type='submit' className='btn btn-primary w-100'>Sign up</button>
            </form>
            <div className='text-center par'> 
            <br></br>
                   // <p>If Have An Account. Please </p> <Link to ={"/auth/login"}>Log in</Link>
                </div>
        </div>
        </div>
        :
           <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh"}}>
           <p>Loading . . .</p>
           </div>
    );
};

export default SignUpPage;
