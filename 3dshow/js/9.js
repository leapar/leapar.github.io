(window.webpackJsonp = window.webpackJsonp || []).push([[9], Array(106).concat([function(e, t, n) {
    "use strict";
    var i;
    n.d(t, "a", function() {
        return i
    }),
    i = {
        merge: function(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
                var i = this.clone(e[n]);
                for (var r in i)
                    t[r] = i[r]
            }
            return t
        },
        clone: function(e) {
            var t = {};
            for (var n in e)
                for (var i in t[n] = {},
                e[n]) {
                    var r = e[n][i];
                    r && r.isColor || r && r.isVector2 || r && r.isVector3 || r && r.isVector4 || r && r.isMatrix3 || r && r.isMatrix4 || r && r.isTexture ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
                }
            return t
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(60)
      , r = n(106);
    function a(e) {
        i.a.call(this),
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
    a.prototype = Object.create(i.a.prototype),
    a.prototype.constructor = a,
    a.prototype.isShaderMaterial = !0,
    a.prototype.copy = function(e) {
        return i.a.prototype.copy.call(this, e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = r.a.clone(e.uniforms),
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
    a.prototype.toJSON = function(e) {
        var t = i.a.prototype.toJSON.call(this, e);
        return t.uniforms = this.uniforms,
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var i = n(107);
    function r(e) {
        i.a.call(this, e),
        this.type = "RawShaderMaterial"
    }
    r.prototype = Object.create(i.a.prototype),
    r.prototype.constructor = r,
    r.prototype.isRawShaderMaterial = !0
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(187)
      , r = n(25);
    function a(e, t, n, a, o, s, l, c, u, d) {
        e = void 0 !== e ? e : [],
        t = void 0 !== t ? t : r.k,
        i.a.call(this, e, t, n, a, o, s, l, c, u, d),
        this.flipY = !1
    }
    a.prototype = Object.create(i.a.prototype),
    a.prototype.constructor = a,
    a.prototype.isCubeTexture = !0,
    Object.defineProperty(a.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(e) {
            this.image = e
        }
    })
}
, , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i = n(87)
      , r = n(1)
      , a = n(26);
    function o(e, t, n, o, s, l) {
        i.a.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: o,
            heightSegments: s,
            depthSegments: l
        };
        var c, u, d, f, p = this, m = function(e, t, n) {
            var i = 0;
            return i += (e + 1) * (t + 1) * 2,
            i += (e + 1) * (n + 1) * 2,
            i += (n + 1) * (t + 1) * 2
        }(o = Math.floor(o) || 1, s = Math.floor(s) || 1, l = Math.floor(l) || 1), h = (f = 0,
        f += (c = o) * (u = s) * 2,
        f += c * (d = l) * 2,
        6 * (f += d * u * 2)), g = new (h > 65535 ? Uint32Array : Uint16Array)(h), v = new Float32Array(3 * m), _ = new Float32Array(3 * m), x = new Float32Array(2 * m), E = 0, b = 0, T = 0, M = 0, S = 0;
        function L(e, t, n, i, a, o, s, l, c, u, d) {
            for (var f = o / c, m = s / u, h = o / 2, L = s / 2, w = l / 2, y = c + 1, P = u + 1, R = 0, A = 0, D = new r.a, C = 0; C < P; C++)
                for (var U = C * m - L, I = 0; I < y; I++) {
                    var N = I * f - h;
                    D[e] = N * i,
                    D[t] = U * a,
                    D[n] = w,
                    v[E] = D.x,
                    v[E + 1] = D.y,
                    v[E + 2] = D.z,
                    D[e] = 0,
                    D[t] = 0,
                    D[n] = l > 0 ? 1 : -1,
                    _[E] = D.x,
                    _[E + 1] = D.y,
                    _[E + 2] = D.z,
                    x[b] = I / c,
                    x[b + 1] = 1 - C / u,
                    E += 3,
                    b += 2,
                    R += 1
                }
            for (C = 0; C < u; C++)
                for (I = 0; I < c; I++) {
                    var F = M + I + y * C
                      , O = M + I + y * (C + 1)
                      , G = M + (I + 1) + y * (C + 1)
                      , B = M + (I + 1) + y * C;
                    g[T] = F,
                    g[T + 1] = O,
                    g[T + 2] = B,
                    g[T + 3] = O,
                    g[T + 4] = G,
                    g[T + 5] = B,
                    T += 6,
                    A += 6
                }
            p.addGroup(S, A, d),
            S += A,
            M += R
        }
        L("z", "y", "x", -1, -1, n, t, e, l, s, 0),
        L("z", "y", "x", 1, -1, n, t, -e, l, s, 1),
        L("x", "z", "y", 1, 1, e, n, t, o, l, 2),
        L("x", "z", "y", 1, -1, e, n, -t, o, l, 3),
        L("x", "y", "z", 1, -1, e, t, n, o, s, 4),
        L("x", "y", "z", -1, -1, e, t, -n, o, s, 5),
        this.setIndex(new a.a(g,1)),
        this.addAttribute("position", new a.a(v,3)),
        this.addAttribute("normal", new a.a(_,3)),
        this.addAttribute("uv", new a.a(x,2))
    }
    o.prototype = Object.create(i.a.prototype),
    o.prototype.constructor = o
}
, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var i = n(52)
      , r = n(187)
      , a = n(25)
      , o = n(72)
      , s = n(5);
    function l(e, t, n) {
        this.uuid = s.a.generateUUID(),
        this.width = e,
        this.height = t,
        this.scissor = new o.a(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new o.a(0,0,e,t),
        void 0 === (n = n || {}).minFilter && (n.minFilter = a.M),
        this.texture = new r.a(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
        this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
        this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer,
        this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }
    Object.assign(l.prototype, i.a.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function(e, t) {
            this.width === e && this.height === t || (this.width = e,
            this.height = t,
            this.dispose()),
            this.viewport.set(0, 0, e, t),
            this.scissor.set(0, 0, e, t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.width = e.width,
            this.height = e.height,
            this.viewport.copy(e.viewport),
            this.texture = e.texture.clone(),
            this.depthBuffer = e.depthBuffer,
            this.stencilBuffer = e.stencilBuffer,
            this.depthTexture = e.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    })
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var i = n(66);
    function r() {
        i.a.call(this),
        this.type = "Scene",
        this.background = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0
    }
    r.prototype = Object.create(i.a.prototype),
    r.prototype.constructor = r,
    r.prototype.copy = function(e, t) {
        return i.a.prototype.copy.call(this, e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.autoUpdate = e.autoUpdate,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    ,
    r.prototype.toJSON = function(e) {
        var t = i.a.prototype.toJSON.call(this, e);
        return null !== this.background && (t.object.background = this.background.toJSON(e)),
        null !== this.fog && (t.object.fog = this.fog.toJSON()),
        t
    }
}
, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var i = n(89);
    function r(e, t, n, r) {
        this.ray = new i.a(e,t),
        this.near = n || 0,
        this.far = r || 1 / 0,
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
    function a(e, t) {
        return e.distance - t.distance
    }
    function o(e, t, n, i) {
        if (!1 !== e.visible && (e.raycast(t, n),
        !0 === i))
            for (var r = e.children, a = 0, s = r.length; a < s; a++)
                o(r[a], t, n, !0)
    }
    r.prototype = {
        constructor: r,
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
            var n = [];
            return o(e, this, n, t),
            n.sort(a),
            n
        },
        intersectObjects: function(e, t) {
            var n = [];
            if (!1 === Array.isArray(e))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                n;
            for (var i = 0, r = e.length; i < r; i++)
                o(e[i], this, n, t);
            return n.sort(a),
            n
        }
    }
}
, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(71)
      , r = n(245);
    function a(e, t, n, a, o, s) {
        i.a.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: a,
            heightSegments: o,
            depthSegments: s
        },
        this.fromBufferGeometry(new r.a(e,t,n,a,o,s)),
        this.mergeVertices()
    }
    a.prototype = Object.create(i.a.prototype),
    a.prototype.constructor = a
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i = n(236)
      , r = n(66)
      , a = n(5);
    function o(e, t, n, r) {
        i.a.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== e ? e : 50,
        this.zoom = 1,
        this.near = void 0 !== n ? n : .1,
        this.far = void 0 !== r ? r : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== t ? t : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    o.prototype = Object.assign(Object.create(i.a.prototype), {
        constructor: o,
        isPerspectiveCamera: !0,
        copy: function(e) {
            return i.a.prototype.copy.call(this, e),
            this.fov = e.fov,
            this.zoom = e.zoom,
            this.near = e.near,
            this.far = e.far,
            this.focus = e.focus,
            this.aspect = e.aspect,
            this.view = null === e.view ? null : Object.assign({}, e.view),
            this.filmGauge = e.filmGauge,
            this.filmOffset = e.filmOffset,
            this
        },
        setFocalLength: function(e) {
            var t = .5 * this.getFilmHeight() / e;
            this.fov = 2 * a.a.RAD2DEG * Math.atan(t),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var e = Math.tan(.5 * a.a.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / e
        },
        getEffectiveFOV: function() {
            return 2 * a.a.RAD2DEG * Math.atan(Math.tan(.5 * a.a.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(e, t, n, i, r, a) {
            this.aspect = e / t,
            this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: n,
                offsetY: i,
                width: r,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = this.near
              , t = e * Math.tan(.5 * a.a.DEG2RAD * this.fov) / this.zoom
              , n = 2 * t
              , i = this.aspect * n
              , r = -.5 * i
              , o = this.view;
            if (null !== o) {
                var s = o.fullWidth
                  , l = o.fullHeight;
                r += o.offsetX * i / s,
                t -= o.offsetY * n / l,
                i *= o.width / s,
                n *= o.height / l
            }
            var c = this.filmOffset;
            0 !== c && (r += e * c / this.getFilmWidth()),
            this.projectionMatrix.makeFrustum(r, r + i, t - n, t, e, this.far)
        },
        toJSON: function(e) {
            var t = r.a.prototype.toJSON.call(this, e);
            return t.object.fov = this.fov,
            t.object.zoom = this.zoom,
            t.object.near = this.near,
            t.object.far = this.far,
            t.object.focus = this.focus,
            t.object.aspect = this.aspect,
            null !== this.view && (t.object.view = Object.assign({}, this.view)),
            t.object.filmGauge = this.filmGauge,
            t.object.filmOffset = this.filmOffset,
            t
        }
    })
}
, , , , , , , , function(e, t, n) {
    "use strict";
    var i = n(635);
    e.exports = Function.prototype.bind || i
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(236)
      , r = n(66);
    function a(e, t, n, r, a, o) {
        i.a.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = r,
        this.near = void 0 !== a ? a : .1,
        this.far = void 0 !== o ? o : 2e3,
        this.updateProjectionMatrix()
    }
    a.prototype = Object.assign(Object.create(i.a.prototype), {
        constructor: a,
        isOrthographicCamera: !0,
        copy: function(e) {
            return i.a.prototype.copy.call(this, e),
            this.left = e.left,
            this.right = e.right,
            this.top = e.top,
            this.bottom = e.bottom,
            this.near = e.near,
            this.far = e.far,
            this.zoom = e.zoom,
            this.view = null === e.view ? null : Object.assign({}, e.view),
            this
        },
        setViewOffset: function(e, t, n, i, r, a) {
            this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: n,
                offsetY: i,
                width: r,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = (this.right - this.left) / (2 * this.zoom)
              , t = (this.top - this.bottom) / (2 * this.zoom)
              , n = (this.right + this.left) / 2
              , i = (this.top + this.bottom) / 2
              , r = n - e
              , a = n + e
              , o = i + t
              , s = i - t;
            if (null !== this.view) {
                var l = this.zoom / (this.view.width / this.view.fullWidth)
                  , c = this.zoom / (this.view.height / this.view.fullHeight)
                  , u = (this.right - this.left) / this.view.width
                  , d = (this.top - this.bottom) / this.view.height;
                a = (r += u * (this.view.offsetX / l)) + u * (this.view.width / l),
                s = (o -= d * (this.view.offsetY / c)) - d * (this.view.height / c)
            }
            this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far)
        },
        toJSON: function(e) {
            var t = r.a.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom,
            t.object.left = this.left,
            t.object.right = this.right,
            t.object.top = this.top,
            t.object.bottom = this.bottom,
            t.object.near = this.near,
            t.object.far = this.far,
            null !== this.view && (t.object.view = Object.assign({}, this.view)),
            t
        }
    })
}
, , function(e, t, n) {
    "use strict";
    var i = n(339);
    e.exports = function() {
        return String.prototype.trim && "​" === "​".trim() ? String.prototype.trim : i
    }
}
, function(e, t, n) {
    "use strict";
    var i = Function.prototype.toString
      , r = /^\s*class /
      , a = function(e) {
        try {
            var t = i.call(e).replace(/\/\/.*\n/g, "").replace(/\/\*[.\s\S]*\*\//g, "").replace(/\n/gm, " ").replace(/ {2}/g, " ");
            return r.test(t)
        } catch (e) {
            return !1
        }
    }
      , o = Object.prototype.toString
      , s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e.exports = function(e) {
        if (!e)
            return !1;
        if ("function" != typeof e && "object" != typeof e)
            return !1;
        if (s)
            return function(e) {
                try {
                    return !a(e) && (i.call(e),
                    !0)
                } catch (e) {
                    return !1
                }
            }(e);
        if (a(e))
            return !1;
        var t = o.call(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(296)
      , r = n(630)
      , a = i.call(Function.call, String.prototype.replace)
      , o = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
      , s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
    e.exports = function() {
        var e = r.ToString(r.CheckObjectCoercible(this));
        return a(a(e, o, ""), s, "")
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(633)
      , r = n(631)
      , a = "function" == typeof Symbol && "symbol" == typeof Symbol()
      , o = Object.prototype.toString
      , s = Object.defineProperty && function() {
        var e = {};
        try {
            for (var t in Object.defineProperty(e, "x", {
                enumerable: !1,
                value: e
            }),
            e)
                return !1;
            return e.x === e
        } catch (e) {
            return !1
        }
    }()
      , l = function(e, t, n, i) {
        var r;
        t in e && ("function" != typeof (r = i) || "[object Function]" !== o.call(r) || !i()) || (s ? Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n,
            writable: !0
        }) : e[t] = n)
    }
      , c = function(e, t) {
        var n = arguments.length > 2 ? arguments[2] : {}
          , o = i(t);
        a && (o = o.concat(Object.getOwnPropertySymbols(t))),
        r(o, function(i) {
            l(e, i, t[i], n[i])
        })
    };
    c.supportsDescriptors = !!s,
    e.exports = c
}
, function(e, t, n) {
    var i = n(296);
    e.exports = i.call(Function.call, Object.prototype.hasOwnProperty)
}
, , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var i = n(25)
      , r = n(7)
      , a = n(235)
      , o = n(187)
      , s = new o.a
      , l = new a.a;
    function c() {
        this.seq = [],
        this.map = {}
    }
    var u = []
      , d = [];
    function f(e, t, n) {
        var i = e[0];
        if (i <= 0 || i > 0)
            return e;
        var r = t * n
          , a = u[r];
        if (void 0 === a && (a = new Float32Array(r),
        u[r] = a),
        0 !== t) {
            i.toArray(a, 0);
            for (var o = 1, s = 0; o !== t; ++o)
                s += n,
                e[o].toArray(a, s)
        }
        return a
    }
    function p(e, t) {
        var n = d[t];
        void 0 === n && (n = new Int32Array(t),
        d[t] = n);
        for (var i = 0; i !== t; ++i)
            n[i] = e.allocTextureUnit();
        return n
    }
    function m(e, t) {
        e.uniform1f(this.addr, t)
    }
    function h(e, t) {
        e.uniform1i(this.addr, t)
    }
    function g(e, t) {
        void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
    }
    function v(e, t) {
        void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
    }
    function _(e, t) {
        void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
    }
    function x(e, t) {
        e.uniformMatrix2fv(this.addr, !1, t.elements || t)
    }
    function E(e, t) {
        e.uniformMatrix3fv(this.addr, !1, t.elements || t)
    }
    function b(e, t) {
        e.uniformMatrix4fv(this.addr, !1, t.elements || t)
    }
    function T(e, t, n) {
        var i = n.allocTextureUnit();
        e.uniform1i(this.addr, i),
        n.setTexture2D(t || s, i)
    }
    function M(e, t, n) {
        var i = n.allocTextureUnit();
        e.uniform1i(this.addr, i),
        n.setTextureCube(t || l, i)
    }
    function S(e, t) {
        e.uniform2iv(this.addr, t)
    }
    function L(e, t) {
        e.uniform3iv(this.addr, t)
    }
    function w(e, t) {
        e.uniform4iv(this.addr, t)
    }
    function y(e, t) {
        e.uniform1fv(this.addr, t)
    }
    function P(e, t) {
        e.uniform1iv(this.addr, t)
    }
    function R(e, t) {
        e.uniform2fv(this.addr, f(t, this.size, 2))
    }
    function A(e, t) {
        e.uniform3fv(this.addr, f(t, this.size, 3))
    }
    function D(e, t) {
        e.uniform4fv(this.addr, f(t, this.size, 4))
    }
    function C(e, t) {
        e.uniformMatrix2fv(this.addr, !1, f(t, this.size, 4))
    }
    function U(e, t) {
        e.uniformMatrix3fv(this.addr, !1, f(t, this.size, 9))
    }
    function I(e, t) {
        e.uniformMatrix4fv(this.addr, !1, f(t, this.size, 16))
    }
    function N(e, t, n) {
        var i = t.length
          , r = p(n, i);
        e.uniform1iv(this.addr, r);
        for (var a = 0; a !== i; ++a)
            n.setTexture2D(t[a] || s, r[a])
    }
    function F(e, t, n) {
        var i = t.length
          , r = p(n, i);
        e.uniform1iv(this.addr, r);
        for (var a = 0; a !== i; ++a)
            n.setTextureCube(t[a] || l, r[a])
    }
    function O(e, t, n) {
        this.id = e,
        this.addr = n,
        this.setValue = function(e) {
            switch (e) {
            case 5126:
                return m;
            case 35664:
                return g;
            case 35665:
                return v;
            case 35666:
                return _;
            case 35674:
                return x;
            case 35675:
                return E;
            case 35676:
                return b;
            case 35678:
                return T;
            case 35680:
                return M;
            case 5124:
            case 35670:
                return h;
            case 35667:
            case 35671:
                return S;
            case 35668:
            case 35672:
                return L;
            case 35669:
            case 35673:
                return w
            }
        }(t.type)
    }
    function G(e, t, n) {
        this.id = e,
        this.addr = n,
        this.size = t.size,
        this.setValue = function(e) {
            switch (e) {
            case 5126:
                return y;
            case 35664:
                return R;
            case 35665:
                return A;
            case 35666:
                return D;
            case 35674:
                return C;
            case 35675:
                return U;
            case 35676:
                return I;
            case 35678:
                return N;
            case 35680:
                return F;
            case 5124:
            case 35670:
                return P;
            case 35667:
            case 35671:
                return S;
            case 35668:
            case 35672:
                return L;
            case 35669:
            case 35673:
                return w
            }
        }(t.type)
    }
    function B(e) {
        this.id = e,
        c.call(this)
    }
    B.prototype.setValue = function(e, t) {
        for (var n = this.seq, i = 0, r = n.length; i !== r; ++i) {
            var a = n[i];
            a.setValue(e, t[a.id])
        }
    }
    ;
    var H = /([\w\d_]+)(\])?(\[|\.)?/g;
    function V(e, t) {
        e.seq.push(t),
        e.map[t.id] = t
    }
    function z(e, t, n) {
        var i = e.name
          , r = i.length;
        for (H.lastIndex = 0; ; ) {
            var a = H.exec(i)
              , o = H.lastIndex
              , s = a[1]
              , l = "]" === a[2]
              , c = a[3];
            if (l && (s |= 0),
            void 0 === c || "[" === c && o + 2 === r) {
                V(n, void 0 === c ? new O(s,e,t) : new G(s,e,t));
                break
            }
            var u = n.map[s];
            void 0 === u && V(n, u = new B(s)),
            n = u
        }
    }
    function k(e, t, n) {
        c.call(this),
        this.renderer = n;
        for (var i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), r = 0; r !== i; ++r) {
            var a = e.getActiveUniform(t, r)
              , o = a.name;
            z(a, e.getUniformLocation(t, o), this)
        }
    }
    k.prototype.setValue = function(e, t, n) {
        var i = this.map[t];
        void 0 !== i && i.setValue(e, n, this.renderer)
    }
    ,
    k.prototype.set = function(e, t, n) {
        var i = this.map[n];
        void 0 !== i && i.setValue(e, t[n], this.renderer)
    }
    ,
    k.prototype.setOptional = function(e, t, n) {
        var i = t[n];
        void 0 !== i && this.setValue(e, n, i)
    }
    ,
    k.upload = function(e, t, n, i) {
        for (var r = 0, a = t.length; r !== a; ++r) {
            var o = t[r]
              , s = n[o.id];
            !1 !== s.needsUpdate && o.setValue(e, s.value, i)
        }
    }
    ,
    k.seqWithValue = function(e, t) {
        for (var n = [], i = 0, r = e.length; i !== r; ++i) {
            var a = e[i];
            a.id in t && n.push(a)
        }
        return n
    }
    ,
    k.splitDynamic = function(e, t) {
        for (var n = null, i = e.length, r = 0, a = 0; a !== i; ++a) {
            var o = e[a]
              , s = t[o.id];
            s && !0 === s.dynamic ? (null === n && (n = []),
            n.push(o)) : (r < a && (e[r] = o),
            ++r)
        }
        return r < i && (e.length = r),
        n
    }
    ,
    k.evalDynamic = function(e, t, n, i, r) {
        for (var a = 0, o = e.length; a !== o; ++a) {
            var s = t[e[a].id]
              , l = s.onUpdateCallback;
            void 0 !== l && l.call(s, n, i, r)
        }
    }
    ;
    var W, X = n(106), j = n(621), Y = n.n(j), q = n(620), Z = n.n(q), K = n(619), $ = n.n(K), J = n(618), Q = n.n(J), ee = n(617), te = n.n(ee), ne = n(616), ie = n.n(ne), re = n(615), ae = n.n(re), oe = n(614), se = n.n(oe), le = n(613), ce = n.n(le), ue = n(612), de = n.n(ue), fe = n(611), pe = n.n(fe), me = n(610), he = n.n(me), ge = n(609), ve = n.n(ge), _e = n(608), xe = n.n(_e), Ee = n(607), be = n.n(Ee), Te = n(606), Me = n.n(Te), Se = n(605), Le = n.n(Se), we = n(604), ye = n.n(we), Pe = n(603), Re = n.n(Pe), Ae = n(602), De = n.n(Ae), Ce = n(601), Ue = n.n(Ce), Ie = n(600), Ne = n.n(Ie), Fe = n(599), Oe = n.n(Fe), Ge = n(598), Be = n.n(Ge), He = n(597), Ve = n.n(He), ze = n(596), ke = n.n(ze), We = n(595), Xe = n.n(We), je = n(594), Ye = n.n(je), qe = n(593), Ze = n.n(qe), Ke = n(592), $e = n.n(Ke), Je = n(591), Qe = n.n(Je), et = n(590), tt = n.n(et), nt = n(589), it = n.n(nt), rt = n(588), at = n.n(rt), ot = n(587), st = n.n(ot), lt = n(586), ct = n.n(lt), ut = n(585), dt = n.n(ut), ft = n(584), pt = n.n(ft), mt = n(583), ht = n.n(mt), gt = n(582), vt = n.n(gt), _t = n(581), xt = n.n(_t), Et = n(580), bt = n.n(Et), Tt = n(579), Mt = n.n(Tt), St = n(578), Lt = n.n(St), wt = n(577), yt = n.n(wt), Pt = n(576), Rt = n.n(Pt), At = n(575), Dt = n.n(At), Ct = n(574), Ut = n.n(Ct), It = n(573), Nt = n.n(It), Ft = n(572), Ot = n.n(Ft), Gt = n(571), Bt = n.n(Gt), Ht = n(570), Vt = n.n(Ht), zt = n(569), kt = n.n(zt), Wt = n(568), Xt = n.n(Wt), jt = n(567), Yt = n.n(jt), qt = n(566), Zt = n.n(qt), Kt = n(565), $t = n.n(Kt), Jt = n(564), Qt = n.n(Jt), en = n(563), tn = n.n(en), nn = n(562), rn = n.n(nn), an = n(561), on = n.n(an), sn = n(560), ln = n.n(sn), cn = n(559), un = n.n(cn), dn = n(558), fn = n.n(dn), pn = n(557), mn = n.n(pn), hn = n(556), gn = n.n(hn), vn = n(555), _n = n.n(vn), xn = n(554), En = n.n(xn), bn = n(553), Tn = n.n(bn), Mn = n(552), Sn = n.n(Mn), Ln = n(551), wn = n.n(Ln), yn = n(550), Pn = n.n(yn), Rn = n(549), An = n.n(Rn), Dn = n(548), Cn = n.n(Dn), Un = n(547), In = n.n(Un), Nn = n(546), Fn = n.n(Nn), On = n(545), Gn = n.n(On), Bn = n(544), Hn = n.n(Bn), Vn = n(543), zn = n.n(Vn), kn = n(542), Wn = n.n(kn), Xn = n(541), jn = n.n(Xn), Yn = n(540), qn = n.n(Yn), Zn = n(539), Kn = n.n(Zn), $n = n(538), Jn = n.n($n), Qn = n(537), ei = n.n(Qn), ti = n(536), ni = n.n(ti), ii = n(535), ri = n.n(ii), ai = n(534), oi = n.n(ai), si = n(533), li = n.n(si), ci = n(532), ui = n.n(ci), di = n(531), fi = n.n(di), pi = n(530), mi = n.n(pi), hi = n(529), gi = n.n(hi), vi = n(528), _i = n.n(vi), xi = n(527), Ei = n.n(xi), bi = n(526), Ti = n.n(bi), Mi = n(525), Si = n.n(Mi), Li = n(524), wi = n.n(Li), yi = n(523), Pi = n.n(yi), Ri = n(522), Ai = n.n(Ri), Di = n(521), Ci = n.n(Di), Ui = n(520), Ii = n.n(Ui), Ni = n(519), Fi = n.n(Ni), Oi = n(518), Gi = n.n(Oi), Bi = n(517), Hi = n.n(Bi), Vi = {
        alphamap_fragment: Y.a,
        alphamap_pars_fragment: Z.a,
        alphatest_fragment: $.a,
        aomap_fragment: Q.a,
        aomap_pars_fragment: te.a,
        begin_vertex: ie.a,
        beginnormal_vertex: ae.a,
        bsdfs: se.a,
        bumpmap_pars_fragment: ce.a,
        clipping_planes_fragment: de.a,
        clipping_planes_pars_fragment: pe.a,
        clipping_planes_pars_vertex: he.a,
        clipping_planes_vertex: ve.a,
        color_fragment: xe.a,
        color_pars_fragment: be.a,
        color_pars_vertex: Me.a,
        color_vertex: Le.a,
        common: ye.a,
        cube_uv_reflection_fragment: Re.a,
        defaultnormal_vertex: De.a,
        displacementmap_pars_vertex: Ue.a,
        displacementmap_vertex: Ne.a,
        emissivemap_fragment: Oe.a,
        emissivemap_pars_fragment: Be.a,
        encodings_fragment: Ve.a,
        encodings_pars_fragment: ke.a,
        envmap_fragment: Xe.a,
        envmap_pars_fragment: Ye.a,
        envmap_pars_vertex: Ze.a,
        envmap_vertex: $e.a,
        fog_fragment: Qe.a,
        fog_pars_fragment: tt.a,
        lightmap_fragment: it.a,
        lightmap_pars_fragment: at.a,
        lights_lambert_vertex: st.a,
        lights_pars: ct.a,
        lights_phong_fragment: dt.a,
        lights_phong_pars_fragment: pt.a,
        lights_physical_fragment: ht.a,
        lights_physical_pars_fragment: vt.a,
        lights_template: xt.a,
        logdepthbuf_fragment: bt.a,
        logdepthbuf_pars_fragment: Mt.a,
        logdepthbuf_pars_vertex: Lt.a,
        logdepthbuf_vertex: yt.a,
        map_fragment: Rt.a,
        map_pars_fragment: Dt.a,
        map_particle_fragment: Ut.a,
        map_particle_pars_fragment: Nt.a,
        metalnessmap_fragment: Ot.a,
        metalnessmap_pars_fragment: Bt.a,
        morphnormal_vertex: Vt.a,
        morphtarget_pars_vertex: kt.a,
        morphtarget_vertex: Xt.a,
        normal_flip: Yt.a,
        normal_fragment: Zt.a,
        normalmap_pars_fragment: $t.a,
        packing: Qt.a,
        premultiplied_alpha_fragment: tn.a,
        project_vertex: rn.a,
        roughnessmap_fragment: on.a,
        roughnessmap_pars_fragment: ln.a,
        shadowmap_pars_fragment: un.a,
        shadowmap_pars_vertex: fn.a,
        shadowmap_vertex: mn.a,
        shadowmask_pars_fragment: gn.a,
        skinbase_vertex: _n.a,
        skinning_pars_vertex: En.a,
        skinning_vertex: Tn.a,
        skinnormal_vertex: Sn.a,
        specularmap_fragment: wn.a,
        specularmap_pars_fragment: Pn.a,
        tonemapping_fragment: An.a,
        tonemapping_pars_fragment: Cn.a,
        uv_pars_fragment: In.a,
        uv_pars_vertex: Fn.a,
        uv_vertex: Gn.a,
        uv2_pars_fragment: Hn.a,
        uv2_pars_vertex: zn.a,
        uv2_vertex: Wn.a,
        worldpos_vertex: jn.a,
        cube_frag: qn.a,
        cube_vert: Kn.a,
        depth_frag: Jn.a,
        depth_vert: ei.a,
        distanceRGBA_frag: ni.a,
        distanceRGBA_vert: ri.a,
        equirect_frag: oi.a,
        equirect_vert: li.a,
        linedashed_frag: ui.a,
        linedashed_vert: fi.a,
        meshbasic_frag: mi.a,
        meshbasic_vert: gi.a,
        meshlambert_frag: _i.a,
        meshlambert_vert: Ei.a,
        meshphong_frag: Ti.a,
        meshphong_vert: Si.a,
        meshphysical_frag: wi.a,
        meshphysical_vert: Pi.a,
        normal_frag: Ai.a,
        normal_vert: Ci.a,
        points_frag: Ii.a,
        points_vert: Fi.a,
        shadow_frag: Gi.a,
        shadow_vert: Hi.a
    }, zi = n(1), ki = n(72), Wi = n(23), Xi = n(17), ji = {
        common: {
            diffuse: {
                value: new Wi.a(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new ki.a(0,0,1,1)
            },
            specularMap: {
                value: null
            },
            alphaMap: {
                value: null
            },
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new Xi.a(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Wi.a(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new Wi.a(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new ki.a(0,0,1,1)
            }
        }
    }, Yi = {
        basic: {
            uniforms: X.a.merge([ji.common, ji.aomap, ji.fog]),
            vertexShader: Vi.meshbasic_vert,
            fragmentShader: Vi.meshbasic_frag
        },
        lambert: {
            uniforms: X.a.merge([ji.common, ji.aomap, ji.lightmap, ji.emissivemap, ji.fog, ji.lights, {
                emissive: {
                    value: new Wi.a(0)
                }
            }]),
            vertexShader: Vi.meshlambert_vert,
            fragmentShader: Vi.meshlambert_frag
        },
        phong: {
            uniforms: X.a.merge([ji.common, ji.aomap, ji.lightmap, ji.emissivemap, ji.bumpmap, ji.normalmap, ji.displacementmap, ji.fog, ji.lights, {
                emissive: {
                    value: new Wi.a(0)
                },
                specular: {
                    value: new Wi.a(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Vi.meshphong_vert,
            fragmentShader: Vi.meshphong_frag
        },
        standard: {
            uniforms: X.a.merge([ji.common, ji.aomap, ji.lightmap, ji.emissivemap, ji.bumpmap, ji.normalmap, ji.displacementmap, ji.roughnessmap, ji.metalnessmap, ji.fog, ji.lights, {
                emissive: {
                    value: new Wi.a(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Vi.meshphysical_vert,
            fragmentShader: Vi.meshphysical_frag
        },
        points: {
            uniforms: X.a.merge([ji.points, ji.fog]),
            vertexShader: Vi.points_vert,
            fragmentShader: Vi.points_frag
        },
        dashed: {
            uniforms: X.a.merge([ji.common, ji.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Vi.linedashed_vert,
            fragmentShader: Vi.linedashed_frag
        },
        depth: {
            uniforms: X.a.merge([ji.common, ji.displacementmap]),
            vertexShader: Vi.depth_vert,
            fragmentShader: Vi.depth_frag
        },
        normal: {
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            vertexShader: Vi.normal_vert,
            fragmentShader: Vi.normal_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Vi.cube_vert,
            fragmentShader: Vi.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                },
                tFlip: {
                    value: -1
                }
            },
            vertexShader: Vi.equirect_vert,
            fragmentShader: Vi.equirect_frag
        },
        distanceRGBA: {
            uniforms: {
                lightPos: {
                    value: new zi.a
                }
            },
            vertexShader: Vi.distanceRGBA_vert,
            fragmentShader: Vi.distanceRGBA_frag
        }
    };
    function qi(e, t) {
        this.min = void 0 !== e ? e : new Xi.a(1 / 0,1 / 0),
        this.max = void 0 !== t ? t : new Xi.a(-1 / 0,-1 / 0)
    }
    function Zi(e, t) {
        var n, i, r, a, o, s, l, c, u = e.context, d = e.state;
        function f() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
              , f = new Uint16Array([0, 1, 2, 0, 2, 3]);
            n = u.createBuffer(),
            i = u.createBuffer(),
            u.bindBuffer(u.ARRAY_BUFFER, n),
            u.bufferData(u.ARRAY_BUFFER, t, u.STATIC_DRAW),
            u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, i),
            u.bufferData(u.ELEMENT_ARRAY_BUFFER, f, u.STATIC_DRAW),
            l = u.createTexture(),
            c = u.createTexture(),
            d.bindTexture(u.TEXTURE_2D, l),
            u.texImage2D(u.TEXTURE_2D, 0, u.RGB, 16, 16, 0, u.RGB, u.UNSIGNED_BYTE, null),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST),
            d.bindTexture(u.TEXTURE_2D, c),
            u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, 16, 16, 0, u.RGBA, u.UNSIGNED_BYTE, null),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST),
            u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST),
            r = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
            },
            a = function(t) {
                var n = u.createProgram()
                  , i = u.createShader(u.FRAGMENT_SHADER)
                  , r = u.createShader(u.VERTEX_SHADER)
                  , a = "precision " + e.getPrecision() + " float;\n";
                return u.shaderSource(i, a + t.fragmentShader),
                u.shaderSource(r, a + t.vertexShader),
                u.compileShader(i),
                u.compileShader(r),
                u.attachShader(n, i),
                u.attachShader(n, r),
                u.linkProgram(n),
                n
            }(r),
            o = {
                vertex: u.getAttribLocation(a, "position"),
                uv: u.getAttribLocation(a, "uv")
            },
            s = {
                renderType: u.getUniformLocation(a, "renderType"),
                map: u.getUniformLocation(a, "map"),
                occlusionMap: u.getUniformLocation(a, "occlusionMap"),
                opacity: u.getUniformLocation(a, "opacity"),
                color: u.getUniformLocation(a, "color"),
                scale: u.getUniformLocation(a, "scale"),
                rotation: u.getUniformLocation(a, "rotation"),
                screenPosition: u.getUniformLocation(a, "screenPosition")
            }
        }
        this.render = function(r, p, m) {
            if (0 !== t.length) {
                var h = new zi.a
                  , g = m.w / m.z
                  , v = .5 * m.z
                  , _ = .5 * m.w
                  , x = 16 / m.w
                  , E = new Xi.a(x * g,x)
                  , b = new zi.a(1,1,0)
                  , T = new Xi.a(1,1)
                  , M = new qi;
                M.min.set(0, 0),
                M.max.set(m.z - 16, m.w - 16),
                void 0 === a && f(),
                u.useProgram(a),
                d.initAttributes(),
                d.enableAttribute(o.vertex),
                d.enableAttribute(o.uv),
                d.disableUnusedAttributes(),
                u.uniform1i(s.occlusionMap, 0),
                u.uniform1i(s.map, 1),
                u.bindBuffer(u.ARRAY_BUFFER, n),
                u.vertexAttribPointer(o.vertex, 2, u.FLOAT, !1, 16, 0),
                u.vertexAttribPointer(o.uv, 2, u.FLOAT, !1, 16, 8),
                u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, i),
                d.disable(u.CULL_FACE),
                d.setDepthWrite(!1);
                for (var S = 0, L = t.length; S < L; S++) {
                    x = 16 / m.w,
                    E.set(x * g, x);
                    var w = t[S];
                    if (h.set(w.matrixWorld.elements[12], w.matrixWorld.elements[13], w.matrixWorld.elements[14]),
                    h.applyMatrix4(p.matrixWorldInverse),
                    h.applyProjection(p.projectionMatrix),
                    b.copy(h),
                    T.x = m.x + b.x * v + v - 8,
                    T.y = m.y + b.y * _ + _ - 8,
                    !0 === M.containsPoint(T)) {
                        d.activeTexture(u.TEXTURE0),
                        d.bindTexture(u.TEXTURE_2D, null),
                        d.activeTexture(u.TEXTURE1),
                        d.bindTexture(u.TEXTURE_2D, l),
                        u.copyTexImage2D(u.TEXTURE_2D, 0, u.RGB, T.x, T.y, 16, 16, 0),
                        u.uniform1i(s.renderType, 0),
                        u.uniform2f(s.scale, E.x, E.y),
                        u.uniform3f(s.screenPosition, b.x, b.y, b.z),
                        d.disable(u.BLEND),
                        d.enable(u.DEPTH_TEST),
                        u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0),
                        d.activeTexture(u.TEXTURE0),
                        d.bindTexture(u.TEXTURE_2D, c),
                        u.copyTexImage2D(u.TEXTURE_2D, 0, u.RGBA, T.x, T.y, 16, 16, 0),
                        u.uniform1i(s.renderType, 1),
                        d.disable(u.DEPTH_TEST),
                        d.activeTexture(u.TEXTURE1),
                        d.bindTexture(u.TEXTURE_2D, l),
                        u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0),
                        w.positionScreen.copy(b),
                        w.customUpdateCallback ? w.customUpdateCallback(w) : w.updateLensFlares(),
                        u.uniform1i(s.renderType, 2),
                        d.enable(u.BLEND);
                        for (var y = 0, P = w.lensFlares.length; y < P; y++) {
                            var R = w.lensFlares[y];
                            R.opacity > .001 && R.scale > .001 && (b.x = R.x,
                            b.y = R.y,
                            b.z = R.z,
                            x = R.size * R.scale / m.w,
                            E.x = x * g,
                            E.y = x,
                            u.uniform3f(s.screenPosition, b.x, b.y, b.z),
                            u.uniform2f(s.scale, E.x, E.y),
                            u.uniform1f(s.rotation, R.rotation),
                            u.uniform1f(s.opacity, R.opacity),
                            u.uniform3f(s.color, R.color.r, R.color.g, R.color.b),
                            d.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst),
                            e.setTexture2D(R.texture, 1),
                            u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                d.enable(u.CULL_FACE),
                d.enable(u.DEPTH_TEST),
                d.setDepthWrite(!0),
                e.resetGLState()
            }
        }
    }
    Yi.physical = {
        uniforms: X.a.merge([Yi.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: Vi.meshphysical_vert,
        fragmentShader: Vi.meshphysical_frag
    },
    qi.prototype = {
        constructor: qi,
        set: function(e, t) {
            return this.min.copy(e),
            this.max.copy(t),
            this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, n = e.length; t < n; t++)
                this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: (W = new Xi.a,
        function(e, t) {
            var n = W.copy(t).multiplyScalar(.5);
            return this.min.copy(e).sub(n),
            this.max.copy(e).add(n),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min),
            this.max.copy(e.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0,
            this.max.x = this.max.y = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(e) {
            var t = e || new Xi.a;
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            var t = e || new Xi.a;
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e),
            this.max.max(e),
            this
        },
        expandByVector: function(e) {
            return this.min.sub(e),
            this.max.add(e),
            this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e),
            this.max.addScalar(e),
            this
        },
        containsPoint: function(e) {
            return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
        },
        getParameter: function(e, t) {
            return (t || new Xi.a).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
        },
        clampPoint: function(e, t) {
            return (t || new Xi.a).copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new Xi.a;
            return function(t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min),
            this.max.min(e.max),
            this
        },
        union: function(e) {
            return this.min.min(e.min),
            this.max.max(e.max),
            this
        },
        translate: function(e) {
            return this.min.add(e),
            this.max.add(e),
            this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    };
    var Ki = n(3);
    function $i(e, t) {
        var n, i, r, a, s, l, c = e.context, u = e.state, d = new zi.a, f = new Ki.a, p = new zi.a;
        function m() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
              , u = new Uint16Array([0, 1, 2, 0, 2, 3]);
            n = c.createBuffer(),
            i = c.createBuffer(),
            c.bindBuffer(c.ARRAY_BUFFER, n),
            c.bufferData(c.ARRAY_BUFFER, t, c.STATIC_DRAW),
            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, i),
            c.bufferData(c.ELEMENT_ARRAY_BUFFER, u, c.STATIC_DRAW),
            r = function() {
                var t = c.createProgram()
                  , n = c.createShader(c.VERTEX_SHADER)
                  , i = c.createShader(c.FRAGMENT_SHADER);
                return c.shaderSource(n, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
                c.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
                c.compileShader(n),
                c.compileShader(i),
                c.attachShader(t, n),
                c.attachShader(t, i),
                c.linkProgram(t),
                t
            }(),
            a = {
                position: c.getAttribLocation(r, "position"),
                uv: c.getAttribLocation(r, "uv")
            },
            s = {
                uvOffset: c.getUniformLocation(r, "uvOffset"),
                uvScale: c.getUniformLocation(r, "uvScale"),
                rotation: c.getUniformLocation(r, "rotation"),
                scale: c.getUniformLocation(r, "scale"),
                color: c.getUniformLocation(r, "color"),
                map: c.getUniformLocation(r, "map"),
                opacity: c.getUniformLocation(r, "opacity"),
                modelViewMatrix: c.getUniformLocation(r, "modelViewMatrix"),
                projectionMatrix: c.getUniformLocation(r, "projectionMatrix"),
                fogType: c.getUniformLocation(r, "fogType"),
                fogDensity: c.getUniformLocation(r, "fogDensity"),
                fogNear: c.getUniformLocation(r, "fogNear"),
                fogFar: c.getUniformLocation(r, "fogFar"),
                fogColor: c.getUniformLocation(r, "fogColor"),
                alphaTest: c.getUniformLocation(r, "alphaTest")
            };
            var d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            d.width = 8,
            d.height = 8;
            var f = d.getContext("2d");
            f.fillStyle = "white",
            f.fillRect(0, 0, 8, 8),
            (l = new o.a(d)).needsUpdate = !0
        }
        function h(e, t) {
            return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
        }
        this.render = function(o, g) {
            if (0 !== t.length) {
                void 0 === r && m(),
                c.useProgram(r),
                u.initAttributes(),
                u.enableAttribute(a.position),
                u.enableAttribute(a.uv),
                u.disableUnusedAttributes(),
                u.disable(c.CULL_FACE),
                u.enable(c.BLEND),
                c.bindBuffer(c.ARRAY_BUFFER, n),
                c.vertexAttribPointer(a.position, 2, c.FLOAT, !1, 16, 0),
                c.vertexAttribPointer(a.uv, 2, c.FLOAT, !1, 16, 8),
                c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, i),
                c.uniformMatrix4fv(s.projectionMatrix, !1, g.projectionMatrix.elements),
                u.activeTexture(c.TEXTURE0),
                c.uniform1i(s.map, 0);
                var v = 0
                  , _ = 0
                  , x = o.fog;
                x ? (c.uniform3f(s.fogColor, x.color.r, x.color.g, x.color.b),
                x && x.isFog ? (c.uniform1f(s.fogNear, x.near),
                c.uniform1f(s.fogFar, x.far),
                c.uniform1i(s.fogType, 1),
                v = 1,
                _ = 1) : x && x.isFogExp2 && (c.uniform1f(s.fogDensity, x.density),
                c.uniform1i(s.fogType, 2),
                v = 2,
                _ = 2)) : (c.uniform1i(s.fogType, 0),
                v = 0,
                _ = 0);
                for (var E = 0, b = t.length; E < b; E++) {
                    (M = t[E]).modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, M.matrixWorld),
                    M.z = -M.modelViewMatrix.elements[14]
                }
                t.sort(h);
                var T = [];
                for (E = 0,
                b = t.length; E < b; E++) {
                    var M, S = (M = t[E]).material;
                    if (!1 !== S.visible) {
                        c.uniform1f(s.alphaTest, S.alphaTest),
                        c.uniformMatrix4fv(s.modelViewMatrix, !1, M.modelViewMatrix.elements),
                        M.matrixWorld.decompose(d, f, p),
                        T[0] = p.x,
                        T[1] = p.y;
                        var L = 0;
                        o.fog && S.fog && (L = _),
                        v !== L && (c.uniform1i(s.fogType, L),
                        v = L),
                        null !== S.map ? (c.uniform2f(s.uvOffset, S.map.offset.x, S.map.offset.y),
                        c.uniform2f(s.uvScale, S.map.repeat.x, S.map.repeat.y)) : (c.uniform2f(s.uvOffset, 0, 0),
                        c.uniform2f(s.uvScale, 1, 1)),
                        c.uniform1f(s.opacity, S.opacity),
                        c.uniform3f(s.color, S.color.r, S.color.g, S.color.b),
                        c.uniform1f(s.rotation, S.rotation),
                        c.uniform2fv(s.scale, T),
                        u.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst),
                        u.setDepthTest(S.depthTest),
                        u.setDepthWrite(S.depthWrite),
                        S.map ? e.setTexture2D(S.map, 0) : e.setTexture2D(l, 0),
                        c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0)
                    }
                }
                u.enable(c.CULL_FACE),
                e.resetGLState()
            }
        }
    }
    var Ji = n(260)
      , Qi = n(107)
      , er = n(60);
    function tr(e) {
        er.a.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = i.g,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.setValues(e)
    }
    tr.prototype = Object.create(er.a.prototype),
    tr.prototype.constructor = tr,
    tr.prototype.isMeshDepthMaterial = !0,
    tr.prototype.copy = function(e) {
        return er.a.prototype.copy.call(this, e),
        this.depthPacking = e.depthPacking,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
    ;
    var nr = n(97);
    var ir = n(145)
      , rr = n(245)
      , ar = n(148)
      , or = n(146)
      , sr = n(288)
      , lr = n(335);
    function cr(e, t, n) {
        var i = e.createShader(t);
        return e.shaderSource(i, n),
        e.compileShader(i),
        !1 === e.getShaderParameter(i, e.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== e.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(i), function(e) {
            for (var t = e.split("\n"), n = 0; n < t.length; n++)
                t[n] = n + 1 + ": " + t[n];
            return t.join("\n")
        }(n)),
        i
    }
    var ur = 0;
    function dr(e) {
        switch (e) {
        case i.L:
            return ["Linear", "( value )"];
        case i.Db:
            return ["sRGB", "( value )"];
        case i.Xa:
            return ["RGBE", "( value )"];
        case i.ab:
            return ["RGBM", "( value, 7.0 )"];
        case i.Za:
            return ["RGBM", "( value, 16.0 )"];
        case i.Wa:
            return ["RGBD", "( value, 256.0 )"];
        case i.E:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + e)
        }
    }
    function fr(e, t) {
        var n = dr(t);
        return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }
    function pr(e) {
        return "" !== e
    }
    function mr(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }
    function hr(e) {
        return e.replace(/#include +<([\w\d.]+)>/g, function(e, t) {
            var n = Vi[t];
            if (void 0 === n)
                throw new Error("Can not resolve #include <" + t + ">");
            return hr(n)
        })
    }
    function gr(e) {
        return e.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(e, t, n, i) {
            for (var r = "", a = parseInt(t); a < parseInt(n); a++)
                r += i.replace(/\[ i \]/g, "[ " + a + " ]");
            return r
        })
    }
    function vr(e, t, n, r) {
        var a = e.context
          , o = n.extensions
          , s = n.defines
          , l = n.__webglShader.vertexShader
          , c = n.__webglShader.fragmentShader
          , u = "SHADOWMAP_TYPE_BASIC";
        r.shadowMapType === i.Ma ? u = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === i.Na && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var d = "ENVMAP_TYPE_CUBE"
          , f = "ENVMAP_MODE_REFLECTION"
          , p = "ENVMAP_BLENDING_MULTIPLY";
        if (r.envMap) {
            switch (n.envMap.mapping) {
            case i.k:
            case i.l:
                d = "ENVMAP_TYPE_CUBE";
                break;
            case i.m:
            case i.n:
                d = "ENVMAP_TYPE_CUBE_UV";
                break;
            case i.y:
            case i.z:
                d = "ENVMAP_TYPE_EQUIREC";
                break;
            case i.kb:
                d = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
            case i.l:
            case i.z:
                f = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
            case i.X:
                p = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case i.V:
                p = "ENVMAP_BLENDING_MIX";
                break;
            case i.b:
                p = "ENVMAP_BLENDING_ADD"
            }
        }
        var m, h, g, v, _, x = e.gammaFactor > 0 ? e.gammaFactor : 1, E = function(e, t, n) {
            return [(e = e || {}).derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(pr).join("\n")
        }(o, r, e.extensions), b = function(e) {
            var t = [];
            for (var n in e) {
                var i = e[n];
                !1 !== i && t.push("#define " + n + " " + i)
            }
            return t.join("\n")
        }(s), T = a.createProgram();
        n.isRawShaderMaterial ? (m = [b, "\n"].filter(pr).join("\n"),
        h = [E, b, "\n"].filter(pr).join("\n")) : (m = ["precision " + r.precision + " float;", "precision " + r.precision + " int;", "#define SHADER_NAME " + n.__webglShader.name, b, r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + x, "#define MAX_BONES " + r.maxBones, r.map ? "#define USE_MAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + f : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.displacementMap && r.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.vertexColors ? "#define USE_COLOR" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.skinning ? "#define USE_SKINNING" : "", r.useVertexTexture ? "#define BONE_TEXTURE" : "", r.morphTargets ? "#define USE_MORPHTARGETS" : "", r.morphNormals && !1 === r.flatShading ? "#define USE_MORPHNORMALS" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + r.numClippingPlanes, r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + u : "", r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(pr).join("\n"),
        h = [E, "precision " + r.precision + " float;", "precision " + r.precision + " int;", "#define SHADER_NAME " + n.__webglShader.name, b, r.alphaTest ? "#define ALPHATEST " + r.alphaTest : "", "#define GAMMA_FACTOR " + x, r.useFog && r.fog ? "#define USE_FOG" : "", r.useFog && r.fogExp ? "#define FOG_EXP2" : "", r.map ? "#define USE_MAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + d : "", r.envMap ? "#define " + f : "", r.envMap ? "#define " + p : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.vertexColors ? "#define USE_COLOR" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + r.numClippingPlanes, r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + u : "", r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", r.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", r.toneMapping !== i.Ea ? "#define TONE_MAPPING" : "", r.toneMapping !== i.Ea ? Vi.tonemapping_pars_fragment : "", r.toneMapping !== i.Ea ? function(e, t) {
            var n;
            switch (t) {
            case i.P:
                n = "Linear";
                break;
            case i.fb:
                n = "Reinhard";
                break;
            case i.ub:
                n = "Uncharted2";
                break;
            case i.i:
                n = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + t)
            }
            return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }("toneMapping", r.toneMapping) : "", r.outputEncoding || r.mapEncoding || r.envMapEncoding || r.emissiveMapEncoding ? Vi.encodings_pars_fragment : "", r.mapEncoding ? fr("mapTexelToLinear", r.mapEncoding) : "", r.envMapEncoding ? fr("envMapTexelToLinear", r.envMapEncoding) : "", r.emissiveMapEncoding ? fr("emissiveMapTexelToLinear", r.emissiveMapEncoding) : "", r.outputEncoding ? (g = "linearToOutputTexel",
        v = r.outputEncoding,
        _ = dr(v),
        "vec4 " + g + "( vec4 value ) { return LinearTo" + _[0] + _[1] + "; }") : "", r.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(pr).join("\n")),
        l = mr(l = hr(l), r),
        c = mr(c = hr(c), r),
        n.isShaderMaterial || (l = gr(l),
        c = gr(c));
        var M = m + l
          , S = h + c
          , L = cr(a, a.VERTEX_SHADER, M)
          , w = cr(a, a.FRAGMENT_SHADER, S);
        a.attachShader(T, L),
        a.attachShader(T, w),
        void 0 !== n.index0AttributeName ? a.bindAttribLocation(T, 0, n.index0AttributeName) : !0 === r.morphTargets && a.bindAttribLocation(T, 0, "position"),
        a.linkProgram(T);
        var y, P, R = a.getProgramInfoLog(T), A = a.getShaderInfoLog(L), D = a.getShaderInfoLog(w), C = !0, U = !0;
        return !1 === a.getProgramParameter(T, a.LINK_STATUS) ? (C = !1,
        console.error("THREE.WebGLProgram: shader error: ", a.getError(), "gl.VALIDATE_STATUS", a.getProgramParameter(T, a.VALIDATE_STATUS), "gl.getProgramInfoLog", R, A, D)) : "" !== R ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", R) : "" !== A && "" !== D || (U = !1),
        U && (this.diagnostics = {
            runnable: C,
            material: n,
            programLog: R,
            vertexShader: {
                log: A,
                prefix: m
            },
            fragmentShader: {
                log: D,
                prefix: h
            }
        }),
        a.deleteShader(L),
        a.deleteShader(w),
        this.getUniforms = function() {
            return void 0 === y && (y = new k(a,T,e)),
            y
        }
        ,
        this.getAttributes = function() {
            return void 0 === P && (P = function(e, t, n) {
                for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), a = 0; a < r; a++) {
                    var o = e.getActiveAttrib(t, a).name;
                    i[o] = e.getAttribLocation(t, o)
                }
                return i
            }(a, T)),
            P
        }
        ,
        this.destroy = function() {
            a.deleteProgram(T),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.id = ur++,
        this.code = t,
        this.usedTimes = 1,
        this.program = T,
        this.vertexShader = L,
        this.fragmentShader = w,
        this
    }
    function _r(e, t) {
        var n = []
          , r = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        }
          , a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
        function o(e, t) {
            var n;
            return e ? e && e.isTexture ? n = e.encoding : e && e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            n = e.texture.encoding) : n = i.L,
            n === i.L && t && (n = i.E),
            n
        }
        this.getParameters = function(n, a, s, l, c) {
            var u = r[n.type]
              , d = function(e) {
                if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture)
                    return 1024;
                var n = t.maxVertexUniforms
                  , i = Math.floor((n - 20) / 4);
                return void 0 !== e && e && e.isSkinnedMesh && (i = Math.min(e.skeleton.bones.length, i)) < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)"),
                i
            }(c)
              , f = e.getPrecision();
            null !== n.precision && (f = t.getMaxPrecision(n.precision)) !== n.precision && console.warn("THREE.WebGLProgram.getParameters:", n.precision, "not supported, using", f, "instead.");
            var p = e.getCurrentRenderTarget();
            return {
                shaderID: u,
                precision: f,
                supportsVertexTextures: t.vertexTextures,
                outputEncoding: o(p ? p.texture : null, e.gammaOutput),
                map: !!n.map,
                mapEncoding: o(n.map, e.gammaInput),
                envMap: !!n.envMap,
                envMapMode: n.envMap && n.envMap.mapping,
                envMapEncoding: o(n.envMap, e.gammaInput),
                envMapCubeUV: !!n.envMap && (n.envMap.mapping === i.m || n.envMap.mapping === i.n),
                lightMap: !!n.lightMap,
                aoMap: !!n.aoMap,
                emissiveMap: !!n.emissiveMap,
                emissiveMapEncoding: o(n.emissiveMap, e.gammaInput),
                bumpMap: !!n.bumpMap,
                normalMap: !!n.normalMap,
                displacementMap: !!n.displacementMap,
                roughnessMap: !!n.roughnessMap,
                metalnessMap: !!n.metalnessMap,
                specularMap: !!n.specularMap,
                alphaMap: !!n.alphaMap,
                combine: n.combine,
                vertexColors: n.vertexColors,
                fog: !!s,
                useFog: n.fog,
                fogExp: s && s.isFogExp2,
                flatShading: n.shading === i.A,
                sizeAttenuation: n.sizeAttenuation,
                logarithmicDepthBuffer: t.logarithmicDepthBuffer,
                skinning: n.skinning,
                maxBones: d,
                useVertexTexture: t.floatVertexTextures && c && c.skeleton && c.skeleton.useVertexTexture,
                morphTargets: n.morphTargets,
                morphNormals: n.morphNormals,
                maxMorphTargets: e.maxMorphTargets,
                maxMorphNormals: e.maxMorphNormals,
                numDirLights: a.directional.length,
                numPointLights: a.point.length,
                numSpotLights: a.spot.length,
                numHemiLights: a.hemi.length,
                numClippingPlanes: l,
                shadowMapEnabled: e.shadowMap.enabled && c.receiveShadow && a.shadows.length > 0,
                shadowMapType: e.shadowMap.type,
                toneMapping: e.toneMapping,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: n.premultipliedAlpha,
                alphaTest: n.alphaTest,
                doubleSided: n.side === i.u,
                flipSided: n.side === i.f,
                depthPacking: void 0 !== n.depthPacking && n.depthPacking
            }
        }
        ,
        this.getProgramCode = function(e, t) {
            var n = [];
            if (t.shaderID ? n.push(t.shaderID) : (n.push(e.fragmentShader),
            n.push(e.vertexShader)),
            void 0 !== e.defines)
                for (var i in e.defines)
                    n.push(i),
                    n.push(e.defines[i]);
            for (var r = 0; r < a.length; r++)
                n.push(t[a[r]]);
            return n.join()
        }
        ,
        this.acquireProgram = function(t, i, r) {
            for (var a, o = 0, s = n.length; o < s; o++) {
                var l = n[o];
                if (l.code === r) {
                    ++(a = l).usedTimes;
                    break
                }
            }
            return void 0 === a && (a = new vr(e,r,t,i),
            n.push(a)),
            a
        }
        ,
        this.releaseProgram = function(e) {
            if (0 == --e.usedTimes) {
                var t = n.indexOf(e);
                n[t] = n[n.length - 1],
                n.pop(),
                e.destroy()
            }
        }
        ,
        this.programs = n
    }
    var xr = n(26)
      , Er = n(87);
    function br(e, t, n) {
        var i = {};
        function r(e) {
            var o = e.target
              , s = i[o.id];
            null !== s.index && a(s.index),
            function(e) {
                for (var t in e)
                    a(e[t])
            }(s.attributes),
            o.removeEventListener("dispose", r),
            delete i[o.id];
            var l = t.get(o);
            l.wireframe && a(l.wireframe),
            t.delete(o);
            var c = t.get(s);
            c.wireframe && a(c.wireframe),
            t.delete(s),
            n.memory.geometries--
        }
        function a(n) {
            var i = function(e) {
                return e.isInterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            }(n);
            void 0 !== i && (e.deleteBuffer(i),
            function(e) {
                e.isInterleavedBufferAttribute ? t.delete(e.data) : t.delete(e)
            }(n))
        }
        return {
            get: function(e) {
                var t, a = e.geometry;
                return void 0 !== i[a.id] ? i[a.id] : (a.addEventListener("dispose", r),
                a.isBufferGeometry ? t = a : a.isGeometry && (void 0 === a._bufferGeometry && (a._bufferGeometry = (new Er.a).setFromObject(e)),
                t = a._bufferGeometry),
                i[a.id] = t,
                n.memory.geometries++,
                t)
            }
        }
    }
    function Tr(e, t, n) {
        var i = new br(e,t,n);
        function r(n, i) {
            var r = n.isInterleavedBufferAttribute ? n.data : n
              , a = t.get(r);
            void 0 === a.__webglBuffer ? function(t, n, i) {
                t.__webglBuffer = e.createBuffer(),
                e.bindBuffer(i, t.__webglBuffer);
                var r = n.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
                e.bufferData(i, n.array, r),
                t.version = n.version
            }(a, r, i) : a.version !== r.version && function(t, n, i) {
                e.bindBuffer(i, t.__webglBuffer),
                !1 === n.dynamic || -1 === n.updateRange.count ? e.bufferSubData(i, 0, n.array) : 0 === n.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(i, n.updateRange.offset * n.array.BYTES_PER_ELEMENT, n.array.subarray(n.updateRange.offset, n.updateRange.offset + n.updateRange.count)),
                n.updateRange.count = 0);
                t.version = n.version
            }(a, r, i)
        }
        return {
            getAttributeBuffer: function(e) {
                return e.isInterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            },
            getWireframeAttribute: function(n) {
                var i = t.get(n);
                if (void 0 !== i.wireframe)
                    return i.wireframe;
                var a, o = [], s = n.index, l = n.attributes, c = l.position;
                if (null !== s)
                    for (var u = 0, d = (a = s.array).length; u < d; u += 3) {
                        var f = a[u + 0]
                          , p = a[u + 1]
                          , m = a[u + 2];
                        o.push(f, p, p, m, m, f)
                    }
                else
                    for (u = 0,
                    d = (a = l.position.array).length / 3 - 1; u < d; u += 3)
                        f = u + 0,
                        p = u + 1,
                        m = u + 2,
                        o.push(f, p, p, m, m, f);
                var h = c.count > 65535 ? Uint32Array : Uint16Array
                  , g = new xr.a(new h(o),1);
                return r(g, e.ELEMENT_ARRAY_BUFFER),
                i.wireframe = g,
                g
            },
            update: function(t) {
                var n = i.get(t);
                t.geometry.isGeometry && n.updateFromObject(t);
                var a = n.index
                  , o = n.attributes;
                for (var s in null !== a && r(a, e.ELEMENT_ARRAY_BUFFER),
                o)
                    r(o[s], e.ARRAY_BUFFER);
                var l = n.morphAttributes;
                for (var s in l)
                    for (var c = l[s], u = 0, d = c.length; u < d; u++)
                        r(c[u], e.ARRAY_BUFFER);
                return n
            }
        }
    }
    var Mr = n(5);
    function Sr(e, t, n, r, a, o, s) {
        var l = s.memory
          , c = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
        function u(e, t) {
            if (e.width > t || e.height > t) {
                var n = t / Math.max(e.width, e.height)
                  , i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                return i.width = Math.floor(e.width * n),
                i.height = Math.floor(e.height * n),
                i.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height),
                console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height, e),
                i
            }
            return e
        }
        function d(e) {
            return Mr.a.isPowerOfTwo(e.width) && Mr.a.isPowerOfTwo(e.height)
        }
        function f(t) {
            return t === i.Y || t === i.Aa || t === i.Z ? e.NEAREST : e.LINEAR
        }
        function p(t) {
            var n = t.target;
            n.removeEventListener("dispose", p),
            function(t) {
                var n = r.get(t);
                if (t.image && n.__image__webglTextureCube)
                    e.deleteTexture(n.__image__webglTextureCube);
                else {
                    if (void 0 === n.__webglInit)
                        return;
                    e.deleteTexture(n.__webglTexture)
                }
                r.delete(t)
            }(n),
            l.textures--
        }
        function m(t) {
            var n = t.target;
            n.removeEventListener("dispose", m),
            function(t) {
                var n = r.get(t)
                  , i = r.get(t.texture);
                if (!t)
                    return;
                void 0 !== i.__webglTexture && e.deleteTexture(i.__webglTexture);
                t.depthTexture && t.depthTexture.dispose();
                if (t && t.isWebGLRenderTargetCube)
                    for (var a = 0; a < 6; a++)
                        e.deleteFramebuffer(n.__webglFramebuffer[a]),
                        n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[a]);
                else
                    e.deleteFramebuffer(n.__webglFramebuffer),
                    n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer);
                r.delete(t.texture),
                r.delete(t)
            }(n),
            l.textures--
        }
        function h(t, s) {
            var f = r.get(t);
            if (t.version > 0 && f.__version !== t.version) {
                var m = t.image;
                if (void 0 === m)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
                else {
                    if (!1 !== m.complete)
                        return void function(t, r, s) {
                            void 0 === t.__webglInit && (t.__webglInit = !0,
                            r.addEventListener("dispose", p),
                            t.__webglTexture = e.createTexture(),
                            l.textures++);
                            n.activeTexture(e.TEXTURE0 + s),
                            n.bindTexture(e.TEXTURE_2D, t.__webglTexture),
                            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.flipY),
                            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
                            e.pixelStorei(e.UNPACK_ALIGNMENT, r.unpackAlignment);
                            var f = u(r.image, a.maxTextureSize);
                            (function(e) {
                                return e.wrapS !== i.j || e.wrapT !== i.j || e.minFilter !== i.Y && e.minFilter !== i.M
                            }
                            )(r) && !1 === d(f) && (f = function(e) {
                                if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
                                    var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                                    return t.width = Mr.a.nearestPowerOfTwo(e.width),
                                    t.height = Mr.a.nearestPowerOfTwo(e.height),
                                    t.getContext("2d").drawImage(e, 0, 0, t.width, t.height),
                                    console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e),
                                    t
                                }
                                return e
                            }(f));
                            var m = d(f)
                              , h = o(r.format)
                              , v = o(r.type);
                            g(e.TEXTURE_2D, r, m);
                            var _, x = r.mipmaps;
                            if (r && r.isDepthTexture) {
                                var E = e.DEPTH_COMPONENT;
                                if (r.type === i.B) {
                                    if (!c)
                                        throw new Error("Float Depth Texture only supported in WebGL2.0");
                                    E = e.DEPTH_COMPONENT32F
                                } else
                                    c && (E = e.DEPTH_COMPONENT16);
                                r.format === i.t && (E = e.DEPTH_STENCIL),
                                n.texImage2D(e.TEXTURE_2D, 0, E, f.width, f.height, 0, h, v, null)
                            } else if (r && r.isDataTexture)
                                if (x.length > 0 && m) {
                                    for (var b = 0, T = x.length; b < T; b++)
                                        _ = x[b],
                                        n.texImage2D(e.TEXTURE_2D, b, h, _.width, _.height, 0, h, v, _.data);
                                    r.generateMipmaps = !1
                                } else
                                    n.texImage2D(e.TEXTURE_2D, 0, h, f.width, f.height, 0, h, v, f.data);
                            else if (r && r.isCompressedTexture)
                                for (var b = 0, T = x.length; b < T; b++)
                                    _ = x[b],
                                    r.format !== i.Qa && r.format !== i.Ya ? n.getCompressedTextureFormats().indexOf(h) > -1 ? n.compressedTexImage2D(e.TEXTURE_2D, b, h, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(e.TEXTURE_2D, b, h, _.width, _.height, 0, h, v, _.data);
                            else if (x.length > 0 && m) {
                                for (var b = 0, T = x.length; b < T; b++)
                                    _ = x[b],
                                    n.texImage2D(e.TEXTURE_2D, b, h, h, v, _);
                                r.generateMipmaps = !1
                            } else
                                n.texImage2D(e.TEXTURE_2D, 0, h, h, v, f);
                            r.generateMipmaps && m && e.generateMipmap(e.TEXTURE_2D);
                            t.__version = r.version,
                            r.onUpdate && r.onUpdate(r)
                        }(f, t, s);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
                }
            }
            n.activeTexture(e.TEXTURE0 + s),
            n.bindTexture(e.TEXTURE_2D, f.__webglTexture)
        }
        function g(n, s, l) {
            var c;
            if (l ? (e.texParameteri(n, e.TEXTURE_WRAP_S, o(s.wrapS)),
            e.texParameteri(n, e.TEXTURE_WRAP_T, o(s.wrapT)),
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, o(s.magFilter)),
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, o(s.minFilter))) : (e.texParameteri(n, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(n, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            s.wrapS === i.j && s.wrapT === i.j || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", s),
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, f(s.magFilter)),
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, f(s.minFilter)),
            s.minFilter !== i.Y && s.minFilter !== i.M && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", s)),
            c = t.get("EXT_texture_filter_anisotropic")) {
                if (s.type === i.B && null === t.get("OES_texture_float_linear"))
                    return;
                if (s.type === i.H && null === t.get("OES_texture_half_float_linear"))
                    return;
                (s.anisotropy > 1 || r.get(s).__currentAnisotropy) && (e.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, a.getMaxAnisotropy())),
                r.get(s).__currentAnisotropy = s.anisotropy)
            }
        }
        function v(t, i, a, s) {
            var l = o(i.texture.format)
              , c = o(i.texture.type);
            n.texImage2D(s, 0, l, i.width, i.height, 0, l, c, null),
            e.bindFramebuffer(e.FRAMEBUFFER, t),
            e.framebufferTexture2D(e.FRAMEBUFFER, a, s, r.get(i.texture).__webglTexture, 0),
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        function _(t, n) {
            e.bindRenderbuffer(e.RENDERBUFFER, t),
            n.depthBuffer && !n.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, n.width, n.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : n.depthBuffer && n.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, n.width, n.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, n.width, n.height),
            e.bindRenderbuffer(e.RENDERBUFFER, null)
        }
        function x(t) {
            var n = r.get(t)
              , a = t && t.isWebGLRenderTargetCube;
            if (t.depthTexture) {
                if (a)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                !function(t, n) {
                    if (n && n.isWebGLRenderTargetCube)
                        throw new Error("Depth Texture with cube render targets is not supported!");
                    if (e.bindFramebuffer(e.FRAMEBUFFER, t),
                    !n.depthTexture || !n.depthTexture.isDepthTexture)
                        throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width,
                    n.depthTexture.image.height = n.height,
                    n.depthTexture.needsUpdate = !0),
                    h(n.depthTexture, 0);
                    var a = r.get(n.depthTexture).__webglTexture;
                    if (n.depthTexture.format === i.s)
                        e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a, 0);
                    else {
                        if (n.depthTexture.format !== i.t)
                            throw new Error("Unknown depthTexture format");
                        e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, a, 0)
                    }
                }(n.__webglFramebuffer, t)
            } else if (a) {
                n.__webglDepthbuffer = [];
                for (var o = 0; o < 6; o++)
                    e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[o]),
                    n.__webglDepthbuffer[o] = e.createRenderbuffer(),
                    _(n.__webglDepthbuffer[o], t)
            } else
                e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer),
                n.__webglDepthbuffer = e.createRenderbuffer(),
                _(n.__webglDepthbuffer, t);
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        this.setTexture2D = h,
        this.setTextureCube = function(t, s) {
            var c = r.get(t);
            if (6 === t.image.length)
                if (t.version > 0 && c.__version !== t.version) {
                    c.__image__webglTextureCube || (t.addEventListener("dispose", p),
                    c.__image__webglTextureCube = e.createTexture(),
                    l.textures++),
                    n.activeTexture(e.TEXTURE0 + s),
                    n.bindTexture(e.TEXTURE_CUBE_MAP, c.__image__webglTextureCube),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                    for (var f = t && t.isCompressedTexture, m = t.image[0] && t.image[0].isDataTexture, h = [], v = 0; v < 6; v++)
                        h[v] = f || m ? m ? t.image[v].image : t.image[v] : u(t.image[v], a.maxCubemapSize);
                    var _ = d(h[0])
                      , x = o(t.format)
                      , E = o(t.type);
                    for (g(e.TEXTURE_CUBE_MAP, t, _),
                    v = 0; v < 6; v++)
                        if (f)
                            for (var b, T = h[v].mipmaps, M = 0, S = T.length; M < S; M++)
                                b = T[M],
                                t.format !== i.Qa && t.format !== i.Ya ? n.getCompressedTextureFormats().indexOf(x) > -1 ? n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, M, x, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, M, x, b.width, b.height, 0, x, E, b.data);
                        else
                            m ? n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, x, h[v].width, h[v].height, 0, x, E, h[v].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, x, x, E, h[v]);
                    t.generateMipmaps && _ && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                    c.__version = t.version,
                    t.onUpdate && t.onUpdate(t)
                } else
                    n.activeTexture(e.TEXTURE0 + s),
                    n.bindTexture(e.TEXTURE_CUBE_MAP, c.__image__webglTextureCube)
        }
        ,
        this.setTextureCubeDynamic = function(t, i) {
            n.activeTexture(e.TEXTURE0 + i),
            n.bindTexture(e.TEXTURE_CUBE_MAP, r.get(t).__webglTexture)
        }
        ,
        this.setupRenderTarget = function(t) {
            var i = r.get(t)
              , a = r.get(t.texture);
            t.addEventListener("dispose", m),
            a.__webglTexture = e.createTexture(),
            l.textures++;
            var o = t && t.isWebGLRenderTargetCube
              , s = d(t);
            if (o) {
                i.__webglFramebuffer = [];
                for (var c = 0; c < 6; c++)
                    i.__webglFramebuffer[c] = e.createFramebuffer()
            } else
                i.__webglFramebuffer = e.createFramebuffer();
            if (o) {
                for (n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture),
                g(e.TEXTURE_CUBE_MAP, t.texture, s),
                c = 0; c < 6; c++)
                    v(i.__webglFramebuffer[c], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + c);
                t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                n.bindTexture(e.TEXTURE_CUBE_MAP, null)
            } else
                n.bindTexture(e.TEXTURE_2D, a.__webglTexture),
                g(e.TEXTURE_2D, t.texture, s),
                v(i.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D),
                t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_2D),
                n.bindTexture(e.TEXTURE_2D, null);
            t.depthBuffer && x(t)
        }
        ,
        this.updateRenderTargetMipmap = function(t) {
            var a = t.texture;
            if (a.generateMipmaps && d(t) && a.minFilter !== i.Y && a.minFilter !== i.M) {
                var o = t && t.isWebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D
                  , s = r.get(a).__webglTexture;
                n.bindTexture(o, s),
                e.generateMipmap(o),
                n.bindTexture(o, null)
            }
        }
    }
    var Lr = n(31)
      , wr = n(45)
      , yr = n(27);
    function Pr(e) {
        console.log("THREE.WebGLRenderer", i.Oa);
        var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , n = void 0 !== e.context ? e.context : null
          , a = void 0 !== e.alpha && e.alpha
          , o = void 0 === e.depth || e.depth
          , s = void 0 === e.stencil || e.stencil
          , l = void 0 !== e.antialias && e.antialias
          , c = void 0 === e.premultipliedAlpha || e.premultipliedAlpha
          , u = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer
          , d = []
          , f = []
          , p = -1
          , m = []
          , h = -1
          , g = new Float32Array(8)
          , v = []
          , _ = [];
        this.domElement = t,
        this.context = null,
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.physicallyCorrectLights = !1,
        this.toneMapping = i.P,
        this.toneMappingExposure = 1,
        this.toneMappingWhitePoint = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var x, E = this, b = null, T = null, M = null, S = -1, L = "", w = null, y = new ki.a, P = null, R = new ki.a, A = 0, D = new Wi.a(0), C = 0, U = t.width, I = t.height, N = 1, F = new ki.a(0,0,U,I), O = !1, G = new ki.a(0,0,U,I), B = new nr.a, H = new function() {
            var e = this
              , t = null
              , n = 0
              , i = !1
              , r = !1
              , a = new yr.a
              , o = new wr.a
              , s = {
                value: null,
                needsUpdate: !1
            };
            function l() {
                s.value !== t && (s.value = t,
                s.needsUpdate = n > 0),
                e.numPlanes = n
            }
            function c(t, n, i, r) {
                var l = null !== t ? t.length : 0
                  , c = null;
                if (0 !== l) {
                    if (c = s.value,
                    !0 !== r || null === c) {
                        var u = i + 4 * l
                          , d = n.matrixWorldInverse;
                        o.getNormalMatrix(d),
                        (null === c || c.length < u) && (c = new Float32Array(u));
                        for (var f = 0, p = i; f !== l; ++f,
                        p += 4)
                            a.copy(t[f]).applyMatrix4(d, o),
                            a.normal.toArray(c, p),
                            c[p + 3] = a.constant
                    }
                    s.value = c,
                    s.needsUpdate = !0
                }
                return e.numPlanes = l,
                c
            }
            this.uniform = s,
            this.numPlanes = 0,
            this.init = function(e, r, a) {
                var o = 0 !== e.length || r || 0 !== n || i;
                return i = r,
                t = c(e, a, 0),
                n = e.length,
                o
            }
            ,
            this.beginShadows = function() {
                r = !0,
                c(null)
            }
            ,
            this.endShadows = function() {
                r = !1,
                l()
            }
            ,
            this.setState = function(e, a, o, u, d) {
                if (!i || null === e || 0 === e.length || r && !a)
                    r ? c(null) : l();
                else {
                    var f = r ? 0 : n
                      , p = 4 * f
                      , m = u.clippingState || null;
                    s.value = m,
                    m = c(e, o, p, d);
                    for (var h = 0; h !== p; ++h)
                        m[h] = t[h];
                    u.clippingState = m,
                    this.numPlanes += f
                }
            }
        }
        , V = !1, z = !1, W = new Lr.a, j = new r.a, Y = new zi.a, q = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }, Z = {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        };
        this.info = {
            render: Z,
            memory: {
                geometries: 0,
                textures: 0
            },
            programs: null
        };
        try {
            var K = {
                alpha: a,
                depth: o,
                stencil: s,
                antialias: l,
                premultipliedAlpha: c,
                preserveDrawingBuffer: u
            };
            if (null === (x = n || t.getContext("webgl", K) || t.getContext("experimental-webgl", K)))
                throw null !== t.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === x.getShaderPrecisionFormat && (x.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            ),
            t.addEventListener("webglcontextlost", Ee, !1)
        } catch (e) {
            console.error("THREE.WebGLRenderer: " + e)
        }
        var $ = new function(e) {
            var t = {};
            return {
                get: function(n) {
                    if (void 0 !== t[n])
                        return t[n];
                    var i;
                    switch (n) {
                    case "WEBGL_depth_texture":
                        i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        i = e.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        i = e.getExtension(n)
                    }
                    return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
                    t[n] = i,
                    i
                }
            }
        }
        (x);
        $.get("WEBGL_depth_texture"),
        $.get("OES_texture_float"),
        $.get("OES_texture_float_linear"),
        $.get("OES_texture_half_float"),
        $.get("OES_texture_half_float_linear"),
        $.get("OES_standard_derivatives"),
        $.get("ANGLE_instanced_arrays"),
        $.get("OES_element_index_uint") && (Er.a.MaxIndex = 4294967296);
        var J = new function(e, t, n) {
            var i;
            function r(t) {
                if ("highp" === t) {
                    if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0)
                        return "highp";
                    t = "mediump"
                }
                return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }
            var a = void 0 !== n.precision ? n.precision : "highp"
              , o = r(a);
            o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."),
            a = o);
            var s = !0 === n.logarithmicDepthBuffer && !!t.get("EXT_frag_depth")
              , l = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
              , c = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
              , u = e.getParameter(e.MAX_TEXTURE_SIZE)
              , d = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
              , f = e.getParameter(e.MAX_VERTEX_ATTRIBS)
              , p = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
              , m = e.getParameter(e.MAX_VARYING_VECTORS)
              , h = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
              , g = c > 0
              , v = !!t.get("OES_texture_float");
            return {
                getMaxAnisotropy: function() {
                    if (void 0 !== i)
                        return i;
                    var n = t.get("EXT_texture_filter_anisotropic");
                    return i = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                },
                getMaxPrecision: r,
                precision: a,
                logarithmicDepthBuffer: s,
                maxTextures: l,
                maxVertexTextures: c,
                maxTextureSize: u,
                maxCubemapSize: d,
                maxAttributes: f,
                maxVertexUniforms: p,
                maxVaryings: m,
                maxFragmentUniforms: h,
                vertexTextures: g,
                floatFragmentTextures: v,
                floatVertexTextures: g && v
            }
        }
        (x,$,e)
          , Q = new function(e, t, n) {
            var r = new function() {
                var t = !1
                  , n = new ki.a
                  , i = null
                  , r = new ki.a;
                return {
                    setMask: function(n) {
                        i === n || t || (e.colorMask(n, n, n, n),
                        i = n)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t, i, a, o) {
                        n.set(t, i, a, o),
                        !1 === r.equals(n) && (e.clearColor(t, i, a, o),
                        r.copy(n))
                    },
                    reset: function() {
                        t = !1,
                        i = null,
                        r.set(0, 0, 0, 1)
                    }
                }
            }
              , a = new function() {
                var t = !1
                  , n = null
                  , r = null
                  , a = null;
                return {
                    setTest: function(t) {
                        t ? I(e.DEPTH_TEST) : N(e.DEPTH_TEST)
                    },
                    setMask: function(i) {
                        n === i || t || (e.depthMask(i),
                        n = i)
                    },
                    setFunc: function(t) {
                        if (r !== t) {
                            if (t)
                                switch (t) {
                                case i.Ba:
                                    e.depthFunc(e.NEVER);
                                    break;
                                case i.e:
                                    e.depthFunc(e.ALWAYS);
                                    break;
                                case i.J:
                                    e.depthFunc(e.LESS);
                                    break;
                                case i.K:
                                    e.depthFunc(e.LEQUAL);
                                    break;
                                case i.x:
                                    e.depthFunc(e.EQUAL);
                                    break;
                                case i.G:
                                    e.depthFunc(e.GEQUAL);
                                    break;
                                case i.F:
                                    e.depthFunc(e.GREATER);
                                    break;
                                case i.Ga:
                                    e.depthFunc(e.NOTEQUAL);
                                    break;
                                default:
                                    e.depthFunc(e.LEQUAL)
                                }
                            else
                                e.depthFunc(e.LEQUAL);
                            r = t
                        }
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        a !== t && (e.clearDepth(t),
                        a = t)
                    },
                    reset: function() {
                        t = !1,
                        n = null,
                        r = null,
                        a = null
                    }
                }
            }
              , o = new function() {
                var t = !1
                  , n = null
                  , i = null
                  , r = null
                  , a = null
                  , o = null
                  , s = null
                  , l = null
                  , c = null;
                return {
                    setTest: function(t) {
                        t ? I(e.STENCIL_TEST) : N(e.STENCIL_TEST)
                    },
                    setMask: function(i) {
                        n === i || t || (e.stencilMask(i),
                        n = i)
                    },
                    setFunc: function(t, n, o) {
                        i === t && r === n && a === o || (e.stencilFunc(t, n, o),
                        i = t,
                        r = n,
                        a = o)
                    },
                    setOp: function(t, n, i) {
                        o === t && s === n && l === i || (e.stencilOp(t, n, i),
                        o = t,
                        s = n,
                        l = i)
                    },
                    setLocked: function(e) {
                        t = e
                    },
                    setClear: function(t) {
                        c !== t && (e.clearStencil(t),
                        c = t)
                    },
                    reset: function() {
                        t = !1,
                        n = null,
                        i = null,
                        r = null,
                        a = null,
                        o = null,
                        s = null,
                        l = null,
                        c = null
                    }
                }
            }
              , s = e.getParameter(e.MAX_VERTEX_ATTRIBS)
              , l = new Uint8Array(s)
              , c = new Uint8Array(s)
              , u = new Uint8Array(s)
              , d = {}
              , f = null
              , p = null
              , m = null
              , h = null
              , g = null
              , v = null
              , _ = null
              , x = null
              , E = !1
              , b = null
              , T = null
              , M = null
              , S = null
              , L = null
              , w = null
              , y = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
              , P = null
              , R = {}
              , A = new ki.a
              , D = new ki.a;
            function C(t, n, i) {
                var r = new Uint8Array(4)
                  , a = e.createTexture();
                e.bindTexture(t, a),
                e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
                e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
                for (var o = 0; o < i; o++)
                    e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
                return a
            }
            var U = {};
            function I(t) {
                !0 !== d[t] && (e.enable(t),
                d[t] = !0)
            }
            function N(t) {
                !1 !== d[t] && (e.disable(t),
                d[t] = !1)
            }
            function F(t, r, a, o, s, l, c, u) {
                if (t === i.Ca)
                    return N(e.BLEND),
                    void (p = t);
                I(e.BLEND),
                t === p && u === E || (t === i.c ? u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
                e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD),
                e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === i.pb ? u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
                e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
                e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === i.W ? u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
                e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
                e.blendFunc(e.ZERO, e.SRC_COLOR)) : u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
                e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
                e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)),
                p = t,
                E = u),
                t === i.r ? (s = s || r,
                l = l || a,
                c = c || o,
                r === m && s === v || (e.blendEquationSeparate(n(r), n(s)),
                m = r,
                v = s),
                a === h && o === g && l === _ && c === x || (e.blendFuncSeparate(n(a), n(o), n(l), n(c)),
                h = a,
                g = o,
                _ = l,
                x = c)) : (m = null,
                h = null,
                g = null,
                v = null,
                _ = null,
                x = null)
            }
            function O(e) {
                a.setFunc(e)
            }
            function G(t) {
                b !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW),
                b = t)
            }
            function B(t) {
                t !== i.q ? (I(e.CULL_FACE),
                t !== T && (t === i.o ? e.cullFace(e.BACK) : t === i.p ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : N(e.CULL_FACE),
                T = t
            }
            function H(t) {
                void 0 === t && (t = e.TEXTURE0 + y - 1),
                P !== t && (e.activeTexture(t),
                P = t)
            }
            function V(e, t, n, i) {
                r.setClear(e, t, n, i)
            }
            function z(e) {
                a.setClear(e)
            }
            function k(e) {
                o.setClear(e)
            }
            return U[e.TEXTURE_2D] = C(e.TEXTURE_2D, e.TEXTURE_2D, 1),
            U[e.TEXTURE_CUBE_MAP] = C(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
            {
                buffers: {
                    color: r,
                    depth: a,
                    stencil: o
                },
                init: function() {
                    V(0, 0, 0, 1),
                    z(1),
                    k(0),
                    I(e.DEPTH_TEST),
                    O(i.K),
                    G(!1),
                    B(i.o),
                    I(e.CULL_FACE),
                    I(e.BLEND),
                    F(i.Fa)
                },
                initAttributes: function() {
                    for (var e = 0, t = l.length; e < t; e++)
                        l[e] = 0
                },
                enableAttribute: function(n) {
                    l[n] = 1,
                    0 === c[n] && (e.enableVertexAttribArray(n),
                    c[n] = 1),
                    0 !== u[n] && (t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n, 0),
                    u[n] = 0)
                },
                enableAttributeAndDivisor: function(t, n, i) {
                    l[t] = 1,
                    0 === c[t] && (e.enableVertexAttribArray(t),
                    c[t] = 1),
                    u[t] !== n && (i.vertexAttribDivisorANGLE(t, n),
                    u[t] = n)
                },
                disableUnusedAttributes: function() {
                    for (var t = 0, n = c.length; t !== n; ++t)
                        c[t] !== l[t] && (e.disableVertexAttribArray(t),
                        c[t] = 0)
                },
                enable: I,
                disable: N,
                getCompressedTextureFormats: function() {
                    if (null === f && (f = [],
                    t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
                        for (var n = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), i = 0; i < n.length; i++)
                            f.push(n[i]);
                    return f
                },
                setBlending: F,
                setColorWrite: function(e) {
                    r.setMask(e)
                },
                setDepthTest: function(e) {
                    a.setTest(e)
                },
                setDepthWrite: function(e) {
                    a.setMask(e)
                },
                setDepthFunc: O,
                setStencilTest: function(e) {
                    o.setTest(e)
                },
                setStencilWrite: function(e) {
                    o.setMask(e)
                },
                setStencilFunc: function(e, t, n) {
                    o.setFunc(e, t, n)
                },
                setStencilOp: function(e, t, n) {
                    o.setOp(e, t, n)
                },
                setFlipSided: G,
                setCullFace: B,
                setLineWidth: function(t) {
                    t !== M && (e.lineWidth(t),
                    M = t)
                },
                setPolygonOffset: function(t, n, i) {
                    t ? (I(e.POLYGON_OFFSET_FILL),
                    S === n && L === i || (e.polygonOffset(n, i),
                    S = n,
                    L = i)) : N(e.POLYGON_OFFSET_FILL)
                },
                getScissorTest: function() {
                    return w
                },
                setScissorTest: function(t) {
                    w = t,
                    t ? I(e.SCISSOR_TEST) : N(e.SCISSOR_TEST)
                },
                activeTexture: H,
                bindTexture: function(t, n) {
                    null === P && H();
                    var i = R[P];
                    void 0 === i && (i = {
                        type: void 0,
                        texture: void 0
                    },
                    R[P] = i),
                    i.type === t && i.texture === n || (e.bindTexture(t, n || U[t]),
                    i.type = t,
                    i.texture = n)
                },
                compressedTexImage2D: function() {
                    try {
                        e.compressedTexImage2D.apply(e, arguments)
                    } catch (e) {
                        console.error(e)
                    }
                },
                texImage2D: function() {
                    try {
                        e.texImage2D.apply(e, arguments)
                    } catch (e) {
                        console.error(e)
                    }
                },
                clearColor: V,
                clearDepth: z,
                clearStencil: k,
                scissor: function(t) {
                    !1 === A.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
                    A.copy(t))
                },
                viewport: function(t) {
                    !1 === D.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
                    D.copy(t))
                },
                reset: function() {
                    for (var t = 0; t < c.length; t++)
                        1 === c[t] && (e.disableVertexAttribArray(t),
                        c[t] = 0);
                    d = {},
                    f = null,
                    P = null,
                    R = {},
                    p = null,
                    b = null,
                    T = null,
                    r.reset(),
                    a.reset(),
                    o.reset()
                }
            }
        }
        (x,$,Ue)
          , ee = new function() {
            var e = {};
            return {
                get: function(t) {
                    var n = t.uuid
                      , i = e[n];
                    return void 0 === i && (i = {},
                    e[n] = i),
                    i
                },
                delete: function(t) {
                    delete e[t.uuid]
                },
                clear: function() {
                    e = {}
                }
            }
        }
          , te = new Sr(x,$,Q,ee,J,Ue,this.info)
          , ne = new Tr(x,ee,this.info)
          , ie = new _r(this,J)
          , re = new function() {
            var e = {};
            return {
                get: function(t) {
                    if (void 0 !== e[t.id])
                        return e[t.id];
                    var n;
                    switch (t.type) {
                    case "DirectionalLight":
                        n = {
                            direction: new zi.a,
                            color: new Wi.a,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Xi.a
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new zi.a,
                            direction: new zi.a,
                            color: new Wi.a,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Xi.a
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new zi.a,
                            color: new Wi.a,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Xi.a
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new zi.a,
                            skyColor: new Wi.a,
                            groundColor: new Wi.a
                        }
                    }
                    return e[t.id] = n,
                    n
                }
            }
        }
        ;
        this.info.programs = ie.programs;
        var ae = new function(e, t, n) {
            var i;
            return {
                setMode: function(e) {
                    i = e
                },
                render: function(t, r) {
                    e.drawArrays(i, t, r),
                    n.calls++,
                    n.vertices += r,
                    i === e.TRIANGLES && (n.faces += r / 3)
                },
                renderInstances: function(r) {
                    var a = t.get("ANGLE_instanced_arrays");
                    if (null !== a) {
                        var o = r.attributes.position
                          , s = 0;
                        o && o.isInterleavedBufferAttribute ? (s = o.data.count,
                        a.drawArraysInstancedANGLE(i, 0, s, r.maxInstancedCount)) : (s = o.count,
                        a.drawArraysInstancedANGLE(i, 0, s, r.maxInstancedCount)),
                        n.calls++,
                        n.vertices += s * r.maxInstancedCount,
                        i === e.TRIANGLES && (n.faces += r.maxInstancedCount * s / 3)
                    } else
                        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
                }
            }
        }
        (x,$,Z)
          , oe = new function(e, t, n) {
            var i, r, a;
            return {
                setMode: function(e) {
                    i = e
                },
                setIndex: function(n) {
                    n.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (r = e.UNSIGNED_INT,
                    a = 4) : (r = e.UNSIGNED_SHORT,
                    a = 2)
                },
                render: function(t, o) {
                    e.drawElements(i, o, r, t * a),
                    n.calls++,
                    n.vertices += o,
                    i === e.TRIANGLES && (n.faces += o / 3)
                },
                renderInstances: function(o, s, l) {
                    var c = t.get("ANGLE_instanced_arrays");
                    null !== c ? (c.drawElementsInstancedANGLE(i, l, r, s * a, o.maxInstancedCount),
                    n.calls++,
                    n.vertices += l * o.maxInstancedCount,
                    i === e.TRIANGLES && (n.faces += o.maxInstancedCount * l / 3)) : console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
                }
            }
        }
        (x,$,Z)
          , se = new lr.a(-1,1,1,-1,0,1)
          , le = new sr.a
          , ce = new ir.a(new ar.a(2,2),new or.a({
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }))
          , ue = Yi.cube
          , de = new ir.a(new rr.a(5,5,5),new Qi.a({
            uniforms: ue.uniforms,
            vertexShader: ue.vertexShader,
            fragmentShader: ue.fragmentShader,
            side: i.f,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        function fe() {
            return null === T ? N : 1
        }
        function pe(e, t, n, i) {
            !0 === c && (e *= i,
            t *= i,
            n *= i),
            Q.clearColor(e, t, n, i)
        }
        function me() {
            Q.init(),
            Q.scissor(y.copy(F).multiplyScalar(N)),
            Q.viewport(R.copy(G).multiplyScalar(N)),
            pe(D.r, D.g, D.b, C)
        }
        function he() {
            b = null,
            w = null,
            L = "",
            S = -1,
            Q.reset()
        }
        me(),
        this.context = x,
        this.capabilities = J,
        this.extensions = $,
        this.properties = ee,
        this.state = Q;
        var ge = new function(e, t, n, a) {
            var o = e.context
              , s = e.state
              , l = new nr.a
              , c = new r.a
              , u = t.shadows
              , d = new Xi.a
              , f = new Xi.a(a.maxTextureSize,a.maxTextureSize)
              , p = new zi.a
              , m = new zi.a
              , h = []
              , g = 1
              , v = 2
              , _ = 1 + (g | v)
              , x = new Array(_)
              , E = new Array(_)
              , b = {}
              , T = [new zi.a(1,0,0), new zi.a(-1,0,0), new zi.a(0,0,1), new zi.a(0,0,-1), new zi.a(0,1,0), new zi.a(0,-1,0)]
              , M = [new zi.a(0,1,0), new zi.a(0,1,0), new zi.a(0,1,0), new zi.a(0,1,0), new zi.a(0,0,1), new zi.a(0,0,-1)]
              , S = [new ki.a, new ki.a, new ki.a, new ki.a, new ki.a, new ki.a]
              , L = new tr;
            L.depthPacking = i.Pa,
            L.clipping = !0;
            for (var w = Yi.distanceRGBA, y = X.a.clone(w.uniforms), P = 0; P !== _; ++P) {
                var R = 0 != (P & g)
                  , A = 0 != (P & v)
                  , D = L.clone();
                D.morphTargets = R,
                D.skinning = A,
                x[P] = D;
                var C = new Qi.a({
                    defines: {
                        USE_SHADOWMAP: ""
                    },
                    uniforms: y,
                    vertexShader: w.vertexShader,
                    fragmentShader: w.fragmentShader,
                    morphTargets: R,
                    skinning: A,
                    clipping: !0
                });
                E[P] = C
            }
            var U = this;
            function I(t, n, r, a) {
                var o = t.geometry
                  , s = null
                  , l = x
                  , c = t.customDepthMaterial;
                if (r && (l = E,
                c = t.customDistanceMaterial),
                c)
                    s = c;
                else {
                    var u = !1;
                    n.morphTargets && (o && o.isBufferGeometry ? u = o.morphAttributes && o.morphAttributes.position && o.morphAttributes.position.length > 0 : o && o.isGeometry && (u = o.morphTargets && o.morphTargets.length > 0));
                    var d = t.isSkinnedMesh && n.skinning
                      , f = 0;
                    u && (f |= g),
                    d && (f |= v),
                    s = l[f]
                }
                if (e.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                    var p = s.uuid
                      , m = n.uuid
                      , h = b[p];
                    void 0 === h && (h = {},
                    b[p] = h);
                    var _ = h[m];
                    void 0 === _ && (_ = s.clone(),
                    h[m] = _),
                    s = _
                }
                s.visible = n.visible,
                s.wireframe = n.wireframe;
                var T = n.side;
                return U.renderSingleSided && T == i.u && (T = i.D),
                U.renderReverseSided && (T === i.D ? T = i.f : T === i.f && (T = i.D)),
                s.side = T,
                s.clipShadows = n.clipShadows,
                s.clippingPlanes = n.clippingPlanes,
                s.wireframeLinewidth = n.wireframeLinewidth,
                s.linewidth = n.linewidth,
                r && void 0 !== s.uniforms.lightPos && s.uniforms.lightPos.value.copy(a),
                s
            }
            function N(e, t, n) {
                if (!1 !== e.visible) {
                    0 != (e.layers.mask & t.layers.mask) && (e.isMesh || e.isLine || e.isPoints) && (!e.castShadow || !1 !== e.frustumCulled && !0 !== l.intersectsObject(e) || !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
                    h.push(e)));
                    for (var i = e.children, r = 0, a = i.length; r < a; r++)
                        N(i[r], t, n)
                }
            }
            this.enabled = !1,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this.type = i.Ma,
            this.renderReverseSided = !0,
            this.renderSingleSided = !0,
            this.render = function(t, r) {
                if (!1 !== U.enabled && (!1 !== U.autoUpdate || !1 !== U.needsUpdate) && 0 !== u.length) {
                    var a, g;
                    s.clearColor(1, 1, 1, 1),
                    s.disable(o.BLEND),
                    s.setDepthTest(!0),
                    s.setScissorTest(!1);
                    for (var v = 0, _ = u.length; v < _; v++) {
                        var x = u[v]
                          , E = x.shadow;
                        if (void 0 !== E) {
                            var b = E.camera;
                            if (d.copy(E.mapSize),
                            d.min(f),
                            x && x.isPointLight) {
                                a = 6,
                                g = !0;
                                var L = d.x
                                  , w = d.y;
                                S[0].set(2 * L, w, L, w),
                                S[1].set(0, w, L, w),
                                S[2].set(3 * L, w, L, w),
                                S[3].set(L, w, L, w),
                                S[4].set(3 * L, 0, L, w),
                                S[5].set(L, 0, L, w),
                                d.x *= 4,
                                d.y *= 2
                            } else
                                a = 1,
                                g = !1;
                            if (null === E.map) {
                                var y = {
                                    minFilter: i.Y,
                                    magFilter: i.Y,
                                    format: i.Qa
                                };
                                E.map = new Ji.a(d.x,d.y,y),
                                b.updateProjectionMatrix()
                            }
                            E && E.isSpotLightShadow && E.update(x);
                            var P = E.map
                              , R = E.matrix;
                            m.setFromMatrixPosition(x.matrixWorld),
                            b.position.copy(m),
                            e.setRenderTarget(P),
                            e.clear();
                            for (var A = 0; A < a; A++) {
                                if (g) {
                                    p.copy(b.position),
                                    p.add(T[A]),
                                    b.up.copy(M[A]),
                                    b.lookAt(p);
                                    var D = S[A];
                                    s.viewport(D)
                                } else
                                    p.setFromMatrixPosition(x.target.matrixWorld),
                                    b.lookAt(p);
                                b.updateMatrixWorld(),
                                b.matrixWorldInverse.getInverse(b.matrixWorld),
                                R.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                                R.multiply(b.projectionMatrix),
                                R.multiply(b.matrixWorldInverse),
                                c.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse),
                                l.setFromMatrix(c),
                                h.length = 0,
                                N(t, r, b);
                                for (var C = 0, F = h.length; C < F; C++) {
                                    var O = h[C]
                                      , G = n.update(O)
                                      , B = O.material;
                                    if (B && B.isMultiMaterial)
                                        for (var H = G.groups, V = B.materials, z = 0, k = H.length; z < k; z++) {
                                            var W = H[z]
                                              , X = V[W.materialIndex];
                                            if (!0 === X.visible) {
                                                var j = I(O, X, g, m);
                                                e.renderBufferDirect(b, null, G, j, O, W)
                                            }
                                        }
                                    else
                                        j = I(O, B, g, m),
                                        e.renderBufferDirect(b, null, G, j, O, null)
                                }
                            }
                        } else
                            console.warn("THREE.WebGLShadowMap:", x, "has no shadow.")
                    }
                    var Y = e.getClearColor()
                      , q = e.getClearAlpha();
                    e.setClearColor(Y, q),
                    U.needsUpdate = !1
                }
            }
        }
        (this,q,ne,J);
        this.shadowMap = ge;
        var ve, _e = new $i(this,v), xe = new Zi(this,_);
        function Ee(e) {
            e.preventDefault(),
            he(),
            me(),
            ee.clear()
        }
        function be(e) {
            var t = e.target;
            t.removeEventListener("dispose", be),
            function(e) {
                Te(e),
                ee.delete(e)
            }(t)
        }
        function Te(e) {
            var t = ee.get(e).program;
            e.program = void 0,
            void 0 !== t && ie.releaseProgram(t)
        }
        function Me(e, t) {
            return Math.abs(t[0]) - Math.abs(e[0])
        }
        function Se(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
        }
        function Le(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
        }
        function we(e, t, n, i, r) {
            var a, o;
            n.transparent ? (a = m,
            o = ++h) : (a = f,
            o = ++p);
            var s = a[o];
            void 0 !== s ? (s.id = e.id,
            s.object = e,
            s.geometry = t,
            s.material = n,
            s.z = Y.z,
            s.group = r) : (s = {
                id: e.id,
                object: e,
                geometry: t,
                material: n,
                z: Y.z,
                group: r
            },
            a.push(s))
        }
        function ye(e) {
            if (!B.intersectsSphere(e))
                return !1;
            var t = H.numPlanes;
            if (0 === t)
                return !0;
            var n = E.clippingPlanes
              , i = e.center
              , r = -e.radius
              , a = 0;
            do {
                if (n[a].distanceToPoint(i) < r)
                    return !1
            } while (++a !== t);return !0
        }
        function Pe(e, t, n, i) {
            for (var r = 0, a = e.length; r < a; r++) {
                var o = e[r]
                  , s = o.object
                  , l = o.geometry
                  , c = void 0 === i ? o.material : i
                  , u = o.group;
                if (s.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, s.matrixWorld),
                s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
                s.isImmediateRenderObject) {
                    Re(c);
                    var d = Ae(t, n, c, s);
                    L = "",
                    s.render(function(e) {
                        E.renderBufferImmediate(e, d, c)
                    })
                } else
                    null !== s.onBeforeRender && s.onBeforeRender(),
                    E.renderBufferDirect(t, n, l, c, s, u)
            }
        }
        function Re(e) {
            e.side === i.u ? Q.disable(x.CULL_FACE) : Q.enable(x.CULL_FACE),
            Q.setFlipSided(e.side === i.f),
            !0 === e.transparent ? Q.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : Q.setBlending(i.Ca),
            Q.setDepthFunc(e.depthFunc),
            Q.setDepthTest(e.depthTest),
            Q.setDepthWrite(e.depthWrite),
            Q.setColorWrite(e.colorWrite),
            Q.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
        }
        function Ae(e, n, i, r) {
            A = 0;
            var a = ee.get(i);
            if (V && (z || e !== w)) {
                var o = e === w && i.id === S;
                H.setState(i.clippingPlanes, i.clipShadows, e, a, o)
            }
            !1 === i.needsUpdate && (void 0 === a.program ? i.needsUpdate = !0 : i.fog && a.fog !== n ? i.needsUpdate = !0 : i.lights && a.lightsHash !== q.hash ? i.needsUpdate = !0 : void 0 !== a.numClippingPlanes && a.numClippingPlanes !== H.numPlanes && (i.needsUpdate = !0)),
            i.needsUpdate && (!function(e, t, n) {
                var i = ee.get(e)
                  , r = ie.getParameters(e, q, t, H.numPlanes, n)
                  , a = ie.getProgramCode(e, r)
                  , o = i.program
                  , s = !0;
                if (void 0 === o)
                    e.addEventListener("dispose", be);
                else if (o.code !== a)
                    Te(e);
                else {
                    if (void 0 !== r.shaderID)
                        return;
                    s = !1
                }
                if (s) {
                    if (r.shaderID) {
                        var l = Yi[r.shaderID];
                        i.__webglShader = {
                            name: e.type,
                            uniforms: X.a.clone(l.uniforms),
                            vertexShader: l.vertexShader,
                            fragmentShader: l.fragmentShader
                        }
                    } else
                        i.__webglShader = {
                            name: e.type,
                            uniforms: e.uniforms,
                            vertexShader: e.vertexShader,
                            fragmentShader: e.fragmentShader
                        };
                    e.__webglShader = i.__webglShader,
                    o = ie.acquireProgram(e, r, a),
                    i.program = o,
                    e.program = o
                }
                var c = o.getAttributes();
                if (e.morphTargets) {
                    e.numSupportedMorphTargets = 0;
                    for (var u = 0; u < E.maxMorphTargets; u++)
                        c["morphTarget" + u] >= 0 && e.numSupportedMorphTargets++
                }
                if (e.morphNormals)
                    for (e.numSupportedMorphNormals = 0,
                    u = 0; u < E.maxMorphNormals; u++)
                        c["morphNormal" + u] >= 0 && e.numSupportedMorphNormals++;
                var d = i.__webglShader.uniforms;
                (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (i.numClippingPlanes = H.numPlanes,
                d.clippingPlanes = H.uniform),
                i.fog = t,
                i.lightsHash = q.hash,
                e.lights && (d.ambientLightColor.value = q.ambient,
                d.directionalLights.value = q.directional,
                d.spotLights.value = q.spot,
                d.pointLights.value = q.point,
                d.hemisphereLights.value = q.hemi,
                d.directionalShadowMap.value = q.directionalShadowMap,
                d.directionalShadowMatrix.value = q.directionalShadowMatrix,
                d.spotShadowMap.value = q.spotShadowMap,
                d.spotShadowMatrix.value = q.spotShadowMatrix,
                d.pointShadowMap.value = q.pointShadowMap,
                d.pointShadowMatrix.value = q.pointShadowMatrix);
                var f = i.program.getUniforms()
                  , p = k.seqWithValue(f.seq, d);
                i.uniformsList = p,
                i.dynamicUniforms = k.splitDynamic(p, d)
            }(i, n, r),
            i.needsUpdate = !1);
            var s, l, c = !1, u = !1, d = !1, f = a.program, p = f.getUniforms(), m = a.__webglShader.uniforms;
            if (f.id !== b && (x.useProgram(f.program),
            b = f.id,
            c = !0,
            u = !0,
            d = !0),
            i.id !== S && (S = i.id,
            u = !0),
            c || e !== w) {
                if (p.set(x, e, "projectionMatrix"),
                J.logarithmicDepthBuffer && p.setValue(x, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
                e !== w && (w = e,
                u = !0,
                d = !0),
                i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                    var h = p.map.cameraPosition;
                    void 0 !== h && h.setValue(x, Y.setFromMatrixPosition(e.matrixWorld))
                }
                (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && p.setValue(x, "viewMatrix", e.matrixWorldInverse),
                p.set(x, E, "toneMappingExposure"),
                p.set(x, E, "toneMappingWhitePoint")
            }
            if (i.skinning) {
                p.setOptional(x, r, "bindMatrix"),
                p.setOptional(x, r, "bindMatrixInverse");
                var g = r.skeleton;
                g && (J.floatVertexTextures && g.useVertexTexture ? (p.set(x, g, "boneTexture"),
                p.set(x, g, "boneTextureWidth"),
                p.set(x, g, "boneTextureHeight")) : p.setOptional(x, g, "boneMatrices"))
            }
            u && (i.lights && (l = d,
            (s = m).ambientLightColor.needsUpdate = l,
            s.directionalLights.needsUpdate = l,
            s.pointLights.needsUpdate = l,
            s.spotLights.needsUpdate = l,
            s.hemisphereLights.needsUpdate = l),
            n && i.fog && function(e, t) {
                e.fogColor.value = t.color,
                t.isFog ? (e.fogNear.value = t.near,
                e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
            }(m, n),
            (i.isMeshBasicMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshDepthMaterial) && function(e, t) {
                e.opacity.value = t.opacity,
                e.diffuse.value = t.color,
                t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity);
                e.map.value = t.map,
                e.specularMap.value = t.specularMap,
                e.alphaMap.value = t.alphaMap,
                t.aoMap && (e.aoMap.value = t.aoMap,
                e.aoMapIntensity.value = t.aoMapIntensity);
                var n;
                t.map ? n = t.map : t.specularMap ? n = t.specularMap : t.displacementMap ? n = t.displacementMap : t.normalMap ? n = t.normalMap : t.bumpMap ? n = t.bumpMap : t.roughnessMap ? n = t.roughnessMap : t.metalnessMap ? n = t.metalnessMap : t.alphaMap ? n = t.alphaMap : t.emissiveMap && (n = t.emissiveMap);
                if (void 0 !== n) {
                    n.isWebGLRenderTarget && (n = n.texture);
                    var i = n.offset
                      , r = n.repeat;
                    e.offsetRepeat.value.set(i.x, i.y, r.x, r.y)
                }
                e.envMap.value = t.envMap,
                e.flipEnvMap.value = t.envMap && t.envMap.isCubeTexture ? -1 : 1,
                e.reflectivity.value = t.reflectivity,
                e.refractionRatio.value = t.refractionRatio
            }(m, i),
            i.isLineBasicMaterial ? De(m, i) : i.isLineDashedMaterial ? (De(m, i),
            function(e, t) {
                e.dashSize.value = t.dashSize,
                e.totalSize.value = t.dashSize + t.gapSize,
                e.scale.value = t.scale
            }(m, i)) : i.isPointsMaterial ? function(e, n) {
                if (e.diffuse.value = n.color,
                e.opacity.value = n.opacity,
                e.size.value = n.size * N,
                e.scale.value = .5 * t.clientHeight,
                e.map.value = n.map,
                null !== n.map) {
                    var i = n.map.offset
                      , r = n.map.repeat;
                    e.offsetRepeat.value.set(i.x, i.y, r.x, r.y)
                }
            }(m, i) : i.isMeshLambertMaterial ? function(e, t) {
                t.lightMap && (e.lightMap.value = t.lightMap,
                e.lightMapIntensity.value = t.lightMapIntensity);
                t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
            }(m, i) : i.isMeshPhongMaterial ? function(e, t) {
                e.specular.value = t.specular,
                e.shininess.value = Math.max(t.shininess, 1e-4),
                t.lightMap && (e.lightMap.value = t.lightMap,
                e.lightMapIntensity.value = t.lightMapIntensity);
                t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
                t.bumpMap && (e.bumpMap.value = t.bumpMap,
                e.bumpScale.value = t.bumpScale);
                t.normalMap && (e.normalMap.value = t.normalMap,
                e.normalScale.value.copy(t.normalScale));
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias)
            }(m, i) : i.isMeshPhysicalMaterial ? function(e, t) {
                e.clearCoat.value = t.clearCoat,
                e.clearCoatRoughness.value = t.clearCoatRoughness,
                Ce(e, t)
            }(m, i) : i.isMeshStandardMaterial ? Ce(m, i) : i.isMeshDepthMaterial ? i.displacementMap && (m.displacementMap.value = i.displacementMap,
            m.displacementScale.value = i.displacementScale,
            m.displacementBias.value = i.displacementBias) : i.isMeshNormalMaterial && (m.opacity.value = i.opacity),
            k.upload(x, a.uniformsList, m, E)),
            p.set(x, r, "modelViewMatrix"),
            p.set(x, r, "normalMatrix"),
            p.setValue(x, "modelMatrix", r.matrixWorld);
            var v = a.dynamicUniforms;
            return null !== v && (k.evalDynamic(v, m, r, i, e),
            k.upload(x, v, m, E)),
            f
        }
        function De(e, t) {
            e.diffuse.value = t.color,
            e.opacity.value = t.opacity
        }
        function Ce(e, t) {
            e.roughness.value = t.roughness,
            e.metalness.value = t.metalness,
            t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
            t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
            t.lightMap && (e.lightMap.value = t.lightMap,
            e.lightMapIntensity.value = t.lightMapIntensity),
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
            t.bumpMap && (e.bumpMap.value = t.bumpMap,
            e.bumpScale.value = t.bumpScale),
            t.normalMap && (e.normalMap.value = t.normalMap,
            e.normalScale.value.copy(t.normalScale)),
            t.displacementMap && (e.displacementMap.value = t.displacementMap,
            e.displacementScale.value = t.displacementScale,
            e.displacementBias.value = t.displacementBias),
            t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
        }
        function Ue(e) {
            var t;
            if (e === i.gb)
                return x.REPEAT;
            if (e === i.j)
                return x.CLAMP_TO_EDGE;
            if (e === i.U)
                return x.MIRRORED_REPEAT;
            if (e === i.Y)
                return x.NEAREST;
            if (e === i.Aa)
                return x.NEAREST_MIPMAP_NEAREST;
            if (e === i.Z)
                return x.NEAREST_MIPMAP_LINEAR;
            if (e === i.M)
                return x.LINEAR;
            if (e === i.O)
                return x.LINEAR_MIPMAP_NEAREST;
            if (e === i.N)
                return x.LINEAR_MIPMAP_LINEAR;
            if (e === i.vb)
                return x.UNSIGNED_BYTE;
            if (e === i.yb)
                return x.UNSIGNED_SHORT_4_4_4_4;
            if (e === i.zb)
                return x.UNSIGNED_SHORT_5_5_5_1;
            if (e === i.Ab)
                return x.UNSIGNED_SHORT_5_6_5;
            if (e === i.h)
                return x.BYTE;
            if (e === i.ib)
                return x.SHORT;
            if (e === i.Bb)
                return x.UNSIGNED_SHORT;
            if (e === i.I)
                return x.INT;
            if (e === i.xb)
                return x.UNSIGNED_INT;
            if (e === i.B)
                return x.FLOAT;
            if (null !== (t = $.get("OES_texture_half_float")) && e === i.H)
                return t.HALF_FLOAT_OES;
            if (e === i.d)
                return x.ALPHA;
            if (e === i.Ya)
                return x.RGB;
            if (e === i.Qa)
                return x.RGBA;
            if (e === i.R)
                return x.LUMINANCE;
            if (e === i.Q)
                return x.LUMINANCE_ALPHA;
            if (e === i.s)
                return x.DEPTH_COMPONENT;
            if (e === i.t)
                return x.DEPTH_STENCIL;
            if (e === i.a)
                return x.FUNC_ADD;
            if (e === i.ob)
                return x.FUNC_SUBTRACT;
            if (e === i.hb)
                return x.FUNC_REVERSE_SUBTRACT;
            if (e === i.Cb)
                return x.ZERO;
            if (e === i.Ha)
                return x.ONE;
            if (e === i.nb)
                return x.SRC_COLOR;
            if (e === i.La)
                return x.ONE_MINUS_SRC_COLOR;
            if (e === i.lb)
                return x.SRC_ALPHA;
            if (e === i.Ka)
                return x.ONE_MINUS_SRC_ALPHA;
            if (e === i.v)
                return x.DST_ALPHA;
            if (e === i.Ia)
                return x.ONE_MINUS_DST_ALPHA;
            if (e === i.w)
                return x.DST_COLOR;
            if (e === i.Ja)
                return x.ONE_MINUS_DST_COLOR;
            if (e === i.mb)
                return x.SRC_ALPHA_SATURATE;
            if (null !== (t = $.get("WEBGL_compressed_texture_s3tc"))) {
                if (e === i.eb)
                    return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (e === i.Ta)
                    return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (e === i.Ua)
                    return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (e === i.Va)
                    return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (null !== (t = $.get("WEBGL_compressed_texture_pvrtc"))) {
                if (e === i.db)
                    return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (e === i.cb)
                    return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (e === i.Sa)
                    return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (e === i.Ra)
                    return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (null !== (t = $.get("WEBGL_compressed_texture_etc1")) && e === i.bb)
                return t.COMPRESSED_RGB_ETC1_WEBGL;
            if (null !== (t = $.get("EXT_blend_minmax"))) {
                if (e === i.T)
                    return t.MIN_EXT;
                if (e === i.S)
                    return t.MAX_EXT
            }
            return null !== (t = $.get("WEBGL_depth_texture")) && e === i.wb ? t.UNSIGNED_INT_24_8_WEBGL : 0
        }
        this.getContext = function() {
            return x
        }
        ,
        this.getContextAttributes = function() {
            return x.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            $.get("WEBGL_lose_context").loseContext()
        }
        ,
        this.getMaxAnisotropy = function() {
            return J.getMaxAnisotropy()
        }
        ,
        this.getPrecision = function() {
            return J.precision
        }
        ,
        this.getPixelRatio = function() {
            return N
        }
        ,
        this.setPixelRatio = function(e) {
            void 0 !== e && (N = e,
            this.setSize(G.z, G.w, !1))
        }
        ,
        this.getSize = function() {
            return {
                width: U,
                height: I
            }
        }
        ,
        this.setSize = function(e, n, i) {
            U = e,
            I = n,
            t.width = e * N,
            t.height = n * N,
            !1 !== i && (t.style.width = e + "px",
            t.style.height = n + "px"),
            this.setViewport(0, 0, e, n)
        }
        ,
        this.setViewport = function(e, t, n, i) {
            Q.viewport(G.set(e, t, n, i))
        }
        ,
        this.setScissor = function(e, t, n, i) {
            Q.scissor(F.set(e, t, n, i))
        }
        ,
        this.setScissorTest = function(e) {
            Q.setScissorTest(O = e)
        }
        ,
        this.getClearColor = function() {
            return D
        }
        ,
        this.setClearColor = function(e, t) {
            D.set(e),
            C = void 0 !== t ? t : 1,
            pe(D.r, D.g, D.b, C)
        }
        ,
        this.getClearAlpha = function() {
            return C
        }
        ,
        this.setClearAlpha = function(e) {
            C = e,
            pe(D.r, D.g, D.b, C)
        }
        ,
        this.clear = function(e, t, n) {
            var i = 0;
            (void 0 === e || e) && (i |= x.COLOR_BUFFER_BIT),
            (void 0 === t || t) && (i |= x.DEPTH_BUFFER_BIT),
            (void 0 === n || n) && (i |= x.STENCIL_BUFFER_BIT),
            x.clear(i)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.clearTarget = function(e, t, n, i) {
            this.setRenderTarget(e),
            this.clear(t, n, i)
        }
        ,
        this.resetGLState = he,
        this.dispose = function() {
            m = [],
            h = -1,
            f = [],
            p = -1,
            t.removeEventListener("webglcontextlost", Ee, !1)
        }
        ,
        this.renderBufferImmediate = function(e, t, n) {
            Q.initAttributes();
            var r = ee.get(e);
            e.hasPositions && !r.position && (r.position = x.createBuffer()),
            e.hasNormals && !r.normal && (r.normal = x.createBuffer()),
            e.hasUvs && !r.uv && (r.uv = x.createBuffer()),
            e.hasColors && !r.color && (r.color = x.createBuffer());
            var a = t.getAttributes();
            if (e.hasPositions && (x.bindBuffer(x.ARRAY_BUFFER, r.position),
            x.bufferData(x.ARRAY_BUFFER, e.positionArray, x.DYNAMIC_DRAW),
            Q.enableAttribute(a.position),
            x.vertexAttribPointer(a.position, 3, x.FLOAT, !1, 0, 0)),
            e.hasNormals) {
                if (x.bindBuffer(x.ARRAY_BUFFER, r.normal),
                !n.isMeshPhongMaterial && !n.isMeshStandardMaterial && n.shading === i.A)
                    for (var o = 0, s = 3 * e.count; o < s; o += 9) {
                        var l = e.normalArray
                          , c = (l[o + 0] + l[o + 3] + l[o + 6]) / 3
                          , u = (l[o + 1] + l[o + 4] + l[o + 7]) / 3
                          , d = (l[o + 2] + l[o + 5] + l[o + 8]) / 3;
                        l[o + 0] = c,
                        l[o + 1] = u,
                        l[o + 2] = d,
                        l[o + 3] = c,
                        l[o + 4] = u,
                        l[o + 5] = d,
                        l[o + 6] = c,
                        l[o + 7] = u,
                        l[o + 8] = d
                    }
                x.bufferData(x.ARRAY_BUFFER, e.normalArray, x.DYNAMIC_DRAW),
                Q.enableAttribute(a.normal),
                x.vertexAttribPointer(a.normal, 3, x.FLOAT, !1, 0, 0)
            }
            e.hasUvs && n.map && (x.bindBuffer(x.ARRAY_BUFFER, r.uv),
            x.bufferData(x.ARRAY_BUFFER, e.uvArray, x.DYNAMIC_DRAW),
            Q.enableAttribute(a.uv),
            x.vertexAttribPointer(a.uv, 2, x.FLOAT, !1, 0, 0)),
            e.hasColors && n.vertexColors !== i.Da && (x.bindBuffer(x.ARRAY_BUFFER, r.color),
            x.bufferData(x.ARRAY_BUFFER, e.colorArray, x.DYNAMIC_DRAW),
            Q.enableAttribute(a.color),
            x.vertexAttribPointer(a.color, 3, x.FLOAT, !1, 0, 0)),
            Q.disableUnusedAttributes(),
            x.drawArrays(x.TRIANGLES, 0, e.count),
            e.count = 0
        }
        ,
        this.renderBufferDirect = function(e, t, n, r, a, o) {
            Re(r);
            var s = Ae(e, t, r, a)
              , l = !1
              , c = n.id + "_" + s.id + "_" + r.wireframe;
            c !== L && (L = c,
            l = !0);
            var u = a.morphTargetInfluences;
            if (void 0 !== u) {
                for (var d = [], f = 0, p = u.length; f < p; f++) {
                    var m = u[f];
                    d.push([m, f])
                }
                d.sort(Me),
                d.length > 8 && (d.length = 8);
                var h = n.morphAttributes;
                for (f = 0,
                p = d.length; f < p; f++) {
                    m = d[f];
                    if (g[f] = m[0],
                    0 !== m[0]) {
                        var v = m[1];
                        !0 === r.morphTargets && h.position && n.addAttribute("morphTarget" + f, h.position[v]),
                        !0 === r.morphNormals && h.normal && n.addAttribute("morphNormal" + f, h.normal[v])
                    } else
                        !0 === r.morphTargets && n.removeAttribute("morphTarget" + f),
                        !0 === r.morphNormals && n.removeAttribute("morphNormal" + f)
                }
                f = d.length;
                for (var _ = g.length; f < _; f++)
                    g[f] = 0;
                s.getUniforms().setValue(x, "morphTargetInfluences", g),
                l = !0
            }
            v = n.index;
            var E, b = n.attributes.position, T = 1;
            !0 === r.wireframe && (v = ne.getWireframeAttribute(n),
            T = 2),
            null !== v ? (E = oe).setIndex(v) : E = ae,
            l && (!function(e, t, n, i) {
                var r;
                if (n && n.isInstancedBufferGeometry && null === (r = $.get("ANGLE_instanced_arrays")))
                    return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                void 0 === i && (i = 0);
                Q.initAttributes();
                var a = n.attributes
                  , o = t.getAttributes()
                  , s = e.defaultAttributeValues;
                for (var l in o) {
                    var c = o[l];
                    if (c >= 0) {
                        var u = a[l];
                        if (void 0 !== u) {
                            var d = x.FLOAT
                              , f = u.array
                              , p = u.normalized;
                            f instanceof Float32Array ? d = x.FLOAT : f instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : f instanceof Uint16Array ? d = x.UNSIGNED_SHORT : f instanceof Int16Array ? d = x.SHORT : f instanceof Uint32Array ? d = x.UNSIGNED_INT : f instanceof Int32Array ? d = x.INT : f instanceof Int8Array ? d = x.BYTE : f instanceof Uint8Array && (d = x.UNSIGNED_BYTE);
                            var m = u.itemSize
                              , h = ne.getAttributeBuffer(u);
                            if (u && u.isInterleavedBufferAttribute) {
                                var g = u.data
                                  , v = g.stride
                                  , _ = u.offset;
                                g && g.isInstancedInterleavedBuffer ? (Q.enableAttributeAndDivisor(c, g.meshPerAttribute, r),
                                void 0 === n.maxInstancedCount && (n.maxInstancedCount = g.meshPerAttribute * g.count)) : Q.enableAttribute(c),
                                x.bindBuffer(x.ARRAY_BUFFER, h),
                                x.vertexAttribPointer(c, m, d, p, v * g.array.BYTES_PER_ELEMENT, (i * v + _) * g.array.BYTES_PER_ELEMENT)
                            } else
                                u && u.isInstancedBufferAttribute ? (Q.enableAttributeAndDivisor(c, u.meshPerAttribute, r),
                                void 0 === n.maxInstancedCount && (n.maxInstancedCount = u.meshPerAttribute * u.count)) : Q.enableAttribute(c),
                                x.bindBuffer(x.ARRAY_BUFFER, h),
                                x.vertexAttribPointer(c, m, d, p, 0, i * m * u.array.BYTES_PER_ELEMENT)
                        } else if (void 0 !== s) {
                            var E = s[l];
                            if (void 0 !== E)
                                switch (E.length) {
                                case 2:
                                    x.vertexAttrib2fv(c, E);
                                    break;
                                case 3:
                                    x.vertexAttrib3fv(c, E);
                                    break;
                                case 4:
                                    x.vertexAttrib4fv(c, E);
                                    break;
                                default:
                                    x.vertexAttrib1fv(c, E)
                                }
                        }
                    }
                }
                Q.disableUnusedAttributes()
            }(r, s, n),
            null !== v && x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, ne.getAttributeBuffer(v)));
            var M = 0;
            null !== v ? M = v.count : void 0 !== b && (M = b.count);
            var S = n.drawRange.start * T
              , w = n.drawRange.count * T
              , y = null !== o ? o.start * T : 0
              , P = null !== o ? o.count * T : 1 / 0
              , R = Math.max(S, y)
              , A = Math.min(M, S + w, y + P) - 1
              , D = Math.max(0, A - R + 1);
            if (0 !== D) {
                if (a.isMesh)
                    if (!0 === r.wireframe)
                        Q.setLineWidth(r.wireframeLinewidth * fe()),
                        E.setMode(x.LINES);
                    else
                        switch (a.drawMode) {
                        case i.sb:
                            E.setMode(x.TRIANGLES);
                            break;
                        case i.rb:
                            E.setMode(x.TRIANGLE_STRIP);
                            break;
                        case i.qb:
                            E.setMode(x.TRIANGLE_FAN)
                        }
                else if (a.isLine) {
                    var C = r.linewidth;
                    void 0 === C && (C = 1),
                    Q.setLineWidth(C * fe()),
                    a.isLineSegments ? E.setMode(x.LINES) : E.setMode(x.LINE_STRIP)
                } else
                    a.isPoints && E.setMode(x.POINTS);
                n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && E.renderInstances(n, R, D) : E.render(R, D)
            }
        }
        ,
        this.render = function(e, t, n, a) {
            if (void 0 === t || !0 === t.isCamera) {
                var o = e.fog;
                L = "",
                S = -1,
                w = null,
                !0 === e.autoUpdate && e.updateMatrixWorld(),
                null === t.parent && t.updateMatrixWorld(),
                t.matrixWorldInverse.getInverse(t.matrixWorld),
                j.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
                B.setFromMatrix(j),
                d.length = 0,
                p = -1,
                h = -1,
                v.length = 0,
                _.length = 0,
                z = this.localClippingEnabled,
                V = H.init(this.clippingPlanes, z, t),
                function e(t, n) {
                    if (!1 === t.visible)
                        return;
                    var i = 0 != (t.layers.mask & n.layers.mask);
                    if (i)
                        if (t.isLight)
                            d.push(t);
                        else if (t.isSprite)
                            !1 !== t.frustumCulled && !0 !== (p = t,
                            W.center.set(0, 0, 0),
                            W.radius = .7071067811865476,
                            W.applyMatrix4(p.matrixWorld),
                            ye(W)) || v.push(t);
                        else if (t.isLensFlare)
                            _.push(t);
                        else if (t.isImmediateRenderObject)
                            !0 === E.sortObjects && (Y.setFromMatrixPosition(t.matrixWorld),
                            Y.applyProjection(j)),
                            we(t, null, t.material, Y.z, null);
                        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(),
                        !1 === t.frustumCulled || !0 === function(e) {
                            var t = e.geometry;
                            null === t.boundingSphere && t.computeBoundingSphere();
                            return W.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
                            ye(W)
                        }(t))) {
                            var r = t.material;
                            if (!0 === r.visible) {
                                !0 === E.sortObjects && (Y.setFromMatrixPosition(t.matrixWorld),
                                Y.applyProjection(j));
                                var a = ne.update(t);
                                if (r.isMultiMaterial)
                                    for (var o = a.groups, s = r.materials, l = 0, c = o.length; l < c; l++) {
                                        var u = o[l]
                                          , f = s[u.materialIndex];
                                        !0 === f.visible && we(t, a, f, Y.z, u)
                                    }
                                else
                                    we(t, a, r, Y.z, null)
                            }
                        }
                    var p;
                    var m = t.children;
                    for (var l = 0, c = m.length; l < c; l++)
                        e(m[l], n)
                }(e, t),
                f.length = p + 1,
                m.length = h + 1,
                !0 === E.sortObjects && (f.sort(Se),
                m.sort(Le)),
                V && H.beginShadows(),
                function(e) {
                    for (var t = 0, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        r.castShadow && (q.shadows[t++] = r)
                    }
                    q.shadows.length = t
                }(d),
                ge.render(e, t),
                function(e, t) {
                    var n, i, a, o, s, l, c, u = 0, d = 0, f = 0, p = t.matrixWorldInverse, m = 0, h = 0, g = 0, v = 0;
                    for (n = 0,
                    i = e.length; n < i; n++)
                        if (a = e[n],
                        o = a.color,
                        s = a.intensity,
                        l = a.distance,
                        c = a.shadow && a.shadow.map ? a.shadow.map.texture : null,
                        a.isAmbientLight)
                            u += o.r * s,
                            d += o.g * s,
                            f += o.b * s;
                        else if (a.isDirectionalLight) {
                            var _ = re.get(a);
                            _.color.copy(a.color).multiplyScalar(a.intensity),
                            _.direction.setFromMatrixPosition(a.matrixWorld),
                            Y.setFromMatrixPosition(a.target.matrixWorld),
                            _.direction.sub(Y),
                            _.direction.transformDirection(p),
                            _.shadow = a.castShadow,
                            a.castShadow && (_.shadowBias = a.shadow.bias,
                            _.shadowRadius = a.shadow.radius,
                            _.shadowMapSize = a.shadow.mapSize),
                            q.directionalShadowMap[m] = c,
                            q.directionalShadowMatrix[m] = a.shadow.matrix,
                            q.directional[m++] = _
                        } else if (a.isSpotLight) {
                            var _ = re.get(a);
                            _.position.setFromMatrixPosition(a.matrixWorld),
                            _.position.applyMatrix4(p),
                            _.color.copy(o).multiplyScalar(s),
                            _.distance = l,
                            _.direction.setFromMatrixPosition(a.matrixWorld),
                            Y.setFromMatrixPosition(a.target.matrixWorld),
                            _.direction.sub(Y),
                            _.direction.transformDirection(p),
                            _.coneCos = Math.cos(a.angle),
                            _.penumbraCos = Math.cos(a.angle * (1 - a.penumbra)),
                            _.decay = 0 === a.distance ? 0 : a.decay,
                            _.shadow = a.castShadow,
                            a.castShadow && (_.shadowBias = a.shadow.bias,
                            _.shadowRadius = a.shadow.radius,
                            _.shadowMapSize = a.shadow.mapSize),
                            q.spotShadowMap[g] = c,
                            q.spotShadowMatrix[g] = a.shadow.matrix,
                            q.spot[g++] = _
                        } else if (a.isPointLight) {
                            var _ = re.get(a);
                            _.position.setFromMatrixPosition(a.matrixWorld),
                            _.position.applyMatrix4(p),
                            _.color.copy(a.color).multiplyScalar(a.intensity),
                            _.distance = a.distance,
                            _.decay = 0 === a.distance ? 0 : a.decay,
                            _.shadow = a.castShadow,
                            a.castShadow && (_.shadowBias = a.shadow.bias,
                            _.shadowRadius = a.shadow.radius,
                            _.shadowMapSize = a.shadow.mapSize),
                            q.pointShadowMap[h] = c,
                            void 0 === q.pointShadowMatrix[h] && (q.pointShadowMatrix[h] = new r.a),
                            Y.setFromMatrixPosition(a.matrixWorld).negate(),
                            q.pointShadowMatrix[h].identity().setPosition(Y),
                            q.point[h++] = _
                        } else if (a.isHemisphereLight) {
                            var _ = re.get(a);
                            _.direction.setFromMatrixPosition(a.matrixWorld),
                            _.direction.transformDirection(p),
                            _.direction.normalize(),
                            _.skyColor.copy(a.color).multiplyScalar(s),
                            _.groundColor.copy(a.groundColor).multiplyScalar(s),
                            q.hemi[v++] = _
                        }
                    q.ambient[0] = u,
                    q.ambient[1] = d,
                    q.ambient[2] = f,
                    q.directional.length = m,
                    q.spot.length = g,
                    q.point.length = h,
                    q.hemi.length = v,
                    q.hash = m + "," + h + "," + g + "," + v + "," + q.shadows.length
                }(d, t),
                V && H.endShadows(),
                Z.calls = 0,
                Z.vertices = 0,
                Z.faces = 0,
                Z.points = 0,
                void 0 === n && (n = null),
                this.setRenderTarget(n);
                var s = e.background;
                if (null === s ? pe(D.r, D.g, D.b, C) : s && s.isColor && (pe(s.r, s.g, s.b, 1),
                a = !0),
                (this.autoClear || a) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
                s && s.isCubeTexture ? (le.projectionMatrix.copy(t.projectionMatrix),
                le.matrixWorld.extractRotation(t.matrixWorld),
                le.matrixWorldInverse.getInverse(le.matrixWorld),
                de.material.uniforms.tCube.value = s,
                de.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse, de.matrixWorld),
                ne.update(de),
                E.renderBufferDirect(le, null, de.geometry, de.material, de, null)) : s && s.isTexture && (ce.material.map = s,
                ne.update(ce),
                E.renderBufferDirect(se, null, ce.geometry, ce.material, ce, null)),
                e.overrideMaterial) {
                    var l = e.overrideMaterial;
                    Pe(f, t, o, l),
                    Pe(m, t, o, l)
                } else
                    Q.setBlending(i.Ca),
                    Pe(f, t, o),
                    Pe(m, t, o);
                _e.render(e, t),
                xe.render(e, t, R),
                n && te.updateRenderTargetMipmap(n),
                Q.setDepthTest(!0),
                Q.setDepthWrite(!0),
                Q.setColorWrite(!0)
            } else
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }
        ,
        this.setFaceCulling = function(e, t) {
            Q.setCullFace(e),
            Q.setFlipSided(t === i.C)
        }
        ,
        this.allocTextureUnit = function() {
            var e = A;
            return e >= J.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + J.maxTextures),
            A += 1,
            e
        }
        ,
        this.setTexture2D = (ve = !1,
        function(e, t) {
            e && e.isWebGLRenderTarget && (ve || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
            ve = !0),
            e = e.texture),
            te.setTexture2D(e, t)
        }
        ),
        this.setTexture = function() {
            var e = !1;
            return function(t, n) {
                e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
                e = !0),
                te.setTexture2D(t, n)
            }
        }(),
        this.setTextureCube = function() {
            var e = !1;
            return function(t, n) {
                t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
                e = !0),
                t = t.texture),
                t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? te.setTextureCube(t, n) : te.setTextureCubeDynamic(t, n)
            }
        }(),
        this.getCurrentRenderTarget = function() {
            return T
        }
        ,
        this.setRenderTarget = function(e) {
            T = e,
            e && void 0 === ee.get(e).__webglFramebuffer && te.setupRenderTarget(e);
            var t, n = e && e.isWebGLRenderTargetCube;
            if (e) {
                var i = ee.get(e);
                t = n ? i.__webglFramebuffer[e.activeCubeFace] : i.__webglFramebuffer,
                y.copy(e.scissor),
                P = e.scissorTest,
                R.copy(e.viewport)
            } else
                t = null,
                y.copy(F).multiplyScalar(N),
                P = O,
                R.copy(G).multiplyScalar(N);
            if (M !== t && (x.bindFramebuffer(x.FRAMEBUFFER, t),
            M = t),
            Q.scissor(y),
            Q.setScissorTest(P),
            Q.viewport(R),
            n) {
                var r = ee.get(e.texture);
                x.framebufferTexture2D(x.FRAMEBUFFER, x.COLOR_ATTACHMENT0, x.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, r.__webglTexture, e.activeMipMapLevel)
            }
        }
        ,
        this.readRenderTargetPixels = function(e, t, n, r, a, o) {
            if (!1 !== (e && e.isWebGLRenderTarget)) {
                var s = ee.get(e).__webglFramebuffer;
                if (s) {
                    var l = !1;
                    s !== M && (x.bindFramebuffer(x.FRAMEBUFFER, s),
                    l = !0);
                    try {
                        var c = e.texture
                          , u = c.format
                          , d = c.type;
                        if (u !== i.Qa && Ue(u) !== x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(d === i.vb || Ue(d) === x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE) || d === i.B && ($.get("OES_texture_float") || $.get("WEBGL_color_buffer_float")) || d === i.H && $.get("EXT_color_buffer_half_float")))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        x.checkFramebufferStatus(x.FRAMEBUFFER) === x.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - a && x.readPixels(t, n, r, a, Ue(u), Ue(d), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        l && x.bindFramebuffer(x.FRAMEBUFFER, M)
                    }
                }
            } else
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
    }
    n.d(t, "a", function() {
        return Pr
    })
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var i = n(260);
    function r(e, t, n) {
        i.a.call(this, e, t, n),
        this.activeCubeFace = 0,
        this.activeMipMapLevel = 0
    }
    r.prototype = Object.create(i.a.prototype),
    r.prototype.constructor = r,
    r.prototype.isWebGLRenderTargetCube = !0
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        this.autoStart = void 0 === e || e,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    n.d(t, "a", function() {
        return i
    }),
    i.prototype = {
        constructor: i,
        start: function() {
            this.startTime = (performance || Date).now(),
            this.oldTime = this.startTime,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var e = 0;
            if (this.autoStart && !this.running && this.start(),
            this.running) {
                var t = (performance || Date).now();
                e = (t - this.oldTime) / 1e3,
                this.oldTime = t,
                this.elapsedTime += e
            }
            return e
        }
    }
}
, function(e, t) {
    e.exports = "#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform float opacity;\n\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "varying vec3 vNormal;\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\tvNormal = normalize( normalMatrix * normal );\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform float opacity;\nvarying vec3 vNormal;\n\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\n\t#include <logdepthbuf_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "#define PHYSICAL\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "#define PHYSICAL\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\n\nuniform float envMapIntensity; // temporary\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "#define LAMBERT\n\nvarying vec3 vLightFront;\n\n#ifdef DOUBLE_SIDED\n\n\tvarying vec3 vLightBack;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\n\n#ifdef DOUBLE_SIDED\n\n\tvarying vec3 vLightBack;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\n\t#include <lightmap_fragment>\n\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\n\tvLineDistance = scale * lineDistance;\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
}
, function(e, t) {
    e.exports = "varying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform sampler2D tEquirect;\nuniform float tFlip;\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\t// \tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n}\n"
}
, function(e, t) {
    e.exports = "varying vec4 vWorldPosition;\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition;\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n\n}\n"
}
, function(e, t) {
    e.exports = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\n\t#endif\n\n}\n"
}
, function(e, t) {
    e.exports = "varying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n"
}
, function(e, t) {
    e.exports = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n\n}\n"
}
, function(e, t) {
    e.exports = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif"
}
, function(e, t) {
    e.exports = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif"
}
, function(e, t) {
    e.exports = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif"
}
, function(e, t) {
    e.exports = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif"
}
, function(e, t) {
    e.exports = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\n#endif"
}
, function(e, t) {
    e.exports = "#define saturate(a) clamp( a, 0.0, 1.0 )\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n  return toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n  // John Hable's filmic operator from Uncharted 2 video game\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n  // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n"
}
, function(e, t) {
    e.exports = "#if defined( TONE_MAPPING )\n\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif"
}
, function(e, t) {
    e.exports = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif"
}
, function(e, t) {
    e.exports = "float getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\tDirectionalLight directionalLight;\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\tSpotLight spotLight;\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\tPointLight pointLight;\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#endif\n\n\treturn shadow;\n\n}\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\n\t#endif\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\n\t\tvec2 f = fract( uv * size + 0.5 );\n\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\n\t\treturn c;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn 1.0;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the distance from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t// dp = distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif"
}
, function(e, t) {
    e.exports = "float roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n"
}
, function(e, t) {
    e.exports = "#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\n\treturn dot( v, UnpackFactors );\n\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef FLAT_SHADED\n\n\t// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...\n\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif"
}
, function(e, t) {
    e.exports = "float metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_MAP\n\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n\t#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif"
}
, function(e, t) {
    e.exports = "//\n// This is a template that can be used to light a material, it uses pluggable RenderEquations (RE)\n//   for specific lighting scenarios.\n//\n// Instructions for use:\n//  - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n//  - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n//  - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n//\n// TODO:\n//  - Add area light support.\n//  - Add sphere light support.\n//  - Add diffuse light probe (irradiance cubemap) support.\n//\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tlightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n\n\t\t#endif\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t}\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t// TODO, replace 8 with the real maxMIPLevel\n\t \tirradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, 8 );\n\n\t#endif\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\t// TODO, replace 8 with the real maxMIPLevel\n\tvec3 radiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), 8 );\n\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n\n#endif\n"
}
, function(e, t) {
    e.exports = "struct PhysicalMaterial {\n\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n\n};\n\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\n\n// Clear coat directional hemishperical reflectance (this approximation should be improved)\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n\n}\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n\t#ifndef STANDARD\n\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\n\t#endif\n\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\n\t#ifndef STANDARD\n\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\n\t#endif\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\n\n// ref: http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n"
}
, function(e, t) {
    e.exports = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat ); // Burley clearcoat model\n\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n"
}
, function(e, t) {
    e.exports = "varying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n\nstruct BlinnPhongMaterial {\n\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n"
}
, function(e, t) {
    e.exports = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n"
}
, function(e, t) {
    e.exports = "uniform vec3 ambientLightColor;\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI;\n\n\t#endif\n\n\treturn irradiance;\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\n\t\t\tdirectLight.visible = true;\n\n\t\t} else {\n\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\n\t\t\tdirectLight.visible = true;\n\n\t\t} else {\n\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tirradiance *= PI;\n\n\t\t#endif\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n\n\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\n\tvec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {\n\n\t\t#include <normal_flip>\n\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\n\t\t\t// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\n\t\t\t// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#else\n\n\t\t\t\t// force the bias high to get the last LOD level as it is the most blurred.\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\n\t\t#else\n\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\n\t\t#endif\n\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t}\n\n\t// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\n\t\t//float envMapWidth = pow( 2.0, maxMIPLevelScalar );\n\t\t//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\n\t\t// clamp to allowable LOD ranges.\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\n\t}\n\n\tvec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\n\t\t#endif\n\n\t\t#include <normal_flip>\n\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#endif\n\n\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t}\n\n#endif\n"
}
, function(e, t) {
    e.exports = "vec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\n#if NUM_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\t}\n\n#endif\n\n#if NUM_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\n\t\t#endif\n\n\t}\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_LIGHTMAP\n\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n\n#ifdef USE_ENVMAP\n\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\tenvColor = envMapTexelToLinear( envColor );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n"
}
, function(e, t) {
    e.exports = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n"
}
, function(e, t) {
    e.exports = "#ifdef ENVMAP_TYPE_CUBE_UV\n\n#define cubeUV_textureSize (1024.0)\n\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\n\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\t// Clamp the value to the max mip level counts. hard coded to 6 mips\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\n\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\t// float powScale = exp2(roughnessLevel + mipLevel);\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\t// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\t// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\n\tfloat rcpPowScale = 1.0 / powScale;\n\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\n\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\n\t// round to nearest mipmap if we are not interpolating.\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\n\t// Tri linear interpolation.\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\n\tvec4 result = mix(color10, color20, t);\n\n\treturn vec4(result.rgb, 1.0);\n}\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\n\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif"
}
, function(e, t) {
    e.exports = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n\n"
}
, function(e, t) {
    e.exports = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n"
}
, function(e, t) {
    e.exports = "#if NUM_CLIPPING_PLANES > 0\n\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#if NUM_CLIPPING_PLANES > 0\n\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n"
}
, function(e, t) {
    e.exports = 'bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n\n}\n\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\t\tif( decayExponent > 0.0 ) {\n\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t\t// page 32, equation 26: E[window1]\n\t\t\t// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\n\t\t\t// this is intended to be used on spot and point lights who are represented as luminous intensity\n\t\t\t// but who must be converted to luminous irradiance for surface lighting calculation\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n\n#else\n\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n#endif\n\n\t\t}\n\n\t\treturn 1.0;\n}\n\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\n\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\n\t// Original approximation by Christophe Schlick \'94\n\t//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH \'13)\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n} // validated\n\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\t// geometry term = G(l)⋅G(v) / 4(n⋅l)(n⋅v)\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\n\treturn 1.0 / ( gl * gv );\n\n} // validated\n\n// from page 12, listing 2 of http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\t// dotNL and dotNV are explicitly swapped. This is not a mistake.\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\n\n\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n\n// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4\'s roughness\n\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n\n// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\n\treturn specularColor * AB.x + AB.y;\n\n} // validated\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n\t//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\t//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\n\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n'
}
, function(e, t) {
    e.exports = "\nvec3 objectNormal = vec3( normal );\n"
}
, function(e, t) {
    e.exports = "\nvec3 transformed = vec3( position );\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif"
}
, function(e, t) {
    e.exports = "#ifdef USE_AOMAP\n\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n"
}
, function(e, t) {
    e.exports = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n"
}
, , function(e, t, n) {
    "use strict";
    var i = n(340)
      , r = n(337);
    e.exports = function() {
        var e = r();
        return i(String.prototype, {
            trim: e
        }, {
            trim: function() {
                return String.prototype.trim !== e
            }
        }),
        e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return null === e || "function" != typeof e && "object" != typeof e
    }
}
, function(e, t, n) {
    "use strict";
    var i = Object.prototype.toString
      , r = n(624)
      , a = n(338)
      , o = function(e, t) {
        var n = t || ("[object Date]" === i.call(e) ? String : Number);
        if (n === String || n === Number) {
            var o, s, l = n === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
            for (s = 0; s < l.length; ++s)
                if (a(e[l[s]]) && (o = e[l[s]](),
                r(o)))
                    return o;
            throw new TypeError("No default value")
        }
        throw new TypeError("invalid [[DefaultValue]] hint supplied")
    };
    e.exports = function(e, t) {
        return r(e) ? e : o(e, t)
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        var n = e % t;
        return Math.floor(n >= 0 ? n : n + t)
    }
}
, function(e, t) {
    e.exports = function(e) {
        return e >= 0 ? 1 : -1
    }
}
, function(e, t) {
    var n = Number.isNaN || function(e) {
        return e != e
    }
    ;
    e.exports = Number.isFinite || function(e) {
        return "number" == typeof e && !n(e) && e !== 1 / 0 && e !== -1 / 0
    }
}
, function(e, t) {
    e.exports = Number.isNaN || function(e) {
        return e != e
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(629)
      , r = n(628)
      , a = n(627)
      , o = n(626)
      , s = n(338)
      , l = n(625)
      , c = n(341)
      , u = {
        ToPrimitive: l,
        ToBoolean: function(e) {
            return !!e
        },
        ToNumber: function(e) {
            return Number(e)
        },
        ToInteger: function(e) {
            var t = this.ToNumber(e);
            return i(t) ? 0 : 0 !== t && r(t) ? a(t) * Math.floor(Math.abs(t)) : t
        },
        ToInt32: function(e) {
            return this.ToNumber(e) >> 0
        },
        ToUint32: function(e) {
            return this.ToNumber(e) >>> 0
        },
        ToUint16: function(e) {
            var t = this.ToNumber(e);
            if (i(t) || 0 === t || !r(t))
                return 0;
            var n = a(t) * Math.floor(Math.abs(t));
            return o(n, 65536)
        },
        ToString: function(e) {
            return String(e)
        },
        ToObject: function(e) {
            return this.CheckObjectCoercible(e),
            Object(e)
        },
        CheckObjectCoercible: function(e, t) {
            if (null == e)
                throw new TypeError(t || "Cannot call method on " + e);
            return e
        },
        IsCallable: s,
        SameValue: function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : i(e) && i(t)
        },
        Type: function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
        },
        IsPropertyDescriptor: function(e) {
            if ("Object" !== this.Type(e))
                return !1;
            var t = {
                "[[Configurable]]": !0,
                "[[Enumerable]]": !0,
                "[[Get]]": !0,
                "[[Set]]": !0,
                "[[Value]]": !0,
                "[[Writable]]": !0
            };
            for (var n in e)
                if (c(e, n) && !t[n])
                    return !1;
            var i = c(e, "[[Value]]")
              , r = c(e, "[[Get]]") || c(e, "[[Set]]");
            if (i && r)
                throw new TypeError("Property Descriptors may not be both accessor and data descriptors");
            return !0
        },
        IsAccessorDescriptor: function(e) {
            if (void 0 === e)
                return !1;
            if (!this.IsPropertyDescriptor(e))
                throw new TypeError("Desc must be a Property Descriptor");
            return !(!c(e, "[[Get]]") && !c(e, "[[Set]]"))
        },
        IsDataDescriptor: function(e) {
            if (void 0 === e)
                return !1;
            if (!this.IsPropertyDescriptor(e))
                throw new TypeError("Desc must be a Property Descriptor");
            return !(!c(e, "[[Value]]") && !c(e, "[[Writable]]"))
        },
        IsGenericDescriptor: function(e) {
            if (void 0 === e)
                return !1;
            if (!this.IsPropertyDescriptor(e))
                throw new TypeError("Desc must be a Property Descriptor");
            return !this.IsAccessorDescriptor(e) && !this.IsDataDescriptor(e)
        },
        FromPropertyDescriptor: function(e) {
            if (void 0 === e)
                return e;
            if (!this.IsPropertyDescriptor(e))
                throw new TypeError("Desc must be a Property Descriptor");
            if (this.IsDataDescriptor(e))
                return {
                    value: e["[[Value]]"],
                    writable: !!e["[[Writable]]"],
                    enumerable: !!e["[[Enumerable]]"],
                    configurable: !!e["[[Configurable]]"]
                };
            if (this.IsAccessorDescriptor(e))
                return {
                    get: e["[[Get]]"],
                    set: e["[[Set]]"],
                    enumerable: !!e["[[Enumerable]]"],
                    configurable: !!e["[[Configurable]]"]
                };
            throw new TypeError("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
        },
        ToPropertyDescriptor: function(e) {
            if ("Object" !== this.Type(e))
                throw new TypeError("ToPropertyDescriptor requires an object");
            var t = {};
            if (c(e, "enumerable") && (t["[[Enumerable]]"] = this.ToBoolean(e.enumerable)),
            c(e, "configurable") && (t["[[Configurable]]"] = this.ToBoolean(e.configurable)),
            c(e, "value") && (t["[[Value]]"] = e.value),
            c(e, "writable") && (t["[[Writable]]"] = this.ToBoolean(e.writable)),
            c(e, "get")) {
                var n = e.get;
                if (void 0 !== n && !this.IsCallable(n))
                    throw new TypeError("getter must be a function");
                t["[[Get]]"] = n
            }
            if (c(e, "set")) {
                var i = e.set;
                if (void 0 !== i && !this.IsCallable(i))
                    throw new TypeError("setter must be a function");
                t["[[Set]]"] = i
            }
            if ((c(t, "[[Get]]") || c(t, "[[Set]]")) && (c(t, "[[Value]]") || c(t, "[[Writable]]")))
                throw new TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
            return t
        }
    };
    e.exports = u
}
, function(e, t) {
    var n = Object.prototype.hasOwnProperty
      , i = Object.prototype.toString;
    e.exports = function(e, t, r) {
        if ("[object Function]" !== i.call(t))
            throw new TypeError("iterator must be a function");
        var a = e.length;
        if (a === +a)
            for (var o = 0; o < a; o++)
                t.call(r, e[o], o, e);
        else
            for (var s in e)
                n.call(e, s) && t.call(r, e[s], s, e)
    }
}
, function(e, t, n) {
    "use strict";
    var i = Object.prototype.toString;
    e.exports = function(e) {
        var t = i.call(e)
          , n = "[object Arguments]" === t;
        return n || (n = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === i.call(e.callee)),
        n
    }
}
, function(e, t, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty
      , r = Object.prototype.toString
      , a = Array.prototype.slice
      , o = n(632)
      , s = Object.prototype.propertyIsEnumerable
      , l = !s.call({
        toString: null
    }, "toString")
      , c = s.call(function() {}, "prototype")
      , u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
      , d = function(e) {
        var t = e.constructor;
        return t && t.prototype === e
    }
      , f = {
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
    }
      , p = function() {
        if ("undefined" == typeof window)
            return !1;
        for (var e in window)
            try {
                if (!f["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e])
                    try {
                        d(window[e])
                    } catch (e) {
                        return !0
                    }
            } catch (e) {
                return !0
            }
        return !1
    }()
      , m = function(e) {
        var t = null !== e && "object" == typeof e
          , n = "[object Function]" === r.call(e)
          , a = o(e)
          , s = t && "[object String]" === r.call(e)
          , f = [];
        if (!t && !n && !a)
            throw new TypeError("Object.keys called on a non-object");
        var m = c && n;
        if (s && e.length > 0 && !i.call(e, 0))
            for (var h = 0; h < e.length; ++h)
                f.push(String(h));
        if (a && e.length > 0)
            for (var g = 0; g < e.length; ++g)
                f.push(String(g));
        else
            for (var v in e)
                m && "prototype" === v || !i.call(e, v) || f.push(String(v));
        if (l)
            for (var _ = function(e) {
                if ("undefined" == typeof window || !p)
                    return d(e);
                try {
                    return d(e)
                } catch (e) {
                    return !1
                }
            }(e), x = 0; x < u.length; ++x)
                _ && "constructor" === u[x] || !i.call(e, u[x]) || f.push(u[x]);
        return f
    };
    m.shim = function() {
        if (Object.keys) {
            if (!function() {
                return 2 === (Object.keys(arguments) || "").length
            }(1, 2)) {
                var e = Object.keys;
                Object.keys = function(t) {
                    return o(t) ? e(a.call(t)) : e(t)
                }
            }
        } else
            Object.keys = m;
        return Object.keys || m
    }
    ,
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    var i = n(296)
      , r = n(340)
      , a = n(339)
      , o = n(337)
      , s = n(623)
      , l = i.call(Function.call, o());
    r(l, {
        getPolyfill: o,
        implementation: a,
        shim: s
    }),
    e.exports = l
}
, function(e, t, n) {
    "use strict";
    var i = Array.prototype.slice
      , r = Object.prototype.toString;
    e.exports = function(e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== r.call(t))
            throw new TypeError("Function.prototype.bind called on incompatible " + t);
        for (var n, a = i.call(arguments, 1), o = Math.max(0, t.length - a.length), s = [], l = 0; l < o; l++)
            s.push("$" + l);
        if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
            if (this instanceof n) {
                var r = t.apply(this, a.concat(i.call(arguments)));
                return Object(r) === r ? r : this
            }
            return t.apply(e, a.concat(i.call(arguments)))
        }),
        t.prototype) {
            var c = function() {};
            c.prototype = t.prototype,
            n.prototype = new c,
            c.prototype = null
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function() {}
}
, function(e, t) {
    e.exports = function(e) {
        var t = n.call(e);
        return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
    }
    ;
    var n = Object.prototype.toString
}
, function(e, t, n) {
    var i = n(637);
    e.exports = function(e, t, n) {
        if (!i(t))
            throw new TypeError("iterator must be a function");
        arguments.length < 3 && (n = this);
        "[object Array]" === r.call(e) ? function(e, t, n) {
            for (var i = 0, r = e.length; i < r; i++)
                a.call(e, i) && t.call(n, e[i], i, e)
        }(e, t, n) : "string" == typeof e ? function(e, t, n) {
            for (var i = 0, r = e.length; i < r; i++)
                t.call(n, e.charAt(i), i, e)
        }(e, t, n) : function(e, t, n) {
            for (var i in e)
                a.call(e, i) && t.call(n, e[i], i, e)
        }(e, t, n)
    }
    ;
    var r = Object.prototype.toString
      , a = Object.prototype.hasOwnProperty
}
, function(e, t, n) {
    "use strict";
    var i = n(638)
      , r = n(636)
      , a = n(341)
      , o = n(634)
      , s = function(e) {
        r(!1, e)
    }
      , l = String.prototype.replace
      , c = String.prototype.split
      , u = "||||"
      , d = {
        arabic: function(e) {
            return e < 3 ? e : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        },
        chinese: function() {
            return 0
        },
        german: function(e) {
            return 1 !== e ? 1 : 0
        },
        french: function(e) {
            return e > 1 ? 1 : 0
        },
        russian: function(e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        czech: function(e) {
            return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
        },
        polish: function(e) {
            return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        icelandic: function(e) {
            return e % 10 != 1 || e % 100 == 11 ? 1 : 0
        }
    }
      , f = {
        arabic: ["ar"],
        chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
        german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
        french: ["fr", "tl", "pt-br"],
        russian: ["hr", "ru", "lt"],
        czech: ["cs", "sk"],
        polish: ["pl"],
        icelandic: ["is"]
    };
    function p(e) {
        var t, n = (t = {},
        i(f, function(e, n) {
            i(e, function(e) {
                t[e] = n
            })
        }),
        t);
        return n[e] || n[c.call(e, /-/, 1)[0]] || n.en
    }
    var m = /\$/g
      , h = "$$"
      , g = /%\{(.*?)\}/g;
    function v(e, t, n) {
        if ("string" != typeof e)
            throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
        if (null == t)
            return e;
        var i = e
          , r = "number" == typeof t ? {
            smart_count: t
        } : t;
        if (null != r.smart_count && i) {
            var s = c.call(i, u);
            i = o(s[function(e, t) {
                return d[p(e)](t)
            }(n || "en", r.smart_count)] || s[0])
        }
        return i = l.call(i, g, function(e, t) {
            return a(r, t) && null != r[t] ? l.call(r[t], m, h) : e
        })
    }
    function _(e) {
        var t = e || {};
        this.phrases = {},
        this.extend(t.phrases || {}),
        this.currentLocale = t.locale || "en";
        var n = t.allowMissing ? v : null;
        this.onMissingKey = "function" == typeof t.onMissingKey ? t.onMissingKey : n,
        this.warn = t.warn || s
    }
    _.prototype.locale = function(e) {
        return e && (this.currentLocale = e),
        this.currentLocale
    }
    ,
    _.prototype.extend = function(e, t) {
        i(e, function(e, n) {
            var i = t ? t + "." + n : n;
            "object" == typeof e ? this.extend(e, i) : this.phrases[i] = e
        }, this)
    }
    ,
    _.prototype.unset = function(e, t) {
        "string" == typeof e ? delete this.phrases[e] : i(e, function(e, n) {
            var i = t ? t + "." + n : n;
            "object" == typeof e ? this.unset(e, i) : delete this.phrases[i]
        }, this)
    }
    ,
    _.prototype.clear = function() {
        this.phrases = {}
    }
    ,
    _.prototype.replace = function(e) {
        this.clear(),
        this.extend(e)
    }
    ,
    _.prototype.t = function(e, t) {
        var n, i, r = null == t ? {} : t;
        if ("string" == typeof this.phrases[e])
            n = this.phrases[e];
        else if ("string" == typeof r._)
            n = r._;
        else if (this.onMissingKey) {
            i = (0,
            this.onMissingKey)(e, r, this.currentLocale)
        } else
            this.warn('Missing translation for key: "' + e + '"'),
            i = e;
        return "string" == typeof n && (i = v(n, r, this.currentLocale)),
        i
    }
    ,
    _.prototype.has = function(e) {
        return a(this.phrases, e)
    }
    ,
    _.transformPhrase = v,
    e.exports = _
}
])]);
