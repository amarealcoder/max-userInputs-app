import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleAgeChange = (e) => {
  //   setAge(e.target.value);
  // };

  const handleAddUser = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim() && +enteredAge.trim()) {
      props.onAddUser(enteredName, enteredAge);
    } else {
      setError({
        title: 'Invalid Input',
        message: 'Please, enter a valid name and age, (non-empty inputs).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please, enter a valid  age, (> 0).',
      });
      return;
    }
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    // setUsername('');
    // setAge('');
    // console.log(username, age);
  };

  const handleHideModal = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDelete={handleHideModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor='name'>Username</label>
          <input
            id='username'
            type='text'
            // value={username}
            // onChange={handleUsernameChange}
            ref={nameInputRef}
          />

          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            // value={age}
            // onChange={handleAgeChange}
            ref={ageInputRef}
          />

          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default Form;
