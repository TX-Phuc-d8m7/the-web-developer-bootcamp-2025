// Array Methods

// Push - Add to end
// Pop - Remove from end

// Unshift - Add to start
// Shift - Remove from start

// More methods 

// concat - Merge array
// includes - look for a value => Trả về giá trị boolean
// indexOf - just like string.indexOf => Trả về vị trí, nếu không có trả về -1
// join - creates a string from an array
// reverse - reverses an array => Đảo thứ tự của array, thay đổi trên array gốc, không tạo mảng copy
// slice - copies a portion on an array
// splice - removes/replaces elements
// sort - sorts an array


// CONCAT
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const array3 = array1.concat(array2);
console.log(array3) // 1, 3, 5, 2, 4, 6


// INCLUDE
array1.includes(3) // true

// SLICE
let colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
const slice = colors.slice(0,3); // colors(start, end)

// SPLICE 
const months = [ 'Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Chen 'Feb' tai vi tri 1, xoa 0 ki tu 


