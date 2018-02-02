/**
 * H5页面在线制作工具
 *
 * Created by cjh1 on 2016/7/20.
 */
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, '');
    }
}


$(document).ready(function () {
    'use strict';

    var $curElem;
    var $elemMenu = $('#elem-menu');
    var $previewMenu = $('#preview-menu');

    function selectElem($this) {

        disableActiveElem();

        $curElem = $this;
        $this.addClass('active');
        $('#resize-tool').appendTo($this);
        $('#resize-tool').show();

        $this.draggable({
            cursor: "move",
            scroll: false,
            opacity: 0.5,
            //containment: '.device-body',
            distance: 5,
            zIndex: 10000,
            drag: function (event, ui) {
                //alert(1);
            }
        });
        $this.resizable({
            handles: 'n, e, s, w, ne, se, sw, nw'
        });
        $this.draggable('enable');
        $this.resizable('enable');

        if ($this.hasClass('elem-text')) {
            var $content = $this.find('.elem-content');
            dealTextElem($this);
        } else if ($this.hasClass('elem-img')) {
            var $content = $this.find('.elem-content');
            dealImageElem($this);
        }

        $('.tab-content').show();
        /*$('#tab11').show();
         $('#tab12').show();
         $('#tab13').show();
         $('#tab14').show();*/
    }

    // 编辑区域
    $(document).on('click', '.elem', function (e) {
        e.stopPropagation();

        if (displaying) {
            return false;
        }

        var $this = $(this);
        selectElem($this);
    });

    // 元素右键菜单
    $(document).on('contextmenu', '.elem', function (e) {
        e.preventDefault();

        if (e.clientY < 400) {
            $elemMenu.css({
                'left': e.clientX,
                'top': e.clientY
            });
        } else {
            $elemMenu.css({
                'left': e.clientX,
                'top': e.clientY - $elemMenu.height()
            });
        }

        $elemMenu.show();

        selectElem($(this));
    });
    $(document).on('click', function (e) {
        $elemMenu.hide();
    });


    // 保存
    $('#save').on('click', function () {
        saveModify();

        eui.msg('功能暂未实现');
        //$('#test-item .viewport').html($('#demo').html());
    });

    // 发布
    $('#publish').on('click', function () {
        eui.msg('功能暂未实现');
    });


    var $target = $('#target');
    var targetStyle = {
        rotate: 0,
        scaleX: 0,
        scaleY: 0,
        translateX: 0,
        translateY: 0,
        skewX: 0,
        skewY: 0,
        duration: 0.5,
        timingFunction: 'ease'
    };

    function changeStype() {
        var transform = '';
        transform += 'rotate(' + targetStyle.rotate + 'deg) ';
        transform += 'translateX(' + targetStyle.translateX + 'px) ';
        transform += 'translateY(' + targetStyle.translateY + 'px) ';
        if (targetStyle.scaleX != 0) {
            transform += 'scaleX(' + targetStyle.scaleX + ') ';
        }
        if (targetStyle.scaleY != 0) {
            transform += 'scaleY(' + targetStyle.scaleY + ') ';
        }
        transform += 'skewX(' + targetStyle.skewX + 'deg) ';
        transform += 'skewY(' + targetStyle.skewY + 'deg) ';

        $target.css('transform', transform);
    }

    // 过渡时间
    $('#duration').on('change', function () {
        targetStyle.duration = $(this).val();
    });

    // 过渡效果
    $('#timing-function').on('change', function () {
        targetStyle.timingFunction = $(this).val();
    });
    
    // 旋转
    $('#rotate').range({
        value: 0,
        min: -360,
        max: 360,
        step: 1
    }).on('slide', function (e) {
        targetStyle.rotate = e.value;
        changeStype();
    });

    // X轴位移
    $('#translateX').range({
        value: 0,
        min: -500,
        max: 500,
        step: 1
    }).on('slide', function (e) {
        targetStyle.translateX = e.value;
        changeStype();
    });

    // Y轴位移
    $('#translateY').range({
        value: 0,
        min: -500,
        max: 500,
        step: 1
    }).on('slide', function (e) {
        targetStyle.translateY = e.value;
        changeStype();
    });

    // X轴缩放
    $('#scaleX').range({
        value: 0,
        min: -5,
        max: 5,
        step: 0.1
    }).on('slide', function (e) {
        targetStyle.scaleX = e.value;
        changeStype();
    });

    // Y轴缩放
    $('#scaleY').range({
        value: 0,
        min: -5,
        max: 5,
        step: 0.1
    }).on('slide', function (e) {
        targetStyle.scaleY = e.value;
        changeStype();
    });

    // X轴倾斜
    $('#skewX').range({
        value: 0,
        min: -180,
        max: 180,
        step: 1
    }).on('slide', function (e) {
        curKey.style.left = e.value;
        targetStyle.skewX = e.value;
        changeStype();
    });

    // y轴倾斜
    $('#skewY').range({
        value: 0,
        min: -180,
        max: 180,
        step: 1
    }).on('slide', function (e) {
        targetStyle.skewY = e.value;
        changeStype();
    });

    // 播放动画
    $('#play').on('click', function () {
        /*$target.css('transform', 'none');
        setTimeout(function () {
            $target.css('transition', 'all ' + targetStyle.duration + 's ' + targetStyle.timingFunction);
            changeStype();
            // 动画播放完成后重置transition属性
            setTimeout(function () {
                $target.css('transition', 'all 0s');
            }, targetStyle.duration * 1000)
        }, 1000);*/
        //$target.css(getStyle(percent));

        // setInterval(function () {
        //
        // }, 13);

        // for (var i = 0; i < 10; i += 0.01) {
        //     $('#time').range('setValue', 50);
        // }
    });

    function getFrame(frame) {
        var style = frame.style;

        var styleCode = '';
        styleCode += '        left: ' + style.left + 'px;\n';
        return styleCode;
        //code += transform
        //code += '"\n    transition: "all ' + targetStyle.duration + 's ' + targetStyle.timingFunction;
    }
    // 查看代码
    function viewCode() {
        var code = '@keyframes demo-anim {\n';

        var frames = '';
        for (var i = 0; i < keyframes.length; i++) {
            var frame = ''
            frame += '    ' + keyframes[i].value + '% {\n';
            frame += getFrame(keyframes[i]);
            frame += '    }\n';
            frames += frame;
            console.log('Lim', frame);
        }

        code += frames;
        code +=  '}';
        $('#code').text(code);
        $('#code-box').dialog({
            title: '代码',
            shadeClose: true
        });
    }



    // 查看代码
    $('#view-code').on('click', viewCode);


    var keyframes = [];
    var key1 = {
        value: 0,
        style: {
            left: 0
        }
    };
    keyframes.push(key1);
    var key2 = {
        value: 50,
        style: {
            left: 300
        }
    };
    keyframes.push(key2);
    var key3 = {
        value: 100,
        style: {
            left: 0
        }
    };
    keyframes.push(key3);

    var curKey = key1;

    var $positionList = $('#position-list');

    var mdown = true;
    var $curPosition;
    $positionList.on('mousedown', '.positon-item', function () {
        mdown = true;
        $curPosition = $(this);
        var index = $curPosition.data('index');
        curKey = keyframes[index];
    });
    document.on('mousemove', function (e) {
        if (mdown) {
            curKey.value = 
            $curPosition.css('left', 800 * (keyframes[i].value / 100) + 'px';
        }
    });
    document.on('mouseup', function () {
        mdown = false;
    });

    function drawPosition() {
        for (var i = 0; i < keyframes.length; i++) {
            var $li = $('<li class="positon-item" title="' + keyframes[i].value + '%" data-index="' + i + '"></li>');
            $positionList.append($li);
            $li[0].style.left = 800 * (keyframes[i].value / 100) + 'px';
            //$('#time').range('setValue', 50);
        }
    }

    drawPosition();

    function getStyle(percent) {
        console.log('百分', percent)
        for (var i = 1; i < keyframes.length; i++) {
            if (percent > keyframes[i - 1].value && percent <= keyframes[i].value) {
                var key = keyframes[i];
                var prevKey = keyframes[i - 1];
                var left;
                console.log('V', prevKey.value, key.value); // 0 50 100
                var p1 = prevKey.style.left;
                var p2 = (key.style.left - prevKey.style.left) * ((percent - prevKey.value) / (key.value - prevKey.value));
                console.log('P', p1, p2);
                left = p1 + p2;
                /*if (key.value > prevKey.value) {

                } else {
                    left = prevKey.style.left - (key.style.left - prevKey.style.left) * ((percent - prevKey.value) / (key.value - prevKey.value));
                }*/
                console.log(left, prevKey.style.left);

                return {
                    left: left
                }
            }
        }
    }
    // 时间轴
    $('#time').range({
        value: 0,
        min: 0,
        max: 10,
        step: 0.01,
        formater: function(value) {
            return (value / 10 * 100).toFixed(1) + '%';
        }
    }).on('slide', function (e) {
        var percent = e.value / 10 * 100;
        $target.css(getStyle(percent));
    });

    setTimeout(function () {
        $target.removeClass('animated demo-anim');
        //$target.css(getStyle(0));
        $target.css('left', 0);
    }, 2000)

    //viewCode();
});