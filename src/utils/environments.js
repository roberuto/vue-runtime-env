let runtimeConfig = {};

export const requestConfig = async configJson => {
  const response = await fetch(configJson);
  runtimeConfig = await response.json();
  return runtimeConfig;
};

export const getEnvironmentVar = code => {
  const env = runtimeConfig[code] || process.env[code];

  if (!env) {
    return "";
  }
  return env;
};
