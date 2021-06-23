  export function repositorySelected(state = '', action) {
    switch (action.type) {
        case 'SET_REPOSITORY_SELECTION':
            return action.repository;
  
        default:
            return state;
    }
  }