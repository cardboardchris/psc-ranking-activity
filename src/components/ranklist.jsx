import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import RankableItem from './rankable-item'

export default function RankList (props) {

  const { changePane, items, updateRank, ready } = props

  const checkedItems = items.filter((item) => (item.checked))

  // create array of rank options with a null option, plus rank options equal to the number of checked items
  const rankOptions = [{
    value: 0,
    label: '-'
  }]
  for (let i = 1; i <= checkedItems.length; i += 1) {
    rankOptions[i] = {
      value: i,
      label: i.toString()
    }
  }

  const rankedItems = checkedItems.map((item) => {
    const id = nanoid()
    return (
      <RankableItem key={ id } item={ item } rankOptions={ rankOptions } updateRank={ updateRank }/>
    )
  })
  return (
    <div className="pane ranking">
      <Row>
        <Col>
          <p>
            Below are the 5 features you selected to include in your voting system. For this next step, use the
            drop-down menu to rank your selections in order of importance.
          </p>
        </Col>
      </Row>
      <Row className="list-of-items">
        <Col>
          <ul>
            { rankedItems }
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="button"
            disabled={ !ready }
            onClick={ () => changePane('ordered') }
          >
            Continue
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="link"
            onClick={ () => changePane('checklist') }
          >
            Back
          </Button>
        </Col>
      </Row>
    </div>
  )
}

RankList.propTypes =
  {
    changePane: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      header: PropTypes.string,
      body: PropTypes.string,
      checked: PropTypes.bool
    })).isRequired,
    updateRank: PropTypes.func.isRequired,
    ready: PropTypes.bool.isRequired,
  }
