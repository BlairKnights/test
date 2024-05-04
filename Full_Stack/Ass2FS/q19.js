function detect_data_type(value) {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
  
    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
            return dtypes[x];
            }
        }
    }
  
    return typeof value;
  }
  
console.log("\n 12: "+detect_data_type(12));
console.log("\n Word: "+detect_data_type('Word'));
console.log("\n false: "+detect_data_type(false)+"\n"); 
  