import { create } from "zustand";
import Axios from "../middlewares/Axios";
import { persist } from "zustand/middleware";
import { harer } from "../assets/gallery";
const siteStore = (set) => ({
  Resources: null,
  publications: null,
  organizations: [],
  News: [],
  photo: harer,
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
  getNews: async () => {
    await Axios({
      method: "get",
      url: "news",
    })
      .then((res) => {
        set({ News: res.data.news });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getOrganization: async () => {
    await Axios({
      method: "get",
      url: "organization",
    })
      .then((res) => {
        set({ organizations: res.data.organization });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  searchOrganziation: async (searchParams) => {
    await Axios({
      method: "get",
      url: "organization",
    })
      .then((res) => {
        set({
          organizations: res.data.organization.filter((item) =>
            item.name.toLowerCase().includes(searchParams.toLowerCase())
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setPhoto: (photo) => {
    set({ photo: photo });
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
