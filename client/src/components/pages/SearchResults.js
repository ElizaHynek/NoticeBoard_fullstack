/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { API_URL } from '../../config';
import { useParams } from 'react-router-dom';
import Search from '../features/Search';
import Ad from './Ad';
//import { getAllAds } from "../../redux/adsRedux";
//import { useSelector } from 'react-redux';


const SearchResults = () => {

	//const ads = useSelector(getAllAds);

  const searchId = useParams();
  const [data, setData] = useState([]);

	const options = {
		method: 'GET',
	};

  const fetchData = async () => {
    await fetch(`${API_URL}/ads/search/${searchId}`, options)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchId]);

  return (
    <>
      <Search />
        <Row xs={1} md={3} className="g-3 ">
          {data.map((ad) => (
            <Col key={ad.id}>
              <Ad {...ad} />
            </Col>
          ))}
        </Row>

    </>
  );
};

export default SearchResults;