import NanniesItem from '../NanniesItem/NanniesItem.jsx';
import s from './NanniesList.module.css';

const NanniesList = ({ nannies }) => {
  return (
    <div>
      <ul className={s.nanniesList}>
        {nannies?.map(nanny => (
          <NanniesItem key={nanny.id} nannies={nanny} />
        ))}
      </ul>
    </div>
  );
};

export default NanniesList;
