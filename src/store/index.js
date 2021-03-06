import { createStore } from "vuex";

export default createStore({
  state: {
    bloggers: [
      {
        id: 1,
        firstName: "Максим",
        lastName: "Максимов",
        img: "1.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 2,
        firstName: "Максим",
        lastName: "Максимов",
        img: "2.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 3,
        firstName: "Максим",
        lastName: "Максимов",
        img: "3.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 4,
        firstName: "Максим",
        lastName: "Максимов",
        img: "4.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 5,
        firstName: "Максим",
        lastName: "Максимов",
        img: "5.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 6,
        firstName: "Максим",
        lastName: "Максимов",
        img: "6.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 7,
        firstName: "Максим",
        lastName: "Максимов",
        img: "7.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
      {
        id: 8,
        firstName: "Максим",
        lastName: "Максимов",
        img: "8.png",
        yt_subs: 3160000,
        vk_subs: 134000,
        inst_subs: 128000,
        videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      },
    ],
  },
  mutations: {
    pushBloggers(state) {
      // Simulate fetch bloggers

      for (let i = 0; i < 8; ++i) {
        const lastId = state.bloggers[state.bloggers.length - 1].id;

        state.bloggers.push({
          id: lastId + 1,
          firstName: "Максим",
          lastName: "Максимов",
          img: i + 1 + ".png",
          yt_subs: 3160000,
          vk_subs: 134000,
          inst_subs: 128000,
          videos: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
        });
      }
    },
  },
  actions: {
    fetchBloggers({ commit }) {
      // fetch( getBloggers )

      setTimeout(() => {
        commit("pushBloggers");
      }, 550);
    },
  },
  getters: {
    getBloggers(state) {
      return state.bloggers;
    },
  },
});
