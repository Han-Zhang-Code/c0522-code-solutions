import React, { useState, useEffect } from 'react';

const CarouPics = ({ index, isClicked, setIsClicked, data }) => {
  return (
    <div key={'container' + index}>
      <img key={'image' + index} src={data} className={isClicked === index ? 'image' : 'image hidden'} />
    </div>
  );
};

const LeftChevron = ({ onClickFnLeft }) => {
  return <i className='fa-solid fa-chevron-left chevron-adjust' onClick={onClickFnLeft}></i>;
};

const RightChevron = ({ onClickFnRight }) => {
  return <i className='fa-solid fa-chevron-right chevron-adjust' onClick={onClickFnRight}></i>;
};

function Carousel(props) {
  const [isClicked, setIsClicked] = useState(0);
  const [pause, setPause] = useState(false);
  const Arraylength = props.images.length;

  const onClickFnIcon = index => {
    setPause(true);
    setIsClicked(prestate => {
      return index;
    });
  };
  const icons = props.images.map((icon, index) => {
    return <i key={index} className={isClicked === index ? 'fa-solid fa-circle icon-adjust' : 'fa-regular fa-circle icon-adjust'}
      onClick={() => { onClickFnIcon(index); }}></i>;
  });

  useEffect(() => {
    setTimeout(() => { setPause(false); }, 3000);
  });

  useEffect(() => {
    if (pause) return;

    const timeoutId = setTimeout(() => {
      setIsClicked(prestate => {
        prestate++;
        if (prestate === Arraylength) {
          prestate = 0;
        }
        return prestate;
      });
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  const onClickFnLeft = () => {
    setPause(true);
    setIsClicked(prestate => {
      prestate--;
      if (prestate === -1) {
        prestate = Arraylength - 1;
      }
      return prestate;
    });
  };

  const onClickFnRight = () => {
    setPause(true);
    setIsClicked(prestate => {
      prestate++;
      if (prestate === Arraylength) {
        prestate = 0;
      }
      return prestate;
    });
  };

  const image = props.images.map((image, index) => {
    return <CarouPics key={index} index={index} data={image} isClicked={isClicked} setIsClicked={setIsClicked} />;
  });

  return (
    <div className='container'>
      <div className='chevron'>
        <LeftChevron onClickFnLeft={onClickFnLeft} />
        {image}
        <RightChevron onClickFnRight={onClickFnRight} />
      </div>
      <div className='icon-container'>
        {icons}
      </div>
    </div>
  );
}

export default Carousel;
