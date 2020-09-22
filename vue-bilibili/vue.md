关于vue的一些笔记

##### **0、Vue实例的作用范围是什么呢？**

	在el命中的元素外部  会被原封不动的渲染上去。
	el命中的元素内部及其后代元素
##### **1、内容绑定，事件绑定**

		v-text: 无论内容是什么，只会解析文本
	v-html：设置元素的innerHTML 如果有html内容会被解析为标签
	
			不需要去操纵 dom  只要数据更新，使用数据的元素会同步更新
	v-on：
##### **2、vue中的计算属性和方法可以达到同样的效果，有什么区别呢**

		计算属性会有缓存，如果结果是一个复杂运算的话会消耗性能，所以用计算属性，
	不希望有缓存的话就选择方法
##### **3、一个属性，ans如果你定义一个方法叫get，ans是不是就是他们的get和set方法？**

		this.debouncedGetAnswer()
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)

##### **4、vue生命周期钩子函数的实现原理是什么？**

		 他是通过使用了一个callhook的回调函数，参数及时方法名， 根据不同的方法名在不同的地方都使用了这个回调函数

##### **5、计算属性为什么里面是一个方法，而外面是用一个属性去操作的？**

		因为computed这个属性的值是一个对象，而对象其中有个属性叫做fullname(对象类型的)，
		所以他算是computed里面的一个对象类型的属性，这个属性也是有get和set的  只不过set一般百分之99都不会使用，
		然后就有了个简写，就是fullname：function(){} 代表的就是get的意思
##### **6、计算属性的缓存**

				用methods同样会达到相同的目的但是，methods会有多少次调用就执行多少次，
		计算属性就不一样了，不管调用多少次，只要值不发生变化，就只会调用一次，有缓存的
##### **7、var作用域问题为什么用闭包可以解决**

```
因为函数的闭包是可以有自己独立的变量的  块级作用域只在自己的区域里面		起作用
```

##### **8、块级作用域**

		// ES5之前因为if和for都没有块级作用域的概念，所以很多时候，我们都必须借助于function作用域来解决外面变量的问题，
	    //
	    // ES6中，加入了let，let它是有if和for的块级作用域的
##### **9、const的使用和注意点**

	//1.注意一：一旦给修饰的标识符被赋值后，不能修改
	// const a = 20;
	// a = 30;
	
	// 2.注意二： 在使用const定义标识符，必须进行赋值
	
	// 3、注意三： 常量的含义是指向的对象不能修改，但是可以改变对象内部的属性。
##### **10、方法如果需要传参数而你没有传**

```
	你带括号（）这个值是undefined  
如果连括号都不带的话   这个值方法里面接收的就是当前浏览器的event
```
##### **11、input的切换复用问题**

```		
这是因为vue在进行DOM渲染时，处于性能考虑，会尽可能的复用已经存在的元素，而不是创建新的元素。
在切换登陆的案例中，vue内部会发现原来的input元素不再使用，直接作为else中的input来使用了。并不会创建一个input

解决方法：如果我们不喜欢Vue出现莱斯重复利用的问题，可以给对应的input添加key，并且我们要保证key不同
key是作为一个标识存在的，如果一样的key说明是可以复用的，不一样的key才说明不可以复用的
```

##### **12、v-show和v-if的区别，开发中如何选择呢？**

```
v-show的用法和v-if非常相似，也用于决定一个元素是否渲染
	v-if当条件为false时，压根不会有对应的元素在DOM中。
	v-show当条件为false时，仅仅是将元素的display属性设置为none
开发中如何选择呢？
	当需要在显式与隐藏之间频繁切换的时候，用v-show
	当只有一次切换时，用v-if
```

###### 13、组件的key属性

```
官方推荐我们在使用v-for时，给对应的元素或组件添加上一个key属性。
为什么需要这个key属性呢(了解)？
	这个其实和Vue的虚拟DOM的Diff算法有关系
当某一层有很多相同的节点时，也就是列表节点时，我们希望插入一个新的节点
	我们希望可以在B和C之间加一个F，Diff算法默认执行起来是这样的。
	即把C更新成F，D更新成C E更新成D，最后插入E，是不是很没有效率
所以我们需要使用key来给每个节点做一个唯一标识
	Diff算法就可以正确的识别此节点找到正切的位置去插入新的节点
总结：key的作用主要是为了高效的更新DOM
```

##### 14、vue绑定key为什么不建议用index

```
因为如果你用index作为key的值，将来在修改数据的时候 index和item就不是一一对应关系了，因为数据被增加或者删除了之后index是会变的
```

##### **15、绑定disable属性  **

```
用disable=“判断条件”
```

**16、关于splice的用法**

```
splice(0,   0,   0,       0,)
       下标  几位  到第几位  替换
```

**17、关于vue里面使用过滤器**

```
filters  用于将参数传过来，然后进行一些变动，修改，或者整理什么的 ，如果很多个地方都需要用到就可以使用过滤器，对结果进行一下整理
```

**18、关于vue里面的循环  包括增强for循环**

```
			1、使用了普通的for循环
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price*this.books[i].num
            }

            2、是用了es6的for循环
            for(let i in this.books){}

            3、使用了增强for循环，直接拿出来对象
            for (let book of this.books) {
                totalPrice += book.price * book.num
            }
```

**19、关于vue里面的高阶函数  filter   map    reduce**

```

             1、filter函数的使用 -》过滤掉其中某些不符合条件的
             const number = num.filter(function(n){
                return n<10;
             })

             2、map函数的使用 -》让每个函数都进行相乘
             const number2 = number.map(function (n){
                return n*2;
             })

             3、reduce函数的使用  让函数进行汇总
             对数组中所有的数据进行汇总
             number2.reduce(function(preValue , n){
                return preValue + n;
             },0)
             
             4、高阶函数的连接使用
            const num = [2, 3, 54, 234, 65, 32, 4, 3, 2];
            totalPrice = num.filter(function (n) {
                return n < 10
            }).map(function (n) {
                return n * 2
            }).reduce(function (preValue, n) {
                return preValue + n
            })

            5、高阶函数的链式操作，箭头函数
            let totleNum = num.filter(n => n < 10).map(n => n * 2).reduce((preValue, n) => preValue + n)
            
```



**19、v-model 原理**

```
本质上v-model就是两个方法的集合，一个是：value 把message绑定到input标签里
一个是通过监听input事件来动态的修改message的值 
```

**20、v-model值绑定和修饰符**

```
lazy修饰符：
	默认情况下，v-model默认是在input时间中同步输入框数据的
	也就是说一旦有数据发生改变，对应的data中的数据就会自动发生改变
	lazy修饰符可以让数据在失去焦点或者回车时才会更新
number修饰符
	默认情况下，在输入框中无论我们输入的是字符还是数字，都会被当做字符串类型进行处理。
	但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理
	number修饰符可以在输入框中输入的内容自动转换成数字类型
trim修饰符
	如果输入的内容首尾有很多空格，通常我们希望将其去除
	trim修饰符可以过滤内容左右两边的空格
```

**21、typeof  **

```
typeof age  用来获取当前age参数的一个类型的，
```

