import React from 'react'
import { observer } from 'mobx-react'

import Quote from './Quote'
import End from './End'
import state, { fetchQuotesForAuthor } from './state'

export const Author = observer(class extends React.Component {
  componentWillMount() {
    fetchQuotesForAuthor(this.props.id)
  }

  render() {
    const quotes = state.quotes_by_author.get(this.props.id)
    return (
      <div className="Quotes">
        { this.props.exclude && <div/> }
        {
          quotes && quotes.map((quote, i) =>
            this.props.exclude === quote.id
              ? null
              : <Quote key={i} quote={quote}/>
          ).concat(
            <End key="end">
              <span>No more quotes for <em>{quotes[0].name}</em>.</span>
            </End>
          )
        }
      </div>
    )
  }
})

export default ({ match: { params } }) => <Author id={params.id}/>
