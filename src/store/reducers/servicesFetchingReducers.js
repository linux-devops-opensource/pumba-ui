export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function loadingItemsCount(state = 0, action) {
  
  switch (action.type) {
      case 'ITEM_LOADING':
          return state + 1
      case 'ITEM_STOPPED_LOADING':
        return state - 1
      default:
          return state;
  }
}


export function processResults(state = {failed: false}, action) {
  switch (action.type) {
      case 'SET_PROCESS_RESULTS':
          return action.items;

      default:
          return state;
  }
}

const defaultState = {
  "finished": false
}

export function duplicationCheck(state = defaultState, action) {
  switch (action.type) {
      case 'DUPLICATION_FETCH':
          return action.items;

      default:
          return state;
  }
}


export function repositoryUpload(state = defaultState, action) {
  switch (action.type) {
      case 'REPOSITORY_UPLOAD_FETCH':
          return action.items;

      default:
          return state;
  }
}

export function uploadToStorageManager(state = defaultState, action) {
  switch (action.type) {
      case 'UPLOAD_TO_STORAGE_FETCH':
          return action.items;

      default:
          return state;
  }
}

export function dependencyCheck(state = defaultState, action) {
  switch (action.type) {
      case 'DEPENDENCY_FETCH':
          return action.items;

      default:
          return state;
  }
}