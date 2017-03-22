var lazyLoad = {
    IsShow: function($el) {
        return $(window).height() + $(window).scrollTop() > $el.offset().top
    },
    LoadImage: function() {
        var _self = this;
        var $imgs = $("img[lazyload]");
        $imgs.each(function() {
            var $this = $(this);
            if (_self.IsShow($this)) {
                var src = $this.attr("lazyload");
                $this.removeAttr("lazyload");
                $this.attr("src", src);
                $this.show()
            }
        })
    },
    Run: function() {
        var _self = this;
        _self.LoadImage();
        if (_self.bind) return;
        $(window).bind("touchmove touchend scroll", 
        function() {
            _self.LoadImage()
        });
        _self.bind = true
    }
};