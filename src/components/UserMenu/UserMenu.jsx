import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../images/icon-user.png';
import { BtnLogOut } from '../Button/Button';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  const handleLogOut = () => {
    dispatch(logOut());
    toast.info('You logged out of your account !', {
      position: 'top-center',
      autoClose: 2500,
    });
  };
  return (
    <div className={s.container}>
      <img
        src={avatar}
        alt="avatar"
        width="25"
        height="25"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}!</span>
      <BtnLogOut onClick={handleLogOut}/>
    </div>
  );
}