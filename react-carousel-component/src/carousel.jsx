import React, { useState } from 'react';

const CarouPics = ({ index, isClicked, setIsClicked, data }) => {
  return (
    <div key={'container' + index}>
      <img key={'image' + index} src={data} />

    </div>
  );

};

function Carousel(props) {
  const [isClicked, setIsClicked] = useState(0);

  const icons = props.images.map((icon, index) => {
    return <i key={index} className="fa-regular fa-circle" isClicked={isClicked} setIsClicked={setIsClicked}></i>;
  });

  const imagess = props.images.map((image, index) => {
    return <CarouPics key={index} index={index} data={image} />;
  });

  return (
    <div>
      {imagess}

   {icons}
    </div>
  );
}

export default Carousel;
