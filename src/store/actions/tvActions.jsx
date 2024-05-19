export { remove_tvDetails } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { load_tvDetails } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    let utildata={
        detail:detail.data,
        externalid:externalid.data,
        recommendations:recommendations.data.results,
        similar:similar.data.results,
        translations:translations.data.translations.map((t)=> t.english_name),
        videos:videos.data.results.find((v)=>v.type === "Trailer"),
        watchproviders:watchproviders.data.results.IN,
    };
    dispatch(load_tvDetails(utildata))
    console.log(utildata);
  } catch (error) {
    console.log("Error", error);
  }
};
