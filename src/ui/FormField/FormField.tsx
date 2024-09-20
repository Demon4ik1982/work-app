import { FC, useState } from 'react';

import './FormField.css';

export interface IFormFieldProps {
  label: string;
  // data: string;
  // setData: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export const FormField: FC<IFormFieldProps> = ({
  label,
  // data,
  // setData,
  children
}) => {
    // const [value, setValue] =useState(data)

    // const writeValue = (valueData: string) => {
    //   setValue(valueData);
    //   setData(value)
    // }

    return (
      <label className="form-field" aria-label={`${label}`}>
        {label}
        {children}
        {/* <input className="form-field__input" type="text" value={name} onChange={(event) => {setName(event.target.value)}}/> */}
      </label>
    );

};
