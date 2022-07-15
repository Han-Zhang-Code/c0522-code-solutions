import React, { useState } from 'react';
function ValidatedInput() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  let message = '';
  let mark = 'fa-solid fa-xmark font-wrong-adjust';
  if (value.length < 8 && value.length !== 0) {
    message = 'Your password is too short.';
    mark = 'fa-solid fa-xmark font-wrong-adjust';
  } else if (value.length === 0) {
    message = 'A password is required.';
    mark = 'fa-solid fa-xmark font-wrong-adjust';
  } else {
    mark = 'fa-solid fa-check font-right-adjust';
  }
  return (
    <div>
      <label>Password</label>
      <div className='row'>
        <input type="password" className='passwordarea' value={value} onChange={handleChange}/>
        <i className={mark}></i>
      </div>
      <label className='errormessage'>{message}</label>
    </div>
  );
}
export default ValidatedInput;
