import { filterNames } from '../utils';

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
  filteredNames: [
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
  isRecordingMention: false,
  isMentionListVisible: false,
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
        (lastKey === '@' || (state.isRecordingMention && lastKey !== ' ')) &&
        payload.length;
      // Extract the name by getting every value after the @ sign
      const name = payload.substr(payload.lastIndexOf('@') + 1);
      // Filter the names
      const filteredNames = filterNames(state.allNames, name);
      return {
        ...state,
        textareaValue: payload,
        isRecordingMention: isMentioningUser,
        isMentionListVisible: isMentioningUser,
        filteredNames: isMentioningUser ? filteredNames : state.allNames,
      };
    case 'ADD_MENTION':
      // Get the Username from the action
      const username = payload;
      // Obtain the current textarea value
      const currentValue = state.textareaValue;
      // Remove everything typed in after @ sign and replace it with the
      // Username from the action
      const newValue = currentValue.substr(
        0,
        currentValue.lastIndexOf('@') + 1,
      );
      return {
        ...state,
        textareaValue: `${newValue}${username} `,
        isRecordingMention: false,
        isMentionListVisible: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
