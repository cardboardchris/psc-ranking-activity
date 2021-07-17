import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function OrderedList (props) {

  const { changePane, items } = props

  const checkedItems = items.filter((item) => (item.checked))

  const sortedItems = checkedItems.sort((itemA, itemB) => (itemA.rank - itemB.rank))

  const orderedItems = sortedItems.map((item) => {
    const id = nanoid()
    return (
      <li key={ id }>{ item.header }</li>
    )
  })

  let outputList = ''
  for (let i = 0; i < sortedItems.length; i += 1) {
    outputList += `${i + 1}. ${sortedItems[i].header}\n`
  }

  const initialState = {
    copied: false,
  };
  const [state, setState] = useState(initialState)

  return (
    <div className="pane ordered">
      <Row>
        <Col>
          <p>
            Review your top 5 ranked options for ensuring a free and fair election. Did your choices lean towards opening up the election and making it more inclusive, or were you more concerned with protecting the integrity of the election? What is more important for democracy: bringing in as many people as possible, or protecting the process?
          </p>
        </Col>
      </Row>
      <Row className="list-of-items">
        <Col>
          <ol>
            { orderedItems }
          </ol>
        </Col>
      </Row>
      <Row className="align-right">
        <Col xs="auto copied-notice">
          { state.copied ? <span>copied!</span> : null }
        </Col>
        <Col xs="auto">
          <CopyToClipboard
            text={ outputList }
            onCopy={ () => setState({ copied: true }) }
          >
            <Button>Copy List</Button>
          </CopyToClipboard>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Write a 250–500 word essay on the choices you made, and submit your response to the discussion forum in Canvas.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="link"
            onClick={ () => changePane('ranking') }
          >
            Back
          </Button>
        </Col>
      </Row>
    </div>
  )
}

OrderedList.propTypes = {
  changePane: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.string,
    body: PropTypes.string,
    checked: PropTypes.bool
  })).isRequired,
}
