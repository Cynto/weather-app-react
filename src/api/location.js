const locationFunction = (() => {
  let location = 'London'
  const setLocation = (place) => {
    location = place;
    return location
  }
  const getLocation = () => {
    return location
  }

  return {
    setLocation,
    getLocation,
  }
})()
export default locationFunction