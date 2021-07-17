import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'

export default function Intro (props) {

  const { changePane } = props
  return (
    <div className="pane">
      <p>
        The word <strong>democracy</strong> derives from two Greek words: <em>demos</em>, the people; and <em>kratia</em>, to rule. Democracy, then, is
        literally &ldquo;rule by the people.&rdquo; So the question of who participates by voting is the very essence of democracy.
        We can say with certainty that the United States became a more democratic country as the right to vote was
        extended to former slaves, African Americans, and women. Yet so many fail to take advantage of the opportunity
        to vote. The US has traditionally had one of the lower turnout rates among Western democracies. However, the
        2020 election saw two-thirds of eligible Americans casting a ballot. Was this because many saw the stakes as too
        high to stay home, and perceived a very real threat to democracy itself? Or was it because many states, due to
        the COVID-19 pandemic, made it easier to vote by offering drive-by voting, extended hours, no-excuse absentee
        ballots, and ballot drop boxes?
      </p>
      <p>
        Some of those features are now being scaled back. Early 2021 saw hundreds of bills introduced in state
        legislatures across the country that would make it harder to vote. Supporters claimed that all were intended to
        protect the integrity of the elections. Voter fraud, while not unknown, is rare. Opponents have argued that the
        new laws will reduce turnout, particularly among minority and Democratic voters.
      </p>
      <p>
        What provisions should states make for voters? How easy should it be to vote? And what qualifications are
        necessary to vote? Should voters have to provide an ID? What is the balance between encouraging participation
        and protecting the integrity of the election process? Think about these and other questions as you complete the
        following activity to design <em>your</em> preferred voting system.
      </p>
      <Button
        onClick={ () => changePane('checklist') }
      >
        Continue
      </Button>
    </div>
  )
}

Intro.propTypes = {
  changePane: PropTypes.func.isRequired,
}
