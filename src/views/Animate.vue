<template>
    <my-page title="Animate.css">
        <div id="tool_wrapper">
            <div class="wrap wrap-header"><span id="animationSandbox" style="display: block;"><h2
                    class="site__title mega mp0">Animate.css</h2></span></div>
            <div class="clear20"></div>
            <div class="wrap wrap-content">
                <form style="text-align: center"><select class="input input--dropdown js--animations">
                    <optgroup label="Attention Seekers">
                        <option value="bounce">bounce</option>
                        <option value="flash">flash</option>
                        <option value="pulse">pulse</option>
                        <option value="rubberBand">rubberBand</option>
                        <option value="shake">shake</option>
                        <option value="swing">swing</option>
                        <option value="tada">tada</option>
                        <option value="wobble">wobble</option>
                        <option value="jello">jello</option>
                    </optgroup>
                    <optgroup label="Bouncing Entrances">
                        <option value="bounceIn">bounceIn</option>
                        <option value="bounceInDown">bounceInDown</option>
                        <option value="bounceInLeft">bounceInLeft</option>
                        <option value="bounceInRight">bounceInRight</option>
                        <option value="bounceInUp">bounceInUp</option>
                    </optgroup>
                    <optgroup label="Bouncing Exits">
                        <option value="bounceOut">bounceOut</option>
                        <option value="bounceOutDown">bounceOutDown</option>
                        <option value="bounceOutLeft">bounceOutLeft</option>
                        <option value="bounceOutRight">bounceOutRight</option>
                        <option value="bounceOutUp">bounceOutUp</option>
                    </optgroup>
                    <optgroup label="Fading Entrances">
                        <option value="fadeIn">fadeIn</option>
                        <option value="fadeInDown">fadeInDown</option>
                        <option value="fadeInDownBig">fadeInDownBig</option>
                        <option value="fadeInLeft">fadeInLeft</option>
                        <option value="fadeInLeftBig">fadeInLeftBig</option>
                        <option value="fadeInRight">fadeInRight</option>
                        <option value="fadeInRightBig">fadeInRightBig</option>
                        <option value="fadeInUp">fadeInUp</option>
                        <option value="fadeInUpBig">fadeInUpBig</option>
                    </optgroup>
                    <optgroup label="Fading Exits">
                        <option value="fadeOut">fadeOut</option>
                        <option value="fadeOutDown">fadeOutDown</option>
                        <option value="fadeOutDownBig">fadeOutDownBig</option>
                        <option value="fadeOutLeft">fadeOutLeft</option>
                        <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                        <option value="fadeOutRight">fadeOutRight</option>
                        <option value="fadeOutRightBig">fadeOutRightBig</option>
                        <option value="fadeOutUp">fadeOutUp</option>
                        <option value="fadeOutUpBig">fadeOutUpBig</option>
                    </optgroup>
                    <optgroup label="Flippers">
                        <option value="flip">flip</option>
                        <option value="flipInX">flipInX</option>
                        <option value="flipInY">flipInY</option>
                        <option value="flipOutX">flipOutX</option>
                        <option value="flipOutY">flipOutY</option>
                    </optgroup>
                    <optgroup label="Lightspeed">
                        <option value="lightSpeedIn">lightSpeedIn</option>
                        <option value="lightSpeedOut">lightSpeedOut</option>
                    </optgroup>
                    <optgroup label="Rotating Entrances">
                        <option value="rotateIn">rotateIn</option>
                        <option value="rotateInDownLeft">rotateInDownLeft</option>
                        <option value="rotateInDownRight">rotateInDownRight</option>
                        <option value="rotateInUpLeft">rotateInUpLeft</option>
                        <option value="rotateInUpRight">rotateInUpRight</option>
                    </optgroup>
                    <optgroup label="Rotating Exits">
                        <option value="rotateOut">rotateOut</option>
                        <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                        <option value="rotateOutDownRight">rotateOutDownRight</option>
                        <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                        <option value="rotateOutUpRight">rotateOutUpRight</option>
                    </optgroup>
                    <optgroup label="Sliding Entrances">
                        <option value="slideInUp">slideInUp</option>
                        <option value="slideInDown">slideInDown</option>
                        <option value="slideInLeft">slideInLeft</option>
                        <option value="slideInRight">slideInRight</option>
                    </optgroup>
                    <optgroup label="Sliding Exits">
                        <option value="slideOutUp">slideOutUp</option>
                        <option value="slideOutDown">slideOutDown</option>
                        <option value="slideOutLeft">slideOutLeft</option>
                        <option value="slideOutRight">slideOutRight</option>
                    </optgroup>
                    <optgroup label="Zoom Entrances">
                        <option value="zoomIn">zoomIn</option>
                        <option value="zoomInDown">zoomInDown</option>
                        <option value="zoomInLeft">zoomInLeft</option>
                        <option value="zoomInRight">zoomInRight</option>
                        <option value="zoomInUp">zoomInUp</option>
                    </optgroup>
                    <optgroup label="Zoom Exits">
                        <option value="zoomOut">zoomOut</option>
                        <option value="zoomOutDown">zoomOutDown</option>
                        <option value="zoomOutLeft">zoomOutLeft</option>
                        <option value="zoomOutRight">zoomOutRight</option>
                        <option value="zoomOutUp">zoomOutUp</option>
                    </optgroup>
                    <optgroup label="Specials">
                        <option value="hinge">hinge</option>
                        <option value="rollIn">rollIn</option>
                        <option value="rollOut">rollOut</option>
                    </optgroup>
                </select>
                    <button class="butt js--triggerAnimation"><span
                            class="glyphicon glyphicon-arrow-right"></span> 执行动画
                    </button>
                </form>
            </div>
            <div id="code">
                <div id="highlighter_794706" class="syntaxhighlighter  html">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                        <tr>
                            <td class="code">
                                <div class="container">
                                    <div class="line number1 index0 alt2"><code
                                            class="html plain">&lt;</code><code
                                            class="html keyword">h2</code> <code class="html color1">class</code><code
                                            class="html plain">=</code><code class="html string">"animated
                                        bounce"</code><code
                                            class="html plain">&gt;Animate.css&lt;/</code><code
                                            class="html keyword">h2</code><code
                                            class="html plain">&gt;</code></div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
            var lastClass = "bounce";
            function testAnim(x) {
                var temp = $("#code").html();
                $("#code").html(temp.replace(lastClass, x));
                lastClass = x;
                $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass();
                });
            }

            $(document).ready(function () {
                $('.js--triggerAnimation').click(function (e) {
                    e.preventDefault();
                    var anim = $('.js--animations')[0].value;
                    testAnim(anim);
                });

                $('.js--animations').change(function () {
                    var anim = this.value;
                    testAnim(anim);
                });
            });

        }
    }
</script>

<style scoped>
    .wrap h2 {
        font-size: 8rem;
        line-height: 1.4em;
        text-align: center;
    }

    .butt, .input {
        padding: 10px 20px;
        margin: 10px;
        height: 50px;
        font-size: 16px;
        background-color: transparent;
        border-radius: 4px;
    }

    .butt:focus, .input:focus {
        outline: none;
    }

    .butt {
        box-sizing: border-box;
        border: 2px solid #f35626;
        font-weight: 700;
        color: #f35626;
        cursor: pointer;
        transform: hue 60s infinite linear;
        -webkit-animation: hue 60s infinite linear;
    }

    .wrap-header {
        -webkit-animation: bounceInUp 1s;
        text-align: center;
    }

    .wrap-content {
        -webkit-animation: bounceInUp 1s;
        -webkit-animation-delay: .1s;
    }

    .site__title {
        color: white;
        background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 60s infinite linear;
        line-height: 4em;
    }

    .wrap-content form {
        -webkit-animation: bounceInUp 1s;
        -webkit-animation-delay: .1s;
    }
</style>
