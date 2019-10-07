function numAv(arr) {
 let added = 0 
  arr.forEach((num) =>{
    added = added + num
  })
  return added / arr.length
}
let list = [ 9,10,1,1,3]

console.log(numAv(list))