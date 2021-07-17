import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import { nanoid } from 'nanoid'

export default function RankSelect (props) {

  const { itemId, rank, rankOptions, updateRank } = props

  const options = rankOptions.map((option) => {
    const id = nanoid()
    return (
      <option key={ id } value={ option.value }>{ option.label }</option>
    )
  })

  return (
      <Form.Select
        className="form-control"
        name="rank"
        onChange={ (event) => updateRank(itemId, parseInt(event.target.value, 10)) }
        value={ rank }
      >
        { options }
      </Form.Select>
  )
}

RankSelect.propTypes = {
  itemId: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  rankOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  updateRank: PropTypes.func.isRequired,
}
