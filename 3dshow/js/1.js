(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    144: function(t, o, n) {
        "use strict";
        var e = n(11)
          , i = n(53)
          , r = n(1)
          , a = n(3)
          , s = n(7)
          , c = function(t, o) {
            return t && o ? t.equals(o) : t === o
        }
          , p = n(37)
          , u = n(91);
        n.d(o, "b", function() {
            return l
        }),
        n.d(o, "a", function() {
            return d
        });
        var h, f = (h = Object.setPrototypeOf || {
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
            h(t, o),
            t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype,
            new n)
        }
        ), l = function(t, o, n) {
            void 0 === n && (n = !0),
            o.position = y(t.position, o.position, n),
            o.rotation = y(t.rotation, o.rotation, n),
            o.projection = y(t.projection, o.projection, n)
        }, y = function(t, o, n) {
            return void 0 === n && (n = !0),
            t && !o ? o = t.clone() : t && o ? o.copy(t) : n && (o = void 0),
            o
        }, w = function() {
            return Object(p.a)({
                position: Object(p.a)(new r.a),
                rotation: Object(p.a)(new a.a),
                projection: new s.a,
                focalDistance: -1
            })
        }, d = function(t) {
            function o() {
                var o = t.call(this) || this;
                return o.size = {
                    width: 0,
                    height: 0
                },
                o.pose = w(),
                o.transition = {
                    startTime: 0,
                    duration: 0,
                    active: !1,
                    type: null,
                    progress: new i.a(0),
                    blackoutProgress: new i.a(0),
                    from: {
                        position: new r.a,
                        rotation: new a.a,
                        projection: new s.a
                    },
                    to: {
                        position: new r.a,
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
                t.from && l(t.from, this.transition.from),
                t.to && l(t.to, this.transition.to)
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
    150: function(t, o, n) {
        "use strict";
        var e;
        n.d(o, "a", function() {
            return e
        }),
        function(t) {
            t[t.visibleFloor = 1] = "visibleFloor",
            t[t.ghostFloor = 3] = "ghostFloor",
            t[t.boundingSkybox = 1] = "boundingSkybox",
            t[t.panoMarker = 2] = "panoMarker",
            t[t.reticule = 3] = "reticule",
            t[t.portals = 4] = "portals",
            t[t.grid = 5] = "grid",
            t[t.ribbon = 100] = "ribbon"
        }(e = e || (e = {}))
    },
    262: function(t, o, n) {
        "use strict";
        var e, i = n(19), r = (e = Object.setPrototypeOf || {
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
                var i = t.call(this) || this;
                return i.sweepId = o,
                i.hovering = n,
                i.selectionDuration = e,
                i
            }
            return r(o, t),
            o
        }(i.a);
        o.a = a
    },
    277: function(t, o, n) {
        "use strict";
        var e, i = n(19), r = (e = Object.setPrototypeOf || {
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
            function o(o) {
                var n = t.call(this) || this;
                return n.sweepId = o,
                n
            }
            return r(o, t),
            o
        }(i.a);
        o.a = a
    },
    278: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return s
        });
        var e = n(87)
          , i = n(1)
          , r = n(31)
          , a = n(26);
        function s(t, o, n, s, c, p, u) {
            e.a.call(this),
            this.type = "SphereBufferGeometry",
            this.parameters = {
                radius: t,
                widthSegments: o,
                heightSegments: n,
                phiStart: s,
                phiLength: c,
                thetaStart: p,
                thetaLength: u
            },
            t = t || 50,
            o = Math.max(3, Math.floor(o) || 8),
            n = Math.max(2, Math.floor(n) || 6),
            s = void 0 !== s ? s : 0,
            c = void 0 !== c ? c : 2 * Math.PI;
            for (var h = (p = void 0 !== p ? p : 0) + (u = void 0 !== u ? u : Math.PI), f = (o + 1) * (n + 1), l = new a.a(new Float32Array(3 * f),3), y = new a.a(new Float32Array(3 * f),3), w = new a.a(new Float32Array(2 * f),2), d = 0, v = [], m = new i.a, b = 0; b <= n; b++) {
                for (var g = [], M = b / n, O = 0; O <= o; O++) {
                    var P = O / o
                      , j = -t * Math.cos(s + P * c) * Math.sin(p + M * u)
                      , _ = t * Math.cos(p + M * u)
                      , S = t * Math.sin(s + P * c) * Math.sin(p + M * u);
                    m.set(j, _, S).normalize(),
                    l.setXYZ(d, j, _, S),
                    y.setXYZ(d, m.x, m.y, m.z),
                    w.setXY(d, P, 1 - M),
                    g.push(d),
                    d++
                }
                v.push(g)
            }
            var D = [];
            for (b = 0; b < n; b++)
                for (O = 0; O < o; O++) {
                    var k = v[b][O + 1]
                      , F = v[b][O]
                      , z = v[b + 1][O]
                      , x = v[b + 1][O + 1];
                    (0 !== b || p > 0) && D.push(k, F, x),
                    (b !== n - 1 || h < Math.PI) && D.push(F, z, x)
                }
            this.setIndex(new (l.count > 65535 ? a.d : a.c)(D,1)),
            this.addAttribute("position", l),
            this.addAttribute("normal", y),
            this.addAttribute("uv", w),
            this.boundingSphere = new r.a(new i.a,t)
        }
        s.prototype = Object.create(e.a.prototype),
        s.prototype.constructor = s
    },
    279: function(t, o, n) {
        "use strict";
        n.d(o, "b", function() {
            return b
        }),
        n.d(o, "a", function() {
            return g
        });
        var e, i = n(145), r = n(1), a = n(23), s = n(148), c = n(7), p = n(43), u = n(146), h = n(278), f = n(262), l = n(277), y = n(73), w = n(150), d = n(14), v = (e = Object.setPrototypeOf || {
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
        ), m = function(t) {
            function o() {
                return null !== t && t.apply(this, arguments) || this
            }
            return v(o, t),
            o
        }(i.a), b = "Show sweeps", g = function() {
            function t(t, o, n, e, i, s, c, p, u, h, f, l, w, d, v) {
                void 0 === h && (h = new a.a(2601164)),
                void 0 === f && (f = new a.a(1232384)),
                void 0 === l && (l = .8),
                void 0 === w && (w = 300),
                void 0 === d && (d = .4),
                void 0 === v && (v = y.a.ALL),
                this.engine = t,
                this.scene = o,
                this.raycaster = n,
                this.settingsData = e,
                this.sweepData = i,
                this.cameraData = s,
                this.map = c,
                this.onFloor = p,
                this.checkRenderModes = u,
                this.idleColor = h,
                this.hoverColor = f,
                this.idleOpacity = l,
                this.selectionDuration = w,
                this.puckSize = d,
                this.layer = v,
                this.meshes = [],
                this.sweepToMesh = {},
                this.puckOffset = new r.a(0,.05,0),
                this.wasDrawing = !1
            }
            return t.prototype.init = function(t, o) {
                var n = this
                  , e = new s.a(this.puckSize,this.puckSize)
                  , r = new h.a(.5 * this.puckSize,10,10);
                if (this.onFloor) {
                    var a = new c.a;
                    a.makeRotationFromEuler(new p.a(-Math.PI / 2,0,0,"XYZ")),
                    e.applyMatrix(a)
                }
                var f = {
                    color: this.idleColor.getHex(),
                    opacity: this.idleOpacity,
                    transparent: !0,
                    depthWrite: !1,
                    map: this.map
                }
                  , l = new u.a;
                this.sweepData.iterate(function(t) {
                    if (t.alignmentType === d.a.ALIGNED) {
                        var o, a = new u.a(f), s = new m(e,a);
                        n.onFloor ? (s.position.copy(t.floorPosition).add(n.puckOffset),
                        o = new i.a(e,l)) : (s.position.copy(t.position),
                        s.rotation.setFromQuaternion(t.rotation),
                        o = new i.a(r,l)),
                        s.name = t.id,
                        s.updateMatrixWorld(!1);
                        var c = n.sweepData.getState(t.id);
                        s.visible = c.visible,
                        c.onPropertyChanged("visible", function(t, o) {
                            s.visible = o
                        }),
                        c.selected.onPropertyChanged("value", function(t, o) {
                            var e = s.material;
                            e.color.copy(n.idleColor).lerp(n.hoverColor, o),
                            e.opacity = n.idleOpacity * (1 - o) + 1 * o
                        }),
                        n.onFloor || n.cameraData.pose.onPropertyChanged("position", function(t, o) {
                            s.lookAt(n.cameraData.pose.position)
                        }),
                        s.renderOrder = w.a.panoMarker,
                        o.position.copy(s.position),
                        o.rotation.copy(s.rotation),
                        o.name = t.id,
                        o.updateMatrixWorld(!1),
                        s.collider = o,
                        n.meshes.push(s),
                        n.sweepToMesh[t.id] = s
                    }
                })
            }
            ,
            t.prototype.removeSweepFromScene = function(t) {
                var o = this.sweepToMesh[t];
                this.scene.remove(o),
                this.raycaster.removeTarget(o.collider)
            }
            ,
            t.prototype.addSweepToScene = function(t) {
                var o = this
                  , n = this.sweepToMesh[t];
                n.layers.mask = this.layer.mask,
                this.scene.add(n);
                var e = this.raycaster.createCallbackSet();
                e.select = function(n) {
                    o.engine.broadcast(new f.a(t,!0,o.selectionDuration))
                }
                ,
                e.deselect = function(n) {
                    o.engine.broadcast(new f.a(t,!1,o.selectionDuration))
                }
                ,
                e.click = function(n) {
                    o.engine.broadcast(new l.a(t))
                }
                ,
                this.raycaster.addTarget(n.collider, !0, e)
            }
            ,
            t.prototype.render = function() {
                var t = this.checkRenderModes()
                  , o = this.settingsData.tryGetProperty(b, !0);
                if (t && o) {
                    if (!this.wasDrawing) {
                        for (var n in this.sweepToMesh)
                            this.addSweepToScene(n);
                        this.wasDrawing = !0
                    }
                } else if (this.wasDrawing) {
                    for (var n in this.sweepToMesh)
                        this.removeSweepFromScene(n);
                    this.wasDrawing = !1
                }
            }
            ,
            t.prototype.dispose = function() {
                for (var t in this.deactivate(),
                this.sweepToMesh) {
                    var o = this.sweepToMesh[t];
                    o.material.dispose(),
                    o.geometry.dispose()
                }
            }
            ,
            t.prototype.activate = function() {
                this.wasDrawing = !1
            }
            ,
            t.prototype.deactivate = function() {
                for (var t in this.sweepToMesh)
                    this.removeSweepFromScene(t)
            }
            ,
            t
        }()
    },
    51: function(t, o, n) {
        "use strict";
        n.d(o, "a", function() {
            return i
        });
        var e = n(1)
          , i = function() {
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
            return z
        }),
        n.d(o, "a", function() {
            return x
        }),
        n.d(o, "b", function() {
            return A
        }),
        n.d(o, "e", function() {
            return T
        }),
        n.d(o, "h", function() {
            return I
        }),
        n.d(o, "f", function() {
            return Y
        }),
        n.d(o, "g", function() {
            return R
        }),
        n.d(o, "d", function() {
            return q
        }),
        n.d(o, "c", function() {
            return E
        });
        var e, i, r, a, s, c, p, u, h, f, l, y, w, d, v, m, b, g, M, O, P, j = n(1), _ = n(3), S = n(27), D = n(89), k = n(7), F = n(51), z = function(t) {
            return 1 === t.elements[15]
        }, x = (e = new j.a,
        function(t, o, n, i) {
            return e.copy(t).sub(o),
            e.clampLength(n, i),
            o.clone().add(e)
        }
        ), A = function() {
            var t = new j.a;
            return function(o, n, e, i) {
                t.copy(n).sub(o);
                var r = Math.atan2(Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.z, 2)), t.y)
                  , a = Math.min(Math.max(e, r), i);
                return Math.abs(r - a) > Number.EPSILON ? T(o, n, r - a, !1) : o
            }
        }(), T = function() {
            var t = new j.a
              , o = new j.a;
            return function(n, e, i, r) {
                return t.copy(e).sub(n),
                r ? o.copy(F.a.UP) : o.copy(t).applyAxisAngle(F.a.UP, -1 * Math.PI / 2).setY(0).normalize(),
                t.applyAxisAngle(o, i),
                e.clone().sub(t)
            }
        }(), I = (i = new j.a,
        r = new j.a,
        function(t, o, n) {
            return i.copy(t).sub(o).normalize(),
            r.copy(t).sub(n).normalize(),
            (new _.a).setFromUnitVectors(i, r)
        }
        ), Y = (a = new k.a,
        function(t, o) {
            return a.setPosition(t),
            a.lookAt(t, o, F.a.UP),
            (new _.a).setFromRotationMatrix(a)
        }
        ), R = (s = new j.a,
        function(t, o, n) {
            return s.copy(F.a.FORWARD).applyQuaternion(t).normalize(),
            s.clone().multiplyScalar(-1 * n).add(o)
        }
        ), q = (c = new D.a,
        p = new j.a,
        function(t, o, n) {
            return p.copy(F.a.FORWARD).applyQuaternion(o),
            c.set(t, p),
            c.intersectPlane(n)
        }
        ), E = (u = new j.a,
        h = new j.a,
        f = new j.a,
        l = new j.a,
        y = [new j.a, new j.a, new j.a, new j.a, new j.a, new j.a, new j.a, new j.a],
        w = new j.a,
        d = new j.a,
        v = new j.a,
        m = new j.a,
        b = new S.a,
        g = new j.a,
        M = new D.a,
        O = new j.a,
        P = new j.a,
        function(t, o, n, e, i, r) {
            u.copy(F.a.FORWARD).applyQuaternion(o).setY(0),
            h.copy(u).setY(-Math.PI / 6).normalize(),
            l.copy(h).applyAxisAngle(F.a.UP, -Math.PI / 2).setY(0).normalize(),
            f.copy(l).cross(h).normalize();
            for (var a = 0, s = e.max, c = e.min, p = [s, c], j = 0; j < 2; j++)
                for (var _ = p[j].x, S = 0; S < 2; S++)
                    for (var D = p[S].y, k = 0; k < 2; k++) {
                        var z = p[k].z;
                        y[a].set(_, D, z),
                        a++
                    }
            w.copy(c),
            v.copy(t).setY(c.y);
            var x = d.copy(w).sub(v).dot(h);
            y.forEach(function(t) {
                if (t.y !== s.y) {
                    var o = d.copy(t).sub(v).dot(h);
                    o < x && (w.copy(t),
                    x = o)
                }
            });
            var A = Math.sign(w.dot(l));
            m.copy(w).setX(w.x === s.x ? c.x : s.x),
            Math.sign(m.dot(l)) !== A ? b.set(g.set(0, 0, -1 * Math.sign(w.z)), Math.abs(w.z)) : (m.copy(w).setZ(w.z === s.z ? c.z : s.z),
            b.set(g.set(-1 * Math.sign(w.x), 0, 0), Math.abs(w.x))),
            M.set(t, O.copy(h).multiplyScalar(-1)),
            M.intersectPlane(b, P);
            var T = Math.min(Math.abs(P && P.dot(h)), x)
              , I = 0
              , R = 0;
            y.forEach(function(o) {
                d.copy(o).sub(t);
                var n = Math.abs(d.dot(l))
                  , e = Math.abs(d.dot(f));
                n > I && (I = n),
                e > R && (R = e)
            });
            var q = I / Math.tan(i * r / 2)
              , E = R / Math.tan(i / 2)
              , C = Math.max(q, E) + Math.abs(T)
              , L = {};
            return L.position = t.clone().add(h.clone().multiplyScalar(1.1 * -C)),
            L.rotation = Y(L.position, t),
            L
        }
        )
    }
}]);
