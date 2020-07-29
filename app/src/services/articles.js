import axios from "axios";

/**
 * Call the JsonPlaceholder api for dummy content
 * @func getArticles
 * @param type || This could use to get different type of articles: politics/social/photos ...
 * @param amount || Number of post to fetch. ( Could be usefull for pagination )
 * */
export const getArticles = async (type, amount) => {
  const result = await axios
    .get(`${process.env.API_URL}/${type}?_start=0&_limit=${amount}`) 
    .then(response => {
      if (response.status === 200) { //To be extra safe
        return response;
      }
    })
    .catch(error => {
      return { error: error };
    });
  return result;
};