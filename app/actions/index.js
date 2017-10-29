export const recordKeyPress = key => {
  return {
    type: 'RECORD_KEY_PRESS',
    payload: key,
  };
};

export const addMention = username => {
  return {
    type: 'ADD_MENTION',
    payload: username,
  };
};

export const changePosition = (selection, element) => {
  console.log(selection, element);
  return {
    type: 'CHANGE_POSITION',
    payload: {
      ...selection,
      ...element,
    },
  };
};
