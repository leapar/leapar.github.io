(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    109: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return a
        });
        var e, r = n(19), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o(o, n) {
                var e = t.call(this) || this;
                return e.floorIndex = o,
                e.floorName = n,
                e
            }
            return i(o, t),
            o
        }(r.a)
    },
    144: function(t, o, n) {
        "use strict";
        var e = n(11)
          , r = n(53)
          , i = n(1)
          , a = n(3)
          , s = n(7)
          , c = function(t, o) {
            return t && o ? t.equals(o) : t === o
        }
          , p = n(37)
          , u = n(91);
        n.d(o, "b", function() {
            return y
        }),
        n.d(o, "a", function() {
            return m
        });
        var l, f = (l = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            l(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), y = function(t, o, n) {
            void 0 === n && (n = !0),
            o.position = h(t.position, o.position, n),
            o.rotation = h(t.rotation, o.rotation, n),
            o.projection = h(t.projection, o.projection, n)
        }, h = function(t, o, n) {
            return void 0 === n && (n = !0),
            t && !o ? o = t.clone() : t && o ? o.copy(t) : n && (o = void 0),
            o
        }, v = function() {
            return Object(p.a)({
                position: Object(p.a)(new i.a),
                rotation: Object(p.a)(new a.a),
                projection: new s.a,
                focalDistance: -1
            })
        }, m = function(t) {
            function o() {
                var o = t.call(this) || this;
                return o.size = {
                    width: 0,
                    height: 0
                },
                o.pose = v(),
                o.transition = {
                    startTime: 0,
                    duration: 0,
                    active: !1,
                    type: null,
                    progress: new r.a(0),
                    blackoutProgress: new r.a(0),
                    from: {
                        position: new i.a,
                        rotation: new a.a,
                        projection: new s.a
                    },
                    to: {
                        position: new i.a,
                        rotation: new a.a,
                        projection: new s.a
                    }
                },
                o
            }
            return f(o, t),
            o.prototype.setSize = function(t) {
                this.size.width = t.width,
                this.size.height = t.height
            }
            ,
            o.prototype.aspect = function() {
                return this.pose.projection.elements[5] / this.pose.projection.elements[0]
            }
            ,
            o.prototype.fovY = function() {
                return 2 * Math.atan(1 / this.pose.projection.elements[5])
            }
            ,
            o.prototype.fovX = function() {
                return 2 * Math.atan(1 * this.aspect() / this.pose.projection.elements[5])
            }
            ,
            o.prototype.isOrtho = function() {
                return Object(u.i)(this.pose.projection)
            }
            ,
            o.prototype.baseZoom = function() {
                return this.pose.projection.elements[0] / 2
            }
            ,
            o.prototype.zoom = function() {
                return this.isOrtho() ? this.baseZoom() * this.size.width : this.baseFovY / this.fovY()
            }
            ,
            o.prototype.copyTransition = function(t) {
                this.transition.active = t.active,
                this.transition.type = t.type,
                this.transition.startTime = t.startTime,
                this.transition.duration = t.duration,
                t.progress && this.transition.progress.copy(t.progress),
                t.blackoutProgress && this.transition.blackoutProgress.copy(t.blackoutProgress),
                t.from && y(t.from, this.transition.from),
                t.to && y(t.to, this.transition.to)
            }
            ,
            o.prototype.update = function(t) {
                this.copy(t)
            }
            ,
            o.prototype.clone = function() {
                var t = new o;
                return t.copy(this),
                t
            }
            ,
            o.prototype.copy = function(t) {
                this.pose.position.copy(t.pose.position),
                this.pose.rotation.copy(t.pose.rotation),
                this.pose.focalDistance = t.pose.focalDistance,
                this.pose.projection.copy(t.pose.projection),
                this.baseFovY = t.baseFovY,
                this.copyTransition(t.transition)
            }
            ,
            o.prototype.shallowIsEqual = function(t) {
                return this.pose.position.equals(t.pose.position) && this.pose.rotation.equals(t.pose.rotation) && this.pose.projection.equals(t.pose.projection) && this.pose.focalDistance === t.pose.focalDistance && this.baseFovY === t.baseFovY
            }
            ,
            o.prototype.isEqual = function(t) {
                return this.shallowIsEqual(t) && this.transitionIsEqual(t.transition)
            }
            ,
            o.prototype.transitionIsEqual = function(t) {
                return this.transition.active === t.active && this.transition.type === t.type && this.transition.progress.equals(t.progress) && this.transition.blackoutProgress.equals(t.blackoutProgress) && c(this.transition.from.position, t.from.position) && c(this.transition.from.rotation, t.from.rotation) && c(this.transition.from.projection, t.from.projection) && c(this.transition.to.position, t.to.position) && c(this.transition.to.rotation, t.to.rotation) && c(this.transition.to.projection, t.to.projection) && this.transition.startTime === t.startTime && this.transition.duration === t.duration
            }
            ,
            o
        }(e.a)
    },
    152: function(t, o) {
        t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n"
    },
    153: function(t, o) {
        t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
    },
    188: function(t, o, n) {
        "use strict";
        var e, r = n(19), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o(o, n) {
                var e = t.call(this) || this;
                return e.fromMode = n,
                e.toMode = o,
                e.timestamp = Date.now(),
                e
            }
            return i(o, t),
            o
        }(r.a);
        o.a = a
    },
    190: function(t, o, n) {
        "use strict";
        var e, r = n(19), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o(o, n) {
                var e = t.call(this) || this;
                return e.fromSweep = n,
                e.toSweep = o,
                e.timestamp = Date.now(),
                e
            }
            return i(o, t),
            o
        }(r.a);
        o.a = a
    },
    192: function(t, o, n) {
        "use strict";
        var e, r = n(188), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(o, t),
            o
        }(r.a);
        o.a = a
    },
    195: function(t, o, n) {
        "use strict";
        var e, r = n(188), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(o, t),
            o
        }(r.a);
        o.a = a
    },
    196: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return a
        });
        var e, r = n(11), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o() {
                var o = null !== t && t.apply(this, arguments) || this;
                return o.width = window.innerWidth,
                o.height = window.innerHeight,
                o.aspectRatio = o.width / o.height,
                o.x = 0,
                o.y = 0,
                o
            }
            return i(o, t),
            o.prototype.update = function(t) {
                this.width = t.width,
                this.height = t.height,
                this.aspectRatio = t.width / t.height,
                this.x = t.x,
                this.y = t.y
            }
            ,
            o
        }(r.a)
    },
    204: function(t, o, n) {
        "use strict";
        var e, r = n(190), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o(o, n, e, r) {
                var i = t.call(this, o, r) || this;
                return i.alignmentType = n,
                i.placementType = e,
                i
            }
            return i(o, t),
            o
        }(r.a);
        o.a = a
    },
    218: function(t, o, n) {
        "use strict";
        n.d(o, "b", function() {
            return a
        }),
        n.d(o, "a", function() {
            return s
        });
        var e, r = n(19), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o(o, n, e) {
                var r = t.call(this) || this;
                return r.id = o,
                r.position = n,
                r.buttons = e,
                r
            }
            return i(o, t),
            o
        }(r.a), s = function(t) {
            function o(o, n, e, r) {
                var i = t.call(this) || this;
                return i.id = o,
                i.position = n,
                i.button = e,
                i.down = r,
                i
            }
            return i(o, t),
            o
        }(r.a)
    },
    220: function(t, o, n) {
        "use strict";
        var e = function(t, o) {
            var n, e, r, i, a = {
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
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                e && (r = e[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(e, i[1])).done)
                                    return r;
                                switch (e = 0,
                                r && (i = [0, r.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    r = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    e = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = i;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = o.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                e = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , r = function(t) {
            var o = "function" == typeof Symbol && t[Symbol.iterator]
              , n = 0;
            return o ? o.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0),
                    {
                        value: t && t[n++],
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
                var o = this.mappingFunction(t);
                return !this.map[o] && (this.list.push(t),
                this.map[o] = t,
                !0)
            }
            ,
            t.prototype.set = function(t) {
                var o = this.mappingFunction(t);
                return this.map[o] ? (this.map[o] = t,
                !0) : (this.add(t),
                !0)
            }
            ,
            t.prototype.count = function() {
                return this.list.length
            }
            ,
            t.prototype[Symbol.iterator] = function() {
                var t, o, n, i, a;
                return e(this, function(e) {
                    switch (e.label) {
                    case 0:
                        e.trys.push([0, 5, 6, 7]),
                        t = r(this.list),
                        o = t.next(),
                        e.label = 1;
                    case 1:
                        return o.done ? [3, 4] : [4, o.value];
                    case 2:
                        e.sent(),
                        e.label = 3;
                    case 3:
                        return o = t.next(),
                        [3, 1];
                    case 4:
                        return [3, 7];
                    case 5:
                        return n = e.sent(),
                        i = {
                            error: n
                        },
                        [3, 7];
                    case 6:
                        try {
                            o && !o.done && (a = t.return) && a.call(t)
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
        o.a = a
    },
    224: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return r
        }),
        n.d(o, "d", function() {
            return i
        }),
        n.d(o, "c", function() {
            return a
        }),
        n.d(o, "b", function() {
            return s
        });
        var e = n(7)
          , r = {
            fov: 75,
            near: .1,
            far: 1e3
        }
          , i = function(t) {
            return (new e.a).makePerspective(r.fov, t, r.near, r.far)
        }
          , a = function(t, o, n) {
            void 0 === n && (n = 1);
            var i = t / 2
              , a = o / 2
              , s = (new e.a).makeOrthographic(-i, i, a, -a, r.near, r.far);
            return s.elements[0] *= n,
            s.elements[5] *= n,
            s
        }
          , s = function(t) {
            return 1 === t.elements[15]
        }
    },
    283: function(t, o, n) {
        "use strict";
        var e, r = n(19), i = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), a = function(t) {
            function o(o, n, e) {
                var r = t.call(this) || this;
                return r.size = o,
                r.sweepId = n,
                r.renderTarget = e,
                r
            }
            return i(o, t),
            o
        }(r.a);
        o.a = a
    },
    329: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return c
        });
        var e, r = n(11), i = n(1), a = n(42), s = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), c = function(t) {
            function o(o, n, e) {
                var r = t.call(this) || this;
                return r.opacity = o,
                r.bounds = n,
                r.center = e,
                r
            }
            return s(o, t),
            o.prototype.update = function(t) {
                this.opacity = t.opacity,
                this.bounds = new a.a(t.bounds.min,t.bounds.max),
                this.center = (new i.a).copy(t.center)
            }
            ,
            o
        }(r.a)
    },
    330: function(t, o, n) {
        "use strict";
        var e = n(1)
          , r = n(7)
          , i = n(153)
          , a = n(152);
        o.a = {
            cube: {
                uniforms: {
                    map: {
                        type: "t",
                        value: null
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: a + n(502),
                fragmentShader: i + n(501)
            },
            model: {
                uniforms: {
                    blackRatio: {
                        type: "f",
                        value: 0
                    },
                    panoMap: {
                        type: "t",
                        value: null
                    },
                    panoPosition: {
                        type: "v3",
                        value: new e.a
                    },
                    panoMatrix: {
                        type: "m4",
                        value: new r.a
                    }
                },
                vertexShader: a + n(500),
                fragmentShader: i + n(499)
            },
            modelFull: {
                uniforms: {
                    map: {
                        type: "t",
                        value: null
                    },
                    meshOpacity: {
                        type: "f",
                        value: 0
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    },
                    progress: {
                        type: "f",
                        value: 0
                    },
                    blackRatio: {
                        type: "f",
                        value: 0
                    },
                    pano0Map: {
                        type: "t",
                        value: null
                    },
                    pano0Position: {
                        type: "v3",
                        value: new e.a
                    },
                    pano0Matrix: {
                        type: "m4",
                        value: new r.a
                    },
                    pano1Map: {
                        type: "t",
                        value: null
                    },
                    pano1Position: {
                        type: "v3",
                        value: new e.a
                    },
                    pano1Matrix: {
                        type: "m4",
                        value: new r.a
                    },
                    skyboxMode: {
                        type: "i",
                        value: 0
                    }
                },
                vertexShader: a + n(498),
                fragmentShader: i + n(497)
            },
            modelOutside: {
                uniforms: {
                    map: {
                        type: "t",
                        value: null
                    },
                    meshOpacity: {
                        type: "f",
                        value: 1
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    },
                    blackRatio: {
                        type: "f",
                        value: 0
                    }
                },
                vertexShader: a + n(496),
                fragmentShader: i + n(495)
            }
        }
    },
    331: function(t, o, n) {
        "use strict";
        var e, r = n(1), i = n(106), a = n(147), s = n(46), c = n(330), p = (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, o) {
            t.__proto__ = o
        }
        || function(t, o) {
            for (var n in o)
                o.hasOwnProperty(n) && (t[n] = o[n])
        }
        ,
        function(t, o) {
            function n() {
                this.constructor = t
            }
            e(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), u = new r.a(1,1,1), l = function(t) {
            function o(o) {
                return void 0 === o && (o = {}),
                t.call(this, Object(s.e)({
                    fragmentShader: c.a.modelFull.fragmentShader,
                    vertexShader: c.a.modelFull.vertexShader,
                    uniforms: i.a.clone(c.a.modelFull.uniforms),
                    name: "ModelTextureMaterial"
                }, o)) || this
            }
            return p(o, t),
            o.prototype.setProjectedPano = function(t, o, n, e) {
                var r = "pano" + t;
                e && (this.uniforms[r + "Map"].value = e),
                o && this.uniforms[r + "Position"].value.copy(o),
                n && o && this.uniforms[r + "Matrix"].value.compose(o, n, u)
            }
            ,
            o.prototype.enableSkyboxMode = function(t) {
                this.uniforms.skyboxMode.value = t ? 1 : 0
            }
            ,
            o
        }(a.a);
        o.a = l
    },
    495: function(t, o) {
        t.exports = "uniform sampler2D map;\nuniform float opacity;\nuniform float blackRatio;\nvarying vec2 vUv;\n\nvec4 white = vec4(0.8, 0.8, 0.8, 1.0);\nvec4 black = vec4(0.0, 0.0, 0.0, 1.0);\n\nvoid main() {\n\n  vec4 colorFromTexture = texture2D( map, vUv );\n  float whiteness = 1.0 - smoothstep(0.1, 0.2, opacity);\n  colorFromTexture = mix(colorFromTexture, white, whiteness);\n  colorFromTexture = mix(colorFromTexture, black, blackRatio);\n  gl_FragColor = vec4(colorFromTexture.rgb, opacity);\n\n}\n"
    },
    496: function(t, o) {
        t.exports = "varying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"
    },
    497: function(t, o) {
        t.exports = "uniform sampler2D map;\nuniform float meshOpacity;\nuniform float opacity;\nuniform float progress;\nuniform float blackRatio;\n\nuniform vec3 pano0Position;\nuniform samplerCube pano0Map;\n\nuniform vec3 pano1Position;\nuniform samplerCube pano1Map;\n\nvarying vec2 vUv;\nvarying vec3 vWorldPosition0;\nvarying vec3 vWorldPosition1;\n\nvoid main() {\n\tconst vec4 BLACK = vec4(0.0, 0.0, 0.0, 1.0);\n\tconst vec4 WHITE = vec4(0.8, 0.8, 0.8, 1.0);\n\n\tvec4 colorFromPano0 = textureCube( pano0Map, vWorldPosition0.xyz);\n\tvec4 colorFromPano1 = textureCube( pano1Map, vWorldPosition1.xyz);\n\tvec4 colorFromPanos = mix(colorFromPano0, colorFromPano1, progress);\n\n\tvec4 colorFromTexture = texture2D( map, vUv );\n\tcolorFromPanos = mix(colorFromPanos, colorFromTexture, meshOpacity);\n\n\tfloat whiteness = 1.0 - smoothstep(0.1, 0.2, opacity);\n\tcolorFromPanos = mix(colorFromPanos, WHITE, whiteness);\n\tcolorFromPanos = mix(colorFromPanos, BLACK, blackRatio);\n\n\tgl_FragColor = vec4(colorFromPanos.rgb, opacity);\n}\n"
    },
    498: function(t, o) {
        t.exports = "uniform vec3 pano0Position;\nuniform mat4 pano0Matrix;\n\nuniform vec3 pano1Position;\nuniform mat4 pano1Matrix;\n\nuniform int skyboxMode;\n\nvarying vec2 vUv;\nvarying vec3 vWorldPosition0;\nvarying vec3 vWorldPosition1;\n\nvoid main() {\n\n  vUv = uv;\n  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n\n  vec3 positionLocalToPanoCenter0 = worldPosition.xyz - pano0Position;\n  vWorldPosition0 = (vec4(positionLocalToPanoCenter0, 1.0) * pano0Matrix).xyz;\n  vWorldPosition0.x *= -1.0;\n\n  vec3 positionLocalToPanoCenter1 = worldPosition.xyz - pano1Position;\n  vWorldPosition1 = (vec4(positionLocalToPanoCenter1, 1.0) * pano1Matrix).xyz;\n  vWorldPosition1.x *= -1.0;\n\n  vec4 projectedPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  if (skyboxMode == 1) {\n    projectedPosition.z = projectedPosition.w;\n  }\n\n  gl_Position = projectedPosition;\n\n}\n"
    },
    499: function(t, o) {
        t.exports = "\nuniform float blackRatio;\nuniform samplerCube panoMap;\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n\n\tconst vec4 BLACK = vec4(0.0, 0.0, 0.0, 1.0);\n\tvec4 colorFromPano = textureCube(panoMap, vWorldPosition.xyz);\n\n\tgl_FragColor = mix(colorFromPano, BLACK, blackRatio );\n\n}\n"
    },
    500: function(t, o) {
        t.exports = "\nuniform vec3 panoPosition;\nuniform mat4 panoMatrix;\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n\n  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n\n  vec3 positionLocalToPanoCenter = worldPosition.xyz - panoPosition;\n  vWorldPosition = (vec4(positionLocalToPanoCenter, 1.0) * panoMatrix).xyz;\n  vWorldPosition.x *= -1.0;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"
    },
    501: function(t, o) {
        t.exports = "uniform samplerCube map;\nuniform float opacity;\n\nvarying vec3 vWorldPosition;\n\nvoid main() {\n  vec4 color = textureCube( map, vec3( -vWorldPosition.x, vWorldPosition.yz ) );\n  gl_FragColor = vec4(color.rgb, opacity);\n}\n"
    },
    502: function(t, o) {
        t.exports = "varying vec3 vWorldPosition;\n\nvoid main() {\n  vWorldPosition = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"
    },
    51: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return r
        });
        var e = n(1)
          , r = function() {
            function t() {}
            return t.UP = new e.a(0,1,0),
            t.DOWN = new e.a(0,-1,0),
            t.LEFT = new e.a(-1,0,0),
            t.RIGHT = new e.a(1,0,0),
            t.FORWARD = new e.a(0,0,-1),
            t.BACK = new e.a(0,0,1),
            t.ZERO = new e.a(0,0,0),
            t
        }()
    },
    91: function(t, o, n) {
        "use strict";
        n.d(o, "i", function() {
            return T
        }),
        n.d(o, "a", function() {
            return A
        }),
        n.d(o, "b", function() {
            return W
        }),
        n.d(o, "e", function() {
            return S
        }),
        n.d(o, "h", function() {
            return C
        }),
        n.d(o, "f", function() {
            return R
        }),
        n.d(o, "g", function() {
            return D
        }),
        n.d(o, "d", function() {
            return E
        }),
        n.d(o, "c", function() {
            return L
        });
        var e, r, i, a, s, c, p, u, l, f, y, h, v, m, d, w, b, P, x, _, g, M = n(1), O = n(3), j = n(27), F = n(89), z = n(7), k = n(51), T = function(t) {
            return 1 === t.elements[15]
        }, A = (e = new M.a,
        function(t, o, n, r) {
            return e.copy(t).sub(o),
            e.clampLength(n, r),
            o.clone().add(e)
        }
        ), W = function() {
            var t = new M.a;
            return function(o, n, e, r) {
                t.copy(n).sub(o);
                var i = Math.atan2(Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.z, 2)), t.y)
                  , a = Math.min(Math.max(e, i), r);
                return Math.abs(i - a) > Number.EPSILON ? S(o, n, i - a, !1) : o
            }
        }(), S = function() {
            var t = new M.a
              , o = new M.a;
            return function(n, e, r, i) {
                return t.copy(e).sub(n),
                i ? o.copy(k.a.UP) : o.copy(t).applyAxisAngle(k.a.UP, -1 * Math.PI / 2).setY(0).normalize(),
                t.applyAxisAngle(o, r),
                e.clone().sub(t)
            }
        }(), C = (r = new M.a,
        i = new M.a,
        function(t, o, n) {
            return r.copy(t).sub(o).normalize(),
            i.copy(t).sub(n).normalize(),
            (new O.a).setFromUnitVectors(r, i)
        }
        ), R = (a = new z.a,
        function(t, o) {
            return a.setPosition(t),
            a.lookAt(t, o, k.a.UP),
            (new O.a).setFromRotationMatrix(a)
        }
        ), D = (s = new M.a,
        function(t, o, n) {
            return s.copy(k.a.FORWARD).applyQuaternion(t).normalize(),
            s.clone().multiplyScalar(-1 * n).add(o)
        }
        ), E = (c = new F.a,
        p = new M.a,
        function(t, o, n) {
            return p.copy(k.a.FORWARD).applyQuaternion(o),
            c.set(t, p),
            c.intersectPlane(n)
        }
        ), L = (u = new M.a,
        l = new M.a,
        f = new M.a,
        y = new M.a,
        h = [new M.a, new M.a, new M.a, new M.a, new M.a, new M.a, new M.a, new M.a],
        v = new M.a,
        m = new M.a,
        d = new M.a,
        w = new M.a,
        b = new j.a,
        P = new M.a,
        x = new F.a,
        _ = new M.a,
        g = new M.a,
        function(t, o, n, e, r, i) {
            u.copy(k.a.FORWARD).applyQuaternion(o).setY(0),
            l.copy(u).setY(-Math.PI / 6).normalize(),
            y.copy(l).applyAxisAngle(k.a.UP, -Math.PI / 2).setY(0).normalize(),
            f.copy(y).cross(l).normalize();
            for (var a = 0, s = e.max, c = e.min, p = [s, c], M = 0; M < 2; M++)
                for (var O = p[M].x, j = 0; j < 2; j++)
                    for (var F = p[j].y, z = 0; z < 2; z++) {
                        var T = p[z].z;
                        h[a].set(O, F, T),
                        a++
                    }
            v.copy(c),
            d.copy(t).setY(c.y);
            var A = m.copy(v).sub(d).dot(l);
            h.forEach(function(t) {
                if (t.y !== s.y) {
                    var o = m.copy(t).sub(d).dot(l);
                    o < A && (v.copy(t),
                    A = o)
                }
            });
            var W = Math.sign(v.dot(y));
            w.copy(v).setX(v.x === s.x ? c.x : s.x),
            Math.sign(w.dot(y)) !== W ? b.set(P.set(0, 0, -1 * Math.sign(v.z)), Math.abs(v.z)) : (w.copy(v).setZ(v.z === s.z ? c.z : s.z),
            b.set(P.set(-1 * Math.sign(v.x), 0, 0), Math.abs(v.x))),
            x.set(t, _.copy(l).multiplyScalar(-1)),
            x.intersectPlane(b, g);
            var S = Math.min(Math.abs(g && g.dot(l)), A)
              , C = 0
              , D = 0;
            h.forEach(function(o) {
                m.copy(o).sub(t);
                var n = Math.abs(m.dot(y))
                  , e = Math.abs(m.dot(f));
                n > C && (C = n),
                e > D && (D = e)
            });
            var E = C / Math.tan(r * i / 2)
              , L = D / Math.tan(r / 2)
              , I = Math.max(E, L) + Math.abs(S)
              , U = {};
            return U.position = t.clone().add(l.clone().multiplyScalar(1.1 * -I)),
            U.rotation = R(U.position, t),
            U
        }
        )
    }
}]);
