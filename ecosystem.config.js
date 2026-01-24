module.exports = {
  apps: [
    {
      name: "iagaiexplore",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3008",
      cwd: "/var/www/iagaiexplore",
      env: {
        NODE_ENV: "production",
        PORT: 3008,
      },
    },
  ],
};
