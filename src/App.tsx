/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import TapClick from './components/TapClick'
import Boosts from "./pages/Boosts";
import Loadinger from "./pages/Loading";
import Earns from "./pages/Earns";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";



const App = () => {
  const [Loading, setLoading] = useState([]);
  const [Error_Load, setError_Load] = useState([]);
  const [user_data, setData] = useState([]);
  const url = `http://localhost:3003/users/13`


  const SetNew_User = async (chat_id, username, last_name, is_premium) => {
    const User_Object = {
      id: chat_id,
      username: username,
      last_name: last_name,
      is_premium: is_premium,
      tap_coin: 5,
      tap_level: 1,
      energy: 88,
      energy_max: 100,
      energy_level: 1,
      level: "Bronze"
    }
    await axios.get("http://localhost:3003/users")
      .then(response => {
        response.data.forEach((i) => {
          console.log(i);
          if (i.id !== chat_id) {
            console.log("OMK Set POST");
            axios.post("http://localhost:3003/users", User_Object).then((res) => console.log("==New User", res)
            )
          }
        })
      })
  }

  useEffect(() => {
    const getUserD = async () => {
      await axios.get(url)
        .then(response => {
          const uData = response.data;
          setTimeout(() => {
            setLoading(true)
          }, 2000);
          setData(uData);
        }).catch((error) => {
          try {
            if (error.response.status === 404) {
              setError_Load('404 Not Found')
              setLoading(false)
              // SetNew_User("13", "test", "test", false)
              // setTimeout(() => {
              //   setLoading(true)
              // }, 2000);
            }
          } catch (errors) {
            setError_Load('Error Conections Server')
            setLoading(false)
          }
          // console.log(error.response.status);
        });
    }
    getUserD()
  }, [setData, url, user_data])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={Loading == false ?
            <Loadinger props={Error_Load} />
            : <TapClick props={user_data} />} />
          <Route path="boost" element={<Boosts />} />
          <Route path="eran" element={<Earns />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
