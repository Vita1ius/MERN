
import styles from '../app/App.module.css';
import { Header } from '../header/Header';

function App() {
  return (
    <div className={styles.App} s>
      <Header/>
      <img className={styles.logo} src='https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png' alt="Logo" />
    </div>
  );
}

export default App;
