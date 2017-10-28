const filterNames = (names, name) =>
  names
    .filter(({ username }) => username.startsWith(name))
    .sort(sortByUsername);

const sortByUsername = (a, b) =>
  a.username > b.username ? 1 : a.username < b.username ? -1 : 0;

export { filterNames };
