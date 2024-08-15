import React, { useState } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import FormInput from '../Components/Inputs/FormInput';
import SelectInput from '../Components/Inputs/SelectInput';

const ContactUsPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ selectedService, startDate, endDate, address, note });
  };

  return (
    <>
      {/* <Header /> */}
      <main className=" bg-white m-0 p-0">
        <div className=" text-black mb-10 ">
          <div className="bg-header-background bg-center p-36 ">
            <div className="text-4xl font-extrabold text-blue-800 mb-6 ">
              Contact Us{' '}
            </div>
            <div className="flex">
              <div className="text-lg text-white">Home </div>
              <div className="text-lg text-blue-800">Contact Us</div>
            </div>
          </div>
          <h3 className="text-4xl font-bold text-blue-800 mb-6"></h3>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-10 p-20">
            <div className="border-2 rounded-lg mx-5">
              <form className="space-y-4 p-2 text-black">
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
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </form>
            </div>
            <div className=" mx-5 grid grid-cols-3 grid-rows-3 gap-2">
              <div className="border-2 rounded-lg hover:bg-slate-100">
                <div className="p-2 text-black">
                  <h4 className="font-semibold text-lg ">California</h4>
                  <p>333 Đại lộ Đại học, Phòng 200 Sacramento, CA 95825</p>
                  <a href="tel:19162810285" className="text-blue-500">
                    (916) 281-0785
                  </a>
                </div>
              </div>
              <div className="border-2 rounded-lg hover:bg-slate-100">
                <div className="p-2 text-black">
                  <h4 className="font-semibold text-lg">New York</h4>
                  <p>77 Water Street, Tầng 8 Manhattan, NY 10005</p>
                  <a href="tel:19162810285" className="text-blue-500">
                    (916) 281-0785
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black px-36 pb-10">
            <div className="grid grid-cols-4 ">
              <div>Giờ mở cửa</div>
              <div>Truyền thông xã hội</div>
            </div>

            <div className="grid grid-cols-4 ">
              <div>Sunday - Saturday</div>
              <div>Facebook</div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUsPage;
