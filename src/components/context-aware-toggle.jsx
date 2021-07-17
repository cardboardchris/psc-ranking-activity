import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import { Button } from 'react-bootstrap'

export default function ContextAwareToggle (props) {
  const { eventKey, children } = props
  const currentEventKey = useContext(AccordionContext)

  const decoratedOnClick = useAccordionButton(eventKey)

  const isCurrentEventKey = currentEventKey === eventKey

  return (
    <Button
      className={ isCurrentEventKey ? 'open' : 'closed' }
      onClick={ decoratedOnClick }
    >
      { children }
    </Button>
  );
}

ContextAwareToggle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
