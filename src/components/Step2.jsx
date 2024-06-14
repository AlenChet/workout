import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="step-content">
      <h2>Step 2</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
