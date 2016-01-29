$(function() {
    //鼠标滚轮事件
    $.fn.extend({
        mouseWheel: function (upfn, downfn) {
            this.each(function (index, obj) {
                var obj = obj || document;
                if (obj.addEventListener) {
                    obj.addEventListener("mousewheel", fn, false);
                    obj.addEventListener("DOMMouseScroll", fn, false);
                } else {
                    obj.attachEvent("onmousewheel", fn);
                }
                function fn(e) {
                    var ev = e || window.event;
                    // alert(ev.wheelDelta);  //120 up  0 -120down
                    // alert(ev.detail);
                    var val = ev.wheelDelta || ev.detail;
                    if (navigator.plaform == "MacInter") {
                        if (val == -3 || val == 120) {
                            upfn.call(obj);
                        } else if (val == 3 || val == -120) {
                            downfn.call(obj);
                        }
                    } else {
                        if (val == -3 || val == 120) {
                            upfn.call(obj);
                        } else if (val == 3 || val == -120) {
                            downfn.call(obj);
                        }
                    }
                    ev.preventDefault();
                    e.preventDefault();
                }
            })
        }
    });
})
//调用方式：
// $('.sas').mouseWheel(function(){
// 鼠标向上滚动事件
// },function(){
// 鼠标向下滚动事件
// })
