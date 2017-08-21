import React from 'react'
import Quote from './Quote'
import { API, simplify } from './utils'
import End from './End'
import Link from './Link'

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
          quotes && quotes.map(
            (quote, i) => <Quote key={i} quote={quote}/>
          ).concat(
            <End key="end">
              <span><em>{quotes[0].title}</em> has no further quotes.</span>
              <Link to={`/authors/${simplify(quotes[0].name)}-${quotes[0].author_id}`} obvious>
                See more by { quotes[0].name }
              </Link>
              or
            </End>
          )
        }
      </div>
    )
  }
}

export default ({ match: { params } }) => <Work id={params.id}/>
