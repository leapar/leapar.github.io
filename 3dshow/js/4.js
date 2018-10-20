(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    187: function(i, s, e) {
        "use strict";
        e.d(s, "a", function() {
            return n
        });
        var o = e(52)
          , t = e(25)
          , r = e(5)
          , a = e(17);
        function n(i, s, e, o, l, w, u, p, c, h) {
            Object.defineProperty(this, "id", {
                value: d++
            }),
            this.uuid = r.a.generateUUID(),
            this.name = "",
            this.sourceFile = "",
            this.image = void 0 !== i ? i : n.DEFAULT_IMAGE,
            this.mipmaps = [],
            this.mapping = void 0 !== s ? s : n.DEFAULT_MAPPING,
            this.wrapS = void 0 !== e ? e : t.j,
            this.wrapT = void 0 !== o ? o : t.j,
            this.magFilter = void 0 !== l ? l : t.M,
            this.minFilter = void 0 !== w ? w : t.N,
            this.anisotropy = void 0 !== c ? c : 1,
            this.format = void 0 !== u ? u : t.Qa,
            this.type = void 0 !== p ? p : t.vb,
            this.offset = new a.a(0,0),
            this.repeat = new a.a(1,1),
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = void 0 !== h ? h : t.L,
            this.version = 0,
            this.onUpdate = null
        }
        n.DEFAULT_IMAGE = void 0,
        n.DEFAULT_MAPPING = t.tb,
        n.prototype = {
            constructor: n,
            isTexture: !0,
            set needsUpdate(i) {
                !0 === i && this.version++
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(i) {
                return this.image = i.image,
                this.mipmaps = i.mipmaps.slice(0),
                this.mapping = i.mapping,
                this.wrapS = i.wrapS,
                this.wrapT = i.wrapT,
                this.magFilter = i.magFilter,
                this.minFilter = i.minFilter,
                this.anisotropy = i.anisotropy,
                this.format = i.format,
                this.type = i.type,
                this.offset.copy(i.offset),
                this.repeat.copy(i.repeat),
                this.generateMipmaps = i.generateMipmaps,
                this.premultiplyAlpha = i.premultiplyAlpha,
                this.flipY = i.flipY,
                this.unpackAlignment = i.unpackAlignment,
                this.encoding = i.encoding,
                this
            },
            toJSON: function(i) {
                if (void 0 !== i.textures[this.uuid])
                    return i.textures[this.uuid];
                var s = {
                    metadata: {
                        version: 4.4,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    wrap: [this.wrapS, this.wrapT],
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY
                };
                if (void 0 !== this.image) {
                    var e = this.image;
                    void 0 === e.uuid && (e.uuid = r.a.generateUUID()),
                    void 0 === i.images[e.uuid] && (i.images[e.uuid] = {
                        uuid: e.uuid,
                        url: function(i) {
                            var s;
                            return void 0 !== i.toDataURL ? s = i : ((s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = i.width,
                            s.height = i.height,
                            s.getContext("2d").drawImage(i, 0, 0, i.width, i.height)),
                            s.width > 2048 || s.height > 2048 ? s.toDataURL("image/jpeg", .6) : s.toDataURL("image/png")
                        }(e)
                    }),
                    s.image = e.uuid
                }
                return i.textures[this.uuid] = s,
                s
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(i) {
                if (this.mapping === t.tb) {
                    if (i.multiply(this.repeat),
                    i.add(this.offset),
                    i.x < 0 || i.x > 1)
                        switch (this.wrapS) {
                        case t.gb:
                            i.x = i.x - Math.floor(i.x);
                            break;
                        case t.j:
                            i.x = i.x < 0 ? 0 : 1;
                            break;
                        case t.U:
                            1 === Math.abs(Math.floor(i.x) % 2) ? i.x = Math.ceil(i.x) - i.x : i.x = i.x - Math.floor(i.x)
                        }
                    if (i.y < 0 || i.y > 1)
                        switch (this.wrapT) {
                        case t.gb:
                            i.y = i.y - Math.floor(i.y);
                            break;
                        case t.j:
                            i.y = i.y < 0 ? 0 : 1;
                            break;
                        case t.U:
                            1 === Math.abs(Math.floor(i.y) % 2) ? i.y = Math.ceil(i.y) - i.y : i.y = i.y - Math.floor(i.y)
                        }
                    this.flipY && (i.y = 1 - i.y)
                }
            }
        },
        Object.assign(n.prototype, o.a.prototype);
        var d = 0
    },
    236: function(i, s, e) {
        "use strict";
        e.d(s, "a", function() {
            return l
        });
        var o, t, r = e(7), a = e(3), n = e(66), d = e(1);
        function l() {
            n.a.call(this),
            this.type = "Camera",
            this.matrixWorldInverse = new r.a,
            this.projectionMatrix = new r.a
        }
        l.prototype = Object.create(n.a.prototype),
        l.prototype.constructor = l,
        l.prototype.isCamera = !0,
        l.prototype.getWorldDirection = (o = new a.a,
        function(i) {
            var s = i || new d.a;
            return this.getWorldQuaternion(o),
            s.set(0, 0, -1).applyQuaternion(o)
        }
        ),
        l.prototype.lookAt = (t = new r.a,
        function(i) {
            t.lookAt(this.position, i, this.up),
            this.quaternion.setFromRotationMatrix(t)
        }
        ),
        l.prototype.clone = function() {
            return (new this.constructor).copy(this)
        }
        ,
        l.prototype.copy = function(i) {
            return n.a.prototype.copy.call(this, i),
            this.matrixWorldInverse.copy(i.matrixWorldInverse),
            this.projectionMatrix.copy(i.projectionMatrix),
            this
        }
    },
    336: function(i, s, e) {
        var o;
        /*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
        /*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
        !function(t, r) {
            "use strict";
            var a = "model"
              , n = "name"
              , d = "type"
              , l = "vendor"
              , w = "version"
              , u = "mobile"
              , p = "tablet"
              , c = {
                extend: function(i, s) {
                    var e = {};
                    for (var o in i)
                        s[o] && s[o].length % 2 == 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
                    return e
                },
                has: function(i, s) {
                    return "string" == typeof i && -1 !== s.toLowerCase().indexOf(i.toLowerCase())
                },
                lowerize: function(i) {
                    return i.toLowerCase()
                },
                major: function(i) {
                    return "string" == typeof i ? i.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(i) {
                    return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }
              , h = {
                rgx: function(i, s) {
                    for (var e, o, t, r, a, n, d = 0; d < s.length && !a; ) {
                        var l = s[d]
                          , w = s[d + 1];
                        for (e = o = 0; e < l.length && !a; )
                            if (a = l[e++].exec(i))
                                for (t = 0; t < w.length; t++)
                                    n = a[++o],
                                    "object" == typeof (r = w[t]) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? this[r[0]] = r[1].call(this, n) : this[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? this[r[0]] = n ? n.replace(r[1], r[2]) : void 0 : this[r[0]] = n ? r[1].call(this, n, r[2]) : void 0 : 4 == r.length && (this[r[0]] = n ? r[3].call(this, n.replace(r[1], r[2])) : void 0) : this[r] = n || void 0;
                        d += 2
                    }
                },
                str: function(i, s) {
                    for (var e in s)
                        if ("object" == typeof s[e] && s[e].length > 0) {
                            for (var o = 0; o < s[e].length; o++)
                                if (c.has(s[e][o], i))
                                    return "?" === e ? void 0 : e
                        } else if (c.has(s[e], i))
                            return "?" === e ? void 0 : e;
                    return i
                }
            }
              , m = {
                browser: {
                    oldsafari: {
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
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
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
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            }
              , b = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [n, w], [/(opios)[\/\s]+([\w\.]+)/i], [[n, "Opera Mini"], w], [/\s(opr)\/([\w\.]+)/i], [[n, "Opera"], w], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [n, w], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[n, "IE"], w], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[n, "Edge"], w], [/(yabrowser)\/([\w\.]+)/i], [[n, "Yandex"], w], [/(puffin)\/([\w\.]+)/i], [[n, "Puffin"], w], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[n, "UCBrowser"], w], [/(comodo_dragon)\/([\w\.]+)/i], [[n, /_/g, " "], w], [/(micromessenger)\/([\w\.]+)/i], [[n, "WeChat"], w], [/(qqbrowserlite)\/([\w\.]+)/i], [n, w], [/(QQ)\/([\d\.]+)/i], [n, w], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [n, w], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [n, w], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [n, w], [/(MetaSr)[\/\s]?([\w\.]+)/i], [n], [/(LBBROWSER)/i], [n], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [w, [n, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [w, [n, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [w, [n, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[n, /(.+)/, "$1 WebView"], w], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[n, /(.+(?:g|us))(.+)/, "$1 $2"], w], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [w, [n, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [n, w], [/(dolfin)\/([\w\.]+)/i], [[n, "Dolphin"], w], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[n, "Chrome"], w], [/(coast)\/([\w\.]+)/i], [[n, "Opera Coast"], w], [/fxios\/([\w\.-]+)/i], [w, [n, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [w, [n, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [w, n], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[n, "GSA"], w], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [n, [w, h.str, m.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [n, w], [/(navigator|netscape)\/([\w\.-]+)/i], [[n, "Netscape"], w], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [n, w]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", c.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", c.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", c.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [a, l, [d, p]], [/applecoremedia\/[\w\.]+ \((ipad)/], [a, [l, "Apple"], [d, p]], [/(apple\s{0,1}tv)/i], [[a, "Apple TV"], [l, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [l, a, [d, p]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [a, [l, "Amazon"], [d, p]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[a, h.str, m.device.amazon.model], [l, "Amazon"], [d, u]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [a, l, [d, u]], [/\((ip[honed|\s\w*]+);/i], [a, [l, "Apple"], [d, u]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [l, a, [d, u]], [/\(bb10;\s(\w+)/i], [a, [l, "BlackBerry"], [d, u]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [a, [l, "Asus"], [d, p]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[l, "Sony"], [a, "Xperia Tablet"], [d, p]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [a, [l, "Sony"], [d, u]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [l, a, [d, "console"]], [/android.+;\s(shield)\sbuild/i], [a, [l, "Nvidia"], [d, "console"]], [/(playstation\s[34portablevi]+)/i], [a, [l, "Sony"], [d, "console"]], [/(sprint\s(\w+))/i], [[l, h.str, m.device.sprint.vendor], [a, h.str, m.device.sprint.model], [d, u]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [l, a, [d, p]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [l, [a, /_/g, " "], [d, u]], [/(nexus\s9)/i], [a, [l, "HTC"], [d, p]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [a, [l, "Huawei"], [d, u]], [/(microsoft);\s(lumia[\s\w]+)/i], [l, a, [d, u]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [a, [l, "Microsoft"], [d, "console"]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [l, "Microsoft"], [d, u]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [a, [l, "Motorola"], [d, u]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [a, [l, "Motorola"], [d, p]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[l, c.trim], [a, c.trim], [d, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [l, "Samsung"], [d, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [a, [l, "Sharp"], [d, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[l, "Samsung"], a, [d, p]], [/smart-tv.+(samsung)/i], [l, [d, "smarttv"], a], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[l, "Samsung"], a, [d, u]], [/sie-(\w*)/i], [a, [l, "Siemens"], [d, u]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[l, "Nokia"], a, [d, u]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [a, [l, "Acer"], [d, p]], [/android.+([vl]k\-?\d{3})\s+build/i], [a, [l, "LG"], [d, p]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[l, "LG"], a, [d, p]], [/(lg) netcast\.tv/i], [l, a, [d, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [a, [l, "LG"], [d, u]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [a, [l, "Lenovo"], [d, p]], [/linux;.+((jolla));/i], [l, a, [d, u]], [/((pebble))app\/[\d\.]+\s/i], [l, a, [d, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [l, a, [d, u]], [/crkey/i], [[a, "Chromecast"], [l, "Google"]], [/android.+;\s(glass)\s\d/i], [a, [l, "Google"], [d, "wearable"]], [/android.+;\s(pixel c)\s/i], [a, [l, "Google"], [d, p]], [/android.+;\s(pixel xl|pixel)\s/i], [a, [l, "Google"], [d, u]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [l, "Xiaomi"], [d, u]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [l, "Xiaomi"], [d, p]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [a, [l, "Meizu"], [d, p]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [a, [l, "OnePlus"], [d, u]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [a, [l, "RCA"], [d, p]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [a, [l, "Dell"], [d, p]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [a, [l, "Verizon"], [d, p]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[l, "Barnes & Noble"], a, [d, p]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [a, [l, "NuVision"], [d, p]], [/android.+;\s(k88)\sbuild/i], [a, [l, "ZTE"], [d, p]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [a, [l, "Swiss"], [d, u]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [a, [l, "Swiss"], [d, p]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [a, [l, "Zeki"], [d, p]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[l, "Dragon Touch"], a, [d, p]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [a, [l, "Insignia"], [d, p]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [a, [l, "NextBook"], [d, p]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[l, "Voice"], a, [d, u]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[l, "LvTel"], a, [d, u]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [a, [l, "Envizen"], [d, p]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [l, a, [d, p]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [a, [l, "MachSpeed"], [d, p]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [l, a, [d, p]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [a, [l, "Rotor"], [d, p]], [/android.+(KS(.+))\s+build/i], [a, [l, "Amazon"], [d, p]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [l, a, [d, p]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[d, c.lowerize], l, a], [/(android[\w\.\s\-]{0,9});.+build/i], [a, [l, "Generic"]]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [w, [n, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [n, w], [/rv\:([\w\.]{1,9}).+(gecko)/i], [w, n]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [n, w], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [n, [w, h.str, m.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[n, "Windows"], [w, h.str, m.os.windows.version]], [/\((bb)(10);/i], [[n, "BlackBerry"], w], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [n, w], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[n, "Symbian"], w], [/\((series40);/i], [n], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[n, "Firefox OS"], w], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [n, w], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[n, "Chromium OS"], w], [/(sunos)\s?([\w\.\d]*)/i], [[n, "Solaris"], w], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [n, w], [/(haiku)\s(\w+)/i], [n, w], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[w, /_/g, "."], [n, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[n, "Mac OS"], [w, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [n, w]]
            }
              , g = function(i, s) {
                if ("object" == typeof i && (s = i,
                i = void 0),
                !(this instanceof g))
                    return new g(i,s).getResult();
                var e = i || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : "")
                  , o = s ? c.extend(b, s) : b;
                return this.getBrowser = function() {
                    var i = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(i, e, o.browser),
                    i.major = c.major(i.version),
                    i
                }
                ,
                this.getCPU = function() {
                    var i = {
                        architecture: void 0
                    };
                    return h.rgx.call(i, e, o.cpu),
                    i
                }
                ,
                this.getDevice = function() {
                    var i = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return h.rgx.call(i, e, o.device),
                    i
                }
                ,
                this.getEngine = function() {
                    var i = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(i, e, o.engine),
                    i
                }
                ,
                this.getOS = function() {
                    var i = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(i, e, o.os),
                    i
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
                    return e
                }
                ,
                this.setUA = function(i) {
                    return e = i,
                    this
                }
                ,
                this
            };
            g.VERSION = "0.7.18",
            g.BROWSER = {
                NAME: n,
                MAJOR: "major",
                VERSION: w
            },
            g.CPU = {
                ARCHITECTURE: "architecture"
            },
            g.DEVICE = {
                MODEL: a,
                VENDOR: l,
                TYPE: d,
                CONSOLE: "console",
                MOBILE: u,
                SMARTTV: "smarttv",
                TABLET: p,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            },
            g.ENGINE = {
                NAME: n,
                VERSION: w
            },
            g.OS = {
                NAME: n,
                VERSION: w
            },
            void 0 !== s ? (void 0 !== i && i.exports && (s = i.exports = g),
            s.UAParser = g) : e(622) ? void 0 === (o = function() {
                return g
            }
            .call(s, e, s, i)) || (i.exports = o) : t && (t.UAParser = g);
            var f = t && (t.jQuery || t.Zepto);
            if (void 0 !== f) {
                var v = new g;
                f.ua = v.getResult(),
                f.ua.get = function() {
                    return v.getUA()
                }
                ,
                f.ua.set = function(i) {
                    v.setUA(i);
                    var s = v.getResult();
                    for (var e in s)
                        f.ua[e] = s[e]
                }
            }
        }("object" == typeof window ? window : this)
    },
    622: function(i, s) {
        (function(s) {
            i.exports = s
        }
        ).call(this, {})
    }
}]);
