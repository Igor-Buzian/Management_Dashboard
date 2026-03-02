export const VALIDATION_MESSAGES = {
  name: {
    required: 'Name is required  ',
    minlength: 'Name must be at least 3 characters  ',
    maxlength: 'Name cannot exceed 50 characters  ',
    pattern: 'Name contains invalid characters  '
  },
  email: {
    required: 'Email is required  ',
    email: 'Invalid email format  ',
    minlength: 'Email must be at least 3 characters  ',
    maxlength: 'Email cannot exceed 50 characters  ',
    uniqueEmail: 'This email is already in use  '
  },
  city: {
    required: 'City is required  ',
    minlength: 'City must be at least 2 characters  ',
    maxlength: 'City cannot exceed 50 characters  ',
    pattern: 'City contains invalid characters  '
  },
  profession: {
    required: 'Profession is required  ',
    minlength: 'Profession must be at least 2 characters  ',
    maxlength: 'Profession cannot exceed 50 characters  ',
    pattern: 'Profession contains invalid characters  '
  },
  age: {
    required: 'Age is required ',
    min: 'Age must be at least 18 ',
    max: 'Age cannot exceed 100 ',
    pattern: 'Age must be a valid number '
  },
  experienceYears: {
    required: 'Experience is required ',
    min: 'Experience must be 0 or more years ',
    max: 'Experience cannot exceed 80 years ',
    pattern: 'Experience must be a valid number '
  },
  avatarUrl: {
    required: 'Avatar URL is required '
  },
  status: {
    required: 'Status is required ',
    pattern: 'Invalid status value '
  }
} as const;
