
  export function technologySelected(state = '', action) {
    switch (action.type) {
        case 'SET_TECHNOLOGY_SELECTION':
            return action.techlonogy;
  
        default:
            return state;
    }
  }