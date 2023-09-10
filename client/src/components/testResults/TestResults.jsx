import { useQuery } from "@tanstack/react-query";
import { ResultService } from "../../services/result.service";
import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { format } from 'date-fns';
import styles from './TestResults.module.css'

function TestResults(){
  const { id } = useParams();
  const { data, isLoading } = useQuery([`results-${id}`], () => ResultService.getById(id));
  if (isLoading) return <p>Завантаження....</p>;
  return (
    <div>
      <Header />
      <div className={styles.infoResults}>
        {data.length ? (
          data.map(result => (
            <p>
              Score: {result.score} Time:{' '}
              {format(new Date(result.createdAt), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          ))
        ) : (
          <p>There are no tests</p>
        )}
      </div>
    </div>
  );
  
}
export default TestResults