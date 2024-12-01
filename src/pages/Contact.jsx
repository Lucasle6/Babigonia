import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    const handleRedirect = () =>{
        navigate("/");
    };

  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center item-start gap-6'>
                <p className='font-semibold'>Our Store</p>
                <p className='text-gray-500'>Blancas Mariposas #999<br/> Villahermosa,Tab. <br/> C.P. 10987 </p>
                <p className='text-gray-500'>Tel: (993) 391-74-78 <br/>Email: admin@babigonia.com</p>
                <p className='text-gray-500'>Learn more about our Team.</p>
                <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' onClick={handleRedirect}>Explore at our Home page!</button>
            </div>
        </div>
      
      <NewsletterBox/>

    </div>
  )
}

export default Contact
