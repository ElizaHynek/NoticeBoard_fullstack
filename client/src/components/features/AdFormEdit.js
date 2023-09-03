import { useDispatch, useSelector } from "react-redux";
import { editAd } from "../../redux/adsRedux";
import { useNavigate, useParams } from "react-router-dom";
import AdForm from "./AdForm";
import { getAdById } from "../../redux/adsRedux";
import { Navigate } from "react-router-dom";

const AdFormEdit = () => {

  const { id } = useParams();
  const adData = useSelector(state => getAdById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = ad => {
    navigate("/");
    dispatch(editAd({ ...ad, id }));
  }; 
  
  if(!adData) return <Navigate to="/" />
    return (
      <div>
        <AdForm actionText="Edit ad" action={handleEdit} title={adData.title} content={adData.content} price={adData.price} publishDate={adData.publishDate} location={adData.location} login={adData.user.login} />
      </div>
  );
};

export default AdFormEdit;