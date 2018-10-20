(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    151: function(e, t) {
        e.exports = Object.freeze({
            CONNECT: "postmessage.connect",
            HANDSHAKE: "postmessage.handshake",
            ACCEPT: "postmessage.accept",
            REJECT: "postmessage.reject",
            ACTION: "postmessage.action",
            RESPONSE: "postmessage.response",
            EVENT: "postmessage.event",
            SUBSCRIBE: "postmessage.subscribe",
            UNSUBSCRIBE: "postmessage.unsubscribe"
        })
    },
    154: function(e, t, n) {
        window.Promise || (window.Promise = n(160));
        var i = n(157)
          , o = {
            connect: function(e, t, n) {
                return e instanceof Window || e instanceof HTMLIFrameElement ? "string" != typeof t ? Promise.reject("invalid key") : "string" != typeof n ? Promise.reject("invalid version") : (e.contentWindow && (e = e.contentWindow),
                new Promise(function(o, s) {
                    var r = new i(window,t);
                    r.connect(e, n).then(function(e) {
                        o(function(e, t) {
                            var n = {
                                on: function(t, n) {
                                    return e.addEventListener(t, n),
                                    this
                                },
                                off: function(t, n) {
                                    return e.removeEventListener(t, n),
                                    this
                                }
                            };
                            function i(e, t, i) {
                                e ? (n[e] = n[e] || {},
                                n[e][t] = i) : n[t] = i
                            }
                            t.enums && Object.keys(t.enums).forEach(function(e) {
                                var n = t.enums[e];
                                i(n.namespace, n.name, n.values)
                            });
                            t.functions && Object.keys(t.functions).forEach(function(n) {
                                var o = t.functions[n]
                                  , s = o.args;
                                i(o.namespace, o.name, function() {
                                    for (var t = {}, i = 0; i < s.length; ++i)
                                        t[s[i]] = arguments[i];
                                    return e.callAction(n, t)
                                })
                            });
                            return n
                        }(r, e))
                    }, s)
                }
                )) : Promise.reject("invalid window")
            }
        };
        e.exports.showcaseSdk = o,
        window.SHOWCASE_SDK = o,
        e.exports.mpSdk = o,
        window.MP_SDK = o
    },
    156: function(e, t, n) {
        var i = n(151)
          , o = n(44).EventEmitter;
        function s(e) {
            this.sourceWindow = e,
            this.targetWindow = null,
            this.targetOrigin = null,
            this.id = Math.floor(1e5 * Math.random()),
            this.bindEvents()
        }
        s.prototype = Object.create(o.prototype),
        s.prototype.bindEvents = function() {
            this.sourceWindow.addEventListener("message", this.onPostmessageReceived.bind(this))
        }
        ,
        s.prototype.setTarget = function(e, t) {
            this.targetWindow = e,
            this.targetOrigin = t
        }
        ,
        s.prototype.onPostmessageReceived = function(e) {
            var t = e.origin || e.originalEvent.origin
              , n = e.source;
            switch (e.data.type) {
            case i.ACCEPT:
            case i.HANDSHAKE:
            case i.REJECT:
            case i.RESPONSE:
                if (this.id !== e.data.toId)
                    return;
            case i.EVENT:
                if (!this.validateMessageOrigin(t))
                    return;
                break;
            default:
                return
            }
            var o = e.data;
            o.source = n,
            o.origin = t,
            o.timestamp = Date.now(),
            this.emit(e.data.type, o)
        }
        ,
        s.prototype.validateMessageOrigin = function(e) {
            return "*" === this.targetOrigin || e === this.targetOrigin
        }
        ,
        s.prototype.send = function(e) {
            this.targetWindow && this.targetOrigin && (e.fromId = this.id,
            this.targetWindow.postMessage(e, this.targetOrigin))
        }
        ,
        e.exports = s
    },
    157: function(e, t, n) {
        var i, o = n(156), s = n(151), r = n(44).EventEmitter;
        function a(e, t) {
            this.messagePromises = {},
            this.applicationKey = t,
            this.messenger = new o(e),
            this.on("removeListener", this.onRemoveListener.bind(this)),
            this.on("newListener", this.onNewListener.bind(this))
        }
        a.prototype = Object.create(r.prototype),
        a.prototype.bindEvents = function() {
            this.messenger.on(s.RESPONSE, this.onResponseReceived.bind(this)),
            this.messenger.on(s.EVENT, this.onEventReceived.bind(this))
        }
        ,
        a.prototype.addEventListener = function(e, t) {
            this.on(e, t)
        }
        ,
        a.prototype.removeEventListener = function(e, t) {
            this.removeListener(e, t)
        }
        ,
        a.prototype.connect = function(e, t) {
            this.messenger.setTarget(e, "*");
            var n = 0;
            return new Promise(function(e, i) {
                var o = null
                  , r = function(e) {
                    this.onHandShakeReceived(e),
                    clearTimeout(o)
                }
                .bind(this)
                  , a = function(t) {
                    this.onAcceptReceived(t),
                    clearTimeout(o),
                    e(t.interface)
                }
                .bind(this)
                  , c = function(e) {
                    this.onRejectReceived(e),
                    clearTimeout(o),
                    i(e.reason)
                }
                .bind(this)
                  , u = function() {
                    ++n <= 10 ? (this.send({
                        type: s.CONNECT,
                        requestedVersion: t
                    }),
                    o = setTimeout(u, 1e3)) : c({
                        reason: "Unable to establish a connection to Showcase after 10 seconds"
                    })
                }
                .bind(this);
                u(),
                this.messenger.on(s.HANDSHAKE, r),
                this.messenger.on(s.ACCEPT, a),
                this.messenger.on(s.REJECT, c)
            }
            .bind(this))
        }
        ,
        a.prototype.onHandShakeReceived = function(e) {
            this.messenger.removeAllListeners(s.HANDSHAKE),
            this.messenger.removeAllListeners(s.REJECT),
            e.warning && console.warn(e.warning),
            this.messenger.setTarget(e.source, e.origin)
        }
        ,
        a.prototype.onAcceptReceived = function(e) {
            this.messenger.targetWindow === e.source && (this.messenger.removeAllListeners(s.ACCEPT),
            this.messenger.removeAllListeners(s.HANDSHAKE),
            this.messenger.removeAllListeners(s.REJECT),
            this.bindEvents())
        }
        ,
        a.prototype.onRejectReceived = function(e) {
            this.messenger.removeAllListeners(s.ACCEPT),
            this.messenger.removeAllListeners(s.HANDSHAKE),
            this.messenger.removeAllListeners(s.REJECT),
            this.messenger.setTarget()
        }
        ,
        a.prototype.callAction = function(e, t) {
            return this.send({
                type: s.ACTION,
                targetFunction: e,
                params: t || {}
            })
        }
        ,
        a.prototype.onResponseReceived = function(e) {
            var t = this.messagePromises[e.uid];
            if (t) {
                if (e.success)
                    (0,
                    t.resolve)(e.message);
                else
                    (0,
                    t.reject)(e.error);
                delete this.messagePromises[e.uid]
            }
        }
        ,
        a.prototype.send = (i = 0,
        function(e) {
            var t = i++;
            return e.uid = t,
            e.applicationKey = this.applicationKey,
            new Promise(function(n, i) {
                this.messagePromises[t] = {
                    resolve: n,
                    reject: i
                },
                this.messenger.send(e)
            }
            .bind(this))
        }
        ),
        a.prototype.onEventReceived = function(e) {
            var t = [e.eventType];
            for (var n in e.eventData)
                e.eventData.hasOwnProperty(n) && t.push(e.eventData[n]);
            this.emit.apply(this, t)
        }
        ,
        a.prototype.onNewListener = function(e) {
            0 === this.listenerCount(e) && this.send({
                type: s.SUBSCRIBE,
                subscription: e
            })
        }
        ,
        a.prototype.onRemoveListener = function(e) {
            0 === this.listenerCount(e) && this.send({
                type: s.UNSUBSCRIBE,
                subscription: e
            })
        }
        ,
        e.exports = a
    },
    158: function(e, t, n) {
        (function(e, t) {
            !function(e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var i, o, s, r, a, c = 1, u = {}, f = !1, l = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e,
                    "[object process]" === {}.toString.call(e.process) ? i = function(e) {
                        t.nextTick(function() {
                            h(e)
                        })
                    }
                    : !function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                              , n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                            ,
                            e.postMessage("", "*"),
                            e.onmessage = n,
                            t
                        }
                    }() ? e.MessageChannel ? ((s = new MessageChannel).port1.onmessage = function(e) {
                        h(e.data)
                    }
                    ,
                    i = function(e) {
                        s.port2.postMessage(e)
                    }
                    ) : l && "onreadystatechange"in l.createElement("script") ? (o = l.documentElement,
                    i = function(e) {
                        var t = l.createElement("script");
                        t.onreadystatechange = function() {
                            h(e),
                            t.onreadystatechange = null,
                            o.removeChild(t),
                            t = null
                        }
                        ,
                        o.appendChild(t)
                    }
                    ) : i = function(e) {
                        setTimeout(h, 0, e)
                    }
                    : (r = "setImmediate$" + Math.random() + "$",
                    a = function(t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(r) && h(+t.data.slice(r.length))
                    }
                    ,
                    e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                    i = function(t) {
                        e.postMessage(r + t, "*")
                    }
                    ),
                    d.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                            t[n] = arguments[n + 1];
                        var o = {
                            callback: e,
                            args: t
                        };
                        return u[c] = o,
                        i(c),
                        c++
                    }
                    ,
                    d.clearImmediate = p
                }
                function p(e) {
                    delete u[e]
                }
                function h(e) {
                    if (f)
                        setTimeout(h, 0, e);
                    else {
                        var t = u[e];
                        if (t) {
                            f = !0;
                            try {
                                !function(e) {
                                    var t = e.callback
                                      , i = e.args;
                                    switch (i.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(i[0]);
                                        break;
                                    case 2:
                                        t(i[0], i[1]);
                                        break;
                                    case 3:
                                        t(i[0], i[1], i[2]);
                                        break;
                                    default:
                                        t.apply(n, i)
                                    }
                                }(t)
                            } finally {
                                p(e),
                                f = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(this, n(67), n(76))
    },
    159: function(e, t, n) {
        (function(e) {
            var i = void 0 !== e && e || "undefined" != typeof self && self || window
              , o = Function.prototype.apply;
            function s(e, t) {
                this._id = e,
                this._clearFn = t
            }
            t.setTimeout = function() {
                return new s(o.call(setTimeout, i, arguments),clearTimeout)
            }
            ,
            t.setInterval = function() {
                return new s(o.call(setInterval, i, arguments),clearInterval)
            }
            ,
            t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }
            ,
            s.prototype.unref = s.prototype.ref = function() {}
            ,
            s.prototype.close = function() {
                this._clearFn.call(i, this._id)
            }
            ,
            t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = t
            }
            ,
            t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = -1
            }
            ,
            t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }
            ,
            n(158),
            t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
            t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }
        ).call(this, n(67))
    },
    160: function(e, t, n) {
        (function(t) {
            !function(n) {
                var i = setTimeout;
                function o() {}
                function s(e) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    f(e, this)
                }
                function r(e, t) {
                    for (; 3 === e._state; )
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                    s._immediateFn(function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var i;
                            try {
                                i = n(e._value)
                            } catch (e) {
                                return void c(t.promise, e)
                            }
                            a(t.promise, i)
                        } else
                            (1 === e._state ? a : c)(t.promise, e._value)
                    })) : e._deferreds.push(t)
                }
                function a(e, t) {
                    try {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof s)
                                return e._state = 3,
                                e._value = t,
                                void u(e);
                            if ("function" == typeof n)
                                return void f((i = n,
                                o = t,
                                function() {
                                    i.apply(o, arguments)
                                }
                                ), e)
                        }
                        e._state = 1,
                        e._value = t,
                        u(e)
                    } catch (t) {
                        c(e, t)
                    }
                    var i, o
                }
                function c(e, t) {
                    e._state = 2,
                    e._value = t,
                    u(e)
                }
                function u(e) {
                    2 === e._state && 0 === e._deferreds.length && s._immediateFn(function() {
                        e._handled || s._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++)
                        r(e, e._deferreds[t]);
                    e._deferreds = null
                }
                function f(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0,
                            a(t, e))
                        }, function(e) {
                            n || (n = !0,
                            c(t, e))
                        })
                    } catch (e) {
                        if (n)
                            return;
                        n = !0,
                        c(t, e)
                    }
                }
                s.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                s.prototype.then = function(e, t) {
                    var n = new this.constructor(o);
                    return r(this, new function(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null,
                        this.onRejected = "function" == typeof t ? t : null,
                        this.promise = n
                    }
                    (e,t,n)),
                    n
                }
                ,
                s.all = function(e) {
                    var t = Array.prototype.slice.call(e);
                    return new s(function(e, n) {
                        if (0 === t.length)
                            return e([]);
                        var i = t.length;
                        function o(s, r) {
                            try {
                                if (r && ("object" == typeof r || "function" == typeof r)) {
                                    var a = r.then;
                                    if ("function" == typeof a)
                                        return void a.call(r, function(e) {
                                            o(s, e)
                                        }, n)
                                }
                                t[s] = r,
                                0 == --i && e(t)
                            } catch (e) {
                                n(e)
                            }
                        }
                        for (var s = 0; s < t.length; s++)
                            o(s, t[s])
                    }
                    )
                }
                ,
                s.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === s ? e : new s(function(t) {
                        t(e)
                    }
                    )
                }
                ,
                s.reject = function(e) {
                    return new s(function(t, n) {
                        n(e)
                    }
                    )
                }
                ,
                s.race = function(e) {
                    return new s(function(t, n) {
                        for (var i = 0, o = e.length; i < o; i++)
                            e[i].then(t, n)
                    }
                    )
                }
                ,
                s._immediateFn = "function" == typeof t && function(e) {
                    t(e)
                }
                || function(e) {
                    i(e, 0)
                }
                ,
                s._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }
                ,
                s._setImmediateFn = function(e) {
                    s._immediateFn = e
                }
                ,
                s._setUnhandledRejectionFn = function(e) {
                    s._unhandledRejectionFn = e
                }
                ,
                void 0 !== e && e.exports ? e.exports = s : n.Promise || (n.Promise = s)
            }(this)
        }
        ).call(this, n(159).setImmediate)
    },
    682: function(e, t, n) {
        "use strict";
        n.r(t);
        var i, o = n(0), s = n(154), r = n(70), a = n(183), c = n(4), u = (i = Object.setPrototypeOf || {
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
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), f = function(e, t, n, i) {
            return new (n || (n = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    e.done ? o(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(r, a)
                }
                c((i = i.apply(e, t || [])).next())
            }
            )
        }, l = function(e, t) {
            var n, i, o, s, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                i && (o = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(o = o.call(i, s[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (s = [0, o.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = r.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        r.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = s;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(s);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }, d = new c.a("gui-index"), p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.name = "gui",
                t.guiDiv = document.getElementById("gui") || document.body,
                t
            }
            return u(t, e),
            t.prototype.init = function(e, t) {
                return f(this, void 0, void 0, function() {
                    var e, n, i, a, c = this;
                    return l(this, function(u) {
                        return e = t.getModule(o.A),
                        n = t.getModule(o.T),
                        i = t.market.waitForData(r.a),
                        Promise.all([e, n, i]).then(function(e) {
                            c.mainArgs = e
                        }),
                        [2, (a = function() {
                            return s.mpSdk.connect(window, "internal-use", "3.0").then(function(e) {
                                c.sdk = e
                            }, function(e) {
                                return d.warn(e),
                                a()
                            })
                        }
                        )()]
                    })
                })
            }
            ,
            t.prototype.unloadGui = function() {
                var e;
                !(e = this.guiDiv) || e.children.length < 1 || Object(a.render)(null, e, e.children[0])
            }
            ,
            t.prototype.loadUi = function(e, t, n) {
                var i = t || [];
                i = (i = i.concat(this.mainArgs)).concat([n || this.guiDiv, this.sdk]),
                e.apply(this, i)
            }
            ,
            t
        }(o.t);
        t.default = p
    }
}]);
