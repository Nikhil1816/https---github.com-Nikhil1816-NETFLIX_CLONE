

import "./home.scss";
import List from "../../list/List";
import Featured from "../../featured/Featured"
import Navbar from "../../Navbar";

const Home = ({type}) => {
  return (
    <div className="home">
   
      <Navbar/>
      <Featured type={type}/>
     <List/>
     <List/>
     <List/>
     <List/>
    </div>
  );
};

export default Home;