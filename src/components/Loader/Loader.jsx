import { Grid } from  'react-loader-spinner'
import s from './Loader.module.css';


const loader = () => (
  <div className={s.loader}>
    {' '}
     <Grid
            height="80"
            width="80"
            color="#ddc955"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
  </div>
);

export default loader;
