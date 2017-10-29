const filterNames = (names, name) =>
  names
    .filter(({ username }) =>
      username.toLowerCase().startsWith(name.toLowerCase()),
    )
    .sort(sortByName);

const sortByName = (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

export { filterNames };
