import { API } from './utils'
import { observable } from 'mobx'
import { snapshot } from 'react-snapshot'

const state = observable({
  quotes: null,
  error: false
})

export default state

const snapshot_fetch = url => snapshot(() =>
  fetch(url).then(response => response.json())
)

export const fetchQuotes = () => {
  snapshot_fetch(`${API}/quotes`)
    .then(quotes => {
      state.quotes = quotes
    }, () => state.error = true)
}
