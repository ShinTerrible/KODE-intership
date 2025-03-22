import { useSelector } from '../../../store/store';
import { EmploeeysList } from '../../employees list/EmploeeysList';
import { TopAppBar } from '../../top-app-bar/topAppBar';
import style from './style.module.css'
import { getError } from "../../../slices/users";
import { ErrorUI } from '../error/ErrorUI';

export const MainUI = () => {
  const error = useSelector(getError)

  return (
    <main className={style.main}>
      <TopAppBar />
      {error ? <ErrorUI notFound={true} /> : <EmploeeysList />}
    </main>
  );
};
