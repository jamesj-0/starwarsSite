const data = {
  informationKeys: {
    people: [
      'name',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender',
    ],
    films: [
      'title',
      'episode_id',
      'opening_crawl',
      'director',
      'producer',
      'release_date',
    ],
    planets: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
    ],
    species: [
      'name',
      'classification',
      'designation',
      'average_height',
      'skin_colors',
      'hair_colors',
      'eye_colors',
      'average_lifespan',
      'homeworld',
      'language',
    ],
    vehicles: [
      'name',
      'model',
      'manufacturer',
      'cost_in_credits',
      'length',
      'max_atmosphering_speed',
      'crew',
      'passengers',
      'cargo_capacity',
      'consumables',
      'vehicle_class',
    ],
    starships: [
      'name',
      'model',
      'manufacturer',
      'cost_in_credits',
      'length',
      'max_atmosphering_speed',
      'crew',
      'passengers',
      'cargo_capacity',
      'consumables',
      'hyperdrive_rating',
      'MGLT',
      'starship_class',
    ],
  },
  linkKeys: {
    people: ['homeworld', 'films', 'species', 'starships', 'vehicles'],
    films: ['characters', 'planets', 'starships', 'vehicles', 'species'],
    planets: ['residents', 'films'],
    species: ['people', 'films'],
    vehicles: ['pilots', 'films'],
    starships: ['pilots', 'films'],
  },
};

export default data;
