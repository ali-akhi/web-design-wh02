import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ deleteClick,editPlayer, completed, name,number,national,post }) => (

        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td>{national}</td>
            <td>{post}</td>
            <td>
                <button
                onClick={deleteClick}
                type="button" className="btn btn-danger">Delete
                </button>
            </td>
        </tr>
)

Player.propTypes = {
    deleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    national: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
}

export default Player
