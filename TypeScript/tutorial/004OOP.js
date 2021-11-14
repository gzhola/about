/**
 * 面向对象特性
 */
/**
 * class
 */
var Person = /** @class */ (function () {
    function Person() {
        // 实例属性
        this.name = '顺悟空';
        this.age = 10000;
    }
    // 类属性
    Person.gender = '男';
    return Person;
}());
var p1 = new Person();
console.log(p1);
console.log(Person.gender);
