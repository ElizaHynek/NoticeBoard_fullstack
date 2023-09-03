import { useDispatch } from "react-redux";
import { addAd } from "../../redux/adsRedux";
import { useNavigate } from "react-router-dom";
import AddForm from "./AddForm";

const AdFormAdd = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = ad => {
    navigate("/");
    dispatch(addAd(ad));
  }; 

  return (
    <div>
      <AddForm actionText="Add new ad" action={handleAdd}/>
    </div>
    
  );
};

export default AdFormAdd;