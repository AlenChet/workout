import React from 'react';

const Step1 = ({ nextStep, handleChange, formData }) => {
  return (
    <div className="step-content">
      <h2>Step 1</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
