import { connect } from 'react-redux'
import { deletePlayer } from '../actions'
import PlayerList from '../components/PlayerList'
import { VisibilityFilters } from '../actions'

const getVisiblePlayers = (players, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return players
    case VisibilityFilters.SHOW_COMPLETED:
      return players.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return players.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  players: getVisiblePlayers(state.players, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  deletePlayer: id => dispatch(deletePlayer(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)
