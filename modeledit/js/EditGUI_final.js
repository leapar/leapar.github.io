(function anonymous(
  /*``*/
) {
  function _$af1462855() {
    var _this = this;
    this.tasks = [];
    this.tranStart = false;
    this.state = "SCENE";
    this.root = dom.cla("layout-widget")[0];
    this.Tabs = dom.cla("tabs", this.root)[0].children;
    this.Panels = dom.cla("panels", this.root)[0].children;
    this.tranCon = dom.cla("Dage-widget", this.Panels[0]);
    this.matBalls = {};
    this.selectMatElem = dom.cla("selection", _this.Panels[2])[0];
    var manageMapBox = dom.cla("editor-manageMaps")[0];
    var selectMaps = dom.cla("selection", _this.Panels[2]);
    selectMaps.albedo = 1;
    selectMaps.reflectivity = 2;
    selectMaps.gloss = 3;
    selectMaps.normal = 4;
    selectMaps.alpha = 5;
    this.ifThumbAutoBuild = false;
    this.snapSize = {
      width: 16,
      height: 10
    };
    this.selectCon = null;
    _this.tranFuncs = {
      HL: [],
      rot: [],
      camera: []
    };
    this.getMatOnEdit = function() {
      return webview.scene.materials[_this.selectMatElem.innerHTML]
    };
    var getIndex = function(elem, index) {
      index = index || "index";
      return elem.getAttributeNode(index) && elem.getAttributeNode(index).nodeValue
    };
    var setIndex = function(elem, name) {
      elem.setAttribute("index", name)
    };
    var metaTypelist = {
      "museum": "\u6587\u7269",
      "game": "\u6e38\u620f",
      "architecture": "\u5efa\u7b51",
      "character": "\u4eba\u7269",
      "furniture": "\u5bb6\u5177",
      "other": "\u5176\u5b83"
    };
    this.controls = {
      sceneData: null,
      file: null,
      skyIndex: 0
    };
    this.conBox = {
      SCENE: {
        skyBlur: {},
        bgBright: {},
        modelBright: {},
        modelSkyRatio: {},
        bgColor: {},
        grain: {},
        vignette: {},
        vignetteStrength: {},
        vignetteSoftness: {}
      },
      MAT: {
        albedo: {},
        reflectivity: {},
        gloss: {},
        normal: {},
        alpha: {},
        normalSmooth: {},
        transSky: {},
        transColor: {},
        fresnelColor: {},
        extrasAO: {},
        emissive: {},
        outline: {}
      },
      LIGHT: {
        intensity: null
      }
    };
    var blend = {
      none: function() {
        webview.gl.disable(webview.gl.BLEND)
      },
      alpha: function() {
        webview.gl.enable(webview.gl.BLEND);
        webview.gl.blendFuncSeparate(webview.gl.SRC_ALPHA, webview.gl.ONE_MINUS_SRC_ALPHA, webview.gl.ONE_MINUS_DST_ALPHA, webview.gl.ONE)
      },
      add: function() {
        webview.gl.enable(webview.gl.BLEND);
        var g = _this.getMatOnEdit().blendTint || [0, 0, 0];
        webview.gl.blendColor(g[0], g[1], g[2], 1);
        webview.gl.blendFunc(webview.gl.ONE, webview.gl.CONSTANT_COLOR)
      }
    };
    var getUnicode = function(chStr) {
      return escape(chStr)
    };
    var codeToCh = function(code) {
      return unescape(code)
    };
    this.Clone = function(copyObj, result) {
      result = result || {};
      if (copyObj instanceof Array) {
        if (copyObj[0] instanceof Object) {
          result = []
        } else {
          return copyObj.slice(0)
        }
      };
      for (var key in copyObj) {
        if (copyObj[key] instanceof Object) {
          result[key] = _this.Clone(copyObj[key])
        } else {
          result[key] = copyObj[key]
        }
      };
      return result
    };
    this.briRatio = 20;
    this.diffuseCoefficients = {
      "0": {
        name: "\u521d\u59cb",
        value: null
      },
      "1": {
        name: "\u65e5\u843d\xB7\u7d2b\u7eff",
        len: 1121292,
        value: [0.273822, 0.207387, 0.451671, 0, 0.193691, 0.162084, 0.46972, 0, 0.171044, 0.0404331, -0.0855362, 0, -0.125538, -0.0756095, -0.15251, 0, -0.0448664, -0.0356521, -0.0980389, 0, 0.0766321, 0.0155811, -0.0629818, 0, 0.0327059, 0.0113711, 0.00154871, 0, -0.0848948, -0.0304796, -0.0118308, -0, 0.0143526, 0.00189156, -0.0112624, 0]
      },
      "2": {
        name: "\u68ee\u6797\xB7\u6d53\u7eff",
        len: 1175717,
        value: [0.310316, 0.345776, 0.263565, 0, 0.221274, 0.269763, 0.232018, 0, 0.136007, 0.159979, 0.166379, 0, 0.249386, 0.265308, 0.185811, 0, 0.16945, 0.184094, 0.147212, 0, 0.118553, 0.148437, 0.160508, 0, -0.00145948, 0.00236248, 0.00871837, 0, 0.0159212, 0.0135713, 0.00774653, -0, 0.0419059, 0.0402874, 0.0197122, 0]
      },
      "3": {
        name: "\u96ea\u96fe\xB7\u84dd\u767d",
        len: 748613,
        value: [0.243456, 0.316798, 0.534967, 0, 0.0592074, 0.0666407, 0.09331, 0, -0.0123966, -0.00922346, -0.000502135, 0, -0.00548232, -0.00136296, 0.00783429, 0, 0.00149231, 0.00401156, 0.00590346, 0, -0.0103117, -0.00678454, -0.00030667, -0, -0.011801, -0.0175958, -0.0368021, 0, 0.0184602, 0.0228106, 0.0317087, -0, 0.0214556, 0.0211349, 0.0119384, 0]
      },
      "4": {
        name: "\u793c\u5802\xB7\u6731\u7ea2",
        len: 1037895,
        value: [0.351444, 0.108444, 0.0594837, 0, 0.308052, 0.14492, 0.0981897, 0, 0.0118338, -0.00055879, -0.00494144, 0, -0.0156579, -0.0046771, -0.000982689, 0, 0.00168656, -0.00249216, 8.32647e-05, 0, 0.0142927, 0.00122082, -0.00466058, 0, -0.00247094, -0.00676742, -0.00645807, 0, -0.00511645, -0.00182865, -0.000682809, -0, -0.100928, -0.0547311, -0.0392548, 0]
      },
      "5": {
        name: "\u5c0f\u5c4b\xB7\u9e45\u9ec4",
        len: 883526,
        value: [0.641258, 0.492372, 0.300444, 0, 0.0767825, 0.0826013, 0.15438, 0, -0.0261349, -0.0238215, -0.0327161, 0, -0.26684, -0.23747, -0.115269, 0, -0.010728, -0.00679813, 0.0346863, 0, -0.0508339, -0.044133, -0.0817679, -0, -0.0282286, -0.0215984, -0.016715, 0, -0.0165406, -0.0152086, -0.0196153, -0, 0.0227706, 0.0230796, -0.0103561, 0]
      },
      "6": {
        name: "\u5efa\u7b51\xB7\u84dd\u7eff ",
        len: 1130555,
        value: [0.335048, 0.524112, 0.84181, 0, 0.123705, 0.308126, 0.665572, 0, -0.0341286, -0.0443325, -0.010548, 0, 0.111542, 0.16196, 0.244783, 0, 0.0448903, 0.0915918, 0.185296, 0, -0.0709361, -0.0763065, -0.0563004, -0, 0.0691498, 0.0785946, 0.0843663, 0, -0.0861911, -0.131411, -0.192031, -0, -0.0112084, -0.0485369, -0.135951, 0]
      },
      "7": {
        name: "\u5c71\u6c34\xB7\u9edb\u84dd",
        len: 1058603,
        value: [0.118841, 0.201139, 0.343297, 0, 0.0778299, 0.143871, 0.263921, 0, -0.0313322, -0.0265804, -0.0128626, 0, 0.0751581, 0.118906, 0.195401, 0, 0.055994, 0.086636, 0.142866, 0, -0.027752, -0.0248658, -0.0162614, 0, 0.0025031, 0.00311622, 0.00171367, -0, -0.0597443, -0.0881905, -0.133241, -0, 0.0169004, 0.0252816, 0.0379894, 0]
      },
      "8": {
        name: "\u661f\u9645\xB7\u6697\u7d2b",
        len: 1162467,
        value: [0.221662, 0.160768, 0.179986, 0, -0.0336858, -0.0271865, -0.0432187, 0, 0.0431587, 0.0449381, 0.0777205, 0, -0.00895749, -0.00995672, -0.0236731, 0, 0.131259, 0.0959372, 0.109081, 0, -0.0869359, -0.0671255, -0.0878273, 0, 0.0466253, 0.0343252, 0.0403621, 0, -0.127538, -0.0920461, -0.109561, -0, -0.0131403, -0.0102671, -0.0145531, 0]
      },
      "9": {
        name: "\u8857\u666f\xB7\u7d2b\u7ea2",
        len: 1227873,
        value: [0.290875, 0.181292, 0.187548, 0, 0.133544, 0.072535, 0.0775885, 0, -0.23206, -0.104954, -0.0965297, 0, 0.073349, -0.00486491, -0.0243945, 0, 0.0918934, 0.0325936, 0.0272212, 0, -0.17268, -0.0762099, -0.075248, 0, 0.0318008, 0.0134263, 0.00860141, 0, -0.195756, -0.115627, -0.109104, -0, 0.0719391, 0.0614283, 0.0718707, 0]
      },
      "10": {
        name: "\u6d1e\u7a9f\xB7\u8910\u7ea2",
        len: 1016469,
        value: [0.267133, 0.102386, 0.0379123, 0, 0.0634241, 0.0247542, 0.0055022, 0, -0.106518, -0.044563, -0.0182303, 0, 0.314158, 0.112199, 0.0361155, -0, 0.0627007, 0.0253856, 0.00898771, 0, -0.0313788, -0.0139272, -0.00547186, -0, -0.02831, -0.00847622, -0.000646993, -0, -0.14434, -0.0549511, -0.0163049, 0, 0.101767, 0.036392, 0.00986811, 0]
      },
      "11": {
        name: "\u51b0\u539f\xB7\u767d\u7070",
        len: 864938,
        value: [0.536017, 0.595263, 0.649691, 0, 0.0670195, 0.111463, 0.162763, 0, -0.0118603, -0.0142979, -0.0178328, 0, 0.0684685, 0.0788985, 0.0835966, 0, 0.0697635, 0.079449, 0.0818248, 0, 0.0484591, 0.0603787, 0.0832215, -0, -0.0512065, -0.0621249, -0.0758007, 0, -0.00845551, -0.0109127, -0.0155945, -0, -0.0983695, -0.118975, -0.145421, 0]
      }
    };
    this.presetMat = {
      "\u6728\u6750": {
        TexName: "wood",
        albedo: {
          strength: 100
        },
        reflectivity: {
          map: "\u672a\u8d34\u56fe",
          strength: 35
        },
        gloss: {
          map: "\u672a\u8d34\u56fe",
          strength: 30
        },
        normal: {
          map: true,
          strength: 100
        }
      },
      "\u77f3\u5934": {
        TexName: "stone",
        albedo: {
          strength: 80
        },
        reflectivity: {
          map: "\u672a\u8d34\u56fe",
          strength: 15
        },
        gloss: {
          map: "\u672a\u8d34\u56fe",
          strength: 40
        },
        normal: {
          map: true,
          strength: 100
        }
      },
      "\u5e03\u6599": {
        TexName: "cotton",
        albedo: {
          strength: 100
        },
        reflectivity: {
          map: "\u672a\u8d34\u56fe",
          strength: 25
        },
        gloss: {
          map: "\u672a\u8d34\u56fe",
          strength: 15
        },
        normal: {
          map: true,
          strength: 100
        }
      },
      "\u76ae\u9769": {
        TexName: "leather",
        albedo: {
          strength: 100
        },
        reflectivity: {
          map: "\u672a\u8d34\u56fe",
          strength: 20
        },
        gloss: {
          map: "\u672a\u8d34\u56fe",
          strength: 60
        },
        normal: {
          map: true,
          strength: 100
        }
      },
      "\u9676\u74f7": {
        TexName: "porcelain",
        albedo: {
          strength: 100
        },
        reflectivity: {
          map: "\u672a\u8d34\u56fe",
          strength: 40
        },
        gloss: {
          map: "\u672a\u8d34\u56fe",
          strength: 80
        },
        normal: {
          map: true,
          strength: 100
        }
      },
      "\u91d1\u5c5e": {
        TexName: "aluminum",
        albedo: {
          strength: 50
        },
        reflectivity: {
          map: "\u672a\u8d34\u56fe",
          strength: 95
        },
        gloss: {
          map: "\u672a\u8d34\u56fe",
          strength: 45
        },
        normal: {
          map: true,
          strength: 100
        }
      }
    };
    var Clamp = function(value, min, max) {
      if (min === void(0)) {
        min = 0
      };
      if (max === void(0)) {
        max = 1
      };
      return Math.min(max, Math.max(min, value))
    };
    var ScrollBar = function(value, min, max, line, knot, track, textArea, name, unitStr, onchange) {
      var scope = this;
      this.name = name;
      this.value = value;
      this.min = min || 0;
      this.max = max || 100;
      this.line = line;
      this.knot = knot;
      this.track = track;
      this.textArea = textArea;
      this.unitStr = unitStr;
      this.onchange = onchange;
      this.percent = null;
      this.dragStart = false;
      this.offsetToBody = null;
      this.getOffset();
      this.checkError();
      this.percent = this.getPercent();
      this.displayValue(value);
      this.moveKnot();
      this.knotWidth = 0;
      this.lineWidth = 0;
      dom.bind(this.line, "mousedown", function(event) {
        scope.dragStart = true;
        scope.dragChange(event)
      });
      dom.bind(document, "mouseup", function(event) {
        if (scope.dragStart) {
          scope.dragStart = false;
          webview.updateView(false, false)
        }
      });
      dom.bind(document, "mousemove", function(event) {
        if (scope.dragStart) {
          scope.dragChange(event)
        }
      });
      dom.bind(this.line, "touchstart", function(event) {
        scope.dragStart = true;
        scope.dragChange(event)
      });
      dom.bind(document, "touchend", function(event) {
        if (scope.dragStart) {
          scope.dragStart = false;
          webview.updateView(false, false)
        }
      });
      dom.bind(document, "touchmove", function(event) {
        if (scope.dragStart) {
          scope.dragChange(event)
        }
      });
      dom.bind(this.textArea, "change", function() {
        var v = parseFloat(scope.textArea.value);
        if (v != v) {
          return
        };
        scope.setValueFromOutside(v)
      })
    };
    ScrollBar.prototype.getOffset = function() {
      var left = this.line.offsetLeft;
      var element = this.line;
      while (element = element.offsetParent) {
        left += element.offsetLeft
      };
      this.offsetToBody = (left == 0) ? (this.offsetToBody || 0) : left
    };
    ScrollBar.prototype.checkError = function() {
      if (this.min >= this.max) {
        console.log("scrollbar\u503c\u6709\u8bef  " + name);
        return
      }
    };
    ScrollBar.prototype.getPercent = function() {
      return (this.value - this.min) / (this.max - this.min)
    };
    ScrollBar.prototype.displayValue = function(v) {
      v = Math.round(v * 10) / 10;
      this.textArea.value = v + "" + (this.unitStr || "")
    };
    ScrollBar.prototype.getWidth = function() {
      this.knotWidth || (this.knotWidth = this.knot.clientWidth);
      this.lineWidth || (this.lineWidth = this.line.clientWidth - this.knotWidth)
    };
    ScrollBar.prototype.moveKnot = function() {
      this.getWidth();
      var width = this.percent * this.lineWidth;
      this.knot.style.left = width + "px";
      if (this.track) {
        this.track.style.width = width + this.knotWidth / 2 + "px"
      }
    };
    ScrollBar.prototype.bind = function(f) {
      this.onchange = f
    };
    ScrollBar.prototype.setValue = function(v) {
      this.value = v;
      this.percent = this.getPercent();
      this.moveKnot();
      if (this.onchange) {
        this.onchange(this.value)
      };
      webview.updateView(true, false, 1)
    };
    ScrollBar.prototype.dragChange = function(event) {
      this.getWidth();
      if (!this.offsetToBody) {
        this.getOffset()
      };
      if (event.clientX != void(0)) {
        this.percent = (event.clientX - this.knotWidth / 2 - this.offsetToBody) / this.lineWidth
      } else {
        this.percent = (event.touches[0].clientX - this.knotWidth / 2 - this.offsetToBody) / this.lineWidth
      };
      if (this.percent < 0) {
        this.percent = 0
      } else {
        if (this.percent > 1) {
          this.percent = 1
        }
      };
      var v = Math.round(this.percent * (this.max - this.min) + this.min);
      if (this.value == v) {
        return
      };
      this.setValue(v);
      this.displayValue(Math.round(v))
    };
    ScrollBar.prototype.setValueFromOutside = function(v) {
      if (this.line.clientWidth == 0) {
        return
      };
      v = Clamp(v, this.min, this.max);
      this.displayValue(v);
      this.setValue(v);
      webview.updateView(false, false)
    };
    var quickSort = function(arr) {
      if (arr.length <= 1) {
        return arr
      };
      var pivotIndex = Math.floor(arr.length / 2);
      var pivot = arr.splice(pivotIndex, 1)[0];
      var left = [];
      var right = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].localeCompare(pivot) < 0) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      };
      return quickSort(left).concat([pivot], quickSort(right))
    };
    var setLightsObjDisplay = function(o) {
      var lights = webview.scene.lights;
      if (o.con == 0 && _this.lightEdit != void(0)) {
        var ev = document.createEvent("MouseEvent");
        ev.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        _this.modeObj[4].ul[0].children[_this.lightEdit].dispatchEvent(ev)
      };
      for (var i = 0; i < lights.maxCount; i++) {
        lights.lights[i].setDisplay(o)
      };
      webview.updateView(false, false)
    };
    var unSelectLight = function() {
      if (_this.lightEdit == void(0)) {
        return
      };
      var ev = document.createEvent("MouseEvent");
      ev.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      _this.modeObj[4].ul[0].children[_this.lightEdit].dispatchEvent(ev)
    };
    var tabs = dom.cla("tabs", dom.cla("editor-panel")[0])[0].children;
    var divs = dom.cla("panels")[0].children;
    var tabsObject = {
      tabOnClass: "on",
      tabs: {
        0: tabs[0],
        1: tabs[1],
        2: tabs[2],
        3: tabs[3]
      },
      contents: {
        0: divs[0],
        1: divs[1],
        2: divs[2],
        3: divs[3]
      },
      callbacks: {
        0: function() {
          _this.state = "SCENE";
          setLightsObjDisplay({
            "sprite": 0,
            "targetCon": 0,
            "tranCon": 0,
            "guide": 0
          });
          unSelectLight()
        },
        1: function() {
          _this.state = "LIGHT";
          setLightsObjDisplay({
            "sprite": 1,
            "targetCon": 1,
            "guide": 1
          })
        },
        2: function() {
          _this.state = "MAT";
          _this.highlightMat();
          if (!_this.conBox.hasSliderOffset) {
            for (var i in _this.conBox.MAT) {
              if (!_this.conBox.MAT[i].slider) {
                continue
              };
              _this.conBox.MAT[i].slider.getOffset();
              _this.conBox.MAT[i].slider.moveKnot()
            };
            _this.conBox.hasSliderOffset = true
          };
          setLightsObjDisplay({
            "sprite": 0,
            "targetCon": 0,
            "tranCon": 0,
            "guide": 0
          });
          unSelectLight()
        },
        3: function() {
          _this.state = "META";
          setLightsObjDisplay({
            "sprite": 0,
            "targetCon": 0,
            "tranCon": 0,
            "guide": 0
          });
          unSelectLight()
        }
      }
    };
    var tabsListen = function(object) {
      for (var i in object.tabs) {
        dom.bind(object.tabs[i], "click", (function(i) {
          return function() {
            var len = object.tabs.length;
            var index = 0;
            for (var m in object.tabs) {
              if (m === i) {
                dom.addClass(object.tabs[m], object.tabOnClass);
                dom.removeClass(object.contents[m], "hide");
                if (object.callbacks[m]) {
                  object.callbacks[m]()
                }
              } else {
                dom.removeClass(object.tabs[m], object.tabOnClass);
                dom.addClass(object.contents[m], "hide")
              };
              if (len) {
                index++;
                if (index >= len) {
                  break
                }
              }
            }
          }
        })(i))
      }
    };
    _this.openPanel = function(index) {
      if (dom.hasClass(tabsObject.tabs[index], "on")) {
        return
      };
      var ev = document.createEvent("MouseEvent");
      ev.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      tabsObject.tabs[index].dispatchEvent(ev)
    };
    var mulChosedlistBind = function(list, onArray, select, max, fuc) {
      var options = dom.Tag("ul", select.parentNode)[0];
      if (onArray == void(0) || onArray.length === 0) {
        select.innerText = "\u8bf7\u70b9\u51fb\u9009\u62e9"
      };
      for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = list[i];
        li.appendChild(span);
        options.appendChild(li);
        if (onArray && onArray.indexOf(list[i]) > -1) {
          dom.addClass(li, "chosen");
          select.innerText += list[i]
        }
      };
      max = max || list.length;
      var over1 = false;
      var over2 = false;
      var focus = false;
      var over3 = false;
      var headDown = false;
      dom.bind(select, "mouseover", function() {
        dom.addClass(select, "focus");
        over1 = true
      });
      dom.bind(select, "mouseout", function() {
        if (!focus) {
          dom.removeClass(select, "focus")
        };
        over1 = false;
        headDown = false
      });
      dom.bind(options, "mouseover", function(event) {
        over2 = true;
        for (var i = 0; i < options.children.length; i++) {
          dom.removeClass(options.children[i], "hover")
        };
        var elem = event.target;
        over3 = false;
        while (elem.nodeName != "LI") {
          elem = elem.parentElement;
          over3 = true
        };
        dom.addClass(elem, "hover")
      });
      dom.bind(options, "mouseout", function() {
        over2 = false;
        over3 = false
      });
      dom.bind(document, "mousedown", function(event) {
        if (over1) {
          headDown = true;
          focus = true;
          dom.addClass(select, "focus")
        } else {
          if (!over2 && !over3) {
            dom.addClass(options, "hide");
            dom.removeClass(select, "focus");
            focus = false
          }
        }
      });
      dom.bind(document, "mouseup", function(event) {
        if (over1) {
          if (dom.hasClass(options, "hide") && headDown) {
            dom.removeClass(options, "hide")
          } else {
            if (!dom.hasClass(options, "hide")) {
              dom.addClass(options, "hide")
            }
          }
        } else {
          if (over2 || over3) {
            var elem = event.target;
            while (elem.nodeName != "LI") {
              elem = elem.parentElement
            };
            if (dom.hasClass(elem, "chosen")) {
              dom.removeClass(elem, "chosen")
            } else {
              dom.addClass(elem, "chosen")
            };
            select.innerText = "";
            for (var i = 0; i < options.children.length; i++) {
              if (dom.hasClass(options.children[i], "chosen")) {
                select.innerHTML += options.children[i].innerText + "; &nbsp;&nbsp;"
              }
            };
            if (elem.innerText !== "\u7a7a") {
              if (fuc) {
                fuc(select.innerText, getIndex(select))
              }
            }
          } else {
            if (!over2 && !over3) {
              dom.addClass(options, "hide");
              dom.removeClass(select, "focus");
              focus = false
            }
          }
        }
      })
    };
    var setMetaType = function() {
      var select = dom.cla("selection", _this.Panels[3])[0];
      var list = [];
      for (var m in metaTypelist) {
        list.push(metaTypelist[m])
      };
      var o = {
        initOption: "\u8bf7\u70b9\u51fb\u9009\u62e9",
        option: metaTypelist[_this.controls.sceneData.metaData.type],
        noCallback: true
      };
      new listBind(list, select, null, o)
    };
    this.checkObject = {
      getState: {
        2: function() {
          return !_this.getMatOnEdit().cullBackFaces
        },
        1: function() {
          if (_this.lightEdit == void(0)) {
            return false
          } else {
            return webview.scene.lights.lights[_this.lightEdit].shadow
          }
        },
        3: function() {
          return _this.controls.sceneData.metaData.download
        },
        0: function() {
          return _this.showAxis
        }
      },
      fuc: {
        2: function(state) {
          _this.getMatOnEdit().cullBackFaces = !state;
          webview.updateView(false, false)
        },
        1: function(state) {
          if (_this.lightEdit == void(0)) {
            return
          } else {
            webview.scene.lights.lights[_this.lightEdit].shadow = state;
            webview.scene.lights.tidyOrder();
            webview.updateView(false, false)
          }
        },
        3: null,
        0: function(state) {
          _this.showAxis = state;
          webview.updateView(false, false)
        }
      }
    };
    var setAllcheckbox = function(fucObject) {
      var boxes = dom.cla("checkbox");
      for (var i = 0; i < boxes.length; i++) {
        if (fucObject.getState[i]()) {
          dom.addClass(boxes[i], "checked")
        };
        dom.bind(boxes[i], "mousedown", function(index) {
          return function() {
            if (dom.hasClass(boxes[index], "checked")) {
              dom.removeClass(boxes[index], "checked");
              if (fucObject.fuc[index]) {
                fucObject.fuc[index](false)
              }
            } else {
              dom.addClass(boxes[index], "checked");
              if (fucObject.fuc[index]) {
                fucObject.fuc[index](true)
              }
            }
          }
        }(i))
      }
    };
    this.OnOffObject = {
      getState: {
        0: function() {
          return _this.getMatOnEdit().usesBlending
        },
        1: function() {
          return _this.getMatOnEdit().useSkin
        },
        3: function() {
          return _this.getMatOnEdit().useAO
        },
        2: function() {
          return _this.getMatOnEdit().useEmissive
        },
        4: function() {
          return _this.getMatOnEdit().outline
        }
      },
      fuc: {
        0: function(state) {
          var fb;
          if (!state) {
            fb = "none"
          } else {
            if (dom.hasClass(_this.modeObj[1].ul[0].children[0], "chosen")) {
              fb = "alpha"
            } else {
              fb = "add"
            }
          };
          _this.getMatOnEdit().blend = blend[fb];
          _this.getMatOnEdit().blendType = fb;
          _this.getMatOnEdit().usesBlending = state;
          webview.updateView(false, false)
        },
        1: function(state) {
          _this.getMatOnEdit().useSkin = state;
          if (state) {
            _this.getMatOnEdit().extrasTexCoordRanges.translucencyTex = new Float32Array([1, 1, 0, 0])
          } else {
            delete _this.getMatOnEdit().extrasTexCoordRanges.translucencyTex
          };
          _this.getMatOnEdit().addOrRemoveDefine("#define SKIN", state);
          webview.updateView(false, false)
        },
        3: function(state) {
          _this.getMatOnEdit().useAO = state;
          if (state) {
            _this.getMatOnEdit().extrasTexCoordRanges.aoTex = new Float32Array([1, 1, 0, 0])
          } else {
            delete _this.getMatOnEdit().extrasTexCoordRanges.aoTex
          };
          _this.getMatOnEdit().addOrRemoveDefine("#define AMBIENT_OCCLUSION", state);
          webview.updateView(false, false)
        },
        2: function(state) {
          _this.getMatOnEdit().useEmissive = state;
          if (state) {
            _this.getMatOnEdit().extrasTexCoordRanges.emissiveTex = new Float32Array([1, 1, 0, 0])
          } else {
            delete _this.getMatOnEdit().extrasTexCoordRanges.emissiveTex
          };
          _this.getMatOnEdit().addOrRemoveDefine("#define EMISSIVE", state);
          webview.updateView(false, false)
        },
        4: function(state) {
          _this.getMatOnEdit().outline = state;
          webview.updateView(false, false)
        }
      }
    };
    var setAllOnOff = function(fucObject) {
      var btn = dom.cla("onOffState");
      for (var i = 0; i < btn.length; i++) {
        if (fucObject.getState[i]()) {
          dom.addClass(btn[i], "on")
        } else {
          dom.addClass(btn[i].parentNode.nextElementSibling, "unable")
        };
        dom.bind(btn[i], "click", function(index) {
          return function(event) {
            event.stopPropagation();
            if (dom.hasClass(btn[index], "on")) {
              dom.removeClass(btn[index], "on");
              if (fucObject.fuc[index]) {
                fucObject.fuc[index](false)
              };
              dom.addClass(btn[index].parentNode.nextElementSibling, "unable")
            } else {
              dom.addClass(btn[index], "on");
              if (fucObject.fuc[index]) {
                fucObject.fuc[index](true)
              };
              dom.removeClass(btn[index].parentNode.nextElementSibling, "unable")
            }
          }
        }(i))
      }
    };
    var setAllToggle = function() {
      var groups = dom.cla("group-widget");
      var contents = [];
      for (var i = 0; i < groups.length; i++) {
        content = dom.cla("widget-wrapper", groups[i])[0];
        header = dom.cla("header", content)[0];
        inner = dom.cla("inner", content)[0];
        dom.bind(header, "click", function(inn, head) {
          return function() {
            if (dom.hasClass(inn, "closed")) {
              dom.removeClass(inn, "closed");
              dom.removeClass(head, "closed")
            } else {
              dom.addClass(inn, "closed");
              dom.addClass(head, "closed")
            }
          }
        }(inner, header))
      }
    };
    var changeTex = function(texObj, type, mat) {
      mat = mat || _this.getMatOnEdit();
      var t, t2, d, e, n, type2, v;
      d = {
        mipmap: !0,
        aniso: webview.gl.hints.mobile ? 0 : 4,
        clamp: !!_this.controls.sceneData.materials2[mat.name].textureWrapClamp,
        mirror: !!_this.controls.sceneData.materials2[mat.name].textureWrapMirror
      }, e = {
        mipmap: d.mipmap,
        clamp: d.clamp,
        mirror: d.mirror,
        nofilter: _this.controls.sceneData.materials2[mat.name].textureFilterNearest || !1
      };
      e.nofilter || (e.aniso = webview.gl.hints.mobile ? 2 : 4);
      if (texObj.strength != void(0)) {
        mat.strength[type] = texObj.strength
      } else {
        if (type == "albedo" || type == "alpha") {
          n = e
        } else {
          n = d
        };
        if (texObj.color) {
          t = new Texture(webview.gl, n);
          t.loadArray(new Uint8Array([texObj.color[0], texObj.color[1], texObj.color[2], 255]));
          v = texObj.color
        } else {
          if (texObj.name) {
            if (texObj.name !== "\u672a\u8d34\u56fe") {
              t = webview.gl.textureCache.cache[texObj.name];
              v = texObj.name
            } else {
              t = new Texture(webview.gl, n);
              if (type === "normal") {
                t.loadArray(new Uint8Array([128, 127, 255, 255]));
                v = [128, 127, 255]
              } else {
                t.loadArray(new Uint8Array([255, 255, 255, 255]));
                v = [255, 255, 255]
              }
            }
          }
        }
      };
      t && (mat.unMergedTex[type].tex = t);
      t && (mat.unMergedTex[type].value = v);
      if (t) {
        switch (type) {
          case "reflectivity":
            t2 = webview.gl.textureCache.MergeAlpha2(t, mat.unMergedTex.gloss.tex, d);
            type2 = "reflectivity";
            break;
          case "albedo":
            t2 = webview.gl.textureCache.MergeAlpha2(t, mat.unMergedTex.alpha.tex, e);
            type2 = "albedo";
            break;
          case "gloss":
            t2 = webview.gl.textureCache.MergeAlpha2(mat.unMergedTex.reflectivity.tex, t, d);
            type2 = "reflectivity";
            break;
          case "alpha":
            t2 = webview.gl.textureCache.MergeAlpha2(mat.unMergedTex.albedo.tex, t, e);
            type2 = "albedo";
            break;
          case "normal":
            t2 = t;
            type2 = "normal";
            break;
          case "extras":
            t2 = webview.gl.textureCache.MergeAlpha2(t, mat.unMergedTex.extrasA.tex, d);
            type2 = "extras";
            break;
          case "extrasA":
            t2 = webview.gl.textureCache.MergeAlpha2(mat.unMergedTex.extras.tex, t, d);
            type2 = "extras";
            break;
          case "extrasSkin":
            t2 = webview.gl.textureCache.MergeAlpha2(t, mat.unMergedTex.extrasSkinA.tex, d);
            type2 = "extrasSkin";
            break;
          case "extrasAO":
            t2 = webview.gl.textureCache.MergeAlpha2(t, mat.unMergedTex.extrasAOA.tex, d);
            type2 = "extrasAO";
            break;
          case "extrasEmi":
            t2 = webview.gl.textureCache.MergeAlpha2(t, mat.unMergedTex.extrasEmiA.tex, d);
            type2 = "extrasEmi";
            break;
          default:
            console.error("\u672a\u77e5\u8d34\u56fe\u7c7b\u578b " + type)
        };
        mat.textures[type2] = t2
      };
      var type3;
      if (texObj.strength) {
        type3 = "strength"
      };
      PreviewUpdate(mat, type, type3);
      webview.updateView(false, false)
    };
    var setPreviews = function() {
      _this.previewer = {};
      var cans = dom.cla("false-preview");
      for (var i = 0; i < cans.length; i++) {
        var p = new Previewer(cans[i]);
        _this.previewer[getIndex(cans[i])] = p
      };
      var mat = _this.getMatOnEdit();
      PreviewUpdate(mat, "gloss");
      PreviewUpdate(mat, "alpha");
      PreviewUpdate(mat, "normal");
      PreviewUpdate(mat, "extrasSkin");
      PreviewUpdate(mat, "extrasAO");
      PreviewUpdate(mat, "extrasEmi")
    };
    var showAndHide = function(btn, content, fuc) {
      var over1 = false;
      var over2 = false;
      var focus = false;
      dom.bind(btn, "mouseover", function() {
        over1 = true
      });
      dom.bind(btn, "mouseout", function() {
        over1 = false
      });
      dom.bind(content, "mouseover", function(event) {
        over2 = true
      });
      dom.bind(content, "mouseout", function() {
        over2 = false
      });
      dom.bind(document, "mousedown", function() {
        if (over1) {
          if (dom.hasClass(content, "hide")) {
            dom.removeClass(content, "hide");
            if (fuc) {
              fuc()
            }
          } else {
            dom.addClass(content, "hide")
          }
        } else {
          if (!over2) {
            dom.addClass(content, "hide")
          }
        }
      })
    };
    var PreviewsClick = function() {
      var btns = dom.cla("display", _this.root);
      var boxes = dom.cla("textures-box", _this.root);
      for (var i = 0; i < btns.length; i++) {
        showAndHide(btns[i], boxes[i], (function() {
          var index = i;
          return function() {
            var tabs = dom.cla("option", boxes[index]);
            var c = getIndex(boxes[index]);
            if (tabs.length && dom.hasClass(tabs[1], "chosen")) {
              _this.conBox.MAT[c].CPicker.setOffset();
              if (_this.getMatOnEdit().unMergedTex[c] && _this.getMatOnEdit().unMergedTex[c].value instanceof Object) {
                _this.conBox.MAT[c].CPicker.setRgb(_this.getMatOnEdit().unMergedTex[c].value)
              }
            } else {
              if (c == "light") {
                _this.conBox.LIGHT.CPicker.setOffset();
                var light = webview.scene.lights.lights[_this.lightEdit];
                var c = [light.color[0] * 255, light.color[1] * 255, light.color[2] * 255];
                _this.conBox.LIGHT.CPicker.setRgb(c)
              }
            }
          }
        })())
      }
    };

    function PreviewUpdate(mat, type, changeType) {
      var p = _this.previewer[type];
      if (p == void(0)) {
        return
      };
      var b = p.gl;
      var k = p.shader;
      k.bind();
      mat = mat || _this.getMatOnEdit();
      var map = mat.unMergedTex[type];
      var t;
      if (type === "light") {
        var light = webview.scene.lights.lights[_this.lightEdit];
        if (!light) {
          return
        };
        t = new Texture(b, {
          width: 1,
          height: 1
        });
        t.loadArray(new Uint8Array([light.color[0] * 255, light.color[1] * 255, light.color[2] * 255, 255]))
      } else {
        if (changeType !== "strength" || p.texture == void(0)) {
          if (!map.tex || map.value instanceof Array) {
            t = new Texture(b, {
              width: 1,
              height: 1
            });
            t.loadArray(new Uint8Array([map.value[0], map.value[1], map.value[2], 255]))
          } else {
            t = new Texture(b);
            var smallImg;
            if (map.tex.smallImg) {
              smallImg = map.tex.smallImg.loaded ? map.tex.smallImg : map.tex.img
            } else {
              if (webview.gl.textureCache.cache[map.value] && webview.gl.textureCache.cache[map.value].smallImg) {
                smallImg = webview.gl.textureCache.cache[map.value].smallImg.loaded ? webview.gl.textureCache.cache[map.value].smallImg : webview.gl.textureCache.cache[map.value].img
              } else {
                console.log("PreviewUpdate map error")
              }
            };
            t.loadImage(smallImg)
          }
        }
      };
      if (t) {
        p.texture = t;
        p.texture.bind(k.samplers.tRGBA, b)
      };
      b.uniform1f(k.params.strength, dom.ifVoid(_this.getMatOnEdit().strength[type], 100));
      b.bindBuffer(b.ARRAY_BUFFER, p.buffer);
      b.enableVertexAttribArray(k.attribs.pos);
      b.vertexAttribPointer(k.attribs.pos, 2, b.FLOAT, !1, 0, 0);
      b.drawArrays(b.TRIANGLE_STRIP, 0, 4);
      b.disableVertexAttribArray(k.attribs.pos);
      b.bindBuffer(b.ARRAY_BUFFER, null)
    }
    var setScroll = function(idName, v, min, max, name, unit) {
      var slider, line, kont, textArea, track;
      slider = dom.id(idName);
      line = dom.cla("scrollBar", slider)[0];
      knot = dom.cla("scroll_Thumb", slider)[0];
      textArea = dom.cla("scrollBarTxt", slider)[0];
      track = dom.cla("scroll_Track", slider)[0];
      return new ScrollBar(v, min, max, line, knot, track, textArea, name, unit)
    };
    var setAllScroll = function() {
      _this.conBox.SCENE.skyBlur.slider = setScroll("slider-skyBlur", webview.scene.sky.skyBlurIndex - 1, 1, 6, "skyBlur");
      _this.conBox.SCENE.bgBright.slider = setScroll("slider-bgBright", webview.scene.sky.backgroundBrightness * _this.briRatio, 0, 100, "bgBright");
      _this.conBox.SCENE.modelBright.slider = setScroll("slider-modelBright", webview.scene.sky.modelBright * 20, 0, 100, "modelBright");
      _this.conBox.SCENE.modelSkyRatio.slider = setScroll("slider-modelSkyRatio", webview.scene.sky.modelSkyRatio * 100, 0, 100, "modelSkyRatio");
      _this.conBox.SCENE.grain.slider = setScroll("slider-grain", webview.scene.postRender.desc.grain * 400, 0, 100, "grain");
      _this.conBox.SCENE.vignetteStrength.slider = setScroll("slider-vigStrength", webview.scene.postRender.desc.vignette[3] * 50, 0, 100, "vigStrength");
      _this.conBox.SCENE.vignetteSoftness.slider = setScroll("slider-vigSoftness", webview.scene.postRender.desc.vignetteCurve * 100, 0, 100, "vigSoftness");
      _this.conBox.MAT.albedo.slider = setScroll("slider-albedo", _this.getMatOnEdit().strength.albedo, 0, 100, "albedo");
      _this.conBox.MAT.reflectivity.slider = setScroll("slider-reflec", _this.getMatOnEdit().strength.reflectivity, 0, 100, "reflectivity");
      _this.conBox.MAT.alpha.slider = setScroll("slider-alpha", _this.getMatOnEdit().strength.alpha, 0, 100, "alpha");
      _this.conBox.MAT.normal.slider = setScroll("slider-normal", _this.getMatOnEdit().strength.normal, -200, 200, "normal");
      _this.conBox.MAT.gloss.slider = setScroll("slider-gloss", _this.getMatOnEdit().strength.gloss, 0, 100, "gloss");
      _this.conBox.MAT.normalSmooth.slider = setScroll("slider-normalSmooth", _this.getMatOnEdit().skinParams.normalSmooth * 100, 0, 100, "normalSmooth");
      _this.conBox.MAT.transSky.slider = setScroll("slider-transSky", _this.getMatOnEdit().skinParams.transSky / 1.2 * 100, 0, 100, "transSky");
      _this.conBox.MAT.extrasAO.slider = setScroll("slider-AO", _this.getMatOnEdit().strength.extrasAO, 0, 100, "AOstrength");
      _this.conBox.MAT.emissive.slider = setScroll("slider-emissive", _this.getMatOnEdit().emissiveIntensity * 25, 1, 100, "emissive");
      _this.conBox.MAT.outline.slider = setScroll("slider-outline", _this.getMatOnEdit().outlineWidth * 200, 1, 100, "outlineWidth");
      _this.conBox.LIGHT.intensity = setScroll("slider-lightStrength", 1, 1, 100, "lightStrength");
      _this.conBox.LIGHT.distance = setScroll("slider-lightDistance", 1, 1, 100, "lightDistance");
      _this.conBox.LIGHT.curve = setScroll("slider-lightCurve", 1, 0, 100, "lightCurve");
      _this.conBox.LIGHT.angle = setScroll("slider-lightAngle", 1, 1, 179, "lightAngle", "\xB0");
      _this.conBox.LIGHT.sharpness = setScroll("slider-lightSharpness", 1, 1, 100, "lightSharpness");
      _this.conBox.SCENE.skyBlur.slider.bind(skyBlurFuc);
      _this.conBox.SCENE.bgBright.slider.bind(bgBrightFuc);
      _this.conBox.SCENE.modelBright.slider.bind(modelBrightFuc);
      _this.conBox.SCENE.modelSkyRatio.slider.bind(modelSkyRatioFuc);
      _this.conBox.SCENE.grain.slider.bind(grainFuc);
      _this.conBox.SCENE.vignetteStrength.slider.bind(vignetteStrengthFuc);
      _this.conBox.SCENE.vignetteSoftness.slider.bind(vignetteSoftnessFuc);
      _this.conBox.MAT.albedo.slider.bind(function(albedo) {
        changeTex({
          "strength": albedo
        }, "albedo")
      });
      _this.conBox.MAT.reflectivity.slider.bind(function(reflec) {
        changeTex({
          "strength": reflec
        }, "reflectivity")
      });
      _this.conBox.MAT.alpha.slider.bind(function(alpha) {
        changeTex({
          "strength": alpha
        }, "alpha")
      });
      _this.conBox.MAT.gloss.slider.bind(function(gloss) {
        changeTex({
          "strength": gloss
        }, "gloss")
      });
      _this.conBox.MAT.normal.slider.bind(function(normal) {
        changeTex({
          "strength": normal
        }, "normal")
      });
      _this.conBox.MAT.transSky.slider.bind(function(v) {
        _this.getMatOnEdit().skinParams.transSky = v / 100
      });
      _this.conBox.MAT.normalSmooth.slider.bind(function(v) {
        _this.getMatOnEdit().skinParams.normalSmooth = v / 100
      });
      _this.conBox.MAT.extrasAO.slider.bind(function(v) {
        changeTex({
          "strength": v
        }, "extrasAO")
      });
      _this.conBox.MAT.emissive.slider.bind(function(v) {
        _this.getMatOnEdit().emissiveIntensity = v / 25
      });
      _this.conBox.MAT.outline.slider.bind(function(v) {
        _this.getMatOnEdit().outlineWidth = v / 200
      });
      _this.conBox.LIGHT.intensity.bind(function(v) {
        webview.scene.lights.lights[_this.lightEdit].strength = v / 10;
        webview.scene.lights.changeColor(_this.lightEdit)
      });
      _this.conBox.LIGHT.distance.bind(function(d) {
        d /= 5;
        webview.scene.lights.lights[_this.lightEdit].setDistance(d);
        webview.scene.lights.changeParameter(_this.lightEdit)
      });
      _this.conBox.LIGHT.curve.bind(function(c) {
        webview.scene.lights.lights[_this.lightEdit].setCurve(c / 100);
        webview.scene.lights.changeParameter(_this.lightEdit)
      });
      _this.conBox.LIGHT.angle.bind(function(a) {
        webview.scene.lights.lights[_this.lightEdit].setAngle(a);
        webview.scene.lights.changeSpot(_this.lightEdit)
      });
      _this.conBox.LIGHT.sharpness.bind(function(s) {
        webview.scene.lights.lights[_this.lightEdit].setSharpness(s);
        webview.scene.lights.changeSpot(_this.lightEdit)
      })
    };
    var listBind = function(list, select, fuc, o) {
      var options = dom.Tag("ul", select.parentNode)[0];
      var removeExtraStr = function(str) {
        return str.replace("\x0D", "").replace("\x0A", "").replace("\x09", "")
      };
      if (list.length === 0) {
        list.push("\u7a7a")
      };
      for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = list[i];
        li.appendChild(span);
        options.appendChild(li)
      };
      if (o && o.option) {
        select.innerHTML = o.option
      } else {
        if (o && !o.option && o.initOption) {
          select.innerHTML = o.initOption
        } else {
          select.innerHTML = list[0]
        }
      };
      var over1 = false;
      var over2 = false;
      var focus = false;
      var over3 = false;
      var headDown = false;
      dom.bind(select, "mouseover", function() {
        dom.addClass(select, "focus");
        over1 = true
      });
      dom.bind(select, "mouseout", function() {
        if (!focus) {
          dom.removeClass(select, "focus")
        };
        over1 = false;
        headDown = false
      });
      dom.bind(options, "mouseover", function(event) {
        over2 = true;
        for (var i = 0; i < options.children.length; i++) {
          dom.removeClass(options.children[i], "hover")
        };
        var elem = event.target;
        over3 = false;
        while (elem.nodeName != "LI") {
          elem = elem.parentElement;
          over3 = true
        };
        dom.addClass(elem, "hover")
      });
      dom.bind(options, "mouseout", function() {
        over2 = false;
        over3 = false
      });
      dom.bind(document, "mousedown", function(event) {
        if (over1) {
          headDown = true;
          focus = true;
          dom.addClass(select, "focus")
        } else {
          if (!over2 && !over3) {
            dom.addClass(options, "hide");
            dom.removeClass(select, "focus");
            focus = false
          }
        }
      });
      dom.bind(document, "mouseup", function(event) {
        if (over1) {
          if (dom.hasClass(options, "hide") && headDown) {
            dom.removeClass(options, "hide");
            for (var i = 0; i < options.children.length; i++) {
              if (options.children[i].innerText === select.innerText) {
                dom.addClass(options.children[i], "hover")
              } else {
                dom.removeClass(options.children[i], "hover")
              }
            }
          } else {
            if (!dom.hasClass(options, "hide")) {
              dom.addClass(options, "hide")
            }
          }
        } else {
          if (over2 || over3) {
            var elem = event.target;
            while (elem.nodeName != "LI") {
              elem = elem.parentElement
            };
            if (!fuc || elem.innerText == "\u7a7a" || (o && o.noCallback)) {
              select.innerText = removeExtraStr(elem.innerText)
            };
            if (elem.innerText !== "\u7a7a") {
              if (fuc) {
                fuc(removeExtraStr(elem.innerText), getIndex(select), function() {
                  select.innerText = removeExtraStr(elem.innerText)
                })
              }
            };
            dom.removeClass(elem, "hover");
            dom.addClass(options, "hide");
            dom.removeClass(select, "focus");
            focus = false
          } else {
            if (!over2 && !over3) {
              dom.addClass(options, "hide");
              dom.removeClass(select, "focus");
              focus = false
            }
          }
        }
      });
      this.selectFromOutSide = function(name) {
        select.innerText = name;
        if (fuc) {
          fuc(name, getIndex(select), function() {
            select.innerText = name
          })
        }
      }
    };
    var listAdd = function(select, name) {
      var options = dom.Tag("ul", select.parentNode)[0];
      var li = document.createElement("li");
      var img = document.createElement("div");
      dom.addClass(img, "ListImg");
      img.style["background-image"] = "url(" + webview.gl.textureCache.cache[name].smallImg.src + ")";
      li.appendChild(img);
      var span = document.createElement("span");
      span.innerHTML = name;
      li.appendChild(span);
      options.appendChild(li)
    };
    this.matListInit = function(matList) {
      matList = quickSort(matList);
      var select = _this.selectMatElem;
      _this.highlightMat = function() {
        var mat = _this.getMatOnEdit();
        _this.tranFuncs.HL = [];
        _this.HLmat && (_this.HLmat.highlight = false);
        _this.HLalpha = 0.3;
        _this.HLoffset = 0.05;
        _this.HLmat = mat;
        mat.highlight = true;
        setTimeout(fade, 300);

        function fade() {
          start("HL", ep_lerp.property(_this, "HLoffset", 0, function() {
            _this.HLalpha = _this.HLoffset * 4
          }), 2000, function() {
            mat.highlight = false;
            _this.tranFuncs.HL = []
          }, 0, easeFuc["easeInOutQuad"])
        }
        var update = function() {
          if (_this.HLmat && _this.HLmat.highlight === true) {
            _this.tranUpdate(0.1, "HL");
            webview.updateView(false);
            setTimeout(update, 50)
          }
        };
        update()
      };
      _this.ValueUpdate = function(matName, type) {
        var mat = _this.getMatOnEdit();
        var maps = mat.unMergedTex;
        _this.modeObj[1]["set"]();
        _this.modeObj[3]["set"]();
        if (maps.albedo.tex.desc.width > 1 || maps.albedo.tex.desc.height > 1) {
          selectMaps[1].innerHTML = maps.albedo.value
        } else {
          selectMaps[1].innerHTML = "\u6b63\u5728\u4f7f\u7528\u989c\u8272"
        };
        if (maps.reflectivity.tex.desc.width > 1 || maps.reflectivity.tex.desc.height > 1) {
          selectMaps[2].innerHTML = maps.reflectivity.value
        } else {
          selectMaps[2].innerHTML = "\u6b63\u5728\u4f7f\u7528\u989c\u8272"
        };
        if (maps.gloss.tex && (maps.gloss.tex.desc.width > 1 || maps.gloss.tex.desc.height > 1)) {
          selectMaps[3].innerHTML = maps.gloss.value
        } else {
          selectMaps[3].innerHTML = "\u672a\u8d34\u56fe"
        };
        if (maps.normal.tex && (maps.normal.tex.desc.width > 1 || maps.normal.tex.desc.height > 1)) {
          selectMaps[4].innerHTML = maps.normal.value
        } else {
          selectMaps[4].innerHTML = "\u672a\u8d34\u56fe"
        };
        if (maps.alpha.tex && (maps.alpha.tex.desc.width > 1 || maps.alpha.tex.desc.height > 1)) {
          selectMaps[5].innerHTML = maps.alpha.value
        } else {
          selectMaps[5].innerHTML = "\u672a\u8d34\u56fe"
        };
        if (maps.extrasSkin.tex && (maps.extrasSkin.tex.desc.width > 1 && maps.extrasSkin.tex.desc.height > 1)) {
          selectMaps[6].innerHTML = maps.extrasSkin.value
        } else {
          selectMaps[6].innerHTML = "\u672a\u8d34\u56fe"
        };
        if (maps.extrasAO.tex && (maps.extrasAO.tex.desc.width > 1 && maps.extrasAO.tex.desc.height > 1)) {
          selectMaps[7].innerHTML = maps.extrasAO.value
        } else {
          selectMaps[7].innerHTML = "\u672a\u8d34\u56fe"
        };
        if (maps.extrasEmi.tex && (maps.extrasEmi.tex.desc.width > 1 && maps.extrasEmi.tex.desc.height > 1)) {
          selectMaps[8].innerHTML = maps.extrasEmi.value
        } else {
          selectMaps[8].innerHTML = "\u672a\u8d34\u56fe"
        };
        for (var c in _this.conBox.MAT) {
          if (_this.conBox.MAT[c].slider) {
            if (mat.strength[c] != void(0)) {
              _this.conBox.MAT[c].slider.setValueFromOutside(mat.strength[c])
            } else {
              if (mat.skinParams[c] != void(0)) {
                _this.conBox.MAT[c].slider.setValueFromOutside(mat.skinParams[c] * 100)
              } else {
                if (c == "outline") {
                  _this.conBox.MAT[c].slider.setValueFromOutside(mat.outlineWidth * 200)
                } else {
                  if (c == "emissive") {
                    _this.conBox.MAT[c].slider.setValueFromOutside(mat.emissiveIntensity * 25)
                  }
                }
              }
            }
          };
          if (!_this.conBox.MAT[c].CPicker) {
            continue
          };
          if (mat.unMergedTex[c]) {
            if (mat.unMergedTex[c].value instanceof Object) {
              _this.conBox.MAT[c].CPicker.setRgb(mat.unMergedTex[c].value, true)
            } else {
              _this.conBox.MAT[c].CPicker.cText.value = ""
            }
          } else {
            switch (c) {
              case "transColor":
                ;
              case "fresnelColor":
                var v = _this.getMatOnEdit().skinParams[c];
                break;
              case "outline":
                var v = _this.getMatOnEdit().outlineColor;
                break;
              default:
                console.log("valueupdate\u9519\u8bef??")
            };
            _this.conBox.MAT[c].CPicker.setRgb([v[0] * 255, v[1] * 255, v[2] * 255, 1])
          }
        };
        var btn = dom.cla("onOffState");
        for (var i = 0; i < btn.length; i++) {
          if (_this.OnOffObject.getState[i]()) {
            if (!dom.hasClass(btn[i], "on")) {
              dom.addClass(btn[i], "on");
              dom.removeClass(btn[i].parentNode.nextElementSibling, "unable")
            }
          } else {
            if (dom.hasClass(btn[i], "on")) {
              dom.removeClass(btn[i], "on");
              dom.addClass(btn[i].parentNode.nextElementSibling, "unable")
            }
          }
        };
        var boxes = dom.cla("checkbox");
        for (var i = 0; i < boxes.length; i++) {
          if (_this.checkObject.getState[i]()) {
            if (!dom.hasClass(boxes[i], "checked")) {
              dom.addClass(boxes[i], "checked")
            }
          } else {
            if (dom.hasClass(boxes[i], "checked")) {
              dom.removeClass(boxes[i], "checked")
            }
          }
        }
      };
      _this.matList = new listBind(matList, select, function() {
        _this.ValueUpdate();
        _this.highlightMat();
        for (var i in _this.previewer) {
          PreviewUpdate(null, i)
        }
      }, {
        noCallback: true
      })
    };
    var ResizeImg = function(w, h, img) {
      if (img.width <= 128 && img.height <= 128) {
        return img
      };
      var c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      var ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      src = canvasToImg(c, false, "png");
      var newImg = new Image();
      var blob = dataURLtoBlob(src);
      newImg.src = URL.createObjectURL(blob);
      newImg.onload = function() {
        this.loaded = 1
      };
      return newImg
    };
    var addMapImg = function(mapList, selectMap) {
      var lis = dom.Tag("ul", selectMap.parentNode)[0].children;
      for (var i = 0; i < lis.length; i++) {
        var img = document.createElement("div");
        dom.addClass(img, "ListImg");
        if (mapList[i] != "\u672a\u8d34\u56fe") {
          var t = webview.gl.textureCache.cache[mapList[i]];
          if (!t.smallImg) {
            t.smallImg = ResizeImg(128, 128, t.img)
          };
          img.style["background-image"] = "url(" + t.smallImg.src + ")"
        };
        lis[i].insertBefore(img, lis[i].firstChild)
      }
    };
    var setMapsSelect = function() {
      var mapList = ["\u672a\u8d34\u56fe"];
      var cache = webview.gl.textureCache.cache;
      for (var i in cache) {
        if (i.indexOf("|") === -1 && (cache[i].desc.width > 1 || cache[i].desc.height > 1)) {
          mapList.push(i)
        }
      };
      var clickFuc = function(name, type) {
        changeTex({
          "name": name
        }, type)
      };
      for (var m = 1; m < selectMaps.length; m++) {
        new listBind(mapList, selectMaps[m], clickFuc, {
          noCallback: true
        });
        addMapImg(mapList, selectMaps[m])
      }
    };
    var deleteListItem = function(name) {
      var lists = dom.cla("matOptions", _this.Panels[2]);
      for (var i = 1; i < lists.length; i++) {
        var lis = lists[i].children;
        for (var j = 0; j < lis.length; j++) {
          if (lis[j].children[1].innerHTML === name) {
            lists[i].removeChild(lis[j])
          }
        }
      }
    };
    var deleteManageItem = function(item) {
      var li = item.parentElement;
      var ul = li.parentElement;
      ul.removeChild(li)
    };
    var showMsgBox = function(title, msg, o) {
      var overlay = dom.cla("msgConfirm")[0];
      var box = dom.cla("msgConfirm-body", overlay)[0];
      var inner = dom.cla("Conf-inner", overlay)[0];
      var head = dom.cla("manage-head", overlay)[0];
      var btns = [];
      var funcs = [];
      btns[0] = dom.cla("confirm", overlay)[0];
      btns[1] = dom.cla("cancel", overlay)[0];
      inner.innerHTML = msg;
      head.innerHTML = title;
      dom.removeClass(overlay, "hide");
      var over = false;
      var hideFun;
      var cheakClick = function(e) {
        if (e.target == overlay) {
          hideFun()
        }
      };
      dom.bind(document, "click", cheakClick);
      if (o == void(0) || o.btns == void(0)) {
        o = {
          btns: ["\u786e\u5b9a"]
        }
      };
      for (var i = 0; i < 2; i++) {
        if (o.btns[i]) {
          btns[i].innerText = o.btns[i];
          dom.removeClass(btns[i], "hide");
          funcs[i] = function(i) {
            return function() {
              if (o.funcs && o.funcs[i]) {
                o.funcs[i]()
              };
              hideFun()
            }
          }(i);
          dom.bind(btns[i], "click", funcs[i])
        } else {
          dom.addClass(btns[i], "hide")
        }
      };
      hideFun = function() {
        dom.addClass(overlay, "hide");
        for (var j = 0; j < 2; j++) {
          if (funcs[j]) {
            dom.unbind(btns[j], "click", funcs[j])
          }
        };
        dom.unbind(document, "click", cheakClick)
      }
    };
    var deleteMap = function() {
      var delBtn = this;
      var Using = false;
      var Chinese = {
        "albedo": "\u57fa\u7840\u989c\u8272",
        "alpha": "\u900f\u660e\u5ea6",
        "reflectivity": "\u53cd\u5c04",
        "gloss": "\u5149\u6ed1\u5ea6",
        "normal": "\u6cd5\u7ebf",
        "extras": "\u5176\u4ed6",
        "extrasA": "\u5176\u4ed6(alpha)"
      };
      var mats = webview.scene.materials;
      var using = [];
      var isExtrasUsing = false;
      for (var m in webview.scene.materials) {
        for (var i in mats[m].unMergedTex) {
          if (mats[m].unMergedTex[i].value === getIndex(this)) {
            using.push({
              "m": m,
              "i": i
            })
          }
        }
      };
      if (using.length) {
        var str = "<p>\u6b63\u5728\u4f7f\u7528\u8fd9\u5f20\u56fe\u7247:  <b>" + getIndex(this) + "</b></p>\x0A <ul>";
        for (var u = 0; u < using.length; u++) {
          str += ("<li><p><b>" + using[u].m + "</b></p> <p class='indent'>\x09" + Chinese[using[u].i] + "</p></li>");
          if (using[u].i === "extras" || using[u].i === "extrasA") {
            isExtrasUsing = true
          }
        };
        str += "</ul>";
        if (isExtrasUsing) {
          var title = "\u65e0\u6cd5\u5220\u9664\u56fe\u7247";
          str += ("<p><b>" + "\u8fd9\u5f20\u56fe\u7247\u6b63\u5728\u88abextraTex\u6240\u4f7f\u7528\uff0c\u76ee\u524d\u4e0d\u53ef\u5220\u9664\u3002</b></p>")
        } else {
          var title = "\u662f\u5426\u5220\u9664\u56fe\u7247?"
        };
        var confirmFunc = function() {
          if (!isExtrasUsing) {
            dom.unbind(delBtn, "mousedown", deleteMap);
            dom.unbind(delBtn.parentElement.children[0], "mousedown", selectMap);
            for (var u = 0; u < using.length; u++) {
              var i = using[u].i;
              var m = using[u].m;
              var cache = webview.gl.textureCache.cache;
              cache[getIndex(delBtn)].destroy();
              delete cache[getIndex(delBtn)];
              changeTex({
                "name": "\u672a\u8d34\u56fe"
              }, i, mats[m]);
              if (mats[m] == _this.getMatOnEdit()) {
                selectMaps[selectMaps[i]].innerHTML = "\u672a\u8d34\u56fe"
              }
            };
            deleteListItem(getIndex(delBtn));
            deleteManageItem(delBtn);
            cancelFunc()
          } else {
            cancelFunc()
          }
        };
        var cancelFunc = function() {};
        showMsgBox(title, str, {
          btns: ["\u786e\u5b9a", "\u53d6\u6d88"],
          funcs: [confirmFunc]
        })
      } else {
        dom.unbind(delBtn, "mousedown", deleteMap);
        dom.unbind(delBtn.parentElement.children[0], "mousedown", selectMap);
        deleteListItem(getIndex(delBtn));
        deleteManageItem(delBtn);
        var cache = webview.gl.textureCache.cache;
        cache[getIndex(delBtn)].destroy();
        delete cache[getIndex(delBtn)]
      }
    };
    var selectMap = function() {
      var imgName = this.innerHTML;
      if (imgName === "") {
        imgName = this.parentElement.nextElementSibling.innerHTML
      };
      var selected = selectMaps[manageMapBox.mapID];
      selected.innerHTML = imgName;
      changeTex({
        "name": imgName
      }, getIndex(selected));
      dom.addClass(manageMapBox, "hide")
    };
    var manageMapAdd = function(options, name) {
      var li = document.createElement("li");
      li.style.cursor = "default";
      var div = document.createElement("div");
      dom.addClass(div, "image-box");
      var innerDiv = document.createElement("div");
      dom.addClass(innerDiv, "box");
      div.appendChild(innerDiv);
      innerDiv.style["background-image"] = "url(" + webview.gl.textureCache.cache[name].smallImg.src + ")";
      var span = document.createElement("span");
      dom.addClass(span, "leftItem");
      var deleteSpan = document.createElement("span");
      setIndex(deleteSpan, name);
      deleteSpan.innerHTML = "\u5220\u9664";
      dom.addClass(deleteSpan, "deleteMap");
      dom.bind(deleteSpan, "mousedown", deleteMap);
      dom.bind(innerDiv, "click", selectMap);
      dom.bind(span, "click", selectMap);
      span.innerHTML = name;
      li.appendChild(div);
      li.appendChild(span);
      li.appendChild(deleteSpan);
      options.appendChild(li)
    };
    var manageMaps = function() {
      var manages = dom.cla("manage", _this.Panels[2]);
      var closeBtn = dom.cla("action-close", manageMapBox)[0];
      var cheakClick = function(e) {
        if (e.target == manageMapBox) {
          dom.addClass(manageMapBox, "hide");
          dom.unbind(document, "click", cheakClick)
        }
      };
      dom.bind(closeBtn, "mousedown", function() {
        dom.addClass(manageMapBox, "hide")
      });
      var options = dom.Tag("ul", manageMapBox)[0];
      var list = [];
      var cache = webview.gl.textureCache.cache;
      for (var i in cache) {
        if (i.indexOf("|") === -1 && (cache[i].desc.width > 1 || cache[i].desc.height > 1)) {
          list.push(i)
        }
      };
      for (var i = 0; i < list.length; i++) {
        manageMapAdd(options, list[i])
      };
      for (var m = 0; m < manages.length; m++) {
        dom.bind(manages[m], "click", (function(m) {
          return function() {
            dom.removeClass(manageMapBox, "hide");
            dom.bind(document, "click", cheakClick);
            manageMapBox.mapID = parseInt(m) + 1
          }
        })(m))
      }
    };
    var addAMapToEveryList = function(img, name, dontShowInList) {
      var d = {
        mipmap: !0,
        aniso: webview.gl.hints.mobile ? 0 : 4,
        clamp: false,
        mirror: false
      };
      var t = new Texture(webview.gl, d);
      t.loadImage(img);
      t.smallImg = ResizeImg(128, 128, img);
      var index = 1;
      var oldName = name;
      while (webview.gl.textureCache.cache[name]) {
        var post = " " + index;
        name = oldName + post;
        index++
      };
      webview.gl.textureCache.cache[name] = t;
      t.newLoad = true;
      if (!dontShowInList) {
        for (var m = 1; m < selectMaps.length; m++) {
          listAdd(selectMaps[m], name)
        };
        manageMapAdd(dom.Tag("ul", manageMapBox)[0], name)
      };
      return name
    };

    function dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      };
      return new Blob([u8arr], {
        type: mime
      })
    }
    window.URL = window.URL || window.webkitURL;
    var sizeImg = function(img) {
      if (img.width > 2048 || img.height > 2048) {
        var a = Math.max(img.width, img.height);
        a /= 2048;
        var c = document.createElement("canvas");
        c.width = Math.min(img.width / a, 2048);
        c.height = Math.min(img.height / a, 2048);
        var cxt = c.getContext("2d");
        cxt.drawImage(img, 0, 0, c.width, c.height);
        var newSrc = canvasToImg(c, false, "png");
        window.URL.revokeObjectURL(img.src);
        var blob = dataURLtoBlob(newSrc);
        img.src = window.URL.createObjectURL(blob);
        img.Base64Src = newSrc;
        return true
      };
      return false
    };
    window.uploadMaps = function(file) {
      if (!window.FileReader) {
        alert("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u4e0a\u4f20\u56fe\u7247");
        return
      } else {
        if (file.files.length === 0) {
          return
        }
      };
      var unload = [];
      for (var i = 0; i < file.files.length; i++) {
        if (file.files[i].size / 1024 / 1024 > 10) {
          unload.push(file.files[i].name);
          continue
        };
        var reader = new FileReader();
        reader.name = file.files[i].name;
        reader.onload = function(evt) {
          var img = new Image();
          var blob = dataURLtoBlob(evt.target.result);
          img.src = window.URL.createObjectURL(blob);
          img.Base64Src = evt.target.result;
          var Reader = this;
          img.onload = function() {
            if (sizeImg(this)) {
              return
            };
            addAMapToEveryList(this, Reader.name);
            ScrollToBottom(dom.cla("manage-list")[0])
          }
        };
        reader.readAsDataURL(file.files[i])
      };
      if (unload.length) {
        var msg = "";
        for (var i = 0; i < unload.length; i++) {
          msg += "<h5>" + unload[i] + "</h5>"
        };
        msg += "</ul> <small>\u53ef\u80fd\u539f\u56e0\uff1a\u56fe\u7247\u5927\u4e8e10M</small>";
        showMsgBox("\u60a8\u6709\u56fe\u7247\u672a\u4e0a\u4f20\u6210\u529f\uff1a", msg)
      }
    };

    function ScrollToBottom(box) {
      box.scrollTop = box.scrollHeight
    }
    this.rotateFun = function(e) {
      var delta = 90;
      var target = e.target;
      var axis = getIndex(target.parentNode);
      if (dom.hasClass(target, "right")) {
        delta *= (-1)
      };
      var task = {
        delta: delta,
        axis: axis
      };
      _this.tasks.push(task);
      if (_this.tasks.length == 1) {
        executeTask()
      } else {
        if (_this.tasks.length > 3) {
          _this.tasks.splice(1, 1)
        }
      }
    };
    this.rotateValue = function(e) {
      var ax = {
        x: 0,
        y: 1,
        z: 2
      };
      var delta = e.target.value;
      var axis = getIndex(e.target.parentNode.parentNode);
      delta = webview.scene.view.modelRot[ax[axis]] - parseFloat(delta);
      if (delta != delta) {
        return
      };
      var task = {
        delta: delta,
        axis: axis
      };
      _this.tasks.push(task);
      if (_this.tasks.length == 1) {
        executeTask()
      } else {
        _this.tasks = _this.tasks.slice(_this.tasks.length - 2)
      }
    };
    this.cameraMove = function(tri) {
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
      _this.tranFuncs.camera = [];
      var update2 = function() {
        if (_this.tranFuncs.camera.length == 0) {
          _this.oldCameraUpdate = null;
          webview.updateView(true, true);
          return
        };
        _this.tranUpdate(0.12, "camera");
        webview.updateView(true, true, 3);
        _this.oldCameraUpdate = setTimeout(update2, 17)
      };
      var doneCount = 0;
      var shouldDone = 2;
      var done = function() {
        doneCount++;
        if (doneCount === shouldDone) {
          _this.tranFuncs.camera = [];
          webview.updateView(true, true)
        }
      };
      start("camera", ep_lerp.array(view.pivot, aim), 6000, done, 0, easeFuc["easeOutQuart"]);
      start("camera", ep_lerp.array(view.rotation, rot), 6000, done, 0, easeFuc["easeOutQuart"]);
      CA = [aim[0] - eye[0], aim[1] - eye[1], aim[2] - eye[2]];
      var maxRadius = 20;
      var newRadius = Math.sqrt(CA[0] * CA[0] + CA[1] * CA[1] + CA[2] * CA[2]);
      newRadius = Math.min(newRadius, maxRadius);
      if (Math.abs(newRadius - view.radius) > 0.02) {
        start("camera", ep_lerp.property(view, "radius", newRadius), 6000, done, 0, easeFuc["easeOutQuart"]);
        shouldDone = 3
      };
      if (!_this.oldCameraUpdate) {
        update2()
      }
    };

    function executeTask() {
      var task = _this.tasks[0];
      var update = function() {
        if (_this.tasks.length) {
          _this.tranUpdate(0.2, "rot");
          webview.updateView(true, true);
          _this.oldRotUpdate = setTimeout(update, 25)
        } else {
          _this.oldRotUpdate = null;
          webview.updateView(false, true)
        }
      };
      var startM = Matrix.empty();
      if (task.type && task.type === "resetRotat") {
        webview.scene.view.modelMatrix = Matrix.identity();
        for (var t = 0; t < 3; t++) {
          _this.tranCon[0].children[t].children[1].children[0].value = "0"
        };
        webview.scene.view.modelRot = [0, 0, 0];
        webview.updateView(false, true);
        _this.tasks.shift();
        if (_this.tasks.length) {
          executeTask()
        }
      } else {
        var translate = {
          r: 0
        };
        var axis = {
          x: 0,
          y: 1,
          z: 2
        };
        var f = function() {
          var r = Matrix.rotation(Matrix.empty(), translate.r, axis[task.axis]);
          Matrix.mul(webview.scene.view.modelMatrix, startM, r)
        };
        Matrix.copy(startM, webview.scene.view.modelMatrix);
        webview.scene.view.modelRot[axis[task.axis]] -= task.delta;
        webview.scene.view.modelRot[axis[task.axis]] %= 360;
        _this.tranCon[0].children[axis[task.axis]].children[1].children[0].value = webview.scene.view.modelRot[axis[task.axis]];
        start("rot", ep_lerp.property(translate, "r", task.delta, f), 4000, function() {
          _this.tasks.shift();
          _this.tranFuncs.rot.shift();
          if (_this.tasks.length) {
            executeTask()
          }
        }, 0, easeFuc["easeInOutQuad"]);
        if (!_this.oldRotUpdate) {
          update()
        }
      }
    }
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
    this.tranUpdate = function(d, type) {
      _this.tranFuncs[type].forEach(function(i) {
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
      _this.tranFuncs[type].push({
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
          c["set"](f.x * (1 - e) + d.x * e, f.y * (1 - e) + d.y * e, f.z * (1 - e) + d.z * e)
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
    this.resetRotat = function() {
      var task = {
        type: "resetRotat"
      };
      _this.tasks.push(task);
      if (_this.tasks.length == 1) {
        executeTask()
      }
    };
    this.arGroundStart = function(e) {
      _this.groundDelta = 0.1;
      if (dom.hasClass(e.target, "left")) {
        _this.groundDelta *= -1
      };
      _this.groundTranStart = true;
      setTimeout(_this.arGroundFun, 150)
    };
    var setHeight = function() {
      _this.groundHeight = parseFloat(_this.groundHeight.toFixed(1));
      _this.groundHeight = Clamp(_this.groundHeight, -100, 100);
      for (var i = 0; i < webview.scene.ground.length; i++) {
        webview.scene.ground[i].height = _this.groundHeight
      };
      webview.updateView(true);
      webview.drawScene();
      var t = _this.tranCon[1].children[0].children[1].children[0];
      t.value = _this.groundHeight + ""
    };
    this.arGroundFun = function() {
      _this.groundHeight += _this.groundDelta;
      setHeight();
      if (_this.groundTranStart) {
        setTimeout(_this.arGroundFun, 20)
      }
    };
    this.arGroundEnd = function() {
      _this.groundTranStart = false
    };
    this.arGroundValue = function(e) {
      var t = _this.tranCon[1].children[0].children[1].children[0];
      var v = parseFloat(t.value);
      if (v != v) {
        return
      };
      _this.groundHeight = v;
      setHeight()
    };
    this.resetGround = function() {
      _this.groundHeight = -10;
      setHeight()
    };
    this.resetPivotbyBound = function() {
      webview.scene.view.pivot = [0, 0, 0];
      webview.updateView(true, true)
    };
    var initTranRotValue = function() {
      var rotV = webview.scene.view.modelRot;
      var mat = webview.scene.view.modelTranMatrix;
      for (var t = 0; t < 3; t++) {
        _this.tranCon[0].children[t].children[1].children[0].value = rotV[t]
      };
      _this.groundHeight = webview.scene.view.groundHeight;
      if (_this.groundHeight == void(0)) {
        _this.groundHeight = -10
      };
      _this.tranCon[1].children[0].children[1].children[0].value = _this.groundHeight
    };

    function skyBlurFuc(index) {
      index = parseInt(index);
      index += 1;
      index = Clamp(index, 2, 7);
      var sky = webview.scene.sky;
      if (index === sky.skyBlurIndex) {
        return
      };
      sky.skyBlurIndex = index;
      skyShader.build("precision highp float; varying vec2 tc; attribute vec4 p; void main(){ gl_Position=p; tc=vec2(0.5,0.5/8.0)*p.xy+vec2(0.5," + (sky.skyBlurIndex - 0.5) + "/8.0); }", "precision highp float; varying vec2 tc; uniform sampler2D tex; uniform float b; void main(){vec4 s=texture2D(tex,tc); gl_FragColor.xyz=s.xyz*(b*s.w);}", "skyboxShder");
      bgBrightFuc()
    }

    function bgBrightFuc(bri) {
      if (bri == void(0)) {
        bri = _this.conBox.SCENE.bgBright.slider.value
      };
      if (webview.scene.sky.backgroundMode === 3) {
        bri /= _this.briRatio;
        var a = new Float32Array(36);
        for (var i = 0; i < 36; i++) {
          a[i] = _this.diffuseCoefficients[_this.controls.skyIndex].value[i]
        };
        for (var i = 0; i < 36; i++) {
          a[i] *= bri
        };
        webview.scene.sky.backgroundCoefficients = a
      } else {
        if (webview.scene.sky.backgroundMode !== 0) {
          var a = webview.scene.sky.gl;
          var c = !1;
          var k;
          a.ext.textureHalf && a.ext.textureHalfLinear && (webview.scene.sky.backgroundTexture.loadArray(null, a.RGB, a.ext.textureHalf.HALF_FLOAT_OES), k = new Framebuffer(a, {
            color0: webview.scene.sky.backgroundTexture
          }), c = k.valid);
          !c && a.ext.textureFloat && a.ext.textureFloatLinear && !a.hints.mobile && (webview.scene.sky.backgroundTexture.loadArray(null, a.RGB, a.FLOAT), k = new Framebuffer(a, {
            color0: webview.scene.sky.backgroundTexture
          }), c = k.valid);
          c || (webview.scene.sky.backgroundTexture.loadArray(), k = new Framebuffer(a, {
            color0: webview.scene.sky.backgroundTexture
          }));
          k.bind();
          skyShader.bind();
          a.uniform1f(skyShader.params.b, 7 * Math.sqrt(bri / _this.briRatio));
          webview.scene.sky.specularTexture.bind(skyShader.samplers.tex);
          var c = a.createBuffer();
          a.bindBuffer(a.ARRAY_BUFFER, c);
          c = new Float32Array([-1, -1, 0.5, 1, 3, -1, 0.5, 1, -1, 3, 0.5, 1]);
          a.bufferData(a.ARRAY_BUFFER, c, a.STATIC_DRAW);
          a.enableVertexAttribArray(skyShader.attribs.p);
          a.vertexAttribPointer(skyShader.attribs.p, 4, a.FLOAT, !1, 0, 0);
          a.drawArrays(a.TRIANGLES, 0, 3);
          a.disableVertexAttribArray(skyShader.attribs.p)
        }
      }
    }
    this.bgBrightFuc = bgBrightFuc;

    function modelBrightFuc(b) {
      if (b == void(0)) {
        b = _this.conBox.SCENE.modelBright.slider.value
      };
      b /= 20;
      webview.scene.sky.modelBright = b
    }
    this.modelBrightFuc = modelBrightFuc;

    function modelSkyRatioFuc(v) {
      webview.scene.sky.modelSkyRatio = v / 100
    }

    function grainFuc(g) {
      g /= 400;
      webview.scene.postRender.desc.grain = g
    }

    function vignetteStrengthFuc(s) {
      s /= 50;
      webview.scene.postRender.desc.vignette[3] = s
    }

    function vignetteSoftnessFuc(s) {
      s /= 100;
      webview.scene.postRender.desc.vignetteCurve = s
    }
    var changeSkyMode = function(mode, color) {
      var sky = webview.scene.sky;
      var a = webview.gl;
      sky.backgroundMode = mode;
      sky.backgroundShader = a.shaderCache.fromURLs("skyvert.glsl", 3 == mode ? "skySH.glsl" : "sky.glsl", ["#define SKYMODE " + mode]);
      if (mode === 0) {
        dom.removeClass(dom.id("bgPicker"), "hide");
        dom.addClass(dom.id("slider-bgBright"), "hide");
        dom.addClass(dom.id("slider-skyBlur"), "hide");
        _this.modeObj[0].ul[0].style["border-radius"] = "5px 5px 0px 0px";
        if (color !== void(0)) {
          sky.backgroundColor = new Float32Array(color)
        };
        if (!_this.conBox.hasColorOffset) {
          _this.conBox.SCENE.bgColor.CPicker.setOffset();
          _this.conBox.hasColorOffset = true;
          var b = webview.scene.sky.backgroundColor;
          _this.conBox.SCENE.bgColor.CPicker.setRgb([b[0] * 255, b[1] * 255, b[2] * 255])
        };
        webview.updateView(false, false)
      } else {
        dom.addClass(dom.id("bgPicker"), "hide");
        dom.removeClass(dom.id("slider-bgBright"), "hide");
        _this.modeObj[0].ul[0].style["border-radius"] = "4px";
        if (mode === 3) {
          sky.backgroundCoefficients = new Float32Array();
          dom.addClass(dom.id("slider-skyBlur"), "hide")
        } else {
          dom.removeClass(dom.id("slider-skyBlur"), "hide");
          if (!sky.backgroundTexture) {
            sky.backgroundTexture = new Texture(a, {
              width: 256,
              height: 256,
              clamp: !0
            });
            k = new Shader(a);
            k.build("precision highp float; varying vec2 tc; attribute vec4 p; void main(){ gl_Position=p; tc=vec2(0.5,0.5/8.0)*p.xy+vec2(0.5," + (sky.skyBlurIndex - 0.5) + "/8.0); }", "precision highp float; varying vec2 tc; uniform sampler2D tex; uniform float b; void main(){vec4 s=texture2D(tex,tc); gl_FragColor.xyz=s.xyz*(b*s.w);}", "skyboxShder");
            skyShader = k
          }
        }
      };
      _this.bgBrightFuc();
      _this.modelBrightFuc()
    };
    var changeSky = function(index, callback) {
      var changeTex = function(data) {
        var sky = webview.scene.sky;
        sky.specularTexture = new Texture(webview.gl, {
          width: 256,
          height: 2048,
          clamp: !0
        });
        for (var d = data.length, e = d / 4, f = new Uint8Array(d), g = 0, h = 0; g < d; ++h) {
          f[g++] = data[h + 2 * e], f[g++] = data[h + e], f[g++] = data[h], f[g++] = data[h + 3 * e]
        };
        sky.specularTexture.loadArray(f)
      };
      var b = webview.ui.signalLoadProgress.bind(webview.ui);
      var a = function(a) {
        b(1, 1);
        webview.ui.loadingProgress = false;
        webview.ui.progressBar && (webview.ui.progressBar.parentElement.style.display = "none");
        var skyData = new ArchiveSky(a);
        aa(skyData)
      };
      var aa = function(data) {
        changeTex(data);
        webview.scene.sky.diffuseCoefficients = _this.diffuseCoefficients[index].value;
        callback && callback();
        _this.controls.skyIndex = index;
        _this.bgBrightFuc();
        _this.modelBrightFuc();
        webview.updateView(true)
      };
      var c = function() {
        console.log("cannot load sky");
        showMsgBox("\u5929\u7a7a\u76d2\u672a\u80fd\u52a0\u8f7d", "\u53ef\u80fd\u539f\u56e0\uff1a\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73")
      };
      if (index != "0") {
        webview.ui.loadingProgress = true;
        webview.ui.progressBar && (webview.ui.progressBar.style.width = "0px", webview.ui.progressBar.parentElement.style.display = "");
        Network.fetchBinary("sky/sky" + index + ".dat", a, c, b, {
          width: 7
        })
      } else {
        var d = _this.controls.file.extract("sky.dat") || _this.controls.file.extract("sky.png");
        aa(d.data)
      }
    };
    var setBgModeBtn = function() {
      var skyModeUl = dom.cla("MenuOptions", _this.Panels[0])[0];
      var mode = webview.scene.sky.backgroundMode;
      var li = 1;
      switch (mode) {
        case 0:
          li = 0;
          break;
        case 1:
          ;
        case 2:
          li = 1;
          break;
        case 3:
          li = 2;
          break
      };
      dom.addClass(skyModeUl.children[li], "chosen");
      if (mode === 0) {
        var b = webview.scene.sky.backgroundColor;
        _this.conBox.SCENE.bgColor.CPicker.setRgb([b[0] * 255, b[1] * 255, b[2] * 255])
      } else {
        dom.addClass(dom.id("bgPicker"), "hide")
      };
      for (var u = 0; u < skyModeUl.children.length; u++) {
        dom.bind(skyModeUl.children[u], "mousedown", function() {
          var mode = parseInt(getIndex(this));
          if (webview.scene.sky.backgroundMode === mode) {
            return
          };
          changeSkyMode(mode);
          for (var i = 0; i < skyModeUl.children.length; i++) {
            dom.removeClass(skyModeUl.children[i], "chosen")
          };
          dom.addClass(this, "chosen")
        })
      }
    };
    var setSkyList = function() {
      var skyList = [];
      for (var i in _this.diffuseCoefficients) {
        skyList.push(i + " " + _this.diffuseCoefficients[i].name)
      };
      var select = dom.cla("selection", _this.Panels[0])[0];
      var fuc = function(name, a, callback) {
        changeSky(name.split(" ")[0], callback)
      };
      new listBind(skyList, select, fuc)
    };
    var setAllMode = function() {
      var f = function(elem) {
        for (var i = 0; i < elem.parentElement.children.length; i++) {
          dom.removeClass(elem.parentElement.children[i], "chosen")
        };
        dom.addClass(elem, "chosen");
        webview.updateView(false, false)
      };
      _this.modeObj = {
        0: {
          getMode: function() {
            return webview.scene.sky.backgroundMode
          },
          ul: [dom.cla("MenuOptions", dom.id("background"))[0]],
          set: function() {
            var ul = _this.modeObj[0].ul[0];
            var mode = _this.modeObj[0].getMode();
            var li = 1;
            switch (mode) {
              case 0:
                li = 0;
                break;
              case 1:
                ;
              case 2:
                li = 1;
                break;
              case 3:
                li = 2;
                break
            };
            dom.addClass(ul.children[li], "chosen");
            if (mode === 0) {
              var b = webview.scene.sky.backgroundColor;
              _this.conBox.SCENE.bgColor.CPicker.setRgb([b[0] * 255, b[1] * 255, b[2] * 255])
            } else {
              dom.addClass(dom.id("bgPicker"), "hide")
            };
            if (mode === 3) {
              dom.addClass(dom.id("slider-skyBlur"), "hide")
            }
          },
          bindFuc: function() {
            var mode = parseInt(getIndex(this));
            if (webview.scene.sky.backgroundMode === mode) {
              return
            };
            changeSkyMode(mode);
            f(this)
          }
        },
        1: {
          getMode: function(mat) {
            return mat.blendType
          },
          ul: [dom.cla("MenuOptions", dom.id("transparent"))[0]],
          set: function() {
            var ul = _this.modeObj[1].ul;
            var mode = _this.getMatOnEdit().blendType;
            var btn0 = ul[0].children[0];
            var btn1 = ul[0].children[1];
            if (mode === "add") {
              dom.addClass(btn1, "chosen");
              dom.removeClass(btn0, "chosen")
            } else {
              dom.addClass(btn0, "chosen");
              dom.removeClass(btn1, "chosen")
            }
          },
          bindFuc: function() {
            _this.getMatOnEdit().blend = blend[getIndex(this)];
            _this.getMatOnEdit().blendType = getIndex(this);
            f(this)
          }
        },
        2: {
          getMode: function() {},
          ul: [dom.cla("MenuOptions", dom.id("maps"))[0], dom.cla("MenuOptions", dom.id("maps"))[1]],
          set: function() {},
          bindFuc: function() {
            var index = 0;
            var grandP = this.parentElement.parentElement;
            if (dom.hasClass(this, "color")) {
              index = 1
            };
            var c1 = dom.cla("panel", grandP)[index];
            var c2 = dom.cla("panel", grandP)[(index + 1) % 2];
            dom.removeClass(c1, "hide");
            dom.addClass(c2, "hide");
            f(this);
            if (index) {
              _this.conBox.MAT[getIndex(grandP)].CPicker.setOffset();
              if (_this.getMatOnEdit().unMergedTex[getIndex(grandP)].value instanceof Object) {
                _this.conBox.MAT[getIndex(grandP)].CPicker.setRgb(_this.getMatOnEdit().unMergedTex[getIndex(grandP)].value)
              }
            }
          }
        },
        3: {
          getMode: function() {
            return _this.getMatOnEdit().unlitDiffuse
          },
          ul: [dom.cla("MenuOptions", dom.id("render"))[0]],
          set: function() {
            var index = _this.getMatOnEdit().unlitDiffuse ? 1 : 0;
            var ul = _this.modeObj[3].ul;
            dom.addClass(ul[0].children[index], "chosen");
            dom.removeClass(ul[0].children[(index + 1) % 2], "chosen");
            if (index) {
              dom.addClass(dom.id("unlitUnable"), "hide")
            } else {
              dom.removeClass(dom.id("unlitUnable"), "hide")
            }
          },
          bindFuc: function() {
            _this.getMatOnEdit().unlitDiffuse = (getIndex(this) == "1");
            f(this);
            if (_this.getMatOnEdit().unlitDiffuse) {
              dom.addClass(dom.id("unlitUnable"), "hide");
              dom.addClass(dom.id("presetMat"), "hide")
            } else {
              dom.removeClass(dom.id("unlitUnable"), "hide");
              dom.removeClass(dom.id("presetMat"), "hide")
            }
          }
        },
        4: {
          getMode: function() {},
          ul: [dom.cla("options", dom.id("light"))[0]],
          set: function() {},
          bindFuc: function(event) {
            var selected = dom.hasClass(this, "chosen");
            var lightPropArea = dom.id("lightOption");
            if (event.target.nodeName == "I" || dom.hasClass(event.target, "toggle-enable")) {
              var index = getIndex(this);
              var light = webview.scene.lights.lights[index];
              var eye = event.target.nodeName == "I" ? event.target : event.target.children[0];
              if (dom.hasClass(eye, "closed")) {
                light.on = true;
                light.setSpriteColor(light.color);
                light.targetCon.color[0] = 0.5, light.targetCon.color[1] = 0.5;
                light.targetCon.color[2] = 0.5;
                dom.removeClass(eye, "closed")
              } else {
                light.on = false;
                light.setSpriteColor([0, 0, 0]);
                light.targetCon.color[0] = 0, light.targetCon.color[1] = 0;
                light.targetCon.color[2] = 0;
                dom.addClass(eye, "closed")
              };
              webview.scene.lights.tidyOrder();
              webview.updateView(false, false)
            } else {
              if (selected) {
                dom.addClass(lightPropArea, "hide");
                dom.removeClass(this, "chosen");
                var light = webview.scene.lights.lights[_this.lightEdit];
                light.tranCon.visible = false;
                _this.lightEdit = null;
                light.tranCon.selectAxis = null;
                webview.updateView(false, false)
              } else {
                f(this);
                var index = getIndex(this);
                if (_this.lightEdit != void(0)) {
                  var light = webview.scene.lights.lights[_this.lightEdit];
                  light.tranCon.visible = false
                };
                _this.lightEdit = parseInt(index);
                var light = webview.scene.lights.lights[_this.lightEdit];
                light.tranCon.visible = true;
                light.targetCon.visible = true;
                dom.removeClass(lightPropArea, "hide");
                PreviewUpdate(null, "light", "color");
                _this.modeObj[5]["set"](index)
              }
            }
          }
        },
        5: {
          getMode: function() {},
          ul: [dom.cla("cellOptions", dom.id("lightOption"))[0]],
          set: function(index) {
            if (index == void(0)) {
              return
            };
            var ul = _this.modeObj[5].ul[0];
            var type = webview.scene.lights.lights[index].type;
            f(ul.children[type]);
            updateLightPorp(type)
          },
          bindFuc: function() {
            f(this);
            var type = getIndex(this);
            updateLightPorp(type)
          }
        },
        6: {
          getMode: function() {},
          ul: [dom.cla("cellOptions", dom.id("lightOption"))[1]],
          set: function() {
            if (_this.lightEdit == void(0)) {
              return
            };
            var light = webview.scene.lights.lights[_this.lightEdit];
            var ul = _this.modeObj[6].ul[0];
            var matrixWeight = light.matrixWeight;
            f(ul.children[matrixWeight])
          },
          bindFuc: function() {
            f(this);
            var weight = parseInt(getIndex(this));
            webview.scene.lights.lights[_this.lightEdit].matrixWeight = weight;
            webview.scene.lights.changeMatrixWeight(_this.lightEdit);
            webview.updateView(true, false, 1)
          }
        }
      };
      for (var i in _this.modeObj) {
        _this.modeObj[i]["set"]();
        for (var u = 0; u < _this.modeObj[i].ul.length; u++) {
          var lis = _this.modeObj[i].ul[u].children;
          for (var m = 0; m < lis.length; m++) {
            dom.bind(lis[m], "click", _this.modeObj[i].bindFuc)
          }
        }
      }
    };
    var updateLightPorp = function(typeIndex) {
      typeIndex = parseInt(typeIndex);
      var light = webview.scene.lights.lights[_this.lightEdit];
      if (typeIndex != light.type) {
        if (typeIndex == 0) {
          light.spot = [-1, 1, 0];
          light.position = light.direction.slice();
          light.position.push(0)
        } else {
          light.position = light.realPosition.slice();
          light.position.push(1);
          light.setDistance(light.distance);
          if (typeIndex == 1) {
            light.spot = [-1, 1, 0]
          } else {
            light.setAngle(light.angle);
            light.setSharpness(light.sharpness)
          }
        };
        light.type = typeIndex;
        var textures = ["sun", "bulb", "spot"];
        var type = ["\u5e73\u884c\u5149", "\u70b9\u5149\u6e90", "\u805a\u5149\u706f"];
        light.sprite.changeTexture("images/" + textures[typeIndex] + ".png");
        dom.Tag("span", _this.modeObj[4].ul[0].children[_this.lightEdit])[0].innerHTML = _this.lightEdit + "\uff1a" + type[typeIndex]
      };
      if (_this.checkObject.getState[0]()) {
        dom.addClass(dom.cla("checkbox")[0], "checked")
      } else {
        dom.removeClass(dom.cla("checkbox")[0], "checked")
      };
      var groups = dom.cla("group", dom.id("lightProp"));
      for (var i = 0; i < groups.length; i++) {
        if (getIndex(groups[i]) === "omni") {
          var groupOmni = groups[i]
        };
        if (getIndex(groups[i]) === "spot") {
          var groupSpot = groups[i]
        }
      };
      if (typeIndex == 0) {
        dom.addClass(groupOmni, "hide");
        dom.addClass(groupSpot, "hide")
      } else {
        if (typeIndex == 1) {
          dom.removeClass(groupOmni, "hide");
          dom.addClass(groupSpot, "hide")
        } else {
          dom.removeClass(groupOmni, "hide");
          dom.removeClass(groupSpot, "hide")
        }
      };
      _this.modeObj[6]["set"]();
      webview.scene.lights.reBuildPorp();
      _this.conBox.LIGHT.intensity.setValueFromOutside(light.strength * 10);
      _this.conBox.LIGHT.distance.setValueFromOutside(light.distance * 5);
      _this.conBox.LIGHT.curve.setValueFromOutside(light.getCurve() * 100);
      _this.conBox.LIGHT.sharpness.setValueFromOutside(light.sharpness);
      _this.conBox.LIGHT.angle.setValueFromOutside(light.angle)
    };
    var setMatPreset = function() {
      var lis = dom.cla("matPreset", _this.Panels[2])[0].children;
      for (var i = 0; i < lis.length; i++) {
        lis[i].children[0].style["background-image"] = "url(images/" + _this.presetMat[lis[i].children[1].innerText].TexName + ".png)";
        dom.bind(lis[i], "mousedown", function(i) {
          return function() {
            var mat = _this.getMatOnEdit();
            var matProperty = _this.presetMat[lis[i].children[1].innerText];
            for (var m in matProperty) {
              if (m === "TexName") {
                continue
              };
              if (matProperty[m].map) {
                if (matProperty[m].map === "\u672a\u8d34\u56fe") {
                  changeTex({
                    "name": "\u672a\u8d34\u56fe"
                  }, m);
                  selectMaps[selectMaps[m]].innerText = "\u672a\u8d34\u56fe"
                } else {
                  if (matProperty[m].TexInCache && webview.gl.textureCache.cache[matProperty[m].TexInCache]) {
                    changeTex({
                      "name": matProperty[m].TexInCache
                    }, m);
                    selectMaps[selectMaps[m]].innerText = matProperty[m].TexInCache
                  } else {
                    var img = new Image();
                    img.name = "\u9884\u8bbe\u6750\u8d28_" + lis[i].children[1].innerText + "_" + m + ".jpg";
                    img.src = "images/presetMat/" + matProperty.TexName + "_" + m + ".jpg";
                    img.onload = function() {
                      var newName = addAMapToEveryList(this, this.name, true);
                      matProperty[m].TexInCache = newName;
                      changeTex({
                        "name": newName
                      }, m);
                      selectMaps[selectMaps[m]].innerText = newName
                    }
                  }
                }
              };
              if (matProperty[m].strength) {
                _this.conBox.MAT[m].slider.setValueFromOutside(matProperty[m].strength)
              }
            }
          }
        }(i))
      }
    };
    var initExtraImgs = function() {
      var ex = _this.controls.sceneData.extraImgs;
      for (var i in ex) {
        var img = new Image();
        img.src = ex[i];
        img.name = i;
        img.onload = function() {
          addAMapToEveryList(this, this.name)
        }
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
      var zA = sPBC / s * tri[0][2];
      var zB = sPAC / s * tri[1][2];
      var zC = sPAB / s * tri[2][2];
      var z = zA + zB + zC;
      if (z > minZ || z < -0.28) {
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
    _this.ifClickMesh = function(x, y) {
      var clicked = {
        z: Infinity,
        meshR: null,
        triangle: null
      };
      var ms = webview.scene.meshRenderables;
      var near = webview.scene.view.nearPlane;
      var add = -webview.scene.view.projectionMatrix[14];
      for (var m = 0; m < ms.length; m++) {
        var tri = null;
        var tri2 = null;
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
        if (center[2] + radius < -near) {
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
          if (triangle2[0][2] < -near || triangle2[1][2] < -near || triangle2[2][2] < -near) {
            continue
          };
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
              tri = triangle;
              tri2 = triangle2
            }
          }
        };
        if (z != Infinity) {
          if (z < clicked.z) {
            clicked.z = z;
            clicked.meshR = ms[m];
            clicked.triangle = tri;
            clicked.triangle2 = tri2
          }
        }
      };
      if (clicked.meshR != null) {
        return clicked
      } else {
        return false
      }
    };
    var cutMesh = function(btn2, btn4) {
      var rect = webview.scene.rect;
      if (!rect) {
        return
      };
      var x1 = rect.x1 * 2 - 1;
      var x2 = rect.x2 * 2 - 1;
      var y1 = rect.y1 * 2 - 1;
      var y2 = rect.y2 * 2 - 1;
      var add = -webview.scene.view.projectionMatrix[14];
      var ms = webview.scene.meshes;
      var len = ms[0].meshAlphaBuffer.length;
      var realcut1 = false;
      var realcut2 = false;
      for (var m = 0; m < ms.length; m++) {
        if (len) {
          var alphaArray = ms[m].meshAlphaBuffer[len - 1].slice(0)
        } else {
          var alphaArray = []
        };
        realcut2 = false;
        var p = ms[m].posArray;
        for (var i = 0; i < p.length; i += 3) {
          var newP = [];
          Matrix.mulPoint(newP, webview.scene.view.viewProjectionMatrix2, p[i], p[i + 1], p[i + 2]);
          if (newP[0] > x1 * (newP[2] + add) && newP[0] < x2 * (newP[2] + add) && newP[1] > y1 * (newP[2] + add) && newP[1] < y2 * (newP[2] + add)) {
            alphaArray[i / 3] = 0;
            if (!realcut1) {
              realcut1 = true
            };
            if (!realcut2) {
              realcut2 = true
            }
          } else {
            if (alphaArray[i / 3] != 0) {
              alphaArray[i / 3] = 1
            }
          }
        };
        ms[m].meshAlphaBuffer.push(alphaArray);
        if (realcut2) {
          ms[m].rebuildAlpha(webview.gl)
        }
      };
      if (!realcut1) {
        for (var m = 0; m < ms.length; m++) {
          ms[m].meshAlphaBuffer.pop()
        }
      } else {
        if (len > 1) {
          for (var m = 0; m < ms.length; m++) {
            ms[m].meshAlphaBuffer.shift()
          }
        };
        dom.removeClass(btn2, "unable");
        dom.removeClass(btn4, "unable");
        btn4.innerText = "\u4e0a\u4e00\u6b65"
      }
    };
    var cancelOrReCut = function(rebackbtn) {
      var ms = webview.scene.meshes;
      var len = ms[0].meshAlphaBuffer.length;
      var array;
      for (var m = 0; m < ms.length; m++) {
        if (len === 1) {
          array = [];
          for (var v = 0; v < ms[m].vertexCount; v++) {
            array.push(1)
          }
        } else {
          array = ms[m].meshAlphaBuffer.shift()
        };
        ms[m].meshAlphaBuffer.push(array);
        ms[m].rebuildAlpha(webview.gl)
      }
    };
    var reBackCut = function() {
      var ms = webview.scene.meshes;
      for (var m = 0; m < ms.length; m++) {
        ms[m].meshAlphaBuffer = [];
        var array = [];
        for (var v = 0; v < ms[m].vertexCount; v++) {
          array.push(1)
        };
        ms[m].meshAlphaBuffer.push(array);
        ms[m].rebuildAlpha(webview.gl)
      }
    };
    var setCutMesh = function() {
      var btn1 = dom.id("cutMesh").children[0];
      var btn2 = dom.id("cutMesh").children[1].children[0];
      var btn3 = dom.id("cutMesh").children[1].children[1];
      var btn4 = dom.id("cutMesh").children[1].children[2];
      dom.bind(btn1, "mousedown", function() {
        if (btn1.innerText === "\u5f00\u59cb\u88c1\u526a") {
          _this.drawRect = true;
          jmydUI.style.cursor = "crosshair";
          btn1.innerText = "\u786e\u5b9a\u88c1\u526a";
          dom.removeClass(btn3, "unable");
          dom.addClass(dom.id("modelCut"), "highlight")
        } else {
          _this.drawRect = false;
          jmydUI.style.cursor = "";
          cutMesh(btn2, btn4);
          webview.updateView(true);
          btn1.innerText = "\u5f00\u59cb\u88c1\u526a";
          dom.addClass(btn3, "unable");
          dom.removeClass(dom.id("modelCut"), "highlight");
          webview.scene.rect = null
        }
      });
      dom.bind(btn4, "mousedown", function() {
        cancelOrReCut(btn2);
        webview.updateView(true);
        if (btn4.innerText === "\u4e0a\u4e00\u6b65") {
          btn4.innerText = "\u4e0b\u4e00\u6b65"
        } else {
          btn4.innerText = "\u4e0a\u4e00\u6b65"
        }
      });
      dom.bind(btn2, "mousedown", function() {
        reBackCut();
        webview.updateView(true);
        dom.addClass(btn2, "unable");
        dom.addClass(btn4, "unable")
      });
      dom.bind(btn3, "mousedown", function() {
        _this.drawRect = false;
        dom.id("jmydUI").style.cursor = "";
        dom.removeClass(dom.id("modelCut"), "highlight");
        dom.addClass(btn3, "unable");
        btn1.innerText = "\u5f00\u59cb\u88c1\u526a";
        webview.updateView(true);
        webview.scene.rect = null
      })
    };
    var _fixType = function(type) {
      type = type.toLowerCase().replace(/jpg/i, "jpeg");
      var r = type.match(/png|jpeg|bmp|gif/)[0];
      return "image/" + r
    };
    var saveFile = function(data, filename) {
      var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      save_link.href = data;
      save_link.download = filename;
      var event = document.createEvent("MouseEvents");
      event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event)
    };
    var canvasToImg = function(canvas, download, type) {
      type = type || "image/jpeg";
      var imgData = canvas.toDataURL(type);
      if (download) {
        imgData = imgData.replace(_fixType(type), "image/octet-stream");
        var filename = "4dage_" + (new Date()).getTime() + ((type == "png") ? ".png" : ".jpg");
        saveFile(imgData, filename)
      };
      return imgData
    };
    var snapFlash = function() {
      var flash = dom.cla("snapshotFlash", jmydUI)[0];
      dom.addClass(dom.cla("snapshot", jmydUI)[0], "unable");
      dom.addClass(flash, "active");
      setTimeout(snapshot, 10)
    };
    var snapshot = function() {
      var auto = _this.ifThumbAutoBuild;
      if (!auto) {
        _this.snapView = {};
        _this.snapView.rotation = webview.scene.view.rotation.slice(0);
        _this.snapView.radius = webview.scene.view.radius;
        _this.snapView.pivot = webview.scene.view.pivot.slice(0)
      };
      gui.snapshotHiding = true;
      var flash = dom.cla("snapshotFlash", jmydUI)[0];
      var thumbCanvas = dom.cla("thumbCanvas", jmydUI)[0];
      var thumbImg = dom.cla("thumbImg", jmydUI)[0];
      if (!thumbCanvas) {
        thumbCanvas = document.createElement("canvas");
        dom.addClass(thumbCanvas, "thumbCanvas");
        jmydUI.appendChild(thumbCanvas);
        _this.thumbctx = thumbCanvas.getContext("2d");
        var thumbImg = document.createElement("div");
        dom.addClass(thumbImg, "thumbImg");
        jmydUI.appendChild(thumbImg);
        var img = document.createElement("img");
        thumbImg.appendChild(img)
      };
      webview.canvas.width = 960;
      webview.canvas.height = 600;
      webview.allocBacking();
      webview.drawScene();
      for (var i = 0; i < 15; i++) {
        webview.drawScene2()
      };
      setTimeout(function() {
        webview.allocBacking();
        webview.drawScene();
        var w = 960,
          h = 600;
        var data = new Uint8Array(w * h * 4);
        webview.gl.readPixels(0, 0, w, h, webview.gl.RGBA, webview.gl.UNSIGNED_BYTE, data);
        webview.resize();
        var data2 = new Uint8Array(w * h * 4);
        var floor = 1;
        for (var i = 0; i < data.length; i++) {
          data2[i] = data[(h - floor) * w * 4 + i % (w * 4)];
          if (i >= floor * w * 4) {
            floor++
          }
        };
        data = data2;
        thumbCanvas.width = w;
        thumbCanvas.height = h;
        var a = _this.thumbctx.createImageData(w, h);
        for (var i = 0; i < a.data.length; i++) {
          a.data[i] = data[i]
        };
        _this.thumbctx.putImageData(a, 0, 0);
        var imgsrc = canvasToImg(thumbCanvas);
        _this.thumbImgSrc = imgsrc;
        var thumbImg2 = dom.id("thumbImg", dom.id("thumnail"));
        thumbImg2.style["background-image"] = "url(\"" + imgsrc + "\")";
        thumbImg2.innerHTML = "";
        setTimeout(function() {
          var flash = dom.cla("snapshotFlash", jmydUI)[0];
          dom.removeClass(flash, "active")
        }, 1000);
        if (auto) {
          setTimeout(function() {
            dom.removeClass(dom.cla("snapshot", jmydUI)[0], "unable")
          }, 1000)
        };
        if (auto && _this.snapCallback) {
          _this.snapCallback()
        };
        if (!auto) {
          thumbImg.children[0].src = imgsrc;
          setTimeout(function() {
            var thumbImg = dom.cla("thumbImg", jmydUI)[0];
            thumbImg.style.opacity = 1
          }, 1000);
          setTimeout(function() {
            var thumbImg = dom.cla("thumbImg", jmydUI)[0];
            thumbImg.style.opacity = 0;
            dom.removeClass(dom.cla("snapshot", jmydUI)[0], "unable")
          }, 3000)
        };
        gui.snapshotHiding = false;
        webview.updateView(false, false)
      }, 10)
    };
    _this.setSnapshot = function() {
      var jmydUI = dom.id("jmydUI");
      var btn = document.createElement("div");
      jmydUI.appendChild(btn);
      dom.addClass(btn, "snapshot");
      dom.addClass(btn, "help");
      var toggleHelp = document.createElement("div");
      dom.addClass(toggleHelp, "tooltip tooltip-right");
      toggleHelp.innerHTML = "\u622a\u53d6\u5f53\u524d\u753b\u9762\u4f5c\u4e3a\u7f29\u7565\u56fe\uff0c\u5e76\u4fdd\u5b58\u753b\u9762\u521d\u59cb\u89c6\u89d2";
      btn.appendChild(toggleHelp);
      var flash = document.createElement("div");
      dom.addClass(flash, "snapshotFlash");
      jmydUI.appendChild(flash);
      dom.bind(btn, "mouseover", function() {
        webview.scene.SnapshotLine.alpha = 0.1;
        webview.updateView(false, false, 10)
      });
      dom.bind(btn, "mouseout", function() {
        webview.scene.SnapshotLine.alpha = 0;
        webview.updateView(false, false)
      });
      dom.bind(btn, "mousedown", function() {
        snapFlash()
      });
      var snap = new SnapshotLine(webview.gl)
    };
    var SetBlockColor = function(c, btnName, prop) {
      var preview = dom.id(btnName);
      preview.style.background = "rgba(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ",1)";
      switch (prop) {
        case "vignette":
          webview.scene.postRender.desc.vignette[0] = c[0] / 255;
          webview.scene.postRender.desc.vignette[1] = c[1] / 255;
          webview.scene.postRender.desc.vignette[2] = c[2] / 255;
          break;
        case "transColor":
          ;
        case "fresnelColor":
          _this.getMatOnEdit().skinParams[prop][0] = c[0] / 255;
          _this.getMatOnEdit().skinParams[prop][1] = c[1] / 255;
          _this.getMatOnEdit().skinParams[prop][2] = c[2] / 255;
          break;
        case "outline":
          _this.getMatOnEdit().outlineColor = [c[0] / 255, c[1] / 255, c[2] / 255];
          break;
        default:
          console.log("\u672a\u77e5BlockColor\u7c7b\u578b")
      };
      webview.updateView(false, false)
    };
    var initBlockColor = function() {
      var a = function(prop, btnId, colorId) {
        var b, c;
        switch (prop) {
          case "vignette":
            b = webview.scene.postRender.desc.vignette;
            c = _this.conBox.SCENE.vignette.CPicker;
            break;
          case "transColor":
            ;
          case "fresnelColor":
            b = _this.getMatOnEdit().skinParams[prop];
            c = _this.conBox.MAT[prop].CPicker;
            break;
          case "outline":
            b = _this.getMatOnEdit().outlineColor;
            c = _this.conBox.MAT[prop].CPicker;
            prop = "outlineColor";
            break
        };
        c.setRgb([b[0] * 255, b[1] * 255, b[2] * 255, 1]);
        showAndHide(dom.id(btnId), dom.id(colorId), function() {
          return function() {
            if (prop == "transColor" || prop == "fresnelColor") {
              var b = _this.getMatOnEdit().skinParams[prop]
            } else {
              if (prop == "outlineColor") {
                var b = _this.getMatOnEdit()[prop]
              } else {
                var b = webview.scene.postRender.desc.vignette
              }
            };
            c.setOffset();
            c.setRgb([b[0] * 255, b[1] * 255, b[2] * 255, 1])
          }
        }(prop, c))
      };
      a("vignette", "vignettePreview", "vignette");
      a("transColor", "transColorBtn", "transColor");
      a("fresnelColor", "fresnelColorBtn", "fresnelColor");
      a("outline", "outlineColorBtn", "outlineColor")
    };
    var setMetaLenthCheck = function() {
      var parents = dom.cla("children2", _this.Panels[3]);
      for (var i = 0; i < parents.length; i++) {
        var textArea = dom.Tag("input", parents[i])[0] || dom.Tag("textarea", parents[i])[0];
        var small = dom.cla("count", parents[i])[0];
        if (textArea && small) {
          (function(textArea, small) {
            dom.bind(textArea, "focus", function() {
              dom.removeClass(small, "hide")
            });
            dom.bind(textArea, "blur", function() {
              dom.addClass(small, "hide")
            });
            var max = parseInt(small.innerText);
            var changeCount = function() {
              var count = max - textArea.value.length;
              if (count < 0) {
                dom.addClass(small, "red")
              } else {
                dom.removeClass(small, "red")
              };
              small.innerText = count + ""
            };
            dom.bind(textArea, "input", changeCount);
            dom.bind(textArea, "propertychange", changeCount);
            dom.bind(textArea, "change", function() {
              var count = max - textArea.value.length;
              if (count < 0) {
                textArea.value = textArea.value.slice(0, max);
                count = 0
              };
              dom.removeClass(small, "red");
              small.innerText = count + ""
            })
          })(textArea, small)
        };
        if (textArea) {
          var meta = _this.controls.sceneData.metaData;
          if (meta[getIndex(textArea)]) {
            textArea.value = codeToCh(meta[getIndex(textArea)])
          }
        }
      }
    };

    function drawAxis(y) {
      var len = 7;
      var gap = 0.5;
      var size = 0.2;
      webview.scene.Axis = [];
      var AxisX = new Line(webview.gl, webview.scene.Axis, [0, 0, 0], [len, 0, 0], [1, 0.05, 0.05, 0.5], y, true);
      var AxisY = new Line(webview.gl, webview.scene.Axis, [0, 0, 0], [0, len, 0], [0.05, 0.05, 1, 0.5], y, true);
      var AxisZ = new Line(webview.gl, webview.scene.Axis, [0, 0, 0], [0, 0, len], [0.05, 1, 0.05, 0.5], y, true);
      new Line(webview.gl, webview.scene.Axis, [len + gap, size, 0], [len + gap + size * 2, -size, 0], [1, 0.05, 0.05, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [len + gap, -size, 0], [len + gap + size * 2, size, 0], [1, 0.05, 0.05, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [-size, len + gap + size * 2, 0], [0, len + gap + size, 0], [0.05, 0.05, 1, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [size, len + gap + size * 2, 0], [0, len + gap + size, 0], [0.05, 0.05, 1, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [0, len + gap, 0], [0, len + gap + size, 0], [0.05, 0.05, 1, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [0, size, len + gap + size * 2], [0, size, len + gap], [0.05, 1, 0.05, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [0, -size, len + gap + size * 2], [0, -size, len + gap], [0.05, 1, 0.05, 0.7], y, true);
      new Line(webview.gl, webview.scene.Axis, [0, size, len + gap], [0, -size, len + gap + size * 2], [0.05, 1, 0.05, 0.7], y, true)
    }

    function drawGround(y) {
      var sum = 6;
      var gap = 2;
      var max = gap * (sum - 1) / 2;
      var p = _this.controls.sceneData.mainCamera.view.pivot;
      webview.scene.ground = [];
      for (var index = 0; index < sum; index++) {
        var m1 = -max + gap * index;
        new Line(webview.gl, webview.scene.ground, [max, 0, m1], [-max, 0, m1], [1, 1, 1, 0.7], y);
        new Line(webview.gl, webview.scene.ground, [m1, 0, max], [m1, 0, -max], [1, 1, 1, 0.7], y)
      }
    }
    var setLights = function() {
      var lights = webview.scene.lights;
      var type;
      var optionUl = dom.cla("options", dom.id("light"))[0];
      for (var i = 0; i < lights.maxCount; i++) {
        switch (lights.lights[i].type) {
          case 0:
            type = "\u5e73\u884c\u5149";
            break;
          case 1:
            type = "\u70b9\u5149\u6e90";
            break;
          case 2:
            type = "\u805a\u5149\u706f";
            break
        };
        var op = document.createElement("li");
        setIndex(op, i + "");
        op.innerHTML = "<div class=\"widget\"><div class=\"widget-wrapper\"><label><span class=\"name\">" + i + "\uff1a" + type + "</span></label><label class=\"toggle-enable\"title=\"\u5f00\u5173\"><i class=\"eye " + (lights.lights[i].on ? "" : "closed") + "\"></i></label></div></div>";
        optionUl.appendChild(op)
      }
    };
    var setBeforeExit = function() {
      window.onbeforeunload = function() {
        return "\u786e\u8ba4\u79bb\u5f00\u5f53\u524d\u9875\u9762\u5417\uff1f\u672a\u4fdd\u5b58\u7684\u6570\u636e\u5c06\u4f1a\u4e22\u5931"
      }
    };
    this.bindEvents = function() {
      for (var i = 0; i < 3; i++) {
        dom.bind(this.tranCon[0].children[i].children[0], "mousedown", _this.rotateFun);
        dom.bind(this.tranCon[0].children[i].children[2], "mousedown", _this.rotateFun)
      };
      for (var i = 0; i < 3; i++) {
        dom.bind(this.tranCon[0].children[i].children[1].children[0], "change", _this.rotateValue)
      };
      dom.bind(this.tranCon[1].children[0].children[0], "mousedown", _this.arGroundStart);
      dom.bind(this.tranCon[1].children[0].children[2], "mousedown", _this.arGroundStart);
      dom.bind(this.tranCon[1].children[0].children[0], "mouseup", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[2], "mouseup", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[0], "mouseout", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[2], "mouseout", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[0], "touchstart", _this.arGroundStart);
      dom.bind(this.tranCon[1].children[0].children[2], "touchstart", _this.arGroundStart);
      dom.bind(this.tranCon[1].children[0].children[0], "touchend", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[2], "touchend", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[0], "touchcancel", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[2], "touchcancel", _this.arGroundEnd);
      dom.bind(this.tranCon[1].children[0].children[1].children[0], "change", _this.arGroundValue);
      var resets = dom.cla("reset");
      dom.bind(resets[0], "mousedown", _this.resetRotat);
      dom.bind(resets[1], "mousedown", _this.resetGround);
      dom.bind(resets[2], "mousedown", _this.resetPivotbyBound);
      initTranRotValue();
      setMatPreset();
      initExtraImgs();
      tabsListen(tabsObject);
      setAllScroll();
      setAllToggle();
      setAllOnOff(_this.OnOffObject);
      setAllcheckbox(_this.checkObject);
      var setColorPicker = function(idName, info, fuc) {
        var cText = dom.cla("colorText", dom.id(idName))[0];
        var cPicker = ColorPicker(dom.cla("ColorPicker", dom.id(idName))[0], function(hex, hsv, c) {
          if (info.type) {
            changeTex({
              "color": [c.r, c.g, c.b]
            }, info.type)
          };
          cText.value = hex;
          if (fuc) {
            fuc(c)
          }
        });
        cPicker.cText = cText;
        cText.onchange = function() {
          var reg = /[a-f A-F 0-9]*/g;
          var a = cText.value.match(reg);
          var hex = a.join("").slice(0, 6);
          if (hex.length != 6) {
            if (hex.length < 3) {
              for (var i = hex.length; i < 3; i++) {
                hex += "0"
              }
            } else {
              hex = hex.slice(0, 3)
            };
            var a1 = hex.charAt(0);
            var a2 = hex.charAt(1);
            var a3 = hex.charAt(2);
            hex = a1 + a1 + a2 + a2 + a3 + a3
          };
          hex = "#" + hex;
          cPicker.setHex(hex)
        };
        return cPicker
      };
      _this.conBox.MAT.albedo.CPicker = setColorPicker("albedoPicker", {
        type: "albedo"
      }, function() {
        dom.cla("selection", _this.Panels[2])[1].innerHTML = "\u6b63\u5728\u4f7f\u7528\u989c\u8272"
      });
      _this.conBox.MAT.reflectivity.CPicker = setColorPicker("reflecPicker", {
        type: "reflectivity"
      }, function() {
        dom.cla("selection", _this.Panels[2])[2].innerHTML = "\u6b63\u5728\u4f7f\u7528\u989c\u8272"
      });
      _this.conBox.SCENE.bgColor.CPicker = setColorPicker("bgPicker", {}, function(c) {
        changeSkyMode(0, [c.r / 255, c.g / 255, c.b / 255, 1])
      });
      _this.conBox.SCENE.vignette.CPicker = setColorPicker("vignette", {}, function(c) {
        SetBlockColor([c.r, c.g, c.b, 1], "vignettePreview", "vignette")
      });
      _this.conBox.MAT.transColor.CPicker = setColorPicker("transColor", {}, function(c) {
        SetBlockColor([c.r, c.g, c.b, 1], "transColorBtn", "transColor")
      });
      _this.conBox.MAT.fresnelColor.CPicker = setColorPicker("fresnelColor", {}, function(c) {
        SetBlockColor([c.r, c.g, c.b, 1], "fresnelColorBtn", "fresnelColor")
      });
      _this.conBox.MAT.outline.CPicker = setColorPicker("outlineColor", {}, function(c) {
        SetBlockColor([c.r, c.g, c.b], "outlineColorBtn", "outline")
      });
      _this.conBox.LIGHT.CPicker = setColorPicker("light", {}, function(c) {
        webview.scene.lights.lights[_this.lightEdit].color = [c.r / 255, c.g / 255, c.b / 255];
        PreviewUpdate(null, "light", "color");
        webview.scene.lights.changeColor(_this.lightEdit);
        webview.updateView(false, false)
      });
      setMapsSelect();
      setPreviews();
      PreviewsClick();
      setCutMesh();
      initBlockColor();
      for (var i = 0; i < _this.Panels.length; i++) {
        _this.Panels[i].onscroll = (function(i) {
          return function() {
            if (i === 0) {
              _this.conBox.SCENE.bgColor.CPicker.setOffset();
              _this.conBox.SCENE.vignette.CPicker.setOffset()
            } else {
              for (var c in _this.conBox.MAT) {
                _this.conBox.MAT[c].CPicker && _this.conBox.MAT[c].CPicker.setOffset()
              }
            }
          }
        })(i)
      };
      manageMaps();
      drawAxis(0);
      drawGround(_this.groundHeight);
      setSave();
      setLights();
      setLightsObjDisplay({
        "sprite": 0,
        "targetCon": 0,
        "tranCon": 0,
        "guide": 0
      });
      setAllMode();
      setSkyList();
      _this.ValueUpdate(this.selectMatElem.innerHTML);
      setMetaType();
      setMetaLenthCheck();
      setBeforeExit()
    };

    function setSave() {
      _this.saveBtn = dom.cla("save-model")[0];
      dom.bind(_this.saveBtn, "click", function() {
        dom.addClass(this, "click");
        dom.addClass(this, "unable");
        if (_this.test) {
          save()
        } else {
          $.ajax({
            url: "isLogin",
            type: "POST",
            dataType: "text",
            success: function(data) {
              if (data == 0 || data == "0") {
                dom.cla("theme-popover-mask")[0].style.display = "block";
                dom.cla("theme-popover")[0].style.display = "block";
                dom.removeClass(_this.saveBtn, "unable")
              } else {
                save()
              }
            },
            error: function(msg) {
              console.log("\u68c0\u67e5\u767b\u9646\u51fa\u9519\u3002login.js:389");
              dom.removeClass(_this.saveBtn, "unable")
            }
          })
        }
      });
      dom.bind(_this.saveBtn, "mouseout", function() {
        dom.removeClass(_this.saveBtn, "click")
      })
    }

    function searchNameByValue(o, value) {
      for (var m in o) {
        if (o[m] === value) {
          return m;
          break
        }
      }
    }
    this.progressFun = function(container, percent, f) {
      if (!_this.progressBar) {
        _this.progressBG = document.createElement("div");
        _this.progressBG.style.background = "#333";
        _this.progressBG.style.height = _this.progressBG.style.width = "100%";
        _this.progressBG.style.opacity = "0.3";
        _this.progressBG.style["z-index"] = "0";
        _this.progressBG.style.position = "absolute";
        _this.progressBG.style.left = _this.progressBG.style.top = "0";
        _this.progressBar = document.createElement("div");
        _this.progressBar.style.backgroundColor = "rgb(240,240,240)";
        _this.progressBar.style.opacity = 0.9;
        _this.progressBar.style.position = "absolute";
        _this.progressBar.style.left = "20%";
        _this.progressBar.style.width = "60%";
        _this.progressBar.style.bottom = "50%";
        _this.progressBar.style.height = "4px";
        _this.progressBar.style["border-radius"] = "2px";
        var d = document.createElement("div");
        d.style.backgroundColor = "#00ccff";
        d.style.position = "absolute";
        d.style.left = "0px";
        d.style.height = "100%";
        d.style.width = "0px";
        d.style["border-radius"] = "2px";
        d.style.transition = "width 0.3s";
        d.style["-webkit-transition"] = "width 0.3s";
        _this.progressText = document.createElement("span");
        _this.progressText.style.position = "absolute";
        _this.progressText.style.bottom = "calc(50% - 30px)";
        _this.progressText.style.left = "49%";
        _this.progressText.style.color = "white";
        _this.progressText.style.weight = "700";
        _this.progressBar.appendChild(d);
        container.appendChild(_this.progressBG);
        container.appendChild(_this.progressBar);
        container.appendChild(_this.progressText);
        dom.Tag("body")[0].style["pointer-events"] = "none"
      };
      _this.progressBar.children[0].style.width = percent + "%";
      _this.progressText.innerText = percent + "%";
      if (f) {
        setTimeout(f, 400)
      }
    };
    _this.hideProgress = function(intId) {
      window.clearInterval(intId);
      if (_this.progressBar) {
        _this.progressBar.parentElement.removeChild(_this.progressBar);
        _this.progressBG.parentElement.removeChild(_this.progressBG);
        _this.progressText.parentElement.removeChild(_this.progressText);
        _this.progressBar = null
      };
      dom.Tag("body")[0].style["pointer-events"] = ""
    };

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

    function save() {
      var checkMetaData = function() {
        var p = dom.cla("children2", _this.Panels[3]);
        var msg = "";
        if (dom.Tag("input", p[0])[0].value.trim() == "") {
          msg += "<p style='line-height:20px'>\u8bf7\u586b\u5199\u4f5c\u54c1\u540d\u5b57</p>"
        };
        if (dom.cla("selection", p[1])[0].innerText == "\u8bf7\u70b9\u51fb\u9009\u62e9") {
          msg += "<p>\u8bf7\u586b\u5199\u4f5c\u54c1\u7c7b\u578b</p>"
        };
        return msg
      };
      var msg = checkMetaData();
      if (msg != "") {
        _this.openPanel(3);
        showMsgBox("\u57fa\u672c\u4fe1\u606f\u4e2d\u7684\u5185\u5bb9\u5c1a\u672a\u586b\u5199", msg);
        dom.removeClass(_this.saveBtn, "unable");
        return
      };
      var logInfo = "";
      var sceneData = _this.controls.sceneData;
      var outPutJson = _this.Clone(sceneData);
      var texType = {
        "albedoTex": "c",
        "alphaTex": "a",
        "reflectivityTex": "r",
        "normalTex": "n",
        "glossTex": "g",
        "extrasTex": "s",
        "extrasTexA": "sa",
        "extrasAOTex": "ao",
        "extrasAOTexA": "aoa",
        "extrasSkinTex": "sk",
        "extrasSkinTexA": "ska",
        "extrasEmiTex": "em",
        "extrasEmiTexA": "ema"
      };
      outPutJson.mainCamera.view.modelMatrix = webview.scene.view.modelMatrix;
      outPutJson.mainCamera.view.modelRot = webview.scene.view.modelRot;
      outPutJson.mainCamera.view.groundHeight = _this.groundHeight;
      outPutJson.mainCamera.post.grain = webview.scene.postRender.desc.grain;
      outPutJson.mainCamera.post.vignette = webview.scene.postRender.desc.vignette;
      outPutJson.mainCamera.post.vignetteCurve = webview.scene.postRender.desc.vignetteCurve;
      if (_this.snapView) {
        outPutJson.mainCamera.view.angles = _this.snapView.rotation;
        outPutJson.mainCamera.view.angles[1] %= 360;
        outPutJson.mainCamera.view.orbitRadius = _this.snapView.radius;
        outPutJson.mainCamera.view.pivot = _this.snapView.pivot
      } else {
        outPutJson.mainCamera.view.angles = webview.scene.view.rotation;
        outPutJson.mainCamera.view.angles[1] %= 360;
        outPutJson.mainCamera.view.orbitRadius = webview.scene.view.radius;
        outPutJson.mainCamera.view.pivot = webview.scene.view.pivot
      };
      outPutJson.sky.backgroundBrightness = _this.conBox.SCENE.bgBright.slider.value / _this.briRatio;
      outPutJson.sky.modelBright = webview.scene.sky.modelBright;
      outPutJson.sky.modelSkyRatio = webview.scene.sky.modelSkyRatio;
      outPutJson.sky.backgroundColor = webview.scene.sky.backgroundColor;
      outPutJson.sky.backgroundMode = webview.scene.sky.backgroundMode;
      outPutJson.sky.diffuseCoefficients = webview.scene.sky.diffuseCoefficients;
      outPutJson.sky.index = _this.controls.skyIndex;
      outPutJson.sky.len = _this.diffuseCoefficients[outPutJson.sky.index].len;
      outPutJson.sky.skyBlurIndex = webview.scene.sky.skyBlurIndex;
      if (!outPutJson.lights) {
        outPutJson.lights = {}
      };
      outPutJson.lights.rotation = webview.scene.lights.rotation;
      outPutJson.lights.positions = [];
      outPutJson.lights.directions = [];
      outPutJson.lights.realPositions = [];
      outPutJson.lights.shadowCount = webview.scene.lights.shadowCount;
      outPutJson.lights.count = webview.scene.lights.count;
      outPutJson.lights.spot = [];
      outPutJson.lights.colors = [];
      outPutJson.lights.parameters = [];
      outPutJson.lights.matrixWeights = [];
      outPutJson.lights.on = [];
      outPutJson.lights.type = [];
      var lights = webview.scene.lights.lights;
      for (var i = 0; i < webview.scene.lights.maxCount; i++) {
        var l = lights[webview.scene.lights.order[i]];
        outPutJson.lights.positions = outPutJson.lights.positions.concat(l.position);
        outPutJson.lights.directions = outPutJson.lights.directions.concat(l.direction);
        outPutJson.lights.realPositions = outPutJson.lights.realPositions.concat(l.realPosition);
        outPutJson.lights.spot = outPutJson.lights.spot.concat(l.spot);
        outPutJson.lights.colors = outPutJson.lights.colors.concat([l.color[0] * l.strength, l.color[1] * l.strength, l.color[2] * l.strength]);
        outPutJson.lights.parameters = outPutJson.lights.parameters.concat(l.parameter);
        outPutJson.lights.matrixWeights.push(l.matrixWeight);
        outPutJson.lights.on.push(l.on ? 1 : 0);
        outPutJson.lights.type.push(l.type)
      };
      outPutJson.ARLights = [];
      for (var i = 0; i < webview.scene.lights.maxCount; i++) {
        if (!lights[i].on) {
          continue
        };
        var li = {};
        li.type = lights[i].type;
        li.color = lights[i].color.slice(0);
        li.strength = lights[i].strength;
        switch (lights[i].type) {
          case 0:
            li.direction = lights[i].direction.slice(0, 3);
            break;
          case 1:
            li.position = lights[i].position.slice(0, 3);
            break;
          case 2:
            li.direction = lights[i].direction.slice(0, 3);
            li.position = lights[i].position.slice(0, 3);
            li.angle = lights[i].angle;
            li.sharpness = lights[i].sharpness;
            break
        };
        outPutJson.ARLights.push(li)
      };
      outPutJson.metaData.title = getUnicode(dom.Tag("input", dom.cla("children2", _this.Panels[3])[0])[0].value.trim());
      outPutJson.metaData.type = searchNameByValue(metaTypelist, dom.cla("selection", dom.cla("children2", _this.Panels[3])[1])[0].innerText);
      outPutJson.metaData.describe = getUnicode(dom.Tag("textarea", dom.cla("children2", _this.Panels[3])[2])[0].value.trim());
      outPutJson.metaData.download = dom.hasClass(dom.cla("checkbox")[1], "checked") ? 1 : 0;
      outPutJson.newTexs = [];
      outPutJson.newColorTexs = [];
      outPutJson.deletedTexs = [];
      var realMats = webview.scene.materials;
      var originMats = sceneData.materials;
      var outputMats = outPutJson.materials;
      var newName;
      var realTexs = {};
      var oldTexs = {};
      outPutJson.ARMats = {};
      var sameTexscache = [];
      var saveTemp = {};
      for (var i = 0; i < originMats.length; i++) {
        for (var j in texType) {
          if (originMats[i][j]) {
            oldTexs[originMats[i][j]] = 1
          }
        }
      };
      for (var m in realMats) {
        saveTemp[m] = {};
        outPutJson.ARMats[m] = {};
        var ts = realMats[m].unMergedTex;
        if (realMats[m].unlitDiffuse) {
          saveTemp[m].strength = {
            gloss: realMats[m].strength.gloss,
            reflectivity: realMats[m].strength.reflectivity
          };
          saveTemp[m].unMergedTex = {
            normal: realMats[m].unMergedTex.normal
          };
          realMats[m].strength.gloss = 0;
          realMats[m].strength.reflectivity = 0;
          var t2 = new Texture(webview.gl, {
            width: 1,
            height: 1
          });
          t2.loadArray(new Uint8Array([128, 127, 255, 255]));
          realMats[m].unMergedTex.normal = {
            "tex": t2,
            "value": [128, 127, 255, 255]
          }
        };

        function pushAlphaName(u, m, i) {
          var isPNG = false;
          var ifput = false;
          if (u != "albedo" && u != "reflectivity") {
            return
          };
          if (ts[u].tex.img.Base64Src) {
            var head = ts[u].tex.img.Base64Src.slice(0, 15);
            if (head.indexOf("png") != -1 || head.indexOf("PNG") != -1) {
              isPNG = true
            }
          } else {
            var tail = ts[u].tex.img.currentSrc.slice(-3);
            if (tail === "png" || tail === "PNG") {
              isPNG = true
            }
          };
          if (isPNG) {
            if (u == "albedo") {
              if (realMats[m].usesBlending && ts["alpha"].value instanceof Array && realMats[m].strength.alpha != 0) {
                ifput = true
              }
            } else {
              if (ts["gloss"].value instanceof Array && realMats[m].strength.gloss != 0) {
                ifput = true
              }
            };
            if (ifput) {
              var v = (u == "albedo") ? "alphaTex" : "glossTex";
              if (outPutJson.newTexs[i].alphaName == "") {
                outPutJson.newTexs[i].alphaName = searchOutputMat(m)[v]
              } else {
                searchOutputMat(m)[v] = outPutJson.newTexs[i].alphaName
              };
              outPutJson.ARMats[m][(u == "albedo") ? "map_Kd" : "map_Ks"] = outPutJson.newTexs[i].name.slice(0, -3) + "png";
              if (outPutJson.ARMats[m][(u == "albedo") ? "alpha" : "gloss"]) {
                delete outPutJson.ARMats[m][(u == "albedo") ? "alpha" : "gloss"].color;
                outPutJson.ARMats[m][(u == "albedo") ? "alpha" : "gloss"].map = outPutJson.newTexs[i].alphaName
              }
            }
          }
        }
        var outMat = searchOutputMat(m);
        for (var u in ts) {
          var del = false;
          if (u === "extras" || u === "extrasSkin" || u === "extrasAO" || u === "extrasEmi") {
            if (!ts[u].tex && ts[u].value instanceof Array) {
              del = true
            }
          } else {
            if (!ts[u].tex && ts[u].value == void(0) || realMats[m].strength[u] == void(0)) {
              del = true
            }
          };
          if (del) {
            delete searchOutputMat(m)[u + "Tex"];
            continue
          };
          outPutJson.ARMats[m][u] = {};
          if (realMats[m].strength[u] === 0 && !(ts[u].value instanceof Object) && m != "normal") {
            ts[u].value = [0, 0, 0]
          };
          if (isAlphaName(m, u + "Tex")) {
            newName = outMat[u + "Tex"]
          } else {
            if (ts[u].value instanceof Object) {
              if (u === "gloss" || u === "alpha") {
                if (u === "alpha" && realMats[m].blendType === "none") {
                  continue
                };
                value = [255, 255, 255]
              } else {
                var value = ts[u].value
              };
              newName = getnewTexName(u + "Tex");
              outPutJson.newColorTexs.push({
                name: newName,
                color: value
              });
              outPutJson.deletedTexs.push(newName)
            } else {
              if (ts[u].tex && ts[u].tex.newLoad) {
                newName = getnewTexName(u + "Tex", ts[u].tex.img.src);
                var same = 0;
                for (var i = 0; i < outPutJson.newTexs.length; i++) {
                  if (outPutJson.newTexs[i].name === newName) {
                    same = 1;
                    pushAlphaName(u, m, i);
                    break
                  }
                };
                if (!same) {
                  outPutJson.newTexs.push({
                    name: newName,
                    imgsrc: ts[u].tex.img.src,
                    imgBase64: ts[u].tex.img.Base64Src,
                    alphaName: ""
                  });
                  pushAlphaName(u, m, i);
                  outPutJson.deletedTexs.push(newName)
                }
              } else {
                newName = ts[u].value
              }
            }
          };
          outMat[u + "Tex"] = newName;
          realTexs[newName] = 1;
          outPutJson.ARMats[m][u].strength = realMats[m].strength[u];
          if (isAlphaName(m, u + "Tex")) {
            outPutJson.ARMats[m][u].map = newName
          } else {
            if (typeof ts[u].value == "object") {
              outPutJson.ARMats[m][u].color = ts[u].value
            } else {
              if (ts[u].tex.img) {
                outPutJson.ARMats[m][u].map = newName
              }
            }
          }
        };
        outMat.extrasTexCoordRanges = {};
        outMat.cullBackFaces = realMats[m].cullBackFaces ? 1 : 0;
        outPutJson.ARMats[m].cullBackFaces = realMats[m].cullBackFaces ? 1 : 0;
        outMat.strength = realMats[m].strength;
        outMat.blend = realMats[m].blendType;
        outMat.unlitDiffuse = realMats[m].unlitDiffuse ? 1 : 0;
        outPutJson.ARMats[m].unlitDiffuse = realMats[m].unlitDiffuse ? 1 : 0;
        outMat.outline = realMats[m].outline ? 1 : 0;
        outMat.outlineColor = realMats[m].outlineColor;
        outMat.outlineWidth = realMats[m].outlineWidth;
        if (realMats[m].useSkin) {
          outMat.useSkin = 1;
          outMat.extrasTexCoordRanges.translucencyTex = {
            "scaleBias": realMats[m].extrasTexCoordRanges.translucencyTex
          };
          outMat.skinParams = realMats[m].skinParams
        } else {
          outMat.useSkin = 0
        };
        if (realMats[m].useAO) {
          outMat.extrasTexCoordRanges.aoTex = {
            "scaleBias": realMats[m].extrasTexCoordRanges.aoTex
          }
        };
        if (realMats[m].useEmissive) {
          outMat.emissiveIntensity = realMats[m].emissiveIntensity;
          outMat.extrasTexCoordRanges.emissiveTex = {
            "scaleBias": realMats[m].extrasTexCoordRanges.emissiveTex
          }
        }
      };

      function isAlphaName(m, v) {
        for (var i = 0; i < outPutJson.newTexs.length; i++) {
          if (searchOutputMat(m)[v] == outPutJson.newTexs[i].alphaName) {
            return true
          }
        };
        return false
      }

      function Int(v) {
        for (var i = 0; i < v.length; i++) {
          v[i] = Math.round(v[i])
        };
        return v
      }

      function searchOutputMat(name) {
        for (var i = 0; i < outputMats.length; i++) {
          if (outputMats[i].name === name) {
            return outputMats[i]
          }
        }
      }

      function searchOriginMat(name) {
        for (var i = 0; i < originMats.length; i++) {
          if (originMats[i].name === name) {
            return originMats[i]
          }
        }
      }

      function getnewTexName(type, src) {
        var post = texType[type];
        var name;
        if (sameTexscache.length && src) {
          for (var i = 0; i < sameTexscache.length; i++) {
            if (sameTexscache[i].src === src) {
              return sameTexscache[i].name
            }
          }
        };
        for (var i = 0;; i++) {
          name = "mat" + i + "_" + post + ".jpg";
          if (!realTexs[name]) {
            if (src) {
              sameTexscache.push({
                name: name,
                src: src
              })
            };
            return name;
            break
          }
        }
      }
      for (var i = 0; i < outPutJson.deletedTexs.length; i++) {
        if (!oldTexs[outPutJson.deletedTexs[i]]) {
          outPutJson.deletedTexs.splice(i, 1)
        }
      };
      for (var i in oldTexs) {
        if (!realTexs[i] && outPutJson.deletedTexs.indexOf(i) === -1) {
          outPutJson.deletedTexs.push(i)
        }
      };
      var ms = webview.scene.meshes;
      if (ms[0].meshAlphaBuffer.length) {
        for (var m = 0; m < ms.length; m++) {
          var length = ms[m].meshAlphaBuffer.length;
          var arr = ms[m].meshAlphaBuffer[length - 1];
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] != 1) {
              outPutJson.meshes[m].meshAlpha = arr;
              break
            }
          }
        }
      };
      var callback = function() {
        outPutJson.thumbImg = {
          src: _this.thumbImgSrc,
          ifAuto: _this.ifThumbAutoBuild
        };
        delete outPutJson.materials2;
        delete outPutJson.extraImgs;
        delete outPutJson.Cameras;
        console.log(outPutJson);
        for (var m in saveTemp) {
          for (var i in saveTemp[m]) {
            for (var j in saveTemp[m][i]) {
              realMats[m][i][j] = saveTemp[m][i][j]
            }
          }
        };
        var progressRate = 0;
        var eventFun = function() {
          if (progressRate < 99) {
            progressRate += 1
          };
          _this.progressFun(dom.id("jmydUI"), progressRate)
        };
        intId = window.setInterval(eventFun, 1000);
        var form_data = new FormData();
        form_data.append("modelmeta", JSON.stringify(outPutJson));
        form_data.append("userName", outPutJson.metaData.author);
        $.ajax({
          type: "POST",
          url: "editModel?m=" + name,
          data: form_data,
          cache: false,
          processData: false,
          contentType: false,
          success: function(data) {
            if (data === 0) {
              _this.hideProgress(intId)
            } else {
              window.clearInterval(intId);
              var codes = data.split("<>");
              window.onbeforeunload = null;
              _this.progressFun(dom.id("jmydUI"), 100, function() {
                window.location.href = "view.html?m=" + codes[0]
              })
            }
          },
          error: function(data) {
            reportError(webview.sceneURL);
            _this.hideProgress(intId);
            alert("\u4fdd\u5b58\u51fa\u9519\uff01");
            dom.removeClass(_this.saveBtn, "unable")
          }
        })
      };
      if (!_this.thumbImgSrc) {
        _this.ifThumbAutoBuild = true;
        _this.snapCallback = callback;
        snapFlash()
      } else {
        callback()
      }
    }
    _this.initMat = function() {
      var c = [{
        "name": "diamond",
        "albedoTex": "mat0_c.jpg",
        "reflectivityTex": "mat1_r.jpg",
        "normalTex": "mat1_n.png",
        "glossTex": "mat0_r.jpg",
        "blend": "none",
        "alphaTest": 0,
        "fresnel": [1, 1, 1],
        "horizonOcclude": 2.11832,
        "horizonSmoothing": 0.5,
        "tangentOrthogonalize": 1,
        "tangentNormalize": 1,
        "tangentGenerateBitangent": 0,
        "useSkin": 0,
        "aniso": 0,
        "microfiber": 0
      }, {
        "name": "Aluminum",
        "albedoTex": "mat0_c.jpg",
        "reflectivityTex": "mat0_r.jpg",
        "normalTex": "mat0_n.png",
        "glossTex": "mat0_g.jpg",
        "blend": "none",
        "alphaTest": 0,
        "fresnel": [1, 1, 1],
        "horizonOcclude": 3.96049,
        "horizonSmoothing": 0.5,
        "useSkin": 0,
        "aniso": 0,
        "microfiber": 0
      }];
      for (var f = 0; f < c.length; f++) {
        var d = c[f];
        if (webview.scene.materials[d.name]) {
          console.log("\u91cd\u540d")
        };
        d.lightCount = webview.scene.lights.count, d.shadowCount = webview.scene.lights.shadowCount, webview.scene.materials[d.name] = new Material(webview.gl, a, d), _this.controls.sceneData.materials2 ? (_this.controls.sceneData.materials2[d.name] = d) : (_this.controls.sceneData.materials2 = {}, _this.controls.sceneData.materials2[d.name] = d)
      }
    };
    _this.loadMesh = function(url, meshInfo, callback) {
      var b = webview.ui.signalLoadProgress.bind(webview.ui);
      var a = function(a) {
        b(1, 1);
        webview.ui.loadingProgress = false;
        webview.ui.progressBar && (webview.ui.progressBar.parentElement.style.display = "none");
        var a = new ByteStream(a);
        aa(a.bytes)
      };
      var aa = function(data) {
        var mesh = new Mesh(webview.gl, meshInfo, {
          data: data
        });
        for (var g = 0; g < meshInfo.subMeshes.length; ++g) {
          var h = meshInfo.subMeshes[g];
          webview.scene.meshRenderables.push(new MeshRenderable(mesh, h, webview.scene.materials[h.material]))
        };
        callback && callback(mesh);
        webview.updateView(true)
      };
      var c = function() {
        console.log("cannot load mesh");
        showMsgBox("\u6a21\u578b\u672a\u80fd\u52a0\u8f7d", "\u53ef\u80fd\u539f\u56e0\uff1a\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73")
      };
      webview.ui.loadingProgress = true;
      webview.ui.progressBar && (webview.ui.progressBar.style.width = "0px", webview.ui.progressBar.parentElement.style.display = "");
      Network.fetchBinary(url + meshInfo.file, a, c, b, {
        width: 7
      })
    }
  }
  GUI = _$af1462855
})()