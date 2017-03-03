import moment from 'moment';

function getTimePicked(timeDurations, chosenTime) {
  const chosenDuration = timeDurations.find(duration => duration.duration === chosenTime);
  if(chosenDuration) {
    return chosenDuration.isChosen ? null : chosenTime
  }
  return chosenTime;
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_STATE':
      return action.state;
    case 'SET_POSITION':
      console.log("Setting position to ", action.currentPosition);
      return {
        ...state,
        currentPosition: action.currentPosition,
      };
    case 'PICK_TIME':
      const timePicked = getTimePicked(state.timeDurations, action.timeDuration);
      return {
        ...state,
        timeDurations: state.timeDurations.map(duration => {
          return {
            ...duration,
            isChosen: duration.duration === action.timeDuration ? !duration.isChosen : false }
        }),
        timePicked,
        locations: state.locations.map(location => ({
          ...location,
          hidden: timePicked && location.timeDuration > timePicked
        })).sort((location1, location2) => location1.timeDuration < location2.timeDuration),
      }
    case 'ADD_COMMENT':
      const comment = {
        comment: action.comment,
        username: action.username,
        date: moment(),
      };
      return {
        ...state,
        locations: state.locations.map(location =>
          {
            const updated = {...location};
            if (location.id == action.locationId) {
              updated.comments.push(comment);
            }
            updated.comments.sort((comment1, comment2) => comment1.date < comment2.date)
            return updated;
          }
        )
      };
    default:
      return state;
  }
};

export default reducer;
