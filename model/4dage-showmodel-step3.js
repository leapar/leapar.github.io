var dom, webview, Clamp, codeToCh, fdage;
(function anonymous(
  /*``*/
) {
  function _$af5398992(elem, className) {
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

  function _$af5398993(elem, className) {
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

  function _$af5398994(elem, className) {
    return new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)").test(elem.className) || false
  }

  function _$af5398995(id, elem) {
    elem = elem || document;
    var result = elem.getElementById && elem.getElementById(id);
    return result || document.getElementById(id)
  }

  function _$af5398996(name, elem) {
    elem = elem || document;
    return elem.getElementsByTagName(name)
  }

  function _$af5398997(name, elem) {
    elem = elem || document;
    return elem.getElementsByClassName(name)
  }

  function _$af5398998(v, b) {
    if (v == void(0)) {
      return b
    } else {
      return v
    }
  }

  function _$af5398999(o) {
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

  function _$af5399000(value, min, max) {
    if (min === void(0)) {
      min = 0
    };
    if (max === void(0)) {
      max = 1
    };
    return Math.min(max, Math.max(min, value))
  }

  function _$af5399001(code) {
    return unescape(code)
  }

  function _$af5399002(fdage) {
    "use strict";

    function Archive(a) {
      this.files = [];
      for (a = new ByteStream(a); !a.empty();) {
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
    Archive.prototype.get = function(a) {
      return this.files[a]
    };
    Archive.prototype.extract = function(a) {
      var b = this.files[a];
      delete this.files[a];
      return b
    };
    Archive.prototype.checkSignature = function(a) {
      if (!a) {
        return !1
      };
      var b = this.get(a.name + ".sig");
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
      a = new BigInt;
      a.setBytes([0, 233, 33, 170, 116, 86, 29, 195, 228, 46, 189, 3, 185, 31, 245, 19, 159, 105, 73, 190, 158, 80, 175, 38, 210, 116, 221, 229, 171, 134, 104, 144, 140, 5, 99, 255, 208, 78, 248, 215, 172, 44, 79, 83, 5, 244, 152, 19, 92, 137, 112, 10, 101, 142, 209, 100, 244, 92, 190, 125, 28, 0, 185, 54, 143, 247, 49, 37, 15, 254, 142, 180, 185, 232, 50, 219, 11, 186, 106, 116, 78, 212, 10, 105, 53, 26, 14, 181, 80, 47, 87, 213, 182, 19, 126, 151, 86, 109, 182, 224, 37, 135, 80, 59, 22, 93, 125, 68, 214, 106, 209, 152, 235, 157, 249, 245, 48, 76, 203, 0, 0, 95, 200, 246, 243, 229, 85, 79, 169], !0);
      d = new BigInt;
      d.setBytes(b[0]);
      return d.powmod(65537, a).toInt32() != c ? !1 : !0
    };
    Archive.prototype.decompress = function(a, b) {
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
    };

    function BigInt(a) {
      this.digits = new Uint16Array(a || 0)
    }
    BigInt.prototype.setBytes = function(a, b) {
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
    };
    BigInt.prototype.toInt32 = function() {
      var a = 0;
      0 < this.digits.length && (a = this.digits[0], 1 < this.digits.length && (a |= this.digits[1] << 16));
      return a
    };
    BigInt.prototype.lessThan = function(a) {
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
    };
    BigInt.prototype.shiftRight = function() {
      for (var a = 0, b = this.digits, c = b.length - 1; 0 <= c; --c) {
        var d = b[c];
        b[c] = d >> 1 | a << 15;
        a = d
      };
      this.trim()
    };
    BigInt.prototype.shiftLeft = function(a) {
      if (0 < a) {
        var b = a / 16 | 0;
        a %= 16;
        for (var c = 16 - a, d = this.digits.length + b + 1, e = new BigInt(d), f = 0; f < d; ++f) {
          e.digits[f] = ((f < b || f >= this.digits.length + b ? 0 : this.digits[f - b]) << a | (f < b + 1 ? 0 : this.digits[f - b - 1]) >>> c) & 65535
        };
        e.trim();
        return e
      };
      return new BigInt(this)
    };
    BigInt.prototype.bitCount = function() {
      var a = 0;
      if (0 < this.digits.length) {
        for (var a = 16 * (this.digits.length - 1), b = this.digits[this.digits.length - 1]; b;) {
          b >>>= 1, ++a
        }
      };
      return a
    };
    BigInt.prototype.sub = function(a) {
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
    };
    BigInt.prototype.mul = function(a) {
      for (var b = new BigInt(this.digits.length + a.digits.length), c = b.digits, d = 0; d < this.digits.length; ++d) {
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
    };
    BigInt.prototype.mod = function(a) {
      if (0 >= this.digits.length || 0 >= a.digits.length) {
        return new BigInt(0)
      };
      var b = new BigInt(this.digits);
      if (!this.lessThan(a)) {
        for (var c = new BigInt(a.digits), c = c.shiftLeft(b.bitCount() - c.bitCount()); !b.lessThan(a);) {
          c.lessThan(b) && b.sub(c), c.shiftRight()
        };
        b.trim()
      };
      return b
    };
    BigInt.prototype.powmod = function(a, b) {
      for (var c = new BigInt([1]), d = this.mod(b); a;) {
        a & 1 && (c = c.mul(d).mod(b)), a >>>= 1, d = d.mul(d).mod(b)
      };
      return c
    };
    BigInt.prototype.trim = function() {
      for (var a = this.digits.length; 0 < a && 0 == this.digits[a - 1];) {
        --a
      };
      a != this.digits.length && (this.digits = this.digits.subarray(0, a))
    };

    function Bounds(a) {
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

    function ByteStream(a) {
      this.bytes = new Uint8Array(a)
    }
    ByteStream.prototype.empty = function() {
      return 0 >= this.bytes.length
    };
    ByteStream.prototype.readCString = function() {
      for (var a = this.bytes, b = a.length, c = 0; c < b; ++c) {
        if (0 == a[c]) {
          return a = String.fromCharCode.apply(null, this.bytes.subarray(0, c)), this.bytes = this.bytes.subarray(c + 1), a
        }
      };
      return null
    };
    ByteStream.prototype.asString = function() {
      for (var a = "", b = 0; b < this.bytes.length; ++b) {
        a += String.fromCharCode(this.bytes[b])
      };
      return a
    };
    ByteStream.prototype.readBytes = function(a) {
      var b = this.bytes.subarray(0, a);
      this.bytes = this.bytes.subarray(a);
      return b
    };
    ByteStream.prototype.readUint32 = function() {
      var a = this.bytes,
        b = a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24;
      this.bytes = a.subarray(4);
      return b
    };
    var prepareEmbedParams = function(a) {
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
      },
      embed = function(a, b) {
        var c;
        b = prepareEmbedParams(b);
        if (b.pagePreset) {
          c = new WebViewer(b.width, b.height, a);
          document.body.style.backgroundColor = "#d7e4da";
          var d = document.createElement("div");
          d.style.position = "relative";
          d.style.backgroundColor = "#e4e7e4";
          d.style.width = b.width + 12 + "px";
          d.style.height = b.height + 6 + 16 + "px";
          d.style.margin = "auto";
          d.style.boxShadow = "3px 5px 12px 0px grey";
          document.body.appendChild(d);
          var e = document.createElement("div");
          e.style.position = "relative";
          e.style.left = "6px";
          e.style.top = "6px";
          d.appendChild(e);
          e.appendChild(c.domRoot);
          if (!c.mobile) {
            d.style.resize = "both";
            d.style.overflow = "hidden";
            var f = [d.style.width, d.style.height],
              g = function() {
                if (FullScreen.active()) {
                  d.style.resize = "none"
                } else {
                  if (d.style.resize = "both", f[0] != d.style.width || f[1] != d.style.height) {
                    f[0] = d.style.width, f[1] = d.style.height, c.resize(d.clientWidth - 12, d.clientHeight - 6 - 16)
                  }
                };
                window.setTimeout(g, 100)
              };
            g()
          }
        } else {
          c = new WebViewer(b.fullFrame ? window.innerWidth : b.width, b.fullFrame ? window.innerHeight : b.height, a), webview = c
        };
        document.body.appendChild(c.domRoot), b.fullFrame && (c.domRoot.style.position = "absolute", c.domRoot.style.left = c.domRoot.style.top = 0, window.addEventListener("resize", function(e) {
          if (this.mobile) {
            setTimeout(function() {
              FullScreen.active() || c.resize(window.innerWidth, window.innerHeight)
            }, 100)
          } else {
            FullScreen.active() || c.resize(window.innerWidth, window.innerHeight)
          }
        }.bind(c)));
        c.ui.setThumbnailURL(b.thumbnailURL);
        b.autoStart && c.loadScene();
        return c
      },
      fetchThumbnail = function(a, b, c, d) {
        var e = -1 == a.indexOf("?") ? "?" : "&";
        Network.fetchBinaryIncremental(a + e + "thumb=1", function(a) {
          (a = (new Archive(a)).extract("thumbnail.jpg")) ? TextureCache.parseFile(a, b, d): c && c();
          return 0
        }, c, 49152)
      },
      fdage = "undefined" == typeof fdage ? {} : fdage;
    fdage.embed = embed;
    fdage.fetchThumbnail = fetchThumbnail;

    function Framebuffer(a, b) {
      this.gl = a;
      this.fbo = a.createFramebuffer();
      a.bindFramebuffer(a.FRAMEBUFFER, this.fbo);
      b && (this.width = b.width, this.height = b.height, b.color0 && (this.color0 = b.color0, a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.color0.id, 0), this.width = b.color0.desc.width, this.height = b.color0.desc.height), b.depth ? (this.depth = b.depth, a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, this.depth.id, 0)) : (this.depthBuffer = b.depthBuffer, b.createDepth && !this.depthBuffer && (this.depthBuffer = Framebuffer.createDepthBuffer(a, this.width, this.height)), this.depthBuffer && (a.bindRenderbuffer(a.RENDERBUFFER, this.depthBuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, this.depthBuffer), a.bindRenderbuffer(a.RENDERBUFFER, null))));
      this.valid = b && b.ignoreStatus || a.checkFramebufferStatus(a.FRAMEBUFFER) == a.FRAMEBUFFER_COMPLETE;
      a.bindFramebuffer(a.FRAMEBUFFER, null)
    }
    Framebuffer.createDepthBuffer = function(a, b, c) {
      var d = a.createRenderbuffer();
      a.bindRenderbuffer(a.RENDERBUFFER, d);
      a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, b, c);
      a.bindRenderbuffer(a.RENDERBUFFER, null);
      return d
    };
    Framebuffer.prototype.bind = function() {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
      this.gl.viewport(0, 0, this.width, this.height)
    };
    Framebuffer.bindNone = function(a) {
      a.bindFramebuffer(a.FRAMEBUFFER, null)
    };
    var FullScreen = {
      support: function() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
      },
      begin: function(a, b) {
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
      },
      end: function() {
        var a = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
        a && a.bind(document)()
      },
      active: function() {
        return !!(document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreenElement || document.msFullscreenElement)
      }
    };

    function Input(a) {
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
    Input.prototype.attach = function(a) {
      this.element = a;
      var b = function(a) {
        for (var b = 0; b < this.onAnything.length; ++b) {
          this.onAnything[b]()
        };
        a.preventDefault()
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
            d.pressed = !0;
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
                this.onDoubleTap[g](f, e)
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
          if (f.pressed) {
            fdage.tranFuncs.camera = [];
            var g = this.element.getBoundingClientRect(),
              d = a.clientX - g.left,
              g = a.clientY - g.top,
              h = d - f.position[0],
              k = g - f.position[1];
            f.position[0] = d;
            f.position[1] = g;
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
                    this.onDrag[f](d, g, h, k)
                  }
                }
              }
            };
            d = !0
          }
        };
        d && b(a)
      }.bind(this);
      this.element.addEventListener("mousemove", a);
      a = function(a) {
        fdage.tranFuncs.camera = [];
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
                      this.onDoubleTap[e](d, h)
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
        for (var d = [], e = 0; e < a.touches.length; ++e) {
          a.touches[e].target === this.element && d.push(a.touches[e])
        };
        var f = this.element.getBoundingClientRect();
        fdage.tranFuncs.camera = [];
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
    };

    function Lights(a, b) {
      this.rotation = this.shadowCount = this.count = 0;
      this.positions = [];
      this.directions = [];
      this.matrixWeights = [];
      this.matrix = Matrix.identity();
      this.invMatrix = Matrix.identity();
      for (var c in a) {
        this[c] = a[c]
      };
      if (a && !a.on) {
        this.count = this.positions.length / 4
      };
      this.positions = new Float32Array(this.positions);
      this.positionBuffer = new Float32Array(this.positions);
      this.directions = new Float32Array(this.directions);
      this.directionBuffer = new Float32Array(this.directions);
      this.modelViewBuffer = new Float32Array(16 * this.shadowCount);
      this.projectionBuffer = new Float32Array(16 * this.shadowCount);
      this.finalTransformBuffer = new Float32Array(16 * this.shadowCount);
      this.shadowTexelPadProjections = new Float32Array(4 * this.shadowCount);
      this.shadowsNeedUpdate = new Uint8Array(this.shadowCount);
      for (var d = 0; d < this.shadowsNeedUpdate.length; ++d) {
        this.shadowsNeedUpdate[d] = 1
      };
      Matrix.rotation(this.matrix, this.rotation, 1);
      Matrix.transpose(this.invMatrix, this.matrix)
    }
    Lights.prototype.getLightPos = function(a) {
      return this.positionBuffer.subarray(4 * a, 4 * a + 4)
    };
    Lights.prototype.getLightDir = function(a) {
      return this.directionBuffer.subarray(3 * a, 3 * a + 3)
    };
    Lights.prototype.update = function(a, b) {
      var c = new Matrix.type(this.matrix);
      Matrix.rotation(this.matrix, this.rotation, 1);
      Matrix.transpose(this.invMatrix, this.matrix);
      for (var d = 0; d < this.count; ++d) {
        var e = this.positions.subarray(4 * d, 4 * d + 4),
          f = this.directions.subarray(3 * d, 3 * d + 3),
          g = this.getLightPos(d),
          h = this.getLightDir(d);
        1 == this.matrixWeights[d] ? (g[0] = e[0], g[1] = e[1], g[2] = e[2], g[3] = e[3], h[0] = f[0], h[1] = f[1], h[2] = f[2]) : 2 == this.matrixWeights[d] ? (Matrix.mul4(g, a.transform, e[0], e[1], e[2], e[3]), Matrix.mulVec(h, a.transform, f[0], f[1], f[2]), Matrix.mul4(g, this.matrix, g[0], g[1], g[2], g[3]), Matrix.mulVec(h, this.matrix, h[0], h[1], h[2])) : (Matrix.mul4(g, this.matrix, e[0], e[1], e[2], e[3]), Matrix.mulVec(h, this.matrix, f[0], f[1], f[2]));
        Vect.normalize(h, h)
      };
      var rM = Matrix.transpose(Matrix.empty(), a.modelMatrix);
      Matrix.mul(this.matrix, this.matrix, rM);
      for (var f = new Float32Array(this.finalTransformBuffer), g = Matrix.empty(), h = Matrix.empty(), k = Matrix.empty(), l = Vect.empty(), m = Vect.empty(), n = Vect.empty(), r = Vect.empty(), e = Vect.empty(), p = [], q = [], u = Matrix.create(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), d = 0; d < this.count; ++d) {
        l = this.getLightPos(d);
        m = this.getLightDir(d);
        0.99 < Math.abs(m[1]) ? Vect.set(n, 1, 0, 0) : Vect.set(n, 0, 1, 0);
        Vect.cross(r, n, m);
        Vect.normalize(r, r);
        Vect.cross(n, m, r);
        Vect.normalize(n, n);
        Matrix.set(g, r[0], r[1], r[2], -Vect.dot(r, l), n[0], n[1], n[2], -Vect.dot(n, l), m[0], m[1], m[2], -Vect.dot(m, l), 0, 0, 0, 1);
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
    };

    function Material(a, b, c) {
      this.gl = a;
      this.name = c.name;
      var d = {
        mipmap: !0,
        aniso: a.hints.mobile ? 0 : 4
      };
      this.cullBackFaces = c.cullBackFaces;
      this.textures = {
        albedo: a.textureCache.fromFilesMergeAlpha(b.get(c.albedoTex), b.get(c.alphaTex), {
          mipmap: !0,
          aniso: a.hints.mobile ? 2 : 4
        }),
        reflectivity: a.textureCache.fromFilesMergeAlpha(b.get(c.reflectivityTex), b.get(c.glossTex), d),
        normal: a.textureCache.fromFile(b.get(c.normalTex), d),
        extras: a.textureCache.fromFilesMergeAlpha(b.get(c.extrasTex), b.get(c.extrasTexA), d),
        extrasAO: a.textureCache.fromFilesMergeAlpha(b.get(c.extrasAOTex), b.get(c.extrasAOTexA), d),
        extrasSkin: a.textureCache.fromFilesMergeAlpha(b.get(c.extrasSkinTex), b.get(c.extrasSkinTexA), d),
        extrasEmi: a.textureCache.fromFilesMergeAlpha(b.get(c.extrasEmiTex), b.get(c.extrasEmiTexA), d)
      };
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
      this.extrasTexCoordRanges = {};
      if (c.extrasTexCoordRanges) {
        for (var e in c.extrasTexCoordRanges) {
          this.extrasTexCoordRanges[e] = new Float32Array(dom.objToArray(c.extrasTexCoordRanges[e].scaleBias))
        }
      };
      this.textures.extras || (b = new Texture(a, {
        width: 1,
        height: 1
      }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extras = b);
      this.textures.extrasAO || (b = new Texture(a, {
        width: 1,
        height: 1
      }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extrasAO = b);
      this.textures.extrasSkin || (b = new Texture(a, {
        width: 1,
        height: 1
      }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extrasSkin = b);
      this.textures.extrasEmi || (b = new Texture(a, {
        width: 1,
        height: 1
      }), b.loadArray(new Uint8Array([255, 255, 255, 255])), this.textures.extrasEmi = b);
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
      this.alphaTest = c.alphaTest || 0;
      this.usesBlending = this.blend !== b.none;
      this.shadowAlphaTest = this.alphaTest;
      0 >= this.shadowAlphaTest && this.blend === b.alpha && (this.shadowAlphaTest = 0.5);
      this.castShadows = this.blend !== b.add;
      this.horizonOcclude = c.horizonOcclude || 0;
      this.fresnel = new Float32Array(c.fresnel ? c.fresnel : [1, 1, 1]);
      this.emissiveIntensity = c.emissiveIntensity || 1;
      d = [];
      0 < c.lightCount && d.push("#define LIGHT_COUNT " + c.lightCount);
      0 < c.shadowCount && d.push("#define SHADOW_COUNT " + Math.min(c.lightCount, c.shadowCount));
      0 < c.alphaTest && d.push("#define ALPHA_TEST");
      if (this.blend !== b.alpha) {
        this.blend === b.none && d.push("#define NOBLEND")
      };
      a.hints.mobile && d.push("#define MOBILE");
      this.outline = c.outline;
      this.outlineColor = c.outlineColor || [0, 0, 0];
      this.outlineWidth = dom.ifVoid(c.outlineWidth, 0.015);
      if (c.useSkin) {
        d.push("#define SKIN");
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
        this.skinParams.fresnelIntegral = 1 / 3.14159 * (1 - 0.5 * this.skinParams.fresnelColor[3]);
        this.skinParams.transIntegral = 1 / 3.14159 * (1 - 0.5 * this.skinParams.transColor[3]);
        this.skinParams.transSky *= 1.25;
        this.skinParams.transIntegral *= 1.25;
        this.extrasTexCoordRanges.subdermisTex || d.push("#define SKIN_NO_SUBDERMIS_TEX");
        this.extrasTexCoordRanges.translucencyTex || d.push("#define SKIN_NO_TRANSLUCENCY_TEX");
        this.extrasTexCoordRanges.fuzzTex || d.push("#define SKIN_NO_FUZZ_TEX")
      };
      c.aniso && (d.push("#define ANISO"), this.anisoParams = c.anisoParams || {
        strength: 1,
        tangent: [1, 0, 0],
        integral: 0.5
      }, this.extrasTexCoordRanges.anisoTex || d.push("#define ANISO_NO_DIR_TEX"));
      c.microfiber && (d.push("#define MICROFIBER"), this.microfiberParams = c.microfiberParams || {
        fresnelColor: [0.2, 0.2, 0.2, 0.5],
        fresnelOcc: 1,
        fresnelGlossMask: 1
      }, this.microfiberParams.fresnelIntegral = 1 / 3.14159 * (1 - 0.5 * this.microfiberParams.fresnelColor[3]), this.extrasTexCoordRanges.fuzzTex || d.push("#define MICROFIBER_NO_FUZZ_TEX"));
      c.vertexColor && (d.push("#define VERTEX_COLOR"), c.vertexColorsRGB && d.push("#define VERTEX_COLOR_SRGB"), c.vertexColorAlpha && d.push("#define VERTEX_COLOR_ALPHA"));
      this.horizonSmoothing = c.horizonSmoothing || 0;
      0 < this.horizonSmoothing && d.push("#define HORIZON_SMOOTHING");
      c.unlitDiffuse && d.push("#define DIFFUSE_UNLIT");
      var o;
      this.extrasTexCoordRanges.emissiveTex && (d.push("#define EMISSIVE"), c.emissiveSecondaryUV && (d.push("#define EMISSIVE_SECONDARY_UV"), o = !0));
      this.extrasTexCoordRanges.aoTex && (d.push("#define AMBIENT_OCCLUSION"), c.aoSecondaryUV && (d.push("#define AMBIENT_OCCLUSION_SECONDARY_UV"), o = !0));
      c.tangentOrthogonalize && d.push("#define TSPACE_ORTHOGONALIZE");
      c.tangentNormalize && d.push("#define TSPACE_RENORMALIZE");
      c.tangentGenerateBitangent && d.push("#define TSPACE_COMPUTE_BITANGENT");
      o && e.push("#define TEXCOORD_SECONDARY");
      this.shader = a.shaderCache.fromURLs("matvert.glsl", "matfrag.glsl", d);
      this.blend === b.alpha && (this.prepassShader = a.shaderCache.fromURLs("alphaprepassvert.glsl", "alphaprepassfrag.glsl"));
      this.outlineShader = a.shaderCache.fromURLs("outlinevert.glsl", "outlinefrag.glsl")
    }
    Material.prototype.bind = function(a) {
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
      m.uniform1f(n.uAlbedoStrength, this.strength.albedo);
      m.uniform1f(n.uReflecStrength, this.strength.reflectivity);
      m.uniform1f(n.uNormalStrength, this.strength.normal);
      m.uniform1f(n.uAlphaStrength, this.strength.alpha);
      m.uniform1f(n.uGlossStrength, this.strength.gloss);
      m.uniform1f(n.uAOStrength, this.strength.extrasAO);
      m.uniform1f(n.uModelBright, d.modelBright);
      b.viewProjectionMatrix2 = Matrix.mul(Matrix.empty(), b.projectionMatrix, b.viewMatrix2);
      m.uniformMatrix4fv(n.uModelViewProjectionMatrix, !1, b.viewProjectionMatrix2);
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
      r.albedo.bind(p.tAlbedo);
      r.reflectivity.bind(p.tReflectivity);
      r.normal.bind(p.tNormal);
      r.extras.bind(p.tExtras);
      r.extrasSkin.bind(p.tExtrasSkin);
      r.extrasAO.bind(p.tExtrasAO);
      r.extrasEmi.bind(p.tExtrasEmi);
      d.specularTexture.bind(p.tSkySpecular);
      return !0
    };
    Material.prototype.bindAlphaPrepass = function(a) {
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
    };
    Material.prototype.complete = function() {
      return this.shader.complete() && (!this.prepassShader || this.prepassShader.complete()) && this.textures.albedo.complete() && this.textures.reflectivity.complete() && this.textures.normal.complete()
    };
    var Matrix = {
      type: Float32Array,
      create: function(a, b, c, d, e, f, g, h, k, l, m, n, r, p, q, u) {
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
      },
      empty: function() {
        return new Matrix.type(16)
      },
      identity: function() {
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
      },
      set: function(a, b, c, d, e, f, g, h, k, l, m, n, r, p, q, u, s) {
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
      },
      translation: function(a, b, c, d) {
        Matrix.set(a, 1, 0, 0, b, 0, 1, 0, c, 0, 0, 1, d, 0, 0, 0, 1);
        return a
      },
      rotation: function(a, b, c) {
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
      },
      mul: function(a, b, c) {
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
      },
      invert: function(a, b) {
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
      },
      transpose: function(a, b) {
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
      },
      mul4: function(a, b, c, d, e, f) {
        a[0] = b[0] * c + b[4] * d + b[8] * e + b[12] * f;
        a[1] = b[1] * c + b[5] * d + b[9] * e + b[13] * f;
        a[2] = b[2] * c + b[6] * d + b[10] * e + b[14] * f;
        a[3] = b[3] * c + b[7] * d + b[11] * e + b[15] * f;
        return a
      },
      mulPoint: function(a, b, c, d, e) {
        a[0] = b[0] * c + b[4] * d + b[8] * e + b[12];
        a[1] = b[1] * c + b[5] * d + b[9] * e + b[13];
        a[2] = b[2] * c + b[6] * d + b[10] * e + b[14];
        return a
      },
      mulVec: function(a, b, c, d, e) {
        a[0] = b[0] * c + b[4] * d + b[8] * e;
        a[1] = b[1] * c + b[5] * d + b[9] * e;
        a[2] = b[2] * c + b[6] * d + b[10] * e;
        return a
      },
      perspective: function(a, b, c, d, e, f) {
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
      },
      perspectiveInfinite: function(a, b, c, d, e) {
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
      },
      ortho: function(a, b, c, d, e, f, g, h) {
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
      },
      lookAt: function(a, b, c, d) {
        var e = a.subarray(0, 3),
          f = a.subarray(4, 7),
          g = a.subarray(8, 11);
        Vect.sub(g, b, c);
        Vect.cross(e, d, g);
        Vect.normalize(g, g);
        Vect.normalize(e, e);
        Vect.cross(f, g, e);
        Matrix.set(a, e[0], e[1], e[2], -Vect.dot(e, b), f[0], f[1], f[2], -Vect.dot(f, b), g[0], g[1], g[2], -Vect.dot(g, b), 0, 0, 0, 1)
      },
      copy: function(a, b) {
        for (var c = 0; 16 > c; ++c) {
          a[c] = b[c]
        }
      },
      copyToBuffer: function(a, b, c) {
        for (var d = 0; 16 > d; ++d) {
          a[b + d] = c[d]
        }
      }
    };

    function byteToFloat(array) {
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

    function Mesh(a, b, c) {
      this.gl = a;
      this.desc = b;
      this.stride = 32;
      if (this.vertexColor = b.vertexColor) {
        this.stride += 4
      };
      c = new ByteStream(c.data);
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
      a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
      a.bindBuffer(a.ARRAY_BUFFER, null);
      this.vertexUint8 = c;
      this.posArray = [];
      for (var i = 0; i < c.length; i += this.stride) {
        this.posArray.push(byteToFloat([c[i], c[i + 1], c[i + 2], c[i + 3]]));
        this.posArray.push(byteToFloat([c[i + 4], c[i + 5], c[i + 6], c[i + 7]]));
        this.posArray.push(byteToFloat([c[i + 8], c[i + 9], c[i + 10], c[i + 11]]))
      };
      this.bounds = void(0) === b.minBound || void(0) === b.maxBound ? {
        min: Vect.create(-10, -10, -10, 1),
        max: Vect.create(10, 10, -0, 1)
      } : {
        min: Vect.create(b.minBound[0], b.minBound[1], b.minBound[2], 1),
        max: Vect.create(b.maxBound[0], b.maxBound[1], b.maxBound[2], 1)
      };
      this.bounds.maxExtent = Math.max(Math.max(b.maxBound[0] - b.minBound[0], b.maxBound[1] - b.minBound[1]), b.maxBound[2] - b.minBound[2])
    }

    function MeshRenderable(a, b, c) {
      this.mesh = a;
      this.gl = this.mesh.gl;
      this.indexOffset = b.firstIndex * a.indexTypeSize;
      this.indexCount = b.indexCount;
      this.wireIndexOffset = b.firstWireIndex * a.indexTypeSize;
      this.wireIndexCount = b.wireIndexCount;
      this.material = c;
      this.boundingSphere = this.computeBoundingSphere(b)
    }
    MeshRenderable.prototype.computeBoundingSphere = function(b) {
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
          if (iArray.length > 3000) {
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
    };
    MeshRenderable.prototype.draw = function(a) {
      var b = this.gl;
      if (this.material.bind(a)) {
        a = this.material.shader.attribs;
        var c = this.mesh.stride;
        (this.material.cullBackFaces) ? (b.enable(b.CULL_FACE), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
        b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
        b.enableVertexAttribArray(a.vPosition);
        b.enableVertexAttribArray(a.vTexCoord);
        b.enableVertexAttribArray(a.vTangent);
        b.enableVertexAttribArray(a.vBitangent);
        b.enableVertexAttribArray(a.vNormal);
        var d = this.mesh.vertexColor && void(0) !== a.vColor;
        d && b.enableVertexAttribArray(a.vColor);
        var e = 0;
        b.vertexAttribPointer(a.vPosition, 3, b.FLOAT, !1, c, e);
        e += 12;
        b.vertexAttribPointer(a.vTexCoord, 2, b.FLOAT, !1, c, e);
        e += 8;
        b.vertexAttribPointer(a.vTangent, 2, b.UNSIGNED_SHORT, !0, c, e);
        e += 4;
        b.vertexAttribPointer(a.vBitangent, 2, b.UNSIGNED_SHORT, !0, c, e);
        e += 4;
        b.vertexAttribPointer(a.vNormal, 2, b.UNSIGNED_SHORT, !0, c, e);
        d && b.vertexAttribPointer(a.vColor, 4, b.UNSIGNED_BYTE, !0, c, e + 4);
        b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
        b.disableVertexAttribArray(a.vPosition);
        b.disableVertexAttribArray(a.vTexCoord);
        b.disableVertexAttribArray(a.vTangent);
        b.disableVertexAttribArray(a.vBitangent);
        b.disableVertexAttribArray(a.vNormal);
        d && b.disableVertexAttribArray(a.vColor)
      }
    };
    MeshRenderable.prototype.drawShadow = function(a) {
      var b = this.gl;
      (this.material.cullBackFaces) ? (b.enable(b.CULL_FACE), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
      b.bindBuffer(b.ARRAY_BUFFER, this.mesh.vertexBuffer);
      b.enableVertexAttribArray(a);
      b.vertexAttribPointer(a, 3, b.FLOAT, !1, this.mesh.stride, 0);
      b.drawElements(b.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
      b.disableVertexAttribArray(a)
    };
    MeshRenderable.prototype.drawOutline = function(a) {
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
        b.disableVertexAttribArray(a.vNormal);
        b.disable(b.CULL_FACE)
      }
    };
    MeshRenderable.prototype.drawAlphaShadow = function(a, b) {
      var c = this.gl;
      (this.material.cullBackFaces) ? (c.enable(c.CULL_FACE), c.cullFace(c.BACK)) : c.disable(c.CULL_FACE);
      c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
      c.bindBuffer(c.ARRAY_BUFFER, this.mesh.vertexBuffer);
      c.enableVertexAttribArray(a);
      c.enableVertexAttribArray(b);
      c.vertexAttribPointer(a, 3, c.FLOAT, !1, this.mesh.stride, 0);
      c.vertexAttribPointer(b, 2, c.FLOAT, !1, this.mesh.stride, 12);
      c.drawElements(c.TRIANGLES, this.indexCount, this.mesh.indexType, this.indexOffset);
      c.disableVertexAttribArray(a);
      c.disableVertexAttribArray(b)
    };
    MeshRenderable.prototype.drawAlphaPrepass = function(a) {
      var b = this.gl;
      if (this.material.bindAlphaPrepass(a)) {
        a = this.material.prepassShader.attribs;
        var c = this.mesh.stride;
        (this.material.cullBackFaces) ? (b.enable(b.CULL_FACE), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
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
    };
    MeshRenderable.prototype.complete = function() {
      return this.material.complete()
    };
    var Network = {
      fetchImage: function(a, b, c) {
        var d = new Image;
        d.onload = function() {
          0 < d.width && 0 < d.height ? b(d) : c && c()
        };
        c && (req.onerror = function() {
          c()
        });
        d.src = a
      },
      fetchText: function(a, b, c, d) {
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
      },
      fetchBinary: function(a, b, c, d) {
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
          d(a.loaded, a.total)
        });
        e.send()
      },
      fetchBinaryIncremental: function(a, b, c, d) {
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
    };

    function PostRender(a, b, c) {
      this.gl = a;
      this.desc = b;
      b = [];
      0 != this.desc.sharpen && b.push("#define SHARPEN");
      (this.useBloom = 0 < this.desc.bloomColor[0] * this.desc.bloomColor[3] || 0 < this.desc.bloomColor[1] * this.desc.bloomColor[3] || 0 < this.desc.bloomColor[2] * this.desc.bloomColor[3]) && b.push("#define BLOOM");
      0 != this.desc.vignette[3] && b.push("#define VIGNETTE");
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
          }, this.bloomTextures[c] = new Texture(a, b), this.bloomTextures[c].loadArray(null, a.RGBA, a.ext.textureHalf && a.ext.textureHalfLinear ? a.ext.textureHalf.HALF_FLOAT_OES : a.UNSIGNED_BYTE), this.bloomTargets[c] = new Framebuffer(a, {
            width: b.width,
            height: b.height,
            color0: this.bloomTextures[c]
          })
        };
        for (this.bloomSamples = 64; this.bloomSamples + 16 >= a.limits.fragmentUniforms;) {
          this.bloomSamples /= 2
        };
        this.bloomShader = a.shaderCache.fromURLs("postvert.glsl", "bloom.glsl", ["#define BLOOM_SAMPLES " + this.bloomSamples])
      };
      a = new Uint8Array(16384);
      for (c = 0; 16384 > c; c++) {
        b = 255 * Math.random();
        var d = 255 * Math.random();
        a[c] = 0.5 * (b + d)
      };
      this.noiseTexture = new Texture(this.gl, {
        width: 128,
        height: 128
      });
      this.noiseTexture.loadArray(a, this.gl.LUMINANCE);
      this.desc.colorLUT && (a = this.desc.colorLUT, this.colorLUT = new Texture(this.gl, {
        width: a.length / 3 | 0,
        height: 1,
        clamp: !0
      }), this.colorLUT.loadArray(new Uint8Array(a), this.gl.RGB));
      this.blackTexture = new Texture(this.gl, {
        width: 1,
        height: 1
      });
      this.blackTexture.loadArray(new Uint8Array([0, 0, 0, 0]));
      this.bloomResult = this.blackTexture
    }
    PostRender.prototype.prepareBloom = function(a) {
      if (this.useBloom && this.bloomShader.bind()) {
        var b = [];
        this.bloomTargets[0].bind();
        a.bind(this.bloomShader.samplers.tInput);
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
    };
    PostRender.prototype.computeParams = function(a, b) {
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
      d.vignetteAspect = [a / e, b / e, 0.5 * a / e, 0.5 * b / e];
      d.vignette = [2 * (1 - c.vignette[0]) * c.vignette[3], 2 * (1 - c.vignette[1]) * c.vignette[3], 2 * (1 - c.vignette[2]) * c.vignette[3], c.vignetteCurve];
      var e = 1 / this.noiseTexture.desc.width,
        f = 1 / this.noiseTexture.desc.height,
        g = 1 - c.grainSharpness;
      d.grainCoord = [e * a, f * b, 0.5 * g * e, 0.5 * g * f];
      d.grainScaleBias = [2 * c.grain, -c.grain];
      return d
    };
    PostRender.prototype.present = function(a, b, c, d) {
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
          Framebuffer.bindNone(d);
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
          Framebuffer.bindNone(d), d.viewport(0, 0, b, c), this.fillScreen(e.attribs.vCoord)
        }
      }
    };
    PostRender.prototype.allocAABuffers = function(a, b) {
      if (void(0) === this.sampleTextures || this.sampleTextures[0].desc.width != a || this.sampleTextures[0].desc.height != b) {
        this.sampleTextures = [];
        this.sampleFramebuffers = [];
        for (var c = 0; c < this.sampleCount; ++c) {
          var d = new Texture(this.gl, {
            width: a,
            height: b,
            nofilter: !0
          });
          d.loadArray();
          this.sampleTextures.push(d);
          this.sampleFramebuffers.push(new Framebuffer(this.gl, {
            width: a,
            height: b,
            color0: d,
            ignoreStatus: !0
          }))
        };
        this.discardAAHistory()
      }
    };
    PostRender.prototype.adjustProjectionForSupersampling = function(a) {
      if (1 < this.sampleCount) {
        var b = this.sampleOffsets[this.sampleIndex][0] / a.size[0],
          c = this.sampleOffsets[this.sampleIndex][1] / a.size[1],
          b = Matrix.translation(Matrix.empty(), b, c, 0);
        Matrix.mul(a.projectionMatrix, b, a.projectionMatrix)
      }
    };
    PostRender.prototype.discardAAHistory = function() {
      for (var a = this.sampleIndex = 0; a < this.samplesValid.length; ++a) {
        this.samplesValid[a] = 0
      }
    };
    PostRender.prototype.fillScreen = function(a) {
      var b = this.gl;
      b.bindBuffer(b.ARRAY_BUFFER, this.fullscreenTriangle);
      b.enableVertexAttribArray(a);
      b.vertexAttribPointer(a, 2, b.FLOAT, !1, 0, 0);
      b.drawArrays(b.TRIANGLES, 0, 3);
      b.disableVertexAttribArray(a);
      b.bindBuffer(b.ARRAY_BUFFER, null)
    };

    function Scene(a) {
      this.gl = a;
      this.name = "untitled";
      this.meshes = [];
      this.meshRenderables = [];
      this.materials = {};
      this.nextView = this.sky = this.view = null;
      this.viewFade = 0;
      this.shadow = this.stripData = this.lights = null
    }
    Scene.prototype.checkFailure = function(data) {
      var failure = "";
      if (!data.meshes.length) {
        failure += "mesh\u6570\u91cf\u4e3a0 "
      };
      if (!data.materials.length) {
        failure += "materials\u6570\u91cf\u4e3a0 "
      };
      return failure
    };
    Scene.prototype.load = function(a) {
      var b = this.gl,
        c;
      c = a.extract("scene.json");
      if (void(0) !== c) {
        c = (new ByteStream(c.data)).asString();
        if (null == c || 0 >= c.length) {
          return !1
        };
        c = JSON.parse(c)
      } else {
        return !1
      };
      c.sky.backgroundColor = dom.objToArray(c.sky.backgroundColor);
      c.sky.diffuseCoefficients = dom.objToArray(c.sky.diffuseCoefficients);
      var failure = this.checkFailure(c);
      this.metaData = c.metaData;
      this.view = new View(c.mainCamera.view);
      this.sky = new Sky(this.gl, a, c.sky);
      this.lights = new Lights(c.lights, this.view);
      this.materials = {};
      for (var d in c.materials) {
        var e = c.materials[d];
        e.lightCount = this.lights.count;
        e.shadowCount = this.lights.shadowCount;
        this.materials[e.name] = new Material(this.gl, a, e)
      };
      if (c.meshes) {
        for (e = 0; e < c.meshes.length; ++e) {
          d = c.meshes[e];
          d = new Mesh(this.gl, d, a.extract(d.file));
          this.meshes.push(d);
          for (var f = 0; f < d.desc.subMeshes.length; ++f) {
            var g = d.desc.subMeshes[f];
            if (this.materials[g.material].cullBackFaces === void(0)) {
              this.materials[g.material].cullBackFaces = d.desc.cullBackFaces
            };
            this.meshRenderables.push(new MeshRenderable(d, g, this.materials[g.material]))
          }
        }
      };
      this.bounds = new Bounds(this.meshes);
      this.postRender = new PostRender(this.gl, c.mainCamera.post, !0);
      this.shadow = new ShadowCollector(b, this.lights.shadowCount);
      if (failure != "") {
        return {
          failure: "," + failure
        }
      };
      return !0
    };
    Scene.prototype.update = function() {
      this.lights.update(this.view, this.bounds)
    };
    Scene.prototype.collectShadows = function(a) {
      this.shadow.collect(this, a)
    };
    Scene.prototype.draw = function() {
      var a = this.gl;
      this.sky.setClearColor();
      a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT | a.STENCIL_BUFFER_BIT);
      a.enable(a.DEPTH_TEST);
      this.sky.draw(this);
      for (var b = 0; b < this.meshRenderables.length; ++b) {
        this.meshRenderables[b].material.usesBlending || this.meshRenderables[b].draw(this)
      };
      for (var b = 0; b < this.meshRenderables.length; ++b) {
        this.meshRenderables[b].material.outline && this.meshRenderables[b].drawOutline(this)
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
      a.depthMask(!0);
      a.depthFunc(a.LESS);
      a.depthMask(!0);
      a.disable(a.BLEND)
    };
    Scene.prototype.complete = function() {
      if (!this.sky.complete() || !this.shadow.complete()) {
        return !1
      };
      for (var a = 0; a < this.meshRenderables.length; ++a) {
        if (!this.meshRenderables[a].complete()) {
          return !1
        }
      };
      return !0
    };

    function Shader(a) {
      this.gl = a;
      this.program = null;
      this.params = {};
      this.samplers = {};
      this.attribs = {}
    }
    Shader.prototype.build = function(a, b) {
      var c = this.gl;
      this.program = c.createProgram();
      this.params = {};
      this.samplers = {};
      this.attribs = {};
      var d = function(a) {
          for (var b = "", c = a.indexOf("\x0A"), d = 0; - 1 != c;) {
            d++, b += d + ": ", b += a.substring(0, c + 1), a = a.substring(c + 1, a.length), c = a.indexOf("\x0A")
          };
          console.log(b)
        },
        e = c.createShader(c.VERTEX_SHADER);
      c.shaderSource(e, a);
      c.compileShader(e);
      c.getShaderParameter(e, c.COMPILE_STATUS) || (console.log(c.getShaderInfoLog(e)), fdage.verboseErrors && d(a));
      c.attachShader(this.program, e);
      e = c.createShader(c.FRAGMENT_SHADER);
      c.shaderSource(e, b);
      c.compileShader(e);
      c.getShaderParameter(e, c.COMPILE_STATUS) || (console.log(c.getShaderInfoLog(e)), fdage.verboseErrors && d(b));
      c.attachShader(this.program, e);
      c.linkProgram(this.program);
      c.getProgramParameter(this.program, c.LINK_STATUS) || console.log(c.getProgramInfoLog(this.program));
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
    };
    Shader.prototype.bind = function() {
      return this.program ? (this.gl.useProgram(this.program), !0) : !1
    };
    Shader.prototype.complete = function() {
      return !!this.program
    };

    function ShaderCache(a) {
      this.gl = a;
      this.cache = []
    }
    ShaderCache.prototype.fromURLs = function(a, b, c) {
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
      var f = new Shader(this.gl),
        g = null,
        h = null,
        k = function() {
          null != g && null != h && f.build(g, h)
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
    };
    ShaderCache.prototype.fetch = function(a, b) {
      "undefined" != typeof ShaderTable ? void(0) !== ShaderTable[a] ? this.resolveIncludes(new String(ShaderTable[a]), b) : b("") : Network.fetchText("src/shader/" + a, function(a) {
        this.resolveIncludes(a, b)
      }.bind(this), function() {
        b("")
      })
    };
    ShaderCache.prototype.resolveIncludes = function(a, b) {
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
    };

    function ShadowCollector(a, b) {
      this.gl = a;
      this.shadowCount = b;
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
            depthBuffer: Framebuffer.createDepthBuffer(a, c.width, c.height)
          }, e = a.RGB, f = a.UNSIGNED_BYTE, g = 0; g < this.shadowCount; ++g) {
          this.depthTextures[g] = new Texture(a, c), this.depthTextures[g].loadArray(null, e, f), d.color0 = this.depthTextures[g], this.depthTargets[g] = new Framebuffer(a, d)
        }
      }
    }
    ShadowCollector.prototype.bindDepthTexture = function(a, b) {
      this.shadowCount > b && this.depthTextures[b].bind(a)
    };
    ShadowCollector.prototype.collect = function(a, b) {
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
    };
    ShadowCollector.prototype.complete = function() {
      return this.shaderSolid.complete() && this.shaderAlphaTest.complete()
    };

    function Sky(a, b, c) {
      this.gl = a;
      var d = b.extract("sky.dat") || b.extract("sky.png");
      if (void(0) !== d) {
        this.specularTexture = new Texture(a, {
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
      this.modelBright = dom.ifVoid(c.modelBright, 1);
      this.modelSkyRatio = dom.ifVoid(c.modelSkyRatio, 1);
      this.backgroundMode = c.backgroundMode || 0;
      this.backgroundBrightness = dom.ifVoid(c.backgroundBrightness, 1);
      this.backgroundColor = new Float32Array(c.backgroundColor);
      if (1 <= this.backgroundMode) {
        if (this.backgroundShader = a.shaderCache.fromURLs("skyvert.glsl", 3 == this.backgroundMode ? "skySH.glsl" : "sky.glsl", ["#define SKYMODE " + this.backgroundMode]), this.vertexBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), c = 1 / 256, b = 0.5 / 256, d = 2.8 * b, e = 0.5 * b, c = new Float32Array([0, 1, 0, 0.49609375 + c, 0.49609375 + c, 1, 0, 0, 0.9921875 + c, 0.49609375 + c, 0, 0, 1, 0.49609375 + c, 0.9921875 + c, -1, 0, 0, 0 + c, 0.49609375 + c, 0, 0, -1, 0.49609375 + c, 0 + c, 0, -1, 0, 0.9921875 + c, 0 + c, 0, -1, 0, 0.9921875 + c, 0.9921875 + c, 0, -1, 0, 0 + c, 0.9921875 + c, 0, -1, 0, 0 + c, 0 + c, d, 1 - d, -d, 0.5 + b, 0.5 - b, d, 1 - d, d, 0.5 + b, 0.5 + b, -d, 1 - d, d, 0.5 - b, 0.5 + b, -d, 1 - d, -d, 0.5 - b, 0.5 - b, -d, 0, -1 + d, 0.5 - b, 0 + c + b, d, 0, -1 + d, 0.5 + b, 0 + c + b, 1 - d, 0, -d, 0.9921875 + c - b, 0.5 - b, 1 - d, 0, d, 0.9921875 + c - b, 0.5 + b, d, 0, 1 - d, 0.5 + b, 0.9921875 + c - b, -d, 0, 1 - d, 0.5 - b, 0.9921875 + c - b, -1 + d, 0, d, 0 + c + b, 0.5 + b, -1 + d, 0, -d, 0 + c + b, 0.5 - b, 1, 0, 0, 0.9921875 + c - e, 0.49609375 + c, 0, 0, 1, 0.49609375 + c, 0.9921875 + c - e, -1, 0, 0, 0 + c + e, 0.49609375 + c, 0, 0, -1, 0.49609375 + c, 0 + c + e, 0, 1, 0, 0.49609375 + c - e, 0.49609375 + c, 0, 1, 0, 0.49609375 + c, 0.49609375 + c - e, 0, 1, 0, 0.49609375 + c + e, 0.49609375 + c, 0, 1, 0, 0.49609375 + c, 0.49609375 + c + e]), a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, null), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), c = new Uint16Array([2, 1, 6, 3, 2, 7, 8, 4, 3, 4, 5, 1, 9, 14, 15, 17, 10, 16, 18, 19, 11, 20, 13, 12, 28, 12, 13, 13, 24, 28, 28, 24, 9, 9, 24, 14, 25, 9, 15, 25, 15, 21, 10, 25, 21, 10, 21, 16, 22, 26, 10, 22, 10, 17, 18, 11, 26, 22, 18, 26, 19, 23, 27, 19, 27, 11, 23, 20, 27, 27, 20, 12]), this.skyIndexCount = c.length, a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null), 3 == this.backgroundMode) {
          for (this.backgroundCoefficients = new Float32Array(this.diffuseCoefficients), g = 0; g < this.backgroundCoefficients.length; ++g) {
            this.backgroundCoefficients[g] *= this.backgroundBrightness
          }
        } else {
          this.backgroundTexture = new Texture(a, {
            width: 256,
            height: 256,
            clamp: !0
          });
          c = !1;
          var k;
          a.ext.textureHalf && a.ext.textureHalfLinear && (this.backgroundTexture.loadArray(null, a.RGB, a.ext.textureHalf.HALF_FLOAT_OES), k = new Framebuffer(a, {
            color0: this.backgroundTexture
          }), c = k.valid);
          !c && a.ext.textureFloat && a.ext.textureFloatLinear && !a.hints.mobile && (this.backgroundTexture.loadArray(null, a.RGB, a.FLOAT), k = new Framebuffer(a, {
            color0: this.backgroundTexture
          }), c = k.valid);
          c || (this.backgroundTexture.loadArray(), k = new Framebuffer(a, {
            color0: this.backgroundTexture
          }));
          k.bind();
          k = new Shader(a);
          k.build("precision highp float; varying vec2 tc; attribute vec4 p; void main(){ gl_Position=p; tc=vec2(0.5,0.5/8.0)*p.xy+vec2(0.5,6.5/8.0); }", "precision highp float; varying vec2 tc; uniform sampler2D tex; uniform float b; void main(){vec4 s=texture2D(tex,tc); gl_FragColor.xyz=s.xyz*(b*s.w);}");
          k.bind();
          a.uniform1f(k.params.b, 7 * Math.sqrt(this.backgroundBrightness));
          this.specularTexture.bind(k.samplers.tex);
          c = a.createBuffer();
          a.bindBuffer(a.ARRAY_BUFFER, c);
          c = new Float32Array([-1, -1, 0.5, 1, 3, -1, 0.5, 1, -1, 3, 0.5, 1]);
          a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
          a.enableVertexAttribArray(k.attribs.p);
          a.vertexAttribPointer(k.attribs.p, 4, a.FLOAT, !1, 0, 0);
          a.drawArrays(a.TRIANGLES, 0, 3);
          a.disableVertexAttribArray(k.attribs.p)
        }
      }
    }
    Sky.prototype.setClearColor = function() {
      if (1 > this.backgroundMode) {
        var a = this.backgroundColor;
        this.gl.clearColor(a[0], a[1], a[2], 1)
      } else {
        this.gl.clearColor(0.0582, 0.06772, 0.07805, 1)
      }
    };
    Sky.prototype.draw = function(a) {
      if (1 > this.backgroundMode) {
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
    };
    Sky.prototype.complete = function() {
      return this.backgroundShader && !this.backgroundShader.complete() ? !1 : this.specularTexture.complete()
    };

    function Texture(a, b) {
      this.gl = a;
      this.type = a.TEXTURE_2D;
      this.id = null;
      b = b || {};
      this.desc = {
        width: b.width || 1,
        height: b.height || 1,
        mipmap: b.mipmap,
        clamp: b.clamp,
        aniso: b.aniso,
        nofilter: b.nofilter
      }
    }
    Texture.prototype.loadImage = function(a, b) {
      var c = this.gl;
      a && a.width && a.height && (this.desc.width = a.width, this.desc.height = a.height);
      this.id = c.createTexture();
      c.bindTexture(this.type, this.id);
      c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
      c.texImage2D(this.type, 0, b || c.RGBA, b || c.RGBA, c.UNSIGNED_BYTE, a);
      this.setParams();
      c.bindTexture(this.type, null)
    };
    Texture.prototype.loadArray = function(a, b, c) {
      var d = this.gl;
      this.id = d.createTexture();
      d.bindTexture(this.type, this.id);
      d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL, !0);
      d.texImage2D(this.type, 0, b || d.RGBA, this.desc.width, this.desc.height, 0, b || d.RGBA, c || d.UNSIGNED_BYTE, a || null);
      this.setParams();
      d.bindTexture(this.type, null)
    };
    Texture.prototype.setParams = function() {
      var a = this.gl,
        b = function(a) {
          return 0 < a && 0 == (a & a - 1)
        };
      b(this.desc.width) && b(this.desc.height) || (this.desc.clamp = !0, this.desc.mipmap = !1);
      b = !this.desc.nofilter;
      this.desc.mipmap ? (a.generateMipmap(this.type), a.texParameteri(this.type, a.TEXTURE_MIN_FILTER, b ? a.LINEAR_MIPMAP_LINEAR : a.NEAREST_MIPMAP_NEAREST)) : a.texParameteri(this.type, a.TEXTURE_MIN_FILTER, b ? a.LINEAR : a.NEAREST);
      a.texParameteri(this.type, a.TEXTURE_MAG_FILTER, b ? a.LINEAR : a.NEAREST);
      this.desc.clamp && (a.texParameteri(this.type, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(this.type, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE));
      this.desc.aniso && a.ext.textureAniso && a.texParameteri(this.type, a.ext.textureAniso.TEXTURE_MAX_ANISOTROPY_EXT, this.desc.aniso)
    };
    Texture.prototype.rebuildMips = function() {
      this.desc.mipmap && (this.gl.bindTexture(this.type, this.id), this.gl.generateMipmap(this.type))
    };
    Texture.prototype.bind = function(a) {
      if (a) {
        var b = this.gl;
        b.uniform1i(a.location, a.unit);
        b.activeTexture(b.TEXTURE0 + a.unit);
        b.bindTexture(this.type, this.id)
      }
    };
    Texture.prototype.destroy = function() {
      this.gl.deleteTexture(this.id);
      this.id = null
    };
    Texture.prototype.complete = function() {
      return !!this.id
    };

    function TextureCache(a) {
      this.gl = a;
      this.cache = []
    }
    TextureCache.prototype.fromURL = function(a, b) {
      var c = this.cache[a];
      if (void(0) !== c) {
        return c
      };
      var d = new Texture(this.gl, b);
      Network.fetchImage(a, function(a) {
        d.loadImage(a)
      });
      return this.cache[a] = d
    };
    TextureCache.prototype.fromFile = function(a, b) {
      if (!a) {
        return null
      };
      var c = this.cache[a.name];
      if (void(0) !== c) {
        return c
      };
      var d = new Texture(this.gl, b);
      this.cache[a.name] = d;
      TextureCache.parseFile(a, function(a) {
        d.loadImage(a)
      });
      return d
    };
    TextureCache.prototype.fromFilesMergeAlpha = function(a, b, c) {
      if (!b) {
        return this.fromFile(a, c)
      };
      var d = a.name + "|" + b.name,
        e = this.cache[d];
      if (void(0) !== e) {
        return e
      };
      var f = this.gl;
      this.mergeShader || (this.mergeShader = new Shader(this.gl), this.mergeShader.build("precision highp float; varying vec2 c; attribute vec2 pos; void main(){ gl_Position.xy = 2.0*pos-vec2(1.0); gl_Position.zw = vec2(0.5,1.0); c=pos; }", "precision highp float; varying vec2 c; uniform sampler2D tRGB,tA; void main(){ gl_FragColor.xyz=texture2D(tRGB,c).xyz; gl_FragColor.w=texture2D(tA,c).x; }"), this.mergeVerts = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, this.mergeVerts), e = new Float32Array([0, 0, 2, 0, 0, 2]), f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW), f.bindBuffer(f.ARRAY_BUFFER, null));
      var g = new Texture(this.gl, c);
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
              g.loadArray(null), (new Framebuffer(f, {
                color0: g,
                ignoreStatus: !0
              })).bind(), b = {
                clamp: !0
              }, a = new Texture(f, b), a.loadImage(h, f.RGB), b = new Texture(f, b), b.loadImage(k, f.RGB), l.bind(), a.bind(l.samplers.tRGB), b.bind(l.samplers.tA), f.bindBuffer(f.ARRAY_BUFFER, m), f.enableVertexAttribArray(l.attribs.pos), f.vertexAttribPointer(l.attribs.pos, 2, f.FLOAT, !1, 0, 0), f.drawArrays(f.TRIANGLES, 0, 3), f.disableVertexAttribArray(l.attribs.pos), f.bindBuffer(f.ARRAY_BUFFER, null), a.destroy(), b.destroy(), Framebuffer.bindNone(f), g.rebuildMips()
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
      TextureCache.parseFile(a, function(a) {
        h = a;
        n()
      });
      TextureCache.parseFile(b, function(a) {
        k = a;
        n()
      });
      return g
    };
    TextureCache.parseFile = function(a, b, c) {
      var d = c || new Image;
      if ("undefined" != typeof URL && "undefined" != typeof URL.createObjectURL) {
        a = new Blob([a.data], {
          type: a.type
        });
        var e = URL.createObjectURL(a);
        d.onload = function() {
          URL.revokeObjectURL(e);
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
    };
    var mulVector = function(v1, v2) {
      return v1[0] * v2[1] - v1[1] * v2[0]
    };
    var getLength = function(v) {
      return Math.sqrt(v[0] * v[0] + v[1] * v[1])
    };
    var isInTriangle = function(tri, x, y, cullBackFaces, minZ) {
      var AB = [tri[1][0] - tri[0][0], tri[1][1] - tri[0][1]];
      var AC = [tri[2][0] - tri[0][0], tri[2][1] - tri[0][1]];
      var AP = [x - tri[0][0], y - tri[0][1]];
      if (cullBackFaces && mulVector(AB, AC) < 0) {
        return false
      };
      var BC = [tri[2][0] - tri[1][0], tri[2][1] - tri[1][1]];
      var BA = [tri[0][0] - tri[1][0], tri[0][1] - tri[1][1]];
      var BP = [x - tri[1][0], y - tri[1][1]];
      var CA = [tri[0][0] - tri[2][0], tri[0][1] - tri[2][1]];
      var CB = [tri[1][0] - tri[2][0], tri[1][1] - tri[2][1]];
      var CP = [x - tri[2][0], y - tri[2][1]];
      if (!((mulVector(AB, AC) * mulVector(AB, AP) > 0) && (mulVector(BC, BA) * mulVector(BC, BP) > 0) && (mulVector(CA, CB) * mulVector(CA, CP) > 0))) {
        return false
      };
      var sPAB = Math.abs(mulVector(AP, BP));
      var sPBC = Math.abs(mulVector(BP, CP));
      var sPAC = Math.abs(mulVector(AP, CP));
      var s = sPAB + sPBC + sPAC;
      if (s > 1.5) {
        return false
      };
      var zA = sPBC / s * tri[0][2];
      var zB = sPAC / s * tri[1][2];
      var zC = sPAB / s * tri[2][2];
      var z = zA + zB + zC;
      if (z > minZ || z < -webview.scene.view.nearPlane) {
        return false
      } else {
        return z
      }
    };
    var getMaxScaleOnAxis = function(m) {
      var scaleXSq = m[0] * m[0] + m[4] * m[4] + m[8] * m[8];
      var scaleYSq = m[1] * m[1] + m[5] * m[5] + m[9] * m[9];
      var scaleZSq = m[2] * m[2] + m[6] * m[6] + m[10] * m[10];
      return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq))
    };
    var ifClickMesh = function(x, y) {
      var clicked = {
        z: Infinity,
        meshR: null,
        triangle: null
      };
      var ms = webview.scene.meshRenderables;
      var add = -webview.scene.view.projectionMatrix[14];
      for (var m = 0; m < ms.length; m++) {
        var tri = null;
        var z = Infinity;
        var p = ms[m].mesh.posArray;
        var ins = ms[m].mesh.indexArray;
        var indexStart = ms[m].indexOffset / ms[m].mesh.indexTypeSize;
        var center = [];
        var c = ms[m].boundingSphere.center;
        Matrix.mulPoint(center, webview.scene.view.viewProjectionMatrix2, c[0], c[1], c[2]);
        var a = getMaxScaleOnAxis(webview.scene.view.viewProjectionMatrix2);
        var radius = ms[m].boundingSphere.radius * a;
        if (center[2] - radius > clicked.z) {
          continue
        };
        if (center[2] + radius < -0.28) {
          continue
        };
        radius /= (center[2] + add);
        if (Math.pow(x - center[0] / (center[2] + add), 2) + Math.pow(y - center[1] / (center[2] + add), 2) > radius * radius) {
          continue
        };
        for (var d = indexStart; d < indexStart + ms[m].indexCount; d += 3) {
          var triangle = [];
          var triangle2 = [
            [],
            [],
            []
          ];
          triangle[0] = [p[ins[d] * 3], p[ins[d] * 3 + 1], p[ins[d] * 3 + 2]];
          triangle[1] = [p[ins[d + 1] * 3], p[ins[d + 1] * 3 + 1], p[ins[d + 1] * 3 + 2]];
          triangle[2] = [p[ins[d + 2] * 3], p[ins[d + 2] * 3 + 1], p[ins[d + 2] * 3 + 2]];
          Matrix.mulPoint(triangle2[0], webview.scene.view.viewProjectionMatrix2, triangle[0][0], triangle[0][1], triangle[0][2]);
          Matrix.mulPoint(triangle2[1], webview.scene.view.viewProjectionMatrix2, triangle[1][0], triangle[1][1], triangle[1][2]);
          Matrix.mulPoint(triangle2[2], webview.scene.view.viewProjectionMatrix2, triangle[2][0], triangle[2][1], triangle[2][2]);
          triangle2[0][0] /= (triangle2[0][2] + add);
          triangle2[0][1] /= (triangle2[0][2] + add);
          triangle2[1][0] /= (triangle2[1][2] + add);
          triangle2[1][1] /= (triangle2[1][2] + add);
          triangle2[2][0] /= (triangle2[2][2] + add);
          triangle2[2][1] /= (triangle2[2][2] + add);
          var zz = isInTriangle(triangle2, x, y, ms[m].material.cullBackFaces, z);
          if (zz != false) {
            if (zz < z) {
              z = zz;
              tri = triangle
            }
          }
        };
        if (z != Infinity) {
          if (z < clicked.z) {
            clicked.z = z;
            clicked.meshR = ms[m];
            clicked.triangle = tri
          }
        }
      };
      if (clicked.meshR != null) {
        return clicked
      } else {
        return false
      }
    };
    fdage.tranFuncs = {};
    var cameraMove = function(tri) {
      var aim = [];
      var view = webview.scene.view;
      var tranM = Matrix.identity();
      for (var i = 0; i < 3; i++) {
        aim[i] = (tri[0][i] + tri[1][i] + tri[2][i]) / 3
      };
      Matrix.invert(tranM, view.modelMatrix);
      Matrix.mulPoint(aim, tranM, aim[0], aim[1], aim[2]);
      var eye = [0, 0, 0];
      Matrix.translation(tranM, 0, 0, view.radius);
      var b = Matrix.rotation(Matrix.empty(), view.rotation[0], 0);
      var c = Matrix.rotation(Matrix.empty(), view.rotation[1], 1);
      Matrix.mul(b, c, b);
      Matrix.mul(tranM, b, tranM);
      var tranM2 = Matrix.identity();
      Matrix.translation(tranM2, view.pivot[0], view.pivot[1], view.pivot[2]);
      Matrix.mul(tranM, tranM2, tranM);
      Matrix.mulPoint(eye, tranM, eye[0], eye[1], eye[2]);
      var rot = [0, 0];
      var CA = [aim[0] - eye[0], aim[2] - eye[2]];
      var CB = [view.pivot[0] - eye[0], view.pivot[2] - eye[2]];
      var cos = (CA[0] * CB[0] + CA[1] * CB[1]) / (Math.sqrt(CA[0] * CA[0] + CA[1] * CA[1]) * Math.sqrt(CB[0] * CB[0] + CB[1] * CB[1]));
      cos = Clamp(cos, -1, 1);
      var a = Math.acos(cos) * 180 / Math.PI;
      var mul = mulVector(CA, CB);
      if (mul >= 0) {
        rot[1] = view.rotation[1] + a
      } else {
        rot[1] = view.rotation[1] - a
      };
      CA = [aim[0] - eye[0], aim[1] - eye[1], aim[2] - eye[2]];
      var sin = (eye[1] - aim[1]) / Math.sqrt(CA[0] * CA[0] + CA[1] * CA[1] + CA[2] * CA[2]);
      sin = Clamp(sin, -1, 1);
      a = Math.asin(Math.abs(sin)) * 180 / Math.PI;
      if (sin < 0) {
        rot[0] = a
      } else {
        rot[0] = -a
      };
      fdage.tranFuncs.camera = [];
      var update2 = function() {
        if (fdage.tranFuncs.camera.length == 0) {
          fdage.oldCameraUpdate = null;
          webview.updateView(true, true);
          return
        };
        tranUpdate(0.12, "camera");
        webview.updateView(true, true, 3);
        fdage.oldCameraUpdate = setTimeout(update2, 17)
      };
      var doneCount = 0;
      var shouldDone = 2;
      var done = function() {
        doneCount++;
        if (doneCount === shouldDone) {
          fdage.tranFuncs.camera = [];
          webview.updateView(true, true)
        }
      };
      start("camera", ep_lerp.array(view.pivot, aim), 5000, done, 0, easeFuc["easeOutQuart"]);
      start("camera", ep_lerp.array(view.rotation, rot), 5000, done, 0, easeFuc["easeOutQuart"]);
      CA = [aim[0] - eye[0], aim[1] - eye[1], aim[2] - eye[2]];
      var maxRadius = 15;
      var newRadius = Math.sqrt(CA[0] * CA[0] + CA[1] * CA[1] + CA[2] * CA[2]);
      newRadius = Math.min(newRadius, maxRadius);
      if (Math.abs(newRadius - view.radius) > 0.02) {
        start("camera", ep_lerp.property(view, "radius", newRadius), 5000, done, 0, easeFuc["easeOutQuart"]);
        shouldDone = 3
      };
      if (!fdage.oldCameraUpdate) {
        update2()
      }
    };
    var easeFuc = {
      easeInOutQuad: function(d, f, g, h) {
        return d /= h / 2, 1 > d ? g / 2 * d * d + f : (d--, -g / 2 * (d * (d - 2) - 1) + f)
      },
      linearTween: function(d, f, g, h) {
        return g * d / h + f
      },
      easeOutQuad: function(d, f, g, h) {
        return d /= h, -g * d * (d - 1) + f
      },
      easeOutQuart: function(d, f, g, h) {
        return d /= h, d--, -g * (d * d * d * d - 1) + f
      },
      easeOutSine: function(d, f, g, h) {
        return g * Math.sin(d / h * (Math.PI / 2)) + f
      }
    };
    var tranUpdate = function(d, type) {
      fdage.tranFuncs[type].forEach(function(i) {
        if (i.current += 1e3 * d, !(i.current < 0)) {
          if (i.current >= i.duration) {
            i.func(1);
            if (i.done) {
              i.done()
            }
          } else {
            var j = i.easing(i.current / i.duration, 0, 1, 1);
            i.func(j)
          }
        }
      })
    };

    function start(type, f, h, j, d, g) {
      d = d || 0;
      fdage.tranFuncs[type].push({
        func: f,
        current: -d * h,
        duration: (1 - d) * h,
        done: j,
        easing: g || c.linearTween
      });
      f(0);
      return f
    }
    var ep_lerp = {
      vector: function(c, d) {
        var f = c.clone();
        d = d.clone();
        return function(e) {
          c.set(f.x * (1 - e) + d.x * e, f.y * (1 - e) + d.y * e, f.z * (1 - e) + d.z * e)
        }
      },
      property: function(t, e, o, n) {
        var i = t[e];
        return function(r) {
          t[e] = i * (1 - r) + o * r, n && n(t[e])
        }
      },
      array: function(a, o, n) {
        var a0 = a.slice(0);
        return function(r) {
          for (var m = 0; m < a.length; m++) {
            a[m] = a0[m] * (1 - r) + o[m] * r
          };
          n && n(a)
        }
      },
      matrix4: function(t, e) {
        var o = Matrix.empty();
        Matrix.copy(o, t);
        return function(n) {
          for (r = o, a = e, s = 0; 16 > s; s++) {
            t[s] = r[s] * (1 - n) + a[s] * n
          }
        }
      }
    };

    function UI(a) {
      this.viewer = a;
      this.stripData = a.stripData;
      a = this.container = document.createElement("div");
      a.id = "fdageUI";
      a.style.position = "absolute";
      a.style.overflow = "hidden";
      a.style["-moz-user-select"] = "none";
      a.style["-khtml-user-select"] = "none";
      a.style["-webkit-user-select"] = "none";
      a.style["-ms-user-select"] = "none";
      this.viewer.domRoot.appendChild(a)
    }
    UI.prototype.setSize = function(a, b) {
      this.container.width = a | 0;
      this.container.height = b | 0;
      this.container.style.width = a + "px";
      this.container.style.height = b + "px"
    };
    UI.prototype.clearView = function() {
      for (; this.container.hasChildNodes();) {
        this.container.removeChild(this.container.childNodes[0])
      };
      delete this.progressBar;
      delete this.thumbnail;
      delete this.fadeThumbnail;
      delete this.playButton;
      delete this.helpOverlay
    };
    UI.prototype.bindInput = function(a) {
      a.onSingleTap.push(function(b, c) {
        c = 1 - 2 / a.element.clientHeight * c, this.refreshUI(), this.viewer.wake()
      }.bind(this));
      a.onDoubleTap.push(function(a, c) {
        var g = this.container.getBoundingClientRect();
        var clickedMesh = ifClickMesh(a / g.width * 2 - 1, 1 - 2 * c / g.height);
        if (clickedMesh) {
          cameraMove(clickedMesh.triangle)
        } else {
          this.viewer.scene.view.reset();
          this.viewer.wake()
        }
      }.bind(this))
    };
    UI.sanitize = function(a) {
      return a ? a.replace(/<|>|\(|\)|$|%|=/g, "") : a
    };
    UI.sanitizeURL = function(a) {
      return a ? 0 == a.indexOf("http://") || 0 == a.indexOf("https://") || 0 == a.indexOf("ftp://") ? encodeURI(a) : "http://" + encodeURI(a) : a
    };
    UI.prototype.showFailure = function(info, w) {
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
      var msg = "<div class=\"errorInfo\"><p style=\"font-size:1.5em; font-weight:lighter\">\u8f6c\u6362\u6a21\u578b\u65f6\u51fa\u9519</p>" + "<p style=\"font-size:1.3em;letter-spacing:2px;font-weight:bold;line-height:1.5em;margin-top:30px\">\u9519\u8bef\u4fe1\u606f: " + (info || "\u6587\u4ef6\u65e0\u6548(ERROR)\u8bf7\u68c0\u67e5\u60a8\u6240\u4e0a\u4f20\u7684\u6587\u4ef6\u4ee5\u786e\u5b9a\u5176\u7a33\u5b9a\u6027") + "</p>" + "<p style=\"font-size:0.8em;line-height:1.5em; margin-top:50px\">\u60a8\u53ef\u4ee5\u8054\u7cfb\u6211\u4eec\u7684\u5ba2\u670d\u3001\u6216\u70b9\u51fb\u4e0b\u9762\u7684\u89c6\u9891\u6559\u7a0b\u94fe\u63a5\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u4e0a\u4f20\u89e3\u8bf4<br>4Dweb\u5c06\u5168\u7a0b\u4e3a\u60a8\u63d0\u4f9b\u6700\u4f18\u8d28\u7684\u6a21\u578b\u5c55\u793a</p></div>";
      errorDiv.innerHTML = msg;
      this.container.appendChild(errorDiv);

      function reportError(uuid) {
        var inputdata = {};
        inputdata.uuid = uuid;
        $.ajax({
          url: "http://www.4dage.com/FdageModel/setModelError",
          type: "POST",
          async: true,
          dataType: "jsonp",
          data: inputdata,
          success: function(data) {},
          error: function(msg) {
            console.log("model error")
          }
        })
      }
      reportError(w.sceneURL)
    };
    UI.prototype.showPreview = function() {
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
    };;;
    UI.prototype.setThumbnailURL = function(a) {
      (this.loadingImageURL = a) && Network.fetchImage(this.loadingImageURL, this.setThumbnail.bind(this))
    };
    UI.prototype.setThumbnail = function(a) {
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
    };
    UI.prototype.showActiveView = function() {
      var a = this.thumbnail;
      var d, g, e, f, h;
      this.clearView();
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
      h.style.right = fdage.largeUI ? "85px" : "45px";
      h.style.top = fdage.largeUI ? "20px" : "12px";
      h.style["z-index"] = "20";
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
      f.src = fdage.dataLocale + "helpreset" + g;
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
      g.href = "http://www.4dage.com/";
      g.target = "_blank";
      g.style.pointerEvents = "auto";
      g.style.cursor = "pointer";
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
      d.appendChild(g);
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
      var home = e(this.menuCluster.contents, "4DAGE\u4e3b\u9875", "home", "", d++, c);
      home.onclick = function(a) {
        window.open("http://www.4dage.com", "_blank")
      }.bind(this, home);
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
      fdage.showFrameTime && (this.frameTimer = document.createElement("text"), this.frameTimer.style.position = "absolute", this.frameTimer.style.left = this.frameTimer.style.top = "5px", this.frameTimer.style.color = "gray", this.frameTimer.style.fontSize = "75%", this.container.appendChild(this.frameTimer), this.frameTimer.innerHTML = "--", this.frameCount = 1E20);
      if (this.viewer.gl.hints.mobile) {
        var a = document.createElement("div");
        var meta = this.viewer.scene.metaData;
        a.id = "metaData";
        a.innerHTML = "<div class=\"artistImg\"></div><div class=\"artist\"><span>" + codeToCh(meta.title) + "</span><a style=\"font-size:0.8em;font-weight:500;opacity:0.8\">by " + meta.author + "</a></div>";
        if (meta.author) {
          a.children[0].style["background-image"] = "url(\"http://www.4dage.com/FdageModel/head/" + meta.author + "/head.png\")"
        };
        a.children[0].style.opacity = "0";
        a.children[0].style.transition = "opacity 1s";
        a.children[0].style["-webkit-transition"] = "opacity 1s";
        a.onclick = function(a) {
          window.open("http://www.4dage.com/mobile/homepage.html?author=" + meta.author, "_blank")
        };
        var headPic = new Image();
        headPic.src = "http://www.4dage.com/FdageModel/head/" + meta.author + "/head.png";
        this.container.appendChild(a);
        headPic.onload = function() {
          a.children[0].style.opacity = "1"
        }
      }
    };;;
    UI.prototype.refreshUI = function() {
      if (this.sigCluster) {
        var a = !1,
          b = this.stripData.selectedStrip == this.stripData.STRIP_MENU;
        this.hideSigOnStrips && (a = a || b);
        this.hideSigOnHelp && (a = a || this.helpOverlay.active);
        this.sigCluster.active == a && this.sigCluster.toggle()
      }
    };
    UI.prototype.signalLoadProgress = function(a, b) {
      if (this.thumbnail) {
        if (!this.progressBar) {
          var c = document.createElement("div");
          c.style.backgroundColor = "rgb(240,240,240)";
          c.style.opacity = 0.9;
          c.style.position = "absolute";
          c.style.left = "20%";
          c.style.width = "60%";
          c.style.bottom = "30%";
          c.style.height = "4px";
          c.style["border-radius"] = "2px";
          this.progressBar = document.createElement("div");
          this.progressBar.style.backgroundColor = "#00ccff";
          this.progressBar.style.position = "absolute";
          this.progressBar.style.left = this.progressBar.style.bottom = "0px";
          this.progressBar.style.height = "100%";
          this.progressBar.style.width = "0px";
          this.progressBar.style["border-radius"] = "2px";
          c.appendChild(this.progressBar);
          this.container.appendChild(c);
          this.playButton && (this.container.removeChild(this.playButton), delete this.playButton)
        };
        this.progressBar.style.width = 0 >= b ? (100 * a / (2097152 + a) | 0) + "%" : (100 * a / b | 0) + "%"
      }
    };
    UI.prototype.animating = function() {
      return !!this.fadeThumbnail || !!this.frameTimer
    };
    UI.prototype.animate = function() {
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
    };
    var Vect = {
      type: Float32Array,
      create: function(a, b, c, d) {
        var e = new Vect.type(4);
        e[0] = a;
        e[1] = b;
        e[2] = c;
        e[3] = d;
        return e
      },
      empty: function() {
        return new Vect.type(4)
      },
      set: function(a, b, c, d, e) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e
      },
      copy: function(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3]
      },
      add: function(a, b, c) {
        a[0] = b[0] + c[0];
        a[1] = b[1] + c[1];
        a[2] = b[2] + c[2];
        a[3] = b[3] + c[3];
        return a
      },
      sub: function(a, b, c) {
        a[0] = b[0] - c[0];
        a[1] = b[1] - c[1];
        a[2] = b[2] - c[2];
        a[3] = b[3] - c[3];
        return a
      },
      scale: function(a, b, c) {
        a[0] = c[0] * b;
        a[1] = c[1] * b;
        a[2] = c[2] * b;
        a[3] = c[3] * b;
        return a
      },
      mul: function(a, b, c) {
        a[0] = b[0] * c[0];
        a[1] = b[1] * c[1];
        a[2] = b[2] * c[2];
        a[3] = b[3] * c[3];
        return a
      },
      mad: function(a, b, c, d) {
        a[0] = b[0] * c[0] + d[0];
        a[1] = b[1] * c[1] + d[1];
        a[2] = b[2] * c[2] + d[2];
        a[3] = b[3] * c[3] + d[3];
        return a
      },
      smad: function(a, b, c, d) {
        a[0] = b * c[0] + d[0];
        a[1] = b * c[1] + d[1];
        a[2] = b * c[2] + d[2];
        a[3] = b * c[3] + d[3];
        return a
      },
      negate: function(a, b) {
        a[0] = -b[0];
        a[1] = -b[1];
        a[2] = -b[2];
        return a
      },
      negate4: function(a, b) {
        a[0] = -b[0];
        a[1] = -b[1];
        a[2] = -b[2];
        a[3] = -b[3];
        return a
      },
      length: function(a) {
        var b = a[0],
          c = a[1];
        a = a[2];
        return Math.sqrt(b * b + c * c + a * a)
      },
      dot: function(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
      },
      dot4: function(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
      },
      normalize: function(a, b) {
        var c = b[0],
          d = b[1],
          e = b[2],
          f = Math.sqrt(c * c + d * d + e * e);
        if (0 == f) {
          return Vect.set(a, 0, 0, 0, 0)
        };
        f = 1 / f;
        a[0] = c * f;
        a[1] = d * f;
        a[2] = e * f;
        return a
      },
      cross: function(a, b, c) {
        a[0] = b[1] * c[2];
        a[0] += -b[2] * c[1];
        a[1] = b[2] * c[0] - b[0] * c[2];
        a[2] = b[0] * c[1] - b[1] * c[0];
        return a
      },
      lerp: function(a, b, c, d) {
        var e = 1 - d;
        a[0] = b[0] * e + c[0] * d;
        a[1] = b[1] * e + c[1] * d;
        a[2] = b[2] * e + c[2] * d;
        return a
      },
      lerp4: function(a, b, c, d) {
        var e = 1 - d;
        a[0] = b[0] * e + c[0] * d;
        a[1] = b[1] * e + c[1] * d;
        a[2] = b[2] * e + c[2] * d;
        a[3] = b[3] * e + c[3] * d;
        return a
      },
      min: function(a, b, c) {
        a[0] = Math.min(b[0], c[0]);
        a[1] = Math.min(b[1], c[1]);
        a[2] = Math.min(b[2], c[2]);
        a[3] = Math.min(b[3], c[3]);
        return a
      },
      max: function(a, b, c) {
        a[0] = Math.max(b[0], c[0]);
        a[1] = Math.max(b[1], c[1]);
        a[2] = Math.max(b[2], c[2]);
        a[3] = Math.max(b[3], c[3]);
        return a
      },
      projectOnPlane: function(a, b, c, d) {
        var e = Vect.empty();
        Vect.sub(e, b, c);
        c = Vect.dot(e, d);
        smad(a, -c, normal, b);
        return a
      }
    };

    function View(a) {
      this.pivot = [0, 0, 0];
      this.rotation = [0, 0];
      this.radius = 1;
      this.nearPlane = 0.3;
      this.fov = 45;
      this.size = [1, 1];
      this.transform = Matrix.empty();
      this.transform2 = Matrix.empty();
      this.viewMatrix = Matrix.empty();
      this.viewMatrix2 = Matrix.empty();
      this.projectionMatrix = Matrix.empty();
      this.viewProjectionMatrix = Matrix.empty();
      this.viewProjectionMatrix2 = Matrix.empty();
      this.projectionOffset = [0, 0];
      a ? this.loadView(a, !0) : (this.saveResetView(), this.updateView(), this.updateProjection())
    }
    View.prototype.saveResetView = function() {
      this.resetDesc = {
        angles: [this.rotation[0], this.rotation[1]],
        pivot: [this.pivot[0], this.pivot[1], this.pivot[2]],
        limits: this.limits,
        orbitRadius: this.radius,
        fov: this.fov,
        modelMatrix: this.modelMatrix
      }
    };
    View.prototype.loadView = function(a, b) {
      a && (this.rotation[0] = a.angles[0], this.rotation[1] = a.angles[1], this.pivot[0] = a.pivot[0], this.pivot[1] = a.pivot[1], this.pivot[2] = a.pivot[2], this.modelMatrix = a.modelMatrix || Matrix.identity(), this.radius = parseFloat(a.orbitRadius), this.fov = a.fov, this.limits = a.limits, b && this.saveResetView(), this.updateView(), this.updateProjection())
    };
    View.prototype.reset = function() {
      this.loadView(this.resetDesc)
    };
    View.prototype.updateView = function() {
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
      for (var i = 0; i < 16; i++) {
        this.transform2[i] = this.transform[i]
      };
      this.transform2[12] += this.pivot[0];
      this.transform2[13] += this.pivot[1];
      this.transform2[14] += this.pivot[2];
      Matrix.mul(this.transform2, this.modelMatrix, this.transform2);
      this.transform[12] += this.pivot[0];
      this.transform[13] += this.pivot[1];
      this.transform[14] += this.pivot[2];
      Matrix.invert(this.viewMatrix, this.transform);
      Matrix.invert(this.viewMatrix2, this.transform2)
    };
    View.prototype.offsetProjection = function(a, b) {
      this.projectionOffset[0] = a;
      this.projectionOffset[1] = b
    };
    View.prototype.updateProjection = function(a) {
      Matrix.perspectiveInfinite(this.projectionMatrix, this.fov, this.size[0] / this.size[1], this.nearPlane, a);
      this.projectionMatrix[8] = this.projectionOffset[0];
      this.projectionMatrix[9] = this.projectionOffset[1];
      Matrix.mul(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
      Matrix.mul(this.viewProjectionMatrix2, this.projectionMatrix, this.viewMatrix2)
    };

    function WebViewer(a, b, c) {
      this.mobile = /Android|iPhone|iPod|iPad|Windows Phone|IEMobile|BlackBerry|webOS/.test(navigator.userAgent);
      this.domRoot = document.createElement("div");
      this.domRoot.style.width = a + "px";
      this.domRoot.style.height = b + "px";
      this.initCanvas(a, b);
      this.scene = this.input = null;
      this.sceneURL = c;
      this.sleepCounter = 8;
      this.onLoad = null;
      this.ui = new UI(this);
      this.ui.setSize(a, b);
      this.ui.showPreview()
    }
    WebViewer.prototype.initCanvas = function(a, b) {
      this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
      this.canvas = document.createElement("canvas");
      this.canvas.width = (Math.min(window.devicePixelRatio, 2) || 1) * a;
      this.canvas.height = (Math.min(window.devicePixelRatio, 2) || 1) * b;
      this.canvas.style.width = a + "px";
      this.canvas.style.height = b + "px";
      this.canvas.style.position = "absolute";
      this.canvas.style["z-index"] = "-10";
      this.domRoot.appendChild(this.canvas)
    };
    WebViewer.prototype.initGL = function() {
      var a = {
          alpha: !1,
          depth: !1,
          stencil: !1,
          antialias: !1,
          premultipliedAlpha: !1,
          preserveDrawingBuffer: !1
        },
        a = this.gl = this.canvas.getContext("webgl", a) || this.canvas.getContext("experimental-webgl", a);
      if (!this.gl) {
        return this.ui.showFailure("webgl\u51fa\u9519\u3002</br>\u5efa\u8bae\u60a8\u5c06\u6d4f\u89c8\u5668\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\uff0c\u4ee5\u83b7\u6700\u597d\u7684\u4f53\u9a8c\u3002<br><span style=\"font-size:0.8em\">\u83b7\u77e5\u66f4\u591awebgl\u6d4f\u89c8\u5668\u4fe1\u606f\u8bf7<a href=\"webglInfo.html\">\u70b9\u51fb\u6b64\u5904</a></span>", this), !1
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
      a.shaderCache = new ShaderCache(a);
      a.textureCache = new TextureCache(a);
      this.allocBacking();
      return !0
    };
    WebViewer.prototype.allocBacking = function() {
      var a = this.gl,
        b = !1,
        c = {
          width: this.canvas.width,
          height: this.canvas.height,
          nofilter: !0
        };
      this.mainColor = new Texture(a, c);
      a.ext.textureHalf && a.ext.textureHalfLinear && (this.mainColor.loadArray(null, a.RGBA, a.ext.textureHalf.HALF_FLOAT_OES), this.mainBuffer = new Framebuffer(a, {
        color0: this.mainColor,
        createDepth: !0
      }), b = this.mainBuffer.valid);
      !b && a.ext.textureFloat && a.ext.textureFloatLinear && !a.hints.mobile && (this.mainColor.loadArray(null, a.RGBA, a.FLOAT), this.mainBuffer = new Framebuffer(a, {
        color0: this.mainColor,
        createDepth: !0
      }), b = this.mainBuffer.valid);
      for (; !b;) {
        this.mainColor = new Texture(a, c), this.mainColor.loadArray(null, a.RGBA, a.UNSIGNED_BYTE), this.mainBuffer = new Framebuffer(a, {
          color0: this.mainColor,
          createDepth: !0
        }), b = this.mainBuffer.valid, c.width /= 2, c.height /= 2
      }
    };
    WebViewer.prototype.loadScene = function(a) {
      this.sceneURL = a || this.sceneURL;
      this.scene = this.input = null;
      if (this.initGL() && this.sceneURL) {
        var b = this.ui.signalLoadProgress.bind(this.ui);
        a = function(a) {
          b(1, 1);
          this.scene = new Scene(this.gl);
          this.scene.stripData = this.stripData;
          var file = new Archive(a);
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
    };
    WebViewer.prototype.unload = function() {
      delete this.scene;
      delete this.input;
      delete this.ui;
      delete this.mainColor;
      delete this.mainBuffer;
      delete this.gl;
      var a = this.domRoot.clientWidth,
        b = this.domRoot.clientHeight;
      this.initCanvas(a, b);
      this.ui = new UI(this);
      this.ui.setSize(a, b);
      this.ui.showPreview();
      this.cancelFrame()
    };
    WebViewer.prototype.bindInput = function() {
      this.input = new Input(this.ui.container);
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
    };
    WebViewer.prototype.wake = function(a) {
      this.sleepCounter = a || ((this.gl.hints.mobile) ? 4 : 16);
      this.requestFrame(this.update.bind(this))
    };
    WebViewer.prototype.requestFrame = function(a) {
      var b = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      if (!this.frameRequestPending) {
        var c = function() {
          this.frameRequestPending = 0;
          a()
        }.bind(this);
        this.frameRequestPending = b(c, this.canvas)
      }
    };
    WebViewer.prototype.cancelFrame = function() {
      this.frameRequestPending && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame)(this.frameRequestPending)
    };
    WebViewer.prototype.fullscreenChange = function() {
      FullScreen.active() ? (this.oldRootWidth = this.domRoot.style.width, this.oldRootHeight = this.domRoot.style.height, this.domRoot.style.width = "100%", this.domRoot.style.height = "100%") : (this.domRoot.style.width = this.oldRootWidth, this.domRoot.style.height = this.oldRootHeight);
      this.wake()
    };
    WebViewer.prototype.resize = function(a, b) {
      a && b ? (this.domRoot.style.width = a + "px", this.domRoot.style.height = b + "px") : (a = this.domRoot.clientWidth, b = this.domRoot.clientHeight);
      this.canvas.width = (Math.min(window.devicePixelRatio, 2) || 1) * a;
      this.canvas.height = (Math.min(window.devicePixelRatio, 2) || 1) * b;
      this.canvas.style.width = a + "px";
      this.canvas.style.height = b + "px";
      this.ui.setSize(a, b);
      this.allocBacking();
      this.wake()
    };
    WebViewer.prototype.updateLoad = function() {
      this.scene.complete() ? (this.ui.showActiveView(), this.requestFrame(this.update.bind(this))) : this.requestFrame(this.updateLoad.bind(this));
      this.ui.animate()
    };
    WebViewer.prototype.update = function() {
      if (0 < this.sleepCounter || this.ui.animating()) {
        this.ui.animate(), this.scene.update(), this.drawScene(), this.requestFrame(this.update.bind(this))
      };
      this.sleepCounter--
    };
    WebViewer.prototype.updateView = function(hurry, tran, count) {
      if (tran) {
        webview.scene.view.updateView()
      };
      webview.wake(count || ((this.gl.hints.mobile) ? 4 : 16));
      if (hurry) {
        webview.scene.postRender.discardAAHistory()
      }
    };
    WebViewer.prototype.drawScene = function() {
      this.gl.isContextLost() || (this.domRoot.clientWidth == this.canvas.clientWidth && this.domRoot.clientHeight == this.canvas.clientHeight || this.resize(), this.scene.view.size = [this.mainBuffer.width, this.mainBuffer.height], this.scene.view.updateProjection(), this.scene.postRender.adjustProjectionForSupersampling(this.scene.view), this.scene.collectShadows(this.mainBuffer), this.mainBuffer.bind(), this.scene.draw(), this.scene.postRender.present(this.mainColor, this.canvas.width, this.canvas.height))
    };
    fdage = "undefined" == typeof fdage ? {} : fdage;
    fdage.WebViewer = WebViewer;
    fdage.dataLocale = "images/";
    var ShaderTable = {
      "aaresolve.glsl": "precision mediump float;uniform sampler2D tInput0;uniform sampler2D tInput1;uniform sampler2D tInput2; \x0A#ifdef HIGHQ\x0A uniform sampler2D tInput3;uniform sampler2D tInput4;uniform sampler2D tInput5;uniform sampler2D tInput6;uniform sampler2D tInput7;uniform sampler2D tInput8;uniform sampler2D tInput9;uniform sampler2D tInput10;uniform sampler2D tInput11;uniform sampler2D tInput12;uniform sampler2D tInput13;uniform sampler2D tInput14;uniform sampler2D tInput15; \x0A#endif\x0A uniform mat4 uSamplesValid;varying highp vec2 d;void main(void){vec4 e0=texture2D(tInput0,d); vec4 e1=texture2D(tInput1,d);vec4 e2=texture2D(tInput2,d);\x0A#ifdef HIGHQ\x0A vec4 e3=texture2D(tInput3,d);vec4 e4=texture2D(tInput4,d);vec4 e5=texture2D(tInput5,d);vec4 e6=texture2D(tInput6,d);vec4 e7=texture2D(tInput7,d);vec4 e8=texture2D(tInput8,d);vec4 e9=texture2D(tInput9,d);vec4 e10=texture2D(tInput10,d);vec4 e11=texture2D(tInput11,d);vec4 e12=texture2D(tInput12,d);vec4 e13=texture2D(tInput13,d);vec4 e14=texture2D(tInput14,d);vec4 e15=texture2D(tInput15,d);\x0Agl_FragColor=e0*uSamplesValid[0][0]+e1*uSamplesValid[0][1]+e2*uSamplesValid[0][2]+e3*uSamplesValid[0][3]+e4*uSamplesValid[1][0]+e5*uSamplesValid[1][1]+e6*uSamplesValid[1][2]+e7*uSamplesValid[1][3]+e8*uSamplesValid[2][0]+e9*uSamplesValid[2][1]+e10*uSamplesValid[2][2]+e11*uSamplesValid[2][3]+e12*uSamplesValid[3][0]+e13*uSamplesValid[3][1]+e14*uSamplesValid[3][2]+e15*uSamplesValid[3][3];\x0A#else\x0A gl_FragColor=e0*uSamplesValid[0][0]+e1*uSamplesValid[0][1]+e2*uSamplesValid[0][2];\x0A#endif\x0A}",
      "alphaprepassfrag.glsl": "precision mediump float;\x0A#include <matdither.glsl>\x0Auniform sampler2D tAlbedo;uniform float uAlphaStrength;varying mediump vec2 j;void main(){float k=texture2D(tAlbedo,j).a * uAlphaStrength / 100.0;if(k<=l(j.x)){discard;}gl_FragColor=vec4(0.0);}",
      "alphaprepassvert.glsl": "precision highp float;uniform mat4 uModelViewProjectionMatrix;attribute vec3 vPosition;attribute vec2 vTexCoord;varying mediump vec2 j;vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(void){gl_Position=m(uModelViewProjectionMatrix,vPosition.xyz);j=vTexCoord;}",
      "bloom.glsl": "precision mediump float;uniform sampler2D tInput;uniform vec4 uKernel[BLOOM_SAMPLES];varying highp vec2 d;void main(void){vec3 c=vec3(0.0,0.0,0.0);for(int u=0;u<BLOOM_SAMPLES;++u){vec3 v=uKernel[u].xyz;c+=texture2D(tInput,d+v.xy).xyz*v.z;}gl_FragColor.xyz=c;gl_FragColor.w=0.0;}",
      "bloomshrink.glsl": "precision highp float;uniform sampler2D tInput;varying highp vec2 d;void main(void){float A=0.25/256.0;gl_FragColor=0.25*(texture2D(tInput,d+vec2(A,A))+texture2D(tInput,d+vec2(A,-A))+texture2D(tInput,d+vec2(-A,A))+texture2D(tInput,d+vec2(-A,-A)));}",
      "matdither.glsl": "float l(highp float B){highp float C=0.5*fract(gl_FragCoord.x*0.5)+0.5*fract(gl_FragCoord.y*0.5);return 0.4+0.6*fract(C+3.141592e6*B);}",
      "matfrag.glsl": "\x0A#extension GL_OES_standard_derivatives : enable\x0Aprecision mediump float;varying highp vec3 D;varying mediump vec2 j;varying mediump vec3 E;varying mediump vec3 F;varying mediump vec3 G;\x0A#ifdef VERTEX_COLOR\x0Avarying lowp vec4 H;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0Avarying mediump vec2 I;\x0A#endif\x0Auniform sampler2D tAlbedo;uniform sampler2D tReflectivity; uniform sampler2D tExtrasEmi;uniform sampler2D tExtrasSkin;uniform sampler2D tExtrasAO;uniform sampler2D tNormal;uniform sampler2D tExtras;uniform sampler2D tSkySpecular; uniform float uAlbedoStrength; uniform float uReflecStrength; uniform float uAlphaStrength; uniform float uNormalStrength; uniform float uGlossStrength;  uniform float uAOStrength;uniform float uModelBright; uniform vec4 uDiffuseCoefficients[9];uniform vec3 uCameraPosition;uniform vec3 uFresnel;uniform float uAlphaTest;uniform float uHorizonOcclude;uniform float uHorizonSmoothing;\x0A#ifdef EMISSIVE\x0Auniform float uEmissiveScale;uniform vec4 uTexRangeEmissive;\x0A#endif\x0A#ifdef AMBIENT_OCCLUSION\x0Auniform vec4 uTexRangeAO;\x0A#endif\x0A#ifdef LIGHT_COUNT\x0Auniform vec4 uLightPositions[LIGHT_COUNT];uniform vec3 uLightDirections[LIGHT_COUNT];uniform vec3 uLightColors[LIGHT_COUNT];uniform vec3 uLightParams[LIGHT_COUNT];uniform vec3 uLightSpot[LIGHT_COUNT];\x0A#endif\x0A#ifdef ANISO\x0Auniform float uAnisoStrength;uniform vec3 uAnisoTangent;uniform float uAnisoIntegral;uniform vec4 uTexRangeAniso;\x0A#endif\x0A#define saturate(x) clamp( x, 0.0, 1.0 )\x0A#include <matsampling.glsl>\x0A#include <matlighting.glsl>\x0A#include <matshadows.glsl>\x0A#include <matskin.glsl>\x0A#include <matmicrofiber.glsl>\x0A#include <matstrips.glsl>\x0A#ifdef TRANSPARENCY_DITHER\x0A#include <matdither.glsl>\x0A#endif\x0Avoid main(void){vec4 J=texture2D(tAlbedo,j); J.xyz = (uAlbedoStrength/100.0)*J.xyz; J.w *= (uAlphaStrength/100.0); vec3 K=L(J.xyz); float k=J.w;\x0A#ifdef VERTEX_COLOR\x0A{vec3 M=H.xyz;\x0A#ifdef VERTEX_COLOR_SRGB\x0AM=M*(M*(M*0.305306011+vec3(0.682171111))+vec3(0.012522878));\x0A#endif\x0AK*=M;\x0A#ifdef VERTEX_COLOR_ALPHA\x0Ak*=H.w;\x0A#endif\x0A}\x0A#endif\x0A#ifdef ALPHA_TEST\x0Aif(k<uAlphaTest){discard;}\x0A#endif\x0A#ifdef TRANSPARENCY_DITHER\x0Ak=(k>l(j.x))?1.0:k;\x0A#endif\x0A vec3 N0 = texture2D(tNormal,j).xyz; vec3 N=On(texture2D(tNormal,j).xyz,uNormalStrength/100.0); \x0A#ifdef ANISO\x0A#ifdef ANISO_NO_DIR_TEX\x0Avec3 P=Q(uAnisoTangent);\x0A#else\x0AJ=R(j,uTexRangeAniso,tExtras);vec3 P=2.0*J.xyz-vec3(1.0);P=Q(P);\x0A#endif\x0AP=P-N*dot(P,N);P=normalize(P);vec3 S=P*uAnisoStrength;\x0A#endif\x0Avec3 T=normalize(uCameraPosition-D);J=texture2D(tReflectivity,j); J.xyz = (uReflecStrength/100.0)*J.xyz;  J.w *= (uGlossStrength/100.0); vec3 U=L(J.xyz);float V=J.w;float W=V;\x0A#ifdef HORIZON_SMOOTHING\x0Afloat X=dot(T,N);X=uHorizonSmoothing-X*uHorizonSmoothing;V=mix(V,1.0,X*X);\x0A#endif\x0A#ifdef STRIPVIEW\x0AY Z;dc(Z,V,U);\x0A#endif\x0Afloat dd=1.0;\x0A#ifdef AMBIENT_OCCLUSION\x0A#ifdef AMBIENT_OCCLUSION_SECONDARY_UV\x0Add=R(I,uTexRangeAO,tExtrasAO).x;\x0A#else\x0Add=R(j,uTexRangeAO,tExtrasAO).x;\x0A#endif\x0Add*=dd;dd = 1.0 - ((1.0-dd) * uAOStrength/100.0);\x0A#endif\x0A#if defined(SKIN)\x0Ade df;dh(df);df.di*=dd;\x0A#elif defined(MICROFIBER)\x0Adj dk;dl(dk,N);dk.dm*=dd;\x0A#else\x0Avec3 dn=du(N);dn*=dd;\x0A#endif\x0Avec3 dv=reflect(-T,N);\x0A#ifdef ANISO\x0Avec3 rt=dv-(0.5*S*dot(dv,P));vec3 dA=dB(rt,mix(V,0.5*V,uAnisoStrength));\x0A#else\x0Avec3 dA=dB(dv,V);\x0A#endif\x0AdA*=dC(dv,G);\x0A#ifdef LIGHT_COUNT\x0Ahighp float dD=10.0/log2(V*0.968+0.03);dD*=dD;float dE=dD*(1.0/(8.0*3.1415926))+(4.0/(8.0*3.1415926));dE=min(dE,1.0e3);\x0A#ifdef SHADOW_COUNT\x0AdF dG;dH(dG,SHADOW_KERNEL);\x0A#ifdef SKIN\x0AdF dI;dH(dI,SHADOW_KERNEL+SHADOW_KERNEL*df.dJ);\x0A#endif\x0A#endif\x0A#ifdef ANISO\x0AdE*=uAnisoIntegral;\x0A#endif\x0Afor(int u=0;u<LIGHT_COUNT;++u){vec3 dK=uLightPositions[u].xyz-D*uLightPositions[u].w;float dL=inversesqrt(dot(dK,dK));dK*=dL;float a=saturate(uLightParams[u].z/dL);a=1.0+a*(uLightParams[u].x+uLightParams[u].y*a);float s=saturate(dot(dK,uLightDirections[u]));s=saturate(uLightSpot[u].y-uLightSpot[u].z*(1.0-s*s));vec3 dM=(a*s)*uLightColors[u].xyz;\x0A#if defined(SKIN)\x0A#ifdef SHADOW_COUNT\x0AdN(df,dG.dO[u],dI.dO[u],dK,N,dM);\x0A#else\x0AdN(df,1.0,1.0,dK,N,dM);\x0A#endif\x0A#elif defined(MICROFIBER)\x0A#ifdef SHADOW_COUNT\x0AdP(dk,dG.dO[u],dK,N,dM);\x0A#else\x0AdP(dk,1.0,dK,N,dM);\x0A#endif\x0A#else\x0Afloat dQ=saturate((1.0/3.1415926)*dot(dK,N));\x0A#ifdef SHADOW_COUNT\x0AdQ*=dG.dO[u];\x0A#endif\x0Adn+=dQ*dM;\x0A#endif\x0Avec3 dR=dK+T;\x0A#ifdef ANISO\x0AdR=dR-(S*dot(dR,P));\x0A#endif\x0AdR=normalize(dR);float dS=dE*pow(saturate(dot(dR,N)),dD);\x0A#ifdef SHADOW_COUNT\x0AdS*=dG.dO[u];\x0A#endif\x0AdA+=dS*dM;}\x0A#endif\x0A#if defined(SKIN)\x0Avec3 dn,diff_extra;dT(dn,diff_extra,df,T,N,V);\x0A#elif defined(MICROFIBER)\x0Avec3 dn,diff_extra;dU(dn,diff_extra,dk,T,N,V);\x0A#endif\x0AdA*=dV(T,N,U,V*V);\x0A#ifdef DIFFUSE_UNLIT\x0Agl_FragColor.xyz=K+dA;\x0A#else\x0Agl_FragColor.xyz=dn*K+dA;\x0A#endif\x0A#if defined(SKIN) || defined(MICROFIBER)\x0Agl_FragColor.xyz+=diff_extra;\x0A#endif\x0A#ifdef EMISSIVE\x0A#ifdef EMISSIVE_SECONDARY_UV\x0Avec2 dW=I;\x0A#else\x0Avec2 dW=j;\x0A#endif\x0Agl_FragColor.xyz+=uEmissiveScale*L(R(dW,uTexRangeEmissive,tExtrasEmi).xyz);\x0A#endif\x0A#ifdef STRIPVIEW\x0Agl_FragColor.xyz=dX(Z,N,K,U,W,dn,dA,gl_FragColor.xyz);\x0A#endif\x0A#ifdef NOBLEND\x0Agl_FragColor.w=1.0;\x0A#else\x0Agl_FragColor.w=k;\x0A#endif\x0A gl_FragColor.xyz*=uModelBright; }",
      "matlighting.glsl": "float dY(float dZ,float ec){return saturate(-dZ*ec+dZ+ec);}vec3 ed(float dZ,vec3 ec){return saturate(-dZ*ec+vec3(dZ)+ec);}float ee(float ec){return-0.31830988618379*ec+0.31830988618379;}vec3 ef(vec3 ec){return-0.31830988618379*ec+vec3(0.31830988618379);}vec3 dV(vec3 T,vec3 N,vec3 U,float eh){float ei=1.0-saturate(dot(T,N));float ej=ei*ei;ei*=ej*ej;ei*=eh;return(U-ei*U)+ei*uFresnel;}vec2 ek(vec2 el,vec2 ec){el=1.0-el;vec2 em=el*el;em*=em;el=mix(em,el*0.4,ec);return el;}vec3 du(vec3 en){\x0A#define c(n) uDiffuseCoefficients[n].xyz\x0Avec3 C=(c(0)+en.y*((c(1)+c(4)*en.x)+c(5)*en.z))+en.x*(c(3)+c(7)*en.z)+c(2)*en.z;\x0A#undef c\x0Avec3 sqr=en*en;C+=uDiffuseCoefficients[6].xyz*(3.0*sqr.z-1.0);C+=uDiffuseCoefficients[8].xyz*(sqr.x-sqr.y);return C;}void eo(inout vec3 eu,inout vec3 ev,inout vec3 eA,vec3 en){eu=uDiffuseCoefficients[0].xyz;ev=uDiffuseCoefficients[1].xyz*en.y;ev+=uDiffuseCoefficients[2].xyz*en.z;ev+=uDiffuseCoefficients[3].xyz*en.x;vec3 swz=en.yyz*en.xzx;eA=uDiffuseCoefficients[4].xyz*swz.x;eA+=uDiffuseCoefficients[5].xyz*swz.y;eA+=uDiffuseCoefficients[7].xyz*swz.z;vec3 sqr=en*en;eA+=uDiffuseCoefficients[6].xyz*(3.0*sqr.z-1.0);eA+=uDiffuseCoefficients[8].xyz*(sqr.x-sqr.y);}vec3 eB(vec3 eu,vec3 ev,vec3 eA,vec3 eC,float ec){eC=mix(vec3(1.0),eC,ec);return(eu+ev*eC.x)+eA*eC.z;}vec3 eD(vec3 eu,vec3 ev,vec3 eA,vec3 eC,vec3 eE){vec3 eF=mix(vec3(1.0),eC.yyy,eE);vec3 eG=mix(vec3(1.0),eC.zzz,eE);return(eu+ev*eF)+eA*eG;}vec3 dB(vec3 en,float V){en/=dot(vec3(1.0),abs(en));vec2 eH=abs(en.zx)-vec2(1.0,1.0);vec2 eI=vec2(en.x<0.0?eH.x:-eH.x,en.z<0.0?eH.y:-eH.y);vec2 eJ=(en.y<0.0)?eI:en.xz;eJ=vec2(0.5*(254.0/256.0),0.125*0.5*(254.0/256.0))*eJ+vec2(0.5,0.125*0.5);float eK=fract(7.0*V);eJ.y+=0.125*(7.0*V-eK);vec2 eL=eJ+vec2(0.0,0.125);vec4 eM=mix(texture2D(tSkySpecular,eJ),texture2D(tSkySpecular,eL),eK);vec3 r=eM.xyz*(7.0*eM.w);return r*r;}float dC(vec3 en,vec3 eN){float eO=dot(en,eN);eO=saturate(1.0+uHorizonOcclude*eO);return eO*eO;}",
      "matmicrofiber.glsl": "\x0A#ifdef MICROFIBER\x0Auniform vec4 uTexRangeFuzz;uniform float uFresnelIntegral;uniform vec4 uFresnelColor;uniform float uFresnelOcc;uniform float uFresnelGlossMask;struct dj{vec3 dm;vec3 dQ;vec3 eP;vec3 eQ;vec3 eR;};void dl(out dj s,vec3 N){s.dm=s.dQ=du(N);s.eP=vec3(0.0);s.eQ=uFresnelColor.rgb;s.eR=uFresnelColor.aaa*vec3(1.0,0.5,0.25);\x0A#ifndef MICROFIBER_NO_FUZZ_TEX\x0Avec4 J=R(j,uTexRangeFuzz,tExtras);s.eQ*=L(J.rgb);\x0A#endif\x0A}void dP(inout dj s,float eS,vec3 dK,vec3 N,vec3 dM){float dZ=dot(dK,N);float dQ=saturate((1.0/3.1415926)*dZ);float eT=dY(dZ,s.eR.z);\x0A#ifdef SHADOW_COUNT\x0AdQ*=eS;float eU=mix(1.0,eS,uFresnelOcc);float eP=eT*eU;\x0A#else \x0Afloat eP=eT;\x0A#endif\x0As.eP=eP*dM+s.eP;s.dQ=dQ*dM+s.dQ;}void dU(out vec3 dn,out vec3 diff_extra,inout dj s,vec3 T,vec3 N,float V){s.eP*=uFresnelIntegral;float el=dot(T,N);vec2 eV=ek(vec2(el,el),s.eR.xy);s.eP=s.dm*eV.x+(s.eP*eV.y);s.eP*=s.eQ;float eW=saturate(1.0+-uFresnelGlossMask*V);s.eP*=eW*eW;dn=s.dQ;diff_extra=s.eP;}\x0A#endif\x0A",
      "matsampling.glsl": "vec3 L(vec3 c){return c*c;}vec3 On(vec3 n,float s){vec3 eX=E;vec3 eY=F;vec3 eZ=gl_FrontFacing?G:-G;\x0A#ifdef TSPACE_RENORMALIZE\x0AeZ=normalize(eZ);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeX-=dot(eX,eZ)*eZ;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeX=normalize(eX);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeY=(eY-dot(eY,eZ)*eZ)-dot(eY,eX)*eX;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeY=normalize(eY);\x0A#endif\x0A#ifdef TSPACE_COMPUTE_BITANGENT\x0Avec3 fc=cross(eZ,eX);eY=dot(fc,eY)<0.0?-fc:fc;\x0A#endif\x0A n=2.0*n-vec3(1.0); n.x*=s;n.y*=s;if(n.z>=0.0){n.z=1.0-(1.0-n.z)*s;}else if(s==0.0){n.z=1.0;}else{n.z=(1.0+n.z)*s-1.0;}return normalize(eX*n.x+eY*n.y+eZ*n.z);}vec3 O(vec3 n){vec3 eX=E;vec3 eY=F;vec3 eZ=gl_FrontFacing?G:-G;\x0A#ifdef TSPACE_RENORMALIZE\x0AeZ=normalize(eZ);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeX-=dot(eX,eZ)*eZ;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeX=normalize(eX);\x0A#endif\x0A#ifdef TSPACE_ORTHOGONALIZE\x0AeY=(eY-dot(eY,eZ)*eZ)-dot(eY,eX)*eX;\x0A#endif\x0A#ifdef TSPACE_RENORMALIZE\x0AeY=normalize(eY);\x0A#endif\x0A#ifdef TSPACE_COMPUTE_BITANGENT\x0Avec3 fc=cross(eZ,eX);eY=dot(fc,eY)<0.0?-fc:fc;\x0A#endif\x0An=2.0*n-vec3(1.0);return normalize(eX*n.x+eY*n.y+eZ*n.z);}vec3 Q(vec3 t){vec3 eZ=gl_FrontFacing?G:-G;return normalize(E*t.x+F*t.y+eZ*t.z);}vec4 R(vec2 fd,vec4 fe,sampler2D tExtra){\x0A#if GL_OES_standard_derivatives\x0Avec2 ff=fract(fd);vec2 fh=fwidth(ff);float fi=(fh.x+fh.y)>0.5?-6.0:0.0;return texture2D(tExtra,ff*fe.xy+fe.zw,fi);\x0A#else\x0Areturn texture2D(tExtra,fract(fd)*fe.xy+fe.zw);\x0A#endif\x0A}vec3 fj(sampler2D fk,vec2 fl,float fm){vec3 n=texture2D(fk,fl,fm*4.0).xyz;return O(n);}",
      "matshadows.glsl": "\x0A#ifdef SHADOW_COUNT\x0A#ifdef MOBILE\x0A#define SHADOW_KERNEL (4.0/1536.0)\x0A#else\x0A#define SHADOW_KERNEL (4.0/2048.0)\x0A#endif\x0Ahighp vec4 m(highp mat4 o,highp vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}uniform sampler2D tDepth0;\x0A#if SHADOW_COUNT > 1\x0Auniform sampler2D tDepth1;\x0A#if SHADOW_COUNT > 2\x0Auniform sampler2D tDepth2;\x0A#endif\x0A#endif\x0Auniform highp vec2 uShadowKernelRotation;uniform highp vec4 uShadowMapSize;uniform highp mat4 uShadowMatrices[SHADOW_COUNT];uniform highp vec4 uShadowTexelPadProjections[SHADOW_COUNT];highp float fn(highp vec3 C){return(C.x+C.y*(1.0/255.0))+C.z*(1.0/65025.0);}float fo(sampler2D fu,highp vec2 fd,highp float fv){\x0A#ifndef MOBILE\x0Ahighp vec2 c=fd*uShadowMapSize.xy;highp vec2 a=floor(c)*uShadowMapSize.zw,b=ceil(c)*uShadowMapSize.zw;vec4 fA;fA.x=fv<fn(texture2D(fu,a).xyz)?1.0:0.0;fA.y=fv<fn(texture2D(fu,vec2(b.x,a.y)).xyz)?1.0:0.0;fA.z=fv<fn(texture2D(fu,vec2(a.x,b.y)).xyz)?1.0:0.0;fA.w=fv<fn(texture2D(fu,b).xyz)?1.0:0.0;highp vec2 w=c-a*uShadowMapSize.xy;vec2 t=(w.y*fA.zw+fA.xy)-w.y*fA.xy;return(w.x*t.y+t.x)-w.x*t.x;\x0A#else\x0Ahighp float C=fn(texture2D(fu,fd.xy).xyz);return fv<C?1.0:0.0;\x0A#endif\x0A}float fB(sampler2D fu,highp vec3 fd,float fC){highp vec2 v=uShadowKernelRotation*fC;float s;s=fo(fu,fd.xy+v,fd.z);s+=fo(fu,fd.xy-v,fd.z);s+=fo(fu,fd.xy+vec2(-v.y,v.x),fd.z);s+=fo(fu,fd.xy+vec2(v.y,-v.x),fd.z);s*=0.25;return s*s;}struct dF{float dO[LIGHT_COUNT];};void dH(out dF ss,float fC){highp vec3 fD[SHADOW_COUNT];vec3 eZ=gl_FrontFacing?G:-G;for(int u=0;u<SHADOW_COUNT;++u){vec4 fE=uShadowTexelPadProjections[u];float fF=fE.x*D.x+(fE.y*D.y+(fE.z*D.z+fE.w));\x0A#ifdef MOBILE\x0AfF*=.001+fC;\x0A#else\x0AfF*=.0005+0.5*fC;\x0A#endif\x0Ahighp vec4 fG=m(uShadowMatrices[u],D+fF*eZ);fD[u]=fG.xyz/fG.w;}\x0A#if SHADOW_COUNT > 0\x0Ass.dO[0]=fB(tDepth0,fD[0],fC);\x0A#endif\x0A#if SHADOW_COUNT > 1\x0Ass.dO[1]=fB(tDepth1,fD[1],fC);\x0A#endif\x0A#if SHADOW_COUNT > 2\x0Ass.dO[2]=fB(tDepth2,fD[2],fC);\x0A#endif\x0Afor(int u=SHADOW_COUNT;u<LIGHT_COUNT;++u){ss.dO[u]=1.0;}}\x0A#endif\x0A",
      "matskin.glsl": "\x0A#ifdef SKIN\x0Auniform vec4 uTexRangeSubdermis;uniform vec4 uTexRangeTranslucency;uniform vec4 uTexRangeFuzz;uniform vec3 uSubdermisColor;uniform vec4 uTransColor;uniform vec4 uFresnelColor;uniform float uFresnelOcc;uniform float uFresnelGlossMask;uniform float uTransSky;uniform float uFresnelIntegral;uniform float uTransIntegral;uniform float uSkinShadowBlur;uniform float uNormalSmooth;struct de{vec3 fH;vec3 fI,fJ,fK,eP;vec3 di,dm,fL;vec3 fM;vec3 fN;vec3 fO;vec3 fP;float fQ;float fR;float dJ;};void dh(out de s){vec4 J;\x0A#ifdef SKIN_NO_SUBDERMIS_TEX\x0As.fH=uSubdermisColor;s.fR=1.0;\x0A#else \x0AJ=R(j,uTexRangeSubdermis,tExtras);s.fH=L(J.xyz);s.fR=J.w*J.w;\x0A#endif\x0As.fP=uTransColor.rgb;s.fQ=uTransColor.a;\x0A#ifndef SKIN_NO_TRANSLUCENCY_TEX\x0AJ=R(j,uTexRangeTranslucency,tExtrasSkin);s.fP*=L(J.xyz);\x0A#endif\x0A s.fM=fj(tNormal,j,uNormalSmooth*s.fR);   vec3 fS,fT,fU;eo(fS,fT,fU,s.fM);s.dm=s.fI=fS+fT+fU;s.di=eD(fS,fT,fU,vec3(1.0,0.6667,0.25),s.fH);vec3 fV,fW,fX;eo(fV,fW,fX,-s.fM);s.fL=eB(fV,fW,fX,vec3(1.0,0.4444,0.0625),s.fQ);s.fL*=uTransSky;s.fJ=s.fK=s.eP=vec3(0.0);s.dJ=uSkinShadowBlur*s.fR;s.fH*=0.5;s.fQ*=0.5;s.fN=uFresnelColor.rgb;s.fO=uFresnelColor.aaa*vec3(1.0,0.5,0.25);\x0A#ifndef SKIN_NO_FUZZ_TEX\x0AJ=R(j,uTexRangeFuzz,tExtras);s.fN*=L(J.rgb);\x0A#endif\x0A}void dN(inout de s,float eS,float fY,vec3 dK,vec3 N,vec3 dM){float dZ=dot(dK,N);float fZ=dot(dK,s.fM);float dQ=saturate((1.0/3.1415926)*dZ);vec3 hc=ed(fZ,s.fH);float hd=dY(-fZ,s.fQ);vec3 fK=vec3(hd*hd);\x0A#ifdef SHADOW_COUNT\x0Afloat he=fY;vec3 hf=vec3(fY);float hh=saturate(eS-2.0*(fY*fY));hf+=hh*s.fH;\x0A#endif\x0Afloat eT=dY(fZ,s.fO.z);\x0A#ifdef SHADOW_COUNT\x0Avec3 eU=mix(vec3(1.0),hf,uFresnelOcc);vec3 eP=eT*eU;\x0A#else\x0Avec3 eP=vec3(eT);\x0A#endif\x0A#ifdef SHADOW_COUNT\x0Ahc*=hf;fK*=he;dQ*=eS;\x0A#endif\x0As.eP=eP*dM+s.eP;s.fK=fK*dM+s.fK;s.fJ=hc*dM+s.fJ;s.fI=dQ*dM+s.fI;}void dT(out vec3 dn,out vec3 diff_extra,inout de s,vec3 T,vec3 N,float V){s.eP*=uFresnelIntegral;float el=dot(T,N);vec2 eV=ek(vec2(el,el),s.fO.xy);s.eP=s.dm*eV.x+(s.eP*eV.y);s.eP*=s.fN;float eW=saturate(1.0+-uFresnelGlossMask*V);s.eP*=eW*eW;s.fJ=s.fJ*ef(s.fH)+s.di;s.fK=s.fK*uTransIntegral+s.fL;s.fK*=s.fP;dn=mix(s.fI,s.fJ,s.fR);diff_extra=(s.eP+s.fK)*s.fR;}\x0A#endif\x0A",
      "matstrips.glsl": "\x0A#ifdef STRIPVIEW\x0Auniform float uStrips[5];uniform vec2 uStripRes;struct Y{float hi[5];float bg;};void dc(out Y hj,inout float V,inout vec3 U){highp vec2 fd=gl_FragCoord.xy*uStripRes-vec2(1.0,1.0);fd.x+=0.25*fd.y;hj.hi[0]=step(fd.x,uStrips[0]);hj.hi[1]=step(fd.x,uStrips[1]);hj.hi[2]=step(fd.x,uStrips[2]);hj.hi[3]=step(fd.x,uStrips[3]);hj.hi[4]=step(fd.x,uStrips[4]);hj.bg=1.0-hj.hi[4];hj.hi[4]-=hj.hi[3];hj.hi[3]-=hj.hi[2];hj.hi[2]-=hj.hi[1];hj.hi[1]-=hj.hi[0];bool hk=hj.hi[4]>0.0;V=hk?0.5:V;U=hk?vec3(0.1):U;}vec3 dX(Y hj,vec3 N,vec3 K,vec3 U,float V,vec3 dn,vec3 dA,vec3 hl){return hj.hi[0]*(N*0.5+vec3(0.5))+hj.hi[1]*K+hj.hi[2]*U+vec3(hj.hi[3]*V)+hj.hi[4]*(vec3(0.12)+0.3*dn+dA)+hj.bg*hl;}\x0A#endif\x0A",
      "matvert.glsl": "precision highp float;uniform mat4 uModelViewProjectionMatrix;uniform mat4 uSkyMatrix;attribute vec3 vPosition;attribute vec2 vTexCoord;attribute vec2 vTangent;attribute vec2 vBitangent;attribute vec2 vNormal;\x0A#ifdef VERTEX_COLOR\x0Aattribute vec4 vColor;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0Aattribute vec2 vTexCoord2;\x0A#endif\x0Avarying highp vec3 D;varying mediump vec2 j;varying mediump vec3 E;varying mediump vec3 F;varying mediump vec3 G;\x0A#ifdef VERTEX_COLOR\x0Avarying lowp vec4 H;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0Avarying mediump vec2 I;\x0A#endif\x0Avec3 hm(vec2 hn){bool ho=(hn.y>(32767.1/65535.0));hn.y=ho?(hn.y-(32768.0/65535.0)):hn.y;vec3 r;r.xy=(2.0*65535.0/32767.0)*hn-vec2(1.0);r.z=sqrt(clamp(1.0-dot(r.xy,r.xy),0.0,1.0));r.z=ho?-r.z:r.z;return r;}vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}vec3 hu(mat4 o,vec3 hn){return o[0].xyz*hn.x+o[1].xyz*hn.y+o[2].xyz*hn.z;}void main(void){gl_Position=m(uModelViewProjectionMatrix,vPosition.xyz);j=vTexCoord;E=hu(uSkyMatrix,hm(vTangent));F=hu(uSkyMatrix,hm(vBitangent));G=hu(uSkyMatrix,hm(vNormal));D=m(uSkyMatrix,vPosition.xyz).xyz;\x0A#ifdef VERTEX_COLOR\x0AH=vColor;\x0A#endif\x0A#ifdef TEXCOORD_SECONDARY\x0AI=vTexCoord2;\x0A#endif\x0A}",
      "postfrag.glsl": "precision mediump float;uniform sampler2D tInput;\x0A#ifdef BLOOM\x0Auniform sampler2D tBloom;\x0A#endif\x0A#ifdef GRAIN\x0Auniform sampler2D tGrain;\x0A#endif\x0A#ifdef COLOR_LUT\x0Auniform sampler2D tLUT;\x0A#endif\x0Auniform vec3 uScale;uniform vec3 uBias;uniform vec3 uSaturation;uniform vec4 uSharpenKernel;uniform vec3 uSharpness;uniform vec3 uBloomColor;uniform vec4 uVignetteAspect;uniform vec4 uVignette;uniform vec4 uGrainCoord;uniform vec2 uGrainScaleBias;varying vec2 d;vec3 hv(vec3 c){vec3 hA=sqrt(c);return(hA-hA*c)+c*(0.4672*c+vec3(0.5328));}void main(void){vec4 hB=texture2D(tInput,d);vec3 c=hB.xyz;\x0A#ifdef SHARPEN\x0Avec3 fA=texture2D(tInput,d+uSharpenKernel.xy).xyz;fA+=texture2D(tInput,d-uSharpenKernel.xy).xyz;fA+=texture2D(tInput,d+uSharpenKernel.zw).xyz;fA+=texture2D(tInput,d-uSharpenKernel.zw).xyz;vec3 hC=uSharpness.x*c-uSharpness.y*fA;c+=clamp(hC,-uSharpness.z,uSharpness.z);\x0A#endif\x0A#ifdef BLOOM\x0Ac+=uBloomColor*texture2D(tBloom,d).xyz;\x0A#endif\x0A#ifdef VIGNETTE\x0Avec2 hD=d*uVignetteAspect.xy-uVignetteAspect.zw;vec3 hn=clamp(vec3(1.0,1.0,1.0)-uVignette.xyz*dot(hD,hD),0.0,1.0);vec3 hE=hn*hn;hE*=hn;hE*=hn;hE*=hn;c*=mix(hn,hE,uVignette.w);\x0A#endif\x0A#ifdef SATURATION\x0Afloat gray=dot(c,vec3(0.3,0.59,0.11));c=mix(vec3(gray,gray,gray),c,uSaturation);\x0A#endif\x0A#ifdef CONTRAST\x0Ac=c*uScale+uBias;\x0A#endif\x0A#ifdef GRAIN\x0Afloat hF=uGrainScaleBias.x*texture2D(tGrain,d*uGrainCoord.xy+uGrainCoord.zw).x+uGrainScaleBias.y;c+=c*hF;\x0A#endif\x0A#ifdef REINHARD\x0A{c*=1.8;float hG=dot(c,vec3(0.3333));c=clamp(c/(1.0+hG),0.0,1.0);}\x0A#elif defined(HEJL)\x0A{const highp float hH=0.22,hI=0.3,hJ=.1,hK=0.2,hL=.01,hM=0.3;const highp float hN=1.25;highp vec3 dR=max(vec3(0.0),c-vec3(.004));c=(dR*((hN*hH)*dR+hN*vec3(hJ*hI,hJ*hI,hJ*hI))+hN*vec3(hK*hL,hK*hL,hK*hL))/(dR*(hH*dR+vec3(hI,hI,hI))+vec3(hK*hM,hK*hM,hK*hM))-hN*vec3(hL/hM,hL/hM,hL/hM);}\x0A#endif\x0A#ifdef COLOR_LUT\x0Ac=clamp(c,0.0,1.0);c=(255.0/256.0)*c+vec3(0.5/256.0);c.x=texture2D(tLUT,c.xx).x;c.y=texture2D(tLUT,c.yy).y;c.z=texture2D(tLUT,c.zz).z;c*=c;\x0A#endif\x0Agl_FragColor.xyz=hv(c);gl_FragColor.w=hB.w;}",
      "postvert.glsl": "precision highp float;attribute vec2 vCoord;varying vec2 d;void main(void){d=vCoord;gl_Position.xy=2.0*vCoord-vec2(1.0,1.0);gl_Position.zw=vec2(0.0,1.0);}",
      "shadowfrag.glsl": "precision highp float;varying vec2 hO;\x0A#ifdef ALPHA_TEST\x0Avarying mediump vec2 j;uniform sampler2D tAlbedo;\x0A#endif\x0Avec3 hP(float hn){vec4 hQ=vec4(1.0,255.0,65025.0,16581375.0)*hn;hQ=fract(hQ);hQ.xyz-=hQ.yzw*(1.0/255.0);return hQ.xyz;}void main(void){\x0A#ifdef ALPHA_TEST\x0Afloat k=texture2D(tAlbedo,j).a;if(k<0.5){discard;}\x0A#endif\x0Agl_FragColor.xyz=hP((hO.x/hO.y)*0.5+0.5);gl_FragColor.w=0.0;}",
      "shadowvert.glsl": "precision highp float;attribute vec3 vPosition;attribute vec2 vTexCoord;uniform mat4 uViewProjection;varying vec2 hO;\x0A#ifdef ALPHA_TEST\x0Avarying mediump vec2 j;\x0A#endif\x0Avec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(void){gl_Position=m(uViewProjection,vPosition);hO=gl_Position.zw;\x0A#ifdef ALPHA_TEST\x0Aj=vTexCoord;\x0A#endif\x0A}",
      "sky.glsl": "precision highp float;uniform sampler2D tSkyTexture;uniform float uAlpha;varying vec2 j;void main(void){vec3 r=texture2D(tSkyTexture,j).xyz;gl_FragColor.xyz=r*r;gl_FragColor.w=uAlpha;}",
      "skySH.glsl": "precision mediump float;uniform vec4 uSkyCoefficients[9];uniform float uAlpha;varying vec3 hR;void main(void){vec3 C=normalize(hR);vec3 r=uSkyCoefficients[0].xyz;r+=uSkyCoefficients[1].xyz*C.y;r+=uSkyCoefficients[2].xyz*C.z;r+=uSkyCoefficients[3].xyz*C.x;vec3 swz=C.yyz*C.xzx;r+=uSkyCoefficients[4].xyz*swz.x;r+=uSkyCoefficients[5].xyz*swz.y;r+=uSkyCoefficients[7].xyz*swz.z;vec3 sqr=C*C;r+=uSkyCoefficients[6].xyz*(3.0*sqr.z-1.0);r+=uSkyCoefficients[8].xyz*(sqr.x-sqr.y);gl_FragColor.xyz=r;gl_FragColor.w=uAlpha;}",
      "skyvert.glsl": "precision highp float;uniform mat4 uInverseSkyMatrix;uniform mat4 uViewProjection;attribute vec3 vPosition;attribute vec2 vTexCoord;\x0A#if SKYMODE == 3\x0Avarying vec3 hR;\x0A#else\x0Avarying vec2 j;\x0A#endif\x0Avec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}vec4 hu(mat4 o,vec3 hn){return o[0]*hn.x+o[1]*hn.y+o[2]*hn.z;}void main(void){vec3 p=m(uInverseSkyMatrix,vPosition).xyz;gl_Position=hu(uViewProjection,p);gl_Position.z-=(1.0/65535.0)*gl_Position.w;\x0A#if SKYMODE == 3\x0AhR=vPosition;hR.xy+=1e-20*vTexCoord;\x0A#else\x0Aj=vTexCoord;\x0A#endif\x0A}",
      "outlinevert.glsl": "precision highp float;attribute vec3 vPosition;attribute vec2 vNormal;\x0Auniform mat4 uModelViewProjectionMatrix;\x0A uniform float offset;\x0Avec4 m(mat4 o,vec3 p){\x0A return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));\x0A}\x0A vec3 hm(vec2 hn){bool ho=(hn.y>(32767.1/65535.0));hn.y=ho?(hn.y-(32768.0/65535.0)):hn.y;vec3 r;r.xy=(2.0*65535.0/32767.0)*hn-vec2(1.0);r.z=sqrt(clamp(1.0-dot(r.xy,r.xy),0.0,1.0));r.z=ho?-r.z:r.z;return r;}\x0Avoid main(void){\x0A  vec3 position=vPosition+hm(vNormal)*offset;\x0A gl_Position=m(uModelViewProjectionMatrix,position.xyz);}",
      "outlinefrag.glsl": "\x0A#extension GL_OES_standard_derivatives : enable \x0Aprecision mediump float;\x0Auniform float alpha;uniform vec3 color;\x0A\x0Avoid main(void){\x0A gl_FragColor = vec4(color,alpha);\x0A}",
      "wirefrag.glsl": "precision highp float;uniform vec4 uStripParams;void main(void){vec2 c=gl_FragCoord.xy*uStripParams.xy-vec2(1.0,1.0);c.x+=0.25*c.y;float a=c.x<uStripParams.z?0.0:0.9;a=c.x<uStripParams.w?a:0.0;gl_FragColor=vec4(0.0,0.0,0.0,a);}",
      "wirevert.glsl": "precision highp float;uniform mat4 uModelViewProjectionMatrix;attribute vec3 vPosition;vec4 m(mat4 o,vec3 p){return o[0]*p.x+(o[1]*p.y+(o[2]*p.z+o[3]));}void main(void){gl_Position=m(uModelViewProjectionMatrix,vPosition);gl_Position.z+=-0.00005*gl_Position.w;}",
      nil: ""
    }
  }
  dom = {};
  dom.addClass = _$af5398992;
  dom.removeClass = _$af5398993;
  dom.hasClass = _$af5398994;
  dom.id = _$af5398995;
  dom.Tag = _$af5398996;
  dom.cla = _$af5398997;
  dom.ifVoid = _$af5398998;
  dom.objToArray = _$af5398999;
  Clamp = _$af5399000;
  codeToCh = _$af5399001;
  fdage = {};
  (_$af5399002)(fdage)
})()