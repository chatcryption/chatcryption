const authController = {
  setCookie: (req, res, next) => {
    // should pull user id off the large user result object on res.locals
    let { user_id } = res.locals.user;
    res.setCookie({ token, user_id})
    next();
  },

  validateCookie: (req, res, next) => {

  },



}



module.exports = authController;