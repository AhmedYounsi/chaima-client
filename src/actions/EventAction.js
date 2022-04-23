/* eslint-disable */
import api from "../Utils/api";
import { LoadingAction } from "./LoadingAction";

export const AddEvent = async (formData, dispatch, navigation) => {
  try {
    LoadingAction(true, dispatch);
    const res = await api.post("/events", formData);
    LoadingAction(false, dispatch);
    if (res.status == 200) {
      navigation("/events");
      dispatch({
        type: "SetAlert",
        payload: {
          type: "success",
          message: "Event Added successfully !",
        },
      });
    }
  } catch (error) {
    LoadingAction(false, dispatch);
    dispatch({
      type: "SetAlert",
      payload: { message: "Event can't be added", type: "error" },
    });
  }
};

export const GetEvents = async (event, dispatch) => {
  try {
    const res = await api.get("/events");
    return res.data;
  } catch (error) {
    return error;
  }
};
