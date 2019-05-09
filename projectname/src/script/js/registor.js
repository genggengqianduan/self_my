


//协议的出现消失
(function () {
    $('.btn').on('click', function () {
        $('.registor').css('display', 'none')
    })
})();


//验证码 
; (function ($) {
    class Yzm {
        constructor() {
            this.$yzm = $('#yzm p');
            this.$mm = '';
        }
        init() {
            this.yz();
        }
        yz() {
            this.$mm = Number(Math.floor(Math.random() * 10000));
            this.$yzm.html(this.$mm)
        }
    }
    new Yzm().init();
})(jQuery);



//注册
// ; (function ($) {
//     class Bd {
//         constructor() {
//             this.$input = $('#form_post input');
//             this.$sub = $('.sub');
//         }
//         init() {
//             let _th = this;
//             this.name();
//         }
//         name() {
//           let $usename=this.$input.eq(0);

//         }
//     }
//     new Bd().init();
// })(jQuery);


; (function ($) {
    class Zhu {
        constructor() {
            this.$input = $('#form_post input');
            this.$sub = $('.sub');
        }
        init() {
            this.$sub.on('click', function () {
                this.ajax();
            })      
        }
        ajax() {
            $.ajax({
                url: "http://10.31.163.75:1234/projectname/php/regitor/chuanru.php",
                data{
                    username:
                    }
            })
        }
    }
})(jQuery);

