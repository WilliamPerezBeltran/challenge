import db from "../json/db.json";
import * as constants from "../Constants";

export const getAllTrades = async () => {
  try {
    let data = db;
    return data;
  } catch (error) {
    console.log(`faile at getAllTrades in FetchData Service. Error: ${error}`);
  }
};

// export const getAllTrades = async () => {
//   try {
//     const url = `${constants.appLocalBaseUrl}getData`;

//     let response = await fetch(url, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       }
//     });

//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//   	console.log(`faile at getAllTrades in FetchData Service. Error: ${error}`);
//   }
// };
