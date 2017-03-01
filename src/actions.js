export const pickTime = (timeDuration) => {
  return { type: 'PICK_TIME', timeDuration };
};

export const openLocationDetail = (locationId) => {
  return { type: 'OPEN_LOCATION', locationId };
}

export const addComment = (username, comment) => {
  return { type: 'ADD_COMMENT', username, comment};
}

