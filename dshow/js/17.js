(window.webpackJsonp = window.webpackJsonp || []).push([[17], {
    106: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
            return r
        }),
        r = {
            merge: function(t) {
                for (var e = {}, n = 0; n < t.length; n++) {
                    var r = this.clone(t[n]);
                    for (var o in r)
                        e[o] = r[o]
                }
                return e
            },
            clone: function(t) {
                var e = {};
                for (var n in t)
                    for (var r in e[n] = {},
                    t[n]) {
                        var o = t[n][r];
                        o && o.isColor || o && o.isVector2 || o && o.isVector3 || o && o.isVector4 || o && o.isMatrix3 || o && o.isMatrix4 || o && o.isTexture ? e[n][r] = o.clone() : Array.isArray(o) ? e[n][r] = o.slice() : e[n][r] = o
                    }
                return e
            }
        }
    },
    107: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = n(60)
          , o = n(106);
        function i(t) {
            r.a.call(this),
            this.type = "ShaderMaterial",
            this.defines = {},
            this.uniforms = {},
            this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
            this.linewidth = 1,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.clipping = !1,
            this.skinning = !1,
            this.morphTargets = !1,
            this.morphNormals = !1,
            this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            },
            this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            },
            this.index0AttributeName = void 0,
            void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
            this.setValues(t))
        }
        i.prototype = Object.create(r.a.prototype),
        i.prototype.constructor = i,
        i.prototype.isShaderMaterial = !0,
        i.prototype.copy = function(t) {
            return r.a.prototype.copy.call(this, t),
            this.fragmentShader = t.fragmentShader,
            this.vertexShader = t.vertexShader,
            this.uniforms = o.a.clone(t.uniforms),
            this.defines = t.defines,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.lights = t.lights,
            this.clipping = t.clipping,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this.morphNormals = t.morphNormals,
            this.extensions = t.extensions,
            this
        }
        ,
        i.prototype.toJSON = function(t) {
            var e = r.a.prototype.toJSON.call(this, t);
            return e.uniforms = this.uniforms,
            e.vertexShader = this.vertexShader,
            e.fragmentShader = this.fragmentShader,
            e
        }
    },
    108: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r, o = n(19), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.from = e,
                r.to = n,
                r
            }
            return i(e, t),
            e
        }(o.a)
    },
    109: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r, o = n(19), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.floorIndex = e,
                r.floorName = n,
                r
            }
            return i(e, t),
            e
        }(o.a)
    },
    147: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(107);
        function o(t) {
            r.a.call(this, t),
            this.type = "RawShaderMaterial"
        }
        o.prototype = Object.create(r.a.prototype),
        o.prototype.constructor = o,
        o.prototype.isRawShaderMaterial = !0
    },
    149: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return c
        });
        var r, o = n(11), i = n(53), a = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), s = function(t) {
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
        }, c = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.currentFloor = -1,
                r.totalFloors = 1,
                r.currentFloor = -1,
                r.floorNames = n,
                r.transition = {
                    from: -1,
                    to: -1,
                    progress: new i.a(0)
                },
                e && (r.totalFloors = e.count(),
                r.floors = e),
                r
            }
            return a(e, t),
            e.prototype.getFloor = function(t) {
                try {
                    for (var e = s(this.floors), n = e.next(); !n.done; n = e.next()) {
                        var r = n.value;
                        if (r.floorIndex === t)
                            return r
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = e.return) && i.call(e)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return null;
                var o, i
            }
            ,
            e.prototype.clone = function() {
                var t = new e(this.floors,this.floorNames);
                return t.currentFloor = this.currentFloor,
                t.copyTransition(this.transition),
                t
            }
            ,
            e.prototype.update = function(t) {
                this.currentFloor = t.currentFloor,
                this.totalFloors = t.totalFloors,
                this.floorNames = t.floorNames.map(function(t) {
                    return t
                }),
                this.transition = this.copyTransition(t.transition),
                this.floors = t.floors
            }
            ,
            e.prototype.copyTransition = function(t) {
                return {
                    from: t.from,
                    to: t.to,
                    progress: t.progress.clone()
                }
            }
            ,
            e
        }(o.a)
    },
    152: function(t, e) {
        t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n"
    },
    153: function(t, e) {
        t.exports = "precision highp float;\nprecision highp int;\n\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
    },
    187: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return s
        });
        var r = n(52)
          , o = n(25)
          , i = n(5)
          , a = n(17);
        function s(t, e, n, r, u, p, l, h, f, y) {
            Object.defineProperty(this, "id", {
                value: c++
            }),
            this.uuid = i.a.generateUUID(),
            this.name = "",
            this.sourceFile = "",
            this.image = void 0 !== t ? t : s.DEFAULT_IMAGE,
            this.mipmaps = [],
            this.mapping = void 0 !== e ? e : s.DEFAULT_MAPPING,
            this.wrapS = void 0 !== n ? n : o.j,
            this.wrapT = void 0 !== r ? r : o.j,
            this.magFilter = void 0 !== u ? u : o.M,
            this.minFilter = void 0 !== p ? p : o.N,
            this.anisotropy = void 0 !== f ? f : 1,
            this.format = void 0 !== l ? l : o.Qa,
            this.type = void 0 !== h ? h : o.vb,
            this.offset = new a.a(0,0),
            this.repeat = new a.a(1,1),
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = void 0 !== y ? y : o.L,
            this.version = 0,
            this.onUpdate = null
        }
        s.DEFAULT_IMAGE = void 0,
        s.DEFAULT_MAPPING = o.tb,
        s.prototype = {
            constructor: s,
            isTexture: !0,
            set needsUpdate(t) {
                !0 === t && this.version++
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.image = t.image,
                this.mipmaps = t.mipmaps.slice(0),
                this.mapping = t.mapping,
                this.wrapS = t.wrapS,
                this.wrapT = t.wrapT,
                this.magFilter = t.magFilter,
                this.minFilter = t.minFilter,
                this.anisotropy = t.anisotropy,
                this.format = t.format,
                this.type = t.type,
                this.offset.copy(t.offset),
                this.repeat.copy(t.repeat),
                this.generateMipmaps = t.generateMipmaps,
                this.premultiplyAlpha = t.premultiplyAlpha,
                this.flipY = t.flipY,
                this.unpackAlignment = t.unpackAlignment,
                this.encoding = t.encoding,
                this
            },
            toJSON: function(t) {
                if (void 0 !== t.textures[this.uuid])
                    return t.textures[this.uuid];
                var e = {
                    metadata: {
                        version: 4.4,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    wrap: [this.wrapS, this.wrapT],
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY
                };
                if (void 0 !== this.image) {
                    var n = this.image;
                    void 0 === n.uuid && (n.uuid = i.a.generateUUID()),
                    void 0 === t.images[n.uuid] && (t.images[n.uuid] = {
                        uuid: n.uuid,
                        url: function(t) {
                            var e;
                            return void 0 !== t.toDataURL ? e = t : ((e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width,
                            e.height = t.height,
                            e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)),
                            e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                        }(n)
                    }),
                    e.image = n.uuid
                }
                return t.textures[this.uuid] = e,
                e
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(t) {
                if (this.mapping === o.tb) {
                    if (t.multiply(this.repeat),
                    t.add(this.offset),
                    t.x < 0 || t.x > 1)
                        switch (this.wrapS) {
                        case o.gb:
                            t.x = t.x - Math.floor(t.x);
                            break;
                        case o.j:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case o.U:
                            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                        }
                    if (t.y < 0 || t.y > 1)
                        switch (this.wrapT) {
                        case o.gb:
                            t.y = t.y - Math.floor(t.y);
                            break;
                        case o.j:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case o.U:
                            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                        }
                    this.flipY && (t.y = 1 - t.y)
                }
            }
        },
        Object.assign(s.prototype, r.a.prototype);
        var c = 0
    },
    188: function(t, e, n) {
        "use strict";
        var r, o = n(19), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.fromMode = n,
                r.toMode = e,
                r.timestamp = Date.now(),
                r
            }
            return i(e, t),
            e
        }(o.a);
        e.a = a
    },
    190: function(t, e, n) {
        "use strict";
        var r, o = n(19), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.fromSweep = n,
                r.toSweep = e,
                r.timestamp = Date.now(),
                r
            }
            return i(e, t),
            e
        }(o.a);
        e.a = a
    },
    192: function(t, e, n) {
        "use strict";
        var r, o = n(188), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e
        }(o.a);
        e.a = a
    },
    193: function(t, e, n) {
        "use strict";
        var r, o = n(190), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e
        }(o.a);
        e.a = a
    },
    195: function(t, e, n) {
        "use strict";
        var r, o = n(188), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t),
            e
        }(o.a);
        e.a = a
    },
    196: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r, o = n(11), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.width = window.innerWidth,
                e.height = window.innerHeight,
                e.aspectRatio = e.width / e.height,
                e.x = 0,
                e.y = 0,
                e
            }
            return i(e, t),
            e.prototype.update = function(t) {
                this.width = t.width,
                this.height = t.height,
                this.aspectRatio = t.width / t.height,
                this.x = t.x,
                this.y = t.y
            }
            ,
            e
        }(o.a)
    },
    202: function(t, e, n) {
        "use strict";
        var r = n(187);
        e.a = {
            loadBase64: function(t, e) {
                var n = new r.a;
                n.image = document.createElement("img");
                var o = e ? "data:image/" + e + ";base64," + t : t;
                return n.image.setAttribute("src", o),
                n.needsUpdate = !0,
                n
            }
        }
    },
    204: function(t, e, n) {
        "use strict";
        var r, o = n(190), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e(e, n, r, o) {
                var i = t.call(this, e, o) || this;
                return i.alignmentType = n,
                i.placementType = r,
                i
            }
            return i(e, t),
            e
        }(o.a);
        e.a = a
    },
    213: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r, o = n(11), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.tags = {},
                e.visitedTags = [],
                e.viewedTags = 0,
                e
            }
            return i(e, t),
            e.prototype.update = function(t) {
                this.tags = t.tags
            }
            ,
            e.prototype.addTag = function(t) {
                this.tags[t.sid] = t
            }
            ,
            e.prototype.visitTag = function(t) {
                this.viewedTags++,
                -1 === this.visitedTags.indexOf(t) && this.visitedTags.push(t)
            }
            ,
            e.prototype.getViewedTagCount = function() {
                return this.viewedTags
            }
            ,
            e.prototype.getVisitedTags = function() {
                return this.visitedTags
            }
            ,
            e.prototype.getTag = function(t) {
                return this.tags[t]
            }
            ,
            e.prototype.getTagCount = function() {
                return Object.keys(this.tags).length
            }
            ,
            e.prototype.iterate = function(t) {
                for (var e in this.tags)
                    t(this.tags[e])
            }
            ,
            e
        }(o.a)
    },
    225: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a
        }),
        n.d(e, "c", function() {
            return s
        }),
        n.d(e, "a", function() {
            return c
        });
        var r, o = n(19), i = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), a = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.sid = e,
                r.hovering = n,
                r
            }
            return i(e, t),
            e
        }(o.a), s = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.sid = e,
                n
            }
            return i(e, t),
            e
        }(o.a), c = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.sid = e,
                n
            }
            return i(e, t),
            e
        }(o.a)
    },
    229: function(t, e, n) {
        "use strict";
        n.d(e, "f", function() {
            return i
        }),
        n.d(e, "e", function() {
            return a
        }),
        n.d(e, "d", function() {
            return s
        }),
        n.d(e, "a", function() {
            return c
        }),
        n.d(e, "c", function() {
            return u
        }),
        n.d(e, "g", function() {
            return p
        }),
        n.d(e, "b", function() {
            return l
        });
        var r = n(14)
          , o = .25
          , i = function(t) {
            return function(e) {
                return e !== t
            }
        }
          , a = function(t) {
            return function(e) {
                return -1 !== t.neighbours.indexOf(e.id)
            }
        }
          , s = function(t) {
            return function(e) {
                return t === e || a(t)(e)
            }
        }
          , c = function(t, e, n) {
            return void 0 === n && (n = o),
            function(r) {
                return r.position.clone().sub(t).normalize().dot(e) > n
            }
        }
          , u = function() {
            return function(t) {
                return t.enabled
            }
        }
          , p = function(t) {
            return t.placementType === r.b.MANUAL
        }
          , l = function() {
            return function(t) {
                return t.alignmentType === r.a.ALIGNED
            }
        }
    },
    231: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o
        }),
        n.d(e, "e", function() {
            return i
        }),
        n.d(e, "d", function() {
            return a
        }),
        n.d(e, "a", function() {
            return s
        }),
        n.d(e, "c", function() {
            return c
        });
        var r = n(5)
          , o = 1e3 / 60
          , i = r.a.degToRad(70)
          , a = -i
          , s = .05
          , c = .1 / 60
    },
    239: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = n(60)
          , o = n(23);
        function i(t) {
            r.a.call(this),
            this.type = "LineBasicMaterial",
            this.color = new o.a(16777215),
            this.linewidth = 1,
            this.linecap = "round",
            this.linejoin = "round",
            this.lights = !1,
            this.setValues(t)
        }
        i.prototype = Object.create(r.a.prototype),
        i.prototype.constructor = i,
        i.prototype.isLineBasicMaterial = !0,
        i.prototype.copy = function(t) {
            return r.a.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.linewidth = t.linewidth,
            this.linecap = t.linecap,
            this.linejoin = t.linejoin,
            this
        }
    },
    240: function(t, e, n) {
        "use strict";
        n.d(e, "c", function() {
            return i
        }),
        n.d(e, "b", function() {
            return a
        }),
        n.d(e, "a", function() {
            return s
        });
        var r = -1
          , o = 10
          , i = function(t, e) {
            return void 0 === e && (e = r),
            function(n) {
                return t.distanceToSquared(n.position) * e
            }
        }
          , a = function(t, e) {
            return void 0 === e && (e = r),
            function(n) {
                return t.distanceTo(n.position) * e
            }
        }
          , s = function(t, e, n) {
            return void 0 === n && (n = o),
            function(r) {
                return r.position.clone().sub(t).normalize().dot(e) * n
            }
        }
    },
    268: function(t, e, n) {
        "use strict";
        var r, o, i, a = n(31), s = n(89), c = n(7), u = n(66), p = n(1), l = n(239), h = n(87);
        function f(t, e) {
            y.call(this, t, e),
            this.type = "LineSegments"
        }
        function y(t, e, n) {
            if (1 === n)
                return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
                new f(t,e);
            u.a.call(this),
            this.type = "Line",
            this.geometry = void 0 !== t ? t : new h.a,
            this.material = void 0 !== e ? e : new l.a({
                color: 16777215 * Math.random()
            })
        }
        f.prototype = Object.assign(Object.create(y.prototype), {
            constructor: f,
            isLineSegments: !0
        }),
        n.d(e, "a", function() {
            return y
        }),
        y.prototype = Object.assign(Object.create(u.a.prototype), {
            constructor: y,
            isLine: !0,
            raycast: (r = new c.a,
            o = new s.a,
            i = new a.a,
            function(t, e) {
                var n = t.linePrecision
                  , a = n * n
                  , s = this.geometry
                  , c = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(),
                i.copy(s.boundingSphere),
                i.applyMatrix4(c),
                !1 !== t.ray.intersectsSphere(i)) {
                    r.getInverse(c),
                    o.copy(t.ray).applyMatrix4(r);
                    var u = new p.a
                      , l = new p.a
                      , h = new p.a
                      , f = new p.a
                      , y = this && this.isLineSegments ? 2 : 1;
                    if (s && s.isBufferGeometry) {
                        var d = s.index
                          , g = s.attributes.position.array;
                        if (null !== d)
                            for (var m = d.array, v = 0, w = m.length - 1; v < w; v += y) {
                                var A = m[v]
                                  , b = m[v + 1];
                                u.fromArray(g, 3 * A),
                                l.fromArray(g, 3 * b),
                                o.distanceSqToSegment(u, l, f, h) > a || (f.applyMatrix4(this.matrixWorld),
                                (T = t.ray.origin.distanceTo(f)) < t.near || T > t.far || e.push({
                                    distance: T,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                            }
                        else
                            for (v = 0,
                            w = g.length / 3 - 1; v < w; v += y)
                                u.fromArray(g, 3 * v),
                                l.fromArray(g, 3 * v + 3),
                                o.distanceSqToSegment(u, l, f, h) > a || (f.applyMatrix4(this.matrixWorld),
                                (T = t.ray.origin.distanceTo(f)) < t.near || T > t.far || e.push({
                                    distance: T,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                    } else if (s && s.isGeometry) {
                        var _ = s.vertices
                          , x = _.length;
                        for (v = 0; v < x - 1; v += y) {
                            var T;
                            o.distanceSqToSegment(_[v], _[v + 1], f, h) > a || (f.applyMatrix4(this.matrixWorld),
                            (T = t.ray.origin.distanceTo(f)) < t.near || T > t.far || e.push({
                                distance: T,
                                point: h.clone().applyMatrix4(this.matrixWorld),
                                index: v,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                        }
                    }
                }
            }
            ),
            clone: function() {
                return new this.constructor(this.geometry,this.material).copy(this)
            }
        })
    },
    484: function(t, e) {//tag 背景图
        //t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYPFgoIKnA4CwAAAkVJREFUeNrt3Uluw0AMRFHTvv+NrSibBAgyILGjodn16gbS/yxyYUOXi0SnZnyodV3XXV5WVREgBHaKFAV6tgwFerYMBXq2DAV8tggFfLYIBXy2CAV8tggFfrYEBXy2CAV+tgQFfrYEBXy2CAV+tgQFfrYEBX62BAV+tgQFfrYEBX62BAV+tgQFfrYEBX62BAV+tgRXry5cHNOf3QIFfrYEBX62BG4AN4DpT26BAj9bAivACjD9yS2gATSA6U9uAQ2gAUx/cgtoAA1g+pNbQAOEhwBWgPpPXgMawAoQK0D9x64BDWAFiBWg/mPXgAawAoQAQgAJPgIdgLmHoAawAoQAQgAhgBBACCAEEAIIAYQAQgAhgBBACCAEEAIIAYQAQgAhgEwQfw1LBe+vYUIAIQAB3rIsy4vXEXwEOgTzDkArQAhgBXyKNZBT/xpACGAFfBNrIKP+NYAQwAr4IdbA/PWvAcR3A5OnXwOIbwcnT78GkN8bQAvMO/1/bgA/FglvAC0w5/Q/JAAJ5oPvCJTHGkALzDX9TwlAgnngPy0ACeaA7waQ5xtAC/Sf/n8LQILe8DcRgAR94W8mAAl6wt9UABL0g7+5ACToBX8XAUjQB/5uApCgB/xdBSDB+PB3F4AEY8M/RAAijAn+cAFIMB78wwUgwVjwTxGACGOAf8/1zAf2a+Nz4Z/aANrgXPBDCZAmwgjghxRgdhFGAj+0ALOJMCL4FgJ0lmFk6C0F6CBDF+jtBfiY+/2+3G63K+ihAhzZEN1hi3zJK04kLKvtOfg1AAAAAElFTkSuQmCC"
    
        t.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjMzcHgiIGhlaWdodD0iMzNweCIgdmlld0JveD0iMCAwIDMzIDMzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4xICg1MTE0NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxjaXJjbGUgaWQ9InBhdGgtMSIgY3g9IjExLjUiIGN5PSIxMS41IiByPSI2LjUiPjwvY2lyY2xlPgogICAgICAgIDxmaWx0ZXIgeD0iLTExNy4zJSIgeT0iLTExNy4zJSIgd2lkdGg9IjMzNC42JSIgaGVpZ2h0PSIzMzQuNiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlTW9ycGhvbG9neSByYWRpdXM9IjAuMjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjEiPjwvZmVNb3JwaG9sb2d5PgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIwIiBpbj0ic2hhZG93U3ByZWFkT3V0ZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlTW9ycGhvbG9neSByYWRpdXM9IjEiIG9wZXJhdG9yPSJlcm9kZSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0lubmVyIj48L2ZlTW9ycGhvbG9neT4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49InNoYWRvd0lubmVyIiByZXN1bHQ9InNoYWRvd0lubmVyIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd09mZnNldE91dGVyMSIgaW4yPSJzaGFkb3dJbm5lciIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVDb21wb3NpdGU+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgICAwIDAgMCAwIDEgICAwIDAgMCAwIDEgIDAgMCAwIDEgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxjaXJjbGUgaWQ9InBhdGgtMyIgY3g9IjExLjUiIGN5PSIxMS41IiByPSIyLjUiPjwvY2lyY2xlPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3MC4wJSIgeT0iLTE3MC4wJSIgd2lkdGg9IjQ0MC4wJSIgaGVpZ2h0PSI0NDAuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci00Ij4KICAgICAgICAgICAgPGZlTW9ycGhvbG9neSByYWRpdXM9IjEuNSIgb3BlcmF0b3I9ImRpbGF0ZSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd1NwcmVhZE91dGVyMSI+PC9mZU1vcnBob2xvZ3k+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjAiIGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29tcG9zaXRlPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgIDAgMCAwIDAgMSAgMCAwIDAgMSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNS1Db3B5LTQiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNiIgZmlsbC1vcGFjaXR5PSIwLjA5Njk0ODU5NiIgZmlsbD0iIzAwMDAwMCIgY3g9IjExLjUiIGN5PSIxMS41IiByPSI5LjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4wODUxNzkwMzIzLDExLjU5OTc0OTUgTDIzLjAzNzcxOTUsMTEuNTk5NzQ5NSIgaWQ9IlBhdGgtMjQzIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjQwMzQxOTM4NCIgc3Ryb2tlLWRhc2hhcnJheT0iMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuNTAzODY0MiwwLjA2NjcyMjgwMjUgTDExLjUwMzg2NDIsMjMuMTEwNDA2MSIgaWQ9IlBhdGgtMjQ0IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjQwMzQxOTM4NCIgc3Ryb2tlLWRhc2hhcnJheT0iMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iT3ZhbC0xMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC41IiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iT3ZhbC0xMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNCkiIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMSIgY3g9IjExLjUiIGN5PSIxMS41IiByPSIzIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
    },
    485: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYPFigDGhCnowAABQFJREFUeNrtXTtyFEEMHXX5FK7iAiYFQ+KAiMyZCQnxRXwVFwkngSKD2BQXEYlNLXaZnZ7RX0/xbrek96RW9/RnWSCthSoaxcys4iwiAgGagN2FFATQe5OBAHpvMhBA700GAvC9iUBVgZd2dmTd9siIAvxOB9/RI9GI3kftf3a0t0YG2OOEaOk0qy2UyWFZKutMthGc09tWiuyQKkuvke2miE6ouOYe1QcE4HsTgSIY2gX4iP4ZHcFn5kt+KpfmFfhK2zXXDMgR/FdE9D3ivNyaqMz8YlmW3x46kIfjNQyxXlnzskG6X8psQJjlVGObJPtLqXj1DSGWvhyZFI70EUVTv3tf3VkEAWmDLwV8xmmehe17+6DIymFHkL6fKaJS2BFk5+8RzUlVwY9qG0ViY2XwLfyzpV2KoEQX4C18NdsmAfzeJBiRDekg3ruGhpCi7wC+eXH4XqI9kc+Rs4wE+DZ+XNPeiKY0MoHtUHCyU6nTLOBnISoz84yuRETP6bqmLdrjiMhOjXw0zJKsx9oaxcC/1j4atizLdaah4GidYEEAbfC9NpVGsmsrVgTwe5PgZEkqUbaSP+iRds9CxuiPeo4ggr2z2A1Efg/dNs0CokV/Bgd7b3mf7X9EWQCpFF2ZhqiZDHDqFf0p79/zXYhajRWt7cgr/Wc/OOrli7U4DmllAb6eDRr4jKhAVDoyHtl/otNAfOrNt9YwIoJX8lr2QDYdYh1xIehN4QB+G46YUtW/2GHF4tfFWPvpGK7RMsCvBsP4F2SAptHv4atVGQDVe9/ZxLEh4AOiP+aMYMLnH48OAUj/fYeBsUBaCwgAAtQYEzvWAcgAEBAA4kwArCHknkkgAyADQEAACAgAAQEgIMC8dH3vJ4JI+B4ZABkAAgI4S8fFpCg2IwMgA0BAgOfT1BVclH6o+S+GR++3wbawmOO/BC5/t4RhLt93DWFUiwxU/ygCIZIEsH4FnJk/FY5+Edsk6zJa82McEI2V/qUKwH8yQNTz6wBfrwAUrwEwm7AFz6wI9GBvpSwQ2X9Dml3RbsWqBL4GPjOvhp2hHsihOzO/1FgH+Dnx2/PuJFDQecanP1ZnhBnlcVl0Dttn8Btahnnfmg3w5YcAzKcLDlVp3wyKNhxkfC1kWRK/GfRgbPVHo7RlbGGedy3wWBdmvnEA/qb0s3GSw4BlpFgQLqIdKgTISgINIrR8OnZFxxeRa4RDsf6/oZ27MCBthlUrmipFv8g6gMeb9wBfLphEnoxh5luQwBz8W4n2TNMNhgMb3820J7YUvAVMZAL/wBHvHJnAF/zZNkkj2rdGdhciaPlnS7ubUzBIkB980RpAaoGicl2wA3y1U9q0E2TWBLNKNtD2w572h6Zh96uoF3vaz5wR9urPzBfaQSZ1no8NouD1sixfk2B/TkTfovtUjACWCkceGiztk+rL/JNpxYMj1jZJ9ueyc7fCjmEvG1zOBko75r44vJXu91C0CjqN9pn51itw1Cps64slJHSLpIuVbmoLQTOXGFjvLKJnxBj4iwhBQlEY7hWBHhLJJ9TRaADvQIAtlXoVIkS2m6I7IzMRMthqfjh0S8F1sDv7LAHoZ1u2knt990h7rq7S4VBPWyi787ycWOVy7DCvh0t8M38kV4JgX0meFIr0mTtkcVV1W1jEYjZ0dY0dQc0JkJkMWaaubebXAL0QASKRIftqJa5lbwQ2BPJE/gA4gL5xbiNHuQAAAABJRU5ErkJggg=="
    },
    486: function(t, e) {
        t.exports = "uniform float opacity;\nuniform vec3 color;\nuniform sampler2D bg;\nuniform sampler2D mask;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 maskColor = texture2D(mask, vUv);\n  vec4 bgColor = texture2D(bg, vUv);\n  vec3 mappedColor = mix(bgColor.rgb, color, maskColor.a);\n  gl_FragColor = vec4(mappedColor, bgColor.a * opacity);\n}\n"
    },
    487: function(t, e) {
        t.exports = "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
    },
    51: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(1)
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
    676: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(213), a = n(65), s = n(229), c = n(240), importClassFun = n, u = {
            visibility: {
                anyDistance: !0,
                visibleDistance: 8,
                cameraClearance: .1
            },
            navigate: {
                tiltTolerance: 25
            }
        }, p = n(231), l = n(1), h = n(5), f = n(66), y = n(51), d = n(6), g = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), m = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }, v = function(t, e) {
            var n, r, o, i, a = {
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
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                n = o = 0
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
        }, w = function(t) {
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
        }, A = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, i = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, b = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "navigation",
                e.navigateToTag = function(t) {
                    return m(e, void 0, void 0, function() {
                        var e, n, r, i, a, u, p, h, f, g, m, A, b, _, x, T, O, S;
                        return v(this, function(v) {
                            switch (v.label) {
                            case 0:
                                if (!this.sweepModule.canMoveToSweep())
                                    return [2];

                                

                                e = [],
                                n = [],
                                r = this.tagData.getTag(t),
                                i = r.anchorPosition.clone().add(r.stemVector),
                                e.push(s.b()),
                                this.viewmodeModule.currentMode === d.a.Panorama && (.5,
                                a = this.sweepData.currentSweep,
                                u = this.sweepData.getSweep(a),
                                p = u.position.clone().sub(i).normalize(),
                                e.push(s.a(i, p, .5)),
                                e.push(s.d(u)),
                                n.push(c.a(i, p))),
                                e.push(this.withinLatitudeFilter(i)),
                                e.push(this.notTooCloseFilter(i)),
                                e.push(this.notTooFarFilter(i)),
                                -2,
                                n.push(c.c(i, -2)),
                                h = this.sweepData.sortByScore(e, n),
                                this.raycaster.getRaycaster().enableForGroup(this.mattertagRaycastGroup, !1),
                                f = new l.a,
                                g = null;

                    
                                try {
                                    for (m = w(h),
                                    A = m.next(); !A.done; A = m.next()){
                                        b = A.value;
                                        _ = b.sweep;
                                        f.copy(i).sub(_.position).normalize();
                                        x = _.position.distanceTo(i);//
                                        console.log(_);

                                       /* this.raycaster.getRaycaster().enableAllGroups();
                                        var casters = this.raycaster.cast(_.position, f);
                                        this.raycaster.getRaycaster().enableForGroup(this.mattertagRaycastGroup, !1);*/

                                        if (0 === (T = this.raycaster.cast(_.position, f)).length || T[0].distance > x) {
                                            this.dummyCamera.up.copy(y.a.UP),
                                            this.dummyCamera.position.copy(i),
                                            this.dummyCamera.lookAt(_.position),
                                            g = this.viewmodeModule.currentMode !== d.a.Panorama ? this.viewmodeModule.switchToMode(d.a.Panorama, o.Ja.Interpolate, {
                                                rotation: this.dummyCamera.getWorldQuaternion(),
                                                sweepID: _.id
                                            }) : this.sweepModule.moveToSweep({
                                                transitionType: o.Ja.Interpolate,
                                                sweepId: _.id,
                                                rotation: this.dummyCamera.getWorldQuaternion()
                                            }).nativePromise();
                                            break
                                        }
                                    }
                                } catch (t) {
                                    O = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        A && !A.done && (S = m.return) && S.call(m)
                                    } finally {
                                        if (O)
                                            throw O.error
                                    }
                                }
                                return g ? [4, g] : [3, 2];
                            case 1:
                                v.sent(),
                                this.tagModule.onTagVisited(t),
                                v.label = 2;
                            case 2:
                                return this.raycaster.getRaycaster().enableForGroup(this.mattertagRaycastGroup, !0),
                                [2]
                            }
                        })
                    })
                }
                ,
                e.notTooCloseFilter = function(t) {
                    return function(e) {
                        return Math.abs(e.position.x - t.x) > u.visibility.cameraClearance || Math.abs(e.position.z - t.z) > u.visibility.cameraClearance
                    }
                }
                ,
                e.notTooFarFilter = function(t) {
                    return function(e) {
                        return !!u.visibility.anyDistance || e.position.distanceTo(t) > u.visibility.visibleDistance
                    }
                }
                ,
                e.withinLatitudeFilter = function(t) {
                    return function(e) {
                        var n = (new l.a).copy(t).sub(e.position)
                          , r = -Math.atan(n.y / Math.sqrt(n.x * n.x + n.z * n.z))
                          , o = h.a.degToRad(u.navigate.tiltTolerance);
                        return p.d - o < r && r < p.e + o
                    }
                }
                ,
                e
            }
            return g(e, t),
            e.prototype.init = function(t, e) {
                return m(this, void 0, void 0, function() {
                    var t, n, r, s, c, u, p, l;
                    return v(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return this.dummyCamera = new f.a,
                            this.market = e.market,
                            this.engine = e,
                            [4, Promise.all([e.getModule(o.D), e.getModule(o.Z), e.getModule(o.Na), e.getModule(o.R), e.getModule(o.E), e.market.waitForData(a.a), e.market.waitForData(i.a)])];
                        case 1:
                            return t = A.apply(void 0, [h.sent(), 7]),
                            n = t[0],
                            r = t[1],
                            s = t[2],
                            c = t[3],
                            u = t[4],
                            p = t[5],
                            l = t[6],
                            this.tagModule = n,
                            this.tagData = l,
                            this.sweepModule = r,
                            this.viewmodeModule = s,
                            this.raycaster = c,
                            this.mattertagRaycastGroup = u.raycastGroup,
                            this.sweepData = p,
                            [2]
                        }
                    })
                })
            }
            ,
            e
        }(o.Ha);
        e.default = b
    },
    699: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(225), i = Object.freeze({
            mattertags: {
                enabled: !0,
                enableLinking: !0,
                startup: {
                    hideUntilStart: !0,
                    fadeInDuration: 500,
                    fadeInDelay: 100
                },
                visibility: {
                    anyDistance: !0,
                    visibleDistance: 8,
                    cameraClearance: .1,
                    alphaTestLevel: .05,
                    hideViaFloor: !0,
                    hideOffScreenDisc: !1,
                    hideOffScreenObject: !1
                },
                disc: {
                    opacity: .9,
                    disabledOpacity: .5,
                    scale: {
                        nearBound: 1.5,
                        farBound: 4.8,
                        linkFarBound: !1,
                        linkPercent: 40,
                        maxSize: 80,
                        minSize: 40,
                        baseViewportSize: 800,
                        responsiveness: 100
                    }
                },
                pole: {
                    enabled: !0,
                    height: .5,
                    width: 2,
                    opacity: .5,
                    color: "white"
                },
                animation: {
                    hoverOnClosing: !1,
                    animInDelay: 100,
                    animOutDelay: 50,
                    animInTime: 200,
                    animOutTime: 100
                },
                boardScale: {
                    billboardScale: 1,
                    scaleToDisc: !0,
                    boardToDiscRatio: 1.2
                },
                navigate: {
                    nearestPano: !0,
                    lineOfSight: !0,
                    reactivate: !0,
                    aimAt: "disc",
                    tiltTolerance: 25,
                    rotateSpeedFactor: .6
                }
            }
        }), a = n(145), s = n(1), c = n(5), u = n(23), p = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), l = function(t) {
            function e(e, n, r) {
                var o = t.call(this, e, n) || this;
                o.mat = n,
                o.discScale = 1,
                o.defaultColor = (new u.a).set(n.uniforms.color.value);
                var i = o.defaultColor.getHSL();
                return o.hoverColor = (new u.a).setHSL(i.h, i.s, .8 * i.l),
                o.layers.mask = r.mask,
                o
            }
            return p(e, t),
            e.prototype.dispose = function() {
                this.material.dispose(),
                this.geometry.dispose()
            }
            ,
            e.prototype.update = function(t, e, n, r) {
                var o = t.isActive ? this.hoverColor : this.defaultColor;
                this.mat.uniforms.color.value.copy(o);
                var a = i.mattertags.disc.scale
                  , u = this.getWorldPosition()
                  , p = e.position.distanceTo(u);
                this.quaternion.copy(e.camera.quaternion);
                var l = a.maxSize - (a.maxSize - a.minSize) * c.a.smoothstep(p, a.nearBound, a.farBound)
                  , h = u.clone().project(e.camera)
                  , f = new s.a(r.width / 2,r.height / 2,1).multiply(h)
                  , y = new s.a(l / 2,0,0).add(f)
                  , d = new s.a(2 / r.width,2 / r.height,1).multiply(y).clone().unproject(e.camera).clone().distanceTo(u)
                  , g = 1 + i.mattertags.disc.scale.responsiveness / 100 * (n - 1);
                this.discScale = d * g,
                this.scale.set(this.discScale, this.discScale, this.discScale)
            }
            ,
            e
        }(a.a), h = n(106), f = n(147), y = n(153), d = n(152), g = {
            tags: {
                uniforms: {
                    opacity: {
                        type: "f",
                        value: 1
                    },
                    color: {
                        type: "c",
                        value: new u.a
                    },
                    bg: {
                        type: "t",
                        value: null
                    },
                    mask: {
                        type: "t",
                        value: null
                    }
                },
                vertexShader: d + n(487),
                fragmentShader: y + n(486)
            }
        }, m = function() {
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
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }(), v = function(t) {
            function e(e, n, r) {
                var o = h.a.clone(g.tags.uniforms);
                return o.bg.value = n,
                o.mask.value = r,
                o.color.value.copy(e),
                t.call(this, {
                    fragmentShader: g.tags.fragmentShader,
                    vertexShader: g.tags.vertexShader,
                    uniforms: o,
                    name: "DiscMaterial",
                    transparent: !0,
                    depthWrite: !1
                }) || this
            }
            return m(e, t),
            e
        }(f.a), w = n(87), A = n(26), b = n(239), _ = n(268), x = function() {
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
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }(), T = new b.a({
            linewidth: i.mattertags.pole.width,
            color: i.mattertags.pole.color,
            opacity: i.mattertags.pole.opacity,
            transparent: !0,
            alphaTest: i.mattertags.pole.opacity * i.mattertags.visibility.alphaTestLevel
        }), O = function(t) {
            function e(e, n) {
                var r = this
                  , o = new w.a
                  , i = new Float32Array(6);
                return i[0] = i[1] = i[2] = 0,
                i[3] = e.x,
                i[4] = e.y,
                i[5] = e.z,
                o.addAttribute("position", new A.a(i,3)),
                (r = t.call(this, o, T) || this).geometry = o,
                r.layers.mask = n.mask,
                r
            }
            return x(e, t),
            e.prototype.dispose = function() {
                this.geometry.dispose()
            }
            ,
            e
        }(_.a), S = n(66), M = function() {
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
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }(), k = function(t) {
            function e(e, n, r, o, i) {
                var a = t.call(this) || this;
                a.position.copy(e.anchorPosition);
                var s = new v(e.color,n,r);
                return a.disc = new l(o,s,i),//标注 圈
                a.disc.position.copy(e.stemVector),
                a.pole = new O(e.stemVector,i),
                a.add(a.disc),
               // a.add(a.pole),//tag 连接线
                a
            }
            return M(e, t),
            e.prototype.dispose = function() {
                this.remove(this.disc),
                this.remove(this.pole),
                this.disc.dispose(),
                this.pole.dispose()
            }
            ,
            e.prototype.update = function(t, e, n, r) {
                this.disc.update(t, e, n, r)
            }
            ,
            e
        }(S.a), F = n(202), D = n(148), P = n(73), B = function(t) {
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
        }, E = function() {
            function t(t, e, r, o, i, a, s, c) {
                void 0 === i && (i = P.a.ALL),
                this.scene = t,
                this.raycaster = e,
                this.camera = r,
                this.engine = o,
                this.layer = i,
                this.raycasterGroup = a,
                this.mattertagData = s,
                this.canvas = c,
                this.tagToMesh = {},
                this.textures = {
                    mask: F.a.loadBase64(n(485)),
                    background: F.a.loadBase64(n(484))////tag 背景图
                },

                //1,因为484 中的背景图被我换了 原来130 现在 35
                this.geometry = new D.a(1.5,1.5)
            }
            return t.prototype.init = function(t) {
                var e = this;
                this.mattertagData.iterate(function(t) {
                    var n = new k(t,e.textures.background,e.textures.mask,e.geometry,e.layer);
                    e.tagToMesh[t.sid] = n
                })
            }
            ,
            t.prototype.dispose = function() {
                for (var t in this.deactivate(),
                this.tagToMesh)
                    this.tagToMesh[t].dispose();
                this.textures.background.dispose(),
                this.textures.mask.dispose(),
                this.geometry.dispose()
            }
            ,
            t.prototype.activate = function() {
                for (var t in this.tagToMesh) {
                    var e = this.tagToMesh[t];
                    this.scene.add(e),
                    this.addToRaycaster(t),
                    e.visible = !0
                }
            }
            ,
            t.prototype.deactivate = function() {
                for (var t in this.tagToMesh) {
                    var e = this.tagToMesh[t];
                    this.scene.remove(e),
                    this.removeFromRaycaster(t),
                    e.visible = !1
                }
            }
            ,
            t.prototype.addToRaycaster = function(t) {
                var e = this
                  , n = this.tagToMesh[t]
                  , r = this.raycaster.createCallbackSet();
                r.select = function() {
                    e.engine.broadcast(new o.b(t,!0))
                }
                ,
                r.deselect = function() {
                    e.engine.broadcast(new o.b(t,!1))
                }
                ,
                r.click = function() {
                    e.engine.broadcast(new o.a(t))
                }
                ,
                this.raycaster.addTarget(n.disc, !1, r, this.raycasterGroup)
            }
            ,
            t.prototype.removeFromRaycaster = function(t) {
                var e = this.tagToMesh[t];
                this.raycaster.removeTarget(e.disc)
            }
            ,
            t.prototype.changeVisibility = function(t) {
                try {
                    for (var e = B(Object.keys(this.tagToMesh)), n = e.next(); !n.done; n = e.next()) {
                        var r = n.value
                          , o = this.tagToMesh[r];
                        o.visible = t(r, this.tagToMesh[r].visible),
                        o.disc.visible = o.visible
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (a = e.return) && a.call(e)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                var i, a
            }
            ,
            t.prototype.render = function() {
                var t = this
                  , e = this.getViewportScale(this.canvas);
                this.mattertagData.iterate(function(n) {
                    t.tagToMesh[n.sid].update(n, t.camera, e, t.canvas)
                })
            }
            ,
            t.prototype.getViewportScale = function(t) {
                return Math.sqrt(Math.min(t.width, t.height) / i.mattertags.disc.scale.baseViewportSize)
            }
            ,
            t
        }(), j = n(0), C = n(70), I = n(213), L = n(196), R = function() {
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
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }(), G = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }, V = function(t, e) {
            var n, r, o, i, a = {
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
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                n = o = 0
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
        }, U = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "mattertag-mesh",
                e.tagsEnabled = !1,
                e
            }
            return R(e, t),
            e.prototype.init = function(t, n) {
                return G(this, void 0, void 0, function() {
                    var t, r, o, i, a, s = this;
                    return V(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, n.getModule(j.Oa)];
                        case 1:
                            return t = c.sent().getScene(),
                            [4, n.getModule(j.R)];
                        case 2:
                            return r = c.sent().getRaycaster(),
                            [4, n.market.waitForData(I.a)];
                        case 3:
                            return o = c.sent(),
                            [4, n.market.waitForData(L.a)];
                        case 4:
                            return i = c.sent(),
                            a = n.claimRenderLayer(this.name),
                            this.renderer = new E(t.scene,r,t.cameraRig,n,a,e._raycastGroup,o,i),
                            n.addComponent(this, this.renderer),
                            this.checkEnablement = this.checkEnablement.bind(this),
                            n.market.waitForData(C.a).then(function(t) {
                                s.checkEnablement(t),
                                t.onPropertyChanged("mt", function(e, n) {
                                    s.checkEnablement(t)
                                }),
                                t.onPropertyChanged("mattertags", function(e, n) {
                                    s.checkEnablement(t)
                                })
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.checkEnablement = function(t) {
                var e = this
                  , n = 0 !== t.tryGetProperty("mt", 1)
                  , r = t.tryGetProperty("mattertags", !0);
                this.tagsEnabled = n && r,
                this.renderer.changeVisibility(function() {
                    return e.tagsEnabled
                })
            }
            ,
            e.prototype.changeVisibility = function(t) {
                this.renderer && this.tagsEnabled && this.renderer.changeVisibility(t)
            }
            ,
            e.prototype.showAll = function() {
                this.renderer && this.tagsEnabled && this.renderer.changeVisibility(function() {
                    return !0
                })
            }
            ,
            Object.defineProperty(e.prototype, "raycastGroup", {
                get: function() {
                    return e._raycastGroup
                },
                enumerable: !0,
                configurable: !0
            }),
            e._raycastGroup = "mattertag-mesh",
            e
        }(j.E);
        e.default = U
    },
    720: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(193), a = n(65), s = n(14), c = n(213), u = n(108), p = n(109), l = n(149), h = n(69), f = n(192), y = n(195), d = n(6), g = n(204), m = n(84), v = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), w = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }, A = function(t, e) {
            var n, r, o, i, a = {
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
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                n = o = 0
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
        }, b = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, i = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "mattertag-controller",
                e
            }
            return v(e, t),
            e.prototype.init = function(t, e) {
                return w(this, void 0, void 0, function() {
                    var t, n, r, v, w, _;
                    return A(this, function(A) {
                        switch (A.label) {
                        case 0:
                            return [4, Promise.all([e.getModule(o.E)])];
                        case 1:
                            return t = b.apply(void 0, [A.sent(), 1]),
                            n = t[0],
                            [4, e.market.waitForData(a.a)];
                        case 2:
                            return r = A.sent(),
                            v = function(t) {
                                var e = r.getSweep(t).alignmentType === s.a.ALIGNED;
                                n.changeVisibility(function() {
                                    return e
                                })
                            }
                            ,
                            e.subscribe(i.a, function(t) {
                                return v(t.toSweep)
                            }),
                            (w = r.currentSweep) ? v(w) : e.subscribe(g.a, function(t) {
                                return v(t.toSweep)
                            }, m.b.ONCE),
                            e.subscribe(p.a, function(t) {
                                var r = e.market.tryGetData(c.a)
                                  , o = e.market.tryGetData(h.a);
                                r && o && (o.currentMode !== d.a.Dollhouse && o.currentMode !== d.a.Floorplan || n.changeVisibility(function(e) {
                                    return -1 === t.floorIndex || t.floorIndex === r.getTag(e).floorIndex
                                }))
                            }),
                            e.subscribe(u.a, function(t) {
                                var r = e.market.tryGetData(c.a)
                                  , o = e.market.tryGetData(h.a);
                                r && o && (o.currentMode !== d.a.Dollhouse && o.currentMode !== d.a.Floorplan || n.changeVisibility(function(e, n) {
                                    return n && (-1 === t.to || t.to === r.getTag(e).floorIndex)
                                }))
                            }),
                            _ = function(t) {
                                if (t.toMode === d.a.Dollhouse || t.toMode === d.a.Floorplan) {
                                    var r = e.market.tryGetData(l.a)
                                      , o = e.market.tryGetData(c.a);
                                    if (r && o) {
                                        if (-1 === r.currentFloor)
                                            return n.showAll();
                                        n.changeVisibility(function(t, e) {
                                            return r.currentFloor === o.getTag(t).floorIndex
                                        })
                                    }
                                }
                            }
                            ,
                            e.subscribe(f.a, _),
                            e.subscribe(y.a, _),
                            [2]
                        }
                    })
                })
            }
            ,
            e
        }(o.C);
        e.default = _
    },
    721: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(213), a = n(225), s = n(70), tagManager = n(36), c = (r = Object.setPrototypeOf || {
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
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), u = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }, p = function(t, e) {
            var n, r, o, i, a = {
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
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t],
                                r = 0
                            } finally {
                                n = o = 0
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
        }, l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "mattertag-data",
                e.activeTags = [],
                e
            }
            return c(e, t),
            e.prototype.init = function(t, e) {
                return u(this, void 0, void 0, function() {
                    var n, r, o = this;
                    return p(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return this.engine = e,
                            n = this,
                            [4, t.tagSync.load()];
                        case 1:
                            return n.tags = i.sent(),
                            this.initializeTags(this.tags, e.market),
                            [4, e.market.waitForData(s.a)];
                        case 2:
                            return (r = i.sent()).onPropertyChanged("mt", function(t, e) {
                                0 !== e && o.clearActiveTags()
                            }),
                            r.onPropertyChanged("mattertags", function(t, e) {
                                !1 === e && o.clearActiveTags()
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.clearActiveTags = function() {
                this.activeTags = []
            }
            ,
            e.prototype.onUpdate = function(t) {
                var e = this
                  , n = !1;
                this.data.iterate(function(t) {
                    var r = -1 !== e.activeTags.indexOf(t.sid);
                    r !== t.isActive && (t.isActive = r,
                    n = !0)
                }),
                n && this.engine.market.update(this, this.data)
            }
            ,
            e.prototype.toggleTag = function(t, e) {
                var tag = this.data.getTag(t);
                if (tag) {
                    var n = this.activeTags.indexOf(t);
                    /*if(tag.mediaType == tagManager.a.hotspot || tag.mediaType == tagManager.a.flying) {
                     //   return ;
                    }*/

                    e || -1 === n ? -1 === n && this.activeTags.push(t) : this.activeTags.splice(n, 1),
                    this.onUpdate(0)
                }
            }
            ,
            e.prototype.onTagVisited = function(t) {
                var tag = this.data.getTag(t);

                if(tag.mediaType == tagManager.a.hotspot) {
                    if(undefined != parent && undefined != parent.onClicklogicMedia) {
                        var r = this.intersectTag.closestPanoTowardTag(this.player.mode, this.player.currentPano) || this.player.currentPano;
                        //console.log(r);
                        parent.onClicklogicMedia(this.player.currentPano.id,this.intersectTag.sid,r);
                    }
                        
                   /* this.activeTag = this.intersectTag;    
                    this.activeTag.examine(this.player,false);
                    */
                    return true;
                } else if(tag.mediaType == tagManager.a.flying) {
                   // moveToSweep
                   G_APP.flyto(tag.mediaSrc);
                    return true;
                } else {
                    this.data.visitTag(t),
                    this.engine.broadcast(new a.c(t))
                }

                
            }
            ,
            e.prototype.initializeTags = function(t, e) {
                for (var n in this.data = new i.a,
                t)
                    this.data.addTag(t[n]);
                e.register(this, i.a),
                e.update(this, this.data)
            }
            ,
            e
        }(o.D);
        e.default = l
    }
}]);
