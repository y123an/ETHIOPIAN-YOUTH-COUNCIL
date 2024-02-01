import { create } from "zustand";
import Axios from "../middlewares/Axios";
import { organizations } from "../utils/constants";
import { persist } from "zustand/middleware";
const siteStore = (set) => ({
  Resources: null,
  publications: null,
  organizations: organizations,
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
});

export const useSiteStore = create(
  persist(siteStore, {
    name: "siteStore",
  })
);
