// 声明一个变量，指定为number类型
let a:number

a = 11

a = 23

// 会报错
// a = 'a'

// number
// boolean
// string
// any
// unkonwn
// object
// string[]  : 数组
// tuple  ： 固定长度的数组
// enum
// Function


let bool:boolean

let str:string

let an:any

let unk:unknown

let obj:object

let arr:string[]

// 没有意义，使用箭头函数的方式
let func: Function
let func1: (a:number,b:string)=>number

// 元祖
let tup: [string, string]

// enum 枚举
enum Gender {
  MALE = 0,
  FEMALE = 1
}

let gen: Gender
gen = Gender.FEMALE


unk = 1
unk = 'c'


/**
 * 联合类型
 */
let union: string | number


/**
 * 字面量，只能取设定的值
 */
let char: '男' | '女'

// 会报错
// char = '未知'


/**
 * unknown 和 any 有什么区别
 *    unknown的变量不能直接赋值给其他变量，可先判断类型或使用类型断言后再赋值；而any可以，所以存在类型风险
 *    尽量使用unknown，避免使用any
 */



/**
 * 类型断言 variable as type
 * <type>variable
 */
let asset1:unknown
asset1 = '222'

let asset2:string

// 会报错
// asset2 = asset1
// 两种类型断言的方式
asset2 = asset1 as string
asset2 = <string>asset1


/**
 * 对象类型的限定
 * 
 */
let obj1: {name: string}

// 会报错，定义时只允许name属性
// obj1 = {name: 'goog', age: 12}

let obj2: {name: string, age: number}

// 会报错
// obj2 = {name: 'gg'}


// 设置可选属性
let obj3: {name: string, age?: number}


// 不限定, name属性之后可出现任意属性
let obj4: {name: string, [prop: string]: any}




/**
 * 元祖
 * 
 */
let tup1: [number, string]

tup1 = [1, 'aaa']


/**
 * &符号的使用，表示且、同时
 * 
 */
// 虽然无意义，但是符合语法
// let j: string & number

// 真正的使用方式
// 表示固定检查j对象中name，age属性,不能设置其它多余的属性
let j: {name: string} & {age : number}
j = {name: 'aaa', age: 12}


/**
 * 类型别名
 *    简化类型的使用
 */
type MyType = 1 | 2 | 3 | 4

let myType: MyType