import { useContext, useEffect } from 'react';
import AuthDialogContainer from './AuthDialogContainer';
import TextFieldStyled from './TextFieldStyled';
import { AuthContext } from '../context/AuthContext';
import { AuthDialogContext } from '../context/AuthDialogContext';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import validationRules from '../helpers/validationRules';

const SignUpDialog = () => {
  const { register, control, handleSubmit, reset, getValues, formState } = useForm({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });

  const { errors, isSubmitSuccessful } = formState;

  const { openSignUpDialog, handleCloseSignUpDialog } = useContext(AuthDialogContext);
  const { signUp } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { username, password, email } = data;

    signUp(username, password, email);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      handleCloseSignUpDialog();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <AuthDialogContainer
        onOpen={openSignUpDialog}
        onClose={handleCloseSignUpDialog}
        onSubmit={handleSubmit(onSubmit)}
        dialogLabel='Sign up'
        noValidate
      >
        <SignUpControls register={register} errors={errors} getValues={getValues} />
      </AuthDialogContainer>
      {/* <DevTool control={control} /> */}
    </>
  );
};

const SignUpControls = ({ register, errors, getValues }) => {
  return (
    <>
      <TextFieldStyled
        label='Username'
        type='text'
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
        {...register('username', validationRules.username)}
        autoFocus
      />
      <TextFieldStyled
        label='Password'
        type='password'
        {...register('password', validationRules.password)}
        error={Boolean(errors.password)}
        helperText={errors.password ? errors.password?.message : '6 characters minimum'}
        FormHelperTextProps={{ sx: { color: 'inherit' } }}
      />
      <TextFieldStyled
        label='Password Confirm'
        type='password'
        {...register('passwordConfirm', {
          ...validationRules.passwordConfirm,
          validate: (value) => {
            return value === getValues('password') || 'The passwords do not match';
          },
        })}
        error={Boolean(errors.passwordConfirm)}
        helperText={errors.passwordConfirm?.message}
      />
      <TextFieldStyled
        label='E-mail'
        type='email'
        {...register('email', validationRules.email)}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
    </>
  );
};

export default SignUpDialog;
