const isObject = val => {
    return typeof val === 'object' && val !== null;
  };
  /// need this to take in a string for the search bar
  export const classnames = (...args) => {
    const classes = [];
    args.forEach(arg => {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else if (isObject(arg)) {
        Object.keys(arg).forEach(key => {
          if (arg[key]) {
            classes.push(key);
          }
        });
      } else {
        throw new Error(
          'Error, Need a Name or address'
        );
      }
    });
  
    return classes.join(' ');
  };