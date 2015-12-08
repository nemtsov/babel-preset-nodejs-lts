const deps = require('./package.json').dependencies

module.exports = {
  plugins: Object.keys(deps).filter((dep) => {
    return /^babel-plugin/.test(dep)
  }).map((dep) => require(dep))
}
