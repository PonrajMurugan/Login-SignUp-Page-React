import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const BooksLayout = () => {

    const navigate = useNavigate();

    const gotoHome = ()=> {
        navigate("/")
    }

    const goBack = ()=> {
        navigate(-1)
    }

    // const setparam = () =>{

    //     navigate({

    //         pathname:'/',
    //         search:"?id=1&pid=ponrajii"
    //     })

    // }

    return (
        <div>
            <h1>Books Layout Page</h1>

            <ul>
                <li><Link to={"/books/new"}>New Books</Link></li>
                <li><Link to={"/books/1"}>Book 1</Link></li>
                <li><Link to={"/books/2"}>Book 2</Link></li>
                <li><Link to={"/books/3"}>Book 3</Link></li>
            </ul>
            <Outlet />
            <button onClick={gotoHome}>Go To Main Page</button>
            <button onClick={goBack}>Go Back</button>

            
            
        </div>
    );
};

export default BooksLayout;