function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/App-DOoTA0vX.js", "assets/App-y_FtOfiP.css"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
function kd(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: ()=>r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
const F0 = "modulepreload"
  , L0 = function(e) {
    return "/" + e
}
  , Bc = {}
  , U0 = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link")
          , s = document.querySelector("meta[property=csp-nonce]")
          , a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
        i = Promise.all(n.map(l=>{
            if (l = L0(l),
            l in Bc)
                return;
            Bc[l] = !0;
            const f = l.endsWith(".css")
              , d = f ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let A = o.length - 1; A >= 0; A--) {
                    const E = o[A];
                    if (E.href === l && (!f || E.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${l}"]${d}`))
                return;
            const p = document.createElement("link");
            if (p.rel = f ? "stylesheet" : F0,
            f || (p.as = "script",
            p.crossOrigin = ""),
            p.href = l,
            a && p.setAttribute("nonce", a),
            document.head.appendChild(p),
            f)
                return new Promise((A,E)=>{
                    p.addEventListener("load", A),
                    p.addEventListener("error", ()=>E(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    return i.then(()=>t()).catch(o=>{
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = o,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw o
    }
    )
};
var IE = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Od(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function PE(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var Rd = {
    exports: {}
}
  , Ds = {}
  , Bd = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so = Symbol.for("react.element")
  , j0 = Symbol.for("react.portal")
  , M0 = Symbol.for("react.fragment")
  , D0 = Symbol.for("react.strict_mode")
  , V0 = Symbol.for("react.profiler")
  , W0 = Symbol.for("react.provider")
  , z0 = Symbol.for("react.context")
  , Q0 = Symbol.for("react.forward_ref")
  , K0 = Symbol.for("react.suspense")
  , q0 = Symbol.for("react.memo")
  , H0 = Symbol.for("react.lazy")
  , Tc = Symbol.iterator;
function G0(e) {
    return e === null || typeof e != "object" ? null : (e = Tc && e[Tc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Td = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Id = Object.assign
  , Pd = {};
function Jr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Pd,
    this.updater = n || Td
}
Jr.prototype.isReactComponent = {};
Jr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Jr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Nd() {}
Nd.prototype = Jr.prototype;
function pu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Pd,
    this.updater = n || Td
}
var hu = pu.prototype = new Nd;
hu.constructor = pu;
Id(hu, Jr.prototype);
hu.isPureReactComponent = !0;
var Ic = Array.isArray
  , Fd = Object.prototype.hasOwnProperty
  , gu = {
    current: null
}
  , Ld = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ud(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Fd.call(t, r) && !Ld.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), f = 0; f < a; f++)
            l[f] = arguments[f + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: so,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: gu.current
    }
}
function Z0(e, t) {
    return {
        $$typeof: so,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function mu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === so
}
function J0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Pc = /\/+/g;
function Sa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? J0("" + e.key) : t.toString(36)
}
function Wo(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case so:
            case j0:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Sa(s, 0) : r,
        Ic(i) ? (n = "",
        e != null && (n = e.replace(Pc, "$&/") + "/"),
        Wo(i, t, n, "", function(f) {
            return f
        })) : i != null && (mu(i) && (i = Z0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Pc, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Ic(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + Sa(o, a);
            s += Wo(o, t, n, l, i)
        }
    else if (l = G0(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + Sa(o, a++),
            s += Wo(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function wo(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Wo(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function Y0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Me = {
    current: null
}
  , zo = {
    transition: null
}
  , X0 = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: zo,
    ReactCurrentOwner: gu
};
Q.Children = {
    map: wo,
    forEach: function(e, t, n) {
        wo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return wo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return wo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!mu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = Jr;
Q.Fragment = M0;
Q.Profiler = V0;
Q.PureComponent = pu;
Q.StrictMode = D0;
Q.Suspense = K0;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X0;
Q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Id({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = gu.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Fd.call(t, l) && !Ld.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var f = 0; f < l; f++)
            a[f] = arguments[f + 2];
        r.children = a
    }
    return {
        $$typeof: so,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
Q.createContext = function(e) {
    return e = {
        $$typeof: z0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: W0,
        _context: e
    },
    e.Consumer = e
}
;
Q.createElement = Ud;
Q.createFactory = function(e) {
    var t = Ud.bind(null, e);
    return t.type = e,
    t
}
;
Q.createRef = function() {
    return {
        current: null
    }
}
;
Q.forwardRef = function(e) {
    return {
        $$typeof: Q0,
        render: e
    }
}
;
Q.isValidElement = mu;
Q.lazy = function(e) {
    return {
        $$typeof: H0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Y0
    }
}
;
Q.memo = function(e, t) {
    return {
        $$typeof: q0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Q.startTransition = function(e) {
    var t = zo.transition;
    zo.transition = {};
    try {
        e()
    } finally {
        zo.transition = t
    }
}
;
Q.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
Q.useCallback = function(e, t) {
    return Me.current.useCallback(e, t)
}
;
Q.useContext = function(e) {
    return Me.current.useContext(e)
}
;
Q.useDebugValue = function() {}
;
Q.useDeferredValue = function(e) {
    return Me.current.useDeferredValue(e)
}
;
Q.useEffect = function(e, t) {
    return Me.current.useEffect(e, t)
}
;
Q.useId = function() {
    return Me.current.useId()
}
;
Q.useImperativeHandle = function(e, t, n) {
    return Me.current.useImperativeHandle(e, t, n)
}
;
Q.useInsertionEffect = function(e, t) {
    return Me.current.useInsertionEffect(e, t)
}
;
Q.useLayoutEffect = function(e, t) {
    return Me.current.useLayoutEffect(e, t)
}
;
Q.useMemo = function(e, t) {
    return Me.current.useMemo(e, t)
}
;
Q.useReducer = function(e, t, n) {
    return Me.current.useReducer(e, t, n)
}
;
Q.useRef = function(e) {
    return Me.current.useRef(e)
}
;
Q.useState = function(e) {
    return Me.current.useState(e)
}
;
Q.useSyncExternalStore = function(e, t, n) {
    return Me.current.useSyncExternalStore(e, t, n)
}
;
Q.useTransition = function() {
    return Me.current.useTransition()
}
;
Q.version = "18.2.0";
Bd.exports = Q;
var te = Bd.exports;
const Be = Od(te)
  , NE = kd({
    __proto__: null,
    default: Be
}, [te]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $0 = te
  , em = Symbol.for("react.element")
  , tm = Symbol.for("react.fragment")
  , nm = Object.prototype.hasOwnProperty
  , rm = $0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , im = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function jd(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        nm.call(t, r) && !im.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: em,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: rm.current
    }
}
Ds.Fragment = tm;
Ds.jsx = jd;
Ds.jsxs = jd;
Rd.exports = Ds;
var he = Rd.exports;
const om = {
    type: "logger",
    log(e) {
        this.output("log", e)
    },
    warn(e) {
        this.output("warn", e)
    },
    error(e) {
        this.output("error", e)
    },
    output(e, t) {
        console && console[e] && console[e].apply(console, t)
    }
};
class rs {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, n)
    }
    init(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = n.prefix || "i18next:",
        this.logger = t || om,
        this.options = n,
        this.debug = n.debug
    }
    log() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "log", "", !0)
    }
    warn() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "warn", "", !0)
    }
    error() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "error", "")
    }
    deprecate() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(t, n, r, i) {
        return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t))
    }
    create(t) {
        return new rs(this.logger,{
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        })
    }
    clone(t) {
        return t = t || this.options,
        t.prefix = t.prefix || this.prefix,
        new rs(this.logger,t)
    }
}
var Nt = new rs;
class Vs {
    constructor() {
        this.observers = {}
    }
    on(t, n) {
        return t.split(" ").forEach(r=>{
            this.observers[r] || (this.observers[r] = new Map);
            const i = this.observers[r].get(n) || 0;
            this.observers[r].set(n, i + 1)
        }
        ),
        this
    }
    off(t, n) {
        if (this.observers[t]) {
            if (!n) {
                delete this.observers[t];
                return
            }
            this.observers[t].delete(n)
        }
    }
    emit(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i];
        this.observers[t] && Array.from(this.observers[t].entries()).forEach(s=>{
            let[a,l] = s;
            for (let f = 0; f < l; f++)
                a(...r)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(s=>{
            let[a,l] = s;
            for (let f = 0; f < l; f++)
                a.apply(a, [t, ...r])
        }
        )
    }
}
function li() {
    let e, t;
    const n = new Promise((r,i)=>{
        e = r,
        t = i
    }
    );
    return n.resolve = e,
    n.reject = t,
    n
}
function Nc(e) {
    return e == null ? "" : "" + e
}
function sm(e, t, n) {
    e.forEach(r=>{
        t[r] && (n[r] = t[r])
    }
    )
}
const am = /###/g;
function _i(e, t, n) {
    function r(a) {
        return a && a.indexOf("###") > -1 ? a.replace(am, ".") : a
    }
    function i() {
        return !e || typeof e == "string"
    }
    const o = typeof t != "string" ? t : t.split(".");
    let s = 0;
    for (; s < o.length - 1; ) {
        if (i())
            return {};
        const a = r(o[s]);
        !e[a] && n && (e[a] = new n),
        Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {},
        ++s
    }
    return i() ? {} : {
        obj: e,
        k: r(o[s])
    }
}
function Fc(e, t, n) {
    const {obj: r, k: i} = _i(e, t, Object);
    if (r !== void 0 || t.length === 1) {
        r[i] = n;
        return
    }
    let o = t[t.length - 1]
      , s = t.slice(0, t.length - 1)
      , a = _i(e, s, Object);
    for (; a.obj === void 0 && s.length; )
        o = `${s[s.length - 1]}.${o}`,
        s = s.slice(0, s.length - 1),
        a = _i(e, s, Object),
        a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${o}`] = n
}
function lm(e, t, n, r) {
    const {obj: i, k: o} = _i(e, t, Object);
    i[o] = i[o] || [],
    r && (i[o] = i[o].concat(n)),
    r || i[o].push(n)
}
function is(e, t) {
    const {obj: n, k: r} = _i(e, t);
    if (n)
        return n[r]
}
function um(e, t, n) {
    const r = is(e, n);
    return r !== void 0 ? r : is(t, n)
}
function Md(e, t, n) {
    for (const r in t)
        r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r]instanceof String || typeof t[r] == "string" || t[r]instanceof String ? n && (e[r] = t[r]) : Md(e[r], t[r], n) : e[r] = t[r]);
    return e
}
function ur(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var cm = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
function fm(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t=>cm[t]) : e
}
class dm {
    constructor(t) {
        this.capacity = t,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(t) {
        const n = this.regExpMap.get(t);
        if (n !== void 0)
            return n;
        const r = new RegExp(t);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(t, r),
        this.regExpQueue.push(t),
        r
    }
}
const pm = [" ", ",", "?", "!", ";"]
  , hm = new dm(20);
function gm(e, t, n) {
    t = t || "",
    n = n || "";
    const r = pm.filter(s=>t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0)
        return !0;
    const i = hm.getRegExp(`(${r.map(s=>s === "?" ? "\\?" : s).join("|")})`);
    let o = !i.test(e);
    if (!o) {
        const s = e.indexOf(n);
        s > 0 && !i.test(e.substring(0, s)) && (o = !0)
    }
    return o
}
function ol(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e)
        return;
    if (e[t])
        return e[t];
    const r = t.split(n);
    let i = e;
    for (let o = 0; o < r.length; ) {
        if (!i || typeof i != "object")
            return;
        let s, a = "";
        for (let l = o; l < r.length; ++l)
            if (l !== o && (a += n),
            a += r[l],
            s = i[a],
            s !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
                    continue;
                o += l - o + 1;
                break
            }
        i = s
    }
    return i
}
function os(e) {
    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
}
class Lc extends Vs {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(),
        this.data = t || {},
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
    }
    removeNamespaces(t) {
        const n = this.options.ns.indexOf(t);
        n > -1 && this.options.ns.splice(n, 1)
    }
    getResource(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
          , s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let a;
        t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n],
        r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && o ? a.push(...r.split(o)) : a.push(r)));
        const l = is(this.data, a);
        return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0],
        n = a[1],
        r = a.slice(2).join(".")),
        l || !s || typeof r != "string" ? l : ol(this.data && this.data[t] && this.data[t][n], r, o)
    }
    addResource(t, n, r, i) {
        let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
        let a = [t, n];
        r && (a = a.concat(s ? r.split(s) : r)),
        t.indexOf(".") > -1 && (a = t.split("."),
        i = n,
        n = a[1]),
        this.addNamespaces(n),
        Fc(this.data, a, i),
        o.silent || this.emit("added", t, n, r, i)
    }
    addResources(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const o in r)
            (typeof r[o] == "string" || Object.prototype.toString.apply(r[o]) === "[object Array]") && this.addResource(t, n, o, r[o], {
                silent: !0
            });
        i.silent || this.emit("added", t, n, r)
    }
    addResourceBundle(t, n, r, i, o) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: !1,
            skipCopy: !1
        }
          , a = [t, n];
        t.indexOf(".") > -1 && (a = t.split("."),
        i = r,
        r = n,
        n = a[1]),
        this.addNamespaces(n);
        let l = is(this.data, a) || {};
        s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
        i ? Md(l, r, o) : l = {
            ...l,
            ...r
        },
        Fc(this.data, a, l),
        s.silent || this.emit("added", t, n, r)
    }
    removeResourceBundle(t, n) {
        this.hasResourceBundle(t, n) && delete this.data[t][n],
        this.removeNamespaces(n),
        this.emit("removed", t, n)
    }
    hasResourceBundle(t, n) {
        return this.getResource(t, n) !== void 0
    }
    getResourceBundle(t, n) {
        return n || (n = this.options.defaultNS),
        this.options.compatibilityAPI === "v1" ? {
            ...this.getResource(t, n)
        } : this.getResource(t, n)
    }
    getDataByLanguage(t) {
        return this.data[t]
    }
    hasLanguageSomeTranslations(t) {
        const n = this.getDataByLanguage(t);
        return !!(n && Object.keys(n) || []).find(i=>n[i] && Object.keys(n[i]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Dd = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, n, r, i) {
        return e.forEach(o=>{
            this.processors[o] && (t = this.processors[o].process(t, n, r, i))
        }
        ),
        t
    }
};
const Uc = {};
class ss extends Vs {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(),
        sm(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = Nt.create("translator")
    }
    changeLanguage(t) {
        t && (this.language = t)
    }
    exists(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (t == null)
            return !1;
        const r = this.resolve(t, n);
        return r && r.res !== void 0
    }
    extractFromKey(t, n) {
        let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
        let o = n.ns || this.options.defaultNS || [];
        const s = r && t.indexOf(r) > -1
          , a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !gm(t, r, i);
        if (s && !a) {
            const l = t.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0)
                return {
                    key: t,
                    namespaces: o
                };
            const f = t.split(r);
            (r !== i || r === i && this.options.ns.indexOf(f[0]) > -1) && (o = f.shift()),
            t = f.join(i)
        }
        return typeof o == "string" && (o = [o]),
        {
            key: t,
            namespaces: o
        }
    }
    translate(t, n, r) {
        if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)),
        typeof n == "object" && (n = {
            ...n
        }),
        n || (n = {}),
        t == null)
            return "";
        Array.isArray(t) || (t = [String(t)]);
        const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails
          , o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
          , {key: s, namespaces: a} = this.extractFromKey(t[t.length - 1], n)
          , l = a[a.length - 1]
          , f = n.lng || this.language
          , d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (f && f.toLowerCase() === "cimode") {
            if (d) {
                const x = n.nsSeparator || this.options.nsSeparator;
                return i ? {
                    res: `${l}${x}${s}`,
                    usedKey: s,
                    exactUsedKey: s,
                    usedLng: f,
                    usedNS: l,
                    usedParams: this.getUsedParamsDetails(n)
                } : `${l}${x}${s}`
            }
            return i ? {
                res: s,
                usedKey: s,
                exactUsedKey: s,
                usedLng: f,
                usedNS: l,
                usedParams: this.getUsedParamsDetails(n)
            } : s
        }
        const g = this.resolve(t, n);
        let p = g && g.res;
        const A = g && g.usedKey || s
          , E = g && g.exactUsedKey || s
          , _ = Object.prototype.toString.apply(p)
          , I = ["[object Number]", "[object Function]", "[object RegExp]"]
          , y = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays
          , v = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (v && p && (typeof p != "string" && typeof p != "boolean" && typeof p != "number") && I.indexOf(_) < 0 && !(typeof y == "string" && _ === "[object Array]")) {
            if (!n.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const x = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(A, p, {
                    ...n,
                    ns: a
                }) : `key '${s} (${this.language})' returned an object instead of string.`;
                return i ? (g.res = x,
                g.usedParams = this.getUsedParamsDetails(n),
                g) : x
            }
            if (o) {
                const x = _ === "[object Array]"
                  , k = x ? [] : {}
                  , O = x ? E : A;
                for (const B in p)
                    if (Object.prototype.hasOwnProperty.call(p, B)) {
                        const N = `${O}${o}${B}`;
                        k[B] = this.translate(N, {
                            ...n,
                            joinArrays: !1,
                            ns: a
                        }),
                        k[B] === N && (k[B] = p[B])
                    }
                p = k
            }
        } else if (v && typeof y == "string" && _ === "[object Array]")
            p = p.join(y),
            p && (p = this.extendTranslation(p, t, n, r));
        else {
            let x = !1
              , k = !1;
            const O = n.count !== void 0 && typeof n.count != "string"
              , B = ss.hasDefaultValue(n)
              , N = O ? this.pluralResolver.getSuffix(f, n.count, n) : ""
              , K = n.ordinal && O ? this.pluralResolver.getSuffix(f, n.count, {
                ordinal: !1
            }) : ""
              , j = O && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
              , Z = j && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${N}`] || n[`defaultValue${K}`] || n.defaultValue;
            !this.isValidLookup(p) && B && (x = !0,
            p = Z),
            this.isValidLookup(p) || (k = !0,
            p = s);
            const Ve = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : p
              , Fe = B && Z !== p && this.options.updateMissing;
            if (k || x || Fe) {
                if (this.logger.log(Fe ? "updateKey" : "missingKey", f, l, s, Fe ? Z : p),
                o) {
                    const T = this.resolve(s, {
                        ...n,
                        keySeparator: !1
                    });
                    T && T.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let rt = [];
                const it = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && it && it[0])
                    for (let T = 0; T < it.length; T++)
                        rt.push(it[T]);
                else
                    this.options.saveMissingTo === "all" ? rt = this.languageUtils.toResolveHierarchy(n.lng || this.language) : rt.push(n.lng || this.language);
                const Ze = (T,M,V)=>{
                    const $ = B && V !== p ? V : Ve;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(T, l, M, $, Fe, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(T, l, M, $, Fe, n),
                    this.emit("missingKey", T, l, M, p)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && O ? rt.forEach(T=>{
                    const M = this.pluralResolver.getSuffixes(T, n);
                    j && n[`defaultValue${this.options.pluralSeparator}zero`] && M.indexOf(`${this.options.pluralSeparator}zero`) < 0 && M.push(`${this.options.pluralSeparator}zero`),
                    M.forEach(V=>{
                        Ze([T], s + V, n[`defaultValue${V}`] || Z)
                    }
                    )
                }
                ) : Ze(rt, s, Z))
            }
            p = this.extendTranslation(p, t, n, g, r),
            k && p === s && this.options.appendNamespaceToMissingKey && (p = `${l}:${s}`),
            (k || x) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, x ? p : void 0) : p = this.options.parseMissingKeyHandler(p))
        }
        return i ? (g.res = p,
        g.usedParams = this.getUsedParamsDetails(n),
        g) : p
    }
    extendTranslation(t, n, r, i, o) {
        var s = this;
        if (this.i18nFormat && this.i18nFormat.parse)
            t = this.i18nFormat.parse(t, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
                resolved: i
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const f = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let d;
            if (f) {
                const p = t.match(this.interpolator.nestingRegexp);
                d = p && p.length
            }
            let g = r.replace && typeof r.replace != "string" ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (g = {
                ...this.options.interpolation.defaultVariables,
                ...g
            }),
            t = this.interpolator.interpolate(t, g, r.lng || this.language, r),
            f) {
                const p = t.match(this.interpolator.nestingRegexp)
                  , A = p && p.length;
                d < A && (r.nest = !1)
            }
            !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng),
            r.nest !== !1 && (t = this.interpolator.nest(t, function() {
                for (var p = arguments.length, A = new Array(p), E = 0; E < p; E++)
                    A[E] = arguments[E];
                return o && o[0] === A[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${A[0]} in key: ${n[0]}`),
                null) : s.translate(...A, n)
            }, r)),
            r.interpolation && this.interpolator.reset()
        }
        const a = r.postProcess || this.options.postProcess
          , l = typeof a == "string" ? [a] : a;
        return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = Dd.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...i,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)),
        t
    }
    resolve(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, a;
        return typeof t == "string" && (t = [t]),
        t.forEach(l=>{
            if (this.isValidLookup(r))
                return;
            const f = this.extractFromKey(l, n)
              , d = f.key;
            i = d;
            let g = f.namespaces;
            this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
            const p = n.count !== void 0 && typeof n.count != "string"
              , A = p && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
              , E = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== ""
              , _ = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
            g.forEach(I=>{
                this.isValidLookup(r) || (a = I,
                !Uc[`${_[0]}-${I}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Uc[`${_[0]}-${I}`] = !0,
                this.logger.warn(`key "${i}" for languages "${_.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                _.forEach(y=>{
                    if (this.isValidLookup(r))
                        return;
                    s = y;
                    const v = [d];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                        this.i18nFormat.addLookupKeys(v, d, y, I, n);
                    else {
                        let x;
                        p && (x = this.pluralResolver.getSuffix(y, n.count, n));
                        const k = `${this.options.pluralSeparator}zero`
                          , O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (p && (v.push(d + x),
                        n.ordinal && x.indexOf(O) === 0 && v.push(d + x.replace(O, this.options.pluralSeparator)),
                        A && v.push(d + k)),
                        E) {
                            const B = `${d}${this.options.contextSeparator}${n.context}`;
                            v.push(B),
                            p && (v.push(B + x),
                            n.ordinal && x.indexOf(O) === 0 && v.push(B + x.replace(O, this.options.pluralSeparator)),
                            A && v.push(B + k))
                        }
                    }
                    let S;
                    for (; S = v.pop(); )
                        this.isValidLookup(r) || (o = S,
                        r = this.getResource(y, I, S, n))
                }
                ))
            }
            )
        }
        ),
        {
            res: r,
            usedKey: i,
            exactUsedKey: o,
            usedLng: s,
            usedNS: a
        }
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
    }
    getResource(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i)
    }
    getUsedParamsDetails() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , r = t.replace && typeof t.replace != "string";
        let i = r ? t.replace : t;
        if (r && typeof t.count < "u" && (i.count = t.count),
        this.options.interpolation.defaultVariables && (i = {
            ...this.options.interpolation.defaultVariables,
            ...i
        }),
        !r) {
            i = {
                ...i
            };
            for (const o of n)
                delete i[o]
        }
        return i
    }
    static hasDefaultValue(t) {
        const n = "defaultValue";
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
                return !0;
        return !1
    }
}
function Ea(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class jc {
    constructor(t) {
        this.options = t,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = Nt.create("languageUtils")
    }
    getScriptPartFromCode(t) {
        if (t = os(t),
        !t || t.indexOf("-") < 0)
            return null;
        const n = t.split("-");
        return n.length === 2 || (n.pop(),
        n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
    }
    getLanguagePartFromCode(t) {
        if (t = os(t),
        !t || t.indexOf("-") < 0)
            return t;
        const n = t.split("-");
        return this.formatLanguageCode(n[0])
    }
    formatLanguageCode(t) {
        if (typeof t == "string" && t.indexOf("-") > -1) {
            const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let r = t.split("-");
            return this.options.lowerCaseLng ? r = r.map(i=>i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(),
            r[1] = r[1].toUpperCase(),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ea(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ea(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ea(r[2].toLowerCase()))),
            r.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
    }
    isSupportedCode(t) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    }
    getBestMatchFromCodes(t) {
        if (!t)
            return null;
        let n;
        return t.forEach(r=>{
            if (n)
                return;
            const i = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i)
        }
        ),
        !n && this.options.supportedLngs && t.forEach(r=>{
            if (n)
                return;
            const i = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(i))
                return n = i;
            n = this.options.supportedLngs.find(o=>{
                if (o === i)
                    return o;
                if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
                    return o
            }
            )
        }
        ),
        n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
        n
    }
    getFallbackCodes(t, n) {
        if (!t)
            return [];
        if (typeof t == "function" && (t = t(n)),
        typeof t == "string" && (t = [t]),
        Object.prototype.toString.apply(t) === "[object Array]")
            return t;
        if (!n)
            return t.default || [];
        let r = t[n];
        return r || (r = t[this.getScriptPartFromCode(n)]),
        r || (r = t[this.formatLanguageCode(n)]),
        r || (r = t[this.getLanguagePartFromCode(n)]),
        r || (r = t.default),
        r || []
    }
    toResolveHierarchy(t, n) {
        const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t)
          , i = []
          , o = s=>{
            s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))
        }
        ;
        return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)),
        this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)),
        r.forEach(s=>{
            i.indexOf(s) < 0 && o(this.formatLanguageCode(s))
        }
        ),
        i
    }
}
let mm = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
}, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
}, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
}, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
}, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
}, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
}, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
}, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
}, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
}, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
}, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
}, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
}, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
}, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
}, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
}, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
}, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
}, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
}, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
}, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
}, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
}, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
}, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
}]
  , vm = {
    1: function(e) {
        return +(e > 1)
    },
    2: function(e) {
        return +(e != 1)
    },
    3: function(e) {
        return 0
    },
    4: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    5: function(e) {
        return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
    },
    6: function(e) {
        return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
    },
    7: function(e) {
        return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    8: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
    },
    9: function(e) {
        return +(e >= 2)
    },
    10: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
    },
    11: function(e) {
        return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
    },
    12: function(e) {
        return +(e % 10 != 1 || e % 100 == 11)
    },
    13: function(e) {
        return +(e !== 0)
    },
    14: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
    },
    15: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    16: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
    },
    17: function(e) {
        return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
    },
    18: function(e) {
        return e == 0 ? 0 : e == 1 ? 1 : 2
    },
    19: function(e) {
        return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
    },
    20: function(e) {
        return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
    },
    21: function(e) {
        return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
    },
    22: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
    }
};
const ym = ["v1", "v2", "v3"]
  , Am = ["v4"]
  , Mc = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
};
function wm() {
    const e = {};
    return mm.forEach(t=>{
        t.lngs.forEach(n=>{
            e[n] = {
                numbers: t.nr,
                plurals: vm[t.fc]
            }
        }
        )
    }
    ),
    e
}
class Sm {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = t,
        this.options = n,
        this.logger = Nt.create("pluralResolver"),
        (!this.options.compatibilityJSON || Am.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
        this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
        this.rules = wm()
    }
    addRule(t, n) {
        this.rules[t] = n
    }
    getRule(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi())
            try {
                return new Intl.PluralRules(os(t === "dev" ? "en" : t),{
                    type: n.ordinal ? "ordinal" : "cardinal"
                })
            } catch {
                return
            }
        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    }
    needsPlural(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1
    }
    getPluralFormsOfKey(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(t, r).map(i=>`${n}${i}`)
    }
    getSuffixes(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i,o)=>Mc[i] - Mc[o]).map(i=>`${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map(i=>this.getSuffix(t, i, n)) : []
    }
    getSuffix(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const i = this.getRule(t, r);
        return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`),
        "")
    }
    getSuffixRetroCompatible(t, n) {
        const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
        let i = t.numbers[r];
        this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
        const o = ()=>this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
        return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
    }
    shouldUseIntlApi() {
        return !ym.includes(this.options.compatibilityJSON)
    }
}
function Dc(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "."
      , i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0
      , o = um(e, t, n);
    return !o && i && typeof n == "string" && (o = ol(e, n, r),
    o === void 0 && (o = ol(t, n, r))),
    o
}
class Em {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = Nt.create("interpolator"),
        this.options = t,
        this.format = t.interpolation && t.interpolation.format || (n=>n),
        this.init(t)
    }
    init() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = {
            escapeValue: !0
        });
        const n = t.interpolation;
        this.escape = n.escape !== void 0 ? n.escape : fm,
        this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0,
        this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1,
        this.prefix = n.prefix ? ur(n.prefix) : n.prefixEscaped || "{{",
        this.suffix = n.suffix ? ur(n.suffix) : n.suffixEscaped || "}}",
        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",",
        this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "",
        this.nestingPrefix = n.nestingPrefix ? ur(n.nestingPrefix) : n.nestingPrefixEscaped || ur("$t("),
        this.nestingSuffix = n.nestingSuffix ? ur(n.nestingSuffix) : n.nestingSuffixEscaped || ur(")"),
        this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",",
        this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3,
        this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const t = (n,r)=>n && n.source === r ? (n.lastIndex = 0,
        n) : new RegExp(r,"g");
        this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(t, n, r, i) {
        let o, s, a;
        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function f(E) {
            return E.replace(/\$/g, "$$$$")
        }
        const d = E=>{
            if (E.indexOf(this.formatSeparator) < 0) {
                const v = Dc(n, l, E, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(v, void 0, r, {
                    ...i,
                    ...n,
                    interpolationkey: E
                }) : v
            }
            const _ = E.split(this.formatSeparator)
              , I = _.shift().trim()
              , y = _.join(this.formatSeparator).trim();
            return this.format(Dc(n, l, I, this.options.keySeparator, this.options.ignoreJSONStructure), y, r, {
                ...i,
                ...n,
                interpolationkey: I
            })
        }
        ;
        this.resetRegExp();
        const g = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler
          , p = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: E=>f(E)
        }, {
            regex: this.regexp,
            safeValue: E=>this.escapeValue ? f(this.escape(E)) : f(E)
        }].forEach(E=>{
            for (a = 0; o = E.regex.exec(t); ) {
                const _ = o[1].trim();
                if (s = d(_),
                s === void 0)
                    if (typeof g == "function") {
                        const y = g(t, o, i);
                        s = typeof y == "string" ? y : ""
                    } else if (i && Object.prototype.hasOwnProperty.call(i, _))
                        s = "";
                    else if (p) {
                        s = o[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${_} for interpolating ${t}`),
                        s = "";
                else
                    typeof s != "string" && !this.useRawValueToEscape && (s = Nc(s));
                const I = E.safeValue(s);
                if (t = t.replace(o[0], I),
                p ? (E.regex.lastIndex += s.length,
                E.regex.lastIndex -= o[0].length) : E.regex.lastIndex = 0,
                a++,
                a >= this.maxReplaces)
                    break
            }
        }
        ),
        t
    }
    nest(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
        function a(l, f) {
            const d = this.nestingOptionsSeparator;
            if (l.indexOf(d) < 0)
                return l;
            const g = l.split(new RegExp(`${d}[ ]*{`));
            let p = `{${g[1]}`;
            l = g[0],
            p = this.interpolate(p, s);
            const A = p.match(/'/g)
              , E = p.match(/"/g);
            (A && A.length % 2 === 0 && !E || E.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
            try {
                s = JSON.parse(p),
                f && (s = {
                    ...f,
                    ...s
                })
            } catch (_) {
                return this.logger.warn(`failed parsing options string in nesting for key ${l}`, _),
                `${l}${d}${p}`
            }
            return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue,
            l
        }
        for (; i = this.nestingRegexp.exec(t); ) {
            let l = [];
            s = {
                ...r
            },
            s = s.replace && typeof s.replace != "string" ? s.replace : s,
            s.applyPostProcessor = !1,
            delete s.defaultValue;
            let f = !1;
            if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
                const d = i[1].split(this.formatSeparator).map(g=>g.trim());
                i[1] = d.shift(),
                l = d,
                f = !0
            }
            if (o = n(a.call(this, i[1].trim(), s), s),
            o && i[0] === t && typeof o != "string")
                return o;
            typeof o != "string" && (o = Nc(o)),
            o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
            o = ""),
            f && (o = l.reduce((d,g)=>this.format(d, g, r.lng, {
                ...r,
                interpolationkey: i[1].trim()
            }), o.trim())),
            t = t.replace(i[0], o),
            this.regexp.lastIndex = 0
        }
        return t
    }
}
function xm(e) {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
        const r = e.split("(");
        t = r[0].toLowerCase().trim();
        const i = r[1].substring(0, r[1].length - 1);
        t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach(s=>{
            if (!s)
                return;
            const [a,...l] = s.split(":")
              , f = l.join(":").trim().replace(/^'+|'+$/g, "");
            n[a.trim()] || (n[a.trim()] = f),
            f === "false" && (n[a.trim()] = !1),
            f === "true" && (n[a.trim()] = !0),
            isNaN(f) || (n[a.trim()] = parseInt(f, 10))
        }
        )
    }
    return {
        formatName: t,
        formatOptions: n
    }
}
function cr(e) {
    const t = {};
    return function(r, i, o) {
        const s = i + JSON.stringify(o);
        let a = t[s];
        return a || (a = e(os(i), o),
        t[s] = a),
        a(r)
    }
}
class Cm {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = Nt.create("formatter"),
        this.options = t,
        this.formats = {
            number: cr((n,r)=>{
                const i = new Intl.NumberFormat(n,{
                    ...r
                });
                return o=>i.format(o)
            }
            ),
            currency: cr((n,r)=>{
                const i = new Intl.NumberFormat(n,{
                    ...r,
                    style: "currency"
                });
                return o=>i.format(o)
            }
            ),
            datetime: cr((n,r)=>{
                const i = new Intl.DateTimeFormat(n,{
                    ...r
                });
                return o=>i.format(o)
            }
            ),
            relativetime: cr((n,r)=>{
                const i = new Intl.RelativeTimeFormat(n,{
                    ...r
                });
                return o=>i.format(o, r.range || "day")
            }
            ),
            list: cr((n,r)=>{
                const i = new Intl.ListFormat(n,{
                    ...r
                });
                return o=>i.format(o)
            }
            )
        },
        this.init(t)
    }
    init(t) {
        const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ","
    }
    add(t, n) {
        this.formats[t.toLowerCase().trim()] = n
    }
    addCached(t, n) {
        this.formats[t.toLowerCase().trim()] = cr(n)
    }
    format(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return n.split(this.formatSeparator).reduce((a,l)=>{
            const {formatName: f, formatOptions: d} = xm(l);
            if (this.formats[f]) {
                let g = a;
                try {
                    const p = i && i.formatParams && i.formatParams[i.interpolationkey] || {}
                      , A = p.locale || p.lng || i.locale || i.lng || r;
                    g = this.formats[f](a, A, {
                        ...d,
                        ...i,
                        ...p
                    })
                } catch (p) {
                    this.logger.warn(p)
                }
                return g
            } else
                this.logger.warn(`there was no format function for ${f}`);
            return a
        }
        , t)
    }
}
function _m(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t],
    e.pendingCount--)
}
class bm extends Vs {
    constructor(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(),
        this.backend = t,
        this.store = n,
        this.services = r,
        this.languageUtils = r.languageUtils,
        this.options = i,
        this.logger = Nt.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = i.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5,
        this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend && this.backend.init && this.backend.init(r, i.backend, i)
    }
    queueLoad(t, n, r, i) {
        const o = {}
          , s = {}
          , a = {}
          , l = {};
        return t.forEach(f=>{
            let d = !0;
            n.forEach(g=>{
                const p = `${f}|${g}`;
                !r.reload && this.store.hasResourceBundle(f, g) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? s[p] === void 0 && (s[p] = !0) : (this.state[p] = 1,
                d = !1,
                s[p] === void 0 && (s[p] = !0),
                o[p] === void 0 && (o[p] = !0),
                l[g] === void 0 && (l[g] = !0)))
            }
            ),
            d || (a[f] = !0)
        }
        ),
        (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
            pending: s,
            pendingCount: Object.keys(s).length,
            loaded: {},
            errors: [],
            callback: i
        }),
        {
            toLoad: Object.keys(o),
            pending: Object.keys(s),
            toLoadLanguages: Object.keys(a),
            toLoadNamespaces: Object.keys(l)
        }
    }
    loaded(t, n, r) {
        const i = t.split("|")
          , o = i[0]
          , s = i[1];
        n && this.emit("failedLoading", o, s, n),
        r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[t] = n ? -1 : 2;
        const a = {};
        this.queue.forEach(l=>{
            lm(l.loaded, [o], s),
            _m(l, t),
            n && l.errors.push(n),
            l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(f=>{
                a[f] || (a[f] = {});
                const d = l.loaded[f];
                d.length && d.forEach(g=>{
                    a[f][g] === void 0 && (a[f][g] = !0)
                }
                )
            }
            ),
            l.done = !0,
            l.errors.length ? l.callback(l.errors) : l.callback())
        }
        ),
        this.emit("loaded", a),
        this.queue = this.queue.filter(l=>!l.done)
    }
    read(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
          , o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout
          , s = arguments.length > 5 ? arguments[5] : void 0;
        if (!t.length)
            return s(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: n,
                fcName: r,
                tried: i,
                wait: o,
                callback: s
            });
            return
        }
        this.readingCalls++;
        const a = (f,d)=>{
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const g = this.waitingReads.shift();
                this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback)
            }
            if (f && d && i < this.maxRetries) {
                setTimeout(()=>{
                    this.read.call(this, t, n, r, i + 1, o * 2, s)
                }
                , o);
                return
            }
            s(f, d)
        }
          , l = this.backend[r].bind(this.backend);
        if (l.length === 2) {
            try {
                const f = l(t, n);
                f && typeof f.then == "function" ? f.then(d=>a(null, d)).catch(a) : a(null, f)
            } catch (f) {
                a(f)
            }
            return
        }
        return l(t, n, a)
    }
    prepareLoading(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
          , i = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            i && i();
        typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
        typeof n == "string" && (n = [n]);
        const o = this.queueLoad(t, n, r, i);
        if (!o.toLoad.length)
            return o.pending.length || i(),
            null;
        o.toLoad.forEach(s=>{
            this.loadOne(s)
        }
        )
    }
    load(t, n, r) {
        this.prepareLoading(t, n, {}, r)
    }
    reload(t, n, r) {
        this.prepareLoading(t, n, {
            reload: !0
        }, r)
    }
    loadOne(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const r = t.split("|")
          , i = r[0]
          , o = r[1];
        this.read(i, o, "read", void 0, void 0, (s,a)=>{
            s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s),
            !s && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a),
            this.loaded(t, s, a)
        }
        )
    }
    saveMissing(t, n, r, i, o) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}
          , a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : ()=>{}
        ;
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
            this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if (this.backend && this.backend.create) {
                const l = {
                    ...s,
                    isUpdate: o
                }
                  , f = this.backend.create.bind(this.backend);
                if (f.length < 6)
                    try {
                        let d;
                        f.length === 5 ? d = f(t, n, r, i, l) : d = f(t, n, r, i),
                        d && typeof d.then == "function" ? d.then(g=>a(null, g)).catch(a) : a(null, d)
                    } catch (d) {
                        a(d)
                    }
                else
                    f(t, n, r, i, a, l)
            }
            !t || !t[0] || this.store.addResource(t[0], n, r, i)
        }
    }
}
function Vc() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
            let n = {};
            if (typeof t[1] == "object" && (n = t[1]),
            typeof t[1] == "string" && (n.defaultValue = t[1]),
            typeof t[2] == "string" && (n.tDescription = t[2]),
            typeof t[2] == "object" || typeof t[3] == "object") {
                const r = t[3] || t[2];
                Object.keys(r).forEach(i=>{
                    n[i] = r[i]
                }
                )
            }
            return n
        },
        interpolation: {
            escapeValue: !0,
            format: e=>e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}
function Wc(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
}
function So() {}
function km(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{
        typeof e[n] == "function" && (e[n] = e[n].bind(e))
    }
    )
}
class ji extends Vs {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 ? arguments[1] : void 0;
        if (super(),
        this.options = Wc(t),
        this.services = {},
        this.logger = Nt,
        this.modules = {
            external: []
        },
        km(this),
        n && !this.isInitialized && !t.isClone) {
            if (!this.options.initImmediate)
                return this.init(t, n),
                this;
            setTimeout(()=>{
                this.init(t, n)
            }
            , 0)
        }
    }
    init() {
        var t = this;
        let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , r = arguments.length > 1 ? arguments[1] : void 0;
        this.isInitializing = !0,
        typeof n == "function" && (r = n,
        n = {}),
        !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
        const i = Vc();
        this.options = {
            ...i,
            ...this.options,
            ...Wc(n)
        },
        this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
            ...i.interpolation,
            ...this.options.interpolation
        }),
        n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
        n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
        function o(d) {
            return d ? typeof d == "function" ? new d : d : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? Nt.init(o(this.modules.logger), this.options) : Nt.init(null, this.options);
            let d;
            this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = Cm);
            const g = new jc(this.options);
            this.store = new Lc(this.options.resources,this.options);
            const p = this.services;
            p.logger = Nt,
            p.resourceStore = this.store,
            p.languageUtils = g,
            p.pluralResolver = new Sm(g,{
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            d && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (p.formatter = o(d),
            p.formatter.init(p, this.options),
            this.options.interpolation.format = p.formatter.format.bind(p.formatter)),
            p.interpolator = new Em(this.options),
            p.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            p.backendConnector = new bm(o(this.modules.backend),p.resourceStore,p,this.options),
            p.backendConnector.on("*", function(A) {
                for (var E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), I = 1; I < E; I++)
                    _[I - 1] = arguments[I];
                t.emit(A, ..._)
            }),
            this.modules.languageDetector && (p.languageDetector = o(this.modules.languageDetector),
            p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)),
            this.modules.i18nFormat && (p.i18nFormat = o(this.modules.i18nFormat),
            p.i18nFormat.init && p.i18nFormat.init(this)),
            this.translator = new ss(this.services,this.options),
            this.translator.on("*", function(A) {
                for (var E = arguments.length, _ = new Array(E > 1 ? E - 1 : 0), I = 1; I < E; I++)
                    _[I - 1] = arguments[I];
                t.emit(A, ..._)
            }),
            this.modules.external.forEach(A=>{
                A.init && A.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        r || (r = So),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(d=>{
            this[d] = function() {
                return t.store[d](...arguments)
            }
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(d=>{
            this[d] = function() {
                return t.store[d](...arguments),
                t
            }
        }
        );
        const l = li()
          , f = ()=>{
            const d = (g,p)=>{
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                l.resolve(p),
                r(g, p)
            }
            ;
            if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
                return d(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, d)
        }
        ;
        return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0),
        l
    }
    loadResources(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : So;
        const i = typeof t == "string" ? t : this.language;
        if (typeof t == "function" && (r = t),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const o = []
              , s = a=>{
                if (!a || a === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(a).forEach(f=>{
                    f !== "cimode" && o.indexOf(f) < 0 && o.push(f)
                }
                )
            }
            ;
            i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>s(l)),
            this.options.preload && this.options.preload.forEach(a=>s(a)),
            this.services.backendConnector.load(o, this.options.ns, a=>{
                !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                r(a)
            }
            )
        } else
            r(null)
    }
    reloadResources(t, n, r) {
        const i = li();
        return t || (t = this.languages),
        n || (n = this.options.ns),
        r || (r = So),
        this.services.backendConnector.reload(t, n, o=>{
            i.resolve(),
            r(o)
        }
        ),
        i
    }
    use(t) {
        if (!t)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t),
        (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t),
        t.type === "languageDetector" && (this.modules.languageDetector = t),
        t.type === "i18nFormat" && (this.modules.i18nFormat = t),
        t.type === "postProcessor" && Dd.addPostProcessor(t),
        t.type === "formatter" && (this.modules.formatter = t),
        t.type === "3rdParty" && this.modules.external.push(t),
        this
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (let n = 0; n < this.languages.length; n++) {
                const r = this.languages[n];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
    }
    changeLanguage(t, n) {
        var r = this;
        this.isLanguageChangingTo = t;
        const i = li();
        this.emit("languageChanging", t);
        const o = l=>{
            this.language = l,
            this.languages = this.services.languageUtils.toResolveHierarchy(l),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(l)
        }
          , s = (l,f)=>{
            f ? (o(f),
            this.translator.changeLanguage(f),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", f),
            this.logger.log("languageChanged", f)) : this.isLanguageChangingTo = void 0,
            i.resolve(function() {
                return r.t(...arguments)
            }),
            n && n(l, function() {
                return r.t(...arguments)
            })
        }
          , a = l=>{
            !t && !l && this.services.languageDetector && (l = []);
            const f = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
            f && (this.language || o(f),
            this.translator.language || this.translator.changeLanguage(f),
            this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(f)),
            this.loadResources(f, d=>{
                s(d, f)
            }
            )
        }
        ;
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t),
        i
    }
    getFixedT(t, n, r) {
        var i = this;
        const o = function(s, a) {
            let l;
            if (typeof a != "object") {
                for (var f = arguments.length, d = new Array(f > 2 ? f - 2 : 0), g = 2; g < f; g++)
                    d[g - 2] = arguments[g];
                l = i.options.overloadTranslationOptionHandler([s, a].concat(d))
            } else
                l = {
                    ...a
                };
            l.lng = l.lng || o.lng,
            l.lngs = l.lngs || o.lngs,
            l.ns = l.ns || o.ns,
            l.keyPrefix = l.keyPrefix || r || o.keyPrefix;
            const p = i.options.keySeparator || ".";
            let A;
            return l.keyPrefix && Array.isArray(s) ? A = s.map(E=>`${l.keyPrefix}${p}${E}`) : A = l.keyPrefix ? `${l.keyPrefix}${p}${s}` : s,
            i.t(A, l)
        };
        return typeof t == "string" ? o.lng = t : o.lngs = t,
        o.ns = n,
        o.keyPrefix = r,
        o
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t
    }
    hasLoadedNamespace(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const r = n.lng || this.resolvedLanguage || this.languages[0]
          , i = this.options ? this.options.fallbackLng : !1
          , o = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const s = (a,l)=>{
            const f = this.services.backendConnector.state[`${a}|${l}`];
            return f === -1 || f === 2
        }
        ;
        if (n.precheck) {
            const a = n.precheck(this, s);
            if (a !== void 0)
                return a
        }
        return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)))
    }
    loadNamespaces(t, n) {
        const r = li();
        return this.options.ns ? (typeof t == "string" && (t = [t]),
        t.forEach(i=>{
            this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
        }
        ),
        this.loadResources(i=>{
            r.resolve(),
            n && n(i)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    loadLanguages(t, n) {
        const r = li();
        typeof t == "string" && (t = [t]);
        const i = this.options.preload || []
          , o = t.filter(s=>i.indexOf(s) < 0);
        return o.length ? (this.options.preload = i.concat(o),
        this.loadResources(s=>{
            r.resolve(),
            n && n(s)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    dir(t) {
        if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
        !t)
            return "rtl";
        const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , r = this.services && this.services.languageUtils || new jc(Vc());
        return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 ? arguments[1] : void 0;
        return new ji(t,n)
    }
    cloneInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : So;
        const r = t.forkResourceStore;
        r && delete t.forkResourceStore;
        const i = {
            ...this.options,
            ...t,
            isClone: !0
        }
          , o = new ji(i);
        return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)),
        ["store", "services", "language"].forEach(a=>{
            o[a] = this[a]
        }
        ),
        o.services = {
            ...this.services
        },
        o.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        },
        r && (o.store = new Lc(this.store.data,i),
        o.services.resourceStore = o.store),
        o.translator = new ss(o.services,i),
        o.translator.on("*", function(a) {
            for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
                f[d - 1] = arguments[d];
            o.emit(a, ...f)
        }),
        o.init(i, n),
        o.translator.options = i,
        o.translator.backendConnector.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        },
        o
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const Pe = ji.createInstance();
Pe.createInstance = ji.createInstance;
Pe.createInstance;
Pe.dir;
Pe.init;
Pe.loadResources;
Pe.reloadResources;
Pe.use;
Pe.changeLanguage;
Pe.getFixedT;
Pe.t;
Pe.exists;
Pe.setDefaultNamespace;
Pe.hasLoadedNamespace;
Pe.loadNamespaces;
Pe.loadLanguages;
const Om = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , Rm = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , Bm = e=>Rm[e]
  , Tm = e=>e.replace(Om, Bm);
let sl = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: Tm
};
function Im() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    sl = {
        ...sl,
        ...e
    }
}
function FE() {
    return sl
}
let Vd;
function Pm(e) {
    Vd = e
}
function LE() {
    return Vd
}
const Nm = {
    type: "3rdParty",
    init(e) {
        Im(e.options.react),
        Pm(e)
    }
}
  , Fm = "/assets/CreateTeam-D2ftuCpZ.webp"
  , Lm = "/assets/EarnText-B2de03nS.svg"
  , Um = "/assets/MintModalTitle-ssVJ-A7b.png"
  , jm = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='52'%20height='58'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%233A2824'%20d='M0%2027h52v5c0%2014.36-11.64%2026-26%2026S0%2046.36%200%2032v-5Z'/%3e%3cg%20filter='url(%23b)'%3e%3ccircle%20cx='26'%20cy='26'%20r='26'%20fill='url(%23c)'/%3e%3c/g%3e%3ccircle%20cx='26'%20cy='26'%20r='25'%20stroke='%23fff'%20stroke-width='2'/%3e%3cg%20fill='%23fff'%20filter='url(%23d)'%3e%3cpath%20d='M12.331%2017.596a16.181%2016.181%200%200%200-2.3%207.393h6.488c.053-1.852.25-3.632.573-5.296-1.806-.55-3.416-1.261-4.761-2.097ZM10.03%2027.01a16.183%2016.183%200%200%200%202.3%207.394c1.346-.836%202.956-1.547%204.762-2.097a32.966%2032.966%200%200%201-.573-5.297H10.03Zm29.67%207.394A16.183%2016.183%200%200%200%2042%2027.01h-6.488a32.955%2032.955%200%200%201-.573%205.297c1.806.55%203.416%201.261%204.76%202.097ZM42%2024.99a16.181%2016.181%200%200%200-2.3-7.394c-1.345.836-2.955%201.547-4.76%202.097a33.15%2033.15%200%200%201%20.572%205.296H42Zm-3.449%2011.073a16.047%2016.047%200%200%201-7.408%205.259c1.415-1.735%202.573-4.167%203.343-7.041a19.27%2019.27%200%200%201%203.335%201.367c.256.137.5.275.73.415Zm-17.664%205.259a16.047%2016.047%200%200%201-7.407-5.259c.23-.14.473-.278.73-.415.98-.522%202.1-.984%203.335-1.367.77%202.874%201.928%205.306%203.342%207.04ZM13.48%2015.937a16.048%2016.048%200%200%201%207.407-5.259c-1.414%201.735-2.572%204.167-3.342%207.041a19.258%2019.258%200%200%201-3.335-1.367c-.257-.137-.5-.275-.73-.415Zm17.663-5.259a16.048%2016.048%200%200%201%207.408%205.258c-.23.14-.474.28-.73.416-.98.522-2.1.984-3.335%201.367-.77-2.874-1.928-5.306-3.342-7.04Zm1.855%209.526c.282%201.495.46%203.101.511%204.785h-6.493v-4.052a31.657%2031.657%200%200%200%205.982-.733Zm-7.984.733v4.052h-6.492c.05-1.684.229-3.29.51-4.785%201.857.416%203.871.671%205.982.733Zm0%206.073h-6.492c.05%201.685.229%203.291.51%204.786a31.659%2031.659%200%200%201%205.982-.733v-4.052Zm8.496%200h-6.494v4.053c2.112.062%204.126.317%205.982.733a30.95%2030.95%200%200%200%20.511-4.785Zm-6.494-8.095c1.97-.061%203.833-.3%205.534-.681-.419-1.56-.956-2.96-1.58-4.152-1.252-2.396-2.668-3.656-3.954-4.082v8.915ZM25.014%2010c-1.286.426-2.7%201.686-3.954%204.082-.623%201.192-1.16%202.592-1.58%204.152%201.701.38%203.564.62%205.534.68V10Zm0%2023.085c-1.97.061-3.833.3-5.533.681.418%201.56.956%202.96%201.58%204.152%201.252%202.396%202.667%203.656%203.953%204.082v-8.915ZM27.016%2042c1.286-.426%202.702-1.686%203.954-4.082.624-1.193%201.161-2.592%201.58-4.152a29.67%2029.67%200%200%200-5.534-.681V42Z'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='b'%20width='52'%20height='56.2'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='4.2'/%3e%3cfeGaussianBlur%20stdDeviation='2.1'/%3e%3cfeComposite%20in2='hardAlpha'%20k2='-1'%20k3='1'%20operator='arithmetic'/%3e%3cfeColorMatrix%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.3%200'/%3e%3cfeBlend%20in2='shape'%20result='effect1_innerShadow_1846_26364'/%3e%3c/filter%3e%3cfilter%20id='d'%20width='43.169'%20height='43.2'%20x='4.431'%20y='4.4'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='2.8'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20values='0%200%200%200%200.141176%200%200%200%200%200.176471%200%200%200%200%200.227451%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1846_26364'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1846_26364'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='c'%20x1='26'%20x2='26'%20y1='0'%20y2='52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFC700'/%3e%3cstop%20offset='1'%20stop-color='%23B00000'/%3e%3c/linearGradient%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h52v58H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
  , Mm = "data:image/png;base64,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"
  , Dm = "/assets/CreateTeamCn-DDdUZ3rI.png"
  , Vm = "/assets/EarnTextCn-wsflDu7v.png"
  , Wm = "/assets/HowToPlayCh-siN7pUMs.png"
  , zm = "/assets/MintModalTitleCh-zbwJfThI.png"
  , Qm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAABkCAMAAADNPz5iAAAAAXNSR0IArs4c6QAAAEVQTFRFR3BM13RDzWw8xWQ5Vyoj0m8/yWk6VyojViokWCgiWCoj////vV423HpMajkooVMyh0Us7enowrGvgmBb2M3MmX56r5mWJnD3wgAAAAp0Uk5TAP///6n//+FuLbJheWUAAA6kSURBVHja3ZuNkqSoEoVXHJke2gLUst7/US9wyEx+lKrejRuxsQdFtHq6/TxJgpbz1wf6Zf5l+v3716+vP3/9Q/02/079M7QvA/07yf5zZkG//6Zlf0zQqmcuGvWdVFhkR2G51tKWIDTGmlfnvBWwT0Lu6yJheHAMUKjEKrejxlDCIxWEvV5TsZmdJbCxYYD4ujKLneqlejqGGyC1VEMeoZlCod1pJs9+jQPuN+Abs6weucUcbFRv0jgAhzy9WxPKFFva2aFhoOpNjYecnhlsHsBJwfIp1cdgk4Qhl9lTD3ufyb/KYxY4qIY8Ut6r4kL91iNGKrkWbXHOIypvEax/CrMANF/j1E0wDdiWigf63K1YarJYKQ+uAZXWngJREgZ0a5ZC4701WEowZlODsOPS9C1UQYsD1x2Vm2c9OzYV2b2Dag2SJsqtTdQCyMCkAaJA8Q5z/bnOFuscpPVKgQizhgOwqmH02DFIfZjQ4Qzx8B4MoiXvrJf5MFH5lZQDMWX3GepHLsWLwI2jkExjNDUAa7IeWSR7hV1BLp1xMwqDSuSsyXJrr3mdSUxaM+kWiiEajvHYW+73eV78jlfUdePyF1P1XOuPNQNbwP/vwl/x6F5NCCaYsGBDgeh/BASmy2MzFyxZM47Vm89hsOrUXm0dhl99sDGX+wEUViLoCn0CNKhDGB/XbVunkitHCVyyoG+iNSji+x9CkTVtm/3iRm0WA2MdSUslC/iSEfUEaXosoUyPaQqtKSg0lZ+nRWk9vw29vsFF9tpAu2VYx1CyVbzgENnFE6SU/h9IlsQX6rAhUqXir/okYZS4PVuJWO7VQGPTNFgIUmElu8QsFc5chbKkGgWuRRexokTs6CD+9FW+YBQCklZn2DrwaCjFw4tScxxCILELEyRVz/Lwg5lmQYFv8cAjNOIKLeiKPOvNWkQKPxBEBFh7t977lFgizIKLXsvR2NU9q0AVhWsRAjORwTNUCEwqYbnXUu+K58DVoL0TTiVfJPzNsUwQx2CCwUrithK+fIGoYIcpuxKr2Vjv1glAImd9OKyHJ7lY0pilki0m6Q4uwSiRgIlyeE1JRacjDIECyGog69cSzJssuz7u5AzJfwolUZhiEFC8oGrm6EKITd2Dpk445syxn4eN145iEBf19TqPeFzfmmXMc4t6WjN/jKVMELqWnRmllxIWlLygQi3qJvLevL6DNmvW8nbEmO+op7GPO3lzfkMvY/owRHz0smliiK5V9K0OUFU1vFME2Kq6V4yrNc+EZUw5Y1/N8R21G1/fBovrztjtO+swdvpUPnYupPcu+kQKMMw0e2vjlXDr6KFmWFabZIC1G4N9n2TNSefrIUc39KgnbcwOJnjtxjBIWnFJnQsZg6ya76MQPq3WsPw6vGN0BrLfUaepBdhva0geNHS3qABOehpwfcC2Jqzf1ajVPzpTZQA6Y+y5b+HP7PE8Xc8jxZnjmYTzgg7z2qENQZh1Gh9puEyeQlC613pNIi1Uc7w7AdZnbilvzLFxYAQwf9mzCOv87nSYrT0kfeyS6vVkrvkjt1TCMkEKTsGmm/6lk1ev5gq6jokfwfwYa5LijM00G1/I85brQU5hNUEJ6xpGsjo9Y2Mq4UL2ECh5avFzt+TpmKQLa/BrwLUOncIGWOzWAM0Z6OzPMoMVblH5O1jg8kJ14mJKdIx6Fgay1i3RXLmVutS+naY5JSTeY9sDnAdUkzL2oBRMzz0LKQNHcRg6xS3lEYEZBEME7/rl1qqBW1eGeWPjxYNZjc7UtXdrPI9ZqDjBP8VVEY9aIg+qSVtQyWBnigPWWH3Zs2R6XWERT68Vp/ZEZDTa+cNVLXUBlkW/H41akLVpQF6NZPY9HgbXJuFh3A/duiaziO0XzqXRlmFfxrZf7TgbhDnS8xUlEDwhrOSWGIDmrKk8+yVx6SqYkVsjs7b8674vZHgmqysslbAImkPufEK4Js9CR8By1lj8rEy3tCMuMUzAADV263KS63DBR1g4Z3eBhUuyHYxFJ93rNN6Wo/0LEbhOE35R8U/3BKa76EMRLMbpxaPq3idCxNErn5VronD1PsfgSVh2iGVgFe0mOfryirgEzPiZicZuXQlYo5TBWMtScfFNif0My75kYnaAxONbEWtsFHodmyk5UdxqsALTdRAqCsLNXid4Q+PsWrqVc6EF+mdBKJ890XzlpLdYA6BDLuwBKh6HBe6dW4pTBv2i7SIRntQQt7BZnYW/R4F1NLN30QHfQXgSFtwiLEtpUib0j4Fbo+/wncln9USj0ikx2PYtZfPPb8W9yW6StuvBDJfteZgCK3EJlrF7/rcWSaNN9eNxS9xyhpPd1VT3pIYVt+AYQlDEKHy/3+nA7U6DNZVYGNfQ2VQ3zZhu+hbVAuYoQT2tabLGk67w9rKVW6jgZIuFsQwGk3g28dqtabEW6lugiZ+eaZxWUyOwfdS3cOcIQ8xRnydIX3JPuZRl9ea8xtqaee7zzGAEeOsW/5BQdXnj8X7cUp7HJZjW6gUutFwVhdbCyhar76E59Kxl1/q+JVj5x9aSSLz66H5rLalgVaNNTqKZ7roYbvvrDMrg53mYu7HLGu8tTrt2a2ndghxzlFqi3s/gLVvBV77nEnSryy/0rSFRgocl7eXhqbKFnOe/6hLVIlja2SQPigl/qXiVRWvdu9XAUTLbQXXPtefz9sCqnqhZwZJblT44vcaTRb9OhHX245aetLdBq1YammVFJVhysCbL4+lmB1T0MTJj4smpcI4MUTXW8Sy0yaTcrosPVcCwdJl6t9ZZz6u3HibUo5KaVVgqLM1uXZh1wo5b7dS9bN27PLIAu2WP83X0N8noudYty+qWyCHzGpeiaq6wItiK8FJdWWYlWITdxeDJM6R7wYctR00B1fQt6NVPK/DEwgaP0VdWYzmNzFEllgYQKDqm3i3iIjqJQTybGemZwfeyc0Wq6M+OSBMsG5ekKgT5O0kv9wyuxwKVbr4alzIrwbqePOWkRX1jaJfFiViZZqDjt9qTe1saqF5CBV8gypX7FRZ/exyNCYJJBVmTMrBU8ma/vdHqb7vSxsoDKIRwqz1RJZr8MUZiofLm4A/Wa7fYsEgVBC6wNVhNCALr2N7HIHU/fF2TmQKc703e9teRqLAnUWnlXaGVp5L2Eku+IF8wIneqsFBYc8Iy9onbpfdReKQZopen8bYdoU5rkl7dnN66mbGsOdlX8tAwluopxlgXUZjS82E/wTqNPeL5+fz1Qlg9TmZ77idAjjoBcscy1oMIVPTpYajDaXFrGeCM3RI0z5f3PRbPq6NSTnPGnC84xMOxDSXqrB8wSQgK1Q4TtQpx9jexFJzKlhEhpiljrObxV0xd9GKQMxdzQiKTefPTSgw6UPGdsH5A/8Cti2w4W9y3fdS3cLbl+1wGGK1bqMSwLUVbMGzFvZ2Mb/7RYamJv+XvnxCiTJezDLSh1eIcnu+ontmHtXwhzRIFY1nrnSVWWwaij4m9faS79lga3z8M1QUhwEo0h5u2/Q0VztXXb+t6MoaxXIxQR7Ac3Fuyy8Irjkw2q57Bg+tjLAlBqQXsHM3gTyTpgii1nAGtFSx86I1kDmTDRODgIFFFs/JNVYkFfYTVvFYaKzq7mNGSjn27ZNoPQ1QMhEZ6W8sFe0qsICS8sGSMA+8N4Y2KnfOPp5fGa7dAGpb3WOtQ0S6QHa/9SRPXbXvuyN/oKytEbqUVDAVWvlxaORuVMiLuSoJZOLIn80NT84s1lVst0RgLISRbEWLmXvjU9+/uSqa3R5Q1LgAtmO8oGj2OxOAemg5E2CC3wC0E4XFGBSw4heotliuZHJaKawxmQTXnQm2OYtJKyTmSZcNAFT3JdmUqQBEWSYMHC9YBFmhu5Tkptzyx3L4sPwcpvPwErYEHitvVE5ZfkuZ0wEb56j9CxqMoc6JiLtqOg7CXq8BQlSXJFyS4IcIkO8+vZ0uaySo8+5r5+AIpZyGXobJdlqXjfk+zDFOGu+9jzrVuWTB6N2tdvEoLQ1ADYhWsCTz0gpT2dK4kl6mWyi0vWImpfI2IMN+75S7jSevA5vkveBuzty6mLdiginsopVtrQsLDKWwcjkLZL6+BE1fwVW4tEnwCB7AGi+8L+G1c3LfDcejBq6j+qoJLs1ErKb+vjt8OMAdrWMpX+0BbHYpbNYEQeAm0NFgPHGklb/ajJgkF/QzaoYGNPHEt/kOy1vAoCBX2koPLQOIbWlJaz1AJVjr0UA+4+aCCQ6FmapCUEgAVK0DosKB5IcIAF6oMphqcqUMEl2ylaxFY6ZYCU9qEVQpoH3TyCJ6k5r85YBdcqK+ZqBamDmr8HwmlidJ1MMGiP8aXmzXHNUnP12/aiD2ER3F3R0YFcK1nAzZpTkJKYFwJlp5rgYbLjRRvJeyAhL2BhAylckt1fJ1LCwhQmj5WY4GGK4Gq6TpKASsLL72A0xUsA9fIJmlzoc41cgtQOrfaZ9g9GJBgVl+uJU8TKxKA3UvckobYeOMWgQAMFLRwNYrI0jOybATWmAUf0QLnwDSscErKnVsaNa8l1Tsk1XClLepetVtCR+tAU10JD5rXbtWdKy8Ch7WhkgZMksYtEjZNIShpj+mEp9guDZbAAUrMYtMGYhgASTbsyYQIW07wAjZO84wgo/bQLcD0EShROHpVPiFIod37jIFFmKgFsLYluUHcIpQyI7ZuraBhs0AlHLeWUVcq3fogD2YSajLS0C2JPoKp210QwhIuVA3Dj1B6lvEEo+1PqIToigzOCJ84JRPTSNJgdaOwHlIxTztmSVN4WqekjNVz0SolSP7baIUlSJmpd2s0iRqMwR1NFXQdmJJWlx8qKaUwwRPdYAkYA43dAkHLNYJC/DU8H5uGMMMZ3koXWEJVQQmYvps1dT1rMPjWsSfNHkr1mSKZ81ZN32qQepfm+7kFWFCGSA3T5wbNn0nfuIWq4fq8R+nBqCvWCBIfVXdE+jMi8USFqnGLwFqqAV3lFTRwq/OL0G760I+l2K3/Ad7wU5yr4R67AAAAAElFTkSuQmCC"
  , Km = "data:image/png;base64,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"
  , qm = "/assets/StartGameCh-Ck5HSfAJ.png"
  , Hm = "data:image/png;base64,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"
  , Gm = "/assets/Language-nrCVBSIu.svg"
  , Zm = "/assets/RefHeaderReferralButton-FVU7y-hw.png"
  , Jm = "data:image/png;base64,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"
  , Ym = "/assets/Startgame-hyk9YXcr.png"
  , Xm = "/assets/TutorialTitle-BtZFHiLS.png"
  , $m = "/assets/TradeTitle-8wkFq4B5.png"
  , ev = "/assets/TradeTitleCn-veq9ly4U.png"
  , tv = "/assets/TradeModalText-BeNG_bua.png"
  , nv = "/assets/TradeModalTextCn-DksAR_E9.png"
  , rv = "data:image/png;base64,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"
  , iv = "data:image/png;base64,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"
  , ov = "/assets/PotatoRangeTitle-jj_LeUHu.png"
  , sv = "data:image/png;base64,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"
  , av = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABACAMAAABPy0nxAAAAAXNSR0IArs4c6QAAAF1QTFRFR3BMFgcHHwUGFAIEJwYJFAQFKwkLDAIDAAAANQoODQICMwoMJgcJMAoLLQkLMQoN////8vDw5uDh5uDg2tHSzMLDtKWmp5SVloGCgGZoaUpMWjg7TiksQhodNQsOTVVAygAAABB0Uk5TAA4eLj9NX26AhZKgrsDW7rVjTqgAAAZCSURBVHja7ZrZcoM4EEURi2gwkgIxq+H+/2dObBcRtETkZEhN1VTOo63t0C2rZTv6448//vgjQJxKKQsp00RE/xvSQhlYdCVj3qJSG2TkR1YqwIUNzEdWlYz8LVwuRRZHX5AUD6n5No7jMI7T7SknRWQpsOcSWVirEFm04wIExpb4An1JjzJQAZiHrn6zXLtpAXQhPhsBQ2vpFmSRS4alawMMMOxZLH27pZtRRDv0Ojej64dpAaC9+ZMbLEP75tJNmy4S09uW3huyAsNbkBnxftUda9Ay9ZTNzVqPM6CdjBQKGOujPjNQrGLj3tordkH3XbEU8xtnQhoQ29Ot67TEGkv7dswAaPGrYhcMnlmrgBijHpiZ0JibL7s0M7T4TTGDxl0njGBiIfq9WcG8/GbFL4pJ3N5cJuRMLEgHyM2oC/dyaRZkvydWeXv0UEwsTL8Js0b/Yo/fEouBxrdnFggmFmZC8Rmw+e3VHueL8VOE5+K3xVoYwU6QcI/fElMHHVqooJj/afhPkLobhqH1LCU9T6yDFYsBe4ayXEwOxa7dk8YZuTooEwY8mDvn9eJHYt3sAVDr/mF5wKbkYnyZ4OtvYJ5pABabEdBKKQN0zqP4mRg8GEWCl1P+9D8WM/oOuMDyzAWeBh1MSXcUlpo9Cv1DMV06EH2KJfvN0O8XmR6LKbqj+N67IbGjWkZU9ESj55XAT8XIxYpdMO72Vc1yMSBGWHw1Zur6lkT+RwH8UMxohqqIUpuJ7a51xz68g2LwiWXu6olkmmY5ETBc3y0D9Hl7TKUHhf2Eia3yUKzKPpAVbj4xiZGL5fFzIFJglD8SazqHfoH0F/Y1wHJRHUesuGPQOXvML7YeHZIqbTboC512jnWobCY2LLwdK/EDH/dMoAZij1gDE6+PiDhniPGaIttn0gTDczH3i7XDg751j4gDsWiFOPn5YrwxUO5zsYdiYgFGqICYG7LkfDEBlomaNDpW4n9HrJlRhsSiROYbZBydLyYx8VNU8VwsviM2QFPkFdPRIeeL8cJ+QZkTlpo1fV3sCpT5fy9mC3ubiTFpLptasXAiKsr+ezE+4AijLspgYiW+FQt6GSLhW2q93WNxcdlQnLjHOjzFnOA84LloXhRrH17SfxcCopXMYIdOTqs8ZpTPTJz3N9yVxs3FsNgAaCISQTGNsdswQZ1VK67fmhd2PIabi2Gx6eGVrgf/5H4X4X+rPq+61xVJW9iHuMKIV8RaoKSc1dashPFuFeDE+5i0kweZkLpi/fxBy4oOnYtVjF/Teug1SdGEb9BKMrL4NbHEXjGD9FD+Ipi91Gwu3InBdZ9wM3SeprICBh5p5Yp5KBwxGJeLiCJt53bhJb4rpkqg5a9tfmjpnbPgSc/3sCvWjg4TYLiYFy1sYR9iQu4Tcy75tQ2ZqNw92Q3TNPa1O3rFxLwMwF6sbjxcZ+QssoFc9ImRGzK9itG6lUI0QP6KWGPFAkd0YGZW4vvE3JDNkNGTXGF48Z6j5YliLdv6oVwsXLEidkPWfd64s9I+uNAhkZ0pxpqFWiuPWJTakDm/tiSkcHuxbE5OFmu++iZ8P8aCwiMmbMicL+wEkQknY32DIYrOFZtYqu/hGsoj9mXIMiqBIexVUnaqGGv1DpRbgJo194j5QtYA8Rqyiv0ZgnOd714kThVjJQ+vTzR72LNPjIWMndIZUWlgc5pTD3h4pdGpYmyoGyracmE7f/CLRURA4/9VTeQPM0ytX2sBFBHl0WtiV160+OnQ7jPR0A6eYi1w84mlpPiixvUsi+kDZYB5bPcZ+d5PAPTl7iXuwQ3/waCeAMxN+NMIwz7ZNcXCEpPCfN205wXN+3oUUwkM9f6ddK2E6YOyMgBwm4ah+6AfxtuCp9bqFSUaYUxp8H0MyWiLJD6K4j3So98YTLQS53SnUpq10BWR9YoSUgYBdEmlRhBdGWxQREm0JaZSG1j0hc2t1rsyUaXZCuJoRTzMnoFTSn+gVFXRSiZsaH+LPNpDIVaxzHfZs6Q5HSFj+xh/j4yJpcQ4Wr4ghzjaIJL8SMsi6QVE/pOACSbmjJIdhTh1g8+IM8laZAmbL7PTHcdXZBREJvluIhFxRJbvh02PeiRyP7SIPMRJmmZ30iQRf/9p/+OPf8c/+iJypujKPCgAAAAASUVORK5CYII="
  , lv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABCCAMAAACowC5GAAAAAXNSR0IArs4c6QAAAFFQTFRFR3BMCQMDJgUHGgQGDgMDKgkLAwAANAoNAAAAGgUGHQYHKggKLwkLMgoN////8vDw5uDh2tHSzcLDv7O0saGimoWGgWdpaElLTystQhodNQsOeEsZjwAAAA50Uk5TABEhOU9gcYCAl7DC3/JvKPz/AAAFFUlEQVR42r2Y23qzKhRFCXgAATUGEef7P+je8EsDaFtN8nXcJWocmSCuBYnUAGRNDqBIIScRSFDkV6jG4gDV0gOB1USuCFgTOSOgYPveOACCEiYz4PoIIHN+EDD9xnhCoIUb/bmT9SnUyEgFSj4kwIB7PNsCwDKl3PvIlOMFaH2ITAV0fcwtjrLC3H8xOcD2pwC8/DGpwHfECddh6VPmawLOHjL1G4M9ZgVNJkDGeEUg2l/GbQIUWAqB+U8FmAizLg0AfycQaKQG7FcKg8MyZXz3FHxIgHEuUgWLK+vA+wI37hEScOHJMYDSsL+vAw5KfUSg4gGhQgijg+QS85kfEPxtgU2h4Z5Ow40Wir8oMIyBoY+ET+XRXCAqsCaGAC1eFZjgSS5dAdjiqD0UaOg2EBLoOK+7cwJNXQhorYFHvzEAGjY7qo8FWkDWtPYGSnLOSHtOgJJCQHGucU8+d7DZ0e5QgAEroMS/qdDB45aEPrKkIFAIiOShNZCnBKjCPJgFQBcFzq4DewEJ+9RFd0rAS8dKQAouYPvT7ASAMZ2luUDTdFjGSBSosYZrokJ7VcCNGw+otLK4+0IkFZD+ZsCS1wNUx9IhKlwVKIcrYiGrUqDSwH20qYDM7zcuVwV0JLgP2TrBcgHGaqEx+D/qAIAdViPzNQHKA+F1tpr+iYHmt0Tgnmc0GsDXhIDp3xQQnVQagDND/2Rw6BqSCAx2CTziZ+ggANgsgglw9jSA1PC4eeozLDSvSPX9q2qC8gK1yhVGh6u4xT6GvsAAglNSxcT3zJA0VCNCbgpRvPMA4y8skF3XKaz3fo8BOt6ERbZwS5cp8j+xGFnnOHME9wD9L1h04WKs49H9wzuFMIWpP2SEbjaBTcGNYQA6fk2gUbthHmy4v/992sWjJXZrxlnNYzGC2X/LrwgEdPEgPRy0P3TzAlxjPp4BWlQkK8l8CH4AGuY5I9AyxqowCMk4TwugBPcD4OECcFN/kFHHKSGpQggBsrkRzxmBEGHFuYKNPzyvCH8/3p/UXGhgXez8xDp/UhiiXEEEg1JgnDLuiUC8BeAjuJsFHh1QG1prHCA4r0gKbXyWMA6K5gIzMpZS4Nb4CIxdcQXBfdQZLBQTo4NimcDDZsylAKHeHBgv4MIqVVKFYmJYgPbsHIjj7GO+1hJwdrivFDNvTwvE3uqqACU7KGI1ZVbIKwKk/oiAgE3eSJcE6NsCMYDIRQHSNO8LpMWwgQK+PiwZNheIvC3AsGb19Il14LMCaT1toJMxvZuMx3cCV3bJ1p1ADZf6dfzsHIhc3SekuwBMFkBzVaArUKmA7nbcSEZbBsCuCvACmQnwHbfdI5gHQN4VUJcEBGwRAPnTBGq4MgByeh0QMqAKkAmoHdJTk8BNwRQBXKgH5Bu75W0yA/MAcgEphPpBwEyHPLfHpmMs2nIGxgBKAc7FDwJT/xoz2rgGlgHsBbiCHQPDpwXafQB7gVh7pyyoPiLAVNLWzyGAUkBQWscH+/MChEnEjY1QLLIokJ5HedljjQD7jEDzb49469d8AHuBUHhiKHq7zwiwrSOZ/Z+KAewFaDEGBhD0IwK02RrDZYwBHAmQuoPNGkDJNwE7v8aCNm/LVmjB6XcCLOwxTtNkjN0aQOKReJ02lmPNtkUgn/3a/jyOJ1ry2NsJ+To12biFYeg057fvBerYcspOJC+0mr8OSxvDQEUi+/PY7uq3BaqiO44N67EA5SkNI+QTCfwHmp+72NnK7fIAAAAASUVORK5CYII="
  , uv = "data:image/png;base64,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"
  , cv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABCCAMAAACowC5GAAAAAXNSR0IArs4c6QAAAFRQTFRFR3BMAwoHBiwZCSodAgsHByEXAg0ICjQiAAAAAg4JCjUiBBgQCCgaCTAgCjEg////8PLy4Objw83JpLSth5yTdY2DZYB0SGdaOFpMKk4/GkIwCzUj8df+/wAAAA90Uk5TABAfO0RZaoCAkJ+ivN3ukBu5lQAAA8NJREFUeNrtmeuSgygQRr1EAgp4Ixr93v89N4MkQDCDlu6ktmrP/MkQtU/RHZqE5CMFXPLkdzIOniWr5HAQyWYKjP2TKSaQCQAi+yBw7w1qn8BQPxmRx+JP3QSRrwuMtaE9W8DGv7d1MwAk0VxLh8oVkKXL5aiAjd/UDxRw1SMcLq6Az/WIQBjfGnCo3qU2NL3LcI5ALjE0taGfUWqBro6jXgJptgLxBIpsjZ97Je61pZtRpbsFSqzhCayi5+UiMdSWdgLfL4B5WuFWPxmmNczylOPdoNwv0Nc7sZWRUWaqwBrgLwUo/TG4N14dQHUu9i2X4aQZCAwUsH0dOC6QpG8GChACGCyqNjSDZQQEOUUgyYg2GF7xOaUSbeTuHoJejgtoUmNg4/+hgDUAlIn/pwLWoAJ6E78gWwQ4yUOBNv7p8QQyQ04Z4wDAGaN5koi4gO4agYCKLsV+i+IIkFVZltLth91aNxwgHtcVoYAUC9INZUcDgekNCB5dByxlKCCqBe6F4qujedh2Wgi9G4jtBzQDyuMpCAXsWIw+FOhHi6qf3ILR8wW287/Af0Ggb7eh/i2BzZwhcOs1jRWopJTANP7OBEgpTxAwtFaAUEo5VHRHqNvWUYFSaM4TUNFt+c0TIFQjzxOIL8VRgYIQskmAEHIJBThb8NtOZUejAsmDK9S2bwVH23FeaA4IHEyBQXwWaEaPISLQdpZ2dUvWbhEobA208JgiAluICzBIOwODx+0PBDIOYHMNnC8gJeavCgBjM39RQIe+fVFg+unP3fcEmuXF/J1PgUXtWQf2d8O4QBcVOH8p9rHfH1qfQOBYNzRINLWP2leE42C4g9OFN4HXqMNLIMcUPH6fgOUlUK0KVKsCpb3WVD52CRDOq9cf+zgDIZm5H7NXAu0d+wQK6nBJF4gn8BzNVwTYW7RuhhQHBH79uT4USPlbfAUI9nE/cD9dICFA56efUxoKjErTrwlkuUO2+8iGYWrc9FfUF5C6eOcmSMFZh1YXCeWkn1FKCXsToEFRDCDnCKSEVkBr008pLdLruwDHWHtMKE6agfz1dAVwU0aBAAUav1nIy2kpoEzX4WDiZ4kvIPSP+gL928nOUQEL0VNwB3T602RFICHcXS27CZJmpwlklAED5JL+ZFUgZ89+0XRqBCSLC8zTk9kIfE6CAMCW9BuBaVy4LwIJBR7//DzLdBySWA4f31O+5P912TU4sicSBskral0/kjOXyHRdKh0/tfqVhZrnPV6yB1QTm4Bw0f0dKhklqZsUCzGF4vK6+B/KNKsvEP66agAAAABJRU5ErkJggg=="
  , fv = "data:image/png;base64,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"
  , dv = "data:image/png;base64,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"
  , pv = "/assets/MarketHeader-D0iwlKFU.png"
  , hv = "/assets/MarketHeaderCn-BNRUdp0B.png"
  , gv = "data:image/png;base64,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"
  , mv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAzCAMAAACwnpZtAAAAAXNSR0IArs4c6QAAAF1QTFRFR3BMEAUFKgYKFwQFIQcICAECNAoOAQAAGQUGIAYIKAgKKQkKMAkMMQoN////8vDw5uDh2tHSzcLDwLO0s6Skp5SVmoWGjXZ3gWZodFdZZ0hKWjg7TiksQhodNQsOy+9zrQAAAA50Uk5TAA0gOltxgYGXrr/O3e5KnJ7FAAAEt0lEQVR42qWY67qyKhSFVSQQQcnMPOC4/8vcgnJoVWu5v8YvKJqvgwnT+ZT9ky4AZBmmxUWRjCBIZBKSk2xXfvlF5D2AAncDiMLNiLC8nGBunDqInSZ54fj4RZe3AALcm6Y3wKXISwGs44JLSqAYu9EAqGmxEdbhg+b3hEJisJH0AEgFrEPb6BWXhFDjZgcOshFM80EDeBFFSO4AufShGm2ApW/3tSoSZIg5g/9O+CHByzy7wOi4JNAMIgEYw6fkN8LdPGmGlQTmSGhua+fjpoTrPuxR545wUm03LKgvEhj1q4k5EhJjFTtNCFnMWQ2YPkRDGEZC7y0oVlqC1vp4SK2T8TtCj4owxhXwaPdUy2giEExioTjuQ5pav06/Tb5gVgI2362BZEB3pM0Tni1khVLqPOEBTijjzoa5jlAWNjvPwxoIYxcskCzLGWPnCRNYljMowZkEoDiTCmvbdBOezpIZdXMHJM+eCd1g5dfd+023W+/UNk4L6OYagBI24RXjADDMQEpwWgyAMhIShXxNj5t7EsQDDpS5xKObAVVJwRjF2nld/aH2mnYCpfQtYfUk1NIvuAKkgtkMdcbtEf31sI+W4PRKiHloAcaTklP5otEbQORfEXq/9VzgcRxIKODm694IcPINYfQHtJY+6gRgcCNvQ/4/wrW3CpmOxRja+/EFIyTpPOH1PvhErMDS+JxwBSw6XI/oQfeJupOEu1/n03CDpKxSwODXq5CHHonGk4Q5jDqfEluVeA0Y7YDg7Dzh9U5jbY9tMk04VsyKK6w3W1gF46d36UUd4qOPRxCAEuoYtetn5Db64rRGs74c9K4L2xkCAASj5BuCK5qpZlTE1hmyu1gBURTfEKRE3yTSAC8yq4IyptAP2JBfEYQ/TWGTqG9FywrGlT/1zZ2WzBft8NaNzbBy/rSBJ9xMose5+1CzGo+nxDDiAeURuJ2+uXGi5GmuJwiWe0JIUX/GQ158IBAmMaR5LlMLu8zfeZAqRu3Hob/qQMhpjSW0mAAr3lj4mwCsZh7fdncZx6r9vF2g/CZdYm99hrB87B8vSC+ENqh3RBHeSBpnCOsnQnifRYR0+8QxhhDyb4KC/ki4+0lE2C4R0MHCidoq0X8grG5dKj0BvIi3ZETN/74PAo+nILf7QZijtzgaAAWTWGCRoOoahx4pocIUYo/LCuC14V7adKfQRwuMRkLNmMCir13XHesnR2Aw134YzQon5QltBABjOpmaxAJ5IjCgTcu9I5Q4pGRd8aRLvqcbM8YJjI4WyuKJ4IpA1AqyEYjysZ0iAZ2zMgIVB/aNugFCAfdgIU8Ioiyp7z99aiyhYIlSgmuA9QJscO7Su7/7WQ2M+rCQJQSeZSRuk1tdFXt3n4pGAqamX6G47y7uzQJpJ5WCue4WfhByGq/7sELulYz62CUhRZ4BvdMAYMEeku7dhbG4gwfjLMQ/LSZwm9Ua8zYZJwPYxOSO4GPvQiol2CZS0P3JUTHmWw1nwRK8HKGo4FVzxmhm5UJH1UFCSW4NFNa96/XkBjhaDa6chawQQRcbjLthdZwckr0R+yFqn8AinEo7IY5nLfg0xu9KxtJPThDKw2JOPC7wyuwd4eW3/wEfSiMVfhJrEgAAAABJRU5ErkJggg=="
  , vv = "data:image/png;base64,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"
  , yv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAyCAMAAAB23DWPAAAAAXNSR0IArs4c6QAAAHVQTFRFAAAAHlQoGVcoIGIsEEEmJm4tCzgiKnQuLHYvCjUiDDcjKnUuDTkjK3YvED8kKnYuCzYiLHcv////8PLy4Obk0drWws3IwszIs7+6o7OslKeehZqRdo2DYn5ySGhaLHcvJmwtHlsqKk8/FUkmGkIwDjwkCzUjxUWzfwAAABJ0Uk5TABAgMEBca3CDgqKmu8bT3+XvEoNj+QAABNJJREFUeNqtl+uaoyoQRY0dc0+80Z2oQSPCfv9HPFqAiPT0zHfS62eCLqt2KRr9b474JySQneLoHQ+//52yrASAy3jA5pjBkB03kWZHv13inzxN8W98coFRc8OC28ZrSha/6yEEpvXiPpsFjtHIBph+YxzH3/BUyKIow2cxc0cWjcQQZsHpNzwCaRQBxQKJ+Nc9FVQ31XMvHBy7TRxvZ88ljuPIRPex8vCvn2FzOf3oOUEsGtcgywDMnoksHAryWHgLi9CAYK6csW+pssvJYxa3tOQhRiR0a584ep6BAEQ5DcyIUrY1AkqBL8pJoqjrem0SxvMoVrTaU/thHbqJHoIum3EBLDz0O9HocqK00ygw7fEcxm2iCzw95nSpJjbXg8r8DLy6hNZrBlQ/ewS2a89L0dA5k/FIQMyDNVA50ebaET34jx4GdVh6kuv1qoD2q3Bw46EYKt1sNZVDogO17gWhz1muPZw8FYZz5BFnmGhZYfhEaT0XRSYm0VM5jpwCugO8GtHDwKqRWqIlW7/3PReITy4BmDKYQEGUUDlNlxAYus6/7846oBZY3z96BAVeqxuVRorRc79xc6lbTEkoTF1bdWGvAyp54BEPfWy+0kh7IwrqUQPIgvjCYDIfNWnsez4ooMnEGHeeO6OzBfEkQO0mRQIcgJg9SdoZaAjCgAjn0T+F8cQZhWZhGBnQLvYBbTJdCwMiuOlAbTxhPElGvbI8odTQg5vycIsiMtmuhQHZOkTTNE9p6grj2WxvcKYa6Pt+QGMv87Ylzq9kS8RhQISAm7Rv49mC0E8xtlrdYs3xDwGVnEztvQjisR7Zah7j4tbAzOLWR/ies3nehoR3z44y/0ca37M36YeEd8/2Dc8OvAgI4nnfc0JVBATxvO/JQDmGlE+4eN72fEDodwIgpM+jtzxBPEwiQA3BU3eLNYLZkQnxPBc86Bmouu9I/uKRn3OU/GcPKJ5S4jvUKfY93YKXchqGpiirFoDqX53lsLxCUbh8QtTO9zjLsNy721bruKB+h54jnsWfuXNg952nHwBZu8jFbKSiyOR5brj/ZWiyzcrz6gcFyKYsLLV3CzJOJs8TA9NlN48ipKxrNnZkmebmY3fKMNI+yKKp9Lu6gzUCuGy9fbjVb9d1oGECECV9G2k+tAKSV6VfMu1JZWA6xf7njMQAGXhqKDXqS8A9oSB4/bmqmgPDoADBmW+SgDcG1tNgQWk9hVu9uU0F+lQSqjeDAd/0ROZvKDWAZrUf3otS0N3+hVu0EHF/HltK3A46bZEuNbiEEtrkHs3dvOIb+knP6rqkXd/mc05ftHyekxZUDEEm5WpiEjeXz6GHYDb2oZsBGhuyekWGM3342FKecrYczqkx9WSaT+c8nYKoGKWmOkcP8LF1U196Wm2/MegLh1VcAhi0JU/oO8KaADRlwafTpa5v1FZi6Bz2a4+u+Bo50VQQF1g+x66mO/HZ5SQ41Pj31h2ZT6OizDMpnsukZpPFe7eM807RjmElXZos/jXteylQ1gfv+8xx8PSWnOyGfTeQw5AfNtGS+JCabvSehlphSRfHJM6zj5akneOaeBZjmk+3+sOKrt5B+7yzIRPBBaSHOApxOaXB38k17/LrNlh+nU5m5H5H8/M+lDjitDOfc/8BrzJzIAhr2YQAAAAASUVORK5CYII="
  , Av = "/assets/MintModalText-Du-Q32UU.png"
  , wv = "/assets/MintModalTextCn-DS4zIBc3.png"
  , Sv = "/assets/GrowModalTitle-CQ5Gzjsb.png"
  , Ev = "/assets/GrowModalTitleCn-BlF5mKGY.png"
  , xv = "/assets/WalletModalTitle-D111bQnr.png"
  , Cv = "/assets/WalletModalTitleCn-UTT9G05P.png"
  , _v = "data:image/png;base64,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"
  , bv = "data:image/png;base64,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"
  , kv = {
    en: {
        translation: {
            LanguageButton: Gm,
            startGame: Ym,
            gameStartingIn: "Game starting in...",
            Hours: "HOURS",
            Minutes: "MINUTES",
            Seconds: "SECONDS",
            MintButtonText: "MINT",
            RefButtonText: "REF",
            BuyPotato: "Buy Potato!",
            Plant: "Plant Potato!",
            Grow: "Grow!",
            BuyPotatoText: "Purchase potatoes through the marketplace to start the game!",
            PlantText: "Plant potatoes and get fields!",
            GrowText: "Grow potatoes during the game!",
            HowToPlay: Xm,
            MintTitle: Um,
            PreMintOver: "The premint is over!",
            PreMintOverDown: "If you like potatoes, then come to us and wait for the game to start!",
            LetsGo: "LETS GO!",
            RefHeader: Zm,
            CreateTeam: Fm,
            EarnText: Lm,
            Copy: Hm,
            Share: Jm,
            TapToContinue: "TAP TO CONTINUE",
            Available: "Available: ",
            Commission: "Commission: ",
            Min: "Min: ",
            Max: "Max: ",
            TradeTitle: $m,
            TradeModalText: tv,
            SellButtonText: rv,
            PotatoRangeTitle: ov,
            ClearButtonText: av,
            ApplyButtonText: uv,
            OrderButtonText: fv,
            MarketHeaderImage: pv,
            FieldsCount: "Fields Count",
            SupplyPotato: "Supply Potato",
            AveragePrice: "Average price",
            ListedPotato: "Listed Potato",
            DailyVolume: "Daily Volume",
            All: "All",
            Mine: "Mine",
            Price: "Price",
            TotalPrice: "Total price",
            Amount: "Amount",
            Seller: "Seller: ",
            CancelButtonText: gv,
            BuyButtonText: vv,
            MintModalText: Av,
            GrowModalTitle: Sv,
            GrowButton: "GROW",
            GrowButtonMain: "GROW!",
            WalletModalText: "Are you sure you want to untie your wallet?",
            WalletModalTitle: xv,
            Yes: "YES",
            No: "NO",
            Market: "MARKET",
            HarvestTitle: _v,
            ErrorTimeOrderText: "It's been less than an hour since the last order was placed.",
            ErrorCancelText: "It's been less than an hour since we canceled the half-seed order.",
            ErrorCountOrderText: "You cannot place more than 3 orders at the same time",
            cancelModalTitle: "Are you sure you want cancel your order?",
            cancelModalText: "If you cancel the order, you will lose 5% of the potatoes for it"
        }
    },
    ch: {
        translation: {
            LanguageButton: jm,
            startGame: qm,
            gameStartingIn: "游戏(…)后开始",
            Hours: "点钟",
            Minutes: "分钟",
            Seconds: "秒钟",
            MintButtonText: "种植",
            RefButtonText: "转介",
            BuyPotato: "买土豆!",
            Plant: "种植土豆!",
            Grow: "种植!",
            BuyPotatoText: "从市场上购买土豆开始游戏!",
            PlantText: "种植土豆并获得田地!",
            GrowText: "比赛期间种植土豆!",
            HowToPlay: Wm,
            MintTitle: zm,
            PreMintOver: "预购已结束!",
            PreMintOverDown: "如果你喜欢土豆，就来找我们等待比赛开始吧!",
            LetsGo: "我们走吧!",
            RefHeader: Qm,
            CreateTeam: Dm,
            EarnText: Vm,
            Copy: Mm,
            Share: Km,
            TapToContinue: "点击继续",
            Available: "可用的: ",
            Min: "最少: ",
            Max: "最大: ",
            TradeTitle: ev,
            TradeModalText: nv,
            SellButtonText: iv,
            PotatoRangeTitle: sv,
            ClearButtonText: lv,
            ApplyButtonText: cv,
            OrderButtonText: dv,
            MarketHeaderImage: hv,
            FieldsCount: "由地数量",
            SupplyPotato: "供应土豆",
            AveragePrice: "均价",
            ListedPotato: "上市得土豆",
            DailyVolume: "每日交易量",
            All: "都",
            Mine: "挖掘",
            Price: "价格",
            TotalPrice: "总价",
            Amount: "金额",
            Seller: "卖家:",
            CancelButtonText: mv,
            BuyButtonText: yv,
            MintModalText: wv,
            GrowModalTitle: Ev,
            GrowButton: "种植",
            GrowButtonMain: "种植!",
            WalletModalText: "你确定要断开钱包?",
            WalletModalTitle: Cv,
            Yes: "是",
            No: "不",
            Market: "商店",
            HarvestTitle: bv,
            ErrorTimeOrderText: "距离上一个订单下达还不到一个小时",
            ErrorCancelText: "我们取消半份订单还不到一个小时",
            ErrorCountOrderText: "您不能同时下超过 3 个订单",
            cancelModalTitle: "Are you sure you want cancel your order?",
            cancelModalText: "If you cancel the order, you will lose 5% of the potatoes for it"
        }
    }
};
Pe.use(Nm).init({
    resources: kv,
    lng: "en",
    interpolation: {
        escapeValue: !1
    }
});
var we = {}
  , Ws = {};
Ws.byteLength = Bv;
Ws.toByteArray = Iv;
Ws.fromByteArray = Fv;
var It = []
  , ot = []
  , Ov = typeof Uint8Array < "u" ? Uint8Array : Array
  , xa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var fr = 0, Rv = xa.length; fr < Rv; ++fr)
    It[fr] = xa[fr],
    ot[xa.charCodeAt(fr)] = fr;
ot[45] = 62;
ot[95] = 63;
function Wd(e) {
    var t = e.length;
    if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    n === -1 && (n = t);
    var r = n === t ? 0 : 4 - n % 4;
    return [n, r]
}
function Bv(e) {
    var t = Wd(e)
      , n = t[0]
      , r = t[1];
    return (n + r) * 3 / 4 - r
}
function Tv(e, t, n) {
    return (t + n) * 3 / 4 - n
}
function Iv(e) {
    var t, n = Wd(e), r = n[0], i = n[1], o = new Ov(Tv(e, r, i)), s = 0, a = i > 0 ? r - 4 : r, l;
    for (l = 0; l < a; l += 4)
        t = ot[e.charCodeAt(l)] << 18 | ot[e.charCodeAt(l + 1)] << 12 | ot[e.charCodeAt(l + 2)] << 6 | ot[e.charCodeAt(l + 3)],
        o[s++] = t >> 16 & 255,
        o[s++] = t >> 8 & 255,
        o[s++] = t & 255;
    return i === 2 && (t = ot[e.charCodeAt(l)] << 2 | ot[e.charCodeAt(l + 1)] >> 4,
    o[s++] = t & 255),
    i === 1 && (t = ot[e.charCodeAt(l)] << 10 | ot[e.charCodeAt(l + 1)] << 4 | ot[e.charCodeAt(l + 2)] >> 2,
    o[s++] = t >> 8 & 255,
    o[s++] = t & 255),
    o
}
function Pv(e) {
    return It[e >> 18 & 63] + It[e >> 12 & 63] + It[e >> 6 & 63] + It[e & 63]
}
function Nv(e, t, n) {
    for (var r, i = [], o = t; o < n; o += 3)
        r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255),
        i.push(Pv(r));
    return i.join("")
}
function Fv(e) {
    for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, a = n - r; s < a; s += o)
        i.push(Nv(e, s, s + o > a ? a : s + o));
    return r === 1 ? (t = e[n - 1],
    i.push(It[t >> 2] + It[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1],
    i.push(It[t >> 10] + It[t >> 4 & 63] + It[t << 2 & 63] + "=")),
    i.join("")
}
var vu = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
vu.read = function(e, t, n, r, i) {
    var o, s, a = i * 8 - r - 1, l = (1 << a) - 1, f = l >> 1, d = -7, g = n ? i - 1 : 0, p = n ? -1 : 1, A = e[t + g];
    for (g += p,
    o = A & (1 << -d) - 1,
    A >>= -d,
    d += a; d > 0; o = o * 256 + e[t + g],
    g += p,
    d -= 8)
        ;
    for (s = o & (1 << -d) - 1,
    o >>= -d,
    d += r; d > 0; s = s * 256 + e[t + g],
    g += p,
    d -= 8)
        ;
    if (o === 0)
        o = 1 - f;
    else {
        if (o === l)
            return s ? NaN : (A ? -1 : 1) * (1 / 0);
        s = s + Math.pow(2, r),
        o = o - f
    }
    return (A ? -1 : 1) * s * Math.pow(2, o - r)
}
;
vu.write = function(e, t, n, r, i, o) {
    var s, a, l, f = o * 8 - i - 1, d = (1 << f) - 1, g = d >> 1, p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = r ? 0 : o - 1, E = r ? 1 : -1, _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t),
    isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
    s = d) : (s = Math.floor(Math.log(t) / Math.LN2),
    t * (l = Math.pow(2, -s)) < 1 && (s--,
    l *= 2),
    s + g >= 1 ? t += p / l : t += p * Math.pow(2, 1 - g),
    t * l >= 2 && (s++,
    l /= 2),
    s + g >= d ? (a = 0,
    s = d) : s + g >= 1 ? (a = (t * l - 1) * Math.pow(2, i),
    s = s + g) : (a = t * Math.pow(2, g - 1) * Math.pow(2, i),
    s = 0)); i >= 8; e[n + A] = a & 255,
    A += E,
    a /= 256,
    i -= 8)
        ;
    for (s = s << i | a,
    f += i; f > 0; e[n + A] = s & 255,
    A += E,
    s /= 256,
    f -= 8)
        ;
    e[n + A - E] |= _ * 128
}
;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
    const t = Ws
      , n = vu
      , r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    e.Buffer = d,
    e.SlowBuffer = k,
    e.INSPECT_MAX_BYTES = 50;
    const i = 2147483647;
    e.kMaxLength = i;
    const {Uint8Array: o, ArrayBuffer: s, SharedArrayBuffer: a} = globalThis;
    d.TYPED_ARRAY_SUPPORT = l(),
    !d.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function l() {
        try {
            const h = new o(1)
              , u = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(u, o.prototype),
            Object.setPrototypeOf(h, u),
            h.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(d.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (d.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(d.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (d.isBuffer(this))
                return this.byteOffset
        }
    });
    function f(h) {
        if (h > i)
            throw new RangeError('The value "' + h + '" is invalid for option "size"');
        const u = new o(h);
        return Object.setPrototypeOf(u, d.prototype),
        u
    }
    function d(h, u, c) {
        if (typeof h == "number") {
            if (typeof u == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return E(h)
        }
        return g(h, u, c)
    }
    d.poolSize = 8192;
    function g(h, u, c) {
        if (typeof h == "string")
            return _(h, u);
        if (s.isView(h))
            return y(h);
        if (h == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h);
        if (Rt(h, s) || h && Rt(h.buffer, s) || typeof a < "u" && (Rt(h, a) || h && Rt(h.buffer, a)))
            return v(h, u, c);
        if (typeof h == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        const m = h.valueOf && h.valueOf();
        if (m != null && m !== h)
            return d.from(m, u, c);
        const w = S(h);
        if (w)
            return w;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
            return d.from(h[Symbol.toPrimitive]("string"), u, c);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h)
    }
    d.from = function(h, u, c) {
        return g(h, u, c)
    }
    ,
    Object.setPrototypeOf(d.prototype, o.prototype),
    Object.setPrototypeOf(d, o);
    function p(h) {
        if (typeof h != "number")
            throw new TypeError('"size" argument must be of type number');
        if (h < 0)
            throw new RangeError('The value "' + h + '" is invalid for option "size"')
    }
    function A(h, u, c) {
        return p(h),
        h <= 0 ? f(h) : u !== void 0 ? typeof c == "string" ? f(h).fill(u, c) : f(h).fill(u) : f(h)
    }
    d.alloc = function(h, u, c) {
        return A(h, u, c)
    }
    ;
    function E(h) {
        return p(h),
        f(h < 0 ? 0 : x(h) | 0)
    }
    d.allocUnsafe = function(h) {
        return E(h)
    }
    ,
    d.allocUnsafeSlow = function(h) {
        return E(h)
    }
    ;
    function _(h, u) {
        if ((typeof u != "string" || u === "") && (u = "utf8"),
        !d.isEncoding(u))
            throw new TypeError("Unknown encoding: " + u);
        const c = O(h, u) | 0;
        let m = f(c);
        const w = m.write(h, u);
        return w !== c && (m = m.slice(0, w)),
        m
    }
    function I(h) {
        const u = h.length < 0 ? 0 : x(h.length) | 0
          , c = f(u);
        for (let m = 0; m < u; m += 1)
            c[m] = h[m] & 255;
        return c
    }
    function y(h) {
        if (Rt(h, o)) {
            const u = new o(h);
            return v(u.buffer, u.byteOffset, u.byteLength)
        }
        return I(h)
    }
    function v(h, u, c) {
        if (u < 0 || h.byteLength < u)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (h.byteLength < u + (c || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let m;
        return u === void 0 && c === void 0 ? m = new o(h) : c === void 0 ? m = new o(h,u) : m = new o(h,u,c),
        Object.setPrototypeOf(m, d.prototype),
        m
    }
    function S(h) {
        if (d.isBuffer(h)) {
            const u = x(h.length) | 0
              , c = f(u);
            return c.length === 0 || h.copy(c, 0, 0, u),
            c
        }
        if (h.length !== void 0)
            return typeof h.length != "number" || wa(h.length) ? f(0) : I(h);
        if (h.type === "Buffer" && Array.isArray(h.data))
            return I(h.data)
    }
    function x(h) {
        if (h >= i)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return h | 0
    }
    function k(h) {
        return +h != h && (h = 0),
        d.alloc(+h)
    }
    d.isBuffer = function(u) {
        return u != null && u._isBuffer === !0 && u !== d.prototype
    }
    ,
    d.compare = function(u, c) {
        if (Rt(u, o) && (u = d.from(u, u.offset, u.byteLength)),
        Rt(c, o) && (c = d.from(c, c.offset, c.byteLength)),
        !d.isBuffer(u) || !d.isBuffer(c))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (u === c)
            return 0;
        let m = u.length
          , w = c.length;
        for (let C = 0, b = Math.min(m, w); C < b; ++C)
            if (u[C] !== c[C]) {
                m = u[C],
                w = c[C];
                break
            }
        return m < w ? -1 : w < m ? 1 : 0
    }
    ,
    d.isEncoding = function(u) {
        switch (String(u).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    d.concat = function(u, c) {
        if (!Array.isArray(u))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (u.length === 0)
            return d.alloc(0);
        let m;
        if (c === void 0)
            for (c = 0,
            m = 0; m < u.length; ++m)
                c += u[m].length;
        const w = d.allocUnsafe(c);
        let C = 0;
        for (m = 0; m < u.length; ++m) {
            let b = u[m];
            if (Rt(b, o))
                C + b.length > w.length ? (d.isBuffer(b) || (b = d.from(b)),
                b.copy(w, C)) : o.prototype.set.call(w, b, C);
            else if (d.isBuffer(b))
                b.copy(w, C);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            C += b.length
        }
        return w
    }
    ;
    function O(h, u) {
        if (d.isBuffer(h))
            return h.length;
        if (s.isView(h) || Rt(h, s))
            return h.byteLength;
        if (typeof h != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h);
        const c = h.length
          , m = arguments.length > 2 && arguments[2] === !0;
        if (!m && c === 0)
            return 0;
        let w = !1;
        for (; ; )
            switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
                return c;
            case "utf8":
            case "utf-8":
                return Aa(h).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return c * 2;
            case "hex":
                return c >>> 1;
            case "base64":
                return Rc(h).length;
            default:
                if (w)
                    return m ? -1 : Aa(h).length;
                u = ("" + u).toLowerCase(),
                w = !0
            }
    }
    d.byteLength = O;
    function B(h, u, c) {
        let m = !1;
        if ((u === void 0 || u < 0) && (u = 0),
        u > this.length || ((c === void 0 || c > this.length) && (c = this.length),
        c <= 0) || (c >>>= 0,
        u >>>= 0,
        c <= u))
            return "";
        for (h || (h = "utf8"); ; )
            switch (h) {
            case "hex":
                return me(this, u, c);
            case "utf8":
            case "utf-8":
                return Ze(this, u, c);
            case "ascii":
                return V(this, u, c);
            case "latin1":
            case "binary":
                return $(this, u, c);
            case "base64":
                return it(this, u, c);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return sr(this, u, c);
            default:
                if (m)
                    throw new TypeError("Unknown encoding: " + h);
                h = (h + "").toLowerCase(),
                m = !0
            }
    }
    d.prototype._isBuffer = !0;
    function N(h, u, c) {
        const m = h[u];
        h[u] = h[c],
        h[c] = m
    }
    d.prototype.swap16 = function() {
        const u = this.length;
        if (u % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let c = 0; c < u; c += 2)
            N(this, c, c + 1);
        return this
    }
    ,
    d.prototype.swap32 = function() {
        const u = this.length;
        if (u % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let c = 0; c < u; c += 4)
            N(this, c, c + 3),
            N(this, c + 1, c + 2);
        return this
    }
    ,
    d.prototype.swap64 = function() {
        const u = this.length;
        if (u % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let c = 0; c < u; c += 8)
            N(this, c, c + 7),
            N(this, c + 1, c + 6),
            N(this, c + 2, c + 5),
            N(this, c + 3, c + 4);
        return this
    }
    ,
    d.prototype.toString = function() {
        const u = this.length;
        return u === 0 ? "" : arguments.length === 0 ? Ze(this, 0, u) : B.apply(this, arguments)
    }
    ,
    d.prototype.toLocaleString = d.prototype.toString,
    d.prototype.equals = function(u) {
        if (!d.isBuffer(u))
            throw new TypeError("Argument must be a Buffer");
        return this === u ? !0 : d.compare(this, u) === 0
    }
    ,
    d.prototype.inspect = function() {
        let u = "";
        const c = e.INSPECT_MAX_BYTES;
        return u = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(),
        this.length > c && (u += " ... "),
        "<Buffer " + u + ">"
    }
    ,
    r && (d.prototype[r] = d.prototype.inspect),
    d.prototype.compare = function(u, c, m, w, C) {
        if (Rt(u, o) && (u = d.from(u, u.offset, u.byteLength)),
        !d.isBuffer(u))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
        if (c === void 0 && (c = 0),
        m === void 0 && (m = u ? u.length : 0),
        w === void 0 && (w = 0),
        C === void 0 && (C = this.length),
        c < 0 || m > u.length || w < 0 || C > this.length)
            throw new RangeError("out of range index");
        if (w >= C && c >= m)
            return 0;
        if (w >= C)
            return -1;
        if (c >= m)
            return 1;
        if (c >>>= 0,
        m >>>= 0,
        w >>>= 0,
        C >>>= 0,
        this === u)
            return 0;
        let b = C - w
          , W = m - c;
        const fe = Math.min(b, W)
          , se = this.slice(w, C)
          , de = u.slice(c, m);
        for (let X = 0; X < fe; ++X)
            if (se[X] !== de[X]) {
                b = se[X],
                W = de[X];
                break
            }
        return b < W ? -1 : W < b ? 1 : 0
    }
    ;
    function K(h, u, c, m, w) {
        if (h.length === 0)
            return -1;
        if (typeof c == "string" ? (m = c,
        c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648),
        c = +c,
        wa(c) && (c = w ? 0 : h.length - 1),
        c < 0 && (c = h.length + c),
        c >= h.length) {
            if (w)
                return -1;
            c = h.length - 1
        } else if (c < 0)
            if (w)
                c = 0;
            else
                return -1;
        if (typeof u == "string" && (u = d.from(u, m)),
        d.isBuffer(u))
            return u.length === 0 ? -1 : j(h, u, c, m, w);
        if (typeof u == "number")
            return u = u & 255,
            typeof o.prototype.indexOf == "function" ? w ? o.prototype.indexOf.call(h, u, c) : o.prototype.lastIndexOf.call(h, u, c) : j(h, [u], c, m, w);
        throw new TypeError("val must be string, number or Buffer")
    }
    function j(h, u, c, m, w) {
        let C = 1
          , b = h.length
          , W = u.length;
        if (m !== void 0 && (m = String(m).toLowerCase(),
        m === "ucs2" || m === "ucs-2" || m === "utf16le" || m === "utf-16le")) {
            if (h.length < 2 || u.length < 2)
                return -1;
            C = 2,
            b /= 2,
            W /= 2,
            c /= 2
        }
        function fe(de, X) {
            return C === 1 ? de[X] : de.readUInt16BE(X * C)
        }
        let se;
        if (w) {
            let de = -1;
            for (se = c; se < b; se++)
                if (fe(h, se) === fe(u, de === -1 ? 0 : se - de)) {
                    if (de === -1 && (de = se),
                    se - de + 1 === W)
                        return de * C
                } else
                    de !== -1 && (se -= se - de),
                    de = -1
        } else
            for (c + W > b && (c = b - W),
            se = c; se >= 0; se--) {
                let de = !0;
                for (let X = 0; X < W; X++)
                    if (fe(h, se + X) !== fe(u, X)) {
                        de = !1;
                        break
                    }
                if (de)
                    return se
            }
        return -1
    }
    d.prototype.includes = function(u, c, m) {
        return this.indexOf(u, c, m) !== -1
    }
    ,
    d.prototype.indexOf = function(u, c, m) {
        return K(this, u, c, m, !0)
    }
    ,
    d.prototype.lastIndexOf = function(u, c, m) {
        return K(this, u, c, m, !1)
    }
    ;
    function Z(h, u, c, m) {
        c = Number(c) || 0;
        const w = h.length - c;
        m ? (m = Number(m),
        m > w && (m = w)) : m = w;
        const C = u.length;
        m > C / 2 && (m = C / 2);
        let b;
        for (b = 0; b < m; ++b) {
            const W = parseInt(u.substr(b * 2, 2), 16);
            if (wa(W))
                return b;
            h[c + b] = W
        }
        return b
    }
    function Ne(h, u, c, m) {
        return Ao(Aa(u, h.length - c), h, c, m)
    }
    function Ve(h, u, c, m) {
        return Ao(T0(u), h, c, m)
    }
    function Fe(h, u, c, m) {
        return Ao(Rc(u), h, c, m)
    }
    function rt(h, u, c, m) {
        return Ao(I0(u, h.length - c), h, c, m)
    }
    d.prototype.write = function(u, c, m, w) {
        if (c === void 0)
            w = "utf8",
            m = this.length,
            c = 0;
        else if (m === void 0 && typeof c == "string")
            w = c,
            m = this.length,
            c = 0;
        else if (isFinite(c))
            c = c >>> 0,
            isFinite(m) ? (m = m >>> 0,
            w === void 0 && (w = "utf8")) : (w = m,
            m = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const C = this.length - c;
        if ((m === void 0 || m > C) && (m = C),
        u.length > 0 && (m < 0 || c < 0) || c > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        w || (w = "utf8");
        let b = !1;
        for (; ; )
            switch (w) {
            case "hex":
                return Z(this, u, c, m);
            case "utf8":
            case "utf-8":
                return Ne(this, u, c, m);
            case "ascii":
            case "latin1":
            case "binary":
                return Ve(this, u, c, m);
            case "base64":
                return Fe(this, u, c, m);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return rt(this, u, c, m);
            default:
                if (b)
                    throw new TypeError("Unknown encoding: " + w);
                w = ("" + w).toLowerCase(),
                b = !0
            }
    }
    ,
    d.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function it(h, u, c) {
        return u === 0 && c === h.length ? t.fromByteArray(h) : t.fromByteArray(h.slice(u, c))
    }
    function Ze(h, u, c) {
        c = Math.min(h.length, c);
        const m = [];
        let w = u;
        for (; w < c; ) {
            const C = h[w];
            let b = null
              , W = C > 239 ? 4 : C > 223 ? 3 : C > 191 ? 2 : 1;
            if (w + W <= c) {
                let fe, se, de, X;
                switch (W) {
                case 1:
                    C < 128 && (b = C);
                    break;
                case 2:
                    fe = h[w + 1],
                    (fe & 192) === 128 && (X = (C & 31) << 6 | fe & 63,
                    X > 127 && (b = X));
                    break;
                case 3:
                    fe = h[w + 1],
                    se = h[w + 2],
                    (fe & 192) === 128 && (se & 192) === 128 && (X = (C & 15) << 12 | (fe & 63) << 6 | se & 63,
                    X > 2047 && (X < 55296 || X > 57343) && (b = X));
                    break;
                case 4:
                    fe = h[w + 1],
                    se = h[w + 2],
                    de = h[w + 3],
                    (fe & 192) === 128 && (se & 192) === 128 && (de & 192) === 128 && (X = (C & 15) << 18 | (fe & 63) << 12 | (se & 63) << 6 | de & 63,
                    X > 65535 && X < 1114112 && (b = X))
                }
            }
            b === null ? (b = 65533,
            W = 1) : b > 65535 && (b -= 65536,
            m.push(b >>> 10 & 1023 | 55296),
            b = 56320 | b & 1023),
            m.push(b),
            w += W
        }
        return M(m)
    }
    const T = 4096;
    function M(h) {
        const u = h.length;
        if (u <= T)
            return String.fromCharCode.apply(String, h);
        let c = ""
          , m = 0;
        for (; m < u; )
            c += String.fromCharCode.apply(String, h.slice(m, m += T));
        return c
    }
    function V(h, u, c) {
        let m = "";
        c = Math.min(h.length, c);
        for (let w = u; w < c; ++w)
            m += String.fromCharCode(h[w] & 127);
        return m
    }
    function $(h, u, c) {
        let m = "";
        c = Math.min(h.length, c);
        for (let w = u; w < c; ++w)
            m += String.fromCharCode(h[w]);
        return m
    }
    function me(h, u, c) {
        const m = h.length;
        (!u || u < 0) && (u = 0),
        (!c || c < 0 || c > m) && (c = m);
        let w = "";
        for (let C = u; C < c; ++C)
            w += P0[h[C]];
        return w
    }
    function sr(h, u, c) {
        const m = h.slice(u, c);
        let w = "";
        for (let C = 0; C < m.length - 1; C += 2)
            w += String.fromCharCode(m[C] + m[C + 1] * 256);
        return w
    }
    d.prototype.slice = function(u, c) {
        const m = this.length;
        u = ~~u,
        c = c === void 0 ? m : ~~c,
        u < 0 ? (u += m,
        u < 0 && (u = 0)) : u > m && (u = m),
        c < 0 ? (c += m,
        c < 0 && (c = 0)) : c > m && (c = m),
        c < u && (c = u);
        const w = this.subarray(u, c);
        return Object.setPrototypeOf(w, d.prototype),
        w
    }
    ;
    function ee(h, u, c) {
        if (h % 1 !== 0 || h < 0)
            throw new RangeError("offset is not uint");
        if (h + u > c)
            throw new RangeError("Trying to access beyond buffer length")
    }
    d.prototype.readUintLE = d.prototype.readUIntLE = function(u, c, m) {
        u = u >>> 0,
        c = c >>> 0,
        m || ee(u, c, this.length);
        let w = this[u]
          , C = 1
          , b = 0;
        for (; ++b < c && (C *= 256); )
            w += this[u + b] * C;
        return w
    }
    ,
    d.prototype.readUintBE = d.prototype.readUIntBE = function(u, c, m) {
        u = u >>> 0,
        c = c >>> 0,
        m || ee(u, c, this.length);
        let w = this[u + --c]
          , C = 1;
        for (; c > 0 && (C *= 256); )
            w += this[u + --c] * C;
        return w
    }
    ,
    d.prototype.readUint8 = d.prototype.readUInt8 = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 1, this.length),
        this[u]
    }
    ,
    d.prototype.readUint16LE = d.prototype.readUInt16LE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 2, this.length),
        this[u] | this[u + 1] << 8
    }
    ,
    d.prototype.readUint16BE = d.prototype.readUInt16BE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 2, this.length),
        this[u] << 8 | this[u + 1]
    }
    ,
    d.prototype.readUint32LE = d.prototype.readUInt32LE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 4, this.length),
        (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216
    }
    ,
    d.prototype.readUint32BE = d.prototype.readUInt32BE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 4, this.length),
        this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3])
    }
    ,
    d.prototype.readBigUInt64LE = on(function(u) {
        u = u >>> 0,
        lr(u, "offset");
        const c = this[u]
          , m = this[u + 7];
        (c === void 0 || m === void 0) && ai(u, this.length - 8);
        const w = c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24
          , C = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + m * 2 ** 24;
        return BigInt(w) + (BigInt(C) << BigInt(32))
    }),
    d.prototype.readBigUInt64BE = on(function(u) {
        u = u >>> 0,
        lr(u, "offset");
        const c = this[u]
          , m = this[u + 7];
        (c === void 0 || m === void 0) && ai(u, this.length - 8);
        const w = c * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u]
          , C = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + m;
        return (BigInt(w) << BigInt(32)) + BigInt(C)
    }),
    d.prototype.readIntLE = function(u, c, m) {
        u = u >>> 0,
        c = c >>> 0,
        m || ee(u, c, this.length);
        let w = this[u]
          , C = 1
          , b = 0;
        for (; ++b < c && (C *= 256); )
            w += this[u + b] * C;
        return C *= 128,
        w >= C && (w -= Math.pow(2, 8 * c)),
        w
    }
    ,
    d.prototype.readIntBE = function(u, c, m) {
        u = u >>> 0,
        c = c >>> 0,
        m || ee(u, c, this.length);
        let w = c
          , C = 1
          , b = this[u + --w];
        for (; w > 0 && (C *= 256); )
            b += this[u + --w] * C;
        return C *= 128,
        b >= C && (b -= Math.pow(2, 8 * c)),
        b
    }
    ,
    d.prototype.readInt8 = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 1, this.length),
        this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]
    }
    ,
    d.prototype.readInt16LE = function(u, c) {
        u = u >>> 0,
        c || ee(u, 2, this.length);
        const m = this[u] | this[u + 1] << 8;
        return m & 32768 ? m | 4294901760 : m
    }
    ,
    d.prototype.readInt16BE = function(u, c) {
        u = u >>> 0,
        c || ee(u, 2, this.length);
        const m = this[u + 1] | this[u] << 8;
        return m & 32768 ? m | 4294901760 : m
    }
    ,
    d.prototype.readInt32LE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 4, this.length),
        this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24
    }
    ,
    d.prototype.readInt32BE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 4, this.length),
        this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]
    }
    ,
    d.prototype.readBigInt64LE = on(function(u) {
        u = u >>> 0,
        lr(u, "offset");
        const c = this[u]
          , m = this[u + 7];
        (c === void 0 || m === void 0) && ai(u, this.length - 8);
        const w = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (m << 24);
        return (BigInt(w) << BigInt(32)) + BigInt(c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24)
    }),
    d.prototype.readBigInt64BE = on(function(u) {
        u = u >>> 0,
        lr(u, "offset");
        const c = this[u]
          , m = this[u + 7];
        (c === void 0 || m === void 0) && ai(u, this.length - 8);
        const w = (c << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
        return (BigInt(w) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + m)
    }),
    d.prototype.readFloatLE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 4, this.length),
        n.read(this, u, !0, 23, 4)
    }
    ,
    d.prototype.readFloatBE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 4, this.length),
        n.read(this, u, !1, 23, 4)
    }
    ,
    d.prototype.readDoubleLE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 8, this.length),
        n.read(this, u, !0, 52, 8)
    }
    ,
    d.prototype.readDoubleBE = function(u, c) {
        return u = u >>> 0,
        c || ee(u, 8, this.length),
        n.read(this, u, !1, 52, 8)
    }
    ;
    function Se(h, u, c, m, w, C) {
        if (!d.isBuffer(h))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > w || u < C)
            throw new RangeError('"value" argument is out of bounds');
        if (c + m > h.length)
            throw new RangeError("Index out of range")
    }
    d.prototype.writeUintLE = d.prototype.writeUIntLE = function(u, c, m, w) {
        if (u = +u,
        c = c >>> 0,
        m = m >>> 0,
        !w) {
            const W = Math.pow(2, 8 * m) - 1;
            Se(this, u, c, m, W, 0)
        }
        let C = 1
          , b = 0;
        for (this[c] = u & 255; ++b < m && (C *= 256); )
            this[c + b] = u / C & 255;
        return c + m
    }
    ,
    d.prototype.writeUintBE = d.prototype.writeUIntBE = function(u, c, m, w) {
        if (u = +u,
        c = c >>> 0,
        m = m >>> 0,
        !w) {
            const W = Math.pow(2, 8 * m) - 1;
            Se(this, u, c, m, W, 0)
        }
        let C = m - 1
          , b = 1;
        for (this[c + C] = u & 255; --C >= 0 && (b *= 256); )
            this[c + C] = u / b & 255;
        return c + m
    }
    ,
    d.prototype.writeUint8 = d.prototype.writeUInt8 = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 1, 255, 0),
        this[c] = u & 255,
        c + 1
    }
    ,
    d.prototype.writeUint16LE = d.prototype.writeUInt16LE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 2, 65535, 0),
        this[c] = u & 255,
        this[c + 1] = u >>> 8,
        c + 2
    }
    ,
    d.prototype.writeUint16BE = d.prototype.writeUInt16BE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 2, 65535, 0),
        this[c] = u >>> 8,
        this[c + 1] = u & 255,
        c + 2
    }
    ,
    d.prototype.writeUint32LE = d.prototype.writeUInt32LE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 4, 4294967295, 0),
        this[c + 3] = u >>> 24,
        this[c + 2] = u >>> 16,
        this[c + 1] = u >>> 8,
        this[c] = u & 255,
        c + 4
    }
    ,
    d.prototype.writeUint32BE = d.prototype.writeUInt32BE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 4, 4294967295, 0),
        this[c] = u >>> 24,
        this[c + 1] = u >>> 16,
        this[c + 2] = u >>> 8,
        this[c + 3] = u & 255,
        c + 4
    }
    ;
    function Ot(h, u, c, m, w) {
        Oc(u, m, w, h, c, 7);
        let C = Number(u & BigInt(4294967295));
        h[c++] = C,
        C = C >> 8,
        h[c++] = C,
        C = C >> 8,
        h[c++] = C,
        C = C >> 8,
        h[c++] = C;
        let b = Number(u >> BigInt(32) & BigInt(4294967295));
        return h[c++] = b,
        b = b >> 8,
        h[c++] = b,
        b = b >> 8,
        h[c++] = b,
        b = b >> 8,
        h[c++] = b,
        c
    }
    function Pn(h, u, c, m, w) {
        Oc(u, m, w, h, c, 7);
        let C = Number(u & BigInt(4294967295));
        h[c + 7] = C,
        C = C >> 8,
        h[c + 6] = C,
        C = C >> 8,
        h[c + 5] = C,
        C = C >> 8,
        h[c + 4] = C;
        let b = Number(u >> BigInt(32) & BigInt(4294967295));
        return h[c + 3] = b,
        b = b >> 8,
        h[c + 2] = b,
        b = b >> 8,
        h[c + 1] = b,
        b = b >> 8,
        h[c] = b,
        c + 8
    }
    d.prototype.writeBigUInt64LE = on(function(u, c=0) {
        return Ot(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    d.prototype.writeBigUInt64BE = on(function(u, c=0) {
        return Pn(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    d.prototype.writeIntLE = function(u, c, m, w) {
        if (u = +u,
        c = c >>> 0,
        !w) {
            const fe = Math.pow(2, 8 * m - 1);
            Se(this, u, c, m, fe - 1, -fe)
        }
        let C = 0
          , b = 1
          , W = 0;
        for (this[c] = u & 255; ++C < m && (b *= 256); )
            u < 0 && W === 0 && this[c + C - 1] !== 0 && (W = 1),
            this[c + C] = (u / b >> 0) - W & 255;
        return c + m
    }
    ,
    d.prototype.writeIntBE = function(u, c, m, w) {
        if (u = +u,
        c = c >>> 0,
        !w) {
            const fe = Math.pow(2, 8 * m - 1);
            Se(this, u, c, m, fe - 1, -fe)
        }
        let C = m - 1
          , b = 1
          , W = 0;
        for (this[c + C] = u & 255; --C >= 0 && (b *= 256); )
            u < 0 && W === 0 && this[c + C + 1] !== 0 && (W = 1),
            this[c + C] = (u / b >> 0) - W & 255;
        return c + m
    }
    ,
    d.prototype.writeInt8 = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 1, 127, -128),
        u < 0 && (u = 255 + u + 1),
        this[c] = u & 255,
        c + 1
    }
    ,
    d.prototype.writeInt16LE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 2, 32767, -32768),
        this[c] = u & 255,
        this[c + 1] = u >>> 8,
        c + 2
    }
    ,
    d.prototype.writeInt16BE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 2, 32767, -32768),
        this[c] = u >>> 8,
        this[c + 1] = u & 255,
        c + 2
    }
    ,
    d.prototype.writeInt32LE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 4, 2147483647, -2147483648),
        this[c] = u & 255,
        this[c + 1] = u >>> 8,
        this[c + 2] = u >>> 16,
        this[c + 3] = u >>> 24,
        c + 4
    }
    ,
    d.prototype.writeInt32BE = function(u, c, m) {
        return u = +u,
        c = c >>> 0,
        m || Se(this, u, c, 4, 2147483647, -2147483648),
        u < 0 && (u = 4294967295 + u + 1),
        this[c] = u >>> 24,
        this[c + 1] = u >>> 16,
        this[c + 2] = u >>> 8,
        this[c + 3] = u & 255,
        c + 4
    }
    ,
    d.prototype.writeBigInt64LE = on(function(u, c=0) {
        return Ot(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }),
    d.prototype.writeBigInt64BE = on(function(u, c=0) {
        return Pn(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function Cc(h, u, c, m, w, C) {
        if (c + m > h.length)
            throw new RangeError("Index out of range");
        if (c < 0)
            throw new RangeError("Index out of range")
    }
    function _c(h, u, c, m, w) {
        return u = +u,
        c = c >>> 0,
        w || Cc(h, u, c, 4),
        n.write(h, u, c, m, 23, 4),
        c + 4
    }
    d.prototype.writeFloatLE = function(u, c, m) {
        return _c(this, u, c, !0, m)
    }
    ,
    d.prototype.writeFloatBE = function(u, c, m) {
        return _c(this, u, c, !1, m)
    }
    ;
    function bc(h, u, c, m, w) {
        return u = +u,
        c = c >>> 0,
        w || Cc(h, u, c, 8),
        n.write(h, u, c, m, 52, 8),
        c + 8
    }
    d.prototype.writeDoubleLE = function(u, c, m) {
        return bc(this, u, c, !0, m)
    }
    ,
    d.prototype.writeDoubleBE = function(u, c, m) {
        return bc(this, u, c, !1, m)
    }
    ,
    d.prototype.copy = function(u, c, m, w) {
        if (!d.isBuffer(u))
            throw new TypeError("argument should be a Buffer");
        if (m || (m = 0),
        !w && w !== 0 && (w = this.length),
        c >= u.length && (c = u.length),
        c || (c = 0),
        w > 0 && w < m && (w = m),
        w === m || u.length === 0 || this.length === 0)
            return 0;
        if (c < 0)
            throw new RangeError("targetStart out of bounds");
        if (m < 0 || m >= this.length)
            throw new RangeError("Index out of range");
        if (w < 0)
            throw new RangeError("sourceEnd out of bounds");
        w > this.length && (w = this.length),
        u.length - c < w - m && (w = u.length - c + m);
        const C = w - m;
        return this === u && typeof o.prototype.copyWithin == "function" ? this.copyWithin(c, m, w) : o.prototype.set.call(u, this.subarray(m, w), c),
        C
    }
    ,
    d.prototype.fill = function(u, c, m, w) {
        if (typeof u == "string") {
            if (typeof c == "string" ? (w = c,
            c = 0,
            m = this.length) : typeof m == "string" && (w = m,
            m = this.length),
            w !== void 0 && typeof w != "string")
                throw new TypeError("encoding must be a string");
            if (typeof w == "string" && !d.isEncoding(w))
                throw new TypeError("Unknown encoding: " + w);
            if (u.length === 1) {
                const b = u.charCodeAt(0);
                (w === "utf8" && b < 128 || w === "latin1") && (u = b)
            }
        } else
            typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
        if (c < 0 || this.length < c || this.length < m)
            throw new RangeError("Out of range index");
        if (m <= c)
            return this;
        c = c >>> 0,
        m = m === void 0 ? this.length : m >>> 0,
        u || (u = 0);
        let C;
        if (typeof u == "number")
            for (C = c; C < m; ++C)
                this[C] = u;
        else {
            const b = d.isBuffer(u) ? u : d.from(u, w)
              , W = b.length;
            if (W === 0)
                throw new TypeError('The value "' + u + '" is invalid for argument "value"');
            for (C = 0; C < m - c; ++C)
                this[C + c] = b[C % W]
        }
        return this
    }
    ;
    const ar = {};
    function ya(h, u, c) {
        ar[h] = class extends c {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: u.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${h}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return h
            }
            set code(w) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: w,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${h}]: ${this.message}`
            }
        }
    }
    ya("ERR_BUFFER_OUT_OF_BOUNDS", function(h) {
        return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError),
    ya("ERR_INVALID_ARG_TYPE", function(h, u) {
        return `The "${h}" argument must be of type number. Received type ${typeof u}`
    }, TypeError),
    ya("ERR_OUT_OF_RANGE", function(h, u, c) {
        let m = `The value of "${h}" is out of range.`
          , w = c;
        return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? w = kc(String(c)) : typeof c == "bigint" && (w = String(c),
        (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (w = kc(w)),
        w += "n"),
        m += ` It must be ${u}. Received ${w}`,
        m
    }, RangeError);
    function kc(h) {
        let u = ""
          , c = h.length;
        const m = h[0] === "-" ? 1 : 0;
        for (; c >= m + 4; c -= 3)
            u = `_${h.slice(c - 3, c)}${u}`;
        return `${h.slice(0, c)}${u}`
    }
    function O0(h, u, c) {
        lr(u, "offset"),
        (h[u] === void 0 || h[u + c] === void 0) && ai(u, h.length - (c + 1))
    }
    function Oc(h, u, c, m, w, C) {
        if (h > c || h < u) {
            const b = typeof u == "bigint" ? "n" : "";
            let W;
            throw C > 3 ? u === 0 || u === BigInt(0) ? W = `>= 0${b} and < 2${b} ** ${(C + 1) * 8}${b}` : W = `>= -(2${b} ** ${(C + 1) * 8 - 1}${b}) and < 2 ** ${(C + 1) * 8 - 1}${b}` : W = `>= ${u}${b} and <= ${c}${b}`,
            new ar.ERR_OUT_OF_RANGE("value",W,h)
        }
        O0(m, w, C)
    }
    function lr(h, u) {
        if (typeof h != "number")
            throw new ar.ERR_INVALID_ARG_TYPE(u,"number",h)
    }
    function ai(h, u, c) {
        throw Math.floor(h) !== h ? (lr(h, c),
        new ar.ERR_OUT_OF_RANGE(c || "offset","an integer",h)) : u < 0 ? new ar.ERR_BUFFER_OUT_OF_BOUNDS : new ar.ERR_OUT_OF_RANGE(c || "offset",`>= ${c ? 1 : 0} and <= ${u}`,h)
    }
    const R0 = /[^+/0-9A-Za-z-_]/g;
    function B0(h) {
        if (h = h.split("=")[0],
        h = h.trim().replace(R0, ""),
        h.length < 2)
            return "";
        for (; h.length % 4 !== 0; )
            h = h + "=";
        return h
    }
    function Aa(h, u) {
        u = u || 1 / 0;
        let c;
        const m = h.length;
        let w = null;
        const C = [];
        for (let b = 0; b < m; ++b) {
            if (c = h.charCodeAt(b),
            c > 55295 && c < 57344) {
                if (!w) {
                    if (c > 56319) {
                        (u -= 3) > -1 && C.push(239, 191, 189);
                        continue
                    } else if (b + 1 === m) {
                        (u -= 3) > -1 && C.push(239, 191, 189);
                        continue
                    }
                    w = c;
                    continue
                }
                if (c < 56320) {
                    (u -= 3) > -1 && C.push(239, 191, 189),
                    w = c;
                    continue
                }
                c = (w - 55296 << 10 | c - 56320) + 65536
            } else
                w && (u -= 3) > -1 && C.push(239, 191, 189);
            if (w = null,
            c < 128) {
                if ((u -= 1) < 0)
                    break;
                C.push(c)
            } else if (c < 2048) {
                if ((u -= 2) < 0)
                    break;
                C.push(c >> 6 | 192, c & 63 | 128)
            } else if (c < 65536) {
                if ((u -= 3) < 0)
                    break;
                C.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            } else if (c < 1114112) {
                if ((u -= 4) < 0)
                    break;
                C.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return C
    }
    function T0(h) {
        const u = [];
        for (let c = 0; c < h.length; ++c)
            u.push(h.charCodeAt(c) & 255);
        return u
    }
    function I0(h, u) {
        let c, m, w;
        const C = [];
        for (let b = 0; b < h.length && !((u -= 2) < 0); ++b)
            c = h.charCodeAt(b),
            m = c >> 8,
            w = c % 256,
            C.push(w),
            C.push(m);
        return C
    }
    function Rc(h) {
        return t.toByteArray(B0(h))
    }
    function Ao(h, u, c, m) {
        let w;
        for (w = 0; w < m && !(w + c >= u.length || w >= h.length); ++w)
            u[w + c] = h[w];
        return w
    }
    function Rt(h, u) {
        return h instanceof u || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === u.name
    }
    function wa(h) {
        return h !== h
    }
    const P0 = function() {
        const h = "0123456789abcdef"
          , u = new Array(256);
        for (let c = 0; c < 16; ++c) {
            const m = c * 16;
            for (let w = 0; w < 16; ++w)
                u[m + w] = h[c] + h[w]
        }
        return u
    }();
    function on(h) {
        return typeof BigInt > "u" ? N0 : h
    }
    function N0() {
        throw new Error("BigInt not supported")
    }
}
)(we);
const Lv = we.Buffer
  , Uv = we.Blob
  , jv = we.BlobOptions
  , zd = we.Buffer
  , Mv = we.File
  , Dv = we.FileOptions
  , Vv = we.INSPECT_MAX_BYTES
  , Wv = we.SlowBuffer
  , zv = we.TranscodeEncoding
  , Qv = we.atob
  , Kv = we.btoa
  , qv = we.constants
  , Hv = we.isAscii
  , Gv = we.isUtf8
  , Zv = we.kMaxLength
  , Jv = we.kStringMaxLength
  , Yv = we.resolveObjectURL
  , Xv = we.transcode
  , jE = Object.freeze(Object.defineProperty({
    __proto__: null,
    Blob: Uv,
    BlobOptions: jv,
    Buffer: zd,
    File: Mv,
    FileOptions: Dv,
    INSPECT_MAX_BYTES: Vv,
    SlowBuffer: Wv,
    TranscodeEncoding: zv,
    atob: Qv,
    btoa: Kv,
    constants: qv,
    default: Lv,
    isAscii: Hv,
    isUtf8: Gv,
    kMaxLength: Zv,
    kStringMaxLength: Jv,
    resolveObjectURL: Yv,
    transcode: Xv
}, Symbol.toStringTag, {
    value: "Module"
}));
var al = {}
  , Qd = {
    exports: {}
}
  , et = {}
  , Kd = {
    exports: {}
}
  , qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, M) {
        var V = T.length;
        T.push(M);
        e: for (; 0 < V; ) {
            var $ = V - 1 >>> 1
              , me = T[$];
            if (0 < i(me, M))
                T[$] = M,
                T[V] = me,
                V = $;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var M = T[0]
          , V = T.pop();
        if (V !== M) {
            T[0] = V;
            e: for (var $ = 0, me = T.length, sr = me >>> 1; $ < sr; ) {
                var ee = 2 * ($ + 1) - 1
                  , Se = T[ee]
                  , Ot = ee + 1
                  , Pn = T[Ot];
                if (0 > i(Se, V))
                    Ot < me && 0 > i(Pn, Se) ? (T[$] = Pn,
                    T[Ot] = V,
                    $ = Ot) : (T[$] = Se,
                    T[ee] = V,
                    $ = ee);
                else if (Ot < me && 0 > i(Pn, V))
                    T[$] = Pn,
                    T[Ot] = V,
                    $ = Ot;
                else
                    break e
            }
        }
        return M
    }
    function i(T, M) {
        var V = T.sortIndex - M.sortIndex;
        return V !== 0 ? V : T.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , f = []
      , d = 1
      , g = null
      , p = 3
      , A = !1
      , E = !1
      , _ = !1
      , I = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function S(T) {
        for (var M = n(f); M !== null; ) {
            if (M.callback === null)
                r(f);
            else if (M.startTime <= T)
                r(f),
                M.sortIndex = M.expirationTime,
                t(l, M);
            else
                break;
            M = n(f)
        }
    }
    function x(T) {
        if (_ = !1,
        S(T),
        !E)
            if (n(l) !== null)
                E = !0,
                it(k);
            else {
                var M = n(f);
                M !== null && Ze(x, M.startTime - T)
            }
    }
    function k(T, M) {
        E = !1,
        _ && (_ = !1,
        y(N),
        N = -1),
        A = !0;
        var V = p;
        try {
            for (S(M),
            g = n(l); g !== null && (!(g.expirationTime > M) || T && !Z()); ) {
                var $ = g.callback;
                if (typeof $ == "function") {
                    g.callback = null,
                    p = g.priorityLevel;
                    var me = $(g.expirationTime <= M);
                    M = e.unstable_now(),
                    typeof me == "function" ? g.callback = me : g === n(l) && r(l),
                    S(M)
                } else
                    r(l);
                g = n(l)
            }
            if (g !== null)
                var sr = !0;
            else {
                var ee = n(f);
                ee !== null && Ze(x, ee.startTime - M),
                sr = !1
            }
            return sr
        } finally {
            g = null,
            p = V,
            A = !1
        }
    }
    var O = !1
      , B = null
      , N = -1
      , K = 5
      , j = -1;
    function Z() {
        return !(e.unstable_now() - j < K)
    }
    function Ne() {
        if (B !== null) {
            var T = e.unstable_now();
            j = T;
            var M = !0;
            try {
                M = B(!0, T)
            } finally {
                M ? Ve() : (O = !1,
                B = null)
            }
        } else
            O = !1
    }
    var Ve;
    if (typeof v == "function")
        Ve = function() {
            v(Ne)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Fe = new MessageChannel
          , rt = Fe.port2;
        Fe.port1.onmessage = Ne,
        Ve = function() {
            rt.postMessage(null)
        }
    } else
        Ve = function() {
            I(Ne, 0)
        }
        ;
    function it(T) {
        B = T,
        O || (O = !0,
        Ve())
    }
    function Ze(T, M) {
        N = I(function() {
            T(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        E || A || (E = !0,
        it(k))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(T) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var M = 3;
            break;
        default:
            M = p
        }
        var V = p;
        p = M;
        try {
            return T()
        } finally {
            p = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, M) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var V = p;
        p = T;
        try {
            return M()
        } finally {
            p = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, M, V) {
        var $ = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? $ + V : $) : V = $,
        T) {
        case 1:
            var me = -1;
            break;
        case 2:
            me = 250;
            break;
        case 5:
            me = 1073741823;
            break;
        case 4:
            me = 1e4;
            break;
        default:
            me = 5e3
        }
        return me = V + me,
        T = {
            id: d++,
            callback: M,
            priorityLevel: T,
            startTime: V,
            expirationTime: me,
            sortIndex: -1
        },
        V > $ ? (T.sortIndex = V,
        t(f, T),
        n(l) === null && T === n(f) && (_ ? (y(N),
        N = -1) : _ = !0,
        Ze(x, V - $))) : (T.sortIndex = me,
        t(l, T),
        E || A || (E = !0,
        it(k))),
        T
    }
    ,
    e.unstable_shouldYield = Z,
    e.unstable_wrapCallback = function(T) {
        var M = p;
        return function() {
            var V = p;
            p = M;
            try {
                return T.apply(this, arguments)
            } finally {
                p = V
            }
        }
    }
}
)(qd);
Kd.exports = qd;
var $v = Kd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd = te
  , $e = $v;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Gd = new Set
  , Mi = {};
function er(e, t) {
    Ur(e, t),
    Ur(e + "Capture", t)
}
function Ur(e, t) {
    for (Mi[e] = t,
    e = 0; e < t.length; e++)
        Gd.add(t[e])
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ll = Object.prototype.hasOwnProperty
  , ey = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , zc = {}
  , Qc = {};
function ty(e) {
    return ll.call(Qc, e) ? !0 : ll.call(zc, e) ? !1 : ey.test(e) ? Qc[e] = !0 : (zc[e] = !0,
    !1)
}
function ny(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ry(e, t, n, r) {
    if (t === null || typeof t > "u" || ny(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function De(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new De(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ke[t] = new De(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new De(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new De(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new De(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new De(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new De(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new De(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new De(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var yu = /[\-:]([a-z])/g;
function Au(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(yu, Au);
    ke[t] = new De(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yu, Au);
    ke[t] = new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yu, Au);
    ke[t] = new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new De(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ke.xlinkHref = new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new De(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function wu(e, t, n, r) {
    var i = ke.hasOwnProperty(t) ? ke[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ry(t, n, i, r) && (n = null),
    r || i === null ? ty(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var nn = Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Eo = Symbol.for("react.element")
  , gr = Symbol.for("react.portal")
  , mr = Symbol.for("react.fragment")
  , Su = Symbol.for("react.strict_mode")
  , ul = Symbol.for("react.profiler")
  , Zd = Symbol.for("react.provider")
  , Jd = Symbol.for("react.context")
  , Eu = Symbol.for("react.forward_ref")
  , cl = Symbol.for("react.suspense")
  , fl = Symbol.for("react.suspense_list")
  , xu = Symbol.for("react.memo")
  , ln = Symbol.for("react.lazy")
  , Yd = Symbol.for("react.offscreen")
  , Kc = Symbol.iterator;
function ui(e) {
    return e === null || typeof e != "object" ? null : (e = Kc && e[Kc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, Ca;
function Ai(e) {
    if (Ca === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ca = t && t[1] || ""
        }
    return `
` + Ca + e
}
var _a = !1;
function ba(e, t) {
    if (!e || _a)
        return "";
    _a = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (f) {
                    var r = f
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (f) {
                    r = f
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                r = f
            }
            e()
        }
    } catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (var i = f.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        _a = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ai(e) : ""
}
function iy(e) {
    switch (e.tag) {
    case 5:
        return Ai(e.type);
    case 16:
        return Ai("Lazy");
    case 13:
        return Ai("Suspense");
    case 19:
        return Ai("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ba(e.type, !1),
        e;
    case 11:
        return e = ba(e.type.render, !1),
        e;
    case 1:
        return e = ba(e.type, !0),
        e;
    default:
        return ""
    }
}
function dl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case mr:
        return "Fragment";
    case gr:
        return "Portal";
    case ul:
        return "Profiler";
    case Su:
        return "StrictMode";
    case cl:
        return "Suspense";
    case fl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Jd:
            return (e.displayName || "Context") + ".Consumer";
        case Zd:
            return (e._context.displayName || "Context") + ".Provider";
        case Eu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case xu:
            return t = e.displayName || null,
            t !== null ? t : dl(e.type) || "Memo";
        case ln:
            t = e._payload,
            e = e._init;
            try {
                return dl(e(t))
            } catch {}
        }
    return null
}
function oy(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return dl(t);
    case 8:
        return t === Su ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function _n(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Xd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function sy(e) {
    var t = Xd(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function xo(e) {
    e._valueTracker || (e._valueTracker = sy(e))
}
function $d(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Xd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function as(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function pl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function qc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = _n(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ep(e, t) {
    t = t.checked,
    t != null && wu(e, "checked", t, !1)
}
function hl(e, t) {
    ep(e, t);
    var n = _n(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && gl(e, t.type, _n(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Hc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function gl(e, t, n) {
    (t !== "number" || as(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wi = Array.isArray;
function Tr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _n(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function ml(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Gc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (wi(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: _n(n)
    }
}
function tp(e, t) {
    var n = _n(t.value)
      , r = _n(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Zc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function np(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function vl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? np(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Co, rp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Co = Co || document.createElement("div"),
        Co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Co.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Di(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var bi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , ay = ["Webkit", "ms", "Moz", "O"];
Object.keys(bi).forEach(function(e) {
    ay.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        bi[t] = bi[e]
    })
});
function ip(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || bi.hasOwnProperty(e) && bi[e] ? ("" + t).trim() : t + "px"
}
function op(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = ip(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var ly = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function yl(e, t) {
    if (t) {
        if (ly[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function Al(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var wl = null;
function Cu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Sl = null
  , Ir = null
  , Pr = null;
function Jc(e) {
    if (e = uo(e)) {
        if (typeof Sl != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = Hs(t),
        Sl(e.stateNode, e.type, t))
    }
}
function sp(e) {
    Ir ? Pr ? Pr.push(e) : Pr = [e] : Ir = e
}
function ap() {
    if (Ir) {
        var e = Ir
          , t = Pr;
        if (Pr = Ir = null,
        Jc(e),
        t)
            for (e = 0; e < t.length; e++)
                Jc(t[e])
    }
}
function lp(e, t) {
    return e(t)
}
function up() {}
var ka = !1;
function cp(e, t, n) {
    if (ka)
        return e(t, n);
    ka = !0;
    try {
        return lp(e, t, n)
    } finally {
        ka = !1,
        (Ir !== null || Pr !== null) && (up(),
        ap())
    }
}
function Vi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Hs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var El = !1;
if (Jt)
    try {
        var ci = {};
        Object.defineProperty(ci, "passive", {
            get: function() {
                El = !0
            }
        }),
        window.addEventListener("test", ci, ci),
        window.removeEventListener("test", ci, ci)
    } catch {
        El = !1
    }
function uy(e, t, n, r, i, o, s, a, l) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, f)
    } catch (d) {
        this.onError(d)
    }
}
var ki = !1
  , ls = null
  , us = !1
  , xl = null
  , cy = {
    onError: function(e) {
        ki = !0,
        ls = e
    }
};
function fy(e, t, n, r, i, o, s, a, l) {
    ki = !1,
    ls = null,
    uy.apply(cy, arguments)
}
function dy(e, t, n, r, i, o, s, a, l) {
    if (fy.apply(this, arguments),
    ki) {
        if (ki) {
            var f = ls;
            ki = !1,
            ls = null
        } else
            throw Error(R(198));
        us || (us = !0,
        xl = f)
    }
}
function tr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function fp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Yc(e) {
    if (tr(e) !== e)
        throw Error(R(188))
}
function py(e) {
    var t = e.alternate;
    if (!t) {
        if (t = tr(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Yc(i),
                    e;
                if (o === r)
                    return Yc(i),
                    t;
                o = o.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== r)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function dp(e) {
    return e = py(e),
    e !== null ? pp(e) : null
}
function pp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = pp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var hp = $e.unstable_scheduleCallback
  , Xc = $e.unstable_cancelCallback
  , hy = $e.unstable_shouldYield
  , gy = $e.unstable_requestPaint
  , ge = $e.unstable_now
  , my = $e.unstable_getCurrentPriorityLevel
  , _u = $e.unstable_ImmediatePriority
  , gp = $e.unstable_UserBlockingPriority
  , cs = $e.unstable_NormalPriority
  , vy = $e.unstable_LowPriority
  , mp = $e.unstable_IdlePriority
  , zs = null
  , Lt = null;
function yy(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
        try {
            Lt.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Sy
  , Ay = Math.log
  , wy = Math.LN2;
function Sy(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ay(e) / wy | 0) | 0
}
var _o = 64
  , bo = 4194304;
function Si(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function fs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Si(a) : (o &= s,
        o !== 0 && (r = Si(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = Si(s) : o !== 0 && (r = Si(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - wt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Ey(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function xy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - wt(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = Ey(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Cl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function vp() {
    var e = _o;
    return _o <<= 1,
    !(_o & 4194240) && (_o = 64),
    e
}
function Oa(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ao(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - wt(t),
    e[t] = n
}
function Cy(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - wt(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function bu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - wt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var J = 0;
function yp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ap, ku, wp, Sp, Ep, _l = !1, ko = [], vn = null, yn = null, An = null, Wi = new Map, zi = new Map, cn = [], _y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $c(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        vn = null;
        break;
    case "dragenter":
    case "dragleave":
        yn = null;
        break;
    case "mouseover":
    case "mouseout":
        An = null;
        break;
    case "pointerover":
    case "pointerout":
        Wi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        zi.delete(t.pointerId)
    }
}
function fi(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = uo(t),
    t !== null && ku(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function by(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return vn = fi(vn, e, t, n, r, i),
        !0;
    case "dragenter":
        return yn = fi(yn, e, t, n, r, i),
        !0;
    case "mouseover":
        return An = fi(An, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Wi.set(o, fi(Wi.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        zi.set(o, fi(zi.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function xp(e) {
    var t = Ln(e.target);
    if (t !== null) {
        var n = tr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = fp(n),
                t !== null) {
                    e.blockedOn = t,
                    Ep(e.priority, function() {
                        wp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Qo(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            wl = r,
            n.target.dispatchEvent(r),
            wl = null
        } else
            return t = uo(n),
            t !== null && ku(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ef(e, t, n) {
    Qo(e) && n.delete(t)
}
function ky() {
    _l = !1,
    vn !== null && Qo(vn) && (vn = null),
    yn !== null && Qo(yn) && (yn = null),
    An !== null && Qo(An) && (An = null),
    Wi.forEach(ef),
    zi.forEach(ef)
}
function di(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    _l || (_l = !0,
    $e.unstable_scheduleCallback($e.unstable_NormalPriority, ky)))
}
function Qi(e) {
    function t(i) {
        return di(i, e)
    }
    if (0 < ko.length) {
        di(ko[0], e);
        for (var n = 1; n < ko.length; n++) {
            var r = ko[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (vn !== null && di(vn, e),
    yn !== null && di(yn, e),
    An !== null && di(An, e),
    Wi.forEach(t),
    zi.forEach(t),
    n = 0; n < cn.length; n++)
        r = cn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < cn.length && (n = cn[0],
    n.blockedOn === null); )
        xp(n),
        n.blockedOn === null && cn.shift()
}
var Nr = nn.ReactCurrentBatchConfig
  , ds = !0;
function Oy(e, t, n, r) {
    var i = J
      , o = Nr.transition;
    Nr.transition = null;
    try {
        J = 1,
        Ou(e, t, n, r)
    } finally {
        J = i,
        Nr.transition = o
    }
}
function Ry(e, t, n, r) {
    var i = J
      , o = Nr.transition;
    Nr.transition = null;
    try {
        J = 4,
        Ou(e, t, n, r)
    } finally {
        J = i,
        Nr.transition = o
    }
}
function Ou(e, t, n, r) {
    if (ds) {
        var i = bl(e, t, n, r);
        if (i === null)
            ja(e, t, r, ps, n),
            $c(e, r);
        else if (by(i, e, t, n, r))
            r.stopPropagation();
        else if ($c(e, r),
        t & 4 && -1 < _y.indexOf(e)) {
            for (; i !== null; ) {
                var o = uo(i);
                if (o !== null && Ap(o),
                o = bl(e, t, n, r),
                o === null && ja(e, t, r, ps, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            ja(e, t, r, null, n)
    }
}
var ps = null;
function bl(e, t, n, r) {
    if (ps = null,
    e = Cu(r),
    e = Ln(e),
    e !== null)
        if (t = tr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = fp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ps = e,
    null
}
function Cp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (my()) {
        case _u:
            return 1;
        case gp:
            return 4;
        case cs:
        case vy:
            return 16;
        case mp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var dn = null
  , Ru = null
  , Ko = null;
function _p() {
    if (Ko)
        return Ko;
    var e, t = Ru, n = t.length, r, i = "value"in dn ? dn.value : dn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Ko = i.slice(e, 1 < r ? 1 - r : void 0)
}
function qo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Oo() {
    return !0
}
function tf() {
    return !1
}
function tt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Oo : tf,
        this.isPropagationStopped = tf,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Oo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Oo)
        },
        persist: function() {},
        isPersistent: Oo
    }),
    t
}
var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Bu = tt(Yr), lo = ce({}, Yr, {
    view: 0,
    detail: 0
}), By = tt(lo), Ra, Ba, pi, Qs = ce({}, lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== pi && (pi && e.type === "mousemove" ? (Ra = e.screenX - pi.screenX,
        Ba = e.screenY - pi.screenY) : Ba = Ra = 0,
        pi = e),
        Ra)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ba
    }
}), nf = tt(Qs), Ty = ce({}, Qs, {
    dataTransfer: 0
}), Iy = tt(Ty), Py = ce({}, lo, {
    relatedTarget: 0
}), Ta = tt(Py), Ny = ce({}, Yr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Fy = tt(Ny), Ly = ce({}, Yr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Uy = tt(Ly), jy = ce({}, Yr, {
    data: 0
}), rf = tt(jy), My = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Dy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Vy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Wy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vy[e]) ? !!t[e] : !1
}
function Tu() {
    return Wy
}
var zy = ce({}, lo, {
    key: function(e) {
        if (e.key) {
            var t = My[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = qo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function(e) {
        return e.type === "keypress" ? qo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Qy = tt(zy)
  , Ky = ce({}, Qs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , of = tt(Ky)
  , qy = ce({}, lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu
})
  , Hy = tt(qy)
  , Gy = ce({}, Yr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Zy = tt(Gy)
  , Jy = ce({}, Qs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Yy = tt(Jy)
  , Xy = [9, 13, 27, 32]
  , Iu = Jt && "CompositionEvent"in window
  , Oi = null;
Jt && "documentMode"in document && (Oi = document.documentMode);
var $y = Jt && "TextEvent"in window && !Oi
  , bp = Jt && (!Iu || Oi && 8 < Oi && 11 >= Oi)
  , sf = " "
  , af = !1;
function kp(e, t) {
    switch (e) {
    case "keyup":
        return Xy.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Op(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var vr = !1;
function e1(e, t) {
    switch (e) {
    case "compositionend":
        return Op(t);
    case "keypress":
        return t.which !== 32 ? null : (af = !0,
        sf);
    case "textInput":
        return e = t.data,
        e === sf && af ? null : e;
    default:
        return null
    }
}
function t1(e, t) {
    if (vr)
        return e === "compositionend" || !Iu && kp(e, t) ? (e = _p(),
        Ko = Ru = dn = null,
        vr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return bp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var n1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function lf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!n1[e.type] : t === "textarea"
}
function Rp(e, t, n, r) {
    sp(r),
    t = hs(t, "onChange"),
    0 < t.length && (n = new Bu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ri = null
  , Ki = null;
function r1(e) {
    Dp(e, 0)
}
function Ks(e) {
    var t = wr(e);
    if ($d(t))
        return e
}
function i1(e, t) {
    if (e === "change")
        return t
}
var Bp = !1;
if (Jt) {
    var Ia;
    if (Jt) {
        var Pa = "oninput"in document;
        if (!Pa) {
            var uf = document.createElement("div");
            uf.setAttribute("oninput", "return;"),
            Pa = typeof uf.oninput == "function"
        }
        Ia = Pa
    } else
        Ia = !1;
    Bp = Ia && (!document.documentMode || 9 < document.documentMode)
}
function cf() {
    Ri && (Ri.detachEvent("onpropertychange", Tp),
    Ki = Ri = null)
}
function Tp(e) {
    if (e.propertyName === "value" && Ks(Ki)) {
        var t = [];
        Rp(t, Ki, e, Cu(e)),
        cp(r1, t)
    }
}
function o1(e, t, n) {
    e === "focusin" ? (cf(),
    Ri = t,
    Ki = n,
    Ri.attachEvent("onpropertychange", Tp)) : e === "focusout" && cf()
}
function s1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ks(Ki)
}
function a1(e, t) {
    if (e === "click")
        return Ks(t)
}
function l1(e, t) {
    if (e === "input" || e === "change")
        return Ks(t)
}
function u1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ct = typeof Object.is == "function" ? Object.is : u1;
function qi(e, t) {
    if (Ct(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ll.call(t, i) || !Ct(e[i], t[i]))
            return !1
    }
    return !0
}
function ff(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function df(e, t) {
    var n = ff(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ff(n)
    }
}
function Ip(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ip(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Pp() {
    for (var e = window, t = as(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = as(e.document)
    }
    return t
}
function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function c1(e) {
    var t = Pp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ip(n.ownerDocument.documentElement, n)) {
        if (r !== null && Pu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = df(n, o);
                var s = df(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var f1 = Jt && "documentMode"in document && 11 >= document.documentMode
  , yr = null
  , kl = null
  , Bi = null
  , Ol = !1;
function pf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ol || yr == null || yr !== as(r) || (r = yr,
    "selectionStart"in r && Pu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Bi && qi(Bi, r) || (Bi = r,
    r = hs(kl, "onSelect"),
    0 < r.length && (t = new Bu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yr)))
}
function Ro(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ar = {
    animationend: Ro("Animation", "AnimationEnd"),
    animationiteration: Ro("Animation", "AnimationIteration"),
    animationstart: Ro("Animation", "AnimationStart"),
    transitionend: Ro("Transition", "TransitionEnd")
}
  , Na = {}
  , Np = {};
Jt && (Np = document.createElement("div").style,
"AnimationEvent"in window || (delete Ar.animationend.animation,
delete Ar.animationiteration.animation,
delete Ar.animationstart.animation),
"TransitionEvent"in window || delete Ar.transitionend.transition);
function qs(e) {
    if (Na[e])
        return Na[e];
    if (!Ar[e])
        return e;
    var t = Ar[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Np)
            return Na[e] = t[n];
    return e
}
var Fp = qs("animationend")
  , Lp = qs("animationiteration")
  , Up = qs("animationstart")
  , jp = qs("transitionend")
  , Mp = new Map
  , hf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function On(e, t) {
    Mp.set(e, t),
    er(t, [e])
}
for (var Fa = 0; Fa < hf.length; Fa++) {
    var La = hf[Fa]
      , d1 = La.toLowerCase()
      , p1 = La[0].toUpperCase() + La.slice(1);
    On(d1, "on" + p1)
}
On(Fp, "onAnimationEnd");
On(Lp, "onAnimationIteration");
On(Up, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(jp, "onTransitionEnd");
Ur("onMouseEnter", ["mouseout", "mouseover"]);
Ur("onMouseLeave", ["mouseout", "mouseover"]);
Ur("onPointerEnter", ["pointerout", "pointerover"]);
Ur("onPointerLeave", ["pointerout", "pointerover"]);
er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , h1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));
function gf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    dy(r, t, void 0, e),
    e.currentTarget = null
}
function Dp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , f = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    gf(i, a, f),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    f = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    gf(i, a, f),
                    o = l
                }
        }
    }
    if (us)
        throw e = xl,
        us = !1,
        xl = null,
        e
}
function ie(e, t) {
    var n = t[Pl];
    n === void 0 && (n = t[Pl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Vp(t, e, 2, !1),
    n.add(r))
}
function Ua(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Vp(n, e, r, t)
}
var Bo = "_reactListening" + Math.random().toString(36).slice(2);
function Hi(e) {
    if (!e[Bo]) {
        e[Bo] = !0,
        Gd.forEach(function(n) {
            n !== "selectionchange" && (h1.has(n) || Ua(n, !1, e),
            Ua(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Bo] || (t[Bo] = !0,
        Ua("selectionchange", !1, t))
    }
}
function Vp(e, t, n, r) {
    switch (Cp(t)) {
    case 1:
        var i = Oy;
        break;
    case 4:
        i = Ry;
        break;
    default:
        i = Ou
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !El || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function ja(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Ln(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    cp(function() {
        var f = o
          , d = Cu(n)
          , g = [];
        e: {
            var p = Mp.get(e);
            if (p !== void 0) {
                var A = Bu
                  , E = e;
                switch (e) {
                case "keypress":
                    if (qo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    A = Qy;
                    break;
                case "focusin":
                    E = "focus",
                    A = Ta;
                    break;
                case "focusout":
                    E = "blur",
                    A = Ta;
                    break;
                case "beforeblur":
                case "afterblur":
                    A = Ta;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    A = nf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    A = Iy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    A = Hy;
                    break;
                case Fp:
                case Lp:
                case Up:
                    A = Fy;
                    break;
                case jp:
                    A = Zy;
                    break;
                case "scroll":
                    A = By;
                    break;
                case "wheel":
                    A = Yy;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    A = Uy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    A = of
                }
                var _ = (t & 4) !== 0
                  , I = !_ && e === "scroll"
                  , y = _ ? p !== null ? p + "Capture" : null : p;
                _ = [];
                for (var v = f, S; v !== null; ) {
                    S = v;
                    var x = S.stateNode;
                    if (S.tag === 5 && x !== null && (S = x,
                    y !== null && (x = Vi(v, y),
                    x != null && _.push(Gi(v, x, S)))),
                    I)
                        break;
                    v = v.return
                }
                0 < _.length && (p = new A(p,E,null,n,d),
                g.push({
                    event: p,
                    listeners: _
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                A = e === "mouseout" || e === "pointerout",
                p && n !== wl && (E = n.relatedTarget || n.fromElement) && (Ln(E) || E[Yt]))
                    break e;
                if ((A || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window,
                A ? (E = n.relatedTarget || n.toElement,
                A = f,
                E = E ? Ln(E) : null,
                E !== null && (I = tr(E),
                E !== I || E.tag !== 5 && E.tag !== 6) && (E = null)) : (A = null,
                E = f),
                A !== E)) {
                    if (_ = nf,
                    x = "onMouseLeave",
                    y = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (_ = of,
                    x = "onPointerLeave",
                    y = "onPointerEnter",
                    v = "pointer"),
                    I = A == null ? p : wr(A),
                    S = E == null ? p : wr(E),
                    p = new _(x,v + "leave",A,n,d),
                    p.target = I,
                    p.relatedTarget = S,
                    x = null,
                    Ln(d) === f && (_ = new _(y,v + "enter",E,n,d),
                    _.target = S,
                    _.relatedTarget = I,
                    x = _),
                    I = x,
                    A && E)
                        t: {
                            for (_ = A,
                            y = E,
                            v = 0,
                            S = _; S; S = dr(S))
                                v++;
                            for (S = 0,
                            x = y; x; x = dr(x))
                                S++;
                            for (; 0 < v - S; )
                                _ = dr(_),
                                v--;
                            for (; 0 < S - v; )
                                y = dr(y),
                                S--;
                            for (; v--; ) {
                                if (_ === y || y !== null && _ === y.alternate)
                                    break t;
                                _ = dr(_),
                                y = dr(y)
                            }
                            _ = null
                        }
                    else
                        _ = null;
                    A !== null && mf(g, p, A, _, !1),
                    E !== null && I !== null && mf(g, I, E, _, !0)
                }
            }
            e: {
                if (p = f ? wr(f) : window,
                A = p.nodeName && p.nodeName.toLowerCase(),
                A === "select" || A === "input" && p.type === "file")
                    var k = i1;
                else if (lf(p))
                    if (Bp)
                        k = l1;
                    else {
                        k = s1;
                        var O = o1
                    }
                else
                    (A = p.nodeName) && A.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = a1);
                if (k && (k = k(e, f))) {
                    Rp(g, k, n, d);
                    break e
                }
                O && O(e, p, f),
                e === "focusout" && (O = p._wrapperState) && O.controlled && p.type === "number" && gl(p, "number", p.value)
            }
            switch (O = f ? wr(f) : window,
            e) {
            case "focusin":
                (lf(O) || O.contentEditable === "true") && (yr = O,
                kl = f,
                Bi = null);
                break;
            case "focusout":
                Bi = kl = yr = null;
                break;
            case "mousedown":
                Ol = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ol = !1,
                pf(g, n, d);
                break;
            case "selectionchange":
                if (f1)
                    break;
            case "keydown":
            case "keyup":
                pf(g, n, d)
            }
            var B;
            if (Iu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                vr ? kp(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (bp && n.locale !== "ko" && (vr || N !== "onCompositionStart" ? N === "onCompositionEnd" && vr && (B = _p()) : (dn = d,
            Ru = "value"in dn ? dn.value : dn.textContent,
            vr = !0)),
            O = hs(f, N),
            0 < O.length && (N = new rf(N,e,null,n,d),
            g.push({
                event: N,
                listeners: O
            }),
            B ? N.data = B : (B = Op(n),
            B !== null && (N.data = B)))),
            (B = $y ? e1(e, n) : t1(e, n)) && (f = hs(f, "onBeforeInput"),
            0 < f.length && (d = new rf("onBeforeInput","beforeinput",null,n,d),
            g.push({
                event: d,
                listeners: f
            }),
            d.data = B))
        }
        Dp(g, t)
    })
}
function Gi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function hs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Vi(e, n),
        o != null && r.unshift(Gi(e, o, i)),
        o = Vi(e, t),
        o != null && r.push(Gi(e, o, i))),
        e = e.return
    }
    return r
}
function dr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function mf(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , f = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && f !== null && (a = f,
        i ? (l = Vi(n, o),
        l != null && s.unshift(Gi(n, l, a))) : i || (l = Vi(n, o),
        l != null && s.push(Gi(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var g1 = /\r\n?/g
  , m1 = /\u0000|\uFFFD/g;
function vf(e) {
    return (typeof e == "string" ? e : "" + e).replace(g1, `
`).replace(m1, "")
}
function To(e, t, n) {
    if (t = vf(t),
    vf(e) !== t && n)
        throw Error(R(425))
}
function gs() {}
var Rl = null
  , Bl = null;
function Tl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Il = typeof setTimeout == "function" ? setTimeout : void 0
  , v1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , yf = typeof Promise == "function" ? Promise : void 0
  , y1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof yf < "u" ? function(e) {
    return yf.resolve(null).then(e).catch(A1)
}
: Il;
function A1(e) {
    setTimeout(function() {
        throw e
    })
}
function Ma(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Qi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Qi(t)
}
function wn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Af(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xr = Math.random().toString(36).slice(2)
  , Pt = "__reactFiber$" + Xr
  , Zi = "__reactProps$" + Xr
  , Yt = "__reactContainer$" + Xr
  , Pl = "__reactEvents$" + Xr
  , w1 = "__reactListeners$" + Xr
  , S1 = "__reactHandles$" + Xr;
function Ln(e) {
    var t = e[Pt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Yt] || n[Pt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Af(e); e !== null; ) {
                    if (n = e[Pt])
                        return n;
                    e = Af(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function uo(e) {
    return e = e[Pt] || e[Yt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function wr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function Hs(e) {
    return e[Zi] || null
}
var Nl = []
  , Sr = -1;
function Rn(e) {
    return {
        current: e
    }
}
function oe(e) {
    0 > Sr || (e.current = Nl[Sr],
    Nl[Sr] = null,
    Sr--)
}
function ne(e, t) {
    Sr++,
    Nl[Sr] = e.current,
    e.current = t
}
var bn = {}
  , Ie = Rn(bn)
  , Qe = Rn(!1)
  , Qn = bn;
function jr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return bn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ke(e) {
    return e = e.childContextTypes,
    e != null
}
function ms() {
    oe(Qe),
    oe(Ie)
}
function wf(e, t, n) {
    if (Ie.current !== bn)
        throw Error(R(168));
    ne(Ie, t),
    ne(Qe, n)
}
function Wp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(R(108, oy(e) || "Unknown", i));
    return ce({}, n, r)
}
function vs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bn,
    Qn = Ie.current,
    ne(Ie, e),
    ne(Qe, Qe.current),
    !0
}
function Sf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(R(169));
    n ? (e = Wp(e, t, Qn),
    r.__reactInternalMemoizedMergedChildContext = e,
    oe(Qe),
    oe(Ie),
    ne(Ie, e)) : oe(Qe),
    ne(Qe, n)
}
var zt = null
  , Gs = !1
  , Da = !1;
function zp(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function E1(e) {
    Gs = !0,
    zp(e)
}
function Bn() {
    if (!Da && zt !== null) {
        Da = !0;
        var e = 0
          , t = J;
        try {
            var n = zt;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
            Gs = !1
        } catch (i) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            hp(_u, Bn),
            i
        } finally {
            J = t,
            Da = !1
        }
    }
    return null
}
var Er = []
  , xr = 0
  , ys = null
  , As = 0
  , st = []
  , at = 0
  , Kn = null
  , Kt = 1
  , qt = "";
function Nn(e, t) {
    Er[xr++] = As,
    Er[xr++] = ys,
    ys = e,
    As = t
}
function Qp(e, t, n) {
    st[at++] = Kt,
    st[at++] = qt,
    st[at++] = Kn,
    Kn = e;
    var r = Kt;
    e = qt;
    var i = 32 - wt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - wt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        Kt = 1 << 32 - wt(t) + i | n << i | r,
        qt = o + e
    } else
        Kt = 1 << o | n << i | r,
        qt = e
}
function Nu(e) {
    e.return !== null && (Nn(e, 1),
    Qp(e, 1, 0))
}
function Fu(e) {
    for (; e === ys; )
        ys = Er[--xr],
        Er[xr] = null,
        As = Er[--xr],
        Er[xr] = null;
    for (; e === Kn; )
        Kn = st[--at],
        st[at] = null,
        qt = st[--at],
        st[at] = null,
        Kt = st[--at],
        st[at] = null
}
var Xe = null
  , Ye = null
  , ae = !1
  , At = null;
function Kp(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ef(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ye = wn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        Ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Kn !== null ? {
            id: Kt,
            overflow: qt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ct(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        Ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function Fl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ll(e) {
    if (ae) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!Ef(e, t)) {
                if (Fl(e))
                    throw Error(R(418));
                t = wn(n.nextSibling);
                var r = Xe;
                t && Ef(e, t) ? Kp(r, n) : (e.flags = e.flags & -4097 | 2,
                ae = !1,
                Xe = e)
            }
        } else {
            if (Fl(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            ae = !1,
            Xe = e
        }
    }
}
function xf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function Io(e) {
    if (e !== Xe)
        return !1;
    if (!ae)
        return xf(e),
        ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps)),
    t && (t = Ye)) {
        if (Fl(e))
            throw qp(),
            Error(R(418));
        for (; t; )
            Kp(e, t),
            t = wn(t.nextSibling)
    }
    if (xf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = wn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else
        Ye = Xe ? wn(e.stateNode.nextSibling) : null;
    return !0
}
function qp() {
    for (var e = Ye; e; )
        e = wn(e.nextSibling)
}
function Mr() {
    Ye = Xe = null,
    ae = !1
}
function Lu(e) {
    At === null ? At = [e] : At.push(e)
}
var x1 = nn.ReactCurrentBatchConfig;
function vt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var ws = Rn(null)
  , Ss = null
  , Cr = null
  , Uu = null;
function ju() {
    Uu = Cr = Ss = null
}
function Mu(e) {
    var t = ws.current;
    oe(ws),
    e._currentValue = t
}
function Ul(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Fr(e, t) {
    Ss = e,
    Uu = Cr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0),
    e.firstContext = null)
}
function ht(e) {
    var t = e._currentValue;
    if (Uu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Cr === null) {
            if (Ss === null)
                throw Error(R(308));
            Cr = e,
            Ss.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Cr = Cr.next = e;
    return t
}
var Un = null;
function Du(e) {
    Un === null ? Un = [e] : Un.push(e)
}
function Hp(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Du(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Xt(e, r)
}
function Xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var un = !1;
function Vu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Gp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ht(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Xt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Du(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Xt(e, n)
}
function Ho(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        bu(e, n)
    }
}
function Cf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Es(e, t, n, r) {
    var i = e.updateQueue;
    un = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , f = l.next;
        l.next = null,
        s === null ? o = f : s.next = f,
        s = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== s && (a === null ? d.firstBaseUpdate = f : a.next = f,
        d.lastBaseUpdate = l))
    }
    if (o !== null) {
        var g = i.baseState;
        s = 0,
        d = f = l = null,
        a = o;
        do {
            var p = a.lane
              , A = a.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: A,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var E = e
                      , _ = a;
                    switch (p = t,
                    A = n,
                    _.tag) {
                    case 1:
                        if (E = _.payload,
                        typeof E == "function") {
                            g = E.call(A, g, p);
                            break e
                        }
                        g = E;
                        break e;
                    case 3:
                        E.flags = E.flags & -65537 | 128;
                    case 0:
                        if (E = _.payload,
                        p = typeof E == "function" ? E.call(A, g, p) : E,
                        p == null)
                            break e;
                        g = ce({}, g, p);
                        break e;
                    case 2:
                        un = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                p = i.effects,
                p === null ? i.effects = [a] : p.push(a))
            } else
                A = {
                    eventTime: A,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (f = d = A,
                l = g) : d = d.next = A,
                s |= p;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                i.lastBaseUpdate = p,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = g),
        i.baseState = l,
        i.firstBaseUpdate = f,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Hn |= s,
        e.lanes = s,
        e.memoizedState = g
    }
}
function _f(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(R(191, i));
                i.call(r)
            }
        }
}
var Zp = new Hd.Component().refs;
function jl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Zs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? tr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = je()
          , i = xn(e)
          , o = Ht(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Sn(e, o, i),
        t !== null && (St(t, e, i, r),
        Ho(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = je()
          , i = xn(e)
          , o = Ht(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Sn(e, o, i),
        t !== null && (St(t, e, i, r),
        Ho(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = je()
          , r = xn(e)
          , i = Ht(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Sn(e, i, r),
        t !== null && (St(t, e, r, n),
        Ho(t, e, r))
    }
};
function bf(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !qi(n, r) || !qi(i, o) : !0
}
function Jp(e, t, n) {
    var r = !1
      , i = bn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = ht(o) : (i = Ke(t) ? Qn : Ie.current,
    r = t.contextTypes,
    o = (r = r != null) ? jr(e, i) : bn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Zs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function kf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zs.enqueueReplaceState(t, t.state, null)
}
function Ml(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = Zp,
    Vu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ht(o) : (o = Ke(t) ? Qn : Ie.current,
    i.context = jr(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (jl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Zs.enqueueReplaceState(i, i.state, null),
    Es(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function hi(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(R(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                a === Zp && (a = i.refs = {}),
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function Po(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Of(e) {
    var t = e._init;
    return t(e._payload)
}
function Yp(e) {
    function t(y, v) {
        if (e) {
            var S = y.deletions;
            S === null ? (y.deletions = [v],
            y.flags |= 16) : S.push(v)
        }
    }
    function n(y, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(y, v),
            v = v.sibling;
        return null
    }
    function r(y, v) {
        for (y = new Map; v !== null; )
            v.key !== null ? y.set(v.key, v) : y.set(v.index, v),
            v = v.sibling;
        return y
    }
    function i(y, v) {
        return y = Cn(y, v),
        y.index = 0,
        y.sibling = null,
        y
    }
    function o(y, v, S) {
        return y.index = S,
        e ? (S = y.alternate,
        S !== null ? (S = S.index,
        S < v ? (y.flags |= 2,
        v) : S) : (y.flags |= 2,
        v)) : (y.flags |= 1048576,
        v)
    }
    function s(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function a(y, v, S, x) {
        return v === null || v.tag !== 6 ? (v = Ha(S, y.mode, x),
        v.return = y,
        v) : (v = i(v, S),
        v.return = y,
        v)
    }
    function l(y, v, S, x) {
        var k = S.type;
        return k === mr ? d(y, v, S.props.children, x, S.key) : v !== null && (v.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ln && Of(k) === v.type) ? (x = i(v, S.props),
        x.ref = hi(y, v, S),
        x.return = y,
        x) : (x = $o(S.type, S.key, S.props, null, y.mode, x),
        x.ref = hi(y, v, S),
        x.return = y,
        x)
    }
    function f(y, v, S, x) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== S.containerInfo || v.stateNode.implementation !== S.implementation ? (v = Ga(S, y.mode, x),
        v.return = y,
        v) : (v = i(v, S.children || []),
        v.return = y,
        v)
    }
    function d(y, v, S, x, k) {
        return v === null || v.tag !== 7 ? (v = Dn(S, y.mode, x, k),
        v.return = y,
        v) : (v = i(v, S),
        v.return = y,
        v)
    }
    function g(y, v, S) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = Ha("" + v, y.mode, S),
            v.return = y,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Eo:
                return S = $o(v.type, v.key, v.props, null, y.mode, S),
                S.ref = hi(y, null, v),
                S.return = y,
                S;
            case gr:
                return v = Ga(v, y.mode, S),
                v.return = y,
                v;
            case ln:
                var x = v._init;
                return g(y, x(v._payload), S)
            }
            if (wi(v) || ui(v))
                return v = Dn(v, y.mode, S, null),
                v.return = y,
                v;
            Po(y, v)
        }
        return null
    }
    function p(y, v, S, x) {
        var k = v !== null ? v.key : null;
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return k !== null ? null : a(y, v, "" + S, x);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Eo:
                return S.key === k ? l(y, v, S, x) : null;
            case gr:
                return S.key === k ? f(y, v, S, x) : null;
            case ln:
                return k = S._init,
                p(y, v, k(S._payload), x)
            }
            if (wi(S) || ui(S))
                return k !== null ? null : d(y, v, S, x, null);
            Po(y, S)
        }
        return null
    }
    function A(y, v, S, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return y = y.get(S) || null,
            a(v, y, "" + x, k);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Eo:
                return y = y.get(x.key === null ? S : x.key) || null,
                l(v, y, x, k);
            case gr:
                return y = y.get(x.key === null ? S : x.key) || null,
                f(v, y, x, k);
            case ln:
                var O = x._init;
                return A(y, v, S, O(x._payload), k)
            }
            if (wi(x) || ui(x))
                return y = y.get(S) || null,
                d(v, y, x, k, null);
            Po(v, x)
        }
        return null
    }
    function E(y, v, S, x) {
        for (var k = null, O = null, B = v, N = v = 0, K = null; B !== null && N < S.length; N++) {
            B.index > N ? (K = B,
            B = null) : K = B.sibling;
            var j = p(y, B, S[N], x);
            if (j === null) {
                B === null && (B = K);
                break
            }
            e && B && j.alternate === null && t(y, B),
            v = o(j, v, N),
            O === null ? k = j : O.sibling = j,
            O = j,
            B = K
        }
        if (N === S.length)
            return n(y, B),
            ae && Nn(y, N),
            k;
        if (B === null) {
            for (; N < S.length; N++)
                B = g(y, S[N], x),
                B !== null && (v = o(B, v, N),
                O === null ? k = B : O.sibling = B,
                O = B);
            return ae && Nn(y, N),
            k
        }
        for (B = r(y, B); N < S.length; N++)
            K = A(B, y, N, S[N], x),
            K !== null && (e && K.alternate !== null && B.delete(K.key === null ? N : K.key),
            v = o(K, v, N),
            O === null ? k = K : O.sibling = K,
            O = K);
        return e && B.forEach(function(Z) {
            return t(y, Z)
        }),
        ae && Nn(y, N),
        k
    }
    function _(y, v, S, x) {
        var k = ui(S);
        if (typeof k != "function")
            throw Error(R(150));
        if (S = k.call(S),
        S == null)
            throw Error(R(151));
        for (var O = k = null, B = v, N = v = 0, K = null, j = S.next(); B !== null && !j.done; N++,
        j = S.next()) {
            B.index > N ? (K = B,
            B = null) : K = B.sibling;
            var Z = p(y, B, j.value, x);
            if (Z === null) {
                B === null && (B = K);
                break
            }
            e && B && Z.alternate === null && t(y, B),
            v = o(Z, v, N),
            O === null ? k = Z : O.sibling = Z,
            O = Z,
            B = K
        }
        if (j.done)
            return n(y, B),
            ae && Nn(y, N),
            k;
        if (B === null) {
            for (; !j.done; N++,
            j = S.next())
                j = g(y, j.value, x),
                j !== null && (v = o(j, v, N),
                O === null ? k = j : O.sibling = j,
                O = j);
            return ae && Nn(y, N),
            k
        }
        for (B = r(y, B); !j.done; N++,
        j = S.next())
            j = A(B, y, N, j.value, x),
            j !== null && (e && j.alternate !== null && B.delete(j.key === null ? N : j.key),
            v = o(j, v, N),
            O === null ? k = j : O.sibling = j,
            O = j);
        return e && B.forEach(function(Ne) {
            return t(y, Ne)
        }),
        ae && Nn(y, N),
        k
    }
    function I(y, v, S, x) {
        if (typeof S == "object" && S !== null && S.type === mr && S.key === null && (S = S.props.children),
        typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Eo:
                e: {
                    for (var k = S.key, O = v; O !== null; ) {
                        if (O.key === k) {
                            if (k = S.type,
                            k === mr) {
                                if (O.tag === 7) {
                                    n(y, O.sibling),
                                    v = i(O, S.props.children),
                                    v.return = y,
                                    y = v;
                                    break e
                                }
                            } else if (O.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ln && Of(k) === O.type) {
                                n(y, O.sibling),
                                v = i(O, S.props),
                                v.ref = hi(y, O, S),
                                v.return = y,
                                y = v;
                                break e
                            }
                            n(y, O);
                            break
                        } else
                            t(y, O);
                        O = O.sibling
                    }
                    S.type === mr ? (v = Dn(S.props.children, y.mode, x, S.key),
                    v.return = y,
                    y = v) : (x = $o(S.type, S.key, S.props, null, y.mode, x),
                    x.ref = hi(y, v, S),
                    x.return = y,
                    y = x)
                }
                return s(y);
            case gr:
                e: {
                    for (O = S.key; v !== null; ) {
                        if (v.key === O)
                            if (v.tag === 4 && v.stateNode.containerInfo === S.containerInfo && v.stateNode.implementation === S.implementation) {
                                n(y, v.sibling),
                                v = i(v, S.children || []),
                                v.return = y,
                                y = v;
                                break e
                            } else {
                                n(y, v);
                                break
                            }
                        else
                            t(y, v);
                        v = v.sibling
                    }
                    v = Ga(S, y.mode, x),
                    v.return = y,
                    y = v
                }
                return s(y);
            case ln:
                return O = S._init,
                I(y, v, O(S._payload), x)
            }
            if (wi(S))
                return E(y, v, S, x);
            if (ui(S))
                return _(y, v, S, x);
            Po(y, S)
        }
        return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S,
        v !== null && v.tag === 6 ? (n(y, v.sibling),
        v = i(v, S),
        v.return = y,
        y = v) : (n(y, v),
        v = Ha(S, y.mode, x),
        v.return = y,
        y = v),
        s(y)) : n(y, v)
    }
    return I
}
var Dr = Yp(!0)
  , Xp = Yp(!1)
  , co = {}
  , Ut = Rn(co)
  , Ji = Rn(co)
  , Yi = Rn(co);
function jn(e) {
    if (e === co)
        throw Error(R(174));
    return e
}
function Wu(e, t) {
    switch (ne(Yi, t),
    ne(Ji, e),
    ne(Ut, co),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : vl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = vl(t, e)
    }
    oe(Ut),
    ne(Ut, t)
}
function Vr() {
    oe(Ut),
    oe(Ji),
    oe(Yi)
}
function $p(e) {
    jn(Yi.current);
    var t = jn(Ut.current)
      , n = vl(t, e.type);
    t !== n && (ne(Ji, e),
    ne(Ut, n))
}
function zu(e) {
    Ji.current === e && (oe(Ut),
    oe(Ji))
}
var le = Rn(0);
function xs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Va = [];
function Qu() {
    for (var e = 0; e < Va.length; e++)
        Va[e]._workInProgressVersionPrimary = null;
    Va.length = 0
}
var Go = nn.ReactCurrentDispatcher
  , Wa = nn.ReactCurrentBatchConfig
  , qn = 0
  , ue = null
  , ye = null
  , Ee = null
  , Cs = !1
  , Ti = !1
  , Xi = 0
  , C1 = 0;
function Oe() {
    throw Error(R(321))
}
function Ku(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ct(e[n], t[n]))
            return !1;
    return !0
}
function qu(e, t, n, r, i, o) {
    if (qn = o,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Go.current = e === null || e.memoizedState === null ? O1 : R1,
    e = n(r, i),
    Ti) {
        o = 0;
        do {
            if (Ti = !1,
            Xi = 0,
            25 <= o)
                throw Error(R(301));
            o += 1,
            Ee = ye = null,
            t.updateQueue = null,
            Go.current = B1,
            e = n(r, i)
        } while (Ti)
    }
    if (Go.current = _s,
    t = ye !== null && ye.next !== null,
    qn = 0,
    Ee = ye = ue = null,
    Cs = !1,
    t)
        throw Error(R(300));
    return e
}
function Hu() {
    var e = Xi !== 0;
    return Xi = 0,
    e
}
function Tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ee === null ? ue.memoizedState = Ee = e : Ee = Ee.next = e,
    Ee
}
function gt() {
    if (ye === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ye.next;
    var t = Ee === null ? ue.memoizedState : Ee.next;
    if (t !== null)
        Ee = t,
        ye = e;
    else {
        if (e === null)
            throw Error(R(310));
        ye = e,
        e = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        },
        Ee === null ? ue.memoizedState = Ee = e : Ee = Ee.next = e
    }
    return Ee
}
function $i(e, t) {
    return typeof t == "function" ? t(e) : t
}
function za(e) {
    var t = gt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = ye
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , f = o;
        do {
            var d = f.lane;
            if ((qn & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                }),
                r = f.hasEagerState ? f.eagerState : e(r, f.action);
            else {
                var g = {
                    lane: d,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                l === null ? (a = l = g,
                s = r) : l = l.next = g,
                ue.lanes |= d,
                Hn |= d
            }
            f = f.next
        } while (f !== null && f !== o);
        l === null ? s = r : l.next = a,
        Ct(r, t.memoizedState) || (ze = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            ue.lanes |= o,
            Hn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Qa(e) {
    var t = gt()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        Ct(o, t.memoizedState) || (ze = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function eh() {}
function th(e, t) {
    var n = ue
      , r = gt()
      , i = t()
      , o = !Ct(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    ze = !0),
    r = r.queue,
    Gu(ih.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ee !== null && Ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        eo(9, rh.bind(null, n, r, i, t), void 0, null),
        xe === null)
            throw Error(R(349));
        qn & 30 || nh(n, t, i)
    }
    return i
}
function nh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function rh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    oh(t) && sh(e)
}
function ih(e, t, n) {
    return n(function() {
        oh(t) && sh(e)
    })
}
function oh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ct(e, n)
    } catch {
        return !0
    }
}
function sh(e) {
    var t = Xt(e, 1);
    t !== null && St(t, e, 1, -1)
}
function Rf(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $i,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = k1.bind(null, ue, e),
    [t.memoizedState, e]
}
function eo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ah() {
    return gt().memoizedState
}
function Zo(e, t, n, r) {
    var i = Tt();
    ue.flags |= e,
    i.memoizedState = eo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Js(e, t, n, r) {
    var i = gt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ye !== null) {
        var s = ye.memoizedState;
        if (o = s.destroy,
        r !== null && Ku(r, s.deps)) {
            i.memoizedState = eo(t, n, o, r);
            return
        }
    }
    ue.flags |= e,
    i.memoizedState = eo(1 | t, n, o, r)
}
function Bf(e, t) {
    return Zo(8390656, 8, e, t)
}
function Gu(e, t) {
    return Js(2048, 8, e, t)
}
function lh(e, t) {
    return Js(4, 2, e, t)
}
function uh(e, t) {
    return Js(4, 4, e, t)
}
function ch(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function fh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Js(4, 4, ch.bind(null, t, e), n)
}
function Zu() {}
function dh(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ku(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ph(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ku(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function hh(e, t, n) {
    return qn & 21 ? (Ct(n, t) || (n = vp(),
    ue.lanes |= n,
    Hn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ze = !0),
    e.memoizedState = n)
}
function _1(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Wa.transition;
    Wa.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        Wa.transition = r
    }
}
function gh() {
    return gt().memoizedState
}
function b1(e, t, n) {
    var r = xn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    mh(e))
        vh(t, n);
    else if (n = Hp(e, t, n, r),
    n !== null) {
        var i = je();
        St(n, e, r, i),
        yh(n, t, r)
    }
}
function k1(e, t, n) {
    var r = xn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (mh(e))
        vh(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Ct(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Du(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Hp(e, t, i, r),
        n !== null && (i = je(),
        St(n, e, r, i),
        yh(n, t, r))
    }
}
function mh(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function vh(e, t) {
    Ti = Cs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function yh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        bu(e, n)
    }
}
var _s = {
    readContext: ht,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1
}
  , O1 = {
    readContext: ht,
    useCallback: function(e, t) {
        return Tt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ht,
    useEffect: Bf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Zo(4194308, 4, ch.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Zo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Zo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Tt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Tt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = b1.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Tt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Rf,
    useDebugValue: Zu,
    useDeferredValue: function(e) {
        return Tt().memoizedState = e
    },
    useTransition: function() {
        var e = Rf(!1)
          , t = e[0];
        return e = _1.bind(null, e[1]),
        Tt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , i = Tt();
        if (ae) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            xe === null)
                throw Error(R(349));
            qn & 30 || nh(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Bf(ih.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        eo(9, rh.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Tt()
          , t = xe.identifierPrefix;
        if (ae) {
            var n = qt
              , r = Kt;
            n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Xi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = C1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , R1 = {
    readContext: ht,
    useCallback: dh,
    useContext: ht,
    useEffect: Gu,
    useImperativeHandle: fh,
    useInsertionEffect: lh,
    useLayoutEffect: uh,
    useMemo: ph,
    useReducer: za,
    useRef: ah,
    useState: function() {
        return za($i)
    },
    useDebugValue: Zu,
    useDeferredValue: function(e) {
        var t = gt();
        return hh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = za($i)[0]
          , t = gt().memoizedState;
        return [e, t]
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: gh,
    unstable_isNewReconciler: !1
}
  , B1 = {
    readContext: ht,
    useCallback: dh,
    useContext: ht,
    useEffect: Gu,
    useImperativeHandle: fh,
    useInsertionEffect: lh,
    useLayoutEffect: uh,
    useMemo: ph,
    useReducer: Qa,
    useRef: ah,
    useState: function() {
        return Qa($i)
    },
    useDebugValue: Zu,
    useDeferredValue: function(e) {
        var t = gt();
        return ye === null ? t.memoizedState = e : hh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Qa($i)[0]
          , t = gt().memoizedState;
        return [e, t]
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: gh,
    unstable_isNewReconciler: !1
};
function Wr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += iy(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Ka(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Dl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var T1 = typeof WeakMap == "function" ? WeakMap : Map;
function Ah(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ks || (ks = !0,
        Jl = r),
        Dl(e, t)
    }
    ,
    n
}
function wh(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Dl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Dl(e, t),
        typeof r != "function" && (En === null ? En = new Set([this]) : En.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Tf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new T1;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = K1.bind(null, e, t, n),
    t.then(e, e))
}
function If(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Pf(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1),
    t.tag = 2,
    Sn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var I1 = nn.ReactCurrentOwner
  , ze = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? Xp(t, null, n, r) : Dr(t, e.child, n, r)
}
function Nf(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Fr(t, i),
    r = qu(e, t, n, r, o, i),
    n = Hu(),
    e !== null && !ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    $t(e, t, i)) : (ae && n && Nu(t),
    t.flags |= 1,
    Ue(e, t, r, i),
    t.child)
}
function Ff(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !rc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Sh(e, t, o, r, i)) : (e = $o(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : qi,
        n(s, r) && e.ref === t.ref)
            return $t(e, t, i)
    }
    return t.flags |= 1,
    e = Cn(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Sh(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (qi(o, r) && e.ref === t.ref)
            if (ze = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (ze = !0);
            else
                return t.lanes = e.lanes,
                $t(e, t, i)
    }
    return Vl(e, t, n, r, i)
}
function Eh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(br, Je),
            Je |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(br, Je),
                Je |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            ne(br, Je),
            Je |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(br, Je),
        Je |= r;
    return Ue(e, t, i, n),
    t.child
}
function xh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Vl(e, t, n, r, i) {
    var o = Ke(n) ? Qn : Ie.current;
    return o = jr(t, o),
    Fr(t, i),
    n = qu(e, t, n, r, o, i),
    r = Hu(),
    e !== null && !ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    $t(e, t, i)) : (ae && r && Nu(t),
    t.flags |= 1,
    Ue(e, t, n, i),
    t.child)
}
function Lf(e, t, n, r, i) {
    if (Ke(n)) {
        var o = !0;
        vs(t)
    } else
        o = !1;
    if (Fr(t, i),
    t.stateNode === null)
        Jo(e, t),
        Jp(t, n, r),
        Ml(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , f = n.contextType;
        typeof f == "object" && f !== null ? f = ht(f) : (f = Ke(n) ? Qn : Ie.current,
        f = jr(t, f));
        var d = n.getDerivedStateFromProps
          , g = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== f) && kf(t, s, r, f),
        un = !1;
        var p = t.memoizedState;
        s.state = p,
        Es(t, r, s, i),
        l = t.memoizedState,
        a !== r || p !== l || Qe.current || un ? (typeof d == "function" && (jl(t, n, d, r),
        l = t.memoizedState),
        (a = un || bf(t, n, a, r, p, l, f)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = f,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Gp(e, t),
        a = t.memoizedProps,
        f = t.type === t.elementType ? a : vt(t.type, a),
        s.props = f,
        g = t.pendingProps,
        p = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ht(l) : (l = Ke(n) ? Qn : Ie.current,
        l = jr(t, l));
        var A = n.getDerivedStateFromProps;
        (d = typeof A == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== g || p !== l) && kf(t, s, r, l),
        un = !1,
        p = t.memoizedState,
        s.state = p,
        Es(t, r, s, i);
        var E = t.memoizedState;
        a !== g || p !== E || Qe.current || un ? (typeof A == "function" && (jl(t, n, A, r),
        E = t.memoizedState),
        (f = un || bf(t, n, f, r, p, E, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, E, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, E, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = E),
        s.props = r,
        s.state = E,
        s.context = l,
        r = f) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Wl(e, t, n, r, o, i)
}
function Wl(e, t, n, r, i, o) {
    xh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Sf(t, n, !1),
        $t(e, t, o);
    r = t.stateNode,
    I1.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Dr(t, e.child, null, o),
    t.child = Dr(t, null, a, o)) : Ue(e, t, a, o),
    t.memoizedState = r.state,
    i && Sf(t, n, !0),
    t.child
}
function Ch(e) {
    var t = e.stateNode;
    t.pendingContext ? wf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wf(e, t.context, !1),
    Wu(e, t.containerInfo)
}
function Uf(e, t, n, r, i) {
    return Mr(),
    Lu(i),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var zl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ql(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function _h(e, t, n) {
    var r = t.pendingProps, i = le.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    ne(le, i & 1),
    e === null)
        return Ll(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = $s(s, r, 0, null),
        e = Dn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Ql(n),
        t.memoizedState = zl,
        e) : Ju(t, s));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return P1(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Cn(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = Cn(a, o) : (o = Dn(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Ql(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = zl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Cn(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ju(e, t) {
    return t = $s({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function No(e, t, n, r) {
    return r !== null && Lu(r),
    Dr(t, e.child, null, n),
    e = Ju(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function P1(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ka(Error(R(422))),
        No(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = $s({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Dn(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Dr(t, e.child, null, s),
        t.child.memoizedState = Ql(s),
        t.memoizedState = zl,
        o);
    if (!(t.mode & 1))
        return No(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(R(419)),
        r = Ka(o, r, void 0),
        No(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    ze || a) {
        if (r = xe,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Xt(e, i),
            St(r, e, i, -1))
        }
        return nc(),
        r = Ka(Error(R(421))),
        No(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = q1.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Ye = wn(i.nextSibling),
    Xe = t,
    ae = !0,
    At = null,
    e !== null && (st[at++] = Kt,
    st[at++] = qt,
    st[at++] = Kn,
    Kt = e.id,
    qt = e.overflow,
    Kn = t),
    t = Ju(t, r.children),
    t.flags |= 4096,
    t)
}
function jf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ul(e.return, t, n)
}
function qa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function bh(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Ue(e, t, r.children, n),
    r = le.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && jf(e, n, t);
                else if (e.tag === 19)
                    jf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(le, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && xs(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            qa(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && xs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            qa(t, !0, n, null, o);
            break;
        case "together":
            qa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Jo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function $t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Hn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Cn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Cn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function N1(e, t, n) {
    switch (t.tag) {
    case 3:
        Ch(t),
        Mr();
        break;
    case 5:
        $p(t);
        break;
    case 1:
        Ke(t.type) && vs(t);
        break;
    case 4:
        Wu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        ne(ws, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(le, le.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? _h(e, t, n) : (ne(le, le.current & 1),
            e = $t(e, t, n),
            e !== null ? e.sibling : null);
        ne(le, le.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return bh(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        ne(le, le.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Eh(e, t, n)
    }
    return $t(e, t, n)
}
var kh, Kl, Oh, Rh;
kh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Kl = function() {}
;
Oh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        jn(Ut.current);
        var o = null;
        switch (n) {
        case "input":
            i = pl(e, i),
            r = pl(e, r),
            o = [];
            break;
        case "select":
            i = ce({}, i, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = ml(e, i),
            r = ml(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gs)
        }
        yl(n, r);
        var s;
        n = null;
        for (f in i)
            if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
                if (f === "style") {
                    var a = i[f];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Mi.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
        for (f in r) {
            var l = r[f];
            if (a = i != null ? i[f] : void 0,
            r.hasOwnProperty(f) && l !== a && (l != null || a != null))
                if (f === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(f, n)),
                        n = l;
                else
                    f === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(f, l)) : f === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(f, "" + l) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Mi.hasOwnProperty(f) ? (l != null && f === "onScroll" && ie("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(f, l))
        }
        n && (o = o || []).push("style", n);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4)
    }
}
;
Rh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function gi(e, t) {
    if (!ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function F1(e, t, n) {
    var r = t.pendingProps;
    switch (Fu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Re(t),
        null;
    case 1:
        return Ke(t.type) && ms(),
        Re(t),
        null;
    case 3:
        return r = t.stateNode,
        Vr(),
        oe(Qe),
        oe(Ie),
        Qu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Io(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        At !== null && ($l(At),
        At = null))),
        Kl(e, t),
        Re(t),
        null;
    case 5:
        zu(t);
        var i = jn(Yi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Oh(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Re(t),
                null
            }
            if (e = jn(Ut.current),
            Io(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Pt] = t,
                r[Zi] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ie("cancel", r),
                    ie("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ie("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ei.length; i++)
                        ie(Ei[i], r);
                    break;
                case "source":
                    ie("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ie("error", r),
                    ie("load", r);
                    break;
                case "details":
                    ie("toggle", r);
                    break;
                case "input":
                    qc(r, o),
                    ie("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    ie("invalid", r);
                    break;
                case "textarea":
                    Gc(r, o),
                    ie("invalid", r)
                }
                yl(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && To(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && To(r.textContent, a, e),
                        i = ["children", "" + a]) : Mi.hasOwnProperty(s) && a != null && s === "onScroll" && ie("scroll", r)
                    }
                switch (n) {
                case "input":
                    xo(r),
                    Hc(r, o, !0);
                    break;
                case "textarea":
                    xo(r),
                    Zc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = gs)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = np(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Pt] = t,
                e[Zi] = r,
                kh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Al(n, r),
                    n) {
                    case "dialog":
                        ie("cancel", e),
                        ie("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ie("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ei.length; i++)
                            ie(Ei[i], e);
                        i = r;
                        break;
                    case "source":
                        ie("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ie("error", e),
                        ie("load", e),
                        i = r;
                        break;
                    case "details":
                        ie("toggle", e),
                        i = r;
                        break;
                    case "input":
                        qc(e, r),
                        i = pl(e, r),
                        ie("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ce({}, r, {
                            value: void 0
                        }),
                        ie("invalid", e);
                        break;
                    case "textarea":
                        Gc(e, r),
                        i = ml(e, r),
                        ie("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    yl(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? op(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && rp(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Di(e, l) : typeof l == "number" && Di(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mi.hasOwnProperty(o) ? l != null && o === "onScroll" && ie("scroll", e) : l != null && wu(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        xo(e),
                        Hc(e, r, !1);
                        break;
                    case "textarea":
                        xo(e),
                        Zc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + _n(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Tr(e, !!r.multiple, o, !1) : r.defaultValue != null && Tr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = gs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Rh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = jn(Yi.current),
            jn(Ut.current),
            Io(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Pt] = t,
                (o = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        To(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && To(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Pt] = t,
                t.stateNode = r
        }
        return Re(t),
        null;
    case 13:
        if (oe(le),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ae && Ye !== null && t.mode & 1 && !(t.flags & 128))
                qp(),
                Mr(),
                t.flags |= 98560,
                o = !1;
            else if (o = Io(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(R(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(R(317));
                    o[Pt] = t
                } else
                    Mr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Re(t),
                o = !1
            } else
                At !== null && ($l(At),
                At = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || le.current & 1 ? Ae === 0 && (Ae = 3) : nc())),
        t.updateQueue !== null && (t.flags |= 4),
        Re(t),
        null);
    case 4:
        return Vr(),
        Kl(e, t),
        e === null && Hi(t.stateNode.containerInfo),
        Re(t),
        null;
    case 10:
        return Mu(t.type._context),
        Re(t),
        null;
    case 17:
        return Ke(t.type) && ms(),
        Re(t),
        null;
    case 19:
        if (oe(le),
        o = t.memoizedState,
        o === null)
            return Re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                gi(o, !1);
            else {
                if (Ae !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = xs(e),
                        s !== null) {
                            for (t.flags |= 128,
                            gi(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(le, le.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && ge() > zr && (t.flags |= 128,
                r = !0,
                gi(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = xs(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    gi(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !ae)
                        return Re(t),
                        null
                } else
                    2 * ge() - o.renderingStartTime > zr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    gi(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = ge(),
        t.sibling = null,
        n = le.current,
        ne(le, r ? n & 1 | 2 : n & 1),
        t) : (Re(t),
        null);
    case 22:
    case 23:
        return tc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Je & 1073741824 && (Re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function L1(e, t) {
    switch (Fu(t),
    t.tag) {
    case 1:
        return Ke(t.type) && ms(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Vr(),
        oe(Qe),
        oe(Ie),
        Qu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return zu(t),
        null;
    case 13:
        if (oe(le),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Mr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return oe(le),
        null;
    case 4:
        return Vr(),
        null;
    case 10:
        return Mu(t.type._context),
        null;
    case 22:
    case 23:
        return tc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Fo = !1
  , Te = !1
  , U1 = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function _r(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function ql(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var Mf = !1;
function j1(e, t) {
    if (Rl = ds,
    e = Pp(),
    Pu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , f = 0
                      , d = 0
                      , g = e
                      , p = null;
                    t: for (; ; ) {
                        for (var A; g !== n || i !== 0 && g.nodeType !== 3 || (a = s + i),
                        g !== o || r !== 0 && g.nodeType !== 3 || (l = s + r),
                        g.nodeType === 3 && (s += g.nodeValue.length),
                        (A = g.firstChild) !== null; )
                            p = g,
                            g = A;
                        for (; ; ) {
                            if (g === e)
                                break t;
                            if (p === n && ++f === i && (a = s),
                            p === o && ++d === r && (l = s),
                            (A = g.nextSibling) !== null)
                                break;
                            g = p,
                            p = g.parentNode
                        }
                        g = A
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Bl = {
        focusedElem: e,
        selectionRange: n
    },
    ds = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var E = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (E !== null) {
                                var _ = E.memoizedProps
                                  , I = E.memoizedState
                                  , y = t.stateNode
                                  , v = y.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : vt(t.type, _), I);
                                y.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var S = t.stateNode.containerInfo;
                            S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (x) {
                    pe(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return E = Mf,
    Mf = !1,
    E
}
function Ii(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && ql(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ys(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Hl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Bh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Bh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Pt],
    delete t[Zi],
    delete t[Pl],
    delete t[w1],
    delete t[S1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Th(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Df(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Th(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Gl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = gs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Gl(e, t, n),
        e = e.sibling; e !== null; )
            Gl(e, t, n),
            e = e.sibling
}
function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Zl(e, t, n),
        e = e.sibling; e !== null; )
            Zl(e, t, n),
            e = e.sibling
}
var Ce = null
  , yt = !1;
function sn(e, t, n) {
    for (n = n.child; n !== null; )
        Ih(e, t, n),
        n = n.sibling
}
function Ih(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
        try {
            Lt.onCommitFiberUnmount(zs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Te || _r(n, t);
    case 6:
        var r = Ce
          , i = yt;
        Ce = null,
        sn(e, t, n),
        Ce = r,
        yt = i,
        Ce !== null && (yt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
    case 18:
        Ce !== null && (yt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? Ma(e.parentNode, n) : e.nodeType === 1 && Ma(e, n),
        Qi(e)) : Ma(Ce, n.stateNode));
        break;
    case 4:
        r = Ce,
        i = yt,
        Ce = n.stateNode.containerInfo,
        yt = !0,
        sn(e, t, n),
        Ce = r,
        yt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Te && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && ql(n, t, s),
                i = i.next
            } while (i !== r)
        }
        sn(e, t, n);
        break;
    case 1:
        if (!Te && (_r(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                pe(n, t, a)
            }
        sn(e, t, n);
        break;
    case 21:
        sn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null,
        sn(e, t, n),
        Te = r) : sn(e, t, n);
        break;
    default:
        sn(e, t, n)
    }
}
function Vf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new U1),
        t.forEach(function(r) {
            var i = H1.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ce = a.stateNode,
                        yt = !1;
                        break e;
                    case 3:
                        Ce = a.stateNode.containerInfo,
                        yt = !0;
                        break e;
                    case 4:
                        Ce = a.stateNode.containerInfo,
                        yt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ce === null)
                    throw Error(R(160));
                Ih(o, s, i),
                Ce = null,
                yt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (f) {
                pe(i, t, f)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ph(t, e),
            t = t.sibling
}
function Ph(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (mt(t, e),
        Bt(e),
        r & 4) {
            try {
                Ii(3, e, e.return),
                Ys(3, e)
            } catch (_) {
                pe(e, e.return, _)
            }
            try {
                Ii(5, e, e.return)
            } catch (_) {
                pe(e, e.return, _)
            }
        }
        break;
    case 1:
        mt(t, e),
        Bt(e),
        r & 512 && n !== null && _r(n, n.return);
        break;
    case 5:
        if (mt(t, e),
        Bt(e),
        r & 512 && n !== null && _r(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Di(i, "")
            } catch (_) {
                pe(e, e.return, _)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && ep(i, o),
                    Al(a, s);
                    var f = Al(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s]
                          , g = l[s + 1];
                        d === "style" ? op(i, g) : d === "dangerouslySetInnerHTML" ? rp(i, g) : d === "children" ? Di(i, g) : wu(i, d, g, f)
                    }
                    switch (a) {
                    case "input":
                        hl(i, o);
                        break;
                    case "textarea":
                        tp(i, o);
                        break;
                    case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var A = o.value;
                        A != null ? Tr(i, !!o.multiple, A, !1) : p !== !!o.multiple && (o.defaultValue != null ? Tr(i, !!o.multiple, o.defaultValue, !0) : Tr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Zi] = o
                } catch (_) {
                    pe(e, e.return, _)
                }
        }
        break;
    case 6:
        if (mt(t, e),
        Bt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (_) {
                pe(e, e.return, _)
            }
        }
        break;
    case 3:
        if (mt(t, e),
        Bt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Qi(t.containerInfo)
            } catch (_) {
                pe(e, e.return, _)
            }
        break;
    case 4:
        mt(t, e),
        Bt(e);
        break;
    case 13:
        mt(t, e),
        Bt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || ($u = ge())),
        r & 4 && Vf(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Te = (f = Te) || d,
        mt(t, e),
        Te = f) : mt(t, e),
        Bt(e),
        r & 8192) {
            if (f = e.memoizedState !== null,
            (e.stateNode.isHidden = f) && !d && e.mode & 1)
                for (F = e,
                d = e.child; d !== null; ) {
                    for (g = F = d; F !== null; ) {
                        switch (p = F,
                        A = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ii(4, p, p.return);
                            break;
                        case 1:
                            _r(p, p.return);
                            var E = p.stateNode;
                            if (typeof E.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    E.props = t.memoizedProps,
                                    E.state = t.memoizedState,
                                    E.componentWillUnmount()
                                } catch (_) {
                                    pe(r, n, _)
                                }
                            }
                            break;
                        case 5:
                            _r(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                zf(g);
                                continue
                            }
                        }
                        A !== null ? (A.return = p,
                        F = A) : zf(g)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            g = e; ; ) {
                if (g.tag === 5) {
                    if (d === null) {
                        d = g;
                        try {
                            i = g.stateNode,
                            f ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = g.stateNode,
                            l = g.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = ip("display", s))
                        } catch (_) {
                            pe(e, e.return, _)
                        }
                    }
                } else if (g.tag === 6) {
                    if (d === null)
                        try {
                            g.stateNode.nodeValue = f ? "" : g.memoizedProps
                        } catch (_) {
                            pe(e, e.return, _)
                        }
                } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                    g.child.return = g,
                    g = g.child;
                    continue
                }
                if (g === e)
                    break e;
                for (; g.sibling === null; ) {
                    if (g.return === null || g.return === e)
                        break e;
                    d === g && (d = null),
                    g = g.return
                }
                d === g && (d = null),
                g.sibling.return = g.return,
                g = g.sibling
            }
        }
        break;
    case 19:
        mt(t, e),
        Bt(e),
        r & 4 && Vf(e);
        break;
    case 21:
        break;
    default:
        mt(t, e),
        Bt(e)
    }
}
function Bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Th(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Di(i, ""),
                r.flags &= -33);
                var o = Df(e);
                Zl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = Df(e);
                Gl(e, a, s);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function M1(e, t, n) {
    F = e,
    Nh(e)
}
function Nh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Fo;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Te;
                a = Fo;
                var f = Te;
                if (Fo = s,
                (Te = l) && !f)
                    for (F = i; F !== null; )
                        s = F,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Qf(i) : l !== null ? (l.return = s,
                        F = l) : Qf(i);
                for (; o !== null; )
                    F = o,
                    Nh(o),
                    o = o.sibling;
                F = i,
                Fo = a,
                Te = f
            }
            Wf(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            F = o) : Wf(e)
    }
}
function Wf(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Te || Ys(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Te)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && _f(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            _f(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var f = t.alternate;
                            if (f !== null) {
                                var d = f.memoizedState;
                                if (d !== null) {
                                    var g = d.dehydrated;
                                    g !== null && Qi(g)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Te || t.flags & 512 && Hl(t)
            } catch (p) {
                pe(t, t.return, p)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function zf(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Qf(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ys(4, t)
                } catch (l) {
                    pe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        pe(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    Hl(t)
                } catch (l) {
                    pe(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Hl(t)
                } catch (l) {
                    pe(t, s, l)
                }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var D1 = Math.ceil
  , bs = nn.ReactCurrentDispatcher
  , Yu = nn.ReactCurrentOwner
  , pt = nn.ReactCurrentBatchConfig
  , q = 0
  , xe = null
  , ve = null
  , be = 0
  , Je = 0
  , br = Rn(0)
  , Ae = 0
  , to = null
  , Hn = 0
  , Xs = 0
  , Xu = 0
  , Pi = null
  , We = null
  , $u = 0
  , zr = 1 / 0
  , Wt = null
  , ks = !1
  , Jl = null
  , En = null
  , Lo = !1
  , pn = null
  , Os = 0
  , Ni = 0
  , Yl = null
  , Yo = -1
  , Xo = 0;
function je() {
    return q & 6 ? ge() : Yo !== -1 ? Yo : Yo = ge()
}
function xn(e) {
    return e.mode & 1 ? q & 2 && be !== 0 ? be & -be : x1.transition !== null ? (Xo === 0 && (Xo = vp()),
    Xo) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Cp(e.type)),
    e) : 1
}
function St(e, t, n, r) {
    if (50 < Ni)
        throw Ni = 0,
        Yl = null,
        Error(R(185));
    ao(e, n, r),
    (!(q & 2) || e !== xe) && (e === xe && (!(q & 2) && (Xs |= n),
    Ae === 4 && fn(e, be)),
    qe(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (zr = ge() + 500,
    Gs && Bn()))
}
function qe(e, t) {
    var n = e.callbackNode;
    xy(e, t);
    var r = fs(e, e === xe ? be : 0);
    if (r === 0)
        n !== null && Xc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Xc(n),
        t === 1)
            e.tag === 0 ? E1(Kf.bind(null, e)) : zp(Kf.bind(null, e)),
            y1(function() {
                !(q & 6) && Bn()
            }),
            n = null;
        else {
            switch (yp(r)) {
            case 1:
                n = _u;
                break;
            case 4:
                n = gp;
                break;
            case 16:
                n = cs;
                break;
            case 536870912:
                n = mp;
                break;
            default:
                n = cs
            }
            n = Wh(n, Fh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Fh(e, t) {
    if (Yo = -1,
    Xo = 0,
    q & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n)
        return null;
    var r = fs(e, e === xe ? be : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Rs(e, r);
    else {
        t = r;
        var i = q;
        q |= 2;
        var o = Uh();
        (xe !== e || be !== t) && (Wt = null,
        zr = ge() + 500,
        Mn(e, t));
        do
            try {
                z1();
                break
            } catch (a) {
                Lh(e, a)
            }
        while (!0);
        ju(),
        bs.current = o,
        q = i,
        ve !== null ? t = 0 : (xe = null,
        be = 0,
        t = Ae)
    }
    if (t !== 0) {
        if (t === 2 && (i = Cl(e),
        i !== 0 && (r = i,
        t = Xl(e, i))),
        t === 1)
            throw n = to,
            Mn(e, 0),
            fn(e, r),
            qe(e, ge()),
            n;
        if (t === 6)
            fn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !V1(i) && (t = Rs(e, r),
            t === 2 && (o = Cl(e),
            o !== 0 && (r = o,
            t = Xl(e, o))),
            t === 1))
                throw n = to,
                Mn(e, 0),
                fn(e, r),
                qe(e, ge()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Fn(e, We, Wt);
                break;
            case 3:
                if (fn(e, r),
                (r & 130023424) === r && (t = $u + 500 - ge(),
                10 < t)) {
                    if (fs(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        je(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Il(Fn.bind(null, e, We, Wt), t);
                    break
                }
                Fn(e, We, Wt);
                break;
            case 4:
                if (fn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - wt(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = ge() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * D1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Il(Fn.bind(null, e, We, Wt), r);
                    break
                }
                Fn(e, We, Wt);
                break;
            case 5:
                Fn(e, We, Wt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return qe(e, ge()),
    e.callbackNode === n ? Fh.bind(null, e) : null
}
function Xl(e, t) {
    var n = Pi;
    return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    e = Rs(e, t),
    e !== 2 && (t = We,
    We = n,
    t !== null && $l(t)),
    e
}
function $l(e) {
    We === null ? We = e : We.push.apply(We, e)
}
function V1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ct(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function fn(e, t) {
    for (t &= ~Xu,
    t &= ~Xs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - wt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Kf(e) {
    if (q & 6)
        throw Error(R(327));
    Lr();
    var t = fs(e, 0);
    if (!(t & 1))
        return qe(e, ge()),
        null;
    var n = Rs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Cl(e);
        r !== 0 && (t = r,
        n = Xl(e, r))
    }
    if (n === 1)
        throw n = to,
        Mn(e, 0),
        fn(e, t),
        qe(e, ge()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Fn(e, We, Wt),
    qe(e, ge()),
    null
}
function ec(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (zr = ge() + 500,
        Gs && Bn())
    }
}
function Gn(e) {
    pn !== null && pn.tag === 0 && !(q & 6) && Lr();
    var t = q;
    q |= 1;
    var n = pt.transition
      , r = J;
    try {
        if (pt.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        pt.transition = n,
        q = t,
        !(q & 6) && Bn()
    }
}
function tc() {
    Je = br.current,
    oe(br)
}
function Mn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    v1(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (Fu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ms();
                break;
            case 3:
                Vr(),
                oe(Qe),
                oe(Ie),
                Qu();
                break;
            case 5:
                zu(r);
                break;
            case 4:
                Vr();
                break;
            case 13:
                oe(le);
                break;
            case 19:
                oe(le);
                break;
            case 10:
                Mu(r.type._context);
                break;
            case 22:
            case 23:
                tc()
            }
            n = n.return
        }
    if (xe = e,
    ve = e = Cn(e.current, null),
    be = Je = t,
    Ae = 0,
    to = null,
    Xu = Xs = Hn = 0,
    We = Pi = null,
    Un !== null) {
        for (t = 0; t < Un.length; t++)
            if (n = Un[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        Un = null
    }
    return e
}
function Lh(e, t) {
    do {
        var n = ve;
        try {
            if (ju(),
            Go.current = _s,
            Cs) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Cs = !1
            }
            if (qn = 0,
            Ee = ye = ue = null,
            Ti = !1,
            Xi = 0,
            Yu.current = null,
            n === null || n.return === null) {
                Ae = 1,
                to = t,
                ve = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = be,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var f = l
                      , d = a
                      , g = d.tag;
                    if (!(d.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue,
                        d.memoizedState = p.memoizedState,
                        d.lanes = p.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var A = If(s);
                    if (A !== null) {
                        A.flags &= -257,
                        Pf(A, s, a, o, t),
                        A.mode & 1 && Tf(o, f, t),
                        t = A,
                        l = f;
                        var E = t.updateQueue;
                        if (E === null) {
                            var _ = new Set;
                            _.add(l),
                            t.updateQueue = _
                        } else
                            E.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Tf(o, f, t),
                            nc();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (ae && a.mode & 1) {
                    var I = If(s);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256),
                        Pf(I, s, a, o, t),
                        Lu(Wr(l, a));
                        break e
                    }
                }
                o = l = Wr(l, a),
                Ae !== 4 && (Ae = 2),
                Pi === null ? Pi = [o] : Pi.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var y = Ah(o, l, t);
                        Cf(o, y);
                        break e;
                    case 1:
                        a = l;
                        var v = o.type
                          , S = o.stateNode;
                        if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (En === null || !En.has(S)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var x = wh(o, a, t);
                            Cf(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Mh(n)
        } catch (k) {
            t = k,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Uh() {
    var e = bs.current;
    return bs.current = _s,
    e === null ? _s : e
}
function nc() {
    (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    xe === null || !(Hn & 268435455) && !(Xs & 268435455) || fn(xe, be)
}
function Rs(e, t) {
    var n = q;
    q |= 2;
    var r = Uh();
    (xe !== e || be !== t) && (Wt = null,
    Mn(e, t));
    do
        try {
            W1();
            break
        } catch (i) {
            Lh(e, i)
        }
    while (!0);
    if (ju(),
    q = n,
    bs.current = r,
    ve !== null)
        throw Error(R(261));
    return xe = null,
    be = 0,
    Ae
}
function W1() {
    for (; ve !== null; )
        jh(ve)
}
function z1() {
    for (; ve !== null && !hy(); )
        jh(ve)
}
function jh(e) {
    var t = Vh(e.alternate, e, Je);
    e.memoizedProps = e.pendingProps,
    t === null ? Mh(e) : ve = t,
    Yu.current = null
}
function Mh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = L1(n, t),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ae = 6,
                ve = null;
                return
            }
        } else if (n = F1(n, t, Je),
        n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    Ae === 0 && (Ae = 5)
}
function Fn(e, t, n) {
    var r = J
      , i = pt.transition;
    try {
        pt.transition = null,
        J = 1,
        Q1(e, t, n, r)
    } finally {
        pt.transition = i,
        J = r
    }
    return null
}
function Q1(e, t, n, r) {
    do
        Lr();
    while (pn !== null);
    if (q & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Cy(e, o),
    e === xe && (ve = xe = null,
    be = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lo || (Lo = !0,
    Wh(cs, function() {
        return Lr(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = pt.transition,
        pt.transition = null;
        var s = J;
        J = 1;
        var a = q;
        q |= 4,
        Yu.current = null,
        j1(e, n),
        Ph(n, e),
        c1(Bl),
        ds = !!Rl,
        Bl = Rl = null,
        e.current = n,
        M1(n),
        gy(),
        q = a,
        J = s,
        pt.transition = o
    } else
        e.current = n;
    if (Lo && (Lo = !1,
    pn = e,
    Os = i),
    o = e.pendingLanes,
    o === 0 && (En = null),
    yy(n.stateNode),
    qe(e, ge()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (ks)
        throw ks = !1,
        e = Jl,
        Jl = null,
        e;
    return Os & 1 && e.tag !== 0 && Lr(),
    o = e.pendingLanes,
    o & 1 ? e === Yl ? Ni++ : (Ni = 0,
    Yl = e) : Ni = 0,
    Bn(),
    null
}
function Lr() {
    if (pn !== null) {
        var e = yp(Os)
          , t = pt.transition
          , n = J;
        try {
            if (pt.transition = null,
            J = 16 > e ? 16 : e,
            pn === null)
                var r = !1;
            else {
                if (e = pn,
                pn = null,
                Os = 0,
                q & 6)
                    throw Error(R(331));
                var i = q;
                for (q |= 4,
                F = e.current; F !== null; ) {
                    var o = F
                      , s = o.child;
                    if (F.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var f = a[l];
                                for (F = f; F !== null; ) {
                                    var d = F;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ii(8, d, o)
                                    }
                                    var g = d.child;
                                    if (g !== null)
                                        g.return = d,
                                        F = g;
                                    else
                                        for (; F !== null; ) {
                                            d = F;
                                            var p = d.sibling
                                              , A = d.return;
                                            if (Bh(d),
                                            d === f) {
                                                F = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = A,
                                                F = p;
                                                break
                                            }
                                            F = A
                                        }
                                }
                            }
                            var E = o.alternate;
                            if (E !== null) {
                                var _ = E.child;
                                if (_ !== null) {
                                    E.child = null;
                                    do {
                                        var I = _.sibling;
                                        _.sibling = null,
                                        _ = I
                                    } while (_ !== null)
                                }
                            }
                            F = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        F = s;
                    else
                        e: for (; F !== null; ) {
                            if (o = F,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ii(9, o, o.return)
                                }
                            var y = o.sibling;
                            if (y !== null) {
                                y.return = o.return,
                                F = y;
                                break e
                            }
                            F = o.return
                        }
                }
                var v = e.current;
                for (F = v; F !== null; ) {
                    s = F;
                    var S = s.child;
                    if (s.subtreeFlags & 2064 && S !== null)
                        S.return = s,
                        F = S;
                    else
                        e: for (s = v; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ys(9, a)
                                    }
                                } catch (k) {
                                    pe(a, a.return, k)
                                }
                            if (a === s) {
                                F = null;
                                break e
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                x.return = a.return,
                                F = x;
                                break e
                            }
                            F = a.return
                        }
                }
                if (q = i,
                Bn(),
                Lt && typeof Lt.onPostCommitFiberRoot == "function")
                    try {
                        Lt.onPostCommitFiberRoot(zs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            pt.transition = t
        }
    }
    return !1
}
function qf(e, t, n) {
    t = Wr(n, t),
    t = Ah(e, t, 1),
    e = Sn(e, t, 1),
    t = je(),
    e !== null && (ao(e, 1, t),
    qe(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        qf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                qf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
                    e = Wr(n, e),
                    e = wh(t, e, 1),
                    t = Sn(t, e, 1),
                    e = je(),
                    t !== null && (ao(t, 1, e),
                    qe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function K1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = je(),
    e.pingedLanes |= e.suspendedLanes & n,
    xe === e && (be & n) === n && (Ae === 4 || Ae === 3 && (be & 130023424) === be && 500 > ge() - $u ? Mn(e, 0) : Xu |= n),
    qe(e, t)
}
function Dh(e, t) {
    t === 0 && (e.mode & 1 ? (t = bo,
    bo <<= 1,
    !(bo & 130023424) && (bo = 4194304)) : t = 1);
    var n = je();
    e = Xt(e, t),
    e !== null && (ao(e, t, n),
    qe(e, n))
}
function q1(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Dh(e, n)
}
function H1(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    r !== null && r.delete(t),
    Dh(e, n)
}
var Vh;
Vh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ze = !1,
                N1(e, t, n);
            ze = !!(e.flags & 131072)
        }
    else
        ze = !1,
        ae && t.flags & 1048576 && Qp(t, As, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Jo(e, t),
        e = t.pendingProps;
        var i = jr(t, Ie.current);
        Fr(t, n),
        i = qu(null, t, r, e, i, n);
        var o = Hu();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ke(r) ? (o = !0,
        vs(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Vu(t),
        i.updater = Zs,
        t.stateNode = i,
        i._reactInternals = t,
        Ml(t, r, e, n),
        t = Wl(null, t, r, !0, o, n)) : (t.tag = 0,
        ae && o && Nu(t),
        Ue(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Jo(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Z1(r),
            e = vt(r, e),
            i) {
            case 0:
                t = Vl(null, t, r, e, n);
                break e;
            case 1:
                t = Lf(null, t, r, e, n);
                break e;
            case 11:
                t = Nf(null, t, r, e, n);
                break e;
            case 14:
                t = Ff(null, t, r, vt(r.type, e), n);
                break e
            }
            throw Error(R(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : vt(r, i),
        Vl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : vt(r, i),
        Lf(e, t, r, i, n);
    case 3:
        e: {
            if (Ch(t),
            e === null)
                throw Error(R(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Gp(e, t),
            Es(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Wr(Error(R(423)), t),
                    t = Uf(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Wr(Error(R(424)), t),
                    t = Uf(e, t, r, n, i);
                    break e
                } else
                    for (Ye = wn(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    ae = !0,
                    At = null,
                    n = Xp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Mr(),
                r === i) {
                    t = $t(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return $p(t),
        e === null && Ll(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        Tl(r, i) ? s = null : o !== null && Tl(r, o) && (t.flags |= 32),
        xh(e, t),
        Ue(e, t, s, n),
        t.child;
    case 6:
        return e === null && Ll(t),
        null;
    case 13:
        return _h(e, t, n);
    case 4:
        return Wu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Dr(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : vt(r, i),
        Nf(e, t, r, i, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            ne(ws, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Ct(o.value, s)) {
                    if (o.children === i.children && !Qe.current) {
                        t = $t(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = Ht(-1, n & -n),
                                        l.tag = 2;
                                        var f = o.updateQueue;
                                        if (f !== null) {
                                            f = f.shared;
                                            var d = f.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            f.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    Ul(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(R(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Ul(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Ue(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Fr(t, n),
        i = ht(i),
        r = r(i),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = vt(r, t.pendingProps),
        i = vt(r.type, i),
        Ff(e, t, r, i, n);
    case 15:
        return Sh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : vt(r, i),
        Jo(e, t),
        t.tag = 1,
        Ke(r) ? (e = !0,
        vs(t)) : e = !1,
        Fr(t, n),
        Jp(t, r, i),
        Ml(t, r, i, n),
        Wl(null, t, r, !0, e, n);
    case 19:
        return bh(e, t, n);
    case 22:
        return Eh(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function Wh(e, t) {
    return hp(e, t)
}
function G1(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ct(e, t, n, r) {
    return new G1(e,t,n,r)
}
function rc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Z1(e) {
    if (typeof e == "function")
        return rc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Eu)
            return 11;
        if (e === xu)
            return 14
    }
    return 2
}
function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function $o(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        rc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case mr:
            return Dn(n.children, i, o, t);
        case Su:
            s = 8,
            i |= 8;
            break;
        case ul:
            return e = ct(12, n, t, i | 2),
            e.elementType = ul,
            e.lanes = o,
            e;
        case cl:
            return e = ct(13, n, t, i),
            e.elementType = cl,
            e.lanes = o,
            e;
        case fl:
            return e = ct(19, n, t, i),
            e.elementType = fl,
            e.lanes = o,
            e;
        case Yd:
            return $s(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Zd:
                    s = 10;
                    break e;
                case Jd:
                    s = 9;
                    break e;
                case Eu:
                    s = 11;
                    break e;
                case xu:
                    s = 14;
                    break e;
                case ln:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = ct(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Dn(e, t, n, r) {
    return e = ct(7, e, r, t),
    e.lanes = n,
    e
}
function $s(e, t, n, r) {
    return e = ct(22, e, r, t),
    e.elementType = Yd,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ha(e, t, n) {
    return e = ct(6, e, null, t),
    e.lanes = n,
    e
}
function Ga(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function J1(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Oa(0),
    this.expirationTimes = Oa(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Oa(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function ic(e, t, n, r, i, o, s, a, l) {
    return e = new J1(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = ct(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Vu(o),
    e
}
function Y1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function zh(e) {
    if (!e)
        return bn;
    e = e._reactInternals;
    e: {
        if (tr(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n))
            return Wp(e, n, t)
    }
    return t
}
function Qh(e, t, n, r, i, o, s, a, l) {
    return e = ic(n, r, !0, e, i, o, s, a, l),
    e.context = zh(null),
    n = e.current,
    r = je(),
    i = xn(n),
    o = Ht(r, i),
    o.callback = t ?? null,
    Sn(n, o, i),
    e.current.lanes = i,
    ao(e, i, r),
    qe(e, r),
    e
}
function ea(e, t, n, r) {
    var i = t.current
      , o = je()
      , s = xn(i);
    return n = zh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ht(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Sn(i, t, s),
    e !== null && (St(e, i, s, o),
    Ho(e, i, s)),
    s
}
function Bs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Hf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function oc(e, t) {
    Hf(e, t),
    (e = e.alternate) && Hf(e, t)
}
function X1() {
    return null
}
var Kh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function sc(e) {
    this._internalRoot = e
}
ta.prototype.render = sc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    ea(e, t, null, null)
}
;
ta.prototype.unmount = sc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gn(function() {
            ea(null, e, null, null)
        }),
        t[Yt] = null
    }
}
;
function ta(e) {
    this._internalRoot = e
}
ta.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Sp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++)
            ;
        cn.splice(n, 0, e),
        n === 0 && xp(e)
    }
}
;
function ac(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function na(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Gf() {}
function $1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var f = Bs(s);
                o.call(f)
            }
        }
        var s = Qh(t, r, e, 0, null, !1, !1, "", Gf);
        return e._reactRootContainer = s,
        e[Yt] = s.current,
        Hi(e.nodeType === 8 ? e.parentNode : e),
        Gn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var f = Bs(l);
            a.call(f)
        }
    }
    var l = ic(e, 0, !1, null, null, !1, !1, "", Gf);
    return e._reactRootContainer = l,
    e[Yt] = l.current,
    Hi(e.nodeType === 8 ? e.parentNode : e),
    Gn(function() {
        ea(t, l, n, r)
    }),
    l
}
function ra(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Bs(s);
                a.call(l)
            }
        }
        ea(t, s, e, i)
    } else
        s = $1(n, t, e, i, r);
    return Bs(s)
}
Ap = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Si(t.pendingLanes);
            n !== 0 && (bu(t, n | 1),
            qe(t, ge()),
            !(q & 6) && (zr = ge() + 500,
            Bn()))
        }
        break;
    case 13:
        Gn(function() {
            var r = Xt(e, 1);
            if (r !== null) {
                var i = je();
                St(r, e, 1, i)
            }
        }),
        oc(e, 1)
    }
}
;
ku = function(e) {
    if (e.tag === 13) {
        var t = Xt(e, 134217728);
        if (t !== null) {
            var n = je();
            St(t, e, 134217728, n)
        }
        oc(e, 134217728)
    }
}
;
wp = function(e) {
    if (e.tag === 13) {
        var t = xn(e)
          , n = Xt(e, t);
        if (n !== null) {
            var r = je();
            St(n, e, t, r)
        }
        oc(e, t)
    }
}
;
Sp = function() {
    return J
}
;
Ep = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Sl = function(e, t, n) {
    switch (t) {
    case "input":
        if (hl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Hs(r);
                    if (!i)
                        throw Error(R(90));
                    $d(r),
                    hl(r, i)
                }
            }
        }
        break;
    case "textarea":
        tp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Tr(e, !!n.multiple, t, !1)
    }
}
;
lp = ec;
up = Gn;
var eA = {
    usingClientEntryPoint: !1,
    Events: [uo, wr, Hs, sp, ap, ec]
}
  , mi = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , tA = {
    bundleType: mi.bundleType,
    version: mi.version,
    rendererPackageName: mi.rendererPackageName,
    rendererConfig: mi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = dp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: mi.findFiberByHostInstance || X1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
        try {
            zs = Uo.inject(tA),
            Lt = Uo
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eA;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ac(t))
        throw Error(R(200));
    return Y1(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!ac(e))
        throw Error(R(299));
    var n = !1
      , r = ""
      , i = Kh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = ic(e, 1, !1, null, null, n, !1, r, i),
    e[Yt] = t.current,
    Hi(e.nodeType === 8 ? e.parentNode : e),
    new sc(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = dp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return Gn(e)
}
;
et.hydrate = function(e, t, n) {
    if (!na(t))
        throw Error(R(200));
    return ra(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!ac(e))
        throw Error(R(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Kh;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Qh(t, null, e, 1, n ?? null, i, !1, o, s),
    e[Yt] = t.current,
    Hi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new ta(t)
}
;
et.render = function(e, t, n) {
    if (!na(t))
        throw Error(R(200));
    return ra(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!na(e))
        throw Error(R(40));
    return e._reactRootContainer ? (Gn(function() {
        ra(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Yt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = ec;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!na(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return ra(e, t, n, !1, r)
}
;
et.version = "18.2.0-next-9e3b772b8-20220608";
function qh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qh)
        } catch (e) {
            console.error(e)
        }
}
qh(),
Qd.exports = et;
var ia = Qd.exports;
const nA = Od(ia)
  , ME = kd({
    __proto__: null,
    default: nA
}, [ia]);
var Zf = ia;
al.createRoot = Zf.createRoot,
al.hydrateRoot = Zf.hydrateRoot;
var rA = Object.defineProperty
  , iA = (e,t,n)=>t in e ? rA(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , U = (e,t,n)=>(iA(e, typeof t != "symbol" ? t + "" : t, n),
n);
class oA {
    constructor(t, n) {
        this.prefix = t,
        this.enabled = n
    }
    print(t, ...n) {
        if (!this.enabled)
            return;
        const r = new Date
          , i = Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            fractionalSecondDigits: 3,
            timeZone: "UTC"
        }).format(r);
        console[t](`[${i}]`, this.prefix, ...n)
    }
    disable() {
        this.enabled = !1
    }
    error(...t) {
        this.print("error", ...t)
    }
    enable() {
        this.enabled = !0
    }
    log(...t) {
        this.print("log", ...t)
    }
    warn(...t) {
        this.print("warn", ...t)
    }
}
let sA = "https://web.telegram.org";
const Fi = new oA("[SDK]",!1);
function aA() {
    return sA
}
function Hh() {
    try {
        return window.self !== window.top
    } catch {
        return !0
    }
}
function lc(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e)
}
function lA(e) {
    return "external"in e && lc(e.external) && "notify"in e.external && typeof e.external.notify == "function"
}
function uA(e) {
    return "TelegramWebviewProxy"in e && lc(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && typeof e.TelegramWebviewProxy.postEvent == "function"
}
function He(e, t, n) {
    let r = {}, i;
    t === void 0 && n === void 0 ? r = {} : t !== void 0 && n !== void 0 ? (r = n,
    i = t) : t !== void 0 && ("targetOrigin"in t ? r = t : i = t);
    const {targetOrigin: o=aA()} = r;
    if (Fi.log(`Calling method "${e}"`, i),
    Hh()) {
        window.parent.postMessage(JSON.stringify({
            eventType: e,
            eventData: i
        }), o);
        return
    }
    if (lA(window)) {
        window.external.notify(JSON.stringify({
            eventType: e,
            eventData: i
        }));
        return
    }
    if (uA(window)) {
        window.TelegramWebviewProxy.postEvent(e, JSON.stringify(i));
        return
    }
    throw new Error("Unable to determine current environment and possible way to send event.")
}
function cA(e, t) {
    const n = e.split(".")
      , r = t.split(".")
      , i = Math.max(n.length, r.length);
    for (let o = 0; o < i; o += 1) {
        const s = parseInt(n[o] || "0", 10)
          , a = parseInt(r[o] || "0", 10);
        if (s !== a)
            return s > a ? 1 : -1
    }
    return 0
}
function an(e, t) {
    return cA(e, t) <= 0
}
function Qr(e, t, n) {
    if (typeof n == "string") {
        if (e === "web_app_open_link" && t === "try_instant_view")
            return an("6.4", n);
        if (e === "web_app_set_header_color" && t === "color")
            return an("6.9", n)
    }
    switch (e) {
    case "web_app_open_tg_link":
    case "web_app_open_invoice":
    case "web_app_setup_back_button":
    case "web_app_set_background_color":
    case "web_app_set_header_color":
    case "web_app_trigger_haptic_feedback":
        return an("6.1", t);
    case "web_app_open_popup":
        return an("6.2", t);
    case "web_app_close_scan_qr_popup":
    case "web_app_open_scan_qr_popup":
    case "web_app_read_text_from_clipboard":
        return an("6.4", t);
    case "web_app_switch_inline_query":
        return an("6.7", t);
    case "web_app_invoke_custom_method":
    case "web_app_request_write_access":
    case "web_app_request_phone":
        return an("6.9", t);
    case "web_app_setup_settings_button":
        return an("6.10", t);
    default:
        return !0
    }
}
let fA = class Gh extends Error {
    constructor(t, n) {
        super(`Method "${t}" is unsupported in the Mini Apps version ${n}.`),
        Object.setPrototypeOf(this, Gh.prototype)
    }
}
  , dA = class Zh extends Error {
    constructor(t, n, r) {
        super(`Parameter "${n}" in method "${t}" is unsupported in the Mini Apps version ${r}.`),
        Object.setPrototypeOf(this, Zh.prototype)
    }
}
;
function pA(e) {
    return (t,n)=>{
        if (!Qr(t, e))
            throw new fA(t,e);
        if (lc(n)) {
            let r;
            if (t === "web_app_open_link" && "try_instant_view"in n ? r = "try_instant_view" : t === "web_app_set_header_color" && "color"in n && (r = "color"),
            r && !Qr(t, r, e))
                throw new dA(t,r,e)
        }
        return He(t, n)
    }
}
function Jh(e) {
    return ({req_id: t})=>t === e
}
let Yh = class Xh extends Error {
    constructor(t, {cause: n, type: r}={}) {
        super(`Unable to parse value${r ? ` as ${r}` : ""}`, {
            cause: n
        }),
        U(this, "type"),
        this.value = t,
        Object.setPrototypeOf(this, Xh.prototype),
        this.type = r
    }
}
  , Jf = class $h extends Error {
    constructor(t, {cause: n, type: r}={}) {
        super(`Unable to parse field "${t}"${r ? ` as ${r}` : ""}`, {
            cause: n
        }),
        Object.setPrototypeOf(this, $h.prototype)
    }
}
;
function eg(e, t) {
    const n = {};
    for (const r in e) {
        const i = e[r];
        if (!i)
            continue;
        let o, s;
        if (typeof i == "function" || "parse"in i)
            o = r,
            s = typeof i == "function" ? i : i.parse.bind(i);
        else {
            const {type: f} = i;
            o = i.from || r,
            s = typeof f == "function" ? f : f.parse.bind(f)
        }
        let a;
        const l = t(o);
        try {
            a = s(l)
        } catch (f) {
            throw f instanceof Yh ? new Jf(o,{
                type: f.type,
                cause: f
            }) : new Jf(o,{
                cause: f
            })
        }
        a !== void 0 && (n[r] = a)
    }
    return n
}
function $r() {
    return new TypeError("Value has unexpected type")
}
function uc(e) {
    let t = e;
    if (typeof t == "string" && (t = JSON.parse(t)),
    typeof t != "object" || t === null || Array.isArray(t))
        throw $r();
    return t
}
let oa = class {
    constructor(t, n, r) {
        this.parser = t,
        this.isOptional = n,
        this.type = r
    }
    parse(t) {
        if (!(this.isOptional && t === void 0))
            try {
                return this.parser(t)
            } catch (n) {
                throw new Yh(t,{
                    type: this.type,
                    cause: n
                })
            }
    }
    optional() {
        return this.isOptional = !0,
        this
    }
}
;
function Ge(e, t) {
    return new oa(n=>{
        const r = uc(n);
        return eg(e, i=>r[i])
    }
    ,!1,t)
}
function ei(e, t) {
    return ()=>new oa(e,!1,t)
}
const z = ei(e=>{
    if (typeof e == "string" || typeof e == "number")
        return e.toString();
    throw $r()
}
, "string");
function hA(e) {
    return Ge({
        eventType: z(),
        eventData: t=>t
    }).parse(e)
}
function gA(e, t) {
    window.dispatchEvent(new MessageEvent("message",{
        data: JSON.stringify({
            eventType: e,
            eventData: t
        }),
        source: window.parent
    }))
}
function mA() {
    const e = window;
    "TelegramGameProxy_receiveEvent"in e || [["TelegramGameProxy_receiveEvent"], ["TelegramGameProxy", "receiveEvent"], ["Telegram", "WebView", "receiveEvent"]].forEach(t=>{
        let n = e;
        t.forEach((r,i,o)=>{
            if (i === o.length - 1) {
                n[r] = gA;
                return
            }
            r in n || (n[r] = {}),
            n = n[r]
        }
        )
    }
    )
}
function vA(e) {
    mA(),
    window.addEventListener("message", t=>{
        if (t.source === window.parent)
            try {
                const {eventType: n, eventData: r} = hA(t.data);
                e(n, r)
            } catch {}
    }
    )
}
function yA() {
    return Ge({
        req_id: z(),
        data: e=>e === null ? e : z().optional().parse(e)
    })
}
function AA() {
    return Ge({
        req_id: z(),
        result: e=>e,
        error: z().optional()
    })
}
function wA() {
    return Ge({
        slug: z(),
        status: z()
    })
}
function SA() {
    return Ge({
        status: z()
    })
}
function EA() {
    return Ge({
        button_id: e=>e == null ? void 0 : z().parse(e)
    })
}
function xA() {
    return Ge({
        data: z().optional()
    })
}
function cc(e) {
    return /^#[\da-f]{6}$/i.test(e)
}
function CA(e) {
    return /^#[\da-f]{3}$/i.test(e)
}
function tg(e) {
    const t = e.replace(/\s/g, "").toLowerCase();
    if (cc(t))
        return t;
    if (CA(t)) {
        let r = "#";
        for (let i = 0; i < 3; i += 1)
            r += t[1 + i].repeat(2);
        return r
    }
    const n = t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/) || t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);
    if (n === null)
        throw new Error(`Value "${e}" does not satisfy any of known RGB formats.`);
    return n.slice(1).reduce((r,i)=>{
        const o = parseInt(i, 10).toString(16);
        return r + (o.length === 1 ? "0" : "") + o
    }
    , "#")
}
const ng = ei(e=>tg(z().parse(e)), "rgb");
function _A() {
    return Ge({
        theme_params: e=>{
            const t = ng().optional();
            return Object.entries(uc(e)).reduce((n,[r,i])=>(n[r] = t.parse(i),
            n), {})
        }
    })
}
const hn = ei(e=>{
    if (typeof e == "boolean")
        return e;
    const t = String(e);
    if (t === "1" || t === "true")
        return !0;
    if (t === "0" || t === "false")
        return !1;
    throw $r()
}
, "boolean")
  , Zn = ei(e=>{
    if (typeof e == "number")
        return e;
    if (typeof e == "string") {
        const t = Number(e);
        if (!Number.isNaN(t))
            return t
    }
    throw $r()
}
, "number");
function bA() {
    return Ge({
        height: Zn(),
        width: e=>e == null ? window.innerWidth : Zn().parse(e),
        is_state_stable: hn(),
        is_expanded: hn()
    })
}
function kA() {
    return Ge({
        status: z()
    })
}
let bt = class {
    constructor() {
        U(this, "listeners", new Map),
        U(this, "subscribeListeners", [])
    }
    addListener(t, n, r) {
        let i = this.listeners.get(t);
        return i || (i = [],
        this.listeners.set(t, i)),
        i.push([n, r]),
        ()=>this.off(t, n)
    }
    emit(t, ...n) {
        this.subscribeListeners.forEach(i=>i(t, ...n));
        const r = this.listeners.get(t);
        r && r.forEach(([i,o],s)=>{
            i(...n),
            o && r.splice(s, 1)
        }
        )
    }
    on(t, n) {
        return this.addListener(t, n, !1)
    }
    once(t, n) {
        return this.addListener(t, n, !0)
    }
    off(t, n) {
        const r = this.listeners.get(t);
        if (r) {
            for (let i = 0; i < r.length; i += 1)
                if (n === r[i][0]) {
                    r.splice(i, 1);
                    return
                }
        }
    }
    subscribe(t) {
        return this.subscribeListeners.push(t),
        ()=>this.unsubscribe(t)
    }
    unsubscribe(t) {
        for (let n = 0; n < this.subscribeListeners.length; n += 1)
            if (this.subscribeListeners[n] === t) {
                this.subscribeListeners.splice(n, 1);
                return
            }
    }
}
;
function OA() {
    const e = new bt
      , t = (n,...r)=>{
        Fi.log("Emitting processed event:", n, ...r),
        e.emit(n, ...r)
    }
    ;
    return window.addEventListener("resize", ()=>{
        t("viewport_changed", {
            width: window.innerWidth,
            height: window.innerHeight,
            is_state_stable: !0,
            is_expanded: !0
        })
    }
    ),
    vA((n,r)=>{
        Fi.log("Received raw event:", n, r);
        try {
            switch (n) {
            case "viewport_changed":
                return t(n, bA().parse(r));
            case "theme_changed":
                return t(n, _A().parse(r));
            case "popup_closed":
                return r == null ? t(n, {}) : t(n, EA().parse(r));
            case "set_custom_style":
                return t(n, z().parse(r));
            case "qr_text_received":
                return t(n, xA().parse(r));
            case "clipboard_text_received":
                return t(n, yA().parse(r));
            case "invoice_closed":
                return t(n, wA().parse(r));
            case "phone_requested":
                return t("phone_requested", SA().parse(r));
            case "custom_method_invoked":
                return t("custom_method_invoked", AA().parse(r));
            case "write_access_requested":
                return t("write_access_requested", kA().parse(r));
            case "main_button_pressed":
            case "back_button_pressed":
            case "settings_button_pressed":
            case "scan_qr_popup_closed":
            case "reload_iframe":
                return t(n);
            default:
                return t(n, r)
            }
        } catch (i) {
            Fi.error("Error processing event:", i)
        }
    }
    ),
    e
}
const Za = "telegram-mini-apps-cached-emitter";
function rg() {
    const e = window;
    return e[Za] === void 0 && (e[Za] = OA()),
    e[Za]
}
function sa(e, t) {
    rg().off(e, t)
}
function Tn(e, t) {
    return rg().on(e, t),
    ()=>sa(e, t)
}
let RA = class ig extends Error {
    constructor(t) {
        super(`Async call timeout exceeded. Timeout: ${t}`),
        Object.setPrototypeOf(this, ig.prototype)
    }
}
;
function BA(e) {
    return new Promise((t,n)=>{
        setTimeout(n, e, new RA(e))
    }
    )
}
function og(e, t) {
    return Promise.race([typeof e == "function" ? e() : e, BA(t)])
}
async function kn(e, t, n) {
    let r;
    const i = new Promise(p=>{
        r = p
    }
    )
      , o = t ? {
        ...n,
        event: t,
        method: e
    } : e
      , {method: s, event: a, capture: l, postEvent: f=He, timeout: d} = o
      , g = (Array.isArray(a) ? a : [a]).map(p=>Tn(p, A=>(!l || l(A)) && r(A)));
    try {
        return f(s, o.params),
        await (d ? og(i, d) : i)
    } finally {
        g.forEach(p=>p())
    }
}
async function xi(e, t, n, r={}) {
    const {result: i, error: o} = await kn("web_app_invoke_custom_method", "custom_method_invoked", {
        ...r,
        params: {
            method: e,
            params: t,
            req_id: n
        },
        capture: Jh(n)
    });
    if (o)
        throw new Error(o);
    return i
}
function sg(e) {
    const t = tg(e);
    return Math.sqrt([.299, .587, .114].reduce((n,r,i)=>{
        const o = parseInt(t.slice(1 + i * 2, 1 + (i + 1) * 2), 16);
        return n + o * o * r
    }
    , 0)) < 120
}
let Vt = class {
    constructor(t, n) {
        this.state = t,
        this.ee = n
    }
    internalSet(t, n) {
        return this.state[t] === n || n === void 0 ? !1 : (this.state[t] = n,
        this.ee.emit(`change:${t}`, n),
        !0)
    }
    clone() {
        return {
            ...this.state
        }
    }
    set(t, n) {
        let r = !1;
        if (typeof t == "string")
            r = this.internalSet(t, n);
        else
            for (const i in t)
                this.internalSet(i, t[i]) && (r = !0);
        r && this.ee.emit("change")
    }
    get(t) {
        return this.state[t]
    }
}
;
function rn(e, t) {
    return n=>Qr(t[n], e)
}
class TA {
    constructor(t, n, r=He) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", (i,o)=>i === "click" ? Tn("back_button_pressed", o) : this.ee.on(i, o)),
        U(this, "off", (i,o)=>i === "click" ? sa("back_button_pressed", o) : this.ee.off(i, o)),
        U(this, "supports"),
        this.postEvent = r,
        this.state = new Vt({
            isVisible: t
        },this.ee),
        this.supports = rn(n, {
            show: "web_app_setup_back_button",
            hide: "web_app_setup_back_button"
        })
    }
    set isVisible(t) {
        this.state.set("isVisible", t),
        this.postEvent("web_app_setup_back_button", {
            is_visible: t
        })
    }
    get isVisible() {
        return this.state.get("isVisible")
    }
    hide() {
        this.isVisible = !1
    }
    show() {
        this.isVisible = !0
    }
}
class IA {
    constructor(t, n=He) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee)),
        this.postEvent = n,
        this.state = new Vt({
            isConfirmationNeeded: t
        },this.ee)
    }
    set isConfirmationNeeded(t) {
        this.state.set("isConfirmationNeeded", t),
        this.postEvent("web_app_setup_closing_behavior", {
            need_confirmation: t
        })
    }
    get isConfirmationNeeded() {
        return this.state.get("isConfirmationNeeded")
    }
    disableConfirmation() {
        this.isConfirmationNeeded = !1
    }
    enableConfirmation() {
        this.isConfirmationNeeded = !0
    }
}
function PA(e) {
    if (Array.isArray(e))
        return e;
    if (typeof e == "string")
        try {
            const t = JSON.parse(e);
            if (Array.isArray(t))
                return t
        } catch {}
    throw $r()
}
class NA extends oa {
    constructor(t, n, r) {
        super(PA, n, r),
        U(this, "itemParser"),
        this.itemParser = typeof t == "function" ? t : t.parse.bind(t)
    }
    parse(t) {
        const n = super.parse(t);
        return n === void 0 ? n : n.map(this.itemParser)
    }
    of(t) {
        return this.itemParser = typeof t == "function" ? t : t.parse.bind(t),
        this
    }
}
function FA(e) {
    return new NA(t=>t,!1,e)
}
function Yf(e, t) {
    return e.reduce((n,r)=>(n[r] = t,
    n), {})
}
class LA {
    constructor(t, n, r=He) {
        U(this, "supports"),
        this.createRequestId = n,
        this.postEvent = r,
        this.supports = rn(t, {
            delete: "web_app_invoke_custom_method",
            get: "web_app_invoke_custom_method",
            getKeys: "web_app_invoke_custom_method",
            set: "web_app_invoke_custom_method"
        })
    }
    async delete(t, n={}) {
        const r = Array.isArray(t) ? t : [t];
        r.length !== 0 && await xi("deleteStorageValues", {
            keys: r
        }, this.createRequestId(), {
            ...n,
            postEvent: this.postEvent
        })
    }
    async getKeys(t={}) {
        const n = await xi("getStorageKeys", {}, this.createRequestId(), {
            ...t,
            postEvent: this.postEvent
        });
        return FA().of(z()).parse(n)
    }
    async get(t, n={}) {
        const r = Array.isArray(t) ? t : [t];
        if (r.length === 0)
            return Yf(r, "");
        const i = Ge(Yf(r, z()))
          , o = await xi("getStorageValues", {
            keys: r
        }, this.createRequestId(), {
            ...n,
            postEvent: this.postEvent
        }).then(s=>i.parse(s));
        return Array.isArray(t) ? o : o[t]
    }
    async set(t, n, r={}) {
        await xi("saveStorageValue", {
            key: t,
            value: n
        }, this.createRequestId(), {
            ...r,
            postEvent: this.postEvent
        })
    }
}
class UA {
    constructor(t, n=He) {
        U(this, "supports"),
        this.postEvent = n,
        this.supports = rn(t, {
            impactOccurred: "web_app_trigger_haptic_feedback",
            notificationOccurred: "web_app_trigger_haptic_feedback",
            selectionChanged: "web_app_trigger_haptic_feedback"
        })
    }
    impactOccurred(t) {
        this.postEvent("web_app_trigger_haptic_feedback", {
            type: "impact",
            impact_style: t
        })
    }
    notificationOccurred(t) {
        this.postEvent("web_app_trigger_haptic_feedback", {
            type: "notification",
            notification_type: t
        })
    }
    selectionChanged() {
        this.postEvent("web_app_trigger_haptic_feedback", {
            type: "selection_change"
        })
    }
}
function jA() {
    return Ge({
        id: Zn(),
        type: z(),
        title: z(),
        photoUrl: {
            type: z().optional(),
            from: "photo_url"
        },
        username: z().optional()
    }, "Chat")
}
class MA {
    constructor(t) {
        this.initData = t
    }
    get authDate() {
        return this.initData.authDate
    }
    get canSendAfter() {
        return this.initData.canSendAfter
    }
    get canSendAfterDate() {
        const {canSendAfter: t} = this;
        return t === void 0 ? void 0 : new Date(this.authDate.getTime() + t * 1e3)
    }
    get chat() {
        return this.initData.chat
    }
    get chatType() {
        return this.initData.chatType
    }
    get chatInstance() {
        return this.initData.chatInstance
    }
    get hash() {
        return this.initData.hash
    }
    get queryId() {
        return this.initData.queryId
    }
    get receiver() {
        return this.initData.receiver
    }
    get startParam() {
        return this.initData.startParam
    }
    get user() {
        return this.initData.user
    }
}
function Xf() {
    return Ge({
        addedToAttachmentMenu: {
            type: hn().optional(),
            from: "added_to_attachment_menu"
        },
        allowsWriteToPm: {
            type: hn().optional(),
            from: "allows_write_to_pm"
        },
        firstName: {
            type: z(),
            from: "first_name"
        },
        id: Zn(),
        isBot: {
            type: hn().optional(),
            from: "is_bot"
        },
        isPremium: {
            type: hn().optional(),
            from: "is_premium"
        },
        languageCode: {
            type: z().optional(),
            from: "language_code"
        },
        lastName: {
            type: z().optional(),
            from: "last_name"
        },
        photoUrl: {
            type: z().optional(),
            from: "photo_url"
        },
        username: z().optional()
    }, "User")
}
const ag = ei(e=>e instanceof Date ? e : new Date(Zn().parse(e) * 1e3), "Date");
function fc(e, t) {
    return new oa(n=>{
        if (typeof n != "string" && !(n instanceof URLSearchParams))
            throw $r();
        const r = typeof n == "string" ? new URLSearchParams(n) : n;
        return eg(e, i=>{
            const o = r.get(i);
            return o === null ? void 0 : o
        }
        )
    }
    ,!1,t)
}
function DA() {
    return fc({
        authDate: {
            type: ag(),
            from: "auth_date"
        },
        canSendAfter: {
            type: Zn().optional(),
            from: "can_send_after"
        },
        chat: jA().optional(),
        chatInstance: {
            type: z().optional(),
            from: "chat_instance"
        },
        chatType: {
            type: z().optional(),
            from: "chat_type"
        },
        hash: z(),
        queryId: {
            type: z().optional(),
            from: "query_id"
        },
        receiver: Xf().optional(),
        startParam: {
            type: z().optional(),
            from: "start_param"
        },
        user: Xf().optional()
    }, "InitData")
}
function VA(e) {
    const {hostname: t, pathname: n} = new URL(e,window.location.href);
    if (t !== "t.me")
        throw new Error(`Incorrect hostname: ${t}`);
    const r = n.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);
    if (r === null)
        throw new Error('Link pathname has incorrect format. Expected to receive "/invoice/{slug}" or "/${slug}"');
    return r[2]
}
class WA {
    constructor(t, n=He) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee)),
        U(this, "supports"),
        this.postEvent = n,
        this.state = new Vt({
            isOpened: !1
        },this.ee),
        this.supports = rn(t, {
            open: "web_app_open_invoice"
        })
    }
    set isOpened(t) {
        this.state.set("isOpened", t)
    }
    get isOpened() {
        return this.state.get("isOpened")
    }
    async open(t, n) {
        if (this.isOpened)
            throw new Error("Invoice is already opened");
        const r = n ? VA(t) : t;
        this.isOpened = !0;
        try {
            return (await kn("web_app_open_invoice", "invoice_closed", {
                params: {
                    slug: r
                },
                postEvent: this.postEvent,
                capture(i) {
                    return r === i.slug
                }
            })).status
        } finally {
            this.isOpened = !1
        }
    }
}
class zA {
    constructor(t) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "postEvent"),
        U(this, "on", (f,d)=>f === "click" ? Tn("main_button_pressed", d) : this.ee.on(f, d)),
        U(this, "off", (f,d)=>f === "click" ? sa("main_button_pressed", d) : this.ee.off(f, d));
        const {postEvent: n=He, text: r, textColor: i, backgroundColor: o, isEnabled: s, isVisible: a, isLoaderVisible: l} = t;
        this.postEvent = n,
        this.state = new Vt({
            backgroundColor: o,
            isEnabled: s,
            isVisible: a,
            isLoaderVisible: l,
            text: r,
            textColor: i
        },this.ee)
    }
    commit() {
        this.text !== "" && this.postEvent("web_app_setup_main_button", {
            is_visible: this.isVisible,
            is_active: this.isEnabled,
            is_progress_visible: this.isLoaderVisible,
            text: this.text,
            color: this.backgroundColor,
            text_color: this.textColor
        })
    }
    set isEnabled(t) {
        this.setParams({
            isEnabled: t
        })
    }
    get isEnabled() {
        return this.state.get("isEnabled")
    }
    set isLoaderVisible(t) {
        this.setParams({
            isLoaderVisible: t
        })
    }
    get isLoaderVisible() {
        return this.state.get("isLoaderVisible")
    }
    set isVisible(t) {
        this.setParams({
            isVisible: t
        })
    }
    get isVisible() {
        return this.state.get("isVisible")
    }
    get backgroundColor() {
        return this.state.get("backgroundColor")
    }
    get text() {
        return this.state.get("text")
    }
    get textColor() {
        return this.state.get("textColor")
    }
    disable() {
        return this.isEnabled = !1,
        this
    }
    enable() {
        return this.isEnabled = !0,
        this
    }
    hide() {
        return this.isVisible = !1,
        this
    }
    hideLoader() {
        return this.isLoaderVisible = !1,
        this
    }
    show() {
        return this.isVisible = !0,
        this
    }
    showLoader() {
        return this.isLoaderVisible = !0,
        this
    }
    setText(t) {
        return this.setParams({
            text: t
        })
    }
    setTextColor(t) {
        return this.setParams({
            textColor: t
        })
    }
    setBackgroundColor(t) {
        return this.setParams({
            backgroundColor: t
        })
    }
    setParams(t) {
        return this.state.set(t),
        this.commit(),
        this
    }
}
const QA = fc({
    contact: Ge({
        userId: {
            type: Zn(),
            from: "user_id"
        },
        phoneNumber: {
            type: z(),
            from: "phone_number"
        },
        firstName: {
            type: z(),
            from: "first_name"
        },
        lastName: {
            type: z().optional(),
            from: "last_name"
        }
    }),
    authDate: {
        type: ag(),
        from: "auth_date"
    },
    hash: z()
});
function lg(e, t) {
    return n=>{
        const [r,i] = t[n];
        return Qr(r, i, e)
    }
}
function KA(e) {
    return new Promise(t=>{
        setTimeout(t, e)
    }
    )
}
class qA {
    constructor(t) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "botInline"),
        U(this, "postEvent"),
        U(this, "createRequestId"),
        U(this, "requestingPhoneAccess", !1),
        U(this, "requestingWriteAccess", !1),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee)),
        U(this, "supports"),
        U(this, "supportsParam");
        const {postEvent: n=He, headerColor: r, backgroundColor: i, version: o, botInline: s, createRequestId: a} = t
          , l = rn(o, {
            requestPhoneAccess: "web_app_request_phone",
            requestWriteAccess: "web_app_request_write_access",
            switchInlineQuery: "web_app_switch_inline_query",
            setHeaderColor: "web_app_set_header_color",
            setBackgroundColor: "web_app_set_background_color"
        });
        this.postEvent = n,
        this.botInline = s,
        this.createRequestId = a,
        this.supports = f=>!(!l(f) || f === "switchInlineQuery" && !s),
        this.state = new Vt({
            backgroundColor: i,
            headerColor: r
        },this.ee),
        this.supportsParam = lg(o, {
            "setHeaderColor.color": ["web_app_set_header_color", "color"]
        })
    }
    async getRequestedContact() {
        return xi("getRequestedContact", {}, this.createRequestId(), {
            postEvent: this.postEvent,
            timeout: 1e4
        }).then(t=>QA.parse(t))
    }
    get backgroundColor() {
        return this.state.get("backgroundColor")
    }
    close() {
        this.postEvent("web_app_close")
    }
    get headerColor() {
        return this.state.get("headerColor")
    }
    get isBotInline() {
        return this.botInline
    }
    get isDark() {
        return sg(this.backgroundColor)
    }
    get isRequestingPhoneAccess() {
        return this.requestingPhoneAccess
    }
    get isRequestingWriteAccess() {
        return this.requestingWriteAccess
    }
    ready() {
        this.postEvent("web_app_ready")
    }
    async requestContact({timeout: t=5e3}={}) {
        try {
            return await this.getRequestedContact()
        } catch {}
        if (await this.requestPhoneAccess() !== "sent")
            throw new Error("Access denied.");
        const n = Date.now() + t;
        let r = 50;
        return og(async()=>{
            for (; Date.now() < n; ) {
                try {
                    return await this.getRequestedContact()
                } catch {}
                await KA(r),
                r += 50
            }
            throw new Error("Unable to retrieve requested contact.")
        }
        , t)
    }
    requestPhoneAccess(t={}) {
        if (this.requestingPhoneAccess)
            throw new Error("Phone access is already being requested.");
        return this.requestingPhoneAccess = !0,
        kn("web_app_request_phone", "phone_requested", {
            ...t,
            postEvent: this.postEvent
        }).then(n=>n.status).finally(()=>{
            this.requestingPhoneAccess = !1
        }
        )
    }
    requestWriteAccess(t={}) {
        if (this.requestingWriteAccess)
            throw new Error("Write access is already being requested.");
        return this.requestingWriteAccess = !0,
        kn("web_app_request_write_access", "write_access_requested", {
            ...t,
            postEvent: this.postEvent
        }).then(n=>n.status).finally(()=>{
            this.requestingWriteAccess = !1
        }
        )
    }
    sendData(t) {
        const {size: n} = new Blob([t]);
        if (n === 0 || n > 4096)
            throw new Error(`Passed data has incorrect size: ${n}`);
        this.postEvent("web_app_data_send", {
            data: t
        })
    }
    setHeaderColor(t) {
        this.postEvent("web_app_set_header_color", cc(t) ? {
            color: t
        } : {
            color_key: t
        }),
        this.state.set("headerColor", t)
    }
    setBackgroundColor(t) {
        this.postEvent("web_app_set_background_color", {
            color: t
        }),
        this.state.set("backgroundColor", t)
    }
    switchInlineQuery(t, n=[]) {
        if (!this.supports("switchInlineQuery") && !this.isBotInline)
            throw new Error("Method is unsupported because Mini App should be launched in inline mode.");
        this.postEvent("web_app_switch_inline_query", {
            query: t,
            chat_types: n
        })
    }
}
function HA(e) {
    const t = e.message.trim()
      , n = (e.title || "").trim()
      , r = e.buttons || [];
    let i;
    if (n.length > 64)
        throw new Error(`Title has incorrect size: ${n.length}`);
    if (t.length === 0 || t.length > 256)
        throw new Error(`Message has incorrect size: ${t.length}`);
    if (r.length > 3)
        throw new Error(`Buttons have incorrect size: ${r.length}`);
    return r.length === 0 ? i = [{
        type: "close",
        id: ""
    }] : i = r.map(o=>{
        const {id: s=""} = o;
        if (s.length > 64)
            throw new Error(`Button ID has incorrect size: ${s}`);
        if (o.type === void 0 || o.type === "default" || o.type === "destructive") {
            const a = o.text.trim();
            if (a.length === 0 || a.length > 64) {
                const l = o.type || "default";
                throw new Error(`Button text with type "${l}" has incorrect size: ${o.text.length}`)
            }
            return {
                ...o,
                text: a,
                id: s
            }
        }
        return {
            ...o,
            id: s
        }
    }
    ),
    {
        title: n,
        message: t,
        buttons: i
    }
}
class GA {
    constructor(t, n=He) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee)),
        U(this, "supports"),
        this.postEvent = n,
        this.state = new Vt({
            isOpened: !1
        },this.ee),
        this.supports = rn(t, {
            open: "web_app_open_popup"
        })
    }
    set isOpened(t) {
        this.state.set("isOpened", t)
    }
    get isOpened() {
        return this.state.get("isOpened")
    }
    open(t) {
        if (this.isOpened)
            throw new Error("Popup is already opened.");
        return this.isOpened = !0,
        kn("web_app_open_popup", "popup_closed", {
            postEvent: this.postEvent,
            params: HA(t)
        }).then(({button_id: n=null})=>n).finally(()=>{
            this.isOpened = !1
        }
        )
    }
}
class ZA {
    constructor(t, n=He) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee)),
        U(this, "supports"),
        this.postEvent = n,
        this.state = new Vt({
            isOpened: !1
        },this.ee),
        this.supports = rn(t, {
            close: "web_app_close_scan_qr_popup",
            open: "web_app_open_scan_qr_popup"
        })
    }
    close() {
        this.postEvent("web_app_close_scan_qr_popup"),
        this.isOpened = !1
    }
    set isOpened(t) {
        this.state.set("isOpened", t)
    }
    get isOpened() {
        return this.state.get("isOpened")
    }
    async open(t) {
        if (this.isOpened)
            throw new Error("QR scanner is already opened.");
        this.isOpened = !0;
        try {
            const n = await kn("web_app_open_scan_qr_popup", ["qr_text_received", "scan_qr_popup_closed"], {
                postEvent: this.postEvent,
                params: {
                    text: t
                }
            });
            return typeof n == "object" && typeof n.data == "string" ? n.data : null
        } finally {
            this.isOpened = !1
        }
    }
}
class JA {
    constructor(t, n, r=He) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", (i,o)=>i === "click" ? Tn("settings_button_pressed", o) : this.ee.on(i, o)),
        U(this, "off", (i,o)=>i === "click" ? sa("settings_button_pressed", o) : this.ee.off(i, o)),
        U(this, "supports"),
        this.postEvent = r,
        this.state = new Vt({
            isVisible: t
        },this.ee),
        this.supports = rn(n, {
            show: "web_app_setup_settings_button",
            hide: "web_app_setup_settings_button"
        })
    }
    set isVisible(t) {
        this.state.set("isVisible", t),
        this.postEvent("web_app_setup_settings_button", {
            is_visible: t
        })
    }
    get isVisible() {
        return this.state.get("isVisible")
    }
    hide() {
        this.isVisible = !1
    }
    show() {
        this.isVisible = !0
    }
}
function YA(e) {
    return e.replace(/(^|_)bg/, (t,n)=>`${n}background`).replace(/_([a-z])/g, (t,n)=>n.toUpperCase())
}
function XA(e) {
    return e.replace(/[A-Z]/g, t=>`_${t.toLowerCase()}`).replace(/(^|_)background/, (t,n)=>`${n}bg`)
}
const ug = ei(e=>{
    const t = ng().optional();
    return Object.entries(uc(e)).reduce((n,[r,i])=>(n[YA(r)] = t.parse(i),
    n), {})
}
, "ThemeParams");
function $A(e) {
    return ug().parse(e)
}
function ew(e) {
    return JSON.stringify(Object.entries(e).reduce((t,[n,r])=>(r && (t[XA(n)] = r),
    t), {}))
}
class tw {
    constructor(t) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee)),
        this.state = new Vt(t,this.ee)
    }
    get accentTextColor() {
        return this.get("accentTextColor")
    }
    get backgroundColor() {
        return this.get("backgroundColor")
    }
    get buttonColor() {
        return this.get("buttonColor")
    }
    get buttonTextColor() {
        return this.get("buttonTextColor")
    }
    get destructiveTextColor() {
        return this.get("destructiveTextColor")
    }
    get(t) {
        return this.state.get(t)
    }
    getState() {
        return this.state.clone()
    }
    get headerBackgroundColor() {
        return this.get("headerBackgroundColor")
    }
    get hintColor() {
        return this.get("hintColor")
    }
    get isDark() {
        return !this.backgroundColor || sg(this.backgroundColor)
    }
    get linkColor() {
        return this.get("linkColor")
    }
    get secondaryBackgroundColor() {
        return this.get("secondaryBackgroundColor")
    }
    get sectionBackgroundColor() {
        return this.get("sectionBackgroundColor")
    }
    get sectionHeaderTextColor() {
        return this.get("sectionHeaderTextColor")
    }
    listen() {
        return Tn("theme_changed", t=>{
            this.state.set($A(t.theme_params))
        }
        )
    }
    get subtitleTextColor() {
        return this.get("subtitleTextColor")
    }
    get textColor() {
        return this.get("textColor")
    }
}
class nw {
    constructor(t, n, r=He) {
        U(this, "supports"),
        U(this, "supportsParam"),
        this.version = t,
        this.createRequestId = n,
        this.postEvent = r,
        this.supports = rn(t, {
            readTextFromClipboard: "web_app_read_text_from_clipboard"
        }),
        this.supportsParam = lg(t, {
            "openLink.tryInstantView": ["web_app_open_link", "try_instant_view"]
        })
    }
    openLink(t, n) {
        const r = new URL(t,window.location.href).toString();
        if (!Qr("web_app_open_link", this.version)) {
            window.open(r, "_blank");
            return
        }
        this.postEvent("web_app_open_link", {
            url: r,
            ...typeof n == "boolean" ? {
                try_instant_view: n
            } : {}
        })
    }
    openTelegramLink(t) {
        const {hostname: n, pathname: r, search: i} = new URL(t,window.location.href);
        if (n !== "t.me")
            throw new Error(`URL has not allowed hostname: ${n}. Only "t.me" is allowed`);
        if (!Qr("web_app_open_tg_link", this.version)) {
            window.location.href = t;
            return
        }
        this.postEvent("web_app_open_tg_link", {
            path_full: r + i
        })
    }
    async readTextFromClipboard() {
        const t = this.createRequestId()
          , {data: n=null} = await kn("web_app_read_text_from_clipboard", "clipboard_text_received", {
            postEvent: this.postEvent,
            params: {
                req_id: t
            },
            capture: Jh(t)
        });
        return n
    }
}
function rw(e) {
    return ["macos", "tdesktop", "unigram", "web", "weba"].includes(e)
}
async function cg(e) {
    const t = await kn("web_app_request_viewport", "viewport_changed", e);
    return {
        height: t.height,
        width: t.width,
        isExpanded: t.is_expanded,
        isStateStable: t.is_state_stable
    }
}
function vi(e) {
    return e < 0 ? 0 : e
}
class iw {
    constructor(t) {
        U(this, "ee", new bt),
        U(this, "state"),
        U(this, "postEvent"),
        U(this, "on", this.ee.on.bind(this.ee)),
        U(this, "off", this.ee.off.bind(this.ee));
        const {height: n, isExpanded: r, width: i, stableHeight: o, postEvent: s=He} = t;
        this.postEvent = s,
        this.state = new Vt({
            height: vi(n),
            isExpanded: r,
            stableHeight: vi(o),
            width: vi(i)
        },this.ee)
    }
    sync(t) {
        return cg(t).then(({height: n, isExpanded: r, width: i, isStateStable: o})=>{
            this.state.set({
                height: n,
                width: i,
                isExpanded: r,
                stableHeight: o ? n : this.state.get("stableHeight")
            })
        }
        )
    }
    get height() {
        return this.state.get("height")
    }
    get stableHeight() {
        return this.state.get("stableHeight")
    }
    listen() {
        return Tn("viewport_changed", t=>{
            const {height: n, width: r, is_expanded: i, is_state_stable: o} = t
              , s = {
                height: vi(n),
                isExpanded: i,
                width: vi(r)
            };
            o && (s.stableHeight = s.height),
            this.state.set(s)
        }
        )
    }
    get isExpanded() {
        return this.state.get("isExpanded")
    }
    get width() {
        return this.state.get("width")
    }
    expand() {
        this.postEvent("web_app_expand"),
        this.state.set("isExpanded", !0)
    }
    get isStable() {
        return this.stableHeight === this.height
    }
}
function gn(e, t) {
    document.documentElement.style.setProperty(e, t)
}
function ow(e, t) {
    const n = ()=>{
        gn("--tg-background-color", e.backgroundColor)
    }
      , r = ()=>{
        const {backgroundColor: i, secondaryBackgroundColor: o} = t;
        if (cc(e.headerColor)) {
            gn("--tg-header-color", e.headerColor);
            return
        }
        if (e.headerColor === "bg_color" && i) {
            gn("--tg-header-color", i);
            return
        }
        e.headerColor === "secondary_bg_color" && o && gn("--tg-header-color", o)
    }
    ;
    t.on("change", r),
    e.on("change:backgroundColor", n),
    e.on("change:headerColor", r),
    n(),
    r()
}
function sw(e) {
    const t = ()=>{
        const n = e.getState();
        Object.entries(n).forEach(([r,i])=>{
            if (i) {
                const o = r.replace(/[A-Z]/g, s=>`-${s.toLowerCase()}`);
                gn(`--tg-theme-${o}`, i)
            }
        }
        )
    }
    ;
    e.on("change", t),
    t()
}
function $f(e) {
    const t = ()=>gn("--tg-viewport-height", `${e.height}px`)
      , n = ()=>gn("--tg-viewport-width", `${e.width}px`)
      , r = ()=>gn("--tg-viewport-stable-height", `${e.stableHeight}px`);
    e.on("change:height", t),
    e.on("change:width", n),
    e.on("change:stableHeight", r),
    t(),
    n(),
    r()
}
function aw() {
    const e = document.createElement("style");
    e.id = "telegram-custom-styles",
    document.head.appendChild(e),
    Tn("set_custom_style", t=>{
        e.innerHTML = t
    }
    )
}
function fg(e) {
    return `telegram-mini-apps-${e}`
}
function ti(e, t) {
    sessionStorage.setItem(fg(e), JSON.stringify(t))
}
function ni(e) {
    const t = sessionStorage.getItem(fg(e));
    return t ? JSON.parse(t) : null
}
function lw(e, t, n) {
    const {isVisible: r=!1} = e ? ni("back-button") || {} : {}
      , i = new TA(r,t,n);
    return i.on("change", ()=>{
        ti("back-button", {
            isVisible: i.isVisible
        })
    }
    ),
    i
}
function uw(e, t) {
    const {isConfirmationNeeded: n=!1} = e ? ni("closing-behavior") || {} : {}
      , r = new IA(n,t);
    return r.on("change", ()=>ti("closing-behavior", {
        isConfirmationNeeded: r.isConfirmationNeeded
    })),
    r
}
function cw(e, t, n, r) {
    const {backgroundColor: i=t, isEnabled: o=!1, isVisible: s=!1, isLoaderVisible: a=!1, textColor: l=n, text: f=""} = e ? ni("main-button") || {} : {}
      , d = new zA({
        backgroundColor: i,
        isEnabled: o,
        isLoaderVisible: a,
        isVisible: s,
        postEvent: r,
        text: f,
        textColor: l
    })
      , g = ()=>ti("main-button", {
        backgroundColor: d.backgroundColor,
        isEnabled: d.isEnabled,
        isLoaderVisible: d.isLoaderVisible,
        isVisible: d.isVisible,
        text: d.text,
        textColor: d.textColor
    });
    return d.on("change", g),
    d
}
function fw(e, t, n, r, i, o) {
    const {backgroundColor: s=t, headerColor: a="bg_color"} = e ? ni("mini-app") || {} : {}
      , l = new qA({
        headerColor: a,
        backgroundColor: s,
        version: n,
        botInline: r,
        createRequestId: i,
        postEvent: o
    })
      , f = ()=>ti("mini-app", {
        backgroundColor: l.backgroundColor,
        headerColor: l.headerColor
    });
    return l.on("change", f),
    l
}
function dw() {
    let e = 0;
    return ()=>(e += 1,
    e.toString())
}
function pw(e, t, n) {
    const {isVisible: r=!1} = e ? ni("settings-button") || {} : {}
      , i = new JA(r,t,n);
    return i.on("change", ()=>{
        ti("settings-button", {
            isVisible: i.isVisible
        })
    }
    ),
    i
}
function hw(e) {
    const t = new tw(e);
    return t.listen(),
    t
}
function jo(e) {
    const t = new iw(e);
    return t.on("change", ()=>ti("viewport", {
        height: t.height,
        isExpanded: t.isExpanded,
        stableHeight: t.stableHeight,
        width: t.width
    })),
    t.listen(),
    t
}
function gw(e, t, n, r) {
    const i = e ? ni("viewport") : null;
    if (i)
        return jo({
            ...i,
            postEvent: n
        });
    if (rw(t))
        return jo({
            height: window.innerHeight,
            isExpanded: !0,
            postEvent: n,
            stableHeight: window.innerHeight,
            width: window.innerWidth
        });
    if (r)
        return cg({
            postEvent: n,
            timeout: 5e3
        }).then(({height: s, isStateStable: a, ...l})=>jo({
            ...l,
            height: s,
            stableHeight: a ? s : 0
        }));
    const o = jo({
        width: 0,
        height: 0,
        isExpanded: !1,
        postEvent: n,
        stableHeight: 0
    });
    return o.sync({
        postEvent: n,
        timeout: 5e3
    }).catch(s=>{
        console.error("Unable to actualize viewport state", s)
    }
    ),
    o
}
function mw(e) {
    return typeof e == "object" ? e : e ? {
        themeParams: !0,
        viewport: !0,
        miniApp: !0
    } : {}
}
function ed(e, t, n, r) {
    const i = mw(e);
    i.miniApp && ow(t, n),
    i.themeParams && sw(n),
    i.viewport && (r instanceof Promise ? r.then($f) : $f(r))
}
function vw() {
    return fc({
        botInline: {
            type: hn().optional(),
            from: "tgWebAppBotInline"
        },
        initData: {
            type: DA().optional(),
            from: "tgWebAppData"
        },
        initDataRaw: {
            type: z().optional(),
            from: "tgWebAppData"
        },
        platform: {
            type: z(),
            from: "tgWebAppPlatform"
        },
        showSettings: {
            type: hn().optional(),
            from: "tgWebAppShowSettings"
        },
        startParam: {
            type: z().optional(),
            from: "tgWebAppStartParam"
        },
        themeParams: {
            type: ug(),
            from: "tgWebAppThemeParams"
        },
        version: {
            type: z(),
            from: "tgWebAppVersion"
        }
    }, "LaunchParams")
}
function dg(e) {
    return vw().parse(e)
}
function pg(e) {
    const t = e.includes("?") ? e.replace("#", "&").slice(e.indexOf("?") + 1) : e.slice(e.indexOf("#") + 1);
    return dg(t)
}
function yw() {
    return pg(window.location.href)
}
function hg() {
    return performance.getEntriesByType("navigation")[0]
}
function Aw() {
    const e = hg();
    if (!e)
        throw new Error("Unable to get first navigation entry.");
    return pg(e.name)
}
function ww(e) {
    const {initDataRaw: t, themeParams: n, platform: r, version: i, showSettings: o, startParam: s, botInline: a} = e
      , l = new URLSearchParams;
    return t && l.set("tgWebAppData", t),
    l.set("tgWebAppPlatform", r),
    l.set("tgWebAppThemeParams", ew(n)),
    l.set("tgWebAppVersion", i),
    s && l.set("tgWebAppStartParam", i),
    typeof o == "boolean" && l.set("tgWebAppShowSettings", o ? "1" : "0"),
    typeof a == "boolean" && l.set("tgWebAppBotInline", a ? "1" : "0"),
    l.toString()
}
const gg = "telegram-mini-apps-launch-params";
function Sw() {
    return dg(sessionStorage.getItem(gg) || "")
}
function Ew(e) {
    sessionStorage.setItem(gg, ww(e))
}
function mg() {
    const e = [];
    for (const t of [yw, Aw, Sw])
        try {
            const n = t();
            return Ew(n),
            n
        } catch (n) {
            e.push(n)
        }
    throw Fi.error("Unable to extract launch parameters. Received errors:", e),
    new Error("Unable to retrieve launch parameters from any known source.")
}
function xw() {
    var e;
    return ((e = hg()) == null ? void 0 : e.type) === "reload"
}
function vg(e={}) {
    const {async: t=!1, complete: n=t, cssVars: r=!1, acceptCustomStyles: i=!1} = e;
    try {
        const {initData: o, initDataRaw: s, version: a, platform: l, themeParams: f, botInline: d=!1} = mg()
          , g = xw()
          , p = dw()
          , A = pA(a);
        Hh() && (i && aw(),
        A("iframe_ready", {
            reload_supported: !0
        }),
        Tn("reload_iframe", ()=>{
            A("iframe_will_reload"),
            window.location.reload()
        }
        ));
        const E = {
            backButton: lw(g, a, A),
            closingBehavior: uw(g, A),
            cloudStorage: new LA(a,p,A),
            createRequestId: p,
            hapticFeedback: new UA(a,A),
            invoice: new WA(a,A),
            mainButton: cw(g, f.buttonColor || "#000000", f.buttonTextColor || "#ffffff", A),
            miniApp: fw(g, f.backgroundColor || "#ffffff", a, d, p, A),
            popup: new GA(a,A),
            postEvent: A,
            qrScanner: new ZA(a,A),
            settingsButton: pw(g, a, A),
            themeParams: hw(f),
            utils: new nw(a,p,A),
            ...o ? {
                initData: new MA(o),
                initDataRaw: s
            } : {}
        }
          , _ = gw(g, l, A, n);
        return _ instanceof Promise || n ? Promise.resolve(_).then(I=>(ed(r, E.miniApp, E.themeParams, I),
        {
            ...E,
            viewport: I
        })) : (ed(r, E.miniApp, E.themeParams, _),
        {
            ...E,
            viewport: _
        })
    } catch (o) {
        if (n)
            return Promise.reject(o);
        throw o
    }
}
const aa = te.createContext({
    loading: !1
});
aa.displayName = "SDKContext";
function Cw({options: e, children: t}) {
    const [n,r] = te.useState(!1)
      , [i,o] = te.useState()
      , [s,a] = te.useState();
    te.useEffect(()=>{
        r(!0),
        vg({
            ...e,
            complete: !0
        }).then(a).catch(o).finally(()=>r(!1))
    }
    , []);
    const l = te.useMemo(()=>{
        const f = {
            loading: n
        };
        return i && (f.error = i),
        s && (f.initResult = s),
        f
    }
    , [n, s, i]);
    return Be.createElement(aa.Provider, {
        value: l
    }, t)
}
function _w({options: e={}, children: t}) {
    const n = te.useMemo(()=>{
        const r = {
            loading: !1
        };
        try {
            r.initResult = vg({
                ...e,
                complete: !1
            })
        } catch (i) {
            r.error = i
        }
        return r
    }
    , []);
    return Be.createElement(aa.Provider, {
        value: n
    }, t)
}
function bw(e) {
    const {options: t={}, async: n} = e;
    return t.async || t.complete || n ? Be.createElement(Cw, {
        ...e
    }) : Be.createElement(_w, {
        ...e
    })
}
function yg() {
    return te.useContext(aa)
}
function Ag(e) {
    const {initResult: t} = yg();
    if (!t)
        throw new Error(`Unable to get init result key "${e}" as long as SDK is not initialized`);
    return t[e]
}
function td(e) {
    return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e))
}
function kw(e) {
    const t = Ag(e)
      , [n,r] = te.useState(td(t));
    return te.useEffect(()=>t.on("change", ()=>{
        r(td(t))
    }
    ), [t]),
    n
}
function la(e, t) {
    return t ? ()=>kw(e) : ()=>Ag(e)
}
const zE = la("initData");
function Ow() {
    return te.useMemo(mg, [])
}
const Rw = la("mainButton", !0)
  , Bw = la("postEvent")
  , QE = la("viewport", !0);
function nd(e, t={}) {
    return typeof e == "function" ? Be.createElement(e, {
        ...t
    }) : e
}
function Tw(e) {
    const {loading: t, initResult: n, error: r} = yg();
    return n ? e.children : r ? nd(e.error, {
        error: r
    }) : nd(t ? e.loading : e.initial)
}
var Y = "colors", Le = "sizes", L = "space", Iw = {
    gap: L,
    gridGap: L,
    columnGap: L,
    gridColumnGap: L,
    rowGap: L,
    gridRowGap: L,
    inset: L,
    insetBlock: L,
    insetBlockEnd: L,
    insetBlockStart: L,
    insetInline: L,
    insetInlineEnd: L,
    insetInlineStart: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    marginBlock: L,
    marginBlockEnd: L,
    marginBlockStart: L,
    marginInline: L,
    marginInlineEnd: L,
    marginInlineStart: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    paddingBlock: L,
    paddingBlockEnd: L,
    paddingBlockStart: L,
    paddingInline: L,
    paddingInlineEnd: L,
    paddingInlineStart: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    scrollMargin: L,
    scrollMarginTop: L,
    scrollMarginRight: L,
    scrollMarginBottom: L,
    scrollMarginLeft: L,
    scrollMarginX: L,
    scrollMarginY: L,
    scrollMarginBlock: L,
    scrollMarginBlockEnd: L,
    scrollMarginBlockStart: L,
    scrollMarginInline: L,
    scrollMarginInlineEnd: L,
    scrollMarginInlineStart: L,
    scrollPadding: L,
    scrollPaddingTop: L,
    scrollPaddingRight: L,
    scrollPaddingBottom: L,
    scrollPaddingLeft: L,
    scrollPaddingX: L,
    scrollPaddingY: L,
    scrollPaddingBlock: L,
    scrollPaddingBlockEnd: L,
    scrollPaddingBlockStart: L,
    scrollPaddingInline: L,
    scrollPaddingInlineEnd: L,
    scrollPaddingInlineStart: L,
    fontSize: "fontSizes",
    background: Y,
    backgroundColor: Y,
    backgroundImage: Y,
    borderImage: Y,
    border: Y,
    borderBlock: Y,
    borderBlockEnd: Y,
    borderBlockStart: Y,
    borderBottom: Y,
    borderBottomColor: Y,
    borderColor: Y,
    borderInline: Y,
    borderInlineEnd: Y,
    borderInlineStart: Y,
    borderLeft: Y,
    borderLeftColor: Y,
    borderRight: Y,
    borderRightColor: Y,
    borderTop: Y,
    borderTopColor: Y,
    caretColor: Y,
    color: Y,
    columnRuleColor: Y,
    fill: Y,
    outline: Y,
    outlineColor: Y,
    stroke: Y,
    textDecorationColor: Y,
    fontFamily: "fonts",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    blockSize: Le,
    minBlockSize: Le,
    maxBlockSize: Le,
    inlineSize: Le,
    minInlineSize: Le,
    maxInlineSize: Le,
    width: Le,
    minWidth: Le,
    maxWidth: Le,
    height: Le,
    minHeight: Le,
    maxHeight: Le,
    flexBasis: Le,
    gridTemplateColumns: Le,
    gridTemplateRows: Le,
    borderWidth: "borderWidths",
    borderTopWidth: "borderWidths",
    borderRightWidth: "borderWidths",
    borderBottomWidth: "borderWidths",
    borderLeftWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderTopStyle: "borderStyles",
    borderRightStyle: "borderStyles",
    borderBottomStyle: "borderStyles",
    borderLeftStyle: "borderStyles",
    borderRadius: "radii",
    borderTopLeftRadius: "radii",
    borderTopRightRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    boxShadow: "shadows",
    textShadow: "shadows",
    transition: "transitions",
    zIndex: "zIndices"
}, Pw = (e,t)=>typeof t == "function" ? {
    "()": Function.prototype.toString.call(t)
} : t, ri = ()=>{
    const e = Object.create(null);
    return (t,n,...r)=>{
        const i = (o=>JSON.stringify(o, Pw))(t);
        return i in e ? e[i] : e[i] = n(t, ...r)
    }
}
, Vn = Symbol.for("sxs.internal"), dc = (e,t)=>Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), rd = e=>{
    for (const t in e)
        return !0;
    return !1
}
, {hasOwnProperty: Nw} = Object.prototype, eu = e=>e.includes("-") ? e : e.replace(/[A-Z]/g, t=>"-" + t.toLowerCase()), Fw = /\s+(?![^()]*\))/, pr = e=>t=>e(...typeof t == "string" ? String(t).split(Fw) : [t]), id = {
    appearance: e=>({
        WebkitAppearance: e,
        appearance: e
    }),
    backfaceVisibility: e=>({
        WebkitBackfaceVisibility: e,
        backfaceVisibility: e
    }),
    backdropFilter: e=>({
        WebkitBackdropFilter: e,
        backdropFilter: e
    }),
    backgroundClip: e=>({
        WebkitBackgroundClip: e,
        backgroundClip: e
    }),
    boxDecorationBreak: e=>({
        WebkitBoxDecorationBreak: e,
        boxDecorationBreak: e
    }),
    clipPath: e=>({
        WebkitClipPath: e,
        clipPath: e
    }),
    content: e=>({
        content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
    }),
    hyphens: e=>({
        WebkitHyphens: e,
        hyphens: e
    }),
    maskImage: e=>({
        WebkitMaskImage: e,
        maskImage: e
    }),
    maskSize: e=>({
        WebkitMaskSize: e,
        maskSize: e
    }),
    tabSize: e=>({
        MozTabSize: e,
        tabSize: e
    }),
    textSizeAdjust: e=>({
        WebkitTextSizeAdjust: e,
        textSizeAdjust: e
    }),
    userSelect: e=>({
        WebkitUserSelect: e,
        userSelect: e
    }),
    marginBlock: pr((e,t)=>({
        marginBlockStart: e,
        marginBlockEnd: t || e
    })),
    marginInline: pr((e,t)=>({
        marginInlineStart: e,
        marginInlineEnd: t || e
    })),
    maxSize: pr((e,t)=>({
        maxBlockSize: e,
        maxInlineSize: t || e
    })),
    minSize: pr((e,t)=>({
        minBlockSize: e,
        minInlineSize: t || e
    })),
    paddingBlock: pr((e,t)=>({
        paddingBlockStart: e,
        paddingBlockEnd: t || e
    })),
    paddingInline: pr((e,t)=>({
        paddingInlineStart: e,
        paddingInlineEnd: t || e
    }))
}, Ja = /([\d.]+)([^]*)/, Lw = (e,t)=>e.length ? e.reduce((n,r)=>(n.push(...t.map(i=>i.includes("&") ? i.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(i) ? `:is(${r})` : r) : r + " " + i)),
n), []) : t, Uw = (e,t)=>e in jw && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n,r,i,o)=>r + (i === "stretch" ? `-moz-available${o};${eu(e)}:${r}-webkit-fill-available` : `-moz-fit-content${o};${eu(e)}:${r}fit-content`) + o) : String(t), jw = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1
}, en = e=>e ? e + "-" : "", wg = (e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r,i,o,s,a)=>s == "$" == !!o ? r : (i || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? en(t) + (a.includes("$") ? "" : en(n)) + a.replace(/\$/g, "-") : a) + ")" + (i || s == "--" ? "*" + (i || "") + (o || "1") + ")" : "")), Mw = /\s*,\s*(?![^()]*\))/, Dw = Object.prototype.toString, kr = (e,t,n,r,i)=>{
    let o, s, a;
    const l = (f,d,g)=>{
        let p, A;
        const E = _=>{
            for (p in _) {
                const v = p.charCodeAt(0) === 64
                  , S = v && Array.isArray(_[p]) ? _[p] : [_[p]];
                for (A of S) {
                    const x = /[A-Z]/.test(y = p) ? y : y.replace(/-[^]/g, O=>O[1].toUpperCase())
                      , k = typeof A == "object" && A && A.toString === Dw && (!r.utils[x] || !d.length);
                    if (x in r.utils && !k) {
                        const O = r.utils[x];
                        if (O !== s) {
                            s = O,
                            E(O(A)),
                            s = null;
                            continue
                        }
                    } else if (x in id) {
                        const O = id[x];
                        if (O !== a) {
                            a = O,
                            E(O(A)),
                            a = null;
                            continue
                        }
                    }
                    if (v && (I = p.slice(1)in r.media ? "@media " + r.media[p.slice(1)] : p,
                    p = I.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (O,B,N,K,j,Z)=>{
                        const Ne = Ja.test(B)
                          , Ve = .0625 * (Ne ? -1 : 1)
                          , [Fe,rt] = Ne ? [K, B] : [B, K];
                        return "(" + (N[0] === "=" ? "" : N[0] === ">" === Ne ? "max-" : "min-") + Fe + ":" + (N[0] !== "=" && N.length === 1 ? rt.replace(Ja, (it,Ze,T)=>Number(Ze) + Ve * (N === ">" ? 1 : -1) + T) : rt) + (j ? ") and (" + (j[0] === ">" ? "min-" : "max-") + Fe + ":" + (j.length === 1 ? Z.replace(Ja, (it,Ze,T)=>Number(Ze) + Ve * (j === ">" ? -1 : 1) + T) : Z) : "") + ")"
                    }
                    )),
                    k) {
                        const O = v ? g.concat(p) : [...g]
                          , B = v ? [...d] : Lw(d, p.split(Mw));
                        o !== void 0 && i(od(...o)),
                        o = void 0,
                        l(A, B, O)
                    } else
                        o === void 0 && (o = [[], d, g]),
                        p = v || p.charCodeAt(0) !== 36 ? p : `--${en(r.prefix)}${p.slice(1).replace(/\$/g, "-")}`,
                        A = k ? A : typeof A == "number" ? A && x in Vw ? String(A) + "px" : String(A) : wg(Uw(x, A ?? ""), r.prefix, r.themeMap[x]),
                        o[0].push(`${v ? `${p} ` : `${eu(p)}:`}${A}`)
                }
            }
            var I, y
        }
        ;
        E(f),
        o !== void 0 && i(od(...o)),
        o = void 0
    }
    ;
    l(e, t, n)
}
, od = (e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, Vw = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1
}, sd = e=>String.fromCharCode(e + (e > 25 ? 39 : 97)), Wn = e=>(t=>{
    let n, r = "";
    for (n = Math.abs(t); n > 52; n = n / 52 | 0)
        r = sd(n % 52) + r;
    return sd(n % 52) + r
}
)(((t,n)=>{
    let r = n.length;
    for (; r; )
        t = 33 * t ^ n.charCodeAt(--r);
    return t
}
)(5381, JSON.stringify(e)) >>> 0), Ci = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Ww = e=>{
    if (e.href && !e.href.startsWith(location.origin))
        return !1;
    try {
        return !!e.cssRules
    } catch {
        return !1
    }
}
, zw = e=>{
    let t;
    const n = ()=>{
        const {cssRules: i} = t.sheet;
        return [].map.call(i, (o,s)=>{
            const {cssText: a} = o;
            let l = "";
            if (a.startsWith("--sxs"))
                return "";
            if (i[s - 1] && (l = i[s - 1].cssText).startsWith("--sxs")) {
                if (!o.cssRules.length)
                    return "";
                for (const f in t.rules)
                    if (t.rules[f].group === o)
                        return `--sxs{--sxs:${[...t.rules[f].cache].join(" ")}}${a}`;
                return o.cssRules.length ? `${l}${a}` : ""
            }
            return a
        }
        ).join("")
    }
      , r = ()=>{
        if (t) {
            const {rules: a, sheet: l} = t;
            if (!l.deleteRule) {
                for (; Object(Object(l.cssRules)[0]).type === 3; )
                    l.cssRules.splice(0, 1);
                l.cssRules = []
            }
            for (const f in a)
                delete a[f]
        }
        const i = Object(e).styleSheets || [];
        for (const a of i)
            if (Ww(a)) {
                for (let l = 0, f = a.cssRules; f[l]; ++l) {
                    const d = Object(f[l]);
                    if (d.type !== 1)
                        continue;
                    const g = Object(f[l + 1]);
                    if (g.type !== 4)
                        continue;
                    ++l;
                    const {cssText: p} = d;
                    if (!p.startsWith("--sxs"))
                        continue;
                    const A = p.slice(14, -3).trim().split(/\s+/)
                      , E = Ci[A[0]];
                    E && (t || (t = {
                        sheet: a,
                        reset: r,
                        rules: {},
                        toString: n
                    }),
                    t.rules[E] = {
                        group: g,
                        index: l,
                        cache: new Set(A)
                    })
                }
                if (t)
                    break
            }
        if (!t) {
            const a = (l,f)=>({
                type: f,
                cssRules: [],
                insertRule(d, g) {
                    this.cssRules.splice(g, 0, a(d, {
                        import: 3,
                        undefined: 1
                    }[(d.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4))
                },
                get cssText() {
                    return l === "@media{}" ? `@media{${[].map.call(this.cssRules, d=>d.cssText).join("")}}` : l
                }
            });
            t = {
                sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"),
                rules: {},
                reset: r,
                toString: n
            }
        }
        const {sheet: o, rules: s} = t;
        for (let a = Ci.length - 1; a >= 0; --a) {
            const l = Ci[a];
            if (!s[l]) {
                const f = Ci[a + 1]
                  , d = s[f] ? s[f].index : o.cssRules.length;
                o.insertRule("@media{}", d),
                o.insertRule(`--sxs{--sxs:${a}}`, d),
                s[l] = {
                    group: o.cssRules[d + 1],
                    index: d,
                    cache: new Set([a])
                }
            }
            Qw(s[l])
        }
    }
    ;
    return r(),
    t
}
, Qw = e=>{
    const t = e.group;
    let n = t.cssRules.length;
    e.apply = r=>{
        try {
            t.insertRule(r, n),
            ++n
        } catch {}
    }
}
, yi = Symbol(), Kw = ri(), ad = (e,t)=>Kw(e, ()=>(...n)=>{
    let r = {
        type: null,
        composers: new Set
    };
    for (const i of n)
        if (i != null)
            if (i[Vn]) {
                r.type == null && (r.type = i[Vn].type);
                for (const o of i[Vn].composers)
                    r.composers.add(o)
            } else
                i.constructor !== Object || i.$$typeof ? r.type == null && (r.type = i) : r.composers.add(qw(i, e));
    return r.type == null && (r.type = "span"),
    r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
    Hw(e, r, t)
}
), qw = ({variants: e, compoundVariants: t, defaultVariants: n, ...r},i)=>{
    const o = `${en(i.prefix)}c-${Wn(r)}`
      , s = []
      , a = []
      , l = Object.create(null)
      , f = [];
    for (const p in n)
        l[p] = String(n[p]);
    if (typeof e == "object" && e)
        for (const p in e) {
            d = l,
            g = p,
            Nw.call(d, g) || (l[p] = "undefined");
            const A = e[p];
            for (const E in A) {
                const _ = {
                    [p]: String(E)
                };
                String(E) === "undefined" && f.push(p);
                const I = A[E]
                  , y = [_, I, !rd(I)];
                s.push(y)
            }
        }
    var d, g;
    if (typeof t == "object" && t)
        for (const p of t) {
            let {css: A, ...E} = p;
            A = typeof A == "object" && A || {};
            for (const I in E)
                E[I] = String(E[I]);
            const _ = [E, A, !rd(A)];
            a.push(_)
        }
    return [o, r, s, a, l, f]
}
, Hw = (e,t,n)=>{
    const [r,i,o,s] = Gw(t.composers)
      , a = typeof t.type == "function" || t.type.$$typeof ? (g=>{
        function p() {
            for (let A = 0; A < p[yi].length; A++) {
                const [E,_] = p[yi][A];
                g.rules[E].apply(_)
            }
            return p[yi] = [],
            null
        }
        return p[yi] = [],
        p.rules = {},
        Ci.forEach(A=>p.rules[A] = {
            apply: E=>p[yi].push([A, E])
        }),
        p
    }
    )(n) : null
      , l = (a || n).rules
      , f = `.${r}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`
      , d = g=>{
        g = typeof g == "object" && g || Zw;
        const {css: p, ...A} = g
          , E = {};
        for (const y in o)
            if (delete A[y],
            y in g) {
                let v = g[y];
                typeof v == "object" && v ? E[y] = {
                    "@initial": o[y],
                    ...v
                } : (v = String(v),
                E[y] = v !== "undefined" || s.has(y) ? v : o[y])
            } else
                E[y] = o[y];
        const _ = new Set([...i]);
        for (const [y,v,S,x] of t.composers) {
            n.rules.styled.cache.has(y) || (n.rules.styled.cache.add(y),
            kr(v, [`.${y}`], [], e, B=>{
                l.styled.apply(B)
            }
            ));
            const k = ld(S, E, e.media)
              , O = ld(x, E, e.media, !0);
            for (const B of k)
                if (B !== void 0)
                    for (const [N,K,j] of B) {
                        const Z = `${y}-${Wn(K)}-${N}`;
                        _.add(Z);
                        const Ne = (j ? n.rules.resonevar : n.rules.onevar).cache
                          , Ve = j ? l.resonevar : l.onevar;
                        Ne.has(Z) || (Ne.add(Z),
                        kr(K, [`.${Z}`], [], e, Fe=>{
                            Ve.apply(Fe)
                        }
                        ))
                    }
            for (const B of O)
                if (B !== void 0)
                    for (const [N,K] of B) {
                        const j = `${y}-${Wn(K)}-${N}`;
                        _.add(j),
                        n.rules.allvar.cache.has(j) || (n.rules.allvar.cache.add(j),
                        kr(K, [`.${j}`], [], e, Z=>{
                            l.allvar.apply(Z)
                        }
                        ))
                    }
        }
        if (typeof p == "object" && p) {
            const y = `${r}-i${Wn(p)}-css`;
            _.add(y),
            n.rules.inline.cache.has(y) || (n.rules.inline.cache.add(y),
            kr(p, [`.${y}`], [], e, v=>{
                l.inline.apply(v)
            }
            ))
        }
        for (const y of String(g.className || "").trim().split(/\s+/))
            y && _.add(y);
        const I = A.className = [..._].join(" ");
        return {
            type: t.type,
            className: I,
            selector: f,
            props: A,
            toString: ()=>I,
            deferredInjector: a
        }
    }
    ;
    return dc(d, {
        className: r,
        selector: f,
        [Vn]: t,
        toString: ()=>(n.rules.styled.cache.has(r) || d(),
        r)
    })
}
, Gw = e=>{
    let t = "";
    const n = []
      , r = {}
      , i = [];
    for (const [o,,,,s,a] of e) {
        t === "" && (t = o),
        n.push(o),
        i.push(...a);
        for (const l in s) {
            const f = s[l];
            (r[l] === void 0 || f !== "undefined" || a.includes(f)) && (r[l] = f)
        }
    }
    return [t, n, r, new Set(i)]
}
, ld = (e,t,n,r)=>{
    const i = [];
    e: for (let[o,s,a] of e) {
        if (a)
            continue;
        let l, f = 0, d = !1;
        for (l in o) {
            const g = o[l];
            let p = t[l];
            if (p !== g) {
                if (typeof p != "object" || !p)
                    continue e;
                {
                    let A, E, _ = 0;
                    for (const I in p) {
                        if (g === String(p[I])) {
                            if (I !== "@initial") {
                                const y = I.slice(1);
                                (E = E || []).push(y in n ? n[y] : I.replace(/^@media ?/, "")),
                                d = !0
                            }
                            f += _,
                            A = !0
                        }
                        ++_
                    }
                    if (E && E.length && (s = {
                        ["@media " + E.join(", ")]: s
                    }),
                    !A)
                        continue e
                }
            }
        }
        (i[f] = i[f] || []).push([r ? "cv" : `${l}-${o[l]}`, s, d])
    }
    return i
}
, Zw = {}, Jw = ri(), Yw = (e,t)=>Jw(e, ()=>(...n)=>{
    const r = ()=>{
        for (let i of n) {
            i = typeof i == "object" && i || {};
            let o = Wn(i);
            if (!t.rules.global.cache.has(o)) {
                if (t.rules.global.cache.add(o),
                "@import"in i) {
                    let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                    for (let a of [].concat(i["@import"]))
                        a = a.includes('"') || a.includes("'") ? a : `"${a}"`,
                        t.sheet.insertRule(`@import ${a};`, s++);
                    delete i["@import"]
                }
                kr(i, [], [], e, s=>{
                    t.rules.global.apply(s)
                }
                )
            }
        }
        return ""
    }
    ;
    return dc(r, {
        toString: r
    })
}
), Xw = ri(), $w = (e,t)=>Xw(e, ()=>n=>{
    const r = `${en(e.prefix)}k-${Wn(n)}`
      , i = ()=>{
        if (!t.rules.global.cache.has(r)) {
            t.rules.global.cache.add(r);
            const o = [];
            kr(n, [], [], e, a=>o.push(a));
            const s = `@keyframes ${r}{${o.join("")}}`;
            t.rules.global.apply(s)
        }
        return r
    }
    ;
    return dc(i, {
        get name() {
            return i()
        },
        toString: i
    })
}
), eS = class {
    constructor(e, t, n, r) {
        this.token = e == null ? "" : String(e),
        this.value = t == null ? "" : String(t),
        this.scale = n == null ? "" : String(n),
        this.prefix = r == null ? "" : String(r)
    }
    get computedValue() {
        return "var(" + this.variable + ")"
    }
    get variable() {
        return "--" + en(this.prefix) + en(this.scale) + this.token
    }
    toString() {
        return this.computedValue
    }
}
, tS = ri(), nS = (e,t)=>tS(e, ()=>(n,r)=>{
    r = typeof n == "object" && n || Object(r);
    const i = `.${n = (n = typeof n == "string" ? n : "") || `${en(e.prefix)}t-${Wn(r)}`}`
      , o = {}
      , s = [];
    for (const l in r) {
        o[l] = {};
        for (const f in r[l]) {
            const d = `--${en(e.prefix)}${l}-${f}`
              , g = wg(String(r[l][f]), e.prefix, l);
            o[l][f] = new eS(f,g,l,e.prefix),
            s.push(`${d}:${g}`)
        }
    }
    const a = ()=>{
        if (s.length && !t.rules.themed.cache.has(n)) {
            t.rules.themed.cache.add(n);
            const l = `${r === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
            t.rules.themed.apply(l)
        }
        return n
    }
    ;
    return {
        ...o,
        get className() {
            return a()
        },
        selector: i,
        toString: a
    }
}
), rS = ri(), ud, iS = ri(), oS = e=>{
    const t = (n=>{
        let r = !1;
        const i = rS(n, o=>{
            r = !0;
            const s = "prefix"in (o = typeof o == "object" && o || {}) ? String(o.prefix) : ""
              , a = typeof o.media == "object" && o.media || {}
              , l = typeof o.root == "object" ? o.root || null : globalThis.document || null
              , f = typeof o.theme == "object" && o.theme || {}
              , d = {
                prefix: s,
                media: a,
                theme: f,
                themeMap: typeof o.themeMap == "object" && o.themeMap || {
                    ...Iw
                },
                utils: typeof o.utils == "object" && o.utils || {}
            }
              , g = zw(l)
              , p = {
                css: ad(d, g),
                globalCss: Yw(d, g),
                keyframes: $w(d, g),
                createTheme: nS(d, g),
                reset() {
                    g.reset(),
                    p.theme.toString()
                },
                theme: {},
                sheet: g,
                config: d,
                prefix: s,
                getCssText: g.toString,
                toString: g.toString
            };
            return String(p.theme = p.createTheme(f)),
            p
        }
        );
        return r || i.reset(),
        i
    }
    )(e);
    return t.styled = (({config: n, sheet: r})=>iS(n, ()=>{
        const i = ad(n, r);
        return (...o)=>{
            const s = i(...o)
              , a = s[Vn].type
              , l = Be.forwardRef((f,d)=>{
                const g = f && f.as || a
                  , {props: p, deferredInjector: A} = s(f);
                return delete p.as,
                p.ref = d,
                A ? Be.createElement(Be.Fragment, null, Be.createElement(g, p), Be.createElement(A, null)) : Be.createElement(g, p)
            }
            );
            return l.className = s.className,
            l.displayName = `Styled.${a.displayName || a.name || a}`,
            l.selector = s.selector,
            l.toString = ()=>s.selector,
            l[Vn] = s[Vn],
            l
        }
    }
    ))(t),
    t
}
, Sg = ()=>ud || (ud = oS()), sS = (...e)=>Sg().keyframes(...e), ua = (...e)=>Sg().styled(...e);
const cd = globalThis || void 0 || self;
function H(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e)
}
var aS = {};
function pc() {
    return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof cd < "u" ? cd : typeof self < "u" ? self : aS
}
var Eg = Object.assign
  , Ts = Object.getOwnPropertyDescriptor
  , jt = Object.defineProperty
  , ca = Object.prototype
  , tu = [];
Object.freeze(tu);
var xg = {};
Object.freeze(xg);
var lS = typeof Proxy < "u"
  , uS = Object.toString();
function Cg() {
    lS || H("Proxy not available")
}
function _g(e) {
    var t = !1;
    return function() {
        if (!t)
            return t = !0,
            e.apply(this, arguments)
    }
}
var Or = function() {};
function _t(e) {
    return typeof e == "function"
}
function Jn(e) {
    var t = typeof e;
    switch (t) {
    case "string":
    case "symbol":
    case "number":
        return !0
    }
    return !1
}
function fa(e) {
    return e !== null && typeof e == "object"
}
function tn(e) {
    if (!fa(e))
        return !1;
    var t = Object.getPrototypeOf(e);
    if (t == null)
        return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n.toString() === uS
}
function bg(e) {
    var t = e == null ? void 0 : e.constructor;
    return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1
}
function fo(e, t, n) {
    jt(e, t, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: n
    })
}
function kg(e, t, n) {
    jt(e, t, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: n
    })
}
function nr(e, t) {
    var n = "isMobX" + e;
    return t.prototype[n] = !0,
    function(r) {
        return fa(r) && r[n] === !0
    }
}
function ii(e) {
    return e instanceof Map
}
function po(e) {
    return e instanceof Set
}
var Og = typeof Object.getOwnPropertySymbols < "u";
function cS(e) {
    var t = Object.keys(e);
    if (!Og)
        return t;
    var n = Object.getOwnPropertySymbols(e);
    return n.length ? [].concat(t, n.filter(function(r) {
        return ca.propertyIsEnumerable.call(e, r)
    })) : t
}
var Kr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Og ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Object.getOwnPropertyNames;
function Rg(e) {
    return e === null ? null : typeof e == "object" ? "" + e : e
}
function Gt(e, t) {
    return ca.hasOwnProperty.call(e, t)
}
var fS = Object.getOwnPropertyDescriptors || function(t) {
    var n = {};
    return Kr(t).forEach(function(r) {
        n[r] = Ts(t, r)
    }),
    n
}
;
function fd(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, hS(r.key), r)
    }
}
function hc(e, t, n) {
    return t && fd(e.prototype, t),
    n && fd(e, n),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Yn() {
    return Yn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Yn.apply(this, arguments)
}
function Bg(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    nu(e, t)
}
function nu(e, t) {
    return nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    nu(e, t)
}
function Ya(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function dS(e, t) {
    if (e) {
        if (typeof e == "string")
            return dd(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return dd(e, t)
    }
}
function dd(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Rr(e, t) {
    var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n)
        return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = dS(e)) || t && e && typeof e.length == "number") {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function pS(e, t) {
    if (typeof e != "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function hS(e) {
    var t = pS(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
var Ft = Symbol("mobx-stored-annotations");
function Mt(e) {
    function t(n, r) {
        if (ho(r))
            return e.decorate_20223_(n, r);
        oi(n, r, e)
    }
    return Object.assign(t, e)
}
function oi(e, t, n) {
    Gt(e, Ft) || fo(e, Ft, Yn({}, e[Ft])),
    xS(n) || (e[Ft][t] = n)
}
function gS(e) {
    return Gt(e, Ft) || fo(e, Ft, Yn({}, e[Ft])),
    e[Ft]
}
function ho(e) {
    return typeof e == "object" && typeof e.kind == "string"
}
var D = Symbol("mobx administration")
  , go = function() {
    function e(n) {
        n === void 0 && (n = "Atom"),
        this.name_ = void 0,
        this.isPendingUnobservation_ = !1,
        this.isBeingObserved_ = !1,
        this.observers_ = new Set,
        this.diffValue_ = 0,
        this.lastAccessedBy_ = 0,
        this.lowestObserverState_ = G.NOT_TRACKING_,
        this.onBOL = void 0,
        this.onBUOL = void 0,
        this.name_ = n
    }
    var t = e.prototype;
    return t.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(r) {
            return r()
        })
    }
    ,
    t.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(r) {
            return r()
        })
    }
    ,
    t.reportObserved = function() {
        return Gg(this)
    }
    ,
    t.reportChanged = function() {
        ft(),
        Zg(this),
        dt()
    }
    ,
    t.toString = function() {
        return this.name_
    }
    ,
    e
}()
  , gc = nr("Atom", go);
function Tg(e, t, n) {
    t === void 0 && (t = Or),
    n === void 0 && (n = Or);
    var r = new go(e);
    return t !== Or && k2(r, t),
    n !== Or && e0(r, n),
    r
}
function mS(e, t) {
    return e === t
}
function vS(e, t) {
    return Ec(e, t)
}
function yS(e, t) {
    return Ec(e, t, 1)
}
function AS(e, t) {
    return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
var Is = {
    identity: mS,
    structural: vS,
    default: AS,
    shallow: yS
};
function Xn(e, t, n) {
    return o0(e) ? e : Array.isArray(e) ? _e.array(e, {
        name: n
    }) : tn(e) ? _e.object(e, void 0, {
        name: n
    }) : ii(e) ? _e.map(e, {
        name: n
    }) : po(e) ? _e.set(e, {
        name: n
    }) : typeof e == "function" && !ma(e) && !ro(e) ? bg(e) ? Hr(e) : no(n, e) : e
}
function wS(e, t, n) {
    if (e == null || io(e) || va(e) || ir(e) || si(e))
        return e;
    if (Array.isArray(e))
        return _e.array(e, {
            name: n,
            deep: !1
        });
    if (tn(e))
        return _e.object(e, void 0, {
            name: n,
            deep: !1
        });
    if (ii(e))
        return _e.map(e, {
            name: n,
            deep: !1
        });
    if (po(e))
        return _e.set(e, {
            name: n,
            deep: !1
        })
}
function da(e) {
    return e
}
function SS(e, t) {
    return Ec(e, t) ? t : e
}
var ES = "override";
function xS(e) {
    return e.annotationType_ === ES
}
function mo(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: CS,
        extend_: _S,
        decorate_20223_: bS
    }
}
function CS(e, t, n, r) {
    var i;
    if ((i = this.options_) != null && i.bound)
        return this.extend_(e, t, n, !1) === null ? 0 : 1;
    if (r === e.target_)
        return this.extend_(e, t, n, !1) === null ? 0 : 2;
    if (ma(n.value))
        return 1;
    var o = Ig(e, this, t, n, !1);
    return jt(r, t, o),
    2
}
function _S(e, t, n, r) {
    var i = Ig(e, this, t, n);
    return e.defineProperty_(t, i, r)
}
function bS(e, t) {
    var n = t.kind
      , r = t.name
      , i = t.addInitializer
      , o = this
      , s = function(f) {
        var d, g, p, A;
        return $n((d = (g = o.options_) == null ? void 0 : g.name) != null ? d : r.toString(), f, (p = (A = o.options_) == null ? void 0 : A.autoAction) != null ? p : !1)
    };
    if (n == "field") {
        i(function() {
            oi(this, r, o)
        });
        return
    }
    if (n == "method") {
        var a;
        return ma(e) || (e = s(e)),
        (a = this.options_) != null && a.bound && i(function() {
            var l = this
              , f = l[r].bind(l);
            f.isMobxAction = !0,
            l[r] = f
        }),
        e
    }
    H("Cannot apply '" + o.annotationType_ + "' to '" + String(r) + "' (kind: " + n + "):" + (`
'` + o.annotationType_ + "' can only be used on properties with a function value."))
}
function kS(e, t, n, r) {
    t.annotationType_,
    r.value
}
function Ig(e, t, n, r, i) {
    var o, s, a, l, f, d, g;
    i === void 0 && (i = P.safeDescriptors),
    kS(e, t, n, r);
    var p = r.value;
    if ((o = t.options_) != null && o.bound) {
        var A;
        p = p.bind((A = e.proxy_) != null ? A : e.target_)
    }
    return {
        value: $n((s = (a = t.options_) == null ? void 0 : a.name) != null ? s : n.toString(), p, (l = (f = t.options_) == null ? void 0 : f.autoAction) != null ? l : !1, (d = t.options_) != null && d.bound ? (g = e.proxy_) != null ? g : e.target_ : void 0),
        configurable: i ? e.isPlainObject_ : !0,
        enumerable: !1,
        writable: !i
    }
}
function Pg(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: OS,
        extend_: RS,
        decorate_20223_: BS
    }
}
function OS(e, t, n, r) {
    var i;
    if (r === e.target_)
        return this.extend_(e, t, n, !1) === null ? 0 : 2;
    if ((i = this.options_) != null && i.bound && (!Gt(e.target_, t) || !ro(e.target_[t])) && this.extend_(e, t, n, !1) === null)
        return 0;
    if (ro(n.value))
        return 1;
    var o = Ng(e, this, t, n, !1, !1);
    return jt(r, t, o),
    2
}
function RS(e, t, n, r) {
    var i, o = Ng(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
    return e.defineProperty_(t, o, r)
}
function BS(e, t) {
    var n, r = t.name, i = t.addInitializer;
    return ro(e) || (e = Hr(e)),
    (n = this.options_) != null && n.bound && i(function() {
        var o = this
          , s = o[r].bind(o);
        s.isMobXFlow = !0,
        o[r] = s
    }),
    e
}
function TS(e, t, n, r) {
    t.annotationType_,
    r.value
}
function Ng(e, t, n, r, i, o) {
    o === void 0 && (o = P.safeDescriptors),
    TS(e, t, n, r);
    var s = r.value;
    if (ro(s) || (s = Hr(s)),
    i) {
        var a;
        s = s.bind((a = e.proxy_) != null ? a : e.target_),
        s.isMobXFlow = !0
    }
    return {
        value: s,
        configurable: o ? e.isPlainObject_ : !0,
        enumerable: !1,
        writable: !o
    }
}
function mc(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: IS,
        extend_: PS,
        decorate_20223_: NS
    }
}
function IS(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1
}
function PS(e, t, n, r) {
    return FS(e, this, t, n),
    e.defineComputedProperty_(t, Yn({}, this.options_, {
        get: n.get,
        set: n.set
    }), r)
}
function NS(e, t) {
    var n = this
      , r = t.name
      , i = t.addInitializer;
    return i(function() {
        var o = or(this)[D]
          , s = Yn({}, n.options_, {
            get: e,
            context: this
        });
        s.name || (s.name = "ObservableObject." + r.toString()),
        o.values_.set(r, new qr(s))
    }),
    function() {
        return this[D].getObservablePropValue_(r)
    }
}
function FS(e, t, n, r) {
    t.annotationType_,
    r.get
}
function pa(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: LS,
        extend_: US,
        decorate_20223_: jS
    }
}
function LS(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1
}
function US(e, t, n, r) {
    var i, o;
    return MS(e, this),
    e.defineObservableProperty_(t, n.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : Xn, r)
}
function jS(e, t) {
    var n = this
      , r = t.kind
      , i = t.name
      , o = new WeakSet;
    function s(a, l) {
        var f, d, g = or(a)[D], p = new zn(l,(f = (d = n.options_) == null ? void 0 : d.enhancer) != null ? f : Xn,"ObservableObject." + i.toString(),!1);
        g.values_.set(i, p),
        o.add(a)
    }
    if (r == "accessor")
        return {
            get: function() {
                return o.has(this) || s(this, e.get.call(this)),
                this[D].getObservablePropValue_(i)
            },
            set: function(l) {
                return o.has(this) || s(this, l),
                this[D].setObservablePropValue_(i, l)
            },
            init: function(l) {
                return o.has(this) || s(this, l),
                l
            }
        }
}
function MS(e, t, n, r) {
    t.annotationType_
}
var DS = "true"
  , VS = Fg();
function Fg(e) {
    return {
        annotationType_: DS,
        options_: e,
        make_: WS,
        extend_: zS,
        decorate_20223_: QS
    }
}
function WS(e, t, n, r) {
    var i, o;
    if (n.get)
        return ha.make_(e, t, n, r);
    if (n.set) {
        var s = $n(t.toString(), n.set);
        return r === e.target_ ? e.defineProperty_(t, {
            configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
            set: s
        }) === null ? 0 : 2 : (jt(r, t, {
            configurable: !0,
            set: s
        }),
        2)
    }
    if (r !== e.target_ && typeof n.value == "function") {
        var a;
        if (bg(n.value)) {
            var l, f = (l = this.options_) != null && l.autoBind ? Hr.bound : Hr;
            return f.make_(e, t, n, r)
        }
        var d = (a = this.options_) != null && a.autoBind ? no.bound : no;
        return d.make_(e, t, n, r)
    }
    var g = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? _e.ref : _e;
    if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
        var p;
        n.value = n.value.bind((p = e.proxy_) != null ? p : e.target_)
    }
    return g.make_(e, t, n, r)
}
function zS(e, t, n, r) {
    var i, o;
    if (n.get)
        return ha.extend_(e, t, n, r);
    if (n.set)
        return e.defineProperty_(t, {
            configurable: P.safeDescriptors ? e.isPlainObject_ : !0,
            set: $n(t.toString(), n.set)
        }, r);
    if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
        var s;
        n.value = n.value.bind((s = e.proxy_) != null ? s : e.target_)
    }
    var a = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? _e.ref : _e;
    return a.extend_(e, t, n, r)
}
function QS(e, t) {
    H("'" + this.annotationType_ + "' cannot be used as a decorator")
}
var KS = "observable"
  , qS = "observable.ref"
  , HS = "observable.shallow"
  , GS = "observable.struct"
  , Lg = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0,
    proxy: !0
};
Object.freeze(Lg);
function Mo(e) {
    return e || Lg
}
var ru = pa(KS)
  , ZS = pa(qS, {
    enhancer: da
})
  , JS = pa(HS, {
    enhancer: wS
})
  , YS = pa(GS, {
    enhancer: SS
})
  , Ug = Mt(ru);
function Do(e) {
    return e.deep === !0 ? Xn : e.deep === !1 ? da : $S(e.defaultDecorator)
}
function XS(e) {
    var t;
    return e ? (t = e.defaultDecorator) != null ? t : Fg(e) : void 0
}
function $S(e) {
    var t, n;
    return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : Xn
}
function jg(e, t, n) {
    if (ho(t))
        return ru.decorate_20223_(e, t);
    if (Jn(t)) {
        oi(e, t, ru);
        return
    }
    return o0(e) ? e : tn(e) ? _e.object(e, t, n) : Array.isArray(e) ? _e.array(e, t) : ii(e) ? _e.map(e, t) : po(e) ? _e.set(e, t) : typeof e == "object" && e !== null ? e : _e.box(e, t)
}
Eg(jg, Ug);
var e2 = {
    box: function(t, n) {
        var r = Mo(n);
        return new zn(t,Do(r),r.name,!0,r.equals)
    },
    array: function(t, n) {
        var r = Mo(n);
        return (P.useProxies === !1 || r.proxy === !1 ? Y2 : V2)(t, Do(r), r.name)
    },
    map: function(t, n) {
        var r = Mo(n);
        return new u0(t,Do(r),r.name)
    },
    set: function(t, n) {
        var r = Mo(n);
        return new d0(t,Do(r),r.name)
    },
    object: function(t, n, r) {
        return In(function() {
            return n0(P.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1 ? or({}, r) : U2({}, r), t, n)
        })
    },
    ref: Mt(ZS),
    shallow: Mt(JS),
    deep: Ug,
    struct: Mt(YS)
}
  , _e = Eg(jg, e2)
  , Mg = "computed"
  , t2 = "computed.struct"
  , iu = mc(Mg)
  , n2 = mc(t2, {
    equals: Is.structural
})
  , ha = function(t, n) {
    if (ho(n))
        return iu.decorate_20223_(t, n);
    if (Jn(n))
        return oi(t, n, iu);
    if (tn(t))
        return Mt(mc(Mg, t));
    var r = tn(n) ? n : {};
    return r.get = t,
    r.name || (r.name = t.name || ""),
    new qr(r)
};
Object.assign(ha, iu);
ha.struct = Mt(n2);
var pd, hd, Ps = 0, r2 = 1, i2 = (pd = (hd = Ts(function() {}, "name")) == null ? void 0 : hd.configurable) != null ? pd : !1, gd = {
    value: "action",
    configurable: !0,
    writable: !1,
    enumerable: !1
};
function $n(e, t, n, r) {
    n === void 0 && (n = !1);
    function i() {
        return o2(e, n, t, r || this, arguments)
    }
    return i.isMobxAction = !0,
    i.toString = function() {
        return t.toString()
    }
    ,
    i2 && (gd.value = e,
    jt(i, "name", gd)),
    i
}
function o2(e, t, n, r, i) {
    var o = s2(e, t);
    try {
        return n.apply(r, i)
    } catch (s) {
        throw o.error_ = s,
        s
    } finally {
        a2(o)
    }
}
function s2(e, t, n, r) {
    var i = !1
      , o = 0
      , s = P.trackingDerivation
      , a = !t || !s;
    ft();
    var l = P.allowStateChanges;
    a && (rr(),
    l = vc(!0));
    var f = Ac(!0)
      , d = {
        runAsAction_: a,
        prevDerivation_: s,
        prevAllowStateChanges_: l,
        prevAllowStateReads_: f,
        notifySpy_: i,
        startTime_: o,
        actionId_: r2++,
        parentActionId_: Ps
    };
    return Ps = d.actionId_,
    d
}
function a2(e) {
    Ps !== e.actionId_ && H(30),
    Ps = e.parentActionId_,
    e.error_ !== void 0 && (P.suppressReactionErrors = !0),
    yc(e.prevAllowStateChanges_),
    Li(e.prevAllowStateReads_),
    dt(),
    e.runAsAction_ && Zt(e.prevDerivation_),
    P.suppressReactionErrors = !1
}
function vc(e) {
    var t = P.allowStateChanges;
    return P.allowStateChanges = e,
    t
}
function yc(e) {
    P.allowStateChanges = e
}
var Dg;
Dg = Symbol.toPrimitive;
var zn = function(e) {
    Bg(t, e);
    function t(r, i, o, s, a) {
        var l;
        return o === void 0 && (o = "ObservableValue"),
        a === void 0 && (a = Is.default),
        l = e.call(this, o) || this,
        l.enhancer = void 0,
        l.name_ = void 0,
        l.equals = void 0,
        l.hasUnreportedChange_ = !1,
        l.interceptors_ = void 0,
        l.changeListeners_ = void 0,
        l.value_ = void 0,
        l.dehancer = void 0,
        l.enhancer = i,
        l.name_ = o,
        l.equals = a,
        l.value_ = i(r, void 0, o),
        l
    }
    var n = t.prototype;
    return n.dehanceValue = function(i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i
    }
    ,
    n.set = function(i) {
        this.value_,
        i = this.prepareNewValue_(i),
        i !== P.UNCHANGED && this.setNewValue_(i)
    }
    ,
    n.prepareNewValue_ = function(i) {
        if (lt(this)) {
            var o = ut(this, {
                object: this,
                type: Dt,
                newValue: i
            });
            if (!o)
                return P.UNCHANGED;
            i = o.newValue
        }
        return i = this.enhancer(i, this.value_, this.name_),
        this.equals(this.value_, i) ? P.UNCHANGED : i
    }
    ,
    n.setNewValue_ = function(i) {
        var o = this.value_;
        this.value_ = i,
        this.reportChanged(),
        Et(this) && xt(this, {
            type: Dt,
            object: this,
            newValue: i,
            oldValue: o
        })
    }
    ,
    n.get = function() {
        return this.reportObserved(),
        this.dehanceValue(this.value_)
    }
    ,
    n.intercept_ = function(i) {
        return vo(this, i)
    }
    ,
    n.observe_ = function(i, o) {
        return o && i({
            observableKind: "value",
            debugObjectName: this.name_,
            object: this,
            type: Dt,
            newValue: this.value_,
            oldValue: void 0
        }),
        yo(this, i)
    }
    ,
    n.raw = function() {
        return this.value_
    }
    ,
    n.toJSON = function() {
        return this.get()
    }
    ,
    n.toString = function() {
        return this.name_ + "[" + this.value_ + "]"
    }
    ,
    n.valueOf = function() {
        return Rg(this.get())
    }
    ,
    n[Dg] = function() {
        return this.valueOf()
    }
    ,
    t
}(go), Vg;
Vg = Symbol.toPrimitive;
var qr = function() {
    function e(n) {
        this.dependenciesState_ = G.NOT_TRACKING_,
        this.observing_ = [],
        this.newObserving_ = null,
        this.isBeingObserved_ = !1,
        this.isPendingUnobservation_ = !1,
        this.observers_ = new Set,
        this.diffValue_ = 0,
        this.runId_ = 0,
        this.lastAccessedBy_ = 0,
        this.lowestObserverState_ = G.UP_TO_DATE_,
        this.unboundDepsCount_ = 0,
        this.value_ = new Fs(null),
        this.name_ = void 0,
        this.triggeredBy_ = void 0,
        this.isComputing_ = !1,
        this.isRunningSetter_ = !1,
        this.derivation = void 0,
        this.setter_ = void 0,
        this.isTracing_ = Ns.NONE,
        this.scope_ = void 0,
        this.equals_ = void 0,
        this.requiresReaction_ = void 0,
        this.keepAlive_ = void 0,
        this.onBOL = void 0,
        this.onBUOL = void 0,
        n.get || H(31),
        this.derivation = n.get,
        this.name_ = n.name || "ComputedValue",
        n.set && (this.setter_ = $n("ComputedValue-setter", n.set)),
        this.equals_ = n.equals || (n.compareStructural || n.struct ? Is.structural : Is.default),
        this.scope_ = n.context,
        this.requiresReaction_ = n.requiresReaction,
        this.keepAlive_ = !!n.keepAlive
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function() {
        d2(this)
    }
    ,
    t.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(r) {
            return r()
        })
    }
    ,
    t.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(r) {
            return r()
        })
    }
    ,
    t.get = function() {
        if (this.isComputing_ && H(32, this.name_, this.derivation),
        P.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
            ou(this) && (this.warnAboutUntrackedRead_(),
            ft(),
            this.value_ = this.computeValue_(!1),
            dt());
        else if (Gg(this),
        ou(this)) {
            var r = P.trackingContext;
            this.keepAlive_ && !r && (P.trackingContext = this),
            this.trackAndCompute() && f2(this),
            P.trackingContext = r
        }
        var i = this.value_;
        if (es(i))
            throw i.cause;
        return i
    }
    ,
    t.set = function(r) {
        if (this.setter_) {
            this.isRunningSetter_ && H(33, this.name_),
            this.isRunningSetter_ = !0;
            try {
                this.setter_.call(this.scope_, r)
            } finally {
                this.isRunningSetter_ = !1
            }
        } else
            H(34, this.name_)
    }
    ,
    t.trackAndCompute = function() {
        var r = this.value_
          , i = this.dependenciesState_ === G.NOT_TRACKING_
          , o = this.computeValue_(!0)
          , s = i || es(r) || es(o) || !this.equals_(r, o);
        return s && (this.value_ = o),
        s
    }
    ,
    t.computeValue_ = function(r) {
        this.isComputing_ = !0;
        var i = vc(!1), o;
        if (r)
            o = Wg(this, this.derivation, this.scope_);
        else if (P.disableErrorBoundaries === !0)
            o = this.derivation.call(this.scope_);
        else
            try {
                o = this.derivation.call(this.scope_)
            } catch (s) {
                o = new Fs(s)
            }
        return yc(i),
        this.isComputing_ = !1,
        o
    }
    ,
    t.suspend_ = function() {
        this.keepAlive_ || (su(this),
        this.value_ = void 0)
    }
    ,
    t.observe_ = function(r, i) {
        var o = this
          , s = !0
          , a = void 0;
        return E2(function() {
            var l = o.get();
            if (!s || i) {
                var f = rr();
                r({
                    observableKind: "computed",
                    debugObjectName: o.name_,
                    type: Dt,
                    object: o,
                    newValue: l,
                    oldValue: a
                }),
                Zt(f)
            }
            s = !1,
            a = l
        })
    }
    ,
    t.warnAboutUntrackedRead_ = function() {}
    ,
    t.toString = function() {
        return this.name_ + "[" + this.derivation.toString() + "]"
    }
    ,
    t.valueOf = function() {
        return Rg(this.get())
    }
    ,
    t[Vg] = function() {
        return this.valueOf()
    }
    ,
    e
}(), ga = nr("ComputedValue", qr), G;
(function(e) {
    e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_",
    e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_",
    e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_",
    e[e.STALE_ = 2] = "STALE_"
}
)(G || (G = {}));
var Ns;
(function(e) {
    e[e.NONE = 0] = "NONE",
    e[e.LOG = 1] = "LOG",
    e[e.BREAK = 2] = "BREAK"
}
)(Ns || (Ns = {}));
var Fs = function(t) {
    this.cause = void 0,
    this.cause = t
};
function es(e) {
    return e instanceof Fs
}
function ou(e) {
    switch (e.dependenciesState_) {
    case G.UP_TO_DATE_:
        return !1;
    case G.NOT_TRACKING_:
    case G.STALE_:
        return !0;
    case G.POSSIBLY_STALE_:
        {
            for (var t = Ac(!0), n = rr(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                var s = r[o];
                if (ga(s)) {
                    if (P.disableErrorBoundaries)
                        s.get();
                    else
                        try {
                            s.get()
                        } catch {
                            return Zt(n),
                            Li(t),
                            !0
                        }
                    if (e.dependenciesState_ === G.STALE_)
                        return Zt(n),
                        Li(t),
                        !0
                }
            }
            return Qg(e),
            Zt(n),
            Li(t),
            !1
        }
    }
}
function Wg(e, t, n) {
    var r = Ac(!0);
    Qg(e),
    e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length),
    e.unboundDepsCount_ = 0,
    e.runId_ = ++P.runId;
    var i = P.trackingDerivation;
    P.trackingDerivation = e,
    P.inBatch++;
    var o;
    if (P.disableErrorBoundaries === !0)
        o = t.call(n);
    else
        try {
            o = t.call(n)
        } catch (s) {
            o = new Fs(s)
        }
    return P.inBatch--,
    P.trackingDerivation = i,
    l2(e),
    Li(r),
    o
}
function l2(e) {
    for (var t = e.observing_, n = e.observing_ = e.newObserving_, r = G.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, s = 0; s < o; s++) {
        var a = n[s];
        a.diffValue_ === 0 && (a.diffValue_ = 1,
        i !== s && (n[i] = a),
        i++),
        a.dependenciesState_ > r && (r = a.dependenciesState_)
    }
    for (n.length = i,
    e.newObserving_ = null,
    o = t.length; o--; ) {
        var l = t[o];
        l.diffValue_ === 0 && qg(l, e),
        l.diffValue_ = 0
    }
    for (; i--; ) {
        var f = n[i];
        f.diffValue_ === 1 && (f.diffValue_ = 0,
        c2(f, e))
    }
    r !== G.UP_TO_DATE_ && (e.dependenciesState_ = r,
    e.onBecomeStale_())
}
function su(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; )
        qg(t[n], e);
    e.dependenciesState_ = G.NOT_TRACKING_
}
function zg(e) {
    var t = rr();
    try {
        return e()
    } finally {
        Zt(t)
    }
}
function rr() {
    var e = P.trackingDerivation;
    return P.trackingDerivation = null,
    e
}
function Zt(e) {
    P.trackingDerivation = e
}
function Ac(e) {
    var t = P.allowStateReads;
    return P.allowStateReads = e,
    t
}
function Li(e) {
    P.allowStateReads = e
}
function Qg(e) {
    if (e.dependenciesState_ !== G.UP_TO_DATE_) {
        e.dependenciesState_ = G.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = G.UP_TO_DATE_
    }
}
var ts = function() {
    this.version = 6,
    this.UNCHANGED = {},
    this.trackingDerivation = null,
    this.trackingContext = null,
    this.runId = 0,
    this.mobxGuid = 0,
    this.inBatch = 0,
    this.pendingUnobservations = [],
    this.pendingReactions = [],
    this.isRunningReactions = !1,
    this.allowStateChanges = !1,
    this.allowStateReads = !0,
    this.enforceActions = !0,
    this.spyListeners = [],
    this.globalReactionErrorHandlers = [],
    this.computedRequiresReaction = !1,
    this.reactionRequiresObservable = !1,
    this.observableRequiresReaction = !1,
    this.disableErrorBoundaries = !1,
    this.suppressReactionErrors = !1,
    this.useProxies = !0,
    this.verifyProxies = !1,
    this.safeDescriptors = !0
}
  , ns = !0
  , Kg = !1
  , P = function() {
    var e = pc();
    return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ns = !1),
    e.__mobxGlobals && e.__mobxGlobals.version !== new ts().version && (ns = !1),
    ns ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1,
    e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
    e.__mobxGlobals) : (e.__mobxInstanceCount = 1,
    e.__mobxGlobals = new ts) : (setTimeout(function() {
        Kg || H(35)
    }, 1),
    new ts)
}();
function u2() {
    if ((P.pendingReactions.length || P.inBatch || P.isRunningReactions) && H(36),
    Kg = !0,
    ns) {
        var e = pc();
        --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0),
        P = new ts
    }
}
function c2(e, t) {
    e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_)
}
function qg(e, t) {
    e.observers_.delete(t),
    e.observers_.size === 0 && Hg(e)
}
function Hg(e) {
    e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0,
    P.pendingUnobservations.push(e))
}
function ft() {
    P.inBatch++
}
function dt() {
    if (--P.inBatch === 0) {
        Jg();
        for (var e = P.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            n.isPendingUnobservation_ = !1,
            n.observers_.size === 0 && (n.isBeingObserved_ && (n.isBeingObserved_ = !1,
            n.onBUO()),
            n instanceof qr && n.suspend_())
        }
        P.pendingUnobservations = []
    }
}
function Gg(e) {
    var t = P.trackingDerivation;
    return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_,
    t.newObserving_[t.unboundDepsCount_++] = e,
    !e.isBeingObserved_ && P.trackingContext && (e.isBeingObserved_ = !0,
    e.onBO())),
    e.isBeingObserved_) : (e.observers_.size === 0 && P.inBatch > 0 && Hg(e),
    !1)
}
function Zg(e) {
    e.lowestObserverState_ !== G.STALE_ && (e.lowestObserverState_ = G.STALE_,
    e.observers_.forEach(function(t) {
        t.dependenciesState_ === G.UP_TO_DATE_ && t.onBecomeStale_(),
        t.dependenciesState_ = G.STALE_
    }))
}
function f2(e) {
    e.lowestObserverState_ !== G.STALE_ && (e.lowestObserverState_ = G.STALE_,
    e.observers_.forEach(function(t) {
        t.dependenciesState_ === G.POSSIBLY_STALE_ ? t.dependenciesState_ = G.STALE_ : t.dependenciesState_ === G.UP_TO_DATE_ && (e.lowestObserverState_ = G.UP_TO_DATE_)
    }))
}
function d2(e) {
    e.lowestObserverState_ === G.UP_TO_DATE_ && (e.lowestObserverState_ = G.POSSIBLY_STALE_,
    e.observers_.forEach(function(t) {
        t.dependenciesState_ === G.UP_TO_DATE_ && (t.dependenciesState_ = G.POSSIBLY_STALE_,
        t.onBecomeStale_())
    }))
}
var Ls = function() {
    function e(n, r, i, o) {
        n === void 0 && (n = "Reaction"),
        this.name_ = void 0,
        this.onInvalidate_ = void 0,
        this.errorHandler_ = void 0,
        this.requiresObservable_ = void 0,
        this.observing_ = [],
        this.newObserving_ = [],
        this.dependenciesState_ = G.NOT_TRACKING_,
        this.diffValue_ = 0,
        this.runId_ = 0,
        this.unboundDepsCount_ = 0,
        this.isDisposed_ = !1,
        this.isScheduled_ = !1,
        this.isTrackPending_ = !1,
        this.isRunning_ = !1,
        this.isTracing_ = Ns.NONE,
        this.name_ = n,
        this.onInvalidate_ = r,
        this.errorHandler_ = i,
        this.requiresObservable_ = o
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function() {
        this.schedule_()
    }
    ,
    t.schedule_ = function() {
        this.isScheduled_ || (this.isScheduled_ = !0,
        P.pendingReactions.push(this),
        Jg())
    }
    ,
    t.isScheduled = function() {
        return this.isScheduled_
    }
    ,
    t.runReaction_ = function() {
        if (!this.isDisposed_) {
            ft(),
            this.isScheduled_ = !1;
            var r = P.trackingContext;
            if (P.trackingContext = this,
            ou(this)) {
                this.isTrackPending_ = !0;
                try {
                    this.onInvalidate_()
                } catch (i) {
                    this.reportExceptionInDerivation_(i)
                }
            }
            P.trackingContext = r,
            dt()
        }
    }
    ,
    t.track = function(r) {
        if (!this.isDisposed_) {
            ft(),
            this.isRunning_ = !0;
            var i = P.trackingContext;
            P.trackingContext = this;
            var o = Wg(this, r, void 0);
            P.trackingContext = i,
            this.isRunning_ = !1,
            this.isTrackPending_ = !1,
            this.isDisposed_ && su(this),
            es(o) && this.reportExceptionInDerivation_(o.cause),
            dt()
        }
    }
    ,
    t.reportExceptionInDerivation_ = function(r) {
        var i = this;
        if (this.errorHandler_) {
            this.errorHandler_(r, this);
            return
        }
        if (P.disableErrorBoundaries)
            throw r;
        var o = "[mobx] uncaught error in '" + this + "'";
        P.suppressReactionErrors || console.error(o, r),
        P.globalReactionErrorHandlers.forEach(function(s) {
            return s(r, i)
        })
    }
    ,
    t.dispose = function() {
        this.isDisposed_ || (this.isDisposed_ = !0,
        this.isRunning_ || (ft(),
        su(this),
        dt()))
    }
    ,
    t.getDisposer_ = function(r) {
        var i = this
          , o = function s() {
            i.dispose(),
            r == null || r.removeEventListener == null || r.removeEventListener("abort", s)
        };
        return r == null || r.addEventListener == null || r.addEventListener("abort", o),
        o[D] = this,
        o
    }
    ,
    t.toString = function() {
        return "Reaction[" + this.name_ + "]"
    }
    ,
    t.trace = function(r) {}
    ,
    e
}()
  , p2 = 100
  , au = function(t) {
    return t()
};
function Jg() {
    P.inBatch > 0 || P.isRunningReactions || au(h2)
}
function h2() {
    P.isRunningReactions = !0;
    for (var e = P.pendingReactions, t = 0; e.length > 0; ) {
        ++t === p2 && (console.error("[mobx] cycle in reaction: " + e[0]),
        e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_()
    }
    P.isRunningReactions = !1
}
var Us = nr("Reaction", Ls);
function g2(e) {
    var t = au;
    au = function(r) {
        return e(function() {
            return t(r)
        })
    }
}
function Ui() {
    return !1
}
function m2(e) {
    return console.warn("[mobx.spy] Is a no-op in production builds"),
    function() {}
}
var Yg = "action"
  , v2 = "action.bound"
  , Xg = "autoAction"
  , y2 = "autoAction.bound"
  , A2 = "<unnamed action>"
  , lu = mo(Yg)
  , w2 = mo(v2, {
    bound: !0
})
  , uu = mo(Xg, {
    autoAction: !0
})
  , S2 = mo(y2, {
    autoAction: !0,
    bound: !0
});
function $g(e) {
    var t = function(r, i) {
        if (_t(r))
            return $n(r.name || A2, r, e);
        if (_t(i))
            return $n(r, i, e);
        if (ho(i))
            return (e ? uu : lu).decorate_20223_(r, i);
        if (Jn(i))
            return oi(r, i, e ? uu : lu);
        if (Jn(r))
            return Mt(mo(e ? Xg : Yg, {
                name: r,
                autoAction: e
            }))
    };
    return t
}
var Br = $g(!1);
Object.assign(Br, lu);
var no = $g(!0);
Object.assign(no, uu);
Br.bound = Mt(w2);
no.bound = Mt(S2);
function ma(e) {
    return _t(e) && e.isMobxAction === !0
}
function E2(e, t) {
    var n, r, i, o, s;
    t === void 0 && (t = xg);
    var a = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun", l = !t.scheduler && !t.delay, f;
    if (l)
        f = new Ls(a,function() {
            this.track(p)
        }
        ,t.onError,t.requiresObservable);
    else {
        var d = C2(t)
          , g = !1;
        f = new Ls(a,function() {
            g || (g = !0,
            d(function() {
                g = !1,
                f.isDisposed_ || f.track(p)
            }))
        }
        ,t.onError,t.requiresObservable)
    }
    function p() {
        e(f)
    }
    return (i = t) != null && (o = i.signal) != null && o.aborted || f.schedule_(),
    f.getDisposer_((s = t) == null ? void 0 : s.signal)
}
var x2 = function(t) {
    return t()
};
function C2(e) {
    return e.scheduler ? e.scheduler : e.delay ? function(t) {
        return setTimeout(t, e.delay)
    }
    : x2
}
var _2 = "onBO"
  , b2 = "onBUO";
function k2(e, t, n) {
    return t0(_2, e, t, n)
}
function e0(e, t, n) {
    return t0(b2, e, t, n)
}
function t0(e, t, n, r) {
    var i = typeof r == "function" ? Gr(t, n) : Gr(t)
      , o = _t(r) ? r : n
      , s = e + "L";
    return i[s] ? i[s].add(o) : i[s] = new Set([o]),
    function() {
        var a = i[s];
        a && (a.delete(o),
        a.size === 0 && delete i[s])
    }
}
var O2 = "never"
  , Vo = "always"
  , R2 = "observed";
function B2(e) {
    e.isolateGlobalState === !0 && u2();
    var t = e.useProxies
      , n = e.enforceActions;
    if (t !== void 0 && (P.useProxies = t === Vo ? !0 : t === O2 ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (P.verifyProxies = !0),
    n !== void 0) {
        var r = n === Vo ? Vo : n === R2;
        P.enforceActions = r,
        P.allowStateChanges = !(r === !0 || r === Vo)
    }
    ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
        i in e && (P[i] = !!e[i])
    }),
    P.allowStateReads = !P.observableRequiresReaction,
    e.reactionScheduler && g2(e.reactionScheduler)
}
function n0(e, t, n, r) {
    var i = fS(t);
    return In(function() {
        var o = or(e, r)[D];
        Kr(i).forEach(function(s) {
            o.extend_(s, i[s], n && s in n ? n[s] : !0)
        })
    }),
    e
}
function T2(e, t) {
    return r0(Gr(e, t))
}
function r0(e) {
    var t = {
        name: e.name_
    };
    return e.observing_ && e.observing_.length > 0 && (t.dependencies = I2(e.observing_).map(r0)),
    t
}
function I2(e) {
    return Array.from(new Set(e))
}
var P2 = 0;
function i0() {
    this.message = "FLOW_CANCELLED"
}
i0.prototype = Object.create(Error.prototype);
var Xa = Pg("flow")
  , N2 = Pg("flow.bound", {
    bound: !0
})
  , Hr = Object.assign(function(t, n) {
    if (ho(n))
        return Xa.decorate_20223_(t, n);
    if (Jn(n))
        return oi(t, n, Xa);
    var r = t
      , i = r.name || "<unnamed flow>"
      , o = function() {
        var a = this, l = arguments, f = ++P2, d = Br(i + " - runid: " + f + " - init", r).apply(a, l), g, p = void 0, A = new Promise(function(E, _) {
            var I = 0;
            g = _;
            function y(x) {
                p = void 0;
                var k;
                try {
                    k = Br(i + " - runid: " + f + " - yield " + I++, d.next).call(d, x)
                } catch (O) {
                    return _(O)
                }
                S(k)
            }
            function v(x) {
                p = void 0;
                var k;
                try {
                    k = Br(i + " - runid: " + f + " - yield " + I++, d.throw).call(d, x)
                } catch (O) {
                    return _(O)
                }
                S(k)
            }
            function S(x) {
                if (_t(x == null ? void 0 : x.then)) {
                    x.then(S, _);
                    return
                }
                return x.done ? E(x.value) : (p = Promise.resolve(x.value),
                p.then(y, v))
            }
            y(void 0)
        }
        );
        return A.cancel = Br(i + " - runid: " + f + " - cancel", function() {
            try {
                p && md(p);
                var E = d.return(void 0)
                  , _ = Promise.resolve(E.value);
                _.then(Or, Or),
                md(_),
                g(new i0)
            } catch (I) {
                g(I)
            }
        }),
        A
    };
    return o.isMobXFlow = !0,
    o
}, Xa);
Hr.bound = Mt(N2);
function md(e) {
    _t(e.cancel) && e.cancel()
}
function ro(e) {
    return (e == null ? void 0 : e.isMobXFlow) === !0
}
function F2(e, t) {
    return e ? t !== void 0 ? io(e) ? e[D].values_.has(t) : !1 : io(e) || !!e[D] || gc(e) || Us(e) || ga(e) : !1
}
function o0(e) {
    return F2(e)
}
function Qt(e, t) {
    t === void 0 && (t = void 0),
    ft();
    try {
        return e.apply(t)
    } finally {
        dt()
    }
}
function hr(e) {
    return e[D]
}
var L2 = {
    has: function(t, n) {
        return hr(t).has_(n)
    },
    get: function(t, n) {
        return hr(t).get_(n)
    },
    set: function(t, n, r) {
        var i;
        return Jn(n) ? (i = hr(t).set_(n, r, !0)) != null ? i : !0 : !1
    },
    deleteProperty: function(t, n) {
        var r;
        return Jn(n) ? (r = hr(t).delete_(n, !0)) != null ? r : !0 : !1
    },
    defineProperty: function(t, n, r) {
        var i;
        return (i = hr(t).defineProperty_(n, r)) != null ? i : !0
    },
    ownKeys: function(t) {
        return hr(t).ownKeys_()
    },
    preventExtensions: function(t) {
        H(13)
    }
};
function U2(e, t) {
    var n, r;
    return Cg(),
    e = or(e, t),
    (r = (n = e[D]).proxy_) != null ? r : n.proxy_ = new Proxy(e,L2)
}
function lt(e) {
    return e.interceptors_ !== void 0 && e.interceptors_.length > 0
}
function vo(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return n.push(t),
    _g(function() {
        var r = n.indexOf(t);
        r !== -1 && n.splice(r, 1)
    })
}
function ut(e, t) {
    var n = rr();
    try {
        for (var r = [].concat(e.interceptors_ || []), i = 0, o = r.length; i < o && (t = r[i](t),
        t && !t.type && H(14),
        !!t); i++)
            ;
        return t
    } finally {
        Zt(n)
    }
}
function Et(e) {
    return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0
}
function yo(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return n.push(t),
    _g(function() {
        var r = n.indexOf(t);
        r !== -1 && n.splice(r, 1)
    })
}
function xt(e, t) {
    var n = rr()
      , r = e.changeListeners_;
    if (r) {
        r = r.slice();
        for (var i = 0, o = r.length; i < o; i++)
            r[i](t);
        Zt(n)
    }
}
function j2(e, t, n) {
    return In(function() {
        var r, i = or(e, n)[D];
        (r = t) != null || (t = gS(e)),
        Kr(t).forEach(function(o) {
            return i.make_(o, t[o])
        })
    }),
    e
}
var $a = Symbol("mobx-keys");
function KE(e, t, n) {
    return tn(e) ? n0(e, e, t, n) : (In(function() {
        var r = or(e, n)[D];
        if (!e[$a]) {
            var i = Object.getPrototypeOf(e)
              , o = new Set([].concat(Kr(e), Kr(i)));
            o.delete("constructor"),
            o.delete(D),
            fo(i, $a, o)
        }
        e[$a].forEach(function(s) {
            return r.make_(s, t && s in t ? t[s] : !0)
        })
    }),
    e)
}
var vd = "splice"
  , Dt = "update"
  , M2 = 1e4
  , D2 = {
    get: function(t, n) {
        var r = t[D];
        return n === D ? r : n === "length" ? r.getArrayLength_() : typeof n == "string" && !isNaN(n) ? r.get_(parseInt(n)) : Gt(js, n) ? js[n] : t[n]
    },
    set: function(t, n, r) {
        var i = t[D];
        return n === "length" && i.setArrayLength_(r),
        typeof n == "symbol" || isNaN(n) ? t[n] = r : i.set_(parseInt(n), r),
        !0
    },
    preventExtensions: function() {
        H(15)
    }
}
  , wc = function() {
    function e(n, r, i, o) {
        n === void 0 && (n = "ObservableArray"),
        this.owned_ = void 0,
        this.legacyMode_ = void 0,
        this.atom_ = void 0,
        this.values_ = [],
        this.interceptors_ = void 0,
        this.changeListeners_ = void 0,
        this.enhancer_ = void 0,
        this.dehancer = void 0,
        this.proxy_ = void 0,
        this.lastKnownLength_ = 0,
        this.owned_ = i,
        this.legacyMode_ = o,
        this.atom_ = new go(n),
        this.enhancer_ = function(s, a) {
            return r(s, a, "ObservableArray[..]")
        }
    }
    var t = e.prototype;
    return t.dehanceValue_ = function(r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r
    }
    ,
    t.dehanceValues_ = function(r) {
        return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r
    }
    ,
    t.intercept_ = function(r) {
        return vo(this, r)
    }
    ,
    t.observe_ = function(r, i) {
        return i === void 0 && (i = !1),
        i && r({
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: "splice",
            index: 0,
            added: this.values_.slice(),
            addedCount: this.values_.length,
            removed: [],
            removedCount: 0
        }),
        yo(this, r)
    }
    ,
    t.getArrayLength_ = function() {
        return this.atom_.reportObserved(),
        this.values_.length
    }
    ,
    t.setArrayLength_ = function(r) {
        (typeof r != "number" || isNaN(r) || r < 0) && H("Out of range: " + r);
        var i = this.values_.length;
        if (r !== i)
            if (r > i) {
                for (var o = new Array(r - i), s = 0; s < r - i; s++)
                    o[s] = void 0;
                this.spliceWithArray_(i, 0, o)
            } else
                this.spliceWithArray_(r, i - r)
    }
    ,
    t.updateArrayLength_ = function(r, i) {
        r !== this.lastKnownLength_ && H(16),
        this.lastKnownLength_ += i,
        this.legacyMode_ && i > 0 && m0(r + i + 1)
    }
    ,
    t.spliceWithArray_ = function(r, i, o) {
        var s = this;
        this.atom_;
        var a = this.values_.length;
        if (r === void 0 ? r = 0 : r > a ? r = a : r < 0 && (r = Math.max(0, a + r)),
        arguments.length === 1 ? i = a - r : i == null ? i = 0 : i = Math.max(0, Math.min(i, a - r)),
        o === void 0 && (o = tu),
        lt(this)) {
            var l = ut(this, {
                object: this.proxy_,
                type: vd,
                index: r,
                removedCount: i,
                added: o
            });
            if (!l)
                return tu;
            i = l.removedCount,
            o = l.added
        }
        if (o = o.length === 0 ? o : o.map(function(g) {
            return s.enhancer_(g, void 0)
        }),
        this.legacyMode_) {
            var f = o.length - i;
            this.updateArrayLength_(a, f)
        }
        var d = this.spliceItemsIntoValues_(r, i, o);
        return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(r, o, d),
        this.dehanceValues_(d)
    }
    ,
    t.spliceItemsIntoValues_ = function(r, i, o) {
        if (o.length < M2) {
            var s;
            return (s = this.values_).splice.apply(s, [r, i].concat(o))
        } else {
            var a = this.values_.slice(r, r + i)
              , l = this.values_.slice(r + i);
            this.values_.length += o.length - i;
            for (var f = 0; f < o.length; f++)
                this.values_[r + f] = o[f];
            for (var d = 0; d < l.length; d++)
                this.values_[r + o.length + d] = l[d];
            return a
        }
    }
    ,
    t.notifyArrayChildUpdate_ = function(r, i, o) {
        var s = !this.owned_ && Ui()
          , a = Et(this)
          , l = a || s ? {
            observableKind: "array",
            object: this.proxy_,
            type: Dt,
            debugObjectName: this.atom_.name_,
            index: r,
            newValue: i,
            oldValue: o
        } : null;
        this.atom_.reportChanged(),
        a && xt(this, l)
    }
    ,
    t.notifyArraySplice_ = function(r, i, o) {
        var s = !this.owned_ && Ui()
          , a = Et(this)
          , l = a || s ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: vd,
            index: r,
            removed: o,
            added: i,
            removedCount: o.length,
            addedCount: i.length
        } : null;
        this.atom_.reportChanged(),
        a && xt(this, l)
    }
    ,
    t.get_ = function(r) {
        if (this.legacyMode_ && r >= this.values_.length) {
            console.warn("[mobx] Out of bounds read: " + r);
            return
        }
        return this.atom_.reportObserved(),
        this.dehanceValue_(this.values_[r])
    }
    ,
    t.set_ = function(r, i) {
        var o = this.values_;
        if (this.legacyMode_ && r > o.length && H(17, r, o.length),
        r < o.length) {
            this.atom_;
            var s = o[r];
            if (lt(this)) {
                var a = ut(this, {
                    type: Dt,
                    object: this.proxy_,
                    index: r,
                    newValue: i
                });
                if (!a)
                    return;
                i = a.newValue
            }
            i = this.enhancer_(i, s);
            var l = i !== s;
            l && (o[r] = i,
            this.notifyArrayChildUpdate_(r, i, s))
        } else {
            for (var f = new Array(r + 1 - o.length), d = 0; d < f.length - 1; d++)
                f[d] = void 0;
            f[f.length - 1] = i,
            this.spliceWithArray_(o.length, 0, f)
        }
    }
    ,
    e
}();
function V2(e, t, n, r) {
    return n === void 0 && (n = "ObservableArray"),
    r === void 0 && (r = !1),
    Cg(),
    In(function() {
        var i = new wc(n,t,r,!1);
        kg(i.values_, D, i);
        var o = new Proxy(i.values_,D2);
        return i.proxy_ = o,
        e && e.length && i.spliceWithArray_(0, 0, e),
        o
    })
}
var js = {
    clear: function() {
        return this.splice(0)
    },
    replace: function(t) {
        var n = this[D];
        return n.spliceWithArray_(0, n.values_.length, t)
    },
    toJSON: function() {
        return this.slice()
    },
    splice: function(t, n) {
        for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
            i[o - 2] = arguments[o];
        var s = this[D];
        switch (arguments.length) {
        case 0:
            return [];
        case 1:
            return s.spliceWithArray_(t);
        case 2:
            return s.spliceWithArray_(t, n)
        }
        return s.spliceWithArray_(t, n, i)
    },
    spliceWithArray: function(t, n, r) {
        return this[D].spliceWithArray_(t, n, r)
    },
    push: function() {
        for (var t = this[D], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
        return t.spliceWithArray_(t.values_.length, 0, r),
        t.values_.length
    },
    pop: function() {
        return this.splice(Math.max(this[D].values_.length - 1, 0), 1)[0]
    },
    shift: function() {
        return this.splice(0, 1)[0]
    },
    unshift: function() {
        for (var t = this[D], n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
        return t.spliceWithArray_(0, 0, r),
        t.values_.length
    },
    reverse: function() {
        return P.trackingDerivation && H(37, "reverse"),
        this.replace(this.slice().reverse()),
        this
    },
    sort: function() {
        P.trackingDerivation && H(37, "sort");
        var t = this.slice();
        return t.sort.apply(t, arguments),
        this.replace(t),
        this
    },
    remove: function(t) {
        var n = this[D]
          , r = n.dehanceValues_(n.values_).indexOf(t);
        return r > -1 ? (this.splice(r, 1),
        !0) : !1
    }
};
re("at", nt);
re("concat", nt);
re("flat", nt);
re("includes", nt);
re("indexOf", nt);
re("join", nt);
re("lastIndexOf", nt);
re("slice", nt);
re("toString", nt);
re("toLocaleString", nt);
re("toSorted", nt);
re("toSpliced", nt);
re("with", nt);
re("every", kt);
re("filter", kt);
re("find", kt);
re("findIndex", kt);
re("findLast", kt);
re("findLastIndex", kt);
re("flatMap", kt);
re("forEach", kt);
re("map", kt);
re("some", kt);
re("toReversed", kt);
re("reduce", s0);
re("reduceRight", s0);
function re(e, t) {
    typeof Array.prototype[e] == "function" && (js[e] = t(e))
}
function nt(e) {
    return function() {
        var t = this[D];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments)
    }
}
function kt(e) {
    return function(t, n) {
        var r = this
          , i = this[D];
        i.atom_.reportObserved();
        var o = i.dehanceValues_(i.values_);
        return o[e](function(s, a) {
            return t.call(n, s, a, r)
        })
    }
}
function s0(e) {
    return function() {
        var t = this
          , n = this[D];
        n.atom_.reportObserved();
        var r = n.dehanceValues_(n.values_)
          , i = arguments[0];
        return arguments[0] = function(o, s, a) {
            return i(o, s, a, t)
        }
        ,
        r[e].apply(r, arguments)
    }
}
var W2 = nr("ObservableArrayAdministration", wc);
function va(e) {
    return fa(e) && W2(e[D])
}
var a0, l0, z2 = {}, mn = "add", Ms = "delete";
a0 = Symbol.iterator;
l0 = Symbol.toStringTag;
var u0 = function() {
    function e(n, r, i) {
        var o = this;
        r === void 0 && (r = Xn),
        i === void 0 && (i = "ObservableMap"),
        this.enhancer_ = void 0,
        this.name_ = void 0,
        this[D] = z2,
        this.data_ = void 0,
        this.hasMap_ = void 0,
        this.keysAtom_ = void 0,
        this.interceptors_ = void 0,
        this.changeListeners_ = void 0,
        this.dehancer = void 0,
        this.enhancer_ = r,
        this.name_ = i,
        _t(Map) || H(18),
        In(function() {
            o.keysAtom_ = Tg("ObservableMap.keys()"),
            o.data_ = new Map,
            o.hasMap_ = new Map,
            n && o.merge(n)
        })
    }
    var t = e.prototype;
    return t.has_ = function(r) {
        return this.data_.has(r)
    }
    ,
    t.has = function(r) {
        var i = this;
        if (!P.trackingDerivation)
            return this.has_(r);
        var o = this.hasMap_.get(r);
        if (!o) {
            var s = o = new zn(this.has_(r),da,"ObservableMap.key?",!1);
            this.hasMap_.set(r, s),
            e0(s, function() {
                return i.hasMap_.delete(r)
            })
        }
        return o.get()
    }
    ,
    t.set = function(r, i) {
        var o = this.has_(r);
        if (lt(this)) {
            var s = ut(this, {
                type: o ? Dt : mn,
                object: this,
                newValue: i,
                name: r
            });
            if (!s)
                return this;
            i = s.newValue
        }
        return o ? this.updateValue_(r, i) : this.addValue_(r, i),
        this
    }
    ,
    t.delete = function(r) {
        var i = this;
        if (this.keysAtom_,
        lt(this)) {
            var o = ut(this, {
                type: Ms,
                object: this,
                name: r
            });
            if (!o)
                return !1
        }
        if (this.has_(r)) {
            var s = Ui()
              , a = Et(this)
              , l = a || s ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: Ms,
                object: this,
                oldValue: this.data_.get(r).value_,
                name: r
            } : null;
            return Qt(function() {
                var f;
                i.keysAtom_.reportChanged(),
                (f = i.hasMap_.get(r)) == null || f.setNewValue_(!1);
                var d = i.data_.get(r);
                d.setNewValue_(void 0),
                i.data_.delete(r)
            }),
            a && xt(this, l),
            !0
        }
        return !1
    }
    ,
    t.updateValue_ = function(r, i) {
        var o = this.data_.get(r);
        if (i = o.prepareNewValue_(i),
        i !== P.UNCHANGED) {
            var s = Ui()
              , a = Et(this)
              , l = a || s ? {
                observableKind: "map",
                debugObjectName: this.name_,
                type: Dt,
                object: this,
                oldValue: o.value_,
                name: r,
                newValue: i
            } : null;
            o.setNewValue_(i),
            a && xt(this, l)
        }
    }
    ,
    t.addValue_ = function(r, i) {
        var o = this;
        this.keysAtom_,
        Qt(function() {
            var f, d = new zn(i,o.enhancer_,"ObservableMap.key",!1);
            o.data_.set(r, d),
            i = d.value_,
            (f = o.hasMap_.get(r)) == null || f.setNewValue_(!0),
            o.keysAtom_.reportChanged()
        });
        var s = Ui()
          , a = Et(this)
          , l = a || s ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: mn,
            object: this,
            name: r,
            newValue: i
        } : null;
        a && xt(this, l)
    }
    ,
    t.get = function(r) {
        return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0)
    }
    ,
    t.dehanceValue_ = function(r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r
    }
    ,
    t.keys = function() {
        return this.keysAtom_.reportObserved(),
        this.data_.keys()
    }
    ,
    t.values = function() {
        var r = this
          , i = this.keys();
        return oo({
            next: function() {
                var s = i.next()
                  , a = s.done
                  , l = s.value;
                return {
                    done: a,
                    value: a ? void 0 : r.get(l)
                }
            }
        })
    }
    ,
    t.entries = function() {
        var r = this
          , i = this.keys();
        return oo({
            next: function() {
                var s = i.next()
                  , a = s.done
                  , l = s.value;
                return {
                    done: a,
                    value: a ? void 0 : [l, r.get(l)]
                }
            }
        })
    }
    ,
    t[a0] = function() {
        return this.entries()
    }
    ,
    t.forEach = function(r, i) {
        for (var o = Rr(this), s; !(s = o()).done; ) {
            var a = s.value
              , l = a[0]
              , f = a[1];
            r.call(i, f, l, this)
        }
    }
    ,
    t.merge = function(r) {
        var i = this;
        return ir(r) && (r = new Map(r)),
        Qt(function() {
            tn(r) ? cS(r).forEach(function(o) {
                return i.set(o, r[o])
            }) : Array.isArray(r) ? r.forEach(function(o) {
                var s = o[0]
                  , a = o[1];
                return i.set(s, a)
            }) : ii(r) ? (r.constructor !== Map && H(19, r),
            r.forEach(function(o, s) {
                return i.set(s, o)
            })) : r != null && H(20, r)
        }),
        this
    }
    ,
    t.clear = function() {
        var r = this;
        Qt(function() {
            zg(function() {
                for (var i = Rr(r.keys()), o; !(o = i()).done; ) {
                    var s = o.value;
                    r.delete(s)
                }
            })
        })
    }
    ,
    t.replace = function(r) {
        var i = this;
        return Qt(function() {
            for (var o = Q2(r), s = new Map, a = !1, l = Rr(i.data_.keys()), f; !(f = l()).done; ) {
                var d = f.value;
                if (!o.has(d)) {
                    var g = i.delete(d);
                    if (g)
                        a = !0;
                    else {
                        var p = i.data_.get(d);
                        s.set(d, p)
                    }
                }
            }
            for (var A = Rr(o.entries()), E; !(E = A()).done; ) {
                var _ = E.value
                  , I = _[0]
                  , y = _[1]
                  , v = i.data_.has(I);
                if (i.set(I, y),
                i.data_.has(I)) {
                    var S = i.data_.get(I);
                    s.set(I, S),
                    v || (a = !0)
                }
            }
            if (!a)
                if (i.data_.size !== s.size)
                    i.keysAtom_.reportChanged();
                else
                    for (var x = i.data_.keys(), k = s.keys(), O = x.next(), B = k.next(); !O.done; ) {
                        if (O.value !== B.value) {
                            i.keysAtom_.reportChanged();
                            break
                        }
                        O = x.next(),
                        B = k.next()
                    }
            i.data_ = s
        }),
        this
    }
    ,
    t.toString = function() {
        return "[object ObservableMap]"
    }
    ,
    t.toJSON = function() {
        return Array.from(this)
    }
    ,
    t.observe_ = function(r, i) {
        return yo(this, r)
    }
    ,
    t.intercept_ = function(r) {
        return vo(this, r)
    }
    ,
    hc(e, [{
        key: "size",
        get: function() {
            return this.keysAtom_.reportObserved(),
            this.data_.size
        }
    }, {
        key: l0,
        get: function() {
            return "Map"
        }
    }]),
    e
}()
  , ir = nr("ObservableMap", u0);
function Q2(e) {
    if (ii(e) || ir(e))
        return e;
    if (Array.isArray(e))
        return new Map(e);
    if (tn(e)) {
        var t = new Map;
        for (var n in e)
            t.set(n, e[n]);
        return t
    } else
        return H(21, e)
}
var c0, f0, K2 = {};
c0 = Symbol.iterator;
f0 = Symbol.toStringTag;
var d0 = function() {
    function e(n, r, i) {
        var o = this;
        r === void 0 && (r = Xn),
        i === void 0 && (i = "ObservableSet"),
        this.name_ = void 0,
        this[D] = K2,
        this.data_ = new Set,
        this.atom_ = void 0,
        this.changeListeners_ = void 0,
        this.interceptors_ = void 0,
        this.dehancer = void 0,
        this.enhancer_ = void 0,
        this.name_ = i,
        _t(Set) || H(22),
        this.enhancer_ = function(s, a) {
            return r(s, a, i)
        }
        ,
        In(function() {
            o.atom_ = Tg(o.name_),
            n && o.replace(n)
        })
    }
    var t = e.prototype;
    return t.dehanceValue_ = function(r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r
    }
    ,
    t.clear = function() {
        var r = this;
        Qt(function() {
            zg(function() {
                for (var i = Rr(r.data_.values()), o; !(o = i()).done; ) {
                    var s = o.value;
                    r.delete(s)
                }
            })
        })
    }
    ,
    t.forEach = function(r, i) {
        for (var o = Rr(this), s; !(s = o()).done; ) {
            var a = s.value;
            r.call(i, a, a, this)
        }
    }
    ,
    t.add = function(r) {
        var i = this;
        if (this.atom_,
        lt(this)) {
            var o = ut(this, {
                type: mn,
                object: this,
                newValue: r
            });
            if (!o)
                return this
        }
        if (!this.has(r)) {
            Qt(function() {
                i.data_.add(i.enhancer_(r, void 0)),
                i.atom_.reportChanged()
            });
            var s = !1
              , a = Et(this)
              , l = a || s ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: mn,
                object: this,
                newValue: r
            } : null;
            a && xt(this, l)
        }
        return this
    }
    ,
    t.delete = function(r) {
        var i = this;
        if (lt(this)) {
            var o = ut(this, {
                type: Ms,
                object: this,
                oldValue: r
            });
            if (!o)
                return !1
        }
        if (this.has(r)) {
            var s = !1
              , a = Et(this)
              , l = a || s ? {
                observableKind: "set",
                debugObjectName: this.name_,
                type: Ms,
                object: this,
                oldValue: r
            } : null;
            return Qt(function() {
                i.atom_.reportChanged(),
                i.data_.delete(r)
            }),
            a && xt(this, l),
            !0
        }
        return !1
    }
    ,
    t.has = function(r) {
        return this.atom_.reportObserved(),
        this.data_.has(this.dehanceValue_(r))
    }
    ,
    t.entries = function() {
        var r = 0
          , i = Array.from(this.keys())
          , o = Array.from(this.values());
        return oo({
            next: function() {
                var a = r;
                return r += 1,
                a < o.length ? {
                    value: [i[a], o[a]],
                    done: !1
                } : {
                    done: !0
                }
            }
        })
    }
    ,
    t.keys = function() {
        return this.values()
    }
    ,
    t.values = function() {
        this.atom_.reportObserved();
        var r = this
          , i = 0
          , o = Array.from(this.data_.values());
        return oo({
            next: function() {
                return i < o.length ? {
                    value: r.dehanceValue_(o[i++]),
                    done: !1
                } : {
                    done: !0
                }
            }
        })
    }
    ,
    t.replace = function(r) {
        var i = this;
        return si(r) && (r = new Set(r)),
        Qt(function() {
            Array.isArray(r) ? (i.clear(),
            r.forEach(function(o) {
                return i.add(o)
            })) : po(r) ? (i.clear(),
            r.forEach(function(o) {
                return i.add(o)
            })) : r != null && H("Cannot initialize set from " + r)
        }),
        this
    }
    ,
    t.observe_ = function(r, i) {
        return yo(this, r)
    }
    ,
    t.intercept_ = function(r) {
        return vo(this, r)
    }
    ,
    t.toJSON = function() {
        return Array.from(this)
    }
    ,
    t.toString = function() {
        return "[object ObservableSet]"
    }
    ,
    t[c0] = function() {
        return this.values()
    }
    ,
    hc(e, [{
        key: "size",
        get: function() {
            return this.atom_.reportObserved(),
            this.data_.size
        }
    }, {
        key: f0,
        get: function() {
            return "Set"
        }
    }]),
    e
}()
  , si = nr("ObservableSet", d0)
  , yd = Object.create(null)
  , Ad = "remove"
  , p0 = function() {
    function e(n, r, i, o) {
        r === void 0 && (r = new Map),
        o === void 0 && (o = VS),
        this.target_ = void 0,
        this.values_ = void 0,
        this.name_ = void 0,
        this.defaultAnnotation_ = void 0,
        this.keysAtom_ = void 0,
        this.changeListeners_ = void 0,
        this.interceptors_ = void 0,
        this.proxy_ = void 0,
        this.isPlainObject_ = void 0,
        this.appliedAnnotations_ = void 0,
        this.pendingKeys_ = void 0,
        this.target_ = n,
        this.values_ = r,
        this.name_ = i,
        this.defaultAnnotation_ = o,
        this.keysAtom_ = new go("ObservableObject.keys"),
        this.isPlainObject_ = tn(this.target_)
    }
    var t = e.prototype;
    return t.getObservablePropValue_ = function(r) {
        return this.values_.get(r).get()
    }
    ,
    t.setObservablePropValue_ = function(r, i) {
        var o = this.values_.get(r);
        if (o instanceof qr)
            return o.set(i),
            !0;
        if (lt(this)) {
            var s = ut(this, {
                type: Dt,
                object: this.proxy_ || this.target_,
                name: r,
                newValue: i
            });
            if (!s)
                return null;
            i = s.newValue
        }
        if (i = o.prepareNewValue_(i),
        i !== P.UNCHANGED) {
            var a = Et(this)
              , l = !1
              , f = a || l ? {
                type: Dt,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                oldValue: o.value_,
                name: r,
                newValue: i
            } : null;
            o.setNewValue_(i),
            a && xt(this, f)
        }
        return !0
    }
    ,
    t.get_ = function(r) {
        return P.trackingDerivation && !Gt(this.target_, r) && this.has_(r),
        this.target_[r]
    }
    ,
    t.set_ = function(r, i, o) {
        return o === void 0 && (o = !1),
        Gt(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, i) : o ? Reflect.set(this.target_, r, i) : (this.target_[r] = i,
        !0) : this.extend_(r, {
            value: i,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }, this.defaultAnnotation_, o)
    }
    ,
    t.has_ = function(r) {
        if (!P.trackingDerivation)
            return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map);
        var i = this.pendingKeys_.get(r);
        return i || (i = new zn(r in this.target_,da,"ObservableObject.key?",!1),
        this.pendingKeys_.set(r, i)),
        i.get()
    }
    ,
    t.make_ = function(r, i) {
        if (i === !0 && (i = this.defaultAnnotation_),
        i !== !1) {
            if (!(r in this.target_)) {
                var o;
                if ((o = this.target_[Ft]) != null && o[r])
                    return;
                H(1, i.annotationType_, this.name_ + "." + r.toString())
            }
            for (var s = this.target_; s && s !== ca; ) {
                var a = Ts(s, r);
                if (a) {
                    var l = i.make_(this, r, a, s);
                    if (l === 0)
                        return;
                    if (l === 1)
                        break
                }
                s = Object.getPrototypeOf(s)
            }
            Sd(this, i, r)
        }
    }
    ,
    t.extend_ = function(r, i, o, s) {
        if (s === void 0 && (s = !1),
        o === !0 && (o = this.defaultAnnotation_),
        o === !1)
            return this.defineProperty_(r, i, s);
        var a = o.extend_(this, r, i, s);
        return a && Sd(this, o, r),
        a
    }
    ,
    t.defineProperty_ = function(r, i, o) {
        o === void 0 && (o = !1),
        this.keysAtom_;
        try {
            ft();
            var s = this.delete_(r);
            if (!s)
                return s;
            if (lt(this)) {
                var a = ut(this, {
                    object: this.proxy_ || this.target_,
                    name: r,
                    type: mn,
                    newValue: i.value
                });
                if (!a)
                    return null;
                var l = a.newValue;
                i.value !== l && (i = Yn({}, i, {
                    value: l
                }))
            }
            if (o) {
                if (!Reflect.defineProperty(this.target_, r, i))
                    return !1
            } else
                jt(this.target_, r, i);
            this.notifyPropertyAddition_(r, i.value)
        } finally {
            dt()
        }
        return !0
    }
    ,
    t.defineObservableProperty_ = function(r, i, o, s) {
        s === void 0 && (s = !1),
        this.keysAtom_;
        try {
            ft();
            var a = this.delete_(r);
            if (!a)
                return a;
            if (lt(this)) {
                var l = ut(this, {
                    object: this.proxy_ || this.target_,
                    name: r,
                    type: mn,
                    newValue: i
                });
                if (!l)
                    return null;
                i = l.newValue
            }
            var f = wd(r)
              , d = {
                configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !0,
                get: f.get,
                set: f.set
            };
            if (s) {
                if (!Reflect.defineProperty(this.target_, r, d))
                    return !1
            } else
                jt(this.target_, r, d);
            var g = new zn(i,o,"ObservableObject.key",!1);
            this.values_.set(r, g),
            this.notifyPropertyAddition_(r, g.value_)
        } finally {
            dt()
        }
        return !0
    }
    ,
    t.defineComputedProperty_ = function(r, i, o) {
        o === void 0 && (o = !1),
        this.keysAtom_;
        try {
            ft();
            var s = this.delete_(r);
            if (!s)
                return s;
            if (lt(this)) {
                var a = ut(this, {
                    object: this.proxy_ || this.target_,
                    name: r,
                    type: mn,
                    newValue: void 0
                });
                if (!a)
                    return null
            }
            i.name || (i.name = "ObservableObject.key"),
            i.context = this.proxy_ || this.target_;
            var l = wd(r)
              , f = {
                configurable: P.safeDescriptors ? this.isPlainObject_ : !0,
                enumerable: !1,
                get: l.get,
                set: l.set
            };
            if (o) {
                if (!Reflect.defineProperty(this.target_, r, f))
                    return !1
            } else
                jt(this.target_, r, f);
            this.values_.set(r, new qr(i)),
            this.notifyPropertyAddition_(r, void 0)
        } finally {
            dt()
        }
        return !0
    }
    ,
    t.delete_ = function(r, i) {
        if (i === void 0 && (i = !1),
        this.keysAtom_,
        !Gt(this.target_, r))
            return !0;
        if (lt(this)) {
            var o = ut(this, {
                object: this.proxy_ || this.target_,
                name: r,
                type: Ad
            });
            if (!o)
                return null
        }
        try {
            var s, a;
            ft();
            var l = Et(this)
              , f = !1
              , d = this.values_.get(r)
              , g = void 0;
            if (!d && (l || f)) {
                var p;
                g = (p = Ts(this.target_, r)) == null ? void 0 : p.value
            }
            if (i) {
                if (!Reflect.deleteProperty(this.target_, r))
                    return !1
            } else
                delete this.target_[r];
            if (d && (this.values_.delete(r),
            d instanceof zn && (g = d.value_),
            Zg(d)),
            this.keysAtom_.reportChanged(),
            (s = this.pendingKeys_) == null || (a = s.get(r)) == null || a.set(r in this.target_),
            l || f) {
                var A = {
                    type: Ad,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: g,
                    name: r
                };
                l && xt(this, A)
            }
        } finally {
            dt()
        }
        return !0
    }
    ,
    t.observe_ = function(r, i) {
        return yo(this, r)
    }
    ,
    t.intercept_ = function(r) {
        return vo(this, r)
    }
    ,
    t.notifyPropertyAddition_ = function(r, i) {
        var o, s, a = Et(this), l = !1;
        if (a || l) {
            var f = a || l ? {
                type: mn,
                observableKind: "object",
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: r,
                newValue: i
            } : null;
            a && xt(this, f)
        }
        (o = this.pendingKeys_) == null || (s = o.get(r)) == null || s.set(!0),
        this.keysAtom_.reportChanged()
    }
    ,
    t.ownKeys_ = function() {
        return this.keysAtom_.reportObserved(),
        Kr(this.target_)
    }
    ,
    t.keys_ = function() {
        return this.keysAtom_.reportObserved(),
        Object.keys(this.target_)
    }
    ,
    e
}();
function or(e, t) {
    var n;
    if (Gt(e, D))
        return e;
    var r = (n = t == null ? void 0 : t.name) != null ? n : "ObservableObject"
      , i = new p0(e,new Map,String(r),XS(t));
    return fo(e, D, i),
    e
}
var q2 = nr("ObservableObjectAdministration", p0);
function wd(e) {
    return yd[e] || (yd[e] = {
        get: function() {
            return this[D].getObservablePropValue_(e)
        },
        set: function(n) {
            return this[D].setObservablePropValue_(e, n)
        }
    })
}
function io(e) {
    return fa(e) ? q2(e[D]) : !1
}
function Sd(e, t, n) {
    var r;
    (r = e.target_[Ft]) == null || delete r[n]
}
var H2 = g0(0)
  , G2 = function() {
    var e = !1
      , t = {};
    return Object.defineProperty(t, "0", {
        set: function() {
            e = !0
        }
    }),
    Object.create(t)[0] = 1,
    e === !1
}()
  , el = 0
  , h0 = function() {};
function Z2(e, t) {
    Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t
}
Z2(h0, Array.prototype);
var Sc = function(e, t, n) {
    Bg(r, e);
    function r(o, s, a, l) {
        var f;
        return a === void 0 && (a = "ObservableArray"),
        l === void 0 && (l = !1),
        f = e.call(this) || this,
        In(function() {
            var d = new wc(a,s,l,!0);
            d.proxy_ = Ya(f),
            kg(Ya(f), D, d),
            o && o.length && f.spliceWithArray(0, 0, o),
            G2 && Object.defineProperty(Ya(f), "0", H2)
        }),
        f
    }
    var i = r.prototype;
    return i.concat = function() {
        this[D].atom_.reportObserved();
        for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
            a[l] = arguments[l];
        return Array.prototype.concat.apply(this.slice(), a.map(function(f) {
            return va(f) ? f.slice() : f
        }))
    }
    ,
    i[n] = function() {
        var o = this
          , s = 0;
        return oo({
            next: function() {
                return s < o.length ? {
                    value: o[s++],
                    done: !1
                } : {
                    done: !0,
                    value: void 0
                }
            }
        })
    }
    ,
    hc(r, [{
        key: "length",
        get: function() {
            return this[D].getArrayLength_()
        },
        set: function(s) {
            this[D].setArrayLength_(s)
        }
    }, {
        key: t,
        get: function() {
            return "Array"
        }
    }]),
    r
}(h0, Symbol.toStringTag, Symbol.iterator);
Object.entries(js).forEach(function(e) {
    var t = e[0]
      , n = e[1];
    t !== "concat" && fo(Sc.prototype, t, n)
});
function g0(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this[D].get_(e)
        },
        set: function(n) {
            this[D].set_(e, n)
        }
    }
}
function J2(e) {
    jt(Sc.prototype, "" + e, g0(e))
}
function m0(e) {
    if (e > el) {
        for (var t = el; t < e + 100; t++)
            J2(t);
        el = e
    }
}
m0(1e3);
function Y2(e, t, n) {
    return new Sc(e,t,n)
}
function Gr(e, t) {
    if (typeof e == "object" && e !== null) {
        if (va(e))
            return t !== void 0 && H(23),
            e[D].atom_;
        if (si(e))
            return e.atom_;
        if (ir(e)) {
            if (t === void 0)
                return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || H(25, t, cu(e)),
            n
        }
        if (io(e)) {
            if (!t)
                return H(26);
            var r = e[D].values_.get(t);
            return r || H(27, t, cu(e)),
            r
        }
        if (gc(e) || ga(e) || Us(e))
            return e
    } else if (_t(e) && Us(e[D]))
        return e[D];
    H(28)
}
function v0(e, t) {
    if (e || H(29),
    t !== void 0)
        return v0(Gr(e, t));
    if (gc(e) || ga(e) || Us(e) || ir(e) || si(e))
        return e;
    if (e[D])
        return e[D];
    H(24, e)
}
function cu(e, t) {
    var n;
    if (t !== void 0)
        n = Gr(e, t);
    else {
        if (ma(e))
            return e.name;
        io(e) || ir(e) || si(e) ? n = v0(e) : n = Gr(e)
    }
    return n.name_
}
function In(e) {
    var t = rr()
      , n = vc(!0);
    ft();
    try {
        return e()
    } finally {
        dt(),
        yc(n),
        Zt(t)
    }
}
var Ed = ca.toString;
function Ec(e, t, n) {
    return n === void 0 && (n = -1),
    fu(e, t, n)
}
function fu(e, t, n, r, i) {
    if (e === t)
        return e !== 0 || 1 / e === 1 / t;
    if (e == null || t == null)
        return !1;
    if (e !== e)
        return t !== t;
    var o = typeof e;
    if (o !== "function" && o !== "object" && typeof t != "object")
        return !1;
    var s = Ed.call(e);
    if (s !== Ed.call(t))
        return !1;
    switch (s) {
    case "[object RegExp]":
    case "[object String]":
        return "" + e == "" + t;
    case "[object Number]":
        return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
        return +e == +t;
    case "[object Symbol]":
        return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
        n >= 0 && n++;
        break
    }
    e = xd(e),
    t = xd(t);
    var a = s === "[object Array]";
    if (!a) {
        if (typeof e != "object" || typeof t != "object")
            return !1;
        var l = e.constructor
          , f = t.constructor;
        if (l !== f && !(_t(l) && l instanceof l && _t(f) && f instanceof f) && "constructor"in e && "constructor"in t)
            return !1
    }
    if (n === 0)
        return !1;
    n < 0 && (n = -1),
    r = r || [],
    i = i || [];
    for (var d = r.length; d--; )
        if (r[d] === e)
            return i[d] === t;
    if (r.push(e),
    i.push(t),
    a) {
        if (d = e.length,
        d !== t.length)
            return !1;
        for (; d--; )
            if (!fu(e[d], t[d], n - 1, r, i))
                return !1
    } else {
        var g = Object.keys(e), p;
        if (d = g.length,
        Object.keys(t).length !== d)
            return !1;
        for (; d--; )
            if (p = g[d],
            !(Gt(t, p) && fu(e[p], t[p], n - 1, r, i)))
                return !1
    }
    return r.pop(),
    i.pop(),
    !0
}
function xd(e) {
    return va(e) ? e.slice() : ii(e) || ir(e) || po(e) || si(e) ? Array.from(e.entries()) : e
}
function oo(e) {
    return e[Symbol.iterator] = X2,
    e
}
function X2() {
    return this
}
["Symbol", "Map", "Set"].forEach(function(e) {
    var t = pc();
    typeof t[e] > "u" && H("MobX requires global '" + e + "' to be available or polyfilled")
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: m2,
    extras: {
        getDebugName: cu
    },
    $mobx: D
});
if (!te.useState)
    throw new Error("mobx-react-lite requires React with Hooks support");
if (!j2)
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function $2(e) {
    e()
}
function eE(e) {
    e || (e = $2),
    B2({
        reactionScheduler: e
    })
}
function tE(e) {
    return T2(e)
}
var y0 = !1;
function qE(e) {
    y0 = e
}
function A0() {
    return y0
}
var nE = 1e4
  , rE = 1e4
  , iE = function() {
    function e(t) {
        var n = this;
        Object.defineProperty(this, "finalize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }),
        Object.defineProperty(this, "registrations", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        }),
        Object.defineProperty(this, "sweepTimeout", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "sweep", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function(r) {
                r === void 0 && (r = nE),
                clearTimeout(n.sweepTimeout),
                n.sweepTimeout = void 0;
                var i = Date.now();
                n.registrations.forEach(function(o, s) {
                    i - o.registeredAt >= r && (n.finalize(o.value),
                    n.registrations.delete(s))
                }),
                n.registrations.size > 0 && n.scheduleSweep()
            }
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function() {
                n.sweep(0)
            }
        })
    }
    return Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(t, n, r) {
            this.registrations.set(r, {
                value: n,
                registeredAt: Date.now()
            }),
            this.scheduleSweep()
        }
    }),
    Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(t) {
            this.registrations.delete(t)
        }
    }),
    Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, rE))
        }
    }),
    e
}()
  , oE = typeof FinalizationRegistry < "u" ? FinalizationRegistry : iE
  , du = new oE(function(e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(),
    e.reaction = null
}
)
  , w0 = {
    exports: {}
}
  , S0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr = te;
function sE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var aE = typeof Object.is == "function" ? Object.is : sE
  , lE = Zr.useState
  , uE = Zr.useEffect
  , cE = Zr.useLayoutEffect
  , fE = Zr.useDebugValue;
function dE(e, t) {
    var n = t()
      , r = lE({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , i = r[0].inst
      , o = r[1];
    return cE(function() {
        i.value = n,
        i.getSnapshot = t,
        tl(i) && o({
            inst: i
        })
    }, [e, n, t]),
    uE(function() {
        return tl(i) && o({
            inst: i
        }),
        e(function() {
            tl(i) && o({
                inst: i
            })
        })
    }, [e]),
    fE(n),
    n
}
function tl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !aE(e, n)
    } catch {
        return !0
    }
}
function pE(e, t) {
    return t()
}
var hE = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? pE : dE;
S0.useSyncExternalStore = Zr.useSyncExternalStore !== void 0 ? Zr.useSyncExternalStore : hE;
w0.exports = S0;
var gE = w0.exports;
function Cd(e) {
    e.reaction = new Ls("observer".concat(e.name),function() {
        var t;
        e.stateVersion = Symbol(),
        (t = e.onStoreChange) === null || t === void 0 || t.call(e)
    }
    )
}
function mE(e, t) {
    if (t === void 0 && (t = "observed"),
    A0())
        return e();
    var n = Be.useRef(null);
    if (!n.current) {
        var r = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function(a) {
                return du.unregister(r),
                r.onStoreChange = a,
                r.reaction || (Cd(r),
                r.stateVersion = Symbol()),
                function() {
                    var l;
                    r.onStoreChange = null,
                    (l = r.reaction) === null || l === void 0 || l.dispose(),
                    r.reaction = null
                }
            },
            getSnapshot: function() {
                return r.stateVersion
            }
        };
        n.current = r
    }
    var i = n.current;
    i.reaction || (Cd(i),
    du.register(n, i, i)),
    Be.useDebugValue(i.reaction, tE),
    gE.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
    var o, s;
    if (i.reaction.track(function() {
        try {
            o = e()
        } catch (a) {
            s = a
        }
    }),
    s)
        throw s;
    return o
}
var nl, rl, E0 = typeof Symbol == "function" && Symbol.for, vE = (rl = (nl = Object.getOwnPropertyDescriptor(function() {}, "name")) === null || nl === void 0 ? void 0 : nl.configurable) !== null && rl !== void 0 ? rl : !1, _d = E0 ? Symbol.for("react.forward_ref") : typeof te.forwardRef == "function" && te.forwardRef(function(e) {
    return null
}).$$typeof, bd = E0 ? Symbol.for("react.memo") : typeof te.memo == "function" && te.memo(function(e) {
    return null
}).$$typeof;
function xc(e, t) {
    var n;
    if (bd && e.$$typeof === bd)
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    if (A0())
        return e;
    var r = (n = t == null ? void 0 : t.forwardRef) !== null && n !== void 0 ? n : !1
      , i = e
      , o = e.displayName || e.name;
    if (_d && e.$$typeof === _d && (r = !0,
    i = e.render,
    typeof i != "function"))
        throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
    var s = function(a, l) {
        return mE(function() {
            return i(a, l)
        }, o)
    };
    return s.displayName = e.displayName,
    vE && Object.defineProperty(s, "name", {
        value: e.name,
        writable: !0,
        configurable: !0
    }),
    e.contextTypes && (s.contextTypes = e.contextTypes),
    r && (s = te.forwardRef(s)),
    s = te.memo(s),
    AE(e, s),
    s
}
var yE = {
    $$typeof: !0,
    render: !0,
    compare: !0,
    type: !0,
    displayName: !0
};
function AE(e, t) {
    Object.keys(e).forEach(function(n) {
        yE[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
    })
}
var il;
eE(ia.unstable_batchedUpdates);
il = du.finalizeAllImmediately;
const wE = "/assets/PreloaderBackground-B3jk16Wc.webp"
  , x0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAADdElEQVRYhb3YzauVVRTH8c86nmuaWunVpBdNEqSiQVCUSG8gEjUtiJpEEEGT/hWhgTQrMhpFNBCjqFCJBo0qwiJSs9Iglby+XLXrvavBfs718Zzn3HPOffvBGpyz376svZ691t5hRGXmemzHfdiI23FL1XwNEziDP/BbRJwfZf4YEqKFh/A4tgw7Dok/8R2ORsTMgoEyczueV7yxEJ3FwYg4Pi+gzGxjD55YIEi3fsCBiJgaGigz1+BV3LPIMB2dwkcRcXkgUAXzusFbdAXHlSC+UP23DnfgfqwaMP4s3ouIyb5AmTmGN3DvHBP9im9wol+QVh/BVuys4PrpND6MiOv9gF7UP2bO4eOIODbHAk1wW/Ec1vfp8n1EfNEDlJk78FafQcfwfkRcGgWmNvcqvKCcXU36JCJOQqsa0MLLGGuwY9g3XxiIiKv4FCdwvcGezMyYBcKjyoG3srIOzITimYEH2hBQM/hMCeapLlunirUO0B43e6UDtn8hnmmAuoZDmr30ILQzc1P1o/sI+DEiflksmBrU35n5u94zbjwz17bxiOKNbh1cbJiafsLmhv/vauNhZZvquoSflxDoH0w2rLuhjW0NDUcjYnqpaCJiJjNP6922NW3c3QB0dqlgarqofGF1jbVxG9pdDf8uA9BkA1C2Fe90A61YBqBUPve6ZtoK5equhjuXAWiFXg9NtZV4Ge9q2LIMQCv1euhyCyf15q9dVcW4JKry1hq9KeRSSykpu4HGlfy2VFrrRgzVbaKlFFud4K7bm0sINK7XO1OYaEXEKc1e2p2ZOxebJDNvVT6ibu9ciIipTrbf3wA0hr2ZuWERYVZgk2bvnKPK8FXHw9jRMM9hvFKvexcAtFlz8T8VEadngarOzypVHSXg6voWr0XEvFJKVZFucOPK3a1zVVU5W6CJiEP4wM0FWseewdeZ+fQ8YFYqBX5L81Zd6MDQe+tYja/w2BxrfI69ODLXNlZXqlV6E3dd13ExImZ3pOmiuAlH8MAcE8F5fKkcrH9hXzVfS0kLg94NZjBZh2kEqkEdUF47htVtI/SdxpVuGGoxVFdEnFHi5t0RFhlWUxHR45nZtQeNzszdeEd5H5pLgzw0g6uDKtFRHqxewtvY1WdcP6Bp/DfsOTbsS1gdbptyV39KuT5trWA2KufXTGXTmB71kvk/+dw1gZjld24AAAAASUVORK5CYII="
  , C0 = ua("div", {
    background: `url(${wE})`,
    width: "100vw",
    height: "calc(100vh);",
    backgroundSize: "cover",
    position: "relative"
})
  , _0 = ua("div", {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    bottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px"
})
  , b0 = ua("p", {
    color: "#FFF",
    textAlign: "center",
    textShadow: "0px 2px 0px rgba(0, 0, 0, 0.50)",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#000",
    fontFamily: "Rubik",
    fontSize: "6vmin",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "20px",
    letterSpacing: "-0.4px",
    marginBottom: "32px"
})
  , SE = sS({
    "0%": {
        transform: "rotate(360deg)"
    },
    "100%": {
        transform: "rotate(0deg)"
    }
})
  , k0 = ua("img", {
    width: "36px",
    height: "36px",
    animation: `${SE} 2s linear infinite`
})
  , EE = xc(function() {
    return he.jsx(C0, {
        children: he.jsxs(_0, {
            children: [he.jsx(k0, {
                src: x0
            }), he.jsx(b0, {
                children: "Loading..."
            })]
        })
    })
})
  , xE = !1
  , CE = {
    acceptCustomStyles: !0,
    cssVars: !0,
    complete: !0
}
  , _E = function({error: t}) {
    return he.jsxs("div", {
        children: ["Oops. Something went wrong.", he.jsx("blockquote", {
            children: he.jsx("code", {
                children: t instanceof Error ? t.message : JSON.stringify(t)
            })
        })]
    })
}
  , bE = function() {
    return he.jsx(C0, {
        children: he.jsxs(_0, {
            children: [he.jsx(k0, {
                src: x0
            }), he.jsx(b0, {
                children: "Loading..."
            })]
        })
    })
}
  , kE = function() {
    return he.jsx("div", {
        children: "Waiting for initialization to start."
    })
}
  , OE = ({children: e})=>he.jsx(bw, {
    options: CE,
    children: he.jsx(Tw, {
        error: _E,
        loading: bE,
        initial: kE,
        children: e
    })
})
  , RE = xc(()=>{
    const [e,t] = te.useState(!1)
      , n = Bw()
      , r = Rw();
    return te.useEffect(()=>{
        !n || e || (n("web_app_expand"),
        t(!0))
    }
    , [n]),
    te.useEffect(()=>{
        r && r.hide()
    }
    , [r]),
    null
}
)
  , BE = xc(({children: e})=>{
    const t = Ow()
      , n = ["android", "android_x", "ios"].includes(t.platform);
    return he.jsxs(he.Fragment, {
        children: [n && !xE && he.jsx(RE, {}), e]
    })
}
);
window.Buffer = zd;
const TE = Be.lazy(()=>new Promise(e=>{
    setTimeout(async()=>{
        e(U0(()=>import("./App-DOoTA0vX.js"), __vite__mapDeps([0, 1])))
    }
    , 0)
}
).then(e=>({
    default: e.App
})));
al.createRoot(document.getElementById("root")).render(he.jsx(OE, {
    children: he.jsx(BE, {
        children: he.jsx(Be.Suspense, {
            fallback: he.jsx(EE, {}),
            children: he.jsx(TE, {})
        })
    })
}));
export {zE as A, Lv as B, EE as P, QE as Q, NE as R, Sv as T, LE as a, PE as b, IE as c, jE as d, Od as e, Be as f, FE as g, mg as h, cd as i, ua as j, sS as k, he as l, nA as m, ia as n, xc as o, Br as p, KE as q, te as r, qE as s, ME as t};
