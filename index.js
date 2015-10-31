/**
 * Get telecode for Chinese
 * Returns telecode by each character
 * Returns empty string for that character if not found
 *
 * @param  {string} text    Text to be translated
 * @param  {object} options Options object (optional)
 * @param  {string} options.codeType Traditional or Simplified Chinese or auto (sc preferred)
 * @return {Array}         Array of telecode
 */

var dict = require("./data/dict.json")

module.exports = function(text, options){
    var codes = []

    options = options || {}
    options.codeType = options.codeType || "auto"

    for (var i in text){
        var charCode = text.charCodeAt(i).toString(16).toUpperCase()

        var telecode = dict[charCode]

        if (!telecode) {
            codes.push("")
            continue
        }

        if (options.codeType == "auto"){
            codes.push(telecode["sc"] || telecode["tc"] || "")
        } else {
            codes.push(telecode[options.codeType])
        }
    }

    return codes
}

