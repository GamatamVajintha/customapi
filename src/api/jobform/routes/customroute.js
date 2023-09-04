
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/send',
        handler: 'customjobform.send',
        config: {
          policies: [],
          auth : false
        },
      },
    ],
  };

  