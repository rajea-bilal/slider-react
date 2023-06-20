import React from 'react';
import { shortList, list, longList } from '../../data'
// import Person from '../Person'

function Carousel({ currentPerson, setCurrentPerson }) {

  const [ people, setPeople ] = React.useState(longList)

   const handleBtnPrev = () => {
     if(currentPerson === 0) {
      setCurrentPerson(people.length - 1)
     } else if(currentPerson < people.length) {
      const newCurrentPerson = currentPerson - 1
      setCurrentPerson(newCurrentPerson)
    } 
  }

     const handleBtnNext = () => {
    if(currentPerson === people.length - 1) {
        setCurrentPerson(0)
     } else if(currentPerson >= 0) {
      const newCurrentPerson = currentPerson + 1
      setCurrentPerson(newCurrentPerson)
    
    } 
  }


  const currentSlide = people[currentPerson]
  console.log(currentSlide)
  const { image, name, title, id, quote}  = currentSlide

 
  return (
    <>
    <section className="people-container">
      <article className="person">
        <div className="img-box">
          <img src={image} />
        </div>

        <div className="person-bio">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>

        <div>
          <p className="person-text">{quote}</p>
        </div>
      </article>

      <button className="btn btn-prev" onClick={handleBtnPrev}>prev</button>
      <button className="btn btn-next" onClick={handleBtnNext}>next</button>
    </section>

   </>
  );
}

export default Carousel;
