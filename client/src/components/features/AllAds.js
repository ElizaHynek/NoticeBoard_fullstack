import { useSelector } from "react-redux";
import { getAllAds } from "../../redux/adsRedux";
import { Row } from "react-bootstrap";
import SingleAd from "../pages/SingleAd";


const AllAds = () => {

  const ads = useSelector(getAllAds);

	return (
    <Row className="justify-content-between">
        {ads.map(ad => <SingleAd key={ad.id} {...ad} />)}  
    </Row>  
	);
};

export default AllAds;