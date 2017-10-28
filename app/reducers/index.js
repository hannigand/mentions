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
  isMentioningUser: false,
  isRecordingMention: false,
  textareaValue: '',
};

const rootReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'RECORD_KEY_PRESS':
      const lastKey = payload.substr(-1);
      // If a User types @ then they are assumed to be mentioning someone
      // As long as the next keys are not a space,
      // we still assume they are mentioning
      const isMentioningUser =
        lastKey === '@' || (state.isRecordingMention && lastKey !== ' ');
      return {
        ...state,
        textareaValue: payload,
        isMentioningUser,
        isRecordingMention: isMentioningUser,
      };
    default:
      return state;
  }
};

export default rootReducer;
