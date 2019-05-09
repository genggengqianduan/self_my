





//二级导航出现与隐藏
; (function ($) {
  $sec_nav = $('.Tleft_left ul li');
  $two_nav = $('.nav_nonebox');
  $sec_nav.hover(function () {
    $two_nav.stop(true).animate({
      opacity: 1,
    }).css({ display: "block" })
  },
    function () {
      $two_nav.stop(true).animate({
        opacity: 0
      }).css({ display: "none" })
    });
})(jQuery);

//楼梯效果

; (function ($) {
  var $lou = $('.lou-ti a').not('.last-no');
  var $louceng = $('.louceng')
  $(window).on('scroll', function () {
    var $win = $(window).scrollTop();
    if ($win >= 478) {
      $('.lou-ti div').css({
        "position": "fixed",
        "top": 40,
        "right": '50%',
      })
    }
    else (
      $('.lou-ti div').css({
        "position": "absolute",
        "top": 478,
        "right": '50%'
      })
    );
    $louceng.each(
      function (index, element) {
        if ($(element).offset().top > $win) {
          $lou.removeClass('active')
          $lou.eq(index).addClass('active')
          return false
        }
      }
    )
  });
  $lou.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('html,body').animate({
      scrollTop: $louceng.eq($(this).index()).offset().top
    })
  })
  $('.last').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    })
  })
})(jQuery);


//猜你喜欢渲染

; (function ($) {
  $.ajax({
    url: 'http://10.31.163.75:1234/projectname/php/index1.php',
    success: function (data) {
      var data = JSON.parse(data);
      var $str = '';
      $.each(data, function (index, value) {
        $str += `
          <li class="like_inner">
            <a href="http://10.31.163.75:1234/projectname/src/details.html?sid=${value.sid}">
                <div class="like_img">
                    <img src="${value.url}" alt="">
                </div>
                <h4>${value.title}</h4>
                <div class="rmdp_js3 like_jg">
                    <a href="#" class="js3_jg">
                        <span>¥</span>
                        <em>${value.money}</em>
                    </a>
                    <a href="#" class="js3_jgh">
                        <span>¥</span>
                        <em>3200</em>
                    </a>
                    <a href="#" class="js3_xl">
                        月销
                        <em>1w+</em>笔
                    </a>
                </div>
                <a href="#" class="item_move">
                <p class="similar">
                    <i class="tb-ifont love"></i> 找相似
                </p>
                <p>发现更多相似的宝贝
                    <span class="tb-ifont"></span>
                </p>
            </a>
            </a>
        </li>
          `;
        $('.like ul').html($str);
      })
    }
  })
})(jQuery);






//搜索框的实现

; (function ($) {
  class Seach {
    constructor() {
      this.$seach = $('.input-la input');
      this.$ul=$('.seach');
      this.$str='';
    }
    
    init() {
      let $_th = this;
      this.$seach.on('focus',function(){
        $_th.$ul.css({display:'block'});
        
      });
      this.$seach.on('blur',function(){
        $_th.$ul.css({display:'none'});
      });
      this.$seach.on('input', function () {
        
        $_th.seach();
      })

    }
    seach() {
      let $_th = this;
      $.ajax({
        url: `https://suggest.taobao.com/sug?code=utf-8&q=${$_th.$seach.val()}&_ksTS=1555472315209_469&callback=taobao`,
        dataType: 'jsonp',
        jsonpCallback: "taobao",
        success: function(data) {
            let str = ``;
            $.each(data.result, function(index, value) {
                str += `<li>${value[0]}</li>`;
            })
            $_th.$ul.html(str);
          }
        })

    }
  }
  new Seach().init()

})(jQuery);