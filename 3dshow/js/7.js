(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
    106: function(e, t, i) {
        "use strict";
        var r;
        i.d(t, "a", function() {
            return r
        }),
        r = {
            merge: function(e) {
                for (var t = {}, i = 0; i < e.length; i++) {
                    var r = this.clone(e[i]);
                    for (var n in r)
                        t[n] = r[n]
                }
                return t
            },
            clone: function(e) {
                var t = {};
                for (var i in e)
                    for (var r in t[i] = {},
                    e[i]) {
                        var n = e[i][r];
                        n && n.isColor || n && n.isVector2 || n && n.isVector3 || n && n.isVector4 || n && n.isMatrix3 || n && n.isMatrix4 || n && n.isTexture ? t[i][r] = n.clone() : Array.isArray(n) ? t[i][r] = n.slice() : t[i][r] = n
                    }
                return t
            }
        }
    },
    107: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var r = i(60)
          , n = i(106);
        function s(e) {
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
            void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
            this.setValues(e))
        }
        s.prototype = Object.create(r.a.prototype),
        s.prototype.constructor = s,
        s.prototype.isShaderMaterial = !0,
        s.prototype.copy = function(e) {
            return r.a.prototype.copy.call(this, e),
            this.fragmentShader = e.fragmentShader,
            this.vertexShader = e.vertexShader,
            this.uniforms = n.a.clone(e.uniforms),
            this.defines = e.defines,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.lights = e.lights,
            this.clipping = e.clipping,
            this.skinning = e.skinning,
            this.morphTargets = e.morphTargets,
            this.morphNormals = e.morphNormals,
            this.extensions = e.extensions,
            this
        }
        ,
        s.prototype.toJSON = function(e) {
            var t = r.a.prototype.toJSON.call(this, e);
            return t.uniforms = this.uniforms,
            t.vertexShader = this.vertexShader,
            t.fragmentShader = this.fragmentShader,
            t
        }
    },
    147: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var r = i(107);
        function n(e) {
            r.a.call(this, e),
            this.type = "RawShaderMaterial"
        }
        n.prototype = Object.create(r.a.prototype),
        n.prototype.constructor = n,
        n.prototype.isRawShaderMaterial = !0
    },
    187: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return a
        });
        var r = i(52)
          , n = i(25)
          , s = i(5)
          , o = i(17);
        function a(e, t, i, r, h, l, u, c, p, g) {
            Object.defineProperty(this, "id", {
                value: f++
            }),
            this.uuid = s.a.generateUUID(),
            this.name = "",
            this.sourceFile = "",
            this.image = void 0 !== e ? e : a.DEFAULT_IMAGE,
            this.mipmaps = [],
            this.mapping = void 0 !== t ? t : a.DEFAULT_MAPPING,
            this.wrapS = void 0 !== i ? i : n.j,
            this.wrapT = void 0 !== r ? r : n.j,
            this.magFilter = void 0 !== h ? h : n.M,
            this.minFilter = void 0 !== l ? l : n.N,
            this.anisotropy = void 0 !== p ? p : 1,
            this.format = void 0 !== u ? u : n.Qa,
            this.type = void 0 !== c ? c : n.vb,
            this.offset = new o.a(0,0),
            this.repeat = new o.a(1,1),
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = void 0 !== g ? g : n.L,
            this.version = 0,
            this.onUpdate = null
        }
        a.DEFAULT_IMAGE = void 0,
        a.DEFAULT_MAPPING = n.tb,
        a.prototype = {
            constructor: a,
            isTexture: !0,
            set needsUpdate(e) {
                !0 === e && this.version++
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.image = e.image,
                this.mipmaps = e.mipmaps.slice(0),
                this.mapping = e.mapping,
                this.wrapS = e.wrapS,
                this.wrapT = e.wrapT,
                this.magFilter = e.magFilter,
                this.minFilter = e.minFilter,
                this.anisotropy = e.anisotropy,
                this.format = e.format,
                this.type = e.type,
                this.offset.copy(e.offset),
                this.repeat.copy(e.repeat),
                this.generateMipmaps = e.generateMipmaps,
                this.premultiplyAlpha = e.premultiplyAlpha,
                this.flipY = e.flipY,
                this.unpackAlignment = e.unpackAlignment,
                this.encoding = e.encoding,
                this
            },
            toJSON: function(e) {
                if (void 0 !== e.textures[this.uuid])
                    return e.textures[this.uuid];
                var t = {
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
                    var i = this.image;
                    void 0 === i.uuid && (i.uuid = s.a.generateUUID()),
                    void 0 === e.images[i.uuid] && (e.images[i.uuid] = {
                        uuid: i.uuid,
                        url: function(e) {
                            var t;
                            return void 0 !== e.toDataURL ? t = e : ((t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = e.width,
                            t.height = e.height,
                            t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)),
                            t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
                        }(i)
                    }),
                    t.image = i.uuid
                }
                return e.textures[this.uuid] = t,
                t
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(e) {
                if (this.mapping === n.tb) {
                    if (e.multiply(this.repeat),
                    e.add(this.offset),
                    e.x < 0 || e.x > 1)
                        switch (this.wrapS) {
                        case n.gb:
                            e.x = e.x - Math.floor(e.x);
                            break;
                        case n.j:
                            e.x = e.x < 0 ? 0 : 1;
                            break;
                        case n.U:
                            1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                        }
                    if (e.y < 0 || e.y > 1)
                        switch (this.wrapT) {
                        case n.gb:
                            e.y = e.y - Math.floor(e.y);
                            break;
                        case n.j:
                            e.y = e.y < 0 ? 0 : 1;
                            break;
                        case n.U:
                            1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                        }
                    this.flipY && (e.y = 1 - e.y)
                }
            }
        },
        Object.assign(a.prototype, r.a.prototype);
        var f = 0
    },
    282: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var r = i(89);
        function n(e, t, i, n) {
            this.ray = new r.a(e,t),
            this.near = i || 0,
            this.far = n || 1 / 0,
            this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            },
            Object.defineProperties(this.params, {
                PointCloud: {
                    get: function() {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                        this.Points
                    }
                }
            })
        }
        function s(e, t) {
            return e.distance - t.distance
        }
        function o(e, t, i, r) {
            if (!1 !== e.visible && (e.raycast(t, i),
            !0 === r))
                for (var n = e.children, s = 0, a = n.length; s < a; s++)
                    o(n[s], t, i, !0)
        }
        n.prototype = {
            constructor: n,
            linePrecision: 1,
            set: function(e, t) {
                this.ray.set(e, t)
            },
            setFromCamera: function(e, t) {
                t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
                this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
                this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
            },
            intersectObject: function(e, t) {
                var i = [];
                return o(e, this, i, t),
                i.sort(s),
                i
            },
            intersectObjects: function(e, t) {
                var i = [];
                if (!1 === Array.isArray(e))
                    return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                    i;
                for (var r = 0, n = e.length; r < n; r++)
                    o(e[r], this, i, t);
                return i.sort(s),
                i
            }
        }
    }
    
}]);
