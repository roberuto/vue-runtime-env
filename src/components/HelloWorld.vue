<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <div>
      This is an example of env variablex: <b>{{ exampleEnv }}</b>
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
    exampleEnv() {
      return getEnvironmentVar("VUE_APP_EXAMPLE");
    }
  }
};
</script>
