import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import './TimeZonePicker.css';

export default function TimezonePicker({ value, onChange }) {
  const [tz, setTz] = useState(
    value || Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <TimezoneSelect
      className='mb-3 form-control tzone-picker'
      id=''
      value={tz}
      onChange={(val) => {
        setTz(val.value);
        if (onChange) onChange(val.value);
      }}
      styles={{
        control: (provided) => ({
          ...provided,
          border: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: 0,
        }),
      }}
    />
  );
}
