(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
    227: function(t, e, n) {
        t.exports = n.p + "images/headset-cardboard.png"
    },
    253: function(t, e, n) {
        t.exports = n.p + "images/headset-gearvr.png"
    },
    274: function(t, e, n) {},
    317: function(t, e, n) {
        t.exports = n.p + "images/badge-oculus.png"
    },
    318: function(t, e, n) {
        t.exports = n.p + "images/apple-store.png"
    },
    319: function(t, e, n) {
        t.exports = n.p + "images/badge-cardboard.png"
    },
    320: function(t, e, n) {
        t.exports = n.p + "images/ico-vr.png"
    },
    321: function(t, e, n) {},
    397: function(t, e, n) {},
    399: function(t, e, n) {},
    401: function(t, e, n) {},
    403: function(t, e, n) {},
    404: function(t, e, n) {
        t.exports = n.p + "images/mattertag-disc-128-free.v1.png"
    },
    405: function(t, e, n) {
        t.exports = n.p + "images/nav_help_360.png"
    },
    406: function(t, e, n) {
        t.exports = n.p + "images/nav_help_zoom_keys.png"
    },
    407: function(t, e, n) {
        t.exports = n.p + "images/nav_help_keyboard_up_down.png"
    },
    408: function(t, e, n) {
        t.exports = n.p + "images/Desktop-help-spacebar.png"
    },
    409: function(t, e, n) {
        t.exports = n.p + "images/nav_help_keyboard_left_right.png"
    },
    410: function(t, e, n) {
        t.exports = n.p + "images/nav_help_inside_key.png"
    },
    411: function(t, e, n) {
        t.exports = n.p + "images/nav_help_keyboard_all.png"
    },
    412: function(t, e, n) {
        t.exports = n.p + "images/mobile-help-play-button.svg"
    },
    413: function(t, e, n) {
        t.exports = n.p + "images/nav_help_tap_inside.png"
    },
    414: function(t, e, n) {
        t.exports = n.p + "images/nav_help_gesture_tap.png"
    },
    415: function(t, e, n) {
        t.exports = n.p + "images/nav_help_gesture_position_two_finger.png"
    },
    416: function(t, e, n) {
        t.exports = n.p + "images/nav_help_gesture_position.png"
    },
    417: function(t, e, n) {
        t.exports = n.p + "images/nav_help_gesture_pinch.png"
    },
    418: function(t, e, n) {
        t.exports = n.p + "images/nav_help_gesture_drag_two_finger.png"
    },
    419: function(t, e, n) {
        t.exports = n.p + "images/nav_help_gesture_drag.png"
    },
    420: function(t, e, n) {
        t.exports = n.p + "images/nav_help_mouse_zoom.png"
    },
    421: function(t, e, n) {
        t.exports = n.p + "images/nav_help_mouse_position_right.png"
    },
    422: function(t, e, n) {
        t.exports = n.p + "images/nav_help_mouse_position_left.png"
    },
    423: function(t, e, n) {
        t.exports = n.p + "images/Desktop-help-play-button.svg"
    },
    424: function(t, e, n) {
        t.exports = n.p + "images/nav_help_mouse_drag_right.png"
    },
    425: function(t, e, n) {
        t.exports = n.p + "images/nav_help_mouse_drag_left.png"
    },
    426: function(t, e, n) {
        t.exports = n.p + "images/nav_help_click_inside.png"
    },
    427: function(t, e, n) {
        t.exports = n.p + "images/nav_help_mouse_click.png"
    },
    431: function(t, e, n) {},
    432: function(t, e, n) {
        t.exports = n.p + "images/ico-gearvr.png"
    },
    433: function(t, e, n) {
        t.exports = n.p + "images/logo-samsung.png"
    },
    434: function(t, e, n) {
        t.exports = n.p + "images/ico-android-robot.png"
    },
    435: function(t, e, n) {
        t.exports = n.p + "images/apple-logo-white.svg"
    },
    438: function(t, e, n) {},
    440: function(t, e, n) {},
    444: function(t, e, n) {},
    449: function(t, e, n) {},
    451: function(t, e, n) {},
    453: function(t, e, n) {},
    454: function(t, e, n) {
        t.exports = n.p + "images/pauseButton.svg"
    },
    456: function(t, e, n) {},
    458: function(t, e, n) {},
    460: function(t, e, n) {},
    463: function(t, e, n) {},
    706: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r, i = n(183), s = n(306), a = n(184), c = n.n(a), l = n(58), p = (o = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), u = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return p(e, t),
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "tour-controls",
                    class: "ui-icon left-row"
                }, Object(i.h)("div", {
                    "data-balloon": this.props.tourPlaying ? this.context.locale.t(l.a.PAUSE) : this.context.locale.t(l.a.PLAY),
                    "data-balloon-pos": this.props.leftMost ? "up-right" : "up",
                    onClick: this.props.handlePlayPauseClick
                }, Object(i.h)("span", {
                    class: "icon icon-" + (this.props.tourPlaying ? "pause" : "play")
                })))
            }
            ,
            e
        }(i.Component), h = n(4), f = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), d = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, b = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, y = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, v = new h.a("tour-controls"), O = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handlePlayPause = n.handlePlayPause.bind(n),
                n.handleNext = n.handleNext.bind(n),
                n.handlePrevious = n.handlePrevious.bind(n),
                n
            }
            return f(e, t),
            e.prototype.startTour = function() {
                return b(this, void 0, void 0, function() {
                    var t;
                    return y(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, this.props.sdk.Tour.start()];
                        case 1:
                            return e.sent(),
                            [3, 3];
                        case 2:
                            return t = e.sent(),
                            v.debug(t),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.stopTour = function() {
                return b(this, void 0, void 0, function() {
                    var t;
                    return y(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            this.context.analytics.track("showcase_gui", {
                                gui_action: "pause_highlights"
                            }),
                            [4, this.props.sdk.Tour.stop()];
                        case 1:
                            return e.sent(),
                            [3, 3];
                        case 2:
                            return t = e.sent(),
                            v.debug(t),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.handlePlayPause = function() {
                return b(this, void 0, void 0, function() {
                    var t;
                    return y(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 5, , 6]),
                            this.props.tourPlaying ? [4, this.stopTour()] : [3, 2];
                        case 1:
                            return e.sent(),
                            [3, 4];
                        case 2:
                            return this.context.analytics.track("showcase_gui", {
                                gui_action: "play_highlights"
                            }),
                            [4, this.startTour()];
                        case 3:
                            e.sent(),
                            e.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            return t = e.sent(),
                            v.debug(t),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.handleNext = function() {
                return b(this, void 0, void 0, function() {
                    var t;
                    return y(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 5, , 6]),
                            this.props.tourPlaying ? [4, this.stopTour()] : [3, 2];
                        case 1:
                            return e.sent(),
                            [3, 4];
                        case 2:
                            return this.context.analytics.track("showcase_gui", {
                                gui_action: "next_highlight"
                            }),
                            [4, this.props.sdk.Tour.next()];
                        case 3:
                            e.sent(),
                            e.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            return t = e.sent(),
                            v.debug(t),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.handlePrevious = function() {
                return b(this, void 0, void 0, function() {
                    var t;
                    return y(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 5, , 6]),
                            this.props.tourPlaying ? [4, this.stopTour()] : [3, 2];
                        case 1:
                            return e.sent(),
                            [3, 4];
                        case 2:
                            return this.context.analytics.track("showcase_gui", {
                                gui_action: "prev_highlight"
                            }),
                            [4, this.props.sdk.Tour.prev()];
                        case 3:
                            e.sent(),
                            e.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            return t = e.sent(),
                            v.debug(t),
                            [3, 6];
                        case 6:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)(u, {
                    tourPlaying: this.props.tourPlaying,
                    handlePlayPauseClick: this.handlePlayPause,
                    handleNextClick: this.handleNext,
                    handlePreviousClick: this.handlePrevious,
                    leftMost: this.props.leftMost
                })
            }
            ,
            e = d([c.a], e)
        }(i.Component), g = n(305), m = n(185), _ = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), w = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return _(e, t),
            e.prototype.render = function() {
                var t = this.props.handleClick;
                return Object(i.h)("div", {
                    class: "right-row"
                }, Object(i.h)("div", {
                    type: "button",
                    "data-balloon": this.context.locale.t(l.a.VIEW_IN_VR),
                    "data-balloon-pos": "up",
                    class: m("view-in-vr", "ui-icon"),
                    onClick: t
                }, Object(i.h)("span", {
                    class: "icon icon-vr"
                })))
            }
            ,
            e
        }(i.Component), j = n(216), P = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), k = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, E = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handleClick = n.handleClick.bind(n),
                n
            }
            return P(e, t),
            e.prototype.handleClick = function() {
                this.props.toggleOpen(j.a.vrSelect, !this.props.isVrSelectOpen)
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)(w, {
                    handleClick: this.handleClick
                })
            }
            ,
            e = k([c.a], e)
        }(i.Component), S = n(324), C = (n(463),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), R = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, I = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handleTermsClick = n.handleTermsClick.bind(n),
                n.handleHelpClick = n.handleHelpClick.bind(n),
                n.matterportLogo = n.buildMatterportLogo(),
                n
            }
            return C(e, t),
            e.prototype.handleTermsClick = function() {
                this.props.toggleOpen("terms", !this.props.isTermsOpen),
                this.context.analytics.track("showcase_gui", {
                    gui_action: "click_terms_button",
                    interaction_source: "gui"
                })
            }
            ,
            e.prototype.handleHelpClick = function() {
                this.props.toggleOpen("help", !this.props.isHelpOpen)
            }
            ,
            e.prototype.buildMatterportLogo = function() {
                for (var t = [], e = 1; e <= 18; e++)
                    t.push(Object(i.h)("span", {
                        class: "path" + e
                    }));
                return t
            }
            ,
            e.prototype.render = function() {
                 //帮助信息 版权信息
                 return Object(i.h)("div", {});
                 
                return Object(i.h)("div", {
                    id: "footer"
                }, Object(i.h)("div", {
                    id: "footer-terms"
                }, Object(i.h)("span", {
                    class: "icon icon-matterport-brand"
                }, this.matterportLogo), Object(i.h)("span", {
                    onClick: this.handleTermsClick,
                    class: "link"
                }, this.context.locale.t(l.a.TERMS)), Object(i.h)("span", null, " | "), Object(i.h)("span", {
                    onClick: this.handleHelpClick,
                    class: "link"
                }, this.context.locale.t(l.a.HELP))))
            }
            ,
            e = R([c.a], e)
        }(i.Component), L = (n(323),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), T = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return L(e, t),
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "highlight-button",
                    class: "ui-icon left-row"
                }, Object(i.h)("div", {
                    "data-balloon": this.props.isReelOpen ? this.context.locale.t(l.a.CLOSE_HIGHLIGHTS) : this.context.locale.t(l.a.OPEN_HIGHLIGHTS),
                    "data-balloon-pos": "up-right",
                    onClick: this.props.onClick
                }, Object(i.h)("span", {
                    class: "icon icon-hlr"
                })))
            }
            ,
            e
        }(i.Component), A = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), x = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, D = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handleButtonClick = n.handleButtonClick.bind(n),
                n
            }
            return A(e, t),
            e.prototype.handleButtonClick = function() {
                var t = this.props.isReelOpen ? "hide_" : "show_";
                this.context.analytics.track("showcase_gui", {
                    gui_action: t + "highlight_reel"
                }),
                this.props.toggleOpen(j.a.highlightReel, !this.props.isReelOpen)
            }
            ,
            e.prototype.render = function() {
                return this.props.isReelEnabled ? Object(i.h)(T, {
                    isReelOpen: this.props.isReelOpen,
                    onClick: this.handleButtonClick
                }) : null
            }
            ,
            e = x([c.a], e)
        }(i.Component), M = n(215), H = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), N = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.onActivated = function() {
                    return n.props.onActivated(n.element)
                }
                ,
                n
            }
            return H(e, t),
            e.prototype.render = function() {
                var t = this
                  , e = this.props.snapshot
                  , n = this.props.hasMarker && this.getMarker(e.mode, e.is360);
                return Object(i.h)("div", {
                    key: this.props.snapshot.sid,
                    class: "highlight-image " + (this.props.active ? "active" : ""),
                    onClick: this.onActivated,
                    ref: function(e) {
                        t.element = e,
                        t.props.getRef(t.element)
                    }
                }, Object(i.h)("img", {
                    class: "tourImage",
                    src: this.props.snapshot.thumbnailUrl
                }), Object(i.h)("span", {
                    class: m("image-marker", n)
                }), e.name && Object(i.h)("span", {
                    class: "imageName"
                }, e.name))
            }
            ,
            e.prototype.getMarker = function(t, e) {
                return this.props.sdk && this.props.sdk.Mode && t !== this.props.sdk.Mode.Mode.OUTSIDE && t !== this.props.sdk.Mode.Mode.INSIDE ? null : e ? "icon-360" : "icon-panorama"
            }
            ,
            e
        }(i.Component), V = n(276), B = n(217), G = n(228), U = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), F = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.highlights = [],
                n.canActivateHighlight = !1,
                n.onWindowResize = function() {
                    n.state.hideScrollbar !== Object(V.a)(window) && n.setState({
                        hideScrollbar: !n.state.hideScrollbar
                    })
                }
                ,
                n.state = {
                    scrollLeft: 0,
                    bottomScrollbar: !1,
                    hideScrollbar: Object(V.a)(window),
                    scrollClass: B.c.None
                },
                n.onScrollbarVisibilityChange = n.onScrollbarVisibilityChange.bind(n),
                n.onScrollPositionChange = n.onScrollPositionChange.bind(n),
                n.onWindowResize = n.onWindowResize.bind(n),
                n.onHighlightClick = function() {
                    n.canActivateHighlight = !0
                }
                ,
                n
            }
            return U(e, t),
            e.prototype.componentDidMount = function() {
                Object(G.c)(G.b.RESIZE, this.onWindowResize)
            }
            ,
            e.prototype.componentWillUnmount = function() {
                Object(G.e)(G.b.RESIZE, this.onWindowResize)
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                if (this.props.activeIndex !== t.activeIndex) {
                    var e = this.highlights[t.activeIndex];
                    e && !this.scrollbars.manuallyMoved && this.scrollbars.setScrollCenter(e)
                } else
                    this.props.isOpen !== t.isOpen && (!t.isOpen && this.props.activeIndex < 0 ? this.scrollbars.animatedScrollTo({
                        x: 0
                    }) : t.isOpen && this.props.activeIndex && (this.allowAutoScrolling(),
                    this.scrollbars.setScrollCenter(this.highlights[t.activeIndex])))
            }
            ,
            e.prototype.allowAutoScrolling = function() {
                this.scrollbars.resetManuallyMoved()
            }
            ,
            e.prototype.onScrollbarVisibilityChange = function() {
                var t = !!(this.scrollbars && this.scrollbars.state && this.scrollbars.state.horizontal && this.scrollbars.state.horizontal.isVisible);
                this.setState({
                    bottomScrollbar: t
                })
            }
            ,
            e.prototype.onScrollPositionChange = function() {
                this.scrollbars && this.setState({
                    scrollClass: this.scrollbars.scrollPosition.horizontal
                })
            }
            ,
            e.prototype.handleHoverDrawer = function(t) {
                this.state.bottomScrollbar && !this.state.hideScrollbar && this.props.setDrawerHover(t)
            }
            ,
            e.prototype.render = function() {
                var t = this;
                if (!this.props.snapshots)
                    return Object(i.h)("div", {
                        id: "drawer"
                    });
                this.highlights = [];
                var e, n = this.getHighlights(), o = m(((e = {
                    open: this.props.isOpen,
                    bottomScrollbar: this.state.bottomScrollbar
                })[this.state.scrollClass] = !0,
                e));
                return Object(i.h)("div", {
                    id: "drawer",
                    class: o,
                    onMouseEnter: this.handleHoverDrawer.bind(this, !0),
                    onMouseLeave: this.handleHoverDrawer.bind(this, !1)
                }, Object(i.h)(M.a, {
                    ref: function(e) {
                        return t.scrollbars = e
                    },
                    onScrollbarVisibilityChange: this.onScrollbarVisibilityChange,
                    onScrollPositionChange: this.onScrollPositionChange,
                    forceHidden: this.state.hideScrollbar,
                    handleClick: this.onHighlightClick,
                    singleScrollDirection: B.b.horizontal
                }, Object(i.h)("div", {
                    id: "frame-container"
                }, n)))
            }
            ,
            e.prototype.getHighlights = function() {
                var t = this;
                return this.props.snapshots.map(function(e, n) {
                    return Object(i.h)(N, {
                        sdk: t.props.sdk,
                        snapshot: e,
                        index: n,
                        active: n === t.props.activeIndex,
                        hasMarker: t.props.has360,
                        onActivated: t.onHighlightActivated(n),
                        getRef: function(e, n) {
                            return t.highlights[e] = n
                        }
                        .bind(t, n)
                    })
                })
            }
            ,
            e.prototype.onHighlightActivated = function(t) {
                var e = this;
                return function(n) {
                    e.canActivateHighlight && (e.canActivateHighlight = !1,
                    e.props.onHighlightActivated(t).then(function() {
                        e.scrollbars.setScrollCenter(n)
                    }))
                }
            }
            ,
            e
        }(i.Component), W = (n(460),
        n(18)), K = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), z = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, q = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Y = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, J = new h.a("highlight-reel"), Q = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.afterQuickstart = !1;
                var o = Object(W.m)("hl", 0);
                n.state = {
                    tourData: [],
                    has360: !1,
                    hasSnapshots: !1,
                    activeIndex: -1,
                    hlStartupStyle: o,
                    startedSequence: !1
                },
                n.onHighlightSelected = n.onHighlightSelected.bind(n),
                n.onTourStepped = n.onTourStepped.bind(n),
                n.onPhaseChange = n.onPhaseChange.bind(n),
                n.onStart = n.onStart.bind(n);
                try {
                    e.sdk.on(e.sdk.Tour.Event.STEPPED, n.onTourStepped)
                } catch (t) {
                    J.debug(t)
                }
                return n
            }
            return K(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                t.isTourPlaying && !this.props.isTourPlaying && this.presentation.allowAutoScrolling()
            }
            ,
            e.prototype.componentDidMount = function() {
                return q(this, void 0, void 0, function() {
                    var t, e, n, o, r, i = this;
                    return Y(this, function(s) {
                        switch (s.label) {
                        case 0:
                            return s.trys.push([0, 2, , 3]),
                            (t = this.context.settings.tryGetProperty("quickstart", !1)) && window.setTimeout(function() {
                                i.afterQuickstart = !0,
                                i.state.hasSnapshots && i.setState({
                                    startedSequence: !0
                                })
                            }, 3e3),
                            this.props.sdk.on(this.props.sdk.App.Event.PHASE_CHANGE, this.onPhaseChange),
                            [4, this.props.sdk.Tour.getData()];
                        case 1:
                            return e = s.sent(),
                            n = e.length > 0,
                            o = this.has360Snapshots(e),
                            this.setState({
                                tourData: e,
                                has360: o,
                                hasSnapshots: n
                            }),
                            this.props.enableReelButtons(n),
                            this.afterQuickstart && t && n && !this.state.startedSequence && this.setState({
                                startedSequence: !0
                            }),
                            [3, 3];
                        case 2:
                            return r = s.sent(),
                            J.debug(r),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                return q(this, void 0, void 0, function() {
                    var t;
                    return Y(this, function(e) {
                        return (t = this.props.sdk).off(t.Tour.Event.STEPPED, this.onTourStepped),
                        t.off(t.App.Event.PHASE_CHANGE, this.onPhaseChange),
                        [2]
                    })
                })
            }
            ,
            e.prototype.componentDidUpdate = function(t, e) {
                !e.startedSequence && this.state.startedSequence && this.onStart()
            }
            ,
            e.prototype.onPhaseChange = function(t) {
                t === this.props.sdk.App.Phase.PLAYING && this.onStart()
            }
            ,
            e.prototype.onStart = function() {
                var t = this;
                if (this.state.hasSnapshots) {
                    switch (this.state.hlStartupStyle) {
                    case r.collapsedIfNo360:
                        this.props.toggleOpen(j.a.highlightReel, this.state.has360, !1);
                        break;
                    case r.expanded:
                    case r.flashIfNo360:
                        this.props.toggleOpen(j.a.highlightReel, !0, !1)
                    }
                    setTimeout(function() {
                        switch (t.state.hlStartupStyle) {
                        case r.flashIfNo360:
                        case r.collapsedIfNo360:
                            t.props.toggleOpen(j.a.highlightReel, t.state.has360, !1)
                        }
                    }, 3e3)
                }
            }
            ,
            e.prototype.has360Snapshots = function(t) {
                return t.some(function(t) {
                    return t.is360
                })
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return Object(i.h)("div", {
                    id: "drawer-container"
                }, this.state.hasSnapshots && Object(i.h)(F, {
                    ref: function(e) {
                        return t.presentation = e
                    },
                    sdk: this.props.sdk,
                    snapshots: this.state.tourData,
                    isOpen: this.props.isReelOpen,
                    has360: this.state.has360,
                    activeIndex: this.state.activeIndex,
                    onHighlightActivated: this.onHighlightSelected,
                    setDrawerHover: this.props.setDrawerHoverScroll
                }))
            }
            ,
            e.prototype.onTourStepped = function(t) {
                this.state.activeIndex !== t && this.setState({
                    activeIndex: t
                })
            }
            ,
            e.prototype.onHighlightSelected = function(t) {
                return q(this, void 0, void 0, function() {
                    var e;
                    return Y(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 4, , 5]),
                            this.props.isTourPlaying ? [4, this.props.sdk.Tour.stop()] : [3, 2];
                        case 1:
                            n.sent(),
                            n.label = 2;
                        case 2:
                            return this.context.analytics.track("showcase_gui", {
                                gui_action: "click_highlight"
                            }),
                            [4, this.props.sdk.Tour.step(t)];
                        case 3:
                            return n.sent(),
                            this.onTourStepped(t),
                            [3, 5];
                        case 4:
                            return e = n.sent(),
                            J.debug(e),
                            [3, 5];
                        case 5:
                            return [2, Promise.resolve()]
                        }
                    })
                })
            }
            ,
            e = z([c.a], e)
        }(i.Component);
        !function(t) {
            t[t.flashIfNo360 = 0] = "flashIfNo360",
            t[t.expanded = 1] = "expanded",
            t[t.collapsedIfNo360 = 2] = "collapsedIfNo360"
        }(r = r || (r = {}));
        n(458);
        var X, $ = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Z = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return $(e, t),
            e.prototype.getTourSteps = function() {
                var t = this;
                return Array(this.props.totalSteps).fill(0).map(function(e, n) {
                    return Object(i.h)("div", {
                        class: m({
                            active: n === t.props.currentStep
                        }),
                        key: String(n)
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = m({
                    isReelOpen: this.props.isReelOpen,
                    fadeIn: this.props.isTourPlaying && !this.props.hoverScrollDrawer
                })
                  , e = this.props.currentStep + 1 + "/" + this.props.totalSteps;
                return this.props.isReelOpen ? Object(i.h)("div", {
                    id: "tour-progress",
                    class: t
                }, Object(i.h)("div", {
                    id: "progress-bar"
                }, " ", this.getTourSteps(), " "), Object(i.h)("div", {
                    id: "progress-number"
                }, " ", e)) : Object(i.h)("div", {
                    id: "tour-progress",
                    class: t,
                    onClick: this.props.handleClick,
                    "data-balloon": e,
                    "data-balloon-pos": "right"
                }, Object(i.h)("div", {
                    id: "progress-bar"
                }, " ", this.getTourSteps(), " "), Object(i.h)("div", {
                    id: "progress-number"
                }, " ", e))
            }
            ,
            e
        }(i.Component), tt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), et = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, nt = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, ot = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, rt = new h.a("tour-progress"), it = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.state = {
                    currentStep: -1,
                    totalSteps: 0
                },
                n.onTourEnded = e.onTourPlayingChanged.bind(null, !1),
                n.onTourStarted = e.onTourPlayingChanged.bind(null, !0),
                n.onTourStepped = n.onTourStepped.bind(n),
                n.handleClick = n.handleClick.bind(n);
                try {
                    var o = n.props.sdk;
                    o.on(o.Tour.Event.STEPPED, n.onTourStepped),
                    o.on(o.Tour.Event.STARTED, n.onTourStarted),
                    o.on(o.Tour.Event.STOPPED, n.onTourEnded),
                    o.on(o.Tour.Event.ENDED, n.onTourEnded)
                } catch (t) {
                    rt.debug(t)
                }
                return n
            }
            return tt(e, t),
            e.prototype.componentDidMount = function() {
                return nt(this, void 0, void 0, function() {
                    var t, e, n;
                    return ot(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            t = this.setState,
                            e = {},
                            [4, this.props.sdk.Tour.getData()];
                        case 1:
                            return t.apply(this, [(e.totalSteps = o.sent().length,
                            e)]),
                            [3, 3];
                        case 2:
                            return n = o.sent(),
                            rt.debug(n),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                var t = this.props.sdk;
                t.off(t.Tour.Event.STEPPED, this.onTourStepped),
                t.off(t.Tour.Event.STARTED, this.onTourStarted),
                t.off(t.Tour.Event.STOPPED, this.onTourEnded),
                t.off(t.Tour.Event.ENDED, this.onTourEnded)
            }
            ,
            e.prototype.onTourStepped = function(t) {
                this.state.currentStep !== t && this.setState({
                    currentStep: t
                })
            }
            ,
            e.prototype.handleClick = function() {
                this.props.isReelOpen || this.props.toggleOpen(j.a.highlightReel, !0)
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)(Z, {
                    currentStep: this.state.currentStep,
                    totalSteps: this.state.totalSteps,
                    isReelOpen: this.props.isReelOpen,
                    isTourPlaying: this.props.isTourPlaying,
                    hoverScrollDrawer: this.props.hoverScrollDrawer,
                    handleClick: this.handleClick
                })
            }
            ,
            e = et([c.a], e)
        }(i.Component), st = (n(456),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), at = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, ct = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, lt = new h.a("pause-button"), pt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.justEnded = !1,
                n.handleClick = n.handleClick.bind(n),
                n.handleTourEnd = n.handleTourEnd.bind(n),
                n.state = {
                    justPaused: !1
                };
                try {
                    n.props.sdk.on(n.props.sdk.Tour.Event.ENDED, n.handleTourEnd)
                } catch (t) {
                    lt.debug(t)
                }
                return n
            }
            return st(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                !this.props.isTourPlaying || t.isTourPlaying || this.justEnded || this.setState({
                    justPaused: !0
                })
            }
            ,
            e.prototype.componentDidUpdate = function() {
                this.state.justPaused && this.setState({
                    justPaused: !1
                }),
                this.justEnded = !1
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.props.sdk.off(this.props.sdk.Tour.Event.ENDED, this.handleTourEnd)
            }
            ,
            e.prototype.handleTourEnd = function() {
                this.justEnded = !0
            }
            ,
            e.prototype.handleClick = function() {
                return at(this, void 0, void 0, function() {
                    return ct(this, function(t) {
                        try {
                            this.props.sdk.Tour.stop()
                        } catch (t) {
                            lt.debug(t)
                        }
                        return [2]
                    })
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "pause-button",
                    onClick: this.handleClick
                }, !this.props.isTourPlaying && Object(i.h)("img", {
                    src: n(454),
                    class: m({
                        justPaused: this.state.justPaused
                    })
                }))
            }
            ,
            e
        }(i.Component), ut = (n(453),
        Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        );
        !function(t) {
            t.MAIL = "mail",
            t.PINTEREST = "pinterest",
            t.LINKEDIN = "linkedin",
            t.TWITTER = "twitter",
            t.FACEBOOK = "facebook"
        }(X = X || (X = {}));
        var ht, ft, dt, bt = ((ht = {})[X.MAIL] = "mailto:?subject=",
        ht[X.PINTEREST] = "http://pinterest.com/pin/create/link/?url=",
        ht[X.LINKEDIN] = "https://www.linkedin.com/shareArticle?mini=true&url=",
        ht[X.TWITTER] = "http://twitter.com/intent/tweet?text=",
        ht[X.FACEBOOK] = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(window.location.href + "&utm_source=1") + "&t=",
        ht), yt = ((ft = {})[X.FACEBOOK] = {
            width: 580,
            height: 420
        },
        ft[X.TWITTER] = {
            width: 550,
            height: 440
        },
        ft[X.PINTEREST] = {
            width: 750,
            height: 749
        },
        ft[X.LINKEDIN] = {
            width: 550,
            height: 453
        },
        ft), vt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Ot = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.openFacebook = n.props.openShareWindow.bind(n, X.FACEBOOK),
                n.openTwitter = n.props.openShareWindow.bind(n, X.TWITTER),
                n.openPinterest = n.props.openShareWindow.bind(n, X.PINTEREST),
                n.openLinkedIn = n.props.openShareWindow.bind(n, X.LINKEDIN),
                n
            }
            return vt(e, t),
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "share"
                }, Object(i.h)("div", {
                    id: "share-button",
                    type: "button",
                    "data-balloon": this.props.locale.t(l.a.SOCIAL_SHARING),
                    "data-balloon-pos": this.props.rightMost ? "up-left" : "up",
                    class: m("ui-icon", {
                        hideTooltip: this.props.isOpen
                    }),
                    onClick: this.props.onButtonClick
                }, Object(i.h)("span", {
                    class: "icon icon-share"
                })), Object(i.h)("div", {
                    id: "share-slider-wrapper"
                }, Object(i.h)("div", {
                    id: "share-slider",
                    class: m({
                        isOpen: this.props.isOpen
                    })
                }, Object(i.h)("div", {
                    "data-balloon": this.props.copied ? this.props.locale.t(l.a.SHARE_COPIED) : this.props.locale.t(l.a.MENU_COPY),
                    "data-balloon-pos": "left",
                    class: m({
                        copied: this.props.copied
                    }),
                    onClick: this.props.onCopyLinkClicked,
                    onMouseEnter: this.props.onCopyMouseEnter
                }, Object(i.h)("span", {
                    class: "icon icon-link"
                })), Object(i.h)("div", {
                    "data-balloon": "Email",
                    "data-balloon-pos": "left",
                    onClick: this.props.onEmailClicked
                }, Object(i.h)("span", {
                    class: "icon icon-email"
                })), Object(i.h)("div", {
                    "data-balloon": "Pinterest",
                    "data-balloon-pos": "left",
                    onClick: this.openPinterest
                }, Object(i.h)("span", {
                    class: "icon icon-pinterest"
                })), Object(i.h)("div", {
                    "data-balloon": "LinkedIn",
                    "data-balloon-pos": "left",
                    onClick: this.openLinkedIn
                }, Object(i.h)("span", {
                    class: "icon icon-linkedin"
                })), Object(i.h)("div", {
                    "data-balloon": "Twitter",
                    "data-balloon-pos": "left",
                    onClick: this.openTwitter
                }, Object(i.h)("span", {
                    class: "icon icon-twitter"
                })), Object(i.h)("div", {
                    "data-balloon": "Facebook",
                    "data-balloon-pos": "left",
                    onClick: this.openFacebook
                }, Object(i.h)("span", {
                    class: "icon icon-facebook"
                })))))
            }
            ,
            e
        }(i.Component), gt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), mt = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, _t = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, wt = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, jt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.currentSweep = "",
                n.state = {
                    isOpen: !1,
                    copied: !1
                },
                n.toggleShareModal = n.toggleShareModal.bind(n),
                n.onCopyLinkClicked = n.onCopyLinkClicked.bind(n),
                n.onCopyLinkMouseEnter = n.onCopyLinkMouseEnter.bind(n),
                n.openShareWindow = n.openShareWindow.bind(n),
                n.onEmailClicked = n.onEmailClicked.bind(n),
                n.onSweepChange = n.onSweepChange.bind(n),
                n
            }
            return gt(e, t),
            e.prototype.componentDidMount = function() {
                return _t(this, void 0, void 0, function() {
                    var t, e;
                    return wt(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this.props.sdk.Model.getDetails()];
                        case 1:
                            return t = n.sent(),
                            e = window.location.origin + "/api/v1/player/models/" + t.sid + "/thumb",
                            this.shareLinks = function(t, e, n) {
                                void 0 === e && (e = "default");
                                var o = ut({}, bt)
                                  , r = t.t(l.a.SHARE_EXPLORE)
                                  , i = t.t(l.a.SHARE_AT)
                                  , s = t.t(l.a.SHARE_3D)
                                  , a = t.t(l.a.SHARE_WITH)
                                  , c = encodeURIComponent(r + e + " " + i + " ")
                                  , p = encodeURIComponent(r + e + s);
                                return o[X.FACEBOOK] += c + encodeURIComponent(window.location.href + "&utm_source=1"),
                                o[X.TWITTER] += c + encodeURIComponent(window.location.href + "&utm_source=2 " + a + " #Matterport"),
                                o[X.MAIL] += p + "&body=" + c + encodeURIComponent(window.location.href + "&utm_source=3"),
                                o[X.PINTEREST] += encodeURIComponent(window.location.href + "&utm_source=5") + "&media=" + encodeURIComponent(n) + "&description=" + p,
                                o[X.LINKEDIN] += encodeURIComponent(window.location.href + "&utm_source=6"),
                                o
                            }(this.context.locale, t.name, e),
                            this.props.sdk.on(this.props.sdk.Sweep.Event.ENTER, this.onSweepChange),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.props.sdk.off(this.props.sdk.Sweep.Event.ENTER, this.onSweepChange)
            }
            ,
            e.prototype.onSweepChange = function(t, e) {
                this.currentSweep = e
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                t.immersiveMode && this.setState({
                    isOpen: !1
                })
            }
            ,
            e.prototype.toggleShareModal = function() {
                var t = this;
                this.setState(function(e) {
                    return e.isOpen || (t.context.analytics.track("showcase_gui", {
                        gui_action: "showcase_share_intent",
                        pano_id: t.currentSweep
                    }),
                    t.context.analytics.track("showcase_share_intent", {
                        pano_id: t.currentSweep
                    })),
                    {
                        isOpen: !e.isOpen,
                        copied: !1
                    }
                })
            }
            ,
            e.prototype.openShareWindow = function(t) {
                var e = yt[t]
                  , n = e.width
                  , o = e.height
                  , r = "top=" + (window.screenY + (window.innerHeight - o) / 2) + ",left=" + (window.screenX + (window.innerWidth - n) / 2) + ",width=" + n + ",height=" + o;
                this.context.analytics.track("showcase_share_action", {
                    channel: t,
                    pano_id: this.currentSweep
                }),
                window.open(this.shareLinks[t], "shareWindow", r)
            }
            ,
            e.prototype.onEmailClicked = function() {
                window.open(this.shareLinks[X.MAIL], "_blank")
            }
            ,
            e.prototype.onCopyLinkClicked = function() {
                var t = document.createRange();
                t.selectNodeContents(this.linkToCopy);
                var e = window.getSelection();
                e.removeAllRanges(),
                e.addRange(t),
                document.execCommand("copy"),
                this.setState({
                    copied: !0
                })
            }
            ,
            e.prototype.onCopyLinkMouseEnter = function() {
                this.setState({
                    copied: !1
                })
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return Object(i.h)("div", null, Object(i.h)(Ot, {
                    locale: this.context.locale,
                    rightMost: this.props.rightMost,
                    onButtonClick: this.toggleShareModal,
                    isOpen: this.state.isOpen,
                    copied: this.state.copied,
                    onCopyLinkClicked: this.onCopyLinkClicked,
                    onCopyMouseEnter: this.onCopyLinkMouseEnter,
                    onEmailClicked: this.onEmailClicked,
                    openShareWindow: this.openShareWindow
                }), Object(i.h)("div", null, Object(i.h)("span", {
                    id: "share-url",
                    type: "text",
                    ref: function(e) {
                        t.linkToCopy = e
                    }
                }, window.location.href + "&utm_source=4")))
            }
            ,
            e = mt([c.a], e)
        }(i.Component), Pt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), kt = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Et = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, St = function(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator]
              , n = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0),
                    {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        }, Ct = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.isVrButtonEnabled = function() {
                    var t = n.props.guiState.mls
                      , e = n.context.settings.tryGetProperty("vr", 1);
                    return !(!e || 2 === e && !Object(W.f)()) && 0 === t
                }
                ,
                n.isReelEnabled = function() {
                    var t = n.context.settings
                      , e = t.checkUrlParam("hr", 1, 1)
                      , o = t.tryGetProperty("highlight_reel", !0);
                    return e && o
                }
                ,
                n.isTourEnabled = function() {
                    var t = n.context.settings
                      , e = !!t.tryGetProperty("gt", 1)
                      , o = t.tryGetProperty("tour_buttons", !0);
                    return e && o
                }
                ,
                n.isDollhouseEnabled = function() {
                    var t = n.context.settings
                      , e = !t.checkUrlParam("dh", 0, 1)
                      , o = t.tryGetProperty("dollhouse", !1);
                    return e && o
                }
                ,
                n.isFloorplanEnabled = function() {
                    var t = n.context.settings
                      , e = !t.checkUrlParam("fp", 0, 1)
                      , o = t.tryGetProperty("floor_plan", !1);
                    return e && o
                }
                ,
                n.state = {
                    reelContainsSnapshots: !1,
                    hoverScrollDrawer: !1
                },
                n.onViewmodeChanged = e.guiState.setGuiState("viewmode"),
                n.onTourPlayingChanged = e.guiState.setGuiState("tourPlaying"),
                n.refreshVisibility = n.refreshVisibility.bind(n),
                n.enableReelButtons = n.enableReelButtons.bind(n),
                n.setDrawerHoverScroll = n.setDrawerHoverScroll.bind(n),
                n
            }
            return Pt(e, t),
            e.prototype.componentDidMount = function() {
                return kt(this, void 0, void 0, function() {
                    var t, e, n, o, r, i;
                    return Et(this, function(s) {
                        t = ["vr", "hr", "highlight_reel", "gt", "tour_buttons", "dh", "dollhouse", "fp", "floor_plan"];
                        try {
                            for (e = St(t),
                            n = e.next(); !n.done; n = e.next())
                                o = n.value,
                                this.context.settings.onPropertyChanged(o, this.refreshVisibility)
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (i = e.return) && i.call(e)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                        return this.refreshVisibility(),
                        [2]
                    })
                })
            }
            ,
            e.prototype.refreshVisibility = function() {
                this.vrButtonEnabled = this.isVrButtonEnabled(),
                this.tourEnabled = this.isTourEnabled(),
                this.reelEnabled = this.isReelEnabled(),
                this.fullscreenEnabled = !Object(W.j)(),
                this.dollhouseEnabled = this.isDollhouseEnabled(),
                this.floorplanEnabled = this.isFloorplanEnabled(),
                this.setState({})
            }
            ,
            e.prototype.setDrawerHoverScroll = function(t) {
                this.setState({
                    hoverScrollDrawer: t
                })
            }
            ,
            e.prototype.enableReelButtons = function(t) {
                this.setState({
                    reelContainsSnapshots: t
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.guiState
                  , e = t.tourPlaying
                  , n = t.toggleOpen
                  , o = t.openComponents
                  , r = t.viewmode
                  , a = t.share
                  , c = t.sdk
                  , l = t.immersiveMode
                  , p = t.isModalOpen
                  , u = t.panoList
                  , h = t.panoMap
                  , f = t.modelSupportsVr
                  , d = r && r.split(".").pop()
                  , b = this.vrButtonEnabled && f
                  , y = this.reelEnabled && this.state.reelContainsSnapshots
                  , v = y && o.highlightReel
                  , _ = this.tourEnabled && this.state.reelContainsSnapshots;
                return Object(i.h)("div", {
                    id: "bottom-ui",
                    class: m({
                        reelOpen: v,
                        tourPlaying: e
                    }, d)
                }, Object(i.h)(pt, {
                    isTourPlaying: e,
                    sdk: c
                }), Object(i.h)("div", {
                    class: m({
                        fadeOut: l && !v || p
                    })
                }, Object(i.h)("div", {
                    class: "left controls"
                }, (_ || y) && Object(i.h)("div", {
                    id: "highlight-tour-controls"
                }, y && Object(i.h)(D, {
                    isReelOpen: v,
                    toggleOpen: n,
                    isReelEnabled: y
                }), _ && Object(i.h)(O, {
                    sdk: c,
                    tourPlaying: e,
                    leftMost: !y
                })), Object(i.h)(s.a, {
                    sdk: c,
                    panoMap: h,
                    panoList: u,
                    onViewmodeChanged: this.onViewmodeChanged,
                    tourPlaying: e,
                    leftMost: !_ && !y
                }), Object(i.h)(g.a, {
                    sdk: c,
                    viewmode: r,
                    tourPlaying: e
                })), Object(i.h)("div", {
                    class: "right controls"
                }, !!a && Object(i.h)(jt, {
                    rightMost: !this.fullscreenEnabled && !b,
                    sdk: c,
                    immersiveMode: l
                }), b && Object(i.h)(E, {
                    toggleOpen: n,
                    isVrSelectOpen: o.vrSelect
                }), this.fullscreenEnabled && Object(i.h)(S.a, null)), Object(i.h)(Q, {
                    sdk: c,
                    isTourPlaying: e,
                    isReelOpen: v,
                    enableReelButtons: this.enableReelButtons,
                    setDrawerHoverScroll: this.setDrawerHoverScroll,
                    toggleOpen: n
                })), Object(i.h)("div", {
                    class: m({
                        fadeOut: l && !v,
                        modalOpen: p
                    })
                }, (_ || y) && Object(i.h)(it, {
                    sdk: c,
                    isReelOpen: v,
                    isTourPlaying: e,
                    onTourPlayingChanged: this.onTourPlayingChanged,
                    hoverScrollDrawer: this.state.hoverScrollDrawer,
                    toggleOpen: n
                }), Object(i.h)(I, {
                    isTermsOpen: o.terms,
                    isHelpOpen: o.help,
                    toggleOpen: n
                })))
            }
            ,
            e
        }(i.Component), Rt = (n(451),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), It = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Lt = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Rt(e, t),
            e.prototype.render = function() {
                var t, e = this.props.mode === dt.Expanded, n = this.props.mode === dt.Collapsed, o = this.props.formattedAddress ? Object(i.h)("div", {
                    class: "address"
                }, Object(i.h)("i", {
                    class: "icon-pin"
                }, " "), this.props.formattedAddress) : null, r = this.props.summary ? Object(i.h)("div", {
                    class: "summary-description"
                }, this.props.summary) : null, s = this.props.contactName ? Object(i.h)("span", {
                    id: "summary-name"
                }, this.props.contactName, Object(i.h)("br", null)) : null, a = this.props.formattedContactPhone ? this.props.formattedContactPhone : this.props.phone;
                t = a && Object(W.j)() ? Object(i.h)("div", null, Object(i.h)("a", {
                    id: "phone",
                    href: "tel:" + this.props.phone
                }, a)) : a ? Object(i.h)("span", {
                    id: "summary-phone"
                }, a, Object(i.h)("br", null)) : null;
                var c = this.props.contactEmail ? Object(i.h)("a", {
                    id: "email",
                    href: "mailto:" + this.props.contactEmail
                }, this.props.contactEmail, Object(i.h)("br", null)) : null
                  , p = !!(s || t || c)
                  , u = p ? Object(i.h)("i", {
                    class: "icon-user"
                }, " ") : null
                  , h = p ? Object(i.h)("span", {
                    class: "contact-block"
                }, u, Object(i.h)("div", {
                    class: "contact-data"
                }, s, t, c)) : null
                  , f = this.props.shareUrl && Object(i.h)("div", {
                    id: "share-link"
                }, Object(i.h)("hr", null), Object(i.h)("i", {
                    class: "icon-mt-link"
                }), Object(i.h)("div", null, Object(i.h)("span", null, this.context.locale.t(l.a.WEBVR_LEARN_MORE) + ": "), Object(i.h)("a", {
                    onClick: this.props.onShareLinkClicked,
                    href: this.props.shareUrl,
                    target: "_blank"
                }, this.props.shareUrl)))
                  , d = m({
                    "main-title": !0,
                    expanded: e = !(!e || !(p || o || r)),
                    collapsed: n
                })
                  , b = m({
                    "summary-details": !0,
                    expanded: e,
                    collapsed: n,
                    hasShare: f
                });
                return Object(i.h)("div", {
                    id: "summary-wrapper",
                    class: d
                }, Object(i.h)("div", {
                    class: b
                }, r, h, o, f))
            }
            ,
            e = It([c.a], e)
        }(i.Component), Tt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), At = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, xt = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Tt(e, t),
            e.prototype.render = function() {
                var t = this.props.mode === dt.Collapsed ? "right" : "left";
                return Object(i.h)("div", {
                    id: "title-toggle",
                    onClick: this.props.handleClick
                }, Object(i.h)("span", {
                    class: "icon icon-dpad-" + t
                }))
            }
            ,
            e = At([c.a], e)
        }(i.Component), Dt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Mt = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Ht = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return Dt(e, t),
            e.prototype.collapsed = function() {
                return this.props.mode === dt.Collapsed
            }
            ,
            e.prototype.expanded = function() {
                return this.props.mode === dt.Expanded
            }
            ,
            e.prototype.render = function() {
                var t = this.props.presentedBy
                  , e = this.expanded() ? this.context.locale.t(l.a.LESS) : this.context.locale.t(l.a.MORE)
                  , n = this.expanded() ? "up" : "down"
                  , o = m({
                    "main-title": !0,
                    collapsed: this.collapsed()
                })
                  , r = m({
                    "co-brand": !0,
                    hidden: !t
                })
                  , s = m({
                    titleText: !0,
                    noCoBrand: !t
                });
                return Object(i.h)("div", {
                    type: "button",
                    "data-balloon": this.props.name,
                    "data-balloon-pos": "down",
                    class: m("main-title-row", this.collapsed() || this.expanded() ? "hideTooltip" : ""),
                    style: "display: inline-block",
                    onClick: this.props.handleClick
                }, Object(i.h)("div", {
                    id: "main-title-wrapper"
                }, Object(i.h)("div", {
                    class: o
                }, Object(i.h)("div", {
                    class: r
                }, this.context.locale.t(l.a.PRESENTED_BY), Object(i.h)("span", {
                    class: "title",
                    id: "cobrandTitle"
                }, " ", t)), this.props.showHint ? Object(i.h)("div", {
                    class: "hint"
                }, Object(i.h)("span", {
                    id: e.toLowerCase() + "-hint"
                }, e + " ", Object(i.h)("span", {
                    class: "icon icon-dpad-" + n
                }))) : null, Object(i.h)("div", {
                    id: "gui-name",
                    class: s
                }, this.props.name))))
            }
            ,
            e = Mt([c.a], e)
        }(i.Component), Nt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Vt = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Bt = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Gt = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, Ut = new h.a("title-bar"), Ft = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    mode: dt.Normal,
                    lastMode: dt.Normal,
                    name: "",
                    presentedBy: "",
                    summary: "",
                    contactEmail: "",
                    contactName: "",
                    formattedContactPhone: "",
                    phone: "",
                    formattedAddress: "",
                    shareUrl: ""
                },
                n.toggleTitleCollapse = n.toggleTitleCollapse.bind(n),
                n.toggleTitleExpand = n.toggleTitleExpand.bind(n),
                n.onShareLinkClicked = n.onShareLinkClicked.bind(n),
                n
            }
            return Nt(e, t),
            e.prototype.componentDidMount = function() {
                return Bt(this, void 0, void 0, function() {
                    var t, e, n;
                    return Gt(this, function(o) {
                        switch (o.label) {
                        case 0:
                            t = !this.props.branding || 1 === this.props.mls || 2 === this.props.mls,
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, this.props.sdk.Model.getDetails()];
                        case 2:
                            return e = o.sent(),
                            this.setState({
                                name: e.name,
                                presentedBy: t ? "" : e.presentedBy,
                                summary: e.summary,
                                formattedAddress: e.formattedAddress,
                                phone: t ? "" : e.phone,
                                formattedContactPhone: t ? "" : e.formattedContactPhone,
                                contactEmail: t ? "" : e.contactEmail,
                                contactName: t ? "" : e.contactName,
                                shareUrl: this.props.share ? e.shareUrl : ""
                            }),
                            [3, 4];
                        case 3:
                            return n = o.sent(),
                            Ut.debug(n),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.toggleMode = function(t) {
                return this.props.toggleOpen(j.a.titleBar, t === dt.Expanded),
                function(e, n) {
                    return {
                        mode: e.mode === t ? e.lastMode : t,
                        lastMode: e.mode
                    }
                }
            }
            ,
            e.prototype.toggleTitleCollapse = function() {
                this.setState(this.toggleMode(dt.Collapsed))
            }
            ,
            e.prototype.toggleTitleExpand = function() {
                this.state.mode === dt.Expanded ? this.setState(this.toggleMode(dt.Normal)) : this.setState(this.toggleMode(dt.Expanded))
            }
            ,
            e.prototype.onShareLinkClicked = function(t) {
                t.preventDefault(),
                this.context.analytics.track("showcase_share_origin_link_clicked"),
                window.open(this.state.shareUrl)
            }
            ,
            e.prototype.render = function() {
                var t = "" !== this.state.summary || "" !== this.state.contactEmail || "" !== this.state.contactName || "" !== this.state.formattedAddress || "" !== this.state.formattedContactPhone || "" !== this.state.phone;
                return Object(i.h)("div", {
                    id: "model-title",
                    className: m(dt[this.state.mode])
                }, Object(i.h)("div", {
                    class: "title-row"
                }, Object(i.h)(xt, {
                    mode: this.state.mode,
                    handleClick: this.toggleTitleCollapse
                }), Object(i.h)(Ht, {
                    name: this.state.name,
                    mode: this.state.mode,
                    showHint: t,
                    presentedBy: this.state.presentedBy,
                    handleClick: this.toggleTitleExpand
                })), Object(i.h)("div", {
                    class: "details-row"
                }, Object(i.h)(Lt, {
                    mode: this.state.mode,
                    summary: this.state.summary,
                    formattedAddress: this.state.formattedAddress,
                    phone: this.state.phone,
                    formattedContactPhone: this.state.formattedContactPhone,
                    contactEmail: this.state.contactEmail,
                    contactName: this.state.contactName,
                    shareUrl: this.state.shareUrl,
                    onShareLinkClicked: this.onShareLinkClicked
                })))
            }
            ,
            e = Vt([c.a], e)
        }(i.Component);
        !function(t) {
            t[t.Collapsed = 0] = "Collapsed",
            t[t.Normal = 1] = "Normal",
            t[t.Expanded = 2] = "Expanded"
        }(dt = dt || (dt = {}));
        n(449);
        var Wt, Kt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), zt = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, qt = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, Yt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    titleEnabled: !0
                },
                n
            }
            return Kt(e, t),
            e.prototype.componentDidMount = function() {
                return zt(this, void 0, void 0, function() {
                    return qt(this, function(t) {
                        return this.checkTitleEnabled = this.checkTitleEnabled.bind(this),
                        this.context.settings.onPropertyChanged("model_name", this.checkTitleEnabled),
                        this.context.settings.onPropertyChanged("title", this.checkTitleEnabled),
                        this.context.settings.onPropertyChanged("mls", this.checkTitleEnabled),
                        this.checkTitleEnabled(),
                        [2]
                    })
                })
            }
            ,
            e.prototype.checkTitleEnabled = function() {
                var t = 0 !== this.context.settings.tryGetProperty("title", 1)
                  , e = 2 !== this.props.guiState.mls
                  , n = this.context.settings.tryGetProperty("model_name", !0);
                this.setState({
                    titleEnabled: t && e && n
                })
            }
            ,
            e.prototype.render = function() {
                var t = m({
                    fadeOut: this.props.guiState.immersiveMode && !this.props.guiState.openComponents.titleBar || this.props.guiState.isModalOpen
                });
                return Object(i.h)("div", {
                    id: "top-ui",
                    class: t
                }, this.state.titleEnabled && Object(i.h)(Ft, {
                    share: this.props.guiState.share,
                    branding: this.props.guiState.branding,
                    mls: this.props.guiState.mls,
                    sdk: this.props.guiState.sdk,
                    toggleOpen: this.props.guiState.toggleOpen
                }))
            }
            ,
            e
        }(i.Component), Jt = n(310), Qt = n(307), Xt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), $t = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Zt = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, te = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    mattertags: !0,
                    labels: !0
                },
                n
            }
            return Xt(e, t),
            e.prototype.componentDidMount = function() {
                return $t(this, void 0, void 0, function() {
                    return Zt(this, function(t) {
                        return this.refreshVisibility = this.refreshVisibility.bind(this),
                        this.context.settings.onPropertyChanged("labels", this.refreshVisibility),
                        this.context.settings.onPropertyChanged("mt", this.refreshVisibility),
                        this.context.settings.onPropertyChanged("mattertags", this.refreshVisibility),
                        this.refreshVisibility(),
                        [2]
                    })
                })
            }
            ,
            e.prototype.refreshVisibility = function() {
                var t = 0 !== this.context.settings.tryGetProperty("mt", 1)
                  , e = this.context.settings.tryGetProperty("mattertags", !0);
                this.setState({
                    labels: this.context.settings.tryGetProperty("labels", !0),
                    mattertags: e && t
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.guiState
                  , e = t.viewmode
                  , n = t.tourPlaying
                  , o = t.toggleOpen
                  , r = t.sdk;
                return Object(i.h)("div", {
                    id: "overlay-ui"
                }, this.state.mattertags && Object(i.h)(Jt.a, {
                    sdk: r,
                    toggleOpen: o,
                    tourPlaying: n
                }), this.state.labels && Object(i.h)(Qt.a, {
                    sdk: r,
                    viewmode: e
                }))
            }
            ,
            e
        }(i.Component), ee = (n(444),
        n(44)), ne = n(242), oe = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), re = new h.a("immersive-mode"), ie = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                n.sdk = e,
                n.isPointerDown = !1,
                n.startPosition = {
                    x: 0,
                    y: 0
                },
                n.isPointerDragging = !1,
                n.isImmersionMode = !1,
                n.timeoutLength = 1250,
                n.currentMode = "",
                n.canvas = document.getElementsByClassName("webgl-canvas")[0],
                n.startImmersion = n.startImmersion.bind(n),
                n.endImmersion = n.endImmersion.bind(n),
                n.onViewmodeChange = n.onViewmodeChange.bind(n),
                n.canvas.addEventListener("mousedown", function(t) {
                    return n.onPressStart(t)
                }),
                n.canvas.addEventListener("pointerdown", function(t) {
                    return n.onPressStart(t)
                }),
                n.canvas.addEventListener("touchstart", function(t) {
                    return n.onPressStart(t)
                }),
                n.canvas.addEventListener("mousemove", function(t) {
                    return n.onMove(t)
                }),
                n.canvas.addEventListener("pointermove", function(t) {
                    return n.onMove(t)
                }),
                n.canvas.addEventListener("touchmove", function(t) {
                    return n.onMove(t)
                }),
                n.canvas.addEventListener("mouseup", function(t) {
                    return n.onPressEnd(t)
                }),
                n.canvas.addEventListener("pointerup", function(t) {
                    return n.onPressEnd(t)
                }),
                n.canvas.addEventListener("touchend", function(t) {
                    return n.onPressEnd(t)
                }),
                n.canvas.addEventListener("wheel", n.startImmersion),
                window.addEventListener("keydown", n.startImmersion);
                try {
                    e.on(e.Sweep.Event.EXIT, n.startImmersion),
                    e.on(e.Mode.Event.CHANGE_START, n.onViewmodeChange),
                    e.on(e.Mode.Event.CHANGE_START, n.onViewmodeChange),
                    e.on(e.Floor.Event.CHANGE_START, n.startImmersion),
                    e.on(e.Floor.Event.CHANGE_END, n.endImmersion)
                } catch (t) {
                    re.debug(t)
                }
                return n
            }
            return oe(e, t),
            e.prototype.destructor = function() {
                var t = this;
                this.canvas.removeEventListener("mousedown", function(e) {
                    return t.onPressStart(e)
                }),
                this.canvas.removeEventListener("pointerdown", function(e) {
                    return t.onPressStart(e)
                }),
                this.canvas.removeEventListener("touchstart", function(e) {
                    return t.onPressStart(e)
                }),
                this.canvas.removeEventListener("mousemove", function(e) {
                    return t.onMove(e)
                }),
                this.canvas.removeEventListener("pointermove", function(e) {
                    return t.onMove(e)
                }),
                this.canvas.removeEventListener("touchmove", function(e) {
                    return t.onMove(e)
                }),
                this.canvas.removeEventListener("mouseup", function(e) {
                    return t.onPressEnd(e)
                }),
                this.canvas.removeEventListener("pointerup", function(e) {
                    return t.onPressEnd(e)
                }),
                this.canvas.removeEventListener("touchend", function(e) {
                    return t.onPressEnd(e)
                }),
                this.canvas.removeEventListener("wheel", this.startImmersion),
                window.removeEventListener("keydown", this.startImmersion);
                try {
                    var e = this.sdk;
                    e.off(e.Sweep.Event.EXIT, this.startImmersion),
                    e.off(e.Mode.Event.CHANGE_START, this.onViewmodeChange),
                    e.off(e.Mode.Event.CHANGE_START, this.onViewmodeChange),
                    e.off(e.Floor.Event.CHANGE_START, this.startImmersion),
                    e.off(e.Floor.Event.CHANGE_END, this.endImmersion)
                } catch (t) {
                    re.debug(t)
                }
            }
            ,
            e.prototype.startImmersion = function() {
                try {
                    if (this.currentMode === this.sdk.Mode.Mode.FLOORPLAN || this.currentMode === this.sdk.Mode.Mode.DOLLHOUSE)
                        return
                } catch (t) {
                    re.debug(t)
                }
                this.isImmersionMode || (this.emit("immersive mode change", !0),
                this.isImmersionMode = !0),
                clearTimeout(this.endTimeout),
                this.endTimeout = setTimeout(this.endImmersion.bind(this), this.timeoutLength)
            }
            ,
            e.prototype.endImmersion = function() {
                this.isImmersionMode && (clearTimeout(this.endTimeout),
                this.isImmersionMode = !1,
                this.emit("immersive mode change", !1))
            }
            ,
            e.prototype.onViewmodeChange = function(t, e) {
                t !== this.sdk.Mode.Mode.INSIDE && e !== this.sdk.Mode.Mode.INSIDE || this.startImmersion()
            }
            ,
            e.prototype.onPressStart = function(t) {
                this.isPointerDown || (this.startPosition = this.getPosition(t),
                this.isPointerDown = !0)
            }
            ,
            e.prototype.onMove = function(t) {
                if (this.isPointerDown) {
                    if (!this.isPointerDragging) {
                        if (!(this.getDistanceFromStart(this.getPosition(t)) > ne.f))
                            return;
                        this.isPointerDragging = !0
                    }
                    this.startImmersion()
                }
            }
            ,
            e.prototype.onPressEnd = function(t) {
                this.isPointerDown = !1,
                this.isPointerDragging = !1
            }
            ,
            e.prototype.getPosition = function(t) {
                var e = t;
                return "touchstart" === t.type && (e = t.changedTouches[0]),
                {
                    x: e.pageX,
                    y: e.pageY
                }
            }
            ,
            e.prototype.getDistanceFromStart = function(t) {
                return Math.sqrt(Math.pow(t.x - this.startPosition.x, 2) + Math.pow(t.y - this.startPosition.y, 2))
            }
            ,
            e
        }(ee.EventEmitter), se = n(59), ae = (n(440),
        n(438),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), ce = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.handleClick = n.handleClick.bind(n),
                n
            }
            return ae(e, t),
            e.prototype.handleClick = function() {
                this.props.toggleOpen(this.props.modalToClose, !1)
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    class: "close-button",
                    onClick: this.handleClick
                }, Object(i.h)("span", {
                    class: "icon icon-close"
                }))
            }
            ,
            e
        }(i.Component), le = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), pe = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, ue = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, he = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    scrollClass: B.c.None
                },
                n.onScrollPositionChange = n.onScrollPositionChange.bind(n),
                n
            }
            return le(e, t),
            e.prototype.componentDidUpdate = function() {
                return pe(this, void 0, void 0, function() {
                    return ue(this, function(t) {
                        return this.termsTextDiv.innerHTML = this.props.termsText,
                        [].slice.call(this.termsTextDiv.querySelectorAll("a")).forEach(function(t) {
                            t.setAttribute("target", "_blank")
                        }),
                        [2]
                    })
                })
            }
            ,
            e.prototype.onScrollPositionChange = function() {
                this.scrollbars && this.setState({
                    scrollClass: this.scrollbars.scrollPosition.vertical
                })
            }
            ,
            e.prototype.render = function() {
                var t, e = this, n = m(((t = {
                    fadeIn: this.props.isTermsOpen
                })[this.state.scrollClass] = !0,
                t));
                return Object(i.h)("div", {
                    id: "terms-modal",
                    class: n
                }, Object(i.h)("div", {
                    id: "terms-wrapper"
                }, Object(i.h)(M.a, {
                    ref: function(t) {
                        return e.scrollbars = t
                    },
                    onScrollPositionChange: this.onScrollPositionChange,
                    forceHidden: Object(V.a)(window)
                }, Object(i.h)("div", {
                    ref: function(t) {
                        return e.termsTextDiv = t
                    },
                    id: "terms-text"
                }))), Object(i.h)(ce, {
                    modalToClose: "terms",
                    toggleOpen: this.props.toggleOpen
                }))
            }
            ,
            e
        }(i.Component), fe = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), de = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, be = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, ye = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, ve = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    termsText: ""
                },
                n
            }
            return fe(e, t),
            e.prototype.componentDidMount = function() {
                return be(this, void 0, void 0, function() {
                    var t, e, n;
                    return ye(this, function(o) {
                        switch (o.label) {
                        case 0:
                            t = this.context.locale.languageCode,
                            e = "./terms/terms-" + t + ".html",
                            n = "",
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, new se.RequestQueue({
                                retries: 0
                            }).get(e)];
                        case 2:
                            return n = o.sent(),
                            [3, 4];
                        case 3:
                            return o.sent(),
                            n = this.context.locale.t(l.a.TERMS_FAIL),
                            [3, 4];
                        case 4:
                            return this.setState({
                                termsText: n
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)(he, {
                    isTermsOpen: this.props.isTermsOpen,
                    toggleOpen: this.props.toggleOpen,
                    termsText: this.state.termsText
                })
            }
            ,
            e = de([c.a], e)
        }(i.Component), Oe = (n(321),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), ge = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, me = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Oe(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.componentStyle
                  , n = t.style
                  , o = t.onClick
                  , r = t.children;
                return Object(i.h)("div", {
                    class: m(e, this.props.class),
                    style: n,
                    onClick: o
                }, r)
            }
            ,
            e = ge([c.a], e)
        }(i.Component), _e = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), we = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, je = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return _e(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.style
                  , n = t.children;
                return Object(i.h)(me, {
                    componentStyle: "title",
                    class: this.props.class,
                    style: e
                }, n)
            }
            ,
            e = we([c.a], e)
        }(i.Component), Pe = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), ke = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Ee = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Pe(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.style
                  , n = t.children
                  , o = n && n.length;
                return Object(i.h)(me, {
                    componentStyle: o ? void 0 : "close",
                    class: this.props.class,
                    style: e,
                    onClick: this.context.onModalHide
                }, o ? n : Object(i.h)("i", {
                    class: "icon icon-close"
                }))
            }
            ,
            e = ke([c.a], e)
        }(i.Component), Se = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Ce = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Re = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Se(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.style
                  , n = t.children;
                return Object(i.h)(me, {
                    componentStyle: "body",
                    class: this.props.class,
                    style: e
                }, n)
            }
            ,
            e = Ce([c.a], e)
        }(i.Component), Ie = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Le = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Te = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Ie(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.style
                  , n = t.children;
                return Object(i.h)(me, {
                    componentStyle: "footer",
                    class: this.props.class,
                    style: e
                }, n)
            }
            ,
            e = Le([c.a], e)
        }(i.Component), Ae = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), xe = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, De = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Ae(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.style
                  , n = t.children;
                return Object(i.h)(me, {
                    componentStyle: "buttons",
                    class: this.props.class,
                    style: e
                }, n)
            }
            ,
            e = xe([c.a], e)
        }(i.Component), Me = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), He = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Ne = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Me(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.style
                  , n = t.onClick
                  , o = t.children;
                return Object(i.h)(me, {
                    componentStyle: "button",
                    class: this.props.class,
                    style: e,
                    onClick: n
                }, o)
            }
            ,
            e = He([c.a], e)
        }(i.Component), Ve = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Be = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Ge = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Ve(e, t),
            e.prototype.getChildContext = function() {
                return this._context || (this._context = {
                    onModalHide: this.props.onHide
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props
                  , e = t.show
                  , n = t.fixed
                  , o = t.id
                  , r = t.children
                  , s = t.style;
                return Object(i.h)("div", {
                    id: o,
                    class: m("modal", {
                        fadeIn: e
                    }, {
                        fixed: n
                    }, this.props.class),
                    style: s
                }, r)
            }
            ,
            e.Title = je,
            e.Dismiss = Ee,
            e.Body = Re,
            e.Footer = Te,
            e.ButtonGroup = De,
            e.Button = Ne,
            e = Be([c.a], e)
        }(i.Component), Ue = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Fe = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.onHide = n.onHide.bind(n),
                n
            }
            return Ue(e, t),
            e.prototype.onHide = function() {
                this.props.toggleOpen(j.a.vrSelect, !1)
            }
            ,
            e.prototype.renderPrevious = function(t, e) {
                var n = this.props.previous
                  , o = this.context.locale;
                return 0 === t ? null : Object(i.h)(Ge.Button, {
                    onClick: n
                }, o.t(l.a.VR_PREVIOUS_CAPS))
            }
            ,
            e.prototype.renderNext = function(t, e) {
                var n = this.props.next
                  , o = this.context.locale;
                return t === e - 1 ? Object(i.h)(Ge.Dismiss, null, Object(i.h)(Ge.Button, null, o.t(l.a.VR_GOT_IT_CAPS))) : Object(i.h)(Ge.Button, {
                    onClick: n
                }, 0 === t ? o.t(l.a.VR_LEARN_MORE_CAPS) : o.t(l.a.VR_NEXT_CAPS))
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                var e = this;
                this.props.isVrSelectOpen && !t.isVrSelectOpen && setTimeout(function() {
                    e.setState({
                        page: 0
                    })
                }, 500)
            }
            ,
            e.prototype.render = function() {
                var t = this.props
                  , e = t.isVrSelectOpen
                  , n = t.children
                  , o = this.context.locale;
                if (!n || !n.length)
                    return null;
                var r = this.props.page
                  , s = n.length
                  , a = s > 1 ? Object(i.h)("div", null, r + 1 + " / " + s) : null;
                return Object(i.h)(Ge, {
                    id: "vrSelect",
                    show: e,
                    onHide: this.onHide
                }, Object(i.h)(Ge.Title, null, o.t(l.a.VR_VIEW_SPACE)), Object(i.h)(Ge.Dismiss, null), Object(i.h)(Ge.Body, null, n[r]), Object(i.h)(Ge.Footer, null, a, Object(i.h)(Ge.ButtonGroup, null, this.renderPrevious(r, s), this.renderNext(r, s))))
            }
            ,
            e
        }(i.Component);
        !function(t) {
            t.gearVr = "gearvr",
            t.cardboardAndroid = "googlevr",
            t.cardboardIos = "googlevrios",
            t.android = "android",
            t.ios = "ios"
        }(Wt = Wt || (Wt = {}));
        var We, Ke = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, ze = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, qe = function() {
            function t(e, n) {
                this.sdk = e,
                this.sessionId = n,
                t.queue || (t.queue = new se.RequestQueue({
                    retries: 0
                })),
                this.storeLinks = {},
                this.storeLinks[Wt.gearVr] = "https://www.oculus.com/experiences/gear-vr/811670972252145/?redirect_uri=",
                this.storeLinks[Wt.cardboardAndroid] = "https://play.google.com/store/apps/details?id=com.matterport.mpvrcardboard&redirect_uri=",
                this.storeLinks[Wt.cardboardIos] = "https://itunes.apple.com/us/app/matterport-vr/id1168808473&redirect_uri="
            }
            return t.prototype.getBranchKey = function() {
                var e = this.getOrigin();
                return t.branchKeyPromise || (t.branchKeyPromise = t.queue.get(e + "/api/v1/config/showcase.json", {
                    responseType: "json"
                }).then(function(t) {
                    return t.branch_key
                })),
                t.branchKeyPromise
            }
            ,
            t.prototype.getBranchLink = function(e, n) {
                return Ke(this, void 0, void 0, function() {
                    var o, r, i, s, a, c, l, p, u;
                    return ze(this, function(h) {
                        switch (h.label) {
                        case 0:
                            o = "https://support.matterport.com/hc/en-us/articles/224728887-What-do-I-need-for-Virtual-Reality",
                            r = "https://api.branch.io/v1/url",
                            i = this.getAppLink(e, n),
                            s = "",
                            h.label = 1;
                        case 1:
                            return h.trys.push([1, 4, , 5]),
                            c = (a = t.queue).post,
                            l = [r],
                            p = {
                                responseType: "json"
                            },
                            u = {},
                            [4, this.getBranchKey()];
                        case 2:
                            return [4, c.apply(a, l.concat([(p.body = (u.branch_key = h.sent(),
                            u.data = {
                                m: e.sid,
                                full_url: i,
                                $desktop_url: o,
                                $og_app_id: "331853976762864119",
                                $og_title: e.title,
                                $og_description: e.description,
                                $og_image_url: location.origin + "/api/v1/player/models/" + e.sid + "/thumb",
                                $canonical_url: window.location.href
                            },
                            u),
                            p)])).then(function(t) {
                                s = t.url || i
                            })];
                        case 3:
                            return h.sent(),
                            [3, 5];
                        case 4:
                            return h.sent(),
                            s = i,
                            [3, 5];
                        case 5:
                            return [2, s]
                        }
                    })
                })
            }
            ,
            t.prototype.getOrigin = function() {
                var t = window.location.host;

                return window.location.protocol +"//" + t;

                return -1 === t.indexOf(".matterport.com") && -1 === t.indexOf("localhost") && (t = "my.matterport.com"),
                "https://" + t
            }
            ,
            t.prototype.getReferrer = function() {
                return W.d() ? document.referrer : window.location.href
            }
            ,
            t.prototype.getSimpleLink = function(t) {
                return this.getOrigin() + "/vr/show/?m=" + t
            }
            ,
            t.prototype.getAppLink = function(t, e) {
                var n = this.getOrigin()
                  , o = this.getReferrer();
                return W.m("vrcoll", !1) ? n + "/vr/dlist/?sids=" + t.sid + "&lsid=" + t.sid + "&ln=" + encodeURIComponent(t.title) + "&ld=" + encodeURIComponent(t.description) + "&display=" + e + "&utm_medium=" + (W.d() ? "embed" : "direct") + "&utm_source=" + o + "&utm_showcase_session_id=" + this.sessionId + "&ret=" + encodeURIComponent(o) : n + "/vr/show/?m=" + t.sid + "&display=" + e + "&utm_medium=" + (W.d() ? "embed" : "direct") + "&utm_source=" + o + "&utm_showcase_session_id=" + this.sessionId + "&ret=" + encodeURIComponent(o)
            }
            ,
            t.prototype.getStoreLink = function(t) {
                var e = this.getReferrer()
                  , n = e ? "?redirect_uri=" + encodeURIComponent(e + "&display=" + t) : "";
                return Promise.resolve("" + this.storeLinks[t] + n)
            }
            ,
            t.prototype.getDeepLink = function(t) {
                return Ke(this, void 0, void 0, function() {
                    var e, n, o, r, i;
                    return ze(this, function(s) {
                        switch (s.label) {
                        case 0:
                            return e = this.sdk.Model.getData(),
                            t ? [3, 2] : (n = this.getSimpleLink,
                            [4, e]);
                        case 1:
                            return [2, n.apply(this, [s.sent().sid])];
                        case 2:
                            return o = this.sdk.Model.getDetails(),
                            i = {},
                            [4, e];
                        case 3:
                            return i.sid = s.sent().sid,
                            [4, o];
                        case 4:
                            return i.title = s.sent().name,
                            [4, o];
                        case 5:
                            return i.description = s.sent().summary,
                            r = i,
                            t === Wt.cardboardIos ? [2, this.getBranchLink(r, t)] : [2, this.getAppLink(r, t)]
                        }
                    })
                })
            }
            ,
            t
        }();
        !function(t) {
            t.CardboardAndroid = "googlevr",
            t.GearVR = "gearvr",
            t.CardboardIOS = "googlevrios",
            t.Cardboard = "googlevr"
        }(We = We || (We = {}));
        var Ye, Je = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Qe = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Je(e, t),
            e.prototype.render = function(t, e) {
                var n = t.className
                  , o = t.href
                  , r = t.children
                  , s = t.onClick;
                return Object(i.h)("a", {
                    className: n,
                    href: o,
                    target: "_blank",
                    onClick: s
                }, r)
            }
            ,
            e
        }(i.Component), Xe = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), $e = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Ze = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, tn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, en = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Xe(e, t),
            e.prototype.componentDidMount = function() {
                return Ze(this, void 0, void 0, function() {
                    var t;
                    return tn(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.props.vrLinks.getDeepLink(Wt.cardboardIos)];
                        case 1:
                            return t = e.sent(),
                            this.setState({
                                deepLink: t
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state.deepLink;
                return Object(i.h)("div", {
                    className: "openVrApp"
                }, Object(i.h)("h1", null, e.t(l.a.VR_SHOW_IOS_1)), Object(i.h)("ul", null, Object(i.h)(Qe, {
                    href: o,
                    onClick: t("launch_vr", {
                        vr_platform: Wt.ios,
                        vr_app: We.CardboardIOS
                    })
                }, Object(i.h)("li", null, Object(i.h)("img", {
                    class: "headset-small",
                    src: n(227)
                }), Object(i.h)("br", null), e.t(l.a.VR_GOOGLE_CARDBOARD)))), Object(i.h)("div", {
                    className: "caption"
                }, Object(i.h)("i", null, e.t(l.a.VR_SHOW_IOS_2))))
            }
            ,
            e = $e([c.a], e)
        }(i.Component), nn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), on = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, rn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return nn(e, t),
            e.prototype.render = function() {
                var t = this.context.locale
                  , e = this.props
                  , n = e.next
                  , o = e.onEnterVr;
                return Object(i.h)("div", {
                    className: "openVrApp"
                }, Object(i.h)("ul", null, Object(i.h)(Ge.Button, {
                    onClick: o,
                    style: "margin-top: 40px"
                }, t.t(l.a.WEBVR_ENTER_WEBVR))), Object(i.h)("div", null, Object(i.h)("hr", {
                    style: "margin: 40px"
                })), Object(i.h)("ul", null, Object(i.h)("div", {
                    className: "hasHover link",
                    onClick: n
                }, t.t(l.a.VR_APP_OPEN))))
            }
            ,
            e = on([c.a], e)
        }(i.Component), sn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), an = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, cn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, ln = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, pn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return sn(e, t),
            e.prototype.componentDidMount = function() {
                return cn(this, void 0, void 0, function() {
                    var t;
                    return ln(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.props.vrLinks.getStoreLink(Wt.cardboardIos)];
                        case 1:
                            return t = e.sent(),
                            this.setState({
                                storeLink: t
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state.storeLink;
                return Object(i.h)("div", {
                    className: "whatYoullNeed"
                }, Object(i.h)("h1", null, e.t(l.a.VR_NEED_CARDBOARD)), Object(i.h)("div", {
                    className: "headset"
                }, Object(i.h)("img", {
                    class: "headset-large",
                    src: n(227)
                })), Object(i.h)("ul", null, Object(i.h)("li", null, Object(i.h)("div", null, Object(i.h)("img", {
                    class: "vr-modal-icon",
                    src: n(435)
                })), Object(i.h)("span", null, Object(i.h)("strong", null, e.t(l.a.VR_COMPATIBLE_IPHONES_3)), Object(i.h)("br", null), e.t(l.a.VR_COMPATIBLE_IPHONES_2))), Object(i.h)("li", null, Object(i.h)("div", null, Object(i.h)("img", {
                    class: "vr-modal-icon",
                    src: n(320)
                })), Object(i.h)("span", null, Object(i.h)("strong", null, e.t(l.a.VR_APP_FOR_CARDBOARD)), Object(i.h)("br", null), Object(i.h)(Qe, {
                    href: o,
                    onClick: t("launch_store", {
                        store: We.CardboardIOS
                    })
                }, e.t(l.a.VR_DOWNLOAD_HERE))))))
            }
            ,
            e = an([c.a], e)
        }(i.Component), un = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), hn = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, fn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, dn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, bn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return un(e, t),
            e.prototype.componentDidMount = function() {
                return fn(this, void 0, void 0, function() {
                    var t, e, n, o, r;
                    return dn(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return t = this.props.vrLinks,
                            e = t.getDeepLink(Wt.cardboardAndroid),
                            n = t.getDeepLink(Wt.gearVr),
                            o = this.setState,
                            r = {},
                            [4, e];
                        case 1:
                            return r.deepLinkCardboard = i.sent(),
                            [4, n];
                        case 2:
                            return o.apply(this, [(r.deepLinkGearVr = i.sent(),
                            r)]),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state
                  , r = o.deepLinkCardboard
                  , s = o.deepLinkGearVr;
                return Object(i.h)("div", {
                    className: "openVrApp"
                }, Object(i.h)("h1", null, e.t(l.a.VR_SHOW_SUPPORTED)), Object(i.h)("ul", null, Object(i.h)(Qe, {
                    href: r,
                    onClick: t("launch_vr", {
                        vr_platform: Wt.android,
                        vr_app: We.CardboardAndroid
                    })
                }, Object(i.h)("li", null, Object(i.h)("img", {
                    class: "headset-small",
                    src: n(227)
                }), Object(i.h)("br", null), e.t(l.a.VR_GOOGLE_CARDBOARD))), Object(i.h)(Qe, {
                    href: s,
                    onClick: t("launch_vr", {
                        vr_platform: Wt.android,
                        vr_app: We.GearVR
                    })
                }, Object(i.h)("li", null, Object(i.h)("img", {
                    class: "headset-small",
                    src: n(253)
                }), Object(i.h)("br", null), e.t(l.a.VR_SAMSUNG_GEAR_VR)))), Object(i.h)("div", {
                    className: "caption"
                }, Object(i.h)("i", null, e.t(l.a.VR_REQUIRE_HEADSET)), Object(i.h)("br", null), Object(i.h)("i", null, e.t(l.a.VR_REDIRECT_TO_STORE))))
            }
            ,
            e = hn([c.a], e)
        }(i.Component), yn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), vn = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, On = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, gn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, mn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return yn(e, t),
            e.prototype.componentDidMount = function() {
                return On(this, void 0, void 0, function() {
                    var t;
                    return gn(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.props.vrLinks.getStoreLink(Wt.cardboardAndroid)];
                        case 1:
                            return t = e.sent(),
                            this.setState({
                                storeLink: t
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state.storeLink;
                return Object(i.h)("div", {
                    className: "whatYoullNeed"
                }, Object(i.h)("h1", null, e.t(l.a.VR_NEED_CARDBOARD)), Object(i.h)("div", {
                    className: "headset"
                }, Object(i.h)("img", {
                    class: "headset-large",
                    src: n(227)
                })), Object(i.h)("ul", null, Object(i.h)("li", null, Object(i.h)("div", null, Object(i.h)("img", {
                    class: "vr-modal-icon",
                    src: n(434)
                })), Object(i.h)("span", null, Object(i.h)("strong", null, e.t(l.a.VR_COMPATIBLE_ANDROID)), Object(i.h)("br", null), e.t(l.a.VR_ANDROID_DETAIL))), Object(i.h)("li", null, Object(i.h)("div", null, Object(i.h)("img", {
                    class: "vr-modal-icon",
                    src: n(320)
                })), Object(i.h)("span", null, Object(i.h)("strong", null, e.t(l.a.VR_APP_FOR_CARDBOARD)), Object(i.h)("br", null), Object(i.h)(Qe, {
                    href: o,
                    onClick: t("launch_store", {
                        store: We.CardboardAndroid
                    })
                }, e.t(l.a.VR_DOWNLOAD_HERE))))))
            }
            ,
            e = vn([c.a], e)
        }(i.Component), _n = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), wn = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, jn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Pn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, kn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return _n(e, t),
            e.prototype.componentDidMount = function() {
                return jn(this, void 0, void 0, function() {
                    var t;
                    return Pn(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.props.vrLinks.getStoreLink(Wt.gearVr)];
                        case 1:
                            return t = e.sent(),
                            this.setState({
                                storeLink: t
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state.storeLink;
                return Object(i.h)("div", {
                    className: "whatYoullNeed"
                }, Object(i.h)("h1", null, e.t(l.a.VR_NEED_SAMSUNG)), Object(i.h)("div", {
                    className: "headset"
                }, Object(i.h)("img", {
                    class: "headset-large",
                    src: n(253)
                })), Object(i.h)("ul", null, Object(i.h)("li", null, Object(i.h)("div", null, Object(i.h)("img", {
                    class: "vr-modal-icon",
                    src: n(433)
                })), Object(i.h)("span", null, Object(i.h)("strong", null, e.t(l.a.VR_COMPATIBLE_SAMSUNG)), Object(i.h)("br", null), e.t(l.a.VR_SAMSUNG_DETAIL))), Object(i.h)("li", null, Object(i.h)("div", null, Object(i.h)("img", {
                    class: "vr-modal-icon",
                    src: n(432)
                })), Object(i.h)("span", null, Object(i.h)("strong", null, e.t(l.a.VR_APP_FOR_SAMSUNG)), Object(i.h)("br", null), Object(i.h)(Qe, {
                    href: o,
                    onClick: t("launch_store", {
                        store: We.GearVR
                    })
                }, e.t(l.a.VR_DOWNLOAD_HERE))))))
            }
            ,
            e = wn([c.a], e)
        }(i.Component), En = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Sn = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Cn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Rn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, In = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.setCurrentPanel = n.setCurrentPanel.bind(n),
                n.openCardboardPanel = n.openCardboardPanel.bind(n),
                n.openGearVrPanel = n.openGearVrPanel.bind(n),
                n.closePanel = n.closePanel.bind(n),
                n
            }
            return En(e, t),
            e.prototype.handleLinkFocus = function(t) {
                t.target.select()
            }
            ,
            e.prototype.handleLinkBlur = function(t) {
                var e = t.target;
                e.selectionStart = e.selectionEnd = -1
            }
            ,
            e.prototype.setCurrentPanel = function(t) {
                this.setState({
                    currentPanel: t
                })
            }
            ,
            e.prototype.openCardboardPanel = function() {
                this.setCurrentPanel(Ye.cardboard)
            }
            ,
            e.prototype.openGearVrPanel = function() {
                this.setCurrentPanel(Ye.gearVr)
            }
            ,
            e.prototype.closePanel = function() {
                this.setCurrentPanel(Ye.none)
            }
            ,
            e.prototype.componentDidMount = function() {
                return Cn(this, void 0, void 0, function() {
                    var t, e, n, o, r, i, s;
                    return Rn(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return t = this.props.vrLinks,
                            e = t.getDeepLink(),
                            n = t.getStoreLink(Wt.cardboardIos),
                            o = t.getStoreLink(Wt.cardboardAndroid),
                            r = t.getStoreLink(Wt.gearVr),
                            i = this.setState,
                            s = {},
                            [4, e];
                        case 1:
                            return s.deepLink = a.sent(),
                            [4, n];
                        case 2:
                            return s.cardboardIosStoreLink = a.sent(),
                            [4, o];
                        case 3:
                            return s.cardboardAndroidStoreLink = a.sent(),
                            [4, r];
                        case 4:
                            return i.apply(this, [(s.gearVrStoreLink = a.sent(),
                            s)]),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state
                  , r = o.deepLink
                  , s = o.cardboardAndroidStoreLink
                  , a = o.cardboardIosStoreLink
                  , c = o.gearVrStoreLink
                  , p = o.currentPanel;
                return Object(i.h)("div", {
                    class: "openVrApp"
                }, Object(i.h)("h1", null, e.t(l.a.VR_OPEN_ANDROID_LINK)), Object(i.h)("div", {
                    class: "vr-deep-link"
                }, Object(i.h)("input", {
                    readOnly: !0,
                    value: r,
                    onFocus: this.handleLinkFocus,
                    onBlur: this.handleLinkBlur
                })), Object(i.h)("h1", null, e.t(l.a.VR_ANDROID_OPTIONS)), Object(i.h)("ul", null, p !== Ye.gearVr ? Object(i.h)("li", {
                    class: "hasHover",
                    onClick: this.openCardboardPanel
                }, Object(i.h)("img", {
                    class: "headset-small",
                    src: n(227)
                }), Object(i.h)("br", null), e.t(l.a.VR_GOOGLE_CARDBOARD)) : null, p !== Ye.cardboard ? Object(i.h)("li", {
                    class: "hasHover",
                    onClick: this.openGearVrPanel
                }, Object(i.h)("img", {
                    class: "headset-small",
                    src: n(253)
                }), Object(i.h)("br", null), e.t(l.a.VR_SAMSUNG_GEAR_VR)) : null, p === Ye.cardboard ? Object(i.h)("li", null, Object(i.h)("i", {
                    onClick: this.closePanel,
                    class: "icon hasHover icon-close panel-close"
                }), Object(i.h)(Qe, {
                    href: s,
                    onClick: t("launch_store", {
                        store: We.CardboardAndroid
                    })
                }, Object(i.h)("img", {
                    class: "store-badge",
                    src: n(319)
                })), Object(i.h)("br", null), Object(i.h)(Qe, {
                    href: a,
                    onClick: t("launch_store", {
                        store: We.CardboardIOS
                    })
                }, Object(i.h)("img", {
                    class: "store-badge",
                    src: n(318)
                }))) : null, p === Ye.gearVr ? Object(i.h)("li", null, Object(i.h)("i", {
                    onClick: this.closePanel,
                    class: "icon hasHover icon-close panel-close"
                }), Object(i.h)(Qe, {
                    href: c,
                    onClick: t("launch_store", {
                        store: We.GearVR
                    })
                }, Object(i.h)("img", {
                    class: "store-badge",
                    src: n(317)
                }))) : null))
            }
            ,
            e = Sn([c.a], e)
        }(i.Component);
        !function(t) {
            t.none = "none",
            t.cardboard = "cardboard",
            t.gearVr = "gearVr"
        }(Ye || (Ye = {}));
        var Ln, Tn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), An = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, xn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Dn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, Mn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Tn(e, t),
            e.prototype.componentDidMount = function() {
                return xn(this, void 0, void 0, function() {
                    var t, e, n, o, r;
                    return Dn(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return t = this.props.vrLinks,
                            e = t.getStoreLink(Wt.cardboardIos),
                            n = t.getStoreLink(Wt.cardboardAndroid),
                            o = this.setState,
                            r = {},
                            [4, e];
                        case 1:
                            return r.iosStoreLink = i.sent(),
                            [4, n];
                        case 2:
                            return o.apply(this, [(r.androidStoreLink = i.sent(),
                            r)]),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state
                  , r = o.iosStoreLink
                  , s = o.androidStoreLink;
                return Object(i.h)("div", {
                    className: "whatYoullNeed"
                }, Object(i.h)("div", {
                    className: "header"
                }, Object(i.h)("img", {
                    class: "headset-large",
                    src: n(227)
                }), Object(i.h)("h1", null, e.t(l.a.VR_NEED_CARDBOARD))), Object(i.h)("ul", null, Object(i.h)("li", null, Object(i.h)(Qe, {
                    href: r,
                    onClick: t("launch_store", {
                        store: We.CardboardAndroid
                    })
                }, Object(i.h)("img", {
                    class: "store-badge",
                    src: n(318)
                })), Object(i.h)("strong", null, e.t(l.a.VR_COMPATIBLE_IPHONES_1)), Object(i.h)("br", null), Object(i.h)("span", null, e.t(l.a.VR_COMPATIBLE_IPHONES_2))), Object(i.h)("li", null, Object(i.h)(Qe, {
                    href: s,
                    onClick: t("launch_store", {
                        store: We.CardboardIOS
                    })
                }, Object(i.h)("img", {
                    class: "store-badge",
                    src: n(319)
                })), Object(i.h)("strong", null, e.t(l.a.VR_COMPATIBLE_ANDROID)), Object(i.h)("br", null), Object(i.h)("span", null, e.t(l.a.VR_ANDROID_DETAIL)))))
            }
            ,
            e = An([c.a], e)
        }(i.Component), Hn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Nn = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, Vn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, Bn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, Gn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return Hn(e, t),
            e.prototype.componentDidMount = function() {
                return Vn(this, void 0, void 0, function() {
                    var t;
                    return Bn(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.props.vrLinks.getStoreLink(Wt.gearVr)];
                        case 1:
                            return t = e.sent(),
                            this.setState({
                                storeLink: t
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.props.analytics
                  , e = this.context.locale
                  , o = this.state.storeLink;
                return Object(i.h)("div", {
                    className: "whatYoullNeed"
                }, Object(i.h)("div", {
                    className: "header"
                }, Object(i.h)("img", {
                    class: "headset-large",
                    src: n(253)
                }), Object(i.h)("h1", null, e.t(l.a.VR_NEED_SAMSUNG))), Object(i.h)("ul", null, Object(i.h)("li", null, Object(i.h)(Qe, {
                    href: o,
                    onClick: t("launch_store", {
                        store: We.GearVR
                    })
                }, Object(i.h)("img", {
                    class: "store-badge",
                    src: n(317)
                })), Object(i.h)("strong", null, e.t(l.a.VR_COMPATIBLE_SAMSUNG)), Object(i.h)("br", null), Object(i.h)("span", null, e.t(l.a.VR_SAMSUNG_DETAIL)))))
            }
            ,
            e = Nn([c.a], e)
        }(i.Component), Un = n(92), Fn = (n(431),
        n(429)), Wn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Kn = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, zn = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }, qn = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }, Yn = new h.a("vr-select"), Jn = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.state = {
                    pages: [],
                    page: 0
                };
                var o = new Fn;
                return Yn.debug("WebVR Polyfill version:", o),
                n.previous = n.previous.bind(n),
                n.next = n.next.bind(n),
                n.onWebVrEnter = n.onWebVrEnter.bind(n),
                n.onExitVr = n.onExitVr.bind(n),
                n.analyticsFn = n.analyticsFn.bind(n),
                n
            }
            return Wn(e, t),
            e.prototype.componentDidMount = function() {
                return zn(this, void 0, void 0, function() {
                    var t, e, n, o, r, s, a, c, l;
                    return qn(this, function(p) {
                        switch (p.label) {
                        case 0:
                            return t = this.props.sdk,
                            e = this.context.analytics,
                            n = new qe(t,e.getSessionId()),
                            o = [],
                            [4, this.webvrDetected()];
                        case 1:
                            switch (r = p.sent(),
                            this.platform = this.getPlatform(r),
                            s = [Object(i.h)(en, {
                                key: "openVrApp",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            }), Object(i.h)(pn, {
                                key: "whatYoullNeed",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            })],
                            a = [Object(i.h)(bn, {
                                key: "openVrApp",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            }), Object(i.h)(mn, {
                                key: "whatYoullNeedCardboard",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            }), Object(i.h)(kn, {
                                key: "whatYoullNeedGearVr",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            })],
                            c = [Object(i.h)(In, {
                                key: "openVrApp",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            }), Object(i.h)(Mn, {
                                key: "whatYoullNeedCardboard",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            }), Object(i.h)(Gn, {
                                key: "whatYoullNeedGearVr",
                                vrLinks: n,
                                analytics: this.analyticsFn
                            })],
                            l = [Object(i.h)(rn, {
                                key: "openWebVrApp",
                                vrLinks: n,
                                onEnterVr: this.onWebVrEnter,
                                next: this.next,
                                analytics: this.analyticsFn
                            })],
                            this.platform) {
                            case Ln.ios:
                                o = s;
                                break;
                            case Ln.android:
                                o = a;
                                break;
                            case Ln.webvrAndroid:
                                o = l.concat(a),
                                t.VR.preloadVr();
                                break;
                            case Ln.webvrDesktop:
                                o = l.concat(c),
                                t.VR.preloadVr();
                                break;
                            case Ln.desktop:
                            default:
                                o = c
                            }
                            return this.setState({
                                pages: o
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                if (this.props.isVrSelectOpen !== t.isVrSelectOpen) {
                    var e = t.isVrSelectOpen ? "click_vr_button" : "vr_modal_close";
                    this.isWebVr(this.platform) && (e = t.isVrSelectOpen ? "click_webvr_button" : "webvr_modal_close"),
                    this.vrAnalytics(e)
                }
            }
            ,
            e.prototype.render = function() {
                var t = this.props
                  , e = t.isVrSelectOpen
                  , n = t.toggleOpen
                  , o = this.state
                  , r = o.pages
                  , s = o.page;
                return Object(i.h)(Fe, {
                    isVrSelectOpen: e,
                    toggleOpen: n,
                    next: this.next,
                    previous: this.previous,
                    page: s
                }, r)
            }
            ,
            e.prototype.onWebVrEnter = function() {
                var t = this;
                if (this.vrDisplay && this.vrDisplay.capabilities.canPresent && !this.vrDisplay.isPresenting) {
                    this.vrAnalytics("webvr_enter_app"),
                    this.props.sdk.VR.presentVr();
                    var e = document.createElement("canvas");
                    for (e.getContext("webgl"),
                    e.className = "webvr-canvas",
                    document.bgColor = "#000",
                    document.body.style.backgroundColor = "#000"; document.body.firstChild; )
                        document.body.removeChild(document.body.firstChild);
                    document.body.appendChild(e),
                    this.vrDisplay.requestPresent([{
                        source: e
                    }]).then(function() {
                        window.addEventListener("vrdisplaypresentchange", t.onExitVr)
                    }).catch(function(e) {
                        Yn.error("requestPresent Failed:", e),
                        t.vrAnalytics("webvr_present_error")
                    }),
                    window.dispatchEvent(new Event("vrapp-start"))
                } else
                    Yn.error("vrDisplay not found, or already presenting"),
                    this.vrAnalytics("webvr_present_error")
            }
            ,
            e.prototype.onExitVr = function() {
                if (!this.vrDisplay.isPresenting) {
                    this.vrAnalytics("webvr_exit_app"),
                    window.removeEventListener("vrdisplaypresentchange", this.onExitVr);
                    var t = window.location.href;
                    -1 === window.location.search.indexOf("&qs=1") && (t += "&qs=1"),
                    Yn.info("redirecting to:", t),
                    window.location.replace(t)
                }
            }
            ,
            e.prototype.getPlatform = function(t) {
                if (W.h()) {
                    var e = W.e();
                    if (e.major > 9 || 9 === e.major && e.minor >= 1)
                        return Ln.ios
                } else if (W.f()) {
                    if (t)
                        return Ln.webvrAndroid;
                    var n = W.a();
                    if (n.major > 4 || 4 === n.major && n.minor > 4 || 4 === n.major && 4 === n.minor && n.patch >= 4)
                        return Ln.android
                }
                return t ? Ln.webvrDesktop : Ln.desktop
            }
            ,
            e.prototype.webvrDetected = function() {
                return zn(this, void 0, void 0, function() {
                    var t, e = this;
                    return qn(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return t = !1,
                            Yn.debug("isWebVRAvailable:", Un.b()),
                            Un.b() ? [4, Un.c().then(function(n) {
                                n && (e.vrDisplay = n,
                                t = !0),
                                Yn.debug("vrDisplayPromise:", n)
                            })] : [3, 2];
                        case 1:
                            n.sent(),
                            n.label = 2;
                        case 2:
                            return [2, t]
                        }
                    })
                })
            }
            ,
            e.prototype.vrAnalytics = function(t, e) {
                this.analyticsFn(t, e)()
            }
            ,
            e.prototype.analyticsFn = function(t, e) {
                var n = this;
                return function() {
                    var o = W.i() ? "landscape" : "portrait"
                      , r = {
                        gui_action: t,
                        orientation: o
                    };
                    r = Object.assign(r, e),
                    n.context.analytics.track("showcase_gui", r)
                }
            }
            ,
            e.prototype.previous = function() {
                this.vrAnalytics(this.isWebVr ? "webvr_modal_prev" : "vr_modal_prev"),
                this.setState({
                    page: this.state.page - 1
                })
            }
            ,
            e.prototype.next = function() {
                this.vrAnalytics(this.isWebVr ? "webvr_learn_more" : "vr_modal_next"),
                this.setState({
                    page: this.state.page + 1
                })
            }
            ,
            e.prototype.isWebVr = function(t) {
                return t === Ln.webvrAndroid || t === Ln.webvrDesktop
            }
            ,
            e = Kn([c.a], e)
        }(i.Component);
        !function(t) {
            t.ios = "ios",
            t.android = "android",
            t.desktop = "unsupported",
            t.webvrAndroid = "webvrAndroid",
            t.webvrDesktop = "webvrDesktop"
        }(Ln || (Ln = {}));
        n(274);
        var Qn, Xn, $n = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Zn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return $n(e, t),
            e.prototype.render = function() {
                var t = this.props.isMobile
                  , e = this.context.locale;
                return Object(i.h)("div", {
                    class: "cta"
                }, Object(i.h)("h1", {
                    class: m({
                        mobile: t
                    })
                }, e.t(t ? l.a.MOBILE_SHORT_CTA : l.a.DESKTOP_SHORT_CTA)))
            }
            ,
            e
        }(i.Component), to = {
            mouse: {
                click: n(427),
                clickInside: n(426),
                dragLeft: n(425),
                dragRight: n(424),
                play: n(423),
                positionLeft: n(422),
                positionRight: n(421),
                zoom: n(420)
            },
            gesture: {
                drag: n(419),
                dragTwoFinger: n(418),
                pinch: n(417),
                position: n(416),
                positionTwoFinger: n(415),
                tap: n(414),
                tapInside: n(413),
                play: n(412)
            },
            keyboard: {
                all: n(411),
                inside: n(410),
                leftRight: n(409),
                spaceBar: n(408),
                upDown: n(407),
                zoom: n(406)
            },
            moreHelp: {
                view360: n(405),
                mattertag: n(404)
            }
        }, eo = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), no = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.keys = {
                    header: l.a.DESKTOP_SHORT_CTA,
                    move: l.a.MOVE,
                    inside: l.a.INSIDE,
                    rotate: l.a.ROTATE,
                    play: l.a.PLAY,
                    zoom: l.a.ZOOM
                },
                e.clickInside = {
                    Icon: to.mouse.clickInside,
                    Label: e.keys.inside,
                    FooterIcon: to.keyboard.inside
                },
                e.clickMove = {
                    Icon: to.mouse.click,
                    Label: e.keys.move,
                    FooterIcon: to.keyboard.leftRight
                },
                e.play = {
                    Icon: to.mouse.play,
                    Label: e.keys.play,
                    FooterIcon: null
                },
                e.zoom = {
                    Icon: to.mouse.zoom,
                    Label: e.keys.zoom,
                    FooterIcon: to.keyboard.zoom
                },
                e.dragMove = {
                    Icon: to.mouse.positionLeft,
                    Label: e.keys.move,
                    FooterIcon: null
                },
                e.dragRotate = {
                    Icon: to.mouse.dragLeft,
                    Label: e.keys.rotate,
                    FooterIcon: to.keyboard.leftRight
                },
                e.left = e.clickInside,
                e.center = e.clickMove,
                e.right = e.play,
                e
            }
            return eo(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.viewmode
                  , n = t.viewmodes
                  , o = this.context.locale;
                return this.configureViewmodeSpecifics(e, n),
                Object(i.h)("div", {
                    class: m({
                        cta: !0
                    })
                }, Object(i.h)("h1", null, o.t(this.keys.header)), Object(i.h)("h2", null, o.t(this.left.Label)), Object(i.h)("img", {
                    src: this.left.Icon
                }), this.left.FooterIcon ? Object(i.h)("hr", null) : Object(i.h)("span", null), this.left.FooterIcon ? Object(i.h)("img", {
                    class: "footer-icon",
                    src: this.left.FooterIcon
                }) : Object(i.h)("span", null), Object(i.h)("h2", null, o.t(this.center.Label)), Object(i.h)("img", {
                    src: this.center.Icon
                }), this.center.FooterIcon ? Object(i.h)("hr", null) : Object(i.h)("span", null), this.center.FooterIcon ? Object(i.h)("img", {
                    class: "footer-icon",
                    src: this.center.FooterIcon
                }) : Object(i.h)("span", null), Object(i.h)("h2", null, o.t(this.right.Label)), Object(i.h)("img", {
                    src: this.right.Icon
                }), this.right.FooterIcon ? Object(i.h)("hr", null) : Object(i.h)("span", null), this.right.FooterIcon ? Object(i.h)("img", {
                    class: "footer-icon",
                    src: this.right.FooterIcon
                }) : Object(i.h)("span", null))
            }
            ,
            e.prototype.configureViewmodeSpecifics = function(t, e) {
                switch (t) {
                case e.INSIDE:
                    this.left = this.dragRotate,
                    this.center = this.clickMove,
                    this.right = this.props.isHelpCta ? this.zoom : this.play;
                    break;
                case e.OUTSIDE:
                case e.DOLLHOUSE:
                    this.left = this.dragRotate,
                    this.center = this.clickInside,
                    this.right = this.props.isHelpCta ? this.zoom : this.play;
                    break;
                case e.FLOORPLAN:
                    this.left = this.dragMove,
                    this.center = this.clickInside,
                    this.right = this.props.isHelpCta ? this.zoom : this.play
                }
            }
            ,
            e
        }(i.Component), oo = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), ro = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.keys = {
                    shortCta: l.a.MOBILE_SHORT_CTA,
                    move: l.a.MOVE,
                    inside: l.a.INSIDE,
                    rotate: l.a.ROTATE,
                    play: l.a.PLAY,
                    zoom: l.a.ZOOM
                },
                e.clickInside = {
                    Icon: to.gesture.tapInside,
                    Label: e.keys.inside
                },
                e.clickMove = {
                    Icon: to.gesture.tap,
                    Label: e.keys.move
                },
                e.dragRotate = {
                    Icon: to.gesture.drag,
                    Label: e.keys.rotate
                },
                e.dragMove = {
                    Icon: to.gesture.position,
                    Label: e.keys.move
                },
                e.play = {
                    Icon: to.gesture.play,
                    Label: e.keys.play
                },
                e.zoom = {
                    Icon: to.gesture.pinch,
                    Label: e.keys.zoom
                },
                e.left = e.dragRotate,
                e.center = e.clickInside,
                e.right = e.play,
                e
            }
            return oo(e, t),
            e.prototype.render = function() {
                var t = m({
                    mobile: !0
                })
                  , e = this.props
                  , n = e.viewmode
                  , o = e.viewmodes
                  , r = this.context.locale;
                return this.configureViewmodeSpecifics(n, o),
                Object(i.h)("div", {
                    class: m({
                        cta: !0,
                        mobile: !0
                    })
                }, Object(i.h)("h1", {
                    class: t
                }, r.t(this.keys.shortCta)), Object(i.h)("h2", {
                    class: t
                }, r.t(this.left.Label)), Object(i.h)("img", {
                    src: this.left.Icon
                }), Object(i.h)("h2", {
                    class: t
                }, r.t(this.center.Label)), Object(i.h)("img", {
                    src: this.center.Icon
                }), Object(i.h)("h2", {
                    class: t
                }, r.t(this.right.Label)), Object(i.h)("img", {
                    src: this.right.Icon
                }))
            }
            ,
            e.prototype.configureViewmodeSpecifics = function(t, e) {
                switch (t) {
                case e.INSIDE:
                    this.left = this.dragRotate,
                    this.center = this.clickMove,
                    this.right = this.props.isHelpCta ? this.zoom : this.play;
                    break;
                case e.DOLLHOUSE:
                case e.OUTSIDE:
                    this.left = this.dragRotate,
                    this.center = this.clickInside,
                    this.right = this.props.isHelpCta ? this.zoom : this.play;
                    break;
                case e.FLOORPLAN:
                    this.left = this.dragMove,
                    this.center = this.clickInside,
                    this.right = this.props.isHelpCta ? this.zoom : this.play
                }
            }
            ,
            e
        }(i.Component), io = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), so = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, ao = new h.a("cta"), co = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.styles = [Qn.NONE],
                n.modal = "cta",
                n.state = {
                    ctaSource: Xn.TOUR,
                    seenCta: !1,
                    style: n.styles[0]
                };
                try {
                    var o = n.props.sdk;
                    n.onTourStopped = n.onTourStopped.bind(n),
                    n.onTourStarted = n.onTourStarted.bind(n),
                    n.onStart = n.onStart.bind(n),
                    o.on(o.Tour.Event.ENDED, n.onTourStopped),
                    o.on(o.Tour.Event.STOPPED, n.onTourStopped),
                    o.on(o.Tour.Event.STARTED, n.onTourStarted),
                    o.on(o.App.Event.PHASE_CHANGE, n.onStart)
                } catch (t) {
                    ao.debug(t)
                }
                return n
            }
            return io(e, t),
            e.prototype.onStart = function(t) {
                this.showAtStart && t === this.props.sdk.App.Phase.PLAYING && this.props.toggleOpen(this.modal, !0, !1)
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                this.props.showCta && t.immersiveMode && (this.setState({
                    seenCta: !0
                }),
                this.props.toggleOpen(this.modal, !1, !1))
            }
            ,
            e.prototype.componentDidMount = function() {
                var t = this.state.ctaSource
                  , e = parseInt(this.context.settings.tryGetProperty("tourcta", 1), 10);
                !isNaN(e) && e in Qn && (this.styles[0] = e,
                t = Xn.TOUR);
                var n = parseInt(this.context.settings.tryGetProperty("help", 0), 10);
                if (!isNaN(n) && n in Qn && n !== Qn.NONE) {
                    this.styles[0] === Qn.NONE ? this.styles[0] = n : this.styles.unshift(n),
                    t = Xn.HELP;
                    var o = 1 === this.context.settings.tryGetProperty("ts", 0)
                      , r = 1 === this.context.settings.tryGetProperty("qs", 0);
                    o || (r ? this.props.toggleOpen(this.modal, !0, !1) : this.showAtStart = !0)
                }
                this.styles[0] !== Qn.NONE && this.setState({
                    style: this.styles[0],
                    ctaSource: t
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                var t = this.props.sdk;
                t.off(t.Tour.Event.ENDED, this.onTourStopped),
                t.off(t.Tour.Event.STOPPED, this.onTourStopped),
                t.off(t.Tour.Event.STARTED, this.onTourStarted),
                t.off(t.App.Event.PHASE_CHANGE, this.onStart)
            }
            ,
            e.prototype.render = function() {
                var t = {
                    ctaContainer: !0,
                    mobile: this.props.isMobile,
                    showMessage: this.props.showCta,
                    small: this.state.style === Qn.SMALL,
                    helpCta: this.state.ctaSource === Xn.HELP
                };
                return Object(i.h)("div", {
                    id: "cta-container",
                    class: m(t)
                }, this.chooseCtaStyle())
            }
            ,
            e.prototype.chooseCtaStyle = function() {
                var t = this.props
                  , e = t.viewmode
                  , n = t.sdk
                  , o = t.isMobile;
                switch (this.state.style) {
                case Qn.NONE:
                    return null;
                case Qn.SMALL:
                    return Object(i.h)(Zn, {
                        isMobile: this.props.isMobile
                    });
                case Qn.LARGE:
                    return o ? Object(i.h)(ro, {
                        isMobile: o,
                        viewmode: e,
                        viewmodes: n.Mode.Mode,
                        isHelpCta: this.state.ctaSource === Xn.HELP
                    }) : Object(i.h)(no, {
                        viewmode: e,
                        viewmodes: n.Mode.Mode,
                        isHelpCta: this.state.ctaSource === Xn.HELP
                    })
                }
            }
            ,
            e.prototype.onTourStopped = function() {
                this.state.ctaSource !== Xn.TOUR || this.state.seenCta || this.props.toggleOpen(this.modal, !0, !1)
            }
            ,
            e.prototype.onTourStarted = function() {
                this.state.ctaSource === Xn.HELP && (2 === this.styles.length && this.setState({
                    ctaSource: Xn.TOUR,
                    seenCta: !1,
                    style: this.styles[1]
                }),
                this.props.showCta && this.props.toggleOpen(this.modal, !1, !1))
            }
            ,
            e = so([c.a], e)
        }(i.Component);
        !function(t) {
            t[t.NONE = 0] = "NONE",
            t[t.LARGE = 1] = "LARGE",
            t[t.SMALL = 2] = "SMALL"
        }(Qn = Qn || (Qn = {})),
        function(t) {
            t[t.HELP = 0] = "HELP",
            t[t.TOUR = 1] = "TOUR"
        }(Xn = Xn || (Xn = {}));
        var lo, po, uo, ho, fo, bo;
        n(403);
        !function(t) {
            t[t.navigation = 0] = "navigation",
            t[t.moreHelp = 1] = "moreHelp"
        }(lo = lo || (lo = {})),
        function(t) {
            t.left = "left",
            t.middle = "middle",
            t.right = "right"
        }(po = po || (po = {})),
        function(t) {
            t.topInfo = "topInfo",
            t.bigImage = "bigImage",
            t.bottomInfo = "bottomInfo",
            t.keyboard = "keyboard"
        }(uo = uo || (uo = {})),
        function(t) {
            t.desktop = "desktop",
            t.mobile = "mobile"
        }(ho = ho || (ho = {})),
        function(t) {
            t.hlr = "hlr",
            t.dollhouse = "dollhouse",
            t.floors = "floors",
            t.mattertag = "mattertag",
            t.floorplan = "floorplan",
            t.tour = "tour",
            t.inside = "inside",
            t.vr = "vr",
            t.view360 = "view360",
            t.fullscreen = "fullscreen"
        }(fo = fo || (fo = {})),
        function(t) {
            t.landscape = "landscape",
            t.portrait = "portrait"
        }(bo = bo || (bo = {}));
        var yo = ((mo = {})[ho.desktop] = ((_o = {})[po.left] = ((wo = {})[uo.topInfo] = "HELP_DESKTOP_PANORAMA_1A",
        wo[uo.bottomInfo] = "HELP_DESKTOP_PANORAMA_1B",
        wo[uo.bigImage] = to.mouse.dragLeft,
        wo[uo.keyboard] = to.keyboard.leftRight,
        wo),
        _o[po.middle] = ((jo = {})[uo.topInfo] = "HELP_DESKTOP_PANORAMA_2A",
        jo[uo.bottomInfo] = "HELP_DESKTOP_PANORAMA_2B",
        jo[uo.bigImage] = to.mouse.click,
        jo[uo.keyboard] = to.keyboard.upDown,
        jo),
        _o[po.right] = ((Po = {})[uo.topInfo] = "HELP_DESKTOP_PANORAMA_3A",
        Po[uo.bottomInfo] = "HELP_DESKTOP_PANORAMA_3B",
        Po[uo.bigImage] = to.mouse.zoom,
        Po[uo.keyboard] = to.keyboard.zoom,
        Po),
        _o),
        mo[ho.mobile] = ((ko = {})[po.left] = ((Eo = {})[uo.topInfo] = "HELP_MOBILE_PANORAMA_1",
        Eo[uo.bigImage] = to.gesture.drag,
        Eo),
        ko[po.middle] = ((So = {})[uo.topInfo] = "HELP_MOBILE_PANORAMA_2",
        So[uo.bigImage] = to.gesture.tap,
        So),
        ko[po.right] = ((Co = {})[uo.topInfo] = "HELP_MOBILE_3",
        Co[uo.bigImage] = to.gesture.pinch,
        Co),
        ko),
        mo)
          , vo = ((Ro = {})[ho.desktop] = ((Io = {})[po.left] = ((Lo = {})[uo.topInfo] = "HELP_DESKTOP_DOLLHOUSE_1A",
        Lo[uo.bottomInfo] = "HELP_DESKTOP_DOLLHOUSE_1B",
        Lo[uo.bigImage] = to.mouse.dragLeft,
        Lo[uo.keyboard] = to.keyboard.all,
        Lo),
        Io[po.middle] = ((To = {})[uo.topInfo] = "HELP_DESKTOP_DOLLHOUSE_2A",
        To[uo.bigImage] = to.mouse.positionRight,
        To),
        Io[po.right] = ((Ao = {})[uo.topInfo] = "HELP_DESKTOP_DOLLHOUSE_3A",
        Ao[uo.bigImage] = to.mouse.zoom,
        Ao),
        Io),
        Ro[ho.mobile] = ((xo = {})[po.left] = ((Do = {})[uo.topInfo] = "HELP_MOBILE_DOLLHOUSE_1",
        Do[uo.bigImage] = to.gesture.drag,
        Do),
        xo[po.middle] = ((Mo = {})[uo.topInfo] = "HELP_MOBILE_DOLLHOUSE_2",
        Mo[uo.bigImage] = to.gesture.positionTwoFinger,
        Mo),
        xo[po.right] = ((Ho = {})[uo.topInfo] = "HELP_MOBILE_3",
        Ho[uo.bigImage] = to.gesture.pinch,
        Ho),
        xo),
        Ro)
          , Oo = ((No = {})[ho.desktop] = ((Vo = {})[po.left] = ((Bo = {})[uo.topInfo] = "HELP_DESKTOP_FLOORPLAN_1A",
        Bo[uo.bigImage] = to.mouse.positionLeft,
        Bo),
        Vo[po.middle] = ((Go = {})[uo.topInfo] = "HELP_DESKTOP_FLOORPLAN_2A",
        Go[uo.bottomInfo] = "HELP_DESKTOP_FLOORPLAN_2B",
        Go[uo.bigImage] = to.mouse.dragRight,
        Go[uo.keyboard] = to.keyboard.leftRight,
        Go),
        Vo[po.right] = ((Uo = {})[uo.topInfo] = "HELP_DESKTOP_FLOORPLAN_3A",
        Uo[uo.bottomInfo] = "HELP_DESKTOP_FLOORPLAN_3B",
        Uo[uo.bigImage] = to.mouse.zoom,
        Uo[uo.keyboard] = to.keyboard.upDown,
        Uo),
        Vo),
        No[ho.mobile] = ((Fo = {})[po.left] = ((Wo = {})[uo.topInfo] = "HELP_MOBILE_FLOORPLAN_1",
        Wo[uo.bigImage] = to.gesture.position,
        Wo),
        Fo[po.middle] = ((Ko = {})[uo.topInfo] = "HELP_MOBILE_FLOORPLAN_2",
        Ko[uo.bigImage] = to.gesture.dragTwoFinger,
        Ko),
        Fo[po.right] = ((zo = {})[uo.topInfo] = "HELP_MOBILE_3",
        zo[uo.bigImage] = to.gesture.pinch,
        zo),
        Fo),
        No)
          , go = JSON.parse(JSON.stringify(yo));
        go.desktop.middle = ((qo = {})[uo.topInfo] = "HELP_DESKTOP_360_2A",
        qo[uo.bottomInfo] = "HELP_DESKTOP_360_2B",
        qo[uo.bigImage] = to.mouse.clickInside,
        qo[uo.keyboard] = to.keyboard.inside,
        qo),
        go.mobile.middle = ((Yo = {})[uo.topInfo] = "HELP_MOBILE_360_2",
        Yo[uo.bigImage] = to.gesture.tapInside,
        Yo);
        var mo, _o, wo, jo, Po, ko, Eo, So, Co, Ro, Io, Lo, To, Ao, xo, Do, Mo, Ho, No, Vo, Bo, Go, Uo, Fo, Wo, Ko, zo, qo, Yo, Jo = {
            INSIDE: yo,
            OUTSIDE: go,
            FLOORPLAN: Oo,
            DOLLHOUSE: vo
        }, Qo = (n(401),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), Xo = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, $o = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    overflow: !1
                },
                n
            }
            return Qo(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                t.isHelpOpen && !this.props.isHelpOpen && ((this.navigationDiv && this.navigationDiv.clientHeight || 0) / (this.navigationDiv.parentElement && this.navigationDiv.parentElement.clientHeight || 1) > .7 && this.setState({
                    overflow: !0
                }))
            }
            ,
            e.prototype.getAssetObj = function(t) {
                switch (t) {
                case this.props.Modes.DOLLHOUSE:
                    return Jo.DOLLHOUSE[this.props.device];
                case this.props.Modes.FLOORPLAN:
                    return Jo.FLOORPLAN[this.props.device];
                case this.props.Modes.OUTSIDE:
                    return Jo.OUTSIDE[this.props.device];
                case this.props.Modes.INSIDE:
                default:
                    return Jo.INSIDE[this.props.device]
                }
            }
            ,
            e.prototype.buildRows = function() {
                var t = this.getAssetObj(this.props.viewmode)
                  , e = [];
                for (var n in uo) {
                    var o = []
                      , r = [];
                    for (var s in po)
                        if (o.push(this.wrapAsset(t, s, n, !1)),
                        n === uo.bigImage) {
                            var a = !t[s][uo.bottomInfo];
                            r.push(Object(i.h)("div", {
                                class: m(s, "column", {
                                    noDivider: a
                                })
                            }, Object(i.h)("hr", null)))
                        }
                    e.push(Object(i.h)("div", {
                        class: m(n, "row")
                    }, o)),
                    r.length > 0 && this.props.device === ho.desktop && e.push(Object(i.h)("div", {
                        class: m("hr", "row")
                    }, r))
                }
                return e
            }
            ,
            e.prototype.buildMobilePortrait = function() {
                var t = this.getAssetObj(this.props.viewmode)
                  , e = [];
                for (var n in t)
                    for (var o in t[n])
                        e.push(this.wrapAsset(t, n, o, !0));
                return e
            }
            ,
            e.prototype.wrapAsset = function(t, e, n, o) {
                var r = t[e][n]
                  , s = n === uo.bigImage || n === uo.keyboard;
                return Object(i.h)("div", {
                    class: o ? m(n, "row") : m(e, "column")
                }, r && s ? Object(i.h)("img", {
                    src: r
                }) : r && this.context.locale.t(r))
            }
            ,
            e.prototype.render = function() {
                var t, e = this, n = this.props.device === ho.mobile && this.props.orientation === G.a.PORTRAIT, o = m(((t = {
                    navigation: !0,
                    small: this.state.overflow,
                    invisible: !this.props.isNavigationOpen || !this.props.isHelpOpen
                })[this.props.viewmode] = !0,
                t));
                return Object(i.h)("div", {
                    class: o,
                    ref: function(t) {
                        e.navigationDiv = t
                    }
                }, n ? Object(i.h)(M.a, {
                    forceHidden: !1
                }, Object(i.h)("div", {
                    class: "nav-wrapper"
                }, this.buildMobilePortrait())) : this.buildRows())
            }
            ,
            e = Xo([c.a], e)
        }(i.Component), Zo = ((er = {})[fo.hlr] = ((nr = {})[uo.topInfo] = "HELP_MORE_HLR_A",
        nr[uo.bigImage] = "icon-hlr",
        nr[uo.bottomInfo] = "HELP_DESKTOP_MORE_HLR_B",
        nr),
        er[fo.dollhouse] = ((or = {})[uo.topInfo] = "HELP_MORE_DOLLHOUSE_A",
        or[uo.bigImage] = "icon-dollhouse",
        or[uo.bottomInfo] = "HELP_MOBILE_MORE_DOLLHOUSE_B",
        or),
        er[fo.floors] = ((rr = {})[uo.topInfo] = "HELP_MORE_FLOORS_A",
        rr[uo.bigImage] = "icon-floor-controls",
        rr[uo.bottomInfo] = "HELP_DESKTOP_MORE_FLOORS_B",
        rr),
        er[fo.mattertag] = ((ir = {})[uo.topInfo] = "HELP_MORE_MATTERTAG_A",
        ir[uo.bigImage] = to.moreHelp.mattertag,
        ir[uo.bottomInfo] = "HELP_MOBILE_MORE_MATTERTAG_B",
        ir),
        er[fo.tour] = ((sr = {})[uo.topInfo] = "HELP_MORE_TOUR_A",
        sr[uo.bigImage] = "icon-play",
        sr[uo.bottomInfo] = "HELP_DESKTOP_MORE_TOUR_B",
        sr),
        er[fo.inside] = ((ar = {})[uo.topInfo] = "HELP_MORE_INSIDE_A",
        ar[uo.bigImage] = "icon-panorama",
        ar[uo.bottomInfo] = "HELP_MOBILE_MORE_INSIDE_B",
        ar),
        er[fo.vr] = ((cr = {})[uo.topInfo] = "HELP_MORE_VR_A",
        cr[uo.bigImage] = "icon-vr",
        cr[uo.bottomInfo] = "HELP_MOBILE_MORE_VR_B",
        cr),
        er[fo.view360] = ((lr = {})[uo.topInfo] = "HELP_MORE_360_A",
        lr[uo.bigImage] = to.moreHelp.view360,
        lr[uo.bottomInfo] = "HELP_MOBILE_MORE_360_B",
        lr),
        er[fo.floorplan] = ((pr = {})[uo.topInfo] = "HELP_MORE_FLOORPLAN_A",
        pr[uo.bigImage] = "icon-floorplan",
        pr[uo.bottomInfo] = "HELP_MOBILE_FLOORPLAN_B",
        pr),
        er), tr = JSON.parse(JSON.stringify(Zo));
        tr[fo.fullscreen] = ((ur = {})[uo.topInfo] = "HELP_MORE_FULLSCREEN_A",
        ur[uo.bigImage] = "icon-fullscreen",
        ur[uo.bottomInfo] = "HELP_DESKTOP_MORE_FULLSCREEN_B",
        ur),
        tr[fo.dollhouse][uo.bottomInfo] = "HELP_DESKTOP_MORE_DOLLHOUSE_B",
        tr[fo.mattertag][uo.bottomInfo] = "HELP_DESKTOP_MORE_MATTERTAG_B",
        tr[fo.inside][uo.bottomInfo] = "HELP_DESKTOP_MORE_INSIDE_B",
        tr[fo.vr][uo.bottomInfo] = "HELP_DESKTOP_MORE_VR_B",
        tr[fo.view360][uo.bottomInfo] = "HELP_DESKTOP_MORE_360_B",
        tr[fo.floorplan][uo.bottomInfo] = "HELP_DESKTOP_FLOORPLAN_B";
        var er, nr, or, rr, ir, sr, ar, cr, lr, pr, ur, hr, fr = ((hr = {})[ho.desktop] = tr,
        hr[ho.mobile] = Zo,
        hr), dr = (n(399),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), br = function(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator]
              , n = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0),
                    {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        }, yr = [uo.topInfo, uo.bigImage, uo.bottomInfo], vr = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return dr(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                this.props.isHelpOpen && !t.isHelpOpen && this.scrollbars.scrollTo({
                    x: 0,
                    y: 0
                })
            }
            ,
            e.prototype.buildInstructions = function() {
                for (var t, e, n = [], o = this.props.device === ho.desktop ? 5 : this.props.orientation === G.a.LANDSCAPE ? 3 : 2, r = Object.keys(fr[this.props.device]), s = 0; s < r.length; s += o) {
                    try {
                        for (var a = br(yr), c = a.next(); !c.done; c = a.next()) {
                            for (var l = c.value, p = [], u = 0; u < o; u++)
                                if (!(s + u >= r.length)) {
                                    var h = fr[this.props.device][r[s + u]][l]
                                      , f = m(l, r[s + u], {
                                        noAsset: !h
                                    });
                                    switch (l) {
                                    case uo.topInfo:
                                        p.push(Object(i.h)("div", {
                                            class: f
                                        }, this.context.locale.t(h)));
                                        break;
                                    case uo.bigImage:
                                        p.push(Object(i.h)("div", {
                                            class: f
                                        }, h.indexOf(".png") > -1 ? Object(i.h)("img", {
                                            src: h
                                        }) : Object(i.h)("span", {
                                            class: h
                                        }, "floors" === r[s + u] ? Object(i.h)("span", null, "2") : null)));
                                        break;
                                    case uo.bottomInfo:
                                        p.push(Object(i.h)("div", {
                                            class: f
                                        }, this.context.locale.t(h)))
                                    }
                                }
                            n.push(Object(i.h)("div", {
                                class: m("innerRow", l)
                            }, p))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (e = a.return) && e.call(a)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                    n.push(Object(i.h)("div", {
                        class: "rowPadding"
                    }))
                }
                return n.pop(),
                n
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return Object(i.h)("div", {
                    class: m("more-help-wrapper", this.props.device)
                }, Object(i.h)(M.a, {
                    ref: function(e) {
                        return t.scrollbars = e
                    },
                    forceHidden: !this.props.isMoreHelpOpen
                }, Object(i.h)("div", {
                    class: m("more-help", {
                        invisible: !this.props.isMoreHelpOpen
                    })
                }, this.buildInstructions())))
            }
            ,
            e
        }(i.Component), Or = (n(397),
        function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()), gr = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, mr = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.device = n.props.isMobile ? ho.mobile : ho.desktop,
                n.state = {
                    tab: lo.navigation,
                    orientation: Object(G.d)()
                },
                n.setOrientation = function(t) {
                    n.setState({
                        orientation: t
                    })
                }
                ,
                n.handleTabClick = function(t) {
                    return function() {
                        n.setState({
                            tab: t
                        })
                    }
                }
                ,
                n
            }
            return Or(e, t),
            e.prototype.componentDidMount = function() {
                Object(G.c)(G.b.ORIENTATION_CHANGED, this.setOrientation)
            }
            ,
            e.prototype.componentWillUnmount = function() {
                Object(G.e)(G.b.ORIENTATION_CHANGED, this.setOrientation)
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                !t.isHelpOpen && this.props.isHelpOpen && this.setState({
                    tab: lo.navigation
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "help-modal",
                    class: m(this.device, {
                        fadeIn: this.props.isHelpOpen
                    })
                }, Object(i.h)("div", {
                    class: m("tabs", this.state.tab)
                }, Object(i.h)("div", {
                    class: m("navigation-tab", {
                        active: this.state.tab === lo.navigation
                    }),
                    onClick: this.handleTabClick(lo.navigation)
                }, Object(i.h)("span", null, this.context.locale.t(l.a.HELP_NAVIGATION_TAB))), Object(i.h)("div", {
                    class: m("more-help-tab", {
                        active: this.state.tab === lo.moreHelp
                    }),
                    onClick: this.handleTabClick(lo.moreHelp)
                }, Object(i.h)("span", null, this.context.locale.t(l.a.HELP_MORE_HELP_TAB)))), Object(i.h)($o, {
                    isHelpOpen: this.props.isHelpOpen,
                    isNavigationOpen: this.state.tab === lo.navigation,
                    device: this.device,
                    Modes: this.props.allModes,
                    viewmode: this.props.viewmode,
                    orientation: this.state.orientation
                }), Object(i.h)(vr, {
                    isHelpOpen: this.props.isHelpOpen,
                    isMoreHelpOpen: this.state.tab === lo.moreHelp,
                    device: this.device,
                    orientation: this.state.orientation
                }), Object(i.h)(ce, {
                    modalToClose: "help",
                    toggleOpen: this.props.toggleOpen
                }))
            }
            ,
            e = gr([c.a], e)
        }(i.Component), _r = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), wr = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return _r(e, t),
            e.prototype.render = function() {
                var t = this.props.guiState
                  , e = t.openComponents
                  , n = t.viewmode
                  , o = t.immersiveMode
                  , r = t.toggleOpen
                  , s = t.mobile
                  , a = t.sdk;
                return Object(i.h)("div", {
                    id: "modal-container",
                    class: m({
                        fadeOut: o
                    })
                }, Object(i.h)(ve, {
                    isTermsOpen: e.terms,
                    toggleOpen: r
                }), Object(i.h)(Jn, {
                    isVrSelectOpen: e.vrSelect,
                    toggleOpen: r,
                    sdk: a
                }), Object(i.h)(mr, {
                    isHelpOpen: e.help,
                    isMobile: s,
                    toggleOpen: r,
                    viewmode: n,
                    allModes: a.Mode.Mode
                }), Object(i.h)(co, {
                    isMobile: s,
                    sdk: a,
                    immersiveMode: o,
                    viewmode: n,
                    toggleOpen: r,
                    showCta: e.cta
                }))
            }
            ,
            e
        }(i.Component), jr = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), Pr = function(t, e, n, o) {
            var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, n, o);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
            return i > 3 && s && Object.defineProperty(e, n, s),
            s
        }, kr = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    visible: !1,
                    fps: ""
                },
                n.props.sdk.on(n.props.sdk.Stat.Event.FPS, n.OnPerfStat.bind(n)),
                n
            }
            return jr(e, t),
            e.prototype.OnPerfStat = function(t) {
                this.setState({
                    visible: !0,
                    fps: t.toFixed(2) + " fps"
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.props.sdk.off(this.props.sdk.Stat.Event.FPS, this.OnPerfStat.bind(this))
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "perf"
                }, Object(i.h)("p", null, this.state.visible ? this.state.fps : ""))
            }
            ,
            e = Pr([c.a], e)
        }(i.Component);
        n.d(e, "initShowcaseUi", function() {
            return Rr
        });
        var Er = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            ;
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }()
          , Sr = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
                function s(t) {
                    try {
                        c(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(t) {
                    try {
                        c(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(s, a)
                }
                c((o = o.apply(t, e || [])).next())
            }
            )
        }
          , Cr = function(t, e) {
            var n, o, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(o, i[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }
          , Rr = function(t, e, n, o, r) {
            Object(i.render)(Object(i.h)("div", {
                id: "outer"
            }, Object(i.h)(Lr, {
                sdk: r,
                locale: t,
                analytics: e,
                settings: n,
                guiDiv: o
            })), o)
        }
          , Ir = new h.a("showcase-ui")
          , Lr = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.toggleOpenComponents = n.toggleOpenComponents.bind(n),
                n.setGuiState = n.setGuiState.bind(n);
                var o = n.props.settings.tryGetProperty("mls", 0)
                  , r = n.props.settings.tryGetProperty("brand", !0);
                return n.state = {
                    immersiveMode: !1,
                    sdk: e.sdk,
                    viewmode: e.sdk.Mode.Mode.INSIDE,
                    is360: !1,
                    modelSupportsVr: !1,
                    panoMap: {},
                    panoList: [],
                    mobile: !1,
                    tourPlaying: !1,
                    toggleOpen: n.toggleOpenComponents,
                    setGuiState: n.setGuiState,
                    isModalOpen: !1,
                    openComponents: {
                        titleBar: !1,
                        highlightReel: !1,
                        terms: !1
                    },
                    mls: o,
                    branding: r,
                    share: n.isShareEnabled(o, r)
                },
                n.immersiveMode = new ie(n.props.sdk),
                n.immersiveMode.on("immersive mode change", n.onImmersiveModeChange.bind(n)),
                n.setState({
                    mobile: Object(W.j)()
                }),
                n
            }
            return Er(e, t),
            e.prototype.getChildContext = function() {
                return {
                    guiDiv: this.props.guiDiv,
                    settings: this.props.settings,
                    analytics: this.props.analytics,
                    locale: this.props.locale
                }
            }
            ,
            e.prototype.setGuiState = function(t) {
                var e = this;
                return function(n) {
                    var o;
                    e.setState(((o = {})[t] = n,
                    o))
                }
            }
            ,
            e.prototype.componentDidMount = function() {
                return Sr(this, void 0, void 0, function() {
                    var t, e, n, o, r, i;
                    return Cr(this, function(s) {
                        switch (s.label) {
                        case 0:
                            return s.trys.push([0, 2, , 3]),
                            [4, this.props.sdk.Model.getData()];
                        case 1:
                            for (o in t = s.sent(),
                            e = t.sweeps,
                            n = {},
                            e)
                                r = e[o],
                                n[r.uuid] = r;
                            return this.setState({
                                panoMap: n,
                                panoList: e,
                                modelSupportsVr: t.modelSupportsVr
                            }),
                            [3, 3];
                        case 2:
                            return i = s.sent(),
                            Ir.debug(i),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                return Sr(this, void 0, void 0, function() {
                    return Cr(this, function(t) {
                        return this.immersiveMode.destructor(),
                        [2]
                    })
                })
            }
            ,
            e.prototype.onImmersiveModeChange = function(t) {
                this.setState(function(e, n) {
                    var o = e.isModalOpen;
                    if (!t && !o)
                        return {
                            immersiveMode: t
                        };
                    var r = e.openComponents;
                    if (o && !r[j.a.mattertag]) {
                        for (var i in j.a)
                            r[i] = !1;
                        o = !1
                    }
                    return {
                        openComponents: r,
                        isModalOpen: o,
                        immersiveMode: t
                    }
                })
            }
            ,
            e.prototype.isShareEnabled = function(t, e) {
                var n = 0 === t && e
                  , o = this.props.settings.tryGetProperty("enable_social_sharing", !1) && this.props.settings.tryGetProperty("is_public", !1);
                return n && o
            }
            ,
            e.prototype.toggleOpenComponents = function(t, e, n) {
                var o = this;
                void 0 === n && (n = !0),
                this.setState(function(r, i) {
                    var s = r.openComponents;
                    s[t] = e;
                    var a = t in j.a && e;
                    if (a) {
                        if (o.state.tourPlaying && t !== j.a.highlightReel)
                            try {
                                o.props.sdk.Tour.stop()
                            } catch (t) {
                                Ir.debug(t)
                            }
                        if (n)
                            for (var c in j.a)
                                c !== t && (s[c] = !1)
                    }
                    return {
                        openComponents: s,
                        isModalOpen: a = a && -1 === j.b.indexOf(t)
                    }
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    class: this.state.mobile ? "mobile" : "desktop"
                }, Object(i.h)(Yt, {
                    guiState: this.state
                }), Object(i.h)(Ct, {
                    guiState: this.state
                }), Object(i.h)(te, {
                    guiState: this.state
                }), Object(i.h)(wr, {
                    guiState: this.state
                }), Object(i.h)(kr, {
                    sdk: this.props.sdk
                }))
            }
            ,
            e
        }(i.Component)
    }
}]);
