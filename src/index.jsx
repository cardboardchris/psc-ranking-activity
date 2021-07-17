import './styles/style.scss'
import React from 'react';
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Intro from './components/intro'
import Checklist from './components/checklist'
import ChecklistItems from './assets/list-content.json'
import RankList from './components/ranklist'
import OrderedList from './components/orderedList'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activePane: 'intro',
      items: ChecklistItems.checklistItems,
      checkListReady: false,
      rankListReady: false
    }
  }

  toggleCheckbox (itemId) {
    const { items } = this.state
    const newItems = items.slice()
    const selectedItem = newItems.find((item) => item.id === itemId)
    selectedItem.checked = !selectedItem.checked
    this.setState({
      items: newItems,
    })
    this.continueFromCheckList(newItems)
  }

  continueFromCheckList (items) {
    // if any items have been checked, the user is ready to continue
    if (items.find((item) => (item.checked))) {
      this.setState({
        checkListReady: true,
      })
    } else {
      this.setState({
        checkListReady: false,
      })
    }
  }

  updateRank (itemId, newRank) {
    const { items } = this.state
    // reset any items that have a rank matching the updated item's new rank
    const newItems = items.map((item) => {
      const newItem = { ...item }
      if (newItem.rank === newRank) {
        newItem.rank = 0
      }
      return newItem
    })
    // then get the updated item and set its rank to the new rank value
    const updatedItem = newItems.find((item) => item.id === itemId)
    updatedItem.rank = newRank
    this.setState({
      items: newItems,
    })
    this.continueFromRankList(newItems)
  }

  continueFromRankList (items) {
    // if all checked items have been ranked, the user is ready to continue
    if (items.find((item) => (item.checked && item.rank === 0))) {
      this.setState({
        rankListReady: false,
      })
    } else {
      this.setState({
        rankListReady: true,
      })
    }
  }

  changePane (paneName) {
    this.setState({
      activePane: paneName,
    })
  }

  showPane () {
    const { activePane, items, checkListReady, rankListReady } = this.state
    switch (activePane) {
      case 'intro':
        return <Intro changePane={ (paneName) => this.changePane(paneName) }/>
      case 'checklist':
        return <Checklist
          changePane={ (paneName) => this.changePane(paneName) }
          toggleCheckbox={ (itemId) => this.toggleCheckbox(itemId) }
          items={ items }
          ready={ checkListReady }
        />
      case 'ranking':
        return <RankList
          changePane={ (paneName) => this.changePane(paneName) }
          updateRank={ (itemId, newRank) => this.updateRank(itemId, newRank) }
          items={ items }
          ready={ rankListReady }
        />
      case 'ordered':
        return <OrderedList
          changePane={ (paneName) => this.changePane(paneName) }
          items={ items }
        />
      default:
        return null
    }
  }

  render () {
    return (
      <Container className="activity-container">
        <h1>Hot Topic</h1>
        { this.showPane() }
      </Container>
    )
  }
}

// instruct ReactDom to render the React App in the specified HTML element
// and mount the specified component
ReactDOM.render(<App/>, document.getElementById('app'))
