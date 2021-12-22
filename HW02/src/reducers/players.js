const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_Player':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          number: action.number,
          national: action.national,
          post: action.post,
          completed: false
        }
      ]
    case 'Delete':
      return state.map(player =>
          (player.id === action.id)
          ? {...player, completed: !player.completed}
          : player
      )
    default:
      return state
  }
}

export default players
