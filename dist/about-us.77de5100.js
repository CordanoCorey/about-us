// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../Users/cgelbaugh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../Users/cgelbaugh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../Users/cgelbaugh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../Users/cgelbaugh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Import stylesheets

require("./style.css");

var TeamMember =
/** @class */
function () {
  function TeamMember() {
    this.name = '';
    this.title = '';
    this.imageSrc = '';
    this.bio = [];
    this.funFacts = [];
  }

  TeamMember.prototype.render = function () {
    return "\n    <div class=\"team-member scene\">\n      <div class=\"spacer2\">\n        <span class=\"name\">" + this.name + "</span> \n        <span class=\"title\">" + this.title + "</span>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-face card-front\">\n          " + this.renderImage() + "\n        </div>\n        <div class=\"card-face card-back\">\n          <div class=\"bio\">" + this.renderBio() + "</div>\n          <div class=\"fun-facts\">\n            " + this.renderFunFacts() + "\n            <span class=\"hashtag-funfacts\">#funfact</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
  };

  TeamMember.prototype.renderBio = function () {
    return this.bio.reduce(function (acc, x) {
      return acc + "<p class=\"list-item\">" + x + "</p>";
    }, '');
  };

  TeamMember.prototype.renderFunFacts = function () {
    return this.funFacts.reduce(function (acc, x) {
      return acc + "<p class=\"list-item\">" + x + "</p>";
    }, '');
  };

  TeamMember.prototype.renderImage = function () {
    return this.imageSrc ? "<img src=\"./assets/images/team-members/" + this.imageSrc + "\">" : '';
  };

  return TeamMember;
}();

function renderTeam(team) {
  return team.reduce(function (acc, x) {
    return "" + acc + x.render();
  }, '');
}

var teamMembers = [Object.assign(new TeamMember(), {
  name: 'Holly Brzycki',
  title: 'Supervisor of Online Learning',
  imageSrc: 'Holly Brzycki.jpg',
  bio: ['Holly Brzycki is the Supervisor of Online Learning at the Capital Area Intermediate Unit. She oversees CAOLA, a regional online learning program for 123 schools, districts, programs & Intermediate Units in PA. Holly has been in education for over 23 years in the roles of teacher, curriculum director, principal and supervisor in traditional and cyber schools. Holly has spent the past 16 years dedicated to online learning and merging her passion for education and technology. She holds a teaching degree as well as a Masters of Education in Ed. Leadership and Principal certification.'],
  funFacts: ['Holly has visited 42 states with a life goal of visiting all 50 states.']
}), Object.assign(new TeamMember(), {
  name: 'Bryan Guerrisi',
  title: ' Online Support Administrator',
  imageSrc: 'Bryan Guerrisi.jpg',
  bio: ['Bryan Guerrisi is the Online Support Administrator for the Capital Area Online Learning Association at the Capital Area Intermediate Unit. He is in charge of the professional development of CAOLA members as it pertains to vendors and the learning management systems used by the CAOLA consortium.', 'Bryan has a Bachelor’s degree from Lock Haven University and a Master’s degree from Penn State University. '],
  funFacts: ['I am ambidextrous.']
}), Object.assign(new TeamMember(), {
  name: 'Aaron Clarke',
  title: 'Online Learning Account Manager',
  imageSrc: 'Aaron Clarke.jpg',
  bio: ['Aaron Clarke is the Online Learning Account Manager for the CAOLA Program. In this role, Aaron works with IU and School District partners to support and grow their respective online learning programs through the use of CAOLA.'],
  funFacts: ['I operate a successful DJ business, MAC2 DJ Entertainment. I also enjoy showing my classic car, a Pontiac 20th Anniversary Turbo Trans Am.']
}), Object.assign(new TeamMember(), {
  name: 'Kristen Gross',
  title: 'Online Learning Support Administrator',
  imageSrc: 'Kristen Gross.jpg',
  bio: ['Kristen Gross is the Online Learning Support Administrator for the CAOLA program at the Capital Area Intermediate Unit. She supports CAOLA by maintaining the course catalog and monitoring students as an advisor for school districts in our program. Kristen received her undergraduate degree in Elementary and Special Education from Lebanon Valley College.'],
  funFacts: ['I currently raise 5 backyard chickens. Their names are Sara, Duck, Rose, Snowy and Pancakes.']
}), Object.assign(new TeamMember(), {
  name: 'Casey Stepp',
  title: 'Program Secretary for Online Learning',
  imageSrc: 'Casey Stepp.jpg',
  bio: ['Casey Stepp is the Program Secretary for Online Learning at the Capital Area Intermediate Unit. She supports CAOLA by keeping the line of communication open between the CAIU Staff and districts/IUs, Schedule/organize meetings, prepares invoicing and provides administrative support for CAOLA staff.'],
  funFacts: ['I live on a 40 acre farm, I was proposed to with an entire field of sunflowers and I can play the piano, flute and piccolo.']
}), Object.assign(new TeamMember(), {
  name: 'Tammy True',
  title: 'Program Assistant',
  imageSrc: 'Tammy True.jpg',
  bio: ['Tammy True is a Program Assistant with Capital Area Intermediate Unit (CAIU) providing assistance with management and oversight of the Capital Area Online Learning Association’s (CAOLA) Online Learning Program. She provides advising services assisting member districts and students in the Program.', 'Tammy worked for PADEP for 13 years, was a Realtor with Jack Gaughen ERA and worked on the CAIU Student Services Team for 10 years prior to joining the CAOLA Team.'],
  funFacts: ['Tammy’s favorite location is the beach. “Life’s just right with the beach in sight.”']
}), Object.assign(new TeamMember(), {
  name: 'Keisha Cree',
  title: 'Program Assistant',
  imageSrc: 'Keisha Cree.jpg',
  bio: ['Keisha Cree is a Program Assistant for the CAOLA program. Her role involves advising school districts and students to navigate through their courses and offer support to be successful. Prior to CAOLA, she worked with children with developmental delays and before that was a Pre-K teacher. She is very invested in the educational success of students of all ages.'],
  funFacts: ['Keisha owns and runs a photography business outside of her work at CAOLA!']
}), Object.assign(new TeamMember(), {
  name: 'Beth Cappello',
  imageSrc: 'Elizabeth Cappello.jpg',
  title: 'Special Projects Coordinator',
  bio: ['Beth Cappello is the cyber advisor for Big Spring School District. In this role, she advises students to navigate through their courses and offers support to families to help the student be academically successful. She received her undergraduate degree in Middle Grades Mathematics from West Chester University and will complete her Special Education Masters degree from Shippensburg University Spring 2020!'],
  funFacts: ['Beth took a 37-day road trip across the United States in the summer of 2018 with her husband. They traveled through 26 different states and can’t wait to do something like this again!']
}), Object.assign(new TeamMember(), {
  name: 'Dave Nichols',
  title: 'Technology Support Supervisor',
  imageSrc: 'Dave Nichols.jpg',
  bio: ['David Nichols is the Technology Support Supervisor at the Capital Area Intermediate Unit, where he oversees the CAOLA Help Desk, CAIU Help Desk, and Application Support Team. He has been working for the CAIU since June of 2011, where he started at the Application Support Specialist position. Prior to that, he has been working in technology for 13 years after receiving his Bachelors of Science in Information Science and Technology from Pennsylvania State University.'],
  funFacts: ['David proposed to his then girlfriend on a cruise, in the middle of the ocean at midnight over New Years.']
}), Object.assign(new TeamMember(), {
  name: 'Andrew Rhoads',
  title: 'Application Support Specialist',
  imageSrc: 'Andrew Rhoads.jpg',
  bio: ['Andrew Rhoads is an Application Support Specialist for the CAOLA helpdesk. Andrew works with students and district personnel to assist with any issues or questions they may have when using the CAOLA platform.'],
  funFacts: ['Andrew has no middle name!']
}), Object.assign(new TeamMember(), {
  name: 'Aaron Sica',
  title: 'Application Support Specialist',
  imageSrc: 'Aaron Sica.jpg',
  bio: ['Aaron Sica is an Application Support Specialist and has worked with the CAOLA program for the last 5 years, providing technical help to districts all over Pennsylvania who have enrolled in the program. He received a Bachelor’s Degree in Data Communications and Networking from Pennsylvania College of Technology.'],
  funFacts: ['One of Aaron’s favorite sports is baseball, and he visits one new major league park every year. The last few years have included trips to Phoenix and Oakland to see their ballparks.']
}), Object.assign(new TeamMember(), {
  name: 'Adam Shank',
  title: 'Application Support Specialist',
  imageSrc: 'Adam Shank.jpg',
  bio: ['Adam Shank is an Application Support Specialist for the CAOLA Helpdesk.  Adam assists students and school representatives with course questions within the CAOLA platform, as well as prepares and manages CAOLA student issued laptops and devices.'],
  funFacts: ['Adam flew for the first time in November 2018.']
}), Object.assign(new TeamMember(), {
  name: 'Matthew Brightbill',
  title: 'Application Support Specialist',
  imageSrc: 'Matt Brightbill.jpg',
  bio: ['Matthew Brightbill is one of the application support specialists for the CAOLA Program. In this role, Matt supports IU’s and school districts with any technical related concerns that students or district personnel may have while using the CAOLA platform.'],
  funFacts: ['Matt was a cyber-school student throughout much of his middle school and high school career.  He also did many courses online in college as well.']
})];
window.onload = init;

function init() {
  var appDiv = document.getElementById('our-team');
  appDiv.innerHTML = "<div id=\"team\">" + renderTeam(teamMembers) + "</div>";
  var cards = document.getElementsByClassName('team-member');
  Array.from(cards).forEach(function (card) {
    card.addEventListener('mouseenter', function (e) {
      toBack(card);
    });
    card.addEventListener('mouseover', function (e) {
      toBack(card);
    });
    card.addEventListener('mouseleave', function (e) {
      toFront(card);
    });
    card.addEventListener('click', function (e) {
      card.classList.toggle('flipped');
    });
  });
}

function toBack(e) {
  var card = e.children[1];
  card.classList.add('flipped');
  card.classList.add('flipping');
  setTimeout(function () {
    card.classList.remove('flipping');
  }, 800);
}

function toFront(e) {
  var card = e.children[1];
  var timer = setInterval(function () {
    if (!card.classList.contains('flipping')) {
      card.classList.remove('flipped');
      clearInterval(timer);
    }
  }, 300);
}
},{"./style.css":"style.css"}],"../../Users/cgelbaugh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56620" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/cgelbaugh/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/about-us.77de5100.js.map