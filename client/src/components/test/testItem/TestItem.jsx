import styles from '../testItem/TestItem.module.css'

function TestItem({test}){
  return(
    <div key={test.id} className={styles.item}>
      <div className={styles.info}>
        <h2>{test.name}</h2>
        <p>*description*</p>
        <p>{test.description}</p>
        <button className={styles.testButton}>Пройти тест</button>
      </div>
    </div>
  );
}
export default TestItem