function over() {
    var x = document.getElementById("findmusic-header-li5").style.display = "block";
}

function out() {
    var x = document.getElementById("findmusic-header-li5").style.display = "none";
}

window.onload = function() {
    var index1 = document.getElementById("lunbo-bottom1").getElementsByTagName("span");
    var bg1 = document.getElementById("findmusic-mid1");
    //获取 img
    var obj = document.getElementById("lunbo1");


    //获取 left
    var left = document.getElementById("lunbo-left");
    //获取 right
    var right = document.getElementById("lunbo-right");
    //定义变量 num = 0 ;
    var num = 96;
    var abc = setInterval(lunbo, 3000);


    function bg2() {
        if (num == 96) {
            bg1.style.backgroundColor = "#56514c";
        } else if (num == 97) {
            bg1.style.backgroundColor = "#ebd2e5";
        } else if (num == 98) {
            bg1.style.backgroundColor = "#eade37";
        } else if (num == 99) {
            bg1.style.backgroundColor = "#2eadf7";
        }


    }

    for (i = 0; i < index1.length; i++) {
        index1[i].id = i;

        index1[0].onclick = function() {
            num = 96;
            obj.src = "./images/" + "96" + ".jpg";
            bg2();
        }
        index1[1].onclick = function() {
            num = 97;
            obj.src = "./images/" + "97" + ".jpg";
            bg2();
        }
        index1[2].onclick = function() {
            num = 98;
            obj.src = "./images/" + "98" + ".jpg";
            bg2();
        }
        index1[3].onclick = function() {
            num = 99;
            obj.src = "./images/" + "99" + ".jpg";
            bg2();
        }

    }


    function lunbo() { //换图的函数
        num = num + 1;
        if (num == 96 || num == 100) {
            num = 96;
            obj.src = "./images/" + 96 + ".jpg";


        } else {

            obj.src = "./images/" + num + ".jpg";
        }
        bg2();

    }
    //每隔三秒执行一下换图函数

    //绑定点击左 span 处理函数
    left.onclick = function() {
            num = num - 1;
            if (num < 96) {
                num = 99;
                obj.src = "./images/" + 99 + ".jpg";

            } else {
                obj.src = "./images/" + num + ".jpg";
            }
            bg2();
        }
        //绑定点击右 span 处理函数
    right.onclick = function() {
        num = num + 1;
        if (num > 99) {
            num = 96;
            obj.src = "./images/" + 96 + ".jpg";
        }
        obj.src = "./images/" + num + ".jpg";
        bg2();
    }

    obj.onmouseover = function() {

        clearInterval(abc);
    }
    obj.onmouseout = function() {
        abc = setInterval(lunbo, 3000);
    }


}