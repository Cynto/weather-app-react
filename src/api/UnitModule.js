const unitModule = (() => {
 
  let unit = 'metric'
  const getUnit = () => {
    return unit
  }
  const setUnit = (word) => {
    unit = word;
    return unit;
  }
  return {
    getUnit,
    setUnit,
  }
})()
export default unitModule