import shortid from 'shortid';

//selectors
export const getAllAds = ({ ads }) => ads;
export const getAdById = ({ ads }, id) => ads.find(ad => ad.id === id);

// actions
const createActionName = actionName => `app/ads/${actionName}`;
const REMOVE_AD = createActionName('REMOVE_AD');
const ADD_AD = createActionName('ADD_AD');
const EDIT_AD = createActionName('EDIT_AD');
const SEARCH_ADS = createActionName('SEARCH_ADS');

// action creators
export const removeAd = payload => ({ type: REMOVE_AD, payload });
export const addAd = payload => ({ type: ADD_AD, payload });
export const editAd = payload => ({ type: EDIT_AD, payload });
export const searchAd = (payload) => ({ type: SEARCH_ADS, payload: { payload } });

const adsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_AD:
      return [...statePart.filter(ad => ad.id !== action.payload)];
    case ADD_AD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_AD:
      return statePart.map(ad => (ad.id === action.payload.id ? { ...ad, ...action.payload } : ad));
    case SEARCH_ADS:
      return statePart.filter((ad) => ad.title.includes(action.payload));
    default:
      return statePart;
  };
};

export default adsReducer;