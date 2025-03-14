import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import s from './NanniesPage.module.css';

const NanniesPage = () => {
  return (
    <div className={s.pageWrap}>
      <NanniesList />
    </div>
  );
};
export default NanniesPage;
