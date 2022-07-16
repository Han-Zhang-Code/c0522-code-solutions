import React, { useState } from 'react';

const ListTopics = ({ index, isClicked, setIsClicked, data }) => {
  const onClickFn = index => {
    setIsClicked(preState => {
      if (preState === index) {
        return -1;
      }
      return index;
    });
  };
  return (
    <div key={'list_' + index }>
      <li key={'topic_' + index } onClick={() => { onClickFn(index); }} className='topics'>{data.topic}</li>
      <li key={'detail_' + index } onClick={() => { onClickFn(index); }} className={isClicked === index ? 'details' : 'details hidden'}>{data.detail}</li>
    </div>
  );
};

function Accordion(props) {
  const [isClicked, setIsClicked] = useState(-1);

  return (
    <div>
    {
      props.topics.map((topic, index) => {
        return <ListTopics key={index} index={index} isClicked={isClicked} setIsClicked={setIsClicked} data={topic} />;
      })
    }
    </div>
  );
}

export default Accordion;
