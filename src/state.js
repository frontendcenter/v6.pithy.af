import { API } from './utils'
import { observable, toJS } from 'mobx'
import { snapshot } from 'react-snapshot'

const state = observable({
  quotes: null,
  quotes_by_author: new Map(),
  error: false
})

export default state

const snapshot_fetch = url => snapshot(() =>
  fetch(url).then(response => response.json())
)

export const fetchQuotes = (() => {
  const status = observable({
    loading: false,
    loaded: false
  })
  return () => {
    if (status.loading) return status.loaded
    status.loading = true
    console.log("Fetching quotes")
    snapshot_fetch(`${API}/quotes`)
      .then(quotes => {
        state.quotes = quotes
      }, () => state.error = true)
      .then(() => status.loaded = true)
    return status.loaded
  }
})()

export const fetchQuotesForAuthor = (id) => (
  fetch(`${API}/authors/${id}`)
    .then(response => response.json())
    .then(quotes => {
      state.quotes_by_author.set(id, quotes)
      console.log(toJS(state))
    }, () => state.error = true)
)
