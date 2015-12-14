var squareSize = 7, // 基本大小
    gap = 2, // 边框距离
    orange = "#FFA020",  
    lightOrange = "#FFDAA8", 
    background = "#F0F5F7", 
    squareNum = 34, 
    height = 306,  // 306 / 34 == 9 9px 作为
    width = 306, 
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
         [29, 20], [29, 21] ], 

    middle = [[8, 22], [9, 21], [9, 22], [10, 12], [10, 13], [10, 14], 
         [10, 19], [10, 20], [10, 21], [11, 11], [11, 12], [11, 13], [11, 14], [11, 15], [11, 16], 
         [11, 18], [11, 19], [11, 20], [12, 11], [12, 12], [12, 15], [12, 16], [12, 17], [12, 18],
          [12, 19], [13, 11], [13, 12], [13, 15], [13, 16], [13, 17], [13, 18], [13, 19], [14, 11], 
          [14, 12], [14, 13], [14, 14], [14, 15], [14, 16], [14, 18], [14, 19], [14, 20], [15, 12], 
          [15, 13], [15, 14], [15, 20], [15, 21], [15, 22], [15, 25], [15, 26], [16, 21], [16, 22],
        [16, 23], [16, 24], [16, 25], [16, 26], [16, 27], [17, 21], [17, 22], [17, 23], [17, 24],
        [17, 25], [17, 26], [17, 27], [18, 12], [18, 13], [18, 14], [18, 20], [18, 21], [18, 22], 
        [18, 25], [18, 26], [19, 11], [19, 12], [19, 13], [19, 14], [19, 15], [19, 16], [19, 18],
        [19, 19], [19, 20], [20, 11], [20, 12], [20, 15], [20, 16], [20, 17], [20, 18], [20, 19],
              [21, 11], [21, 12], [21, 15], [21, 16], [21, 17], [21, 18], [21, 19], [22, 11], [22, 12],
               [22, 13], [22, 14], [22, 15], [22, 16], [22, 18], [22, 19], [22, 20], [23, 12], [23, 13],
                [23, 14], [23, 19], [23, 20], [23, 21], [24, 21], [24, 22], [25, 22], [25, 23]],
   
    points = circle.concat(middle), 
    original = {};

console.log(points.length)

points.forEach(function(t) {
    //original[t] = 1;
    //  其实也可以这么写 
    original[ arguments[0] ] = 1; // 这个函数的木第 ，每个个有用的橘色的像素点都标记1，
});


//
var svgNS = "http://www.w3.org/2000/svg", 
    create = function(t) {
        return document.createElementNS(svgNS, t);
    }, 
    svg = create("svg");
    console.log(svg)
svg.setAttribute("xmlns", svgNS), 
svg.setAttribute("id", "moka-logo"), 
svg.setAttribute("width", width), 
svg.setAttribute("height", height);
// 以上一段是 负责写 svg 的 ，但是还没添加body标签里

var createRect = function(t, e, i) {

    //console.log(t+" "+e+" "+i+" ");
    var n = create("rect"), 
        a = t * (squareSize + gap), 
        r = e * (squareSize + gap);
         //console.log(n)    

    return n.setAttribute("x", a), 
        n.setAttribute("y", r), 
        n.setAttribute("width", squareSize), 
        n.setAttribute("height", squareSize), 
        n.setAttribute("fill", i), 
        n;
       
}, 

rects = {}, i, j;

for (i = 0; squareNum > i; i++){
    for (j = 0; squareNum > j; j++){      
        if (! ([i, j] in original) ) {
            var rect = createRect(i, j, background);
            svg.appendChild(rect), 
            rects[[i, j]] = rect
        }
    }
}

points.forEach(function(t) {
    var e = createRect(t[0], t[1], orange);
    svg.appendChild(e), rects[t] = e
}), 
document.getElementById("top-logo-section").appendChild(svg);



// 以上 第1遍logo绘制完毕、


var numAnimate = 2, 
past = new Date;

// 这个rangdom ？
var randomInt = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }, 

nbOffsets = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1] ], 

findRandNb = function(t) {
    var e = nbOffsets[randomInt(0, nbOffsets.length - 1)];
    return [t[0] + e[0], t[1] + e[1]]
};
colors = [lightBlue,background];

/*
setInterval(function() {
    var t = new Date;

    if (t - past > 300 ){
        return void (past = t);
    }

    for (animatePoints = {}, i = 0; i < randomInt(2, 5); i++) {
        var e = points[randomInt(0, points.length - 1)];
        for (j = 0; numAnimate > j; j++) {
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
}, 120), 
*/



points.forEach(function(t) {

    var e = rects[t];

    e.isAnimating = !1,
    e.point = t, 
    e.addEventListener("mouseover", function() { // mouseovser ,

        if (!e.isAnimating) {
            var t = e.point, 
                i = points[randomInt(0, points.length - 1)], 
                n = rects[i];

            if (!(n.isAnimating || i[0] === t[0] && i[1] === t[1])) {
                e.isAnimating = !0, 
                n.isAnimating = !0, 
                rects[t] = n, 
                rects[i] = e, 
                e.point = n.point, 
                n.point = t;
                
                var a = {};

                a.duration = 700, 
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
                }, 
                animate(a)
            }

        }
    })
});



