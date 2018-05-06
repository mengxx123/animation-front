<template>
    <my-page title="CSS3 动画">
        <div class="h5-container">
            <div class="workplace">
                <div id="target" class="operate-elem" :style="elemStyle"></div>
            </div>
        </div>
        <!-- 右侧工具 -->
        <div class="edit-tool">
            <div class="tab-content">
                <div id="tab11" class="tab-pane fade active in">
                    <div class="form-horizontal form-op">
                        <div class="form-item">
                            <label class="control-label">过渡时间（s）</label>
                            <ui-text-field class="demo-input" v-model.number="options.duration" type="number" hintText="0.5" />
                            <!-- <input id="duration" class="form-control" placeholder="0.5" type="number"> -->
                        </div>
                        <div class="form-item">
                            <label class="control-label">过渡效果</label>
                            <ui-select-field class="demo-input" v-model="options.timingFunction">
                                <ui-menu-item value="ease" title="ease"/>
                                <ui-menu-item value="linear" title="linear"/>
                                <ui-menu-item value="linear" title="linear"/>
                                <ui-menu-item value="ease-in" title="ease-in"/>
                                <ui-menu-item value="ease-out" title="ease-out"/>
                                <ui-menu-item value="ease-in-out" title="ease-in-out"/>
                            </ui-select-field>
                        </div>
                        <div class="form-item">
                            <label class="control-label">旋转</label>
                            <ui-slider class="demo-slider" v-model="options.rotate" :step="1" :min="-360" :max="360"/>
                        </div>
                        <div class="form-item">
                            <label class="control-label">X轴位移</label>
                            <ui-slider class="demo-slider" v-model="options.translateX" :step="1" :min="-500" :max="500"/>
                        </div>
                        <div class="form-item">
                            <label class="control-label">Y轴位移</label>
                            <ui-slider class="demo-slider" v-model="options.translateY" :step="1" :min="-500" :max="500"/>
                        </div>
                        <div class="form-item">
                            <label class="control-label">X轴缩放</label>
                            <ui-slider class="demo-slider" v-model="options.scaleX" :step="0.1" :min="-5" :max="5"/>
                        </div>
                        <div class="form-item">
                            <label class="control-label">Y轴缩放</label>
                            <ui-slider class="demo-slider" v-model="options.scaleY" :step="0.1" :min="-5" :max="5"/>
                        </div>
                        <div class="form-item">
                            <label class="control-label">X轴倾斜</label>
                            <ui-slider class="demo-slider" v-model="options.skewX" :step="1" :min="-180" :max="180"/>
                        </div>
                        <div class="form-item">
                            <label class="control-label">Y轴倾斜</label>
                            <ui-slider class="demo-slider" v-model="options.skewY" :step="1" :min="-180" :max="180"/>
                        </div>
                        <div class="form-item">
                            <ui-raised-button class="btn" label="播放动画" primary @click="play" />
                            <ui-raised-button class="btn" label="生成代码" @click="viewCode" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- 查看代码 -->
        <div id="code-box" class="code-box">
    <pre id="code">.css {
    asd: 1
}</pre>
        </div>
        <ui-drawer class="code-drawer" right :open="codeVisible" @close="toggle()">
            <ui-appbar title="生成代码">
                <ui-icon-button icon="close" @click="toggle" slot="left" />
            </ui-appbar>
            <div class="body">
                <pre>{{ code }}</pre>
            </div>
        </ui-drawer>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                options: {
                    rotate: 0,
                    translateX: 0,
                    translateY: 0,
                    scaleX: 0,
                    scaleY: 0,
                    skewX: 0,
                    skewY: 0,
                    duration: 0.5,
                    timingFunction: 'ease'
                },
                code: '',
                codeVisible: false
            }
        },
        computed: {
            elemStyle() {
                return {
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            toggle() {
                this.codeVisible = !this.codeVisible
            },
            init() {
                let _this = this

                var $target = $('#target');

                function changeStype() {
                    var transform = '';
                    transform += 'rotate(' + _this.options.rotate + 'deg) ';
                    transform += 'translateX(' + _this.options.translateX + 'px) ';
                    transform += 'translateY(' + _this.options.translateY + 'px) ';
                    if (_this.options.scaleX != 0) {
                        transform += 'scaleX(' + _this.options.scaleX + ') ';
                    }
                    if (_this.options.scaleY != 0) {
                        transform += 'scaleY(' + _this.options.scaleY + ') ';
                    }
                    transform += 'skewX(' + _this.options.skewX + 'deg) ';
                    transform += 'skewY(' + _this.options.skewY + 'deg) ';

                    $target.css('transform', transform);
                }
                this.changeStype = changeStype
            },
            changeStype() {
                let _this = this

                var $target = $('#target');
                var transform = '';
                transform += 'rotate(' + _this.options.rotate + 'deg) ';
                transform += 'translateX(' + _this.options.translateX + 'px) ';
                transform += 'translateY(' + _this.options.translateY + 'px) ';
                if (_this.options.scaleX != 0) {
                    transform += 'scaleX(' + _this.options.scaleX + ') ';
                }
                if (_this.options.scaleY != 0) {
                    transform += 'scaleY(' + _this.options.scaleY + ') ';
                }
                transform += 'skewX(' + _this.options.skewX + 'deg) ';
                transform += 'skewY(' + _this.options.skewY + 'deg) ';

                $target.css('transform', transform);
            },
            play() {
                let _this = this
                var $target = $('#target');
                $target.css('transform', 'none');
                setTimeout(function () {
                    $target.css('transition', 'all ' + _this.options.duration + 's ' + _this.options.timingFunction);
                    _this.changeStype()
                    // 动画播放完成后重置transition属性
                    setTimeout(function () {
                        $target.css('transition', 'all 0s');
                    }, _this.options.duration * 1000)
                }, 1000);
            },
            viewCode() {
                let _this = this

                this.codeVisible = true

                var code = '.animation {\n    transform: "';

                var transform = '';
                if (_this.options.rotate != 0) {
                    transform += 'rotate(' + _this.options.rotate + 'deg) ';
                }
                if (_this.options.translateX != 0) {
                    transform += 'translateX(' + _this.options.translateX + 'px) ';
                }
                if (_this.options.translateY != 0) {
                    transform += 'translateY(' + _this.options.translateY + 'px) ';
                }
                if (_this.options.scaleX != 0) {
                    transform += 'scaleX(' + _this.options.scaleX + ') ';
                }
                if (_this.options.scaleY != 0) {
                    transform += 'scaleY(' + _this.options.scaleY + ') ';
                }
                if (_this.options.scaleY != 0) {
                    transform += 'skewX(' + _this.options.skewX + 'deg) ';
                }
                if (_this.options.scaleY != 0) {
                    transform += 'skewY(' + _this.options.skewY + 'deg) ';
                }
                code += transform
                code += '"\n    transition: "all ' + _this.options.duration + 's ' + _this.options.timingFunction;
                code +=  '"\n}';
                _this.code = code
            }
        },
        watch: {
            options: {
                deep: true,
                handler() {
                    this.changeStype()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.form-item {
    margin-bottom: 8px;
}
.demo-slider {
    max-width: 200px;
}
.demo-input {
    max-width: 200px;
}
.code-drawer {
    width: 100%;
    max-width: 400px;
    .body {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        overflow: auto;
    }
}
.btn {
    margin-right: 8px;
}
</style>
