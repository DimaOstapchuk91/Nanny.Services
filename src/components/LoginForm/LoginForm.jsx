import { loginUser } from '../../services/authService.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderSchemaLogin } from '../../utils/formValidations.js';
import s from './LoginForm.module.css';
import { errToast, successfullyToast } from '../../utils/toast.js';

const LoginForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchemaLogin),
  });

  const onSubmit = async data => {
    try {
      await loginUser(data.email, data.password);
      successfullyToast('Successful Login');
      onClose();
    } catch (error) {
      errToast(`Oops, ${error}`);
    }
  };

  return (
    <div className={s.formWrap}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h2 className={s.subtitle}>Log In</h2>
        <p className={s.welcomeText}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>

        <div className={s.inputWrap}>
          <label htmlFor='email' className={s.inputlabel}>
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
            <input
              id='email'
              type='email'
              placeholder='Email'
              className={s.inputForm}
              {...register('email')}
            />
          </label>

          <label htmlFor='password' className={s.inputlabel}>
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <input
              id='password'
              type='password'
              placeholder='Password'
              className={s.inputForm}
              {...register('password')}
            />
          </label>
        </div>

        <div className={s.wrappBtn}>
          <button type='submit' className={s.submit}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
