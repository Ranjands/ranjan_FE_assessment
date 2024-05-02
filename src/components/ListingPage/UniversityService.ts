// UniversityService.ts

import { fetchUniversities } from "../../services/ApiService";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/StorageUtil";
import University from "../../models/University";

class UniversityService {
  static async fetchAndCacheUniversities() {
    try {
      const cachedData = getFromLocalStorage("universities");
      if (cachedData) {
        return cachedData;
      } else {
        const data = await fetchUniversities();
        saveToLocalStorage("universities", data);
        return data;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch universities.");
    }
  }
}

export default UniversityService;
