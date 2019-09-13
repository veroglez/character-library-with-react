module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss|png)$': 'babel-jest',
  },
};
