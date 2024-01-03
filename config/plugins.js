
module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["username","email","phonenumber"],
      },
    },
  },
  // ...
});

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 1000000,
      },
    },
  },
  // ...
});