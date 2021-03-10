module.exports = {
    async rewrites() {
      return [
        {
            source: '/album/:any*',
            destination: '/album',
        },
        {
          source: '/pokemon/:any*',
          destination: '/pokemon',
        },
      ]
    },
}
