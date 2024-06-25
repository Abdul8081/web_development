import React, { useState } from 'react'
import reviews from '../data';
import Card from './Card';
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function leftShiftHandler () {
      if(index-1 < 0) {
        setIndex(reviews.length-1);
      }
      else {
        setIndex(index-1);
      }
    }

    function rightShiftHandler() {
      if(index+1 >= reviews.length) {
        setIndex(0);
      }
      else {
        setIndex(index+1);
      }
    }

    function surpriseMeHandler() {
      let randomIdx =  Math.floor(Math.random()*reviews.length);
      setIndex(randomIdx);
    }
   return (
    <div className='w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
      <Card review = {reviews[index]}/>

      <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500'>
          <FaChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer '>
        <FaChevronRight/>
        </button>
      </div>
      <div className='mt-6'>
        <button 
        onClick={surpriseMeHandler}
        className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-blod text-white text-large'>
        Surprise Me
        </button>
      </div>

    </div>
  )
}

export default Testimonials;
