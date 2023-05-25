// BEGIN
const bind = (obj, fn) => (...args) => {
    return fn.apply(obj, args);
  };
  
  export default bind;
// END