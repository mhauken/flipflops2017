export const pickTime = (timeDuration) => {
  return { type: 'PICK_TIME', timeDuration };
};

export const addComment = (username, comment) => {
  return { type: 'ADD_COMMENT', username, comment};
}
