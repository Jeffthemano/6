(function(g) {
    var h = window.AmazonUIPageJS || window.P,
        k = h._namespace || h.attributeErrors,
        f = k ? k("JQueryUI_Core_AUIBuild", "") : h;
    f.guardFatal ? f.guardFatal(g)(f, window) : f.execute(function() {
        g(f, window)
    })
})(function(g, h, k) {
    g.when("jQuery").register("jQueryUI-core", function(f) {
        (function(b, f) {
            function g(a, c) {
                var d, e;
                d = a.nodeName.toLowerCase();
                if ("area" === d) {
                    d = a.parentNode;
                    e = d.name;
                    if (!a.href || !e || "map" !== d.nodeName.toLowerCase()) return !1;
                    d = b("img[usemap\x3d#" + e + "]")[0];
                    return !!d && h(d)
                }
                return (/input|select|textarea|button|object/.test(d) ?
                    !a.disabled : "a" === d ? a.href || c : c) && h(a)
            }

            function h(a) {
                return b.expr.filters.visible(a) && !b(a).parents().addBack().filter(function() {
                    return "hidden" === b.css(this, "visibility")
                }).length
            }
            var k = 0,
                l = /^ui-id-\d+$/;
            b.ui = b.ui || {};
            b.extend(b.ui, {
                version: "1.10.3",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            });
            b.fn.extend({
                focus: function(a) {
                    return function(c, d) {
                        return "number" === typeof c ? this.each(function() {
                            var a = this;
                            setTimeout(function() {
                                b(a).focus();
                                d && d.call(a)
                            }, c)
                        }) : a.apply(this, arguments)
                    }
                }(b.fn.focus),
                scrollParent: function() {
                    var a;
                    a = b.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(b.css(this, "position")) && /(auto|scroll)/.test(b.css(this, "overflow") + b.css(this, "overflow-y") +
                            b.css(this, "overflow-x"))
                    }).eq(0) : this.parents().filter(function() {
                        return /(auto|scroll)/.test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                    }).eq(0);
                    return /fixed/.test(this.css("position")) || !a.length ? b(document) : a
                },
                zIndex: function(a) {
                    if (a !== f) return this.css("zIndex", a);
                    if (this.length) {
                        a = b(this[0]);
                        for (var c; a.length && a[0] !== document;) {
                            c = a.css("position");
                            if ("absolute" === c || "relative" === c || "fixed" === c)
                                if (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c) return c;
                            a = a.parent()
                        }
                    }
                    return 0
                },
                uniqueId: function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++k)
                    })
                },
                removeUniqueId: function() {
                    return this.each(function() {
                        l.test(this.id) && b(this).removeAttr("id")
                    })
                }
            });
            b.extend(b.expr[":"], {
                data: b.expr.createPseudo ? b.expr.createPseudo(function(a) {
                    return function(c) {
                        return !!b.data(c, a)
                    }
                }) : function(a, c, d) {
                    return !!b.data(a, d[3])
                },
                focusable: function(a) {
                    return g(a, !isNaN(b.attr(a, "tabindex")))
                },
                tabbable: function(a) {
                    var c = b.attr(a, "tabindex"),
                        d = isNaN(c);
                    return (d || 0 <= c) && g(a, !d)
                }
            });
            b("\x3ca\x3e").outerWidth(1).jquery ||
                b.each(["Width", "Height"], function(a, c) {
                    function d(a, c, d, f) {
                        b.each(e, function() {
                            c -= parseFloat(b.css(a, "padding" + this)) || 0;
                            d && (c -= parseFloat(b.css(a, "border" + this + "Width")) || 0);
                            f && (c -= parseFloat(b.css(a, "margin" + this)) || 0)
                        });
                        return c
                    }
                    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                        g = c.toLowerCase(),
                        h = {
                            innerWidth: b.fn.innerWidth,
                            innerHeight: b.fn.innerHeight,
                            outerWidth: b.fn.outerWidth,
                            outerHeight: b.fn.outerHeight
                        };
                    b.fn["inner" + c] = function(a) {
                        return a === f ? h["inner" + c].call(this) : this.each(function() {
                            b(this).css(g,
                                d(this, a) + "px")
                        })
                    };
                    b.fn["outer" + c] = function(a, e) {
                        return "number" !== typeof a ? h["outer" + c].call(this, a) : this.each(function() {
                            b(this).css(g, d(this, a, !0, e) + "px")
                        })
                    }
                });
            b.fn.addBack || (b.fn.addBack = function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            });
            b("\x3ca\x3e").data("a-b", "a").removeData("a-b").data("a-b") && (b.fn.removeData = function(a) {
                return function(c) {
                    return arguments.length ? a.call(this, b.camelCase(c)) : a.call(this)
                }
            }(b.fn.removeData));
            b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
            b.support.selectstart = "onselectstart" in document.createElement("div");
            b.fn.extend({
                disableSelection: function() {
                    return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                        a.preventDefault()
                    })
                },
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                }
            });
            b.extend(b.ui, {
                plugin: {
                    add: function(a, c, d) {
                        var e;
                        a = b.ui[a].prototype;
                        for (e in d) a.plugins[e] = a.plugins[e] || [], a.plugins[e].push([c, d[e]])
                    },
                    call: function(a, b, d) {
                        var e = a.plugins[b];
                        if (e && a.element[0].parentNode &&
                            11 !== a.element[0].parentNode.nodeType)
                            for (b = 0; b < e.length; b++) a.options[e[b][0]] && e[b][1].apply(a.element, d)
                    }
                },
                hasScroll: function(a, c) {
                    if ("hidden" === b(a).css("overflow")) return !1;
                    var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                        e = !1;
                    if (0 < a[d]) return !0;
                    a[d] = 1;
                    e = 0 < a[d];
                    a[d] = 0;
                    return e
                }
            })
        })(f);
        return f
    })
});
/* ******** */
(function(n) {
    var m = window.AmazonUIPageJS || window.P,
        p = m._namespace || m.attributeErrors,
        k = p ? p("JQueryUI_Widget_AUIBuild", "") : m;
    k.guardFatal ? k.guardFatal(n)(k, window) : k.execute(function() {
        n(k, window)
    })
})(function(n, m, p) {
    n.when("jQuery").register("jQueryUI-widget", function(k) {
        (function(c, k) {
            var n = 0,
                m = Array.prototype.slice,
                p = c.cleanData;
            c.cleanData = function(b) {
                for (var a = 0, f; null != (f = b[a]); a++) try {
                    c(f).triggerHandler("remove")
                } catch (d) {}
                p(b)
            };
            c.widget = function(b, a, f) {
                var d, e, g, h, q = {},
                    l = b.split(".")[0];
                b =
                    b.split(".")[1];
                d = l + "-" + b;
                f || (f = a, a = c.Widget);
                c.expr[":"][d.toLowerCase()] = function(a) {
                    return !!c.data(a, d)
                };
                c[l] = c[l] || {};
                e = c[l][b];
                g = c[l][b] = function(a, b) {
                    if (!this._createWidget) return new g(a, b);
                    arguments.length && this._createWidget(a, b)
                };
                c.extend(g, e, {
                    version: f.version,
                    _proto: c.extend({}, f),
                    _childConstructors: []
                });
                h = new a;
                h.options = c.widget.extend({}, h.options);
                c.each(f, function(b, d) {
                    c.isFunction(d) ? q[b] = function() {
                        var c = function() {
                                return a.prototype[b].apply(this, arguments)
                            },
                            f = function(c) {
                                return a.prototype[b].apply(this,
                                    c)
                            };
                        return function() {
                            var b = this._super,
                                a = this._superApply,
                                e;
                            this._super = c;
                            this._superApply = f;
                            e = d.apply(this, arguments);
                            this._super = b;
                            this._superApply = a;
                            return e
                        }
                    }() : q[b] = d
                });
                g.prototype = c.widget.extend(h, {
                    widgetEventPrefix: e ? h.widgetEventPrefix : b
                }, q, {
                    constructor: g,
                    namespace: l,
                    widgetName: b,
                    widgetFullName: d
                });
                e ? (c.each(e._childConstructors, function(b, a) {
                    var d = a.prototype;
                    c.widget(d.namespace + "." + d.widgetName, g, a._proto)
                }), delete e._childConstructors) : a._childConstructors.push(g);
                c.widget.bridge(b,
                    g)
            };
            c.widget.extend = function(b) {
                for (var a = m.call(arguments, 1), f = 0, d = a.length, e, g; f < d; f++)
                    for (e in a[f]) g = a[f][e], a[f].hasOwnProperty(e) && g !== k && (c.isPlainObject(g) ? b[e] = c.isPlainObject(b[e]) ? c.widget.extend({}, b[e], g) : c.widget.extend({}, g) : b[e] = g);
                return b
            };
            c.widget.bridge = function(b, a) {
                var f = a.prototype.widgetFullName || b;
                c.fn[b] = function(d) {
                    var e = "string" === typeof d,
                        g = m.call(arguments, 1),
                        h = this;
                    d = !e && g.length ? c.widget.extend.apply(null, [d].concat(g)) : d;
                    e ? this.each(function() {
                        var a, e = c.data(this,
                            f);
                        if (!e) return c.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + d + "'");
                        if (!c.isFunction(e[d]) || "_" === d.charAt(0)) return c.error("no such method '" + d + "' for " + b + " widget instance");
                        a = e[d].apply(e, g);
                        if (a !== e && a !== k) return h = a && a.jquery ? h.pushStack(a.get()) : a, !1
                    }) : this.each(function() {
                        var b = c.data(this, f);
                        b ? b.option(d || {})._init() : c.data(this, f, new a(d, this))
                    });
                    return h
                }
            };
            c.Widget = function() {};
            c.Widget._childConstructors = [];
            c.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "\x3cdiv\x3e",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(b, a) {
                    a = c(a || this.defaultElement || this)[0];
                    this.element = c(a);
                    this.uuid = n++;
                    this.eventNamespace = "." + this.widgetName + this.uuid;
                    this.options = c.widget.extend({}, this.options, this._getCreateOptions(), b);
                    this.bindings = c();
                    this.hoverable = c();
                    this.focusable = c();
                    a !== this && (c.data(a, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(b) {
                            b.target === a && this.destroy()
                        }
                    }), this.document = c(a.style ?
                        a.ownerDocument : a.document || a), this.window = c(this.document[0].defaultView || this.document[0].parentWindow));
                    this._create();
                    this._trigger("create", null, this._getCreateEventData());
                    this._init()
                },
                _getCreateOptions: c.noop,
                _getCreateEventData: c.noop,
                _create: c.noop,
                _init: c.noop,
                destroy: function() {
                    this._destroy();
                    this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
                    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName +
                        "-disabled ui-state-disabled");
                    this.bindings.unbind(this.eventNamespace);
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus")
                },
                _destroy: c.noop,
                widget: function() {
                    return this.element
                },
                option: function(b, a) {
                    var f = b,
                        d, e, g;
                    if (0 === arguments.length) return c.widget.extend({}, this.options);
                    if ("string" === typeof b)
                        if (f = {}, d = b.split("."), b = d.shift(), d.length) {
                            e = f[b] = c.widget.extend({}, this.options[b]);
                            for (g = 0; g < d.length - 1; g++) e[d[g]] = e[d[g]] || {}, e = e[d[g]];
                            b = d.pop();
                            if (a ===
                                k) return e[b] === k ? null : e[b];
                            e[b] = a
                        } else {
                            if (a === k) return this.options[b] === k ? null : this.options[b];
                            f[b] = a
                        }
                    this._setOptions(f);
                    return this
                },
                _setOptions: function(b) {
                    for (var a in b) this._setOption(a, b[a]);
                    return this
                },
                _setOption: function(b, a) {
                    this.options[b] = a;
                    "disabled" === b && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!a).attr("aria-disabled", a), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
                    return this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _on: function(b, a, f) {
                    var d, e = this;
                    "boolean" !== typeof b && (f = a, a = b, b = !1);
                    f ? (a = d = c(a), this.bindings = this.bindings.add(a)) : (f = a, a = this.element, d = this.widget());
                    c.each(f, function(f, h) {
                        function k() {
                            if (b || !0 !== e.options.disabled && !c(this).hasClass("ui-state-disabled")) return ("string" === typeof h ? e[h] : h).apply(e, arguments)
                        }
                        "string" !== typeof h && (k.guid = h.guid = h.guid || k.guid || c.guid++);
                        var l = f.match(/^(\w+)\s*(.*)$/),
                            m = l[1] + e.eventNamespace;
                        (l = l[2]) ?
                        d.delegate(l, m, k): a.bind(m, k)
                    })
                },
                _off: function(b, a) {
                    a = (a || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                    b.unbind(a).undelegate(a)
                },
                _delay: function(b, a) {
                    var c = this;
                    return setTimeout(function() {
                        return ("string" === typeof b ? c[b] : b).apply(c, arguments)
                    }, a || 0)
                },
                _hoverable: function(b) {
                    this.hoverable = this.hoverable.add(b);
                    this._on(b, {
                        mouseenter: function(a) {
                            c(a.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(a) {
                            c(a.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(b) {
                    this.focusable =
                        this.focusable.add(b);
                    this._on(b, {
                        focusin: function(a) {
                            c(a.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(a) {
                            c(a.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(b, a, f) {
                    var d, e = this.options[b];
                    f = f || {};
                    a = c.Event(a);
                    a.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
                    a.target = this.element[0];
                    if (b = a.originalEvent)
                        for (d in b) d in a || (a[d] = b[d]);
                    this.element.trigger(a, f);
                    return !(c.isFunction(e) && !1 === e.apply(this.element[0], [a].concat(f)) || a.isDefaultPrevented())
                }
            };
            c.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(b, a) {
                c.Widget.prototype["_" + b] = function(f, d, e) {
                    "string" === typeof d && (d = {
                        effect: d
                    });
                    var g, h = d ? !0 === d || "number" === typeof d ? a : d.effect || a : b;
                    d = d || {};
                    "number" === typeof d && (d = {
                        duration: d
                    });
                    g = !c.isEmptyObject(d);
                    d.complete = e;
                    d.delay && f.delay(d.delay);
                    if (g && c.effects && c.effects.effect[h]) f[b](d);
                    else if (h !== b && f[h]) f[h](d.duration, d.easing, e);
                    else f.queue(function(a) {
                        c(this)[b]();
                        e && e.call(f[0]);
                        a()
                    })
                }
            })
        })(k);
        return k
    })
});
/* ******** */
(function(t) {
    var p = window.AmazonUIPageJS || window.P,
        r = p._namespace || p.attributeErrors,
        h = r ? r("JQueryUI_Position_AUIBuild", "") : p;
    h.guardFatal ? h.guardFatal(t)(h, window) : h.execute(function() {
        t(h, window)
    })
})(function(t, p, r) {
    t.when("jQuery").register("jQueryUI-position", function(h) {
        (function(d, h) {
            function t(a, b, c) {
                return [parseFloat(a[0]) * (y.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (y.test(a[1]) ? c / 100 : 1)]
            }

            function r(a) {
                var b = a[0];
                return 9 === b.nodeType ? {
                        width: a.width(),
                        height: a.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } :
                    d.isWindow(b) ? {
                        width: a.width(),
                        height: a.height(),
                        offset: {
                            top: a.scrollTop(),
                            left: a.scrollLeft()
                        }
                    } : b.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: b.pageY,
                            left: b.pageX
                        }
                    } : {
                        width: a.outerWidth(),
                        height: a.outerHeight(),
                        offset: a.offset()
                    }
            }
            d.ui = d.ui || {};
            var u, A = Math.max,
                q = Math.abs,
                E = Math.round,
                z = /left|center|right/,
                B = /top|center|bottom/,
                C = /[\+\-]\d+(\.[\d]+)?%?/,
                F = /^\w+/,
                y = /%$/,
                G = d.fn.position;
            d.position = {
                scrollbarWidth: function() {
                    if (u !== h) return u;
                    var a, b, c = d("\x3cdiv style\x3d'display:block;width:50px;height:50px;overflow:hidden;'\x3e\x3cdiv style\x3d'height:100px;width:auto;'\x3e\x3c/div\x3e\x3c/div\x3e");
                    b = c.children()[0];
                    d("body").append(c);
                    a = b.offsetWidth;
                    c.css("overflow", "scroll");
                    b = b.offsetWidth;
                    a === b && (b = c[0].clientWidth);
                    c.remove();
                    return u = a - b
                },
                getScrollInfo: function(a) {
                    var b = a.isWindow ? "" : a.element.css("overflow-x"),
                        c = a.isWindow ? "" : a.element.css("overflow-y"),
                        b = "scroll" === b || "auto" === b && a.width < a.element[0].scrollWidth;
                    return {
                        width: "scroll" === c || "auto" === c && a.height < a.element[0].scrollHeight ? d.position.scrollbarWidth() : 0,
                        height: b ? d.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(a) {
                    a =
                        d(a || p);
                    var b = d.isWindow(a[0]);
                    return {
                        element: a,
                        isWindow: b,
                        offset: a.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: a.scrollLeft(),
                        scrollTop: a.scrollTop(),
                        width: b ? a.width() : a.outerWidth(),
                        height: b ? a.height() : a.outerHeight()
                    }
                }
            };
            d.fn.position = function(a) {
                if (!a || !a.of) return G.apply(this, arguments);
                a = d.extend({}, a);
                var b, c, g, n, f, e, h = d(a.of),
                    m = d.position.getWithinInfo(a.within),
                    l = d.position.getScrollInfo(m),
                    p = (a.collision || "flip").split(" "),
                    u = {};
                e = r(h);
                h[0].preventDefault && (a.at = "left top");
                c = e.width;
                g = e.height;
                n = e.offset;
                f = d.extend({}, n);
                d.each(["my", "at"], function() {
                    var b = (a[this] || "").split(" "),
                        c, g;
                    1 === b.length && (b = z.test(b[0]) ? b.concat(["center"]) : B.test(b[0]) ? ["center"].concat(b) : ["center", "center"]);
                    b[0] = z.test(b[0]) ? b[0] : "center";
                    b[1] = B.test(b[1]) ? b[1] : "center";
                    c = C.exec(b[0]);
                    g = C.exec(b[1]);
                    u[this] = [c ? c[0] : 0, g ? g[0] : 0];
                    a[this] = [F.exec(b[0])[0], F.exec(b[1])[0]]
                });
                1 === p.length && (p[1] = p[0]);
                "right" === a.at[0] ? f.left += c : "center" === a.at[0] && (f.left += c / 2);
                "bottom" === a.at[1] ? f.top += g : "center" === a.at[1] &&
                    (f.top += g / 2);
                b = t(u.at, c, g);
                f.left += b[0];
                f.top += b[1];
                return this.each(function() {
                    var e, r, v = d(this),
                        w = v.outerWidth(),
                        x = v.outerHeight(),
                        y = parseInt(d.css(this, "marginLeft"), 10) || 0,
                        z = parseInt(d.css(this, "marginTop"), 10) || 0,
                        B = w + y + (parseInt(d.css(this, "marginRight"), 10) || 0) + l.width,
                        C = x + z + (parseInt(d.css(this, "marginBottom"), 10) || 0) + l.height,
                        k = d.extend({}, f),
                        D = t(u.my, v.outerWidth(), v.outerHeight());
                    "right" === a.my[0] ? k.left -= w : "center" === a.my[0] && (k.left -= w / 2);
                    "bottom" === a.my[1] ? k.top -= x : "center" === a.my[1] &&
                        (k.top -= x / 2);
                    k.left += D[0];
                    k.top += D[1];
                    d.support.offsetFractions || (k.left = E(k.left), k.top = E(k.top));
                    e = {
                        marginLeft: y,
                        marginTop: z
                    };
                    d.each(["left", "top"], function(f, n) {
                        if (d.ui.position[p[f]]) d.ui.position[p[f]][n](k, {
                            targetWidth: c,
                            targetHeight: g,
                            elemWidth: w,
                            elemHeight: x,
                            collisionPosition: e,
                            collisionWidth: B,
                            collisionHeight: C,
                            offset: [b[0] + D[0], b[1] + D[1]],
                            my: a.my,
                            at: a.at,
                            within: m,
                            elem: v
                        })
                    });
                    a.using && (r = function(b) {
                        var d = n.left - k.left,
                            e = d + c - w,
                            f = n.top - k.top,
                            m = f + g - x,
                            l = {
                                target: {
                                    element: h,
                                    left: n.left,
                                    top: n.top,
                                    width: c,
                                    height: g
                                },
                                element: {
                                    element: v,
                                    left: k.left,
                                    top: k.top,
                                    width: w,
                                    height: x
                                },
                                horizontal: 0 > e ? "left" : 0 < d ? "right" : "center",
                                vertical: 0 > m ? "top" : 0 < f ? "bottom" : "middle"
                            };
                        c < w && q(d + e) < c && (l.horizontal = "center");
                        g < x && q(f + m) < g && (l.vertical = "middle");
                        A(q(d), q(e)) > A(q(f), q(m)) ? l.important = "horizontal" : l.important = "vertical";
                        a.using.call(this, b, l)
                    });
                    v.offset(d.extend(k, {
                        using: r
                    }))
                })
            };
            d.ui.position = {
                fit: {
                    left: function(a, b) {
                        var c = b.within,
                            g = c.isWindow ? c.scrollLeft : c.offset.left,
                            d = c.width,
                            f = a.left - b.collisionPosition.marginLeft,
                            c = g - f,
                            e = f + b.collisionWidth - d - g;
                        b.collisionWidth > d ? 0 < c && 0 >= e ? (g = a.left + c + b.collisionWidth - d - g, a.left += c - g) : a.left = 0 < e && 0 >= c ? g : c > e ? g + d - b.collisionWidth : g : a.left = 0 < c ? a.left + c : 0 < e ? a.left - e : A(a.left - f, a.left)
                    },
                    top: function(a, b) {
                        var c = b.within,
                            g = c.isWindow ? c.scrollTop : c.offset.top,
                            d = b.within.height,
                            f = a.top - b.collisionPosition.marginTop,
                            c = g - f,
                            e = f + b.collisionHeight - d - g;
                        b.collisionHeight > d ? 0 < c && 0 >= e ? (g = a.top + c + b.collisionHeight - d - g, a.top += c - g) : a.top = 0 < e && 0 >= c ? g : c > e ? g + d - b.collisionHeight : g : a.top = 0 < c ? a.top +
                            c : 0 < e ? a.top - e : A(a.top - f, a.top)
                    }
                },
                flip: {
                    left: function(a, b) {
                        var c = b.within,
                            d = c.offset.left + c.scrollLeft,
                            n = c.width,
                            f = c.isWindow ? c.scrollLeft : c.offset.left,
                            e = a.left - b.collisionPosition.marginLeft,
                            c = e - f,
                            h = e + b.collisionWidth - n - f,
                            e = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                            m = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                            l = -2 * b.offset[0];
                        if (0 > c) {
                            if (d = a.left + e + m + l + b.collisionWidth - n - d, 0 > d || d < q(c)) a.left += e + m + l
                        } else 0 < h && (d = a.left - b.collisionPosition.marginLeft + e + m + l -
                            f, 0 < d || q(d) < h) && (a.left += e + m + l)
                    },
                    top: function(a, b) {
                        var c = b.within,
                            d = c.offset.top + c.scrollTop,
                            n = c.height,
                            f = c.isWindow ? c.scrollTop : c.offset.top,
                            e = a.top - b.collisionPosition.marginTop,
                            c = e - f,
                            h = e + b.collisionHeight - n - f,
                            e = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                            m = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                            l = -2 * b.offset[1];
                        0 > c ? (d = a.top + e + m + l + b.collisionHeight - n - d, a.top + e + m + l > c && (0 > d || d < q(c)) && (a.top += e + m + l)) : 0 < h && (d = a.top - b.collisionPosition.marginTop + e + m + l -
                            f, a.top + e + m + l > h && (0 < d || q(d) < h) && (a.top += e + m + l))
                    }
                },
                flipfit: {
                    left: function() {
                        d.ui.position.flip.left.apply(this, arguments);
                        d.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        d.ui.position.flip.top.apply(this, arguments);
                        d.ui.position.fit.top.apply(this, arguments)
                    }
                }
            };
            (function() {
                var a, b, c, g, h = document.getElementsByTagName("body")[0];
                c = document.createElement("div");
                a = document.createElement(h ? "div" : "body");
                b = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                };
                h && d.extend(b, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (g in b) a.style[g] = b[g];
                a.appendChild(c);
                b = h || document.documentElement;
                b.insertBefore(a, b.firstChild);
                c.style.cssText = "position: absolute; left: 10.7432222px;";
                c = d(c).offset().left;
                d.support.offsetFractions = 10 < c && 11 > c;
                a.innerHTML = "";
                b.removeChild(a)
            })()
        })(h);
        return h
    })
});
/* ******** */
(function(g) {
    var h = window.AmazonUIPageJS || window.P,
        k = h._namespace || h.attributeErrors,
        f = k ? k("JQueryUI_Menu_AUIBuild", "") : h;
    f.guardFatal ? f.guardFatal(g)(f, window) : f.execute(function() {
        g(f, window)
    })
})(function(g, h, k) {
    g.when("jQueryUI-core", "jQueryUI-position", "jQueryUI-widget").register("jQueryUI-menu", function(f) {
        (function(d, f) {
            d.widget("ui.menu", {
                version: "1.10.3",
                defaultElement: "\x3cul\x3e",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    menus: "ul",
                    position: {
                        my: "left top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element;
                    this.mouseHandled = !1;
                    this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }).bind("click" + this.eventNamespace, d.proxy(function(a) {
                        this.options.disabled && a.preventDefault()
                    }, this));
                    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                    this._on({
                        "mousedown .ui-menu-item \x3e a": function(a) {
                            a.preventDefault()
                        },
                        "click .ui-state-disabled \x3e a": function(a) {
                            a.preventDefault()
                        },
                        "click .ui-menu-item:has(a)": function(a) {
                            var b = d(a.target).closest(".ui-menu-item");
                            !this.mouseHandled && b.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(a), b.has(".ui-menu").length ? this.expand(a) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(a) {
                            var b = d(a.currentTarget);
                            b.siblings().children(".ui-state-active").removeClass("ui-state-active");
                            this.focus(a, b)
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(a, b) {
                            var c = this.active || this.element.children(".ui-menu-item").eq(0);
                            b || this.focus(a, c)
                        },
                        blur: function(a) {
                            this._delay(function() {
                                d.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(a)
                            })
                        },
                        keydown: "_keydown"
                    });
                    this.refresh();
                    this._on(this.document, {
                        click: function(a) {
                            d(a.target).closest(".ui-menu").length || this.collapseAll(a);
                            this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var a = d(this);
                        a.data("ui-menu-submenu-carat") && a.remove()
                    });
                    this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(a) {
                    function b(a) {
                        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                            "\\$\x26")
                    }
                    var c, e, f, g, h = !0;
                    switch (a.keyCode) {
                        case d.ui.keyCode.PAGE_UP:
                            this.previousPage(a);
                            break;
                        case d.ui.keyCode.PAGE_DOWN:
                            this.nextPage(a);
                            break;
                        case d.ui.keyCode.HOME:
                            this._move("first", "first", a);
                            break;
                        case d.ui.keyCode.END:
                            this._move("last", "last", a);
                            break;
                        case d.ui.keyCode.UP:
                            this.previous(a);
                            break;
                        case d.ui.keyCode.DOWN:
                            this.next(a);
                            break;
                        case d.ui.keyCode.LEFT:
                            this.collapse(a);
                            break;
                        case d.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
                            break;
                        case d.ui.keyCode.ENTER:
                        case d.ui.keyCode.SPACE:
                            this._activate(a);
                            break;
                        case d.ui.keyCode.ESCAPE:
                            this.collapse(a);
                            break;
                        default:
                            h = !1, c = this.previousFilter || "", e = String.fromCharCode(a.keyCode), f = !1, clearTimeout(this.filterTimer), e === c ? f = !0 : e = c + e, g = new RegExp("^" + b(e), "i"), c = this.activeMenu.children(".ui-menu-item").filter(function() {
                                    return g.test(d(this).children("a").text())
                                }), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(a.keyCode), g = new RegExp("^" + b(e), "i"), c = this.activeMenu.children(".ui-menu-item").filter(function() {
                                    return g.test(d(this).children("a").text())
                                })),
                                c.length ? (this.focus(a, c), 1 < c.length ? (this.previousFilter = e, this.filterTimer = this._delay(function() {
                                    delete this.previousFilter
                                }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
                    }
                    h && a.preventDefault()
                },
                _activate: function(a) {
                    this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup\x3d'true']").length ? this.expand(a) : this.select(a))
                },
                refresh: function() {
                    var a, b = this.options.icons.submenu;
                    a = this.element.find(this.options.menus);
                    a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var a = d(this),
                            e = a.prev("a"),
                            f = d("\x3cspan\x3e").addClass("ui-menu-icon ui-icon " + b).data("ui-menu-submenu-carat", !0);
                        e.attr("aria-haspopup", "true").prepend(f);
                        a.attr("aria-labelledby", e.attr("id"))
                    });
                    a = a.add(this.element);
                    a.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    });
                    a.children(":not(.ui-menu-item)").each(function() {
                        var a =
                            d(this);
                        /[^\-\u2014\u2013\s]/.test(a.text()) || a.addClass("ui-widget-content ui-menu-divider")
                    });
                    a.children(".ui-state-disabled").attr("aria-disabled", "true");
                    this.active && !d.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(a, b) {
                    "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu);
                    this._super(a, b)
                },
                focus: function(a, b) {
                    var c;
                    this.blur(a, a &&
                        "focus" === a.type);
                    this._scrollIntoView(b);
                    this.active = b.first();
                    c = this.active.children("a").addClass("ui-state-focus");
                    this.options.role && this.element.attr("aria-activedescendant", c.attr("id"));
                    this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
                    a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay);
                    c = b.children(".ui-menu");
                    c.length && /^mouse/.test(a.type) && this._startOpening(c);
                    this.activeMenu = b.parent();
                    this._trigger("focus",
                        a, {
                            item: b
                        })
                },
                _scrollIntoView: function(a) {
                    var b, c, e;
                    this._hasScroll() && (b = parseFloat(d.css(this.activeMenu[0], "borderTopWidth")) || 0, c = parseFloat(d.css(this.activeMenu[0], "paddingTop")) || 0, b = a.offset().top - this.activeMenu.offset().top - b - c, c = this.activeMenu.scrollTop(), e = this.activeMenu.height(), a = a.height(), 0 > b ? this.activeMenu.scrollTop(c + b) : b + a > e && this.activeMenu.scrollTop(c + b - e + a))
                },
                blur: function(a, b) {
                    b || clearTimeout(this.timer);
                    this.active && (this.active.children("a").removeClass("ui-state-focus"),
                        this.active = null, this._trigger("blur", a, {
                            item: this.active
                        }))
                },
                _startOpening: function(a) {
                    clearTimeout(this.timer);
                    "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close();
                        this._open(a)
                    }, this.delay))
                },
                _open: function(a) {
                    var b = d.extend({ of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer);
                    this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                    a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(b)
                },
                collapseAll: function(a,
                    b) {
                    clearTimeout(this.timer);
                    this.timer = this._delay(function() {
                        var c = b ? this.element : d(a && a.target).closest(this.element.find(".ui-menu"));
                        c.length || (c = this.element);
                        this._close(c);
                        this.blur(a);
                        this.activeMenu = c
                    }, this.delay)
                },
                _close: function(a) {
                    a || (a = this.active ? this.active.parent() : this.element);
                    a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                },
                collapse: function(a) {
                    var b = this.active && this.active.parent().closest(".ui-menu-item",
                        this.element);
                    b && b.length && (this._close(), this.focus(a, b))
                },
                expand: function(a) {
                    var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                    b && b.length && (this._open(b.parent()), this._delay(function() {
                        this.focus(a, b)
                    }))
                },
                next: function(a) {
                    this._move("next", "first", a)
                },
                previous: function(a) {
                    this._move("prev", "last", a)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(a, b, c) {
                    var d;
                    this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
                    d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]());
                    this.focus(c, d)
                },
                nextPage: function(a) {
                    var b, c, e;
                    this.active ? this.isLastItem() || (this._hasScroll() ? (c = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                            b = d(this);
                            return 0 > b.offset().top - c - e
                        }),
                        this.focus(a, b)) : this.focus(a, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(a)
                },
                previousPage: function(a) {
                    var b, c, e;
                    this.active ? this.isFirstItem() || (this._hasScroll() ? (c = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        b = d(this);
                        return 0 < b.offset().top - c + e
                    }), this.focus(a, b)) : this.focus(a, this.activeMenu.children(".ui-menu-item").first())) : this.next(a)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() <
                        this.element.prop("scrollHeight")
                },
                select: function(a) {
                    this.active = this.active || d(a.target).closest(".ui-menu-item");
                    var b = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(a, !0);
                    this._trigger("select", a, b)
                }
            })
        })(f)
    })
});
/* ******** */
(function(h) {
    var l = window.AmazonUIPageJS || window.P,
        m = l._namespace || l.attributeErrors,
        g = m ? m("JQueryUI_Autocomplete_AUIBuild", "") : l;
    g.guardFatal ? g.guardFatal(h)(g, window) : g.execute(function() {
        h(g, window)
    })
})(function(h, l, m) {
    h.when("jQueryUI-core", "jQueryUI-position", "jQueryUI-widget", "jQueryUI-menu").register("jQueryUI-autocomplete", function(g) {
        (function(c, g) {
            var h = 0;
            c.widget("ui.autocomplete", {
                version: "1.10.3",
                defaultElement: "\x3cinput\x3e",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                pending: 0,
                _create: function() {
                    var a, b, f, k = this.element[0].nodeName.toLowerCase(),
                        n = "textarea" === k;
                    k = "input" === k;
                    this.isMultiLine = n ? !0 : k ? !1 : this.element.prop("isContentEditable");
                    this.valueMethod = this.element[n || k ? "val" : "text"];
                    this.isNewMenu = !0;
                    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                    this._on(this.element, {
                        keydown: function(d) {
                            if (this.element.prop("readOnly")) b =
                                f = a = !0;
                            else {
                                b = f = a = !1;
                                var e = c.ui.keyCode;
                                switch (d.keyCode) {
                                    case e.PAGE_UP:
                                        a = !0;
                                        this._move("previousPage", d);
                                        break;
                                    case e.PAGE_DOWN:
                                        a = !0;
                                        this._move("nextPage", d);
                                        break;
                                    case e.UP:
                                        a = !0;
                                        this._keyEvent("previous", d);
                                        break;
                                    case e.DOWN:
                                        a = !0;
                                        this._keyEvent("next", d);
                                        break;
                                    case e.ENTER:
                                    case e.NUMPAD_ENTER:
                                        this.menu.active && (a = !0, d.preventDefault(), this.menu.select(d));
                                        break;
                                    case e.TAB:
                                        this.menu.active && this.menu.select(d);
                                        break;
                                    case e.ESCAPE:
                                        this.menu.element.is(":visible") && (this._value(this.term), this.close(d),
                                            d.preventDefault());
                                        break;
                                    default:
                                        b = !0, this._searchTimeout(d)
                                }
                            }
                        },
                        keypress: function(d) {
                            if (a) a = !1, this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault();
                            else if (!b) {
                                var e = c.ui.keyCode;
                                switch (d.keyCode) {
                                    case e.PAGE_UP:
                                        this._move("previousPage", d);
                                        break;
                                    case e.PAGE_DOWN:
                                        this._move("nextPage", d);
                                        break;
                                    case e.UP:
                                        this._keyEvent("previous", d);
                                        break;
                                    case e.DOWN:
                                        this._keyEvent("next", d)
                                }
                            }
                        },
                        input: function(a) {
                            f ? (f = !1, a.preventDefault()) : this._searchTimeout(a)
                        },
                        focus: function() {
                            this.selectedItem =
                                null;
                            this.previous = this._value()
                        },
                        blur: function(a) {
                            this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                        }
                    });
                    this._initSource();
                    this.menu = c("\x3cul\x3e").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().data("ui-menu");
                    this._on(this.menu.element, {
                        mousedown: function(a) {
                            a.preventDefault();
                            this.cancelBlur = !0;
                            this._delay(function() {
                                delete this.cancelBlur
                            });
                            var b = this.menu.element[0];
                            c(a.target).closest(".ui-menu-item").length ||
                                this._delay(function() {
                                    var a = this;
                                    this.document.one("mousedown", function(d) {
                                        d.target === a.element[0] || d.target === b || c.contains(b, d.target) || a.close()
                                    })
                                })
                        },
                        menufocus: function(a, b) {
                            if (this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type))) {
                                this.menu.blur();
                                this.document.one("mousemove", function() {
                                    c(a.target).trigger(a.originalEvent)
                                });
                                return
                            }
                            b = b.item.data("ui-autocomplete-item");
                            !1 !== this._trigger("focus", a, {
                                    item: b
                                }) ? a.originalEvent && /^key/.test(a.originalEvent.type) &&
                                this._value(b.value) : this.liveRegion.text(b.value)
                        },
                        menuselect: function(a, b) {
                            var c = b.item.data("ui-autocomplete-item"),
                                d = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                                this.previous = d;
                                this.selectedItem = c
                            }));
                            !1 !== this._trigger("select", a, {
                                item: c
                            }) && this._value(c.value);
                            this.term = this._value();
                            this.close(a);
                            this.selectedItem = c
                        }
                    });
                    this.liveRegion = c("\x3cspan\x3e", {
                        role: "status",
                        "aria-live": "polite"
                    }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _destroy: function() {
                    clearTimeout(this.searching);
                    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                    this.menu.element.remove();
                    this.liveRegion.remove()
                },
                _setOption: function(a, b) {
                    this._super(a, b);
                    "source" === a && this._initSource();
                    "appendTo" === a && this.menu.element.appendTo(this._appendTo());
                    "disabled" === a && b && this.xhr && this.xhr.abort()
                },
                _appendTo: function() {
                    var a = this.options.appendTo;
                    a && (a = a.jquery || a.nodeType ? c(a) : this.document.find(a).eq(0));
                    a || (a = this.element.closest(".ui-front"));
                    a.length || (a = this.document[0].body);
                    return a
                },
                _initSource: function() {
                    var a = this;
                    if (c.isArray(this.options.source)) {
                        var b = this.options.source;
                        this.source = function(a, f) {
                            f(c.ui.autocomplete.filter(b, a.term))
                        }
                    } else if ("string" === typeof this.options.source) {
                        var f = this.options.source;
                        this.source = function(b, g) {
                            a.xhr && a.xhr.abort();
                            a.xhr = c.ajax({
                                url: f,
                                data: b,
                                dataType: "json",
                                success: function(a) {
                                    g(a)
                                },
                                error: function() {
                                    g([])
                                }
                            })
                        }
                    } else this.source =
                        this.options.source
                },
                _searchTimeout: function(a) {
                    clearTimeout(this.searching);
                    this.searching = this._delay(function() {
                        this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                    }, this.options.delay)
                },
                search: function(a, b) {
                    a = null != a ? a : this._value();
                    this.term = this._value();
                    if (a.length < this.options.minLength) return this.close(b);
                    if (!1 !== this._trigger("search", b)) return this._search(a)
                },
                _search: function(a) {
                    this.pending++;
                    this.element.addClass("ui-autocomplete-loading");
                    this.cancelSearch = !1;
                    this.source({
                            term: a
                        },
                        this._response())
                },
                _response: function() {
                    var a = this,
                        b = ++h;
                    return function(c) {
                        b === h && a.__response(c);
                        a.pending--;
                        a.pending || a.element.removeClass("ui-autocomplete-loading")
                    }
                },
                __response: function(a) {
                    a && (a = this._normalize(a));
                    this._trigger("response", null, {
                        content: a
                    });
                    !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
                },
                close: function(a) {
                    this.cancelSearch = !0;
                    this._close(a)
                },
                _close: function(a) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(),
                        this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
                },
                _change: function(a) {
                    this.previous !== this._value() && this._trigger("change", a, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(a) {
                    return a.length && a[0].label && a[0].value ? a : c.map(a, function(a) {
                        return "string" === typeof a ? {
                            label: a,
                            value: a
                        } : c.extend({
                            label: a.label || a.value,
                            value: a.value || a.label
                        }, a)
                    })
                },
                _suggest: function(a) {
                    var b = this.menu.element.empty();
                    this._renderMenu(b, a);
                    this.isNewMenu = !0;
                    this.menu.refresh();
                    b.show();
                    this._resizeMenu();
                    b.position(c.extend({ of: this.element
                        },
                        this.options.position));
                    this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var a = this.menu.element;
                    a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(a, b) {
                    var f = this;
                    c.each(b, function(b, c) {
                        f._renderItemData(a, c)
                    })
                },
                _renderItemData: function(a, b) {
                    return this._renderItem(a, b).data("ui-autocomplete-item", b)
                },
                _renderItem: function(a, b) {
                    return c("\x3cli\x3e").append(c("\x3ca\x3e").text(b.label)).appendTo(a)
                },
                _move: function(a, b) {
                    if (this.menu.element.is(":visible"))
                        if (this.menu.isFirstItem() &&
                            /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a)) this._value(this.term), this.menu.blur();
                        else this.menu[a](b);
                    else this.search(null, b)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(a, b) {
                    if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, b), b.preventDefault()
                }
            });
            c.extend(c.ui.autocomplete, {
                escapeRegex: function(a) {
                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
                },
                filter: function(a,
                    b) {
                    var f = new RegExp(c.ui.autocomplete.escapeRegex(b), "i");
                    return c.grep(a, function(a) {
                        return f.test(a.label || a.value || a)
                    })
                }
            });
            c.widget("ui.autocomplete", c.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(a) {
                            return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(a) {
                    this._superApply(arguments);
                    if (!this.options.disabled && !this.cancelSearch) {
                        var b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults;
                        this.liveRegion.text(b)
                    }
                }
            })
        })(g)
    })
});
/* ******** */
(function(f) {
    var l = window.AmazonUIPageJS || window.P,
        x = l._namespace || l.attributeErrors,
        a = x ? x("AuthenticationPortalAssets", "") : l;
    a.guardFatal ? a.guardFatal(f)(a, window) : a.execute(function() {
        f(a, window)
    })
})(function(f, l, x) {
    f.when("A", "a-modal", "ready").register("ap-3p-account-connected-modal", function(a, b) {
        var e = a.$;
        (a = a.state("ap-3p-account-connected-modal")) && a.thirdPartyAccountStatus && "rejectWithLoginIdIfConnected" === a.thirdPartyAccountStatus && (e = e("#ap-3p-account-connected-modal-action"), (b = b.get(e)) &&
            b.show())
    });
    "use strict";
    f.when("A", "AuthToolkit", "client-side-counters-util", "ready").register("auth-3p-phone-verification", function(a, b, e) {
        function d() {
            l.NativeUI && "function" === typeof l.NativeUI.applyFullFlash && l.setTimeout(function() {
                l.NativeUI.applyFullFlash()
            }, 900)
        }
        var c = a.$,
            k = c("#auth-pv-enter-code"),
            h;
        try {
            h = /TAH-AN00m/.test(navigator.userAgent)
        } catch (n) {
            h = !1
        }
        h && e.incrementCounter("auth:module-entered");
        b.countingDown("#ap-3p-get-pin-code-button");
        a.on("AuthToolkit.countDownEnd", function(b) {
            "#ap-3p-get-pin-code-button" ===
            b && (c("#auth-phone-number").removeClass("a-form-disabled"), c("#auth-phone-number-wrapper").removeClass("a-form-disabled"), c("#auth-phone-number").attr("disabled", !1))
        });
        a.on("a:dropdown:auth-country-picker:select", d);
        k.bind("change paste keyup", function() {
            0 < c(this).val().length ? b.enableButton("#ap-3p-pv-create-account") : b.disableButton("#ap-3p-pv-create-account")
        });
        a.declarative("auth-verify-button-declarative", "click touchstart", function() {
            h && e.incrementCounter("auth:pin-input-handler");
            var b = c("#auth-3p-pv-form");
            b.find("#insisted").val("false");
            b.find("#getPinCodeAction").val("true");
            b.submit();
            e.incrementCounter("Click3PCodeVerifyButton");
            var a = "auth:pin-input-handler#insisted" + b.find("#insisted").val();
            h && e.incrementCounter(a);
            b = "auth:pin-input-handler#getPinCodeAction" + b.find("#getPinCodeAction").val();
            h && e.incrementCounter(b)
        });
        c("#ap-3p-insist-verify-link").click(function() {
            var b = c("#auth-3p-pv-form");
            b.find("#auth-country-picker").val(c("#ap-3p-insist-verify-link").attr("countrycode"));
            b.find("#auth-phone-number").val(c("#ap-3p-insist-verify-link").attr("phonenumber"));
            b.find("#insisted").val("true");
            b.submit()
        });
        return {
            callApplyFullFlash: d
        }
    });
    f.when("A", "a-modal", "ready").register("ap-3p-pv-modal", function(a, b) {
        var e = a.$,
            d = a.state("ap-3p-pv-modal");
        if (d) {
            var c = d.thirdPartyPhoneConflict;
            if (c && "None" !== c.toString()) {
                var k = e("#" + d.formIdToBindTo),
                    e = e("#ap-3p-pv-modal-action");
                (b = b.get(e)) && c && "None" !== c.toString() && b.show();
                a.declarative("ap-3p-pv-modal-complete", "click", function() {
                    c && "WeChat" === c.toString() && (k.find("#insisted").val("true"), k.submit())
                })
            }
        }
    });
    "use strict";
    f.when("A", "ready").register("account_conflict_continue_verify", function(a) {
        var b = a.$;
        b("#auth-account-conflict-continue-verify-url").click(function(a) {
            a.preventDefault();
            a = b("#ap_account_conflict_warning_customer_actions");
            a.exists() && a.submit()
        });
        b.fn.exists = function() {
            return 0 !== this.length
        }
    });
    "use strict";
    f.when("A", "cvf", "ready").register("auth-account-switcher", function(a, b) {
        function e(b) {
            return x
        }

        function d(b) {
            l.location = c(l.location);
            return x
        }

        function c(b) {
            var a = b.search;
            return a ? a.match(k) ?
                b.href.replace(k, "$1ACCOUNT_SWITCH_FAILED") : b.href + "\x26errorCodes\x3dACCOUNT_SWITCH_FAILED" : b.href + "?errorCodes\x3dACCOUNT_SWITCH_FAILED"
        }
        a = a.$;
        var k = /(errorCodes=)[\w\d]+/g;
        a("#ap-account-switcher-container").length && "undefined" !== typeof a("#ap-account-switcher-container").attr("data-token") && (a = {
            target: a("#ap-account-switcher-container"),
            requestToken: a("#ap-account-switcher-container").attr("data-token"),
            requestArbToken: a("#ap-account-switcher-container").attr("data-arbToken"),
            onSuccess: e,
            onError: d,
            autoStart: !1,
            widgetMetricsScope: "CvfAccountSwitcherClientSideMetrics"
        }, b.create(a).start());
        return {
            getUrlWithSwitchErrorCodeAdded: c
        }
    });
    "use strict";
    f.register("AmazonHelpPopup", function() {
        return function(a, b, e) {
            l.open(a, b, e).focus();
            return !1
        }
    });
    "use strict";
    f.when("A", "client-side-counters-util", "counters-name", "ready").register("apple-login-button-counter", function(a, b, e) {
        var d = e.getCommonCounterNamePrefix() + ":APPLE";
        a = a.$("#signInWithAppleSubmit");
        0 < a.length && a.click(function() {
            b.incrementCounter(d)
        });
        return {
            appleButtonClickEventCounterName: d
        }
    });
    "use strict";
    f.when("A", "auth-image-captcha", "ready").register("auth-audio-captcha-handler", function(a, b) {
        function e(b) {
            b && b.captchaImageUrl && t.test(b.captchaImageUrl) ? (h.val(b.cesString), r.attr("src", b.captchaImageUrl), k.load()) : (f.log("Failed to load new CAPTCHA due to invalid response from server", "FATAL", "auth-audio-captcha-handler"), l.location.reload(!0))
        }

        function d() {
            a.ajax(r.attr("data-refresh-url"), u);
            C.focus()
        }
        var c = a.$,
            k = c("#audio-captcha")[0],
            h = c("input[type\x3d'hidden'][name\x3d'ces']"),
            n = c("#audio-captcha-section"),
            g = c("#auth-captcha-guess"),
            z = c("#image-captcha-section"),
            r = c("#mp3-file"),
            q = c("#auth-switch-captcha-to-audio-container"),
            m = c("#use_audio_captcha"),
            w = c("#use_image_captcha");
        c("#auth-error-message-box");
        var t = /^(http|https):\/\//,
            v = c(".a-mobile").length,
            C = c("#audio-captcha-play-pause-button"),
            B = c("#audio-captcha-options"),
            p = c("#image-captcha-options"),
            y = c("#image-captcha-placeholder"),
            A = c("#audio-captcha-placeholder"),
            u = {
                cache: !1,
                timeout: 1E3,
                error: function() {
                    f.log("Failed to refresh CAPTCHA due to error response from server", "FATAL", "auth-audio-captcha-handler");
                    l.location.reload(!0)
                },
                success: e
            };
        a.capabilities.audio && q.show();
        return {
            switchCaptchaToAudio: function() {
                z.hide();
                w.val("false");
                n.show();
                m.val("true");
                g.val("");
                d();
                v && (p.hide(), B.show(), g.attr("placeholder", A.val()))
            },
            switchCaptchaToImage: function() {
                n.hide();
                m.val("false");
                z.show();
                w.val("true");
                g.val("");
                k.pause();
                b.refresh();
                g.focus();
                v && (p.show(), B.hide(), g.attr("placeholder",
                    y.val()))
            },
            audioRefresh: d,
            audioPlayButton: function() {
                k.paused ? (g.focus(), k.play()) : k.pause()
            },
            handleSuccess: e
        }
    });
    "use strict";
    f.when("A", "auth-audio-captcha-handler", "ready").register("auth-audio-captcha", function(a, b) {
        a = a.$;
        a("#auth-switch-captcha-to-audio").click(function(a) {
            a.preventDefault();
            b.switchCaptchaToAudio()
        });
        a("#auth-switch-captcha-to-image").click(function(a) {
            a.preventDefault();
            b.switchCaptchaToImage()
        });
        a("#auth-refresh-audio").click(function(a) {
            a.preventDefault();
            b.audioRefresh()
        });
        a("#audio-captcha-play-pause-button").click(function(a) {
            a.preventDefault();
            b.audioPlayButton()
        });
        return {
            handleSuccess: b.handleSuccess
        }
    });
    "use strict";
    f.when("A", "client-side-counters-util", "ready").register("autocomplete-signup-metric", function(a, b) {
        var e = a.$;
        e("#ap_customer_name, #ap_email, #ap_phone_number").bind("animationstart", function(a) {
            "onAutoFillChanged" === a.originalEvent.animationName && (e(this).hasClass("auth-required-field") ? b.incrementCounter("AutocompleteSignupChangedCounterRequired:" +
                this.id) : b.incrementCounter("AutocompleteSignupChangedCounterOptional:" + this.id))
        })
    });
    "use strict";
    f.when("A", "ready").execute(function(a) {
        a.$(".auth-autofocus").first().focus()
    });
    "use strict";
    f.when("A", "ready").execute(function(a) {
        function b() {
            location.href = d.returnToAddress
        }

        function e() {
            clearTimeout(c);
            c = setTimeout(b, k)
        }
        var d = a.state("timeout-parameters");
        if (d) {
            var c = 0,
                k = d.timeoutValue;
            document.onmousemove = e;
            document.onkeypress = e;
            document.ontouchstart = e;
            document.ontouchmove = e;
            document.ontouchend =
                e;
            e()
        }
    });
    "use strict";
    f.when("A", "client-side-counters-util", "ready").execute(function(a, b) {
        a.on("a:expander:blacklist_password_learn_more:toggle:expand", function(a) {
            b.incrementCounter("BlacklistPasswordInstructionLearnMoreExpand")
        });
        a.on("a:expander:blacklist_password_learn_more:toggle:collapse", function(a) {
            b.incrementCounter("BlacklistPasswordInstructionLearnMoreCollapse")
        })
    });
    "use strict";
    f.when("page-util").register("client-side-counters-util", function(a) {
        function b(b, a) {
            var c = l.ue;
            c && "function" ===
                typeof c.count && (a || (a = (c.count(b) || 0) + 1), c.count(b, a))
        }
        return {
            incrementCounter: function(a) {
                b(a)
            },
            insertCounter: b,
            triggerWeblab: function(b, a) {
                var c = l.ue;
                c && "function" === typeof c.trigger && c.trigger(b, a)
            },
            getCounterNameWithDeviceAndPageType: function(b) {
                return b + a.determineDeviceType() + a.determinePageType()
            }
        }
    });
    "use strict";
    f.when("A", "AuthToolkit", "auth-pv-resend-utility", "ready").register("auth-cnep-add-password", function(a, b, e) {
        var d = a.$;
        if (!(1 > d("#ap-cnep-add-password-resend-code-button").length)) {
            b.countingDown("#ap-cnep-add-password-resend-code-button");
            var c = a.state("auth-cnep-add-password-resend-state");
            if (c) {
                var k = d("#auth-cnep-add-password-client-side-success-box"),
                    h = d(".auth-pv-client-side-success-messages li"),
                    n = d("#auth-cnep-add-password-client-side-error-box"),
                    g = d(".auth-pv-client-side-error-messages li"),
                    f = d(".auth-server-side-message-box"),
                    r = d("#auth-resend-code-succeeded"),
                    q = d("#auth-there-was-an-error-throttled"),
                    m = d("#auth-there-was-an-error");
                c.sessionTimeoutUrl = c.cnepUrl;
                var w = function() {
                        e.successHandler(r, k)
                    },
                    t = function(b) {
                        e.errorHandler(b,
                            c, q, m, n, !1)
                    };
                d("#ap-cnep-add-password-resend-code-button").click(function() {
                    "#ap-cnep-add-password-resend-code-button".isDisabled || (e.hideMessageBox(k, h, n, g, f), a.ajax(c.resendPinCodeUrl, {
                        method: "post",
                        success: w,
                        error: t
                    }), "undefined" === typeof d("#ap-cnep-add-password-resend-code-button") || d("#ap-cnep-add-password-resend-code-button").hasClass("a-button-disabled") || (d("#ap-cnep-add-password-resend-code-button").addClass("a-button-disabled"), d("#ap-cnep-add-password-resend-code-button").find(".a-button-text").attr("disabled",
                        "disabled")), d("#ap-cnep-add-password-resend-code-button").find(".a-button-text").data("remaining", c.originalRemaining), b.countingDown("#ap-cnep-add-password-resend-code-button"))
                })
            }
        }
    });
    "use strict";
    f.when("A", "client-side-counters-util", "ready").register("auth-cnep-authenticator-metrics", function(a, b) {
        var e = a.$,
            d = Object.freeze({
                CLICK_ADD_AUTHENTICATOR: "CNEPClickAddAuthenticator",
                CLICK_EDIT_AUTHENTICATOR: "CNEPClickEditAuthenticator"
            });
        (function() {
            1 === e("input#auth-cnep-authenticator-add-button").length &&
                e("input#auth-cnep-authenticator-add-button").click(function() {
                    b.incrementCounter(d.CLICK_ADD_AUTHENTICATOR)
                });
            1 === e("input#auth-cnep-authenticator-edit-button").length && e("input#auth-cnep-authenticator-edit-button").click(function() {
                b.incrementCounter(d.CLICK_EDIT_AUTHENTICATOR)
            })
        })()
    });
    "use strict";
    f.when("A", "client-side-counters-util", "mobile-auth-platform", "3p-promise", "ready").register("auth-cnep-webauthn-info", function(a, b, e, d) {
        function c(a) {
            "object" === f.type(a) ? b.incrementCounter(m.IS_USER_VERIFYING_PLATFORM_AUTHENTICATOR_AVAILABLE_ERROR) :
                (w = a, b.incrementCounter(m.IS_USER_VERIFYING_PLATFORM_AUTHENTICATOR_AVAILABLE_SUCCESS));
            v = !0
        }

        function k(a) {
            !a || a.error ? b.incrementCounter(m.GET_APPINFO_ERROR) : (t = {
                appIdentifier: a.appIdentifier,
                platform: a.platform,
                mapVersion: a.mapVersion
            }, b.incrementCounter(m.GET_APPINFO_SUCCESS));
            l = !0
        }

        function h(b, a, c) {
            c = (c || "").trim();
            if ("" !== c) {
                var d = "input[name\x3d'" + a + "']";
                0 < b.find(d).length ? b.find(d).val(c) : f("\x3cinput\x3e").attr({
                    type: "hidden",
                    name: a,
                    value: c
                }).appendTo(b)
            }
        }

        function n(b) {
            b.closest("li").addClass("a-hidden aok-hidden")
        }

        function g() {
            var a = new Date;
            return new d(function(c) {
                var d = null,
                    d = setInterval(function() {
                        v && l ? (clearInterval(d), c()) : 100 < new Date - a && (l = v = !0, b.incrementCounter(m.MAP_CALL_TIMEOUT), clearInterval(d), c())
                    }, 20)
            })
        }
        var f = a.$,
            r = Object.freeze({
                webAuthNCapable: "webAuthNCapable",
                appIdentifier: "appIdentifier",
                platform: "platform",
                mapVersion: "mapVersion"
            }),
            q = Object.freeze({
                major: 6,
                minor: 12,
                patch: 3
            }),
            m = Object.freeze({
                WEBAUTHN_CAPABLE: "WebAuthNCapable:True",
                WEBAUTHN_INCAPABLE: "WebAuthNCapable:False",
                GET_APPINFO_SUCCESS: "GetCurrentAppInfo:Success",
                GET_APPINFO_ERROR: "GetCurrentAppInfo:Error",
                IS_USER_VERIFYING_PLATFORM_AUTHENTICATOR_AVAILABLE_SUCCESS: "IsUserVerifyingPlatformAuthenticatorAvailable:Success",
                IS_USER_VERIFYING_PLATFORM_AUTHENTICATOR_AVAILABLE_ERROR: "IsUserVerifyingPlatformAuthenticatorAvailable:Error",
                MAP_CALL_TIMEOUT: "MAPCallTimeout"
            }),
            w = !1,
            t = {},
            v = !1,
            l = !1;
        (function() {
            if (!(1 > f("input#auth-cnep-authenticator-add-button").length)) {
                var a = f("input#auth-cnep-authenticator-add-button").closest("form"),
                    d = !1,
                    y = !1,
                    A = "C";
                0 < a.find("input[name\x3d'webAuthNEnrollExperimentWeblabTreatment']").length &&
                    (d = !0, A = a.find("input[name\x3d'webAuthNEnrollExperimentWeblabTreatment']").val(), a.find("input[name\x3d'webAuthNEnrollExperimentWeblabTreatment']").remove());
                0 < a.find("input[name\x3d'shouldShowWebAuthNEnrollByEmailPattern']").length && (y = "true" === a.find("input[name\x3d'shouldShowWebAuthNEnrollByEmailPattern']").val(), a.find("input[name\x3d'shouldShowWebAuthNEnrollByEmailPattern']").remove());
                y || d ? (e.isUserVerifyingPlatformAuthenticatorAvailable(c, 100), e.getCurrentAppInfo(k, 100), g().then(function() {
                    var c;
                    if (c = !f.isEmptyObject(t) && !0 === w) {
                        c = t.platform;
                        var e = t.mapVersion;
                        if ("string" !== f.type(e) || "string" !== f.type(c)) c = !1;
                        else if ("Android" === c) c = "20211022P" <= e;
                        else {
                            var k = e.split(".");
                            c = parseInt(k[0] || "0");
                            e = parseInt(k[1] || "0");
                            k = parseInt(k[2] || "0");
                            c = isNaN(c) || isNaN(e) || isNaN(k) ? !1 : c !== q.major ? c > q.major : e !== q.minor ? e > q.minor : k >= q.patch
                        }
                    }
                    c ? (b.incrementCounter(m.WEBAUTHN_CAPABLE), c = !0) : (b.incrementCounter(m.WEBAUTHN_INCAPABLE), c = !1);
                    c ? (d && b.triggerWeblab("iOS" === t.platform ? "IDENT_AA_EXP_394591" : "IDENT_AA_EXP_ANDROID_406190",
                        A), y || "T1" === A ? (h(a, r.webAuthNCapable, "true"), h(a, r.appIdentifier, t.appIdentifier), h(a, r.platform, t.platform), h(a, r.mapVersion, t.mapVersion)) : n(a)) : n(a)
                })) : l = v = !0;
                a.submit(function(b) {
                    if (v && l) return !0;
                    b.preventDefault();
                    setTimeout(function() {
                        a.submit()
                    }, 20)
                })
            }
        })()
    });
    "use strict";
    f.when("auth-contact-verification-handler", "ready").register("auth-contact-verification-autostart", function(a) {
        return a.create()
    });
    "use strict";
    f.when("A", "auth-form-field-utils", "cvf", "client-side-counters-util", "ready").register("auth-contact-verification-handler",
        function(a, b, e, d) {
            function c(c) {
                var g = this;
                c = c || {};
                this.postVerificationSuccessCallback = c.postVerificationSuccessCallback || h.noop;
                this.$verificationForm = h("form.auth-contact-verification-form");
                this.$contactVerificationWidgetTarget = h(".auth-contact-verification-widget-target").first();
                this.$claimToken = this.$verificationForm.find('input[type\x3d"hidden"].auth-contact-verification-claim-token');
                this.$verifyContactButton = this.$verificationForm.find(".auth-contact-verification-button");
                this.contactVerificationEndpoint =
                    this.$verificationForm.attr("action");
                this.postVerificationFormAction = this.$verificationForm.data("post-verification-action");
                this.$verificationTarget = this.$verificationForm.find(".auth-contact-verification-target");
                this.$spinnerTarget = this.$verificationForm.find(".auth-contact-verification-spinner");
                this.$successMessage = this.$verificationForm.find(".auth-contact-verification-success-message");
                this.preVerify = "preVerify";
                this.pendingVerify = "pendingVerify";
                this.verifyState = g.preVerify;
                this.formSubmitEvent =
                    "submit.contactVerification";
                this.$reverifyOnChangeTarget = h(".auth-require-reverify-on-change, .auth-require-reverify-on-change :input");
                this.verificationFlowCompleteTime = this.verifyRequestCompleteTime = this.verificationFlowStartTime = 0;
                this.disableTargetLabelCssClass = "a-color-tertiary";
                this.errorCodes = "\x26errorCodes\x3d";
                this.internalError = "INTERNAL_ERROR";
                this.ajax = function(b, c) {
                    a.ajax(b, c)
                };
                this.startContactVerification = function() {
                    g.verificationFlowStartTime = (new Date).getTime();
                    g.ajax(g.contactVerificationEndpoint, {
                        method: "post",
                        cache: !1,
                        params: k(g.$verificationForm),
                        error: g.startContactVerificationError,
                        success: g.initializeComposableVerificationWidget
                    })
                };
                this.startContactVerificationError = function(a, b, c) {
                    f.log("Error contacting contact verification endpoint: " + c + ". Customers will not be able to verify their contact information.", "INFO");
                    d.incrementCounter("contactVerificationAjaxFailureContactVerificationInit");
                    l.location.href = l.location.href + g.errorCodes + g.internalError
                };
                this.cvfWidgetFactory = e;
                this.initializeComposableVerificationWidget =
                    function(a) {
                        a = a || {};
                        a.location ? l.location.href = a.location : (a = a.requestToken || "", g.verifyRequestCompleteTime = (new Date).getTime(), a = {
                            target: g.$contactVerificationWidgetTarget,
                            requestToken: a,
                            onSuccess: g.completeContactVerification,
                            onError: g.widgetInitializationError,
                            autoStart: !1
                        }, g.$spinnerTarget && (a.spinnerTarget = g.$spinnerTarget), g.cvfWidgetFactory.create(a).start())
                    };
                this.widgetInitializationError = function(a, b, c) {
                    f.log("Error initializing verification widget: " + c + ". Customers will not be able to verify their contact information.",
                        "INFO");
                    d.incrementCounter("contactVerificationAjaxFailureWidgetInit");
                    l.location.href = l.location.href + g.errorCodes + g.internalError
                };
                this.setClaimToken = function(a) {
                    g.$claimToken.val(a)
                };
                this.completeContactVerification = function(a, c) {
                    g.verificationFlowCompleteTime = (new Date).getTime();
                    c ? (g.setClaimToken(a), g.setPostVerificationAction(), g.$successMessage.show(), g.$verificationForm.unbind(g.formSubmitEvent), g.$verificationTarget.each(function() {
                        b.enableInput(h(this));
                        var a = h("label[for\x3d'" + h(this).attr("id") +
                            "']");
                        a.length && a.removeClass(g.disableTargetLabelCssClass)
                    }), d.insertCounter("contactVerificationCompleteVerificationFlowCompleteTime", g.verificationFlowCompleteTime - g.verificationFlowStartTime), d.insertCounter("contactVerificationVerifyRequestCompleteTime", g.verifyRequestCompleteTime - g.verificationFlowStartTime), h.isFunction(g.postVerificationSuccessCallback) && g.postVerificationSuccessCallback()) : l.location.href = l.location.href + g.errorCodes + g.internalError
                };
                this.setPostVerificationAction = function() {
                    g.$verificationForm.prop("action",
                        g.postVerificationFormAction)
                };
                this.verificationRequestHandler = function(a) {
                    a.preventDefault();
                    g.$spinnerTarget && g.$spinnerTarget.show();
                    g.verifyState = g.pendingVerify;
                    g.$verifyContactButton.hide();
                    g.startContactVerification()
                };
                this.bindVerificationFormEvent = function() {
                    g.$verificationForm.bind(g.formSubmitEvent, g.verificationRequestHandler)
                };
                g.bindVerificationFormEvent();
                this.unbindVerificationFormEvent = function() {
                    g.$verificationForm.unbind(g.formSubmitEvent)
                };
                this.safeBind = function() {
                    g.unbindVerificationFormEvent();
                    g.bindVerificationFormEvent()
                };
                this.resetContactVerificationOnRequestInfoChange = function() {
                    g.$reverifyOnChangeTarget.bind("keyup", function(b) {
                        b.preventDefault();
                        b = 13 === b.keyCode;
                        g.verifyState === g.preVerify || b || (a.trigger("cvf:claim:changed"), g.verifyState = g.preVerify, g.reVerifyEmail());
                        g.$claimToken.val() && g.safeBind()
                    })
                };
                g.resetContactVerificationOnRequestInfoChange();
                this.reVerifyEmail = function() {
                    g.$contactVerificationWidgetTarget.empty();
                    g.$verifyContactButton.show();
                    g.$successMessage.hide();
                    g.disableVerificationTarget();
                    g.$verificationForm.prop("action", g.contactVerificationEndpoint)
                };
                this.disableVerificationTarget = function() {
                    g.$verificationTarget.each(function() {
                        b.disableInput(h(this));
                        var a = h("label[for\x3d'" + h(this).attr("id") + "']");
                        a.length && a.addClass(g.disableTargetLabelCssClass)
                    })
                }
            }

            function k(a) {
                a = a.find("input.auth-contact-verification-request-info, input[type\x3dhidden]");
                return b.inputsToJson(a)
            }
            var h = a.$;
            return {
                create: function(a) {
                    d.incrementCounter("contactVerificationCVFCreate");
                    return new c(a)
                },
                ContactVerificationHandler: c
            }
        });
    "use strict";
    f.when("A").register("auth-cookie", function(a) {
        function b(b, d, e) {
            if (b) {
                var n = "";
                a.isFiniteNumber(e) && (0 > e ? n = "; expires\x3dThu, 01 Jan 1970 00:00:00 GMT" : (n = new Date, n.setDate(n.getDate() + e), n = "; expires\x3d" + n.toGMTString()));
                document.cookie = b + "\x3d" + l.encodeURIComponent(d) + n;
                return !0
            }
            return !1
        }

        function e(a) {
            if (0 < document.cookie.length && a) {
                var b = document.cookie.indexOf(a + "\x3d");
                if (-1 < b) return b = b + a.length + 1, a = document.cookie.indexOf(";", b), -1 === a && (a = document.cookie.length), l.decodeURIComponent(document.cookie.substring(b,
                    a))
            }
            return ""
        }

        function d(a) {
            b(a, "", -1)
        }
        return {
            setCookie: b,
            getCookieValue: e,
            deleteCookie: d,
            checkCookieEnabled: function(a) {
                b("amznTest", "1");
                var k = e("amznTest");
                k ? d("amznTest") : a && (a = document.getElementById(a)) && (a.style.display = "block");
                return !!k
            }
        }
    });
    "use strict";
    f.when("A", "phone_verification_called_within_one_minute", "ready").register("auth-pv-resend-utility", function(a, b) {
        return {
            successHandler: function(a, b) {
                a.show();
                b.show()
            },
            errorHandler: function(a, d, c, k, h, n) {
                if (403 === a.http.status) l.location = d.sessionTimeoutUrl;
                else {
                    a = a.http.response || "";
                    if (0 <= a.search("Throttled")) c.show();
                    else if (0 <= a.search("CalledWithinOneMinute")) {
                        if (n) return b.showErrorMessage();
                        c.show()
                    } else k.show();
                    h.show()
                }
            },
            hideMessageBox: function(a, b, c, k, h) {
                a.hide();
                b.hide();
                c.hide();
                k.hide();
                h.hide()
            }
        }
    });
    f.when("A", "auth-pv-resend-utility", "ready").register("auth-pv-resend", function(a, b) {
        var e = a.state("auth-pv-page-state");
        if (e) {
            var d = a.$,
                c = d("#auth-pv-client-side-success-box"),
                k = d(".auth-pv-client-side-success-messages li"),
                h = d("#auth-pv-client-side-error-box"),
                n = d(".auth-pv-client-side-error-messages li"),
                g = d(".auth-server-side-message-box"),
                f = d("#auth-resend-code-succeeded"),
                l = d("#auth-there-was-an-error-throttled"),
                q = d("#auth-there-was-an-error"),
                m = d("#auth-resend-code-link"),
                w = d("#calledWithinOneMinuteReadyForResend"),
                t = function() {
                    b.successHandler(f, c)
                },
                v = function(a) {
                    b.errorHandler(a, e, l, q, h, !0)
                };
            m.click(function(d) {
                b.hideMessageBox(c, k, h, n, g);
                w.hide();
                a.ajax(e.resendUrl, {
                    method: "post",
                    success: t,
                    error: v
                })
            });
            return {
                successHandler: t,
                errorHandler: v
            }
        }
    });
    f.when("A").register("auto-verification-timeout", function(a) {
        var b = a.$,
            e = b("#auth-auto-verification-failed");
        e.length && a.delay(function() {
            e[0].click()
        }, 3E4)
    });
    "use strict";
    f.when("A", "ready").register("counters-name", function(a) {
        return {
            getCommonCounterNamePrefix: function() {
                var b = "unknown",
                    e = l.location.pathname.split("/");
                0 < e.length && (b = e[e.length - 1]);
                var e = "",
                    d = a.state("auth-csm-page-state");
                d && (e = d.assocHandle);
                return ["AuthenticationPortal", b, e].join(":")
            }
        }
    });
    "use strict";
    f.when("A", "client-side-counters-util",
        "mobile-auth-platform", "ready").execute("retrieve-customer-information", function(a, b, e) {
        var d = a.$;
        a = a.state("smartLockAttrs");
        console.debug("smartLockAttrs", a);
        if (a && a.isSupported && (a = a.weblab) && "C" !== a) {
            var c = e.CONSTANT.CustomerInformationHintType,
                k = 0 < d("#ap_email").length && 0 === d("#ap_phone_number").length,
                h = function() {
                    if (0 === d("select#auth-country-picker").length) return [];
                    var a = d("select#auth-country-picker option[selected]"),
                        a = {
                            callingCode: "+" + a.data("callingCode"),
                            countryCode: a.data("countryCode")
                        },
                        b = d("select#auth-country-picker option").map(function(a, b) {
                            a = d(b);
                            return {
                                callingCode: "+" + a.data("callingCode"),
                                countryCode: a.data("countryCode")
                            }
                        }).toArray();
                    b.unshift(a);
                    return b
                }(),
                n = function(a, b) {
                    a.val(b);
                    a.data("smartlockPopulate", b)
                },
                g = function(a) {
                    a.name && n(d("#ap_customer_name"), a.name);
                    a.namePron && n(d("#ap_customer_name_pronunciation"), a.namePron);
                    a.email && n(d("#ap_email"), a.email);
                    if (a.phoneNumber)
                        if (0 < d("select#auth-country-picker").length) {
                            for (var b = !1, c = 0; c < h.length; c++) {
                                var e = h[c];
                                if (a.phoneNumber.startsWith(e.callingCode)) {
                                    b =
                                        a.phoneNumber.substr(e.callingCode.length);
                                    f.when("a-dropdown").execute(function(a) {
                                        a.getSelect("auth-country-picker").setValue(e.countryCode)
                                    });
                                    n(d("#ap_phone_number"), b);
                                    b = !0;
                                    break
                                }
                            }
                            b || n(d("#ap_phone_number"), a.phoneNumber)
                        } else k ? n(d("#ap_email"), a.phoneNumber) : n(d("#ap_phone_number"), a.phoneNumber)
                },
                l = function(a, b, c) {
                    a.bind(b, function(a) {
                        try {
                            c.apply(this, arguments)
                        } finally {
                            d(this).unbind(a)
                        }
                    })
                },
                r = function(a) {
                    console.debug("customerInfoResult", a);
                    a.resultType ? (b.incrementCounter("GetCustomerInformationHint:RESULT:" +
                        a.resultType), "OK" === a.resultType && g(a.information)) : b.incrementCounter("GetCustomerInformationHint:ERROR")
                },
                q = [],
                q = k ? {
                    T1: [c.NAME, c.EMAIL, c.PHONE],
                    T2: [c.NAME, c.EMAIL],
                    T3: [c.PHONE]
                }[a] : {
                    T1: [c.NAME, c.EMAIL],
                    T2: [c.NAME, c.EMAIL],
                    T3: [c.PHONE]
                }[a],
                m = d("#register_accordion_header");
            0 < m.length ? "true" === m.parent().attr("aria-checked") ? (b.incrementCounter("GetCustomerInformationHint:landingOnRegistration"), e.getCustomerInformationHint(q, r)) : l(m, "click", function() {
                b.incrementCounter("GetCustomerInformationHint:switchToRegistration");
                e.getCustomerInformationHint(q, r)
            }) : e.getCustomerInformationHint(q, r);
            k || "T1" !== a || l(d("#ap_phone_number"), "focusin", function() {
                b.incrementCounter("GetCustomerInformationHint:typingOnPhone");
                e.getCustomerInformationHint([c.PHONE], r)
            });
            d("#ap_register_form").submit(function(a) {
                d("#ap_customer_name, #ap_customer_name_pronunciation, #ap_email, #ap_phone_number").each(function(a, c) {
                    a = d(c);
                    var e = a.data("smartlockPopulate");
                    e && e !== a.val() && b.incrementCounter("GetCustomerInformationHint:CHANGED:" + c.id)
                })
            })
        }
    });
    "use strict";
    f.when("A", "AuthToolkit", "client-side-counters-util", "ready").register("disable-button", function(a, b, e) {
        var d = a.$,
            c = d("span.auth-disable-button-on-submit");
        typeof c !== x && 0 < c.length && c.closest("form").bind("submit", function() {
            b.disableButton(c);
            a.delay(function() {
                e.incrementCounter("NoPostbackFromSubmit");
                b.enableButton(c)
            }, 4E3)
        })
    });
    "use strict";
    f.when("A", "ready").register("auth-footer-language-picker", function(a) {
        a.on("a:dropdown:selected:languagePicker", function(a) {
            l.location.href =
                a.value
        })
    });
    f.when("A").execute(function(a) {
        a.declarative("other-languge-option-click", "click", function(a) {
            "input" === a.targetTag && (l.location.href = a.$target[0].value)
        })
    });
    "use strict";
    f.when("A").register("auth-form-field-utils", function(a) {
        function b(a) {
            a.prop("disabled", !1);
            a.removeClass("a-form-disabled");
            a.find("input").prop("disabled", !1)
        }

        function e(a) {
            a.removeClass("a-button-disabled");
            a.find("input").prop("disabled", !1)
        }

        function d(a) {
            a.prop("disabled", !0);
            a.addClass("a-form-disabled");
            a.find("input").prop("disabled", !0)
        }

        function c(a) {
            a.addClass("a-button-disabled");
            a.find("input").prop("disabled", !0)
        }
        var k = a.$;
        return {
            enableTextInput: b,
            enableButton: e,
            enableInput: function(a) {
                0 < a.closest(".a-button").length ? e(a) : (a.hasClass("a-input-text") || a.hasClass("a-input-text-wrapper")) && b(a)
            },
            disableTextInput: d,
            disableButton: c,
            disableInput: function(a) {
                0 < a.closest(".a-button").length ? c(a) : (a.hasClass("a-input-text") || a.hasClass("a-input-text-wrapper")) && d(a)
            },
            inputsToJson: function(a) {
                return a.map(function() {
                    var a = k(this);
                    if (a.is("input")) {
                        var b = {};
                        b[a.attr("name")] = a.val();
                        return b
                    }
                }).toArray().reduce(function(a, b) {
                    return k.extend(a, b)
                })
            }
        }
    });
    "use strict";
    f.when("A", "AmazonHelpPopup", "ready").execute(function(a, b) {
        a.$("#auth-amazon-help-link").click(function() {
            return b(this.href, "AmazonHelp", "width\x3d700,height\x3d800,resizable\x3d1,scrollbars\x3d1,toolbar\x3d1,status\x3d1")
        })
    });
    f.when("A").execute(function(a) {
        a.declarative("auth-popup", "click", function(a) {
            var e = a.data;
            a = a.$target.closest("a")[0];
            (e = l.open(a.href,
                a.target, e.windowOptions)) && e.focus()
        })
    });
    f.when("auth-cookie", "ready").execute(function(a) {
        a.checkCookieEnabled("auth-cookie-warning-message")
    });
    f.when("A", "ready").register("AuthToolkit", function(a) {
        function b(a) {
            "undefined" !== typeof c(a) && c(a).hasClass("a-button-disabled") && (c(a).removeClass("a-button-disabled"), d(a).attr("disabled", !1))
        }

        function e(k, h) {
            var f = d(k),
                g = f.data("remaining"),
                l = f.data("unit");
            0 === g ? (b(k), c(k).find(".a-button-text").text(h), a.trigger("AuthToolkit.countDownEnd", k)) : 0 < g &&
                (f.data("remaining", g - 1), c(k).find(".a-button-text").text(l.replace(/%d/, g)), a.delay(function() {
                    e(k, h)
                }, 1E3))
        }

        function d(a) {
            var b = c(a).find("button");
            return 0 < b.length ? b : c(a).find("input")
        }
        var c = a.$;
        return {
            disableButton: function(a) {
                "undefined" === typeof c(a) || c(a).hasClass("a-button-disabled") || (c(a).addClass("a-button-disabled"), d(a).attr("disabled", "disabled"))
            },
            enableButton: b,
            countingDown: function(a) {
                if ("undefined" !== typeof c(a)) {
                    var b = c(a).find(".a-button-text").text();
                    0 <= d(a).data("remaining") &&
                        e(a, b)
                }
            }
        }
    });
    "use strict";
    f.when("A").register("handle-ios-redirect", function(a) {
        document.getElementById("returnToUrl") && 0 !== document.getElementById("returnToUrl").getElementsByTagName("a").length && (l.location.href = document.getElementById("returnToUrl").getElementsByTagName("a")[0].href)
    });
    "use strict";
    f.when("A").register("wechat", function(a) {
        function b(a, b) {
            return e.ajax({
                url: "https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
                dataType: "script",
                success: a,
                error: b,
                cache: !0
            })
        }
        var e = a.$,
            d = !1,
            c = null;
        return {
            WxLogin: function(a, h) {
                h && e.isFunction(h) || (h = function() {});
                d ? h(new c(a)) : b(function() {
                    d = !0;
                    c = l.WxLogin;
                    h(new c(a));
                    e("#identity-provider-pagelet-wechat-gray-block").fadeOut()
                }, function() {
                    h()
                })
            }
        }
    });
    f.when("A", "wechat", "ready").execute(function(a, b) {
        a = a.$;
        a = a("#auth-identity-provider-wechat-qrcode-container");
        0 !== a.length && (b.WxLogin({
            id: "auth-identity-provider-wechat-qrcode-container",
            appid: a.data("appid"),
            scope: a.data("scope"),
            redirect_uri: a.data("redirect-uri"),
            state: a.data("state"),
            style: a.data("style")
        }), setTimeout(function() {
            l.location.reload()
        }, 9E5))
    });
    "use strict";
    f.when("A", "auth-captcha-cf").register("auth-image-captcha", function(a) {
        function b(a) {
            a && a.captchaImageUrl && c.test(a.captchaImageUrl) ? (d("#auth-captcha-image").attr("src", a.captchaImageUrl), d("input[type\x3d'hidden'][name\x3d'ces']").val(a.cesString)) : (f.log("Failed to load new CAPTCHA due to invalid response from server", "FATAL", "auth-captcha"), l.location.reload(!0))
        }

        function e() {
            d("#auth-captcha-refresh-link").hide();
            d("#auth-captcha-noop-link").show();
            d("#auth-captcha-image").hide();
            d("#auth-captcha-image-container").addClass("a-lazy-loaded");
            var b = d("#auth-captcha-image").attr("data-refresh-url");
            b || f.log("Attempting to instantiate Captcha without a valid refresh url.", "FATAL", "auth-captcha");
            a.ajax(b, k)
        }
        var d = a.$,
            c = /^(http|https):\/\//,
            k = {
                cache: !1,
                timeout: 1E3,
                error: function() {
                    f.log("Failed to refresh CAPTCHA due to error response from server", "FATAL", "auth-captcha");
                    l.location.reload(!0)
                },
                success: b
            };
        d("#auth-captcha-image").load(function() {
            d("#auth-captcha-noop-link").hide();
            d("#auth-captcha-refresh-link").show();
            d("#auth-captcha-image-container").removeClass("a-lazy-loaded");
            d("#auth-captcha-image").fadeIn()
        });
        d(document).delegate("#auth-captcha-refresh-link", "click", function(a) {
            a.preventDefault();
            e();
            d("#auth-captcha-guess").focus()
        });
        return {
            handleSuccess: b,
            refresh: e
        }
    });
    "use strict";
    f.when("A", "ready").execute(function(a) {
        var b = a.$("#auth-external-javascript").data("external-javascripts");
        b && b.length && a.each(b, function(a) {
            f.load.js(a, function(a) {
                a.target.setAttribute("crossorigin",
                    "anonymous")
            })
        })
    });
    "use strict";
    f.when("A", "ready").register("auth-login-autofill", function(a) {
        function b(a) {
            var b = a.data("claim");
            a.val() !== b && a.val(b)
        }

        function e(a, b) {
            a = d(a);
            a.change(function() {
                b(d(this))
            });
            b(a)
        }
        var d = a.$;
        e("#ap-credential-autofill-hint", b);
        return {
            monitorForChanges: e,
            restoreClaimValue: b
        }
    });
    "use strict";
    f.when("A", "auth-validate-form-common", "a-form-controls-api", "client-side-counters-util", "page-util", "ready").register("auth-moa", function(a, b, e, d, c) {
        var k = a.$,
            h = k("#ap_phone_number"),
            f = k("#ap_email");
        k("#ap_use_mobile, #ap_use_email").click(function(a) {
            k(".ap_email_fields,.ap_mobile_number_fields").toggle();
            k("#auth-country-picker, #ap_email, #ap_phone_number").prop("disabled", function(a, b) {
                return !b
            });
            k("#auth-country-picker-container").toggleClass("a-button-disabled");
            c.isMobile() ? k("#ap_email, #ap_phone_number").parent(".a-input-text-wrapper").toggleClass("a-form-disabled") : k("#ap_email, #ap_phone_number").toggleClass("a-form-disabled");
            return !1
        });
        k("#ap_use_email").click(function() {
            b.isNonBlankField(h) &&
                b.isValidEmailField(h) && (f.val(h.val()).keyup(), d.incrementCounter("PersistEmailFromPhoneToEmail" + c.determineDeviceType()))
        });
        k("#ap_use_mobile").click(function() {
            b.isNonBlankField(f) && b.isValidPhoneNumberField(f) && (h.val(f.val()).keyup(), d.incrementCounter("PersistPhoneFromEmailToPhone" + c.determineDeviceType()))
        })
    });
    "use strict";
    f.when("A").execute(function(a) {
        function b(b) {
            var c = a.state("moa_registration_v2_info");
            c && c.enabled && a.get("/ap/nocontent/ref\x3d" + b + "_" + c.device, {})
        }
        var e = a.$;
        e("#ap_use_email").click(function() {
            b("ap_mmoar_usee")
        });
        e("#ap_use_mobile").click(function() {
            b("ap_mmoar_usem")
        });
        e("#auth-country-picker-container").click(function() {
            b("ap_mmoar_ccp")
        });
        e("#continue").click(function() {
            b("ap_mmoar_cont")
        });
        a.on("a:popover:show:verifyContinueModal", function() {
            b("ap_mmoar_vm_o")
        });
        a.on("a:popover:hide:verifyContinueModal", function() {
            b("ap_mmoar_vm_c")
        });
        e("#auth-verification-ok-announce").click(function() {
            b("ap_mmoar_vm_ok")
        });
        e("#auth-already-have-account").click(function() {
            b("ap_mmoar_signin")
        });
        e("#auth-verify-button").click(function() {
            b("ap_mmoar_pv_verify")
        });
        e("#auth-resend-code-link").click(function() {
            b("ap_mmoar_pv_resend")
        })
    });
    "use strict";
    f.when("A", "moa-single-claim-input-field_handler", "ready").register("moa-single-claim-input-field", function(a, b) {
        var e = a.$;
        e("#ap_email");
        a.declarative("single_claim_handler", "focusout keyup", b.inputHandler);
        a.declarative("show-countries", "click", b.showCountries);
        a.on("a:dropdown:auth-country-picker:select", b.updateCountryDisplayText)
    });
    "use strict";
    f.when("A", "auth-validate-form-common", "client-side-counters-util",
        "mobile-claim-disclosure-util").register("moa-single-claim-input-common", function(a, b, e, d) {
        function c(a) {
            return b.isNonBlankField(a) ? b.isValidPhoneNumberField(a) ? h.PHONE : h.EMAIL : h.UNKNOWN
        }
        var k = a.$,
            h = {
                PHONE: "PHONE",
                EMAIL: "EMAIL",
                UNKNOWN: "UNKNOWN"
            };
        Object.freeze(h);
        var f = {};
        f[h.PHONE] = "phone-text";
        f[h.EMAIL] = "email-text";
        f[h.UNKNOWN] = "default-text";
        Object.freeze(f);
        var g = {};
        g[h.PHONE] = "SingleClaimFieldPhone";
        g[h.EMAIL] = "SingleClaimFieldEmail";
        Object.freeze(g);
        var l = {
            REGISTER: "registerPage",
            SIGNIN: "signInPage"
        };
        Object.freeze(l);
        var r = d.DisclosureType;
        k.fn.auiShow = function() {
            k(this).removeClass("a-hidden aok-hidden").show();
            return this
        };
        k.fn.auiHide = function() {
            k(this).addClass("aok-hidden").hide();
            return this
        };
        return {
            showPasswordInformationMessage: function(a) {
                a = a && a.$currentTarget || k(a.target);
                a.closest(".a-row").parent().find(".auth-inlined-error-message").is(":visible") || a.closest(".a-row").parent().find("#passwordInformationMessage").auiShow()
            },
            hidePasswordInformationMessage: function(b) {
                var c = b && b.$currentTarget ||
                    k(b.target);
                c.closest(".a-row").parent().find("#passwordInformationMessage").auiHide();
                b.$event && b.$event.relatedTarget && "submit" === b.$event.relatedTarget.type && a.delay(function() {
                    c.closest("form").submit()
                })
            },
            incrementCounterForSelectedClaim: function(a) {
                a = c(a);
                e.incrementCounter(e.getCounterNameWithDeviceAndPageType(g[a]))
            },
            incrementCounterForPlusSymbolAtStartOfClaim: function() {
                e.incrementCounter(e.getCounterNameWithDeviceAndPageType("PlusSymbolAtStartOfClaim"))
            },
            incrementCounterForToggleCountryPicker: function(a) {
                e.incrementCounter(e.getCounterNameWithDeviceAndPageType(a ?
                    "CountryPickerEnabled" : "CountryPickerDisabled"))
            },
            getClaimType: c,
            getDisclosureType: function(a, b) {
                a = a.val() && a.val().trim() || "";
                if (a.startsWith("+")) return d.getDisclosureTypeByPhoneNumber(a);
                b = (b() || "").trim();
                return d.getDisclosureTypeByCountryCode(b)
            },
            ClaimType: h,
            PageType: l,
            DisclosureType: r,
            ButtonTextToClass: f,
            isValidEmail: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            invalidPhoneRegex: /^ *\+|[a-zA-Z]|@/
        }
    });
    "use strict";
    f.when("A", "auth-validate-form-common", "client-side-counters-util",
        "moa-single-claim-input-common", "a-dropdown").register("moa-single-claim-input-field_handler", function(a, b, e, d, c) {
        function k(a) {
            m("#auth-continue .a-button-text span").auiHide();
            m("#auth-continue ." + a).auiShow()
        }

        function h(a) {
            var b = a.closest(".a-section").find(".country-picker");
            if (b && l(a)) {
                var c = b.outerWidth();
                m.withoutRtl(function() {
                    a.css({
                        "padding-left": c + "px"
                    })
                })
            } else m.withoutRtl(function() {
                a.css({
                    "padding-left": ""
                })
            })
        }

        function f(a, b) {
            a = a.closest(".moa-single-claim-container").find("select").attr("id");
            c.getSelect(a).update({
                status: b
            })
        }

        function g(a) {
            l(a) && (f(a, "disabled"), a.closest(".a-section").find(".country-picker").auiHide(), h(a), d.incrementCounterForToggleCountryPicker(!1))
        }

        function l(a) {
            return a.closest(".a-section").find(".country-picker").is(":visible")
        }

        function r(a) {
            d.getDisclosureType(a, function() {
                    return m("select#auth-country-picker").val()
                }) === d.DisclosureType.RIGID ? (a.closest(".a-box").find("#mobileClaimDisclosureMessage").auiShow(), a.closest(".a-box").find("#mobileClaimDisclosureMessageRelaxed").auiHide()) :
                (a.closest(".a-box").find("#mobileClaimDisclosureMessageRelaxed").auiShow(), a.closest(".a-box").find("#mobileClaimDisclosureMessage").auiHide())
        }

        function q(a) {
            0 >= a.size() || (d.getClaimType(a) === d.ClaimType.PHONE ? r(a) : (a.closest(".a-box").find("#mobileClaimDisclosureMessage").auiHide(), a.closest(".a-box").find("#mobileClaimDisclosureMessageRelaxed").auiHide()))
        }
        var m = a.$;
        return {
            inputHandler: function(a) {
                var b = a.$currentTarget.find("input");
                if ("focusout" === a.type) {
                    var c = a.$currentTarget.find("input");
                    if (!(0 >= c.size())) switch (d.getClaimType(c)) {
                        case d.ClaimType.PHONE:
                            k(d.ButtonTextToClass.PHONE);
                            break;
                        case d.ClaimType.EMAIL:
                            k(d.ButtonTextToClass.EMAIL);
                            break;
                        default:
                            k(d.ButtonTextToClass.UNKNOWN)
                    }
                    q(b)
                }
                if ("focusout" === a.type || "keyup" === a.type) b = a.$target, c = b.val() && b.val().trim() || "", a = a.$event.which, 16 <= a && 46 > a || (d.getClaimType(b) !== d.ClaimType.PHONE || c.startsWith("+") ? c.startsWith("+") ? (g(b), d.incrementCounterForPlusSymbolAtStartOfClaim()) : g(b) : l(b) || (f(b, "enabled"), b.closest(".a-section").find(".country-picker").auiShow(),
                    h(b), d.incrementCounterForToggleCountryPicker(!0)))
            },
            showCountries: function(a) {
                a.$currentTarget.closest(".moa-single-claim-container").find(".moa-country-picker-select-container .a-declarative").click()
            },
            updateCountryDisplayText: function(a) {
                var b = m(a.selectNode),
                    c = b.closest(".moa-single-claim-container").find(".country-picker"),
                    b = b.closest(".moa-single-claim-container").find("input[name\x3demail]");
                a = a.nativeItemNode.text;
                c.find(".a-declarative").text(a);
                h(b);
                q(b)
            }
        }
    });
    "use strict";
    f.when("A").register("mobile-claim-disclosure-util",
        function(a) {
            var b = a.$,
                e = {
                    RIGID: "RIGID",
                    RELAXED: "RELAXED"
                };
            Object.freeze(e);
            var d = ["+1", "+33"],
                c = ["US", "CA", "FR"];
            Object.freeze(d);
            Object.freeze(c);
            return {
                DisclosureType: e,
                getDisclosureTypeByCountryCode: function(a) {
                    for (var b = 0; b < c.length; b++)
                        if (c[b] === a.toUpperCase()) return e.RIGID;
                    return e.RELAXED
                },
                getDisclosureTypeByPhoneNumber: function(a) {
                    for (var b = 0; b < d.length; b++)
                        if (a.startsWith(d[b])) return e.RIGID;
                    return e.RELAXED
                },
                showMobileClaimDisclosureMessage: function(a) {
                    b(a).removeClass("a-hidden aok-hidden").show();
                    return this
                },
                hideMobileClaimDisclosureMessage: function(a) {
                    b(a).addClass("aok-hidden").hide();
                    return this
                }
            }
        });
    "use strict";
    f.when("A").register("page-util", function(a) {
        function b(a) {
            a.jquery || c(a);
            return e(c("form:visible").attr("name"))
        }

        function e(a) {
            if (a) return a.replace(/(?:-| |\b)(\w)/g, function(a, b) {
                return b.toUpperCase()
            })
        }

        function d() {
            return a.capabilities.mobile
        }
        var c = a.$;
        return {
            getFormName: b,
            toCamelCase: e,
            determinePageType: function() {
                for (var a = {
                        SignIn: "SignInPage",
                        Register: "RegistrationPage",
                        ForgotPassword: "Fpp"
                    }, c = document.getElementsByTagName("form"), d = 0; d < c.length; d++) {
                    var e = b(c[d]);
                    if (e in a) return a[e]
                }
            },
            determineDeviceType: function() {
                return d() ? "OnMobile" : "OnDesktop"
            },
            isMobile: d
        }
    });
    "use strict";
    f.when("A", "ready").execute("password-encryption-setup", function(a) {
        var b = a.state("sif-encryption-profile");
        b && f.when("auth-validate-form-handler", "siege-cse:profile:" + b.sifProfile).execute("password-encryption", function(e, d) {
            function c(c) {
                function e(b) {
                    a.$(c).unbind(".encryption").submit()
                }
                try {
                    var f = d.createFormHandler(c);
                    f.configure({
                        formProfile: b.sifProfile,
                        encryptionContext: {}
                    });
                    var g = a.$(c).find("input[name\x3d'password']").val().length;
                    f.generateProcessedForm({}).then(function(b) {
                        var c = a.$(b).find("input[name\x3d'password']").val().length;
                        g === c && (c = document.createElement("INPUT"), c.setAttribute("type", "hidden"), c.setAttribute("name", "passwordNotEncrypted"), b.appendChild(c));
                        a.$(b).find("input[name\x3d'password']").get(0).name = "encryptedPwd";
                        b.submit()
                    }).catch(e)
                } catch (l) {
                    e(l)
                }
            }
            a.$("input[name\x3d'password']").closest("form").not("#ap_register_form").bind("submit.encryption", function(a) {
                a.preventDefault();
                e.validate(this) && c(this)
            })
        })
    });
    "use strict";
    f.when("A", "client-side-counters-util", "page-util").register("passwordless-auth", function(a, b, e) {
        var d = a.$,
            c = a.state("login-with-otp-state"),
            k = d("#ap_login_form #continue");
        l.loginWithOTPState = c !== x ? c.isLoginWithOTPEnabled : !1;
        d("#auth-skip-reset-password-link").click(function() {
            a.get("/ap/nocontent/ref\x3dap_fpp_skip_on_reset_pwd", {});
            b.incrementCounter("SkipResetPasswordOnResetPage" + e.determineDeviceType())
        });
        a.on("credentialsEntered", function() {
            !0 === l.loginWithOTPState && (b.incrementCounter("SharedWebCredentialsSubmitted"), k.click())
        })
    });
    "use strict";
    f.when("A", "mobile-claim-disclosure-util", "ready").register("phone-number-field", function(a, b) {
        function e(a) {
            b.getDisclosureTypeByCountryCode(a) === b.DisclosureType.RELAXED ? (b.hideMobileClaimDisclosureMessage("#mobileClaimDisclosureMessage"), b.showMobileClaimDisclosureMessage("#mobileClaimDisclosureMessageRelaxed")) :
                (b.showMobileClaimDisclosureMessage("#mobileClaimDisclosureMessage"), b.hideMobileClaimDisclosureMessage("#mobileClaimDisclosureMessageRelaxed"))
        }

        function d(a) {
            a = c("select#auth-country-picker").val() || "";
            e(a)
        }
        var c = a.$;
        (function() {
            if (0 < c("#ap-account-fixup-phone-non-editable-text").length && 0 < c("#mobileClaimDisclosureMessage").length && 0 < c("#mobileClaimDisclosureMessageRelaxed").length) {
                var f = c("#ap-account-fixup-phone-non-editable-text").val();
                b.getDisclosureTypeByPhoneNumber(f) === b.DisclosureType.RELAXED ?
                    (b.hideMobileClaimDisclosureMessage("#mobileClaimDisclosureMessage"), b.showMobileClaimDisclosureMessage("#mobileClaimDisclosureMessageRelaxed")) : (b.showMobileClaimDisclosureMessage("#mobileClaimDisclosureMessage"), b.hideMobileClaimDisclosureMessage("#mobileClaimDisclosureMessageRelaxed"))
            }(0 < c("#ap_phone_number").length || 0 < c("#account-fixup-phone-number").length) && 0 < c("select#auth-country-picker").length && 0 < c("#mobileClaimDisclosureMessage").length && 0 < c("#mobileClaimDisclosureMessageRelaxed").length &&
                (f = c("select#auth-country-picker").val(), e(f), a.on("a:dropdown:auth-country-picker:select", d))
        })()
    });
    "use strict";
    f.when("A", "a-modal", "auth-validate-form-handler", "ready").register("auth-phone-verification-modal", function(a, b, e) {
        function d() {
            var a = l.val();
            q.text(a);
            var b = h.find("option:selected"),
                a = b.data("calling-code"),
                b = b.data("country-code");
            z.text(a);
            r.text(b)
        }
        var c = a.$,
            f = a.state("auth-phone-verification-modal");
        if (f) {
            var h = c("#auth-country-picker"),
                l = c("#ap_phone_number"),
                g = c("#" + f.formIdToBindTo),
                z = c("#auth-verify-mobile-calling-code"),
                r = c("#auth-verify-mobile-country-code"),
                q = c("#auth-verify-mobile-national-number");
            a.on("a:popover:beforeShow:verifyContinueModal", d);
            c(".auth-requires-verify-modal").click(function(a) {
                a.preventDefault();
                e.validate(g) && (a = c("#auth-verify-modal-action"), (a = b.get(a)) && l.is(":enabled") ? a.show() : g.submit())
            });
            a.declarative("auth-verify-modal-complete", "click", function() {
                g.submit()
            });
            return {
                updateVerificationModalContents: d
            }
        }
    });
    "use strict";
    f.when("A").register("auth-phone-verification-spinner",
        function(a) {
            a = a.$;
            var b = a("#auth-contact-verification-spinner-hidden-code-form-wrapper #auth-pv-form");
            0 < b.length && (l.submitVerificationCode = function(a) {
                b.find("#auth-pv-enter-code").val(a);
                b.find("#auth-verify-button").click()
            })
        });
    "use strict";
    f.when("A", "ready").register("phone_verification_called_within_one_minute", function(a) {
        function b() {
            e.removeClass("resend-link-disabled");
            d.hide();
            f.show();
            h.html(h.text().replaceAll('"', ""))
        }
        a = a.$;
        var e = a("#auth-resend-code-link"),
            d = a("#calledWithinOneMinuteAlert"),
            c = a("#calledWithinOneMinuteText"),
            f = a("#calledWithinOneMinuteReadyForResend"),
            h = a("#calledWithinOneMinuteReadyForResendText"),
            l = "";
        return {
            showErrorMessage: function() {
                f.hide();
                if ("" === l) {
                    var a = c.text().split(" +timeleft+ ");
                    l = a[0].split('"').join("") + "60" + a[1].split('"').join("")
                }
                d.show();
                c.html(l);
                e.addClass("resend-link-disabled");
                setTimeout(b, 6E4)
            }
        }
    });
    "use strict";
    f.when("A", "client-side-counters-util", "a-checkbox", "ready").register("auth-remember-me", function(a, b, e) {
        function d(a) {
            a.val() !== h ? (e(l).isChecked() &&
                b.incrementCounter(b.getCounterNameWithDeviceAndPageType("UncheckRMCheckboxForUnrecognizedEmail")), e(l).uncheck()) : "" !== a.val() && (e(l).check(), b.incrementCounter(b.getCounterNameWithDeviceAndPageType("BackToCheckedRMCheckboxForRecognizedEmail")))
        }
        a = a.$;
        var c = a("#ap_email, #ap-credential-autofill-hint"),
            f = a("#ap_email_icon"),
            h = c.val(),
            l = a("input[name\x3drememberMe]");
        c.bind("keyup.uncheckRememberMe", function() {
            "" !== h && d(c)
        });
        f.click(function() {
            d(c)
        })
    });
    "use strict";
    f.when("A", "client-side-counters-util",
        "page-util", "ready").register("auth-remove-mobile-claim", function(a, b, e) {
        a = a.$;
        var d = a("#auth-remove-phone-claim");
        a("#ap-remove-mobile-claim-submit-button").click(function() {
            d.submit();
            b.incrementCounter("RemoveMobileClaimSubmitAttempt" + e.determineDeviceType())
        })
    });
    "use strict";
    f.when("A", "ready").register("auth-text-captcha", function(a) {
        a = a.$;
        a("#auth-captcha-guess").attr("autocapitalize", "off");
        a("#auth-captcha-guess").attr("autocorrect", "off")
    });
    "use strict";
    f.when("A", "auth-validate-form-handler",
        "ready").register("auth-validate-form-moa", function(a, b) {
        a = a.$;
        a(document.body).delegate(".auth-validate-form-moa", "submit", function(a) {
            b.validate(this) || a.preventDefault()
        })
    });
    f.when("A", "auth-validate-form-handler", "auth-validate-form-common", "client-side-counters-util", "page-util", "AuthToolkit", "ready").register("auth-validate-form", function(a, b, e, d, c, f) {
        var h = a.$;
        h(document.body).delegate(".auth-validate-form", "submit", function(a) {
            d.incrementCounter(c.getFormName(this) + "Submit" + e.determineDeviceType());
            if (!b.validate(this)) {
                var g = h(this).find("span.auth-disable-button-on-submit.a-button-disabled");
                typeof g !== x && 0 < g.length && f.enableButton(g);
                a.preventDefault()
            }
        })
    });
    "use strict";
    f.when("A", "page-util", "a-text-input", "ready").register("auth-validate-form-common", function(a, b, e) {
        function d(a) {
            return x.test(a.trim())
        }

        function c(a) {
            return B.test(a.trim())
        }

        function f(a) {
            a = a.val();
            return d(a)
        }

        function h(a) {
            a = a.val();
            return c(a)
        }

        function l(a) {
            a = a.val();
            return d(a) || c(a)
        }

        function g(a) {
            return 6 <= a.val().length
        }

        function z(a) {
            return "password" === a.attr("type") ? r(a) : q(a)
        }

        function r(a) {
            return !!a.val()
        }

        function q(a) {
            return !!a.val().trim()
        }

        function m(a) {
            return a.data("validation-id") || a.parent().data("validation-id") || a[0].name
        }

        function w(a) {
            (new e(a)).setState("error")
        }

        function t(a) {
            (new e(a)).setState("normal")
        }
        var v = a.$,
            x = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            B = /^\+?[()\s.0-9-]*\d[()\s.0-9-]*$/,
            p = {
                "auth-required-field": "-missing-alert",
                "auth-require-email-validaton": "-invalid-email-alert",
                "auth-require-phone-validation": "-invalid-phone-alert",
                "auth-require-claim-validation": "-invalid-claim-alert",
                "auth-require-password-validation": "-invalid-password-alert",
                "auth-require-fields-match": "-mismatch-alert"
            },
            y = {
                "auth-required-field": z,
                "auth-require-email-validaton": f,
                "auth-require-phone-validation": h,
                "auth-require-claim-validation": l,
                "auth-require-password-validation": g
            };
        return {
            isMatchingFields: function(a) {
                var b = a.eq(0);
                a = a.eq(1);
                b = b.val().trim();
                a = a.val().trim();
                return b === a
            },
            isValidEmailField: f,
            isValidPhoneNumberField: h,
            isValidClaimField: l,
            isValidEmail: d,
            isValidPhoneNumber: c,
            isValidPasswordField: g,
            isValidRequiredField: z,
            isNonEmptyField: r,
            isNonBlankField: q,
            isCheckedField: function(a) {
                return a.is(":checked")
            },
            displayErrorMessage: function(a, b) {
                var c = m(a);
                b = v("#auth-" + c + b);
                w(a);
                b.show()
            },
            hideErrorMessage: function(a, b) {
                var c = m(a);
                b = v("#auth-" + c + b);
                t(a);
                b.hide()
            },
            isErrorVisible: function(a, b) {
                a = m(a);
                return v("#auth-" + a + b).is(":visible")
            },
            getValidationId: m,
            setTextInputStateError: w,
            setTextInputStateNormal: t,
            determineDeviceType: function() {
                return b.isMobile() ? "OnMobile" : "OnDesktop"
            },
            getErrorAlertExtension: function(a) {
                return p[a]
            },
            getValidateCallback: function(a) {
                return y[a]
            },
            getErrorTypeClasses: function() {
                return Object.keys(y)
            },
            getVisibleInputsSelector: function() {
                return "input[type!\x3dhidden]:enabled"
            },
            getSelectorForInputsOfErrorTypeClass: function(a) {
                if (a) return a += ":visible", "input:enabled." + a + ", ." + a + " input:enabled"
            }
        }
    });
    "use strict";
    f.when("A", "auth-validate-form-common", "client-side-counters-util",
        "page-util", "a-text-input", "ready").register("auth-validate-form-handler", function(a, b, e, d, c) {
        function f(a, c, g, h) {
            var k = b.getValidationId(c);
            k && (u || (u = {}), u[k] || (u[k] = []), u[k].push({
                $field: c,
                type: g,
                extension: h
            }), h && e.incrementCounter(d.getFormName(a) + d.toCamelCase(k + h) + b.determineDeviceType()))
        }

        function h(a) {
            a.find(".auth-require-fields-match-group").each(function() {
                var c = p(this).find(b.getSelectorForInputsOfErrorTypeClass("auth-require-fields-match"));
                1 < c.length && b.isValidRequiredField(c.eq(0)) &&
                    b.isValidRequiredField(c.eq(1)) && !b.isMatchingFields(c) && (f(a, c.eq(0), "Check Mismatch", "-mismatch-alert"), f(a, c.eq(1), "Check Mismatch"))
            })
        }

        function l(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-require-email-validaton")).each(function() {
                var c = p(this);
                b.isNonBlankField(c) && !b.isValidEmailField(c) && f(a, c, "Invalid Email", "-invalid-email-alert")
            })
        }

        function g(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-require-claim-validation")).each(function() {
                var c = p(this);
                b.isNonBlankField(c) &&
                    !b.isValidClaimField(c) && f(a, c, "Invalid Claim", "-invalid-claim-alert")
            })
        }

        function z(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-require-phone-validation")).each(function() {
                var c = p(this);
                b.isNonBlankField(c) && !b.isValidPhoneNumberField(c) && f(a, c, "Invalid Phone", "-invalid-phone-alert")
            })
        }

        function r(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-require-password-validation")).each(function() {
                var c = p(this);
                b.isNonEmptyField(c) && !b.isValidPasswordField(c) && f(a, c, "Invalid Password", "-invalid-password-alert")
            })
        }

        function q(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-required-field")).each(function() {
                var c = p(this),
                    d = this.name;
                b.isValidRequiredField(c) || y.test(d) && u && u[d.split("Check")[0]] || f(a, c, "Missing Required", "-missing-alert")
            })
        }

        function m(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-required-checked-field")).each(function() {
                var c = p(this);
                b.isCheckedField(c) || f(a, c, "Legal Agreement Unchecked", "-unchecked-alert")
            })
        }

        function w(a) {
            a.find(b.getSelectorForInputsOfErrorTypeClass("auth-required-field")).each(function() {
                var c =
                    p(this);
                "legalAgreementCheckBox" !== this.name || b.isCheckedField(c) || f(a, c, "Registration Legal Agreement Unchecked", "-unchecked-alert")
            })
        }

        function t(c) {
            var e = p("#auth-alert-window");
            v(p("form")).each(function() {
                b.setTextInputStateNormal(p(this))
            });
            p(".auth-error-messages li, .auth-inlined-error-message, .auth-inlined-information-message, .auth-server-side-message-box").hide();
            u ? (a.each(u, function(c, d) {
                a.each(c, function(a) {
                    var c = a.extension;
                    b.setTextInputStateError(a.$field);
                    c && (a = "#auth-" + d + c, c = p(a +
                        A), c.length ? c.show() : p(a).show())
                })
            }), p("#message-box-slot").hide(), e.show(), d.isMobile() || v(c).first().focus()) : e.hide()
        }

        function v(a) {
            return a.find(b.getVisibleInputsSelector()).filter(function() {
                return (new c(p(this))).isError()
            })
        }

        function x(a) {
            return "string" !== typeof a || 0 === a.length ? "" : Array.prototype.map.call(a, function(a) {
                var b = a.charCodeAt(0);
                return 65280 <= b && 65519 >= b ? String.fromCharCode(b - 65248) : 12288 === b ? String.fromCharCode(32) : a
            }).join("")
        }

        function B(a) {
            a.find("input[name\x3demail], input[name\x3dcustomerName], input[name\x3dcustomerNamePronunciation], input[name\x3demailLogin], input[name\x3dguess]").each(function() {
                if ("" !==
                    p(this).val()) {
                    var a = x(p(this).val());
                    p(this).val() !== a && (p(this).val(a), e.incrementCounter(e.getCounterNameWithDeviceAndPageType("SingleClaimFieldFullWidthRemoval")))
                }
            })
        }
        var p = a.$,
            y = /Check$/g,
            A = "",
            u;
        return {
            validate: function(a) {
                a = a && a.jquery ? a : p(a);
                if (a.length && a.is("form")) {
                    A = a.hasClass("ap_ango_phone") ? "-ango-phone" : a.hasClass("ap_ango_email") ? "-ango-email" : "";
                    B(a);
                    q(a);
                    g(a);
                    l(a);
                    z(a);
                    r(a);
                    h(a);
                    m(a);
                    u && e.incrementCounter(d.getFormName(a) + "PreventedServerRoundTrips" + b.determineDeviceType());
                    t(a);
                    var c = !u;
                    a.data("auth-validation-errors", u);
                    u = void 0;
                    return c
                }
            },
            validateLegalCheckedForThirdParty: function(a) {
                a = a && a.jquery ? a : p(a);
                if (a.length && a.is("form")) {
                    document.getElementsByName("signin-legal-agreement-checkbox") && m(a);
                    document.getElementsByName("legalAgreementCheckBox") && w(a);
                    t(a);
                    var b = !u;
                    a.data("auth-validation-errors", u);
                    u = void 0;
                    return b
                }
            },
            getErrors: function(a) {
                return (a.jquery ? a : p(a)).data("auth-validation-errors")
            }
        }
    });
    "use strict";
    f.when("A", "auth-validate-form-common", "ready").register("auth-validate-form-real-time",
        function(a, b) {
            function e(a, c, d) {
                b.isErrorVisible(a, b.getErrorAlertExtension(c)) && d(a) && b.hideErrorMessage(a, b.getErrorAlertExtension(c))
            }

            function d(a, c) {
                if (a.hasClass("auth-require-fields-match") && (a = a.closest(".auth-require-fields-match-group"), a !== f && (a = a.find(b.getSelectorForInputsOfErrorTypeClass("auth-require-fields-match")), 2 === a.length))) {
                    var d = a.eq(0),
                        e = a.eq(1);
                    b.isErrorVisible(d, b.getErrorAlertExtension("auth-require-fields-match")) && c(a) && (b.hideErrorMessage(d, b.getErrorAlertExtension("auth-require-fields-match")),
                        b.setTextInputStateNormal(e))
                }
            }
            var c = a.$,
                f;
            c(".auth-real-time-validation input").bind("keyup.clearValidationErrors", function() {
                var a = c(this);
                e(a, "auth-required-field", b.isNonEmptyField);
                e(a, "auth-require-email-validaton", b.isValidEmailField);
                e(a, "auth-require-phone-validation", b.isValidPhoneNumberField);
                e(a, "auth-require-claim-validation", b.isValidClaimField);
                e(a, "auth-require-password-validation", b.isValidPasswordField);
                d(a, b.isMatchingFields)
            });
            return {
                clearErrorMessageOnMatchingInputs: d
            }
        });
    "use strict";
    f.when("A", "jQuery", "ready").register("wechat-wxlogin-js", function(a, b) {
        0 < b("#auth-wechat-login-container").length && (a = b("#auth-wechat-login-container").data("wechatUrl"), f.load.js(a))
    });
    f.when("A", "jQuery", "client-side-counters-util", "wechat-login-button-counter", "wechat-wxlogin-js", "ready").register("wechat-qrcode-module", function(a, b, e, d) {
        if (0 < b("#auth-wechat-login-container").length) {
            var c = function() {
                    var a = b("div#auth-interactive-dialog-content"),
                        c = b("div#auth-wechat-qrcode-loading-container").clone();
                    c.removeClass("hidden");
                    c.appendTo(a);
                    b("div#auth-interactive-dialog").css("display", "table");
                    var d = b("#auth-wechat-login-container"),
                        a = d.data("appid"),
                        c = d.data("scope"),
                        e = d.data("redirectUrl"),
                        f = d.data("state"),
                        d = d.data("style");
                    new l.WxLogin({
                        id: "auth-wechat-qrcode-container",
                        appid: a,
                        scope: c,
                        redirect_uri: e,
                        state: f,
                        style: d
                    })
                },
                f = function() {
                    var a = b("div#auth-interactive-dialog-content");
                    b("div#auth-interactive-dialog").css("display", "none");
                    a.empty()
                };
            b("div#auth-interactive-dialog-content").click(function(a) {
                a.stopImmediatePropagation()
            });
            b("#auth-wechat-login-container").click(function() {
                e.incrementCounter(d.weChatButtonClickEventCounterName);
                c()
            });
            b("div#auth-interactive-dialog-container").click(function() {
                f()
            });
            return {
                showWeChatQRCode: c,
                hideWeChatQRCode: f
            }
        }
    });
    f.when("A", "client-side-counters-util", "counters-name", "ready").register("wechat-login-button-counter", function(a, b, e) {
        var d = e.getCommonCounterNamePrefix() + ":WeChat";
        e = a.$("#auth-wechat-login-container-noninteractive");
        0 < e.length && e.click(function() {
            b.incrementCounter(d)
        });
        a = a.$("#signInSubmit.wechat_button");
        0 < a.length && a.click(function() {
            b.incrementCounter(d)
        });
        return {
            weChatButtonClickEventCounterName: d
        }
    });
    f.when("A", "auth-validate-form-handler", "ready").register("wechat-legal-checkbox-validation", function(a, b) {
        function e(a) {
            a = document.getElementsByClassName(a);
            document.getElementById("weChatAuthenticationUri") && b.validateLegalCheckedForThirdParty(a) && (l.location.href = document.getElementById("weChatAuthenticationUri").value)
        }
        var d = a.$("#signInSubmit.wechat_button");
        0 < d.length ? d.click(function() {
            e("auth-validate-form")
        }) : (a = a.$("#auth-wechat-login-container-noninteractive.wechat_button"), 0 < a.length && a.click(function() {
            0 < document.getElementsByClassName("auth-validate-form").length ? e("auth-validate-form") : 0 < document.getElementsByClassName("auth-validate-form-moa").length && e("auth-validate-form-moa")
        }))
    })
});
/* ******** */