import React,{useState} from 'react'
import Input from '../../components/input'
import Button from '../../components/button'

const Form = ({
  isSignInPage= true,
}) => {
  const [data, setData] = useState({
    ...(isSignInPage && {
      fullName:"",
    }),
    email:"",
    password:""
  })
  console.log("data >>", data)
  return (
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
        <div className='text-xl font-light'>{isSignInPage ? "Sign up now to get explore" : 'Sign up now to get started'}</div>
        <form className="flex flex-col items-center w-full" onSubmit={()=>console.log("submitted")}>
       {!isSignInPage && <Input label='Full name' name='name' placeholder='Enter Your Full Name ' className='mb-6' value={data.fullName} onChange={(e)=>{setData({...data, fullName:e.target.value})}}/>}
        <Input label='Email' name='email' type='email' placeholder='Enter Your Email address 'className='mb-6' value={data.email} onChange={(e)=>{setData({...data, email:e.target.value})}}/>
        <Input label='Password' name='password' placeholder='Enter Your Password 'className='mb-14' value={data.password} onChange={(e)=>{setData({...data, password:e.target.value})}}/>
        <Button label={isSignInPage ? "Sign in" :'Sign up'} className='w-1/2 mb-2' type='submit'/>
        </form>
        <div>{isSignInPage ? "Didn't have account?" : 'Already have account'} <span className='text-primary cursor-pointer underline'>{isSignInPage?" Sign up":" Sign In"}</span>
        </div>
    </div>
  )
}

export default Form