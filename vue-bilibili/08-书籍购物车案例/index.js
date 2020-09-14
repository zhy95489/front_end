const app = new Vue({
    el: "#app",
    data: {
        books: [{id: 1, name: '算法导论', date: '2006-9', price: 85.00, num: 1},
            {id: 2, name: 'java', date: '2012-12', price: 75.00, num: 1},
            {id: 3, name: 'oracle', date: '2032-7', price: 90.00, num: 1}],
    },
    methods: {
        // getFinalPrice: function (price) {
        //
        // },

        numSub: function (index) {
            this.books[index].num--
        },
        numAdd: function (index) {
            this.books[index].num++

        },
        remove: function (index) {
            this.books.splice(index, 1);
        }
    },
    filters: {
        getPrice(price) {
            return '¥' + price.toFixed(2);
        }
    },
    computed: {
        totalPrice: function () {
            // let totalPrice = 0;
            //return this.books.reduce((preValue , n) => preValue + n.price * n.num)
            return this.books.reduce(function (preValce,n) {
                return preValce + n.price * n.num
            },0)
            // /**
            //  1、使用了普通的for循环
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price*this.books[i].num
            // }
            //
            // 2、是用了es6的for循环
            // for(let i in this.books){}
            //
            // 3、使用了增强for循环，直接拿出来对象
            // for (let book of this.books) {
            //     totalPrice += book.price * book.num
            // }

            /**
             高阶函数  filter   map    reduce


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

             */
            //高阶函数的连接使用
            // const num = [2, 3, 54, 234, 65, 32, 4, 3, 2];
            // totalPrice = num.filter(function (n) {
            //     return n < 10
            // }).map(function (n) {
            //     return n * 2
            // }).reduce(function (preValue, n) {
            //     return preValue + n
            // })
            //
            // //高阶函数的链式操作，箭头函数
            // let totleNum = num.filter(n => n < 10).map(n => n * 2).reduce((preValue, n) => preValue + n)
            // return totleNum;
        }
    }
})