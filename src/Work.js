import React from 'react'
import Quote from './Quote'
import { API } from './config'

class Work extends React.Component {
  state = { quotes: null }

  componentWillMount() {
    fetch(`${API}/works/${this.props.id}`)
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
          quotes && quotes.map((quote, i) => <Quote key={i} quote={quote}/>)
        }
      </div>
    )
  }
}

export default ({ match: { params } }) => <Work id={params.id}/>
