export const recordKeyPress = key => {
  console.log({ key });
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
