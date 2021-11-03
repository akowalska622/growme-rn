export type AuthFormData = {
  username: string;
  password: string;
  repeatedPassword: string;
};

export const validationRules = {
  username: {
    required: true,
  },
  password: {
    required: true,
  },
  repeatedPassword: {
    required: true,
  },
};
