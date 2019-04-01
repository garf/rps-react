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
    '^@c/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    "^lodash-es$": "lodash"
  },
  testMatch: [
    '<rootDir>/(**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  "setupFiles": ["./src/setupTests.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "transformIgnorePatterns": [
    "node_modules/(?!lodash-es)"
  ]
}
