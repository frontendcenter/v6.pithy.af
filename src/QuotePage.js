import React from 'react'
import Quote from './Quote'

import { Author } from './Author'
import { API } from './utils'

class QuotePage extends React.Component {
  state = { quote: null }

  componentWillMount() {
    fetch(`${API}/quotes/${this.props.id}`)
      .then(response => response.json())
      .then(quote => {
        this.setState({ quote })
      }, () => this.setState({ error: true }))
  }

  render() {
    const { quote } = this.state
    return quote ? (
      <div>
        <div className="Quotes">
          <Quote quote={quote}/>
        </div>
        <div className="SectionDivider">Also by {quote.name}:</div>
        <Author id={quote.author_id} exclude={quote.id}/>
      </div>
    ) : (
      <div className="Quotes"/>
    )
  }
}

export default ({ match: { params } }) => <QuotePage key={params.id} id={params.id}/>
