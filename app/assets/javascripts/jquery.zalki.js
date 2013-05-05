(function ($) {
    $.fn.ZalkiHoverImg = function (options) {
        return this.each(function () {
            var $this = $(this);
            var setting = $.extend({
                overlayOpacity: 0.5,
                overlaySpeedIn: 700,
                overlaySpeedOut: 400,
                popUpOneDownSpeed: 900,
                popUpOneUpSpeed: 400,
                popUpOneEasing: 'easeOutElastic',
                popUpDoubleEasing: 'easeOutBounce',
                popUpDoubleDownSpeed1: 700,
                popUpDoubleUpSpeed1: 400,
                popUpDoubleDownSpeed2: 800,
                popUpDoubleUpSpeed2: 500,
                overlayDriveOpacity: 0.7,
                overlayDriveShowSpeed: 200,
                overlayDriveHideSpeed: 300,
                textTitleShowSpeed: 1000,
                textTitleHideSpeed: 200,
                textBoxShowSpeed: 1000,
                textBoxHideSpeed: 200,
                textEasing: 'easeOutBounce'
            }, options);
            var popUp = $('a.popup');
            var popUp2 = $('a.popup2');
            var popUp3 = $('a.popup3');
            var boxHeight = $this.children('img').height();
            var boxWidth = $this.children('img').width();
            $this.css({
                width: boxWidth,
                height: boxHeight
            });
            var popUpHeight = $this.find(popUp).height();
            var popUpWidth = $this.find(popUp).width();
            var popUpHeight2 = $this.find(popUp2).height();
            var popUpWidth2 = $this.find(popUp2).width();
            var coPopUpTop = boxHeight / 2 - popUpHeight / 2;
            var coPopUpLeft = boxWidth / 2 - popUpWidth / 2 - popUpWidth2 / 2 - 40;
            var coPopUpTop2 = boxHeight / 2 - popUpHeight2 / 2;
            var coPopUpLeft2 = boxWidth / 2 - popUpWidth2 / 2 + popUpWidth / 2 + 40;
            var coPopUpTopOne = boxHeight / 2 - popUpHeight / 2;
            var coPopUpLeftOne = boxWidth / 2 - popUpWidth / 2;
            if ($this.attr('data-hipop') == 'two' || $this.attr('data-hipop') == 'one' || $this.attr('data-hipop') == 'two-horizontal') {
                var overlayPop = $("<div class='overlayPop'></div>");
                $this.prepend(overlayPop);
                $this.find(overlayPop).css({
                    width: boxWidth,
                    height: boxHeight
                })
            };
            if ($this.attr('data-hipop') == 'two') {
                $this.find(popUp).css({
                    top: -boxHeight,
                    left: coPopUpLeft,
                    lineHeight: popUpHeight,
                    display: 'block'
                });
                $this.find(popUp2).css({
                    top: -boxHeight,
                    left: coPopUpLeft2,
                    lineHeight: popUpHeight2,
                    display: 'block'
                });
                $this.find(popUp3).css({
                    top: -boxHeight,
                    left: coPopUpLeftOne,
                    display: 'block'
                });
                $this.on('mouseenter', function () {
                    $this.find(popUp).stop().animate({
                        top: coPopUpTop
                    }, setting.popUpDoubleDownSpeed1, setting.popUpDoubleEasing);
                    $this.find(popUp2).stop().animate({
                        top: coPopUpTop2
                    }, setting.popUpDoubleDownSpeed2, setting.popUpDoubleEasing);

                    $this.find(popUp3).stop().animate({
                        top: coPopUpTopOne
                    }, setting.popUpOneDownSpeed, setting.popUpOneEasing);

                    $this.find(overlayPop).stop().fadeTo(setting.overlaySpeedIn, setting.overlayOpacity)


                    $this.find(overlayPop).stop().fadeTo(setting.overlaySpeedIn, setting.overlayOpacity)
                }), $this.on('mouseleave', function () {
                    $this.find(popUp).stop().animate({
                        top: -boxHeight
                    }, setting.popUpDoubleUpSpeed1);
                    $this.find(popUp2).stop().animate({
                        top: -boxHeight
                    }, setting.popUpDoubleUpSpeed2);
                    $this.find(popUp3).stop().animate({
                        top: -boxHeight
                    }, setting.popUpOneUpSpeed);
                    $this.find(overlayPop).stop().fadeOut(setting.overlaySpeedOut)
                })
            } else if ($this.attr('data-hipop') == 'one') {
                $this.find(popUp).css({
                    top: -boxHeight,
                    left: coPopUpLeftOne,
                    display: 'block'
                });
                $this.on('mouseenter', function () {
                    $this.find(popUp).stop().animate({
                        top: coPopUpTopOne
                    }, setting.popUpOneDownSpeed, setting.popUpOneEasing);
                    $this.find(overlayPop).stop().fadeTo(setting.overlaySpeedIn, setting.overlayOpacity)
                }), $this.on('mouseleave', function () {
                    $this.find(popUp).stop().animate({
                        top: -boxHeight
                    }, setting.popUpOneUpSpeed);
                    $this.find(overlayPop).stop().fadeOut(setting.overlaySpeedOut)
                })
            };
            if ($this.attr('data-hipop') == 'two-horizontal') {
                $this.find(popUp).css({
                    top: coPopUpTop,
                    left: -boxWidth,
                    lineHeight: popUpHeight,
                    display: 'block'
                });
                $this.find(popUp2).css({
                    top: coPopUpTop2,
                    right: -boxWidth,
                    lineHeight: popUpHeight2,
                    display: 'block'
                });
                $this.on('mouseenter', function () {
                    $this.find(popUp).stop().animate({
                        left: coPopUpLeft
                    }, setting.popUpDoubleDownSpeed1, setting.popUpDoubleEasing);
                    $this.find(popUp2).stop().animate({
                        right: coPopUpLeft
                    }, setting.popUpDoubleDownSpeed2, setting.popUpDoubleEasing);
                    $this.find(overlayPop).stop().fadeTo(setting.overlaySpeedIn, setting.overlayOpacity)
                }), $this.on('mouseleave', function () {
                    $this.find(popUp).stop().animate({
                        left: -coPopUpLeft
                    }, setting.popUpDoubleUpSpeed1);
                    $this.find(popUp2).stop().animate({
                        right: -coPopUpLeft
                    }, setting.popUpDoubleUpSpeed2);
                    $this.find(overlayPop).stop().fadeOut(setting.overlaySpeedOut)
                })
            };
            var overlayDrive = $('.overlayDrive');
            var textBox = $('.textBox');
            var textTitle = $('.textTitle');
            if ($this.attr('data-hipop') == 'overlay') {
                $this.find(overlayDrive).css({
                    width: '0',
                    height: boxHeight,
                    left: '0',
                    top: '0'
                });
                $this.find(overlayDrive).stop().fadeTo(200, setting.overlayDriveOpacity);
                $this.find(textBox).css({
                    left: '0',
                    top: +boxHeight,
                    width: boxWidth - 20,
                    padding: 10
                });
                $this.find(textTitle).css({
                    left: '0',
                    top: -boxHeight
                });
                $this.on('mouseenter', function () {
                    $this.find(overlayDrive).stop().animate({
                        width: boxWidth
                    }, setting.overlayDriveShowSpeed).find(textBox).stop().animate({
                        top: '0'
                    }, setting.textBoxShowSpeed, setting.textEasing);
                    $this.find(textTitle).stop().animate({
                        top: '0'
                    }, setting.textTitleShowSpeed, setting.textEasing)
                }), $this.on('mouseleave', function () {
                    $this.find(overlayDrive).stop().animate({
                        width: '0'
                    }, setting.overlayDriveHideSpeed).find(textBox).stop().animate({
                        top: +boxHeight
                    }, setting.textBoxHideSpeed);
                    $this.find(textTitle).stop().animate({
                        top: -boxHeight
                    }, setting.textTitleHideSpeed)
                })
            };
            if ($this.attr('data-hipop') == 'overlay2') {
                $this.find(overlayDrive).css({
                    width: boxWidth,
                    height: '0',
                    left: '0',
                    top: '0'
                });
                $this.find(overlayDrive).stop().fadeTo(200, setting.overlayDriveOpacity);
                $this.find(textBox).css({
                    left: -boxWidth,
                    top: '0',
                    width: boxWidth - 20,
                    padding: 10
                });
                $this.find(textTitle).css({
                    left: boxWidth,
                    top: '0'
                });
                $this.on('mouseenter', function () {
                    $this.find(overlayDrive).stop().animate({
                        height: boxHeight
                    }, setting.overlayDriveShowSpeed).find(textBox).stop().animate({
                        left: '0'
                    }, setting.textBoxShowSpeed, setting.textEasing);
                    $this.find(textTitle).stop().animate({
                        left: '0'
                    }, setting.textTitleShowSpeed, setting.textEasing)
                }), $this.on('mouseleave', function () {
                    $this.find(overlayDrive).stop().animate({
                        height: '0'
                    }, setting.overlayDriveHideSpeed).find(textBox).stop().animate({
                        left: -boxWidth
                    }, setting.textBoxHideSpeed);
                    $this.find(textTitle).stop().animate({
                        left: boxWidth
                    }, setting.textTitleHideSpeed)
                })
            }
        })
    }
})(jQuery);