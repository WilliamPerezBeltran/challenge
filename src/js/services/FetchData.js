import db from "../json/db.json";
import * as constants from "../Constants";
export const getAllTrades = async () => {
  try {
    let data = db;
    return data;
  } catch (error) {
    console.log("error in getAllTrades");
    console.log(error);
  }
};
