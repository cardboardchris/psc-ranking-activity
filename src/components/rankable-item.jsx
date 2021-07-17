import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import RankSelect from './rank-select'

export default function RankableItem (props) {

  const { item, rankOptions, updateRank } = props
  return (
    <Row>
      <Col xs="auto">
        <RankSelect
          itemId={ item.id }
          rank={ item.rank }
          rankOptions={ rankOptions }
          updateRank={ updateRank }
        />
      </Col>
      <Col>
        <p>{ item.header }</p>
      </Col>
    </Row>
  )
}

RankableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.string,
    body: PropTypes.string,
    checked: PropTypes.bool,
    rank: PropTypes.number,
  }).isRequired,
  rankOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  updateRank: PropTypes.func.isRequired,
}
