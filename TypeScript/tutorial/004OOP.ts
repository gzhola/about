/**
 * 面向对象特性
 */




/**
 * class
 *  使用static修饰的为类属性
 *  使用readonly修饰的为只读属性
 *  使用public
 *  使用private修饰
 * 
 *  使用下面这种构造函数样式
 *  constructor() {
 *  
 *  }
 */

class Person {
  // 实例属性
  public name: string = '顺悟空'
  private age: number = 10000

  // 类属性
  static gender: string = '男'

  // 只读属性，不能修改
  readonly work: string = '放马'

  // 构造函数
  constructor(name: string) {
    this.name = name
  }

  sayHi() {
    // this代表当前实例对象
    console.log(this)
    console.log('Hi')
  }
}

let p1 = new Person('你你你')

console.log(p1)
console.log(Person.gender)
console.log(p1.work)



/**
 * 继承，使用extends
 *  super调用父类函数属性
 *  构造器中必须通过super调用父类构造器
 */

class Man extends Person {
  constructor() {
    super('OK')
  }
}



/**
 * 接口 使用interface定义，可以定义多个同名接口，会将多个合并
 * 与 type定义类似
 */
interface MyInterface {
  name: string
}

type myType = {
  name: string
}


/**
 * 泛型
 */

function fn<K>(arg: K) {
  console.log(arg)
}

fn(1)
fn<string>('aaa')


function fn2<T, K>(a: K, b: T) {

}

function fn3<T extends Person>(a: T) {

}

fn3(new Man())

class P<T> {
  name: T
}
