import React from 'react';
import '../styles/BrokenImageExample.css';
import defaultImg from '../images/default.jpg';  // Correct import of default image

const BrokenImageExample = () => {
    // Image sources
    const brokenImage1 = 'https://www.example.com/non-existent-image1.jpg'; // Broken Image 1
    const brokenImage2 = 'https://www.example.com/non-existent-image2.jpg'; // Broken Image 2

    return (
        <div className="broken-image-example">
            <h2>Broken Image Example</h2>

            {/* Image 1: Broken Image (Should show only default image) */}
            <div className='example img-container'>
                <div className="image-container">
                    <img
                        src={brokenImage1}
                        alt="Broken Image 1"
                        onError={(e) => e.target.style.display = 'none'}  // Hide broken image and show nothing
                    />
                    <p>Broken Image 1 (Hidden on error)</p>
                </div>

                {/* Image 2: Broken Image (Should show only default image) */}
                <div className="image-container">
                    <img
                        src={brokenImage2}
                        alt="Broken Image 2"
                        onError={(e) => e.target.style.display = 'none'}  // Hide broken image and show nothing
                    />
                    <p>Broken Image 2 (Hidden on error)</p>
                </div>

                {/* Image 3: Default Image */}
                <div className="image-container">
                    <img
                        src={defaultImg}
                        alt="Default Person"
                    />
                    <p>Default Image</p>
                </div>
            </div>
        </div>
    );
};

export default BrokenImageExample;
