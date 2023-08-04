import AllAds from "../features/AllAds";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>
        <Link key={props.id} to={"/ads/add"}>
          <Button variant="success">Add advert</Button>
        </Link> 
      </div>
      <AllAds />
    </div>
  );
};

export default Home;