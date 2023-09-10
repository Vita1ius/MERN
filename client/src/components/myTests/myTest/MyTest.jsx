import styles from './MyTest.module.css'
import { useNavigate } from 'react-router-dom';

function MyTest({test}){
  const navigate = useNavigate();
  return(
    <div key={test.id} className={styles.item}>
      <div className={styles.info}>
        <h2>{test.name}</h2>
        <p>*description*</p>
        <p>{test.description}</p>
        <button className={styles.testButton} onClick={() => navigate(`/myTestResults/${test.id}`)}>Глянути результат</button>
      </div>
    </div>
  );
}
export default MyTest