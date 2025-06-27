import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center items-center'>
        <form className='flex justify-center items-center space-y-5 w-3xl bg-white m-5 rounded-2xl shadow-sm'> 
        <div className='flex flex-col space-y-2 w-2xl '>
            <label className='text-gray-700 text-xl mx-3'>Subject</label>
            <input type="text"  name="subject" className='w-full mx-3 p-1'  />
        </div>
           <div className='flex flex-col space-y-2 w-2xl '>
            <label className='text-gray-700 text-xl mx-3'>Subject</label>
            <input type="text"  name="subject" className='w-full mx-3 p-1'  />
        </div>
           <div className='flex flex-col space-y-2 w-2xl '>
            <label className='text-gray-700 text-xl mx-3'>Subject</label>
            <input type="text"  name="subject" className='w-full mx-3 p-1'  />
        </div>

        </form>
    </div>
  )
}

export default Form