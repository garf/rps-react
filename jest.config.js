module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "^lodash-es$": "lodash"
  },
  testMatch: [
    '<rootDir>/(**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!lodash-es)"
  ]
}
