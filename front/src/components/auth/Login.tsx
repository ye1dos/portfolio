import React, {useState, useEffect, useRef} from 'react';

const Login = () => {
    const name = useRef(null)
    const pass = useRef('')
    const handleClick = (e) => {
        e.preventDefault()
        console.log(name.current.value)
        console.log(pass.current.value)
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <form>
                <input type="text" ref={name}/>
                <input type="password" ref={pass}/>
                <button type="submit" onClick={handleClick}> submit</button>
            </form>
        </div>
    )
}

export default Login;