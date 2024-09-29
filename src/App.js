import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [isBlackSection, setIsBlackSection] = useState(false);

  const toggleSection = () => {
    setIsBlackSection(!isBlackSection);
  };

  const sectionDescription = isBlackSection
    ? 'This is the black section, representing darkness and elegance.'
    : 'This is the white section, symbolizing light and clarity.';

  return (
    <div className={`container ${isBlackSection ? 'black' : 'white'}`}>
      <div className="content">
        <h1>{isBlackSection ? 'Black Section' : 'White Section'}</h1>
        <p>{sectionDescription}</p>
        <button onClick={toggleSection}>
          Switch to {isBlackSection ? 'White' : 'Black'} Section
        </button>
      </div>
    </div>
  );
};

export default App;
