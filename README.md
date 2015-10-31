# chinese-telecode
Convert Chinese characters to telecode / 中文電碼 / 中文电码  
Based on Unihan Unicode version 8.0.0

## Installation
	npm install --save chinese-telecode

## Usage
```
var telecode = require("chinese-telecode")
var codes = telecode("權利")
var codesTC = telecode("權利", {codeType: "tc"})
var codesSC = telecode("权利", {codeType: "sc"})
```

## Test
	npm test
	
## Release History
* 0.1.0 Initial release