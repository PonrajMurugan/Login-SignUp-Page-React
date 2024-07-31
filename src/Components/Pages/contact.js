import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate()

    const onForward= ()=>{
        navigate(+1)

    }

    return (
        <div>
            <h1>Contact page</h1>
            <button onClick={onForward}>Forward</button>
        </div>
    );
};

export default Contact;