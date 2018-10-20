(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    145: function(t, e, r) {
        "use strict";
        var i, n, s = r(1), o = r(17), a = r(31), u = r(89), h = r(7), c = r(66), l = r(5);
        function d(t, e) {
            this.start = void 0 !== t ? t : new s.a,
            this.end = void 0 !== e ? e : new s.a
        }
        d.prototype = {
            constructor: d,
            set: function(t, e) {
                return this.start.copy(t),
                this.end.copy(e),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.start.copy(t.start),
                this.end.copy(t.end),
                this
            },
            getCenter: function(t) {
                return (t || new s.a).addVectors(this.start, this.end).multiplyScalar(.5)
            },
            delta: function(t) {
                return (t || new s.a).subVectors(this.end, this.start)
            },
            distanceSq: function() {
                return this.start.distanceToSquared(this.end)
            },
            distance: function() {
                return this.start.distanceTo(this.end)
            },
            at: function(t, e) {
                var r = e || new s.a;
                return this.delta(r).multiplyScalar(t).add(this.start)
            },
            closestPointToPointParameter: (i = new s.a,
            n = new s.a,
            function(t, e) {
                i.subVectors(t, this.start),
                n.subVectors(this.end, this.start);
                var r = n.dot(n)
                  , s = n.dot(i) / r;
                return e && (s = l.a.clamp(s, 0, 1)),
                s
            }
            ),
            closestPointToPoint: function(t, e, r) {
                var i = this.closestPointToPointParameter(t, e)
                  , n = r || new s.a;
                return this.delta(n).multiplyScalar(i).add(this.start)
            },
            applyMatrix4: function(t) {
                return this.start.applyMatrix4(t),
                this.end.applyMatrix4(t),
                this
            },
            equals: function(t) {
                return t.start.equals(this.start) && t.end.equals(this.end)
            }
        };
        var p, f, m, v, y, g, b = r(27);
        function x(t, e, r) {
            this.a = void 0 !== t ? t : new s.a,
            this.b = void 0 !== e ? e : new s.a,
            this.c = void 0 !== r ? r : new s.a
        }
        x.normal = (p = new s.a,
        function(t, e, r, i) {
            var n = i || new s.a;
            n.subVectors(r, e),
            p.subVectors(t, e),
            n.cross(p);
            var o = n.lengthSq();
            return o > 0 ? n.multiplyScalar(1 / Math.sqrt(o)) : n.set(0, 0, 0)
        }
        ),
        x.barycoordFromPoint = function() {
            var t = new s.a
              , e = new s.a
              , r = new s.a;
            return function(i, n, o, a, u) {
                t.subVectors(a, n),
                e.subVectors(o, n),
                r.subVectors(i, n);
                var h = t.dot(t)
                  , c = t.dot(e)
                  , l = t.dot(r)
                  , d = e.dot(e)
                  , p = e.dot(r)
                  , f = h * d - c * c
                  , m = u || new s.a;
                if (0 === f)
                    return m.set(-2, -1, -1);
                var v = 1 / f
                  , y = (d * l - c * p) * v
                  , g = (h * p - c * l) * v;
                return m.set(1 - y - g, g, y)
            }
        }(),
        x.containsPoint = (f = new s.a,
        function(t, e, r, i) {
            var n = x.barycoordFromPoint(t, e, r, i, f);
            return n.x >= 0 && n.y >= 0 && n.x + n.y <= 1
        }
        ),
        x.prototype = {
            constructor: x,
            set: function(t, e, r) {
                return this.a.copy(t),
                this.b.copy(e),
                this.c.copy(r),
                this
            },
            setFromPointsAndIndices: function(t, e, r, i) {
                return this.a.copy(t[e]),
                this.b.copy(t[r]),
                this.c.copy(t[i]),
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.a.copy(t.a),
                this.b.copy(t.b),
                this.c.copy(t.c),
                this
            },
            area: function() {
                var t = new s.a
                  , e = new s.a;
                return function() {
                    return t.subVectors(this.c, this.b),
                    e.subVectors(this.a, this.b),
                    .5 * t.cross(e).length()
                }
            }(),
            midpoint: function(t) {
                return (t || new s.a).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            },
            normal: function(t) {
                return x.normal(this.a, this.b, this.c, t)
            },
            plane: function(t) {
                return (t || new b.a).setFromCoplanarPoints(this.a, this.b, this.c)
            },
            barycoordFromPoint: function(t, e) {
                return x.barycoordFromPoint(t, this.a, this.b, this.c, e)
            },
            containsPoint: function(t) {
                return x.containsPoint(t, this.a, this.b, this.c)
            },
            closestPointToPoint: function(t, e) {
                void 0 === m && (m = new b.a,
                v = [new d, new d, new d],
                y = new s.a,
                g = new s.a);
                var r = e || new s.a
                  , i = 1 / 0;
                if (m.setFromCoplanarPoints(this.a, this.b, this.c),
                m.projectPoint(t, y),
                !0 === this.containsPoint(y))
                    r.copy(y);
                else {
                    v[0].set(this.a, this.b),
                    v[1].set(this.b, this.c),
                    v[2].set(this.c, this.a);
                    for (var n = 0; n < v.length; n++) {
                        v[n].closestPointToPoint(y, !0, g);
                        var o = y.distanceToSquared(g);
                        o < i && (i = o,
                        r.copy(g))
                    }
                }
                return r
            },
            equals: function(t) {
                return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            }
        };
        var w = r(95)
          , N = r(25)
          , M = r(146)
          , A = r(87);
        function S(t, e) {
            c.a.call(this),
            this.type = "Mesh",
            this.geometry = void 0 !== t ? t : new A.a,
            this.material = void 0 !== e ? e : new M.a({
                color: 16777215 * Math.random()
            }),
            this.drawMode = N.sb,
            this.updateMorphTargets()
        }
        r.d(e, "a", function() {
            return S
        }),
        S.prototype = Object.assign(Object.create(c.a.prototype), {
            constructor: S,
            isMesh: !0,
            setDrawMode: function(t) {
                this.drawMode = t
            },
            copy: function(t) {
                return c.a.prototype.copy.call(this, t),
                this.drawMode = t.drawMode,
                this
            },
            updateMorphTargets: function() {
                var t = this.geometry.morphTargets;
                if (void 0 !== t && t.length > 0) {
                    this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {};
                    for (var e = 0, r = t.length; e < r; e++)
                        this.morphTargetInfluences.push(0),
                        this.morphTargetDictionary[t[e].name] = e
                }
            },
            raycast: function() {
                var t = new h.a
                  , e = new u.a
                  , r = new a.a
                  , i = new s.a
                  , n = new s.a
                  , c = new s.a
                  , l = new s.a
                  , d = new s.a
                  , p = new s.a
                  , f = new o.a
                  , m = new o.a
                  , v = new o.a
                  , y = new s.a
                  , g = new s.a
                  , b = new s.a;
                function M(t, e, r, i, n, s, o) {
                    return x.barycoordFromPoint(t, e, r, i, y),
                    n.multiplyScalar(y.x),
                    s.multiplyScalar(y.y),
                    o.multiplyScalar(y.z),
                    n.add(s).add(o),
                    n.clone()
                }
                function A(t, e, r, i, n, s, o) {
                    var a = t.material;
                    if (null === (a.side === N.f ? r.intersectTriangle(s, n, i, !0, o) : r.intersectTriangle(i, n, s, a.side !== N.u, o)))
                        return null;
                    b.copy(o),
                    b.applyMatrix4(t.matrixWorld);
                    var u = e.ray.origin.distanceTo(b);
                    return u < e.near || u > e.far ? null : {
                        distance: u,
                        point: b.clone(),
                        object: t
                    }
                }
                function S(t, e, r, s, o, a, u, h) {
                    i.fromArray(s, 3 * a),
                    n.fromArray(s, 3 * u),
                    c.fromArray(s, 3 * h);
                    var l = A(t, e, r, i, n, c, g);
                    return l && (o && (f.fromArray(o, 2 * a),
                    m.fromArray(o, 2 * u),
                    v.fromArray(o, 2 * h),
                    l.uv = M(g, i, n, c, f, m, v)),
                    l.face = new w.a(a,u,h,x.normal(i, n, c)),
                    l.faceIndex = a),
                    l
                }
                return function(s, o) {
                    var a, u, h = this.geometry, y = this.material, b = this.matrixWorld;
                    if (void 0 !== y && (null === h.boundingSphere && h.computeBoundingSphere(),
                    r.copy(h.boundingSphere),
                    r.applyMatrix4(b),
                    !1 !== s.ray.intersectsSphere(r) && (t.getInverse(b),
                    e.copy(s.ray).applyMatrix4(t),
                    null === h.boundingBox || !1 !== e.intersectsBox(h.boundingBox))))
                        if (h && h.isBufferGeometry) {
                            var x, w, N, U = h.index, T = h.attributes, B = T.position.array;
                            if (void 0 !== T.uv && (a = T.uv.array),
                            null !== U)
                                for (var V = U.array, O = 0, E = V.length; O < E; O += 3)
                                    x = V[O],
                                    w = V[O + 1],
                                    N = V[O + 2],
                                    (u = S(this, s, e, B, a, x, w, N)) && (u.faceIndex = Math.floor(O / 3),
                                    o.push(u));
                            else
                                for (O = 0,
                                E = B.length; O < E; O += 9)
                                    (u = S(this, s, e, B, a, x = O / 3, w = x + 1, N = x + 2)) && (u.index = x,
                                    o.push(u))
                        } else if (h && h.isGeometry) {
                            var z, D, F, I = y && y.isMultiMaterial, P = !0 === I ? y.materials : null, k = h.vertices, G = h.faces, W = h.faceVertexUvs[0];
                            W.length > 0 && (a = W);
                            for (var j = 0, R = G.length; j < R; j++) {
                                var q = G[j]
                                  , _ = !0 === I ? P[q.materialIndex] : y;
                                if (void 0 !== _) {
                                    if (z = k[q.a],
                                    D = k[q.b],
                                    F = k[q.c],
                                    !0 === _.morphTargets) {
                                        var C = h.morphTargets
                                          , H = this.morphTargetInfluences;
                                        i.set(0, 0, 0),
                                        n.set(0, 0, 0),
                                        c.set(0, 0, 0);
                                        for (var J = 0, L = C.length; J < L; J++) {
                                            var X = H[J];
                                            if (0 !== X) {
                                                var Y = C[J].vertices;
                                                i.addScaledVector(l.subVectors(Y[q.a], z), X),
                                                n.addScaledVector(d.subVectors(Y[q.b], D), X),
                                                c.addScaledVector(p.subVectors(Y[q.c], F), X)
                                            }
                                        }
                                        i.add(z),
                                        n.add(D),
                                        c.add(F),
                                        z = i,
                                        D = n,
                                        F = c
                                    }
                                    if (u = A(this, s, e, z, D, F, g)) {
                                        if (a) {
                                            var Z = a[j];
                                            f.copy(Z[0]),
                                            m.copy(Z[1]),
                                            v.copy(Z[2]),
                                            u.uv = M(g, z, D, F, f, m, v)
                                        }
                                        u.face = q,
                                        u.faceIndex = j,
                                        o.push(u)
                                    }
                                }
                            }
                        }
                }
            }(),
            clone: function() {
                return new this.constructor(this.geometry,this.material).copy(this)
            }
        })
    },
    146: function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return o
        });
        var i = r(60)
          , n = r(25)
          , s = r(23);
        function o(t) {
            i.a.call(this),
            this.type = "MeshBasicMaterial",
            this.color = new s.a(16777215),
            this.map = null,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = n.X,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.skinning = !1,
            this.morphTargets = !1,
            this.lights = !1,
            this.setValues(t)
        }
        o.prototype = Object.create(i.a.prototype),
        o.prototype.constructor = o,
        o.prototype.isMeshBasicMaterial = !0,
        o.prototype.copy = function(t) {
            return i.a.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.map = t.map,
            this.aoMap = t.aoMap,
            this.aoMapIntensity = t.aoMapIntensity,
            this.specularMap = t.specularMap,
            this.alphaMap = t.alphaMap,
            this.envMap = t.envMap,
            this.combine = t.combine,
            this.reflectivity = t.reflectivity,
            this.refractionRatio = t.refractionRatio,
            this.wireframe = t.wireframe,
            this.wireframeLinewidth = t.wireframeLinewidth,
            this.wireframeLinecap = t.wireframeLinecap,
            this.wireframeLinejoin = t.wireframeLinejoin,
            this.skinning = t.skinning,
            this.morphTargets = t.morphTargets,
            this
        }
    },
    148: function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return s
        });
        var i = r(87)
          , n = r(26);
        function s(t, e, r, s) {
            i.a.call(this),
            this.type = "PlaneBufferGeometry",
            this.parameters = {
                width: t,
                height: e,
                widthSegments: r,
                heightSegments: s
            };
            for (var o = t / 2, a = e / 2, u = Math.floor(r) || 1, h = Math.floor(s) || 1, c = u + 1, l = h + 1, d = t / u, p = e / h, f = new Float32Array(c * l * 3), m = new Float32Array(c * l * 3), v = new Float32Array(c * l * 2), y = 0, g = 0, b = 0; b < l; b++)
                for (var x = b * p - a, w = 0; w < c; w++) {
                    var N = w * d - o;
                    f[y] = N,
                    f[y + 1] = -x,
                    m[y + 2] = 1,
                    v[g] = w / u,
                    v[g + 1] = 1 - b / h,
                    y += 3,
                    g += 2
                }
            y = 0;
            var M = new (f.length / 3 > 65535 ? Uint32Array : Uint16Array)(u * h * 6);
            for (b = 0; b < h; b++)
                for (w = 0; w < u; w++) {
                    var A = w + c * b
                      , S = w + c * (b + 1)
                      , U = w + 1 + c * (b + 1)
                      , T = w + 1 + c * b;
                    M[y] = A,
                    M[y + 1] = S,
                    M[y + 2] = T,
                    M[y + 3] = S,
                    M[y + 4] = U,
                    M[y + 5] = T,
                    y += 6
                }
            this.setIndex(new n.a(M,1)),
            this.addAttribute("position", new n.a(f,3)),
            this.addAttribute("normal", new n.a(m,3)),
            this.addAttribute("uv", new n.a(v,2))
        }
        s.prototype = Object.create(i.a.prototype),
        s.prototype.constructor = s
    },
    25: function(t, e, r) {
        "use strict";
        r.d(e, "Oa", function() {
            return i
        }),
        r.d(e, "q", function() {
            return n
        }),
        r.d(e, "o", function() {
            return s
        }),
        r.d(e, "p", function() {
            return o
        }),
        r.d(e, "C", function() {
            return a
        }),
        r.d(e, "Ma", function() {
            return u
        }),
        r.d(e, "Na", function() {
            return h
        }),
        r.d(e, "D", function() {
            return c
        }),
        r.d(e, "f", function() {
            return l
        }),
        r.d(e, "u", function() {
            return d
        }),
        r.d(e, "A", function() {
            return p
        }),
        r.d(e, "jb", function() {
            return f
        }),
        r.d(e, "Da", function() {
            return m
        }),
        r.d(e, "Ca", function() {
            return v
        }),
        r.d(e, "Fa", function() {
            return y
        }),
        r.d(e, "c", function() {
            return g
        }),
        r.d(e, "pb", function() {
            return b
        }),
        r.d(e, "W", function() {
            return x
        }),
        r.d(e, "r", function() {
            return w
        }),
        r.d(e, "a", function() {
            return N
        }),
        r.d(e, "ob", function() {
            return M
        }),
        r.d(e, "hb", function() {
            return A
        }),
        r.d(e, "T", function() {
            return S
        }),
        r.d(e, "S", function() {
            return U
        }),
        r.d(e, "Cb", function() {
            return T
        }),
        r.d(e, "Ha", function() {
            return B
        }),
        r.d(e, "nb", function() {
            return V
        }),
        r.d(e, "La", function() {
            return O
        }),
        r.d(e, "lb", function() {
            return E
        }),
        r.d(e, "Ka", function() {
            return z
        }),
        r.d(e, "v", function() {
            return D
        }),
        r.d(e, "Ia", function() {
            return F
        }),
        r.d(e, "w", function() {
            return I
        }),
        r.d(e, "Ja", function() {
            return P
        }),
        r.d(e, "mb", function() {
            return k
        }),
        r.d(e, "Ba", function() {
            return G
        }),
        r.d(e, "e", function() {
            return W
        }),
        r.d(e, "J", function() {
            return j
        }),
        r.d(e, "K", function() {
            return R
        }),
        r.d(e, "x", function() {
            return q
        }),
        r.d(e, "G", function() {
            return _
        }),
        r.d(e, "F", function() {
            return C
        }),
        r.d(e, "Ga", function() {
            return H
        }),
        r.d(e, "X", function() {
            return J
        }),
        r.d(e, "V", function() {
            return L
        }),
        r.d(e, "b", function() {
            return X
        }),
        r.d(e, "Ea", function() {
            return Y
        }),
        r.d(e, "P", function() {
            return Z
        }),
        r.d(e, "fb", function() {
            return Q
        }),
        r.d(e, "ub", function() {
            return K
        }),
        r.d(e, "i", function() {
            return $
        }),
        r.d(e, "tb", function() {
            return tt
        }),
        r.d(e, "k", function() {
            return et
        }),
        r.d(e, "l", function() {
            return rt
        }),
        r.d(e, "y", function() {
            return it
        }),
        r.d(e, "z", function() {
            return nt
        }),
        r.d(e, "kb", function() {
            return st
        }),
        r.d(e, "m", function() {
            return ot
        }),
        r.d(e, "n", function() {
            return at
        }),
        r.d(e, "gb", function() {
            return ut
        }),
        r.d(e, "j", function() {
            return ht
        }),
        r.d(e, "U", function() {
            return ct
        }),
        r.d(e, "Y", function() {
            return lt
        }),
        r.d(e, "Aa", function() {
            return dt
        }),
        r.d(e, "Z", function() {
            return pt
        }),
        r.d(e, "M", function() {
            return ft
        }),
        r.d(e, "O", function() {
            return mt
        }),
        r.d(e, "N", function() {
            return vt
        }),
        r.d(e, "vb", function() {
            return yt
        }),
        r.d(e, "h", function() {
            return gt
        }),
        r.d(e, "ib", function() {
            return bt
        }),
        r.d(e, "Bb", function() {
            return xt
        }),
        r.d(e, "I", function() {
            return wt
        }),
        r.d(e, "xb", function() {
            return Nt
        }),
        r.d(e, "B", function() {
            return Mt
        }),
        r.d(e, "H", function() {
            return At
        }),
        r.d(e, "yb", function() {
            return St
        }),
        r.d(e, "zb", function() {
            return Ut
        }),
        r.d(e, "Ab", function() {
            return Tt
        }),
        r.d(e, "wb", function() {
            return Bt
        }),
        r.d(e, "d", function() {
            return Vt
        }),
        r.d(e, "Ya", function() {
            return Ot
        }),
        r.d(e, "Qa", function() {
            return Et
        }),
        r.d(e, "R", function() {
            return zt
        }),
        r.d(e, "Q", function() {
            return Dt
        }),
        r.d(e, "s", function() {
            return Ft
        }),
        r.d(e, "t", function() {
            return It
        }),
        r.d(e, "eb", function() {
            return Pt
        }),
        r.d(e, "Ta", function() {
            return kt
        }),
        r.d(e, "Ua", function() {
            return Gt
        }),
        r.d(e, "Va", function() {
            return Wt
        }),
        r.d(e, "db", function() {
            return jt
        }),
        r.d(e, "cb", function() {
            return Rt
        }),
        r.d(e, "Sa", function() {
            return qt
        }),
        r.d(e, "Ra", function() {
            return _t
        }),
        r.d(e, "bb", function() {
            return Ct
        }),
        r.d(e, "sb", function() {
            return Ht
        }),
        r.d(e, "rb", function() {
            return Jt
        }),
        r.d(e, "qb", function() {
            return Lt
        }),
        r.d(e, "L", function() {
            return Xt
        }),
        r.d(e, "Db", function() {
            return Yt
        }),
        r.d(e, "E", function() {
            return Zt
        }),
        r.d(e, "Xa", function() {
            return Qt
        }),
        r.d(e, "ab", function() {
            return Kt
        }),
        r.d(e, "Za", function() {
            return $t
        }),
        r.d(e, "Wa", function() {
            return te
        }),
        r.d(e, "g", function() {
            return ee
        }),
        r.d(e, "Pa", function() {
            return re
        });
        var i = "81"
          , n = 0
          , s = 1
          , o = 2
          , a = 0
          , u = 1
          , h = 2
          , c = 0
          , l = 1
          , d = 2
          , p = 1
          , f = 2
          , m = 0
          , v = 0
          , y = 1
          , g = 2
          , b = 3
          , x = 4
          , w = 5
          , N = 100
          , M = 101
          , A = 102
          , S = 103
          , U = 104
          , T = 200
          , B = 201
          , V = 202
          , O = 203
          , E = 204
          , z = 205
          , D = 206
          , F = 207
          , I = 208
          , P = 209
          , k = 210
          , G = 0
          , W = 1
          , j = 2
          , R = 3
          , q = 4
          , _ = 5
          , C = 6
          , H = 7
          , J = 0
          , L = 1
          , X = 2
          , Y = 0
          , Z = 1
          , Q = 2
          , K = 3
          , $ = 4
          , tt = 300
          , et = 301
          , rt = 302
          , it = 303
          , nt = 304
          , st = 305
          , ot = 306
          , at = 307
          , ut = 1e3
          , ht = 1001
          , ct = 1002
          , lt = 1003
          , dt = 1004
          , pt = 1005
          , ft = 1006
          , mt = 1007
          , vt = 1008
          , yt = 1009
          , gt = 1010
          , bt = 1011
          , xt = 1012
          , wt = 1013
          , Nt = 1014
          , Mt = 1015
          , At = 1016
          , St = 1017
          , Ut = 1018
          , Tt = 1019
          , Bt = 1020
          , Vt = 1021
          , Ot = 1022
          , Et = 1023
          , zt = 1024
          , Dt = 1025
          , Ft = 1026
          , It = 1027
          , Pt = 2001
          , kt = 2002
          , Gt = 2003
          , Wt = 2004
          , jt = 2100
          , Rt = 2101
          , qt = 2102
          , _t = 2103
          , Ct = 2151
          , Ht = 0
          , Jt = 1
          , Lt = 2
          , Xt = 3e3
          , Yt = 3001
          , Zt = 3007
          , Qt = 3002
          , Kt = 3004
          , $t = 3005
          , te = 3006
          , ee = 3200
          , re = 3201
    },
    26: function(t, e, r) {
        "use strict";
        r.d(e, "b", function() {
            return l
        }),
        r.d(e, "d", function() {
            return c
        }),
        r.d(e, "c", function() {
            return h
        }),
        r.d(e, "a", function() {
            return u
        });
        var i = r(72)
          , n = r(1)
          , s = r(17)
          , o = r(23)
          , a = r(5);
        function u(t, e, r) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.uuid = a.a.generateUUID(),
            this.array = t,
            this.itemSize = e,
            this.count = void 0 !== t ? t.length / e : 0,
            this.normalized = !0 === r,
            this.dynamic = !1,
            this.updateRange = {
                offset: 0,
                count: -1
            },
            this.version = 0
        }
        function h(t, e) {
            return new u(new Uint16Array(t),e)
        }
        function c(t, e) {
            return new u(new Uint32Array(t),e)
        }
        function l(t, e) {
            return new u(new Float32Array(t),e)
        }
        u.prototype = {
            constructor: u,
            isBufferAttribute: !0,
            set needsUpdate(t) {
                !0 === t && this.version++
            },
            setDynamic: function(t) {
                return this.dynamic = t,
                this
            },
            copy: function(t) {
                return this.array = new t.array.constructor(t.array),
                this.itemSize = t.itemSize,
                this.count = t.count,
                this.normalized = t.normalized,
                this.dynamic = t.dynamic,
                this
            },
            copyAt: function(t, e, r) {
                t *= this.itemSize,
                r *= e.itemSize;
                for (var i = 0, n = this.itemSize; i < n; i++)
                    this.array[t + i] = e.array[r + i];
                return this
            },
            copyArray: function(t) {
                return this.array.set(t),
                this
            },
            copyColorsArray: function(t) {
                for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                    var s = t[i];
                    void 0 === s && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                    s = new o.a),
                    e[r++] = s.r,
                    e[r++] = s.g,
                    e[r++] = s.b
                }
                return this
            },
            copyIndicesArray: function(t) {
                for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                    var s = t[i];
                    e[r++] = s.a,
                    e[r++] = s.b,
                    e[r++] = s.c
                }
                return this
            },
            copyVector2sArray: function(t) {
                for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                    var o = t[i];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                    o = new s.a),
                    e[r++] = o.x,
                    e[r++] = o.y
                }
                return this
            },
            copyVector3sArray: function(t) {
                for (var e = this.array, r = 0, i = 0, s = t.length; i < s; i++) {
                    var o = t[i];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                    o = new n.a),
                    e[r++] = o.x,
                    e[r++] = o.y,
                    e[r++] = o.z
                }
                return this
            },
            copyVector4sArray: function(t) {
                for (var e = this.array, r = 0, n = 0, s = t.length; n < s; n++) {
                    var o = t[n];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n),
                    o = new i.a),
                    e[r++] = o.x,
                    e[r++] = o.y,
                    e[r++] = o.z,
                    e[r++] = o.w
                }
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0),
                this.array.set(t, e),
                this
            },
            getX: function(t) {
                return this.array[t * this.itemSize]
            },
            setX: function(t, e) {
                return this.array[t * this.itemSize] = e,
                this
            },
            getY: function(t) {
                return this.array[t * this.itemSize + 1]
            },
            setY: function(t, e) {
                return this.array[t * this.itemSize + 1] = e,
                this
            },
            getZ: function(t) {
                return this.array[t * this.itemSize + 2]
            },
            setZ: function(t, e) {
                return this.array[t * this.itemSize + 2] = e,
                this
            },
            getW: function(t) {
                return this.array[t * this.itemSize + 3]
            },
            setW: function(t, e) {
                return this.array[t * this.itemSize + 3] = e,
                this
            },
            setXY: function(t, e, r) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = r,
                this
            },
            setXYZ: function(t, e, r, i) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = r,
                this.array[t + 2] = i,
                this
            },
            setXYZW: function(t, e, r, i, n) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = r,
                this.array[t + 2] = i,
                this.array[t + 3] = n,
                this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }
    },
    52: function(t, e, r) {
        "use strict";
        function i() {}
        r.d(e, "a", function() {
            return i
        }),
        Object.assign(i.prototype, {
            addEventListener: function(t, e) {
                void 0 === this._listeners && (this._listeners = {});
                var r = this._listeners;
                void 0 === r[t] && (r[t] = []),
                -1 === r[t].indexOf(e) && r[t].push(e)
            },
            hasEventListener: function(t, e) {
                if (void 0 === this._listeners)
                    return !1;
                var r = this._listeners;
                return void 0 !== r[t] && -1 !== r[t].indexOf(e)
            },
            removeEventListener: function(t, e) {
                if (void 0 !== this._listeners) {
                    var r = this._listeners[t];
                    if (void 0 !== r) {
                        var i = r.indexOf(e);
                        -1 !== i && r.splice(i, 1)
                    }
                }
            },
            dispatchEvent: function(t) {
                if (void 0 !== this._listeners) {
                    var e = this._listeners[t.type];
                    if (void 0 !== e) {
                        t.target = this;
                        var r = []
                          , i = 0
                          , n = e.length;
                        for (i = 0; i < n; i++)
                            r[i] = e[i];
                        for (i = 0; i < n; i++)
                            r[i].call(this, t)
                    }
                }
            }
        })
    },
    60: function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return o
        });
        var i = r(52)
          , n = r(25)
          , s = r(5);
        function o() {
            Object.defineProperty(this, "id", {
                value: a++
            }),
            this.uuid = s.a.generateUUID(),
            this.name = "",
            this.type = "Material",
            this.fog = !0,
            this.lights = !0,
            this.blending = n.Fa,
            this.side = n.D,
            this.shading = n.jb,
            this.vertexColors = n.Da,
            this.opacity = 1,
            this.transparent = !1,
            this.blendSrc = n.lb,
            this.blendDst = n.Ka,
            this.blendEquation = n.a,
            this.blendSrcAlpha = null,
            this.blendDstAlpha = null,
            this.blendEquationAlpha = null,
            this.depthFunc = n.K,
            this.depthTest = !0,
            this.depthWrite = !0,
            this.clippingPlanes = null,
            this.clipShadows = !1,
            this.colorWrite = !0,
            this.precision = null,
            this.polygonOffset = !1,
            this.polygonOffsetFactor = 0,
            this.polygonOffsetUnits = 0,
            this.alphaTest = 0,
            this.premultipliedAlpha = !1,
            this.overdraw = 0,
            this.visible = !0,
            this._needsUpdate = !0
        }
        o.prototype = {
            constructor: o,
            isMaterial: !0,
            get needsUpdate() {
                return this._needsUpdate
            },
            set needsUpdate(t) {
                !0 === t && this.update(),
                this._needsUpdate = t
            },
            setValues: function(t) {
                if (void 0 !== t)
                    for (var e in t) {
                        var r = t[e];
                        if (void 0 !== r) {
                            var i = this[e];
                            void 0 !== i ? i && i.isColor ? i.set(r) : i && i.isVector3 && r && r.isVector3 ? i.copy(r) : this[e] = "overdraw" === e ? Number(r) : r : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else
                            console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                    }
            },
            toJSON: function(t) {
                var e = void 0 === t;
                e && (t = {
                    textures: {},
                    images: {}
                });
                var r = {
                    metadata: {
                        version: 4.4,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                function i(t) {
                    var e = [];
                    for (var r in t) {
                        var i = t[r];
                        delete i.metadata,
                        e.push(i)
                    }
                    return e
                }
                if (r.uuid = this.uuid,
                r.type = this.type,
                "" !== this.name && (r.name = this.name),
                this.color && this.color.isColor && (r.color = this.color.getHex()),
                void 0 !== this.roughness && (r.roughness = this.roughness),
                void 0 !== this.metalness && (r.metalness = this.metalness),
                this.emissive && this.emissive.isColor && (r.emissive = this.emissive.getHex()),
                this.specular && this.specular.isColor && (r.specular = this.specular.getHex()),
                void 0 !== this.shininess && (r.shininess = this.shininess),
                this.map && this.map.isTexture && (r.map = this.map.toJSON(t).uuid),
                this.alphaMap && this.alphaMap.isTexture && (r.alphaMap = this.alphaMap.toJSON(t).uuid),
                this.lightMap && this.lightMap.isTexture && (r.lightMap = this.lightMap.toJSON(t).uuid),
                this.bumpMap && this.bumpMap.isTexture && (r.bumpMap = this.bumpMap.toJSON(t).uuid,
                r.bumpScale = this.bumpScale),
                this.normalMap && this.normalMap.isTexture && (r.normalMap = this.normalMap.toJSON(t).uuid,
                r.normalScale = this.normalScale.toArray()),
                this.displacementMap && this.displacementMap.isTexture && (r.displacementMap = this.displacementMap.toJSON(t).uuid,
                r.displacementScale = this.displacementScale,
                r.displacementBias = this.displacementBias),
                this.roughnessMap && this.roughnessMap.isTexture && (r.roughnessMap = this.roughnessMap.toJSON(t).uuid),
                this.metalnessMap && this.metalnessMap.isTexture && (r.metalnessMap = this.metalnessMap.toJSON(t).uuid),
                this.emissiveMap && this.emissiveMap.isTexture && (r.emissiveMap = this.emissiveMap.toJSON(t).uuid),
                this.specularMap && this.specularMap.isTexture && (r.specularMap = this.specularMap.toJSON(t).uuid),
                this.envMap && this.envMap.isTexture && (r.envMap = this.envMap.toJSON(t).uuid,
                r.reflectivity = this.reflectivity),
                void 0 !== this.size && (r.size = this.size),
                void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation),
                this.blending !== n.Fa && (r.blending = this.blending),
                this.shading !== n.jb && (r.shading = this.shading),
                this.side !== n.D && (r.side = this.side),
                this.vertexColors !== n.Da && (r.vertexColors = this.vertexColors),
                this.opacity < 1 && (r.opacity = this.opacity),
                !0 === this.transparent && (r.transparent = this.transparent),
                r.depthFunc = this.depthFunc,
                r.depthTest = this.depthTest,
                r.depthWrite = this.depthWrite,
                this.alphaTest > 0 && (r.alphaTest = this.alphaTest),
                !0 === this.premultipliedAlpha && (r.premultipliedAlpha = this.premultipliedAlpha),
                !0 === this.wireframe && (r.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth),
                "round" !== this.wireframeLinecap && (r.wireframeLinecap = this.wireframeLinecap),
                "round" !== this.wireframeLinejoin && (r.wireframeLinejoin = this.wireframeLinejoin),
                r.skinning = this.skinning,
                r.morphTargets = this.morphTargets,
                e) {
                    var s = i(t.textures)
                      , o = i(t.images);
                    s.length > 0 && (r.textures = s),
                    o.length > 0 && (r.images = o)
                }
                return r
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.name = t.name,
                this.fog = t.fog,
                this.lights = t.lights,
                this.blending = t.blending,
                this.side = t.side,
                this.shading = t.shading,
                this.vertexColors = t.vertexColors,
                this.opacity = t.opacity,
                this.transparent = t.transparent,
                this.blendSrc = t.blendSrc,
                this.blendDst = t.blendDst,
                this.blendEquation = t.blendEquation,
                this.blendSrcAlpha = t.blendSrcAlpha,
                this.blendDstAlpha = t.blendDstAlpha,
                this.blendEquationAlpha = t.blendEquationAlpha,
                this.depthFunc = t.depthFunc,
                this.depthTest = t.depthTest,
                this.depthWrite = t.depthWrite,
                this.colorWrite = t.colorWrite,
                this.precision = t.precision,
                this.polygonOffset = t.polygonOffset,
                this.polygonOffsetFactor = t.polygonOffsetFactor,
                this.polygonOffsetUnits = t.polygonOffsetUnits,
                this.alphaTest = t.alphaTest,
                this.premultipliedAlpha = t.premultipliedAlpha,
                this.overdraw = t.overdraw,
                this.visible = t.visible,
                this.clipShadows = t.clipShadows;
                var e = t.clippingPlanes
                  , r = null;
                if (null !== e) {
                    var i = e.length;
                    r = new Array(i);
                    for (var n = 0; n !== i; ++n)
                        r[n] = e[n].clone()
                }
                return this.clippingPlanes = r,
                this
            },
            update: function() {
                this.dispatchEvent({
                    type: "update"
                })
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        },
        Object.assign(o.prototype, i.a.prototype);
        var a = 0
    },
    66: function(t, e, r) {
        "use strict";
        var i = r(3)
          , n = r(1)
          , s = r(7)
          , o = r(52)
          , a = r(43);
        function u() {
            this.mask = 1
        }
        u.prototype = {
            constructor: u,
            set: function(t) {
                this.mask = 1 << t
            },
            enable: function(t) {
                this.mask |= 1 << t
            },
            toggle: function(t) {
                this.mask ^= 1 << t
            },
            disable: function(t) {
                this.mask &= ~(1 << t)
            },
            test: function(t) {
                return 0 != (this.mask & t.mask)
            }
        };
        var h, c, l, d, p, f, m = r(45), v = r(5);
        function y() {
            Object.defineProperty(this, "id", {
                value: g++
            }),
            this.uuid = v.a.generateUUID(),
            this.name = "",
            this.type = "Object3D",
            this.parent = null,
            this.children = [],
            this.up = y.DefaultUp.clone();
            var t = new n.a
              , e = new a.a
              , r = new i.a
              , o = new n.a(1,1,1);
            e.onChange(function() {
                r.setFromEuler(e, !1)
            }),
            r.onChange(function() {
                e.setFromQuaternion(r, void 0, !1)
            }),
            Object.defineProperties(this, {
                position: {
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    enumerable: !0,
                    value: r
                },
                scale: {
                    enumerable: !0,
                    value: o
                },
                modelViewMatrix: {
                    value: new s.a
                },
                normalMatrix: {
                    value: new m.a
                }
            }),
            this.matrix = new s.a,
            this.matrixWorld = new s.a,
            this.matrixAutoUpdate = y.DefaultMatrixAutoUpdate,
            this.matrixWorldNeedsUpdate = !1,
            this.layers = new u,
            this.visible = !0,
            this.castShadow = !1,
            this.receiveShadow = !1,
            this.frustumCulled = !0,
            this.renderOrder = 0,
            this.userData = {},
            this.onBeforeRender = null
        }
        r.d(e, "a", function() {
            return y
        }),
        y.DefaultUp = new n.a(0,1,0),
        y.DefaultMatrixAutoUpdate = !0,
        Object.assign(y.prototype, o.a.prototype, {
            isObject3D: !0,
            applyMatrix: function(t) {
                this.matrix.multiplyMatrices(t, this.matrix),
                this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            setRotationFromAxisAngle: function(t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            },
            setRotationFromEuler: function(t) {
                this.quaternion.setFromEuler(t, !0)
            },
            setRotationFromMatrix: function(t) {
                this.quaternion.setFromRotationMatrix(t)
            },
            setRotationFromQuaternion: function(t) {
                this.quaternion.copy(t)
            },
            rotateOnAxis: (f = new i.a,
            function(t, e) {
                return f.setFromAxisAngle(t, e),
                this.quaternion.multiply(f),
                this
            }
            ),
            rotateX: (p = new n.a(1,0,0),
            function(t) {
                return this.rotateOnAxis(p, t)
            }
            ),
            rotateY: function() {
                var t = new n.a(0,1,0);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            rotateZ: function() {
                var t = new n.a(0,0,1);
                return function(e) {
                    return this.rotateOnAxis(t, e)
                }
            }(),
            translateOnAxis: function() {
                var t = new n.a;
                return function(e, r) {
                    return t.copy(e).applyQuaternion(this.quaternion),
                    this.position.add(t.multiplyScalar(r)),
                    this
                }
            }(),
            translateX: function() {
                var t = new n.a(1,0,0);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateY: function() {
                var t = new n.a(0,1,0);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            translateZ: function() {
                var t = new n.a(0,0,1);
                return function(e) {
                    return this.translateOnAxis(t, e)
                }
            }(),
            localToWorld: function(t) {
                return t.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: (d = new s.a,
            function(t) {
                return t.applyMatrix4(d.getInverse(this.matrixWorld))
            }
            ),
            lookAt: function() {
                var t = new s.a;
                return function(e) {
                    t.lookAt(e, this.position, this.up),
                    this.quaternion.setFromRotationMatrix(t)
                }
            }(),
            add: function(t) {
                if (arguments.length > 1) {
                    for (var e = 0; e < arguments.length; e++)
                        this.add(arguments[e]);
                    return this
                }
                return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
                this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
                t.parent = this,
                t.dispatchEvent({
                    type: "added"
                }),
                this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
                this)
            },
            remove: function(t) {
                if (arguments.length > 1)
                    for (var e = 0; e < arguments.length; e++)
                        this.remove(arguments[e]);
                var r = this.children.indexOf(t);
                -1 !== r && (t.parent = null,
                t.dispatchEvent({
                    type: "removed"
                }),
                this.children.splice(r, 1))
            },
            getObjectById: function(t) {
                return this.getObjectByProperty("id", t)
            },
            getObjectByName: function(t) {
                return this.getObjectByProperty("name", t)
            },
            getObjectByProperty: function(t, e) {
                if (this[t] === e)
                    return this;
                for (var r = 0, i = this.children.length; r < i; r++) {
                    var n = this.children[r].getObjectByProperty(t, e);
                    if (void 0 !== n)
                        return n
                }
            },
            getWorldPosition: function(t) {
                var e = t || new n.a;
                return this.updateMatrixWorld(!0),
                e.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: (c = new n.a,
            l = new n.a,
            function(t) {
                var e = t || new i.a;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(c, e, l),
                e
            }
            ),
            getWorldRotation: (h = new i.a,
            function(t) {
                var e = t || new a.a;
                return this.getWorldQuaternion(h),
                e.setFromQuaternion(h, this.rotation.order, !1)
            }
            ),
            getWorldScale: function() {
                var t = new n.a
                  , e = new i.a;
                return function(r) {
                    var i = r || new n.a;
                    return this.updateMatrixWorld(!0),
                    this.matrixWorld.decompose(t, e, i),
                    i
                }
            }(),
            getWorldDirection: function() {
                var t = new i.a;
                return function(e) {
                    var r = e || new n.a;
                    return this.getWorldQuaternion(t),
                    r.set(0, 0, 1).applyQuaternion(t)
                }
            }(),
            raycast: function() {},
            traverse: function(t) {
                t(this);
                for (var e = this.children, r = 0, i = e.length; r < i; r++)
                    e[r].traverse(t)
            },
            traverseVisible: function(t) {
                if (!1 !== this.visible) {
                    t(this);
                    for (var e = this.children, r = 0, i = e.length; r < i; r++)
                        e[r].traverseVisible(t)
                }
            },
            traverseAncestors: function(t) {
                var e = this.parent;
                null !== e && (t(e),
                e.traverseAncestors(t))
            },
            updateMatrix: function() {
                this.matrix.compose(this.position, this.quaternion, this.scale),
                this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function(t) {
                !0 === this.matrixAutoUpdate && this.updateMatrix(),
                !0 !== this.matrixWorldNeedsUpdate && !0 !== t || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                this.matrixWorldNeedsUpdate = !1,
                t = !0);
                for (var e = this.children, r = 0, i = e.length; r < i; r++)
                    e[r].updateMatrixWorld(t)
            },
            toJSON: function(t) {
                var e = void 0 === t || "" === t
                  , r = {};
                e && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {}
                },
                r.metadata = {
                    version: 4.4,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                var i = {};
                if (i.uuid = this.uuid,
                i.type = this.type,
                "" !== this.name && (i.name = this.name),
                "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
                !0 === this.castShadow && (i.castShadow = !0),
                !0 === this.receiveShadow && (i.receiveShadow = !0),
                !1 === this.visible && (i.visible = !1),
                i.matrix = this.matrix.toArray(),
                void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)),
                i.geometry = this.geometry.uuid),
                void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)),
                i.material = this.material.uuid),
                this.children.length > 0) {
                    i.children = [];
                    for (var n = 0; n < this.children.length; n++)
                        i.children.push(this.children[n].toJSON(t).object)
                }
                if (e) {
                    var s = h(t.geometries)
                      , o = h(t.materials)
                      , a = h(t.textures)
                      , u = h(t.images);
                    s.length > 0 && (r.geometries = s),
                    o.length > 0 && (r.materials = o),
                    a.length > 0 && (r.textures = a),
                    u.length > 0 && (r.images = u)
                }
                return r.object = i,
                r;
                function h(t) {
                    var e = [];
                    for (var r in t) {
                        var i = t[r];
                        delete i.metadata,
                        e.push(i)
                    }
                    return e
                }
            },
            clone: function(t) {
                return (new this.constructor).copy(this, t)
            },
            copy: function(t, e) {
                if (void 0 === e && (e = !0),
                this.name = t.name,
                this.up.copy(t.up),
                this.position.copy(t.position),
                this.quaternion.copy(t.quaternion),
                this.scale.copy(t.scale),
                this.matrix.copy(t.matrix),
                this.matrixWorld.copy(t.matrixWorld),
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
                this.visible = t.visible,
                this.castShadow = t.castShadow,
                this.receiveShadow = t.receiveShadow,
                this.frustumCulled = t.frustumCulled,
                this.renderOrder = t.renderOrder,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                !0 === e)
                    for (var r = 0; r < t.children.length; r++) {
                        var i = t.children[r];
                        this.add(i.clone())
                    }
                return this
            }
        });
        var g = 0
    },
    71: function(t, e, r) {
        "use strict";
        r.d(e, "b", function() {
            return g
        }),
        r.d(e, "a", function() {
            return v
        });
        var i, n, s = r(52), o = r(95), a = r(45), u = r(31), h = r(42), c = r(1), l = r(7), d = r(17), p = r(23), f = r(66), m = r(5);
        function v() {
            Object.defineProperty(this, "id", {
                value: g()
            }),
            this.uuid = m.a.generateUUID(),
            this.name = "",
            this.type = "Geometry",
            this.vertices = [],
            this.colors = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.morphTargets = [],
            this.morphNormals = [],
            this.skinWeights = [],
            this.skinIndices = [],
            this.lineDistances = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.elementsNeedUpdate = !1,
            this.verticesNeedUpdate = !1,
            this.uvsNeedUpdate = !1,
            this.normalsNeedUpdate = !1,
            this.colorsNeedUpdate = !1,
            this.lineDistancesNeedUpdate = !1,
            this.groupsNeedUpdate = !1
        }
        Object.assign(v.prototype, s.a.prototype, {
            isGeometry: !0,
            applyMatrix: function(t) {
                for (var e = (new a.a).getNormalMatrix(t), r = 0, i = this.vertices.length; r < i; r++) {
                    this.vertices[r].applyMatrix4(t)
                }
                for (r = 0,
                i = this.faces.length; r < i; r++) {
                    var n = this.faces[r];
                    n.normal.applyMatrix3(e).normalize();
                    for (var s = 0, o = n.vertexNormals.length; s < o; s++)
                        n.vertexNormals[s].applyMatrix3(e).normalize()
                }
                return null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this.verticesNeedUpdate = !0,
                this.normalsNeedUpdate = !0,
                this
            },
            rotateX: function(t) {
                return void 0 === n && (n = new l.a),
                n.makeRotationX(t),
                this.applyMatrix(n),
                this
            },
            rotateY: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new l.a),
                    t.makeRotationY(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            rotateZ: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new l.a),
                    t.makeRotationZ(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            translate: function() {
                var t;
                return function(e, r, i) {
                    return void 0 === t && (t = new l.a),
                    t.makeTranslation(e, r, i),
                    this.applyMatrix(t),
                    this
                }
            }(),
            scale: function() {
                var t;
                return function(e, r, i) {
                    return void 0 === t && (t = new l.a),
                    t.makeScale(e, r, i),
                    this.applyMatrix(t),
                    this
                }
            }(),
            lookAt: function(t) {
                void 0 === i && (i = new f.a),
                i.lookAt(t),
                i.updateMatrix(),
                this.applyMatrix(i.matrix)
            },
            fromBufferGeometry: function(t) {
                var e = this
                  , r = null !== t.index ? t.index.array : void 0
                  , i = t.attributes
                  , n = i.position.array
                  , s = void 0 !== i.normal ? i.normal.array : void 0
                  , a = void 0 !== i.color ? i.color.array : void 0
                  , u = void 0 !== i.uv ? i.uv.array : void 0
                  , h = void 0 !== i.uv2 ? i.uv2.array : void 0;
                void 0 !== h && (this.faceVertexUvs[1] = []);
                for (var l = [], f = [], m = [], v = 0, y = 0; v < n.length; v += 3,
                y += 2)
                    e.vertices.push(new c.a(n[v],n[v + 1],n[v + 2])),
                    void 0 !== s && l.push(new c.a(s[v],s[v + 1],s[v + 2])),
                    void 0 !== a && e.colors.push(new p.a(a[v],a[v + 1],a[v + 2])),
                    void 0 !== u && f.push(new d.a(u[y],u[y + 1])),
                    void 0 !== h && m.push(new d.a(h[y],h[y + 1]));
                function g(t, r, i, n) {
                    var c = void 0 !== s ? [l[t].clone(), l[r].clone(), l[i].clone()] : []
                      , d = void 0 !== a ? [e.colors[t].clone(), e.colors[r].clone(), e.colors[i].clone()] : []
                      , p = new o.a(t,r,i,c,d,n);
                    e.faces.push(p),
                    void 0 !== u && e.faceVertexUvs[0].push([f[t].clone(), f[r].clone(), f[i].clone()]),
                    void 0 !== h && e.faceVertexUvs[1].push([m[t].clone(), m[r].clone(), m[i].clone()])
                }
                if (void 0 !== r) {
                    var b = t.groups;
                    if (b.length > 0)
                        for (v = 0; v < b.length; v++)
                            for (var x = b[v], w = x.start, N = (y = w,
                            w + x.count); y < N; y += 3)
                                g(r[y], r[y + 1], r[y + 2], x.materialIndex);
                    else
                        for (v = 0; v < r.length; v += 3)
                            g(r[v], r[v + 1], r[v + 2])
                } else
                    for (v = 0; v < n.length / 3; v += 3)
                        g(v, v + 1, v + 2);
                return this.computeFaceNormals(),
                null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
                null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
                this
            },
            center: function() {
                this.computeBoundingBox();
                var t = this.boundingBox.getCenter().negate();
                return this.translate(t.x, t.y, t.z),
                t
            },
            normalize: function() {
                this.computeBoundingSphere();
                var t = this.boundingSphere.center
                  , e = this.boundingSphere.radius
                  , r = 0 === e ? 1 : 1 / e
                  , i = new l.a;
                return i.set(r, 0, 0, -r * t.x, 0, r, 0, -r * t.y, 0, 0, r, -r * t.z, 0, 0, 0, 1),
                this.applyMatrix(i),
                this
            },
            computeFaceNormals: function() {
                for (var t = new c.a, e = new c.a, r = 0, i = this.faces.length; r < i; r++) {
                    var n = this.faces[r]
                      , s = this.vertices[n.a]
                      , o = this.vertices[n.b]
                      , a = this.vertices[n.c];
                    t.subVectors(a, o),
                    e.subVectors(s, o),
                    t.cross(e),
                    t.normalize(),
                    n.normal.copy(t)
                }
            },
            computeVertexNormals: function(t) {
                var e, r, i, n, s, o;
                for (void 0 === t && (t = !0),
                o = new Array(this.vertices.length),
                e = 0,
                r = this.vertices.length; e < r; e++)
                    o[e] = new c.a;
                if (t) {
                    var a, u, h, l = new c.a, d = new c.a;
                    for (i = 0,
                    n = this.faces.length; i < n; i++)
                        s = this.faces[i],
                        a = this.vertices[s.a],
                        u = this.vertices[s.b],
                        h = this.vertices[s.c],
                        l.subVectors(h, u),
                        d.subVectors(a, u),
                        l.cross(d),
                        o[s.a].add(l),
                        o[s.b].add(l),
                        o[s.c].add(l)
                } else
                    for (i = 0,
                    n = this.faces.length; i < n; i++)
                        o[(s = this.faces[i]).a].add(s.normal),
                        o[s.b].add(s.normal),
                        o[s.c].add(s.normal);
                for (e = 0,
                r = this.vertices.length; e < r; e++)
                    o[e].normalize();
                for (i = 0,
                n = this.faces.length; i < n; i++) {
                    var p = (s = this.faces[i]).vertexNormals;
                    3 === p.length ? (p[0].copy(o[s.a]),
                    p[1].copy(o[s.b]),
                    p[2].copy(o[s.c])) : (p[0] = o[s.a].clone(),
                    p[1] = o[s.b].clone(),
                    p[2] = o[s.c].clone())
                }
                this.faces.length > 0 && (this.normalsNeedUpdate = !0)
            },
            computeMorphNormals: function() {
                var t, e, r, i, n;
                for (r = 0,
                i = this.faces.length; r < i; r++)
                    for ((n = this.faces[r]).__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(),
                    n.__originalVertexNormals || (n.__originalVertexNormals = []),
                    t = 0,
                    e = n.vertexNormals.length; t < e; t++)
                        n.__originalVertexNormals[t] ? n.__originalVertexNormals[t].copy(n.vertexNormals[t]) : n.__originalVertexNormals[t] = n.vertexNormals[t].clone();
                var s = new v;
                for (s.faces = this.faces,
                t = 0,
                e = this.morphTargets.length; t < e; t++) {
                    if (!this.morphNormals[t]) {
                        this.morphNormals[t] = {},
                        this.morphNormals[t].faceNormals = [],
                        this.morphNormals[t].vertexNormals = [];
                        var o = this.morphNormals[t].faceNormals
                          , a = this.morphNormals[t].vertexNormals;
                        for (r = 0,
                        i = this.faces.length; r < i; r++)
                            u = new c.a,
                            h = {
                                a: new c.a,
                                b: new c.a,
                                c: new c.a
                            },
                            o.push(u),
                            a.push(h)
                    }
                    var u, h, l = this.morphNormals[t];
                    for (s.vertices = this.morphTargets[t].vertices,
                    s.computeFaceNormals(),
                    s.computeVertexNormals(),
                    r = 0,
                    i = this.faces.length; r < i; r++)
                        n = this.faces[r],
                        u = l.faceNormals[r],
                        h = l.vertexNormals[r],
                        u.copy(n.normal),
                        h.a.copy(n.vertexNormals[0]),
                        h.b.copy(n.vertexNormals[1]),
                        h.c.copy(n.vertexNormals[2])
                }
                for (r = 0,
                i = this.faces.length; r < i; r++)
                    (n = this.faces[r]).normal = n.__originalFaceNormal,
                    n.vertexNormals = n.__originalVertexNormals
            },
            computeTangents: function() {
                console.warn("THREE.Geometry: .computeTangents() has been removed.")
            },
            computeLineDistances: function() {
                for (var t = 0, e = this.vertices, r = 0, i = e.length; r < i; r++)
                    r > 0 && (t += e[r].distanceTo(e[r - 1])),
                    this.lineDistances[r] = t
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new h.a),
                this.boundingBox.setFromPoints(this.vertices)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new u.a),
                this.boundingSphere.setFromPoints(this.vertices)
            },
            merge: function(t, e, r) {
                if (!1 !== (t && t.isGeometry)) {
                    var i, n = this.vertices.length, s = this.vertices, u = t.vertices, h = this.faces, c = t.faces, l = this.faceVertexUvs[0], d = t.faceVertexUvs[0], p = this.colors, f = t.colors;
                    void 0 === r && (r = 0),
                    void 0 !== e && (i = (new a.a).getNormalMatrix(e));
                    for (var m = 0, v = u.length; m < v; m++) {
                        var y = u[m].clone();
                        void 0 !== e && y.applyMatrix4(e),
                        s.push(y)
                    }
                    for (m = 0,
                    v = f.length; m < v; m++)
                        p.push(f[m].clone());
                    for (m = 0,
                    v = c.length; m < v; m++) {
                        var g, b, x, w = c[m], N = w.vertexNormals, M = w.vertexColors;
                        (g = new o.a(w.a + n,w.b + n,w.c + n)).normal.copy(w.normal),
                        void 0 !== i && g.normal.applyMatrix3(i).normalize();
                        for (var A = 0, S = N.length; A < S; A++)
                            b = N[A].clone(),
                            void 0 !== i && b.applyMatrix3(i).normalize(),
                            g.vertexNormals.push(b);
                        g.color.copy(w.color);
                        for (A = 0,
                        S = M.length; A < S; A++)
                            x = M[A],
                            g.vertexColors.push(x.clone());
                        g.materialIndex = w.materialIndex + r,
                        h.push(g)
                    }
                    for (m = 0,
                    v = d.length; m < v; m++) {
                        var U = d[m]
                          , T = [];
                        if (void 0 !== U) {
                            for (A = 0,
                            S = U.length; A < S; A++)
                                T.push(U[A].clone());
                            l.push(T)
                        }
                    }
                } else
                    console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
            },
            mergeMesh: function(t) {
                !1 !== (t && t.isMesh) ? (t.matrixAutoUpdate && t.updateMatrix(),
                this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
            },
            mergeVertices: function() {
                var t, e, r, i, n, s, o, a, u = {}, h = [], c = [], l = Math.pow(10, 4);
                for (r = 0,
                i = this.vertices.length; r < i; r++)
                    t = this.vertices[r],
                    void 0 === u[e = Math.round(t.x * l) + "_" + Math.round(t.y * l) + "_" + Math.round(t.z * l)] ? (u[e] = r,
                    h.push(this.vertices[r]),
                    c[r] = h.length - 1) : c[r] = c[u[e]];
                var d = [];
                for (r = 0,
                i = this.faces.length; r < i; r++) {
                    (n = this.faces[r]).a = c[n.a],
                    n.b = c[n.b],
                    n.c = c[n.c],
                    s = [n.a, n.b, n.c];
                    for (var p = 0; p < 3; p++)
                        if (s[p] === s[(p + 1) % 3]) {
                            p,
                            d.push(r);
                            break
                        }
                }
                for (r = d.length - 1; r >= 0; r--) {
                    var f = d[r];
                    for (this.faces.splice(f, 1),
                    o = 0,
                    a = this.faceVertexUvs.length; o < a; o++)
                        this.faceVertexUvs[o].splice(f, 1)
                }
                var m = this.vertices.length - h.length;
                return this.vertices = h,
                m
            },
            sortFacesByMaterialIndex: function() {
                for (var t = this.faces, e = t.length, r = 0; r < e; r++)
                    t[r]._id = r;
                t.sort(function(t, e) {
                    return t.materialIndex - e.materialIndex
                });
                var i, n, s = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
                s && s.length === e && (i = []),
                o && o.length === e && (n = []);
                for (r = 0; r < e; r++) {
                    var a = t[r]._id;
                    i && i.push(s[a]),
                    n && n.push(o[a])
                }
                i && (this.faceVertexUvs[0] = i),
                n && (this.faceVertexUvs[1] = n)
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.4,
                        type: "Geometry",
                        generator: "Geometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid,
                t.type = this.type,
                "" !== this.name && (t.name = this.name),
                void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var r in e)
                        void 0 !== e[r] && (t[r] = e[r]);
                    return t
                }
                for (var i = [], n = 0; n < this.vertices.length; n++) {
                    var s = this.vertices[n];
                    i.push(s.x, s.y, s.z)
                }
                var o = []
                  , a = []
                  , u = {}
                  , h = []
                  , c = {}
                  , l = []
                  , d = {};
                for (n = 0; n < this.faces.length; n++) {
                    var p = this.faces[n]
                      , f = void 0 !== this.faceVertexUvs[0][n]
                      , m = p.normal.length() > 0
                      , v = p.vertexNormals.length > 0
                      , y = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b
                      , g = p.vertexColors.length > 0
                      , b = 0;
                    if (b = M(b = M(b = M(b = M(b = M(b = M(b = M(b = M(b, 0, 0), 1, !0), 2, !1), 3, f), 4, m), 5, v), 6, y), 7, g),
                    o.push(b),
                    o.push(p.a, p.b, p.c),
                    o.push(p.materialIndex),
                    f) {
                        var x = this.faceVertexUvs[0][n];
                        o.push(U(x[0]), U(x[1]), U(x[2]))
                    }
                    if (m && o.push(A(p.normal)),
                    v) {
                        var w = p.vertexNormals;
                        o.push(A(w[0]), A(w[1]), A(w[2]))
                    }
                    if (y && o.push(S(p.color)),
                    g) {
                        var N = p.vertexColors;
                        o.push(S(N[0]), S(N[1]), S(N[2]))
                    }
                }
                function M(t, e, r) {
                    return r ? t | 1 << e : t & ~(1 << e)
                }
                function A(t) {
                    var e = t.x.toString() + t.y.toString() + t.z.toString();
                    return void 0 !== u[e] ? u[e] : (u[e] = a.length / 3,
                    a.push(t.x, t.y, t.z),
                    u[e])
                }
                function S(t) {
                    var e = t.r.toString() + t.g.toString() + t.b.toString();
                    return void 0 !== c[e] ? c[e] : (c[e] = h.length,
                    h.push(t.getHex()),
                    c[e])
                }
                function U(t) {
                    var e = t.x.toString() + t.y.toString();
                    return void 0 !== d[e] ? d[e] : (d[e] = l.length / 2,
                    l.push(t.x, t.y),
                    d[e])
                }
                return t.data = {},
                t.data.vertices = i,
                t.data.normals = a,
                h.length > 0 && (t.data.colors = h),
                l.length > 0 && (t.data.uvs = [l]),
                t.data.faces = o,
                t
            },
            clone: function() {
                return (new v).copy(this)
            },
            copy: function(t) {
                this.vertices = [],
                this.faces = [],
                this.faceVertexUvs = [[]],
                this.colors = [];
                for (var e = t.vertices, r = 0, i = e.length; r < i; r++)
                    this.vertices.push(e[r].clone());
                var n = t.colors;
                for (r = 0,
                i = n.length; r < i; r++)
                    this.colors.push(n[r].clone());
                var s = t.faces;
                for (r = 0,
                i = s.length; r < i; r++)
                    this.faces.push(s[r].clone());
                for (r = 0,
                i = t.faceVertexUvs.length; r < i; r++) {
                    var o = t.faceVertexUvs[r];
                    void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
                    for (var a = 0, u = o.length; a < u; a++) {
                        for (var h = o[a], c = [], l = 0, d = h.length; l < d; l++) {
                            var p = h[l];
                            c.push(p.clone())
                        }
                        this.faceVertexUvs[r].push(c)
                    }
                }
                return this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        var y = 0;
        function g() {
            return y++
        }
    },
    87: function(t, e, r) {
        "use strict";
        var i = r(1)
          , n = r(42)
          , s = r(52)
          , o = r(26)
          , a = r(31)
          , u = r(71)
          , h = r(17)
          , c = r(5);
        function l() {
            Object.defineProperty(this, "id", {
                value: Object(u.b)()
            }),
            this.uuid = c.a.generateUUID(),
            this.name = "",
            this.type = "DirectGeometry",
            this.indices = [],
            this.vertices = [],
            this.normals = [],
            this.colors = [],
            this.uvs = [],
            this.uvs2 = [],
            this.groups = [],
            this.morphTargets = {},
            this.skinWeights = [],
            this.skinIndices = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.verticesNeedUpdate = !1,
            this.normalsNeedUpdate = !1,
            this.colorsNeedUpdate = !1,
            this.uvsNeedUpdate = !1,
            this.groupsNeedUpdate = !1
        }
        Object.assign(l.prototype, s.a.prototype, {
            computeBoundingBox: u.a.prototype.computeBoundingBox,
            computeBoundingSphere: u.a.prototype.computeBoundingSphere,
            computeFaceNormals: function() {
                console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
            },
            computeVertexNormals: function() {
                console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
            },
            computeGroups: function(t) {
                for (var e, r, i = [], n = t.faces, s = 0; s < n.length; s++) {
                    var o = n[s];
                    o.materialIndex !== r && (r = o.materialIndex,
                    void 0 !== e && (e.count = 3 * s - e.start,
                    i.push(e)),
                    e = {
                        start: 3 * s,
                        materialIndex: r
                    })
                }
                void 0 !== e && (e.count = 3 * s - e.start,
                i.push(e)),
                this.groups = i
            },
            fromGeometry: function(t) {
                var e, r = t.faces, i = t.vertices, n = t.faceVertexUvs, s = n[0] && n[0].length > 0, o = n[1] && n[1].length > 0, a = t.morphTargets, u = a.length;
                if (u > 0) {
                    e = [];
                    for (var c = 0; c < u; c++)
                        e[c] = [];
                    this.morphTargets.position = e
                }
                var l, d = t.morphNormals, p = d.length;
                if (p > 0) {
                    l = [];
                    for (c = 0; c < p; c++)
                        l[c] = [];
                    this.morphTargets.normal = l
                }
                var f = t.skinIndices
                  , m = t.skinWeights
                  , v = f.length === i.length
                  , y = m.length === i.length;
                for (c = 0; c < r.length; c++) {
                    var g = r[c];
                    this.vertices.push(i[g.a], i[g.b], i[g.c]);
                    var b = g.vertexNormals;
                    if (3 === b.length)
                        this.normals.push(b[0], b[1], b[2]);
                    else {
                        var x = g.normal;
                        this.normals.push(x, x, x)
                    }
                    var w, N = g.vertexColors;
                    if (3 === N.length)
                        this.colors.push(N[0], N[1], N[2]);
                    else {
                        var M = g.color;
                        this.colors.push(M, M, M)
                    }
                    if (!0 === s)
                        void 0 !== (w = n[0][c]) ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c),
                        this.uvs.push(new h.a, new h.a, new h.a));
                    if (!0 === o)
                        void 0 !== (w = n[1][c]) ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c),
                        this.uvs2.push(new h.a, new h.a, new h.a));
                    for (var A = 0; A < u; A++) {
                        var S = a[A].vertices;
                        e[A].push(S[g.a], S[g.b], S[g.c])
                    }
                    for (A = 0; A < p; A++) {
                        var U = d[A].vertexNormals[c];
                        l[A].push(U.a, U.b, U.c)
                    }
                    v && this.skinIndices.push(f[g.a], f[g.b], f[g.c]),
                    y && this.skinWeights.push(m[g.a], m[g.b], m[g.c])
                }
                return this.computeGroups(t),
                this.verticesNeedUpdate = t.verticesNeedUpdate,
                this.normalsNeedUpdate = t.normalsNeedUpdate,
                this.colorsNeedUpdate = t.colorsNeedUpdate,
                this.uvsNeedUpdate = t.uvsNeedUpdate,
                this.groupsNeedUpdate = t.groupsNeedUpdate,
                this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        var d, p, f, m, v = r(66), y = r(7), g = r(45);
        function b() {
            Object.defineProperty(this, "id", {
                value: Object(u.b)()
            }),
            this.uuid = c.a.generateUUID(),
            this.name = "",
            this.type = "BufferGeometry",
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.drawRange = {
                start: 0,
                count: 1 / 0
            }
        }
        r.d(e, "a", function() {
            return b
        }),
        Object.assign(b.prototype, s.a.prototype, {
            isBufferGeometry: !0,
            getIndex: function() {
                return this.index
            },
            setIndex: function(t) {
                this.index = t
            },
            addAttribute: function(t, e) {
                return !1 === (e && e.isBufferAttribute) && !1 === (e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
                void this.addAttribute(t, new o.a(arguments[1],arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
                void this.setIndex(e)) : (this.attributes[t] = e,
                this)
            },
            getAttribute: function(t) {
                return this.attributes[t]
            },
            removeAttribute: function(t) {
                return delete this.attributes[t],
                this
            },
            addGroup: function(t, e, r) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: void 0 !== r ? r : 0
                })
            },
            clearGroups: function() {
                this.groups = []
            },
            setDrawRange: function(t, e) {
                this.drawRange.start = t,
                this.drawRange.count = e
            },
            applyMatrix: function(t) {
                var e = this.attributes.position;
                void 0 !== e && (t.applyToVector3Array(e.array),
                e.needsUpdate = !0);
                var r = this.attributes.normal;
                void 0 !== r && ((new g.a).getNormalMatrix(t).applyToVector3Array(r.array),
                r.needsUpdate = !0);
                return null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this
            },
            rotateX: function(t) {
                return void 0 === m && (m = new y.a),
                m.makeRotationX(t),
                this.applyMatrix(m),
                this
            },
            rotateY: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new y.a),
                    t.makeRotationY(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            rotateZ: function() {
                var t;
                return function(e) {
                    return void 0 === t && (t = new y.a),
                    t.makeRotationZ(e),
                    this.applyMatrix(t),
                    this
                }
            }(),
            translate: function() {
                var t;
                return function(e, r, i) {
                    return void 0 === t && (t = new y.a),
                    t.makeTranslation(e, r, i),
                    this.applyMatrix(t),
                    this
                }
            }(),
            scale: function() {
                var t;
                return function(e, r, i) {
                    return void 0 === t && (t = new y.a),
                    t.makeScale(e, r, i),
                    this.applyMatrix(t),
                    this
                }
            }(),
            lookAt: function(t) {
                void 0 === f && (f = new v.a),
                f.lookAt(t),
                f.updateMatrix(),
                this.applyMatrix(f.matrix)
            },
            center: function() {
                this.computeBoundingBox();
                var t = this.boundingBox.getCenter().negate();
                return this.translate(t.x, t.y, t.z),
                t
            },
            setFromObject: function(t) {
                var e = t.geometry;
                if (t && t.isPoints || t && t.isLine) {
                    var r = new o.b(3 * e.vertices.length,3)
                      , i = new o.b(3 * e.colors.length,3);
                    if (this.addAttribute("position", r.copyVector3sArray(e.vertices)),
                    this.addAttribute("color", i.copyColorsArray(e.colors)),
                    e.lineDistances && e.lineDistances.length === e.vertices.length) {
                        var n = new o.b(e.lineDistances.length,1);
                        this.addAttribute("lineDistance", n.copyArray(e.lineDistances))
                    }
                    null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                    null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                } else
                    t && t.isMesh && e && e.isGeometry && this.fromGeometry(e);
                return this
            },
            updateFromObject: function(t) {
                var e, r = t.geometry;
                if (t && t.isMesh) {
                    var i = r.__directGeometry;
                    if (!0 === r.elementsNeedUpdate && (i = void 0,
                    r.elementsNeedUpdate = !1),
                    void 0 === i)
                        return this.fromGeometry(r);
                    i.verticesNeedUpdate = r.verticesNeedUpdate,
                    i.normalsNeedUpdate = r.normalsNeedUpdate,
                    i.colorsNeedUpdate = r.colorsNeedUpdate,
                    i.uvsNeedUpdate = r.uvsNeedUpdate,
                    i.groupsNeedUpdate = r.groupsNeedUpdate,
                    r.verticesNeedUpdate = !1,
                    r.normalsNeedUpdate = !1,
                    r.colorsNeedUpdate = !1,
                    r.uvsNeedUpdate = !1,
                    r.groupsNeedUpdate = !1,
                    r = i
                }
                return !0 === r.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(r.vertices),
                e.needsUpdate = !0),
                r.verticesNeedUpdate = !1),
                !0 === r.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(r.normals),
                e.needsUpdate = !0),
                r.normalsNeedUpdate = !1),
                !0 === r.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(r.colors),
                e.needsUpdate = !0),
                r.colorsNeedUpdate = !1),
                r.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(r.uvs),
                e.needsUpdate = !0),
                r.uvsNeedUpdate = !1),
                r.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(r.lineDistances),
                e.needsUpdate = !0),
                r.lineDistancesNeedUpdate = !1),
                r.groupsNeedUpdate && (r.computeGroups(t.geometry),
                this.groups = r.groups,
                r.groupsNeedUpdate = !1),
                this
            },
            fromGeometry: function(t) {
                return t.__directGeometry = (new l).fromGeometry(t),
                this.fromDirectGeometry(t.__directGeometry)
            },
            fromDirectGeometry: function(t) {
                var e = new Float32Array(3 * t.vertices.length);
                if (this.addAttribute("position", new o.a(e,3).copyVector3sArray(t.vertices)),
                t.normals.length > 0) {
                    var r = new Float32Array(3 * t.normals.length);
                    this.addAttribute("normal", new o.a(r,3).copyVector3sArray(t.normals))
                }
                if (t.colors.length > 0) {
                    var i = new Float32Array(3 * t.colors.length);
                    this.addAttribute("color", new o.a(i,3).copyColorsArray(t.colors))
                }
                if (t.uvs.length > 0) {
                    var n = new Float32Array(2 * t.uvs.length);
                    this.addAttribute("uv", new o.a(n,2).copyVector2sArray(t.uvs))
                }
                if (t.uvs2.length > 0) {
                    var s = new Float32Array(2 * t.uvs2.length);
                    this.addAttribute("uv2", new o.a(s,2).copyVector2sArray(t.uvs2))
                }
                if (t.indices.length > 0) {
                    var a = new (t.vertices.length > 65535 ? Uint32Array : Uint16Array)(3 * t.indices.length);
                    this.setIndex(new o.a(a,1).copyIndicesArray(t.indices))
                }
                for (var u in this.groups = t.groups,
                t.morphTargets) {
                    for (var h = [], c = t.morphTargets[u], l = 0, d = c.length; l < d; l++) {
                        var p = c[l]
                          , f = new o.b(3 * p.length,3);
                        h.push(f.copyVector3sArray(p))
                    }
                    this.morphAttributes[u] = h
                }
                if (t.skinIndices.length > 0) {
                    var m = new o.b(4 * t.skinIndices.length,4);
                    this.addAttribute("skinIndex", m.copyVector4sArray(t.skinIndices))
                }
                if (t.skinWeights.length > 0) {
                    var v = new o.b(4 * t.skinWeights.length,4);
                    this.addAttribute("skinWeight", v.copyVector4sArray(t.skinWeights))
                }
                return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
                null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
                this
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new n.a);
                var t = this.attributes.position.array;
                void 0 !== t ? this.boundingBox.setFromArray(t) : this.boundingBox.makeEmpty(),
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            },
            computeBoundingSphere: (d = new n.a,
            p = new i.a,
            function() {
                null === this.boundingSphere && (this.boundingSphere = new a.a);
                var t = this.attributes.position;
                if (t) {
                    var e = t.array
                      , r = this.boundingSphere.center;
                    d.setFromArray(e),
                    d.getCenter(r);
                    for (var i = 0, n = 0, s = e.length; n < s; n += 3)
                        p.fromArray(e, n),
                        i = Math.max(i, r.distanceToSquared(p));
                    this.boundingSphere.radius = Math.sqrt(i),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
            ),
            computeFaceNormals: function() {},
            computeVertexNormals: function() {
                var t = this.index
                  , e = this.attributes
                  , r = this.groups;
                if (e.position) {
                    var n = e.position.array;
                    if (void 0 === e.normal)
                        this.addAttribute("normal", new o.a(new Float32Array(n.length),3));
                    else
                        for (var s = e.normal.array, a = 0, u = s.length; a < u; a++)
                            s[a] = 0;
                    var h, c, l, d = e.normal.array, p = new i.a, f = new i.a, m = new i.a, v = new i.a, y = new i.a;
                    if (t) {
                        var g = t.array;
                        0 === r.length && this.addGroup(0, g.length);
                        for (var b = 0, x = r.length; b < x; ++b) {
                            var w = r[b]
                              , N = w.start;
                            for (a = N,
                            u = N + w.count; a < u; a += 3)
                                h = 3 * g[a + 0],
                                c = 3 * g[a + 1],
                                l = 3 * g[a + 2],
                                p.fromArray(n, h),
                                f.fromArray(n, c),
                                m.fromArray(n, l),
                                v.subVectors(m, f),
                                y.subVectors(p, f),
                                v.cross(y),
                                d[h] += v.x,
                                d[h + 1] += v.y,
                                d[h + 2] += v.z,
                                d[c] += v.x,
                                d[c + 1] += v.y,
                                d[c + 2] += v.z,
                                d[l] += v.x,
                                d[l + 1] += v.y,
                                d[l + 2] += v.z
                        }
                    } else
                        for (a = 0,
                        u = n.length; a < u; a += 9)
                            p.fromArray(n, a),
                            f.fromArray(n, a + 3),
                            m.fromArray(n, a + 6),
                            v.subVectors(m, f),
                            y.subVectors(p, f),
                            v.cross(y),
                            d[a] = v.x,
                            d[a + 1] = v.y,
                            d[a + 2] = v.z,
                            d[a + 3] = v.x,
                            d[a + 4] = v.y,
                            d[a + 5] = v.z,
                            d[a + 6] = v.x,
                            d[a + 7] = v.y,
                            d[a + 8] = v.z;
                    this.normalizeNormals(),
                    e.normal.needsUpdate = !0
                }
            },
            merge: function(t, e) {
                if (!1 !== (t && t.isBufferGeometry)) {
                    void 0 === e && (e = 0);
                    var r = this.attributes;
                    for (var i in r)
                        if (void 0 !== t.attributes[i])
                            for (var n = r[i].array, s = t.attributes[i], o = s.array, a = 0, u = s.itemSize * e; a < o.length; a++,
                            u++)
                                n[u] = o[a];
                    return this
                }
                console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
            },
            normalizeNormals: function() {
                for (var t, e, r, i, n = this.attributes.normal.array, s = 0, o = n.length; s < o; s += 3)
                    t = n[s],
                    e = n[s + 1],
                    r = n[s + 2],
                    i = 1 / Math.sqrt(t * t + e * e + r * r),
                    n[s] *= i,
                    n[s + 1] *= i,
                    n[s + 2] *= i
            },
            toNonIndexed: function() {
                if (null === this.index)
                    return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                    this;
                var t = new b
                  , e = this.index.array
                  , r = this.attributes;
                for (var i in r) {
                    for (var n = r[i], s = n.array, a = n.itemSize, u = new s.constructor(e.length * a), h = 0, c = 0, l = 0, d = e.length; l < d; l++) {
                        h = e[l] * a;
                        for (var p = 0; p < a; p++)
                            u[c++] = s[h++]
                    }
                    t.addAttribute(i, new o.a(u,a))
                }
                return t
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.4,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid,
                t.type = this.type,
                "" !== this.name && (t.name = this.name),
                void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var r in e)
                        void 0 !== e[r] && (t[r] = e[r]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                var i = this.index;
                if (null !== i) {
                    var n = Array.prototype.slice.call(i.array);
                    t.data.index = {
                        type: i.array.constructor.name,
                        array: n
                    }
                }
                var s = this.attributes;
                for (var r in s) {
                    var o = s[r];
                    n = Array.prototype.slice.call(o.array);
                    t.data.attributes[r] = {
                        itemSize: o.itemSize,
                        type: o.array.constructor.name,
                        array: n,
                        normalized: o.normalized
                    }
                }
                var a = this.groups;
                a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
                var u = this.boundingSphere;
                return null !== u && (t.data.boundingSphere = {
                    center: u.center.toArray(),
                    radius: u.radius
                }),
                t
            },
            clone: function() {
                return (new b).copy(this)
            },
            copy: function(t) {
                var e = t.index;
                null !== e && this.setIndex(e.clone());
                var r = t.attributes;
                for (var i in r) {
                    var n = r[i];
                    this.addAttribute(i, n.clone())
                }
                for (var s = t.groups, o = 0, a = s.length; o < a; o++) {
                    var u = s[o];
                    this.addGroup(u.start, u.count, u.materialIndex)
                }
                return this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }),
        b.MaxIndex = 65535
    },
    89: function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return h
        });
        var i, n, s, o, a, u = r(1);
        function h(t, e) {
            this.origin = void 0 !== t ? t : new u.a,
            this.direction = void 0 !== e ? e : new u.a
        }
        h.prototype = {
            constructor: h,
            set: function(t, e) {
                return this.origin.copy(t),
                this.direction.copy(e),
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
            at: function(t, e) {
                return (e || new u.a).copy(this.direction).multiplyScalar(t).add(this.origin)
            },
            lookAt: function(t) {
                return this.direction.copy(t).sub(this.origin).normalize(),
                this
            },
            recast: (a = new u.a,
            function(t) {
                return this.origin.copy(this.at(t, a)),
                this
            }
            ),
            closestPointToPoint: function(t, e) {
                var r = e || new u.a;
                r.subVectors(t, this.origin);
                var i = r.dot(this.direction);
                return i < 0 ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
            },
            distanceToPoint: function(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            },
            distanceSqToPoint: function() {
                var t = new u.a;
                return function(e) {
                    var r = t.subVectors(e, this.origin).dot(this.direction);
                    return r < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(r).add(this.origin),
                    t.distanceToSquared(e))
                }
            }(),
            distanceSqToSegment: (n = new u.a,
            s = new u.a,
            o = new u.a,
            function(t, e, r, i) {
                n.copy(t).add(e).multiplyScalar(.5),
                s.copy(e).sub(t).normalize(),
                o.copy(this.origin).sub(n);
                var a, u, h, c, l = .5 * t.distanceTo(e), d = -this.direction.dot(s), p = o.dot(this.direction), f = -o.dot(s), m = o.lengthSq(), v = Math.abs(1 - d * d);
                if (v > 0)
                    if (u = d * p - f,
                    c = l * v,
                    (a = d * f - p) >= 0)
                        if (u >= -c)
                            if (u <= c) {
                                var y = 1 / v;
                                h = (a *= y) * (a + d * (u *= y) + 2 * p) + u * (d * a + u + 2 * f) + m
                            } else
                                u = l,
                                h = -(a = Math.max(0, -(d * u + p))) * a + u * (u + 2 * f) + m;
                        else
                            u = -l,
                            h = -(a = Math.max(0, -(d * u + p))) * a + u * (u + 2 * f) + m;
                    else
                        u <= -c ? h = -(a = Math.max(0, -(-d * l + p))) * a + (u = a > 0 ? -l : Math.min(Math.max(-l, -f), l)) * (u + 2 * f) + m : u <= c ? (a = 0,
                        h = (u = Math.min(Math.max(-l, -f), l)) * (u + 2 * f) + m) : h = -(a = Math.max(0, -(d * l + p))) * a + (u = a > 0 ? l : Math.min(Math.max(-l, -f), l)) * (u + 2 * f) + m;
                else
                    u = d > 0 ? -l : l,
                    h = -(a = Math.max(0, -(d * u + p))) * a + u * (u + 2 * f) + m;
                return r && r.copy(this.direction).multiplyScalar(a).add(this.origin),
                i && i.copy(s).multiplyScalar(u).add(n),
                h
            }
            ),
            intersectSphere: function() {
                var t = new u.a;
                return function(e, r) {
                    t.subVectors(e.center, this.origin);
                    var i = t.dot(this.direction)
                      , n = t.dot(t) - i * i
                      , s = e.radius * e.radius;
                    if (n > s)
                        return null;
                    var o = Math.sqrt(s - n)
                      , a = i - o
                      , u = i + o;
                    return a < 0 && u < 0 ? null : a < 0 ? this.at(u, r) : this.at(a, r)
                }
            }(),
            intersectsSphere: function(t) {
                return this.distanceToPoint(t.center) <= t.radius
            },
            distanceToPlane: function(t) {
                var e = t.normal.dot(this.direction);
                if (0 === e)
                    return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                var r = -(this.origin.dot(t.normal) + t.constant) / e;
                return r >= 0 ? r : null
            },
            intersectPlane: function(t, e) {
                var r = this.distanceToPlane(t);
                return null === r ? null : this.at(r, e)
            },
            intersectsPlane: function(t) {
                var e = t.distanceToPoint(this.origin);
                return 0 === e || t.normal.dot(this.direction) * e < 0
            },
            intersectBox: function(t, e) {
                var r, i, n, s, o, a, u = 1 / this.direction.x, h = 1 / this.direction.y, c = 1 / this.direction.z, l = this.origin;
                return u >= 0 ? (r = (t.min.x - l.x) * u,
                i = (t.max.x - l.x) * u) : (r = (t.max.x - l.x) * u,
                i = (t.min.x - l.x) * u),
                h >= 0 ? (n = (t.min.y - l.y) * h,
                s = (t.max.y - l.y) * h) : (n = (t.max.y - l.y) * h,
                s = (t.min.y - l.y) * h),
                r > s || n > i ? null : ((n > r || r != r) && (r = n),
                (s < i || i != i) && (i = s),
                c >= 0 ? (o = (t.min.z - l.z) * c,
                a = (t.max.z - l.z) * c) : (o = (t.max.z - l.z) * c,
                a = (t.min.z - l.z) * c),
                r > a || o > i ? null : ((o > r || r != r) && (r = o),
                (a < i || i != i) && (i = a),
                i < 0 ? null : this.at(r >= 0 ? r : i, e)))
            },
            intersectsBox: (i = new u.a,
            function(t) {
                return null !== this.intersectBox(t, i)
            }
            ),
            intersectTriangle: function() {
                var t = new u.a
                  , e = new u.a
                  , r = new u.a
                  , i = new u.a;
                return function(n, s, o, a, u) {
                    e.subVectors(s, n),
                    r.subVectors(o, n),
                    i.crossVectors(e, r);
                    var h, c = this.direction.dot(i);
                    if (c > 0) {
                        if (a)
                            return null;
                        h = 1
                    } else {
                        if (!(c < 0))
                            return null;
                        h = -1,
                        c = -c
                    }
                    t.subVectors(this.origin, n);
                    var l = h * this.direction.dot(r.crossVectors(t, r));
                    if (l < 0)
                        return null;
                    var d = h * this.direction.dot(e.cross(t));
                    if (d < 0)
                        return null;
                    if (l + d > c)
                        return null;
                    var p = -h * t.dot(i);
                    return p < 0 ? null : this.at(p / c, u)
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
    95: function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return s
        });
        var i = r(23)
          , n = r(1);
        function s(t, e, r, s, o, a) {
            this.a = t,
            this.b = e,
            this.c = r,
            this.normal = s && s.isVector3 ? s : new n.a,
            this.vertexNormals = Array.isArray(s) ? s : [],
            this.color = o && o.isColor ? o : new i.a,
            this.vertexColors = Array.isArray(o) ? o : [],
            this.materialIndex = void 0 !== a ? a : 0
        }
        s.prototype = {
            constructor: s,
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.a = t.a,
                this.b = t.b,
                this.c = t.c,
                this.normal.copy(t.normal),
                this.color.copy(t.color),
                this.materialIndex = t.materialIndex;
                for (var e = 0, r = t.vertexNormals.length; e < r; e++)
                    this.vertexNormals[e] = t.vertexNormals[e].clone();
                for (e = 0,
                r = t.vertexColors.length; e < r; e++)
                    this.vertexColors[e] = t.vertexColors[e].clone();
                return this
            }
        }
    }
}]);
