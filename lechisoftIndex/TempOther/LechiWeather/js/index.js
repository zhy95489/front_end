const app = new Vue({
    el: "#app",
    data: {
        message: "你好啊",
        weatherData:"",//天气数据
        weather:"",//具体天气


        zuiba:"",//./images/嘴巴1.png",
        toufa:"",//./images/头发1.png",
        shenti:"",//./images/身体1.png",

        lian:"",//./images/脸庞1.png",//脸
        eyes:"",//./images/眼睛1.png",
        san:"./images/雨伞.png",
        yingzi:"./images/影子1.png",
        tianqiUrl:"",//./images/大晴天.png",
        tianqiLeft:0,//天气位置
        tianqiTop:0,//天气位置
        huochaiLeft:0,//火柴人位置
        huochaiTop:200,//火柴人位置
        isyusan:false,//是否显示雨伞
        isyingzi:false,//是否显示影子
    },
    methods:{
        getWriterurl:function () {

        },
        gethuochairenStyle:function () {
            return {left:this.huochaiLeft+'px',top:this.huochaiTop+"px"}
        },
        getWeatherStyle:function () {
            return {left:this.tianqiLeft+'px',top:this.tianqiTop+"px"}
        },
    },
    created(){
        // 清空对象
        this.weatherData = {};
        let vm = this;
        $.ajax({
            type: "POST",//默认是GET

            url: "http://api.map.baidu.com/telematics/v3/weather",

            dataType: "jsonp",

            data: {
                location: "郑州", // 城市

                output: "json", // 格式

                ak: "ohA7QHfg0BBrpiY4kyuIAAsD" // 百度地图ak

            },

            success: function (data) {


                this.weatherData = data.results[0].weather_data[0];
                this.weather = this.weatherData.weather;
                if (this.weather.includes("晴")){
                    vm.$set(vm.$data, 'zuiba', './images/嘴巴1.png')
                    vm.$set(vm.$data, 'toufa', './images/头发1.png')
                    vm.$set(vm.$data, 'shenti', './images/身体1.png')
                    vm.$set(vm.$data, 'tianqiUrl', './images/大晴天.png')
                    vm.$set(vm.$data, 'lian', './images/脸庞1.png')
                    vm.$set(vm.$data, 'eyes', './images/眼睛1.png')
                    vm.$set(vm.$data, 'isyusan', false)
                    vm.$set(vm.$data, 'isyingzi', true)
                }else if(this.weather.includes("雨")){
                    vm.$set(vm.$data, 'zuiba', './images/嘴巴2.png')
                    vm.$set(vm.$data, 'toufa', './images/头发2.png')
                    vm.$set(vm.$data, 'shenti', './images/身体2.png')
                    vm.$set(vm.$data, 'tianqiUrl', './images/下雨天.png')
                    vm.$set(vm.$data, 'lian', './images/脸庞1.png')
                    vm.$set(vm.$data, 'eyes', './images/眼睛1.png')
                    vm.$set(vm.$data, 'isyusan', true)
                    vm.$set(vm.$data, 'isyingzi', false)

                }else{
                    vm.$set(vm.$data, 'zuiba', './images/嘴巴1.png')
                    vm.$set(vm.$data, 'toufa', './images/头发1.png')
                    vm.$set(vm.$data, 'shenti', './images/身体1.png')
                    vm.$set(vm.$data, 'tianqiUrl', './images/多云天.png')
                    vm.$set(vm.$data, 'lian', './images/脸庞1.png')
                    vm.$set(vm.$data, 'eyes', './images/眼睛1.png')
                    vm.$set(vm.$data, 'isyusan', false)
                    vm.$set(vm.$data, 'isyingzi', false)
                }

            }
        });

    },
    // mounted(){

    // }



})