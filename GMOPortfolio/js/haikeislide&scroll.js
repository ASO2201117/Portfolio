var $1132 = $.noConflict(true);
(function($){
$(function(){
const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");
setInterval(() => {
  $target.addClass(CLASSNAME);
});
});
})(jQuery);
(function($){
$(function(){
    $(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - 110;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
});
})($1132);