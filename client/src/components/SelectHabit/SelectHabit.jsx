import React from 'react';
import { Form } from 'react-bootstrap';

const SelectHabit = () => {
  return (
    <Form.Group controlId='habitSelect'>
      <Form.Label>Choose a Habit</Form.Label>
      <Form.Control as='select' defaultValue='0'>
        <option value='0'>Select a Habit</option>
        <option value='1'>Testing Value 1</option>
        <option value='2'>Testing Value 2</option>
      </Form.Control>
    </Form.Group>
  );
};

export default SelectHabit;
