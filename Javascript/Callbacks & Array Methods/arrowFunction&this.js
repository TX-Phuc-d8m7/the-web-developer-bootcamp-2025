const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

person.fullName(); // "John Doe"   


// Arrow functions do not have their own 'this' context
const personArrow = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

personArrow.fullName(); // "undefined undefined"


// Arrow function không có 'this', nếu dùng this lúc này 
// thì nó sẽ lấy 'this' của nơi mà nó được định nghĩa, không phải của nơi mà nó được gọi
// Do đó, nếu muốn sử dụng 'this' trong arrow function,
// bạn cần phải đảm bảo rằng 'this' đã được định nghĩa đúng trước đó
const personArrow2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullName: function() {
        return () => {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}