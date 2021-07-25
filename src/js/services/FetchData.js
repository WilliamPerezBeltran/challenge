import db from "../json/db.json";

export const getAllTrades = async () => {
  try {
    let data = db;
    return data;
  } catch (error) {
    console.log("error in getAllTrades");
    console.log(error);
  }
};
