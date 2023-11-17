$(function(){
    const content = ".content-wrap--bg";
    const showClass = "show"; 

    $(window).on("load scroll resize", function(){
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
      const offset = $(content).offset().top;
      const setTiming = windowHeight * 0.01;

      if (scroll + windowHeight >= offset + setTiming){
        $(content).addClass(showClass);
      } else {
        $(content).removeClass(showClass);
      }
    });
});
