import React, { useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';

const Crousal = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 550;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 550;
  };
  
    const Testimonails=[
      {
        date:"Mar 10, 2019",
        stars:"4.0",
        name:"Aviral Jain",
        batch:"Science 2022",
        para:"Loved this place so much as a student.. Great and the most frank teachers you will ever see in your whole life.. Even after passing out this place holds a special place in my heart :)"
      },
  {
        date:"Jan 18, 2025",
        stars:"5.0",
        name:"Priyanshi Jain",
        batch:"Science 2025",
        para:"This coaching is seriously a game changer. Their unique approach to learning , combined with their commitment to excellence has helped me achieve outstanding results . The teachers there are so supportive and friendly i am really glad to be a part of this institute."
      },
  {
        date:"Mar 5, 2024",
        stars:"4.0",
        name:"Garima Negi",
        batch:"Science 2024",
        para:"My experience is good...the environment is so calm and relax., As for the nature of teachers, they play a crucial role in shaping and guiding students' learning experiences. Effective teachers are knowledgeable, patient, and supportive especially *Ayush sir*(physicist)."
      },
  {
        date:"Apr 10, 2024",
        stars:"5.0",
        name:"Krish Chauhan",
        batch:"Commerce 2024",
        para:"It's the best coaching I have ever seen for commerce students they provide with the finest quality education... I have learned alot from this institute. The teachers are very friendly , and very helpful for their students"
      },
  {
        date:"Apr 18, 2024",
        stars:"5.0",
        name:"Devaansh Gulati",
        batch:"Commerce 2024",
        para:"The place is good for exceptional learning and for a bright future for all the subject , but my stream was account and the mentorship I got during the session classes and after classes also it was a great experience to learn under these teachers🌷"
      },
  {
        date:"Jan 10, 2024",
        stars:"5.0",
        name:"Ritvik Suyal",
        batch:"Science 2022",
        para:"Best place to study in Laxmi Nagar. My personal experience was very great. Air conditions classes and modern teaching methods, teachers are also very great and always motivate and give their 100 percent with all the students. A great recommendation for my side"
      },
  {
        date:"May 10, 2022",
        stars:"5.0",
        name:"Khushboo Jindal",
        batch:"Science 2022",
        para:"Classes with A.R. Tutors have been so worthwhile! Ayush sir has an amazing way of breaking things down so that they are understandable, and always keeping it light and fun. He is an absolute life saver! 5 stars is not enough to describe how great of a tutor he is. I would give him 10 stars. He is extremely smart, helpful, and a great communicator. His lessons were engaging, useful, and he was very patient with everyone in class always encouraging his students to try. I would highly recommend him to anyone interested in learning ."
      },
  {
        date:"Jun 08, 2022",
        stars:"5.0",
        name:"Udit Garg",
        batch:"Commerce 2022",
        para:"One of the best and underated institute of our area. Teacher are excellent. They focus on our concept and give personal attention when there is need.We could ask our doubts without any hesitation. An institute of that deserve all stars ratings 🤩🤩🤩"
      },
  {
        date:"Apr 10, 2024",
        stars:"5.0",
        name:"Kirandeep Kaur",
        batch:"Commerce 2024",
        para:"Great learning experience from the best...studying accountancy, economics has been fun and enriching ever since i joined..."
      },
  {
        date:"Feb 04, 2023",
        stars:"4.0",
        name:"Jatin Choudhary",
        batch:"Science 2022",
        para:"I must say, A.R tutor's point is one of the best institute. It is one stop solution for all science and maths students. Faculties are subject experts. Module provided is highly recommended and efficient. They also have a forum where in we can post doubts during our self studies."
      },
  {
        date:"Jan 10, 2024",
        stars:"5.0",
        name:"Jaskirat Kaur",
        batch:"Science 2024",
        para:"As a student I must say this place has a positive energy , here teacher's are just like our friends 😊❤️"
      },
  {
        date:"Feb 01, 2023",
        stars:"5.0",
        name:"Yashika Passan",
        batch:"Science 2023",
        para:"I must say this coching is best, as teachers has a great personality and always willing to help🥰.. They will continue to explain things until students understand the concepts and they also clear all the doubts ,and they make sure students are understanding the concept clearly."
      },
  {
        date:"Apr 10, 2022",
        stars:"5.0",
        name:"Tanishq Sagar",
        batch:"Science 2022",
        para:"Best place to study in Laxmi Nagar. My personal experience was very great. Air conditions classes and modern teaching methods, teachers are also very great and always motivate and give their 100 percent with all the students. A great recommendation for my side"
      },
  {
        date:"Apr 06, 2022",
        stars:"5.0",
        name:"Yuvraj Dhingra",
        batch:"Science 2022",
        para:"This institute is one of the best institute in Laxmi Nagar !! The environment here is great and you will definitely have fun with lots of study ! I must recommend it ..."
      },
  {
        date:"Mar 07, 2022",
        stars:"5.0",
        name:"karan Singh",
        batch:"Science 2022",
        para:"It is best institute to understand the concepts better. The environment is very friendly and the teachers are very friendly. One can feel the concept here."
      },
  {
        date:"Apr 20, 2022",
        stars:"5.0",
        name:"Deepanshi Chaddha",
        batch:"Science 2022",
        para:"Supportive teachers, Love the environment."
      },
  {
        date:"Apr 20, 2022",
        stars:"5.0",
        name:"Pranay Tondon",
        batch:"Science 2024",
        para:"Amazing teachers with great experience and the explanation they do while teaching makes me understand every single topic they teach"
      },
  {
        date:"Apr 03, 2022",
        stars:"5.0",
        name:"Shashank Rai",
        batch:"Commerce 2022",
        para:"There is no one in competition...above super."
      },
  {
        date:"Aug 20, 2024",
        stars:"5.0",
        name:"Ritu Sharma",
        batch:"commerce 2024",
        para:"Arpit sir is best for commerce, really liked the place."
      },
  {
        date:"Mar 08, 2022",
        stars:"5.0",
        name:"prachi Gupta",
        batch:"Science 2022",
        para:"Probably the best education centre in laxmi nagar💜...very supportive teachers with much friendly nature!"
      },
  ]
  

  return (
    <div className="relative flex -mx-4 items-center">
      <div
        className="opacity-50 cursor-pointer hover:opacity-100 h-full flex items-center"
        onClick={slideLeft}
      >
        <FaChevronLeft fontSize="2rem" />
      </div>
      <div
        id="slider"
        className="w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-4"
      >
        {Testimonails.map((elem)=>{
          return (
            <TestimonialCard 
              date={elem.date}
              name={elem.name}
              stars={elem.stars}
              para={(elem.para).length<300?elem.para:(elem.para).slice(0,300)+" ...."}
              batch={elem.batch}
            />
          )
        })}
      </div>
      <div
        className="opacity-50 cursor-pointer hover:opacity-100 h-full flex items-center"
        onClick={slideRight}
      >
        <FaChevronRight fontSize="2rem" />
      </div>
    </div>
  );
};

export default Crousal;
