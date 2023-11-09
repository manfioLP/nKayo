(function() {

    const main = function($) {

        const self = $.nKayo = new function(){};

        $.extend(self, {
            kayoImgs : [
                'https://imgur.com/zeH0Qdh',
                'https://imgur.com/84Tti0r',
                'https://imgur.com/xz2UaM8',
                'https://imgur.com/jzFGpSl',
                'https://imgur.com/MlFpVB1',
                'https://imgur.com/LvXk4CH',
                'https://imgur.com/B2ORqmG',
                'https://imgur.com/9LcZWEc',
                'https://imgur.com/kfOI6HY',
                'https://imgur.com/CRbhYeN',
                'https://imgur.com/cI2SGWD',
                'https://imgur.com/L0VYrrX',
                'https://imgur.com/URxq1uW',
                'https://imgur.com/uAa9UkU',
                'https://imgur.com/JXcKjGI',
            ],
            handleImages : function (lstImgs, time)
            {
                $.each($('img'), function(i,item) {
                    //Skip if image is already replaced
                    if($.inArray($(item).attr('src'), lstImgs) == -1)
                    {
                        var h = $(item).height();
                        var w = $(item).width();

                        //If image loaded
                        if(h > 0 && w > 0)
                        {
                            //Replace
                            $(item).css('width', w + 'px').css('height', h + 'px');
                            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                        }
                        else
                        {
                            //Replace when loaded
                            $(item).load(function(){
                                //Prevent 'infinite' loop
                                if($.inArray($(item).attr('src'), lstImgs) == -1)
                                {
                                    var h = $(item).height();
                                    var w = $(item).width();
                                    $(item).css('width', w + 'px').css('height', h + 'px');
                                    $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                                }
                            });
                        }
                    }
                });

                //Keep replacing
                if(time > 0)
                    setTimeout(function(){self.handleImages(lstImgs, time);},time);
            }
        });

        //Run on jQuery ready
        $(function(){
            self.handleImages(self.kayoImgs, 3000);
        });
    };

    //Method to load jQuery
    function loadJS(src, callback) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
            var state = s.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                callback.done = true;
                callback();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(s);
    }

    //Add jQuery if not present, then run main
    if(typeof jQuery == 'undefined') {
        loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
            jQuery.noConflict();
            main(jQuery);
        });
    }else {
        main(jQuery);
    }
})();

