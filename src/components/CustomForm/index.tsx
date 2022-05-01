import React from 'react';
import { TextField, Typography } from '@mui/material';
import GradientButton from 'components/SharedComponents/mobile/GradientButton';
import Spacer from 'components/SharedComponents/mobile/Spacer';
import { t } from 'i18next';

interface CustomFormProps {
  handleSubmit: () => void;
  initialValues: {
    email: string;
    password: string;
  };
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ handleSubmit, initialValues, setEmail, setPassword }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        fullWidth
        // error={!initialValues.email}
        label="Email"
        type="email"
        value={initialValues.email}
        onChange={e => setEmail(e.target.value)}
        // helperText={!initialValues.email}
      />
      <Spacer size={16} />
      <TextField
        aria-required
        fullWidth
        // error={!initialValues.password}
        label="Password"
        type="password"
        value={initialValues.password}
        onChange={e => setPassword(e.target.value)}
      />
      <Spacer size={50} />
      <GradientButton type="submit">
        <Typography variant="buttonLarge">{t('continue')}</Typography>
      </GradientButton>
    </form>
  );
};

export default CustomForm;
