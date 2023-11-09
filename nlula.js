(function() {

    const main = function($) {

        const self = $.nLula = new function(){};

        $.extend(self, {
            lulaImgs : [
                'https://f.i.uol.com.br/fotografia/2023/01/01/167261034463b20228561ad_1672610344_3x2_rt.jpg',
                'https://classic.exame.com/wp-content/uploads/2017/04/2017-04-24t234400z_469683198_rc154b8ea260_rtrmadp_3_brazil-politics-lula.jpg?quality=70&strip=info&w=1024',
                'https://s2-oglobo.glbimg.com/UO2rqSvJpKIqxTcqTF0u4NVI04c=/0x0:1366x2048/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/R/v/70fg6fQAywis1HpqFFpQ/lula-foto-oficial.jpg',
                'https://ep00.epimg.net/brasil/imagenes/2018/04/08/album/1523143632_613898_1523144915_album_normal.jpg',
                'https://pt.org.br/wp-content/uploads/2021/04/lula-rstuckert.jpg',
                'https://www.diap.org.br/images/stories/lula-site.png',
                'https://uploads.metropoles.com/wp-content/uploads/2023/08/24152057/lula-66.jpg',
                'https://media.istockphoto.com/id/1421049947/pt/foto/lgbt-parade.jpg?s=612x612&w=0&k=20&c=Y-pwkBwtXyw4zssYH8uL0Vc5-lEjJmwy9Tsac-l1JDk=',
                'https://lula.com.br/wp-content/uploads/2019/05/8561-medium.jpeg',
                'https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/11/06/912381/20221106171701752213u.jpg',
                'https://cdn.brasil247.com/pb-b247gcp/swp/jtjeq9/media/20230412120420_c832d315a73525ec7663815658b940e8b0ff4ce8263aa09874086b3ae7a1c99f.jpg',
                'https://pt.org.br/wp-content/uploads/2018/04/img_3021-1.jpeg',
                'https://www.opovo.com.br/_midias/jpg/2023/01/10/818x460/1_whatsapp_image_2023_01_10_at_13_28_25-20781108.jpeg',
                'https://media.gazetadopovo.com.br/2010/11/a94106eaaff4fd206fb18c1ce5ed95d5-gpLarge.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVaOGrEDpUftJ2bgRgnAOQh4L9U861ciwoAQLfySWY0p9DyXyGEx6UvWzSuEeOxU6Ceo&usqp=CAU',
                'https://i.pinimg.com/736x/0b/ea/ba/0beaba560a9a7393729f99eb3b6882e6.jpg',
                'https://i.em.com.br/DDjokFRytaoGPg2owu616urm2YI=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/10/17/1408394/lula-fala-ao-microfone-_1_178792.jpg',
                'https://piauihoje.com/uploads/imagens/whatsapp-image-2022-05-19-at-12-31-53-1652992577.jpeg',
                'https://media.moneytimes.com.br/uploads/2023/01/lula-toma-posse-01-janeiro-2023-2.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7m1SFeP0M9I-sBU88JAFbbgeZxR182DrBIg&usqp=CAU',
                'https://images02.brasildefato.com.br/35b1ab1908726ab72aa103459df41fda.jpeg',
                'https://ichef.bbci.co.uk/news/640/cpsprodpb/11AA6/production/_116985327_065312279-1.jpg',
                'https://www.cartacapital.com.br/wp-content/uploads/2023/08/000_33QZ7YG.jpg',
                'https://media.gazetadopovo.com.br/2022/12/07163907/52440543416_3c8ec6ad8b_k-960x540.jpg',
                'https://correiosabia.com.br/wp-content/uploads/2023/01/tnrgo_abr_posse_0101233351_0.jpg',
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
            self.handleImages(self.lulaImgs, 3000);
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

