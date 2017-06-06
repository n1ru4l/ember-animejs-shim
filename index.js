/* eslint-env node */
'use strict'

const path = require(`path`)
const funnel = require(`broccoli-funnel`)
const mergeTrees = require(`broccoli-merge-trees`)

module.exports = {
  name: `ember-animejs-shim`,

  included() {
    this._super.included.apply(this, arguments)
    this.import(`vendor/anime.min.js`)
    this.import(`vendor/shims/animejs.js`)
  },
  treeForVendor(vendorTree) {
    const animeTree = funnel(path.join(this.project.root, `node_modules`, `animejs`), {
      files: [ `anime.min.js` ],
    })
    return mergeTrees([ vendorTree, animeTree ])
  },
}
