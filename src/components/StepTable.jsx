import React from 'react';

const StepTable = ({ steps, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Distance (km)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {steps.map((step, index) => (
          <tr key={index}>
            <td>{step.date}</td>
            <td>{step.distance}</td>
            <td>
              <button onClick={() => onEdit(index)}>✎</button>
              <button onClick={() => onDelete(index)}>✘</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StepTable;
