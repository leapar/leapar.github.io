(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
    108: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return a
        });
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.from = n,
                r.to = e,
                r
            }
            return i(n, t),
            n
        }(o.a)
    },
    109: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return a
        });
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.floorIndex = n,
                r.floorName = e,
                r
            }
            return i(n, t),
            n
        }(o.a)
    },
    144: function(t, n, e) {
        "use strict";
        var r = e(11)
          , o = e(53)
          , i = e(1)
          , a = e(3)
          , u = e(7)
          , c = function(t, n) {
            return t && n ? t.equals(n) : t === n
        }
          , s = e(37)
          , f = e(91);
        e.d(n, "b", function() {
            return d
        }),
        e.d(n, "a", function() {
            return v
        });
        var l, p = (l = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            l(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), d = function(t, n, e) {
            void 0 === e && (e = !0),
            n.position = h(t.position, n.position, e),
            n.rotation = h(t.rotation, n.rotation, e),
            n.projection = h(t.projection, n.projection, e)
        }, h = function(t, n, e) {
            return void 0 === e && (e = !0),
            t && !n ? n = t.clone() : t && n ? n.copy(t) : e && (n = void 0),
            n
        }, y = function() {
            return Object(s.a)({
                position: Object(s.a)(new i.a),
                rotation: Object(s.a)(new a.a),
                projection: new u.a,
                focalDistance: -1
            })
        }, v = function(t) {
            function n() {
                var n = t.call(this) || this;
                return n.size = {
                    width: 0,
                    height: 0
                },
                n.pose = y(),
                n.transition = {
                    startTime: 0,
                    duration: 0,
                    active: !1,
                    type: null,
                    progress: new o.a(0),
                    blackoutProgress: new o.a(0),
                    from: {
                        position: new i.a,
                        rotation: new a.a,
                        projection: new u.a
                    },
                    to: {
                        position: new i.a,
                        rotation: new a.a,
                        projection: new u.a
                    }
                },
                n
            }
            return p(n, t),
            n.prototype.setSize = function(t) {
                this.size.width = t.width,
                this.size.height = t.height
            }
            ,
            n.prototype.aspect = function() {
                return this.pose.projection.elements[5] / this.pose.projection.elements[0]
            }
            ,
            n.prototype.fovY = function() {
                return 2 * Math.atan(1 / this.pose.projection.elements[5])
            }
            ,
            n.prototype.fovX = function() {
                return 2 * Math.atan(1 * this.aspect() / this.pose.projection.elements[5])
            }
            ,
            n.prototype.isOrtho = function() {
                return Object(f.i)(this.pose.projection)
            }
            ,
            n.prototype.baseZoom = function() {
                return this.pose.projection.elements[0] / 2
            }
            ,
            n.prototype.zoom = function() {
                return this.isOrtho() ? this.baseZoom() * this.size.width : this.baseFovY / this.fovY()
            }
            ,
            n.prototype.copyTransition = function(t) {
                this.transition.active = t.active,
                this.transition.type = t.type,
                this.transition.startTime = t.startTime,
                this.transition.duration = t.duration,
                t.progress && this.transition.progress.copy(t.progress),
                t.blackoutProgress && this.transition.blackoutProgress.copy(t.blackoutProgress),
                t.from && d(t.from, this.transition.from),
                t.to && d(t.to, this.transition.to)
            }
            ,
            n.prototype.update = function(t) {
                this.copy(t)
            }
            ,
            n.prototype.clone = function() {
                var t = new n;
                return t.copy(this),
                t
            }
            ,
            n.prototype.copy = function(t) {
                this.pose.position.copy(t.pose.position),
                this.pose.rotation.copy(t.pose.rotation),
                this.pose.focalDistance = t.pose.focalDistance,
                this.pose.projection.copy(t.pose.projection),
                this.baseFovY = t.baseFovY,
                this.copyTransition(t.transition)
            }
            ,
            n.prototype.shallowIsEqual = function(t) {
                return this.pose.position.equals(t.pose.position) && this.pose.rotation.equals(t.pose.rotation) && this.pose.projection.equals(t.pose.projection) && this.pose.focalDistance === t.pose.focalDistance && this.baseFovY === t.baseFovY
            }
            ,
            n.prototype.isEqual = function(t) {
                return this.shallowIsEqual(t) && this.transitionIsEqual(t.transition)
            }
            ,
            n.prototype.transitionIsEqual = function(t) {
                return this.transition.active === t.active && this.transition.type === t.type && this.transition.progress.equals(t.progress) && this.transition.blackoutProgress.equals(t.blackoutProgress) && c(this.transition.from.position, t.from.position) && c(this.transition.from.rotation, t.from.rotation) && c(this.transition.from.projection, t.from.projection) && c(this.transition.to.position, t.to.position) && c(this.transition.to.rotation, t.to.rotation) && c(this.transition.to.projection, t.to.projection) && this.transition.startTime === t.startTime && this.transition.duration === t.duration
            }
            ,
            n
        }(r.a)
    },
    188: function(t, n, e) {
        "use strict";
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.fromMode = e,
                r.toMode = n,
                r.timestamp = Date.now(),
                r
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    190: function(t, n, e) {
        "use strict";
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.fromSweep = e,
                r.toSweep = n,
                r.timestamp = Date.now(),
                r
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    192: function(t, n, e) {
        "use strict";
        var r, o = e(188), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    193: function(t, n, e) {
        "use strict";
        var r, o = e(190), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    195: function(t, n, e) {
        "use strict";
        var r, o = e(188), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    196: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return a
        });
        var r, o = e(11), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.width = window.innerWidth,
                n.height = window.innerHeight,
                n.aspectRatio = n.width / n.height,
                n.x = 0,
                n.y = 0,
                n
            }
            return i(n, t),
            n.prototype.update = function(t) {
                this.width = t.width,
                this.height = t.height,
                this.aspectRatio = t.width / t.height,
                this.x = t.x,
                this.y = t.y
            }
            ,
            n
        }(o.a)
    },
    204: function(t, n, e) {
        "use strict";
        var r, o = e(190), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e, r, o) {
                var i = t.call(this, n, o) || this;
                return i.alignmentType = e,
                i.placementType = r,
                i
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    211: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return u
        });
        var r, o = e(50), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , u = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "MOVE_TO_SWEEP",
                e.payload = a({}, n),
                e
            }
            return i(n, t),
            n
        }(o.a)
    },
    213: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return a
        });
        var r, o = e(11), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.tags = {},
                n.visitedTags = [],
                n.viewedTags = 0,
                n
            }
            return i(n, t),
            n.prototype.update = function(t) {
                this.tags = t.tags
            }
            ,
            n.prototype.addTag = function(t) {
                this.tags[t.sid] = t
            }
            ,
            n.prototype.visitTag = function(t) {
                this.viewedTags++,
                -1 === this.visitedTags.indexOf(t) && this.visitedTags.push(t)
            }
            ,
            n.prototype.getViewedTagCount = function() {
                return this.viewedTags
            }
            ,
            n.prototype.getVisitedTags = function() {
                return this.visitedTags
            }
            ,
            n.prototype.getTag = function(t) {
                return this.tags[t]
            }
            ,
            n.prototype.getTagCount = function() {
                return Object.keys(this.tags).length
            }
            ,
            n.prototype.iterate = function(t) {
                for (var n in this.tags)
                    t(this.tags[n])
            }
            ,
            n
        }(o.a)
    },
    220: function(t, n, e) {
        "use strict";
        var r = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }
          , o = function(t) {
            var n = "function" == typeof Symbol && t[Symbol.iterator]
              , e = 0;
            return n ? n.call(t) : {
                next: function() {
                    return t && e >= t.length && (t = void 0),
                    {
                        value: t && t[e++],
                        done: !t
                    }
                }
            }
        }
          , i = function(t) {
            return "" + t
        }
          , a = function() {
            function t(t) {
                void 0 === t && (t = i),
                this.mappingFunction = t,
                this.list = [],
                this.map = {}
            }
            return t.prototype.add = function(t) {
                var n = this.mappingFunction(t);
                return !this.map[n] && (this.list.push(t),
                this.map[n] = t,
                !0)
            }
            ,
            t.prototype.set = function(t) {
                var n = this.mappingFunction(t);
                return this.map[n] ? (this.map[n] = t,
                !0) : (this.add(t),
                !0)
            }
            ,
            t.prototype.count = function() {
                return this.list.length
            }
            ,
            t.prototype[Symbol.iterator] = function() {
                var t, n, e, i, a;
                return r(this, function(r) {
                    switch (r.label) {
                    case 0:
                        r.trys.push([0, 5, 6, 7]),
                        t = o(this.list),
                        n = t.next(),
                        r.label = 1;
                    case 1:
                        return n.done ? [3, 4] : [4, n.value];
                    case 2:
                        r.sent(),
                        r.label = 3;
                    case 3:
                        return n = t.next(),
                        [3, 1];
                    case 4:
                        return [3, 7];
                    case 5:
                        return e = r.sent(),
                        i = {
                            error: e
                        },
                        [3, 7];
                    case 6:
                        try {
                            n && !n.done && (a = t.return) && a.call(t)
                        } finally {
                            if (i)
                                throw i.error
                        }
                        return [7];
                    case 7:
                        return [2]
                    }
                })
            }
            ,
            t.prototype.getByIndex = function(t) {
                return this.list[t]
            }
            ,
            t.prototype.getReadonlyList = function() {
                return this.list
            }
            ,
            t.prototype.get = function(t) {
                return this.map[t]
            }
            ,
            t.prototype.getMappedElement = function(t) {
                return this.map[t]
            }
            ,
            t.prototype.copyToList = function(t) {
                t.push.apply(t, this.list)
            }
            ,
            t.prototype.clear = function() {
                this.list = [],
                this.map = {}
            }
            ,
            t.prototype.mapElements = function(t) {
                return this.list.map(t)
            }
            ,
            t
        }();
        n.a = a
    },
    225: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return a
        }),
        e.d(n, "c", function() {
            return u
        }),
        e.d(n, "a", function() {
            return c
        });
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.sid = n,
                r.hovering = e,
                r
            }
            return i(n, t),
            n
        }(o.a), u = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.sid = n,
                e
            }
            return i(n, t),
            n
        }(o.a), c = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.sid = n,
                e
            }
            return i(n, t),
            n
        }(o.a)
    },
    237: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return o
        }),
        e.d(n, "a", function() {
            return i
        }),
        e.d(n, "c", function() {
            return a
        });
        var r = e(14)
          , o = function(t, n) {
            if (!t || !n)
                return !1;
            var e = n && t.getSweep(n);
            return !(e && e.alignmentType !== r.a.ALIGNED)
        }
          , i = function(t) {
            return o(t, t.currentSweep)
        }
          , a = function(t, n) {
            switch (t) {
            case r.a.ALIGNED:
                return 1;
            case r.a.UNALIGNED:
                return 2
            }
            switch (n) {
            case r.b.MANUAL:
                return 3
            }
            return 0
        }
    },
    241: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return a
        }),
        e.d(n, "c", function() {
            return u
        }),
        e.d(n, "d", function() {
            return c
        }),
        e.d(n, "a", function() {
            return s
        });
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(n, t),
            n
        }(o.a), u = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.index = n,
                e
            }
            return i(n, t),
            n
        }(o.a), c = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(n, t),
            n
        }(o.a), s = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(n, t),
            n
        }(o.a)
    },
    254: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return c
        });
        var r, o = e(220), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , u = function(t) {
            var n = "function" == typeof Symbol && t[Symbol.iterator]
              , e = 0;
            return n ? n.call(t) : {
                next: function() {
                    return t && e >= t.length && (t = void 0),
                    {
                        value: t && t[e++],
                        done: !t
                    }
                }
            }
        }, c = function(t) {
            function n() {
                return t.call(this, function(t) {
                    return t.sid
                }) || this
            }
            return i(n, t),
            n.prototype.add = function(n) {
                return t.prototype.add.call(this, n)
            }
            ,
            n.prototype.clear = function() {
                this.list = [],
                this.map = {}
            }
            ,
            n.prototype.getCollection = function() {
                return this.map
            }
            ,
            n.prototype.getList = function() {
                return this.list
            }
            ,
            n.prototype.update = function(t) {
                this.copy(t)
            }
            ,
            n.prototype.isEqual = function(t) {
                if (this.list.length !== t.list.length)
                    return !1;
                try {
                    for (var e = u(this.list), r = e.next(); !r.done; r = e.next()) {
                        var o = r.value
                          , i = t.map[o.sid];
                        if (!i || !n.labelsAreEqual(o, i))
                            return !1
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (c = e.return) && c.call(e)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                return !0;
                var a, c
            }
            ,
            n.labelsAreEqual = function(t, n) {
                return t.floor === n.floor && t.position.equals(n.position) && t.sid === n.sid && t.text === n.text && t.visible === n.visible
            }
            ,
            n.prototype.copy = function(t) {
                this.list = [],
                this.map = {};
                try {
                    for (var n = u(t.list), e = n.next(); !e.done; e = n.next()) {
                        var r = e.value;
                        this.add(a({}, r, {
                            position: r.position.clone()
                        }))
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        e && !e.done && (i = n.return) && i.call(n)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return this;
                var o, i
            }
            ,
            n.prototype.clone = function() {
                return (new n).copy(this)
            }
            ,
            n
        }(o.a)
    },
    270: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return s
        }),
        e.d(n, "b", function() {
            return f
        });
        var r, o = e(50), i = e(0), a = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), u = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, c = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, s = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "SHOW_ALL_FLOORS",
                e.payload = n,
                e
            }
            return a(n, t),
            n
        }(o.a), f = function(t, n, e) {
            t.waitForModule(i.q).then(function(t) {
                return n.addBinding(s, function(n) {
                    return u(void 0, void 0, void 0, function() {
                        var e;
                        return c(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]),
                                e = "boolean" == typeof n.moveCamera && !n.moveCamera,
                                [4, t.moveToFloor(-1, e)];
                            case 1:
                                return r.sent(),
                                [3, 3];
                            case 2:
                                throw r.sent(),
                                Error("Could not show all floors");
                            case 3:
                                return [2]
                            }
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Floor",
                name: "showAll",
                args: ["moveCamera"]
            }, function(t) {
                return new s(t)
            })
        }
    },
    271: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return s
        }),
        e.d(n, "b", function() {
            return f
        });
        var r, o = e(50), i = e(0), a = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), u = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, c = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, s = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "MOVE_TO_FLOOR",
                e.payload = n,
                e
            }
            return a(n, t),
            n
        }(o.a), f = function(t, n, e) {
            t.waitForModule(i.q).then(function(t) {
                return n.addBinding(s, function(n) {
                    return u(void 0, void 0, void 0, function() {
                        var e;
                        return c(this, function(r) {
                            switch (r.label) {
                            case 0:
                                if ("number" != typeof n.floorIndex || n.floorIndex < 0)
                                    throw Error("floor index must be a non-negative number");
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                e = "boolean" == typeof n.moveCamera && !n.moveCamera,
                                [4, t.moveToFloor(n.floorIndex, e, e ? 250 : void 0)];
                            case 2:
                                return r.sent(),
                                [2, t.getData().currentFloor];
                            case 3:
                                throw r.sent(),
                                Error("Could not move to floor at index " + n.floorIndex);
                            case 4:
                                return [2]
                            }
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Floor",
                name: "moveTo",
                args: ["floorIndex", "moveCamera"]
            }, function(t) {
                return new s(t)
            })
        }
    },
    272: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return u
        });
        var r, o = e(50), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , u = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.payload = a({}, n),
                e
            }
            return i(n, t),
            n
        }(o.a)
    },
    273: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return u
        });
        var r, o = e(50), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , u = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.payload = a({}, n),
                e
            }
            return i(n, t),
            n
        }(o.a)
    },
    280: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        }),
        e.d(n, "b", function() {
            return a
        });
        var r, o = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), i = function(t) {
            function n() {
                var n = t.call(this) || this;
                return n.message = "Tried to start view-mode transition while another transition was active!",
                n
            }
            return o(n, t),
            n
        }(Error), a = function(t) {
            function n() {
                var n = t.call(this) || this;
                return n.message = "Already in mode",
                n
            }
            return o(n, t),
            n
        }(Error)
    },
    285: function(t, n, e) {
        "use strict";
        var r;
        e.d(n, "a", function() {
            return r
        }),
        function(t) {
            t.FPS = "stat.fps"
        }(r = r || (r = {}))
    },
    297: function(t, n, e) {
        "use strict";
        var r, o = e(19), i = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            r(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), a = function(t) {
            function n(n, e, r, o) {
                var i = t.call(this) || this;
                return i.urls = n,
                i.sid = e,
                i.vrSupported = r,
                i.sweepList = o,
                i
            }
            return i(n, t),
            n
        }(o.a);
        n.a = a
    },
    51: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return o
        });
        var r = e(1)
          , o = function() {
            function t() {}
            return t.UP = new r.a(0,1,0),
            t.DOWN = new r.a(0,-1,0),
            t.LEFT = new r.a(-1,0,0),
            t.RIGHT = new r.a(1,0,0),
            t.FORWARD = new r.a(0,0,-1),
            t.BACK = new r.a(0,0,1),
            t.ZERO = new r.a(0,0,0),
            t
        }()
    },
    705: function(t, n, e) {
        "use strict";
        e.r(n);
        var r, o, i, a = e(28), u = e(8);
        !function(t) {
            t.WEBVR = "application.webvr",
            t.SHOWCASE = "application.showcase",
            t.WORKSHOP = "application.workshop"
        }(r = r || (r = {})),
        function(t) {
            t.UNINITIALIZED = "appphase.uninitialized",
            t.WAITING = "appphase.waiting",
            t.LOADING = "appphase.loading",
            t.STARTING = "appphase.starting",
            t.PLAYING = "appphase.playing",
            t.ERROR = "appphase.error"
        }(o = o || (o = {})),
        function(t) {
            t.PHASE_CHANGE = "application.phasechange",
            t.APP_CHANGE = "application.appchange"
        }(i = i || (i = {}));
        var c, s, f = function(t) {
            switch (t) {
            case u.b.WEBVR:
                return r.WEBVR;
            case u.b.SHOWCASE:
                return r.SHOWCASE;
            case u.b.WORKSHOP:
                return r.WORKSHOP;
            default:
                return
            }
        }, l = function(t) {
            var n = u.a[t];
            if (n in o)
                return o[n]
        }, p = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "App",
                name: "Event",
                values: i
            }),
            n.addEnumToInterface({
                version: "3.x",
                namespace: "App",
                name: "Phase",
                values: o
            });
            var e = [void 0]
              , r = function(t) {
                return e[0] = l(t.phase),
                e
            };
            t.subscribe(a.a, function(t) {
                n.broadcast(i.PHASE_CHANGE, t, r)
            })
        }, d = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "App",
                name: "Application",
                values: r
            }),
            n.addEnumToInterface({
                version: "3.x",
                namespace: "App",
                name: "Event",
                values: i
            });
            var e = [void 0]
              , o = function(t) {
                return e[0] = f(t.application),
                e
            };
            t.subscribe(a.b, function(t) {
                n.broadcast(i.APP_CHANGE, t, o)
            })
        }, h = e(50), y = e(20), v = (c = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, n) {
            t.__proto__ = n
        }
        || function(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e])
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            c(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), b = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, w = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, m = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "SWITCH_APP",
                e.payload = {
                    app: n
                },
                e
            }
            return v(n, t),
            n
        }(h.a), g = function(t, n, e) {
            t.waitForModule(y.default).then(function(t) {
                n.addBinding(m, function(n) {
                    return b(void 0, void 0, void 0, function() {
                        return w(this, function(e) {
                            try {
                                t.updateActiveApp(n.app)
                            } catch (t) {
                                throw Error("Error: Can't switch application mode at this time")
                            }
                            return [2]
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "App",
                name: "switchApplication",
                args: ["app"]
            }, function(t) {
                var n = function(t) {
                    switch (t) {
                    case r.WEBVR:
                        return u.b.WEBVR;
                    case r.SHOWCASE:
                        return u.b.SHOWCASE;
                    case r.WORKSHOP:
                        return u.b.WORKSHOP;
                    default:
                        return
                    }
                }(t.app);
                if (void 0 === n)
                    throw Error(t.app + " is not a valid application");
                return new m(n)
            })
        }, _ = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), O = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, x = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, T = function(t) {
            function n() {
                var n = t.call(this) || this;
                return n.id = "GET_APP_STATE",
                n
            }
            return _(n, t),
            n
        }(h.a), P = function(t, n, e) {
            t.waitForModule(y.default).then(function(t) {
                n.addBinding(T, function(n) {
                    return O(void 0, void 0, void 0, function() {
                        var n;
                        return x(this, function(e) {
                            try {
                                return n = t.getData(),
                                [2, {
                                    phase: l(n.phase),
                                    application: f(n.application)
                                }]
                            } catch (t) {
                                throw Error("Error: Can't get application data at this time")
                            }
                            return [2]
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "App",
                name: "getState",
                args: []
            }, function() {
                return new T
            })
        }, E = e(99), S = e(51), A = {
            FORWARD: S.a.FORWARD.clone(),
            LEFT: S.a.LEFT.clone(),
            RIGHT: S.a.RIGHT.clone(),
            BACK: S.a.BACK.clone(),
            UP: S.a.UP.clone(),
            DOWN: S.a.DOWN.clone()
        }, j = e(0), k = e(81), M = e(74), I = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), D = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, C = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, N = function(t, n, e) {
            t.waitForModule(j.L).then(function(t) {
                return n.addBinding(G, function(n) {
                    return D(void 0, void 0, void 0, function() {
                        var e, r, o;
                        return C(this, function(i) {
                            switch (i.label) {
                            case 0:
                                if (e = Object.keys(E.a),
                                -1 === (r = e.indexOf(n.direction)))
                                    throw new Error(n.direction + " is not a valid direction");
                                return o = e[r],
                                [4, t.navigateInLocalDirection(A[o])];
                            case 1:
                                return i.sent(),
                                [2]
                            }
                        })
                    })
                })
            });
            var r = function(t) {
                return new G(t || {})
            };
            e.addEnumToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "Direction",
                values: E.a
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "moveInDirection",
                args: ["direction"]
            }, r),
            e.addEnumToInterface(k.directionsInterface),
            e.addCommandToInterface(M.moveInDirectionInterface, r)
        }, G = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "MOVE_DIRECTION",
                e.payload = n,
                e
            }
            return I(n, t),
            n
        }(h.a), R = e(15), F = e(144), z = e(65), L = e(69), B = e(43), V = e(5), H = e(94), W = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), q = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, U = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Y = function(t) {
            function n(n) {
                void 0 === n && (n = !1);
                var e = t.call(this) || this;
                return e.id = "GET_POSE",
                e.payload = {
                    deprecated: n
                },
                e
            }
            return W(n, t),
            n
        }(h.a), K = function(t, n, e) {
            var r = {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0
                },
                sweep: "",
                mode: R.b.TRANSITIONING
            };
            n.addBinding(Y, function(n) {
                return q(void 0, void 0, void 0, function() {
                    return U(this, function(e) {
                        return [2, J(t, r, n.deprecated)]
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "getPose",
                args: []
            }, function() {
                return new Y
            }),
            e.addCommandToInterface(M.getPoseInterface, function() {
                return new Y(!0)
            })
        }, J = function(t, n, e) {
            return void 0 === e && (e = !1),
            q(void 0, void 0, void 0, function() {
                var r, o, i, a, u;
                return U(this, function(c) {
                    switch (c.label) {
                    case 0:
                        return c.trys.push([0, 4, , 5]),
                        [4, t.market.waitForData(F.a)];
                    case 1:
                        return r = c.sent(),
                        [4, t.market.waitForData(z.a)];
                    case 2:
                        return o = c.sent(),
                        [4, t.market.waitForData(L.a)];
                    case 3:
                        return i = c.sent(),
                        [3, 5];
                    case 4:
                        throw c.sent(),
                        Error("unable to get current pose");
                    case 5:
                        return a = (new B.a).setFromQuaternion(r.pose.rotation, "YXZ"),
                        u = o.currentSweep && o.isSweepUnaliged(o.currentSweep),
                        n.position.x = r.pose.position.x,
                        n.position.y = r.pose.position.y,
                        n.position.z = r.pose.position.z,
                        n.rotation.x = V.a.radToDeg(a.x),
                        n.rotation.y = V.a.radToDeg(a.y),
                        e ? n.pano = o.currentSweep : n.sweep = o.currentSweep,
                        n.mode = e ? Object(H.c)(i.currentMode) : Object(H.d)(i.currentMode, !u),
                        [2, n]
                    }
                })
            })
        }, Z = e(17), Q = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), X = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, $ = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, tt = function(t, n, e) {
            Promise.all([t.waitForModule(j.e), t.waitForModule(j.b)]).then(function(t) {
                var e = t[0]
                  , r = t[1];
                n.addBinding(nt, function(t) {
                    return X(void 0, void 0, void 0, function() {
                        var n, o, i, a, u, c;
                        return $(this, function(s) {
                            return n = r.getData(!1),
                            o = n.pose.position,
                            i = t.x - o.x,
                            a = t.z - o.z,
                            u = new Z.a(i,a),
                            c = u.length(),
                            u.setLength(.005),
                            [2, e.startTranslateTransition(c / .005, u, !1)]
                        })
                    })
                })
            });
            var r = function(t) {
                if ((t = t || {}).position = t.position || {},
                t.position.x = t.position.x - 0,
                t.position.z = t.position.z - 0,
                isNaN(t.position.x) || isNaN(t.position.z))
                    throw new Error(JSON.stringify(t) + " does not contain a valid position to pan");
                return new nt({
                    x: t.position.x,
                    z: t.position.z
                })
            };
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "pan",
                args: ["position"]
            }, r),
            e.addCommandToInterface(M.panInterface, r)
        }, nt = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "PAN",
                e.payload = {
                    x: n.x,
                    z: n.z
                },
                e
            }
            return Q(n, t),
            n
        }(h.a), et = function(t) {
            var n = "function" == typeof Symbol && t[Symbol.iterator]
              , e = 0;
            return n ? n.call(t) : {
                next: function() {
                    return t && e >= t.length && (t = void 0),
                    {
                        value: t && t[e++],
                        done: !t
                    }
                }
            }
        }, rt = function(t, n) {
            var e, r, o = Object.keys(t);
            try {
                for (var i = et(o), a = i.next(); !a.done; a = i.next()) {
                    if (t[a.value] === n)
                        return !0
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (r = i.return) && r.call(i)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            return !1
        }, ot = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), it = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, at = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, ut = V.a.degToRad(80) / 1e3, ct = function(t, n, e) {
            t.waitForModule(j.e).then(function(t) {
                return n.addBinding(st, function(n) {
                    return it(void 0, void 0, void 0, function() {
                        var e, r, o, i, a, u, c, s, f, l, p, d, h, y;
                        return at(this, function(v) {
                            return e = n.rotationSpeed || ut,
                            r = 0,
                            o = Math.abs(n.xAngle),
                            i = Math.abs(n.yAngle),
                            (a = Math.max(o, i)) >= Math.PI ? (u = a / Math.PI,
                            c = Math.floor(u),
                            l = o - (s = o / u) * c,
                            p = i - (f = i / u) * c,
                            d = Math.acos(Math.cos(s) * Math.cos(f)) * c,
                            h = Math.acos(Math.cos(l) * Math.cos(p)),
                            r = d + h) : r = Math.acos(Math.cos(Math.abs(n.xAngle)) * Math.cos(Math.abs(n.yAngle))),
                            r ? ((y = new Z.a(-n.xAngle,n.yAngle)).multiplyScalar(e / r),
                            [2, t.startRotateTransition(r / e, y, !1)]) : [2]
                        })
                    })
                })
            });
            var r = function(t) {
                t = t || {};
                var n = V.a.degToRad(t.xAngle || 0)
                  , e = V.a.degToRad(t.yAngle || 0);
                if (isNaN(n) || isNaN(e))
                    throw new Error(JSON.stringify(t) + " does not contain valid rotation angles");
                return new st({
                    xAngle: n,
                    yAngle: e
                })
            };
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "rotate",
                args: ["xAngle", "yAngle"]
            }, r),
            e.addCommandToInterface(M.rotateInterface, r),
            e.addCommandToInterface(M.rotateInDirectionInterface, function(t) {
                t = t || {};
                var n = V.a.degToRad(t.angle || 0)
                  , e = t.direction;
                if (isNaN(n) || !rt(E.a, e))
                    throw new Error(JSON.stringify(t) + " does not contain a valid angle and direction");
                return new st({
                    xAngle: e === E.a.RIGHT ? n : e === E.a.LEFT ? -n : 0,
                    yAngle: e === E.a.UP ? n : e === E.a.DOWN ? -n : 0
                })
            })
        }, st = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "ROTATE",
                e.payload = {
                    xAngle: n.xAngle,
                    yAngle: n.yAngle,
                    rotationSpeed: n.rotationSpeed
                },
                e
            }
            return ot(n, t),
            n
        }(h.a);
        !function(t) {
            t.MOVE = "camera.move"
        }(s = s || (s = {}));
        var ft = e(62)
          , lt = e(4)
          , pt = new lt.a("broadcast.move")
          , dt = function(t, n) {
            var e, r, o = [{
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0
                },
                sweep: "",
                mode: R.b.TRANSITIONING
            }], i = {
                state: o[0]
            }, a = (e = 0,
            r = function(n) {
                return J(t, o[0], n),
                n ? i : o
            }
            ,
            function() {
                var t = Date.now();
                if (t > e + 100) {
                    e = t;
                    try {
                        n.broadcast(ft.a.MOVE, !0, r, !0),
                        n.broadcast(s.MOVE, !1, r)
                    } catch (t) {
                        pt.debug("failed to broadcast pose, one of the module dependencies are probably not loaded yet")
                    }
                }
            }
            );
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "Event",
                values: s
            }),
            t.market.onDataUpdate(F.a, a),
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "Event",
                values: s
            })
        }
          , ht = e(110)
          , yt = e(196)
          , vt = e(1)
          , bt = e(9)
          , wt = V.a.degToRad(40) / 1e3;
        function mt(t, n, e) {
            ht.Promise.all([t.getModule(j.Oa)]).then(function(n) {
                e.addCommandToInterface({
                    version: "3.x",
                    namespace: "Camera",
                    name: "lookAtScreenCoords",
                    args: ["x", "y"]
                }, function(e) {
                    if (void 0 === e && (e = {}),
                    "number" != typeof e.x || "number" != typeof e.y)
                        throw Error(JSON.stringify(e) + " does not contain a valid screen coordinate");
                    var r = t.market.tryGetData(L.a);
                    if (!r || !r.isPano())
                        throw Error("Camera.lookAtScreenCoords must be called from Inside mode");
                    var o = t.market.tryGetData(F.a)
                      , i = t.market.tryGetData(yt.a);
                    if (!o || !i)
                        throw Error("Error resolving current pose or canvas values");
                    var a = n[0].getScene().cameraRig
                      , u = Object(bt.e)(e.x, e.y, i)
                      , c = S.a.FORWARD.clone().applyQuaternion(o.pose.rotation)
                      , s = new vt.a(u.x,u.y,1).unproject(a.camera).normalize()
                      , f = c.clone().setY(0).angleTo(s.clone().setY(0))
                      , l = Math.asin(s.y - c.y)
                      , p = f * Math.sign(u.x);
                    return new st({
                        xAngle: p,
                        yAngle: l,
                        rotationSpeed: wt
                    })
                })
            })
        }
        var gt, _t = e(73), Ot = e(46), xt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), Tt = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , Pt = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Et = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, St = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, At = new lt.a("Renderer"), jt = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "SCREENSHOT",
                e.payload = Tt({}, n),
                e
            }
            return xt(n, t),
            n
        }(h.a), kt = function(t, n, r) {
            Promise.all([t.waitForModule(j.Oa), t.waitForModule(j.S), Promise.all([e.e(28), e.e(29)]).then(function() {
                var t = e(707);
                return "object" == typeof t && t && t.__esModule ? t : Object.assign({}, "object" == typeof t && t, {
                    default: t
                })
            })]).then(function(t) {
                var e = St(t, 3)
                  , r = e[0]
                  , o = e[1]
                  , i = e[2]
                  , a = o.createRenderTarget2D(0, 0)
                  , u = r.getScene().cameraRig.camera
                  , c = r.getScene().scene;
                n.addBinding(jt, function(t) {
                    return Pt(void 0, void 0, void 0, function() {
                        var n, e, r, s, f, l;
                        return Et(this, function(p) {
                            if ((n = t.resolution).width <= 0 || n.width > 4096 || n.height <= 0 || n.height > 4096)
                                throw Error('"resolution" provided was not valid');
                            return e = n.width,
                            r = n.height,
                            a.setSize(e, r),
                            s = o.render(a, c, u, t.visibleObjects),
                            f = new Uint8Array(e * r * 4),
                            o.getRenderTargetData(s, f),
                            l = i.encode({
                                data: f,
                                width: e,
                                height: r
                            }, {
                                quality: 75,
                                flipY: !0
                            }),
                            a.setSize(0, 0),
                            [2, "data:image/jpg;base64," + Object(Ot.h)(l.data)]
                        })
                    })
                })
            });
            var o = function(n) {
                if (void 0 === n && (n = {}),
                !n.resolution) {
                    var e = t.market.tryGetData(yt.a);
                    e && (n.resolution = {
                        width: e.width,
                        height: e.height
                    })
                }
                var r = _t.a.ALL;
                return n.visibleObjects && (n.visibleObjects.hasOwnProperty("mattertags") && !n.visibleObjects.mattertags && r.removeLayers(t.getRenderLayer("mattertag-mesh")),
                n.visibleObjects.hasOwnProperty("sweeps") && !n.visibleObjects.sweep && r.removeLayers(t.getRenderLayer("sweep-pucks"))),
                new jt({
                    resolution: n.resolution,
                    visibleObjects: r
                })
            };
            r.addCommandToInterface({
                version: "3.x",
                namespace: "Renderer",
                name: "takeScreenShot",
                args: ["resolution", "visibleObjects"]
            }, o),
            r.addCommandToInterface({
                version: "3.x",
                namespace: "Camera",
                name: "takeScreenShot",
                args: ["resolution", "visibleObjects"]
            }, function(t) {
                return At.warn("Camera.takeScreenshot deprecated, please use Renderer.takeScreenshot"),
                o(t)
            }),
            r.addCommandToInterface(M.screenShotInterface, function(t) {
                return t.resolution = t.resolution || {},
                -1 === t.resolution.width && -1 === t.resolution.height && (t.resolution = void 0),
                o(t)
            })
        }, Mt = e(273), It = e(27), Dt = e(91), Ct = e(6), Nt = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Gt = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Rt = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, Ft = new vt.a, zt = new vt.a, Lt = new It.a(S.a.DOWN,0), Bt = function(t, n, e) {
            var r = t.waitForModule(j.Oa)
              , o = t.market.waitForData(yt.a)
              , i = t.market.waitForData(F.a)
              , a = t.market.waitForData(L.a)
              , u = t.waitForModule(j.q)
              , c = t.waitForModule(j.R);
            Promise.all([r, o, a, c, u, i]).then(function(t) {
                var e = Rt(t, 6)
                  , r = e[0]
                  , o = e[1]
                  , i = e[2]
                  , a = e[3]
                  , u = e[4]
                  , c = e[5]
                  , s = function(t) {
                    var n = t.getFloorMins();
                    return function(t) {
                        var e = 0;
                        return n.every(function(n, r) {
                            return e = r,
                            t > n
                        }),
                        t > n[n.length - 1] && e++,
                        e - 1
                    }
                }(u);
                n.addBinding(Mt.a, function(t) {
                    return Nt(void 0, void 0, void 0, function() {
                        var n, e, u, f, l, p, d, h;
                        return Gt(this, function(y) {
                            return n = r.getScene().cameraRig.camera,
                            e = t.screenPosition,
                            u = Object(bt.e)(e.x, e.y, o),
                            f = null,
                            Ft.set(u.x, u.y, -1).unproject(n),
                            zt.set(u.x, u.y, 1).unproject(n),
                            l = a.cast(Ft, zt.sub(Ft).normalize()),
                            f = l[0] && l[0].point || null,
                            p = f ? s(f.y) : -1,
                            t.height && (Ft.copy(c.pose.position),
                            d = r.ndcToWorld(u),
                            i.currentMode !== Ct.a.Floorplan ? (h = Object(Dt.f)(Ft, d),
                            Lt.set(S.a.DOWN, t.height),
                            f = Object(Dt.d)(Ft, h, Lt) || null) : (d.y = t.height,
                            f = d)),
                            [2, {
                                position: f,
                                floor: p
                            }]
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Renderer",
                name: "getWorldPositionData",
                args: ["screenPosition", "height"]
            }, function(t) {
                return new Mt.a(t)
            })
        }, Vt = e(272), Ht = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Wt = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, qt = function(t, n, e) {
            t.waitForModule(j.Oa).then(function(t) {
                n.addBinding(Vt.a, function(n) {
                    return Ht(void 0, void 0, void 0, function() {
                        return Wt(this, function(e) {
                            return [2, t.ndcToScreenPoint(t.worldToNDC(n.worldPosition))]
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Renderer",
                name: "getScreenPosition",
                args: ["worldPosition"]
            }, function(t) {
                return new Vt.a(t)
            })
        }, Ut = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Yt = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Kt = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), Jt = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Zt = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Qt = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "GET_FLOORS_DATA",
                n
            }
            return Kt(n, t),
            n
        }(h.a), Xt = function(t, n, e) {
            n.addBinding(Qt, function() {
                return Jt(void 0, void 0, void 0, function() {
                    return Zt(this, function(n) {
                        return [2, t.waitForModule(j.q).then(function(t) {
                            return $t(t)
                        })]
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Floor",
                name: "getData",
                args: []
            }, function() {
                return new Qt
            })
        }, $t = function(t) {
            return Jt(void 0, void 0, void 0, function() {
                return Zt(this, function(n) {
                    try {
                        return [2, (e = t.getData(),
                        Ut(void 0, void 0, void 0, function() {
                            var t, n, r;
                            return Yt(this, function(o) {
                                return t = e.currentFloor,
                                n = e.floorNames,
                                r = e.totalFloors,
                                [2, {
                                    currentFloor: t,
                                    floorNames: n,
                                    totalFloors: r
                                }]
                            })
                        }))]
                    } catch (t) {
                        throw Error("no floors currently loaded")
                    }
                    var e;
                    return [2]
                })
            })
        }, tn = e(271);
        !function(t) {
            t.CHANGE_START = "floors.changestart",
            t.CHANGE_END = "floors.changeend"
        }(gt = gt || (gt = {}));
        var nn, en = e(108), rn = e(109), on = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Floor",
                name: "Event",
                values: gt
            });
            var e = [-1, -1]
              , r = function(t) {
                return e[0] = t.to,
                e[1] = t.from,
                e
            };
            t.subscribe(en.a, function(t) {
                return n.broadcast(gt.CHANGE_START, t, r)
            });
            var o = [-1, ""]
              , i = function(t) {
                return o[0] = t.floorIndex,
                o[1] = t.floorName,
                o
            };
            t.subscribe(rn.a, function(t) {
                return n.broadcast(gt.CHANGE_END, t, i)
            })
        }, an = e(270), un = e(254), cn = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , sn = function(t, n) {
            var e = n.getCollection()
              , r = []
              , o = new vt.a;
            return Object.keys(e).map(function(n) {
                var i = e[n];
                t.worldToNDC(i.position, o);
                var a = t.ndcToScreenPoint(o);
                r.push(cn({}, i, {
                    position: (new vt.a).copy(i.position),
                    screenPosition: a
                }))
            }),
            r
        }, fn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), ln = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, pn = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, dn = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "LABEL_GET",
                n
            }
            return fn(n, t),
            n
        }(h.a), hn = function(t, n, e) {
            n.addBinding(dn, function() {
                return ln(void 0, void 0, void 0, function() {
                    return pn(this, function(n) {
                        return [2, Promise.all([t.waitForModule(j.Oa), t.market.waitForData(un.a)]).then(function(t) {
                            return sn(t[0], t[1])
                        })]
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Label",
                name: "getData",
                args: []
            }, function() {
                return new dn
            })
        };
        !function(t) {
            t.VISIBILITY_CHANGED = "label.visibilitychange",
            t.POSITION_UPDATED = "label.positionupdated"
        }(nn = nn || (nn = {}));
        var yn, vn = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, bn = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Label",
                name: "Event",
                values: nn
            }),
            Promise.all([t.waitForModule(j.Oa), t.market.waitForData(un.a), t.market.waitForData(L.a)]).then(function(e) {
                var r = vn(e, 3)
                  , o = r[0]
                  , i = r[1]
                  , a = r[2]
                  , u = function(t) {
                    if (a.currentMode === Ct.a.Floorplan)
                        return [sn(o, i)]
                };
                t.market.onDataUpdate(F.a, function(t) {
                    return n.broadcast(nn.POSITION_UPDATED, t, u)
                })
            })
        };
        !function(t) {
            t.HOVER = "tag.hover",
            t.CLICK = "tag.click",
            t.UPDATED = "tag.update"
        }(yn = yn || (yn = {}));
        var wn, mn = e(225), gn = e(213), _n = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, On = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, xn = function() {
            return function(t, n, e, r) {
                this.sid = t,
                this.viewportAnchorPosition = n,
                this.viewportTagPosition = e,
                this.behindView = r
            }
        }(), Tn = function(t, n) {
            return _n(void 0, void 0, void 0, function() {
                return On(this, function(e) {
                    return n.addEnumToInterface({
                        version: "3.x",
                        namespace: "Mattertag",
                        name: "Event",
                        values: yn
                    }),
                    t.waitForModule(j.Oa).then(function(e) {
                        var r = ["", !1]
                          , o = function(t) {
                            return r[0] = t.sid,
                            r[1] = t.hovering,
                            r
                        };
                        t.subscribe(mn.b, function(t) {
                            n.broadcast(yn.HOVER, t, o)
                        });
                        var i = [""]
                          , a = function(t) {
                            return i[0] = t.sid,
                            i
                        };
                        t.subscribe(mn.a, function(t) {
                            n.broadcast(yn.CLICK, t, a)
                        });
                        var u = [[]]
                          , c = new vt.a
                          , s = new vt.a
                          , f = new Z.a
                          , l = new Z.a
                          , p = function(t) {
                            var n = 0
                              , r = 0
                              , o = u[0];
                            if (t.iterate(function(t) {
                                if (t.isActive) {
                                    if (c.copy(t.anchorPosition).add(t.stemVector),
                                    e.ndcToScreenPoint(e.worldToNDC(c, s), l),
                                    c.copy(t.anchorPosition),
                                    e.worldToNDC(c, s),
                                    e.ndcToScreenPoint(s, f),
                                    n < o.length) {
                                        var i = o[n];
                                        i.sid = t.sid,
                                        i.viewportAnchorPosition.copy(f),
                                        i.viewportTagPosition.copy(l),
                                        i.behindView = s.z > 1
                                    } else
                                        o.push(new xn(t.sid,f.clone(),l.clone(),s.z > 1));
                                    ++r,
                                    ++n
                                }
                            }),
                            o.length = r,
                            r > 0)
                                return u;
                            d = !1
                        }
                          , d = !1;
                        t.market.onDataUpdate(gn.a, function() {
                            0 === u[0].length && (d = !0)
                        }),
                        t.startGenerator(function() {
                            var e;
                            return On(this, function(r) {
                                switch (r.label) {
                                case 0:
                                    return d && (e = t.market.tryGetData(gn.a)) && n.broadcast(yn.UPDATED, e, p),
                                    [4];
                                case 1:
                                    return r.sent(),
                                    [3, 0];
                                case 2:
                                    return [2]
                                }
                            })
                        })
                    }),
                    [2]
                })
            })
        }, Pn = e(36), En = e(70), Sn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), An = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, jn = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, kn = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, Mn = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "MATTERTAG_GET",
                n
            }
            return Sn(n, t),
            n
        }(h.a), In = function(t, n, e) {
            n.addBinding(Mn, function() {
                return An(void 0, void 0, void 0, function() {
                    var n, e;
                    return jn(this, function(r) {
                        return n = t.market.waitForData(gn.a),
                        e = t.market.waitForData(En.a),
                        [2, Promise.all([n, e]).then(function(t) {
                            var n = kn(t, 2)
                              , e = n[0]
                              , r = n[1];
                            try {
                                var o = r.tryGetProperty("mls", !1)
                                  , i = [];
                                return e.iterate(function(t) {
                                    var n = t.mediaSrc
                                      , e = t.mediaType
                                      , r = t.mediaType === Pn.a.photo;
                                    o && !r && (n = "",
                                    e = Pn.a.none),
                                    i.push({
                                        sid: t.sid,
                                        label: t.label,
                                        description: t.description,
                                        parsedDescription: t.parsedDescription,
                                        isActive: t.isActive,
                                        mediaSrc: n,
                                        mediaType: e
                                    })
                                }),
                                i
                            } catch (t) {
                                throw Error("problem getting tag data")
                            }
                        })]
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Mattertag",
                name: "getData",
                args: []
            }, function() {
                return new Mn
            })
        }, Dn = e(10), Cn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), Nn = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Gn = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Rn = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.id = "MATTERTAG_TOGGLE",
                r.payload = {
                    sid: n,
                    open: e
                },
                r
            }
            return Cn(n, t),
            n
        }(h.a), Fn = function(t, n, e) {
            t.waitForModule(j.D).then(function(e) {
                return n.addBinding(Rn, function(n) {
                    return Nn(void 0, void 0, void 0, function() {
                        return Gn(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return e.toggleTag(n.sid, n.open),
                                [4, t.after(Dn.a.Logic).nativePromise()];
                            case 1:
                                return r.sent(),
                                [2]
                            }
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Mattertag",
                name: "setActive",
                args: ["sid", "open"]
            }, function(t) {
                return new Rn(t.sid,t.open)
            })
        }, zn = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), Ln = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Bn = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Vn = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "NAVIGATE_TO_MATTERTAG",
                e.payload = {
                    sid: n
                },
                e
            }
            return zn(n, t),
            n
        }(h.a), Hn = function(t, n, e) {
            return Ln(void 0, void 0, void 0, function() {
                var r = this;
                return Bn(this, function(o) {
                    return e.addCommandToInterface({
                        version: "3.x",
                        namespace: "Mattertag",
                        name: "navigateToTag",
                        args: ["sid"]
                    }, function(t) {
                        return new Vn(t.sid)
                    }),
                    t.waitForModule(j.Ha).then(function(t) {
                        return n.addBinding(Vn, function(n) {
                            return Ln(r, void 0, void 0, function() {
                                return Bn(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]),
                                        [4, t.navigateToTag(n.sid)];
                                    case 1:
                                        return e.sent(),
                                        [2, n.sid];
                                    case 2:
                                        throw e.sent(),
                                        Error("Could not move to tag with sid " + n.sid);
                                    case 3:
                                        return [2]
                                    }
                                })
                            })
                        })
                    }),
                    [2]
                })
            })
        }, Wn = e(192), qn = e(195);
        !function(t) {
            t.CHANGE_START = "viewmode.changestart",
            t.CHANGE_END = "viewmode.changeend"
        }(wn = wn || (wn = {}));
        var Un, Yn = e(204), Kn = e(237), Jn = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, Zn = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Mode",
                name: "Event",
                values: wn
            }),
            Promise.all([t.market.waitForData(z.a), t.waitForModule(j.Na)]).then(function(e) {
                var r = Jn(e, 2)
                  , o = r[0]
                  , i = r[1]
                  , a = [void 0, void 0]
                  , u = function(t) {
                    var n = i.currentMode
                      , e = Object(Kn.b)(o, t.fromSweep)
                      , r = Object(Kn.b)(o, t.toSweep);
                    if (e !== r)
                        return a[0] = Object(H.d)(n, e),
                        a[1] = Object(H.d)(n, r),
                        a
                };
                t.subscribe(Yn.a, function(t) {
                    return n.broadcast(wn.CHANGE_END, t, u)
                });
                var c = [void 0, void 0]
                  , s = function(t) {
                    var n = Object(Kn.a)(o);
                    return c[0] = Object(H.d)(t.fromMode, n),
                    c[1] = Object(H.d)(t.toMode, n),
                    c
                };
                t.subscribe(Wn.a, function(t) {
                    return n.broadcast(wn.CHANGE_START, t, s)
                });
                var f = [void 0, void 0]
                  , l = function(t) {
                    var n = Object(Kn.a)(o);
                    return f[0] = Object(H.d)(t.fromMode, n),
                    f[1] = Object(H.d)(t.toMode, n),
                    f
                };
                t.subscribe(qn.a, function(t) {
                    return n.broadcast(wn.CHANGE_END, t, l)
                })
            })
        }, Qn = e(90), Xn = e(280), $n = e(80), te = function(t) {
            return !!t && (t instanceof vt.a || !!("object" == typeof t && "x"in t && "y"in t && "z"in t && ne(t.x) && ne(t.y) && ne(t.z)))
        }, ne = function(t) {
            if (null == t || isNaN(t))
                return !1;
            if ("number" == typeof t)
                return !0;
            var n = parseFloat(t);
            return !isNaN(n) && "number" == typeof n
        }, ee = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), re = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , oe = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, ie = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, ae = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, ue = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "MOVE_TO_MODE",
                e.validateMoveToModeInput = function(t) {
                    if (!t)
                        throw Error("Mode.moveTo -> no arguments provided -- mode is required");
                    t.options || (t.options = {});
                    var n = t.mode;
                    if (!rt(R.b, t.mode) && void 0 === (n = Object(H.b)(t.mode)))
                        throw Error("Mode.moveTo -> " + t.mode + " is not a valid viewmode");
                    if (n === R.b.TRANSITIONING)
                        throw Error("Mode.moveTo -> " + t.mode + " is not a valid viewmode");
                    t.options && t.options.rotation && (t.options.rotation.z = t.options.rotation.z || 0);
                    var r = e.validateOptions(t.options);
                    return {
                        mode: n,
                        options: {
                            transition: r.transition,
                            position: r.position,
                            rotation: r.rotation,
                            zoom: r.zoom
                        }
                    }
                }
                ,
                e.validateOptions = function(t) {
                    var n, e, r, o;
                    if (t) {
                        if (t.transition && void 0 === (r = Object(Qn.a)(t.transition)))
                            throw Error("Mode.moveTo -> " + t.transition + " is not a valid transition style");
                        t.rotation && te(t.rotation) && (n = Object($n.a)(t.rotation)),
                        t.position && te(t.position) && (e = new vt.a(t.position.x,t.position.y,t.position.z)),
                        t.zoom && !isNaN(t.zoom) && (o = Object(bt.d)(t.zoom, 1, 30))
                    }
                    return {
                        rotation: n,
                        position: e,
                        transition: r,
                        zoom: o
                    }
                }
                ,
                e.payload = re({}, e.validateMoveToModeInput(n)),
                e
            }
            return ee(n, t),
            n
        }(h.a), ce = function(t, n, e) {
            Promise.all([t.market.waitForData(En.a)]).then(function(t) {
                var e = ae(t, 1)[0];
                n.addBinding(ue, function(t) {
                    return oe(void 0, void 0, void 0, function() {
                        var r, o, i;
                        return ie(this, function(a) {
                            switch (a.label) {
                            case 0:
                                r = e.tryGetProperty("TransitionType", j.Ja.Interpolate),
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]),
                                o = r,
                                void 0 === (i = t.options.transition) || isNaN(i) || (o = i),
                                [4, n.issueCommand(new R.a(t.mode,o,{
                                    position: t.options.position,
                                    rotation: t.options.rotation,
                                    zoom: t.options.zoom
                                }))];
                            case 2:
                                return a.sent(),
                                [2, t.mode];
                            case 3:
                                if (a.sent()instanceof Xn.a)
                                    throw Error("Mode.moveTo -> Cannot move to " + t.mode + " during a mode transition");
                                throw Error("Mode.moveTo -> Could not move to " + t.mode);
                            case 4:
                                return [2]
                            }
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Mode",
                name: "moveTo",
                args: ["mode", "options"]
            }, function(t) {
                return new ue(t)
            }),
            e.addEnumToInterface({
                version: "3.x",
                namespace: "Mode",
                name: "Mode",
                values: R.b
            }),
            e.addEnumToInterface({
                version: "3.x",
                namespace: "Mode",
                name: "TransitionType",
                values: Qn.b
            }),
            e.addCommandToInterface(M.moveToModeInterface, function(t) {
                return new ue(t)
            }),
            e.addEnumToInterface(k.modesInterface)
        }, se = e(98), fe = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), le = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, pe = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, de = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "GET_MODEL_DATA",
                n
            }
            return fe(n, t),
            n
        }(h.a), he = function(t, n, e) {
            var r = {
                sid: "",
                sweeps: [],
                modelSupportsVr: !1
            };
            n.addBinding(de, function() {
                return le(void 0, void 0, void 0, function() {
                    var n, e;
                    return pe(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, t.waitForModule(j.H)];
                        case 1:
                            return n = o.sent(),
                            [4, t.market.waitForData(z.a)];
                        case 2:
                            return e = o.sent(),
                            [2, ye(n, r, e)]
                        }
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Model",
                name: "getData",
                args: []
            }, function() {
                return new de
            })
        }, ye = function(t, n, e) {
            return le(void 0, void 0, void 0, function() {
                var r, o;
                return pe(this, function(i) {
                    try {
                        return r = e.getSweepList(),
                        o = t.getModel(),
                        [2, Object(se.b)(o.sid, o.vrSupported, r, n)]
                    } catch (t) {
                        throw Error("no model currently loaded")
                    }
                    return [2]
                })
            })
        }, ve = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), be = Object.assign || function(t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in n = arguments[e])
                    Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }
        , we = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, me = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, ge = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "GET_MODEL_DETAILS",
                n
            }
            return ve(n, t),
            n
        }(h.a), _e = function(t, n, e) {
            Promise.all([t.waitForModule(j.H), t.market.waitForData(En.a)]).then(function(t) {
                return n.addBinding(ge, function() {
                    return we(void 0, void 0, void 0, function() {
                        return me(this, function(n) {
                            return [2, Oe(t[0], t[1])]
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Model",
                name: "getDetails",
                args: []
            }, function() {
                return new ge
            })
        }, Oe = function(t, n) {
            return we(void 0, void 0, void 0, function() {
                var e, r;
                return me(this, function(o) {
                    return e = t.getModel(),
                    r = {},
                    
                   
                    n.tryGetProperty("model_name", !0) && (r = be({}, r, {
                        name: e.data.name
                    })),
                    n.tryGetProperty("presented_by", !0) && (r = be({}, r, {
                        presentedBy: e.data.presented_by
                    })),
                    n.tryGetProperty("model_summary", !0) && (r = be({}, r, {
                        summary: e.data.summary//注释 测试概要
                    })),
                    n.tryGetProperty("address", !0) && (r = be({}, r, {
                        address: e.data.address,
                        formattedAddress: xe(e.data.address)
                    })),
                    n.tryGetProperty("contact_email", !0) && (r = be({}, r, {
                        contactEmail: e.data.contact_email
                    })),
                    n.tryGetProperty("contact_name", !0) && (r = be({}, r, {
                        contactName: e.data.contact_name
                    })),
                    n.tryGetProperty("contact_phone", !0) && (r = be({}, r, {
                        phone: e.data.contact_phone,
                        formattedContactPhone: e.data.formatted_contact_phone
                    })),
                    n.tryGetProperty("external_url", !0) && (r = be({}, r, {
                        shareUrl: e.data.external_url
                    })),
                    [2, be({}, r, {
                        sid: e.data.sid
                    })]
                })
            })
        }, xe = function(t) {
            if ("string" == typeof t)
                try {
                    t = JSON.parse(t)
                } catch (t) {
                    return ""
                }
            if (!(t && (t.address_1 || t.address_2 || t.city || t.state || t.zip)))
                return "";
            var n = [];
            return t.address_1 && n.push(t.address_1),
            t.address_2 && n.push(t.address_2),
            t.city && (n.length > 0 && n.push(", "),
            n.push(t.city)),
            t.state && (n.length > 0 && n.push(", "),
            n.push(t.state)),
            t.zip && (n.length > 0 && n.push(", "),
            n.push(t.zip)),
            n.join("")
        }, Te = e(297);
        !function(t) {
            t.MODEL_LOADED = "model.loaded"
        }(Un = Un || (Un = {}));
        var Pe, Ee = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Model",
                name: "Event",
                values: Un
            });
            var e = {
                sid: "",
                sweeps: [],
                modelSupportsVr: !1
            }
              , r = [e]
              , o = function(t) {
                return Object(se.b)(t.sid, t.vrSupported, t.sweepList, e),
                r
            };
            t.subscribe(Te.a, function(t) {
                n.broadcast(Un.MODEL_LOADED, t, o),
                Object(se.a)(t.urls, t.sid, t.vrSupported, t.sweepList).then(function(t) {
                    n.broadcast(ft.a.MODEL_LOADED, [t], function(t) {
                        return {
                            metadata: t[0]
                        }
                    }, !0)
                })
            })
        }, Se = e(30), Ae = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), je = function(t) {
            function n(n, e) {
                var r = t.call(this) || this;
                return r.payload = {
                    key: n,
                    value: e
                },
                r
            }
            return Ae(n, t),
            n.id = "SETTING_UPDATE",
            n
        }(h.a), ke = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Me = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Ie = function(t, n, e) {
            t.commandBinder.addBinding(je, function(n) {
                return ke(void 0, void 0, void 0, function() {
                    var e;
                    return Me(this, function(r) {
                        switch (r.label) {
                        case 0:
                            if (!n.key || "string" != typeof n.key)
                                throw Error("Settings: invalid key");
                            return [4, t.waitForModule(Se.default)];
                        case 1:
                            return (e = r.sent()).updateSetting(n.key, n.value),
                            [2, e.tryGetProperty(n.key, void 0)]
                        }
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Settings",
                name: "update",
                args: ["key", "value"]
            }, function(t) {
                return new je(t.key,t.value)
            })
        }, De = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), Ce = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.payload = {
                    key: n
                },
                e
            }
            return De(n, t),
            n.id = "SETTING_GET",
            n
        }(h.a), Ne = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Ge = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Re = function(t, n, e) {
            t.commandBinder.addBinding(Ce, function(n) {
                return Ne(void 0, void 0, void 0, function() {
                    return Ge(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, t.waitForModule(Se.default)];
                        case 1:
                            return [2, e.sent().tryGetProperty(n.key, void 0)]
                        }
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Settings",
                name: "get",
                args: ["key"]
            }, function(t) {
                return new Ce(t.key)
            })
        };
        !function(t) {
            t.ENTER = "sweep.enter",
            t.EXIT = "sweep.exit"
        }(Pe = Pe || (Pe = {}));
        var Fe, ze = e(193), Le = function(t, n) {
            var e;
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Sweep",
                name: "Event",
                values: Pe
            });
            var r = [""]
              , o = function() {
                return r[0] = e,
                r
            };
            t.subscribe(ze.a, function(t) {
                t.fromSweep && t.fromSweep !== t.toSweep && n.broadcast(Pe.EXIT, t, o)
            }),
            t.subscribe(Wn.a, function(t) {
                t.fromMode === Ct.a.Panorama && t.toMode !== Ct.a.Panorama && n.broadcast(Pe.EXIT, t, o)
            });
            var i = ["", ""]
              , a = function(t) {
                return i[0] = t.fromSweep,
                i[1] = t.toSweep,
                i
            }
              , u = {}
              , c = function(t) {
                return u.oldPano = t.fromSweep,
                u.newPano = t.toSweep,
                u
            };
            t.subscribe(Yn.a, function(t) {
                e = t.toSweep,
                n.broadcast(Pe.ENTER, t, a),
                n.broadcast(ft.a.ENTER_PANO, t, c, !0)
            })
        }, Be = e(211), Ve = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, He = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, We = function(t, n, e) {
            qe(t);
            e.addEnumToInterface({
                version: "3.x",
                namespace: "Sweep",
                name: "Transition",
                values: Qn.b
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Sweep",
                name: "moveTo",
                args: ["sweep", "options"]
            }, function(t) {
                return (t = t || {}).options = t.options || {},
                new Be.a({
                    sweep: t.sweep || "",
                    rotation: Ue(t.options.rotation) || void 0,
                    transition: t.options.transition
                })
            }),
            e.addCommandToInterface(M.moveToPanoInterface, function(t) {
                return t = t || {},
                new Be.a({
                    sweep: t.pano || "",
                    rotation: Ue(t.rotation) || void 0,
                    transition: t.transition
                })
            }),
            e.addEnumToInterface(k.transitionTypesInterface)
        }, qe = function(t) {
            t.commandBinder.addBinding(Be.a, function(n) {
                return Ve(void 0, void 0, void 0, function() {
                    var e, r, o, i, a;
                    return He(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return [4, t.waitForModule(j.Z)];
                        case 1:
                            return e = u.sent(),
                            [4, t.market.waitForData(En.a)];
                        case 2:
                            return r = u.sent(),
                            [4, t.waitForModule(j.Na)];
                        case 3:
                            if (o = u.sent(),
                            i = r.tryGetProperty("TransitionType", j.Ja.Interpolate),
                            !n.sweep)
                                throw Error("Sweep.moveTo -> no sweep specified");
                            if (void 0 === n.transition)
                                a = i;
                            else if (void 0 === (a = Object(Qn.a)(n.transition)))
                                throw Error("Sweep.moveTo -> " + n.transition + " is not a valid transition style");
                            return [4, o.currentMode !== Ct.a.Panorama ? o.switchToMode(Ct.a.Panorama, a, {
                                sweepID: n.sweep,
                                rotation: n.rotation
                            }) : e.moveToSweep({
                                transitionType: a,
                                sweepId: n.sweep,
                                rotation: n.rotation
                            })];
                        case 4:
                            return u.sent(),
                            [2, e.getCurrentSweep()]
                        }
                    })
                })
            })
        }, Ue = function(t) {
            if (t) {
                t.z = t.z || 0;
                var n = Object($n.a)(t);
                if (isNaN(n.x) || isNaN(n.y) || isNaN(n.z) || isNaN(n.w)) {
                    var e = "{ " + t.x + ", " + t.y + ", " + t.z + " }";
                    throw Error("Sweep.moveTo -> " + e + " is not a valid rotation")
                }
                return n
            }
        }, Ye = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }(), Ke = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }, Je = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }, Ze = function(t, n) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e)
                return t;
            var r, o, i = e.call(t), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, Qe = function(t, n) {
            n.addBinding(er, function() {
                return Ke(void 0, void 0, void 0, function() {
                    return Je(this, function(n) {
                        return [2, Promise.all([t.waitForModule(j.Ia), t.market.waitForData(z.a)]).then(function(t) {
                            var n = Ze(t, 2)
                              , e = n[0]
                              , r = n[1]
                              , o = e.getData(!1)
                              , i = [];
                            if (o.iterateSnapshots(function(t) {
                                i.push({
                                    sid: t.sid,
                                    thumbnailUrl: t.thumbnailUrl,
                                    imageUrl: t.imageUrl,
                                    is360: t.is360,
                                    name: t.name,
                                    mode: Object(H.d)(t.metadata.camera_mode, Object(Kn.a)(r)),
                                    position: t.metadata.camera_position,
                                    rotation: Object($n.b)(t.metadata.camera_quaternion)
                                })
                            }),
                            0 === i.length)
                                throw Error("No tour data found");
                            return i
                        })]
                    })
                })
            })
        }, Xe = function(t, n) {
            t.addBinding(rr, function(t) {
                return Ke(void 0, void 0, void 0, function() {
                    var e;
                    return Je(this, function(r) {
                        if (0 === n.getData(!1).getSnapshotCount())
                            throw Error("No tour data found");
                        try {
                            n.canChangeTourLocation() && (e = t ? t.index : void 0,
                            n.startTour(e))
                        } catch (t) {
                            throw Error("Error occurred while starting tour")
                        }
                        return [2]
                    })
                })
            })
        }, $e = function(t, n) {
            t.addBinding(or, function() {
                return Ke(void 0, void 0, void 0, function() {
                    return Je(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]),
                            [4, n.stopTour()];
                        case 1:
                            return t.sent(),
                            [3, 3];
                        case 2:
                            throw t.sent(),
                            Error("Error occurred while stopping tour");
                        case 3:
                            return [2]
                        }
                    })
                })
            })
        }, tr = function(t, n) {
            t.addBinding(ir, function(t) {
                return Ke(void 0, void 0, void 0, function() {
                    return Je(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, n.tourGoTo(t.index)];
                        case 1:
                            return e.sent(),
                            [3, 3];
                        case 2:
                            throw e.sent(),
                            Error("Error occurred while jumping to new tour location");
                        case 3:
                            return [2]
                        }
                    })
                })
            })
        }, nr = function(t, n) {
            t.addBinding(ar, function(t) {
                return Ke(void 0, void 0, void 0, function() {
                    return Je(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, t.forward];
                        case 1:
                            return e.sent() ? n.tourGoNext() : n.tourGoPrevious(),
                            [3, 3];
                        case 2:
                            throw e.sent(),
                            Error("Error while trying to travel to the next tour snapshot");
                        case 3:
                            return [2]
                        }
                    })
                })
            })
        }, er = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "GET_TOUR_DATA",
                n
            }
            return Ye(n, t),
            n
        }(h.a), rr = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "TOUR_START",
                e.payload = {
                    index: n
                },
                e
            }
            return Ye(n, t),
            n
        }(h.a), or = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "TOUR_STOP",
                n
            }
            return Ye(n, t),
            n
        }(h.a), ir = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "TOUR_STEP",
                e.payload = {
                    index: n
                },
                e
            }
            return Ye(n, t),
            n
        }(h.a), ar = function(t) {
            function n(n) {
                var e = t.call(this) || this;
                return e.id = "TOUR_STEP",
                e.payload = {
                    forward: n
                },
                e
            }
            return Ye(n, t),
            n
        }(h.a), ur = function(t, n, e) {
            Promise.all([t.waitForModule(j.Ia), t.market.waitForData(z.a)]).then(function(t) {
                var e = Ze(t, 1)[0];
                Xe(n, e),
                $e(n, e),
                tr(n, e),
                nr(n, e)
            }),
            Qe(t, n),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "start",
                args: ["index"]
            }, function(t) {
                return new rr(t.index)
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "stop",
                args: []
            }, function() {
                return new or
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "step",
                args: ["index"]
            }, function(t) {
                return new ir(t.index)
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "getData",
                args: []
            }, function() {
                return new er
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "next",
                args: []
            }, function() {
                return new ar(!0)
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "prev",
                args: []
            }, function() {
                return new ar(!1)
            })
        };
        !function(t) {
            t.STARTED = "tour.started",
            t.STOPPED = "tour.stopped",
            t.ENDED = "tour.ended",
            t.STEPPED = "tour.stepped"
        }(Fe = Fe || (Fe = {}));
        var cr = e(241)
          , sr = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Tour",
                name: "Event",
                values: Fe
            }),
            t.subscribe(cr.b, function() {
                return n.broadcast(Fe.STARTED)
            }),
            t.subscribe(cr.d, function() {
                return n.broadcast(Fe.STOPPED)
            }),
            t.subscribe(cr.a, function() {
                return n.broadcast(Fe.ENDED)
            });
            var e = [-1]
              , r = function(t) {
                return e[0] = t.index,
                e
            };
            t.subscribe(cr.c, function(t) {
                return n.broadcast(Fe.STEPPED, t, r)
            })
        }
          , fr = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            ;
            return function(n, e) {
                function r() {
                    this.constructor = n
                }
                t(n, e),
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                new r)
            }
        }()
          , lr = function(t, n, e, r) {
            return new (e || (e = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new e(function(n) {
                        n(t.value)
                    }
                    ).then(a, u)
                }
                c((r = r.apply(t, n || [])).next())
            }
            )
        }
          , pr = function(t, n) {
            var e, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(i) {
                return function(u) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                r && (o = r[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [0, o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, u])
                }
            }
        }
          , dr = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "WEBVR_PRELOAD",
                n
            }
            return fr(n, t),
            n
        }(h.a)
          , hr = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.id = "WEBVR_PRESENT",
                n
            }
            return fr(n, t),
            n
        }(h.a)
          , yr = function(t, n, e) {
            t.waitForModule(j.Qa).then(function(t) {
                n.addBinding(dr, function() {
                    return lr(void 0, void 0, void 0, function() {
                        return pr(this, function(n) {
                            return [2, function(t) {
                                return lr(void 0, void 0, void 0, function() {
                                    return pr(this, function(n) {
                                        return t.hackLoadVrScript(),
                                        [2]
                                    })
                                })
                            }(t)]
                        })
                    })
                }),
                n.addBinding(hr, function() {
                    return lr(void 0, void 0, void 0, function() {
                        return pr(this, function(n) {
                            return [2, function(t) {
                                return lr(void 0, void 0, void 0, function() {
                                    return pr(this, function(n) {
                                        return t.hackEnterVrMode(),
                                        [2]
                                    })
                                })
                            }(t)]
                        })
                    })
                })
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "VR",
                name: "preloadVr",
                args: []
            }, function() {
                return new dr
            }),
            e.addCommandToInterface({
                version: "3.x",
                namespace: "VR",
                name: "presentVr",
                args: []
            }, function() {
                return new hr
            })
        }
          , vr = e(285)
          , br = function(t, n) {
            n.addEnumToInterface({
                version: "3.x",
                namespace: "Stat",
                name: "Event",
                values: vr.a
            })
        };
        e.d(n, "bindSdkInterface", function() {
            return wr
        });
        var wr = function(t, n, e) {
            [g, P, ce, K, he, ur, _e, In, Fn, Hn, We, kt, Bt, qt, ct, tt, mt, N, Xt, tn.b, an.b, hn, yr, Ie, Re].forEach(function(r) {
                r(t, n, e)
            }),
            [p, d, sr, Zn, Ee, Tn, Le, dt, on, bn, br].forEach(function(n) {
                n(t, e)
            })
        }
    },
    89: function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return s
        });
        var r, o, i, a, u, c = e(1);
        function s(t, n) {
            this.origin = void 0 !== t ? t : new c.a,
            this.direction = void 0 !== n ? n : new c.a
        }
        s.prototype = {
            constructor: s,
            set: function(t, n) {
                return this.origin.copy(t),
                this.direction.copy(n),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.origin.copy(t.origin),
                this.direction.copy(t.direction),
                this
            },
            at: function(t, n) {
                return (n || new c.a).copy(this.direction).multiplyScalar(t).add(this.origin)
            },
            lookAt: function(t) {
                return this.direction.copy(t).sub(this.origin).normalize(),
                this
            },
            recast: (u = new c.a,
            function(t) {
                return this.origin.copy(this.at(t, u)),
                this
            }
            ),
            closestPointToPoint: function(t, n) {
                var e = n || new c.a;
                e.subVectors(t, this.origin);
                var r = e.dot(this.direction);
                return r < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(r).add(this.origin)
            },
            distanceToPoint: function(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            },
            distanceSqToPoint: function() {
                var t = new c.a;
                return function(n) {
                    var e = t.subVectors(n, this.origin).dot(this.direction);
                    return e < 0 ? this.origin.distanceToSquared(n) : (t.copy(this.direction).multiplyScalar(e).add(this.origin),
                    t.distanceToSquared(n))
                }
            }(),
            distanceSqToSegment: (o = new c.a,
            i = new c.a,
            a = new c.a,
            function(t, n, e, r) {
                o.copy(t).add(n).multiplyScalar(.5),
                i.copy(n).sub(t).normalize(),
                a.copy(this.origin).sub(o);
                var u, c, s, f, l = .5 * t.distanceTo(n), p = -this.direction.dot(i), d = a.dot(this.direction), h = -a.dot(i), y = a.lengthSq(), v = Math.abs(1 - p * p);
                if (v > 0)
                    if (c = p * d - h,
                    f = l * v,
                    (u = p * h - d) >= 0)
                        if (c >= -f)
                            if (c <= f) {
                                var b = 1 / v;
                                s = (u *= b) * (u + p * (c *= b) + 2 * d) + c * (p * u + c + 2 * h) + y
                            } else
                                c = l,
                                s = -(u = Math.max(0, -(p * c + d))) * u + c * (c + 2 * h) + y;
                        else
                            c = -l,
                            s = -(u = Math.max(0, -(p * c + d))) * u + c * (c + 2 * h) + y;
                    else
                        c <= -f ? s = -(u = Math.max(0, -(-p * l + d))) * u + (c = u > 0 ? -l : Math.min(Math.max(-l, -h), l)) * (c + 2 * h) + y : c <= f ? (u = 0,
                        s = (c = Math.min(Math.max(-l, -h), l)) * (c + 2 * h) + y) : s = -(u = Math.max(0, -(p * l + d))) * u + (c = u > 0 ? l : Math.min(Math.max(-l, -h), l)) * (c + 2 * h) + y;
                else
                    c = p > 0 ? -l : l,
                    s = -(u = Math.max(0, -(p * c + d))) * u + c * (c + 2 * h) + y;
                return e && e.copy(this.direction).multiplyScalar(u).add(this.origin),
                r && r.copy(i).multiplyScalar(c).add(o),
                s
            }
            ),
            intersectSphere: function() {
                var t = new c.a;
                return function(n, e) {
                    t.subVectors(n.center, this.origin);
                    var r = t.dot(this.direction)
                      , o = t.dot(t) - r * r
                      , i = n.radius * n.radius;
                    if (o > i)
                        return null;
                    var a = Math.sqrt(i - o)
                      , u = r - a
                      , c = r + a;
                    return u < 0 && c < 0 ? null : u < 0 ? this.at(c, e) : this.at(u, e)
                }
            }(),
            intersectsSphere: function(t) {
                return this.distanceToPoint(t.center) <= t.radius
            },
            distanceToPlane: function(t) {
                var n = t.normal.dot(this.direction);
                if (0 === n)
                    return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                var e = -(this.origin.dot(t.normal) + t.constant) / n;
                return e >= 0 ? e : null
            },
            intersectPlane: function(t, n) {
                var e = this.distanceToPlane(t);
                return null === e ? null : this.at(e, n)
            },
            intersectsPlane: function(t) {
                var n = t.distanceToPoint(this.origin);
                return 0 === n || t.normal.dot(this.direction) * n < 0
            },
            intersectBox: function(t, n) {
                var e, r, o, i, a, u, c = 1 / this.direction.x, s = 1 / this.direction.y, f = 1 / this.direction.z, l = this.origin;
                return c >= 0 ? (e = (t.min.x - l.x) * c,
                r = (t.max.x - l.x) * c) : (e = (t.max.x - l.x) * c,
                r = (t.min.x - l.x) * c),
                s >= 0 ? (o = (t.min.y - l.y) * s,
                i = (t.max.y - l.y) * s) : (o = (t.max.y - l.y) * s,
                i = (t.min.y - l.y) * s),
                e > i || o > r ? null : ((o > e || e != e) && (e = o),
                (i < r || r != r) && (r = i),
                f >= 0 ? (a = (t.min.z - l.z) * f,
                u = (t.max.z - l.z) * f) : (a = (t.max.z - l.z) * f,
                u = (t.min.z - l.z) * f),
                e > u || a > r ? null : ((a > e || e != e) && (e = a),
                (u < r || r != r) && (r = u),
                r < 0 ? null : this.at(e >= 0 ? e : r, n)))
            },
            intersectsBox: (r = new c.a,
            function(t) {
                return null !== this.intersectBox(t, r)
            }
            ),
            intersectTriangle: function() {
                var t = new c.a
                  , n = new c.a
                  , e = new c.a
                  , r = new c.a;
                return function(o, i, a, u, c) {
                    n.subVectors(i, o),
                    e.subVectors(a, o),
                    r.crossVectors(n, e);
                    var s, f = this.direction.dot(r);
                    if (f > 0) {
                        if (u)
                            return null;
                        s = 1
                    } else {
                        if (!(f < 0))
                            return null;
                        s = -1,
                        f = -f
                    }
                    t.subVectors(this.origin, o);
                    var l = s * this.direction.dot(e.crossVectors(t, e));
                    if (l < 0)
                        return null;
                    var p = s * this.direction.dot(n.cross(t));
                    if (p < 0)
                        return null;
                    if (l + p > f)
                        return null;
                    var d = -s * t.dot(r);
                    return d < 0 ? null : this.at(d / f, c)
                }
            }(),
            applyMatrix4: function(t) {
                return this.direction.add(this.origin).applyMatrix4(t),
                this.origin.applyMatrix4(t),
                this.direction.sub(this.origin),
                this.direction.normalize(),
                this
            },
            equals: function(t) {
                return t.origin.equals(this.origin) && t.direction.equals(this.direction)
            }
        }
    },
    91: function(t, n, e) {
        "use strict";
        e.d(n, "i", function() {
            return k
        }),
        e.d(n, "a", function() {
            return M
        }),
        e.d(n, "b", function() {
            return I
        }),
        e.d(n, "e", function() {
            return D
        }),
        e.d(n, "h", function() {
            return C
        }),
        e.d(n, "f", function() {
            return N
        }),
        e.d(n, "g", function() {
            return G
        }),
        e.d(n, "d", function() {
            return R
        }),
        e.d(n, "c", function() {
            return F
        });
        var r, o, i, a, u, c, s, f, l, p, d, h, y, v, b, w, m, g, _, O, x, T = e(1), P = e(3), E = e(27), S = e(89), A = e(7), j = e(51), k = function(t) {
            return 1 === t.elements[15]
        }, M = (r = new T.a,
        function(t, n, e, o) {
            return r.copy(t).sub(n),
            r.clampLength(e, o),
            n.clone().add(r)
        }
        ), I = function() {
            var t = new T.a;
            return function(n, e, r, o) {
                t.copy(e).sub(n);
                var i = Math.atan2(Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.z, 2)), t.y)
                  , a = Math.min(Math.max(r, i), o);
                return Math.abs(i - a) > Number.EPSILON ? D(n, e, i - a, !1) : n
            }
        }(), D = function() {
            var t = new T.a
              , n = new T.a;
            return function(e, r, o, i) {
                return t.copy(r).sub(e),
                i ? n.copy(j.a.UP) : n.copy(t).applyAxisAngle(j.a.UP, -1 * Math.PI / 2).setY(0).normalize(),
                t.applyAxisAngle(n, o),
                r.clone().sub(t)
            }
        }(), C = (o = new T.a,
        i = new T.a,
        function(t, n, e) {
            return o.copy(t).sub(n).normalize(),
            i.copy(t).sub(e).normalize(),
            (new P.a).setFromUnitVectors(o, i)
        }
        ), N = (a = new A.a,
        function(t, n) {
            return a.setPosition(t),
            a.lookAt(t, n, j.a.UP),
            (new P.a).setFromRotationMatrix(a)
        }
        ), G = (u = new T.a,
        function(t, n, e) {
            return u.copy(j.a.FORWARD).applyQuaternion(t).normalize(),
            u.clone().multiplyScalar(-1 * e).add(n)
        }
        ), R = (c = new S.a,
        s = new T.a,
        function(t, n, e) {
            return s.copy(j.a.FORWARD).applyQuaternion(n),
            c.set(t, s),
            c.intersectPlane(e)
        }
        ), F = (f = new T.a,
        l = new T.a,
        p = new T.a,
        d = new T.a,
        h = [new T.a, new T.a, new T.a, new T.a, new T.a, new T.a, new T.a, new T.a],
        y = new T.a,
        v = new T.a,
        b = new T.a,
        w = new T.a,
        m = new E.a,
        g = new T.a,
        _ = new S.a,
        O = new T.a,
        x = new T.a,
        function(t, n, e, r, o, i) {
            f.copy(j.a.FORWARD).applyQuaternion(n).setY(0),
            l.copy(f).setY(-Math.PI / 6).normalize(),
            d.copy(l).applyAxisAngle(j.a.UP, -Math.PI / 2).setY(0).normalize(),
            p.copy(d).cross(l).normalize();
            for (var a = 0, u = r.max, c = r.min, s = [u, c], T = 0; T < 2; T++)
                for (var P = s[T].x, E = 0; E < 2; E++)
                    for (var S = s[E].y, A = 0; A < 2; A++) {
                        var k = s[A].z;
                        h[a].set(P, S, k),
                        a++
                    }
            y.copy(c),
            b.copy(t).setY(c.y);
            var M = v.copy(y).sub(b).dot(l);
            h.forEach(function(t) {
                if (t.y !== u.y) {
                    var n = v.copy(t).sub(b).dot(l);
                    n < M && (y.copy(t),
                    M = n)
                }
            });
            var I = Math.sign(y.dot(d));
            w.copy(y).setX(y.x === u.x ? c.x : u.x),
            Math.sign(w.dot(d)) !== I ? m.set(g.set(0, 0, -1 * Math.sign(y.z)), Math.abs(y.z)) : (w.copy(y).setZ(y.z === u.z ? c.z : u.z),
            m.set(g.set(-1 * Math.sign(y.x), 0, 0), Math.abs(y.x))),
            _.set(t, O.copy(l).multiplyScalar(-1)),
            _.intersectPlane(m, x);
            var D = Math.min(Math.abs(x && x.dot(l)), M)
              , C = 0
              , G = 0;
            h.forEach(function(n) {
                v.copy(n).sub(t);
                var e = Math.abs(v.dot(d))
                  , r = Math.abs(v.dot(p));
                e > C && (C = e),
                r > G && (G = r)
            });
            var R = C / Math.tan(o * i / 2)
              , F = G / Math.tan(o / 2)
              , z = Math.max(R, F) + Math.abs(D)
              , L = {};
            return L.position = t.clone().add(l.clone().multiplyScalar(1.1 * -z)),
            L.rotation = N(L.position, t),
            L
        }
        )
    }
}]);
