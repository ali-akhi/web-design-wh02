import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const PlayerList = ({ players, deletePlayer }) => (
    <div
        id={'form2'}>
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Nationality</th>
                <th scope="col">Post</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
        {players.map(player =>
            (player.completed === false)
                ? <Player
                    key={player.id}
                    {...player}
                    deleteClick={() => deletePlayer(player.id)}
                />
                : ''
        )}
      </tbody>
    </table>
    </div>
)

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    national: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deletePlayer: PropTypes.func.isRequired,
}

export default PlayerList
