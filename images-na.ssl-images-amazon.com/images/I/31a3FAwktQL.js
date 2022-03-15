P.register("cvfVersion", function() {
    return {
        version: "0.1.0.0-2022-01-04"
    }
});
"use strict";
P.when("A", "cvfFormDataGenerator", "ready").register("cvf-account-switcher", function(b, d) {
    function a(a, u) {
        a.preventDefault();
        var c = d.retrieveFormData(a.target),
            k = c.inputData.serializeArray();
        k.push(q(a.target));
        b.ajax(window.location.protocol + "//" + window.location.host + c.requestPath, {
            method: "POST",
            params: k,
            success: u,
            error: h
        })
    }

    function q(a) {
        a = c(a);
        var b = a.attr("name");
        b || (b = a.closest(".cvf-account-switcher-sign-out-link").attr("data-name"));
        var f = a.attr("value");
        f || (f = a.closest(".cvf-account-switcher-sign-out-link").attr("data-value"));
        return {
            name: b,
            value: f
        }
    }

    function h(a, c, f) {
        b.trigger(n.error, f)
    }

    function e(a) {
        var b = /([^@\s]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9._-]+)/ig.exec(a);
        if (null !== b) {
            a = b[1];
            a = c.trim(a);
            var f = a.length;
            if (1 !== f) {
                for (var k = a.charAt(0), e = 0; e < f - 2; e++) k += "*";
                a = k += a.charAt(f - 1)
            }
            a += "@";
            k = b[2];
            k = c.trim(k);
            f = k.length;
            k = k.charAt(0);
            for (e = 0; e < f - 1; e++) k += "*";
            return a + k + b[3]
        }
        b = c.trim(a);
        a = b.length;
        if (!(4 >= a)) {
            f = "";
            for (k = 0; k < a - 4; k++) f += "*";
            b = f + b.substr(a - 4, a - 1)
        }
        return b
    }

    function l() {
        0 === c(".cvf-account-switcher-check-mark:visible").length &&
            (c(".cvf-account-switcher-check-mark-area").remove(), c(".cvf-account-switcher-profile-details").toggleClass("cvf-account-switcher-profile-details cvf-account-switcher-profile-details-after-account-removed"))
    }
    var c = b.$,
        n = {
            success: "cvf:account_switcher:success",
            error: "cvf:account_switcher:error"
        };
    (function() {
        var a = c("#ap-account-switcher-container")[0],
            b = window.MutationObserver || window.WebKitMutationObserver;
        if (void 0 !== a && void 0 !== b) {
            var e = new b(function(a) {
                for (var b = 0; b < a.length; b++)
                    if (null !== a[b].addedNodes) {
                        l();
                        e.disconnect();
                        break
                    }
            });
            e.observe(a, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })
        }
    })();
    (function() {
        c(".cvf-account-switcher-sign-out-link").live("click", function(d) {
            a(d, function(a) {
                if (a.redirectUrl) window.location = a.redirectUrl, b.trigger("cvf:account_switcher", "redirectOnSignOut");
                else if (a.succeeded) {
                    var f = "." + c(d.target).attr("class").match(/cvf-account-switcher-account-group-\w+/g)[0];
                    c(f + "-hide").hide();
                    c(f + "-name").text(c("#cvf-account-switcher-sign-out-replace-text").text());
                    c(f +
                        "-claim").text(e(c(f + "-claim").text()));
                    c(f + "-image").replaceWith(c("\x3cdiv /\x3e").append(c("#cvf-account-switcher-sign-out-replace-image").clone().removeClass("cvf-hidden")).html());
                    c(f + "-button").removeClass("cvf-widget-btn-val cvf-widget-btn-verify-account-switcher");
                    a = a.switchedAccountId;
                    void 0 !== a && c(".cvf-account-switcher-account-group-" + a + "-check-mark").show();
                    l()
                } else b.trigger(n.error, a)
            })
        })
    })()
});
P.register("a-sheet-wrapper", function() {
    return null
});
"use strict";
P.when("A", "cvfFormDataGenerator", "ready").register("cvfCaptcha", function(b, d) {
    b = b.$;
    0 === b(".cvf-widget-input-captcha").children("input").length ? (b(".cvf-widget-input-captcha").attr("autocapitalize", "off"), b(".cvf-widget-input-captcha").attr("autocorrect", "off")) : (b(".cvf-widget-input-captcha").children("input").attr("autocapitalize", "off"), b(".cvf-widget-input-captcha").children("input").attr("autocorrect", "off"))
});
"use strict";
P.when("A").register("cvf-client-side-counters-util", function(b) {
    function d(a, b) {
        var d = window.ue;
        d && "function" === typeof d.count && (b || (b = (d.count(a) || 0) + 1), d.count(a, b))
    }
    return {
        incrementCounter: function(a) {
            d(a)
        },
        insertCounter: d
    }
});
P.when("A", "3p-promise", "a-sheet-wrapper", "a-spinner", "a-alert", "codeResendTimer", "cvf-client-side-counters-util", "sms-retriever-handler", "ready").execute("client-sms-request-controller", function(b, d, a, q, h, e, l, c) {
    function n() {
        var c = a.create({
            name: "auto_verify_bottom_sheet",
            preloadDomId: "codeAutoVerifySheetContent",
            inlineContent: "content",
            closeType: "message",
            closeMessage: r.closeMessage,
            height: 250
        });
        a.showSheet(c);
        l.incrementCounter(t.SHOW_BOTTOM_SHEET);
        var w = u(c);
        b.on("a:sheet:beforeHide:auto_verify_bottom_sheet",
            function() {
                clearTimeout(w);
                var a = m("#cvf-auto-read-status");
                a.val() !== p.SHEET_TIMEOUT && (l.incrementCounter(t.CANCEL_BOTTOM_SHEET), a.val(p.SHEET_CANCELLED))
            })
    }

    function v() {
        var a = q("#cvf-input-spinner");
        a.show();
        l.incrementCounter(t.SHOW_INPUT_SPINNER);
        var b = u(a);
        m("#cvf-input-code")[0].onkeypress = function() {
            clearTimeout(b);
            q("#cvf-input-spinner").hide();
            var a = m("#cvf-auto-read-status");
            a.val() !== p.SPINNER_TIMEOUT && (l.incrementCounter(t.CANCEL_INPUT_SPINNER), a.val(p.SPINNER_CANCELLED))
        }
    }

    function u(b) {
        return setTimeout(function() {
            var c =
                m("#cvf-auto-read-status");
            "auto_verify_bottom_sheet" === b._name ? (a.hideSheet(b), l.incrementCounter(t.BOTTOM_SHEET_TIMEOUT), c.val(p.SHEET_TIMEOUT)) : (m("#cvf-input-code").trigger("keypress"), l.incrementCounter(t.INPUT_SPINNER_TIMEOUT), c.val(p.SPINNER_TIMEOUT));
            h("#auto-verify-failed-alert").show()
        }, 3E4)
    }

    function f(a) {
        y = a;
        a = m("#cvf-auto-read-status");
        "T1" === z ? a.val() !== p.SHEET_TIMEOUT && a.val() !== p.SHEET_CANCELLED && (a = y, m("#cvf-hidden-input-code").val(a), m("#cvf-auto-read-status").val(p.SHEET_SUCCESS),
            w.submit()) : "T2" === z && a.val() !== p.SPINNER_TIMEOUT && a.val() !== p.SPINNER_CANCELLED && (a = y, m("#cvf-input-code").val(a), m("#cvf-auto-read-status").val(p.SPINNER_SUCCESS), w.submit())
    }

    function k(a) {
        e.createTimer(Number(a.timeRemaining), m("#resend-timer-message-id").val(), m("#resend-timer-complete-id").val().replace(/"/g, ""));
        a = m("#wait-resend-auto-read");
        a.submit(function(a) {
            a.preventDefault()
        });
        m(".wait-one-minute-continue").click(function() {
            g.location.reload()
        });
        a.removeClass("aok-hidden");
        w.addClass("aok-hidden")
    }

    function B() {
        h("#otp-request-failed-alert").show();
        m("#cvf-input-code").attr("disabled", "disabled").addClass("a-form-disabled");
        m("#cvf-submit-otp-button").addClass("a-button-disabled");
        m("#cvf-resend-link").unbind().click(function() {
            g.location.reload()
        })
    }

    function A(a) {
        b.get(a, {
            success: function(a) {
                if (a.wait) l.incrementCounter(t.WAIT_RESEND), k(a);
                else if (a.redirect) l.incrementCounter(t.REDIRECT), g.location.replace(a.redirect);
                else {
                    var b = a.smsFormat;
                    b ? (l.incrementCounter(t.RECEIVED_FORMAT + ":" + b), "androidAutoReadSmsWithAppHash" ===
                        b && (z = a.sendSmsSupportingAndroidSmsRetrieverTreatment, "T1" === z ? n() : "T2" === z && v(), y && f(y))) : (l.incrementCounter(t.FORMAT_NOT_RECEIVED), console.error("Failed to receive sms format"))
                }
            },
            error: function(a, b, c) {
                l.incrementCounter(t.AJAX_SMS_REQUEST_FAILED + ":" + c);
                B();
                console.error("Ajax request failed", c)
            }
        })
    }
    var m = b.$,
        g = this;
    c = [c];
    var p = Object.freeze({
            SHEET_SUCCESS: "bottomSheetSuccess",
            SHEET_CANCELLED: "bottomSheetCancelled",
            SHEET_TIMEOUT: "bottomSheetTimeout",
            SPINNER_SUCCESS: "inputSpinnerSuccess",
            SPINNER_CANCELLED: "inputSpinnerCancelled",
            SPINNER_TIMEOUT: "inputSpinnerTimeout"
        }),
        t = Object.freeze({
            SHOW_BOTTOM_SHEET: "OTPAutoReadShowBottomSheet",
            SHOW_INPUT_SPINNER: "OTPAutoReadShowInputSpinner",
            CANCEL_BOTTOM_SHEET: "OTPAutoReadCancelBottomSheetForManualInput",
            CANCEL_INPUT_SPINNER: "OTPAutoReadCancelInputSpinnerForManualInput",
            BOTTOM_SHEET_TIMEOUT: "OTPAutoReadBottomSheetTimeout",
            INPUT_SPINNER_TIMEOUT: "OTPAutoReadInputSpinnerTimeout",
            RECEIVED_FORMAT: "OTPAutoReadReceivedFormat",
            FORMAT_NOT_RECEIVED: "OTPAutoReadFormatNotReceived",
            REDIRECT: "OTPAutoReadClientRedirect",
            AJAX_SMS_REQUEST_FAILED: "OTPAutoReadAjaxSmsRequestFailed",
            WAIT_RESEND: "OTPAutoReadWaitResend"
        }),
        r = b.state("autoReadAttrs");
    if (r && r.isClientDrivenOtpSendingEnabled) {
        var x = r.arbParam;
        if (x) {
            var w = m("#verification-code-form");
            if (0 !== w.length) {
                var y = null,
                    z = null;
                a ? (c = c.map(function(a) {
                    return a.isEnabled().then(function(b) {
                        return b ? a.registerListener(f).then(function(a) {
                            return a
                        }) : {}
                    })
                }), d.all(c).then(function(a) {
                    var b = [],
                        c = {};
                    a.forEach(function(a) {
                        a.handlerCapability && b.push(a.handlerCapability);
                        a.handlerQueryParams &&
                            m.extend(c, a.handlerQueryParams)
                    });
                    a = {
                        arb: x,
                        mode: "page_ajax",
                        sendClientDrivenOtp: !0,
                        capabilities: b.join()
                    };
                    m.extend(a, c);
                    a = g.location.origin + "/ap/cvf/request?" + m.param(a);
                    A(a)
                })) : (d = g.location.origin + "/ap/cvf/request?" + m.param({
                    arb: x,
                    mode: "page_ajax",
                    sendClientDrivenOtp: !0
                }), A(d))
            }
        }
    }
});
"use strict";
P.when("A", "ready").register("codeResendTimer", function(b) {
    function d(a, d, h) {
        var e = (new Date).getTime(),
            l = setInterval(function() {
                var c = (new Date).getTime() - e,
                    c = a - c;
                if (0 >= c) clearInterval(l), b.$("#timer").html(h);
                else {
                    var c = Math.floor(c / 1E3),
                        n = d.split(" +timeleft+ "),
                        c = n[0].split('"').join("") + c + n[1].split('"').join("");
                    b.$("#timer").html(c)
                }
            }, 100)
    }
    return {
        createTimer: function(a, b, h) {
            return new d(a, b, h)
        }
    }
});
"use strict";
P.when("A", "cvfFormDataGenerator", "ready").execute(function(b, d) {
    var a = b.$;
    a(".cvf-widget-btn-val").click(function(b) {
        var h = a(b.target).closest(".cvf-widget-form");
        b = d.getNameValue(a(b.target));
        h.append('\x3cinput type\x3d"hidden" name\x3d"' + b.name + '" value\x3d"' + b.value + '"\x3e').submit()
    })
});
"use strict";
P.when("A", "cvfVersion", "cvfFormDataGenerator", "ready").register("cvf", function(b, d, a) {
    function q(h) {
        function q(a) {
            "string" === typeof g.options.widgetMetricsScope && "function" === typeof window.uet && window.uex("ld", g.options.widgetMetricsScope, {
                wb: 1
            });
            g.options.spinnerTarget && g.options.spinnerTarget.hide();
            a.hasOwnProperty("error") ? b.trigger(p.error, a.error) : a.redirectUrl ? window.location = a.redirectUrl : a.redirect ? (b.trigger(p.success, a.token, a.status, a.redirect), g.options.autoDestroy ? g.destroy() : (e(".cvf-widget-alert").hide(),
                a.status ? e(".cvf-widget-status-success").show() : e(".cvf-widget-status-error").show(), m()), b.trigger("cvf:verification:complete", a.status), r.find(".cvf-widget-btn").unbind("click", u), r.find(".cvf-widget-btn-val").unbind("click", u), b.off(p.success), b.off(p.error)) : (r.html(a.replace(/<form/g, "\x3cdiv").replace(/<\/form/g, "\x3c/div")), k())
        }

        function u(c, d) {
            c.preventDefault();
            e(".cvf-widget-alert").hide();
            g.options.spinnerTarget && g.options.spinnerTarget.show();
            var f = a.retrieveFormData(c.target),
                k = f.inputData.serializeArray();
            d && k.push(a.getNameValue(c.target));
            b.ajax(t + f.requestPath, {
                method: "POST",
                params: k,
                success: q,
                error: A
            })
        }

        function f(a) {
            13 === a.keyCode && u(a)
        }

        function k() {
            r.find(".cvf-widget-btn").click(function(a) {
                u(a, !1)
            });
            r.find(".cvf-widget-btn-val").click(function(a) {
                u(a, !0)
            });
            r.find('input[name\x3d"code"]').focus().keypress(f)
        }

        function B(a) {
            return function(c, d, e) {
                "timeout" !== d || 3 <= x ? b.trigger(p.error, e) : b.delay(a, 10 * x++)
            }
        }

        function A(a, c, d) {
            g.options.spinnerTarget && g.options.spinnerTarget.hide();
            b.trigger(p.error,
                d)
        }

        function m() {
            e.each(r.find("input"), function(a, b) {
                a = e(b);
                a.attr("disabled", "disabled");
                a.hasClass("a-input-text") ? a.addClass("a-form-disabled") : a.hasClass("a-button-input") ? a.closest(".a-button").addClass("a-button-disabled") : a.closest(".a-input-text-wrapper").length && a.closest(".a-input-text-wrapper").addClass("a-form-disabled")
            });
            e.each(r.find("a"), function(a, b) {
                a = e(b);
                a.hasClass("cvf-widget-link-disable-target") && a.addClass("cvf-link-disabled")
            })
        }
        var g = this;
        c++;
        var p = {
            success: "cvf:" + c + ":success",
            error: "cvf:" + c + ":error"
        };
        g.options = {};
        e.extend(g.options, l, h);
        (function(a) {
            if (1 !== e(a.target).length) throw Error("The CVF widget requires a unique element.");
            if (!e.isFunction(a.onSuccess)) throw Error("The CVF widget requires a success callback function.");
            if (!e.isFunction(a.onError)) throw Error("The CVF widget requires an error callback function.");
        })(g.options);
        var t = g.options.server,
            r = e(g.options.target);
        b.on(p.success, g.options.onSuccess);
        b.on(p.error, g.options.onError);
        g.start = function() {
            if (0 ===
                e.trim(g.options.requestToken).length) throw Error("The CVF widget requires a request token.");
            var a = t + "/ap/cvf/request.embed",
                c = g.options.requestToken,
                f = g.options.requestArbToken,
                k = g.options.associationHandle,
                h = g.options.language,
                u = 0 === e.trim(f).length,
                l = 0 !== e.trim(k).length,
                m = 0 !== e.trim(h).length,
                n = {};
            u ? n.requestToken = c : n.arb = f;
            n.CVFVersion = d.version;
            n.AUIVersion = P.AUI_BUILD_DATE;
            m && (n.language = h);
            l && (n["openid.assoc_handle"] = k);
            "string" === typeof g.options.widgetMetricsScope && "function" === typeof window.uet &&
                window.uet("bb", g.options.widgetMetricsScope, {
                    wb: 1
                });
            b.ajax(a, {
                method: "GET",
                params: n,
                success: q,
                error: B(g.start)
            })
        };
        g.destroy = function() {
            r.html("")
        };
        k();
        var x = 0;
        g.options.autoStart && g.start()
    }

    function h(a) {
        return new q(a)
    }
    var e = b.$,
        l = {
            server: "",
            target: void 0,
            requestToken: void 0,
            requestArbToken: void 0,
            onSuccess: void 0,
            onError: void 0,
            spinnerTarget: void 0,
            autoStart: !0,
            autoDestroy: !0,
            widgetMetricsScope: void 0,
            associationHandle: void 0,
            language: void 0
        },
        c = 0;
    b.on("cvf:verification:request", function(a) {
        var c =
            e("#" + a),
            d = c.data("token"),
            f = c.data("spinnerId"),
            f = e("#" + f);
        h({
            target: c,
            spinnerTarget: f,
            requestToken: d,
            onSuccess: function(c, d, e) {
                b.trigger("cvf:verification:complete:" + a, c, d, e)
            },
            onError: function(c) {
                b.trigger("cvf:verification:error:" + a, c)
            },
            autoStart: !0,
            autoDestroy: !1
        })
    });
    return {
        create: h
    }
});
"use strict";
P.when("A", "ready").register("cvfFormDataGenerator", function(b) {
    var d = b.$;
    return {
        retrieveFormData: function(a) {
            a = d(a).closest(".cvf-widget-form");
            return {
                requestPath: a.data("use-only-form-action") ? a.attr("action") : "/ap/cvf/" + a.attr("action") + ".embed",
                inputData: a.find(".cvf-widget-input,.cvf-widget-hidden-fields,.cvf-widget-input :input"),
                form: a
            }
        },
        getNameValue: function(a) {
            a = d(a);
            var b = a.attr("name");
            b || (b = a.closest(".cvf-widget-btn-val").attr("data-name"));
            var h = a.attr("value");
            h || (h = a.closest(".cvf-widget-btn-val").attr("data-value"));
            return {
                name: b,
                value: h
            }
        }
    }
});
"use strict";
P.when("A", "cvf", "ready").execute(function(b, d) {
    var a = b.$;
    a(document).ready(function() {
        function b(a, c, d) {
            window.location = d;
            console.log("Client Side: " + a)
        }

        function h(a) {
            console.log(a)
        }
        var e = a(".cvf-widget-spinner"),
            l = a("#cvf-widget-content");
        if (1 === l.length) {
            var c = a('[name\x3d"requestToken"]').first().attr("value");
            d.create({
                target: l,
                spinnerTarget: e,
                requestToken: c,
                onSuccess: b,
                onError: h,
                autoStart: !1
            })
        }
    })
});
"use strict";
P.when("A", "ready").register("phoneFormField", function(b) {
    function d() {
        a: {
            for (var b = a("select[name\x3d'cvf_phone_cc']").val() || "", d = 0; d < q.length; d++) {
                var l = q[d];
                if (b.toUpperCase() === l) {
                    a("#mobileClaimDisclosureMessage").removeClass("a-hidden aok-hidden").show();
                    a("#mobileClaimDisclosureMessageRelaxed").addClass("aok-hidden").hide();
                    break a
                }
            }
            a("#mobileClaimDisclosureMessageRelaxed").removeClass("a-hidden aok-hidden").show();a("#mobileClaimDisclosureMessage").addClass("aok-hidden").hide()
        }
    }
    var a = b.$,
        q = ["US", "CA", "FR"];
    0 < a("select[name\x3d'cvf_phone_cc']").length && 0 < a("#mobileClaimDisclosureMessage").length && 0 < a("#mobileClaimDisclosureMessageRelaxed").length && (d(), a("select[name\x3d'cvf_phone_cc']").change(d))
});
"use strict";
P.when("A").execute(function(b) {
    b.declarative("auth-popup", "click", function(b) {
        var a = b.data;
        b = b.$target.closest("a")[0];
        (a = window.open(b.href, b.target, a.windowOptions)) && a.focus()
    })
});
P.register("android-sms-otp-parser", function() {
    return {
        parseOtpCode: function(b) {
            if (b && (b = b.match(/(([\s\S]*[^0-9])|(^))([0-9]{4,6})[^0-9][\s\S]*[a-zA-Z0-9+\\\/]{11}/) || [], 0 < b.length)) return b[4]
        }
    }
});
P.when("A", "mobile-auth-platform", "3p-promise", "android-sms-otp-parser", "cvf-client-side-counters-util", "ready").register("sms-retriever-handler", function(b, d, a, q, h) {
    function e(a) {
        (n = a.isSupported) ? h.incrementCounter(c.ENABLED): h.incrementCounter(c.DISABLED);
        v = {
            appHash: a.appHash
        }
    }

    function l() {
        return new a(function(a) {
            v ? a(v) : d.isSmsRetrieverEnabled(function(b) {
                e(b);
                a(v)
            })
        })
    }
    var c = Object.freeze({
            ENABLED: "SmsRetrieverEnabled",
            DISABLED: "SmsRetrieverDisabled",
            SMS_LISTENER_FAILED: "SmsRetrieverListenerFailedToRegister",
            RECEIVED_INVALID_SMS: "SmsRetrieverListenerReceivedInvalidSms",
            RECEIVED_VALID_SMS: "SmsRetrieverListenerReceivedValidSms"
        }),
        n = null,
        v = null;
    return {
        isEnabled: function() {
            return new a(function(a) {
                null !== n ? a(n) : d.isSmsRetrieverEnabled(function(b) {
                    e(b);
                    a(n)
                })
            })
        },
        registerListener: function(b) {
            return new a(function(a) {
                d.registerMAPSmsReceiver(function(a) {
                    a.isRegistered ? (a = q.parseOtpCode(a.sms)) ? (h.incrementCounter(c.RECEIVED_VALID_SMS), b(a)) : h.incrementCounter(c.RECEIVED_INVALID_SMS) : h.incrementCounter(c.SMS_LISTENER_FAILED)
                });
                l().then(function(b) {
                    n ? a({
                        handlerCapability: "smsRetriever",
                        handlerQueryParams: b
                    }) : a({})
                })
            })
        }
    }
});