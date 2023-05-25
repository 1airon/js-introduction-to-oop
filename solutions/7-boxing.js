// BEGIN
function magic(...args) {
    const sum = (...newArgs) => {
      if (newArgs.length === 0) {
        return args.reduce((acc, value) => acc + value, 0);
      }
      return magic(...args, ...newArgs);
    };
    sum.valueOf = () => args.reduce((acc, value) => acc + value, 0);
    return sum;
  }
  
  export default magic;
// END
