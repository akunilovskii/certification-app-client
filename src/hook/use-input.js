import {useState} from 'react';

const useInput = (validationScheme, second) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = validationScheme(value, second) && touched;
  const error = !validationScheme(value, second) && touched;

  const onChange = e => {
    setTouched(true);
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue('');
    setTouched(false);
  };

  return [
    {isValid, reset},
    {value, error, onChange, onBlur},
  ];
};

export default useInput;
