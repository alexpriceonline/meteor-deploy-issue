module.exports = {
  servers: {
    one: {
      host: '52.211.30.162',
      username: 'ubuntu',
      pem: '../key.pem'
    }
  },

  meteor: {
    name: 'meteor-deploy-issue',
    path: './',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://52.211.30.162',
      MONGO_URL: 'mongodb://52.211.30.162/meteor',
    },
    dockerImage: 'abernix/meteord:node-4.8.4-base',
    deployCheckWaitTime: 80
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};
