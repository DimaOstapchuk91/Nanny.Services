import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import sprite from '../../assets/sprite.svg';

const HomePage = () => {
  return (
    <div className={s.pageWrap}>
      <div className={s.pageInfo}>
        <h1 className={s.pageTitle}>Make Life Easier for the Family:</h1>
        <p className={s.pageText}>Find Babysitters Online for All Occasions</p>
        <NavLink to='/nanies' className={s.pageLink}>
          Get started{' '}
          <svg className={s.arrow} width='18' height='18'>
            <use href={`${sprite}#icon-arrow-top-right`}></use>
          </svg>
        </NavLink>
      </div>
      <div className={s.wrapImg}>
        <div className={s.totalNannies}>
          <span className={s.checkIcon}></span>
          <div>
            <p className={s.totalText}>Experienced nannies</p>
            <p className={s.totalNumber}>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
