import React from 'react';

import './star.css';

const Star = ({selected, onRate}) => (
   <div className={selected ? "star selected" : "star"} onClick={onRate}>

   </div>
);

export default Star;
