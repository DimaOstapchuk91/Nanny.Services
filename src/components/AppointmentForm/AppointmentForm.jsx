import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import s from './AppointmentForm.module.css';

const AppointmentForm = ({ nannyName, nannyAvatar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(orderSchemaLogin),
  });

  const onSubmit = async data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h2 className={s.subtitle}>Make an appointment with a babysitter</h2>
      <p className={s.formText}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={s.nannyInfo}>
        <img
          className={s.nannyImg}
          src={nannyAvatar}
          alt={nannyName}
          width={44}
          height={44}
        />
        <div>
          <p className={s.nannyText}>Your nanny</p>
          <p className={s.nannyName}>{nannyName}</p>
        </div>
      </div>

      <ul className={s.inputWrap}>
        <li className={s.inputlabel}>
          <label>
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
            <input
              id='address'
              type='text'
              placeholder='Address'
              className={s.inputForm}
              {...register('address')}
            />
          </label>
        </li>

        <li className={s.inputlabel}>
          <label>
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <input
              id='number'
              type='phone'
              name='number'
              placeholder='+380'
              className={s.inputForm}
              {...register('number')}
            />
          </label>
        </li>
        <li className={s.inputlabel}>
          <label>
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
            <input
              id='age'
              type='number'
              name='age'
              placeholder="Child's age"
              className={s.inputForm}
              {...register('age')}
            />
          </label>
        </li>

        <li className={s.inputlabel}>
          <label>
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <input
              id='time'
              name='time'
              type='time'
              className={s.inputForm}
              {...register('password')}
            />
          </label>
        </li>
      </ul>
      <ul className={s.userInfo}>
        <li>
          <label className={s.inputlabel}>
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              className={s.inputForm}
              {...register('email')}
            />
          </label>
        </li>
        <li>
          <label className={s.inputlabel}>
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <input
              id='pearents'
              name='pearents'
              type='text'
              placeholder="Father's or mother's name"
              className={s.inputForm}
              {...register('pearents')}
            />
          </label>
        </li>
        <li>
          <label className={s.inputlabel}>
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
            <textarea
              id='comment'
              name='comment'
              rows='4'
              placeholder='Comment'
              className={s.textarea}
              {...register('comment')}
            />
          </label>
        </li>
      </ul>

      <div className={s.wrappBtn}>
        <button type='submit' className={s.submit}>
          Send
        </button>
      </div>
    </form>
  );
};
export default AppointmentForm;
