//Sat Apr 26 2025 13:46:13 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var sheetNameConfig = "CONFIG";
var sheetNamePush = "PUSH";
var sheetNameEmail = "EMAIL";
var flagSubConfig = 0;
var flagConfig = 0;
var flagPush = 0;
var line = 21;
var message = "";
var messageArray = [];
var messageOnlyError = 0;
var messageNickname = 0;
var messageHeader = [];
var messagePushHeader = pushHeader;
var version = 1;
var token = "";
var userId = "";
var appid = "";
var jsonPush = [{
  name: "bark",
  key: "xxxxxx",
  flag: "0"
}, {
  name: "pushplus",
  key: "xxxxxx",
  flag: "0"
}, {
  name: "ServerChan",
  key: "xxxxxx",
  flag: "0"
}, {
  name: "email",
  key: "xxxxxx",
  flag: "0"
}, {
  name: "dingtalk",
  key: "xxxxxx",
  flag: "0"
}, {
  name: "discord",
  key: "xxxxxx",
  flag: "0"
}];
var jsonEmail = {
  server: "",
  port: "",
  sender: "",
  authorizationCode: ""
};
try {
  var userContent = [[")个02认默(eikooc".split("").reverse().join(""), ")否/是(行执否是".split("").reverse().join(""), ")写填不可(称名号账".split("").reverse().join("")]];
  var configContent = [["工作表的名称", "注备".split("").reverse().join(""), "只推送失败消息（是/否）", "推送昵称（是/否）"], [sheetNameSubConfig, pushHeader, "否", "是"]];
  var qlpushFlag = 0;
  var qlSheet = [];
  var colNum = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"];
  qlConfig = {
    "CONFIG": configContent,
    "SUBCONFIG": userContent
  };
  var posHttp = 0;
  var flagFinish = 0;
  var flagResultFinish = 0;
  var HTTPOverwrite = {
    "get": function get(_0x8a99d9, _0x350907) {
      _0x350907 = _0x350907.headers;
      let _0x1f12ec = userContent.length - qlpushFlag;
      method = "get";
      resp = fetch(_0x8a99d9, {
        "method": method,
        "headers": _0x350907
      }).then(function (_0x2c1fb0) {
        return _0x2c1fb0.text().then(_0xb09c64 => {
          return {
            "status": _0x2c1fb0.status,
            "headers": _0x2c1fb0.headers,
            "text": _0xb09c64,
            "response": _0x2c1fb0,
            "pos": _0x1f12ec
          };
        });
      }).then(function (_0x3872ad) {
        try {
          data = JSON.parse(_0x3872ad.text);
          return {
            "status": _0x3872ad.status,
            "headers": _0x3872ad.headers,
            "json": function _0x352161() {
              return data;
            },
            "text": function _0x29f35f() {
              return _0x3872ad.text;
            },
            "pos": _0x3872ad.pos
          };
        } catch (_0x566df2) {
          return {
            "status": _0x3872ad.status,
            "headers": _0x3872ad.headers,
            "json": null,
            "text": function _0x2fbf50() {
              return _0x3872ad.text;
            },
            "pos": _0x3872ad.pos
          };
        }
      }).then(_0x2c1f58 => {
        _0x1f12ec = _0x2c1f58.pos;
        flagResultFinish = resultHandle(_0x2c1f58, _0x1f12ec);
        if (flagResultFinish == 1) {
          i = _0x1f12ec + 1;
          for (; i <= line; i++) {
            var _0x1cb220 = Application.Range("A" + i).Text;
            var _0x2267f8 = Application.Range("B" + i).Text;
            if (_0x1cb220 == "".split("").reverse().join("")) {
              break;
            }
            if (_0x2267f8 == "是") {
              console.log("🧑 开始执行用户：" + (parseInt(i) - 1));
              flagResultFinish = 0;
              execHandle(_0x1cb220, i);
              break;
            }
          }
        }
        if (_0x1f12ec == userContent.length && flagResultFinish == 1) {
          flagFinish = 1;
        }
        if (qlpushFlag == 0 && flagFinish == 1) {
          console.log("送推起发龙青 \uDE80\uD83D".split("").reverse().join(""));
          message = messageMerge();
          const {
            sendNotify: _0x25bcc
          } = require("sj.yfitoNdnes/.".split("").reverse().join(""));
          _0x25bcc(pushHeader, message);
          qlpushFlag = -100;
        }
      }).catch(_0x203eb4 => {
        console.error(":rorre hcteF".split("").reverse().join(""), _0x203eb4);
      });
    },
    "post": function post(_0x13ae92, _0x5b8821, _0x44b685, _0x55317c) {
      _0x44b685 = _0x44b685.headers;
      contentType = _0x44b685["Content-Type"];
      contentType2 = _0x44b685["content-type"];
      var _0x4db6b5 = "".split("").reverse().join("");
      if (contentType != undefined && contentType != "".split("").reverse().join("") || contentType2 != undefined && contentType2 != "") {
        if (contentType == "dedocnelru-mrof-www-x/noitacilppa".split("").reverse().join("")) {
          console.log("🍳 检测到发送请求体为: 表单格式");
          _0x4db6b5 = dataToFormdata(_0x5b8821);
        } else {
          try {
            console.log("🍳 检测到发送请求体为: JSON格式");
            _0x4db6b5 = JSON.stringify(_0x5b8821);
          } catch {
            console.log("式格单表 :为体求请送发到测检 \uDF73\uD83C".split("").reverse().join(""));
            _0x4db6b5 = _0x5b8821;
          }
        }
      } else {
        console.log("式格NOSJ :为体求请送发到测检 \uDF73\uD83C".split("").reverse().join(""));
        _0x4db6b5 = JSON.stringify(_0x5b8821);
      }
      if (_0x55317c == "get" || _0x55317c == "TEG".split("").reverse().join("")) {
        let _0x326da0 = userContent.length - qlpushFlag;
        method = "get";
        resp = fetch(_0x13ae92, {
          "method": method,
          "headers": _0x44b685
        }).then(function (_0x32ad04) {
          return _0x32ad04.text().then(_0x4570f7 => {
            return {
              "status": _0x32ad04.status,
              "headers": _0x32ad04.headers,
              "text": _0x4570f7,
              "response": _0x32ad04,
              "pos": _0x326da0
            };
          });
        }).then(function (_0x533acc) {
          try {
            _0x5b8821 = JSON.parse(_0x533acc.text);
            return {
              "status": _0x533acc.status,
              "headers": _0x533acc.headers,
              "json": function _0x4c4d29() {
                return _0x5b8821;
              },
              "text": function _0x37f878() {
                return _0x533acc.text;
              },
              "pos": _0x533acc.pos
            };
          } catch (_0x53a77f) {
            return {
              "status": _0x533acc.status,
              "headers": _0x533acc.headers,
              "json": null,
              "text": function _0xe9ffe5() {
                return _0x533acc.text;
              },
              "pos": _0x533acc.pos
            };
          }
        }).then(_0x185f08 => {
          _0x326da0 = _0x185f08.pos;
          flagResultFinish = resultHandle(_0x185f08, _0x326da0);
          if (flagResultFinish == 1) {
            i = _0x326da0 + 1;
            for (; i <= line; i++) {
              var _0x5cc09e = Application.Range("A" + i).Text;
              var _0x5bca1a = Application.Range("B" + i).Text;
              if (_0x5cc09e == "") {
                break;
              }
              if (_0x5bca1a == "是") {
                console.log("🧑 开始执行用户：" + (parseInt(i) - 1));
                flagResultFinish = 0;
                execHandle(_0x5cc09e, i);
                break;
              }
            }
          }
          if (_0x326da0 == userContent.length && flagResultFinish == 1) {
            flagFinish = 1;
          }
          if (qlpushFlag == 0 && flagFinish == 1) {
            console.log("🚀 青龙发起推送");
            message = messageMerge();
            const {
              sendNotify: _0x38f3c8
            } = require("sj.yfitoNdnes/.".split("").reverse().join(""));
            _0x38f3c8(pushHeader, message);
            qlpushFlag = -100;
          }
        }).catch(_0x52f683 => {
          console.error("Fetch error:", _0x52f683);
        });
      } else {
        let _0xaeacf8 = userContent.length - qlpushFlag;
        method = "post";
        resp = fetch(_0x13ae92, {
          "method": method,
          "headers": _0x44b685,
          "body": _0x4db6b5
        }).then(function (_0x1c043a) {
          return _0x1c043a.text().then(_0x52ce21 => {
            return {
              "status": _0x1c043a.status,
              "headers": _0x1c043a.headers,
              "text": _0x52ce21,
              "response": _0x1c043a,
              "pos": _0xaeacf8
            };
          });
        }).then(function (_0x3ae307) {
          try {
            _0x5b8821 = JSON.parse(_0x3ae307.text);
            return {
              "status": _0x3ae307.status,
              "headers": _0x3ae307.headers,
              "json": function _0x5486bd() {
                return _0x5b8821;
              },
              "text": function _0x1d9320() {
                return _0x3ae307.text;
              },
              "pos": _0x3ae307.pos
            };
          } catch (_0x2df6f6) {
            return {
              "status": _0x3ae307.status,
              "headers": _0x3ae307.headers,
              "json": null,
              "text": function _0x4bd139() {
                return _0x3ae307.text;
              },
              "pos": _0x3ae307.pos
            };
          }
        }).then(_0x55afac => {
          _0xaeacf8 = _0x55afac.pos;
          flagResultFinish = resultHandle(_0x55afac, _0xaeacf8);
          if (flagResultFinish == 1) {
            i = _0xaeacf8 + 1;
            for (; i <= line; i++) {
              var _0x51de34 = Application.Range("A" + i).Text;
              var _0x529848 = Application.Range("B" + i).Text;
              if (_0x51de34 == "".split("").reverse().join("")) {
                break;
              }
              if (_0x529848 == "是") {
                console.log("🧑 开始执行用户：" + (parseInt(i) - 1));
                flagResultFinish = 0;
                execHandle(_0x51de34, i);
                break;
              }
            }
          }
          if (_0xaeacf8 == userContent.length && flagResultFinish == 1) {
            flagFinish = 1;
          }
          if (qlpushFlag == 0 && flagFinish == 1) {
            console.log("🚀 青龙发起推送");
            let _0x1c81b5 = messageMerge();
            const {
              sendNotify: _0x542555
            } = require("sj.yfitoNdnes/.".split("").reverse().join(""));
            _0x542555(pushHeader, _0x1c81b5);
            qlpushFlag = -100;
          }
        }).catch(_0x3245cf => {
          console.error(":rorre hcteF".split("").reverse().join(""), _0x3245cf);
        });
      }
    }
  };
  var ApplicationOverwrite = {
    "Range": function Range(_0x17a08b) {
      charFirst = _0x17a08b.substring(0, 1);
      qlRow = _0x17a08b.substring(1, _0x17a08b.length);
      qlCol = 1;
      for (num in colNum) {
        if (colNum[num] == charFirst) {
          break;
        }
        qlCol += 1;
      }
      try {
        result = qlSheet[qlRow - 1][qlCol - 1];
      } catch {
        result = "";
      }
      dict = {
        "Text": result
      };
      return dict;
    },
    "Sheets": {
      "Item": function (_0x3f811c) {
        return {
          "Name": _0x3f811c,
          "Activate": function () {
            flag = 1;
            qlSheet = qlConfig[_0x3f811c];
            if (qlSheet == undefined) {
              qlSheet = qlConfig.SUBCONFIG;
            }
            console.log("：表作工活激龙青 \uDF73\uD83C".split("").reverse().join("") + _0x3f811c);
            return flag;
          }
        };
      }
    }
  };
  var CryptoOverwrite = {
    "createHash": function createHash(_0x2af55c) {
      return {
        "update": function _0xaaf0ad(_0x2cad1b, _0x25d5bc) {
          return {
            "digest": function _0x100f85(_0x45b9f3) {
              return {
                "toUpperCase": function _0xe359a4() {
                  return {
                    "toString": function _0x37ba96() {
                      try {
                        CryptoJS = require("crypto-js");
                        console.log("入引sj-otpyrc行进已统系 ️♻".split("").reverse().join(""));
                      } catch {
                        console.log("❌ 系统无crypto-js，请在NodeJs中安装crypto-js依赖");
                      }
                      md5Hash = CryptoJS.MD5(_0x2cad1b).toString();
                      md5Hash = md5Hash.toUpperCase();
                      return md5Hash;
                    }
                  };
                },
                "toString": function _0xfcf985() {
                  try {
                    CryptoJS = require("crypto-js");
                    console.log("♻️ 系统已进行crypto-js引入");
                  } catch {
                    console.log("❌ 系统无crypto-js，请在NodeJs中安装crypto-js依赖");
                  }
                  md5Hash = CryptoJS.MD5(_0x2cad1b).toString();
                  return md5Hash;
                }
              };
            }
          };
        }
      };
    }
  };
  function dataToFormdata(_0x1073d4) {
    result = "";
    values = Object.values(_0x1073d4);
    values.forEach((_0x46e3bd, _0xe0a588) => {
      key = Object.keys(_0x1073d4)[_0xe0a588];
      content = key + "=" + _0x46e3bd + "&";
      result += content;
    });
    result = result.substring(0, result.length - 1);
    return result;
  }
  function cookiesTocookieMin(_0x3ec766) {
    let _0x10c2b9 = _0x3ec766;
    let _0x357077 = [];
    var _0x527229 = _0x10c2b9.split("#");
    for (let _0x30e526 in _0x527229) {
      _0x357077[_0x30e526] = _0x527229[_0x30e526];
    }
    return _0x357077;
  }
  function checkEscape(_0x24ae63, _0x2b0863) {
    cookieArrynew = [];
    j = 0;
    for (i = 0; i < _0x24ae63.length; i++) {
      result = _0x24ae63[i];
      lastChar = result.substring(result.length - 1, result.length);
      if (lastChar == "\\" && i <= _0x24ae63.length - 2) {
        console.log("🍳 检测到转义字符");
        cookieArrynew[j] = result.substring(0, result.length - 1) + _0x2b0863 + _0x24ae63[parseInt(i) + 1];
        i += 1;
      } else {
        cookieArrynew[j] = _0x24ae63[i];
      }
      j += 1;
    }
    return cookieArrynew;
  }
  function cookiesTocookie(_0x30fdb1) {
    let _0x7eefa3 = _0x30fdb1;
    let _0x5e4f35 = [];
    let _0x3e1587 = [];
    _0x7eefa3 = _0x7eefa3.trim();
    let _0x105de4 = _0x7eefa3.split("\n");
    _0x105de4 = _0x105de4.filter(_0x5eac64 => _0x5eac64.trim() !== "");
    if (_0x105de4.length == 1) {
      _0x105de4 = _0x7eefa3.split("@");
      _0x105de4 = checkEscape(_0x105de4, "@");
    }
    for (let _0x171b55 in _0x105de4) {
      _0x3e1587 = [];
      let _0x401143 = Number(_0x171b55) + 1;
      _0x5e4f35 = cookiesTocookieMin(_0x105de4[_0x171b55]);
      _0x5e4f35 = checkEscape(_0x5e4f35, "#");
      _0x3e1587.push(_0x5e4f35[0]);
      _0x3e1587.push("是");
      _0x3e1587.push("称昵".split("").reverse().join("") + _0x401143);
      if (_0x5e4f35.length > 0) {
        for (let _0xd30881 = 3; _0xd30881 < _0x5e4f35.length + 2; _0xd30881++) {
          _0x3e1587.push(_0x5e4f35[_0xd30881 - 2]);
        }
      }
      userContent.push(_0x3e1587);
    }
    qlpushFlag = userContent.length - 1;
  }
  var qlSwitch = 0;
  try {
    qlSwitch = process.env[sheetNameSubConfig];
    qlSwitch = 1;
  } catch {
    qlSwitch = 0;
    console.log("♻️ 当前环境为金山文档");
    console.log("♻️ 开始适配金山文档，执行金山文档代码");
  }
  if (qlSwitch) {
    console.log("♻️ 当前环境为青龙");
    console.log("♻️ 开始适配青龙环境，执行青龙代码");
    try {
      fetch = require("node-fetch");
      console.log("入引hctef-edon行进已，hctef无统系 ️♻".split("").reverse().join(""));
    } catch {
      console.log("♻️ 系统已有原生fetch");
    }
    Crypto = CryptoOverwrite;
    let flagwarn = 0;
    const a = "da11990c";
    const b = "0b854f216a9662fb".split("").reverse().join("");
    encode = getsign(logo);
    let len = encode.length;
    if (a + "90ecd4ce".split("").reverse().join("") == encode.substring(0, len / 2) && b == encode.substring(16, len)) {
      console.log("✨ " + logo);
      cookies = process.env[sheetNameSubConfig];
    } else {
      console.log("🔨 请使用艾默库代码 : https://github.com/imoki/sign_script");
      flagwarn = 1;
    }
    let flagwarn2 = 1;
    const welcome = "edoc UKOM esu ot emocleW".split("").reverse().join("");
    const mo = welcome.slice(15, 17).toLowerCase();
    const ku = welcome.split(" ")[3].slice(2, 4);
    if (mo.substring(0, 1) == "m") {
      if (ku == "KU") {
        if (mo.substring(1, 2) == String.fromCharCode(111)) {
          cookiesTocookie(cookies);
          flagwarn2 = 0;
          console.log("💗 " + welcome);
        }
      }
    }
    let t = Date.now();
    if (t > 1718777153678) {
      console.log("🧾 使用教程请查看仓库notion链接");
      Application = ApplicationOverwrite;
    } else {
      flagwarn = 1;
    }
    if (Date.now() < 2000000000000) {
      console.log("🤝 欢迎各种形式的贡献");
      HTTP = HTTPOverwrite;
    } else {
      flagwarn2 = 1;
    }
    if (flagwarn == 1 || flagwarn2 == 1) {
      console.log("🔨 请使用艾默库代码 : https://github.com/imoki/sign_script");
    }
  }
} catch {
  console.log("❌ 环境存在问题，请检查是否配置好了对应依赖及环境变量");
}
function checkVesion() {
  try {
    let temp = Application.Range("A1").Text;
    Application.Range("A1").Value = temp;
    console.log("😶‍🌫️ 检测到当前airscript版本为1.0，进行1.0适配");
  } catch {
    console.log("😶‍🌫️ 检测到当前airscript版本为2.0，进行2.0适配");
    version = 2;
  }
}
function getDate() {
  let currentDate = new Date();
  currentDate = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1).toString() + "/" + currentDate.getDate().toString();
  return currentDate;
}
function writeMessageQueue(message) {
  let todayDate = getDate();
  flagConfig = ActivateSheet(sheetNameConfig);
  if (flagConfig == 1) {
    console.log("✨ 开始将结果写入主配置表");
    for (let i = 2; i <= 100; i++) {
      if (version == 1) {
        if (Application.Range("A" + (i + 2)).Value == sheetNameSubConfig) {
          Application.Range("F" + (i + 2)).Value = todayDate;
          Application.Range("G" + (i + 2)).Value = message;
          console.log("✨ 写入结果完成");
          break;
        }
      } else {
        if (Application.Range("A" + (i + 2)).Value2 == sheetNameSubConfig) {
          Application.Range("F" + (i + 2)).Value2 = todayDate;
          Application.Range("G" + (i + 2)).Value2 = message;
          console.log("✨ 写入结果完成");
          break;
        }
      }
    }
  }
}
function push(message) {
  writeMessageQueue(message);
}
function bark(message, key) {
  if (key != "") {
    message = messagePushHeader + message;
    message = encodeURIComponent(message);
    BARK_ICON = "https://s21.ax1x.com/2024/06/23/pkrUkfe.png";
    let url = "https://api.day.app/" + key + "/" + message + "/" + "?icon=" + BARK_ICON;
    let resp = HTTP.get(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    sleep(5000);
  }
}
function pushplus(message, key) {
  if (key != "") {
    message = encodeURIComponent(message);
    url = "http://www.pushplus.plus/send?token=" + key + "&content=" + message + "&title=" + pushHeader;
    let resp = HTTP.fetch(url, {
      method: "get"
    });
    sleep(5000);
  }
}
function serverchan(message, key) {
  if (key != "") {
    url = "https://sctapi.ftqq.com/" + key + ".send" + "?title=" + messagePushHeader + "&desp=" + message;
    let resp = HTTP.fetch(url, {
      method: "get"
    });
    sleep(5000);
  }
}
function email(message) {
  var myDate = new Date();
  var data_time = myDate.toLocaleDateString();
  let server = "";
  let port = parseInt("");
  let sender = "";
  let authorizationCode = "";
  let mailer;
  mailer = SMTP.login({
    host: server,
    port: port,
    username: sender,
    password: authorizationCode,
    secure: true
  });
  mailer.send({
    from: pushHeader + "<" + sender + ">",
    to: sender,
    subject: pushHeader + " - " + data_time,
    text: message
  });
  console.log("🍳 已发送邮件");
  sleep(5000);
}
function emailConfig() {
  console.log("🍳 开始读取邮箱配置");
  let length = jsonPush.length;
  let name;
  for (let i = 0; i < length; i++) {
    name = jsonPush[i].name;
    if (name == "email") {
      if (jsonPush[i].flag == 1) {
        let flag = ActivateSheet(sheetNameEmail);
        if (flag == 1) {
          console.log("🍳 开始读取邮箱表");
          for (let i = 2; i <= 2; i++) {
            jsonEmail.server = Application.Range("A" + i).Text;
            jsonEmail.port = Application.Range("B" + i).Text;
            jsonEmail.sender = Application.Range("C" + i).Text;
            jsonEmail.authorizationCode = Application.Range("D" + i).Text;
            if (Application.Range("A" + i).Text == "") {
              break;
            }
          }
        }
        break;
      }
    }
  }
}
function dingtalk(message, key) {
  message = messagePushHeader + message;
  let url = "https://oapi.dingtalk.com/robot/send?access_token=" + key;
  let resp = HTTP.post(url, {
    msgtype: "text",
    text: {
      content: message
    }
  });
  sleep(5000);
}
function discord(message, key) {
  message = messagePushHeader + message;
  let url = key;
  let resp = HTTP.post(url, {
    content: message
  });
  sleep(5000);
}
checkVesion();
flagConfig = ActivateSheet(sheetNameConfig);
if (flagConfig == 1) {
  console.log("🍳 开始读取主配置表");
  let name;
  let onlyError;
  let nickname;
  for (let i = 2; i <= 100; i++) {
    name = Application.Range("A" + i).Text;
    onlyError = Application.Range("C" + i).Text;
    nickname = Application.Range("D" + i).Text;
    if (name == "") {
      break;
    }
    if (name == sheetNameSubConfig) {
      if (onlyError == "是") {
        messageOnlyError = 1;
        console.log("🍳 只推送错误消息");
      }
      if (nickname == "是") {
        messageNickname = 1;
        console.log("🍳 单元格用昵称替代");
      }
      break;
    }
  }
}
flagPush = ActivateSheet(sheetNamePush);
if (flagPush == 1) {
  console.log("🍳 开始读取推送工作表");
  let pushName;
  let pushKey;
  let pushFlag;
  for (let i = 2; i <= line; i++) {
    pushName = Application.Range("A" + i).Text;
    pushKey = Application.Range("B" + i).Text;
    pushFlag = Application.Range("C" + i).Text;
    if (pushName == "") {
      break;
    }
    jsonPushHandle(pushName, pushFlag, pushKey);
  }
}
emailConfig();
flagSubConfig = ActivateSheet(sheetNameSubConfig);
if (flagSubConfig == 1) {
  console.log("🍳 开始读取分配置表");
  if (qlSwitch != 1) {
    for (let i = 2; i <= line; i++) {
      var cookie = Application.Range("A" + i).Text;
      var exec = Application.Range("B" + i).Text;
      if (cookie == "") {
        break;
      }
      if (exec == "是") {
        execHandle(cookie, i);
      }
    }
    message = messageMerge();
    push(message);
  } else {
    for (let i = 2; i <= line; i++) {
      var cookie = Application.Range("A" + i).Text;
      var exec = Application.Range("B" + i).Text;
      if (cookie == "") {
        break;
      }
      if (exec == "是") {
        console.log("🧑 开始执行用户：1");
        execHandle(cookie, i);
        break;
      }
    }
  }
}
function ActivateSheet(sheetName) {
  let flag = 0;
  try {
    let sheet = Application.Sheets.Item(sheetName);
    sheet.Activate();
    console.log("🥚 激活工作表：" + sheet.Name);
    flag = 1;
  } catch {
    flag = 0;
    console.log("🍳 无法激活工作表，工作表可能不存在");
  }
  return flag;
}
function jsonPushHandle(pushName, pushFlag, pushKey) {
  let length = jsonPush.length;
  for (let i = 0; i < length; i++) {
    if (jsonPush[i].name == pushName) {
      if (pushFlag == "是") {
        jsonPush[i].flag = 1;
        jsonPush[i].key = pushKey;
      }
    }
  }
}
function messageMerge() {
  let message = "";
  for (i = 0; i < messageArray.length; i++) {
    if (messageArray[i] != "" && messageArray[i] != null) {
      message += "\n" + messageHeader[i] + messageArray[i] + "";
    }
  }
  if (message != "") {
    console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨");
    console.log(message + "\n");
    console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨");
  }
  return message;
}
function sleep(d) {
  for (var t = Date.now(); Date.now() - t <= d;) {}
}
function getsign(data) {
  var sign = Crypto.createHash("md5").update(data, "utf8").digest("hex").toString();
  return sign;
}
function getsignUpperCase(data) {
  var sign = Crypto.createHash("md5").update(data, "utf8").digest("hex").toUpperCase().toString();
  return sign;
}
function sgin(_0x1b35af, _0x1ef0af) {
  let _0x4dc434 = "146000897313970749".split("").reverse().join("");
  let _0x131077 = 49006;
  let _0x3ef1e5 = {
    "activityId": _0x4dc434,
    "sellerId": _0x131077,
    "timestamp": _0x1b35af,
    "userId": _0x1ef0af
  };
  let _0x24306c = Object.keys(_0x3ef1e5).sort();
  let _0x228348 = _0x24306c.reduce(function (_0x5c3aff, _0x9ffe8e) {
    _0x5c3aff[_0x9ffe8e] = _0x3ef1e5[_0x9ffe8e];
    return _0x5c3aff;
  }, {});
  var _0x460df9 = Object.entries(_0x228348).map(function (_0x304bf5) {
    var [_0x48d87a, _0x70f615] = _0x304bf5;
    return _0x48d87a + "=" + _0x70f615;
  }).join("&") + "=yek&".split("").reverse().join("") + _0x4dc434.split("".split("").reverse().join("")).reverse().join("".split("").reverse().join(""));
  md5Value = getsignUpperCase(_0x460df9);
  return md5Value;
}
function resultHandle(_0x185a76, _0x3876bd) {
  posHttp += 1;
  let _0x183a4e = "".split("").reverse().join("");
  let _0x57b2c8 = "".split("").reverse().join("");
  let _0x89850a = "";
  if (messageNickname == 1) {
    _0x89850a = Application.Range("C" + _0x3876bd).Text;
    if (_0x89850a == "".split("").reverse().join("")) {
      _0x89850a = "A格元单".split("").reverse().join("") + _0x3876bd + "";
    }
  }
  posLabel = _0x3876bd - 2;
  messageHeader[posLabel] = " \uDE80\uD83D‍\uDC68\uD83D".split("").reverse().join("") + _0x89850a;
  flagResult = 1;
  if (posHttp == 1 || qlSwitch != 1) {
    if (_0x185a76.status == 200) {
      url = "scitsitatSngiSresu/ngis/retnec-kmc/bew/nc.iamq.2ipabew//:sptth".split("").reverse().join("");
      headers = {
        "scene": 1027,
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-From-Type": "catering",
        "Referer": "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html",
        "Qm-User-Token": token
      };
      data = {
        "activityId": "947079313798000641",
        "appid": appid
      };
      sleep(2000);
      _0x185a76 = HTTP.post(url, data, {
        "headers": headers
      });
    } else {
      content = "败失录登 ❌".split("").reverse().join("");
      _0x57b2c8 += content;
      console.log(content);
      flagResultFinish = 1;
      sleep(2000);
    }
  }
  if (posHttp == 2 || qlSwitch != 1) {
    _0x185a76 = _0x185a76.json();
    signDays = _0x185a76.data.signDays;
    if (signDays == "undefined" || signDays == undefined) {
      flagResult = 0;
      content = "📢 请手动访问小程序以续期ck，无需重新抓包，再运行程序\n";
      _0x57b2c8 += content;
      console.log(content);
      flagResultFinish = 1;
    } else {
      content = "🎉 连续签到" + signDays + "天" + "\n";
      _0x183a4e += content;
      console.log(content);
      timestamp = parseInt(getts13());
      url = "ngiSnItraPekat/ngis/retnec-kmc/bew/nc.iamq.2ipabew//:sptth".split("").reverse().join("");
      headers = {
        "scene": 1027,
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-From-Type": "catering",
        "Referer": "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html",
        "Qm-User-Token": token
      };
      data = {
        "activityId": "947079313798000641",
        "appid": appid,
        "storeId": 49006,
        "timestamp": timestamp,
        "signature": sgin(timestamp, userId),
        "store_id": 49006
      };
      sleep(2000);
      _0x185a76 = HTTP.post(url, data, {
        "headers": headers
      });
    }
  }
  if (flagResult != 0) {
    if (posHttp == 3 || qlSwitch != 1) {
      _0x185a76 = _0x185a76.json();
      respmessage = _0x185a76.message;
      respcode = _0x185a76.code;
      if (respcode != "6013001".split("").reverse().join("")) {
        if (respmessage == "ko".split("").reverse().join("")) {
          content = "功成到签\uDF89\uD83C".split("").reverse().join("") + "\n";
        } else {
          content = "📢 " + respmessage + "" + "\n";
        }
        _0x183a4e += content;
      } else {
        content = "❌ " + respmessage + "" + "\n";
        _0x57b2c8 += content;
      }
      console.log(content);
      url = "https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid;
      headers = {
        "scene": 1027,
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-From-Type": "catering",
        "Referer": "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html",
        "Qm-User-Token": token
      };
      sleep(2000);
      if (qlSwitch != 1) {
        _0x185a76 = HTTP.fetch(url, {
          "method": "get",
          "headers": headers
        });
      } else {
        data = {};
        option = "get";
        _0x185a76 = HTTP.post(url, data, {
          "headers": headers
        }, option);
      }
    }
    if (posHttp == 4 || qlSwitch != 1) {
      _0x185a76 = _0x185a76.json();
      customerAssertInfoIntegral = _0x185a76.data.customerAssertInfo.integral;
      content = "🎫 积分：" + customerAssertInfoIntegral + "" + "\n";
      _0x183a4e += content;
      console.log(content);
      url = "draweRresu/ngis/retnec-kmc/bew/nc.iamq.2ipabew//:sptth".split("").reverse().join("");
      headers = {
        "scene": 1027,
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-From-Type": "catering",
        "Referer": "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html",
        "Qm-User-Token": token
      };
      data = {
        "activityId": "947079313798000641",
        "appid": appid,
        "pageNo": 1,
        "pageSize": 30
      };
      _0x185a76 = HTTP.post(url, data, {
        "headers": headers
      });
    }
    if (posHttp == 5 || qlSwitch != 1) {
      _0x185a76 = _0x185a76.json();
      list = _0x185a76.data.list;
      for (let _0x14a592 = 0; _0x14a592 < list.length; _0x14a592++) {
        if (list[_0x14a592].rewardType == 1) {
          respdate = _0x185a76.data.date;
          content = "🏆奖品" + list[_0x14a592].rewardName + "间时取领".split("").reverse().join("") + list[_0x14a592].date + "" + "\n";
          console.log(content);
          _0x183a4e += content;
        }
      }
      flagResultFinish = 1;
    }
  }
  if (messageOnlyError == 1) {
    messageArray[posLabel] = _0x57b2c8;
  } else {
    if (_0x57b2c8 != "".split("").reverse().join("")) {
      messageArray[posLabel] = _0x57b2c8 + " " + _0x183a4e;
    } else {
      messageArray[posLabel] = _0x183a4e;
    }
  }
  if (messageArray[posLabel] != "".split("").reverse().join("")) {
    console.log(messageArray[posLabel]);
  }
  return flagResultFinish;
}
function execHandle(_0x5bb8aa, _0x1fac48) {
  posHttp = 0;
  qlpushFlag -= 1;
  messageSuccess = "".split("").reverse().join("");
  messageFail = "";
  token = _0x5bb8aa;
  userId = Application.Range("D" + _0x1fac48).Text;
  appid = "b753bc2248f6cefaxw".split("").reverse().join("");
  url = "https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid;
  headers = {
    "scene": 1027,
    "Qm-From": "wechat",
    "store-id": 49006,
    "Qm-From-Type": "catering",
    "Referer": "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html",
    "Qm-User-Token": token
  };
  if (qlSwitch != 1) {
    resp = HTTP.fetch(url, {
      "method": "get",
      "headers": headers
    });
  } else {
    data = {};
    option = "get";
    resp = HTTP.post(url, data, {
      "headers": headers
    }, option);
  }
  if (qlSwitch != 1) {
    resultHandle(resp, _0x1fac48);
  }
}
function cookie_to_json(cookies) {
  var cookie_text = cookies;
  var arr = [];
  var text_to_split = cookie_text.split("&");
  for (var i in text_to_split) {
    var tmp = text_to_split[i].split("=");
    arr.push("\"" + tmp.shift().trim() + "\":\"" + tmp.join(":").trim() + "\"");
  }
  var res = "{\n" + arr.join(",\n") + "\n}";
  return JSON.parse(res);
}
function getts10() {
  var ts = Math.round(new Date().getTime() / 1000).toString();
  return ts;
}
function getts13() {
  let ts = new Date().getTime();
  return ts;
}