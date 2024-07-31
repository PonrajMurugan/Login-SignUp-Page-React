import { Link, useNavigate } from "react-router-dom";
import "./header.css"
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from "../../store/todoContext";

function Header(){
    const {items} = useContext(TodoContext);

    const navigate = useNavigate();
    const [user , setUser] = useState(null) 

    const onLogout =()=>{
        localStorage.removeItem("token")
        navigate("/auth/login-page") 
     }


     useEffect(()=>{

        let getItem = localStorage.getItem("token")
        console.log(getItem)
        setUser(JSON.parse(getItem));

     }, [])


    return(
        
        
        <div className="header-top">
            <nav className='d-flex justify-content-between'>
        <ul className="navbar">
            <li><Link to={"home-page"}>Home</Link></li>
            <li><Link to={"about-page"}>About</Link></li>
            <li><Link to={"contact-page"}>Contact</Link></li>
            <li><Link to={"books"}>Books</Link></li>
        </ul>
        <div className="d-flex">
         { user && <h2> {user.firstName} { user.lastName } </h2> } 
         <button onClick={onLogout} className='btn btn-primary btp' style={{minWidth:"120px", height:"40px"}}>LoG OuT</button>
         <span className="badge bg-success hd">{items.length}</span>
        </div>
       </nav> 
    </div> 
    );
}


export default Header;
