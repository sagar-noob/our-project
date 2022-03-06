import React, {useState} from 'react'

export default function Loginform({Login,error}) {
    //const[details, setDetails] = useState({email:"" ,password:""});
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    
    const sumbitHandler = (e) => {
        e.preventDefault();
        console.log("name"+name)
        console.log("emai"+name)
        console.log("password"+name)
        
        
    }
  return (
    <form onSubmit={sumbitHandler}> 
        <div className='form-inner'>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' id="email" onChange={(e) => setEmail(e.value)} value={name}/>

            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name='password' id="password" onChange={(e) => setPassword(e.value)} value={password}/>
                </div>
                <input type="submit" value="Login"></input>


        </div>
    </form>
  )
}

