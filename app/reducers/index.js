const initialState = {
  allNames: [
    {
      name: 'Philip Lawson',
      username: 'PhilLawson',
    },
    {
      name: 'Peter Hunt',
      username: 'PeteHunt',
    },
    {
      name: 'Lauren Freeman',
      username: 'LaurenFreeman',
    },
    {
      name: 'Joe Carr',
      username: 'JoeCarr',
    },
    {
      name: 'Lauren Jacobs',
      username: 'LaurenJacobs',
    },
    {
      name: 'Eric Richardson',
      username: 'EricRichardson',
    },
    {
      name: 'Nancy Baker',
      username: 'NancyBaker',
    },
    {
      name: 'Edward Sanchez',
      username: 'EdwardSanchez',
    },
    {
      name: 'Roger Watkins',
      username: 'RogerWatkins',
    },
    {
      name: 'Laura Grant',
      username: 'LauraGrant',
    },
    {
      name: 'Gloria Alvarez',
      username: 'GloriaAlvarez',
    },
    {
      name: 'Craig Wheeler',
      username: 'CraigWheeler',
    },
    {
      name: 'Jane Jacobs',
      username: 'JaneJacobs',
    },
    {
      name: 'Kimberly Patel',
      username: 'KimberlyPatel',
    },
    {
      name: 'Emma Turner',
      username: 'EmmaTurner',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
