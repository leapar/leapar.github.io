(function(d, a) {
  var b = function() {
    var a = !![];
    return function(d, b) {
      var c = a ? function() {
        if (b) {
          var a = b['apply'](d, arguments);
          b = null;
          return a;
        }
      } : function() {};
      a = ![];
      return c;
    };
  }();
  var c = b(this, function() {
    var b = function() {
        return '\x64\x65\x76';
      },
      c = function() {
        return '\x77\x69\x6e\x64\x6f\x77';
      };
    var d = function() {
      var a = new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');
      return false;
    };
    var e = function() {
      var a = new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');
      return true;
    };
    var a = function(a) {
      var b = ~-0x1 >> 0x1 + 0xff % 0x0;
      if (a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69' === b)) {
        f(a);
      }
    };
    var f = function(b) {
      var c = ~-0x4 >> 0x1 + 0xff % 0x0;
      if (b['\x69\x6e\x64\x65\x78\x4f\x66']((!![] + '')[0x3]) !== c) {
        a(b);
      }
    };
    if (!d()) {
      if (!e()) {
        a('\x69\x6e\x64\u0435\x78\x4f\x66');
      } else {
        a('\x69\x6e\x64\x65\x78\x4f\x66');
      }
    } else {
      a('\x69\x6e\x64\u0435\x78\x4f\x66');
    }
  });
  c();
  typeof exports === 'object' && typeof module !== 'undefined' ? module['exports'] = a() : typeof define === 'function' && define['amd'] ? define(a) : d['SPAR'] = a();
}(this, function() {
  'use strict';
  var k = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function j(b, a) {
    return a = {
      'exports': {}
    }, b(a, a['exports']), a['exports'];
  }
  var z = j(function(a) {
    (function(b) {
      'use strict';
      var c = b['Blob'] && function() {
        try {
          return Boolean(new Blob());
        } catch (a) {
          return ![];
        }
      }();
      var f = c && b['Uint8Array'] && function() {
        try {
          return new Blob([new Uint8Array(0x64)])['size'] === 0x64;
        } catch (a) {
          return ![];
        }
      }();
      var e = b['BlobBuilder'] || b['WebKitBlobBuilder'] || b['MozBlobBuilder'] || b['MSBlobBuilder'];
      var g = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
      var d = (c || e) && b['atob'] && b['ArrayBuffer'] && b['Uint8Array'] && function(m) {
        var a, k, n, i, d, h, j, b, l;
        a = m['match'](g);
        if (!a) {
          throw new Error('invalid data URI');
        }
        k = a[0x2] ? a[0x1] : 'text/plain' + (a[0x3] || ';charset=US-ASCII');
        n = !!a[0x4];
        i = m['slice'](a[0x0]['length']);
        if (n) {
          d = atob(i);
        } else {
          d = decodeURIComponent(i);
        }
        h = new ArrayBuffer(d['length']);
        j = new Uint8Array(h);
        for (b = 0x0; b < d['length']; b += 0x1) {
          j[b] = d['charCodeAt'](b);
        }
        if (c) {
          return new Blob([f ? j : h], {
            'type': k
          });
        }
        l = new e();
        l['append'](h);
        return l['getBlob'](k);
      };
      if (typeof undefined === 'function' && undefined['amd']) {
        undefined(function() {
          return d;
        });
      } else if ('object' === 'object' && a['exports']) {
        a['exports'] = d;
      } else {
        b['dataURLtoBlob'] = d;
      }
    }(window));
  });
  var c = j(function(a) {
    ! function(d, c, b) {
      if ('object' != 'undefined' && a['exports']) a['exports'] = b();
      else if (typeof undefined == 'function' && undefined['amd']) undefined(c, b);
      else d[c] = b();
    }(k, 'bowser', function() {
      var a = !![];

      function c(c) {
        function d(b) {
          var a = c['match'](b);
          return a && a['length'] > 0x1 && a[0x1] || '';
        }

        function B(b) {
          var a = c['match'](b);
          return a && a['length'] > 0x1 && a[0x2] || '';
        }
        var g = d(/(ipod|iphone|ipad)/i)['toLowerCase'](),
          v = /like android/i ['test'](c),
          h = !v && /android/i ['test'](c),
          q = /nexus\s*[0-6]\s*/i ['test'](c),
          s = !q && /nexus\s*[0-9]+/i ['test'](c),
          w = /CrOS/ ['test'](c),
          l = /silk/i ['test'](c),
          m = /sailfish/i ['test'](c),
          n = /tizen/i ['test'](c),
          o = /(web|hpw)os/i ['test'](c),
          j = /windows phone/i ['test'](c),
          z = /SamsungBrowser/i ['test'](c),
          u = !j && /windows/i ['test'](c),
          t = !g && !l && /macintosh/i ['test'](c),
          x = !h && !m && !n && !o && /linux/i ['test'](c),
          i = d(/edge\/(\d+(\.\d+)?)/i),
          e = d(/version\/(\d+(\.\d+)?)/i),
          k = /tablet/i ['test'](c) && !/tablet pc/i ['test'](c),
          r = !k && /[^-]mobi/i ['test'](c),
          y = /xbox/i ['test'](c),
          b;
        if (/opera/i ['test'](c)) {
          b = {
            'name': 'Opera',
            'opera': a,
            'version': e || d(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
          };
        } else if (/opr\/|opios/i ['test'](c)) {
          b = {
            'name': 'Opera',
            'opera': a,
            'version': d(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || e
          };
        } else if (/SamsungBrowser/i ['test'](c)) {
          b = {
            'name': 'Samsung Internet for Android',
            'samsungBrowser': a,
            'version': e || d(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
          };
        } else if (/coast/i ['test'](c)) {
          b = {
            'name': 'Opera Coast',
            'coast': a,
            'version': e || d(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
          };
        } else if (/yabrowser/i ['test'](c)) {
          b = {
            'name': 'Yandex Browser',
            'yandexbrowser': a,
            'version': e || d(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
          };
        } else if (/ucbrowser/i ['test'](c)) {
          b = {
            'name': 'UC Browser',
            'ucbrowser': a,
            'version': d(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
          };
        } else if (/mxios/i ['test'](c)) {
          b = {
            'name': 'Maxthon',
            'maxthon': a,
            'version': d(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
          };
        } else if (/epiphany/i ['test'](c)) {
          b = {
            'name': 'Epiphany',
            'epiphany': a,
            'version': d(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
          };
        } else if (/puffin/i ['test'](c)) {
          b = {
            'name': 'Puffin',
            'puffin': a,
            'version': d(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
          };
        } else if (/sleipnir/i ['test'](c)) {
          b = {
            'name': 'Sleipnir',
            'sleipnir': a,
            'version': d(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
          };
        } else if (/k-meleon/i ['test'](c)) {
          b = {
            'name': 'K-Meleon',
            'kMeleon': a,
            'version': d(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
          };
        } else if (j) {
          b = {
            'name': 'Windows Phone',
            'windowsphone': a
          };
          if (i) {
            b['msedge'] = a;
            b['version'] = i;
          } else {
            b['msie'] = a;
            b['version'] = d(/iemobile\/(\d+(\.\d+)?)/i);
          }
        } else if (/msie|trident/i ['test'](c)) {
          b = {
            'name': 'Internet Explorer',
            'msie': a,
            'version': d(/(?:msie |rv:)(\d+(\.\d+)?)/i)
          };
        } else if (w) {
          b = {
            'name': 'Chrome',
            'chromeos': a,
            'chromeBook': a,
            'chrome': a,
            'version': d(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          };
        } else if (/chrome.+? edge/i ['test'](c)) {
          b = {
            'name': 'Microsoft Edge',
            'msedge': a,
            'version': i
          };
        } else if (/vivaldi/i ['test'](c)) {
          b = {
            'name': 'Vivaldi',
            'vivaldi': a,
            'version': d(/vivaldi\/(\d+(\.\d+)?)/i) || e
          };
        } else if (m) {
          b = {
            'name': 'Sailfish',
            'sailfish': a,
            'version': d(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
          };
        } else if (/seamonkey\//i ['test'](c)) {
          b = {
            'name': 'SeaMonkey',
            'seamonkey': a,
            'version': d(/seamonkey\/(\d+(\.\d+)?)/i)
          };
        } else if (/firefox|iceweasel|fxios/i ['test'](c)) {
          b = {
            'name': 'Firefox',
            'firefox': a,
            'version': d(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
          };
          if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i ['test'](c)) {
            b['firefoxos'] = a;
          }
        } else if (l) {
          b = {
            'name': 'Amazon Silk',
            'silk': a,
            'version': d(/silk\/(\d+(\.\d+)?)/i)
          };
        } else if (/phantom/i ['test'](c)) {
          b = {
            'name': 'PhantomJS',
            'phantom': a,
            'version': d(/phantomjs\/(\d+(\.\d+)?)/i)
          };
        } else if (/slimerjs/i ['test'](c)) {
          b = {
            'name': 'SlimerJS',
            'slimer': a,
            'version': d(/slimerjs\/(\d+(\.\d+)?)/i)
          };
        } else if (/blackberry|\bbb\d+/i ['test'](c) || /rim\stablet/i ['test'](c)) {
          b = {
            'name': 'BlackBerry',
            'blackberry': a,
            'version': e || d(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
          };
        } else if (o) {
          b = {
            'name': 'WebOS',
            'webos': a,
            'version': e || d(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
          };
          /touchpad\//i ['test'](c) && (b['touchpad'] = a);
        } else if (/bada/i ['test'](c)) {
          b = {
            'name': 'Bada',
            'bada': a,
            'version': d(/dolfin\/(\d+(\.\d+)?)/i)
          };
        } else if (n) {
          b = {
            'name': 'Tizen',
            'tizen': a,
            'version': d(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || e
          };
        } else if (/qupzilla/i ['test'](c)) {
          b = {
            'name': 'QupZilla',
            'qupzilla': a,
            'version': d(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || e
          };
        } else if (/chromium/i ['test'](c)) {
          b = {
            'name': 'Chromium',
            'chromium': a,
            'version': d(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || e
          };
        } else if (/chrome|crios|crmo/i ['test'](c)) {
          b = {
            'name': 'Chrome',
            'chrome': a,
            'version': d(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          };
        } else if (h) {
          b = {
            'name': 'Android',
            'version': e
          };
        } else if (/safari|applewebkit/i ['test'](c)) {
          b = {
            'name': 'Safari',
            'safari': a
          };
          if (e) {
            b['version'] = e;
          }
        } else if (g) {
          b = {
            'name': g == 'iphone' ? 'iPhone' : g == 'ipad' ? 'iPad' : 'iPod'
          };
          if (e) {
            b['version'] = e;
          }
        } else if (/googlebot/i ['test'](c)) {
          b = {
            'name': 'Googlebot',
            'googlebot': a,
            'version': d(/googlebot\/(\d+(\.\d+))/i) || e
          };
        } else {
          b = {
            'name': d(/^(.*)\/(.*) /),
            'version': B(/^(.*)\/(.*) /)
          };
        }
        if (!b['msedge'] && /(apple)?webkit/i ['test'](c)) {
          if (/(apple)?webkit\/537\.36/i ['test'](c)) {
            b['name'] = b['name'] || 'Blink';
            b['blink'] = a;
          } else {
            b['name'] = b['name'] || 'Webkit';
            b['webkit'] = a;
          }
          if (!b['version'] && e) {
            b['version'] = e;
          }
        } else if (!b['opera'] && /gecko\//i ['test'](c)) {
          b['name'] = b['name'] || 'Gecko';
          b['gecko'] = a;
          b['version'] = b['version'] || d(/gecko\/(\d+(\.\d+)?)/i);
        }
        if (!b['windowsphone'] && !b['msedge'] && (h || b['silk'])) {
          b['android'] = a;
        } else if (!b['windowsphone'] && !b['msedge'] && g) {
          b[g] = a;
          b['ios'] = a;
        } else if (t) {
          b['mac'] = a;
        } else if (y) {
          b['xbox'] = a;
        } else if (u) {
          b['windows'] = a;
        } else if (x) {
          b['linux'] = a;
        }

        function A(a) {
          switch (a) {
            case 'NT':
              return 'NT';
            case 'XP':
              return 'XP';
            case 'NT 5.0':
              return '2000';
            case 'NT 5.1':
              return 'XP';
            case 'NT 5.2':
              return '2003';
            case 'NT\x206.0':
              return 'Vista';
            case 'NT\x206.1':
              return '7';
            case 'NT 6.2':
              return '8';
            case 'NT 6.3':
              return '8.1';
            case 'NT 10.0':
              return '10';
            default:
              return undefined;
          }
        }
        var f = '';
        if (b['windows']) {
          f = A(d(/Windows ((NT|XP)( \d\d?.\d)?)/i));
        } else if (b['windowsphone']) {
          f = d(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
        } else if (b['mac']) {
          f = d(/Mac OS X (\d+([_\.\s]\d+)*)/i);
          f = f['replace'](/[_\s]/g, '.');
        } else if (g) {
          f = d(/os (\d+([_\s]\d+)*) like mac os x/i);
          f = f['replace'](/[_\s]/g, '.');
        } else if (h) {
          f = d(/android[ \/-](\d+(\.\d+)*)/i);
        } else if (b['webos']) {
          f = d(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
        } else if (b['blackberry']) {
          f = d(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
        } else if (b['bada']) {
          f = d(/bada\/(\d+(\.\d+)*)/i);
        } else if (b['tizen']) {
          f = d(/tizen[\/\s](\d+(\.\d+)*)/i);
        }
        if (f) {
          b['osversion'] = f;
        }
        var p = !b['windows'] && f['split']('.')[0x0];
        if (k || s || g == 'ipad' || h && (p == 0x3 || p >= 0x4 && !r) || b['silk']) {
          b['tablet'] = a;
        } else if (r || g == 'iphone' || g == 'ipod' || h || q || b['blackberry'] || b['webos'] || b['bada']) {
          b['mobile'] = a;
        }
        if (b['msedge'] || b['msie'] && b['version'] >= 0xa || b['yandexbrowser'] && b['version'] >= 0xf || b['vivaldi'] && b['version'] >= 0x1 || b['chrome'] && b['version'] >= 0x14 || b['samsungBrowser'] && b['version'] >= 0x4 || b['firefox'] && b['version'] >= 0x14 || b['safari'] && b['version'] >= 0x6 || b['opera'] && b['version'] >= 0xa || b['ios'] && b['osversion'] && b['osversion']['split']('.')[0x0] >= 0x6 || b['blackberry'] && b['version'] >= 10.1 || b['chromium'] && b['version'] >= 0x14) {
          b['a'] = a;
        } else if (b['msie'] && b['version'] < 0xa || b['chrome'] && b['version'] < 0x14 || b['firefox'] && b['version'] < 0x14 || b['safari'] && b['version'] < 0x6 || b['opera'] && b['version'] < 0xa || b['ios'] && b['osversion'] && b['osversion']['split']('.')[0x0] < 0x6 || b['chromium'] && b['version'] < 0x14) {
          b['c'] = a;
        } else b['x'] = a;
        return b;
      }
      var b = c(typeof navigator !== 'undefined' ? navigator['userAgent'] || '' : '');
      b['test'] = function(d) {
        for (var a = 0x0; a < d['length']; ++a) {
          var c = d[a];
          if (typeof c === 'string') {
            if (c in b) {
              return !![];
            }
          }
        }
        return ![];
      };

      function d(a) {
        return a['split']('.')['length'];
      }

      function e(b, d) {
        var c = [],
          a;
        if (Array['prototype']['map']) {
          return Array['prototype']['map']['call'](b, d);
        }
        for (a = 0x0; a < b['length']; a++) {
          c['push'](d(b[a]));
        }
        return c;
      }

      function f(c) {
        var a = Math['max'](d(c[0x0]), d(c[0x1]));
        var b = e(c, function(b) {
          var c = a - d(b);
          b = b + new Array(c + 0x1)['join']('.0');
          return e(b['split']('.'), function(a) {
            return new Array(0x14 - a['length'])['join']('0') + a;
          })['reverse']();
        });
        while (--a >= 0x0) {
          if (b[0x0][a] > b[0x1][a]) {
            return 0x1;
          } else if (b[0x0][a] === b[0x1][a]) {
            if (a === 0x0) {
              return 0x0;
            }
          } else {
            return -0x1;
          }
        }
      }

      function g(e, a, h) {
        var g = b;
        if (typeof a === 'string') {
          h = a;
          a = void 0x0;
        }
        if (a === void 0x0) {
          a = ![];
        }
        if (h) {
          g = c(h);
        }
        var i = '' + g['version'];
        for (var d in e) {
          if (e['hasOwnProperty'](d)) {
            if (g[d]) {
              if (typeof e[d] !== 'string') {
                throw new Error('Browser version in the minVersion map should be a string: ' + d + ':\x20' + String(e));
              }
              return f([i, e[d]]) < 0x0;
            }
          }
        }
        return a;
      }

      function h(a, b, c) {
        return !g(a, b, c);
      }
      b['isUnsupportedBrowser'] = g;
      b['compareVersions'] = f;
      b['check'] = h;
      b['_detect'] = c;
      return b;
    });
  });
  var u = {};
  var W = function() {
    function b(a) {
      this['value'] = a;
    }

    function a(e) {
      var a, c;

      function g(b, e) {
        return new Promise(function(g, h) {
          var f = {
            'key': b,
            'arg': e,
            'resolve': g,
            'reject': h,
            'next': null
          };
          if (c) {
            c = c['next'] = f;
          } else {
            a = c = f;
            d(b, e);
          }
        });
      }

      function d(g, h) {
        try {
          var a = e[g](h);
          var c = a['value'];
          if (c instanceof b) {
            Promise['resolve'](c['value'])['then'](function(a) {
              d('next', a);
            }, function(a) {
              d('throw', a);
            });
          } else {
            f(a['done'] ? 'return' : 'normal', a['value']);
          }
        } catch (a) {
          f('throw', a);
        }
      }

      function f(e, b) {
        switch (e) {
          case 'return':
            a['resolve']({
              'value': b,
              'done': !![]
            });
            break;
          case 'throw':
            a['reject'](b);
            break;
          default:
            a['resolve']({
              'value': b,
              'done': ![]
            });
            break;
        }
        a = a['next'];
        if (a) {
          d(a['key'], a['arg']);
        } else {
          c = null;
        }
      }
      this['_invoke'] = g;
      if (typeof e['return'] !== 'function') {
        this['return'] = undefined;
      }
    }
    if (typeof Symbol === 'function' && Symbol['asyncIterator']) {
      a['prototype'][Symbol['asyncIterator']] = function() {
        return this;
      };
    }
    a['prototype']['next'] = function(a) {
      return this['_invoke']('next', a);
    };
    a['prototype']['throw'] = function(a) {
      return this['_invoke']('throw', a);
    };
    a['prototype']['return'] = function(a) {
      return this['_invoke']('return', a);
    };
    return {
      'wrap': function(b) {
        return function() {
          return new a(b['apply'](this, arguments));
        };
      },
      'await': function(a) {
        return new b(a);
      }
    };
  }();
  var g = function(a, b) {
    if (!(a instanceof b)) {
      throw new TypeError('Cannot call a class as a function');
    }
  };
  var h = function() {
    function a(d, c) {
      for (var b = 0x0; b < c['length']; b++) {
        var a = c[b];
        a['enumerable'] = a['enumerable'] || ![];
        a['configurable'] = !![];
        if ('value' in a) a['writable'] = !![];
        Object['defineProperty'](d, a['key'], a);
      }
    }
    return function(b, c, d) {
      if (c) a(b['prototype'], c);
      if (d) a(b, d);
      return b;
    };
  }();
  u;
  var F = {
    'width': 0x280,
    'height': 0x1e0,
    'captureType': 'image/jpeg',
    'captureQuality': 0.5
  };
  var s = function() {
    function a(b) {
      g(this, a);
      this['_options'] = Object['assign']({}, F, b);
      this['_videoElm'] = document['createElement']('video');
      if (c['ios']) {
        this['_videoElm']['setAttribute']('muted', '');
        this['_videoElm']['setAttribute']('playsinline', '');
      }
      this['_videoElm']['width'] = this['_options']['width'];
      this['_videoElm']['height'] = this['_options']['height'];
      this['_canvasElm'] = document['createElement']('canvas');
      this['_canvasContext'] = this['_canvasElm']['getContext']('2d');
    }
    h(a, [{
      'key': 'setVideoSource',
      'value': function a(b) {
        return b['attachTo'](this['_videoElm']);
      }
    }, {
      'key': 'play',
      'value': function a() {
        var b = this;
        return new Promise(function(a, c) {
          b['_videoElm']['onplay'] = function() {
            b['_videoElm']['onplay'] = undefined;
            a();
          };
          b['_videoElm']['onerror'] = function(a) {
            b['_videoElm']['onerror'] = undefined;
            c(a);
          };
          b['_videoElm']['play']();
        });
      }
    }, {
      'key': 'updateVideoCanvas',
      'value': function a() {
        this['_canvasElm']['width'] = this['videoWidth'];
        this['_canvasElm']['height'] = this['videoHeight'];
        if ((c['mobile'] || c['tablet']) && c['firefox']) {
          this['_canvasContext']['translate'](0x0, this['_canvasElm']['height']);
          this['_canvasContext']['scale'](0x1, -0x1);
        }
        this['_canvasContext']['drawImage'](this['_videoElm'], 0x0, 0x0, this['videoWidth'], this['videoHeight'], 0x0, 0x0, this['_canvasElm']['width'], this['_canvasElm']['height']);
      }
    }, {
      'key': 'captureFrame',
      'value': function a(b, c) {
        b = b || this['_options']['captureType'];
        c = c || this['_options']['captureQuality'];
        var d = this['_canvasElm']['toDataURL'](b, c);
        var e = z(d);
        URL['revokeObjectURL'](d);
        return e;
      }
    }, {
      'key': 'width',
      'get': function a() {
        return this['_videoElm']['width'];
      },
      'set': function a(b) {
        this['_videoElm']['width'] = b;
      }
    }, {
      'key': 'height',
      'get': function a() {
        return this['_videoElm']['height'];
      },
      'set': function a(b) {
        this['_videoElm']['height'] = b;
      }
    }, {
      'key': 'videoWidth',
      'get': function a() {
        return this['_videoElm']['videoWidth'];
      }
    }, {
      'key': 'videoHeight',
      'get': function a() {
        return this['_videoElm']['videoHeight'];
      }
    }, {
      'key': 'videoElement',
      'get': function a() {
        return this['_videoElm'];
      }
    }, {
      'key': 'videoCanvas',
      'get': function a() {
        return this['_canvasElm'];
      }
    }]);
    return a;
  }();
  'use strict';
  var p = !![];
  var n = !![];
  var d = {
    'disableLog': function(a) {
      if (typeof a !== 'boolean') {
        return new Error('Argument type: ' + typeof a + '. Please use a boolean.');
      }
      p = a;
      return a ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
    },
    'disableWarnings': function(a) {
      if (typeof a !== 'boolean') {
        return new Error('Argument type: ' + typeof a + '. Please use a boolean.');
      }
      n = !a;
      return 'adapter.js deprecation warnings ' + (a ? 'disabled' : 'enabled');
    },
    'log': function() {
      if (typeof window === 'object') {
        if (p) {
          return;
        }
        if (typeof console !== 'undefined' && typeof console['log'] === 'function') {
          console['log']['apply'](console, arguments);
        }
      }
    },
    'deprecated': function(a, b) {
      if (!n) {
        return;
      }
      console['warn'](a + ' is deprecated, please use ' + b + ' instead.');
    },
    'extractVersion': function(c, d, b) {
      var a = c['match'](d);
      return a && a['length'] >= b && parseInt(a[b], 0xa);
    },
    'detectBrowser': function(c) {
      var b = c && c['navigator'];
      var a = {};
      a['browser'] = null;
      a['version'] = null;
      if (typeof c === 'undefined' || !c['navigator']) {
        a['browser'] = 'Not a browser.';
        return a;
      }
      if (b['mozGetUserMedia']) {
        a['browser'] = 'firefox';
        a['version'] = this['extractVersion'](b['userAgent'], /Firefox\/(\d+)\./, 0x1);
      } else if (b['webkitGetUserMedia']) {
        if (c['webkitRTCPeerConnection']) {
          a['browser'] = 'chrome';
          a['version'] = this['extractVersion'](b['userAgent'], /Chrom(e|ium)\/(\d+)\./, 0x2);
        } else {
          if (b['userAgent']['match'](/Version\/(\d+).(\d+)/)) {
            a['browser'] = 'safari';
            a['version'] = this['extractVersion'](b['userAgent'], /AppleWebKit\/(\d+)\./, 0x1);
          } else {
            a['browser'] = 'Unsupported webkit-based browser ' + 'with\x20GUM\x20support\x20but\x20no\x20WebRTC\x20support.';
            return a;
          }
        }
      } else if (b['mediaDevices'] && b['userAgent']['match'](/Edge\/(\d+).(\d+)$/)) {
        a['browser'] = 'edge';
        a['version'] = this['extractVersion'](b['userAgent'], /Edge\/(\d+).(\d+)$/, 0x2);
      } else if (b['mediaDevices'] && b['userAgent']['match'](/AppleWebKit\/(\d+)\./)) {
        a['browser'] = 'safari';
        a['version'] = this['extractVersion'](b['userAgent'], /AppleWebKit\/(\d+)\./, 0x1);
      } else {
        a['browser'] = 'Not a supported browser.';
        return a;
      }
      return a;
    }
  };
  var b = {
    'log': d['log'],
    'deprecated': d['deprecated'],
    'disableLog': d['disableLog'],
    'disableWarnings': d['disableWarnings'],
    'extractVersion': d['extractVersion'],
    'shimCreateObjectURL': d['shimCreateObjectURL'],
    'detectBrowser': d['detectBrowser']['bind'](d)
  };
  'use\x20strict';
  var i = b['log'];
  var H = function(c) {
    var h = b['detectBrowser'](c);
    var a = c && c['navigator'];
    var d = function(b) {
      if (typeof b !== 'object' || b['mandatory'] || b['optional']) {
        return b;
      }
      var a = {};
      Object['keys'](b)['forEach'](function(d) {
        if (d === 'require' || d === 'advanced' || d === 'mediaSource') {
          return;
        }
        var c = typeof b[d] === 'object' ? b[d] : {
          'ideal': b[d]
        };
        if (c['exact'] !== undefined && typeof c['exact'] === 'number') {
          c['min'] = c['max'] = c['exact'];
        }
        var f = function(b, a) {
          if (b) {
            return b + a['charAt'](0x0)['toUpperCase']() + a['slice'](0x1);
          }
          return a === 'deviceId' ? 'sourceId' : a;
        };
        if (c['ideal'] !== undefined) {
          a['optional'] = a['optional'] || [];
          var e = {};
          if (typeof c['ideal'] === 'number') {
            e[f('min', d)] = c['ideal'];
            a['optional']['push'](e);
            e = {};
            e[f('max', d)] = c['ideal'];
            a['optional']['push'](e);
          } else {
            e[f('', d)] = c['ideal'];
            a['optional']['push'](e);
          }
        }
        if (c['exact'] !== undefined && typeof c['exact'] !== 'number') {
          a['mandatory'] = a['mandatory'] || {};
          a['mandatory'][f('', d)] = c['exact'];
        } else {
          ['min', 'max']['forEach'](function(b) {
            if (c[b] !== undefined) {
              a['mandatory'] = a['mandatory'] || {};
              a['mandatory'][f(b, d)] = c[b];
            }
          });
        }
      });
      if (b['advanced']) {
        a['optional'] = (a['optional'] || [])['concat'](b['advanced']);
      }
      return a;
    };
    var e = function(b, g) {
      b = JSON['parse'](JSON['stringify'](b));
      if (b && typeof b['audio'] === 'object') {
        var f = function(a, b, c) {
          if (b in a && !(c in a)) {
            a[c] = a[b];
            delete a[b];
          }
        };
        b = JSON['parse'](JSON['stringify'](b));
        f(b['audio'], 'autoGainControl', 'googAutoGainControl');
        f(b['audio'], 'noiseSuppression', 'googNoiseSuppression');
        b['audio'] = d(b['audio']);
      }
      if (b && typeof b['video'] === 'object') {
        var c = b['video']['facingMode'];
        c = c && (typeof c === 'object' ? c : {
          'ideal': c
        });
        var j = h['version'] < 0x3d;
        if (c && (c['exact'] === 'user' || c['exact'] === 'environment' || c['ideal'] === 'user' || c['ideal'] === 'environment') && !(a['mediaDevices']['getSupportedConstraints'] && a['mediaDevices']['getSupportedConstraints']()['facingMode'] && !j)) {
          delete b['video']['facingMode'];
          var e;
          if (c['exact'] === 'environment' || c['ideal'] === 'environment') {
            e = ['back', 'rear'];
          } else if (c['exact'] === 'user' || c['ideal'] === 'user') {
            e = ['front'];
          }
          if (e) {
            return a['mediaDevices']['enumerateDevices']()['then'](function(a) {
              a = a['filter'](function(a) {
                return a['kind'] === 'videoinput';
              });
              var f = a['find'](function(a) {
                return e['some'](function(b) {
                  return a['label']['toLowerCase']()['indexOf'](b) !== -0x1;
                });
              });
              if (!f && a['length'] && e['indexOf']('back') !== -0x1) {
                f = a[a['length'] - 0x1];
              }
              if (f) {
                b['video']['deviceId'] = c['exact'] ? {
                  'exact': f['deviceId']
                } : {
                  'ideal': f['deviceId']
                };
              }
              b['video'] = d(b['video']);
              i('chrome:\x20' + JSON['stringify'](b));
              return g(b);
            });
          }
        }
        b['video'] = d(b['video']);
      }
      i('chrome: ' + JSON['stringify'](b));
      return g(b);
    };
    var f = function(a) {
      return {
        'name': {
          'PermissionDeniedError': 'NotAllowedError',
          'InvalidStateError': 'NotReadableError',
          'DevicesNotFoundError': 'NotFoundError',
          'ConstraintNotSatisfiedError': 'OverconstrainedError',
          'TrackStartError': 'NotReadableError',
          'MediaDeviceFailedDueToShutdown': 'NotReadableError',
          'MediaDeviceKillSwitchOn': 'NotReadableError'
        }[a['name']] || a['name'],
        'message': a['message'],
        'constraint': a['constraintName'],
        'toString': function() {
          return this['name'] + (this['message'] && ':\x20') + this['message'];
        }
      };
    };
    var j = function(c, d, b) {
      e(c, function(c) {
        a['webkitGetUserMedia'](c, d, function(a) {
          if (b) {
            b(f(a));
          }
        });
      });
    };
    a['getUserMedia'] = j;
    var g = function(b) {
      return new Promise(function(c, d) {
        a['getUserMedia'](b, c, d);
      });
    };
    if (!a['mediaDevices']) {
      a['mediaDevices'] = {
        'getUserMedia': g,
        'enumerateDevices': function() {
          return new Promise(function(b) {
            var a = {
              'audio': 'audioinput',
              'video': 'videoinput'
            };
            return c['MediaStreamTrack']['getSources'](function(c) {
              b(c['map'](function(b) {
                return {
                  'label': b['label'],
                  'kind': a[b['kind']],
                  'deviceId': b['id'],
                  'groupId': ''
                };
              }));
            });
          });
        },
        'getSupportedConstraints': function() {
          return {
            'deviceId': !![],
            'echoCancellation': !![],
            'facingMode': !![],
            'frameRate': !![],
            'height': !![],
            'width': !![]
          };
        }
      };
    }
    if (!a['mediaDevices']['getUserMedia']) {
      a['mediaDevices']['getUserMedia'] = function(a) {
        return g(a);
      };
    } else {
      var k = a['mediaDevices']['getUserMedia']['bind'](a['mediaDevices']);
      a['mediaDevices']['getUserMedia'] = function(a) {
        return e(a, function(a) {
          return k(a)['then'](function(b) {
            if (a['audio'] && !b['getAudioTracks']()['length'] || a['video'] && !b['getVideoTracks']()['length']) {
              b['getTracks']()['forEach'](function(a) {
                a['stop']();
              });
              throw new DOMException('', 'NotFoundError');
            }
            return b;
          }, function(a) {
            return Promise['reject'](f(a));
          });
        });
      };
    }
    if (typeof a['mediaDevices']['addEventListener'] === 'undefined') {
      a['mediaDevices']['addEventListener'] = function() {
        i('Dummy mediaDevices.addEventListener called.');
      };
    }
    if (typeof a['mediaDevices']['removeEventListener'] === 'undefined') {
      a['mediaDevices']['removeEventListener'] = function() {
        i('Dummy mediaDevices.removeEventListener called.');
      };
    }
  };
  'use strict';
  var r = b['log'];
  var e = {
    'shimMediaStream': function(a) {
      a['MediaStream'] = a['MediaStream'] || a['webkitMediaStream'];
    },
    'shimOnTrack': function(a) {
      if (typeof a === 'object' && a['RTCPeerConnection'] && !('ontrack' in a['RTCPeerConnection']['prototype'])) {
        Object['defineProperty'](a['RTCPeerConnection']['prototype'], 'ontrack', {
          'get': function() {
            return this['_ontrack'];
          },
          'set': function(a) {
            if (this['_ontrack']) {
              this['removeEventListener']('track', this['_ontrack']);
            }
            this['addEventListener']('track', this['_ontrack'] = a);
          }
        });
        var b = a['RTCPeerConnection']['prototype']['setRemoteDescription'];
        a['RTCPeerConnection']['prototype']['setRemoteDescription'] = function() {
          var c = this;
          if (!c['_ontrackpoly']) {
            c['_ontrackpoly'] = function(b) {
              b['stream']['addEventListener']('addtrack', function(f) {
                var e;
                if (a['RTCPeerConnection']['prototype']['getReceivers']) {
                  e = c['getReceivers']()['find'](function(a) {
                    return a['track'] && a['track']['id'] === f['track']['id'];
                  });
                } else {
                  e = {
                    'track': f['track']
                  };
                }
                var d = new Event('track');
                d['track'] = f['track'];
                d['receiver'] = e;
                d['transceiver'] = {
                  'receiver': e
                };
                d['streams'] = [b['stream']];
                c['dispatchEvent'](d);
              });
              b['stream']['getTracks']()['forEach'](function(f) {
                var e;
                if (a['RTCPeerConnection']['prototype']['getReceivers']) {
                  e = c['getReceivers']()['find'](function(a) {
                    return a['track'] && a['track']['id'] === f['id'];
                  });
                } else {
                  e = {
                    'track': f
                  };
                }
                var d = new Event('track');
                d['track'] = f;
                d['receiver'] = e;
                d['transceiver'] = {
                  'receiver': e
                };
                d['streams'] = [b['stream']];
                c['dispatchEvent'](d);
              });
            };
            c['addEventListener']('addstream', c['_ontrackpoly']);
          }
          return b['apply'](c, arguments);
        };
      }
    },
    'shimGetSendersWithDtmf': function(a) {
      if (typeof a === 'object' && a['RTCPeerConnection'] && !('getSenders' in a['RTCPeerConnection']['prototype']) && 'createDTMFSender' in a['RTCPeerConnection']['prototype']) {
        var b = function(b, a) {
          return {
            'track': a,
            get 'dtmf' () {
              if (this['_dtmf'] === undefined) {
                if (a['kind'] === 'audio') {
                  this['_dtmf'] = b['createDTMFSender'](a);
                } else {
                  this['_dtmf'] = null;
                }
              }
              return this['_dtmf'];
            },
            '_pc': b
          };
        };
        if (!a['RTCPeerConnection']['prototype']['getSenders']) {
          a['RTCPeerConnection']['prototype']['getSenders'] = function() {
            this['_senders'] = this['_senders'] || [];
            return this['_senders']['slice']();
          };
          var c = a['RTCPeerConnection']['prototype']['addTrack'];
          a['RTCPeerConnection']['prototype']['addTrack'] = function(e, f) {
            var d = this;
            var a = c['apply'](d, arguments);
            if (!a) {
              a = b(d, e);
              d['_senders']['push'](a);
            }
            return a;
          };
          var d = a['RTCPeerConnection']['prototype']['removeTrack'];
          a['RTCPeerConnection']['prototype']['removeTrack'] = function(c) {
            var a = this;
            d['apply'](a, arguments);
            var b = a['_senders']['indexOf'](c);
            if (b !== -0x1) {
              a['_senders']['splice'](b, 0x1);
            }
          };
        }
        var e = a['RTCPeerConnection']['prototype']['addStream'];
        a['RTCPeerConnection']['prototype']['addStream'] = function(c) {
          var a = this;
          a['_senders'] = a['_senders'] || [];
          e['apply'](a, [c]);
          c['getTracks']()['forEach'](function(c) {
            a['_senders']['push'](b(a, c));
          });
        };
        var f = a['RTCPeerConnection']['prototype']['removeStream'];
        a['RTCPeerConnection']['prototype']['removeStream'] = function(b) {
          var a = this;
          a['_senders'] = a['_senders'] || [];
          f['apply'](a, [a['_streams'][b['id']] || b]);
          b['getTracks']()['forEach'](function(c) {
            var b = a['_senders']['find'](function(a) {
              return a['track'] === c;
            });
            if (b) {
              a['_senders']['splice'](a['_senders']['indexOf'](b), 0x1);
            }
          });
        };
      } else if (typeof a === 'object' && a['RTCPeerConnection'] && 'getSenders' in a['RTCPeerConnection']['prototype'] && 'createDTMFSender' in a['RTCPeerConnection']['prototype'] && a['RTCRtpSender'] && !('dtmf' in a['RTCRtpSender']['prototype'])) {
        var g = a['RTCPeerConnection']['prototype']['getSenders'];
        a['RTCPeerConnection']['prototype']['getSenders'] = function() {
          var a = this;
          var b = g['apply'](a, []);
          b['forEach'](function(b) {
            b['_pc'] = a;
          });
          return b;
        };
        Object['defineProperty'](a['RTCRtpSender']['prototype'], 'dtmf', {
          'get': function() {
            if (this['_dtmf'] === undefined) {
              if (this['track']['kind'] === 'audio') {
                this['_dtmf'] = this['_pc']['createDTMFSender'](this['track']);
              } else {
                this['_dtmf'] = null;
              }
            }
            return this['_dtmf'];
          }
        });
      }
    },
    'shimSourceObject': function(b) {
      var a = b && b['URL'];
      if (typeof b === 'object') {
        if (b['HTMLMediaElement'] && !('srcObject' in b['HTMLMediaElement']['prototype'])) {
          Object['defineProperty'](b['HTMLMediaElement']['prototype'], 'srcObject', {
            'get': function() {
              return this['_srcObject'];
            },
            'set': function(b) {
              var c = this;
              this['_srcObject'] = b;
              if (this['src']) {
                a['revokeObjectURL'](this['src']);
              }
              if (!b) {
                this['src'] = '';
                return undefined;
              }
              this['src'] = a['createObjectURL'](b);
              b['addEventListener']('addtrack', function() {
                if (c['src']) {
                  a['revokeObjectURL'](c['src']);
                }
                c['src'] = a['createObjectURL'](b);
              });
              b['addEventListener']('removetrack', function() {
                if (c['src']) {
                  a['revokeObjectURL'](c['src']);
                }
                c['src'] = a['createObjectURL'](b);
              });
            }
          });
        }
      }
    },
    'shimAddTrackRemoveTrack': function(a) {
      var e = b['detectBrowser'](a);
      if (a['RTCPeerConnection']['prototype']['addTrack'] && e['version'] >= 0x3e) {
        return;
      }
      var f = a['RTCPeerConnection']['prototype']['getLocalStreams'];
      a['RTCPeerConnection']['prototype']['getLocalStreams'] = function() {
        var a = this;
        var b = f['apply'](this);
        a['_reverseStreams'] = a['_reverseStreams'] || {};
        return b['map'](function(b) {
          return a['_reverseStreams'][b['id']];
        });
      };
      var g = a['RTCPeerConnection']['prototype']['addStream'];
      a['RTCPeerConnection']['prototype']['addStream'] = function(c) {
        var b = this;
        b['_streams'] = b['_streams'] || {};
        b['_reverseStreams'] = b['_reverseStreams'] || {};
        c['getTracks']()['forEach'](function(c) {
          var a = b['getSenders']()['find'](function(a) {
            return a['track'] === c;
          });
          if (a) {
            throw new DOMException('Track already exists.', 'InvalidAccessError');
          }
        });
        if (!b['_reverseStreams'][c['id']]) {
          var d = new a[('MediaStream')](c['getTracks']());
          b['_streams'][c['id']] = d;
          b['_reverseStreams'][d['id']] = c;
          c = d;
        }
        g['apply'](b, [c]);
      };
      var h = a['RTCPeerConnection']['prototype']['removeStream'];
      a['RTCPeerConnection']['prototype']['removeStream'] = function(b) {
        var a = this;
        a['_streams'] = a['_streams'] || {};
        a['_reverseStreams'] = a['_reverseStreams'] || {};
        h['apply'](a, [a['_streams'][b['id']] || b]);
        delete a['_reverseStreams'][a['_streams'][b['id']] ? a['_streams'][b['id']]['id'] : b['id']];
        delete a['_streams'][b['id']];
      };
      a['RTCPeerConnection']['prototype']['addTrack'] = function(c, e) {
        var b = this;
        if (b['signalingState'] === 'closed') {
          throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        }
        var f = []['slice']['call'](arguments, 0x1);
        if (f['length'] !== 0x1 || !f[0x0]['getTracks']()['find'](function(a) {
            return a === c;
          })) {
          throw new DOMException('The\x20adapter.js\x20addTrack\x20polyfill\x20only\x20supports\x20a\x20single\x20' + ' stream which is associated with the specified track.', 'NotSupportedError');
        }
        var h = b['getSenders']()['find'](function(a) {
          return a['track'] === c;
        });
        if (h) {
          throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
        b['_streams'] = b['_streams'] || {};
        b['_reverseStreams'] = b['_reverseStreams'] || {};
        var g = b['_streams'][e['id']];
        if (g) {
          g['addTrack'](c);
          Promise['resolve']()['then'](function() {
            b['dispatchEvent'](new Event('negotiationneeded'));
          });
        } else {
          var d = new a[('MediaStream')]([c]);
          b['_streams'][e['id']] = d;
          b['_reverseStreams'][d['id']] = e;
          b['addStream'](d);
        }
        return b['getSenders']()['find'](function(a) {
          return a['track'] === c;
        });
      };

      function c(b, c) {
        var a = c['sdp'];
        Object['keys'](b['_reverseStreams'] || [])['forEach'](function(e) {
          var c = b['_reverseStreams'][e];
          var d = b['_streams'][c['id']];
          a = a['replace'](new RegExp(d['id'], 'g'), c['id']);
        });
        return new RTCSessionDescription({
          'type': c['type'],
          'sdp': a
        });
      }

      function j(b, c) {
        var a = c['sdp'];
        Object['keys'](b['_reverseStreams'] || [])['forEach'](function(e) {
          var c = b['_reverseStreams'][e];
          var d = b['_streams'][c['id']];
          a = a['replace'](new RegExp(c['id'], 'g'), d['id']);
        });
        return new RTCSessionDescription({
          'type': c['type'],
          'sdp': a
        });
      }['createOffer', 'createAnswer']['forEach'](function(d) {
        var b = a['RTCPeerConnection']['prototype'][d];
        a['RTCPeerConnection']['prototype'][d] = function() {
          var a = this;
          var d = arguments;
          var e = arguments['length'] && typeof arguments[0x0] === 'function';
          if (e) {
            return b['apply'](a, [function(e) {
              var b = c(a, e);
              d[0x0]['apply'](null, [b]);
            }, function(a) {
              if (d[0x1]) {
                d[0x1]['apply'](null, a);
              }
            }, arguments[0x2]]);
          }
          return b['apply'](a, arguments)['then'](function(b) {
            return c(a, b);
          });
        };
      });
      var d = a['RTCPeerConnection']['prototype']['setLocalDescription'];
      a['RTCPeerConnection']['prototype']['setLocalDescription'] = function() {
        var a = this;
        if (!arguments['length'] || !arguments[0x0]['type']) {
          return d['apply'](a, arguments);
        }
        arguments[0x0] = j(a, arguments[0x0]);
        return d['apply'](a, arguments);
      };
      var i = Object['getOwnPropertyDescriptor'](a['RTCPeerConnection']['prototype'], 'localDescription');
      Object['defineProperty'](a['RTCPeerConnection']['prototype'], 'localDescription', {
        'get': function() {
          var b = this;
          var a = i['get']['apply'](this);
          if (a['type'] === '') {
            return a;
          }
          return c(b, a);
        }
      });
      a['RTCPeerConnection']['prototype']['removeTrack'] = function(c) {
        var a = this;
        if (a['signalingState'] === 'closed') {
          throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        }
        if (!c['_pc']) {
          throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
        }
        var d = c['_pc'] === a;
        if (!d) {
          throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
        }
        a['_streams'] = a['_streams'] || {};
        var b;
        Object['keys'](a['_streams'])['forEach'](function(d) {
          var e = a['_streams'][d]['getTracks']()['find'](function(a) {
            return c['track'] === a;
          });
          if (e) {
            b = a['_streams'][d];
          }
        });
        if (b) {
          if (b['getTracks']()['length'] === 0x1) {
            a['removeStream'](b);
          } else {
            b['removeTrack'](c['track']);
          }
          a['dispatchEvent'](new Event('negotiationneeded'));
        }
      };
    },
    'shimPeerConnection': function(a) {
      var e = b['detectBrowser'](a);
      if (!a['RTCPeerConnection']) {
        a['RTCPeerConnection'] = function(b, c) {
          r('PeerConnection');
          if (b && b['iceTransportPolicy']) {
            b['iceTransports'] = b['iceTransportPolicy'];
          }
          return new a['webkitRTCPeerConnection'](b, c);
        };
        a['RTCPeerConnection']['prototype'] = a['webkitRTCPeerConnection']['prototype'];
        if (a['webkitRTCPeerConnection']['generateCertificate']) {
          Object['defineProperty'](a['RTCPeerConnection'], 'generateCertificate', {
            'get': function() {
              return a['webkitRTCPeerConnection']['generateCertificate'];
            }
          });
        }
      } else {
        var d = a['RTCPeerConnection'];
        a['RTCPeerConnection'] = function(c, g) {
          if (c && c['iceServers']) {
            var f = [];
            for (var e = 0x0; e < c['iceServers']['length']; e++) {
              var a = c['iceServers'][e];
              if (!a['hasOwnProperty']('urls') && a['hasOwnProperty']('url')) {
                b['deprecated']('RTCIceServer.url', 'RTCIceServer.urls');
                a = JSON['parse'](JSON['stringify'](a));
                a['urls'] = a['url'];
                f['push'](a);
              } else {
                f['push'](c['iceServers'][e]);
              }
            }
            c['iceServers'] = f;
          }
          return new d(c, g);
        };
        a['RTCPeerConnection']['prototype'] = d['prototype'];
        Object['defineProperty'](a['RTCPeerConnection'], 'generateCertificate', {
          'get': function() {
            return d['generateCertificate'];
          }
        });
      }
      var c = a['RTCPeerConnection']['prototype']['getStats'];
      a['RTCPeerConnection']['prototype']['getStats'] = function(g, h, i) {
        var d = this;
        var e = arguments;
        if (arguments['length'] > 0x0 && typeof g === 'function') {
          return c['apply'](this, arguments);
        }
        if (c['length'] === 0x0 && (arguments['length'] === 0x0 || typeof arguments[0x0] !== 'function')) {
          return c['apply'](this, []);
        }
        var a = function(c) {
          var a = {};
          var b = c['result']();
          b['forEach'](function(b) {
            var c = {
              'id': b['id'],
              'timestamp': b['timestamp'],
              'type': {
                'localcandidate': 'local-candidate',
                'remotecandidate': 'remote-candidate'
              }[b['type']] || b['type']
            };
            b['names']()['forEach'](function(a) {
              c[a] = b['stat'](a);
            });
            a[c['id']] = c;
          });
          return a;
        };
        var b = function(a) {
          return new Map(Object['keys'](a)['map'](function(b) {
            return [b, a[b]];
          }));
        };
        if (arguments['length'] >= 0x2) {
          var f = function(c) {
            e[0x1](b(a(c)));
          };
          return c['apply'](this, [f, arguments[0x0]]);
        }
        return new Promise(function(e, f) {
          c['apply'](d, [function(c) {
            e(b(a(c)));
          }, f]);
        })['then'](h, i);
      };
      if (e['version'] < 0x33) {
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']['forEach'](function(b) {
          var c = a['RTCPeerConnection']['prototype'][b];
          a['RTCPeerConnection']['prototype'][b] = function() {
            var a = arguments;
            var d = this;
            var b = new Promise(function(b, e) {
              c['apply'](d, [a[0x0], b, e]);
            });
            if (a['length'] < 0x2) {
              return b;
            }
            return b['then'](function() {
              a[0x1]['apply'](null, []);
            }, function(b) {
              if (a['length'] >= 0x3) {
                a[0x2]['apply'](null, [b]);
              }
            });
          };
        });
      }
      if (e['version'] < 0x34) {
        ['createOffer', 'createAnswer']['forEach'](function(c) {
          var b = a['RTCPeerConnection']['prototype'][c];
          a['RTCPeerConnection']['prototype'][c] = function() {
            var a = this;
            if (arguments['length'] < 0x1 || arguments['length'] === 0x1 && typeof arguments[0x0] === 'object') {
              var c = arguments['length'] === 0x1 ? arguments[0x0] : undefined;
              return new Promise(function(d, e) {
                b['apply'](a, [d, e, c]);
              });
            }
            return b['apply'](this, arguments);
          };
        });
      }['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']['forEach'](function(b) {
        var c = a['RTCPeerConnection']['prototype'][b];
        a['RTCPeerConnection']['prototype'][b] = function() {
          arguments[0x0] = new(b === ('addIceCandidate') ? a[('RTCIceCandidate')] : a[('RTCSessionDescription')])(arguments[0x0]);
          return c['apply'](this, arguments);
        };
      });
      var f = a['RTCPeerConnection']['prototype']['addIceCandidate'];
      a['RTCPeerConnection']['prototype']['addIceCandidate'] = function() {
        if (!arguments[0x0]) {
          if (arguments[0x1]) {
            arguments[0x1]['apply'](null);
          }
          return Promise['resolve']();
        }
        return f['apply'](this, arguments);
      };
    }
  };
  var t = {
    'shimMediaStream': e['shimMediaStream'],
    'shimOnTrack': e['shimOnTrack'],
    'shimAddTrackRemoveTrack': e['shimAddTrackRemoveTrack'],
    'shimGetSendersWithDtmf': e['shimGetSendersWithDtmf'],
    'shimSourceObject': e['shimSourceObject'],
    'shimPeerConnection': e['shimPeerConnection'],
    'shimGetUserMedia': H
  };
  var a = j(function(b) {
    'use strict';
    var a = {};
    a['generateIdentifier'] = function() {
      return Math['random']()['toString'](0x24)['substr'](0x2, 0xa);
    };
    a['localCName'] = a['generateIdentifier']();
    a['splitLines'] = function(a) {
      return a['trim']()['split']('\x0a')['map'](function(a) {
        return a['trim']();
      });
    };
    a['splitSections'] = function(b) {
      var a = b['split']('\nm=');
      return a['map'](function(a, b) {
        return (b > 0x0 ? 'm=' + a : a)['trim']() + '\x0d\x0a';
      });
    };
    a['matchPrefix'] = function(b, c) {
      return a['splitLines'](b)['filter'](function(a) {
        return a['indexOf'](c) === 0x0;
      });
    };
    a['parseCandidate'] = function(d) {
      var a;
      if (d['indexOf']('a=candidate:') === 0x0) {
        a = d['substring'](0xc)['split']('\x20');
      } else {
        a = d['substring'](0xa)['split']('\x20');
      }
      var c = {
        'foundation': a[0x0],
        'component': parseInt(a[0x1], 0xa),
        'protocol': a[0x2]['toLowerCase'](),
        'priority': parseInt(a[0x3], 0xa),
        'ip': a[0x4],
        'port': parseInt(a[0x5], 0xa),
        'type': a[0x7]
      };
      for (var b = 0x8; b < a['length']; b += 0x2) {
        switch (a[b]) {
          case 'raddr':
            c['relatedAddress'] = a[b + 0x1];
            break;
          case 'rport':
            c['relatedPort'] = parseInt(a[b + 0x1], 0xa);
            break;
          case 'tcptype':
            c['tcpType'] = a[b + 0x1];
            break;
          case 'ufrag':
            c['ufrag'] = a[b + 0x1];
            c['usernameFragment'] = a[b + 0x1];
            break;
          default:
            c[a[b]] = a[b + 0x1];
            break;
        }
      }
      return c;
    };
    a['writeCandidate'] = function(b) {
      var a = [];
      a['push'](b['foundation']);
      a['push'](b['component']);
      a['push'](b['protocol']['toUpperCase']());
      a['push'](b['priority']);
      a['push'](b['ip']);
      a['push'](b['port']);
      var c = b['type'];
      a['push']('typ');
      a['push'](c);
      if (c !== 'host' && b['relatedAddress'] && b['relatedPort']) {
        a['push']('raddr');
        a['push'](b['relatedAddress']);
        a['push']('rport');
        a['push'](b['relatedPort']);
      }
      if (b['tcpType'] && b['protocol']['toLowerCase']() === 'tcp') {
        a['push']('tcptype');
        a['push'](b['tcpType']);
      }
      if (b['ufrag']) {
        a['push']('ufrag');
        a['push'](b['ufrag']);
      }
      return 'candidate:' + a['join']('\x20');
    };
    a['parseIceOptions'] = function(a) {
      return a['substr'](0xe)['split']('\x20');
    };
    a['parseRtpMap'] = function(c) {
      var a = c['substr'](0x9)['split']('\x20');
      var b = {
        'payloadType': parseInt(a['shift'](), 0xa)
      };
      a = a[0x0]['split']('/');
      b['name'] = a[0x0];
      b['clockRate'] = parseInt(a[0x1], 0xa);
      b['numChannels'] = a['length'] === 0x3 ? parseInt(a[0x2], 0xa) : 0x1;
      return b;
    };
    a['writeRtpMap'] = function(a) {
      var b = a['payloadType'];
      if (a['preferredPayloadType'] !== undefined) {
        b = a['preferredPayloadType'];
      }
      return 'a=rtpmap:' + b + '\x20' + a['name'] + '/' + a['clockRate'] + (a['numChannels'] !== 0x1 ? '/' + a['numChannels'] : '') + '\x0d\x0a';
    };
    a['parseExtmap'] = function(b) {
      var a = b['substr'](0x9)['split']('\x20');
      return {
        'id': parseInt(a[0x0], 0xa),
        'direction': a[0x0]['indexOf']('/') > 0x0 ? a[0x0]['split']('/')[0x1] : 'sendrecv',
        'uri': a[0x1]
      };
    };
    a['writeExtmap'] = function(a) {
      return 'a=extmap:' + (a['id'] || a['preferredId']) + (a['direction'] && a['direction'] !== 'sendrecv' ? '/' + a['direction'] : '') + '\x20' + a['uri'] + '\x0d\x0a';
    };
    a['parseFmtp'] = function(e) {
      var b = {};
      var c;
      var d = e['substr'](e['indexOf']('\x20') + 0x1)['split'](';');
      for (var a = 0x0; a < d['length']; a++) {
        c = d[a]['trim']()['split']('=');
        b[c[0x0]['trim']()] = c[0x1];
      }
      return b;
    };
    a['writeFmtp'] = function(a) {
      var b = '';
      var c = a['payloadType'];
      if (a['preferredPayloadType'] !== undefined) {
        c = a['preferredPayloadType'];
      }
      if (a['parameters'] && Object['keys'](a['parameters'])['length']) {
        var d = [];
        Object['keys'](a['parameters'])['forEach'](function(b) {
          d['push'](b + '=' + a['parameters'][b]);
        });
        b += 'a=fmtp:' + c + '\x20' + d['join'](';') + '\x0d\x0a';
      }
      return b;
    };
    a['parseRtcpFb'] = function(b) {
      var a = b['substr'](b['indexOf']('\x20') + 0x1)['split']('\x20');
      return {
        'type': a['shift'](),
        'parameter': a['join']('\x20')
      };
    };
    a['writeRtcpFb'] = function(a) {
      var b = '';
      var c = a['payloadType'];
      if (a['preferredPayloadType'] !== undefined) {
        c = a['preferredPayloadType'];
      }
      if (a['rtcpFeedback'] && a['rtcpFeedback']['length']) {
        a['rtcpFeedback']['forEach'](function(a) {
          b += 'a=rtcp-fb:' + c + '\x20' + a['type'] + (a['parameter'] && a['parameter']['length'] ? '\x20' + a['parameter'] : '') + '\x0d\x0a';
        });
      }
      return b;
    };
    a['parseSsrcMedia'] = function(a) {
      var b = a['indexOf']('\x20');
      var c = {
        'ssrc': parseInt(a['substr'](0x7, b - 0x7), 0xa)
      };
      var d = a['indexOf'](':', b);
      if (d > -0x1) {
        c['attribute'] = a['substr'](b + 0x1, d - b - 0x1);
        c['value'] = a['substr'](d + 0x1);
      } else {
        c['attribute'] = a['substr'](b + 0x1);
      }
      return c;
    };
    a['getMid'] = function(c) {
      var b = a['matchPrefix'](c, 'a=mid:')[0x0];
      if (b) {
        return b['substr'](0x6);
      }
    };
    a['parseFingerprint'] = function(b) {
      var a = b['substr'](0xe)['split']('\x20');
      return {
        'algorithm': a[0x0]['toLowerCase'](),
        'value': a[0x1]
      };
    };
    a['getDtlsParameters'] = function(c, d) {
      var b = a['matchPrefix'](c + d, 'a=fingerprint:');
      return {
        'role': 'auto',
        'fingerprints': b['map'](a['parseFingerprint'])
      };
    };
    a['writeDtlsParameters'] = function(b, c) {
      var a = 'a=setup:' + c + '\x0d\x0a';
      b['fingerprints']['forEach'](function(b) {
        a += 'a=fingerprint:' + b['algorithm'] + '\x20' + b['value'] + '\x0d\x0a';
      });
      return a;
    };
    a['getIceParameters'] = function(d, e) {
      var b = a['splitLines'](d);
      b = b['concat'](a['splitLines'](e));
      var c = {
        'usernameFragment': b['filter'](function(a) {
          return a['indexOf']('a=ice-ufrag:') === 0x0;
        })[0x0]['substr'](0xc),
        'password': b['filter'](function(a) {
          return a['indexOf']('a=ice-pwd:') === 0x0;
        })[0x0]['substr'](0xa)
      };
      return c;
    };
    a['writeIceParameters'] = function(a) {
      return 'a=ice-ufrag:' + a['usernameFragment'] + '\x0d\x0a' + 'a=ice-pwd:' + a['password'] + '\x0d\x0a';
    };
    a['parseRtpParameters'] = function(c) {
      var d = {
        'codecs': [],
        'headerExtensions': [],
        'fecMechanisms': [],
        'rtcp': []
      };
      var j = a['splitLines'](c);
      var g = j[0x0]['split']('\x20');
      for (var e = 0x3; e < g['length']; e++) {
        var f = g[e];
        var h = a['matchPrefix'](c, 'a=rtpmap:' + f + '\x20')[0x0];
        if (h) {
          var b = a['parseRtpMap'](h);
          var i = a['matchPrefix'](c, 'a=fmtp:' + f + '\x20');
          b['parameters'] = i['length'] ? a['parseFmtp'](i[0x0]) : {};
          b['rtcpFeedback'] = a['matchPrefix'](c, 'a=rtcp-fb:' + f + '\x20')['map'](a['parseRtcpFb']);
          d['codecs']['push'](b);
          switch (b['name']['toUpperCase']()) {
            case 'RED':
            case 'ULPFEC':
              d['fecMechanisms']['push'](b['name']['toUpperCase']());
              break;
            default:
              break;
          }
        }
      }
      a['matchPrefix'](c, 'a=extmap:')['forEach'](function(b) {
        d['headerExtensions']['push'](a['parseExtmap'](b));
      });
      return d;
    };
    a['writeRtpDescription'] = function(e, c) {
      var b = '';
      b += 'm=' + e + '\x20';
      b += c['codecs']['length'] > 0x0 ? '9' : '0';
      b += ' UDP/TLS/RTP/SAVPF ';
      b += c['codecs']['map'](function(a) {
        if (a['preferredPayloadType'] !== undefined) {
          return a['preferredPayloadType'];
        }
        return a['payloadType'];
      })['join']('\x20') + '\x0d\x0a';
      b += 'c=IN IP4 0.0.0.0\r\n';
      b += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
      c['codecs']['forEach'](function(c) {
        b += a['writeRtpMap'](c);
        b += a['writeFmtp'](c);
        b += a['writeRtcpFb'](c);
      });
      var d = 0x0;
      c['codecs']['forEach'](function(a) {
        if (a['maxptime'] > d) {
          d = a['maxptime'];
        }
      });
      if (d > 0x0) {
        b += 'a=maxptime:' + d + '\x0d\x0a';
      }
      b += 'a=rtcp-mux\r\n';
      c['headerExtensions']['forEach'](function(c) {
        b += a['writeExtmap'](c);
      });
      return b;
    };
    a['parseRtpEncodingParameters'] = function(g) {
      var c = [];
      var f = a['parseRtpParameters'](g);
      var j = f['fecMechanisms']['indexOf']('RED') !== -0x1;
      var k = f['fecMechanisms']['indexOf']('ULPFEC') !== -0x1;
      var h = a['matchPrefix'](g, 'a=ssrc:')['map'](function(b) {
        return a['parseSsrcMedia'](b);
      })['filter'](function(a) {
        return a['attribute'] === 'cname';
      });
      var d = h['length'] > 0x0 && h[0x0]['ssrc'];
      var i;
      var e = a['matchPrefix'](g, 'a=ssrc-group:FID')['map'](function(b) {
        var a = b['split']('\x20');
        a['shift']();
        return a['map'](function(a) {
          return parseInt(a, 0xa);
        });
      });
      if (e['length'] > 0x0 && e[0x0]['length'] > 0x1 && e[0x0][0x0] === d) {
        i = e[0x0][0x1];
      }
      f['codecs']['forEach'](function(b) {
        if (b['name']['toUpperCase']() === 'RTX' && b['parameters']['apt']) {
          var a = {
            'ssrc': d,
            'codecPayloadType': parseInt(b['parameters']['apt'], 0xa),
            'rtx': {
              'ssrc': i
            }
          };
          c['push'](a);
          if (j) {
            a = JSON['parse'](JSON['stringify'](a));
            a['fec'] = {
              'ssrc': i,
              'mechanism': k ? 'red+ulpfec' : 'red'
            };
            c['push'](a);
          }
        }
      });
      if (c['length'] === 0x0 && d) {
        c['push']({
          'ssrc': d
        });
      }
      var b = a['matchPrefix'](g, 'b=');
      if (b['length']) {
        if (b[0x0]['indexOf']('b=TIAS:') === 0x0) {
          b = parseInt(b[0x0]['substr'](0x7), 0xa);
        } else if (b[0x0]['indexOf']('b=AS:') === 0x0) {
          b = parseInt(b[0x0]['substr'](0x5), 0xa) * 0x3e8 * 0.95 - 0x32 * 0x28 * 0x8;
        } else {
          b = undefined;
        }
        c['forEach'](function(a) {
          a['maxBitrate'] = b;
        });
      }
      return c;
    };
    a['parseRtcpParameters'] = function(d) {
      var b = {};
      var c = a['matchPrefix'](d, 'a=ssrc:')['map'](function(b) {
        return a['parseSsrcMedia'](b);
      })['filter'](function(a) {
        return a['attribute'] === 'cname';
      })[0x0];
      if (c) {
        b['cname'] = c['value'];
        b['ssrc'] = c['ssrc'];
      }
      var e = a['matchPrefix'](d, 'a=rtcp-rsize');
      b['reducedSize'] = e['length'] > 0x0;
      b['compound'] = e['length'] === 0x0;
      var f = a['matchPrefix'](d, 'a=rtcp-mux');
      b['mux'] = f['length'] > 0x0;
      return b;
    };
    a['parseMsid'] = function(e) {
      var b;
      var c = a['matchPrefix'](e, 'a=msid:');
      if (c['length'] === 0x1) {
        b = c[0x0]['substr'](0x7)['split']('\x20');
        return {
          'stream': b[0x0],
          'track': b[0x1]
        };
      }
      var d = a['matchPrefix'](e, 'a=ssrc:')['map'](function(b) {
        return a['parseSsrcMedia'](b);
      })['filter'](function(a) {
        return a['attribute'] === 'msid';
      });
      if (d['length'] > 0x0) {
        b = d[0x0]['value']['split']('\x20');
        return {
          'stream': b[0x0],
          'track': b[0x1]
        };
      }
    };
    a['generateSessionId'] = function() {
      return Math['random']()['toString']()['substr'](0x2, 0x15);
    };
    a['writeSessionBoilerplate'] = function(c, d) {
      var b;
      var e = d !== undefined ? d : 0x2;
      if (c) {
        b = c;
      } else {
        b = a['generateSessionId']();
      }
      return 'v=0\r\n' + 'o=thisisadapterortc\x20' + b + '\x20' + e + '\x20IN\x20IP4\x20127.0.0.1\x0d\x0a' + 's=-\r\n' + 't=0\x200\x0d\x0a';
    };
    a['writeMediaSection'] = function(b, e, f, g) {
      var c = a['writeRtpDescription'](b['kind'], e);
      c += a['writeIceParameters'](b['iceGatherer']['getLocalParameters']());
      c += a['writeDtlsParameters'](b['dtlsTransport']['getLocalParameters'](), f === 'offer' ? 'actpass' : 'active');
      c += 'a=mid:' + b['mid'] + '\x0d\x0a';
      if (b['direction']) {
        c += 'a=' + b['direction'] + '\x0d\x0a';
      } else if (b['rtpSender'] && b['rtpReceiver']) {
        c += 'a=sendrecv\r\n';
      } else if (b['rtpSender']) {
        c += 'a=sendonly\r\n';
      } else if (b['rtpReceiver']) {
        c += 'a=recvonly\r\n';
      } else {
        c += 'a=inactive\r\n';
      }
      if (b['rtpSender']) {
        var d = 'msid:' + g['id'] + '\x20' + b['rtpSender']['track']['id'] + '\x0d\x0a';
        c += 'a=' + d;
        c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['ssrc'] + '\x20' + d;
        if (b['sendEncodingParameters'][0x0]['rtx']) {
          c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['rtx']['ssrc'] + '\x20' + d;
          c += 'a=ssrc-group:FID ' + b['sendEncodingParameters'][0x0]['ssrc'] + '\x20' + b['sendEncodingParameters'][0x0]['rtx']['ssrc'] + '\x0d\x0a';
        }
      }
      c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['ssrc'] + ' cname:' + a['localCName'] + '\x0d\x0a';
      if (b['rtpSender'] && b['sendEncodingParameters'][0x0]['rtx']) {
        c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['rtx']['ssrc'] + '\x20cname:' + a['localCName'] + '\x0d\x0a';
      }
      return c;
    };
    a['getDirection'] = function(e, d) {
      var c = a['splitLines'](e);
      for (var b = 0x0; b < c['length']; b++) {
        switch (c[b]) {
          case 'a=sendrecv':
          case 'a=sendonly':
          case 'a=recvonly':
          case 'a=inactive':
            return c[b]['substr'](0x2);
          default:
        }
      }
      if (d) {
        return a['getDirection'](d);
      }
      return 'sendrecv';
    };
    a['getKind'] = function(d) {
      var b = a['splitLines'](d);
      var c = b[0x0]['split']('\x20');
      return c[0x0]['substr'](0x2);
    };
    a['isRejected'] = function(a) {
      return a['split']('\x20', 0x2)[0x1] === '0';
    };
    a['parseMLine'] = function(d) {
      var c = a['splitLines'](d);
      var b = c[0x0]['split']('\x20');
      return {
        'kind': b[0x0]['substr'](0x2),
        'port': parseInt(b[0x1], 0xa),
        'protocol': b[0x2],
        'fmt': b['slice'](0x3)['join']('\x20')
      };
    }; {
      b['exports'] = a;
    }
  });
  'use\x20strict';

  function v(b, e, f, g, h) {
    var c = a['writeRtpDescription'](b['kind'], e);
    c += a['writeIceParameters'](b['iceGatherer']['getLocalParameters']());
    c += a['writeDtlsParameters'](b['dtlsTransport']['getLocalParameters'](), f === 'offer' ? 'actpass' : h || 'active');
    c += 'a=mid:' + b['mid'] + '\x0d\x0a';
    if (b['direction']) {
      c += 'a=' + b['direction'] + '\x0d\x0a';
    } else if (b['rtpSender'] && b['rtpReceiver']) {
      c += 'a=sendrecv\r\n';
    } else if (b['rtpSender']) {
      c += 'a=sendonly\r\n';
    } else if (b['rtpReceiver']) {
      c += 'a=recvonly\r\n';
    } else {
      c += 'a=inactive\r\n';
    }
    if (b['rtpSender']) {
      var d = 'msid:' + g['id'] + '\x20' + b['rtpSender']['track']['id'] + '\x0d\x0a';
      c += 'a=' + d;
      c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['ssrc'] + '\x20' + d;
      if (b['sendEncodingParameters'][0x0]['rtx']) {
        c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['rtx']['ssrc'] + '\x20' + d;
        c += 'a=ssrc-group:FID\x20' + b['sendEncodingParameters'][0x0]['ssrc'] + '\x20' + b['sendEncodingParameters'][0x0]['rtx']['ssrc'] + '\x0d\x0a';
      }
    }
    c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['ssrc'] + ' cname:' + a['localCName'] + '\x0d\x0a';
    if (b['rtpSender'] && b['sendEncodingParameters'][0x0]['rtx']) {
      c += 'a=ssrc:' + b['sendEncodingParameters'][0x0]['rtx']['ssrc'] + ' cname:' + a['localCName'] + '\x0d\x0a';
    }
    return c;
  }

  function V(a, c) {
    var b = ![];
    a = JSON['parse'](JSON['stringify'](a));
    return a['filter'](function(a) {
      if (a && (a['urls'] || a['url'])) {
        var d = a['urls'] || a['url'];
        if (a['url'] && !a['urls']) {
          console['warn']('RTCIceServer.url is deprecated! Use urls instead.');
        }
        var e = typeof d === 'string';
        if (e) {
          d = [d];
        }
        d = d['filter'](function(a) {
          var d = a['indexOf']('turn:') === 0x0 && a['indexOf']('transport=udp') !== -0x1 && a['indexOf']('turn:[') === -0x1 && !b;
          if (d) {
            b = !![];
            return !![];
          }
          return a['indexOf']('stun:') === 0x0 && c >= 0x3839 && a['indexOf']('?transport=udp') === -0x1;
        });
        delete a['url'];
        a['urls'] = e ? d[0x0] : d;
        return !!d['length'];
      }
      return ![];
    });
  }

  function m(c, a) {
    var b = {
      'codecs': [],
      'headerExtensions': [],
      'fecMechanisms': []
    };
    var d = function(b, c) {
      b = parseInt(b, 0xa);
      for (var a = 0x0; a < c['length']; a++) {
        if (c[a]['payloadType'] === b || c[a]['preferredPayloadType'] === b) {
          return c[a];
        }
      }
    };
    var e = function(c, e, f, g) {
      var a = d(c['parameters']['apt'], f);
      var b = d(e['parameters']['apt'], g);
      return a && b && a['name']['toLowerCase']() === b['name']['toLowerCase']();
    };
    c['codecs']['forEach'](function(f) {
      for (var g = 0x0; g < a['codecs']['length']; g++) {
        var d = a['codecs'][g];
        if (f['name']['toLowerCase']() === d['name']['toLowerCase']() && f['clockRate'] === d['clockRate']) {
          if (f['name']['toLowerCase']() === 'rtx' && f['parameters'] && d['parameters']['apt']) {
            if (!e(f, d, c['codecs'], a['codecs'])) {
              continue;
            }
          }
          d = JSON['parse'](JSON['stringify'](d));
          d['numChannels'] = Math['min'](f['numChannels'], d['numChannels']);
          b['codecs']['push'](d);
          d['rtcpFeedback'] = d['rtcpFeedback']['filter'](function(b) {
            for (var a = 0x0; a < f['rtcpFeedback']['length']; a++) {
              if (f['rtcpFeedback'][a]['type'] === b['type'] && f['rtcpFeedback'][a]['parameter'] === b['parameter']) {
                return !![];
              }
            }
            return ![];
          });
          break;
        }
      }
    });
    c['headerExtensions']['forEach'](function(e) {
      for (var c = 0x0; c < a['headerExtensions']['length']; c++) {
        var d = a['headerExtensions'][c];
        if (e['uri'] === d['uri']) {
          b['headerExtensions']['push'](d);
          break;
        }
      }
    });
    return b;
  }

  function y(a, b, c) {
    return {
      'offer': {
        'setLocalDescription': ['stable', 'have-local-offer'],
        'setRemoteDescription': ['stable', 'have-remote-offer']
      },
      'answer': {
        'setLocalDescription': ['have-remote-offer', 'have-local-pranswer'],
        'setRemoteDescription': ['have-local-offer', 'have-remote-pranswer']
      }
    }[b][a]['indexOf'](c) !== -0x1;
  }

  function q(c, a) {
    var b = c['getRemoteCandidates']()['find'](function(b) {
      return a['foundation'] === b['foundation'] && a['ip'] === b['ip'] && a['port'] === b['port'] && a['priority'] === b['priority'] && a['protocol'] === b['protocol'] && a['type'] === b['type'];
    });
    if (!b) {
      c['addRemoteCandidate'](a);
    }
    return !b;
  }
  var A = function(c, d) {
    var b = function(b) {
      var h = this;
      var e = document['createDocumentFragment']();
      ['addEventListener', 'removeEventListener', 'dispatchEvent']['forEach'](function(a) {
        h[a] = e[a]['bind'](e);
      });
      this['onicecandidate'] = null;
      this['onaddstream'] = null;
      this['ontrack'] = null;
      this['onremovestream'] = null;
      this['onsignalingstatechange'] = null;
      this['oniceconnectionstatechange'] = null;
      this['onicegatheringstatechange'] = null;
      this['onnegotiationneeded'] = null;
      this['ondatachannel'] = null;
      this['canTrickleIceCandidates'] = null;
      this['needNegotiation'] = ![];
      this['localStreams'] = [];
      this['remoteStreams'] = [];
      this['localDescription'] = null;
      this['remoteDescription'] = null;
      this['signalingState'] = 'stable';
      this['iceConnectionState'] = 'new';
      this['iceGatheringState'] = 'new';
      b = JSON['parse'](JSON['stringify'](b || {}));
      this['usingBundle'] = b['bundlePolicy'] === 'max-bundle';
      if (b['rtcpMuxPolicy'] === 'negotiate') {
        var f = new Error('rtcpMuxPolicy \'negotiate\' is not supported');
        f['name'] = 'NotSupportedError';
        throw f;
      } else if (!b['rtcpMuxPolicy']) {
        b['rtcpMuxPolicy'] = 'require';
      }
      switch (b['iceTransportPolicy']) {
        case 'all':
        case 'relay':
          break;
        default:
          b['iceTransportPolicy'] = 'all';
          break;
      }
      switch (b['bundlePolicy']) {
        case 'balanced':
        case 'max-compat':
        case 'max-bundle':
          break;
        default:
          b['bundlePolicy'] = 'balanced';
          break;
      }
      b['iceServers'] = V(b['iceServers'] || [], d);
      this['_iceGatherers'] = [];
      if (b['iceCandidatePoolSize']) {
        for (var g = b['iceCandidatePoolSize']; g > 0x0; g--) {
          this['_iceGatherers'] = new c[('RTCIceGatherer')]({
            'iceServers': b['iceServers'],
            'gatherPolicy': b['iceTransportPolicy']
          });
        }
      } else {
        b['iceCandidatePoolSize'] = 0x0;
      }
      this['_config'] = b;
      this['transceivers'] = [];
      this['_sdpSessionId'] = a['generateSessionId']();
      this['_sdpSessionVersion'] = 0x0;
      this['_dtlsRole'] = undefined;
    };
    b['prototype']['_emitGatheringStateChange'] = function() {
      var a = new Event('icegatheringstatechange');
      this['dispatchEvent'](a);
      if (typeof this['onicegatheringstatechange'] === 'function') {
        this['onicegatheringstatechange'](a);
      }
    };
    b['prototype']['getConfiguration'] = function() {
      return this['_config'];
    };
    b['prototype']['getLocalStreams'] = function() {
      return this['localStreams'];
    };
    b['prototype']['getRemoteStreams'] = function() {
      return this['remoteStreams'];
    };
    b['prototype']['_createTransceiver'] = function(d) {
      var c = this['transceivers']['length'] > 0x0;
      var a = {
        'track': null,
        'iceGatherer': null,
        'iceTransport': null,
        'dtlsTransport': null,
        'localCapabilities': null,
        'remoteCapabilities': null,
        'rtpSender': null,
        'rtpReceiver': null,
        'kind': d,
        'mid': null,
        'sendEncodingParameters': null,
        'recvEncodingParameters': null,
        'stream': null,
        'wantReceive': !![]
      };
      if (this['usingBundle'] && c) {
        a['iceTransport'] = this['transceivers'][0x0]['iceTransport'];
        a['dtlsTransport'] = this['transceivers'][0x0]['dtlsTransport'];
      } else {
        var b = this['_createIceAndDtlsTransports']();
        a['iceTransport'] = b['iceTransport'];
        a['dtlsTransport'] = b['dtlsTransport'];
      }
      this['transceivers']['push'](a);
      return a;
    };
    b['prototype']['addTrack'] = function(d, e) {
      var a;
      for (var b = 0x0; b < this['transceivers']['length']; b++) {
        if (!this['transceivers'][b]['track'] && this['transceivers'][b]['kind'] === d['kind']) {
          a = this['transceivers'][b];
        }
      }
      if (!a) {
        a = this['_createTransceiver'](d['kind']);
      }
      this['_maybeFireNegotiationNeeded']();
      if (this['localStreams']['indexOf'](e) === -0x1) {
        this['localStreams']['push'](e);
      }
      a['track'] = d;
      a['stream'] = e;
      a['rtpSender'] = new c[('RTCRtpSender')](d, a['dtlsTransport']);
      return a['rtpSender'];
    };
    b['prototype']['addStream'] = function(a) {
      var c = this;
      if (d >= 0x3ab1) {
        a['getTracks']()['forEach'](function(b) {
          c['addTrack'](b, a);
        });
      } else {
        var b = a['clone']();
        a['getTracks']()['forEach'](function(c, d) {
          var a = b['getTracks']()[d];
          c['addEventListener']('enabled', function(b) {
            a['enabled'] = b['enabled'];
          });
        });
        b['getTracks']()['forEach'](function(a) {
          c['addTrack'](a, b);
        });
      }
    };
    b['prototype']['removeStream'] = function(b) {
      var a = this['localStreams']['indexOf'](b);
      if (a > -0x1) {
        this['localStreams']['splice'](a, 0x1);
        this['_maybeFireNegotiationNeeded']();
      }
    };
    b['prototype']['getSenders'] = function() {
      return this['transceivers']['filter'](function(a) {
        return !!a['rtpSender'];
      })['map'](function(a) {
        return a['rtpSender'];
      });
    };
    b['prototype']['getReceivers'] = function() {
      return this['transceivers']['filter'](function(a) {
        return !!a['rtpReceiver'];
      })['map'](function(a) {
        return a['rtpReceiver'];
      });
    };
    b['prototype']['_createIceGatherer'] = function(a, e) {
      var d = this;
      if (e && a > 0x0) {
        return this['transceivers'][0x0]['iceGatherer'];
      } else if (this['_iceGatherers']['length']) {
        return this['_iceGatherers']['shift']();
      }
      var b = new c[('RTCIceGatherer')]({
        'iceServers': this['_config']['iceServers'],
        'gatherPolicy': this['_config']['iceTransportPolicy']
      });
      Object['defineProperty'](b, 'state', {
        'value': 'new',
        'writable': !![]
      });
      this['transceivers'][a]['candidates'] = [];
      this['transceivers'][a]['bufferCandidates'] = function(c) {
        var e = !c['candidate'] || Object['keys'](c['candidate'])['length'] === 0x0;
        b['state'] = e ? 'completed' : 'gathering';
        if (d['transceivers'][a]['candidates'] !== null) {
          d['transceivers'][a]['candidates']['push'](c['candidate']);
        }
      };
      b['addEventListener']('localcandidate', this['transceivers'][a]['bufferCandidates']);
      return b;
    };
    b['prototype']['_gather'] = function(g, e) {
      var b = this;
      var d = this['transceivers'][e]['iceGatherer'];
      if (d['onlocalcandidate']) {
        return;
      }
      var f = this['transceivers'][e]['candidates'];
      this['transceivers'][e]['candidates'] = null;
      d['removeEventListener']('localcandidate', this['transceivers'][e]['bufferCandidates']);
      d['onlocalcandidate'] = function(k) {
        if (b['usingBundle'] && e > 0x0) {
          return;
        }
        var c = new Event('icecandidate');
        c['candidate'] = {
          'sdpMid': g,
          'sdpMLineIndex': e
        };
        var f = k['candidate'];
        var h = !f || Object['keys'](f)['length'] === 0x0;
        if (h) {
          if (d['state'] === 'new' || d['state'] === 'gathering') {
            d['state'] = 'completed';
          }
        } else {
          if (d['state'] === 'new') {
            d['state'] = 'gathering';
          }
          f['component'] = 0x1;
          c['candidate']['candidate'] = a['writeCandidate'](f);
        }
        var i = a['splitSections'](b['localDescription']['sdp']);
        if (!h) {
          i[c['candidate']['sdpMLineIndex'] + 0x1] += 'a=' + c['candidate']['candidate'] + '\x0d\x0a';
        } else {
          i[c['candidate']['sdpMLineIndex'] + 0x1] += 'a=end-of-candidates\r\n';
        }
        b['localDescription']['sdp'] = i['join']('');
        var j = b['transceivers']['every'](function(a) {
          return a['iceGatherer'] && a['iceGatherer']['state'] === 'completed';
        });
        if (b['iceGatheringState'] !== 'gathering') {
          b['iceGatheringState'] = 'gathering';
          b['_emitGatheringStateChange']();
        }
        if (!h) {
          b['dispatchEvent'](c);
          if (typeof b['onicecandidate'] === 'function') {
            b['onicecandidate'](c);
          }
        }
        if (j) {
          b['dispatchEvent'](new Event('icecandidate'));
          if (typeof b['onicecandidate'] === 'function') {
            b['onicecandidate'](new Event('icecandidate'));
          }
          b['iceGatheringState'] = 'complete';
          b['_emitGatheringStateChange']();
        }
      };
      c['setTimeout'](function() {
        f['forEach'](function(b) {
          var a = new Event('RTCIceGatherEvent');
          a['candidate'] = b;
          d['onlocalcandidate'](a);
        });
      }, 0x0);
    };
    b['prototype']['_createIceAndDtlsTransports'] = function() {
      var b = this;
      var d = new c[('RTCIceTransport')](null);
      d['onicestatechange'] = function() {
        b['_updateConnectionState']();
      };
      var a = new c[('RTCDtlsTransport')](d);
      a['ondtlsstatechange'] = function() {
        b['_updateConnectionState']();
      };
      a['onerror'] = function() {
        Object['defineProperty'](a, 'state', {
          'value': 'failed',
          'writable': !![]
        });
        b['_updateConnectionState']();
      };
      return {
        'iceTransport': d,
        'dtlsTransport': a
      };
    };
    b['prototype']['_disposeIceAndDtlsTransports'] = function(a) {
      var c = this['transceivers'][a]['iceGatherer'];
      if (c) {
        delete c['onlocalcandidate'];
        delete this['transceivers'][a]['iceGatherer'];
      }
      var d = this['transceivers'][a]['iceTransport'];
      if (d) {
        delete d['onicestatechange'];
        delete this['transceivers'][a]['iceTransport'];
      }
      var b = this['transceivers'][a]['dtlsTransport'];
      if (b) {
        delete b['ondtlsstatechange'];
        delete b['onerror'];
        delete this['transceivers'][a]['dtlsTransport'];
      }
    };
    b['prototype']['_transceive'] = function(b, e, f) {
      var c = m(b['localCapabilities'], b['remoteCapabilities']);
      if (e && b['rtpSender']) {
        c['encodings'] = b['sendEncodingParameters'];
        c['rtcp'] = {
          'cname': a['localCName'],
          'compound': b['rtcpParameters']['compound']
        };
        if (b['recvEncodingParameters']['length']) {
          c['rtcp']['ssrc'] = b['recvEncodingParameters'][0x0]['ssrc'];
        }
        b['rtpSender']['send'](c);
      }
      if (f && b['rtpReceiver'] && c['codecs']['length'] > 0x0) {
        if (b['kind'] === 'video' && b['recvEncodingParameters'] && d < 0x3aab) {
          b['recvEncodingParameters']['forEach'](function(a) {
            delete a['rtx'];
          });
        }
        c['encodings'] = b['recvEncodingParameters'];
        c['rtcp'] = {
          'cname': b['rtcpParameters']['cname'],
          'compound': b['rtcpParameters']['compound']
        };
        if (b['sendEncodingParameters']['length']) {
          c['rtcp']['ssrc'] = b['sendEncodingParameters'][0x0]['ssrc'];
        }
        b['rtpReceiver']['receive'](c);
      }
    };
    b['prototype']['setLocalDescription'] = function(b) {
      var c = this;
      var f = arguments;
      if (!y('setLocalDescription', b['type'], this['signalingState'])) {
        return new Promise(function(e, d) {
          var a = new Error('Can not set local ' + b['type'] + '\x20in\x20state\x20' + c['signalingState']);
          a['name'] = 'InvalidStateError';
          if (f['length'] > 0x2 && typeof f[0x2] === 'function') {
            f[0x2]['apply'](null, [a]);
          }
          d(a);
        });
      }
      var d;
      var e;
      if (b['type'] === 'offer') {
        d = a['splitSections'](b['sdp']);
        e = d['shift']();
        d['forEach'](function(d, e) {
          var b = a['parseRtpParameters'](d);
          c['transceivers'][e]['localCapabilities'] = b;
        });
        this['transceivers']['forEach'](function(a, b) {
          c['_gather'](a['mid'], b);
        });
      } else if (b['type'] === 'answer') {
        d = a['splitSections'](c['remoteDescription']['sdp']);
        e = d['shift']();
        var g = a['matchPrefix'](e, 'a=ice-lite')['length'] > 0x0;
        d['forEach'](function(d, h) {
          var b = c['transceivers'][h];
          var k = b['iceGatherer'];
          var i = b['iceTransport'];
          var f = b['dtlsTransport'];
          var l = b['localCapabilities'];
          var n = b['remoteCapabilities'];
          var o = a['isRejected'](d) && !a['matchPrefix'](d, 'a=bundle-only')['length'] === 0x1;
          if (!o && !b['isDatachannel']) {
            var p = a['getIceParameters'](d, e);
            var j = a['getDtlsParameters'](d, e);
            if (g) {
              j['role'] = 'server';
            }
            if (!c['usingBundle'] || h === 0x0) {
              c['_gather'](b['mid'], h);
              if (i['state'] === 'new') {
                i['start'](k, p, g ? 'controlling' : 'controlled');
              }
              if (f['state'] === 'new') {
                f['start'](j);
              }
            }
            var q = m(l, n);
            c['_transceive'](b, q['codecs']['length'] > 0x0, ![]);
          }
        });
      }
      this['localDescription'] = {
        'type': b['type'],
        'sdp': b['sdp']
      };
      switch (b['type']) {
        case 'offer':
          this['_updateSignalingState']('have-local-offer');
          break;
        case 'answer':
          this['_updateSignalingState']('stable');
          break;
        default:
          throw new TypeError('unsupported type "' + b['type'] + '\x22');
      }
      var h = arguments['length'] > 0x1 && typeof arguments[0x1] === 'function' && arguments[0x1];
      return new Promise(function(a) {
        if (h) {
          h['apply'](null);
        }
        a();
      });
    };
    b['prototype']['setRemoteDescription'] = function(f) {
      var b = this;
      var h = arguments;
      if (!y('setRemoteDescription', f['type'], this['signalingState'])) {
        return new Promise(function(d, c) {
          var a = new Error('Can not set remote ' + f['type'] + ' in state ' + b['signalingState']);
          a['name'] = 'InvalidStateError';
          if (h['length'] > 0x2 && typeof h[0x2] === 'function') {
            h[0x2]['apply'](null, [a]);
          }
          c(a);
        });
      }
      var e = {};
      this['remoteStreams']['forEach'](function(a) {
        e[a['id']] = a;
      });
      var j = [];
      var l = a['splitSections'](f['sdp']);
      var g = l['shift']();
      var m = a['matchPrefix'](g, 'a=ice-lite')['length'] > 0x0;
      var i = a['matchPrefix'](g, 'a=group:BUNDLE\x20')['length'] > 0x0;
      this['usingBundle'] = i;
      var k = a['matchPrefix'](g, 'a=ice-options:')[0x0];
      if (k) {
        this['canTrickleIceCandidates'] = k['substr'](0xe)['split']('\x20')['indexOf']('trickle') >= 0x0;
      } else {
        this['canTrickleIceCandidates'] = ![];
      }
      l['forEach'](function(l, k) {
        var K = a['splitLines'](l);
        var v = a['getKind'](l);
        var t = a['isRejected'](l) && !a['matchPrefix'](l, 'a=bundle-only')['length'] === 0x1;
        var J = K[0x0]['substr'](0x2)['split']('\x20')[0x2];
        var r = a['getDirection'](l, g);
        var n = a['parseMsid'](l);
        var C = a['getMid'](l) || a['generateIdentifier']();
        if (v === 'application' && J === 'DTLS/SCTP') {
          b['transceivers'][k] = {
            'mid': C,
            'isDatachannel': !![]
          };
          return;
        }
        var h;
        var I;
        var u;
        var D;
        var o;
        var A;
        var B;
        var w;
        var p;
        var E = a['parseRtpParameters'](l);
        var H;
        var G;
        if (!t) {
          H = a['getIceParameters'](l, g);
          G = a['getDtlsParameters'](l, g);
          G['role'] = 'client';
        }
        B = a['parseRtpEncodingParameters'](l);
        var F = a['parseRtcpParameters'](l);
        var z = a['matchPrefix'](l, 'a=end-of-candidates', g)['length'] > 0x0;
        var s = a['matchPrefix'](l, 'a=candidate:')['map'](function(b) {
          return a['parseCandidate'](b);
        })['filter'](function(a) {
          return a['component'] === 0x1;
        });
        if ((f['type'] === 'offer' || f['type'] === 'answer') && !t && i && k > 0x0 && b['transceivers'][k]) {
          b['_disposeIceAndDtlsTransports'](k);
          b['transceivers'][k]['iceGatherer'] = b['transceivers'][0x0]['iceGatherer'];
          b['transceivers'][k]['iceTransport'] = b['transceivers'][0x0]['iceTransport'];
          b['transceivers'][k]['dtlsTransport'] = b['transceivers'][0x0]['dtlsTransport'];
          if (b['transceivers'][k]['rtpSender']) {
            b['transceivers'][k]['rtpSender']['setTransport'](b['transceivers'][0x0]['dtlsTransport']);
          }
          if (b['transceivers'][k]['rtpReceiver']) {
            b['transceivers'][k]['rtpReceiver']['setTransport'](b['transceivers'][0x0]['dtlsTransport']);
          }
        }
        if (f['type'] === 'offer' && !t) {
          h = b['transceivers'][k] || b['_createTransceiver'](v);
          h['mid'] = C;
          if (!h['iceGatherer']) {
            h['iceGatherer'] = b['_createIceGatherer'](k, i);
          }
          if (s['length'] && h['iceTransport']['state'] === 'new') {
            if (z && (!i || k === 0x0)) {
              h['iceTransport']['setRemoteCandidates'](s);
            } else {
              s['forEach'](function(a) {
                q(h['iceTransport'], a);
              });
            }
          }
          w = c['RTCRtpReceiver']['getCapabilities'](v);
          if (d < 0x3aab) {
            w['codecs'] = w['codecs']['filter'](function(a) {
              return a['name'] !== 'rtx';
            });
          }
          A = h['sendEncodingParameters'] || [{
            'ssrc': (0x2 * k + 0x2) * 0x3e9
          }];
          var x = ![];
          if (r === 'sendrecv' || r === 'sendonly') {
            x = !h['rtpReceiver'];
            o = h['rtpReceiver'] || new c[('RTCRtpReceiver')](h['dtlsTransport'], v);
            if (x) {
              var y;
              p = o['track'];
              if (n) {
                if (!e[n['stream']]) {
                  e[n['stream']] = new c[('MediaStream')]();
                  Object['defineProperty'](e[n['stream']], 'id', {
                    'get': function() {
                      return n['stream'];
                    }
                  });
                }
                Object['defineProperty'](p, 'id', {
                  'get': function() {
                    return n['track'];
                  }
                });
                y = e[n['stream']];
              } else {
                if (!e['default']) {
                  e['default'] = new c[('MediaStream')]();
                }
                y = e['default'];
              }
              y['addTrack'](p);
              j['push']([p, o, y]);
            }
          }
          h['localCapabilities'] = w;
          h['remoteCapabilities'] = E;
          h['rtpReceiver'] = o;
          h['rtcpParameters'] = F;
          h['sendEncodingParameters'] = A;
          h['recvEncodingParameters'] = B;
          b['_transceive'](b['transceivers'][k], ![], x);
        } else if (f['type'] === 'answer' && !t) {
          h = b['transceivers'][k];
          I = h['iceGatherer'];
          u = h['iceTransport'];
          D = h['dtlsTransport'];
          o = h['rtpReceiver'];
          A = h['sendEncodingParameters'];
          w = h['localCapabilities'];
          b['transceivers'][k]['recvEncodingParameters'] = B;
          b['transceivers'][k]['remoteCapabilities'] = E;
          b['transceivers'][k]['rtcpParameters'] = F;
          if (s['length'] && u['state'] === 'new') {
            if ((m || z) && (!i || k === 0x0)) {
              u['setRemoteCandidates'](s);
            } else {
              s['forEach'](function(a) {
                q(h['iceTransport'], a);
              });
            }
          }
          if (!i || k === 0x0) {
            if (u['state'] === 'new') {
              u['start'](I, H, 'controlling');
            }
            if (D['state'] === 'new') {
              D['start'](G);
            }
          }
          b['_transceive'](h, r === 'sendrecv' || r === 'recvonly', r === 'sendrecv' || r === 'sendonly');
          if (o && (r === 'sendrecv' || r === 'sendonly')) {
            p = o['track'];
            if (n) {
              if (!e[n['stream']]) {
                e[n['stream']] = new c[('MediaStream')]();
              }
              e[n['stream']]['addTrack'](p);
              j['push']([p, o, e[n['stream']]]);
            } else {
              if (!e['default']) {
                e['default'] = new c['MediaStream']();
              }
              e['default']['addTrack'](p);
              j['push']([p, o, e['default']]);
            }
          } else {
            delete h['rtpReceiver'];
          }
        }
      });
      if (this['_dtlsRole'] === undefined) {
        this['_dtlsRole'] = f['type'] === 'offer' ? 'active' : 'passive';
      }
      this['remoteDescription'] = {
        'type': f['type'],
        'sdp': f['sdp']
      };
      switch (f['type']) {
        case 'offer':
          this['_updateSignalingState']('have-remote-offer');
          break;
        case 'answer':
          this['_updateSignalingState']('stable');
          break;
        default:
          throw new TypeError('unsupported type "' + f['type'] + '\x22');
      }
      Object['keys'](e)['forEach'](function(f) {
        var a = e[f];
        if (a['getTracks']()['length']) {
          if (b['remoteStreams']['indexOf'](a) === -0x1) {
            b['remoteStreams']['push'](a);
            var d = new Event('addstream');
            d['stream'] = a;
            c['setTimeout'](function() {
              b['dispatchEvent'](d);
              if (typeof b['onaddstream'] === 'function') {
                b['onaddstream'](d);
              }
            });
          }
          j['forEach'](function(e) {
            var g = e[0x0];
            var f = e[0x1];
            if (a['id'] !== e[0x2]['id']) {
              return;
            }
            var d = new Event('track');
            d['track'] = g;
            d['receiver'] = f;
            d['transceiver'] = {
              'receiver': f
            };
            d['streams'] = [a];
            c['setTimeout'](function() {
              b['dispatchEvent'](d);
              if (typeof b['ontrack'] === 'function') {
                b['ontrack'](d);
              }
            });
          });
        }
      });
      c['setTimeout'](function() {
        if (!(b && b['transceivers'])) {
          return;
        }
        b['transceivers']['forEach'](function(a) {
          if (a['iceTransport'] && a['iceTransport']['state'] === 'new' && a['iceTransport']['getRemoteCandidates']()['length'] > 0x0) {
            console['warn']('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
            a['iceTransport']['addRemoteCandidate']({});
          }
        });
      }, 0xfa0);
      return new Promise(function(a) {
        if (h['length'] > 0x1 && typeof h[0x1] === 'function') {
          h[0x1]['apply'](null);
        }
        a();
      });
    };
    b['prototype']['close'] = function() {
      this['transceivers']['forEach'](function(a) {
        if (a['iceTransport']) {
          a['iceTransport']['stop']();
        }
        if (a['dtlsTransport']) {
          a['dtlsTransport']['stop']();
        }
        if (a['rtpSender']) {
          a['rtpSender']['stop']();
        }
        if (a['rtpReceiver']) {
          a['rtpReceiver']['stop']();
        }
      });
      this['_updateSignalingState']('closed');
    };
    b['prototype']['_updateSignalingState'] = function(b) {
      this['signalingState'] = b;
      var a = new Event('signalingstatechange');
      this['dispatchEvent'](a);
      if (typeof this['onsignalingstatechange'] === 'function') {
        this['onsignalingstatechange'](a);
      }
    };
    b['prototype']['_maybeFireNegotiationNeeded'] = function() {
      var a = this;
      if (this['signalingState'] !== 'stable' || this['needNegotiation'] === !![]) {
        return;
      }
      this['needNegotiation'] = !![];
      c['setTimeout'](function() {
        if (a['needNegotiation'] === ![]) {
          return;
        }
        a['needNegotiation'] = ![];
        var b = new Event('negotiationneeded');
        a['dispatchEvent'](b);
        if (typeof a['onnegotiationneeded'] === 'function') {
          a['onnegotiationneeded'](b);
        }
      }, 0x0);
    };
    b['prototype']['_updateConnectionState'] = function() {
      var c = this;
      var b;
      var a = {
        'new': 0x0,
        'closed': 0x0,
        'connecting': 0x0,
        'checking': 0x0,
        'connected': 0x0,
        'completed': 0x0,
        'disconnected': 0x0,
        'failed': 0x0
      };
      this['transceivers']['forEach'](function(b) {
        a[b['iceTransport']['state']]++;
        a[b['dtlsTransport']['state']]++;
      });
      a['connected'] += a['completed'];
      b = 'new';
      if (a['failed'] > 0x0) {
        b = 'failed';
      } else if (a['connecting'] > 0x0 || a['checking'] > 0x0) {
        b = 'connecting';
      } else if (a['disconnected'] > 0x0) {
        b = 'disconnected';
      } else if (a['new'] > 0x0) {
        b = 'new';
      } else if (a['connected'] > 0x0 || a['completed'] > 0x0) {
        b = 'connected';
      }
      if (b !== c['iceConnectionState']) {
        c['iceConnectionState'] = b;
        var d = new Event('iceconnectionstatechange');
        this['dispatchEvent'](d);
        if (typeof this['oniceconnectionstatechange'] === 'function') {
          this['oniceconnectionstatechange'](d);
        }
      }
    };
    b['prototype']['createOffer'] = function() {
      var h = this;
      var i = arguments;
      var b;
      if (arguments['length'] === 0x1 && typeof arguments[0x0] !== 'function') {
        b = arguments[0x0];
      } else if (arguments['length'] === 0x3) {
        b = arguments[0x2];
      }
      var e = this['transceivers']['filter'](function(a) {
        return a['kind'] === 'audio';
      })['length'];
      var f = this['transceivers']['filter'](function(a) {
        return a['kind'] === 'video';
      })['length'];
      if (b) {
        if (b['mandatory'] || b['optional']) {
          throw new TypeError('Legacy mandatory/optional constraints not supported.');
        }
        if (b['offerToReceiveAudio'] !== undefined) {
          if (b['offerToReceiveAudio'] === !![]) {
            e = 0x1;
          } else if (b['offerToReceiveAudio'] === ![]) {
            e = 0x0;
          } else {
            e = b['offerToReceiveAudio'];
          }
        }
        if (b['offerToReceiveVideo'] !== undefined) {
          if (b['offerToReceiveVideo'] === !![]) {
            f = 0x1;
          } else if (b['offerToReceiveVideo'] === ![]) {
            f = 0x0;
          } else {
            f = b['offerToReceiveVideo'];
          }
        }
      }
      this['transceivers']['forEach'](function(a) {
        if (a['kind'] === 'audio') {
          e--;
          if (e < 0x0) {
            a['wantReceive'] = ![];
          }
        } else if (a['kind'] === 'video') {
          f--;
          if (f < 0x0) {
            a['wantReceive'] = ![];
          }
        }
      });
      while (e > 0x0 || f > 0x0) {
        if (e > 0x0) {
          this['_createTransceiver']('audio');
          e--;
        }
        if (f > 0x0) {
          this['_createTransceiver']('video');
          f--;
        }
      }
      var g = a['writeSessionBoilerplate'](this['_sdpSessionId'], this['_sdpSessionVersion']++);
      this['transceivers']['forEach'](function(b, i) {
        var j = b['track'];
        var g = b['kind'];
        var k = a['generateIdentifier']();
        b['mid'] = k;
        if (!b['iceGatherer']) {
          b['iceGatherer'] = h['_createIceGatherer'](i, h['usingBundle']);
        }
        var e = c['RTCRtpSender']['getCapabilities'](g);
        if (d < 0x3aab) {
          e['codecs'] = e['codecs']['filter'](function(a) {
            return a['name'] !== 'rtx';
          });
        }
        e['codecs']['forEach'](function(a) {
          if (a['name'] === 'H264' && a['parameters']['level-asymmetry-allowed'] === undefined) {
            a['parameters']['level-asymmetry-allowed'] = '1';
          }
        });
        var f = b['sendEncodingParameters'] || [{
          'ssrc': (0x2 * i + 0x1) * 0x3e9
        }];
        if (j) {
          if (d >= 0x3aab && g === 'video' && !f[0x0]['rtx']) {
            f[0x0]['rtx'] = {
              'ssrc': f[0x0]['ssrc'] + 0x1
            };
          }
        }
        if (b['wantReceive']) {
          b['rtpReceiver'] = new c[('RTCRtpReceiver')](b['dtlsTransport'], g);
        }
        b['localCapabilities'] = e;
        b['sendEncodingParameters'] = f;
      });
      if (this['_config']['bundlePolicy'] !== 'max-compat') {
        g += 'a=group:BUNDLE\x20' + this['transceivers']['map'](function(a) {
          return a['mid'];
        })['join']('\x20') + '\x0d\x0a';
      }
      g += 'a=ice-options:trickle\r\n';
      this['transceivers']['forEach'](function(b, c) {
        g += v(b, b['localCapabilities'], 'offer', b['stream'], h['_dtlsRole']);
        g += 'a=rtcp-rsize\r\n';
        if (b['iceGatherer'] && h['iceGatheringState'] !== 'new' && (c === 0x0 || !h['usingBundle'])) {
          b['iceGatherer']['getLocalCandidates']()['forEach'](function(b) {
            b['component'] = 0x1;
            g += 'a=' + a['writeCandidate'](b) + '\x0d\x0a';
          });
          if (b['iceGatherer']['state'] === 'completed') {
            g += 'a=end-of-candidates\r\n';
          }
        }
      });
      var j = new c[('RTCSessionDescription')]({
        'type': 'offer',
        'sdp': g
      });
      return new Promise(function(a) {
        if (i['length'] > 0x0 && typeof i[0x0] === 'function') {
          i[0x0]['apply'](null, [j]);
          a();
          return;
        }
        a(j);
      });
    };
    b['prototype']['createAnswer'] = function() {
      var g = this;
      var e = arguments;
      var b = a['writeSessionBoilerplate'](this['_sdpSessionId'], this['_sdpSessionVersion']++);
      if (this['usingBundle']) {
        b += 'a=group:BUNDLE ' + this['transceivers']['map'](function(a) {
          return a['mid'];
        })['join']('\x20') + '\x0d\x0a';
      }
      var h = a['splitSections'](this['remoteDescription']['sdp'])['length'] - 0x1;
      this['transceivers']['forEach'](function(a, i) {
        if (i + 0x1 > h) {
          return;
        }
        if (a['isDatachannel']) {
          b += 'm=application 0 DTLS/SCTP 5000\r\n' + 'c=IN IP4 0.0.0.0\r\n' + 'a=mid:' + a['mid'] + '\x0d\x0a';
          return;
        }
        if (a['stream']) {
          var c;
          if (a['kind'] === 'audio') {
            c = a['stream']['getAudioTracks']()[0x0];
          } else if (a['kind'] === 'video') {
            c = a['stream']['getVideoTracks']()[0x0];
          }
          if (c) {
            if (d >= 0x3aab && a['kind'] === 'video' && !a['sendEncodingParameters'][0x0]['rtx']) {
              a['sendEncodingParameters'][0x0]['rtx'] = {
                'ssrc': a['sendEncodingParameters'][0x0]['ssrc'] + 0x1
              };
            }
          }
        }
        var e = m(a['localCapabilities'], a['remoteCapabilities']);
        var f = e['codecs']['filter'](function(a) {
          return a['name']['toLowerCase']() === 'rtx';
        })['length'];
        if (!f && a['sendEncodingParameters'][0x0]['rtx']) {
          delete a['sendEncodingParameters'][0x0]['rtx'];
        }
        b += v(a, e, 'answer', a['stream'], g['_dtlsRole']);
        if (a['rtcpParameters'] && a['rtcpParameters']['reducedSize']) {
          b += 'a=rtcp-rsize\x0d\x0a';
        }
      });
      var f = new c[('RTCSessionDescription')]({
        'type': 'answer',
        'sdp': b
      });
      return new Promise(function(a) {
        if (e['length'] > 0x0 && typeof e[0x0] === 'function') {
          e[0x0]['apply'](null, [f]);
          a();
          return;
        }
        a(f);
      });
    };
    b['prototype']['addIceCandidate'] = function(c) {
      var b;
      var h;
      if (!c || c['candidate'] === '') {
        for (var f = 0x0; f < this['transceivers']['length']; f++) {
          if (this['transceivers'][f]['isDatachannel']) {
            continue;
          }
          this['transceivers'][f]['iceTransport']['addRemoteCandidate']({});
          h = a['splitSections'](this['remoteDescription']['sdp']);
          h[f + 0x1] += 'a=end-of-candidates\x0d\x0a';
          this['remoteDescription']['sdp'] = h['join']('');
          if (this['usingBundle']) {
            break;
          }
        }
      } else if (!(c['sdpMLineIndex'] || c['sdpMid'])) {
        throw new TypeError('sdpMLineIndex or sdpMid required');
      } else if (!this['remoteDescription']) {
        b = new Error('Can not add ICE candidate without ' + 'a\x20remote\x20description');
        b['name'] = 'InvalidStateError';
      } else {
        var g = c['sdpMLineIndex'];
        if (c['sdpMid']) {
          for (var j = 0x0; j < this['transceivers']['length']; j++) {
            if (this['transceivers'][j]['mid'] === c['sdpMid']) {
              g = j;
              break;
            }
          }
        }
        var i = this['transceivers'][g];
        if (i) {
          if (i['isDatachannel']) {
            return Promise['resolve']();
          }
          var d = Object['keys'](c['candidate'])['length'] > 0x0 ? a['parseCandidate'](c['candidate']) : {};
          if (d['protocol'] === 'tcp' && (d['port'] === 0x0 || d['port'] === 0x9)) {
            return Promise['resolve']();
          }
          if (d['component'] && d['component'] !== 0x1) {
            return Promise['resolve']();
          }
          if (g === 0x0 || g > 0x0 && i['iceTransport'] !== this['transceivers'][0x0]['iceTransport']) {
            if (!q(i['iceTransport'], d)) {
              b = new Error('Can not add ICE candidate');
              b['name'] = 'OperationError';
            }
          }
          if (!b) {
            var k = c['candidate']['trim']();
            if (k['indexOf']('a=') === 0x0) {
              k = k['substr'](0x2);
            }
            h = a['splitSections'](this['remoteDescription']['sdp']);
            h[g + 0x1] += 'a=' + (d['type'] ? k : 'end-of-candidates') + '\x0d\x0a';
            this['remoteDescription']['sdp'] = h['join']('');
          }
        } else {
          b = new Error('Can\x20not\x20add\x20ICE\x20candidate');
          b['name'] = 'OperationError';
        }
      }
      var e = arguments;
      return new Promise(function(a, c) {
        if (b) {
          if (e['length'] > 0x2 && typeof e[0x2] === 'function') {
            e[0x2]['apply'](null, [b]);
          }
          c(b);
        } else {
          if (e['length'] > 0x1 && typeof e[0x1] === 'function') {
            e[0x1]['apply'](null);
          }
          a();
        }
      });
    };
    b['prototype']['getStats'] = function() {
      var a = [];
      this['transceivers']['forEach'](function(b) {
        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport']['forEach'](function(c) {
          if (b[c]) {
            a['push'](b[c]['getStats']());
          }
        });
      });
      var b = arguments['length'] > 0x1 && typeof arguments[0x1] === 'function' && arguments[0x1];
      var c = function(a) {
        return {
          'inboundrtp': 'inbound-rtp',
          'outboundrtp': 'outbound-rtp',
          'candidatepair': 'candidate-pair',
          'localcandidate': 'local-candidate',
          'remotecandidate': 'remote-candidate'
        }[a['type']] || a['type'];
      };
      return new Promise(function(e) {
        var d = new Map();
        Promise['all'](a)['then'](function(a) {
          a['forEach'](function(a) {
            Object['keys'](a)['forEach'](function(b) {
              a[b]['type'] = c(a[b]);
              d['set'](b, a[b]);
            });
          });
          if (b) {
            b['apply'](null, d);
          }
          e(d);
        });
      });
    };
    return b;
  };
  'use\x20strict';
  var B = function(b) {
    var a = b && b['navigator'];
    var c = function(a) {
      return {
        'name': {
          'PermissionDeniedError': 'NotAllowedError'
        }[a['name']] || a['name'],
        'message': a['message'],
        'constraint': a['constraint'],
        'toString': function() {
          return this['name'];
        }
      };
    };
    var d = a['mediaDevices']['getUserMedia']['bind'](a['mediaDevices']);
    a['mediaDevices']['getUserMedia'] = function(a) {
      return d(a)['catch'](function(a) {
        return Promise['reject'](c(a));
      });
    };
  };
  'use strict';
  var C = {
    'shimGetUserMedia': B,
    'shimPeerConnection': function(a) {
      var c = b['detectBrowser'](a);
      if (a['RTCIceGatherer']) {
        if (!a['RTCIceCandidate']) {
          a['RTCIceCandidate'] = function(a) {
            return a;
          };
        }
        if (!a['RTCSessionDescription']) {
          a['RTCSessionDescription'] = function(a) {
            return a;
          };
        }
        if (c['version'] < 0x3ab1) {
          var d = Object['getOwnPropertyDescriptor'](a['MediaStreamTrack']['prototype'], 'enabled');
          Object['defineProperty'](a['MediaStreamTrack']['prototype'], 'enabled', {
            'set': function(b) {
              d['set']['call'](this, b);
              var a = new Event('enabled');
              a['enabled'] = b;
              this['dispatchEvent'](a);
            }
          });
        }
      }
      if (a['RTCRtpSender'] && !('dtmf' in a['RTCRtpSender']['prototype'])) {
        Object['defineProperty'](a['RTCRtpSender']['prototype'], 'dtmf', {
          'get': function() {
            if (this['_dtmf'] === undefined) {
              if (this['track']['kind'] === 'audio') {
                this['_dtmf'] = new a[('RTCDtmfSender')](this);
              } else if (this['track']['kind'] === 'video') {
                this['_dtmf'] = null;
              }
            }
            return this['_dtmf'];
          }
        });
      }
      a['RTCPeerConnection'] = A(a, c['version']);
    },
    'shimReplaceTrack': function(a) {
      if (a['RTCRtpSender'] && !('replaceTrack' in a['RTCRtpSender']['prototype'])) {
        a['RTCRtpSender']['prototype']['replaceTrack'] = a['RTCRtpSender']['prototype']['setTrack'];
      }
    }
  };
  'use strict';
  var o = b['log'];
  var E = function(f) {
    var e = b['detectBrowser'](f);
    var a = f && f['navigator'];
    var c = f && f['MediaStreamTrack'];
    var g = function(a) {
      return {
        'name': {
          'InternalError': 'NotReadableError',
          'NotSupportedError': 'TypeError',
          'PermissionDeniedError': 'NotAllowedError',
          'SecurityError': 'NotAllowedError'
        }[a['name']] || a['name'],
        'message': {
          'The operation is insecure.': 'The request is not allowed by the ' + 'user agent or the platform in the current context.'
        }[a['message']] || a['message'],
        'constraint': a['constraint'],
        'toString': function() {
          return this['name'] + (this['message'] && ':\x20') + this['message'];
        }
      };
    };
    var h = function(b, d, f) {
      var c = function(a) {
        if (typeof a !== 'object' || a['require']) {
          return a;
        }
        var b = [];
        Object['keys'](a)['forEach'](function(d) {
          if (d === 'require' || d === 'advanced' || d === 'mediaSource') {
            return;
          }
          var c = a[d] = typeof a[d] === 'object' ? a[d] : {
            'ideal': a[d]
          };
          if (c['min'] !== undefined || c['max'] !== undefined || c['exact'] !== undefined) {
            b['push'](d);
          }
          if (c['exact'] !== undefined) {
            if (typeof c['exact'] === 'number') {
              c['min'] = c['max'] = c['exact'];
            } else {
              a[d] = c['exact'];
            }
            delete c['exact'];
          }
          if (c['ideal'] !== undefined) {
            a['advanced'] = a['advanced'] || [];
            var e = {};
            if (typeof c['ideal'] === 'number') {
              e[d] = {
                'min': c['ideal'],
                'max': c['ideal']
              };
            } else {
              e[d] = c['ideal'];
            }
            a['advanced']['push'](e);
            delete c['ideal'];
            if (!Object['keys'](c)['length']) {
              delete a[d];
            }
          }
        });
        if (b['length']) {
          a['require'] = b;
        }
        return a;
      };
      b = JSON['parse'](JSON['stringify'](b));
      if (e['version'] < 0x26) {
        o('spec: ' + JSON['stringify'](b));
        if (b['audio']) {
          b['audio'] = c(b['audio']);
        }
        if (b['video']) {
          b['video'] = c(b['video']);
        }
        o('ff37: ' + JSON['stringify'](b));
      }
      return a['mozGetUserMedia'](b, d, function(a) {
        f(g(a));
      });
    };
    var i = function(a) {
      return new Promise(function(b, c) {
        h(a, b, c);
      });
    };
    if (!a['mediaDevices']) {
      a['mediaDevices'] = {
        'getUserMedia': i,
        'addEventListener': function() {},
        'removeEventListener': function() {}
      };
    }
    a['mediaDevices']['enumerateDevices'] = a['mediaDevices']['enumerateDevices'] || function() {
      return new Promise(function(b) {
        var a = [{
          'kind': 'audioinput',
          'deviceId': 'default',
          'label': '',
          'groupId': ''
        }, {
          'kind': 'videoinput',
          'deviceId': 'default',
          'label': '',
          'groupId': ''
        }];
        b(a);
      });
    };
    if (e['version'] < 0x29) {
      var j = a['mediaDevices']['enumerateDevices']['bind'](a['mediaDevices']);
      a['mediaDevices']['enumerateDevices'] = function() {
        return j()['then'](undefined, function(a) {
          if (a['name'] === 'NotFoundError') {
            return [];
          }
          throw a;
        });
      };
    }
    if (e['version'] < 0x31) {
      var k = a['mediaDevices']['getUserMedia']['bind'](a['mediaDevices']);
      a['mediaDevices']['getUserMedia'] = function(a) {
        return k(a)['then'](function(b) {
          if (a['audio'] && !b['getAudioTracks']()['length'] || a['video'] && !b['getVideoTracks']()['length']) {
            b['getTracks']()['forEach'](function(a) {
              a['stop']();
            });
            throw new DOMException('The object can not be found here.', 'NotFoundError');
          }
          return b;
        }, function(a) {
          return Promise['reject'](g(a));
        });
      };
    }
    if (!(e['version'] > 0x37 && 'autoGainControl' in a['mediaDevices']['getSupportedConstraints']())) {
      var d = function(a, b, c) {
        if (b in a && !(c in a)) {
          a[c] = a[b];
          delete a[b];
        }
      };
      var m = a['mediaDevices']['getUserMedia']['bind'](a['mediaDevices']);
      a['mediaDevices']['getUserMedia'] = function(a) {
        if (typeof a === 'object' && typeof a['audio'] === 'object') {
          a = JSON['parse'](JSON['stringify'](a));
          d(a['audio'], 'autoGainControl', 'mozAutoGainControl');
          d(a['audio'], 'noiseSuppression', 'mozNoiseSuppression');
        }
        return m(a);
      };
      if (c && c['prototype']['getSettings']) {
        var n = c['prototype']['getSettings'];
        c['prototype']['getSettings'] = function() {
          var a = n['apply'](this, arguments);
          d(a, 'mozAutoGainControl', 'autoGainControl');
          d(a, 'mozNoiseSuppression', 'noiseSuppression');
          return a;
        };
      }
      if (c && c['prototype']['applyConstraints']) {
        var l = c['prototype']['applyConstraints'];
        c['prototype']['applyConstraints'] = function(a) {
          if (this['kind'] === 'audio' && typeof a === 'object') {
            a = JSON['parse'](JSON['stringify'](a));
            d(a, 'autoGainControl', 'mozAutoGainControl');
            d(a, 'noiseSuppression', 'mozNoiseSuppression');
          }
          return l['apply'](this, [a]);
        };
      }
    }
    a['getUserMedia'] = function(c, d, f) {
      if (e['version'] < 0x2c) {
        return h(c, d, f);
      }
      b['deprecated']('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
      a['mediaDevices']['getUserMedia'](c)['then'](d, f);
    };
  };
  'use strict';
  var l = {
    'shimOnTrack': function(a) {
      if (typeof a === 'object' && a['RTCPeerConnection'] && !('ontrack' in a['RTCPeerConnection']['prototype'])) {
        Object['defineProperty'](a['RTCPeerConnection']['prototype'], 'ontrack', {
          'get': function() {
            return this['_ontrack'];
          },
          'set': function(a) {
            if (this['_ontrack']) {
              this['removeEventListener']('track', this['_ontrack']);
              this['removeEventListener']('addstream', this['_ontrackpoly']);
            }
            this['addEventListener']('track', this['_ontrack'] = a);
            this['addEventListener']('addstream', this['_ontrackpoly'] = function(a) {
              a['stream']['getTracks']()['forEach'](function(c) {
                var b = new Event('track');
                b['track'] = c;
                b['receiver'] = {
                  'track': c
                };
                b['transceiver'] = {
                  'receiver': b['receiver']
                };
                b['streams'] = [a['stream']];
                this['dispatchEvent'](b);
              }['bind'](this));
            }['bind'](this));
          }
        });
      }
      if (typeof a === 'object' && a['RTCTrackEvent'] && 'receiver' in a['RTCTrackEvent']['prototype'] && !('transceiver' in a['RTCTrackEvent']['prototype'])) {
        Object['defineProperty'](a['RTCTrackEvent']['prototype'], 'transceiver', {
          'get': function() {
            return {
              'receiver': this['receiver']
            };
          }
        });
      }
    },
    'shimSourceObject': function(a) {
      if (typeof a === 'object') {
        if (a['HTMLMediaElement'] && !('srcObject' in a['HTMLMediaElement']['prototype'])) {
          Object['defineProperty'](a['HTMLMediaElement']['prototype'], 'srcObject', {
            'get': function() {
              return this['mozSrcObject'];
            },
            'set': function(a) {
              this['mozSrcObject'] = a;
            }
          });
        }
      }
    },
    'shimPeerConnection': function(a) {
      var c = b['detectBrowser'](a);
      if (typeof a !== 'object' || !(a['RTCPeerConnection'] || a['mozRTCPeerConnection'])) {
        return;
      }
      if (!a['RTCPeerConnection']) {
        a['RTCPeerConnection'] = function(b, i) {
          if (c['version'] < 0x26) {
            if (b && b['iceServers']) {
              var g = [];
              for (var e = 0x0; e < b['iceServers']['length']; e++) {
                var d = b['iceServers'][e];
                if (d['hasOwnProperty']('urls')) {
                  for (var f = 0x0; f < d['urls']['length']; f++) {
                    var h = {
                      'url': d['urls'][f]
                    };
                    if (d['urls'][f]['indexOf']('turn') === 0x0) {
                      h['username'] = d['username'];
                      h['credential'] = d['credential'];
                    }
                    g['push'](h);
                  }
                } else {
                  g['push'](b['iceServers'][e]);
                }
              }
              b['iceServers'] = g;
            }
          }
          return new a[('mozRTCPeerConnection')](b, i);
        };
        a['RTCPeerConnection']['prototype'] = a['mozRTCPeerConnection']['prototype'];
        if (a['mozRTCPeerConnection']['generateCertificate']) {
          Object['defineProperty'](a['RTCPeerConnection'], 'generateCertificate', {
            'get': function() {
              return a['mozRTCPeerConnection']['generateCertificate'];
            }
          });
        }
        a['RTCSessionDescription'] = a['mozRTCSessionDescription'];
        a['RTCIceCandidate'] = a['mozRTCIceCandidate'];
      }['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']['forEach'](function(b) {
        var c = a['RTCPeerConnection']['prototype'][b];
        a['RTCPeerConnection']['prototype'][b] = function() {
          arguments[0x0] = new(b === ('addIceCandidate') ? a[('RTCIceCandidate')] : a[('RTCSessionDescription')])(arguments[0x0]);
          return c['apply'](this, arguments);
        };
      });
      var e = a['RTCPeerConnection']['prototype']['addIceCandidate'];
      a['RTCPeerConnection']['prototype']['addIceCandidate'] = function() {
        if (!arguments[0x0]) {
          if (arguments[0x1]) {
            arguments[0x1]['apply'](null);
          }
          return Promise['resolve']();
        }
        return e['apply'](this, arguments);
      };
      var f = function(b) {
        var a = new Map();
        Object['keys'](b)['forEach'](function(c) {
          a['set'](c, b[c]);
          a[c] = b[c];
        });
        return a;
      };
      var d = {
        'inboundrtp': 'inbound-rtp',
        'outboundrtp': 'outbound-rtp',
        'candidatepair': 'candidate-pair',
        'localcandidate': 'local-candidate',
        'remotecandidate': 'remote-candidate'
      };
      var g = a['RTCPeerConnection']['prototype']['getStats'];
      a['RTCPeerConnection']['prototype']['getStats'] = function(b, a, e) {
        return g['apply'](this, [b || null])['then'](function(b) {
          if (c['version'] < 0x30) {
            b = f(b);
          }
          if (c['version'] < 0x35 && !a) {
            try {
              b['forEach'](function(a) {
                a['type'] = d[a['type']] || a['type'];
              });
            } catch (a) {
              if (a['name'] !== 'TypeError') {
                throw a;
              }
              b['forEach'](function(a, c) {
                b['set'](c, Object['assign']({}, a, {
                  'type': d[a['type']] || a['type']
                }));
              });
            }
          }
          return b;
        })['then'](a, e);
      };
    }
  };
  var G = {
    'shimOnTrack': l['shimOnTrack'],
    'shimSourceObject': l['shimSourceObject'],
    'shimPeerConnection': l['shimPeerConnection'],
    'shimGetUserMedia': E
  };
  'use strict';
  var f = {
    'shimLocalStreamsAPI': function(a) {
      if (typeof a !== 'object' || !a['RTCPeerConnection']) {
        return;
      }
      if (!('getLocalStreams' in a['RTCPeerConnection']['prototype'])) {
        a['RTCPeerConnection']['prototype']['getLocalStreams'] = function() {
          if (!this['_localStreams']) {
            this['_localStreams'] = [];
          }
          return this['_localStreams'];
        };
      }
      if (!('getStreamById' in a['RTCPeerConnection']['prototype'])) {
        a['RTCPeerConnection']['prototype']['getStreamById'] = function(b) {
          var a = null;
          if (this['_localStreams']) {
            this['_localStreams']['forEach'](function(c) {
              if (c['id'] === b) {
                a = c;
              }
            });
          }
          if (this['_remoteStreams']) {
            this['_remoteStreams']['forEach'](function(c) {
              if (c['id'] === b) {
                a = c;
              }
            });
          }
          return a;
        };
      }
      if (!('addStream' in a['RTCPeerConnection']['prototype'])) {
        var b = a['RTCPeerConnection']['prototype']['addTrack'];
        a['RTCPeerConnection']['prototype']['addStream'] = function(a) {
          if (!this['_localStreams']) {
            this['_localStreams'] = [];
          }
          if (this['_localStreams']['indexOf'](a) === -0x1) {
            this['_localStreams']['push'](a);
          }
          var c = this;
          a['getTracks']()['forEach'](function(d) {
            b['call'](c, d, a);
          });
        };
        a['RTCPeerConnection']['prototype']['addTrack'] = function(c, a) {
          if (a) {
            if (!this['_localStreams']) {
              this['_localStreams'] = [a];
            } else if (this['_localStreams']['indexOf'](a) === -0x1) {
              this['_localStreams']['push'](a);
            }
          }
          b['call'](this, c, a);
        };
      }
      if (!('removeStream' in a['RTCPeerConnection']['prototype'])) {
        a['RTCPeerConnection']['prototype']['removeStream'] = function(b) {
          if (!this['_localStreams']) {
            this['_localStreams'] = [];
          }
          var a = this['_localStreams']['indexOf'](b);
          if (a === -0x1) {
            return;
          }
          this['_localStreams']['splice'](a, 0x1);
          var c = this;
          var d = b['getTracks']();
          this['getSenders']()['forEach'](function(a) {
            if (d['indexOf'](a['track']) !== -0x1) {
              c['removeTrack'](a);
            }
          });
        };
      }
    },
    'shimRemoteStreamsAPI': function(a) {
      if (typeof a !== 'object' || !a['RTCPeerConnection']) {
        return;
      }
      if (!('getRemoteStreams' in a['RTCPeerConnection']['prototype'])) {
        a['RTCPeerConnection']['prototype']['getRemoteStreams'] = function() {
          return this['_remoteStreams'] ? this['_remoteStreams'] : [];
        };
      }
      if (!('onaddstream' in a['RTCPeerConnection']['prototype'])) {
        Object['defineProperty'](a['RTCPeerConnection']['prototype'], 'onaddstream', {
          'get': function() {
            return this['_onaddstream'];
          },
          'set': function(a) {
            if (this['_onaddstream']) {
              this['removeEventListener']('addstream', this['_onaddstream']);
              this['removeEventListener']('track', this['_onaddstreampoly']);
            }
            this['addEventListener']('addstream', this['_onaddstream'] = a);
            this['addEventListener']('track', this['_onaddstreampoly'] = function(c) {
              var a = c['streams'][0x0];
              if (!this['_remoteStreams']) {
                this['_remoteStreams'] = [];
              }
              if (this['_remoteStreams']['indexOf'](a) >= 0x0) {
                return;
              }
              this['_remoteStreams']['push'](a);
              var b = new Event('addstream');
              b['stream'] = c['streams'][0x0];
              this['dispatchEvent'](b);
            }['bind'](this));
          }
        });
      }
    },
    'shimCallbacksAPI': function(c) {
      if (typeof c !== 'object' || !c['RTCPeerConnection']) {
        return;
      }
      var a = c['RTCPeerConnection']['prototype'];
      var d = a['createOffer'];
      var e = a['createAnswer'];
      var f = a['setLocalDescription'];
      var g = a['setRemoteDescription'];
      var h = a['addIceCandidate'];
      a['createOffer'] = function(e, b) {
        var c = arguments['length'] >= 0x2 ? arguments[0x2] : arguments[0x0];
        var a = d['apply'](this, [c]);
        if (!b) {
          return a;
        }
        a['then'](e, b);
        return Promise['resolve']();
      };
      a['createAnswer'] = function(d, b) {
        var c = arguments['length'] >= 0x2 ? arguments[0x2] : arguments[0x0];
        var a = e['apply'](this, [c]);
        if (!b) {
          return a;
        }
        a['then'](d, b);
        return Promise['resolve']();
      };
      var b = function(c, d, b) {
        var a = f['apply'](this, [c]);
        if (!b) {
          return a;
        }
        a['then'](d, b);
        return Promise['resolve']();
      };
      a['setLocalDescription'] = b;
      b = function(c, d, b) {
        var a = g['apply'](this, [c]);
        if (!b) {
          return a;
        }
        a['then'](d, b);
        return Promise['resolve']();
      };
      a['setRemoteDescription'] = b;
      b = function(c, d, b) {
        var a = h['apply'](this, [c]);
        if (!b) {
          return a;
        }
        a['then'](d, b);
        return Promise['resolve']();
      };
      a['addIceCandidate'] = b;
    },
    'shimGetUserMedia': function(b) {
      var a = b && b['navigator'];
      if (!a['getUserMedia']) {
        if (a['webkitGetUserMedia']) {
          a['getUserMedia'] = a['webkitGetUserMedia']['bind'](a);
        } else if (a['mediaDevices'] && a['mediaDevices']['getUserMedia']) {
          a['getUserMedia'] = function(b, c, d) {
            a['mediaDevices']['getUserMedia'](b)['then'](c, d);
          }['bind'](a);
        }
      }
    },
    'shimRTCIceServerUrls': function(a) {
      var c = a['RTCPeerConnection'];
      a['RTCPeerConnection'] = function(d, g) {
        if (d && d['iceServers']) {
          var f = [];
          for (var e = 0x0; e < d['iceServers']['length']; e++) {
            var a = d['iceServers'][e];
            if (!a['hasOwnProperty']('urls') && a['hasOwnProperty']('url')) {
              b['deprecated']('RTCIceServer.url', 'RTCIceServer.urls');
              a = JSON['parse'](JSON['stringify'](a));
              a['urls'] = a['url'];
              delete a['url'];
              f['push'](a);
            } else {
              f['push'](d['iceServers'][e]);
            }
          }
          d['iceServers'] = f;
        }
        return new c(d, g);
      };
      a['RTCPeerConnection']['prototype'] = c['prototype'];
      if ('generateCertificate' in a['RTCPeerConnection']) {
        Object['defineProperty'](a['RTCPeerConnection'], 'generateCertificate', {
          'get': function() {
            return c['generateCertificate'];
          }
        });
      }
    },
    'shimTrackEventTransceiver': function(a) {
      if (typeof a === 'object' && a['RTCPeerConnection'] && 'receiver' in a['RTCTrackEvent']['prototype'] && !a['RTCTransceiver']) {
        Object['defineProperty'](a['RTCTrackEvent']['prototype'], 'transceiver', {
          'get': function() {
            return {
              'receiver': this['receiver']
            };
          }
        });
      }
    }
  };
  var I = {
    'shimCallbacksAPI': f['shimCallbacksAPI'],
    'shimLocalStreamsAPI': f['shimLocalStreamsAPI'],
    'shimRemoteStreamsAPI': f['shimRemoteStreamsAPI'],
    'shimGetUserMedia': f['shimGetUserMedia'],
    'shimRTCIceServerUrls': f['shimRTCIceServerUrls'],
    'shimTrackEventTransceiver': f['shimTrackEventTransceiver']
  };
  'use\x20strict';

  function U(e, a, f) {
    if (!e['RTCPeerConnection']) {
      return;
    }
    var b = e['RTCPeerConnection']['prototype'];
    var c = b['addEventListener'];
    b['addEventListener'] = function(d, e) {
      if (d !== a) {
        return c['apply'](this, arguments);
      }
      var b = function(a) {
        e(f(a));
      };
      this['_eventMap'] = this['_eventMap'] || {};
      this['_eventMap'][e] = b;
      return c['apply'](this, [d, b]);
    };
    var d = b['removeEventListener'];
    b['removeEventListener'] = function(c, b) {
      if (c !== a || !this['_eventMap'] || !this['_eventMap'][b]) {
        return d['apply'](this, arguments);
      }
      var e = this['_eventMap'][b];
      delete this['_eventMap'][b];
      return d['apply'](this, [c, e]);
    };
    Object['defineProperty'](b, 'on' + a, {
      'get': function() {
        return this['_on' + a];
      },
      'set': function(b) {
        if (this['_on' + a]) {
          this['removeEventListener'](a, this['_on' + a]);
          delete this['_on' + a];
        }
        if (b) {
          this['addEventListener'](a, this['_on' + a] = b);
        }
      }
    });
  }
  var K = {
    'shimRTCIceCandidate': function(b) {
      if (b['RTCIceCandidate'] && 'foundation' in b['RTCIceCandidate']['prototype']) {
        return;
      }
      var c = b['RTCIceCandidate'];
      b['RTCIceCandidate'] = function(b) {
        if (typeof b === 'object' && b['candidate'] && b['candidate']['indexOf']('a=') === 0x0) {
          b = JSON['parse'](JSON['stringify'](b));
          b['candidate'] = b['candidate']['substr'](0x2);
        }
        var e = new c(b);
        var f = a['parseCandidate'](b['candidate']);
        var d = Object['assign'](e, f);
        d['toJSON'] = function() {
          return {
            'candidate': d['candidate'],
            'sdpMid': d['sdpMid'],
            'sdpMLineIndex': d['sdpMLineIndex'],
            'usernameFragment': d['usernameFragment']
          };
        };
        return d;
      };
      U(b, 'icecandidate', function(a) {
        if (a['candidate']) {
          Object['defineProperty'](a, 'candidate', {
            'value': new b[('RTCIceCandidate')](a['candidate']),
            'writable': 'false'
          });
        }
        return a;
      });
    },
    'shimCreateObjectURL': function(a) {
      var c = a && a['URL'];
      if (!(typeof a === 'object' && a['HTMLMediaElement'] && 'srcObject' in a['HTMLMediaElement']['prototype'] && c['createObjectURL'] && c['revokeObjectURL'])) {
        return undefined;
      }
      var f = c['createObjectURL']['bind'](c);
      var g = c['revokeObjectURL']['bind'](c);
      var d = new Map(),
        h = 0x0;
      c['createObjectURL'] = function(a) {
        if ('getTracks' in a) {
          var c = 'polyblob:' + ++h;
          d['set'](c, a);
          b['deprecated']('URL.createObjectURL(stream)', 'elem.srcObject = stream');
          return c;
        }
        return f(a);
      };
      c['revokeObjectURL'] = function(a) {
        g(a);
        d['delete'](a);
      };
      var e = Object['getOwnPropertyDescriptor'](a['HTMLMediaElement']['prototype'], 'src');
      Object['defineProperty'](a['HTMLMediaElement']['prototype'], 'src', {
        'get': function() {
          return e['get']['apply'](this);
        },
        'set': function(a) {
          this['srcObject'] = d['get'](a) || null;
          return e['set']['apply'](this, [a]);
        }
      });
      var i = a['HTMLMediaElement']['prototype']['setAttribute'];
      a['HTMLMediaElement']['prototype']['setAttribute'] = function() {
        if (arguments['length'] === 0x2 && ('' + arguments[0x0])['toLowerCase']() === 'src') {
          this['srcObject'] = d['get'](arguments[0x1]) || null;
        }
        return i['apply'](this, arguments);
      };
    }
  };
  'use\x20strict';
  var L = function(n, l) {
    var a = n && n['window'];
    var j = {
      'shimChrome': !![],
      'shimFirefox': !![],
      'shimEdge': !![],
      'shimSafari': !![]
    };
    for (var k in l) {
      if (hasOwnProperty['call'](l, k)) {
        j[k] = l[k];
      }
    }
    var d = b['log'];
    var m = b['detectBrowser'](a);
    var e = {
      'browserDetails': m,
      'extractVersion': b['extractVersion'],
      'disableLog': b['disableLog'],
      'disableWarnings': b['disableWarnings']
    };
    var c = t || null;
    var i = C || null;
    var h = G || null;
    var f = I || null;
    var g = K || null;
    switch (m['browser']) {
      case 'chrome':
        if (!c || !c['shimPeerConnection'] || !j['shimChrome']) {
          d('Chrome shim is not included in this adapter release.');
          return e;
        }
        d('adapter.js shimming chrome.');
        e['browserShim'] = c;
        g['shimCreateObjectURL'](a);
        c['shimGetUserMedia'](a);
        c['shimMediaStream'](a);
        c['shimSourceObject'](a);
        c['shimPeerConnection'](a);
        c['shimOnTrack'](a);
        c['shimAddTrackRemoveTrack'](a);
        c['shimGetSendersWithDtmf'](a);
        g['shimRTCIceCandidate'](a);
        break;
      case 'firefox':
        if (!h || !h['shimPeerConnection'] || !j['shimFirefox']) {
          d('Firefox shim is not included in this adapter release.');
          return e;
        }
        d('adapter.js shimming firefox.');
        e['browserShim'] = h;
        g['shimCreateObjectURL'](a);
        h['shimGetUserMedia'](a);
        h['shimSourceObject'](a);
        h['shimPeerConnection'](a);
        h['shimOnTrack'](a);
        g['shimRTCIceCandidate'](a);
        break;
      case 'edge':
        if (!i || !i['shimPeerConnection'] || !j['shimEdge']) {
          d('MS edge shim is not included in this adapter release.');
          return e;
        }
        d('adapter.js\x20shimming\x20edge.');
        e['browserShim'] = i;
        g['shimCreateObjectURL'](a);
        i['shimGetUserMedia'](a);
        i['shimPeerConnection'](a);
        i['shimReplaceTrack'](a);
        break;
      case 'safari':
        if (!f || !j['shimSafari']) {
          d('Safari shim is not included in this adapter release.');
          return e;
        }
        d('adapter.js\x20shimming\x20safari.');
        e['browserShim'] = f;
        g['shimCreateObjectURL'](a);
        f['shimRTCIceServerUrls'](a);
        f['shimCallbacksAPI'](a);
        f['shimLocalStreamsAPI'](a);
        f['shimRemoteStreamsAPI'](a);
        f['shimTrackEventTransceiver'](a);
        f['shimGetUserMedia'](a);
        g['shimRTCIceCandidate'](a);
        break;
      default:
        d('Unsupported browser!');
        break;
    }
    return e;
  };
  'use strict';
  var T = L({
    'window': k['window']
  });
  var N = window['navigator']['mediaDevices'];
  var O = function() {
    function a(b) {
      g(this, a);
      this['_constraints'] = b;
    }
    h(a, [{
      'key': 'attachTo',
      'value': function a(b) {
        var c = this;
        return new Promise(function(a, d) {
          N['getUserMedia'](c['_constraints'])['then'](function(c) {
            b['srcObject'] = c;
            b['onloadedmetadata'] = function(b) {
              a();
            };
          })['catch'](function(a) {
            return d(a);
          });
        });
      }
    }]);
    return a;
  }();
  var P = j(function(a, b) {
    'use strict';
    (function(R) {
      function m(b, F, y) {
        var i = 0x0,
          j = [],
          m = 0x0,
          A, f, E, a, c, h, e, p, q = !0x1,
          C = [],
          B = [],
          r, D = !0x1,
          g = !0x1,
          d = -0x1;
        y = y || {};
        A = y['encoding'] || 'UTF8';
        r = y['numRounds'] || 0x1;
        if (r !== parseInt(r, 0xa) || 0x1 > r) throw Error('numRounds\x20must\x20a\x20integer\x20>=\x201');
        if ('SHA-1' === b) c = 0x200, h = w, e = M, a = 0xa0, p = function(a) {
          return a['slice']();
        };
        else if (0x0 === b['lastIndexOf']('SHA-', 0x0))
          if (h = function(a, c) {
              return x(a, c, b);
            }, e = function(d, c, g, a) {
              var e, f;
              if ('SHA-224' === b || 'SHA-256' === b) e = (c + 0x41 >>> 0x9 << 0x4) + 0xf, f = 0x10;
              else if ('SHA-384' === b || 'SHA-512' === b) e = (c + 0x81 >>> 0xa << 0x5) + 0x1f, f = 0x20;
              else throw Error('Unexpected\x20error\x20in\x20SHA-2\x20implementation');
              for (; d['length'] <= e;) d['push'](0x0);
              d[c >>> 0x5] |= 0x80 << 0x18 - c % 0x20;
              c = c + g;
              d[e] = c & 0xffffffff;
              d[e - 0x1] = c / 0x100000000 | 0x0;
              g = d['length'];
              for (c = 0x0; c < g; c += f) a = x(d['slice'](c, c + f), a, b);
              if ('SHA-224' === b) d = [a[0x0], a[0x1], a[0x2], a[0x3], a[0x4], a[0x5], a[0x6]];
              else if ('SHA-256' === b) d = a;
              else if ('SHA-384' === b) d = [a[0x0]['a'], a[0x0]['b'], a[0x1]['a'], a[0x1]['b'], a[0x2]['a'], a[0x2]['b'], a[0x3]['a'], a[0x3]['b'], a[0x4]['a'], a[0x4]['b'], a[0x5]['a'], a[0x5]['b']];
              else if ('SHA-512' === b) d = [a[0x0]['a'], a[0x0]['b'], a[0x1]['a'], a[0x1]['b'], a[0x2]['a'], a[0x2]['b'], a[0x3]['a'], a[0x3]['b'], a[0x4]['a'], a[0x4]['b'], a[0x5]['a'], a[0x5]['b'], a[0x6]['a'], a[0x6]['b'], a[0x7]['a'], a[0x7]['b']];
              else throw Error('Unexpected\x20error\x20in\x20SHA-2\x20implementation');
              return d;
            }, p = function(a) {
              return a['slice']();
            }, 'SHA-224' === b) c = 0x200, a = 0xe0;
          else if ('SHA-256' === b) c = 0x200, a = 0x100;
        else if ('SHA-384' === b) c = 0x400, a = 0x180;
        else if ('SHA-512' === b) c = 0x400, a = 0x200;
        else throw Error('Chosen SHA variant is not supported');
        else if (0x0 === b['lastIndexOf']('SHA3-', 0x0) || 0x0 === b['lastIndexOf']('SHAKE', 0x0)) {
          var z = 0x6;
          h = l;
          p = function(c) {
            var b = [],
              a;
            for (a = 0x0; 0x5 > a; a += 0x1) b[a] = c[a]['slice']();
            return b;
          };
          d = 0x1;
          if ('SHA3-224' === b) c = 0x480, a = 0xe0;
          else if ('SHA3-256' === b) c = 0x440, a = 0x100;
          else if ('SHA3-384' === b) c = 0x340, a = 0x180;
          else if ('SHA3-512' === b) c = 0x240, a = 0x200;
          else if ('SHAKE128' === b) c = 0x540, a = -0x1, z = 0x1f, g = !0x0;
          else if ('SHAKE256' === b) c = 0x440, a = -0x1, z = 0x1f, g = !0x0;
          else throw Error('Chosen\x20SHA\x20variant\x20is\x20not\x20supported');
          e = function(a, g, d, e, k) {
            d = c;
            var j = z,
              b, f = [],
              h = d >>> 0x5,
              i = 0x0,
              m = g >>> 0x5;
            for (b = 0x0; b < m && g >= d; b += h) e = l(a['slice'](b, b + h), e), g -= d;
            a = a['slice'](b);
            for (g %= d; a['length'] < h;) a['push'](0x0);
            b = g >>> 0x3;
            a[b >> 0x2] ^= j << b % 0x4 * 0x8;
            a[h - 0x1] ^= 0x80000000;
            for (e = l(a, e); 0x20 * f['length'] < k;) {
              a = e[i % 0x5][i / 0x5 | 0x0];
              f['push'](a['b']);
              if (0x20 * f['length'] >= k) break;
              f['push'](a['a']);
              i += 0x1;
              0x0 === 0x40 * i % d && l(null, e);
            }
            return f;
          };
        } else throw Error('Chosen SHA variant is not supported');
        E = v(F, A, d);
        f = k(b);
        this['setHMACKey'] = function(l, j, m) {
          var n;
          if (!0x0 === q) throw Error('HMAC key already set');
          if (!0x0 === D) throw Error('Cannot set HMAC key after calling update');
          if (!0x0 === g) throw Error('SHAKE is not supported for HMAC');
          A = (m || {})['encoding'] || 'UTF8';
          j = v(j, A, d)(l);
          l = j['binLen'];
          j = j['value'];
          n = c >>> 0x3;
          m = n / 0x4 - 0x1;
          if (n < l / 0x8) {
            for (j = e(j, l, 0x0, k(b), a); j['length'] <= m;) j['push'](0x0);
            j[m] &= 0xffffff00;
          } else if (n > l / 0x8) {
            for (; j['length'] <= m;) j['push'](0x0);
            j[m] &= 0xffffff00;
          }
          for (l = 0x0; l <= m; l += 0x1) C[l] = j[l] ^ 0x36363636, B[l] = j[l] ^ 0x5c5c5c5c;
          f = h(C, f);
          i = c;
          q = !0x0;
        };
        this['update'] = function(a) {
          var b, g, d, e = 0x0,
            k = c >>> 0x5;
          b = E(a, j, m);
          a = b['binLen'];
          g = b['value'];
          b = a >>> 0x5;
          for (d = 0x0; d < b; d += k) e + c <= a && (f = h(g['slice'](d, d + k), f), e += c);
          i += e;
          j = g['slice'](e >>> 0x5);
          m = a % c;
          D = !0x0;
        };
        this['getHash'] = function(w, x) {
          var h, v, l, c;
          if (!0x0 === q) throw Error('Cannot call getHash after setting HMAC key');
          l = u(x);
          if (!0x0 === g) {
            if (-0x1 === l['shakeLen']) throw Error('shakeLen must be specified in options');
            a = l['shakeLen'];
          }
          switch (w) {
            case 'HEX':
              h = function(b) {
                return n(b, a, d, l);
              };
              break;
            case 'B64':
              h = function(b) {
                return o(b, a, d, l);
              };
              break;
            case 'BYTES':
              h = function(b) {
                return s(b, a, d);
              };
              break;
            case 'ARRAYBUFFER':
              try {
                v = new ArrayBuffer(0x0);
              } catch (a) {
                throw Error('ARRAYBUFFER\x20not\x20supported\x20by\x20this\x20environment');
              }
              h = function(b) {
                return t(b, a, d);
              };
              break;
            default:
              throw Error('format must be HEX, B64, BYTES, or ARRAYBUFFER');
          }
          c = e(j['slice'](), m, i, p(f), a);
          for (v = 0x1; v < r; v += 0x1) !0x0 === g && 0x0 !== a % 0x20 && (c[c['length'] - 0x1] &= 0xffffff >>> 0x18 - a % 0x20), c = e(c, a, 0x0, k(b), a);
          return h(c);
        };
        this['getHMAC'] = function(w, x) {
          var g, v, r, l;
          if (!0x1 === q) throw Error('Cannot call getHMAC without first setting HMAC key');
          r = u(x);
          switch (w) {
            case 'HEX':
              g = function(b) {
                return n(b, a, d, r);
              };
              break;
            case 'B64':
              g = function(b) {
                return o(b, a, d, r);
              };
              break;
            case 'BYTES':
              g = function(b) {
                return s(b, a, d);
              };
              break;
            case 'ARRAYBUFFER':
              try {
                g = new ArrayBuffer(0x0);
              } catch (a) {
                throw Error('ARRAYBUFFER not supported by this environment');
              }
              g = function(b) {
                return t(b, a, d);
              };
              break;
            default:
              throw Error('outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER');
          }
          v = e(j['slice'](), m, i, p(f), a);
          l = h(B, k(b));
          l = e(v, a, c, l, a);
          return g(l);
        };
      }

      function c(a, b) {
        this['a'] = a;
        this['b'] = b;
      }

      function n(g, d, e, h) {
        var b = '';
        d /= 0x8;
        var a, c, f;
        f = -0x1 === e ? 0x3 : 0x0;
        for (a = 0x0; a < d; a += 0x1) c = g[a >>> 0x2] >>> 0x8 * (f + a % 0x4 * e), b += '0123456789abcdef' ['charAt'](c >>> 0x4 & 0xf) + '0123456789abcdef' ['charAt'](c & 0xf);
        return h['outputUpper'] ? b['toUpperCase']() : b;
      }

      function o(h, i, d, j) {
        var c = '',
          g = i / 0x8,
          a, b, f, e;
        e = -0x1 === d ? 0x3 : 0x0;
        for (a = 0x0; a < g; a += 0x3)
          for (b = a + 0x1 < g ? h[a + 0x1 >>> 0x2] : 0x0, f = a + 0x2 < g ? h[a + 0x2 >>> 0x2] : 0x0, f = (h[a >>> 0x2] >>> 0x8 * (e + a % 0x4 * d) & 0xff) << 0x10 | (b >>> 0x8 * (e + (a + 0x1) % 0x4 * d) & 0xff) << 0x8 | f >>> 0x8 * (e + (a + 0x2) % 0x4 * d) & 0xff, b = 0x0; 0x4 > b; b += 0x1) 0x8 * a + 0x6 * b <= i ? c += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/' ['charAt'](f >>> 0x6 * (0x3 - b) & 0x3f) : c += j['b64Pad'];
        return c;
      }

      function s(g, c, d) {
        var b = '';
        c /= 0x8;
        var a, e, f;
        f = -0x1 === d ? 0x3 : 0x0;
        for (a = 0x0; a < c; a += 0x1) e = g[a >>> 0x2] >>> 0x8 * (f + a % 0x4 * d) & 0xff, b += String['fromCharCode'](e);
        return b;
      }

      function t(c, a, d) {
        a /= 0x8;
        var e, b = new ArrayBuffer(a);
        return b;
      }

      function u(a) {
        var b = {
          'outputUpper': !0x1,
          'b64Pad': '=',
          'shakeLen': -0x1
        };
        a = a || {};
        b['outputUpper'] = a['outputUpper'] || !0x1;
        !0x0 === a['hasOwnProperty']('b64Pad') && (b['b64Pad'] = a['b64Pad']);
        if (!0x0 === a['hasOwnProperty']('shakeLen')) {
          if (0x0 !== a['shakeLen'] % 0x8) throw Error('shakeLen must be a multiple of 8');
          b['shakeLen'] = a['shakeLen'];
        }
        if ('boolean' !== typeof b['outputUpper']) throw Error('Invalid outputUpper formatting option');
        if ('string' !== typeof b['b64Pad']) throw Error('Invalid b64Pad formatting option');
        return b;
      }

      function v(b, c, a) {
        switch (c) {
          case 'UTF8':
          case 'UTF16BE':
          case 'UTF16LE':
            break;
          default:
            throw Error('encoding\x20must\x20be\x20UTF8,\x20UTF16BE,\x20or\x20UTF16LE');
        }
        switch (b) {
          case 'HEX':
            b = function(i, b, d) {
              var e = i['length'],
                c, f, g, h, k, j;
              if (0x0 !== e % 0x2) throw Error('String of HEX type must be in byte increments');
              b = b || [0x0];
              d = d || 0x0;
              k = d >>> 0x3;
              j = -0x1 === a ? 0x3 : 0x0;
              for (c = 0x0; c < e; c += 0x2) {
                f = parseInt(i['substr'](c, 0x2), 0x10);
                if (isNaN(f)) throw Error('String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters');
                h = (c >>> 0x1) + k;
                for (g = h >>> 0x2; b['length'] <= g;) b['push'](0x0);
                b[g] |= f << 0x8 * (j + h % 0x4 * a);
              }
              return {
                'value': b,
                'binLen': 0x4 * e + d
              };
            };
            break;
          case 'TEXT':
            b = function(k, f, l) {
              var b, d, g = 0x0,
                e, h, n, j, i, m;
              f = f || [0x0];
              l = l || 0x0;
              n = l >>> 0x3;
              if ('UTF8' === c)
                for (m = -0x1 === a ? 0x3 : 0x0, e = 0x0; e < k['length']; e += 0x1)
                  for (b = k['charCodeAt'](e), d = [], 0x80 > b ? d['push'](b) : 0x800 > b ? (d['push'](0xc0 | b >>> 0x6), d['push'](0x80 | b & 0x3f)) : 0xd800 > b || 0xe000 <= b ? d['push'](0xe0 | b >>> 0xc, 0x80 | b >>> 0x6 & 0x3f, 0x80 | b & 0x3f) : (e += 0x1, b = 0x10000 + ((b & 0x3ff) << 0xa | k['charCodeAt'](e) & 0x3ff), d['push'](0xf0 | b >>> 0x12, 0x80 | b >>> 0xc & 0x3f, 0x80 | b >>> 0x6 & 0x3f, 0x80 | b & 0x3f)), h = 0x0; h < d['length']; h += 0x1) {
                    i = g + n;
                    for (j = i >>> 0x2; f['length'] <= j;) f['push'](0x0);
                    f[j] |= d[h] << 0x8 * (m + i % 0x4 * a);
                    g += 0x1;
                  } else if ('UTF16BE' === c || 'UTF16LE' === c)
                    for (m = -0x1 === a ? 0x2 : 0x0, d = 'UTF16LE' === c && 0x1 !== a || 'UTF16LE' !== c && 0x1 === a, e = 0x0; e < k['length']; e += 0x1) {
                      b = k['charCodeAt'](e);
                      !0x0 === d && (h = b & 0xff, b = h << 0x8 | b >>> 0x8);
                      i = g + n;
                      for (j = i >>> 0x2; f['length'] <= j;) f['push'](0x0);
                      f[j] |= b << 0x8 * (m + i % 0x4 * a);
                      g += 0x2;
                    }
              return {
                'value': f,
                'binLen': 0x8 * g + l
              };
            };
            break;
          case 'B64':
            b = function(d, e, g) {
              var h = 0x0,
                f, c, b, j, i, l, k, m;
              if (-0x1 === d['search'](/^[a-zA-Z0-9=+\/]+$/)) throw Error('Invalid character in base-64 string');
              c = d['indexOf']('=');
              d = d['replace'](/\=/g, '');
              if (-0x1 !== c && c < d['length']) throw Error('Invalid\x20\x27=\x27\x20found\x20in\x20base-64\x20string');
              e = e || [0x0];
              g = g || 0x0;
              l = g >>> 0x3;
              m = -0x1 === a ? 0x3 : 0x0;
              for (c = 0x0; c < d['length']; c += 0x4) {
                i = d['substr'](c, 0x4);
                for (b = j = 0x0; b < i['length']; b += 0x1) f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/' ['indexOf'](i[b]), j |= f << 0x12 - 0x6 * b;
                for (b = 0x0; b < i['length'] - 0x1; b += 0x1) {
                  k = h + l;
                  for (f = k >>> 0x2; e['length'] <= f;) e['push'](0x0);
                  e[f] |= (j >>> 0x10 - 0x8 * b & 0xff) << 0x8 * (m + k % 0x4 * a);
                  h += 0x1;
                }
              }
              return {
                'value': e,
                'binLen': 0x8 * h + g
              };
            };
            break;
          case 'BYTES':
            b = function(e, b, d) {
              var h, c, i, f, g, j;
              b = b || [0x0];
              d = d || 0x0;
              i = d >>> 0x3;
              j = -0x1 === a ? 0x3 : 0x0;
              for (c = 0x0; c < e['length']; c += 0x1) h = e['charCodeAt'](c), g = c + i, f = g >>> 0x2, b['length'] <= f && b['push'](0x0), b[f] |= h << 0x8 * (j + g % 0x4 * a);
              return {
                'value': b,
                'binLen': 0x8 * e['length'] + d
              };
            };
            break;
          case 'ARRAYBUFFER':
            try {
              b = new ArrayBuffer(0x0);
            } catch (a) {
              throw Error('ARRAYBUFFER not supported by this environment');
            }
            b = function(e, b, d) {
              var c, h, f, g, i, j;
              b = b || [0x0];
              d = d || 0x0;
              h = d >>> 0x3;
              i = -0x1 === a ? 0x3 : 0x0;
              j = new Uint8Array(e);
              for (c = 0x0; c < e['byteLength']; c += 0x1) g = c + h, f = g >>> 0x2, b['length'] <= f && b['push'](0x0), b[f] |= j[c] << 0x8 * (i + g % 0x4 * a);
              return {
                'value': b,
                'binLen': 0x8 * e['byteLength'] + d
              };
            };
            break;
          default:
            throw Error('format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER');
        }
        return b;
      }

      function g(a, b) {
        return a << b | a >>> 0x20 - b;
      }

      function z(b, a) {
        return 0x20 < a ? (a -= 0x20, new c(b['b'] << a | b['a'] >>> 0x20 - a, b['a'] << a | b['b'] >>> 0x20 - a)) : 0x0 !== a ? new c(b['a'] << a | b['b'] >>> 0x20 - a, b['b'] << a | b['a'] >>> 0x20 - a) : b;
      }

      function f(a, b) {
        return a >>> b | a << 0x20 - b;
      }

      function e(d, b) {
        var a = null,
          a = new c(d['a'], d['b']);
        return a = 0x20 >= b ? new c(a['a'] >>> b | a['b'] << 0x20 - b & 0xffffffff, a['b'] >>> b | a['a'] << 0x20 - b & 0xffffffff) : new c(a['b'] >>> b - 0x20 | a['a'] << 0x40 - b & 0xffffffff, a['a'] >>> b - 0x20 | a['b'] << 0x40 - b & 0xffffffff);
      }

      function p(b, a) {
        var d = null;
        return d = 0x20 >= a ? new c(b['a'] >>> a, b['b'] >>> a | b['a'] << 0x20 - a & 0xffffffff) : new c(0x0, b['a'] >>> a - 0x20);
      }

      function N(a, b, c) {
        return a & b ^ ~a & c;
      }

      function D(a, b, d) {
        return new c(a['a'] & b['a'] ^ ~a['a'] & d['a'], a['b'] & b['b'] ^ ~a['b'] & d['b']);
      }

      function q(a, b, c) {
        return a & b ^ a & c ^ b & c;
      }

      function J(a, b, d) {
        return new c(a['a'] & b['a'] ^ a['a'] & d['a'] ^ b['a'] & d['a'], a['b'] & b['b'] ^ a['b'] & d['b'] ^ b['b'] & d['b']);
      }

      function K(a) {
        return f(a, 0x2) ^ f(a, 0xd) ^ f(a, 0x16);
      }

      function L(a) {
        var b = e(a, 0x1c),
          d = e(a, 0x22);
        a = e(a, 0x27);
        return new c(b['a'] ^ d['a'] ^ a['a'], b['b'] ^ d['b'] ^ a['b']);
      }

      function F(a) {
        return f(a, 0x6) ^ f(a, 0xb) ^ f(a, 0x19);
      }

      function O(a) {
        var b = e(a, 0xe),
          d = e(a, 0x12);
        a = e(a, 0x29);
        return new c(b['a'] ^ d['a'] ^ a['a'], b['b'] ^ d['b'] ^ a['b']);
      }

      function P(a) {
        return f(a, 0x7) ^ f(a, 0x12) ^ a >>> 0x3;
      }

      function Q(a) {
        var b = e(a, 0x1),
          d = e(a, 0x8);
        a = p(a, 0x7);
        return new c(b['a'] ^ d['a'] ^ a['a'], b['b'] ^ d['b'] ^ a['b']);
      }

      function B(a) {
        return f(a, 0x11) ^ f(a, 0x13) ^ a >>> 0xa;
      }

      function C(a) {
        var b = e(a, 0x13),
          d = e(a, 0x3d);
        a = p(a, 0x6);
        return new c(b['a'] ^ d['a'] ^ a['a'], b['b'] ^ d['b'] ^ a['b']);
      }

      function h(b, c) {
        var a = (b & 0xffff) + (c & 0xffff);
        return ((b >>> 0x10) + (c >>> 0x10) + (a >>> 0x10) & 0xffff) << 0x10 | a & 0xffff;
      }

      function E(b, c, d, e) {
        var a = (b & 0xffff) + (c & 0xffff) + (d & 0xffff) + (e & 0xffff);
        return ((b >>> 0x10) + (c >>> 0x10) + (d >>> 0x10) + (e >>> 0x10) + (a >>> 0x10) & 0xffff) << 0x10 | a & 0xffff;
      }

      function i(b, c, d, e, f) {
        var a = (b & 0xffff) + (c & 0xffff) + (d & 0xffff) + (e & 0xffff) + (f & 0xffff);
        return ((b >>> 0x10) + (c >>> 0x10) + (d >>> 0x10) + (e >>> 0x10) + (f >>> 0x10) + (a >>> 0x10) & 0xffff) << 0x10 | a & 0xffff;
      }

      function G(d, e) {
        var a, b, f;
        a = (d['b'] & 0xffff) + (e['b'] & 0xffff);
        b = (d['b'] >>> 0x10) + (e['b'] >>> 0x10) + (a >>> 0x10);
        f = (b & 0xffff) << 0x10 | a & 0xffff;
        a = (d['a'] & 0xffff) + (e['a'] & 0xffff) + (b >>> 0x10);
        b = (d['a'] >>> 0x10) + (e['a'] >>> 0x10) + (a >>> 0x10);
        return new c((b & 0xffff) << 0x10 | a & 0xffff, f);
      }

      function H(d, e, f, g) {
        var a, b, h;
        a = (d['b'] & 0xffff) + (e['b'] & 0xffff) + (f['b'] & 0xffff) + (g['b'] & 0xffff);
        b = (d['b'] >>> 0x10) + (e['b'] >>> 0x10) + (f['b'] >>> 0x10) + (g['b'] >>> 0x10) + (a >>> 0x10);
        h = (b & 0xffff) << 0x10 | a & 0xffff;
        a = (d['a'] & 0xffff) + (e['a'] & 0xffff) + (f['a'] & 0xffff) + (g['a'] & 0xffff) + (b >>> 0x10);
        b = (d['a'] >>> 0x10) + (e['a'] >>> 0x10) + (f['a'] >>> 0x10) + (g['a'] >>> 0x10) + (a >>> 0x10);
        return new c((b & 0xffff) << 0x10 | a & 0xffff, h);
      }

      function I(d, e, f, g, h) {
        var a, b, i;
        a = (d['b'] & 0xffff) + (e['b'] & 0xffff) + (f['b'] & 0xffff) + (g['b'] & 0xffff) + (h['b'] & 0xffff);
        b = (d['b'] >>> 0x10) + (e['b'] >>> 0x10) + (f['b'] >>> 0x10) + (g['b'] >>> 0x10) + (h['b'] >>> 0x10) + (a >>> 0x10);
        i = (b & 0xffff) << 0x10 | a & 0xffff;
        a = (d['a'] & 0xffff) + (e['a'] & 0xffff) + (f['a'] & 0xffff) + (g['a'] & 0xffff) + (h['a'] & 0xffff) + (b >>> 0x10);
        b = (d['a'] >>> 0x10) + (e['a'] >>> 0x10) + (f['a'] >>> 0x10) + (g['a'] >>> 0x10) + (h['a'] >>> 0x10) + (a >>> 0x10);
        return new c((b & 0xffff) << 0x10 | a & 0xffff, i);
      }

      function j(a, b) {
        return new c(a['a'] ^ b['a'], a['b'] ^ b['b']);
      }

      function k(d) {
        var a = [],
          b;
        if ('SHA-1' === d) a = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
        else if (0x0 === d['lastIndexOf']('SHA-', 0x0)) switch (a = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4], b = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], d) {
            case 'SHA-224':
              break;
            case 'SHA-256':
              a = b;
              break;
            case 'SHA-384':
              a = [new c(0xcbbb9d5d, a[0x0]), new c(0x629a292a, a[0x1]), new c(0x9159015a, a[0x2]), new c(0x152fecd8, a[0x3]), new c(0x67332667, a[0x4]), new c(0x98eb44a87, a[0x5]), new c(0xdb0c2e0d, a[0x6]), new c(0x47b5481d, a[0x7])];
              break;
            case 'SHA-512':
              a = [new c(b[0x0], 0xf3bcc908), new c(b[0x1], 0x84caa73b), new c(b[0x2], 0xfe94f82b), new c(b[0x3], 0x5f1d36f1), new c(b[0x4], 0xade682d1), new c(b[0x5], 0x2b3e6c1f), new c(b[0x6], 0xfb41bd6b), new c(b[0x7], 0x137e2179)];
              break;
            default:
              throw Error('Unknown SHA variant');
          } else if (0x0 === d['lastIndexOf']('SHA3-', 0x0) || 0x0 === d['lastIndexOf']('SHAKE', 0x0))
            for (d = 0x0; 0x5 > d; d += 0x1) a[d] = [new c(0x0, 0x0), new c(0x0, 0x0), new c(0x0, 0x0), new c(0x0, 0x0), new c(0x0, 0x0)];
          else throw Error('No SHA variants supported');
        return a;
      }

      function w(m, b) {
        var c = [],
          e, d, f, j, k, l, a;
        e = b[0x0];
        d = b[0x1];
        f = b[0x2];
        j = b[0x3];
        k = b[0x4];
        for (a = 0x0; 0x50 > a; a += 0x1) c[a] = 0x10 > a ? m[a] : g(c[a - 0x3] ^ c[a - 0x8] ^ c[a - 0xe] ^ c[a - 0x10], 0x1), l = 0x14 > a ? i(g(e, 0x5), d & f ^ ~d & j, k, 0x5a827999, c[a]) : 0x28 > a ? i(g(e, 0x5), d ^ f ^ j, k, 0x6ed9eba1, c[a]) : 0x3c > a ? i(g(e, 0x5), q(d, f, j), k, 0x8f1bbcdc, c[a]) : i(g(e, 0x5), d ^ f ^ j, k, 0xca62c1d6, c[a]), k = j, j = f, f = g(d, 0x1e), d = e, e = l;
        b[0x0] = h(e, b[0x0]);
        b[0x1] = h(d, b[0x1]);
        b[0x2] = h(f, b[0x2]);
        b[0x3] = h(j, b[0x3]);
        b[0x4] = h(k, b[0x4]);
        return b;
      }

      function M(c, b, e, d) {
        var a;
        for (a = (b + 0x41 >>> 0x9 << 0x4) + 0xf; c['length'] <= a;) c['push'](0x0);
        c[b >>> 0x5] |= 0x80 << 0x18 - b % 0x20;
        b += e;
        c[a] = b & 0xffffffff;
        c[a - 0x1] = b / 0x100000000 | 0x0;
        b = c['length'];
        for (a = 0x0; a < b; a += 0x10) d = w(c['slice'](a, a + 0x10), d);
        return d;
      }

      function x(t, a, f) {
        var o, n, r, k, p, l, s, m, g, v, b, u, e, w, x, y, z, M, R, S, T, U, j = [],
          V;
        if ('SHA-224' === f || 'SHA-256' === f) v = 0x40, u = 0x1, U = Number, e = h, w = E, x = i, y = P, z = B, M = K, R = F, T = q, S = N, V = d;
        else if ('SHA-384' === f || 'SHA-512' === f) v = 0x50, u = 0x2, U = c, e = G, w = H, x = I, y = Q, z = C, M = L, R = O, T = J, S = D, V = A;
        else throw Error('Unexpected\x20error\x20in\x20SHA-2\x20implementation');
        f = a[0x0];
        o = a[0x1];
        n = a[0x2];
        r = a[0x3];
        k = a[0x4];
        p = a[0x5];
        l = a[0x6];
        s = a[0x7];
        for (b = 0x0; b < v; b += 0x1) 0x10 > b ? (g = b * u, m = t['length'] <= g ? 0x0 : t[g], g = t['length'] <= g + 0x1 ? 0x0 : t[g + 0x1], j[b] = new U(m, g)) : j[b] = w(z(j[b - 0x2]), j[b - 0x7], y(j[b - 0xf]), j[b - 0x10]), m = x(s, R(k), S(k, p, l), V[b], j[b]), g = e(M(f), T(f, o, n)), s = l, l = p, p = k, k = e(r, m), r = n, n = o, o = f, f = e(m, g);
        a[0x0] = e(f, a[0x0]);
        a[0x1] = e(o, a[0x1]);
        a[0x2] = e(n, a[0x2]);
        a[0x3] = e(r, a[0x3]);
        a[0x4] = e(k, a[0x4]);
        a[0x5] = e(p, a[0x5]);
        a[0x6] = e(l, a[0x6]);
        a[0x7] = e(s, a[0x7]);
        return a;
      }

      function l(g, d) {
        var f, a, b, e, h = [],
          l = [];
        if (null !== g)
          for (a = 0x0; a < g['length']; a += 0x2) d[(a >>> 0x1) % 0x5][(a >>> 0x1) / 0x5 | 0x0] = j(d[(a >>> 0x1) % 0x5][(a >>> 0x1) / 0x5 | 0x0], new c(g[a + 0x1], g[a]));
        for (f = 0x0; 0x18 > f; f += 0x1) {
          e = k('SHA3-');
          for (a = 0x0; 0x5 > a; a += 0x1) {
            b = d[a][0x0];
            var m = d[a][0x1],
              n = d[a][0x2],
              o = d[a][0x3],
              i = d[a][0x4];
            h[a] = new c(b['a'] ^ m['a'] ^ n['a'] ^ o['a'] ^ i['a'], b['b'] ^ m['b'] ^ n['b'] ^ o['b'] ^ i['b']);
          }
          for (a = 0x0; 0x5 > a; a += 0x1) l[a] = j(h[(a + 0x4) % 0x5], z(h[(a + 0x1) % 0x5], 0x1));
          for (a = 0x0; 0x5 > a; a += 0x1)
            for (b = 0x0; 0x5 > b; b += 0x1) d[a][b] = j(d[a][b], l[a]);
          for (a = 0x0; 0x5 > a; a += 0x1)
            for (b = 0x0; 0x5 > b; b += 0x1) e[b][(0x2 * a + 0x3 * b) % 0x5] = z(d[a][b], r[a][b]);
          for (a = 0x0; 0x5 > a; a += 0x1)
            for (b = 0x0; 0x5 > b; b += 0x1) d[a][b] = j(e[a][b], new c(~e[(a + 0x1) % 0x5][b]['a'] & e[(a + 0x2) % 0x5][b]['a'], ~e[(a + 0x1) % 0x5][b]['b'] & e[(a + 0x2) % 0x5][b]['b']));
          d[0x0][0x0] = j(d[0x0][0x0], y[f]);
        }
        return d;
      }
      var d, A, r, y;
      d = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
      A = [new c(d[0x0], 0xd728ae22), new c(d[0x1], 0x23ef65cd), new c(d[0x2], 0xec4d3b2f), new c(d[0x3], 0x8189dbbc), new c(d[0x4], 0xf348b538), new c(d[0x5], 0xb605d019), new c(d[0x6], 0xaf194f9b), new c(d[0x7], 0xda6d8118), new c(d[0x8], 0xa3030242), new c(d[0x9], 0x45706fbe), new c(d[0xa], 0x4ee4b28c), new c(d[0xb], 0xd5ffb4e2), new c(d[0xc], 0xf27b896f), new c(d[0xd], 0x3b1696b1), new c(d[0xe], 0x25c71235), new c(d[0xf], 0xcf692694), new c(d[0x10], 0x9ef14ad2), new c(d[0x11], 0x384f25e3), new c(d[0x12], 0x8b8cd5b5), new c(d[0x13], 0x77ac9c65), new c(d[0x14], 0x592b0275), new c(d[0x15], 0x6ea6e483), new c(d[0x16], 0xbd41fbd4), new c(d[0x17], 0x831153b5), new c(d[0x18], 0xee66dfab), new c(d[0x19], 0x2db43210), new c(d[0x1a], 0x98fb213f), new c(d[0x1b], 0xbeef0ee4), new c(d[0x1c], 0x3da88fc2), new c(d[0x1d], 0x930aa725), new c(d[0x1e], 0xe003826f), new c(d[0x1f], 0xa0e6e70), new c(d[0x20], 0x46d22ffc), new c(d[0x21], 0x5c26c926), new c(d[0x22], 0x5ac42aed), new c(d[0x23], 0x9d95b3df), new c(d[0x24], 0x8baf63de), new c(d[0x25], 0x3c77b2a8), new c(d[0x26], 0x47edaee6), new c(d[0x27], 0x1482353b), new c(d[0x28], 0x4cf10364), new c(d[0x29], 0xbc423001), new c(d[0x2a], 0xd0f89791), new c(d[0x2b], 0x654be30), new c(d[0x2c], 0xd6ef5218), new c(d[0x2d], 0x5565a910), new c(d[0x2e], 0x5771202a), new c(d[0x2f], 0x32bbd1b8), new c(d[0x30], 0xb8d2d0c8), new c(d[0x31], 0x5141ab53), new c(d[0x32], 0xdf8eeb99), new c(d[0x33], 0xe19b48a8), new c(d[0x34], 0xc5c95a63), new c(d[0x35], 0xe3418acb), new c(d[0x36], 0x7763e373), new c(d[0x37], 0xd6b2b8a3), new c(d[0x38], 0x5defb2fc), new c(d[0x39], 0x43172f60), new c(d[0x3a], 0xa1f0ab72), new c(d[0x3b], 0x1a6439ec), new c(d[0x3c], 0x23631e28), new c(d[0x3d], 0xde82bde9), new c(d[0x3e], 0xb2c67915), new c(d[0x3f], 0xe372532b), new c(0xca273ece, 0xea26619c), new c(0xd186b8c7, 0x21c0c207), new c(0xeada7dd6, 0xcde0eb1e), new c(0xf57d4f7f, 0xee6ed178), new c(0x6f067aa, 0x72176fba), new c(0xa637dc5, 0xa2c898a6), new c(0x113f9804, 0xbef90dae), new c(0x1b710b35, 0x131c471b), new c(0x28db77f5, 0x23047d84), new c(0x32caab7b, 0x40c72493), new c(0x3c9ebe0a, 0x15c9bebc), new c(0x431d67c4, 0x9c100d4c), new c(0x4cc5d4be, 0xcb3e42b6), new c(0x597f299c, 0xfc657e2a), new c(0x5fcb6fab, 0x3ad6faec), new c(0x6c44198c, 0x4a475817)];
      y = [new c(0x0, 0x1), new c(0x0, 0x8082), new c(0x80000000, 0x808a), new c(0x80000000, 0x80008000), new c(0x0, 0x808b), new c(0x0, 0x80000001), new c(0x80000000, 0x80008081), new c(0x80000000, 0x8009), new c(0x0, 0x8a), new c(0x0, 0x88), new c(0x0, 0x80008009), new c(0x0, 0x8000000a), new c(0x0, 0x8000808b), new c(0x80000000, 0x8b), new c(0x80000000, 0x8089), new c(0x80000000, 0x8003), new c(0x80000000, 0x8002), new c(0x80000000, 0x80), new c(0x0, 0x800a), new c(0x80000000, 0x8000000a), new c(0x80000000, 0x80008081), new c(0x80000000, 0x8080), new c(0x0, 0x80000001), new c(0x80000000, 0x80008008)];
      r = [
        [0x0, 0x24, 0x3, 0x29, 0x12],
        [0x1, 0x2c, 0xa, 0x2d, 0x2],
        [0x3e, 0x6, 0x2b, 0xf, 0x3d],
        [0x1c, 0x37, 0x19, 0x15, 0x38],
        [0x1b, 0x14, 0x27, 0x8, 0xe]
      ];
      'function' === typeof undefined && undefined['amd'] ? undefined(function() {
        return m;
      }) : ('undefined' !== 'object' && a['exports'] && (a['exports'] = m), b = m);
    }(k));
  });

  function S(b, d) {
    var c = Object['keys'](b)['sort']()['map'](function(a) {
      return a + b[a];
    })['join']('') + d;
    var a = new P('SHA-1', 'TEXT');
    a['update'](c);
    return a['getHash']('HEX');
  }

  function R(a, b, c) {
    a['date'] = new Date()['toISOString']();
    a['appKey'] = b;
    a['signature'] = S(a, c);
    return a;
  }
  var Q = function() {
    function a(b, c, d) {
      g(this, a);
      this['_host'] = b;
      this['_appKey'] = c;
      this['_appSecret'] = d;
    }
    h(a, [{
      'key': '_signParams',
      'value': function a(b) {
        b = b || {};
        return R(b, this['_appKey'], this['_appSecret']);
      }
    }, {
      'key': '_request',
      'value': function a(b, c, d) {
        return new Promise(function(f, e) {
          var a = new XMLHttpRequest();
          a['onload'] = function() {
            try {
              f(JSON['parse'](a['responseText']));
            } catch (b) {
              e(new Error('status ' + a['status']));
            }
          };
          a['onerror'] = function() {
            return e(new Error('request error'));
          };
          a['open'](b, c);
          if (b === 'POST') {
            a['setRequestHeader']('Content-Type', 'application/json;charset=UTF-8');
            a['send'](JSON['stringify'](d));
          } else {
            a['send']();
          }
        });
      }
    }, {
      'key': 'ping',
      'value': function a() {
        return this['_request']('GET', this['_host'] + '/ping');
      }
    }, {
      'key': 'search',
      'value': function a(c) {
        var b = this['_signParams']({
          'image': c
        });
        return this['_request']('POST', this['_host'] + '/search', b);
      }
    }]);
    return a;
  }();
  var M = {
    'requestInterval': 0x3e8
  };
  var J = function() {
    function a(b, c) {
      g(this, a);
      this['_videoDevice'] = b;
      this['_running'] = ![];
    }
    h(a, [{
      'key': 'start',
      'value': function a(b, c) {
        this['_options'] = Object['assign']({}, M, b);
        this['_irClient'] = new Q(this['_options']['host'], this['_options']['appKey'], this['_options']['appSecret']);
        this['_running'] = !![];
        this['_request'](c);
      }
    }, {
      'key': 'stop',
      'value': function a() {
        this['_running'] = ![];
      }
    }, {
      'key': '_blobToBase64',
      'value': function a(b) {
        return new Promise(function(c, d) {
          var a = new FileReader();
          a['onloadend'] = function() {
            return c(a['result']['split']('base64,')[0x1]);
          };
          a['onerror'] = function() {
            return d(new Error('conversion error'));
          };
          a['readAsDataURL'](b);
        });
      }
    }, {
      'key': '_request',
      'value': function a(c) {
        var b = this;
        if (!this['_running']) return;
        this['_videoDevice']['updateVideoCanvas']();
        var d = this['_videoDevice']['captureFrame']();
        this['_blobToBase64'](d)['then'](function(a) {
          return b['_irClient']['search'](a);
        })['then'](function(a) {
          if (a['statusCode'] === 0x0) {
            c(null, a['result']['target']);
          } else {
            c(new Error(a['result']['message']));
          }
          window['setTimeout'](function() {
            return b['_request'](c);
          }, b['_options']['requestInterval']);
        })['catch'](function(a) {
          c(a);
          window['setTimeout'](function() {
            return b['_request'](c);
          }, b['_options']['requestInterval'] * 0x2);
        });
      }
    }]);
    return a;
  }();
  var w = function a(b, c) {
    return {
      'cameraFOV': 0x28,
      'cameraAspect': b / c,
      'cameraNear': 0.1,
      'cameraFar': 0x3e8,
      'cameraPosition': new THREE[('Vector3')](0x0, 0x0, 0x5)
    };
  };
  var x = function() {
    function a(c, b) {
      g(this, a);
      this['_videoDevice'] = c;
      var d = c['width'];
      var e = c['height'];
      b = Object['assign']({}, w(d, e), b);
      var k = this['_scene'] = new THREE['Scene']();
      var j = this['_camera'] = new THREE['PerspectiveCamera'](b['cameraFOV'], b['cameraAspect'], b['cameraNear'], b['cameraFar']);
      j['position']['copy'](b['cameraPosition']);
      var f = this['_renderer'] = new THREE[('WebGLRenderer')]({
        'alpha': !![]
      });
      f['setSize'](d, e);
      f['autoClear'] = ![];
      this['_containerElm'] = document['createElement']('div');
      this['_containerElm']['style']['position'] = 'relative';
      var h = this['_videoDevice']['videoElement'];
      this['_containerElm']['appendChild'](h);
      h['style']['position'] = 'absolute';
      var i = this['_renderer']['domElement'];
      this['_containerElm']['appendChild'](i);
      i['style']['position'] = 'absolute';
    }
    h(a, [{
      'key': 'start',
      'value': function a(d) {
        var b = this;
        var c = function a() {
          requestAnimationFrame(function() {
            return a();
          });
          d();
          b['_renderer']['clear']();
          b['_renderer']['render'](b['_scene'], b['_camera']);
        };
        c();
      }
    }, {
      'key': 'domElement',
      'get': function a() {
        return this['_containerElm'];
      }
    }, {
      'key': 'scene',
      'get': function a() {
        return this['_scene'];
      }
    }]);
    return a;
  }();
  var D = {
    'VideoDevice': s,
    'CameraVideoSource': O,
    'Recognizer': J,
    'THREERenderer': x,
    'browser': c,
    'checkBrowser': function a() {
      if (c['mobile'] || c['tablet']) {
        return c['check']({
          'firefox': '48',
          'chrome': '52',
          'opera': '37',
          'android': '56',
          'ios': '11'
        }, !![]);
      } else {
        return c['check']({
          'msedge': '12',
          'firefox': '39',
          'chrome': '53',
          'safari': '11',
          'opera': '40'
        }, !![]);
      }
    }
  };
  return D;
}));