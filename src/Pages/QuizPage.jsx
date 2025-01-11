import React from 'react'
import Checkbox from '../components/FormComponents/Checkbox'
import LongAnswer from '../components/FormComponents/LongAnswer'
import ShortAnswer from '../components/FormComponents/ShortAnswer'
import Radio from '../components/FormComponents/Radio'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import SliderForm from '@/components/FormComponents/SliderForm'

const QuizPage = () => {
  return (
    <div className="flex flex-col w-full bg-gray-900 min-h-screen py-8 px-3 justify-center items-center">
        <Navbar/>
        <div className='h-24'></div>
        <div class="fixed top-48 left-96 w-72 h-72 bg-purple-300 rounded-full filter blur-xl opacity-30 animate-blob"></div>
        <div class="fixed top-96 right-96 w-72 h-72 bg-indigo-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div class="fixed top-72 left-72 w-72 h-72 bg-pink-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div>
        <Checkbox
        question="You can choose multiple options"
        options={["Option 1", "Option 2", "Option 3"]}
        />
        <LongAnswer question="Write a long answer" />
        <ShortAnswer question="Write a short answer" />
        <Radio
            question="You can choose a single option"
            options={["Option 1", "Option 2", "Option 3"]}
        />
        <Checkbox
        question="You can choose multiple options"
        options={["Option 1", "Option 2", "Option 3"]}
        />
        <LongAnswer question="Write a long answer" />
        <ShortAnswer question="Write a short answer" />
        <Radio
            question="You can choose a single option"
            options={["Option 1", "Option 2", "Option 3"]}
        />
        <SliderForm question='Public Speaking'/>
        <div className='justify-end items-center'>
            <button className="p-[3px] w-fit relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-gray-900 rounded-[6px] font-raleway font-bold relative group transition duration-200 text-white hover:bg-transparent">
                Submit
            </div>
            </button>
        </div>
        </div>
    </div>
  )
}

export default QuizPage
