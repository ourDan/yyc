// yu 
var squareSize = 7, // 一小格7px
	gap = 2,// 有2px的边框
	blue = "#206baa",  // 喜欢这个蓝色
	lightBlue = "#439ee8",  // 对应的浅蓝色
	background = "#F0F5F7",  
	baseNum = 34,
	lang = 306,
	circle = [ [4, 13], [4, 14], [4, 15], [4, 16], [4, 17], 
	           [4, 18], [4, 19], [4, 20], [4, 21], [4, 22], [5, 11], [5, 12], 
	           [5, 13], [5, 14], [5, 21], [5, 22], [5, 23], [5, 24], [6, 10], 
	           [6, 11], [6, 12], [6, 23], [6, 24], [6, 25], [7, 9], [7, 10], 
	           [7, 25], [7, 26], [8, 8], [8, 9], [8, 26], [8, 27], [9, 7], [9, 8], 
	    [9, 27], [9, 28], [10, 6], [10, 7], [10, 28], [10, 29], [11, 6], [11, 7], 
	    [11, 28], [11, 29], [12, 5], [12, 6], [12, 29], [12, 30], [13, 5], [13, 6], 
	    [13, 29], [13, 30], [14, 5], [14, 6], [14, 29], [14, 30], [15, 5], [15, 30], 
	    [16, 5], [16, 30], [17, 5], [17, 30], [18, 5], [18, 30], [19, 5], [19, 6], [19, 29],
	    [19, 30], [20, 5], [20, 6], [20, 29], [20, 30], [21, 5], [21, 6], [21, 29], [21, 30], 
	    [22, 6], [22, 7], [22, 28], [22, 29], [23, 6], [23, 7], [23, 28], [23, 29], [24, 7], 
	    [24, 8], [24, 28], [25, 8], [25, 9], [26, 9], [26, 10], [26, 22], [26, 23], [27, 10],
	    [27, 11], [27, 21], [27, 22], [26, 23], [28, 11], [28, 12], [28, 13], [28, 14], [28, 20], 
	    [28, 21], [28, 22], [29, 13], [29, 14], [29, 15], [29, 16], [29, 17], [29, 18], [29, 19],
	     [29, 20], [29, 21] ],  // 难道没有自动化的方法来写这个

	middle = [ [9,16],[10,16],[10,15],[11,15],[11,14],[12,14],[12,13],[13,13],[13,12],[14,12],
		[14,11],[15,11],[15,10],[16,10],[16,9],[17,9],[17,8],[18,9],[19,10],[20,11],[19,11],[20,11],
		[20,12],[21,13],[21,12],[22,13],[22,14],[23,14],[24,14],[24,15],[25,14],[25,16],[16,15],
		[14,15],[15,15],[16,15],[17,15],[18,15],[19,15],[20,15],[13,15],[14,15],[15,15],[10,19],[11,19],
		[12,19],[13,19],[14,19],[15,19],[16,19],[17,19],[18,19],[19,19],[20,19],[21,19],[22,19],[23,19],
		[17,16],[17,17],[17,18],[18,16],[18,17],[18,18],[17,20],[17,21],[17,22],[17,23],[17,24],[17,25],
		[18,20],[18,21],[18,22],[18,23],[18,24],[18,25],[14,22],[13,22],[14,23],[13,23],[11,23],
		[14,22],[13,22],[12,23],[11,24],[10,24],[21,22],[22,22],
		[22,23],[23,23],[23,24],[24,24],[25,24],[26,24]],

	points = circle.concat(middle),  // 所有需要绘制的深bule点，
	original = {} ;

points.forEach(function(){
	original[ arguments[0] ] = 1;
})	
//console.log(points);
alert("point")

var svgNS = "http://www.w3.org/2000/svg";
function createSvg (nodeName){
	return document.createElementNS(svgNS, nodeName);
};

var svgTag = createSvg("svg");
svgTag.setAttribute("xmlns", svgNS), 
svgTag.setAttribute("id", "moka-logo"), 
svgTag.setAttribute("width", lang), 
svgTag.setAttribute("height", lang);


var createRect = function(t, e, i) {  // 写小方块的函数，调用刚才那个createSvg ,t是[]里里面表示x数量，e表示y数量的
    //console.log(t+" "+e+" "+i+" ");

    var n = createSvg("rect"), 
        a = t * (squareSize + gap), 
        r = e * (squareSize + gap);
         //console.log(n)    
    return n.setAttribute("x", a),  // 为啥要把这些 都返回了，待会改一下试试看 
        n.setAttribute("y", r), 
        n.setAttribute("width", squareSize), 
        n.setAttribute("height", squareSize), 
        n.setAttribute("fill", i), 
        n;
}, 
rects = {};


for (var i = 0; i < baseNum; i++){  // 横竖方向个遍历
    for (var j = 0; j < baseNum; j++){  

        if (! ([i, j] in original) ) {  // 如果这个坐标没有被收录 ，那就是背景，得用背景填充
            var rectBackground = createRect(i, j, background);
            svgTag.appendChild(rectBackground), 
            rects[[i, j]] = rectBackground;
        }
        else{ // 剩下的就是收录在里面 

        	var rectBlue = createRect(i, j, blue);
        	svgTag.appendChild(rectBlue);
        	rects[[i,j]] = rectBlue;
        }
    }
}
//console.log(rects); // 一个obj，存储了所需要的所有rect方块
document.getElementById("top-logo-section").appendChild(svgTag); 

// 以上 yyc的姓名绘制完毕



//
// 这个random 就是负责 mouseover了之后  往出随机 交换小方块

points.forEach(function(t) {
	//console.log(t)
	var e = rects[t]
	
		// 因为points页面也是存的[x,y]形式的内容 , e:node(rect)
		//console.log(e)
		//e.isAnimating = !1,  // 非变化状态
		e.isAnimating = false;
		e.point = t, // .point 属性里存着 [Numx,Numy]，
		e.addEventListener("mouseover", function() { // mouseovser , 
			//alert("22")
		    if ( !e.isAnimating ) {  

		    	console.log(randomInt(0, points.length - 1))
		        var t = e.point, //mouseover 的[numx,numy]
		            i = points[ randomInt(0, points.length - 1) ], // 随出一个目标点的[numx,numy] 
		            n = rects[i];  // 通过检索[numx,numy]来得到rect


		        if (! (n.isAnimating || i[0] === t[0] && i[1] === t[1] ) ) {  // 卡在这句判断上面了 就是判断

		            e.isAnimating = !0, 
		            n.isAnimating = !0, 
		            rects[t]  = n,  // 就是说，
		            rects[i] = e,  // 
		            e.point = n.point, 
		            n.point = t; 
		            
		            var a = {};

		            a.duration = 900, 
		            a.easing = "easeOutQuint", 
		            a.el = e, 
		            a.x = [ t[0] * (squareSize + gap),i[0] * (squareSize + gap) ], 
		            a.y = [ t[1] * (squareSize + gap),i[1] * (squareSize + gap) ], 
		            a.complete = function() {
		                e.isAnimating = !1
		            }, 
		            animate(a),

		            a = {}, 
		            a.duration = 700, 
		            a.easing = "easeOutQuint", 
		            a.el = n, a.x = [i[0] * (squareSize + gap), 
		            t[0] * (squareSize + gap)], 
		            a.y = [i[1] * (squareSize + gap), 
		            t[1] * (squareSize + gap)], 
		
		            a.complete = function() {
		                n.isAnimating = !1
		            } 
		            animate(a)
		        }
		    }
		})
	
});


var randomInt = function(t, e) {  // 自定义一个取随机数的fun 返回值是 t-e之间
        return Math.floor(Math.random() * (e - t + 1)) + t
    }, 

nbOffsets = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1] ], 

findRandNb = function(t) {  // 
    var e = nbOffsets[randomInt(nbOffsets.length - 1, 0)]; //随出来一个整数用来 确定位移是哪个值 
    return [ t[0] + e[0], t[1] + e[1] ] // 返回 确定要变化的 rect
};
colors = [ lightBlue, background ];

// 自己跳，浅蓝色的色块在做变化 

var numAnimate = 2, //来回切换的数量
past = new Date;  // 现在的时间


setInterval(function() {
    var t = new Date;

    if (t - past > 360 ){ // 时间差要在360ms以上
        return void (past = t);
    }

    for (var animatePoints = {}, i = 0; i < randomInt(4, 8); i++) {  // randomInt出来的是整数，就是一变化浅蓝色的
        
        var e = points[randomInt(0, points.length - 1)];

        for (var j = 0; numAnimate > j; j++) {
        	//console.log(e)
            var n = findRandNb(e);
            n in original || (animatePoints[n] = 1)
        }


    }

    Object.keys(animatePoints).forEach(function(t) {
        var e = {};
        e.el = rects[t],
        e.fill = colors, 
        e.duration = 2e3, 
        e.easing = "easeOutQuad", 
        animate(e)
    }), 
    past = t
}, 220);


console.log("<!-- i copy many code from Moka,准确点说是周六看见了他的网站，觉得挺好玩所以先读了压缩后代码，再自己改动了一点点-->")