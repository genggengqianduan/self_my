//数据渲染
; (function ($) {
    var sid = location.search.substring('?').split('=')[1];
    $.ajax({
        url: 'http://10.31.163.75:1234/projectname/php/datails.php',
        data: {
            sid: sid
        },
        dataType: 'json'
    }).done(function (data) {//data:后端返回的和id对应的数据
        $('.xt img').attr('src', data.url);
        $('.dt img').attr('src', data.url);
        // $('#smallpic').attr('sid', data.sid);
        $('.inner_r .title h1').html(data.title);
        $('.content p').html(data.title);
        $('.jg p').html(data.money);
        var arr = data.urls.split(',');
        var str = '';
        $.each(arr, function (index, value) {
            str += `
            <li>
            <a href="#" class="active">
                <img src="${value}" alt="">
            </a>
        </li>
            `;
        });
        $('.mover ul').html(str);
        console.log($(".dt img").width())
    })
})(jQuery);


//图片切换
; (function ($) {
    $('.mover ul').on('click', 'li', function () {
        var $imgurl = $(this).find('a img').attr('src');
        $('.xt img').attr('src', $imgurl);
        $('.dt img').attr('src', $imgurl);
    });
})(jQuery);




//放大镜


(function () {
    class Fangda {
        constructor() {
            this.$spic = $(".xt");
            this.$sf = $(".xf");
            this.$bf = $(".dt");
            this.$bpic = $(".dt img");
            this.$detail_l = $(".detail_l");
            this.bili = this.$bpic.width() / this.$spic.width();
        }
        init() {
            let $_this = this; //存this
            this.$spic.hover( //鼠标移入移出加滑动
                function () {
                    $_this.over();
                    $(this).on("mousemove", function (e) {
                        $_this.move(e);
                    });
                },
                function () {
                    $_this.out();
                }
            );

        }

        over() {
            //鼠标移入
            this.$sf.css({
                display: "block",
                width: (this.$spic.width() * this.$bf.width()) / this.$bpic.width(),
                height: (this.$spic.height() * this.$bf.height()) / this.$bpic.height()
            });
            this.$bf.css("display", "block");
        }

        out() {
            //鼠标移出
            this.$sf.css("display", "none");
            this.$bf.css("display", "none");
        }

        move(e) {
            //鼠标移动
            let l = e.pageX - this.$detail_l.offset().left - this.$sf.width() / 2;
            let t = e.pageY - this.$detail_l.offset().top - this.$sf.height() / 2;
            if (l <= 0) {
                l = 0;
            } else if (l >= this.$spic.width() - this.$sf.width()) {
                l = this.$spic.width() - this.$sf.width();
            }
            if (t <= 0) {
                t = 0;
            } else if (t >= this.$spic.height() - this.$sf.height()) {
                t = this.$spic.height() - this.$sf.height();
            }
            this.$sf.css({
                left: l,
                top: t,
            });
            this.$bpic.css({
                left: -this.bili * l,
                top: -this.bili * t,
            });
        }
    }
    new Fangda().init();
})();


//配置选择

// ;(function($){
//   $('.click li').on('click',function(){
//       this.addClass('active');
//   })
// })(jQuery);

//物品的增加减少

; (function () {
    class Add {
        constructor() {
            this.$jian = $('.jian');
            this.$add = $('.add');
            this.$hehe = $('.hehe');
            this.$num = 0;
        }
        init() {
            let $th=this;
            this.add($th);
            this.jian($th);
        }
        add(th) {
            this.$add.on('click', function () {
                if(th.$num<99){
                    th.$num++;
                }else{
                    th.$num=99;
                }
           
                th.$hehe.html(th.$num);
            })
        }
        jian(th) {
            this.$jian.on('click', function () {
                if(th.$num>1){
                    th.$num--;
                }else{
                    th.$num=1;
                }
                th.$hehe.html(th.$num);
            })
        }
    }
    new Add().init()
})();


