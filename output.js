//Wed Aug 14 2024 20:15:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("今日越城");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ao) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ar) {
      return typeof ar;
    } : function (ar) {
      return ar && "function" == typeof Symbol && ar.constructor === Symbol && ar !== Symbol.prototype ? "symbol" : typeof ar;
    };
    return b(ao);
  }
  function c(ao, ap) {
    var as = "undefined" != typeof Symbol && ao[Symbol.iterator] || ao["@@iterator"];
    if (!as) {
      if (Array.isArray(ao) || (as = g(ao)) || ap && ao && "number" == typeof ao.length) {
        as && (ao = as);
        var at = 0,
          au = function () {};
        return {
          s: au,
          n: function () {
            var aB = {};
            aB.done = !0;
            return at >= ao.length ? aB : {
              done: !1,
              value: ao[at++]
            };
          },
          e: function (aB) {
            throw aB;
          },
          f: au
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var av,
      aw = !0,
      ax = !1;
    return {
      s: function () {
        as = as.call(ao);
      },
      n: function () {
        var aB = as.next();
        aw = aB.done;
        return aB;
      },
      e: function (aB) {
        ax = !0;
        av = aB;
      },
      f: function () {
        try {
          aw || null == as.return || as.return();
        } finally {
          if (ax) {
            throw av;
          }
        }
      }
    };
  }
  function d(ao, ap) {
    return j(ao) || i(ao, ap) || g(ao, ap) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(ao, ap) {
    if (ao) {
      if ("string" == typeof ao) {
        return h(ao, ap);
      }
      var aq = {}.toString.call(ao).slice(8, -1);
      "Object" === aq && ao.constructor && (aq = ao.constructor.name);
      return "Map" === aq || "Set" === aq ? Array.from(ao) : "Arguments" === aq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aq) ? h(ao, ap) : void 0;
    }
  }
  function h(ao, ap) {
    (null == ap || ap > ao.length) && (ap = ao.length);
    for (var aq = 0, ar = Array(ap); aq < ap; aq++) {
      ar[aq] = ao[aq];
    }
    return ar;
  }
  function i(ao, ap) {
    var ar = null == ao ? null : "undefined" != typeof Symbol && ao[Symbol.iterator] || ao["@@iterator"];
    if (null != ar) {
      var as,
        at,
        au,
        av,
        aw = [],
        ax = !0,
        ay = !1;
      try {
        if (au = (ar = ar.call(ao)).next, 0 === ap) {
          if (Object(ar) !== ar) {
            return;
          }
          ax = !1;
        } else {
          for (; !(ax = (as = au.call(ar)).done) && (aw.push(as.value), aw.length !== ap); ax = !0) {}
        }
      } catch (aB) {
        ay = !0;
        at = aB;
      } finally {
        try {
          if (!ax && null != ar.return && (av = ar.return(), Object(av) !== av)) {
            return;
          }
        } finally {
          if (ay) {
            throw at;
          }
        }
      }
      return aw;
    }
  }
  function j(ao) {
    if (Array.isArray(ao)) {
      return ao;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return aq;
    };
    var ap,
      aq = {},
      ar = Object.prototype,
      as = ar.hasOwnProperty,
      at = Object.defineProperty || function (aV, aW, aX) {
        aV[aW] = aX.value;
      },
      au = "function" == typeof Symbol ? Symbol : {},
      av = au.iterator || "@@iterator",
      aw = au.asyncIterator || "@@asyncIterator",
      ax = au.toStringTag || "@@toStringTag";
    function ay(aV, aW, aX) {
      var aY = {
        value: aX,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aV, aW, aY);
      return aV[aW];
    }
    try {
      ay({}, "");
    } catch (aW) {
      ay = function (aY, aZ, b0) {
        return aY[aZ] = b0;
      };
    }
    function az(aY, aZ, b0, b1) {
      var b2 = aZ && aZ.prototype instanceof aG ? aZ : aG,
        b3 = Object.create(b2.prototype),
        b4 = new aT(b1 || []);
      at(b3, "_invoke", {
        value: aP(aY, b0, b4)
      });
      return b3;
    }
    function aA(aY, aZ, b0) {
      try {
        return {
          type: "normal",
          arg: aY.call(aZ, b0)
        };
      } catch (b4) {
        var b1 = {};
        b1.type = "throw";
        b1.arg = b4;
        return b1;
      }
    }
    aq.wrap = az;
    var aB = "suspendedStart",
      aC = "suspendedYield",
      aD = "executing",
      aE = "completed",
      aF = {};
    function aG() {}
    function aH() {}
    function aI() {}
    var aJ = {};
    ay(aJ, av, function () {
      return this;
    });
    var aK = Object.getPrototypeOf,
      aL = aK && aK(aK(aU([])));
    aL && aL !== ar && as.call(aL, av) && (aJ = aL);
    aI.prototype = aG.prototype = Object.create(aJ);
    var aM = aI.prototype;
    function aN(aY) {
      ["next", "throw", "return"].forEach(function (b1) {
        ay(aY, b1, function (b2) {
          return this._invoke(b1, b2);
        });
      });
    }
    function aO(aY, aZ) {
      function b2(b3, b4, b5, b6) {
        var b8 = aA(aY[b3], aY, b4);
        if ("throw" !== b8.type) {
          var b9 = b8.arg,
            ba = b9.value;
          return ba && "object" == b(ba) && as.call(ba, "__await") ? aZ.resolve(ba.__await).then(function (bc) {
            b2("next", bc, b5, b6);
          }, function (bc) {
            b2("throw", bc, b5, b6);
          }) : aZ.resolve(ba).then(function (bc) {
            b9.value = bc;
            b5(b9);
          }, function (bc) {
            return b2("throw", bc, b5, b6);
          });
        }
        b6(b8.arg);
      }
      var b1;
      at(this, "_invoke", {
        value: function (b3, b4) {
          function b7() {
            return new aZ(function (b9, ba) {
              b2(b3, b4, b9, ba);
            });
          }
          return b1 = b1 ? b1.then(b7, b7) : b7();
        }
      });
    }
    function aP(aY, aZ, b0) {
      var b2 = aB;
      return function (b4, b5) {
        if (b2 === aD) {
          throw Error("Generator is already running");
        }
        if (b2 === aE) {
          if ("throw" === b4) {
            throw b5;
          }
          var b7 = {
            value: ap,
            done: !0
          };
          return b7;
        }
        for (b0.method = b4, b0.arg = b5;;) {
          var b8 = b0.delegate;
          if (b8) {
            var b9 = aQ(b8, b0);
            if (b9) {
              if (b9 === aF) {
                continue;
              }
              return b9;
            }
          }
          if ("next" === b0.method) {
            b0.sent = b0._sent = b0.arg;
          } else {
            if ("throw" === b0.method) {
              if (b2 === aB) {
                throw b2 = aE, b0.arg;
              }
              b0.dispatchException(b0.arg);
            } else {
              "return" === b0.method && b0.abrupt("return", b0.arg);
            }
          }
          b2 = aD;
          var ba = aA(aY, aZ, b0);
          if ("normal" === ba.type) {
            if (b2 = b0.done ? aE : aC, ba.arg === aF) {
              continue;
            }
            var bb = {};
            bb.value = ba.arg;
            bb.done = b0.done;
            return bb;
          }
          "throw" === ba.type && (b2 = aE, b0.method = "throw", b0.arg = ba.arg);
        }
      };
    }
    function aQ(aY, aZ) {
      var b2 = aZ.method,
        b3 = aY.iterator[b2];
      if (b3 === ap) {
        aZ.delegate = null;
        "throw" === b2 && aY.iterator.return && (aZ.method = "return", aZ.arg = ap, aQ(aY, aZ), "throw" === aZ.method) || "return" !== b2 && (aZ.method = "throw", aZ.arg = new TypeError("The iterator does not provide a '" + b2 + "' method"));
        return aF;
      }
      var b4 = aA(b3, aY.iterator, aZ.arg);
      if ("throw" === b4.type) {
        aZ.method = "throw";
        aZ.arg = b4.arg;
        aZ.delegate = null;
        return aF;
      }
      var b5 = b4.arg;
      return b5 ? b5.done ? (aZ[aY.resultName] = b5.value, aZ.next = aY.nextLoc, "return" !== aZ.method && (aZ.method = "next", aZ.arg = ap), aZ.delegate = null, aF) : b5 : (aZ.method = "throw", aZ.arg = new TypeError("iterator result is not an object"), aZ.delegate = null, aF);
    }
    function aR(aY) {
      var aZ = {
        tryLoc: aY[0]
      };
      var b0 = aZ;
      1 in aY && (b0.catchLoc = aY[1]);
      2 in aY && (b0.finallyLoc = aY[2], b0.afterLoc = aY[3]);
      this.tryEntries.push(b0);
    }
    function aS(aY) {
      var b0 = aY.completion || {};
      b0.type = "normal";
      delete b0.arg;
      aY.completion = b0;
    }
    function aT(aY) {
      var aZ = {
        tryLoc: "root"
      };
      this.tryEntries = [aZ];
      aY.forEach(aR, this);
      this.reset(!0);
    }
    function aU(aY) {
      if (aY || "" === aY) {
        var b0 = aY[av];
        if (b0) {
          return b0.call(aY);
        }
        if ("function" == typeof aY.next) {
          return aY;
        }
        if (!isNaN(aY.length)) {
          var b1 = -1,
            b2 = function b5() {
              for (; ++b1 < aY.length;) {
                if (as.call(aY, b1)) {
                  b5.value = aY[b1];
                  b5.done = !1;
                  return b5;
                }
              }
              b5.value = ap;
              b5.done = !0;
              return b5;
            };
          return b2.next = b2;
        }
      }
      throw new TypeError(b(aY) + " is not iterable");
    }
    aH.prototype = aI;
    at(aM, "constructor", {
      value: aI,
      configurable: !0
    });
    at(aI, "constructor", {
      value: aH,
      configurable: !0
    });
    aH.displayName = ay(aI, ax, "GeneratorFunction");
    aq.isGeneratorFunction = function (aY) {
      var aZ = "function" == typeof aY && aY.constructor;
      return !!aZ && (aZ === aH || "GeneratorFunction" === (aZ.displayName || aZ.name));
    };
    aq.mark = function (aY) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aY, aI) : (aY.__proto__ = aI, ay(aY, ax, "GeneratorFunction"));
      aY.prototype = Object.create(aM);
      return aY;
    };
    aq.awrap = function (aY) {
      var aZ = {
        __await: aY
      };
      return aZ;
    };
    aN(aO.prototype);
    ay(aO.prototype, aw, function () {
      return this;
    });
    aq.AsyncIterator = aO;
    aq.async = function (aY, aZ, b0, b1, b2) {
      void 0 === b2 && (b2 = Promise);
      var b4 = new aO(az(aY, aZ, b0, b1), b2);
      return aq.isGeneratorFunction(aZ) ? b4 : b4.next().then(function (b6) {
        return b6.done ? b6.value : b4.next();
      });
    };
    aN(aM);
    ay(aM, ax, "Generator");
    ay(aM, av, function () {
      return this;
    });
    ay(aM, "toString", function () {
      return "[object Generator]";
    });
    aq.keys = function (aY) {
      var aZ = Object(aY),
        b0 = [];
      for (var b1 in aZ) b0.push(b1);
      b0.reverse();
      return function b2() {
        for (; b0.length;) {
          var b4 = b0.pop();
          if (b4 in aZ) {
            b2.value = b4;
            b2.done = !1;
            return b2;
          }
        }
        b2.done = !0;
        return b2;
      };
    };
    aq.values = aU;
    aT.prototype = {
      constructor: aT,
      reset: function (aY) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ap, this.done = !1, this.delegate = null, this.method = "next", this.arg = ap, this.tryEntries.forEach(aS), !aY) {
          for (var aZ in this) "t" === aZ.charAt(0) && as.call(this, aZ) && !isNaN(+aZ.slice(1)) && (this[aZ] = ap);
        }
      },
      stop: function () {
        this.done = !0;
        var aY = this.tryEntries[0].completion;
        if ("throw" === aY.type) {
          throw aY.arg;
        }
        return this.rval;
      },
      dispatchException: function (aY) {
        if (this.done) {
          throw aY;
        }
        var b0 = this;
        function b6(b7, b8) {
          b3.type = "throw";
          b3.arg = aY;
          b0.next = b7;
          b8 && (b0.method = "next", b0.arg = ap);
          return !!b8;
        }
        for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
          var b2 = this.tryEntries[b1],
            b3 = b2.completion;
          if ("root" === b2.tryLoc) {
            return b6("end");
          }
          if (b2.tryLoc <= this.prev) {
            var b4 = as.call(b2, "catchLoc"),
              b5 = as.call(b2, "finallyLoc");
            if (b4 && b5) {
              if (this.prev < b2.catchLoc) {
                return b6(b2.catchLoc, !0);
              }
              if (this.prev < b2.finallyLoc) {
                return b6(b2.finallyLoc);
              }
            } else {
              if (b4) {
                if (this.prev < b2.catchLoc) {
                  return b6(b2.catchLoc, !0);
                }
              } else {
                if (!b5) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < b2.finallyLoc) {
                  return b6(b2.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aY, aZ) {
        for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
          var b2 = this.tryEntries[b1];
          if (b2.tryLoc <= this.prev && as.call(b2, "finallyLoc") && this.prev < b2.finallyLoc) {
            var b3 = b2;
            break;
          }
        }
        b3 && ("break" === aY || "continue" === aY) && b3.tryLoc <= aZ && aZ <= b3.finallyLoc && (b3 = null);
        var b4 = b3 ? b3.completion : {};
        b4.type = aY;
        b4.arg = aZ;
        return b3 ? (this.method = "next", this.next = b3.finallyLoc, aF) : this.complete(b4);
      },
      complete: function (aY, aZ) {
        if ("throw" === aY.type) {
          throw aY.arg;
        }
        "break" === aY.type || "continue" === aY.type ? this.next = aY.arg : "return" === aY.type ? (this.rval = this.arg = aY.arg, this.method = "return", this.next = "end") : "normal" === aY.type && aZ && (this.next = aZ);
        return aF;
      },
      finish: function (aY) {
        for (var aZ = this.tryEntries.length - 1; aZ >= 0; --aZ) {
          var b0 = this.tryEntries[aZ];
          if (b0.finallyLoc === aY) {
            this.complete(b0.completion, b0.afterLoc);
            aS(b0);
            return aF;
          }
        }
      },
      catch: function (aY) {
        for (var b0 = this.tryEntries.length - 1; b0 >= 0; --b0) {
          var b1 = this.tryEntries[b0];
          if (b1.tryLoc === aY) {
            var b2 = b1.completion;
            if ("throw" === b2.type) {
              var b3 = b2.arg;
              aS(b1);
            }
            return b3;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aY, aZ, b0) {
        this.delegate = {
          iterator: aU(aY),
          resultName: aZ,
          nextLoc: b0
        };
        "next" === this.method && (this.arg = ap);
        return aF;
      }
    };
    return aq;
  }
  function l(ao, ap, aq, ar, as, at, au) {
    try {
      var av = ao[at](au),
        aw = av.value;
    } catch (az) {
      return void aq(az);
    }
    av.done ? ap(aw) : Promise.resolve(aw).then(ar, as);
  }
  function m(ao) {
    return function () {
      var aq = this,
        ar = arguments;
      return new Promise(function (as, at) {
        var av = ao.apply(aq, ar);
        function aw(ay) {
          l(av, as, at, aw, ax, "next", ay);
        }
        function ax(ay) {
          l(av, as, at, aw, ax, "throw", ay);
        }
        aw(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.YueCheng : $.getdata("YueCheng")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    p = ($.isNode() ? process.env.YueCheng_Ua : $.getdata("YueCheng_Ua")) || "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0";
  window = {};
  var q = void 0,
    r = "",
    s = "",
    t = "",
    u = "31",
    v = "",
    w = "48",
    x = "FR*r!isE5W",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "",
    D = "",
    E = "",
    F = "",
    G = "",
    H = "K8tbWP2J0x3uCITGYEhL",
    I = "35c782a2",
    J = "",
    K = "",
    L = "",
    M = "";
  function N() {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function ao() {
      var aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv;
      return k().wrap(function bw(bx) {
        for (;;) {
          switch (bx.prev = bx.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                bx.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bx.next = 5;
              return am("先去boxjs填写账号密码");
            case 5:
              return bx.abrupt("return");
            case 6:
              bx.next = 8;
              return ak();
            case 8:
              q = bx.sent;
              aq = n.split(" ");
              ar = c(aq);
              bx.prev = 11;
              ar.s();
            case 13:
              if ((as = ar.n()).done) {
                bx.next = 307;
                break;
              }
              at = as.value;
              console.log("随机生成UA");
              au = ai();
              C = au.ua;
              D = au.commonUa;
              E = au.uuid;
              console.log(C);
              console.log(D);
              y = at.split("&")[0];
              z = at.split("&")[1];
              A = at.split("&")[2];
              B = at.split("&")[3] || y;
              console.log("用户：".concat(y, "开始任务"));
              console.log("获取sessionId");
              bx.next = 30;
              return V("/api/account/init");
            case 30:
              av = bx.sent;
              t = av.data.session.id;
              console.log(t);
              console.log("获取signature_key");
              bx.next = 36;
              return P("/web/init?client_id=".concat(w));
            case 36:
              aw = bx.sent;
              r = aw.data.client.signature_key;
              console.log(r);
              console.log("获取code");
              bx.next = 42;
              return R("/web/oauth/credential_auth");
            case 42:
              if (ax = bx.sent, ax.data) {
                bx.next = 46;
                break;
              }
              console.log(ax.message);
              return bx.abrupt("continue", 305);
            case 46:
              ay = ax.data.authorization_code.code;
              console.log(ay);
              console.log("登录");
              bx.next = 51;
              return V("/api/zbtxz/login", "check_token=&code=".concat(ay, "&token=&type=-1&union_id="));
            case 51:
              if (az = bx.sent, console.log("登录成功"), v = az.data.session.account_id, t = az.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), F) {
                bx.next = 65;
                break;
              }
              bx.next = 61;
              return T("/api/minus1floor/config");
            case 61:
              aA = bx.sent;
              aB = /\/m-study-yuecheng\/home\?id=(\d+)/;
              aC = JSON.stringify(aA).match(aB);
              aC && (F = aC[1]);
            case 65:
              if (!F) {
                bx.next = 179;
                break;
              }
              var bz = {};
              bz.debug = 0;
              bz.userId = "";
              console.log(F);
              console.log("获取key和token");
              bx.next = 70;
              return X("/api/member/login", bz);
            case 70:
              aD = bx.sent;
              I = aD.data.key;
              J = "Bearer " + aD.data.token;
              console.log(I);
              console.log(J);
              console.log("获取抽奖id");
              bx.next = 78;
              return Z("/api/study/detail?id=".concat(F), {
                id: F
              });
            case 78:
              aE = bx.sent;
              aF = aE.data.lottery.lottery_id;
              console.log(aF);
              console.log("开始阅读");
              aG = c(aE.data.levels);
              bx.prev = 83;
              aG.s();
            case 85:
              if ((aH = aG.n()).done) {
                bx.next = 123;
                break;
              }
              aI = aH.value;
              bx.next = 89;
              return Z("/api/study/level?id=".concat(aI.id), {
                id: aI.id
              });
            case 89:
              if (aJ = bx.sent, console.log(aJ.data.level.name), aJ.data.level.task_num != aJ.data.completedTasks.length) {
                bx.next = 94;
                break;
              }
              console.log("已完成");
              return bx.abrupt("continue", 121);
            case 94:
              aK = c(aJ.data.tasks);
              bx.prev = 95;
              aK.s();
            case 97:
              if ((aL = aK.n()).done) {
                bx.next = 113;
                break;
              }
              aM = aL.value;
              bx.next = 101;
              return T("/api/article/detail?id=".concat(aM.content_id));
            case 101:
              aN = bx.sent;
              console.log("文章：".concat(aN.data.article.list_title));
              bx.next = 105;
              return T("/api/article/read_time?channel_article_id=".concat(aM.content_id, "&read_time=5938"));
            case 105:
              var bA = {};
              bA.id = aM.id;
              aO = bx.sent;
              console.log("阅读：".concat(aO.message));
              bx.next = 109;
              return X("/api/study/task/complete", bA);
            case 109:
              aP = bx.sent;
              console.log("完成任务：".concat(aP.message));
            case 111:
              bx.next = 97;
              break;
            case 113:
              bx.next = 118;
              break;
            case 115:
              bx.prev = 115;
              bx.t0 = bx.catch(95);
              aK.e(bx.t0);
            case 118:
              bx.prev = 118;
              aK.f();
              return bx.finish(118);
            case 121:
              bx.next = 85;
              break;
            case 123:
              bx.next = 128;
              break;
            case 125:
              bx.prev = 125;
              bx.t1 = bx.catch(83);
              aG.e(bx.t1);
            case 128:
              bx.prev = 128;
              aG.f();
              return bx.finish(128);
            case 131:
              var bB = {};
              bB.id = aF;
              bB.module = "study";
              bx.next = 133;
              return X("/api/lotterybigwheel/_ac_lottery_count", bB);
            case 133:
              aQ = bx.sent;
              console.log("拥有".concat(aQ.data.count, "次抽奖"));
              aR = 0;
            case 136:
              if (!(aR < aQ.data.count)) {
                bx.next = 177;
                break;
              }
              bx.next = 139;
              return X("/api/lotterybigwheel/_ac_lottery", {
                id: aF,
                app_id: H,
                module: "study",
                optionHash: ""
              });
            case 139:
              if (aS = bx.sent, 10000 != aS.code) {
                bx.next = 173;
                break;
              }
              var bC = {};
              bC.activity_id = aF;
              bC.module = "bigWheel";
              console.log(aS.message);
              bx.next = 144;
              return X("/api/captcha/get", bC);
            case 144:
              aT = bx.sent;
              aU = aT.data.jigsawImageUrl;
              aV = aT.data.originalImageUrl;
              console.log("滑块：".concat(aU));
              console.log("背景：".concat(aV));
              aW = aT.data.token;
              aX = aT.data.secretKey;
              console.log("秘钥：".concat(aX));
              bx.next = 154;
              return a9({
                slidingImage: aU,
                backImage: aV
              });
            case 154:
              if (aY = bx.sent, aY) {
                bx.next = 160;
                break;
              }
              console.log("ddddocr服务异常");
              bx.next = 159;
              return am("ddddocr服务异常");
            case 159:
              return bx.abrupt("continue", 174);
            case 160:
              console.log(aY);
              aZ = ac(JSON.stringify({
                x: aY.result,
                y: 5
              }), aX);
              bx.next = 164;
              return X("/api/captcha/check", {
                activity_id: aF,
                module: "bigWheel",
                cap_token: aW,
                point: aZ
              });
            case 164:
              if (b0 = bx.sent, console.log("验证滑块：" + b0.message), "操作成功" != b0.message) {
                bx.next = 171;
                break;
              }
              bx.next = 169;
              return X("/api/lotterybigwheel/_ac_lottery", {
                id: aF,
                app_id: H,
                module: "study",
                optionHash: ""
              });
            case 169:
              aS = bx.sent;
              aS.data.code ? (console.log("抽奖获得：".concat(aS.data.title)), s += "用户：".concat(y, " 抽奖获得：").concat(aS.data.title, "\n")) : (console.log("抽奖获得：".concat(aS.data.tip_title)), s += "用户：".concat(y, " 抽奖获得：").concat(aS.data.tip_title, "\n"));
            case 171:
              bx.next = 174;
              break;
            case 173:
              aS.data.code ? (console.log("抽奖获得：".concat(aS.data.title)), s += "用户：".concat(y, " 抽奖获得：").concat(aS.data.title, "\n")) : (console.log("抽奖获得：".concat(aS.data.tip_title)), s += "用户：".concat(y, " 抽奖获得：").concat(aS.data.tip_title, "\n"));
            case 174:
              aR++;
              bx.next = 136;
              break;
            case 177:
              bx.next = 180;
              break;
            case 179:
              console.log("未匹配到id");
            case 180:
              if (console.log("————————————"), console.log("动动手指赢红包"), console.log("获取readId"), G) {
                bx.next = 190;
                break;
              }
              bx.next = 186;
              return T("/api/minus1floor/config");
            case 186:
              b1 = bx.sent;
              b2 = /\/webDetails\/subject\?id=(\d+)/;
              b3 = JSON.stringify(b1).match(b2);
              b3 && (G = b3[1]);
            case 190:
              if (!G) {
                bx.next = 304;
                break;
              }
              console.log(G);
              bx.next = 194;
              return T("/api/article/detail?id=".concat(G));
            case 194:
              b4 = bx.sent;
              bx.next = 197;
              return T("/api/article/subject_group_list?group_id=".concat(b4.data.article.subject_groups[0].group_id));
            case 197:
              b5 = bx.sent;
              b6 = c(b5.data.article_list);
              bx.prev = 199;
              b6.s();
            case 201:
              if ((b7 = b6.n()).done) {
                bx.next = 294;
                break;
              }
              if (b8 = b7.value, aj(b8.published_at)) {
                bx.next = 205;
                break;
              }
              return bx.abrupt("break", 294);
            case 205:
              console.log("文章：".concat(b8.list_title));
              bx.next = 208;
              return T("/api/article/detail?id=".concat(b8.id));
            case 208:
              if (b9 = bx.sent, ba = b9.data.article.content, bb = ba.match(/id%3D(\d+)%26dbnewopen/), !bb) {
                bx.next = 216;
                break;
              }
              L = bb[1];
              console.log("activityId：".concat(L));
              bx.next = 218;
              break;
            case 216:
              console.log("未匹配到activityId");
              return bx.abrupt("continue", 292);
            case 218:
              console.log("阅读登录");
              bx.next = 221;
              return a1("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(t, "&accountId=").concat(v, "&redirectUrl=https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=").concat(L, "&dbnewopen"));
            case 221:
              bc = bx.sent;
              bd = bc.data;
              K = "";
              bx.next = 226;
              return a5(bd);
            case 226:
              K = bx.sent;
              console.log("获取抽奖key");
              bx.next = 230;
              return a7("https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=".concat(L, "&dbnewopen&from=login&spm=95337.1.1.1"));
            case 230:
              if (be = bx.sent, be) {
                bx.next = 233;
                break;
              }
              return bx.abrupt("continue", 292);
            case 233:
              bx.next = 235;
              return a3("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(L, "&activityType=hdtool&consumerId=").concat(M));
            case 235:
              bf = bx.sent;
              eval(bf.token);
              bg = window[be];
              bx.next = 240;
              return a3("/hdtool/dy/doJoin?dpm=95337.3.1.0&activityId=".concat(L, "&_=").concat(Date.now()), "actId=".concat(L, "&oaId=").concat(L, "&activityType=hdtool&consumerId=").concat(M, "&token=").concat(bg));
            case 240:
              if (bh = bx.sent, !bh.success) {
                bx.next = 289;
                break;
              }
              if (bh.orderId) {
                bx.next = 245;
                break;
              }
              console.log(bh.message);
              return bx.abrupt("continue", 292);
            case 245:
              bi = bh.orderId;
              bj = 0;
            case 247:
              if (0 != bj) {
                bx.next = 287;
                break;
              }
              bx.next = 250;
              return a3("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(bi, "&adslotId="));
            case 250:
              if (bk = bx.sent, bj = bk.result, 0 != bj) {
                bx.next = 256;
                break;
              }
              console.log(bk.message);
              bx.next = 285;
              break;
            case 256:
              if ("thanks" == bk.lottery.type && console.log("谢谢参与"), "alipay" != bk.lottery.type) {
                bx.next = 285;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(bk.lottery.title)), s += "用户：".concat(y, " 抽奖获得支付宝红包：").concat(bk.lottery.title, "\n"), bl = bk.lottery.link, bm = bl.split("?")[1], bn = {}, bo = bm.split("&"), bp = 0, bq = bo.length; bp < bq; bp++) {
                br = bo[bp].split("=");
                bn[br[0]] = br[1];
              }
              if (bs = bn.recordId, !A || !B) {
                bx.next = 284;
                break;
              }
              console.log("获取兑换key");
              bx.next = 270;
              return a7("https://95337.activity-42.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(bs, "&dbnewopen"));
            case 270:
              if (be = bx.sent, be) {
                bx.next = 273;
                break;
              }
              return bx.abrupt("continue", 247);
            case 273:
              bx.next = 275;
              return a3("/ctoken/getToken.do");
            case 275:
              bt = bx.sent;
              eval(bt.token);
              bu = window[be];
              bx.next = 280;
              return a3("/activity/doTakePrize", "alipay=".concat(B, "&realname=").concat(encodeURI(A), "&recordId=").concat(bs, "&token=").concat(bu));
            case 280:
              bv = bx.sent;
              console.log(bv.message);
              bx.next = 285;
              break;
            case 284:
              console.log("请设置支付宝姓名和账号");
            case 285:
              bx.next = 247;
              break;
            case 287:
              bx.next = 290;
              break;
            case 289:
              console.log(bh.message);
            case 290:
              bx.next = 292;
              return $.wait(2000);
            case 292:
              bx.next = 201;
              break;
            case 294:
              bx.next = 299;
              break;
            case 296:
              bx.prev = 296;
              bx.t2 = bx.catch(199);
              b6.e(bx.t2);
            case 299:
              bx.prev = 299;
              b6.f();
              return bx.finish(299);
            case 302:
              bx.next = 305;
              break;
            case 304:
              console.log("未匹配到readId");
            case 305:
              bx.next = 13;
              break;
            case 307:
              bx.next = 312;
              break;
            case 309:
              bx.prev = 309;
              bx.t3 = bx.catch(11);
              ar.e(bx.t3);
            case 312:
              bx.prev = 312;
              ar.f();
              return bx.finish(312);
            case 315:
              if (!s) {
                bx.next = 318;
                break;
              }
              bx.next = 318;
              return am(s);
            case 318:
            case "end":
              return bx.stop();
          }
        }
      }, ao, null, [[11, 309, 312, 315], [83, 125, 128, 131], [95, 115, 118, 121], [199, 296, 299, 302]]);
    }));
    return O.apply(this, arguments);
  }
  function P(ao) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function ap(aq) {
      return k().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://passport.tmuyun.com".concat(aq),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": ag(),
                    "Accept-Encoding": "gzip",
                    "user-agent": C
                  }
                };
                $.get(aw, function () {
                  var az = m(k().mark(function aB(aC, aD, aE) {
                    return k().wrap(function (aH) {
                      for (;;) {
                        switch (aH.prev = aH.next) {
                          case 0:
                            try {
                              aC ? (console.log("".concat(JSON.stringify(aC))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : au(JSON.parse(aE));
                            } catch (aK) {
                              $.logErr(aK, aD);
                            } finally {
                              au();
                            }
                          case 1:
                          case "end":
                            return aH.stop();
                        }
                      }
                    }, aB);
                  }));
                  return function (aC, aD, aE) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return Q.apply(this, arguments);
  }
  function R(ao) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function ao(ap) {
      var ar;
      return k().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              ar = ad();
              return as.abrupt("return", new Promise(function (au) {
                var av = {
                  url: "https://passport.tmuyun.com".concat(ap),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ar.uuid,
                    "X-SIGNATURE": ar.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": C
                  },
                  body: ar.body
                };
                $.post(av, function () {
                  var ax = m(k().mark(function ay(az, aA, aB) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            try {
                              az ? (console.log("".concat(JSON.stringify(az))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : au(JSON.parse(aB));
                            } catch (aD) {
                              $.logErr(aD, aA);
                            } finally {
                              au();
                            }
                          case 1:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return S.apply(this, arguments);
  }
  function T(ao) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function ao(ap) {
      var ar;
      return k().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              ar = af(ap);
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://vapp.tmuyun.com".concat(ap),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ar.time,
                    "X-SESSION-ID": t,
                    "X-REQUEST-ID": ar.uuid,
                    "X-SIGNATURE": ar.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": v,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": D
                  }
                };
                $.get(aw, function () {
                  var ay = m(k().mark(function az(aA, aB, aC) {
                    return k().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !aA) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aC));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aB);
                          case 14:
                            aD.prev = 14;
                            au();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return U.apply(this, arguments);
  }
  function V(ao, ap) {
    return W.apply(this, arguments);
  }
  function W() {
    W = m(k().mark(function ao(ap, aq) {
      var as;
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = af(ap);
              return at.abrupt("return", new Promise(function (av) {
                var aw = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": as.time,
                  "X-SESSION-ID": t,
                  "X-REQUEST-ID": as.uuid,
                  "X-SIGNATURE": as.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": v,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": D
                };
                var ax = {
                  url: "https://vapp.tmuyun.com".concat(ap),
                  headers: aw,
                  body: aq
                };
                $.post(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aF) {
                      for (;;) {
                        switch (aF.prev = aF.next) {
                          case 0:
                            if (aF.prev = 0, !aB) {
                              aF.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aF.next = 9;
                            break;
                          case 6:
                            aF.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aF.next = 14;
                            break;
                          case 11:
                            aF.prev = 11;
                            aF.t0 = aF.catch(0);
                            $.logErr(aF.t0, aC);
                          case 14:
                            aF.prev = 14;
                            av();
                            return aF.finish(14);
                          case 17:
                          case "end":
                            return aF.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ao);
    }));
    return W.apply(this, arguments);
  }
  function X(ao, ap) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = m(k().mark(function ap(aq, ar) {
      var as;
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ae(ar);
              return at.abrupt("return", new Promise(function (av) {
                var aw = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(aq),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": E,
                    "access-auth-id": v,
                    "access-api-signature": as.signature,
                    "access-nonce-str": as.uuid,
                    authorization: J,
                    "access-app-id": H,
                    "access-timestamp": as.time,
                    "access-api-token": t,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ar)
                };
                $.post(aw, function () {
                  var ay = m(k().mark(function az(aA, aB, aC) {
                    return k().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !aA) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aC));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aB);
                          case 14:
                            aD.prev = 14;
                            av();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ao, ap) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = m(k().mark(function ap(aq, ar) {
      var as;
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ae(ar);
              return at.abrupt("return", new Promise(function (av) {
                var aw = {
                  "access-type": "app",
                  "access-module": "study",
                  "access-device-id": E,
                  "access-auth-id": v,
                  "access-api-signature": as.signature,
                  "access-nonce-str": as.uuid,
                  authorization: J,
                  "access-app-id": H,
                  "access-timestamp": as.time,
                  "access-api-token": t,
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                  origin: "https://op-h5.cloud.jinhua.com.cn",
                  "x-requested-with": "com.zjonline.zhuji",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  referer: "https://op-h5.cloud.jinhua.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ax = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(aq),
                  headers: aw
                };
                $.get(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aF) {
                      for (;;) {
                        switch (aF.prev = aF.next) {
                          case 0:
                            if (aF.prev = 0, !aB) {
                              aF.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aF.next = 9;
                            break;
                          case 6:
                            aF.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aF.next = 14;
                            break;
                          case 11:
                            aF.prev = 11;
                            aF.t0 = aF.catch(0);
                            $.logErr(aF.t0, aC);
                          case 14:
                            aF.prev = 14;
                            av();
                            return aF.finish(14);
                          case 17:
                          case "end":
                            return aF.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ao) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = m(k().mark(function ap(aq) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://95337.activity-42.m.duiba.com.cn".concat(aq),
                  headers: {
                    accept: "*/*",
                    "user-agent": p,
                    "x-requested-with": "com.zjonline.yuecheng",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(av, function () {
                  var aw = m(k().mark(function ax(ay, az, aA) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ay) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ay)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aA));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, az);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ax, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ay, az, aA) {
                    return aw.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return a2.apply(this, arguments);
  }
  function a3(ao, ap) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = m(k().mark(function ap(aq, ar) {
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://95337.activity-42.m.duiba.com.cn".concat(aq),
                  headers: {
                    accept: "application/json",
                    "user-agent": p,
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://95337.activity-42.m.duiba.com.cn",
                    cookie: K,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=".concat(L, "&dbnewopen&from=login&spm=95337.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: ar
                };
                $.post(ax, function () {
                  var ay = m(k().mark(function az(aA, aB, aC) {
                    return k().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aA) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aC));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aB);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return a4.apply(this, arguments);
  }
  function a5(ao) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = m(k().mark(function aq(ar) {
      return k().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (au) {
                var aw = {
                  accept: "*/*",
                  "user-agent": p,
                  "x-requested-with": "com.zjonline.yuecheng",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ax = {
                  url: "https:".concat(ar),
                  headers: aw,
                  followRedirect: !1
                };
                $.get(ax, function () {
                  var az = m(k().mark(function aA(aB, aC, aD) {
                    var aE, aF;
                    return k().wrap(function (aG) {
                      for (;;) {
                        switch (aG.prev = aG.next) {
                          case 0:
                            if (aG.prev = 0, !aB) {
                              aG.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aG.next = 10;
                            break;
                          case 6:
                            aG.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (aE = aC.headers["set-cookie"] || aC.headers["Set-Cookie"], aF = 0; aF < aE.length; aF++) {
                                K += aE[aF].split(";")[0] + ";";
                              }
                            } else {
                              K = aC.headers["set-cookie"] || aC.headers["Set-Cookie"];
                              K = ab(K);
                            }
                            au(K);
                          case 10:
                            aG.next = 15;
                            break;
                          case 12:
                            aG.prev = 12;
                            aG.t0 = aG.catch(0);
                            $.logErr(aG.t0, aC);
                          case 15:
                            aG.prev = 15;
                            au();
                            return aG.finish(15);
                          case 18:
                          case "end":
                            return aG.stop();
                        }
                      }
                    }, aA, null, [[0, 12, 15, 18]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, aq);
    }));
    return a6.apply(this, arguments);
  }
  function a7(ao) {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = m(k().mark(function ap(aq) {
      return k().wrap(function as(at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (au) {
                var aw = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": p,
                  "x-requested-with": "com.zjonline.yuecheng",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://95337.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: K
                };
                var ax = {
                  url: aq,
                  headers: aw
                };
                $.get(ax, function () {
                  var aA = m(k().mark(function aB(aC, aD, aE) {
                    var aF, aG, aH, aI;
                    return k().wrap(function aJ(aK) {
                      for (;;) {
                        switch (aK.prev = aK.next) {
                          case 0:
                            if (aK.prev = 0, !aC) {
                              aK.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aC)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aK.next = 22;
                            break;
                          case 6:
                            aK.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (aE) {
                              aK.next = 12;
                              break;
                            }
                            console.log("获取key失败");
                            au("");
                            return aK.abrupt("return");
                          case 12:
                            aF = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aE)[1];
                            eval(aF);
                            aG = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(aG);
                            console.log("获取consumerId");
                            aH = /consumerId:'(\d+)'/;
                            aI = aE.match(aH);
                            M = aI ? aI[1] : "4135312778";
                            console.log(M);
                            au(aG);
                          case 22:
                            aK.next = 27;
                            break;
                          case 24:
                            aK.prev = 24;
                            aK.t0 = aK.catch(0);
                            $.logErr(aK.t0, aD);
                          case 27:
                            aK.prev = 27;
                            au();
                            return aK.finish(27);
                          case 30:
                          case "end":
                            return aK.stop();
                        }
                      }
                    }, aB, null, [[0, 24, 27, 30]]);
                  }));
                  return function (aC, aD, aE) {
                    return aA.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ao) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = m(k().mark(function ap(aq) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(aq)
                };
                $.post(av, function (aw, ax, ay) {
                  try {
                    aw ? (console.log("".concat(JSON.stringify(aw))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : at(JSON.parse(ay));
                  } catch (az) {
                    $.logErr(az, ax);
                  } finally {
                    at();
                  }
                });
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return aa.apply(this, arguments);
  }
  function ab(ao) {
    var ap = ao.split(", "),
      aq = ap.map(function (ar) {
        var as = ar.split(";")[0];
        return as.trim();
      });
    return aq.join(";");
  }
  function ac(ao, ap) {
    CryptoJS = q.createCryptoJS();
    var aq = CryptoJS.enc.Utf8.parse(ap),
      ar = CryptoJS.enc.Utf8.parse(ao),
      as = CryptoJS.AES.encrypt(ar, aq, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return as.toString();
  }
  function ad() {
    var as = new (q.loadJSEncrypt())();
    as.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    z = as.encrypt(z);
    var au = ag(),
      av = "client_id=".concat(w, "&password=").concat(z, "&phone_number=").concat(y),
      aw = "post%%/web/oauth/credential_auth?".concat(av, "%%").concat(au, "%%");
    av = "client_id=".concat(w, "&password=").concat(encodeURIComponent(z), "&phone_number=").concat(y);
    CryptoJS = q.createCryptoJS();
    var aq = CryptoJS.HmacSHA256(aw, r),
      ar = CryptoJS.enc.Hex.stringify(aq);
    var at = {};
    at.uuid = au;
    at.signature = ar;
    at.body = av;
    return at;
  }
  function ae(ao) {
    var aw = ag(),
      ax = Date.now(),
      ay = {
        app_id: H,
        device_id: E,
        nonce_str: aw,
        source_type: "app",
        timestamp: ax,
        auth_id: v,
        token: t
      };
    Object.entries(ao).forEach(function (az) {
      var aA = d(az, 2),
        aB = aA[0],
        aC = aA[1];
      ay[aB] = aC;
    });
    var as = Object.keys(ay).sort(),
      at = as.map(function (az) {
        return "".concat(az, "=").concat(ay[az]);
      }).join("&&");
    at = at + "&&" + I;
    CryptoJS = q.createCryptoJS();
    var av = CryptoJS.SHA256(at).toString();
    var ar = {};
    ar.uuid = aw;
    ar.time = ax;
    ar.signature = av;
    return ar;
  }
  function af(ao) {
    var ap = ag(),
      aq = Date.now();
    ao.indexOf("?") > 0 && (ao = ao.substring(0, ao.indexOf("?")));
    CryptoJS = q.createCryptoJS();
    var ar = CryptoJS.SHA256("".concat(ao, "&&").concat(t, "&&").concat(ap, "&&").concat(aq, "&&").concat(x, "&&").concat(u)).toString(),
      as = {
        uuid: ap,
        time: aq,
        signature: ar
      };
    return as;
  }
  function ag() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ao) {
      var ap = 16 * Math.random() | 0,
        aq = "x" === ao ? ap : 3 & ap | 8;
      return aq.toString(16);
    });
  }
  function ah(ao) {
    return ao[Math.floor(Math.random() * ao.length)];
  }
  function ai() {
    var ao = "1.7.0",
      ap = ag(),
      aq = ah(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ar = "Xiaomi " + aq,
      as = "Android",
      at = "".concat(as.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ao, ";1.0;null;").concat(aq),
      au = "".concat(ao, ";").concat(ap, ";").concat(ar, ";").concat(as, ";").concat("11", ";").concat("Release", ";").concat("6.12.0"),
      av = {
        ua: at,
        commonUa: au,
        uuid: ap
      };
    return av;
  }
  function aj(ao) {
    var ap = new Date(ao),
      aq = new Date();
    return ap.getFullYear() === aq.getFullYear() && ap.getMonth() === aq.getMonth() && ap.getDate() === aq.getDate();
  }
  function ak() {
    return al.apply(this, arguments);
  }
  function al() {
    al = m(k().mark(function ap() {
      var aq;
      return k().wrap(function ar(as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              if (aq = $.getdata("Utils_Code") || "", !aq || !Object.keys(aq).length) {
                as.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(aq);
              return as.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return as.abrupt("return", new Promise(function () {
                var aw = m(k().mark(function ax(ay) {
                  return k().wrap(function az(aA) {
                    for (;;) {
                      switch (aA.prev = aA.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (aC) {
                            $.setdata(aC, "Utils_Code");
                            eval(aC);
                            console.log("✅ Utils加载成功, 请继续");
                            ay(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aA.stop();
                      }
                    }
                  }, ax);
                }));
                return function (ay) {
                  return aw.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return al.apply(this, arguments);
  }
  function am(ao) {
    return an.apply(this, arguments);
  }
  function an() {
    an = m(k().mark(function ap(aq) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              if (!$.isNode()) {
                ar.next = 5;
                break;
              }
              ar.next = 3;
              return notify.sendNotify($.name, aq);
            case 3:
              ar.next = 6;
              break;
            case 5:
              $.msg($.name, "", aq);
            case 6:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return an.apply(this, arguments);
  }
  m(k().mark(function ao() {
    return k().wrap(function (ar) {
      for (;;) {
        switch (ar.prev = ar.next) {
          case 0:
            ar.next = 2;
            return N();
          case 2:
          case "end":
            return ar.stop();
        }
      }
    }, ao);
  }))().catch(function (ap) {
    $.log(ap);
  }).finally(function () {
    $.done({});
  });
})();