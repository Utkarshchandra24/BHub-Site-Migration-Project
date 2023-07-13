import React, { useState } from 'react';
import './LeaveReq.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SlCalender } from 'react-icons/sl';

const TodayAtt = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [option, setOption] = useState('');
  const options = ['voluntary', 'involuntary', 'paid', 'unpaid'];

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const initialValues = {
    LeaveType: { option },
    Reason: '',
    Date: { To: '', From: '' },
    LeaveFor: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleDateChange = (date, field) => {
    setSelectedDates((prevState) => ({
      ...prevState,
      [field]: date,
    }));
  };

  return (
    <div className='main-div'>
      <div className='sub-div1'>
        <h3>Leave request</h3>
        <div className='sub-div11'>
          <div className='dot-container'>
            <div
              className={`dot ${currentPage === 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(1)}
            />
            <div
              className={`dot ${currentPage === 2 ? 'active' : ''}`}
              onClick={() => setCurrentPage(2)}
            />
            <div
              className={`dot ${currentPage === 3 ? 'active' : ''}`}
              onClick={() => setCurrentPage(3)}
            />
            <div
              className={`dot ${currentPage === 4 ? 'active' : ''}`}
              onClick={() => setCurrentPage(4)}
            />
          </div>
        </div>
      </div>
      {currentPage === 1 && (
        <form>
          <div className='sub-div2'>
            <div className='sub-div3'>
              <Dropdown
                options={options}
                value={option}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className='sub-div4'
                placeholder='Reason'
                required='required'
                onChange={handleChange}
              ></input>
              <span>30 characters remaining (30 maximum)</span>
            </div>
          </div>
          <div className='sub-div5'>
            <ReactDatePicker
              className='date-fld'
              placeholderText='From'
              onChange={(date) => {
                handleDateChange(date, 'startDate');
              }}
            ></ReactDatePicker>
            <SlCalender className='cal-icon' />
            <ReactDatePicker
              className='date-fld'
              placeholderText='To'
              onChange={(date) => {
                handleDateChange(date, 'endDate');
              }}
              value={selectedDates.endDate}
            ></ReactDatePicker>
            <SlCalender className='cal-icon' />
          </div>
          <div className='sub-div3'>
            <Dropdown
              options={options}
              value={option}
              onChange={handleChange}
            />
          </div>
          <div className='sub-div6'>
            <div className='text'>Available Leaves: 10</div>
            <div className='text'>Requested Leave Days: 2</div>
            <div className='text'>Reporting Manager: Kishore LM</div>
          </div>
          <div className='sub-divn'>
            <button className='submit' type='submit'>
              Submit
            </button>
            <button className='reset' type='reset'>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const Dropdown = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} required='required'>
      <option value='' disabled selected hidden>
        Leave Type
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default TodayAtt;
