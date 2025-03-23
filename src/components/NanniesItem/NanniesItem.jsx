import { useContext, useState } from 'react';
import s from './NanniesItem.module.css';
import sprite from '../../assets/sprite.svg';
import { calculateAge } from '../../utils/calculateAge.js';
import { FavoritesContext } from '../FavoritesProvider/FavoritesProvider.jsx';
import Modal from '../Modal/Modal.jsx';
import AppointmentForm from '../AppointmentForm/AppointmentForm.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import LoginForm from '../LoginForm/LoginForm.jsx';

const NanniesItem = ({ nannies }) => {
  const { user } = useAuth();
  const {
    about,
    id,
    avatar_url,
    birthday,
    characters,
    education,
    experience,
    kids_age,
    location,
    name,
    price_per_hour,
    rating,
    reviews,
  } = nannies;

  const age = calculateAge(birthday);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);
  const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleReviews = () => {
    setIsReviewsVisible(prev => !prev);
  };

  const handleClose = () => {
    setIsLogin(false);
  };

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <li className={s.nanniesItem}>
      <div className={s.imgWrap}>
        <img
          className={s.nanniesImg}
          src={avatar_url}
          alt={`${name} foto`}
          width='96'
          height='96'
        />
      </div>
      <div className={s.nanniesInfo}>
        <div className={s.nanniesSocial}>
          <p className={s.socialText}>Nanny</p>
          <div className={s.nanniesLive}>
            <ul className={s.socialList}>
              <li className={s.socialItem}>
                <p className={s.socialInfo}>
                  <svg className={s.locationIcon} width='16' height='16'>
                    <use href={`${sprite}#icon-map-marker`}></use>
                  </svg>
                  {location}
                </p>
              </li>
              <li className={s.socialItem}>
                <p className={s.socialInfo}>
                  <svg className={s.ratingIcon} width='16' height='16'>
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  {rating}
                </p>
              </li>
              <li className={s.socialItem}>
                <p className={s.socialInfo}>
                  Price / 1 hour:
                  <span>{`${price_per_hour} $`}</span>
                </p>
              </li>
            </ul>
            <button
              className={`${s.favoriteBtn} ${
                favoriteIds.includes(id) && user ? s.favoriteActive : ''
              }`}
              onClick={() => {
                if (user) {
                  toggleFavorite(id);
                  return;
                }
                setIsLogin(true);
              }}
            >
              <svg className={s.favoriteIcon} width='26' height='26'>
                <use href={`${sprite}#icon-heart-normal`}></use>
              </svg>
            </button>
          </div>
        </div>
        <h3 className={s.nanniesName}>{name}</h3>
        <ul className={s.experienceList}>
          <li className={s.experienceItem}>
            <p className={s.experienceText}>
              {`Age: `} <span>{age}</span>
            </p>
          </li>
          <li className={s.experienceItem}>
            <p className={s.experienceText}>
              {`Experience: `} <span>{experience}</span>
            </p>
          </li>
          <li className={s.experienceItem}>
            <p className={s.experienceText}>
              {`Kids Age: `} <span>{kids_age}</span>
            </p>
          </li>
          <li className={s.experienceItem}>
            <p className={s.experienceText}>
              {`Characters: `}
              <span>
                {characters
                  .map(item => item.charAt(0).toUpperCase() + item.slice(1))
                  .join(', ')}
              </span>
            </p>
          </li>
          <li className={s.experienceItem}>
            <p className={s.experienceText}>
              {`Education: `} <span>{education}</span>
            </p>
          </li>
        </ul>
        <p className={s.nanniesAbout}>{about}</p>

        {!isReviewsVisible ? (
          <button className={s.readBtn} type='button' onClick={toggleReviews}>
            Read more
          </button>
        ) : null}

        <div
          className={`${s.reviewsContainer} ${
            isReviewsVisible ? s.visible : s.hidden
          }`}
        >
          <ul className={s.reviewsList}>
            {reviews.map((review, i) => (
              <li className={s.reviewsItem} key={i}>
                <div className={s.reviewsInfo}>
                  <p className={s.reviewIcon}>
                    {review.reviewer.charAt(0).toUpperCase()}
                  </p>
                  <div>
                    <p className={s.reviewNameRating}>{review.reviewer}</p>
                    <p className={s.reviewNameRating}>
                      <svg className={s.ratingIcon} width='16' height='16'>
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                      {review.rating.toFixed(1)}
                    </p>
                  </div>
                </div>
                <p className={s.reviewComment}>{review.comment}</p>
              </li>
            ))}
          </ul>
          <div className={s.btnWrap}>
            <button
              className={s.appointmentBtn}
              onClick={handleModalOpen}
              type='button'
            >
              Make an appointment
            </button>
            <button className={s.hideBtn} type='button' onClick={toggleReviews}>
              Hide reviews
            </button>
          </div>
          <Modal isOpen={isOpenModal} onClose={handleModalClose}>
            <AppointmentForm
              nannyName={name}
              nannyAvatar={avatar_url}
              onClose={handleModalClose}
            />
          </Modal>
          <Modal isOpen={isLogin} onClose={handleClose}>
            <LoginForm onClose={handleClose} />
          </Modal>
        </div>
      </div>
    </li>
  );
};

export default NanniesItem;
