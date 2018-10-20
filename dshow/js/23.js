(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
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
    149: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return u
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
        }, u = function(t) {
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
    150: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
            return r
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
        }(r = r || (r = {}))
    },
    198: function(t, e, n) {
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
                return r.key = e,
                r.state = n,
                r
            }
            return i(e, t),
            e
        }(o.a)
    },
    199: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
            return r
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
        }(r = r || (r = {}))
    },
    201: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function() {
            return r
        }),
        function(t) {
            t[t.Down = 0] = "Down",
            t[t.Pressed = 1] = "Pressed",
            t[t.Up = 2] = "Up"
        }(r = r || (r = {}))
    },
    203: function(t, e, n) {
        "use strict";
        var r, o, i;
        n.d(e, "b", function() {
            return r
        }),
        n.d(e, "c", function() {
            return o
        }),
        n.d(e, "a", function() {
            return i
        }),
        n.d(e, "d", function() {
            return a
        }),
        function(t) {
            t[t.PRIMARY = 0] = "PRIMARY",
            t[t.MIDDLE = 1] = "MIDDLE",
            t[t.SECONDARY = 2] = "SECONDARY",
            t[t.BACK = 3] = "BACK",
            t[t.FORWARD = 4] = "FORWARD",
            t[t.COUNT = 5] = "COUNT"
        }(r = r || (r = {})),
        function(t) {
            t[t.NONE = 0] = "NONE",
            t[t.PRIMARY = 1] = "PRIMARY",
            t[t.SECONDARY = 4] = "SECONDARY",
            t[t.MIDDLE = 2] = "MIDDLE",
            t[t.BACK = 8] = "BACK",
            t[t.FORWARD = 16] = "FORWARD",
            t[t.ALL = 31] = "ALL"
        }(o = o || (o = {})),
        function(t) {
            t[t.WAITING = 0] = "WAITING",
            t[t.WAITINGTOEXCEEDTHRESHOLD = 1] = "WAITINGTOEXCEEDTHRESHOLD",
            t[t.GESTURING = 2] = "GESTURING"
        }(i = i || (i = {}));
        var a = function(t) {
            var e = o[r[t]];
            if ("number" == typeof e)
                return e
        }
    },
    280: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        }),
        n.d(e, "b", function() {
            return a
        });
        var r, o = (r = Object.setPrototypeOf || {
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
        ), i = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.message = "Tried to start view-mode transition while another transition was active!",
                e
            }
            return o(e, t),
            e
        }(Error), a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.message = "Already in mode",
                e
            }
            return o(e, t),
            e
        }(Error)
    },
    281: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        }),
        n.d(e, "b", function() {
            return o
        });
        var r = function(t) {
            return void 0 !== t.pointerId
        }
          , o = function(t) {
            return void 0 !== t.changedTouches
        }
    },
    328: function(t, e) {},
    490: function(t, e) {
        if(SCENE_CONFIG.type == 2) {
            t.exports = 'message binary_mesh {\n\trepeated chunk_simple chunk = 1;\n\trepeated chunk_quantized quantized_chunk = 2;\n}\n\n// Definition of vertices: 3D coordinates, and 2D texture coordinates.\nmessage vertices_simple {\n\trepeated float xyz = 1 [packed=true];  // x_0,y_0,z_0, x_1,y_1,z_1, ...\n\trepeated float uv = 2 [packed=true];  // u_0,v_0, u_1,v_1, ...\n}\n\n// Indexes of vertices of faces\nmessage faces_simple {\n\trepeated uint32 faces = 1 [packed=true]; // i00,i01,i02, i10,i11,i12, ...\n}\n\n// A simply encoded chunk.\n// TODO: add chunk properites (such as "reflective")\nmessage chunk_simple {\n\toptional vertices_simple vertices = 1;\n\toptional faces_simple faces = 2;\n\toptional string chunk_name = 3;\n\toptional string material_name = 4;\n}\n\n// Quantized versions follow:\nmessage vertices_quantized {\n\toptional float quantization = 1;\n\trepeated float translation = 2;\n\trepeated sint32 x = 3 [packed=true];\n\trepeated sint32 y = 4 [packed=true];\n\trepeated sint32 z = 5 [packed=true];\n}\n\nmessage uv_quantized {\n\toptional string name = 1;\n\toptional float quantization = 2;\n\trepeated sint32 u = 3 [packed=true];\n\trepeated sint32 v = 4 [packed=true];\n}\n\n// Indexes of vertices of faces\nmessage faces_compressed {\n\trepeated sint32 faces = 1 [packed=true]; // i00,i01,i02, i10,i11,i12, ...\n}\n\nmessage chunk_quantized {\n\toptional string chunk_name = 1;\n\toptional string material_name = 2;\n\toptional vertices_quantized vertices = 3;\n\trepeated uv_quantized uvs = 4;\n\toptional faces_simple faces = 5;\n}\n'
        }
        if(SCENE_CONFIG.type == 0) {
            t.exports = 'message binary_mesh {\n	repeated chunk_simple chunk = 1;\n	repeated chunk_quantized quantized_chunk = 2;\n}\n\n// Definition of vertices: 3D coordinates, and 2D texture coordinates.\nmessage vertices_simple {\n	repeated float xyz = 1 [packed=true];  // x_0,y_0,z_0, x_1,y_1,z_1, ...\n	repeated float uv = 2 [packed=true];  // u_0,v_0, u_1,v_1, ...\n}\n\n// Indexes of vertices of faces\nmessage faces_simple {\n	repeated uint32 faces = 1 [packed=true]; // i00,i01,i02, i10,i11,i12, ...\n}\n\n// A simply encoded chunk.\n// TODO: add chunk properites (such as "reflective")\nmessage chunk_simple {\n	optional vertices_simple vertices = 1;\n	optional faces_simple faces = 2;\n	optional string chunk_name = 3;\n	optional string material_name = 4;\n}\n\n// Quantized versions follow:\nmessage vertices_quantized {\n	optional float quantization = 1;\n	repeated float translation = 2;\n	repeated sint32 x = 3 [packed=true];\n	repeated sint32 y = 4 [packed=true];\n	repeated sint32 z = 5 [packed=true];\n}\n\nmessage uv_quantized {\n	optional string name = 1;\n	optional float quantization = 2;\n	repeated sint32 u = 3 [packed=true];\n	repeated sint32 v = 4 [packed=true];\n}\n\n// Indexes of vertices of faces\nmessage faces_compressed {\n	repeated sint32 faces = 1 [packed=true]; // i00,i01,i02, i10,i11,i12, ...\n}\n\nmessage chunk_quantized {\n	optional string chunk_name = 1;\n	optional string material_name = 2;\n	optional vertices_quantized vertices = 3;\n	repeated uv_quantized uvs = 4;\n	optional faces_simple faces = 5;\n}\n'
        }

        if(SCENE_CONFIG.type == 1) {
            t.exports = `syntax = "proto2";\n\n            message binary_mesh {\n                required string version = 1;\n                repeated block_default block_default = 2;\n                repeated block_model block_model = 3;\n                repeated block_customized block_customized = 4;\n            }\n            \n            message vertices_simple {\n                repeated float uv = 1 [packed=true];\n                repeated float xyz = 2 [packed=true];\n            }\n            \n            message faces_simple {\n                repeated uint32 faces = 1 [packed=true];\n            }\n            \n            message block_model {\n                optional vertices_simple vertices = 1;\n                optional faces_simple faces = 2;\n                optional string block_name = 3;\n                optional string txtname = 4;\n            }\n            \n            message block_default {\n                repeated block_default_unit default_units = 1;\n            }\n            \n            message block_default_unit {\n                required string unit_id = 1;\n                optional vertices_simple vertices = 2;\n                optional faces_simple faces = 3;\n                optional string block_des = 4;\n                optional string txtname = 5;\n            }\n            \n            message block_customized {\n                repeated block_customized_unit customized_units = 1;\n            }\n            \n            message block_customized_unit {\n                required string unit_id = 1;\n                required string related_id = 2;\n                optional vertices_simple vertices = 3;\n                optional faces_simple faces = 4;\n                optional string block_des = 5;\n                optional string txtname = 6;\n            }`
        }

        
    
    
    },
    491: function(t, e) {},
    675: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o, i = n(6), a = n(0), s = n(3), u = n(7), l = n(1), c = n(27), h = n(51), d = n(224), p = n(69), f = n(144), y = n(65), v = n(195), m = n(192), w = n(280), g = n(91), b = n(196), x = (r = Object.setPrototypeOf || {
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
        ), D = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, M = function(t, e) {
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
        }, k = function(t, e) {
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
        }, O = 15, P = 50, S = Math.PI / 2 + Number.EPSILON, F = Math.PI - Number.EPSILON, _ = ((o = {})[i.a.Panorama] = a.l,
        o[i.a.Dollhouse] = a.l,
        o[i.a.Floorplan] = a.l,
        o), T = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.viewmodeData = new p.a,
                e.name = "viewmode",
                e.minDollhouseDistance = O,
                e.maxDollhouseDistance = P,
                e.destinationPoseModifiers = [],
                e
            }
            return x(e, t),
            e.prototype.init = function(t, e) {
                return D(this, void 0, void 0, function() {
                    var n, r, o, i, s, u = this;
                    return M(this, function(l) {
                        switch (l.label) {
                        case 0:
                            return this.engine = e,
                            this.market = e.market,
                            null !== t.startingMode && (this.viewmodeData.currentMode = t.startingMode),
                            this.market.register(this, p.a, this.viewmodeData),
                            e.getModule(a.I).then(function(t) {
                                u.modelMeshModule = t,
                                u.setDollhouseBounds()
                            }),
                            n = this,
                            [4, e.getModule(a.b)];
                        case 1:
                            return n.cameraModule = l.sent(),
                            r = this,
                            [4, e.getModule(a.Z)];
                        case 2:
                            return r.sweepModule = l.sent(),
                            o = this,
                            [4, e.market.waitForData(y.a)];
                        case 3:
                            return o.sweepData = l.sent(),
                            i = this,
                            [4, e.market.waitForData(b.a)];
                        case 4:
                            return i.canvas = l.sent(),
                            s = this,
                            [4, e.market.waitForData(f.a)];
                        case 5:
                            return s.cameraData = l.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.registerDestinationPoseModifier = function(t) {
                this.destinationPoseModifiers.push(t)
            }
            ,
            Object.defineProperty(e.prototype, "currentMode", {
                get: function() {
                    return this.viewmodeData.currentMode
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.canSwitchViewMode = function(t) {
                return this.canStartTransition(this.viewmodeData) && this.cameraModule.canMove() && !this.isAlreadyInMode(this.viewmodeData, t)
            }
            ,
            e.prototype.switchToMode = function(t, e, n, r, o) {
                var s = this;
                if (void 0 === e && (e = a.Ja.FadeToBlack),
                e === a.Ja.Instant && (r = 0),
                r = void 0 !== r ? r : _[t],
                !this.canStartTransition(this.viewmodeData) || !this.cameraModule.canMove())
                    throw new w.a;
                if (this.isAlreadyInMode(this.viewmodeData, t))
                    throw new w.b;
                this.sweepData.currentSweep && this.sweepData.isSweepUnaliged(this.sweepData.currentSweep) && this.viewmodeData.currentMode === i.a.Panorama && (e = a.Ja.FadeToBlack);
                var u = null !== this.viewmodeData.currentMode ? this.viewmodeData.currentMode : void 0;
                this.viewmodeData.activateTransition(this.viewmodeData.currentMode, t, r),
                this.viewmodeData.currentMode = i.a.Transition,
                this.market.update(this, this.viewmodeData),
                this.engine.broadcast(new m.a(t,u));
                var l = this.moveCameraToViewmode(t, e, r, o, n);
                return l.progress(function(t) {
                    var e = t / s.viewmodeData.transition.transitionTime;
                    e = Math.min(Math.max(e, 0), 1),
                    s.viewmodeData.transition.progress = e,
                    s.market.update(s, s.viewmodeData)
                }),
                l.then(function() {
                    s.viewmodeData.transition.progress = 1,
                    s.viewmodeData.currentMode = t,
                    s.viewmodeData.deactivateTransition(),
                    s.market.update(s, s.viewmodeData),
                    s.engine.broadcast(new v.a(t,u))
                }),
                l.nativePromise()
            }
            ,
            e.prototype.getFlyinStartPose = function(t) {
                var e = this.cameraData.pose.position
                  , n = t.position.y - e.y
                  , r = Object(g.h)(t.position, e, this.modelMeshModule.mesh.center)
                  , o = h.a.FORWARD.clone().applyQuaternion(r);
                return {
                    position: Object(g.e)(t.position, e, Math.sign(o.y) * Math.PI / 4, !0).setY(1.5 * n)
                }
            }
            ,
            e.prototype.getFlyinEndPose = function() {
                var t = this.cameraData.pose
                  , e = Math.PI / 180 * d.a.fov;
                return Object(g.c)(t.position, t.rotation, -Math.PI / 6, this.modelMeshModule.mesh.boundingBox, e, this.canvas.aspectRatio)
            }
            ,
            e.prototype.isAlreadyInMode = function(t, e) {
                var n = null !== t.transition.to && void 0 !== t.transition.to
                  , r = t.transition.from === t.transition.to
                  , o = t.currentMode === e;
                return n && r || o
            }
            ,
            e.prototype.canStartTransition = function(t) {
                var e = t.transition.active
                  , n = t.currentMode === i.a.Transition;
                return !e && !n
            }
            ,
            e.prototype.moveCameraToViewmode = function(t, e, n, r, o) {
                switch (t) {
                case i.a.Panorama:
                    return this.moveCameraToPanorama(e, n, r, o);
                case i.a.Dollhouse:
                    return this.moveCameraToDollhouse(e, n, r, o);
                case i.a.Floorplan:
                    return this.moveCameraToFloorplan(e, n, r, o);
                default:
                    throw Error("moveCameraToViewmode(): Invalid view-mode to go to: " + t)
                }
            }
            ,
            e.prototype.moveCameraToPanorama = function(t, e, n, r) {
                if (this.sweepModule.canMoveToSweep()) {
                    var o = void 0;
                    if (r && r.sweepID)
                        o = r.sweepID;
                    else {
                        var u = this.sweepData.getFirstSweep();
                        !(o = this.sweepData.currentSweep) && u && (o = u.id)
                    }
                    if (!o)
                        throw new Error("moveCameraToPanorama(): Invalid target sweep!");
                    this.sweepData.isSweepUnaliged(o) && (t = a.Ja.FadeToBlack);
                    var l = r && r.rotation ? r.rotation : void 0;
                    if (!l) {
                        var c = (this.viewmodeData.transition.from === i.a.Floorplan ? h.a.UP : h.a.FORWARD).clone().applyQuaternion(this.cameraData.pose.rotation).setY(0).normalize();
                        l = (new s.a).setFromUnitVectors(h.a.FORWARD, c)
                    }
                    return this.sweepModule.moveToSweep({
                        transitionType: t,
                        sweepId: o,
                        rotation: l,
                        transitionTime: e,
                        minimumTimeOverride: n,
                        maximumTimeOverride: !0
                    })
                }
                throw new Error("Could not move to panorama mode because another transition was active")
            }
            ,
            e.prototype.moveCameraToDollhouse = function(t, e, n, r) {
                var o, a, s, u, p, f, y, v = this.modelMeshModule.mesh.boundingBox, m = {};
                if (r && (r.position || r.rotation)) {
                    if (r.position && r.rotation) {
                        m.position = r.position,
                        m.rotation = r.rotation;
                        var w = new c.a(h.a.UP.clone(),this.modelMeshModule.mesh.center.y)
                          , b = Object(g.d)(this.cameraData.pose.position, this.cameraData.pose.rotation, w);
                        b && v.containsPoint(b) && (o = this.cameraData.pose.position.distanceTo(b))
                    } else if (r.position)
                        m.position = r.position,
                        m.rotation = Object(g.f)(r.position, this.modelMeshModule.mesh.center);
                    else {
                        m.rotation = r.rotation;
                        var x = v.min.distanceTo(v.max);
                        m.position = Object(g.g)(m.rotation, this.modelMeshModule.mesh.center, x)
                    }
                    o || (o = this.modelMeshModule.mesh.center.clone().distanceTo(m.position))
                } else {
                    var D = void 0
                      , M = void 0
                      , O = void 0
                      , P = this.sweepData.currentSweep && this.sweepData.isSweepUnaliged(this.sweepData.currentSweep)
                      , _ = P || this.viewmodeData.transition.from === i.a.Floorplan ? this.modelMeshModule.mesh.center : this.cameraData.pose.position;
                    if (P)
                        O = new l.a(0,0,0),
                        D = new l.a(15,10,15);
                    else if (this.viewmodeData.transition.from !== i.a.Floorplan) {
                        var T = (a = _,
                        s = this.cameraData.pose.rotation,
                        u = a.clone().add(new l.a(0,6,0)),
                        (p = h.a.FORWARD.clone().applyQuaternion(s)).y >= .01 && (p.y = .01),
                        {
                            position: u.clone().add(p.clone().multiplyScalar(-10)),
                            direction: p
                        });
                        D = (f = k([T.position, T.direction], 2))[0],
                        O = f[1]
                    } else {
                        T = function(t, e) {
                            var n = t.clone()
                              , r = h.a.DOWN.clone().applyQuaternion(e).multiplyScalar(6)
                              , o = n.clone().add(r).setY(6)
                              , i = h.a.UP.clone().applyQuaternion(e);
                            return i.setY(-.5).normalize(),
                            {
                                position: o,
                                direction: i
                            }
                        }(_, this.cameraData.pose.rotation);
                        D = (y = k([T.position, T.direction], 2))[0],
                        O = y[1]
                    }
                    M = _.clone().add(O).setY(this.modelMeshModule.mesh.center.y),
                    m.position = Object(g.a)(D, M, this.minDollhouseDistance, this.maxDollhouseDistance),
                    m.position = Object(g.b)(m.position, M, S, F),
                    m.rotation = Object(g.f)(m.position, M),
                    o = M.distanceTo(m.position)
                }
                return this.cameraModule.moveTo({
                    transitionType: t,
                    pose: m,
                    transitionTime: e,
                    projection: Object(d.d)(this.cameraData.aspect()),
                    focalDistance: o,
                    minimumTimeOverride: n,
                    maximumTimeOverride: !0
                })
            }
            ,
            e.prototype.setDollhouseBounds = function() {
                var t = this.modelMeshModule.mesh.boundingBox
                  , e = t.min.distanceTo(t.max);
                this.minDollhouseDistance = Math.min(e / 2, this.minDollhouseDistance),
                this.maxDollhouseDistance = Math.max(e, this.maxDollhouseDistance)
            }
            ,
            e.prototype.moveCameraToFloorplan = function(t, e, n, r) {
                var o = {}
                  , i = this.modelMeshModule.mesh.center
                  , a = this.modelMeshModule.mesh.boundingBox.getSize()
                  , l = Math.max(a.x, a.z)
                  , c = Math.min(a.x, a.z)
                  , p = this.canvas.aspectRatio
                  , f = Math.max(l, c / p)
                  , y = Math.max(c, l / p)
                  , v = p < 1 ? f : y
                  , m = this.canvas.height / (1.2 * v);
                o.zoom = r && r.zoom ? r.zoom : m;
                var w = Object(d.c)(this.canvas.height, this.canvas.width, m);
                if (r && r.position)
                    o.position = r.position;
                else {
                    var g = h.a.UP.clone().multiplyScalar(l);
                    o.position = i.clone().add(g)
                }
                if (r && r.rotation)
                    o.rotation = r.rotation;
                else {
                    var b = (new u.a).setPosition(o.position);
                    if (b.lookAt(o.position, i, h.a.FORWARD),
                    o.rotation = (new s.a).setFromRotationMatrix(b),
                    p < 1 !== a.x / a.z < 1) {
                        var x = (new s.a).setFromUnitVectors(h.a.UP, h.a.LEFT);
                        o.rotation.multiply(x)
                    }
                }
                return this.cameraModule.moveTo({
                    transitionType: t,
                    pose: o,
                    transitionTime: e,
                    projection: w,
                    minimumTimeOverride: n,
                    maximumTimeOverride: !0
                })
            }
            ,
            e
        }(a.Na);
        e.default = T
    },
    691: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(42), i = n(1), a = n(46), s = n(150), u = n(220), l = n(14), c = function(t) {
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
        }, h = function() {
            function t(t, e) {
                this.floorIndex = t,
                this.allColliders = [],
                this.colliderGroupNames = [],
                this.meshGroups = [],
                this.name = e || this.floorIndex + "",
                this.hidden = !1,
                this.conservativeBoundingBox = new o.a,
                this.boundingBox = new o.a,
                this.debugColor = 16777215 * Math.random(),
                this.sweeps = new u.a(function(t) {
                    return t.id
                }
                )
            }
            return t.prototype.addMeshGroup = function(t, e, n) {
                this.meshGroups.push(t),
                this.colliderGroupNames.push(n),
                this.allColliders.push.apply(this.allColliders, e);
                try {
                    for (var r = c(t.chunks), o = r.next(); !o.done; o = r.next()) {
                        var i = o.value;
                        i.renderOrder = s.a.ghostFloor,
                        this.boundingBox.union(i.geometry.boundingBox),
                        this.size = this.boundingBox.getSize()
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (u = r.return) && u.call(r)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                var a, u
            }
            ,
            t.prototype.build = function() {
                this.center = this.boundingBox.getCenter(),
                this.conservativeBoundingBox.copy(this.boundingBox);
                try {
                    for (var t = c(this.allColliders), e = t.next(); !e.done; e = t.next()) {
                        var n = e.value;
                        this.conservativeBoundingBox.min.y = a.g(n.children.map(function(t) {
                            return t.geometry.boundingBox.min.y
                        }), 20),
                        this.conservativeBoundingBox.max.y = a.g(n.children.map(function(t) {
                            return t.geometry.boundingBox.max.y
                        }), 20)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        e && !e.done && (o = t.return) && o.call(t)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                var r, o
            }
            ,
            t.prototype.distanceToPoint = function(t) {
                var e, n, r = null, o = 1 / 0;
                try {
                    for (var i = c(this.allColliders), a = i.next(); !a.done; a = i.next()) {
                        a.value.children.forEach(function(e) {
                            e.geometry.boundingBox || e.geometry.computeBoundingBox();
                            var n = e.geometry.boundingBox.distanceToPoint(t);
                            (!r || o > n) && (o = n,
                            r = e)
                        })
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (n = i.return) && n.call(i)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return o
            }
            ,
            t.prototype.addSweep = function(t) {
                this.sweeps.add(t)
            }
            ,
            t.prototype.getSweepClosestToPoint = function(t) {
                var e, n, r = null, o = 0, a = new i.a;
                try {
                    for (var s = c(this.sweeps.getReadonlyList()), u = s.next(); !u.done; u = s.next()) {
                        var h = u.value;
                        if (h.alignmentType !== l.a.UNALIGNED) {
                            a.copy(h.position).sub(t);
                            var d = a.length();
                            (!r || d < o) && (r = h,
                            o = d)
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (n = s.return) && n.call(s)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return r
            }
            ,
            t.prototype.getColliderGroupNames = function() {
                return this.colliderGroupNames
            }
            ,
            t
        }(), d = (r = Object.setPrototypeOf || {
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
        ), p = function(t) {
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
        }, f = function(t) {
            function e(e, n, r, o) {
                void 0 === o && (o = {});
                var i = t.call(this, function(t) {
                    return t.floorIndex
                }) || this;
                return i.sweeps = e,
                i.modelMesh = n,
                i.modelCollider = r,
                i.workshopNames = o,
                i.sweepFloorMap = {},
                i.groupIndexToFloorIndex = {},
                i
            }
            return d(e, t),
            e.prototype.add = function(e) {
                return t.prototype.add.call(this, e)
            }
            ,
            e.prototype.getIndex = function(t) {
                return t.floorIndex
            }
            ,
            e.prototype.getTopFloor = function() {
                var t, e, n = null;
                try {
                    for (var r = p(this.list), o = r.next(); !o.done; o = r.next()) {
                        var i = o.value;
                        (!n || i.floorIndex > n) && (n = i.floorIndex)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (e = r.return) && e.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return n ? this.map[n] : null
            }
            ,
            e.prototype.getFloorForSweep = function(t) {
                return this.sweepFloorMap[t] || null
            }
            ,
            e.prototype.build = function() {
                var t, e, n, r, o = this;
                try {
                    for (var i = p(this.modelMesh.groups.getReadonlyList()), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value
                          , u = this.workshopNames[s.groupIndex] || s.groupIndex + ""
                          , l = new h(s.groupIndex,u)
                          , c = []
                          , d = this.modelCollider.getReadonlyColliderListForGroup(s.groupIndex);
                        if (d)
                            try {
                                for (var f = p(d), y = f.next(); !y.done; y = f.next()) {
                                    var v = y.value;
                                    c.push(v)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    y && !y.done && (r = f.return) && r.call(f)
                                } finally {
                                    if (n)
                                        throw n.error
                                }
                            }
                        l.addMeshGroup(s, c, this.modelCollider.getGroupName(s.groupIndex)),
                        this.add(l),
                        this.groupIndexToFloorIndex[s.groupIndex] = this.count() - 1
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (e = i.return) && e.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return this.list.forEach(function(t) {
                    t.build()
                }),
                this.sweeps.forEach(function(t) {
                    var e = null
                      , n = t.floor;
                    n >= 0 && (n = o.groupIndexToFloorIndex[n],
                    e = o.getByIndex(n) || null),
                    e || (e = o.getFloorAtPoint(t.position)),
                    e && (e.addSweep(t),
                    o.sweepFloorMap[t.id] = e)
                }),
                this
            }
            ,
            e.prototype.size = function() {
                return this.count()
            }
            ,
            e.prototype.sort = function() {
                this.sortWith(function(t, e) {
                    return t.floorIndex - e.floorIndex
                })
            }
            ,
            e.prototype.sortWith = function(t) {
                return this.list.sort(t)
            }
            ,
            e.prototype.nextFloor = function(t, e) {
                return this.map[t.floorIndex + e] || null
            }
            ,
            e.prototype.getFloorAtPoint = function(t) {
                var e, n, r = null, o = 1 / 0;
                try {
                    for (var i = p(this.list), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value
                          , u = s.distanceToPoint(t);
                        (!r || o > u) && (o = u,
                        r = s)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (n = i.return) && n.call(i)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return r
            }
            ,
            e.prototype.names = function() {
                return this.list.map(function(t) {
                    return t.name
                })
            }
            ,
            e
        }(u.a), y = n(108), v = n(109), m = n(9), w = n(6), g = function(t) {
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
        }, b = function() {
            function t(t, e, n) {
                this.floorsData = t,
                this.viewmodeData = e,
                this.floors = n,
                this.floorHidden = {},
                this.resetVisibility()
            }
            return t.prototype.resetVisibility = function() {
                if (this.floors)
                    try {
                        for (var t = g(this.floors), e = t.next(); !e.done; e = t.next()) {
                            var n = e.value;
                            this.showFloor(n)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            e && !e.done && (o = t.return) && o.call(t)
                        } finally {
                            if (r)
                                throw r.error
                        }
                    }
                var r, o;
                this.floorHidden = {}
            }
            ,
            t.prototype.isHidden = function(t) {
                return !!this.floorHidden[t.floorIndex]
            }
            ,
            t.prototype.setHidden = function(t, e) {
                this.floorHidden[t.floorIndex] = e
            }
            ,
            t.prototype.init = function() {}
            ,
            t.prototype.dispose = function() {
                this.deactivate()
            }
            ,
            t.prototype.activate = function() {}
            ,
            t.prototype.deactivate = function() {
                this.resetVisibility()
            }
            ,
            t.prototype.render = function() {
                var t, e;
                if (this.floors && (this.viewmodeData && this.floorsData)) {
                    var n = this.getMaxGhosting(this.viewmodeData);
                    try {
                        for (var r = g(this.floors), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value
                              , a = this.getFloorGhosting(i, this.floorsData, .1, 1);
                            a = 1 - n + n * a,
                            this.setFloorVisibility(i, a)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (e = r.return) && e.call(r)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                }
            }
            ,
            t.prototype.setFloorVisibility = function(t, e) {
                try {
                    for (var n = g(t.meshGroups), r = n.next(); !r.done; r = n.next()) {
                        var o = r.value;
                        try {
                            for (var i = g(o.chunks), a = i.next(); !a.done; a = i.next()) {
                                var u = a.value
                                  , l = e > .1 ? s.a.visibleFloor : s.a.ghostFloor;
                                u.setMaterialOpacity(e, l)
                            }
                        } catch (t) {
                            d = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (p = i.return) && p.call(i)
                            } finally {
                                if (d)
                                    throw d.error
                            }
                        }
                    }
                } catch (t) {
                    c = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (h = n.return) && h.call(n)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                switch (e) {
                case .1:
                    this.setHidden(t, !0);
                    break;
                case 1:
                    this.setHidden(t, !1)
                }
                var c, h, d, p
            }
            ,
            t.prototype.showFloor = function(t) {
                if (this.isHidden(t)) {
                    try {
                        for (var e = g(t.meshGroups), n = e.next(); !n.done; n = e.next()) {
                            var r = n.value;
                            try {
                                for (var o = g(r.chunks), i = o.next(); !i.done; i = o.next()) {
                                    i.value.setMaterialOpacity(1, s.a.visibleFloor)
                                }
                            } catch (t) {
                                l = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (c = o.return) && c.call(o)
                                } finally {
                                    if (l)
                                        throw l.error
                                }
                            }
                        }
                    } catch (t) {
                        a = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (u = e.return) && u.call(e)
                        } finally {
                            if (a)
                                throw a.error
                        }
                    }
                    var a, u, l, c;
                    this.setHidden(t, !1)
                }
            }
            ,
            t.prototype.getMaxGhosting = function(t) {
                switch (t.currentMode) {
                case w.a.Transition:
                    return t.transition.from === w.a.Panorama ? m.d(2 * t.transition.progress - 1, 0, 1) : t.transition.to === w.a.Panorama ? 1 - m.d(2 * t.transition.progress, 0, 1) : 1;
                case w.a.Panorama:
                    return 0;
                case w.a.Floorplan:
                case w.a.Dollhouse:
                    return 1
                }
                return 1
            }
            ,
            t.prototype.getFloorGhosting = function(t, e, n, r) {
                if (e.transition.progress.active) {
                    var o = e.transition;
                    if (-1 === o.to)
                        return t.floorIndex === o.from ? r : e.transition.progress.value * (r - n) + n;
                    if (-1 === o.from)
                        return t.floorIndex === o.to ? r : (1 - e.transition.progress.value) * (r - n) + n;
                    if (t.floorIndex === o.to || t.floorIndex === o.from || e.currentFloor < 0) {
                        var i = e.transition.progress.value
                          , a = m.d(1 - 2 * i, 0, 2)
                          , s = m.d(2 * i - 1, 0, 1);
                        return (t.floorIndex === e.transition.to ? s : a) * (r - n) + n
                    }
                    return n
                }
                var u = e.currentFloor;
                return u < 0 || t.floorIndex === u ? r : n
            }
            ,
            t
        }(), x = n(0), D = n(65), M = n(144), k = n(69), O = n(199), P = n(149), S = n(204), F = n(195), _ = n(12), T = n(51), I = function() {
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
        }(), R = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, C = function(t, e) {
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
        }, E = function(t) {
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
        }, A = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "floors",
                e.FLOOR_TRANSITION_TIME = 500,
                e.FLOOR_VIEW_Y_OFFSET = 8,
                e
            }
            return I(e, t),
            e.prototype.init = function(t, e) {
                return R(this, void 0, void 0, function() {
                    var t, n, r, o, i, a, s, u, l, c, h, d, p = this;
                    return C(this, function(f) {
                        switch (f.label) {
                        case 0:
                            return this.engine = e,
                            this.market = e.market,
                            [4, e.getModule(x.H)];
                        case 1:
                            return t = f.sent(),
                            [4, e.getModule(x.I)];
                        case 2:
                            return n = f.sent(),
                            r = n.mesh,
                            o = n.collider,
                            i = this,
                            [4, e.getModule(x.Z)];
                        case 3:
                            return i.sweepModule = f.sent(),
                            [4, e.market.waitForData(D.a)];
                        case 4:
                            return a = f.sent(),
                            s = this.buildFloors(t.getModel(), a.getSweepList(), r, o),
                            this.data = new P.a(s,s.mapElements(function(t) {
                                return t.name
                            })),
                            this.market.register(this, P.a, this.data),
                            u = this,
                            [4, e.getModule(x.b)];
                        case 5:
                            return u.cameraModule = f.sent(),
                            l = this,
                            [4, e.market.waitForData(M.a)];
                        case 6:
                            return l.cameraData = f.sent(),
                            c = this,
                            [4, e.getModule(x.Na)];
                        case 7:
                            return c.viewmodeModule = f.sent(),
                            h = this,
                            [4, e.market.waitForData(k.a)];
                        case 8:
                            return h.viewmodeData = f.sent(),
                            this.viewmodeModule.registerDestinationPoseModifier(this.modeSwitchPoseModifier.bind(this)),
                            [4, e.getModule(x.R)];
                        case 9:
                            return d = f.sent(),
                            this.raycaster = d.getRaycaster(),
                            this.floorsRenderer = new b(this.data,this.viewmodeData,this.data.floors),
                            e.addComponent(this, this.floorsRenderer),
                            this.registerKeys(e),
                            e.subscribe(S.a, function(t) {
                                var e = p.getFloorForSweep(t.toSweep);
                                e && p.updateCurrentFloor(e.floorIndex)
                            }),
                            e.subscribe(F.a, function(t) {
                                p.updateRaycastEnabledFloors()
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.registerKeys = function(t) {
                return R(this, void 0, void 0, function() {
                    var e, n = this;
                    return C(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, t.getModule(x.v)];
                        case 1:
                            return (e = r.sent()).registerKeyUp(O.a.R, function() {
                                return n.moveFloorUp()
                            }),
                            e.registerKeyUp(O.a.F, function() {
                                return n.moveFloorDown()
                            }),
                            e.registerKeyUp(O.a.Y, function() {
                                return n.moveToFloor(-1)
                            }),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.moveFloorUp = function(t, e) {
                void 0 === t && (t = !1);
                var n = Math.min(this.data.totalFloors, this.data.currentFloor + 1);
                return this.moveToFloor(n, t, e)
            }
            ,
            e.prototype.moveFloorDown = function(t, e) {
                void 0 === t && (t = !1);
                var n = Math.max(0, this.data.currentFloor - 1);
                return this.moveToFloor(n, t, e)
            }
            ,
            e.prototype.moveToFloor = function(t, e, n) {
                void 0 === e && (e = !1);
                var r = this.data.currentFloor === t
                  , o = 1 === this.data.totalFloors && -1 === t;
                if (r || o)
                    return this.updateCurrentFloor(t),
                    _.a.resolve();
                if (this.canMoveToFloor(t, e)) {
                    this.engine.broadcast(new y.a(this.data.currentFloor,t)),
                    void 0 === n && (n = this.FLOOR_TRANSITION_TIME);
                    var i = this.data.transition.progress;
                    i.modifyAnimation(0, 1, n),
                    this.data.transition = {
                        from: this.data.currentFloor,
                        to: t,
                        progress: i
                    },
                    this.market.update(this, this.data);
                    var a = new _.a
                      , s = void 0;
                    s = e ? _.a.resolve() : this.getCameraTransition(t, n);
                    var u = function() {
                        var t, e, n;
                        return C(this, function(r) {
                            switch (r.label) {
                            case 0:
                                t = Date.now(),
                                r.label = 1;
                            case 1:
                                return this.data.transition.progress.active ? [4, null] : [3, 3];
                            case 2:
                                return r.sent(),
                                e = Date.now(),
                                n = e - t,
                                this.data.transition.progress.update(n),
                                t = e,
                                this.market.update(this, this.data),
                                [3, 1];
                            case 3:
                                return this.updateCurrentFloor(this.data.transition.to),
                                a.resolve(),
                                [2]
                            }
                        })
                    }
                    .bind(this)
                      , l = _.a.all([a, s]);
                    return this.engine.startGenerator(u),
                    l
                }
                return _.a.reject("Cannot transition floors")
            }
            ,
            e.prototype.onUpdate = function(t) {}
            ,
            e.prototype.getData = function(t) {
                return void 0 === t && (t = !0),
                t ? Object.freeze(this.data.clone()) : this.data
            }
            ,
            e.prototype.getFloorForSweep = function(t) {
                return this.data.floors.getFloorForSweep(t)
            }
            ,
            e.prototype.canMoveToFloor = function(t, e) {
                var n = this.data.transition.progress.active
                  , r = this.cameraModule.canMove() || e
                  , o = t <= this.data.totalFloors - 1;
                return !n && r && o && t >= -1
            }
            ,
            e.prototype.getFloorMin = function() {
                var t = this.data.floors.getByIndex(Math.max(this.data.currentFloor, 0));
                return t ? t.boundingBox.min.y : 0
            }
            ,
            e.prototype.getFloorMins = function() {
                for (var t = [], e = 0; e < this.data.floors.count(); e += 1) {
                    var n = this.data.floors.getByIndex(e);
                    t.push(n.boundingBox.min.y)
                }
                return t
            }
            ,
            e.prototype.updateCurrentFloor = function(t) {
                this.data.currentFloor !== t && (this.data.currentFloor = t,
                this.market.update(this, this.data),
                this.engine.broadcast(new v.a(t,this.data.floorNames[t])),
                this.updateRaycastEnabledFloors())
            }
            ,
            e.prototype.updateRaycastEnabledFloors = function() {
                var t, e, n, r, o = this.data.currentFloor;
                try {
                    for (var i = E(this.data.floors), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value;
                        try {
                            for (var u = E(s.getColliderGroupNames()), l = u.next(); !l.done; l = u.next()) {
                                var c = l.value;
                                this.raycaster.enableForGroup(c, -1 === o || o === s.floorIndex || this.viewmodeData.currentMode === w.a.Panorama)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (r = u.return) && r.call(u)
                            } finally {
                                if (n)
                                    throw n.error
                            }
                        }
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (e = i.return) && e.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            }
            ,
            e.prototype.buildFloors = function(t, e, n, r) {
                var o = {};
                t.data.floors && -1 !== t.data.floors.indexOf(",") && t.data.floors.split(",").forEach(function(t, e) {
                    o[e] = t.trim()
                });
                var i = new f(e,n,r,o).build();
                return i.sort(),
                i
            }
            ,
            e.prototype.getModelHeight = function() {
                if (this.data.floors) {
                    var t = 0;
                    try {
                        for (var e = E(this.data.floors), n = e.next(); !n.done; n = e.next()) {
                            var r = n.value;
                            t += r.boundingBox.max.y - r.boundingBox.min.y
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
                    return t
                }
                return 0;
                var o, i
            }
            ,
            e.prototype.getCameraTransition = function(t, e) {
                var n = this.getCameraOptionsForFloor(t, this.cameraData.pose.position.x, this.cameraData.pose.position.z, this.cameraData.pose.rotation);
                if (this.viewmodeData.currentMode === w.a.Dollhouse || this.viewmodeData.currentMode === w.a.Floorplan)
                    return this.cameraModule.moveTo({
                        transitionType: x.Ja.Interpolate,
                        pose: n.pose,
                        focalDistance: n.focalDistance,
                        transitionTime: e
                    });
                if (this.viewmodeData.currentMode === w.a.Panorama) {
                    var r = this.data.floors.getByIndex(t);
                    if (r) {
                        var o = r.getSweepClosestToPoint(this.cameraData.pose.position);
                        if (o && this.sweepModule.canMoveToSweep())
                            return this.sweepModule.moveToSweep({
                                transitionType: x.Ja.Interpolate,
                                sweepId: o.id,
                                transitionTime: e
                            })
                    }
                }
                return _.a.resolve()
            }
            ,
            e.prototype.calculateFloorCameraOffsets = function(t) {
                if (!t && this.data.floors && (t = this.data.floors.getTopFloor() || void 0),
                t)
                    return {
                        minimum: t.center.y,
                        focalDistance: t.size.y / 2 + this.FLOOR_VIEW_Y_OFFSET
                    };
                var e = this.getModelHeight();
                return {
                    minimum: e / 2,
                    focalDistance: e / 2 + this.FLOOR_VIEW_Y_OFFSET
                }
            }
            ,
            e.prototype.getCameraOptionsForFloor = function(t, e, n, r) {
                var o = t >= 0 ? this.data.floors.getByIndex(t) : void 0
                  , a = T.a.FORWARD.clone().applyQuaternion(r)
                  , s = this.calculateFloorCameraOffsets(o);
                return s.minimum += s.focalDistance * -a.y,
                {
                    pose: {
                        position: new i.a(e,s.minimum,n),
                        rotation: r
                    },
                    focalDistance: s.focalDistance
                }
            }
            ,
            e.prototype.modeSwitchPoseModifier = function(t, e) {
                if (t.position && t.rotation && this.data.currentFloor >= 0) {
                    var n = this.getCameraOptionsForFloor(this.data.currentFloor, t.position.x, t.position.z, t.rotation);
                    n.pose.position && n.pose.rotation && (t.position.copy(n.pose.position),
                    t.rotation.copy(n.pose.rotation))
                }
            }
            ,
            e
        }(x.q);
        e.default = A
    },
    702: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(494), 
        a = n(7), s = n(146), u = n(26), 
        l = n(87), c = n(4), h = n(145), 
        d = n(147), p = n(106), f = n(25), y = n(331), 
        v = n(330), m = n(6), w = n(75), 
        class43 = n(43),
        g = (r = Object.setPrototypeOf || {
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
        ), b = function(t) {
            function e(e) {
                var n = t.call(this, e.geometry, e.material) || this;
                n.materialInside = new y.a({
                    side: f.D
                });
                var r = p.a.clone(v.a.modelOutside.uniforms);
                return n.materialOutside = new d.a({
                    fragmentShader: v.a.modelOutside.fragmentShader,
                    vertexShader: v.a.modelOutside.vertexShader,
                    uniforms: r,
                    side: f.D,
                    name: "chunkOut"
                }),
                n.name = e.name || "",
                n.textureName = e.textureName || "",
                n.meshUrl = e.meshUrl || "",
                n.texture = null,
                n
            }
            return g(e, t),
            e.prototype.setMeshTexture = function(t) {
                this.texture = t,
                this.materialInside.uniforms.map.value = t,
                this.materialOutside.uniforms.map.value = t
            }
            ,
            e.prototype.clone = function(t) {
                return new this.constructor(this).copy(this, t)
            }
            ,
            e.prototype.activateOutsideMaterial = function() {
                this.material = this.materialOutside
            }
            ,
            e.prototype.activateInsideMaterial = function() {
                this.material = this.materialInside
            }
            ,
            e.prototype.activateFrontSideRendering = function() {
                this.material.side = f.D
            }
            ,
            e.prototype.activateDoubleSidedRendering = function() {
                this.material.side = f.u
            }
            ,
            e.prototype.setMaterialOpacity = function(t, e) {
                this.materialOutside.uniforms.opacity.value = t,
                this.materialInside.uniforms.opacity.value = t,
                this.renderOrder = e,
                1 !== t ? (this.materialOutside.transparent = !0,
                this.materialInside.transparent = !0) : (this.materialOutside.transparent = !1,
                this.materialInside.transparent = !1)
            }
            ,
            e.prototype.updateMaterialUniformsFromState = function(t, e, n) {
                var r = t.opacity;
                if (e.transition.active && (r = this.getMeshOpacityForTransition(e.transition.from, e.transition.to, e.transition.progress, r)),
                this.material instanceof y.a) {
                    var o = this.material.uniforms;
                    o.progress.value = n.transition.progress.value,
                    o.meshOpacity.value = r
                }
                this.materialOutside.uniforms.blackRatio.value = n.transition.blackoutProgress.value,
                this.materialInside.uniforms.blackRatio.value = n.transition.blackoutProgress.value
            }
            ,
            e.prototype.getBoundingBox = function() {
                return this.geometry.boundingBox
            }
            ,
            e.prototype.getMeshOpacityForTransition = function(t, e, n, r) {
                var o = r;
                if (e === m.a.Panorama || t === m.a.Panorama) {
                    var i = t === m.a.Panorama ? r : 1
                      , a = e === m.a.Panorama ? r : 1
                      , s = (e === m.a.Panorama ? w.a : w.c)(n, 0, 1, 1);
                    o = (1 - s) * i + s * a
                } else
                    o = 1;
                return o
            }
            ,
            e
        }(h.a), x = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, D = function(t, e) {
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
        }, M = new c.a("loader"), k = function() {
            function t() {
                var t = n(490)
                  , e = i.loadProto(t);
                this.decoder = e.build("binary_mesh")
            }
            return t.prototype.load = function(t, e, n ,objRotate) {
                return x(this, void 0, void 0, function() {
                    var r;
                    return D(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return M.time("download"),
                            [4, e.getFile(t, {
                                responseType: "arraybuffer",
                                onProgress: n
                            })];
                        case 1:
                            return r = o.sent(),
                            M.timeEnd("download"),
                            [2, this.parse(r, t, objRotate)]
                        }
                    })
                })
            }
            ,
            t.prototype.parse = function(t, e , objRotate) {
                M.time("parse proto");
                var n = this.decoder.decode(t);
                M.timeEnd("parse proto"),
                M.time("convert to webgl");
                var r = this.convertProtobufToSceneObject(n, e ,objRotate);
                return M.timeEnd("convert to webgl"),
                r
            }
            ,
            t.prototype.convertProtobufToSceneObject = function(t, e,objRotate) {
                if(SCENE_CONFIG.type == 0) {
                    if (0 === t.chunk.length)
                    return M.warn("No chunks in damfile..."),
                    [];
                    var n = new a.a;

                    n.set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);


                    var rotateMatrix = new a.a;
                    var euler = new class43.a(objRotate.rotation.x* Math.PI / 180, 
                        objRotate.rotation.y* Math.PI / 180, 
                        objRotate.rotation.z* Math.PI / 180,  'XYZ')
                    rotateMatrix = rotateMatrix.makeRotationFromEuler(euler);
                    n = n.multiply(rotateMatrix );


                    var r = new s.a({
                        wireframe: !0
                    });
                    return t.chunk.map(function(t) {
                        var o = new l.a;
                        return o.addAttribute("position", new u.a(new Float32Array(t.vertices.xyz,0,3),3)),
                        t.vertices.uv.length > 0 && o.addAttribute("uv", new u.a(new Float32Array(t.vertices.uv,0,2),2)),
                        o.setIndex(new u.a(new Uint32Array(t.faces.faces,0,1),1)),
                        o.applyMatrix(n),
                        o.computeBoundingBox(),
                        new b({
                            geometry: o,
                            material: r,
                            name: t.chunk_name,
                            textureName: t.material_name,
                            meshUrl: e
                        })
                    })
                } else if(SCENE_CONFIG.type == 1) {
                    if (0 === t.block_model.length)
                    return M.warn("No chunks in damfile..."),
                    [];
                    var n = new a.a;

                    n.set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
//https://modelcdn2.3dnest.cn/zq_wlq_116/2018-07-18-14-39-40/texture_high/texture0000.jpg
                    var r = new s.a({
                        wireframe: !0
                    });
                    return t.block_model.map(function(t) {
                        var o = new l.a;
                        return o.addAttribute("position", new u.a(new Float32Array(t.vertices.xyz,0,3),3)),
                        t.vertices.uv.length > 0 && o.addAttribute("uv", new u.a(new Float32Array(t.vertices.uv,0,2),2)),
                        o.setIndex(new u.a(new Uint32Array(t.faces.faces,0,1),1)),
                        o.applyMatrix(n),
                        o.computeBoundingBox(),
                        new b({
                            geometry: o,
                            material: r,
                            name: t.block_name,
                            textureName: t.txtname,
                            meshUrl: e
                        })
                    })
                } else if(SCENE_CONFIG.type == 2) {
                    if (0 === t.chunk.length)
                    return M.warn("No chunks in damfile..."),
                    [];
                    var n = new a.a;

                    n.set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);




                    var r = new s.a({
                        wireframe: !0
                    });
                    return t.chunk.map(function(t) {
                        var o = new l.a;
                        return o.addAttribute("position", new u.a(new Float32Array(t.vertices.xyz,0,3),3)),
                        t.vertices.uv.length > 0 && o.addAttribute("uv", new u.a(new Float32Array(t.vertices.uv,0,2),2)),
                        o.setIndex(new u.a(new Uint32Array(t.faces.faces,0,1),1)),
                        o.applyMatrix(n),
                        o.computeBoundingBox(),
                        new b({
                            geometry: o,
                            material: r,
                            name: t.chunk_name,
                            textureName: t.material_name,
                            meshUrl: e
                        })
                    })
                } 

                
            }
            ,
            t
        }();
        var class18 = n(18);
        var O = {
            load: function(t, e, n, r, modelData) {
                var o = this;
                void 0 === r && (r = 0);
                var i = [{
                    suffix: "_50k",
                    extension: ".dam",
                    cls: k
                }, {
                    suffix: "",
                    extension: ".dam",
                    cls: k
                }][r];
                if (!i)
                    return Promise.reject("No suitable model file found...");
                var a = i.suffix
                  , s = i.extension
                  , u = new (0,
                i.cls)
                  , l = t + a + s;

                if(SCENE_CONFIG.type == 0) {
                    if(undefined != window.IMAGE_SERVER && IMAGE_SERVER != "") {
                        l = IMAGE_SERVER + modelData.data.start_obj.file;
                        // this.modelDataPath = "/vision.dam";
                    }
    
                    if(class18.j()) {
                        l = IMAGE_SERVER + modelData.data.start_obj.file_mobile;
                        if(undefined == modelData.data.start_obj.file_mobile) {
                            //没有模型文件
                            return Promise.resolve([]);
                        }
                    } else {
                        if(undefined == modelData.data.start_obj.file) {
                            //没有模型文件
                            return Promise.resolve([]);
                        }
                    }
                }  else {
                    if(SCENE_CONFIG.type == 1) {
                        l = "https://modelcdn2.3dnest.cn/"+SCENE_CONFIG.sid+"/"+SCENE_CONFIG.version+"/model.nest"
                    }
                }

                

                return u.load(l, e, n, modelData? modelData.data? modelData.data.start_obj:null:null).catch(function() {
                    return o.load(t, e, n, ++r)
                })
            }
        }
          , P = n(42)
          , S = n(66)
          , F = n(1)
          , _ = n(148)
          , T = n(220)
          , I = n(73)
          , R = n(47)
          , C = function() {
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
        }()
          , E = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return C(e, t),
            e
        }(R.a)
          , A = function() {
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
        }()
          , N = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }
          , B = function(t, e) {
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
        }
          , U = function(t) {
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
        }
          , L = new c.a("mesh")
          , j = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.groupIndex = e,
                n.chunks = [],
                n
            }
            return A(e, t),
            e.prototype.add = function(e) {
                t.prototype.add.call(this, e),
                e instanceof b && this.chunks.push(e)
            }
            ,
            e
        }(S.a)
          , G = function(t) {
            function e(e, n, r,data) {
                void 0 === r && (r = I.a.ALL);
                var o = t.call(this) || this;
                 o.groups = new T.a(function(t) {
                    return t.groupIndex
                }
                ),
                o.modelData = data;
                o.uuid = e,
                o.signedUrls = n,
                o.boundingBox = new P.a,
                o.size = new F.a,
                o.center = new F.a,
                o.layers.mask = r.mask;
                return o
            }
            return A(e, t),
            e.prototype.dispose = function() {
                try {
                    for (var t = U(this.groups.getReadonlyList()), e = t.next(); !e.done; e = t.next()) {
                        var n = e.value;
                        try {
                            for (var r = U(n.chunks), o = r.next(); !o.done; o = r.next()) {
                                o.value.geometry.dispose()
                            }
                        } catch (t) {
                            s = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (u = r.return) && u.call(r)
                            } finally {
                                if (s)
                                    throw s.error
                            }
                        }
                        n.chunks = []
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        e && !e.done && (a = t.return) && a.call(t)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                var i, a, s, u;
                this.children = [],
                this.groups.clear()
            }
            ,
            e.prototype.load = function(t) {
                return void 0 === t && (t = {}),
                N(this, void 0, void 0, function() {
                    var e, n, r, o = this;
                    return B(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return t.chunks ? (n = t.chunks,
                            [3, 3]) : [3, 1];
                        case 1:
                            return [4, O.load(this.uuid, this.signedUrls, t.onProgress, undefined, this.modelData).catch(function(t) {
                                throw new E(t)
                            })];
                        case 2:
                            n = i.sent(),
                            i.label = 3;
                        case 3:
                            return 0 === (e = n).length && (L.warn("No geometry found for model, loading faux geometry, disabling outside view-mode"),
                            (r = new b({
                                geometry: new _.a(5,5,1,1),
                                name: "DummyPlane"
                            })).material.visible = !1,
                            r.rotateX(-Math.PI / 2),
                            r.geometry.computeBoundingBox(),
                            e = [r]),
                            e.forEach(function(e) {
                                e.parent = null,
                                e.layers.mask = o.layers.mask,
                                o.addChunk(e, void 0 === t.supportFloors || t.supportFloors)
                            }),
                            this.buildBoundingBox(),
                            [2, this]
                        }
                    })
                })
            }
            ,
            e.prototype.parseGroupIndexFromChunkName = function(t) {
                var e = t.match(/_group([0-9]+)/);
                if (!e)
                    return -1;
                try {
                    return parseInt(e[1], 10)
                } catch (t) {
                    return L.warn('parseGroupIndexFromChunkName(): Non-int value "' + e[1] + '" for mesh group, defaulting to -1'),
                    -1
                }
            }
            ,
            e.prototype.addChunk = function(t, e) {
                void 0 === e && (e = !0);
                var n = this.parseGroupIndexFromChunkName(t.name)
                  , r = this.getGroup(e ? n : 0);
                r.add(t),
                this.children.indexOf(r) < 0 && this.add(r)
            }
            ,
            e.prototype.getGroup = function(t) {
                var e = this.groups.getMappedElement(t);
                return e || (e = new j(t),
                this.groups.add(e)),
                e
            }
            ,
            e.prototype.buildBoundingBox = function() {
                try {
                    for (var t = U(this.groups.getReadonlyList()), e = t.next(); !e.done; e = t.next()) {
                        var n = e.value;
                        try {
                            for (var r = U(n.chunks), o = r.next(); !o.done; o = r.next()) {
                                var i = o.value.getBoundingBox();
                                this.boundingBox.union(i)
                            }
                        } catch (t) {
                            u = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (l = r.return) && l.call(r)
                            } finally {
                                if (u)
                                    throw u.error
                            }
                        }
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        e && !e.done && (s = t.return) && s.call(t)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                var a, s, u, l;
                this.size.copy(this.boundingBox.getSize()),
                this.center.copy(this.boundingBox.getCenter())
            }
            ,
            e
        }(S.a)
          , z = function() {
            function t(t) {
                void 0 === t && (t = 10),
                this.chunks = {},
                this.meshes = {},
                this.boundingBoxes = {},
                this.material = new s.a({
                    color: 16777215 * Math.random(),
                    side: f.u
                }),
                this.chunksize = t
            }
            return t.prototype.isBufferGeometry = function(t) {
                return t.attributes && t.index
            }
            ,
            t.prototype.add = function(t) {
                var e, n, r, o, i, a;
                this.isBufferGeometry(t) ? (e = t.getAttribute("position").array,
                n = void 0 !== t.index ? t.index.array : void 0) : (e = t.vertices,
                t.faces);
                var s = new F.a;
                if (n)
                    for (r = 0,
                    o = n.length; r < o; r += 3) {
                        var u = 3 * n[r]
                          , l = 3 * n[r + 1]
                          , c = 3 * n[r + 2]
                          , h = (e[u] + e[l] + e[c]) / 3
                          , d = (e[u + 1] + e[l + 1] + e[c + 1]) / 3
                          , p = (e[u + 2] + e[l + 2] + e[c + 2]) / 3;
                        (f = Math.floor(h / this.chunksize) + "." + Math.floor(d / this.chunksize) + "." + Math.floor(p / this.chunksize))in this.chunks ? (a = this.chunks[f],
                        i = this.boundingBoxes[f]) : (a = this.chunks[f] = [],
                        i = this.boundingBoxes[f] = new P.a),
                        a.push(e[u], e[u + 1], e[u + 2], e[l], e[l + 1], e[l + 2], e[c], e[c + 1], e[c + 2]),
                        i.expandByPoint(s.set(e[u], e[u + 1], e[u + 2])),
                        i.expandByPoint(s.set(e[l], e[l + 1], e[l + 2])),
                        i.expandByPoint(s.set(e[c], e[c + 1], e[c + 2]))
                    }
                else
                    for (r = 0,
                    o = e.length; r < o; r += 9) {
                        var f;
                        h = (e[r] + e[r + 3] + e[r + 6]) / 3,
                        d = (e[r + 1] + e[r + 4] + e[r + 7]) / 3,
                        p = (e[r + 2] + e[r + 5] + e[r + 8]) / 3;
                        (f = Math.floor(h / this.chunksize) + "." + Math.floor(d / this.chunksize) + "." + Math.floor(p / this.chunksize))in this.chunks ? (a = this.chunks[f],
                        i = this.boundingBoxes[f]) : (a = this.chunks[f] = [],
                        i = this.boundingBoxes[f] = new P.a),
                        a.push(e[r], e[r + 1], e[r + 2], e[r + 3], e[r + 4], e[r + 5], e[r + 6], e[r + 7], e[r + 8]),
                        i.expandByPoint(s.set(e[r], e[r + 1], e[r + 2])),
                        i.expandByPoint(s.set(e[r + 3], e[r + 4], e[r + 5])),
                        i.expandByPoint(s.set(e[r + 6], e[r + 7], e[r + 8]))
                    }
            }
            ,
            t.prototype.build = function() {
                var t = new S.a;
                for (var e in this.chunks) {
                    var n = this.chunks[e]
                      , r = new l.a;
                    r.addAttribute("position", new u.a(new Float32Array(n),3)),
                    r.boundingBox = this.boundingBoxes[e];
                    var o = new h.a(r,this.material);
                    o.material.visible = !1,
                    t.add(o),
                    this.meshes[e] = o,
                    this.chunks[e] = []
                }
                return t
            }
            ,
            t.prototype.dispose = function() {
                for (var t in this.meshes)
                    this.meshes[t].material.dispose(),
                    this.meshes[t].geometry.dispose()
            }
            ,
            t
        }()
          , H = n(77)
          , W = function(t) {
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
        }
          , K = function() {
            function t(t, e) {
                this.raycaster = t,
                this.mesh = e,
                this.clear()
            }
            return t.prototype.dispose = function() {
                this.deactivate(),
                this.clear()
            }
            ,
            t.prototype.activate = function() {
                var t = this
                  , e = this.raycaster.createCallbackSet();
                e.click = function(e, n) {
                    t.engine.broadcast(new H.a(n.point))
                }
                ;
                var n, r, o, i, a, s, u = {};
                try {
                    for (var l = W(Object.keys(this.groupNames)), c = l.next(); !c.done; c = l.next()) {
                        var h = c.value
                          , d = this.groupNames[h];
                        try {
                            for (var p = W(this.groupColliders[h]), f = p.next(); !f.done; f = p.next()) {
                                u[(m = f.value).id] = !0,
                                this.raycaster.addTarget(m, !0, e, d)
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                f && !f.done && (i = p.return) && i.call(p)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (r = l.return) && r.call(l)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
                try {
                    for (var y = W(this.allColliders), v = y.next(); !v.done; v = y.next()) {
                        var m;
                        u[(m = v.value).id] || this.raycaster.addTarget(m, !0, e)
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        v && !v.done && (s = y.return) && s.call(y)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
            }
            ,
            t.prototype.deactivate = function() {
                try {
                    for (var t = W(this.allColliders), e = t.next(); !e.done; e = t.next()) {
                        var n = e.value;
                        this.raycaster.removeTarget(n)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        e && !e.done && (o = t.return) && o.call(t)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                var r, o
            }
            ,
            t.prototype.init = function(t) {
                this.engine = t;
                var e = new F.a;
                e.copy(this.mesh.boundingBox.max).sub(this.mesh.boundingBox.min);
                var n, r, o, i, a, s, u, l, c = .03537424471120662 * e.length();
                try {
                    for (var h = W(this.mesh.groups.getReadonlyList()), d = h.next(); !d.done; d = h.next()) {
                        var p = d.value
                          , f = new z(c);
                        try {
                            for (var y = W(p.chunks), v = y.next(); !v.done; v = y.next()) {
                                var m = v.value;
                                f.add(m.geometry)
                            }
                        } catch (t) {
                            o = {
                                error: t
                            }
                        } finally {
                            try {
                                v && !v.done && (i = y.return) && i.call(y)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                        var w = f.build();
                        try {
                            for (var g = W(w.children), b = g.next(); !b.done; b = g.next()) {
                                var x = b.value;
                                this.allColliders.push(x)
                            }
                        } catch (t) {
                            a = {
                                error: t
                            }
                        } finally {
                            try {
                                b && !b.done && (s = g.return) && s.call(g)
                            } finally {
                                if (a)
                                    throw a.error
                            }
                        }
                        var D = this.groupColliders[p.groupIndex];
                        D || (this.groupColliders[p.groupIndex] = D = []);
                        try {
                            for (var M = W(w.children), k = M.next(); !k.done; k = M.next()) {
                                x = k.value;
                                D.push(x)
                            }
                        } catch (t) {
                            u = {
                                error: t
                            }
                        } finally {
                            try {
                                k && !k.done && (l = M.return) && l.call(M)
                            } finally {
                                if (u)
                                    throw u.error
                            }
                        }
                        var O = this.groupNames[p.groupIndex];
                        O || (this.groupNames[p.groupIndex] = O = "mesh_group_" + p.groupIndex),
                        f.dispose()
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        d && !d.done && (r = h.return) && r.call(h)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            ,
            t.prototype.setSide = function(t) {
                try {
                    for (var e = W(this.allColliders), n = e.next(); !n.done; n = e.next()) {
                        var r = n.value;
                        this.setSideRecursively(r, t)
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
                var o, i
            }
            ,
            t.prototype.setSideRecursively = function(t, e) {
                t instanceof h.a && t.material && (t.material.side = e);
                try {
                    for (var n = W(t.children), r = n.next(); !r.done; r = n.next()) {
                        var o = r.value;
                        this.setSideRecursively(o, e)
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (a = n.return) && a.call(n)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                var i, a
            }
            ,
            t.prototype.getReadonlyColliderList = function() {
                return this.allColliders
            }
            ,
            t.prototype.getReadonlyColliderListForGroup = function(t) {
                return this.groupColliders[t]
            }
            ,
            t.prototype.getGroupName = function(t) {
                return this.groupNames[t]
            }
            ,
            t.prototype.render = function() {}
            ,
            t.prototype.setVisible = function(t) {
                try {
                    for (var e = W(this.allColliders), n = e.next(); !n.done; n = e.next()) {
                        n.value.visible = t
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
                for (var r in this.groupNames)
                    this.raycaster.enableForGroup(this.groupNames[r], t);
                var o, i
            }
            ,
            t.prototype.clear = function() {
                this.allColliders = [],
                this.groupColliders = {},
                this.groupNames = {}
            }
            ,
            t
        }()
          , Y = n(69)
          , V = n(65)
          , Q = n(8)
          , q = function(t) {
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
        }
          , J = function() {
            function t(t, e, n, r, o, i, a, s) {
                var u = this;
                this.scene = t,
                this.mesh = e,
                this.modelCollider = n,
                this.panoRenderer = r,
                this.meshData = o,
                this.cameraData = i,
                this.sweepData = a,
                this.applicationData = s,
                this.onPanoAlignmentChange = function() {
                    var t = !u.displayingUnaligned(u.sweepData, u.viewmodeData);
                    u.modelCollider.setVisible(t)
                }
                .bind(this)
            }
            return t.prototype.init = function(t, e) {
                var n = this;
                this.market = e,
                this.market.onDataUpdate(Y.a, this.updateRenderState.bind(this)),
                this.market.onDataUpdate(V.a, this.updateRenderState.bind(this)),
                this.market.waitForData(Y.a).then(function(t) {
                    n.viewmodeData = t,
                    n.updateRenderState()
                })
            }
            ,
            t.prototype.dispose = function() {
                this.deactivate(),
                this.mesh.dispose()
            }
            ,
            t.prototype.activate = function() {
                this.scene.add(this.mesh),
                this.updateRenderState(),
                this.market.onDataUpdate(Y.a, this.onPanoAlignmentChange),
                this.market.onDataUpdate(V.a, this.onPanoAlignmentChange)
            }
            ,
            t.prototype.deactivate = function() {
                this.scene.remove(this.mesh),
                this.currentSweepId && this.panoRenderer.freeTexture(this.currentSweepId),
                this.market.removeOnDataUpdate(Y.a, this.onPanoAlignmentChange),
                this.market.removeOnDataUpdate(V.a, this.onPanoAlignmentChange),
                this.currentSweepId = null,
                this.targetSweepId = null
            }
            ,
            t.prototype.updateSweepRenderTarget = function(t, e, n, r) {
                var o, i, a, s, u = this.panoRenderer.useTexture(e);
                if (u)
                    try {
                        for (var l = q(this.mesh.groups.getReadonlyList()), c = l.next(); !c.done; c = l.next()) {
                            var h = c.value;
                            try {
                                for (var d = q(h.chunks), p = d.next(); !p.done; p = d.next()) {
                                    p.value.material.setProjectedPano(t, n, r, u)
                                }
                            } catch (t) {
                                a = {
                                    error: t
                                }
                            } finally {
                                try {
                                    p && !p.done && (s = d.return) && s.call(d)
                                } finally {
                                    if (a)
                                        throw a.error
                                }
                            }
                        }
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (i = l.return) && i.call(l)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
            }
            ,
            t.prototype.updateExistingTexture = function(t, e, n, r) {
                try {
                    for (var o = q(this.mesh.groups.getReadonlyList()), i = o.next(); !i.done; i = o.next()) {
                        var a = i.value;
                        try {
                            for (var s = q(a.chunks), u = s.next(); !u.done; u = s.next()) {
                                var l = u.value;
                                t === this.currentSweepId && l.material.setProjectedPano(0, n, r, e),
                                t === this.targetSweepId && l.material.setProjectedPano(1, n, r, e)
                            }
                        } catch (t) {
                            d = {
                                error: t
                            }
                        } finally {
                            try {
                                u && !u.done && (p = s.return) && p.call(s)
                            } finally {
                                if (d)
                                    throw d.error
                            }
                        }
                    }
                } catch (t) {
                    c = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (h = o.return) && h.call(o)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                var c, h, d, p
            }
            ,
            t.prototype.render = function() {}
            ,
            t.prototype.beforeRender = function() {
                if (this.sweepData && this.viewmodeData) {
                    var t = !this.displayingUnaligned(this.sweepData, this.viewmodeData);
                    if (this.mesh.visible = t,
                    t)
                        try {
                            for (var e = q(this.mesh.groups.getReadonlyList()), n = e.next(); !n.done; n = e.next()) {
                                var r = n.value;
                                try {
                                    for (var o = q(r.chunks), i = o.next(); !i.done; i = o.next()) {
                                        i.value.updateMaterialUniformsFromState(this.meshData, this.viewmodeData, this.cameraData)
                                    }
                                } catch (t) {
                                    u = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        i && !i.done && (l = o.return) && l.call(o)
                                    } finally {
                                        if (u)
                                            throw u.error
                                    }
                                }
                            }
                        } catch (t) {
                            a = {
                                error: t
                            }
                        } finally {
                            try {
                                n && !n.done && (s = e.return) && s.call(e)
                            } finally {
                                if (a)
                                    throw a.error
                            }
                        }
                }
                var a, s, u, l
            }
            ,
            t.prototype.displayingUnaligned = function(t, e) {
                var n = !!t.currentSweep && t.isSweepUnaliged(t.currentSweep)
                  , r = t.transition && t.transition.active && t.isSweepUnaliged(t.transition.to)
                  , o = e.transition;
                return !!(n && e.currentMode === m.a.Panorama && !o.active || n && o.progress <= .5 && o.from === m.a.Panorama || r && o.progress >= .5)
            }
            ,
            t.prototype.updateChunkMaterialMode = function(t, e) {
                try {
                    for (var n = q(this.mesh.groups.getReadonlyList()), r = n.next(); !r.done; r = n.next()) {
                        var o = r.value;
                        try {
                            for (var i = q(o.chunks), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                t || e ? s.activateInsideMaterial() : s.activateOutsideMaterial(),
                                e ? s.activateDoubleSidedRendering() : s.activateFrontSideRendering()
                            }
                        } catch (t) {
                            c = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (h = i.return) && h.call(i)
                            } finally {
                                if (c)
                                    throw c.error
                            }
                        }
                    }
                } catch (t) {
                    u = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (l = n.return) && l.call(n)
                    } finally {
                        if (u)
                            throw u.error
                    }
                }
                var u, l, c, h
            }
            ,
            t.prototype.updateChunkedColliderSide = function(t) {
                t === m.a.Panorama ? this.modelCollider.setSide(f.u) : this.modelCollider.setSide(f.D)
            }
            ,
            t.prototype.updateRenderState = function() {
                if (this.viewmodeData && this.sweepData) {
                    if (this.viewmodeData.currentMode !== this.lastViewmode) {
                        var t = this.viewmodeData.transition.active && (this.viewmodeData.transition.from === m.a.Panorama || this.viewmodeData.transition.to === m.a.Panorama)
                          , e = this.viewmodeData.currentMode === m.a.Panorama;
                        this.updateChunkMaterialMode(t, e),
                        this.viewmodeData.currentMode && this.updateChunkedColliderSide(this.viewmodeData.currentMode),
                        this.lastViewmode = this.viewmodeData.currentMode
                    }
                    if (this.viewmodeData.transition.active && this.viewmodeData.transition.to === m.a.Panorama || this.viewmodeData.currentMode === m.a.Panorama) {
                        var n = this.sweepData.currentSweep
                          , r = this.sweepData.transition
                          , o = !r.active || this.applicationData.phase !== Q.a.PLAYING && this.applicationData.phase !== Q.a.STARTING ? n : r.to;
                        this.currentSweepId = this.handleSweepChange(0, this.sweepData, this.currentSweepId, n || null),
                        this.targetSweepId = this.handleSweepChange(1, this.sweepData, this.targetSweepId, o || null)
                    }
                }
            }
            ,
            t.prototype.handleSweepChange = function(t, e, n, r) {
                if (n !== r && (n && this.panoRenderer.freeTexture(n),
                r)) {
                    var o = e.getSweep(r);
                    this.updateSweepRenderTarget(t, r, o.position, o.rotation)
                }
                return r
            }
            ,
            t
        }()
          , X = n(187)
          , Z = n(59)
          , $ = function(t) {
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
        }
          , tt = new c.a("textures");
        var et = n(283)
          , nt = n(282)
          , rt = n(144)
          , ot = n(329)
          , it = function() {
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
        }()
          , at = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }
          , st = function(t, e) {
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
        }
          , ut = function(t) {
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
        }
          , lt = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "model-mesh",
                e.renderingMesh = !0,
                e
            }
            return it(e, t),
            e.prototype.init = function(t, e) {
                return at(this, void 0, void 0, function() {
                    var n, r, i, a, s, u, l, c, h, d, p, f, y = this;
                    var modelData = null;
                    return st(this, function(v) {
                        switch (v.label) {
                        case 0:
                            return this.market = e.market,
                            this.market.register(this, ot.a),
                            [4, e.getModule(o.Oa)];
                        case 1:
                            return n = v.sent(),
                            r = n.getScene(),
                            [4, e.getModule(o.R)];
                        case 2:
                            return i = v.sent(),
                            a = i.getRaycaster(),
                            [4, e.getModule(o.H)];
                        case 3:
                            return s = v.sent(),
                            u = s.getSignedUrls(),
                            modelData = s.getModel(),
                            l = s.getModel().uuid,
                            this.renderingMesh = !!t.renderMeshGeometry,
                            [4, e.getModuleByParent(o.Aa)];
                        case 4:
                            return c = v.sent(),
                            this.panoRenderer = c.getRenderer(),
                            this.modelMesh = new G(l,u,e.claimRenderLayer(this.name),modelData),
                            [4, this.modelMesh.load({
                                supportFloors: t.combineFloors,
                                onProgress: function(t) {
                                    e.broadcast(new H.b(t.loaded,t.total))
                                }
                            })];
                        case 5:
                            return h = v.sent(),
                            this.meshData = new ot.a(0,h.boundingBox.clone(),h.center.clone()),
                            this.market.update(this, this.meshData),
                            a.setupOctree(h),
                            this.modelCollider = new K(a,h),
                            e.addComponent(this, this.modelCollider),
                            t.renderMeshGeometry ? [4, function(t, e, n, r) {
                                void 0 === r && (r = !1);
                                var o = [];
                                try {
                                    for (var i = $(n.groups.getReadonlyList()), a = i.next(); !a.done; a = i.next()) {
                                        var s = a.value;
                                        try {
                                            for (var u = $(s.chunks), l = u.next(); !l.done; l = u.next()) {
                                                var c = l.value;
                                                o.push(c)
                                            }
                                        } catch (t) {
                                            b = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                l && !l.done && (x = u.return) && x.call(u)
                                            } finally {
                                                if (b)
                                                    throw b.error
                                            }
                                        }
                                    }
                                } catch (t) {
                                    w = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (g = i.return) && g.call(i)
                                    } finally {
                                        if (w)
                                            throw w.error
                                    }
                                }
                                var h = {};
                                if (!o[0] || !o[0].meshUrl)
                                    return Promise.resolve([]);
                                var d = -1 !== o[0].meshUrl.indexOf("_50k") ? "_50k" : ""
                                  , p = "_50k" === d ? "high" : "low";
                                r && "high" === p && (tt.warn('Forcing model texture quality to "low" on mobile.'),
                                p = "low");
                                var f = e + d + "_texture_jpg_" + p + "/"
                                  , y = {};

                                  var urls =  o[0].meshUrl.split("/");
                                  // if(urls[urls.length - 3] == e.data.sid) {
                                   //    u += urls[urls.length - 2] + "/"
                                  // }

                                  if(SCENE_CONFIG.type == 0) {
                                    if(undefined != window.IMAGE_SERVER && IMAGE_SERVER != "") {
                                        ///dams/{众趣id或园区uuid 或楼层uuid}/textures/***.jpg
                                        f = IMAGE_SERVER + "/dams/" +urls[4]+ "/textures/";
                                        // modelUrl = undefined == obj || undefined == obj.file || "" == obj.file ? "" : IMAGE_SERVER+obj.file;
                                    }
                                  } else if(SCENE_CONFIG.type == 1) {
                                        f = "https://modelcdn2.3dnest.cn/"+SCENE_CONFIG.sid+"/"+SCENE_CONFIG.version+"/texture_"+p+"/";
                                  }

                                   

                                   //https://modelcdn2.3dnest.cn/zq_wlq_116/2018-07-18-14-39-40/texture_high/texture0000.jpg
                                   
                                try {
                                    for (var v = $(o), m = v.next(); !m.done; m = v.next())
                                        c = m.value,
                                        y[c.textureName] || (y[c.textureName] = []),
                                        y[c.textureName].push(c)
                                } catch (t) {
                                    D = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        m && !m.done && (M = v.return) && M.call(v)
                                    } finally {
                                        if (D)
                                            throw D.error
                                    }
                                }
                                var w, g, b, x, D, M, k = Object.keys(y).map(function(e) {
                                    var n = new X.a;
                                    return n.name = e,
                                    n.sourceFile = f + e,
                                    t.getImage(f + e, {
                                        priority: Z.RequestPriority.LOW
                                    }).then(function(t) {
                                        n.image = t,
                                        n.needsUpdate = !0,
                                        h[n.name] = n;
                                        try {
                                            for (var e = $(y[n.name]), r = e.next(); !r.done; r = e.next())
                                                r.value.setMeshTexture(n)
                                        } catch (t) {
                                            o = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                r && !r.done && (i = e.return) && i.call(e)
                                            } finally {
                                                if (o)
                                                    throw o.error
                                            }
                                        }
                                        var o, i
                                    })
                                });
                                return Promise.all(k)
                            }(u, l, this.modelMesh, t.minimalMemoryMode)] : [3, 10];
                        case 6:
                            return v.sent(),
                            [4, e.market.waitForData(rt.a)];
                        case 7:
                            return d = v.sent(),
                            [4, e.market.waitForData(V.a)];
                        case 8:
                            return p = v.sent(),
                            [4, e.market.waitForData(Q.c)];
                        case 9:
                            f = v.sent(),
                            this.renderer = new J(r.scene,h,this.modelCollider,this.panoRenderer,this.meshData,d,p,f),
                            e.addComponent(this, this.renderer),
                            v.label = 10;
                        case 10:
                            return e.broadcast(new H.c(this.modelMesh)),
                            e.subscribe(et.a, function(t) {
                                y.renderer.updateExistingTexture(t.sweepId, t.renderTarget.texture)
                            }),
                            [2, h]
                        }
                    })
                })
            }
            ,
            Object.defineProperty(e.prototype, "mesh", {
                get: function() {
                    return this.modelMesh
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "collider", {
                get: function() {
                    return this.modelCollider
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.toggleMeshOpacity = function() {
                return this.meshData.opacity = Math.abs(this.meshData.opacity - 1),
                this.market.update(this, this.meshData),
                this.meshData.opacity
            }
            ,
            e.prototype.isRenderingMesh = function() {
                return this.renderingMesh
            }
            ,
            e.prototype.setMeshRendering = function(t) {
                this.renderingMesh !== t && (t ? this.renderer.activate() : this.renderer.deactivate(),
                this.renderingMesh = t)
            }
            ,
            e.prototype.getPanoRenderer = function() {
                return this.panoRenderer
            }
            ,
            e.prototype.raycast = function(t, e, n) {
                var r, o, i = new nt.a(t,e,0,n), a = [];
                try {
                    for (var s = ut(this.collider.getReadonlyColliderList()), u = s.next(); !u.done; u = s.next()) {
                        var l = u.value;
                        a.push(l)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (o = s.return) && o.call(s)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return i.intersectObjects(a, !0)
            }
            ,
            e
        }(o.I);
        e.default = lt
    },
    728: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(30), a = (r = Object.setPrototypeOf || {
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
        ), s = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, u = function(t, e) {
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
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "user-data",
                e
            }
            return a(e, t),
            e.prototype.init = function(t, e) {
                return s(this, void 0, void 0, function() {
                    var t, n, r, a, s, c, h, d;
                    return u(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return [4, e.getModule(o.a)];
                        case 1:
                            return t = u.sent().getApi(),
                            [4, e.getModule(i.default)];
                        case 2:
                            return n = u.sent(),
                            [4, t.loadUser()];
                        case 3:
                            if (r = u.sent().getFlags())
                                try {
                                    for (a = l(r),
                                    s = a.next(); !s.done; s = a.next())
                                        c = s.value,
                                        n.registerSetting("FeatureFlags", c, !0)
                                } catch (t) {
                                    h = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (d = a.return) && d.call(a)
                                    } finally {
                                        if (h)
                                            throw h.error
                                    }
                                }
                            return [2]
                        }
                    })
                })
            }
            ,
            e
        }(o.Ka);
        e.default = c
    },
    729: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(201), a = n(198), s = (r = Object.setPrototypeOf || {
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
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, l = function(t, e) {
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
        }, c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "input-mapper",
                e.keyDownCallbacks = {},
                e.keyPressCallbacks = {},
                e.keyUpCallbacks = {},
                e
            }
            return s(e, t),
            e.prototype.init = function(t, e) {
                return u(this, void 0, void 0, function() {
                    var t = this;
                    return l(this, function(n) {
                        return e.subscribe(a.a, function(e) {
                            switch (e.state) {
                            case i.a.Down:
                                t.callKeyCallbacks(e.key, t.keyDownCallbacks);
                                break;
                            case i.a.Up:
                                t.callKeyCallbacks(e.key, t.keyUpCallbacks);
                                break;
                            case i.a.Pressed:
                                t.callKeyCallbacks(e.key, t.keyPressCallbacks)
                            }
                        }),
                        [2]
                    })
                })
            }
            ,
            e.prototype.callKeyCallbacks = function(t, e) {
                (e[t] || []).forEach(function(t) {
                    return t()
                })
            }
            ,
            e.prototype.registerKeyDown = function(t, e) {
                this.keyDownCallbacks[t] || (this.keyDownCallbacks[t] = []),
                this.keyDownCallbacks[t].push(e)
            }
            ,
            e.prototype.registerKeyPress = function(t, e) {
                this.keyPressCallbacks[t] || (this.keyPressCallbacks[t] = []),
                this.keyPressCallbacks[t].push(e)
            }
            ,
            e.prototype.registerKeyUp = function(t, e) {
                this.keyUpCallbacks[t] || (this.keyUpCallbacks[t] = []),
                this.keyUpCallbacks[t].push(e)
            }
            ,
            e
        }(o.v);
        e.default = c
    },
    730: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o = n(0), i = n(218), a = n(281), s = n(196), u = n(203), l = (r = Object.setPrototypeOf || {
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
        ), c = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, h = function(t, e) {
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
        }, d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "input-pointer",
                e.handledTouchesAsPointer = 0,
                e.activeButtons = u.c.NONE,
                e.onPointerMove = function(t) {
                    switch (t.preventDefault(),
                    t.pointerType) {
                    case "mouse":
                        -1 !== t.button ? e.activeButtons < t.buttons ? e.onMouseDown(t) : e.activeButtons > t.buttons && e.onMouseUp(t) : e.onMouseMove(t);
                        break;
                    case "touch":
                        ++e.handledTouchesAsPointer,
                        e.broadcast(new i.b(t.pointerId,e.getPointerPosition(t),u.c.PRIMARY))
                    }
                }
                ,
                e
            }
            return l(e, t),
            e.prototype.init = function(t, e) {
                return c(this, void 0, void 0, function() {
                    var t, n;
                    return h(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return this.engine = e,
                            this.broadcast = e.broadcast.bind(e),
                            [4, e.getModule(o.d)];
                        case 1:
                            return t = r.sent(),
                            n = this,
                            [4, e.market.waitForData(s.a)];
                        case 2:
                            return n.canvas = r.sent(),
                            this.bindHandlers(t.element),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.bindHandlers = function(t) {
                var e = this;
                t.addEventListener("mousedown", function(t) {
                    return e.onMouseDown(t)
                }),
                t.addEventListener("mouseup", function(t) {
                    return e.onMouseUp(t)
                }),
                t.addEventListener("mousemove", function(t) {
                    return e.onMouseMove(t)
                }),
                t.addEventListener("contextmenu", function(t) {
                    return t.preventDefault()
                }),
                t.addEventListener("touchstart", function(t) {
                    return e.onTouchStart(t)
                }),
                t.addEventListener("touchend", function(t) {
                    return e.onTouchEnd(t)
                }),
                t.addEventListener("touchmove", function(t) {
                    return e.onTouchMove(t)
                }),
                t.addEventListener("pointerdown", function(t) {
                    return e.onPointerDown(t)
                }),
                t.addEventListener("pointerup", function(t) {
                    return e.onPointerUp(t)
                }),
                t.addEventListener("pointermove", function(t) {
                    return e.onPointerMove(t)
                }),
                t.addEventListener("mouseenter", function(t) {
                    return e.activeButtons = t.buttons || t.which
                })
            }
            ,
            e.prototype.onMouseDown = function(t) {
                t.currentTarget.focus(),
                t.preventDefault(),
                this.activeButtons |= 1 << t.button,
                this.broadcast(new i.a(this.getPointerId(t),this.getPointerPosition(t),t.button,!0))
            }
            ,
            e.prototype.onMouseUp = function(t) {
                t.preventDefault(),
                this.activeButtons &= ~(1 << t.button),
                this.broadcast(new i.a(this.getPointerId(t),this.getPointerPosition(t),t.button,!1))
            }
            ,
            e.prototype.onMouseMove = function(t) {
                t.preventDefault(),
                this.broadcast(new i.b(this.getPointerId(t),this.getPointerPosition(t),this.activeButtons))
            }
            ,
            e.prototype.onTouchStart = function(t) {
                if (t.currentTarget.focus(),
                t.preventDefault(),
                this.handledTouchesAsPointer)
                    --this.handledTouchesAsPointer;
                else
                    for (var e = 0; e < t.changedTouches.length; e++) {
                        var n = t.changedTouches.item(e)
                          , r = this.getTouchPosition(n);
                        this.broadcast(new i.a(n.identifier,r,u.b.PRIMARY,!0))
                    }
            }
            ,
            e.prototype.onTouchEnd = function(t) {
                if (t.preventDefault(),
                this.handledTouchesAsPointer)
                    --this.handledTouchesAsPointer;
                else
                    for (var e = 0; e < t.changedTouches.length; e++) {
                        var n = t.changedTouches.item(e)
                          , r = this.getTouchPosition(n);
                        this.broadcast(new i.a(n.identifier,r,u.b.PRIMARY,!1))
                    }
            }
            ,
            e.prototype.onTouchMove = function(t) {
                if (t.preventDefault(),
                this.handledTouchesAsPointer)
                    --this.handledTouchesAsPointer;
                else
                    for (var e = 0; e < t.changedTouches.length; e++) {
                        var n = t.changedTouches.item(e)
                          , r = this.getTouchPosition(n);
                        this.broadcast(new i.b(n.identifier,r,u.c.PRIMARY))
                    }
            }
            ,
            e.prototype.onPointerDown = function(t) {
                switch (t.preventDefault(),
                t.pointerType) {
                case "mouse":
                    this.onMouseDown(t);
                    break;
                case "touch":
                    ++this.handledTouchesAsPointer,
                    this.broadcast(new i.a(t.pointerId,this.getPointerPosition(t),u.b.PRIMARY,!0))
                }
            }
            ,
            e.prototype.onPointerUp = function(t) {
                switch (t.preventDefault(),
                t.pointerType) {
                case "mouse":
                    this.onMouseUp(t);
                    break;
                case "touch":
                    ++this.handledTouchesAsPointer,
                    this.broadcast(new i.a(t.pointerId,this.getPointerPosition(t),u.b.PRIMARY,!1))
                }
            }
            ,
            e.prototype.getPointerId = function(t) {
                return Object(a.a)(t) ? t.pointerId : 0
            }
            ,
            e.prototype.getPointerPosition = function(t) {
                return this.normalizePosition(t.clientX, t.clientY)
            }
            ,
            e.prototype.getTouchPosition = function(t) {
                return this.normalizePosition(t.clientX, t.clientY)
            }
            ,
            e.prototype.normalizePosition = function(t, e) {
                return {
                    x: 2 * (t - this.canvas.x) / this.canvas.width - 1,
                    y: -2 * (e - this.canvas.y) / this.canvas.height + 1
                }
            }
            ,
            e
        }(o.w);
        e.default = d
    },
    731: function(t, e, n) {
        "use strict";
        n.r(e);
        var r, o, i = n(0), a = n(199), s = n(201), u = n(198), l = (r = Object.setPrototypeOf || {
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
        ), c = function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }
            )
        }, h = function(t, e) {
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
        };
        !function(t) {
            t[t.SEMICOLON = 59] = "SEMICOLON",
            t[t.PLUSEQUALS = 61] = "PLUSEQUALS",
            t[t.DASHUNDERSCORE = 173] = "DASHUNDERSCORE"
        }(o || (o = {}));
        var d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "input-keyboard",
                e.keysDown = {},
                e
            }
            return l(e, t),
            e.prototype.init = function(t, e) {
                return c(this, void 0, void 0, function() {
                    return h(this, function(t) {
                        return this.bindHandlers(e),
                        [2]
                    })
                })
            }
            ,
            e.prototype.bindHandlers = function(t) {
                var e = this;
                if (window && window.document) {
                    var n = window.document;
                    window.addEventListener("blur", function() {
                        Object.keys(e.keysDown).forEach(function(t) {
                            return e.keysDown[t] = !1
                        })
                    }),
                    n.addEventListener("keydown", function(n) {
                        if (!n.ctrlKey && !n.metaKey) {
                            n.preventDefault();
                            var r = e.translateFirefoxKeys(n.which || n.keyCode);
                            e.keysDown[r] = !0,
                            t.broadcast(new u.a(r,s.a.Down))
                        }
                    }),
                    n.addEventListener("keyup", function(n) {
                        if (!n.ctrlKey && !n.metaKey) {
                            n.preventDefault();
                            var r = e.translateFirefoxKeys(n.which || n.keyCode);
                            e.keysDown[r] && t.broadcast(new u.a(r,s.a.Pressed)),
                            e.keysDown[r] = !1,
                            t.broadcast(new u.a(r,s.a.Up))
                        }
                    })
                }
            }
            ,
            e.prototype.translateFirefoxKeys = function(t) {
                switch (t) {
                case o.SEMICOLON:
                    return a.a.SEMICOLON;
                case o.PLUSEQUALS:
                    return a.a.PLUSEQUALS;
                case o.DASHUNDERSCORE:
                    return a.a.DASHUNDERSCORE
                }
                return t
            }
            ,
            e
        }(i.u);
        e.default = d
    }
}]);
