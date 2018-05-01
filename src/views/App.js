import React from 'react'

import Balance from '../containers/Balance'
import { injectNOS } from '../nos'

const SC_SCRIPT_HASH = '0xe973b31b5d8cf928916f2a30a4611b2bed31af7e'

class App extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      address: undefined
    }
  }

  async componentDidMount () {
    if (this.props.nos.exists) {
      const address = await this.props.nos.getAddress()

      this.setState({ address })
    }
  }

  render () {
    return (
      <div>
        <h1>nOS Bookmark dApp</h1>
        {!this.props.nos.exists && (
          <p>Please view this dApp within your nOS client</p>
        )}
        {this.state.address && (
          <p>Your address: {this.state.address}</p>
        )}
        <Balance />
      </div>
    )
  }
}

export default injectNOS(App)
