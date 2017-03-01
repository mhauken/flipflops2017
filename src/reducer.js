const initialState = {
  timePicked: null,
  timeDurations: [
    { duration: 30, label: '30 MIN' },
    { duration: 60, label: '1H' },
    { duration: 120, label: '2H' },
    { duration: 180, label: '3H+' },
    ],
  locations: [
    {
      id: 1,
      image: null,
      hidden: false,
      title: 'Auditorio Alfredo Kraus',
      timeDuration: 30,
      location: {long: null, lat: null},
      description: "This building looks like Batman",
      comments: [{
       username: "Anonymous", comment: "it's great"
      }]
    },
    {
      id: 2,
      image: null,
      hidden: false,
      title: 'Auditorio Alfredo Kraus 2',
      timeDuration: 60,
      location: {long: null, lat: null},
      description: "This building looks like Batman2",
      comments: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PICK_TIME':
      return {
        ...state,
        timePicked: action.timeDuration,
        locations: state.locations.map(location => location.timeDuration <= action.timeDuration ? location : { ...location, hidden: true }),
      }
    default:
      return state;
  }
};

export default reducer;
