export function rootMiddleware({ dispatch }) {
    return function(next) {
      return function(action) {
        // do your stuff
        // console.log("Middleware used");
        return next(action);
      };
    };
  }