import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
     <li>Lorem 1</li>
     <li>Lorem 2</li>
     <li>Lorem 3</li>
     <li>Lorem 4</li>
     <li>Lorem 5</li>
    </ul>
  );
};

export default Posts;