import React from 'react';
import { Form } from 'react-bootstrap';
import habitsData from '../utils/testHabitsData.json';

const SelectHabit = ({ onHabitSelect }) => {
  function handleChange(event) {
    onHabitSelect(event.target.value); // Pass selected habit id back to parent
  }

  return (
    <Form.Group controlId='habitSelect'>
      <Form.Label>Choose a Habit</Form.Label>
      <Form.Control as='select' defaultValue='0' onChange={handleChange}>
        <option value='0'>Select a Habit</option>
        {habitsData.map((habit) => (
          <option key={habit.id} value={habit.id}>
            {habit.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default SelectHabit;
