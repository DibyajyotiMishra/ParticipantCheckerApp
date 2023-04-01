import _ from "lodash";
import axios from "axios";

export default async function getData(userId: string) {
  let apiRes;
  try {
    const response = await axios.post(
      "https://mobileapi-wda3.onrender.com/api/get",
      {
        user_id: userId,
      }
    );

    apiRes = response.data;
  } catch (error) {
    apiRes = error.response.data;
  } finally {
    return apiRes;
  }
}
