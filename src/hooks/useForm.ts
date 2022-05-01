import { TextFieldProps } from '@mui/material';

// <TextField
//   required
//   fullWidth
//   error={!!email}
// label="Email"
// type="email"
//   value={email}
//   onChange={e => setEmail(e.target.value)}
//   helperText={!!email}
// />

type UseFormProps = {
  inputName: string;
  // required?: boolean;
  // fullWidth?: boolean;
  error?: boolean;
  label: string;
  // type: string;
};

// const inputsMapping = {
//   [email]: 'Email',
//   [password]: 'Password',
// };

export const useForm = ({ inputName, error }: TextFieldProps & UseFormProps) => {
  const inputProps = {
    required: true,
    fullWidth: true,
    error,
    // type: inputsMapping[inputName],
  };
  return inputProps;
};
