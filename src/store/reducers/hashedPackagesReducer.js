
  export function hashedPackages(state = [], action) {
    switch (action.type) {
        case 'SET_HASHED_PACKAGES':
            return action.hostsList;
  
        default:
            return state;
    }
  }