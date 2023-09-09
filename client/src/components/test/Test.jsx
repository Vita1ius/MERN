import { useQuery } from "@tanstack/react-query";
import { TestService } from "../../services/test.service";
import TestItem from "./testItem/TestItem";
import { Header } from "../header/Header";

function Test(){
  const {data, isLoading} = useQuery(['tests'], () => TestService.getAll())
  if(isLoading) return <p>loading....</p>
  return(
    <div>
      <Header/>
      <div className="container">
        {data.length ? (data.map(test => <TestItem key={test.id} test={test} />)) : (<p>There are no tests</p>)}
      </div>
    </div>
    
  )
}

export default Test