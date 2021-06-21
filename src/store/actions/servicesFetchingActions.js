export function itemsHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function increaseItemsThatLoading() {
  return {
      type: 'ITEM_LOADING',
  };
}

export function decreaseItemsThatLoading() {
  return {
      type: 'ITEM_STOPPED_LOADING',
  };
}

export function itemsFetchDataSuccess(items, requestOption) {
  return {
      type: requestOption,
      items
  }
      
}

export function fetchDependencyCheck(uploadedPackages) {
  let url = 'http://51.124.62.119:3000/api/checkpackages'
  let payload = {
    packages: uploadedPackages
  }
  let requestOption = 'DUPLICATION_FETCH'
  return (dispatch) => {
      dispatch(fetchDataPost(url, requestOption, payload))
  }
}

export function fetchDuplicationCheck(hashedPackages) {
  let url = 'http://51.124.62.119:3000/api/checkpackages'
  let payload = {
    type: 'npm',
    packages: hashedPackages
  }
  let requestOption = 'DUPLICATION_FETCH'
  return (dispatch) => {
      dispatch(fetchDataPost(url, requestOption, payload))
  }
}

function fetchDataPost(url, requestOption, payload) {
  return (dispatch) => {
      dispatch(increaseItemsThatLoading());
      console.info(payload)
      const requestOpts = {
        headers:{
          'Accept': 'application/json, text/plain, */*',
          'Access-Control-Request-Method': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, DELETE, PUT',
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With"
        },
        method: 'POST',
        body: JSON.stringify(payload)
      }        
      fetch(url, requestOpts)    
         .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(decreaseItemsThatLoading());
              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items.result, requestOption)))
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}