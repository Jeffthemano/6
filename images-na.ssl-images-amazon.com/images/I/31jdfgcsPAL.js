(function(d) {
    var q = window.AmazonUIPageJS || window.P,
        n = q._namespace || q.attributeErrors,
        a = n ? n("AmazonUIFormControlsJS", "AmazonUI") : q;
    a.guardFatal ? a.guardFatal(d)(a, window) : a.execute(function() {
        d(a, window)
    })
})(function(d, q, n) {
    d.register("prv:a-form-states", function() {
        function a(a) {
            return function(b) {
                b.removeClass(a)
            }
        }

        function c(a) {
            return function(b) {
                b.addClass(a)
            }
        }

        function b(a) {
            return function(b) {
                return b.hasClass(a)
            }
        }
        return {
            disabled: {
                cssClass: "a-form-disabled",
                disabled: !0,
                enterState: function(a) {
                    a.addClass(this.cssClass);
                    a.prop("disabled", this.disabled)
                },
                exitState: function(a) {
                    a.removeClass(this.cssClass);
                    a.prop("disabled", !this.disabled)
                },
                match: function(a) {
                    return a.hasClass(this.cssClass) && a.prop("disabled")
                }
            },
            error: {
                enterState: c("a-form-error"),
                exitState: a("a-form-error"),
                match: b("a-form-error")
            },
            inactive: {
                enterState: c("a-form-inactive"),
                exitState: a("a-form-inactive"),
                match: b("a-form-inactive")
            },
            selected: {
                enterState: c("a-form-selected"),
                exitState: a("a-form-selected"),
                match: b("a-form-selected")
            },
            normal: {
                enterState: c("a-form-normal"),
                exitState: a("a-form-normal"),
                match: b("a-form-normal")
            }
        }
    });
    "use strict";
    d.when("A").register("prv:a-base-form-control-specs", function(a) {
        var c = a.$;
        return a.createClass({
            matchTag: function(a) {
                return this.tag ? a.is(this.tag) : !0
            },
            matchType: function(b) {
                if (!this.attrs || !this.attrs.type) return !0;
                var c = this.attrs.type;
                return 0 <= a.indexOfArray(a.isArray(c) ? c : [c], b.attr("type"))
            },
            matchCssClass: function(a) {
                return this.attrs && this.attrs.cssClass ? a.hasClass(this.attrs.cssClass) : !0
            },
            isCoreElement: function(a) {
                return this.matchTag(a) &&
                    this.matchType(a) && this.matchCssClass(a)
            },
            getCoreElement: function(a) {
                var b = this;
                return this.isCoreElement(a) ? a : a.find(this.tag).filter(function() {
                    return b.isCoreElement(c(this))
                }).first()
            },
            isVisualElement: function(a) {
                return this.visualElementSelector ? a.is(this.visualElementSelector) : this.isCoreElement(a)
            },
            getVisualElement: function(a) {
                return this.isVisualElement(a) ? a : this.visualElementSelector ? a.closest(this.visualElementSelector) : a
            },
            getWrapperElement: function(a) {
                if (this.wrapperElementSelector) {
                    var b =
                        a.closest(this.wrapperElementSelector);
                    return 0 < b.length ? b : a
                }
                return a
            }
        })
    });
    "use strict";
    d.when("A").register("prv:a-form-util", function(a) {
        var c = 0;
        return {
            setElementId: function(a) {
                if (!a.attr("id")) {
                    var b = "a-form-control-auto-id-" + c++;
                    a.attr("id", b)
                }
            }
        }
    });
    "use strict";
    d.when("A", "a-component", "prv:a-form-util", "prv:a-form-control-interfaces").register("a-form-control", function(a, c, b, k) {
        var e = c.create({
            init: function(a, c) {
                this._super(a, c);
                a = this.specs;
                this._$coreElement = a.getCoreElement(this._$element);
                b.setElementId(this._$coreElement);
                this._$visualElement = a.getVisualElement(this._$coreElement);
                this.isInstanceOf("stateTransitionableControl") && this._resolveFormState();
                this._$wrapperElement = a.getWrapperElement(this._$visualElement)
            },
            getNativeElement: function() {
                return this._$coreElement[0]
            },
            isInstanceOf: function(b) {
                return 0 <= a.indexOfArray(this.specs.interfaces || [], b)
            }
        });
        return {
            create: function(b) {
                b && b.specs || d.error("Form control specs required", "AmazonUIFormControlsJS", "createFormControl");
                a.extend(b,
                    k.resolveControlImplementation(b));
                return e.extend(b)
            }
        }
    });
    "use strict";
    d.when("A", "prv:a-form-states", "a-tooltip", "a-dropdown-select-apis").register("prv:a-form-control-interfaces", function(a, c, b, d) {
        function e(h, b) {
            var w = a.$.extend({}, c, b || {});
            return a.reduce(h || [], function(a, h) {
                w.hasOwnProperty(h) && (a[h] = w[h]);
                return a
            }, {})
        }

        function g(h) {
            return a.reduce(h || [], function(h, b) {
                x.hasOwnProperty(b) && a.extend(h, x[b]);
                return h
            }, {})
        }
        var l = a.$,
            k = function() {
                var h = {};
                a.each([].slice.call(arguments), function(b) {
                    a.mixin(h,
                        b)
                });
                return h
            },
            m = {
                hasClass: function() {
                    return l.fn.hasClass.apply(this._$visualElement, arguments)
                },
                addClass: function() {
                    l.fn.addClass.apply(this._$visualElement, arguments)
                },
                removeClass: function() {
                    l.fn.removeClass.apply(this._$visualElement, arguments)
                },
                prop: function() {
                    var a = l.fn.prop.apply(this._$coreElement, arguments);
                    return a && a.jquery ? n : a
                },
                attr: function() {
                    var a = l.fn.attr.apply(this._$coreElement, arguments);
                    return a && a.jquery ? n : a
                },
                removeAttr: function() {
                    l.fn.removeAttr.apply(this._$coreElement, arguments)
                },
                removeData: function(a) {
                    this._$wrapperElement.removeAttr("data-" + a)
                },
                data: function(a, b) {
                    return (a = this._$wrapperElement.attr("data-" + a, b)) && a.jquery ? n : a
                }
            },
            t = {
                trigger: function(a) {
                    this._$coreElement.trigger(a)
                },
                on: function() {
                    l.fn.bind.apply(this._$coreElement, arguments)
                },
                off: function() {
                    l.fn.unbind.apply(this._$coreElement, arguments)
                }
            },
            y = k(m, t, {
                check: function(a) {
                    this.isChecked() || (this._$coreElement.prop("checked", !0), a || this.trigger("change"))
                },
                uncheck: function(a) {
                    this.isChecked() && (this.prop("checked", !1), a || this.trigger("change"))
                },
                isChecked: function() {
                    return this._$coreElement.is(":checked")
                }
            }),
            u = k(m, {
                setPlaceholder: function(a) {
                    this.attr("placeholder", a)
                }
            }),
            p = k(t, {
                focus: function() {
                    this.trigger("focus")
                }
            }),
            v = k(m, {
                setTooltip: function(h, c, f) {
                    this.removeTooltip();
                    b.create(this._$coreElement, {
                        position: c,
                        activate: f,
                        content: a.escapeHtml(h)
                    });
                    this.attr("title", a.escapeHtml(h))
                },
                removeTooltip: function() {
                    b.remove(this._$coreElement);
                    this.removeAttr("title")
                }
            });
        k = k(m, {
            getState: function() {
                return this._state
            },
            setState: function(a) {
                if (this._applicableStateConfigs.hasOwnProperty(a) && this.getState() !== a) {
                    var b = this._getApplicableStateConfig(this.getState());
                    b && b.exitState(this);
                    this._getApplicableStateConfig(a).enterState(this);
                    this._state = a
                }
            },
            isDisabled: function() {
                return "disabled" === this._state
            },
            isError: function() {
                return "error" === this._state
            },
            _resolveFormState: function() {
                var b = this.specs;
                b = e(b.applicableStates, b.formStates);
                for (var c = a.keys(b), f = "normal", g = 0; g < c.length; g++)
                    if (b[c[g]].match(this)) {
                        f = c[g];
                        break
                    }
                this._state = f;
                this._applicableStateConfigs = b
            },
            _getApplicableStateConfig: function(a) {
                return this._applicableStateConfigs[a]
            }
        });
        var f = {};
        a.mixin(f, d, "getOptions getOption addOptions addOption removeOptions removeOption".split(" "));
        var z = {
                show: function() {
                    this._$wrapperElement.show()
                },
                hide: function() {
                    this._$wrapperElement.hide()
                },
                isHidden: function() {
                    return !this._$wrapperElement.is(":visible")
                },
                val: function(a, b) {
                    if ("undefined" !== typeof a && a !== this._$coreElement.val()) this._$coreElement.val(a), b ||
                        "function" !== typeof this.trigger || this.trigger("change");
                    else return this._$coreElement.val()
                }
            },
            x = {
                domEventTriggerableControl: t,
                domManipulableControl: m,
                checkableControl: y,
                typeableControl: u,
                focusableControl: p,
                declarativeActionControl: {
                    setDeclarativeAction: function(b, c) {
                        a.declarative.create(this._$coreElement, b, c)
                    },
                    removeDeclarativeAction: function(b) {
                        a.declarative.remove(this._$coreElement, b)
                    }
                },
                tooltipableControl: v,
                stateTransitionableControl: k,
                selectableControl: f
            };
        return {
            resolveControlImplementation: function(b) {
                var c =
                    b.specs || {},
                    f = c.mixins || [];
                c = g(c.interfaces || []);
                var e = {};
                f && f.length && a.mixin(c, z, f);
                f = a.filter(a.keys(c), function(a) {
                    return !b.hasOwnProperty(a)
                });
                a.mixin(e, c, f);
                return e
            }
        }
    });
    "use strict";
    d.when("A").register("prv:a-form-control-proxy", function(a) {
        function c(a, b) {
            if ("function" === typeof a[b]) return function() {
                return a[b].apply(a, arguments)
            }
        }

        function b(b, g) {
            var e = a.reduce(b, function(a, b) {
                (b = c(b, g)) && a.push(b);
                return a
            }, []);
            return function() {
                var b = a.copy([].slice.call(arguments));
                return a.each(e, function(a) {
                    return a.apply(null,
                        b)
                })
            }
        }

        function d(a) {
            var b = [],
                c;
            for (c in a) "function" === typeof a[c] && 0 !== c.indexOf("_") && b.push(c);
            return b
        }

        function e(b) {
            return a.reduce(d(b), function(a, g) {
                var e = c(b, g);
                e && (a[g] = e);
                return a
            }, {})
        }

        function g(c) {
            var g = {};
            g.length = c.length;
            var e = a.map(c, function(a) {
                return l(a)
            });
            g.get = function(a) {
                if (e && e.length >= a + 1) return e[a]
            };
            a.each(r, function(b) {
                "function" === typeof a[b] && (g[b] = function() {
                    var c = [].slice.call(arguments);
                    c.unshift(e);
                    return a[b].apply(g, c)
                })
            });
            var k = d(c[0]);
            return a.reduce(k, function(g,
                f) {
                if (0 > a.indexOfArray(m, f)) {
                    var e = b(c, f);
                    e && (g[f] = e)
                }
                return g
            }, g)
        }

        function l(b) {
            return a.isArray(b) && 1 < b.length ? g(b) : e(a.isArray(b) ? b[0] : b)
        }
        var r = ["each", "map", "reduce", "filter"],
            m = ["getState", "isDisabled", "isError", "isHidden", "getNativeElement"];
        return {
            create: l
        }
    });
    "use strict";
    d.when("A", "prv:a-form-control-proxy", "a-text-input", "a-form-radio-button", "a-form-textarea", "a-form-checkbox", "a-form-multiselect").register("a-form", function(a, c, b, k, e, g, l) {
        function r(a, b) {
            a.is("input,select,textarea") ||
                (a = a.find("input,select,textarea").first());
            return b && "function" === typeof b ? b(a) : null
        }

        function m(a) {
            return function(b, c) {
                return u(this, b, c, a)
            }
        }

        function n(b, c) {
            for (var g = a.keys(c || {}), e = 0; e < g.length; e++) {
                var f = g[e],
                    d = c[f];
                f = b.$el.find('[name\x3d"' + a.escapeJquerySelector(f) + '"]');
                f.length && (f.is("select[multiple]") || 1 < f.length && f.is("[type\x3dcheckbox]") || 1 < f.length && f.is("[type\x3dradio]") ? f.val([].concat(d)) : a.isArray(d) && f.length === d.length ? f.val(function(a) {
                    return d[a]
                }) : f.val(d))
            }
        }

        function q(b) {
            b =
                b.$el.serializeArray();
            return a.reduce(b, function(b, c) {
                b.hasOwnProperty(c.name) ? (a.isArray(b[c.name]) || (b[c.name] = [b[c.name]]), b[c.name].push(c.value)) : b[c.name] = c.value;
                return b
            }, {})
        }

        function u(b, g, e, d) {
            var f = b.$el;
            b = p(g, f);
            if (!b || !b.length) return null;
            e ? (e = a.reduce(b, function(b, c) {
                if ((c = r(p(c), d)) && !c.jquery) {
                    var g = c.getNativeElement().name,
                        e = c.specs.tag;
                    b.hasOwnProperty(g) || (e = p(e + ('[name\x3d"' + a.escapeJquerySelector(g) + '"]'), f), b[g] = 1 < e.length ? r(e, d) : c)
                }
                return b
            }, {}), e = a.values(e)) : e = a.map(b,
                function(a) {
                    return r(p(a), d)
                });
            return c.create(e)
        }
        var p = a.$,
            v = a.createClass({
                init: function(b) {
                    b = p(b);
                    b.is("form") ? a.constProp(this, "$el", b) : a.constProp(this, "$el", b.closest("form"));
                    this.$el && this.$el.length || d.error("The selector does not resolve back to a form", "AmazonUIFormControlsJS", "Form")
                },
                getTextInput: m(b),
                getRadioButton: m(k),
                getTextArea: m(e),
                getCheckbox: m(g),
                getMultiSelect: m(l),
                val: function(a) {
                    if (p.isPlainObject(a)) n(this, a);
                    else return q(this)
                },
                reset: function() {
                    this.$el[0].reset()
                }
            });
        return function(a) {
            return new v(a)
        }
    });
    "use strict";
    d.when("A", "prv:a-base-form-control-specs", "prv:a-text-input-specs-overrides").register("prv:a-text-input-specs", function(a, c, b) {
        return new(c.extend(a.extend({
            tag: "input",
            attrs: {
                type: "text color date datetime datetime-local email month number password search tel time url week".split(" ")
            },
            wrapperElementSelector: ".a-input-text-addon-group-wrapper",
            applicableStates: ["normal", "disabled", "error", "inactive", "selected"],
            interfaces: ["stateTransitionableControl", "typeableControl", "focusableControl",
                "tooltipableControl"
            ],
            mixins: ["show", "hide", "isHidden", "val"]
        }, b)))
    });
    "use strict";
    d.declare("prv:a-text-input-specs-overrides", {
        attrs: {
            cssClass: "a-input-text"
        }
    });
    "use strict";
    d.when("A", "a-form-control", "prv:a-text-input-specs").register("a-text-input", function(a, c, b) {
        var d = c.create({
            _componentName: "form_TextInput",
            specs: b,
            init: function(a, b) {
                this._super(a, b)
            }
        });
        return function(a, b) {
            return new d(a, b)
        }
    });
    "use strict";
    d.when("A", "prv:a-base-form-control-specs", "prv:a-form-textarea-specs-overrides").register("prv:a-form-textarea-specs",
        function(a, c, b) {
            return new(c.extend(a.extend({
                tag: "textarea",
                applicableStates: ["normal", "disabled", "error", "inactive", "selected"],
                interfaces: ["stateTransitionableControl", "typeableControl", "focusableControl"],
                wrapperElementSelector: ".a-input-text-wrapper",
                mixins: ["show", "hide", "isHidden", "val"]
            }, b)))
        });
    "use strict";
    d.declare("prv:a-form-textarea-specs-overrides", {});
    "use strict";
    d.when("A", "a-form-control", "prv:a-form-textarea-specs").register("a-form-textarea", function(a, c, b) {
        var d = c.create({
            _componentName: "form_TextArea",
            specs: b,
            init: function(a, b) {
                this._super(a, b)
            }
        });
        return function(a, b) {
            return new d(a, b)
        }
    });
    "use strict";
    d.when("A", "prv:a-base-form-control-specs", "prv:a-form-radio-button-specs-overrides").register("prv:a-form-radio-button-specs", function(a, c, b) {
        return new(c.extend(a.extend({
            tag: "input",
            attrs: {
                type: "radio"
            },
            visualElementSelector: ".a-radio",
            applicableStates: ["normal", "disabled", "error", "inactive", "selected"],
            mixins: ["show", "hide", "isHidden"],
            interfaces: ["checkableControl", "focusableControl", "tooltipableControl",
                "stateTransitionableControl"
            ]
        }, b)))
    });
    "use strict";
    d.declare("prv:a-form-radio-button-specs-overrides", {
        formStates: {
            disabled: {
                enterState: function(a) {
                    a.prop("disabled", !0)
                },
                exitState: function(a) {
                    a.prop("disabled", !1)
                },
                match: function(a) {
                    return a.prop("disabled")
                }
            }
        }
    });
    "use strict";
    d.when("A", "a-form-control", "prv:a-form-radio-button-specs").register("a-form-radio-button", function(a, c, b) {
        var d = c.create({
            _componentName: "form_RadioButton",
            specs: b,
            init: function(a, b) {
                this._super(a, b)
            },
            val: function(a, b) {
                if (a) this._$coreElement.val(1 <
                    this._$coreElement.length ? [a] : a), b || this.trigger("change");
                else return 1 < this._$coreElement.length ? this._$coreElement.filter(":checked").val() : this._$coreElement.val()
            }
        });
        return function(a, b) {
            return new d(a, b)
        }
    });
    "use strict";
    d.when("A", "prv:a-base-form-control-specs", "prv:a-form-checkbox-specs-overrides").register("prv:a-form-checkbox-specs", function(a, c, b) {
        return new(c.extend(a.extend({
            tag: "input",
            attrs: {
                type: "checkbox"
            },
            visualElementSelector: ".a-checkbox",
            applicableStates: ["normal", "disabled",
                "error", "inactive"
            ],
            mixins: ["show", "hide", "isHidden", "val"],
            interfaces: ["checkableControl", "focusableControl", "tooltipableControl", "stateTransitionableControl"]
        }, b)))
    });
    "use strict";
    d.declare("prv:a-form-checkbox-specs-overrides", {
        formStates: {
            disabled: {
                enterState: function(a) {
                    a.prop("disabled", !0)
                },
                exitState: function(a) {
                    a.prop("disabled", !1)
                },
                match: function(a) {
                    return a.prop("disabled")
                }
            }
        }
    });
    "use strict";
    d.when("A", "a-form-control", "prv:a-form-checkbox-specs").register("a-form-checkbox", function(a,
        c, b) {
        var d = c.create({
            _componentName: "form_Checkbox",
            specs: b,
            init: function(a, b) {
                this._super(a, b)
            }
        });
        return function(a, b) {
            return new d(a, b)
        }
    });
    "use strict";
    d.when("A", "prv:a-base-form-control-specs").register("prv:a-form-multiselect-specs", function(a, c) {
        return new(c.extend({
            tag: "select",
            attrs: {
                cssClass: "a-select-multiple"
            },
            formStates: {
                disabled: {
                    enterState: function(a) {
                        a.prop("disabled", !0)
                    },
                    exitState: function(a) {
                        a.prop("disabled", !1)
                    },
                    match: function(a) {
                        return a.prop("disabled")
                    }
                }
            },
            applicableStates: ["normal",
                "disabled"
            ],
            interfaces: ["focusableControl", "selectableControl", "stateTransitionableControl"],
            mixins: ["show", "hide", "isHidden"]
        }))
    });
    "use strict";
    d.when("A", "a-form-control", "prv:a-form-multiselect-specs").register("a-form-multiselect", function(a, c, b) {
        var d = a.constants.NOOP,
            e = c.create({
                _componentName: "form_MultiSelect",
                specs: b,
                init: function(b, c) {
                    this._super(b, c);
                    this.options = {
                        $select: this._$coreElement,
                        $button: a.$([])
                    }
                },
                val: function(b, c) {
                    var d = this._$coreElement,
                        e = d.val();
                    if (b) b = a.isArray(b) ? b : [b],
                        a.equals(e, b) || (d.val(b), c || this.trigger("change"));
                    else return e
                },
                hidePopover: d,
                refreshPopover: d
            });
        return function(a, b) {
            return new e(a, b)
        }
    })
});