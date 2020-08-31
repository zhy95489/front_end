const app = new Vue({
    el: "#app",
    data: {
        weatherData:"",//天气数据
        weather:"",//具体天气

        tianqiUrl:"",//./images/大晴天.png",
 
    },
    methods:{
        getWeatherStyle:function () {
            return {left: 0+'px',top: 0+"px"}
        },
    },
    created(){
        // 清空对象
        let vm = this;
        console.log("12312312");
        $.ajax({
            type: "GET",//默认是GET

            url: "https://devapi.heweather.net/v7/weather/now?location=101180101&key=c5d7227f83264118b9ac5c5e2e43b90c",

       

            success: function (data) {

    
                this.weather = data.now.text;
                if (this.weather.includes("晴")){
                    vm.$set(vm.$data, 'tianqiUrl', './images/qingtian.png')
                }else if(this.weather.includes("雨")){
                    vm.$set(vm.$data, 'tianqiUrl', './images/xiayu.png')
                }else{
                    vm.$set(vm.$data, 'tianqiUrl', './images/duoyun.png')
                    
                }
                console.log(vm.$data);

            },
            error:function(data){
                console.log(data)
            }
        });

    },



})