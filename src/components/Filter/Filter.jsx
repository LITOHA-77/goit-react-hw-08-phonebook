import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/Phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/Phonebook/phonebook-slice';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  
  return (
    <div className={s.text}>
      <h3 className={s.title}>Finde contacts by name</h3>
      <label>
        <input
          className={s.value}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
