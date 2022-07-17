import React, { useState, useEffect } from 'react';

function Carousel(props) {
  const [isClicked, setIsClicked] = useState(0);
  const Arraylength = props.images.length;
  const icons = props.images.map((icon, index) => {
    const onClickFn = index => {
      setIsClicked(prestate => {
        clearInterval(intervalID);
        carousal();
        return index;
      });
    };
    return <i key={index} className={isClicked === index ? 'fa-solid fa-circle icon-adjust' : 'fa-regular fa-circle icon-adjust'} onClick={() => { onClickFn(index); }}></i>;
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

  const LeftChevron = ({ index, isClicked, setIsClicked }) => {
    const onClickFn = index => {
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
    return <i className={isClicked === index ? 'fa-solid fa-chevron-left chevron-adjust' : 'hidden'} onClick={() => { onClickFn(index); }}></i>;
  };

  const RightChevron = ({ index, isClicked, setIsClicked }) => {
    const onClickFn = index => {
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
    return <i className={isClicked === index ? 'fa-solid fa-chevron-right chevron-adjust' : 'hidden'} onClick={() => { onClickFn(index); }}></i>;
  };

  const image = props.images.map((image, index) => {
    return <CarouPics key={index} index={index} data={image} isClicked={isClicked} setIsClicked={setIsClicked}/>;
  });

  const leftChevron = props.images.map((image, index) => {
    return <LeftChevron key={index} index={index} isClicked={isClicked} setIsClicked={setIsClicked} />;
  });
  const rightChevron = props.images.map((image, index) => {
    return <RightChevron key={index} index={index} isClicked={isClicked} setIsClicked={setIsClicked} />;
  });

  return (
    <div className='container'>
      <div className='chevron'>
        {leftChevron}
       {image}
        {rightChevron}
      </div>
      <div className='icon-container'>
       {icons}
      </div>
    </div>
  );
}

export default Carousel;
