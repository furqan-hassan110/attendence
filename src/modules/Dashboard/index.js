import React from 'react'
import avatar from "../../assets/images/avatar.svg"

const Dashboard = () => {
  const contacts =[
    {
      name: "ali",
      status:'mara hua',
      img:avatar
    },
    {
      name: "ali",
      status:'mara hua',
      img:avatar
    },
    {
      name: "ali",
      status:'mara hua',
      img:avatar
    },
    {
      name: "ali",
      status:'mara hua',
      img:avatar
    },
    {
      name: "ali",
      status:'mara hua',
      img:avatar
    }
  ]

  
  return (
    <div className='w-screen flex'>
        <div className='w-[25%] border border-black h-screen bg-secondary'>
            <div className='flex justify-center items-center my-8' >
              <img className='border border-purple-300 p-[2px] rounded-full' src={avatar} width={50}height={50}></img>
              <div className='ml-4'>
                <h3 className='text-2xl'>furqan dev</h3>
                <p className='text-lg font-light'>My account</p>
              </div>
            </div>
        </div >
        <hr/>
        <div>
          <div>
            messages
          </div>
          <div>
            {contacts.map(({name, status, img})=>{
              return(
                <div>
                  <div className='flex justify-center items-center my-8' >
                     <img className='border border-purple-300 p-[2px] rounded-full' src={img} width={50}height={50}></img>
                      <div className='ml-4'>
                        <h3 className='text-2xl'>{name}</h3>
                        <p className='text-lg font-light'>{status}</p>
                      </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
        <div className='w-[50%] border border-black h-screen'></div>
        <div className='w-[25%] border border-black h-screen'></div>
    </div>
  )
}

export default Dashboard