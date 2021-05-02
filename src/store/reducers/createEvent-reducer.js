export const SEND_EVENT = "SEND_EVENT";

const initialState = {
  nameEvent: "",
  startTime: "",
  endTime: "",
  status: "",
  numberEvent: 0,
};
const createEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EVENT:
      return { ...state, ...action.event };

    default:
      return state;
  }
};

export default createEventReducer;
