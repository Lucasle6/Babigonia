import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, laborum aut maxime iste error nemo consequatur nam explicabo quasi numquam laboriosam minima pariatur libero harum nisi dolorem illum ratione excepturi iure sed, perspiciatis inventore temporibus! Quisquam tempore eveniet minima porro!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore qui nemo aut quae voluptates at! Maxime consequatur numquam dolor, fugiat ut facilis adipisci officia!</p>
                <b className='text-gray-800'>Our mission</b>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eos minima voluptatibus dignissimos nulla autem libero sequi! Pariatur, molestiae quidem!</p>
            </div>
        </div>
        <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente quis possimus voluptas voluptatem officia temporibus ratione tempora quidem reprehenderit?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente quis possimus voluptas voluptatem officia temporibus ratione tempora quidem reprehenderit?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Accesible Customer Service</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente quis possimus voluptas voluptatem officia temporibus ratione tempora quidem reprehenderit?</p>
            </div>
        </div>
        <NewsletterBox/>
      
    </div>
  )
}

export default About
