import { useDispatch } from "react-redux";
import { updateAds } from "../../redux/adsRedux";
import { useNavigate } from "react-router-dom";
import AdForm from "./AdForm";

const AdFormAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = ad => {
    navigate("/");
    dispatch(updateAds(ad));
  }; 

  return (
    <div>
      <AdForm actionText="Add new ad" action={handleAdd}/>
    </div>
    
  );
};

export default AdFormAdd;