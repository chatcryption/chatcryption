const authController = {
  setCookie: (req, res, next) => {
    // should pull user id off the large user result object on res.locals
    let { user_id } = res.locals.user;
    res.cookie('token', user_id)
    next();
  },

  verifyCookie: (req, res, next) => {

  },



}



module.exports = authController;