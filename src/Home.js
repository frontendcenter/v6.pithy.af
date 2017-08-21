import React from 'react'
import Quote from './Quote'
import End from './End'
import { API } from './utils'

export default class Home extends React.Component {
  state = { quotes: null }

  componentWillMount() {
    fetch(`${API}/quotes`)
      .then(response => response.json())
      .then(quotes => {
        this.setState({ quotes })
      }, () => this.setState({ error: true }))
  }

  render() {
    const { quotes } = this.state
    return (
      <div className="Quotes">
        {
          quotes && quotes
            .map((quote, i) => <Quote key={i} quote={quote}/>)
            .concat(
              <End key="end">
                <span>That's all the quotes we have.</span>
              </End>
            )
        }
      </div>
    )
  }
}
