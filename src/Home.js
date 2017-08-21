import React from 'react'
import Quote from './Quote'
import End from './End'
import { observer } from 'mobx-react'
import state, { fetchQuotes } from './state'

class Home extends React.Component {
  componentWillMount() {
    fetchQuotes()
  }

  render() {
    const { quotes } = state
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

export default observer(Home)
