import { selector } from "recoil";
import axios from "axios";
export interface SelectorUser {
  username: string;
  UserBalance: UserBalanceInterface;
}
export interface UserBalanceInterface {
  UserId: number;
  Amount: number;
}
export const fetchUserData = selector({
  key: "fetchUserData",
  get: async () => {
    try {
      const response = await axios("http://localhost:3000/userswithbalance");
      const data = await response.data;
      return data as Array<SelectorUser>;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },
});
