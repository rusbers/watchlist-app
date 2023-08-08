import { useContext, useEffect } from 'react';
import AuthDialogContainer from './AuthDialogContainer';
import TextFieldStyled from './TextFieldStyled';
import { AuthContext } from '../context/AuthContext';
import { AuthDialogContext } from '../context/AuthDialogContext';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import validationRules from '../helpers/validationRules';

const SignInDialog = () => {
  const { register, control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    reValidateMode: 'onSubmit',
  });

  const { errors, isSubmitSuccessful } = formState;

  const { openSignInDialog, handleCloseSignInDialog } = useContext(AuthDialogContext);
  const { signIn, credentials } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { username, password } = data;

    signIn(username, password);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      handleCloseSignInDialog();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <AuthDialogContainer
        onOpen={openSignInDialog}
        onClose={handleCloseSignInDialog}
        onSubmit={handleSubmit(onSubmit)}
        dialogLabel='Sign in'
        noValidate
      >
        <SignInControls register={register} errors={errors} credentials={credentials} />
      </AuthDialogContainer>
      {/* <DevTool control={control} placement='top-left' /> */}
    </>
  );
};

const SignInControls = ({ register, errors, credentials }) => {
  return (
    <>
      <TextFieldStyled
        label='Username'
        {...register('username', validationRules.username)}
        error={!!errors.username}
        helperText={errors.username?.message}
        autoFocus
      />
      <TextFieldStyled
        label='Password'
        type='password'
        {...register('password', {
          ...validationRules.password,
          validate: (value) => {
            return value === credentials.password || 'The passwords is not correct';
          },
        })}
        error={!!errors.password}
        helperText={errors.password ? errors.password?.message : '6 characters minimum'}
      />
    </>
  );
};

export default SignInDialog;
