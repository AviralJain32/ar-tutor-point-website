// import React from 'react'

// const Form = () => {
//   return (
//     <div className=" p-6">
//         <div className='grid md:grid-cols-2 gap-y-8 gap-x-4'>
//             <div className='flex flex-col'>
//                 <label htmlFor='name' className='mb-2 font-medium text-lg'>Name</label>
//                 <input 
//                     type="text" 
//                     id='name' 
//                     placeholder="Full Name" 
//                     className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//                 />
//             </div>
//             <div className='flex flex-col'>
//                 <label htmlFor='phone' className='mb-2 font-medium text-lg'>Phone Number</label>
//                 <input 
//                     type="text" 
//                     id='phone' 
//                     placeholder="+91" 
//                     className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//                 />
//             </div>
//             <div className='flex flex-col '>
//                 <label htmlFor='email' className='mb-2 font-medium text-lg'>Email (Optional)</label>
//                 <input 
//                     type="email" 
//                     id='email' 
//                     placeholder="Example@gmail.com" 
//                     className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//                 />
//             </div>
//             <div className='flex flex-col'>
//                 <label htmlFor='class' className='mb-2 font-medium text-lg'>Class</label>
//                 <input 
//                     type="text" 
//                     id='class' 
//                     placeholder="Class" 
//                     className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black'
//                 />
//             </div>
//         </div>
//         <div className='flex flex-col mt-8 '>
//             <label htmlFor='message' className='mb-2 font-medium text-lg'>Message</label>
//             <textarea 
//                 id='message' 
//                 placeholder="Type your message here" 
//                 className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black' 
//                 cols="30" 
//                 rows="9">
//             </textarea>
//         </div>
//         <button className='mt-4 bg-black text-white p-2 rounded-md hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-black'>
//             SUBMIT
//         </button>
//     </div>
//   )
// }

// export default Form

import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-6 h-[40rem]">
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-y-4 gap-x-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-lg">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Full Name"
            {...register('name', { required: "Name is required" })}
            className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 font-medium text-lg">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            placeholder="+91"
            {...register('phone', { required: "Phone number is required" ,maxLength:10})}
            className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-lg">Email (Optional)</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Example@gmail.com"
            {...register('email', { 
              pattern: { 
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address" 
              }
            })}
            className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="class" className="mb-2 font-medium text-lg">Class</label>
          <input 
            type="text" 
            id="class" 
            placeholder="Class"
            {...register('class', { required: "Class is required" })}
            className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black ${errors.class ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.class && <span className="text-red-500 text-sm mt-1">{errors.class.message}</span>}
        </div>

        <div className="flex flex-col md:col-span-2 ">
          <label htmlFor="message" className="mb-2 font-medium text-lg">Message</label>
          <textarea 
            id="message" 
            placeholder="Type your message here"
            {...register('message', { required: "Message is required" })}
            className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black ${errors.message ? 'border-red-500' : 'border-gray-300'}`} 
            cols="30" 
            rows="9">
          </textarea>
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
        </div>

        <button 
          type="submit" 
          className="mt-4 bg-black text-white p-2 rounded-md hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-black md:col-span-2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
