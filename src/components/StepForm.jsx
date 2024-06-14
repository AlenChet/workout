import React, { useState } from 'react';
import StepTable from './StepTable';

const StepForm = () => {
  const [formData, setFormData] = useState({ date: '', distance: '' });
  const [steps, setSteps] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSteps = [...steps];
    const existingIndex = newSteps.findIndex(step => step.date === formData.date);

    if (existingIndex !== -1) {
      newSteps[existingIndex].distance = (
        parseFloat(newSteps[existingIndex].distance) + parseFloat(formData.distance)
      ).toFixed(2);
    } else {
      newSteps.push(formData);
      newSteps.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setSteps(newSteps);
    setFormData({ date: '', distance: '' });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(steps[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  return (
    <div className="step-form">
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="distance"
          placeholder="Distance (km)"
          value={formData.distance}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      <StepTable steps={steps} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default StepForm;
