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
            this.books[index].num --
        },
        numAdd: function (index) {
            this.books[index].num ++

        },
        remove:function (index) {
            this.books.splice(index,1);
        }
    },
    filters:{
        getPrice(price){
            return '¥' + price.toFixed(2);
        }
    },
    computed:{
        totalPrice:function () {
            let totalPrice = 0;
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price*this.books[i].num
            }
            return totalPrice;
        }
    }
})