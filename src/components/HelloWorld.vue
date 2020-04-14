<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <div class="env-from-json">
      This is an example of env variable from JSON file:
      <b>{{ jsonExampleEnv }}</b>
    </div>
    <div class="env-from-dot-env">
      This is an example of env variable from .env file:
      <b>{{ dotEnvExampleEnv }}</b>
    </div>
  </div>
</template>

<script>
import { getEnvironmentVar } from "@/utils/environments";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    jsonExampleEnv() {
      return getEnvironmentVar("VUE_APP_JSON_EXAMPLE");
    },
    dotEnvExampleEnv() {
      return getEnvironmentVar("VUE_APP_DOT_ENV_EXAMPLE");
    }
  }
};
</script>

<style scoped>
.hello div {
  padding-bottom: 10px;
}

.env-from-json {
  color: red;
}

.env-from-dot-env {
  color: blue;
}
</style>
