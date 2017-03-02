import moment from 'moment';

const locations = [
  {
    id: 1,
    image: 'locations/playa.jpg',
    hidden: false,
    title: 'Playa de Las Canteras',
    timeDuration: 25,
    position: {lat: 28.140578, lng: -15.435765},
    description: "This is a beach",
    comments: [{
      username: "Anonymous", comment: "it's great", date: moment()
    }]
  },
  {
    id: 2,
    image: 'locations/vegueta.jpg',
    hidden: false,
    title: 'Vegueta',
    timeDuration: 25,
    position: {lat: 28.098467, lng: -15.415550},
    description: "This is a district",
    comments: []
  },
  {
    id: 3,
    image: 'locations/jardin.jpg',
    hidden: false,
    title: 'Jardin Canario',
    timeDuration: 25,
    position: {lat: 28.066520, lng: -15.456779},
    description: "This is a botanic garden",
    comments: []
  },
  {
    id: 4,
    image: 'locations/colon.jpg',
    hidden: false,
    title: 'Casa de Colon',
    timeDuration: 25,
    position: {lat: 28.101583, lng: -15.414071},
    description: "This is a house",
    comments: []
  },
  {
    id: 5,
    image: 'locations/bandama.jpg',
    hidden: false,
    title: 'Caldera de Bandama',
    timeDuration: 25,
    position: {lat: 28.031720, lng: -15.455764},
    description: "This is a volcano",
    comments: []
  },
  {
    id: 6,
    image: 'locations/triana.jpg',
    hidden: false,
    title: 'Calle Triana',
    timeDuration: 25,
    position: {lat: 28.106050, lng: -15.416341},
    description: "No idea what is it",
    comments: []
  },
  {
    id: 7,
    image: 'locations/doramas.jpg',
    hidden: false,
    title: 'Doramas Park',
    timeDuration: 25,
    position: {lat: 28.120392, lng: -15.416341},
    description: "This is a park",
    comments: []
  },
  {
    id: 8,
    image: 'locations/museo.jpg',
    hidden: false,
    title: 'Museo Elder de la Ciencia y la Tecnologia',
    timeDuration: 25,
    position: {lat: 28.140908, lng: -15.429839},
    description: "This is a museum",
    comments: []
  },
  {
    id: 9,
    image: 'locations/centro.jpg',
    hidden: false,
    title: 'Centro Comercial Las Arenas',
    timeDuration: 25,
    position: {lat: 28.128353, lng: -15.448291},
    description: "This is a mall",
    comments: []
  },
  {
    id: 10,
    image: 'locations/cathedral.jpg',
    hidden: false,
    title: 'Catedral de Santa Ana',
    timeDuration: 25,
    position: {lat: 28.100814, lng: -15.414767},
    description: "This is a cathedral",
    comments: []
  },
];

export default locations;
