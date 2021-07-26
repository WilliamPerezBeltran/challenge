import * as constants from "../Constants";

export const filterData = async (
  idSelected,
  cuitSelected,
  tradeSelected,
  activeSelected
) => {
  try {
    console.log("idSelected");
    console.log(idSelected);

    console.log("cuitSelected");
    console.log(cuitSelected);

    console.log("tradeSelected");
    console.log(tradeSelected);

    console.log("activeSelected");
    console.log(activeSelected);

    const url = `${constants.appLocalBaseUrl}filterData`;
    let formData = new FormData();
    formData.append("id", idSelected);
    formData.append("cuit", cuitSelected);
    formData.append("trade", tradeSelected);
    formData.append("active", activeSelected);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(`faile at filterData: ${error} `);
  }
};
