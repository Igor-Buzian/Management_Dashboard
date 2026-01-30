export const VALIDATION_MESSAGES = {
  name:{
    required: 'Name is required',
    minlength: 'Minimum 3 characters',
    maxlength: 'Maximum 50 characters',
    pattern: 'Invalid characters'
  },
  email: {
    required: 'Email is required',
    email: 'Invalid email',
    minlength: 'Minimum 3 characters',
    maxlength: 'Maximum 50 characters',
    uniqueEmail: 'Email already is use'
  } as const
}
