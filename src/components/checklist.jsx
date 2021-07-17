import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ChecklistItem from './checklist-item'

export default function Checklist (props) {

  const { changePane, toggleCheckbox, items, ready } = props


  const listItems = items.map((item) => {
    const id = nanoid()
    return (
      <ChecklistItem key={ id } toggleCheckbox={ toggleCheckbox } item={ item } />
    )
  })

  return (
    <div className="pane checklist">
      <Row>
        <Col>
          <p>
            <strong>Instructions</strong>: The United States Constitution contains few references to voting. The
            Thirteenth Amendment
            extended voting to all men, and the Nineteenth Amendment to women. The Constitution guarantees a republican
            government to all state governments, and the Fourteenth Amendment protects the rights and privileges of all
            citizens. The Twenty-Sixth Amendment extends the right to vote to 18-year-olds. But that&rsquo;s it.
            It&rsquo;s the
            states which decide the conditions of voting, where polling places are, what ballots to use, and how voters
            are recognized. They decide on residency requirements, the technology used, and rules about how and when
            ballots are counted. These regulations vary enormously.
          </p>
          <p>
            What would <em>you</em> like to see?
          </p>
          <p>
            Here are 11 items frequently featured in states&rsquo; voting systems and a hot topic today. Which 5 of
            these 11
            features would you most like to include in a voting system?
          </p>
          <p>
            Read the items below and select your top 5.
          </p>
        </Col>
      </Row>
      <Row className="list-of-items">
        <Col>
          <ul>
            { listItems }
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            disabled={ !ready }
            onClick={ () => changePane('ranking') }
          >
            Continue
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="link"
            onClick={ () => changePane('intro') }
          >
            Back
          </Button>
        </Col>
      </Row>
    </div>
  )
}

Checklist.propTypes = {
  changePane: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  ready: PropTypes.bool.isRequired,
}
