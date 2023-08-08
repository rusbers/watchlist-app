const validationPatterns = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

const validationRules = {
  username: {
    required: { value: true, message: 'username is required' },
    minLength: { value: 6, message: 'minimum length is 6' },
  },
  password: {
    required: { value: true, message: 'password is required' },
    minLength: { value: 6, message: 'minimum length is 6' },
  },
  passwordConfirm: {
    required: { value: true, message: 'password confirm is required' },
  },
  email: {
    required: { value: false },
    pattern: { value: validationPatterns.email, message: 'Email format is not valid' },
  },
};

export default validationRules;
