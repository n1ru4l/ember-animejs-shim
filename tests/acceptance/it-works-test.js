import { find } from 'ember-native-dom-helpers'
import { test } from 'qunit'
import { later } from 'ember-runloop'
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance'

moduleForAcceptance(`Acceptance | it works`)

test(`it-works`, function(assert) {
  const done = assert.async()
  visit(`/`)
  andThen(() => {
    later(() => {
      const element = find(`.anime-tester`)
      assert.equal(element.style.backgroundColor, `rgb(51, 51, 51)`)
      done()
    }, 2500)
  })
})
