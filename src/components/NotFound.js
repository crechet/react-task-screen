import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return(
    <div>
      <p>Sorry, page not found</p>
      <Link to="/">Back</Link>
    </div>
  );
};
