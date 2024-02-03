import { create } from "zustand";
import Axios from "../middlewares/Axios";
const AdminStore = (set) => ({
  dasboardOverView: {},
  publications: [],
  Resources: [],
  youth: [],
  organizations: null,
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
  getResources: async () => {
    await Axios({
      method: "get",
      url: "resources",
    })
      .then((res) => {
        set({ Resources: res.data.resources });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getPublication: async () => {
    await Axios({
      method: "get",
      url: "publication",
    })
      .then((res) => {
        set({ publications: res.data.publication });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getYouth: async () => {
    await Axios({
      method: "get",
      url: "admin/youth",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    })
      .then((res) => {
        set({ youth: res.data.youth });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getOrganization: async () => {
    await Axios({
      method: "get",
      url: "admin/organization",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        set({ organizations: res.data.organization });
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

export const useAdminStore = create(AdminStore);
