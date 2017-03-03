export const loadState = (state) => {
  return {
    type: 'LOAD_STATE',
    state: state,
  };
};

export const pickTime = (timeDuration) => {
  return { type: 'PICK_TIME', timeDuration };
};

export const addComment = (username, comment, locationId) => {
  return { type: 'ADD_COMMENT', username, comment, locationId};
}

export const setPosition = (position) => {
  const currentPosition = { lat: position.latitude, lng: position.longitude }
  return { type: 'SET_POSITION', currentPosition };
};