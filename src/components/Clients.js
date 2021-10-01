
import React, { useState, useEffect, Component } from 'react';
import Foundations from './Fundations';
import NGOs from './NGOs';
import Local from './Local';

const Clients = () => {

  return (
    <div>
      <Foundations/>
      <NGOs/>
      <Local/>
    </div>
    
  )
    
    

  
}

export default Clients
// const Clients = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(3);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       // setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className='container mt-5'>
//       <h1 className='text-primary mb-3'>My Blog</h1>
//       <Posts posts={currentPosts} loading={loading} />
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default Clients;




// import React from 'react'

// export default function Clients() {

//     const showList = () => {
//         const clientList = document.querySelectorAll(".client-list-name")
//         clientList.style.display = "active"
//     }
//     return (
//         <div className="container">
//             <div className="client-container">
//             <h1>Komu pomagamy?</h1>
//             <div className="buttons">
//             <button>Fundacjom</button>
//             <button>Organizacjom</button>
//             <button>Lokalnym zbiorkom</button>
//             </div>
//             <div className="header-image"></div>
//             <div className="client-list">
//                 <ul className="client-list-name hidden">Fundacjom
//                     <li className="client-single-fondation">Lorem Ipsum 1</li>
//                     <li className="client-single-fondation">Lorem Ipsum 2</li>
//                     <li className="client-single-fondation">Lorem Ipsum 3</li>
//                     <li className="client-single-fondation">Lorem Ipsum 4</li>
//                     <li className="client-single-fondation">Lorem Ipsum 5</li>
//                 </ul>
//                 <ul className="client-list-name hidden"> Organizacjom
//                     <li className="client-single-fondation">Lorem Ipsum 1</li>
//                     <li className="client-single-fondation">Lorem Ipsum 2</li>
//                     <li className="client-single-fondation">Lorem Ipsum 3</li>
//                     <li className="client-single-fondation">Lorem Ipsum 4</li>
//                     <li className="client-single-fondation">Lorem Ipsum 5</li>
//                 </ul>
//                 <ul className="client-list-name hidden"> Lokalnym zbirkom
//                     <li className="client-single-fondation">Lorem Ipsum 1</li>
//                     <li className="client-single-fondation">Lorem Ipsum 2</li>
//                     <li className="client-single-fondation">Lorem Ipsum 3</li>
//                     <li className="client-single-fondation">Lorem Ipsum 4</li>
//                     <li className="client-single-fondation">Lorem Ipsum 5</li>
//                 </ul>
//             </div>
//             </div>
            
//         </div>
//     )
// }
