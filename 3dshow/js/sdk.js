!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t),
        r.l = !0,
        r.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.i = function(e) {
        return e
    }
    ,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 9)
}([function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    function n() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function i(e) {
        return "function" == typeof e
    }
    function r(e) {
        return "number" == typeof e
    }
    function s(e) {
        return "object" == typeof e && null !== e
    }
    function o(e) {
        return void 0 === e
    }
    e.exports = n,
    n.EventEmitter = n,
    n.prototype._events = void 0,
    n.prototype._maxListeners = void 0,
    n.defaultMaxListeners = 10,
    n.prototype.setMaxListeners = function(e) {
        if (!r(e) || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
        return this._maxListeners = e,
        this
    }
    ,
    n.prototype.emit = function(e) {
        var t, n, r, c, a, u;
        if (this._events || (this._events = {}),
        "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1])instanceof Error)
                throw t;
            var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw f.context = t,
            f
        }
        if (n = this._events[e],
        o(n))
            return !1;
        if (i(n))
            switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                c = Array.prototype.slice.call(arguments, 1),
                n.apply(this, c)
            }
        else if (s(n))
            for (c = Array.prototype.slice.call(arguments, 1),
            u = n.slice(),
            r = u.length,
            a = 0; a < r; a++)
                u[a].apply(this, c);
        return !0
    }
    ,
    n.prototype.addListener = function(e, t) {
        var r;
        if (!i(t))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t),
        this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
        s(this._events[e]) && !this._events[e].warned && (r = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    n.prototype.on = n.prototype.addListener,
    n.prototype.once = function(e, t) {
        function n() {
            this.removeListener(e, n),
            r || (r = !0,
            t.apply(this, arguments))
        }
        if (!i(t))
            throw TypeError("listener must be a function");
        var r = !1;
        return n.listener = t,
        this.on(e, n),
        this
    }
    ,
    n.prototype.removeListener = function(e, t) {
        var n, r, o, c;
        if (!i(t))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[e])
            return this;
        if (n = this._events[e],
        o = n.length,
        r = -1,
        n === t || i(n.listener) && n.listener === t)
            delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (s(n)) {
            for (c = o; c-- > 0; )
                if (n[c] === t || n[c].listener && n[c].listener === t) {
                    r = c;
                    break
                }
            if (r < 0)
                return this;
            1 === n.length ? (n.length = 0,
            delete this._events[e]) : n.splice(r, 1),
            this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }
    ,
    n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
            this;
        if (0 === arguments.length) {
            for (t in this._events)
                "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (n = this._events[e],
        i(n))
            this.removeListener(e, n);
        else if (n)
            for (; n.length; )
                this.removeListener(e, n[n.length - 1]);
        return delete this._events[e],
        this
    }
    ,
    n.prototype.listeners = function(e) {
        return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }
    ,
    n.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (i(t))
                return 1;
            if (t)
                return t.length
        }
        return 0
    }
    ,
    n.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}
, function(e, t) {
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
}
, function(e, t, n) {
    (function(t) {
        !function(n) {
            function i() {}
            function r(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            function s(e) {
                if ("object" != typeof this)
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                l(e, this)
            }
            function o(e, t) {
                for (; 3 === e._state; )
                    e = e._value;
                if (0 === e._state)
                    return void e._deferreds.push(t);
                e._handled = !0,
                s._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n)
                        return void (1 === e._state ? c : a)(t.promise, e._value);
                    var i;
                    try {
                        i = n(e._value)
                    } catch (e) {
                        return void a(t.promise, e)
                    }
                    c(t.promise, i)
                })
            }
            function c(e, t) {
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
                            return void l(r(n, t), e)
                    }
                    e._state = 1,
                    e._value = t,
                    u(e)
                } catch (t) {
                    a(e, t)
                }
            }
            function a(e, t) {
                e._state = 2,
                e._value = t,
                u(e)
            }
            function u(e) {
                2 === e._state && 0 === e._deferreds.length && s._immediateFn(function() {
                    e._handled || s._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    o(e, e._deferreds[t]);
                e._deferreds = null
            }
            function f(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function l(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        c(t, e))
                    }, function(e) {
                        n || (n = !0,
                        a(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    a(t, e)
                }
            }
            var h = setTimeout;
            s.prototype.catch = function(e) {
                return this.then(null, e)
            }
            ,
            s.prototype.then = function(e, t) {
                var n = new this.constructor(i);
                return o(this, new f(e,t,n)),
                n
            }
            ,
            s.all = function(e) {
                var t = Array.prototype.slice.call(e);
                return new s(function(e, n) {
                    function i(s, o) {
                        try {
                            if (o && ("object" == typeof o || "function" == typeof o)) {
                                var c = o.then;
                                if ("function" == typeof c)
                                    return void c.call(o, function(e) {
                                        i(s, e)
                                    }, n)
                            }
                            t[s] = o,
                            0 == --r && e(t)
                        } catch (e) {
                            n(e)
                        }
                    }
                    if (0 === t.length)
                        return e([]);
                    for (var r = t.length, s = 0; s < t.length; s++)
                        i(s, t[s])
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
                    for (var i = 0, r = e.length; i < r; i++)
                        e[i].then(t, n)
                }
                )
            }
            ,
            s._immediateFn = "function" == typeof t && function(e) {
                t(e)
            }
            || function(e) {
                h(e, 0)
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
    ).call(t, n(6).setImmediate)
}
, function(e, t, n) {
    function i(e, t) {
        this.messagePromises = {},
        this.applicationKey = t,
        this.messenger = new r(e),
        this.on("removeListener", this.onRemoveListener.bind(this)),
        this.on("newListener", this.onNewListener.bind(this))
    }
    var r = n(8)
      , s = n(2)
      , o = n(1).EventEmitter
      , c = 10
      , a = 1e3
      , u = "Unable to establish a connection to Showcase after " + c * a / 1e3 + " seconds";
    i.prototype = Object.create(o.prototype),
    i.prototype.bindEvents = function() {
        this.messenger.on(s.RESPONSE, this.onResponseReceived.bind(this)),
        this.messenger.on(s.EVENT, this.onEventReceived.bind(this))
    }
    ,
    i.prototype.addEventListener = function(e, t) {
        this.on(e, t)
    }
    ,
    i.prototype.removeEventListener = function(e, t) {
        this.removeListener(e, t)
    }
    ,
    i.prototype.connect = function(e, t) {
        this.messenger.setTarget(e, "*");
        var n = 0;
        return new Promise(function(e, i) {
            var r = null
              , o = function(e) {
                this.onHandShakeReceived(e),
                clearTimeout(r)
            }
            .bind(this)
              , f = function(t) {
                this.onAcceptReceived(t),
                clearTimeout(r),
                e(t.interface)
            }
            .bind(this)
              , l = function(e) {
                this.onRejectReceived(e),
                clearTimeout(r),
                i(e.reason)
            }
            .bind(this)
              , h = function() {
                ++n <= c ? (this.send({
                    type: s.CONNECT,
                    requestedVersion: t
                }),
                r = setTimeout(h, a)) : l({
                    reason: u
                })
            }
            .bind(this);
            h(),
            this.messenger.on(s.HANDSHAKE, o),
            this.messenger.on(s.ACCEPT, f),
            this.messenger.on(s.REJECT, l)
        }
        .bind(this))
    }
    ,
    i.prototype.onHandShakeReceived = function(e) {
        this.messenger.removeAllListeners(s.HANDSHAKE),
        this.messenger.removeAllListeners(s.REJECT),
        e.warning && console.warn(e.warning),
        this.messenger.setTarget(e.source, e.origin)
    }
    ,
    i.prototype.onAcceptReceived = function(e) {
        this.messenger.targetWindow === e.source && (this.messenger.removeAllListeners(s.ACCEPT),
        this.messenger.removeAllListeners(s.HANDSHAKE),
        this.messenger.removeAllListeners(s.REJECT),
        this.bindEvents())
    }
    ,
    i.prototype.onRejectReceived = function(e) {
        this.messenger.removeAllListeners(s.ACCEPT),
        this.messenger.removeAllListeners(s.HANDSHAKE),
        this.messenger.removeAllListeners(s.REJECT),
        this.messenger.setTarget()
    }
    ,
    i.prototype.callAction = function(e, t) {
        return this.send({
            type: s.ACTION,
            targetFunction: e,
            params: t || {}
        })
    }
    ,
    i.prototype.onResponseReceived = function(e) {
        var t = this.messagePromises[e.uid];
        if (t) {
            if (e.success) {
                (0,
                t.resolve)(e.message)
            } else {
                (0,
                t.reject)(e.error)
            }
            delete this.messagePromises[e.uid]
        }
    }
    ,
    i.prototype.send = function(e) {
        var t = 0;
        return function(e) {
            var n = t++;
            return e.uid = n,
            e.applicationKey = this.applicationKey,
            new Promise(function(t, i) {
                this.messagePromises[n] = {
                    resolve: t,
                    reject: i
                },
                this.messenger.send(e)
            }
            .bind(this))
        }
    }(),
    i.prototype.onEventReceived = function(e) {
        var t = [e.eventType];
        for (var n in e.eventData)
            e.eventData.hasOwnProperty(n) && t.push(e.eventData[n]);
        this.emit.apply(this, t)
    }
    ,
    i.prototype.onNewListener = function(e) {
        0 === this.listenerCount(e) && this.send({
            type: s.SUBSCRIBE,
            subscription: e
        })
    }
    ,
    i.prototype.onRemoveListener = function(e) {
        0 === this.listenerCount(e) && this.send({
            type: s.UNSUBSCRIBE,
            subscription: e
        })
    }
    ,
    e.exports = i
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function r(e) {
        if (f === setTimeout)
            return setTimeout(e, 0);
        if ((f === n || !f) && setTimeout)
            return f = setTimeout,
            setTimeout(e, 0);
        try {
            return f(e, 0)
        } catch (t) {
            try {
                return f.call(null, e, 0)
            } catch (t) {
                return f.call(this, e, 0)
            }
        }
    }
    function s(e) {
        if (l === clearTimeout)
            return clearTimeout(e);
        if ((l === i || !l) && clearTimeout)
            return l = clearTimeout,
            clearTimeout(e);
        try {
            return l(e)
        } catch (t) {
            try {
                return l.call(null, e)
            } catch (t) {
                return l.call(this, e)
            }
        }
    }
    function o() {
        m && d && (m = !1,
        d.length ? p = d.concat(p) : v = -1,
        p.length && c())
    }
    function c() {
        if (!m) {
            var e = r(o);
            m = !0;
            for (var t = p.length; t; ) {
                for (d = p,
                p = []; ++v < t; )
                    d && d[v].run();
                v = -1,
                t = p.length
            }
            d = null,
            m = !1,
            s(e)
        }
    }
    function a(e, t) {
        this.fun = e,
        this.array = t
    }
    function u() {}
    var f, l, h = e.exports = {};
    !function() {
        try {
            f = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            f = n
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            l = i
        }
    }();
    var d, p = [], m = !1, v = -1;
    h.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        p.push(new a(e,t)),
        1 !== p.length || m || r(c)
    }
    ,
    a.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    h.title = "browser",
    h.browser = !0,
    h.env = {},
    h.argv = [],
    h.version = "",
    h.versions = {},
    h.on = u,
    h.addListener = u,
    h.once = u,
    h.off = u,
    h.removeListener = u,
    h.removeAllListeners = u,
    h.emit = u,
    h.prependListener = u,
    h.prependOnceListener = u,
    h.listeners = function(e) {
        return []
    }
    ,
    h.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    h.cwd = function() {
        return "/"
    }
    ,
    h.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    h.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    (function(e) {
        function i(e, t) {
            this._id = e,
            this._clearFn = t
        }
        var r = void 0 !== e && e || "undefined" != typeof self && self || window
          , s = Function.prototype.apply;
        t.setTimeout = function() {
            return new i(s.call(setTimeout, r, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new i(s.call(setInterval, r, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(r, this._id)
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
        n(7),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(t, n(0))
}
, function(e, t, n) {
    (function(e, t) {
        !function(e, n) {
            "use strict";
            function i(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                    t[n] = arguments[n + 1];
                var i = {
                    callback: e,
                    args: t
                };
                return m[p] = i,
                d(p),
                p++
            }
            function r(e) {
                delete m[e]
            }
            function s(e) {
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
            }
            function o(e) {
                if (v)
                    setTimeout(o, 0, e);
                else {
                    var t = m[e];
                    if (t) {
                        v = !0;
                        try {
                            s(t)
                        } finally {
                            r(e),
                            v = !1
                        }
                    }
                }
            }
            function c() {
                d = function(e) {
                    t.nextTick(function() {
                        o(e)
                    })
                }
            }
            function a() {
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
            }
            function u() {
                var t = "setImmediate$" + Math.random() + "$"
                  , n = function(n) {
                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                };
                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                d = function(n) {
                    e.postMessage(t + n, "*")
                }
            }
            function f() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    o(e.data)
                }
                ,
                d = function(t) {
                    e.port2.postMessage(t)
                }
            }
            function l() {
                var e = g.documentElement;
                d = function(t) {
                    var n = g.createElement("script");
                    n.onreadystatechange = function() {
                        o(t),
                        n.onreadystatechange = null,
                        e.removeChild(n),
                        n = null
                    }
                    ,
                    e.appendChild(n)
                }
            }
            function h() {
                d = function(e) {
                    setTimeout(o, 0, e)
                }
            }
            if (!e.setImmediate) {
                var d, p = 1, m = {}, v = !1, g = e.document, y = Object.getPrototypeOf && Object.getPrototypeOf(e);
                y = y && y.setTimeout ? y : e,
                "[object process]" === {}.toString.call(e.process) ? c() : a() ? u() : e.MessageChannel ? f() : g && "onreadystatechange"in g.createElement("script") ? l() : h(),
                y.setImmediate = i,
                y.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(t, n(0), n(5))
}
, function(e, t, n) {
    function i(e) {
        this.sourceWindow = e,
        this.targetWindow = null,
        this.targetOrigin = null,
        this.id = Math.floor(1e5 * Math.random()),
        this.bindEvents()
    }
    var r = n(2)
      , s = n(1).EventEmitter;
    i.prototype = Object.create(s.prototype),
    i.prototype.bindEvents = function() {
        this.sourceWindow.addEventListener("message", this.onPostmessageReceived.bind(this))
    }
    ,
    i.prototype.setTarget = function(e, t) {
        this.targetWindow = e,
        this.targetOrigin = t
    }
    ,
    i.prototype.onPostmessageReceived = function(e) {
        var t = e.origin || e.originalEvent.origin
          , n = e.source;
        switch (e.data.type) {
        case r.ACCEPT:
        case r.HANDSHAKE:
        case r.REJECT:
        case r.RESPONSE:
            if (this.id !== e.data.toId)
                return;
        case r.EVENT:
            if (!this.validateMessageOrigin(t))
                return;
            break;
        default:
            return
        }
        var i = e.data;
        i.source = n,
        i.origin = t,
        i.timestamp = Date.now(),
        this.emit(e.data.type, i)
    }
    ,
    i.prototype.validateMessageOrigin = function(e) {
        return "*" === this.targetOrigin || e === this.targetOrigin
    }
    ,
    i.prototype.send = function(e) {
        this.targetWindow && this.targetOrigin && (e.fromId = this.id,
        this.targetWindow.postMessage(e, this.targetOrigin))
    }
    ,
    e.exports = i
}
, function(e, t, n) {
    function i(e, t) {
        function n(e, t, n) {
            e ? (i[e] = i[e] || {},
            i[e][t] = n) : i[t] = n
        }
        var i = {
            on: function(t, n) {
                return e.addEventListener(t, n),
                this
            },
            off: function(t, n) {
                return e.removeEventListener(t, n),
                this
            }
        };
        return t.enums && Object.keys(t.enums).forEach(function(e) {
            var i = t.enums[e];
            n(i.namespace, i.name, i.values)
        }),
        t.functions && Object.keys(t.functions).forEach(function(i) {
            var r = t.functions[i]
              , s = r.args
              , o = function() {
                for (var t = {}, n = 0; n < s.length; ++n)
                    t[s[n]] = arguments[n];
                return e.callAction(i, t)
            };
            n(r.namespace, r.name, o)
        }),
        i
    }
    window.Promise || (window.Promise = n(3));
    var r = n(4)
      , s = {
        connect: function(e, t, n) {
            return e instanceof Window || e instanceof HTMLIFrameElement ? "string" != typeof t ? Promise.reject("invalid key") : "string" != typeof n ? Promise.reject("invalid version") : (e.contentWindow && (e = e.contentWindow),
            new Promise(function(s, o) {
                var c = new r(window,t);
                c.connect(e, n).then(function(e) {
                    s(i(c, e))
                }, o)
            }
            )) : Promise.reject("invalid window")
        }
    };
    e.exports.showcaseSdk = s,
    window.SHOWCASE_SDK = s,
    e.exports.mpSdk = s,
    window.MP_SDK = s
}
]);
