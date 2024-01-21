import { create } from "zustand";
import Axios from "../middlewares/Axios";
const AdminStore = (set) => ({
  dasboardOverView: {},
  getDashboardOverView: async () => {
    await Axios.get("admin/overview", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    })
      .then((res) => {
        set({ dasboardOverView: res.data });
      })
      .catch((err) => console.log(err));
  },
});

export const useAdminStore = create(AdminStore);
