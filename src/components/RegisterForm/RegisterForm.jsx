import { registerUser } from '../../services/authService.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderSchemaReg } from '../../utils/formValidations.js';
import s from './RegisterForm.module.css';

const RegistrationForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchemaReg),
  });

  // const handleLogout = async () => {
  //   await logoutUser();
  //   alert('Вийшли з акаунту!');
  // };

  const onSubmit = async data => {
    try {
      await registerUser(data.name, data.email, data.password);
      alert('Успішна Реєстрація!');
    } catch (error) {
      console.error(error);
    }
    onClose();
  };

  return (
    <div className={s.formWrap}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h2 className={s.subtitle}>Registration</h2>
        <p className={s.welcomeText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>

        <div className={s.inputWrap}>
          <label htmlFor='name' className={s.inputlabel}>
            {errors.name && <p className={s.error}>{errors.name.message}</p>}
            <input
              id='name'
              type='name'
              placeholder='Name'
              className={s.inputForm}
              {...register('name')}
            />
          </label>
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
