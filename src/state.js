import { API } from './utils'
import { observable, toJS } from 'mobx'
import { snapshot } from 'react-snapshot'

const state = observable({
  quotes: null,
  quotes_by_author: new Map(),
  error: false
})
const api_requests = observable(new Map())

export default state

const snapshot_fetch = (url, success) => {
  if (!api_requests.has(url)) {
    api_requests.set(url, false)
    snapshot(() =>
      fetch(url).then(response => response.json())
    )
      .then(success, () => state.error = true)
      .then(() => api_requests.set(url, true))
  }
  return api_requests.get(url)
}

export const fetchQuotes = () => snapshot_fetch(`${API}/quotes`, quotes => state.quotes = quotes)
export const fetchQuotesForAuthor = id => snapshot_fetch(`${API}/authors/${id}`, quotes => state.quotes_by_author.set(id, quotes))
