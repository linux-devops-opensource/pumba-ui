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

export function duplicationCheck(state = [], action) {
  switch (action.type) {
      case 'DUPLICATION_FETCH_SUCCESS':
          return action.items;

      default:
          return state;
  }
}

