var X = Object.create;
var $ = Object.defineProperty;
var k = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf,
  J = Object.prototype.hasOwnProperty;
var M = ((n) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(n, { get: (e, s) => (typeof require < "u" ? require : e)[s] })
    : n)(function (n) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + n + '" is not supported');
});
var u = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports),
  K = (n, e) => {
    for (var s in e) $(n, s, { get: e[s], enumerable: !0 });
  },
  E = (n, e, s, i) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let t of G(e))
        !J.call(n, t) &&
          t !== s &&
          $(n, t, {
            get: () => e[t],
            enumerable: !(i = k(e, t)) || i.enumerable,
          });
    return n;
  },
  m = (n, e, s) => (E(n, e, "default"), s && E(s, e, "default")),
  D = (n, e, s) => (
    (s = n != null ? X(H(n)) : {}),
    E(
      e || !n || !n.__esModule
        ? $(s, "default", { value: n, enumerable: !0 })
        : s,
      n
    )
  );
var q = u((pe, T) => {
  "use strict";
  T.exports = function (e) {
    var s = 0,
      i;
    function t() {
      return s || ((s = 1), (i = e.apply(this, arguments)), (e = null)), i;
    }
    return (
      (t.displayName = e.displayName || e.name || t.displayName || t.name), t
    );
  };
});
var S = u((ae, V) => {
  var w = M("child_process"),
    c = q(),
    x = class {
      constructor() {
        (this.child = null), (this.baseSpeed = 0);
      }
      speak(e, s, i, t) {
        if ((typeof t != "function" && (t = () => {}), (t = c(t)), !e))
          return setImmediate(() => {
            t(new TypeError("say.speak(): must provide text parameter"));
          });
        let {
          command: r,
          args: o,
          pipedData: d,
          options: p,
        } = this.buildSpeakCommand({ text: e, voice: s, speed: i });
        (this.child = w.spawn(r, o, p)),
          this.child.stdin.setEncoding("ascii"),
          this.child.stderr.setEncoding("ascii"),
          d && this.child.stdin.end(d),
          this.child.stderr.once("data", (h) => {
            t(new Error(h));
          }),
          this.child.addListener("exit", (h, a) => {
            if (h === null || a !== null)
              return t(
                new Error(
                  `say.speak(): could not talk, had an error [code: ${h}] [signal: ${a}]`
                )
              );
            (this.child = null), t(null);
          });
      }
      export(e, s, i, t, r) {
        if ((typeof r != "function" && (r = () => {}), (r = c(r)), !e))
          return setImmediate(() => {
            r(new TypeError("say.export(): must provide text parameter"));
          });
        if (!t)
          return setImmediate(() => {
            r(new TypeError("say.export(): must provide filename parameter"));
          });
        try {
          var {
            command: o,
            args: d,
            pipedData: p,
            options: h,
          } = this.buildExportCommand({
            text: e,
            voice: s,
            speed: i,
            filename: t,
          });
        } catch (a) {
          return setImmediate(() => {
            r(a);
          });
        }
        (this.child = w.spawn(o, d, h)),
          this.child.stdin.setEncoding("ascii"),
          this.child.stderr.setEncoding("ascii"),
          p && this.child.stdin.end(p),
          this.child.stderr.once("data", (a) => {
            r(new Error(a));
          }),
          this.child.addListener("exit", (a, A) => {
            if (a === null || A !== null)
              return r(
                new Error(
                  `say.export(): could not talk, had an error [code: ${a}] [signal: ${A}]`
                )
              );
            (this.child = null), r(null);
          });
      }
      stop(e) {
        if ((typeof e != "function" && (e = () => {}), (e = c(e)), !this.child))
          return setImmediate(() => {
            e(new Error("say.stop(): no speech to kill"));
          });
        this.runStopCommand(), (this.child = null), e(null);
      }
      convertSpeed(e) {
        return Math.ceil(this.baseSpeed * e);
      }
      getInstalledVoices(e) {
        typeof e != "function" && (e = () => {}), (e = c(e));
        let { command: s, args: i } = this.getVoices();
        var t = [];
        (this.child = w.spawn(s, i)),
          this.child.stdin.setEncoding("ascii"),
          this.child.stderr.setEncoding("ascii"),
          this.child.stderr.once("data", (r) => {
            e(new Error(r));
          }),
          this.child.stdout.on("data", function (r) {
            t += r;
          }),
          this.child.addListener("exit", (r, o) => {
            if (r === null || o !== null)
              return e(
                new Error(
                  `say.getInstalledVoices(): could not get installed voices, had an error [code: ${r}] [signal: ${o}]`
                )
              );
            t.length > 0 &&
              ((t = t.split(`\r
`)),
              (t = t[t.length - 1] === "" ? t.slice(0, t.length - 1) : t)),
              (this.child = null),
              e(null, t);
          }),
          this.child.stdin.end();
      }
    };
  V.exports = x;
});
var L = u((he, O) => {
  var Q = S(),
    Y = 100,
    Z = "festival",
    g = class extends Q {
      constructor() {
        super(), (this.baseSpeed = Y);
      }
      buildSpeakCommand({ text: e, voice: s, speed: i }) {
        let t = [],
          r = "",
          o = {};
        return (
          t.push("--pipe"),
          i &&
            (r += `(Parameter.set 'Audio_Command "aplay -q -c 1 -t raw -f s16 -r $(($SR*${this.convertSpeed(
              i
            )}/100)) $FILE") `),
          s && (r += `(${s}) `),
          (r += `(SayText "${e}")`),
          { command: Z, args: t, pipedData: r, options: o }
        );
      }
      buildExportCommand({ text: e, voice: s, speed: i, filename: t }) {
        throw new Error(
          `say.export(): does not support platform ${this.platform}`
        );
      }
      runStopCommand() {
        process.kill(this.child.pid + 2);
      }
      getVoices() {
        throw new Error(
          `say.export(): does not support platform ${this.platform}`
        );
      }
    };
  O.exports = g;
});
var F = u((ue, B) => {
  var b = S(),
    ee = 175,
    j = "say",
    C = class extends b {
      constructor() {
        super(), (this.baseSpeed = ee);
      }
      buildSpeakCommand({ text: e, voice: s, speed: i }) {
        let t = [],
          r = "",
          o = {};
        return (
          s ? t.push("-v", s, e) : t.push(e),
          i && t.push("-r", this.convertSpeed(i)),
          { command: j, args: t, pipedData: r, options: o }
        );
      }
      buildExportCommand({ text: e, voice: s, speed: i, filename: t }) {
        let r = [],
          o = "",
          d = {};
        return (
          s ? r.push("-v", s, e) : r.push(e),
          i && r.push("-r", this.convertSpeed(i)),
          t && r.push("-o", t, "--data-format=LEF32@32000"),
          { command: j, args: r, pipedData: o, options: d }
        );
      }
      runStopCommand() {
        this.child.stdin.pause(), this.child.kill();
      }
      getVoices() {
        throw new Error(
          `say.export(): does not support platform ${this.platform}`
        );
      }
    };
  B.exports = C;
});
var R = u((le, P) => {
  var te = M("child_process"),
    se = S(),
    re = 0,
    v = "powershell",
    N = class extends se {
      constructor() {
        super(), (this.baseSpeed = re);
      }
      buildSpeakCommand({ text: e, voice: s, speed: i }) {
        let t = [],
          r = "",
          o = {},
          d =
            "Add-Type -AssemblyName System.speech;$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer;";
        if ((s && (d += `$speak.SelectVoice('${s}');`), i)) {
          let p = this.convertSpeed(i || 1);
          d += `$speak.Rate = ${p};`;
        }
        return (
          (d += "$speak.Speak([Console]::In.ReadToEnd())"),
          (r += e),
          t.push(d),
          (o.shell = !0),
          { command: v, args: t, pipedData: r, options: o }
        );
      }
      buildExportCommand({ text: e, voice: s, speed: i, filename: t }) {
        let r = [],
          o = "",
          d = {},
          p =
            "Add-Type -AssemblyName System.speech;$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer;";
        if ((s && (p += `$speak.SelectVoice('${s}');`), i)) {
          let h = this.convertSpeed(i || 1);
          p += `$speak.Rate = ${h};`;
        }
        if (t) p += `$speak.SetOutputToWaveFile('${t}');`;
        else throw new Error("Filename must be provided in export();");
        return (
          (p += "$speak.Speak([Console]::In.ReadToEnd());$speak.Dispose()"),
          (o += e),
          r.push(p),
          (d.shell = !0),
          { command: v, args: r, pipedData: o, options: d }
        );
      }
      runStopCommand() {
        this.child.stdin.pause(),
          te.exec(`taskkill /pid ${this.child.pid} /T /F`);
      }
      convertSpeed(e) {
        return Math.max(
          -10,
          Math.min(Math.round(9.0686 * Math.log(e) - 0.1806), 10)
        );
      }
      getVoices() {
        let e = [];
        return (
          e.push(
            "Add-Type -AssemblyName System.speech;$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer;$speak.GetInstalledVoices() | % {$_.VoiceInfo.Name}"
          ),
          { command: v, args: e }
        );
      }
    };
  P.exports = N;
});
var I = u((me, y) => {
  var ie = L(),
    ne = F(),
    oe = R(),
    _ = "darwin",
    z = "linux",
    W = "win32",
    f = class {
      constructor(e) {
        if ((e || (e = process.platform), e === _)) return new ne();
        if (e === z) return new ie();
        if (e === W) return new oe();
        throw new Error(`new Say(): unsupported platorm! ${e}`);
      }
    };
  y.exports = new f();
  y.exports.Say = f;
  y.exports.platforms = { WIN32: W, MACOS: _, LINUX: z };
});
var l = {};
K(l, { sayDefault: () => U.default });
m(l, D(I()));
var U = D(I());
var export_sayDefault = U.default;
export { export_sayDefault as sayDefault };
