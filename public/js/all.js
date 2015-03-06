if (!function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = t.length, n = J.type(t);
            return "function" === n || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (J.isFunction(e))return J.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return J.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ae.test(e))return J.filter(e, t, n);
                e = J.filter(e, t)
            }
            return J.grep(t, function (t) {
                return Q.call(e, t) >= 0 !== n
            })
        }

        function r(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = fe[t] = {};
            return J.each(t.match(he) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            K.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = J.expando + a.uid++
        }

        function l(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(we, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? J.parseJSON(n) : n
                } catch (r) {
                }
                ye.set(t, e, n)
            } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function p() {
            try {
                return K.activeElement
            } catch (t) {
            }
        }

        function d(t, e) {
            return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function h(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = qe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var n = 0, i = t.length; i > n; n++)ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
        }

        function m(t, e) {
            var n, i, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (ve.hasData(t) && (o = ve.access(t), s = ve.set(e, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)for (n = 0, i = c[r].length; i > n; n++)J.event.add(e, r, c[r][n])
                }
                ye.hasData(t) && (a = ye.access(t), l = J.extend({}, a), ye.set(e, l))
            }
        }

        function v(t, e) {
            var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], n) : n
        }

        function y(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Ce.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }

        function b(e, n) {
            var i, r = J(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
            return r.detach(), o
        }

        function w(t) {
            var e = K, n = Fe[t];
            return n || (n = b(t, e), "none" !== n && n || (He = (He || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = He[0].contentDocument, e.write(), e.close(), n = b(t, e), He.detach()), Fe[t] = n), n
        }

        function x(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || We(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), Ue.test(s) && Me.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function T(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function $(t, e) {
            if (e in t)return e;
            for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Xe.length; r--;)if (e = Xe[r] + n, e in t)return e;
            return i
        }

        function C(t, e, n) {
            var i = Be.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function E(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += J.css(t, n + Te[o], !0, r)), i ? ("content" === n && (s -= J.css(t, "padding" + Te[o], !0, r)), "margin" !== n && (s -= J.css(t, "border" + Te[o] + "Width", !0, r))) : (s += J.css(t, "padding" + Te[o], !0, r), "padding" !== n && (s += J.css(t, "border" + Te[o] + "Width", !0, r)));
            return s
        }

        function A(t, e, n) {
            var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = We(t), s = "border-box" === J.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = x(t, e, o), (0 > r || null == r) && (r = t.style[e]), Ue.test(r))return r;
                i = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + E(t, e, n || (s ? "border" : "content"), i, o) + "px"
        }

        function S(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[s] = ve.access(i, "olddisplay", w(i.nodeName)))) : (r = $e(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : J.css(i, "display"))));
            for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function _(t, e, n, i, r) {
            return new _.prototype.init(t, e, n, i, r)
        }

        function k() {
            return setTimeout(function () {
                Ge = void 0
            }), Ge = J.now()
        }

        function D(t, e) {
            var n, i = 0, r = {height: t};
            for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = Te[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function N(t, e, n) {
            for (var i, r = (nn[e] || []).concat(nn["*"]), o = 0, s = r.length; s > o; o++)if (i = r[o].call(n, e, t))return i
        }

        function O(t, e, n) {
            var i, r, o, s, a, l, c, u, p = this, d = {}, h = t.style, f = t.nodeType && $e(t), g = ve.get(t, "fxshow");
            n.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = J.css(t, "display"), u = "none" === c ? ve.get(t, "olddisplay") || w(t.nodeName) : c, "inline" === u && "none" === J.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)if (r = e[i], Ze.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i])continue;
                    f = !0
                }
                d[i] = g && g[i] || J.style(t, i)
            } else c = void 0;
            if (J.isEmptyObject(d))"inline" === ("none" === c ? w(t.nodeName) : c) && (h.display = c); else {
                g ? "hidden"in g && (f = g.hidden) : g = ve.access(t, "fxshow", {}), o && (g.hidden = !f), f ? J(t).show() : p.done(function () {
                    J(t).hide()
                }), p.done(function () {
                    var e;
                    ve.remove(t, "fxshow");
                    for (e in d)J.style(t, e, d[e])
                });
                for (i in d)s = N(f ? g[i] : 0, i, p), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function j(t, e) {
            var n, i, r, o, s;
            for (n in t)if (i = J.camelCase(n), r = e[i], o = t[n], J.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = J.cssHooks[i], s && "expand"in s) {
                o = s.expand(o), delete t[i];
                for (n in o)n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
        }

        function L(t, e, n) {
            var i, r, o = 0, s = en.length, a = J.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r)return !1;
                for (var e = Ge || k(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++)c.tweens[s].run(o);
                return a.notifyWith(t, [c, o, n]), 1 > o && l ? n : (a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ge || k(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = J.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (r)return this;
                    for (r = !0; i > n; n++)c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (j(u, c.opts.specialEasing); s > o; o++)if (i = en[o].call(c, t, u, c.opts))return i;
            return J.map(u, N, c), J.isFunction(c.opts.start) && c.opts.start.call(t, c), J.fx.timer(J.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function I(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0, o = e.toLowerCase().match(he) || [];
                if (J.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function q(t, e, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, J.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {}, s = t === wn;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function R(t, e) {
            var n, i, r = J.ajaxSettings.flatOptions || {};
            for (n in e)void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && J.extend(!0, t, i), t
        }

        function P(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)for (r in a)if (a[r] && a[r].test(i)) {
                l.unshift(r);
                break
            }
            if (l[0]in n)o = l[0]; else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function H(t, e, n, i) {
            var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1])for (s in t.converters)c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                if (s = c[l + " " + o] || c["* " + o], !s)for (r in c)if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                    break
                }
                if (s !== !0)if (s && t["throws"])e = s(e); else try {
                    e = s(e)
                } catch (p) {
                    return {state: "parsererror", error: s ? p : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: e}
        }

        function F(t, e, n, i) {
            var r;
            if (J.isArray(e))J.each(e, function (e, r) {
                n || En.test(t) ? i(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            }); else if (n || "object" !== J.type(e))i(t, e); else for (r in e)F(t + "[" + r + "]", e[r], n, i)
        }

        function M(t) {
            return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }

        var U = [], W = U.slice, z = U.concat, B = U.push, Q = U.indexOf, V = {}, Y = V.toString, X = V.hasOwnProperty, G = {}, K = t.document, Z = "2.1.3", J = function (t, e) {
            return new J.fn.init(t, e)
        }, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, ne = /-([\da-z])/gi, ie = function (t, e) {
            return e.toUpperCase()
        };
        J.fn = J.prototype = {
            jquery: Z, constructor: J, selector: "", length: 0, toArray: function () {
                return W.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this)
            }, pushStack: function (t) {
                var e = J.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return J.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(J.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(W.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: B, sort: U.sort, splice: U.splice
        }, J.extend = J.fn.extend = function () {
            var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (t = arguments[a]))for (e in t)n = s[e], i = t[e], s !== i && (c && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, s[e] = J.extend(c, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, J.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === J.type(t)
            }, isArray: Array.isArray, isWindow: function (t) {
                return null != t && t === t.window
            }, isNumeric: function (t) {
                return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isPlainObject: function (t) {
                return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !X.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[Y.call(t)] || "object" : typeof t
            }, globalEval: function (t) {
                var e, n = eval;
                t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = K.createElement("script"), e.text = t, K.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            }, camelCase: function (t) {
                return t.replace(ee, "ms-").replace(ne, ie)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var r, o = 0, s = t.length, a = n(t);
                if (i) {
                    if (a)for (; s > o && (r = e.apply(t[o], i), r !== !1); o++); else for (o in t)if (r = e.apply(t[o], i), r === !1)break
                } else if (a)for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++); else for (o in t)if (r = e.call(t[o], o, t[o]), r === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(te, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? J.merge(i, "string" == typeof t ? [t] : t) : B.call(i, t)), i
            }, inArray: function (t, e, n) {
                return null == e ? -1 : Q.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i; i++)t[r++] = e[i];
                return t.length = r, t
            }, grep: function (t, e, n) {
                for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)i = !e(t[o], o), i !== a && r.push(t[o]);
                return r
            }, map: function (t, e, i) {
                var r, o = 0, s = t.length, a = n(t), l = [];
                if (a)for (; s > o; o++)r = e(t[o], o, i), null != r && l.push(r); else for (o in t)r = e(t[o], o, i), null != r && l.push(r);
                return z.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, r;
                return "string" == typeof e && (n = t[e], e = t, t = n), J.isFunction(t) ? (i = W.call(arguments, 2), r = function () {
                    return t.apply(e || this, i.concat(W.call(arguments)))
                }, r.guid = t.guid = t.guid || J.guid++, r) : void 0
            }, now: Date.now, support: G
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            V["[object " + e + "]"] = e.toLowerCase()
        });
        var re = function (t) {
            function e(t, e, n, i) {
                var r, o, s, a, l, c, p, h, f, g;
                if ((e ? e.ownerDocument || e : F) !== O && N(e), e = e || O, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return n;
                if (!i && L) {
                    if (11 !== a && (r = ye.exec(t)))if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode)return n;
                            if (o.id === s)return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && P(e, o) && o.id === s)return n.push(o), n
                    } else {
                        if (r[2])return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = r[3]) && x.getElementsByClassName)return Z.apply(n, e.getElementsByClassName(s)), n
                    }
                    if (x.qsa && (!I || !I.test(t))) {
                        if (h = p = H, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = E(t), (p = e.getAttribute("id")) ? h = p.replace(we, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;)c[l] = h + d(c[l]);
                            f = be.test(t) && u(e.parentNode) || e, g = c.join(",")
                        }
                        if (g)try {
                            return Z.apply(n, f.querySelectorAll(g)), n
                        } catch (m) {
                        } finally {
                            p || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[H] = !0, t
            }

            function r(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function p() {
            }

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir, r = n && "parentNode" === i, o = U++;
                return e.first ? function (e, n, o) {
                    for (; e = e[i];)if (1 === e.nodeType || r)return t(e, n, o)
                } : function (e, n, s) {
                    var a, l, c = [M, o];
                    if (s) {
                        for (; e = e[i];)if ((1 === e.nodeType || r) && t(e, n, s))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || r) {
                        if (l = e[H] || (e[H] = {}), (a = l[i]) && a[0] === M && a[1] === o)return c[2] = a[2];
                        if (l[i] = c, c[2] = t(e, n, s))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var r = t.length; r--;)if (!t[r](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++)e(t, n[r], i);
                return i
            }

            function m(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), c && e.push(a));
                return s
            }

            function v(t, e, n, r, o, s) {
                return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, s)), i(function (i, s, a, l) {
                    var c, u, p, d = [], h = [], f = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : m(v, d, t, a, l), b = n ? o || (i ? t : f || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)for (c = m(b, h), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (b[h[u]] = !(y[h[u]] = p));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(p = b[u]) && c.push(y[u] = p);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(p = b[u]) && (c = o ? te(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p))
                        }
                    } else b = m(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, r = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = h(function (t) {
                    return t === e
                }, s, !0), c = h(function (t) {
                    return te(e, t) > -1
                }, s, !0), u = [function (t, n, i) {
                    var r = !o && (i || n !== _) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; r > a; a++)if (n = T.relative[t[a].type])u = [h(f(u), n)]; else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                        for (i = ++a; r > i && !T.relative[t[i].type]; i++);
                        return v(a > 1 && f(u), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && d(t))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function b(t, n) {
                var r = n.length > 0, o = t.length > 0, s = function (i, s, a, l, c) {
                    var u, p, d, h = 0, f = "0", g = i && [], v = [], y = _, b = i || o && T.find.TAG("*", c), w = M += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (c && (_ = s !== O && s); f !== x && null != (u = b[f]); f++) {
                        if (o && u) {
                            for (p = 0; d = t[p++];)if (d(u, s, a)) {
                                l.push(u);
                                break
                            }
                            c && (M = w)
                        }
                        r && ((u = !d && u) && h--, i && g.push(u))
                    }
                    if (h += f, r && f !== h) {
                        for (p = 0; d = n[p++];)d(g, v, s, a);
                        if (i) {
                            if (h > 0)for (; f--;)g[f] || v[f] || (v[f] = G.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (M = w, _ = y), g
                };
                return r ? i(s) : s
            }

            var w, x, T, $, C, E, A, S, _, k, D, N, O, j, L, I, q, R, P, H = "sizzle" + 1 * new Date, F = t.document, M = 0, U = 0, W = n(), z = n(), B = n(), Q = function (t, e) {
                return t === e && (D = !0), 0
            }, V = 1 << 31, Y = {}.hasOwnProperty, X = [], G = X.pop, K = X.push, Z = X.push, J = X.slice, te = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                return -1
            }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ie.replace("w", "w#"), oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(se), he = new RegExp("^" + re + "$"), fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, $e = function () {
                N()
            };
            try {
                Z.apply(X = J.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
            } catch (Ce) {
                Z = {
                    apply: X.length ? function (t, e) {
                        K.apply(t, J.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, N = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", $e, !1) : n.attachEvent && n.attachEvent("onunload", $e)), L = !C(i), x.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = r(function (t) {
                    return j.appendChild(t).id = H, !i.getElementsByName || !i.getElementsByName(H).length
                }), x.getById ? (T.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function (t) {
                    var e = t.replace(xe, Te);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function (t) {
                    var e = t.replace(xe, Te);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], r = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = x.getElementsByClassName && function (t, e) {
                    return L ? e.getElementsByClassName(t) : void 0
                }, q = [], I = [], (x.qsa = ve.test(i.querySelectorAll)) && (r(function (t) {
                    j.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
                }), r(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                })), (x.matchesSelector = ve.test(R = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (t) {
                    x.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), q.push("!=", se)
                }), I = I.length && new RegExp(I.join("|")), q = q.length && new RegExp(q.join("|")), e = ve.test(j.compareDocumentPosition), P = e || ve.test(j.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, Q = e ? function (t, e) {
                    if (t === e)return D = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && P(F, t) ? -1 : e === i || e.ownerDocument === F && P(F, e) ? 1 : k ? te(k, t) - te(k, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return D = !0, 0;
                    var n, r = 0, o = t.parentNode, a = e.parentNode, l = [t], c = [e];
                    if (!o || !a)return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : k ? te(k, t) - te(k, e) : 0;
                    if (o === a)return s(t, e);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (n = e; n = n.parentNode;)c.unshift(n);
                    for (; l[r] === c[r];)r++;
                    return r ? s(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
                }, i) : O
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== O && N(t), n = n.replace(pe, "='$1']"), !(!x.matchesSelector || !L || q && q.test(n) || I && I.test(n)))try {
                    var i = R.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (r) {
                }
                return e(n, O, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== O && N(t), P(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== O && N(t);
                var n = T.attrHandle[e.toLowerCase()], i = n && Y.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : x.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, r = 0;
                if (D = !x.detectDuplicates, k = !x.sortStable && t.slice(0), t.sort(Q), D) {
                    for (; e = t[r++];)e === t[r] && (i = n.push(r));
                    for (; i--;)t.splice(n[i], 1)
                }
                return k = null, t
            }, $ = e.getText = function (t) {
                var e, n = "", i = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += $(t)
                    } else if (3 === r || 4 === r)return t.nodeValue
                } else for (; e = t[i++];)n += $(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(xe, Te), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(xe, Te).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, p, d, h, f, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (p = e; p = p[g];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (u = m[H] || (m[H] = {}), c = u[t] || [], h = c[0] === M && c[1], d = c[0] === M && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (d = h = 0) || f.pop();)if (1 === p.nodeType && ++d && p === e) {
                                        u[t] = [M, h, d];
                                        break
                                    }
                                } else if (y && (c = (e[H] || (e[H] = {}))[t]) && c[0] === M)d = c[1]; else for (; (p = ++h && p && p[g] || (d = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[H] || (p[H] = {}))[t] = [M, d]), p !== e)););
                                return d -= r, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var r, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;)i = te(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function (t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], r = A(t.replace(le, "$1"));
                        return r[H] ? i(function (t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, i, o) {
                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(xe, Te), function (e) {
                            return (e.textContent || e.innerText || $(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, Te).toLowerCase(), function (e) {
                            var n;
                            do if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === j
                    }, focus: function (t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !T.pseudos.empty(t)
                    }, header: function (t) {
                        return me.test(t.nodeName)
                    }, input: function (t) {
                        return ge.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[w] = a(w);
            for (w in{submit: !0, reset: !0})T.pseudos[w] = l(w);
            return p.prototype = T.filters = T.pseudos, T.setFilters = new p, E = e.tokenize = function (t, n) {
                var i, r, o, s, a, l, c, u = z[t + " "];
                if (u)return n ? 0 : u.slice(0);
                for (a = t, l = [], c = T.preFilter; a;) {
                    (!i || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter)!(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, A = e.compile = function (t, e) {
                var n, i = [], r = [], o = B[t + " "];
                if (!o) {
                    for (e || (e = E(t)), n = e.length; n--;)o = y(e[n]), o[H] ? i.push(o) : r.push(o);
                    o = B(t, b(r, i)), o.selector = t
                }
                return o
            }, S = e.select = function (t, e, n, i) {
                var r, o, s, a, l, c = "function" == typeof t && t, p = !i && E(t = c.selector || t);
                if (n = n || [], 1 === p.length) {
                    if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && L && T.relative[o[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(xe, Te), e) || [])[0], !e)return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)if ((l = T.find[a]) && (i = l(s.matches[0].replace(xe, Te), be.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && d(o), !t)return Z.apply(n, i), n;
                        break
                    }
                }
                return (c || A(t, p))(i, e, !L, n, be.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = H.split("").sort(Q).join("") === H, x.detectDuplicates = !!D, N(), x.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(O.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || o(ee, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
        var oe = J.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
        J.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? J.find.matchesSelector(i, t) ? [i] : [] : J.find.matches(t, J.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, J.fn.extend({
            find: function (t) {
                var e, n = this.length, i = [], r = this;
                if ("string" != typeof t)return this.pushStack(J(t).filter(function () {
                    for (e = 0; n > e; e++)if (J.contains(r[e], this))return !0
                }));
                for (e = 0; n > e; e++)J.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && oe.test(t) ? J(t) : t || [], !1).length
            }
        });
        var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = J.fn.init = function (t, e) {
            var n, i;
            if (!t)return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), se.test(n[1]) && J.isPlainObject(e))for (n in e)J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
        ue.prototype = J.fn, le = J(K);
        var pe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
        J.extend({
            dir: function (t, e, n) {
                for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                    if (r && J(t).is(n))break;
                    i.push(t)
                }
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), J.fn.extend({
            has: function (t) {
                var e = J(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; n > t; t++)if (J.contains(this, e[t]))return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, r = this.length, o = [], s = oe.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? J.unique(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? Q.call(J(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), J.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return J.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return J.dir(t, "parentNode", n)
            }, next: function (t) {
                return r(t, "nextSibling")
            }, prev: function (t) {
                return r(t, "previousSibling")
            }, nextAll: function (t) {
                return J.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return J.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return J.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return J.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return J.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return J.sibling(t.firstChild)
            }, contents: function (t) {
                return t.contentDocument || J.merge([], t.childNodes)
            }
        }, function (t, e) {
            J.fn[t] = function (n, i) {
                var r = J.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (de[t] || J.unique(r), pe.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var he = /\S+/g, fe = {};
        J.Callbacks = function (t) {
            t = "string" == typeof t ? fe[t] || o(t) : J.extend({}, t);
            var e, n, i, r, s, a, l = [], c = !t.once && [], u = function (o) {
                for (e = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && s > a; a++)if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
                i = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : p.disable())
            }, p = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        !function o(e) {
                            J.each(e, function (e, n) {
                                var i = J.type(n);
                                "function" === i ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? s = l.length : e && (r = n, u(e))
                    }
                    return this
                }, remove: function () {
                    return l && J.each(arguments, function (t, e) {
                        for (var n; (n = J.inArray(e, l, n)) > -1;)l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                }, has: function (t) {
                    return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], s = 0, this
                }, disable: function () {
                    return l = c = e = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, e || p.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, e) {
                    return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                }, fire: function () {
                    return p.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return p
        }, J.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return J.Deferred(function (n) {
                            J.each(e, function (e, o) {
                                var s = J.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? J.extend(t, i) : i
                    }
                }, r = {};
                return i.pipe = i.then, J.each(e, function (t, o) {
                    var s = o[2], a = o[3];
                    i[o[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            }, when: function (t) {
                var e, n, i, r = 0, o = W.call(arguments), s = o.length, a = 1 !== s || t && J.isFunction(t.promise) ? s : 0, l = 1 === a ? t : J.Deferred(), c = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? W.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, e)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var ge;
        J.fn.ready = function (t) {
            return J.ready.promise().done(t), this
        }, J.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? J.readyWait++ : J.ready(!0)
            }, ready: function (t) {
                (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (ge.resolveWith(K, [J]), J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready"))))
            }
        }), J.ready.promise = function (e) {
            return ge || (ge = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
        }, J.ready.promise();
        var me = J.access = function (t, e, n, i, r, o, s) {
            var a = 0, l = t.length, c = null == n;
            if ("object" === J.type(n)) {
                r = !0;
                for (a in n)J.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, J.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(J(t), n)
                })), e))for (; l > a; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        };
        J.acceptData = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
            key: function (t) {
                if (!a.accepts(t))return 0;
                var e = {}, n = t[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        e[this.expando] = {value: n}, Object.defineProperties(t, e)
                    } catch (i) {
                        e[this.expando] = n, J.extend(t, e)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            }, set: function (t, e, n) {
                var i, r = this.key(t), o = this.cache[r];
                if ("string" == typeof e)o[e] = n; else if (J.isEmptyObject(o))J.extend(this.cache[r], e); else for (i in e)o[i] = e[i];
                return o
            }, get: function (t, e) {
                var n = this.cache[this.key(t)];
                return void 0 === e ? n : n[e]
            }, access: function (t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, J.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, i, r, o = this.key(t), s = this.cache[o];
                if (void 0 === e)this.cache[o] = {}; else {
                    J.isArray(e) ? i = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(he) || [])), n = i.length;
                    for (; n--;)delete s[i[n]]
                }
            }, hasData: function (t) {
                return !J.isEmptyObject(this.cache[t[this.expando]] || {})
            }, discard: function (t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var ve = new a, ye = new a, be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, we = /([A-Z])/g;
        J.extend({
            hasData: function (t) {
                return ye.hasData(t) || ve.hasData(t)
            }, data: function (t, e, n) {
                return ye.access(t, e, n)
            }, removeData: function (t, e) {
                ye.remove(t, e)
            }, _data: function (t, e, n) {
                return ve.access(t, e, n)
            }, _removeData: function (t, e) {
                ve.remove(t, e)
            }
        }), J.fn.extend({
            data: function (t, e) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(o, i, r[i])));
                        ve.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    ye.set(this, t)
                }) : me(this, function (e) {
                    var n, i = J.camelCase(t);
                    if (o && void 0 === e) {
                        if (n = ye.get(o, t), void 0 !== n)return n;
                        if (n = ye.get(o, i), void 0 !== n)return n;
                        if (n = l(o, i, void 0), void 0 !== n)return n
                    } else this.each(function () {
                        var n = ye.get(this, i);
                        ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    ye.remove(this, t)
                })
            }
        }), J.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || J.isArray(n) ? i = ve.access(t, e, J.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = J.queue(t, e), i = n.length, r = n.shift(), o = J._queueHooks(t, e), s = function () {
                    J.dequeue(t, e)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ve.get(t, n) || ve.access(t, n, {
                        empty: J.Callbacks("once memory").add(function () {
                            ve.remove(t, [e + "queue", n])
                        })
                    })
            }
        }), J.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? J.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = J.queue(this, t, e);
                    J._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && J.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    J.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, r = J.Deferred(), o = this, s = this.length, a = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = ve.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"], $e = function (t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        }, Ce = /^(?:checkbox|radio)$/i;
        !function () {
            var t = K.createDocumentFragment(), e = t.appendChild(K.createElement("div")), n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ee = "undefined";
        G.focusinBubbles = "onfocusin"in t;
        var Ae = /^key/, Se = /^(?:mouse|pointer|contextmenu)|click/, _e = /^(?:focusinfocus|focusoutblur)$/, ke = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var o, s, a, l, c, u, p, d, h, f, g, m = ve.get(t);
                if (m)for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                    return typeof J !== Ee && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(he) || [""], c = e.length; c--;)a = ke.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (p = J.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, p = J.event.special[h] || {}, u = J.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, f, s) !== !1 || t.addEventListener && t.addEventListener(h, s, !1)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), J.event.global[h] = !0)
            },
            remove: function (t, e, n, i, r) {
                var o, s, a, l, c, u, p, d, h, f, g, m = ve.hasData(t) && ve.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(he) || [""], c = e.length; c--;)if (a = ke.exec(e[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (p = J.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;)u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                        s && !d.length && (p.teardown && p.teardown.call(t, f, m.handle) !== !1 || J.removeEvent(t, h, m.handle), delete l[h])
                    } else for (h in l)J.event.remove(t, h + e[c], n, i, !0);
                    J.isEmptyObject(l) && (delete m.handle, ve.remove(t, "events"))
                }
            },
            trigger: function (e, n, i, r) {
                var o, s, a, l, c, u, p, d = [i || K], h = X.call(e, "type") ? e.type : e, f = X.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(h + J.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[J.expando] ? e : new J.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : J.makeArray(n, [e]), p = J.event.special[h] || {}, r || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                    if (!r && !p.noBubble && !J.isWindow(i)) {
                        for (l = p.delegateType || h, _e.test(l + h) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                        a === (i.ownerDocument || K) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0; (s = d[o++]) && !e.isPropagationStopped();)e.type = o > 1 ? l : p.bindType || h, u = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && J.acceptData(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                    return e.type = h, r || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[h]) && !J.isWindow(i) && (a = i[c], a && (i[c] = null), J.event.triggered = h, i[h](), J.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            dispatch: function (t) {
                t = J.event.fix(t);
                var e, n, i, r, o, s = [], a = W.call(arguments), l = (ve.get(this, "events") || {})[t.type] || [], c = J.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = J.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== t.type) {
                    for (i = [], n = 0; a > n; n++)o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
                    i.length && s.push({elem: l, handlers: i})
                }
                return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || K, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[J.expando])return t;
                var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Se.test(r) ? this.mouseHooks : Ae.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
                return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        return this !== p() && this.focus ? (this.focus(), !1) : void 0
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return J.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var r = J.extend(new J.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, J.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }, J.Event = function (t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
        }, J.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            J.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, r = t.relatedTarget, o = t.handleObj;
                    return (!r || r !== i && !J.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), G.focusinBubbles || J.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                J.event.simulate(e, t.target, J.event.fix(t), !0)
            };
            J.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = ve.access(i, e);
                    r || i.addEventListener(t, n, !0), ve.access(i, e, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = ve.access(i, e) - 1;
                    r ? ve.access(i, e, r) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
                }
            }
        }), J.fn.extend({
            on: function (t, e, n, i, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (s in t)this.on(s, e, n, t[s], r);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = u; else if (!i)return this;
                return 1 === r && (o = i, i = function (t) {
                    return J().off(t), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function () {
                    J.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, J(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t)this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = u), this.each(function () {
                    J.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    J.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                return n ? J.event.trigger(t, e, n, !0) : void 0
            }
        });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ne = /<([\w:]+)/, Oe = /<|&#?\w+;/, je = /<(?:script|style|link)/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, Ie = /^$|\/(?:java|ecma)script/i, qe = /^true\/(.*)/, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, J.extend({
            clone: function (t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0), l = J.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))for (s = v(a), o = v(t), i = 0, r = o.length; r > i; i++)y(o[i], s[i]);
                if (e)if (n)for (o = o || v(t), s = s || v(a), i = 0, r = o.length; r > i; i++)m(o[i], s[i]); else m(t, a);
                return s = v(a, "script"), s.length > 0 && g(s, !l && v(t, "script")), a
            }, buildFragment: function (t, e, n, i) {
                for (var r, o, s, a, l, c, u = e.createDocumentFragment(), p = [], d = 0, h = t.length; h > d; d++)if (r = t[d], r || 0 === r)if ("object" === J.type(r))J.merge(p, r.nodeType ? [r] : r); else if (Oe.test(r)) {
                    for (o = o || u.appendChild(e.createElement("div")), s = (Ne.exec(r) || ["", ""])[1].toLowerCase(), a = Pe[s] || Pe._default, o.innerHTML = a[1] + r.replace(De, "<$1></$2>") + a[2], c = a[0]; c--;)o = o.lastChild;
                    J.merge(p, o.childNodes), o = u.firstChild, o.textContent = ""
                } else p.push(e.createTextNode(r));
                for (u.textContent = "", d = 0; r = p[d++];)if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && g(o), n))for (c = 0; r = o[c++];)Ie.test(r.type || "") && n.push(r);
                return u
            }, cleanData: function (t) {
                for (var e, n, i, r, o = J.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                    if (J.acceptData(n) && (r = n[ve.expando], r && (e = ve.cache[r]))) {
                        if (e.events)for (i in e.events)o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, e.handle);
                        ve.cache[r] && delete ve.cache[r]
                    }
                    delete ye.cache[n[ye.expando]]
                }
            }
        }), J.fn.extend({
            text: function (t) {
                return me(this, function (t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? J.filter(t, this) : this, r = 0; null != (n = i[r]); r++)e || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (e && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return J.clone(this, t, e)
                })
            }, html: function (t) {
                return me(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                    if ("string" == typeof t && !je.test(t) && !Pe[(Ne.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(De, "<$1></$2>");
                        try {
                            for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = z.apply([], t);
                var n, i, r, o, s, a, l = 0, c = this.length, u = this, p = c - 1, d = t[0], g = J.isFunction(d);
                if (g || c > 1 && "string" == typeof d && !G.checkClone && Le.test(d))return this.each(function (n) {
                    var i = u.eq(n);
                    g && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (n = J.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (r = J.map(v(n, "script"), h), o = r.length; c > l; l++)s = n, l !== p && (s = J.clone(s, !0, !0), o && J.merge(r, v(s, "script"))), e.call(this[l], s, l);
                    if (o)for (a = r[r.length - 1].ownerDocument, J.map(r, f), l = 0; o > l; l++)s = r[l], Ie.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Re, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            J.fn[t] = function (t) {
                for (var n, i = [], r = J(t), o = r.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), J(r[s])[e](n), B.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var He, Fe = {}, Me = /^margin/, Ue = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), We = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
        !function () {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
                var e = t.getComputedStyle(s, null);
                n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
            }

            var n, i, r = K.documentElement, o = K.createElement("div"), s = K.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && J.extend(G, {
                pixelPosition: function () {
                    return e(), n
                }, boxSizingReliable: function () {
                    return null == i && e(), i
                }, reliableMarginRight: function () {
                    var e, n = s.appendChild(K.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), e
                }
            }))
        }(), J.swap = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e)s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e)t.style[o] = s[o];
            return r
        };
        var ze = /^(none|table(?!-c[ea]).+)/, Be = new RegExp("^(" + xe + ")(.*)$", "i"), Qe = new RegExp("^([+-])=(" + xe + ")", "i"), Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ye = {letterSpacing: "0", fontWeight: "400"}, Xe = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = x(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": "cssFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = J.camelCase(e), l = t.style;
                    return e = J.cssProps[a] || (J.cssProps[a] = $(l, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Qe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(t, e)), o = "number"), void(null != n && n === n && ("number" !== o || J.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
                }
            },
            css: function (t, e, n, i) {
                var r, o, s, a = J.camelCase(e);
                return e = J.cssProps[a] || (J.cssProps[a] = $(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get"in s && (r = s.get(t, !0, n)), void 0 === r && (r = x(t, e, i)), "normal" === r && e in Ye && (r = Ye[e]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
            }
        }), J.each(["height", "width"], function (t, e) {
            J.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? ze.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Ve, function () {
                        return A(t, e, i)
                    }) : A(t, e, i) : void 0
                }, set: function (t, n, i) {
                    var r = i && We(t);
                    return C(t, n, i ? E(t, e, i, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), J.cssHooks.marginRight = T(G.reliableMarginRight, function (t, e) {
            return e ? J.swap(t, {display: "inline-block"}, x, [t, "marginRight"]) : void 0
        }), J.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            J.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[t + Te[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, Me.test(t) || (J.cssHooks[t + e].set = C)
        }), J.fn.extend({
            css: function (t, e) {
                return me(this, function (t, e, n) {
                    var i, r, o = {}, s = 0;
                    if (J.isArray(e)) {
                        for (i = We(t), r = e.length; r > s; s++)o[e[s]] = J.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? J.style(t, e, n) : J.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return S(this, !0)
            }, hide: function () {
                return S(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    $e(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = _, _.prototype = {
            constructor: _, init: function (t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = _.propHooks[this.prop];
                return t && t.get ? t.get(this) : _.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = _.propHooks[this.prop];
                return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
            }
        }, _.prototype.init.prototype = _.prototype, _.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, J.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, J.fx = _.prototype.init, J.fx.step = {};
        var Ge, Ke, Ze = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"), tn = /queueHooks$/, en = [O], nn = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), r = Je.exec(e), o = r && r[3] || (J.cssNumber[t] ? "" : "px"), s = (J.cssNumber[t] || "px" !== o && +i) && Je.exec(J.css(n.elem, t)), a = 1, l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, J.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
        J.Animation = J.extend(L, {
            tweener: function (t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++)n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), J.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? J.extend({}, t) : {
                complete: n || !n && e || J.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !J.isFunction(e) && e
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter($e).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var r = J.isEmptyObject(t), o = J.speed(e, n, i), s = function () {
                    var e = L(this, J.extend({}, t), o);
                    (r || ve.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", o = J.timers, s = ve.get(this);
                    if (r)s[r] && s[r].stop && i(s[r]); else for (r in s)s[r] && s[r].stop && tn.test(r) && i(s[r]);
                    for (r = o.length; r--;)o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && J.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ve.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = J.timers, s = i ? i.length : 0;
                    for (n.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function (t, e) {
            var n = J.fn[e];
            J.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(D(e, !0), t, i, r)
            }
        }), J.each({
            slideDown: D("show"),
            slideUp: D("hide"),
            slideToggle: D("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            J.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), J.timers = [], J.fx.tick = function () {
            var t, e = 0, n = J.timers;
            for (Ge = J.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || J.fx.stop(), Ge = void 0
        }, J.fx.timer = function (t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function () {
            Ke || (Ke = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function () {
            clearInterval(Ke), Ke = null
        }, J.fx.speeds = {slow: 600, fast: 200, _default: 400}, J.fn.delay = function (t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t = K.createElement("input"), e = K.createElement("select"), n = e.appendChild(K.createElement("option"));
            t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled = !0, G.optDisabled = !n.disabled, t = K.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
        }();
        var rn, on, sn = J.expr.attrHandle;
        J.fn.extend({
            attr: function (t, e) {
                return me(this, J.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    J.removeAttr(this, t)
                })
            }
        }), J.extend({
            attr: function (t, e, n) {
                var i, r, o = t.nodeType;
                return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Ee ? J.prop(t, e, n) : (1 === o && J.isXMLDoc(t) || (e = e.toLowerCase(), i = J.attrHooks[e] || (J.expr.match.bool.test(e) ? on : rn)), void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = J.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void J.removeAttr(t, e)) : void 0
            }, removeAttr: function (t, e) {
                var n, i, r = 0, o = e && e.match(he);
                if (o && 1 === t.nodeType)for (; n = o[r++];)i = J.propFix[n] || n, J.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!G.radioValue && "radio" === e && J.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), on = {
            set: function (t, e, n) {
                return e === !1 ? J.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = sn[e] || J.find.attr;
            sn[e] = function (t, e, i) {
                var r, o;
                return i || (o = sn[e], sn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, sn[e] = o), r
            }
        });
        var an = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function (t, e) {
                return me(this, J.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[J.propFix[t] || t]
                })
            }
        }), J.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, r, o, s = t.nodeType;
                return t && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !J.isXMLDoc(t), o && (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (J.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            J.propFix[this.toLowerCase()] = this
        });
        var ln = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s, a = "string" == typeof t && t, l = 0, c = this.length;
                if (J.isFunction(t))return this.each(function (e) {
                    J(this).addClass(t.call(this, e, this.className))
                });
                if (a)for (e = (t || "").match(he) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                    for (o = 0; r = e[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    s = J.trim(i), n.className !== s && (n.className = s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, c = this.length;
                if (J.isFunction(t))return this.each(function (e) {
                    J(this).removeClass(t.call(this, e, this.className))
                });
                if (a)for (e = (t || "").match(he) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                    for (o = 0; r = e[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                    s = t ? J.trim(i) : "", n.className !== s && (n.className = s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function (n) {
                    J(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function () {
                    if ("string" === n)for (var e, i = 0, r = J(this), o = t.match(he) || []; e = o[i++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else(n === Ee || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0)return !0;
                return !1
            }
        });
        var cn = /\r/g;
        J.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = J.isFunction(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, J(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)) : void 0
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = J.find.attr(t, "value");
                        return null != e ? e : J.trim(J.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (e = J(n).val(), o)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, r = t.options, o = J.makeArray(e), s = r.length; s--;)i = r[s], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function () {
            J.valHooks[this] = {
                set: function (t, e) {
                    return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (J.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            J.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), J.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var un = J.now(), pn = /\?/;
        J.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, J.parseXML = function (t) {
            var e, n;
            if (!t || "string" != typeof t)return null;
            try {
                n = new DOMParser, e = n.parseFromString(t, "text/xml")
            } catch (i) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
        };
        var dn = /#.*$/, hn = /([?&])_=[^&]*/, fn = /^(.*?):[ \t]*([^\r\n]*)$/gm, gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mn = /^(?:GET|HEAD)$/, vn = /^\/\//, yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bn = {}, wn = {}, xn = "*/".concat("*"), Tn = t.location.href, $n = yn.exec(Tn.toLowerCase()) || [];
        J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tn,
                type: "GET",
                isLocal: gn.test($n[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? R(R(t, J.ajaxSettings), e) : R(J.ajaxSettings, t)
            },
            ajaxPrefilter: I(bn),
            ajaxTransport: I(wn),
            ajax: function (t, e) {
                function n(t, e, n, s) {
                    var l, u, v, y, w, T = e;
                    2 !== b && (b = 2, a && clearTimeout(a), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = P(p, x, n)), y = H(p, y, x, l), l ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (J.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (J.etag[r] = w)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, l = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", l ? f.resolveWith(d, [u, T, x]) : f.rejectWith(d, [x, T, v]), x.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? u : v]), g.fireWith(d, [x, T]), c && (h.trigger("ajaxComplete", [x, p]), --J.active || J.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, s, a, l, c, u, p = J.ajaxSetup({}, e), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? J(d) : J.event, f = J.Deferred(), g = J.Callbacks("once memory"), m = p.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!s)for (s = {}; e = fn.exec(o);)s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (2 > b)for (e in t)m[e] = [m[e], t[e]]; else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return i && i.abort(e), n(0, e), this
                    }
                };
                if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || Tn) + "").replace(dn, "").replace(vn, $n[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = J.trim(p.dataType || "*").toLowerCase().match(he) || [""], null == p.crossDomain && (l = yn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === $n[1] && l[2] === $n[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === ($n[3] || ("http:" === $n[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), q(bn, p, e, x), 2 === b)return x;
                c = J.event && p.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mn.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (pn.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = hn.test(r) ? r.replace(hn, "$1_=" + un++) : r + (pn.test(r) ? "&" : "?") + "_=" + un++)), p.ifModified && (J.lastModified[r] && x.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && x.setRequestHeader("If-None-Match", J.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + xn + "; q=0.01" : "") : p.accepts["*"]);
                for (u in p.headers)x.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === b))return x.abort();
                w = "abort";
                for (u in{success: 1, error: 1, complete: 1})x[u](p[u]);
                if (i = q(wn, p, e, x)) {
                    x.readyState = 1, c && h.trigger("ajaxSend", [x, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (T) {
                        if (!(2 > b))throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (t, e, n) {
                return J.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return J.get(t, void 0, e, "script")
            }
        }), J.each(["get", "post"], function (t, e) {
            J[e] = function (t, n, i, r) {
                return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), J._evalUrl = function (t) {
            return J.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, J.fn.extend({
            wrapAll: function (t) {
                var e;
                return J.isFunction(t) ? this.each(function (e) {
                    J(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                    return t
                }).append(this)), this)
            }, wrapInner: function (t) {
                return this.each(J.isFunction(t) ? function (e) {
                    J(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = J(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = J.isFunction(t);
                return this.each(function (n) {
                    J(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, J.expr.filters.visible = function (t) {
            return !J.expr.filters.hidden(t)
        };
        var Cn = /%20/g, En = /\[\]$/, An = /\r?\n/g, Sn = /^(?:submit|button|image|reset|file)$/i, _n = /^(?:input|select|textarea|keygen)/i;
        J.param = function (t, e) {
            var n, i = [], r = function (t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t))J.each(t, function () {
                r(this.name, this.value)
            }); else for (n in t)F(n, t[n], e, r);
            return i.join("&").replace(Cn, "+")
        }, J.fn.extend({
            serialize: function () {
                return J.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = J.prop(this, "elements");
                    return t ? J.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !J(this).is(":disabled") && _n.test(this.nodeName) && !Sn.test(t) && (this.checked || !Ce.test(t))
                }).map(function (t, e) {
                    var n = J(this).val();
                    return null == n ? null : J.isArray(n) ? J.map(n, function (t) {
                        return {name: e.name, value: t.replace(An, "\r\n")}
                    }) : {name: e.name, value: n.replace(An, "\r\n")}
                }).get()
            }
        }), J.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (t) {
            }
        };
        var kn = 0, Dn = {}, Nn = {0: 200, 1223: 204}, On = J.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Dn)Dn[t]()
        }), G.cors = !!On && "withCredentials"in On, G.ajax = On = !!On, J.ajaxTransport(function (t) {
            var e;
            return G.cors || On && !t.crossDomain ? {
                send: function (n, i) {
                    var r, o = t.xhr(), s = ++kn;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)o.setRequestHeader(r, n[r]);
                    e = function (t) {
                        return function () {
                            e && (delete Dn[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(Nn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = e(), o.onerror = e("error"), e = Dn[s] = e("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (a) {
                        if (e)throw a
                    }
                }, abort: function () {
                    e && e()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return J.globalEval(t), t
                }
            }
        }), J.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), J.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, r) {
                        e = J("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), K.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var jn = [], Ln = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = jn.pop() || J.expando + "_" + un++;
                return this[t] = !0, t
            }
        }), J.ajaxPrefilter("json jsonp", function (e, n, i) {
            var r, o, s, a = e.jsonp !== !1 && (Ln.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ln.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ln, "$1" + r) : e.jsonp !== !1 && (e.url += (pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return s || J.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
                s = arguments
            }, i.always(function () {
                t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, jn.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), J.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || K;
            var i = se.exec(t), r = !n && [];
            return i ? [e.createElement(i[1])] : (i = J.buildFragment([t], e, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
        };
        var In = J.fn.load;
        J.fn.load = function (t, e, n) {
            if ("string" != typeof t && In)return In.apply(this, arguments);
            var i, r, o, s = this, a = t.indexOf(" ");
            return a >= 0 && (i = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && J.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, s.html(i ? J("<div>").append(J.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            J.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), J.expr.filters.animated = function (t) {
            return J.grep(J.timers, function (e) {
                return t === e.elem
            }).length
        };
        var qn = t.document.documentElement;
        J.offset = {
            setOffset: function (t, e, n) {
                var i, r, o, s, a, l, c, u = J.css(t, "position"), p = J(t), d = {};
                "static" === u && (t.style.position = "relative"), a = p.offset(), o = J.css(t, "top"), l = J.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = p.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using"in e ? e.using.call(t, d) : p.css(d)
            }
        }, J.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    J.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
                return o ? (e = o.documentElement, J.contains(e, i) ? (typeof i.getBoundingClientRect !== Ee && (r = i.getBoundingClientRect()), n = M(o), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r) : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n = this[0], i = {top: 0, left: 0};
                    return "fixed" === J.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (i = t.offset()), i.top += J.css(t[0], "borderTopWidth", !0), i.left += J.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - J.css(n, "marginTop", !0),
                        left: e.left - i.left - J.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || qn; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");)t = t.offsetParent;
                    return t || qn
                })
            }
        }), J.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
            var i = "pageYOffset" === n;
            J.fn[e] = function (r) {
                return me(this, function (e, r, o) {
                    var s = M(e);
                    return void 0 === o ? s ? s[n] : e[r] : void(s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }), J.each(["top", "left"], function (t, e) {
            J.cssHooks[e] = T(G.pixelPosition, function (t, n) {
                return n ? (n = x(t, e), Ue.test(n) ? J(t).position()[e] + "px" : n) : void 0
            })
        }), J.each({Height: "height", Width: "width"}, function (t, e) {
            J.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                J.fn[i] = function (i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return me(this, function (e, n, i) {
                        var r;
                        return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? J.css(e, n, s) : J.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), J.fn.size = function () {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return J
        });
        var Rn = t.jQuery, Pn = t.$;
        return J.noConflict = function (e) {
            return t.$ === J && (t.$ = Pn), e && t.jQuery === J && (t.jQuery = Rn), J
        }, typeof e === Ee && (t.jQuery = t.$ = J), J
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var r = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }

        var r = t(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.button"), o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.2", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, r = i.is("input") ? "val" : "html", o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function () {
            i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.carousel"), o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)return e;
        var r = "prev" == t ? -1 : 1, o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var r = this.$element.find(".item.active"), o = i || this.getItemForDirection(e, r), s = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (o.hasClass("active"))return this.sliding = !1;
        var c = o[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function () {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var r = function (n) {
        var i, r = t(this), o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()), a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.collapse"), o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && "show" == e && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r), s = o.data("bs.collapse"), a = s ? "toggle" : t.extend({}, r.data(), {trigger: this});
        n.call(o, a)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(r).remove(), t(o).each(function () {
            var i = t(this), r = n(i), o = {relatedTarget: this};
            r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o)))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var r = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.2", s.prototype.toggle = function (i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r), s = o.hasClass("open");
            if (e(), !s) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {relatedTarget: this};
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = n(i), s = r.hasClass("open");
                if (!s && 27 != e.which || s && 27 == e.which)return 27 == e.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.divider):visible a", l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var c = l.index(e.target);
                    38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var r = t(this), o = r.data("bs.modal"), s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, r = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            r ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t('<div class="modal-backdrop ' + r + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, n.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), r = i.attr("href"), o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(r) && r}, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tooltip"), o = "object" == typeof e && e;
            (r || "destroy" != e) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }

    var n = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var r = this, o = this.tip(), s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var u = this.getPosition(), p = o[0].offsetWidth, d = o[0].offsetHeight;
            if (c) {
                var h = a, f = this.options.container ? t(this.options.container) : this.$element.parent(), g = this.getPosition(f);
                a = "bottom" == a && u.bottom + d > g.bottom ? "top" : "top" == a && u.top - d < g.top ? "bottom" : "right" == a && u.right + p > g.width ? "left" : "left" == a && u.left - p < g.left ? "right" : a, o.removeClass(h).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, p, d);
            this.applyPlacement(m, a);
            var v = function () {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var p = /top|bottom/.test(n), d = p ? 2 * u.left - r + l : 2 * u.top - o + c, h = p ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][h], p)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }

        var r = this, o = this.tip(), s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {width: r.right - r.left, height: r.bottom - r.top}));
        var o = i ? {
            top: 0,
            left: 0
        } : e.offset(), s = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, r, s, a, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var r = {top: 0, left: 0};
        if (!this.$viewport)return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll, l = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = e.left - o, u = e.left + o + n;
            c < s.left ? r.left = s.left - c : u > s.width && (r.left = s.left + s.width - u)
        }
        return r
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.popover"), o = "object" == typeof e && e;
            (r || "destroy" != e) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.2", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        var r = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }

    e.VERSION = "3.3.2", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = "offset", n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function () {
            var i = t(this), r = i.data("target") || i.attr("href"), o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[e]().top + n, r]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0])return this.activeTarget = null, this.clear();
        for (t = r.length; t--;)s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}), s = t.Event("show.bs.tab", {relatedTarget: r[0]});
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    r.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }

        var s = i.find("> .active"), a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var r = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.affix"), o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.2", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var r = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed)return n > r ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : t - i >= r + s ? !1 : "bottom";
        var a = null == this.affixed, l = a ? r : o.top, c = a ? s : e;
        return null != n && n >= r ? "top" : null != i && l + c >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, r = i.top, o = i.bottom, s = t("body").height();
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: s - e - o})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), !function () {
    if (window.define)var t = window.define;
    if (window.require)var e = window.require;
    if (window.jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)var t = jQuery.fn.select2.amd.define, e = jQuery.fn.select2.amd.require;
    var n, e, t;
    !function (i) {
        function r(t, e) {
            return w.call(t, e)
        }

        function o(t, e) {
            var n, i, r, o, s, a, l, c, u, p, d, h = e && e.split("/"), f = y.map, g = f && f["*"] || {};
            if (t && "." === t.charAt(0))if (e) {
                for (h = h.slice(0, h.length - 1), t = t.split("/"), s = t.length - 1, y.nodeIdCompat && T.test(t[s]) && (t[s] = t[s].replace(T, "")), t = h.concat(t), u = 0; u < t.length; u += 1)if (d = t[u], "." === d)t.splice(u, 1), u -= 1; else if (".." === d) {
                    if (1 === u && (".." === t[2] || ".." === t[0]))break;
                    u > 0 && (t.splice(u - 1, 2), u -= 2)
                }
                t = t.join("/")
            } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((h || g) && f) {
                for (n = t.split("/"), u = n.length; u > 0; u -= 1) {
                    if (i = n.slice(0, u).join("/"), h)for (p = h.length; p > 0; p -= 1)if (r = f[h.slice(0, p).join("/")], r && (r = r[i])) {
                        o = r, a = u;
                        break
                    }
                    if (o)break;
                    !l && g && g[i] && (l = g[i], c = u)
                }
                !o && l && (o = l, a = c), o && (n.splice(0, a, o), t = n.join("/"))
            }
            return t
        }

        function s(t, e) {
            return function () {
                return h.apply(i, x.call(arguments, 0).concat([t, e]))
            }
        }

        function a(t) {
            return function (e) {
                return o(e, t)
            }
        }

        function l(t) {
            return function (e) {
                m[t] = e
            }
        }

        function c(t) {
            if (r(v, t)) {
                var e = v[t];
                delete v[t], b[t] = !0, d.apply(i, e)
            }
            if (!r(m, t) && !r(b, t))throw new Error("No " + t);
            return m[t]
        }

        function u(t) {
            var e, n = t ? t.indexOf("!") : -1;
            return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
        }

        function p(t) {
            return function () {
                return y && y.config && y.config[t] || {}
            }
        }

        var d, h, f, g, m = {}, v = {}, y = {}, b = {}, w = Object.prototype.hasOwnProperty, x = [].slice, T = /\.js$/;
        f = function (t, e) {
            var n, i = u(t), r = i[0];
            return t = i[1], r && (r = o(r, e), n = c(r)), r ? t = n && n.normalize ? n.normalize(t, a(e)) : o(t, e) : (t = o(t, e), i = u(t), r = i[0], t = i[1], r && (n = c(r))), {
                f: r ? r + "!" + t : t,
                n: t,
                pr: r,
                p: n
            }
        }, g = {
            require: function (t) {
                return s(t)
            }, exports: function (t) {
                var e = m[t];
                return "undefined" != typeof e ? e : m[t] = {}
            }, module: function (t) {
                return {id: t, uri: "", exports: m[t], config: p(t)}
            }
        }, d = function (t, e, n, o) {
            var a, u, p, d, h, y, w = [], x = typeof n;
            if (o = o || t, "undefined" === x || "function" === x) {
                for (e = !e.length && n.length ? ["require", "exports", "module"] : e, h = 0; h < e.length; h += 1)if (d = f(e[h], o), u = d.f, "require" === u)w[h] = g.require(t); else if ("exports" === u)w[h] = g.exports(t), y = !0; else if ("module" === u)a = w[h] = g.module(t); else if (r(m, u) || r(v, u) || r(b, u))w[h] = c(u); else {
                    if (!d.p)throw new Error(t + " missing " + u);
                    d.p.load(d.n, s(o, !0), l(u), {}), w[h] = m[u]
                }
                p = n ? n.apply(m[t], w) : void 0, t && (a && a.exports !== i && a.exports !== m[t] ? m[t] = a.exports : p === i && y || (m[t] = p))
            } else t && (m[t] = n)
        }, n = e = h = function (t, e, n, r, o) {
            if ("string" == typeof t)return g[t] ? g[t](e) : c(f(t, e).f);
            if (!t.splice) {
                if (y = t, y.deps && h(y.deps, y.callback), !e)return;
                e.splice ? (t = e, e = n, n = null) : t = i
            }
            return e = e || function () {
            }, "function" == typeof n && (n = r, r = o), r ? d(i, t, e, n) : setTimeout(function () {
                d(i, t, e, n)
            }, 4), h
        }, h.config = function (t) {
            return h(t)
        }, n._defined = m, t = function (t, e, n) {
            e.splice || (n = e, e = []), r(m, t) || r(v, t) || (v[t] = [t, e, n])
        }, t.amd = {jQuery: !0}
    }(), t("almond", function () {
    }), t("jquery", [], function () {
        var t = jQuery || $;
        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
    }), t("select2/utils", ["jquery"], function (t) {
        function e(t) {
            var e = t.prototype, n = [];
            for (var i in e) {
                var r = e[i];
                "function" == typeof r && "constructor" !== i && n.push(i)
            }
            return n
        }

        var n = {};
        n.Extend = function (t, e) {
            function n() {
                this.constructor = t
            }

            var i = {}.hasOwnProperty;
            for (var r in e)i.call(e, r) && (t[r] = e[r]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, n.Decorate = function (t, n) {
            function i() {
                var e = Array.prototype.unshift, i = n.prototype.constructor.length, r = t.prototype.constructor;
                i > 0 && (e.call(arguments, t.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
            }

            function r() {
                this.constructor = i
            }

            var o = e(n), s = e(t);
            n.displayName = t.displayName, i.prototype = new r;
            for (var a = 0; a < s.length; a++) {
                var l = s[a];
                i.prototype[l] = t.prototype[l]
            }
            for (var c = (function (t) {
                var e = function () {
                };
                t in i.prototype && (e = i.prototype[t]);
                var r = n.prototype[t];
                return function () {
                    var t = Array.prototype.unshift;
                    return t.call(arguments, e), r.apply(this, arguments)
                }
            }), u = 0; u < o.length; u++) {
                var p = o[u];
                i.prototype[p] = c(p)
            }
            return i
        };
        var i = function () {
            this.listeners = {}
        };
        return i.prototype.on = function (t, e) {
            this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
        }, i.prototype.trigger = function (t) {
            var e = Array.prototype.slice;
            this.listeners = this.listeners || {}, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
        }, i.prototype.invoke = function (t, e) {
            for (var n = 0, i = t.length; i > n; n++)t[n].apply(this, e)
        }, n.Observable = i, n.generateChars = function (t) {
            for (var e = "", n = 0; t > n; n++) {
                var i = Math.floor(36 * Math.random());
                e += i.toString(36)
            }
            return e
        }, n.bind = function (t, e) {
            return function () {
                t.apply(e, arguments)
            }
        }, n._convertData = function (t) {
            for (var e in t) {
                var n = e.split("-"), i = t;
                if (1 !== n.length) {
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), r == n.length - 1 && (i[o] = t[e]), i = i[o]
                    }
                    delete t[e]
                }
            }
            return t
        }, n.hasScroll = function (e, n) {
            var i = t(n), r = n.style.overflowX, o = n.style.overflowY;
            return r !== o || "hidden" !== o && "visible" !== o ? "scroll" === r || "scroll" === o ? !0 : i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth : !1
        }, n.escapeMarkup = function (t) {
            var e = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
            return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function (t) {
                return e[t]
            })
        }, n
    }), t("select2/results", ["jquery", "./utils"], function (t, e) {
        function n(t, e, i) {
            this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
        }

        return e.Extend(n, e.Observable), n.prototype.render = function () {
            var e = t('<ul class="select2-results__options" role="tree"></ul>');
            return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
        }, n.prototype.clear = function () {
            this.$results.empty()
        }, n.prototype.displayMessage = function (e) {
            var n = this.options.get("escapeMarkup");
            this.clear(), this.hideLoading();
            var i = t('<li role="treeitem" class="select2-results__option"></li>'), r = this.options.get("translations").get(e.message);
            i.append(n(r(e.args))), this.$results.append(i)
        }, n.prototype.append = function (t) {
            this.hideLoading();
            var e = [];
            if (null == t.results || 0 === t.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
            t.results = this.sort(t.results);
            for (var n = 0; n < t.results.length; n++) {
                var i = t.results[n], r = this.option(i);
                e.push(r)
            }
            this.$results.append(e)
        }, n.prototype.position = function (t, e) {
            var n = e.find(".select2-results");
            n.append(t)
        }, n.prototype.sort = function (t) {
            var e = this.options.get("sorter");
            return e(t)
        }, n.prototype.setClasses = function () {
            var e = this;
            this.data.current(function (n) {
                var i = t.map(n, function (t) {
                    return t.id.toString()
                }), r = e.$results.find(".select2-results__option[aria-selected]");
                r.each(function () {
                    var e = t(this), n = t.data(this, "data");
                    t.inArray(n.id, i) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                });
                var o = r.filter("[aria-selected=true]");
                o.length > 0 ? o.first().trigger("mouseenter") : r.first().trigger("mouseenter")
            })
        }, n.prototype.showLoading = function (t) {
            this.hideLoading();
            var e = this.options.get("translations").get("searching"), n = {
                disabled: !0,
                loading: !0,
                text: e(t)
            }, i = this.option(n);
            i.className += " loading-results", this.$results.prepend(i)
        }, n.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove()
        }, n.prototype.option = function (e) {
            var n = document.createElement("li");
            n.className = "select2-results__option";
            var i = {role: "treeitem", "aria-selected": "false"};
            e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]);
            for (var r in i) {
                var o = i[r];
                n.setAttribute(r, o)
            }
            if (e.children) {
                var s = t(n), a = document.createElement("strong");
                a.className = "select2-results__group", t(a), this.template(e, a);
                for (var l = [], c = 0; c < e.children.length; c++) {
                    var u = e.children[c], p = this.option(u);
                    l.push(p)
                }
                var d = t("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                d.append(l), s.append(a), s.append(d)
            } else this.template(e, n);
            return t.data(n, "data", e), n
        }, n.prototype.bind = function (e) {
            var n = this, i = e.id + "-results";
            this.$results.attr("id", i), e.on("results:all", function (t) {
                n.clear(), n.append(t.data), e.isOpen() && n.setClasses()
            }), e.on("results:append", function (t) {
                n.append(t.data), e.isOpen() && n.setClasses()
            }), e.on("query", function (t) {
                n.showLoading(t)
            }), e.on("select", function () {
                e.isOpen() && n.setClasses()
            }), e.on("unselect", function () {
                e.isOpen() && n.setClasses()
            }), e.on("open", function () {
                n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
            }), e.on("close", function () {
                n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
            }), e.on("results:toggle", function () {
                var t = n.getHighlightedResults();
                0 !== t.length && t.trigger("mouseup")
            }), e.on("results:select", function () {
                var t = n.getHighlightedResults();
                if (0 !== t.length) {
                    var e = t.data("data");
                    "true" == t.attr("aria-selected") ? n.trigger("close") : n.trigger("select", {data: e})
                }
            }), e.on("results:previous", function () {
                var t = n.getHighlightedResults(), e = n.$results.find("[aria-selected]"), i = e.index(t);
                if (0 !== i) {
                    var r = i - 1;
                    0 === t.length && (r = 0);
                    var o = e.eq(r);
                    o.trigger("mouseenter");
                    var s = n.$results.offset().top, a = o.offset().top, l = n.$results.scrollTop() + (a - s);
                    0 === r ? n.$results.scrollTop(0) : 0 > a - s && n.$results.scrollTop(l)
                }
            }), e.on("results:next", function () {
                var t = n.getHighlightedResults(), e = n.$results.find("[aria-selected]"), i = e.index(t), r = i + 1;
                if (!(r >= e.length)) {
                    var o = e.eq(r);
                    o.trigger("mouseenter");
                    var s = n.$results.offset().top + n.$results.outerHeight(!1), a = o.offset().top + o.outerHeight(!1), l = n.$results.scrollTop() + a - s;
                    0 === r ? n.$results.scrollTop(0) : a > s && n.$results.scrollTop(l)
                }
            }), e.on("results:focus", function (t) {
                t.element.addClass("select2-results__option--highlighted")
            }), e.on("results:message", function (t) {
                n.displayMessage(t)
            }), t.fn.mousewheel && this.$results.on("mousewheel", function (t) {
                var e = n.$results.scrollTop(), i = n.$results.get(0).scrollHeight - n.$results.scrollTop() + t.deltaY, r = t.deltaY > 0 && e - t.deltaY <= 0, o = t.deltaY < 0 && i <= n.$results.height();
                r ? (n.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), t.preventDefault(), t.stopPropagation())
            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                var i = t(this), r = i.data("data");
                return "true" === i.attr("aria-selected") ? void(n.options.get("multiple") ? n.trigger("unselect", {
                    originalEvent: e,
                    data: r
                }) : n.trigger("close")) : void n.trigger("select", {originalEvent: e, data: r})
            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
                var e = t(this).data("data");
                n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                    data: e,
                    element: t(this)
                })
            })
        }, n.prototype.getHighlightedResults = function () {
            var t = this.$results.find(".select2-results__option--highlighted");
            return t
        }, n.prototype.destroy = function () {
            this.$results.remove()
        }, n.prototype.ensureHighlightVisible = function () {
            var t = this.getHighlightedResults();
            if (0 !== t.length) {
                var e = this.$results.find("[aria-selected]"), n = e.index(t), i = this.$results.offset().top, r = t.offset().top, o = this.$results.scrollTop() + (r - i), s = r - i;
                o -= 2 * t.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(o)
            }
        }, n.prototype.template = function (e, n) {
            var i = this.options.get("templateResult"), r = this.options.get("escapeMarkup"), o = i(e);
            null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : t(n).append(o)
        }, n
    }), t("select2/keys", [], function () {
        var t = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
        };
        return t
    }), t("select2/selection/base", ["jquery", "../utils", "../keys"], function (t, e, n) {
        function i(t, e) {
            this.$element = t, this.options = e, i.__super__.constructor.call(this)
        }

        return e.Extend(i, e.Observable), i.prototype.render = function () {
            var e = t('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
            return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
        }, i.prototype.bind = function (t) {
            var e = this, i = (t.id + "-container", t.id + "-results");
            this.container = t, this.$selection.attr("aria-owns", i), this.$selection.on("focus", function (t) {
                e.trigger("focus", t)
            }), this.$selection.on("blur", function (t) {
                e.trigger("blur", t)
            }), this.$selection.on("keydown", function (t) {
                e.trigger("keypress", t), t.which === n.SPACE && t.preventDefault()
            }), t.on("results:focus", function (t) {
                e.$selection.attr("aria-activedescendant", t.data._resultId)
            }), t.on("selection:update", function (t) {
                e.update(t.data)
            }), t.on("open", function () {
                e.$selection.attr("aria-expanded", "true"), e._attachCloseHandler(t)
            }), t.on("close", function () {
                e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.focus(), e._detachCloseHandler(t)
            }), t.on("enable", function () {
                e.$selection.attr("tabindex", e._tabindex)
            }), t.on("disable", function () {
                e.$selection.attr("tabindex", "-1")
            })
        }, i.prototype._attachCloseHandler = function (e) {
            t(document.body).on("mousedown.select2." + e.id, function (e) {
                var n = t(e.target), i = n.closest(".select2"), r = t(".select2.select2-container--open");
                r.each(function () {
                    var e = t(this);
                    if (this != i[0]) {
                        var n = e.data("element");
                        n.select2("close")
                    }
                })
            })
        }, i.prototype._detachCloseHandler = function (e) {
            t(document.body).off("mousedown.select2." + e.id)
        }, i.prototype.position = function (t, e) {
            var n = e.find(".selection");
            n.append(t)
        }, i.prototype.destroy = function () {
            this._detachCloseHandler(this.container)
        }, i.prototype.update = function () {
            throw new Error("The `update` method must be defined in child classes.")
        }, i
    }), t("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, n) {
        function i() {
            i.__super__.constructor.apply(this, arguments)
        }

        return n.Extend(i, e), i.prototype.render = function () {
            var t = i.__super__.render.call(this);
            return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
        }, i.prototype.bind = function (t) {
            var e = this;
            i.__super__.bind.apply(this, arguments);
            var n = t.id + "-container";
            this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function (t) {
                1 === t.which && e.trigger("toggle", {originalEvent: t})
            }), this.$selection.on("focus", function () {
            }), this.$selection.on("blur", function () {
            }), t.on("selection:update", function (t) {
                e.update(t.data)
            })
        }, i.prototype.clear = function () {
            this.$selection.find(".select2-selection__rendered").empty()
        }, i.prototype.display = function (t) {
            var e = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
            return n(e(t))
        }, i.prototype.selectionContainer = function () {
            return t("<span></span>")
        }, i.prototype.update = function (t) {
            if (0 === t.length)return void this.clear();
            var e = t[0], n = this.display(e), i = this.$selection.find(".select2-selection__rendered");
            i.empty().append(n), i.prop("title", e.title || e.text)
        }, i
    }), t("select2/selection/multiple", ["jquery", "./base", "../utils"], function (t, e, n) {
        function i() {
            i.__super__.constructor.apply(this, arguments)
        }

        return n.Extend(i, e), i.prototype.render = function () {
            var t = i.__super__.render.call(this);
            return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
        }, i.prototype.bind = function () {
            var e = this;
            i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (t) {
                e.trigger("toggle", {originalEvent: t})
            }), this.$selection.on("click", ".select2-selection__choice__remove", function (n) {
                var i = t(this), r = i.parent(), o = r.data("data");
                e.trigger("unselect", {originalEvent: n, data: o})
            })
        }, i.prototype.clear = function () {
            this.$selection.find(".select2-selection__rendered").empty()
        }, i.prototype.display = function (t) {
            var e = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
            return n(e(t))
        }, i.prototype.selectionContainer = function () {
            var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            return e
        }, i.prototype.update = function (t) {
            if (this.clear(), 0 !== t.length) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n], r = this.display(i), o = this.selectionContainer();
                    o.append(r), o.prop("title", i.title || i.text), o.data("data", i), e.push(o)
                }
                this.$selection.find(".select2-selection__rendered").append(e)
            }
        }, i
    }), t("select2/selection/placeholder", ["../utils"], function () {
        function t(t, e, n) {
            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
        }

        return t.prototype.normalizePlaceholder = function (t, e) {
            return "string" == typeof e && (e = {id: "", text: e}), e
        }, t.prototype.createPlaceholder = function (t, e) {
            var n = this.selectionContainer();
            return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
        }, t.prototype.update = function (t, e) {
            var n = 1 == e.length && e[0].id != this.placeholder.id, i = e.length > 1;
            if (i || n)return t.call(this, e);
            this.clear();
            var r = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(r)
        }, t
    }), t("select2/selection/allowClear", ["jquery"], function (t) {
        function e() {
        }

        return e.prototype.bind = function (e, n, i) {
            var r = this;
            e.call(this, n, i), null == r.placeholder && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                if (!r.options.get("disabled")) {
                    e.stopPropagation();
                    for (var n = t(this).data("data"), i = 0; i < n.length; i++) {
                        var o = {data: n[i]};
                        if (r.trigger("unselect", o), o.prevented)return
                    }
                    r.$element.val(r.placeholder.id).trigger("change"), r.trigger("toggle")
                }
            })
        }, e.prototype.update = function (e, n) {
            if (e.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                var i = t('<span class="select2-selection__clear">&times;</span>');
                i.data("data", n), this.$selection.find(".select2-selection__rendered").append(i)
            }
        }, e
    }), t("select2/selection/search", ["jquery", "../utils", "../keys"], function (t, e, n) {
        function i(t, e, n) {
            t.call(this, e, n)
        }

        return i.prototype.render = function (e) {
            var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
            this.$searchContainer = n, this.$search = n.find("input");
            var i = e.call(this);
            return i
        }, i.prototype.bind = function (t, e, i) {
            var r = this;
            t.call(this, e, i), e.on("open", function () {
                r.$search.attr("tabindex", 0), r.$search.focus()
            }), e.on("close", function () {
                r.$search.attr("tabindex", -1), r.$search.val(""), r.$search.focus()
            }), e.on("enable", function () {
                r.$search.prop("disabled", !1)
            }), e.on("disable", function () {
                r.$search.prop("disabled", !0)
            }), this.$selection.on("focusin", ".select2-search--inline", function (t) {
                r.trigger("focus", t)
            }), this.$selection.on("focusout", ".select2-search--inline", function (t) {
                r.trigger("blur", t)
            }), this.$selection.on("keydown", ".select2-search--inline", function (t) {
                t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented();
                var e = t.which;
                if (e === n.BACKSPACE && "" === r.$search.val()) {
                    var i = r.$searchContainer.prev(".select2-selection__choice");
                    if (i.length > 0) {
                        var o = i.data("data");
                        r.searchRemoveChoice(o)
                    }
                }
            }), this.$selection.on("input", ".select2-search--inline", function () {
                r.$selection.off("keyup.search")
            }), this.$selection.on("keyup.search input", ".select2-search--inline", function (t) {
                r.handleSearch(t)
            })
        }, i.prototype.createPlaceholder = function (t, e) {
            this.$search.attr("placeholder", e.text)
        }, i.prototype.update = function (t, e) {
            this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
        }, i.prototype.handleSearch = function () {
            if (this.resizeSearch(), !this._keyUpPrevented) {
                var t = this.$search.val();
                this.trigger("query", {term: t})
            }
            this._keyUpPrevented = !1
        }, i.prototype.searchRemoveChoice = function (t, e) {
            this.trigger("unselect", {data: e}), this.trigger("open"), this.$search.val(e.text + " ")
        }, i.prototype.resizeSearch = function () {
            this.$search.css("width", "25px");
            var t = "";
            if ("" !== this.$search.attr("placeholder"))t = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                var e = this.$search.val().length + 1;
                t = .75 * e + "em"
            }
            this.$search.css("width", t)
        }, i
    }), t("select2/selection/eventRelay", ["jquery"], function (t) {
        function e() {
        }

        return e.prototype.bind = function (e, n, i) {
            var r = this, o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], s = ["opening", "closing", "selecting", "unselecting"];
            e.call(this, n, i), n.on("*", function (e, n) {
                if (-1 !== t.inArray(e, o)) {
                    n = n || {};
                    var i = t.Event("select2:" + e, {params: n});
                    r.$element.trigger(i), -1 !== t.inArray(e, s) && (n.prevented = i.isDefaultPrevented())
                }
            })
        }, e
    }), t("select2/translation", ["jquery"], function (t) {
        function n(t) {
            this.dict = t || {}
        }

        return n.prototype.all = function () {
            return this.dict
        }, n.prototype.get = function (t) {
            return this.dict[t]
        }, n.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict)
        }, n._cache = {}, n.loadPath = function (t) {
            if (!(t in n._cache)) {
                var i = e(t);
                n._cache[t] = i
            }
            return new n(n._cache[t])
        }, n
    }), t("select2/diacritics", [], function () {
        var t = {
            "Ⓐ": "A",
            "Ａ": "A",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ẫ": "A",
            "Ẩ": "A",
            "Ã": "A",
            "Ā": "A",
            "Ă": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ẵ": "A",
            "Ẳ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ả": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ǎ": "A",
            "Ȁ": "A",
            "Ȃ": "A",
            "Ạ": "A",
            "Ậ": "A",
            "Ặ": "A",
            "Ḁ": "A",
            "Ą": "A",
            "Ⱥ": "A",
            "Ɐ": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ⓑ": "B",
            "Ｂ": "B",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ɓ": "B",
            "Ⓒ": "C",
            "Ｃ": "C",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ꜿ": "C",
            "Ⓓ": "D",
            "Ｄ": "D",
            "Ḋ": "D",
            "Ď": "D",
            "Ḍ": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḏ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ɗ": "D",
            "Ɖ": "D",
            "Ꝺ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "ǲ": "Dz",
            "ǅ": "Dz",
            "Ⓔ": "E",
            "Ｅ": "E",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ề": "E",
            "Ế": "E",
            "Ễ": "E",
            "Ể": "E",
            "Ẽ": "E",
            "Ē": "E",
            "Ḕ": "E",
            "Ḗ": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ë": "E",
            "Ẻ": "E",
            "Ě": "E",
            "Ȅ": "E",
            "Ȇ": "E",
            "Ẹ": "E",
            "Ệ": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ę": "E",
            "Ḙ": "E",
            "Ḛ": "E",
            "Ɛ": "E",
            "Ǝ": "E",
            "Ⓕ": "F",
            "Ｆ": "F",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ꝼ": "F",
            "Ⓖ": "G",
            "Ｇ": "G",
            "Ǵ": "G",
            "Ĝ": "G",
            "Ḡ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ǥ": "G",
            "Ɠ": "G",
            "Ꞡ": "G",
            "Ᵹ": "G",
            "Ꝿ": "G",
            "Ⓗ": "H",
            "Ｈ": "H",
            "Ĥ": "H",
            "Ḣ": "H",
            "Ḧ": "H",
            "Ȟ": "H",
            "Ḥ": "H",
            "Ḩ": "H",
            "Ḫ": "H",
            "Ħ": "H",
            "Ⱨ": "H",
            "Ⱶ": "H",
            "Ɥ": "H",
            "Ⓘ": "I",
            "Ｉ": "I",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "İ": "I",
            "Ï": "I",
            "Ḯ": "I",
            "Ỉ": "I",
            "Ǐ": "I",
            "Ȉ": "I",
            "Ȋ": "I",
            "Ị": "I",
            "Į": "I",
            "Ḭ": "I",
            "Ɨ": "I",
            "Ⓙ": "J",
            "Ｊ": "J",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ⓚ": "K",
            "Ｋ": "K",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ḳ": "K",
            "Ķ": "K",
            "Ḵ": "K",
            "Ƙ": "K",
            "Ⱪ": "K",
            "Ꝁ": "K",
            "Ꝃ": "K",
            "Ꝅ": "K",
            "Ꞣ": "K",
            "Ⓛ": "L",
            "Ｌ": "L",
            "Ŀ": "L",
            "Ĺ": "L",
            "Ľ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḻ": "L",
            "Ł": "L",
            "Ƚ": "L",
            "Ɫ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ꝇ": "L",
            "Ꞁ": "L",
            "Ǉ": "LJ",
            "ǈ": "Lj",
            "Ⓜ": "M",
            "Ｍ": "M",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ɯ": "M",
            "Ⓝ": "N",
            "Ｎ": "N",
            "Ǹ": "N",
            "Ń": "N",
            "Ñ": "N",
            "Ṅ": "N",
            "Ň": "N",
            "Ṇ": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "Ɲ": "N",
            "Ꞑ": "N",
            "Ꞥ": "N",
            "Ǌ": "NJ",
            "ǋ": "Nj",
            "Ⓞ": "O",
            "Ｏ": "O",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ỗ": "O",
            "Ổ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ȭ": "O",
            "Ṏ": "O",
            "Ō": "O",
            "Ṑ": "O",
            "Ṓ": "O",
            "Ŏ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ỏ": "O",
            "Ő": "O",
            "Ǒ": "O",
            "Ȍ": "O",
            "Ȏ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ỡ": "O",
            "Ở": "O",
            "Ợ": "O",
            "Ọ": "O",
            "Ộ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Ɔ": "O",
            "Ɵ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ȣ": "OU",
            "Ⓟ": "P",
            "Ｐ": "P",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ƥ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝓ": "P",
            "Ꝕ": "P",
            "Ⓠ": "Q",
            "Ｑ": "Q",
            "Ꝗ": "Q",
            "Ꝙ": "Q",
            "Ɋ": "Q",
            "Ⓡ": "R",
            "Ｒ": "R",
            "Ŕ": "R",
            "Ṙ": "R",
            "Ř": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ŗ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꝛ": "R",
            "Ꞧ": "R",
            "Ꞃ": "R",
            "Ⓢ": "S",
            "Ｓ": "S",
            "ẞ": "S",
            "Ś": "S",
            "Ṥ": "S",
            "Ŝ": "S",
            "Ṡ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ș": "S",
            "Ş": "S",
            "Ȿ": "S",
            "Ꞩ": "S",
            "Ꞅ": "S",
            "Ⓣ": "T",
            "Ｔ": "T",
            "Ṫ": "T",
            "Ť": "T",
            "Ṭ": "T",
            "Ț": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ṯ": "T",
            "Ŧ": "T",
            "Ƭ": "T",
            "Ʈ": "T",
            "Ⱦ": "T",
            "Ꞇ": "T",
            "Ꜩ": "TZ",
            "Ⓤ": "U",
            "Ｕ": "U",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ŭ": "U",
            "Ü": "U",
            "Ǜ": "U",
            "Ǘ": "U",
            "Ǖ": "U",
            "Ǚ": "U",
            "Ủ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ǔ": "U",
            "Ȕ": "U",
            "Ȗ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ữ": "U",
            "Ử": "U",
            "Ự": "U",
            "Ụ": "U",
            "Ṳ": "U",
            "Ų": "U",
            "Ṷ": "U",
            "Ṵ": "U",
            "Ʉ": "U",
            "Ⓥ": "V",
            "Ｖ": "V",
            "Ṽ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ꝟ": "V",
            "Ʌ": "V",
            "Ꝡ": "VY",
            "Ⓦ": "W",
            "Ｗ": "W",
            "Ẁ": "W",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẇ": "W",
            "Ẅ": "W",
            "Ẉ": "W",
            "Ⱳ": "W",
            "Ⓧ": "X",
            "Ｘ": "X",
            "Ẋ": "X",
            "Ẍ": "X",
            "Ⓨ": "Y",
            "Ｙ": "Y",
            "Ỳ": "Y",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ỹ": "Y",
            "Ȳ": "Y",
            "Ẏ": "Y",
            "Ÿ": "Y",
            "Ỷ": "Y",
            "Ỵ": "Y",
            "Ƴ": "Y",
            "Ɏ": "Y",
            "Ỿ": "Y",
            "Ⓩ": "Z",
            "Ｚ": "Z",
            "Ź": "Z",
            "Ẑ": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "Ẓ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ȥ": "Z",
            "Ɀ": "Z",
            "Ⱬ": "Z",
            "Ꝣ": "Z",
            "ⓐ": "a",
            "ａ": "a",
            "ẚ": "a",
            "à": "a",
            "á": "a",
            "â": "a",
            "ầ": "a",
            "ấ": "a",
            "ẫ": "a",
            "ẩ": "a",
            "ã": "a",
            "ā": "a",
            "ă": "a",
            "ằ": "a",
            "ắ": "a",
            "ẵ": "a",
            "ẳ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ä": "a",
            "ǟ": "a",
            "ả": "a",
            "å": "a",
            "ǻ": "a",
            "ǎ": "a",
            "ȁ": "a",
            "ȃ": "a",
            "ạ": "a",
            "ậ": "a",
            "ặ": "a",
            "ḁ": "a",
            "ą": "a",
            "ⱥ": "a",
            "ɐ": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ⓑ": "b",
            "ｂ": "b",
            "ḃ": "b",
            "ḅ": "b",
            "ḇ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɓ": "b",
            "ⓒ": "c",
            "ｃ": "c",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ꜿ": "c",
            "ↄ": "c",
            "ⓓ": "d",
            "ｄ": "d",
            "ḋ": "d",
            "ď": "d",
            "ḍ": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ḏ": "d",
            "đ": "d",
            "ƌ": "d",
            "ɖ": "d",
            "ɗ": "d",
            "ꝺ": "d",
            "ǳ": "dz",
            "ǆ": "dz",
            "ⓔ": "e",
            "ｅ": "e",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ề": "e",
            "ế": "e",
            "ễ": "e",
            "ể": "e",
            "ẽ": "e",
            "ē": "e",
            "ḕ": "e",
            "ḗ": "e",
            "ĕ": "e",
            "ė": "e",
            "ë": "e",
            "ẻ": "e",
            "ě": "e",
            "ȅ": "e",
            "ȇ": "e",
            "ẹ": "e",
            "ệ": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ę": "e",
            "ḙ": "e",
            "ḛ": "e",
            "ɇ": "e",
            "ɛ": "e",
            "ǝ": "e",
            "ⓕ": "f",
            "ｆ": "f",
            "ḟ": "f",
            "ƒ": "f",
            "ꝼ": "f",
            "ⓖ": "g",
            "ｇ": "g",
            "ǵ": "g",
            "ĝ": "g",
            "ḡ": "g",
            "ğ": "g",
            "ġ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ǥ": "g",
            "ɠ": "g",
            "ꞡ": "g",
            "ᵹ": "g",
            "ꝿ": "g",
            "ⓗ": "h",
            "ｈ": "h",
            "ĥ": "h",
            "ḣ": "h",
            "ḧ": "h",
            "ȟ": "h",
            "ḥ": "h",
            "ḩ": "h",
            "ḫ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ⱨ": "h",
            "ⱶ": "h",
            "ɥ": "h",
            "ƕ": "hv",
            "ⓘ": "i",
            "ｉ": "i",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "ï": "i",
            "ḯ": "i",
            "ỉ": "i",
            "ǐ": "i",
            "ȉ": "i",
            "ȋ": "i",
            "ị": "i",
            "į": "i",
            "ḭ": "i",
            "ɨ": "i",
            "ı": "i",
            "ⓙ": "j",
            "ｊ": "j",
            "ĵ": "j",
            "ǰ": "j",
            "ɉ": "j",
            "ⓚ": "k",
            "ｋ": "k",
            "ḱ": "k",
            "ǩ": "k",
            "ḳ": "k",
            "ķ": "k",
            "ḵ": "k",
            "ƙ": "k",
            "ⱪ": "k",
            "ꝁ": "k",
            "ꝃ": "k",
            "ꝅ": "k",
            "ꞣ": "k",
            "ⓛ": "l",
            "ｌ": "l",
            "ŀ": "l",
            "ĺ": "l",
            "ľ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ḻ": "l",
            "ſ": "l",
            "ł": "l",
            "ƚ": "l",
            "ɫ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ꞁ": "l",
            "ꝇ": "l",
            "ǉ": "lj",
            "ⓜ": "m",
            "ｍ": "m",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ɯ": "m",
            "ⓝ": "n",
            "ｎ": "n",
            "ǹ": "n",
            "ń": "n",
            "ñ": "n",
            "ṅ": "n",
            "ň": "n",
            "ṇ": "n",
            "ņ": "n",
            "ṋ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ɲ": "n",
            "ŉ": "n",
            "ꞑ": "n",
            "ꞥ": "n",
            "ǌ": "nj",
            "ⓞ": "o",
            "ｏ": "o",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "ồ": "o",
            "ố": "o",
            "ỗ": "o",
            "ổ": "o",
            "õ": "o",
            "ṍ": "o",
            "ȭ": "o",
            "ṏ": "o",
            "ō": "o",
            "ṑ": "o",
            "ṓ": "o",
            "ŏ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ö": "o",
            "ȫ": "o",
            "ỏ": "o",
            "ő": "o",
            "ǒ": "o",
            "ȍ": "o",
            "ȏ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ỡ": "o",
            "ở": "o",
            "ợ": "o",
            "ọ": "o",
            "ộ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "ɔ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ɵ": "o",
            "ƣ": "oi",
            "ȣ": "ou",
            "ꝏ": "oo",
            "ⓟ": "p",
            "ｐ": "p",
            "ṕ": "p",
            "ṗ": "p",
            "ƥ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝓ": "p",
            "ꝕ": "p",
            "ⓠ": "q",
            "ｑ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ꝙ": "q",
            "ⓡ": "r",
            "ｒ": "r",
            "ŕ": "r",
            "ṙ": "r",
            "ř": "r",
            "ȑ": "r",
            "ȓ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ŗ": "r",
            "ṟ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ꝛ": "r",
            "ꞧ": "r",
            "ꞃ": "r",
            "ⓢ": "s",
            "ｓ": "s",
            "ß": "s",
            "ś": "s",
            "ṥ": "s",
            "ŝ": "s",
            "ṡ": "s",
            "š": "s",
            "ṧ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ș": "s",
            "ş": "s",
            "ȿ": "s",
            "ꞩ": "s",
            "ꞅ": "s",
            "ẛ": "s",
            "ⓣ": "t",
            "ｔ": "t",
            "ṫ": "t",
            "ẗ": "t",
            "ť": "t",
            "ṭ": "t",
            "ț": "t",
            "ţ": "t",
            "ṱ": "t",
            "ṯ": "t",
            "ŧ": "t",
            "ƭ": "t",
            "ʈ": "t",
            "ⱦ": "t",
            "ꞇ": "t",
            "ꜩ": "tz",
            "ⓤ": "u",
            "ｕ": "u",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ũ": "u",
            "ṹ": "u",
            "ū": "u",
            "ṻ": "u",
            "ŭ": "u",
            "ü": "u",
            "ǜ": "u",
            "ǘ": "u",
            "ǖ": "u",
            "ǚ": "u",
            "ủ": "u",
            "ů": "u",
            "ű": "u",
            "ǔ": "u",
            "ȕ": "u",
            "ȗ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ữ": "u",
            "ử": "u",
            "ự": "u",
            "ụ": "u",
            "ṳ": "u",
            "ų": "u",
            "ṷ": "u",
            "ṵ": "u",
            "ʉ": "u",
            "ⓥ": "v",
            "ｖ": "v",
            "ṽ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ꝟ": "v",
            "ʌ": "v",
            "ꝡ": "vy",
            "ⓦ": "w",
            "ｗ": "w",
            "ẁ": "w",
            "ẃ": "w",
            "ŵ": "w",
            "ẇ": "w",
            "ẅ": "w",
            "ẘ": "w",
            "ẉ": "w",
            "ⱳ": "w",
            "ⓧ": "x",
            "ｘ": "x",
            "ẋ": "x",
            "ẍ": "x",
            "ⓨ": "y",
            "ｙ": "y",
            "ỳ": "y",
            "ý": "y",
            "ŷ": "y",
            "ỹ": "y",
            "ȳ": "y",
            "ẏ": "y",
            "ÿ": "y",
            "ỷ": "y",
            "ẙ": "y",
            "ỵ": "y",
            "ƴ": "y",
            "ɏ": "y",
            "ỿ": "y",
            "ⓩ": "z",
            "ｚ": "z",
            "ź": "z",
            "ẑ": "z",
            "ż": "z",
            "ž": "z",
            "ẓ": "z",
            "ẕ": "z",
            "ƶ": "z",
            "ȥ": "z",
            "ɀ": "z",
            "ⱬ": "z",
            "ꝣ": "z",
            "Ά": "Α",
            "Έ": "Ε",
            "Ή": "Η",
            "Ί": "Ι",
            "Ϊ": "Ι",
            "Ό": "Ο",
            "Ύ": "Υ",
            "Ϋ": "Υ",
            "Ώ": "Ω",
            "ά": "α",
            "έ": "ε",
            "ή": "η",
            "ί": "ι",
            "ϊ": "ι",
            "ΐ": "ι",
            "ό": "ο",
            "ύ": "υ",
            "ϋ": "υ",
            "ΰ": "υ",
            "ω": "ω",
            "ς": "σ"
        };
        return t
    }), t("select2/data/base", ["../utils"], function (t) {
        function e() {
            e.__super__.constructor.call(this)
        }

        return t.Extend(e, t.Observable), e.prototype.current = function () {
            throw new Error("The `current` method must be defined in child classes.")
        }, e.prototype.query = function () {
            throw new Error("The `query` method must be defined in child classes.")
        }, e.prototype.bind = function () {
        }, e.prototype.destroy = function () {
        }, e.prototype.generateResultId = function (e, n) {
            var i = e.id + "-result-";
            return i += t.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + t.generateChars(4)
        }, e
    }), t("select2/data/select", ["./base", "../utils", "jquery"], function (t, e, n) {
        function i(t, e) {
            this.$element = t, this.options = e, i.__super__.constructor.call(this)
        }

        return e.Extend(i, t), i.prototype.current = function (t) {
            var e = [], i = this;
            this.$element.find(":selected").each(function () {
                var t = n(this), r = i.item(t);
                e.push(r)
            }), t(e)
        }, i.prototype.select = function (t) {
            var e = this;
            if (n(t.element).is("option"))return t.element.selected = !0, void this.$element.trigger("change");
            if (this.$element.prop("multiple"))this.current(function (i) {
                var r = [];
                t = [t], t.push.apply(t, i);
                for (var o = 0; o < t.length; o++) {
                    var s = t[o].id;
                    -1 === n.inArray(s, r) && r.push(s)
                }
                e.$element.val(r), e.$element.trigger("change")
            }); else {
                var i = t.id;
                this.$element.val(i), this.$element.trigger("change")
            }
        }, i.prototype.unselect = function (t) {
            var e = this;
            return this.$element.prop("multiple") ? n(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (i) {
                for (var r = [], o = 0; o < i.length; o++) {
                    var s = i[o].id;
                    s !== t.id && -1 === n.inArray(s, r) && r.push(s)
                }
                e.$element.val(r), e.$element.trigger("change")
            }) : void 0
        }, i.prototype.bind = function (t) {
            var e = this;
            this.container = t, t.on("select", function (t) {
                e.select(t.data)
            }), t.on("unselect", function (t) {
                e.unselect(t.data)
            })
        }, i.prototype.destroy = function () {
            this.$element.find("*").each(function () {
                n.removeData(this, "data")
            })
        }, i.prototype.query = function (t, e) {
            var i = [], r = this, o = this.$element.children();
            o.each(function () {
                var e = n(this);
                if (e.is("option") || e.is("optgroup")) {
                    var o = r.item(e), s = r.matches(t, o);
                    null !== s && i.push(s)
                }
            }), e({results: i})
        }, i.prototype.addOptions = function (t) {
            this.$element.append(t)
        }, i.prototype.option = function (t) {
            var e;
            t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
            var i = n(e), r = this._normalizeItem(t);
            return r.element = e, n.data(e, "data", r), i
        }, i.prototype.item = function (t) {
            var e = {};
            if (e = n.data(t[0], "data"), null != e)return e;
            if (t.is("option"))e = {
                id: t.val(),
                text: t.html(),
                disabled: t.prop("disabled"),
                selected: t.prop("selected"),
                title: t.prop("title")
            }; else if (t.is("optgroup")) {
                e = {text: t.prop("label"), children: [], title: t.prop("title")};
                for (var i = t.children("option"), r = [], o = 0; o < i.length; o++) {
                    var s = n(i[o]), a = this.item(s);
                    r.push(a)
                }
                e.children = r
            }
            return e = this._normalizeItem(e), e.element = t[0], n.data(t[0], "data", e), e
        }, i.prototype._normalizeItem = function (t) {
            n.isPlainObject(t) || (t = {id: t, text: t}), t = n.extend({}, {text: ""}, t);
            var e = {selected: !1, disabled: !1};
            return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, e, t)
        }, i.prototype.matches = function (t, e) {
            var n = this.options.get("matcher");
            return n(t, e)
        }, i
    }), t("select2/data/array", ["./select", "../utils", "jquery"], function (t, e, n) {
        function i(t, e) {
            var n = e.get("data") || [];
            i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
        }

        return e.Extend(i, t), i.prototype.select = function (t) {
            var e = this.$element.find('option[value="' + t.id + '"]');
            0 === e.length && (e = this.option(t), this.addOptions([e])), i.__super__.select.call(this, t)
        }, i.prototype.convertToOptions = function (t) {
            function e(t) {
                return function () {
                    return n(this).val() == t.id
                }
            }

            for (var i = this, r = this.$element.find("option"), o = r.map(function () {
                return i.item(n(this)).id
            }).get(), s = [], a = 0; a < t.length; a++) {
                var l = this._normalizeItem(t[a]);
                if (n.inArray(l.id, o) >= 0) {
                    var c = r.filter(e(l)), u = this.item(c), p = (n.extend(!0, {}, u, l), this.option(u));
                    c.replaceWith(p)
                } else {
                    var d = this.option(l);
                    if (l.children) {
                        var h = this.convertToOptions(l.children);
                        d.append(h)
                    }
                    s.push(d)
                }
            }
            return s
        }, i
    }), t("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, n) {
        function i(e, n) {
            this.ajaxOptions = this._applyDefaults(n.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), t.__super__.constructor.call(this, e, n)
        }

        return e.Extend(i, t), i.prototype._applyDefaults = function (t) {
            var e = {
                data: function (t) {
                    return {q: t.term}
                }, transport: function (t, e, i) {
                    var r = n.ajax(t);
                    return r.then(e), r.fail(i), r
                }
            };
            return n.extend({}, e, t, !0)
        }, i.prototype.processResults = function (t) {
            return t
        }, i.prototype.query = function (t, e) {
            function i() {
                var i = o.transport(o, function (i) {
                    var o = r.processResults(i, t);
                    window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(o)
                }, function () {
                });
                r._request = i
            }

            var r = this;
            this._request && (this._request.abort(), this._request = null);
            var o = n.extend({type: "GET"}, this.ajaxOptions);
            "function" == typeof o.url && (o.url = o.url(t)), "function" == typeof o.data && (o.data = o.data(t)), this.ajaxOptions.delay && "" !== t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
        }, i
    }), t("select2/data/tags", ["jquery"], function (t) {
        function e(e, n, i) {
            var r = i.get("tags"), o = i.get("createTag");
            if (void 0 !== o && (this.createTag = o), e.call(this, n, i), t.isArray(r))for (var s = 0; s < r.length; s++) {
                var a = r[s], l = this._normalizeItem(a), c = this.option(l);
                this.$element.append(c)
            }
        }

        return e.prototype.query = function (t, e, n) {
            function i(t, o) {
                for (var s = t.results, a = 0; a < s.length; a++) {
                    var l = s[a], c = null != l.children && !i({results: l.children}, !0), u = l.text === e.term;
                    if (u || c)return o ? !1 : (t.data = s, void n(t))
                }
                if (o)return !0;
                var p = r.createTag(e);
                if (null != p) {
                    var d = r.option(p);
                    d.attr("data-select2-tag", !0), r.addOptions([d]), r.insertTag(s, p)
                }
                t.results = s, n(t)
            }

            var r = this;
            return this._removeOldTags(), null == e.term || "" === e.term || null != e.page ? void t.call(this, e, n) : void t.call(this, e, i)
        }, e.prototype.createTag = function (t, e) {
            return {id: e.term, text: e.term}
        }, e.prototype.insertTag = function (t, e, n) {
            e.unshift(n)
        }, e.prototype._removeOldTags = function () {
            var e = (this._lastTag, this.$element.find("option[data-select2-tag]"));
            e.each(function () {
                this.selected || t(this).remove()
            })
        }, e
    }), t("select2/data/tokenizer", ["jquery"], function (t) {
        function e(t, e, n) {
            var i = n.get("tokenizer");
            void 0 !== i && (this.tokenizer = i), t.call(this, e, n)
        }

        return e.prototype.bind = function (t, e, n) {
            t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
        }, e.prototype.query = function (t, e, n) {
            function i(t) {
                r.select(t)
            }

            var r = this;
            e.term = e.term || "";
            var o = this.tokenizer(e, this.options, i);
            o.term !== e.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), e.term = o.term), t.call(this, e, n)
        }, e.prototype.tokenizer = function (e, n, i, r) {
            for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (t) {
                    return {id: t.term, text: t.term}
                }; a < s.length;) {
                var c = s[a];
                if (-1 !== t.inArray(c, o)) {
                    var u = s.substr(0, a), p = t.extend({}, n, {term: u}), d = l(p);
                    r(d), s = s.substr(a + 1) || "", a = 0
                } else a++
            }
            return {term: s}
        }, e
    }), t("select2/data/minimumInputLength", [], function () {
        function t(t, e, n) {
            this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
        }

        return t.prototype.query = function (t, e, n) {
            return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                message: "inputTooShort",
                args: {minimum: this.minimumInputLength, input: e.term, params: e}
            }) : void t.call(this, e, n)
        }, t
    }), t("select2/data/maximumInputLength", [], function () {
        function t(t, e, n) {
            this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
        }

        return t.prototype.query = function (t, e, n) {
            return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                message: "inputTooLong",
                args: {maximum: this.maximumInputLength, input: e.term, params: e}
            }) : void t.call(this, e, n)
        }, t
    }), t("select2/data/maximumSelectionLength", [], function () {
        function t(t, e, n) {
            this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
        }

        return t.prototype.query = function (t, e, n) {
            var i = this;
            this.current(function (r) {
                var o = null != r ? r.length : 0;
                return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                    message: "maximumSelected",
                    args: {maximum: i.maximumSelectionLength}
                }) : void t.call(i, e, n)
            })
        }, t
    }), t("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(t, e) {
            this.$element = t, this.options = e, n.__super__.constructor.call(this)
        }

        return e.Extend(n, e.Observable), n.prototype.render = function () {
            var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
            return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
        }, n.prototype.position = function () {
        }, n.prototype.destroy = function () {
            this.$dropdown.remove()
        }, n
    }), t("select2/dropdown/search", ["jquery", "../utils"], function (t) {
        function e() {
        }

        return e.prototype.render = function (e) {
            var n = e.call(this), i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
            return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
        }, e.prototype.bind = function (e, n, i) {
            var r = this;
            e.call(this, n, i), this.$search.on("keydown", function (t) {
                r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented()
            }), this.$search.on("input", function () {
                t(this).off("keyup")
            }), this.$search.on("keyup input", function (t) {
                r.handleSearch(t)
            }), n.on("open", function () {
                r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function () {
                    r.$search.focus()
                }, 0)
            }), n.on("close", function () {
                r.$search.attr("tabindex", -1), r.$search.val("")
            }), n.on("results:all", function (t) {
                if (null == t.query.term || "" === t.query.term) {
                    var e = r.showSearch(t);
                    e ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                }
            })
        }, e.prototype.handleSearch = function () {
            if (!this._keyUpPrevented) {
                var t = this.$search.val();
                this.trigger("query", {term: t})
            }
            this._keyUpPrevented = !1
        }, e.prototype.showSearch = function () {
            return !0
        }, e
    }), t("select2/dropdown/hidePlaceholder", [], function () {
        function t(t, e, n, i) {
            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
        }

        return t.prototype.append = function (t, e) {
            e.results = this.removePlaceholder(e.results), t.call(this, e)
        }, t.prototype.normalizePlaceholder = function (t, e) {
            return "string" == typeof e && (e = {id: "", text: e}), e
        }, t.prototype.removePlaceholder = function (t, e) {
            for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                var r = e[i];
                this.placeholder.id === r.id && n.splice(i, 1)
            }
            return n
        }, t
    }), t("select2/dropdown/infiniteScroll", ["jquery"], function (t) {
        function e(t, e, n, i) {
            this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
        }

        return e.prototype.append = function (t, e) {
            this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
        }, e.prototype.bind = function (e, n, i) {
            var r = this;
            e.call(this, n, i), n.on("query", function (t) {
                r.lastParams = t, r.loading = !0
            }), n.on("query:append", function (t) {
                r.lastParams = t, r.loading = !0
            }), this.$results.on("scroll", function () {
                var e = t.contains(document.documentElement, r.$loadingMore[0]);
                if (!r.loading && e) {
                    var n = r.$results.offset().top + r.$results.outerHeight(!1), i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                    n + 50 >= i && r.loadMore()
                }
            })
        }, e.prototype.loadMore = function () {
            this.loading = !0;
            var e = t.extend({}, {page: 1}, this.lastParams);
            e.page++, this.trigger("query:append", e)
        }, e.prototype.showLoadingMore = function (t, e) {
            return e.pagination && e.pagination.more
        }, e.prototype.createLoadingMore = function () {
            var e = t('<li class="option load-more" role="treeitem"></li>'), n = this.options.get("translations").get("loadingMore");
            return e.html(n(this.lastParams)), e
        }, e
    }), t("select2/dropdown/attachBody", ["jquery", "../utils"], function (t, e) {
        function n(t, e, n) {
            this.$dropdownParent = n.get("dropdownParent") || document.body, t.call(this, e, n)
        }

        return n.prototype.bind = function (t, e, n) {
            var i = this, r = !1;
            t.call(this, e, n), e.on("open", function () {
                i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function () {
                    i._positionDropdown(), i._resizeDropdown()
                }), e.on("results:append", function () {
                    i._positionDropdown(), i._resizeDropdown()
                }))
            }), e.on("close", function () {
                i._hideDropdown(), i._detachPositioningHandler(e)
            }), this.$dropdownContainer.on("mousedown", function (t) {
                t.stopPropagation()
            })
        }, n.prototype.position = function (t, e, n) {
            e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                position: "absolute",
                top: -999999
            }), this.$container = n
        }, n.prototype.render = function (e) {
            var n = t("<span></span>"), i = e.call(this);
            return n.append(i), this.$dropdownContainer = n, n
        }, n.prototype._hideDropdown = function () {
            this.$dropdownContainer.detach()
        }, n.prototype._attachPositioningHandler = function (n) {
            var i = this, r = "scroll.select2." + n.id, o = "resize.select2." + n.id, s = "orientationchange.select2." + n.id, a = this.$container.parents().filter(e.hasScroll);
            a.each(function () {
                t(this).data("select2-scroll-position", {x: t(this).scrollLeft(), y: t(this).scrollTop()})
            }), a.on(r, function () {
                var e = t(this).data("select2-scroll-position");
                t(this).scrollTop(e.y)
            }), t(window).on(r + " " + o + " " + s, function () {
                i._positionDropdown(), i._resizeDropdown()
            })
        }, n.prototype._detachPositioningHandler = function (n) {
            var i = "scroll.select2." + n.id, r = "resize.select2." + n.id, o = "orientationchange.select2." + n.id, s = this.$container.parents().filter(e.hasScroll);
            s.off(i), t(window).off(i + " " + r + " " + o)
        }, n.prototype._positionDropdown = function () {
            var e = t(window), n = this.$dropdown.hasClass("select2-dropdown--above"), i = this.$dropdown.hasClass("select2-dropdown--below"), r = null, o = (this.$container.position(), this.$container.offset());
            o.bottom = o.top + this.$container.outerHeight(!1);
            var s = {height: this.$container.outerHeight(!1)};
            s.top = o.top, s.bottom = o.top + s.height;
            var a = {height: this.$dropdown.outerHeight(!1)}, l = {
                top: e.scrollTop(),
                bottom: e.scrollTop() + e.height()
            }, c = l.top < o.top - a.height, u = l.bottom > o.bottom + a.height, p = {left: o.left, top: s.bottom};
            n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (p.top = s.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(p)
        }, n.prototype._resizeDropdown = function () {
            this.$dropdownContainer.width(), this.$dropdown.css({width: this.$container.outerWidth(!1) + "px"})
        }, n.prototype._showDropdown = function () {
            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
        }, n
    }), t("select2/dropdown/minimumResultsForSearch", [], function () {
        function t(e) {
            for (var n = 0, i = 0; i < e.length; i++) {
                var r = e[i];
                r.children ? n += t(r.children) : n++
            }
            return n
        }

        function e(t, e, n, i) {
            this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i)
        }

        return e.prototype.showSearch = function (e, n) {
            return t(n.data.results) < this.minimumResultsForSearch ? !1 : e.call(this, n)
        }, e
    }), t("select2/dropdown/selectOnClose", [], function () {
        function t() {
        }

        return t.prototype.bind = function (t, e, n) {
            var i = this;
            t.call(this, e, n), e.on("close", function () {
                i._handleSelectOnClose()
            })
        }, t.prototype._handleSelectOnClose = function () {
            var t = this.getHighlightedResults();
            t.length < 1 || t.trigger("mouseup")
        }, t
    }), t("select2/dropdown/closeOnSelect", [], function () {
        function t() {
        }

        return t.prototype.bind = function (t, e, n) {
            var i = this;
            t.call(this, e, n), e.on("select", function (t) {
                i._selectTriggered(t)
            }), e.on("unselect", function (t) {
                i._selectTriggered(t)
            })
        }, t.prototype._selectTriggered = function (t, e) {
            var n = e.originalEvent;
            n && n.ctrlKey || this.trigger("close")
        }, t
    }), t("select2/i18n/en", [], function () {
        return {
            errorLoading: function () {
                return "The results could not be loaded."
            }, inputTooLong: function (t) {
                var e = t.input.length - t.maximum, n = "Please delete " + e + " character";
                return 1 != e && (n += "s"), n
            }, inputTooShort: function (t) {
                var e = t.minimum - t.input.length, n = "Please enter " + e + " or more characters";
                return n
            }, loadingMore: function () {
                return "Loading more results…"
            }, maximumSelected: function (t) {
                var e = "You can only select " + t.maximum + " item";
                return 1 != t.maximum && (e += "s"), e
            }, noResults: function () {
                return "No results found"
            }, searching: function () {
                return "Searching…"
            }
        }
    }), t("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (t, n, i, r, o, s, a, l, c, u, p, d, h, f, g, m, v, y, b, w, x, T, $, C, E, A, S, _) {
        function k() {
            this.reset()
        }

        k.prototype.apply = function (p) {
            if (p = t.extend({}, this.defaults, p), null == p.dataAdapter) {
                if (p.dataAdapter = null != p.ajax ? f : null != p.data ? h : d, p.minimumInputLength > 0 && (p.dataAdapter = c.Decorate(p.dataAdapter, v)), p.maximumInputLength > 0 && (p.dataAdapter = c.Decorate(p.dataAdapter, y)), p.maximumSelectionLength > 0 && (p.dataAdapter = c.Decorate(p.dataAdapter, b)), null != p.tags && (p.dataAdapter = c.Decorate(p.dataAdapter, g)), (null != p.tokenSeparators || null != p.tokenizer) && (p.dataAdapter = c.Decorate(p.dataAdapter, m)), null != p.query) {
                    var _ = e(p.amdBase + "compat/query");
                    p.dataAdapter = c.Decorate(p.dataAdapter, _)
                }
                if (null != p.initSelection) {
                    var k = e(p.amdBase + "compat/initSelection");
                    p.dataAdapter = c.Decorate(p.dataAdapter, k)
                }
            }
            if (null == p.resultsAdapter && (p.resultsAdapter = n, null != p.ajax && (p.resultsAdapter = c.Decorate(p.resultsAdapter, $)), null != p.placeholder && (p.resultsAdapter = c.Decorate(p.resultsAdapter, T)), p.selectOnClose && (p.resultsAdapter = c.Decorate(p.resultsAdapter, A))), null == p.dropdownAdapter) {
                if (p.multiple)p.dropdownAdapter = w; else {
                    var D = c.Decorate(w, x);
                    p.dropdownAdapter = D
                }
                0 !== p.minimumResultsForSearch && (p.dropdownAdapter = c.Decorate(p.dropdownAdapter, E)), p.closeOnSelect && (p.dropdownAdapter = c.Decorate(p.dropdownAdapter, S)), p.dropdownAdapter = c.Decorate(p.dropdownAdapter, C)
            }
            if (null == p.selectionAdapter && (p.selectionAdapter = p.multiple ? r : i, null != p.placeholder && (p.selectionAdapter = c.Decorate(p.selectionAdapter, o)), p.allowClear && (p.selectionAdapter = c.Decorate(p.selectionAdapter, s)), p.multiple && (p.selectionAdapter = c.Decorate(p.selectionAdapter, a)), p.selectionAdapter = c.Decorate(p.selectionAdapter, l)), "string" == typeof p.language)if (p.language.indexOf("-") > 0) {
                var N = p.language.split("-"), O = N[0];
                p.language = [p.language, O]
            } else p.language = [p.language];
            if (t.isArray(p.language)) {
                var j = new u;
                p.language.push("en");
                for (var L = p.language, I = 0; I < L.length; I++) {
                    var q = L[I], R = {};
                    try {
                        R = u.loadPath(q)
                    } catch (P) {
                        try {
                            q = this.defaults.amdLanguageBase + q, R = u.loadPath(q)
                        } catch (H) {
                            window.console && console.warn && console.warn('Select2: The lanugage file for "' + q + '" could not be automatically loaded. A fallback will be used instead.');
                            continue
                        }
                    }
                    j.extend(R)
                }
                p.translations = j
            } else p.translations = new u(p.language);
            return p
        }, k.prototype.reset = function () {
            function e(t) {
                function e(t) {
                    return p[t] || t
                }

                return t.replace(/[^\u0000-\u007E]/g, e)
            }

            function n(i, r) {
                if ("" === t.trim(i.term))return r;
                if (r.children && r.children.length > 0) {
                    for (var o = t.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) {
                        var a = r.children[s], l = n(i, a);
                        null == l && o.children.splice(s, 1)
                    }
                    return o.children.length > 0 ? o : n(i, o)
                }
                var c = e(r.text).toUpperCase(), u = e(i.term).toUpperCase();
                return c.indexOf(u) > -1 ? r : null
            }

            this.defaults = {
                amdBase: "select2/",
                amdLanguageBase: "select2/i18n/",
                closeOnSelect: !0,
                escapeMarkup: c.escapeMarkup,
                language: _,
                matcher: n,
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                sorter: function (t) {
                    return t
                },
                templateResult: function (t) {
                    return t.text
                },
                templateSelection: function (t) {
                    return t.text
                },
                theme: "default",
                width: "resolve"
            }
        }, k.prototype.set = function (e, n) {
            var i = t.camelCase(e), r = {};
            r[i] = n;
            var o = c._convertData(r);
            t.extend(this.defaults, o)
        };
        var D = new k;
        return D
    }), t("select2/options", ["jquery", "./defaults", "./utils"], function (t, n, i) {
        function r(t, r) {
            if (this.options = t, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                var o = e(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
            }
        }

        return r.prototype.fromElement = function (e) {
            var n = ["select2"];
            null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.data("ajax-Url", e.data("ajaxUrl")));
            var r = {};
            r = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
            var o = t.extend(!0, {}, r);
            o = i._convertData(o);
            for (var s in o)t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
            return this
        }, r.prototype.get = function (t) {
            return this.options[t]
        }, r.prototype.set = function (t, e) {
            this.options[t] = e
        }, r
    }), t("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, e, n, i) {
        var r = function (t, n) {
            null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), n = n || {}, this.options = new e(n, t), r.__super__.constructor.call(this);
            var i = t.attr("tabindex") || 0;
            t.data("old-tabindex", i), t.attr("tabindex", "-1");
            var o = this.options.get("dataAdapter");
            this.data = new o(t, this.options);
            var s = this.render();
            this._placeContainer(s);
            var a = this.options.get("selectionAdapter");
            this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
            var l = this.options.get("dropdownAdapter");
            this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
            var c = this.options.get("resultsAdapter");
            this.results = new c(t, this.options, this.data), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
            var u = this;
            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.data.current(function (t) {
                u.trigger("selection:update", {data: t})
            }), t.hide(), this._syncAttributes(), t.data("select2", this)
        };
        return n.Extend(r, n.Observable), r.prototype._generateId = function (t) {
            var e = "";
            return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = "select2-" + e
        }, r.prototype._placeContainer = function (t) {
            t.insertAfter(this.$element);
            var e = this._resolveWidth(this.$element, this.options.get("width"));
            null != e && t.css("width", e)
        }, r.prototype._resolveWidth = function (t, e) {
            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
            if ("resolve" == e) {
                var i = this._resolveWidth(t, "style");
                return null != i ? i : this._resolveWidth(t, "element")
            }
            if ("element" == e) {
                var r = t.outerWidth(!1);
                return 0 >= r ? "auto" : r + "px"
            }
            if ("style" == e) {
                var o = t.attr("style");
                if ("string" != typeof o)return null;
                for (var s = o.split(";"), a = 0, l = s.length; l > a; a += 1) {
                    var c = s[a].replace(/\s/g, ""), u = c.match(n);
                    if (null !== u && u.length >= 1)return u[1]
                }
                return null
            }
            return e
        }, r.prototype._bindAdapters = function () {
            this.data.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
        }, r.prototype._registerDomEvents = function () {
            var e = this;
            this.$element.on("change.select2", function () {
                e.data.current(function (t) {
                    e.trigger("selection:update", {data: t})
                })
            }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
            var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            null != i ? (this._observer = new i(function (n) {
                t.each(n, e._sync)
            }), this._observer.observe(this.$element[0], {
                attributes: !0,
                subtree: !1
            })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", e._sync, !1)
        }, r.prototype._registerDataEvents = function () {
            var t = this;
            this.data.on("*", function (e, n) {
                t.trigger(e, n)
            })
        }, r.prototype._registerSelectionEvents = function () {
            var e = this, n = ["toggle"];
            this.selection.on("toggle", function () {
                e.toggleDropdown()
            }), this.selection.on("*", function (i, r) {
                -1 === t.inArray(i, n) && e.trigger(i, r)
            })
        }, r.prototype._registerDropdownEvents = function () {
            var t = this;
            this.dropdown.on("*", function (e, n) {
                t.trigger(e, n)
            })
        }, r.prototype._registerResultsEvents = function () {
            var t = this;
            this.results.on("*", function (e, n) {
                t.trigger(e, n)
            })
        }, r.prototype._registerEvents = function () {
            var t = this;
            this.on("open", function () {
                t.$container.addClass("select2-container--open")
            }), this.on("close", function () {
                t.$container.removeClass("select2-container--open")
            }), this.on("enable", function () {
                t.$container.removeClass("select2-container--disabled")
            }), this.on("disable", function () {
                t.$container.addClass("select2-container--disabled")
            }), this.on("focus", function () {
                t.$container.addClass("select2-container--focus")
            }), this.on("blur", function () {
                t.$container.removeClass("select2-container--focus")
            }), this.on("query", function (e) {
                t.isOpen() || t.trigger("open"), this.data.query(e, function (n) {
                    t.trigger("results:all", {data: n, query: e})
                })
            }), this.on("query:append", function (e) {
                this.data.query(e, function (n) {
                    t.trigger("results:append", {data: n, query: e})
                })
            }), this.on("keypress", function (e) {
                var n = e.which;
                t.isOpen() ? n === i.ENTER ? (t.trigger("results:select"), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle"), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous"), e.preventDefault()) : n === i.DOWN ? (t.trigger("results:next"), e.preventDefault()) : (n === i.ESC || n === i.TAB) && (t.close(), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || (n === i.DOWN || n === i.UP) && e.altKey) && (t.open(), e.preventDefault())
            })
        }, r.prototype._syncAttributes = function () {
            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
        }, r.prototype.trigger = function (t, e) {
            var n = r.__super__.trigger, i = {
                open: "opening",
                close: "closing",
                select: "selecting",
                unselect: "unselecting"
            };
            if (t in i) {
                var o = i[t], s = {prevented: !1, name: t, args: e};
                if (n.call(this, o, s), s.prevented)return void(e.prevented = !0)
            }
            n.call(this, t, e)
        }, r.prototype.toggleDropdown = function () {
            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
        }, r.prototype.open = function () {
            this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
        }, r.prototype.close = function () {
            this.isOpen() && this.trigger("close")
        }, r.prototype.isOpen = function () {
            return this.$container.hasClass("select2-container--open")
        }, r.prototype.enable = function (t) {
            window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), 0 === t.length && (t = [!0]);
            var e = !t[0];
            this.$element.prop("disabled", e)
        }, r.prototype.data = function () {
            arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
            var t = [];
            return this.dataAdpater.current(function (e) {
                t = e
            }), t
        }, r.prototype.val = function (e) {
            if (window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 0 === e.length)return this.$element.val();
            var n = e[0];
            t.isArray(n) && (n = t.map(n, function (t) {
                return t.toString()
            })), this.$element.val(n).trigger("change")
        }, r.prototype.destroy = function () {
            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.show(), this.$element.removeData("select2"), this.data.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.data = null, this.selection = null, this.dropdown = null, this.results = null
        }, r.prototype.render = function () {
            var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
            return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
        }, r
    }), t("jquery.select2", ["jquery", "./select2/core", "./select2/defaults"], function (t, n, i) {
        try {
            e("jquery.mousewheel")
        } catch (r) {
        }
        return null == t.fn.select2 && (t.fn.select2 = function (e) {
            if (e = e || {}, "object" == typeof e)return this.each(function () {
                var i = t.extend({}, e, !0);
                new n(t(this), i)
            }), this;
            if ("string" == typeof e) {
                var i = this.data("select2"), r = Array.prototype.slice.call(arguments, 1);
                return i[e](r)
            }
            throw new Error("Invalid arguments for Select2: " + e)
        }), null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n
    }), e("jquery.select2"), jQuery.fn.select2.amd = {define: t, require: e}
}();