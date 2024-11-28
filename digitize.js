function digitize(n) {
   return n.toString().split("").reverse().map(el=>el*1)
  }
  console.log(digitize(8765))