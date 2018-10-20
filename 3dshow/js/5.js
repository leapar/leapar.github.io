(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    184: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(e, n, o) {
                return n && t(e.prototype, n),
                o && t(e, o),
                e
            }
        }();
        e.default = function(t) {
            if (!t.prototype || !t.prototype.render)
                return t.__scuWrap || (t.__scuWrap = (e = t,
                (n = function(t) {
                    function e() {
                        return r(this, e),
                        a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                    }
                    return s(e, t),
                    e
                }(l)).prototype.renderChild = e,
                n));
            t.prototype.shouldComponentUpdate = c;
            var e, n
        }
        ,
        e.shouldComponentUpdate = c,
        e.shallowDiffers = h;
        var i = n(183);
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function s(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var l = function(t) {
            function e() {
                return r(this, e),
                a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return s(e, i.Component),
            o(e, [{
                key: "shouldComponentUpdate",
                value: function(t) {
                    return h(t, this.props)
                }
            }, {
                key: "render",
                value: function(t, e, n) {
                    return this.renderChild(t, n)
                }
            }]),
            e
        }();
        function c(t, e) {
            return h(t, this.props) || h(e, this.state)
        }
        function h(t, e) {
            for (var n in t)
                if (t[n] !== e[n])
                    return !0;
            for (var o in e)
                if (!(o in t))
                    return !0;
            return !1
        }
    },
    215: function(t, e, n) {
        "use strict";
        var o, i = n(183), r = n(217), a = function(t, e) {
            for (var n in e)
                if (t[n] !== e[n])
                    return !0;
            return !1
        }, s = n(281), l = n(242), c = function() {
            function t(t) {
                this.shouldHandleEvents = !0,
                this.callbacks = t,
                this.handleEvent = this.handleEvent.bind(this)
            }
            return t.prototype.handleEvent = function(t) {
                if (this.shouldHandleEvents)
                    switch (t.stopPropagation(),
                    t.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                        this.onPressStart(t);
                        break;
                    case "mousemove":
                    case "pointermove":
                    case "touchmove":
                        if(t.cancelable) {
                            if (!t.defaultPrevented) {
                                t.preventDefault();
                                
                            }
                            
                        }
                        this.onPressMove(t);
                        
                        break;
                    case "mouseup":
                    case "mouseleave":
                    case "touchend":
                    case "touchcancel":
                    case "pointercancel":
                    case "pointerleave":
                        this.onPressEnd(t)
                    }
            }
            ,
            t.prototype.setEnabled = function(t) {
                this.shouldHandleEvents = t,
                this.couldBeDrag = this.couldBeDrag && t
            }
            ,
            t.prototype.getPosition = function(t) {
                return Object(s.b)(t) ? {
                    x: t.changedTouches[0].clientX,
                    y: t.changedTouches[0].clientY
                } : {
                    x: t.screenX,
                    y: t.screenY
                }
            }
            ,
            t.prototype.onPressStart = function(t) {
                this.couldBeDrag = !0,
                this.dragEvents = [],
                this.dragStart = this.getPosition(t),
                this.callbacks.handlePressStart && this.callbacks.handlePressStart(this.getPosition(t))
            }
            ,
            t.prototype.onPressMove = function(t) {
                if (this.couldBeDrag) {
                    var e = this.getPosition(t);
                    this.addDragEvent(e),
                    this.isDragging || Math.sqrt(Math.pow(e.x - this.dragStart.x, 2) + Math.pow(e.y - this.dragStart.y, 2)) > l.f && (this.isDragging = !0,
                    this.callbacks.handleDragStart && this.callbacks.handleDragStart()),
                    this.callbacks.handlePressMove && this.callbacks.handlePressMove({
                        x: this.dragStart.x - e.x,
                        y: this.dragStart.y - e.y
                    })
                }
            }
            ,
            t.prototype.onPressEnd = function(t) {
                if (this.couldBeDrag) {
                    if (this.couldBeDrag = !1,
                    this.isDragging) {
                        if (!this.dragEvents || !this.dragEvents[0])
                            return;
                        var e = this.dragEvents[0]
                          , n = this.dragEvents[this.dragEvents.length - 1];
                        if (this.callbacks.handleDragEnd) {
                            var o = {
                                x: 0,
                                y: 0
                            };
                            Date.now() - n.timestamp < 100 && (o.x = e.position.x - n.position.x,
                            o.y = e.position.y - n.position.y),
                            this.callbacks.handleDragEnd(o, n.timestamp - e.timestamp)
                        }
                    } else
                        this.callbacks.handleClick && this.callbacks.handleClick(t);
                    this.isDragging = !1
                }
            }
            ,
            t.prototype.addDragEvent = function(t) {
                this.dragEvents.push({
                    position: t,
                    timestamp: Date.now()
                }),
                this.dragEvents.length > 10 && this.dragEvents.shift()
            }
            ,
            t
        }(), h = (o = Object.setPrototypeOf || {
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
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), p = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    visible: !1,
                    trackLength: 1,
                    thumbLength: 1,
                    thumbOffset: 0
                },
                n.direction = r.e[e.direction],
                n.handlePressStart = n.handlePressStart.bind(n),
                n.handlePressMove = n.handlePressMove.bind(n),
                n.handleTrackClick = n.handleTrackClick.bind(n),
                n.inputFilter = new c({
                    handlePressStart: n.handlePressStart,
                    handlePressMove: n.handlePressMove
                }),
                window.addEventListener("mousemove", n.inputFilter.handleEvent),
                window.addEventListener("mouseleave", n.inputFilter.handleEvent),
                window.addEventListener("mouseup", n.inputFilter.handleEvent),
                n
            }
            return h(e, t),
            e.prototype.getTrackLength = function() {
                return Number(this.thumbTrack && this.thumbTrack[this.direction.clientLength] || window.innerWidth)
            }
            ,
            e.prototype.handleTrackClick = function(t) {
                if (t.target === this.thumbTrack) {
                    var e, n = this.direction.eventPosition, o = this.thumbTrack.getBoundingClientRect()[this.direction.offsetName], i = t[n] < o + this.state.thumbOffset, a = this.getTrackLength(), s = 0;
                    s = i ? Math.max(0, (this.state.thumbOffset - this.state.thumbLength) / a) : Math.min(a, (this.state.thumbOffset + this.state.thumbLength) / a),
                    this.props.scrollTo(((e = {})[Object(r.i)(this.props.direction)] = s,
                    e))
                }
            }
            ,
            e.prototype.handlePressStart = function(t) {
                this.dragStartThumbOffset = this.state.thumbOffset
            }
            ,
            e.prototype.handlePressMove = function(t) {
                var e, n = this.getTrackLength(), o = (this.dragStartThumbOffset - t[this.direction.delta]) / n;
                this.props.scrollTo(((e = {})[Object(r.i)(this.props.direction)] = o,
                e)),
                this.props.onThumbDrag()
            }
            ,
            e.prototype.componentDidUpdate = function() {
                var t = this.getTrackLength()
                  , e = this.props.wrapperLength / this.props.childLength * t
                  , n = {
                    thumbLength: e,
                    visible: this.props.childLength > this.props.wrapperLength,
                    thumbOffset: Math.min(this.props.scrollOffset / this.props.childLength * t, t - e)
                };
                if (a(this.state, n)) {
                    var o = this.state.visible !== n.visible;
                    o && this.props.onVisibilityChange(n.visible);
                    var i = Object(r.j)(n.thumbOffset / (t - e), n.visible);
                    (i !== this.scrollPosition || o) && (this.scrollPosition = i,
                    this.props.onScrollPositionChange(i)),
                    this.setState(n)
                }
            }
            ,
            e.prototype.render = function() {
                var t, e = this, n = ((t = {})[this.direction.lengthName] = this.state.thumbLength + "px",
                t[this.direction.offsetName] = this.state.thumbOffset + "px",
                t);
                return Object(i.h)("div", null, this.state.visible && !this.props.forceHidden && Object(i.h)("div", {
                    class: "scrollbarTrack " + this.props.direction,
                    onClick: this.handleTrackClick,
                    ref: function(t) {
                        e.thumbTrack = t
                    }
                }, Object(i.h)("div", {
                    class: "scrollbarThumb",
                    style: n,
                    onMouseDown: this.inputFilter.handleEvent,
                    onTouchStart: this.inputFilter.handleEvent
                })))
            }
            ,
            e
        }(i.Component), u = n(75), d = function() {
            function t(t) {
                this.isAnimating = !0,
                this.duration = t.duration,
                this.startValue = t.startValue,
                this.changeValue = t.endValue - this.startValue,
                this.easingFunction = t.easingFunction || u.b
            }
            return t.prototype.getUpdatedValue = function() {
                this.startTime || (this.startTime = Date.now());
                var t = Date.now() - this.startTime;
                return t > this.duration && (this.isAnimating = !1),
                this.easingFunction(t, this.startValue, this.changeValue, this.duration)
            }
            ,
            t
        }(), f = (n(465),
        n(185)), g = n(228), v = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), y = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        , b = function(t) {
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
        };
        i.options.debounceRendering = requestAnimationFrame;
        var m = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.horizontal = Object(r.f)(),
                n.vertical = Object(r.f)(),
                n.manuallyMoved = !1,
                n.scrollPosition = {
                    horizontal: r.c.Beginning,
                    vertical: r.c.End
                },
                n.state = {
                    horizontal: Object(r.g)(),
                    vertical: Object(r.g)()
                },
                n.handleExternalChange = n.handleExternalChange.bind(n),
                n.scrollTo = n.scrollTo.bind(n),
                n.handlePressStart = n.handlePressStart.bind(n),
                n.handlePressMove = n.handlePressMove.bind(n),
                n.handleDragEnd = n.handleDragEnd.bind(n),
                n.handleDragStart = n.handleDragStart.bind(n),
                n.handleWheelEvent = n.handleWheelEvent.bind(n),
                n.handleClick = n.handleClick.bind(n),
                n.toggleVisibility = n.toggleVisibility.bind(n),
                n.hasManuallyMoved = n.hasManuallyMoved.bind(n),
                n.inputFilter = new c({
                    handlePressStart: n.handlePressStart,
                    handlePressMove: n.handlePressMove,
                    handleDragStart: n.handleDragStart,
                    handleDragEnd: n.handleDragEnd,
                    handleClick: n.handleClick
                }),
                window.addEventListener("mousemove", n.inputFilter.handleEvent),
                window.addEventListener("pointermove", n.inputFilter.handleEvent),
                window.addEventListener("touchmove", n.inputFilter.handleEvent),
                window.addEventListener("mouseleave", n.inputFilter.handleEvent),
                window.addEventListener("mouseup", n.inputFilter.handleEvent),
                window.addEventListener("pointerup", n.inputFilter.handleEvent),
                window.addEventListener("touchend", n.inputFilter.handleEvent),
                window.addEventListener("touchcancel", n.inputFilter.handleEvent),
                n
            }
            return v(e, t),
            e.prototype.componentDidMount = function() {
                Object(g.c)(g.b.RESIZE, this.handleExternalChange.bind(this, g.b.RESIZE)),
                this.innerWrapper.addEventListener("wheel", this.handleWheelEvent, !0),
                this.innerWrapper.addEventListener("mousedown", this.inputFilter.handleEvent),
                this.innerWrapper.addEventListener("pointerdown", this.inputFilter.handleEvent),
                this.innerWrapper.addEventListener("touchstart", this.inputFilter.handleEvent),
                this.firstChild = this.innerWrapper.firstElementChild,
                this.props.onScrollPositionChange && this.props.onScrollPositionChange(),
                this.props.hasOwnProperty("suppressDrag") && this.inputFilter.setEnabled(!!this.props.suppressDrag)
            }
            ,
            e.prototype.componentWillUnmount = function() {
                Object(g.e)(g.b.RESIZE, this.handleExternalChange.bind(this, g.b.RESIZE)),
                window.removeEventListener("mousemove", this.inputFilter.handleEvent),
                window.removeEventListener("pointermove", this.inputFilter.handleEvent),
                window.removeEventListener("touchmove", this.inputFilter.handleEvent),
                window.removeEventListener("mouseleave", this.inputFilter.handleEvent),
                window.removeEventListener("mouseup", this.inputFilter.handleEvent),
                window.removeEventListener("pointerup", this.inputFilter.handleEvent),
                window.removeEventListener("touchend", this.inputFilter.handleEvent),
                window.removeEventListener("touchcancel", this.inputFilter.handleEvent),
                this.innerWrapper.removeEventListener("wheel", this.handleWheelEvent, !0),
                this.innerWrapper.removeEventListener("mousedown", this.inputFilter.handleEvent),
                this.innerWrapper.removeEventListener("pointerdown", this.inputFilter.handleEvent),
                this.innerWrapper.removeEventListener("touchstart", this.inputFilter.handleEvent)
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                t.suppressDrag !== this.props.suppressDrag && (this.inputFilter.setEnabled(!!this.props.suppressDrag),
                this.props.suppressDrag && (this.manuallyMoved = !1))
            }
            ,
            e.prototype.componentWillUpdate = function() {
                this.props.waitToUpdate || this.handleExternalChange()
            }
            ,
            e.prototype.componentDidUpdate = function() {
                if (this.horizontal.animation || this.vertical.animation) {
                    var t = {};
                    for (var e in this.state) {
                        var n = e;
                        this[n].animation && (this[n].animation.isAnimating ? t[Object(r.i)(n)] = this[n].animation.getUpdatedValue() : this[n].animation = null)
                    }
                    Object.keys(t).length > 0 && this.scrollTo(t)
                }
            }
            ,
            e.prototype.scrollTo = function(t) {
                if (t.hasOwnProperty(r.a.x) || t.hasOwnProperty(r.a.y)) {
                    var e, n, o = {};
                    try {
                        for (var i = b(this.getVisibleAxes(t)), a = i.next(); !a.done; a = i.next()) {
                            var s = a.value
                              , l = Object(r.h)(s)
                              , c = r.e[l].scrollOffset
                              , h = t[s] || 0;
                            this.innerWrapper[c] = Math.max(Math.min(1, h) * this.state[l].childLength, 0),
                            o[l] = y({}, this.state[l], {
                                scrollOffset: this.innerWrapper[c]
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
                    this.setState(o)
                }
            }
            ,
            e.prototype.animatedScrollTo = function(t) {
                var e, n;
                if (t.hasOwnProperty(r.a.x) || t.hasOwnProperty(r.a.y))
                    try {
                        for (var o = b(this.getVisibleAxes(t)), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value
                              , s = Object(r.h)(a)
                              , l = r.e[s].scrollOffset;
                            this[s].animation = new d({
                                duration: r.d,
                                startValue: this.innerWrapper[l] / this.state[s].childLength,
                                endValue: Math.max(0, Math.min(1, t[a]))
                            })
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (n = o.return) && n.call(o)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
            }
            ,
            e.prototype.setScrollCenter = function(t) {
                if (t && t.compareDocumentPosition(this.innerWrapper) & Node.DOCUMENT_POSITION_CONTAINS) {
                    this.scrollCenter = t;
                    var e, n, o = {}, i = {};
                    try {
                        for (var a = b(this.getVisibleAxes(this.state)), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value
                              , c = Object(r.i)(l);
                            o[c] = t[r.e[l].positionOffset] + t[r.e[l].offsetLength] / 2;
                            for (var h = t; h.parentElement && h !== this.innerWrapper; )
                                h = h.parentElement,
                                o[c] += h[r.e[l].positionOffset];
                            var p = this.outerWrapper.parentElement[r.e[l].offsetLength];
                            i[c] = (o[c] - p / 2) / this.state[l].childLength
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                    Object.keys(i).length > 0 && this.animatedScrollTo(i)
                }
            }
            ,
            e.prototype.getVisibleAxes = function(t) {
                var e = [];
                for (var n in t)
                    (t[n] || "number" == typeof t[n]) && (n in r.a && this.state[Object(r.h)(n)].isVisible ? e.push(n) : n in r.b && this.state[n].isVisible && e.push(n));
                return e
            }
            ,
            e.prototype.handleDragStart = function() {
                delete this.scrollCenter,
                this.hasManuallyMoved()
            }
            ,
            e.prototype.handlePressStart = function(t) {
                this.horizontal.dragStartScroll = this.innerWrapper.scrollLeft,
                this.vertical.dragStartScroll = this.innerWrapper.scrollTop
            }
            ,
            e.prototype.handlePressMove = function(t) {
                var e, n, o = {};
                try {
                    for (var i = b(this.getVisibleAxes(t)), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value
                          , l = Object(r.h)(s);
                        o[s] = (t[s] + this[l].dragStartScroll) / this.state[l].childLength
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
                this.scrollTo(o)
            }
            ,
            e.prototype.handleWheelEvent = function() {
                this.hasManuallyMoved(),
                this.handleExternalChange()
            }
            ,
            e.prototype.handleClick = function(t) {
                this.props.handleClick && this.props.handleClick(t)
            }
            ,
            e.prototype.toggleVisibility = function(t) {
                var e = this;
                return function(n) {
                    var o = y({}, e.state[t], {
                        isVisible: n
                    });
                    if (a(e.state[t], o)) {
                        var i = {};
                        i[t] = o,
                        e.setState(i),
                        e.props.onScrollbarVisibilityChange && e.props.onScrollbarVisibilityChange()
                    }
                }
            }
            ,
            e.prototype.toggleScrollPosition = function(t) {
                var e = this;
                return function(n) {
                    e.scrollPosition[t] = n,
                    e.props.onScrollPositionChange && e.props.onScrollPositionChange()
                }
            }
            ,
            e.prototype.handleDragEnd = function(t, e) {
                try {
                    for (var n = b(this.getVisibleAxes(t)), o = n.next(); !o.done; o = n.next()) {
                        var i = o.value
                          , a = Object(r.h)(i)
                          , s = t[i] / e
                          , l = Math.min(r.d, Math.abs(r.d * s))
                          , c = this.innerWrapper[r.e[a].scrollOffset]
                          , h = s * l / 2;
                        this[a].animation = new d({
                            duration: l,
                            startValue: c / this.state[a].childLength,
                            endValue: Math.max(0, Math.min((c + h) / this.state[a].childLength, 1)),
                            easingFunction: u.d
                        })
                    }
                } catch (t) {
                    p = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (f = n.return) && f.call(n)
                    } finally {
                        if (p)
                            throw p.error
                    }
                }
                var p, f;
                this.setState({})
            }
            ,
            e.prototype.handleExternalChange = function(t) {
                this.scrollCenter && t && t === g.b.RESIZE && this.setScrollCenter(this.scrollCenter);
                var e = {};
                for (var n in this.state) {
                    var o = n
                      , i = r.e[o].clientLength
                      , s = y({}, this.state[o], {
                        wrapperLength: Number(this.innerWrapper && this.innerWrapper[i]) || 1,
                        childLength: Number(this.firstChild && this.firstChild[i]) || 1,
                        scrollOffset: this.innerWrapper && this.innerWrapper[r.e[o].scrollOffset]
                    });
                    a(this.state[o], s) && (e[o] = s)
                }
                Object.keys(e).length > 0 && this.setState(e)
            }
            ,
            e.prototype.hasManuallyMoved = function() {
                this.manuallyMoved = !0
            }
            ,
            e.prototype.resetManuallyMoved = function() {
                this.manuallyMoved = !1
            }
            ,
            e.prototype.render = function() {
                var t = this;
                return Object(i.h)("div", {
                    class: f("outerScrollbarWrapper", this.props.singleScrollDirection + "Only"),
                    ref: function(e) {
                        t.outerWrapper = e
                    }
                }, Object(i.h)("div", {
                    class: "innerScrollbarWrapper",
                    ref: function(e) {
                        t.innerWrapper = e
                    }
                }, Object(i.h)("div", {
                    class: "paddingScrollbarWrapper"
                }, this.props.children)), this.props.singleScrollDirection !== r.b.vertical && Object(i.h)(p, {
                    direction: r.b.horizontal,
                    ref: function(e) {
                        t.horizontal.scrollbar = e
                    },
                    wrapperLength: this.state.horizontal.wrapperLength,
                    childLength: this.state.horizontal.childLength,
                    scrollOffset: this.state.horizontal.scrollOffset,
                    scrollTo: this.scrollTo,
                    onVisibilityChange: this.toggleVisibility(r.b.horizontal),
                    onScrollPositionChange: this.toggleScrollPosition(r.b.horizontal),
                    forceHidden: this.props.forceHidden,
                    onThumbDrag: this.hasManuallyMoved
                }), this.props.singleScrollDirection !== r.b.horizontal && Object(i.h)(p, {
                    direction: r.b.vertical,
                    ref: function(e) {
                        t.vertical.scrollbar = e
                    },
                    wrapperLength: this.state.vertical.wrapperLength,
                    childLength: this.state.vertical.childLength,
                    scrollOffset: this.state.vertical.scrollOffset,
                    scrollTo: this.scrollTo,
                    onVisibilityChange: this.toggleVisibility(r.b.vertical),
                    onScrollPositionChange: this.toggleScrollPosition(r.b.vertical),
                    forceHidden: this.props.forceHidden,
                    onThumbDrag: this.hasManuallyMoved
                }))
            }
            ,
            e
        }(i.Component);
        e.a = m
    },
    216: function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "a", function() {
            return o
        }),
        n.d(e, "b", function() {
            return i
        }),
        function(t) {
            t.terms = "terms",
            t.titleBar = "titleBar",
            t.vrSelect = "vrSelect",
            t.webVr = "webVr",
            t.mattertag = "mattertag",
            t.help = "help",
            t.cta = "cta",
            t.highlightReel = "highlightReel"
        }(o = o || (o = {}));
        var i = [o.cta, o.highlightReel, o.titleBar]
    },
    217: function(t, e, n) {
        "use strict";
        n.d(e, "d", function() {
            return r
        }),
        n.d(e, "g", function() {
            return a
        }),
        n.d(e, "f", function() {
            return s
        }),
        n.d(e, "b", function() {
            return o
        }),
        n.d(e, "a", function() {
            return i
        }),
        n.d(e, "i", function() {
            return c
        }),
        n.d(e, "h", function() {
            return h
        }),
        n.d(e, "e", function() {
            return p
        }),
        n.d(e, "c", function() {
            return l
        }),
        n.d(e, "j", function() {
            return d
        });
        var o, i, r = 250, a = function() {
            return {
                wrapperLength: 1,
                childLength: 1,
                scrollOffset: 1,
                isVisible: !1
            }
        }, s = function() {
            return {
                scrollbar: null,
                animation: null,
                dragStartScroll: 0
            }
        };
        !function(t) {
            t.horizontal = "horizontal",
            t.vertical = "vertical"
        }(o = o || (o = {})),
        function(t) {
            t.x = "x",
            t.y = "y"
        }(i = i || (i = {}));
        var l, c = function(t) {
            switch (t) {
            case o.horizontal:
                return i.x;
            case o.vertical:
                return i.y
            }
            throw Error()
        }, h = function(t) {
            switch (t) {
            case i.x:
                return o.horizontal;
            case i.y:
                return o.vertical
            }
            throw Error()
        }, p = ((u = {})[o.horizontal] = {
            scrollOffset: "scrollLeft",
            offsetLength: "offsetWidth",
            clientLength: "clientWidth",
            positionOffset: "offsetLeft",
            lengthName: "width",
            offsetName: "left",
            eventPosition: "clientX",
            delta: i.x
        },
        u[o.vertical] = {
            scrollOffset: "scrollTop",
            offsetLength: "offsetHeight",
            clientLength: "clientHeight",
            positionOffset: "offsetTop",
            lengthName: "height",
            offsetName: "top",
            eventPosition: "clientY",
            delta: i.y
        },
        u);
        !function(t) {
            t.Beginning = "Beginning",
            t.Middle = "Middle",
            t.End = "End",
            t.None = "None"
        }(l = l || (l = {}));
        var u, d = function(t, e) {
            return e ? t < .01 ? l.Beginning : 1 - t < .01 ? l.End : l.Middle : l.None
        }
    },
    228: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o
        }),
        n.d(e, "a", function() {
            return i
        }),
        n.d(e, "d", function() {
            return c
        }),
        n.d(e, "c", function() {
            return p
        }),
        n.d(e, "e", function() {
            return u
        });
        var o, i;
        !function(t) {
            t[t.RESIZE = 1] = "RESIZE",
            t[t.ORIENTATION_CHANGED = 2] = "ORIENTATION_CHANGED"
        }(o = o || (o = {})),
        function(t) {
            t[t.PORTRAIT = 1] = "PORTRAIT",
            t[t.LANDSCAPE = 2] = "LANDSCAPE"
        }(i = i || (i = {}));
        var r, a, s, l = {}, c = function() {
            return window.innerWidth > window.innerHeight ? i.LANDSCAPE : i.PORTRAIT
        }, h = c(), p = function(t, e) {
            l[t] || (l[t] = []),
            l[t].push(e)
        }, u = function(t, e) {
            l[t] && (l[t] = l[t].filter(function(t) {
                return t !== e
            }))
        }, d = (s = window.innerHeight,
        function() {
            clearInterval(r),
            clearTimeout(a),
            r = setInterval(function() {
                s !== window.innerHeight && (function() {
                    if (l[o.RESIZE] && l[o.RESIZE].forEach(function(t) {
                        return t()
                    }),
                    l[o.ORIENTATION_CHANGED]) {
                        var t = c();
                        t !== h && (h = t,
                        l[o.ORIENTATION_CHANGED].forEach(function(e) {
                            return e(t)
                        }))
                    }
                }(),
                s = window.innerHeight)
            }, 100),
            a = setTimeout(clearInterval.bind(this, r), 1e3)
        }
        );
        window.addEventListener("resize", d)
    },
    242: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o
        }),
        n.d(e, "a", function() {
            return i
        }),
        n.d(e, "d", function() {
            return r
        }),
        n.d(e, "e", function() {
            return a
        }),
        n.d(e, "c", function() {
            return s
        }),
        n.d(e, "h", function() {
            return l
        }),
        n.d(e, "g", function() {
            return c
        }),
        n.d(e, "f", function() {
            return h
        });
        var o = 1e3 / 60
          , i = .05
          , r = Math.PI / 2 / 1e3
          , a = .1 / 60
          , s = .02
          , l = .1
          , c = 10
          , h = 25
    },
    275: function(t, e, n) {},
    276: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var o = function(t) {
            return t.innerWidth < 487 || t.innerHeight < 487
        }
    },
    281: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        }),
        n.d(e, "b", function() {
            return i
        });
        var o = function(t) {
            return void 0 !== t.pointerId
        }
          , i = function(t) {
            return void 0 !== t.changedTouches
        }
    },
    305: function(t, e, n) {
        "use strict";
        var o, i = n(183), r = n(185), a = (n(467),
        n(215)), s = n(18), l = n(217), c = n(58), h = (o = Object.setPrototypeOf || {
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
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), p = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.floors = [],
                n.scrollbars = null,
                n.canClick = !1,
                n.newFloorIndex = null,
                n.state = {
                    showMenu: !1
                },
                n.toggleShowMenu = n.toggleShowMenu.bind(n),
                n.updateScrollCenter = n.updateScrollCenter.bind(n),
                n.onFloorClick = n.onFloorClick.bind(n),
                n.onScrollbarClick = n.onScrollbarClick.bind(n),
                n
            }
            return h(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                this.props.currentFloor !== t.currentFloor && (this.newFloorIndex = t.currentFloor)
            }
            ,
            e.prototype.componentDidUpdate = function() {
                null !== this.newFloorIndex && this.updateScrollCenter(this.newFloorIndex)
            }
            ,
            e.prototype.updateScrollCenter = function(t) {
                this.floors.length <= 5 || this.scrollbars && (this.newFloorIndex = null,
                this.scrollbars.setScrollCenter(this.floors[t]))
            }
            ,
            e.prototype.onScrollbarClick = function() {
                this.canClick = !0
            }
            ,
            e.prototype.toggleShowMenu = function() {
                this.setState(function(t) {
                    return {
                        showMenu: !t.showMenu
                    }
                })
            }
            ,
            e.prototype.onFloorClick = function(t) {
                this.scrollbars && !this.canClick || (this.toggleShowMenu(),
                this.props.handleClickFloor(t))
            }
            ,
            e.prototype.getFloorMenu = function() {
                var t = this
                  , e = this.props.floorNames.map(function(e, n) {
                    return Object(i.h)("div", {
                        class: r("floor-button", {
                            current: t.props.currentFloor === n
                        }),
                        key: String(n),
                        ref: function(e) {
                            t.floors[n] = e
                        },
                        onClick: t.onFloorClick.bind(t, n)
                    }, isNaN(Number(e)) ? e : t.context.locale.t(c.a.FLOOR_NAME) + (n + 1))
                }).reverse()
                  , n = e.length > 5
                  , o = r({
                    fadeIn: this.state.showMenu,
                    scrollable: n
                });
                return n ? Object(i.h)("div", {
                    id: "floor-menu-wrapper",
                    class: o
                }, Object(i.h)(a.a, {
                    forceHidden: Object(s.j)(),
                    ref: function(e) {
                        t.scrollbars = e
                    },
                    singleScrollDirection: l.b.vertical,
                    onScrollbarVisibilityChange: this.updateScrollCenter.bind(this, this.props.currentFloor),
                    handleClick: this.onScrollbarClick
                }, e)) : (this.scrollbars = null,
                Object(i.h)("div", {
                    id: "floor-menu-wrapper",
                    class: o
                }, e))
            }
            ,
            e.prototype.render = function() {
                if (this.props.isDisplaying) {
                    var t = String(this.props.currentFloor + 1).length > 1
                      , e = this.props.isAllFloors(this.props.currentFloor)
                      , n = e ? "icon-floor-controls-all" : "icon-floor-controls";
                    return Object(i.h)("div", {
                        id: "floor-controls"
                    }, this.getFloorMenu(), Object(i.h)("div", {
                        onClick: this.toggleShowMenu
                    }, Object(i.h)("div", {
                        type: "button",
                        "data-balloon": this.context.locale.t(c.a.HELP_MORE_FLOORS_A),
                        "data-balloon-pos": "up",
                        class: r("select-floor", "ui-icon", {
                            hideTooltip: this.state.showMenu,
                            isAllFloors: e
                        })
                    }, Object(i.h)("div", {
                        class: r("floor-number", {
                            twoDigit: t
                        })
                    }, Object(i.h)("span", null, !e && this.props.currentFloor + 1)), Object(i.h)("span", {
                        class: r("icon", n)
                    }))))
                }
                return Object(i.h)("div", {
                    id: "floor-controls"
                })
            }
            ,
            e
        }(i.Component), u = n(184), d = n.n(u), f = n(4), g = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), v = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, y = function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function s(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function l(t) {
                    t.done ? i(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                l((o = o.apply(t, e || [])).next())
            }
            )
        }, b = function(t, e) {
            var n, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                o && (i = o[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(i = i.call(o, r[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (r = [0, i.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    i = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = r;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(t, a)
                            } catch (t) {
                                r = [6, t],
                                o = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }, m = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var o, i, r = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(o = r.next()).done; )
                    a.push(o.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (n = r.return) && n.call(r)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return a
        }, w = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(m(arguments[e]));
            return t
        }, O = new f.a("floor-controls"), E = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.originalFloors = [],
                n.originalCurrentFloor = -2,
                n.handleClickFloor = n.handleClickFloor.bind(n),
                n.isAllFloors = n.isAllFloors.bind(n),
                n.updateCurrentFloor = n.updateCurrentFloor.bind(n),
                n.state = {
                    currentFloor: -2,
                    floorNames: []
                },
                n
            }
            return g(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                return y(this, void 0, void 0, function() {
                    return b(this, function(e) {
                        return this.props.viewmode !== t.viewmode && this.setFloorsForMode(t.viewmode),
                        [2]
                    })
                })
            }
            ,
            e.prototype.handleClickFloor = function(t) {
                return y(this, void 0, void 0, function() {
                    var e;
                    return b(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 7, , 8]),
                            this.props.tourPlaying ? [4, this.props.sdk.Tour.stop()] : [3, 2];
                        case 1:
                            n.sent(),
                            n.label = 2;
                        case 2:
                            return this.isAllFloors(t) ? (this.context.analytics.track("showcase_gui", {
                                gui_action: "click_toggle_all_floors_button"
                            }),
                            [4, this.props.sdk.Floor.showAll()]) : [3, 4];
                        case 3:
                            return n.sent(),
                            [3, 6];
                        case 4:
                            return t === this.state.currentFloor ? [3, 6] : (this.context.analytics.track("showcase_gui", {
                                gui_action: "click_floor_select_button"
                            }),
                            [4, this.props.sdk.Floor.moveTo(t)]);
                        case 5:
                            n.sent(),
                            n.label = 6;
                        case 6:
                            return [3, 8];
                        case 7:
                            return e = n.sent(),
                            O.debug(e),
                            [3, 8];
                        case 8:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.setFloorsForMode = function(t) {
                var e = t !== this.props.sdk.Mode.Mode.INSIDE
                  , n = this.state.floorNames.length > this.originalFloors.length;
                if (!(this.state.currentFloor > -2 && n === e)) {
                    var o = e ? w(this.originalFloors, [this.context.locale.t(c.a.FLOOR_ALL)]) : this.originalFloors.slice(0, this.originalFloors.length)
                      , i = this.getFloorIndex(o.length);
                    this.setState({
                        floorNames: o,
                        currentFloor: i
                    })
                }
            }
            ,
            e.prototype.updateCurrentFloor = function(t) {
                this.originalCurrentFloor = t;
                var e = this.getFloorIndex(this.state.floorNames.length);
                e !== this.state.currentFloor && this.setState({
                    currentFloor: e
                })
            }
            ,
            e.prototype.getFloorIndex = function(t) {
                return this.originalCurrentFloor < 0 && this.props.viewmode !== this.props.sdk.Mode.Mode.INSIDE ? t - 1 : this.originalCurrentFloor
            }
            ,
            e.prototype.isAllFloors = function(t) {
                return !this.originalFloors[t]
            }
            ,
            e.prototype.componentDidMount = function() {
                return y(this, void 0, void 0, function() {
                    var t, e;
                    return b(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]),
                            [4, this.props.sdk.Floor.getData()];
                        case 1:
                            return t = n.sent(),
                            this.originalFloors = t.floorNames,
                            this.originalCurrentFloor = t.currentFloor,
                            this.setFloorsForMode(this.props.viewmode),
                            this.props.sdk.on(this.props.sdk.Floor.Event.CHANGE_END, this.updateCurrentFloor),
                            [3, 3];
                        case 2:
                            return e = n.sent(),
                            O.debug(e),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                this.props.sdk.off(this.props.sdk.Floor.Event.CHANGE_END, this.updateCurrentFloor)
            }
            ,
            e.prototype.render = function() {
                var t = this.originalFloors.length > 1 && this.props.viewmode !== this.props.sdk.Mode.Mode.OUTSIDE;
                return Object(i.h)(p, {
                    isDisplaying: t,
                    floorNames: this.state.floorNames,
                    currentFloor: this.state.currentFloor,
                    handleClickFloor: this.handleClickFloor,
                    isAllFloors: this.isAllFloors
                })
            }
            ,
            e = v([d.a], e)
        }(i.Component);
        e.a = E
    },
    306: function(t, e, n) {
        "use strict";
        var o, i = n(183), r = n(185), a = n(58), s = (o = Object.setPrototypeOf || {
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
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), l = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return s(e, t),
            e.prototype.convertModeToTooltip = function(t) {
                var e = this.props.Viewmode
                  , n = this.context.locale;
                switch (e[t]) {
                case e.DOLLHOUSE:
                    return n.t(a.a.VIEW_DOLLHOUSE);
                case e.FLOORPLAN:
                    return n.t(a.a.VIEW_FLOORPLAN);
                default:
                    return n.t(a.a.EXPLORE_3D_SPACE)
                }
            }
            ,
            e.prototype.convertPropsToStrings = function(t) {
                return "INSIDE" === t ? "panorama" : t.toLowerCase()
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = -1
                  , n = this.props.activeViewmodes.map(function(n) {
                    e++;
                    var o = t.convertPropsToStrings(n)
                      , a = t.convertModeToTooltip(n);
                    return Object(i.h)("div", {
                        type: "button",
                        "data-balloon": a,
                        "data-balloon-pos": 0 === e && t.props.leftMost ? "up-right" : "up",
                        class: r(o, "ui-icon"),
                        key: n,
                        onClick: t.props.handleClick.bind(t, n)
                    }, Object(i.h)("span", {
                        class: "icon icon-" + o
                    }))
                });
                return Object(i.h)("div", {
                    id: "mode-change",
                    class: "left-row"
                }, n)
            }
            ,
            e
        }(i.Component), c = n(184), h = n.n(c), p = n(4), u = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), d = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, f = function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function s(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function l(t) {
                    t.done ? i(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                l((o = o.apply(t, e || [])).next())
            }
            )
        }, g = function(t, e) {
            var n, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                o && (i = o[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(i = i.call(o, r[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (r = [0, i.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    i = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = r;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(t, a)
                            } catch (t) {
                                r = [6, t],
                                o = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }, v = new p.a("mode-controls"), y = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.previousMode = "",
                n.lastInsideSweep = "",
                n.changeMode = n.changeMode.bind(n),
                n.onSweepChange = n.onSweepChange.bind(n),
                n.onModeChangeEnd = n.onModeChangeEnd.bind(n),
                n.state = {
                    viewmode: e.sdk.Mode.Mode.INSIDE,
                    floorplanDisabled: !0,
                    dollhouseDisabled: !0
                },
                n
            }
            return u(e, t),
            e.prototype.componentDidMount = function() {
                return f(this, void 0, void 0, function() {
                    var t, e;
                    return g(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return this.checkDollhouseDisabled(),
                            this.checkFloorplanDisabled(),
                            this.checkDollhouseDisabled = this.checkDollhouseDisabled.bind(this),
                            this.checkFloorplanDisabled = this.checkFloorplanDisabled.bind(this),
                            this.context.settings.onPropertyChanged("dh", this.checkDollhouseDisabled),
                            this.context.settings.onPropertyChanged("dollhouse", this.checkDollhouseDisabled),
                            this.context.settings.onPropertyChanged("fp", this.checkFloorplanDisabled),
                            this.context.settings.onPropertyChanged("floor_plan", this.checkFloorplanDisabled),
                            (t = this.props.sdk).on(t.Sweep.Event.ENTER, this.onSweepChange),
                            t.on(t.Mode.Event.CHANGE_END, this.onModeChangeEnd),
                            [4, t.Camera.getPose()];
                        case 1:
                            return (e = n.sent().mode) !== this.state.viewmode && (this.setState({
                                viewmode: e
                            }),
                            this.props.onViewmodeChanged(e)),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.checkDollhouseDisabled = function() {
                var t = this.context.settings
                  , e = t.checkUrlParam("dh", 0, 1)
                  , n = !t.tryGetProperty("dollhouse", !1)
                  , o = e || n;
                this.setState({
                    dollhouseDisabled: o
                })
            }
            ,
            e.prototype.checkFloorplanDisabled = function() {
                var t = this.context.settings
                  , e = t.checkUrlParam("fp", 0, 1)
                  , n = !t.tryGetProperty("floor_plan", !1)
                  , o = e || n;
                this.setState({
                    floorplanDisabled: o
                })
            }
            ,
            e.prototype.onModeChangeEnd = function(t, e) {
                this.setState({
                    viewmode: e
                }),
                this.props.onViewmodeChanged(e)
            }
            ,
            e.prototype.componentWillUnmount = function() {
                var t = this.props.sdk;
                t.off(t.Sweep.Event.ENTER, this.onSweepChange),
                t.off(t.Mode.Event.CHANGE_END, this.onModeChangeEnd)
            }
            ,
            e.prototype.onSweepChange = function(t, e) {
                var n = this.props.panoMap[e];
                n && n.aligned && (this.lastInsideSweep = e)
            }
            ,
            e.prototype.isDisabledMode = function(t) {
                var e = this.props.sdk;
                return t === e.Mode.Mode.DOLLHOUSE && this.state.dollhouseDisabled || t === e.Mode.Mode.FLOORPLAN && this.state.floorplanDisabled
            }
            ,
            e.prototype.changeMode = function(t) {
                return f(this, void 0, void 0, function() {
                    var e, n, o;
                    return g(this, function(i) {
                        switch (i.label) {
                        case 0:
                            e = this.props.sdk,
                            n = e.Mode.Mode[t],
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 6, , 7]),
                            this.props.tourPlaying ? [4, e.Tour.stop()] : [3, 3];
                        case 2:
                            i.sent(),
                            i.label = 3;
                        case 3:
                            return this.state.viewmode === e.Mode.Mode.TRANSITIONING || n === e.Mode.Mode.TRANSITIONING ? [3, 5] : (this.context.analytics.track("showcase_gui", {
                                gui_action: this.getAnalyticsAction(t)
                            }),
                            [4, e.Mode.moveTo(n)]);
                        case 4:
                            i.sent(),
                            i.label = 5;
                        case 5:
                            return [3, 7];
                        case 6:
                            return o = i.sent(),
                            v.debug(o),
                            [3, 7];
                        case 7:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = this.props.sdk
                  , n = this.state.viewmode;
                if (!e || !e.Mode)
                    return null;
                this.previousMode !== n && n !== e.Mode.Mode.TRANSITIONING && (this.previousMode = n);
                var o = [];
                try {
                    o = Object.keys(e.Mode.Mode).filter(function(n) {
                        var o = e.Mode.Mode[n]
                          , i = o !== t.previousMode
                          , r = o !== e.Mode.Mode.OUTSIDE
                          , a = o !== e.Mode.Mode.TRANSITIONING
                          , s = !t.isDisabledMode(o);
                        return i && r && a && s
                    })
                } catch (t) {
                    v.debug(t)
                }
                return Object(i.h)(l, {
                    Viewmode: this.props.sdk.Mode.Mode,
                    activeViewmodes: o,
                    handleClick: this.changeMode,
                    leftMost: this.props.leftMost
                })
            }
            ,
            e.prototype.getAnalyticsAction = function(t) {
                var e = this.props.sdk
                  , n = "click_" + t + "_button";
                switch (e.Mode.Mode[t]) {
                case e.Mode.Mode.DOLLHOUSE:
                    n = "click_dollhouse_mode_button";
                    break;
                case e.Mode.Mode.FLOORPLAN:
                    n = "click_floorplan_mode_button";
                    break;
                case e.Mode.Mode.INSIDE:
                    n = "click_inside_mode_button"
                }
                return n
            }
            ,
            e = d([h.a], e)
        }(i.Component);
        e.a = y
    },
    307: function(t, e, n) {
        "use strict";
        var o, i = n(183), r = n(185), a = (n(446),
        o = Object.setPrototypeOf || {
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
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return a(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.position
                  , n = t.text
                  , o = {
                    left: e.x + "px",
                    top: e.y + "px"
                };
                return this.props.visible ? Object(i.h)("div", {
                    class: r("label"),
                    style: o
                }, n) : null
            }
            ,
            e
        }(i.Component), l = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), c = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return l(e, t),
            e.prototype.render = function() {
                var t = 0
                  , e = this.props
                  , n = e.labels
                  , o = e.currentFloor
                  , r = e.topMostFloor;
                return Object(i.h)("div", {
                    id: "labels"
                }, n.map(function(e) {
                    var n = e.floor
                      , a = e.screenPosition
                      , l = e.text
                      , c = e.visible;
                    return Object(i.h)(s, {
                        key: t++,
                        position: a,
                        text: l,
                        visible: (-1 === o && r === n || o === n) && c
                    })
                }))
            }
            ,
            e
        }(i.Component), h = n(184), p = n.n(h), u = n(4), d = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), f = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, g = function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function s(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function l(t) {
                    t.done ? i(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                l((o = o.apply(t, e || [])).next())
            }
            )
        }, v = function(t, e) {
            var n, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                o && (i = o[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(i = i.call(o, r[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (r = [0, i.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    i = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = r;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(t, a)
                            } catch (t) {
                                r = [6, t],
                                o = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }, y = new u.a("label-ui"), b = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.onViewTransitionStart = function() {
                    n.setState({
                        inModeTransition: !0
                    })
                }
                ,
                n.onViewTransitionEnd = function(t, e) {
                    return g(n, void 0, void 0, function() {
                        var t;
                        return v(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return e !== this.props.sdk.Mode.Mode.FLOORPLAN ? [3, 2] : (this.setState({
                                    inModeTransition: !1
                                }),
                                [4, this.props.sdk.Label.getData()]);
                            case 1:
                                t = n.sent(),
                                this.setState({
                                    labels: t
                                }),
                                n.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }
                ,
                n.setState({
                    labels: [],
                    currentFloor: -1,
                    topMostFloor: 0,
                    inModeTransition: !1
                }),
                n.updateLabelPositions = n.updateLabelPositions.bind(n),
                n.clearVisibleFloor = n.clearVisibleFloor.bind(n),
                n.updateVisibleFloor = n.updateVisibleFloor.bind(n),
                n.updateFloorState = n.updateFloorState.bind(n),
                n.props.sdk.Floor.getData().then(n.updateFloorState),
                n
            }
            return d(e, t),
            e.prototype.componentDidMount = function() {
                return g(this, void 0, void 0, function() {
                    var t, e, n;
                    return v(this, function(o) {
                        switch (o.label) {
                        case 0:
                            t = this.props.sdk,
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, t.Label.getData()];
                        case 2:
                            return e = o.sent(),
                            this.setState({
                                labels: e
                            }),
                            [3, 4];
                        case 3:
                            return n = o.sent(),
                            y.debug(n),
                            [3, 4];
                        case 4:
                            return t.on(t.Label.Event.POSITION_UPDATED, this.updateLabelPositions),
                            t.on(t.Floor.Event.CHANGE_START, this.clearVisibleFloor),
                            t.on(t.Floor.Event.CHANGE_END, this.updateVisibleFloor),
                            t.on(t.Mode.Event.CHANGE_START, this.onViewTransitionStart),
                            t.on(t.Mode.Event.CHANGE_END, this.onViewTransitionEnd),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                var t = this.props.sdk;
                t.off(t.Label.Event.POSITION_UPDATED, this.updateLabelPositions),
                t.off(t.Floor.Event.CHANGE_START, this.clearVisibleFloor),
                t.off(t.Floor.Event.CHANGE_END, this.updateVisibleFloor),
                t.off(t.Mode.Event.CHANGE_START, this.onViewTransitionStart),
                t.off(t.Mode.Event.CHANGE_END, this.onViewTransitionEnd)
            }
            ,
            e.prototype.render = function() {
                var t = this.state
                  , e = t.labels
                  , n = t.currentFloor
                  , o = t.topMostFloor
                  , r = this.props
                  , a = r.sdk;
                return r.viewmode !== a.Mode.Mode.FLOORPLAN || this.state.inModeTransition ? null : Object(i.h)(c, {
                    labels: e,
                    currentFloor: n,
                    topMostFloor: o
                })
            }
            ,
            e.prototype.updateFloorState = function(t) {
                this.setState({
                    currentFloor: t.currentFloor,
                    topMostFloor: t.totalFloors - 1
                })
            }
            ,
            e.prototype.updateLabelPositions = function(t) {
                this.setState({
                    labels: t
                })
            }
            ,
            e.prototype.clearVisibleFloor = function() {
                this.setState({
                    currentFloor: void 0
                })
            }
            ,
            e.prototype.updateVisibleFloor = function(t) {
                this.setState({
                    currentFloor: t
                })
            }
            ,
            e = f([p.a], e)
        }(i.Component);
        e.a = b
    },
    310: function(t, e, n) {
        "use strict";
        var o, i = n(183), r = n(184), a = n.n(r), s = (n(275),
        n(36)), l = n(185), c = n(322), h = n(18);
        !function(t) {
            t[t.NOT_READY = 1] = "NOT_READY",
            t[t.CUED = 2] = "CUED",
            t[t.PLAYING = 3] = "PLAYING",
            t[t.PAUSED = 4] = "PAUSED"
        }(o = o || (o = {}));
        var p, u, d = 10, f = 22, g = 30, v = n(4), y = (p = Object.setPrototypeOf || {
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
            p(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), b = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        , m = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, w = new v.a("mattertag-media"), O = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.videoTag = !1,
                n.imageTag = !1,
                n.mediaStyles = function() {
                    if (n.props.data)
                        switch (n.props.mediaType) {
                        case s.a.photo:
                            return n.imageStyle();
                        case s.a.rich:
                        case s.a.video:
                            return {
                                padding: "0px",//"10px",//右边更少
                                width: n.props.width + "px",
                                height: n.props.height + "px"
                            }
                        }
                    return {}
                }
                ,
                n.imageStyle = function() {
                    var t = {
                        backgroundImage: 'url("' + n.props.data.url + '")'
                    };
                    if (!n.props.overlayView)
                        return b({}, t, {
                            width: n.props.width + "px",
                            height: n.props.height + "px"
                        });
                    var e = n.context.guiDiv;
                    if (n.props.landscape) {
                        var o = 3 * d + f
                          , i = e.offsetHeight - o
                          , r = n.getAspectRatio() * i + "px";
                        return b({}, t, {
                            height: i + "px",
                            width: r
                        })
                    }
                    var a = 2 * (d + g);
                    return b({}, t, {
                        width: e.offsetWidth - a,
                        paddingBottom: 1 / n.getAspectRatio() * 100 + "%"
                    })
                }
                ,
                n.videoTag = n.props.mediaType === s.a.video,
                n.imageTag = n.props.mediaType === s.a.photo,
                n.handleClick = function() {
                    n.imageTag && !n.props.overlayView && n.props.toggleOverlay(!0)
                }
                ,
                n
            }
            return y(e, t),
            e.prototype.createPlayer = function(t) {
                var e = this
                  , n = t.querySelector(".embedly-embed");
                if (n) {
                    var i = o.NOT_READY
                      , r = new c.Player(n);
                    try {
                        r.on("ready", function() {
                            i = o.CUED,
                            e.props.onPlayerLoaded && e.props.onPlayerLoaded(s)
                        }),
                        r.on("play", function() {
                            i = o.PLAYING
                        }),
                        r.on("pause", function() {
                            i = o.PAUSED
                        }),
                        r.on("ended", function() {})
                    } catch (t) {
                        w.debug(t)
                    }
                    var a, s = {
                        play: (a = Object(h.j)(),
                        function() {
                            r && i !== o.NOT_READY && !a && r.play()
                        }
                        ),
                        pause: function() {
                            r && i !== o.NOT_READY && r.pause()
                        }
                    }
                }
            }
            ,
            e.prototype.getAspectRatio = function() {
                return this.props.width / this.props.height
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = this.props.data;
                if (!e)
                    return null;
                var n = l({
                    tagImage: this.props.mediaType === s.a.photo,
                    viewImage: this.imageTag,
                    tagEmbed: this.props.mediaType === s.a.rich,
                    tagVideo: this.videoTag,
                    landscape: this.props.landscape
                })
                  , o = e && e.html ? Object(i.h)("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.data.html
                    },
                    ref: function(e) {
                        t.videoTag && t.createPlayer(e)
                    }
                }) : null;
                return Object(i.h)("div", {
                    className: l("tagMediaContent"),
                    onClick: this.handleClick
                }, Object(i.h)("div", {
                    className: n,
                    style: this.mediaStyles()
                }, Object(i.h)("div", null, o)))
            }
            ,
            e = m([a.a], e)
        }(i.Component), E = n(64), C = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), S = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, k = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.formatDescription = function(t) {
                    return t.map(function(t) {
                        return e.formatDescriptionChunk(t)
                    })
                }
                ,
                e.formatDescriptionChunk = function(t) {
                    switch (t.type) {
                    case s.a.link:
                        if (t.link)
                            return Object(i.h)("a", {
                                className: "tagLink hasHover",
                                onClick: e.linkClicked(t)
                            }, t.link.label, Object(i.h)("i", {
                                class: "icon-mt-link",
                                title: "Link to postion within this model"
                            }));
                    case s.a.text:
                        return Object(i.h)("span", null, t.text)
                    }
                    return null
                }
                ,
                e
            }
            return C(e, t),
            e.prototype.render = function() {
                var t = this.props
                  , e = t.description
                  , n = t.parsedDescription
                  , o = e;
                return n && n.length > 0 && (o = this.formatDescription(n)),
                o ? Object(i.h)("div", {
                    className: "tagDesc"
                }, o) : null
            }
            ,
            e.prototype.linkClicked = function(t) {
                var e = this;
                return function(n) {
                    if (e.props.onLinkClick(t),
                    void 0 !== t.link)
                        switch (t.link.type) {
                        case E.a.NAVIGATION:
                            e.props.navigationTagClicked(t);
                            break;
                        case E.a.MODEL:
                            window.location.replace(t.link.url);
                            break;
                        case E.a.EXT_LINK:
                            window.open(t.link.url, "_blank")
                        }
                }
            }
            ,
            e = S([a.a], e)
        }(i.Component), T = n(215), _ = n(217), P = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), D = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        , M = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, L = 120 + (f + 15), F = 2 * d + 10, j = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    height: null,
                    descriptionHeight: 0,
                    scrollable: !1,
                    determiningScrollability: !1,
                    scrollClass: _.c.None
                },
                n.onScrollPositionChange = function() {
                    if (n.scrollbars && !n.state.determiningScrollability) {
                        var t = n.scrollbars.scrollPosition.vertical;
                        n.setState({
                            scrollClass: t
                        })
                    }
                }
                ,
                n
            }
            return P(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                t.tagWidth !== this.props.tagWidth && this.setState({
                    height: null,
                    scrollable: !0,
                    determiningScrollability: !0
                })
            }
            ,
            e.prototype.componentDidMount = function() {
                this.determineScrollability()
            }
            ,
            e.prototype.componentDidUpdate = function() {
                this.state.determiningScrollability && this.determineScrollability()
            }
            ,
            e.prototype.determineScrollability = function() {
                var t = this.textContainer && this.textContainer.querySelector(".tagDesc")
                  , e = {
                    determiningScrollability: !1
                };
                if (this.props.description && t) {
                    var n = this.props.mediaTag ? 65 : L;
                    if (t.scrollHeight > n + d) {
                        var o = this.textContainer && this.textContainer.querySelector(".tagLabel")
                          , i = this.props.label ? n + o.scrollHeight - 5 : n;
                        e = D({}, e, {
                            height: i,
                            scrollable: !0,
                            scrollClass: _.c.Beginning
                        })
                    } else
                        e = D({}, e, {
                            height: null,
                            scrollable: !1,
                            scrollClass: _.c.None
                        })
                }
                this.setState(e)
            }
            ,
            e.prototype.render = function() {
                var t, e = this, n = this.props, o = n.label, r = n.description, a = n.parsedDescription, s = n.onLinkClick, c = n.navigationTagClicked;
                if (o || r || a) {
                    var h = l(((t = {
                        tagTextContent: !0,
                        noScroll: !this.state.height || !this.state.scrollable
                    })[this.state.scrollClass] = !0,
                    t))
                      , p = {};
                    if (this.state.scrollable && this.props.tagWidth) {
                        var u = this.props.imageTag ? (this.props.tagWidth || 0) - F : this.props.tagWidth;
                        p.width = u + "px"
                    }
                    return Object(i.h)("div", {
                        class: h,
                        style: {
                            height: this.state.scrollable && this.state.height || "auto"
                        },
                        ref: function(t) {
                            e.textContainer = t
                        }
                    }, Object(i.h)(T.a, {
                        forceHidden: !1,
                        waitToUpdate: this.state.determiningScrollability,
                        singleScrollDirection: _.b.vertical,
                        ref: function(t) {
                            return e.scrollbars = t
                        },
                        onScrollPositionChange: this.onScrollPositionChange
                    }, Object(i.h)("div", {
                        style: p
                    }, o && Object(i.h)("div", {
                        class: "tagLabel",
                        onClick: this.onBoundClick
                    }, Object(i.h)("span", null, o)), Object(i.h)(k, {
                        description: r,
                        parsedDescription: a,
                        onLinkClick: s,
                        navigationTagClicked: c
                    }))))
                }
                return null
            }
            ,
            e = M([a.a], e)
        }(i.Component), x = n(59), N = function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function s(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function l(t) {
                    t.done ? i(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                l((o = o.apply(t, e || [])).next())
            }
            )
        }, A = function(t, e) {
            var n, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                o && (i = o[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(i = i.call(o, r[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (r = [0, i.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    i = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = r;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(t, a)
                            } catch (t) {
                                r = [6, t],
                                o = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }, R = function() {
            function t() {
                this.embedEndpoint = "https://api.embedly.com/1/oembed",
                this.imageEndpoint = "https://i.embed.ly/1/display/resize",
                this.configEndpoint = "/api/v1/config/showcase.json",
                t.queue || (t.queue = new x.RequestQueue({
                    retries: 0
                }))
            }
            return t.prototype.getMediaDetails = function(t, e) {
                return N(this, void 0, void 0, function() {
                    return A(this, function(n) {
                        switch (t) {
                        case s.a.photo:
                            return [2, this.getImageDetails(e)];
                        case s.a.rich:
                        case s.a.video:
                            return [2, this.getEmbedDetails(e)]
                        }
                        return [2]
                    })
                })
            }
            ,
            t.prototype.getEmbedDetails = function(e) {
                return N(this, void 0, void 0, function() {
                    var n, o, i;
                    return A(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [2, new Promise(function(resove,reject) {
                                resove({
                                    width: 800,
                                    height: 800,
                                    embedlyResponse: {
                                        html: "<iframe src=\""+e+"\"></iframe>",
                                        src: e
                                    }
                                })
                            })];
                        
                            return [4, this.getKey()];
                        case 1:
                            return r.sent(),
                            n = Math.max(window.screen.height, window.screen.width),
                            o = "&maxwidth=" + n + "&maxheight=" + n,
                            i = this.embedEndpoint + "?key=" + t.key + "&url=" + encodeURIComponent(e) + o,
                            [2, t.queue.get(i).then(function(t) {
                                if (!(t = JSON.parse(t)).html || -1 !== t.html.indexOf("<script"))
                                    throw new Error("Not a valid embed");
                                return {
                                    width: t.width,
                                    height: t.height,
                                    embedlyResponse: {
                                        html: t.html,
                                        src: e
                                    }
                                }
                            }).catch(function(t) {
                                throw new Error("Failed to get embed")
                            })]
                        }
                    })
                })
            }
            ,
            t.prototype.getImageDetails = function(e) {
                return N(this, void 0, void 0, function() {
                    var n, o, i, r = this;
                    return A(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return [2, new Promise(function(resove,reject) {
                                resove({
                                    width: 800,
                                    height: 800,
                                    embedlyResponse: {
                                        url: e,
                                        src: e
                                    }
                                })
                            })];

                            return [4, this.getKey()];
                        case 1:
                            return a.sent(),
                            n = Math.min(window.screen.height, window.screen.width),
                            o = "&url=" + encodeURIComponent(e) + "&width=" + n + "&height=" + n,
                            i = this.imageEndpoint + "?key=" + t.key + o,
                            [2, new Promise(function(n, o) {
                                return t.queue.get(i, {
                                    responseType: "arraybuffer"
                                }).then(function(t) {
                                    var o = new Uint8Array(t)
                                      , i = new Blob([o])
                                      , a = new Image;
                                    a.addEventListener("load", function(t) {
                                        var o = t.target;
                                        n({
                                            width: o.naturalWidth,
                                            height: o.naturalHeight,
                                            embedlyResponse: {
                                                url: s,
                                                src: e
                                            }
                                        })
                                    }
                                    .bind(r));
                                    var s = URL.createObjectURL(i);
                                    a.src = s
                                }, o)
                            }
                            )]
                        }
                    })
                })
            }
            ,
            t.prototype.getKey = function() {
                return N(this, void 0, void 0, function() {
                    return A(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return t.key ? [3, 2] : [4, t.queue.get(window.location.origin + this.configEndpoint).then(function(e) {
                                var n = JSON.parse(e);
                                t.key = n.embedly_key
                            })];
                        case 1:
                            e.sent(),
                            e.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })
            }
            ,
            t
        }(), I = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), V = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        , H = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, W = 2 * d + (f + 15), U = 2 * d + 10, B = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    collapsed: !1,
                    height: null,
                    descriptionHeight: 0,
                    scrollable: !1,
                    determiningScrollability: !1,
                    scrollClass: _.c.None
                },
                n.updateScrollAndCollapse = n.updateScrollAndCollapse.bind(n),
                n.toggleCollapseText = function() {
                    n.setState({
                        collapsed: !n.state.collapsed
                    })
                }
                ,
                n.onScrollPositionChange = function() {
                    if (n.scrollbars && !n.state.determiningScrollability) {
                        var t = n.scrollbars.scrollPosition.vertical;
                        n.setState({
                            scrollClass: t
                        })
                    }
                }
                ,
                n
            }
            return I(e, t),
            e.prototype.componentDidMount = function() {
                this.updateScrollAndCollapse()
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                !t.overlayOpen && this.props.overlayOpen && this.setState({
                    collapsed: !1
                }),
                t.overlayWidth === this.props.overlayWidth && t.overlayHeight === this.props.overlayHeight || this.setState({
                    determiningScrollability: !0,
                    scrollable: !1,
                    scrollClass: _.c.None,
                    height: 0
                })
            }
            ,
            e.prototype.componentDidUpdate = function() {
                var t = this;
                this.state.determiningScrollability && setTimeout(function() {
                    return window.requestAnimationFrame(t.updateScrollAndCollapse)
                }, 0)
            }
            ,
            e.prototype.updateScrollAndCollapse = function() {
                var t = this.textContainer ? this.textContainer.scrollHeight : 0
                  , e = this.textContainer && this.textContainer.querySelector(".tagDesc")
                  , n = {
                    determiningScrollability: !1
                };
                if (t) {
                    var o = Math.max(t - W - this.props.overlayHeight || 0, 0)
                      , i = o > 0
                      , r = t - o
                      , a = e && e.scrollHeight - o
                      , s = i ? _.c.Beginning : _.c.None;
                    n = V({}, n, {
                        height: r,
                        scrollable: i,
                        descriptionHeight: a,
                        scrollClass: s
                    }),
                    this.props.toggleCollapsible(t > W)
                }
                this.setState(n)
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = this.props
                  , n = e.label
                  , o = e.description
                  , r = e.parsedDescription
                  , a = e.onLinkClick
                  , s = e.navigationTagClicked;
                if (n || o || r) {
                    var c = l({
                        tagTextContent: !0,
                        showInfo: !this.state.collapsed,
                        noScroll: !this.state.height || !this.state.scrollable
                    })
                      , h = {
                        maxHeight: this.state.determiningScrollability ? "" : this.state.height + "px"
                    }
                      , p = {}
                      , u = {};
                    return o && (u.width = (this.props.overlayWidth || 0) - U + "px",
                    this.state.height && this.state.scrollable && (p.height = this.state.descriptionHeight + "px",
                    p.overflow = "hidden")),
                    Object(i.h)("div", {
                        class: c,
                        style: h,
                        ref: function(e) {
                            t.textContainer = e
                        }
                    }, n && Object(i.h)("div", {
                        class: "tagLabel",
                        onClick: this.toggleCollapseText
                    }, Object(i.h)("div", {
                        class: "buttons"
                    }, this.props.collapsible && Object(i.h)("span", {
                        class: "button icon-dpad-down"
                    }), Object(i.h)("span", {
                        class: "button icon-close",
                        onClick: this.props.closeOverlay
                    })), Object(i.h)("div", {
                        class: "labelText"
                    }, n)), o && Object(i.h)("div", {
                        style: p,
                        class: l(this.state.scrollClass, "wrappedDesc")
                    }, Object(i.h)(T.a, {
                        forceHidden: !1,
                        waitToUpdate: this.state.determiningScrollability,
                        singleScrollDirection: _.b.vertical,
                        ref: function(e) {
                            return t.scrollbars = e
                        },
                        onScrollPositionChange: this.onScrollPositionChange
                    }, Object(i.h)("div", {
                        style: u
                    }, Object(i.h)(k, {
                        description: o,
                        parsedDescription: r,
                        onLinkClick: a,
                        navigationTagClicked: s
                    })))))
                }
                return null
            }
            ,
            e = H([a.a], e)
        }(i.Component), G = n(228), z = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), X = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        , Y = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, q = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.toggleCollapsible = n.toggleCollapsible.bind(n),
                n.recalculateDimensions = n.recalculateDimensions.bind(n);
                var o = Boolean(e.description && e.description.length > 0);
                return n.state = X({}, n.getOverlayDimensions(), {
                    collapsible: o
                }),
                n.closeOverlay = function(t) {
                    t.target.compareDocumentPosition(n.tagContainer) & Node.DOCUMENT_POSITION_CONTAINS || n.props.closeOverlay(t)
                }
                ,
                n
            }
            return z(e, t),
            e.prototype.toggleCollapsible = function(t) {
                this.state.collapsible !== t && this.setState({
                    collapsible: t
                })
            }
            ,
            e.prototype.componentWillReceiveProps = function(t) {
                (t.width !== this.props.width || t.height !== this.props.height || t.overlayOpen) && this.setState(this.getOverlayDimensions())
            }
            ,
            e.prototype.componentDidMount = function() {
                Object(G.c)(G.b.RESIZE, this.recalculateDimensions)
            }
            ,
            e.prototype.componentWillUnmount = function() {
                Object(G.e)(G.b.RESIZE, this.recalculateDimensions)
            }
            ,
            e.prototype.recalculateDimensions = function() {
                this.props.overlayOpen && this.props.data && this.setState(this.getOverlayDimensions())
            }
            ,
            e.prototype.getOverlayDimensions = function() {
                var t = window.innerWidth - (2 * g + 2 * d)
                  , e = window.innerHeight - (3 * d + f)
                  , n = this.props.width / this.props.height
                  , o = n < t / e;
                return {
                    landscape: o,
                    overlayHeight: o ? e : t / n,
                    overlayWidth: o ? e * n : t
                }
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = this.props
                  , n = e.label
                  , o = e.description
                  , r = e.parsedDescription
                  , a = e.overlayOpen
                  , c = e.closeOverlay
                  , h = e.onLinkClick
                  , p = e.navigationTagClicked
                  , u = e.data
                  , d = this.state
                  , f = d.overlayWidth
                  , g = d.overlayHeight
                  , v = d.collapsible
                  , y = d.landscape
                  , b = l({
                    tagContainer: !0,
                    hasHotzone: !0,
                    hasText: n || o,
                    hasImage: !0,
                    overlay: !0,
                    overlayOpen: a
                });
                return Object(i.h)("div", {
                    className: b,
                    ref: function(e) {
                        t.tagContainer = e
                    },
                    onClick: this.closeOverlay
                }, Object(i.h)("div", {
                    className: l("tagBody", "overlay", {
                        collapsible: v
                    })
                }, Object(i.h)(B, {
                    label: n,
                    description: o,
                    parsedDescription: r,
                    overlayWidth: f,
                    overlayHeight: g,
                    overlayOpen: a,
                    collapsible: v,
                    toggleCollapsible: this.toggleCollapsible,
                    closeOverlay: c,
                    onLinkClick: h,
                    navigationTagClicked: p
                }), Object(i.h)(O, {
                    data: u,
                    mediaType: s.a.photo,
                    width: f,
                    height: g,
                    landscape: y,
                    overlayView: !0,
                    toggleOverlay: this.props.toggleOverlay
                })))
            }
            ,
            e = Y([a.a], e)
        }(i.Component), Z = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), K = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var i in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }
        , J = function(t, e, n, o) {
            var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a),
            a
        }, Q = new v.a("mattertag");
        !function(t) {
            t.TOP = "Top",
            t.BOTTOM = "Bottom",
            t.RIGHT = "Right",
            t.LEFT = "Left",
            t.UP = "Up",
            t.DOWN = "Down",
            t.PREFIX = "tag"
        }(u || (u = {}));
        var $, tt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.photoTag = !1,
                n.mediaTag = !1,
                n.mediaLoading = !1,
                n.data = {},
                n.linkCount = 0,
                n.linksClicked = [],
                n.playerControls = null,
                n.embedly = new R;
                var o = e.data;
                if (!o)
                    return n;
                n.photoTag = o.mediaType === s.a.photo,
                n.mediaTag = n.photoTag || o.mediaType === s.a.video || o.mediaType === s.a.rich;
                var i = n.getStandardDimensions(o.mediaType, 1024, 1024);
                return n.setState({
                    x: e.posX,
                    y: e.posY,
                    width: i.width,
                    height: 190,
                    mediaPayload: null,
                    overlayView: !1,
                    landscape: !1
                }),
                n.toggleOverlay = function(t) {
                    n.setState({
                        overlayView: t
                    }),
                    n.props.toggleBillboard && n.props.toggleBillboard(t)
                }
                ,
                n.closeTag = function() {
                    n.toggleOverlay(!1)
                }
                ,
                n.onLinkClick = n.onLinkClick.bind(n),
                n.onPlayerLoaded = n.onPlayerLoaded.bind(n),
                n
            }
            return Z(e, t),
            e.prototype.componentWillReceiveProps = function(t) {
                t.active && this.mediaTag && !this.mediaLoading && !this.state.mediaPayload && (this.mediaLoading = !0,
                this.loadMedia(t)),
                t.active && this.setState({
                    x: t.posX,
                    y: t.posY
                }),
                !t.active && this.props.active && this.state.overlayView && this.toggleOverlay(!1),
                this.playerControls && (this.props.active === t.active && this.props.closing === t.closing || (t.active && !t.closing ? this.playerControls.play() : this.playerControls.pause()))
            }
            ,
            e.prototype.loadMedia = function(t) {
                var e = this;
                this.embedly.getMediaDetails(t.data.mediaType, t.data.mediaSrc).then(function(n) {
                    if (n) {
                        e.data = n;
                        var o = e.getStandardDimensions(t.data.mediaType, n.height, n.width);
                        e.setState(K({}, o, {
                            mediaPayload: n.embedlyResponse
                        })),
                        e.mediaLoading = !1
                    }
                }).catch(function(t) {
                    Q.debug(t),
                    e.mediaTag = !1;
                    var n = e.getStandardDimensions(s.a.text, 1024, 1024);
                    e.setState(n)
                })
            }
            ,
            e.prototype.getStandardDimensions = function(t, e, n) {
                var o = {
                    width: 250 - d,
                    height: 0,
                    landscape: !1
                };
                if (t === s.a.text || t === s.a.none)
                    return o;
                var i, r = n, a = Math.max(n, 1) / Math.max(e, 1);
                return {
                    width: r = t === s.a.photo ? a > 1 ? Math.min(n, 400) : Math.max(Math.min(r, 300), 225) : Math.min(n, 350),
                    height: i = r / a,
                    landscape: r / i > 1
                }
            }
            ,
            e.prototype.onPlayerLoaded = function(t) {
                this.playerControls = t,
                this.props.active && t.play()
            }
            ,
            e.prototype.render = function() {
                var t = this
                  , e = this.props.data;
                if (!e)
                    return null;
                var n = e.mediaType
                  , o = e.mediaSrc
                  , r = e.label
                  , a = e.description
                  , c = e.parsedDescription
                  , h = this.state
                  , p = h.mediaPayload
                  , d = p && o && n === s.a.video
                  , f = p && o && n === s.a.rich
                  , g = p && this.photoTag;
                if (!(r || a || d || f || g))
                    return null;
                var v, y, b = this.props.isNavigationFocus ? u.PREFIX + u.RIGHT : nt(this.props, this.state),
                 m = l(((v = {
                    tagScaleWrapper: !0
                })[b] = !0,
                v.active = this.props.active && !this.props.closing,
                v.overlay = this.state.overlayView,
                v)), 
                w = l(((y = {
                    tagContainer: n !== s.a.hotspot && n !== s.a.flying,//是否显示内容框
                    hasHotzone: !0,
                    hasText: r || a,
                    hasImage: g,
                    hasVideo: this.mediaTag && n === s.a.video,
                    hasEmbed: this.mediaTag && (n === s.a.rich || this.mediaLoading && this.photoTag),
                    imageLandscape: g && this.state.landscape,
                    imagePortrait: g && !this.state.landscape,
                    hidden: this.state.overlayView
                })[b] = !0,
                y)), 
                
                E = p ? Object(i.h)(O, {
                    data: h.mediaPayload,
                    mediaType: n,
                    width: h.width,
                    height: h.height,
                    landscape: h.landscape,
                    overlayView: !1,
                    toggleOverlay: this.toggleOverlay,
                    onPlayerLoaded: this.onPlayerLoaded
                }) : Object(i.h)("div", {
                    class: "loadingSpinner"
                }, Object(i.h)("div", {
                    class: "gui-spinner-icon"
                }));
                return Object(i.h)("div", {
                    className: "tag-position",
                    style: !this.state.overlayView && this.tagStyle()
                }, Object(i.h)("div", {
                    className: m
                }, Object(i.h)("div", {
                    ref: function(e) {
                        t.props.billboardRefs[t.props.data.sid] = e
                    },
                    className: w
                }, Object(i.h)("div", {
                    className: l("tagBody"),
                    style: this.bodyStyle()
                }, Object(i.h)(j, {
                    active: this.props.active,
                    label: r,
                    description: a,
                    parsedDescription: c,
                    imageTag: g,
                    tagWidth: this.state.width,
                    imgHeight: this.state.height,
                    mediaTag: this.mediaTag,
                    overlay: !1,
                    onLinkClick: this.onLinkClick,
                    navigationTagClicked: this.props.onNavigationLinkClicked
                }), this.mediaTag && E)), g && Object(i.h)(q, {
                    label: r,
                    description: a,
                    parsedDescription: c,
                    width: h.width,
                    height: h.height,
                    overlayOpen: h.overlayView,
                    closeOverlay: this.closeTag,
                    onLinkClick: this.onLinkClick,
                    navigationTagClicked: this.props.onNavigationLinkClicked,
                    data: h.mediaPayload,
                    mediaType: n,
                    toggleOverlay: this.toggleOverlay
                })))
            }
            ,
            e.prototype.onLinkClick = function(t) {
                if (void 0 !== t.link) {
                    -1 === this.linksClicked.indexOf(t.link) && this.linksClicked.push(t.link);
                    var e = t.link.type;
                    this.linkCount++,
                    this.context.analytics.track("click_mattertag_link", {
                        link_type: e,
                        link_count: this.linkCount,
                        links_clicked: this.linksClicked.length
                    })
                }
            }
            ,
            e.prototype.tagStyle = function() {
                var t = this.tagPositionStyle();
                return this.props.inView ? t : K({}, t, {
                    pointerEvents: "none",
                    visibility: "hidden"
                })
            }
            ,
            e.prototype.bodyStyle = function() {
                return this.mediaTag && !this.state.mediaPayload ? {
                    width: this.state.width + "px"
                } : {}
            }
            ,
            e.prototype.tagPositionStyle = function() {
                var t = this.state
                  , e = t.x
                  , n = t.y;
                return {
                    transform: "translate(" + e + "px, " + n + "px)",
                    transformOrigin: e + "px " + n + "px",
                    position: "absolute"
                }
            }
            ,
            e = J([a.a], e)
        }(i.Component), et = "Right", nt = function(t, e) {
            if (e.overlayView)
                return "";
            var n = 1 - (e.x + 1) / window.innerWidth * 2
              , o = 1 - (e.y + 1) / window.innerHeight * 2
              , i = o < -.2 ? 0 : o < .2 ? 1 : 2
              , r = n < -.2 ? 2 : n < .2 ? 1 : 0
              , a = "";
            return a += 0 === r ? u.RIGHT : 2 === r ? u.LEFT : "",
            a += 2 === i ? u.DOWN : 0 === i ? u.UP : "",
            1 === r && (a = 2 === i ? u.BOTTOM : 0 === i ? u.TOP : "",
            1 === i && (a = window.innerWidth > window.innerHeight ? n < 0 ? u.RIGHT : u.LEFT : o < 0 ? u.BOTTOM : u.TOP)),
            1 === r && 1 === i || a === et || (et = a),
            u.PREFIX + et
        }, ot = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), it = function(t) {
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
        }, rt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.billboardRefs = {},
                n
            }
            return ot(e, t),
            e.prototype.render = function() {
                var t = this.getBillboards();
                return Object(i.h)("div", {
                    id: "tags"
                }, t)
            }
            ,
            e.prototype.getBillboards = function() {
                var t, e, n = this, o = [];
                for (var r in this.props.tags) {
                    var a = this.props.tags[r]
                      , s = null
                      , l = function(t) {
                        t.sid === r && (s = t,
                        t.closing && (s.closing = !0),
                        s.toggleBillboard = function(e) {
                            n.props.toggleBillboard(t.sid, e)
                        }
                        )
                    };
                    try {
                        for (var c = it(this.props.activeTags), h = c.next(); !h.done; h = c.next()) {
                            l(h.value)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            h && !h.done && (e = c.return) && e.call(c)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                    o.push(Object(i.h)(tt, {
                        active: !!s,
                        closing: !!s && !!s.closing,
                        data: a,
                        posX: s ? s.viewportTagPosition.x : 0,
                        posY: s ? s.viewportTagPosition.y : 0,
                        inView: !!s && !s.behindView,
                        toggleBillboard: s ? s.toggleBillboard : function(t) {
                            return null
                        }
                        ,
                        onNavigationLinkClicked: this.props.onNavigationLinkClicked,
                        billboardRefs: this.billboardRefs,
                        isNavigationFocus: this.props.navigationFocus === r
                    }))
                }
                if (this.props.getTagCenter) {
                    var p = this.billboardRefs[this.props.navigationFocus].getBoundingClientRect();
                    this.props.getTagCenter(p.left + p.width / 2, p.top + p.height / 2)
                }
                return o
            }
            ,
            e
        }(i.Component), at = n(3), st = n(43), lt = n(9), ct = n(216), ht = function() {
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
                function o() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                new o)
            }
        }(), pt = function(t, e, n, o) {
            return new (n || (n = Promise))(function(i, r) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function s(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function l(t) {
                    t.done ? i(t.value) : new n(function(e) {
                        e(t.value)
                    }
                    ).then(a, s)
                }
                l((o = o.apply(t, e || [])).next())
            }
            )
        }, ut = function(t, e) {
            var n, o, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                o && (i = o[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(i = i.call(o, r[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (r = [0, i.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    i = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = r;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(t, a)
                            } catch (t) {
                                r = [6, t],
                                o = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }, dt = function(t) {
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
        }, ft = new v.a("mattertag-ui");
        !function(t) {
            t[t.POTENTIAL = 1] = "POTENTIAL",
            t[t.HOVERED = 2] = "HOVERED",
            t[t.SELECTED = 3] = "SELECTED",
            t[t.CLOSING = 4] = "CLOSING"
        }($ || ($ = {}));
        var tagManager = n(36);
        var gt = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.tagStates = {},
                n.hoverTimeouts = {},
                n.closeTimeouts = {},
                n.isOverlayClosed = !0,
                n.onUpdate = n.onUpdate.bind(n),
                n.onMattertagClicked = n.onMattertagClicked.bind(n),
                n.onHoverChange = n.onHoverChange.bind(n),
                n.onSweepExit = n.onSweepExit.bind(n),
                n.toggleBillboard = n.toggleBillboard.bind(n),
                n.setState({
                    tags: {},
                    activeTags: []
                });
                try {
                    e.sdk.on(e.sdk.Mattertag.Event.UPDATED, n.onUpdate),
                    e.sdk.on(e.sdk.Mattertag.Event.HOVER, n.onHoverChange),
                    e.sdk.on(e.sdk.Mattertag.Event.CLICK, n.onMattertagClicked),
                    e.sdk.on(e.sdk.Sweep.Event.EXIT, n.onSweepExit)
                } catch (t) {
                    ft.debug(t)
                }
                return n.onNavigationLinkClicked = n.onNavigationLinkClicked.bind(n),
                n
            }
            return ht(e, t),
            e.prototype.componentDidMount = function() {
                return pt(this, void 0, void 0, function() {
                    var t, e, n, o, i;
                    return ut(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]),
                            [4, this.props.sdk.Mattertag.getData()];
                        case 1:
                            for (n in t = r.sent(),
                            e = {},
                            t)
                                o = t[n].sid,
                                e[o] = t[n],
                                t[n].isOpen && (this.tagStates[o] = $.SELECTED);
                            return this.setState({
                                tags: e
                            }),
                            [3, 3];
                        case 2:
                            return i = r.sent(),
                            ft.debug(i),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.componentWillUnmount = function() {
                return pt(this, void 0, void 0, function() {
                    var t;
                    return ut(this, function(e) {
                        try {
                            (t = this.props.sdk).off(t.Mattertag.Event.UPDATED, this.onUpdate),
                            t.off(t.Mattertag.Event.HOVER, this.onHoverChange),
                            t.off(t.Mattertag.Event.CLICK, this.onMattertagClicked),
                            t.off(t.Sweep.Event.EXIT, this.onSweepExit)
                        } catch (t) {
                            ft.debug(t)
                        }
                        return [2]
                    })
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "tags-root"
                }, Object(i.h)(rt, {
                    activeTags: this.state.activeTags,
                    tags: this.state.tags,
                    toggleBillboard: this.toggleBillboard,
                    onNavigationLinkClicked: this.onNavigationLinkClicked,
                    getTagCenter: this.getTagCenter,
                    navigationFocus: this.state.navigationFocus
                }))
            }
            ,
            e.prototype.toggleBillboard = function(t, e) {
                this.isOverlayClosed = !e,
                this.props.toggleOpen && this.props.toggleOpen(ct.a.mattertag, e),
                e ? this.tagStates[t] !== $.SELECTED && this.onMattertagClicked(t) : this.closeTag(t)
            }
            ,
            e.prototype.onMattertagClicked = function(t) {
                var tag = this.state.tags[t];
                if(tag.mediaType == tagManager.a.flying) {
                    G_APP.flyto(tag.mediaSrc);
                    return;
                }
               


                return pt(this, void 0, void 0, function() {
                    var e = this;
                    return ut(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return this.setState({
                                navigationFocus: t
                            }),
                            this.props.sdk.Mattertag.setActive(t, !0),
                            this.tagStates[t] = $.SELECTED,
                            clearTimeout(this.hoverTimeouts[t]),
                            clearTimeout(this.closeTimeouts[t]),
                            this.closeAllOtherTags(t),
                            [4, this.props.sdk.Mattertag.navigateToTag(t)];
                        case 1:
                            return n.sent(),
                            this.getTagCenter = function(t, n) {
                                return pt(e, void 0, void 0, function() {
                                    return ut(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return this.getTagCenter = void 0,
                                            t += 20,
                                            this.isOverlayClosed ? [4, this.props.sdk.Camera.lookAtScreenCoords(t, n)] : [3, 2];
                                        case 1:
                                            e.sent(),
                                            e.label = 2;
                                        case 2:
                                            return this.setState({
                                                navigationFocus: ""
                                            }),
                                            [2]
                                        }
                                    })
                                })
                            }
                            ,
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.onUpdate = function(t) {
                try {
                    for (var e = dt(t), n = e.next(); !n.done; n = e.next()) {
                        var o = n.value;
                        this.tagStates[o.sid] === $.CLOSING && (o.sid === this.state.navigationFocus ? (this.tagStates[o.sid] = $.SELECTED,
                        this.props.sdk.Mattertag.setActive(o.sid, !0)) : o.closing = !0),
                        this.tagStates[o.sid] || o.sid === this.state.navigationFocus || this.closeTag(o.sid)
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = e.return) && r.call(e)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                var i, r;
                this.setState({
                    activeTags: this.props.tourPlaying ? [] : t
                })
            }
            ,
            e.prototype.onHoverChange = function(t, e) {
                this.state.navigationFocus || (e ? this.hoverTag(t) : this.tagStates[t] !== $.SELECTED && this.closeTag(t))
            }
            ,
            e.prototype.onSweepExit = function() {
                this.state.navigationFocus || this.closeAllOtherTags()
            }
            ,
            e.prototype.hoverTag = function(t) {
                var e = this;
                this.tagStates[t] = $.POTENTIAL,
                this.hoverTimeouts[t] = window.setTimeout(function() {
                    e.tagStates[t] === $.POTENTIAL && (e.tagStates[t] = $.HOVERED,
                    e.props.sdk.Mattertag.setActive(t, !0),
                    e.closeAllOtherTags(t))
                }, 125),
                this.closeTimeouts[t] && clearTimeout(this.closeTimeouts[t])
            }
            ,
            e.prototype.closeTag = function(t) {
                return pt(this, void 0, void 0, function() {
                    var e = this;
                    return ut(this, function(n) {
                        return this.hoverTimeouts[t] && clearTimeout(this.hoverTimeouts[t]),
                        this.tagStates[t] === $.POTENTIAL ? delete this.tagStates[t] : t !== this.state.navigationFocus && (this.tagStates[t] = $.CLOSING,
                        this.closeTimeouts[t] = window.setTimeout(function() {
                            e.tagStates[t] === $.CLOSING && e.props.sdk.Mattertag.setActive(t, !1).then(function() {
                                delete e.tagStates[t]
                            })
                        }, 1e3)),
                        [2]
                    })
                })
            }
            ,
            e.prototype.closeAllOtherTags = function(t) {
                for (var e in this.tagStates)
                    e !== t && this.closeTag(e)
            }
            ,
            e.prototype.onNavigationLinkClicked = function(t) {
                if (t.link && t.link.navigationData) {
                    var e = this.props.sdk
                      , n = {
                        2: e.Mode.Mode.DOLLHOUSE,
                        3: e.Mode.Mode.FLOORPLAN
                    }
                      , o = t.link.navigationData
                      , i = o.panoId
                      , r = o.quaternion
                      , a = o.mode
                      , s = o.position
                      , l = void 0;
                    if (r) {
                        var c = new at.a(r._x,r._y,r._z,r._w);
                        l = {
                            x: (l = (new st.a).setFromQuaternion(c, "YXZ")).x * lt.b,
                            y: l.y * lt.b,
                            z: l.z * lt.b
                        }
                    }
                    var h = void 0;
                    if (s && (h = {
                        x: s.x,
                        y: s.y,
                        z: s.z
                    }),
                    i)
                        e.Sweep.moveTo(i, {
                            rotation: l
                        });
                    else {
                        if (!(a in n))
                            throw new Error("Unknown navigation link pose: " + JSON.stringify(t.link.navigationData));
                        e.Mode.moveTo(n[a], {
                            rotation: l,
                            position: h
                        })
                    }
                }
            }
            ,
            e
        }(i.Component);
        e.a = gt
    },
    323: function(t, e, n) {},
    324: function(t, e, n) {
        "use strict";
        var o, i = n(183), r = n(185), a = n(18), s = n(58), l = (o = Object.setPrototypeOf || {
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
            o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), c = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    fullscreen: !1
                },
                n.handleButtonClick = n.handleButtonClick.bind(n),
                n.onFullScreenChange = n.onFullScreenChange.bind(n),
                document.addEventListener("fullscreenchange", n.onFullScreenChange),
                document.addEventListener("webkitfullscreenchange", n.onFullScreenChange),
                document.addEventListener("MSFullscreenChange", n.onFullScreenChange),
                document.addEventListener("mozfullscreenchange", n.onFullScreenChange),
                n
            }
            return l(e, t),
            e.prototype.handleButtonClick = function() {
                a.g() ? (this.context.analytics.track("showcase_gui", {
                    gui_action: "click_exit_fullscreen",
                    interaction_source: "gui"
                }),
                a.c()) : (this.context.analytics.track("showcase_gui", {
                    gui_action: "click_enter_fullscreen",
                    interaction_source: "gui"
                }),
                a.l(document.body, !1))
            }
            ,
            e.prototype.onFullScreenChange = function() {
                this.setState({
                    fullscreen: a.g()
                })
            }
            ,
            e.prototype.render = function() {
                return Object(i.h)("div", {
                    id: "fullscreen-mode",
                    class: "right-row"
                }, Object(i.h)("div", {
                    type: "button",
                    "data-balloon": this.state.fullscreen ? this.context.locale.t(s.a.EXIT_FULLSCREEN) : this.context.locale.t(s.a.VIEW_FULLSCREEN),
                    "data-balloon-pos": "up-left",
                    class: r("fullscreen", "ui-icon"),
                    onClick: this.handleButtonClick
                }, Object(i.h)("span", {
                    class: r("icon", this.state.fullscreen ? "icon-fullscreen-exit" : "icon-fullscreen")
                })))
            }
            ,
            e
        }(i.Component);
        e.a = c
    },
    446: function(t, e, n) {},
    465: function(t, e, n) {},
    467: function(t, e, n) {}
}]);
