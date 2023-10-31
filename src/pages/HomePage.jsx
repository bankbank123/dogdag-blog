import '../css/Home.css'
import axiosClient from '../axiosClient';
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar.jsx';
import TopTrend from '../components/TopTrend.jsx';
import TopicCard from '../components/TopicCard';

export default function HomePage() {

  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.get('/logout')
      .then(() => {

        navigate('/login')
      })
  }

  return (
    <>
      <NavBar/>
      <TopTrend/>
      
    </>
  )
}
