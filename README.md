# ember-animejs-shim

[Anime](https://github.com/juliangarnier/anime) shim for ember.

## Installation

* `cd <your-ember-project-directory>`
* `ember install ember-animejs-shim`

## Usage

```javascript
import Ember from 'ember'
import anime from 'animejs'

export default Ember.Component.extend({
  componentDidMount(...args) {
    anime({
      targets: this.element,
      translateY: 100,
      duration: 1337,
    })
    this._super(...args)
  }
})
```
