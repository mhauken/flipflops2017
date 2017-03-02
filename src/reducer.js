import moment from 'moment';

const initialState = {
  timePicked: null,
  timeDurations: [
    { duration: 30, label: '30 MIN', isChosen: false },
    { duration: 60, label: '1H', isChosen: false },
    { duration: 120, label: '2H', isChosen: false },
    { duration: 180, label: '3H+', isChosen: false },
    ],
  locations: [
    {
      id: 1,
      image: 'locations/1.jpg',
      hidden: false,
      title: 'Auditorio Alfredo Kraus',
      timeDuration: 25,
      location: {lng: null, lat: null},
      description: "This building looks like Batman",
      comments: [{
       username: "Anonymous", comment: "it's great", date: moment()
      }]
    },
    {
      id: 2,
      image: 'locations/2.jpg',
      hidden: false,
      title: 'Auditorio Alfredo Kraus 2',
      timeDuration: 60,
      location: {lng: null, lat: null},
      description: "This building looks like Batman2",
      comments: [],
    },
    {
      id: 3,
      image: 'locations/3.jpg',
      hidden: false,
      title: 'asdfasdf Alfredo Kraus 2',
      timeDuration: 73,
      location: {lng: null, lat: null},
      description: "This building looks like Batman2",
      comments: [],
    },
  ],
};

function getTimePicked(timeDurations, chosenTime) {
  const chosenDuration = timeDurations.find(duration => duration.duration === chosenTime);
  if(chosenDuration) {
    return chosenDuration.isChosen ? null : chosenTime
  }
  return chosenTime;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PICK_TIME':
      const timePicked = getTimePicked(state.timeDurations, action.timeDuration);
      return {
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
