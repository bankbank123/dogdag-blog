import '../css/TopicCard.css';
import ArUp from '../assets/arrow_up.png'
import { useState, useEffect } from 'react';

export default function TopicCard() {

  const [startIndex, setStartIndex] = useState(() => {
    const storedIndex = localStorage.getItem('currentCardIndex');
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentCardIndex', startIndex.toString());
  }, [startIndex]);

  const Text = [
    { header: "header 1", content: "content 1" },
    { header: "header 2", content: "content 2" },
    { header: "header 3", content: "content 3" },
    { header: "header 4", content: "content 4" },
    { header: "header 5", content: "content 5" },
    { header: "header 6", content: "content 6" },
    { header: "header 7", content: "content 7" },
    { header: "header 8", content: "content 8" },
  ]

  const visibleText = Text.slice(startIndex, startIndex + 4);


  const animation_card = () => {
    const card_1 = document.getElementById("card-1")
    const card_2 = document.getElementById("card-2")
    const card_3 = document.getElementById("card-3")
    const card_4 = document.getElementById("card-4")


    card_1.classList.add('animate-fadeChange')
    card_2.classList.add('animate-fadeChange')
    card_3.classList.add('animate-fadeChange')
    card_4.classList.add('animate-fadeChange')

    card_1.addEventListener('animationend', function () {
      card_1.classList.remove('animate-fadeChange')
      card_2.classList.remove('animate-fadeChange')
      card_3.classList.remove('animate-fadeChange')
      card_4.classList.remove('animate-fadeChange')
    })
  }

  const handlecardChange_left = () => {
    if (startIndex + 4 >= Text.length) {
      return;
    }
    animation_card()
    setStartIndex(prevIndex => prevIndex + 4);
  }

  const handlecardChange_right = () => {
    if (startIndex === 0) {
      return;
    }
    animation_card()
    setStartIndex(prevIndex => prevIndex - 4)
  }

  return (

    <div className="topic-card-container">
      <div className="topic-header-container">
        ทั่วไป
      </div>

      <div className="card-container">
        {visibleText.map((text, index) => (
          <div className="card-cover" id={`card-${index + 1}`} key={index}>
            <div className="topic-card-header">
              <h1>{text.header}</h1>
            </div>
            <div className="topic-card-body child-1">
              <p>{text.content}</p>
            </div>
          </div>
        ))}



        {/* <div className="card-cover" id='card-2'>
          <div className="topic-card-header">
            <h1>{ }</h1>
          </div>
          <div className="topic-card-body">
            <p>{ }</p>
          </div>
        </div>

        <div className="card-cover" id='card-3'>
          <div className="topic-card-header">
            <h1>{ }</h1>
          </div>
          <div className="topic-card-body">
            <p>{ }</p>
          </div>
        </div>

        <div className="card-cover" id='card-4'>
          <div className="topic-card-header">
            <h1>{Text}</h1>
          </div>
          <div className="topic-card-body">
            <p>{ }</p>
          </div>
        </div> */}

      </div>
      <img src={ArUp} alt="Arrow-Left" className='Arrow-left Arrow' onClick={handlecardChange_left} />
      <img src={ArUp} alt="Arrow-Right" className='Arrow-right Arrow' onClick={handlecardChange_right} />
    </div>

  );
}
