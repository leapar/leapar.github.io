(window.webpackJsonp = window.webpackJsonp || []).push([[24], {
    155: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return a
        });
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t, r, n) {
                var i = e.call(this) || this;
                return i.sweepId = t,
                i.toPosition = r,
                i.fromPosition = n,
                i
            }
            return o(t, e),
            t
        }(i.a)
    },
    193: function(e, t, r) {
        "use strict";
        var n, i = r(190), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(t, e),
            t
        }(i.a);
        t.a = a
    },
    213: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return a
        });
        var n, i = r(11), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.tags = {},
                t.visitedTags = [],
                t.viewedTags = 0,
                t
            }
            return o(t, e),
            t.prototype.update = function(e) {
                this.tags = e.tags
            }
            ,
            t.prototype.addTag = function(e) {
                this.tags[e.sid] = e
            }
            ,
            t.prototype.visitTag = function(e) {
                this.viewedTags++,
                -1 === this.visitedTags.indexOf(e) && this.visitedTags.push(e)
            }
            ,
            t.prototype.getViewedTagCount = function() {
                return this.viewedTags
            }
            ,
            t.prototype.getVisitedTags = function() {
                return this.visitedTags
            }
            ,
            t.prototype.getTag = function(e) {
                return this.tags[e]
            }
            ,
            t.prototype.getTagCount = function() {
                return Object.keys(this.tags).length
            }
            ,
            t.prototype.iterate = function(e) {
                for (var t in this.tags)
                    e(this.tags[t])
            }
            ,
            t
        }(i.a)
    },
    219: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "a", function() {
            return n
        }),
        function(e) {
            e[e.BASE = 1] = "BASE",
            e[e.STANDARD = 2] = "STANDARD",
            e[e.HIGH = 3] = "HIGH",
            e[e.ULTRAHIGH = 4] = "ULTRAHIGH"
        }(n = n || (n = {}))
    },
    225: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return a
        }),
        r.d(t, "c", function() {
            return s
        }),
        r.d(t, "a", function() {
            return u
        });
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.sid = t,
                n.hovering = r,
                n
            }
            return o(t, e),
            t
        }(i.a), s = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.sid = t,
                r
            }
            return o(t, e),
            t
        }(i.a), u = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.sid = t,
                r
            }
            return o(t, e),
            t
        }(i.a)
    },
    233: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return a
        }),
        r.d(t, "a", function() {
            return s
        });
        var n, i = r(11), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(t, e),
            t.prototype.update = function(e) {
                this.hit = e.hit
            }
            ,
            t
        }(i.a), s = function() {
            return function(e, t) {
                this.point = e,
                this.face = {
                    normal: t
                }
            }
        }()
    },
    234: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return a
        }),
        r.d(t, "a", function() {
            return s
        });
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.hit = t,
                r
            }
            return o(t, e),
            t
        }(i.a), s = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(t, e),
            t
        }(i.a)
    },
    237: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return i
        }),
        r.d(t, "a", function() {
            return o
        }),
        r.d(t, "c", function() {
            return a
        });
        var n = r(14)
          , i = function(e, t) {
            if (!e || !t)
                return !1;
            var r = t && e.getSweep(t);
            return !(r && r.alignmentType !== n.a.ALIGNED)
        }
          , o = function(e) {
            return i(e, e.currentSweep)
        }
          , a = function(e, t) {
            switch (e) {
            case n.a.ALIGNED:
                return 1;
            case n.a.UNALIGNED:
                return 2
            }
            switch (t) {
            case n.b.MANUAL:
                return 3
            }
            return 0
        }
    },
    244: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var n = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }
          , i = function() {
            if (!navigator.getGamepads)
                return null;
            var e, t, r = navigator.getGamepads();
            try {
                for (var i = n(r), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value;
                    if (a && a.pose)
                        return a
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (t = i.return) && t.call(i)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            return null
        }
    },
    246: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return a
        }),
        r.d(t, "b", function() {
            return s
        });
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.mode = t,
                n.fromMode = r,
                n
            }
            return o(t, e),
            t
        }(i.a), s = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.source = t,
                r
            }
            return o(t, e),
            t
        }(i.a)
    },
    257: function(e, t, r) {
        "use strict";
        var n = r(235)
          , i = r(187)
          , o = r(4)
          , a = r(219)
          , s = r(46)
          , mobile = r(18)
          , u = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }
          , c = new o.a("api")
          , l = {};
        l[a.a.BASE] = "low",
        l[a.a.STANDARD] = "high",
        l[a.a.HIGH] = "2k",
        l[a.a.ULTRAHIGH] = "4k";
        var p = function() {
            function e(e) {
                this.urls = e,
                this.sweepCubeTextures = {}
            }
            return e.prototype.useTexture = function(e) {
                var t = this.getTexture(e);
                if (!t)
                    throw Error("Texture for sweep " + e + " not loaded before using");
                return t
            }
            ,
            e.prototype.loadFace = function(e, t, r) {
                return this.loadFaceImage(e, t, r).then(function(e) {
                    var t = new i.a(e);
                    return t.needsUpdate = !0,
                    t
                })
            }
            ,
            e.prototype.load = function(e, t) {
                var r = this;
                void 0 === t && (t = a.a.STANDARD);
                var i = this.sweepCubeTextures[e];
                if (i)
                    return c.debug("Skipping load of pano, already loaded"),
                    new Promise(function(e, t) {
                        e(i)
                    }
                    );
                var o = [2, 4, 0, 5, 1, 3].map(function(n) {
                    return r.loadFaceImage(e, t, n)
                })
                  , s = Promise.all(o).then(function(t) {
                    var i = new n.a(t);
                    return i.flipY = !1,
                    i.needsUpdate = !0,
                    r.sweepCubeTextures[e] = i,
                    i
                });
                return s.catch(function() {
                    c.error("Downloading cubemap for pano", e, "failed")
                }),
                s
            }
            ,
            e.prototype.unload = function(e) {
                var t = this.sweepCubeTextures[e];
                if (!t)
                    throw Error("Texture for sweep " + e + " not loaded before unloading");
                t.dispose(),
                this.sweepCubeTextures[e] = null
            }
            ,
            e.prototype.unloadAll = function(e) {
                var t, r, n = Object(s.b)(e);
                try {
                    for (var i = u(Object.keys(this.sweepCubeTextures)), o = i.next(); !o.done; o = i.next()) {
                        var a = o.value;
                        this.sweepCubeTextures[a] && !n[a] && this.unload(a)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            }
            ,
            e.prototype.loadFaceImage = function(e, t, r) {

               

                if (SCENE_CONFIG.type == 0) {

                    var tileMap = {};
                    tileMap[a.a.BASE] = "512",
                    tileMap[a.a.STANDARD] = "1k",
                    tileMap[a.a.HIGH] = "2k",
                    tileMap[a.a.ULTRAHIGH] = "4k";
    
                    var panoId = e;
                    var arr = panoId.split("_location");
                    var tileUrl = "";
                    if(arr.length == 2) {
                        tileUrl = IMAGE_SERVER +(mobile.j() ? "/tiles_mobile/" : "/tiles/") +arr[0]+ "/" +"location"+arr[1]+ "/" +tileMap[t]+"_" + r + ".jpg";
                    } else {
                        tileUrl = IMAGE_SERVER + (mobile.j() ? "/tiles_mobile/" : "/tiles/")+panoId + "/" + tileMap[t]+"_"  + r + ".jpg";
                    }
    
                    
                    
                    return this.urls.getImage(tileUrl);

                } else if (SCENE_CONFIG.type == 1) {
                    var n = l[t];

                    return this.urls.getImage("https://modelcdn2.3dnest.cn/"+SCENE_CONFIG.sid+"/"+SCENE_CONFIG.version+"/locations/pc/"+n+"/"+e+"_"+r+".jpg");
                } else if (SCENE_CONFIG.type == 2) {
                    var n = l[t];
                    return this.urls.getImage("pan/" + n + "/" + e + "_skybox" + r + ".jpg")
                }
                
                
            }
            ,
            e.prototype.getTexture = function(e) {
                return this.sweepCubeTextures[e]
            }
            ,
            e
        }();
        t.a = p
    },
    258: function(e, t, r) {
        "use strict";
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t() {
                return e.call(this) || this
            }
            return o(t, e),
            t
        }(i.a);
        t.a = a
    },
    259: function(e, t, r) {
        "use strict";
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.sweepIds = t,
                r
            }
            return o(t, e),
            t
        }(i.a);
        t.a = a
    },
    262: function(e, t, r) {
        "use strict";
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t, r, n) {
                var i = e.call(this) || this;
                return i.sweepId = t,
                i.hovering = r,
                i.selectionDuration = n,
                i
            }
            return o(t, e),
            t
        }(i.a);
        t.a = a
    },
    263: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return a
        });
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.width = t,
                n.height = r,
                n
            }
            return o(t, e),
            t
        }(i.a)
    },
    284: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var n = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }
          , i = function() {
            function e(e, t) {
                this.initializer = e || this.defaultInitializer,
                this.comparer = t || this.defaultComparer,
                this.poolArray = []
            }
            return e.prototype.defaultComparer = function(e, t) {
                return !1
            }
            ,
            e.prototype.defaultInitializer = function() {}
            ,
            e.prototype.createObjectDescriptor = function(e) {
                return {
                    object: e,
                    inUse: !1
                }
            }
            ,
            e.prototype.addObjectDescriptorToPool = function(e) {
                this.poolArray.push(e)
            }
            ,
            e.prototype.getNewObject = function(e) {
                var t = this.createObjectDescriptor(e);
                return t.object = e,
                t.inUse = !0,
                this.initializer(t),
                this.addObjectDescriptorToPool(t),
                t
            }
            ,
            e.prototype.claimExistingObject = function(e) {
                try {
                    for (var t = n(this.poolArray), r = t.next(); !r.done; r = t.next()) {
                        var i = r.value;
                        if (!i.inUse && this.comparer(i, e))
                            return i.inUse = !0,
                            i
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (a = t.return) && a.call(t)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return null;
                var o, a
            }
            ,
            e.prototype.freeObject = function(e) {
                try {
                    for (var t = n(this.poolArray), r = t.next(); !r.done; r = t.next()) {
                        var i = r.value;
                        if (i.object === e)
                            return i.inUse = !1,
                            !0
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (a = t.return) && a.call(t)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return !1;
                var o, a
            }
            ,
            e
        }()
    },
    285: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "a", function() {
            return n
        }),
        function(e) {
            e.FPS = "stat.fps"
        }(n = n || (n = {}))
    },
    286: function(e, t, r) {
        "use strict";
        var n;
        !function(e) {
            e[e.GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0] = "GL_TEXTURE_CUBE_MAP_POSITIVE_X",
            e[e.GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 1] = "GL_TEXTURE_CUBE_MAP_NEGATIVE_X",
            e[e.GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 2] = "GL_TEXTURE_CUBE_MAP_POSITIVE_Y",
            e[e.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 3] = "GL_TEXTURE_CUBE_MAP_NEGATIVE_Y",
            e[e.GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 4] = "GL_TEXTURE_CUBE_MAP_POSITIVE_Z",
            e[e.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 5] = "GL_TEXTURE_CUBE_MAP_NEGATIVE_Z"
        }(n || (n = {})),
        t.a = n
    },
    289: function(e, t, r) {
        "use strict";
        var n = r(18);
        t.a = Object.freeze({
            camera: {
                transitionBlackoutTime: 300,
                transitionFadeTime: 800,
                baseTransitionTime: n.m("btt", 200),
                minTransitionTime: n.m("mtt", 800),
                maxTransitionTime: n.m("mxtt", 2e3),
                minRotationTransitionTime: n.m("mttr", 1250),
                transitionSpeed: n.m("ts", 3),
                longDistanceSpeedupThreshold: 8,
                longDistanceSpeedupFactor: n.m("ldsf", 2)
            }
        })
    },
    290: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return n
        });
        var n = function() {
            function e(e) {
                this.size = e,
                this.buffer = [],
                this.index = 0
            }
            return e.prototype.push = function(e) {
                this.index >= this.size && (this.index = 0),
                this.buffer[this.index] = e,
                this.index++
            }
            ,
            e.prototype.peek = function() {
                return this.buffer[this.index <= this.buffer.length ? this.index - 1 : 0] || null
            }
            ,
            e.prototype.getList = function() {
                return this.buffer
            }
            ,
            e.prototype.clear = function() {
                this.buffer = [],
                this.index = 0
            }
            ,
            e
        }()
    },
    291: function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return T
            }),
            r.d(t, "b", function() {
                return R
            });
            var n = r(192)
              , i = r(46)
              , o = r(290)
              , a = r(28)
              , s = r(8)
              , u = r(6)
              , c = r(4)
              , l = r(69)
              , p = function(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator]
                  , r = 0;
                return t ? t.call(e) : {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                }
            }
              , h = new c.a(e)
              , d = 1e4
              , f = 6e4
              , y = 0
              , v = 1 / 0
              , m = null
              , w = null
              , g = {}
              , b = new o.a(1e3)
              , T = function() {
                return function() {
                    this.handlers = [{
                        msgType: n.a,
                        func: function(e, t, r) {
                            w !== s.a.STARTING && w !== s.a.PLAYING || _(e, u.a[t.toMode], d)
                        }
                    }, {
                        msgType: a.a,
                        func: function(e, t, r) {
                            var n = r.tryGetData(l.a);
                            t.phase === s.a.LOADING ? _(e, "Loading", f) : (t.phase === s.a.STARTING || t.phase === s.a.PLAYING) && n && n.currentMode && _(e, u.a[n.currentMode], d),
                            w = t.phase
                        }
                    }]
                }
            }();
            function _(e, t, r) {
                t !== m && (m && (D(e),
                S()),
                g[t] || (v = r,
                g[m = t] = !0))
            }
            var S = function() {
                m = null,
                b.clear(),
                y = 0
            }
              , D = function(e) {
                var t = b.getList();
                if (0 !== t.length)
                    try {
                        var r = x(t);
                        e.track("performance", r)
                    } catch (e) {
                        h.warn("Could not send performance metrics", e)
                    }
            }
              , R = function(e, t) {
                m && (b.push(t),
                (y += t) >= v && (D(e),
                S()))
            }
              , x = function(e) {
                var t = 0
                  , r = 0
                  , n = 0
                  , o = 0
                  , a = 0
                  , s = 0;
                try {
                    for (var u = p(e), c = u.next(); !c.done; c = u.next()) {
                        var l = c.value;
                        t += l,
                        l < 0 || (l <= 16.7 ? r += l : l <= 33.3 ? n += l : l <= 100 ? o += l : l <= 1e3 ? a += l : s += l)
                    }
                } catch (e) {
                    d = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (f = u.return) && f.call(u)
                    } finally {
                        if (d)
                            throw d.error
                    }
                }
                if (t <= 0)
                    throw Error("No positive timings, cannot calculate performance data");
                var h = t / e.length;
                r /= t,
                n /= t,
                o /= t,
                a /= t,
                s /= t;
                var d, f, y = e.slice(), v = Object(i.g)(y, 50), w = Object(i.g)(y, 95, !1), g = y[y.length - 1];
                return {
                    phase: m,
                    frame_delta: h,
                    frame_delta_avg: h,
                    frame_delta_median: v,
                    frame_delta_95th: w,
                    frame_delta_max: g,
                    duration: t,
                    time_60_fps: r,
                    time_60_30_fps: n,
                    time_30_10_fps: o,
                    time_10_1_fps: a,
                    time_1_0_fps: s
                }
            }
        }
        ).call(this, "/index.js")
    },
    292: function(e, t, r) {
        "use strict";
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.zoomLevel = t,
                r
            }
            return o(t, e),
            t
        }(i.a);
        t.a = a
    },
    293: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return u
        });
        var n = r(237)
          , i = r(24)
          , o = r(88)
          , a = r(193)
          , s = r(204)
          , u = function() {
            function e() {
                var e = this;
                this.startLoadTime = Date.now(),
                this.endLoadTime = Date.now(),
                this.panosViewed = 0,
                this.navSource = "self-guided",
                this.interactSource = i.a.None,
                this.handlers = [{
                    msgType: a.a,
                    func: function(t, r, n) {
                        e.onMoveToSweepBegin(r.timestamp)
                    }
                }, {
                    msgType: s.a,
                    func: function(t, r, i) {
                        var a = i.tryGetData(o.a);
                        e.lastSweep = r.toSweep,
                        e.endLoadTime = Date.now();
                        var s = e.endLoadTime - e.startLoadTime;
                        e.interactSource = a ? a.source : e.interactSource,
                        t.track("pano_viewed", {
                            pano_id: r.toSweep,
                            pano_view_count: ++e.panosViewed,
                            alignment_type: Object(n.c)(r.alignmentType, r.placementType),
                            interaction_source: e.interactSource,
                            navigation_source: e.navSource,
                            load_time: s / 1e3
                        })
                    }
                }]
            }
            return e.prototype.onMoveToSweepBegin = function(e) {
                this.startLoadTime = e
            }
            ,
            e
        }()
    },
    294: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        });
        var n = r(246)
          , i = r(88)
          , o = function() {
            return function() {
                this.handlers = [{
                    msgType: n.a,
                    func: function(e, t, r) {
                        var n = r.tryGetData(i.a);
                        n && e.track("interaction_mode_changed", {
                            interaction_mode_prev: t.fromMode,
                            interaction_mode: t.mode,
                            interaction_source: n.source
                        })
                    }
                }]
            }
        }()
    },
    295: function(e, t, r) {
        "use strict";
        r.d(t, "c", function() {
            return n
        }),
        r.d(t, "b", function() {
            return i
        }),
        r.d(t, "a", function() {
            return o
        });
        var n = function() {
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }
          , i = function() {
            return {
                width: window.screen.width,
                height: window.screen.height,
                density: window.devicePixelRatio
            }
        }
          , o = function() {
            var e = (new (r(336))).getResult();
            return {
                browser: {
                    name: e.browser.name,
                    major: e.browser.major,
                    version: e.browser.version
                },
                os: {
                    name: e.os.name,
                    version: e.os.version
                },
                device: {
                    vendor: e.device.vendor,
                    model: e.device.model,
                    type: e.device.type
                }
            }
        }
    },
    297: function(e, t, r) {
        "use strict";
        var n, i = r(19), o = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this) || this;
                return o.urls = t,
                o.sid = r,
                o.vrSupported = n,
                o.sweepList = i,
                o
            }
            return o(t, e),
            t
        }(i.a);
        t.a = a
    },
    298: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return i
        }),
        r.d(t, "a", function() {
            return u
        });
        var n, i, o = r(50), a = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), s = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ;
        !function(e) {
            e.left = "left",
            e.top = "top",
            e.width = "width",
            e.height = "height"
        }(i = i || (i = {}));
        var u = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.name = "resize-canvas",
                r.payload = s({}, t),
                r
            }
            return a(t, e),
            t
        }(o.a)
    },
    332: function(e, t, r) {
        e.exports = r.p + "images/outlineEnhanced512.png"
    },
    333: function(e, t, r) {
        e.exports = r.p + "images/outlineBasic512.png"
    },
    334: function(e, t, r) {
        "use strict";
        var n = r(220)
          , i = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }
          , o = function() {
            function e() {
                this.textureUsageCounter = {}
            }
            return e.prototype.init = function() {}
            ,
            e.prototype.dispose = function() {}
            ,
            e.prototype.activate = function() {}
            ,
            e.prototype.deactivate = function() {}
            ,
            e.prototype.beforeRender = function() {}
            ,
            e.prototype.render = function() {}
            ,
            e.prototype.setModel = function(e, t) {
                this.model = e,
                this.sweepList = t;
                var r, o, a = new n.a(function(e) {
                    return e.id
                }
                );
                try {
                    for (var s = i(this.sweepList), u = s.next(); !u.done; u = s.next()) {
                        var c = u.value;
                        a.add(c)
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (o = s.return) && o.call(s)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                this.sweepListMap = a
            }
            ,
            e.prototype.activateSweep = function(e) {
                return e && this.initTextureUsage(e),
                Promise.resolve(null)
            }
            ,
            e.prototype.useTexture = function(e) {
                return this.incrementTextureUsage(e),
                null
            }
            ,
            e.prototype.freeTexture = function(e, t) {
                void 0 === t && (t = !1),
                t ? this.setTextureUsage(e, 0) : this.decrementTextureUsage(e)
            }
            ,
            e.prototype.initTextureUsage = function(e) {
                this.textureUsageCounter[e] || (this.textureUsageCounter[e] = 0)
            }
            ,
            e.prototype.setTextureUsage = function(e, t) {
                this.textureUsageCounter[e] = t
            }
            ,
            e.prototype.incrementTextureUsage = function(e) {
                this.textureUsageCounter[e]++
            }
            ,
            e.prototype.decrementTextureUsage = function(e) {
                this.textureUsageCounter[e]--
            }
            ,
            e
        }();
        t.a = o
    },
    503: function(e, t, r) {
        e.exports = r.p + "images/outlineEnhanced4096.png"
    },
    504: function(e, t, r) {
        e.exports = r.p + "images/outlineEnhanced2048.png"
    },
    505: function(e, t, r) {
        e.exports = r.p + "images/outlineEnhanced1024.png"
    },
    506: function(e, t, r) {
        e.exports = r.p + "images/outlineBasic4096.png"
    },
    507: function(e, t, r) {
        e.exports = r.p + "images/outlineBasic2048.png"
    },
    508: function(e, t, r) {
        e.exports = r.p + "images/outlineBasic1024.png"
    },
    509: function(e, t) {
        e.exports = "varying vec3 vWorldPos;\nuniform float alpha;\nuniform samplerCube tDiffuse;\nvoid main() {\n  vec4 texColor = textureCube(tDiffuse, vWorldPos);\n  gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);\n}"
    },
    510: function(e, t) {
        e.exports = "varying vec3 vWorldPos;\nvoid main() {\n  vWorldPos = vec3(-position.x, -position.y, position.z);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
    },
    511: function(e, t) {
        e.exports = "varying vec2 vUv;\nuniform float alpha;\nuniform sampler2D tDiffuse;\nvoid main() {\n  vec4 texColor = texture2D(tDiffuse, vUv);\n  gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);\n}"
    },
    512: function(e, t) {
        e.exports = "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
    },
    513: function(e, t) {
        e.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n"
    },
    514: function(e, t) {
        e.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
    },
    641: function(e, t, r) {},
    642: function(e, t, r) {
        e.exports = r.p + "images/icon_MacOSX_Safari.png"
    },
    643: function(e, t, r) {
        e.exports = r.p + "images/icon_Internet_Explorer_10.png"
    },
    644: function(e, t, r) {
        e.exports = r.p + "images/icon_Mozilla_Firefox.png"
    },
    645: function(e, t, r) {
        e.exports = r.p + "images/icon_Google_Chrome_2011.png"
    },
    647: function(e, t, r) {},
    671: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(65), a = r(224), s = r(204), u = r(193), c = r(262), l = r(12), p = r(102), h = r(37), d = r(101), f = r(48), y = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), v = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, m = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        };
        var w = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.knownKeysMap = {},
                t.knownKeysList = [],
                t
            }
            return y(t, e),
            t.prototype.get = function(e) {
                if ("string" == typeof e) {
                    var t = (r = e).match(/\D/) ? NaN : Number.parseInt(r);
                    if (!isNaN(t))
                        return this[this.knownKeysList[t]]
                }
                var r;
                return this[e]
            }
            ,
            t.prototype.set = function(e, t) {
                this.knownKeysMap[e] ? t ? this.updated(t, e) : (this.removed(this[e], e),
                delete this.knownKeysMap[e],
                this.knownKeysList.splice(this.knownKeysList.indexOf(e), 1)) : (this.added(t, e),
                this.knownKeysMap[e] = !0,
                this.knownKeysList.push(e))
            }
            ,
            Object.defineProperty(t.prototype, "safeKeys", {
                get: function() {
                    return Object.keys(this).filter(function(e) {
                        return !Object(f.a)(e)
                    })
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return Object.keys(this.knownKeysMap).length
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype[Symbol.iterator] = function() {
                var e, t, r, n, i;
                return v(this, function(o) {
                    switch (o.label) {
                    case 0:
                        o.trys.push([0, 5, 6, 7]),
                        e = m(this.safeKeys),
                        t = e.next(),
                        o.label = 1;
                    case 1:
                        return t.done ? [3, 4] : [4, this[t.value]];
                    case 2:
                        o.sent(),
                        o.label = 3;
                    case 3:
                        return t = e.next(),
                        [3, 1];
                    case 4:
                        return [3, 7];
                    case 5:
                        return r = o.sent(),
                        n = {
                            error: r
                        },
                        [3, 7];
                    case 6:
                        try {
                            t && !t.done && (i = e.return) && i.call(e)
                        } finally {
                            if (n)
                                throw n.error
                        }
                        return [7];
                    case 7:
                        return [2]
                    }
                })
            }
            ,
            t.prototype.getValueForKey = function(e) {
                throw Error("not implemented")
            }
            ,
            t
        }(d.a);
        var g = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }()
          , b = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }
          , T = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
          , _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                G_APP.sweepModule = this;
                return t.name = "sweep-data",
                t
            }
            return g(t, e),
            t.prototype.init = function(e, t) {
                return b(this, void 0, void 0, function() {
                    var r, n, a, s, u, l, d, f, y = this;
                    return T(this, function(v) {
                        switch (v.label) {
                        case 0:
                            return this.engine = t,
                            this.market = this.engine.market,
                            this.market.register(this, o.a),
                            [4, e.sweepSync.load()];
                        case 1:
                            for (s in r = v.sent(),
                            m = new w,
                            n = new Proxy(m,{
                                get: function(e, t) {
                                    return e.get(t)
                                },
                                set: function(e, t, r) {
                                    return e.set(t, r),
                                    e[t] = r,
                                    !0
                                },
                                deleteProperty: function(e, t) {
                                    return e.set(t, void 0),
                                    delete e[t],
                                    !0
                                }
                            }),
                            a = new p.a,
                            r)
                                u = r[s],
                                l = Object(h.a)(u.position),
                                (d = Object(h.a)(u)).position = l,
                                a.push(d),
                                n[u.id] = d;
                            return e.createSyncMonitor && e.sweepSync.addMonitor(e.createSyncMonitor(n)),
                            this.engine.subscribe(c.a, function(e) {
                                var t = y.sweepData.getState(e.sweepId).selected;
                                e.hovering ? t.modifyAnimation(0, 1, e.selectionDuration) : t.modifyAnimation(t.value, 0, e.selectionDuration),
                                y.market.update(y, y.sweepData)
                            }),
                            this.sweepData = new o.a(n),
                            this.market.update(this, this.sweepData),
                            f = this,
                            [4, this.engine.getModule(i.b)];
                        case 2:
                            return f.cameraModule = v.sent(),
                            [2, this]
                        }
                        var m
                    })
                })
            }
            ,
            t.prototype.getCurrentSweep = function() {
                return this.sweepData.currentSweep
            }
            ,
            t.prototype.getFirstSweep = function() {
                return this.sweepData.getFirstSweep()
            }
            ,
            t.prototype.isSweepEnabled = function(e) {
                return this.sweepData.getSweep(e).enabled
            }
            ,
            t.prototype.canMoveToSweep = function(e) {
                return !this.sweepData.transition.pending && !this.sweepData.transition.active && this.cameraModule.canMove()
            }
            ,
            t.prototype.moveToSweep = function(e) {
                var t = this;
                if (!this.canMoveToSweep())
                    throw new Error("Tried to start sweep transition while another transition was active!");
                if (!this.sweepData.containsSweep(e.sweepId))
                    throw new Error("invalid sweep");
                if (!this.isSweepEnabled(e.sweepId))
                    throw new Error("Cannot move to disabled sweep");
                var r = new l.a
                  , n = function(n) {
                    var i = n.getRenderer();
                    return t.sweepData.setTransitionPending(!0),
                    i.activateSweep(e.sweepId).then(function() {
                        var n = {
                            position: t.sweepData.getSweep(e.sweepId).position,
                            rotation: e.rotation
                        };
                        t.engine.broadcast(new u.a(e.sweepId,t.sweepData.currentSweep)),
                        t.sweepData.activateTransition(e.sweepId, t.sweepData.currentSweep),
                        t.sweepData.setTransitionPending(!1),
                        t.market.update(t, t.sweepData);
                        var i = Object(a.d)(t.cameraModule.getData().aspect())
                          , o = t.cameraModule.moveTo({
                            transitionType: e.transitionType,
                            pose: n,
                            transitionTime: e.transitionTime,
                            projection: i,
                            easing: e.easing,
                            minimumTimeOverride: e.minimumTimeOverride
                        });
                        return o.progress(function(e) {
                            r.notify(e)
                        }),
                        o.nativePromise()
                    }).then(function() {
                        t.sweepData.deactivateTransition();
                        var n = t.sweepData.currentSweep;
                        t.sweepData.currentSweep = e.sweepId,
                        t.market.update(t, t.sweepData),
                        t.engine.broadcast(new s.a(e.sweepId,t.sweepData.getSweep(e.sweepId).alignmentType,t.sweepData.getSweep(e.sweepId).placementType,n)),
                        r.resolve()
                    }).catch(function(e) {
                        return r.reject(e)
                    })
                };
                return this.sweepPanoModule ? n(this.sweepPanoModule) : this.engine.getModuleByParent(i.Aa).then(function(e) {
                    t.sweepPanoModule = e,
                    n(t.sweepPanoModule)
                }),
                r.promise()
            }
            ,
            t.prototype.updateTransitionSpeed = function(e) {
                this.sweepData.transition.active && this.cameraModule.updateTransitionSpeed(e)
            }
            ,
            t.prototype.onUpdate = function(e) {
                var t = this
                  , r = !1;
                this.sweepData.iterate(function(n) {
                    var i = t.sweepData.getSelected(n.id);
                    i && i.active && (i.update(e),
                    r = !0)
                }),
                r && this.market.update(this, this.sweepData)
            }
            ,
            t
        }(i.Z);
        t.default = _
    },
    672: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(257), o = r(334), a = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), s = function(e) {
            function t() {
                return e.call(this) || this
            }
            return a(t, e),
            t.prototype.setModel = function(t, r) {
                e.prototype.setModel.call(this, t, r),
                this.sweepLoader = new i.a(t)
            }
            ,
            t.prototype.activateSweep = function(t) {
                return e.prototype.activateSweep.call(this, t),
                this.sweepLoader.load(t).then(function(e) {
                    return e
                })
            }
            ,
            t.prototype.useTexture = function(t) {
                var r = this.sweepLoader.useTexture(t);
                return r && e.prototype.useTexture.call(this, t),
                r
            }
            ,
            t.prototype.freeTexture = function(t, r) {
                void 0 === r && (r = !1),
                e.prototype.freeTexture.call(this, t, r),
                0 === this.textureUsageCounter[t] && this.sweepLoader.unload(t)
            }
            ,
            t.prototype.freeAllTextures = function(e) {
                this.sweepLoader.unloadAll(e)
            }
            ,
            t
        }(o.a), u = r(0), c = r(65), l = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), p = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, h = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "sweep-pano",
                t
            }
            return l(t, e),
            t.prototype.init = function(e, t) {
                return p(this, void 0, void 0, function() {
                    var e, r;
                    return h(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, t.getModule(u.H)];
                        case 1:
                            return e = n.sent().getSignedUrls(),
                            [4, t.market.waitForData(c.a)];
                        case 2:
                            return r = n.sent().getSweepList(),
                            this.panoRenderer = new s,
                            this.panoRenderer.setModel(e, r),
                            t.addComponent(this, this.panoRenderer),
                            [2, this]
                        }
                    })
                })
            }
            ,
            t.prototype.getRenderer = function() {
                return this.panoRenderer
            }
            ,
            t
        }(u.Aa);
        t.default = d
    },
    673: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(283), a = r(1), s = r(145), u = r(235), c = r(245), l = r(42), p = r(25), h = r(331), d = r(6), f = r(69), y = r(73), v = r(77), m = r(75), w = r(9), g = r(329), b = r(93), T = r(192), _ = r(195), S = function() {
            function e(e, t, r, n, i, o) {
                void 0 === o && (o = y.a.ALL),
                this.scene = e,
                this.raycaster = t,
                this.sweepData = r,
                this.cameraData = n,
                this.panoRenderer = i,
                this.renderLayer = o
            }
            return e.prototype.init = function(e, t) {
                var r = this;
                this.engine = e,
                this.market = t;
                var n = new l.a(new a.a(-10,-10,-10),new a.a(10,10,10));
                this.mesh = this.setupSkybox(n),
                this.material = this.mesh.material,
                t.waitForData(f.a).then(function(e) {
                    r.viewmodeData = e,
                    t.onDataUpdate(f.a, r.onViewmodeChange.bind(r)),
                    r.engine.subscribe(T.a, function(e) {
                        e.fromMode === d.a.Panorama && r.raycaster.enableForGroup(b.a.skyboxMeshGroup, !1)
                    }),
                    r.engine.subscribe(_.a, function(e) {
                        e.toMode === d.a.Panorama && r.raycaster.enableForGroup(b.a.skyboxMeshGroup, !0)
                    })
                }),
                t.waitForData(g.a).then(function(e) {
                    r.meshData = e
                })
            }
            ,
            e.prototype.dispose = function() {
                this.deactivate(),
                this.material.uniforms.pano0Map.value.dispose(),
                this.material.uniforms.pano1Map.value.dispose(),
                this.material.dispose(),
                this.mesh.geometry.dispose()
            }
            ,
            e.prototype.activate = function() {
                this.scene.add(this.mesh),
                this.mesh.updateMatrixWorld(!0),
                this.setupRaycasting()
            }
            ,
            e.prototype.deactivate = function() {
                this.scene.remove(this.mesh),
                this.raycaster.removeTarget(this.mesh),
                this.currentSweepId && this.panoRenderer.freeTexture(this.currentSweepId),
                this.currentSweepId = null,
                this.targetSweepId = null
            }
            ,
            e.prototype.updateSweepRenderTarget = function(e, t, r, n) {
                var i = this.panoRenderer.useTexture(t);
                i && this.material.setProjectedPano(e, r, n, i)
            }
            ,
            e.prototype.updateExistingTexture = function(e, t, r, n) {
                e === this.currentSweepId && this.material.setProjectedPano(0, r, n, t),
                e === this.targetSweepId && this.material.setProjectedPano(1, r, n, t)
            }
            ,
            e.prototype.render = function() {
                (!this.viewmodeData || null !== this.viewmodeData.currentMode && void 0 !== this.viewmodeData.currentMode) && (this.currentSweepId = this.handleSweepChange(0, this.sweepData, this.currentSweepId, this.sweepData.currentSweep || null),
                this.targetSweepId = this.handleSweepChange(1, this.sweepData, this.targetSweepId, this.sweepData.transition.to || null),
                this.material.uniforms.progress.value = this.cameraData.transition.progress.value,
                this.material.uniforms.blackRatio.value = this.cameraData.transition.blackoutProgress.value,
                this.updateMeshOpacity())
            }
            ,
            e.prototype.updateSkyboxSize = function(e) {
                var t = e.clone();
                t.union((new l.a).setFromCenterAndSize(this.mesh.position, this.mesh.geometry.boundingBox.getSize())),
                this.scene.remove(this.mesh),
                this.raycaster.removeTarget(this.mesh),
                this.mesh.geometry.dispose();
                var r = this.mesh.visible;
                this.mesh = this.setupSkybox(t, this.mesh.material),
                this.mesh.visible = r,
                this.scene.add(this.mesh),
                this.setupRaycasting()
            }
            ,
            e.prototype.setupRaycasting = function() {
                var e = this
                  , t = this.raycaster.createCallbackSet();
                t.click = function(t, r) {
                    e.engine.broadcast(new v.d(r.point))
                }
                ,
                this.raycaster.addTarget(this.mesh, !1, t, b.a.skyboxMeshGroup)
            }
            ,
            e.prototype.updateMeshOpacity = function() {
                if (this.viewmodeData && this.meshData && this.sweepData) {
                    var e = this.meshData.opacity;
                    if (this.viewmodeData.transition.active) {
                        var t = !!this.sweepData.currentSweep && this.sweepData.isSweepUnaliged(this.sweepData.currentSweep);
                        e = this.getMeshOpacityForTransition(this.viewmodeData.transition.from, this.viewmodeData.transition.to, this.viewmodeData.transition.progress, t, this.meshData.opacity)
                    } else
                        e = this.viewmodeData.currentMode === d.a.Panorama ? this.meshData.opacity : 1;
                    this.material.uniforms.meshOpacity.value = e
                }
            }
            ,
            e.prototype.getMeshOpacityForTransition = function(e, t, r, n, i) {
                if (t === d.a.Panorama || e === d.a.Panorama) {
                    var o = t === d.a.Panorama ? m.a : m.c
                      , a = t === d.a.Panorama ? 2 * (r - .5) : 2 * r
                      , s = o(n ? r : Object(w.d)(a, 0, 1), 0, 1, 1);
                    return (1 - s) * (e === d.a.Panorama ? i : 1) + s * (t === d.a.Panorama ? i : 1)
                }
                return 1
            }
            ,
            e.prototype.setupSkybox = function(e, t) {
                var r = e.getSize()
                  , n = Math.max(r.x, r.y, r.z) + 5
                  , i = new c.a(n,n,n);
                i.computeBoundingBox(),
                t || ((t = new h.a({
                    side: p.f
                })).uniforms.pano0Map.value = new u.a,
                t.uniforms.pano1Map.value = new u.a);
                var o = new s.a(i,t);
                return o.position.copy(e.getCenter()),
                o.layers.mask = this.renderLayer.mask,
                o.name = "Skybox",
                o
            }
            ,
            e.prototype.onViewmodeChange = function(e) {
                this.mesh.visible = e.currentMode === d.a.Panorama || e.transition.active,
                this.updateMeshOpacity()
            }
            ,
            e.prototype.handleSweepChange = function(e, t, r, n) {
                if (r !== n && (r && this.panoRenderer.freeTexture(r),
                n)) {
                    var i = t.getSweep(n);
                    this.updateSweepRenderTarget(e, n, i.position, i.rotation)
                }
                return n
            }
            ,
            e
        }(), D = r(65), R = r(144), x = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), P = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, E = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, O = function(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r)
                return e;
            var n, i, o = r.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                    a.push(n.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return a
        }, A = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "skybox-module",
                t
            }
            return x(t, e),
            t.prototype.init = function(e, t) {
                return P(this, void 0, void 0, function() {
                    var e, r, n, a, s, u = this;
                    return E(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return e = t.getModule(i.Oa),
                            r = t.getModule(i.R),
                            n = t.getModuleByParent(i.Aa),
                            a = t.market.waitForData(D.a),
                            s = t.market.waitForData(R.a),
                            [4, Promise.all([a, s, e, r, n]).then(function(e) {
                                var r = O(e, 5)
                                  , n = r[0]
                                  , i = r[1]
                                  , a = r[2]
                                  , s = r[3]
                                  , c = r[4]
                                  , l = t.claimRenderLayer("skybox")
                                  , p = c.getRenderer()
                                  , h = s.getRaycaster()
                                  , d = a.getScene();
                                u.skybox = new S(d.scene,h,n,i,p,l),
                                t.addComponent(u, u.skybox),
                                t.subscribe(o.a, function(e) {
                                    u.skybox.updateExistingTexture(e.sweepId, e.renderTarget.texture)
                                })
                            })];
                        case 1:
                            return c.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.updateSkyboxSize = function(e) {
                this.skybox.updateSkyboxSize(e)
            }
            ,
            t
        }(i.X);
        t.default = A
    },
    683: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(65), a = r(259), s = r(258), u = r(46), c = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        };
        !function(e) {
            e[e.None = 0] = "None",
            e[e.Queued = 1] = "Queued",
            e[e.Rendering = 2] = "Rendering",
            e[e.Rendered = 3] = "Rendered"
        }(n = n || (n = {}));
        var l, p = function() {
            function e(e) {
                this.statusMap = {},
                this.active = [],
                this.queued = [],
                this.panoRenderer = e,
                this.disablePreRendering()
            }
            return e.prototype.init = function(e) {}
            ,
            e.prototype.dispose = function() {
                this.deactivate()
            }
            ,
            e.prototype.activate = function() {}
            ,
            e.prototype.deactivate = function() {
                this.disablePreRendering()
            }
            ,
            e.prototype.enablePreRendering = function() {
                this.enabled = !0
            }
            ,
            e.prototype.disablePreRendering = function() {
                this.enabled = !1
            }
            ,
            e.prototype.render = function() {}
            ,
            e.prototype.beforeRender = function() {
                this.enabled && this.processQueued()
            }
            ,
            e.prototype.tryPreRender = function(e) {
                return this.getPreRenderState(e) === n.None && (this.queued.push(e),
                this.statusMap[e] = n.Queued,
                !0)
            }
            ,
            e.prototype.getPreRenderState = function(e) {
                return this.statusMap[e] || n.None
            }
            ,
            e.prototype.processQueued = function() {
                var e, t, r = this, i = 0;
                try {
                    for (var o = c(Object.keys(this.statusMap)), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        this.statusMap[s] === n.Rendering && i++
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (t = o.return) && t.call(o)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                if (0 === i && this.queued.length > 0) {
                    var u = this.queued.shift();
                    if (u)
                        this.active.push(u),
                        this.statusMap[u] = n.Rendering,
                        this.panoRenderer.activateSweep(u).then(function() {
                            r.onRendered(u)
                        })
                }
            }
            ,
            e.prototype.cleanup = function(e) {
                void 0 === e && (e = []);
                var t = Object(u.b)(e)
                  , r = [];
                try {
                    for (var i = c(this.queued), o = i.next(); !o.done; o = i.next()) {
                        t[y = o.value] ? r.push(y) : this.statusMap[y] = n.None
                    }
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (s = i.return) && s.call(i)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                this.queued.length = 0,
                this.queued.push.apply(this.queued, r);
                var a, s, l, p, h = [];
                try {
                    for (var d = c(this.active), f = d.next(); !f.done; f = d.next()) {
                        var y;
                        t[y = f.value] ? h.push(y) : this.statusMap[y] = n.None
                    }
                } catch (e) {
                    l = {
                        error: e
                    }
                } finally {
                    try {
                        f && !f.done && (p = d.return) && p.call(d)
                    } finally {
                        if (l)
                            throw l.error
                    }
                }
                this.active.length = 0,
                this.active.push.apply(this.active, h)
            }
            ,
            e.prototype.onRendered = function(e) {
                this.statusMap[e] = n.Rendered
            }
            ,
            e
        }(), h = r(18), d = Object.freeze({
            prerender: {
                preRenderTourPanos: h.m("pre", 0)
            }
        }), f = (l = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            l(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), y = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, v = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "prerenderer-module",
                t.lastPrerendered = null,
                t
            }
            return f(t, e),
            t.prototype.init = function(e, t) {
                return y(this, void 0, void 0, function() {
                    var r, n, u = this;
                    return v(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return d.prerender.preRenderTourPanos || e.preRenderTourPanos ? (r = this,
                            [4, t.market.waitForData(o.a)]) : [3, 3];
                        case 1:
                            return r.sweepData = c.sent(),
                            n = this,
                            [4, t.getModuleByParent(i.Aa)];
                        case 2:
                            n.panoRenderer = c.sent().getRenderer(),
                            this.preRenderer = new p(this.panoRenderer),
                            t.addComponent(this, this.preRenderer),
                            t.subscribe(a.a, function(e) {
                                u.preRenderer.enablePreRendering(),
                                u.lastPrerendered = null,
                                e.sweepIds && e.sweepIds.length >= 3 && (u.lastPrerendered = e.sweepIds[2],
                                u.preRenderer.tryPreRender(u.lastPrerendered)),
                                u.cleanup(u.sweepData),
                                u.currentRestrictedSweeps = e.sweepIds
                            }),
                            t.subscribe(s.a, function(e) {
                                u.preRenderer.disablePreRendering(),
                                u.cleanup(u.sweepData, !0),
                                u.currentRestrictedSweeps = null
                            }),
                            c.label = 3;
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.getCurrentSweeps = function() {
                return this.currentRestrictedSweeps || []
            }
            ,
            t.prototype.cleanup = function(e, t) {
                void 0 === t && (t = !1);
                var r = [];
                e.transition.active ? (e.transition.from && r.push(e.transition.from),
                e.transition.to && r.push(e.transition.to)) : e.currentSweep && r.push(e.currentSweep),
                this.lastPrerendered && r.push(this.lastPrerendered),
                t && this.panoRenderer.freeAllTextures(r),
                this.preRenderer.cleanup(r)
            }
            ,
            t
        }(i.P);
        t.default = m
    },
    687: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(24), a = r(88), s = r(234), u = r(233), c = r(244), l = r(1), p = r(42), h = r(66), d = r(145), f = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), y = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }, v = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.level = r,
                n.bounds = t.clone(),
                n.childNodes = [],
                n
            }
            return f(t, e),
            t.prototype.addMesh = function(e) {
                var t, r, n = !1;
                if (e.geometry.boundingBox || e.geometry.computeBoundingBox(),
                this.level < 4) {
                    0 === this.childNodes.length && this.buildChildNodes();
                    try {
                        for (var i = y(this.childNodes), o = i.next(); !o.done; o = i.next()) {
                            var a = o.value
                              , s = e.geometry.boundingBox.clone();
                            s.applyMatrix4(e.matrixWorld),
                            a.bounds.containsBox(s) && (n = !0,
                            a.addMesh(e))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                }
                n || this.add(e)
            }
            ,
            t.prototype.addMeshes = function(e) {
                e instanceof d.a && this.addMesh(e);
                try {
                    for (var t = y(e.children), r = t.next(); !r.done; r = t.next()) {
                        var n = r.value;
                        this.addMeshes(n)
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (o = t.return) && o.call(t)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                var i, o
            }
            ,
            t.prototype.buildChildNodes = function() {
                for (var e = this.bounds.max.clone().sub(this.bounds.min).clone().multiplyScalar(.5), r = 0; r < 2; r++)
                    for (var n = 0; n < 2; n++)
                        for (var i = 0; i < 2; i++) {
                            var o = this.bounds.min.x + e.x * i
                              , a = o + e.x
                              , s = this.bounds.min.y + e.y * r
                              , u = s + e.y
                              , c = this.bounds.min.z + e.z * n
                              , h = c + e.z
                              , d = new t(new p.a(new l.a(o,s,c),new l.a(a,u,h)),this.level + 1);
                            this.childNodes.push(d),
                            this.add(d)
                        }
            }
            ,
            t.prototype.raycast = function(e, t) {
                if (!0 === e.ray.intersectsBox(this.bounds))
                    try {
                        for (var r = y(this.children), n = r.next(); !n.done; n = r.next()) {
                            var i = n.value;
                            i.visible && i.raycast(e, t)
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (a = r.return) && a.call(r)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                var o, a
            }
            ,
            t
        }(h.a), m = function() {
            function e(e) {
                this.root = new v(e,0)
            }
            return e.prototype.addMeshes = function(e) {
                this.root.addMeshes(e)
            }
            ,
            e.prototype.raycast = function(e) {
                var t = [];
                return this.root.raycast(e, t),
                t
            }
            ,
            e
        }(), w = r(51), g = r(17), b = r(72), T = r(3), _ = r(282), S = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), D = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }, R = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            S(t, e)
        }(d.a),
        function() {
            function e(e, t) {
                this.cameraRig = e,
                this.cameraData = t,
                this.meshes = {},
                this.meshGroups = {},
                this.groupMeshes = {},
                this.groupEnabled = {},
                this.octreeEnabledMeshes = {},
                this.selected = {},
                this.raycaster = new _.a,
                this.pointer = new g.a(-2,-2),
                this.gamepadClicked = !1,
                this.screenCenter = new g.a,
                this.lookDirection = new l.a,
                this.controllerOrientation = new T.a,
                this.rayDirection = new l.a,
                this.rayOrigin = new l.a,
                this.gamePad = null,
                this.callbackSets = {},
                this.realNorm = new b.a
            }
            return e.prototype.render = function() {}
            ,
            e.prototype.init = function(e) {
                var t = this;
                this.engine = e,
                e.market.waitForData(a.a).then(function(e) {
                    return t.interactionmodeData = e
                })
            }
            ,
            e.prototype.dispose = function() {
                this.meshes = {},
                this.callbackSets = {}
            }
            ,
            e.prototype.activate = function() {}
            ,
            e.prototype.deactivate = function() {}
            ,
            e.prototype.beforeRender = function() {
                if (this.interactionmodeData && (this.updateRay(this.cameraData.pose.position, this.interactionmodeData.mode),
                this.interactionmodeData.hasController && null === this.gamePad && (this.gamePad = Object(c.a)())),
                this.gamePad)
                    try {
                        for (var e = D(this.gamePad.buttons), t = e.next(); !t.done; t = e.next()) {
                            if (t.value.pressed) {
                                this.gamepadClicked = !0;
                                break
                            }
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            t && !t.done && (n = e.return) && n.call(e)
                        } finally {
                            if (r)
                                throw r.error
                        }
                    }
                var r, n;
                this.cast()
            }
            ,
            e.prototype.cast = function(e, t, noNotify) {//不要通知控件被拾取
                e && t && this.raycaster.set(e, t);
                var r, n, i = [];
                if (this.octree) {
                    var o = this.octree.raycast(this.raycaster);
                    try {
                        for (var a = D(o), c = a.next(); !c.done; c = a.next()) {
                            var p = c.value;
                            (d = this.meshGroups[p.object.id]) && !this.groupEnabled[d] || i.push(p)
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (n = a.return) && n.call(a)
                        } finally {
                            if (r)
                                throw r.error
                        }
                    }
                }
                for (var h in this.meshes) {
                    var d = this.meshGroups[h];
                    if (!(this.octree && this.octreeEnabledMeshes[h] || d && !this.groupEnabled[d])) {
                        var f = this.meshes[h]
                          , y = this.raycaster.intersectObject(f, !0);
                        i = i.concat(y)
                    }
                }
                i.sort(function(e, t) {
                    return e.distance > t.distance ? 1 : e.distance < t.distance ? -1 : 0
                });
                
                if(noNotify) {
                    this.gamepadClicked = !1;
                    return i
                }


                if (i.length > 0) {
                    p = i[0];
                    this.selected[p.object.id] || this.onMeshRayOver(p.object);
                    var v = p.face.normal;
                    this.realNorm.set(v.x, v.y, v.z, 0),
                    this.realNorm.applyMatrix4(p.object.matrixWorld);
                    var m = new u.a(p.point.clone(),new l.a(this.realNorm.x,this.realNorm.y,this.realNorm.z));
                    this.engine.broadcast(new s.b(m)),
                    this.gamepadClicked && (this.onMeshClick(p.object, m),
                    this.engine.broadcast(new s.a))
                } else
                    this.selectedObject && this.onMeshRayOut();
                return this.gamepadClicked = !1,
                i
            }
            ,
            e.prototype.setupOctree = function(e) {
                this.octree = new m(e.boundingBox);
                try {
                    for (var t = D(Object.keys(this.meshes)), r = t.next(); !r.done; r = t.next()) {
                        var n = r.value;
                        if (this.octreeEnabledMeshes[n]) {
                            var i = this.meshes[n];
                            this.octree.addMeshes(i)
                        }
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (a = t.return) && a.call(t)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                var o, a
            }
            ,
            e.prototype.updateRay = function(e, t) {
                switch (t) {
                case o.b.Desktop:
                case o.b.Mobile:
                    this.rayOrigin.set(this.pointer.x, this.pointer.y, -1).unproject(this.cameraRig.camera),
                    this.rayDirection.set(this.pointer.x, this.pointer.y, 1).unproject(this.cameraRig.camera),
                    this.raycaster.set(this.rayOrigin, this.rayDirection.sub(this.rayOrigin).normalize());
                    break;
                case o.b.VrOrientOnly:
                    this.raycaster.setFromCamera(this.screenCenter, this.cameraRig.camera);
                    break;
                case o.b.VrWithController:
                case o.b.VrWithTrackedController:
                    if (this.raycaster.ray.origin.copy(e),
                    this.gamePad) {
                        var r = this.controllerOrientation.fromArray(this.gamePad.pose.orientation)
                          , n = this.lookDirection.copy(w.a.FORWARD).applyQuaternion(r);
                        this.raycaster.ray.direction.copy(n)
                    }
                }
            }
            ,
            e.prototype.createCallbackSet = function() {
                return {
                    click: void 0,
                    select: void 0,
                    deselect: void 0
                }
            }
            ,
            e.prototype.addTarget = function(e, t, r, n) {
                void 0 === n && (n = "default-group");
                var i = e
                  , o = i.collider ? i.collider : e;
                this.meshes[e.id] = o,
                r && (this.callbackSets[e.id] = r),
                this.meshGroups[e.id] = n;
                var a = this.groupEnabled[n];
                null == a && this.enableForGroup(n, !0);
                var s = this.groupMeshes[n];
                s || (this.groupMeshes[n] = s = []),
                this.octreeEnabledMeshes[e.id] = t,
                this.octree && t && this.octree.addMeshes(e)
            }
            ,
            e.prototype.enableAllGroups = function() {
                for (var e in this.groupEnabled)
                    this.enableForGroup(e, !0)
            }
            ,
            e.prototype.enableForGroup = function(e, t) {
                this.groupEnabled[e] = t
            }
            ,
            e.prototype.setExclusiveMode = function(e) {
                for (var t in this.groupEnabled)
                    this.enableForGroup(t, !1);
                this.enableForGroup(e, !0)
            }
            ,
            e.prototype.removeTarget = function(e) {
                e.parent && this.octreeEnabledMeshes[e.id] && e.parent.remove(e);
                var t = this.meshGroups[e.id];
                if (t)
                    for (var r = this.groupMeshes[t], n = 0; n < r.length; n++)
                        if (r[n].id === e.id) {
                            r[n] = r[r.length - 1],
                            r.length--;
                            break
                        }
                delete this.meshes[e.id],
                delete this.callbackSets[e.id]
            }
            ,
            e.prototype.onMeshClick = function(e, t) {
                if (e) {
                    var r = this.getCallbackSet(e, !0);
                    r && r.click && r.click(e, t)
                }
            }
            ,
            e.prototype.onMeshRayOver = function(e) {
                if (this.selectedObject !== e && (this.onMeshRayOut(),
                this.selectedObject = e,
                this.selectedObject)) {
                    var t = this.getCallbackSet(this.selectedObject, !1);
                    t && t.select && (t.select(this.selectedObject),
                    this.selected[this.selectedObject.id] = !0)
                }
            }
            ,
            e.prototype.onMeshRayOut = function() {
                if (this.selectedObject) {
                    var e = this.getCallbackSet(this.selectedObject, !1);
                    e && e.deselect && (e.deselect(this.selectedObject),
                    this.selected = {}),
                    this.selectedObject = null
                }
            }
            ,
            e.prototype.updatePointerPosition = function(e) {
                this.pointer.set(e.x, e.y)
            }
            ,
            e.prototype.onClick = function() {
                this.gamepadClicked = !0
            }
            ,
            e.prototype.getCallbackSet = function(e, t) {
                var r = this.callbackSets[e.id];
                if (t)
                    for (; !r && e.parent; )
                        e = e.parent,
                        r = this.callbackSets[e.id];
                return r
            }
            ,
            e
        }()), x = r(218), P = r(144), E = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), O = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, A = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, M = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "raycaster",
                t.raycasterData = new u.b,
                t.CLICK_THRESHOLD = 300,
                t.MOVED_THRESHOLD = .1,
                t.clickDown = 0,
                t
            }
            return E(t, e),
            t.prototype.init = function(e, t) {
                return O(this, void 0, void 0, function() {
                    var e, r, n, o = this;
                    return A(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return this.engine = t,
                            this.engine.market.register(this, u.b),
                            [4, t.getModule(i.Oa)];
                        case 1:
                            return e = a.sent(),
                            r = e.getScene(),
                            [4, t.market.waitForData(P.a)];
                        case 2:
                            return n = a.sent(),
                            this.raycaster = new R(r.cameraRig,n),
                            this.engine.subscribe(s.b, function(e) {
                                o.raycasterData.hit = e.hit,
                                o.engine.market.update(o, o.raycasterData)
                            }),
                            this.engine.subscribe(x.b, function(e) {
                                o.raycaster.updatePointerPosition(e.position)
                            }),
                            this.engine.subscribe(x.a, function(e) {
                                e.down && o.raycaster.updatePointerPosition(e.position)
                            }),
                            this.engine.subscribe(x.a, function(e) {
                                if (e.down)
                                    o.previousPos = e.position,
                                    o.clickDown = performance.now();
                                else {
                                    var t = performance.now() - o.clickDown <= o.CLICK_THRESHOLD;
                                    if (o.previousPos && e.position) {
                                        var r = Math.abs(o.previousPos.x - e.position.x) > o.MOVED_THRESHOLD || Math.abs(o.previousPos.y - e.position.y) > o.MOVED_THRESHOLD;
                                        t && !r && o.raycaster.onClick()
                                    }
                                }
                            }),
                            t.addComponent(this, this.raycaster),
                            [2, this]
                        }
                    })
                })
            }
            ,
            t.prototype.getRaycaster = function() {
                return this.raycaster
            }
            ,
            t.prototype.cast = function(e, t) {
                return this.raycaster.cast(e, t)
            }
            ,
            t
        }(i.R);
        t.default = M
    },
    688: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = new (r(4).a)("api"), o = function() {
            function e(e, t) {
                this.api = e,
                this.baseUrl = t
            }
            return e.prototype.load = function() {
                var e = this
                  , t = this.baseUrl + "/api/v1/user/";
                t = "js/dummy.json";
                return this.api.get(t, {
                    responseType: "json",
                    prefetchFrom: "dummy"
                }).then(function(t) {
                    t.flags && (e._flags = t.flags)
                }, function() {
                    i.error("Failed to get User data")
                })
            }
            ,
            e.prototype.getFlags = function() {
                return this._flags
            }
            ,
            e
        }(), a = r(61), s = r(59), u = r(12), c = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        , l = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, p = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, h = Object.freeze({
            cacheClearTimeout: 6e4,
            retryTimeout: 1e3
        }), d = function() {
            function e(e, t) {
                void 0 === e && (e = {}),
                void 0 === t && (t = window.location.origin),
                this.prefetchedData = e,
                this.baseUrl = t,
                this.queue = new s.RequestQueue({
                    retries: 0
                }),
                setTimeout(function() {
                    this.prefetchedData = {}
                }, h.cacheClearTimeout),
                this.needAuth = {}
            }
            return e.prototype.loadUser = function() {
                return l(this, void 0, void 0, function() {
                    return p(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this.user || (this.user = new o(this,this.baseUrl)),
                            [4, this.user.load()];
                        case 1:
                            return e.sent(),
                            [2, Promise.resolve(this.user)]
                        }
                    })
                })
            }
            ,
            e.prototype.get = function(e, t) {
                var r = this;
                if (t && t.prefetchFrom && this.prefetchedData[t.prefetchFrom])
                    return Promise.resolve(this.prefetchedData[t.prefetchFrom]);
                var n = c({}, t);
                this.needAuth[e] && (n = this.addAuthToOptions(t));
                var i = this.queue.get(e, n).then(function(t) {
                    return r.needAuth[e] = !1,
                    t
                }).catch(function(t) {
                    return !r.needAuth[e] && t.status_code >= 400 && t.status_code < 500 ? (n = r.addAuthToOptions(n),
                    r.queue.get(e, n).then(function(t) {
                        return r.needAuth[e] = !0,
                        t
                    })) : i
                });
                return i
            }
            ,
            e.prototype.addAuthToOptions = function(e) {
                return this.authToken || (this.authToken = Object(a.a)()),
                c({}, e, {
                    auth: this.authToken
                })
            }
            ,
            e.prototype.getImage = function(e, t) {
                e = this.optimizeImageUrl(e);
                var r = t ? t.maxRetries : void 0;
                return this.getImageViaBrowser(e, r).nativePromise()
            }
            ,
            e.prototype.getImageViaBrowser = function(e, t) {
                void 0 === t && (t = 3);
                var r = new u.a
                  , n = new Image
                  , i = this
                  , o = function() {
                    i.getImageViaBrowser(e, t - 1).then(r.resolve.bind(r)).progress(r.notify.bind(r)).catch(r.reject.bind(r))
                };
                return n.onerror = function() {
                    t > 0 ? setTimeout(o, 1e3) : r.reject()
                }
                ,
                n.onload = function() {
                    r.resolve(n)
                }
                ,
                n.crossOrigin = "anonymous",
                n.src = e,
                r.promise()
            }
            ,
            e.prototype.optimizeImageUrl = function(e) {
                return -1 === e.indexOf("imgopt=1") && (e += -1 === e.indexOf("?") ? "?" : "&",
                e += "imgopt=1"),
                e
            }
            ,
            e.prototype.getAppKey = function(e, t, r) {
                return l(this, void 0, void 0, function() {
                    var n, i, o, s;
                    return p(this, function(u) {
                        switch (u.label) {
                        case 0:
                            if ("" === e || "" === t)
                                return [2, null];
                            n = r ? {
                                responseType: "json"
                            } : {
                                responseType: "json",
                                prefetchFrom: "config"
                            },
                            i = Object(a.b)(),
                            o = Object(a.c)(i),
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]),
                            [4, this.get(o.urlBase + "/api/v1/config/" + e, n)];
                        case 2:
                            return s = u.sent(),
                            [3, 4];
                        case 3:
                            return u.sent(),
                            [3, 4];
                        case 4:
                            return s && s.hasOwnProperty(t) ? [2, s[t]] : [2, null]
                        }
                    })
                })
            }
            ,
            e
        }(), f = r(0), y = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), v = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, m = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, w = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "api-client",
                t
            }
            return y(t, e),
            t.prototype.init = function(e, t) {
                return v(this, void 0, void 0, function() {
                    return m(this, function(t) {
                        return this.api = new d(e.prefetchedData,e.baseUrl),
                        [2]
                    })
                })
            }
            ,
            t.prototype.getApi = function() {
                return this.api
            }
            ,
            t
        }(f.a);
        t.default = w
    },
    689: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(297), a = function() {
            function e() {}
            return e.prototype.load = function(e) {

                if(SCENE_CONFIG.type == 1) {
                    this.data = {
                        name: e.basic.model.name,
                        sid: e.basic.modelid,
                        //multiple
                    },
                  
                    this.sid = this.data.sid;
                    //this.uuid = this.data.job.uuid,
                    this.vrSupported = this.data.is_vr;
                    document.title = this.data.name;


                } else if(SCENE_CONFIG.type == 0) { 
                    this.data = e,
                    this.sid = this.data.sid,
                    //this.uuid = this.data.job.uuid,
                    this.vrSupported = this.data.is_vr
                } else if(SCENE_CONFIG.type == 2)  {
                    this.data = e,
                    this.sid = this.data.sid,
                    this.uuid = this.data.job.uuid,
                    this.vrSupported = this.data.is_vr
                }


               


            }
            ,
            e
        }(), s = r(65), u = r(93), c = r(4), l = r(61), p = r(59), h = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, d = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, f = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }, y = new c.a("modelurls"), v = function() {
            function e() {
                this.version = 1,
                this.cache = null,
                this.expires = 0
            }
            return e.prototype.validate = function(e) {
                return "catalog.json"in e && Object.keys(e).length > 0
            }
            ,
            e.prototype.update = function(e) {
                return this.cache = e,
                this.expires = Date.now() + u.a.signedUrlDefaultExpireTime,
                Promise.resolve()
            }
            ,
            e.prototype.get = function(e) {
                return this.cache[e]
            }
            ,
            e
        }(), m = function() {
            function e() {
                this.version = 2,
                this.baseUrl = "",
                this.cache = null,
                this.expires = 0
            }
            return e.prototype.validate = function(e) {
                return "catalog.json"in e && "base.url"in e && Object.keys(e).length > 1
            }
            ,
            e.prototype.update = function(e) {
                debugger;
                return this.baseUrl = e["base.url"],
                this.cache = e,
                this.expires = Date.now() + u.a.signedUrlDefaultExpireTime,
                Promise.resolve()
            }
            ,
            e.prototype.get = function(e) {
                debugger;
                var t = this.cache[e];
                if (!t)
                    throw Error("URL path not found: " + e);
                return this.baseUrl.replace("{{filename}}", e) + t
            }
            ,
            e
        }(), w = function() {
            function e() {
                this.version = 3,
                this.baseUrl = "",
                this.expires = 0
            }
            return e.prototype.validate = function(e) {
                return e.templates && e.catalog_file;// && (!e.expires || 1e3 * e.expires > Date.now())
            }
            ,
            e.prototype.update = function(e) {
               // debugger;
                if (!e.templates)
                    throw new Error("No templates found.");
                return this.baseUrl = e.templates[0],
                e.expires ? this.expires = 1e3 * e.expires : this.expires = Date.now() + u.a.signedUrlDefaultExpireTime,
                Promise.resolve()
            }
            ,
            e.prototype.get = function(e) {
                if(e.indexOf("http") == 0) {
                    return e;
                }
               // debugger;
                return this.baseUrl && this.baseUrl.replace("{{filename}}", e)
            }
            ,
            e
        }(), g = function() {
            function e(e, t) {
                this.api = e,
                this.endpoint = t,
                this.urlContainer = null,
                this.authorizationHeader = Object(l.a)(),
                this.previousRefreshPromise = null,
                this.containerClasses = [w, m, v],
                this.endpoint = t + "?type=3"
            }
            return e.prototype.needsRefresh = function() {
                var e = this.urlContainer ? this.urlContainer.expires : Date.now();
                return Date.now() + u.a.signedUrlRefreshBuffer > e
            }
            ,
            e.prototype.refresh = function() {
                return this.needsRefresh() ? (this.previousRefreshPromise || (y.debug("Refreshing urls..."),
                this.previousRefreshPromise = this._refresh().then(function() {
                    y.debug("Refreshed")
                }, function() {
                    y.error("Failed url refresh, urls might go stale soon")
                })),
                this.previousRefreshPromise) : Promise.resolve()
            }
            ,
            e.prototype._refresh = function(e) {
                return void 0 === e && (e = !0),
                h(this, void 0, void 0, function() {
                    var t, r, n, i, o, a, s;
                    return d(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return [4, this.api.get(this.endpoint, {
                                responseType: "json",
                                prefetchFrom: e ? "files" : void 0,
                                auth: this.authorizationHeader,
                                priority: p.RequestPriority.HIGHEST
                            })];
                        case 1:
                            if (t = u.sent(),
                            this.urlContainer && this.urlContainer.validate(t))
                                return [2, this.urlContainer.update(t)];
                            try {
                                for (r = f(this.containerClasses),
                                n = r.next(); !n.done; n = r.next())
                                    if (i = n.value,
                                    (o = new i).validate(t))
                                        return y.info("Using urls version " + o.version),
                                        this.urlContainer = o,
                                        [2, this.urlContainer.update(t)]
                            } catch (e) {
                                a = {
                                    error: e
                                }
                            } finally {
                                try {
                                    n && !n.done && (s = r.return) && s.call(r)
                                } finally {
                                    if (a)
                                        throw a.error
                                }
                            }
                            if (e)
                                return [2, this._refresh(!1)];
                            throw new Error("missing-urls")
                        }
                    })
                })
            }
            ,
            e.prototype.getSignedUrl = function(e) {
                return h(this, void 0, void 0, function() {
                    var t;
                    return d(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.refresh()];
                        case 1:
                            if (r.sent(),
                            !this.urlContainer)
                                throw new Error("Tried to use ModelUrls.get before urlContainer is established.");
                            if (!(t = this.urlContainer.get(e)))
                                throw new Error("Could not get signed URL for path " + e);
                            return [2, t]
                        }
                    })
                })
            }
            ,
            e.prototype.getFile = function(e, t) {
                return h(this, void 0, void 0, function() {
                    var r, n;
                    return d(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return n = (r = this.api).get,
                            [4, this.getSignedUrl(e)];
                        case 1:
                            return [2, n.apply(r, [i.sent(), t])]
                        }
                    })
                })
            }
            ,
            e.prototype.getImage = function(e, t) {
                return h(this, void 0, void 0, function() {
                    var r, n;
                    return d(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return n = (r = this.api).getImage,
                            [4, this.getSignedUrl(e)];
                        case 1:
                            return [2, n.apply(r, [i.sent(), t])]
                        }
                    })
                })
            }
            ,
            e
        }(), b = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), T = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, _ = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, S = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "model-data",
                t
            }
            return b(t, e),
            t.prototype.init = function(e, t) {
                return T(this, void 0, void 0, function() {
                    var r, n, u, c;
                    return _(this, function(l) {
                        switch (l.label) {
                        case 0:
                            return [4, t.getModule(i.a)];
                        case 1:
                            return r = l.sent(),
                            n = r.getApi(),
                            [4, e.modelDetailsStore.read()];
                        case 2:
                            return u = l.sent(),
                            this.model = new a,
                            this.model.load(u),
                            this.signedUrls = new g(n,n.baseUrl + "/api/player/models/" + e.sid + "/files"),
                            [4, t.market.waitForData(s.a)];
                        case 3:
                            return c = l.sent(),
                            t.broadcast(new o.a(this.signedUrls,this.model.sid,this.model.vrSupported,c.getSweepList())),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.getModel = function() {
                return this.model
            }
            ,
            t.prototype.getSignedUrls = function() {
                return this.signedUrls
            }
            ,
            t
        }(i.H);
        t.default = S
    },
    696: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i, o = r(224), a = r(263), s = r(0), u = r(144), c = r(19), l = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), p = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.from = r,
                n.to = t,
                n.timestamp = Date.now(),
                n
            }
            return l(t, e),
            t
        }(c.a), h = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return h(t, e),
            t
        }(p), f = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), y = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return f(t, e),
            t
        }(p), v = r(12), m = r(75), w = r(289), g = r(70), b = r(196), T = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), _ = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, S = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, D = ((i = {})[s.Ja.Instant] = {
            blackoutTime: 0,
            transitionTime: 0
        },
        i[s.Ja.FadeToBlack] = {
            blackoutTime: w.a.camera.transitionBlackoutTime,
            transitionTime: 2 * w.a.camera.transitionBlackoutTime
        },
        i[s.Ja.Interpolate] = {
            blackoutTime: 0,
            transitionTime: w.a.camera.transitionFadeTime
        },
        i), R = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "camera-data",
                t
            }
            return T(t, e),
            t.prototype.init = function(e, t) {
                return _(this, void 0, void 0, function() {
                    var r = this;
                    return S(this, function(n) {
                        return this.engine = t,
                        this.market = t.market,
                        this.cameraData = new u.a,
                        this.market.register(this, u.a, this.cameraData),
                        t.market.waitForData(b.a).then(function(e) {
                            r.canvas = e,
                            r.setCameraDimensions(e.width, e.height)
                        }),
                        this.baseTransitionTime = e.baseTransitionTime || w.a.camera.baseTransitionTime,
                        t.market.waitForData(g.a).then(function(e) {
                            e.onPropertyChanged(s.Sa, function(e, t) {
                                r.baseTransitionTime = t
                            })
                        }),
                        t.subscribe(a.a, function(e) {
                            return r.setCameraDimensions(e.width, e.height)
                        }),
                        this.transitionSpeed = e.transitionSpeed || w.a.camera.transitionSpeed,
                        [2]
                    })
                })
            }
            ,
            t.prototype.getData = function(e) {
                return void 0 === e && (e = !0),
                e ? Object.freeze(this.cameraData.clone()) : this.cameraData
            }
            ,
            t.prototype.onUpdate = function(e) {
                var t = this.market.tryGetData(u.a);
                t && !this.cameraData.isEqual(t) && this.market.update(this, this.cameraData)
            }
            ,
            t.prototype.updateCameraProjection = function(e) {
                this.cameraData.pose.projection.copy(e)
            }
            ,
            t.prototype.updateCameraFocus = function(e) {
                this.cameraData.pose.focalDistance = e
            }
            ,
            t.prototype.updateCameraRotation = function(e) {
                e && this.cameraData.pose.rotation.copy(e)
            }
            ,
            t.prototype.updateCameraPosition = function(e) {
                e && this.cameraData.pose.position.copy(e)
            }
            ,
            t.prototype.updateCameraPose = function(e) {
                e.position && this.cameraData.pose.position.copy(e.position),
                e.rotation && this.cameraData.pose.rotation.copy(e.rotation)
            }
            ,
            t.prototype.canMove = function() {
                return !this.cameraData.transition.active
            }
            ,
            t.prototype.moveTo = function(e) {
                if (this.cameraData.transition.active)
                    return v.a.reject("Cannot move while the camera is already moving");
                var t = D[e.transitionType]
                  , r = t.blackoutTime
                  , n = e.pose.rotation
                  , i = e.pose.position
                  , a = e.projection;
                e.pose.zoom && (a && Object(o.b)(a) || this.cameraData.isOrtho()) && (a = this.adjustProjectionZoom(a || this.cameraData.pose.projection.clone(), e.pose.zoom));
                var u = e.transitionType === s.Ja.Instant ? 0 : e.transitionTime;
                if (void 0 === u)
                    if (e.transitionType === s.Ja.Interpolate && i) {
                        var c = i.clone().sub(this.cameraData.pose.position).length();
                        if (u = (c = c > 0 ? c : this.transitionSpeed) / this.transitionSpeed * 1e3 + this.baseTransitionTime,
                        c >= w.a.camera.longDistanceSpeedupThreshold)
                            u /= 1 + (c - w.a.camera.longDistanceSpeedupThreshold) / c * w.a.camera.longDistanceSpeedupFactor
                    } else
                        u = t.transitionTime;
                if (!e.maximumTimeOverride && i && u && u > w.a.camera.maxTransitionTime && (u = w.a.camera.maxTransitionTime),
                !e.minimumTimeOverride && e.transitionType !== s.Ja.Instant) {
                    var l = i ? w.a.camera.minTransitionTime : w.a.camera.minRotationTransitionTime;
                    void 0 !== l && void 0 !== u && u < l && (u = l)
                }
                this.beginInternalTransition({
                    transitionType: e.transitionType,
                    transitionTime: u,
                    blackoutTime: r,
                    pose: {
                        position: i,
                        rotation: n
                    },
                    projection: a,
                    easing: e.easing
                });
                var p = {
                    position: e.pose.position ? e.pose.position.clone() : void 0,
                    rotation: e.pose.rotation ? e.pose.rotation.clone() : void 0,
                    projection: e.projection ? e.projection.clone() : void 0
                }
                  , h = {
                    position: this.cameraData.pose.position.clone(),
                    rotation: this.cameraData.pose.rotation.clone(),
                    projection: this.cameraData.pose.projection.clone()
                };
                this.engine.broadcast(new d(p,h));
                var f = new v.a
                  , m = this.progressInternalTransition.bind(this)
                  , g = this.endInternalTransition.bind(this)
                  , b = function() {
                    var t;
                    return S(this, function(n) {
                        switch (n.label) {
                        case 0:
                            t = 0,
                            n.label = 1;
                        case 1:
                            return t < this.cameraData.transition.duration ? [4, null] : [3, 3];
                        case 2:
                            return n.sent(),
                            t = Date.now() - this.cameraData.transition.startTime,
                            m(t, r),
                            f.notify(t),
                            [3, 1];
                        case 3:
                            return [4, null];
                        case 4:
                            return n.sent(),
                            g(e.transitionType),
                            e.focalDistance && this.updateCameraFocus(e.focalDistance),
                            this.market.update(this, this.cameraData),
                            f.resolve(),
                            this.engine.broadcast(new y(p,h)),
                            [2]
                        }
                    })
                }
                .bind(this);
                return this.engine.startGenerator(b),
                f.promise()
            }
            ,
            t.prototype.updateTransitionSpeed = function(e) {
                if (this.cameraData.transition.active) {
                    var t = Date.now()
                      , r = t - this.cameraData.transition.startTime
                      , n = r / e
                      , i = this.cameraData.transition.progress
                      , o = (i.duration - r) / e + n;
                    this.cameraData.transition.duration = o,
                    this.cameraData.transition.startTime = t - n,
                    i.modifyAnimation(i.value, i.endValue, o, i.easing, n)
                }
            }
            ,
            t.prototype.beginExternalTransition = function() {
                this.cameraData.transition.startTime = Date.now(),
                this.cameraData.transition.active = !0
            }
            ,
            t.prototype.endExternalTransition = function() {
                this.cameraData.transition.active = !1
            }
            ,
            t.prototype.beginInternalTransition = function(e) {
                var t = e.transitionTime || 0;
                this.cameraData.transition.startTime = Date.now(),
                this.cameraData.transition.duration = t,
                this.cameraData.transition.active = !0,
                this.cameraData.transition.type = e.transitionType,
                this.cameraData.transition.progress.modifyAnimation(0, 1, t, e.easing || m.b),
                e.transitionType === s.Ja.FadeToBlack && this.cameraData.transition.blackoutProgress.modifyAnimation(0, 1, e.blackoutTime),
                this.cameraData.transition.from.position = this.cameraData.pose.position.clone(),
                this.cameraData.transition.from.rotation = this.cameraData.pose.rotation.clone(),
                this.cameraData.transition.from.projection = this.cameraData.pose.projection.clone(),
                this.cameraData.transition.to.position = e.pose.position ? e.pose.position.clone() : void 0,
                this.cameraData.transition.to.rotation = e.pose.rotation ? e.pose.rotation.clone() : void 0,
                this.cameraData.transition.to.projection = e.projection ? e.projection.clone() : void 0
            }
            ,
            t.prototype.progressInternalTransition = function(e, t) {
                if (this.cameraData.transition.active)
                    if (this.cameraData.transition.type === s.Ja.Interpolate) {
                        var r = this.cameraData.transition.from
                          , n = this.cameraData.transition.to;
                        n.position && r.position && this.cameraData.pose.position.copy(r.position).lerp(n.position, this.cameraData.transition.progress.value),
                        n.rotation && r.rotation && this.cameraData.pose.rotation.copy(r.rotation).slerp(n.rotation, this.cameraData.transition.progress.value),
                        n.projection && r.projection && function(e, t, r, n) {
                            for (var i = n.elements, o = e.elements, a = t.elements, s = 0; s < 16; s++)
                                i[s] = o[s] * (1 - r) + a[s] * r
                        }(r.projection, n.projection, this.cameraData.transition.progress.value, this.cameraData.pose.projection),
                        this.cameraData.transition.progress.update(e, !0)
                    } else if (this.cameraData.transition.type === s.Ja.FadeToBlack) {
                        var i = 0
                          , o = this.cameraData.transition.duration;
                        e <= t ? i = e : (Object(u.b)(this.cameraData.transition.to, this.cameraData.pose, !1),
                        i = e >= o - t ? o - e : t),
                        this.cameraData.transition.blackoutProgress.update(i, !0),
                        this.cameraData.transition.progress.update(e <= t ? 0 : o, !0)
                    }
            }
            ,
            t.prototype.endInternalTransition = function(e) {
                Object(u.b)(this.cameraData.transition.to, this.cameraData.pose, !1),
                this.cameraData.transition.type = null,
                this.cameraData.transition.active = !1,
                this.cameraData.transition.progress.stop(1),
                e === s.Ja.FadeToBlack && this.cameraData.transition.blackoutProgress.stop(0)
            }
            ,
            t.prototype.adjustProjectionZoom = function(e, t) {
                return e.elements[0] = 2 * t / this.canvas.width,
                e.elements[5] = 2 * t / this.canvas.height,
                e
            }
            ,
            t.prototype.setCameraDimensions = function(e, t) {
                this.cameraData.setSize({
                    width: e,
                    height: t
                }),
                this.cameraData.pose.projection.copy(this.cameraData.isOrtho() ? Object(o.c)(e, t, this.cameraData.zoom()) : Object(o.d)(e / t)),
                this.cameraData.baseFovY = this.cameraData.fovY()
            }
            ,
            t
        }(s.b);
        t.default = R
    },
    697: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(58), a = r(18), s = function(e) {
            return {
                problem: "",
                solution: e.t(o.a.ERROR_BROWSER_SOLUTION),
                explanation: e.t(o.a.ERROR_BROWSER_EXPLANATION),
                actions: Object(a.j)() ? "" : ["<div id='browser-tiles'>", "<a href='https://www.google.com/chrome/browser/' target='_blank'>", "<div class='tile'>", "<img src=" + r(645) + ">", "</div>", "</a>", "<a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank'>", "<div class='tile'>", "<img src=" + r(644) + ">", "</div>", "</a>", "<a href='http://windows.microsoft.com/en-us/internet-explorer/download-ie' target='_blank'>", "<div class='tile'>", "<img src=" + r(643) + ">", "</div>", "</a>", "<a href='https://support.apple.com/en-us/HT204416' target='_blank'>", "<div class='tile'>", "<img src=" + r(642) + ">", "</div>", "</a>", "</div>"].join("")
            }
        }, u = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        , c = function(e) {
            return u({}, s(e), {
                problem: "" + e.t(o.a.ERROR_WEBGL_UNSUPPORTED_PROBLEM)
            })
        }, l = "https://support.matterport.com/hc/articles/208220058", p = function(e) {
            return {
                problem: e.t(o.a.ERROR_GENERIC_PROBLEM),
                solution: e.t(o.a.ERROR_GENERIC_SOLUTION),
                explanation: "",
                actions: ["" + e.t(o.a.ERROR_GENERIC_ACTIONS_1)].concat(Object(a.j)() ? [] : ["<a id='install-browser' href='#'>" + e.t(o.a.ERROR_GENERIC_ACTIONS_2) + "</a>", "" + e.t(o.a.ERROR_GENERIC_ACTIONS_3)]).concat(["<a href=" + l + " target='_blank'>" + e.t(o.a.ERROR_GENERIC_ACTIONS_4) + "</a>"]).join("")
            }
        }, h = function(e) {
            return {
                problem: e.t(o.a.ERROR_LOADING_FAILED_PROBLEM),
                solution: "",
                explanation: "",
                actions: ["" + e.t(o.a.ERROR_LOADING_FAILED_ACTIONS_1), "<a href=" + l + " target='_blank'>" + e.t(o.a.ERROR_LOADING_FAILED_ACTIONS_2) + "</a>"].join("")
            }
        }, d = (r(641),
        n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), f = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, y = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, v = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "error-gui",
                t
            }
            return d(t, e),
            t.prototype.init = function(e, t) {
                return f(this, void 0, void 0, function() {
                    var e;
                    return y(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return this.container = document.querySelector("#error-container"),
                            this.problem = document.querySelector("#error-problem"),
                            this.solution = document.querySelector("#error-solution"),
                            this.explanation = document.querySelector("#error-explanation"),
                            this.actions = document.querySelector("#error-actions"),
                            e = this,
                            [4, t.getModule(i.A)];
                        case 1:
                            return e.localeModule = r.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.showError = function(e) {
                var t = this;
                switch (e) {
                case i.o.UNSUPPORTED:
                    this.populateErrorScreen(c);
                    break;
                case i.o.WEBGL:
                    this.populateErrorScreen(p);
                    var r = this.actions.querySelector("#install-browser");
                    r && r.addEventListener("click", function() {
                        return t.populateErrorScreen(s)
                    });
                    break;
                case i.o.GENERIC:
                default:
                    this.populateErrorScreen(h)
                }
            }
            ,
            t.prototype.populateErrorScreen = function(e) {
                var t = e(this.localeModule);
                this.container.classList.remove("hidden"),
                this.problem.innerText = t.problem,
                this.solution.innerText = t.solution,
                this.explanation.innerText = t.explanation,
                this.actions.innerHTML = t.actions
            }
            ,
            t
        }(i.n);
        t.default = v
    },
    700: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i, o = r(18), a = Object.freeze({
            profiling: {
                enabled: o.m("mem", !1)
            }
        }), s = r(38), u = r(0), c = r(261), l = r(1), p = r(7), h = r(288), d = function() {
            function e(e, t) {
                void 0 === t && (t = null),
                this.eyeTranslationL = new l.a,
                this.eyeTranslationR = new l.a,
                this.frameData = null,
                this.defaultLeftBounds = [0, 0, .5, 1],
                this.defaultRightBounds = [.5, 0, .5, 1],
                this.renderer = e,
                this.onError = t,
                null !== window.VRFrameData && void 0 !== window.VRFrameData && (this.frameData = new window.VRFrameData),
                navigator.getVRDisplays && (this.gotVRDisplays = this.gotVRDisplays.bind(this),
                navigator.getVRDisplays().then(this.gotVRDisplays).catch(function() {
                    console.warn("VREffect: Unable to get VR Displays")
                })),
                this.isPresenting = !1,
                this.scope = this,
                this.rendererSize = e.getSize(),
                this.rendererUpdateStyle = !1,
                this.rendererPixelRatio = e.getPixelRatio(),
                this.canvas = e.domElement,
                this.onVRDisplayPresentChange = this.onVRDisplayPresentChange.bind(this),
                window.addEventListener("vrdisplaypresentchange", this.onVRDisplayPresentChange, !1),
                this.cameraL = new h.a,
                this.cameraL.layers.mask = -1,
                this.cameraR = new h.a,
                this.cameraR.layers.mask = -1
            }
            return e.prototype.gotVRDisplays = function(e) {
                this.vrDisplays = e,
                e.length > 0 ? this.vrDisplay = e[0] : this.onError && this.onError("HMD not available")
            }
            ,
            e.prototype.getVRDisplay = function() {
                return this.vrDisplay
            }
            ,
            e.prototype.setVRDisplay = function(e) {
                this.vrDisplay = e
            }
            ,
            e.prototype.getVRDisplays = function() {
                return console.warn("THREE.VREffect: getVRDisplays() is being deprecated."),
                this.vrDisplays
            }
            ,
            e.prototype.setSize = function(e, t, r) {
                if (this.rendererSize = {
                    width: e,
                    height: t
                },
                this.rendererUpdateStyle = r,
                this.scope.isPresenting) {
                    var n = this.vrDisplay.getEyeParameters("left");
                    this.renderer.setPixelRatio(1),
                    this.renderer.setSize(2 * n.renderWidth, n.renderHeight, !1)
                } else
                    this.renderer.setPixelRatio(this.rendererPixelRatio),
                    this.renderer.setSize(e, t, r)
            }
            ,
            e.prototype.onVRDisplayPresentChange = function() {
                var e = this.scope.isPresenting;
                if (this.scope.isPresenting = void 0 !== this.vrDisplay && this.vrDisplay.isPresenting,
                this.scope.isPresenting) {
                    var t = this.vrDisplay.getEyeParameters("left")
                      , r = t.renderWidth
                      , n = t.renderHeight;
                    e || (this.rendererPixelRatio = this.renderer.getPixelRatio(),
                    this.rendererSize = this.renderer.getSize(),
                    this.renderer.setPixelRatio(1),
                    this.renderer.setSize(2 * r, n, !1))
                } else
                    e && (this.renderer.setPixelRatio(this.rendererPixelRatio),
                    this.renderer.setSize(this.rendererSize.width, this.rendererSize.height, this.rendererUpdateStyle))
            }
            ,
            e.prototype.setFullScreen = function(e) {
                return new Promise(function(t, r) {
                    void 0 !== this.vrDisplay ? this.scope.isPresenting !== e ? t(e ? this.vrDisplay.requestPresent([{
                        source: this.canvas
                    }]) : this.vrDisplay.exitPresent()) : t() : r(new Error("No VR hardware found."))
                }
                )
            }
            ,
            e.prototype.requestPresent = function() {
                return this.setFullScreen(!0)
            }
            ,
            e.prototype.exitPresent = function() {
                return this.setFullScreen(!1)
            }
            ,
            e.prototype.requestAnimationFrame = function(e) {
                return void 0 !== this.vrDisplay ? this.vrDisplay.requestAnimationFrame(e) : window.requestAnimationFrame(e)
            }
            ,
            e.prototype.cancelAnimationFrame = function(e) {
                void 0 !== this.vrDisplay ? this.vrDisplay.cancelAnimationFrame(e) : window.cancelAnimationFrame(e)
            }
            ,
            e.prototype.submitFrame = function() {
                void 0 !== this.vrDisplay && this.scope.isPresenting && this.vrDisplay.submitFrame()
            }
            ,
            e.prototype.render = function(e, t, r, n) {
                if (this.vrDisplay && this.scope.isPresenting) {
                    var i = e.autoUpdate;
                    i && (e.updateMatrixWorld(n),
                    e.autoUpdate = !1),
                    Array.isArray(e) && (console.warn("VREffect.render() no longer supports arrays. Use object.layers instead."),
                    e = e[0]);
                    var o = this.renderer.getSize()
                      , a = this.vrDisplay.getLayers()
                      , s = this.defaultLeftBounds
                      , u = this.defaultRightBounds;
                    if (a.length) {
                        var c = a[0];
                        null !== c && (void 0 !== c.leftBounds && 4 === c.leftBounds.length && (s = c.leftBounds),
                        void 0 !== c.rightBounds && 4 === c.rightBounds.length && (u = c.rightBounds))
                    } else
                        s = this.defaultLeftBounds,
                        u = this.defaultRightBounds;
                    return this.renderRectL = {
                        x: Math.round(o.width * s[0]),
                        y: Math.round(o.height * s[1]),
                        width: Math.round(o.width * s[2]),
                        height: Math.round(o.height * s[3])
                    },
                    this.renderRectR = {
                        x: Math.round(o.width * u[0]),
                        y: Math.round(o.height * u[1]),
                        width: Math.round(o.width * u[2]),
                        height: Math.round(o.height * u[3])
                    },
                    r ? (this.renderer.setRenderTarget(r),
                    r.scissorTest = !0) : (this.renderer.setRenderTarget(null),
                    this.renderer.setScissorTest(!0)),
                    (this.renderer.autoClear || n) && this.renderer.clear(),
                    null === t.parent && t.updateMatrixWorld(n),
                    t.matrixWorld.decompose(this.cameraL.position, this.cameraL.quaternion, this.cameraL.scale),
                    this.cameraR.position.copy(this.cameraL.position),
                    this.cameraR.quaternion.copy(this.cameraL.quaternion),
                    this.cameraR.scale.copy(this.cameraL.scale),
                    this.cameraL.translateOnAxis(this.eyeTranslationL, this.cameraL.scale.x),
                    this.cameraR.translateOnAxis(this.eyeTranslationR, this.cameraR.scale.x),
                    this.vrDisplay.getFrameData && (this.vrDisplay.depthNear = t.near,
                    this.vrDisplay.depthFar = t.far,
                    this.vrDisplay.getFrameData(this.frameData),
                    this.cameraL.projectionMatrix.elements = this.frameData.leftProjectionMatrix,
                    this.cameraR.projectionMatrix.elements = this.frameData.rightProjectionMatrix),
                    r ? (r.viewport.set(this.renderRectL.x, this.renderRectL.y, this.renderRectL.width, this.renderRectL.height),
                    r.scissor.set(this.renderRectL.x, this.renderRectL.y, this.renderRectL.width, this.renderRectL.height)) : (this.renderer.setViewport(this.renderRectL.x, this.renderRectL.y, this.renderRectL.width, this.renderRectL.height),
                    this.renderer.setScissor(this.renderRectL.x, this.renderRectL.y, this.renderRectL.width, this.renderRectL.height)),
                    this.renderer.render(e, this.cameraL, r, n),
                    r ? (r.viewport.set(this.renderRectR.x, this.renderRectR.y, this.renderRectR.width, this.renderRectR.height),
                    r.scissor.set(this.renderRectR.x, this.renderRectR.y, this.renderRectR.width, this.renderRectR.height)) : (this.renderer.setViewport(this.renderRectR.x, this.renderRectR.y, this.renderRectR.width, this.renderRectR.height),
                    this.renderer.setScissor(this.renderRectR.x, this.renderRectR.y, this.renderRectR.width, this.renderRectR.height)),
                    this.renderer.render(e, this.cameraR, r, n),
                    r ? (r.viewport.set(0, 0, o.width, o.height),
                    r.scissor.set(0, 0, o.width, o.height),
                    r.scissorTest = !1,
                    this.renderer.setRenderTarget(null)) : (this.renderer.setViewport(0, 0, o.width, o.height),
                    this.renderer.setScissorTest(!1)),
                    i && (e.autoUpdate = !0),
                    void this.scope.submitFrame()
                }
                this.renderer.render(e, t, r, n)
            }
            ,
            e.prototype.dispose = function() {
                window.removeEventListener("vrdisplaypresentchange", this.onVRDisplayPresentChange, !1)
            }
            ,
            e.prototype.fovToNDCScaleOffset = function(e) {
                var t = 2 / (e.leftTan + e.rightTan)
                  , r = (e.leftTan - e.rightTan) * t * .5
                  , n = 2 / (e.upTan + e.downTan);
                return {
                    scale: [t, n],
                    offset: [r, (e.upTan - e.downTan) * n * .5]
                }
            }
            ,
            e.prototype.fovPortToProjection = function(e, t, r, n) {
                r = void 0 === r ? .01 : r,
                n = void 0 === n ? 1e4 : n;
                var i = (t = void 0 === t || t) ? -1 : 1
                  , o = new p.a
                  , a = o.elements
                  , s = this.fovToNDCScaleOffset(e);
                return a[0] = s.scale[0],
                a[1] = 0,
                a[2] = s.offset[0] * i,
                a[3] = 0,
                a[4] = 0,
                a[5] = s.scale[1],
                a[6] = -s.offset[1] * i,
                a[7] = 0,
                a[8] = 0,
                a[9] = 0,
                a[10] = n / (r - n) * -i,
                a[11] = n * r / (r - n),
                a[12] = 0,
                a[13] = 0,
                a[14] = i,
                a[15] = 0,
                o.transpose(),
                o
            }
            ,
            e.prototype.fovToProjection = function(e, t, r, n) {
                var i = Math.PI / 180
                  , o = {
                    upTan: Math.tan(e.upDegrees * i),
                    downTan: Math.tan(e.downDegrees * i),
                    leftTan: Math.tan(e.leftDegrees * i),
                    rightTan: Math.tan(e.rightDegrees * i)
                };
                return this.fovPortToProjection(o, t, r, n)
            }
            ,
            e
        }(), f = r(66), y = r(224), v = r(73), m = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), w = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.camera = new h.a(y.a.fov,t,y.a.near,y.a.far),
                r.add(r.camera),
                r.camera.layers.mask = v.a.ALL.mask,
                r
            }
            return m(t, e),
            t.prototype.dispose = function() {
                this.remove(this.camera)
            }
            ,
            t
        }(f.a), g = function() {
            function e(e, t, r) {
                this.cwfRenderer = e,
                this.cameraData = t,
                this.canvas = r,
                this.rendererHeight = 0,
                this.rendererWidth = 0,
                this.rendering = !1,
                this.projectionDirty = !0
            }
            return Object.defineProperty(e.prototype, "camera", {
                get: function() {
                    return this.projectionDirty && (this.cameraRig.camera.projectionMatrix.copy(this.cameraData.pose.projection),
                    this.projectionDirty = !1),
                    this.cameraRig.camera
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.init = function(e) {
                this.engine = e,
                this.scene = new c.a,
                this.cameraRig = new w(this.canvas.aspectRatio),
                this.effect = new d(this.cwfRenderer.threeRenderer),
                this.effect.setSize(this.canvas.width, this.canvas.height, !1)
            }
            ,
            e.prototype.dispose = function() {
                this.deactivate(),
                this.effect.dispose(),
                this.cameraRig.dispose()
            }
            ,
            e.prototype.startRender = function(e) {
                this.rendering = e
            }
            ,
            e.prototype.activate = function() {
                this.scene.add(this.cameraRig)
            }
            ,
            e.prototype.deactivate = function() {
                this.scene.remove(this.cameraRig)
            }
            ,
            e.prototype.beforeRender = function() {
                this.cameraRig.position.copy(this.cameraData.pose.position),
                this.cameraRig.camera.quaternion.copy(this.cameraData.pose.rotation),
                this.cameraRig.camera.projectionMatrix.copy(this.cameraData.pose.projection),
                this.projectionDirty = !1
            }
            ,
            e.prototype.render = function() {
                this.rendering && this.effect.render(this.scene, this.cameraRig.camera, void 0, !1)
            }
            ,
            e.prototype.setSize = function(e, t) {
                this.projectionDirty = !0,
                this.cameraRig.camera.updateProjectionMatrix(),
                this.effect.setSize(e, t, !1),
                this.rendererWidth = e,
                this.rendererHeight = t
            }
            ,
            e
        }(), b = r(70), T = r(354), _ = r(516), S = r(187), D = r(25), R = r(235), x = r(515), P = r(335), E = r(148), O = r(145), A = r(147), M = r(287), U = r(43), C = r(514), I = r(513), z = {
            basicTextured: {
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    alpha: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: I + r(512),
                fragmentShader: C + r(511)
            },
            copyCubeMap: {
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    alpha: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: I + r(510),
                fragmentShader: C + r(509)
            }
        };
        !function(e) {
            e[e.Texture2D = 0] = "Texture2D",
            e[e.TextureCube = 1] = "TextureCube"
        }(i || (i = {}));
        var k = i
          , L = r(286)
          , j = r(83)
          , F = function() {
            function e(e, t, r, n, i, o) {
                var a, s, u, l, p, h;
                this.updateTextureMemory = function() {
                    var e = 0;
                    for (var t in this.textures) {
                        var r = this.textures[t];
                        r.width && r.height && (e += r.width * r.height * 4)
                    }
                    e
                }
                ,
                this.getImageData = function() {
                    var e = document.createElement("canvas")
                      , t = e.getContext("2d");
                    return function(r, n, i) {
                        return e.width === n && e.height === i || (e.width = n,
                        e.height = i),
                        t ? (t.drawImage(r, 0, 0, n, i),
                        t.getImageData(0, 0, n, i)) : null
                    }
                }(),
                this.renderToCubeMap = (h = !1,
                function(e, t, r, n, i, o, d, f, y, v, m, w, g, b, T, _) {
                    h || ((s = new P.a(-.5,.5,.5,-.5,-200,200)).position.z = 150,
                    (a = new c.a).add(s),
                    u = new A.a({
                        uniforms: {
                            tDiffuse: {
                                type: "t",
                                value: null
                            },
                            alpha: {
                                type: "f",
                                value: 1
                            }
                        },
                        vertexShader: z.basicTextured.vertexShader,
                        fragmentShader: z.basicTextured.fragmentShader,
                        depthWrite: !1,
                        depthTest: !1,
                        side: D.u
                    }),
                    l = new E.a(1,1),
                    (p = new O.a(l,u)).position.z = 0,
                    a.add(p),
                    h = !0);
                    var S = l.getAttribute("uv");
                    S.setDynamic(!0),
                    S.needsUpdate = !0;
                    var R = S.array
                      , x = i / r
                      , M = o / n
                      , U = d / r
                      , C = f / n;
                    R[0] = x,
                    R[1] = M + C,
                    R[2] = x + U,
                    R[3] = M + C,
                    R[4] = x,
                    R[5] = M,
                    R[6] = x + U,
                    R[7] = M;
                    var I = l.getAttribute("position");
                    I.setDynamic(!0),
                    I.needsUpdate = !0;
                    var k = I.array
                      , L = y / t.width - .5
                      , j = v / t.height - .5
                      , F = m / t.width
                      , N = w / t.height;
                    k[0] = L,
                    k[1] = j + N,
                    k[3] = L + F,
                    k[4] = j + N,
                    k[6] = L,
                    k[7] = j,
                    k[9] = L + F,
                    k[10] = j,
                    u.uniforms.tDiffuse.value = e,
                    u.blending = b || D.Ca,
                    u.transparent = !!T,
                    null == _ && (_ = 1),
                    u.uniforms.alpha.value = _,
                    u.needsUpdate = !0,
                    t.activeCubeFace = g,
                    t.viewport.set(0, 0, t.width, t.height);
                    var Q = this.threeRenderer.autoClear;
                    this.threeRenderer.autoClear = !1,
                    this.threeRenderer.render(a, s, t, !1),
                    this.threeRenderer.autoClear = Q
                }
                ),
                this.copyCubeMap = function() {
                    var e, t, r, n, i, o = !1, a = new U.a;
                    return function(s, u, l, p, h, d, f, y, v) {
                        if (!o) {
                            (t = new P.a(-1,1,1,-1,0,200)).position.set(0, 0, 0),
                            (e = new c.a).add(t),
                            r = new A.a({
                                uniforms: {
                                    tDiffuse: {
                                        type: "t",
                                        value: null
                                    },
                                    alpha: {
                                        type: "f",
                                        value: 1
                                    }
                                },
                                vertexShader: z.copyCubeMap.vertexShader,
                                fragmentShader: z.copyCubeMap.fragmentShader,
                                depthWrite: !1,
                                depthTest: !1,
                                side: D.u
                            }),
                            n = new M.a(2,2,2),
                            i = new O.a(n,r),
                            e.add(i),
                            o = !0
                        }
                        for (var m = 0; m < 6; m++) {
                            N(m, a),
                            i.rotation.copy(a),
                            i.matrixWorldNeedsUpdate = !0,
                            i.updateMatrixWorld(!0),
                            r.uniforms.tDiffuse.value = s,
                            r.blending = f || D.Ca,
                            r.transparent = !!y,
                            null == v && (v = 1),
                            r.uniforms.alpha.value = v,
                            r.needsUpdate = !0,
                            u.activeCubeFace = m,
                            u.viewport.set(0, 0, h, d),
                            this.threeRenderer.render(e, t, u, !1)
                        }
                    }
                }(),
                this.threeRenderer = this.createRenderer(e, t, r, n, devicePixelRatio, o),
                this.canvas = e,
                this.devicePixelRatio = i,
                this.antialias = r,
                this.autoClear = t,
                this.updateClock = new _.a,
                this.textures = {}
            }
            return Object.defineProperty(e.prototype, "maxCubemapSize", {
                get: function() {
                    var e = this.threeRenderer.context;
                    return e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getSize = function() {
                return this.threeRenderer.getSize()
            }
            ,
            e.prototype.dispose = function() {
                this.threeRenderer.dispose()
            }
            ,
            e.prototype.createRenderer = function(e, t, r, n, i, o) {
                var a = null;
                try {
                    (a = new T.a({
                        canvas: e.element,
                        antialias: r
                    })).autoClear = t,
                    i = i || (window.devicePixelRatio ? window.devicePixelRatio : 1),
                    a.setPixelRatio(i),
                    a.setSize(o.width, o.height)
                } catch (e) {
                    throw new j.a("Unable to create a WebGL rendering context")
                }
                return n && this.overrideTextures(),
                a
            }
            ,
            e.prototype.overrideTextures = function() {
                var e = this.threeRenderer.context
                  , t = 0
                  , r = e.createTexture;
                e.createTexture = function() {
                    var n = r.call(e);
                    return n.id = t++,
                    this.textures[n.id] = n,
                    n
                }
                .bind(this);
                var n = e.texImage2D;
                e.texImage2D = function(t, r, i, o, a, s, u, c, l) {
                    var p = null
                      , h = this.getTextureTypeFromTarget(e, t);
                    p = h === k.TextureCube ? e.getParameter(e.TEXTURE_BINDING_CUBE_MAP) : e.getParameter(e.TEXTURE_BINDING_2D),
                    void 0 !== u ? n.call(e, t, r, i, o, a, s, u, c, l) : (u = o,
                    c = a,
                    o = (l = s).naturalWidth,
                    a = l.naturalHeight,
                    n.call(e, t, r, i, u, c, l));
                    var d = this.textures[p.id];
                    d.width = h === k.TextureCube ? 6 * o : o,
                    d.height = a
                }
                .bind(this);
                var i = e.deleteTexture;
                e.deleteTexture = function(t) {
                    delete this.textures[t.id],
                    i.call(e, t)
                }
                .bind(this)
            }
            ,
            e.prototype.getTextureTypeFromTarget = function(e, t) {
                switch (t) {
                case e.TEXTURE_CUBE_MAP_POSITIVE_X:
                case e.TEXTURE_CUBE_MAP_NEGATIVE_X:
                case e.TEXTURE_CUBE_MAP_POSITIVE_Y:
                case e.TEXTURE_CUBE_MAP_NEGATIVE_Y:
                case e.TEXTURE_CUBE_MAP_POSITIVE_Z:
                case e.TEXTURE_CUBE_MAP_NEGATIVE_Z:
                    return k.TextureCube;
                case e.TEXTURE_2D:
                    return k.Texture2D;
                default:
                    return null
                }
            }
            ,
            e.prototype.initSizedTexture2D = function(e, t, r) {
                var n = this.threeRenderer.context
                  , i = this.threeRenderer.state
                  , o = new S.a;
                o.flipY = !1,
                !0 !== r && (r = !1),
                o.generateMipmaps = r;
                var a = Q(o.format, this.threeRenderer)
                  , s = Q(o.type, this.threeRenderer)
                  , u = this.threeRenderer.properties.get(o)
                  , c = n.createTexture();
                i.bindTexture(n.TEXTURE_2D, c),
                n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, o.flipY),
                n.texImage2D(n.TEXTURE_2D, 0, a, e, e, 0, a, s, null),
                o.wrapS = t,
                o.wrapT = t;
                var l = Q(t, this.threeRenderer);
                return n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, l),
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, l),
                r ? (o.magFilter = D.M,
                o.minFilter = D.N,
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR),
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_NEAREST),
                n.generateMipmap(n.TEXTURE_2D)) : (o.magFilter = D.M,
                o.minFilter = D.M,
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR),
                n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)),
                i.bindTexture(n.TEXTURE_2D, null),
                u.__webglTexture = c,
                o
            }
            ,
            e.prototype.initSizedCubeMap = function(e, t) {
                var r = this.threeRenderer.context
                  , n = this.threeRenderer.state
                  , i = new R.a([null, null, null, null, null, null]);
                i.flipY = !1,
                i.generateMipmaps = t;
                var o = Q(i.format, this.threeRenderer)
                  , a = Q(i.type, this.threeRenderer)
                  , s = this.threeRenderer.properties.get(i)
                  , u = r.createTexture();
                n.bindTexture(r.TEXTURE_CUBE_MAP, u),
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, i.flipY);
                for (var c = 0; c < 6; c++)
                    r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, o, e, e, 0, o, a, null);
                return t ? (i.magFilter = D.M,
                i.minFilter = D.N,
                r.texParameteri(r.TEXTURE_CUBE_MAP, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_CUBE_MAP, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
                r.generateMipmap(r.TEXTURE_CUBE_MAP)) : (i.magFilter = D.M,
                i.minFilter = D.M,
                r.texParameteri(r.TEXTURE_CUBE_MAP, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_CUBE_MAP, r.TEXTURE_MIN_FILTER, r.LINEAR)),
                n.bindTexture(r.TEXTURE_CUBE_MAP, null),
                s.__image__webglTextureCube = u,
                i
            }
            ,
            e.prototype.initRenderTargetCube = function(e, t) {
                var r = this.threeRenderer
                  , n = new x.a(e,e,{
                    stencilBuffer: !1
                })
                  , i = new R.a([]);
                n.texture = i,
                i.image = [null, null, null, null, null, null],
                i.flipY = !0,
                t ? (i.generateMipmaps = !0,
                i.magFilter = D.M,
                i.minFilter = D.N) : (i.generateMipmaps = !1,
                i.magFilter = D.M,
                i.minFilter = D.M),
                i.format = D.Qa,
                r.setRenderTarget(n),
                r.setRenderTarget.call(r, null);
                var o = r.properties.get(i);
                return o.__image__webglTextureCube = o.__webglTexture,
                n
            }
            ,
            e.prototype.deallocateCubeTexture = function(e) {
                var t = this.threeRenderer.context
                  , r = this.threeRenderer.properties.get(e);
                t.deleteTexture(r.__image__webglTextureCube)
            }
            ,
            e.prototype.uploadTexture2D = function(e, t, r, n, i, o) {
                var a = this.threeRenderer.context
                  , s = this.threeRenderer.state
                  , u = this.threeRenderer.properties.get(t);
                s.bindTexture(a.TEXTURE_2D, u.__webglTexture),
                a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, t.flipY),
                a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
                a.pixelStorei(a.UNPACK_ALIGNMENT, t.unpackAlignment),
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, Q(t.wrapS, this.threeRenderer)),
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, Q(t.wrapT, this.threeRenderer)),
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, Q(t.magFilter, this.threeRenderer)),
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, Q(t.minFilter, this.threeRenderer)),
                a.texSubImage2D(a.TEXTURE_2D, 0, r, n, a.RGBA, a.UNSIGNED_BYTE, e),
                t.generateMipmaps && a.generateMipmap(a.TEXTURE_2D),
                s.bindTexture(a.TEXTURE_2D, null)
            }
            ,
            e.prototype.uploadTexture3D = function(e, t, r, n, i, o, a) {
                var s = this.threeRenderer.context
                  , u = this.threeRenderer.state
                  , c = this.threeRenderer.properties.get(t);
                u.bindTexture(s.TEXTURE_CUBE_MAP, c.__image__webglTextureCube),
                s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, t.flipY),
                s.texSubImage2D(i, 0, r, n, s.RGBA, s.UNSIGNED_BYTE, e),
                t.generateMipmaps && s.generateMipmap(s.TEXTURE_CUBE_MAP),
                u.bindTexture(s.TEXTURE_CUBE_MAP, null)
            }
            ,
            e.prototype.rebuildMipMaps2D = function(e) {
                var t = this.threeRenderer.context
                  , r = this.threeRenderer.state;
                t.generateMipmap(t.TEXTURE_2D),
                r.bindTexture(t.TEXTURE_2D, null)
            }
            ,
            e.prototype.rebuildMipMaps3D = function(e) {
                var t = this.threeRenderer.context
                  , r = this.threeRenderer.state
                  , n = this.threeRenderer.properties.get(e);
                r.bindTexture(t.TEXTURE_CUBE_MAP, n.__image__webglTextureCube),
                t.generateMipmap(t.TEXTURE_CUBE_MAP),
                r.bindTexture(t.TEXTURE_CUBE_MAP, null)
            }
            ,
            e
        }()
          , N = function(e, t) {
            switch (e) {
            case L.a.GL_TEXTURE_CUBE_MAP_POSITIVE_X:
                t.set(0, -Math.PI / 2, 0);
                break;
            case L.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_X:
                t.set(0, Math.PI / 2, 0);
                break;
            case L.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Y:
                t.set(Math.PI / 2, Math.PI, 0);
                break;
            case L.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y:
                t.set(-Math.PI / 2, Math.PI, 0);
                break;
            case L.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Z:
                t.set(0, -Math.PI, 0);
                break;
            case L.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z:
                t.set(0, 0, 0)
            }
        }
          , Q = function(e, t) {
            var r, n = t.extensions, i = t.context;
            switch (e) {
            case D.gb:
                return i.REPEAT;
            case D.j:
                return i.CLAMP_TO_EDGE;
            case D.U:
                return i.MIRRORED_REPEAT;
            case D.Y:
                return i.NEAREST;
            case D.Aa:
                return i.NEAREST_MIPMAP_NEAREST;
            case D.Z:
                return i.NEAREST_MIPMAP_LINEAR;
            case D.M:
                return i.LINEAR;
            case D.O:
                return i.LINEAR_MIPMAP_NEAREST;
            case D.N:
                return i.LINEAR_MIPMAP_LINEAR;
            case D.vb:
                return i.UNSIGNED_BYTE;
            case D.yb:
                return i.UNSIGNED_SHORT_4_4_4_4;
            case D.zb:
                return i.UNSIGNED_SHORT_5_5_5_1;
            case D.Ab:
                return i.UNSIGNED_SHORT_5_6_5;
            case D.h:
                return i.BYTE;
            case D.ib:
                return i.SHORT;
            case D.Bb:
                return i.UNSIGNED_SHORT;
            case D.I:
                return i.INT;
            case D.xb:
                return i.UNSIGNED_INT;
            case D.B:
                return i.FLOAT
            }
            if (null !== (r = n.get("OES_texture_half_float")) && e === D.H)
                return r.HALF_FLOAT_OES;
            switch (e) {
            case D.d:
                return i.ALPHA;
            case D.Ya:
                return i.RGB;
            case D.Qa:
                return i.RGBA;
            case D.R:
                return i.LUMINANCE;
            case D.Q:
                return i.LUMINANCE_ALPHA;
            case D.a:
                return i.FUNC_ADD;
            case D.ob:
                return i.FUNC_SUBTRACT;
            case D.hb:
                return i.FUNC_REVERSE_SUBTRACT;
            case D.Cb:
                return i.ZERO;
            case D.Ha:
                return i.ONE;
            case D.nb:
                return i.SRC_COLOR;
            case D.La:
                return i.ONE_MINUS_SRC_COLOR;
            case D.lb:
                return i.SRC_ALPHA;
            case D.Ka:
                return i.ONE_MINUS_SRC_ALPHA;
            case D.v:
                return i.DST_ALPHA;
            case D.Ia:
                return i.ONE_MINUS_DST_ALPHA;
            case D.w:
                return i.DST_COLOR;
            case D.Ja:
                return i.ONE_MINUS_DST_COLOR;
            case D.mb:
                return i.SRC_ALPHA_SATURATE
            }
            if (null !== (r = n.get("WEBGL_compressed_texture_s3tc"))) {
                if (e === D.eb)
                    return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (e === D.Ta)
                    return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (e === D.Ua)
                    return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (e === D.Va)
                    return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (null !== (r = n.get("WEBGL_compressed_texture_pvrtc"))) {
                if (e === D.db)
                    return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (e === D.cb)
                    return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (e === D.Sa)
                    return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (e === D.Ra)
                    return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (null !== (r = n.get("WEBGL_compressed_texture_etc1")) && e === D.bb)
                return r.COMPRESSED_RGB_ETC1_WEBGL;
            if (null !== (r = n.get("EXT_blend_minmax"))) {
                if (e === D.T)
                    return r.MIN_EXT;
                if (e === D.S)
                    return r.MAX_EXT
            }
            return 0
        }
          , G = r(196)
          , B = r(144)
          , X = r(263)
          , H = r(17)
          , V = r(10)
          , q = r(285)
          , Z = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }()
          , W = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }
          , Y = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
          , K = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "webgl-renderer",
                t.perfStatEnabled = !1,
                t.perfStatInterval = 1e3,
                t.elapsedTime = 0,
                t.frameCount = 0,
                t.fps = [0],
                t.createRenderer = function(e, t) {
                    return new F(e,!1,!1,a.profiling.enabled,1,t)
                }
                ,
                t
            }
            return Z(t, e),
            t.prototype.init = function(e, t) {
                return W(this, void 0, void 0, function() {
                    var e = this;
                    return Y(this, function(r) {
                        switch (r.label) {
                        case 0:
                            if (!("WebGLRenderingContext"in window))
                                throw new j.b("WebGL not supported");
                            return this.engine = t,
                            t.market.waitForData(b.a).then(function(t) {
                                e.perfStatEnabled = "1" === t.tryGetProperty("perf", 0),
                                e.perfStatInterval = t.tryGetProperty("perfInterval", e.perfStatInterval)
                            }),
                            this.sdkModule = t.getModuleSync(s.default),
                            this.calculatePerf = this.calculatePerf.bind(this),
                            [4, Promise.all([t.getModule(u.d), t.market.waitForData(G.a), t.market.waitForData(B.a)]).then(function(r) {
                                var n = r[0]
                                  , i = r[1]
                                  , o = r[2];
                                e.cwfRenderer = e.createRenderer(n, i),
                                e.scene = new g(e.cwfRenderer,o,i),
                                t.addComponent(e, e.scene),
                                t.subscribe(X.a, function(t) {
                                    e.scene.setSize(t.width, t.height)
                                })
                            })];
                        case 1:
                            return r.sent(),
                            t.subscribe(X.a, function(t) {
                                e.scene.setSize(t.width, t.height)
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.calculatePerf = function(e) {
                var t = this;
                return this.elapsedTime += e,
                this.frameCount++,
                this.elapsedTime >= this.perfStatInterval && (this.fps[0] = 1e3 * this.frameCount / this.elapsedTime,
                this.elapsedTime = 0,
                this.frameCount = 0,
                this.sdkModule.broadcast(q.a.FPS, e, function() {
                    return t.fps
                }, !0)),
                this.fps
            }
            ,
            t.prototype.onUpdate = function(e) {
                this.perfStatEnabled && this.calculatePerf(e)
            }
            ,
            Object.defineProperty(t.prototype, "maxCubemapSize", {
                get: function() {
                    return this.cwfRenderer.maxCubemapSize
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.getScene = function() {
                return this.scene
            }
            ,
            t.prototype.renderOnce = function() {
                return W(this, void 0, void 0, function() {
                    var e = this;
                    return Y(this, function(t) {
                        return this.scene.startRender(!0),
                        [2, this.engine.after(V.a.Render).nativePromise().then(function() {
                            return e.scene.startRender(!1)
                        })]
                    })
                })
            }
            ,
            t.prototype.startRender = function(e) {
                void 0 === e && (e = !0),
                this.scene.startRender(e)
            }
            ,
            t.prototype.worldToNDC = function(e, t) {
                return (t = t || new l.a).copy(e).project(this.scene.camera),
                t
            }
            ,
            t.prototype.ndcToWorld = function(e, t) {
                return (t = t || new l.a).x = e.x,
                t.y = e.y,
                t.z = .5,
                t.unproject(this.scene.camera),
                t
            }
            ,
            t.prototype.ndcToScreenPoint = function(e, t) {
                t = t || new H.a;
                var r = this.cwfRenderer.getSize()
                  , n = r.width
                  , i = r.height;
                return t.set((e.x + 1) * n / 2, (1 - e.y) * i / 2),
                t
            }
            ,
            t
        }(u.Oa);
        t.default = K
    },
    701: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(40), a = function(e) {
            return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ("" + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a)
        }, s = function(e) {
            return e.data && e.data.player_options && e.data.player_options.highlight_reel
        }, u = r(18), c = function() {
            function e(e) {
                var t = this;
                this.analytics = e,
                this.impression = function() {
                    var e = u.b();
                    t.analytics.track("impression", {
                        url_params: e,
                        visible: !0
                    })
                }
                ,
                this.modelLoaded = function(e) {
                    t.analytics.track("model_loaded", {
                        has_hlr: s(e),
                        duration: Date.now() - t.sessionStartTime,
                        duration_from_navigation_start: Date.now() - performance.timing.navigationStart
                    })
                }
                ,
                this.sessionEnded = function() {
                    t.analytics.trackAsync("session_ended", {
                        duration: Date.now() - t.sessionStartTime
                    })
                }
                ,
                this.sessionStartTime = Date.now(),
                this.analytics.track("session_started"),
                this.boundSessionEnd = this.sessionEnded.bind(this),
                window.addEventListener("unload", this.boundSessionEnd),
                this.impression()
            }
            return e.prototype.dispose = function() {
                window.removeEventListener("unload", this.boundSessionEnd)
            }
            ,
            e
        }(), l = r(61), p = r(295), h = function() {
            return function() {
                this.applicationKey = "showcase",
                this.options = {
                    model_id: Object(l.b)(),
                    start_source: u.m("play", !1) ? "autoplay" : u.d() ? "click" : "fullpage",
                    autoplay: u.m("play", !1) || !u.d(),
                    quickstart: 1 === u.m("qust", 0) || 1 === u.m("qs", 0),
                    language_tag: u.m("lang", null),
                    is_mobile: u.j(),
                    iframe: u.d(),
                    aspect_ratio: u.n(),
                    session_id: a(),
                    window: Object(p.c)(),
                    platform: Object(p.a)()
                },
                this.context = {
                    context: {
                        app: {
                            name: "showcase_3.0",
                            version: "3.0.3.82-0-ge8c0dfde1"
                        },
                        screen: Object(p.b)()
                    }
                }
            }
        }(), d = r(82), f = r(294), y = r(293), v = r(195), m = r(88), w = function() {
            return function() {
                this.handlers = [{
                    msgType: v.a,
                    func: function(e, t, r) {
                        var n = r.tryGetData(m.a)
                          , i = {
                            view_mode: t.toMode
                        };
                        n && (i.interaction_source = n.source),
                        e.track("mode_changed", i)
                    }
                }]
            }
        }(), g = r(213), b = r(225), T = r(36), _ = function() {
            return function() {
                this.handlers = [{
                    msgType: b.c,
                    func: function(e, t, r) {
                        var n = r.tryGetData(g.a);
                        if (n) {
                            var i = n.getTagCount()
                              , o = n.getVisitedTags().length
                              , a = n.getViewedTagCount()
                              , s = n.getTag(t.sid);
                            e.track("tag_opened", {
                                tag_count: i,
                                tag_id: t.sid,
                                tags_visited: o,
                                tag_view_count: a,
                                has_media: s.mediaType !== T.a.none
                            })
                        }
                    }
                }]
            }
        }(), S = r(109), D = function() {
            return function() {
                this.handlers = [{
                    msgType: S.a,
                    func: function(e, t, r) {
                        var n = r.tryGetData(m.a);
                        n && e.track("floor_changed", {
                            floor_id: t.floorName,
                            interaction_source: n.source
                        })
                    }
                }]
            }
        }(), R = r(292), x = r(65), P = 150, E = function() {
            function e() {
                var e = this;
                this.firstZoom = !0,
                this.fromZoom = 1,
                this.toZoom = 1,
                this.handlers = [{
                    msgType: R.a,
                    func: function(t, r, n) {
                        e.analytics || (e.analytics = t);
                        var i = n.tryGetData(x.a);
                        i && i.currentSweep !== e.currentPano && (e.firstZoom = !0,
                        e.currentPano = i.currentSweep,
                        e.fromZoom = 1),
                        e.toZoom = r.zoomLevel,
                        clearTimeout(e.sendTimeout),
                        e.sendTimeout = setTimeout(e.trackZoomEvent.bind(e), P)
                    }
                }]
            }
            return e.prototype.trackZoomEvent = function() {
                var e = this.firstZoom ? "initial" : "followup";
                this.analytics.track("zoom_" + e, {
                    from: this.fromZoom,
                    to: this.toZoom,
                    pano: this.currentPano
                }),
                this.firstZoom = !1,
                this.fromZoom = this.toZoom
            }
            ,
            e
        }(), O = r(28), A = r(8), M = r(11), U = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), C = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.modelLoadingStartTime = 0,
                t.waitingStartTime = 0,
                t.appPlayingTime = 0,
                t.appStartedTime = 0,
                t
            }
            return U(t, e),
            t.prototype.update = function(e) {
                this.modelLoadingStartTime = e.modelLoadingStartTime,
                this.waitingStartTime = e.waitingStartTime,
                this.appPlayingTime = e.appPlayingTime,
                this.appStartedTime = e.appStartedTime
            }
            ,
            Object.defineProperty(t.prototype, "totalTimeToAppStarting", {
                get: function() {
                    var e = this.appStartedTime - performance.timing.navigationStart;
                    return this.modelLoadingStartTime && this.waitingStartTime && (e -= this.modelLoadingStartTime - this.waitingStartTime),
                    e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "totalTimeToAppPlaying", {
                get: function() {
                    var e = this.appPlayingTime - performance.timing.navigationStart;
                    return this.modelLoadingStartTime && this.waitingStartTime && (e -= this.modelLoadingStartTime - this.waitingStartTime),
                    e
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }(M.a), I = new (r(4).a)("showcase-timing"), z = new C, k = function() {
            return function() {
                this.handlers = [{
                    msgType: O.a,
                    func: function(e, t, r) {
                        switch (t.phase) {
                        case A.a.WAITING:
                            z.waitingStartTime = Date.now();
                            break;
                        case A.a.LOADING:
                            z.modelLoadingStartTime = Date.now();
                            break;
                        case A.a.STARTING:
                            z.appStartedTime = Date.now(),
                            I.info("Render Ready " + z.totalTimeToAppStarting / 1e3);
                            break;
                        case A.a.PLAYING:
                            z.appPlayingTime = Date.now(),
                            I.info("Ready " + z.totalTimeToAppPlaying / 1e3),
                            e.track("load_times", {
                                time_to_app_start: z.totalTimeToAppStarting,
                                time_to_app_playing: z.totalTimeToAppPlaying
                            })
                        }
                    }
                }]
            }
        }(), L = r(291), j = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), F = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, N = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, Q = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.name = "showcase-analytics",
                t.loaded = !1,
                t.track = function(e, r) {
                    t.analytics.track(e, r)
                }
                ,
                t
            }
            return j(t, e),
            t.prototype.init = function(e, t) {
                return F(this, void 0, void 0, function() {
                    var e, r, n, a;
                    return N(this, function(s) {
                        switch (s.label) {
                        case 0:
                            return e = this,
                            [4, t.getModule(o.default)];
                        case 1:
                            return e.analytics = s.sent(),
                            this.context = new h,
                            this.addMessageHandler(new w, t),
                            this.addMessageHandler(new y.a, t),
                            this.addMessageHandler(new f.a, t),
                            this.addMessageHandler(new D, t),
                            this.addMessageHandler(new _, t),
                            this.addMessageHandler(new E, t),
                            this.addMessageHandler(new k, t),
                            this.addMessageHandler(new L.a, t),
                            [4, t.getModule(i.a)];
                        case 2:
                            return [4, s.sent().getApi().getAppKey(this.context.applicationKey, d.b[d.a.Segment].keyName)];
                        case 3:
                            return null === (r = s.sent()) ? (this.log.warn("Unable to get the segment key for " + this.context.applicationKey + ". Logging will be disabled."),
                            [2]) : (this.loaded = this.analytics.load(d.a.Segment, r, this.context.options, this.context.context),
                            this.loaded ? (this.sessionTracker = new c(this.analytics),
                            a = (n = this.sessionTracker).modelLoaded,
                            [4, t.getModule(i.H)]) : [3, 5]);
                        case 4:
                            a.apply(n, [s.sent().getModel()]),
                            s.label = 5;
                        case 5:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.addMessageHandler = function(e, t) {
                var r = this;
                e.handlers.forEach(function(e, n) {
                    t.subscribe(e.msgType, function(n) {
                        e.func(r.analytics, n, t.market)
                    })
                })
            }
            ,
            t.prototype.onUpdate = function(e) {
                this.loaded && Object(L.b)(this.analytics, e)
            }
            ,
            t.prototype.dispose = function() {
                this.sessionTracker && this.sessionTracker.dispose()
            }
            ,
            t.prototype.getSessionId = function() {
                return this.context.options.session_id
            }
            ,
            t.prototype.getContext = function() {
                return this.context
            }
            ,
            t
        }(i.T);
        t.default = Q
    },
    703: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(18), o = Object.freeze({
            featureFlagEnabled: !1,
            panoPreRenderRepeatDelay: 2500,
            panoPreRenderDelay: 500,
            preRenderTourPanos: i.m("tileprerender", 0),
            tilingFlagNames: ["usetiles", "tiles"],
            navPanoSize: i.m("maxtileq", void 0),
            zoomPanoSize: i.m("maxztileq", void 0),
            overlayStyle: i.m("tileoverlay", 0),
            uploadIntervalDelay: i.m("tileupdelay", 10),
            initialIntervalDelay: i.m("itiledelay", 0),
            maxNonBaseUploadsPerFrame: i.m("maxnbtpf", 2),
            maxBaseUploadsPerFrame: i.m("maxbtpf", 6),
            customCompression: i.m("tilecustcomp", 0),
            mobileHighQualityOverride: !1,
            allowUltraHighResolution: !1,
            windowHeightHighQualityThreshold: 900,
            windowHeightHighQualityThresholdOverride: i.m("threshold2k", void 0),
            concurrentDownloads: i.m("tileconc", 2),
            navigation: {
                panoScores: !1,
                mouseDirection: !0,
                filterStrictness: .75,
                angleFactor: -30,
                directionFactor: 10,
                distanceFactor: -1,
                optionalityFactor: 3
            }
        }), a = r(263), s = r(1), u = r(3), c = r(25), l = r(284), p = r(47), h = r(51), d = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        };
        !function(e) {
            e[e.PreOrder = 0] = "PreOrder",
            e[e.PostOrder = 1] = "PostOrder"
        }(n = n || (n = {}));
        var f, y = function() {
            function e(t, r) {
                this.tree = t,
                this.parent = r,
                this.children = [],
                this.id = ++e._id,
                this.extra = {},
                this.level = -1
            }
            return e._id = 0,
            e
        }(), v = function() {
            function e(e, t) {
                this.levels = t,
                this.tileSize = e,
                this.root = null,
                this.allNodes = [],
                g(this)
            }
            return e.prototype.getSizeForLevel = function(e, t) {
                return Math.pow(2, t) * e
            }
            ,
            e.prototype.getSubNode = function(e, t, r) {
                (!t || e < this.tileSize) && (t = 0),
                (!r || e < this.tileSize) && (r = 0),
                e < this.tileSize && (e = this.tileSize);
                var n = m(this.tileSize, e);
                return T(this.root, 0, n, t, r)
            }
            ,
            e.prototype.deleteAllNodes = function() {
                this.depthFirst(function(e, t, r, n, i) {
                    for (var o = 0; o < e.children.length; o++) {
                        var a = e.children[o];
                        a && (a.parent = null,
                        a.tree = null),
                        e.children[o] = null
                    }
                    e.children.length = 0
                }
                .bind(this), null, n.PostOrder);
                for (var e = 0; e < this.allNodes.length; e++) {
                    var t = this.allNodes[e];
                    t && (t.parent = null,
                    t.tree = null),
                    this.allNodes[e] = null
                }
                this.allNodes.length = 0,
                this.root = null
            }
            ,
            e.prototype.breadthFirst = function(e) {
                var t, r, n = !!(e = e || {}).nullLevelEnd, i = e.maxLevel, o = e.minLevel, a = e.callback, s = e.saveVisited, u = [], c = new y(this,null), l = 0;
                if (this.root)
                    for (u.push(this.root),
                    u.push(c); u.length > 0 && !(i && l > i); ) {
                        var p = u.shift();
                        if (p)
                            if (p === c)
                                (!o || l >= o) && (a && n && a(),
                                s && n && s.push(null)),
                                u.length > 0 && u.push(c),
                                l++,
                                0;
                            else {
                                if (p.children)
                                    try {
                                        for (var h = d(p.children), f = h.next(); !f.done; f = h.next()) {
                                            var v = f.value;
                                            v && u.push(v)
                                        }
                                    } catch (e) {
                                        t = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            f && !f.done && (r = h.return) && r.call(h)
                                        } finally {
                                            if (t)
                                                throw t.error
                                        }
                                    }
                                var m = this.getFaceIndexFromNode(p);
                                (!o || l >= o) && (a && a(p, l, m),
                                s && s.push(p)),
                                0
                            }
                    }
            }
            ,
            e.prototype.getFaceIndexFromNode = function(e) {
                if (!e)
                    return -1;
                for (var t = 1, r = e, n = 0, i = 0; ; ) {
                    var o = r.parent;
                    if (!o)
                        break;
                    for (var a = -1, s = 0; s < o.children.length; s++)
                        o.children[s] === r && (a = s);
                    n = a % 2 * t + n,
                    i = Math.floor(a / 2) * t + i,
                    t *= 2,
                    r = o
                }
                return i * t + n
            }
            ,
            e.prototype.depthFirst = function(e, t, r) {
                w(this.root, 0, 0, 0, e, t, r, this.tileSize)
            }
            ,
            e
        }(), m = function(e, t) {
            var r = 0;
            for (t < e && (t = e); !((t /= 2) < e); )
                r++;
            return r
        }, w = function(e, t, r, i, o, a, s, u) {
            if (e) {
                var c = 2 * i + r;
                if ((s = s || n.PreOrder) === n.PreOrder && (o && o(e, t, c, r, i),
                a && a.push(e)),
                e.children && 0 !== e.children.length) {
                    for (var l = 2 * i, p = 2 * r, h = 0; h < 2; h++)
                        for (var d = 0; d < 2; d++)
                            w(e.children[2 * d + h], t + 1, p + h, l + d, o, a, s, u);
                    s === n.PostOrder && (o && o(e, t, c, r, i),
                    a && a.push(e))
                }
            }
        }, g = function(e) {
            e.root = b(e, null, 0)
        }, b = function(e, t, r) {
            if (r > e.levels)
                return null;
            var n = new y(e,t);
            n.level = r,
            e.allNodes.push(n);
            for (var i = 0; i < 4; i++) {
                var o = b(e, n, r + 1);
                o && (n.children[i] = o)
            }
            return n
        }, T = function(e, t, r, n, i) {
            if (!e)
                return null;
            if (0 === r)
                return e;
            if (!e.children || 0 === e.children.length)
                return null;
            var o = Math.pow(2, r) / 2
              , a = n % o
              , s = i % o
              , u = 2 * Math.floor(i / o) + Math.floor(n / o)
              , c = e.children[u];
            return T(c, t + 1, r - 1, a, s)
        }, _ = r(286), S = r(7);
        !function(e) {
            e[e.Center = 0] = "Center",
            e[e.UpperLeft = 1] = "UpperLeft",
            e[e.UpperRight = 2] = "UpperRight",
            e[e.LowerRight = 3] = "LowerRight",
            e[e.LowerLeft = 4] = "LowerLeft"
        }(f || (f = {}));
        var D, R, x, P, E, O, A, M, U, C, I, z = f, k = (D = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            D(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), L = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return k(t, e),
            t
        }(p.a), j = {
            0: _.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Y,
            1: _.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Z,
            2: _.a.GL_TEXTURE_CUBE_MAP_POSITIVE_X,
            3: _.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,
            4: _.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_X,
            5: _.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y
        }, F = function(e) {
            if (e < 0 || e > 5)
                throw new L("mapFaceToCubemapFace() -> face must be in the range [0, 5]");
            return j[e]
        }, N = r(9), Q = function(e, t, r, n, i, o, a, s) {
            var u = e / t
              , c = 2 * (t / e)
              , l = c / 2
              , p = 2 * (n / u) - 1 + l
              , h = 2 * ((i = u - 1 - i) / u) - 1 + l;
            switch (o = o || z.Center) {
            case z.UpperLeft:
                p -= l,
                h += l,
                p += a * c;
                break;
            case z.UpperRight:
                p += l,
                h += l,
                h -= a * c;
                break;
            case z.LowerRight:
                p += l,
                h -= l,
                p -= a * c;
                break;
            case z.LowerLeft:
                p -= l,
                h -= l,
                h += a * c;
                break;
            case z.Center:
            }
            switch (r) {
            case _.a.GL_TEXTURE_CUBE_MAP_POSITIVE_X:
                s.set(-1, h, -p);
                break;
            case _.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_X:
                s.set(1, h, p);
                break;
            case _.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Y:
                s.set(-p, 1, -h);
                break;
            case _.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y:
                s.set(-p, -1, h);
                break;
            case _.a.GL_TEXTURE_CUBE_MAP_POSITIVE_Z:
                s.set(-p, h, 1);
                break;
            case _.a.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z:
                s.set(p, h, -1)
            }
            s.normalize()
        }, G = function(e, t) {
            var r = 512;
            e < 512 && (r = e);
            var n = Math.floor(e / r)
              , i = n * n;
            return Math.floor(t / i)
        }, B = function(e, t, r) {
            var n = 512;
            e < 512 && (n = e);
            var i = G(e, t)
              , o = Math.floor(e / n)
              , a = t - i * (o * o);
            r.tileX = a % o,
            r.tileY = Math.floor(a / o),
            r.face = i,
            r.faceTileIndex = a
        }, X = function(e) {
            if (e <= 512)
                return 6;
            var t = Math.floor(e / 512);
            return 6 * (t * t)
        }, H = (R = new S.a,
        x = new u.a,
        function(e, t) {
            x.copy(e),
            x.inverse(),
            R.makeRotationFromQuaternion(x),
            t.applyMatrix4(R),
            t.normalize()
        }
        ), V = (E = new s.a,
        O = new s.a(0,0,-1),
        A = new u.a,
        M = function(e, t) {
            e.push({
                face: t.face,
                faceTileIndex: t.faceTileIndex,
                tileX: t.tileX,
                tileY: t.tileY
            })
        }
        ,
        P = {
            face: -1,
            faceTileIndex: -1,
            tileX: -1,
            tileY: -1
        },
        U = function(e, t, r) {
            for (var n = X(e), i = 0, o = 0; o < n; o++)
                B(e, o, P),
                t && !t(P) || (i++,
                r && M(r, P));
            return i
        }
        ,
        function(e, t, r, n, i, o, a) {
            void 0 === i && (i = !1),
            n.length = i ? 0 : n.length;
            var s = t < 512 ? t : 512;
            if (!o && !a)
                return U(t, null, n);
            var c = !!a;
            o = o || 0,
            a = a || o,
            a = Math.max(0, Math.min(a, 360)),
            o = Math.max(0, Math.min(o, 360)),
            E.copy(r);
            var l = e.rotation || new u.a;
            return H(l, E),
            c ? (A.setFromUnitVectors(E, O),
            U(t, function(e) {
                return q(t, s, e.face, e.tileX, e.tileY, A, o || 0, a || 0)
            }, n)) : U(t, function(e) {
                return Z(t, s, e.face, e.tileX, e.tileY, E, o || 0)
            }, n)
        }
        ), q = (C = new s.a,
        function(e, t, r, n, i, o, a, s) {
            for (var u = Math.tan(.5 * s * N.a), c = -u, l = Math.tan(.5 * a * N.a), p = -l, h = F(r), d = 0, f = 0, y = 0, v = 0, m = 0, w = z.Center; w <= z.LowerLeft; w++)
                if (Q(e, t, h, n, i, w, 0, C),
                C.applyQuaternion(o),
                C.z >= -1e-5)
                    ;
                else {
                    var g = -1 / C.z
                      , b = C.x * g
                      , T = C.y * g;
                    T > u ? d++ : T < c && f++,
                    b > l ? y++ : b < p && v++,
                    m++
                }
            return f !== m && d !== m && y !== m && v !== m
        }
        ), Z = function() {
            var e = new s.a
              , t = new s.a(0,1,0)
              , r = new s.a(1,0,0);
            return function(n, i, o, a, s, u, c) {
                var l = F(o);
                if (r.copy(u).cross(t),
                Q(n, i, l, a, s, z.Center, 0, e),
                W(e, u, c))
                    return !0;
                for (var p = c / 360, h = Math.floor(1 / p), d = 0, f = 0; f < h; f++) {
                    for (var y = z.UpperLeft; y <= z.LowerLeft; y++)
                        if (Q(n, i, l, a, s, y, d, e),
                        W(e, u, c))
                            return !0;
                    d += p
                }
                return !1
            }
        }(), W = function() {
            var e = new s.a
              , t = new s.a;
            return function(r, n, i, o) {
                if (t.copy(r),
                o) {
                    e.copy(o),
                    e.normalize();
                    var a = e.dot(r);
                    e.x *= a,
                    e.y *= a,
                    e.z *= a,
                    t.sub(e)
                }
                var s = i / 2 * N.a
                  , u = Math.cos(s);
                return t.dot(n) >= u
            }
        }(), Y = r(334), K = r(219), J = function() {
            function e(e, t, r) {
                this.maxCubemapSize = e,
                this.overrideNavPanoSize = t,
                this.overrideZoomPanoSize = r,
                this.navPanoSize = -1,
                this.zoomPanoSize = -1,
                this.windowWidth = 0,
                this.windowHeight = 0,
                this.modelHasUltraHighPanos = !1,
                this.highQualityThreshold = o.windowHeightHighQualityThresholdOverride || o.windowHeightHighQualityThreshold,
                this.updateResolutionSettings()
            }
            return e.prototype.setModel = function(e) {
                this.updateResolutionSettings(e)
            }
            ,
            e.prototype.setWindowSize = function(e, t) {
                this.windowWidth = e,
                this.windowHeight = t,
                this.updateResolutionSettings()
            }
            ,
            e.prototype.updateResolutionSettings = function(e) {
                this.updateMaximums()
            }
            ,
            e.prototype.enableUltraHighQualityMode = function() {
                this.modelHasUltraHighPanos = !0,
                this.updateResolutionSettings()
            }
            ,
            e.prototype.ultraHighQualityModeEnabled = function() {
                return this.modelHasUltraHighPanos
            }
            ,
            e.prototype.updateMaximums = function() {
                this.navPanoSize = this.overrideNavPanoSize || this.detectNavPanoSize(),
                this.zoomPanoSize = this.overrideZoomPanoSize || this.detectZoomPanoSize(),
                this.zoomPanoSize < this.navPanoSize && (this.navPanoSize = this.zoomPanoSize),
                this.zoomPanoSize = Math.min(this.maxCubemapSize, this.zoomPanoSize),
                this.navPanoSize = Math.min(this.maxCubemapSize, this.navPanoSize)
            }
            ,
            e.getPanoSize = function(e) {
                switch (e) {
                case K.a.BASE:
                    return 512;
                case K.a.STANDARD:
                    return 1024;
                case K.a.HIGH:
                    return 2048;
                case K.a.ULTRAHIGH:
                    return 4096
                }
            }
            ,
            e.prototype.getMaxPossiblePanoSize = function() {
                return e.getPanoSize(K.a.ULTRAHIGH)
            }
            ,
            e.prototype.getNavPanoSize = function() {
                return this.navPanoSize
            }
            ,
            e.prototype.getZoomPanoSize = function() {
                return this.zoomPanoSize
            }
            ,
            e.prototype.detectNavPanoSize = function() {
                return i.j() || this.windowHeight < this.highQualityThreshold ? e.getPanoSize(K.a.STANDARD) : e.getPanoSize(K.a.HIGH)
            }
            ,
            e.prototype.detectZoomPanoSize = function() {
                return i.j() ? o.mobileHighQualityOverride ? e.getPanoSize(K.a.HIGH) : e.getPanoSize(K.a.STANDARD) : this.modelHasUltraHighPanos ? e.getPanoSize(K.a.ULTRAHIGH) : e.getPanoSize(K.a.HIGH)
            }
            ,
            e
        }(), $ = function() {
            function e(e) {
                this._value = e
            }
            return e.prototype.value = function() {
                return this._value
            }
            ,
            e.prototype.set = function(e) {
                this._value = e
            }
            ,
            e
        }(), ee = function() {
            function e() {
                this.storage = {}
            }
            return e.prototype.get = function(e, t) {
                var r = this.storage[e];
                return r || (r = t(),
                this.storage[e] = r),
                r
            }
            ,
            e.prototype.getNumber = function(e) {
                return this.get(e, function() {
                    return new $(0)
                })
            }
            ,
            e.prototype.getString = function(e) {
                return this.get(e, function() {
                    return new $("")
                })
            }
            ,
            e.prototype.getArray = function(e) {
                return this.get(e, function() {
                    return []
                })
            }
            ,
            e.prototype.getNumberMap = function(e) {
                return this.get(e, function() {
                    return {}
                })
            }
            ,
            e.prototype.getStringMap = function(e) {
                return this.get(e, function() {
                    return {}
                })
            }
            ,
            e
        }();
        !function(e) {
            e[e.None = 0] = "None",
            e[e.Queued = 1] = "Queued",
            e[e.ForceQueued = 2] = "ForceQueued",
            e[e.Downloading = 3] = "Downloading",
            e[e.Downloaded = 4] = "Downloaded",
            e[e.DownloadFailed = 5] = "DownloadFailed"
        }(I || (I = {}));
        var te, re = I, ne = r(46), ie = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        };
        !function(e) {
            e[e.None = 0] = "None",
            e[e.DirectionalFOV = 1] = "DirectionalFOV"
        }(te || (te = {}));
        var oe, ae = function() {
            return function(e, t, r, n, i) {
                this.sweep = e,
                this.cameraPosition = (new s.a).copy(t),
                this.cameraDir = (new s.a).copy(r),
                this.panoSpaceDir = (new s.a).copy(n),
                this.upcomingSweeps = i,
                this.zoomingActive = !1
            }
        }(), se = function(e, t) {
            if (e && t)
                try {
                    for (var r = ie(t), n = r.next(); !n.done; n = r.next()) {
                        var i = n.value;
                        e.push(i)
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
            var o, a
        }, ue = function() {
            function e(e) {
                this.persistentStorage = new ee,
                this.panoQualityManager = e,
                this.basePanoSize = J.getPanoSize(K.a.BASE),
                this.standardPanoSize = J.getPanoSize(K.a.STANDARD),
                this.highPanoSize = J.getPanoSize(K.a.HIGH),
                this.ultraHighPanoSize = J.getPanoSize(K.a.ULTRAHIGH),
                this.priorityCriteria = new ae(null,new s.a(0,0,0),new s.a(0,0,-1),new s.a(0,0,-1)),
                this.zoomingActive = !1
            }
            return e.prototype.updateCriteria = function(e, t, r, n) {
                this.priorityCriteria.sweep = e,
                this.priorityCriteria.cameraPosition.copy(t),
                this.priorityCriteria.cameraDir.copy(r)
            }
            ,
            e.prototype.setUpcomingSweeps = function(e) {
                this.priorityCriteria.upcomingSweeps = e
            }
            ,
            e.prototype.clearUpcomingSweeps = function() {
                this.priorityCriteria.upcomingSweeps = void 0
            }
            ,
            e.prototype.filterAndPrioritize = function(t, r, n) {
                if (this.priorityCriteria.sweep) {
                    var i = void 0 !== this.priorityCriteria.upcomingSweeps && null !== this.priorityCriteria.upcomingSweeps
                      , o = this.persistentStorage.getArray("filterAndPrioritize:neighbors")
                      , a = this.persistentStorage.getArray("filterAndPrioritize:scoredSweeps")
                      , s = this.persistentStorage.getArray("filterAndPrioritize:tempQueue");
                    this.populateNeighborSweeps(this.priorityCriteria.sweep, r, o),
                    this.populateScoredSweeps(this.priorityCriteria.sweep, r, a, this.priorityCriteria.cameraDir, 6);
                    var u, c, l = this.basePanoSize, p = this.standardPanoSize, h = this.highPanoSize, d = this.ultraHighPanoSize;
                    if (this.queueTilesForPano(t, n, this.priorityCriteria.sweep, l),
                    this.priorityCriteria.upcomingSweeps) {
                        var f = 0;
                        try {
                            for (var y = ie(this.priorityCriteria.upcomingSweeps), v = y.next(); !v.done; v = y.next()) {
                                var m = v.value;
                                if ((f += this.queueTilesForPano(t, n, m, l)) >= 3)
                                    break
                            }
                        } catch (e) {
                            u = {
                                error: e
                            }
                        } finally {
                            try {
                                v && !v.done && (c = y.return) && c.call(y)
                            } finally {
                                if (u)
                                    throw u.error
                            }
                        }
                    }
                    s.length = 0,
                    this.canDownloadSize(p) && this.queueTilesInDirectionForPano(s, n, this.priorityCriteria.sweep, p, this.priorityCriteria.cameraPosition, this.priorityCriteria.cameraDir, 120),
                    e.sortTiles(s, this.priorityCriteria.sweep, this.priorityCriteria.cameraDir),
                    se(t, s),
                    i || this.queueTilesForPanos(t, a, n, l, 2),
                    s.length = 0,
                    this.canDownloadSize(h) && this.queueTilesInDirectionForPano(s, n, this.priorityCriteria.sweep, h, this.priorityCriteria.cameraPosition, this.priorityCriteria.cameraDir, 120),
                    this.canDownloadSize(d) && this.queueTilesInDirectionForPano(s, n, this.priorityCriteria.sweep, d, this.priorityCriteria.cameraPosition, this.priorityCriteria.cameraDir, 120),
                    e.sortTiles(s, this.priorityCriteria.sweep, this.priorityCriteria.cameraDir),
                    se(t, s),
                    s.length = 0,
                    this.canDownloadSize(p) && this.queueTilesInDirectionForPano(s, n, this.priorityCriteria.sweep, p, this.priorityCriteria.cameraPosition, this.priorityCriteria.cameraDir, 180),
                    this.canDownloadSize(h) && this.queueTilesInDirectionForPano(s, n, this.priorityCriteria.sweep, h, this.priorityCriteria.cameraPosition, this.priorityCriteria.cameraDir, 180),
                    this.canDownloadSize(d) && this.queueTilesInDirectionForPano(s, n, this.priorityCriteria.sweep, d, this.priorityCriteria.cameraPosition, this.priorityCriteria.cameraDir, 180),
                    e.sortTiles(s, this.priorityCriteria.sweep, this.priorityCriteria.cameraDir),
                    se(t, s),
                    i || this.queueTilesForPanos(t, o, n, l)
                }
            }
            ,
            e.prototype.canDownloadSize = function(e) {
                return this.panoQualityManager.getNavPanoSize() >= e || this.zoomingActive && this.panoQualityManager.getZoomPanoSize() >= e
            }
            ,
            e.prototype.populateNeighborSweeps = function(e, t, r) {
                for (var n in (r = r || []).length = 0,
                e.neighbours) {
                    var i = e.neighbours[n]
                      , o = t.getMappedElement(i);
                    r.push(o)
                }
            }
            ,
            e.prototype.populateScoredSweeps = function(e, t, r, n, i) {
                var o = this.persistentStorage.getArray("populateScoredSweeps:sweepListCopy");
                (r = r || []).length = 0;
                var a = [pe.inPanoDirection(e.position, n, .75), pe.not(e)]
                  , s = [he.distanceSquared(e), he.direction(e.position, n)];
                o.length = 0,
                t.copyToList(o);
                var u = de(a, s, o);
                if (u)
                    for (var c = 0; c < u.length && c < i; c++) {
                        var l = u[c].sweep;
                        r.push(l)
                    }
            }
            ,
            e.prototype.queueTilesForPanos = function(e, t, r, n, i) {
                var o, a, s = 0;
                try {
                    for (var u = ie(t), c = u.next(); !c.done; c = u.next()) {
                        var l = c.value;
                        if (s += this.queueTilesForPano(e, r, l, n) > 0 ? 1 : 0,
                        i && s >= i)
                            break
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (a = u.return) && a.call(u)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return s
            }
            ,
            e.prototype.queueTilesForPano = function(e, t, r, n) {
                var i = this.persistentStorage.get("queueTilesForSweep:filterCriteria", function() {
                    return {
                        filter: te.None
                    }
                });
                return this.filterAndQueueTileDownloadDescriptors(e, t, r, n, i)
            }
            ,
            e.prototype.queueTilesInDirectionForPano = function(e, t, r, n, i, o, a) {
                var u = this.persistentStorage.get("queueTilesInDirectionForSweep:panoSpaceDir", function() {
                    return new s.a
                })
                  , c = this.persistentStorage.get("queueTilesInDirectionForSweep:filterCriteria", function() {
                    return {
                        filter: te.DirectionalFOV,
                        direction: new s.a,
                        fov: 60
                    }
                });
                return u.copy(o),
                H(r.rotation, u),
                c.direction.copy(u),
                c.fov = a,
                this.filterAndQueueTileDownloadDescriptors(e, t, r, n, c)
            }
            ,
            e.prototype.filterAndQueueTileDownloadDescriptors = function(e, t, r, n, i) {
                var o = this.persistentStorage.getArray("filterAndQueueTileDownloadDescriptors:descriptors")
                  , a = t.getTileDownloadDescriptors(r, n);
                o.length = 0,
                this.filterTileDownloadDescriptors(r, a, o, i);
                var s, u, c = 0;
                try {
                    for (var l = ie(o), p = l.next(); !p.done; p = l.next()) {
                        var h = p.value;
                        h && (e.push(h),
                        c++)
                    }
                } catch (e) {
                    s = {
                        error: e
                    }
                } finally {
                    try {
                        p && !p.done && (u = l.return) && u.call(l)
                    } finally {
                        if (s)
                            throw s.error
                    }
                }
                return c
            }
            ,
            e.prototype.filterTileDownloadDescriptors = function(e, t, r, n) {
                var i, o;
                switch (n.filter) {
                case te.DirectionalFOV:
                    for (i = 0; i < t.length; i++)
                        (o = t[i]) && Z(o.panoSize, o.tileSize, o.face, o.tileX, o.tileY, n.direction, n.fov) && r.push(o);
                    break;
                default:
                    for (i = 0; i < t.length; i++)
                        o = t[i],
                        r.push(o)
                }
                for (i = 0; i < r.length; i++)
                    (o = r[i]) && !this.canIncludeDescriptor(o) && (r[i] = null)
            }
            ,
            e.prototype.canIncludeDescriptor = function(e) {
                return e.status !== re.Downloading && e.status !== re.Downloaded
            }
            ,
            e.prototype.setZoomingActive = function(e) {
                e !== this.zoomingActive && (this.zoomingActive = e)
            }
            ,
            e.sortTiles = function(e, t, r) {
                ce.panoSpaceDir.copy(r),
                H(t.rotation, ce.panoSpaceDir),
                ce.fovThresholdNarrow = N.l(120),
                ce.fovThreshold = N.l(180),
                e.sort(le)
            }
            ,
            e.insertSortedPanoTile = function(e, t, r, n) {
                ce.panoSpaceDir.copy(n),
                H(r.rotation, ce.panoSpaceDir),
                ce.fovThresholdNarrow = N.l(120),
                ce.fovThreshold = N.l(180);
                for (var i = -1, o = 0; o < e.length; o++) {
                    if (le(t, e[o]) <= 0) {
                        i = o;
                        break
                    }
                }
                if (-1 === i)
                    e[e.length] = t;
                else {
                    for (var a = e.length; a > i; a--)
                        e[a] = e[a - 1];
                    e[i] = t
                }
            }
            ,
            e
        }(), ce = {
            panoSpaceDir: new s.a,
            fovThreshold: -1,
            fovThresholdNarrow: -1
        }, le = function(e, t) {
            var r = ce.panoSpaceDir
              , n = ce.fovThreshold
              , i = ce.fovThresholdNarrow
              , o = Math.max(Math.min(r.dot(e.direction), 1), -1)
              , a = Math.max(Math.min(r.dot(t.direction), 1), -1);
            return o >= n && a < n ? -1 : o < n && a >= n ? 1 : o >= i && a < i ? -1 : o < i && a >= i ? 1 : e.panoSize > t.panoSize ? 1 : t.panoSize > e.panoSize ? -1 : -(o - a)
        }, pe = {
            inPanoDirection: function(e, t, r) {
                return r = o.navigation.panoScores ? o.navigation.filterStrictness : r,
                function(n) {
                    var i = n.floorPosition.clone().sub(e).normalize()
                      , o = n.position.clone().sub(e).normalize();
                    return i.dot(t) > r || o.dot(t) > r
                }
            },
            not: function(e) {
                return function(t) {
                    return t !== e
                }
            }
        }, he = {
            distance: function(e, t) {
                return t = t || o.navigation.distanceFactor,
                function(r) {
                    return e ? e.position.distanceTo(r.position) * t : 0
                }
            },
            distanceSquared: function(e, t) {
                return t = t || o.navigation.distanceFactor,
                function(r) {
                    return e ? e.position.distanceToSquared(r.position) * t : 0
                }
            },
            direction: function(e, t) {
                return function(r) {
                    return r.position.clone().sub(e).normalize().dot(t) * o.navigation.directionFactor
                }
            }
        }, de = function(e, t, r) {
            var n, i, o = [];
            try {
                for (var a = ie(r), s = a.next(); !s.done; s = a.next()) {
                    var u = s.value;
                    ne.f(u, e) && o.push(u)
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    s && !s.done && (i = a.return) && i.call(a)
                } finally {
                    if (n)
                        throw n.error
                }
            }
            return 0 === o.length ? null : o.map(function(e) {
                return {
                    sweep: e,
                    score: t.reduce(function(t, r) {
                        return t + r(e)
                    }, 0)
                }
            }).sort(function(e, t) {
                return t.score - e.score
            })
        }, fe = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        };
        !function(e) {
            e[e.Base = 0] = "Base",
            e[e.Remaining = 1] = "Remaining"
        }(oe || (oe = {}));
        var ye, ve = function() {
            function e() {
                this.forceQueue = [],
                this.uploadQueues = {},
                this.panoLODDescriptors = {}
            }
            return e.prototype.addToForceQueue = function(e) {
                this.forceQueue.push(e)
            }
            ,
            e.prototype.addToPanoQueue = function(e, t) {
                this.getUploadQueueForPano(e).push(t)
            }
            ,
            e.prototype.insertSortedIntoPanoQueue = function(e, t, r) {
                var n = this.getUploadQueueForPano(t.id);
                ue.insertSortedPanoTile(n, e, t, r)
            }
            ,
            e.prototype.sortQueue = function(e, t) {
                var r = this.getUploadQueueForPano(e.id);
                ue.sortTiles(r, e, t)
            }
            ,
            e.prototype.getUploadQueueForPano = function(e) {
                var t = this.uploadQueues[e];
                return t || (t = [],
                this.uploadQueues[e] = t),
                t
            }
            ,
            e.prototype.hasQueuedTiles = function() {
                if (this.forceQueue.length > 0)
                    return !0;
                for (var e in this.uploadQueues) {
                    var t = this.getUploadQueueForSweep(e);
                    if (t && t.length > 0)
                        return !0
                }
                return !1
            }
            ,
            e.prototype.getUploadQueueForSweep = function(e) {
                var t = this.uploadQueues[e];
                return t || (t = [],
                this.uploadQueues[e] = t),
                t
            }
            ,
            e.prototype.getTopUploadQueue = function(e) {
                for (var t, r, n = null, i = oe.Base; i <= oe.Remaining; i++)
                    try {
                        for (var o = fe(e), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            if ((n = this.getUploadQueueForSweep(s.id)).length > 0)
                                switch (i) {
                                case oe.Base:
                                    if (0 === n[0].level)
                                        return n;
                                    break;
                                case oe.Remaining:
                                    return n
                                }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                return null
            }
            ,
            e.prototype.processNextQueueItem = function(e) {
                var t = e.shift();
                return t ? (t.uploadQueued = !1,
                t) : null
            }
            ,
            e.prototype.getNextFromUploadQueue = function(e) {
                if (this.forceQueue.length > 0)
                    return this.processNextQueueItem(this.forceQueue);
                var t = this.getTopUploadQueue(e);
                return t && t.length > 0 ? this.processNextQueueItem(t) : null
            }
            ,
            e.prototype.peekNextFromUploadQueue = function(e) {
                if (this.forceQueue.length > 0)
                    return this.forceQueue[0];
                var t = this.getTopUploadQueue(e);
                return t && t.length > 0 ? t[0] : null
            }
            ,
            e.prototype.clearAllQueuedUploads = function() {
                this.clearAllUploadQueues(null, 0)
            }
            ,
            e.prototype.clearAllUploadQueues = function(e, t) {
                if (void 0 === t && (t = 0),
                e)
                    this.clearUploadQueue(this.getUploadQueueForSweep(e), t),
                    this.clearUploadQueue(this.forceQueue, t, e);
                else {
                    for (var r in this.uploadQueues)
                        this.clearUploadQueue(this.getUploadQueueForSweep(r), t);
                    this.clearUploadQueue(this.forceQueue, t)
                }
            }
            ,
            e.prototype.clearUploadQueue = function(e, t, r) {
                void 0 === t && (t = 0);
                for (var n = 0; n < e.length; ) {
                    var i = e[n];
                    (!r || r && r === i.sweepId) && i.level >= t ? (i.uploadQueued = !1,
                    e.splice(n, 1)) : n++
                }
            }
            ,
            e.prototype.resetPanoLODDescriptors = function(e) {
                var t = this.getPanoLODDescriptors(e);
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var n = t[r];
                        n.uploadCount = 0,
                        n.uploadAttempts = 0
                    }
            }
            ,
            e.prototype.getPanoLODDescriptor = function(e, t) {
                var r = this.getPanoLODDescriptors(e)
                  , n = r[t];
                return n || (n = {
                    uploadCount: 0,
                    uploadAttempts: 0
                },
                r[t] = n),
                n
            }
            ,
            e.prototype.getPanoLODDescriptors = function(e) {
                var t = this.panoLODDescriptors[e];
                return t || (t = {},
                this.panoLODDescriptors[e] = t),
                t
            }
            ,
            e
        }(), me = r(283), we = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }(), ge = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }, be = o.uploadIntervalDelay, Te = o.maxNonBaseUploadsPerFrame, _e = o.maxBaseUploadsPerFrame, Se = function(e) {
            function t(t, r, n, i, o, a) {
                var c = e.call(this) || this;
                return c.cwfRenderer = t,
                c.panoQualityManager = r,
                c.tileDownloader = n,
                c.sweepData = i,
                c.cameraData = o,
                c.broadcast = a,
                c.persistentStorage = new ee,
                c.activeSweeps = [],
                c.sweepLoadHistory = [],
                c.activeRenderTargetDescriptors = {},
                c.panoLoadPromises = {},
                c.panoLoadResolvers = {},
                c.tileTrees = {},
                c.tileDirectory = {},
                c.zoomSweepRenderingDisabled = !1,
                c.zoomingActive = !1,
                c.zoomSweepId = null,
                c.usingTileOverlay = !1,
                c.overlayTilesLoaded = !1,
                c.overlayTileBase = null,
                c.overlayTilesBasic = {},
                c.overlayTilesEnhanced = {},
                c.tileUploadQueue = new ve,
                c.currentState = {
                    direction: new s.a,
                    position: new s.a,
                    rotation: new u.a
                },
                c.renderTargetPool = new l.a(c.rtInit,c.rtCompare),
                c.tileDownloader.setLoadCallbacks(c.onTileDownLoaded.bind(c)),
                c.maxBaseUploadsPerFrame = _e,
                c.maxNonBaseUploadsPerFrame = Te,
                c
            }
            return we(t, e),
            t.prototype.rtCompare = function(e, t) {
                return e.object.height === t.size && e.object.width === t.size
            }
            ,
            t.prototype.rtInit = function() {}
            ,
            t.prototype.setModel = function(t, r) {
                e.prototype.setModel.call(this, t, r),
                this.tileDownloader && this.tileDownloader.setModel(t, this.sweepListMap)
            }
            ,
            t.prototype.getActivePanos = function() {
                var e, t, r = [];
                try {
                    for (var n = ge(Object.keys(this.activeRenderTargetDescriptors)), i = n.next(); !i.done; i = n.next()) {
                        var o = i.value;
                        this.activeRenderTargetDescriptors[o] && r.push(o)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return r
            }
            ,
            t.prototype.init = function() {
                e.prototype.init.call(this),
                this.loadOverlayTiles()
            }
            ,
            t.prototype.setZoomingActive = function(e, t) {
                if (e) {
                    if (!t)
                        throw new Error("Cannot activate zooming without sweepId!");
                    this.zoomingActive = !0,
                    this.zoomSweepId = t,
                    this.copyTargetToZoom(t)
                } else
                    this.zoomingActive = !1,
                    this.zoomSweepId = null;
                if (t) {
                    var r = this.getRenderTargetDescriptorForSweep(t);
                    if (!r)
                        throw new Error("Zooming at a null render target!");
                    var n = this.zoomingActive ? this.zoomRenderTarget : r.object
                      , i = n.width;
                    this.broadcast(new me.a(i,t,n))
                }
            }
            ,
            t.prototype.beforeRender = function() {
                var e = this.sweepData.currentSweep
                  , t = this.sweepData.transition.to;
                this.updateState(this.cameraData.pose.position, this.cameraData.pose.rotation, e, t),
                this.updateUploadQueueProcessing()
            }
            ,
            t.prototype.activateSweep = function(t) {
                var r = this
                  , n = this.sweepListMap.get(t);
                if (!n)
                    throw new Error("Invalid sweepId passed to TiledPanORenderer.activate(): " + t);
                var i = this.panoLoadPromises[t];
                return i || (i = new Promise(function(e, i) {
                    r.panoLoadResolvers[t] = e,
                    r.updateSweepState(t),
                    r.activatePano(n),
                    r.queueUploadForAllTiles(t, !0),
                    r.tileDownloader.forceQueueTiles(n, J.getPanoSize(K.a.BASE), r.currentState.direction, !0)
                }
                ),
                this.panoLoadPromises[t] = i),
                e.prototype.activateSweep.call(this, t),
                i
            }
            ,
            t.prototype.useTexture = function(t) {
                var r = this.getRenderTargetDescriptorForSweep(t);
                if (!r)
                    throw Error("Texture for sweep " + t + " not loaded before using");
                var n = r.object.texture;
                return e.prototype.useTexture.call(this, t),
                this.zoomingActive ? this.zoomRenderTarget.texture : n
            }
            ,
            t.prototype.freeTexture = function(t, r) {
                void 0 === r && (r = !1),
                e.prototype.freeTexture.call(this, t, r),
                0 === this.textureUsageCounter[t] && (this.panoLoadPromises[t] = null,
                this.deactivatePano(t))
            }
            ,
            t.prototype.freeAllTextures = function(e) {
                void 0 === e && (e = []);
                var t, r, n = Object(ne.b)(e), i = this.getActivePanos();
                try {
                    for (var o = ge(i), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        n[s] || this.freeTexture(s, !0)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            }
            ,
            t.prototype.enableUltraHighQualityMode = function(e) {
                var t = this;
                if (!this.panoQualityManager.ultraHighQualityModeEnabled()) {
                    var r = J.getPanoSize(K.a.ULTRAHIGH);
                    this.tileDownloader.testDownload(r, 512, function(r) {
                        r && (t.panoQualityManager.enableUltraHighQualityMode(),
                        t.setupZoomRenderTarget(),
                        t.zoomSweepId && t.broadcast(new me.a(t.zoomRenderTarget.width,t.zoomSweepId,t.zoomRenderTarget)),
                        e())
                    })
                }
            }
            ,
            t.prototype.resetRenderStatus = function(e, t, r, n) {
                var i;
                n && (i = m(512, n) + 1);
                for (var o = function(e, n, i, o) {
                    r && (n.extra.tile.zoomUploaded = !1),
                    t && (n.extra.tile.uploaded = !1)
                }, a = 0; a < 6; a++) {
                    this.getTileTree(e, a).breadthFirst({
                        callback: o.bind(this, a),
                        minLevel: i
                    })
                }
            }
            ,
            t.prototype.copyBaseRenderStatusToZoomed = function(e) {
                for (var t = m(512, this.panoQualityManager.getNavPanoSize()), r = function(e, t, r, n) {
                    t.extra.tile.zoomUploaded = t.extra.tile.uploaded,
                    t.extra.zoomCovered = t.extra.covered
                }, n = 0; n < 6; n++) {
                    this.getTileTree(e, n).breadthFirst({
                        callback: r.bind(this, n),
                        maxLevel: t
                    })
                }
            }
            ,
            t.prototype.renderPanoTiles = function(e, t, r, n) {
                var i = [];
                this.zoomRenderTarget && this.zoomRenderTarget.width === this.panoQualityManager.getZoomPanoSize() || this.zoomSweepRenderingDisabled || this.setupZoomRenderTarget(),
                t = t || this.currentState.direction || h.a.FORWARD;
                var o = this.getRenderTargetDescriptorForSweep(e);
                if (!this.isRenderTargetDescriptorValid(o))
                    throw new p.a("PanoRenderer.renderPanoTiles() -> Cannot render to a pano that is not activated.");
                for (var a = 0; a < 6; a++) {
                    var s = this.getTileTree(e, a);
                    i.length = 0,
                    s.breadthFirst({
                        saveVisited: i
                    });
                    for (var u = 0; u < i.length; u++) {
                        var c = i[u];
                        this.queueUploadForTile(c.extra.tile, !1, n || 0 === u && r)
                    }
                }
            }
            ,
            t.prototype.clearAllQueuedUploads = function() {
                this.tileUploadQueue.clearAllUploadQueues(null, 0)
            }
            ,
            t.prototype.clearAllQueuedUploadsForPano = function(e) {
                this.tileUploadQueue.clearAllUploadQueues(e, 0)
            }
            ,
            t.prototype.updateState = function(e, t, r, n) {
                var i = n || r || this.currentState.sweepId
                  , o = i ? this.sweepListMap.get(i) : null;
                this.updatePositionState(e),
                this.updateRotationState(t),
                i && this.updateSweepState(i),
                o && this.tileDownloader.tilePrioritizer && this.tileDownloader.tilePrioritizer.updateCriteria(o, e, this.currentState.direction)
            }
            ,
            t.prototype.updatePositionState = function(e) {
                this.currentState.position.copy(e)
            }
            ,
            t.prototype.updateRotationState = function(e) {
                if (this.currentState.rotation.copy(e),
                this.currentState.direction.copy(h.a.FORWARD).applyQuaternion(e),
                this.tileUploadQueue.hasQueuedTiles())
                    try {
                        for (var t = ge(this.activeSweeps), r = t.next(); !r.done; r = t.next()) {
                            var n = r.value;
                            this.tileUploadQueue.sortQueue(n, this.currentState.direction)
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (o = t.return) && o.call(t)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                var i, o
            }
            ,
            t.prototype.updateSweepState = function(e) {
                this.currentState.sweepId = e
            }
            ,
            t.prototype.activatePano = function(e, t) {
                void 0 === t && (t = !0),
                t && this.tileUploadQueue.clearAllQueuedUploads();
                for (var r = this.panoQualityManager.getMaxPossiblePanoSize(), n = 0; n < 6; n++)
                    this.initTileTree(e.id, n, r);
                this.linkAllTilesAndNodes(e);
                var i = this.getRenderTargetDescriptorForSweep(e.id);
                if (!i) {
                    var o = this.panoQualityManager.getNavPanoSize();
                    if (!(i = this.renderTargetPool.claimExistingObject({
                        size: o
                    }))) {
                        var a = this.cwfRenderer.initRenderTargetCube(o, !1);
                        (i = this.renderTargetPool.getNewObject(a)).extra = {},
                        i.extra.size = a.width
                    }
                    i.extra.sweep = e,
                    this.setRenderTargetDescriptorForSweep(e.id, i),
                    this.tileUploadQueue.resetPanoLODDescriptors(e.id),
                    this.resetUploadState(e.id, !0, !0)
                }
                return this.updateActiveSweeps(e, t),
                i.object
            }
            ,
            t.prototype.deactivatePano = function(e) {
                var t = this.getRenderTargetDescriptorForSweep(e);
                t && this.isRenderTargetDescriptorValid(t) && (this.renderTargetPool.freeObject(t.object),
                this.setRenderTargetDescriptorForSweep(e, null),
                this.updateActiveSweeps(),
                this.tileUploadQueue.clearAllUploadQueues(e),
                this.tileUploadQueue.resetPanoLODDescriptors(e),
                this.clearCachedTileData())
            }
            ,
            t.prototype.clearCachedTileData = function() {
                for (var e = this.sweepLoadHistory.length - 1; e >= 0; e--) {
                    var t = !1
                      , r = this.sweepLoadHistory[e];
                    if (r) {
                        try {
                            for (var n = ge(this.activeSweeps), i = n.next(); !i.done; i = n.next()) {
                                if (r === i.value.id) {
                                    t = !0;
                                    break
                                }
                            }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (a = n.return) && a.call(n)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                        !t && this.checkTileTreeInitialized(r) && (this.clearTileState(r, !0, !0),
                        this.deleteTileTrees(r),
                        this.deleteTileDirectoryEntries(r),
                        this.tileDownloader.deleteAllTileDownloadDescriptors(r),
                        this.sweepLoadHistory[e] = null)
                    }
                }
                var o, a;
                this.updateSweepLoadHistory()
            }
            ,
            t.prototype.updateActiveSweeps = function(e, t) {
                void 0 === t && (t = !0);
                var r, n, i = this.persistentStorage.getArray("updateActiveSweeps:tempSweeps");
                i.length = 0;
                try {
                    for (var o = ge(this.activeSweeps), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value
                          , u = this.getRenderTargetDescriptorForSweep(s.id);
                        e && s.id === e.id || !this.isRenderTargetDescriptorValid(u) || i.push(s)
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                e && (t ? i.unshift(e) : i.push(e)),
                this.activeSweeps.length = 0,
                this.activeSweeps.push.apply(this.activeSweeps, i)
            }
            ,
            t.prototype.queueUploadForAllTiles = function(e, t, r) {
                void 0 === t && (t = !0),
                void 0 === r && (r = !1),
                this.zoomRenderTarget && this.zoomRenderTarget.width === this.panoQualityManager.getZoomPanoSize() || this.zoomSweepRenderingDisabled || this.setupZoomRenderTarget();
                var n = this.getRenderTargetDescriptorForSweep(e);
                if (!this.isRenderTargetDescriptorValid(n))
                    throw new p.a("queueUploadForAllTiles() -> Cannot render to a pano that is not activated.");
                for (var i, o, a = this.persistentStorage.getArray("queueUploadForAllTiles:nodeList"), s = 0; s < 6; s++) {
                    var u = this.getTileTree(e, s);
                    a.length = 0,
                    u.breadthFirst({
                        saveVisited: a
                    });
                    try {
                        for (var c = ge(a), l = c.next(); !l.done; l = c.next()) {
                            var h = l.value;
                            this.queueUploadForTile(h.extra.tile, !1, r || 0 === h.level && t)
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (o = c.return) && o.call(c)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                }
            }
            ,
            t.prototype.onTileDownLoaded = function(e) {
                if (e.sweep) {
                    var t = m(512, e.panoSize)
                      , r = this.getTileDirectoryEntry(e.sweep.id, e.face, t, e.faceTileIndex);
                    this.updateUploadDescriptorFromDownloadDescriptor(r, e),
                    this.updateSweepLoadHistory(r.sweepId);
                    var n = this.getRenderTargetDescriptorForSweep(r.sweepId);
                    if (this.isRenderTargetDescriptorValid(n)) {
                        var i = this.getTileTree(r.sweepId, r.face).getSubNode(r.panoSize, r.tileX, r.tileY);
                        i && (this.linkTileAndNode(r, i),
                        this.queueUploadForTile(r, !0))
                    }
                }
            }
            ,
            t.prototype.updateUploadDescriptorFromDownloadDescriptor = function(e, t) {
                e.downloaded = !0,
                e.image = t.image,
                e.panoSize = t.panoSize,
                e.tileX = t.tileX,
                e.tileY = t.tileY,
                e.totalTiles = t.totalTiles,
                e.tileIndex = t.tileIndex,
                e.faceTileIndex = t.faceTileIndex,
                e.face = t.face,
                e.cubeFace = F(t.face),
                t.sweep && (e.sweepId = t.sweep.id),
                e.tileSize = t.tileSize,
                e.direction = (new s.a).copy(t.direction),
                e.node = null,
                e.level = m(512, e.panoSize)
            }
            ,
            t.prototype.updateSweepLoadHistory = function(e) {
                var t, r, n = this.persistentStorage.getArray("updateSweepLoadHistory:tempHistory");
                n.length = 0;
                try {
                    for (var i = ge(this.sweepLoadHistory), o = i.next(); !o.done; o = i.next()) {
                        var a = o.value;
                        a && (!e || e && e !== a) && n.push(a)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                this.sweepLoadHistory.length = 0,
                e && this.sweepLoadHistory.push(e),
                this.sweepLoadHistory.push.apply(this.sweepLoadHistory, n)
            }
            ,
            t.prototype.onPanoRendered = function(e, t, r, n) {
                var i = this.panoLoadResolvers[e]
                  , o = this.activeRenderTargetDescriptors[e];
                o && o.object && i(o.object.texture)
            }
            ,
            t.prototype.getRenderTargetDescriptorForSweep = function(e) {
                return this.activeRenderTargetDescriptors[e]
            }
            ,
            t.prototype.setRenderTargetDescriptorForSweep = function(e, t) {
                this.activeRenderTargetDescriptors[e] = t
            }
            ,
            t.prototype.isRenderTargetDescriptorValid = function(e) {
                return !!e && !!e.object
            }
            ,
            t.prototype.isSweepZoomed = function(e) {
                return this.zoomingActive && this.zoomSweepId === e
            }
            ,
            t.prototype.initTileTree = function(e, t, r) {
                var n = this.tileTrees[e];
                n || (n = [],
                this.tileTrees[e] = n);
                var i = n[t];
                if (!i) {
                    var o = m(512, r);
                    i = new v(512,o),
                    n[t] = i
                }
            }
            ,
            t.prototype.getTileTrees = function(e) {
                var t = this.tileTrees[e];
                if (!t)
                    throw new p.a("TiledPanoRenderer.getTileTrees() -> Tree array not yet initialized!");
                return t
            }
            ,
            t.prototype.checkTileTreeInitialized = function(e) {
                return !!this.tileTrees[e]
            }
            ,
            t.prototype.getTileTree = function(e, t) {
                var r = this.getTileTrees(e)[t];
                if (!r)
                    throw new p.a("TiledPanoRenderer.getTileTree() -> Tree not yet initialized!");
                return r
            }
            ,
            t.prototype.deleteTileTrees = function(e) {
                for (var t = this.getTileTrees(e), r = 0; r < 6; r++) {
                    var n = t[r];
                    n && n.deleteAllNodes()
                }
                this.tileTrees[e] = null,
                delete this.tileTrees[e]
            }
            ,
            t.prototype.clearTileState = function(e, t, r) {
                void 0 === t && (t = !1),
                void 0 === r && (r = !1);
                for (var n = function(e, n, i, o) {
                    r && (n.extra.tile.image = null),
                    t && (n.extra.tile.uploaded = !1,
                    n.extra.tile.downloaded = !1,
                    n.extra.tile.zoomUploaded = !1,
                    n.extra.tile.uploadAttempted = !1)
                }, i = 0; i < 6; i++) {
                    var o = this.getTileTree(e, i);
                    o && o.breadthFirst({
                        callback: n.bind(this, i),
                        maxLevel: m(512, this.panoQualityManager.getZoomPanoSize())
                    })
                }
            }
            ,
            t.prototype.resetUploadState = function(e, t, r, n) {
                for (var i = function(e, n, i, o) {
                    n.extra.tile.zoomUploaded = !r && n.extra.tile.zoomUploaded,
                    n.extra.tile.uploaded = !t && n.extra.tile.uploaded
                }, o = 0; o < 6; o++) {
                    this.getTileTree(e, o).breadthFirst({
                        callback: i.bind(this, o),
                        minLevel: void 0 !== n ? m(512, n) + 1 : 0
                    })
                }
            }
            ,
            t.prototype.anyUploaded = function(e) {
                if (!e)
                    return !1;
                if (e.extra.tile && this.isTileUploaded(e.extra.tile))
                    return !0;
                if (e.children)
                    try {
                        for (var t = ge(e.children), r = t.next(); !r.done; r = t.next()) {
                            var n = r.value;
                            if (this.anyUploaded(n))
                                return !0
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (o = t.return) && o.call(t)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                return !1;
                var i, o
            }
            ,
            t.prototype.linkTileAndNode = function(e, t) {
                t.extra.tile = e,
                e.node = t
            }
            ,
            t.prototype.linkAllTilesAndNodes = function(e) {
                for (var t = function(t, r, n, i, o) {
                    var a = this.getTileDirectoryEntry(e.id, r, i, o);
                    this.linkTileAndNode(a, n)
                }, r = 0; r < 6; r++) {
                    var n = this.getTileTree(e.id, r);
                    n.breadthFirst({
                        callback: t.bind(this, n, r)
                    })
                }
            }
            ,
            t.prototype.getTileDirectoryEntry = function(e, t, r, n) {
                var i = this.tileDirectory[e];
                i || (i = {},
                this.tileDirectory[e] = i);
                var o = 16384 * t + 1024 * r + n
                  , a = i[o];
                return a || (a = {
                    downloaded: !1,
                    uploaded: !1,
                    uploadAttempted: !1,
                    forceUpload: !1,
                    zoomUploaded: !1,
                    uploadQueued: !1,
                    image: null,
                    panoSize: -1,
                    tileX: -1,
                    tileY: -1,
                    totalTiles: -1,
                    tileIndex: n,
                    faceTileIndex: -1,
                    face: t,
                    cubeFace: -1,
                    sweepId: e,
                    tileSize: -1,
                    direction: new s.a,
                    node: null,
                    level: r
                },
                i[o] = a),
                a._key = e + ":" + t + ":" + r + ":" + n,
                a._tileKey = o,
                a
            }
            ,
            t.prototype.deleteTileDirectoryEntries = function(e) {
                this.tileDirectory[e] = null,
                delete this.tileDirectory[e]
            }
            ,
            t.prototype.isTileUploaded = function(e) {
                return this.isSweepZoomed(e.sweepId) ? e.zoomUploaded : e.uploaded
            }
            ,
            t.prototype.setUploaded = function(e, t) {
                this.isSweepZoomed(e.sweepId) ? e.zoomUploaded = t : e.uploaded = t
            }
            ,
            t.prototype.queueUploadForTile = function(e, t, r) {
                var n = !e.downloaded || e.uploadQueued && !r || this.isTileUploaded(e) || e.panoSize > this.panoQualityManager.getNavPanoSize() && !this.zoomingActive
                  , i = this.getRenderTargetDescriptorForSweep(e.sweepId);
                !n && i && this.isRenderTargetDescriptorValid(i) && (r ? this.uploadTile(e, !1) : (0 === m(512, e.panoSize) ? this.tileUploadQueue.addToForceQueue(e) : t && this.currentState.direction ? this.tileUploadQueue.insertSortedIntoPanoQueue(e, i.extra.sweep, this.currentState.direction) : this.tileUploadQueue.addToPanoQueue(e.sweepId, e),
                e.uploadQueued = !0))
            }
            ,
            t.prototype.uploadTile = function(e, t) {
                var r = this.persistentStorage.get("uploadTile:tempTileTexture", function() {
                    return {}
                })
                  , n = this.tileUploadQueue.getPanoLODDescriptor(e.sweepId, e.panoSize)
                  , i = this.getRenderTargetDescriptorForSweep(e.sweepId);
                if (i && e.image && this.isRenderTargetDescriptorValid(i)) {
                    var a = i.object
                      , s = i.extra.size;
                    if (this.isSweepZoomed(e.sweepId) && (a = this.zoomRenderTarget,
                    s = this.panoQualityManager.getZoomPanoSize()),
                    t || !this.isTileUploaded(e) && !this.anyUploaded(e.node)) {
                        var u = e.tileX * e.tileSize
                          , l = e.tileY * e.tileSize
                          , p = e.tileSize / e.panoSize * s
                          , h = u / e.panoSize * s
                          , d = l / e.panoSize * s
                          , f = r[e.tileSize];
                        if (r[e.tileSize] || (f = this.cwfRenderer.initSizedTexture2D(e.tileSize, c.j),
                        r[e.tileSize] = f),
                        this.cwfRenderer.uploadTexture2D(e.image, f, 0, 0, e.tileSize, e.tileSize),
                        this.cwfRenderer.renderToCubeMap(f, a, e.tileSize, e.tileSize, 0, 0, e.tileSize, e.tileSize, h, d, p, p, e.cubeFace),
                        o.overlayStyle > 0) {
                            var y = 1 === o.overlayStyle ? this.overlayTilesBasic : this.overlayTilesEnhanced;
                            this.cwfRenderer.renderToCubeMap(y[e.panoSize], a, e.tileSize, e.tileSize, 0, 0, e.tileSize, e.tileSize, h, d, p, p, e.cubeFace, c.Fa, !0, .5)
                        }
                        n.uploadCount++,
                        this.setUploaded(e, !0)
                    } else
                        this.setUploaded(e, !1);
                    e.uploadAttempted || n.uploadAttempts++,
                    e.uploadAttempted = !0,
                    n.uploadAttempts === e.totalTiles && this.onPanoRendered(e.sweepId, e.panoSize, e.totalTiles)
                }
            }
            ,
            t.prototype.updateUploadQueueProcessing = function() {
                var e = this.persistentStorage.getNumber("updateUploadQueueProcessing:lastUpdateTime")
                  , t = this.persistentStorage.getNumber("updateUploadQueueProcessing:updateCount");
                !(performance.now() - e.value() > be || 0 === t.value()) || !this.overlayTilesLoaded && this.usingTileOverlay || (this.processUploadQueue(this.maxNonBaseUploadsPerFrame, this.maxBaseUploadsPerFrame),
                e.set(performance.now())),
                t.set(t.value() + 1)
            }
            ,
            t.prototype.processUploadQueue = function(e, t) {
                void 0 === e && (e = 1);
                for (var r = 0, n = 0, i = null; i = this.tileUploadQueue.getNextFromUploadQueue(this.activeSweeps); ) {
                    var o = this.getRenderTargetDescriptorForSweep(i.sweepId);
                    if (!(i.panoSize > this.panoQualityManager.getNavPanoSize() && !this.zoomingActive || !this.isRenderTargetDescriptorValid(o)) && (this.uploadTile(i, i.forceUpload),
                    r += 0 !== i.level ? 1 : 0,
                    (n += 0 === i.level ? 1 : 0) >= t || r >= e))
                        break
                }
            }
            ,
            t.prototype.loadOverlayTiles = function() {
                var e = this;
                if (0 !== o.overlayStyle) {
                    var t = 0
                      , n = [];
                    switch (o.overlayStyle) {
                    case 1:
                        n.push([r(333), this.overlayTilesBasic, 256]),
                        n.push([r(333), this.overlayTilesBasic, 512]),
                        n.push([r(508), this.overlayTilesBasic, 1024]),
                        n.push([r(507), this.overlayTilesBasic, 2048]),
                        n.push([r(506), this.overlayTilesBasic, 4096]);
                        break;
                    case 2:
                        n.push([r(332), this.overlayTilesEnhanced, 256]),
                        n.push([r(332), this.overlayTilesEnhanced, 512]),
                        n.push([r(505), this.overlayTilesEnhanced, 1024]),
                        n.push([r(504), this.overlayTilesEnhanced, 2048]),
                        n.push([r(503), this.overlayTilesEnhanced, 4096])
                    }
                    n.forEach(function(r) {
                        var i = document.createElement("img");
                        i.crossOrigin = "anonymous",
                        i.src = r[0],
                        i.onload = function() {
                            (function(r, i, o) {
                                var a;
                                i ? a = r[i] = e.cwfRenderer.initSizedTexture2D(512, c.j) : (e.overlayTileBase = e.cwfRenderer.initSizedTexture2D(512, c.j),
                                a = e.overlayTileBase),
                                e.cwfRenderer.uploadTexture2D(o, a, 0, 0, 512, 512),
                                ++t >= n.length && (e.overlayTilesLoaded = !0)
                            }
                            ).call(e, r[1], r[2], i)
                        }
                    }),
                    this.usingTileOverlay = !0
                } else
                    this.usingTileOverlay = !1
            }
            ,
            t.prototype.copyTargetToZoom = function(e) {
                if (this.zoomingActive) {
                    var t = this.getRenderTargetDescriptorForSweep(e);
                    if (!t)
                        throw new Error("Error in copying a null render target to a zoomed target");
                    var r = t.object
                      , n = r.width
                      , i = this.zoomRenderTarget.width;
                    this.cwfRenderer.copyCubeMap(r.texture, this.zoomRenderTarget, n, n, i, i),
                    this.copyBaseRenderStatusToZoomed(e)
                }
            }
            ,
            t.prototype.setupZoomRenderTarget = function() {
                if (this.panoQualityManager.getZoomPanoSize() >= this.panoQualityManager.getNavPanoSize()) {
                    if (this.zoomRenderTarget && this.zoomRenderTarget.width === this.panoQualityManager.getZoomPanoSize())
                        return;
                    var e = this.zoomRenderTarget;
                    if (this.zoomRenderTarget = this.cwfRenderer.initRenderTargetCube(this.panoQualityManager.getZoomPanoSize(), !1),
                    e) {
                        var t = e.width
                          , r = this.zoomRenderTarget.width;
                        this.cwfRenderer.copyCubeMap(e.texture, this.zoomRenderTarget, t, t, r, r),
                        e.texture.dispose(),
                        e.texture.version = 0,
                        this.cwfRenderer.deallocateCubeTexture(e.texture),
                        e.texture = null
                    }
                    this.zoomSweepRenderingDisabled = !1
                } else
                    this.zoomSweepRenderingDisabled = !0
            }
            ,
            t
        }(Y.a), De = r(4), Re = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , r = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            }
        }, xe = new De.a("tile-downloader");
        !function(e) {
            e[e.Testing = 1] = "Testing",
            e[e.Success = 2] = "Success",
            e[e.Fail = 3] = "Fail"
        }(ye || (ye = {}));
        var Pe = function() {
            function e(e) {
                this.concurrentDownloads = e || 1,
                this.retryMinimumTime = 1e4,
                this.downloadDescriptors = {},
                this.priorityQueue = [],
                this.forceQueue = [],
                this.activeDownloads = [],
                this.processPriorityQueue = !0,
                this.downloadTestResults = {},
                this.persistentStorage = new ee
            }
            return e.prototype.setModel = function(e, t) {
                this.setSweeps(t),
                this.urls = e
            }
            ,
            e.prototype.setRestrictedSweeps = function(e) {
                if (this.sweepListMap && this.tilePrioritizer) {
                    var t = [];
                    try {
                        for (var r = Re(e), n = r.next(); !n.done; n = r.next()) {
                            var i = n.value;
                            t.push(this.sweepListMap.getMappedElement(i))
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (a = r.return) && a.call(r)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                    this.tilePrioritizer.setUpcomingSweeps(t),
                    this.clearFromAllQueuesBySweep(e)
                }
                var o, a
            }
            ,
            e.prototype.clearRestrictedSweeps = function() {
                this.tilePrioritizer && this.tilePrioritizer.clearUpcomingSweeps()
            }
            ,
            e.prototype.init = function(e) {
                this.tilePrioritizer = e
            }
            ,
            e.prototype.setLoadCallbacks = function(e, t) {
                this.onTileDownloaded = e,
                this.onPanoDownloaded = t
            }
            ,
            e.prototype.setSweeps = function(e) {
                this.sweepListMap = e
            }
            ,
            e.prototype.start = function() {
                this.refreshUpdateInterval(0)
            }
            ,
            e.prototype.stop = function() {
                this.refreshInterval && window.clearInterval(this.refreshInterval)
            }
            ,
            e.prototype.refreshUpdateInterval = function(e) {
                var t = this;
                e = e || 0,
                this.refreshInterval = window.setTimeout(function() {
                    t.update() ? t.refreshUpdateInterval(16) : t.refreshUpdateInterval(500)
                }, e)
            }
            ,
            e.prototype.update = function() {
                var e = this.forceQueue.length > 0;
                return this.processQueue(this.forceQueue, !1),
                this.processPriorityQueue && (this.sweepListMap && this.queuePrioritizedTiles(this.sweepListMap),
                this.priorityQueue.length > 0 && (e = !0),
                this.processQueue(this.priorityQueue, !1)),
                e
            }
            ,
            e.prototype.getNonDownloadedTiles = function(e, t, r) {
                r.length = 0;
                var n, i, o = this.getTileDownloadDescriptors(e, t);
                try {
                    for (var a = Re(o), s = a.next(); !s.done; s = a.next()) {
                        var u = s.value;
                        !u || u.status !== re.None && u.status !== re.Queued || r.push(u)
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = a.return) && i.call(a)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            ,
            e.prototype.forceQueueTiles = function(e, t, r, n, i, o) {
                var a, s, u, c, l = this.persistentStorage.getArray("forceQueueTiles:remaining"), p = this.persistentStorage.getArray("forceQueueTiles:matching"), h = this.persistentStorage.getArray("forceQueueTiles:toDownload");
                if (this.getNonDownloadedTiles(e, t, l),
                h.length = 0,
                l.length > 0) {
                    ue.sortTiles(l, e, r),
                    p.length = 0,
                    V(e, t, r, p, !0);
                    try {
                        for (var d = Re(l), f = d.next(); !f.done; f = d.next()) {
                            var y = f.value;
                            try {
                                for (var v = Re(p), m = v.next(); !m.done; m = v.next()) {
                                    var w = m.value;
                                    y.face === w.face && y.faceTileIndex === w.faceTileIndex && h.push(y)
                                }
                            } catch (e) {
                                u = {
                                    error: e
                                }
                            } finally {
                                try {
                                    m && !m.done && (c = v.return) && c.call(v)
                                } finally {
                                    if (u)
                                        throw u.error
                                }
                            }
                        }
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (s = d.return) && s.call(d)
                        } finally {
                            if (a)
                                throw a.error
                        }
                    }
                    this.forceQueue.push.apply(this.forceQueue, h),
                    this.setStatusForAllDescriptors(this.forceQueue, re.ForceQueued),
                    this.clearFromQueue(this.priorityQueue, re.ForceQueued, !1),
                    n && this.processQueue(this.forceQueue, !0)
                }
            }
            ,
            e.prototype.clearForceQueue = function() {
                this.clearQueue(this.forceQueue)
            }
            ,
            e.prototype.queuePrioritizedTiles = function(e) {
                this.tilePrioritizer && (this.clearQueue(this.priorityQueue),
                this.tilePrioritizer.filterAndPrioritize(this.priorityQueue, e, this),
                this.invalidateDuplicateEntries(this.priorityQueue),
                this.clearFromQueue(this.priorityQueue, re.None, !0),
                this.setStatusForAllDescriptors(this.priorityQueue, re.Queued))
            }
            ,
            e.prototype.clearQueue = function(e) {
                this.setStatusForAllDescriptors(e, re.None),
                e.length = 0
            }
            ,
            e.prototype.clearFromQueue = function(e, t, r) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i && (t === i.status && !r || t !== i.status && r) && (e[n] = null)
                }
            }
            ,
            e.prototype.clearFromAllQueuesBySweep = function(e) {
                this.clearFromQueueBySweep(this.forceQueue, e),
                this.clearFromQueueBySweep(this.priorityQueue, e)
            }
            ,
            e.prototype.clearFromQueueBySweep = function(e, t) {
                for (var r = Object(ne.b)(t), n = 0; n < e.length; n++) {
                    var i = e[n];
                    i && i.sweep && (r[i.sweep.id] || (e[n] = null))
                }
            }
            ,
            e.prototype.setStatusForAllDescriptors = function(e, t) {
                try {
                    for (var r = Re(e), n = r.next(); !n.done; n = r.next()) {
                        var i = n.value;
                        i && (i.status = t)
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (a = r.return) && a.call(r)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                var o, a
            }
            ,
            e.prototype.invalidateDuplicateEntries = function(e) {
                try {
                    for (var t = Re(e), r = t.next(); !r.done; r = t.next()) {
                        (i = r.value) && (i.queuedCount = 0)
                    }
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (a = t.return) && a.call(t)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                for (var n = 0; n < e.length; n++) {
                    var i;
                    (i = e[n]) && (i.queuedCount++,
                    i.queuedCount > 1 && (e[n] = null))
                }
                var o, a
            }
            ,
            e.prototype.getTileDownloadDescriptors = function(e, t) {
                var r = this.getAllTileDownloadDescriptors(e.id)
                  , n = r[t];
                return n || (n = this.buildDownloadDescriptorArray(t),
                r[t] = n,
                this.initTileDownloadDescriptors(n, e, t)),
                n
            }
            ,
            e.prototype.getAllTileDownloadDescriptors = function(e) {
                var t = this.downloadDescriptors[e];
                return t || (t = {},
                this.downloadDescriptors[e] = t),
                t
            }
            ,
            e.prototype.deleteAllTileDownloadDescriptors = function(e) {
                this.downloadDescriptors[e] = null,
                delete this.downloadDescriptors[e]
            }
            ,
            e.prototype.processQueue = function(e, t) {
                if (this.cleanupActiveDownloads(),
                this.activeDownloads.length < this.concurrentDownloads || t)
                    for (var r = t ? e.length : this.concurrentDownloads - this.activeDownloads.length, n = 0, i = 0; n < r && e.length > 0; i++) {
                        var o = e.shift();
                        o && (this.startDownload(o),
                        n++)
                    }
            }
            ,
            e.prototype.testDownload = function(e, t, r) {
                var n = this;
                if (!this.urls)
                    throw new Error("Can't call testDownload without signed urls");
                if (this.sweepListMap) {
                    var i = this.downloadTestResults[e];
                    if (i)
                        return void (i === ye.Success ? r(!0) : i === ye.Fail && r(!1));
                    this.downloadTestResults[e] = ye.Testing;
                    var o = this.sweepListMap.getByIndex(0)
                      , a = this.getTileUrl(o.id, e, t, 0);
                    this.urls.getImage(a, {
                        maxRetries: 0
                    }).then(function(t) {
                        n.downloadTestResults[e] = ye.Success,
                        r(!0)
                    }, function() {
                        n.downloadTestResults[e] = ye.Fail,
                        r(!1)
                    })
                }
            }
            ,
            e.prototype.startDownload = function(e) {
                if (!this.urls)
                    throw new Error("Can't call startDownload without signed urls");
                if (e.sweep) {
                    e.status = re.Downloading,
                    this.checkRestrictedSweep(e.sweep.id) || xe.error("Tried to download tile that is not in restricted list!!!!!");
                    var t = this.getTileUrl(e.sweep.id, e.panoSize, e.tileSize, e.tileIndex);
                    this.activeDownloads.push(e),
                    this.urls.getImage(t, {
                        maxRetries: 4
                    }).then(this.downloadComplete.bind(this, e), this.downloadFailed.bind(this, e))
                }
            }
            ,
            e.prototype.checkRestrictedSweep = function(e) {
                if (this.tilePrioritizer) {
                    var t = this.tilePrioritizer.priorityCriteria.upcomingSweeps;
                    if (t) {
                        var r = !1;
                        try {
                            for (var n = Re(t), i = n.next(); !i.done; i = n.next()) {
                                var o = i.value;
                                o && o.id === e && (r = !0)
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (s = n.return) && s.call(n)
                            } finally {
                                if (a)
                                    throw a.error
                            }
                        }
                        return r
                    }
                    return !0
                }
                return !0;
                var a, s
            }
            ,
            e.prototype.downloadFailed = function(e, t) {
                e.status = re.DownloadFailed
            }
            ,
            e.prototype.downloadComplete = function(e, t) {
                if (e.sweep && (e.status = re.Downloaded,
                e.image = t,
                this.onTileDownloaded && this.onTileDownloaded(e),
                this.isPanoDownloaded(e.sweep, e.panoSize))) {
                    var r = {
                        sweep: e.sweep,
                        tileSize: e.tileSize,
                        panoSize: e.panoSize
                    };
                    this.onPanoDownloaded && this.onPanoDownloaded(r)
                }
            }
            ,
            e.prototype.cleanupActiveDownloads = function() {
                var e, t, r = this.persistentStorage.getArray("cleanupActiveDownloads:temp");
                r.length = 0;
                try {
                    for (var n = Re(this.activeDownloads), i = n.next(); !i.done; i = n.next()) {
                        var o = i.value;
                        o.status !== re.Downloaded && o.status !== re.DownloadFailed && r.push(o)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                this.activeDownloads.length = 0,
                this.activeDownloads.push.apply(this.activeDownloads, r)
            }
            ,
            e.prototype.isPanoDownloaded = function(e, t) {
                var r, n, i = this.getTileDownloadDescriptors(e, t);
                if (!i || i.length <= 0)
                    return !1;
                try {
                    for (var o = Re(i), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        if (s && s.status !== re.Downloaded)
                            return !1
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return !0
            }
            ,
            e.prototype.buildDownloadDescriptorArray = function(e) {
                for (var t = X(e), r = [], n = 0; n < t; n++) {
                    var i = this.buildDownloadDescriptor();
                    r.push(i)
                }
                return r
            }
            ,
            e.prototype.buildDownloadDescriptor = function() {
                return {
                    sweep: null,
                    panoSize: -1,
                    tileSize: -1,
                    tileIndex: -1,
                    totalTiles: -1,
                    faceTileIndex: -1,
                    status: re.None,
                    url: null,
                    image: null,
                    direction: new s.a,
                    face: -1,
                    cubeFace: -1,
                    tileX: -1,
                    tileY: -1,
                    queuedCount: -1
                }
            }
            ,
            e.prototype.initTileDownloadDescriptors = function(e, t, r) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i && this.initTileDownloadDescriptor(i, t, r, n)
                }
            }
            ,
            e.prototype.initTileDownloadDescriptor = function(e, t, r, n) {
                var i = r >= 512 ? 512 : r;
                e.face = G(r, n),
                e.cubeFace = F(e.face),
                e.sweep = t,
                e.panoSize = r,
                e.tileSize = i,
                e.tileIndex = n,
                e.totalTiles = X(r),
                e.status = re.None,
                e.image = null,
                B(e.panoSize, e.tileIndex, e),
                Q(e.panoSize, e.tileSize, e.cubeFace, e.tileX, e.tileY, z.Center, 0, e.direction)
            }
            ,
            e.prototype.getTileUrl = function(e, t, r, n) {
                var i = this.persistentStorage.get("getTileUrl:sizeMap", function() {
                    return {
                        256: "256",
                        512: "512",
                        1024: "1k",
                        2048: "2k",
                        4096: "4k"
                    }
                })
                  , o = this.persistentStorage.get("getTileUrl:sizeMap", function() {
                    return {
                        face: -1,
                        faceTileIndex: -1,
                        tileX: -1,
                        tileY: -1
                    }
                });
                B(t, n, o);
                var a = Math.floor(t / r)
                  , s = a * a
                  , u = Math.floor(n / s);


                  if(SCENE_CONFIG.type == 1) {

                    

                    return "https://modelcdn2.3dnest.cn/"+SCENE_CONFIG.sid+"/"+SCENE_CONFIG.version+"/multiple/"+e+"/"+i[t]+"_face" + u + "_" + o.tileX + "_" + o.tileY + ".jpg";
                  } else if(SCENE_CONFIG.type == 0) {
                    if(undefined != window.IMAGE_SERVER && window.IMAGE_SERVER != "") {
                        var arr = e.split("_location");
                        var tileUrl = "";
                        if(arr.length == 2) {
                            tileUrl = IMAGE_SERVER + "/tiles/"+arr[0]+ "/" +"location"+arr[1]+ "/" + i[t] + "_face" + u + "_" + o.tileX + "_" + o.tileY + ".jpg";
                        } else {
                            tileUrl = IMAGE_SERVER + "/tiles/"+e + "/" + i[t] + "_face" + u + "_" + o.tileX + "_" + o.tileY + ".jpg";
                        }
    
                        if(model.j()) {
                            tileUrl = tileUrl.replace("tiles","tiles_mobile")
                        }
                        //d += "?mobil=128";
                        return tileUrl;
                    }  
                  } else {
                    return "tiles/" + e + "/" + i[t] + "_face" + u + "_" + o.tileX + "_" + o.tileY + ".jpg"
                  }
            }
            ,
            e
        }()
          , Ee = r(259)
          , Oe = r(258)
          , Ae = r(0)
          , Me = r(65)
          , Ue = r(144)
          , model = r(18)
          , Ce = function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            ;
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }()
          , Ie = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }
          , ze = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
          , ke = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "sweep-pano-tiling",
                t
            }
            return Ce(t, e),
            t.prototype.init = function(e, t) {
                return Ie(this, void 0, void 0, function() {
                    var e, r, n, i, s, u, c, l, p = this;
                    return ze(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return [4, t.getModule(Ae.H)];
                        case 1:
                            return e = h.sent(),
                            [4, t.getModule(Ae.Oa)];
                        case 2:
                            return r = h.sent(),
                            [4, t.market.waitForData(Me.a)];
                        case 3:
                            return n = h.sent(),
                            [4, t.market.waitForData(Ue.a)];
                        case 4:
                            return i = h.sent(),
                            s = r.getScene(),
                            u = s.cwfRenderer,
                            c = r.maxCubemapSize,
                            l = new J(c,o.navPanoSize,o.zoomPanoSize),
                            this.createTileDownloader(l),
                            this.panoRenderer = new Se(u,l,this.tileDownloader,n,i,function(e) {
                                return t.broadcast(e)
                            }
                            ),
                            this.panoRenderer.setModel(e.getSignedUrls(), n.getSweepList()),
                            this.tileDownloader.start(),
                            t.addComponent(this, this.panoRenderer),
                            t.subscribe(a.a, function(e) {
                                p.panoRenderer.panoQualityManager.setWindowSize(e.width, e.height)
                            }),
                            t.subscribe(Ee.a, function(e) {
                                p.tileDownloader.setRestrictedSweeps(e.sweepIds)
                            }),
                            t.subscribe(Oe.a, function(e) {
                                p.tileDownloader.clearRestrictedSweeps()
                            }),
                            [2, this.panoRenderer]
                        }
                    })
                })
            }
            ,
            t.prototype.getRenderer = function() {
                return this.panoRenderer
            }
            ,
            t.prototype.enableZooming = function(e, t) {
                void 0 === e && (e = !0),
                this.tilePrioritizer.setZoomingActive(e),
                this.panoRenderer.setZoomingActive(e, t)
            }
            ,
            t.prototype.enableUltraHigh = function(e) {
                this.panoRenderer.enableUltraHighQualityMode(e)
            }
            ,
            t.prototype.resetPano = function(e, t) {
                this.panoRenderer.resetRenderStatus(e, !1, !0, this.panoRenderer.panoQualityManager.getNavPanoSize()),
                this.panoRenderer.clearAllQueuedUploadsForPano(e),
                this.panoRenderer.renderPanoTiles(e, null, !1, !1)
            }
            ,
            t.prototype.createTileDownloader = function(e) {
                this.tileDownloader = new Pe(o.concurrentDownloads),
                this.tilePrioritizer = new ue(e),
                this.tileDownloader.init(this.tilePrioritizer)
            }
            ,
            t
        }(Ae.Aa);
        t.default = ke
    },
    732: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(65), a = r(42), s = r(155), u = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), c = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, l = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "model-bounds",
                t
            }
            return u(t, e),
            t.prototype.init = function(e, t) {
                return c(this, void 0, void 0, function() {
                    var e, r, n, a = this;
                    return l(this, function(u) {
                        return e = t.waitForModule(i.X),
                        r = t.market.waitForData(o.a),
                        n = t.waitForModule(i.I),
                        e.then(function(e) {
                            r.then(function(r) {
                                a.updateSkyboxFromSweepData(e, r),
                                t.subscribe(s.a, function(t) {
                                    a.sweepBounds.containsPoint(t.toPosition) || a.updateSkyboxFromSweepData(e, r)
                                })
                            }),
                            n.then(function(t) {
                                e.updateSkyboxSize(t.mesh.boundingBox)
                            })
                        }),
                        [2]
                    })
                })
            }
            ,
            t.prototype.updateSkyboxFromSweepData = function(e, t) {
                var r = [];
                t.iterate(function(e) {
                    r.push(e.position)
                }),
                this.sweepBounds = (new a.a).setFromPoints(r).expandByScalar(10),
                e.updateSkyboxSize(this.sweepBounds)
            }
            ,
            t
        }(i.G);
        t.default = p
    },
    733: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(70), a = r(4), s = r(639), u = r(59), c = (r(58),
        n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), l = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, p = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, h = new a.a("Locale"), d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "locale",
                t._languageCode = "cn-CN",
                t
            }
            return c(t, e),
            t.prototype.init = function(e, r) {
                return l(this, void 0, void 0, function() {
                    var e, n, i, a, c;
                    return p(this, function(l) {
                        switch (l.label) {
                        case 0:
                            return [4, r.market.waitForData(o.a)];
                        case 1:
                            return e = l.sent(),
                            n = e.tryGetProperty("lang", "cn"),
                            t.languageCodeMap.hasOwnProperty(n) && (this._languageCode = t.languageCodeMap[n]),
                            this.polyglot = new s({
                                onMissingKey: function(e) {
                                    return h.warn("Missing phrase key:" + e),
                                    t.missingPrefix + e
                                }
                            }),
                            i = "./locale/strings-" + this._languageCode + ".json",
                            [4, new u.RequestQueue({
                                retries: 0
                            }).get(i)];
                        case 2:
                            return a = l.sent(),
                            c = JSON.parse(a),
                            this.polyglot.extend(c),
                            h.info("Loaded phrases - " + i),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.t = function(e) {
                return this.polyglot.t(e)
            }
            ,
            Object.defineProperty(t.prototype, "languageCode", {
                get: function() {
                    return this._languageCode
                },
                enumerable: !0,
                configurable: !0
            }),
            t.languageCodeMap = {
                en: "en-US",
                es: "es-MX",
                fr: "fr-FR",
                de: "de-DE",
                ru: "ru-RU",
                cn: "cn-CN",
                jp: "jp-JP"
            },
            t.missingPrefix = "FIX-",
            t
        }(i.A);
        t.default = d
    },
    734: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(100), a = r(6), s = r(4), u = r(65), 
        class144 = r(144),
        class65 = r(65),
        class51 = r(51),
        class3 = r(3),
        
        c = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), l = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, p = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, h = new s.a("camera-start"), d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "camera-start",
                t
            }
            return c(t, e),
            t.prototype.init = function(e, t) {
                return l(this, void 0, void 0, function() {
                    var r, n, i, o, a, s;
                    return p(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, t.market.waitForData(u.a)];
                        case 1:
                            return r = c.sent(),
                            [4, e.snapshotsStore.read()];
                        case 2:
                            return n = c.sent(),
                            [4, e.cameraStartSync.load()];
                        case 3:
                            G_APP.flyto = this.flyTo;
                            window.G = {
                                player: {
                                    flyTo : this.flyTo,
                                }
                            }

                            i = c.sent();
                            if(e.startOverride) {
                                o = this.parseStartParam(e.startOverride);
                                this.cameraStart = o;
                                this.cameraStart = this.parseStartParam2(e);
                            } else {
                                if(i.icon && i.icon in n) {
                                    this.cameraStart = this.buildCameraStart(n[i.icon]);
                                } else {
                                    a = r.getSweepList().findIndex(function(e) {
                                        return e.id === i.data.pano
                                    });
                                    if(i.data.pano && -1 !== a) {
                                        this.cameraStart = i.data;
                                    }
                                    //i.data.pano && -1 !== a && (this.cameraStart = i.data);
                                }
                            }

                            /*e.startOverride ? (o = this.parseStartParam(e.startOverride)) && (this.cameraStart = o) : i.icon && i.icon in n ? 
                            this.cameraStart = this.buildCameraStart(n[i.icon]) : (a = r.getSweepList().findIndex(function(e) {
                                return e.id === i.data.pano
                            }),
                            i.data.pano && -1 !== a && (this.cameraStart = i.data)),
                            */
                            this.cameraStart && this.cameraStart.pano.uuid && (r.containsSweep(this.cameraStart.pano.uuid) || (this.cameraStart = null)),
                            this.cameraStart || (s = r.getFirstAlignedSweep(),
                            this.cameraStart = this.defaultCameraStart(s || r.getFirstSweep()));
                            return [2]
                        }
                    })
                })
            }
            ,

            t.prototype.flyTo = function(panoId, camera) {
                //G_APP.flyto("zq_elqld_60_location_40","%7B%22_x%22%3A-0.015174112559738502%2C%22_y%22%3A0.5397517073534293%2C%22_z%22%3A0.00973140307578139%2C%22_w%22%3A0.8416312380020872%7D")
                if("" != camera && camera) {
                    camera = unescape(camera);
                    camera = JSON.parse(camera);
                }

                if(camera) {
                    camera = new class3.a(camera._x,camera._y,camera._z,camera._w)
                } else {
                    var cameraData = this.market.tryGetData(class144.a); 
                    var sweepData = this.market.tryGetData(class65.a); 
                    

                   /* var c = sweepData.getSweep(panoId).position.clone()
                                .applyQuaternion(cameraData.pose.rotation)
                                .setY(0)
                                .normalize();*/
                    var tempRotate = sweepData.getSweep(panoId).position.clone()
                                .sub(cameraData.pose.position)
                                .setY(0)
                                .normalize();            
                    tempRotate = (new class3.a).setFromUnitVectors(class51.a.FORWARD, tempRotate)

                    camera = tempRotate;// new class3.a(0,0,0,1)
                }


               /* this.engine.broadcast({
                    msgId:3853,
                    sweepId: panoId
                });*/

                G_APP.sweepModule.moveToSweep({
                     transitionType: 2,
                     sweepId: panoId,
                  //   rotation: camera
                    // transitionTime: e,
                    // minimumTimeOverride: n,
                    // maximumTimeOverride: !0
                 });
                 return;
            },
            t.prototype.parseStartParam2 = function (e) {
                //&start=zq_elqld_60_location_12&x=0&y=0&z=0&w=1
                return {
                    mode: a.a.Panorama,
                    camera: {
                        rotation: new class3.a(
                            e.start.x ? e.start.x : 0,
                            e.start.y ? e.start.y : 0,
                            e.start.z ? e.start.z : 0,
                            e.start.w ? e.start.w : 1
                        )
                    },
                    pano: {
                        uuid: e.start.panoId
                    },
                    floorVisibility: true,
                }


                /*i.pano = e.get(t);
                i.pano = i.pano;
                i.position = i.pano.position;
                i.quaternion = i.pano.quaternion;
                i.mode = h.PANORAMA;

                var vx = c.valueFromHash("x", "");
                var vy = c.valueFromHash("y", "");
                var vz = c.valueFromHash("z", "");
                var vw = c.valueFromHash("w", "");


                if("" != vx && "" != vz && "" != vy && "" != vw ) {
                    i.quaternion = new three.Quaternion(parseFloat(vx),parseFloat(vy),parseFloat(vz),parseFloat(vw));
                }

                                        */
            },

            t.prototype.parseStartParam = function(e) {
                var t = o.a.deserialize(e);
                return t ? {
                    mode: t.mode,
                    camera: {
                        position: t.position,
                        rotation: t.quaternion,
                        zoom: t.zoom
                    },
                    pano: {
                        uuid: t.panoId
                    },
                    floorVisibility: t.floorVisibility
                } : (h.info("failed to parse &start param"),
                null)
            }
            ,
            t.prototype.buildCameraStart = function(e) {
                var t = {
                    mode: e.metadata.camera_mode,
                    camera: {
                        position: e.metadata.camera_position,
                       // rotation: e.metadata.camera_quaternion,
                        zoom: e.metadata.ortho_zoom
                    },
                    pano: {}
                };
                return t.mode === a.a.Panorama && (t.pano = {
                    uuid: e.metadata.scan_id
                }),
                t
            }
            ,
            t.prototype.defaultCameraStart = function(e) {
                return e ? {
                    mode: a.a.Panorama,
                    camera: {
                        position: e.position,
                        rotation: e.rotation,
                        zoom: 0
                    },
                    pano: {
                        uuid: e.id
                    }
                } : null
            }
            ,
            t.prototype.getStartPose = function() {
                return this.cameraStart
            }
            ,
            t
        }(i.c);
        t.default = d
    },
    735: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = r(196), a = r(263), s = r(298), u = r(12), c = (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), l = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, p = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "canvas",
                t.getNewX = function() {
                    return 0
                }
                ,
                t.getNewY = function() {
                    return 0
                }
                ,
                t.getNewWidth = function() {
                    return window.innerWidth
                }
                ,
                t.getNewHeight = function() {
                    return window.innerHeight
                }
                ,
                t.data = new o.a,
                t.activeTransitions = [],
                t.activeTransitionMap = {
                    left: null,
                    top: null,
                    width: null,
                    height: null
                },
                t
            }
            return c(t, e),
            t.prototype.init = function(e, t) {
                var r = this;
                this.engine = t,
                t.market.register(this, o.a, this.data),
                this._canvas = e.canvas,
                this._canvas.setAttribute("tabindex", "-1"),
                this._canvas.focus(),
                this._canvas.style.position = "absolute",
                this._canvas.style.left = "0",
                this._canvas.style.top = "0",
                this.transitionDurations = {
                    left: "0s",
                    top: "0s",
                    width: "0s",
                    height: "0s"
                },
                this._canvas.style.transitionProperty = Object.keys(this.transitionDurations).join(","),
                this._canvas.style.transitionDuration = this.stringifyTransitionDurations(),
                this.resizeAndReposition = function() {
                    r.transitionDurations.left = r.transitionDurations.top = r.transitionDurations.width = r.transitionDurations.height = "0s",
                    r._canvas.style.transitionDuration = r.stringifyTransitionDurations(),
                    r.applySize(),
                    r.applyPosition(),
                    r.activeTransitions.forEach(r.resolveActiveTransition.bind(r))
                }
                ,
                window.addEventListener("resize", this.resizeAndReposition),
                this._canvas.addEventListener("transitionend", function(e) {
                    e.propertyName in s.b && (r.transitionDurations[e.propertyName] = "0s",
                    r._canvas.style.transitionDuration = r.stringifyTransitionDurations(),
                    r.resolveActiveTransition(e.propertyName))
                }),
                t.commandBinder.addBinding(s.a, function(e) {
                    return l(r, void 0, void 0, function() {
                        var t, r = this;
                        return p(this, function(n) {
                            return e.resizeDimensions ? (this.activeTransitions.forEach(this.resolveActiveTransition.bind(this)),
                            t = e.resizeDimensions.map(function(e) {
                                var t = e.property
                                  , n = e.setDimension
                                  , i = e.duration;
                                switch (t) {
                                case s.b.height:
                                    r.setHeight(n, i);
                                    break;
                                case s.b.width:
                                    r.setWidth(n, i);
                                    break;
                                case s.b.top:
                                    r.setY(n, i);
                                    break;
                                case s.b.left:
                                    r.setX(n, i)
                                }
                                var o = new u.a;
                                return r.activeTransitionMap[t] = o,
                                r.activeTransitions.push(t),
                                o
                            }),
                            [2, Promise.all(t)]) : [2]
                        })
                    })
                })
            }
            ,
            t.prototype.dispose = function() {
                window.removeEventListener("resize", this.resizeAndReposition)
            }
            ,
            Object.defineProperty(t.prototype, "element", {
                get: function() {
                    return this._canvas
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "width", {
                get: function() {
                    return this._canvas.clientWidth
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "height", {
                get: function() {
                    return this._canvas.clientHeight
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "x", {
                get: function() {
                    return parseInt(this._canvas.style.left, 10)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "y", {
                get: function() {
                    return parseInt(this._canvas.style.top, 10)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.onUpdate = function(e) {
                this.data.width === this.width && this.data.height === this.height || (this.data.width = this.width,
                this.data.height = this.height,
                this.engine.market.update(this, this.data),
                this.engine.broadcast(new a.a(this.width,this.height))),
                this.data.x === this.x && this.data.y === this.y || (this.data.x = this.x,
                this.data.y = this.y,
                this.engine.market.update(this, this.data))
            }
            ,
            t.prototype.setX = function(e, t) {
                void 0 === t && (t = 0),
                this.getNewX = "number" == typeof e ? function() {
                    return e
                }
                : e,
                this.transitionDurations.left = t + "ms",
                this.updateTransitions()
            }
            ,
            t.prototype.setY = function(e, t) {
                void 0 === t && (t = 0),
                this.getNewY = "number" == typeof e ? function() {
                    return e
                }
                : e,
                this.transitionDurations.top = t + "ms",
                this.updateTransitions()
            }
            ,
            t.prototype.setWidth = function(e, t) {
                void 0 === t && (t = 0),
                this.getNewWidth = "number" == typeof e ? function() {
                    return e
                }
                : e,
                this.transitionDurations.width = t + "ms",
                this.updateTransitions()
            }
            ,
            t.prototype.setHeight = function(e, t) {
                void 0 === t && (t = 0),
                this.getNewHeight = "number" == typeof e ? function() {
                    return e
                }
                : e,
                this.transitionDurations.height = t + "ms",
                this.updateTransitions()
            }
            ,
            t.prototype.updateTransitions = function() {
                this._canvas.style.transitionDuration = this.stringifyTransitionDurations(),
                this.applySize(),
                this.applyPosition()
            }
            ,
            t.prototype.applySize = function() {
                this._canvas.style.width = this.getNewWidth(window.innerWidth) + "px",
                this._canvas.style.height = this.getNewHeight(window.innerHeight) + "px"
            }
            ,
            t.prototype.applyPosition = function() {
                this._canvas.style.left = this.getNewX(window.innerWidth) + "px",
                this._canvas.style.top = this.getNewY(window.innerHeight) + "px"
            }
            ,
            t.prototype.stringifyTransitionDurations = function() {
                var e = this;
                return Object.keys(this.transitionDurations).map(function(t) {
                    return e.transitionDurations[t]
                }).join(",")
            }
            ,
            t.prototype.resolveActiveTransition = function(e) {
                var t = this.activeTransitions.indexOf(e);
                -1 !== t && this.activeTransitions.splice(t, 1);
                var r = this.activeTransitionMap[e];
                r && r.resolve(),
                this.activeTransitionMap[e] = null
            }
            ,
            t
        }(i.d);
        t.default = h
    },
    736: function(e, t, r) {
        "use strict";
        r.r(t);
        var n, i = r(0), o = (r(647),
        n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), a = function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    e.done ? i(e.value) : new r(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }, s = function(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = n[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [0, i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }, u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(t, e),
            t.prototype.init = function(e, t) {
                return a(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        return document.body.classList.add("cursor"),
                        [2]
                    })
                })
            }
            ,
            t.prototype.changeCursor = function(e) {
                document.body.classList.add(e)
            }
            ,
            t
        }(i.K);
        t.default = u
    }
}]);
