export { remove_movieDetails } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { load_movieDetails } from "../reducers/movieSlice";

export const asyncloadMovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let utildata={
        detail:detail.data,
        externalid:externalid.data,
        recommendations:recommendations.data.results,
        similar:similar.data.results,
        translations:translations.data.translations.map((t)=> t.english_name),
        videos:videos.data.results.find((v)=>v.type === "Trailer"),
        watchproviders:watchproviders.data.results.IN,
    };
    dispatch(load_movieDetails(utildata))
    console.log(utildata);
  } catch (error) {
    console.log("Error", error);
  }
};
