// -------------------------------------
// Grunt Csslint
// -------------------------------------

module.exports = {

  // ----- Default options ----- //

  options: {
    csslintrc: '.csslintrc'
  },

// ----- Strict rules ----- //

  strict: {
    src: ['dist/child/css/production.min.css']
  }
};