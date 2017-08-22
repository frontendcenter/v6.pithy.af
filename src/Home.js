import React from 'react'
import Quote from './Quote'
import End from './End'
import { observer } from 'mobx-react'
import state, { fetchQuotes } from './state'

const Await = class extends React.Component {
  componentWillMount() {
    if (this.props.invoke) this.props.invoke()
  }

  render() {
    if (this.props.data()) {
      return <div>{ this.props.children }</div>
    } else {
      return null
    }
  }
}

export default observer(() => (
  <div className="Quotes">
    <Await data={ () => state.quotes } invoke={ fetchQuotes }>
      {
        state.quotes && state.quotes
          .map((quote, i) => <Quote key={i} quote={quote}/>)
          .concat(
            <End key="end">
              <span>That's all the quotes we have.</span>
            </End>
          )
      }
    </Await>
  </div>
))
