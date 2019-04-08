import React, {useState} from 'react';
import { post } from '../../utils/api';

const sendData = (field) => {
  const Data = {
    Name: 'Pulkit',
    field
  };
  post('/api/setUserInfo', { Data })
    .then((res) => {
      console.log(res);
    });
};

const Homepage = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Hello</h1>
      <input type={"text"} onChange={({target:{value}})=>setText(value)} />
      <button type="button" onClick={()=>sendData(text)}>Click Me</button>
    </div>
  )
};

export default Homepage;
