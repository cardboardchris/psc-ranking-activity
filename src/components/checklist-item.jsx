import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import parse from 'html-react-parser'
import ContextAwareToggle from './context-aware-toggle'
import Chevron from './chevron'

export default function ChecklistItem (props) {

  const { toggleCheckbox, item } = props
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <Form.Check
                checked={ item.checked }
                label={ item.header }
                onChange={ () => toggleCheckbox(item.id) }
              />
            </Col>
            <Col xs="auto">
              <ContextAwareToggle eventKey="0"><Chevron/></ContextAwareToggle>
            </Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{ parse(item.body) }</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

ChecklistItem.propTypes = {
  toggleCheckbox: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.string,
    body: PropTypes.string,
    checked: PropTypes.bool
  }).isRequired,
}
