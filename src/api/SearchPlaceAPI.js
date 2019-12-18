const objToQueryString = (obj) => {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

const searchPlace = (optionalParam = {}) => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    const params = {
        key: 'AIzaSyDbIFJAsrZr_axVU2Q72XbL4uW_uVsuHg4',
        location: '13.828253,100.5284507',
        type: 'restaurant',
        rankby: 'distance',
        ...optionalParam
    }
    const qs = objToQueryString(params)

    return new Promise((resolve, reject) => {
        fetch(`${url}?${qs}`)
          .then(resp => resp.json())
          .then(data => resolve(data)
          ).catch((err) => { 
            reject(err);
          });
      });
}

export {
    searchPlace
}