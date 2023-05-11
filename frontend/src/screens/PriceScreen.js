import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function PriceScreen() {
  const [price, setPrice] = useState();
  useEffect(() => {
    axios.get('http://localhost:4000/').then((res) => {
      setPrice(res.data.val[0]);
    }).catch((err)=>{console.log(err)})
  }, []);
  const datas = price?.map((i) => (
   <h4> {i}</h4>
    
  ))
  return (

    <div>
      {console.log("data - "+ price)}
      
      
         <h1>Price Today</h1>
        
          {datas}
     
      
      
    </div>
  );
}
