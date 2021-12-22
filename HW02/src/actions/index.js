let nextPlayerId = 0
export const addPlayer = (name,number,national,post) => ({
  type: 'ADD_Player',
  id: nextPlayerId++,
  name,
  number,
  national,
  post
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const deletePlayer = id => ({
  type: 'Delete',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
