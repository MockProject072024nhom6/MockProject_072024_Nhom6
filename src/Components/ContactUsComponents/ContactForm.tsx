import React, { useState } from 'react';
import FormInput from './Inputs/FormInput';
import SelectInput from './Inputs/SelectInput';

const ContactForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedService, startDate, endDate, address, note });
  };

  return (
    <div className=" border-2 rounded-lg ">
      <form className="space-y-4 p-2 text-black" onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <SelectInput
          options={['Personal Protection', 'Enterprise Security']}
          value={selectedService}
          onChange={e => setSelectedService(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Contract start time"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Contract end time"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <textarea
          placeholder="Note"
          value={note}
          onChange={e => setNote(e.target.value)}
          className="bg-white border border-gray-300 p-2 rounded-lg w-full h-32 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
