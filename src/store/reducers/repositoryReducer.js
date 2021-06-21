  export function repository(state = '', action) {
    switch (action.type) {
        case 'SET_REPOSITORY':
            return action.repository;
  
        default:
            return state;
    }
  }