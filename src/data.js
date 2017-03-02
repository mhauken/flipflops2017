import moment from 'moment';

const locations = [
  {
    id: 1,
    image: 'locations/1.jpg',
    hidden: false,
    title: 'Auditorio Alfredo Kraus',
    timeDuration: 25,
    position: {lat: 28.14961, lng: -15.43005},
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
    position: {lat: 28.14364, lng: -15.4313},
    description: "This building looks like Batman2",
    comments: [],
  },
  {
    id: 3,
    image: 'locations/3.jpg',
    hidden: false,
    title: 'asdfasdf Alfredo Kraus 2',
    timeDuration: 73,
    position: {lat: 28.14048, lng: -15.43015},
    description: "This building looks like Batman2",
    comments: [],
  },
];

export default locations;
