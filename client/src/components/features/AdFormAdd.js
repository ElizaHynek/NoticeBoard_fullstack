import { useDispatch } from "react-redux";
import { addAd } from "../../redux/adsRedux";
import { useNavigate } from "react-router-dom";
import AdForm from "./AdForm";

const AdFormAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = ad => {
    navigate("/");
    dispatch(addAd(ad));
  }; 

  return (
    <div>
      <AdForm actionText="Add ad" action={handleAdd}/>
    </div>
    
  );
};

export default AdFormAdd;