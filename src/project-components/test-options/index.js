import React from 'react'
import Select from 'components/select'

export default class Test extends React.PureComponent {
  options = [
    {
      id: 1,
      name: '条件一'
    },
    {
      id: 2,
      name: '条件二'
    },
    {
      id: 3,
      name: '条件三'
    }
  ]

  state = {
    id: 1
  }

  handleSelect = option => {
    const { id } = option
    this.setState({
      id
    })
  }

  render() {
    const { id } = this.state
    return (
      <Select id={id} options={this.options} handleSelect={this.handleSelect} />
    )
  }
}
