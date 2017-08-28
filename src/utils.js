import React from 'react'

export const API = 'http://api.pithy.af/api'

export const simplify = str => str.toLowerCase().replace(/[^\w ]/g, '').replace(/ /g, '-')

export function once(fn) {
  let called = false
  let result = null
  return (...args) => {
    if (!called) {
      result = fn(...args)
      called = true
    }
    return result
  }
}

export const side_effects = (...fns) => comp => (...args) => {
  fns.forEach(fn => fn())
  return comp(...args)
}
//side_effects.once = (...fns) => side_effects(() => once())

export class Run extends React.Component {
  active = true
  render() {
    const { fn, once } = this.props
    if (this.active) fn()
    if (once) this.active = false
    console.log("run rendered")
    return null
  }
}

