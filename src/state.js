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
        status.loaded = true
      }, () => state.error = true)
    return status.loaded
  }
})()
