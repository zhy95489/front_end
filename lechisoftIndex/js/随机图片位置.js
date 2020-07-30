class Circle {
    constructor(x, y, r, color){
        this.x = x
        this.y = y
        this.r = r
    }
 
}

class RandomCircle {

    constructor(obj) {
        this.dWidth      = window.innerWidth;
        this.dHeight     = window.innerHeight;

        this.fix         = obj.fix || false;
        this.minMargin   = obj.minMargin || 1 
        this.minRadius   = obj.minRadius || 80
        this.radiuArr    = obj.radiuArr || [80,70,60,50,45,40,40,35,35,30]
        this.total = obj.total || 10
        this.circleArray = []
        this.circleNumber = 1
    }



    check(x,y,r) {
        return  !(x+r > this.dWidth || x-r < 0 || y + r > this.dHeight || y-r < 0)
    }

    // 获取一个新圆的半径，主要判断半径与最近的一个圆的距离
    getR(x,y) {
        if (this.circleArray.length === 0) return Math.floor(Math.random()*20 + 80)
        let lenArr = this.circleArray.map(c => {
            let xSpan = c.x-x
            let ySpan = c.y-y
            return Math.floor(Math.sqrt(Math.pow(xSpan,2) + Math.pow(ySpan,2))) - c.r
            // a方加b方= 2ab 所以能求出来当前坐标
        })
        let minCircleLen = Math.min(...lenArr)//
        let minC = this.circleArray[lenArr.indexOf(minCircleLen)]
        let tempR = this.fix ? this.radiuArr[this.circleArray.length] : minCircleLen - this.minMargin
        let bool = this.fix ? (tempR <= minCircleLen - minC.r) : (tempR >= this.minRadius)
        return bool ? tempR : false
    }

    // 生成一个圆，随机生成圆心。
    // 如果连续生成200次半径都没有合适的话，终止进程
    createOneCircle(){
        let x,y,r;
        let createCircleTimes = 0
        while(true) {
            createCircleTimes ++ 
            x = Math.floor(Math.random()*this.dWidth)
            y = Math.floor(Math.random()*this.dHeight)
            let TR = this.getR(x,y)
            if (!TR) {
                continue;
            } else {
                r = TR
            }
            if (this.check(x,y,r) || createCircleTimes > 200) {
                break
            }

        }
        this.check(x,y,r) && this.circleArray.push(new Circle(x, y, r))

    }

    // 如果生成100次新圆都失败的话，终止方案。
    // 如果生成100种方案都没有合适可用的话，终止进程。
    init() {
        let n = 0
        while(this.circleArray.length < this.total) {
            this.circleArray = []
            let i = 0;
            while (this.circleArray.length < this.total) {
                this.createOneCircle()
                i ++ 
                if (i >= 100) {
                    break;
                }
            }
            n ++ 
            if (n > 100) {
                break;
            }
        }
    
    }
}


let p = new RandomCircle({ total: 20})
p.init()

console.log(p.circleArray)