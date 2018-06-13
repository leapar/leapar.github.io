
(function () {
    function line (prefix, array, i, n) {
      for (var j = 0; j < n; ++j) prefix += array[i + j] + (j === n - 1 ? '' : ' ');
      return prefix + '\n';
    };
    function fLine (vertexIndices, normalIndices, textureIndices, i, texturesFlag) {
      var str = 'f ';
      // Faces are 1-indexed, hello Lua
      var va = vertexIndices[i] + 1;
      var vb = vertexIndices[i + 1] + 1;
      var vc = vertexIndices[i + 2] + 1;
      var na = normalIndices[i] + 1;
      var nb = normalIndices[i + 1] + 1;
      var nc = normalIndices[i + 2] + 1;
      var ta = textureIndices[i] + 1;
      var tb = textureIndices[i + 1] + 1;
      var tc = textureIndices[i + 2] + 1;
      str += va + '/' + (texturesFlag ? ta : '') + '/' + na + ' ';
      str += vb + '/' + (texturesFlag ? tb : '') + '/' + nb + ' ';
      return str + vc + '/' + (texturesFlag ? tc : '') + '/' + nc + '\n';
    };
    function toOBJ (vertices, normals, textures, vertexIndices, normalIndices, textureIndices) {
      normalIndices = normalIndices || vertexIndices;
      textureIndices = textureIndices || vertexIndices;
  
      var str = '# Created by array-to-wavefront-obj, a free and open source\n';
      str +=    '# OBJ serializer for JavaScript\n';
      var i = 0;
      for (; i < vertices.length; i += 3) {
        str += line('v ', vertices, i, 3);
      }
      for (i = 0; i < normals.length; i += 3) {
        str += line('vn ', normals, i, 3);
      }
      var hasTextures = textures && textures.length > 0;
      if (hasTextures) {
        for (i = 0; i < textures.length; i += 2) {
          str += line('vt ', textures, i, 2);
        }
      }
        for (i = 0; i < vertexIndices.length; i += 3) {
            str += fLine(vertexIndices, normalIndices, textureIndices, i, hasTextures);
        }
      return str;
    };
  
   /* if (module && module.exports) {
      module.exports = toOBJ;
    } else {
      window.toOBJ = toOBJ;
    }*/
    window.toOBJ = toOBJ;
  })();

  var treatVector2 = function treatVector2 (vector2, map, array, indices) {
    var key = vector2.x + ',' + vector2.y;

    if (!map.hasOwnProperty(key)) {
        array.push(vector2.x, vector2.y);
        map[key] = Math.round((array.length / 2) - 1);
    }

    indices.push(map[key]);
};

var treatVector3 = function treatVector3 (vector3, map, array, indices) {
    var key = vector3.x + ',' + vector3.y + ',' + vector3.z;

    if (!map.hasOwnProperty(key)) {
        array.push(vector3.x, vector3.y, vector3.z);
        map[key] = Math.round((array.length / 3) - 1);
    }

    indices.push(map[key]);
};

var treat2Values = function treat2Values (x, y, map, array, indices) {
    var key = x + ',' + y;

    if (!map.hasOwnProperty(key)) {
        array.push(x, y);
        map[key] = Math.round((array.length / 2) - 1);
    }

    indices.push(map[key]);
};

var treat3Values = function treat3Values (x, y, z, map, array, indices) {
    var key = x + ',' + y + ',' + z;

    if (!map.hasOwnProperty(key)) {
        array.push(x, y, z);
        map[key] = Math.round((array.length / 3) - 1);
    }

    indices.push(map[key]);
};

var generateCommentString = function generateCommentString (geometry) {
    var idStr = 'THREE.' + geometry.type;

    if (geometry.name) {
        idStr += ' named "' + geometry.name + '"'
    }

    return '# Converted from a ' + idStr + ' with three-geometry-to-obj\n';
};

var unfoldThreeGeometry = function unfoldThreeGeometry (geometry, options, vertices, normals, textures, vertexIndices, normalIndices, textureIndices) {
    var vertexMap = {},
        normalMap = {},
        textureMap = {},
        face,
        i;

    for (i = 0; i < geometry.faces.length; i++) {
        face = geometry.faces[i];

        treatVector3(geometry.vertices[face.a], vertexMap, vertices, vertexIndices);
        treatVector3(geometry.vertices[face.b], vertexMap, vertices, vertexIndices);
        treatVector3(geometry.vertices[face.c], vertexMap, vertices, vertexIndices);

        if (options.normalSource === 'face') {
            treatVector3(face.normal, normalMap, normals, normalIndices);
            treatVector3(face.normal, normalMap, normals, normalIndices);
            treatVector3(face.normal, normalMap, normals, normalIndices);
        } else {
            treatVector3(face.vertexNormals[0], normalMap, normals, normalIndices);
            treatVector3(face.vertexNormals[1], normalMap, normals, normalIndices);
            treatVector3(face.vertexNormals[2], normalMap, normals, normalIndices);
        }
    }

    if (geometry.faceVertexUvs.length && geometry.faceVertexUvs[0].length === geometry.faces.length) {
        for (i = 0; i < geometry.faceVertexUvs[0].length; i++) {
            treatVector2(geometry.faceVertexUvs[0][i][0], textureMap, textures, textureIndices);
            treatVector2(geometry.faceVertexUvs[0][i][1], textureMap, textures, textureIndices);
            treatVector2(geometry.faceVertexUvs[0][i][2], textureMap, textures, textureIndices);
        }
    }
};

var unfoldThreeBufferGeometry = function unfoldThreeBufferGeometry (geometry, options, vertices, normals, textures, vertexIndices, normalIndices, textureIndices) {
    var vertexMap = {},
        normalMap = {},
        textureMap = {},
        positionsAttr = geometry.attributes.position,
        normalsAttr = geometry.attributes.normal,
        uvsAttr = geometry.attributes.uv,
        i;

    for (i = 0; i < positionsAttr.count; i++) {
        treat3Values(positionsAttr.array[i * 3], positionsAttr.array[i * 3 + 1], positionsAttr.array[i * 3 + 2], vertexMap, vertices, vertexIndices);
        if(normalsAttr)
            treat3Values(normalsAttr.array[i * 3], normalsAttr.array[i * 3 + 1], normalsAttr.array[i * 3 + 2], normalMap, normals, normalIndices);
    }

    if (uvsAttr && uvsAttr.count === positionsAttr.count) {
        for (i = 0; i < uvsAttr.count; i++) {
            treat2Values(uvsAttr.array[i * 2], uvsAttr.array[i * 2 + 1], textureMap, textures, textureIndices);
        }
    }
};

/*module.exports = */function threeGeometryToObj (geometry, options) {
    var vertices = [],
        normals = [],
        textures = [],
        vertexIndices = [],
        normalIndices = [],
        textureIndices = [];

    options = options || {};

    if (geometry.type === 'BufferGeometry') {
        unfoldThreeBufferGeometry(geometry, options, vertices, normals, textures, vertexIndices, normalIndices, textureIndices)
    } else {
        unfoldThreeGeometry(geometry, options, vertices, normals, textures, vertexIndices, normalIndices, textureIndices);
    }

    return generateCommentString(geometry) + toOBJ(vertices, normals, textures, vertexIndices, normalIndices, textureIndices);
};

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, setImmediate = view.setImmediate || view.setTimeout
		, throw_outside = function(ex) {
			setImmediate(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setImmediate(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				}, 0);
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;

	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	// todo: detect chrome extensions & packaged apps
	//save_link.target = "_blank";

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this
));


!function() {
    "use strict";
    function t(t, i) {
        return typeof t === i
    }
    function i(t, i) {
        return t instanceof i
    }
    function n(t) {
        return t && t.nodeType
    }
    function e(t) {
        return n(t) ? t : i(t, g) ? t[0] : void 0
    }
    function o(t, i, n) {
        return g.each(t, function(t, e) {
            n = i.call(e, n, t, e)
        }),
        n
    }
    function r(t, i, n) {
        var e, o, r;
        if (t === i)
            return true;
        if (!t || !i || t.constructor !== i.constructor)
            return false;
        for (e = 0,
        o = n.length; o > e; e += 1) {
            if (r = n[e],
            t[r] && y(t[r].equals) && !t[r].equals(i[r]))
                return false;
            if (t[r] !== i[r])
                return false
        }
        return true
    }
    function s(t, i, n, e) {
        this.left = E(t),
        this.top = E(i),
        this.width = E(n),
        this.height = E(e),
        this.right = this.left + this.width,
        this.bottom = this.top + this.height
    }
    function h(t, i, n, e) {
        this.visible = t || 0,
        this.viewport = i || 0,
        this.possible = n || 0,
        this.rects = e && T({}, e) || null
    }
    function l(t, i) {
        this.els = t,
        this.viewport = i
    }
    function c(t, i, n) {
        var e;
        return g.inArray(n, q) >= 0 ? e = s.ofElement(t) : g.inArray(n, S) >= 0 && (e = h.of(t, i)),
        e ? e[n] : 0
    }
    function u(t, i) {
        return t.val - i.val
    }
    function a(t, i) {
        return i.val - t.val
    }
    function f(t) {
        var i = s.ofContent(t, true)
          , n = s.ofViewport(t, true)
          , e = i.width - n.width
          , o = i.height - n.height;
        this.content = i,
        this.viewport = n,
        this.width = 0 >= e ? null : n.left / e,
        this.height = 0 >= o ? null : n.top / o,
        this.left = n.left,
        this.top = n.top,
        this.right = i.right - n.right,
        this.bottom = i.bottom - n.bottom
    }
    function p(t) {
        this.el = t || window
    }
    function d(t, i) {
        this.context = t,
        this.viewport = i,
        this.init()
    }
    function v(t, i, n, e) {
        this.context = new l(t,i),
        this.property = n,
        this.descending = e,
        this.init()
    }
    function w(t) {
        t && t !== window && t !== document ? (this.context = t,
        this.$autoTarget = g(t)) : this.context = window,
        this.init()
    }
    var g = jQuery
      , m = g(window)
      , b = g(document)
      , T = g.extend
      , y = g.isFunction
      , k = Math.max
      , V = Math.min
      , E = Math.round
      , x = function() {
        var t = {}
          , i = 1;
        return function(n) {
            return n ? (t[n] || (t[n] = i,
            i += 1),
            t[n]) : 0
        }
    }();
    T(s.prototype, {
        equals: function(t) {
            return r(this, t, ["left", "top", "width", "height"])
        },
        area: function() {
            return this.width * this.height
        },
        relativeTo: function(t) {
            return new s(this.left - t.left,this.top - t.top,this.width,this.height)
        },
        intersection: function(t) {
            if (!i(t, s))
                return null;
            var n = k(this.left, t.left)
              , e = V(this.right, t.right)
              , o = k(this.top, t.top)
              , r = V(this.bottom, t.bottom)
              , h = e - n
              , l = r - o;
            return h >= 0 && l >= 0 ? new s(n,o,h,l) : null
        },
        envelope: function(t) {
            if (!i(t, s))
                return this;
            var n = V(this.left, t.left)
              , e = k(this.right, t.right)
              , o = V(this.top, t.top)
              , r = k(this.bottom, t.bottom)
              , h = e - n
              , l = r - o;
            return new s(n,o,h,l)
        }
    }),
    T(s, {
        ofContent: function(t, i) {
            return t && t !== document && t !== window ? i ? new s(0,0,t.scrollWidth,t.scrollHeight) : new s(t.offsetLeft - t.scrollLeft,t.offsetTop - t.scrollTop,t.scrollWidth,t.scrollHeight) : new s(0,0,b.width(),b.height())
        },
        ofViewport: function(t, i) {
            return t && t !== document && t !== window ? i ? new s(t.scrollLeft,t.scrollTop,t.clientWidth,t.clientHeight) : new s(t.offsetLeft,t.offsetTop,t.clientWidth,t.clientHeight) : new s(m.scrollLeft(),m.scrollTop(),m.width(),m.height())
        },
        ofElement: function(t) {
            var i = g(t);
            if (!i.is(":visible"))
                return null;
            var n = i.offset();
            return new s(n.left,n.top,i.outerWidth(),i.outerHeight())
        }
    }),
    T(h.prototype, {
        equals: function(t) {
            return this.fracsEqual(t) && this.rectsEqual(t)
        },
        fracsEqual: function(t) {
            return r(this, t, ["visible", "viewport", "possible"])
        },
        rectsEqual: function(t) {
            return r(this.rects, t.rects, ["document", "element", "viewport"])
        }
    }),
    T(h, {
        of: function(t, i) {
            var e, o, r;
            return t = n(t) && s.ofElement(t) || t,
            i = n(i) && s.ofViewport(i) || i || s.ofViewport(),
            t instanceof s && (e = t.intersection(i)) ? (o = e.area(),
            r = V(t.width, i.width) * V(t.height, i.height),
            new h(o / t.area(),o / i.area(),o / r,{
                document: e,
                element: e.relativeTo(t),
                viewport: e.relativeTo(i)
            })) : new h
        }
    });
    var q = ["width", "height", "left", "right", "top", "bottom"]
      , S = ["possible", "visible", "viewport"];
    T(l.prototype, {
        sorted: function(t, i) {
            var n = this.viewport;
            return g.map(this.els, function(i) {
                return {
                    el: i,
                    val: c(i, n, t)
                }
            }).sort(i ? a : u)
        },
        best: function(t, i) {
            return this.els.length ? this.sorted(t, i)[0] : null
        }
    }),
    T(f.prototype, {
        equals: function(t) {
            return r(this, t, ["width", "height", "left", "top", "right", "bottom", "content", "viewport"])
        }
    }),
    T(p.prototype, {
        equals: function(t) {
            return r(this, t, ["el"])
        },
        scrollState: function() {
            return new f(this.el)
        },
        scrollTo: function(t, i, n) {
            var e = g(this.el === window ? "html,body" : this.el);
            t = t || 0,
            i = i || 0,
            n = isNaN(n) ? 1e3 : n,
            e.stop(true).animate({
                scrollLeft: t,
                scrollTop: i
            }, n)
        },
        scroll: function(t, i, n) {
            var e = this.el === window ? m : g(this.el);
            t = t || 0,
            i = i || 0,
            this.scrollTo(e.scrollLeft() + t, e.scrollTop() + i, n)
        },
        scrollToRect: function(t, i, n, e) {
            i = i || 0,
            n = n || 0,
            this.scrollTo(t.left - i, t.top - n, e)
        },
        scrollToElement: function(t, i, n, e) {
            var o = s.ofElement(t).relativeTo(s.ofContent(this.el));
            this.scrollToRect(o, i, n, e)
        }
    });
    var C = {
        init: function() {
            this.callbacks = g.Callbacks("memory unique"),
            this.currVal = null,
            this.prevVal = null,
            this.checkProxy = g.proxy(this.check, this),
            this.autoCheck()
        },
        bind: function(t) {
            this.callbacks.add(t)
        },
        unbind: function(t) {
            t ? this.callbacks.remove(t) : this.callbacks.empty()
        },
        trigger: function() {
            this.callbacks.fireWith(this.context, [this.currVal, this.prevVal])
        },
        check: function(t) {
            var i = this.updatedValue(t);
            return void 0 !== i && (this.prevVal = this.currVal,
            this.currVal = i,
            this.trigger(),
            true)
        },
        $autoTarget: m,
        autoEvents: "load resize scroll",
        autoCheck: function(t) {
            this.$autoTarget[t === false ? "off" : "on"](this.autoEvents, this.checkProxy)
        }
    };
    T(d.prototype, C, {
        updatedValue: function() {
            var t = h.of(this.context, this.viewport);
            return this.currVal && this.currVal.equals(t) ? void 0 : t
        }
    }),
    T(v.prototype, C, {
        updatedValue: function() {
            var t = this.context.best(this.property, this.descending);
            return t && (t = t.val > 0 ? t.el : null,
            this.currVal !== t) ? t : void 0
        }
    }),
    T(w.prototype, C, {
        updatedValue: function() {
            var t = new f(this.context);
            return this.currVal && this.currVal.equals(t) ? void 0 : t
        }
    });
    var L = function(t, i) {
        var n = [].slice
          , e = jQuery
          , o = e.extend
          , r = e.isFunction
          , s = o({}, i)
          , h = function(i, n, o, s) {
            return o = r(o) ? o.apply(i, n) : o,
            r(s[o]) ? s[o].apply(i, n) : void e.error('Method "' + o + '" does not exist on jQuery.' + t)
        }
          , l = function() {
            return h(this, n.call(arguments), s.defaultStatic, l)
        }
          , c = function(t) {
            return r(c[t]) ? c[t].apply(this, n.call(arguments, 1)) : h(this, n.call(arguments), s.defaultMethod, c)
        }
          , u = function(t) {
            t && (o(l, t.statics),
            o(c, t.methods)),
            l.modplug = u
        };
        u.prev = {
            statics: e[t],
            methods: e.fn[t]
        },
        u(i),
        e[t] = l,
        e.fn[t] = c
    }
      , M = "fracs";
    L(M, {
        statics: {
            version: "0.15.0",
            Rect: s,
            Fractions: h,
            Group: l,
            ScrollState: f,
            Viewport: p,
            FracsCallbacks: d,
            GroupCallbacks: v,
            ScrollStateCallbacks: w,
            fracs: function(t, i) {
                return h.of(t, i)
            }
        },
        methods: {
            content: function(t) {
                return this.length ? s.ofContent(this[0], t) : null
            },
            envelope: function() {
                return o(this, function(t) {
                    var i = s.ofElement(this);
                    return t ? t.envelope(i) : i
                })
            },
            fracs: function(i, n, o) {
                t(i, "string") || (o = n,
                n = i,
                i = null),
                y(n) || (o = n,
                n = null),
                o = e(o);
                var r = M + ".fracs." + x(o);
                return "unbind" === i ? this.each(function() {
                    var t = g(this).data(r);
                    t && t.unbind(n)
                }) : "check" === i ? this.each(function() {
                    var t = g(this).data(r);
                    t && t.check()
                }) : y(n) ? this.each(function() {
                    var t = g(this)
                      , i = t.data(r);
                    i || (i = new d(this,o),
                    t.data(r, i)),
                    i.bind(n)
                }) : this.length ? h.of(this[0], o) : null
            },
            intersection: function() {
                return o(this, function(t) {
                    var i = s.ofElement(this);
                    return t ? t.intersection(i) : i
                })
            },
            max: function(t, i, n) {
                return y(i) || (n = i,
                i = null),
                n = e(n),
                i ? (new v(this,n,t,true).bind(i),
                this) : this.pushStack(new l(this,n).best(t, true).el)
            },
            min: function(t, i, n) {
                return y(i) || (n = i,
                i = null),
                n = e(n),
                i ? (new v(this,n,t).bind(i),
                this) : this.pushStack(new l(this,n).best(t).el)
            },
            rect: function() {
                return this.length ? s.ofElement(this[0]) : null
            },
            scrollState: function(i, n) {
                var e = M + ".scrollState";
                return t(i, "string") || (n = i,
                i = null),
                "unbind" === i ? this.each(function() {
                    var t = g(this).data(e);
                    t && t.unbind(n)
                }) : "check" === i ? this.each(function() {
                    var t = g(this).data(e);
                    t && t.check()
                }) : y(n) ? this.each(function() {
                    var t = g(this)
                      , i = t.data(e);
                    i || (i = new w(this),
                    t.data(e, i)),
                    i.bind(n)
                }) : this.length ? new f(this[0]) : null
            },
            scroll: function(t, i, n) {
                return this.each(function() {
                    new p(this).scroll(t, i, n)
                })
            },
            scrollTo: function(t, i, n, o) {
                return g.isNumeric(t) && (o = n,
                n = i,
                i = t,
                t = null),
                t = e(t),
                this.each(function() {
                    t ? new p(this).scrollToElement(t, i, n, o) : new p(this).scrollTo(i, n, o)
                })
            },
            scrollToThis: function(t, i, n, o) {
                return o = new p(e(o)),
                o.scrollToElement(this[0], t, i, n),
                this
            },
            softLink: function(t, i, n, o) {
                return o = new p(e(o)),
                this.filter("a[href^=#]").each(function() {
                    var e = g(this);
                    e.on("click", function() {
                        o.scrollToElement(g(e.attr("href"))[0], t, i, n)
                    })
                })
            },
            sort: function(i, n, o) {
                return t(n, "boolean") || (o = n,
                n = null),
                o = e(o),
                this.pushStack(g.map(new l(this,o).sorted(i, !n), function(t) {
                    return t.el
                }))
            },
            viewport: function(t) {
                return this.length ? s.ofViewport(this[0], t) : null
            }
        },
        defaultStatic: "fracs",
        defaultMethod: "fracs"
    })
}();
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.tooltip")
              , n = "object" == typeof e && e;
            (s || "destroy" != e) && (s || o.data("bs.tooltip", s = new i(this,n)),
            "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", t, e)
    };
    i.VERSION = "3.2.0",
    i.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    i.prototype.init = function(e, i, o) {
        this.enabled = true,
        this.type = e,
        this.$element = t(i),
        this.options = this.getOptions(o),
        this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var s = this.options.trigger.split(" "), n = s.length; n--; ) {
            var r = s[n];
            if ("click" == r)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin"
                  , l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }
    ,
    i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    i.prototype.getDelegateOptions = function() {
        var e = {}
          , i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }),
        e
    }
    ,
    i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i)),
        clearTimeout(i.timeout),
        i.hoverState = "in",
        i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }
    ,
    i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i)),
        clearTimeout(i.timeout),
        i.hoverState = "out",
        i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }
    ,
    i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)
                return;
            var o = this
              , s = this.tip()
              , n = this.getUID(this.type);
            this.setContent(),
            s.attr("id", n),
            this.$element.attr("aria-describedby", n),
            this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement
              , a = /\s?auto?\s?/i
              , l = a.test(r);
            l && (r = r.replace(a, "") || "top"),
            s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this),
            this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var p = this.getPosition()
              , h = s[0].offsetWidth
              , f = s[0].offsetHeight;
            if (l) {
                var u = r
                  , c = this.$element.parent()
                  , d = this.getPosition(c);
                r = "bottom" == r && p.top + p.height + f - d.scroll > d.height ? "top" : "top" == r && p.top - d.scroll - f < 0 ? "bottom" : "right" == r && p.right + h > d.width ? "left" : "left" == r && p.left - h < d.left ? "right" : r,
                s.removeClass(u).addClass(r)
            }
            var g = this.getCalculatedOffset(r, p, h, f);
            this.applyPlacement(g, r);
            var y = function() {
                o.$element.trigger("shown.bs." + o.type),
                o.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", y).emulateTransitionEnd(150) : y()
        }
    }
    ,
    i.prototype.applyPlacement = function(e, i) {
        var o = this.tip()
          , s = o[0].offsetWidth
          , n = o[0].offsetHeight
          , r = parseInt(o.css("margin-top"), 10)
          , a = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0),
        isNaN(a) && (a = 0),
        e.top = e.top + r,
        e.left = e.left + a,
        t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        o.addClass("in");
        var l = o[0].offsetWidth
          , p = o[0].offsetHeight;
        "top" == i && p != n && (e.top = e.top + n - p);
        var h = this.getViewportAdjustedDelta(i, e, l, p);
        h.left ? e.left += h.left : e.top += h.top;
        var f = h.left ? 2 * h.left - s + l : 2 * h.top - n + p
          , u = h.left ? "left" : "top"
          , c = h.left ? "offsetWidth" : "offsetHeight";
        o.offset(e),
        this.replaceArrow(f, o[0][c], u)
    }
    ,
    i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }
    ,
    i.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    i.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && o.detach(),
            i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this
          , o = this.tip()
          , s = t.Event("hide.bs." + this.type);
        if (this.$element.removeAttr("aria-describedby"),
        this.$element.trigger(s),
        !s.isDefaultPrevented())
            return o.removeClass("in"),
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(),
            this.hoverState = null,
            this
    }
    ,
    i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    i.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0]
          , o = "BODY" == i.tagName;
        return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
            scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: o ? t(window).width() : e.outerWidth(),
            height: o ? t(window).height() : e.outerHeight()
        }, o ? {
            top: 0,
            left: 0
        } : e.offset())
    }
    ,
    i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }
    ,
    i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return s;
        var n = this.options.viewport && this.options.viewport.padding || 0
          , r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - n - r.scroll
              , l = e.top + n - r.scroll + o;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var p = e.left - n
              , h = e.left + n + i;
            p < r.left ? s.left = r.left - p : h > r.width && (s.left = r.left + r.width - h)
        }
        return s
    }
    ,
    i.prototype.getTitle = function() {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }
    ,
    i.prototype.getUID = function(t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));return t
    }
    ,
    i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }
    ,
    i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    i.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(),
        this.$element = null,
        this.options = null)
    }
    ,
    i.prototype.enable = function() {
        this.enabled = true
    }
    ,
    i.prototype.disable = function() {
        this.enabled = false
    }
    ,
    i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type),
        i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i))),
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }
    ,
    i.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    }
    ;
    var o = t.fn.tooltip;
    t.fn.tooltip = e,
    t.fn.tooltip.Constructor = i,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o,
        this
    }
}(jQuery);
!function(e, t, n) {
    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t[e] = n()
}("Keen", this, function() {
    "use strict";
    function Keen() {
        return _init.apply(this, arguments)
    }
    function _init(e) {
        if (_isUndefined(e))
            throw new Error("Check out our JavaScript SDK Usage Guide: https://keen.io/docs/clients/javascript/usage-guide/");
        if (_isUndefined(e.projectId) || "String" !== _type(e.projectId) || e.projectId.length < 1)
            throw new Error("Please provide a projectId");
        this.configure(e)
    }
    function _extend(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t])
                e[n] = arguments[t][n];
        return e
    }
    function _isUndefined(e) {
        return void 0 === e
    }
    function _type(e) {
        var t = e && e.constructor ? e.constructor.toString() : void 0;
        return t ? t.match(/function (.*)\(/)[1] : "Null"
    }
    function _each(e, t, n) {
        var r;
        if (!e)
            return 0;
        if (n = n ? n : e,
        "array" === _type(e)) {
            for (r = 0; r < e.length; r++)
                if (t.call(n, e[r], r, e) === false)
                    return 0
        } else
            for (r in e)
                if (e.hasOwnProperty(r) && t.call(n, e[r], r, e) === false)
                    return 0;
        return 1
    }
    function _parse_params(e) {
        for (var t, n = {}, r = /\+/g, i = /([^&=]+)=?([^&]*)/g, o = function(e) {
            return decodeURIComponent(e.replace(r, " "))
        }, a = e.split("?")[1]; t = i.exec(a); )
            n[o(t[1])] = o(t[2]);
        return n
    }
    function _set_protocol(e) {
        switch (e) {
        case "http":
            return "http";
        case "auto":
            return location.protocol.replace(/:/g, "");
        case "https":
        case void 0:
        default:
            return "https"
        }
    }
    function _set_request_type(e) {
        var t = e || "jsonp"
          , n = false;
        return ("Object" === _type(XMLHttpRequest) || "Function" === _type(XMLHttpRequest)) && "withCredentials"in new XMLHttpRequest && (n = true),
        null == t || "xhr" == t ? n ? "xhr" : "jsonp" : t
    }
    function _build_url(e) {
        return this.client.endpoint + "/projects/" + this.client.projectId + e
    }
    function _uploadEvent(e, t, n, r, i) {
        var o = _build_url.apply(this, ["/events/" + e])
          , a = {};
        n = n !== false,
        this.client.globalProperties && (a = this.client.globalProperties(e));
        for (var c in t)
            t.hasOwnProperty(c) && (a[c] = t[c]);
        switch (this.client.requestType) {
        case "xhr":
            _request.xhr.apply(this, ["POST", o, null, a, this.client.writeKey, n, r, i]);
            break;
        case "jsonp":
            var s = JSON.stringify(a)
              , l = Keen.Base64.encode(s);
            o = o + "?api_key=" + this.client.writeKey,
            o = o + "&data=" + l,
            o = o + "&modified=" + (new Date).getTime(),
            _request.jsonp.apply(this, [o, this.client.writeKey, r, i]);
            break;
        case "beacon":
            var s = JSON.stringify(a)
              , l = Keen.Base64.encode(s);
            o = o + "?api_key=" + encodeURIComponent(this.client.writeKey),
            o = o + "&data=" + encodeURIComponent(l),
            o = o + "&modified=" + encodeURIComponent((new Date).getTime()),
            o += "&c=clv1",
            _request.beacon.apply(this, [o, null, r, i])
        }
    }
    Keen.prototype.configure = function(e) {
        return e.host = _isUndefined(e.host) ? "api.keen.io/3.0" : e.host.replace(/.*?:\/\//g, ""),
        e.protocol = _set_protocol(e.protocol),
        e.requestType = _set_request_type(e.requestType),
        this.client = {
            projectId: e.projectId,
            writeKey: e.writeKey,
            readKey: e.readKey,
            globalProperties: null,
            endpoint: e.protocol + "://" + e.host,
            requestType: e.requestType
        },
        Keen.trigger("client", this, e),
        this.trigger("ready"),
        this
    }
    ;
    var _request = {
        xhr: function(e, t, n, r, i, o, a, c) {
            if (!i)
                return Keen.log("Please provide a writeKey for https://keen.io/project/" + this.client.projectId);
            var s = new XMLHttpRequest;
            if (s.onreadystatechange = function() {
                if (4 == s.readyState)
                    if (s.status >= 200 && s.status < 300) {
                        var e;
                        try {
                            e = JSON.parse(s.responseText)
                        } catch (e) {
                            Keen.log("Could not JSON parse HTTP response: " + s.responseText),
                            c && c(s, e)
                        }
                        a && e && a(e)
                    } else
                        Keen.log("HTTP request failed."),
                        c && c(s, null)
            }
            ,
            s.open(e, t, o),
            i && s.setRequestHeader("Authorization", i),
            r && s.setRequestHeader("Content-Type", "application/json"),
            n)
                for (var l in n)
                    n.hasOwnProperty(l) && s.setRequestHeader(l, n[l]);
            var u = r ? JSON.stringify(r) : null;
            s.send(u)
        },
        jsonp: function(e, t, n, r) {
            if (!t)
                return Keen.log("Please provide a writeKey for https://keen.io/project/" + this.client.projectId);
            if (t && e.indexOf("api_key") < 0) {
                var i = e.indexOf("?") > 0 ? "&" : "?";
                e = e + i + "api_key=" + t
            }
            for (var o = "keenJSONPCallback" + (new Date).getTime(); o in window; )
                o += "a";
            var a = false;
            window[o] = function(e) {
                a = true,
                n && e && n(e),
                window[o] = void 0
            }
            ,
            e = e + "&jsonp=" + o;
            var c = document.createElement("script");
            c.id = "keen-jsonp",
            c.src = e,
            document.getElementsByTagName("head")[0].appendChild(c),
            c.onreadystatechange = function() {
                a === false && "loaded" === this.readyState && (a = true,
                r && r())
            }
            ,
            c.onerror = function() {
                a === false && (a = true,
                r && r())
            }
        },
        beacon: function(e, t, n, r) {
            if (t && e.indexOf("api_key") < 0) {
                var i = e.indexOf("?") > 0 ? "&" : "?";
                e = e + i + "api_key=" + t
            }
            var o = false
              , a = document.createElement("img");
            a.onload = function() {
                if (o = true,
                "naturalHeight"in this) {
                    if (this.naturalHeight + this.naturalWidth === 0)
                        return void this.onerror()
                } else if (this.width + this.height === 0)
                    return void this.onerror();
                n && n({
                    created: true
                })
            }
            ,
            a.onerror = function() {
                o = true,
                r && r()
            }
            ,
            a.src = e
        }
    }
      , Events = Keen.Events = {
        on: function(e, t) {
            this.listeners || (this.listeners = {});
            var n = this.listeners[e] || (this.listeners[e] = []);
            return n.push({
                callback: t
            }),
            this
        },
        off: function(e, t) {
            if (!e && !t)
                return this.listeners = void 0,
                delete this.listeners,
                this;
            for (var n = this.listeners[e] || [], r = n.length; r--; )
                t && t == n[r].callback && this.listeners[e].splice(r, 1),
                t && 0 != n.length || (this.listeners[e] = void 0,
                delete this.listeners[e]);
            return this
        },
        trigger: function(e) {
            if (!this.listeners)
                return this;
            for (var t = Array.prototype.slice.call(arguments, 1), n = this.listeners[e] || [], r = 0; r < n.length; r++)
                n[r].callback.apply(this, t);
            return this
        }
    };
    _extend(Keen.prototype, Events),
    _extend(Keen, Events),
    Keen.loaded = true,
    Keen.utils = {
        each: _each,
        extend: _extend,
        parseParams: _parse_params
    },
    Keen.ready = function(e) {
        Keen.loaded ? e() : Keen.on("ready", e)
    }
    ,
    Keen.log = function(e) {
        "object" == typeof console && console.log("[Keen IO]", e)
    }
    ;
    var Plugins = Keen.Plugins = {};
    Keen.prototype.addEvent = function() {
        _uploadEvent.apply(this, arguments)
    }
    ,
    Keen.prototype.addEventSync = function(e, t, n, r) {
        _uploadEvent.apply(this, [e, t, false, n, r])
    }
    ,
    Keen.prototype.trackExternalLink = function(e, t, n, r, i) {
        var o = e
          , a = o.metaKey
          , c = o.target
          , s = false
          , l = function() {};
        return void 0 === r && (r = 500),
        "A" === c.nodeName ? l = function() {
            a || s || (s = true,
            window.location = c.href)
        }
        : "FORM" === c.nodeName && (l = function() {
            s || (s = true,
            c.submit())
        }
        ),
        i && (l = function() {
            s || (s = true,
            i())
        }
        ),
        _uploadEvent.call(this, t, n, l, l),
        setTimeout(function() {
            l()
        }, r),
        !!a && void 0
    }
    ,
    Keen.prototype.setGlobalProperties = function(e) {
        if (!this.client)
            return Keen.log("Check out our JavaScript SDK Usage Guide: https://keen.io/docs/clients/javascript/usage-guide/");
        if (!e || "function" != typeof e)
            throw new Error("Invalid value for global properties: " + e);
        this.client.globalProperties = e
    }
    ,
    Keen.Base64 = {
        map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            var t, n, r, i, o, a, c, s = "", l = 0, u = this.map;
            for (e = this.utf8.encode(e); l < e.length; )
                t = e.charCodeAt(l++),
                n = e.charCodeAt(l++),
                r = e.charCodeAt(l++),
                i = t >> 2,
                o = (3 & t) << 4 | n >> 4,
                a = isNaN(n) ? 64 : (15 & n) << 2 | r >> 6,
                c = isNaN(n) || isNaN(r) ? 64 : 63 & r,
                s = s + u.charAt(i) + u.charAt(o) + u.charAt(a) + u.charAt(c);
            return s
        },
        decode: function(e) {
            var t, n, r, i, o, a, c, s = "", l = 0, u = this.map, f = String.fromCharCode;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length; )
                t = u.indexOf(e.charAt(l++)),
                n = u.indexOf(e.charAt(l++)),
                r = u.indexOf(e.charAt(l++)),
                i = u.indexOf(e.charAt(l++)),
                o = t << 2 | n >> 4,
                a = (15 & n) << 4 | r >> 2,
                c = (3 & r) << 6 | i,
                s = s + (f(o) + (64 != r ? f(a) : "")) + (64 != i ? f(c) : "");
            return this.utf8.decode(s)
        },
        utf8: {
            encode: function(e) {
                for (var t, n = "", r = 0, i = String.fromCharCode; r < e.length; )
                    t = e.charCodeAt(r++),
                    n += 128 > t ? i(t) : t > 127 && 2048 > t ? i(t >> 6 | 192) + i(63 & t | 128) : i(t >> 12 | 224) + i(t >> 6 & 63 | 128) + i(63 & t | 128);
                return n
            },
            decode: function(e) {
                for (var t, n, r = "", i = 0, o = String.fromCharCode; i < e.length; )
                    n = e.charCodeAt(i),
                    r += 128 > n ? [o(n), i++][0] : n > 191 && 224 > n ? [o((31 & n) << 6 | 63 & (t = e.charCodeAt(i + 1))), i += 2][0] : [o((15 & n) << 12 | (63 & (t = e.charCodeAt(i + 1))) << 6 | 63 & (c3 = e.charCodeAt(i + 2))), i += 3][0];
                return r
            }
        }
    },
    "object" != typeof JSON && (JSON = {}),
    function() {
        function f(e) {
            return 10 > e ? "0" + e : e
        }
        function quote(e) {
            return escapable.lastIndex = 0,
            escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function str(e, t) {
            var n, r, i, o, a, c = gap, s = t[e];
            switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(e)),
            "function" == typeof rep && (s = rep.call(t, e, s)),
            typeof s) {
            case "string":
                return quote(s);
            case "number":
                return isFinite(s) ? String(s) : "null";
            case "boolean":
            case "null":
                return String(s);
            case "object":
                if (!s)
                    return "null";
                if (gap += indent,
                a = [],
                "[object Array]" === Object.prototype.toString.apply(s)) {
                    for (o = s.length,
                    n = 0; o > n; n += 1)
                        a[n] = str(n, s) || "null";
                    return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + c + "]" : "[" + a.join(",") + "]",
                    gap = c,
                    i
                }
                if (rep && "object" == typeof rep)
                    for (o = rep.length,
                    n = 0; o > n; n += 1)
                        "string" == typeof rep[n] && (r = rep[n],
                        i = str(r, s),
                        i && a.push(quote(r) + (gap ? ": " : ":") + i));
                else
                    for (r in s)
                        Object.prototype.hasOwnProperty.call(s, r) && (i = str(r, s),
                        i && a.push(quote(r) + (gap ? ": " : ":") + i));
                return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + c + "}" : "{" + a.join(",") + "}",
                gap = c,
                i
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ,
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
        );
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var r;
            if (gap = "",
            indent = "",
            "number" == typeof n)
                for (r = 0; n > r; r += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if (rep = t,
            t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n),
                        void 0 !== r ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            if (text = String(text),
            cx.lastIndex = 0,
            cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })),
            /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
        )
    }(),
    !function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t[e] = n()
    }("domready", Keen.utils, function(e) {
        function t(e) {
            for (d = 1; e = r.shift(); )
                e()
        }
        var n, r = [], i = false, o = document, a = o.documentElement, c = a.doScroll, s = "DOMContentLoaded", l = "addEventListener", u = "onreadystatechange", f = "readyState", p = c ? /^loaded|^c/ : /^loaded|c/, d = p.test(o[f]);
        return o[l] && o[l](s, n = function() {
            o.removeEventListener(s, n, i),
            t()
        }
        , i),
        c && o.attachEvent(u, n = function() {
            /^c/.test(o[f]) && (o.detachEvent(u, n),
            t())
        }
        ),
        e = c ? function(t) {
            self != top ? d ? t() : r.push(t) : function() {
                try {
                    a.doScroll("left")
                } catch (n) {
                    return setTimeout(function() {
                        e(t)
                    }, 50)
                }
                t()
            }()
        }
        : function(e) {
            d ? e() : r.push(e)
        }
    });
    var loaded = window.Keen, cached = window._Keen || {}, clients, ready;
    if (loaded && cached) {
        clients = cached.clients || {},
        ready = cached.ready || [];
        for (var instance in clients)
            if (clients.hasOwnProperty(instance)) {
                var client = clients[instance];
                for (var method in Keen.prototype)
                    Keen.prototype.hasOwnProperty(method) && (loaded.prototype[method] = Keen.prototype[method]);
                if (loaded.Query = Keen.Query ? Keen.Query : function() {}
                ,
                loaded.Visualization = Keen.Visualization ? Keen.Visualization : function() {}
                ,
                client._config && (client.configure.call(client, client._config),
                delete client._config),
                client._setGlobalProperties) {
                    for (var globals = client._setGlobalProperties, i = 0; i < globals.length; i++)
                        client.setGlobalProperties.apply(client, globals[i]);
                    delete client._setGlobalProperties
                }
                if (client._addEvent) {
                    for (var queue = client._addEvent || [], i = 0; i < queue.length; i++)
                        client.addEvent.apply(client, queue[i]);
                    delete client._addEvent
                }
                var callback = client._on || [];
                if (client._on) {
                    for (var i = 0; i < callback.length; i++)
                        client.on.apply(client, callback[i]);
                    client.trigger("ready"),
                    delete client._on
                }
            }
        for (var i = 0; i < ready.length; i++) {
            var callback = ready[i];
            Keen.on("ready", function() {
                callback()
            })
        }
    }
    return Keen.loaded && setTimeout(function() {
        Keen.utils.domready(function() {
            Keen.trigger("ready")
        })
    }, 0),
    Keen
});
!function() {
    var t = window.analytics = window.analytics || [];
    if (!t.initialize) {
        if (t.invoked)
            return void (window.console && console.error && console.error("Segment snippet included twice."));
        t.invoked = true,
        t.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"],
        t.factory = function(e) {
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e),
                t.push(n),
                t
            }
        }
        ;
        for (var e = 0; e < t.methods.length; e++) {
            var n = t.methods[e];
            t[n] = t.factory(n)
        }
        t.load = function(t) {
            var e = document.createElement("script");
            e.type = "text/javascript",
            e.async = true,
            e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(e, n)
        }
        ,
        t.SNIPPET_VERSION = "4.0.0"
    }
}();
!function(i, e) {
    "use strict";
    var s = ""
      , r = "?"
      , o = "function"
      , a = "undefined"
      , n = "object"
      , t = "major"
      , d = "model"
      , w = "name"
      , l = "type"
      , p = "vendor"
      , m = "version"
      , c = "architecture"
      , u = "console"
      , g = "mobile"
      , f = "tablet"
      , h = "smarttv"
      , b = {
        has: function(i, e) {
            return e.toLowerCase().indexOf(i.toLowerCase()) !== -1
        },
        lowerize: function(i) {
            return i.toLowerCase()
        }
    }
      , y = {
        rgx: function() {
            for (var i, s, r, t, d, w, l, p = 0, m = arguments; p < m.length; p += 2) {
                var c = m[p]
                  , u = m[p + 1];
                if (typeof i === a) {
                    i = {};
                    for (t in u)
                        d = u[t],
                        typeof d === n ? i[d[0]] = e : i[d] = e
                }
                for (s = r = 0; s < c.length; s++)
                    if (w = c[s].exec(this.getUA())) {
                        for (t = 0; t < u.length; t++)
                            l = w[++r],
                            d = u[t],
                            typeof d === n && d.length > 0 ? 2 == d.length ? typeof d[1] == o ? i[d[0]] = d[1].call(this, l) : i[d[0]] = d[1] : 3 == d.length ? typeof d[1] !== o || d[1].exec && d[1].test ? i[d[0]] = l ? l.replace(d[1], d[2]) : e : i[d[0]] = l ? d[1].call(this, l, d[2]) : e : 4 == d.length && (i[d[0]] = l ? d[3].call(this, l.replace(d[1], d[2])) : e) : i[d] = l ? l : e;
                        break
                    }
                if (w)
                    break
            }
            return i
        },
        str: function(i, s) {
            for (var o in s)
                if (typeof s[o] === n && s[o].length > 0) {
                    for (var a = 0; a < s[o].length; a++)
                        if (b.has(s[o][a], i))
                            return o === r ? e : o
                } else if (b.has(s[o], i))
                    return o === r ? e : o;
            return i
        }
    }
      , v = {
        browser: {
            oldsafari: {
                major: {
                    1: ["/8", "/1", "/3"],
                    2: "/4",
                    "?": "/"
                },
                version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            sprint: {
                model: {
                    "Evo Shift 4G": "7373KT"
                },
                vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                }
            }
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    RT: "ARM"
                }
            }
        }
    }
      , k = {
        browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [w, m, t], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[w, "Opera"], m, t], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [w, m, t], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[w, "IE"], m, t], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[w, "Yandex"], m, t], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[w, /_/g, " "], m, t], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [w, m, t], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[w, "Dolphin"], m, t], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[w, "Chrome"], m, t], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [m, t, [w, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [m, t, w], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [w, [t, y.str, v.browser.oldsafari.major], [m, y.str, v.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [w, m, t], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[w, "Netscape"], m, t], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [w, m, t], [/(apple(?:coremedia|))\/((\d+)[\w\._]+)/i, /(coremedia) v((\d+)[\w\._]+)/i], [w, m, t], [/(aqualung|lyssna|bsplayer)\/([\w\.-]+)/i], [w, m], [/(ares|ossproxy)\s((\d+)[\w\.-]+)/i], [w, m, t], [/(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i, /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i, /(lg player|nexplayer)\s((\d+)[\d\.]+)/i, /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i], [w, m, t], [/(nexplayer)\s((\d+)[\w\.-]+)/i], [w, m, t], [/(flrp)\/((\d+)[\w\.-]+)/i], [[w, "Flip Player"], m, t], [/(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i], [w], [/(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i], [w, m, t], [/(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i, /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i, /(lavf)((\d+)[\d\.]+)/i], [w, m, t], [/(htc_one_s)\/((\d+)[\d\.]+)/i], [[w, /_/g, " "], m, t], [/(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i], [w, m], [/(mplayer)(?:\s|\/)((\d+)[\w\.-]+)/i, /(mplayer) unknown-((\d+)[\w\.\-]+)/i], [w, m, t], [/(mplayer)/i, /(yourmuze)/i, /(media player classic|nero showtime)/i], [w], [/(nero (?:home|scout))\/((\d+)[\w\.-]+)/i], [w, m, t], [/(nokia\d+)\/((\d+)[\w\.-]+)/i], [w, m, t], [/\s(songbird)\/((\d+)[\w\.-]+)/i], [w, m, t], [/(winamp)3 version ((\d+)[\w\.-]+)/i, /(winamp)\s((\d+)[\w\.-]+)/i, /(winamp)mpeg\/((\d+)[\w\.-]+)/i], [w, m, t], [/(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i], [w], [/(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i], [w, m, t], [/(smp)((\d+)[\d\.]+)/i], [w, m, t], [/(vlc) media player - version ((\d+)[\w\.]+)/i, /(vlc)\/((\d+)[\w\.-]+)/i, /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i, /(foobar2000)\/((\d+)[\d\.]+)/i, /(itunes)\/((\d+)[\d\.]+)/i], [w, m, t], [/(wmplayer)\/((\d+)[\w\.-]+)/i, /(windows-media-player)\/((\d+)[\w\.-]+)/i], [[w, /-/g, " "], m, t], [/windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i], [m, t, [w, "Windows"]], [/(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i], [w, m, t], [/(rad.io)\s((\d+)[\d\.]+)/i, /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i], [[w, "rad.io"], m, t]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[c, "amd64"]], [/(ia32(?=;))/i], [[c, b.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[c, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[c, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[c, /ower/, "", b.lowerize]], [/(sun4\w)[;\)]/i], [[c, "sparc"]], [/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [c, b.lowerize]],
        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [d, p, [l, f]], [/applecoremedia\/[\w\.]+ \((ipad)/], [d, [p, "Apple"], [l, f]], [/(apple\s{0,1}tv)/i], [[d, "Apple TV"], [p, "Apple"]], [/(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [p, d, [l, f]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [d, p, [l, g]], [/\((ip[honed|\s\w*]+);/i], [d, [p, "Apple"], [l, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [p, d, [l, g]], [/\((bb10);\s(\w+)/i], [[p, "BlackBerry"], d, [l, g]], [/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i], [[p, "Asus"], d, [l, f]], [/(sony)\s(tablet\s[ps])/i], [p, d, [l, f]], [/(nintendo)\s([wids3u]+)/i], [p, d, [l, u]], [/((playstation)\s[3portablevi]+)/i], [[p, "Sony"], d, [l, u]], [/(sprint\s(\w+))/i], [[p, y.str, v.device.sprint.vendor], [d, y.str, v.device.sprint.model], [l, g]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [p, [d, /_/g, " "], [l, g]], [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i], [[p, "Motorola"], d, [l, g]], [/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i], [[p, "Motorola"], d, [l, f]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i], [[p, "Samsung"], d, [l, f]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[p, "Samsung"], d, [l, g]], [/(sie)-(\w+)*/i], [[p, "Siemens"], d, [l, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[p, "Nokia"], d, [l, g]], [/android\s3\.[\s\w-;]{10}((a\d{3}))/i], [[p, "Acer"], d, [l, f]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[p, "LG"], d, [l, f]], [/((nexus\s[45]))/i, /(lg)[e;\s-\/]+(\w+)*/i], [[p, "LG"], d, [l, g]], [/android.+((ideatab[a-z0-9\-\s]+))/i], [[p, "Lenovo"], d, [l, f]], [/(lg) netcast\.tv/i], [p, [l, h]], [/(mobile|tablet);.+rv\:.+gecko\//i], [l, p, d]],
        engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [w, m], [/rv\:([\w\.]+).*(gecko)/i], [m, w]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [w, m], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [w, [m, y.str, v.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[w, "Windows"], [m, y.str, v.os.windows.version]], [/\((bb)(10);/i], [[w, "BlackBerry"], m], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [w, m], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[w, "Symbian"], m], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[w, "Firefox OS"], m], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [w, m], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[w, "Chromium OS"], m], [/(sunos)\s?([\w\.]+\d)*/i], [[w, "Solaris"], m], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [w, m], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[w, "iOS"], [m, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [w, [m, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [w, m]]
    }
      , x = function(e) {
        var r = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : s);
        return this instanceof x ? (this.getBrowser = function() {
            return y.rgx.apply(this, k.browser)
        }
        ,
        this.getCPU = function() {
            return y.rgx.apply(this, k.cpu)
        }
        ,
        this.getDevice = function() {
            return y.rgx.apply(this, k.device)
        }
        ,
        this.getEngine = function() {
            return y.rgx.apply(this, k.engine)
        }
        ,
        this.getOS = function() {
            return y.rgx.apply(this, k.os)
        }
        ,
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        }
        ,
        this.getUA = function() {
            return r
        }
        ,
        this.setUA = function(i) {
            return r = i,
            this
        }
        ,
        void this.setUA(r)) : new x(e).getResult()
    };
    if (typeof exports !== a)
        typeof module !== a && module.exports && (exports = module.exports = x),
        exports.UAParser = x;
    else if (i.UAParser = x,
    typeof define === o && define.amd && define(function() {
        return x
    }),
    typeof i.jQuery !== a) {
        var A = i.jQuery
          , _ = new x;
        A.ua = _.getResult(),
        A.ua.get = function() {
            return _.getUA()
        }
        ,
        A.ua.set = function(i) {
            _.setUA(i);
            var e = _.getResult();
            for (var s in e)
                A.ua[s] = e[s]
        }
    }
}(this);
window.Modernizr = function(n, e, t) {
    function o(n) {
        d.cssText = n
    }
    function r(n, e) {
        return typeof n === e
    }
    var i, c, u, a = "2.8.2", f = {}, s = e.documentElement, l = "modernizr", p = e.createElement(l), d = p.style, y = ({}.toString,
    {}), w = [], b = w.slice, v = {}.hasOwnProperty;
    u = r(v, "undefined") || r(v.call, "undefined") ? function(n, e) {
        return e in n && r(n.constructor.prototype[e], "undefined")
    }
    : function(n, e) {
        return v.call(n, e)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(n) {
        var e = this;
        if ("function" != typeof e)
            throw new TypeError;
        var t = b.call(arguments, 1)
          , o = function() {
            if (this instanceof o) {
                var r = function() {};
                r.prototype = e.prototype;
                var i = new r
                  , c = e.apply(i, t.concat(b.call(arguments)));
                return Object(c) === c ? c : i
            }
            return e.apply(n, t.concat(b.call(arguments)))
        };
        return o
    }
    ),
    y.webgl = function() {
        return !!n.WebGLRenderingContext
    }
    ;
    for (var h in y)
        u(y, h) && (c = h.toLowerCase(),
        f[c] = y[h](),
        w.push((f[c] ? "" : "no-") + c));
    return f.addTest = function(n, e) {
        if ("object" == typeof n)
            for (var o in n)
                u(n, o) && f.addTest(o, n[o]);
        else {
            if (n = n.toLowerCase(),
            f[n] !== t)
                return f;
            e = "function" == typeof e ? e() : e,
            "undefined" != typeof enableClasses && enableClasses && (s.className += " " + (e ? "" : "no-") + n),
            f[n] = e
        }
        return f
    }
    ,
    o(""),
    p = i = null,
    f._version = a,
    f
}(this, this.document);
!function(e, t, a) {
    "use strict";
    function n(t, h, m) {
        function H(a) {
            var n = 0
              , i = Ee.length;
            if (Ce.old = e.extend({}, Ce),
            Ie = we ? 0 : be[ge.horizontal ? "width" : "height"](),
            ke = Be[ge.horizontal ? "width" : "height"](),
            ze = we ? t : Pe[ge.horizontal ? "outerWidth" : "outerHeight"](),
            Ee.length = 0,
            Ce.start = 0,
            Ce.end = q(ze - Ie, 0),
            Re) {
                n = Ne.length,
                qe = Pe.children(ge.itemSelector),
                Ne.length = 0;
                var r, s = c(Pe, ge.horizontal ? "paddingLeft" : "paddingTop"), o = c(Pe, ge.horizontal ? "paddingRight" : "paddingBottom"), l = "border-box" === e(qe).css("boxSizing"), u = "none" !== qe.css("float"), f = 0, v = qe.length - 1;
                ze = 0,
                qe.each(function(t, a) {
                    var n = e(a)
                      , i = a.getBoundingClientRect()
                      , l = E(ge.horizontal ? i.width || i.right - i.left : i.height || i.bottom - i.top)
                      , d = c(n, ge.horizontal ? "marginLeft" : "marginTop")
                      , p = c(n, ge.horizontal ? "marginRight" : "marginBottom")
                      , h = l + d + p
                      , m = !d || !p
                      , g = {};
                    g.el = a,
                    g.size = m ? l : h,
                    g.half = g.size / 2,
                    g.start = ze + (m ? d : 0),
                    g.center = g.start - E(Ie / 2 - g.size / 2),
                    g.end = g.start - Ie + g.size,
                    t || (ze += s),
                    ze += h,
                    ge.horizontal || u || p && d && t > 0 && (ze -= N(d, p)),
                    t === v && (g.end += o,
                    ze += o,
                    f = m ? p : 0),
                    Ne.push(g),
                    r = g
                }),
                Pe[0].style[ge.horizontal ? "width" : "height"] = (l ? ze : ze - s - o) + "px",
                ze -= f,
                Ne.length ? (Ce.start = Ne[0][Me ? "center" : "start"],
                Ce.end = Me ? r.center : ze > Ie ? r.end : Ce.start) : Ce.start = Ce.end = 0
            }
            if (Ce.center = E(Ce.end / 2 + Ce.start / 2),
            Q(),
            Se.length && ke > 0 && (ge.dynamicHandle ? (Te = Ce.start === Ce.end ? ke : E(ke * Ie / ze),
            Te = d(Te, ge.minHandleSize, ke),
            Se[0].style[ge.horizontal ? "width" : "height"] = Te + "px") : Te = Se[ge.horizontal ? "outerWidth" : "outerHeight"](),
            xe.end = ke - Te,
            it || j()),
            !we && Ie > 0) {
                var p = Ce.start
                  , h = "";
                if (Re)
                    e.each(Ne, function(e, t) {
                        Me ? Ee.push(t.center) : t.start + t.size > p && p <= Ce.end && (p = t.start,
                        Ee.push(p),
                        p += Ie,
                        p > Ce.end && p < Ce.end + Ie && Ee.push(Ce.end))
                    });
                else
                    for (; p - Ie < Ce.end; )
                        Ee.push(p),
                        p += Ie;
                if (De[0] && i !== Ee.length) {
                    for (var m = 0; m < Ee.length; m++)
                        h += ge.pageBuilder.call(ye, m);
                    Ae = De.html(h).children(),
                    Ae.eq(Oe.activePage).addClass(ge.activeClass)
                }
            }
            if (Oe.slideeSize = ze,
            Oe.frameSize = Ie,
            Oe.sbSize = ke,
            Oe.handleSize = Te,
            Re) {
                a && null != ge.startAt && (W(ge.startAt),
                ye[Le ? "toCenter" : "toStart"](ge.startAt));
                var g = Ne[Oe.activeItem];
                X(Le && g ? g.center : d(Ce.dest, Ce.start, Ce.end))
            } else
                a ? null != ge.startAt && X(ge.startAt, 1) : X(d(Ce.dest, Ce.start, Ce.end));
            pe("load")
        }
        function X(e, t, a) {
            if (Re && at.released && !a) {
                var n = $(e)
                  , i = e > Ce.start && e < Ce.end;
                Le ? (i && (e = Ne[n.centerItem].center),
                Me && ge.activateMiddle && W(n.centerItem)) : i && (e = Ne[n.firstItem].start)
            }
            at.init && at.slidee && ge.elasticBounds ? e > Ce.end ? e = Ce.end + (e - Ce.end) / 6 : e < Ce.start && (e = Ce.start + (e - Ce.start) / 6) : e = d(e, Ce.start, Ce.end),
            et.start = +new Date,
            et.time = 0,
            et.from = Ce.cur,
            et.to = e,
            et.delta = e - Ce.cur,
            et.tweesing = at.tweese || at.init && !at.slidee,
            et.immediate = !et.tweesing && (t || at.init && at.slidee || !ge.speed),
            at.tweese = 0,
            e !== Ce.dest && (Ce.dest = e,
            pe("change"),
            it || Y()),
            K(),
            Q(),
            Z(),
            F()
        }
        function Y() {
            if (ye.initialized) {
                if (!it)
                    return it = w(Y),
                    void (at.released && pe("moveStart"));
                et.immediate ? Ce.cur = et.to : et.tweesing ? (et.tweeseDelta = et.to - Ce.cur,
                x(et.tweeseDelta) < .1 ? Ce.cur = et.to : Ce.cur += et.tweeseDelta * (at.released ? ge.swingSpeed : ge.syncSpeed)) : (et.time = N(+new Date - et.start, ge.speed),
                Ce.cur = et.from + et.delta * e.easing[ge.easing](et.time / ge.speed, et.time, 0, 1, ge.speed)),
                et.to === Ce.cur ? (Ce.cur = et.to,
                at.tweese = it = 0) : it = w(Y),
                pe("move"),
                we || (f ? Pe[0].style[f] = v + (ge.horizontal ? "translateX" : "translateY") + "(" + -Ce.cur + "px)" : Pe[0].style[ge.horizontal ? "left" : "top"] = -E(Ce.cur) + "px"),
                !it && at.released && pe("moveEnd"),
                j()
            }
        }
        function j() {
            Se.length && (xe.cur = Ce.start === Ce.end ? 0 : ((at.init && !at.slidee ? Ce.dest : Ce.cur) - Ce.start) / (Ce.end - Ce.start) * xe.end,
            xe.cur = d(E(xe.cur), xe.start, xe.end),
            _e.hPos !== xe.cur && (_e.hPos = xe.cur,
            f ? Se[0].style[f] = v + (ge.horizontal ? "translateX" : "translateY") + "(" + xe.cur + "px)" : Se[0].style[ge.horizontal ? "left" : "top"] = xe.cur + "px"))
        }
        function F() {
            Ae[0] && _e.page !== Oe.activePage && (_e.page = Oe.activePage,
            Ae.removeClass(ge.activeClass).eq(Oe.activePage).addClass(ge.activeClass),
            pe("activePage", _e.page))
        }
        function M() {
            tt.speed && Ce.cur !== (tt.speed > 0 ? Ce.end : Ce.start) || ye.stop(),
            ot = at.init ? w(M) : 0,
            tt.now = +new Date,
            tt.pos = Ce.cur + (tt.now - tt.lastTime) / 1e3 * tt.speed,
            X(at.init ? tt.pos : E(tt.pos)),
            at.init || Ce.cur !== Ce.dest || pe("moveEnd"),
            tt.lastTime = tt.now
        }
        function L(e, t, n) {
            if ("boolean" === i(t) && (n = t,
            t = a),
            t === a)
                X(Ce[e], n);
            else {
                if (Le && "center" !== e)
                    return;
                var r = ye.getPos(t);
                r && X(r[e], n, !Le)
            }
        }
        function R(e) {
            return null != e ? l(e) ? e >= 0 && e < Ne.length ? e : -1 : qe.index(e) : -1
        }
        function U(e) {
            return R(l(e) && 0 > e ? e + Ne.length : e)
        }
        function W(e, t) {
            var a = R(e);
            return !(!Re || 0 > a) && ((_e.active !== a || t) && (qe.eq(Oe.activeItem).removeClass(ge.activeClass),
            qe.eq(a).addClass(ge.activeClass),
            _e.active = Oe.activeItem = a,
            Z(),
            pe("active", a)),
            a)
        }
        function $(e) {
            e = d(l(e) ? e : Ce.dest, Ce.start, Ce.end);
            var t = {}
              , a = Me ? 0 : Ie / 2;
            if (!we)
                for (var n = 0, i = Ee.length; i > n; n++) {
                    if (e >= Ce.end || n === Ee.length - 1) {
                        t.activePage = Ee.length - 1;
                        break
                    }
                    if (e <= Ee[n] + a) {
                        t.activePage = n;
                        break
                    }
                }
            if (Re) {
                for (var r = false, s = false, o = false, c = 0, u = Ne.length; u > c; c++)
                    if (r === false && e <= Ne[c].start + Ne[c].half && (r = c),
                    o === false && e <= Ne[c].center + Ne[c].half && (o = c),
                    c === u - 1 || e <= Ne[c].end + Ne[c].half) {
                        s = c;
                        break
                    }
                t.firstItem = l(r) ? r : 0,
                t.centerItem = l(o) ? o : t.firstItem,
                t.lastItem = l(s) ? s : t.centerItem
            }
            return t
        }
        function Q(t) {
            e.extend(Oe, $(t))
        }
        function Z() {
            var e = Ce.dest <= Ce.start
              , t = Ce.dest >= Ce.end
              , a = (e ? 1 : 0) | (t ? 2 : 0);
            if (_e.slideePosState !== a && (_e.slideePosState = a,
            Je.is("button,input") && Je.prop("disabled", e),
            Ke.is("button,input") && Ke.prop("disabled", t),
            Je.add(Qe)[e ? "addClass" : "removeClass"](ge.disabledClass),
            Ke.add($e)[t ? "addClass" : "removeClass"](ge.disabledClass)),
            _e.fwdbwdState !== a && at.released && (_e.fwdbwdState = a,
            Qe.is("button,input") && Qe.prop("disabled", e),
            $e.is("button,input") && $e.prop("disabled", t)),
            Re && null != Oe.activeItem) {
                var n = 0 === Oe.activeItem
                  , i = Oe.activeItem >= Ne.length - 1
                  , r = (n ? 1 : 0) | (i ? 2 : 0);
                _e.itemsButtonState !== r && (_e.itemsButtonState = r,
                Ze.is("button,input") && Ze.prop("disabled", n),
                Ge.is("button,input") && Ge.prop("disabled", i),
                Ze[n ? "addClass" : "removeClass"](ge.disabledClass),
                Ge[i ? "addClass" : "removeClass"](ge.disabledClass))
            }
        }
        function G(e, t, a) {
            if (e = U(e),
            t = U(t),
            e > -1 && t > -1 && e !== t && (!a || t !== e - 1) && (a || t !== e + 1)) {
                qe.eq(e)[a ? "insertAfter" : "insertBefore"](Ne[t].el);
                var n = t > e ? e : a ? t : t - 1
                  , i = e > t ? e : a ? t + 1 : t
                  , r = e > t;
                null != Oe.activeItem && (e === Oe.activeItem ? _e.active = Oe.activeItem = a ? r ? t + 1 : t : r ? t : t - 1 : Oe.activeItem > n && Oe.activeItem < i && (_e.active = Oe.activeItem += r ? 1 : -1)),
                H()
            }
        }
        function J(e, t) {
            for (var a = 0, n = Ve[e].length; n > a; a++)
                if (Ve[e][a] === t)
                    return a;
            return -1
        }
        function K() {
            at.released && !ye.isPaused && ye.resume()
        }
        function V(e) {
            return E(d(e, xe.start, xe.end) / xe.end * (Ce.end - Ce.start)) + Ce.start
        }
        function _() {
            at.history[0] = at.history[1],
            at.history[1] = at.history[2],
            at.history[2] = at.history[3],
            at.history[3] = at.delta
        }
        function ee(e) {
            at.released = 0,
            at.source = e,
            at.slidee = "slidee" === e
        }
        function te(t) {
            var a = "touchstart" === t.type
              , n = t.data.source
              , i = "slidee" === n;
            at.init || !a && ie(t.target) || ("handle" !== n || ge.dragHandle && xe.start !== xe.end) && (!i || (a ? ge.touchDragging : ge.mouseDragging && t.which < 2)) && (a || r(t),
            ee(n),
            at.init = 0,
            at.$source = e(t.target),
            at.touch = a,
            at.pointer = a ? t.originalEvent.touches[0] : t,
            at.initX = at.pointer.pageX,
            at.initY = at.pointer.pageY,
            at.initPos = i ? Ce.cur : xe.cur,
            at.start = +new Date,
            at.time = 0,
            at.path = 0,
            at.delta = 0,
            at.locked = 0,
            at.history = [0, 0, 0, 0],
            at.pathToLock = i ? a ? 30 : 10 : 0,
            b.on(a ? z : I, ae),
            ye.pause(1),
            (i ? Pe : Se).addClass(ge.draggedClass),
            pe("moveStart"),
            i && (rt = setInterval(_, 10)))
        }
        function ae(e) {
            if (at.released = "mouseup" === e.type || "touchend" === e.type,
            at.pointer = at.touch ? e.originalEvent[at.released ? "changedTouches" : "touches"][0] : e,
            at.pathX = at.pointer.pageX - at.initX,
            at.pathY = at.pointer.pageY - at.initY,
            at.path = D(A(at.pathX, 2) + A(at.pathY, 2)),
            at.delta = ge.horizontal ? at.pathX : at.pathY,
            at.released || !(at.path < 1)) {
                if (!at.init) {
                    if (!(ge.horizontal ? x(at.pathX) > x(at.pathY) : x(at.pathX) < x(at.pathY)))
                        return ne();
                    at.init = 1
                }
                r(e),
                !at.locked && at.path > at.pathToLock && at.slidee && (at.locked = 1,
                at.$source.on(B, s)),
                at.released && (ne(),
                ge.releaseSwing && at.slidee && (at.swing = (at.delta - at.history[0]) / 40 * 300,
                at.delta += at.swing,
                at.tweese = x(at.swing) > 10)),
                X(at.slidee ? E(at.initPos - at.delta) : V(at.initPos + at.delta))
            }
        }
        function ne() {
            clearInterval(rt),
            at.released = true,
            b.off(at.touch ? z : I, ae),
            (at.slidee ? Pe : Se).removeClass(ge.draggedClass),
            setTimeout(function() {
                at.$source.off(B, s)
            }),
            Ce.cur === Ce.dest && at.init && pe("moveEnd"),
            ye.resume(1),
            at.init = 0
        }
        function ie(t) {
            return ~e.inArray(t.nodeName, k) || e(t).is(ge.interactive)
        }
        function re() {
            ye.stop(),
            b.off("mouseup", re)
        }
        function se(e) {
            switch (r(e),
            this) {
            case $e[0]:
            case Qe[0]:
                ye.moveBy($e.is(this) ? ge.moveBy : -ge.moveBy),
                b.on("mouseup", re);
                break;
            case Ze[0]:
                ye.prev();
                break;
            case Ge[0]:
                ye.next();
                break;
            case Je[0]:
                ye.prevPage();
                break;
            case Ke[0]:
                ye.nextPage()
            }
        }
        function oe(e) {
            return nt.curDelta = (ge.horizontal ? e.deltaY || e.deltaX : e.deltaY) || -e.wheelDelta,
            nt.curDelta /= 1 === e.deltaMode ? 3 : 100,
            Re ? (p = +new Date,
            nt.last < p - nt.resetTime && (nt.delta = 0),
            nt.last = p,
            nt.delta += nt.curDelta,
            x(nt.delta) < 1 ? nt.finalDelta = 0 : (nt.finalDelta = E(nt.delta / 1),
            nt.delta %= 1),
            nt.finalDelta) : nt.curDelta
        }
        function le(e) {
            e.originalEvent[g] = ye;
            var t = +new Date;
            if (O + ge.scrollHijack > t && Ue[0] !== document && Ue[0] !== window)
                return void (O = t);
            if (ge.scrollBy && Ce.start !== Ce.end) {
                var a = oe(e.originalEvent);
                (ge.scrollTrap || a > 0 && Ce.dest < Ce.end || 0 > a && Ce.dest > Ce.start) && r(e, 1),
                ye.slideBy(ge.scrollBy * a)
            }
        }
        function ce(e) {
            ge.clickBar && e.target === Be[0] && (r(e),
            X(V((ge.horizontal ? e.pageX - Be.offset().left : e.pageY - Be.offset().top) - Te / 2)))
        }
        function de(e) {
            if (ge.keyboardNavBy)
                switch (e.which) {
                case ge.horizontal ? 37 : 38:
                    r(e),
                    ye["pages" === ge.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case ge.horizontal ? 39 : 40:
                    r(e),
                    ye["pages" === ge.keyboardNavBy ? "nextPage" : "next"]()
                }
        }
        function ue(e) {
            return ie(this) ? void (e.originalEvent[g + "ignore"] = true) : void (this.parentNode !== Pe[0] || e.originalEvent[g + "ignore"] || ye.activate(this))
        }
        function fe() {
            this.parentNode === De[0] && ye.activatePage(Ae.index(this))
        }
        function ve(e) {
            ge.pauseOnHover && ye["mouseenter" === e.type ? "pause" : "resume"](2)
        }
        function pe(e, t) {
            if (Ve[e]) {
                for (me = Ve[e].length,
                T.length = 0,
                he = 0; me > he; he++)
                    T.push(Ve[e][he]);
                for (he = 0; me > he; he++)
                    T[he].call(ye, e, t)
            }
        }
        var he, me, ge = e.extend({}, n.defaults, h), ye = this, we = l(t), be = e(t), Pe = ge.slidee ? e(ge.slidee).eq(0) : be.children().eq(0), Ie = 0, ze = 0, Ce = {
            start: 0,
            center: 0,
            end: 0,
            cur: 0,
            dest: 0
        }, Be = e(ge.scrollBar).eq(0), Se = Be.children().eq(0), ke = 0, Te = 0, xe = {
            start: 0,
            end: 0,
            cur: 0
        }, De = e(ge.pagesBar), Ae = 0, Ee = [], qe = 0, Ne = [], Oe = {
            firstItem: 0,
            lastItem: 0,
            centerItem: 0,
            activeItem: null,
            activePage: 0
        }, He = new u(be[0]), Xe = new u(Pe[0]), Ye = new u(Be[0]), je = new u(Se[0]), Fe = "basic" === ge.itemNav, Me = "forceCentered" === ge.itemNav, Le = "centered" === ge.itemNav || Me, Re = !we && (Fe || Le || Me), Ue = ge.scrollSource ? e(ge.scrollSource) : be, We = ge.dragSource ? e(ge.dragSource) : be, $e = e(ge.forward), Qe = e(ge.backward), Ze = e(ge.prev), Ge = e(ge.next), Je = e(ge.prevPage), Ke = e(ge.nextPage), Ve = {}, _e = {}, et = {}, tt = {}, at = {
            released: 1
        }, nt = {
            last: 0,
            delta: 0,
            resetTime: 200
        }, it = 0, rt = 0, st = 0, ot = 0;
        we || (t = be[0]),
        ye.initialized = 0,
        ye.frame = t,
        ye.slidee = Pe[0],
        ye.pos = Ce,
        ye.rel = Oe,
        ye.items = Ne,
        ye.pages = Ee,
        ye.isPaused = 0,
        ye.options = ge,
        ye.dragging = at,
        ye.reload = function() {
            H()
        }
        ,
        ye.getPos = function(e) {
            if (Re) {
                var t = R(e);
                return -1 !== t && Ne[t]
            }
            var a = Pe.find(e).eq(0);
            if (a[0]) {
                var n = ge.horizontal ? a.offset().left - Pe.offset().left : a.offset().top - Pe.offset().top
                  , i = a[ge.horizontal ? "outerWidth" : "outerHeight"]();
                return {
                    start: n,
                    center: n - Ie / 2 + i / 2,
                    end: n - Ie + i,
                    size: i
                }
            }
            return false
        }
        ,
        ye.moveBy = function(e) {
            tt.speed = e,
            !at.init && tt.speed && Ce.cur !== (tt.speed > 0 ? Ce.end : Ce.start) && (tt.lastTime = +new Date,
            tt.startPos = Ce.cur,
            ee("button"),
            at.init = 1,
            pe("moveStart"),
            y(ot),
            M())
        }
        ,
        ye.stop = function() {
            "button" === at.source && (at.init = 0,
            at.released = 1)
        }
        ,
        ye.prev = function() {
            ye.activate(null == Oe.activeItem ? 0 : Oe.activeItem - 1)
        }
        ,
        ye.next = function() {
            ye.activate(null == Oe.activeItem ? 0 : Oe.activeItem + 1)
        }
        ,
        ye.prevPage = function() {
            ye.activatePage(Oe.activePage - 1)
        }
        ,
        ye.nextPage = function() {
            ye.activatePage(Oe.activePage + 1)
        }
        ,
        ye.slideBy = function(e, t) {
            e && (Re ? ye[Le ? "toCenter" : "toStart"](d((Le ? Oe.centerItem : Oe.firstItem) + ge.scrollBy * e, 0, Ne.length)) : X(Ce.dest + e, t))
        }
        ,
        ye.slideTo = function(e, t) {
            X(e, t)
        }
        ,
        ye.toStart = function(e, t) {
            L("start", e, t)
        }
        ,
        ye.toEnd = function(e, t) {
            L("end", e, t)
        }
        ,
        ye.toCenter = function(e, t) {
            L("center", e, t)
        }
        ,
        ye.getIndex = R,
        ye.activate = function(e, t) {
            var a = W(e);
            ge.smart && a !== false && (Le ? ye.toCenter(a, t) : a >= Oe.lastItem ? ye.toStart(a, t) : a <= Oe.firstItem ? ye.toEnd(a, t) : K())
        }
        ,
        ye.activatePage = function(e, t) {
            l(e) && X(Ee[d(e, 0, Ee.length - 1)], t)
        }
        ,
        ye.resume = function(e) {
            ge.cycleBy && ge.cycleInterval && ("items" !== ge.cycleBy || Ne[0] && null != Oe.activeItem) && !(e < ye.isPaused) && (ye.isPaused = 0,
            st ? st = clearTimeout(st) : pe("resume"),
            st = setTimeout(function() {
                switch (pe("cycle"),
                ge.cycleBy) {
                case "items":
                    ye.activate(Oe.activeItem >= Ne.length - 1 ? 0 : Oe.activeItem + 1);
                    break;
                case "pages":
                    ye.activatePage(Oe.activePage >= Ee.length - 1 ? 0 : Oe.activePage + 1)
                }
            }, ge.cycleInterval))
        }
        ,
        ye.pause = function(e) {
            e < ye.isPaused || (ye.isPaused = e || 100,
            st && (st = clearTimeout(st),
            pe("pause")))
        }
        ,
        ye.toggle = function() {
            ye[st ? "pause" : "resume"]()
        }
        ,
        ye.set = function(t, a) {
            e.isPlainObject(t) ? e.extend(ge, t) : ge.hasOwnProperty(t) && (ge[t] = a)
        }
        ,
        ye.add = function(t, a) {
            var n = e(t);
            Re ? (null == a || !Ne[0] || a >= Ne.length ? n.appendTo(Pe) : Ne.length && n.insertBefore(Ne[a].el),
            null != Oe.activeItem && a <= Oe.activeItem && (_e.active = Oe.activeItem += n.length)) : Pe.append(n),
            H()
        }
        ,
        ye.remove = function(t) {
            if (Re) {
                var a = U(t);
                if (a > -1) {
                    qe.eq(a).remove();
                    var n = a === Oe.activeItem;
                    null != Oe.activeItem && a < Oe.activeItem && (_e.active = --Oe.activeItem),
                    H(),
                    n && (_e.active = null,
                    ye.activate(Oe.activeItem))
                }
            } else
                e(t).remove(),
                H()
        }
        ,
        ye.moveAfter = function(e, t) {
            G(e, t, 1)
        }
        ,
        ye.moveBefore = function(e, t) {
            G(e, t)
        }
        ,
        ye.on = function(e, t) {
            if ("object" === i(e))
                for (var a in e)
                    e.hasOwnProperty(a) && ye.on(a, e[a]);
            else if ("function" === i(t))
                for (var n = e.split(" "), r = 0, s = n.length; s > r; r++)
                    Ve[n[r]] = Ve[n[r]] || [],
                    -1 === J(n[r], t) && Ve[n[r]].push(t);
            else if ("array" === i(t))
                for (var o = 0, l = t.length; l > o; o++)
                    ye.on(e, t[o])
        }
        ,
        ye.one = function(e, t) {
            function a() {
                t.apply(ye, arguments),
                ye.off(e, a)
            }
            ye.on(e, a)
        }
        ,
        ye.off = function(e, t) {
            if (t instanceof Array)
                for (var a = 0, n = t.length; n > a; a++)
                    ye.off(e, t[a]);
            else
                for (var i = e.split(" "), r = 0, s = i.length; s > r; r++)
                    if (Ve[i[r]] = Ve[i[r]] || [],
                    null == t)
                        Ve[i[r]].length = 0;
                    else {
                        var o = J(i[r], t);
                        -1 !== o && Ve[i[r]].splice(o, 1)
                    }
        }
        ,
        ye.destroy = function() {
            return Ue.add(Se).add(Be).add(De).add($e).add(Qe).add(Ze).add(Ge).add(Je).add(Ke).off("." + g),
            b.off("keydown", de),
            Ze.add(Ge).add(Je).add(Ke).removeClass(ge.disabledClass),
            qe && null != Oe.activeItem && qe.eq(Oe.activeItem).removeClass(ge.activeClass),
            De.empty(),
            we || (be.off("." + g),
            He.restore(),
            Xe.restore(),
            Ye.restore(),
            je.restore(),
            e.removeData(t, g)),
            Ne.length = Ee.length = 0,
            _e = {},
            ye.initialized = 0,
            ye
        }
        ,
        ye.init = function() {
            if (!ye.initialized) {
                ye.on(m);
                var e = ["overflow", "position"]
                  , t = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                He.save.apply(He, e),
                Ye.save.apply(Ye, e),
                Xe.save.apply(Xe, t),
                je.save.apply(je, t);
                var a = Se;
                return we || (a = a.add(Pe),
                be.css("overflow", "hidden"),
                f || "static" !== be.css("position") || be.css("position", "relative")),
                f ? v && a.css(f, v) : ("static" === Be.css("position") && Be.css("position", "relative"),
                a.css({
                    position: "absolute"
                })),
                ge.forward && $e.on(S, se),
                ge.backward && Qe.on(S, se),
                ge.prev && Ze.on(B, se),
                ge.next && Ge.on(B, se),
                ge.prevPage && Je.on(B, se),
                ge.nextPage && Ke.on(B, se),
                Ue.on(C, le),
                Be[0] && Be.on(B, ce),
                Re && ge.activateOn && be.on(ge.activateOn + "." + g, "*", ue),
                De[0] && ge.activatePageOn && De.on(ge.activatePageOn + "." + g, "*", fe),
                We.on(P, {
                    source: "slidee"
                }, te),
                Se && Se.on(P, {
                    source: "handle"
                }, te),
                b.on("keydown", de),
                we || (be.on("mouseenter." + g + " mouseleave." + g, ve),
                be.on("scroll." + g, o)),
                ye.initialized = 1,
                H(true),
                ge.cycleBy && !we && ye[ge.startPaused ? "pause" : "resume"](),
                ye
            }
        }
    }
    function i(e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof e
    }
    function r(e, t) {
        e.preventDefault(),
        t && e.stopPropagation()
    }
    function s(t) {
        r(t, 1),
        e(this).off(t.type, s)
    }
    function o() {
        this.scrollLeft = 0,
        this.scrollTop = 0
    }
    function l(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    function c(e, t) {
        return 0 | E(String(e.css(t)).replace(/[^\-0-9.]/g, ""))
    }
    function d(e, t, a) {
        return t > e ? t : e > a ? a : e
    }
    function u(e) {
        var t = {};
        return t.style = {},
        t.save = function() {
            if (e && e.nodeType) {
                for (var a = 0; a < arguments.length; a++)
                    t.style[arguments[a]] = e.style[arguments[a]];
                return t
            }
        }
        ,
        t.restore = function() {
            if (e && e.nodeType) {
                for (var a in t.style)
                    t.style.hasOwnProperty(a) && (e.style[a] = t.style[a]);
                return t
            }
        }
        ,
        t
    }
    var f, v, p, h = "sly", m = "Sly", g = h, y = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, w = t.requestAnimationFrame, b = e(document), P = "touchstart." + g + " mousedown." + g, I = "mousemove." + g + " mouseup." + g, z = "touchmove." + g + " touchend." + g, C = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + g, B = "click." + g, S = "mousedown." + g, k = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"], T = [], x = Math.abs, D = Math.sqrt, A = Math.pow, E = Math.round, q = Math.max, N = Math.min, O = 0;
    b.on(C, function(e) {
        var t = e.originalEvent[g]
          , a = +new Date;
        (!t || t.options.scrollHijack < a - O) && (O = a)
    }),
    function(e) {
        function t(e) {
            var t = (new Date).getTime()
              , n = Math.max(0, 16 - (t - a))
              , i = setTimeout(e, n);
            return a = t,
            i
        }
        w = e.requestAnimationFrame || e.webkitRequestAnimationFrame || t;
        var a = (new Date).getTime()
          , n = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.clearTimeout;
        y = function(t) {
            n.call(e, t)
        }
    }(window),
    function() {
        function e(e) {
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n] ? t[n] + e.charAt(0).toUpperCase() + e.slice(1) : e;
                if (null != a.style[r])
                    return r
            }
        }
        var t = ["", "webkit", "moz", "ms", "o"]
          , a = document.createElement("div");
        f = e("transform"),
        v = e("perspective") ? "translateZ(0) " : ""
    }(),
    t[m] = n,
    e.fn[h] = function(t, a) {
        var r, s;
        return e.isPlainObject(t) || (("string" === i(t) || t === false) && (r = t === false ? "destroy" : t,
        s = Array.prototype.slice.call(arguments, 1)),
        t = {}),
        this.each(function(i, o) {
            var l = e.data(o, g);
            l || r ? l && r && l[r] && l[r].apply(l, s) : l = e.data(o, g, new n(o,t,a).init())
        })
    }
    ,
    n.defaults = {
        slidee: null,
        horizontal: false,
        itemNav: null,
        itemSelector: null,
        smart: false,
        activateOn: null,
        activateMiddle: false,
        scrollSource: null,
        scrollBy: 0,
        scrollHijack: 300,
        scrollTrap: false,
        dragSource: null,
        mouseDragging: false,
        touchDragging: false,
        releaseSwing: false,
        swingSpeed: .2,
        elasticBounds: false,
        interactive: null,
        scrollBar: null,
        dragHandle: false,
        dynamicHandle: false,
        minHandleSize: 50,
        clickBar: false,
        syncSpeed: .5,
        pagesBar: null,
        activatePageOn: null,
        pageBuilder: function(e) {
            return "<li>" + (e + 1) + "</li>"
        },
        forward: null,
        backward: null,
        prev: null,
        next: null,
        prevPage: null,
        nextPage: null,
        cycleBy: null,
        cycleInterval: 5e3,
        pauseOnHover: false,
        startPaused: false,
        moveBy: 300,
        speed: 0,
        easing: "swing",
        startAt: null,
        keyboardNavBy: null,
        draggedClass: "dragged",
        activeClass: "active",
        disabledClass: "disabled"
    }
}(jQuery, window);