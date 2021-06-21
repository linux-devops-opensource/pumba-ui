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


const defaultState = {
  "finished": false,
  "succeded": false
}
export function duplicationCheck(state = defaultState, action) {
  switch (action.type) {
      case 'DUPLICATION_FETCH':
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