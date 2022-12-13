import React from 'react'

function About({scrollContact}) {
  return (
    <div className='flex min-w-cust justify-center  px-6 sm:px-24 items-center about-main'>
       <div className="sm:mx-6 sm:p-10  ">
        <div className="title  ">
        <div className="lines count"><span>01</span></div>
        <h1 className='font-semibold text-2xl'>About  StartUp</h1>
        </div>
        <div className="lines sm:mb-5"><span>"</span></div>
        <p className="leading-relaxed text-black/80 sm:mr-9">  StartUp is focused on Storage and System designs for any occasion. With heavy inspiration from Anime and Cars. Our Storages and Liveries are a unique style to each indicidual person with the StartUp touch. We offer in house artists that can create amazing pieces just for your Storage. Lorem and Ipsum created StartUp due to having similar passions when it came to modification of storage and Lorem designs</p>
        <br />
        <p className="leading-relaxed mb-2 sm:mb-6  text-black/80 sm:mr-9">Our work truly stands out with attention to all aspects. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab magni ipsum soluta veritatis facere fugiat eveniet culpa, eum illum, in distinctio consequatur optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi facilis fugiat unde perspiciatis, non mollitia earum a laborum eum nemo neque repudiandae ut explicabo quibusdam dolores voluptates aspernatur nulla inventore voluptatum repellendus.

        You will work directly with us in Art, Design and Completion with the StartUp team of 6 dedicated people.</p>
       <div className="text-center mt-6 sm:text-left">
        <a href="#" onClick={scrollContact} className="text-xl   font-semibold secondary-btn">Learn More</a>
        </div>
       </div>
    </div>
  )
}

export default About