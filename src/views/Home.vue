<template>
    <my-page title="CSS3 动画">
        <div class="h5-container">
            <div class="workplace">
                <div id="target" class="operate-elem"></div>
            </div>
        </div>
        <!-- 右侧工具 -->
        <div class="edit-tool">
            <ul id="tool-tab" class="nav nav-tabs">
                <div class="nav-item active"><a class="nav-link" href="#tab11" data-toggle="tab">基本</a></div>
                <!--<div class="nav-item"><a id="tab-style" class="nav-link" href="#tab12" data-toggle="tab">样式</a></div>
                <div class="nav-item"><a class="nav-link" href="#tab13" data-toggle="tab">排列</a></div>
                <div class="nav-item"><a id="tab-anim" class="nav-link" href="#tab14" data-toggle="tab">动画</a></div>-->
            </ul>
            <div class="tab-content">
                <div id="tab11" class="tab-pane fade active in">
                    <div class="form-horizontal form-op">
                        <div class="form-group">
                            <label class="control-label">过渡时间（s）</label>
                            <input id="duration" class="form-control" placeholder="0.5" type="number">
                        </div>
                        <div class="form-group">
                            <label class="control-label">过渡效果</label>
                            <select id="timing-function" class="form-control">
                                <option>ease</option>
                                <option>linear</option>
                                <option>ease-in</option>
                                <option>ease-out</option>
                                <option>ease-in-out</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">旋转</label>
                            <div id="rotate"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">X轴位移</label>
                            <div id="translateX"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Y轴位移</label>
                            <div id="translateY"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">X轴缩放</label>
                            <div id="scaleX"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Y轴缩放</label>
                            <div id="scaleY"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">X轴倾斜</label>
                            <div id="skewX"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Y轴倾斜</label>
                            <div id="skewY"></div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"></label>
                            <button id="play" class="btn btn-primary">播放动画</button>
                            <button id="view-code" class="btn btn-primary">查看代码</button>
                        </div>

                    </div>
                </div>

                <div id="tab12" class="tab-pane fade">
                    <div class="">
                        <div id="editor-style-box">
                            <div class="form-group">
                                <label class="control-label">边框样式</label>
                                <select id="editor-border-style" class="form-control">
                                    <option value="none">无边框</option>
                                    <option value="solid">直线</option>
                                    <option value="dashed">虚线</option>
                                    <option value="dotted">点</option>
                                    <option value="double">双线</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="control-label">边框大小</label>
                                <input id="editor-border-width" class="form-control" type="number">
                            </div>
                            <div class="form-group">
                                <label class="control-label">边框颜色</label>
                                <input id="editor-border-color" class="form-control">
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="control-label">阴影</label>
                                <select class="form-control">
                                    <option value="none">无边框</option>
                                    <option value="solid">直线</option>
                                    <option value="dashed">虚线</option>
                                    <option value="dotted">点</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="control-label">不透明度</label>
                                <input id="editor-opacity" class="form-control" type="number" max="100" min="0" step="1">
                            </div>
                            <div class="form-group">
                                <label class="control-label">圆角</label>
                                <input id="editor-border-radius" class="form-control" min="0" type="number">
                            </div>
                        </div>

                    </div>
                </div>
                <div id="tab13" class="tab-pane fade">
                    <div class="">
                    </div>
                </div>
                <div id="tab14" class="tab-pane fade">
                    <div class="">
                        <div id="editor-anim-box2">
                            <div class="form-group">
                                <label class="control-label">动画方式</label>
                                <select id="editor-anim-name" class="form-control">
                                    <optgroup label="默认">
                                        <option value="">无</option>
                                    </optgroup>
                                    <optgroup label="强调">
                                        <option value="bounce">弹跳</option>
                                        <option value="flash">闪烁</option>
                                        <option value="pulse">脉动</option>
                                        <option value="rubberBand">橡皮圈</option>
                                        <option value="shake">摇动</option>
                                        <option value="swing">摆动</option>
                                        <option value="tada">波动</option>
                                        <option value="wobble">晃动</option>
                                    </optgroup>
                                    <optgroup label="进入">
                                        <option value="fadeIn">淡入</option>
                                        <option value="zoomInDown">底部进入</option>
                                    </optgroup>
                                    <optgroup label="退出">
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div id="editor-anim-box">
                                <hr>
                                <div class="form-group">
                                    <label class="control-label">开始时间（毫秒）</label>
                                    <input id="editor-anim-delay" class="form-control" type="number">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">动画时间（毫秒）</label>
                                    <input id="editor-anim-duration" class="form-control" type="number">
                                </div>
                                <hr>
                                <div class="form-group">
                                    <label class="control-label">执行次数</label>
                                    <select id="editor-anim-count" class="form-control">
                                        <optgroup label="次数">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </optgroup>
                                        <optgroup label="循环">
                                            <option value="linear">无限循环</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <!--<button id="editor-add-anim" class="btn btn-primary">添加动画</button>-->
                                    <button id="editor-play-anim" class="btn btn-success">播放动画</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <!-- 预览 -->
        <div id="display" class="display">
            <div class="display-mask"></div>
            <div class="display-device">
                <ul class="display-list">
                    <li class="display-item item1">1</li>
                    <li class="display-item item2">2</li>
                    <li class="display-item item3">3</li>
                    <li class="display-item item4">4</li>
                </ul>
            </div>
            <div class="display-tool">
                <div class="display-control">
                    <i id="display-prev" class="fa fa-angle-up"></i>
                    <i id="display-next" class="fa fa-angle-down"></i>
                </div>
                <p>可以通过左右方向键控制播放</p>
            </div>
            <div id="display-close" class="display-close">×</div>
        </div>
        <div id="resize-tool" class="select-elem">
            <!--
            <div class="scale scale-n"></div>
            <div class="scale scale-ne"></div>
            <div class="scale scale-e"></div>
            <div class="scale scale-se"></div>
            <div class="scale scale-s"></div>
            <div class="scale scale-sw"></div>
            <div class="scale scale-w"></div>
            <div class="scale scale-nw"></div>
            -->
        </div>
        <!-- 替换图片对话框 -->
        <div id="image-select-dialog" class="modal fade">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 class="modal-title">选择图片</h4>
                    </div>
                    <div class="modal-body">
                        <div id="">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="image-selector" class="image-selector">
            <ul id="select-img-list" class="select-img-list">
                <li class="select-img-item">
                    <img src="asset/img/demo/visit-bg.jpg">
                </li>
                <li class="select-img-item">
                    <img src="asset/img/avatar.jpg">
                </li>
                <li class="select-img-item">
                    <img src="asset/img/demo/visit1.png">
                </li>
                <li class="select-img-item">
                    <img src="asset/img/demo/visit2.png">
                </li>
            </ul>
        </div>

        <!-- 查看代码 -->
        <div id="code-box" class="code-box">
    <pre id="code">.css {
    asd: 1
}</pre>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
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
                    $target.css('transform', 'none');
                    setTimeout(function () {
                        $target.css('transition', 'all ' + targetStyle.duration + 's ' + targetStyle.timingFunction);
                        changeStype();
                        // 动画播放完成后重置transition属性
                        setTimeout(function () {
                            $target.css('transition', 'all 0s');
                        }, targetStyle.duration * 1000)
                    }, 1000);

                });

                // 查看代码
                $('#view-code').on('click', function () {
                    var code = '.animation {\n    transform: "';

                    var transform = '';
                    if (targetStyle.rotate != 0) {
                        transform += 'rotate(' + targetStyle.rotate + 'deg) ';
                    }
                    if (targetStyle.translateX != 0) {
                        transform += 'translateX(' + targetStyle.translateX + 'px) ';
                    }
                    if (targetStyle.translateY != 0) {
                        transform += 'translateY(' + targetStyle.translateY + 'px) ';
                    }
                    if (targetStyle.scaleX != 0) {
                        transform += 'scaleX(' + targetStyle.scaleX + ') ';
                    }
                    if (targetStyle.scaleY != 0) {
                        transform += 'scaleY(' + targetStyle.scaleY + ') ';
                    }
                    if (targetStyle.scaleY != 0) {
                        transform += 'skewX(' + targetStyle.skewX + 'deg) ';
                    }
                    if (targetStyle.scaleY != 0) {
                        transform += 'skewY(' + targetStyle.skewY + 'deg) ';
                    }
                    code += transform
                    code += '"\n    transition: "all ' + targetStyle.duration + 's ' + targetStyle.timingFunction;
                    code +=  '"\n}';
                    $('#code').text(code);
                    $('#code-box').dialog({
                        title: '代码',
                        shadeClose: true
                    });
                });
            }
        }
    }
</script>

<style scoped>
</style>
