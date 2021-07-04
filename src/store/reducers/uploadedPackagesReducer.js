
  export function uploadedPackages(state = [], action) {
    switch (action.type) {
        case 'SET_UPLOADED_PACKAGES':
            return action.uploadedPackages;
  
        default:
            return state;
    }
  }