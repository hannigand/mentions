// Automatically generated from https://uinames.com/
const names = [
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
];

const filterNames = (names, name) =>
  names
    .filter(({ username }) => username.startsWith(name))
    .sort(sortByUsername);

const sortByUsername = (a, b) =>
  a.username > b.username ? 1 : a.username < b.username ? -1 : 0;

describe('Test name filtering', () => {
  it('should return an empty collection of names', () => {
    expect(filterNames(names, 'Dan Hannigan').length).toEqual(0);
  });
  it('should return a single name', () => {
    console.log(filterNames(names, 'EdwardSanchez'));
    expect(filterNames(names, 'EdwardSanchez').length).toEqual(1);
  });
  it('should return multiple names', () => {
    expect(filterNames(names, 'Laur').length).toBeGreaterThan(1);
  });
  it('should return multiple names, ordered alphabetically', () => {
    expect(filterNames(names, 'Laur')).toEqual([
      {
        name: 'Laura Grant',
        username: 'LauraGrant',
      },
      {
        name: 'Lauren Freeman',
        username: 'LaurenFreeman',
      },
      {
        name: 'Lauren Jacobs',
        username: 'LaurenJacobs',
      },
    ]);
  });
});
