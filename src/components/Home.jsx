
// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// Define the Home component
function Home() {
  return (
    <div>
      <Navbar/>
      

      {/* Content of the Home component */}
      <div>
        {/* Add content specific to the Home component */}
        <h1>Welcome to our website!</h1>
        <p>This is the home page content.</p>
      </div>
    </div>
  );
}

// Export the Home component
export default Home;
