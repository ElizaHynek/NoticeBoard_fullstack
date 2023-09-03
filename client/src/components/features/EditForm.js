import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAdById, editAd } from '../../../redux/adsRedux';
import AdFormEdit from "./AdFormEdit";
import { Navigate } from "react-router-dom";

const EditForm = () => {


  const { id } = useParams();
  const adData = useSelector((state) => getAdById(state, id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = ad => {
    
    navigate("/");
    dispatch(editAd({ ...ad, id }));
  };
  
  if(!adData) return <Navigate to="/" />
    return (
      <div>
        <AdFormEdit actionText="Edit ad" action={handleEdit} title={adData.title} content={adData.content} price={adData.price} publishDate={adData.publishDate} location={adData.location} login={adData.user.login}/>
      </div>
    );
};

export default EditForm;