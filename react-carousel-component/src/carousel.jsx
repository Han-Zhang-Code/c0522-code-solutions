import React, { useState, useEffect } from 'react';

function Carousel(props) {
  const [isClicked, setIsClicked] = useState(0);
  const Arraylength = props.images.length;

  const onClickFnIcon = index => {
    setIsClicked(prestate => {
      clearInterval(intervalID);
      carousal();
      return index;
    });
  };
  const icons = props.images.map((icon, index) => {
    return <i key={index} className={isClicked === index ? 'fa-solid fa-circle icon-adjust' : 'fa-regular fa-circle icon-adjust'}
    onClick={() => { onClickFnIcon(index); }}></i>;
  });

  let intervalID;
  const carousal = () => {
    intervalID = setInterval(() => {
      setIsClicked(prestate => {
        prestate++;
        if (prestate === Arraylength) {
          prestate = 0;
        }
        return prestate;
      });
    }, 2000);
  };

  useEffect(() => {
    carousal();
    return () => clearInterval(intervalID);
  });
  const CarouPics = ({ index, isClicked, setIsClicked, data }) => {
    return (
      <div key={'container' + index}>
        <img key={'image' + index} src={data} className={isClicked === index ? 'image' : 'image hidden'} />
      </div>
    );
  };

  const onClickFnLeft = index => {
    clearInterval(intervalID);
    carousal();
    setIsClicked(prestate => {
      prestate--;
      if (prestate === -1) {
        prestate = Arraylength - 1;
      }
      return prestate;
    });
  };
  const LeftChevron = ({ index, isClicked, setIsClicked }) => {
    return <i className='fa-solid fa-chevron-left chevron-adjust' onClick={() => { onClickFnLeft(index); }}></i>;
  };

  const onClickFnRight = index => {
    clearInterval(intervalID);
    carousal();
    setIsClicked(prestate => {
      prestate++;
      if (prestate === Arraylength) {
        prestate = 0;
      }
      return prestate;
    });
  };
  const RightChevron = ({ index, isClicked, setIsClicked }) => {
    return <i className='fa-solid fa-chevron-right chevron-adjust' onClick={() => { onClickFnRight(index); }}></i>;
  };

  const image = props.images.map((image, index) => {
    return <CarouPics key={index} index={index} data={image} isClicked={isClicked} setIsClicked={setIsClicked}/>;
  });

  return (
    <div className='container'>
      <div className='chevron'>
        <LeftChevron />
       {image}
        <RightChevron />
      </div>
      <div className='icon-container'>
       {icons}
      </div>
    </div>
  );
}

export default Carousel;
