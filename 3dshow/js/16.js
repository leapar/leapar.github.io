(window.webpackJsonp = window.webpackJsonp || []).push([[16], {
    108: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e, n) {
                var o = t.call(this) || this;
                return o.from = e,
                o.to = n,
                o
            }
            return a(e, t),
            e
        }(r.a)
    },
    188: function(t, e, n) {
        "use strict";
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e, n) {
                var o = t.call(this) || this;
                return o.fromMode = n,
                o.toMode = e,
                o.timestamp = Date.now(),
                o
            }
            return a(e, t),
            e
        }(r.a);
        e.a = i
    },
    190: function(t, e, n) {
        "use strict";
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e, n) {
                var o = t.call(this) || this;
                return o.fromSweep = n,
                o.toSweep = e,
                o.timestamp = Date.now(),
                o
            }
            return a(e, t),
            e
        }(r.a);
        e.a = i
    },
    192: function(t, e, n) {
        "use strict";
        var o, r = n(188), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t),
            e
        }(r.a);
        e.a = i
    },
    193: function(t, e, n) {
        "use strict";
        var o, r = n(190), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t),
            e
        }(r.a);
        e.a = i
    },
    196: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var o, r = n(11), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.width = window.innerWidth,
                e.height = window.innerHeight,
                e.aspectRatio = e.width / e.height,
                e.x = 0,
                e.y = 0,
                e
            }
            return a(e, t),
            e.prototype.update = function(t) {
                this.width = t.width,
                this.height = t.height,
                this.aspectRatio = t.width / t.height,
                this.x = t.x,
                this.y = t.y
            }
            ,
            e
        }(r.a)
    },
    198: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e, n) {
                var o = t.call(this) || this;
                return o.key = e,
                o.state = n,
                o
            }
            return a(e, t),
            e
        }(r.a)
    },
    199: function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "a", function() {
            return o
        }),
        function(t) {
            t[t.ZERO = 48] = "ZERO",
            t[t.ONE = 49] = "ONE",
            t[t.TWO = 50] = "TWO",
            t[t.THREE = 51] = "THREE",
            t[t.FOUR = 52] = "FOUR",
            t[t.FIVE = 53] = "FIVE",
            t[t.SIX = 54] = "SIX",
            t[t.SEVEN = 55] = "SEVEN",
            t[t.EIGHT = 56] = "EIGHT",
            t[t.NINE = 57] = "NINE",
            t[t.LEFTARROW = 37] = "LEFTARROW",
            t[t.UPARROW = 38] = "UPARROW",
            t[t.RIGHTARROW = 39] = "RIGHTARROW",
            t[t.DOWNARROW = 40] = "DOWNARROW",
            t[t.A = 65] = "A",
            t[t.B = 66] = "B",
            t[t.C = 67] = "C",
            t[t.D = 68] = "D",
            t[t.E = 69] = "E",
            t[t.F = 70] = "F",
            t[t.G = 71] = "G",
            t[t.H = 72] = "H",
            t[t.I = 73] = "I",
            t[t.J = 74] = "J",
            t[t.K = 75] = "K",
            t[t.L = 76] = "L",
            t[t.M = 77] = "M",
            t[t.N = 78] = "N",
            t[t.O = 79] = "O",
            t[t.P = 80] = "P",
            t[t.Q = 81] = "Q",
            t[t.R = 82] = "R",
            t[t.S = 83] = "S",
            t[t.T = 84] = "T",
            t[t.U = 85] = "U",
            t[t.V = 86] = "V",
            t[t.W = 87] = "W",
            t[t.X = 88] = "X",
            t[t.Y = 89] = "Y",
            t[t.Z = 90] = "Z",
            t[t.SPACE = 32] = "SPACE",
            t[t.RETURN = 13] = "RETURN",
            t[t.SEMICOLON = 186] = "SEMICOLON",
            t[t.PLUSEQUALS = 187] = "PLUSEQUALS",
            t[t.DASHUNDERSCORE = 189] = "DASHUNDERSCORE",
            t[t.OPENBRACKET = 219] = "OPENBRACKET"
        }(o = o || (o = {}))
    },
    201: function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "a", function() {
            return o
        }),
        function(t) {
            t[t.Down = 0] = "Down",
            t[t.Pressed = 1] = "Pressed",
            t[t.Up = 2] = "Up"
        }(o = o || (o = {}))
    },
    211: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return s
        });
        var o, r = n(50), a = (o = Object.setPrototypeOf || {
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
        ), i = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        , s = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.id = "MOVE_TO_SWEEP",
                n.payload = i({}, e),
                n
            }
            return a(e, t),
            e
        }(r.a)
    },
    212: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e, n) {
                var o = t.call(this) || this;
                return o.position = e,
                o.delta = n,
                o
            }
            return a(e, t),
            e
        }(r.a)
    },
    218: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i
        }),
        n.d(e, "a", function() {
            return s
        });
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e, n, o) {
                var r = t.call(this) || this;
                return r.id = e,
                r.position = n,
                r.buttons = o,
                r
            }
            return a(e, t),
            e
        }(r.a), s = function(t) {
            function e(e, n, o, r) {
                var a = t.call(this) || this;
                return a.id = e,
                a.position = n,
                a.button = o,
                a.down = r,
                a
            }
            return a(e, t),
            e
        }(r.a)
    },
    229: function(t, e, n) {
        "use strict";
        n.d(e, "f", function() {
            return a
        }),
        n.d(e, "e", function() {
            return i
        }),
        n.d(e, "d", function() {
            return s
        }),
        n.d(e, "a", function() {
            return u
        }),
        n.d(e, "c", function() {
            return c
        }),
        n.d(e, "g", function() {
            return p
        }),
        n.d(e, "b", function() {
            return l
        });
        var o = n(14)
          , r = .25
          , a = function(t) {
            return function(e) {
                return e !== t
            }
        }
          , i = function(t) {
            return function(e) {
                return -1 !== t.neighbours.indexOf(e.id)
            }
        }
          , s = function(t) {
            return function(e) {
                return t === e || i(t)(e)
            }
        }
          , u = function(t, e, n) {
            return void 0 === n && (n = r),
            function(o) {
                return o.position.clone().sub(t).normalize().dot(e) > n
            }
        }
          , c = function() {
            return function(t) {
                return t.enabled
            }
        }
          , p = function(t) {
            return t.placementType === o.b.MANUAL
        }
          , l = function() {
            return function(t) {
                return t.alignmentType === o.a.ALIGNED
            }
        }
    },
    240: function(t, e, n) {
        "use strict";
        n.d(e, "c", function() {
            return a
        }),
        n.d(e, "b", function() {
            return i
        }),
        n.d(e, "a", function() {
            return s
        });
        var o = -1
          , r = 10
          , a = function(t, e) {
            return void 0 === e && (e = o),
            function(n) {
                return t.distanceToSquared(n.position) * e
            }
        }
          , i = function(t, e) {
            return void 0 === e && (e = o),
            function(n) {
                return t.distanceTo(n.position) * e
            }
        }
          , s = function(t, e, n) {
            return void 0 === n && (n = r),
            function(o) {
                return o.position.clone().sub(t).normalize().dot(e) * n
            }
        }
    },
    241: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i
        }),
        n.d(e, "c", function() {
            return s
        }),
        n.d(e, "d", function() {
            return u
        }),
        n.d(e, "a", function() {
            return c
        });
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t),
            e
        }(r.a), s = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.index = e,
                n
            }
            return a(e, t),
            e
        }(r.a), u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t),
            e
        }(r.a), c = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t),
            e
        }(r.a)
    },
    258: function(t, e, n) {
        "use strict";
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e() {
                return t.call(this) || this
            }
            return a(e, t),
            e
        }(r.a);
        e.a = i
    },
    259: function(t, e, n) {
        "use strict";
        var o, r = n(19), a = (o = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.sweepIds = e,
                n
            }
            return a(e, t),
            e
        }(r.a);
        e.a = i
    },
    51: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var o = n(1)
          , r = function() {
            function t() {}
            return t.UP = new o.a(0,1,0),
            t.DOWN = new o.a(0,-1,0),
            t.LEFT = new o.a(-1,0,0),
            t.RIGHT = new o.a(1,0,0),
            t.FORWARD = new o.a(0,0,-1),
            t.BACK = new o.a(0,0,1),
            t.ZERO = new o.a(0,0,0),
            t
        }()
    },
    677: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r = n(41), a = n(18), i = Object.freeze({
            tours: {
                panAtSnapshot: a.m("kb", 1),
                snapshotPanDuration: a.m("st", 3500),
                snapshotPanAngle: a.m("sspa", 35),
                walkingStageTransitionSpeed: a.m("wts", 2.5),
                rotationOnlyTransitionSpeed: a.m("tsr", 2.5),
                walkingTourIncludeExtraPanosDistance: .4,
                walkingStageMinimumDistance: .8,
                maxWalkingSweepsBetweenSnapshots: 10,
                autoStartDelay: a.m("ts", -1),
                loop: a.m("lp", !1)
            }
        }), s = n(93), u = n(0), c = n(70), p = n(6), l = n(96), h = n(65), f = n(69), d = n(241), y = n(218), v = n(212), w = n(198), g = n(201), m = n(51), b = n(12), S = n(1), _ = n(3), T = n(7), P = n(75), D = n(9), O = n(17), M = n(5), k = n(8), I = n(28), x = n(193), A = n(192), R = n(108), F = n(79), E = n(196), C = (o = Object.setPrototypeOf || {
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
        ), N = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(t) {
                    try {
                        u(o.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function s(t) {
                    try {
                        u(o.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(i, s)
                }
                u((o = o.apply(t, e || [])).next())
            }
            )
        }, G = function(t, e) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [0, r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }, j = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "tours-data",
                e.defaultModes = [p.a.Panorama, p.a.Outdoor],
                e.canChangeTourLocation = function() {
                    var t = e.data.getTourState()
                      , n = e.data.isTourTransitionActive();
                    return !(t !== l.b.Inactive || n || e.viewmodeData.transition && e.viewmodeData.transition.active)
                }
                ,
                e
            }
            return C(e, t),
            e.prototype.init = function(t, e) {
                return N(this, void 0, void 0, function() {
                    var n, o, r, a, i, s, p, d, m, b, S, _, T, P, D, O, M, k = this;
                    return G(this, function(I) {
                        switch (I.label) {
                        case 0:
                            return this.engine = e,
                            e.market.register(this, l.a),
                            [4, e.market.waitForData(c.a)];
                        case 1:
                            return n = I.sent(),
                            o = this,
                            [4, e.getModule(u.Z)];
                        case 2:
                            return o.sweepModule = I.sent(),
                            r = this,
                            [4, e.getModule(u.Da)];
                        case 3:
                            return r.sweepPathModule = I.sent(),
                            a = this,
                            [4, e.getModule(u.b)];
                        case 4:
                            return a.cameraModule = I.sent(),
                            i = this,
                            [4, e.getModule(u.Na)];
                        case 5:
                            return i.viewmodesModule = I.sent(),
                            s = this,
                            [4, e.market.waitForData(f.a)];
                        case 6:
                            return s.viewmodeData = I.sent(),
                            p = this,
                            [4, e.getModule(u.e)];
                        case 7:
                            return p.commonControlsModule = I.sent(),
                            d = this,
                            [4, e.getModule(u.q)];
                        case 8:
                            return d.floorsModule = I.sent(),
                            m = this,
                            [4, this.engine.market.waitForData(E.a)];
                        case 9:
                            return m.canvas = I.sent(),
                            b = this.getFilterModes(n, this.defaultModes),
                            S = this,
                            [4, e.market.waitForData(h.a)];
                        case 10:
                            return S.sweepData = I.sent(),
                            [4, t.activeReelSync.load()];
                        case 11:
                            return _ = I.sent(),
                            T = this,
                            [4, t.snapshotsSync.load()];
                        case 12:
                            return T.snapshots = I.sent(),
                            [4, e.market.waitForData(h.a)];
                        case 13:
                            return P = I.sent(),
                            D = this,
                            [4, e.market.waitForData(F.b)];
                        case 14:
                            return D.playerOptions = I.sent(),
                            this.data = new l.a(this.snapshots,_,b,P.getSweepList(),this.loopTour),
                            e.market.update(this, this.data),
                            _ && (O = Object.keys(_.reel).length,
                            M = this.data.getSnapshotCount(),
                            O !== M && this.log.info(O - M + " items filtered out of reel")),
                            e.subscribe(y.a, function() {
                                k.handleTourInputInterrupt()
                            }),
                            e.subscribe(v.a, function() {
                                k.handleTourInputInterrupt()
                            }),
                            e.subscribe(w.a, function(t) {
                                t.state === g.a.Down && k.handleTourInputInterrupt()
                            }),
                            this.setupTourParameters(t, e),
                            this.setupAutoPlay(t, e),
                            this._tourPan.bind(this),
                            this.tourZoom.bind(this),
                            this.getWalkingStageStageDuration.bind(this),
                            this.setRestrictedSweepsFromList.bind(this),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.onUpdate = function(t) {
                this.data && this.engine.market.update(this, this.data)
            }
            ,
            e.prototype.getData = function(t) {
                return void 0 === t && (t = !0),
                t ? Object.freeze(this.data.clone()) : this.data
            }
            ,
            e.prototype.getFilterModes = function(t, e) {
                var n = t.tryGetProperty("dh", 1) > 0
                  , o = t.tryGetProperty("dollhouse", !0);
                n && o && e.push(p.a.Dollhouse);
                var r = t.tryGetProperty("fp", 1) > 0
                  , a = t.tryGetProperty("floor_plan", !0);
                return r && a && e.push(p.a.Floorplan),
                e
            }
            ,
            e.prototype.handleTourInputInterrupt = function() {
                this.data.getTourState() !== l.b.Inactive && this.stopTour()
            }
            ,
            e.prototype.startTour = function(t) {
                var e = this.data.getTourState()
                  , n = this.data.getSnapshotCount();
                if (!(e !== l.b.Inactive || t && (t < -1 || t >= n - 1))) {
                    var o, a = this.data.getTourCurrentSnapshotIndex();
                    o = t ? t - 1 : a >= n - 1 ? -1 : a,
                    this.tourGenerator = function() {
                        var t, e, a, i;
                        return G(this, function(s) {
                            switch (s.label) {
                            case 0:
                                return o < n - 1 ? (e = 0 === (t = o + 1) ? u.Ja.FadeToBlack : u.Ja.Interpolate,
                                a = this._tourGoTo(t, e),
                                [4, new r.c(a)]) : [3, 9];
                            case 1:
                                return s.sent(),
                                this.panAtSnapshot ? (i = this.data.getTourSnapshotSid(t),
                                this.data.getSnapshot(i).metadata.camera_mode !== p.a.Floorplan ? [3, 3] : [4, new r.c(this.tourZoom())]) : [3, 6];
                            case 2:
                                return s.sent(),
                                [3, 5];
                            case 3:
                                return [4, new r.c(this._tourPan())];
                            case 4:
                                s.sent(),
                                s.label = 5;
                            case 5:
                                return [3, 8];
                            case 6:
                                return [4, new r.b(this.tourPanDuration)];
                            case 7:
                                s.sent(),
                                s.label = 8;
                            case 8:
                                return (o = t) === n - 1 && this.loopTour && (o = -1),
                                [3, 0];
                            case 9:
                                return this.stopTour(),
                                [2]
                            }
                        })
                    }
                    .bind(this),
                    this.engine.startGenerator(this.tourGenerator),
                    this.data.setTourState(l.b.Active),
                    this.engine.broadcast(new d.b)
                }
            }
            ,
            e.prototype.stopTour = function() {
                var t = this;
                if (this.data.getTourState() === l.b.Active) {
                    this.data.setTourState(l.b.StopScheduled),
                    this.data.getTourTransitionType() === l.c.Pan && this.commonControlsModule.stop();
                    var e = this.data.getTourTransitionPromise();
                    this.sweepModule.updateTransitionSpeed(5),
                    e.then(function() {
                        t.engine.stopGenerator(t.tourGenerator),
                        t.stopTourTransitionStageGenerator(),
                        t.data.setTourState(l.b.Inactive),
                        t.engine.market.update(t, t.data),
                        t.engine.broadcast(new d.d),
                        t.data.getTourCurrentSnapshotIndex() !== t.data.getSnapshotCount() - 1 || t.data.isLooping() || t.engine.broadcast(new d.a),
                        t.sweepPathModule.clearRestrictedSweeps()
                    })
                }
            }
            ,
            e.prototype.tourGoNext = function(t) {
                void 0 === t && (t = u.Ja.FadeToBlack);
                var e = this.data.getTourCurrentSnapshotIndex() + 1;
                return e >= this.data.getSnapshotCount() && (e = 0),
                this.tourGoTo(e, t)
            }
            ,
            e.prototype.tourGoPrevious = function(t) {
                void 0 === t && (t = u.Ja.FadeToBlack);
                var e = this.data.getTourCurrentSnapshotIndex();
                e < 0 && (e = 0);
                var n = e - 1;
                return n < 0 && (n = this.data.getSnapshotCount() - 1),
                this.tourGoTo(n, t)
            }
            ,
            e.prototype.tourGoTo = function(t, e) {
                var n = this;
                return void 0 === e && (e = u.Ja.FadeToBlack),
                this.viewmodeData.transition && this.viewmodeData.transition.active ? Promise.reject("Cannot go to tour location during viewmode transition") : this.data.getTourState() !== l.b.Inactive ? Promise.reject("tourGoTo() -> Cannot jump to tour location while tour is active.") : (this.data.setTourState(l.b.Active),
                this.engine.market.update(this, this.data),
                this._tourGoTo(t, e).then(function() {
                    n.data.setTourState(l.b.Inactive)
                }).catch(function() {
                    n.data.setTourState(l.b.Inactive)
                }))
            }
            ,
            e.prototype._tourGoTo = function(t, e) {
                var n = this;
                if (void 0 === e && (e = u.Ja.FadeToBlack),
                !this.data.isTourTransitionActive()) {
                    if (t >= 0 && t < this.data.getSnapshotCount()) {
                        this.useFastTransitions && (e = u.Ja.FadeToBlack);
                        var o = this.data.getTourSnapshotSid(t)
                          , r = this.snapshots[o]
                          , a = null;
                        e === u.Ja.Interpolate && (a = this.tryWalkingTransition(r)),
                        a || (a = this.standardTransition(r, e)),
                        a.then(function() {
                            n.data.setTourCurrentSnapshotByIndex(t),
                            n.engine.broadcast(new d.c(t))
                        });
                        var i = void 0
                          , s = r.metadata.floor
                          , c = s !== this.floorsModule.getData(!1).currentFloor
                          , l = r.metadata.camera_mode;
                        return i = l !== p.a.Panorama && l !== p.a.Outdoor && c ? this.floorsModule.moveToFloor(s, !0).nativePromise() : Promise.resolve(),
                        b.a.all([i, a]).nativePromise()
                    }
                    return Promise.reject("tourGoTo() -> Invalid snapshot index")
                }
                return Promise.reject("tourGoTo() -> Cannot jump to tour location while tour transition is active.")
            }
            ,
            e.prototype.standardTransition = function(t, e) {
                var n = this
                  , o = t.metadata.camera_quaternion
                  , r = t.metadata.scan_id
                  , a = {
                    position: t.metadata.camera_position,
                    rotation: o,
                    sweepID: r,
                    zoom: 7 / 16 * this.canvas.height / t.metadata.ortho_zoom
                }
                  , i = Promise.resolve();
                if (r)
                    if (this.sweepPathModule.clearRestrictedSweeps(),
                    this.viewmodeData.currentMode === p.a.Panorama) {
                        var s = this.sweepData.currentSweep;
                        if (s && r === s) {
                            var c = this.cameraModule.getData(!1).pose.rotation
                              , h = Object(D.c)(c, o);
                            i = h > .01 ? this.cameraModule.moveTo({
                                transitionType: e,
                                pose: {
                                    rotation: o
                                },
                                transitionTime: h / this.rotationOnlyTransitionSpeed * 1e3
                            }).nativePromise() : Promise.resolve()
                        } else
                            i = this.sweepModule.moveToSweep({
                                transitionType: u.Ja.FadeToBlack,
                                sweepId: r,
                                rotation: o
                            }).nativePromise()
                    } else
                        i = this.viewmodesModule.switchToMode(p.a.Panorama, u.Ja.Interpolate, a);
                else {
                    var f = t.metadata.camera_mode;
                    i = f === this.viewmodeData.currentMode ? this.cameraModule.moveTo({
                        transitionType: u.Ja.Interpolate,
                        pose: a
                    }).nativePromise() : this.viewmodesModule.switchToMode(f, u.Ja.Interpolate, a)
                }
                return this.data.activateTourTransition(l.c.Move, i),
                i.then(function() {
                    n.data.deactivateTourTransition()
                }).catch(function() {
                    n.data.deactivateTourTransition()
                })
            }
            ,
            e.prototype.tryWalkingTransition = function(t) {
                var e = t.metadata.scan_id
                  , n = this.sweepData.currentSweep
                  , o = this.data.getTourCurrentSnapshotIndex()
                  , a = null;
                if (o >= 0 && (a = this.data.getTourCurrentSnapshotByIndex(o)),
                !n || !e || e === n || t.is360 || a && a.is360 || this.viewmodeData.currentMode !== p.a.Panorama)
                    return null;
                var i = this.sweepPathModule.findShortestPath(n, e) || [];
                if (i && i.length > 0) {
                    if (i.length > this.maxWalkingSweepsBetweenSnapshots)
                        return null;
                    this.sweepPathModule.addSweepsNearPath(i, this.walkingTourIncludeExtraPanosDistance),
                    i = this.sweepPathModule.filterCloseSweepsFromPath(i, this.walkingStageMinimumDistance);
                    var s = t.metadata.camera_quaternion
                      , c = this.getOrientationsforWalkingStransition(i, s)
                      , h = new b.a;
                    return this.tourTransitionStageGenerator = function() {
                        var t, e, n, o, a, s, p, f, d, y = this;
                        return G(this, function(v) {
                            switch (v.label) {
                            case 0:
                                t = 1,
                                v.label = 1;
                            case 1:
                                return t < i.length ? (e = t - 1,
                                n = i[t],
                                o = i[e],
                                a = c[t],
                                s = Object(D.c)(this.cameraModule.getData(!1).pose.rotation, a),
                                p = this.getWalkingStageStageDuration(o, n, s),
                                f = {
                                    transitionType: u.Ja.Interpolate,
                                    sweepId: n.id,
                                    rotation: a,
                                    transitionTime: p,
                                    easing: P.e
                                },
                                this.setRestrictedSweepsFromList(i, e),
                                d = this.sweepModule.moveToSweep(f),
                                this.data.activateTourTransition(l.c.Move, d),
                                d.nativePromise().then(function() {
                                    y.data.deactivateTourTransition(),
                                    t === i.length - 1 && (y.setRestrictedSweepsFromList(i, t),
                                    h.resolve())
                                }),
                                [4, new r.c(d.nativePromise())]) : [3, 3];
                            case 2:
                                return v.sent(),
                                t++,
                                [3, 1];
                            case 3:
                                return this.stopTourTransitionStageGenerator(),
                                [2]
                            }
                        })
                    }
                    .bind(this),
                    this.engine.startGenerator(this.tourTransitionStageGenerator),
                    h.nativePromise()
                }
                return null
            }
            ,
            e.prototype.setRestrictedSweepsFromList = function(t, e) {
                void 0 === e && (e = 0);
                for (var n = [], o = e; o < t.length; o++)
                    n.push(t[o]);
                this.sweepPathModule.setRestrictedSweeps(n)
            }
            ,
            e.prototype.getWalkingStageStageDuration = function(t, e, n) {
                var o = 1.5 * Math.min(t.position.distanceTo(e.position), 5) / this.walkingStageTransitionSpeed * 1e3
                  , r = n / o;
                return r > .001 && (o += o * ((r - .001) / .001)),
                o
            }
            ,
            e.prototype.stopTourTransitionStageGenerator = function() {
                this.tourTransitionStageGenerator && (this.engine.stopGenerator(this.tourTransitionStageGenerator),
                this.tourTransitionStageGenerator = void 0)
            }
            ,
            e.prototype.getOrientationsforWalkingStransition = function(t, e) {
                for (var n = [], o = 0; o < t.length; o++) {
                    var r = new S.a;
                    this.getLookVectorsForWalkingStageNode(t, o, e, r, !0);
                    var a = (new T.a).lookAt(t[o].position, r, m.a.UP);
                    n[o] = (new _.a).setFromRotationMatrix(a)
                }
                return n
            }
            ,
            e.prototype.getLookVectorsForWalkingStageNode = function(t, e, n, o, r) {
                void 0 === r && (r = !1);
                var a = new S.a
                  , i = new S.a
                  , s = new S.a
                  , u = new S.a
                  , c = new S.a
                  , p = t.length;
                if (e >= p)
                    return !1;
                var l = 1
                  , h = 1;
                i.set(0, 0, 0),
                c.set(0, 0, 0);
                for (var f = null, d = e; d < e + 3 && d < p; d++) {
                    if (f = t[d],
                    this.getOrientationForWalkingStageNode(t, d, n, s),
                    d === e && a.copy(s),
                    d > e) {
                        var y = a.dot(s) < .65;
                        l *= y ? .2 : .75,
                        h *= y ? .2 : .4
                    }
                    var v = d === p - 1 ? 5 : l
                      , w = d === p - 1 ? 1 : h;
                    u.copy(s),
                    s.multiplyScalar(v),
                    i.add(s),
                    c.lerp(f.position, w)
                }
                return i.normalize(),
                o.copy(c),
                r ? o.add(i) : o.copy(i),
                !0
            }
            ,
            e.prototype.getOrientationForWalkingStageNode = function(t, e, n, o) {
                if (e >= t.length)
                    return !1;
                if (e === t.length - 1)
                    o.copy(m.a.FORWARD).applyQuaternion(n);
                else {
                    var r = t[e]
                      , a = t[e + 1];
                    o.copy(a.position).sub(r.position)
                }
                return o.normalize(),
                !0
            }
            ,
            e.prototype.tourZoom = function() {
                var t = this
                  , e = this.commonControlsModule.startZoomTransition(this.tourPanDuration, -5e-4);
                return this.data.activateTourTransition(l.c.Zoom, e),
                e.then(function() {
                    t.data.deactivateTourTransition()
                })
            }
            ,
            e.prototype._tourPan = function(t) {
                var e = this;
                void 0 === t && (t = !1);
                var n = -this.tourPanSpeed
                  , o = this.data.getTourCurrentSnapshotIndex();
                if (o < this.data.getSnapshotCount() - 1) {
                    var r = o + 1
                      , a = this.data.getTourSnapshotSid(o)
                      , i = this.data.getTourSnapshotSid(r)
                      , u = this.data.getSnapshot(a)
                      , c = this.data.getSnapshot(i);
                    if (u && c && u.metadata.scan_id && c.metadata.scan_id && u.metadata.camera_quaternion && c.metadata.camera_position && u.metadata.camera_position) {
                        var p = m.a.FORWARD.clone().applyQuaternion(u.metadata.camera_quaternion)
                          , h = c.metadata.camera_position
                          , f = u.metadata.camera_position
                          , d = h.clone().sub(f).normalize();
                        d.lengthSq() < s.a.epsilon && (d = m.a.FORWARD.clone().applyQuaternion(c.metadata.camera_quaternion)),
                        p.cross(d).y > 0 && (n = -n)
                    }
                }
                var y = this.commonControlsModule.startRotateTransition(this.tourPanDuration, new O.a(n,0));
                return this.data.activateTourTransition(l.c.Pan, y),
                y.then(function() {
                    e.data.deactivateTourTransition()
                })
            }
            ,
            e.prototype.setupAutoPlay = function(t, e) {
                var n = this
                  , o = 1e3 * (t.tourAutoStartDelay || i.tours.autoStartDelay)
                  , r = function() {
                    var t = !0
                      , r = function() {
                        t = !1
                    };
                    e.subscribe(R.a, r),
                    e.subscribe(A.a, r),
                    e.subscribe(x.a, r),
                    setTimeout(function() {
                        t && n.startTour(),
                        e.unsubscribe(R.a, r),
                        e.unsubscribe(A.a, r),
                        e.unsubscribe(x.a, r)
                    }, o)
                };
                if (o >= 0) {
                    var a = e.market.tryGetData(k.c);
                    a && a.phase === k.a.PLAYING ? r() : e.subscribe(I.a, function(t) {
                        t.phase === k.a.PLAYING && r()
                    })
                }
            }
            ,
            e.prototype.setupTourParameters = function(t, e) {
                if (this.loopTour = i.tours.loop,
                this.tourPanDuration = t.snapshotPanDuration || i.tours.snapshotPanDuration,
                this.tourPanAngle = t.tourPanAngle || i.tours.snapshotPanAngle,
                this.tourPanSpeed = M.a.degToRad(this.tourPanAngle) / this.tourPanDuration,
                this.walkingStageTransitionSpeed = t.walkingStageTransitionSpeed || i.tours.walkingStageTransitionSpeed,
                this.rotationOnlyTransitionSpeed = t.rotationOnlyTransitionSpeed || i.tours.rotationOnlyTransitionSpeed,
                this.walkingTourIncludeExtraPanosDistance = t.walkingTourIncludeExtraPanosDistance || i.tours.walkingTourIncludeExtraPanosDistance,
                this.walkingStageMinimumDistance = t.walkingStageMinimumDistance || i.tours.walkingStageMinimumDistance,
                this.maxWalkingSweepsBetweenSnapshots = t.maxWalkingSweepsBetweenSnapshots || i.tours.maxWalkingSweepsBetweenSnapshots,
                this.panAtSnapshot = t.panAtSnapshot || i.tours.panAtSnapshot,
                void 0 !== t.useFastTransitions)
                    this.useFastTransitions = t.useFastTransitions;
                else if (this.playerOptions) {
                    var n = this.playerOptions.options.fast_transitions;
                    this.useFastTransitions = void 0 !== n && n
                } else
                    this.useFastTransitions = !1
            }
            ,
            e
        }(u.Ia);
        e.default = j
    },
    693: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r = n(1), a = n(0), i = n(65), s = function() {
            function t(t) {
                this.comparator = t,
                this.nodes = []
            }
            return t.prototype.push = function(t) {
                return this.nodes.push(t),
                this.siftdown(0, this.nodes.length - 1)
            }
            ,
            t.prototype.pop = function() {
                var t, e;
                return this.nodes.length && (t = this.nodes.pop()) ? (this.nodes.length ? (e = this.nodes[0],
                this.nodes[0] = t,
                this.siftup(0)) : e = t,
                e) : null
            }
            ,
            t.prototype.peek = function() {
                return this.nodes[0]
            }
            ,
            t.prototype.contains = function(t) {
                return -1 !== this.nodes.indexOf(t)
            }
            ,
            t.prototype.replace = function(t) {
                if (this.nodes.length) {
                    var e = this.nodes[0];
                    return this.nodes[0] = t,
                    this.siftup(0),
                    e
                }
                return null
            }
            ,
            t.prototype._pushpop = function(t, e, n) {
                var o, r = n || this.defaultCompare;
                return t.length && r(t[0], e) < 0 && (e = (o = [t[0], e])[0],
                t[0] = o[1],
                this._siftup(t, 0, r)),
                e
            }
            ,
            t.prototype.pushpop = function(t) {
                return this._pushpop(this.nodes, t, this.comparator)
            }
            ,
            t.prototype._heapify = function(t, e) {
                var n, o, r, a, i, s, u, c, p = Math.floor(t.length / 2);
                for (u = [],
                o = 0,
                a = (s = function() {
                    for (c = [],
                    r = 0,
                    i = p; 0 <= i ? r < i : r > i; 0 <= i ? r++ : r--)
                        c.push(r);
                    return c
                }
                .apply(this).reverse()).length; o < a; o++)
                    n = s[o],
                    u.push(this._siftup(t, n, e));
                return u
            }
            ,
            t.prototype.heapify = function() {
                var t, e, n, o, r, a, i, s, u = Math.floor(this.nodes.length / 2);
                for (i = [],
                e = 0,
                o = (a = function() {
                    for (s = [],
                    n = 0,
                    r = u; 0 <= r ? n < r : n > r; 0 <= r ? n++ : n--)
                        s.push(n);
                    return s
                }
                .apply(this).reverse()).length; e < o; e++)
                    t = a[e],
                    i.push(this.siftup(t));
                return i
            }
            ,
            t.prototype.updateItem = function(t) {
                var e = this.nodes.indexOf(t);
                return -1 === e ? null : (this.siftdown(0, e),
                this.siftup(e))
            }
            ,
            t.prototype.clear = function() {
                return this.nodes = []
            }
            ,
            t.prototype.empty = function() {
                return 0 === this.nodes.length
            }
            ,
            t.prototype.size = function() {
                return this.nodes.length
            }
            ,
            t.prototype.clone = function() {
                var e = new t(this.comparator);
                return e.nodes = this.nodes.slice(0),
                e
            }
            ,
            t.prototype.toArray = function() {
                return this.nodes.slice(0)
            }
            ,
            t.prototype.insert = function(t) {
                return this.push(t)
            }
            ,
            t.prototype.top = function() {
                return this.peek()
            }
            ,
            t.prototype.front = function() {
                return this.peek()
            }
            ,
            t.prototype.has = function(t) {
                return this.contains(t)
            }
            ,
            t.prototype.copy = function() {
                return this.clone()
            }
            ,
            t.prototype.nlargest = function(t) {
                var e, n, o, r, a;
                if (!(n = this.nodes.slice(0, t)).length)
                    return n;
                for (this._heapify(n, this.comparator),
                o = 0,
                r = (a = this.nodes.slice(t)).length; o < r; o++)
                    e = a[o],
                    this._pushpop(n, e, this.comparator);
                return n.sort(this.comparator).reverse()
            }
            ,
            t.prototype.defaultCompare = function(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
            ,
            t.prototype._siftdown = function(t, e, n, o) {
                var r, a, i, s = o || this.defaultCompare;
                for (r = t[n]; n > e && s(r, a = t[i = n - 1 >> 1]) < 0; )
                    t[n] = a,
                    n = i;
                return t[n] = r
            }
            ,
            t.prototype.siftdown = function(t, e) {
                return this._siftdown(this.nodes, t, e, this.comparator)
            }
            ,
            t.prototype._siftup = function(t, e, n) {
                var o, r, a, i, s, u = n || this.defaultCompare;
                for (r = t.length,
                s = e,
                a = t[e],
                o = 2 * e + 1; o < r; )
                    (i = o + 1) < r && !(u(t[o], t[i]) < 0) && (o = i),
                    t[e] = t[o],
                    o = 2 * (e = o) + 1;
                return t[e] = a,
                this._siftdown(t, s, e, u)
            }
            ,
            t.prototype.siftup = function(t) {
                return this._siftup(this.nodes, t, this.comparator)
            }
            ,
            t
        }(), u = function(t) {
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
        };
        function c(t, e) {
            try {
                for (var n = u(e), o = n.next(); !o.done; o = n.next()) {
                    if (o.value === t)
                        return !0
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (a = n.return) && a.call(n)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return !1;
            var r, a
        }
        !function(t) {
            t[t.Success = 0] = "Success",
            t[t.NoPath = 1] = "NoPath",
            t[t.Timeout = 2] = "Timeout"
        }(o = o || (o = {}));
        function p(t) {
            if (void 0 !== t.parent) {
                var e = p(t.parent);
                return e.push(t.data),
                e
            }
            return [t.data]
        }
        function l(t) {
            return t.toString()
        }
        function h(t, e) {
            if (t.f && e.f)
                return t.f - e.f;
            throw new Error('heapComparator() -> Property "f" is undefined.')
        }
        var f, d = Object.freeze({
            sweeps: {
                maxNeighborDistance: 5
            }
        }), y = n(259), v = n(258), w = (f = Object.setPrototypeOf || {
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
            f(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), g = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(t) {
                    try {
                        u(o.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function s(t) {
                    try {
                        u(o.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(i, s)
                }
                u((o = o.apply(t, e || [])).next())
            }
            )
        }, m = function(t, e) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [0, r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }, b = function(t) {
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
        }, S = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "sweep-path",
                e
            }
            return w(e, t),
            e.prototype.init = function(t, e) {
                return g(this, void 0, void 0, function() {
                    var n;
                    return m(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return this.engine = e,
                            n = this,
                            [4, e.market.waitForData(i.a)];
                        case 1:
                            return n.sweepData = o.sent(),
                            this.validNeighbors = {},
                            this.maxNeighborDistance = t.maxNeighborDistance || d.sweeps.maxNeighborDistance,
                            this.buildDistanceMap(),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.setRestrictedSweepsById = function(t) {
                this.restrictedSweeps = [],
                this.restrictedSweeps.push.apply(t),
                this.engine.broadcast(new y.a(this.restrictedSweeps))
            }
            ,
            e.prototype.setRestrictedSweeps = function(t) {
                this.restrictedSweeps = [];
                try {
                    for (var e = b(t), n = e.next(); !n.done; n = e.next()) {
                        var o = n.value;
                        this.restrictedSweeps.push(o.id)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (a = e.return) && a.call(e)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                var r, a;
                this.engine.broadcast(new y.a(this.restrictedSweeps))
            }
            ,
            e.prototype.clearRestrictedSweeps = function() {
                this.restrictedSweeps = void 0,
                this.engine.broadcast(new v.a)
            }
            ,
            e.prototype.getValidNeighbors = function(t, e, n, o, r) {
                var a, i, s;
                if (e && (a = this.validNeighbors[t]),
                !a) {
                    a = [],
                    n && (this.validNeighbors[t] = a);
                    var u = this.sweepData.getSweep(t)
                      , c = u.neighbours;
                    try {
                        for (var p = b(c), l = p.next(); !l.done; l = p.next()) {
                            var h = l.value
                              , f = this.sweepData.getSweep(h)
                              , d = u.position.distanceTo(f.position);
                            if (!(d > this.maxNeighborDistance)) {
                                var y = !0;
                                if (r) {
                                    var v = f.position.clone().sub(u.position).normalize();
                                    y = 0 === r(u.position, v, d).length
                                }
                                y && a.push(f)
                            }
                        }
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (s = p.return) && s.call(p)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                }
                return a
            }
            ,
            e.prototype.findShortestPath = function(t, e, n, r) {
                var a = this;
                void 0 === r && (r = 5e3);
                var i = this.sweepData.getSweep(t)
                  , f = this.sweepData.getSweep(e)
                  , d = function(t) {
                    void 0 === t.timeout && (t.timeout = 1 / 0);
                    var e = t.hash || l
                      , n = {
                        data: t.start,
                        g: 0,
                        h: t.heuristic(t.start)
                    }
                      , r = n;
                    n.f = n.h;
                    var a = []
                      , i = new s(h)
                      , f = {};
                    i.push(n),
                    f[e(n.data)] = n;
                    for (var d, y, v, w, g = Date.now(); i.size(); ) {
                        if (Date.now() - g > t.timeout)
                            return {
                                status: o.Timeout,
                                cost: r.g,
                                path: p(r)
                            };
                        var m = i.pop();
                        if (delete f[e(m.data)],
                        m && t.isEnd(m.data))
                            return {
                                status: o.Success,
                                cost: m.g,
                                path: p(m)
                            };
                        c(d = e(m.data), y = a) || y.push(d);
                        var b = t.neighbor(m.data);
                        try {
                            for (var S = u(b), _ = S.next(); !_.done; _ = S.next()) {
                                var T = _.value;
                                if (!c(e(T), a)) {
                                    var P = m.g + t.distance(m.data, T)
                                      , D = f[e(T)]
                                      , O = !1;
                                    if (void 0 === D)
                                        D = {
                                            data: T,
                                            g: 0,
                                            h: 0,
                                            f: 0
                                        },
                                        f[e(T)] = D;
                                    else {
                                        if (D.g < P)
                                            continue;
                                        O = !0
                                    }
                                    D.parent = m || void 0,
                                    D.g = P,
                                    D.h = t.heuristic(T),
                                    D.f = P + D.h,
                                    D.h < r.h && (r = D),
                                    O ? i.heapify() : i.push(D)
                                }
                            }
                        } catch (t) {
                            v = {
                                error: t
                            }
                        } finally {
                            try {
                                _ && !_.done && (w = S.return) && w.call(S)
                            } finally {
                                if (v)
                                    throw v.error
                            }
                        }
                    }
                    return {
                        status: o.NoPath,
                        cost: r.g,
                        path: p(r)
                    }
                }({
                    start: i,
                    isEnd: function(t) {
                        return t === f
                    },
                    neighbor: function(t) {
                        return a.getValidNeighbors(t.id, !0, !0, a.maxNeighborDistance, n)
                    },
                    distance: function(t, e) {
                        return a.distanceMap[t.id][e.id]
                    },
                    heuristic: function(t, e) {
                        return 1
                    },
                    hash: function(t) {
                        return t.id
                    },
                    timeout: r
                });
                return d.status === o.Success ? d.path : null
            }
            ,
            e.prototype.addSweepsNearPath = function(t, e) {
                for (var n, o, a = new r.a, i = new r.a, s = new r.a, u = new r.a, c = new r.a, p = new r.a, l = [], h = new r.a, f = function(t, e, n) {
                    return s.copy(e).sub(t),
                    s.dot(n)
                }, d = function(t, e) {
                    return f(h, t.position, a) - f(h, e.position, a)
                }, y = 0; y < t.length - 1; ) {
                    var v = t[y].id
                      , w = t[y + 1].id
                      , g = this.sweepData.getSweep(v)
                      , m = this.sweepData.getSweep(w);
                    h.copy(g.position),
                    l.length = 0,
                    a.copy(m.position).sub(h).normalize();
                    var S = this.findConnectedSweeps(g, this.maxNeighborDistance)
                      , _ = this.findConnectedSweeps(m, this.maxNeighborDistance)
                      , T = S.concat(_);
                    try {
                        for (var P = b(T), D = P.next(); !D.done; D = P.next()) {
                            var O = D.value
                              , M = s.copy(O.position).sub(h).dot(a);
                            if (M > 0)
                                if (c.copy(a),
                                c.multiplyScalar(M),
                                u.copy(s),
                                u.sub(c),
                                u.length() < e)
                                    i.copy(a).negate(),
                                    p.copy(O.position).sub(m.position),
                                    p.dot(i) > 0 && l.push(O)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            D && !D.done && (o = P.return) && o.call(P)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    if (l.length > 0) {
                        l.sort(d);
                        for (var k = t.length + l.length - 1; k >= y + l.length; k--)
                            t[k] = t[k - l.length];
                        for (var I = 0; I < l.length; I++)
                            t[I + y + 1] = l[I]
                    }
                    y += l.length + 1
                }
            }
            ,
            e.prototype.findConnectedSweeps = function(t, e) {
                var n = [];
                return this._findConnectedSweeps(t, t, e, n, {}),
                n
            }
            ,
            e.prototype._findConnectedSweeps = function(t, e, n, o, r) {
                var a, i, s = this.getValidNeighbors(t.id, !0, !0, 2 * n);
                try {
                    for (var u = b(s), c = u.next(); !c.done; c = u.next()) {
                        var p = c.value;
                        if (!r[p.id])
                            p.position.distanceTo(e.position) < n && (o.push(p),
                            r[p.id] = !0,
                            this._findConnectedSweeps(p, e, n, o, r))
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (i = u.return) && i.call(u)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
            }
            ,
            e.prototype.filterCloseSweepsFromPath = function(t, e) {
                var n, o, r = [], a = null, i = !1;
                try {
                    for (var s = b(t), u = s.next(); !u.done; u = s.next()) {
                        var c = u.value;
                        i = a && c.position.distanceTo(a.position) < e || !1,
                        a && i || (r.push(c),
                        a = c)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (o = s.return) && o.call(s)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
                return r.length < 2 ? t : (i && t.length > 1 && (r[r.length - 1] = t[t.length - 1]),
                r)
            }
            ,
            e.prototype.buildDistanceMap = function() {
                var t = this
                  , e = {}
                  , n = new r.a(0,0,0);
                this.sweepData.iterate(function(o) {
                    var r, a, i = {}, s = o.neighbours;
                    try {
                        for (var u = b(s), c = u.next(); !c.done; c = u.next()) {
                            var p = c.value
                              , l = t.sweepData.getSweep(p);
                            n.copy(o.floorPosition).sub(l.floorPosition);
                            var h = Math.max(0, Math.abs(n.y) - .2)
                              , f = Math.sqrt(n.x * n.x + n.z * n.z)
                              , d = void 0;
                            h > 0 ? (h = Math.pow(4 * h, 2),
                            f = Math.pow(f, 2),
                            d = Math.sqrt(h * h + f * f)) : d = n.length(),
                            i[l.id] = d
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (a = u.return) && a.call(u)
                        } finally {
                            if (r)
                                throw r.error
                        }
                    }
                    e[o.id] = i
                }),
                this.distanceMap = e
            }
            ,
            e
        }(a.Da);
        e.default = S
    },
    717: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r, a = n(69), i = n(0), s = n(65), u = n(6), c = n(1), p = n(77), 
        l = n(198), h = n(199), f = n(201), d = n(212), y = n(51), v = n(229), 
        w = n(240), g = n(192), m = n(96), b = n(4), 
        mobile = n(18),
        
        
        S = (o = Object.setPrototypeOf || {
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
        ), _ = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(t) {
                    try {
                        u(o.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function s(t) {
                    try {
                        u(o.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(i, s)
                }
                u((o = o.apply(t, e || [])).next())
            }
            )
        }, T = function(t, e) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [0, r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }, P = new b.a("showcase-navigation"), D = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "navigation",
                e.DOUBLE_CLICK_TIME = 500,
                e.lastClick = 0,
                e
            }
            return S(e, t),
            e.prototype.init = function(t, n) {
                return _(this, void 0, void 0, function() {
                    var o, r, h, v, w, b, S, _ = this;
                    return T(this, function(T) {
                        switch (T.label) {
                        case 0:
                            return o = this,
                            [4, n.getModule(i.Z)];
                        case 1:
                            return o.sweepModule = T.sent(),
                            r = this,
                            [4, n.market.waitForData(s.a)];
                        case 2:
                            return r.sweepData = T.sent(),
                            h = this,
                            [4, n.getModule(i.Na)];
                        case 3:
                            return h.viewmodesModule = T.sent(),
                            v = this,
                            [4, n.market.waitForData(a.a)];
                        case 4:
                            return v.viewmodeData = T.sent(),
                            w = this,
                            [4, n.getModule(i.b)];
                        case 5:
                            return w.cameraModule = T.sent(),
                            b = this,
                            [4, n.getModule(i.q)];
                        case 6:
                            return b.floorsModule = T.sent(),
                            n.subscribe(p.a, function(t) {
                                _.handleMeshClick(t.hitPoint)
                            }),
                            n.subscribe(p.d, function(t) {
                                _.viewmodeData.isPano() && _.tryNavigateInLocalDirection(y.a.FORWARD)
                            }),
                            n.subscribe(l.a, function(t) {
                                if (_.viewmodeData.isPano() && t.state === f.a.Down) {
                                    var n = e.inputMap[t.key];
                                    n && _.tryNavigateInLocalDirection(n)
                                }
                            }),
                            t.hasOwnProperty("enableWheel") && t.enableWheel && (S = new c.a,
                            n.subscribe(d.a, function(t) {
                                _.viewmodeData.isPano() && (S.set(0, 0, Math.sign(t.delta.y)),
                                _.tryNavigateInLocalDirection(S))
                            })),
                            n.subscribe(g.a, function(t) {
                                if (t.toMode === u.a.Dollhouse) {
                                    var e = n.market.tryGetData(m.a);
                                    e && e.isTourActive() || _.floorsModule.moveToFloor(-1, !0, 0)
                                }
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.handleMeshClick = function(t) {
                performance.now() - this.lastClick <= this.DOUBLE_CLICK_TIME ? this.onDoubleClick(t) : this.onSingleClick(t),
                this.lastClick = performance.now()
            }
            ,
            e.prototype.onSingleClick = function(t) {
                if (this.viewmodeData.currentMode === u.a.Panorama)
                    try {
                        this.navigateInDirection(t.clone().sub(this.cameraModule.getData().pose.position))
                    } catch (t) {
                        P.debug(t)
                    }
                else
                    this.navigateToPanoNearPoint(t)
            }
            ,
            e.prototype.onDoubleClick = function(t) {
                this.navigateToPanoNearPoint(t)
            }
            ,
            e.prototype.navigateToPanoNearPoint = function(t) {
                if (this.viewmodeData.currentMode !== u.a.Panorama && this.viewmodesModule.canSwitchViewMode(u.a.Panorama)) {
                    var e = this.sweepData.getClosestSweep(t, !0)
                      , n = e ? {
                        sweepID: e.id
                    } : void 0;
                    this.viewmodesModule.switchToMode(u.a.Panorama, i.Ja.Interpolate, n, i.l)
                }
            }
            ,
            e.prototype.tryNavigateInLocalDirection = function(t) {
                try {
                    this.navigateInLocalDirection(t)
                } catch (t) {
                    P.debug(t)
                }
            }
            ,
            e.prototype.navigateInLocalDirection = function(t) {
                var e = this.cameraModule.getData().pose.rotation;
                return this.navigateInDirection(t.clone().applyQuaternion(e))
            }
            ,
            e.prototype.navigateInDirection = function(t) {
                if (this.viewmodeData.currentMode !== u.a.Panorama)
                    throw Error("Cannot navigate between panos when not in Panorama mode");
                var e = this.sweepData.currentSweep;
                if (!e)
                    throw Error("Not at a valid sweep");
                if (!this.sweepModule.canMoveToSweep())
                    throw Error("Cannot move while in a transition");
                var n = this.sweepData.getSweep(e)
                  , o = [v.f(n), v.c(), v.e(n), v.a(n.position, t)]
                  , r = [w.a(n.position, t), w.b(n.position)]
                  , a = this.sweepData.sortByScore(o, r);

                  /*f.copy(i).sub(_.position).normalize();
                  x = _.position.distanceTo(i);//
                  console.log(_);*/


                  //开始拾取 判断是否穿墙
                  //https://segmentfault.com/a/1190000010490845
                /**
                 * 
                 * Raycaster( origin, direction, near, far ) 
                    origin — 射线的起点向量。
                    direction — 射线的方向向量，应该归一标准化。
                    near — 所有返回的结果应该比 near 远。Near不能为负，默认值为0。
                    far — 所有返回的结果应该比 far 近。Far 不能小于 near，默认值为无穷大
                 */

                
                
                 if(!mobile.j()) {
                    var btime = performance.now();
                    this.floorsModule.raycaster.enableAllGroups();
                    var casters = this.floorsModule.raycaster.cast(n.position, a[0].sweep.position.clone().sub(n.position).normalize(),true);
    
                   // console.log(performance.now() - btime);
                    if(casters.length > 0 ) {
                        if(casters[0].distance < n.position.distanceTo(a[0].sweep.position)) {
                        return;
                        }
                    }
                 }

                
               
                  
                if (a.length > 0)
                    return this.sweepModule.moveToSweep({
                        transitionType: i.Ja.Interpolate,
                        sweepId: a[0].sweep.id
                    }).nativePromise();
                throw Error("Cannot move in that direction")
            }
            ,
            e.inputMap = ((r = {})[h.a.W] = y.a.FORWARD,
            r[h.a.A] = y.a.LEFT,
            r[h.a.S] = y.a.BACK,
            r[h.a.D] = y.a.RIGHT,
            r[h.a.UPARROW] = y.a.FORWARD,
            r[h.a.DOWNARROW] = y.a.BACK,
            r),
            e
        }(i.L);
        e.default = D
    },
    718: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r = n(0), a = n(79), i = n(30), s = (o = Object.setPrototypeOf || {
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
        ), u = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(t) {
                    try {
                        u(o.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function s(t) {
                    try {
                        u(o.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(i, s)
                }
                u((o = o.apply(t, e || [])).next())
            }
            )
        }, c = function(t, e) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [0, r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }, p = function(t) {
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
        }, l = ["enable_social_sharing", "account_social_sharing_default", "is_public", "is_vr"], h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "showcase-settings",
                e
            }
            return s(e, t),
            e.prototype.init = function(t, e) {
                return u(this, void 0, void 0, function() {
                    var n, o, s, u, h, f, d, y, v, w, g, m, b, S, _;
                    return c(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, t.optionsSync.load()];
                        case 1:
                            return n = c.sent(),
                            e.market.register(this, a.b, n),
                            [4, e.getModule(i.default)];
                        case 2:
                            return o = c.sent(),
                            [4, t.modelDetailsStore.read()];
                        case 3:
                            s = c.sent(),
                            u = Object.keys(n.options);
                            try {
                                for (h = p(u),
                                f = h.next(); !f.done; f = h.next())
                                    g = f.value,
                                    d = n.options[g],
                                    o.hasProperty(g) ? (y = o.getProperty(g),
                                    o.updateSetting(g, d && y)) : o.registerSetting("player_options", g, d)
                            } catch (t) {
                                m = {
                                    error: t
                                }
                            } finally {
                                try {
                                    f && !f.done && (b = h.return) && b.call(h)
                                } finally {
                                    if (m)
                                        throw m.error
                                }
                            }
                            try {
                                for (v = p(l),
                                w = v.next(); !w.done; w = v.next())
                                    g = w.value,
                                    o.registerSetting("ModelData", g, !!s[g])
                            } catch (t) {
                                S = {
                                    error: t
                                }
                            } finally {
                                try {
                                    w && !w.done && (_ = v.return) && _.call(v)
                                } finally {
                                    if (S)
                                        throw S.error
                                }
                            }
                            return o.registerSetting("player_options", "TransitionType", r.Ja.Interpolate),
                            [2]
                        }
                    })
                })
            }
            ,
            e
        }(r.V);
        e.default = h
    },
    719: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r = n(0), a = n(65), i = n(6), s = n(20), u = n(8), c = n(14), p = n(46), l = n(70), h = n(211), f = n(90), d = (o = Object.setPrototypeOf || {
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
        ), y = function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, a) {
                function i(t) {
                    try {
                        u(o.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function s(t) {
                    try {
                        u(o.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    t.done ? r(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(i, s)
                }
                u((o = o.apply(t, e || [])).next())
            }
            )
        }, v = function(t, e) {
            var n, o, r, a, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                o && (r = o[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(r = r.call(o, a[1])).done)
                                    return r;
                                switch (o = 0,
                                r && (a = [0, r.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    r = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = a;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                o = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }, w = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var o, r, a = n.call(t), i = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(o = a.next()).done; )
                    i.push(o.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (n = a.return) && n.call(a)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }, g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "showcase-start",
                e
            }
            return d(e, t),
            e.prototype.init = function(t, e) {
                return y(this, void 0, void 0, function() {
                    var t, n, o, i, c, p, h, f, d = this;
                    return v(this, function(y) {
                        switch (y.label) {
                        case 0:
                            return this.commandBinder = e.commandBinder,
                            [4, e.market.waitForData(l.a)];
                        case 1:
                            return t = y.sent(),
                            n = t.tryGetProperty("quickstart", !1),
                            o = this,
                            [4, e.getModule(s.default)];
                        case 2:
                            return o.appPhaseModule = y.sent(),
                            i = this,
                            [4, e.market.waitForData(a.a)];
                        case 3:
                            return i.sweepData = y.sent(),
                            c = this,
                            [4, e.getModule(r.b)];
                        case 4:
                            return c.cameraModule = y.sent(),
                            p = this,
                            [4, e.getModule(r.Oa)];
                        case 5:
                            return p.renderer = y.sent(),
                            [4, e.getModule(r.c)];
                        case 6:
                            return h = y.sent(),
                            f = h.getStartPose(),
                            (n ? this.doQuickStart(f, e) : this.doStandardStart(f, e, t)).then(function() {
                                return d.appPhaseModule.updateAppPhase(u.a.PLAYING)
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.doQuickStart = function(t, e) {
                return y(this, void 0, void 0, function() {
                    var n, o = this;
                    return v(this, function(r) {
                        return n = this.getStartSweepId(t),
                        [2, this.commandBinder.issueCommand(new h.a({
                            sweep: n,
                            rotation: t.camera.rotation,
                            transition: f.b.INSTANT
                        })).then(function() {
                            return o.renderBeforeStarting(e)
                        })]
                    })
                })
            }
            ,
            e.prototype.doStandardStart = function(t, e, n) {
                return y(this, void 0, void 0, function() {
                    var o, a, s, u, c, p, l, h, f, d, y = this;
                    return v(this, function(v) {
                        switch (v.label) {
                        case 0:
                            return [4, Promise.all([e.waitForModule(r.Na), e.waitForModule(r.q)])];
                        case 1:
                            return o = w.apply(void 0, [v.sent(), 2]),
                            a = o[0],
                            s = o[1],
                            u = n.checkUrlParam("dh", 0, 1) || !n.tryGetProperty("dollhouse", !0),
                            c = n.checkUrlParam("fp", 0, 1) || !n.tryGetProperty("floorplan", !0),
                            t && (t.mode === i.a.Dollhouse && u || t.mode === i.a.Floorplan && c || t.mode === i.a.Panorama && !t.pano) && (t = null),
                            l = !t || t && (t.mode === i.a.Dollhouse || t.mode === i.a.Floorplan),
                            h = !t || t && !this.is360Pano(t) && t.mode === i.a.Panorama && !u,
                            f = this.getStartSweepId(t),
                            d = t ? t.camera.rotation : this.sweepData.getFirstSweep().rotation,
                            [2, a.switchToMode(t ? t.mode : i.a.Panorama, r.Ja.Instant, {
                                sweepID: f,
                                position: t ? t.camera.position : void 0,
                                rotation: d
                            }).then(function() {
                                if (h) {
                                    p = a.getFlyinEndPose();
                                    var t = a.getFlyinStartPose(p);
                                    return a.switchToMode(i.a.Dollhouse, r.Ja.Instant, t)
                                }
                                return Promise.resolve()
                            }).then(function() {
                                return l && t && t.floorVisibility ? s.moveToFloor(t.floorVisibility.lastIndexOf(1), !0, 0).nativePromise() : Promise.resolve()
                            }).then(function() {
                                return y.renderBeforeStarting(e)
                            }).then(function() {
                                return h ? y.flyIn(a, {
                                    sweepID: f,
                                    rotation: d
                                }, p, 750) : Promise.resolve()
                            })]
                        }
                    })
                })
            }
            ,
            e.prototype.flyIn = function(t, e, n, o) {
                return y(this, void 0, void 0, function() {
                    return v(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, Object(p.c)(o)];
                        case 1:
                            return t.sent(),
                            [2, this.cameraModule.moveTo({
                                transitionType: r.Ja.Interpolate,
                                pose: n
                            }).nativePromise()]
                        }
                    })
                }).then(function() {
                    return t.switchToMode(i.a.Panorama, r.Ja.Interpolate, {
                        sweepID: e.sweepID,
                        rotation: e.rotation
                    }, r.l)
                })
            }
            ,
            e.prototype.is360Pano = function(t) {
                var e;
                if (t.pano.uuid) {
                    if (e = this.sweepData.getSweep(t.pano.uuid))
                        return e.alignmentType !== c.a.ALIGNED
                } else if (e = this.sweepData.getFirstSweep())
                    return e.alignmentType !== c.a.ALIGNED;
                return !1
            }
            ,
            e.prototype.renderBeforeStarting = function(t) {
                return y(this, void 0, void 0, function() {
                    var e = this;
                    return v(this, function(n) {
                        return [2, this.renderer.renderOnce().then(function() {
                            return t.waitForModule(r.z)
                        }).then(function() {
                            return e.renderer.startRender(!0)
                        }).then(function() {
                            return t.getModuleSync(s.default).updateAppPhase(u.a.STARTING)
                        })]
                    })
                })
            }
            ,
            e.prototype.getStartSweepId = function(t) {
                return t && t.pano && t.pano.uuid && this.sweepData.getSweep(t.pano.uuid).enabled ? t.pano.uuid : this.sweepData.getFirstSweep().id
            }
            ,
            e
        }(r.W);
        e.default = g
    }
}]);
