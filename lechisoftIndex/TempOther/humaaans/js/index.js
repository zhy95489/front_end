const app = new Vue({
    el: "#app",
    data: {
        houzhui: ".png",
        imagesUrlUp: "./images/上衣",
        imagesUrlDown: "./images/裤子",
        position: "fixed",
        upLeft: "280",
        upTop: "50",
        DownLeft: "270",
        DownTop: "300",
        bgcolor:"Pink",
        colorList:["red","blue","yellow","Pink","golden","violet","green"],
        upList:[1,2,3,4,5],
        downList:[1,2,3,4,5],
        upNum:1,
        downNum:1
    },
    methods: {
        getimagesUrlUp() {
            return this.imagesUrlUp + this.upNum + this.houzhui;
        },
        getimagesUrlDown() {
            return this.imagesUrlDown + this.downNum + this.houzhui;
        },

        getUpStyle:function(){
            return {left:this.upLeft+'px',top:this.upTop+'px',zIndex:10}
        },
        getDownStyle:function(){
            return {left:this.DownLeft+'px',top:this.DownTop+"px",zIndex:9}
        },
        getbgcolor:function () {
            return {'background-color':this.bgcolor}
        }
    }
})