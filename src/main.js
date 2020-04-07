import { requestConfig } from "@/utils/environments";

const runApp = async () => {
  await requestConfig("/config.json");

  const { vm } = require("./app.js");

  vm.$mount("#app");
};

runApp();
