
import React, { FC, ChangeEvent, useState, FormEventHandler } from 'react';
import { Action } from '../types';
import { Button, Form } from 'react-bootstrap';

interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const {dispatch} = props;
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    email: '',
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <h3 className="mb-3">Add New Contact</h3>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          value={contact.firstName}
          type="text"
          placeholder="Enter first name"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          value={contact.lastName}
          type="text"
          placeholder="Enter last name"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          name="phoneNumber"
          value={contact.phoneNumber}
          type="text"
          placeholder="Enter phone number"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          value={contact.address}
          type="text"
          placeholder="Enter address"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          value={contact.email}
          type="email"
          placeholder="Enter email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className="submit-btn">
          Add Contact
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;