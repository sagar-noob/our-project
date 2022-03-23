import React, {useState} from 'react'

export default function Registrationform({Login,error}) {
    const[details, setDetails] = useState({email:"" ,password:""});
    const [name, setName] = useState();
    const [password, setpassword] = useState();
    const [confirm , setconfirm ] = useState();
    const [email, setemail] = useState();



    const sumbitHandler = e => {
        e.preventDefault();
        console.log("name"+name)
        console.log("password"+name)
        console.log("confirm password"+name)
        console.log("email"+name)




    }
  return (
    <form onSubmit={sumbitHandler}> 
        <div className='form-inner'>
            <h2>Registration form</h2>
            <div className='form-group'>
                <label htmlFor='Name'>Full Name:</label>
                <input type="name" name='name' id="name" onChange={e => setName(e.value)} value={name}/>

            </div>
            <div className='form-group'>
                <label htmlFor='Email'>Email:</label>
                <input type="email" name='email' id="email" onChange={e => setemail(e.value)} value={email} />
                </div>
            <div className='form-group'>
                <label htmlFor='Password'>Password:</label>
                
                <input type="password" name='password' id="password" onChange={e => setpassword(e.value)} value={password}/>

                </div>
                <div className='form-group'>
                <label htmlFor='confirm '>Confirm password:</label>
                <input type="confirm " name='confirm ' id="confirm " onChange={e => setconfirm(e.value)} value={confirm }/>
                </div>
                
                

                <input type="submit" value="Register"></input>


        </div>
    </form>
  )
}

