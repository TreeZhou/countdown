let env = {
  VUE: true
};
for (const key in env) {
  process.env[key] = env[key];
}
