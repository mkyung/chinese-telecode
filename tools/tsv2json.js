var fs = require("fs")
    , path = require("path")
    , readline = require("readline")
    , root = path.join(__dirname, "..");

var rl = readline.createInterface({
    input: fs.createReadStream(path.join(root, "data/Unihan_OtherMappings.txt"))
})

var dict = {}

rl.on("line", function(line){
    // Skip commented lines
    if (line[0] == "#") {
        return
    }

    // Parse the tsv and build the dictionary
    try {
        var values = line.split("\t")

        var charCode = values[0]
        var fieldType = values[1]
        var fieldVal = values[2]

        if (fieldType == "kMainlandTelegraph" || fieldType == "kTaiwanTelegraph") {
            // sc = kMainlandTelegraph; tc = kTaiwanTelegraph to reduce file size
            fieldType = fieldType == "kMainlandTelegraph"? "sc":"tc"

            // Strip "U+" to reduce file size
            charCode = charCode.replace("U+", "")

            if (dict[charCode]) {
                dict[charCode][fieldType] = fieldVal
            } else {
                var field  = {}
                field[fieldType] = fieldVal

                dict[charCode] = field
            }
        }
    } catch (e){
        console.log(e)
    }
})

rl.on("close", function(){
    fs.writeFile(
        path.join(root, "data/dict.json"),
        JSON.stringify(dict),
        function(){
            console.log("Done exporting Unihan to JSON")
        })
})
