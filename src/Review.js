import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
 
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex;
      if (index < people.length - 1)
       newIndex = index + 1;
      else newIndex=0;
      return newIndex;
    });
  };
  const prevPerson = () => {
    let newIndex;
    setIndex((index) => {
      if (index > 0)
     newIndex = index - 1;
     else newIndex=people.length-1;
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};
export default Review;


// const Review = () => {
// const [index , setIndex]=useState(0);
// let newIndex;
//   const { name, job, image, text } = people[index];
//   const randomPerson = () => {
//     newIndex = Math.floor(Math.random() * people.length);
//     if(newIndex===index)
//     newIndex=index+1;
//     setIndex(newIndex);
//   }
//   const prePerson=()=>{
//         setIndex((index)=>{
//           if(index>0)
//          newIndex=index-1;
//          else return people.length-1;
//          return newIndex;
//         });
//   }
//   const nextPerson=()=>{
//      setIndex((index)=>{
//        if(index<people.length-1)
//          newIndex=index+1;
//          else return 0;
//          return newIndex;
//      })
//   }
 
//   return (
//     <article className='review'>
//       <h2>{name}</h2>
//       <img src={image} alt={name} style={{width:'100px',height:"100px", borderRadius:'50%'}}/> <br />
//           <h4>{job}</h4>
//       <p>{text}</p>
//       <button onClick={prePerson} style={{ width: '50px', height: "50px", borderRadius: '50%',backgroundColor:"blue",border:"none" }}>prev</button>
//       <button onClick={nextPerson} style={{ width: '50px', height: "50px", borderRadius: '50%', backgroundColor: "blue", border: "none" }}>next</button><br />
// <button onClick={randomPerson}>surprise me</button>
//     </article>
//   )
// }

// export default Review
