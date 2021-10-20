// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var _enemy = require("./enemy");
var _basket = require("./basket");
_basket.Basket();
_basket.showBasket();
// Init event on enemy
_enemy.initEnemy();

},{"./enemy":"jbe23","./basket":"03evb"}],"jbe23":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "powerClick", ()=>powerClick
);
parcelHelpers.export(exports, "changePowerClick", ()=>changePowerClick
);
parcelHelpers.export(exports, "initEnemy", ()=>initEnemy
);
parcelHelpers.export(exports, "handleClickEnemy", ()=>handleClickEnemy
);
var _coin = require("./coin");
var _clickCounter = require("./clickCounter");
var _goblinPng = require("../../public/enemy/goblin.png");
var _goblinPngDefault = parcelHelpers.interopDefault(_goblinPng);
var _goblinHurtPng = require("../../public/enemy/goblin_hurt.png");
var _goblinHurtPngDefault = parcelHelpers.interopDefault(_goblinHurtPng);
var _01Png = require("../../public/upgrade/01.png");
var _01PngDefault = parcelHelpers.interopDefault(_01Png);
var _02Png = require("../../public/upgrade/02.png");
var _02PngDefault = parcelHelpers.interopDefault(_02Png);
var _03Png = require("../../public/upgrade/03.png");
var _03PngDefault = parcelHelpers.interopDefault(_03Png);
var _04Png = require("../../public/upgrade/04.png");
var _04PngDefault = parcelHelpers.interopDefault(_04Png);
var _dead2Png = require("../assets/enemy/DEAD2.png");
var _dead2PngDefault = parcelHelpers.interopDefault(_dead2Png);
//USEFULL VARIABLES //
const enemy = document.querySelector(".character-enemy-img");
const characterEnemy = document.querySelector(".character-enemy");
let powerClick = 1;
const changePowerClick = (value)=>{
    powerClick = value;
};
/////////////// WORK IN PROGRESS ////////////////
//ENNEMY HEALTHBAR//
const ennemies = [_01PngDefault.default, _02PngDefault.default, _03PngDefault.default, _04PngDefault.default];
const skullDom = document.querySelector(".ennemiesCounter");
let item = ennemies[Math.floor(Math.random() * ennemies.length)];
let isDead = 0;
const decrHealth = ()=>{
    let healthBar = document.getElementById("hp");
    healthBar.value -= 10;
    if (healthBar.value === 0) {
        healthBar.value = 100;
        isDead++;
        skullDom.innerHTML = isDead;
        enemy.src = _dead2PngDefault.default;
        console.log(isDead);
    }
};
const initEnemy = ()=>{
    enemy.addEventListener("click", ()=>{
        changeImage();
        _coin.addCoin(powerClick);
        createDamageDom();
        _clickCounter.addClick();
        decrHealth();
    });
};
const handleClickEnemy = (params)=>{
    createDamageDom(params);
};
const changeImage = ()=>{
    enemy.src = _goblinHurtPngDefault.default;
    setTimeout(()=>{
        enemy.src = _goblinPngDefault.default;
    }, 100);
};
const createDamageDom = (params)=>{
    const randomRight = Math.floor(Math.random() * 20) + 7;
    const randomBottom = Math.floor(Math.random() * 15) + 45;
    const newP = document.createElement("p");
    newP.classList.add("character-damage");
    if (params === undefined) newP.innerHTML = `+ ${powerClick} coin`;
    else newP.innerHTML = `+ ${params} coin`;
    newP.style.right = `${randomRight}%`;
    newP.style.bottom = `${randomBottom}%`;
    characterEnemy.appendChild(newP);
    setTimeout(()=>{
        characterEnemy.removeChild(newP);
    }, 500);
};

},{"./coin":"g8hRf","./clickCounter":"f5W69","../../public/enemy/goblin.png":"elTAk","../../public/enemy/goblin_hurt.png":"gtBBE","../../public/upgrade/01.png":"iQReq","../../public/upgrade/02.png":"bhWqH","../../public/upgrade/03.png":"1Mcsq","../../public/upgrade/04.png":"cmrfo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../assets/enemy/DEAD2.png":"6hLh0"}],"g8hRf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "coin", ()=>coin
);
parcelHelpers.export(exports, "addCoin", ()=>addCoin
);
parcelHelpers.export(exports, "changeCoin", ()=>changeCoin
);
let coin = 0;
const coinDom = document.querySelector(".coins-counter");
const addCoin = (powerClick)=>{
    coin += powerClick;
    coinDom.innerHTML = coin;
    addToLocalStorage(coin);
};
const changeCoin = (value)=>{
    coin = value;
    coinDom.innerHTML = coin;
};
// add coins to localStorage
document.addEventListener('DOMContentLoaded', function(e) {
    let tasks;
    if (localStorage.getItem('tasks') === null) tasks = [];
    else tasks = localStorage.getItem('tasks').split(',');
    for (let item of tasks)coinDom.innerHTML = item;
});
function addToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) tasks = [];
    else tasks = localStorage.getItem('tasks').split(',');
    tasks.push(task);
    localStorage.setItem('tasks', tasks);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f5W69":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clicks", ()=>clicks
);
parcelHelpers.export(exports, "addClick", ()=>addClick
);
const clickDom = document.querySelector(".clickNumber");
let clicks = 0;
const addClick = ()=>{
    clicks++;
    clickDom.innerHTML = clicks;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"elTAk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "goblin.c7931e03.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gtBBE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "goblin_hurt.ed5cc072.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iQReq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "01.db49c812.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bhWqH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "02.a2e90193.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1Mcsq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "03.8031be6c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cmrfo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "04.534260f9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6hLh0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "DEAD2.678efcd7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"03evb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Basket", ()=>Basket
);
parcelHelpers.export(exports, "showBasket", ()=>showBasket
);
var _db = require("./db");
var _upgrade = require("./upgrade");
const shopBasket = document.getElementById('basket');
const shopping = document.getElementById('shopping');
function Basket() {
    const charBasket = document.getElementById('char-basket');
    _db.db_upgrade.forEach((element, index)=>{
        // div for every charcter to buy
        const character = document.createElement('div');
        character.className = "character";
        // :::::::::::::::::::::::::::::::::::::::::::::::::::::
        // div for the price 
        const pricesDiv = document.createElement('div');
        pricesDiv.className = "prices";
        pricesDiv.addEventListener("click", ()=>_upgrade.upgradeBuy(element, index)
        );
        const levelUp = document.createElement('p');
        levelUp.innerText = "LVL UP";
        levelUp.innerText = "LVL " + element.level;
        const prix = document.createElement('p');
        prix.innerText = element.price + " coins";
        // add price and leve in the price div
        pricesDiv.append(levelUp);
        pricesDiv.append(prix);
        character.appendChild(pricesDiv);
        // ::::::::::::::::::::::::::::::::::::::::::::::::
        // div for character description
        const description = document.createElement('div');
        description.className = "powers";
        const charInfo = document.createElement('div');
        charInfo.classList.add("charInfo");
        const charName = document.createElement('p');
        charName.innerText = element.name;
        charInfo.append(charName);
        const descrip = document.createElement('p');
        descrip.innerText = element.description;
        charInfo.append(descrip);
        description.append(charInfo);
        //:::::::::::::::::::::::::::::::::::::::::::::::::
        const charImg = document.createElement('img');
        charImg.className = "images";
        charImg.className = "warrior";
        charImg.setAttribute('src', element.image);
        character.append(charInfo);
        character.append(charImg);
        charBasket.append(character);
    });
}
function showBasket() {
    shopping.addEventListener('click', ()=>{
        shopBasket.classList.toggle('show');
    });
}

},{"./db":"jdbTh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./upgrade":"ilU0j"}],"jdbTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeDb", ()=>changeDb
);
parcelHelpers.export(exports, "db_upgrade", ()=>db_upgrade
);
var _01Png = require("../../public/upgrade/01.png");
var _01PngDefault = parcelHelpers.interopDefault(_01Png);
var _02Png = require("../../public/upgrade/02.png");
var _02PngDefault = parcelHelpers.interopDefault(_02Png);
var _03Png = require("../../public/upgrade/03.png");
var _03PngDefault = parcelHelpers.interopDefault(_03Png);
var _04Png = require("../../public/upgrade/04.png");
var _04PngDefault = parcelHelpers.interopDefault(_04Png);
var _05Png = require("../../public/upgrade/05.png");
var _05PngDefault = parcelHelpers.interopDefault(_05Png);
var _06Png = require("../../public/upgrade/06.png");
var _06PngDefault = parcelHelpers.interopDefault(_06Png);
var _enemy = require("./enemy");
var _coin = require("./coin");
const actionEffect = (value, effect, level)=>{
    if (value === undefined) return effect * level;
    else return parseFloat(value) + effect * level;
};
const attackAuto = (value, index)=>setTimeout(()=>{
        _coin.changeCoin(_coin.coin + value);
        _enemy.handleClickEnemy(value);
        db_upgrade[index].actionAttack();
    }, 1000)
;
const changeDb = (newDb)=>{
    db_upgrade = newDb;
};
let db_upgrade = [
    {
        name: "Knight of night",
        description: "+ 0.5 coin / click",
        image: _01PngDefault.default,
        price: 10,
        level: 0,
        effect: "ADD",
        damage: 0.5,
        action: (value)=>{
            return actionEffect(value, db_upgrade[0].damage, db_upgrade[0].level);
        }
    },
    {
        name: "Savage warrior",
        description: "+ 0.5 click / second",
        image: _02PngDefault.default,
        price: 50,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 0.5,
        action: (value)=>{
            return actionEffect(value, db_upgrade[1].damage, db_upgrade[1].level);
        },
        actionAttack: ()=>attackAuto(db_upgrade[1].action(), 1)
    },
    {
        name: "Lady of the night",
        description: "+ 3 click / second",
        image: _03PngDefault.default,
        price: 250,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 3,
        action: (value)=>{
            return actionEffect(value, db_upgrade[2].damage, db_upgrade[2].level);
        },
        actionAttack: ()=>attackAuto(db_upgrade[2].action(), 2)
    },
    {
        name: "Sniper",
        description: "+ 5 coins / click",
        image: _04PngDefault.default,
        price: 500,
        level: 0,
        effect: "ADD",
        damage: 5,
        action: (value)=>{
            return actionEffect(value, db_upgrade[3].damage, db_upgrade[3].level);
        }
    },
    {
        name: "Golden angel",
        description: "+ 10 click / second",
        image: _05PngDefault.default,
        price: 2000,
        level: 0,
        effect: "AUTOMATIQUE",
        damage: 10,
        action: (value)=>{
            return actionEffect(value, db_upgrade[4].damage, db_upgrade[4].level);
        },
        actionAttack: ()=>attackAuto(db_upgrade[4].action(), 4)
    },
    {
        name: "Dark Assassin",
        description: "+ 20 coins / click",
        image: _06PngDefault.default,
        price: 10000,
        level: 0,
        effect: "ADD",
        damage: 20,
        action: (value)=>{
            return actionEffect(value, db_upgrade[5].damage, db_upgrade[5].level);
        }
    }
];

},{"../../public/upgrade/01.png":"iQReq","../../public/upgrade/02.png":"bhWqH","../../public/upgrade/03.png":"1Mcsq","../../public/upgrade/04.png":"cmrfo","../../public/upgrade/05.png":"gWTCG","../../public/upgrade/06.png":"iKy1B","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./enemy":"jbe23","./coin":"g8hRf"}],"gWTCG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "05.069b2fef.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iKy1B":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "06.4bd4e259.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ilU0j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "upgradeBuy", ()=>upgradeBuy
);
var _coin = require("./coin");
var _db = require("./db");
var _enemy = require("./enemy");
const coinDom = document.querySelector(".coins-counter");
const charBasket = document.getElementById('char-basket');
const upgradeBuy = (data, index)=>{
    if (_coin.coin >= data.price) handleUpgrade(data, index);
    else {
        coinDom.style.color = "crimson";
        coinDom.style.transform = "scale(1.5) translateX(5px)";
        setTimeout(()=>{
            coinDom.style.color = "#fff";
            coinDom.style.transform = "scale(1)";
        }, 400);
    }
};
const handleUpgrade = (data, index)=>{
    const newCoin = _coin.coin - data.price;
    let newDb = _db.db_upgrade;
    newDb[index] = {
        ...newDb[index],
        level: newDb[index].level += 1
    };
    charBasket.childNodes[index].childNodes[0].childNodes[0].innerHTML = `LVL ${newDb[index].level}`;
    const newInformation = data.action(data.damage);
    let newDescription = "";
    if (data.effect === "ADD") {
        newDescription = `+ ${newInformation} coins / click`;
        charBasket.childNodes[index].childNodes[1].childNodes[1].innerHTML = newDescription;
    } else if (data.effect === "AUTOMATIQUE") {
        newDescription = `+ ${newInformation} coins / second`;
        charBasket.childNodes[index].childNodes[1].childNodes[1].innerHTML = newDescription;
    }
    newDb[index] = {
        ...newDb[index],
        description: newDescription
    };
    _coin.changeCoin(newCoin);
    _db.changeDb(newDb);
    if (data.effect === "ADD") _enemy.changePowerClick(data.action(_enemy.powerClick));
    else if (data.effect === "AUTOMATIQUE") {
        if (_db.db_upgrade[index].level - 1 === 0) data.actionAttack();
    }
} // const attackAuto = (index) => setInterval(() => {
 //     const value = db_upgrade[index].action(db_upgrade[index].damage)
 //     handleClickEnemy(value)
 //     changeCoin(coin + value)
 //     console.log("auto")
 // }, 1000);
;

},{"./coin":"g8hRf","./db":"jdbTh","./enemy":"jbe23","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["cSv3F","3auaO"], "3auaO", "parcelRequire72bb")

//# sourceMappingURL=index.8b7fb9b3.js.map
