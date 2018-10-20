(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
    716: function(e, t, n) {
        "use strict";
        n.r(t);
        n(111);
        var r, o = n(0), i = n(92), s = n(18), a = n(30), c = n(4), u = (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), l = function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    e.done ? o(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(s, a)
                }
                c((r = r.apply(e, t || [])).next())
            }
            )
        }, p = function(e, t) {
            var n, r, o, i, s = {
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
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
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
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e],
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
                    }([i, a])
                }
            }
        }, d = function(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
              , n = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && n >= e.length && (e = void 0),
                    {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }, h = new c.a("webvr-loader"), f = [{
            type: o.Pa
        }, {
            type: o.Ga
        }, {
            type: o.B
        }, {
            type: o.k
        }, {
            type: o.La
        }, {
            type: o.f
        }, {
            type: o.F
        }, {
            type: o.i
        }, {
            type: o.j
        }], y = [o.t, o.u, o.w, o.v, o.r, o.M, o.m, o.p, o.Ra, o.E, o.L], v = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "webvr-loader",
                t.modulesLoaded = !1,
                t
            }
            return u(t, e),
            t.prototype.init = function(e, t) {
                return l(this, void 0, void 0, function() {
                    var e, n, r, s, c = this;
                    return p(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return this.engine = t,
                            [4, t.getModule(o.d)];
                        case 1:
                            return e = u.sent(),
                            this.canvas = e.element,
                            this.onExitVr = this.onExitVr.bind(this),
                            [4, t.getModule(a.default)];
                        case 2:
                            return (n = u.sent()).registerButton("VR", "Preload VR Modules", function() {
                                c.loadVrModules()
                            }),
                            n.registerButton("VR", "Enter VR within Showcase", function() {
                                c.enterVrMode()
                            }),
                            navigator.getVRDisplays && i.c().then(function(e) {
                                e && (c.vrDisplay = e)
                            }),
                            [4, t.getModule(o.a)];
                        case 3:
                            return r = u.sent(),
                            s = this,
                            [4, r.getApi().getAppKey("SHOWCASE", "webvr_version")];
                        case 4:
                            return s.hackWebVRVersion = u.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.loadVrModules = function() {
                return l(this, void 0, void 0, function() {
                    return p(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this.modulesLoaded ? [3, 2] : [4, this.engine.loadModules(f)];
                        case 1:
                            e.sent(),
                            this.modulesLoaded = !0,
                            e.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.enterVrMode = function() {
                if (this.vrDisplay) {
                    try {
                        for (var e = d(y), t = e.next(); !t.done; t = e.next()) {
                            var n = t.value;
                            this.engine.unloadModule(n)
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            t && !t.done && (i = e.return) && i.call(e)
                        } finally {
                            if (r)
                                throw r.error
                        }
                    }
                    this.engine.getModuleSync(o.I).setMeshRendering(!1),
                    this.engine.getModuleSync(a.default).disposeGui(),
                    this.explosivelyDisableGui(),
                    this.beginPresent(this.vrDisplay, this.canvas, this.onExitVr)
                } else
                    h.error("vrDisplay not found");
                var r, i
            }
            ,
            t.prototype.beginPresent = function(e, t, n) {
                e ? e.capabilities.canPresent && !e.isPresenting && e.requestPresent([{
                    source: t
                }]).then(function() {
                    window.addEventListener("vrdisplaypresentchange", n)
                }).catch(function(e) {
                    h.error("requestPresent Failed:", e)
                }) : h.error("vrDisplay not found")
            }
            ,
            t.prototype.hackEnterVrMode = function() {
                this.vrDisplay ? (h.info("Headset mounted"),
                this.engine.getModuleSync(a.default).disposeGui(),
                this.engine.deactivate(),
                this.explosivelyDisableGui()) : h.error("vrDisplay not found")
            }
            ,
            t.prototype.hackPresentVr = function() {
                if (this.vrDisplay) {
                    var e = document.createElement("canvas");
                    for (e.getContext("webgl"),
                    e.className = "webvr-canvas",
                    document.bgColor = "#000",
                    document.body.style.backgroundColor = "#000"; document.body.firstChild; )
                        document.body.removeChild(document.body.firstChild);
                    document.body.appendChild(e),
                    this.beginPresent(this.vrDisplay, e, this.onExitVr),
                    this.scriptPromise.then(function() {
                        window.dispatchEvent(new Event("vrapp-start"))
                    })
                } else
                    h.error("vrDisplay not found")
            }
            ,
            t.prototype.hackLoadVrScript = function() {
                var e = "https://static.matterport.com/webvr/" + (s.m("webvr") || this.hackWebVRVersion) + "/js/main.js";
                return this.scriptPromise = new Promise(function(t, n) {
                    var r = document.createElement("script");
                    r.type = "text/javascript",
                    r.src = e,
                    r.onload = t,
                    document.head.appendChild(r)
                }
                )
            }
            ,
            t.prototype.onExitVr = function() {
                this.vrDisplay.isPresenting || (window.removeEventListener("vrdisplaypresentchange", this.onExitVr),
                h.info("Exiting VR"),
                this.hackUnload())
            }
            ,
            t.prototype.hackUnload = function() {
                var e = window.location.href;
                -1 === window.location.search.indexOf("&qs=1") && (e += "&qs=1"),
                window.location.replace(e)
            }
            ,
            t.prototype.explosivelyDisableGui = function() {
                var e = document.getElementById("gui");
                e && e.remove()
            }
            ,
            t
        }(o.Qa);
        t.default = v
    }
}]);
