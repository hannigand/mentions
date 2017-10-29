const filterNames = (names, name) =>
  names.filter(({ username }) => username.startsWith(name)).sort(sortByName);

const sortByName = (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

export { filterNames };
