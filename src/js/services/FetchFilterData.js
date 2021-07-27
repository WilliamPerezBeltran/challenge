import * as constants from "../Constants";
import db from "../json/dbFilter.json";

export const filterData = async () => {
  try {
    let data = db;
    return data;
  } catch (error) {
    console.log(`Faile at filterData in FetchData Service. Error: ${error}`);
  }
};

// export const filterData = async (
//   idSelected,
//   cuitSelected,
//   tradeSelected,
//   activeSelected
// ) => {
//   try {
//     const url = `${constants.appLocalBaseUrl}filterData`;
//     let formData = new FormData();
//     formData.append("id", idSelected);
//     formData.append("cuit", cuitSelected);
//     formData.append("trade", tradeSelected);
//     formData.append("active", activeSelected);
//     let response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: formData,
//     });
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.log(`faile at filterData: ${error} `);
//   }
// };
