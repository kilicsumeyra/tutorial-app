import axios from "axios";
import { useEffect, useState } from "react";
import TutorialList from "../components/TutorialList";
import AddTutorial from "../components/AddTutorial";

const Home = () => {
  const [tutorial, setTutorial] = useState([])
  const url = "https://65f48267f54db27bc021de27.mockapi.io/tutorial"

  const getTutorial = async () => {
    try {
      const {data} = await axios(url)
      setTutorial(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTutorial()
  }, [])
  
  return (
    <>
    <AddTutorial getTutorial={getTutorial}/>
    <TutorialList tutorial={tutorial} getTutorial={getTutorial}/>
    </>
  );
};

export default Home;