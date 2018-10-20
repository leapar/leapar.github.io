(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
  185: function(e, t, i) {
      var M;
      /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
      /*!
Copyright (c) 2016 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
      !function() {
          "use strict";
          var i = {}.hasOwnProperty;
          function A() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                  var M = arguments[t];
                  if (M) {
                      var s = typeof M;
                      if ("string" === s || "number" === s)
                          e.push(M);
                      else if (Array.isArray(M))
                          e.push(A.apply(null, M));
                      else if ("object" === s)
                          for (var r in M)
                              i.call(M, r) && M[r] && e.push(r)
                  }
              }
              return e.join(" ")
          }
          void 0 !== e && e.exports ? e.exports = A : void 0 === (M = function() {
              return A
          }
          .apply(t, [])) || (e.exports = M)
      }()
  },
  322: function(e, t, i) {
      var M;
      /*! Player.js - v0.1.0 - 2017-10-24
* http://github.com/embedly/player.js
* Copyright (c) 2017 Embedly; Licensed BSD */
      /*! Player.js - v0.1.0 - 2017-10-24
* http://github.com/embedly/player.js
* Copyright (c) 2017 Embedly; Licensed BSD */
      !function(A, s) {
          var r = {};
          function n(e) {
              return function() {
                  var t = {
                      method: e
                  }
                    , i = Array.prototype.slice.call(arguments);
                  /^get/.test(e) ? (r.assert(i.length > 0, "Get methods require a callback."),
                  i.unshift(t)) : (/^set/.test(e) && (r.assert(0 !== i.length, "Set methods require a value."),
                  t.value = i[0]),
                  i = [t]),
                  this.send.apply(this, i)
              }
          }
          r.DEBUG = !1,
          r.VERSION = "0.0.11",
          r.CONTEXT = "player.js",
          r.POST_MESSAGE = !!A.postMessage,
          r.origin = function(e) {
              return "//" === e.substr(0, 2) && (e = A.location.protocol + e),
              e.split("/").slice(0, 3).join("/")
          }
          ,
          r.addEvent = function(e, t, i) {
              e && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i)
          }
          ,
          r.log = function() {
              r.log.history = r.log.history || [],
              r.log.history.push(arguments),
              A.console && r.DEBUG && A.console.log(Array.prototype.slice.call(arguments))
          }
          ,
          r.isString = function(e) {
              return "[object String]" === Object.prototype.toString.call(e)
          }
          ,
          r.isObject = function(e) {
              return "[object Object]" === Object.prototype.toString.call(e)
          }
          ,
          r.isArray = function(e) {
              return "[object Array]" === Object.prototype.toString.call(e)
          }
          ,
          r.isNone = function(e) {
              return null == e
          }
          ,
          r.has = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }
          ,
          r.indexOf = function(e, t) {
              if (null == e)
                  return -1;
              var i = 0
                , M = e.length;
              if (Array.prototype.IndexOf && e.indexOf === Array.prototype.IndexOf)
                  return e.indexOf(t);
              for (; i < M; i++)
                  if (e[i] === t)
                      return i;
              return -1
          }
          ,
          r.assert = function(e, t) {
              if (!e)
                  throw t || "Player.js Assert Failed"
          }
          ,
          r.Keeper = function() {
              this.init()
          }
          ,
          r.Keeper.prototype.init = function() {
              this.data = {}
          }
          ,
          r.Keeper.prototype.getUUID = function() {
              return "listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                  var t = 16 * Math.random() | 0;
                  return ("x" === e ? t : 3 & t | 8).toString(16)
              })
          }
          ,
          r.Keeper.prototype.has = function(e, t) {
              if (!this.data.hasOwnProperty(e))
                  return !1;
              if (r.isNone(t))
                  return !0;
              for (var i = this.data[e], M = 0; M < i.length; M++)
                  if (i[M].id === t)
                      return !0;
              return !1
          }
          ,
          r.Keeper.prototype.add = function(e, t, i, M, A) {
              var s = {
                  id: e,
                  event: t,
                  cb: i,
                  ctx: M,
                  one: A
              };
              this.has(t) ? this.data[t].push(s) : this.data[t] = [s]
          }
          ,
          r.Keeper.prototype.execute = function(e, t, i, M) {
              if (!this.has(e, t))
                  return !1;
              for (var A = [], s = [], n = 0; n < this.data[e].length; n++) {
                  var N = this.data[e][n];
                  r.isNone(t) || !r.isNone(t) && N.id === t ? (s.push({
                      cb: N.cb,
                      ctx: N.ctx ? N.ctx : M,
                      data: i
                  }),
                  !1 === N.one && A.push(N)) : A.push(N)
              }
              0 === A.length ? delete this.data[e] : this.data[e] = A;
              for (var u = 0; u < s.length; u++) {
                  var D = s[u];
                  D.cb.call(D.ctx, D.data)
              }
          }
          ,
          r.Keeper.prototype.on = function(e, t, i, M) {
              this.add(e, t, i, M, !1)
          }
          ,
          r.Keeper.prototype.one = function(e, t, i, M) {
              this.add(e, t, i, M, !0)
          }
          ,
          r.Keeper.prototype.off = function(e, t) {
              var i = [];
              if (!this.data.hasOwnProperty(e))
                  return i;
              for (var M = [], A = 0; A < this.data[e].length; A++) {
                  var s = this.data[e][A];
                  r.isNone(t) || s.cb === t ? r.isNone(s.id) || i.push(s.id) : M.push(s)
              }
              return 0 === M.length ? delete this.data[e] : this.data[e] = M,
              i
          }
          ,
          r.Player = function(e, t) {
              if (!(this instanceof r.Player))
                  return new r.Player(e,t);
              this.init(e, t)
          }
          ,
          r.EVENTS = {
              READY: "ready",
              PLAY: "play",
              PAUSE: "pause",
              ENDED: "ended",
              TIMEUPDATE: "timeupdate",
              PROGRESS: "progress",
              ERROR: "error"
          },
          r.EVENTS.all = function() {
              var e = [];
              for (var t in r.EVENTS)
                  r.has(r.EVENTS, t) && r.isString(r.EVENTS[t]) && e.push(r.EVENTS[t]);
              return e
          }
          ,
          r.METHODS = {
              PLAY: "play",
              PAUSE: "pause",
              GETPAUSED: "getPaused",
              MUTE: "mute",
              UNMUTE: "unmute",
              GETMUTED: "getMuted",
              SETVOLUME: "setVolume",
              GETVOLUME: "getVolume",
              GETDURATION: "getDuration",
              SETCURRENTTIME: "setCurrentTime",
              GETCURRENTTIME: "getCurrentTime",
              SETLOOP: "setLoop",
              GETLOOP: "getLoop",
              REMOVEEVENTLISTENER: "removeEventListener",
              ADDEVENTLISTENER: "addEventListener"
          },
          r.METHODS.all = function() {
              var e = [];
              for (var t in r.METHODS)
                  r.has(r.METHODS, t) && r.isString(r.METHODS[t]) && e.push(r.METHODS[t]);
              return e
          }
          ,
          r.READIED = [],
          r.Player.prototype.init = function(e, t) {
              var i = this;
              r.isString(e) && (e = s.getElementById(e)),
              this.elem = e,
              r.assert("IFRAME" === e.nodeName, 'playerjs.Player constructor requires an Iframe, got "' + e.nodeName + '"'),
              r.assert(e.src, "playerjs.Player constructor requires a Iframe with a 'src' attribute."),
              this.origin = r.origin(e.src),
              this.keeper = new r.Keeper,
              this.isReady = !1,
              this.queue = [],
              this.events = r.EVENTS.all(),
              this.methods = r.METHODS.all(),
              r.POST_MESSAGE ? r.addEvent(A, "message", function(e) {
                  i.receive(e)
              }) : r.log("Post Message is not Available."),
              r.indexOf(r.READIED, e.src) > -1 ? i.loaded = !0 : this.elem.onload = function() {
                  i.loaded = !0
              }
          }
          ,
          r.Player.prototype.send = function(e, t, i) {
              if (e.context = r.CONTEXT,
              e.version = r.VERSION,
              t) {
                  var M = this.keeper.getUUID();
                  e.listener = M,
                  this.keeper.one(M, e.method, t, i)
              }
              return this.isReady || "ready" === e.value ? (r.log("Player.send", e, this.origin),
              !0 === this.loaded && this.elem.contentWindow.postMessage(JSON.stringify(e), this.origin),
              !0) : (r.log("Player.queue", e),
              this.queue.push(e),
              !1)
          }
          ,
          r.Player.prototype.receive = function(e) {
              if (r.log("Player.receive", e),
              e.origin !== this.origin)
                  return !1;
              var t;
              try {
                  t = JSON.parse(e.data)
              } catch (e) {
                  return !1
              }
              if (t.context !== r.CONTEXT)
                  return !1;
              "ready" === t.event && t.value && t.value.src === this.elem.src && this.ready(t),
              this.keeper.has(t.event, t.listener) && this.keeper.execute(t.event, t.listener, t.value, this)
          }
          ,
          r.Player.prototype.ready = function(e) {
              if (!0 === this.isReady)
                  return !1;
              e.value.events && (this.events = e.value.events),
              e.value.methods && (this.methods = e.value.methods),
              this.isReady = !0,
              this.loaded = !0;
              for (var t = 0; t < this.queue.length; t++) {
                  var i = this.queue[t];
                  r.log("Player.dequeue", i),
                  "ready" === e.event && this.keeper.execute(i.event, i.listener, !0, this),
                  this.send(i)
              }
              this.queue = []
          }
          ,
          r.Player.prototype.on = function(e, t, i) {
              var M = this.keeper.getUUID();
              return "ready" === e ? this.keeper.one(M, e, t, i) : this.keeper.on(M, e, t, i),
              this.send({
                  method: "addEventListener",
                  value: e,
                  listener: M
              }),
              !0
          }
          ,
          r.Player.prototype.off = function(e, t) {
              var i = this.keeper.off(e, t);
              if (r.log("Player.off", i),
              i.length > 0)
                  for (var M in i)
                      return this.send({
                          method: "removeEventListener",
                          value: e,
                          listener: i[M]
                      }),
                      !0;
              return !1
          }
          ,
          r.Player.prototype.supports = function(e, t) {
              r.assert(r.indexOf(["method", "event"], e) > -1, 'evtOrMethod needs to be either "event" or "method" got ' + e),
              t = r.isArray(t) ? t : [t];
              for (var i = "event" === e ? this.events : this.methods, M = 0; M < t.length; M++)
                  if (-1 === r.indexOf(i, t[M]))
                      return !1;
              return !0
          }
          ;
          for (var N = 0, u = r.METHODS.all().length; N < u; N++) {
              var D = r.METHODS.all()[N];
              r.Player.prototype.hasOwnProperty(D) || (r.Player.prototype[D] = n(D))
          }
          r.addEvent(A, "message", function(e) {
              var t;
              try {
                  t = JSON.parse(e.data)
              } catch (e) {
                  return !1
              }
              if (t.context !== r.CONTEXT)
                  return !1;
              "ready" === t.event && t.value && t.value.src && r.READIED.push(t.value.src)
          }),
          r.Receiver = function(e, t) {
              this.init(e, t)
          }
          ,
          r.Receiver.prototype.init = function(e, t) {
              var i = this;
              this.isReady = !1,
              this.origin = r.origin(s.referrer),
              this.methods = {},
              this.supported = {
                  events: e || r.EVENTS.all(),
                  methods: t || r.METHODS.all()
              },
              this.eventListeners = {},
              this.reject = !(A.self !== A.top && r.POST_MESSAGE),
              this.reject || r.addEvent(A, "message", function(e) {
                  i.receive(e)
              })
          }
          ,
          r.Receiver.prototype.receive = function(e) {
              if (e.origin !== this.origin)
                  return !1;
              var t = {};
              if (r.isObject(e.data))
                  t = e.data;
              else
                  try {
                      t = A.JSON.parse(e.data)
                  } catch (e) {
                      r.log("JSON Parse Error", e)
                  }
              if (r.log("Receiver.receive", e, t),
              !t.method)
                  return !1;
              if (t.context !== r.CONTEXT)
                  return !1;
              if (-1 === r.indexOf(r.METHODS.all(), t.method))
                  return this.emit("error", {
                      code: 2,
                      msg: 'Invalid Method "' + t.method + '"'
                  }),
                  !1;
              var i = r.isNone(t.listener) ? null : t.listener;
              if ("addEventListener" === t.method)
                  this.eventListeners.hasOwnProperty(t.value) ? -1 === r.indexOf(this.eventListeners[t.value], i) && this.eventListeners[t.value].push(i) : this.eventListeners[t.value] = [i],
                  "ready" === t.value && this.isReady && this.ready();
              else if ("removeEventListener" === t.method) {
                  if (this.eventListeners.hasOwnProperty(t.value)) {
                      var M = r.indexOf(this.eventListeners[t.value], i);
                      M > -1 && this.eventListeners[t.value].splice(M, 1),
                      0 === this.eventListeners[t.value].length && delete this.eventListeners[t.value]
                  }
              } else
                  this.get(t.method, t.value, i)
          }
          ,
          r.Receiver.prototype.get = function(e, t, i) {
              var M = this;
              if (!this.methods.hasOwnProperty(e))
                  return this.emit("error", {
                      code: 3,
                      msg: 'Method Not Supported"' + e + '"'
                  }),
                  !1;
              var A = this.methods[e];
              if ("get" === e.substr(0, 3)) {
                  A.call(this, function(t) {
                      M.send(e, t, i)
                  })
              } else
                  A.call(this, t)
          }
          ,
          r.Receiver.prototype.on = function(e, t) {
              this.methods[e] = t
          }
          ,
          r.Receiver.prototype.send = function(e, t, i) {
              if (r.log("Receiver.send", e, t, i),
              this.reject)
                  return r.log("Receiver.send.reject", e, t, i),
                  !1;
              var M = {
                  context: r.CONTEXT,
                  version: r.VERSION,
                  event: e
              };
              r.isNone(t) || (M.value = t),
              r.isNone(i) || (M.listener = i);
              var s = JSON.stringify(M);
              A.parent.postMessage(s, "" === this.origin ? "*" : this.origin)
          }
          ,
          r.Receiver.prototype.emit = function(e, t) {
              if (!this.eventListeners.hasOwnProperty(e))
                  return !1;
              r.log("Instance.emit", e, t, this.eventListeners[e]);
              for (var i = 0; i < this.eventListeners[e].length; i++) {
                  var M = this.eventListeners[e][i];
                  this.send(e, t, M)
              }
              return !0
          }
          ,
          r.Receiver.prototype.ready = function() {
              r.log("Receiver.ready"),
              this.isReady = !0;
              var e = {
                  src: A.location.toString(),
                  events: this.supported.events,
                  methods: this.supported.methods
              };
              this.emit("ready", e) || this.send("ready", e)
          }
          ,
          r.HTML5Adapter = function(e) {
              if (!(this instanceof r.HTML5Adapter))
                  return new r.HTML5Adapter(e);
              this.init(e)
          }
          ,
          r.HTML5Adapter.prototype.init = function(e) {
              r.assert(e, "playerjs.HTML5Adapter requires a video element");
              var t = this.receiver = new r.Receiver;
              e.addEventListener("playing", function() {
                  t.emit("play")
              }),
              e.addEventListener("pause", function() {
                  t.emit("pause")
              }),
              e.addEventListener("ended", function() {
                  t.emit("ended")
              }),
              e.addEventListener("timeupdate", function() {
                  t.emit("timeupdate", {
                      seconds: e.currentTime,
                      duration: e.duration
                  })
              }),
              e.addEventListener("progress", function() {
                  t.emit("buffered", {
                      percent: e.buffered.length
                  })
              }),
              t.on("play", function() {
                  e.play()
              }),
              t.on("pause", function() {
                  e.pause()
              }),
              t.on("getPaused", function(t) {
                  t(e.paused)
              }),
              t.on("getCurrentTime", function(t) {
                  t(e.currentTime)
              }),
              t.on("setCurrentTime", function(t) {
                  e.currentTime = t
              }),
              t.on("getDuration", function(t) {
                  t(e.duration)
              }),
              t.on("getVolume", function(t) {
                  t(100 * e.volume)
              }),
              t.on("setVolume", function(t) {
                  e.volume = t / 100
              }),
              t.on("mute", function() {
                  e.muted = !0
              }),
              t.on("unmute", function() {
                  e.muted = !1
              }),
              t.on("getMuted", function(t) {
                  t(e.muted)
              }),
              t.on("getLoop", function(t) {
                  t(e.loop)
              }),
              t.on("setLoop", function(t) {
                  e.loop = t
              })
          }
          ,
          r.HTML5Adapter.prototype.ready = function() {
              this.receiver.ready()
          }
          ,
          r.JWPlayerAdapter = function(e) {
              if (!(this instanceof r.JWPlayerAdapter))
                  return new r.JWPlayerAdapter(e);
              this.init(e)
          }
          ,
          r.JWPlayerAdapter.prototype.init = function(e) {
              r.assert(e, "playerjs.JWPlayerAdapter requires a player object");
              var t = this.receiver = new r.Receiver;
              this.looped = !1,
              e.on("pause", function() {
                  t.emit("pause")
              }),
              e.on("play", function() {
                  t.emit("play")
              }),
              e.on("time", function(e) {
                  var i = e.position
                    , M = e.duration;
                  if (!i || !M)
                      return !1;
                  var A = {
                      seconds: i,
                      duration: M
                  };
                  t.emit("timeupdate", A)
              });
              var i = this;
              e.on("complete", function() {
                  !0 === i.looped ? e.seek(0) : t.emit("ended")
              }),
              e.on("error", function() {
                  t.emit("error")
              }),
              t.on("play", function() {
                  e.play(!0)
              }),
              t.on("pause", function() {
                  e.pause(!0)
              }),
              t.on("getPaused", function(t) {
                  t(e.getState().toLowerCase() !== "PLAYING".toLowerCase())
              }),
              t.on("getCurrentTime", function(t) {
                  t(e.getPosition())
              }),
              t.on("setCurrentTime", function(t) {
                  e.seek(t)
              }),
              t.on("getDuration", function(t) {
                  t(e.getDuration())
              }),
              t.on("getVolume", function(t) {
                  t(e.getVolume())
              }),
              t.on("setVolume", function(t) {
                  e.setVolume(t)
              }),
              t.on("mute", function() {
                  e.setMute(!0)
              }),
              t.on("unmute", function() {
                  e.setMute(!1)
              }),
              t.on("getMuted", function(t) {
                  t(!0 === e.getMute())
              }),
              t.on("getLoop", function(e) {
                  e(this.looped)
              }, this),
              t.on("setLoop", function(e) {
                  this.looped = e
              }, this)
          }
          ,
          r.JWPlayerAdapter.prototype.ready = function() {
              this.receiver.ready()
          }
          ,
          r.MockAdapter = function() {
              if (!(this instanceof r.MockAdapter))
                  return new r.MockAdapter;
              this.init()
          }
          ,
          r.MockAdapter.prototype.init = function() {
              var e = {
                  duration: 20,
                  currentTime: 0,
                  interval: null,
                  timeupdate: function() {},
                  volume: 100,
                  mute: !1,
                  playing: !1,
                  loop: !1,
                  play: function() {
                      e.interval = setInterval(function() {
                          e.currentTime += .25,
                          e.timeupdate({
                              seconds: e.currentTime,
                              duration: e.duration
                          })
                      }, 250),
                      e.playing = !0
                  },
                  pause: function() {
                      clearInterval(e.interval),
                      e.playing = !1
                  }
              }
                , t = this.receiver = new r.Receiver;
              t.on("play", function() {
                  var t = this;
                  e.play(),
                  this.emit("play"),
                  e.timeupdate = function(e) {
                      t.emit("timeupdate", e)
                  }
              }),
              t.on("pause", function() {
                  e.pause(),
                  this.emit("pause")
              }),
              t.on("getPaused", function(t) {
                  t(!e.playing)
              }),
              t.on("getCurrentTime", function(t) {
                  t(e.currentTime)
              }),
              t.on("setCurrentTime", function(t) {
                  e.currentTime = t
              }),
              t.on("getDuration", function(t) {
                  t(e.duration)
              }),
              t.on("getVolume", function(t) {
                  t(e.volume)
              }),
              t.on("setVolume", function(t) {
                  e.volume = t
              }),
              t.on("mute", function() {
                  e.mute = !0
              }),
              t.on("unmute", function() {
                  e.mute = !1
              }),
              t.on("getMuted", function(t) {
                  t(e.mute)
              }),
              t.on("getLoop", function(t) {
                  t(e.loop)
              }),
              t.on("setLoop", function(t) {
                  e.loop = t
              })
          }
          ,
          r.MockAdapter.prototype.ready = function() {
              this.receiver.ready()
          }
          ,
          r.VideoJSAdapter = function(e) {
              if (!(this instanceof r.VideoJSAdapter))
                  return new r.VideoJSAdapter(e);
              this.init(e)
          }
          ,
          r.VideoJSAdapter.prototype.init = function(e) {
              r.assert(e, "playerjs.VideoJSReceiver requires a player object");
              var t = this.receiver = new r.Receiver;
              e.on("pause", function() {
                  t.emit("pause")
              }),
              e.on("play", function() {
                  t.emit("play")
              }),
              e.on("timeupdate", function(i) {
                  var M = e.currentTime()
                    , A = e.duration();
                  if (!M || !A)
                      return !1;
                  var s = {
                      seconds: M,
                      duration: A
                  };
                  t.emit("timeupdate", s)
              }),
              e.on("ended", function() {
                  t.emit("ended")
              }),
              e.on("error", function() {
                  t.emit("error")
              }),
              t.on("play", function() {
                  e.play()
              }),
              t.on("pause", function() {
                  e.pause()
              }),
              t.on("getPaused", function(t) {
                  t(e.paused())
              }),
              t.on("getCurrentTime", function(t) {
                  t(e.currentTime())
              }),
              t.on("setCurrentTime", function(t) {
                  e.currentTime(t)
              }),
              t.on("getDuration", function(t) {
                  t(e.duration())
              }),
              t.on("getVolume", function(t) {
                  t(100 * e.volume())
              }),
              t.on("setVolume", function(t) {
                  e.volume(t / 100)
              }),
              t.on("mute", function() {
                  e.volume(0)
              }),
              t.on("unmute", function() {
                  e.volume(1)
              }),
              t.on("getMuted", function(t) {
                  t(0 === e.volume())
              }),
              t.on("getLoop", function(t) {
                  t(e.loop())
              }),
              t.on("setLoop", function(t) {
                  e.loop(t)
              })
          }
          ,
          r.VideoJSAdapter.prototype.ready = function() {
              this.receiver.ready()
          }
          ,
          void 0 === (M = function() {
              return r
          }
          .call(t, i, t, e)) || (e.exports = M)
      }(window, document)
  },
  429: function(e, t, i) {
      (function(t) {
          /**
* @license
* webvr-polyfill
* Copyright (c) 2015-2017 Google
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
          /**
* @license
* cardboard-vr-display
* Copyright (c) 2015-2017 Google
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
          /**
* @license
* webvr-polyfill-dpdb 
* Copyright (c) 2017 Google
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
          /**
* @license
* wglu-preserve-state
* Copyright (c) 2016, Brandon Jones.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
          /**
* @license
* nosleep.js
* Copyright (c) 2017, Rich Tibbett
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
          var i;
          i = function() {
              "use strict";
              var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
              var i, M, A = function() {
                  return /Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)
              }, s = function(e, t) {
                  for (var i = 0, M = e.length; i < M; i++)
                      t[i] = e[i]
              }, r = function(e, t) {
                  for (var i in t)
                      t.hasOwnProperty(i) && (e[i] = t[i]);
                  return e
              }, n = (function(t, i) {
                  /**
* @license
* cardboard-vr-display
* Copyright (c) 2015-2017 Google
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
                  /**
* @license
* gl-preserve-state
* Copyright (c) 2016, Brandon Jones.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
                  /**
* @license
* webvr-polyfill-dpdb
* Copyright (c) 2015-2017 Google
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
                  /**
* @license
* nosleep.js
* Copyright (c) 2017, Rich Tibbett
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
                  t.exports = function() {
                      var t, i, M, A = function(e, t) {
                          if (!(e instanceof t))
                              throw new TypeError("Cannot call a class as a function")
                      }, s = function() {
                          function e(e, t) {
                              for (var i = 0; i < t.length; i++) {
                                  var M = t[i];
                                  M.enumerable = M.enumerable || !1,
                                  M.configurable = !0,
                                  "value"in M && (M.writable = !0),
                                  Object.defineProperty(e, M.key, M)
                              }
                          }
                          return function(t, i, M) {
                              return i && e(t.prototype, i),
                              M && e(t, M),
                              t
                          }
                      }(), r = function(e, t) {
                          if (Array.isArray(e))
                              return e;
                          if (Symbol.iterator in Object(e))
                              return function(e, t) {
                                  var i = []
                                    , M = !0
                                    , A = !1
                                    , s = void 0;
                                  try {
                                      for (var r, n = e[Symbol.iterator](); !(M = (r = n.next()).done) && (i.push(r.value),
                                      !t || i.length !== t); M = !0)
                                          ;
                                  } catch (e) {
                                      A = !0,
                                      s = e
                                  } finally {
                                      try {
                                          !M && n.return && n.return()
                                      } finally {
                                          if (A)
                                              throw s
                                      }
                                  }
                                  return i
                              }(e, t);
                          throw new TypeError("Invalid attempt to destructure non-iterable instance")
                      }, n = function(e, t, i) {
                          return e + (t - e) * i
                      }, N = function() {
                          var e = /iPad|iPhone|iPod/.test(navigator.platform);
                          return function() {
                              return e
                          }
                      }(), u = function() {
                          var e = -1 !== navigator.userAgent.indexOf("Version") && -1 !== navigator.userAgent.indexOf("Android") && -1 !== navigator.userAgent.indexOf("Chrome");
                          return function() {
                              return e
                          }
                      }(), D = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                      function() {
                          var e = -1 !== navigator.userAgent.indexOf("Firefox") && -1 !== navigator.userAgent.indexOf("Android");
                          return function() {
                              return e
                          }
                      }()), o = (i = navigator.userAgent.match(/.*Chrome\/([0-9]+)/),
                      M = i ? parseInt(i[1], 10) : null,
                      function() {
                          return M
                      }
                      ), a = function() {
                          var e = !1;
                          if (65 === o()) {
                              var t = navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);
                              if (t) {
                                  var i = t[1].split(".")
                                    , M = r(i, 4)
                                    , A = (M[0],
                                  M[1],
                                  M[2])
                                    , s = M[3];
                                  e = 3325 === parseInt(A, 10) && parseInt(s, 10) < 148
                              }
                          }
                          return function() {
                              return e
                          }
                      }(), g = function() {
                          var e = -1 !== navigator.userAgent.indexOf("R7 Build");
                          return function() {
                              return e
                          }
                      }(), L = function() {
                          var e = 90 == window.orientation || -90 == window.orientation;
                          return g() ? !e : e
                      }, c = function() {
                          return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio
                      }, I = function() {
                          return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio
                      }, j = function() {
                          if (document.exitFullscreen)
                              document.exitFullscreen();
                          else if (document.webkitExitFullscreen)
                              document.webkitExitFullscreen();
                          else if (document.mozCancelFullScreen)
                              document.mozCancelFullScreen();
                          else {
                              if (!document.msExitFullscreen)
                                  return !1;
                              document.msExitFullscreen()
                          }
                          return !0
                      }, T = function(e, t, i, M) {
                          var A = e.createShader(e.VERTEX_SHADER);
                          e.shaderSource(A, t),
                          e.compileShader(A);
                          var s = e.createShader(e.FRAGMENT_SHADER);
                          e.shaderSource(s, i),
                          e.compileShader(s);
                          var r = e.createProgram();
                          for (var n in e.attachShader(r, A),
                          e.attachShader(r, s),
                          M)
                              e.bindAttribLocation(r, M[n], n);
                          return e.linkProgram(r),
                          e.deleteShader(A),
                          e.deleteShader(s),
                          r
                      }, E = function(e, t) {
                          for (var i = {}, M = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), A = "", s = 0; s < M; s++) {
                              var r = e.getActiveUniform(t, s);
                              A = r.name.replace("[0]", ""),
                              i[A] = e.getUniformLocation(t, A)
                          }
                          return i
                      }, y = function() {
                          var e, t = !1;
                          return e = navigator.userAgent || navigator.vendor || window.opera,
                          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
                          t
                      }, w = function(e, t) {
                          for (var i in t)
                              t.hasOwnProperty(i) && (e[i] = t[i]);
                          return e
                      }, l = function(e) {
                          if (N()) {
                              var t = e.style.width
                                , i = e.style.height;
                              e.style.width = parseInt(t) + 1 + "px",
                              e.style.height = parseInt(i) + "px",
                              setTimeout(function() {
                                  e.style.width = t,
                                  e.style.height = i
                              }, 100)
                          }
                          window.canvas = e
                      }, h = function() {
                          var e = Math.PI / 180
                            , t = .25 * Math.PI
                            , i = new Float32Array([0, 0, 0, 1])
                            , M = new Float32Array([0, 0, 0]);
                          function A(A, s, r, n, N, u) {
                              !function(i, M, A, s) {
                                  var r = Math.tan(M ? M.upDegrees * e : t)
                                    , n = Math.tan(M ? M.downDegrees * e : t)
                                    , N = Math.tan(M ? M.leftDegrees * e : t)
                                    , u = Math.tan(M ? M.rightDegrees * e : t)
                                    , D = 2 / (N + u)
                                    , o = 2 / (r + n);
                                  i[0] = D,
                                  i[1] = 0,
                                  i[2] = 0,
                                  i[3] = 0,
                                  i[4] = 0,
                                  i[5] = o,
                                  i[6] = 0,
                                  i[7] = 0,
                                  i[8] = -(N - u) * D * .5,
                                  i[9] = (r - n) * o * .5,
                                  i[10] = s / (A - s),
                                  i[11] = -1,
                                  i[12] = 0,
                                  i[13] = 0,
                                  i[14] = s * A / (A - s),
                                  i[15] = 0
                              }(A, n || null, u.depthNear, u.depthFar);
                              var D, o, a, g, L, c, I, j, T, E, y, w, l, h, d, z, O, x, C, p = r.orientation || i, S = r.position || M;
                              D = s,
                              a = S,
                              g = (o = p)[0],
                              L = o[1],
                              c = o[2],
                              I = o[3],
                              y = g * (j = g + g),
                              w = g * (T = L + L),
                              l = g * (E = c + c),
                              h = L * T,
                              d = L * E,
                              z = c * E,
                              O = I * j,
                              x = I * T,
                              C = I * E,
                              D[0] = 1 - (h + z),
                              D[1] = w + C,
                              D[2] = l - x,
                              D[3] = 0,
                              D[4] = w - C,
                              D[5] = 1 - (y + z),
                              D[6] = d + O,
                              D[7] = 0,
                              D[8] = l + x,
                              D[9] = d - O,
                              D[10] = 1 - (y + h),
                              D[11] = 0,
                              D[12] = a[0],
                              D[13] = a[1],
                              D[14] = a[2],
                              D[15] = 1,
                              N && function(e, t, i) {
                                  var M, A, s, r, n, N, u, D, o, a, g, L, c = i[0], I = i[1], j = i[2];
                                  t === e ? (e[12] = t[0] * c + t[4] * I + t[8] * j + t[12],
                                  e[13] = t[1] * c + t[5] * I + t[9] * j + t[13],
                                  e[14] = t[2] * c + t[6] * I + t[10] * j + t[14],
                                  e[15] = t[3] * c + t[7] * I + t[11] * j + t[15]) : (M = t[0],
                                  A = t[1],
                                  s = t[2],
                                  r = t[3],
                                  n = t[4],
                                  N = t[5],
                                  u = t[6],
                                  D = t[7],
                                  o = t[8],
                                  a = t[9],
                                  g = t[10],
                                  L = t[11],
                                  e[0] = M,
                                  e[1] = A,
                                  e[2] = s,
                                  e[3] = r,
                                  e[4] = n,
                                  e[5] = N,
                                  e[6] = u,
                                  e[7] = D,
                                  e[8] = o,
                                  e[9] = a,
                                  e[10] = g,
                                  e[11] = L,
                                  e[12] = M * c + n * I + o * j + t[12],
                                  e[13] = A * c + N * I + a * j + t[13],
                                  e[14] = s * c + u * I + g * j + t[14],
                                  e[15] = r * c + D * I + L * j + t[15])
                              }(s, s, N),
                              function(e, t) {
                                  var i = t[0]
                                    , M = t[1]
                                    , A = t[2]
                                    , s = t[3]
                                    , r = t[4]
                                    , n = t[5]
                                    , N = t[6]
                                    , u = t[7]
                                    , D = t[8]
                                    , o = t[9]
                                    , a = t[10]
                                    , g = t[11]
                                    , L = t[12]
                                    , c = t[13]
                                    , I = t[14]
                                    , j = t[15]
                                    , T = i * n - M * r
                                    , E = i * N - A * r
                                    , y = i * u - s * r
                                    , w = M * N - A * n
                                    , l = M * u - s * n
                                    , h = A * u - s * N
                                    , d = D * c - o * L
                                    , z = D * I - a * L
                                    , O = D * j - g * L
                                    , x = o * I - a * c
                                    , C = o * j - g * c
                                    , p = a * j - g * I
                                    , S = T * p - E * C + y * x + w * O - l * z + h * d;
                                  if (!S)
                                      return null;
                                  S = 1 / S,
                                  e[0] = (n * p - N * C + u * x) * S,
                                  e[1] = (A * C - M * p - s * x) * S,
                                  e[2] = (c * h - I * l + j * w) * S,
                                  e[3] = (a * l - o * h - g * w) * S,
                                  e[4] = (N * O - r * p - u * z) * S,
                                  e[5] = (i * p - A * O + s * z) * S,
                                  e[6] = (I * y - L * h - j * E) * S,
                                  e[7] = (D * h - a * y + g * E) * S,
                                  e[8] = (r * C - n * O + u * d) * S,
                                  e[9] = (M * O - i * C - s * d) * S,
                                  e[10] = (L * l - c * y + j * T) * S,
                                  e[11] = (o * y - D * l - g * T) * S,
                                  e[12] = (n * z - r * x - N * d) * S,
                                  e[13] = (i * x - M * z + A * d) * S,
                                  e[14] = (c * E - L * w - I * T) * S,
                                  e[15] = (D * w - o * E + a * T) * S
                              }(s, s)
                          }
                          return function(e, t, i) {
                              return !(!e || !t || (e.pose = t,
                              e.timestamp = t.timestamp,
                              A(e.leftProjectionMatrix, e.leftViewMatrix, t, i._getFieldOfView("left"), i._getEyeOffset("left"), i),
                              A(e.rightProjectionMatrix, e.rightViewMatrix, t, i._getFieldOfView("right"), i._getEyeOffset("right"), i),
                              0))
                          }
                      }(), d = function(e) {
                          var t, i = e.indexOf("://");
                          t = -1 !== i ? i + 3 : 0;
                          var M = e.indexOf("/", t);
                          return -1 === M && (M = e.length),
                          e.substring(0, M)
                      }, z = (t = {},
                      function(e, i) {
                          void 0 === t[e] && (console.warn("webvr-polyfill: " + i),
                          t[e] = !0)
                      }
                      ), O = function(e, t) {
                          var i = t ? "Please use " + t + " instead." : "";
                          z(e, e + " has been deprecated. This may not work on native WebVR displays. " + i)
                      }, x = function(e, t, i) {
                          if (t) {
                              for (var M = [], A = null, s = 0; s < t.length; ++s) {
                                  var r = t[s];
                                  switch (r) {
                                  case e.TEXTURE_BINDING_2D:
                                  case e.TEXTURE_BINDING_CUBE_MAP:
                                      var n = t[++s];
                                      if (n < e.TEXTURE0 || n > e.TEXTURE31) {
                                          console.error("TEXTURE_BINDING_2D or TEXTURE_BINDING_CUBE_MAP must be followed by a valid texture unit"),
                                          M.push(null, null);
                                          break
                                      }
                                      A || (A = e.getParameter(e.ACTIVE_TEXTURE)),
                                      e.activeTexture(n),
                                      M.push(e.getParameter(r), null);
                                      break;
                                  case e.ACTIVE_TEXTURE:
                                      A = e.getParameter(e.ACTIVE_TEXTURE),
                                      M.push(null);
                                      break;
                                  default:
                                      M.push(e.getParameter(r))
                                  }
                              }
                              i(e);
                              for (var s = 0; s < t.length; ++s) {
                                  var r = t[s]
                                    , N = M[s];
                                  switch (r) {
                                  case e.ACTIVE_TEXTURE:
                                      break;
                                  case e.ARRAY_BUFFER_BINDING:
                                      e.bindBuffer(e.ARRAY_BUFFER, N);
                                      break;
                                  case e.COLOR_CLEAR_VALUE:
                                      e.clearColor(N[0], N[1], N[2], N[3]);
                                      break;
                                  case e.COLOR_WRITEMASK:
                                      e.colorMask(N[0], N[1], N[2], N[3]);
                                      break;
                                  case e.CURRENT_PROGRAM:
                                      e.useProgram(N);
                                      break;
                                  case e.ELEMENT_ARRAY_BUFFER_BINDING:
                                      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, N);
                                      break;
                                  case e.FRAMEBUFFER_BINDING:
                                      e.bindFramebuffer(e.FRAMEBUFFER, N);
                                      break;
                                  case e.RENDERBUFFER_BINDING:
                                      e.bindRenderbuffer(e.RENDERBUFFER, N);
                                      break;
                                  case e.TEXTURE_BINDING_2D:
                                      var n = t[++s];
                                      if (n < e.TEXTURE0 || n > e.TEXTURE31)
                                          break;
                                      e.activeTexture(n),
                                      e.bindTexture(e.TEXTURE_2D, N);
                                      break;
                                  case e.TEXTURE_BINDING_CUBE_MAP:
                                      var n = t[++s];
                                      if (n < e.TEXTURE0 || n > e.TEXTURE31)
                                          break;
                                      e.activeTexture(n),
                                      e.bindTexture(e.TEXTURE_CUBE_MAP, N);
                                      break;
                                  case e.VIEWPORT:
                                      e.viewport(N[0], N[1], N[2], N[3]);
                                      break;
                                  case e.BLEND:
                                  case e.CULL_FACE:
                                  case e.DEPTH_TEST:
                                  case e.SCISSOR_TEST:
                                  case e.STENCIL_TEST:
                                      N ? e.enable(r) : e.disable(r);
                                      break;
                                  default:
                                      console.log("No GL restore behavior for 0x" + r.toString(16))
                                  }
                                  A && e.activeTexture(A)
                              }
                          } else
                              i(e)
                      }, C = ["attribute vec2 position;", "attribute vec3 texCoord;", "varying vec2 vTexCoord;", "uniform vec4 viewportOffsetScale[2];", "void main() {", "  vec4 viewport = viewportOffsetScale[int(texCoord.z)];", "  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;", "  gl_Position = vec4( position, 1.0, 1.0 );", "}"].join("\n"), p = ["precision mediump float;", "uniform sampler2D diffuse;", "varying vec2 vTexCoord;", "void main() {", "  gl_FragColor = texture2D(diffuse, vTexCoord);", "}"].join("\n");
                      function S(e, t, i, M) {
                          this.gl = e,
                          this.cardboardUI = t,
                          this.bufferScale = i,
                          this.dirtySubmitFrameBindings = M,
                          this.ctxAttribs = e.getContextAttributes(),
                          this.meshWidth = 20,
                          this.meshHeight = 20,
                          this.bufferWidth = e.drawingBufferWidth,
                          this.bufferHeight = e.drawingBufferHeight,
                          this.realBindFramebuffer = e.bindFramebuffer,
                          this.realEnable = e.enable,
                          this.realDisable = e.disable,
                          this.realColorMask = e.colorMask,
                          this.realClearColor = e.clearColor,
                          this.realViewport = e.viewport,
                          N() || (this.realCanvasWidth = Object.getOwnPropertyDescriptor(e.canvas.__proto__, "width"),
                          this.realCanvasHeight = Object.getOwnPropertyDescriptor(e.canvas.__proto__, "height")),
                          this.isPatched = !1,
                          this.lastBoundFramebuffer = null,
                          this.cullFace = !1,
                          this.depthTest = !1,
                          this.blend = !1,
                          this.scissorTest = !1,
                          this.stencilTest = !1,
                          this.viewport = [0, 0, 0, 0],
                          this.colorMask = [!0, !0, !0, !0],
                          this.clearColor = [0, 0, 0, 0],
                          this.attribs = {
                              position: 0,
                              texCoord: 1
                          },
                          this.program = T(e, C, p, this.attribs),
                          this.uniforms = E(e, this.program),
                          this.viewportOffsetScale = new Float32Array(8),
                          this.setTextureBounds(),
                          this.vertexBuffer = e.createBuffer(),
                          this.indexBuffer = e.createBuffer(),
                          this.indexCount = 0,
                          this.renderTarget = e.createTexture(),
                          this.framebuffer = e.createFramebuffer(),
                          this.depthStencilBuffer = null,
                          this.depthBuffer = null,
                          this.stencilBuffer = null,
                          this.ctxAttribs.depth && this.ctxAttribs.stencil ? this.depthStencilBuffer = e.createRenderbuffer() : this.ctxAttribs.depth ? this.depthBuffer = e.createRenderbuffer() : this.ctxAttribs.stencil && (this.stencilBuffer = e.createRenderbuffer()),
                          this.patch(),
                          this.onResize()
                      }
                      S.prototype.destroy = function() {
                          var e = this.gl;
                          this.unpatch(),
                          e.deleteProgram(this.program),
                          e.deleteBuffer(this.vertexBuffer),
                          e.deleteBuffer(this.indexBuffer),
                          e.deleteTexture(this.renderTarget),
                          e.deleteFramebuffer(this.framebuffer),
                          this.depthStencilBuffer && e.deleteRenderbuffer(this.depthStencilBuffer),
                          this.depthBuffer && e.deleteRenderbuffer(this.depthBuffer),
                          this.stencilBuffer && e.deleteRenderbuffer(this.stencilBuffer),
                          this.cardboardUI && this.cardboardUI.destroy()
                      }
                      ,
                      S.prototype.onResize = function() {
                          var e = this.gl
                            , t = this
                            , i = [e.RENDERBUFFER_BINDING, e.TEXTURE_BINDING_2D, e.TEXTURE0];
                          x(e, i, function(e) {
                              t.realBindFramebuffer.call(e, e.FRAMEBUFFER, null),
                              t.scissorTest && t.realDisable.call(e, e.SCISSOR_TEST),
                              t.realColorMask.call(e, !0, !0, !0, !0),
                              t.realViewport.call(e, 0, 0, e.drawingBufferWidth, e.drawingBufferHeight),
                              t.realClearColor.call(e, 0, 0, 0, 1),
                              e.clear(e.COLOR_BUFFER_BIT),
                              t.realBindFramebuffer.call(e, e.FRAMEBUFFER, t.framebuffer),
                              e.bindTexture(e.TEXTURE_2D, t.renderTarget),
                              e.texImage2D(e.TEXTURE_2D, 0, t.ctxAttribs.alpha ? e.RGBA : e.RGB, t.bufferWidth, t.bufferHeight, 0, t.ctxAttribs.alpha ? e.RGBA : e.RGB, e.UNSIGNED_BYTE, null),
                              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
                              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                              e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.renderTarget, 0),
                              t.ctxAttribs.depth && t.ctxAttribs.stencil ? (e.bindRenderbuffer(e.RENDERBUFFER, t.depthStencilBuffer),
                              e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.bufferWidth, t.bufferHeight),
                              e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t.depthStencilBuffer)) : t.ctxAttribs.depth ? (e.bindRenderbuffer(e.RENDERBUFFER, t.depthBuffer),
                              e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, t.bufferWidth, t.bufferHeight),
                              e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t.depthBuffer)) : t.ctxAttribs.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, t.stencilBuffer),
                              e.renderbufferStorage(e.RENDERBUFFER, e.STENCIL_INDEX8, t.bufferWidth, t.bufferHeight),
                              e.framebufferRenderbuffer(e.FRAMEBUFFER, e.STENCIL_ATTACHMENT, e.RENDERBUFFER, t.stencilBuffer)),
                              !e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE && console.error("Framebuffer incomplete!"),
                              t.realBindFramebuffer.call(e, e.FRAMEBUFFER, t.lastBoundFramebuffer),
                              t.scissorTest && t.realEnable.call(e, e.SCISSOR_TEST),
                              t.realColorMask.apply(e, t.colorMask),
                              t.realViewport.apply(e, t.viewport),
                              t.realClearColor.apply(e, t.clearColor)
                          }),
                          this.cardboardUI && this.cardboardUI.onResize()
                      }
                      ,
                      S.prototype.patch = function() {
                          if (!this.isPatched) {
                              var e = this
                                , t = this.gl.canvas
                                , i = this.gl;
                              N() || (t.width = c() * this.bufferScale,
                              t.height = I() * this.bufferScale,
                              Object.defineProperty(t, "width", {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: function() {
                                      return e.bufferWidth
                                  },
                                  set: function(i) {
                                      e.bufferWidth = i,
                                      e.realCanvasWidth.set.call(t, i),
                                      e.onResize()
                                  }
                              }),
                              Object.defineProperty(t, "height", {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: function() {
                                      return e.bufferHeight
                                  },
                                  set: function(i) {
                                      e.bufferHeight = i,
                                      e.realCanvasHeight.set.call(t, i),
                                      e.onResize()
                                  }
                              })),
                              this.lastBoundFramebuffer = i.getParameter(i.FRAMEBUFFER_BINDING),
                              null == this.lastBoundFramebuffer && (this.lastBoundFramebuffer = this.framebuffer,
                              this.gl.bindFramebuffer(i.FRAMEBUFFER, this.framebuffer)),
                              this.gl.bindFramebuffer = function(t, M) {
                                  e.lastBoundFramebuffer = M || e.framebuffer,
                                  e.realBindFramebuffer.call(i, t, e.lastBoundFramebuffer)
                              }
                              ,
                              this.cullFace = i.getParameter(i.CULL_FACE),
                              this.depthTest = i.getParameter(i.DEPTH_TEST),
                              this.blend = i.getParameter(i.BLEND),
                              this.scissorTest = i.getParameter(i.SCISSOR_TEST),
                              this.stencilTest = i.getParameter(i.STENCIL_TEST),
                              i.enable = function(t) {
                                  switch (t) {
                                  case i.CULL_FACE:
                                      e.cullFace = !0;
                                      break;
                                  case i.DEPTH_TEST:
                                      e.depthTest = !0;
                                      break;
                                  case i.BLEND:
                                      e.blend = !0;
                                      break;
                                  case i.SCISSOR_TEST:
                                      e.scissorTest = !0;
                                      break;
                                  case i.STENCIL_TEST:
                                      e.stencilTest = !0
                                  }
                                  e.realEnable.call(i, t)
                              }
                              ,
                              i.disable = function(t) {
                                  switch (t) {
                                  case i.CULL_FACE:
                                      e.cullFace = !1;
                                      break;
                                  case i.DEPTH_TEST:
                                      e.depthTest = !1;
                                      break;
                                  case i.BLEND:
                                      e.blend = !1;
                                      break;
                                  case i.SCISSOR_TEST:
                                      e.scissorTest = !1;
                                      break;
                                  case i.STENCIL_TEST:
                                      e.stencilTest = !1
                                  }
                                  e.realDisable.call(i, t)
                              }
                              ,
                              this.colorMask = i.getParameter(i.COLOR_WRITEMASK),
                              i.colorMask = function(t, M, A, s) {
                                  e.colorMask[0] = t,
                                  e.colorMask[1] = M,
                                  e.colorMask[2] = A,
                                  e.colorMask[3] = s,
                                  e.realColorMask.call(i, t, M, A, s)
                              }
                              ,
                              this.clearColor = i.getParameter(i.COLOR_CLEAR_VALUE),
                              i.clearColor = function(t, M, A, s) {
                                  e.clearColor[0] = t,
                                  e.clearColor[1] = M,
                                  e.clearColor[2] = A,
                                  e.clearColor[3] = s,
                                  e.realClearColor.call(i, t, M, A, s)
                              }
                              ,
                              this.viewport = i.getParameter(i.VIEWPORT),
                              i.viewport = function(t, M, A, s) {
                                  e.viewport[0] = t,
                                  e.viewport[1] = M,
                                  e.viewport[2] = A,
                                  e.viewport[3] = s,
                                  e.realViewport.call(i, t, M, A, s)
                              }
                              ,
                              this.isPatched = !0,
                              l(t)
                          }
                      }
                      ,
                      S.prototype.unpatch = function() {
                          if (this.isPatched) {
                              var e = this.gl
                                , t = this.gl.canvas;
                              N() || (Object.defineProperty(t, "width", this.realCanvasWidth),
                              Object.defineProperty(t, "height", this.realCanvasHeight)),
                              t.width = this.bufferWidth,
                              t.height = this.bufferHeight,
                              e.bindFramebuffer = this.realBindFramebuffer,
                              e.enable = this.realEnable,
                              e.disable = this.realDisable,
                              e.colorMask = this.realColorMask,
                              e.clearColor = this.realClearColor,
                              e.viewport = this.realViewport,
                              this.lastBoundFramebuffer == this.framebuffer && e.bindFramebuffer(e.FRAMEBUFFER, null),
                              this.isPatched = !1,
                              setTimeout(function() {
                                  l(t)
                              }, 1)
                          }
                      }
                      ,
                      S.prototype.setTextureBounds = function(e, t) {
                          e || (e = [0, 0, .5, 1]),
                          t || (t = [.5, 0, .5, 1]),
                          this.viewportOffsetScale[0] = e[0],
                          this.viewportOffsetScale[1] = e[1],
                          this.viewportOffsetScale[2] = e[2],
                          this.viewportOffsetScale[3] = e[3],
                          this.viewportOffsetScale[4] = t[0],
                          this.viewportOffsetScale[5] = t[1],
                          this.viewportOffsetScale[6] = t[2],
                          this.viewportOffsetScale[7] = t[3]
                      }
                      ,
                      S.prototype.submitFrame = function() {
                          var e = this.gl
                            , t = this
                            , i = [];
                          if (this.dirtySubmitFrameBindings || i.push(e.CURRENT_PROGRAM, e.ARRAY_BUFFER_BINDING, e.ELEMENT_ARRAY_BUFFER_BINDING, e.TEXTURE_BINDING_2D, e.TEXTURE0),
                          x(e, i, function(e) {
                              t.realBindFramebuffer.call(e, e.FRAMEBUFFER, null),
                              t.cullFace && t.realDisable.call(e, e.CULL_FACE),
                              t.depthTest && t.realDisable.call(e, e.DEPTH_TEST),
                              t.blend && t.realDisable.call(e, e.BLEND),
                              t.scissorTest && t.realDisable.call(e, e.SCISSOR_TEST),
                              t.stencilTest && t.realDisable.call(e, e.STENCIL_TEST),
                              t.realColorMask.call(e, !0, !0, !0, !0),
                              t.realViewport.call(e, 0, 0, e.drawingBufferWidth, e.drawingBufferHeight),
                              (t.ctxAttribs.alpha || N()) && (t.realClearColor.call(e, 0, 0, 0, 1),
                              e.clear(e.COLOR_BUFFER_BIT)),
                              e.useProgram(t.program),
                              e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.indexBuffer),
                              e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer),
                              e.enableVertexAttribArray(t.attribs.position),
                              e.enableVertexAttribArray(t.attribs.texCoord),
                              e.vertexAttribPointer(t.attribs.position, 2, e.FLOAT, !1, 20, 0),
                              e.vertexAttribPointer(t.attribs.texCoord, 3, e.FLOAT, !1, 20, 8),
                              e.activeTexture(e.TEXTURE0),
                              e.uniform1i(t.uniforms.diffuse, 0),
                              e.bindTexture(e.TEXTURE_2D, t.renderTarget),
                              e.uniform4fv(t.uniforms.viewportOffsetScale, t.viewportOffsetScale),
                              e.drawElements(e.TRIANGLES, t.indexCount, e.UNSIGNED_SHORT, 0),
                              t.cardboardUI && t.cardboardUI.renderNoState(),
                              t.realBindFramebuffer.call(t.gl, e.FRAMEBUFFER, t.framebuffer),
                              t.ctxAttribs.preserveDrawingBuffer || (t.realClearColor.call(e, 0, 0, 0, 0),
                              e.clear(e.COLOR_BUFFER_BIT)),
                              t.dirtySubmitFrameBindings || t.realBindFramebuffer.call(e, e.FRAMEBUFFER, t.lastBoundFramebuffer),
                              t.cullFace && t.realEnable.call(e, e.CULL_FACE),
                              t.depthTest && t.realEnable.call(e, e.DEPTH_TEST),
                              t.blend && t.realEnable.call(e, e.BLEND),
                              t.scissorTest && t.realEnable.call(e, e.SCISSOR_TEST),
                              t.stencilTest && t.realEnable.call(e, e.STENCIL_TEST),
                              t.realColorMask.apply(e, t.colorMask),
                              t.realViewport.apply(e, t.viewport),
                              !t.ctxAttribs.alpha && t.ctxAttribs.preserveDrawingBuffer || t.realClearColor.apply(e, t.clearColor)
                          }),
                          N()) {
                              var M = e.canvas;
                              M.width == t.bufferWidth && M.height == t.bufferHeight || (t.bufferWidth = M.width,
                              t.bufferHeight = M.height,
                              t.onResize())
                          }
                      }
                      ,
                      S.prototype.updateDeviceInfo = function(e) {
                          var t = this.gl
                            , i = this
                            , M = [t.ARRAY_BUFFER_BINDING, t.ELEMENT_ARRAY_BUFFER_BINDING];
                          x(t, M, function(t) {
                              var M = i.computeMeshVertices_(i.meshWidth, i.meshHeight, e);
                              if (t.bindBuffer(t.ARRAY_BUFFER, i.vertexBuffer),
                              t.bufferData(t.ARRAY_BUFFER, M, t.STATIC_DRAW),
                              !i.indexCount) {
                                  var A = i.computeMeshIndices_(i.meshWidth, i.meshHeight);
                                  t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i.indexBuffer),
                                  t.bufferData(t.ELEMENT_ARRAY_BUFFER, A, t.STATIC_DRAW),
                                  i.indexCount = A.length
                              }
                          })
                      }
                      ,
                      S.prototype.computeMeshVertices_ = function(e, t, i) {
                          for (var M = new Float32Array(2 * e * t * 5), A = i.getLeftEyeVisibleTanAngles(), s = i.getLeftEyeNoLensTanAngles(), r = i.getLeftEyeVisibleScreenRect(s), N = 0, u = 0; u < 2; u++) {
                              for (var D = 0; D < t; D++)
                                  for (var o = 0; o < e; o++,
                                  N++) {
                                      var a = o / (e - 1)
                                        , g = D / (t - 1)
                                        , L = a
                                        , c = g
                                        , I = n(A[0], A[2], a)
                                        , j = n(A[3], A[1], g)
                                        , T = Math.sqrt(I * I + j * j)
                                        , E = i.distortion.distortInverse(T)
                                        , y = I * E / T
                                        , w = j * E / T;
                                      a = (y - s[0]) / (s[2] - s[0]),
                                      g = (w - s[3]) / (s[1] - s[3]),
                                      a = 2 * (r.x + a * r.width - .5),
                                      g = 2 * (r.y + g * r.height - .5),
                                      M[5 * N + 0] = a,
                                      M[5 * N + 1] = g,
                                      M[5 * N + 2] = L,
                                      M[5 * N + 3] = c,
                                      M[5 * N + 4] = u
                                  }
                              var l = A[2] - A[0];
                              A[0] = -(l + A[0]),
                              A[2] = l - A[2],
                              l = s[2] - s[0],
                              s[0] = -(l + s[0]),
                              s[2] = l - s[2],
                              r.x = 1 - (r.x + r.width)
                          }
                          return M
                      }
                      ,
                      S.prototype.computeMeshIndices_ = function(e, t) {
                          for (var i = new Uint16Array(2 * (e - 1) * (t - 1) * 6), M = e / 2, A = t / 2, s = 0, r = 0, n = 0; n < 2; n++)
                              for (var N = 0; N < t; N++)
                                  for (var u = 0; u < e; u++,
                                  s++)
                                      0 != u && 0 != N && (u <= M == N <= A ? (i[r++] = s,
                                      i[r++] = s - e - 1,
                                      i[r++] = s - e,
                                      i[r++] = s - e - 1,
                                      i[r++] = s,
                                      i[r++] = s - 1) : (i[r++] = s - 1,
                                      i[r++] = s - e,
                                      i[r++] = s,
                                      i[r++] = s - e,
                                      i[r++] = s - 1,
                                      i[r++] = s - e - 1));
                          return i
                      }
                      ,
                      S.prototype.getOwnPropertyDescriptor_ = function(e, t) {
                          var i = Object.getOwnPropertyDescriptor(e, t);
                          return void 0 !== i.get && void 0 !== i.set || (i.configurable = !0,
                          i.enumerable = !0,
                          i.get = function() {
                              return this.getAttribute(t)
                          }
                          ,
                          i.set = function(e) {
                              this.setAttribute(t, e)
                          }
                          ),
                          i
                      }
                      ;
                      var f = ["attribute vec2 position;", "uniform mat4 projectionMat;", "void main() {", "  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );", "}"].join("\n")
                        , Q = ["precision mediump float;", "uniform vec4 color;", "void main() {", "  gl_FragColor = color;", "}"].join("\n")
                        , m = Math.PI / 180
                        , k = .3125;
                      function U(e) {
                          this.gl = e,
                          this.attribs = {
                              position: 0
                          },
                          this.program = T(e, f, Q, this.attribs),
                          this.uniforms = E(e, this.program),
                          this.vertexBuffer = e.createBuffer(),
                          this.gearOffset = 0,
                          this.gearVertexCount = 0,
                          this.arrowOffset = 0,
                          this.arrowVertexCount = 0,
                          this.projMat = new Float32Array(16),
                          this.listener = null,
                          this.onResize()
                      }
                      function v(e) {
                          this.coefficients = e
                      }
                      U.prototype.destroy = function() {
                          var e = this.gl;
                          this.listener && e.canvas.removeEventListener("click", this.listener, !1),
                          e.deleteProgram(this.program),
                          e.deleteBuffer(this.vertexBuffer)
                      }
                      ,
                      U.prototype.listen = function(e, t) {
                          var i = this.gl.canvas;
                          this.listener = function(M) {
                              var A = i.clientWidth / 2;
                              M.clientX > A - 42 && M.clientX < A + 42 && M.clientY > i.clientHeight - 42 ? e(M) : M.clientX < 42 && M.clientY < 42 && t(M)
                          }
                          ,
                          i.addEventListener("click", this.listener, !1)
                      }
                      ,
                      U.prototype.onResize = function() {
                          var e = this.gl
                            , t = this
                            , i = [e.ARRAY_BUFFER_BINDING];
                          x(e, i, function(e) {
                              var i = []
                                , M = e.drawingBufferWidth / 2
                                , A = Math.max(screen.width, screen.height) * window.devicePixelRatio
                                , s = e.drawingBufferWidth / A
                                , r = s * window.devicePixelRatio
                                , n = 4 * r / 2
                                , N = 42 * r
                                , u = 28 * r / 2
                                , D = 14 * r;
                              function o(e, t) {
                                  var A = (90 - e) * m
                                    , s = Math.cos(A)
                                    , r = Math.sin(A);
                                  i.push(k * s * u + M, k * r * u + u),
                                  i.push(t * s * u + M, t * r * u + u)
                              }
                              i.push(M - n, N),
                              i.push(M - n, e.drawingBufferHeight),
                              i.push(M + n, N),
                              i.push(M + n, e.drawingBufferHeight),
                              t.gearOffset = i.length / 2;
                              for (var a = 0; a <= 6; a++) {
                                  var g = 60 * a;
                                  o(g, 1),
                                  o(g + 12, 1),
                                  o(g + 20, .75),
                                  o(g + 40, .75),
                                  o(g + 48, 1)
                              }
                              function L(t, M) {
                                  i.push(D + t, e.drawingBufferHeight - D - M)
                              }
                              t.gearVertexCount = i.length / 2 - t.gearOffset,
                              t.arrowOffset = i.length / 2;
                              var c = n / Math.sin(45 * m);
                              L(0, u),
                              L(u, 0),
                              L(u + c, c),
                              L(c, u + c),
                              L(c, u - c),
                              L(0, u),
                              L(u, 2 * u),
                              L(u + c, 2 * u - c),
                              L(c, u - c),
                              L(0, u),
                              L(c, u - n),
                              L(28 * r, u - n),
                              L(c, u + n),
                              L(28 * r, u + n),
                              t.arrowVertexCount = i.length / 2 - t.arrowOffset,
                              e.bindBuffer(e.ARRAY_BUFFER, t.vertexBuffer),
                              e.bufferData(e.ARRAY_BUFFER, new Float32Array(i), e.STATIC_DRAW)
                          })
                      }
                      ,
                      U.prototype.render = function() {
                          var e = this.gl
                            , t = this
                            , i = [e.CULL_FACE, e.DEPTH_TEST, e.BLEND, e.SCISSOR_TEST, e.STENCIL_TEST, e.COLOR_WRITEMASK, e.VIEWPORT, e.CURRENT_PROGRAM, e.ARRAY_BUFFER_BINDING];
                          x(e, i, function(e) {
                              e.disable(e.CULL_FACE),
                              e.disable(e.DEPTH_TEST),
                              e.disable(e.BLEND),
                              e.disable(e.SCISSOR_TEST),
                              e.disable(e.STENCIL_TEST),
                              e.colorMask(!0, !0, !0, !0),
                              e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight),
                              t.renderNoState()
                          })
                      }
                      ,
                      U.prototype.renderNoState = function() {
                          var e, t, i, M, A, s, r, n, N, u, D = this.gl;
                          D.useProgram(this.program),
                          D.bindBuffer(D.ARRAY_BUFFER, this.vertexBuffer),
                          D.enableVertexAttribArray(this.attribs.position),
                          D.vertexAttribPointer(this.attribs.position, 2, D.FLOAT, !1, 8, 0),
                          D.uniform4f(this.uniforms.color, 1, 1, 1, 1),
                          e = this.projMat,
                          t = 0,
                          i = D.drawingBufferWidth,
                          M = 0,
                          A = D.drawingBufferHeight,
                          n = 1 / (t - i),
                          N = 1 / (M - A),
                          u = 1 / ((s = .1) - (r = 1024)),
                          e[0] = -2 * n,
                          e[1] = 0,
                          e[2] = 0,
                          e[3] = 0,
                          e[4] = 0,
                          e[5] = -2 * N,
                          e[6] = 0,
                          e[7] = 0,
                          e[8] = 0,
                          e[9] = 0,
                          e[10] = 2 * u,
                          e[11] = 0,
                          e[12] = (t + i) * n,
                          e[13] = (A + M) * N,
                          e[14] = (r + s) * u,
                          e[15] = 1,
                          D.uniformMatrix4fv(this.uniforms.projectionMat, !1, this.projMat),
                          D.drawArrays(D.TRIANGLE_STRIP, 0, 4),
                          D.drawArrays(D.TRIANGLE_STRIP, this.gearOffset, this.gearVertexCount),
                          D.drawArrays(D.TRIANGLE_STRIP, this.arrowOffset, this.arrowVertexCount)
                      }
                      ,
                      v.prototype.distortInverse = function(e) {
                          for (var t = 0, i = 1, M = e - this.distort(t); Math.abs(i - t) > 1e-4; ) {
                              var A = e - this.distort(i)
                                , s = i - A * ((i - t) / (A - M));
                              t = i,
                              i = s,
                              M = A
                          }
                          return i
                      }
                      ,
                      v.prototype.distort = function(e) {
                          for (var t = e * e, i = 0, M = 0; M < this.coefficients.length; M++)
                              i = t * (i + this.coefficients[M]);
                          return (i + 1) * e
                      }
                      ;
                      var B = Math.PI / 180
                        , Y = 180 / Math.PI
                        , b = function(e, t, i) {
                          this.x = e || 0,
                          this.y = t || 0,
                          this.z = i || 0
                      };
                      b.prototype = {
                          constructor: b,
                          set: function(e, t, i) {
                              return this.x = e,
                              this.y = t,
                              this.z = i,
                              this
                          },
                          copy: function(e) {
                              return this.x = e.x,
                              this.y = e.y,
                              this.z = e.z,
                              this
                          },
                          length: function() {
                              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                          },
                          normalize: function() {
                              var e = this.length();
                              if (0 !== e) {
                                  var t = 1 / e;
                                  this.multiplyScalar(t)
                              } else
                                  this.x = 0,
                                  this.y = 0,
                                  this.z = 0;
                              return this
                          },
                          multiplyScalar: function(e) {
                              this.x *= e,
                              this.y *= e,
                              this.z *= e
                          },
                          applyQuaternion: function(e) {
                              var t = this.x
                                , i = this.y
                                , M = this.z
                                , A = e.x
                                , s = e.y
                                , r = e.z
                                , n = e.w
                                , N = n * t + s * M - r * i
                                , u = n * i + r * t - A * M
                                , D = n * M + A * i - s * t
                                , o = -A * t - s * i - r * M;
                              return this.x = N * n + o * -A + u * -r - D * -s,
                              this.y = u * n + o * -s + D * -A - N * -r,
                              this.z = D * n + o * -r + N * -s - u * -A,
                              this
                          },
                          dot: function(e) {
                              return this.x * e.x + this.y * e.y + this.z * e.z
                          },
                          crossVectors: function(e, t) {
                              var i = e.x
                                , M = e.y
                                , A = e.z
                                , s = t.x
                                , r = t.y
                                , n = t.z;
                              return this.x = M * n - A * r,
                              this.y = A * s - i * n,
                              this.z = i * r - M * s,
                              this
                          }
                      };
                      var R, _, G = function(e, t, i, M) {
                          this.x = e || 0,
                          this.y = t || 0,
                          this.z = i || 0,
                          this.w = void 0 !== M ? M : 1
                      };
                      function P(e) {
                          this.width = e.width || c(),
                          this.height = e.height || I(),
                          this.widthMeters = e.widthMeters,
                          this.heightMeters = e.heightMeters,
                          this.bevelMeters = e.bevelMeters
                      }
                      G.prototype = {
                          constructor: G,
                          set: function(e, t, i, M) {
                              return this.x = e,
                              this.y = t,
                              this.z = i,
                              this.w = M,
                              this
                          },
                          copy: function(e) {
                              return this.x = e.x,
                              this.y = e.y,
                              this.z = e.z,
                              this.w = e.w,
                              this
                          },
                          setFromEulerXYZ: function(e, t, i) {
                              var M = Math.cos(e / 2)
                                , A = Math.cos(t / 2)
                                , s = Math.cos(i / 2)
                                , r = Math.sin(e / 2)
                                , n = Math.sin(t / 2)
                                , N = Math.sin(i / 2);
                              return this.x = r * A * s + M * n * N,
                              this.y = M * n * s - r * A * N,
                              this.z = M * A * N + r * n * s,
                              this.w = M * A * s - r * n * N,
                              this
                          },
                          setFromEulerYXZ: function(e, t, i) {
                              var M = Math.cos(e / 2)
                                , A = Math.cos(t / 2)
                                , s = Math.cos(i / 2)
                                , r = Math.sin(e / 2)
                                , n = Math.sin(t / 2)
                                , N = Math.sin(i / 2);
                              return this.x = r * A * s + M * n * N,
                              this.y = M * n * s - r * A * N,
                              this.z = M * A * N - r * n * s,
                              this.w = M * A * s + r * n * N,
                              this
                          },
                          setFromAxisAngle: function(e, t) {
                              var i = t / 2
                                , M = Math.sin(i);
                              return this.x = e.x * M,
                              this.y = e.y * M,
                              this.z = e.z * M,
                              this.w = Math.cos(i),
                              this
                          },
                          multiply: function(e) {
                              return this.multiplyQuaternions(this, e)
                          },
                          multiplyQuaternions: function(e, t) {
                              var i = e.x
                                , M = e.y
                                , A = e.z
                                , s = e.w
                                , r = t.x
                                , n = t.y
                                , N = t.z
                                , u = t.w;
                              return this.x = i * u + s * r + M * N - A * n,
                              this.y = M * u + s * n + A * r - i * N,
                              this.z = A * u + s * N + i * n - M * r,
                              this.w = s * u - i * r - M * n - A * N,
                              this
                          },
                          inverse: function() {
                              return this.x *= -1,
                              this.y *= -1,
                              this.z *= -1,
                              this.normalize(),
                              this
                          },
                          normalize: function() {
                              var e = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                              return 0 === e ? (this.x = 0,
                              this.y = 0,
                              this.z = 0,
                              this.w = 1) : (e = 1 / e,
                              this.x = this.x * e,
                              this.y = this.y * e,
                              this.z = this.z * e,
                              this.w = this.w * e),
                              this
                          },
                          slerp: function(e, t) {
                              if (0 === t)
                                  return this;
                              if (1 === t)
                                  return this.copy(e);
                              var i = this.x
                                , M = this.y
                                , A = this.z
                                , s = this.w
                                , r = s * e.w + i * e.x + M * e.y + A * e.z;
                              if (r < 0 ? (this.w = -e.w,
                              this.x = -e.x,
                              this.y = -e.y,
                              this.z = -e.z,
                              r = -r) : this.copy(e),
                              r >= 1)
                                  return this.w = s,
                                  this.x = i,
                                  this.y = M,
                                  this.z = A,
                                  this;
                              var n = Math.acos(r)
                                , N = Math.sqrt(1 - r * r);
                              if (Math.abs(N) < .001)
                                  return this.w = .5 * (s + this.w),
                                  this.x = .5 * (i + this.x),
                                  this.y = .5 * (M + this.y),
                                  this.z = .5 * (A + this.z),
                                  this;
                              var u = Math.sin((1 - t) * n) / N
                                , D = Math.sin(t * n) / N;
                              return this.w = s * u + this.w * D,
                              this.x = i * u + this.x * D,
                              this.y = M * u + this.y * D,
                              this.z = A * u + this.z * D,
                              this
                          },
                          setFromUnitVectors: function(e, t) {
                              return void 0 === R && (R = new b),
                              (_ = e.dot(t) + 1) < 1e-6 ? (_ = 0,
                              Math.abs(e.x) > Math.abs(e.z) ? R.set(-e.y, e.x, 0) : R.set(0, -e.z, e.y)) : R.crossVectors(e, t),
                              this.x = R.x,
                              this.y = R.y,
                              this.z = R.z,
                              this.w = _,
                              this.normalize(),
                              this
                          }
                      };
                      var F = new P({
                          widthMeters: .11,
                          heightMeters: .062,
                          bevelMeters: .004
                      })
                        , V = new P({
                          widthMeters: .1038,
                          heightMeters: .0584,
                          bevelMeters: .004
                      })
                        , W = {
                          CardboardV1: new Z({
                              id: "CardboardV1",
                              label: "Cardboard I/O 2014",
                              fov: 40,
                              interLensDistance: .06,
                              baselineLensDistance: .035,
                              screenLensDistance: .042,
                              distortionCoefficients: [.441, .156],
                              inverseCoefficients: [-.4410035, .42756155, -.4804439, .5460139, -.58821183, .5733938, -.48303202, .33299083, -.17573841, .0651772, -.01488963, .001559834]
                          }),
                          CardboardV2: new Z({
                              id: "CardboardV2",
                              label: "Cardboard I/O 2015",
                              fov: 60,
                              interLensDistance: .064,
                              baselineLensDistance: .035,
                              screenLensDistance: .039,
                              distortionCoefficients: [.34, .55],
                              inverseCoefficients: [-.33836704, -.18162185, .862655, -1.2462051, 1.0560602, -.58208317, .21609078, -.05444823, .009177956, -.0009904169, 6183535e-11, -16981803e-13]
                          })
                      };
                      function H(e, t) {
                          this.viewer = W.CardboardV2,
                          this.updateDeviceParams(e),
                          this.distortion = new v(this.viewer.distortionCoefficients);
                          for (var i = 0; i < t.length; i++) {
                              var M = t[i];
                              W[M.id] = new Z(M)
                          }
                      }
                      function Z(e) {
                          this.id = e.id,
                          this.label = e.label,
                          this.fov = e.fov,
                          this.interLensDistance = e.interLensDistance,
                          this.baselineLensDistance = e.baselineLensDistance,
                          this.screenLensDistance = e.screenLensDistance,
                          this.distortionCoefficients = e.distortionCoefficients,
                          this.inverseCoefficients = e.inverseCoefficients
                      }
                      H.prototype.updateDeviceParams = function(e) {
                          this.device = this.determineDevice_(e) || this.device
                      }
                      ,
                      H.prototype.getDevice = function() {
                          return this.device
                      }
                      ,
                      H.prototype.setViewer = function(e) {
                          this.viewer = e,
                          this.distortion = new v(this.viewer.distortionCoefficients)
                      }
                      ,
                      H.prototype.determineDevice_ = function(e) {
                          if (!e)
                              return N() ? (console.warn("Using fallback iOS device measurements."),
                              V) : (console.warn("Using fallback Android device measurements."),
                              F);
                          var t = .0254 / e.xdpi
                            , i = .0254 / e.ydpi
                            , M = c()
                            , A = I();
                          return new P({
                              widthMeters: t * M,
                              heightMeters: i * A,
                              bevelMeters: .001 * e.bevelMm
                          })
                      }
                      ,
                      H.prototype.getDistortedFieldOfViewLeftEye = function() {
                          var e = this.viewer
                            , t = this.device
                            , i = this.distortion
                            , M = e.screenLensDistance
                            , A = (t.widthMeters - e.interLensDistance) / 2
                            , s = e.interLensDistance / 2
                            , r = e.baselineLensDistance - t.bevelMeters
                            , n = t.heightMeters - r
                            , N = Y * Math.atan(i.distort(A / M))
                            , u = Y * Math.atan(i.distort(s / M))
                            , D = Y * Math.atan(i.distort(r / M))
                            , o = Y * Math.atan(i.distort(n / M));
                          return {
                              leftDegrees: Math.min(N, e.fov),
                              rightDegrees: Math.min(u, e.fov),
                              downDegrees: Math.min(D, e.fov),
                              upDegrees: Math.min(o, e.fov)
                          }
                      }
                      ,
                      H.prototype.getLeftEyeVisibleTanAngles = function() {
                          var e = this.viewer
                            , t = this.device
                            , i = this.distortion
                            , M = Math.tan(-B * e.fov)
                            , A = Math.tan(B * e.fov)
                            , s = Math.tan(B * e.fov)
                            , r = Math.tan(-B * e.fov)
                            , n = t.widthMeters / 4
                            , N = t.heightMeters / 2
                            , u = e.baselineLensDistance - t.bevelMeters - N
                            , D = e.interLensDistance / 2 - n
                            , o = -u
                            , a = e.screenLensDistance
                            , g = i.distort((D - n) / a)
                            , L = i.distort((o + N) / a)
                            , c = i.distort((D + n) / a)
                            , I = i.distort((o - N) / a)
                            , j = new Float32Array(4);
                          return j[0] = Math.max(M, g),
                          j[1] = Math.min(A, L),
                          j[2] = Math.min(s, c),
                          j[3] = Math.max(r, I),
                          j
                      }
                      ,
                      H.prototype.getLeftEyeNoLensTanAngles = function() {
                          var e = this.viewer
                            , t = this.device
                            , i = this.distortion
                            , M = new Float32Array(4)
                            , A = i.distortInverse(Math.tan(-B * e.fov))
                            , s = i.distortInverse(Math.tan(B * e.fov))
                            , r = i.distortInverse(Math.tan(B * e.fov))
                            , n = i.distortInverse(Math.tan(-B * e.fov))
                            , N = t.widthMeters / 4
                            , u = t.heightMeters / 2
                            , D = e.baselineLensDistance - t.bevelMeters - u
                            , o = e.interLensDistance / 2 - N
                            , a = -D
                            , g = e.screenLensDistance
                            , L = (o - N) / g
                            , c = (a + u) / g
                            , I = (o + N) / g
                            , j = (a - u) / g;
                          return M[0] = Math.max(A, L),
                          M[1] = Math.min(s, c),
                          M[2] = Math.min(r, I),
                          M[3] = Math.max(n, j),
                          M
                      }
                      ,
                      H.prototype.getLeftEyeVisibleScreenRect = function(e) {
                          var t = this.viewer
                            , i = this.device
                            , M = t.screenLensDistance
                            , A = (i.widthMeters - t.interLensDistance) / 2
                            , s = t.baselineLensDistance - i.bevelMeters
                            , r = (e[0] * M + A) / i.widthMeters
                            , n = (e[1] * M + s) / i.heightMeters
                            , N = (e[2] * M + A) / i.widthMeters
                            , u = (e[3] * M + s) / i.heightMeters;
                          return {
                              x: r,
                              y: u,
                              width: N - r,
                              height: n - u
                          }
                      }
                      ,
                      H.prototype.getFieldOfViewLeftEye = function(e) {
                          return e ? this.getUndistortedFieldOfViewLeftEye() : this.getDistortedFieldOfViewLeftEye()
                      }
                      ,
                      H.prototype.getFieldOfViewRightEye = function(e) {
                          var t = this.getFieldOfViewLeftEye(e);
                          return {
                              leftDegrees: t.rightDegrees,
                              rightDegrees: t.leftDegrees,
                              upDegrees: t.upDegrees,
                              downDegrees: t.downDegrees
                          }
                      }
                      ,
                      H.prototype.getUndistortedFieldOfViewLeftEye = function() {
                          var e = this.getUndistortedParams_();
                          return {
                              leftDegrees: Y * Math.atan(e.outerDist),
                              rightDegrees: Y * Math.atan(e.innerDist),
                              downDegrees: Y * Math.atan(e.bottomDist),
                              upDegrees: Y * Math.atan(e.topDist)
                          }
                      }
                      ,
                      H.prototype.getUndistortedViewportLeftEye = function() {
                          var e = this.getUndistortedParams_()
                            , t = this.viewer
                            , i = this.device
                            , M = t.screenLensDistance
                            , A = i.widthMeters / M
                            , s = i.heightMeters / M
                            , r = i.width / A
                            , n = i.height / s
                            , N = Math.round((e.eyePosX - e.outerDist) * r)
                            , u = Math.round((e.eyePosY - e.bottomDist) * n);
                          return {
                              x: N,
                              y: u,
                              width: Math.round((e.eyePosX + e.innerDist) * r) - N,
                              height: Math.round((e.eyePosY + e.topDist) * n) - u
                          }
                      }
                      ,
                      H.prototype.getUndistortedParams_ = function() {
                          var e = this.viewer
                            , t = this.device
                            , i = this.distortion
                            , M = e.screenLensDistance
                            , A = e.interLensDistance / 2 / M
                            , s = t.widthMeters / M
                            , r = t.heightMeters / M
                            , n = s / 2 - A
                            , N = (e.baselineLensDistance - t.bevelMeters) / M
                            , u = e.fov
                            , D = i.distortInverse(Math.tan(B * u))
                            , o = Math.min(n, D)
                            , a = Math.min(A, D)
                            , g = Math.min(N, D)
                            , L = Math.min(r - N, D);
                          return {
                              outerDist: o,
                              innerDist: a,
                              topDist: L,
                              bottomDist: g,
                              eyePosX: n,
                              eyePosY: N
                          }
                      }
                      ,
                      H.Viewers = W;
                      var X = {
                          format: 1,
                          last_updated: "2018-02-20T22:55:10Z",
                          devices: [{
                              type: "android",
                              rules: [{
                                  mdmh: "asus/*/Nexus 7/*"
                              }, {
                                  ua: "Nexus 7"
                              }],
                              dpi: [320.8, 323],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "asus/*/ASUS_Z00AD/*"
                              }, {
                                  ua: "ASUS_Z00AD"
                              }],
                              dpi: [403, 404.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Google/*/Pixel XL/*"
                              }, {
                                  ua: "Pixel XL"
                              }],
                              dpi: [537.9, 533],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Google/*/Pixel/*"
                              }, {
                                  ua: "Pixel"
                              }],
                              dpi: [432.6, 436.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "HTC/*/HTC6435LVW/*"
                              }, {
                                  ua: "HTC6435LVW"
                              }],
                              dpi: [449.7, 443.3],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "HTC/*/HTC One XL/*"
                              }, {
                                  ua: "HTC One XL"
                              }],
                              dpi: [315.3, 314.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "htc/*/Nexus 9/*"
                              }, {
                                  ua: "Nexus 9"
                              }],
                              dpi: 289,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "HTC/*/HTC One M9/*"
                              }, {
                                  ua: "HTC One M9"
                              }],
                              dpi: [442.5, 443.3],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "HTC/*/HTC One_M8/*"
                              }, {
                                  ua: "HTC One_M8"
                              }],
                              dpi: [449.7, 447.4],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "HTC/*/HTC One/*"
                              }, {
                                  ua: "HTC One"
                              }],
                              dpi: 472.8,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Huawei/*/Nexus 6P/*"
                              }, {
                                  ua: "Nexus 6P"
                              }],
                              dpi: [515.1, 518],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LENOVO/*/Lenovo PB2-690Y/*"
                              }, {
                                  ua: "Lenovo PB2-690Y"
                              }],
                              dpi: [457.2, 454.713],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/Nexus 5X/*"
                              }, {
                                  ua: "Nexus 5X"
                              }],
                              dpi: [422, 419.9],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/LGMS345/*"
                              }, {
                                  ua: "LGMS345"
                              }],
                              dpi: [221.7, 219.1],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/LG-D800/*"
                              }, {
                                  ua: "LG-D800"
                              }],
                              dpi: [422, 424.1],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/LG-D850/*"
                              }, {
                                  ua: "LG-D850"
                              }],
                              dpi: [537.9, 541.9],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/VS985 4G/*"
                              }, {
                                  ua: "VS985 4G"
                              }],
                              dpi: [537.9, 535.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/Nexus 5/*"
                              }, {
                                  ua: "Nexus 5 B"
                              }],
                              dpi: [442.4, 444.8],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/Nexus 4/*"
                              }, {
                                  ua: "Nexus 4"
                              }],
                              dpi: [319.8, 318.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/LG-P769/*"
                              }, {
                                  ua: "LG-P769"
                              }],
                              dpi: [240.6, 247.5],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/LGMS323/*"
                              }, {
                                  ua: "LGMS323"
                              }],
                              dpi: [206.6, 204.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "LGE/*/LGLS996/*"
                              }, {
                                  ua: "LGLS996"
                              }],
                              dpi: [403.4, 401.5],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Micromax/*/4560MMX/*"
                              }, {
                                  ua: "4560MMX"
                              }],
                              dpi: [240, 219.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Micromax/*/A250/*"
                              }, {
                                  ua: "Micromax A250"
                              }],
                              dpi: [480, 446.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Micromax/*/Micromax AQ4501/*"
                              }, {
                                  ua: "Micromax AQ4501"
                              }],
                              dpi: 240,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/G5/*"
                              }, {
                                  ua: "Moto G (5) Plus"
                              }],
                              dpi: [403.4, 403],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/DROID RAZR/*"
                              }, {
                                  ua: "DROID RAZR"
                              }],
                              dpi: [368.1, 256.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT830C/*"
                              }, {
                                  ua: "XT830C"
                              }],
                              dpi: [254, 255.9],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1021/*"
                              }, {
                                  ua: "XT1021"
                              }],
                              dpi: [254, 256.7],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1023/*"
                              }, {
                                  ua: "XT1023"
                              }],
                              dpi: [254, 256.7],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1028/*"
                              }, {
                                  ua: "XT1028"
                              }],
                              dpi: [326.6, 327.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1034/*"
                              }, {
                                  ua: "XT1034"
                              }],
                              dpi: [326.6, 328.4],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1053/*"
                              }, {
                                  ua: "XT1053"
                              }],
                              dpi: [315.3, 316.1],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1562/*"
                              }, {
                                  ua: "XT1562"
                              }],
                              dpi: [403.4, 402.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/Nexus 6/*"
                              }, {
                                  ua: "Nexus 6 B"
                              }],
                              dpi: [494.3, 489.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1063/*"
                              }, {
                                  ua: "XT1063"
                              }],
                              dpi: [295, 296.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1064/*"
                              }, {
                                  ua: "XT1064"
                              }],
                              dpi: [295, 295.6],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1092/*"
                              }, {
                                  ua: "XT1092"
                              }],
                              dpi: [422, 424.1],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/XT1095/*"
                              }, {
                                  ua: "XT1095"
                              }],
                              dpi: [422, 423.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "motorola/*/G4/*"
                              }, {
                                  ua: "Moto G (4)"
                              }],
                              dpi: 401,
                              bw: 4,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "OnePlus/*/A0001/*"
                              }, {
                                  ua: "A0001"
                              }],
                              dpi: [403.4, 401],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "OnePlus/*/ONE E1005/*"
                              }, {
                                  ua: "ONE E1005"
                              }],
                              dpi: [442.4, 441.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "OnePlus/*/ONE A2005/*"
                              }, {
                                  ua: "ONE A2005"
                              }],
                              dpi: [391.9, 405.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "OnePlus/*/ONEPLUS A5000/*"
                              }, {
                                  ua: "ONEPLUS A5000 "
                              }],
                              dpi: [403.411, 399.737],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "OnePlus/*/ONE A5010/*"
                              }, {
                                  ua: "ONEPLUS A5010"
                              }],
                              dpi: [403, 400],
                              bw: 2,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "OPPO/*/X909/*"
                              }, {
                                  ua: "X909"
                              }],
                              dpi: [442.4, 444.1],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9082/*"
                              }, {
                                  ua: "GT-I9082"
                              }],
                              dpi: [184.7, 185.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G360P/*"
                              }, {
                                  ua: "SM-G360P"
                              }],
                              dpi: [196.7, 205.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/Nexus S/*"
                              }, {
                                  ua: "Nexus S"
                              }],
                              dpi: [234.5, 229.8],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9300/*"
                              }, {
                                  ua: "GT-I9300"
                              }],
                              dpi: [304.8, 303.9],
                              bw: 5,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-T230NU/*"
                              }, {
                                  ua: "SM-T230NU"
                              }],
                              dpi: 216,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SGH-T399/*"
                              }, {
                                  ua: "SGH-T399"
                              }],
                              dpi: [217.7, 231.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SGH-M919/*"
                              }, {
                                  ua: "SGH-M919"
                              }],
                              dpi: [440.8, 437.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-N9005/*"
                              }, {
                                  ua: "SM-N9005"
                              }],
                              dpi: [386.4, 387],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SAMSUNG-SM-N900A/*"
                              }, {
                                  ua: "SAMSUNG-SM-N900A"
                              }],
                              dpi: [386.4, 387.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9500/*"
                              }, {
                                  ua: "GT-I9500"
                              }],
                              dpi: [442.5, 443.3],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9505/*"
                              }, {
                                  ua: "GT-I9505"
                              }],
                              dpi: 439.4,
                              bw: 4,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G900F/*"
                              }, {
                                  ua: "SM-G900F"
                              }],
                              dpi: [415.6, 431.6],
                              bw: 5,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G900M/*"
                              }, {
                                  ua: "SM-G900M"
                              }],
                              dpi: [415.6, 431.6],
                              bw: 5,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G800F/*"
                              }, {
                                  ua: "SM-G800F"
                              }],
                              dpi: 326.8,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G906S/*"
                              }, {
                                  ua: "SM-G906S"
                              }],
                              dpi: [562.7, 572.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9300/*"
                              }, {
                                  ua: "GT-I9300"
                              }],
                              dpi: [306.7, 304.8],
                              bw: 5,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-T535/*"
                              }, {
                                  ua: "SM-T535"
                              }],
                              dpi: [142.6, 136.4],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-N920C/*"
                              }, {
                                  ua: "SM-N920C"
                              }],
                              dpi: [515.1, 518.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-N920P/*"
                              }, {
                                  ua: "SM-N920P"
                              }],
                              dpi: [386.3655, 390.144],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-N920W8/*"
                              }, {
                                  ua: "SM-N920W8"
                              }],
                              dpi: [515.1, 518.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9300I/*"
                              }, {
                                  ua: "GT-I9300I"
                              }],
                              dpi: [304.8, 305.8],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-I9195/*"
                              }, {
                                  ua: "GT-I9195"
                              }],
                              dpi: [249.4, 256.7],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SPH-L520/*"
                              }, {
                                  ua: "SPH-L520"
                              }],
                              dpi: [249.4, 255.9],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SAMSUNG-SGH-I717/*"
                              }, {
                                  ua: "SAMSUNG-SGH-I717"
                              }],
                              dpi: 285.8,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SPH-D710/*"
                              }, {
                                  ua: "SPH-D710"
                              }],
                              dpi: [217.7, 204.2],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/GT-N7100/*"
                              }, {
                                  ua: "GT-N7100"
                              }],
                              dpi: 265.1,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SCH-I605/*"
                              }, {
                                  ua: "SCH-I605"
                              }],
                              dpi: 265.1,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/Galaxy Nexus/*"
                              }, {
                                  ua: "Galaxy Nexus"
                              }],
                              dpi: [315.3, 314.2],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-N910H/*"
                              }, {
                                  ua: "SM-N910H"
                              }],
                              dpi: [515.1, 518],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-N910C/*"
                              }, {
                                  ua: "SM-N910C"
                              }],
                              dpi: [515.2, 520.2],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G130M/*"
                              }, {
                                  ua: "SM-G130M"
                              }],
                              dpi: [165.9, 164.8],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G928I/*"
                              }, {
                                  ua: "SM-G928I"
                              }],
                              dpi: [515.1, 518.4],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G920F/*"
                              }, {
                                  ua: "SM-G920F"
                              }],
                              dpi: 580.6,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G920P/*"
                              }, {
                                  ua: "SM-G920P"
                              }],
                              dpi: [522.5, 577],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G925F/*"
                              }, {
                                  ua: "SM-G925F"
                              }],
                              dpi: 580.6,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G925V/*"
                              }, {
                                  ua: "SM-G925V"
                              }],
                              dpi: [522.5, 576.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G930F/*"
                              }, {
                                  ua: "SM-G930F"
                              }],
                              dpi: 576.6,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G935F/*"
                              }, {
                                  ua: "SM-G935F"
                              }],
                              dpi: 533,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G950F/*"
                              }, {
                                  ua: "SM-G950F"
                              }],
                              dpi: [562.707, 565.293],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "samsung/*/SM-G955U/*"
                              }, {
                                  ua: "SM-G955U"
                              }],
                              dpi: [522.514, 525.762],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Sony/*/C6903/*"
                              }, {
                                  ua: "C6903"
                              }],
                              dpi: [442.5, 443.3],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Sony/*/D6653/*"
                              }, {
                                  ua: "D6653"
                              }],
                              dpi: [428.6, 427.6],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Sony/*/E6653/*"
                              }, {
                                  ua: "E6653"
                              }],
                              dpi: [428.6, 425.7],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Sony/*/E6853/*"
                              }, {
                                  ua: "E6853"
                              }],
                              dpi: [403.4, 401.9],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Sony/*/SGP321/*"
                              }, {
                                  ua: "SGP321"
                              }],
                              dpi: [224.7, 224.1],
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "TCT/*/ALCATEL ONE TOUCH Fierce/*"
                              }, {
                                  ua: "ALCATEL ONE TOUCH Fierce"
                              }],
                              dpi: [240, 247.5],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "THL/*/thl 5000/*"
                              }, {
                                  ua: "thl 5000"
                              }],
                              dpi: [480, 443.3],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "Fly/*/IQ4412/*"
                              }, {
                                  ua: "IQ4412"
                              }],
                              dpi: 307.9,
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "ZTE/*/ZTE Blade L2/*"
                              }, {
                                  ua: "ZTE Blade L2"
                              }],
                              dpi: 240,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "android",
                              rules: [{
                                  mdmh: "BENEVE/*/VR518/*"
                              }, {
                                  ua: "VR518"
                              }],
                              dpi: 480,
                              bw: 3,
                              ac: 500
                          }, {
                              type: "ios",
                              rules: [{
                                  res: [640, 960]
                              }],
                              dpi: [325.1, 328.4],
                              bw: 4,
                              ac: 1e3
                          }, {
                              type: "ios",
                              rules: [{
                                  res: [640, 1136]
                              }],
                              dpi: [317.1, 320.2],
                              bw: 3,
                              ac: 1e3
                          }, {
                              type: "ios",
                              rules: [{
                                  res: [750, 1334]
                              }],
                              dpi: 326.4,
                              bw: 4,
                              ac: 1e3
                          }, {
                              type: "ios",
                              rules: [{
                                  res: [1242, 2208]
                              }],
                              dpi: [453.6, 458.4],
                              bw: 4,
                              ac: 1e3
                          }, {
                              type: "ios",
                              rules: [{
                                  res: [1125, 2001]
                              }],
                              dpi: [410.9, 415.4],
                              bw: 4,
                              ac: 1e3
                          }, {
                              type: "ios",
                              rules: [{
                                  res: [1125, 2436]
                              }],
                              dpi: 458,
                              bw: 4,
                              ac: 1e3
                          }]
                      };
                      function J(e, t) {
                          if (this.dpdb = X,
                          this.recalculateDeviceParams_(),
                          e) {
                              this.onDeviceParamsUpdated = t;
                              var i = new XMLHttpRequest
                                , M = this;
                              i.open("GET", e, !0),
                              i.addEventListener("load", function() {
                                  M.loading = !1,
                                  i.status >= 200 && i.status <= 299 ? (M.dpdb = JSON.parse(i.response),
                                  M.recalculateDeviceParams_()) : console.error("Error loading online DPDB!")
                              }),
                              i.send()
                          }
                      }
                      function K(e) {
                          this.xdpi = e.xdpi,
                          this.ydpi = e.ydpi,
                          this.bevelMm = e.bevelMm
                      }
                      function q(e, t) {
                          this.set(e, t)
                      }
                      function $(e, t) {
                          this.kFilter = e,
                          this.isDebug = t,
                          this.currentAccelMeasurement = new q,
                          this.currentGyroMeasurement = new q,
                          this.previousGyroMeasurement = new q,
                          N() ? this.filterQ = new G(-1,0,0,1) : this.filterQ = new G(1,0,0,1),
                          this.previousFilterQ = new G,
                          this.previousFilterQ.copy(this.filterQ),
                          this.accelQ = new G,
                          this.isOrientationInitialized = !1,
                          this.estimatedGravity = new b,
                          this.measuredGravity = new b,
                          this.gyroIntegralQ = new G
                      }
                      function ee(e, t) {
                          this.predictionTimeS = e,
                          this.isDebug = t,
                          this.previousQ = new G,
                          this.previousTimestampS = null,
                          this.deltaQ = new G,
                          this.outQ = new G
                      }
                      function te(e, t, i, M) {
                          this.yawOnly = i,
                          this.accelerometer = new b,
                          this.gyroscope = new b,
                          this.filter = new $(e,M),
                          this.posePredictor = new ee(t,M),
                          this.isFirefoxAndroid = D(),
                          this.isIOS = N();
                          var A = o();
                          this.isDeviceMotionInRadians = !this.isIOS && A && A < 66,
                          this.isWithoutDeviceMotion = a(),
                          this.filterToWorldQ = new G,
                          N() ? this.filterToWorldQ.setFromAxisAngle(new b(1,0,0), Math.PI / 2) : this.filterToWorldQ.setFromAxisAngle(new b(1,0,0), -Math.PI / 2),
                          this.inverseWorldToScreenQ = new G,
                          this.worldToScreenQ = new G,
                          this.originalPoseAdjustQ = new G,
                          this.originalPoseAdjustQ.setFromAxisAngle(new b(0,0,1), -window.orientation * Math.PI / 180),
                          this.setScreenTransform_(),
                          L() && this.filterToWorldQ.multiply(this.inverseWorldToScreenQ),
                          this.resetQ = new G,
                          this.orientationOut_ = new Float32Array(4),
                          this.start()
                      }
                      J.prototype.getDeviceParams = function() {
                          return this.deviceParams
                      }
                      ,
                      J.prototype.recalculateDeviceParams_ = function() {
                          var e = this.calcDeviceParams_();
                          e ? (this.deviceParams = e,
                          this.onDeviceParamsUpdated && this.onDeviceParamsUpdated(this.deviceParams)) : console.error("Failed to recalculate device parameters.")
                      }
                      ,
                      J.prototype.calcDeviceParams_ = function() {
                          var e = this.dpdb;
                          if (!e)
                              return console.error("DPDB not available."),
                              null;
                          if (1 != e.format)
                              return console.error("DPDB has unexpected format version."),
                              null;
                          if (!e.devices || !e.devices.length)
                              return console.error("DPDB does not have a devices section."),
                              null;
                          var t = navigator.userAgent || navigator.vendor || window.opera
                            , i = c()
                            , M = I();
                          if (!e.devices)
                              return console.error("DPDB has no devices section."),
                              null;
                          for (var A = 0; A < e.devices.length; A++) {
                              var s = e.devices[A];
                              if (s.rules)
                                  if ("ios" == s.type || "android" == s.type) {
                                      if (N() == ("ios" == s.type)) {
                                          for (var r = !1, n = 0; n < s.rules.length; n++) {
                                              var u = s.rules[n];
                                              if (this.matchRule_(u, t, i, M)) {
                                                  r = !0;
                                                  break
                                              }
                                          }
                                          if (r) {
                                              var D = s.dpi[0] || s.dpi
                                                , o = s.dpi[1] || s.dpi;
                                              return new K({
                                                  xdpi: D,
                                                  ydpi: o,
                                                  bevelMm: s.bw
                                              })
                                          }
                                      }
                                  } else
                                      console.warn("Device[" + A + "] has invalid type.");
                              else
                                  console.warn("Device[" + A + "] has no rules section.")
                          }
                          return console.warn("No DPDB device match."),
                          null
                      }
                      ,
                      J.prototype.matchRule_ = function(e, t, i, M) {
                          if (!e.ua && !e.res)
                              return !1;
                          if (e.ua && t.indexOf(e.ua) < 0)
                              return !1;
                          if (e.res) {
                              if (!e.res[0] || !e.res[1])
                                  return !1;
                              var A = e.res[0]
                                , s = e.res[1];
                              if (Math.min(i, M) != Math.min(A, s) || Math.max(i, M) != Math.max(A, s))
                                  return !1
                          }
                          return !0
                      }
                      ,
                      q.prototype.set = function(e, t) {
                          this.sample = e,
                          this.timestampS = t
                      }
                      ,
                      q.prototype.copy = function(e) {
                          this.set(e.sample, e.timestampS)
                      }
                      ,
                      $.prototype.addAccelMeasurement = function(e, t) {
                          this.currentAccelMeasurement.set(e, t)
                      }
                      ,
                      $.prototype.addGyroMeasurement = function(e, t) {
                          this.currentGyroMeasurement.set(e, t);
                          var i, M = t - this.previousGyroMeasurement.timestampS;
                          i = M,
                          !(isNaN(i) || i <= .001 || i > 1) && this.run_(),
                          this.previousGyroMeasurement.copy(this.currentGyroMeasurement)
                      }
                      ,
                      $.prototype.run_ = function() {
                          if (!this.isOrientationInitialized)
                              return this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample),
                              this.previousFilterQ.copy(this.accelQ),
                              void (this.isOrientationInitialized = !0);
                          var e = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS
                            , t = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, e);
                          this.gyroIntegralQ.multiply(t),
                          this.filterQ.copy(this.previousFilterQ),
                          this.filterQ.multiply(t);
                          var i = new G;
                          i.copy(this.filterQ),
                          i.inverse(),
                          this.estimatedGravity.set(0, 0, -1),
                          this.estimatedGravity.applyQuaternion(i),
                          this.estimatedGravity.normalize(),
                          this.measuredGravity.copy(this.currentAccelMeasurement.sample),
                          this.measuredGravity.normalize();
                          var M, A = new G;
                          A.setFromUnitVectors(this.estimatedGravity, this.measuredGravity),
                          A.inverse(),
                          this.isDebug && console.log("Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)", Y * ((M = A).w > 1 ? (console.warn("getQuaternionAngle: w > 1"),
                          0) : 2 * Math.acos(M.w)), this.estimatedGravity.x.toFixed(1), this.estimatedGravity.y.toFixed(1), this.estimatedGravity.z.toFixed(1), this.measuredGravity.x.toFixed(1), this.measuredGravity.y.toFixed(1), this.measuredGravity.z.toFixed(1));
                          var s = new G;
                          s.copy(this.filterQ),
                          s.multiply(A),
                          this.filterQ.slerp(s, 1 - this.kFilter),
                          this.previousFilterQ.copy(this.filterQ)
                      }
                      ,
                      $.prototype.getOrientation = function() {
                          return this.filterQ
                      }
                      ,
                      $.prototype.accelToQuaternion_ = function(e) {
                          var t = new b;
                          t.copy(e),
                          t.normalize();
                          var i = new G;
                          return i.setFromUnitVectors(new b(0,0,-1), t),
                          i.inverse(),
                          i
                      }
                      ,
                      $.prototype.gyroToQuaternionDelta_ = function(e, t) {
                          var i = new G
                            , M = new b;
                          return M.copy(e),
                          M.normalize(),
                          i.setFromAxisAngle(M, e.length() * t),
                          i
                      }
                      ,
                      ee.prototype.getPrediction = function(e, t, i) {
                          if (!this.previousTimestampS)
                              return this.previousQ.copy(e),
                              this.previousTimestampS = i,
                              e;
                          var M = new b;
                          M.copy(t),
                          M.normalize();
                          var A = t.length();
                          if (A < 20 * B)
                              return this.isDebug && console.log("Moving slowly, at %s deg/s: no prediction", (Y * A).toFixed(1)),
                              this.outQ.copy(e),
                              this.previousQ.copy(e),
                              this.outQ;
                          var s = A * this.predictionTimeS;
                          return this.deltaQ.setFromAxisAngle(M, s),
                          this.outQ.copy(this.previousQ),
                          this.outQ.multiply(this.deltaQ),
                          this.previousQ.copy(e),
                          this.previousTimestampS = i,
                          this.outQ
                      }
                      ,
                      te.prototype.getPosition = function() {
                          return null
                      }
                      ,
                      te.prototype.getOrientation = function() {
                          var e = void 0;
                          if (this.isWithoutDeviceMotion && this._deviceOrientationQ) {
                              this.deviceOrientationFixQ = this.deviceOrientationFixQ || (M = (new G).setFromAxisAngle(new b(0,0,-1), 0),
                              A = new G,
                              -90 === window.orientation ? A.setFromAxisAngle(new b(0,1,0), Math.PI / -2) : A.setFromAxisAngle(new b(0,1,0), Math.PI / 2),
                              M.multiply(A)),
                              this.deviceOrientationFilterToWorldQ = this.deviceOrientationFilterToWorldQ || ((i = new G).setFromAxisAngle(new b(1,0,0), -Math.PI / 2),
                              i),
                              e = this._deviceOrientationQ;
                              var t = new G;
                              return t.copy(e),
                              t.multiply(this.deviceOrientationFilterToWorldQ),
                              t.multiply(this.resetQ),
                              t.multiply(this.worldToScreenQ),
                              t.multiplyQuaternions(this.deviceOrientationFixQ, t),
                              this.yawOnly && (t.x = 0,
                              t.z = 0,
                              t.normalize()),
                              this.orientationOut_[0] = t.x,
                              this.orientationOut_[1] = t.y,
                              this.orientationOut_[2] = t.z,
                              this.orientationOut_[3] = t.w,
                              this.orientationOut_
                          }
                          var i, M, A, s = this.filter.getOrientation();
                          e = this.posePredictor.getPrediction(s, this.gyroscope, this.previousTimestampS);
                          var t = new G;
                          return t.copy(this.filterToWorldQ),
                          t.multiply(this.resetQ),
                          t.multiply(e),
                          t.multiply(this.worldToScreenQ),
                          this.yawOnly && (t.x = 0,
                          t.z = 0,
                          t.normalize()),
                          this.orientationOut_[0] = t.x,
                          this.orientationOut_[1] = t.y,
                          this.orientationOut_[2] = t.z,
                          this.orientationOut_[3] = t.w,
                          this.orientationOut_
                      }
                      ,
                      te.prototype.resetPose = function() {
                          this.resetQ.copy(this.filter.getOrientation()),
                          this.resetQ.x = 0,
                          this.resetQ.y = 0,
                          this.resetQ.z *= -1,
                          this.resetQ.normalize(),
                          L() && this.resetQ.multiply(this.inverseWorldToScreenQ),
                          this.resetQ.multiply(this.originalPoseAdjustQ)
                      }
                      ,
                      te.prototype.onDeviceOrientation_ = function(e) {
                          this._deviceOrientationQ = this._deviceOrientationQ || new G;
                          var t = e.alpha
                            , i = e.beta
                            , M = e.gamma;
                          t = (t || 0) * Math.PI / 180,
                          i = (i || 0) * Math.PI / 180,
                          M = (M || 0) * Math.PI / 180,
                          this._deviceOrientationQ.setFromEulerYXZ(i, t, -M)
                      }
                      ,
                      te.prototype.onDeviceMotion_ = function(e) {
                          this.updateDeviceMotion_(e)
                      }
                      ,
                      te.prototype.updateDeviceMotion_ = function(e) {
                          var t = e.accelerationIncludingGravity
                            , i = e.rotationRate
                            , M = e.timeStamp / 1e3
                            , A = M - this.previousTimestampS;
                          return A < 0 ? (z("fusion-pose-sensor:invalid:non-monotonic", "Invalid timestamps detected: non-monotonic timestamp from devicemotion"),
                          void (this.previousTimestampS = M)) : A <= .001 || A > 1 ? (z("fusion-pose-sensor:invalid:outside-threshold", "Invalid timestamps detected: Timestamp from devicemotion outside expected range."),
                          void (this.previousTimestampS = M)) : (this.accelerometer.set(-t.x, -t.y, -t.z),
                          g() ? this.gyroscope.set(-i.beta, i.alpha, i.gamma) : this.gyroscope.set(i.alpha, i.beta, i.gamma),
                          this.isDeviceMotionInRadians || this.gyroscope.multiplyScalar(Math.PI / 180),
                          this.filter.addAccelMeasurement(this.accelerometer, M),
                          this.filter.addGyroMeasurement(this.gyroscope, M),
                          void (this.previousTimestampS = M))
                      }
                      ,
                      te.prototype.onOrientationChange_ = function(e) {
                          this.setScreenTransform_()
                      }
                      ,
                      te.prototype.onMessage_ = function(e) {
                          var t = e.data;
                          if (t && t.type) {
                              var i = t.type.toLowerCase();
                              "devicemotion" === i && this.updateDeviceMotion_(t.deviceMotionEvent)
                          }
                      }
                      ,
                      te.prototype.setScreenTransform_ = function() {
                          switch (this.worldToScreenQ.set(0, 0, 0, 1),
                          window.orientation) {
                          case 0:
                              break;
                          case 90:
                              this.worldToScreenQ.setFromAxisAngle(new b(0,0,1), -Math.PI / 2);
                              break;
                          case -90:
                              this.worldToScreenQ.setFromAxisAngle(new b(0,0,1), Math.PI / 2)
                          }
                          this.inverseWorldToScreenQ.copy(this.worldToScreenQ),
                          this.inverseWorldToScreenQ.inverse()
                      }
                      ,
                      te.prototype.start = function() {
                          var e, t, i;
                          this.onDeviceMotionCallback_ = this.onDeviceMotion_.bind(this),
                          this.onOrientationChangeCallback_ = this.onOrientationChange_.bind(this),
                          this.onMessageCallback_ = this.onMessage_.bind(this),
                          this.onDeviceOrientationCallback_ = this.onDeviceOrientation_.bind(this),
                          N() && (e = window.self !== window.top,
                          t = d(document.referrer),
                          i = d(window.location.href),
                          e && t !== i) && window.addEventListener("message", this.onMessageCallback_),
                          window.addEventListener("orientationchange", this.onOrientationChangeCallback_),
                          this.isWithoutDeviceMotion ? window.addEventListener("deviceorientation", this.onDeviceOrientationCallback_) : window.addEventListener("devicemotion", this.onDeviceMotionCallback_)
                      }
                      ,
                      te.prototype.stop = function() {
                          window.removeEventListener("devicemotion", this.onDeviceMotionCallback_),
                          window.removeEventListener("deviceorientation", this.onDeviceOrientationCallback_),
                          window.removeEventListener("orientationchange", this.onOrientationChangeCallback_),
                          window.removeEventListener("message", this.onMessageCallback_)
                      }
                      ;
                      var ie = new b(1,0,0)
                        , Me = new b(0,0,1)
                        , Ae = new G;
                      Ae.setFromAxisAngle(ie, -Math.PI / 2),
                      Ae.multiply((new G).setFromAxisAngle(Me, Math.PI / 2));
                      var se = function() {
                          function e(t) {
                              A(this, e),
                              this.config = t,
                              this.sensor = null,
                              this.fusionSensor = null,
                              this._out = new Float32Array(4),
                              this.api = null,
                              this.errors = [],
                              this._sensorQ = new G,
                              this._outQ = new G,
                              this._onSensorRead = this._onSensorRead.bind(this),
                              this._onSensorError = this._onSensorError.bind(this),
                              this.init()
                          }
                          return s(e, [{
                              key: "init",
                              value: function() {
                                  var e = null;
                                  try {
                                      (e = new RelativeOrientationSensor({
                                          frequency: 60,
                                          referenceFrame: "screen"
                                      })).addEventListener("error", this._onSensorError)
                                  } catch (e) {
                                      this.errors.push(e),
                                      "SecurityError" === e.name ? (console.error("Cannot construct sensors due to the Feature Policy"),
                                      console.warn('Attempting to fall back using "devicemotion"; however this will fail in the future without correct permissions.'),
                                      this.useDeviceMotion()) : "ReferenceError" === e.name ? this.useDeviceMotion() : console.error(e)
                                  }
                                  e && (this.api = "sensor",
                                  this.sensor = e,
                                  this.sensor.addEventListener("reading", this._onSensorRead),
                                  this.sensor.start())
                              }
                          }, {
                              key: "useDeviceMotion",
                              value: function() {
                                  this.api = "devicemotion",
                                  this.fusionSensor = new te(this.config.K_FILTER,this.config.PREDICTION_TIME_S,this.config.YAW_ONLY,this.config.DEBUG),
                                  this.sensor && (this.sensor.removeEventListener("reading", this._onSensorRead),
                                  this.sensor.removeEventListener("error", this._onSensorError),
                                  this.sensor = null)
                              }
                          }, {
                              key: "getOrientation",
                              value: function() {
                                  if (this.fusionSensor)
                                      return this.fusionSensor.getOrientation();
                                  if (!this.sensor || !this.sensor.quaternion)
                                      return this._out[0] = this._out[1] = this._out[2] = 0,
                                      this._out[3] = 1,
                                      this._out;
                                  var e = this.sensor.quaternion;
                                  this._sensorQ.set(e[0], e[1], e[2], e[3]);
                                  var t = this._outQ;
                                  return t.copy(Ae),
                                  t.multiply(this._sensorQ),
                                  this.config.YAW_ONLY && (t.x = t.z = 0,
                                  t.normalize()),
                                  this._out[0] = t.x,
                                  this._out[1] = t.y,
                                  this._out[2] = t.z,
                                  this._out[3] = t.w,
                                  this._out
                              }
                          }, {
                              key: "_onSensorError",
                              value: function(e) {
                                  this.errors.push(e.error),
                                  "NotAllowedError" === e.error.name ? console.error("Permission to access sensor was denied") : "NotReadableError" === e.error.name ? console.error("Sensor could not be read") : console.error(e.error),
                                  this.useDeviceMotion()
                              }
                          }, {
                              key: "_onSensorRead",
                              value: function() {}
                          }]),
                          e
                      }();
                      function re() {
                          this.loadIcon_();
                          var e = document.createElement("div")
                            , t = e.style;
                          t.position = "fixed",
                          t.top = 0,
                          t.right = 0,
                          t.bottom = 0,
                          t.left = 0,
                          t.backgroundColor = "gray",
                          t.fontFamily = "sans-serif",
                          t.zIndex = 1e6;
                          var i = document.createElement("img");
                          i.src = this.icon;
                          var t = i.style;
                          t.marginLeft = "25%",
                          t.marginTop = "25%",
                          t.width = "50%",
                          e.appendChild(i);
                          var M = document.createElement("div")
                            , t = M.style;
                          t.textAlign = "center",
                          t.fontSize = "16px",
                          t.lineHeight = "24px",
                          t.margin = "24px 25%",
                          t.width = "50%",
                          M.innerHTML = "Place your phone into your Cardboard viewer.",
                          e.appendChild(M);
                          var A = document.createElement("div")
                            , t = A.style;
                          t.backgroundColor = "#CFD8DC",
                          t.position = "fixed",
                          t.bottom = 0,
                          t.width = "100%",
                          t.height = "48px",
                          t.padding = "14px 24px",
                          t.boxSizing = "border-box",
                          t.color = "#656A6B",
                          e.appendChild(A);
                          var s = document.createElement("div");
                          s.style.float = "left",
                          s.innerHTML = "No Cardboard viewer?";
                          var r = document.createElement("a");
                          r.href = "https://www.google.com/get/cardboard/get-cardboard/",
                          r.innerHTML = "get one",
                          r.target = "_blank";
                          var t = r.style;
                          t.float = "right",
                          t.fontWeight = 600,
                          t.textTransform = "uppercase",
                          t.borderLeft = "1px solid gray",
                          t.paddingLeft = "24px",
                          t.textDecoration = "none",
                          t.color = "#656A6B",
                          A.appendChild(s),
                          A.appendChild(r),
                          this.overlay = e,
                          this.text = M,
                          this.hide()
                      }
                      re.prototype.show = function(e) {
                          e || this.overlay.parentElement ? e && (this.overlay.parentElement && this.overlay.parentElement != e && this.overlay.parentElement.removeChild(this.overlay),
                          e.appendChild(this.overlay)) : document.body.appendChild(this.overlay),
                          this.overlay.style.display = "block";
                          var t = this.overlay.querySelector("img")
                            , i = t.style;
                          L() ? (i.width = "20%",
                          i.marginLeft = "40%",
                          i.marginTop = "3%") : (i.width = "50%",
                          i.marginLeft = "25%",
                          i.marginTop = "25%")
                      }
                      ,
                      re.prototype.hide = function() {
                          this.overlay.style.display = "none"
                      }
                      ,
                      re.prototype.showTemporarily = function(e, t) {
                          this.show(t),
                          this.timer = setTimeout(this.hide.bind(this), e)
                      }
                      ,
                      re.prototype.disableShowTemporarily = function() {
                          clearTimeout(this.timer)
                      }
                      ,
                      re.prototype.update = function() {
                          this.disableShowTemporarily(),
                          !L() && y() ? this.show() : this.hide()
                      }
                      ,
                      re.prototype.loadIcon_ = function() {
                          this.icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5OHB4IiBoZWlnaHQ9IjI0MHB4IiB2aWV3Qm94PSIwIDAgMTk4IDI0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMy4zICgxMjA4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dHJhbnNpdGlvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJ0cmFuc2l0aW9uIiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIj4KICAgICAgICAgICAgPGcgaWQ9IkltcG9ydGVkLUxheWVycy1Db3B5LTQtKy1JbXBvcnRlZC1MYXllcnMtQ29weS0rLUltcG9ydGVkLUxheWVycy1Db3B5LTItQ29weSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSW1wb3J0ZWQtTGF5ZXJzLUNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwNy4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ5LjYyNSwyLjUyNyBDMTQ5LjYyNSwyLjUyNyAxNTUuODA1LDYuMDk2IDE1Ni4zNjIsNi40MTggTDE1Ni4zNjIsNy4zMDQgQzE1Ni4zNjIsNy40ODEgMTU2LjM3NSw3LjY2NCAxNTYuNCw3Ljg1MyBDMTU2LjQxLDcuOTM0IDE1Ni40Miw4LjAxNSAxNTYuNDI3LDguMDk1IEMxNTYuNTY3LDkuNTEgMTU3LjQwMSwxMS4wOTMgMTU4LjUzMiwxMi4wOTQgTDE2NC4yNTIsMTcuMTU2IEwxNjQuMzMzLDE3LjA2NiBDMTY0LjMzMywxNy4wNjYgMTY4LjcxNSwxNC41MzYgMTY5LjU2OCwxNC4wNDIgQzE3MS4wMjUsMTQuODgzIDE5NS41MzgsMjkuMDM1IDE5NS41MzgsMjkuMDM1IEwxOTUuNTM4LDgzLjAzNiBDMTk1LjUzOCw4My44MDcgMTk1LjE1Miw4NC4yNTMgMTk0LjU5LDg0LjI1MyBDMTk0LjM1Nyw4NC4yNTMgMTk0LjA5NSw4NC4xNzcgMTkzLjgxOCw4NC4wMTcgTDE2OS44NTEsNzAuMTc5IEwxNjkuODM3LDcwLjIwMyBMMTQyLjUxNSw4NS45NzggTDE0MS42NjUsODQuNjU1IEMxMzYuOTM0LDgzLjEyNiAxMzEuOTE3LDgxLjkxNSAxMjYuNzE0LDgxLjA0NSBDMTI2LjcwOSw4MS4wNiAxMjYuNzA3LDgxLjA2OSAxMjYuNzA3LDgxLjA2OSBMMTIxLjY0LDk4LjAzIEwxMTMuNzQ5LDEwMi41ODYgTDExMy43MTIsMTAyLjUyMyBMMTEzLjcxMiwxMzAuMTEzIEMxMTMuNzEyLDEzMC44ODUgMTEzLjMyNiwxMzEuMzMgMTEyLjc2NCwxMzEuMzMgQzExMi41MzIsMTMxLjMzIDExMi4yNjksMTMxLjI1NCAxMTEuOTkyLDEzMS4wOTQgTDY5LjUxOSwxMDYuNTcyIEM2OC41NjksMTA2LjAyMyA2Ny43OTksMTA0LjY5NSA2Ny43OTksMTAzLjYwNSBMNjcuNzk5LDEwMi41NyBMNjcuNzc4LDEwMi42MTcgQzY3LjI3LDEwMi4zOTMgNjYuNjQ4LDEwMi4yNDkgNjUuOTYyLDEwMi4yMTggQzY1Ljg3NSwxMDIuMjE0IDY1Ljc4OCwxMDIuMjEyIDY1LjcwMSwxMDIuMjEyIEM2NS42MDYsMTAyLjIxMiA2NS41MTEsMTAyLjIxNSA2NS40MTYsMTAyLjIxOSBDNjUuMTk1LDEwMi4yMjkgNjQuOTc0LDEwMi4yMzUgNjQuNzU0LDEwMi4yMzUgQzY0LjMzMSwxMDIuMjM1IDYzLjkxMSwxMDIuMjE2IDYzLjQ5OCwxMDIuMTc4IEM2MS44NDMsMTAyLjAyNSA2MC4yOTgsMTAxLjU3OCA1OS4wOTQsMTAwLjg4MiBMMTIuNTE4LDczLjk5MiBMMTIuNTIzLDc0LjAwNCBMMi4yNDUsNTUuMjU0IEMxLjI0NCw1My40MjcgMi4wMDQsNTEuMDM4IDMuOTQzLDQ5LjkxOCBMNTkuOTU0LDE3LjU3MyBDNjAuNjI2LDE3LjE4NSA2MS4zNSwxNy4wMDEgNjIuMDUzLDE3LjAwMSBDNjMuMzc5LDE3LjAwMSA2NC42MjUsMTcuNjYgNjUuMjgsMTguODU0IEw2NS4yODUsMTguODUxIEw2NS41MTIsMTkuMjY0IEw2NS41MDYsMTkuMjY4IEM2NS45MDksMjAuMDAzIDY2LjQwNSwyMC42OCA2Ni45ODMsMjEuMjg2IEw2Ny4yNiwyMS41NTYgQzY5LjE3NCwyMy40MDYgNzEuNzI4LDI0LjM1NyA3NC4zNzMsMjQuMzU3IEM3Ni4zMjIsMjQuMzU3IDc4LjMyMSwyMy44NCA4MC4xNDgsMjIuNzg1IEM4MC4xNjEsMjIuNzg1IDg3LjQ2NywxOC41NjYgODcuNDY3LDE4LjU2NiBDODguMTM5LDE4LjE3OCA4OC44NjMsMTcuOTk0IDg5LjU2NiwxNy45OTQgQzkwLjg5MiwxNy45OTQgOTIuMTM4LDE4LjY1MiA5Mi43OTIsMTkuODQ3IEw5Ni4wNDIsMjUuNzc1IEw5Ni4wNjQsMjUuNzU3IEwxMDIuODQ5LDI5LjY3NCBMMTAyLjc0NCwyOS40OTIgTDE0OS42MjUsMi41MjcgTTE0OS42MjUsMC44OTIgQzE0OS4zNDMsMC44OTIgMTQ5LjA2MiwwLjk2NSAxNDguODEsMS4xMSBMMTAyLjY0MSwyNy42NjYgTDk3LjIzMSwyNC41NDIgTDk0LjIyNiwxOS4wNjEgQzkzLjMxMywxNy4zOTQgOTEuNTI3LDE2LjM1OSA4OS41NjYsMTYuMzU4IEM4OC41NTUsMTYuMzU4IDg3LjU0NiwxNi42MzIgODYuNjQ5LDE3LjE1IEM4My44NzgsMTguNzUgNzkuNjg3LDIxLjE2OSA3OS4zNzQsMjEuMzQ1IEM3OS4zNTksMjEuMzUzIDc5LjM0NSwyMS4zNjEgNzkuMzMsMjEuMzY5IEM3Ny43OTgsMjIuMjU0IDc2LjA4NCwyMi43MjIgNzQuMzczLDIyLjcyMiBDNzIuMDgxLDIyLjcyMiA2OS45NTksMjEuODkgNjguMzk3LDIwLjM4IEw2OC4xNDUsMjAuMTM1IEM2Ny43MDYsMTkuNjcyIDY3LjMyMywxOS4xNTYgNjcuMDA2LDE4LjYwMSBDNjYuOTg4LDE4LjU1OSA2Ni45NjgsMTguNTE5IDY2Ljk0NiwxOC40NzkgTDY2LjcxOSwxOC4wNjUgQzY2LjY5LDE4LjAxMiA2Ni42NTgsMTcuOTYgNjYuNjI0LDE3LjkxMSBDNjUuNjg2LDE2LjMzNyA2My45NTEsMTUuMzY2IDYyLjA1MywxNS4zNjYgQzYxLjA0MiwxNS4zNjYgNjAuMDMzLDE1LjY0IDU5LjEzNiwxNi4xNTggTDMuMTI1LDQ4LjUwMiBDMC40MjYsNTAuMDYxIC0wLjYxMyw1My40NDIgMC44MTEsNTYuMDQgTDExLjA4OSw3NC43OSBDMTEuMjY2LDc1LjExMyAxMS41MzcsNzUuMzUzIDExLjg1LDc1LjQ5NCBMNTguMjc2LDEwMi4yOTggQzU5LjY3OSwxMDMuMTA4IDYxLjQzMywxMDMuNjMgNjMuMzQ4LDEwMy44MDYgQzYzLjgxMiwxMDMuODQ4IDY0LjI4NSwxMDMuODcgNjQuNzU0LDEwMy44NyBDNjUsMTAzLjg3IDY1LjI0OSwxMDMuODY0IDY1LjQ5NCwxMDMuODUyIEM2NS41NjMsMTAzLjg0OSA2NS42MzIsMTAzLjg0NyA2NS43MDEsMTAzLjg0NyBDNjUuNzY0LDEwMy44NDcgNjUuODI4LDEwMy44NDkgNjUuODksMTAzLjg1MiBDNjUuOTg2LDEwMy44NTYgNjYuMDgsMTAzLjg2MyA2Ni4xNzMsMTAzLjg3NCBDNjYuMjgyLDEwNS40NjcgNjcuMzMyLDEwNy4xOTcgNjguNzAyLDEwNy45ODggTDExMS4xNzQsMTMyLjUxIEMxMTEuNjk4LDEzMi44MTIgMTEyLjIzMiwxMzIuOTY1IDExMi43NjQsMTMyLjk2NSBDMTE0LjI2MSwxMzIuOTY1IDExNS4zNDcsMTMxLjc2NSAxMTUuMzQ3LDEzMC4xMTMgTDExNS4zNDcsMTAzLjU1MSBMMTIyLjQ1OCw5OS40NDYgQzEyMi44MTksOTkuMjM3IDEyMy4wODcsOTguODk4IDEyMy4yMDcsOTguNDk4IEwxMjcuODY1LDgyLjkwNSBDMTMyLjI3OSw4My43MDIgMTM2LjU1Nyw4NC43NTMgMTQwLjYwNyw4Ni4wMzMgTDE0MS4xNCw4Ni44NjIgQzE0MS40NTEsODcuMzQ2IDE0MS45NzcsODcuNjEzIDE0Mi41MTYsODcuNjEzIEMxNDIuNzk0LDg3LjYxMyAxNDMuMDc2LDg3LjU0MiAxNDMuMzMzLDg3LjM5MyBMMTY5Ljg2NSw3Mi4wNzYgTDE5Myw4NS40MzMgQzE5My41MjMsODUuNzM1IDE5NC4wNTgsODUuODg4IDE5NC41OSw4NS44ODggQzE5Ni4wODcsODUuODg4IDE5Ny4xNzMsODQuNjg5IDE5Ny4xNzMsODMuMDM2IEwxOTcuMTczLDI5LjAzNSBDMTk3LjE3MywyOC40NTEgMTk2Ljg2MSwyNy45MTEgMTk2LjM1NSwyNy42MTkgQzE5Ni4zNTUsMjcuNjE5IDE3MS44NDMsMTMuNDY3IDE3MC4zODUsMTIuNjI2IEMxNzAuMTMyLDEyLjQ4IDE2OS44NSwxMi40MDcgMTY5LjU2OCwxMi40MDcgQzE2OS4yODUsMTIuNDA3IDE2OS4wMDIsMTIuNDgxIDE2OC43NDksMTIuNjI3IEMxNjguMTQzLDEyLjk3OCAxNjUuNzU2LDE0LjM1NyAxNjQuNDI0LDE1LjEyNSBMMTU5LjYxNSwxMC44NyBDMTU4Ljc5NiwxMC4xNDUgMTU4LjE1NCw4LjkzNyAxNTguMDU0LDcuOTM0IEMxNTguMDQ1LDcuODM3IDE1OC4wMzQsNy43MzkgMTU4LjAyMSw3LjY0IEMxNTguMDA1LDcuNTIzIDE1Ny45OTgsNy40MSAxNTcuOTk4LDcuMzA0IEwxNTcuOTk4LDYuNDE4IEMxNTcuOTk4LDUuODM0IDE1Ny42ODYsNS4yOTUgMTU3LjE4MSw1LjAwMiBDMTU2LjYyNCw0LjY4IDE1MC40NDIsMS4xMTEgMTUwLjQ0MiwxLjExMSBDMTUwLjE4OSwwLjk2NSAxNDkuOTA3LDAuODkyIDE0OS42MjUsMC44OTIiIGlkPSJGaWxsLTEiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTYuMDI3LDI1LjYzNiBMMTQyLjYwMyw1Mi41MjcgQzE0My44MDcsNTMuMjIyIDE0NC41ODIsNTQuMTE0IDE0NC44NDUsNTUuMDY4IEwxNDQuODM1LDU1LjA3NSBMNjMuNDYxLDEwMi4wNTcgTDYzLjQ2LDEwMi4wNTcgQzYxLjgwNiwxMDEuOTA1IDYwLjI2MSwxMDEuNDU3IDU5LjA1NywxMDAuNzYyIEwxMi40ODEsNzMuODcxIEw5Ni4wMjcsMjUuNjM2IiBpZD0iRmlsbC0yIiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYzLjQ2MSwxMDIuMTc0IEM2My40NTMsMTAyLjE3NCA2My40NDYsMTAyLjE3NCA2My40MzksMTAyLjE3MiBDNjEuNzQ2LDEwMi4wMTYgNjAuMjExLDEwMS41NjMgNTguOTk4LDEwMC44NjMgTDEyLjQyMiw3My45NzMgQzEyLjM4Niw3My45NTIgMTIuMzY0LDczLjkxNCAxMi4zNjQsNzMuODcxIEMxMi4zNjQsNzMuODMgMTIuMzg2LDczLjc5MSAxMi40MjIsNzMuNzcgTDk1Ljk2OCwyNS41MzUgQzk2LjAwNCwyNS41MTQgOTYuMDQ5LDI1LjUxNCA5Ni4wODUsMjUuNTM1IEwxNDIuNjYxLDUyLjQyNiBDMTQzLjg4OCw1My4xMzQgMTQ0LjY4Miw1NC4wMzggMTQ0Ljk1Nyw1NS4wMzcgQzE0NC45Nyw1NS4wODMgMTQ0Ljk1Myw1NS4xMzMgMTQ0LjkxNSw1NS4xNjEgQzE0NC45MTEsNTUuMTY1IDE0NC44OTgsNTUuMTc0IDE0NC44OTQsNTUuMTc3IEw2My41MTksMTAyLjE1OCBDNjMuNTAxLDEwMi4xNjkgNjMuNDgxLDEwMi4xNzQgNjMuNDYxLDEwMi4xNzQgTDYzLjQ2MSwxMDIuMTc0IFogTTEyLjcxNCw3My44NzEgTDU5LjExNSwxMDAuNjYxIEM2MC4yOTMsMTAxLjM0MSA2MS43ODYsMTAxLjc4MiA2My40MzUsMTAxLjkzNyBMMTQ0LjcwNyw1NS4wMTUgQzE0NC40MjgsNTQuMTA4IDE0My42ODIsNTMuMjg1IDE0Mi41NDQsNTIuNjI4IEw5Ni4wMjcsMjUuNzcxIEwxMi43MTQsNzMuODcxIEwxMi43MTQsNzMuODcxIFoiIGlkPSJGaWxsLTMiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ4LjMyNyw1OC40NzEgQzE0OC4xNDUsNTguNDggMTQ3Ljk2Miw1OC40OCAxNDcuNzgxLDU4LjQ3MiBDMTQ1Ljg4Nyw1OC4zODkgMTQ0LjQ3OSw1Ny40MzQgMTQ0LjYzNiw1Ni4zNCBDMTQ0LjY4OSw1NS45NjcgMTQ0LjY2NCw1NS41OTcgMTQ0LjU2NCw1NS4yMzUgTDYzLjQ2MSwxMDIuMDU3IEM2NC4wODksMTAyLjExNSA2NC43MzMsMTAyLjEzIDY1LjM3OSwxMDIuMDk5IEM2NS41NjEsMTAyLjA5IDY1Ljc0MywxMDIuMDkgNjUuOTI1LDEwMi4wOTggQzY3LjgxOSwxMDIuMTgxIDY5LjIyNywxMDMuMTM2IDY5LjA3LDEwNC4yMyBMMTQ4LjMyNyw1OC40NzEiIGlkPSJGaWxsLTQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjkuMDcsMTA0LjM0NyBDNjkuMDQ4LDEwNC4zNDcgNjkuMDI1LDEwNC4zNCA2OS4wMDUsMTA0LjMyNyBDNjguOTY4LDEwNC4zMDEgNjguOTQ4LDEwNC4yNTcgNjguOTU1LDEwNC4yMTMgQzY5LDEwMy44OTYgNjguODk4LDEwMy41NzYgNjguNjU4LDEwMy4yODggQzY4LjE1MywxMDIuNjc4IDY3LjEwMywxMDIuMjY2IDY1LjkyLDEwMi4yMTQgQzY1Ljc0MiwxMDIuMjA2IDY1LjU2MywxMDIuMjA3IDY1LjM4NSwxMDIuMjE1IEM2NC43NDIsMTAyLjI0NiA2NC4wODcsMTAyLjIzMiA2My40NSwxMDIuMTc0IEM2My4zOTksMTAyLjE2OSA2My4zNTgsMTAyLjEzMiA2My4zNDcsMTAyLjA4MiBDNjMuMzM2LDEwMi4wMzMgNjMuMzU4LDEwMS45ODEgNjMuNDAyLDEwMS45NTYgTDE0NC41MDYsNTUuMTM0IEMxNDQuNTM3LDU1LjExNiAxNDQuNTc1LDU1LjExMyAxNDQuNjA5LDU1LjEyNyBDMTQ0LjY0Miw1NS4xNDEgMTQ0LjY2OCw1NS4xNyAxNDQuNjc3LDU1LjIwNCBDMTQ0Ljc4MSw1NS41ODUgMTQ0LjgwNiw1NS45NzIgMTQ0Ljc1MSw1Ni4zNTcgQzE0NC43MDYsNTYuNjczIDE0NC44MDgsNTYuOTk0IDE0NS4wNDcsNTcuMjgyIEMxNDUuNTUzLDU3Ljg5MiAxNDYuNjAyLDU4LjMwMyAxNDcuNzg2LDU4LjM1NSBDMTQ3Ljk2NCw1OC4zNjMgMTQ4LjE0Myw1OC4zNjMgMTQ4LjMyMSw1OC4zNTQgQzE0OC4zNzcsNTguMzUyIDE0OC40MjQsNTguMzg3IDE0OC40MzksNTguNDM4IEMxNDguNDU0LDU4LjQ5IDE0OC40MzIsNTguNTQ1IDE0OC4zODUsNTguNTcyIEw2OS4xMjksMTA0LjMzMSBDNjkuMTExLDEwNC4zNDIgNjkuMDksMTA0LjM0NyA2OS4wNywxMDQuMzQ3IEw2OS4wNywxMDQuMzQ3IFogTTY1LjY2NSwxMDEuOTc1IEM2NS43NTQsMTAxLjk3NSA2NS44NDIsMTAxLjk3NyA2NS45MywxMDEuOTgxIEM2Ny4xOTYsMTAyLjAzNyA2OC4yODMsMTAyLjQ2OSA2OC44MzgsMTAzLjEzOSBDNjkuMDY1LDEwMy40MTMgNjkuMTg4LDEwMy43MTQgNjkuMTk4LDEwNC4wMjEgTDE0Ny44ODMsNTguNTkyIEMxNDcuODQ3LDU4LjU5MiAxNDcuODExLDU4LjU5MSAxNDcuNzc2LDU4LjU4OSBDMTQ2LjUwOSw1OC41MzMgMTQ1LjQyMiw1OC4xIDE0NC44NjcsNTcuNDMxIEMxNDQuNTg1LDU3LjA5MSAxNDQuNDY1LDU2LjcwNyAxNDQuNTIsNTYuMzI0IEMxNDQuNTYzLDU2LjAyMSAxNDQuNTUyLDU1LjcxNiAxNDQuNDg4LDU1LjQxNCBMNjMuODQ2LDEwMS45NyBDNjQuMzUzLDEwMi4wMDIgNjQuODY3LDEwMi4wMDYgNjUuMzc0LDEwMS45ODIgQzY1LjQ3MSwxMDEuOTc3IDY1LjU2OCwxMDEuOTc1IDY1LjY2NSwxMDEuOTc1IEw2NS42NjUsMTAxLjk3NSBaIiBpZD0iRmlsbC01IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIuMjA4LDU1LjEzNCBDMS4yMDcsNTMuMzA3IDEuOTY3LDUwLjkxNyAzLjkwNiw0OS43OTcgTDU5LjkxNywxNy40NTMgQzYxLjg1NiwxNi4zMzMgNjQuMjQxLDE2LjkwNyA2NS4yNDMsMTguNzM0IEw2NS40NzUsMTkuMTQ0IEM2NS44NzIsMTkuODgyIDY2LjM2OCwyMC41NiA2Ni45NDUsMjEuMTY1IEw2Ny4yMjMsMjEuNDM1IEM3MC41NDgsMjQuNjQ5IDc1LjgwNiwyNS4xNTEgODAuMTExLDIyLjY2NSBMODcuNDMsMTguNDQ1IEM4OS4zNywxNy4zMjYgOTEuNzU0LDE3Ljg5OSA5Mi43NTUsMTkuNzI3IEw5Ni4wMDUsMjUuNjU1IEwxMi40ODYsNzMuODg0IEwyLjIwOCw1NS4xMzQgWiIgaWQ9IkZpbGwtNiIgZmlsbD0iI0ZBRkFGQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi40ODYsNzQuMDAxIEMxMi40NzYsNzQuMDAxIDEyLjQ2NSw3My45OTkgMTIuNDU1LDczLjk5NiBDMTIuNDI0LDczLjk4OCAxMi4zOTksNzMuOTY3IDEyLjM4NCw3My45NCBMMi4xMDYsNTUuMTkgQzEuMDc1LDUzLjMxIDEuODU3LDUwLjg0NSAzLjg0OCw0OS42OTYgTDU5Ljg1OCwxNy4zNTIgQzYwLjUyNSwxNi45NjcgNjEuMjcxLDE2Ljc2NCA2Mi4wMTYsMTYuNzY0IEM2My40MzEsMTYuNzY0IDY0LjY2NiwxNy40NjYgNjUuMzI3LDE4LjY0NiBDNjUuMzM3LDE4LjY1NCA2NS4zNDUsMTguNjYzIDY1LjM1MSwxOC42NzQgTDY1LjU3OCwxOS4wODggQzY1LjU4NCwxOS4xIDY1LjU4OSwxOS4xMTIgNjUuNTkxLDE5LjEyNiBDNjUuOTg1LDE5LjgzOCA2Ni40NjksMjAuNDk3IDY3LjAzLDIxLjA4NSBMNjcuMzA1LDIxLjM1MSBDNjkuMTUxLDIzLjEzNyA3MS42NDksMjQuMTIgNzQuMzM2LDI0LjEyIEM3Ni4zMTMsMjQuMTIgNzguMjksMjMuNTgyIDgwLjA1MywyMi41NjMgQzgwLjA2NCwyMi41NTcgODAuMDc2LDIyLjU1MyA4MC4wODgsMjIuNTUgTDg3LjM3MiwxOC4zNDQgQzg4LjAzOCwxNy45NTkgODguNzg0LDE3Ljc1NiA4OS41MjksMTcuNzU2IEM5MC45NTYsMTcuNzU2IDkyLjIwMSwxOC40NzIgOTIuODU4LDE5LjY3IEw5Ni4xMDcsMjUuNTk5IEM5Ni4xMzgsMjUuNjU0IDk2LjExOCwyNS43MjQgOTYuMDYzLDI1Ljc1NiBMMTIuNTQ1LDczLjk4NSBDMTIuNTI2LDczLjk5NiAxMi41MDYsNzQuMDAxIDEyLjQ4Niw3NC4wMDEgTDEyLjQ4Niw3NC4wMDEgWiBNNjIuMDE2LDE2Ljk5NyBDNjEuMzEyLDE2Ljk5NyA2MC42MDYsMTcuMTkgNTkuOTc1LDE3LjU1NCBMMy45NjUsNDkuODk5IEMyLjA4Myw1MC45ODUgMS4zNDEsNTMuMzA4IDIuMzEsNTUuMDc4IEwxMi41MzEsNzMuNzIzIEw5NS44NDgsMjUuNjExIEw5Mi42NTMsMTkuNzgyIEM5Mi4wMzgsMTguNjYgOTAuODcsMTcuOTkgODkuNTI5LDE3Ljk5IEM4OC44MjUsMTcuOTkgODguMTE5LDE4LjE4MiA4Ny40ODksMTguNTQ3IEw4MC4xNzIsMjIuNzcyIEM4MC4xNjEsMjIuNzc4IDgwLjE0OSwyMi43ODIgODAuMTM3LDIyLjc4NSBDNzguMzQ2LDIzLjgxMSA3Ni4zNDEsMjQuMzU0IDc0LjMzNiwyNC4zNTQgQzcxLjU4OCwyNC4zNTQgNjkuMDMzLDIzLjM0NyA2Ny4xNDIsMjEuNTE5IEw2Ni44NjQsMjEuMjQ5IEM2Ni4yNzcsMjAuNjM0IDY1Ljc3NCwxOS45NDcgNjUuMzY3LDE5LjIwMyBDNjUuMzYsMTkuMTkyIDY1LjM1NiwxOS4xNzkgNjUuMzU0LDE5LjE2NiBMNjUuMTYzLDE4LjgxOSBDNjUuMTU0LDE4LjgxMSA2NS4xNDYsMTguODAxIDY1LjE0LDE4Ljc5IEM2NC41MjUsMTcuNjY3IDYzLjM1NywxNi45OTcgNjIuMDE2LDE2Ljk5NyBMNjIuMDE2LDE2Ljk5NyBaIiBpZD0iRmlsbC03IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQyLjQzNCw0OC44MDggTDQyLjQzNCw0OC44MDggQzM5LjkyNCw0OC44MDcgMzcuNzM3LDQ3LjU1IDM2LjU4Miw0NS40NDMgQzM0Ljc3MSw0Mi4xMzkgMzYuMTQ0LDM3LjgwOSAzOS42NDEsMzUuNzg5IEw1MS45MzIsMjguNjkxIEM1My4xMDMsMjguMDE1IDU0LjQxMywyNy42NTggNTUuNzIxLDI3LjY1OCBDNTguMjMxLDI3LjY1OCA2MC40MTgsMjguOTE2IDYxLjU3MywzMS4wMjMgQzYzLjM4NCwzNC4zMjcgNjIuMDEyLDM4LjY1NyA1OC41MTQsNDAuNjc3IEw0Ni4yMjMsNDcuNzc1IEM0NS4wNTMsNDguNDUgNDMuNzQyLDQ4LjgwOCA0Mi40MzQsNDguODA4IEw0Mi40MzQsNDguODA4IFogTTU1LjcyMSwyOC4xMjUgQzU0LjQ5NSwyOC4xMjUgNTMuMjY1LDI4LjQ2MSA1Mi4xNjYsMjkuMDk2IEwzOS44NzUsMzYuMTk0IEMzNi41OTYsMzguMDg3IDM1LjMwMiw0Mi4xMzYgMzYuOTkyLDQ1LjIxOCBDMzguMDYzLDQ3LjE3MyA0MC4wOTgsNDguMzQgNDIuNDM0LDQ4LjM0IEM0My42NjEsNDguMzQgNDQuODksNDguMDA1IDQ1Ljk5LDQ3LjM3IEw1OC4yODEsNDAuMjcyIEM2MS41NiwzOC4zNzkgNjIuODUzLDM0LjMzIDYxLjE2NCwzMS4yNDggQzYwLjA5MiwyOS4yOTMgNTguMDU4LDI4LjEyNSA1NS43MjEsMjguMTI1IEw1NS43MjEsMjguMTI1IFoiIGlkPSJGaWxsLTgiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ5LjU4OCwyLjQwNyBDMTQ5LjU4OCwyLjQwNyAxNTUuNzY4LDUuOTc1IDE1Ni4zMjUsNi4yOTcgTDE1Ni4zMjUsNy4xODQgQzE1Ni4zMjUsNy4zNiAxNTYuMzM4LDcuNTQ0IDE1Ni4zNjIsNy43MzMgQzE1Ni4zNzMsNy44MTQgMTU2LjM4Miw3Ljg5NCAxNTYuMzksNy45NzUgQzE1Ni41Myw5LjM5IDE1Ny4zNjMsMTAuOTczIDE1OC40OTUsMTEuOTc0IEwxNjUuODkxLDE4LjUxOSBDMTY2LjA2OCwxOC42NzUgMTY2LjI0OSwxOC44MTQgMTY2LjQzMiwxOC45MzQgQzE2OC4wMTEsMTkuOTc0IDE2OS4zODIsMTkuNCAxNjkuNDk0LDE3LjY1MiBDMTY5LjU0MywxNi44NjggMTY5LjU1MSwxNi4wNTcgMTY5LjUxNywxNS4yMjMgTDE2OS41MTQsMTUuMDYzIEwxNjkuNTE0LDEzLjkxMiBDMTcwLjc4LDE0LjY0MiAxOTUuNTAxLDI4LjkxNSAxOTUuNTAxLDI4LjkxNSBMMTk1LjUwMSw4Mi45MTUgQzE5NS41MDEsODQuMDA1IDE5NC43MzEsODQuNDQ1IDE5My43ODEsODMuODk3IEwxNTEuMzA4LDU5LjM3NCBDMTUwLjM1OCw1OC44MjYgMTQ5LjU4OCw1Ny40OTcgMTQ5LjU4OCw1Ni40MDggTDE0OS41ODgsMjIuMzc1IiBpZD0iRmlsbC05IiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5NC41NTMsODQuMjUgQzE5NC4yOTYsODQuMjUgMTk0LjAxMyw4NC4xNjUgMTkzLjcyMiw4My45OTcgTDE1MS4yNSw1OS40NzYgQzE1MC4yNjksNTguOTA5IDE0OS40NzEsNTcuNTMzIDE0OS40NzEsNTYuNDA4IEwxNDkuNDcxLDIyLjM3NSBMMTQ5LjcwNSwyMi4zNzUgTDE0OS43MDUsNTYuNDA4IEMxNDkuNzA1LDU3LjQ1OSAxNTAuNDUsNTguNzQ0IDE1MS4zNjYsNTkuMjc0IEwxOTMuODM5LDgzLjc5NSBDMTk0LjI2Myw4NC4wNCAxOTQuNjU1LDg0LjA4MyAxOTQuOTQyLDgzLjkxNyBDMTk1LjIyNyw4My43NTMgMTk1LjM4NCw4My4zOTcgMTk1LjM4NCw4Mi45MTUgTDE5NS4zODQsMjguOTgyIEMxOTQuMTAyLDI4LjI0MiAxNzIuMTA0LDE1LjU0MiAxNjkuNjMxLDE0LjExNCBMMTY5LjYzNCwxNS4yMiBDMTY5LjY2OCwxNi4wNTIgMTY5LjY2LDE2Ljg3NCAxNjkuNjEsMTcuNjU5IEMxNjkuNTU2LDE4LjUwMyAxNjkuMjE0LDE5LjEyMyAxNjguNjQ3LDE5LjQwNSBDMTY4LjAyOCwxOS43MTQgMTY3LjE5NywxOS41NzggMTY2LjM2NywxOS4wMzIgQzE2Ni4xODEsMTguOTA5IDE2NS45OTUsMTguNzY2IDE2NS44MTQsMTguNjA2IEwxNTguNDE3LDEyLjA2MiBDMTU3LjI1OSwxMS4wMzYgMTU2LjQxOCw5LjQzNyAxNTYuMjc0LDcuOTg2IEMxNTYuMjY2LDcuOTA3IDE1Ni4yNTcsNy44MjcgMTU2LjI0Nyw3Ljc0OCBDMTU2LjIyMSw3LjU1NSAxNTYuMjA5LDcuMzY1IDE1Ni4yMDksNy4xODQgTDE1Ni4yMDksNi4zNjQgQzE1NS4zNzUsNS44ODMgMTQ5LjUyOSwyLjUwOCAxNDkuNTI5LDIuNTA4IEwxNDkuNjQ2LDIuMzA2IEMxNDkuNjQ2LDIuMzA2IDE1NS44MjcsNS44NzQgMTU2LjM4NCw2LjE5NiBMMTU2LjQ0Miw2LjIzIEwxNTYuNDQyLDcuMTg0IEMxNTYuNDQyLDcuMzU1IDE1Ni40NTQsNy41MzUgMTU2LjQ3OCw3LjcxNyBDMTU2LjQ4OSw3LjggMTU2LjQ5OSw3Ljg4MiAxNTYuNTA3LDcuOTYzIEMxNTYuNjQ1LDkuMzU4IDE1Ny40NTUsMTAuODk4IDE1OC41NzIsMTEuODg2IEwxNjUuOTY5LDE4LjQzMSBDMTY2LjE0MiwxOC41ODQgMTY2LjMxOSwxOC43MiAxNjYuNDk2LDE4LjgzNyBDMTY3LjI1NCwxOS4zMzYgMTY4LDE5LjQ2NyAxNjguNTQzLDE5LjE5NiBDMTY5LjAzMywxOC45NTMgMTY5LjMyOSwxOC40MDEgMTY5LjM3NywxNy42NDUgQzE2OS40MjcsMTYuODY3IDE2OS40MzQsMTYuMDU0IDE2OS40MDEsMTUuMjI4IEwxNjkuMzk3LDE1LjA2NSBMMTY5LjM5NywxMy43MSBMMTY5LjU3MiwxMy44MSBDMTcwLjgzOSwxNC41NDEgMTk1LjU1OSwyOC44MTQgMTk1LjU1OSwyOC44MTQgTDE5NS42MTgsMjguODQ3IEwxOTUuNjE4LDgyLjkxNSBDMTk1LjYxOCw4My40ODQgMTk1LjQyLDgzLjkxMSAxOTUuMDU5LDg0LjExOSBDMTk0LjkwOCw4NC4yMDYgMTk0LjczNyw4NC4yNSAxOTQuNTUzLDg0LjI1IiBpZD0iRmlsbC0xMCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDUuNjg1LDU2LjE2MSBMMTY5LjgsNzAuMDgzIEwxNDMuODIyLDg1LjA4MSBMMTQyLjM2LDg0Ljc3NCBDMTM1LjgyNiw4Mi42MDQgMTI4LjczMiw4MS4wNDYgMTIxLjM0MSw4MC4xNTggQzExNi45NzYsNzkuNjM0IDExMi42NzgsODEuMjU0IDExMS43NDMsODMuNzc4IEMxMTEuNTA2LDg0LjQxNCAxMTEuNTAzLDg1LjA3MSAxMTEuNzMyLDg1LjcwNiBDMTEzLjI3LDg5Ljk3MyAxMTUuOTY4LDk0LjA2OSAxMTkuNzI3LDk3Ljg0MSBMMTIwLjI1OSw5OC42ODYgQzEyMC4yNiw5OC42ODUgOTQuMjgyLDExMy42ODMgOTQuMjgyLDExMy42ODMgTDcwLjE2Nyw5OS43NjEgTDE0NS42ODUsNTYuMTYxIiBpZD0iRmlsbC0xMSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05NC4yODIsMTEzLjgxOCBMOTQuMjIzLDExMy43ODUgTDY5LjkzMyw5OS43NjEgTDcwLjEwOCw5OS42NiBMMTQ1LjY4NSw1Ni4wMjYgTDE0NS43NDMsNTYuMDU5IEwxNzAuMDMzLDcwLjA4MyBMMTQzLjg0Miw4NS4yMDUgTDE0My43OTcsODUuMTk1IEMxNDMuNzcyLDg1LjE5IDE0Mi4zMzYsODQuODg4IDE0Mi4zMzYsODQuODg4IEMxMzUuNzg3LDgyLjcxNCAxMjguNzIzLDgxLjE2MyAxMjEuMzI3LDgwLjI3NCBDMTIwLjc4OCw4MC4yMDkgMTIwLjIzNiw4MC4xNzcgMTE5LjY4OSw4MC4xNzcgQzExNS45MzEsODAuMTc3IDExMi42MzUsODEuNzA4IDExMS44NTIsODMuODE5IEMxMTEuNjI0LDg0LjQzMiAxMTEuNjIxLDg1LjA1MyAxMTEuODQyLDg1LjY2NyBDMTEzLjM3Nyw4OS45MjUgMTE2LjA1OCw5My45OTMgMTE5LjgxLDk3Ljc1OCBMMTE5LjgyNiw5Ny43NzkgTDEyMC4zNTIsOTguNjE0IEMxMjAuMzU0LDk4LjYxNyAxMjAuMzU2LDk4LjYyIDEyMC4zNTgsOTguNjI0IEwxMjAuNDIyLDk4LjcyNiBMMTIwLjMxNyw5OC43ODcgQzEyMC4yNjQsOTguODE4IDk0LjU5OSwxMTMuNjM1IDk0LjM0LDExMy43ODUgTDk0LjI4MiwxMTMuODE4IEw5NC4yODIsMTEzLjgxOCBaIE03MC40MDEsOTkuNzYxIEw5NC4yODIsMTEzLjU0OSBMMTE5LjA4NCw5OS4yMjkgQzExOS42Myw5OC45MTQgMTE5LjkzLDk4Ljc0IDEyMC4xMDEsOTguNjU0IEwxMTkuNjM1LDk3LjkxNCBDMTE1Ljg2NCw5NC4xMjcgMTEzLjE2OCw5MC4wMzMgMTExLjYyMiw4NS43NDYgQzExMS4zODIsODUuMDc5IDExMS4zODYsODQuNDA0IDExMS42MzMsODMuNzM4IEMxMTIuNDQ4LDgxLjUzOSAxMTUuODM2LDc5Ljk0MyAxMTkuNjg5LDc5Ljk0MyBDMTIwLjI0Niw3OS45NDMgMTIwLjgwNiw3OS45NzYgMTIxLjM1NSw4MC4wNDIgQzEyOC43NjcsODAuOTMzIDEzNS44NDYsODIuNDg3IDE0Mi4zOTYsODQuNjYzIEMxNDMuMjMyLDg0LjgzOCAxNDMuNjExLDg0LjkxNyAxNDMuNzg2LDg0Ljk2NyBMMTY5LjU2Niw3MC4wODMgTDE0NS42ODUsNTYuMjk1IEw3MC40MDEsOTkuNzYxIEw3MC40MDEsOTkuNzYxIFoiIGlkPSJGaWxsLTEyIiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2Ny4yMywxOC45NzkgTDE2Ny4yMyw2OS44NSBMMTM5LjkwOSw4NS42MjMgTDEzMy40NDgsNzEuNDU2IEMxMzIuNTM4LDY5LjQ2IDEzMC4wMiw2OS43MTggMTI3LjgyNCw3Mi4wMyBDMTI2Ljc2OSw3My4xNCAxMjUuOTMxLDc0LjU4NSAxMjUuNDk0LDc2LjA0OCBMMTE5LjAzNCw5Ny42NzYgTDkxLjcxMiwxMTMuNDUgTDkxLjcxMiw2Mi41NzkgTDE2Ny4yMywxOC45NzkiIGlkPSJGaWxsLTEzIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkxLjcxMiwxMTMuNTY3IEM5MS42OTIsMTEzLjU2NyA5MS42NzIsMTEzLjU2MSA5MS42NTMsMTEzLjU1MSBDOTEuNjE4LDExMy41MyA5MS41OTUsMTEzLjQ5MiA5MS41OTUsMTEzLjQ1IEw5MS41OTUsNjIuNTc5IEM5MS41OTUsNjIuNTM3IDkxLjYxOCw2Mi40OTkgOTEuNjUzLDYyLjQ3OCBMMTY3LjE3MiwxOC44NzggQzE2Ny4yMDgsMTguODU3IDE2Ny4yNTIsMTguODU3IDE2Ny4yODgsMTguODc4IEMxNjcuMzI0LDE4Ljg5OSAxNjcuMzQ3LDE4LjkzNyAxNjcuMzQ3LDE4Ljk3OSBMMTY3LjM0Nyw2OS44NSBDMTY3LjM0Nyw2OS44OTEgMTY3LjMyNCw2OS45MyAxNjcuMjg4LDY5Ljk1IEwxMzkuOTY3LDg1LjcyNSBDMTM5LjkzOSw4NS43NDEgMTM5LjkwNSw4NS43NDUgMTM5Ljg3Myw4NS43MzUgQzEzOS44NDIsODUuNzI1IDEzOS44MTYsODUuNzAyIDEzOS44MDIsODUuNjcyIEwxMzMuMzQyLDcxLjUwNCBDMTMyLjk2Nyw3MC42ODIgMTMyLjI4LDcwLjIyOSAxMzEuNDA4LDcwLjIyOSBDMTMwLjMxOSw3MC4yMjkgMTI5LjA0NCw3MC45MTUgMTI3LjkwOCw3Mi4xMSBDMTI2Ljg3NCw3My4yIDEyNi4wMzQsNzQuNjQ3IDEyNS42MDYsNzYuMDgyIEwxMTkuMTQ2LDk3LjcwOSBDMTE5LjEzNyw5Ny43MzggMTE5LjExOCw5Ny43NjIgMTE5LjA5Miw5Ny43NzcgTDkxLjc3LDExMy41NTEgQzkxLjc1MiwxMTMuNTYxIDkxLjczMiwxMTMuNTY3IDkxLjcxMiwxMTMuNTY3IEw5MS43MTIsMTEzLjU2NyBaIE05MS44MjksNjIuNjQ3IEw5MS44MjksMTEzLjI0OCBMMTE4LjkzNSw5Ny41OTggTDEyNS4zODIsNzYuMDE1IEMxMjUuODI3LDc0LjUyNSAxMjYuNjY0LDczLjA4MSAxMjcuNzM5LDcxLjk1IEMxMjguOTE5LDcwLjcwOCAxMzAuMjU2LDY5Ljk5NiAxMzEuNDA4LDY5Ljk5NiBDMTMyLjM3Nyw2OS45OTYgMTMzLjEzOSw3MC40OTcgMTMzLjU1NCw3MS40MDcgTDEzOS45NjEsODUuNDU4IEwxNjcuMTEzLDY5Ljc4MiBMMTY3LjExMywxOS4xODEgTDkxLjgyOSw2Mi42NDcgTDkxLjgyOSw2Mi42NDcgWiIgaWQ9IkZpbGwtMTQiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTY4LjU0MywxOS4yMTMgTDE2OC41NDMsNzAuMDgzIEwxNDEuMjIxLDg1Ljg1NyBMMTM0Ljc2MSw3MS42ODkgQzEzMy44NTEsNjkuNjk0IDEzMS4zMzMsNjkuOTUxIDEyOS4xMzcsNzIuMjYzIEMxMjguMDgyLDczLjM3NCAxMjcuMjQ0LDc0LjgxOSAxMjYuODA3LDc2LjI4MiBMMTIwLjM0Niw5Ny45MDkgTDkzLjAyNSwxMTMuNjgzIEw5My4wMjUsNjIuODEzIEwxNjguNTQzLDE5LjIxMyIgaWQ9IkZpbGwtMTUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTMuMDI1LDExMy44IEM5My4wMDUsMTEzLjggOTIuOTg0LDExMy43OTUgOTIuOTY2LDExMy43ODUgQzkyLjkzMSwxMTMuNzY0IDkyLjkwOCwxMTMuNzI1IDkyLjkwOCwxMTMuNjg0IEw5Mi45MDgsNjIuODEzIEM5Mi45MDgsNjIuNzcxIDkyLjkzMSw2Mi43MzMgOTIuOTY2LDYyLjcxMiBMMTY4LjQ4NCwxOS4xMTIgQzE2OC41MiwxOS4wOSAxNjguNTY1LDE5LjA5IDE2OC42MDEsMTkuMTEyIEMxNjguNjM3LDE5LjEzMiAxNjguNjYsMTkuMTcxIDE2OC42NiwxOS4yMTIgTDE2OC42Niw3MC4wODMgQzE2OC42Niw3MC4xMjUgMTY4LjYzNyw3MC4xNjQgMTY4LjYwMSw3MC4xODQgTDE0MS4yOCw4NS45NTggQzE0MS4yNTEsODUuOTc1IDE0MS4yMTcsODUuOTc5IDE0MS4xODYsODUuOTY4IEMxNDEuMTU0LDg1Ljk1OCAxNDEuMTI5LDg1LjkzNiAxNDEuMTE1LDg1LjkwNiBMMTM0LjY1NSw3MS43MzggQzEzNC4yOCw3MC45MTUgMTMzLjU5Myw3MC40NjMgMTMyLjcyLDcwLjQ2MyBDMTMxLjYzMiw3MC40NjMgMTMwLjM1Nyw3MS4xNDggMTI5LjIyMSw3Mi4zNDQgQzEyOC4xODYsNzMuNDMzIDEyNy4zNDcsNzQuODgxIDEyNi45MTksNzYuMzE1IEwxMjAuNDU4LDk3Ljk0MyBDMTIwLjQ1LDk3Ljk3MiAxMjAuNDMxLDk3Ljk5NiAxMjAuNDA1LDk4LjAxIEw5My4wODMsMTEzLjc4NSBDOTMuMDY1LDExMy43OTUgOTMuMDQ1LDExMy44IDkzLjAyNSwxMTMuOCBMOTMuMDI1LDExMy44IFogTTkzLjE0Miw2Mi44ODEgTDkzLjE0MiwxMTMuNDgxIEwxMjAuMjQ4LDk3LjgzMiBMMTI2LjY5NSw3Ni4yNDggQzEyNy4xNCw3NC43NTggMTI3Ljk3Nyw3My4zMTUgMTI5LjA1Miw3Mi4xODMgQzEzMC4yMzEsNzAuOTQyIDEzMS41NjgsNzAuMjI5IDEzMi43Miw3MC4yMjkgQzEzMy42ODksNzAuMjI5IDEzNC40NTIsNzAuNzMxIDEzNC44NjcsNzEuNjQxIEwxNDEuMjc0LDg1LjY5MiBMMTY4LjQyNiw3MC4wMTYgTDE2OC40MjYsMTkuNDE1IEw5My4xNDIsNjIuODgxIEw5My4xNDIsNjIuODgxIFoiIGlkPSJGaWxsLTE2IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2OS44LDcwLjA4MyBMMTQyLjQ3OCw4NS44NTcgTDEzNi4wMTgsNzEuNjg5IEMxMzUuMTA4LDY5LjY5NCAxMzIuNTksNjkuOTUxIDEzMC4zOTMsNzIuMjYzIEMxMjkuMzM5LDczLjM3NCAxMjguNSw3NC44MTkgMTI4LjA2NCw3Ni4yODIgTDEyMS42MDMsOTcuOTA5IEw5NC4yODIsMTEzLjY4MyBMOTQuMjgyLDYyLjgxMyBMMTY5LjgsMTkuMjEzIEwxNjkuOCw3MC4wODMgWiIgaWQ9IkZpbGwtMTciIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTQuMjgyLDExMy45MTcgQzk0LjI0MSwxMTMuOTE3IDk0LjIwMSwxMTMuOTA3IDk0LjE2NSwxMTMuODg2IEM5NC4wOTMsMTEzLjg0NSA5NC4wNDgsMTEzLjc2NyA5NC4wNDgsMTEzLjY4NCBMOTQuMDQ4LDYyLjgxMyBDOTQuMDQ4LDYyLjczIDk0LjA5Myw2Mi42NTIgOTQuMTY1LDYyLjYxMSBMMTY5LjY4MywxOS4wMSBDMTY5Ljc1NSwxOC45NjkgMTY5Ljg0NCwxOC45NjkgMTY5LjkxNywxOS4wMSBDMTY5Ljk4OSwxOS4wNTIgMTcwLjAzMywxOS4xMjkgMTcwLjAzMywxOS4yMTIgTDE3MC4wMzMsNzAuMDgzIEMxNzAuMDMzLDcwLjE2NiAxNjkuOTg5LDcwLjI0NCAxNjkuOTE3LDcwLjI4NSBMMTQyLjU5NSw4Ni4wNiBDMTQyLjUzOCw4Ni4wOTIgMTQyLjQ2OSw4Ni4xIDE0Mi40MDcsODYuMDggQzE0Mi4zNDQsODYuMDYgMTQyLjI5Myw4Ni4wMTQgMTQyLjI2Niw4NS45NTQgTDEzNS44MDUsNzEuNzg2IEMxMzUuNDQ1LDcwLjk5NyAxMzQuODEzLDcwLjU4IDEzMy45NzcsNzAuNTggQzEzMi45MjEsNzAuNTggMTMxLjY3Niw3MS4yNTIgMTMwLjU2Miw3Mi40MjQgQzEyOS41NCw3My41MDEgMTI4LjcxMSw3NC45MzEgMTI4LjI4Nyw3Ni4zNDggTDEyMS44MjcsOTcuOTc2IEMxMjEuODEsOTguMDM0IDEyMS43NzEsOTguMDgyIDEyMS43Miw5OC4xMTIgTDk0LjM5OCwxMTMuODg2IEM5NC4zNjIsMTEzLjkwNyA5NC4zMjIsMTEzLjkxNyA5NC4yODIsMTEzLjkxNyBMOTQuMjgyLDExMy45MTcgWiBNOTQuNTE1LDYyLjk0OCBMOTQuNTE1LDExMy4yNzkgTDEyMS40MDYsOTcuNzU0IEwxMjcuODQsNzYuMjE1IEMxMjguMjksNzQuNzA4IDEyOS4xMzcsNzMuMjQ3IDEzMC4yMjQsNzIuMTAzIEMxMzEuNDI1LDcwLjgzOCAxMzIuNzkzLDcwLjExMiAxMzMuOTc3LDcwLjExMiBDMTM0Ljk5NSw3MC4xMTIgMTM1Ljc5NSw3MC42MzggMTM2LjIzLDcxLjU5MiBMMTQyLjU4NCw4NS41MjYgTDE2OS41NjYsNjkuOTQ4IEwxNjkuNTY2LDE5LjYxNyBMOTQuNTE1LDYyLjk0OCBMOTQuNTE1LDYyLjk0OCBaIiBpZD0iRmlsbC0xOCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDkuODk0LDkyLjk0MyBMMTA5Ljg5NCw5Mi45NDMgQzEwOC4xMiw5Mi45NDMgMTA2LjY1Myw5Mi4yMTggMTA1LjY1LDkwLjgyMyBDMTA1LjU4Myw5MC43MzEgMTA1LjU5Myw5MC42MSAxMDUuNjczLDkwLjUyOSBDMTA1Ljc1Myw5MC40NDggMTA1Ljg4LDkwLjQ0IDEwNS45NzQsOTAuNTA2IEMxMDYuNzU0LDkxLjA1MyAxMDcuNjc5LDkxLjMzMyAxMDguNzI0LDkxLjMzMyBDMTEwLjA0Nyw5MS4zMzMgMTExLjQ3OCw5MC44OTQgMTEyLjk4LDkwLjAyNyBDMTE4LjI5MSw4Ni45NiAxMjIuNjExLDc5LjUwOSAxMjIuNjExLDczLjQxNiBDMTIyLjYxMSw3MS40ODkgMTIyLjE2OSw2OS44NTYgMTIxLjMzMyw2OC42OTIgQzEyMS4yNjYsNjguNiAxMjEuMjc2LDY4LjQ3MyAxMjEuMzU2LDY4LjM5MiBDMTIxLjQzNiw2OC4zMTEgMTIxLjU2Myw2OC4yOTkgMTIxLjY1Niw2OC4zNjUgQzEyMy4zMjcsNjkuNTM3IDEyNC4yNDcsNzEuNzQ2IDEyNC4yNDcsNzQuNTg0IEMxMjQuMjQ3LDgwLjgyNiAxMTkuODIxLDg4LjQ0NyAxMTQuMzgyLDkxLjU4NyBDMTEyLjgwOCw5Mi40OTUgMTExLjI5OCw5Mi45NDMgMTA5Ljg5NCw5Mi45NDMgTDEwOS44OTQsOTIuOTQzIFogTTEwNi45MjUsOTEuNDAxIEMxMDcuNzM4LDkyLjA1MiAxMDguNzQ1LDkyLjI3OCAxMDkuODkzLDkyLjI3OCBMMTA5Ljg5NCw5Mi4yNzggQzExMS4yMTUsOTIuMjc4IDExMi42NDcsOTEuOTUxIDExNC4xNDgsOTEuMDg0IEMxMTkuNDU5LDg4LjAxNyAxMjMuNzgsODAuNjIxIDEyMy43OCw3NC41MjggQzEyMy43OCw3Mi41NDkgMTIzLjMxNyw3MC45MjkgMTIyLjQ1NCw2OS43NjcgQzEyMi44NjUsNzAuODAyIDEyMy4wNzksNzIuMDQyIDEyMy4wNzksNzMuNDAyIEMxMjMuMDc5LDc5LjY0NSAxMTguNjUzLDg3LjI4NSAxMTMuMjE0LDkwLjQyNSBDMTExLjY0LDkxLjMzNCAxMTAuMTMsOTEuNzQyIDEwOC43MjQsOTEuNzQyIEMxMDguMDgzLDkxLjc0MiAxMDcuNDgxLDkxLjU5MyAxMDYuOTI1LDkxLjQwMSBMMTA2LjkyNSw5MS40MDEgWiIgaWQ9IkZpbGwtMTkiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjA5Nyw5MC4yMyBDMTE4LjQ4MSw4Ny4xMjIgMTIyLjg0NSw3OS41OTQgMTIyLjg0NSw3My40MTYgQzEyMi44NDUsNzEuMzY1IDEyMi4zNjIsNjkuNzI0IDEyMS41MjIsNjguNTU2IEMxMTkuNzM4LDY3LjMwNCAxMTcuMTQ4LDY3LjM2MiAxMTQuMjY1LDY5LjAyNiBDMTA4Ljg4MSw3Mi4xMzQgMTA0LjUxNyw3OS42NjIgMTA0LjUxNyw4NS44NCBDMTA0LjUxNyw4Ny44OTEgMTA1LDg5LjUzMiAxMDUuODQsOTAuNyBDMTA3LjYyNCw5MS45NTIgMTEwLjIxNCw5MS44OTQgMTEzLjA5Nyw5MC4yMyIgaWQ9IkZpbGwtMjAiIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA4LjcyNCw5MS42MTQgTDEwOC43MjQsOTEuNjE0IEMxMDcuNTgyLDkxLjYxNCAxMDYuNTY2LDkxLjQwMSAxMDUuNzA1LDkwLjc5NyBDMTA1LjY4NCw5MC43ODMgMTA1LjY2NSw5MC44MTEgMTA1LjY1LDkwLjc5IEMxMDQuNzU2LDg5LjU0NiAxMDQuMjgzLDg3Ljg0MiAxMDQuMjgzLDg1LjgxNyBDMTA0LjI4Myw3OS41NzUgMTA4LjcwOSw3MS45NTMgMTE0LjE0OCw2OC44MTIgQzExNS43MjIsNjcuOTA0IDExNy4yMzIsNjcuNDQ5IDExOC42MzgsNjcuNDQ5IEMxMTkuNzgsNjcuNDQ5IDEyMC43OTYsNjcuNzU4IDEyMS42NTYsNjguMzYyIEMxMjEuNjc4LDY4LjM3NyAxMjEuNjk3LDY4LjM5NyAxMjEuNzEyLDY4LjQxOCBDMTIyLjYwNiw2OS42NjIgMTIzLjA3OSw3MS4zOSAxMjMuMDc5LDczLjQxNSBDMTIzLjA3OSw3OS42NTggMTE4LjY1Myw4Ny4xOTggMTEzLjIxNCw5MC4zMzggQzExMS42NCw5MS4yNDcgMTEwLjEzLDkxLjYxNCAxMDguNzI0LDkxLjYxNCBMMTA4LjcyNCw5MS42MTQgWiBNMTA2LjAwNiw5MC41MDUgQzEwNi43OCw5MS4wMzcgMTA3LjY5NCw5MS4yODEgMTA4LjcyNCw5MS4yODEgQzExMC4wNDcsOTEuMjgxIDExMS40NzgsOTAuODY4IDExMi45OCw5MC4wMDEgQzExOC4yOTEsODYuOTM1IDEyMi42MTEsNzkuNDk2IDEyMi42MTEsNzMuNDAzIEMxMjIuNjExLDcxLjQ5NCAxMjIuMTc3LDY5Ljg4IDEyMS4zNTYsNjguNzE4IEMxMjAuNTgyLDY4LjE4NSAxMTkuNjY4LDY3LjkxOSAxMTguNjM4LDY3LjkxOSBDMTE3LjMxNSw2Ny45MTkgMTE1Ljg4Myw2OC4zNiAxMTQuMzgyLDY5LjIyNyBDMTA5LjA3MSw3Mi4yOTMgMTA0Ljc1MSw3OS43MzMgMTA0Ljc1MSw4NS44MjYgQzEwNC43NTEsODcuNzM1IDEwNS4xODUsODkuMzQzIDEwNi4wMDYsOTAuNTA1IEwxMDYuMDA2LDkwLjUwNSBaIiBpZD0iRmlsbC0yMSIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDkuMzE4LDcuMjYyIEwxMzkuMzM0LDE2LjE0IEwxNTUuMjI3LDI3LjE3MSBMMTYwLjgxNiwyMS4wNTkgTDE0OS4zMTgsNy4yNjIiIGlkPSJGaWxsLTIyIiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2OS42NzYsMTMuODQgTDE1OS45MjgsMTkuNDY3IEMxNTYuMjg2LDIxLjU3IDE1MC40LDIxLjU4IDE0Ni43ODEsMTkuNDkxIEMxNDMuMTYxLDE3LjQwMiAxNDMuMTgsMTQuMDAzIDE0Ni44MjIsMTEuOSBMMTU2LjMxNyw2LjI5MiBMMTQ5LjU4OCwyLjQwNyBMNjcuNzUyLDQ5LjQ3OCBMMTEzLjY3NSw3NS45OTIgTDExNi43NTYsNzQuMjEzIEMxMTcuMzg3LDczLjg0OCAxMTcuNjI1LDczLjMxNSAxMTcuMzc0LDcyLjgyMyBDMTE1LjAxNyw2OC4xOTEgMTE0Ljc4MSw2My4yNzcgMTE2LjY5MSw1OC41NjEgQzEyMi4zMjksNDQuNjQxIDE0MS4yLDMzLjc0NiAxNjUuMzA5LDMwLjQ5MSBDMTczLjQ3OCwyOS4zODggMTgxLjk4OSwyOS41MjQgMTkwLjAxMywzMC44ODUgQzE5MC44NjUsMzEuMDMgMTkxLjc4OSwzMC44OTMgMTkyLjQyLDMwLjUyOCBMMTk1LjUwMSwyOC43NSBMMTY5LjY3NiwxMy44NCIgaWQ9IkZpbGwtMjMiIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjY3NSw3Ni40NTkgQzExMy41OTQsNzYuNDU5IDExMy41MTQsNzYuNDM4IDExMy40NDIsNzYuMzk3IEw2Ny41MTgsNDkuODgyIEM2Ny4zNzQsNDkuNzk5IDY3LjI4NCw0OS42NDUgNjcuMjg1LDQ5LjQ3OCBDNjcuMjg1LDQ5LjMxMSA2Ny4zNzQsNDkuMTU3IDY3LjUxOSw0OS4wNzMgTDE0OS4zNTUsMi4wMDIgQzE0OS40OTksMS45MTkgMTQ5LjY3NywxLjkxOSAxNDkuODIxLDIuMDAyIEwxNTYuNTUsNS44ODcgQzE1Ni43NzQsNi4wMTcgMTU2Ljg1LDYuMzAyIDE1Ni43MjIsNi41MjYgQzE1Ni41OTIsNi43NDkgMTU2LjMwNyw2LjgyNiAxNTYuMDgzLDYuNjk2IEwxNDkuNTg3LDIuOTQ2IEw2OC42ODcsNDkuNDc5IEwxMTMuNjc1LDc1LjQ1MiBMMTE2LjUyMyw3My44MDggQzExNi43MTUsNzMuNjk3IDExNy4xNDMsNzMuMzk5IDExNi45NTgsNzMuMDM1IEMxMTQuNTQyLDY4LjI4NyAxMTQuMyw2My4yMjEgMTE2LjI1OCw1OC4zODUgQzExOS4wNjQsNTEuNDU4IDEyNS4xNDMsNDUuMTQzIDEzMy44NCw0MC4xMjIgQzE0Mi40OTcsMzUuMTI0IDE1My4zNTgsMzEuNjMzIDE2NS4yNDcsMzAuMDI4IEMxNzMuNDQ1LDI4LjkyMSAxODIuMDM3LDI5LjA1OCAxOTAuMDkxLDMwLjQyNSBDMTkwLjgzLDMwLjU1IDE5MS42NTIsMzAuNDMyIDE5Mi4xODYsMzAuMTI0IEwxOTQuNTY3LDI4Ljc1IEwxNjkuNDQyLDE0LjI0NCBDMTY5LjIxOSwxNC4xMTUgMTY5LjE0MiwxMy44MjkgMTY5LjI3MSwxMy42MDYgQzE2OS40LDEzLjM4MiAxNjkuNjg1LDEzLjMwNiAxNjkuOTA5LDEzLjQzNSBMMTk1LjczNCwyOC4zNDUgQzE5NS44NzksMjguNDI4IDE5NS45NjgsMjguNTgzIDE5NS45NjgsMjguNzUgQzE5NS45NjgsMjguOTE2IDE5NS44NzksMjkuMDcxIDE5NS43MzQsMjkuMTU0IEwxOTIuNjUzLDMwLjkzMyBDMTkxLjkzMiwzMS4zNSAxOTAuODksMzEuNTA4IDE4OS45MzUsMzEuMzQ2IEMxODEuOTcyLDI5Ljk5NSAxNzMuNDc4LDI5Ljg2IDE2NS4zNzIsMzAuOTU0IEMxNTMuNjAyLDMyLjU0MyAxNDIuODYsMzUuOTkzIDEzNC4zMDcsNDAuOTMxIEMxMjUuNzkzLDQ1Ljg0NyAxMTkuODUxLDUyLjAwNCAxMTcuMTI0LDU4LjczNiBDMTE1LjI3LDYzLjMxNCAxMTUuNTAxLDY4LjExMiAxMTcuNzksNzIuNjExIEMxMTguMTYsNzMuMzM2IDExNy44NDUsNzQuMTI0IDExNi45OSw3NC42MTcgTDExMy45MDksNzYuMzk3IEMxMTMuODM2LDc2LjQzOCAxMTMuNzU2LDc2LjQ1OSAxMTMuNjc1LDc2LjQ1OSIgaWQ9IkZpbGwtMjQiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjMxNiwyMS4yNzkgQzE1MC45MDMsMjEuMjc5IDE0OC40OTUsMjAuNzUxIDE0Ni42NjQsMTkuNjkzIEMxNDQuODQ2LDE4LjY0NCAxNDMuODQ0LDE3LjIzMiAxNDMuODQ0LDE1LjcxOCBDMTQzLjg0NCwxNC4xOTEgMTQ0Ljg2LDEyLjc2MyAxNDYuNzA1LDExLjY5OCBMMTU2LjE5OCw2LjA5MSBDMTU2LjMwOSw2LjAyNSAxNTYuNDUyLDYuMDYyIDE1Ni41MTgsNi4xNzMgQzE1Ni41ODMsNi4yODQgMTU2LjU0Nyw2LjQyNyAxNTYuNDM2LDYuNDkzIEwxNDYuOTQsMTIuMTAyIEMxNDUuMjQ0LDEzLjA4MSAxNDQuMzEyLDE0LjM2NSAxNDQuMzEyLDE1LjcxOCBDMTQ0LjMxMiwxNy4wNTggMTQ1LjIzLDE4LjMyNiAxNDYuODk3LDE5LjI4OSBDMTUwLjQ0NiwyMS4zMzggMTU2LjI0LDIxLjMyNyAxNTkuODExLDE5LjI2NSBMMTY5LjU1OSwxMy42MzcgQzE2OS42NywxMy41NzMgMTY5LjgxMywxMy42MTEgMTY5Ljg3OCwxMy43MjMgQzE2OS45NDMsMTMuODM0IDE2OS45MDQsMTMuOTc3IDE2OS43OTMsMTQuMDQyIEwxNjAuMDQ1LDE5LjY3IEMxNTguMTg3LDIwLjc0MiAxNTUuNzQ5LDIxLjI3OSAxNTMuMzE2LDIxLjI3OSIgaWQ9IkZpbGwtMjUiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjY3NSw3NS45OTIgTDY3Ljc2Miw0OS40ODQiIGlkPSJGaWxsLTI2IiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExMy42NzUsNzYuMzQyIEMxMTMuNjE1LDc2LjM0MiAxMTMuNTU1LDc2LjMyNyAxMTMuNSw3Ni4yOTUgTDY3LjU4Nyw0OS43ODcgQzY3LjQxOSw0OS42OSA2Ny4zNjIsNDkuNDc2IDY3LjQ1OSw0OS4zMDkgQzY3LjU1Niw0OS4xNDEgNjcuNzcsNDkuMDgzIDY3LjkzNyw0OS4xOCBMMTEzLjg1LDc1LjY4OCBDMTE0LjAxOCw3NS43ODUgMTE0LjA3NSw3NiAxMTMuOTc4LDc2LjE2NyBDMTEzLjkxNCw3Ni4yNzkgMTEzLjc5Niw3Ni4zNDIgMTEzLjY3NSw3Ni4zNDIiIGlkPSJGaWxsLTI3IiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY3Ljc2Miw0OS40ODQgTDY3Ljc2MiwxMDMuNDg1IEM2Ny43NjIsMTA0LjU3NSA2OC41MzIsMTA1LjkwMyA2OS40ODIsMTA2LjQ1MiBMMTExLjk1NSwxMzAuOTczIEMxMTIuOTA1LDEzMS41MjIgMTEzLjY3NSwxMzEuMDgzIDExMy42NzUsMTI5Ljk5MyBMMTEzLjY3NSw3NS45OTIiIGlkPSJGaWxsLTI4IiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExMi43MjcsMTMxLjU2MSBDMTEyLjQzLDEzMS41NjEgMTEyLjEwNywxMzEuNDY2IDExMS43OCwxMzEuMjc2IEw2OS4zMDcsMTA2Ljc1NSBDNjguMjQ0LDEwNi4xNDIgNjcuNDEyLDEwNC43MDUgNjcuNDEyLDEwMy40ODUgTDY3LjQxMiw0OS40ODQgQzY3LjQxMiw0OS4yOSA2Ny41NjksNDkuMTM0IDY3Ljc2Miw0OS4xMzQgQzY3Ljk1Niw0OS4xMzQgNjguMTEzLDQ5LjI5IDY4LjExMyw0OS40ODQgTDY4LjExMywxMDMuNDg1IEM2OC4xMTMsMTA0LjQ0NSA2OC44MiwxMDUuNjY1IDY5LjY1NywxMDYuMTQ4IEwxMTIuMTMsMTMwLjY3IEMxMTIuNDc0LDEzMC44NjggMTEyLjc5MSwxMzAuOTEzIDExMywxMzAuNzkyIEMxMTMuMjA2LDEzMC42NzMgMTEzLjMyNSwxMzAuMzgxIDExMy4zMjUsMTI5Ljk5MyBMMTEzLjMyNSw3NS45OTIgQzExMy4zMjUsNzUuNzk4IDExMy40ODIsNzUuNjQxIDExMy42NzUsNzUuNjQxIEMxMTMuODY5LDc1LjY0MSAxMTQuMDI1LDc1Ljc5OCAxMTQuMDI1LDc1Ljk5MiBMMTE0LjAyNSwxMjkuOTkzIEMxMTQuMDI1LDEzMC42NDggMTEzLjc4NiwxMzEuMTQ3IDExMy4zNSwxMzEuMzk5IEMxMTMuMTYyLDEzMS41MDcgMTEyLjk1MiwxMzEuNTYxIDExMi43MjcsMTMxLjU2MSIgaWQ9IkZpbGwtMjkiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEyLjg2LDQwLjUxMiBDMTEyLjg2LDQwLjUxMiAxMTIuODYsNDAuNTEyIDExMi44NTksNDAuNTEyIEMxMTAuNTQxLDQwLjUxMiAxMDguMzYsMzkuOTkgMTA2LjcxNywzOS4wNDEgQzEwNS4wMTIsMzguMDU3IDEwNC4wNzQsMzYuNzI2IDEwNC4wNzQsMzUuMjkyIEMxMDQuMDc0LDMzLjg0NyAxMDUuMDI2LDMyLjUwMSAxMDYuNzU0LDMxLjUwNCBMMTE4Ljc5NSwyNC41NTEgQzEyMC40NjMsMjMuNTg5IDEyMi42NjksMjMuMDU4IDEyNS4wMDcsMjMuMDU4IEMxMjcuMzI1LDIzLjA1OCAxMjkuNTA2LDIzLjU4MSAxMzEuMTUsMjQuNTMgQzEzMi44NTQsMjUuNTE0IDEzMy43OTMsMjYuODQ1IDEzMy43OTMsMjguMjc4IEMxMzMuNzkzLDI5LjcyNCAxMzIuODQxLDMxLjA2OSAxMzEuMTEzLDMyLjA2NyBMMTE5LjA3MSwzOS4wMTkgQzExNy40MDMsMzkuOTgyIDExNS4xOTcsNDAuNTEyIDExMi44Niw0MC41MTIgTDExMi44Niw0MC41MTIgWiBNMTI1LjAwNywyMy43NTkgQzEyMi43OSwyMy43NTkgMTIwLjcwOSwyNC4yNTYgMTE5LjE0NiwyNS4xNTggTDEwNy4xMDQsMzIuMTEgQzEwNS42MDIsMzIuOTc4IDEwNC43NzQsMzQuMTA4IDEwNC43NzQsMzUuMjkyIEMxMDQuNzc0LDM2LjQ2NSAxMDUuNTg5LDM3LjU4MSAxMDcuMDY3LDM4LjQzNCBDMTA4LjYwNSwzOS4zMjMgMTEwLjY2MywzOS44MTIgMTEyLjg1OSwzOS44MTIgTDExMi44NiwzOS44MTIgQzExNS4wNzYsMzkuODEyIDExNy4xNTgsMzkuMzE1IDExOC43MjEsMzguNDEzIEwxMzAuNzYyLDMxLjQ2IEMxMzIuMjY0LDMwLjU5MyAxMzMuMDkyLDI5LjQ2MyAxMzMuMDkyLDI4LjI3OCBDMTMzLjA5MiwyNy4xMDYgMTMyLjI3OCwyNS45OSAxMzAuOCwyNS4xMzYgQzEyOS4yNjEsMjQuMjQ4IDEyNy4yMDQsMjMuNzU5IDEyNS4wMDcsMjMuNzU5IEwxMjUuMDA3LDIzLjc1OSBaIiBpZD0iRmlsbC0zMCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjUuNjMsMTYuMjE5IEwxNTkuODk2LDE5LjUzIEMxNTYuNzI5LDIxLjM1OCAxNTEuNjEsMjEuMzY3IDE0OC40NjMsMTkuNTUgQzE0NS4zMTYsMTcuNzMzIDE0NS4zMzIsMTQuNzc4IDE0OC40OTksMTIuOTQ5IEwxNTQuMjMzLDkuNjM5IEwxNjUuNjMsMTYuMjE5IiBpZD0iRmlsbC0zMSIgZmlsbD0iI0ZBRkFGQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTQuMjMzLDEwLjQ0OCBMMTY0LjIyOCwxNi4yMTkgTDE1OS41NDYsMTguOTIzIEMxNTguMTEyLDE5Ljc1IDE1Ni4xOTQsMjAuMjA2IDE1NC4xNDcsMjAuMjA2IEMxNTIuMTE4LDIwLjIwNiAxNTAuMjI0LDE5Ljc1NyAxNDguODE0LDE4Ljk0MyBDMTQ3LjUyNCwxOC4xOTkgMTQ2LjgxNCwxNy4yNDkgMTQ2LjgxNCwxNi4yNjkgQzE0Ni44MTQsMTUuMjc4IDE0Ny41MzcsMTQuMzE0IDE0OC44NSwxMy41NTYgTDE1NC4yMzMsMTAuNDQ4IE0xNTQuMjMzLDkuNjM5IEwxNDguNDk5LDEyLjk0OSBDMTQ1LjMzMiwxNC43NzggMTQ1LjMxNiwxNy43MzMgMTQ4LjQ2MywxOS41NSBDMTUwLjAzMSwyMC40NTUgMTUyLjA4NiwyMC45MDcgMTU0LjE0NywyMC45MDcgQzE1Ni4yMjQsMjAuOTA3IDE1OC4zMDYsMjAuNDQ3IDE1OS44OTYsMTkuNTMgTDE2NS42MywxNi4yMTkgTDE1NC4yMzMsOS42MzkiIGlkPSJGaWxsLTMyIiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0NS40NDUsNzIuNjY3IEwxNDUuNDQ1LDcyLjY2NyBDMTQzLjY3Miw3Mi42NjcgMTQyLjIwNCw3MS44MTcgMTQxLjIwMiw3MC40MjIgQzE0MS4xMzUsNzAuMzMgMTQxLjE0NSw3MC4xNDcgMTQxLjIyNSw3MC4wNjYgQzE0MS4zMDUsNjkuOTg1IDE0MS40MzIsNjkuOTQ2IDE0MS41MjUsNzAuMDExIEMxNDIuMzA2LDcwLjU1OSAxNDMuMjMxLDcwLjgyMyAxNDQuMjc2LDcwLjgyMiBDMTQ1LjU5OCw3MC44MjIgMTQ3LjAzLDcwLjM3NiAxNDguNTMyLDY5LjUwOSBDMTUzLjg0Miw2Ni40NDMgMTU4LjE2Myw1OC45ODcgMTU4LjE2Myw1Mi44OTQgQzE1OC4xNjMsNTAuOTY3IDE1Ny43MjEsNDkuMzMyIDE1Ni44ODQsNDguMTY4IEMxNTYuODE4LDQ4LjA3NiAxNTYuODI4LDQ3Ljk0OCAxNTYuOTA4LDQ3Ljg2NyBDMTU2Ljk4OCw0Ny43ODYgMTU3LjExNCw0Ny43NzQgMTU3LjIwOCw0Ny44NCBDMTU4Ljg3OCw0OS4wMTIgMTU5Ljc5OCw1MS4yMiAxNTkuNzk4LDU0LjA1OSBDMTU5Ljc5OCw2MC4zMDEgMTU1LjM3Myw2OC4wNDYgMTQ5LjkzMyw3MS4xODYgQzE0OC4zNiw3Mi4wOTQgMTQ2Ljg1LDcyLjY2NyAxNDUuNDQ1LDcyLjY2NyBMMTQ1LjQ0NSw3Mi42NjcgWiBNMTQyLjQ3Niw3MSBDMTQzLjI5LDcxLjY1MSAxNDQuMjk2LDcyLjAwMiAxNDUuNDQ1LDcyLjAwMiBDMTQ2Ljc2Nyw3Mi4wMDIgMTQ4LjE5OCw3MS41NSAxNDkuNyw3MC42ODIgQzE1NS4wMSw2Ny42MTcgMTU5LjMzMSw2MC4xNTkgMTU5LjMzMSw1NC4wNjUgQzE1OS4zMzEsNTIuMDg1IDE1OC44NjgsNTAuNDM1IDE1OC4wMDYsNDkuMjcyIEMxNTguNDE3LDUwLjMwNyAxNTguNjMsNTEuNTMyIDE1OC42Myw1Mi44OTIgQzE1OC42Myw1OS4xMzQgMTU0LjIwNSw2Ni43NjcgMTQ4Ljc2NSw2OS45MDcgQzE0Ny4xOTIsNzAuODE2IDE0NS42ODEsNzEuMjgzIDE0NC4yNzYsNzEuMjgzIEMxNDMuNjM0LDcxLjI4MyAxNDMuMDMzLDcxLjE5MiAxNDIuNDc2LDcxIEwxNDIuNDc2LDcxIFoiIGlkPSJGaWxsLTMzIiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0OC42NDgsNjkuNzA0IEMxNTQuMDMyLDY2LjU5NiAxNTguMzk2LDU5LjA2OCAxNTguMzk2LDUyLjg5MSBDMTU4LjM5Niw1MC44MzkgMTU3LjkxMyw0OS4xOTggMTU3LjA3NCw0OC4wMyBDMTU1LjI4OSw0Ni43NzggMTUyLjY5OSw0Ni44MzYgMTQ5LjgxNiw0OC41MDEgQzE0NC40MzMsNTEuNjA5IDE0MC4wNjgsNTkuMTM3IDE0MC4wNjgsNjUuMzE0IEMxNDAuMDY4LDY3LjM2NSAxNDAuNTUyLDY5LjAwNiAxNDEuMzkxLDcwLjE3NCBDMTQzLjE3Niw3MS40MjcgMTQ1Ljc2NSw3MS4zNjkgMTQ4LjY0OCw2OS43MDQiIGlkPSJGaWxsLTM0IiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0NC4yNzYsNzEuMjc2IEwxNDQuMjc2LDcxLjI3NiBDMTQzLjEzMyw3MS4yNzYgMTQyLjExOCw3MC45NjkgMTQxLjI1Nyw3MC4zNjUgQzE0MS4yMzYsNzAuMzUxIDE0MS4yMTcsNzAuMzMyIDE0MS4yMDIsNzAuMzExIEMxNDAuMzA3LDY5LjA2NyAxMzkuODM1LDY3LjMzOSAxMzkuODM1LDY1LjMxNCBDMTM5LjgzNSw1OS4wNzMgMTQ0LjI2LDUxLjQzOSAxNDkuNyw0OC4yOTggQzE1MS4yNzMsNDcuMzkgMTUyLjc4NCw0Ni45MjkgMTU0LjE4OSw0Ni45MjkgQzE1NS4zMzIsNDYuOTI5IDE1Ni4zNDcsNDcuMjM2IDE1Ny4yMDgsNDcuODM5IEMxNTcuMjI5LDQ3Ljg1NCAxNTcuMjQ4LDQ3Ljg3MyAxNTcuMjYzLDQ3Ljg5NCBDMTU4LjE1Nyw0OS4xMzggMTU4LjYzLDUwLjg2NSAxNTguNjMsNTIuODkxIEMxNTguNjMsNTkuMTMyIDE1NC4yMDUsNjYuNzY2IDE0OC43NjUsNjkuOTA3IEMxNDcuMTkyLDcwLjgxNSAxNDUuNjgxLDcxLjI3NiAxNDQuMjc2LDcxLjI3NiBMMTQ0LjI3Niw3MS4yNzYgWiBNMTQxLjU1OCw3MC4xMDQgQzE0Mi4zMzEsNzAuNjM3IDE0My4yNDUsNzEuMDA1IDE0NC4yNzYsNzEuMDA1IEMxNDUuNTk4LDcxLjAwNSAxNDcuMDMsNzAuNDY3IDE0OC41MzIsNjkuNiBDMTUzLjg0Miw2Ni41MzQgMTU4LjE2Myw1OS4wMzMgMTU4LjE2Myw1Mi45MzkgQzE1OC4xNjMsNTEuMDMxIDE1Ny43MjksNDkuMzg1IDE1Ni45MDcsNDguMjIzIEMxNTYuMTMzLDQ3LjY5MSAxNTUuMjE5LDQ3LjQwOSAxNTQuMTg5LDQ3LjQwOSBDMTUyLjg2Nyw0Ny40MDkgMTUxLjQzNSw0Ny44NDIgMTQ5LjkzMyw0OC43MDkgQzE0NC42MjMsNTEuNzc1IDE0MC4zMDIsNTkuMjczIDE0MC4zMDIsNjUuMzY2IEMxNDAuMzAyLDY3LjI3NiAxNDAuNzM2LDY4Ljk0MiAxNDEuNTU4LDcwLjEwNCBMMTQxLjU1OCw3MC4xMDQgWiIgaWQ9IkZpbGwtMzUiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUwLjcyLDY1LjM2MSBMMTUwLjM1Nyw2NS4wNjYgQzE1MS4xNDcsNjQuMDkyIDE1MS44NjksNjMuMDQgMTUyLjUwNSw2MS45MzggQzE1My4zMTMsNjAuNTM5IDE1My45NzgsNTkuMDY3IDE1NC40ODIsNTcuNTYzIEwxNTQuOTI1LDU3LjcxMiBDMTU0LjQxMiw1OS4yNDUgMTUzLjczMyw2MC43NDUgMTUyLjkxLDYyLjE3MiBDMTUyLjI2Miw2My4yOTUgMTUxLjUyNSw2NC4zNjggMTUwLjcyLDY1LjM2MSIgaWQ9IkZpbGwtMzYiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTE1LjkxNyw4NC41MTQgTDExNS41NTQsODQuMjIgQzExNi4zNDQsODMuMjQ1IDExNy4wNjYsODIuMTk0IDExNy43MDIsODEuMDkyIEMxMTguNTEsNzkuNjkyIDExOS4xNzUsNzguMjIgMTE5LjY3OCw3Ni43MTcgTDEyMC4xMjEsNzYuODY1IEMxMTkuNjA4LDc4LjM5OCAxMTguOTMsNzkuODk5IDExOC4xMDYsODEuMzI2IEMxMTcuNDU4LDgyLjQ0OCAxMTYuNzIyLDgzLjUyMSAxMTUuOTE3LDg0LjUxNCIgaWQ9IkZpbGwtMzciIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTE0LDEzMC40NzYgTDExNCwxMzAuMDA4IEwxMTQsNzYuMDUyIEwxMTQsNzUuNTg0IEwxMTQsNzYuMDUyIEwxMTQsMTMwLjAwOCBMMTE0LDEzMC40NzYiIGlkPSJGaWxsLTM4IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSW1wb3J0ZWQtTGF5ZXJzLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyLjAwMDAwMCwgMC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuODIyLDM3LjQ3NCBDMTkuODM5LDM3LjMzOSAxOS43NDcsMzcuMTk0IDE5LjU1NSwzNy4wODIgQzE5LjIyOCwzNi44OTQgMTguNzI5LDM2Ljg3MiAxOC40NDYsMzcuMDM3IEwxMi40MzQsNDAuNTA4IEMxMi4zMDMsNDAuNTg0IDEyLjI0LDQwLjY4NiAxMi4yNDMsNDAuNzkzIEMxMi4yNDUsNDAuOTI1IDEyLjI0NSw0MS4yNTQgMTIuMjQ1LDQxLjM3MSBMMTIuMjQ1LDQxLjQxNCBMMTIuMjM4LDQxLjU0MiBDOC4xNDgsNDMuODg3IDUuNjQ3LDQ1LjMyMSA1LjY0Nyw0NS4zMjEgQzUuNjQ2LDQ1LjMyMSAzLjU3LDQ2LjM2NyAyLjg2LDUwLjUxMyBDMi44Niw1MC41MTMgMS45NDgsNTcuNDc0IDEuOTYyLDcwLjI1OCBDMS45NzcsODIuODI4IDIuNTY4LDg3LjMyOCAzLjEyOSw5MS42MDkgQzMuMzQ5LDkzLjI5MyA2LjEzLDkzLjczNCA2LjEzLDkzLjczNCBDNi40NjEsOTMuNzc0IDYuODI4LDkzLjcwNyA3LjIxLDkzLjQ4NiBMODIuNDgzLDQ5LjkzNSBDODQuMjkxLDQ4Ljg2NiA4NS4xNSw0Ni4yMTYgODUuNTM5LDQzLjY1MSBDODYuNzUyLDM1LjY2MSA4Ny4yMTQsMTAuNjczIDg1LjI2NCwzLjc3MyBDODUuMDY4LDMuMDggODQuNzU0LDIuNjkgODQuMzk2LDIuNDkxIEw4Mi4zMSwxLjcwMSBDODEuNTgzLDEuNzI5IDgwLjg5NCwyLjE2OCA4MC43NzYsMi4yMzYgQzgwLjYzNiwyLjMxNyA0MS44MDcsMjQuNTg1IDIwLjAzMiwzNy4wNzIgTDE5LjgyMiwzNy40NzQiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODIuMzExLDEuNzAxIEw4NC4zOTYsMi40OTEgQzg0Ljc1NCwyLjY5IDg1LjA2OCwzLjA4IDg1LjI2NCwzLjc3MyBDODcuMjEzLDEwLjY3MyA4Ni43NTEsMzUuNjYgODUuNTM5LDQzLjY1MSBDODUuMTQ5LDQ2LjIxNiA4NC4yOSw0OC44NjYgODIuNDgzLDQ5LjkzNSBMNy4yMSw5My40ODYgQzYuODk3LDkzLjY2NyA2LjU5NSw5My43NDQgNi4zMTQsOTMuNzQ0IEw2LjEzMSw5My43MzMgQzYuMTMxLDkzLjczNCAzLjM0OSw5My4yOTMgMy4xMjgsOTEuNjA5IEMyLjU2OCw4Ny4zMjcgMS45NzcsODIuODI4IDEuOTYzLDcwLjI1OCBDMS45NDgsNTcuNDc0IDIuODYsNTAuNTEzIDIuODYsNTAuNTEzIEMzLjU3LDQ2LjM2NyA1LjY0Nyw0NS4zMjEgNS42NDcsNDUuMzIxIEM1LjY0Nyw0NS4zMjEgOC4xNDgsNDMuODg3IDEyLjIzOCw0MS41NDIgTDEyLjI0NSw0MS40MTQgTDEyLjI0NSw0MS4zNzEgQzEyLjI0NSw0MS4yNTQgMTIuMjQ1LDQwLjkyNSAxMi4yNDMsNDAuNzkzIEMxMi4yNCw0MC42ODYgMTIuMzAyLDQwLjU4MyAxMi40MzQsNDAuNTA4IEwxOC40NDYsMzcuMDM2IEMxOC41NzQsMzYuOTYyIDE4Ljc0NiwzNi45MjYgMTguOTI3LDM2LjkyNiBDMTkuMTQ1LDM2LjkyNiAxOS4zNzYsMzYuOTc5IDE5LjU1NCwzNy4wODIgQzE5Ljc0NywzNy4xOTQgMTkuODM5LDM3LjM0IDE5LjgyMiwzNy40NzQgTDIwLjAzMywzNy4wNzIgQzQxLjgwNiwyNC41ODUgODAuNjM2LDIuMzE4IDgwLjc3NywyLjIzNiBDODAuODk0LDIuMTY4IDgxLjU4MywxLjcyOSA4Mi4zMTEsMS43MDEgTTgyLjMxMSwwLjcwNCBMODIuMjcyLDAuNzA1IEM4MS42NTQsMC43MjggODAuOTg5LDAuOTQ5IDgwLjI5OCwxLjM2MSBMODAuMjc3LDEuMzczIEM4MC4xMjksMS40NTggNTkuNzY4LDEzLjEzNSAxOS43NTgsMzYuMDc5IEMxOS41LDM1Ljk4MSAxOS4yMTQsMzUuOTI5IDE4LjkyNywzNS45MjkgQzE4LjU2MiwzNS45MjkgMTguMjIzLDM2LjAxMyAxNy45NDcsMzYuMTczIEwxMS45MzUsMzkuNjQ0IEMxMS40OTMsMzkuODk5IDExLjIzNiw0MC4zMzQgMTEuMjQ2LDQwLjgxIEwxMS4yNDcsNDAuOTYgTDUuMTY3LDQ0LjQ0NyBDNC43OTQsNDQuNjQ2IDIuNjI1LDQ1Ljk3OCAxLjg3Nyw1MC4zNDUgTDEuODcxLDUwLjM4NCBDMS44NjIsNTAuNDU0IDAuOTUxLDU3LjU1NyAwLjk2NSw3MC4yNTkgQzAuOTc5LDgyLjg3OSAxLjU2OCw4Ny4zNzUgMi4xMzcsOTEuNzI0IEwyLjEzOSw5MS43MzkgQzIuNDQ3LDk0LjA5NCA1LjYxNCw5NC42NjIgNS45NzUsOTQuNzE5IEw2LjAwOSw5NC43MjMgQzYuMTEsOTQuNzM2IDYuMjEzLDk0Ljc0MiA2LjMxNCw5NC43NDIgQzYuNzksOTQuNzQyIDcuMjYsOTQuNjEgNy43MSw5NC4zNSBMODIuOTgzLDUwLjc5OCBDODQuNzk0LDQ5LjcyNyA4NS45ODIsNDcuMzc1IDg2LjUyNSw0My44MDEgQzg3LjcxMSwzNS45ODcgODguMjU5LDEwLjcwNSA4Ni4yMjQsMy41MDIgQzg1Ljk3MSwyLjYwOSA4NS41MiwxLjk3NSA4NC44ODEsMS42MiBMODQuNzQ5LDEuNTU4IEw4Mi42NjQsMC43NjkgQzgyLjU1MSwwLjcyNSA4Mi40MzEsMC43MDQgODIuMzExLDAuNzA0IiBpZD0iRmlsbC0yIiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY2LjI2NywxMS41NjUgTDY3Ljc2MiwxMS45OTkgTDExLjQyMyw0NC4zMjUiIGlkPSJGaWxsLTMiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjAyLDkwLjU0NSBDMTIuMDI5LDkwLjU0NSAxMS44NjIsOTAuNDU1IDExLjc2OSw5MC4yOTUgQzExLjYzMiw5MC4wNTcgMTEuNzEzLDg5Ljc1MiAxMS45NTIsODkuNjE0IEwzMC4zODksNzguOTY5IEMzMC42MjgsNzguODMxIDMwLjkzMyw3OC45MTMgMzEuMDcxLDc5LjE1MiBDMzEuMjA4LDc5LjM5IDMxLjEyNyw3OS42OTYgMzAuODg4LDc5LjgzMyBMMTIuNDUxLDkwLjQ3OCBMMTIuMjAyLDkwLjU0NSIgaWQ9IkZpbGwtNCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy43NjQsNDIuNjU0IEwxMy42NTYsNDIuNTkyIEwxMy43MDIsNDIuNDIxIEwxOC44MzcsMzkuNDU3IEwxOS4wMDcsMzkuNTAyIEwxOC45NjIsMzkuNjczIEwxMy44MjcsNDIuNjM3IEwxMy43NjQsNDIuNjU0IiBpZD0iRmlsbC01IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguNTIsOTAuMzc1IEw4LjUyLDQ2LjQyMSBMOC41ODMsNDYuMzg1IEw3NS44NCw3LjU1NCBMNzUuODQsNTEuNTA4IEw3NS43NzgsNTEuNTQ0IEw4LjUyLDkwLjM3NSBMOC41Miw5MC4zNzUgWiBNOC43Nyw0Ni41NjQgTDguNzcsODkuOTQ0IEw3NS41OTEsNTEuMzY1IEw3NS41OTEsNy45ODUgTDguNzcsNDYuNTY0IEw4Ljc3LDQ2LjU2NCBaIiBpZD0iRmlsbC02IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0Ljk4Niw4My4xODIgQzI0Ljc1Niw4My4zMzEgMjQuMzc0LDgzLjU2NiAyNC4xMzcsODMuNzA1IEwxMi42MzIsOTAuNDA2IEMxMi4zOTUsOTAuNTQ1IDEyLjQyNiw5MC42NTggMTIuNyw5MC42NTggTDEzLjI2NSw5MC42NTggQzEzLjU0LDkwLjY1OCAxMy45NTgsOTAuNTQ1IDE0LjE5NSw5MC40MDYgTDI1LjcsODMuNzA1IEMyNS45MzcsODMuNTY2IDI2LjEyOCw4My40NTIgMjYuMTI1LDgzLjQ0OSBDMjYuMTIyLDgzLjQ0NyAyNi4xMTksODMuMjIgMjYuMTE5LDgyLjk0NiBDMjYuMTE5LDgyLjY3MiAyNS45MzEsODIuNTY5IDI1LjcwMSw4Mi43MTkgTDI0Ljk4Niw4My4xODIiIGlkPSJGaWxsLTciIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMjY2LDkwLjc4MiBMMTIuNyw5MC43ODIgQzEyLjUsOTAuNzgyIDEyLjM4NCw5MC43MjYgMTIuMzU0LDkwLjYxNiBDMTIuMzI0LDkwLjUwNiAxMi4zOTcsOTAuMzk5IDEyLjU2OSw5MC4yOTkgTDI0LjA3NCw4My41OTcgQzI0LjMxLDgzLjQ1OSAyNC42ODksODMuMjI2IDI0LjkxOCw4My4wNzggTDI1LjYzMyw4Mi42MTQgQzI1LjcyMyw4Mi41NTUgMjUuODEzLDgyLjUyNSAyNS44OTksODIuNTI1IEMyNi4wNzEsODIuNTI1IDI2LjI0NCw4Mi42NTUgMjYuMjQ0LDgyLjk0NiBDMjYuMjQ0LDgzLjE2IDI2LjI0NSw4My4zMDkgMjYuMjQ3LDgzLjM4MyBMMjYuMjUzLDgzLjM4NyBMMjYuMjQ5LDgzLjQ1NiBDMjYuMjQ2LDgzLjUzMSAyNi4yNDYsODMuNTMxIDI1Ljc2Myw4My44MTIgTDE0LjI1OCw5MC41MTQgQzE0LDkwLjY2NSAxMy41NjQsOTAuNzgyIDEzLjI2Niw5MC43ODIgTDEzLjI2Niw5MC43ODIgWiBNMTIuNjY2LDkwLjUzMiBMMTIuNyw5MC41MzMgTDEzLjI2Niw5MC41MzMgQzEzLjUxOCw5MC41MzMgMTMuOTE1LDkwLjQyNSAxNC4xMzIsOTAuMjk5IEwyNS42MzcsODMuNTk3IEMyNS44MDUsODMuNDk5IDI1LjkzMSw4My40MjQgMjUuOTk4LDgzLjM4MyBDMjUuOTk0LDgzLjI5OSAyNS45OTQsODMuMTY1IDI1Ljk5NCw4Mi45NDYgTDI1Ljg5OSw4Mi43NzUgTDI1Ljc2OCw4Mi44MjQgTDI1LjA1NCw4My4yODcgQzI0LjgyMiw4My40MzcgMjQuNDM4LDgzLjY3MyAyNC4yLDgzLjgxMiBMMTIuNjk1LDkwLjUxNCBMMTIuNjY2LDkwLjUzMiBMMTIuNjY2LDkwLjUzMiBaIiBpZD0iRmlsbC04IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjI2Niw4OS44NzEgTDEyLjcsODkuODcxIEMxMi41LDg5Ljg3MSAxMi4zODQsODkuODE1IDEyLjM1NCw4OS43MDUgQzEyLjMyNCw4OS41OTUgMTIuMzk3LDg5LjQ4OCAxMi41NjksODkuMzg4IEwyNC4wNzQsODIuNjg2IEMyNC4zMzIsODIuNTM1IDI0Ljc2OCw4Mi40MTggMjUuMDY3LDgyLjQxOCBMMjUuNjMyLDgyLjQxOCBDMjUuODMyLDgyLjQxOCAyNS45NDgsODIuNDc0IDI1Ljk3OCw4Mi41ODQgQzI2LjAwOCw4Mi42OTQgMjUuOTM1LDgyLjgwMSAyNS43NjMsODIuOTAxIEwxNC4yNTgsODkuNjAzIEMxNCw4OS43NTQgMTMuNTY0LDg5Ljg3MSAxMy4yNjYsODkuODcxIEwxMy4yNjYsODkuODcxIFogTTEyLjY2Niw4OS42MjEgTDEyLjcsODkuNjIyIEwxMy4yNjYsODkuNjIyIEMxMy41MTgsODkuNjIyIDEzLjkxNSw4OS41MTUgMTQuMTMyLDg5LjM4OCBMMjUuNjM3LDgyLjY4NiBMMjUuNjY3LDgyLjY2OCBMMjUuNjMyLDgyLjY2NyBMMjUuMDY3LDgyLjY2NyBDMjQuODE1LDgyLjY2NyAyNC40MTgsODIuNzc1IDI0LjIsODIuOTAxIEwxMi42OTUsODkuNjAzIEwxMi42NjYsODkuNjIxIEwxMi42NjYsODkuNjIxIFoiIGlkPSJGaWxsLTkiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzcsOTAuODAxIEwxMi4zNyw4OS41NTQgTDEyLjM3LDkwLjgwMSIgaWQ9IkZpbGwtMTAiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi4xMyw5My45MDEgQzUuMzc5LDkzLjgwOCA0LjgxNiw5My4xNjQgNC42OTEsOTIuNTI1IEMzLjg2LDg4LjI4NyAzLjU0LDgzLjc0MyAzLjUyNiw3MS4xNzMgQzMuNTExLDU4LjM4OSA0LjQyMyw1MS40MjggNC40MjMsNTEuNDI4IEM1LjEzNCw0Ny4yODIgNy4yMSw0Ni4yMzYgNy4yMSw0Ni4yMzYgQzcuMjEsNDYuMjM2IDgxLjY2NywzLjI1IDgyLjA2OSwzLjAxNyBDODIuMjkyLDIuODg4IDg0LjU1NiwxLjQzMyA4NS4yNjQsMy45NCBDODcuMjE0LDEwLjg0IDg2Ljc1MiwzNS44MjcgODUuNTM5LDQzLjgxOCBDODUuMTUsNDYuMzgzIDg0LjI5MSw0OS4wMzMgODIuNDgzLDUwLjEwMSBMNy4yMSw5My42NTMgQzYuODI4LDkzLjg3NCA2LjQ2MSw5My45NDEgNi4xMyw5My45MDEgQzYuMTMsOTMuOTAxIDMuMzQ5LDkzLjQ2IDMuMTI5LDkxLjc3NiBDMi41NjgsODcuNDk1IDEuOTc3LDgyLjk5NSAxLjk2Miw3MC40MjUgQzEuOTQ4LDU3LjY0MSAyLjg2LDUwLjY4IDIuODYsNTAuNjggQzMuNTcsNDYuNTM0IDUuNjQ3LDQ1LjQ4OSA1LjY0Nyw0NS40ODkgQzUuNjQ2LDQ1LjQ4OSA4LjA2NSw0NC4wOTIgMTIuMjQ1LDQxLjY3OSBMMTMuMTE2LDQxLjU2IEwxOS43MTUsMzcuNzMgTDE5Ljc2MSwzNy4yNjkgTDYuMTMsOTMuOTAxIiBpZD0iRmlsbC0xMSIgZmlsbD0iI0ZBRkFGQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjMxNyw5NC4xNjEgTDYuMTAyLDk0LjE0OCBMNi4xMDEsOTQuMTQ4IEw1Ljg1Nyw5NC4xMDEgQzUuMTM4LDkzLjk0NSAzLjA4NSw5My4zNjUgMi44ODEsOTEuODA5IEMyLjMxMyw4Ny40NjkgMS43MjcsODIuOTk2IDEuNzEzLDcwLjQyNSBDMS42OTksNTcuNzcxIDIuNjA0LDUwLjcxOCAyLjYxMyw1MC42NDggQzMuMzM4LDQ2LjQxNyA1LjQ0NSw0NS4zMSA1LjUzNSw0NS4yNjYgTDEyLjE2Myw0MS40MzkgTDEzLjAzMyw0MS4zMiBMMTkuNDc5LDM3LjU3OCBMMTkuNTEzLDM3LjI0NCBDMTkuNTI2LDM3LjEwNyAxOS42NDcsMzcuMDA4IDE5Ljc4NiwzNy4wMjEgQzE5LjkyMiwzNy4wMzQgMjAuMDIzLDM3LjE1NiAyMC4wMDksMzcuMjkzIEwxOS45NSwzNy44ODIgTDEzLjE5OCw0MS44MDEgTDEyLjMyOCw0MS45MTkgTDUuNzcyLDQ1LjcwNCBDNS43NDEsNDUuNzIgMy43ODIsNDYuNzcyIDMuMTA2LDUwLjcyMiBDMy4wOTksNTAuNzgyIDIuMTk4LDU3LjgwOCAyLjIxMiw3MC40MjQgQzIuMjI2LDgyLjk2MyAyLjgwOSw4Ny40MiAzLjM3Myw5MS43MjkgQzMuNDY0LDkyLjQyIDQuMDYyLDkyLjg4MyA0LjY4Miw5My4xODEgQzQuNTY2LDkyLjk4NCA0LjQ4Niw5Mi43NzYgNC40NDYsOTIuNTcyIEMzLjY2NSw4OC41ODggMy4yOTEsODQuMzcgMy4yNzYsNzEuMTczIEMzLjI2Miw1OC41MiA0LjE2Nyw1MS40NjYgNC4xNzYsNTEuMzk2IEM0LjkwMSw0Ny4xNjUgNy4wMDgsNDYuMDU5IDcuMDk4LDQ2LjAxNCBDNy4wOTQsNDYuMDE1IDgxLjU0MiwzLjAzNCA4MS45NDQsMi44MDIgTDgxLjk3MiwyLjc4NSBDODIuODc2LDIuMjQ3IDgzLjY5MiwyLjA5NyA4NC4zMzIsMi4zNTIgQzg0Ljg4NywyLjU3MyA4NS4yODEsMy4wODUgODUuNTA0LDMuODcyIEM4Ny41MTgsMTEgODYuOTY0LDM2LjA5MSA4NS43ODUsNDMuODU1IEM4NS4yNzgsNDcuMTk2IDg0LjIxLDQ5LjM3IDgyLjYxLDUwLjMxNyBMNy4zMzUsOTMuODY5IEM2Ljk5OSw5NC4wNjMgNi42NTgsOTQuMTYxIDYuMzE3LDk0LjE2MSBMNi4zMTcsOTQuMTYxIFogTTYuMTcsOTMuNjU0IEM2LjQ2Myw5My42OSA2Ljc3NCw5My42MTcgNy4wODUsOTMuNDM3IEw4Mi4zNTgsNDkuODg2IEM4NC4xODEsNDguODA4IDg0Ljk2LDQ1Ljk3MSA4NS4yOTIsNDMuNzggQzg2LjQ2NiwzNi4wNDkgODcuMDIzLDExLjA4NSA4NS4wMjQsNC4wMDggQzg0Ljg0NiwzLjM3NyA4NC41NTEsMi45NzYgODQuMTQ4LDIuODE2IEM4My42NjQsMi42MjMgODIuOTgyLDIuNzY0IDgyLjIyNywzLjIxMyBMODIuMTkzLDMuMjM0IEM4MS43OTEsMy40NjYgNy4zMzUsNDYuNDUyIDcuMzM1LDQ2LjQ1MiBDNy4zMDQsNDYuNDY5IDUuMzQ2LDQ3LjUyMSA0LjY2OSw1MS40NzEgQzQuNjYyLDUxLjUzIDMuNzYxLDU4LjU1NiAzLjc3NSw3MS4xNzMgQzMuNzksODQuMzI4IDQuMTYxLDg4LjUyNCA0LjkzNiw5Mi40NzYgQzUuMDI2LDkyLjkzNyA1LjQxMiw5My40NTkgNS45NzMsOTMuNjE1IEM2LjA4Nyw5My42NCA2LjE1OCw5My42NTIgNi4xNjksOTMuNjU0IEw2LjE3LDkzLjY1NCBMNi4xNyw5My42NTQgWiIgaWQ9IkZpbGwtMTIiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy4zMTcsNjguOTgyIEM3LjgwNiw2OC43MDEgOC4yMDIsNjguOTI2IDguMjAyLDY5LjQ4NyBDOC4yMDIsNzAuMDQ3IDcuODA2LDcwLjczIDcuMzE3LDcxLjAxMiBDNi44MjksNzEuMjk0IDYuNDMzLDcxLjA2OSA2LjQzMyw3MC41MDggQzYuNDMzLDY5Ljk0OCA2LjgyOSw2OS4yNjUgNy4zMTcsNjguOTgyIiBpZD0iRmlsbC0xMyIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjkyLDcxLjEzMyBDNi42MzEsNzEuMTMzIDYuNDMzLDcwLjkwNSA2LjQzMyw3MC41MDggQzYuNDMzLDY5Ljk0OCA2LjgyOSw2OS4yNjUgNy4zMTcsNjguOTgyIEM3LjQ2LDY4LjkgNy41OTUsNjguODYxIDcuNzE0LDY4Ljg2MSBDOC4wMDMsNjguODYxIDguMjAyLDY5LjA5IDguMjAyLDY5LjQ4NyBDOC4yMDIsNzAuMDQ3IDcuODA2LDcwLjczIDcuMzE3LDcxLjAxMiBDNy4xNzQsNzEuMDk0IDcuMDM5LDcxLjEzMyA2LjkyLDcxLjEzMyBNNy43MTQsNjguNjc0IEM3LjU1Nyw2OC42NzQgNy4zOTIsNjguNzIzIDcuMjI0LDY4LjgyMSBDNi42NzYsNjkuMTM4IDYuMjQ2LDY5Ljg3OSA2LjI0Niw3MC41MDggQzYuMjQ2LDcwLjk5NCA2LjUxNyw3MS4zMiA2LjkyLDcxLjMyIEM3LjA3OCw3MS4zMiA3LjI0Myw3MS4yNzEgNy40MTEsNzEuMTc0IEM3Ljk1OSw3MC44NTcgOC4zODksNzAuMTE3IDguMzg5LDY5LjQ4NyBDOC4zODksNjkuMDAxIDguMTE3LDY4LjY3NCA3LjcxNCw2OC42NzQiIGlkPSJGaWxsLTE0IiBmaWxsPSIjODA5N0EyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuOTIsNzAuOTQ3IEM2LjY0OSw3MC45NDcgNi42MjEsNzAuNjQgNi42MjEsNzAuNTA4IEM2LjYyMSw3MC4wMTcgNi45ODIsNjkuMzkyIDcuNDExLDY5LjE0NSBDNy41MjEsNjkuMDgyIDcuNjI1LDY5LjA0OSA3LjcxNCw2OS4wNDkgQzcuOTg2LDY5LjA0OSA4LjAxNSw2OS4zNTUgOC4wMTUsNjkuNDg3IEM4LjAxNSw2OS45NzggNy42NTIsNzAuNjAzIDcuMjI0LDcwLjg1MSBDNy4xMTUsNzAuOTE0IDcuMDEsNzAuOTQ3IDYuOTIsNzAuOTQ3IE03LjcxNCw2OC44NjEgQzcuNTk1LDY4Ljg2MSA3LjQ2LDY4LjkgNy4zMTcsNjguOTgyIEM2LjgyOSw2OS4yNjUgNi40MzMsNjkuOTQ4IDYuNDMzLDcwLjUwOCBDNi40MzMsNzAuOTA1IDYuNjMxLDcxLjEzMyA2LjkyLDcxLjEzMyBDNy4wMzksNzEuMTMzIDcuMTc0LDcxLjA5NCA3LjMxNyw3MS4wMTIgQzcuODA2LDcwLjczIDguMjAyLDcwLjA0NyA4LjIwMiw2OS40ODcgQzguMjAyLDY5LjA5IDguMDAzLDY4Ljg2MSA3LjcxNCw2OC44NjEiIGlkPSJGaWxsLTE1IiBmaWxsPSIjODA5N0EyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNDQ0LDg1LjM1IEM3LjcwOCw4NS4xOTggNy45MjEsODUuMzE5IDcuOTIxLDg1LjYyMiBDNy45MjEsODUuOTI1IDcuNzA4LDg2LjI5MiA3LjQ0NCw4Ni40NDQgQzcuMTgxLDg2LjU5NyA2Ljk2Nyw4Ni40NzUgNi45NjcsODYuMTczIEM2Ljk2Nyw4NS44NzEgNy4xODEsODUuNTAyIDcuNDQ0LDg1LjM1IiBpZD0iRmlsbC0xNiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjIzLDg2LjUxIEM3LjA3NCw4Ni41MSA2Ljk2Nyw4Ni4zODcgNi45NjcsODYuMTczIEM2Ljk2Nyw4NS44NzEgNy4xODEsODUuNTAyIDcuNDQ0LDg1LjM1IEM3LjUyMSw4NS4zMDUgNy41OTQsODUuMjg0IDcuNjU4LDg1LjI4NCBDNy44MTQsODUuMjg0IDcuOTIxLDg1LjQwOCA3LjkyMSw4NS42MjIgQzcuOTIxLDg1LjkyNSA3LjcwOCw4Ni4yOTIgNy40NDQsODYuNDQ0IEM3LjM2Nyw4Ni40ODkgNy4yOTQsODYuNTEgNy4yMyw4Ni41MSBNNy42NTgsODUuMDk4IEM3LjU1OCw4NS4wOTggNy40NTUsODUuMTI3IDcuMzUxLDg1LjE4OCBDNy4wMzEsODUuMzczIDYuNzgxLDg1LjgwNiA2Ljc4MSw4Ni4xNzMgQzYuNzgxLDg2LjQ4MiA2Ljk2Niw4Ni42OTcgNy4yMyw4Ni42OTcgQzcuMzMsODYuNjk3IDcuNDMzLDg2LjY2NiA3LjUzOCw4Ni42MDcgQzcuODU4LDg2LjQyMiA4LjEwOCw4NS45ODkgOC4xMDgsODUuNjIyIEM4LjEwOCw4NS4zMTMgNy45MjMsODUuMDk4IDcuNjU4LDg1LjA5OCIgaWQ9IkZpbGwtMTciIGZpbGw9IiM4MDk3QTIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy4yMyw4Ni4zMjIgTDcuMTU0LDg2LjE3MyBDNy4xNTQsODUuOTM4IDcuMzMzLDg1LjYyOSA3LjUzOCw4NS41MTIgTDcuNjU4LDg1LjQ3MSBMNy43MzQsODUuNjIyIEM3LjczNCw4NS44NTYgNy41NTUsODYuMTY0IDcuMzUxLDg2LjI4MiBMNy4yMyw4Ni4zMjIgTTcuNjU4LDg1LjI4NCBDNy41OTQsODUuMjg0IDcuNTIxLDg1LjMwNSA3LjQ0NCw4NS4zNSBDNy4xODEsODUuNTAyIDYuOTY3LDg1Ljg3MSA2Ljk2Nyw4Ni4xNzMgQzYuOTY3LDg2LjM4NyA3LjA3NCw4Ni41MSA3LjIzLDg2LjUxIEM3LjI5NCw4Ni41MSA3LjM2Nyw4Ni40ODkgNy40NDQsODYuNDQ0IEM3LjcwOCw4Ni4yOTIgNy45MjEsODUuOTI1IDcuOTIxLDg1LjYyMiBDNy45MjEsODUuNDA4IDcuODE0LDg1LjI4NCA3LjY1OCw4NS4yODQiIGlkPSJGaWxsLTE4IiBmaWxsPSIjODA5N0EyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTc3LjI3OCw3Ljc2OSBMNzcuMjc4LDUxLjQzNiBMMTAuMjA4LDkwLjE2IEwxMC4yMDgsNDYuNDkzIEw3Ny4yNzgsNy43NjkiIGlkPSJGaWxsLTE5IiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjA4Myw5MC4zNzUgTDEwLjA4Myw0Ni40MjEgTDEwLjE0Niw0Ni4zODUgTDc3LjQwMyw3LjU1NCBMNzcuNDAzLDUxLjUwOCBMNzcuMzQxLDUxLjU0NCBMMTAuMDgzLDkwLjM3NSBMMTAuMDgzLDkwLjM3NSBaIE0xMC4zMzMsNDYuNTY0IEwxMC4zMzMsODkuOTQ0IEw3Ny4xNTQsNTEuMzY1IEw3Ny4xNTQsNy45ODUgTDEwLjMzMyw0Ni41NjQgTDEwLjMzMyw0Ni41NjQgWiIgaWQ9IkZpbGwtMjAiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjUuNzM3LDg4LjY0NyBMMTE4LjA5OCw5MS45ODEgTDExOC4wOTgsODQgTDEwNi42MzksODguNzEzIEwxMDYuNjM5LDk2Ljk4MiBMOTksMTAwLjMxNSBMMTEyLjM2OSwxMDMuOTYxIEwxMjUuNzM3LDg4LjY0NyIgaWQ9IkltcG9ydGVkLUxheWVycy1Db3B5LTIiIGZpbGw9IiM0NTVBNjQiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                      }
                      ;
                      var ne = "CardboardV1"
                        , Ne = "WEBVR_CARDBOARD_VIEWER";
                      function ue(e) {
                          try {
                              this.selectedKey = localStorage.getItem(Ne)
                          } catch (e) {
                              console.error("Failed to load viewer profile: %s", e)
                          }
                          this.selectedKey || (this.selectedKey = e || ne),
                          this.dialog = this.createDialog_(H.Viewers),
                          this.root = null,
                          this.onChangeCallbacks_ = []
                      }
                      ue.prototype.show = function(e) {
                          this.root = e,
                          e.appendChild(this.dialog);
                          var t = this.dialog.querySelector("#" + this.selectedKey);
                          t.checked = !0,
                          this.dialog.style.display = "block"
                      }
                      ,
                      ue.prototype.hide = function() {
                          this.root && this.root.contains(this.dialog) && this.root.removeChild(this.dialog),
                          this.dialog.style.display = "none"
                      }
                      ,
                      ue.prototype.getCurrentViewer = function() {
                          return H.Viewers[this.selectedKey]
                      }
                      ,
                      ue.prototype.getSelectedKey_ = function() {
                          var e = this.dialog.querySelector("input[name=field]:checked");
                          return e ? e.id : null
                      }
                      ,
                      ue.prototype.onChange = function(e) {
                          this.onChangeCallbacks_.push(e)
                      }
                      ,
                      ue.prototype.fireOnChange_ = function(e) {
                          for (var t = 0; t < this.onChangeCallbacks_.length; t++)
                              this.onChangeCallbacks_[t](e)
                      }
                      ,
                      ue.prototype.onSave_ = function() {
                          if (this.selectedKey = this.getSelectedKey_(),
                          this.selectedKey && H.Viewers[this.selectedKey]) {
                              this.fireOnChange_(H.Viewers[this.selectedKey]);
                              try {
                                  localStorage.setItem(Ne, this.selectedKey)
                              } catch (e) {
                                  console.error("Failed to save viewer profile: %s", e)
                              }
                              this.hide()
                          } else
                              console.error("ViewerSelector.onSave_: this should never happen!")
                      }
                      ,
                      ue.prototype.createDialog_ = function(e) {
                          var t = document.createElement("div");
                          t.classList.add("webvr-polyfill-viewer-selector"),
                          t.style.display = "none";
                          var i = document.createElement("div")
                            , M = i.style;
                          M.position = "fixed",
                          M.left = 0,
                          M.top = 0,
                          M.width = "100%",
                          M.height = "100%",
                          M.background = "rgba(0, 0, 0, 0.3)",
                          i.addEventListener("click", this.hide.bind(this));
                          var A = document.createElement("div")
                            , M = A.style;
                          for (var s in M.boxSizing = "border-box",
                          M.position = "fixed",
                          M.top = "24px",
                          M.left = "50%",
                          M.marginLeft = "-140px",
                          M.width = "280px",
                          M.padding = "24px",
                          M.overflow = "hidden",
                          M.background = "#fafafa",
                          M.fontFamily = "'Roboto', sans-serif",
                          M.boxShadow = "0px 5px 20px #666",
                          A.appendChild(this.createH1_("Select your viewer")),
                          e)
                              A.appendChild(this.createChoice_(s, e[s].label));
                          return A.appendChild(this.createButton_("Save", this.onSave_.bind(this))),
                          t.appendChild(i),
                          t.appendChild(A),
                          t
                      }
                      ,
                      ue.prototype.createH1_ = function(e) {
                          var t = document.createElement("h1")
                            , i = t.style;
                          return i.color = "black",
                          i.fontSize = "20px",
                          i.fontWeight = "bold",
                          i.marginTop = 0,
                          i.marginBottom = "24px",
                          t.innerHTML = e,
                          t
                      }
                      ,
                      ue.prototype.createChoice_ = function(e, t) {
                          var i = document.createElement("div");
                          i.style.marginTop = "8px",
                          i.style.color = "black";
                          var M = document.createElement("input");
                          M.style.fontSize = "30px",
                          M.setAttribute("id", e),
                          M.setAttribute("type", "radio"),
                          M.setAttribute("value", e),
                          M.setAttribute("name", "field");
                          var A = document.createElement("label");
                          return A.style.marginLeft = "4px",
                          A.setAttribute("for", e),
                          A.innerHTML = t,
                          i.appendChild(M),
                          i.appendChild(A),
                          i
                      }
                      ,
                      ue.prototype.createButton_ = function(e, t) {
                          var i = document.createElement("button");
                          i.innerHTML = e;
                          var M = i.style;
                          return M.float = "right",
                          M.textTransform = "uppercase",
                          M.color = "#1094f7",
                          M.fontSize = "14px",
                          M.letterSpacing = 0,
                          M.border = 0,
                          M.background = "none",
                          M.marginTop = "16px",
                          i.addEventListener("click", t),
                          i
                      }
                      ,
                      "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
                      var De, oe, ae = (function(e, t) {
                          var i;
                          i = function() {
                              return function(e) {
                                  var t = {};
                                  function i(M) {
                                      if (t[M])
                                          return t[M].exports;
                                      var A = t[M] = {
                                          i: M,
                                          l: !1,
                                          exports: {}
                                      };
                                      return e[M].call(A.exports, A, A.exports, i),
                                      A.l = !0,
                                      A.exports
                                  }
                                  return i.m = e,
                                  i.c = t,
                                  i.d = function(e, t, M) {
                                      i.o(e, t) || Object.defineProperty(e, t, {
                                          configurable: !1,
                                          enumerable: !0,
                                          get: M
                                      })
                                  }
                                  ,
                                  i.n = function(e) {
                                      var t = e && e.__esModule ? function() {
                                          return e.default
                                      }
                                      : function() {
                                          return e
                                      }
                                      ;
                                      return i.d(t, "a", t),
                                      t
                                  }
                                  ,
                                  i.o = function(e, t) {
                                      return Object.prototype.hasOwnProperty.call(e, t)
                                  }
                                  ,
                                  i.p = "",
                                  i(i.s = 0)
                              }([function(e, t, i) {
                                  var M = function() {
                                      function e(e, t) {
                                          for (var i = 0; i < t.length; i++) {
                                              var M = t[i];
                                              M.enumerable = M.enumerable || !1,
                                              M.configurable = !0,
                                              "value"in M && (M.writable = !0),
                                              Object.defineProperty(e, M.key, M)
                                          }
                                      }
                                      return function(t, i, M) {
                                          return i && e(t.prototype, i),
                                          M && e(t, M),
                                          t
                                      }
                                  }()
                                    , A = i(1)
                                    , s = "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream
                                    , r = function() {
                                      function e() {
                                          !function(e, t) {
                                              if (!(e instanceof t))
                                                  throw new TypeError("Cannot call a class as a function")
                                          }(this, e),
                                          s ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"),
                                          this.noSleepVideo.setAttribute("playsinline", ""),
                                          this.noSleepVideo.setAttribute("src", A),
                                          this.noSleepVideo.addEventListener("timeupdate", function(e) {
                                              this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
                                          }
                                          .bind(this)))
                                      }
                                      return M(e, [{
                                          key: "enable",
                                          value: function() {
                                              s ? (this.disable(),
                                              this.noSleepTimer = window.setInterval(function() {
                                                  window.location.href = "/",
                                                  window.setTimeout(window.stop, 0)
                                              }, 15e3)) : this.noSleepVideo.play()
                                          }
                                      }, {
                                          key: "disable",
                                          value: function() {
                                              s ? this.noSleepTimer && (window.clearInterval(this.noSleepTimer),
                                              this.noSleepTimer = null) : this.noSleepVideo.pause()
                                          }
                                      }]),
                                      e
                                  }();
                                  e.exports = r
                              }
                              , function(e, t, i) {
                                  e.exports = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="
                              }
                              ])
                          }
                          ,
                          e.exports = i()
                      }(oe = {
                          exports: {}
                      }, oe.exports),
                      (De = oe.exports) && De.__esModule ? De.default : De), ge = 1e3, Le = [0, 0, .5, 1], ce = [.5, 0, .5, 1], Ie = window.requestAnimationFrame, je = window.cancelAnimationFrame;
                      function Te(e) {
                          Object.defineProperties(this, {
                              hasPosition: {
                                  writable: !1,
                                  enumerable: !0,
                                  value: e.hasPosition
                              },
                              hasExternalDisplay: {
                                  writable: !1,
                                  enumerable: !0,
                                  value: e.hasExternalDisplay
                              },
                              canPresent: {
                                  writable: !1,
                                  enumerable: !0,
                                  value: e.canPresent
                              },
                              maxLayers: {
                                  writable: !1,
                                  enumerable: !0,
                                  value: e.maxLayers
                              },
                              hasOrientation: {
                                  enumerable: !0,
                                  get: function() {
                                      return O("VRDisplayCapabilities.prototype.hasOrientation", "VRDisplay.prototype.getFrameData"),
                                      e.hasOrientation
                                  }
                              }
                          })
                      }
                      function Ee(e) {
                          var t = !("wakelock"in (e = e || {})) || e.wakelock;
                          this.isPolyfilled = !0,
                          this.displayId = ge++,
                          this.displayName = "",
                          this.depthNear = .01,
                          this.depthFar = 1e4,
                          this.isPresenting = !1,
                          Object.defineProperty(this, "isConnected", {
                              get: function() {
                                  return O("VRDisplay.prototype.isConnected", "VRDisplayCapabilities.prototype.hasExternalDisplay"),
                                  !1
                              }
                          }),
                          this.capabilities = new Te({
                              hasPosition: !1,
                              hasOrientation: !1,
                              hasExternalDisplay: !1,
                              canPresent: !1,
                              maxLayers: 1
                          }),
                          this.stageParameters = null,
                          this.waitingForPresent_ = !1,
                          this.layer_ = null,
                          this.originalParent_ = null,
                          this.fullscreenElement_ = null,
                          this.fullscreenWrapper_ = null,
                          this.fullscreenElementCachedStyle_ = null,
                          this.fullscreenEventTarget_ = null,
                          this.fullscreenChangeHandler_ = null,
                          this.fullscreenErrorHandler_ = null,
                          t && y() && (this.wakelock_ = new ae)
                      }
                      Ee.prototype.getFrameData = function(e) {
                          return h(e, this._getPose(), this)
                      }
                      ,
                      Ee.prototype.getPose = function() {
                          return O("VRDisplay.prototype.getPose", "VRDisplay.prototype.getFrameData"),
                          this._getPose()
                      }
                      ,
                      Ee.prototype.resetPose = function() {
                          return O("VRDisplay.prototype.resetPose"),
                          this._resetPose()
                      }
                      ,
                      Ee.prototype.getImmediatePose = function() {
                          return O("VRDisplay.prototype.getImmediatePose", "VRDisplay.prototype.getFrameData"),
                          this._getPose()
                      }
                      ,
                      Ee.prototype.requestAnimationFrame = function(e) {
                          return Ie(e)
                      }
                      ,
                      Ee.prototype.cancelAnimationFrame = function(e) {
                          return je(e)
                      }
                      ,
                      Ee.prototype.wrapForFullscreen = function(e) {
                          if (N())
                              return e;
                          if (!this.fullscreenWrapper_) {
                              this.fullscreenWrapper_ = document.createElement("div");
                              var t = ["height: " + Math.min(screen.height, screen.width) + "px !important", "top: 0 !important", "left: 0 !important", "right: 0 !important", "border: 0", "margin: 0", "padding: 0", "z-index: 999999 !important", "position: fixed"];
                              this.fullscreenWrapper_.setAttribute("style", t.join("; ") + ";"),
                              this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")
                          }
                          if (this.fullscreenElement_ == e)
                              return this.fullscreenWrapper_;
                          if (this.fullscreenElement_ && (this.originalParent_ ? this.originalParent_.appendChild(this.fullscreenElement_) : this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)),
                          this.fullscreenElement_ = e,
                          this.originalParent_ = e.parentElement,
                          this.originalParent_ || document.body.appendChild(e),
                          !this.fullscreenWrapper_.parentElement) {
                              var i = this.fullscreenElement_.parentElement;
                              i.insertBefore(this.fullscreenWrapper_, this.fullscreenElement_),
                              i.removeChild(this.fullscreenElement_)
                          }
                          this.fullscreenWrapper_.insertBefore(this.fullscreenElement_, this.fullscreenWrapper_.firstChild),
                          this.fullscreenElementCachedStyle_ = this.fullscreenElement_.getAttribute("style");
                          var M = this;
                          return function() {
                              if (M.fullscreenElement_) {
                                  var e = ["position: absolute", "top: 0", "left: 0", "width: " + Math.max(screen.width, screen.height) + "px", "height: " + Math.min(screen.height, screen.width) + "px", "border: 0", "margin: 0", "padding: 0"];
                                  M.fullscreenElement_.setAttribute("style", e.join("; ") + ";")
                              }
                          }(),
                          this.fullscreenWrapper_
                      }
                      ,
                      Ee.prototype.removeFullscreenWrapper = function() {
                          if (this.fullscreenElement_) {
                              var e = this.fullscreenElement_;
                              this.fullscreenElementCachedStyle_ ? e.setAttribute("style", this.fullscreenElementCachedStyle_) : e.removeAttribute("style"),
                              this.fullscreenElement_ = null,
                              this.fullscreenElementCachedStyle_ = null;
                              var t = this.fullscreenWrapper_.parentElement;
                              return this.fullscreenWrapper_.removeChild(e),
                              this.originalParent_ === t ? t.insertBefore(e, this.fullscreenWrapper_) : this.originalParent_ && this.originalParent_.appendChild(e),
                              t.removeChild(this.fullscreenWrapper_),
                              e
                          }
                      }
                      ,
                      Ee.prototype.requestPresent = function(e) {
                          var t = this.isPresenting
                            , i = this;
                          return e instanceof Array || (O("VRDisplay.prototype.requestPresent with non-array argument", "an array of VRLayers as the first argument"),
                          e = [e]),
                          new Promise(function(M, A) {
                              if (i.capabilities.canPresent)
                                  if (0 == e.length || e.length > i.capabilities.maxLayers)
                                      A(new Error("Invalid number of layers."));
                                  else {
                                      var s = e[0];
                                      if (s.source) {
                                          var r = s.leftBounds || Le
                                            , n = s.rightBounds || ce;
                                          if (t) {
                                              var D = i.layer_;
                                              D.source !== s.source && (D.source = s.source);
                                              for (var o = 0; o < 4; o++)
                                                  D.leftBounds[o] = r[o],
                                                  D.rightBounds[o] = n[o];
                                              return i.wrapForFullscreen(i.layer_.source),
                                              i.updatePresent_(),
                                              void M()
                                          }
                                          if (i.layer_ = {
                                              predistorted: s.predistorted,
                                              source: s.source,
                                              leftBounds: r.slice(0),
                                              rightBounds: n.slice(0)
                                          },
                                          i.waitingForPresent_ = !1,
                                          i.layer_ && i.layer_.source) {
                                              var a = i.wrapForFullscreen(i.layer_.source);
                                              i.addFullscreenListeners_(a, function() {
                                                  var e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                                                  i.isPresenting = a === e,
                                                  i.isPresenting ? (screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape-primary").catch(function(e) {
                                                      console.error("screen.orientation.lock() failed due to", e.message)
                                                  }),
                                                  i.waitingForPresent_ = !1,
                                                  i.beginPresent_(),
                                                  M()) : (screen.orientation && screen.orientation.unlock && screen.orientation.unlock(),
                                                  i.removeFullscreenWrapper(),
                                                  i.disableWakeLock(),
                                                  i.endPresent_(),
                                                  i.removeFullscreenListeners_()),
                                                  i.fireVRDisplayPresentChange_()
                                              }, function() {
                                                  i.waitingForPresent_ && (i.removeFullscreenWrapper(),
                                                  i.removeFullscreenListeners_(),
                                                  i.disableWakeLock(),
                                                  i.waitingForPresent_ = !1,
                                                  i.isPresenting = !1,
                                                  A(new Error("Unable to present.")))
                                              }),
                                              function(e) {
                                                  if (u())
                                                      return !1;
                                                  if (e.requestFullscreen)
                                                      e.requestFullscreen();
                                                  else if (e.webkitRequestFullscreen)
                                                      e.webkitRequestFullscreen();
                                                  else if (e.mozRequestFullScreen)
                                                      e.mozRequestFullScreen();
                                                  else {
                                                      if (!e.msRequestFullscreen)
                                                          return !1;
                                                      e.msRequestFullscreen()
                                                  }
                                                  return !0
                                              }(a) ? (i.enableWakeLock(),
                                              i.waitingForPresent_ = !0) : (N() || u()) && (i.enableWakeLock(),
                                              i.isPresenting = !0,
                                              i.beginPresent_(),
                                              i.fireVRDisplayPresentChange_(),
                                              M())
                                          }
                                          i.waitingForPresent_ || N() || (j(),
                                          A(new Error("Unable to present.")))
                                      } else
                                          M()
                                  }
                              else
                                  A(new Error("VRDisplay is not capable of presenting."))
                          }
                          )
                      }
                      ,
                      Ee.prototype.exitPresent = function() {
                          var e = this.isPresenting
                            , t = this;
                          return this.isPresenting = !1,
                          this.layer_ = null,
                          this.disableWakeLock(),
                          new Promise(function(i, M) {
                              e ? (!j() && N() && (t.endPresent_(),
                              t.fireVRDisplayPresentChange_()),
                              u() && (t.removeFullscreenWrapper(),
                              t.removeFullscreenListeners_(),
                              t.endPresent_(),
                              t.fireVRDisplayPresentChange_()),
                              i()) : M(new Error("Was not presenting to VRDisplay."))
                          }
                          )
                      }
                      ,
                      Ee.prototype.getLayers = function() {
                          return this.layer_ ? [this.layer_] : []
                      }
                      ,
                      Ee.prototype.fireVRDisplayPresentChange_ = function() {
                          var e = new CustomEvent("vrdisplaypresentchange",{
                              detail: {
                                  display: this
                              }
                          });
                          window.dispatchEvent(e)
                      }
                      ,
                      Ee.prototype.fireVRDisplayConnect_ = function() {
                          var e = new CustomEvent("vrdisplayconnect",{
                              detail: {
                                  display: this
                              }
                          });
                          window.dispatchEvent(e)
                      }
                      ,
                      Ee.prototype.addFullscreenListeners_ = function(e, t, i) {
                          this.removeFullscreenListeners_(),
                          this.fullscreenEventTarget_ = e,
                          this.fullscreenChangeHandler_ = t,
                          this.fullscreenErrorHandler_ = i,
                          t && (document.fullscreenEnabled ? e.addEventListener("fullscreenchange", t, !1) : document.webkitFullscreenEnabled ? e.addEventListener("webkitfullscreenchange", t, !1) : document.mozFullScreenEnabled ? document.addEventListener("mozfullscreenchange", t, !1) : document.msFullscreenEnabled && e.addEventListener("msfullscreenchange", t, !1)),
                          i && (document.fullscreenEnabled ? e.addEventListener("fullscreenerror", i, !1) : document.webkitFullscreenEnabled ? e.addEventListener("webkitfullscreenerror", i, !1) : document.mozFullScreenEnabled ? document.addEventListener("mozfullscreenerror", i, !1) : document.msFullscreenEnabled && e.addEventListener("msfullscreenerror", i, !1))
                      }
                      ,
                      Ee.prototype.removeFullscreenListeners_ = function() {
                          if (this.fullscreenEventTarget_) {
                              var e = this.fullscreenEventTarget_;
                              if (this.fullscreenChangeHandler_) {
                                  var t = this.fullscreenChangeHandler_;
                                  e.removeEventListener("fullscreenchange", t, !1),
                                  e.removeEventListener("webkitfullscreenchange", t, !1),
                                  document.removeEventListener("mozfullscreenchange", t, !1),
                                  e.removeEventListener("msfullscreenchange", t, !1)
                              }
                              if (this.fullscreenErrorHandler_) {
                                  var i = this.fullscreenErrorHandler_;
                                  e.removeEventListener("fullscreenerror", i, !1),
                                  e.removeEventListener("webkitfullscreenerror", i, !1),
                                  document.removeEventListener("mozfullscreenerror", i, !1),
                                  e.removeEventListener("msfullscreenerror", i, !1)
                              }
                              this.fullscreenEventTarget_ = null,
                              this.fullscreenChangeHandler_ = null,
                              this.fullscreenErrorHandler_ = null
                          }
                      }
                      ,
                      Ee.prototype.enableWakeLock = function() {
                          this.wakelock_ && this.wakelock_.enable()
                      }
                      ,
                      Ee.prototype.disableWakeLock = function() {
                          this.wakelock_ && this.wakelock_.disable()
                      }
                      ,
                      Ee.prototype.beginPresent_ = function() {}
                      ,
                      Ee.prototype.endPresent_ = function() {}
                      ,
                      Ee.prototype.submitFrame = function(e) {}
                      ,
                      Ee.prototype.getEyeParameters = function(e) {
                          return null
                      }
                      ;
                      var ye = {
                          ADDITIONAL_VIEWERS: [],
                          DEFAULT_VIEWER: "",
                          MOBILE_WAKE_LOCK: !0,
                          DEBUG: !1,
                          DPDB_URL: "https://dpdb.webvr.rocks/dpdb.json",
                          K_FILTER: .98,
                          PREDICTION_TIME_S: .04,
                          CARDBOARD_UI_DISABLED: !1,
                          ROTATE_INSTRUCTIONS_DISABLED: !1,
                          YAW_ONLY: !1,
                          BUFFER_SCALE: .5,
                          DIRTY_SUBMIT_FRAME_BINDINGS: !1
                      }
                        , we = {
                          LEFT: "left",
                          RIGHT: "right"
                      };
                      function le(e) {
                          var t = w({}, ye);
                          e = w(t, e || {}),
                          Ee.call(this, {
                              wakelock: e.MOBILE_WAKE_LOCK
                          }),
                          this.config = e,
                          this.displayName = "Cardboard VRDisplay",
                          this.capabilities = new Te({
                              hasPosition: !1,
                              hasOrientation: !0,
                              hasExternalDisplay: !1,
                              canPresent: !0,
                              maxLayers: 1
                          }),
                          this.stageParameters = null,
                          this.bufferScale_ = this.config.BUFFER_SCALE,
                          this.poseSensor_ = new se(this.config),
                          this.distorter_ = null,
                          this.cardboardUI_ = null,
                          this.dpdb_ = new J(this.config.DPDB_URL,this.onDeviceParamsUpdated_.bind(this)),
                          this.deviceInfo_ = new H(this.dpdb_.getDeviceParams(),e.ADDITIONAL_VIEWERS),
                          this.viewerSelector_ = new ue(e.DEFAULT_VIEWER),
                          this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)),
                          this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()),
                          this.config.ROTATE_INSTRUCTIONS_DISABLED || (this.rotateInstructions_ = new re),
                          N() && window.addEventListener("resize", this.onResize_.bind(this))
                      }
                      return le.prototype = Object.create(Ee.prototype),
                      le.prototype._getPose = function() {
                          return {
                              position: null,
                              orientation: this.poseSensor_.getOrientation(),
                              linearVelocity: null,
                              linearAcceleration: null,
                              angularVelocity: null,
                              angularAcceleration: null
                          }
                      }
                      ,
                      le.prototype._resetPose = function() {
                          this.poseSensor_.resetPose && this.poseSensor_.resetPose()
                      }
                      ,
                      le.prototype._getFieldOfView = function(e) {
                          var t;
                          if (e == we.LEFT)
                              t = this.deviceInfo_.getFieldOfViewLeftEye();
                          else {
                              if (e != we.RIGHT)
                                  return console.error("Invalid eye provided: %s", e),
                                  null;
                              t = this.deviceInfo_.getFieldOfViewRightEye()
                          }
                          return t
                      }
                      ,
                      le.prototype._getEyeOffset = function(e) {
                          var t;
                          if (e == we.LEFT)
                              t = [.5 * -this.deviceInfo_.viewer.interLensDistance, 0, 0];
                          else {
                              if (e != we.RIGHT)
                                  return console.error("Invalid eye provided: %s", e),
                                  null;
                              t = [.5 * this.deviceInfo_.viewer.interLensDistance, 0, 0]
                          }
                          return t
                      }
                      ,
                      le.prototype.getEyeParameters = function(e) {
                          var t = this._getEyeOffset(e)
                            , i = this._getFieldOfView(e)
                            , M = {
                              offset: t,
                              renderWidth: .5 * this.deviceInfo_.device.width * this.bufferScale_,
                              renderHeight: this.deviceInfo_.device.height * this.bufferScale_
                          };
                          return Object.defineProperty(M, "fieldOfView", {
                              enumerable: !0,
                              get: function() {
                                  return O("VRFieldOfView", "VRFrameData's projection matrices"),
                                  i
                              }
                          }),
                          M
                      }
                      ,
                      le.prototype.onDeviceParamsUpdated_ = function(e) {
                          this.config.DEBUG && console.log("DPDB reported that device params were updated."),
                          this.deviceInfo_.updateDeviceParams(e),
                          this.distorter_ && this.distorter_.updateDeviceInfo(this.deviceInfo_)
                      }
                      ,
                      le.prototype.updateBounds_ = function() {
                          this.layer_ && this.distorter_ && (this.layer_.leftBounds || this.layer_.rightBounds) && this.distorter_.setTextureBounds(this.layer_.leftBounds, this.layer_.rightBounds)
                      }
                      ,
                      le.prototype.beginPresent_ = function() {
                          var e = this.layer_.source.getContext("webgl");
                          e || (e = this.layer_.source.getContext("experimental-webgl")),
                          e || (e = this.layer_.source.getContext("webgl2")),
                          e && (this.layer_.predistorted ? this.config.CARDBOARD_UI_DISABLED || (e.canvas.width = c() * this.bufferScale_,
                          e.canvas.height = I() * this.bufferScale_,
                          this.cardboardUI_ = new U(e)) : (this.config.CARDBOARD_UI_DISABLED || (this.cardboardUI_ = new U(e)),
                          this.distorter_ = new S(e,this.cardboardUI_,this.config.BUFFER_SCALE,this.config.DIRTY_SUBMIT_FRAME_BINDINGS),
                          this.distorter_.updateDeviceInfo(this.deviceInfo_)),
                          this.cardboardUI_ && this.cardboardUI_.listen(function(e) {
                              this.viewerSelector_.show(this.layer_.source.parentElement),
                              e.stopPropagation(),
                              e.preventDefault()
                          }
                          .bind(this), function(e) {
                              this.exitPresent(),
                              e.stopPropagation(),
                              e.preventDefault()
                          }
                          .bind(this)),
                          this.rotateInstructions_ && (L() && y() ? this.rotateInstructions_.showTemporarily(3e3, this.layer_.source.parentElement) : this.rotateInstructions_.update()),
                          this.orientationHandler = this.onOrientationChange_.bind(this),
                          window.addEventListener("orientationchange", this.orientationHandler),
                          this.vrdisplaypresentchangeHandler = this.updateBounds_.bind(this),
                          window.addEventListener("vrdisplaypresentchange", this.vrdisplaypresentchangeHandler),
                          this.fireVRDisplayDeviceParamsChange_())
                      }
                      ,
                      le.prototype.endPresent_ = function() {
                          this.distorter_ && (this.distorter_.destroy(),
                          this.distorter_ = null),
                          this.cardboardUI_ && (this.cardboardUI_.destroy(),
                          this.cardboardUI_ = null),
                          this.rotateInstructions_ && this.rotateInstructions_.hide(),
                          this.viewerSelector_.hide(),
                          window.removeEventListener("orientationchange", this.orientationHandler),
                          window.removeEventListener("vrdisplaypresentchange", this.vrdisplaypresentchangeHandler)
                      }
                      ,
                      le.prototype.updatePresent_ = function() {
                          this.endPresent_(),
                          this.beginPresent_()
                      }
                      ,
                      le.prototype.submitFrame = function(e) {
                          if (this.distorter_)
                              this.updateBounds_(),
                              this.distorter_.submitFrame();
                          else if (this.cardboardUI_ && this.layer_) {
                              var t = this.layer_.source.getContext("webgl").canvas;
                              t.width == this.lastWidth && t.height == this.lastHeight || this.cardboardUI_.onResize(),
                              this.lastWidth = t.width,
                              this.lastHeight = t.height,
                              this.cardboardUI_.render()
                          }
                      }
                      ,
                      le.prototype.onOrientationChange_ = function(e) {
                          this.viewerSelector_.hide(),
                          this.rotateInstructions_ && this.rotateInstructions_.update(),
                          this.onResize_()
                      }
                      ,
                      le.prototype.onResize_ = function(e) {
                          if (this.layer_) {
                              var t = this.layer_.source.getContext("webgl");
                              t.canvas.setAttribute("style", ["position: absolute", "top: 0", "left: 0", "width: 100vw", "height: 100vh", "border: 0", "margin: 0", "padding: 0px", "box-sizing: content-box"].join("; ") + ";"),
                              l(t.canvas)
                          }
                      }
                      ,
                      le.prototype.onViewerChanged_ = function(e) {
                          this.deviceInfo_.setViewer(e),
                          this.distorter_ && this.distorter_.updateDeviceInfo(this.deviceInfo_),
                          this.fireVRDisplayDeviceParamsChange_()
                      }
                      ,
                      le.prototype.fireVRDisplayDeviceParamsChange_ = function() {
                          var e = new CustomEvent("vrdisplaydeviceparamschange",{
                              detail: {
                                  vrdisplay: this,
                                  deviceInfo: this.deviceInfo_
                              }
                          });
                          window.dispatchEvent(e)
                      }
                      ,
                      le.VRFrameData = function() {
                          this.leftProjectionMatrix = new Float32Array(16),
                          this.leftViewMatrix = new Float32Array(16),
                          this.rightProjectionMatrix = new Float32Array(16),
                          this.rightViewMatrix = new Float32Array(16),
                          this.pose = null
                      }
                      ,
                      le.VRDisplay = Ee,
                      le
                  }()
              }(i = {
                  exports: {}
              }, i.exports),
              i.exports), N = (M = n) && M.__esModule && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M, u = {
                  ADDITIONAL_VIEWERS: [],
                  DEFAULT_VIEWER: "",
                  PROVIDE_MOBILE_VRDISPLAY: !0,
                  GET_VR_DISPLAYS_TIMEOUT: 1e3,
                  MOBILE_WAKE_LOCK: !0,
                  DEBUG: !1,
                  DPDB_URL: "https://dpdb.webvr.rocks/dpdb.json",
                  K_FILTER: .98,
                  PREDICTION_TIME_S: .04,
                  CARDBOARD_UI_DISABLED: !1,
                  ROTATE_INSTRUCTIONS_DISABLED: !1,
                  YAW_ONLY: !1,
                  BUFFER_SCALE: .5,
                  DIRTY_SUBMIT_FRAME_BINDINGS: !1
              };
              function D(e) {
                  this.config = r(r({}, u), e),
                  this.polyfillDisplays = [],
                  this.enabled = !1,
                  this.hasNative = "getVRDisplays"in navigator,
                  this.native = {},
                  this.native.getVRDisplays = navigator.getVRDisplays,
                  this.native.VRFrameData = window.VRFrameData,
                  this.native.VRDisplay = window.VRDisplay,
                  (!this.hasNative || this.config.PROVIDE_MOBILE_VRDISPLAY && A()) && (this.enable(),
                  this.getVRDisplays().then(function(e) {
                      e && e[0] && e[0].fireVRDisplayConnect_ && e[0].fireVRDisplayConnect_()
                  }))
              }
              D.prototype.getPolyfillDisplays = function() {
                  if (this._polyfillDisplaysPopulated)
                      return this.polyfillDisplays;
                  if (A()) {
                      var e = new N({
                          ADDITIONAL_VIEWERS: this.config.ADDITIONAL_VIEWERS,
                          DEFAULT_VIEWER: this.config.DEFAULT_VIEWER,
                          MOBILE_WAKE_LOCK: this.config.MOBILE_WAKE_LOCK,
                          DEBUG: this.config.DEBUG,
                          DPDB_URL: this.config.DPDB_URL,
                          CARDBOARD_UI_DISABLED: this.config.CARDBOARD_UI_DISABLED,
                          K_FILTER: this.config.K_FILTER,
                          PREDICTION_TIME_S: this.config.PREDICTION_TIME_S,
                          ROTATE_INSTRUCTIONS_DISABLED: this.config.ROTATE_INSTRUCTIONS_DISABLED,
                          YAW_ONLY: this.config.YAW_ONLY,
                          BUFFER_SCALE: this.config.BUFFER_SCALE,
                          DIRTY_SUBMIT_FRAME_BINDINGS: this.config.DIRTY_SUBMIT_FRAME_BINDINGS
                      });
                      this.polyfillDisplays.push(e)
                  }
                  return this._polyfillDisplaysPopulated = !0,
                  this.polyfillDisplays
              }
              ,
              D.prototype.enable = function() {
                  if (this.enabled = !0,
                  this.hasNative && this.native.VRFrameData) {
                      var e = this.native.VRFrameData
                        , t = new this.native.VRFrameData
                        , i = this.native.VRDisplay.prototype.getFrameData;
                      window.VRDisplay.prototype.getFrameData = function(M) {
                          M instanceof e ? i.call(this, M) : (i.call(this, t),
                          M.pose = t.pose,
                          s(t.leftProjectionMatrix, M.leftProjectionMatrix),
                          s(t.rightProjectionMatrix, M.rightProjectionMatrix),
                          s(t.leftViewMatrix, M.leftViewMatrix),
                          s(t.rightViewMatrix, M.rightViewMatrix))
                      }
                  }
                  navigator.getVRDisplays = this.getVRDisplays.bind(this),
                  window.VRDisplay = N.VRDisplay,
                  window.VRFrameData = N.VRFrameData
              }
              ,
              D.prototype.getVRDisplays = function() {
                  var e, t = this, i = this.config;
                  if (!this.hasNative)
                      return Promise.resolve(this.getPolyfillDisplays());
                  var M, A = this.native.getVRDisplays.call(navigator), s = new Promise(function(t) {
                      e = setTimeout(function() {
                          console.warn("Native WebVR implementation detected, but `getVRDisplays()` failed to resolve. Falling back to polyfill."),
                          t([])
                      }, i.GET_VR_DISPLAYS_TIMEOUT)
                  }
                  );
                  return (M = [A, s],
                  Promise.race ? Promise.race(M) : new Promise(function(e, t) {
                      for (var i = 0; i < M.length; i++)
                          M[i].then(e, t)
                  }
                  )).then(function(i) {
                      return clearTimeout(e),
                      i.length > 0 ? i : t.getPolyfillDisplays()
                  })
              }
              ,
              D.version = "0.10.7",
              D.VRFrameData = N.VRFrameData,
              D.VRDisplay = N.VRDisplay;
              var o = Object.freeze({
                  default: D
              })
                , a = o && D || o;
              return void 0 !== e && e.window && (e.document || (e.document = e.window.document),
              e.navigator || (e.navigator = e.window.navigator)),
              a
          }
          ,
          e.exports = i()
      }
      ).call(this, i(67))
  }
}]);
