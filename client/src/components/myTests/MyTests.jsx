import { Header } from "../header/Header";
import { useQuery } from "@tanstack/react-query";
import { TestService } from "../../services/test.service";
import React, {useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import MyTest from "./myTest/MyTest";

function MyTests(){
  const {user} = useContext(AuthContext)
  const {data, isLoading} = useQuery(['myTests'],
  (data) => TestService.myTests(user.token))
  if(isLoading) return <p>loading....</p>
  return(
    <div>
      <Header/>
      <div className="container">
        {data.length ? (data.map(test => <MyTest key={test.id} test={test} />)) : (<p>There are no tests</p>)}
      </div>
    </div>
    
  )
}
export default MyTests