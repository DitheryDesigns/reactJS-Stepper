import React, { useState } from 'react';
import './styles/Stepper.css'; // Import your CSS file for styling

const Stepper = ({ steps }) => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(0);

  // Function to go to a specific step
  const goToStep = (step) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  };

  // Function to go to the next step
  const nextStep = () => {
    goToStep(currentStep + 1);
  };

  // Function to go to the previous step
  const previousStep = () => {
    goToStep(currentStep - 1);
  };

  return (
    <div className="stepper">
      {/* Display the current step's content */}
      <div className="step-content">{steps[currentStep]}</div>

      {/* Navigation buttons */}
      <div className="step-navigation">
        {/* Show "Previous" button if not on the first step */}
        {currentStep > 0 && (
          <button className="step-button" onClick={previousStep}>
            Previous
          </button>
        )}

        {/* Show "Next" button if not on the last step */}
        {currentStep < steps.length - 1 && (
          <button className="step-button" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
