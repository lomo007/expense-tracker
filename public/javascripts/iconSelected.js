const handlebars = require('handlebars')
const iconSelected = handlebars.registerHelper('iconSelected', function (recordIconName, optionName, options) {
  return (recordIconName === optionName) ? options.fn(this) : options.inverse(this)
})

module.exports = iconSelected
