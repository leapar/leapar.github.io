var dom, clamp, byteToFloat, getSnapRect, Archive, BigInt, Bounds, ByteStream, prepareEmbedParams, embed, fetchThumbnail, fdage, Framebuffer, FullScreen, Input, TranslateCon, preTransform, getScaleMatrix, Cone, LightTargetCon, Sphere, GuideLine, lightSi, Lights, Material, Matrix, drawplane, Sprite, turn3dTo2d, Rect, SnapshotLine, Line, Mesh, MeshRenderable, Network, PostRender, Scene, Shader, ShaderCache, ShadowCollector, Sky, Sky2, Texture, TextureCache, UI, Vect, View, Previewer, WebViewer, ArchiveSky, ShaderTable;
(function anonymous(
  /*``*/
) {
  function _$af481889(elem, className) {
    if (elem.className === undefined) {
      elem.className = className
    } else {
      if (elem.className !== className) {
        var classes = elem.className.split(/ +/);
        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
        }
      }
    }
  }

  function _$af481890(elem, className) {
    if (className) {
      if (elem.className === undefined) {} else {
        if (elem.className === className) {
          elem.removeAttribute("class")
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);
          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(" ")
          }
        }
      }
    } else {
      elem.className = undefined
    }
  }

  function _$af481891(elem, className) {
    return new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)").test(elem.className) || false
  }

  function _$af481892(elem, event, func, bool) {
    bool = bool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool)
    } else {
      if (elem.attachEvent) {
        elem.attachEvent("on" + event, func)
      }
    }
  }

  function _$af481893(elem, event, func, bool) {
    bool = bool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool)
    } else {
      if (elem.detachEvent) {
        elem.detachEvent("on" + event, func)
      }
    }
  }

  function _$af481894(id, elem) {
    elem = elem || document;
    var result = elem.getElementById && elem.getElementById(id);
    return result || document.getElementById(id)
  }

  function _$af481895(name, elem) {
    elem = elem || document;
    return elem.getElementsByTagName(name)
  }

  function _$af481896(name, elem) {
    elem = elem || document;
    return elem.getElementsByClassName(name)
  }

  function _$af481897(v, b) {
    if (v == void(0)) {
      return b
    } else {
      return v
    }
  }

  function _$af481898(o) {
    if (!(o instanceof Array)) {
      var a = [];
      for (var i in o) {
        a.push(o[i])
      };
      return a
    } else {
      return o
    }
  }

  function _$af481899(value, min, max) {
    if (min === void(0)) {
      min = 0
    };
    if (max === void(0)) {
      max = 1
    };
    return Math.min(max, Math.max(min, value))
  }

  function _$af481900(hn) {
    hn[0] = hn[0] / 65535;
    hn[1] = hn[1] / 65535;
    if (hn[0] < 0) {
      hn[0] += 1
    };
    if (hn[1] < 0) {
      hn[1] += 1
    };
    var ho = (hn[1] > (32767.1 / 65535.0));
    hn[1] = ho ? (hn[1] - (32768.0 / 65535.0)) : hn[1];
    var r = [];
    r[0] = (2.0 * 65535.0 / 32767.0) * hn[0] - 1;
    r[1] = (2.0 * 65535.0 / 32767.0) * hn[1] - 1;
    r[2] = Math.sqrt(clamp(1.0 - r[0] * r[0] - r[1] * r[1], 0.0, 1.0));
    r[2] = ho ? -r[2] : r[2];
    return r
  }

  function _$af481901(n) {
    var m = [];
    m[0] = (n[0] + 1) / (2.0 * 65535.0 / 32767.0);
    m[1] = (n[1] + 1) / (2.0 * 65535.0 / 32767.0);
    var ho = (n[2] < 0);
    ho && (m[1] += 32768.0 / 65535.0);
    if (m[0] > 32768.0 / 65535.0) {
      m[0] -= 1
    };
    if (m[1] > 32768.0 / 65535.0) {
      m[1] -= 1
    };
    return m
  }

  function _$af481902(array) {
    var Uint32 = array[0] | array[1] << 8 | array[2] << 16 | array[3] << 24;
    var sign = (Uint32 & 0x80000000) ? -1 : 1;
    var exponent = ((Uint32 >> 23) & 0xFF) - 127;
    var significand = (Uint32 & ~(-1 << 23));
    if (exponent == 128) {
      return sign * ((significand) ? Number.NaN : Number.POSITIVE_INFINITY)
    };
    if (exponent == -127) {
      if (significand == 0) {
        return sign * 0.0
      };
      exponent = -126;
      significand /= (1 << 22)
    } else {
      significand = (significand | (1 << 23)) / (1 << 23)
    };
    return sign * significand * Math.pow(2, exponent)
  }

  function _$af481903() {
    var w = 960,
      h = 600;
    var rect = webview.canvas.getClientRects()[0];
    var width = rect.width * window.devicePixelRatio;
    var height = rect.height * window.devicePixelRatio;
    var ratio = height / h;
    w *= ratio;
    h = height;
    var x, y;
    x = (width - w) / 2;
    y = (height - h) / 2;
    return {
      x: parseInt(x),
      y: parseInt(y),
      w: parseInt(w),
      h: parseInt(h),
      canvasWidth: width,
      canvasHeight: height
    }
  }

  function _$af481904(a) {
    this.files = [];
    for (a = new _$af481922(a); !a.empty();) {
      var b = {};
      b.name = a.readCString();
      b.type = a.readCString();
      var c = a.readUint32(),
        d = a.readUint32(),
        e = a.readUint32();
      b.data = a.readBytes(d);
      if (!(b.data.length < d)) {
        if (c & 1 && (b.data = this.decompress(b.data, e), null === b.data)) {
          continue
        };
        this.files[b.name] = b
      }
    }
  }

  function _$af481905(a) {
    if (this.files[a]) {
      return this.files[a]
    } else {
      if (a == void(0)) {
        return null
      };
      var t = new _$af482121(webview.gl, {
        width: 1,
        height: 1
      });
      if (a instanceof Array) {
        t.loadArray(new Uint8Array([a[0], a[1], a[2], 255]))
      } else {
        t.loadArray(new Uint8Array([255, 255, 255, 255]))
      };
      return t
    }
  }

  function _$af481906(a) {
    var b = this.files[a];
    return b
  }

  function _$af481907(a) {
    if (!a) {
      return !1
    };
    var b = this["get"](a.name + ".sig");
    if (!b) {
      return !1
    };
    b = JSON.parse(String.fromCharCode.apply(null, b.data));
    if (!b) {
      return !1
    };
    for (var c = 5381, d = 0; d < a.data.length; ++d) {
      c = 33 * c + a.data[d] & 4294967295
    };
    a = new _$af481909;
    a.setBytes([0, 233, 33, 170, 116, 86, 29, 195, 228, 46, 189, 3, 185, 31, 245, 19, 159, 105, 73, 190, 158, 80, 175, 38, 210, 116, 221, 229, 171, 134, 104, 144, 140, 5, 99, 255, 208, 78, 248, 215, 172, 44, 79, 83, 5, 244, 152, 19, 92, 137, 112, 10, 101, 142, 209, 100, 244, 92, 190, 125, 28, 0, 185, 54, 143, 247, 49, 37, 15, 254, 142, 180, 185, 232, 50, 219, 11, 186, 106, 116, 78, 212, 10, 105, 53, 26, 14, 181, 80, 47, 87, 213, 182, 19, 126, 151, 86, 109, 182, 224, 37, 135, 80, 59, 22, 93, 125, 68, 214, 106, 209, 152, 235, 157, 249, 245, 48, 76, 203, 0, 0, 95, 200, 246, 243, 229, 85, 79, 169], !0);
    d = new _$af481909;
    d.setBytes(b[0]);
    return d.powmod(65537, a).toInt32() != c ? !1 : !0
  }

  function _$af481908(a, b) {
    var c = new Uint8Array(b),
      d = 0,
      e = new Uint32Array(4096),
      f = new Uint32Array(4096),
      g = 256,
      h = a.length,
      k = 0,
      l = 1,
      m = 0,
      n = 1;
    c[d++] = a[0];
    for (var r = 1;; r++) {
      n = r + (r >> 1);
      if (n + 1 >= h) {
        break
      };
      var m = a[n + 1],
        n = a[n],
        p = r & 1 ? m << 4 | n >> 4 : (m & 15) << 8 | n;
      if (p < g) {
        if (256 > p) {
          m = d, n = 1, c[d++] = p
        } else {
          for (var m = d, n = f[p], p = e[p], q = p + n; p < q;) {
            c[d++] = c[p++]
          }
        }
      } else {
        if (p == g) {
          m = d;
          n = l + 1;
          p = k;
          for (q = k + l; p < q;) {
            c[d++] = c[p++]
          };
          c[d++] = c[k]
        } else {
          break
        }
      };
      e[g] = k;
      f[g++] = l + 1;
      k = m;
      l = n;
      g = 4096 <= g ? 256 : g
    };
    return d == b ? c : null
  }

  function _$af481909(a) {
    this.digits = new Uint16Array(a || 0)
  }

  function _$af481910(a, b) {
    var c = (a.length + 1) / 2 | 0;
    this.digits = new Uint16Array(c);
    if (b) {
      for (var d = 0, c = a.length - 1; 0 <= c; c -= 2) {
        this.digits[d++] = a[c] + (0 < c ? 256 * a[c - 1] : 0)
      }
    } else {
      for (d = 0; d < c; ++d) {
        this.digits[d] = a[2 * d] + 256 * a[2 * d + 1]
      }
    };
    this.trim()
  }

  function _$af481911() {
    var a = 0;
    0 < this.digits.length && (a = this.digits[0], 1 < this.digits.length && (a |= this.digits[1] << 16));
    return a
  }

  function _$af481912(a) {
    if (this.digits.length == a.digits.length) {
      for (var b = this.digits.length - 1; 0 <= b; --b) {
        var c = this.digits[b],
          d = a.digits[b];
        if (c != d) {
          return c < d
        }
      }
    };
    return this.digits.length < a.digits.length
  }

  function _$af481913() {
    for (var a = 0, b = this.digits, c = b.length - 1; 0 <= c; --c) {
      var d = b[c];
      b[c] = d >> 1 | a << 15;
      a = d
    };
    this.trim()
  }

  function _$af481914(a) {
    if (0 < a) {
      var b = a / 16 | 0;
      a %= 16;
      for (var c = 16 - a, d = this.digits.length + b + 1, e = new _$af481909(d), f = 0; f < d; ++f) {
        e.digits[f] = ((f < b || f >= this.digits.length + b ? 0 : this.digits[f - b]) << a | (f < b + 1 ? 0 : this.digits[f - b - 1]) >>> c) & 65535
      };
      e.trim();
      return e
    };
    return new _$af481909(this)
  }

  function _$af481915() {
    var a = 0;
    if (0 < this.digits.length) {
      for (var a = 16 * (this.digits.length - 1), b = this.digits[this.digits.length - 1]; b;) {
        b >>>= 1, ++a
      }
    };
    return a
  }

  function _$af481916(a) {
    var b = this.digits,
      c = a.digits,
      d = this.digits.length;
    a = a.digits.length;
    for (var e = 0, f = 0; f < d; ++f) {
      var g = b[f],
        h = f < a ? c[f] : 0,
        h = h + e,
        e = h > g ? 1 : 0,
        g = g + (e << 16);
      b[f] = g - h & 65535
    };
    this.trim()
  }

  function _$af481917(a) {
    for (var b = new _$af481909(this.digits.length + a.digits.length), c = b.digits, d = 0; d < this.digits.length; ++d) {
      for (var e = this.digits[d], f = 0; f < a.digits.length; ++f) {
        for (var g = e * a.digits[f], h = d + f; g;) {
          var k = (g & 65535) + c[h];
          c[h] = k & 65535;
          g >>>= 16;
          g += k >>> 16;
          ++h
        }
      }
    };
    b.trim();
    return b
  }

  function _$af481918(a) {
    if (0 >= this.digits.length || 0 >= a.digits.length) {
      return new _$af481909(0)
    };
    var b = new _$af481909(this.digits);
    if (!this.lessThan(a)) {
      for (var c = new _$af481909(a.digits), c = c.shiftLeft(b.bitCount() - c.bitCount()); !b.lessThan(a);) {
        c.lessThan(b) && b.sub(c), c.shiftRight()
      };
      b.trim()
    };
    return b
  }

  function _$af481919(a, b) {
    for (var c = new _$af481909([1]), d = this.mod(b); a;) {
      a & 1 && (c = c.mul(d).mod(b)), a >>>= 1, d = d.mul(d).mod(b)
    };
    return c
  }

  function _$af481920() {
    for (var a = this.digits.length; 0 < a && 0 == this.digits[a - 1];) {
      --a
    };
    a != this.digits.length && (this.digits = this.digits.subarray(0, a))
  }

  function _$af481921(a) {
    for (var b = 0; b < a.length; ++b) {
      var c = a[b].bounds;
      if (void(0) === this.min) {
        this.min = [c.min[0], c.min[1], c.min[2]], this.max = [c.max[0], c.max[1], c.max[2]]
      } else {
        for (var d = 0; 3 > d; ++d) {
          this.min[d] = Math.min(c.min[d], this.min[d]), this.max[d] = Math.max(c.max[d], this.max[d])
        }
      }
    };
    this.min = this.min ? this.min : [0, 0, 0];
    this.max = this.max ? this.max : [0, 0, 0];
    this.center = [0.5 * (this.min[0] + this.max[0]), 0.5 * (this.min[1] + this.max[1]), 0.5 * (this.min[2] + this.max[2])];
    this.radius = [this.max[0] - this.center[0], this.max[1] - this.center[1], this.max[2] - this.center[2]]
  }

  function _$af481922(a) {
    this.bytes = new Uint8Array(a)
  }

  function _$af481923() {
    return 0 >= this.bytes.length
  }

  function _$af481924() {
    for (var a = this.bytes, b = a.length, c = 0; c < b; ++c) {
      if (0 == a[c]) {
        return a = String.fromCharCode.apply(null, this.bytes.subarray(0, c)), this.bytes = this.bytes.subarray(c + 1), a
      }
    };
    return null
  }

  function _$af481925() {
    for (var a = "", b = 0; b < this.bytes.length; ++b) {
      a += String.fromCharCode(this.bytes[b])
    };
    return a
  }

  function _$af481926(a) {
    var b = this.bytes.subarray(0, a);
    this.bytes = this.bytes.subarray(a);
    return b
  }

  function _$af481927() {
    var a = this.bytes,
      b = a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24;
    this.bytes = a.subarray(4);
    return b
  }

  function _$af481928(a) {
    a = a || {};
    if (document.location.search) {
      for (var b = document.location.search.substring(1).split("&"), c = 0; c < b.length; ++c) {
        var d = b[c].split("=");
        a[d[0]] = d[1]
      }
    };
    b = function(a) {
      if (a | 0) {
        return !0
      };
      for (var b = "true True TRUE yes Yes YES".split(" "), c = 0; c < b.length; ++c) {
        if (a === b[c]) {
          return !0
        }
      };
      return !1
    };
    a.width = a.width || 800;
    a.height = a.height || 600;
    a.autoStart = b(a.autoStart);
    a.pagePreset = b(a.pagePreset);
    a.fullFrame = b(a.fullFrame) || b(a.bare);
    a.fullFrame = !a.pagePreset && a.fullFrame;
    return a
  }

  function _$af481930(a, b) {
    var c;
    b = prepareEmbedParams(b);
    var d = b.thumbnailURL;
    if (b.pagePreset) {
      c = new _$af482216(b.width, b.height, a, !!d);
      document.body.style.backgroundColor = "#d7e4da";
      var e = document.createElement("div");
      e.style.position = "relative";
      e.style.backgroundColor = "#e4e7e4";
      e.style.width = b.width + 12 + "px";
      e.style.height = b.height + 6 + 16 + "px";
      e.style.margin = "auto";
      e.style.boxShadow = "3px 5px 12px 0px grey";
      document.body.appendChild(e);
      var f = document.createElement("div");
      f.style.position = "relative";
      f.style.left = "6px";
      f.style.top = "6px";
      e.appendChild(f);
      f.appendChild(c.domRoot);
      if (!c.mobile) {
        e.style.resize = "both";
        e.style.overflow = "hidden";
        var g = [e.style.width, e.style.height],
          h = function() {
            if (FullScreen.active()) {
              e.style.resize = "none"
            } else {
              if (e.style.resize = "both", g[0] != e.style.width || g[1] != e.style.height) {
                g[0] = e.style.width, g[1] = e.style.height, c.resize(e.clientWidth - 12, e.clientHeight - 6 - 16)
              }
            };
            window.setTimeout(h, 100)
          };
        h()
      }
    } else {
      if (fdage.edit) {
        var p = dom.cla("webgl", dom.cla("editor-view-inner", dom.cla("editor")[0])[0])[0];
        c = new _$af482216(b.fullFrame ? p.clientWidth : b.width, b.fullFrame ? p.clientHeight : b.height, a, !!d), webview = c, p.appendChild(c.domRoot)
      } else {
        c = new _$af482216(b.fullFrame ? window.innerWidth : b.width, b.fullFrame ? window.innerHeight : b.height, a, !!d), document.body.appendChild(c.domRoot)
      }
    };
    b.fullFrame && (c.domRoot.style.position = "absolute", c.domRoot.style.left = c.domRoot.style.top = 0, window.addEventListener("resize", function() {
      if (fdage.edit) {
        FullScreen.active() || c.resize(p.clientWidth, p.clientHeight)
      } else {
        FullScreen.active() || c.resize(window.innerWidth, window.innerHeight)
      }
    }));
    c.ui.setThumbnailURL(d);
    b.autoStart && c.loadScene();
    return c
  }

  function _$af481933(a, b, c, d) {
    var e = -1 == a.indexOf("?") ? "?" : "&";
    Network.fetchBinaryIncremental(a + e + "thumb=1", function(a) {
      (a = (new _$af481904(a)).extract("thumbnail.jpg")) ? _$af482130.parseFile(a, b, d): c && c();
      return 0
    }, c, 71680)
  }

  function _$af481935(a, b) {
    this.gl = a;
    this.fbo = a.createFramebuffer();
    a.bindFramebuffer(a.FRAMEBUFFER, this.fbo);
    b && (this.width = b.width, this.height = b.height, b.color0 && (this.color0 = b.color0, a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.color0.id, 0), this.width = b.color0.desc.width, this.height = b.color0.desc.height), b.depth ? (this.depth = b.depth, a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, this.depth.id, 0)) : (this.depthBuffer = b.depthBuffer, b.createDepth && !this.depthBuffer && (this.depthBuffer = _$af481935.createDepthBuffer(a, this.width, this.height)), this.depthBuffer && (a.bindRenderbuffer(a.RENDERBUFFER, this.depthBuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, this.depthBuffer), a.bindRenderbuffer(a.RENDERBUFFER, null))));
    this.valid = b && b.ignoreStatus || a.checkFramebufferStatus(a.FRAMEBUFFER) == a.FRAMEBUFFER_COMPLETE;
    a.bindFramebuffer(a.FRAMEBUFFER, null)
  }

  function _$af481936(a, b, c) {
    var d = a.createRenderbuffer();
    a.bindRenderbuffer(a.RENDERBUFFER, d);
    a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, b, c);
    a.bindRenderbuffer(a.RENDERBUFFER, null);
    return d
  }

  function _$af481937() {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
    this.gl.viewport(0, 0, this.width, this.height)
  }

  function _$af481938(a) {
    a.bindFramebuffer(a.FRAMEBUFFER, null)
  }

  function _$af481939() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
  }

  function _$af481940(a, b) {
    var c = a.requestFullscreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullscreen;
    if (c) {
      var d = function() {
        FullScreen.active() || (document.removeEventListener("fullscreenchange", d), document.removeEventListener("webkitfullscreenchange", d), document.removeEventListener("mozfullscreenchange", d), document.removeEventListener("MSFullscreenChange", d));
        b && b()
      };
      document.addEventListener("fullscreenchange", d);
      document.addEventListener("webkitfullscreenchange", d);
      document.addEventListener("mozfullscreenchange", d);
      document.addEventListener("MSFullscreenChange", d);
      c.bind(a)()
    }
  }

  function _$af481942() {
    var a = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
    a && a.bind(document)()
  }

  function _$af481943() {
    return !!(document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreenElement || document.msFullscreenElement)
  }

  function _$af481944(a) {
    this.onTap = [];
    this.onSingleTap = [];
    this.onDoubleTap = [];
    this.onDrag = [];
    this.onZoom = [];
    this.onPan = [];
    this.onPan2 = [];
    this.onAnything = [];
    this.macHax = 0 <= navigator.platform.toUpperCase().indexOf("MAC");
    a && this.attach(a)
  }

  function _$af481945(a) {
    this.element = a;
    var b = function(a) {
      for (var b = 0; b < this.onAnything.length; ++b) {
        this.onAnything[b]()
      }
    }.bind(this);
    this.mouseStates = [{
      pressed: !1,
      position: [0, 0],
      downPosition: [0, 0]
    }, {
      pressed: !1,
      position: [0, 0],
      downPosition: [0, 0]
    }, {
      pressed: !1,
      position: [0, 0],
      downPosition: [0, 0]
    }];
    this.lastTapPos = [0, 0];
    a = function(a) {
      if (a.target === this.element) {
        var d = this.mouseStates[a.button];
        if (d) {
          d.downTime = Date.now();
          d.pressed = !0;
          if (gui.selectCon) {
            var index = gui.selectCon.type === "lightTransLine" ? gui.lightEdit : gui.selectLightTarget;
            var light = webview.scene.lights.lights[index];
            var tranCon = gui.selectCon.type === "lightTransLine" ? light.tranCon : light.targetCon.tranCon;
            var line = tranCon.axis[tranCon.selectAxis].axisLine;
            var p1 = line.pos2d.slice(0, 3);
            var p2 = line.pos2d.slice(4, 7);
            var v = [p2[0] - p1[0], p2[1] - p1[1]];
            var len = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
            gui.selectCon.lineP1P2 = [v[0] / len, v[1] / len]
          };
          var e = this.element.getBoundingClientRect();
          d.position[0] = d.downPosition[0] = a.clientX - e.left;
          d.position[1] = d.downPosition[1] = a.clientY - e.top;
          b(a)
        }
      }
    }.bind(this);
    this.element.addEventListener("mousedown", a);
    a = function(a) {
      var d = this.mouseStates[a.button];
      if (d) {
        var e = this.element.getBoundingClientRect(),
          f = a.clientX - e.left,
          e = a.clientY - e.top;
        d.pressed = !1;
        d.position[0] = f;
        d.position[1] = e;
        if (0 == a.button && a.target == this.element && 10 > Math.abs(d.position[0] - d.downPosition[0]) + Math.abs(d.position[1] - d.downPosition[1])) {
          if (gui && gui.state === "LIGHT" && Date.now() - d.downTime < 300) {
            var z = -Infinity;
            var clicked = null;
            gui.selectLightTarget = null;
            var lights = webview.scene.lights.lights;
            for (var i = 0; i < lights.length; i++) {
              lights[i].targetCon.tranCon.visible = false;
              var zz = lights[i].sprite.isClicked(f, e);
              if (zz && zz > z) {
                clicked = i;
                z = zz
              }
            };
            if (clicked != null) {
              if (gui.lightEdit !== clicked) {
                var ev = document.createEvent("MouseEvent");
                ev.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                gui.modeObj[4].ul[0].children[clicked].dispatchEvent(ev)
              }
            } else {
              z = -Infinity;
              for (var j = 0; j < lights.length; j++) {
                if (lights[j].type == 1) {
                  continue
                };
                var zz = lights[j].targetCon.sphere.isClicked(f, e);
                if (zz && zz > z) {
                  clicked = j;
                  z = zz
                }
              };
              if (clicked != null) {
                gui.selectLightTarget = clicked;
                if (gui.lightEdit !== clicked) {
                  var ev = document.createEvent("MouseEvent");
                  ev.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                  gui.modeObj[4].ul[0].children[clicked].dispatchEvent(ev)
                };
                lights[clicked].targetCon.tranCon.visible = true;
                webview.updateView(true, false, 1)
              } else {
                if (gui.lightEdit != void(0)) {
                  var ev = document.createEvent("MouseEvent");
                  ev.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                  gui.modeObj[4].ul[0].children[gui.lightEdit].dispatchEvent(ev)
                }
              }
            }
          };
          for (var g = 0; g < this.onTap.length; ++g) {
            this.onTap[g](f, e)
          };
          this.needSingleClick = !0;
          window.setTimeout(function(a, b) {
            if (this.needSingleClick) {
              for (var c = 0; c < this.onSingleTap.length; ++c) {
                this.onSingleTap[c](a, b)
              };
              this.needSingleClick = !1
            }
          }.bind(this, f, e), 301);
          d = !1;
          if (void(0) !== this.doubleClickTimer && (g = 8 > Math.abs(f - this.lastTapPos[0]) + Math.abs(e - this.lastTapPos[1]), 300 > Date.now() - this.doubleClickTimer && g)) {
            for (d = !0, this.needSingleClick = !1, g = 0; g < this.onDoubleTap.length; ++g) {
              this.onDoubleTap[g](f, e, a)
            }
          };
          this.doubleClickTimer = Date.now();
          d && (this.doubleClickTimer = -1E9);
          this.lastTapPos[0] = f;
          this.lastTapPos[1] = e
        }
      };
      b(a)
    }.bind(this);
    this.element.addEventListener("mouseup", a);
    a = function(a) {
      for (var d = !1, e = 0; 3 > e; ++e) {
        var f = this.mouseStates[e];
        var g = this.element.getBoundingClientRect(),
          d = a.clientX - g.left,
          d1 = a.clientY - g.top,
          h = d - f.position[0],
          k = d1 - f.position[1];
        if (f.pressed) {
          gui.tranFuncs.camera = [];
          f.position[0] = d;
          f.position[1] = d1;
          if (gui && gui.drawRect) {
            var x = f.downPosition[0] / g.width;
            var y = 1 - f.downPosition[1] / g.height;
            var we = (d - f.downPosition[0]) / g.width;
            var hi = (f.downPosition[1] - d1) / g.height;
            if (!webview.scene.rect) {
              new _$af482039(webview.gl, x, y, we, hi, [1, 0, 0, 1])
            } else {
              webview.scene.rect.update(x, y, we, hi)
            };
            webview.updateView(true)
          } else {
            if (gui.selectCon && gui.selectCon.lineP1P2) {
              var index = gui.selectCon.type === "lightTransLine" ? gui.lightEdit : gui.selectLightTarget;
              var light = webview.scene.lights.lights[index];
              var tranCon = gui.selectCon.type === "lightTransLine" ? light.tranCon : light.targetCon.tranCon;
              var line = tranCon.axis[tranCon.selectAxis].axisLine;
              var m1 = gui.selectCon.lastM2 ? gui.selectCon.lastM2 : [f.downPosition[0], f.downPosition[1]];
              var m2 = [d, d1];
              gui.selectCon.lastM2 = m2;
              var mouseM1M2 = [m2[0] - m1[0], -(m2[1] - m1[1])];
              var len = gui.selectCon.lineP1P2[0] * mouseM1M2[0] + gui.selectCon.lineP1P2[1] * mouseM1M2[1];
              if (gui.selectCon.type === "lightTransLine") {
                light.translate(tranCon.selectAxis, len, "lightTransLine")
              } else {
                light.translate(tranCon.selectAxis, len, "lightTargetTran")
              };
              webview.updateView(true, false, 1)
            } else {
              if (1 <= e || a.ctrlKey) {
                for (f = 0; f < this.onPan.length; ++f) {
                  this.onPan[f](h, k)
                }
              } else {
                if (0 == e) {
                  if (a.shiftKey) {
                    for (f = 0; f < this.onPan2.length; ++f) {
                      this.onPan2[f](h, k)
                    }
                  } else {
                    for (f = 0; f < this.onDrag.length; ++f) {
                      this.onDrag[f](d, d1, h, k)
                    }
                  }
                }
              }
            }
          };
          d = !0
        } else {
          if (e == 0 && gui && gui.state === "LIGHT") {
            gui.selectCon = null;
            if (gui.lightEdit != void(0)) {
              var tranCon = webview.scene.lights.lights[gui.lightEdit].tranCon;
              if (tranCon.visible) {
                var hover;
                var oldselect = tranCon.selectAxis;
                tranCon.selectAxis = null;
                for (var i in tranCon.axis) {
                  hover = tranCon.axis[i].axisLine.isHover(d, g.height - d1, g.width, g.height);
                  if (hover) {
                    tranCon.selectAxis = i;
                    gui.selectCon = {
                      type: "lightTransLine"
                    };
                    break
                  }
                };
                (tranCon.selectAxis != oldselect) && tranCon.setSelectColor()
              } else {
                console.log("tranCon unvisible but selected???")
              }
            };
            if (gui.selectCon == void(0) && gui.selectLightTarget != void(0)) {
              var light = webview.scene.lights.lights[gui.selectLightTarget];
              var tranCon = light.targetCon.tranCon;
              var hover;
              var oldselect = tranCon.selectAxis;
              tranCon.selectAxis = null;
              for (var i in tranCon.axis) {
                hover = tranCon.axis[i].axisLine.isHover(d, g.height - d1, g.width, g.height);
                if (hover) {
                  tranCon.selectAxis = i;
                  gui.selectCon = {
                    type: "lightTargetTran"
                  };
                  break
                }
              };
              (tranCon.selectAxis != oldselect) && tranCon.setSelectColor()
            }
          }
        }
      };
      d && b(a)
    }.bind(this);
    this.element.addEventListener("mousemove", a);
    a = function(a) {
      if (gui.drawRect) {
        return
      };
      gui.tranFuncs.camera = [];
      var d = 0;
      a.deltaY ? (d = -0.4 * a.deltaY, 1 == a.deltaMode ? d *= 16 : 2 == a.deltaMode && (d *= this.element.clientHeight)) : a.wheelDelta ? d = this.macHax && 120 == Math.abs(a.wheelDelta) ? 0.08 * a.wheelDelta : 0.4 * a.wheelDelta : a.detail && (d = -10 * a.detail);
      for (var e = 0; e < this.onZoom.length; ++e) {
        this.onZoom[e](d)
      };
      b(a)
    }.bind(this);
    this.element.addEventListener("mousewheel", a);
    this.element.addEventListener("DOMMouseScroll", a);
    this.element.addEventListener("wheel", a);
    a = function(a) {
      for (var b = 0; b < this.mouseStates.length; ++b) {
        this.mouseStates[b].pressed = !1
      };
      a.preventDefault()
    }.bind(this);
    this.element.addEventListener("mouseleave", a);
    this.element.addEventListener("contextmenu", function(a) {
      a.preventDefault()
    });
    this.touches = {};
    this.tapPossible = !1;
    this.touchCountFloor = 0;
    a = function(a) {
      for (var d = this.element.getBoundingClientRect(), e = !1, f = 0; f < a.changedTouches.length; ++f) {
        if (a.target === this.element) {
          var g = a.changedTouches[f],
            e = {
              x: g.clientX - d.left,
              y: g.clientY - d.top
            };
          e.startX = e.x;
          e.startY = e.y;
          this.touches[g.identifier] = e;
          e = !0
        }
      };
      this.tapPossible = 1 == a.touches.length;
      for (g = d = 0; g < this.touches.length; ++g) {
        d++
      };
      d > this.touchCountFloor && (this.touchCountFloor = d);
      e && b(a)
    }.bind(this);
    this.element.addEventListener("touchstart", a);
    a = function(a) {
      for (var d = !1, e = 0; e < a.changedTouches.length; ++e) {
        var f = a.changedTouches[e],
          g = this.touches[f.identifier];
        if (g) {
          if (this.tapPossible) {
            var h = this.element.getBoundingClientRect(),
              d = f.clientX - h.left,
              h = f.clientY - h.top;
            if (24 > Math.max(Math.abs(d - g.startX), Math.abs(h - g.startY))) {
              for (e = 0; e < this.onTap.length; ++e) {
                this.onTap[e](d, h)
              };
              this.needSingleTap = !0;
              window.setTimeout(function(a, b) {
                if (this.needSingleTap) {
                  for (var c = 0; c < this.onSingleTap.length; ++c) {
                    this.onSingleTap[c](a, b)
                  };
                  this.needSingleTap = !1
                }
              }.bind(this, d, h), 501);
              g = !1;
              if (void(0) !== this.doubleTapTimer) {
                var k = 24 > Math.max(Math.abs(d - this.lastTapPos[0]), Math.abs(h - this.lastTapPos[1])),
                  l = 500 > Date.now() - this.doubleTapTimer;
                if (k && l) {
                  for (g = !0, e = 0; e < this.onDoubleTap.length; ++e) {
                    this.onDoubleTap[e](d, h, a)
                  }
                }
              };
              this.doubleTapTimer = Date.now();
              g && (this.doubleTapTimer = -1E9);
              this.lastTapPos[0] = d;
              this.lastTapPos[1] = h
            };
            this.tapPossible = !1
          };
          delete this.touches[f.identifier];
          d = !0
        }
      };
      for (f = e = 0; f < this.touches.length; ++f) {
        e++
      };
      0 >= e && (this.touchCountFloor = 0);
      d && b(a)
    }.bind(this);
    this.element.addEventListener("touchend", a);
    this.element.addEventListener("touchcancel", a);
    this.element.addEventListener("touchleave", a);
    a = function(a) {
      a.preventDefault();
      for (var d = [], e = 0; e < a.touches.length; ++e) {
        a.touches[e].target === this.element && d.push(a.touches[e])
      };
      var f = this.element.getBoundingClientRect();
      if (gui && gui.drawRect) {
        if (1 == d.length && 1 >= this.touchCountFloor) {
          var g = d[0],
            h = this.touches[g.identifier];
          if (h) {
            var k = g.clientX - f.left,
              g = g.clientY - f.top;
            var x = h.startX / f.width;
            var y = 1 - h.startY / f.height;
            var we = (k - h.startX) / f.width;
            var hi = (h.startY - g) / f.height;
            if (!webview.scene.rect) {
              new _$af482039(webview.gl, x, y, we, hi, [1, 0, 0, 1])
            } else {
              webview.scene.rect.update(x, y, we, hi)
            };
            webview.updateView(true)
          }
        };
        return
      };
      gui.tranFuncs.camera = [];
      if (1 == d.length && 1 >= this.touchCountFloor) {
        var g = d[0],
          h = this.touches[g.identifier];
        if (h) {
          var k = g.clientX - f.left,
            g = g.clientY - f.top,
            f = k - h.x,
            l = g - h.y;
          h.x = k;
          h.y = g;
          for (e = 0; e < this.onDrag.length; ++e) {
            this.onDrag[e](k, g, f, l, a.shiftKey)
          }
        }
      } else {
        if (2 == d.length && 2 >= this.touchCountFloor) {
          if (l = d[0], e = this.touches[l.identifier], g = d[1], h = this.touches[g.identifier], e && h) {
            var k = l.clientX - f.left,
              l = l.clientY - f.top,
              m = g.clientX - f.left,
              n = g.clientY - f.top,
              r = Math.sqrt((k - m) * (k - m) + (l - n) * (l - n)),
              p = Math.sqrt((e.x - h.x) * (e.x - h.x) + (e.y - h.y) * (e.y - h.y)),
              q = Math.abs(r - p),
              f = (k - e.x + m - h.x) / 2,
              g = (l - e.y + n - h.y) / 2,
              u = Math.sqrt(f * f + g * g);
            e.x = k;
            e.y = l;
            h.x = m;
            h.y = n;
            if (0 < q) {
              for (h = q / (q + u), e = 0; e < this.onZoom.length; ++e) {
                this.onZoom[e](2 * (r - p) * h)
              }
            };
            if (0 < u) {
              for (h = u / (q + u), e = 0; e < this.onDrag.length; ++e) {
                this.onPan[e](f * h, g * h)
              }
            }
          }
        } else {
          if (3 <= d.length) {
            for (e = p = r = m = l = 0; e < d.length; ++e) {
              g = d[e], h = this.touches[g.identifier], k = g.clientX - f.left, g = g.clientY - f.top, r += k, p += g, h && (l += h.x, m += h.y, h.x = k, h.y = g)
            };
            l /= d.length;
            m /= d.length;
            r /= d.length;
            p /= d.length;
            for (e = 0; e < this.onPan2.length; ++e) {
              this.onPan2[e](r - l, p - m)
            }
          }
        }
      };
      0 < d.length && b(a)
    }.bind(this);
    this.element.addEventListener("touchmove", a)
  }

  function _$af481958(position, object, length) {
    this.gl = webview.gl;
    this.visible = true;
    this.position = position;
    this.object = object;
    this.axisLength = length || 1;
    this.selectAxis = null;
    this.axis = {
      x: {
        color: [1, 0.1, 0.1, 1]
      },
      y: {
        color: [0.1, 0.1, 1, 1]
      },
      z: {
        color: [0.1, 1, 0.1, 1]
      }
    };
    for (var i in this.axis) {
      this.axis[i].cone = new _$af481965(0.4, 1.309, i, this.axisLength, position);
      this.axis[i].axisLine = this.createLine(this.axisLength, i, this.axis[i].color, position)
    };
    this.shader = this.gl.shaderCache.fromURLs("standardvert.glsl", "standardfrag.glsl")
  }

  function _$af481959(length, axis, color, position) {
    var points = [
      [0, 0, 0],
      [0, length, 0]
    ];
    preTransform(points, {
      axis: axis,
      position: position
    });
    return new _$af482045(webview.gl, null, points[0], points[1], color, 0, 0, 0)
  }

  function _$af481960(matrixWeight) {
    var b = this.gl;
    b.enable(b.CULL_FACE), b.cullFace(b.BACK);
    b.enable(b.BLEND);
    b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
    var ScaleMatrix = getScaleMatrix(this.position, matrixWeight);
    if (matrixWeight == 1) {
      var pos2 = [];
      Matrix.mulPoint(pos2, webview.scene.lights.invMatrix, this.position[0], this.position[1], this.position[2]);
      var tranM = Matrix.identity();
      tranM[12] = pos2[0] - this.position[0];
      tranM[13] = pos2[1] - this.position[1];
      tranM[14] = pos2[2] - this.position[2];
      Matrix.mul(ScaleMatrix, tranM, ScaleMatrix)
    };
    for (var i in this.axis) {
      this.shader.bind();
      var p = this.shader.params;
      var matrix = Matrix.empty();
      Matrix.copy(matrix, ScaleMatrix);
      var m = Matrix.mul(Matrix.empty(), webview.scene.view.projectionMatrix, webview.scene.view.viewMatrix);
      Matrix.mul(matrix, m, matrix);
      b.uniformMatrix4fv(p.uModelViewProjectionMatrix, !1, matrix);
      var a = this.shader.attribs;
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.axis[i].cone.indexBuffer);
      b.bindBuffer(b.ARRAY_BUFFER, this.axis[i].cone.vertexBuffer);
      b.enableVertexAttribArray(a.pos);
      b.vertexAttribPointer(a.pos, 3, b.FLOAT, !1, 12, 0);
      b.depthFunc(b.LEQUAL);
      this.axis[i].color[3] = 0.8;
      b.uniform4fv(p.uColor, this.axis[i].color);
      b.drawElements(b.TRIANGLES, this.axis[i].cone.indexCount, b.UNSIGNED_SHORT, 0);
      b.depthFunc(b.ALWAYS);
      this.axis[i].color[3] = 0.2;
      b.uniform4fv(p.uColor, this.axis[i].color);
      b.drawElements(b.TRIANGLES, this.axis[i].cone.indexCount, b.UNSIGNED_SHORT, 0);
      b.disableVertexAttribArray(a.pos);
      b.bindBuffer(b.ARRAY_BUFFER, null);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
      b.depthFunc(b.LEQUAL);
      this.axis[i].axisLine.draw(webview.scene, ScaleMatrix, 0.7);
      var p1 = this.axis[i].axisLine.position.slice(0, 3);
      var p2 = this.axis[i].axisLine.position.slice(3, 6);
      p1 = turn3dTo2d(p1, this.axis[i].axisLine.lineMatrix);
      p2 = turn3dTo2d(p2, this.axis[i].axisLine.lineMatrix);
      this.axis[i].axisLine.pos2d = p1.concat(p2)
    }
  }

  function _$af481961() {
    for (var i in this.axis) {
      for (var j = 0; j < 3; j++) {
        if (i == this.selectAxis) {
          this.axis[i].color[0] = 1, this.axis[i].color[1] = 1, this.axis[i].color[2] = 0
        } else {
          switch (i) {
            case "x":
              this.axis[i].color[0] = 1, this.axis[i].color[1] = 0.05, this.axis[i].color[2] = 0.05;
              break;
            case "y":
              this.axis[i].color[0] = 0.05, this.axis[i].color[1] = 1, this.axis[i].color[2] = 0.05;
              break;
            case "z":
              this.axis[i].color[0] = 0.05, this.axis[i].color[1] = 0.05, this.axis[i].color[2] = 1;
              break
          }
        }
      }
    };
    webview.updateView(true, false, 0)
  }

  function _$af481962(pos, transMatrix) {
    this.position = pos.slice(0, 3);
    for (var i in this.axis) {
      for (var j = 0; j < this.axis[i].cone.points.length; j++) {
        var pos = this.axis[i].cone.points[j];
        Matrix.mulPoint(pos, transMatrix, pos[0], pos[1], pos[2])
      };
      this.axis[i].cone.updateVertexBuffer();
      var pos1 = this.axis[i].axisLine.position.slice(0, 3);
      var pos2 = this.axis[i].axisLine.position.slice(3, 6);
      Matrix.mulPoint(pos1, transMatrix, pos1[0], pos1[1], pos1[2]);
      Matrix.mulPoint(pos2, transMatrix, pos2[0], pos2[1], pos2[2]);
      this.axis[i].axisLine.position = pos1.concat(pos2);
      this.axis[i].axisLine.updateVertexBuffer()
    }
  }

  function _$af481963(points, o) {
    var m = Matrix.identity();
    if (o.axis) {
      if (o.axis == "x") {
        m = Matrix.rotation(Matrix.empty(), -90, 2)
      } else {
        if (o.axis == "z") {
          m = Matrix.rotation(Matrix.empty(), 90, 0)
        }
      }
    };
    if (o.scale) {
      var scale = Matrix.identity();
      scale[0] = scale[5] = scale[10] = o.scale;
      Matrix.mul(m, scale, m)
    };
    if (o.position) {
      var tr = Matrix.identity();
      Matrix.translation(tr, o.position[0], o.position[1], o.position[2]);
      Matrix.mul(m, tr, m)
    };
    for (var i = 0; i < points.length; i++) {
      points[i] = Matrix.mulPoint(points[i], m, points[i][0], points[i][1], points[i][2])
    }
  }

  function _$af481964(pos, matrixWeight) {
    var r = 0.05;
    var pos = pos.slice(0);
    var newPos = pos.slice(0);
    if (matrixWeight == 1) {
      Matrix.mulPoint(newPos, webview.scene.lights.invMatrix, pos[0], pos[1], pos[2])
    };
    Matrix.mul4(newPos, webview.scene.view.viewProjectionMatrix, newPos[0], newPos[1], newPos[2], 1);
    var s = newPos[2] * r;
    var m = Matrix.translation(Matrix.empty(), -pos[0], -pos[1], -pos[2]);
    var scale = Matrix.identity();
    scale[0] = scale[5] = scale[10] = s;
    Matrix.mul(m, scale, m);
    var m2 = Matrix.translation(Matrix.empty(), pos[0], pos[1], pos[2]);
    Matrix.mul(m, m2, m);
    return m
  }

  function _$af481965(h, angle, axis, len, position) {
    this.gl = webview.gl;
    var r = h / Math.tan(angle);
    this.points = [
      [0, 0, 0],
      [-r, -h, 0],
      [-0.707 * r, -h, -0.707 * r],
      [0, -h, -r],
      [0.707 * r, -h, -0.707 * r],
      [r, -h, 0],
      [0.707 * r, -h, 0.707 * r],
      [0, -h, r],
      [-0.707 * r, -h, 0.707 * r]
    ];
    for (var i = 0; i < this.points.length; i++) {
      this.points[i][1] += len
    };
    preTransform(this.points, {
      axis: axis,
      position: position
    });
    this.indexBuffer = this.gl.createBuffer();
    this.vertexBuffer = this.gl.createBuffer();
    var a = new Uint16Array([0, 2, 1, 0, 3, 2, 0, 4, 3, 0, 5, 4, 0, 6, 5, 0, 7, 6, 0, 8, 7, 0, 1, 8, 1, 2, 8, 6, 7, 8, 4, 5, 6, 2, 3, 4, 2, 6, 8, 2, 4, 6]);
    this.indexCount = a.length;
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    this.updateVertexBuffer()
  }

  function _$af481966() {
    var a = [];
    for (var i = 0; i < this.points.length; i++) {
      a = a.concat(this.points[i])
    };
    a = new Float32Array(a);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null)
  }

  function _$af481967(direction, position, object, length) {
    this.gl = webview.gl;
    this.visible = true;
    this.lightObject = object;
    this.position = position.slice(0, 3);
    this.direction = direction.slice(0, 3);
    this.length = length || 3;
    this.position2 = this.getPos2ByDir();
    this.color = [0.5, 0.5, 0.5, 1];
    this.line = new _$af482045(webview.gl, null, this.position, this.position2, this.color, 0, 0, 0);
    this.sphere = new _$af481971(this.position2, this);
    this.shader = this.gl.shaderCache.fromURLs("standardvert.glsl", "standardfrag.glsl");
    this.tranCon = new _$af481958(this.position2, this.sphere, 1.2);
    this.tranCon.visible = false
  }

  function _$af481968() {
    var disLen = Math.sqrt(this.direction[0] * this.direction[0] + this.direction[1] * this.direction[1] + this.direction[2] * this.direction[2]);
    var a = this.length / disLen;
    var d = [this.direction[0] * a, this.direction[1] * a, this.direction[2] * a];
    var p2 = [this.position[0] - d[0], this.position[1] - d[1], this.position[2] - d[2]];
    return p2
  }

  function _$af481969() {
    var b = this.gl;
    b.enable(b.CULL_FACE), b.cullFace(b.BACK);
    b.enable(b.BLEND);
    b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
    var ScaleMatrix = getScaleMatrix(this.position2, this.lightObject.matrixWeight);
    if (this.lightObject.matrixWeight == 1) {
      Matrix.mul(ScaleMatrix, webview.scene.lights.invMatrix, ScaleMatrix);
      this.line.draw(webview.scene, webview.scene.lights.invMatrix, 0.8)
    } else {
      this.line.draw(webview.scene, null, 0.8)
    };
    this.shader.bind();
    var p = this.shader.params;
    var matrix = Matrix.identity();
    Matrix.copy(matrix, ScaleMatrix);
    var m = Matrix.mul(Matrix.empty(), webview.scene.view.projectionMatrix, webview.scene.view.viewMatrix);
    Matrix.mul(matrix, m, matrix);
    b.uniformMatrix4fv(p.uModelViewProjectionMatrix, !1, matrix);
    var a = this.shader.attribs;
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.sphere.indexBuffer);
    b.bindBuffer(b.ARRAY_BUFFER, this.sphere.vertexBuffer);
    b.enableVertexAttribArray(a.pos);
    b.vertexAttribPointer(a.pos, 3, b.FLOAT, !1, 12, 0);
    b.depthFunc(b.LEQUAL);
    this.color[3] = 0.8;
    b.uniform4fv(p.uColor, this.color);
    b.drawElements(b.TRIANGLES, this.sphere.indexCount, b.UNSIGNED_SHORT, 0);
    b.depthFunc(b.ALWAYS);
    this.color[3] = 0.2;
    b.uniform4fv(p.uColor, this.color);
    b.drawElements(b.TRIANGLES, this.sphere.indexCount, b.UNSIGNED_SHORT, 0);
    b.disableVertexAttribArray(a.pos);
    b.bindBuffer(b.ARRAY_BUFFER, null);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
    b.depthFunc(b.LEQUAL);
    this.tranCon.visible && this.tranCon.draw(this.lightObject.matrixWeight)
  }

  function _$af481970(pos, tranM, type) {
    if (type === "lightTransLine") {
      this.position = pos.slice(0, 3)
    } else {
      this.position2 = pos.slice(0, 3);
      for (var i = 0; i < this.sphere.points.length; i++) {
        var pos = this.sphere.points[i];
        Matrix.mulPoint(pos, tranM, pos[0], pos[1], pos[2])
      };
      this.sphere.position = this.position2;
      this.sphere.updateVertexBuffer();
      this.tranCon.changePosition(this.position2, tranM)
    };
    this.line.position = this.position.concat(this.position2);
    this.line.updateVertexBuffer();
    var dir = [this.position[0] - this.position2[0], this.position[1] - this.position2[1], this.position[2] - this.position2[2]];
    this.lightObject.direction = dir;
    webview.scene.lights.changeDirection(this.lightObject.index);
    if (this.lightObject.type == 0) {
      this.lightObject.position = dir.concat([0]);
      webview.scene.lights.changePosition(this.lightObject.index)
    }
  }

  function _$af481971(position, object) {
    this.conObject = object;
    this.gl = webview.gl;
    this.points = [
      [-0.000000, 1.000000, -0.000000],
      [0.353553, 0.866025, -0.353553],
      [0.612372, 0.500000, -0.612373],
      [0.707107, -0.000000, -0.707107],
      [0.612372, -0.500000, -0.612372],
      [0.353553, -0.866025, -0.353553],
      [0.500000, 0.866025, -0.000000],
      [0.866025, 0.500000, -0.000000],
      [1.000000, -0.000000, -0.000000],
      [0.866025, -0.500000, -0.000000],
      [0.500000, -0.866025, -0.000000],
      [0.353553, 0.866025, 0.353553],
      [0.612372, 0.500000, 0.612372],
      [0.707107, -0.000000, 0.707106],
      [0.612372, -0.500000, 0.612372],
      [0.353553, -0.866025, 0.353553],
      [-0.000000, 0.866025, 0.500000],
      [0.000000, 0.500000, 0.866025],
      [0.000000, -0.000000, 1.000000],
      [0.000000, -0.500000, 0.866025],
      [-0.000000, -0.866025, 0.500000],
      [-0.353553, 0.866025, 0.353553],
      [-0.612372, 0.500000, 0.612372],
      [-0.707107, -0.000000, 0.707106],
      [-0.612372, -0.500000, 0.612372],
      [-0.353553, -0.866025, 0.353553],
      [-0.500000, 0.866025, -0.000000],
      [-0.866025, 0.500000, -0.000000],
      [-1.000000, -0.000000, -0.000000],
      [-0.866025, -0.500000, -0.000000],
      [-0.500000, -0.866025, -0.000000],
      [-0.353553, 0.866025, -0.353553],
      [-0.612372, 0.500000, -0.612372],
      [-0.707107, -0.000000, -0.707107],
      [-0.612372, -0.500000, -0.612372],
      [-0.353553, -0.866025, -0.353553],
      [0.000000, 0.866025, -0.500000],
      [-0.000000, 0.500000, -0.866025],
      [0.000000, -0.000000, -1.000000],
      [0.000000, -0.500000, -0.866025],
      [-0.000000, -0.866025, -0.500000],
      [0.000000, -1.000000, -0.000000]
    ];
    this.position = position.slice(0, 3);
    preTransform(this.points, {
      scale: 0.1,
      position: position
    });
    this.indexBuffer = this.gl.createBuffer();
    this.vertexBuffer = this.gl.createBuffer();
    var a = new Uint16Array([36, 0, 1, 41, 40, 5, 39, 38, 3, 39, 3, 4, 37, 36, 1, 37, 1, 2, 40, 39, 4, 40, 4, 5, 38, 37, 2, 38, 2, 3, 41, 5, 10, 4, 3, 8, 4, 8, 9, 2, 1, 6, 2, 6, 7, 5, 4, 9, 5, 9, 10, 3, 2, 7, 3, 7, 8, 1, 0, 6, 9, 8, 13, 9, 13, 14, 7, 6, 11, 7, 11, 12, 10, 9, 14, 10, 14, 15, 8, 7, 12, 8, 12, 13, 6, 0, 11, 41, 10, 15, 12, 11, 16, 12, 16, 17, 15, 14, 19, 15, 19, 20, 13, 12, 17, 13, 17, 18, 11, 0, 16, 41, 15, 20, 14, 13, 18, 14, 18, 19, 20, 19, 24, 20, 24, 25, 18, 17, 22, 18, 22, 23, 16, 0, 21, 41, 20, 25, 19, 18, 23, 19, 23, 24, 17, 16, 21, 17, 21, 22, 25, 24, 29, 25, 29, 30, 23, 22, 27, 23, 27, 28, 21, 0, 26, 41, 25, 30, 24, 23, 28, 24, 28, 29, 22, 21, 26, 22, 26, 27, 30, 29, 34, 30, 34, 35, 28, 27, 32, 28, 32, 33, 26, 0, 31, 41, 30, 35, 29, 28, 33, 29, 33, 34, 27, 26, 31, 27, 31, 32, 35, 34, 39, 35, 39, 40, 33, 32, 37, 33, 37, 38, 31, 0, 36, 41, 35, 40, 34, 33, 38, 34, 38, 39, 32, 31, 36, 32, 36, 37]);
    this.indexCount = a.length;
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    this.updateVertexBuffer()
  }

  function _$af481972() {
    var a = [];
    for (var i = 0; i < this.points.length; i++) {
      a = a.concat(this.points[i])
    };
    a = new Float32Array(a);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null)
  }

  function _$af481973(x, y) {
    var w = 12;
    var r = webview.canvas.getBoundingClientRect();
    var matrixPos = this.position.slice(0);
    if (this.conObject.lightObject.matrixWeight == 1) {
      Matrix.mulPoint(matrixPos, webview.scene.lights.invMatrix, matrixPos[0], matrixPos[1], matrixPos[2])
    };
    var pos2d = turn3dTo2d(matrixPos);
    var pos = [(pos2d[0] + 1) / 2 * r.width, (-pos2d[1] + 1) / 2 * r.height];
    if (x > pos[0] - w && x < pos[0] + w && y > pos[1] - w && y < pos[1] + w) {
      return pos2d[2]
    } else {
      return null
    }
  }

  function _$af481974() {
    this.visible = true
  }

  function _$af481975(a, index) {
    this.index = index;
    var length = a && a.positions ? a.positions.length / 4 : 0;
    var textures = ["sun", "bulb", "spot"];
    if (index < length) {
      this.position = a.positions.slice(index * 4, index * 4 + 4);
      this.direction = a.directions.slice(index * 3, index * 3 + 3);
      this.matrixWeight = a.matrixWeights[index];
      this.parameter = a.parameters.slice(index * 3, index * 3 + 3);
      this.color = a.colors.slice(index * 3, index * 3 + 3);
      this.spot = a.spot.slice(index * 3, index * 3 + 3);
      this.on = a.on ? a.on[index] : 1;
      this.shadow = a.shadow ? a.shadow[index] : ((index < a.shadowCount) ? 1 : 0);
      this.type = a.type ? a.type[index] : this.recognizeType();
      this.strength = a.strength ? a.strength[index] : 1;
      this.realPosition = a.realPositions ? a.realPositions.slice(index * 3, index * 3 + 3) : (this.type == 0 ? (0, index, 0) : this.position.slice(0, 3));
      this.preDealColor()
    } else {
      if (index == 0) {
        this.position = [0, 14, 14, 0];
        this.direction = [0, 14, 14]
      } else {
        if (index == 1) {
          this.position = [-13, 0, -13, 0];
          this.direction = [-13, 0, -13]
        } else {
          this.position = [13, -13, -6, 0];
          this.direction = [13, -13, -5]
        }
      };
      this.matrixWeight = 0;
      this.parameter = [-2, 1, 0];
      this.color = [1, 1, 1];
      this.strength = 1;
      this.spot = [-1, 1, 0];
      this.on = 0;
      this.shadow = 0;
      this.type = 0
    };
    this.distance = this.parameter[2] == 0 ? 5 : this.getDistance();
    this.angle = (this.getAngle() == -1) ? 30 : this.getAngle();
    this.sharpness = this.getSharpness();
    this.realPosition = this.position.slice(0, 3);
    this.matrixPosition = this.realPosition.slice(0);
    this.sprite = new _$af482030("light" + index, "images/" + textures[this.type] + ".png", this.realPosition, this.color, 1, 1, this);
    if (this.on) {
      this.setSpriteColor()
    } else {
      this.setSpriteColor([0, 0, 0])
    };
    webview.scene.sprites.push(this.sprite);
    this.targetCon = new _$af481967(this.direction, this.position, this, 7);
    if (!this.on) {
      this.targetCon.color[0] = 0, this.targetCon.color[1] = 0, this.targetCon.color[2] = 0
    };
    this.tranCon = new _$af481958(this.position, this, 2);
    this.guide = new _$af481974()
  }

  function _$af481976() {
    var color = this.color;
    var c = Math.max(color[0], color[1], color[2]);
    if (c > 1) {
      color[0] /= c;
      color[1] /= c;
      color[2] /= c
    };
    this.strength = c
  }

  function _$af481977(dealColor) {
    var color = [];
    var dealColor = dealColor || this.color;
    for (var i = 0; i < 3; i++) {
      var c = dealColor[i] * this.strength;
      if (c > 1) {
        color[i] = (c - 1) / 5 + 1
      } else {
        color[i] = c
      }
    };
    this.sprite.color = color
  }

  function _$af481978(o) {
    for (var i in o) {
      if (i == "guide") {
        this[i].visible = this.on && o[i]
      } else {
        this[i].visible = o[i]
      }
    }
  }

  function _$af481979() {
    if (this.parameter[2] === 0 && this.position[3] === 0) {
      return 0
    } else {
      if (this.spot[0] === -1 && this.spot[2] === 0) {
        return 1
      } else {
        return 2
      }
    }
  }

  function _$af481980() {
    return this.spot[0]
  }

  function _$af481981(angle) {
    this.spot[0] = angle;
    this.spot[2] = (13131.2211 / (angle * angle) + 0.3788616) * this.spot[1];
    this.angle = angle
  }

  function _$af481982() {
    return this.spot[1]
  }

  function _$af481983(sharp) {
    this.spot[1] = sharp;
    var a = this.spot[0];
    this.spot[2] = (13131.2211 / (a * a) + 0.3788616) * sharp;
    this.sharpness = sharp
  }

  function _$af481984() {
    return 0.05 / this.parameter[2]
  }

  function _$af481985(dis) {
    this.parameter[2] = 0.05 / dis;
    this.distance = dis
  }

  function _$af481986() {
    return this.parameter[0] / (-2)
  }

  function _$af481987(curve) {
    this.parameter[0] = -2 * curve;
    this.parameter[1] = 2 * curve - 1
  }

  function _$af481988(axis, len, type) {
    if (type === "lightTransLine") {
      len *= (this.sprite.pos2d[2] * this.sprite.pos2d[3] / 1000);
      if (this.matrixWeight == 1) {
        len *= 2
      }
    } else {
      var pos2d = turn3dTo2d(this.targetCon.position2);
      len *= (pos2d[2] * pos2d[3] / 1000)
    };
    var v = [];
    switch (axis) {
      case "x":
        v = [len, 0, 0];
        break;
      case "y":
        v = [0, len, 0];
        break;
      case "z":
        v = [0, 0, len];
        break
    };
    var tranM = Matrix.empty();
    Matrix.translation(tranM, v[0], v[1], v[2]);
    if (this.matrixWeight == 1) {
      var aimPos = [];
      Matrix.mulPoint(aimPos, tranM, this.matrixPosition[0], this.matrixPosition[1], this.matrixPosition[2]);
      Matrix.mulPoint(aimPos, webview.scene.lights.matrix2, aimPos[0], aimPos[1], aimPos[2]);
      v = [aimPos[0] - this.realPosition[0], aimPos[1] - this.realPosition[1], aimPos[2] - this.realPosition[2]];
      Matrix.translation(tranM, v[0], v[1], v[2])
    };
    if (type === "lightTransLine") {
      var position = Matrix.mulPoint(this.realPosition, tranM, this.realPosition[0], this.realPosition[1], this.realPosition[2]);
      if (this.type != 0) {
        this.position = position.slice(0).concat([1]);
        this.on && webview.scene.lights.changePosition(this.index)
      };
      this.sprite.changePosition(position);
      this.tranCon.changePosition(position, tranM);
      this.targetCon.changePosition(position, tranM, "lightTransLine")
    } else {
      var position = this.targetCon.position2;
      Matrix.mulPoint(position, tranM, position[0], position[1], position[2]);
      this.targetCon.changePosition(position, tranM, "lightTargetTran")
    }
  }

  function _$af481989(a, b) {
    this.lights = [];
    this.rotation = this.shadowCount = this.count = 0;
    this.positions = [];
    this.directions = [];
    this.matrixWeights = [];
    this.matrix = Matrix.identity();
    this.invMatrix = Matrix.identity();
    this.matrix2 = Matrix.identity();
    for (var c in a) {
      this[c] = a[c]
    };
    this.maxCount = 3;
    this.lights = [];
    for (var i = 0; i < this.maxCount; i++) {
      this.lights.push(new _$af481975(a, i))
    };
    this.order = [];
    this.tidyOrder()
  }

  function _$af481990(index) {
    for (var i = 0; i < this.maxCount; i++) {
      if (this.order[i] === parseInt(index)) {
        break
      }
    };
    return i
  }

  function _$af481991(index) {
    var i = this.getIndex(index);
    var color = this.lights[index].color.slice(0);
    this.colors[i * 3] = color[0] * this.lights[index].strength;
    this.colors[i * 3 + 1] = color[1] * this.lights[index].strength;
    this.colors[i * 3 + 2] = color[2] * this.lights[index].strength;
    if (this.lights[index].on) {
      this.lights[index].setSpriteColor()
    }
  }

  function _$af481992(index) {
    var i = this.getIndex(index);
    var parameter = this.lights[index].parameter.slice(0);
    this.parameters[i * 3] = parameter[0];
    this.parameters[i * 3 + 1] = parameter[1];
    this.parameters[i * 3 + 2] = parameter[2]
  }

  function _$af481993(index) {
    var i = this.getIndex(index);
    var spot = this.lights[index].spot.slice(0);
    this.spot[i * 3] = spot[0];
    this.spot[i * 3 + 1] = spot[1];
    this.spot[i * 3 + 2] = spot[2]
  }

  function _$af481994(index) {
    var i = this.getIndex(index);
    var position = this.lights[index].position.slice(0);
    this.positions[i * 4] = position[0];
    this.positions[i * 4 + 1] = position[1];
    this.positions[i * 4 + 2] = position[2];
    this.positions[i * 4 + 3] = position[3]
  }

  function _$af481995(index) {
    var i = this.getIndex(index);
    var direction = this.lights[index].direction.slice(0);
    this.directions[i * 3] = direction[0];
    this.directions[i * 3 + 1] = direction[1];
    this.directions[i * 3 + 2] = direction[2]
  }

  function _$af481996(index) {
    var i = this.getIndex(index);
    this.matrixWeights[i] = this.lights[index].matrixWeight
  }

  function _$af481997() {
    this.positions = new Float32Array(this.count * 4);
    this.positionBuffer = new Float32Array(this.count * 4);
    this.directions = new Float32Array(this.count * 3);
    this.directionBuffer = new Float32Array(this.count * 3);
    this.modelViewBuffer = new Float32Array(16 * this.shadowCount);
    this.projectionBuffer = new Float32Array(16 * this.shadowCount);
    this.finalTransformBuffer = new Float32Array(16 * this.shadowCount);
    this.shadowTexelPadProjections = new Float32Array(4 * this.shadowCount);
    this.shadowsNeedUpdate = new Uint8Array(this.shadowCount);
    this.spot = [];
    this.matrixWeights = [];
    this.parameters = [];
    this.colors = [];
    for (var i = 0; i < this.count; i++) {
      var l = this.lights[this.order[i]];
      this.positions[i * 4] = l.position[0];
      this.positions[i * 4 + 1] = l.position[1];
      this.positions[i * 4 + 2] = l.position[2];
      this.positions[i * 4 + 3] = l.position[3];
      this.directions[i * 3] = l.direction[0];
      this.directions[i * 3 + 1] = l.direction[1];
      this.directions[i * 3 + 2] = l.direction[2];
      this.positionBuffer[i * 4] = l.position[0];
      this.positionBuffer[i * 4 + 1] = l.position[1];
      this.positionBuffer[i * 4 + 2] = l.position[2];
      this.positionBuffer[i * 4 + 3] = l.position[3];
      this.directionBuffer[i * 3] = l.direction[0];
      this.directionBuffer[i * 3 + 1] = l.direction[1];
      this.directionBuffer[i * 3 + 2] = l.direction[2];
      this.spot = this.spot.concat(l.spot);
      this.matrixWeights = this.matrixWeights.concat(l.matrixWeight);
      this.parameters = this.parameters.concat(l.parameter);
      this.colors[i * 3] = l.color[0] * l.strength;
      this.colors[i * 3 + 1] = l.color[1] * l.strength;
      this.colors[i * 3 + 2] = l.color[2] * l.strength
    };
    for (var d = 0; d < this.shadowsNeedUpdate.length; ++d) {
      this.shadowsNeedUpdate[d] = 1
    }
  }

  function _$af481998() {
    var onAndShadow = [];
    var on = [];
    var off = [];
    this.count = 0;
    this.shadowCount = 0;
    var b = webview.scene.view;
    for (var i = 0; i < this.maxCount; i++) {
      if (this.lights[i].on) {
        this.count++;
        if (this.lights[i].shadow) {
          onAndShadow.push(i);
          this.shadowCount++
        } else {
          on.push(i)
        }
      } else {
        off.push(i)
      }
    };
    this.order = onAndShadow.concat(on).concat(off);
    this.reBuildPorp();
    var def = [{}, {}];
    def[0].keywords = "#define LIGHT_COUNT ";
    def[1].keywords = "#define SHADOW_COUNT ";
    if (this.count > 0) {
      def[0].define = "#define LIGHT_COUNT " + this.count
    } else {
      def[0].define = ""
    };
    if (this.shadowCount > 0) {
      def[1].define = "#define SHADOW_COUNT " + this.shadowCount
    } else {
      def[1].define = ""
    };
    for (var i in webview.scene.materials) {
      webview.scene.materials[i].changeDefine(def)
    }
  }

  function _$af481999(a) {
    return this.positionBuffer.subarray(4 * a, 4 * a + 4)
  }

  function _$af482000(a) {
    return this.directionBuffer.subarray(3 * a, 3 * a + 3)
  }

  function _$af482001(a, b) {
    var c = new Matrix.type(this.matrix);
    Matrix.rotation(this.matrix, this.rotation, 1);
    Matrix.copy(this.matrix2, this.matrix);
    Matrix.transpose(this.invMatrix, this.matrix);
    var rM = Matrix.transpose(Matrix.empty(), a.modelMatrix);
    Matrix.mul(this.matrix, this.matrix, rM);
    for (var d = 0; d < this.count; ++d) {
      var e = this.positions.subarray(4 * d, 4 * d + 4),
        f = this.directions.subarray(3 * d, 3 * d + 3),
        g = this.getLightPos(d),
        h = this.getLightDir(d);
      1 == this.matrixWeights[d] ? (g[0] = e[0], g[1] = e[1], g[2] = e[2], g[3] = e[3], h[0] = f[0], h[1] = f[1], h[2] = f[2]) : 2 == this.matrixWeights[d] ? (Matrix.mul4(g, a.transform, e[0], e[1], e[2], e[3]), Matrix.mulVec(h, a.transform, f[0], f[1], f[2]), Matrix.mul4(g, this.matrix, g[0], g[1], g[2], g[3]), Matrix.mulVec(h, this.matrix, h[0], h[1], h[2])) : (Matrix.mul4(g, this.matrix2, e[0], e[1], e[2], e[3]), Matrix.mulVec(h, this.matrix2, f[0], f[1], f[2]));
      Vect.normalize(h, h)
    };
    for (var f = new Float32Array(this.finalTransformBuffer), g = Matrix.empty(), h = Matrix.empty(), k = Matrix.empty(), l = Vect.empty(), m = Vect.empty(), n = Vect.empty(), r = Vect.empty(), e = Vect.empty(), p = [], q = [], u = Matrix.create(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), d = 0; d < this.count; ++d) {
      l = this.getLightPos(d);
      m = this.getLightDir(d);
      0.99 < Math.abs(m[1]) ? Vect["set"](n, 1, 0, 0) : Vect["set"](n, 0, 1, 0);
      Vect.cross(r, n, m);
      Vect.normalize(r, r);
      Vect.cross(n, m, r);
      Vect.normalize(n, n);
      Matrix["set"](g, r[0], r[1], r[2], -Vect.dot(r, l), n[0], n[1], n[2], -Vect.dot(n, l), m[0], m[1], m[2], -Vect.dot(m, l), 0, 0, 0, 1);
      for (l = 0; 8 > l; ++l) {
        e[0] = l & 1 ? b.max[0] : b.min[0], e[1] = l & 2 ? b.max[1] : b.min[1], e[2] = l & 4 ? b.max[2] : b.min[2], Matrix.mulPoint(e, this.matrix, 1.005 * e[0], 1.005 * e[1], 1.005 * e[2]), Matrix.mulPoint(e, g, e[0], e[1], e[2]), 0 == l ? (p[0] = q[0] = e[0], p[1] = q[1] = e[1], p[2] = q[2] = e[2]) : (p[0] = Math.min(p[0], e[0]), p[1] = Math.min(p[1], e[1]), p[2] = Math.min(p[2], e[2]), q[0] = Math.max(q[0], e[0]), q[1] = Math.max(q[1], e[1]), q[2] = Math.max(q[2], e[2]))
      };
      var l = -p[2],
        m = -q[2],
        s = this.spot[3 * d];
      0 < s ? (l = Math.min(l, 1 / this.parameters[3 * d + 2]), m = Math.max(0.005 * l, m), Matrix.perspective(h, s, 1, m, l), d < this.shadowCount && (l = 2 * -Math.tan(0.00872664625 * s), this.shadowTexelPadProjections[4 * d + 0] = this.modelViewBuffer[16 * d + 2] * l, this.shadowTexelPadProjections[4 * d + 1] = this.modelViewBuffer[16 * d + 6] * l, this.shadowTexelPadProjections[4 * d + 2] = this.modelViewBuffer[16 * d + 10] * l, this.shadowTexelPadProjections[4 * d + 3] = this.modelViewBuffer[16 * d + 14] * l)) : (Matrix.ortho(h, p[0], q[0], p[1], q[1], m, l), d < this.shadowCount && (this.shadowTexelPadProjections[4 * d + 0] = this.shadowTexelPadProjections[4 * d + 1] = this.shadowTexelPadProjections[4 * d + 2] = 0, this.shadowTexelPadProjections[4 * d + 3] = Math.max(q[0] - p[0], q[1] - p[1])));
      Matrix.mul(k, h, g);
      Matrix.mul(k, u, k);
      Matrix.copyToBuffer(this.modelViewBuffer, 16 * d, g);
      Matrix.copyToBuffer(this.projectionBuffer, 16 * d, h);
      Matrix.copyToBuffer(this.finalTransformBuffer, 16 * d, k)
    };
    e = !1;
    for (d = 0; d < c.length; ++d) {
      if (c[d] != this.matrix[d]) {
        e = !0;
        break
      }
    };
    for (d = 0; d < this.shadowCount; d++) {
      if (e && 1 == this.matrixWeights[d]) {
        this.shadowsNeedUpdate[d] = 1
      } else {
        for (c = 16 * d; c < 16 * d + 16; ++c) {
          if (f[c] != this.finalTransformBuffer[c]) {
            this.shadowsNeedUpdate[d] = 1;
            break
          }
        }
      }
    }
  }

  function _$af482002(a, b, c) {
    this.gl = a;
    this.name = c.name;
    var d = {
        mipmap: !0,
        aniso: a.hints.mobile ? 0 : 4,
        clamp: !!c.textureWrapClamp,
        mirror: !!c.textureWrapMirror
      },
      e = {
        mipmap: d.mipmap,
        clamp: d.clamp,
        mirror: d.mirror,
        nofilter: c.textureFilterNearest || !1
      };
    e.nofilter || (e.aniso = a.hints.mobile ? 2 : 4);
    this.unMergedTex = {
      alpha: {
        value: c.alphaTex
      },
      albedo: {
        value: c.albedoTex
      },
      reflectivity: {
        value: c.reflectivityTex
      },
      gloss: {
        value: c.glossTex
      },
      normal: {
        value: c.normalTex
      },
      extrasSkin: {
        value: c.extrasSkinTex
      },
      extrasSkinA: {
        value: c.extrasSkinTexA
      },
      extrasAO: {
        value: c.extrasAOTex
      },
      extrasAOA: {
        value: c.extrasAOTexA
      },
      extras: {
        value: c.extrasTex
      },
      extrasA: {
        value: c.extrasTexA
      },
      extrasEmi: {
        value: c.extrasEmiTex
      },
      extrasEmiA: {
        value: c.extrasEmiTexA
      }
    };
    this.cullBackFaces = c.cullBackFaces;
    this.strength = {};
    this.strength.albedo = dom.ifVoid(c.strength && c.strength.albedo, 100);
    this.strength.reflectivity = dom.ifVoid(c.strength && c.strength.reflectivity, 100);
    this.strength.normal = dom.ifVoid(c.strength && c.strength.normal, 100);
    this.strength.alpha = dom.ifVoid(c.strength && c.strength.alpha, 100);
    this.strength.gloss = dom.ifVoid(c.strength && c.strength.gloss, 100);
    this.strength.extrasAO = dom.ifVoid(c.strength && c.strength.extrasAO, 100);
    if (c.blend === "add" && c.alphaTex == void(0)) {
      this.strength.alpha = 0
    };
    this.textures = {
      albedo: a.textureCache.MergeAlpha2(b["get"](c.albedoTex), b["get"](c.alphaTex), e, this.unMergedTex, "albedo", "alpha", this),
      reflectivity: a.textureCache.MergeAlpha2(b["get"](c.reflectivityTex), b["get"](c.glossTex), d, this.unMergedTex, "reflectivity", "gloss", this),
      normal: a.textureCache.MergeAlpha2(b["get"](c.normalTex), null, d, this.unMergedTex, "normal"),
      extras: a.textureCache.MergeAlpha2(b["get"](c.extrasTex), b["get"](c.extrasTexA), d, this.unMergedTex, "extras", "extrasA", this),
      extrasAO: a.textureCache.MergeAlpha2(b["get"](c.extrasAOTex), b["get"](c.extrasAOTexA), d, this.unMergedTex, "extrasAO", "extrasAOA", this),
      extrasSkin: a.textureCache.MergeAlpha2(b["get"](c.extrasSkinTex), b["get"](c.extrasSkinTexA), d, this.unMergedTex, "extrasSkin", "extrasSkinA", this),
      extrasEmi: a.textureCache.MergeAlpha2(b["get"](c.extrasEmiTex), b["get"](c.extrasEmiTexA), d, this.unMergedTex, "extrasEmi", "extrasEmiA", this)
    };
    this.unMergedTex.normal.tex = this.textures.normal;
    this.extrasTexCoordRanges = {};
    if (c.extrasTexCoordRanges) {
      for (var f in c.extrasTexCoordRanges) {
        this.extrasTexCoordRanges[f] = new Float32Array(dom.objToArray(c.extrasTexCoordRanges[f].scaleBias))
      }
    };
    this.textures.extras || (b = new _$af482121(a, {
      width: 1,
      height: 1
    }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extras = b, this.unMergedTex.extras.value = [255, 255, 255]);
    this.textures.extrasAO || (b = new _$af482121(a, {
      width: 1,
      height: 1
    }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extrasAO = b, this.unMergedTex.extrasAO.value = [255, 255, 255]);
    this.textures.extrasSkin || (b = new _$af482121(a, {
      width: 1,
      height: 1
    }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extrasSkin = b, this.unMergedTex.extrasSkin.value = [255, 255, 255]);
    this.textures.extrasEmi || (b = new _$af482121(a, {
      width: 1,
      height: 1
    }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extrasEmi = b, this.unMergedTex.extrasEmi.value = [255, 255, 255]);
    c.blendTint && (this.blendTint = c.blendTint);
    var g = c.blendTint || [1, 1, 1];
    b = {
      none: function() {
        a.disable(a.BLEND)
      },
      alpha: function() {
        a.enable(a.BLEND);
        a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE_MINUS_DST_ALPHA, a.ONE)
      },
      add: function() {
        a.enable(a.BLEND);
        a.blendColor(g[0], g[1], g[2], 1);
        a.blendFunc(a.ONE, a.CONSTANT_COLOR)
      }
    };
    this.blend = b[c.blend] || b.none;
    this.blendType = c.blend;
    this.alphaTest = c.alphaTest || 0;
    this.usesBlending = this.blend !== b.none;
    this.shadowAlphaTest = this.alphaTest;
    0 >= this.shadowAlphaTest && this.blend === b.alpha && (this.shadowAlphaTest = 0.5);
    this.castShadows = this.blend !== b.add;
    this.horizonOcclude = c.horizonOcclude || 0;
    this.fresnel = new Float32Array(c.fresnel ? c.fresnel : [1, 1, 1]);
    this.emissiveIntensity = c.emissiveIntensity || 1;
    d = !1;
    e = [];
    0 < c.lightCount && e.push("#define LIGHT_COUNT " + c.lightCount);
    0 < c.shadowCount && e.push("#define SHADOW_COUNT " + Math.min(c.lightCount, c.shadowCount));
    0 < c.alphaTest && e.push("#define ALPHA_TEST");
    if (this.blend !== b.alpha) {
      this.blend === b.none
    };
    a.hints.mobile && e.push("#define MOBILE");
    if (c.useSkin) {
      this.useSkin = 1;
      e.push("#define SKIN")
    };
    this.skinParams = c.skinParams || {
      subdermisColor: [0, 0, 1],
      transColor: [0.97, 0.28, 0.17, 1],
      fresnelColor: [1, 1, 1, 1.5],
      fresnelOcc: 4,
      fresnelGlossMask: 1,
      transSky: 0.1,
      shadowBlur: 0.5,
      normalSmooth: 1,
      transScatter: 0,
      transDepth: 0,
      millimeterScale: 1
    };
    this.skinParams.fresnelIntegral = 1 / 3.14159 * (1 - 0.5 * this.skinParams.fresnelColor[3]), this.skinParams.transIntegral = 1 / 3.14159 * (1 - 0.5 * this.skinParams.transColor[3]), this.skinParams.transSky *= 1.25, this.skinParams.transIntegral *= 1.25;
    this.outline = c.outline;
    this.outlineColor = c.outlineColor || [0, 0, 0];
    this.outlineWidth = dom.ifVoid(c.outlineWidth, 0.015);
    c.aniso && (e.push("#define ANISO"), this.anisoParams = c.anisoParams || {
      strength: 10,
      tangent: [1, 0, 0],
      integral: 0.5
    }, this.extrasTexCoordRanges.anisoTex || e.push("#define ANISO_NO_DIR_TEX"));
    c.microfiber && (e.push("#define MICROFIBER"), this.microfiberParams = c.microfiberParams || {
      fresnelColor: [1, 0.2, 0.2, 1],
      fresnelOcc: 10,
      fresnelGlossMask: 6
    }, this.microfiberParams.fresnelIntegral = 1 / 3.14159 * (1 - 0.5 * this.microfiberParams.fresnelColor[3]), this.extrasTexCoordRanges.fuzzTex || e.push("#define MICROFIBER_NO_FUZZ_TEX"));
    c.vertexColor && (e.push("#define VERTEX_COLOR"), c.vertexColorsRGB && e.push("#define VERTEX_COLOR_SRGB"), c.vertexColorAlpha && e.push("#define VERTEX_COLOR_ALPHA"));
    this.horizonSmoothing = c.horizonSmoothing || 0;
    0 < this.horizonSmoothing && e.push("#define HORIZON_SMOOTHING");
    c.unlitDiffuse && (this.unlitDiffuse = true);
    this.extrasTexCoordRanges.emissiveTex && (e.push("#define EMISSIVE"), this.useEmissive = 1, c.emissiveSecondaryUV && (e.push("#define EMISSIVE_SECONDARY_UV"), d = !0));
    this.extrasTexCoordRanges.aoTex && (e.push("#define AMBIENT_OCCLUSION") && (this.useAO = 1), c.aoSecondaryUV && (e.push("#define AMBIENT_OCCLUSION_SECONDARY_UV"), d = !0));
    c.tangentOrthogonalize && e.push("#define TSPACE_ORTHOGONALIZE");
    c.tangentNormalize && e.push("#define TSPACE_RENORMALIZE");
    c.tangentGenerateBitangent && e.push("#define TSPACE_COMPUTE_BITANGENT");
    d && e.push("#define TEXCOORD_SECONDARY");
    this.shader = a.shaderCache.fromURLs("matvert.glsl", "matfrag.glsl", e);
    this.defines = e;
    this.highlightShader = a.shaderCache.fromURLs("highlightvert.glsl", "highlightfrag.glsl");
    this.outlineShader = a.shaderCache.fromURLs("outlinevert.glsl", "outlinefrag.glsl");
    this.prepassShader = a.shaderCache.fromURLs("alphaprepassvert.glsl", "alphaprepassfrag.glsl")
  }

  function _$af482006(define, state) {
    var e = this.defines;
    if (state) {
      if (this.defines.indexOf(define) == -1) {
        e.push(define)
      }
    } else {
      var i = this.defines.indexOf(define);
      if (i != -1) {
        e.splice(i, 1)
      }
    };
    this.shader = this.gl.shaderCache.fromURLs("matvert.glsl", "matfrag.glsl", e)
  }

  function _$af482007(def) {
    var e = this.defines;
    for (var d = 0; d < def.length; d++) {
      var find = 0;
      for (var i = 0; i < e.length; i++) {
        var index = e[i].indexOf(def[d].keywords);
        if (index != -1) {
          if (def[d].define != "") {
            e[i] = def[d].define
          } else {
            e.splice(i, 1)
          };
          find = 1;
          break
        }
      };
      if (def[d].define != "" && find == 0) {
        e.push(def[d].define)
      }
    };
    this.shader = this.gl.shaderCache.fromURLs("matvert.glsl", "matfrag.glsl", e)
  }

  function _$af482008(a) {
    if (!this.complete()) {
      return !1
    };
    var b = a.view,
      c = a.lights,
      d = a.sky,
      e = a.shadow,
      f = this.shader,
      g = this.skinParams,
      h = this.anisoParams,
      k = this.microfiberParams,
      l, m = this.gl,
      n = f.params,
      r = this.textures,
      p = f.samplers;
    f.bind();
    this.blend();
    if (this.unlitDiffuse) {
      m.uniform1f(n.unlitDiffuse, 1);
      m.uniform1f(n.uReflecStrength, 0);
      m.uniform1f(n.uGlossStrength, 0)
    } else {
      m.uniform1f(n.unlitDiffuse, 0);
      m.uniform1f(n.uReflecStrength, this.strength.reflectivity);
      m.uniform1f(n.uGlossStrength, this.strength.gloss)
    };
    m.uniform1f(n.uAlbedoStrength, this.strength.albedo);
    m.uniform1f(n.uAlphaStrength, this.strength.alpha);
    m.uniform1f(n.uNormalStrength, this.strength.normal);
    m.uniform1f(n.uAOStrength, this.strength.extrasAO);
    m.uniform1f(n.uModelBright, d.modelBright);
    b.viewProjectionMatrix2 = Matrix.mul(Matrix.empty(), b.projectionMatrix, b.viewMatrix2);
    m.uniformMatrix4fv(n.uModelViewProjectionMatrix, !1, b.viewProjectionMatrix2);
    if (gui.drawRect && a.rect) {
      var x1 = a.rect.x1 * 2 - 1;
      var x2 = a.rect.x2 * 2 - 1;
      var y1 = a.rect.y1 * 2 - 1;
      var y2 = a.rect.y2 * 2 - 1;
      m.uniform4fv(n.rect, [x1, y1, x2, y2])
    } else {
      m.uniform4fv(n.rect, [0, 0, 0, 0])
    };
    if (a.drawPoints) {
      m.uniform1f(n.isPoints, 1)
    } else {
      m.uniform1f(n.isPoints, 0);
      m.uniformMatrix4fv(n.uSkyMatrix, !1, c.matrix);
      q = Matrix.mulPoint(Vect.empty(), c.matrix, b.transform2[12], b.transform2[13], b.transform2[14]);
      m.uniform3f(n.uCameraPosition, q[0], q[1], q[2]);
      m.uniform3fv(n.uFresnel, this.fresnel);
      m.uniform1f(n.uAlphaTest, this.alphaTest);
      m.uniform1f(n.uHorizonOcclude, this.horizonOcclude);
      m.uniform1f(n.uHorizonSmoothing, this.horizonSmoothing);
      var dif = new Float32Array(36);
      for (var i = 0; i < 36; i++) {
        dif[i] = d.diffuseCoefficients[i];
        if (i < 4) {
          dif[i] = 0.6 * (1 - d.modelSkyRatio) + dif[i] * d.modelSkyRatio
        }
      };
      m.uniform4fv(n.uDiffuseCoefficients, dif);
      if (0 < c.count && (m.uniform4fv(n.uLightPositions, c.positionBuffer), m.uniform3fv(n.uLightDirections, c.directionBuffer), m.uniform3fv(n.uLightColors, c.colors), m.uniform3fv(n.uLightParams, c.parameters), m.uniform3fv(n.uLightSpot, c.spot), q = 0.392699 * a.postRender.sampleIndex, m.uniform2f(n.uShadowKernelRotation, 0.5 * Math.cos(q), 0.5 * Math.sin(q)), 0 < c.shadowCount)) {
        var q = e.depthTextures[0].desc.width,
          u = e.depthTextures[0].desc.height;
        m.uniform4f(n.uShadowMapSize, q, u, 1 / q, 1 / u);
        m.uniformMatrix4fv(n.uShadowMatrices, !1, c.finalTransformBuffer);
        m.uniform4fv(n.uShadowTexelPadProjections, c.shadowTexelPadProjections);
        e.bindDepthTexture(p.tDepth0, 0);
        e.bindDepthTexture(p.tDepth1, 1);
        e.bindDepthTexture(p.tDepth2, 2)
      };
      g && (m.uniform3fv(n.uSubdermisColor, g.subdermisColor), m.uniform4fv(n.uTransColor, g.transColor), m.uniform4fv(n.uFresnelColor, g.fresnelColor), m.uniform1f(n.uFresnelOcc, g.fresnelOcc), m.uniform1f(n.uFresnelGlossMask, g.fresnelGlossMask), m.uniform1f(n.uFresnelIntegral, g.fresnelIntegral), m.uniform1f(n.uTransIntegral, g.transIntegral), m.uniform1f(n.uTransSky, g.transSky), m.uniform1f(n.uSkinShadowBlur, 8 * Math.min(g.shadowBlur, 1)), m.uniform1f(n.uNormalSmooth, g.normalSmooth), (l = this.extrasTexCoordRanges.subdermisTex) && m.uniform4fv(n.uTexRangeSubdermis, l), (l = this.extrasTexCoordRanges.translucencyTex) && m.uniform4fv(n.uTexRangeTranslucency, l), (l = this.extrasTexCoordRanges.fuzzTex) && m.uniform4fv(n.uTexRangeFuzz, l));
      k && (m.uniform4fv(n.uFresnelColor, k.fresnelColor), m.uniform1f(n.uFresnelOcc, k.fresnelOcc), m.uniform1f(n.uFresnelGlossMask, k.fresnelGlossMask), m.uniform1f(n.uFresnelIntegral, k.fresnelIntegral), (l = this.extrasTexCoordRanges.fuzzTex) && m.uniform4fv(n.uTexRangeFuzz, l));
      h && (m.uniform3fv(n.uAnisoTangent, h.tangent), m.uniform1f(n.uAnisoStrength, h.strength), m.uniform1f(n.uAnisoIntegral, h.integral), (l = this.extrasTexCoordRanges.anisoTex) && m.uniform4fv(n.uTexRangeAniso, l));
      if (l = this.extrasTexCoordRanges.emissiveTex) {
        m.uniform4fv(n.uTexRangeEmissive, l), m.uniform1f(n.uEmissiveScale, this.emissiveIntensity)
      };
      (l = this.extrasTexCoordRanges.aoTex) && m.uniform4fv(n.uTexRangeAO, l);
      if (!this.unlitDiffuse) {
        r.normal.bind(p.tNormal)
      } else {
        var t2 = new _$af482121(webview.gl, {
          width: 1,
          height: 1
        });
        t2.loadArray(new Uint8Array([128, 127, 255, 255]));
        t2.bind(p.tNormal)
      };
      r.extras.bind(p.tExtras);
      r.extrasSkin.bind(p.tExtrasSkin);
      r.extrasAO.bind(p.tExtrasAO);
      r.extrasEmi.bind(p.tExtrasEmi);
      r.reflectivity.bind(p.tReflectivity);
      r.albedo.bind(p.tAlbedo);
      d.specularTexture.bind(p.tSkySpecular)
    };
    return !0
  }

  function _$af482009(a) {
    if (!this.complete() || !this.prepassShader) {
      return !1
    };
    var b = this.gl,
      c = this.prepassShader.params,
      d = this.prepassShader.samplers;
    this.prepassShader.bind();
    b.uniform1f(c.uAlphaStrength, this.strength.alpha);
    a.view.viewProjectionMatrix2 = Matrix.mul(Matrix.empty(), a.view.projectionMatrix, a.view.viewMatrix2);
    b.uniformMatrix4fv(c.uModelViewProjectionMatrix, !1, a.view.viewProjectionMatrix2);
    this.textures.albedo.bind(d.tAlbedo);
    return !0
  }

  function _$af482010() {
    return this.highlightShader.complete() && this.shader.complete() && (!this.prepassShader || this.prepassShader.complete()) && this.textures.albedo.complete() && this.textures.reflectivity.complete() && this.textures.normal.complete()
  }

  function _$af482011(a, b, c, d, e, f, g, h, k, l, m, n, r, p, q, u) {
    var s = new Matrix.type(16);
    s[0] = a;
    s[4] = b;
    s[8] = c;
    s[12] = d;
    s[1] = e;
    s[5] = f;
    s[9] = g;
    s[13] = h;
    s[2] = k;
    s[6] = l;
    s[10] = m;
    s[14] = n;
    s[3] = r;
    s[7] = p;
    s[11] = q;
    s[15] = u;
    return s
  }

  function _$af482012() {
    return new Matrix.type(16)
  }

  function _$af482013() {
    var a = new Matrix.type(16);
    a[0] = 1;
    a[4] = 0;
    a[8] = 0;
    a[12] = 0;
    a[1] = 0;
    a[5] = 1;
    a[9] = 0;
    a[13] = 0;
    a[2] = 0;
    a[6] = 0;
    a[10] = 1;
    a[14] = 0;
    a[3] = 0;
    a[7] = 0;
    a[11] = 0;
    a[15] = 1;
    return a
  }

  function _$af482014(a, b, c, d, e, f, g, h, k, l, m, n, r, p, q, u, s) {
    a[0] = b;
    a[4] = c;
    a[8] = d;
    a[12] = e;
    a[1] = f;
    a[5] = g;
    a[9] = h;
    a[13] = k;
    a[2] = l;
    a[6] = m;
    a[10] = n;
    a[14] = r;
    a[3] = p;
    a[7] = q;
    a[11] = u;
    a[15] = s
  }

  function _$af482015(a, b, c, d) {
    Matrix["set"](a, 1, 0, 0, b, 0, 1, 0, c, 0, 0, 1, d, 0, 0, 0, 1);
    return a
  }

  function _$af482016(a, b, c) {
    a[0] = 1;
    a[4] = 0;
    a[8] = 0;
    a[12] = 0;
    a[1] = 0;
    a[5] = 1;
    a[9] = 0;
    a[13] = 0;
    a[2] = 0;
    a[6] = 0;
    a[10] = 1;
    a[14] = 0;
    a[3] = 0;
    a[7] = 0;
    a[11] = 0;
    a[15] = 1;
    var d = 0.0174532925 * b;
    b = Math.sin(d);
    d = Math.cos(d);
    switch (c) {
      case 0:
        a[5] = d;
        a[9] = -b;
        a[6] = b;
        a[10] = d;
        break;
      case 1:
        a[0] = d;
        a[8] = b;
        a[2] = -b;
        a[10] = d;
        break;
      case 2:
        a[0] = d, a[4] = -b, a[1] = b, a[5] = d
    };
    return a
  }

  function _$af482017(a, b, c) {
    var d = b[0],
      e = b[1],
      f = b[2],
      g = b[3],
      h = b[4],
      k = b[5],
      l = b[6],
      m = b[7],
      n = b[8],
      r = b[9],
      p = b[10],
      q = b[11],
      u = b[12],
      s = b[13],
      z = b[14];
    b = b[15];
    var t = c[0],
      v = c[1],
      w = c[2],
      x = c[3];
    a[0] = t * d + v * h + w * n + x * u;
    a[1] = t * e + v * k + w * r + x * s;
    a[2] = t * f + v * l + w * p + x * z;
    a[3] = t * g + v * m + w * q + x * b;
    t = c[4];
    v = c[5];
    w = c[6];
    x = c[7];
    a[4] = t * d + v * h + w * n + x * u;
    a[5] = t * e + v * k + w * r + x * s;
    a[6] = t * f + v * l + w * p + x * z;
    a[7] = t * g + v * m + w * q + x * b;
    t = c[8];
    v = c[9];
    w = c[10];
    x = c[11];
    a[8] = t * d + v * h + w * n + x * u;
    a[9] = t * e + v * k + w * r + x * s;
    a[10] = t * f + v * l + w * p + x * z;
    a[11] = t * g + v * m + w * q + x * b;
    t = c[12];
    v = c[13];
    w = c[14];
    x = c[15];
    a[12] = t * d + v * h + w * n + x * u;
    a[13] = t * e + v * k + w * r + x * s;
    a[14] = t * f + v * l + w * p + x * z;
    a[15] = t * g + v * m + w * q + x * b;
    return a
  }

  function _$af482018(a, b) {
    var c = b[0],
      d = b[1],
      e = b[2],
      f = b[3],
      g = b[4],
      h = b[5],
      k = b[6],
      l = b[7],
      m = b[8],
      n = b[9],
      r = b[10],
      p = b[11],
      q = b[12],
      u = b[13],
      s = b[14],
      z = b[15],
      t = c * h - d * g,
      v = c * k - e * g,
      w = c * l - f * g,
      x = d * k - e * h,
      A = d * l - f * h,
      B = e * l - f * k,
      C = m * u - n * q,
      D = m * s - r * q,
      E = m * z - p * q,
      F = n * s - r * u,
      G = n * z - p * u,
      H = r * z - p * s,
      y = t * H - v * G + w * F + x * E - A * D + B * C;
    if (!y) {
      return null
    };
    y = 1 / y;
    a[0] = (h * H - k * G + l * F) * y;
    a[1] = (e * G - d * H - f * F) * y;
    a[2] = (u * B - s * A + z * x) * y;
    a[3] = (r * A - n * B - p * x) * y;
    a[4] = (k * E - g * H - l * D) * y;
    a[5] = (c * H - e * E + f * D) * y;
    a[6] = (s * w - q * B - z * v) * y;
    a[7] = (m * B - r * w + p * v) * y;
    a[8] = (g * G - h * E + l * C) * y;
    a[9] = (d * E - c * G - f * C) * y;
    a[10] = (q * A - u * w + z * t) * y;
    a[11] = (n * w - m * A - p * t) * y;
    a[12] = (h * D - g * F - k * C) * y;
    a[13] = (c * F - d * D + e * C) * y;
    a[14] = (u * v - q * x - s * t) * y;
    a[15] = (m * x - n * v + r * t) * y;
    return a
  }

  function _$af482019(a, b) {
    a[0] = b[0];
    a[4] = b[1];
    a[8] = b[2];
    a[12] = b[3];
    a[1] = b[4];
    a[5] = b[5];
    a[9] = b[6];
    a[13] = b[7];
    a[2] = b[8];
    a[6] = b[9];
    a[10] = b[10];
    a[14] = b[11];
    a[3] = b[12];
    a[7] = b[13];
    a[11] = b[14];
    a[15] = b[15];
    return a
  }

  function _$af482020(a, b, c, d, e, f) {
    a[0] = b[0] * c + b[4] * d + b[8] * e + b[12] * f;
    a[1] = b[1] * c + b[5] * d + b[9] * e + b[13] * f;
    a[2] = b[2] * c + b[6] * d + b[10] * e + b[14] * f;
    a[3] = b[3] * c + b[7] * d + b[11] * e + b[15] * f;
    return a
  }

  function _$af482021(a, b, c, d, e) {
    a[0] = b[0] * c + b[4] * d + b[8] * e + b[12];
    a[1] = b[1] * c + b[5] * d + b[9] * e + b[13];
    a[2] = b[2] * c + b[6] * d + b[10] * e + b[14];
    return a
  }

  function _$af482022(a, b, c, d, e) {
    a[0] = b[0] * c + b[4] * d + b[8] * e;
    a[1] = b[1] * c + b[5] * d + b[9] * e;
    a[2] = b[2] * c + b[6] * d + b[10] * e;
    return a
  }

  function _$af482023(a, b, c, d, e, f) {
    f = f || 0;
    b = 1 / Math.tan(0.00872664625 * b);
    a[0] = b / c;
    a[1] = a[2] = a[3] = 0;
    a[5] = b;
    a[4] = a[6] = a[7] = 0;
    a[8] = a[9] = 0;
    a[10] = (e + d) / (d - e) - 3.0518044E-5 * f;
    a[11] = -1;
    a[14] = 2 * e * d / (d - e);
    a[12] = a[13] = a[15] = 0;
    return a
  }

  function _$af482024(a, b, c, d, e) {
    e = e || 0;
    b = 1 / Math.tan(0.00872664625 * b);
    a[0] = b / c;
    a[1] = a[2] = a[3] = 0;
    a[5] = b;
    a[4] = a[6] = a[7] = 0;
    a[8] = a[9] = 0;
    a[10] = a[11] = -1 - 3.0518044E-5 * e;
    a[14] = -2 * d;
    a[12] = a[13] = a[15] = 0;
    return a
  }

  function _$af482025(a, b, c, d, e, f, g, h) {
    var k = 1 / (c - b),
      l = 1 / (e - d),
      m = 1 / (g - f);
    a[0] = k + k;
    a[1] = a[2] = a[3] = 0;
    a[5] = l + l;
    a[4] = a[6] = a[7] = 0;
    a[12] = -(c + b) * k;
    a[13] = -(e + d) * l;
    a[10] = -(m + m) - 3.0518044E-5 * (h || 0);
    a[14] = -(g + f) * m;
    a[8] = a[9] = a[11] = 0;
    a[15] = 1;
    return a
  }

  function _$af482026(a, b, c, d) {
    var e = a.subarray(0, 3),
      f = a.subarray(4, 7),
      g = a.subarray(8, 11);
    Vect.sub(g, b, c);
    Vect.cross(e, d, g);
    Vect.normalize(g, g);
    Vect.normalize(e, e);
    Vect.cross(f, g, e);
    Matrix["set"](a, e[0], e[1], e[2], -Vect.dot(e, b), f[0], f[1], f[2], -Vect.dot(f, b), g[0], g[1], g[2], -Vect.dot(g, b), 0, 0, 0, 1)
  }

  function _$af482027(a, b) {
    for (var c = 0; 16 > c; ++c) {
      a[c] = b[c]
    }
  }

  function _$af482028(a, b, c) {
    for (var d = 0; 16 > d; ++d) {
      a[b + d] = c[d]
    }
  }

  function _$af482029() {
    var b = webview.gl;
    var k = new _$af482095(b);
    k.build("precision highp float; varying vec2 vuv; attribute vec2 pos; attribute vec2 uv; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.0,1.0);  vuv = uv; }", "precision highp float; varying vec2 vuv; uniform sampler2D tRGBA; void main(){ gl_FragColor=texture2D(tRGBA,vuv);}");
    k.bind();
    var g = new _$af482121(b, {
      width: 1,
      height: 1
    });
    g.loadArray(new Uint8Array([200, 1, 200, 255]));
    g.bind(k.samplers.tRGBA);
    var v = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, v);
    var e = new Float32Array([0.5, 0.5, 1, 0.5, 0.5, 1]);
    b.bufferData(b.ARRAY_BUFFER, e, b.STATIC_DRAW);
    b.enableVertexAttribArray(k.attribs.pos);
    b.vertexAttribPointer(k.attribs.pos, 2, b.FLOAT, !1, 8, 0);
    b.drawArrays(b.TRIANGLES, 0, 3);
    b.disableVertexAttribArray(k.attribs.pos);
    b.bindBuffer(b.ARRAY_BUFFER, null)
  }

  function _$af482030(name, imgUrl, position, color, scale, visible, object) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.prepareTexture();
    this.gl = webview.gl;
    this.shader = new _$af482095(this.gl);
    this.shader.build("precision highp float;attribute vec3 pos;attribute vec2 uv;varying vec2 vuv;void main(){gl_Position.xyz=pos;   gl_Position.w=1.0; vuv=uv;}", "precision highp float;varying vec2 vuv;uniform float layerAlpha; uniform vec3 color;uniform sampler2D texture;void main(){vec4 c=texture2D(texture,vuv);    c.xyz = vec3(color.x*c.x, color.y*c.y, color.z*c.z);    c.w *= layerAlpha; gl_FragColor = c; }", "spriteShader ");
    this.position = position.slice(0) || [0, 0, 5];
    this.pos2d = turn3dTo2d(this.position);
    this.scale = scale || 1;
    this.visible = (visible != void(0)) ? visible : true;
    this.vertexBuffer = this.gl.createBuffer();
    this.indexBuffer = this.gl.createBuffer();
    this.color = color || [1, 1, 1];
    this.object = object;
    var a = new Uint16Array([0, 1, 2, 0, 2, 3]);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
  }

  function _$af482031(pos3d, matrix) {
    var add = -webview.scene.view.projectionMatrix[14];
    matrix = matrix || webview.scene.view.viewProjectionMatrix;
    var newPos = [];
    Matrix.mul4(newPos, matrix, pos3d[0], pos3d[1], pos3d[2], 1);
    newPos[0] /= (newPos[2] + add);
    newPos[1] /= (newPos[2] + add);
    newPos[2] /= newPos[3];
    return newPos
  }

  function _$af482032(pos) {
    this.position = pos.slice(0, 3)
  }

  function _$af482033(x, y) {
    var w = 30 * this.scale / 2 + 10;
    var r = webview.canvas.getBoundingClientRect();
    var pos = [(this.pos2d[0] + 1) / 2 * r.width, (-this.pos2d[1] + 1) / 2 * r.height];
    if (x > pos[0] - w && x < pos[0] + w && y > pos[1] - w && y < pos[1] + w) {
      return this.pos2d[2]
    } else {
      return null
    }
  }

  function _$af482034() {
    if (!this.complete()) {
      return
    };
    var b = this.gl;
    b.enable(b.BLEND);
    b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
    b.enable(b.CULL_FACE), b.cullFace(b.BACK);
    var k = this.shader;
    k.bind();
    b.uniform3f(k.params.color, this.color[0], this.color[1], this.color[2]);
    this.texture.bind(k.samplers.texture);
    var width = 30 * this.scale;
    var r = webview.canvas.getBoundingClientRect();
    if (this.object && this.object.matrixWeight == 1) {
      Matrix.mulPoint(this.object.matrixPosition, webview.scene.lights.invMatrix, this.position[0], this.position[1], this.position[2]);
      this.pos2d = turn3dTo2d(this.object.matrixPosition)
    } else {
      this.pos2d = turn3dTo2d(this.position)
    };
    var w = 2 * width / r.width;
    var h = 2 * width / r.height;
    var p = [this.pos2d[0] - w / 2, this.pos2d[1] - h / 2, this.pos2d[2], 0, 0, this.pos2d[0] + w / 2, this.pos2d[1] - h / 2, this.pos2d[2], 1, 0, this.pos2d[0] + w / 2, this.pos2d[1] + h / 2, this.pos2d[2], 1, 1, this.pos2d[0] - w / 2, this.pos2d[1] + h / 2, this.pos2d[2], 0, 1];
    var c = new Float32Array(p);
    b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
    b.bufferData(b.ARRAY_BUFFER, c, b.STATIC_DRAW);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    b.enableVertexAttribArray(k.attribs.pos);
    b.enableVertexAttribArray(k.attribs.uv);
    b.vertexAttribPointer(k.attribs.pos, 3, b.FLOAT, !1, 20, 0);
    b.vertexAttribPointer(k.attribs.uv, 2, b.FLOAT, !1, 20, 12);
    b.depthFunc(b.LEQUAL);
    b.uniform1f(k.params.layerAlpha, 0.9);
    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
    b.depthFunc(b.ALWAYS);
    b.uniform1f(k.params.layerAlpha, 0.1);
    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
    b.disableVertexAttribArray(k.attribs.pos);
    b.disableVertexAttribArray(k.attribs.uv);
    b.bindBuffer(b.ARRAY_BUFFER, null);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
    b.disable(b.BLEND);
    b.depthFunc(b.LEQUAL)
  }

  function _$af482035(imgUrl) {
    this.imgUrl = imgUrl;
    this.prepareTexture()
  }

  function _$af482036() {
    if (!webview.gl.textureCache.spriteCache) {
      webview.gl.textureCache.spriteCache = []
    };
    if (webview.gl.textureCache.spriteCache[this.imgUrl]) {
      this.texture = webview.gl.textureCache.spriteCache[this.imgUrl];
      return
    };
    var d = {
      mipmap: !0,
      aniso: webview.gl.hints.mobile ? 0 : 4,
      clamp: false,
      mirror: false
    };
    var t = new _$af482121(webview.gl, d);
    webview.gl.textureCache.spriteCache[this.imgUrl] = t;
    var img = new Image();
    var _this = this;
    img.src = this.imgUrl;
    img.onload = function() {
      t.loadImage(this);
      _this.texture = t;
      webview.updateView(true, false, 1)
    }
  }

  function _$af482038() {
    return this.shader.complete() && this.texture && this.texture.complete()
  }

  function _$af482039(a, x, y, w, h, color) {
    this.gl = a;
    this.shader = new _$af482095(a);
    this.shader.build("precision highp float; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(-0.5,1.0);  }", "precision highp float; uniform vec4 uColor;  void main(){ gl_FragColor=uColor;}", "rectShader ");
    this.vertexBuffer = a.createBuffer();
    this.color = color;
    this.update(x, y, w, h);
    webview.scene.rect = this
  }

  function _$af482040(x, y, w, h) {
    var a = this.gl;
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + w;
    this.y2 = y + h;
    if (w < 0) {
      this.x1 = x + w;
      this.x2 = x
    };
    if (h < 0) {
      this.y1 = y + h;
      this.y2 = y
    };
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array([x, y, x + w, y, x + w, y + h, x, y + h]), a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null)
  }

  function _$af482041() {
    var b = webview.gl;
    this.shader.bind();
    var p = this.shader.params;
    b.uniform4fv(p.uColor, this.color);
    var a = this.shader.attribs;
    b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
    b.enableVertexAttribArray(a.pos);
    b.vertexAttribPointer(a.pos, 2, b.FLOAT, !1, 8, 0);
    b.drawArrays(b.LINE_LOOP, 0, 4);
    b.disableVertexAttribArray(a.pos);
    b.bindBuffer(b.ARRAY_BUFFER, null);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null)
  }

  function _$af482042(a) {
    this.gl = a;
    this.shader = new _$af482095(a);
    this.shader.build("precision highp float; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0);  }", "precision highp float; uniform float alpha;  void main(){ gl_FragColor=vec4(1.0,1.0,1.0,alpha*0.5);}", "SnapshotLineShader ");
    this.vertexBuffer = a.createBuffer();
    this.alpha = 0;
    webview.scene.SnapshotLine = this;
    this.update()
  }

  function _$af482043() {
    var a = this.gl;
    var margin = 1;
    var rect = getSnapRect();
    var x = (rect.x + margin) / rect.canvasWidth;
    var y = (rect.y + margin) / rect.canvasHeight;
    var w = (rect.w - margin * 2) / rect.canvasWidth;
    var h = (rect.h - margin * 2) / rect.canvasHeight;
    var vertex = new Float32Array([x, y, x + w, y, x, y + h / 3, x + w, y + h / 3, x, y + h * 2 / 3, x + w, y + h * 2 / 3, x, y + h, x + w, y + h, x, y, x, y + h, x + w / 3, y, x + w / 3, y + h, x + w * 2 / 3, y, x + w * 2 / 3, y + h, x + w, y, x + w, y + h]);
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.bufferData(a.ARRAY_BUFFER, vertex, a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null)
  }

  function _$af482044() {
    if (this.alpha < 1) {
      this.alpha += 0.1
    };
    var b = webview.gl;
    b.enable(b.BLEND);
    b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
    this.shader.bind();
    var p = this.shader.params;
    b.uniform1f(p.alpha, this.alpha);
    var a = this.shader.attribs;
    b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
    b.enableVertexAttribArray(a.pos);
    b.vertexAttribPointer(a.pos, 2, b.FLOAT, !1, 8, 0);
    b.drawArrays(b.LINES, 0, 16);
    b.disableVertexAttribArray(a.pos);
    b.bindBuffer(b.ARRAY_BUFFER, null);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null)
  }

  function _$af482045(a, s, p1, p2, color, height, noPivot) {
    this.gl = a;
    this.shader = a.shaderCache.fromURLs("standardvert.glsl", "standardfrag.glsl");
    this.color = color;
    this.vertexBuffer = a.createBuffer();
    this.show = true;
    this.height = height;
    s && s.push(this);
    this.noPivot = noPivot;
    this.position = p1.concat(p2);
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array([p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]]), a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null)
  }

  function _$af482046() {
    var a = this.gl;
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.position), a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null)
  }

  function _$af482047(x, y, canvasW, canvasH) {
    if (!this.lineMatrix) {
      return
    };
    var p1 = this.pos2d.slice(0, 3);
    var p2 = this.pos2d.slice(4, 7);
    p1[0] = (p1[0] + 1) / 2 * canvasW;
    p2[0] = (p2[0] + 1) / 2 * canvasW;
    p1[1] = (p1[1] + 1) / 2 * canvasH;
    p2[1] = (p2[1] + 1) / 2 * canvasH;
    var dif = 800;
    if (Math.abs((x - p1[0]) * (p1[1] - p2[1]) - (y - p1[1]) * (p1[0] - p2[0])) < dif) {
      var xmin = Math.min(p1[0], p2[0]);
      var xmax = Math.max(p1[0], p2[0]);
      var ymin = Math.min(p1[1], p2[1]);
      var ymax = Math.max(p1[1], p2[1]);
      if (x > xmin - dif / 60 && x < xmax + dif / 60 && y > ymin - dif / 60 && y < ymax + dif / 60) {
        return true
      }
    };
    return false
  }

  function _$af482048(s, matrix, alpha) {
    var b = this.gl;
    this.shader.bind();
    b.enable(b.BLEND);
    b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
    var p = this.shader.params;
    if (this.noPivot) {
      var m = Matrix.mul(Matrix.empty(), s.view.projectionMatrix, s.view.viewMatrix3)
    } else {
      var m = Matrix.mul(Matrix.empty(), s.view.projectionMatrix, s.view.viewMatrix)
    };
    var lineMatrix = Matrix.identity();
    lineMatrix[13] = this.height;
    if (matrix) {
      Matrix.mul(lineMatrix, matrix, lineMatrix)
    };
    Matrix.mul(lineMatrix, m, lineMatrix);
    this.lineMatrix = lineMatrix;
    b.uniformMatrix4fv(p.uModelViewProjectionMatrix, !1, lineMatrix);
    var a = this.shader.attribs;
    b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
    b.enableVertexAttribArray(a.pos);
    b.vertexAttribPointer(a.pos, 3, b.FLOAT, !1, 12, 0);
    if (alpha != void(0)) {
      b.depthFunc(b.LEQUAL);
      this.color[3] = alpha;
      b.uniform4fv(p.uColor, this.color);
      b.drawArrays(b.LINES, 0, 2);
      b.depthFunc(b.ALWAYS);
      this.color[3] = 1 - alpha;
      b.uniform4fv(p.uColor, this.color);
      b.drawArrays(b.LINES, 0, 2)
    } else {
      b.uniform4fv(p.uColor, this.color);
      b.drawArrays(b.LINES, 0, 2)
    };
    b.disableVertexAttribArray(a.pos);
    b.bindBuffer(b.ARRAY_BUFFER, null);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
    b.depthFunc(b.LESS)
  }

  function _$af482049() {
    return this.shader.complete()
  }

  function _$af482050(a, b, c) {
    this.gl = a;
    this.desc = b;
    this.name = b.name;
    this.stride = 32;
    if (this.vertexColor = b.vertexColor) {
      this.stride += 4
    };
    if (this.secondaryTexCoord = b.secondaryTexCoord) {
      this.stride += 8
    };
    c = new _$af481922(c.data);
    this.indexCount = b.indexCount;
    this.indexTypeSize = b.indexTypeSize;
    this.indexType = 4 == this.indexTypeSize ? a.UNSIGNED_INT : a.UNSIGNED_SHORT;
    this.indexBuffer = a.createBuffer();
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    var d = c.readBytes(this.indexCount * this.indexTypeSize);
    a.bufferData(a.ELEMENT_ARRAY_BUFFER, d, a.STATIC_DRAW);
    var Uint32 = function(a) {
      return a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24
    };
    this.indexArray = [];
    for (var i = 0; i < d.length; i += this.indexTypeSize) {
      if (this.indexTypeSize == 2) {
        this.indexArray.push(Uint32([d[i], d[i + 1]]))
      } else {
        this.indexArray.push(Uint32([d[i], d[i + 1], d[i + 2], d[i + 3]]))
      }
    };
    this.wireCount = b.wireCount;
    this.wireBuffer = a.createBuffer();
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.wireBuffer);
    d = c.readBytes(this.wireCount * this.indexTypeSize);
    a.bufferData(a.ELEMENT_ARRAY_BUFFER, d, a.STATIC_DRAW);
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
    this.vertexCount = b.vertexCount;
    this.vertexBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    c = c.readBytes(this.vertexCount * this.stride);
    this.meshAlphaBuffer = [];
    var c1 = [];
    c1[0] = c[0];
    for (var i = 1; i < c.length; i++) {
      c1.push(c[i]);
      if ((i + 1) % this.stride === 0) {
        c1.push(0);
        c1.push(0);
        c1.push(128);
        c1.push(63)
      }
    };
    this.TangentArray = [];
    this.BitangentArray = [];
    this.NormalArray = [];
    this.vertexUint8 = c;
    this.posArray = [];
    for (var i = 0; i < c.length; i += this.stride) {
      this.posArray.push(_$af481902([c[i], c[i + 1], c[i + 2], c[i + 3]]));
      this.posArray.push(_$af481902([c[i + 4], c[i + 5], c[i + 6], c[i + 7]]));
      this.posArray.push(_$af481902([c[i + 8], c[i + 9], c[i + 10], c[i + 11]]))
    };
    c = new Uint8Array(c1);
    this.stride += 4;
    a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null);
    this.bounds = void(0) === b.minBound || void(0) === b.maxBound ? {
      min: Vect.create(-10, -10, -10, 1),
      max: Vect.create(10, 10, -0, 1)
    } : {
      min: Vect.create(b.minBound[0], b.minBound[1], b.minBound[2], 1),
      max: Vect.create(b.maxBound[0], b.maxBound[1], b.maxBound[2], 1)
    };
    this.bounds.maxExtent = Math.max(Math.max(b.maxBound[0] - b.minBound[0], b.maxBound[1] - b.minBound[1]), b.maxBound[2] - b.minBound[2])
  }

  function _$af482052(a) {
    var alphaArray = this.meshAlphaBuffer[this.meshAlphaBuffer.length - 1];
    var c1 = [];
    c1[0] = this.vertexUint8[0];
    for (var i = 1; i < this.vertexUint8.length; i++) {
      c1.push(this.vertexUint8[i]);
      if ((i + 1) % (this.stride - 4) === 0) {
        var alpha = alphaArray[(i + 1) / (this.stride - 4) - 1];
        if (alpha == 1) {
          c1.push(0);
          c1.push(0);
          c1.push(128);
          c1.push(63)
        } else {
          c1.push(0);
          c1.push(0);
          c1.push(0);
          c1.push(0)
        }
      }
    };
    var c = new Uint8Array(c1);
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null)
  }

  function _$af482053(a, o) {
    if (o.smooth) {};
    var alphaArray = this.meshAlphaBuffer[this.meshAlphaBuffer.length - 1];
    var c1 = [];
    c1[0] = this.vertexUint8[0];
    for (var i = 1; i < this.vertexUint8.length; i++) {
      c1.push(this.vertexUint8[i]);
      if ((i + 1) % (this.stride - 4) === 0) {
        var alpha = alphaArray[(i + 1) / (this.stride - 4) - 1];
        if (alpha == 1) {
          c1.push(0);
          c1.push(0);
          c1.push(128);
          c1.push(63)
        } else {
          c1.push(0);
          c1.push(0);
          c1.push(0);
          c1.push(0)
        }
      }
    };
    var c = new Uint8Array(c1);
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null)
  }

  function _$af482054(a, b, c) {
    this.mesh = a;
    this.gl = this.mesh.gl;
    this.indexOffset = b.firstIndex * a.indexTypeSize;
    this.indexCount = b.indexCount;
    this.wireIndexOffset = b.firstWireIndex * a.indexTypeSize;
    this.wireIndexCount = b.wireIndexCount;
    this.material = c;
    this.boundingSphere = this.computeBoundingSphere(b)
  }

  function _$af482055(b) {
    var signal = dom.id("signalText", fdageUI);
    if (!signal) {
      signal = document.createElement("div");
      signal.id = "signalText";
      fdageUI.appendChild(signal);
      signal.innerHTML = "\u6b63\u5728\u8ba1\u7b97\u6a21\u578b\u76d2";
      signal.style.position = "absolute";
      signal.style.left = "50%";
      signal.style.top = "50%";
      signal.style.color = "#aaa";
      signal.style["margin-left"] = -signal.clientWidth / 2 + "px"
    };
    var center;
    var rSquare = 0;
    var dSquare;
    var bounds = this.mesh.bounds;
    var posArray = this.mesh.posArray;
    var indexArray = this.mesh.indexArray;
    var indexStart = this.indexOffset / this.mesh.indexTypeSize;
    if (this.mesh.indexCount === this.indexCount && this.indexOffset === 0) {
      center = [(bounds.min[0] + bounds.max[0]) / 2, (bounds.min[1] + bounds.max[1]) / 2, (bounds.min[2] + bounds.max[2]) / 2];
      for (var i = 0; i < posArray.length; i += 3) {
        dSquare = Math.pow(posArray[i] - center[0], 2) + Math.pow(posArray[i + 1] - center[1], 2) + Math.pow(posArray[i + 2] - center[2], 2);
        rSquare = Math.max(rSquare, dSquare)
      }
    } else {
      if (b.boundingboxMax && b.boundingboxMin) {
        center = [(b.boundingboxMin[0] + b.boundingboxMax[0]) / 2, (b.boundingboxMin[1] + b.boundingboxMax[1]) / 2, (b.boundingboxMin[2] + b.boundingboxMax[2]) / 2];
        rSquare = Math.pow(b.boundingboxMax[0] - center[0], 2) + Math.pow(b.boundingboxMax[1] - center[1], 2) + Math.pow(b.boundingboxMax[2] - center[2], 2)
      } else {
        var box = {
          minX: Infinity,
          minY: Infinity,
          minZ: Infinity,
          maxX: -Infinity,
          maxY: -Infinity,
          maxZ: -Infinity
        };
        var iArray = [];
        for (var d = indexStart; d < indexStart + this.indexCount; d++) {
          if (iArray.indexOf(indexArray[d]) === -1) {
            iArray.push(indexArray[d]);
            if (posArray[indexArray[d] * 3] < box.minX) {
              box.minX = posArray[indexArray[d] * 3]
            };
            if (posArray[indexArray[d] * 3 + 1] < box.minY) {
              box.minY = posArray[indexArray[d] * 3 + 1]
            };
            if (posArray[indexArray[d] * 3 + 2] < box.minZ) {
              box.minZ = posArray[indexArray[d] * 3 + 2]
            };
            if (posArray[indexArray[d] * 3] > box.maxX) {
              box.maxX = posArray[indexArray[d] * 3]
            };
            if (posArray[indexArray[d] * 3 + 1] > box.maxY) {
              box.maxY = posArray[indexArray[d] * 3 + 1]
            };
            if (posArray[indexArray[d] * 3 + 2] > box.maxZ) {
              box.maxZ = posArray[indexArray[d] * 3 + 2]
            }
          }
        };
        center = [(box.minX + box.maxX) / 2, (box.minY + box.maxY) / 2, (box.minZ + box.maxZ) / 2];
        if (iArray.length > 4000) {
          rSquare = Math.pow(box.maxX - center[0], 2) + Math.pow(box.maxY - center[1], 2) + Math.pow(box.maxZ - center[2], 2)
        } else {
          for (var d = 0; d < iArray.length; d++) {
            var pos = [posArray[iArray[d] * 3], posArray[iArray[d] * 3 + 1], posArray[iArray[d] * 3 + 2]];
            dSquare = Math.pow(pos[0] - center[0], 2) + Math.pow(pos[1] - center[1], 2) + Math.pow(pos[2] - center[2], 2);
            rSquare = Math.max(rSquare, dSquare)
          }
        }
      }
    };
    return {
      center: center,
      radius: Math.sqrt(rSquare)
    }
  }

  function _$af482056(s) {
    var b = this.gl;
    if (this.material.bind(s)) {
      var a = this.material.shader.attribs;
      var c = this.mesh.stride;
      (this.material.cullBackFaces) ? (b.enable(b.CULL_FACE), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
      b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
      b.enableVertexAttribArray(a.vPosition);
      b.enableVertexAttribArray(a.vTexCoord);
      b.enableVertexAttribArray(a.vTangent);
      b.enableVertexAttribArray(a.vBitangent);
      b.enableVertexAttribArray(a.vNormal);
      b.enableVertexAttribArray(a.vAlpha);
      var d = this.mesh.vertexColor && void(0) !== a.vColor;
      d && b.enableVertexAttribArray(a.vColor);
      var e = this.mesh.secondaryTexCoord && void(0) !== a.vTexCoord2;
      e && b.enableVertexAttribArray(a.vTexCoord2);
      var f = 0;
      b.vertexAttribPointer(a.vPosition, 3, b.FLOAT, !1, c, f);
      f += 12;
      b.vertexAttribPointer(a.vTexCoord, 2, b.FLOAT, !1, c, f);
      f += 8;
      this.mesh.secondaryTexCoord && (e && b.vertexAttribPointer(a.vTexCoord2, 2, b.FLOAT, !1, c, f), f += 8);
      b.vertexAttribPointer(a.vTangent, 2, b.UNSIGNED_SHORT, !0, c, f);
      f += 4;
      b.vertexAttribPointer(a.vBitangent, 2, b.UNSIGNED_SHORT, !0, c, f);
      f += 4;
      b.vertexAttribPointer(a.vNormal, 2, b.UNSIGNED_SHORT, !0, c, f);
      d && b.vertexAttribPointer(a.vColor, 4, b.UNSIGNED_BYTE, !0, c, f + 4);
      b.vertexAttribPointer(a.vAlpha, 1, b.FLOAT, !0, c, c - 4);
      if (!s.drawPoints) {
        b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset)
      } else {
        b.enable(b.BLEND);
        b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
        b.drawElements(b.POINTS, this.indexCount, this.mesh.indexType, this.indexOffset)
      };
      b.disableVertexAttribArray(a.vPosition);
      b.disableVertexAttribArray(a.vTexCoord);
      b.disableVertexAttribArray(a.vTangent);
      b.disableVertexAttribArray(a.vBitangent);
      b.disableVertexAttribArray(a.vNormal);
      d && b.disableVertexAttribArray(a.vColor);
      e && b.disableVertexAttribArray(a.vTexCoord2);
      b.disableVertexAttribArray(a.vAlpha)
    }
  }

  function _$af482057(a, offset, alpha) {
    var b = this.gl;
    if (this.material.highlightShader.complete()) {
      b.enable(b.BLEND);
      b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
      var s = this.material.highlightShader;
      s.bind();
      var p = s.params;
      var c = this.mesh.stride;
      if (alpha == void(0)) {
        alpha = 0.3
      };
      b.enable(b.CULL_FACE);
      a.view.viewProjectionMatrix2 = Matrix.mul(Matrix.empty(), a.view.projectionMatrix, a.view.viewMatrix2);
      b.uniformMatrix4fv(p.uModelViewProjectionMatrix, !1, a.view.viewProjectionMatrix2);
      offset *= a.view.radius / 15;
      b.uniform1f(p.offset, offset);
      b.uniform1f(p.alpha, alpha);
      var f = 28;
      this.mesh.secondaryTexCoord && (f += 8), a = s.attribs;
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
      b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
      b.enableVertexAttribArray(a.vPosition);
      b.enableVertexAttribArray(a.vNormal);
      b.vertexAttribPointer(a.vPosition, 3, b.FLOAT, !1, c, 0);
      b.vertexAttribPointer(a.vNormal, 2, b.UNSIGNED_SHORT, !0, c, f);
      b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
      b.disableVertexAttribArray(a.vPosition);
      b.disableVertexAttribArray(a.vNormal)
    }
  }

  function _$af482058(a) {
    var b = this.gl;
    if (this.material.outlineShader.complete()) {
      b.enable(b.BLEND);
      b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.ONE_MINUS_DST_ALPHA, b.ONE);
      var s = this.material.outlineShader;
      s.bind();
      var p = s.params;
      var c = this.mesh.stride;
      b.enable(b.CULL_FACE);
      b.cullFace(b.FRONT);
      a.view.viewProjectionMatrix2 = Matrix.mul(Matrix.empty(), a.view.projectionMatrix, a.view.viewMatrix2);
      b.uniformMatrix4fv(p.uModelViewProjectionMatrix, !1, a.view.viewProjectionMatrix2);
      b.uniform1f(p.offset, this.material.outlineWidth);
      b.uniform1f(p.alpha, this.material.strength.alpha / 100);
      b.uniform3fv(p.color, this.material.outlineColor);
      var f = 28;
      this.mesh.secondaryTexCoord && (f += 8), a = s.attribs;
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
      b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
      b.enableVertexAttribArray(a.vPosition);
      b.enableVertexAttribArray(a.vNormal);
      b.vertexAttribPointer(a.vPosition, 3, b.FLOAT, !1, c, 0);
      b.vertexAttribPointer(a.vNormal, 2, b.UNSIGNED_SHORT, !0, c, f);
      b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
      b.disableVertexAttribArray(a.vPosition);
      b.disableVertexAttribArray(a.vNormal)
    }
  }

  function _$af482059(a) {
    var b = this.gl;
    this.mesh.desc.cullBackFaces ? (b.enable(b.CULL_FACE), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
    b.enableVertexAttribArray(a);
    b.vertexAttribPointer(a, 3, b.FLOAT, !1, this.mesh.stride, 0);
    b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
    b.disableVertexAttribArray(a)
  }

  function _$af482060(a, b) {
    var c = this.gl;
    this.mesh.desc.cullBackFaces ? (c.enable(c.CULL_FACE), c.cullFace(c.BACK)) : c.disable(c.CULL_FACE);
    c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    c.bindBuffer(c.ARRAY_BUFFER, this.mesh.vertexBuffer);
    c.enableVertexAttribArray(a);
    c.enableVertexAttribArray(b);
    c.vertexAttribPointer(a, 3, c.FLOAT, !1, this.mesh.stride, 0);
    c.vertexAttribPointer(b, 2, c.FLOAT, !1, this.mesh.stride, 12);
    c.drawElements(c.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
    c.disableVertexAttribArray(a);
    c.disableVertexAttribArray(b)
  }

  function _$af482061(a) {
    var b = this.gl;
    if (this.material.bindAlphaPrepass(a)) {
      a = this.material.prepassShader.attribs;
      var c = this.mesh.stride;
      this.material.cullBackFaces ? (b.enable(b.CULL_FACE), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
      b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
      b.enableVertexAttribArray(a.vPosition);
      b.enableVertexAttribArray(a.vTexCoord);
      b.vertexAttribPointer(a.vPosition, 3, b.FLOAT, !1, c, 0);
      b.vertexAttribPointer(a.vTexCoord, 2, b.FLOAT, !1, c, 12);
      b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
      b.disableVertexAttribArray(a.vPosition);
      b.disableVertexAttribArray(a.vTexCoord)
    }
  }

  function _$af482062() {
    var a = this.material.wireShader.attribs,
      b = this.gl;
    b.enableVertexAttribArray(a.vPosition);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.wireBuffer);
    b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
    b.vertexAttribPointer(a.vPosition, 3, b.FLOAT, !1, this.mesh.stride, 0);
    b.drawElements(b.LINES, this.wireIndexCount, this.mesh.indexType, this.wireIndexOffset);
    b.disableVertexAttribArray(a.vPosition)
  }

  function _$af482063() {
    return this.material.complete()
  }

  function _$af482064(a, b, c) {
    var d = new Image;
    d.crossOrigin = "Anonymous";
    d.onload = function() {
      0 < d.width && 0 < d.height ? b(d) : c && c()
    };
    c && (req.onerror = function() {
      c()
    });
    d.src = a
  }

  function _$af482067(a, b, c, d) {
    var e = new XMLHttpRequest;
    e.open("GET", a, !0);
    e.onload = function() {
      200 == e.status ? b(e.responseText) : c && c()
    };
    c && (e.onerror = function() {
      c()
    });
    d && (e.onprogress = function(a) {
      d(a.loaded, a.total)
    });
    e.send()
  }

  function _$af482071(a, b, c, d, o) {
    var e = new XMLHttpRequest;
    e.open("GET", a, !0);
    e.responseType = "arraybuffer";
    e.onload = function() {
      200 == e.status ? b(e.response) : c && c()
    };
    c && (e.onerror = function() {
      c()
    });
    d && (e.onprogress = function(a) {
      d(a.loaded, a.total, o && o.width)
    });
    e.send()
  }

  function _$af482075(a, b, c, d) {
    var e = new XMLHttpRequest;
    e.open("HEAD", a, !0);
    e.onload = function() {
      if (200 == e.status) {
        var f = e.getResponseHeader("Accept-Ranges");
        if (f && "none" != f) {
          var g = e.getResponseHeader("Content-Length") | 0,
            h = function(c, e) {
              var f = new XMLHttpRequest;
              f.open("GET", a, !0);
              f.setRequestHeader("Range", "bytes=" + c + "-" + e);
              f.responseType = "arraybuffer";
              f.onload = function() {
                (206 == f.status || 200 == f.status) && b(f.response) && e < g && (c += d, e += d, e = e < g - 1 ? e : g - 1, h(c, e))
              };
              f.send()
            };
          h(0, d - 1)
        } else {
          c && c()
        }
      } else {
        c && c()
      }
    };
    c && (req.onerror = function() {
      c()
    });
    e.send()
  }

  function _$af482080(a, b, c) {
    this.gl = a;
    this.desc = b;
    b = [];
    0 != this.desc.sharpen && b.push("#define SHARPEN");
    (this.useBloom = 0 < this.desc.bloomColor[0] * this.desc.bloomColor[3] || 0 < this.desc.bloomColor[1] * this.desc.bloomColor[3] || 0 < this.desc.bloomColor[2] * this.desc.bloomColor[3]) && b.push("#define BLOOM");
    b.push("#define VIGNETTE");
    1 == this.desc.saturation[0] * this.desc.saturation[3] && 1 == this.desc.saturation[1] * this.desc.saturation[3] && 1 == this.desc.saturation[2] * this.desc.saturation[3] || b.push("#define SATURATION");
    1 == this.desc.contrast[0] * this.desc.contrast[3] && 1 == this.desc.contrast[1] * this.desc.contrast[3] && 1 == this.desc.contrast[2] * this.desc.contrast[3] && 1 == this.desc.brightness[0] * this.desc.brightness[3] && 1 == this.desc.brightness[1] * this.desc.brightness[3] && 1 == this.desc.brightness[2] * this.desc.brightness[3] || b.push("#define CONTRAST");
    0 != this.desc.grain && b.push("#define GRAIN");
    1 == this.desc.toneMap ? b.push("#define REINHARD") : 2 == this.desc.toneMap && b.push("#define HEJL");
    this.desc.colorLUT && b.push("#define COLOR_LUT");
    this.sampleCount = 1;
    this.sampleIndex = 0;
    c && (c = [], this.gl.hints.mobile ? (this.sampleCount = 3, this.sampleOffsets = [
      [-0.4375, -0.5625],
      [0.625, -0.25],
      [-0.1875, 0.5]
    ]) : (c.push("#define HIGHQ"), this.sampleCount = 16, this.sampleOffsets = [
      [-1, 0],
      [-0.866, -0.5],
      [-0.7071, -0.7071],
      [-0.5, -0.866],
      [0, -1],
      [0.5, -0.866],
      [0.7071, -0.7071],
      [0.866, -0.5],
      [1, 0],
      [0.866, 0.5],
      [0.7071, 0.7071],
      [0.5, 0.866],
      [0, 1],
      [-0.5, 0.866],
      [-0.7071, 0.7071],
      [-0.866, 0.5]
    ]), this.aaResolve = a.shaderCache.fromURLs("postvert.glsl", "aaresolve.glsl", c));
    this.samplesValid = new Uint8Array(16);
    this.shader = a.shaderCache.fromURLs("postvert.glsl", "postfrag.glsl", b);
    this.plainShader = a.shaderCache.fromURLs("postvert.glsl", "postfrag.glsl", []);
    this.fullscreenTriangle = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.fullscreenTriangle);
    c = new Float32Array([0, 0, 2, 0, 0, 2]);
    a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null);
    if (this.useBloom) {
      this.bloomTextures = [];
      this.bloomTargets = [];
      for (c = 0; 2 > c; ++c) {
        b = {
          width: 256,
          height: 256,
          clamp: !0
        }, this.bloomTextures[c] = new _$af482121(a, b), this.bloomTextures[c].loadArray(null, a.RGBA, a.ext.textureHalf && a.ext.textureHalfLinear ? a.ext.textureHalf.HALF_FLOAT_OES : a.UNSIGNED_BYTE), this.bloomTargets[c] = new _$af481935(a, {
          width: b.width,
          height: b.height,
          color0: this.bloomTextures[c]
        })
      };
      for (this.bloomSamples = 64; this.bloomSamples + 16 >= a.limits.fragmentUniforms;) {
        this.bloomSamples /= 2
      };
      this.bloomShader = a.shaderCache.fromURLs("postvert.glsl", "bloom.glsl", ["#define BLOOM_SAMPLES " + this.bloomSamples]);
      this.shrinkShader = a.shaderCache.fromURLs("postvert.glsl", "bloomshrink.glsl")
    };
    a = new Uint8Array(16384);
    for (c = 0; 16384 > c; c++) {
      b = 255 * Math.random();
      var d = 255 * Math.random();
      a[c] = 0.5 * (b + d)
    };
    this.noiseTexture = new _$af482121(this.gl, {
      width: 128,
      height: 128
    });
    this.noiseTexture.loadArray(a, this.gl.LUMINANCE);
    this.desc.colorLUT && (a = this.desc.colorLUT, this.colorLUT = new _$af482121(this.gl, {
      width: a.length / 3 | 0,
      height: 1,
      clamp: !0
    }), this.colorLUT.loadArray(new Uint8Array(a), this.gl.RGB));
    this.blackTexture = new _$af482121(this.gl, {
      width: 1,
      height: 1
    });
    this.blackTexture.loadArray(new Uint8Array([0, 0, 0, 0]));
    this.bloomResult = this.blackTexture
  }

  function _$af482081(a) {
    if (this.useBloom && this.bloomShader.complete() && this.shrinkShader.complete()) {
      this.shrinkShader.bind();
      this.bloomTargets[1].bind();
      a.bind(this.shrinkShader.samplers.tInput);
      this.fillScreen(this.shrinkShader.attribs.vCoord);
      this.bloomShader.bind();
      var b = [];
      this.bloomTargets[0].bind();
      this.bloomTextures[1].bind(this.bloomShader.samplers.tInput);
      for (var c = 0, d = 0; d < this.bloomSamples; ++d) {
        var e = -1 + 2 * d / (this.bloomSamples - 1),
          f;
        f = 4 * e;
        f = Math.exp(-0.5 * f * f / 1) / 2.50662827463;
        c += f;
        b[4 * d + 0] = e * this.desc.bloomSize;
        b[4 * d + 1] = 0;
        b[4 * d + 2] = f;
        b[4 * d + 3] = 0
      };
      for (d = 0; d < this.bloomSamples; ++d) {
        b[4 * d + 2] /= c
      };
      this.gl.uniform4fv(this.bloomShader.params.uKernel, b);
      this.fillScreen(this.bloomShader.attribs.vCoord);
      this.bloomTargets[1].bind();
      this.bloomTextures[0].bind(this.bloomShader.samplers.tInput);
      for (d = 0; d < this.bloomSamples; ++d) {
        c = b[4 * d + 0], c *= a.desc.width / a.desc.height, b[4 * d + 0] = 0, b[4 * d + 1] = c
      };
      this.gl.uniform4fv(this.bloomShader.params.uKernel, b);
      this.fillScreen(this.bloomShader.attribs.vCoord);
      this.bloomResult = this.bloomTextures[1]
    } else {
      this.bloomResult = this.blackTexture
    }
  }

  function _$af482082(a, b) {
    var c = this.desc,
      d = {};
    d.scale = [c.contrast[0] * c.contrast[3], c.contrast[1] * c.contrast[3], c.contrast[2] * c.contrast[3]];
    d.bias = [c.bias[0] * c.bias[3], c.bias[1] * c.bias[3], c.bias[2] * c.bias[3]];
    d.bias = [-d.bias[0] * d.scale[0] + d.bias[0], -d.bias[1] * d.scale[1] + d.bias[1], -d.bias[2] * d.scale[2] + d.bias[2]];
    var e = [c.brightness[0] * c.brightness[3], c.brightness[1] * c.brightness[3], c.brightness[2] * c.brightness[3]];
    d.scale = [d.scale[0] * e[0], d.scale[1] * e[1], d.scale[2] * e[2]];
    d.bias = [d.bias[0] * e[0], d.bias[1] * e[1], d.bias[2] * e[2]];
    d.saturation = [c.saturation[0] * c.saturation[3], c.saturation[1] * c.saturation[3], c.saturation[2] * c.saturation[3]];
    d.bloomColor = [c.bloomColor[0] * c.bloomColor[3], c.bloomColor[1] * c.bloomColor[3], c.bloomColor[2] * c.bloomColor[3]];
    d.sharpen = [c.sharpen, 0.25 * c.sharpen, c.sharpenLimit];
    d.sharpenKernel = [1 / a, 0, 0, 1 / b];
    e = a > b ? a : b;
    d.vignetteAspect = [a / e, a / e, 0.5 * a / e, 0.5 * a / e];
    d.vignette = [2 * (1 - c.vignette[0]) * c.vignette[3], 2 * (1 - c.vignette[1]) * c.vignette[3], 2 * (1 - c.vignette[2]) * c.vignette[3], c.vignetteCurve];
    var e = 1 / this.noiseTexture.desc.width,
      f = 1 / this.noiseTexture.desc.height,
      g = 1 - c.grainSharpness;
    d.grainCoord = [e * a, f * b, 0.5 * g * e, 0.5 * g * f];
    d.grainScaleBias = [2 * c.grain, -c.grain];
    return d
  }

  function _$af482083(a, b, c, d) {
    1 < this.sampleCount && this.allocAABuffers(a.desc.width, a.desc.height);
    d || this.prepareBloom(a);
    var e = d ? this.plainShader : this.shader;
    if (e.bind()) {
      d = this.gl;
      var f = e.samplers,
        g = e.params,
        h = this.computeParams(b, c);
      a.bind(f.tInput);
      this.bloomResult.bind(f.tBloom);
      this.noiseTexture.bind(f.tGrain);
      this.colorLUT && this.colorLUT.bind(f.tLUT);
      d.uniform3fv(g.uScale, h.scale);
      d.uniform3fv(g.uBias, h.bias);
      d.uniform3fv(g.uSaturation, h.saturation);
      d.uniform4fv(g.uSharpenKernel, h.sharpenKernel);
      d.uniform3fv(g.uSharpness, h.sharpen);
      d.uniform3fv(g.uBloomColor, h.bloomColor);
      d.uniform4fv(g.uVignetteAspect, h.vignetteAspect);
      d.uniform4fv(g.uVignette, h.vignette);
      d.uniform4fv(g.uGrainCoord, h.grainCoord);
      d.uniform2fv(g.uGrainScaleBias, h.grainScaleBias);
      if (this.aaResolve) {
        this.sampleFramebuffers[this.sampleIndex].bind();
        this.fillScreen(e.attribs.vCoord);
        this.samplesValid[this.sampleIndex] = 1;
        _$af481935.bindNone(d);
        d.viewport(0, 0, b, c);
        this.aaResolve.bind();
        for (b = a = 0; b < this.sampleCount; ++b) {
          a += this.samplesValid[b], this.sampleTextures[b].bind(this.aaResolve.samplers["tInput" + b])
        };
        a = 1 / a;
        d.uniformMatrix4fv(this.aaResolve.params.uSamplesValid, !1, [this.samplesValid[0] ? a : 0, this.samplesValid[1] ? a : 0, this.samplesValid[2] ? a : 0, this.samplesValid[3] ? a : 0, this.samplesValid[4] ? a : 0, this.samplesValid[5] ? a : 0, this.samplesValid[6] ? a : 0, this.samplesValid[7] ? a : 0, this.samplesValid[8] ? a : 0, this.samplesValid[9] ? a : 0, this.samplesValid[10] ? a : 0, this.samplesValid[11] ? a : 0, this.samplesValid[12] ? a : 0, this.samplesValid[13] ? a : 0, this.samplesValid[14] ? a : 0, this.samplesValid[15] ? a : 0]);
        this.fillScreen(this.aaResolve.attribs.vCoord);
        this.sampleIndex = (this.sampleIndex + 1) % this.sampleCount
      } else {
        _$af481935.bindNone(d), d.viewport(0, 0, b, c), this.fillScreen(e.attribs.vCoord)
      }
    }
  }

  function _$af482084(a, b) {
    if (void(0) === this.sampleTextures || this.sampleTextures[0].desc.width != a || this.sampleTextures[0].desc.height != b) {
      this.sampleTextures = [];
      this.sampleFramebuffers = [];
      for (var c = 0; c < this.sampleCount; ++c) {
        var d = new _$af482121(this.gl, {
          width: a,
          height: b,
          nofilter: !0
        });
        d.loadArray();
        this.sampleTextures.push(d);
        this.sampleFramebuffers.push(new _$af481935(this.gl, {
          width: a,
          height: b,
          color0: d,
          ignoreStatus: !0
        }))
      };
      this.discardAAHistory()
    }
  }

  function _$af482085(a) {
    if (1 < this.sampleCount) {
      var b = this.sampleOffsets[this.sampleIndex][0] / a.size[0],
        c = this.sampleOffsets[this.sampleIndex][1] / a.size[1],
        b = Matrix.translation(Matrix.empty(), b, c, 0);
      Matrix.mul(a.projectionMatrix, b, a.projectionMatrix)
    }
  }

  function _$af482086() {
    for (var a = this.sampleIndex = 0; a < this.samplesValid.length; ++a) {
      this.samplesValid[a] = 0
    }
  }

  function _$af482087(a) {
    var b = this.gl;
    b.bindBuffer(b.ARRAY_BUFFER, this.fullscreenTriangle);
    b.enableVertexAttribArray(a);
    b.vertexAttribPointer(a, 2, b.FLOAT, !1, 0, 0);
    b.drawArrays(b.TRIANGLES, 0, 3);
    b.disableVertexAttribArray(a);
    b.bindBuffer(b.ARRAY_BUFFER, null)
  }

  function _$af482088(a) {
    this.gl = a;
    this.name = "untitled";
    this.meshes = [];
    this.meshRenderables = [];
    this.materials = {};
    this.nextView = this.sky = this.view = null;
    this.viewFade = 0;
    this.shadow = this.stripData = this.lights = null;
    this.lines = [];
    this.rect = null;
    this.sprites = []
  }

  function _$af482089(data) {
    var failure = "";
    if (!data.meshes.length) {
      failure += "mesh\u6570\u91cf\u4e3a0 "
    };
    if (!data.materials.length) {
      failure += "materials\u6570\u91cf\u4e3a0 "
    };
    return failure
  }

  function _$af482090(a) {
    var b = this.gl,
      c, d = a.extract("scene.json");
    if (void(0) !== d) {
      d = (new _$af481922(d.data)).asString();
      if (null == d || 0 >= d.length) {
        return !1
      };
      try {
        c = JSON.parse(d)
      } catch (e) {
        return console.error(e), !1
      }
    } else {
      return !1
    };
    c.sky.backgroundColor = dom.objToArray(c.sky.backgroundColor);
    c.sky.diffuseCoefficients = dom.objToArray(c.sky.diffuseCoefficients);
    if (gui) {
      gui.controls.sceneData = c
    };
    var failure = this.checkFailure(c);
    this.metaData = c.metaData;
    this.view = new _$af482204(c.mainCamera.view);
    this.sky = new _$af482115(this.gl, a, c.sky);
    this.lights = new _$af481989(c.lights, this.view);
    this.materials = {};
    for (var f = 0; f < c.materials.length; f++) {
      d = c.materials[f];
      if (this.materials[d.name]) {
        c.materials.splice(f, 1);
        f--;
        continue
      };
      d.lightCount = this.lights.count;
      d.shadowCount = this.lights.shadowCount;
      this.materials[d.name] = new _$af482002(this.gl, a, d);
      c.materials2 ? (c.materials2[d.name] = d) : (c.materials2 = {}, c.materials2[d.name] = d)
    };
    if (c.meshes) {
      for (d = 0; d < c.meshes.length; ++d) {
        f = c.meshes[d];
        f = new _$af482050(this.gl, f, a.extract(f.file));
        this.meshes.push(f);
        for (var g = 0; g < f.desc.subMeshes.length; ++g) {
          var h = f.desc.subMeshes[g];
          if (this.materials[h.material].cullBackFaces === void(0)) {
            this.materials[h.material].cullBackFaces = f.desc.cullBackFaces
          };
          this.meshRenderables.push(new _$af482054(f, h, this.materials[h.material]))
        }
      }
    };
    this.bounds = new _$af481921(this.meshes);
    this.postRender = new _$af482080(this.gl, c.mainCamera.post, !0);
    this.shadow = new _$af482111(b, this.lights.shadowCount);
    if (failure != "") {
      return {
        failure: "," + failure
      }
    };
    return !0
  }

  function _$af482091() {
    this.lights.update(this.view, this.bounds)
  }

  function _$af482092(a) {
    this.shadow.collect(this, a)
  }

  function _$af482093() {
    var a = this.gl;
    this.sky.setClearColor();
    a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT | a.STENCIL_BUFFER_BIT);
    a.enable(a.DEPTH_TEST);
    this.sky.draw(this);
    var lights = this.lights.lights;
    if (!gui.snapshotHiding) {
      if (gui.state === "SCENE") {
        if (this.Axis && gui.showAxis) {
          for (var i = 0; i < this.Axis.length; i++) {
            this.Axis[i].show && this.Axis[i].draw(this, null, 0.8)
          }
        };
        if (this.ground && this.ground.length) {
          for (var i = 0; i < this.ground.length; i++) {
            this.ground[i].show && this.ground[i].draw(this)
          }
        }
      };
      a.depthMask(!1);
      if (gui.state === "LIGHT") {
        for (var i = 0; i < this.lights.maxCount; i++) {
          lights[i].tranCon.visible && lights[i].tranCon.draw(lights[i].matrixWeight);
          lights[i].targetCon.visible && lights[i].type != 1 && lights[i].targetCon.draw()
        }
      };
      for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].visible && this.sprites[i].draw()
      };
      a.depthMask(!0)
    };
    for (var b = 0; b < this.meshRenderables.length; ++b) {
      this.meshRenderables[b].material.usesBlending || this.meshRenderables[b].draw(this)
    };
    for (var b = 0; b < this.meshRenderables.length; ++b) {
      this.meshRenderables[b].material.outline && this.meshRenderables[b].drawOutline(this)
    };
    if (gui.drawRect && !gui.snapshotHiding) {
      this.drawPoints = true;
      for (var b = 0; b < this.meshRenderables.length; ++b) {
        this.meshRenderables[b].draw(this)
      };
      this.drawPoints = false
    };
    a.enable(a.POLYGON_OFFSET_FILL);
    a.polygonOffset(1, 1);
    a.colorMask(!1, !1, !1, !1);
    for (b = 0; b < this.meshRenderables.length; ++b) {
      this.meshRenderables[b].drawAlphaPrepass(this)
    };
    a.colorMask(!0, !0, !0, !0);
    a.disable(a.POLYGON_OFFSET_FILL);
    a.depthFunc(a.LEQUAL);
    a.depthMask(!1);
    for (b = 0; b < this.meshRenderables.length; ++b) {
      this.meshRenderables[b].material.usesBlending && this.meshRenderables[b].draw(this)
    };
    if (!gui.snapshotHiding) {
      a.depthMask(!0);
      if (gui.state === "LIGHT") {
        for (var i = 0; i < this.lights.maxCount; i++) {
          lights[i].tranCon.visible && lights[i].tranCon.draw(lights[i].matrixWeight);
          lights[i].targetCon.visible && lights[i].type != 1 && lights[i].targetCon.draw()
        }
      };
      a.depthMask(!1);
      for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].visible && this.sprites[i].draw()
      };
      a.depthFunc(a.ALWAYS);
      for (b = 0; b < this.meshRenderables.length; ++b) {
        if (this.meshRenderables[b].material.highlight) {
          this.meshRenderables[b].drawHighlight(this, gui.HLoffset, gui.HLalpha)
        }
      };
      a.depthMask(!0);
      a.depthFunc(a.LESS);
      if (this.rect && gui.drawRect) {
        this.rect.draw()
      };
      if (gui.state === "SCENE") {
        if (this.ground && this.ground.length) {
          for (var i = 0; i < this.ground.length; i++) {
            this.ground[i].show && this.ground[i].draw(this)
          }
        };
        if (this.Axis && gui.showAxis) {
          for (var i = 0; i < this.Axis.length; i++) {
            this.Axis[i].show && this.Axis[i].draw(this, null, 0.8)
          }
        }
      };
      if (this.SnapshotLine && this.SnapshotLine.alpha) {
        this.SnapshotLine.draw()
      }
    };
    a.depthMask(!0);
    a.depthFunc(a.LESS);
    a.disable(a.BLEND)
  }

  function _$af482094() {
    if (!this.sky.complete() || !this.shadow.complete()) {
      return !1
    };
    for (var a = 0; a < this.meshRenderables.length; ++a) {
      if (!this.meshRenderables[a].complete()) {
        return !1
      }
    };
    return !0
  }

  function _$af482095(a) {
    this.gl = a;
    this.program = null;
    this.params = {};
    this.samplers = {};
    this.attribs = {}
  }

  function _$af482096(a, b, name) {
    var c = this.gl;
    this.program = c.createProgram();
    this.params = {};
    this.samplers = {};
    this.attribs = {};
    this.name = name;
    var d = function(a) {
        for (var b = "", c = a.indexOf("\x0A"), d = 0; - 1 != c;) {
          d++, b += d + ": ", b += a.substring(0, c + 1), a = a.substring(c + 1, a.length), c = a.indexOf("\x0A")
        };
        console.log(this.name + b)
      },
      e = c.createShader(c.VERTEX_SHADER);
    c.shaderSource(e, a);
    c.compileShader(e);
    c.getShaderParameter(e, c.COMPILE_STATUS) || (console.log(this.name + c.getShaderInfoLog(e)), fdage.verboseErrors && d(a));
    c.attachShader(this.program, e);
    e = c.createShader(c.FRAGMENT_SHADER);
    c.shaderSource(e, b);
    c.compileShader(e);
    c.getShaderParameter(e, c.COMPILE_STATUS) || (console.log(this.name + c.getShaderInfoLog(e)), fdage.verboseErrors && d(b));
    c.attachShader(this.program, e);
    c.linkProgram(this.program);
    c.getProgramParameter(this.program, c.LINK_STATUS) || console.log(this.name + c.getProgramInfoLog(this.program));
    for (var e = c.getProgramParameter(this.program, c.ACTIVE_UNIFORMS), f = 0, d = 0; d < e; ++d) {
      var g = c.getActiveUniform(this.program, d),
        h = g.name,
        k = h.indexOf("[");
      0 <= k && (h = h.substring(0, k));
      k = c.getUniformLocation(this.program, g.name);
      g.type == c.SAMPLER_2D || g.type == c.SAMPLER_CUBE ? this.samplers[h] = {
        location: k,
        unit: f++
      } : this.params[h] = k
    };
    e = c.getProgramParameter(this.program, c.ACTIVE_ATTRIBUTES);
    for (d = 0; d < e; ++d) {
      f = c.getActiveAttrib(this.program, d), this.attribs[f.name] = c.getAttribLocation(this.program, f.name)
    }
  }

  function _$af482098() {
    return this.program ? (this.gl.useProgram(this.program), !0) : !1
  }

  function _$af482099() {
    return !!this.program
  }

  function _$af482100(a) {
    this.gl = a;
    this.cache = []
  }

  function _$af482101(a, b, c) {
    var d = "";
    if (c) {
      for (var e = 0; e < c.length; ++e) {
        d = c[e] + "\x0A" + d
      }
    };
    c = d + ":" + a + "|" + b;
    e = this.cache[c];
    if (void(0) !== e) {
      return e
    };
    var f = new _$af482095(this.gl),
      g = null,
      h = null,
      k = function() {
        null != g && null != h && f.build(g, h, a + " ")
      };
    this.fetch(a, function(a) {
      g = d + a;
      k()
    });
    this.fetch(b, function(a) {
      h = d + a;
      k()
    });
    return this.cache[c] = f
  }

  function _$af482105(a, b) {
    "undefined" != typeof ShaderTable ? void(0) !== ShaderTable[a] ? this.resolveIncludes(new String(ShaderTable[a]), b) : b("") : Network.fetchText("src/shader/" + a, function(a) {
      this.resolveIncludes(a, b)
    }.bind(this), function() {
      b("")
    })
  }

  function _$af482108(a, b) {
    for (var c = [], d = !0, e = function(a, b, e, f, m) {
        d = !0;
        c.push({
          offset: m,
          path: b.slice(1, b.length - 1)
        });
        return ""
      }; d;) {
      d = !1, a = a.replace(/#include\s((<[^>]+>)|("[^"]+"))/, e)
    };
    if (0 < c.length) {
      for (var f = c.length, e = 0; e < c.length; ++e) {
        this.fetch(c[e].path, function(d) {
          this.src = d;
          if (0 >= --f) {
            for (d = c.length - 1; 0 <= d; --d) {
              a = a.substring(0, c[d].offset) + c[d].src + a.substring(c[d].offset)
            };
            b(a)
          }
        }.bind(c[e]))
      }
    } else {
      b(a)
    }
  }

  function _$af482111(a, b) {
    this.gl = a;
    this.shadowCount = 3;
    this.desc = c;
    this.shaderSolid = a.shaderCache.fromURLs("shadowvert.glsl", "shadowfrag.glsl");
    this.shaderAlphaTest = a.shaderCache.fromURLs("shadowvert.glsl", "shadowfrag.glsl", ["#define ALPHA_TEST 1"]);
    this.depthTextures = [];
    this.depthTargets = [];
    if (0 < this.shadowCount) {
      var c = {
        width: 2048,
        height: 2048,
        clamp: !0,
        mipmap: !1,
        nofilter: !0
      };
      a.hints.mobile && (c.width = c.height = 1536);
      for (var d = {
          width: c.width,
          height: c.height,
          depthBuffer: _$af481935.createDepthBuffer(a, c.width, c.height)
        }, e = a.RGB, f = a.UNSIGNED_BYTE, g = 0; g < this.shadowCount; ++g) {
        this.depthTextures[g] = new _$af482121(a, c), this.depthTextures[g].loadArray(null, e, f), d.color0 = this.depthTextures[g], this.depthTargets[g] = new _$af481935(a, d)
      }
    }
  }

  function _$af482112(a, b) {
    this.shadowCount > b && this.depthTextures[b].bind(a)
  }

  function _$af482113(a, b) {
    var c = this.gl,
      d = a.lights,
      e = d.shadowCount,
      f = d.modelViewBuffer,
      g = d.projectionBuffer,
      h = d.matrix;
    if (!(0 >= e)) {
      for (var k = Matrix.empty(), l = !1, m = 0; m < e; ++m) {
        if (d.shadowsNeedUpdate[m]) {
          d.shadowsNeedUpdate[m] = 0;
          l = !0;
          Matrix.mul(k, f.subarray(16 * m, 16 * (m + 1)), h);
          Matrix.mul(k, g.subarray(16 * m, 16 * (m + 1)), k);
          this.depthTargets[m].bind();
          c.clearColor(1, 1, 1, 1);
          c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
          var n = this.shaderSolid;
          n.bind();
          c.uniformMatrix4fv(n.params.uViewProjection, !1, k);
          for (var r = 0; r < a.meshRenderables.length; ++r) {
            var p = a.meshRenderables[r],
              q = p.material;
            p.mesh.desc.castShadows && q.castShadows && (0 < q.shadowAlphaTest || p.drawShadow(n.attribs.vPosition))
          };
          n = this.shaderAlphaTest;
          n.bind();
          c.uniformMatrix4fv(n.params.uViewProjection, !1, k);
          for (r = 0; r < a.meshRenderables.length; ++r) {
            p = a.meshRenderables[r], q = p.material, p.mesh.desc.castShadows && q.castShadows && 0 < q.shadowAlphaTest && (q.textures.albedo.bind(n.samplers.tAlbedo), p.drawAlphaShadow(n.attribs.vPosition, n.attribs.vTexCoord))
          }
        }
      };
      l && (b.bind(), c.enable(c.CULL_FACE), c.cullFace(c.BACK))
    }
  }

  function _$af482114() {
    return this.shaderSolid.complete() && this.shaderAlphaTest.complete()
  }

  function _$af482115(a, b, c) {
    this.gl = a;
    var d = b["get"]("sky.dat") || b["get"]("sky.png");
    if (void(0) !== d) {
      this.specularTexture = new _$af482121(a, {
        width: 256,
        height: 2048,
        clamp: !0
      });
      b = d.data;
      for (var d = d.data.length, e = d / 4, f = new Uint8Array(d), g = 0, h = 0; g < d; ++h) {
        f[g++] = b[h + 2 * e], f[g++] = b[h + e], f[g++] = b[h], f[g++] = b[h + 3 * e]
      };
      this.specularTexture.loadArray(f)
    };
    this.diffuseCoefficients = new Float32Array(c.diffuseCoefficients);
    gui.diffuseCoefficients["0"].value = c.diffuseCoefficients.slice(0);
    this.modelBright = dom.ifVoid(c.modelBright, 1);
    this.modelSkyRatio = dom.ifVoid(c.modelSkyRatio, 1);
    this.skyBlurIndex = dom.ifVoid(c.skyBlurIndex, 7);
    this.backgroundMode = c.backgroundMode || 0;
    this.backgroundBrightness = dom.ifVoid(c.backgroundBrightness, 1);
    this.backgroundColor = new Float32Array(c.backgroundColor);
    if (this.backgroundShader = a.shaderCache.fromURLs("skyvert.glsl", 3 == this.backgroundMode ? "skySH.glsl" : "sky.glsl", ["#define SKYMODE " + this.backgroundMode]), this.vertexBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), c = 1 / 256, b = 0.5 / 256, d = 2.8 * b, e = 0.5 * b, c = new Float32Array([0, 1, 0, 0.49609375 + c, 0.49609375 + c, 1, 0, 0, 0.9921875 + c, 0.49609375 + c, 0, 0, 1, 0.49609375 + c, 0.9921875 + c, -1, 0, 0, 0 + c, 0.49609375 + c, 0, 0, -1, 0.49609375 + c, 0 + c, 0, -1, 0, 0.9921875 + c, 0 + c, 0, -1, 0, 0.9921875 + c, 0.9921875 + c, 0, -1, 0, 0 + c, 0.9921875 + c, 0, -1, 0, 0 + c, 0 + c, d, 1 - d, -d, 0.5 + b, 0.5 - b, d, 1 - d, d, 0.5 + b, 0.5 + b, -d, 1 - d, d, 0.5 - b, 0.5 + b, -d, 1 - d, -d, 0.5 - b, 0.5 - b, -d, 0, -1 + d, 0.5 - b, 0 + c + b, d, 0, -1 + d, 0.5 + b, 0 + c + b, 1 - d, 0, -d, 0.9921875 + c - b, 0.5 - b, 1 - d, 0, d, 0.9921875 + c - b, 0.5 + b, d, 0, 1 - d, 0.5 + b, 0.9921875 + c - b, -d, 0, 1 - d, 0.5 - b, 0.9921875 + c - b, -1 + d, 0, d, 0 + c + b, 0.5 + b, -1 + d, 0, -d, 0 + c + b, 0.5 - b, 1, 0, 0, 0.9921875 + c - e, 0.49609375 + c, 0, 0, 1, 0.49609375 + c, 0.9921875 + c - e, -1, 0, 0, 0 + c + e, 0.49609375 + c, 0, 0, -1, 0.49609375 + c, 0 + c + e, 0, 1, 0, 0.49609375 + c - e, 0.49609375 + c, 0, 1, 0, 0.49609375 + c, 0.49609375 + c - e, 0, 1, 0, 0.49609375 + c + e, 0.49609375 + c, 0, 1, 0, 0.49609375 + c, 0.49609375 + c + e]), a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, null), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), c = new Uint16Array([2, 1, 6, 3, 2, 7, 8, 4, 3, 4, 5, 1, 9, 14, 15, 17, 10, 16, 18, 19, 11, 20, 13, 12, 28, 12, 13, 13, 24, 28, 28, 24, 9, 9, 24, 14, 25, 9, 15, 25, 15, 21, 10, 25, 21, 10, 21, 16, 22, 26, 10, 22, 10, 17, 18, 11, 26, 22, 18, 26, 19, 23, 27, 19, 27, 11, 23, 20, 27, 27, 20, 12]), this.skyIndexCount = c.length, a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null), 3 == this.backgroundMode) {
      for (this.backgroundCoefficients = new Float32Array(this.diffuseCoefficients), g = 0; g < this.backgroundCoefficients.length; ++g) {
        this.backgroundCoefficients[g] *= this.backgroundBrightness
      }
    } else {
      this.backgroundTexture = new _$af482121(a, {
        width: 256,
        height: 256,
        clamp: !0
      });
      c = !1;
      var k;
      a.ext.textureHalf && a.ext.textureHalfLinear && (this.backgroundTexture.loadArray(null, a.RGB, a.ext.textureHalf.HALF_FLOAT_OES), k = new _$af481935(a, {
        color0: this.backgroundTexture
      }), c = k.valid);
      !c && a.ext.textureFloat && a.ext.textureFloatLinear && !a.hints.mobile && (this.backgroundTexture.loadArray(null, a.RGB, a.FLOAT), k = new _$af481935(a, {
        color0: this.backgroundTexture
      }), c = k.valid);
      c || (this.backgroundTexture.loadArray(), k = new _$af481935(a, {
        color0: this.backgroundTexture
      }));
      k.bind();
      k = new _$af482095(a);
      k.build("precision highp float; varying vec2 tc; attribute vec4 p; void main(){ gl_Position=p; tc=vec2(0.5,0.5/8.0)*p.xy+vec2(0.5," + (this.skyBlurIndex - 0.5) + "/8.0); }", "precision highp float; varying vec2 tc; uniform sampler2D tex; uniform float b; void main(){vec4 s=texture2D(tex,tc); gl_FragColor.xyz=s.xyz*(b*s.w);}", "skyboxShder");
      k.bind();
      skyShader = k;
      a.uniform1f(k.params.b, 7 * Math.sqrt(this.backgroundBrightness));
      this.specularTexture.bind(k.samplers.tex);
      c = a.createBuffer();
      a.bindBuffer(a.ARRAY_BUFFER, c);
      c = new Float32Array([-1, -1, 0.5, 1, 3, -1, 0.5, 1, -1, 3, 0.5, 1]);
      a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
      a.enableVertexAttribArray(k.attribs.p);
      a.vertexAttribPointer(k.attribs.p, 4, a.FLOAT, !1, 0, 0);
      a.drawArrays(a.TRIANGLES, 0, 3);
      a.disableVertexAttribArray(k.attribs.p);
      a.bindBuffer(a.ARRAY_BUFFER, null)
    }
  }

  function _$af482116() {
    var a = webview.gl;
    this.shader = new _$af482095(a);
    this.shader.build("precision highp float; uniform mat4 uViewProjection;attribute vec3 vPosition;attribute vec2 vTexCoord;\x0Avarying vec2 j;\x0Avec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}vec4 hu(mat4 o,vec3 hn){return o[0]*hn.x+o[1]*hn.y+o[2]*hn.z;}void main(void){gl_Position=m(uViewProjection,vPosition);j=vTexCoord;}", "precision highp float;uniform sampler2D tSkyTexture;varying vec2 j;void main(void){vec4 r=texture2D(tSkyTexture,j);gl_FragColor.xyz=r.xyz*r.xyz*r.w*r.xyz*r.xyz*r.w*r.w*49.0;gl_FragColor.w=1.01;}", "sky2");
    this.vertexBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    var c = 1 / 256,
      b = 0.5 / 256,
      d = 2.8 * b,
      e = 0.5 * b;
    c = new Float32Array([0, 1, 0, 0.49609375 + c, 0.49609375 + c, 1, 0, 0, 0.9921875 + c, 0.49609375 + c, 0, 0, 1, 0.49609375 + c, 0.9921875 + c, -1, 0, 0, 0 + c, 0.49609375 + c, 0, 0, -1, 0.49609375 + c, 0 + c, 0, -1, 0, 0.9921875 + c, 0 + c, 0, -1, 0, 0.9921875 + c, 0.9921875 + c, 0, -1, 0, 0 + c, 0.9921875 + c, 0, -1, 0, 0 + c, 0 + c, d, 1 - d, -d, 0.5 + b, 0.5 - b, d, 1 - d, d, 0.5 + b, 0.5 + b, -d, 1 - d, d, 0.5 - b, 0.5 + b, -d, 1 - d, -d, 0.5 - b, 0.5 - b, -d, 0, -1 + d, 0.5 - b, 0 + c + b, d, 0, -1 + d, 0.5 + b, 0 + c + b, 1 - d, 0, -d, 0.9921875 + c - b, 0.5 - b, 1 - d, 0, d, 0.9921875 + c - b, 0.5 + b, d, 0, 1 - d, 0.5 + b, 0.9921875 + c - b, -d, 0, 1 - d, 0.5 - b, 0.9921875 + c - b, -1 + d, 0, d, 0 + c + b, 0.5 + b, -1 + d, 0, -d, 0 + c + b, 0.5 - b, 1, 0, 0, 0.9921875 + c - e, 0.49609375 + c, 0, 0, 1, 0.49609375 + c, 0.9921875 + c - e, -1, 0, 0, 0 + c + e, 0.49609375 + c, 0, 0, -1, 0.49609375 + c, 0 + c + e, 0, 1, 0, 0.49609375 + c - e, 0.49609375 + c, 0, 1, 0, 0.49609375 + c, 0.49609375 + c - e, 0, 1, 0, 0.49609375 + c + e, 0.49609375 + c, 0, 1, 0, 0.49609375 + c, 0.49609375 + c + e]), a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, null), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), c = new Uint16Array([2, 1, 6, 3, 2, 7, 8, 4, 3, 4, 5, 1, 9, 14, 15, 17, 10, 16, 18, 19, 11, 20, 13, 12, 28, 12, 13, 13, 24, 28, 28, 24, 9, 9, 24, 14, 25, 9, 15, 25, 15, 21, 10, 25, 21, 10, 21, 16, 22, 26, 10, 22, 10, 17, 18, 11, 26, 22, 18, 26, 19, 23, 27, 19, 27, 11, 23, 20, 27, 27, 20, 12]), this.skyIndexCount = c.length, a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
    this.tex = webview.scene.materials["material_0"].textures.albedo
  }

  function _$af482117() {
    var b = webview.gl;
    var c = this.shader;
    c.bind();
    b.uniformMatrix4fv(c.params.uViewProjection, !1, webview.scene.view.viewProjectionMatrix);
    this.tex.bind(c.samplers.tSkyTexture);
    b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
    b.enableVertexAttribArray(c.attribs.vPosition);
    b.vertexAttribPointer(c.attribs.vPosition, 3, b.FLOAT, !1, 20, 0);
    b.enableVertexAttribArray(c.attribs.vTexCoord);
    b.vertexAttribPointer(c.attribs.vTexCoord, 2, b.FLOAT, !1, 20, 12);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    b.drawElements(b.TRIANGLES, this.skyIndexCount, b.UNSIGNED_SHORT, 0);
    b.disableVertexAttribArray(c.attribs.vPosition);
    b.disableVertexAttribArray(c.attribs.vTexCoord)
  }

  function _$af482118() {
    if (fdage.transparentBackground) {
      this.gl.clearColor(0, 0, 0, 0)
    } else {
      if (1 > this.backgroundMode) {
        var a = this.backgroundColor;
        this.gl.clearColor(a[0], a[1], a[2], 1)
      } else {
        this.gl.clearColor(0.0582, 0.06772, 0.07805, 1)
      }
    }
  }

  function _$af482119(a) {
    if (1 > this.backgroundMode || fdage.transparentBackground) {
      return !1
    };
    if (this.complete()) {
      var b = this.gl,
        c = this.backgroundShader,
        d = a.view,
        e = a.lights.invMatrix;
      c.bind();
      b.uniformMatrix4fv(c.params.uInverseSkyMatrix, !1, e);
      b.uniformMatrix4fv(c.params.uViewProjection, !1, d.viewProjectionMatrix);
      3 == this.backgroundMode ? b.uniform4fv(c.params.uSkyCoefficients, this.backgroundCoefficients) : this.backgroundTexture.bind(c.samplers.tSkyTexture);
      a = 1.01;
      b.uniform1f(c.params.uAlpha, a);
      b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
      b.enableVertexAttribArray(c.attribs.vPosition);
      b.vertexAttribPointer(c.attribs.vPosition, 3, b.FLOAT, !1, 20, 0);
      b.enableVertexAttribArray(c.attribs.vTexCoord);
      b.vertexAttribPointer(c.attribs.vTexCoord, 2, b.FLOAT, !1, 20, 12);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      1 > a && (b.enable(b.BLEND), b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA));
      b.depthMask(!1);
      b.disable(b.DEPTH_TEST);
      b.drawElements(b.TRIANGLES, this.skyIndexCount, b.UNSIGNED_SHORT, 0);
      b.enable(b.DEPTH_TEST);
      b.depthMask(!0);
      1 > a && b.disable(b.BLEND);
      b.disableVertexAttribArray(c.attribs.vPosition);
      b.disableVertexAttribArray(c.attribs.vTexCoord)
    }
  }

  function _$af482120() {
    return this.backgroundShader && !this.backgroundShader.complete() ? !1 : this.specularTexture.complete()
  }

  function _$af482121(a, b) {
    this.gl = a;
    this.type = a.TEXTURE_2D;
    this.id = null;
    this.img = null;
    b = b || {};
    this.desc = {
      width: b.width || 1,
      height: b.height || 1,
      mipmap: b.mipmap,
      clamp: b.clamp,
      mirror: b.mirror,
      aniso: b.aniso,
      nofilter: b.nofilter
    }
  }

  function _$af482122(a, b) {
    var c = this.gl;
    this.img = a;
    a && a.width && a.height && (this.desc.width = a.width, this.desc.height = a.height);
    this.id = c.createTexture();
    c.bindTexture(this.type, this.id);
    c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
    c.texImage2D(this.type, 0, b || c.RGBA, b || c.RGBA, c.UNSIGNED_BYTE, a);
    this.setParams();
    c.bindTexture(this.type, null)
  }

  function _$af482123(a, b, c) {
    var d = this.gl;
    this.id = d.createTexture();
    d.bindTexture(this.type, this.id);
    d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL, !0);
    d.texImage2D(this.type, 0, b || d.RGBA, this.desc.width, this.desc.height, 0, b || d.RGBA, c || d.UNSIGNED_BYTE, a || null);
    this.setParams();
    d.bindTexture(this.type, null)
  }

  function _$af482124() {
    var a = this.gl,
      b = function(a) {
        return 0 < a && 0 == (a & a - 1)
      };
    b(this.desc.width) && b(this.desc.height) || (this.desc.clamp = !0, this.desc.mipmap = !1);
    b = !this.desc.nofilter;
    this.desc.mipmap ? (a.generateMipmap(this.type), a.texParameteri(this.type, a.TEXTURE_MIN_FILTER, b ? a.LINEAR_MIPMAP_LINEAR : a.NEAREST_MIPMAP_NEAREST)) : a.texParameteri(this.type, a.TEXTURE_MIN_FILTER, b ? a.LINEAR : a.NEAREST);
    a.texParameteri(this.type, a.TEXTURE_MAG_FILTER, b ? a.LINEAR : a.NEAREST);
    if (this.desc.clamp || this.desc.mirror) {
      b = this.desc.clamp ? a.CLAMP_TO_EDGE : a.MIRRORED_REPEAT, a.texParameteri(this.type, a.TEXTURE_WRAP_S, b), a.texParameteri(this.type, a.TEXTURE_WRAP_T, b)
    };
    this.desc.aniso && a.ext.textureAniso && a.texParameteri(this.type, a.ext.textureAniso.TEXTURE_MAX_ANISOTROPY_EXT, this.desc.aniso)
  }

  function _$af482126() {
    this.desc.mipmap && (this.gl.bindTexture(this.type, this.id), this.gl.generateMipmap(this.type))
  }

  function _$af482127(a) {
    if (a) {
      var b = this.gl;
      b.uniform1i(a.location, a.unit);
      b.activeTexture(b.TEXTURE0 + a.unit);
      b.bindTexture(this.type, this.id)
    }
  }

  function _$af482128() {
    this.gl.deleteTexture(this.id);
    this.id = null
  }

  function _$af482129() {
    return !!this.id
  }

  function _$af482130(a) {
    this.gl = a;
    this.cache = []
  }

  function _$af482131(a, b) {
    var c = this.cache[a];
    if (void(0) !== c) {
      return c
    };
    var d = new _$af482121(this.gl, b);
    Network.fetchImage(a, function(a) {
      d.loadImage(a)
    });
    return this.cache[a] = d
  }

  function _$af482133(a, b, f2, f1, v) {
    if (!a) {
      return null
    };
    if (a instanceof _$af482121) {
      for (var i in b) {
        a.desc[i] = b[i]
      };
      return a
    };
    var c = this.cache[a.name];
    if (void(0) !== c && c.desc.height != 1 && c.desc.width != 1) {
      return c
    };
    var d = new _$af482121(this.gl, b);
    this.cache[a.name] = d;
    _$af482130.parseFile(a, function(a) {
      f1 && f1(a, v);
      d.loadImage(a);
      f2 && f2(d)
    });
    return d
  }

  function _$af482135(a, b, c) {
    if (a instanceof _$af482121 && b instanceof _$af482121) {
      return this.MergeAlpha(a, b, c)
    };
    if (!b) {
      return this.fromFile(a, c)
    };
    var d = a.name + "|" + b.name,
      e = this.cache[d];
    if (void(0) !== e) {
      return e
    };
    var f = this.gl;
    this.mergeShader || (this.mergeShader = new _$af482095(this.gl), this.mergeShader.build("precision highp float; varying vec2 c; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0); c=pos; }", "precision highp float; varying vec2 c; uniform sampler2D tRGB,tA; void main(){ gl_FragColor.xyz=texture2D(tRGB,c).xyz; gl_FragColor.w=texture2D(tA,c).x; }"), this.mergeVerts = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.mergeVerts), e = new Float32Array([0, 0, 2, 0, 0, 2]), f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW), f.bindBuffer(f.ARRAY_BUFFER, null));
    var g = new _$af482121(this.gl, c);
    this.cache[d] = g;
    var h = 0,
      k = 0,
      l = this.mergeShader,
      m = this.mergeVerts,
      n = function() {
        if (h && k) {
          var a = h.width > k.width ? h.width : k.width,
            b = h.height > k.height ? h.height : k.height;
          g.desc.width = a;
          g.desc.height = b;
          if (a <= f.limits.viewportSizes[0] && b <= f.limits.viewportSizes[1]) {
            g.loadArray(null), (new _$af481935(f, {
              color0: g,
              ignoreStatus: !0
            })).bind(), b = {
              clamp: !0
            }, a = new _$af482121(f, b), a.loadImage(h, f.RGB), b = new _$af482121(f, b), b.loadImage(k, f.RGB), l.bind(), a.bind(l.samplers.tRGB), b.bind(l.samplers.tA), f.bindBuffer(f.ARRAY_BUFFER, m), f.enableVertexAttribArray(l.attribs.pos), f.vertexAttribPointer(l.attribs.pos, 2, f.FLOAT, !1, 0, 0), f.drawArrays(f.TRIANGLES, 0, 3), f.disableVertexAttribArray(l.attribs.pos), f.bindBuffer(f.ARRAY_BUFFER, null), a.destroy(), b.destroy(), _$af481935.bindNone(f), g.rebuildMips()
          } else {
            var c = document.createElement("canvas");
            c.width = a;
            c.height = b;
            var d = c.getContext("2d");
            d.drawImage(h, 0, 0);
            c = d.getImageData(0, 0, a, b);
            c = new Uint8Array(c.data.buffer, c.data.byteOffset, c.data.length);
            d.drawImage(k, 0, 0);
            d = d.getImageData(0, 0, a, b).data;
            a = a * b * 4;
            for (b = 0; b < a; b += 4) {
              c[b + 3] = d[b]
            };
            g.loadArray(c)
          }
        }
      };
    _$af482130.parseFile(a, function(a) {
      h = a;
      n()
    });
    _$af482130.parseFile(b, function(a) {
      k = a;
      n()
    });
    return g
  }

  function _$af482139(a, b, c, mat) {
    if (!b) {
      return this.fromFile(a, c)
    };
    var d = a.name + "|" + b.name,
      e = this.cache[d];
    if (void(0) !== e) {
      return e
    };
    var f = this.gl;
    this.mergeShader || (this.mergeShader = new _$af482095(this.gl), this.mergeShader.build("precision highp float; varying vec2 c; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0); c=pos; }", "precision highp float; varying vec2 c; uniform sampler2D tRGB,tA; void main(){ gl_FragColor.xyz=texture2D(tRGB,c).xyz; gl_FragColor.w=texture2D(tA,c).x; }"), this.mergeVerts = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.mergeVerts), e = new Float32Array([0, 0, 2, 0, 0, 2]), f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW), f.bindBuffer(f.ARRAY_BUFFER, null));
    var g = new _$af482121(this.gl, c);
    var _this = this;
    var h = 0,
      k = 0,
      l = this.mergeShader,
      m = this.mergeVerts,
      n = function() {
        if (h && k) {
          var a = h.width > k.width ? h.width : k.width,
            b = h.height > k.height ? h.height : k.height;
          g.desc.width = a;
          g.desc.height = b;
          if (a <= f.limits.viewportSizes[0] && b <= f.limits.viewportSizes[1]) {
            g.loadArray(null);
            (new _$af481935(f, {
              color0: g,
              ignoreStatus: !0
            })).bind();
            b = {
              clamp: !0
            };
            a = new _$af482121(f, b);
            a.loadImage(h, f.RGB);
            b = new _$af482121(f, b);
            b.loadImage(k, f.RGB);
            l.bind();
            a.bind(l.samplers.tRGB);
            b.bind(l.samplers.tA);
            f.bindBuffer(f.ARRAY_BUFFER, m);
            f.enableVertexAttribArray(l.attribs.pos);
            f.vertexAttribPointer(l.attribs.pos, 2, f.FLOAT, !1, 0, 0);
            f.drawArrays(f.TRIANGLES, 0, 3);
            f.disableVertexAttribArray(l.attribs.pos);
            f.bindBuffer(f.ARRAY_BUFFER, null);
            a.destroy();
            b.destroy();
            _$af481935.bindNone(f);
            g.rebuildMips()
          } else {
            var c = document.createElement("canvas");
            c.width = a;
            c.height = b;
            var d = c.getContext("2d");
            d.drawImage(h, 0, 0);
            c = d.getImageData(0, 0, a, b);
            c = new Uint8Array(c.data.buffer, c.data.byteOffset, c.data.length);
            d.drawImage(k, 0, 0);
            d = d.getImageData(0, 0, a, b).data;
            a = a * b * 4;
            for (b = 0; b < a; b += 4) {
              c[b + 3] = d[b]
            };
            g.loadArray(c)
          }
        }
      };
    _$af482130.parseFile(a, function(a) {
      h = a;
      n()
    });
    _$af482130.parseFile(b, function(a) {
      k = a;
      n()
    });
    return g
  }

  function _$af482143(a, b, c) {
    if (!b) {
      return a
    };
    var f = this.gl;
    this.mergeShader || (this.mergeShader = new _$af482095(this.gl), this.mergeShader.build("precision highp float; varying vec2 c; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0); c=pos; }", "precision highp float; varying vec2 c; uniform sampler2D tRGB,tA; void main(){ gl_FragColor.xyz=texture2D(tRGB,c).xyz; gl_FragColor.w=texture2D(tA,c).x; }"), this.mergeVerts = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.mergeVerts), e = new Float32Array([0, 0, 2, 0, 0, 2]), f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW), f.bindBuffer(f.ARRAY_BUFFER, null));
    var g = new _$af482121(this.gl, c);
    var l = this.mergeShader,
      m = this.mergeVerts;
    var w = a.desc.width > b.desc.width ? a.desc.width : b.desc.width,
      h = a.desc.height > b.desc.height ? a.desc.height : b.desc.height;
    g.desc.width = w;
    g.desc.height = h;
    if (w <= f.limits.viewportSizes[0] && h <= f.limits.viewportSizes[1]) {
      g.loadArray(null);
      (new _$af481935(f, {
        color0: g,
        ignoreStatus: !0
      })).bind();
      c = {
        clamp: !0
      };
      l.bind();
      a.bind(l.samplers.tRGB);
      b.bind(l.samplers.tA);
      f.bindBuffer(f.ARRAY_BUFFER, m);
      f.enableVertexAttribArray(l.attribs.pos);
      f.vertexAttribPointer(l.attribs.pos, 2, f.FLOAT, !1, 0, 0);
      f.drawArrays(f.TRIANGLES, 0, 3);
      f.disableVertexAttribArray(l.attribs.pos);
      f.bindBuffer(f.ARRAY_BUFFER, null);
      _$af481935.bindNone(f);
      g.rebuildMips()
    } else {
      console.error("\u8d34\u56fe\u5bbd\u6216\u957f\u5927\u4e8e16384\uff0c\u65e0\u6cd5\u5408\u5e76")
    };
    return g
  }

  function _$af482144(a, b, c, unmerge, n1, n2, mat) {
    var _this = this;
    var f1 = function(aa, v) {
      if (aa.width === 1 && aa.height === 1) {
        var value = getValue(aa);
        if (v != void(0)) {
          v.value = value
        }
      }
    };
    if (!b || b instanceof _$af482121 && b.desc.width === 1 && b.desc.height === 1) {
      if (unmerge) {
        if (!b && n2) {
          unmerge[n2].value = [255, 255, 255]
        };
        n1 && (unmerge[n1].tex = this.fromFile(a, c, null, f1, unmerge[n1]));
        n2 && (unmerge[n2].tex = b);
        return unmerge[n1].tex
      } else {
        return this.fromFile(a, c)
      }
    };
    if (a.name) {
      if (this.cache[a.name] != void(0) && this.cache[a.name].id != void(0)) {
        a = this.cache[a.name]
      }
    };
    if (b.name) {
      if (this.cache[b.name] != void(0) && this.cache[b.name].id != void(0)) {
        b = this.cache[b.name]
      }
    };
    var f = this.gl;
    this.mergeShader || (this.mergeShader = new _$af482095(this.gl), this.mergeShader.build("precision highp float; varying vec2 c; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0); c=pos; }", "precision highp float; varying vec2 c; uniform sampler2D tRGB,tA; void main(){ gl_FragColor.xyz=texture2D(tRGB,c).xyz; gl_FragColor.w=texture2D(tA,c).x; }", "mergeAlphaShader "), this.mergeVerts = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.mergeVerts), e = new Float32Array([0, 0, 2, 0, 0, 2]), f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW), f.bindBuffer(f.ARRAY_BUFFER, null));
    var g = new _$af482121(this.gl, c);
    var j = 0,
      k = 0,
      l = this.mergeShader,
      m = this.mergeVerts,
      n = function() {
        if (j && k) {
          if (j instanceof Image) {
            j1 = new _$af482121(f), j1.loadImage(j, f.RGB), j = j1
          };
          if (k instanceof Image) {
            k1 = new _$af482121(f), k1.loadImage(k, f.RGB), k = k1
          };
          var w = j.desc.width > k.desc.width ? j.desc.width : k.desc.width,
            h = j.desc.height > k.desc.height ? j.desc.height : k.desc.height;
          g.desc.width = w;
          g.desc.height = h;
          if (w <= f.limits.viewportSizes[0] && h <= f.limits.viewportSizes[1]) {
            g.loadArray(null);
            (new _$af481935(f, {
              color0: g,
              ignoreStatus: !0
            })).bind();
            l.bind();
            j.bind(l.samplers.tRGB), k.bind(l.samplers.tA), f.bindBuffer(f.ARRAY_BUFFER, m), f.enableVertexAttribArray(l.attribs.pos), f.vertexAttribPointer(l.attribs.pos, 2, f.FLOAT, !1, 0, 0), f.drawArrays(f.TRIANGLES, 0, 3), f.disableVertexAttribArray(l.attribs.pos), f.bindBuffer(f.ARRAY_BUFFER, null);
            if (a.name && _this.cache[a.name] == void(0)) {
              _this.cache[a.name] = j
            };
            if (b.name && _this.cache[b.name] == void(0)) {
              _this.cache[b.name] = k
            };
            unmerge && n1 && n2 && (unmerge[n1].tex = j, unmerge[n2].tex = k), _$af481935.bindNone(f), g.rebuildMips()
          } else {
            console.error("\u8d34\u56fe\u5bbd\u6216\u957f\u5927\u4e8e16384\uff0c\u65e0\u6cd5\u5408\u5e76");
            var c = document.createElement("canvas");
            c.width = w;
            c.height = h;
            var d = c.getContext("2d");
            d.drawImage(j, 0, 0);
            c = d.getImageData(0, 0, w, h);
            c = new Uint8Array(c.data.buffer, c.data.byteOffset, c.data.length);
            d.drawImage(k, 0, 0);
            d = d.getImageData(0, 0, w, h).data;
            a = w * h * 4;
            for (b = 0; b < a; b += 4) {
              c[b + 3] = d[b]
            };
            g.loadArray(c)
          }
        }
      };
    if (!(a instanceof _$af482121)) {
      _$af482130.parseFile(a, function(aa) {
        if (aa.width === 1 && aa.height === 1) {
          var value = getValue(aa);
          if (unmerge && n1) {
            unmerge[n1].value = value
          }
        };
        j = aa;
        n()
      })
    } else {
      j = a;
      n()
    };
    if (!(b instanceof _$af482121)) {
      _$af482130.parseFile(b, function(bb) {
        if (bb.width === 1 && bb.height === 1) {
          var value = getValue(bb);
          if (unmerge && n2) {
            if (n2 === "alpha" || n2 === "gloss") {
              if (value[0] != 255) {
                mat.strength[n2] = value[0] / 255 * 100;
                k = new _$af482121(f, {
                  width: 1,
                  height: 1
                });
                k.loadArray(new Uint8Array([255, 255, 255, 255]))
              } else {
                k = bb
              };
              unmerge[n2].value = [255, 255, 255]
            } else {
              k = bb
            }
          }
        } else {
          k = bb
        };
        n()
      })
    } else {
      k = b;
      n()
    };

    function getValue(img) {
      var c = document.createElement("canvas");
      c.width = 1;
      c.height = 1;
      var d = c.getContext("2d");
      d.drawImage(img, 0, 0);
      c = d.getImageData(0, 0, 1, 1);
      return [c.data[0], c.data[1], c.data[2], c.data[3]]
    }
    return g
  }

  function _$af482150(a, b, c) {
    var d = c || new Image;
    if ("undefined" != typeof URL && "undefined" != typeof URL.createObjectURL) {
      a = new Blob([a.data], {
        type: a.type
      });
      var e = URL.createObjectURL(a);
      d.onload = function() {
        b && b(d)
      };
      d.src = e
    } else {
      a = new Blob([a.data], {
        type: a.type
      });
      var f = new FileReader;
      f.onload = function(a) {
        d.src = f.result
      };
      d.onload = function() {
        b && b(d)
      };
      f.readAsDataURL(a)
    }
  }

  function _$af482154(a) {
    this.viewer = a;
    a = this.container = document.createElement("div");
    a.id = "fdageUI";
    fdageUI = a;
    a.style.position = "absolute";
    a.style.overflow = "hidden";
    a.style["-moz-user-select"] = "none";
    a.style["-khtml-user-select"] = "none";
    a.style["-webkit-user-select"] = "none";
    a.style["-ms-user-select"] = "none";
    this.viewer.domRoot.appendChild(a)
  }

  function _$af482155(a, b) {
    this.container.width = a | 0;
    this.container.height = b | 0;
    this.container.style.width = a + "px";
    this.container.style.height = b + "px"
  }

  function _$af482156() {
    for (; this.container.hasChildNodes();) {
      this.container.removeChild(this.container.childNodes[0])
    };
    delete this.progressBar;
    delete this.thumbnail;
    delete this.fadeThumbnail;
    delete this.playButton;
    delete this.helpOverlay
  }

  function _$af482157(a) {
    a.onSingleTap.push(function(b, c) {
      c = 1 - 2 / a.element.clientHeight * c, this.refreshUI(), this.viewer.wake()
    }.bind(this));
    a.onDoubleTap.push(function(a, c, event) {
      if (event.ctrlKey) {
        this.viewer.scene.view.reset();
        this.viewer.wake();
        return
      } else {
        if (gui.state == "MAT") {
          var g = this.container.getBoundingClientRect();
          var clickedMesh = gui.ifClickMesh(a / g.width * 2 - 1, 1 - 2 * c / g.height);
          if (clickedMesh) {
            gui.matList.selectFromOutSide(clickedMesh.meshR.material.name)
          }
        } else {
          var g = this.container.getBoundingClientRect();
          var clickedMesh = gui.ifClickMesh(a / g.width * 2 - 1, 1 - 2 * c / g.height);
          if (clickedMesh) {
            gui.cameraMove(clickedMesh.triangle)
          }
        }
      }
    }.bind(this))
  }

  function _$af482160(a) {
    return a ? a.replace(/<|>|\(|\)|$|%|=/g, "") : a
  }

  function _$af482161(a) {
    return a ? 0 == a.indexOf("http://") || 0 == a.indexOf("https://") || 0 == a.indexOf("ftp://") ? encodeURI(a) : "http://" + encodeURI(a) : a
  }

  function _$af482162(info) {
    this.container.innerHTML = "";
    var errorCanvas = document.createElement("canvas");
    var ra = this.container.width / this.container.height;
    errorCanvas.width = 100;
    errorCanvas.height = errorCanvas.height * ra | 0;
    errorCanvas.style.position = "absolute";
    errorCanvas.style["z-index"] = "-1";
    errorCanvas.style.width = errorCanvas.style.height = "100%";
    var a = errorCanvas.getContext("2d");
    var b = a.fillStyle = a.createRadialGradient(errorCanvas.width / 2, errorCanvas.height / 2, (errorCanvas.width + errorCanvas.height) / 2, errorCanvas.width / 2, errorCanvas.height / 2, 0);
    b.addColorStop(0, "rgb(0,0,0)");
    b.addColorStop(1, "rgb(35,60,80)");
    a.fillStyle = b;
    a.fillRect(0, 0, errorCanvas.width, errorCanvas.height);
    this.container.appendChild(errorCanvas);
    var errorDiv = document.createElement("div");
    dom.addClass(errorDiv, "error");
    errorDiv.style["background-image"] = "url(images/errorBG.png)";
    var msg = "<div class=\"errorInfo\"><p style=\"font-size:1.5em; font-weight:lighter\">\u8f6c\u6362\u6a21\u578b\u65f6\u51fa\u9519</p>" + "<p style=\"font-size:1.3em;letter-spacing:2px;font-weight:bold;line-height:1.5em;margin-top:30px\">\u9519\u8bef\u4fe1\u606f: " + (info || "\u6587\u4ef6\u65e0\u6548(ERROR)\u8bf7\u68c0\u67e5\u60a8\u6240\u4e0a\u4f20\u7684\u6587\u4ef6\u4ee5\u786e\u5b9a\u5176\u7a33\u5b9a\u6027") + "</p>" + "<p style=\"font-size:0.8em;line-height:1.5em; margin-top:50px\">\u60a8\u53ef\u4ee5\u8054\u7cfb\u6211\u4eec\u7684\u5ba2\u670d\u3001\u6216\u70b9\u51fb<a href=\"http://www.4dage.com/tutorial.html\" style=\"color: #a6ccea;\">\u89c6\u9891\u6559\u7a0b</a>\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u4e0a\u4f20\u89e3\u8bf4<br>\u5c06\u5168\u7a0b\u4e3a\u60a8\u63d0\u4f9b\u6700\u4f18\u8d28\u7684\u6a21\u578b\u5c55\u793a</p></div>";
    errorDiv.innerHTML = msg;
    this.container.appendChild(errorDiv)
  }

  function _$af482163() {
    this.clearView();
    this.thumbnail = document.createElement("canvas");
    var a = this.container.width / this.container.height;
    this.thumbnail.height = 100;
    this.thumbnail.width = this.thumbnail.height * a | 0;
    this.thumbnail.style.width = this.thumbnail.style.height = "100%";
    var a = this.thumbnail.getContext("2d"),
      b = a.fillStyle = a.createRadialGradient(this.thumbnail.width / 2, this.thumbnail.height / 2, (this.thumbnail.width + this.thumbnail.height) / 2, this.thumbnail.width / 2, 0, 0);
    b.addColorStop(0, "rgb(22,43,64)");
    b.addColorStop(1, "rgb(117,133,148)");
    a.fillStyle = b;
    a.fillRect(0, 0, this.thumbnail.width, this.thumbnail.height);
    this.container.appendChild(this.thumbnail);
    this.playButton = document.createElement("input");
    this.playButton.type = "image";
    this.playButton.src = fdage.dataLocale + "play.png";
    this.playButton.style.position = "absolute";
    this.playButton.style.left = "50%";
    this.playButton.style.top = "50%";
    this.playButton.style["-webkit-transform"] = this.playButton.style.transform = "translate(-50%,-50%) scale(0.7,0.7)";
    this.playButton.style.outline = "0px";
    this.playButton.onclick = function() {
      this.viewer.loadScene(this.viewer.sceneURL);
      this.container.removeChild(this.playButton);
      delete this.playButton
    }.bind(this);
    this.container.appendChild(this.playButton);
    fetchThumbnail(this.viewer.sceneURL, function(a) {
      this.loadingImageURL || this.setThumbnail(a)
    }.bind(this))
  }

  function _$af482166(a) {
    (this.loadingImageURL = a) && Network.fetchImage(this.loadingImageURL, this.setThumbnail.bind(this))
  }

  function _$af482167(a) {
    if (this.thumbnail) {
      var b = this.thumbnail.getContext("2d"),
        c = this.thumbnail.width,
        d = this.thumbnail.height,
        e = d / a.height;
      b.rect(0, 0, c, d);
      b.fillStyle = "rgb(100,100,100)";
      b.fill();
      b.drawImage(a, (c - a.width * e) / 2, 0, a.width * e, d);
      var f;
      try {
        f = b.getImageData(0, 0, c, d)
      } catch (g) {
        return
      };
      a = b.createImageData(c, d);
      for (e = 0; 3 > e; ++e) {
        for (var h = f.data, k = a.data, l = 0, m = 0; m < d; ++m) {
          for (var n = 0; n < c; ++n) {
            for (var r = 0, p = 0, q = 0, u = -2; 2 >= u; ++u) {
              for (var s = m + u, s = 0 > s ? 0 : s >= d ? d - 1 : s, z = -2; 2 >= z; ++z) {
                var t = n + z,
                  t = 0 > t ? 0 : t >= c ? c - 1 : t,
                  t = 4 * (s * c + t),
                  r = r + h[t],
                  p = p + h[t + 1],
                  q = q + h[t + 2]
              }
            };
            k[l++] = r / 25;
            k[l++] = p / 25;
            k[l++] = q / 25;
            k[l++] = 255
          }
        };
        h = f;
        f = a;
        a = h
      };
      b.putImageData(f, 0, 0)
    }
  }

  function _$af482168() {
    var a = this.thumbnail;
    var d;
    this.clearView();
    gui.setSnapshot();
    a && (this.fadeThumbnail = a, this.fadeThumbnail.style.opacity = 1, this.container.appendChild(this.fadeThumbnail));
    void(0) === fdage.largeUI && (fdage.largeUI = this.viewer.mobile);
    450 > this.container.width && (fdage.largeUI = !1);
    var b = FullScreen.support(),
      a = 1;
    window.devicePixelRatio && (2 < window.devicePixelRatio ? a = 4 : 1 < window.devicePixelRatio && (a = 2));
    fdage.largeUI && 4 > a && (a *= 2);
    var c = fdage.largeUI ? 0.3 : 0.5;
    this.helpOverlay = document.createElement("div");
    this.helpOverlay.style.pointerEvents = "none";
    this.container.appendChild(this.helpOverlay);
    this.hideSigOnHelp = d = 450 > this.container.width;
    this.hideSigOnStrips = !0;
    g = [8, 8];
    d ? (e = 198 + 2 * g[0], f = 258 + 2 * g[1]) : (e = 354 + 2 * g[0], f = 218 + 2 * g[1]);
    h = document.createElement("div");
    h.style.position = "absolute";
    h.style.width = h.style.height = "100%";
    this.helpOverlay.contents = h;
    h = document.createElement("div");
    h.style.position = "absolute";
    h.style["z-index"] = "20";
    h.style.right = fdage.largeUI ? "85px" : "45px";
    h.style.top = fdage.largeUI ? "20px" : "12px";
    h.style.width = e + "px";
    h.style.height = f + "px";
    this.helpOverlay.contents.appendChild(h);
    f = document.createElement("div");
    f.style.position = "absolute";
    f.style.width = "100%";
    f.style.height = "100%";
    f.style.backgroundColor = "black";
    f.style.opacity = "0.65";
    f.style.borderRadius = "16px";
    h.appendChild(f);
    f = document.createElement("a");
    dom.addClass(f, "tipClose");
    f.style.position = "absolute";
    f.style.color = "#FFFFFF";
    f.style.backgroundColor = "rgba(0,0,0,0.0)";
    f.style.border = "0px";
    f.style.outline = "0px";
    f.style.fontSize = fdage.largeUI ? "16pt" : "10pt";
    f.style.right = fdage.largeUI ? "-9px" : "4px";
    f.style.top = fdage.largeUI ? "3px" : "7px";
    f.style.width = f.style.height = fdage.largeUI ? "32px" : "16px";
    f.style.pointerEvents = "auto";
    f.style.cursor = "pointer";
    f.onclick = function(a) {
      this.helpOverlay.toggle();
      this.refreshUI()
    }.bind(this, f);
    h.appendChild(f);
    f = document.createElement("center");
    f.style.position = "absolute";
    f.style.left = g[0] - 4 + "px";
    f.style.right = g[0] + 4 + "px";
    f.style.top = f.style.bottom = g[1] + "px";
    f.style.paddingTop = "8px";
    d || (f.style.paddingRight = "8px");
    h.appendChild(f);
    h = f;
    g = (this.viewer.mobile ? "M" : "PC") + (2 < a ? 4 : 2) + "x.png";
    f = document.createElement("img");
    f.src = fdage.dataLocale + "helprotate" + g;
    f.style.width = "66px";
    f.style.height = "90px";
    h.appendChild(f);
    f = document.createElement("img");
    f.src = fdage.dataLocale + "helpzoom" + g;
    f.style.width = "66px";
    f.style.height = "90px";
    h.appendChild(f);
    f = document.createElement("img");
    f.src = fdage.dataLocale + "helpmove" + g;
    f.style.width = "66px";
    f.style.height = "90px";
    h.appendChild(f);
    f = document.createElement("img");
    f.src = fdage.dataLocale + "ctrlhelpreset" + g;
    f.style.width = "66px";
    f.style.height = "90px";
    h.appendChild(f);
    f = document.createElement("img");
    f.src = fdage.dataLocale + "helplights" + g;
    f.style.position = "relative";
    d || (f.style.left = "8px");
    f.style.width = "66px";
    f.style.height = "90px";
    h.appendChild(f);
    g = document.createElement("a");
    g.href = "http://www.4dage.com";
    g.target = "_blank";
    g.style.pointerEvents = "auto";
    h.appendChild(g);
    f = document.createElement("img");
    f.src = fdage.dataLocale + "logo2.png";
    f.style.position = "absolute";
    f.style.left = 0.5 * e - (d ? 65 : 116) + "px";
    f.style.bottom = d ? "8px" : "12px";
    f.style.width = d ? "116px" : "232px";
    g.appendChild(f);
    e = document.createElement("div");
    e.style.position = "absolute";
    e.style.left = 0;
    e.style.right = d ? "30px" : "128px";
    e.style.bottom = d ? "-4px" : "4px";
    e.style.textAlign = "right";
    e.style.fontFamilly = "Open Sans Arial";
    h.appendChild(e);
    d = document.createElement("font");
    d.style.fontSize = "9pt";
    d.style.fontFamily = "Open Sans Arial";
    e.appendChild(d);
    this.helpOverlay.active = !1;
    this.helpOverlay.toggle = function(a) {
      this.active ? this.removeChild(this.contents) : this.appendChild(this.contents);
      this.active = !this.active
    }.bind(this.helpOverlay, this.viewer);
    this.menuCluster = document.createElement("div");
    this.menuCluster.style.position = "absolute";
    this.menuCluster.style.right = fdage.largeUI ? "4px" : "0px";
    this.menuCluster.style.top = fdage.largeUI ? "20px" : "10px";
    fdage.largeUI ? (this.menuCluster.style.width = "72px", this.menuCluster.style.height = "64px") : (this.menuCluster.style.width = "36px", this.menuCluster.style.height = "36px");
    h = document.createElement("div");
    h.style.left = h.style.top = "0px";
    h.style.width = h.style.height = "100%";
    this.menuCluster.contents = h;
    this.menuCluster.appendChild(h);
    d = 0;
    e = function(a, name, cla, c, d, e) {
      var f = document.createElement("div");
      dom.addClass(f, "controlBtn");
      dom.addClass(f, cla);
      f.title = name;
      if (fdage.largeUI) {
        dom.addClass(f, "largeUI")
      };
      a.appendChild(f);
      return f
    };
    b && (b = e(this.menuCluster.contents, "\u5168\u5c4f", "fullscreen", "fullscreen" + a + "x.png", d++, c), b.onclick = function(a) {
      FullScreen.active() ? FullScreen.end() : FullScreen.begin(this.viewer.domRoot, this.viewer.fullscreenChange.bind(this.viewer));
      if (dom.hasClass(a, "full")) {
        dom.removeClass(a, "full")
      } else {
        dom.addClass(a, "full")
      };
      this.refreshUI()
    }.bind(this, b));
    b = e(this.menuCluster.contents, "\u64cd\u4f5c\u65b9\u5f0f\u8bf4\u660e", "tips", "help" + a + "x.png", d++, c);
    b.onclick = function(a) {
      this.helpOverlay.toggle();
      this.refreshUI()
    }.bind(this, b);
    this.container.appendChild(this.menuCluster);
    this.menuCluster.active = !0;
    this.menuCluster.toggle = function() {
      this.active ? this.removeChild(this.contents) : this.appendChild(this.contents);
      this.active = !this.active
    }.bind(this.menuCluster);
    void(0) !== fdage.hostImage && (fdage.hostURL && (g = document.createElement("a"), g.href = fdage.hostURL, g.target = "_blank"), f = document.createElement("img"), f.src = fdage.hostImage, f.style.position = "absolute", f.style.top = "4px", f.style.left = "4px", f.style.opacity = 0.65, f.style["-webkit-transform"] = f.style.transform = "translate(-50%,-50%) scale(0.5,0.5) translate(50%,50%)", fdage.hostURL ? (f.onmouseover = function() {
      this.style.opacity = 1
    }.bind(f), f.onmouseout = function() {
      this.style.opacity = 0.5
    }.bind(f), g.appendChild(f), this.hostLogo = g) : this.hostLogo = f, d = new XMLHttpRequest, d.open("HEAD", f.src, !0), d.onload = function() {
      this.container.appendChild(this.hostLogo)
    }.bind(this), d.send());
    this.sceneStats = document.createElement("text");
    this.sceneStats.style.position = "absolute";
    this.sceneStats.style.left = "9px";
    this.sceneStats.style.bottom = "8px";
    this.sceneStats.style.color = "gray";
    this.sceneStats.style.fontFamily = "Open Sans Arial";
    this.sceneStats.style.fontSize = "75%";
    for (d = b = a = 0; d < this.viewer.scene.meshes.length; ++d) {
      e = this.viewer.scene.meshes[d], a += e.indexCount / 3, b += e.vertexCount
    };
    this.sceneStats.innerHTML = "Triangles: " + (a | 0).toLocaleString() + "<br>Vertices: " + (b | 0).toLocaleString();
    fdage.showFrameTime && (this.frameTimer = document.createElement("text"), this.frameTimer.style.position = "absolute", this.frameTimer.style.left = this.frameTimer.style.top = "5px", this.frameTimer.style.color = "gray", this.frameTimer.style.fontSize = "75%", this.container.appendChild(this.frameTimer), this.frameTimer.innerHTML = "--", this.frameCount = 1E20)
  }

  function _$af482178() {
    if (this.sigCluster) {
      var a = !1,
        b = this.stripData.selectedStrip == this.stripData.STRIP_MENU;
      this.hideSigOnStrips && (a = a || b);
      this.hideSigOnHelp && (a = a || this.helpOverlay.active);
      this.sigCluster.active == a && this.sigCluster.toggle()
    }
  }

  function _$af482179(a, b, w) {
    if (this.thumbnail || this.loadingProgress) {
      if (!this.progressBar) {
        var c = document.createElement("div");
        c.style.backgroundColor = "rgb(240,240,240)";
        c.style.opacity = 0.9;
        c.style.position = "absolute";
        c.style.width = dom.ifVoid(w, 60) + "%";
        c.style.left = 50 - dom.ifVoid(w, 60) / 2 + "%";
        c.style.bottom = "35%";
        c.style.height = "3px";
        c.style["border-radius"] = "1px";
        this.progressBar = document.createElement("div");
        this.progressBar.style.backgroundColor = "#00ccff";
        this.progressBar.style.position = "absolute";
        this.progressBar.style.left = this.progressBar.style.bottom = "0px";
        this.progressBar.style.height = "100%";
        this.progressBar.style.width = "0px";
        this.progressBar.style.transition = "width 0.1s";
        this.progressBar.style["border-radius"] = "2px";
        c.appendChild(this.progressBar);
        this.container.appendChild(c);
        this.playButton && (this.container.removeChild(this.playButton), delete this.playButton)
      };
      this.progressBar.style.width = 0 >= b ? (100 * a / (2097152 + a) | 0) + "%" : (100 * a / b | 0) + "%"
    }
  }

  function _$af482180() {
    return !!this.fadeThumbnail || !!this.frameTimer
  }

  function _$af482181() {
    this.fadeThumbnail && (this.fadeThumbnailTimer = this.fadeThumbnailTimer || Date.now(), this.fadeThumbnail.style.opacity = 1 - 0.0015 * (Date.now() - this.fadeThumbnailTimer), 0.01 > this.fadeThumbnail.style.opacity && (this.container.removeChild(this.fadeThumbnail), delete this.fadeThumbnail, delete this.fadeThumbnailTimer));
    if (this.frameTimer && (this.frameCount++, 60 <= this.frameCount)) {
      var a = (new Date).getTime();
      if (void(0) !== this.frameTime) {
        var b = (a - this.frameTime) / this.frameCount,
          b = Math.floor(100 * b) / 100;
        this.frameTimer.innerHTML = b + " ms";
        this.frameTimer.style.color = 32 > b ? "green" : "red"
      };
      this.frameCount = 0;
      this.frameTime = a
    };
    this.sceneStats && (a = !!this.sceneStats.parentElement, b = this.stripData && this.stripData.active(), a && !b ? (this.container.removeChild(this.sceneStats), this.hostLogo && this.container.appendChild(this.hostLogo)) : !a && b && (this.container.appendChild(this.sceneStats), this.hostLogo && this.container.removeChild(this.hostLogo)));
    this.refreshUI()
  }

  function _$af482182(a, b, c, d) {
    var e = new Vect.type(4);
    e[0] = a;
    e[1] = b;
    e[2] = c;
    e[3] = d;
    return e
  }

  function _$af482183() {
    return new Vect.type(4)
  }

  function _$af482184(a, b, c, d, e) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e
  }

  function _$af482185(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3]
  }

  function _$af482186(a, b, c) {
    a[0] = b[0] + c[0];
    a[1] = b[1] + c[1];
    a[2] = b[2] + c[2];
    a[3] = b[3] + c[3];
    return a
  }

  function _$af482187(a, b, c) {
    a[0] = b[0] - c[0];
    a[1] = b[1] - c[1];
    a[2] = b[2] - c[2];
    a[3] = b[3] - c[3];
    return a
  }

  function _$af482188(a, b, c) {
    a[0] = c[0] * b;
    a[1] = c[1] * b;
    a[2] = c[2] * b;
    a[3] = c[3] * b;
    return a
  }

  function _$af482189(a, b, c) {
    a[0] = b[0] * c[0];
    a[1] = b[1] * c[1];
    a[2] = b[2] * c[2];
    a[3] = b[3] * c[3];
    return a
  }

  function _$af482190(a, b, c, d) {
    a[0] = b[0] * c[0] + d[0];
    a[1] = b[1] * c[1] + d[1];
    a[2] = b[2] * c[2] + d[2];
    a[3] = b[3] * c[3] + d[3];
    return a
  }

  function _$af482191(a, b, c, d) {
    a[0] = b * c[0] + d[0];
    a[1] = b * c[1] + d[1];
    a[2] = b * c[2] + d[2];
    a[3] = b * c[3] + d[3];
    return a
  }

  function _$af482192(a, b) {
    a[0] = -b[0];
    a[1] = -b[1];
    a[2] = -b[2];
    return a
  }

  function _$af482193(a, b) {
    a[0] = -b[0];
    a[1] = -b[1];
    a[2] = -b[2];
    a[3] = -b[3];
    return a
  }

  function _$af482194(a) {
    var b = a[0],
      c = a[1];
    a = a[2];
    return Math.sqrt(b * b + c * c + a * a)
  }

  function _$af482195(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  }

  function _$af482196(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
  }

  function _$af482197(a, b) {
    var c = b[0],
      d = b[1],
      e = b[2],
      f = Math.sqrt(c * c + d * d + e * e);
    if (0 == f) {
      return Vect["set"](a, 0, 0, 0, 0)
    };
    f = 1 / f;
    a[0] = c * f;
    a[1] = d * f;
    a[2] = e * f;
    return a
  }

  function _$af482198(a, b, c) {
    a[0] = b[1] * c[2];
    a[0] += -b[2] * c[1];
    a[1] = b[2] * c[0] - b[0] * c[2];
    a[2] = b[0] * c[1] - b[1] * c[0];
    return a
  }

  function _$af482199(a, b, c, d) {
    var e = 1 - d;
    a[0] = b[0] * e + c[0] * d;
    a[1] = b[1] * e + c[1] * d;
    a[2] = b[2] * e + c[2] * d;
    return a
  }

  function _$af482200(a, b, c, d) {
    var e = 1 - d;
    a[0] = b[0] * e + c[0] * d;
    a[1] = b[1] * e + c[1] * d;
    a[2] = b[2] * e + c[2] * d;
    a[3] = b[3] * e + c[3] * d;
    return a
  }

  function _$af482201(a, b, c) {
    a[0] = Math.min(b[0], c[0]);
    a[1] = Math.min(b[1], c[1]);
    a[2] = Math.min(b[2], c[2]);
    a[3] = Math.min(b[3], c[3]);
    return a
  }

  function _$af482202(a, b, c) {
    a[0] = Math.max(b[0], c[0]);
    a[1] = Math.max(b[1], c[1]);
    a[2] = Math.max(b[2], c[2]);
    a[3] = Math.max(b[3], c[3]);
    return a
  }

  function _$af482203(a, b, c, d) {
    var e = Vect.empty();
    Vect.sub(e, b, c);
    c = Vect.dot(e, d);
    smad(a, -c, normal, b);
    return a
  }

  function _$af482204(a) {
    this.pivot = [0, 0, 0];
    this.rotation = [0, 0];
    this.radius = 1;
    this.nearPlane = 0.1;
    this.fov = 45;
    this.size = [1, 1];
    this.transform = Matrix.identity();
    this.transform2 = Matrix.identity();
    this.transform3 = Matrix.identity();
    this.viewMatrix = Matrix.identity();
    this.viewMatrix2 = Matrix.identity();
    this.viewMatrix3 = Matrix.identity();
    this.projectionMatrix = Matrix.identity();
    this.viewProjectionMatrix = Matrix.identity();
    this.viewProjectionMatrix2 = Matrix.identity();
    this.projectionOffset = [0, 0];
    this.groundHeight = a.groundHeight;
    a ? this.loadView(a, !0) : (this.saveResetView(), this.updateView(), this.updateProjection())
  }

  function _$af482205() {
    this.resetDesc = {
      angles: [this.rotation[0], this.rotation[1]],
      pivot: [this.pivot[0], this.pivot[1], this.pivot[2]],
      limits: this.limits,
      orbitRadius: this.radius,
      fov: this.fov,
      modelMatrix: this.modelMatrix
    }
  }

  function _$af482206(a, b) {
    var b = [];
    a && (this.rotation[0] = a.angles[0], this.rotation[1] = a.angles[1], this.pivot[0] = a.pivot[0], this.pivot[1] = a.pivot[1], this.pivot[2] = a.pivot[2], this.modelRot = this.modelRot || a.modelRot || [0, 0, 0], this.modelMatrix = a.modelMatrix || Matrix.identity(), this.radius = parseFloat(a.orbitRadius), this.fov = a.fov, this.limits = a.limits, b && this.saveResetView(), this.updateView(), this.updateProjection())
  }

  function _$af482207() {
    this.loadView(this.resetDesc)
  }

  function _$af482208() {
    if (void(0) !== this.limits) {
      if (this.limits.angles) {
        var a = this.limits.angles.x,
          b = this.limits.angles.y;
        if (void(0) !== a) {
          var c = this.rotation[0] - a.offset,
            a = Math.min(Math.max(c, a.min), a.max);
          this.rotation[0] += a - c
        };
        void(0) !== b && (c = this.rotation[1] - b.offset, a = Math.min(Math.max(c, b.min), b.max), this.rotation[1] += a - c)
      };
      void(0) !== this.limits.orbitRadius && (b = this.limits.orbitRadius.min, c = this.limits.orbitRadius.max, void(0) !== b && (this.radius = Math.max(this.radius, b)), void(0) !== c && (this.radius = Math.min(this.radius, c)));
      void(0) !== this.limits.pan && (b = this.limits.pan, c = this.resetDesc.pivot, b.x && (this.pivot[0] = c[0]), b.y && (this.pivot[1] = c[1]), b.z && (this.pivot[2] = c[2]))
    };
    Matrix.translation(this.transform, 0, 0, this.radius);
    b = Matrix.rotation(Matrix.empty(), this.rotation[0], 0);
    c = Matrix.rotation(Matrix.empty(), this.rotation[1], 1);
    Matrix.mul(b, c, b);
    Matrix.mul(this.transform, b, this.transform);
    Matrix.copy(this.transform2, this.transform);
    gui.state === "SCENE" && Matrix.copy(this.transform3, this.transform);
    this.transform2[12] += (this.pivot[0]);
    this.transform2[13] += (this.pivot[1]);
    this.transform2[14] += (this.pivot[2]);
    Matrix.mul(this.transform2, this.modelMatrix, this.transform2);
    this.transform[12] += this.pivot[0];
    this.transform[13] += this.pivot[1];
    this.transform[14] += this.pivot[2];
    Matrix.invert(this.viewMatrix, this.transform);
    Matrix.invert(this.viewMatrix2, this.transform2);
    gui.state === "SCENE" && Matrix.invert(this.viewMatrix3, this.transform3)
  }

  function _$af482209(a, b) {
    this.projectionOffset[0] = -2 * a;
    this.projectionOffset[1] = -2 * b
  }

  function _$af482210(a) {
    Matrix.perspectiveInfinite(this.projectionMatrix, this.fov, this.size[0] / this.size[1], this.nearPlane, a);
    this.projectionMatrix[8] = this.projectionOffset[0];
    this.projectionMatrix[9] = this.projectionOffset[1];
    Matrix.mul(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
    Matrix.mul(this.viewProjectionMatrix2, this.projectionMatrix, this.viewMatrix2)
  }

  function _$af482211(d) {
    this.canvas = d;
    this.texture = null;
    this.initGL();
    this.shader = new _$af482095(this.gl);
    this.shader.build("precision highp float; varying vec2 c; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0); c=pos; }", "precision highp float; varying vec2 c; uniform float strength; uniform sampler2D tRGBA; void main(){ vec4 color = texture2D(tRGBA,c); gl_FragColor = strength/100.0 * color;}", "previewerShader ");
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    var e = new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, e, this.gl.STATIC_DRAW)
  }

  function _$af482212() {
    var a = {
      alpha: !!fdage.transparentBackground,
      depth: !1,
      stencil: !1,
      antialias: !1,
      premultipliedAlpha: !!fdage.transparentBackground,
      preserveDrawingBuffer: !1
    };
    var a = this.gl = this.canvas.getContext("webgl", a) || this.canvas.getContext("experimental-webgl", a);
    if (!this.gl) {
      console.log("webgl\u4e0d\u53ef\u7528");
      return
    };
    this.canvas.addEventListener("webglcontextlost", function(a) {
      a.preventDefault()
    }.bind(this), !1);
    this.canvas.addEventListener("webglcontextrestored", function(a) {}.bind(this), !1)
  }

  function _$af482215() {
    var a = this.gl;
    a.clearColor(0.9, 0.9, 0.9, 1);
    a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT | a.STENCIL_BUFFER_BIT)
  }

  function _$af482216(a, b, c, d) {
    this.mobile = /Android|iPhone|iPod|iPad|Windows Phone|IEMobile|BlackBerry|webOS/.test(navigator.userAgent);
    this.domRoot = document.createElement("div");
    this.domRoot.style.width = a + "px";
    this.domRoot.style.height = b + "px";
    this.initCanvas(a, b);
    this.scene = this.input = null;
    this.sceneURL = c;
    this.sleepCounter = 8;
    this.onLoad = null;
    this.ui = new _$af482154(this);
    this.ui.setSize(a, b);
    this.ui.showPreview(d)
  }

  function _$af482217(a, b) {
    this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
    this.canvas = document.createElement("canvas");
    this.canvas.width = (Math.min(window.devicePixelRatio, 2) || 1) * a;
    this.canvas.height = (Math.min(window.devicePixelRatio, 2) || 1) * b;
    this.canvas.style.width = a + "px";
    this.canvas.style.height = b + "px";
    this.canvas.style.position = "absolute";
    this.canvas.style["z-index"] = "-10";
    this.domRoot.appendChild(this.canvas)
  }

  function _$af482218() {
    var a = {
        alpha: !!fdage.transparentBackground,
        depth: !1,
        stencil: !1,
        antialias: !1,
        premultipliedAlpha: !!fdage.transparentBackground,
        preserveDrawingBuffer: !1
      },
      a = this.gl = this.canvas.getContext("webgl", a) || this.canvas.getContext("experimental-webgl", a);
    if (!this.gl) {
      return this.ui.showFailure("webgl\u51fa\u9519\u3002</br>\u5efa\u8bae\u60a8\u5c06\u6d4f\u89c8\u5668\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\uff0c\u4ee5\u83b7\u6700\u597d\u7684\u4f53\u9a8c\u3002<br><span style=\"font-size:0.8em\">\u83b7\u77e5\u66f4\u591awebgl\u6d4f\u89c8\u5668\u4fe1\u606f\u8bf7<a href=\"webglInfo.html\" style=\"color: #a6ccea;\">\u70b9\u51fb\u6b64\u5904</a></span>", this), !1
    };
    this.canvas.addEventListener("webglcontextlost", function(a) {
      a.preventDefault()
    }.bind(this), !1);
    this.canvas.addEventListener("webglcontextrestored", function(a) {
      this.loadScene(this.sceneURL)
    }.bind(this), !1);
    a.ext = {
      textureAniso: a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic"),
      textureFloat: a.getExtension("OES_texture_float"),
      textureFloatLinear: a.getExtension("OES_texture_float_linear"),
      textureHalf: a.getExtension("OES_texture_half_float"),
      textureHalfLinear: a.getExtension("OES_texture_half_float_linear"),
      textureDepth: a.getExtension("WEBGL_depth_texture"),
      colorBufferFloat: a.getExtension("WEBGL_color_buffer_float"),
      colorBufferHalf: a.getExtension("EXT_color_buffer_half_float"),
      index32bit: a.getExtension("OES_element_index_uint"),
      loseContext: a.getExtension("WEBGL_lose_context"),
      derivatives: a.getExtension("OES_standard_derivatives")
    };
    a.limits = {
      textureSize: a.getParameter(a.MAX_TEXTURE_SIZE),
      varyings: a.getParameter(a.MAX_VARYING_VECTORS),
      vertexAttribs: a.getParameter(a.MAX_VERTEX_ATTRIBS),
      vertexUniforms: a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),
      fragmentUniforms: a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),
      viewportSizes: a.getParameter(a.MAX_VIEWPORT_DIMS),
      vendor: a.getParameter(a.VENDOR),
      version: a.getParameter(a.VERSION)
    };
    a.hints = {
      mobile: this.mobile
    };
    a.enable(a.DEPTH_TEST);
    a.shaderCache = new _$af482100(a);
    a.textureCache = new _$af482130(a);
    this.allocBacking();
    return !0
  }

  function _$af482221() {
    var a = this.gl,
      b = !1,
      c = {
        width: this.canvas.width,
        height: this.canvas.height
      };
    this.mainColor = new _$af482121(a, c);
    a.ext.textureHalf && a.ext.textureHalfLinear && (this.mainColor.loadArray(null, a.RGBA, a.ext.textureHalf.HALF_FLOAT_OES), this.mainBuffer = new _$af481935(a, {
      color0: this.mainColor,
      createDepth: !0
    }), b = this.mainBuffer.valid);
    !b && a.ext.textureFloat && a.ext.textureFloatLinear && !a.hints.mobile && (this.mainColor.loadArray(null, a.RGBA, a.FLOAT), this.mainBuffer = new _$af481935(a, {
      color0: this.mainColor,
      createDepth: !0
    }), b = this.mainBuffer.valid);
    for (; !b;) {
      this.mainColor = new _$af482121(a, c), this.mainColor.loadArray(null, a.RGBA, a.UNSIGNED_BYTE), this.mainBuffer = new _$af481935(a, {
        color0: this.mainColor,
        createDepth: !0
      }), b = this.mainBuffer.valid, c.width /= 2, c.height /= 2
    }
  }

  function _$af482222(a) {
    this.sceneURL = a || this.sceneURL;
    this.scene = this.input = null;
    if (this.initGL() && this.sceneURL) {
      var b = this.ui.signalLoadProgress.bind(this.ui);
      a = function(a) {
        b(1, 1);
        this.scene = new _$af482088(this.gl);
        var file = new _$af481904(a);
        if (gui) {
          gui.controls.file = file
        };
        var load = this.scene.load(file);
        if (load === true) {
          if (2070 >= this.scene.metaData.tbVersion) {
            this.ui.showFailure("\u6a21\u578b\u6587\u4ef6\u7248\u672c\u8fc7\u4f4e", this)
          } else {
            if (this.bindInput(), this.requestFrame(this.updateLoad.bind(this)), this.onLoad) {
              this.onLoad()
            }
          }
        } else {
          this.ui.showFailure("\u6a21\u578b\u6587\u4ef6\u65e0\u6cd5\u8bfb\u53d6\u6216\u65e0\u6548" + (load.failure ? load.failure : ""), this)
        }
      }.bind(this);
      var c = function() {
        this.ui.showFailure("\u6a21\u578b\u6587\u4ef6 (" + this.sceneURL + ") \u65e0\u6cd5\u83b7\u53d6.", this)
      }.bind(this);
      Network.fetchBinary(this.sceneURL, a, c, b)
    }
  }

  function _$af482225(a) {
    var a = new _$af481922(a);
    var data = a.bytes;
    var skyData = this.decompress(data, 2097152);
    return skyData
  }

  function _$af482226() {
    delete this.scene;
    delete this.input;
    delete this.ui;
    delete this.mainColor;
    delete this.mainBuffer;
    delete this.gl;
    var a = this.domRoot.clientWidth,
      b = this.domRoot.clientHeight;
    this.initCanvas(a, b);
    this.ui = new _$af482154(this);
    this.ui.setSize(a, b);
    this.ui.showPreview();
    this.cancelFrame()
  }

  function _$af482227() {
    this.input = new _$af481944(this.ui.container);
    var a = function() {
      this.wake();
      this.scene.postRender.discardAAHistory()
    }.bind(this);
    this.input.onDrag.push(function(b, c, d, e) {
      b = 1 - 2.2 / (Math.sqrt(d * d + e * e) + 2.2);
      c = this.scene.view;
      c.rotation[1] -= 0.4 * d * b;
      c.rotation[0] -= 0.4 * e * b;
      c.rotation[0] = 90 < c.rotation[0] ? 90 : c.rotation[0];
      c.rotation[0] = -90 > c.rotation[0] ? -90 : c.rotation[0];
      c.updateView();
      a()
    }.bind(this));
    this.input.onPan.push(function(b, c) {
      var d = this.scene.view,
        e = d.fov / 45 * 0.8 * (d.radius / this.domRoot.clientHeight),
        f = -b * e,
        e = c * e;
      d.pivot[0] += f * d.transform[0] + e * d.transform[4];
      d.pivot[1] += f * d.transform[1] + e * d.transform[5];
      d.pivot[2] += f * d.transform[2] + e * d.transform[6];
      d.updateView();
      a()
    }.bind(this));
    this.input.onPan2.push(function(b, c) {
      var d = 1 - 2.2 / (Math.sqrt(b * b + c * c) + 2.2);
      this.scene.lights.rotation -= 0.4 * b * d;
      a()
    }.bind(this));
    this.input.onZoom.push(function(b) {
      var c = this.scene.view;
      c.radius *= 1 - 0.002 * b;
      c.radius = 0.001 > c.radius ? 0.001 : c.radius;
      c.radius = 1E3 < c.radius ? 1E3 : c.radius;
      c.updateView();
      a()
    }.bind(this));
    this.ui.bindInput(this.input)
  }

  function _$af482233(a) {
    this.sleepCounter = a || ((this.gl.hints.mobile) ? 4 : 16);
    this.requestFrame(this.update.bind(this))
  }

  function _$af482234(a) {
    var b = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    if (!this.frameRequestPending) {
      var c = function() {
        this.frameRequestPending = 0;
        a()
      }.bind(this);
      this.frameRequestPending = b(c, this.canvas)
    }
  }

  function _$af482236() {
    this.frameRequestPending && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame)(this.frameRequestPending)
  }

  function _$af482237() {
    FullScreen.active() ? (this.oldRootWidth = this.domRoot.style.width, this.oldRootHeight = this.domRoot.style.height, this.domRoot.style.width = "100%", this.domRoot.style.height = "100%") : (this.domRoot.style.width = this.oldRootWidth, this.domRoot.style.height = this.oldRootHeight);
    this.wake()
  }

  function _$af482238(a, b) {
    a && b ? (this.domRoot.style.width = a + "px", this.domRoot.style.height = b + "px") : (a = this.domRoot.clientWidth, b = this.domRoot.clientHeight);
    this.canvas.width = (Math.min(window.devicePixelRatio, 2) || 1) * a;
    this.canvas.height = (Math.min(window.devicePixelRatio, 2) || 1) * b;
    this.canvas.style.width = a + "px";
    this.canvas.style.height = b + "px";
    this.scene && this.scene.SnapshotLine && this.scene.SnapshotLine.update();
    this.ui.setSize(a, b);
    this.allocBacking();
    this.wake()
  }

  function _$af482239() {
    this.scene.complete() ? this.start() : this.requestFrame(this.updateLoad.bind(this));
    this.ui.animate()
  }

  function _$af482240() {
    if (fdage.edit) {
      var m = [];
      for (var i in this.scene.materials) {
        m.push(i)
      };
      gui.matListInit(m);
      gui.bindEvents();
      console.log("loadTime: " + (new Date().getTime() - fdage.startTime) + "ms")
    };
    this.scene.view.updateView();
    this.ui.showActiveView();
    this.requestFrame(this.update.bind(this))
  }

  function _$af482241() {
    if (0 < this.sleepCounter || this.ui.animating()) {
      this.ui.animate();
      this.scene.update();
      this.drawScene();
      this.requestFrame(this.update.bind(this))
    };
    this.sleepCounter--
  }

  function _$af482242() {
    if (this.gl.isContextLost()) {
      return
    };
    if (this.domRoot.clientWidth !== this.canvas.clientWidth || this.domRoot.clientHeight !== this.canvas.clientHeight) {
      this.resize()
    };
    this.scene.view.size = [this.mainBuffer.width, this.mainBuffer.height];
    this.scene.view.updateProjection();
    this.scene.postRender.adjustProjectionForSupersampling(this.scene.view);
    this.scene.collectShadows(this.mainBuffer);
    this.mainBuffer.bind();
    this.scene.draw();
    this.scene.postRender.present(this.mainColor, this.canvas.width, this.canvas.height)
  }

  function _$af482243() {
    this.updateView()
  }

  function _$af482244(hurry, tran, count) {
    if (tran) {
      webview.scene.view.updateView()
    };
    webview.wake(count || ((this.gl.hints.mobile) ? 4 : 16));
    if (hurry) {
      webview.scene.postRender.discardAAHistory()
    }
  }

  function _$af482245() {
    if (this.gl.isContextLost()) {
      return
    };
    this.scene.view.updateProjection();
    this.scene.postRender.adjustProjectionForSupersampling(this.scene.view);
    this.mainBuffer.bind();
    this.scene.draw();
    this.scene.postRender.present(this.mainColor, this.canvas.width, this.canvas.height)
  }
  byteToFloat = _$af481902;
  Archive = _$af481904;
  BigInt = _$af481909;
  Bounds = _$af481921;
  ByteStream = _$af481922;
  Framebuffer = _$af481935;
  Input = _$af481944;
  TranslateCon = _$af481958;
  Cone = _$af481965;
  LightTargetCon = _$af481967;
  Sphere = _$af481971;
  GuideLine = _$af481974;
  lightSi = _$af481975;
  Lights = _$af481989;
  Material = _$af482002;
  Sprite = _$af482030;
  Rect = _$af482039;
  SnapshotLine = _$af482042;
  Line = _$af482045;
  Mesh = _$af482050;
  MeshRenderable = _$af482054;
  PostRender = _$af482080;
  Scene = _$af482088;
  Shader = _$af482095;
  ShaderCache = _$af482100;
  ShadowCollector = _$af482111;
  Sky = _$af482115;
  Sky2 = _$af482116;
  Texture = _$af482121;
  TextureCache = _$af482130;
  UI = _$af482154;
  View = _$af482204;
  Previewer = _$af482211;
  WebViewer = _$af482216;
  ArchiveSky = _$af482225;
  dom = {};
  dom.addClass = _$af481889;
  dom.removeClass = _$af481890;
  dom.hasClass = _$af481891;
  dom.bind = _$af481892;
  dom.unbind = _$af481893;
  dom.id = _$af481894;
  dom.Tag = _$af481895;
  dom.cla = _$af481896;
  dom.ifVoid = _$af481897;
  dom.objToArray = _$af481898;
  clamp = _$af481899;
  dom.hm = _$af481900;
  dom.inverseHm = _$af481901;
  getSnapRect = _$af481903;
  fdage = {};
  "use strict";
  _$af481904.prototype["get"] = _$af481905;
  _$af481904.prototype.extract = _$af481906;
  _$af481904.prototype.checkSignature = _$af481907;
  _$af481904.prototype.decompress = _$af481908;
  _$af481909.prototype.setBytes = _$af481910;
  _$af481909.prototype.toInt32 = _$af481911;
  _$af481909.prototype.lessThan = _$af481912;
  _$af481909.prototype.shiftRight = _$af481913;
  _$af481909.prototype.shiftLeft = _$af481914;
  _$af481909.prototype.bitCount = _$af481915;
  _$af481909.prototype.sub = _$af481916;
  _$af481909.prototype.mul = _$af481917;
  _$af481909.prototype.mod = _$af481918;
  _$af481909.prototype.powmod = _$af481919;
  _$af481909.prototype.trim = _$af481920;
  _$af481922.prototype.empty = _$af481923;
  _$af481922.prototype.readCString = _$af481924;
  _$af481922.prototype.asString = _$af481925;
  _$af481922.prototype.readBytes = _$af481926;
  _$af481922.prototype.readUint32 = _$af481927;
  prepareEmbedParams = _$af481928, embed = _$af481930, fetchThumbnail = _$af481933, fdage = "undefined" == typeof fdage ? {} : fdage;
  fdage.embed = embed;
  fdage.fetchThumbnail = fetchThumbnail;
  _$af481935.createDepthBuffer = _$af481936;
  _$af481935.prototype.bind = _$af481937;
  _$af481935.bindNone = _$af481938;
  FullScreen = {
    support: _$af481939,
    begin: _$af481940,
    end: _$af481942,
    active: _$af481943
  };
  _$af481944.prototype.attach = _$af481945;
  _$af481958.prototype.createLine = _$af481959;
  _$af481958.prototype.draw = _$af481960;
  _$af481958.prototype.setSelectColor = _$af481961;
  _$af481958.prototype.changePosition = _$af481962;
  preTransform = _$af481963;
  getScaleMatrix = _$af481964;
  _$af481965.prototype.updateVertexBuffer = _$af481966;
  _$af481967.prototype.getPos2ByDir = _$af481968;
  _$af481967.prototype.draw = _$af481969;
  _$af481967.prototype.changePosition = _$af481970;
  _$af481971.prototype.updateVertexBuffer = _$af481972;
  _$af481971.prototype.isClicked = _$af481973;
  _$af481975.prototype.preDealColor = _$af481976;
  _$af481975.prototype.setSpriteColor = _$af481977;
  _$af481975.prototype.setDisplay = _$af481978;
  _$af481975.prototype.recognizeType = _$af481979;
  _$af481975.prototype.getAngle = _$af481980;
  _$af481975.prototype.setAngle = _$af481981;
  _$af481975.prototype.getSharpness = _$af481982;
  _$af481975.prototype.setSharpness = _$af481983;
  _$af481975.prototype.getDistance = _$af481984;
  _$af481975.prototype.setDistance = _$af481985;
  _$af481975.prototype.getCurve = _$af481986;
  _$af481975.prototype.setCurve = _$af481987;
  _$af481975.prototype.translate = _$af481988;
  _$af481989.prototype.getIndex = _$af481990;
  _$af481989.prototype.changeColor = _$af481991;
  _$af481989.prototype.changeParameter = _$af481992;
  _$af481989.prototype.changeSpot = _$af481993;
  _$af481989.prototype.changePosition = _$af481994;
  _$af481989.prototype.changeDirection = _$af481995;
  _$af481989.prototype.changeMatrixWeight = _$af481996;
  _$af481989.prototype.reBuildPorp = _$af481997;
  _$af481989.prototype.tidyOrder = _$af481998;
  _$af481989.prototype.getLightPos = _$af481999;
  _$af481989.prototype.getLightDir = _$af482000;
  _$af481989.prototype.update = _$af482001;
  _$af482002.prototype.addOrRemoveDefine = _$af482006;
  _$af482002.prototype.changeDefine = _$af482007;
  _$af482002.prototype.bind = _$af482008;
  _$af482002.prototype.bindAlphaPrepass = _$af482009;
  _$af482002.prototype.complete = _$af482010;
  Matrix = {
    type: Float32Array,
    create: _$af482011,
    empty: _$af482012,
    identity: _$af482013,
    set: _$af482014,
    translation: _$af482015,
    rotation: _$af482016,
    mul: _$af482017,
    invert: _$af482018,
    transpose: _$af482019,
    mul4: _$af482020,
    mulPoint: _$af482021,
    mulVec: _$af482022,
    perspective: _$af482023,
    perspectiveInfinite: _$af482024,
    ortho: _$af482025,
    lookAt: _$af482026,
    copy: _$af482027,
    copyToBuffer: _$af482028
  };
  drawplane = _$af482029;
  turn3dTo2d = _$af482031;
  _$af482030.prototype.changePosition = _$af482032;
  _$af482030.prototype.isClicked = _$af482033;
  _$af482030.prototype.draw = _$af482034;
  _$af482030.prototype.changeTexture = _$af482035;
  _$af482030.prototype.prepareTexture = _$af482036;
  _$af482030.prototype.complete = _$af482038;
  _$af482039.prototype.update = _$af482040;
  _$af482039.prototype.draw = _$af482041;
  _$af482042.prototype.update = _$af482043;
  _$af482042.prototype.draw = _$af482044;
  _$af482045.prototype.updateVertexBuffer = _$af482046;
  _$af482045.prototype.isHover = _$af482047;
  _$af482045.prototype.draw = _$af482048;
  _$af482045.prototype.complete = _$af482049;
  _$af482050.prototype.rebuildAlpha = _$af482052;
  _$af482050.prototype.rebuildNormal = _$af482053;;;
  _$af482054.prototype.computeBoundingSphere = _$af482055;
  _$af482054.prototype.draw = _$af482056;
  _$af482054.prototype.drawHighlight = _$af482057;
  _$af482054.prototype.drawOutline = _$af482058;
  _$af482054.prototype.drawShadow = _$af482059;
  _$af482054.prototype.drawAlphaShadow = _$af482060;
  _$af482054.prototype.drawAlphaPrepass = _$af482061;
  _$af482054.prototype.drawWire = _$af482062;
  _$af482054.prototype.complete = _$af482063;
  Network = {
    fetchImage: _$af482064,
    fetchText: _$af482067,
    fetchBinary: _$af482071,
    fetchBinaryIncremental: _$af482075
  };
  _$af482080.prototype.prepareBloom = _$af482081;
  _$af482080.prototype.computeParams = _$af482082;
  _$af482080.prototype.present = _$af482083;
  _$af482080.prototype.allocAABuffers = _$af482084;
  _$af482080.prototype.adjustProjectionForSupersampling = _$af482085;
  _$af482080.prototype.discardAAHistory = _$af482086;
  _$af482080.prototype.fillScreen = _$af482087;
  _$af482088.prototype.checkFailure = _$af482089;
  _$af482088.prototype.load = _$af482090;
  _$af482088.prototype.update = _$af482091;
  _$af482088.prototype.collectShadows = _$af482092;
  _$af482088.prototype.draw = _$af482093;
  _$af482088.prototype.complete = _$af482094;
  _$af482095.prototype.build = _$af482096;
  _$af482095.prototype.bind = _$af482098;
  _$af482095.prototype.complete = _$af482099;
  _$af482100.prototype.fromURLs = _$af482101;
  _$af482100.prototype.fetch = _$af482105;
  _$af482100.prototype.resolveIncludes = _$af482108;
  _$af482111.prototype.bindDepthTexture = _$af482112;
  _$af482111.prototype.collect = _$af482113;
  _$af482111.prototype.complete = _$af482114;
  _$af482116.prototype.draw = _$af482117;
  _$af482115.prototype.setClearColor = _$af482118;
  _$af482115.prototype.draw = _$af482119;
  _$af482115.prototype.complete = _$af482120;
  _$af482121.prototype.loadImage = _$af482122;
  _$af482121.prototype.loadArray = _$af482123;
  _$af482121.prototype.setParams = _$af482124;
  _$af482121.prototype.rebuildMips = _$af482126;
  _$af482121.prototype.bind = _$af482127;
  _$af482121.prototype.destroy = _$af482128;
  _$af482121.prototype.complete = _$af482129;
  _$af482130.prototype.fromURL = _$af482131;
  _$af482130.prototype.fromFile = _$af482133;
  _$af482130.prototype.fromFilesMergeAlpha = _$af482135;
  _$af482130.prototype.fromFilesMergeAlpha2 = _$af482139;
  _$af482130.prototype.MergeAlpha = _$af482143;
  _$af482130.prototype.MergeAlpha2 = _$af482144;
  _$af482130.parseFile = _$af482150;
  _$af482154.prototype.setSize = _$af482155;
  _$af482154.prototype.clearView = _$af482156;
  _$af482154.prototype.bindInput = _$af482157;
  _$af482154.sanitize = _$af482160;
  _$af482154.sanitizeURL = _$af482161;
  _$af482154.prototype.showFailure = _$af482162;
  _$af482154.prototype.showPreview = _$af482163;
  _$af482154.prototype.setThumbnailURL = _$af482166;
  _$af482154.prototype.setThumbnail = _$af482167;
  _$af482154.prototype.showActiveView = _$af482168;;;
  _$af482154.prototype.refreshUI = _$af482178;
  _$af482154.prototype.signalLoadProgress = _$af482179;
  _$af482154.prototype.animating = _$af482180;
  _$af482154.prototype.animate = _$af482181;
  Vect = {
    type: Float32Array,
    create: _$af482182,
    empty: _$af482183,
    set: _$af482184,
    copy: _$af482185,
    add: _$af482186,
    sub: _$af482187,
    scale: _$af482188,
    mul: _$af482189,
    mad: _$af482190,
    smad: _$af482191,
    negate: _$af482192,
    negate4: _$af482193,
    length: _$af482194,
    dot: _$af482195,
    dot4: _$af482196,
    normalize: _$af482197,
    cross: _$af482198,
    lerp: _$af482199,
    lerp4: _$af482200,
    min: _$af482201,
    max: _$af482202,
    projectOnPlane: _$af482203
  };
  _$af482204.prototype.saveResetView = _$af482205;
  _$af482204.prototype.loadView = _$af482206;
  _$af482204.prototype.reset = _$af482207;
  _$af482204.prototype.updateView = _$af482208;
  _$af482204.prototype.offsetProjection = _$af482209;
  _$af482204.prototype.updateProjection = _$af482210;
  _$af482211.prototype.initGL = _$af482212;
  _$af482211.prototype.clear = _$af482215;
  _$af482216.prototype.initCanvas = _$af482217;
  _$af482216.prototype.initGL = _$af482218;
  _$af482216.prototype.allocBacking = _$af482221;
  _$af482216.prototype.loadScene = _$af482222;
  _$af482225.prototype.decompress = _$af481904.prototype.decompress;
  _$af482216.prototype.unload = _$af482226;
  _$af482216.prototype.bindInput = _$af482227;
  _$af482216.prototype.wake = _$af482233;
  _$af482216.prototype.requestFrame = _$af482234;
  _$af482216.prototype.cancelFrame = _$af482236;
  _$af482216.prototype.fullscreenChange = _$af482237;
  _$af482216.prototype.resize = _$af482238;
  _$af482216.prototype.updateLoad = _$af482239;
  _$af482216.prototype.start = _$af482240;
  _$af482216.prototype.update = _$af482241;
  _$af482216.prototype.drawScene = _$af482242;
  _$af482216.prototype.drawScene4times = _$af482243;
  _$af482216.prototype.updateView = _$af482244;
  _$af482216.prototype.drawScene2 = _$af482245;
  fdage = "undefined" == typeof fdage ? {} : fdage;
  fdage.WebViewer = _$af482216;
  fdage.dataLocale = "images/";
  ShaderTable = {
    "aaresolve.glsl": "precision mediump float;uniform sampler2D tInput0;uniform sampler2D tInput1;uniform sampler2D tInput2; \x0A#ifdef HIGHQ\x0A uniform sampler2D tInput3;uniform sampler2D tInput4;uniform sampler2D tInput5;uniform sampler2D tInput6;uniform sampler2D tInput7;uniform sampler2D tInput8;uniform sampler2D tInput9;uniform sampler2D tInput10;uniform sampler2D tInput11;uniform sampler2D tInput12;uniform sampler2D tInput13;uniform sampler2D tInput14;uniform sampler2D tInput15; \x0A#endif\x0A uniform mat4 uSamplesValid;varying highp vec2 d;void main(void){vec4 e0=texture2D(tInput0,d); vec4 e1=texture2D(tInput1,d);vec4 e2=texture2D(tInput2,d);\x0A#ifdef HIGHQ\x0A vec4 e3=texture2D(tInput3,d);vec4 e4=texture2D(tInput4,d);vec4 e5=texture2D(tInput5,d);vec4 e6=texture2D(tInput6,d);vec4 e7=texture2D(tInput7,d);vec4 e8=texture2D(tInput8,d);vec4 e9=texture2D(tInput9,d);vec4 e10=texture2D(tInput10,d);vec4 e11=texture2D(tInput11,d);vec4 e12=texture2D(tInput12,d);vec4 e13=texture2D(tInput13,d);vec4 e14=texture2D(tInput14,d);vec4 e15=texture2D(tInput15,d);\x0Agl_FragColor=e0*uSamplesValid[0][0]+e1*uSamplesValid[0][1]+e2*uSamplesValid[0][2]+e3*uSamplesValid[0][3]+e4*uSamplesValid[1][0]+e5*uSamplesValid[1][1]+e6*uSamplesValid[1][2]+e7*uSamplesValid[1][3]+e8*uSamplesValid[2][0]+e9*uSamplesValid[2][1]+e10*uSamplesValid[2][2]+e11*uSamplesValid[2][3]+e12*uSamplesValid[3][0]+e13*uSamplesValid[3][1]+e14*uSamplesValid[3][2]+e15*uSamplesValid[3][3];\x0A#else\x0A gl_FragColor=e0*uSamplesValid[0][0]+e1*uSamplesValid[0][1]+e2*uSamplesValid[0][2];\x0A#endif\x0A}",
    "alphaprepassfrag.glsl": "precision mediump float;\x0A#include <matdither.glsl>\x0Auniform sampler2D tAlbedo;uniform float uAlphaStrength;varying mediump vec2 j;void main(){float k=texture2D(tAlbedo,j).a * uAlphaStrength / 100.0;if(k<=l(j.x)){discard;}gl_FragColor=vec4(0.0);}",
    "alphaprepassvert.glsl": "precision highp float;uniform mat4 uModelViewProjectionMatrix;attribute vec3 vPosition;attribute vec2 vTexCoord;varying mediump vec2 j;vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(void){gl_Position=m(uModelViewProjectionMatrix,vPosition.xyz);j=vTexCoord;}",
    "bloom.glsl": "precision mediump float;uniform sampler2D tInput;uniform vec4 uKernel[BLOOM_SAMPLES];varying highp vec2 d;void main(void){vec3 c=vec3(0.0,0.0,0.0);for(int u=0;u<BLOOM_SAMPLES;++u){vec3 v=uKernel[u].xyz;c+=texture2D(tInput,d+v.xy).xyz*v.z;}gl_FragColor.xyz=c;gl_FragColor.w=0.0;}",
    "bloomshrink.glsl": "precision highp float;uniform sampler2D tInput;varying highp vec2 d;void main(void){float A=0.25/256.0;gl_FragColor=0.25*(texture2D(tInput,d+vec2(A,A))+texture2D(tInput,d+vec2(A,-A))+texture2D(tInput,d+vec2(-A,A))+texture2D(tInput,d+vec2(-A,-A)));}",
    "matdither.glsl": "float l(highp float B){highp float C=0.5*fract(gl_FragCoord.x*0.5)+0.5*fract(gl_FragCoord.y*0.5);return 0.4+0.6*fract(C+3.141592e6*B);}",
    "matlighting.glsl": "float dY(float dZ,float ec){return saturate(-dZ*ec+dZ+ec);}vec3 ed(float dZ,vec3 ec){return saturate(-dZ*ec+vec3(dZ)+ec);}float ee(float ec){return-0.31830988618379*ec+0.31830988618379;}vec3 ef(vec3 ec){return-0.31830988618379*ec+vec3(0.31830988618379);}vec3 dV(vec3 T,vec3 N,vec3 U,float eh){float ei=1.0-saturate(dot(T,N));float ej=ei*ei;ei*=ej*ej;ei*=eh;return(U-ei*U)+ei*uFresnel;}vec2 ek(vec2 el,vec2 ec){el=1.0-el;vec2 em=el*el;em*=em;el=mix(em,el*0.4,ec);return el;}vec3 du(vec3 en){\x0A#define c(n) uDiffuseCoefficients[n].xyz\x0Avec3 C=(c(0)+en.y*((c(1)+c(4)*en.x)+c(5)*en.z))+en.x*(c(3)+c(7)*en.z)+c(2)*en.z;\x0A#undef c\x0Avec3 sqr=en*en;C+=uDiffuseCoefficients[6].xyz*(3.0*sqr.z-1.0);C+=uDiffuseCoefficients[8].xyz*(sqr.x-sqr.y);return C;}void eo(inout vec3 eu,inout vec3 ev,inout vec3 eA,vec3 en){eu=uDiffuseCoefficients[0].xyz;ev=uDiffuseCoefficients[1].xyz*en.y;ev+=uDiffuseCoefficients[2].xyz*en.z;ev+=uDiffuseCoefficients[3].xyz*en.x;vec3 swz=en.yyz*en.xzx;eA=uDiffuseCoefficients[4].xyz*swz.x;eA+=uDiffuseCoefficients[5].xyz*swz.y;eA+=uDiffuseCoefficients[7].xyz*swz.z;vec3 sqr=en*en;eA+=uDiffuseCoefficients[6].xyz*(3.0*sqr.z-1.0);eA+=uDiffuseCoefficients[8].xyz*(sqr.x-sqr.y);}vec3 eB(vec3 eu,vec3 ev,vec3 eA,vec3 eC,float ec){eC=mix(vec3(1.0),eC,ec);return(eu+ev*eC.x)+eA*eC.z;}vec3 eD(vec3 eu,vec3 ev,vec3 eA,vec3 eC,vec3 eE){vec3 eF=mix(vec3(1.0),eC.yyy,eE);vec3 eG=mix(vec3(1.0),eC.zzz,eE);return(eu+ev*eF)+eA*eG;}vec3 dB(vec3 en,float V){en/=dot(vec3(1.0),abs(en));vec2 eH=abs(en.zx)-vec2(1.0,1.0);vec2 eI=vec2(en.x<0.0?eH.x:-eH.x,en.z<0.0?eH.y:-eH.y);vec2 eJ=(en.y<0.0)?eI:en.xz;eJ=vec2(0.5*(254.0/256.0),0.125*0.5*(254.0/256.0))*eJ+vec2(0.5,0.125*0.5);float eK=fract(7.0*V);eJ.y+=0.125*(7.0*V-eK);vec2 eL=eJ+vec2(0.0,0.125);vec4 eM=mix(texture2D(tSkySpecular,eJ),texture2D(tSkySpecular,eL),eK);vec3 r=eM.xyz*(7.0*eM.w);return r*r;}float dC(vec3 en,vec3 eN){float eO=dot(en,eN);eO=saturate(1.0+uHorizonOcclude*eO);return eO*eO;}",
    "matmicrofiber.glsl": "\x0A#ifdef MICROFIBER\x0Auniform vec4 uTexRangeFuzz;uniform float uFresnelIntegral;uniform vec4 uFresnelColor;uniform float uFresnelOcc;uniform float uFresnelGlossMask;struct dj{vec3 dm;vec3 dQ;vec3 eP;vec3 eQ;vec3 eR;};void dl(out dj s,vec3 N){s.dm=s.dQ=du(N);s.eP=vec3(0.0);s.eQ=uFresnelColor.rgb;s.eR=uFresnelColor.aaa*vec3(1.0,0.5,0.25);\x0A#ifndef MICROFIBER_NO_FUZZ_TEX\x0Avec4 J=R(j,uTexRangeFuzz);s.eQ*=L(J.rgb);\x0A#endif\x0A}void dP(inout dj s,float eS,vec3 dK,vec3 N,vec3 dM){float dZ=dot(dK,N);float dQ=saturate((1.0/3.1415926)*dZ);float eT=dY(dZ,s.eR.z);\x0A#ifdef SHADOW_COUNT\x0AdQ*=eS;float eU=mix(1.0,eS,uFresnelOcc);float eP=eT*eU;\x0A#else \x0Afloat eP=eT;\x0A#endif\x0As.eP=eP*dM+s.eP;s.dQ=dQ*dM+s.dQ;}void dU(out vec3 dn,out vec3 diff_extra,inout dj s,vec3 T,vec3 N,float V){s.eP*=uFresnelIntegral;float el=dot(T,N);vec2 eV=ek(vec2(el,el),s.eR.xy);s.eP=s.dm*eV.x+(s.eP*eV.y);s.eP*=s.eQ;float eW=saturate(1.0+-uFresnelGlossMask*V);s.eP*=eW*eW;dn=s.dQ;diff_extra=s.eP;}\x0A#endif\x0A",
    "matsampling.glsl": "vec3 L(vec3 c){return c*c;}vec3 On(vec3 n,float s){vec3 eX=E;vec3 eY=F;vec3 eZ=gl_FrontFacing?G:-G;\x0A#ifdef TSPACE_RENORMALIZE\x0AeZ=normalize(eZ);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeX-=dot(eX,eZ)*eZ;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeX=normalize(eX);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeY=(eY-dot(eY,eZ)*eZ)-dot(eY,eX)*eX;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeY=normalize(eY);\x0A#endif\x0A#ifdef TSPACE_COMPUTE_BITANGENT\x0Avec3 fc=cross(eZ,eX);eY=dot(fc,eY)<0.0?-fc:fc;\x0A#endif\x0A n=2.0*n-vec3(1.0); n.x*=s;n.y*=s;if(n.z>=0.0){n.z=1.0-(1.0-n.z)*s;}else if(s==0.0){n.z=1.0;}else{n.z=(1.0+n.z)*s-1.0;}return normalize(eX*n.x+eY*n.y+eZ*n.z);}vec3 O(vec3 n){vec3 eX=E;vec3 eY=F;vec3 eZ=gl_FrontFacing?G:-G;\x0A#ifdef TSPACE_RENORMALIZE\x0AeZ=normalize(eZ);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeX-=dot(eX,eZ)*eZ;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeX=normalize(eX);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeY=(eY-dot(eY,eZ)*eZ)-dot(eY,eX)*eX;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeY=normalize(eY);\x0A#endif\x0A#ifdef TSPACE_COMPUTE_BITANGENT\x0Avec3 fc=cross(eZ,eX);eY=dot(fc,eY)<0.0?-fc:fc;\x0A#endif\x0An=2.0*n-vec3(1.0);return normalize(eX*n.x+eY*n.y+eZ*n.z);}vec3 Q(vec3 t){vec3 eZ=gl_FrontFacing?G:-G;return normalize(E*t.x+F*t.y+eZ*t.z);}vec4 R(vec2 fd,vec4 fe,sampler2D tExtra){\x0A#if GL_OES_standard_derivatives\x0Avec2 ff=fract(fd);vec2 fh=fwidth(ff);float fi=(fh.x+fh.y)>0.5?-6.0:0.0;return texture2D(tExtra,ff*fe.xy+fe.zw,fi);\x0A#else\x0Areturn texture2D(tExtra,fract(fd)*fe.xy+fe.zw);\x0A#endif\x0A}vec3 fj(sampler2D fk,vec2 fl,float fm){vec3 n=texture2D(fk,fl,fm*4.0).xyz;return O(n);}",
    "matshadows.glsl": "\x0A#ifdef SHADOW_COUNT\x0A#ifdef MOBILE\x0A#define SHADOW_KERNEL (4.0/1536.0)\x0A#else\x0A#define SHADOW_KERNEL (4.0/2048.0)\x0A#endif\x0Ahighp vec4 m(highp mat4 o,highp vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}uniform sampler2D tDepth0;\x0A#if SHADOW_COUNT > 1\x0Auniform sampler2D tDepth1;\x0A#if SHADOW_COUNT > 2\x0Auniform sampler2D tDepth2;\x0A#endif\x0A#endif\x0Auniform highp vec2 uShadowKernelRotation;uniform highp vec4 uShadowMapSize;uniform highp mat4 uShadowMatrices[SHADOW_COUNT];uniform highp vec4 uShadowTexelPadProjections[SHADOW_COUNT];highp float fn(highp vec3 C){return(C.x+C.y*(1.0/255.0))+C.z*(1.0/65025.0);}float fo(sampler2D fu,highp vec2 fd,highp float fv){\x0A#ifndef MOBILE\x0Ahighp vec2 c=fd*uShadowMapSize.xy;highp vec2 a=floor(c)*uShadowMapSize.zw,b=ceil(c)*uShadowMapSize.zw;vec4 fA;fA.x=fv<fn(texture2D(fu,a).xyz)?1.0:0.0;fA.y=fv<fn(texture2D(fu,vec2(b.x,a.y)).xyz)?1.0:0.0;fA.z=fv<fn(texture2D(fu,vec2(a.x,b.y)).xyz)?1.0:0.0;fA.w=fv<fn(texture2D(fu,b).xyz)?1.0:0.0;highp vec2 w=c-a*uShadowMapSize.xy;vec2 t=(w.y*fA.zw+fA.xy)-w.y*fA.xy;return(w.x*t.y+t.x)-w.x*t.x;\x0A#else\x0Ahighp float C=fn(texture2D(fu,fd.xy).xyz);return fv<C?1.0:0.0;\x0A#endif\x0A}float fB(sampler2D fu,highp vec3 fd,float fC){highp vec2 v=uShadowKernelRotation*fC;float s;s=fo(fu,fd.xy+v,fd.z);s+=fo(fu,fd.xy-v,fd.z);s+=fo(fu,fd.xy+vec2(-v.y,v.x),fd.z);s+=fo(fu,fd.xy+vec2(v.y,-v.x),fd.z);s*=0.25;return s*s;}struct dF{float dO[LIGHT_COUNT];};void dH(out dF ss,float fC){highp vec3 fD[SHADOW_COUNT];vec3 eZ=gl_FrontFacing?G:-G;for(int u=0;u<SHADOW_COUNT;++u){vec4 fE=uShadowTexelPadProjections[u];float fF=fE.x*D.x+(fE.y*D.y+(fE.z*D.z+fE.w));\x0A#ifdef MOBILE\x0AfF*=.001+fC;\x0A#else\x0AfF*=.0005+0.5*fC;\x0A#endif\x0Ahighp vec4 fG=m(uShadowMatrices[u],D+fF*eZ);fD[u]=fG.xyz/fG.w;}\x0A#if SHADOW_COUNT > 0\x0Ass.dO[0]=fB(tDepth0,fD[0],fC);\x0A#endif\x0A#if SHADOW_COUNT > 1\x0Ass.dO[1]=fB(tDepth1,fD[1],fC);\x0A#endif\x0A#if SHADOW_COUNT > 2\x0Ass.dO[2]=fB(tDepth2,fD[2],fC);\x0A#endif\x0Afor(int u=SHADOW_COUNT;u<LIGHT_COUNT;++u){ss.dO[u]=1.0;}}\x0A#endif\x0A",
    "matskin.glsl": "\x0A#ifdef SKIN\x0Auniform vec4 uTexRangeSubdermis;uniform vec4 uTexRangeTranslucency;uniform vec4 uTexRangeFuzz;uniform vec3 uSubdermisColor;uniform vec4 uTransColor;uniform vec4 uFresnelColor;uniform float uFresnelOcc;uniform float uFresnelGlossMask;uniform float uTransSky;uniform float uFresnelIntegral;uniform float uTransIntegral;uniform float uSkinShadowBlur;uniform float uNormalSmooth;struct de{vec3 fH;vec3 fI,fJ,fK,eP;vec3 di,dm,fL;vec3 fM;vec3 fN;vec3 fO;vec3 fP;float fQ;float fR;float dJ;};void dh(out de s){vec4 J;\x0A#ifdef SKIN_NO_SUBDERMIS_TEX\x0As.fH=uSubdermisColor;s.fR=1.0;\x0A#else \x0AJ=R(j,uTexRangeSubdermis,tExtras);s.fH=L(J.xyz);s.fR=J.w*J.w;\x0A#endif\x0As.fP=uTransColor.rgb;s.fQ=uTransColor.a;\x0A#ifndef SKIN_NO_TRANSLUCENCY_TEX\x0AJ=R(j,uTexRangeTranslucency,tExtrasSkin);s.fP*=L(J.xyz);\x0A#endif\x0A s.fM=fj(tNormal,j,uNormalSmooth*s.fR);   vec3 fS,fT,fU;eo(fS,fT,fU,s.fM);s.dm=s.fI=fS+fT+fU;s.di=eD(fS,fT,fU,vec3(1.0,0.6667,0.25),s.fH);vec3 fV,fW,fX;eo(fV,fW,fX,-s.fM);s.fL=eB(fV,fW,fX,vec3(1.0,0.4444,0.0625),s.fQ);s.fL*=uTransSky;s.fJ=s.fK=s.eP=vec3(0.0);s.dJ=uSkinShadowBlur*s.fR;s.fH*=0.5;s.fQ*=0.5;s.fN=uFresnelColor.rgb;s.fO=uFresnelColor.aaa*vec3(1.0,0.5,0.25);\x0A#ifndef SKIN_NO_FUZZ_TEX\x0AJ=R(j,uTexRangeFuzz,tExtras);s.fN*=L(J.rgb);\x0A#endif\x0A}void dN(inout de s,float eS,float fY,vec3 dK,vec3 N,vec3 dM){float dZ=dot(dK,N);float fZ=dot(dK,s.fM);float dQ=saturate((1.0/3.1415926)*dZ);vec3 hc=ed(fZ,s.fH);float hd=dY(-fZ,s.fQ);vec3 fK=vec3(hd*hd);\x0A#ifdef SHADOW_COUNT\x0Afloat he=fY;vec3 hf=vec3(fY);float hh=saturate(eS-2.0*(fY*fY));hf+=hh*s.fH;\x0A#endif\x0Afloat eT=dY(fZ,s.fO.z);\x0A#ifdef SHADOW_COUNT\x0Avec3 eU=mix(vec3(1.0),hf,uFresnelOcc);vec3 eP=eT*eU;\x0A#else\x0Avec3 eP=vec3(eT);\x0A#endif\x0A#ifdef SHADOW_COUNT\x0Ahc*=hf;fK*=he;dQ*=eS;\x0A#endif\x0As.eP=eP*dM+s.eP;s.fK=fK*dM+s.fK;s.fJ=hc*dM+s.fJ;s.fI=dQ*dM+s.fI;}void dT(out vec3 dn,out vec3 diff_extra,inout de s,vec3 T,vec3 N,float V){s.eP*=uFresnelIntegral;float el=dot(T,N);vec2 eV=ek(vec2(el,el),s.fO.xy);s.eP=s.dm*eV.x+(s.eP*eV.y);s.eP*=s.fN;float eW=saturate(1.0+-uFresnelGlossMask*V);s.eP*=eW*eW;s.fJ=s.fJ*ef(s.fH)+s.di;s.fK=s.fK*uTransIntegral+s.fL;s.fK*=s.fP;dn=mix(s.fI,s.fJ,s.fR);diff_extra=(s.eP+s.fK)*s.fR;}\x0A#endif\x0A",
    "matstrips.glsl": "\x0A#ifdef STRIPVIEW\x0Auniform float uStrips[5];uniform vec2 uStripRes;struct Y{float hi[5];float bg;};void dc(out Y hj,inout float V,inout vec3 U){highp vec2 fd=gl_FragCoord.xy*uStripRes-vec2(1.0,1.0);fd.x+=0.25*fd.y;hj.hi[0]=step(fd.x,uStrips[0]);hj.hi[1]=step(fd.x,uStrips[1]);hj.hi[2]=step(fd.x,uStrips[2]);hj.hi[3]=step(fd.x,uStrips[3]);hj.hi[4]=step(fd.x,uStrips[4]);hj.bg=1.0-hj.hi[4];hj.hi[4]-=hj.hi[3];hj.hi[3]-=hj.hi[2];hj.hi[2]-=hj.hi[1];hj.hi[1]-=hj.hi[0];bool hk=hj.hi[4]>0.0;V=hk?0.5:V;U=hk?vec3(0.1):U;}vec3 dX(Y hj,vec3 N,vec3 K,vec3 U,float V,vec3 dn,vec3 dA,vec3 hl){return hj.hi[0]*(N*0.5+vec3(0.5))+hj.hi[1]*K+hj.hi[2]*U+vec3(hj.hi[3]*V)+hj.hi[4]*(vec3(0.12)+0.3*dn+dA)+hj.bg*hl;}\x0A#endif\x0A",
    "matvert.glsl": "precision highp float;uniform float isPoints;varying float isPoints2;uniform mat4 uModelViewProjectionMatrix;uniform mat4 uSkyMatrix; attribute float vAlpha; varying float alpha;attribute vec3 vPosition;attribute vec2 vTexCoord;attribute vec2 vTangent;attribute vec2 vBitangent;attribute vec2 vNormal;varying vec3 point;\x0A#ifdef VERTEX_COLOR\x0Aattribute vec4 vColor;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0Aattribute vec2 vTexCoord2;\x0A#endif\x0Avarying highp vec3 D;varying mediump vec2 j;varying mediump vec3 E;varying mediump vec3 F;varying mediump vec3 G;\x0A#ifdef VERTEX_COLOR\x0Avarying lowp vec4 H;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0Avarying mediump vec2 I;\x0A#endif\x0Avec3 hm(vec2 hn){bool ho=(hn.y>(32767.1/65535.0));hn.y=ho?(hn.y-(32768.0/65535.0)):hn.y;vec3 r;r.xy=(2.0*65535.0/32767.0)*hn-vec2(1.0);r.z=sqrt(clamp(1.0-dot(r.xy,r.xy),0.0,1.0));r.z=ho?-r.z:r.z;return r;}vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}vec3 hu(mat4 o,vec3 hn){return o[0].xyz*hn.x+o[1].xyz*hn.y+o[2].xyz*hn.z;}\x0A void main(void){gl_Position=m(uModelViewProjectionMatrix,vPosition.xyz); gl_PointSize = 4.0; alpha = vAlpha; isPoints2 = isPoints;point=gl_Position.xyz;  if(isPoints < 0.5){ j=vTexCoord;E=hu(uSkyMatrix,hm(vTangent));F=hu(uSkyMatrix,hm(vBitangent));G=hu(uSkyMatrix,hm(vNormal));D=m(uSkyMatrix,vPosition.xyz).xyz;\x0A#ifdef VERTEX_COLOR\x0AH=vColor;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0AI=vTexCoord2;\x0A#endif\x0A }}",
    "matfrag.glsl": "\x0A#extension GL_OES_standard_derivatives : enable\x0Aprecision mediump float; varying float isPoints2; varying vec3 point; varying float alpha; varying highp vec3 D;varying mediump vec2 j;varying mediump vec3 E;varying mediump vec3 F;varying mediump vec3 G;\x0A#ifdef VERTEX_COLOR\x0Avarying lowp vec4 H;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0Avarying mediump vec2 I;\x0A#endif\x0Auniform sampler2D tAlbedo;uniform sampler2D tReflectivity;uniform sampler2D tNormal;uniform sampler2D tExtrasSkin; uniform sampler2D tExtrasEmi;uniform sampler2D tExtrasAO;uniform sampler2D tExtras;uniform sampler2D tSkySpecular;uniform float uModelBright;uniform vec4 rect; uniform float uAlbedoStrength; uniform float unlitDiffuse;uniform float uReflecStrength; uniform float uAlphaStrength; uniform float uNormalStrength; uniform float uGlossStrength; uniform float uAOStrength;uniform vec4 uDiffuseCoefficients[9];uniform vec3 uCameraPosition;uniform vec3 uFresnel;uniform float uAlphaTest;uniform float uHorizonOcclude;uniform float uHorizonSmoothing;\x0A#ifdef EMISSIVE\x0Auniform float uEmissiveScale;uniform vec4 uTexRangeEmissive;\x0A#endif\x0A#ifdef AMBIENT_OCCLUSION\x0Auniform vec4 uTexRangeAO;\x0A#endif\x0A#ifdef LIGHT_COUNT\x0Auniform vec4 uLightPositions[LIGHT_COUNT];uniform vec3 uLightDirections[LIGHT_COUNT];uniform vec3 uLightColors[LIGHT_COUNT];uniform vec3 uLightParams[LIGHT_COUNT];uniform vec3 uLightSpot[LIGHT_COUNT];\x0A#endif\x0A#ifdef ANISO\x0Auniform float uAnisoStrength;uniform vec3 uAnisoTangent;uniform float uAnisoIntegral;uniform vec4 uTexRangeAniso; \x0A#endif\x0A#define saturate(x) clamp( x, 0.0, 1.0 )\x0A#include <matsampling.glsl>\x0A#include <matlighting.glsl>\x0A#include <matshadows.glsl>\x0A#include <matskin.glsl>\x0A#include <matmicrofiber.glsl>\x0A#include <matstrips.glsl>\x0A#ifdef TRANSPARENCY_DITHER\x0A#include <matdither.glsl>\x0A#endif\x0A bool inRect(vec3 point,vec4 rect){return(point.x>rect.x*(point.z+0.6))&&(point.x<rect.z*(point.z+0.6))&&(point.y>rect.y*(point.z+0.6))&&(point.y<rect.w*(point.z+0.6));} void main(void){if(alpha<0.999){discard;}else{ if(isPoints2>0.9){   bool inrect = inRect(point,rect); if(inrect){gl_FragColor = vec4(1.0,0.0,0.0,0.8);} else discard;}  else{vec4 J=texture2D(tAlbedo,j); J.xyz = (uAlbedoStrength/100.0)*J.xyz; J.w *= (uAlphaStrength/100.0); vec3 K=L(J.xyz); float k=J.w;\x0A#ifdef VERTEX_COLOR\x0A{vec3 M=H.xyz;\x0A#ifdef VERTEX_COLOR_SRGB\x0AM=M*(M*(M*0.305306011+vec3(0.682171111))+vec3(0.012522878));\x0A#endif\x0AK*=M;\x0A#ifdef VERTEX_COLOR_ALPHA\x0Ak*=H.w;\x0A#endif\x0A}\x0A#endif\x0A#ifdef ALPHA_TEST\x0Aif(k<uAlphaTest){discard;}\x0A#endif\x0A#ifdef TRANSPARENCY_DITHER\x0Ak=(k>l(j.x))?1.0:k;\x0A#endif\x0A vec3 N0 = texture2D(tNormal,j).xyz; vec3 N=On(texture2D(tNormal,j).xyz,uNormalStrength/100.0); \x0A#ifdef ANISO\x0A#ifdef ANISO_NO_DIR_TEX\x0Avec3 P=Q(uAnisoTangent);\x0A#else\x0AJ=R(j,uTexRangeAniso,tExtras);vec3 P=2.0*J.xyz-vec3(1.0);P=Q(P);\x0A#endif\x0AP=P-N*dot(P,N);P=normalize(P);vec3 S=P*uAnisoStrength;\x0A#endif\x0Avec3 T=normalize(uCameraPosition-D);J=texture2D(tReflectivity,j); J.xyz = (uReflecStrength/100.0)*J.xyz;  J.w *= (uGlossStrength/100.0); vec3 U=L(J.xyz);float V=J.w;float W=V;\x0A#ifdef HORIZON_SMOOTHING\x0Afloat X=dot(T,N);X=uHorizonSmoothing-X*uHorizonSmoothing;V=mix(V,1.0,X*X);\x0A#endif\x0A#ifdef STRIPVIEW\x0AY Z;dc(Z,V,U);\x0A#endif\x0Afloat dd=1.0;\x0A#ifdef AMBIENT_OCCLUSION\x0A#ifdef AMBIENT_OCCLUSION_SECONDARY_UV\x0Add=R(I,uTexRangeAO,tExtrasAO).x;\x0A#else\x0Add=R(j,uTexRangeAO,tExtrasAO).x;\x0A#endif\x0Add*=dd; dd = 1.0 - ((1.0-dd) * uAOStrength/100.0); \x0A#endif\x0A#if defined(SKIN)\x0Ade df;dh(df);df.di*=dd;\x0A#elif defined(MICROFIBER)\x0Adj dk;dl(dk,N);dk.dm*=dd;\x0A#else\x0Avec3 dn=du(N);dn*=dd;\x0A#endif\x0Avec3 dv=reflect(-T,N);\x0A#ifdef ANISO\x0Avec3 rt=dv-(0.5*S*dot(dv,P));vec3 dA=dB(rt,mix(V,0.5*V,uAnisoStrength));\x0A#else\x0Avec3 dA=dB(dv,V);\x0A#endif\x0AdA*=dC(dv,G);  \x0A#ifdef LIGHT_COUNT\x0Ahighp float dD=10.0/log2(V*0.968+0.03);dD*=dD;float dE=dD*(1.0/(8.0*3.1415926))+(4.0/(8.0*3.1415926));dE=min(dE,1.0e3);\x0A#ifdef SHADOW_COUNT\x0AdF dG;dH(dG,SHADOW_KERNEL);\x0A#ifdef SKIN\x0AdF dI;dH(dI,SHADOW_KERNEL+SHADOW_KERNEL*df.dJ);\x0A#endif\x0A#endif\x0A#ifdef ANISO\x0AdE*=uAnisoIntegral;\x0A#endif\x0Afor(int u=0;u<LIGHT_COUNT;++u){vec3 dK=uLightPositions[u].xyz-D*uLightPositions[u].w;float dL=inversesqrt(dot(dK,dK));dK*=dL;float a=saturate(uLightParams[u].z/dL);a=1.0+a*(uLightParams[u].x+uLightParams[u].y*a);float s=saturate(dot(dK,uLightDirections[u]));s=saturate(uLightSpot[u].y-uLightSpot[u].z*(1.0-s*s));vec3 dM=(a*s)*uLightColors[u].xyz;\x0A#if defined(SKIN)\x0A#ifdef SHADOW_COUNT\x0AdN(df,dG.dO[u],dI.dO[u],dK,N,dM);\x0A#else\x0AdN(df,1.0,1.0,dK,N,dM);\x0A#endif\x0A#elif defined(MICROFIBER)\x0A#ifdef SHADOW_COUNT\x0AdP(dk,dG.dO[u],dK,N,dM);\x0A#else\x0AdP(dk,1.0,dK,N,dM);\x0A#endif\x0A#else\x0Afloat dQ=saturate((1.0/3.1415926)*dot(dK,N));\x0A#ifdef SHADOW_COUNT\x0AdQ*=dG.dO[u];\x0A#endif\x0Adn+=dQ*dM;\x0A#endif\x0Avec3 dR=dK+T;\x0A#ifdef ANISO\x0AdR=dR-(S*dot(dR,P));\x0A#endif\x0AdR=normalize(dR);float dS=dE*pow(saturate(dot(dR,N)),dD);\x0A#ifdef SHADOW_COUNT\x0AdS*=dG.dO[u];\x0A#endif\x0AdA+=dS*dM;}\x0A#endif\x0A#if defined(SKIN)\x0Avec3 dn,diff_extra;dT(dn,diff_extra,df,T,N,V);\x0A#elif defined(MICROFIBER)\x0Avec3 dn,diff_extra;dU(dn,diff_extra,dk,T,N,V);\x0A#endif\x0AdA*=dV(T,N,U,V*V);\x0A  if(unlitDiffuse == 1.0){gl_FragColor.xyz=K+dA;}else{gl_FragColor.xyz=dn*K+dA;}\x0A#if defined(SKIN) || defined(MICROFIBER)\x0Agl_FragColor.xyz+=diff_extra;\x0A#endif\x0A#ifdef EMISSIVE\x0A#ifdef EMISSIVE_SECONDARY_UV\x0Avec2 dW=I;\x0A#else\x0Avec2 dW=j;\x0A#endif\x0Agl_FragColor.xyz+=uEmissiveScale*L(R(dW,uTexRangeEmissive,tExtrasEmi).xyz);\x0A#endif\x0A#ifdef STRIPVIEW\x0Agl_FragColor.xyz=dX(Z,N,K,U,W,dn,dA,gl_FragColor.xyz);\x0A#endif\x0A#ifdef NOBLEND\x0Agl_FragColor.w=1.0;\x0A#else\x0Agl_FragColor.w=k;\x0A#endif\x0A gl_FragColor.xyz*=uModelBright; }}}",
    "postfrag.glsl": "precision mediump float;uniform sampler2D tInput;\x0A#ifdef BLOOM\x0Auniform sampler2D tBloom;\x0A#endif\x0A#ifdef GRAIN\x0Auniform sampler2D tGrain;\x0A#endif\x0A#ifdef COLOR_LUT\x0Auniform sampler2D tLUT;\x0A#endif\x0Auniform vec3 uScale;uniform vec3 uBias;uniform vec3 uSaturation;uniform vec4 uSharpenKernel;uniform vec3 uSharpness;uniform vec3 uBloomColor;uniform vec4 uVignetteAspect;uniform vec4 uVignette;uniform vec4 uGrainCoord;uniform vec2 uGrainScaleBias;varying vec2 d;vec3 hv(vec3 c){vec3 hA=sqrt(c);return(hA-hA*c)+c*(0.4672*c+vec3(0.5328));}void main(void){vec4 hB=texture2D(tInput,d);vec3 c=hB.xyz;\x0A#ifdef SHARPEN\x0Avec3 fA=texture2D(tInput,d+uSharpenKernel.xy).xyz;fA+=texture2D(tInput,d-uSharpenKernel.xy).xyz;fA+=texture2D(tInput,d+uSharpenKernel.zw).xyz;fA+=texture2D(tInput,d-uSharpenKernel.zw).xyz;vec3 hC=uSharpness.x*c-uSharpness.y*fA;c+=clamp(hC,-uSharpness.z,uSharpness.z);\x0A#endif\x0A#ifdef BLOOM\x0Ac+=uBloomColor*texture2D(tBloom,d).xyz;\x0A#endif\x0A#ifdef VIGNETTE\x0Avec2 hD=d*uVignetteAspect.xy-uVignetteAspect.zw;vec3 hn=clamp(vec3(1.0,1.0,1.0)-uVignette.xyz*dot(hD,hD),0.0,1.0);vec3 hE=hn*hn;hE*=hn;hE*=hn;hE*=hn;c*=mix(hn,hE,uVignette.w);\x0A#endif\x0A#ifdef SATURATION\x0Afloat gray=dot(c,vec3(0.3,0.59,0.11));c=mix(vec3(gray,gray,gray),c,uSaturation);\x0A#endif\x0A#ifdef CONTRAST\x0Ac=c*uScale+uBias;\x0A#endif\x0A#ifdef GRAIN\x0Afloat hF=uGrainScaleBias.x*texture2D(tGrain,d*uGrainCoord.xy+uGrainCoord.zw).x+uGrainScaleBias.y;c+=c*hF;\x0A#endif\x0A#ifdef REINHARD\x0A{c*=1.8;float hG=dot(c,vec3(0.3333));c=clamp(c/(1.0+hG),0.0,1.0);}\x0A#elif defined(HEJL)\x0A{const highp float hH=0.22,hI=0.3,hJ=.1,hK=0.2,hL=.01,hM=0.3;const highp float hN=1.25;highp vec3 dR=max(vec3(0.0),c-vec3(.004));c=(dR*((hN*hH)*dR+hN*vec3(hJ*hI,hJ*hI,hJ*hI))+hN*vec3(hK*hL,hK*hL,hK*hL))/(dR*(hH*dR+vec3(hI,hI,hI))+vec3(hK*hM,hK*hM,hK*hM))-hN*vec3(hL/hM,hL/hM,hL/hM);}\x0A#endif\x0A#ifdef COLOR_LUT\x0Ac=clamp(c,0.0,1.0);c=(255.0/256.0)*c+vec3(0.5/256.0);c.x=texture2D(tLUT,c.xx).x;c.y=texture2D(tLUT,c.yy).y;c.z=texture2D(tLUT,c.zz).z;c*=c;\x0A#endif\x0Agl_FragColor.xyz=hv(c);gl_FragColor.w=hB.w;}",
    "postvert.glsl": "precision highp float;attribute vec2 vCoord;varying vec2 d;void main(void){d=vCoord;gl_Position.xy=2.0*vCoord-vec2(1.0,1.0);gl_Position.zw=vec2(0.0,1.0);}",
    "shadowfrag.glsl": "precision highp float;varying vec2 hO;\x0A#ifdef ALPHA_TEST\x0Avarying mediump vec2 j;uniform sampler2D tAlbedo;\x0A#endif\x0Avec3 hP(float hn){vec4 hQ=vec4(1.0,255.0,65025.0,16581375.0)*hn;hQ=fract(hQ);hQ.xyz-=hQ.yzw*(1.0/255.0);return hQ.xyz;}void main(void){\x0A#ifdef ALPHA_TEST\x0Afloat k=texture2D(tAlbedo,j).a;if(k<0.5){discard;}\x0A#endif\x0Agl_FragColor.xyz=hP((hO.x/hO.y)*0.5+0.5);gl_FragColor.w=0.0;}",
    "shadowvert.glsl": "precision highp float;attribute vec3 vPosition;attribute vec2 vTexCoord;uniform mat4 uViewProjection;varying vec2 hO;\x0A#ifdef ALPHA_TEST\x0Avarying mediump vec2 j;\x0A#endif\x0Avec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(void){gl_Position=m(uViewProjection,vPosition);hO=gl_Position.zw;\x0A#ifdef ALPHA_TEST\x0Aj=vTexCoord;\x0A#endif\x0A}",
    "sky.glsl": "precision highp float;uniform sampler2D tSkyTexture;uniform float uAlpha;varying vec2 j;void main(void){vec3 r=texture2D(tSkyTexture,j).xyz;gl_FragColor.xyz=r*r;gl_FragColor.w=uAlpha;}",
    "skySH.glsl": "precision mediump float;uniform vec4 uSkyCoefficients[9];uniform float uAlpha;varying vec3 hR;void main(void){vec3 C=normalize(hR);vec3 r=uSkyCoefficients[0].xyz;r+=uSkyCoefficients[1].xyz*C.y;r+=uSkyCoefficients[2].xyz*C.z;r+=uSkyCoefficients[3].xyz*C.x;vec3 swz=C.yyz*C.xzx;r+=uSkyCoefficients[4].xyz*swz.x;r+=uSkyCoefficients[5].xyz*swz.y;r+=uSkyCoefficients[7].xyz*swz.z;vec3 sqr=C*C;r+=uSkyCoefficients[6].xyz*(3.0*sqr.z-1.0);r+=uSkyCoefficients[8].xyz*(sqr.x-sqr.y);gl_FragColor.xyz=r;gl_FragColor.w=uAlpha;}",
    "skyvert.glsl": "precision highp float;uniform mat4 uInverseSkyMatrix;uniform mat4 uViewProjection;attribute vec3 vPosition;attribute vec2 vTexCoord;\x0A#if SKYMODE == 3\x0Avarying vec3 hR;\x0A#else\x0Avarying vec2 j;\x0A#endif\x0Avec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}vec4 hu(mat4 o,vec3 hn){return o[0]*hn.x+o[1]*hn.y+o[2]*hn.z;}void main(void){vec3 p=m(uInverseSkyMatrix,vPosition).xyz;gl_Position=hu(uViewProjection,p);gl_Position.z-=(1.0/65535.0)*gl_Position.w;\x0A#if SKYMODE == 3\x0AhR=vPosition;hR.xy+=1e-20*vTexCoord;\x0A#else\x0Aj=vTexCoord;\x0A#endif\x0A}",
    "wirefrag.glsl": "precision highp float;uniform vec4 uStripParams;void main(void){vec2 c=gl_FragCoord.xy*uStripParams.xy-vec2(1.0,1.0);c.x+=0.25*c.y;float a=c.x<uStripParams.z?0.0:0.9;a=c.x<uStripParams.w?a:0.0;gl_FragColor=vec4(0.0,0.0,0.0,a);}",
    "wirevert.glsl": "precision highp float;uniform mat4 uModelViewProjectionMatrix;attribute vec3 vPosition;vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(void){gl_Position=m(uModelViewProjectionMatrix,vPosition);gl_Position.z+=-0.00005*gl_Position.w;}",
    "outlinevert.glsl": "precision highp float;attribute vec3 vPosition;attribute vec2 vNormal;\x0Auniform mat4 uModelViewProjectionMatrix;\x0A uniform float offset;\x0Avec4 m(mat4 o,vec3 p){\x0A\x09return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));\x0A}\x0A vec3 hm(vec2 hn){bool ho=(hn.y>(32767.1/65535.0));hn.y=ho?(hn.y-(32768.0/65535.0)):hn.y;vec3 r;r.xy=(2.0*65535.0/32767.0)*hn-vec2(1.0);r.z=sqrt(clamp(1.0-dot(r.xy,r.xy),0.0,1.0));r.z=ho?-r.z:r.z;return r;}\x0Avoid main(void){\x0A  vec3 position=vPosition+hm(vNormal)*offset;\x0A gl_Position=m(uModelViewProjectionMatrix,position.xyz);}",
    "outlinefrag.glsl": "\x0A#extension GL_OES_standard_derivatives : enable \x0Aprecision mediump float;\x0Auniform float alpha;uniform vec3 color;\x0A\x0Avoid main(void){\x0A\x09gl_FragColor = vec4(color,alpha);\x0A}",
    "highlightvert.glsl": "precision highp float;attribute vec3 vPosition;attribute vec2 vNormal;\x0Auniform mat4 uModelViewProjectionMatrix;\x0A uniform float offset;\x0Avec4 m(mat4 o,vec3 p){\x0A\x09return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));\x0A}\x0A vec3 hm(vec2 hn){bool ho=(hn.y>(32767.1/65535.0));hn.y=ho?(hn.y-(32768.0/65535.0)):hn.y;vec3 r;r.xy=(2.0*65535.0/32767.0)*hn-vec2(1.0);r.z=sqrt(clamp(1.0-dot(r.xy,r.xy),0.0,1.0));r.z=ho?-r.z:r.z;return r;}\x0Avoid main(void){\x0A  vec3 position=vPosition+hm(vNormal)*offset;\x0A gl_Position=m(uModelViewProjectionMatrix,position.xyz);}",
    "highlightfrag.glsl": "\x0A#extension GL_OES_standard_derivatives : enable \x0Aprecision mediump float;\x0Auniform float alpha;\x0A\x0Avoid main(void){\x0A\x09gl_FragColor = vec4(1.0, 0.0, 0.5, alpha);\x0A}",
    "standardvert.glsl": "precision highp float;attribute vec3 pos;uniform mat4 uModelViewProjectionMatrix;vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(){gl_Position=m(uModelViewProjectionMatrix,pos.xyz);\x0A}",
    "standardfrag.glsl": "precision highp float;uniform vec4 uColor;void main(){gl_FragColor=uColor;}",
    nil: ""
  }
})()