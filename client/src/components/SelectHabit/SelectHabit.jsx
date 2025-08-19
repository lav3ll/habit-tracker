import React from 'react';
import { Form } from 'react-bootstrap';
import habitsData from '../utils/testHabitsData.json';

const SelectHabit = () => {
  return (
    <>
      <Form.Group controlId='habitSelect'>
        <Form.Label>Choose a Habit</Form.Label>
        <Form.Control as='select' defaultValue='0'>
          {habitsData.map((habit) => (
            <option key={habit.id} value={habit.id}>
              {habit.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form>
        <label htmlFor=''>Add Your Own Habit</label>
        <Form.Control type='text' placeholder='Enter habit name' />
      </Form>
    </>
  );
};

export default SelectHabit;
