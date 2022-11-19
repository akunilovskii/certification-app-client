const emailValidation = (value: string) => {
  return /.{3,}@.{3,}\.com/.test(value);
};
const passwordValidation = (value: string) => {
  return value !== '';
};
const rePasswordValidation = (value: string, value2nd: string) => {
  return value !== '' && value === value2nd;
};

export {emailValidation, passwordValidation, rePasswordValidation};
