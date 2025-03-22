import NanniesItem from '../NanniesItem/NanniesItem.jsx';
import s from './NanniesLost.module.css';

const NanniesList = ({ nannies }) => {
  return (
    <ul className={s.nanniesList}>
      {nannies?.map(nanny => (
        <NanniesItem key={nanny.id} nannies={nanny} />
      ))}
    </ul>
  );
};

export default NanniesList;
