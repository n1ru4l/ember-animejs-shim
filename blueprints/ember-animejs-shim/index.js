/* eslint-env node */
module.exports = {
  afterInstall() {
    return this.addPackagesToProject([
      {
        name: `animejs`,
        target: `^2.0.2`,
      },
    ])
  },
  normalizeEntityName() {
    // this prevents an error when the entityName is not specified
  },
}
