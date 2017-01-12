var result_arr = [];
var ret = [];
var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        tap: "Tap to continue",
        "order#": "order #",
        "stack-all-you-want": '"Stack All You Want!"',
        hot: "HOT!"
    },
    Win: {
        dash: " - ",
        x: "x ",
        dollar: "$ ",
        tip: "TIP",
        total: "TOTAL"
    },
    Tutorial: {
        tut1a: "Hello there!",
        tut1b: "Welcome to Stack",
        tut1c: "the Burger!",
        tut2a: "I'm here to help",
        tut2b: "you finish your",
        tut2c: "first order.",
        tut3a: "Now let's ",
        tut3b: "get started!",
        tut4a: "",
        tut4b: "这是接关键词游戏！",
        tut4c: "",
        "tut5a-desk": "拖动下面的福袋",
        "tut5b-desk": "接住掉下的词",
        "tut5c-desk": "",
        "tut5d-desk": "",
        "tut5a-mob": "拖动下面的福袋",
        "tut5b-mob": "接住掉下的词",
        "tut5c-mob": "",
        "tut5d-mob": "",
        tut6a: "这是一个正确的 ",
        tut6b: "关键词，",
        tut6c: "快去接它",
        tut6d: "",
        tut7a: "Watch out!",
        tut7b: "Don't catch the",
        tut7c: "bread if the",
        tut7d: "order isn't finished.",
        tut9a: "Nice!",
        tut9b: "One topping is",
        tut9c: "done!",
        tut10a: "Try not to catch",
        tut10b: "this topping again",
        tut10c: "or you'll lose",
        tut10d: "a tip!",
        tut11a: "All toppings done!",
        tut11b: "Now you just",
        tut11c: "need to catch",
        tut11d: "the bread!",
        tut12a: "Congratulations!",
        tut12b: "You've completed",
        tut12c: "your very first",
        tut12d: "order!",
        tut13a: "Always look out",
        tut13b: "for your tip to",
        tut13c: "earn more than",
        tut13d: "what you deserve!",
        tut14a: "Oh no!",
        tut14b: "Failing an order",
        tut14c: "brings you back",
        tut14d: "to square one.",
        tut15a: "Be careful next",
        tut15b: "time so that your",
        tut15c: "customers will",
        tut15d: "always be happy!",
        tut16a: "Here, you can",
        tut16b: "spend your hard",
        tut16c: "earned money to",
        tut16d: "unlock toppings!",
        tut17a: "As you buy new",
        tut17b: "toppings, you will",
        tut17c: "be able to create",
        tut17d: "tasty orders!",
        tut18a: "Hello again!",
        tut18b: "Special order",
        tut18c: "coming right up!",
        tut19a: "This is your",
        tut19b: "chance to earn",
        tut19c: "a lot of money!",
        tut20a: "Stack toppings as",
        tut20b: "high as you can",
        tut20c: "possibly imagine!",
        tut20d: "Good luck!"
    },
    Shop: {
        sale: "SALE",
        sold: "SOLD"
    },
    Food: {
        beef: "牛肉",
        tongxin: "童心",
        egg: "鸡蛋",
        cheese: "芝士",
        chuxin: "初心",
        duihua: "对话",
        gangwei: "岗位",
        jianshou: "坚守",
        shouwang: "守望",
        suiyuan: "随缘",
        touru: "投入",
        xingfu: "幸福",
        zhencheng: "真诚",
        zhenqing: "真情",
        baorong: "包容",
        ganen: "感恩",
        ganji: "感激",
        ganxie: "感谢",
        kuaile: "快乐",
        mengxiang: "梦想",
        pingjing: "平静",
        xingfu: "幸福",
        xinnian: "信念",
        zhengchang: "正常",
        jiyi: "记忆",
        zhizhuo: "执着",
        chuancheng: "传承",
		chaoyue: "超越",
		chengshi: "诚实",
		ganen: "感恩",
		ganxie: "感谢",
		engan: "恩感",
		jingye: "敬业",
		reqing: "热情",
		shouwang: "守望",
		tuanjie: "团结",
		wennuan: "温暖",
        huibao: "回报",
        zhihui: "智慧",
        zhenxi: "珍惜",
        tomato: "西红柿",
        nuli: "努力",
        xiwang: "希望",
        dandang: "担当",
        jushou: "聚首",
        lixiang: "理想",
        meihao: "美好",
        nanwang: "难忘",
        peiban: "陪伴",
        qibu: "起步",
        qingyi: "情谊",
        tiaozhan: "挑战",
        zhizhuo: "执着",
        xiangshang: "向上",
        guangrong: "光荣",
        jiandan: "简单",
        jiankang: "健康",
        pusu: "朴素",
        shifang: "释放",
        shouhu: "守护",
        sinian: "思念",
        zeren: "责任",
        benzhen: "本真",
        chengzhang: "成长",
        chuancheng: "传承",
        pinge: "品格",
        tongixn: "童心",
        wenhe: "温和",
        xiangxin: "相信",
        xinnian: "信念",
        zhenai: "真爱",
        fenjin: "奋进",
        guanai: "关爱",
        jianchi: "坚持",
        jianshou: "坚守",
        kuanghuan: "狂欢",
        langman: "浪漫",
        yingxiong: "英雄",
        yishu: "艺术",
        yuanwang: "愿望",
        zhichi: "支持",
        fenjin: "奋进",
        gongming: "共鸣",
        hexie: "和谐",
        huibao: "回报",
        jiandan: "简单",
        rongyao: "荣耀",
        tuanjie: "团结",
        xiangban: "相伴",
        xingdong: "行动",
        youya: "优雅",
        zhenxi: "珍惜",
        chuangzao: "创造",
        fanrong: "繁荣",
        guibao: "瑰宝",
        jianqiang: "坚强",
        nuli: "努力",
        qianhe: "谦和",
        renke: "认可",
        yikao: "依靠",
        zhenqing: "真情",
        fuchu: "付出",
        gongxiang: "共享",
        guojia: "国家",
        jiyu: "机遇",
        kuanwei: "宽慰",
        qiji: "奇迹",
        renmin: "人民",
        tancheng: "坦诚",
        tuanyuan: "团圆",
        zhenxin: "真心",
        fengxian: "奉献",
        jiangxin: "坚信",
        keku: "刻苦",
        reai: "热爱",
        shouhuo: "收获",
        sikao: "思考",
        tiliang: "体谅",
        xinren: "信任",
        yonggan: "勇敢",
        yuanmeng: "圆梦",
        gandong: "感动",
        gongjin: "恭谨",
        huiyi: "回忆",
        jianren: "坚韧",
        jingshen: "精神",
        jingwei: "敬畏",
        jiqing: "激情",
        qingchun: "青春",
        wanqiang: "顽强",
        weihu: "维护",
        dongxing: "行动",
        fuxing: "幸福",
        jietuan: "团结",
        shoujian: "坚守",
        xiegan: "感谢",
        yiji: "忆记",
        youzi: "由自",
        yuantuan: "团圆",
        yuechao: "超越",
        zhuozhi: "执着",
        banxiang: "相伴",
        chijian: "坚持",
        gepin: "品格",
        huankuang: "狂欢",
        kuke: "刻苦",
        lekuai: "乐快",
        wangnan: "忘难",
        xianggong: "享共",
        xinxiang: "信相",
        yihui: "忆回",
        bundle: "Bundle"
    },
    Description: {
        chuancheng_a: "A round vegetable that",
        chuancheng_b: "is usually white, yellow,",
        chuancheng_c: "or red and has a strong",
        chuancheng_d: "smell and taste.",
        huibao_a: "Thin strips of salted and",
        huibao_b: "smoked meat from the",
        huibao_c: "sides and the back of",
        huibao_d: "a pig.",
        jiyi_a: "The plump, crisp, hollow",
        jiyi_b: "fruit of this plant,",
        jiyi_c: "typically green, yellow,",
        jiyi_d: "or red.",
        nuli_a: "The cylindrical fruit of",
        nuli_b: "this plant has hard thin",
        nuli_c: "green rind and white",
        nuli_d: "crisp flesh.",
        tongxin_a: "Meat from the leg of a ",
        tongxin_b: "hog that is often",
        tongxin_c: "prepared by smoking",
        tongxin_d: "or salting.",
        xiwang_a: "A large fruit that grows ",
        xiwang_b: "on a tropical tree and that",
        xiwang_c: "has thick skin and very",
        xiwang_d: "sweet, juicy, yellow flesh.",
        zhenxi_a: "A small shellfish that ",
        zhenxi_b: "has a long body and legs.",
        zhihui_a: "zhihui comes packed in",
        zhihui_b: "water or oil and may ",
        zhihui_c: "be found chunk style",
        zhihui_d: "or flaked.",
        zhizhuo_a: "A lush fruit with a with",
        zhizhuo_b: "bright green flesh from",
        zhizhuo_c: "the tropics.",
        tomato_a: "The usually large ",
        tomato_b: "rounded typically red ",
        tomato_c: "or yellow pulpy berry",
        tomato_d: "of an herb.",
        bundle_a: "Save up to 25%!"
    },
    HTP: {
        "1a": "Collect the required toppings",
        "1b": "listed in the order.",
        "2a-desk": "Drag the bread to move it around.",
        "2a-mob": "Tap anywhere to move the bread.",
        "3a": "Catch the falling toppings to",
        "3b": "complete the order.",
        "4a": "Catch the bread only if all",
        "4b": "toppings are completed.",
        "5a": "Catch as much as you can and earn",
        "5b": "a lot of money!"
    },
    ORDER: {
        burger_1: "Burger I",
        burger_2: "Burger II",
        burger_3: "Burger III",
        burger_4: "Burger IV",
        burger_5: "Burger V",
        burger_6: "Burger VI",
        burger_7: "Burger VII",
        burger_8: "Burger VIII",
        burger_9: "Burger IX",
        burger_10: "Burger X",
        burger_11: "Burger XI",
        burger_12: "Burger XII",
        burger_13: "Burger XII",
        burger_14: "Burger XIV",
        burger_15: "Burger XV",
        burger_16: "Burger XVI",
        burger_17: "Burger XVII",
        burger_18: "Burger XVIII",
        burger_19: "Burger XIX",
        burger_20: "Burger XX",
        burger_21: "Burger XXI",
        burger_22: "Burger XXII",
        burger_23: "Burger XXIII",
        burger_24: "Burger XXIV",
        burger_25: "Burger XXV",
        burger_26: "Burger XXVI",
        burger_27: "Burger XXVII",
        burger_28: "Burger XXVIII",
        burger_29: "Burger XXIX",
        burger_30: "Burger XXX"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !1,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = {
     
};
var MobileAdInGameHeader = {
     
};
var MobileAdInGameFooter = {
     
};
var MobileAdInGameEnd = {
    
};
(function(c, d) {
    function e(c, t, s) {
        if (s === d && 1 === c.nodeType)
            if (s = "data-" + t.replace(wc, "-$1").toLowerCase(), s = c.getAttribute(s), "string" == typeof s) {
                try {
                    s = "true" === s ? !0 : "false" === s ? !1 : "null" === s ? null : +s + "" === s ? +s : xc.test(s) ? j.parseJSON(s) : s
                } catch (e) {}
                j.data(c, t, s)
            } else s = d;
        return s
    }

    function f(c) {
        for (var t in c)
            if (!("data" === t && j.isEmptyObject(c[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !1
    }

    function m() {
        return !0
    }

    function A(c) {
        return !c || !c.parentNode || 11 === c.parentNode.nodeType
    }

    function n(c,
        t) {
        do c = c[t]; while (c && 1 !== c.nodeType);
        return c
    }

    function y(c, t, d) {
        t = t || 0;
        if (j.isFunction(t)) return j.grep(c, function(c, z) {
            return !!t.call(c, z, c) === d
        });
        if (t.nodeType) return j.grep(c, function(c) {
            return c === t === d
        });
        if ("string" == typeof t) {
            var e = j.grep(c, function(c) {
                return 1 === c.nodeType
            });
            if (yc.test(t)) return j.filter(t, e, !d);
            t = j.filter(t, e)
        }
        return j.grep(c, function(c) {
            return 0 <= j.inArray(c, t) === d
        })
    }

    function C(c) {
        var t = Bb.split("|");
        c = c.createDocumentFragment();
        if (c.createElement)
            for (; t.length;) c.createElement(t.pop());
        return c
    }

    function u(c, t) {
        if (1 === t.nodeType && j.hasData(c)) {
            var d, e, x;
            e = j._data(c);
            var f = j._data(t, e),
                p = e.events;
            if (p)
                for (d in delete f.handle, f.events = {}, p) {
                    e = 0;
                    for (x = p[d].length; e < x; e++) j.event.add(t, d, p[d][e])
                }
            f.data && (f.data = j.extend({}, f.data))
        }
    }

    function E(c, t) {
        var d;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(c), d = t.nodeName.toLowerCase(), "object" === d ? (t.parentNode && (t.outerHTML = c.outerHTML), j.support.html5Clone && c.innerHTML && !j.trim(t.innerHTML) &&
            (t.innerHTML = c.innerHTML)) : "input" === d && Cb.test(c.type) ? (t.defaultChecked = t.checked = c.checked, t.value !== c.value && (t.value = c.value)) : "option" === d ? t.selected = c.defaultSelected : "input" === d || "textarea" === d ? t.defaultValue = c.defaultValue : "script" === d && t.text !== c.text && (t.text = c.text), t.removeAttribute(j.expando))
    }

    function G(c) {
        return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName("*") : "undefined" != typeof c.querySelectorAll ? c.querySelectorAll("*") : []
    }

    function I(c) {
        Cb.test(c.type) && (c.defaultChecked =
            c.checked)
    }

    function q(c, t) {
        if (t in c) return t;
        for (var d = t.charAt(0).toUpperCase() + t.slice(1), j = t, e = Db.length; e--;)
            if (t = Db[e] + d, t in c) return t;
        return j
    }

    function v(c, t) {
        return c = t || c, "none" === j.css(c, "display") || !j.contains(c.ownerDocument, c)
    }

    function D(c, t) {
        for (var d, e, x = [], f = 0, p = c.length; f < p; f++) d = c[f], d.style && (x[f] = j._data(d, "olddisplay"), t ? (!x[f] && "none" === d.style.display && (d.style.display = ""), "" === d.style.display && v(d) && (x[f] = j._data(d, "olddisplay", Aa(d.nodeName)))) : (e = S(d, "display"), !x[f] &&
            "none" !== e && j._data(d, "olddisplay", e)));
        for (f = 0; f < p; f++)
            if (d = c[f], d.style && (!t || "none" === d.style.display || "" === d.style.display)) d.style.display = t ? x[f] || "" : "none";
        return c
    }

    function O(c, d, s) {
        return (c = zc.exec(d)) ? Math.max(0, c[1] - (s || 0)) + (c[2] || "px") : d
    }

    function T(c, d, s, e) {
        d = s === (e ? "border" : "content") ? 4 : "width" === d ? 1 : 0;
        for (var x = 0; 4 > d; d += 2) "margin" === s && (x += j.css(c, s + ha[d], !0)), e ? ("content" === s && (x -= parseFloat(S(c, "padding" + ha[d])) || 0), "margin" !== s && (x -= parseFloat(S(c, "border" + ha[d] + "Width")) || 0)) : (x +=
            parseFloat(S(c, "padding" + ha[d])) || 0, "padding" !== s && (x += parseFloat(S(c, "border" + ha[d] + "Width")) || 0));
        return x
    }

    function P(c, d, s) {
        var e = "width" === d ? c.offsetWidth : c.offsetHeight,
            x = !0,
            f = j.support.boxSizing && "border-box" === j.css(c, "boxSizing");
        if (0 >= e || null == e) {
            e = S(c, d);
            if (0 > e || null == e) e = c.style[d];
            if (Ba.test(e)) return e;
            x = f && (j.support.boxSizingReliable || e === c.style[d]);
            e = parseFloat(e) || 0
        }
        return e + T(c, d, s || (f ? "border" : "content"), x) + "px"
    }

    function Aa(c) {
        if (ab[c]) return ab[c];
        var d = j("<" + c + ">").appendTo(F.body),
            s = d.css("display");
        d.remove();
        if ("none" === s || "" === s) {
            oa = F.body.appendChild(oa || j.extend(F.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!pa || !oa.createElement) pa = (oa.contentWindow || oa.contentDocument).document, pa.write("<!doctype html><html><body>"), pa.close();
            d = pa.body.appendChild(pa.createElement(c));
            s = S(d, "display");
            F.body.removeChild(oa)
        }
        return ab[c] = s, s
    }

    function Ca(c, d, s, e) {
        var x;
        if (j.isArray(d)) j.each(d, function(d, t) {
            s || Ac.test(c) ? e(c, t) : Ca(c + "[" + ("object" == typeof t ? d : "") + "]",
                t, s, e)
        });
        else if (!s && "object" === j.type(d))
            for (x in d) Ca(c + "[" + x + "]", d[x], s, e);
        else e(c, d)
    }

    function M(c) {
        return function(d, s) {
            "string" != typeof d && (s = d, d = "*");
            var e, x, f = d.toLowerCase().split(ia),
                p = 0,
                l = f.length;
            if (j.isFunction(s))
                for (; p < l; p++) e = f[p], (x = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = c[e] = c[e] || [], e[x ? "unshift" : "push"](s)
        }
    }

    function X(c, t, s, e, j, f) {
        j = j || t.dataTypes[0];
        f = f || {};
        f[j] = !0;
        var p;
        j = c[j];
        for (var l = 0, q = j ? j.length : 0, n = c === cb; l < q && (n || !p); l++) p = j[l](t, s, e), "string" == typeof p && (!n || f[p] ? p =
            d : (t.dataTypes.unshift(p), p = X(c, t, s, e, p, f)));
        return (n || !p) && !f["*"] && (p = X(c, t, s, e, "*", f)), p
    }

    function Eb(c, t) {
        var s, e, x = j.ajaxSettings.flatOptions || {};
        for (s in t) t[s] !== d && ((x[s] ? c : e || (e = {}))[s] = t[s]);
        e && j.extend(!0, c, e)
    }

    function Da() {
        try {
            return new c.XMLHttpRequest
        } catch (z) {}
    }

    function ua() {
        return setTimeout(function() {
            Ea = d
        }, 0), Ea = j.now()
    }

    function Fb(c, d, s) {
        var e, x = 0,
            f = Fa.length,
            p = j.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                for (var d = Ea || ua(), d = Math.max(0, q.startTime + q.duration - d),
                    t = 1 - (d / q.duration || 0), s = 0, e = q.tweens.length; s < e; s++) q.tweens[s].run(t);
                return p.notifyWith(c, [q, t, d]), 1 > t && e ? d : (p.resolveWith(c, [q]), !1)
            },
            q = p.promise({
                elem: c,
                props: j.extend({}, d),
                opts: j.extend(!0, {
                    specialEasing: {}
                }, s),
                originalProperties: d,
                originalOptions: s,
                startTime: Ea || ua(),
                duration: s.duration,
                tweens: [],
                createTween: function(d, t) {
                    var s = j.Tween(c, q.opts, d, t, q.opts.specialEasing[d] || q.opts.easing);
                    return q.tweens.push(s), s
                },
                stop: function(d) {
                    for (var t = 0, s = d ? q.tweens.length : 0; t < s; t++) q.tweens[t].run(1);
                    return d ? p.resolveWith(c, [q, d]) : p.rejectWith(c, [q, d]), this
                }
            });
        d = q.props;
        s = q.opts.specialEasing;
        var n, v, ba, m;
        for (e in d)
            if (n = j.camelCase(e), v = s[n], ba = d[e], j.isArray(ba) && (v = ba[1], ba = d[e] = ba[0]), e !== n && (d[n] = ba, delete d[e]), (m = j.cssHooks[n]) && "expand" in m)
                for (e in ba = m.expand(ba), delete d[n], ba) e in d || (d[e] = ba[e], s[e] = v);
            else s[n] = v;
        for (; x < f; x++)
            if (e = Fa[x].call(q, c, d, q.opts)) return e;
        var D = q;
        j.each(d, function(c, z) {
            for (var d = (va[c] || []).concat(va["*"]), t = 0, s = d.length; t < s && !d[t].call(D, c, z); t++);
        });
        return j.isFunction(q.opts.start) && q.opts.start.call(c, q), j.fx.timer(j.extend(l, {
            anim: q,
            queue: q.opts.queue,
            elem: c
        })), q.progress(q.opts.progress).done(q.opts.done, q.opts.complete).fail(q.opts.fail).always(q.opts.always)
    }

    function U(c, d, s, e, j) {
        return new U.prototype.init(c, d, s, e, j)
    }

    function Ga(c, d) {
        var s, e = {
                height: c
            },
            j = 0;
        for (d = d ? 1 : 0; 4 > j; j += 2 - d) s = ha[j], e["margin" + s] = e["padding" + s] = c;
        return d && (e.opacity = e.width = c), e
    }

    function Gb(c) {
        return j.isWindow(c) ? c : 9 === c.nodeType ? c.defaultView || c.parentWindow : !1
    }
    var Hb, Ha, F = c.document,
        Cc = c.location,
        Dc = c.navigator,
        Ec = c.jQuery,
        Fc = c.$,
        Ib = Array.prototype.push,
        da = Array.prototype.slice,
        Jb = Array.prototype.indexOf,
        Gc = Object.prototype.toString,
        eb = Object.prototype.hasOwnProperty,
        fb = String.prototype.trim,
        j = function(c, d) {
            return new j.fn.init(c, d, Hb)
        },
        Ia = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Hc = /\S/,
        ia = /\s+/,
        Ic = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Jc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Kb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Kc = /^[\],:{}\s]*$/,
        Lc = /(?:^|:|,)(?:\s*\[)+/g,
        Mc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Nc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Oc = /^-ms-/,
        Pc = /-([\da-z])/gi,
        Qc = function(c, d) {
            return (d + "").toUpperCase()
        },
        Ja = function() {
            F.addEventListener ? (F.removeEventListener("DOMContentLoaded", Ja, !1), j.ready()) : "complete" === F.readyState && (F.detachEvent("onreadystatechange", Ja), j.ready())
        },
        Lb = {};
    j.fn = j.prototype = {
        constructor: j,
        init: function(c, t, s) {
            var e, x;
            if (!c) return this;
            if (c.nodeType) return this.context = this[0] = c, this.length = 1,
                this;
            if ("string" == typeof c) {
                "<" === c.charAt(0) && ">" === c.charAt(c.length - 1) && 3 <= c.length ? e = [null, c, null] : e = Jc.exec(c);
                if (e && (e[1] || !t)) {
                    if (e[1]) return t = t instanceof j ? t[0] : t, x = t && t.nodeType ? t.ownerDocument || t : F, c = j.parseHTML(e[1], x, !0), Kb.test(e[1]) && j.isPlainObject(t) && this.attr.call(c, t, !0), j.merge(this, c);
                    if ((t = F.getElementById(e[2])) && t.parentNode) {
                        if (t.id !== e[2]) return s.find(c);
                        this.length = 1;
                        this[0] = t
                    }
                    return this.context = F, this.selector = c, this
                }
                return !t || t.jquery ? (t || s).find(c) : this.constructor(t).find(c)
            }
            return j.isFunction(c) ?
                s.ready(c) : (c.selector !== d && (this.selector = c.selector, this.context = c.context), j.makeArray(c, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return da.call(this)
        },
        get: function(c) {
            return null == c ? this.toArray() : 0 > c ? this[this.length + c] : this[c]
        },
        pushStack: function(c, d, s) {
            c = j.merge(this.constructor(), c);
            return c.prevObject = this, c.context = this.context, "find" === d ? c.selector = this.selector + (this.selector ? " " : "") + s : d && (c.selector = this.selector + "." + d + "(" + s + ")"),
                c
        },
        each: function(c, d) {
            return j.each(this, c, d)
        },
        ready: function(c) {
            return j.ready.promise().done(c), this
        },
        eq: function(c) {
            return c = +c, -1 === c ? this.slice(c) : this.slice(c, c + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(da.apply(this, arguments), "slice", da.call(arguments).join(","))
        },
        map: function(c) {
            return this.pushStack(j.map(this, function(d, s) {
                return c.call(d, s, d)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Ib,
        sort: [].sort,
        splice: [].splice
    };
    j.fn.init.prototype = j.fn;
    j.extend = j.fn.extend = function() {
        var c, t, s, e, x, f, p = arguments[0] || {},
            l = 1,
            q = arguments.length,
            n = !1;
        "boolean" == typeof p && (n = p, p = arguments[1] || {}, l = 2);
        "object" != typeof p && !j.isFunction(p) && (p = {});
        for (q === l && (p = this, --l); l < q; l++)
            if (null != (c = arguments[l]))
                for (t in c) s = p[t], e = c[t], p !== e && (n && e && (j.isPlainObject(e) || (x = j.isArray(e))) ? (x ? (x = !1, f = s && j.isArray(s) ? s : []) : f = s && j.isPlainObject(s) ? s : {}, p[t] = j.extend(n, f, e)) : e !== d && (p[t] = e));
        return p
    };
    j.extend({
        noConflict: function(z) {
            return c.$ ===
                j && (c.$ = Fc), z && c.jQuery === j && (c.jQuery = Ec), j
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(c) {
            c ? j.readyWait++ : j.ready(!0)
        },
        ready: function(c) {
            if (!(!0 === c ? --j.readyWait : j.isReady)) {
                if (!F.body) return setTimeout(j.ready, 1);
                j.isReady = !0;
                !0 !== c && 0 < --j.readyWait || (Ha.resolveWith(F, [j]), j.fn.trigger && j(F).trigger("ready").off("ready"))
            }
        },
        isFunction: function(c) {
            return "function" === j.type(c)
        },
        isArray: Array.isArray || function(c) {
            return "array" === j.type(c)
        },
        isWindow: function(c) {
            return null != c && c == c.window
        },
        isNumeric: function(c) {
            return !isNaN(parseFloat(c)) &&
                isFinite(c)
        },
        type: function(c) {
            return null == c ? String(c) : Lb[Gc.call(c)] || "object"
        },
        isPlainObject: function(c) {
            if (!c || "object" !== j.type(c) || c.nodeType || j.isWindow(c)) return !1;
            try {
                if (c.constructor && !eb.call(c, "constructor") && !eb.call(c.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            for (var s in c);
            return s === d || eb.call(c, s)
        },
        isEmptyObject: function(c) {
            for (var d in c) return !1;
            return !0
        },
        error: function(c) {
            throw Error(c);
        },
        parseHTML: function(c, d, s) {
            var e;
            return !c || "string" != typeof c ? null :
                ("boolean" == typeof d && (s = d, d = 0), d = d || F, (e = Kb.exec(c)) ? [d.createElement(e[1])] : (e = j.buildFragment([c], d, s ? null : []), j.merge([], (e.cacheable ? j.clone(e.fragment) : e.fragment).childNodes)))
        },
        parseJSON: function(z) {
            if (!z || "string" != typeof z) return null;
            z = j.trim(z);
            if (c.JSON && c.JSON.parse) return c.JSON.parse(z);
            if (Kc.test(z.replace(Mc, "@").replace(Nc, "]").replace(Lc, ""))) return (new Function("return " + z))();
            j.error("Invalid JSON: " + z)
        },
        parseXML: function(z) {
            var t, s;
            if (!z || "string" != typeof z) return null;
            try {
                c.DOMParser ?
                    (s = new DOMParser, t = s.parseFromString(z, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(z))
            } catch (e) {
                t = d
            }
            return (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) && j.error("Invalid XML: " + z), t
        },
        noop: function() {},
        globalEval: function(z) {
            z && Hc.test(z) && (c.execScript || function(z) {
                c.eval.call(c, z)
            })(z)
        },
        camelCase: function(c) {
            return c.replace(Oc, "ms-").replace(Pc, Qc)
        },
        nodeName: function(c, d) {
            return c.nodeName && c.nodeName.toLowerCase() === d.toLowerCase()
        },
        each: function(c, t, s) {
            var e, x = 0,
                f = c.length,
                p = f === d || j.isFunction(c);
            if (s)
                if (p)
                    for (e in c) {
                        if (!1 === t.apply(c[e], s)) break
                    } else
                        for (; x < f && !1 !== t.apply(c[x++], s););
                else if (p)
                for (e in c) {
                    if (!1 === t.call(c[e], e, c[e])) break
                } else
                    for (; x < f && !1 !== t.call(c[x], x, c[x++]););
            return c
        },
        trim: fb && !fb.call("\ufeff\u00a0") ? function(c) {
            return null == c ? "" : fb.call(c)
        } : function(c) {
            return null == c ? "" : (c + "").replace(Ic, "")
        },
        makeArray: function(c, d) {
            var s, e = d || [];
            return null != c && (s = j.type(c), null == c.length || "string" === s || "function" ===
                s || "regexp" === s || j.isWindow(c) ? Ib.call(e, c) : j.merge(e, c)), e
        },
        inArray: function(c, d, s) {
            var e;
            if (d) {
                if (Jb) return Jb.call(d, c, s);
                e = d.length;
                for (s = s ? 0 > s ? Math.max(0, e + s) : s : 0; s < e; s++)
                    if (s in d && d[s] === c) return s
            }
            return -1
        },
        merge: function(c, t) {
            var s = t.length,
                e = c.length,
                j = 0;
            if ("number" == typeof s)
                for (; j < s; j++) c[e++] = t[j];
            else
                for (; t[j] !== d;) c[e++] = t[j++];
            return c.length = e, c
        },
        grep: function(c, d, s) {
            var e, j = [],
                f = 0,
                p = c.length;
            for (s = !!s; f < p; f++) e = !!d(c[f], f), s !== e && j.push(c[f]);
            return j
        },
        map: function(c, t, e) {
            var H,
                x, f = [],
                p = 0,
                l = c.length;
            if (c instanceof j || l !== d && "number" == typeof l && (0 < l && c[0] && c[l - 1] || 0 === l || j.isArray(c)))
                for (; p < l; p++) H = t(c[p], p, e), null != H && (f[f.length] = H);
            else
                for (x in c) H = t(c[x], x, e), null != H && (f[f.length] = H);
            return f.concat.apply([], f)
        },
        guid: 1,
        proxy: function(c, t) {
            var e, H, f;
            return "string" == typeof t && (e = c[t], t = c, c = e), j.isFunction(c) ? (H = da.call(arguments, 2), f = function() {
                return c.apply(t, H.concat(da.call(arguments)))
            }, f.guid = c.guid = c.guid || j.guid++, f) : d
        },
        access: function(c, t, e, H, f, B, p) {
            var l, q =
                null == e,
                n = 0,
                v = c.length;
            if (e && "object" == typeof e) {
                for (n in e) j.access(c, t, n, e[n], 1, B, H);
                f = 1
            } else if (H !== d) {
                l = p === d && j.isFunction(H);
                q && (l ? (l = t, t = function(c, z, d) {
                    return l.call(j(c), d)
                }) : (t.call(c, H), t = null));
                if (t)
                    for (; n < v; n++) t(c[n], e, l ? H.call(c[n], n, t(c[n], e)) : H, p);
                f = 1
            }
            return f ? c : q ? t.call(c) : v ? t(c[0], e) : B
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    j.ready.promise = function(z) {
        if (!Ha)
            if (Ha = j.Deferred(), "complete" === F.readyState) setTimeout(j.ready, 1);
            else if (F.addEventListener) F.addEventListener("DOMContentLoaded",
            Ja, !1), c.addEventListener("load", j.ready, !1);
        else {
            F.attachEvent("onreadystatechange", Ja);
            c.attachEvent("onload", j.ready);
            var d = !1;
            try {
                d = null == c.frameElement && F.documentElement
            } catch (e) {}
            d && d.doScroll && function x() {
                if (!j.isReady) {
                    try {
                        d.doScroll("left")
                    } catch (c) {
                        return setTimeout(x, 50)
                    }
                    j.ready()
                }
            }()
        }
        return Ha.promise(z)
    };
    j.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(c, d) {
        Lb["[object " + d + "]"] = d.toLowerCase()
    });
    Hb = j(F);
    var Mb = {};
    j.Callbacks = function(c) {
        var t;
        if ("string" ==
            typeof c) {
            if (!(t = Mb[c])) {
                t = c;
                var e = Mb[t] = {};
                t = (j.each(t.split(ia), function(c, z) {
                    e[z] = !0
                }), e)
            }
        } else t = j.extend({}, c);
        c = t;
        var H, f, B, p, l, q, n = [],
            v = !c.once && [],
            m = function(d) {
                H = c.memory && d;
                f = !0;
                q = p || 0;
                p = 0;
                l = n.length;
                for (B = !0; n && q < l; q++)
                    if (!1 === n[q].apply(d[0], d[1]) && c.stopOnFalse) {
                        H = !1;
                        break
                    }
                B = !1;
                n && (v ? v.length && m(v.shift()) : H ? n = [] : D.disable())
            },
            D = {
                add: function() {
                    if (n) {
                        var d = n.length;
                        (function Bc(d) {
                            j.each(d, function(d, t) {
                                var e = j.type(t);
                                "function" === e && (!c.unique || !D.has(t)) ? n.push(t) : t && t.length && "string" !==
                                    e && Bc(t)
                            })
                        })(arguments);
                        B ? l = n.length : H && (p = d, m(H))
                    }
                    return this
                },
                remove: function() {
                    return n && j.each(arguments, function(c, z) {
                        for (var d; - 1 < (d = j.inArray(z, n, d));) n.splice(d, 1), B && (d <= l && l--, d <= q && q--)
                    }), this
                },
                has: function(c) {
                    return -1 < j.inArray(c, n)
                },
                empty: function() {
                    return n = [], this
                },
                disable: function() {
                    return n = v = H = d, this
                },
                disabled: function() {
                    return !n
                },
                lock: function() {
                    return v = d, H || D.disable(), this
                },
                locked: function() {
                    return !v
                },
                fireWith: function(c, z) {
                    return z = z || [], z = [c, z.slice ? z.slice() : z], n && (!f || v) &&
                        (B ? v.push(z) : m(z)), this
                },
                fire: function() {
                    return D.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return D
    };
    j.extend({
        Deferred: function(c) {
            var d = [
                    ["resolve", "done", j.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", j.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", j.Callbacks("memory")]
                ],
                e = "pending",
                H = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var c = arguments;
                        return j.Deferred(function(z) {
                            j.each(d, function(d,
                                t) {
                                var e = t[0],
                                    s = c[d];
                                f[t[1]](j.isFunction(s) ? function() {
                                    var c = s.apply(this, arguments);
                                    c && j.isFunction(c.promise) ? c.promise().done(z.resolve).fail(z.reject).progress(z.notify) : z[e + "With"](this === f ? z : this, [c])
                                } : z[e])
                            });
                            c = null
                        }).promise()
                    },
                    promise: function(c) {
                        return null != c ? j.extend(c, H) : H
                    }
                },
                f = {};
            return H.pipe = H.then, j.each(d, function(c, z) {
                var j = z[2],
                    l = z[3];
                H[z[1]] = j.add;
                l && j.add(function() {
                    e = l
                }, d[c ^ 1][2].disable, d[2][2].lock);
                f[z[0]] = j.fire;
                f[z[0] + "With"] = j.fireWith
            }), H.promise(f), c && c.call(f, f), f
        },
        when: function(c) {
            var d = 0,
                e = da.call(arguments),
                H = e.length,
                f = 1 !== H || c && j.isFunction(c.promise) ? H : 0,
                B = 1 === f ? c : j.Deferred(),
                p = function(c, z, d) {
                    return function(t) {
                        z[c] = this;
                        d[c] = 1 < arguments.length ? da.call(arguments) : t;
                        d === l ? B.notifyWith(z, d) : --f || B.resolveWith(z, d)
                    }
                },
                l, q, n;
            if (1 < H) {
                l = Array(H);
                q = Array(H);
                for (n = Array(H); d < H; d++) e[d] && j.isFunction(e[d].promise) ? e[d].promise().done(p(d, n, e)).fail(B.reject).progress(p(d, q, l)) : --f
            }
            return f || B.resolveWith(n, e), B.promise()
        }
    });
    var Rc = j,
        gb, R, Ka, ja, La, Ma, V, ka, Na, hb,
        wa, Nb, N = F.createElement("div");
    N.setAttribute("className", "t");
    N.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ka = N.getElementsByTagName("*");
    ja = N.getElementsByTagName("a")[0];
    ja.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ka || !Ka.length) gb = {};
    else {
        La = F.createElement("select");
        Ma = La.appendChild(F.createElement("option"));
        V = N.getElementsByTagName("input")[0];
        R = {
            leadingWhitespace: 3 === N.firstChild.nodeType,
            tbody: !N.getElementsByTagName("tbody").length,
            htmlSerialize: !!N.getElementsByTagName("link").length,
            style: /top/.test(ja.getAttribute("style")),
            hrefNormalized: "/a" === ja.getAttribute("href"),
            opacity: /^0.5/.test(ja.style.opacity),
            cssFloat: !!ja.style.cssFloat,
            checkOn: "on" === V.value,
            optSelected: Ma.selected,
            getSetAttribute: "t" !== N.className,
            enctype: !!F.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === F.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        V.checked = !0;
        R.noCloneChecked = V.cloneNode(!0).checked;
        La.disabled = !0;
        R.optDisabled = !Ma.disabled;
        try {
            delete N.test
        } catch (Td) {
            R.deleteExpando = !1
        }!N.addEventListener && N.attachEvent && N.fireEvent && (N.attachEvent("onclick", Nb = function() {
            R.noCloneEvent = !1
        }), N.cloneNode(!0).fireEvent("onclick"), N.detachEvent("onclick", Nb));
        V = F.createElement("input");
        V.value = "t";
        V.setAttribute("type", "radio");
        R.radioValue = "t" === V.value;
        V.setAttribute("checked",
            "checked");
        V.setAttribute("name", "t");
        N.appendChild(V);
        ka = F.createDocumentFragment();
        ka.appendChild(N.lastChild);
        R.checkClone = ka.cloneNode(!0).cloneNode(!0).lastChild.checked;
        R.appendChecked = V.checked;
        ka.removeChild(V);
        ka.appendChild(N);
        if (N.attachEvent)
            for (hb in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Na = "on" + hb, (wa = Na in N) || (N.setAttribute(Na, "return;"), wa = "function" == typeof N[Na]), R[hb + "Bubbles"] = wa;
        gb = (j(function() {
            var z, d, e, j, f = F.getElementsByTagName("body")[0];
            f && (z = F.createElement("div"), z.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(z, f.firstChild), d = F.createElement("div"), z.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", wa = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", R.reliableHiddenOffsets = wa && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                R.boxSizing = 4 === d.offsetWidth, R.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, c.getComputedStyle && (R.pixelPosition = "1%" !== (c.getComputedStyle(d, null) || {}).top, R.boxSizingReliable = "4px" === (c.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, j = F.createElement("div"), j.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", j.style.marginRight = j.style.width = "0", d.style.width = "1px", d.appendChild(j), R.reliableMarginRight = !parseFloat((c.getComputedStyle(j, null) || {}).marginRight)),
                "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", R.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", R.shrinkWrapBlocks = 3 !== d.offsetWidth, z.style.zoom = 1), f.removeChild(z))
        }), ka.removeChild(N), Ka = ja = La = Ma = V = ka = N = null, R)
    }
    Rc.support = gb;
    var xc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        wc = /([A-Z])/g;
    j.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (j.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(c) {
            return c = c.nodeType ? j.cache[c[j.expando]] : c[j.expando], !!c && !f(c)
        },
        data: function(c, t, e, H) {
            if (j.acceptData(c)) {
                var f, B, p = j.expando,
                    l = "string" == typeof t,
                    q = c.nodeType,
                    n = q ? j.cache : c,
                    v = q ? c[p] : c[p] && p;
                if (v && n[v] && (H || n[v].data) || !(l && e === d)) {
                    v || (q ? c[p] = v = j.deletedIds.pop() || j.guid++ : v = p);
                    n[v] || (n[v] = {},
                        q || (n[v].toJSON = j.noop));
                    if ("object" == typeof t || "function" == typeof t) H ? n[v] = j.extend(n[v], t) : n[v].data = j.extend(n[v].data, t);
                    return f = n[v], H || (f.data || (f.data = {}), f = f.data), e !== d && (f[j.camelCase(t)] = e), l ? (B = f[t], null == B && (B = f[j.camelCase(t)])) : B = f, B
                }
            }
        },
        removeData: function(c, d, e) {
            if (j.acceptData(c)) {
                var H, x, B, p = c.nodeType,
                    l = p ? j.cache : c,
                    q = p ? c[j.expando] : j.expando;
                if (l[q]) {
                    if (d && (H = e ? l[q] : l[q].data)) {
                        j.isArray(d) || (d in H ? d = [d] : (d = j.camelCase(d), d in H ? d = [d] : d = d.split(" ")));
                        x = 0;
                        for (B = d.length; x < B; x++) delete H[d[x]];
                        if (!(e ? f : j.isEmptyObject)(H)) return
                    }
                    if (e || !(delete l[q].data, !f(l[q]))) p ? j.cleanData([c], !0) : j.support.deleteExpando || l != l.window ? delete l[q] : l[q] = null
                }
            }
        },
        _data: function(c, d, e) {
            return j.data(c, d, e, !0)
        },
        acceptData: function(c) {
            var d = c.nodeName && j.noData[c.nodeName.toLowerCase()];
            return !d || !0 !== d && c.getAttribute("classid") === d
        }
    });
    j.fn.extend({
        data: function(c, t) {
            var s, f, x, B, p, l = this[0],
                q = 0,
                n = null;
            if (c === d) {
                if (this.length && (n = j.data(l), 1 === l.nodeType && !j._data(l, "parsedAttrs"))) {
                    x = l.attributes;
                    for (p = x.length; q <
                        p; q++) B = x[q].name, B.indexOf("data-") || (B = j.camelCase(B.substring(5)), e(l, B, n[B]));
                    j._data(l, "parsedAttrs", !0)
                }
                return n
            }
            return "object" == typeof c ? this.each(function() {
                j.data(this, c)
            }) : (s = c.split(".", 2), s[1] = s[1] ? "." + s[1] : "", f = s[1] + "!", j.access(this, function(t) {
                if (t === d) return n = this.triggerHandler("getData" + f, [s[0]]), n === d && l && (n = j.data(l, c), n = e(l, c, n)), n === d && s[1] ? this.data(s[0]) : n;
                s[1] = t;
                this.each(function() {
                    var d = j(this);
                    d.triggerHandler("setData" + f, s);
                    j.data(this, c, t);
                    d.triggerHandler("changeData" +
                        f, s)
                })
            }, null, t, 1 < arguments.length, null, !1))
        },
        removeData: function(c) {
            return this.each(function() {
                j.removeData(this, c)
            })
        }
    });
    j.extend({
        queue: function(c, d, e) {
            var f;
            if (c) return d = (d || "fx") + "queue", f = j._data(c, d), e && (!f || j.isArray(e) ? f = j._data(c, d, j.makeArray(e)) : f.push(e)), f || []
        },
        dequeue: function(c, d) {
            d = d || "fx";
            var e = j.queue(c, d),
                f = e.length,
                x = e.shift(),
                B = j._queueHooks(c, d),
                p = function() {
                    j.dequeue(c, d)
                };
            "inprogress" === x && (x = e.shift(), f--);
            x && ("fx" === d && e.unshift("inprogress"), delete B.stop, x.call(c, p, B));
            !f && B && B.empty.fire()
        },
        _queueHooks: function(c, d) {
            var e = d + "queueHooks";
            return j._data(c, e) || j._data(c, e, {
                empty: j.Callbacks("once memory").add(function() {
                    j.removeData(c, d + "queue", !0);
                    j.removeData(c, e, !0)
                })
            })
        }
    });
    j.fn.extend({
        queue: function(c, t) {
            var e = 2;
            return "string" != typeof c && (t = c, c = "fx", e--), arguments.length < e ? j.queue(this[0], c) : t === d ? this : this.each(function() {
                var d = j.queue(this, c, t);
                j._queueHooks(this, c);
                "fx" === c && "inprogress" !== d[0] && j.dequeue(this, c)
            })
        },
        dequeue: function(c) {
            return this.each(function() {
                j.dequeue(this,
                    c)
            })
        },
        delay: function(c, d) {
            return c = j.fx ? j.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, t) {
                var e = setTimeout(d, c);
                t.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(c) {
            return this.queue(c || "fx", [])
        },
        promise: function(c, t) {
            var e, f = 1,
                x = j.Deferred(),
                B = this,
                p = this.length,
                l = function() {
                    --f || x.resolveWith(B, [B])
                };
            "string" != typeof c && (t = c, c = d);
            for (c = c || "fx"; p--;)(e = j._data(B[p], c + "queueHooks")) && e.empty && (f++, e.empty.add(l));
            return l(), x.promise(t)
        }
    });
    var ea, Ob, Pb, Qb = /[\t\r\n]/g,
        Sc = /\r/g,
        Tc = /^(?:button|input)$/i,
        Uc = /^(?:button|input|object|select|textarea)$/i,
        Vc = /^a(?:rea|)$/i,
        Rb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Sb = j.support.getSetAttribute;
    j.fn.extend({
        attr: function(c, d) {
            return j.access(this, j.attr, c, d, 1 < arguments.length)
        },
        removeAttr: function(c) {
            return this.each(function() {
                j.removeAttr(this, c)
            })
        },
        prop: function(c, d) {
            return j.access(this, j.prop, c, d, 1 < arguments.length)
        },
        removeProp: function(c) {
            return c = j.propFix[c] ||
                c, this.each(function() {
                    try {
                        this[c] = d, delete this[c]
                    } catch (t) {}
                })
        },
        addClass: function(c) {
            var d, e, f, x, B, p, l;
            if (j.isFunction(c)) return this.each(function(d) {
                j(this).addClass(c.call(this, d, this.className))
            });
            if (c && "string" == typeof c) {
                d = c.split(ia);
                e = 0;
                for (f = this.length; e < f; e++)
                    if (x = this[e], 1 === x.nodeType)
                        if (!x.className && 1 === d.length) x.className = c;
                        else {
                            B = " " + x.className + " ";
                            p = 0;
                            for (l = d.length; p < l; p++) 0 > B.indexOf(" " + d[p] + " ") && (B += d[p] + " ");
                            x.className = j.trim(B)
                        }
            }
            return this
        },
        removeClass: function(c) {
            var t,
                e, f, x, B, p, l;
            if (j.isFunction(c)) return this.each(function(d) {
                j(this).removeClass(c.call(this, d, this.className))
            });
            if (c && "string" == typeof c || c === d) {
                t = (c || "").split(ia);
                p = 0;
                for (l = this.length; p < l; p++)
                    if (f = this[p], 1 === f.nodeType && f.className) {
                        e = (" " + f.className + " ").replace(Qb, " ");
                        x = 0;
                        for (B = t.length; x < B; x++)
                            for (; 0 <= e.indexOf(" " + t[x] + " ");) e = e.replace(" " + t[x] + " ", " ");
                        f.className = c ? j.trim(e) : ""
                    }
            }
            return this
        },
        toggleClass: function(c, d) {
            var e = typeof c,
                f = "boolean" == typeof d;
            return j.isFunction(c) ? this.each(function(e) {
                j(this).toggleClass(c.call(this,
                    e, this.className, d), d)
            }) : this.each(function() {
                if ("string" === e)
                    for (var x, B = 0, p = j(this), l = d, q = c.split(ia); x = q[B++];) l = f ? l : !p.hasClass(x), p[l ? "addClass" : "removeClass"](x);
                else if ("undefined" === e || "boolean" === e) this.className && j._data(this, "__className__", this.className), this.className = this.className || !1 === c ? "" : j._data(this, "__className__") || ""
            })
        },
        hasClass: function(c) {
            c = " " + c + " ";
            for (var d = 0, e = this.length; d < e; d++)
                if (1 === this[d].nodeType && 0 <= (" " + this[d].className + " ").replace(Qb, " ").indexOf(c)) return !0;
            return !1
        },
        val: function(c) {
            var t, e, f, x = this[0];
            if (arguments.length) return f = j.isFunction(c), this.each(function(e) {
                var s, x = j(this);
                if (1 === this.nodeType && (f ? s = c.call(this, e, x.val()) : s = c, null == s ? s = "" : "number" == typeof s ? s += "" : j.isArray(s) && (s = j.map(s, function(c) {
                    return null == c ? "" : c + ""
                })), t = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], !t || !("set" in t) || t.set(this, s, "value") === d)) this.value = s
            });
            if (x) return t = j.valHooks[x.type] || j.valHooks[x.nodeName.toLowerCase()], t && "get" in t && (e = t.get(x,
                "value")) !== d ? e : (e = x.value, "string" == typeof e ? e.replace(Sc, "") : null == e ? "" : e)
        }
    });
    j.extend({
        valHooks: {
            option: {
                get: function(c) {
                    var d = c.attributes.value;
                    return !d || d.specified ? c.value : c.text
                }
            },
            select: {
                get: function(c) {
                    var d, e, f = c.selectedIndex,
                        x = [],
                        B = c.options,
                        p = "select-one" === c.type;
                    if (0 > f) return null;
                    c = p ? f : 0;
                    for (e = p ? f + 1 : B.length; c < e; c++)
                        if (d = B[c], d.selected && (j.support.optDisabled ? !d.disabled : null === d.getAttribute("disabled")) && (!d.parentNode.disabled || !j.nodeName(d.parentNode, "optgroup"))) {
                            d = j(d).val();
                            if (p) return d;
                            x.push(d)
                        }
                    return p && !x.length && B.length ? j(B[f]).val() : x
                },
                set: function(c, d) {
                    var e = j.makeArray(d);
                    return j(c).find("option").each(function() {
                        this.selected = 0 <= j.inArray(j(this).val(), e)
                    }), e.length || (c.selectedIndex = -1), e
                }
            }
        },
        attrFn: {},
        attr: function(c, t, e, f) {
            var x, B, p = c.nodeType;
            if (c && !(3 === p || 8 === p || 2 === p)) {
                if (f && j.isFunction(j.fn[t])) return j(c)[t](e);
                if ("undefined" == typeof c.getAttribute) return j.prop(c, t, e);
                (f = 1 !== p || !j.isXMLDoc(c)) && (t = t.toLowerCase(), B = j.attrHooks[t] || (Rb.test(t) ? Ob :
                    ea));
                if (e !== d) {
                    if (null === e) {
                        j.removeAttr(c, t);
                        return
                    }
                    return B && "set" in B && f && (x = B.set(c, e, t)) !== d ? x : (c.setAttribute(t, e + ""), e)
                }
                return B && "get" in B && f && null !== (x = B.get(c, t)) ? x : (x = c.getAttribute(t), null === x ? d : x)
            }
        },
        removeAttr: function(c, d) {
            var e, f, x, B, p = 0;
            if (d && 1 === c.nodeType)
                for (f = d.split(ia); p < f.length; p++)(x = f[p]) && (e = j.propFix[x] || x, B = Rb.test(x), B || j.attr(c, x, ""), c.removeAttribute(Sb ? x : e), B && e in c && (c[e] = !1))
        },
        attrHooks: {
            type: {
                set: function(c, d) {
                    if (Tc.test(c.nodeName) && c.parentNode) j.error("type property can't be changed");
                    else if (!j.support.radioValue && "radio" === d && j.nodeName(c, "input")) {
                        var e = c.value;
                        return c.setAttribute("type", d), e && (c.value = e), d
                    }
                }
            },
            value: {
                get: function(c, d) {
                    return ea && j.nodeName(c, "button") ? ea.get(c, d) : d in c ? c.value : null
                },
                set: function(c, d, e) {
                    if (ea && j.nodeName(c, "button")) return ea.set(c, d, e);
                    c.value = d
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(c, e, s) {
            var f, x, B, p = c.nodeType;
            if (c && !(3 === p || 8 === p || 2 === p)) return B = 1 !== p || !j.isXMLDoc(c), B && (e = j.propFix[e] || e, x = j.propHooks[e]), s !== d ? x && "set" in x && (f = x.set(c, s, e)) !== d ? f : c[e] = s : x && "get" in x && null !== (f = x.get(c, e)) ? f : c[e]
        },
        propHooks: {
            tabIndex: {
                get: function(c) {
                    var e = c.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : Uc.test(c.nodeName) || Vc.test(c.nodeName) && c.href ? 0 : d
                }
            }
        }
    });
    Ob = {
        get: function(c,
            e) {
            var s, f = j.prop(c, e);
            return !0 === f || "boolean" != typeof f && (s = c.getAttributeNode(e)) && !1 !== s.nodeValue ? e.toLowerCase() : d
        },
        set: function(c, d, e) {
            var f;
            return !1 === d ? j.removeAttr(c, e) : (f = j.propFix[e] || e, f in c && (c[f] = !0), c.setAttribute(e, e.toLowerCase())), e
        }
    };
    Sb || (Pb = {
        name: !0,
        id: !0,
        coords: !0
    }, ea = j.valHooks.button = {
        get: function(c, e) {
            var j;
            return j = c.getAttributeNode(e), j && (Pb[e] ? "" !== j.value : j.specified) ? j.value : d
        },
        set: function(c, d, e) {
            var j = c.getAttributeNode(e);
            return j || (j = F.createAttribute(e), c.setAttributeNode(j)),
                j.value = d + ""
        }
    }, j.each(["width", "height"], function(c, d) {
        j.attrHooks[d] = j.extend(j.attrHooks[d], {
            set: function(c, z) {
                if ("" === z) return c.setAttribute(d, "auto"), z
            }
        })
    }), j.attrHooks.contenteditable = {
        get: ea.get,
        set: function(c, d, e) {
            "" === d && (d = "false");
            ea.set(c, d, e)
        }
    });
    j.support.hrefNormalized || j.each(["href", "src", "width", "height"], function(c, e) {
        j.attrHooks[e] = j.extend(j.attrHooks[e], {
            get: function(c) {
                c = c.getAttribute(e, 2);
                return null === c ? d : c
            }
        })
    });
    j.support.style || (j.attrHooks.style = {
        get: function(c) {
            return c.style.cssText.toLowerCase() ||
                d
        },
        set: function(c, d) {
            return c.style.cssText = d + ""
        }
    });
    j.support.optSelected || (j.propHooks.selected = j.extend(j.propHooks.selected, {
        get: function(c) {
            c = c.parentNode;
            return c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex), null
        }
    }));
    j.support.enctype || (j.propFix.enctype = "encoding");
    j.support.checkOn || j.each(["radio", "checkbox"], function() {
        j.valHooks[this] = {
            get: function(c) {
                return null === c.getAttribute("value") ? "on" : c.value
            }
        }
    });
    j.each(["radio", "checkbox"], function() {
        j.valHooks[this] = j.extend(j.valHooks[this], {
            set: function(c, d) {
                if (j.isArray(d)) return c.checked = 0 <= j.inArray(j(c).val(), d)
            }
        })
    });
    var ib = /^(?:textarea|input|select)$/i,
        Tb = /^([^\.]*|)(?:\.(.+)|)$/,
        Wc = /(?:^|\s)hover(\.\S+|)\b/,
        Xc = /^key/,
        Yc = /^(?:mouse|contextmenu)|click/,
        Ub = /^(?:focusinfocus|focusoutblur)$/,
        Vb = function(c) {
            return j.event.special.hover ? c : c.replace(Wc, "mouseenter$1 mouseleave$1")
        };
    j.event = {
        add: function(c, e, s, f, x) {
            var B, p, l, q, n, v, m, D, y;
            if (!(3 === c.nodeType || 8 === c.nodeType || !e || !s || !(B = j._data(c)))) {
                s.handler && (m = s, s = m.handler, x = m.selector);
                s.guid || (s.guid = j.guid++);
                (l = B.events) || (B.events = l = {});
                (p = B.handle) || (B.handle = p = function(c) {
                    return "undefined" != typeof j && (!c || j.event.triggered !== c.type) ? j.event.dispatch.apply(p.elem, arguments) : d
                }, p.elem = c);
                e = j.trim(Vb(e)).split(" ");
                for (B = 0; B < e.length; B++) {
                    q = Tb.exec(e[B]) || [];
                    n = q[1];
                    v = (q[2] || "").split(".").sort();
                    y = j.event.special[n] || {};
                    n = (x ? y.delegateType : y.bindType) || n;
                    y = j.event.special[n] || {};
                    q = j.extend({
                        type: n,
                        origType: q[1],
                        data: f,
                        handler: s,
                        guid: s.guid,
                        selector: x,
                        needsContext: x && j.expr.match.needsContext.test(x),
                        namespace: v.join(".")
                    }, m);
                    D = l[n];
                    if (!D && (D = l[n] = [], D.delegateCount = 0, !y.setup || !1 === y.setup.call(c, f, v, p))) c.addEventListener ? c.addEventListener(n, p, !1) : c.attachEvent && c.attachEvent("on" + n, p);
                    y.add && (y.add.call(c, q), q.handler.guid || (q.handler.guid = s.guid));
                    x ? D.splice(D.delegateCount++, 0, q) : D.push(q);
                    j.event.global[n] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function(c, d, e, f, x) {
            var B, p, l, q, n, v, m, D, y, C, u = j.hasData(c) && j._data(c);
            if (u && (m = u.events)) {
                d = j.trim(Vb(d || "")).split(" ");
                for (B = 0; B < d.length; B++)
                    if (p = Tb.exec(d[B]) || [], l = q = p[1], p = p[2], l) {
                        D = j.event.special[l] || {};
                        l = (f ? D.delegateType : D.bindType) || l;
                        y = m[l] || [];
                        n = y.length;
                        p = p ? RegExp("(^|\\.)" + p.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (v = 0; v < y.length; v++) C = y[v], (x || q === C.origType) && (!e || e.guid === C.guid) && (!p || p.test(C.namespace)) && (!f || f === C.selector || "**" === f && C.selector) && (y.splice(v--, 1), C.selector && y.delegateCount--, D.remove && D.remove.call(c, C));
                        0 === y.length && n !== y.length && ((!D.teardown || !1 === D.teardown.call(c, p, u.handle)) && j.removeEvent(c,
                            l, u.handle), delete m[l])
                    } else
                        for (l in m) j.event.remove(c, l + d[B], e, f, !0);
                j.isEmptyObject(m) && (delete u.handle, j.removeData(c, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(z, e, s, f) {
            if (!s || 3 !== s.nodeType && 8 !== s.nodeType) {
                var x, B, p, l, q, n, v, m = z.type || z;
                l = [];
                if (!Ub.test(m + j.event.triggered) && (0 <= m.indexOf("!") && (m = m.slice(0, -1), x = !0), 0 <= m.indexOf(".") && (l = m.split("."), m = l.shift(), l.sort()), s && !j.event.customEvent[m] || j.event.global[m]))
                    if (z = "object" == typeof z ? z[j.expando] ?
                        z : new j.Event(m, z) : new j.Event(m), z.type = m, z.isTrigger = !0, z.exclusive = x, z.namespace = l.join("."), z.namespace_re = z.namespace ? RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0 > m.indexOf(":") ? "on" + m : "", s) {
                        if (z.result = d, z.target || (z.target = s), e = null != e ? j.makeArray(e) : [], e.unshift(z), q = j.event.special[m] || {}, !(q.trigger && !1 === q.trigger.apply(s, e))) {
                            v = [
                                [s, q.bindType || m]
                            ];
                            if (!f && !q.noBubble && !j.isWindow(s)) {
                                B = q.delegateType || m;
                                x = Ub.test(B + m) ? s : s.parentNode;
                                for (p = s; x; x = x.parentNode) v.push([x, B]),
                                    p = x;
                                p === (s.ownerDocument || F) && v.push([p.defaultView || p.parentWindow || c, B])
                            }
                            for (B = 0; B < v.length && !z.isPropagationStopped(); B++) x = v[B][0], z.type = v[B][1], (n = (j._data(x, "events") || {})[z.type] && j._data(x, "handle")) && n.apply(x, e), (n = l && x[l]) && j.acceptData(x) && n.apply && !1 === n.apply(x, e) && z.preventDefault();
                            return z.type = m, !f && !z.isDefaultPrevented() && (!q._default || !1 === q._default.apply(s.ownerDocument, e)) && ("click" !== m || !j.nodeName(s, "a")) && j.acceptData(s) && l && s[m] && ("focus" !== m && "blur" !== m || 0 !== z.target.offsetWidth) &&
                                !j.isWindow(s) && (p = s[l], p && (s[l] = null), j.event.triggered = m, s[m](), j.event.triggered = d, p && (s[l] = p)), z.result
                        }
                    } else
                        for (B in s = j.cache, s) s[B].events && s[B].events[m] && j.event.trigger(z, e, s[B].handle.elem, !0)
            }
        },
        dispatch: function(z) {
            z = j.event.fix(z || c.event);
            var e, s, f, x, l, p, q = (j._data(this, "events") || {})[z.type] || [],
                n = q.delegateCount,
                v = da.call(arguments),
                m = !z.exclusive && !z.namespace,
                D = j.event.special[z.type] || {},
                y = [];
            v[0] = z;
            z.delegateTarget = this;
            if (!(D.preDispatch && !1 === D.preDispatch.call(this, z))) {
                if (n &&
                    (!z.button || "click" !== z.type))
                    for (s = z.target; s != this; s = s.parentNode || this)
                        if (!0 !== s.disabled || "click" !== z.type) {
                            x = {};
                            l = [];
                            for (e = 0; e < n; e++) f = q[e], p = f.selector, x[p] === d && (x[p] = f.needsContext ? 0 <= j(p, this).index(s) : j.find(p, this, null, [s]).length), x[p] && l.push(f);
                            l.length && y.push({
                                elem: s,
                                matches: l
                            })
                        }
                q.length > n && y.push({
                    elem: this,
                    matches: q.slice(n)
                });
                for (e = 0; e < y.length && !z.isPropagationStopped(); e++) {
                    x = y[e];
                    z.currentTarget = x.elem;
                    for (s = 0; s < x.matches.length && !z.isImmediatePropagationStopped(); s++)
                        if (f = x.matches[s],
                            m || !z.namespace && !f.namespace || z.namespace_re && z.namespace_re.test(f.namespace)) z.data = f.data, z.handleObj = f, f = ((j.event.special[f.origType] || {}).handle || f.handler).apply(x.elem, v), f !== d && (z.result = f, !1 === f && (z.preventDefault(), z.stopPropagation()))
                }
                return D.postDispatch && D.postDispatch.call(this, z), z.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(c, d) {
                return null == c.which && (c.which = null != d.charCode ? d.charCode : d.keyCode), c
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(c, e) {
                var j, f, x, l = e.button,
                    p = e.fromElement;
                return null == c.pageX && null != e.clientX && (j = c.target.ownerDocument || F, f = j.documentElement, x = j.body, c.pageX = e.clientX + (f && f.scrollLeft || x && x.scrollLeft || 0) - (f && f.clientLeft ||
                    x && x.clientLeft || 0), c.pageY = e.clientY + (f && f.scrollTop || x && x.scrollTop || 0) - (f && f.clientTop || x && x.clientTop || 0)), !c.relatedTarget && p && (c.relatedTarget = p === c.target ? e.toElement : p), !c.which && l !== d && (c.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0), c
            }
        },
        fix: function(c) {
            if (c[j.expando]) return c;
            var d, e, f = c,
                x = j.event.fixHooks[c.type] || {},
                l = x.props ? this.props.concat(x.props) : this.props;
            c = j.Event(f);
            for (d = l.length; d;) e = l[--d], c[e] = f[e];
            return c.target || (c.target = f.srcElement || F), 3 === c.target.nodeType && (c.target = c.target.parentNode),
                c.metaKey = !!c.metaKey, x.filter ? x.filter(c, f) : c
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(c, d, e) {
                    j.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function(c, d) {
                    this.onbeforeunload === d && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(c, d, e, f) {
            c = j.extend(new j.Event, e, {
                type: c,
                isSimulated: !0,
                originalEvent: {}
            });
            f ? j.event.trigger(c, null, d) : j.event.dispatch.call(d, c);
            c.isDefaultPrevented() && e.preventDefault()
        }
    };
    j.event.handle =
        j.event.dispatch;
    j.removeEvent = F.removeEventListener ? function(c, d, e) {
        c.removeEventListener && c.removeEventListener(d, e, !1)
    } : function(c, d, e) {
        d = "on" + d;
        c.detachEvent && ("undefined" == typeof c[d] && (c[d] = null), c.detachEvent(d, e))
    };
    j.Event = function(c, d) {
        if (this instanceof j.Event) c && c.type ? (this.originalEvent = c, this.type = c.type, this.isDefaultPrevented = c.defaultPrevented || !1 === c.returnValue || c.getPreventDefault && c.getPreventDefault() ? m : l) : this.type = c, d && j.extend(this, d), this.timeStamp = c && c.timeStamp || j.now(),
            this[j.expando] = !0;
        else return new j.Event(c, d)
    };
    j.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var c = this.originalEvent;
            c && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var c = this.originalEvent;
            c && (c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        },
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l
    };
    j.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(c, d) {
        j.event.special[c] = {
            delegateType: d,
            bindType: d,
            handle: function(c) {
                var e, z = c.relatedTarget,
                    f = c.handleObj;
                if (!z || z !== this && !j.contains(this, z)) c.type = f.origType, e = f.handler.apply(this, arguments), c.type = d;
                return e
            }
        }
    });
    j.support.submitBubbles || (j.event.special.submit = {
        setup: function() {
            if (j.nodeName(this, "form")) return !1;
            j.event.add(this, "click._submit keypress._submit", function(c) {
                c = c.target;
                (c = j.nodeName(c, "input") || j.nodeName(c, "button") ?
                    c.form : d) && !j._data(c, "_submit_attached") && (j.event.add(c, "submit._submit", function(c) {
                    c._submit_bubble = !0
                }), j._data(c, "_submit_attached", !0))
            })
        },
        postDispatch: function(c) {
            c._submit_bubble && (delete c._submit_bubble, this.parentNode && !c.isTrigger && j.event.simulate("submit", this.parentNode, c, !0))
        },
        teardown: function() {
            if (j.nodeName(this, "form")) return !1;
            j.event.remove(this, "._submit")
        }
    });
    j.support.changeBubbles || (j.event.special.change = {
        setup: function() {
            if (ib.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) j.event.add(this, "propertychange._change", function(c) {
                    "checked" === c.originalEvent.propertyName && (this._just_changed = !0)
                }), j.event.add(this, "click._change", function(c) {
                    this._just_changed && !c.isTrigger && (this._just_changed = !1);
                    j.event.simulate("change", this, c, !0)
                });
                return !1
            }
            j.event.add(this, "beforeactivate._change", function(c) {
                c = c.target;
                ib.test(c.nodeName) && !j._data(c, "_change_attached") && (j.event.add(c, "change._change", function(c) {
                    this.parentNode && !c.isSimulated && !c.isTrigger &&
                        j.event.simulate("change", this.parentNode, c, !0)
                }), j._data(c, "_change_attached", !0))
            })
        },
        handle: function(c) {
            var d = c.target;
            if (this !== d || c.isSimulated || c.isTrigger || "radio" !== d.type && "checkbox" !== d.type) return c.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return j.event.remove(this, "._change"), !ib.test(this.nodeName)
        }
    });
    j.support.focusinBubbles || j.each({
        focus: "focusin",
        blur: "focusout"
    }, function(c, d) {
        var e = 0,
            f = function(c) {
                j.event.simulate(d, c.target, j.event.fix(c), !0)
            };
        j.event.special[d] = {
            setup: function() {
                0 === e++ && F.addEventListener(c, f, !0)
            },
            teardown: function() {
                0 === --e && F.removeEventListener(c, f, !0)
            }
        }
    });
    j.fn.extend({
        on: function(c, e, s, f, x) {
            var B, p;
            if ("object" == typeof c) {
                "string" != typeof e && (s = s || e, e = d);
                for (p in c) this.on(p, e, s, c[p], x);
                return this
            }
            null == s && null == f ? (f = e, s = e = d) : null == f && ("string" == typeof e ? (f = s, s = d) : (f = s, s = e, e = d));
            if (!1 === f) f = l;
            else if (!f) return this;
            return 1 === x && (B = f, f = function(c) {
                return j().off(c), B.apply(this, arguments)
            }, f.guid = B.guid || (B.guid = j.guid++)), this.each(function() {
                j.event.add(this,
                    c, f, s, e)
            })
        },
        one: function(c, d, e, j) {
            return this.on(c, d, e, j, 1)
        },
        off: function(c, e, s) {
            var f, x;
            if (c && c.preventDefault && c.handleObj) return f = c.handleObj, j(c.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if ("object" == typeof c) {
                for (x in c) this.off(x, e, c[x]);
                return this
            }
            if (!1 === e || "function" == typeof e) s = e, e = d;
            return !1 === s && (s = l), this.each(function() {
                j.event.remove(this, c, s, e)
            })
        },
        bind: function(c, d, e) {
            return this.on(c, null, d, e)
        },
        unbind: function(c, d) {
            return this.off(c,
                null, d)
        },
        live: function(c, d, e) {
            return j(this.context).on(c, this.selector, d, e), this
        },
        die: function(c, d) {
            return j(this.context).off(c, this.selector || "**", d), this
        },
        delegate: function(c, d, e, j) {
            return this.on(d, c, e, j)
        },
        undelegate: function(c, d, e) {
            return 1 === arguments.length ? this.off(c, "**") : this.off(d, c || "**", e)
        },
        trigger: function(c, d) {
            return this.each(function() {
                j.event.trigger(c, d, this)
            })
        },
        triggerHandler: function(c, d) {
            if (this[0]) return j.event.trigger(c, d, this[0], !0)
        },
        toggle: function(c) {
            var d = arguments,
                e =
                c.guid || j.guid++,
                f = 0,
                x = function(e) {
                    var s = (j._data(this, "lastToggle" + c.guid) || 0) % f;
                    return j._data(this, "lastToggle" + c.guid, s + 1), e.preventDefault(), d[s].apply(this, arguments) || !1
                };
            for (x.guid = e; f < d.length;) d[f++].guid = e;
            return this.click(x)
        },
        hover: function(c, d) {
            return this.mouseenter(c).mouseleave(d || c)
        }
    });
    j.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(c, d) {
            j.fn[d] = function(c, e) {
                return null == e && (e = c, c = null), 0 < arguments.length ? this.on(d, null, c, e) : this.trigger(d)
            };
            Xc.test(d) && (j.event.fixHooks[d] = j.event.keyHooks);
            Yc.test(d) && (j.event.fixHooks[d] = j.event.mouseHooks)
        });
    var Zc = c,
        J = function(c, d, e, j) {
            e = e || [];
            d = d || Z;
            var f, l, p, q, n = d.nodeType;
            if (!c || "string" != typeof c) return e;
            if (1 !== n && 9 !== n) return [];
            p = Oa(d);
            if (!p && !j && (f = $c.exec(c)))
                if (q = f[1])
                    if (9 === n) {
                        l = d.getElementById(q);
                        if (!l || !l.parentNode) return e;
                        if (l.id === q) return e.push(l), e
                    } else {
                        if (d.ownerDocument &&
                            (l = d.ownerDocument.getElementById(q)) && Wb(d, l) && l.id === q) return e.push(l), e
                    } else {
                if (f[2]) return qa.apply(e, ra.call(d.getElementsByTagName(c), 0)), e;
                if ((q = f[3]) && Xb && d.getElementsByClassName) return qa.apply(e, ra.call(d.getElementsByClassName(q), 0)), e
            }
            return jb(c.replace(Pa, "$1"), d, e, j, p)
        },
        xa = function(c) {
            return function(d) {
                return "input" === d.nodeName.toLowerCase() && d.type === c
            }
        },
        Yb = function(c) {
            return function(d) {
                var e = d.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && d.type === c
            }
        },
        la = function(c) {
            return aa(function(d) {
                return d = +d, aa(function(e, j) {
                    for (var f, l = c([], e.length, d), p = l.length; p--;) e[f = l[p]] && (e[f] = !(j[f] = e[f]))
                })
            })
        },
        Qa = function(c, d, e) {
            if (c === d) return e;
            for (c = c.nextSibling; c;) {
                if (c === d) return -1;
                c = c.nextSibling
            }
            return 1
        },
        Sa = function(c, d) {
            var e, j, f, l, p, q, n;
            if (p = Zb[Q][c]) return d ? 0 : p.slice(0);
            p = c;
            q = [];
            for (n = K.preFilter; p;) {
                if (!e || (j = ad.exec(p))) j && (p = p.slice(j[0].length)), q.push(f = []);
                e = !1;
                if (j = bd.exec(p)) f.push(e = new $b(j.shift())), p = p.slice(e.length), e.type = j[0].replace(Pa, " ");
                for (l in K.filter)(j = Ra[l].exec(p)) &&
                    (!n[l] || (j = n[l](j, Z, !0))) && (f.push(e = new $b(j.shift())), p = p.slice(e.length), e.type = l, e.matches = j);
                if (!e) break
            }
            return d ? p.length : p ? J.error(c) : Zb(c, q).slice(0)
        },
        lb = function(c, d, e) {
            var j = d.dir,
                f = e && "parentNode" === d.dir,
                l = cd++;
            return d.first ? function(d, e, t) {
                for (; d = d[j];)
                    if (f || 1 === d.nodeType) return c(d, e, t)
            } : function(d, e, t) {
                if (t)
                    for (; d = d[j];) {
                        if ((f || 1 === d.nodeType) && c(d, e, t)) return d
                    } else
                        for (var s, q = ya + " " + l + " ", n = q + kb; d = d[j];)
                            if (f || 1 === d.nodeType) {
                                if ((s = d[Q]) === n) return d.sizset;
                                if ("string" == typeof s &&
                                    0 === s.indexOf(q)) {
                                    if (d.sizset) return d
                                } else {
                                    d[Q] = n;
                                    if (c(d, e, t)) return d.sizset = !0, d;
                                    d.sizset = !1
                                }
                            }
            }
        },
        mb = function(c) {
            return 1 < c.length ? function(d, e, j) {
                for (var f = c.length; f--;)
                    if (!c[f](d, e, j)) return !1;
                return !0
            } : c[0]
        },
        Ta = function(c, d, e, j, f) {
            for (var l, p = [], q = 0, n = c.length, v = null != d; q < n; q++)
                if (l = c[q])
                    if (!e || e(l, j, f)) p.push(l), v && d.push(q);
            return p
        },
        nb = function(c, d, e, j, f, l) {
            return j && !j[Q] && (j = nb(j)), f && !f[Q] && (f = nb(f, l)), aa(function(p, l, q, B) {
                if (!p || !f) {
                    var n, v, m = [],
                        D = [],
                        y = l.length;
                    if (!(v = p)) {
                        v = d || "*";
                        var C =
                            q.nodeType ? [q] : q,
                            u = [];
                        n = 0;
                        for (var E = C.length; n < E; n++) J(v, C[n], u, p);
                        v = u
                    }
                    C = c && (p || !d) ? Ta(v, m, c, q, B) : v;
                    u = e ? f || (p ? c : y || j) ? [] : l : C;
                    e && e(C, u, q, B);
                    if (j) {
                        v = Ta(u, D);
                        j(v, [], q, B);
                        for (q = v.length; q--;)
                            if (n = v[q]) u[D[q]] = !(C[D[q]] = n)
                    }
                    if (p)
                        for (q = c && u.length; q--;) {
                            if (n = u[q]) p[m[q]] = !(l[m[q]] = n)
                        } else u = Ta(u === l ? u.splice(y, u.length) : u), f ? f(null, l, u, B) : qa.apply(l, u)
                }
            })
        },
        ob = function(c) {
            var d, e, j, f = c.length,
                l = K.relative[c[0].type];
            e = l || K.relative[" "];
            for (var p = l ? 1 : 0, q = lb(function(c) {
                return c === d
            }, e, !0), n = lb(function(c) {
                return -1 <
                    ac.call(d, c)
            }, e, !0), v = [
                function(c, e, z) {
                    return !l && (z || e !== Ua) || ((d = e).nodeType ? q(c, e, z) : n(c, e, z))
                }
            ]; p < f; p++)
                if (e = K.relative[c[p].type]) v = [lb(mb(v), e)];
                else {
                    e = K.filter[c[p].type].apply(null, c[p].matches);
                    if (e[Q]) {
                        for (j = ++p; j < f && !K.relative[c[j].type]; j++);
                        return nb(1 < p && mb(v), 1 < p && c.slice(0, p - 1).join("").replace(Pa, "$1"), e, p < j && ob(c.slice(p, j)), j < f && ob(c = c.slice(j)), j < f && c.join(""))
                    }
                    v.push(e)
                }
            return mb(v)
        },
        jb = function(c, d, e, j, f) {
            var l, p, q, n, v = Sa(c);
            if (!j && 1 === v.length) {
                p = v[0] = v[0].slice(0);
                if (2 < p.length &&
                    "ID" === (q = p[0]).type && 9 === d.nodeType && !f && K.relative[p[1].type]) {
                    d = K.find.ID(q.matches[0].replace(ma, ""), d, f)[0];
                    if (!d) return e;
                    c = c.slice(p.shift().length)
                }
                for (l = Ra.POS.test(c) ? -1 : p.length - 1; 0 <= l; l--) {
                    q = p[l];
                    if (K.relative[n = q.type]) break;
                    if (n = K.find[n])
                        if (j = n(q.matches[0].replace(ma, ""), pb.test(p[0].type) && d.parentNode || d, f)) {
                            p.splice(l, 1);
                            c = j.length && p.join("");
                            if (!c) return qa.apply(e, ra.call(j, 0)), e;
                            break
                        }
                }
            }
            return qb(c, v)(j, d, f, e, pb.test(c)), e
        },
        bc = function() {},
        kb, rb, K, Va, Oa, Wb, qb, sb, za, Ua, cc = !0,
        Q = ("sizcache" + Math.random()).replace(".", ""),
        $b = String,
        Z = Zc.document,
        Y = Z.documentElement,
        ya = 0,
        cd = 0,
        dd = [].pop,
        qa = [].push,
        ra = [].slice,
        ac = [].indexOf || function(c) {
            for (var d = 0, e = this.length; d < e; d++)
                if (this[d] === c) return d;
            return -1
        },
        aa = function(c, d) {
            return c[Q] = null == d || d, c
        },
        tb = function() {
            var c = {},
                d = [];
            return aa(function(e, j) {
                return d.push(e) > K.cacheLength && delete c[d.shift()], c[e] = j
            }, c)
        },
        dc = tb(),
        Zb = tb(),
        ec = tb(),
        fc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        ub = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + fc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Pa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        ad = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        bd = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ed = RegExp(ub),
        $c = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        pb = /[\x20\t\r\n\f]*[+~]/,
        fd = /h\d/i,
        gd = /input|select|textarea|button/i,
        ma = /\\(?!\\)/g,
        Ra = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + fc),
            PSEUDO: RegExp("^" + ub),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        fa = function(c) {
            var d = Z.createElement("div");
            try {
                return c(d)
            } catch (e) {
                return !1
            } finally {}
        },
        hd = fa(function(c) {
            return c.appendChild(Z.createComment("")), !c.getElementsByTagName("*").length
        }),
        id = fa(function(c) {
            return c.innerHTML = "<a href='#'></a>", c.firstChild && "undefined" !== typeof c.firstChild.getAttribute && "#" === c.firstChild.getAttribute("href")
        }),
        jd = fa(function(c) {
            c.innerHTML = "<select></select>";
            c = typeof c.lastChild.getAttribute("multiple");
            return "boolean" !== c && "string" !== c
        }),
        Xb = fa(function(c) {
            return c.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !c.getElementsByClassName || !c.getElementsByClassName("e").length ? !1 : (c.lastChild.className = "e", 2 === c.getElementsByClassName("e").length)
        }),
        kd = fa(function(c) {
            c.id = Q + 0;
            c.innerHTML = "<a name='" + Q + "'></a><div name='" + Q + "'></div>";
            Y.insertBefore(c, Y.firstChild);
            var d = Z.getElementsByName &&
                Z.getElementsByName(Q).length === 2 + Z.getElementsByName(Q + 0).length;
            return rb = !Z.getElementById(Q), Y.removeChild(c), d
        });
    try {
        ra.call(Y.childNodes, 0)[0].nodeType
    } catch (Ud) {
        ra = function(c) {
            for (var d, e = []; d = this[c]; c++) e.push(d);
            return e
        }
    }
    J.matches = function(c, d) {
        return J(c, null, null, d)
    };
    J.matchesSelector = function(c, d) {
        return 0 < J(d, null, null, [c]).length
    };
    Va = J.getText = function(c) {
        var d, e = "",
            j = 0;
        if (d = c.nodeType)
            if (1 === d || 9 === d || 11 === d) {
                if ("string" == typeof c.textContent) return c.textContent;
                for (c = c.firstChild; c; c =
                    c.nextSibling) e += Va(c)
            } else {
                if (3 === d || 4 === d) return c.nodeValue
            } else
            for (; d = c[j]; j++) e += Va(d);
        return e
    };
    Oa = J.isXML = function(c) {
        return (c = c && (c.ownerDocument || c).documentElement) ? "HTML" !== c.nodeName : !1
    };
    Wb = J.contains = Y.contains ? function(c, d) {
        var e = 9 === c.nodeType ? c.documentElement : c,
            j = d && d.parentNode;
        return c === j || !(!j || !(1 === j.nodeType && e.contains && e.contains(j)))
    } : Y.compareDocumentPosition ? function(c, d) {
        return d && !!(c.compareDocumentPosition(d) & 16)
    } : function(c, d) {
        for (; d = d.parentNode;)
            if (d === c) return !0;
        return !1
    };
    J.attr = function(c, d) {
        var e, j = Oa(c);
        return j || (d = d.toLowerCase()), (e = K.attrHandle[d]) ? e(c) : j || jd ? c.getAttribute(d) : (e = c.getAttributeNode(d), e ? "boolean" == typeof c[d] ? c[d] ? d : null : e.specified ? e.value : null : null)
    };
    K = J.selectors = {
        cacheLength: 50,
        createPseudo: aa,
        match: Ra,
        attrHandle: id ? {} : {
            href: function(c) {
                return c.getAttribute("href", 2)
            },
            type: function(c) {
                return c.getAttribute("type")
            }
        },
        find: {
            ID: rb ? function(c, d, e) {
                if ("undefined" !== typeof d.getElementById && !e) return (c = d.getElementById(c)) && c.parentNode ? [c] : []
            } : function(c, d, e) {
                if ("undefined" !== typeof d.getElementById && !e) return (d = d.getElementById(c)) ? d.id === c || "undefined" !== typeof d.getAttributeNode && d.getAttributeNode("id").value === c ? [d] : void 0 : []
            },
            TAG: hd ? function(c, d) {
                if ("undefined" !== typeof d.getElementsByTagName) return d.getElementsByTagName(c)
            } : function(c, d) {
                var e = d.getElementsByTagName(c);
                if ("*" === c) {
                    for (var j, f = [], l = 0; j = e[l]; l++) 1 === j.nodeType && f.push(j);
                    return f
                }
                return e
            },
            NAME: kd && function(c, d) {
                if ("undefined" !== typeof d.getElementsByName) return d.getElementsByName(name)
            },
            CLASS: Xb && function(c, d, e) {
                if ("undefined" !== typeof d.getElementsByClassName && !e) return d.getElementsByClassName(c)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(c) {
                return c[1] = c[1].replace(ma, ""), c[3] = (c[4] || c[5] || "").replace(ma, ""), "~=" === c[2] && (c[3] = " " + c[3] + " "), c.slice(0, 4)
            },
            CHILD: function(c) {
                return c[1] = c[1].toLowerCase(), "nth" === c[1] ? (c[2] || J.error(c[0]), c[3] = +(c[3] ? c[4] + (c[5] || 1) :
                    2 * ("even" === c[2] || "odd" === c[2])), c[4] = +(c[6] + c[7] || "odd" === c[2])) : c[2] && J.error(c[0]), c
            },
            PSEUDO: function(c) {
                var d, e;
                if (Ra.CHILD.test(c[0])) return null;
                if (c[3]) c[2] = c[3];
                else if (d = c[4]) ed.test(d) && (e = Sa(d, !0)) && (e = d.indexOf(")", d.length - e) - d.length) && (d = d.slice(0, e), c[0] = c[0].slice(0, e)), c[2] = d;
                return c.slice(0, 3)
            }
        },
        filter: {
            ID: rb ? function(c) {
                return c = c.replace(ma, ""),
                    function(d) {
                        return d.getAttribute("id") === c
                    }
            } : function(c) {
                return c = c.replace(ma, ""),
                    function(d) {
                        return (d = "undefined" !== typeof d.getAttributeNode &&
                            d.getAttributeNode("id")) && d.value === c
                    }
            },
            TAG: function(c) {
                return "*" === c ? function() {
                    return !0
                } : (c = c.replace(ma, "").toLowerCase(), function(d) {
                    return d.nodeName && d.nodeName.toLowerCase() === c
                })
            },
            CLASS: function(c) {
                var d = dc[Q][c];
                return d || (d = dc(c, RegExp("(^|[\\x20\\t\\r\\n\\f])" + c + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(c) {
                        return d.test(c.className || "undefined" !== typeof c.getAttribute && c.getAttribute("class") || "")
                    }
            },
            ATTR: function(c, d, e) {
                return function(j) {
                    j = J.attr(j, c);
                    return null == j ? "!=" === d : d ? (j += "", "=" ===
                        d ? j === e : "!=" === d ? j !== e : "^=" === d ? e && 0 === j.indexOf(e) : "*=" === d ? e && -1 < j.indexOf(e) : "$=" === d ? e && j.substr(j.length - e.length) === e : "~=" === d ? -1 < (" " + j + " ").indexOf(e) : "|=" === d ? j === e || j.substr(0, e.length + 1) === e + "-" : !1) : !0
                }
            },
            CHILD: function(c, d, e, j) {
                return "nth" === c ? function(c) {
                    var d, z;
                    d = c.parentNode;
                    if (1 === e && 0 === j) return !0;
                    if (d) {
                        z = 0;
                        for (d = d.firstChild; d && !(1 === d.nodeType && (z++, c === d)); d = d.nextSibling);
                    }
                    return z -= j, z === e || 0 === z % e && 0 <= z / e
                } : function(d) {
                    var e = d;
                    switch (c) {
                        case "only":
                        case "first":
                            for (; e = e.previousSibling;)
                                if (1 ===
                                    e.nodeType) return !1;
                            if ("first" === c) return !0;
                            e = d;
                        case "last":
                            for (; e = e.nextSibling;)
                                if (1 === e.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(c, d) {
                var e, j = K.pseudos[c] || K.setFilters[c.toLowerCase()] || J.error("unsupported pseudo: " + c);
                return j[Q] ? j(d) : 1 < j.length ? (e = [c, c, "", d], K.setFilters.hasOwnProperty(c.toLowerCase()) ? aa(function(c, e) {
                    for (var z, f = j(c, d), s = f.length; s--;) z = ac.call(c, f[s]), c[z] = !(e[z] = f[s])
                }) : function(c) {
                    return j(c, 0, e)
                }) : j
            }
        },
        pseudos: {
            not: aa(function(c) {
                var d = [],
                    e = [],
                    j = qb(c.replace(Pa, "$1"));
                return j[Q] ? aa(function(c, d, e, z) {
                    z = j(c, null, z, []);
                    for (var f = c.length; f--;)
                        if (e = z[f]) c[f] = !(d[f] = e)
                }) : function(c, z, f) {
                    return d[0] = c, j(d, null, f, e), !e.pop()
                }
            }),
            has: aa(function(c) {
                return function(d) {
                    return 0 < J(c, d).length
                }
            }),
            contains: aa(function(c) {
                return function(d) {
                    return -1 < (d.textContent || d.innerText || Va(d)).indexOf(c)
                }
            }),
            enabled: function(c) {
                return !1 === c.disabled
            },
            disabled: function(c) {
                return !0 === c.disabled
            },
            checked: function(c) {
                var d = c.nodeName.toLowerCase();
                return "input" === d && !!c.checked || "option" ===
                    d && !!c.selected
            },
            selected: function(c) {
                return c.parentNode && c.parentNode.selectedIndex, !0 === c.selected
            },
            parent: function(c) {
                return !K.pseudos.empty(c)
            },
            empty: function(c) {
                var d;
                for (c = c.firstChild; c;) {
                    if ("@" < c.nodeName || 3 === (d = c.nodeType) || 4 === d) return !1;
                    c = c.nextSibling
                }
                return !0
            },
            header: function(c) {
                return fd.test(c.nodeName)
            },
            text: function(c) {
                var d, e;
                return "input" === c.nodeName.toLowerCase() && "text" === (d = c.type) && (null == (e = c.getAttribute("type")) || e.toLowerCase() === d)
            },
            radio: xa("radio"),
            checkbox: xa("checkbox"),
            file: xa("file"),
            password: xa("password"),
            image: xa("image"),
            submit: Yb("submit"),
            reset: Yb("reset"),
            button: function(c) {
                var d = c.nodeName.toLowerCase();
                return "input" === d && "button" === c.type || "button" === d
            },
            input: function(c) {
                return gd.test(c.nodeName)
            },
            focus: function(c) {
                var d = c.ownerDocument;
                return c === d.activeElement && (!d.hasFocus || d.hasFocus()) && (!!c.type || !!c.href)
            },
            active: function(c) {
                return c === c.ownerDocument.activeElement
            },
            first: la(function() {
                return [0]
            }),
            last: la(function(c, d) {
                return [d - 1]
            }),
            eq: la(function(c,
                d, e) {
                return [0 > e ? e + d : e]
            }),
            even: la(function(c, d) {
                for (var e = 0; e < d; e += 2) c.push(e);
                return c
            }),
            odd: la(function(c, d) {
                for (var e = 1; e < d; e += 2) c.push(e);
                return c
            }),
            lt: la(function(c, d, e) {
                for (d = 0 > e ? e + d : e; 0 <= --d;) c.push(d);
                return c
            }),
            gt: la(function(c, d, e) {
                for (e = 0 > e ? e + d : e; ++e < d;) c.push(e);
                return c
            })
        }
    };
    sb = Y.compareDocumentPosition ? function(c, d) {
        return c === d ? (za = !0, 0) : (!c.compareDocumentPosition || !d.compareDocumentPosition ? c.compareDocumentPosition : c.compareDocumentPosition(d) & 4) ? -1 : 1
    } : function(c, d) {
        if (c === d) return za = !0, 0;
        if (c.sourceIndex && d.sourceIndex) return c.sourceIndex - d.sourceIndex;
        var e, j, f = [],
            l = [];
        e = c.parentNode;
        j = d.parentNode;
        var p = e;
        if (e === j) return Qa(c, d);
        if (!e) return -1;
        if (!j) return 1;
        for (; p;) f.unshift(p), p = p.parentNode;
        for (p = j; p;) l.unshift(p), p = p.parentNode;
        e = f.length;
        j = l.length;
        for (p = 0; p < e && p < j; p++)
            if (f[p] !== l[p]) return Qa(f[p], l[p]);
        return p === e ? Qa(c, l[p], -1) : Qa(f[p], d, 1)
    };
    [0, 0].sort(sb);
    cc = !za;
    J.uniqueSort = function(c) {
        var d, e = 1;
        za = cc;
        c.sort(sb);
        if (za)
            for (; d = c[e]; e++) d === c[e - 1] && c.splice(e--, 1);
        return c
    };
    J.error = function(c) {
        throw Error("Syntax error, unrecognized expression: " + c);
    };
    qb = J.compile = function(c, d) {
        var e, j = [],
            f = [],
            l = ec[Q][c];
        if (!l) {
            d || (d = Sa(c));
            for (e = d.length; e--;) l = ob(d[e]), l[Q] ? j.push(l) : f.push(l);
            var p = 0 < j.length,
                q = 0 < f.length,
                n = function(c, d, e, z, t) {
                    var s, l, B = [],
                        v = 0,
                        m = "0",
                        D = c && [],
                        y = null != t,
                        u = Ua,
                        C = c || q && K.find.TAG("*", t && d.parentNode || d),
                        E = ya += null == u ? 1 : Math.E;
                    for (y && (Ua = d !== Z && d, kb = n.el); null != (t = C[m]); m++) {
                        if (q && t) {
                            for (s = 0; l = f[s]; s++)
                                if (l(t, d, e)) {
                                    z.push(t);
                                    break
                                }
                            y && (ya = E, kb =
                                ++n.el)
                        }
                        p && ((t = !l && t) && v--, c && D.push(t))
                    }
                    v += m;
                    if (p && m !== v) {
                        for (s = 0; l = j[s]; s++) l(D, B, d, e);
                        if (c) {
                            if (0 < v)
                                for (; m--;)!D[m] && !B[m] && (B[m] = dd.call(z));
                            B = Ta(B)
                        }
                        qa.apply(z, B);
                        y && !c && 0 < B.length && 1 < v + j.length && J.uniqueSort(z)
                    }
                    return y && (ya = E, Ua = u), D
                };
            e = (n.el = 0, p ? aa(n) : n);
            l = ec(c, e)
        }
        return l
    };
    if (Z.querySelectorAll) {
        var gc, ld = jb,
            md = /'|\\/g,
            nd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            ca = [":focus"],
            Wa = [":active", ":focus"],
            Xa = Y.matchesSelector || Y.mozMatchesSelector || Y.webkitMatchesSelector || Y.oMatchesSelector ||
            Y.msMatchesSelector;
        fa(function(c) {
            c.innerHTML = "<select><option selected=''></option></select>";
            c.querySelectorAll("[selected]").length || ca.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            c.querySelectorAll(":checked").length || ca.push(":checked")
        });
        fa(function(c) {
            c.innerHTML = "<p test=''></p>";
            c.querySelectorAll("[test^='']").length && ca.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            c.innerHTML = "<input type='hidden'/>";
            c.querySelectorAll(":enabled").length ||
                ca.push(":enabled", ":disabled")
        });
        ca = RegExp(ca.join("|"));
        jb = function(c, d, e, j, f) {
            if (!j && !f && (!ca || !ca.test(c))) {
                var l, p, q = !0,
                    n = Q;
                p = d;
                l = 9 === d.nodeType && c;
                if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                    l = Sa(c);
                    (q = d.getAttribute("id")) ? n = q.replace(md, "\\$&"): d.setAttribute("id", n);
                    n = "[id='" + n + "'] ";
                    for (p = l.length; p--;) l[p] = n + l[p].join("");
                    p = pb.test(c) && d.parentNode || d;
                    l = l.join(",")
                }
                if (l) try {
                    return qa.apply(e, ra.call(p.querySelectorAll(l), 0)), e
                } catch (v) {} finally {
                    q || d.removeAttribute("id")
                }
            }
            return ld(c,
                d, e, j, f)
        };
        Xa && (fa(function(c) {
            gc = Xa.call(c, "div");
            try {
                Xa.call(c, "[test!='']:sizzle"), Wa.push("!=", ub)
            } catch (d) {}
        }), Wa = RegExp(Wa.join("|")), J.matchesSelector = function(c, d) {
            d = d.replace(nd, "='$1']");
            if (!Oa(c) && !Wa.test(d) && (!ca || !ca.test(d))) try {
                var e = Xa.call(c, d);
                if (e || gc || c.document && 11 !== c.document.nodeType) return e
            } catch (j) {}
            return 0 < J(d, null, null, [c]).length
        })
    }
    K.pseudos.nth = K.pseudos.eq;
    K.filters = bc.prototype = K.pseudos;
    K.setFilters = new bc;
    J.attr = j.attr;
    j.find = J;
    j.expr = J.selectors;
    j.expr[":"] = j.expr.pseudos;
    j.unique = J.uniqueSort;
    j.text = J.getText;
    j.isXMLDoc = J.isXML;
    j.contains = J.contains;
    var od = /Until$/,
        pd = /^(?:parents|prev(?:Until|All))/,
        yc = /^.[^:#\[\.,]*$/,
        hc = j.expr.match.needsContext,
        qd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    j.fn.extend({
        find: function(c) {
            var d, e, f, l, q, p, n = this;
            if ("string" != typeof c) return j(c).filter(function() {
                d = 0;
                for (e = n.length; d < e; d++)
                    if (j.contains(n[d], this)) return !0
            });
            p = this.pushStack("", "find", c);
            d = 0;
            for (e = this.length; d < e; d++)
                if (f = p.length, j.find(c, this[d], p), 0 < d)
                    for (l = f; l <
                        p.length; l++)
                        for (q = 0; q < f; q++)
                            if (p[q] === p[l]) {
                                p.splice(l--, 1);
                                break
                            }
            return p
        },
        has: function(c) {
            var d, e = j(c, this),
                f = e.length;
            return this.filter(function() {
                for (d = 0; d < f; d++)
                    if (j.contains(this, e[d])) return !0
            })
        },
        not: function(c) {
            return this.pushStack(y(this, c, !1), "not", c)
        },
        filter: function(c) {
            return this.pushStack(y(this, c, !0), "filter", c)
        },
        is: function(c) {
            return !!c && ("string" == typeof c ? hc.test(c) ? 0 <= j(c, this.context).index(this[0]) : 0 < j.filter(c, this).length : 0 < this.filter(c).length)
        },
        closest: function(c, d) {
            for (var e,
                f = 0, l = this.length, q = [], p = hc.test(c) || "string" != typeof c ? j(c, d || this.context) : 0; f < l; f++)
                for (e = this[f]; e && e.ownerDocument && e !== d && 11 !== e.nodeType;) {
                    if (p ? -1 < p.index(e) : j.find.matchesSelector(e, c)) {
                        q.push(e);
                        break
                    }
                    e = e.parentNode
                }
            return q = 1 < q.length ? j.unique(q) : q, this.pushStack(q, "closest", c)
        },
        index: function(c) {
            return c ? "string" == typeof c ? j.inArray(this[0], j(c)) : j.inArray(c.jquery ? c[0] : c, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(c, d) {
            var e = "string" == typeof c ? j(c, d) : j.makeArray(c &&
                    c.nodeType ? [c] : c),
                f = j.merge(this.get(), e);
            return this.pushStack(A(e[0]) || A(f[0]) ? f : j.unique(f))
        },
        addBack: function(c) {
            return this.add(null == c ? this.prevObject : this.prevObject.filter(c))
        }
    });
    j.fn.andSelf = j.fn.addBack;
    j.each({
        parent: function(c) {
            return (c = c.parentNode) && 11 !== c.nodeType ? c : null
        },
        parents: function(c) {
            return j.dir(c, "parentNode")
        },
        parentsUntil: function(c, d, e) {
            return j.dir(c, "parentNode", e)
        },
        next: function(c) {
            return n(c, "nextSibling")
        },
        prev: function(c) {
            return n(c, "previousSibling")
        },
        nextAll: function(c) {
            return j.dir(c,
                "nextSibling")
        },
        prevAll: function(c) {
            return j.dir(c, "previousSibling")
        },
        nextUntil: function(c, d, e) {
            return j.dir(c, "nextSibling", e)
        },
        prevUntil: function(c, d, e) {
            return j.dir(c, "previousSibling", e)
        },
        siblings: function(c) {
            return j.sibling((c.parentNode || {}).firstChild, c)
        },
        children: function(c) {
            return j.sibling(c.firstChild)
        },
        contents: function(c) {
            return j.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document : j.merge([], c.childNodes)
        }
    }, function(c, d) {
        j.fn[c] = function(e, f) {
            var l = j.map(this, d, e);
            return od.test(c) ||
                (f = e), f && "string" == typeof f && (l = j.filter(f, l)), l = 1 < this.length && !qd[c] ? j.unique(l) : l, 1 < this.length && pd.test(c) && (l = l.reverse()), this.pushStack(l, c, da.call(arguments).join(","))
        }
    });
    j.extend({
        filter: function(c, d, e) {
            return e && (c = ":not(" + c + ")"), 1 === d.length ? j.find.matchesSelector(d[0], c) ? [d[0]] : [] : j.find.matches(c, d)
        },
        dir: function(c, e, f) {
            var l = [];
            for (c = c[e]; c && 9 !== c.nodeType && (f === d || 1 !== c.nodeType || !j(c).is(f));) 1 === c.nodeType && l.push(c), c = c[e];
            return l
        },
        sibling: function(c, d) {
            for (var e = []; c; c = c.nextSibling) 1 ===
                c.nodeType && c !== d && e.push(c);
            return e
        }
    });
    var Bb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rd = / jQuery\d+="(?:null|\d+)"/g,
        vb = /^\s+/,
        ic = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jc = /<([\w:]+)/,
        sd = /<tbody/i,
        td = /<|&#?\w+;/,
        ud = /<(?:script|style|link)/i,
        vd = /<(?:script|object|embed|option|style)/i,
        wb = RegExp("<(?:" + Bb + ")[\\s/>]", "i"),
        Cb = /^(?:checkbox|radio)$/,
        kc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        wd = /\/(java|ecma)script/i,
        xd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        W = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        lc = C(F),
        xb = lc.appendChild(F.createElement("div"));
    W.optgroup =
        W.option;
    W.tbody = W.tfoot = W.colgroup = W.caption = W.thead;
    W.th = W.td;
    j.support.htmlSerialize || (W._default = [1, "X<div>", "</div>"]);
    j.fn.extend({
        text: function(c) {
            return j.access(this, function(c) {
                return c === d ? j.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(c))
            }, null, c, arguments.length)
        },
        wrapAll: function(c) {
            if (j.isFunction(c)) return this.each(function(d) {
                j(this).wrapAll(c.call(this, d))
            });
            if (this[0]) {
                var d = j(c, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && d.insertBefore(this[0]);
                d.map(function() {
                    for (var c = this; c.firstChild && 1 === c.firstChild.nodeType;) c = c.firstChild;
                    return c
                }).append(this)
            }
            return this
        },
        wrapInner: function(c) {
            return j.isFunction(c) ? this.each(function(d) {
                j(this).wrapInner(c.call(this, d))
            }) : this.each(function() {
                var d = j(this),
                    e = d.contents();
                e.length ? e.wrapAll(c) : d.append(c)
            })
        },
        wrap: function(c) {
            var d = j.isFunction(c);
            return this.each(function(e) {
                j(this).wrapAll(d ? c.call(this, e) : c)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                j.nodeName(this, "body") ||
                    j(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(c) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(c)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(c) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(c, this.firstChild)
            })
        },
        before: function() {
            if (!A(this[0])) return this.domManip(arguments, !1, function(c) {
                this.parentNode.insertBefore(c, this)
            });
            if (arguments.length) {
                var c = j.clean(arguments);
                return this.pushStack(j.merge(c,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!A(this[0])) return this.domManip(arguments, !1, function(c) {
                this.parentNode.insertBefore(c, this.nextSibling)
            });
            if (arguments.length) {
                var c = j.clean(arguments);
                return this.pushStack(j.merge(this, c), "after", this.selector)
            }
        },
        remove: function(c, d) {
            for (var e, f = 0; null != (e = this[f]); f++)
                if (!c || j.filter(c, [e]).length)!d && 1 === e.nodeType && (j.cleanData(e.getElementsByTagName("*")), j.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var c,
                d = 0; null != (c = this[d]); d++)
                for (1 === c.nodeType && j.cleanData(c.getElementsByTagName("*")); c.firstChild;) c.removeChild(c.firstChild);
            return this
        },
        clone: function(c, d) {
            return c = null == c ? !1 : c, d = null == d ? c : d, this.map(function() {
                return j.clone(this, c, d)
            })
        },
        html: function(c) {
            return j.access(this, function(c) {
                var e = this[0] || {},
                    f = 0,
                    z = this.length;
                if (c === d) return 1 === e.nodeType ? e.innerHTML.replace(rd, "") : d;
                if ("string" == typeof c && !ud.test(c) && (j.support.htmlSerialize || !wb.test(c)) && (j.support.leadingWhitespace || !vb.test(c)) &&
                    !W[(jc.exec(c) || ["", ""])[1].toLowerCase()]) {
                    c = c.replace(ic, "<$1></$2>");
                    try {
                        for (; f < z; f++) e = this[f] || {}, 1 === e.nodeType && (j.cleanData(e.getElementsByTagName("*")), e.innerHTML = c);
                        e = 0
                    } catch (l) {}
                }
                e && this.empty().append(c)
            }, null, c, arguments.length)
        },
        replaceWith: function(c) {
            return A(this[0]) ? this.length ? this.pushStack(j(j.isFunction(c) ? c() : c), "replaceWith", c) : this : j.isFunction(c) ? this.each(function(d) {
                var e = j(this),
                    f = e.html();
                e.replaceWith(c.call(this, d, f))
            }) : ("string" != typeof c && (c = j(c).detach()), this.each(function() {
                var d =
                    this.nextSibling,
                    e = this.parentNode;
                j(this).remove();
                d ? j(d).before(c) : j(e).append(c)
            }))
        },
        detach: function(c) {
            return this.remove(c, !0)
        },
        domManip: function(c, e, f) {
            c = [].concat.apply([], c);
            var l, q, n, p = 0,
                v = c[0],
                m = [],
                D = this.length;
            if (!j.support.checkClone && 1 < D && "string" == typeof v && kc.test(v)) return this.each(function() {
                j(this).domManip(c, e, f)
            });
            if (j.isFunction(v)) return this.each(function(l) {
                var p = j(this);
                c[0] = v.call(this, l, e ? p.html() : d);
                p.domManip(c, e, f)
            });
            if (this[0]) {
                l = j.buildFragment(c, this, m);
                n = l.fragment;
                q = n.firstChild;
                1 === n.childNodes.length && (n = q);
                if (q) {
                    e = e && j.nodeName(q, "tr");
                    for (l = l.cacheable || D - 1; p < D; p++) f.call(e && j.nodeName(this[p], "table") ? this[p].getElementsByTagName("tbody")[0] || this[p].appendChild(this[p].ownerDocument.createElement("tbody")) : this[p], p === l ? n : j.clone(n, !0, !0))
                }
                n = q = null;
                m.length && j.each(m, function(c, d) {
                    d.src ? j.ajax ? j.ajax({
                        url: d.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : j.error("no ajax") : j.globalEval((d.text || d.textContent || d.innerHTML || "").replace(xd,
                        ""));
                    d.parentNode && d.parentNode.removeChild(d)
                })
            }
            return this
        }
    });
    j.buildFragment = function(c, e, f) {
        var l, q, n, p = c[0];
        return e = e || F, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, 1 === c.length && "string" == typeof p && 512 > p.length && e === F && "<" === p.charAt(0) && !vd.test(p) && (j.support.checkClone || !kc.test(p)) && (j.support.html5Clone || !wb.test(p)) && (q = !0, l = j.fragments[p], n = l !== d), l || (l = e.createDocumentFragment(), j.clean(c, e, l, f), q && (j.fragments[p] = n && l)), {
            fragment: l,
            cacheable: q
        }
    };
    j.fragments = {};
    j.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(c, d) {
        j.fn[c] = function(e) {
            var f, l = 0,
                q = [];
            e = j(e);
            var p = e.length;
            f = 1 === this.length && this[0].parentNode;
            if ((null == f || f && 11 === f.nodeType && 1 === f.childNodes.length) && 1 === p) return e[d](this[0]), this;
            for (; l < p; l++) f = (0 < l ? this.clone(!0) : this).get(), j(e[l])[d](f), q = q.concat(f);
            return this.pushStack(q, c, e.selector)
        }
    });
    j.extend({
        clone: function(c, d, e) {
            var f, l, q, p;
            j.support.html5Clone || j.isXMLDoc(c) || !wb.test("<" + c.nodeName +
                ">") ? p = c.cloneNode(!0) : (xb.innerHTML = c.outerHTML, xb.removeChild(p = xb.firstChild));
            if ((!j.support.noCloneEvent || !j.support.noCloneChecked) && (1 === c.nodeType || 11 === c.nodeType) && !j.isXMLDoc(c)) {
                E(c, p);
                f = G(c);
                l = G(p);
                for (q = 0; f[q]; ++q) l[q] && E(f[q], l[q])
            }
            if (d && (u(c, p), e)) {
                f = G(c);
                l = G(p);
                for (q = 0; f[q]; ++q) u(f[q], l[q])
            }
            return p
        },
        clean: function(c, d, e, f) {
            var l, q, p, n, v, m, D, y = d === F && lc,
                u = [];
            if (!d || "undefined" == typeof d.createDocumentFragment) d = F;
            for (l = 0; null != (p = c[l]); l++)
                if ("number" == typeof p && (p += ""), p) {
                    if ("string" ==
                        typeof p)
                        if (td.test(p)) {
                            y = y || C(d);
                            m = d.createElement("div");
                            y.appendChild(m);
                            p = p.replace(ic, "<$1></$2>");
                            q = (jc.exec(p) || ["", ""])[1].toLowerCase();
                            n = W[q] || W._default;
                            v = n[0];
                            for (m.innerHTML = n[1] + p + n[2]; v--;) m = m.lastChild;
                            if (!j.support.tbody) {
                                v = sd.test(p);
                                n = "table" === q && !v ? m.firstChild && m.firstChild.childNodes : "<table>" === n[1] && !v ? m.childNodes : [];
                                for (q = n.length - 1; 0 <= q; --q) j.nodeName(n[q], "tbody") && !n[q].childNodes.length && n[q].parentNode.removeChild(n[q])
                            }!j.support.leadingWhitespace && vb.test(p) && m.insertBefore(d.createTextNode(vb.exec(p)[0]),
                                m.firstChild);
                            p = m.childNodes;
                            m.parentNode.removeChild(m)
                        } else p = d.createTextNode(p);
                    p.nodeType ? u.push(p) : j.merge(u, p)
                }
            m && (p = m = y = null);
            if (!j.support.appendChecked)
                for (l = 0; null != (p = u[l]); l++) j.nodeName(p, "input") ? I(p) : "undefined" != typeof p.getElementsByTagName && j.grep(p.getElementsByTagName("input"), I);
            if (e) {
                c = function(c) {
                    if (!c.type || wd.test(c.type)) return f ? f.push(c.parentNode ? c.parentNode.removeChild(c) : c) : e.appendChild(c)
                };
                for (l = 0; null != (p = u[l]); l++)
                    if (!j.nodeName(p, "script") || !c(p)) e.appendChild(p),
                        "undefined" != typeof p.getElementsByTagName && (D = j.grep(j.merge([], p.getElementsByTagName("script")), c), u.splice.apply(u, [l + 1, 0].concat(D)), l += D.length)
            }
            return u
        },
        cleanData: function(c, d) {
            for (var e, f, l, q, p = 0, n = j.expando, v = j.cache, m = j.support.deleteExpando, D = j.event.special; null != (l = c[p]); p++)
                if (d || j.acceptData(l))
                    if (e = (f = l[n]) && v[f]) {
                        if (e.events)
                            for (q in e.events) D[q] ? j.event.remove(l, q) : j.removeEvent(l, q, e.handle);
                        v[f] && (delete v[f], m ? delete l[n] : l.removeAttribute ? l.removeAttribute(n) : l[n] = null, j.deletedIds.push(f))
                    }
        }
    });
    var Ya, ga;
    j.uaMatch = function(c) {
        c = c.toLowerCase();
        c = /(chrome)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || 0 > c.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [];
        return {
            browser: c[1] || "",
            version: c[2] || "0"
        }
    };
    Ya = j.uaMatch(Dc.userAgent);
    ga = {};
    Ya.browser && (ga[Ya.browser] = !0, ga.version = Ya.version);
    ga.chrome ? ga.webkit = !0 : ga.webkit && (ga.safari = !0);
    j.browser = ga;
    j.sub = function() {
        function c(d, e) {
            return new c.fn.init(d,
                e)
        }
        j.extend(!0, c, this);
        c.superclass = this;
        c.fn = c.prototype = this();
        c.fn.constructor = c;
        c.sub = this.sub;
        c.fn.init = function(e, f) {
            return f && f instanceof j && !(f instanceof c) && (f = c(f)), j.fn.init.call(this, e, f, d)
        };
        c.fn.init.prototype = c.fn;
        var d = c(F);
        return c
    };
    var S, oa, pa, yb = /alpha\([^)]*\)/i,
        yd = /opacity=([^)]*)/,
        zd = /^(top|right|bottom|left)$/,
        Ad = /^(none|table(?!-c[ea]).+)/,
        mc = /^margin/,
        zc = RegExp("^(" + Ia + ")(.*)$", "i"),
        Ba = RegExp("^(" + Ia + ")(?!px)[a-z%]+$", "i"),
        Bd = RegExp("^([-+])=(" + Ia + ")", "i"),
        ab = {},
        Cd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ha = ["Top", "Right", "Bottom", "Left"],
        Db = ["Webkit", "O", "Moz", "ms"],
        Dd = j.fn.toggle;
    j.fn.extend({
        css: function(c, e) {
            return j.access(this, function(c, e, f) {
                return f !== d ? j.style(c, e, f) : j.css(c, e)
            }, c, e, 1 < arguments.length)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(c, d) {
            var e = "boolean" == typeof c;
            return j.isFunction(c) && j.isFunction(d) ? Dd.apply(this, arguments) : this.each(function() {
                (e ? c : v(this)) ? j(this).show():
                    j(this).hide()
            })
        }
    });
    j.extend({
        cssHooks: {
            opacity: {
                get: function(c, d) {
                    if (d) {
                        var e = S(c, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": j.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(c, e, f, l) {
            if (c && !(3 === c.nodeType || 8 === c.nodeType || !c.style)) {
                var n, v, p, m = j.camelCase(e),
                    D = c.style;
                e = j.cssProps[m] || (j.cssProps[m] = q(D, m));
                p = j.cssHooks[e] || j.cssHooks[m];
                if (f === d) return p && "get" in p && (n = p.get(c, !1, l)) !== d ? n : D[e];
                v = typeof f;
                "string" === v && (n = Bd.exec(f)) && (f = (n[1] + 1) * n[2] + parseFloat(j.css(c, e)), v = "number");
                if (!(null == f || "number" === v && isNaN(f)))
                    if ("number" === v && !j.cssNumber[m] && (f += "px"), !p || !("set" in p) || (f = p.set(c, f, l)) !== d) try {
                        D[e] = f
                    } catch (y) {}
            }
        },
        css: function(c, e, f, l) {
            var n, v, p, m = j.camelCase(e);
            return e = j.cssProps[m] || (j.cssProps[m] = q(c.style, m)), p = j.cssHooks[e] || j.cssHooks[m], p && "get" in p && (n = p.get(c, !0, l)), n === d && (n = S(c, e)), "normal" === n && e in nc && (n = nc[e]), f || l !== d ? (v = parseFloat(n), f ||
                j.isNumeric(v) ? v || 0 : n) : n
        },
        swap: function(c, d, e) {
            var j, f = {};
            for (j in d) f[j] = c.style[j], c.style[j] = d[j];
            e = e.call(c);
            for (j in d) c.style[j] = f[j];
            return e
        }
    });
    c.getComputedStyle ? S = function(d, e) {
        var f, l, q, n, p = c.getComputedStyle(d, null),
            v = d.style;
        return p && (f = p[e], "" === f && !j.contains(d.ownerDocument, d) && (f = j.style(d, e)), Ba.test(f) && mc.test(e) && (l = v.width, q = v.minWidth, n = v.maxWidth, v.minWidth = v.maxWidth = v.width = f, f = p.width, v.width = l, v.minWidth = q, v.maxWidth = n)), f
    } : F.documentElement.currentStyle && (S = function(c,
        d) {
        var e, j, f = c.currentStyle && c.currentStyle[d],
            l = c.style;
        return null == f && l && l[d] && (f = l[d]), Ba.test(f) && !zd.test(d) && (e = l.left, j = c.runtimeStyle && c.runtimeStyle.left, j && (c.runtimeStyle.left = c.currentStyle.left), l.left = "fontSize" === d ? "1em" : f, f = l.pixelLeft + "px", l.left = e, j && (c.runtimeStyle.left = j)), "" === f ? "auto" : f
    });
    j.each(["height", "width"], function(c, d) {
        j.cssHooks[d] = {
            get: function(c, e, f) {
                if (e) return 0 === c.offsetWidth && Ad.test(S(c, "display")) ? j.swap(c, Cd, function() {
                    return P(c, d, f)
                }) : P(c, d, f)
            },
            set: function(c,
                e, f) {
                return O(c, e, f ? T(c, d, f, j.support.boxSizing && "border-box" === j.css(c, "boxSizing")) : 0)
            }
        }
    });
    j.support.opacity || (j.cssHooks.opacity = {
        get: function(c, d) {
            return yd.test((d && c.currentStyle ? c.currentStyle.filter : c.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : d ? "1" : ""
        },
        set: function(c, d) {
            var e = c.style,
                f = c.currentStyle,
                l = j.isNumeric(d) ? "alpha(opacity=" + 100 * d + ")" : "",
                q = f && f.filter || e.filter || "";
            e.zoom = 1;
            if (!(1 <= d && "" === j.trim(q.replace(yb, "")) && e.removeAttribute && (e.removeAttribute("filter"), f && !f.filter))) e.filter =
                yb.test(q) ? q.replace(yb, l) : q + " " + l
        }
    });
    j(function() {
        j.support.reliableMarginRight || (j.cssHooks.marginRight = {
            get: function(c, d) {
                return j.swap(c, {
                    display: "inline-block"
                }, function() {
                    if (d) return S(c, "marginRight")
                })
            }
        });
        !j.support.pixelPosition && j.fn.position && j.each(["top", "left"], function(c, d) {
            j.cssHooks[d] = {
                get: function(c, e) {
                    if (e) {
                        var f = S(c, d);
                        return Ba.test(f) ? j(c).position()[d] + "px" : f
                    }
                }
            }
        })
    });
    j.expr && j.expr.filters && (j.expr.filters.hidden = function(c) {
        return 0 === c.offsetWidth && 0 === c.offsetHeight || !j.support.reliableHiddenOffsets &&
            "none" === (c.style && c.style.display || S(c, "display"))
    }, j.expr.filters.visible = function(c) {
        return !j.expr.filters.hidden(c)
    });
    j.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(c, d) {
        j.cssHooks[c + d] = {
            expand: function(e) {
                var j = "string" == typeof e ? e.split(" ") : [e],
                    f = {};
                for (e = 0; 4 > e; e++) f[c + ha[e] + d] = j[e] || j[e - 2] || j[0];
                return f
            }
        };
        mc.test(c) || (j.cssHooks[c + d].set = O)
    });
    var Ed = /%20/g,
        Ac = /\[\]$/,
        oc = /\r?\n/g,
        Fd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Gd = /^(?:select|textarea)/i;
    j.fn.extend({
        serialize: function() {
            return j.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? j.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Gd.test(this.nodeName) || Fd.test(this.type))
            }).map(function(c, d) {
                var e = j(this).val();
                return null == e ? null : j.isArray(e) ? j.map(e, function(c) {
                    return {
                        name: d.name,
                        value: c.replace(oc, "\r\n")
                    }
                }) : {
                    name: d.name,
                    value: e.replace(oc, "\r\n")
                }
            }).get()
        }
    });
    j.param = function(c, e) {
        var f, l = [],
            q = function(c, d) {
                d = j.isFunction(d) ? d() : null == d ? "" : d;
                l[l.length] = encodeURIComponent(c) + "=" + encodeURIComponent(d)
            };
        e === d && (e = j.ajaxSettings && j.ajaxSettings.traditional);
        if (j.isArray(c) || c.jquery && !j.isPlainObject(c)) j.each(c, function() {
            q(this.name, this.value)
        });
        else
            for (f in c) Ca(f, c[f], e, q);
        return l.join("&").replace(Ed, "+")
    };
    var sa, na, Hd = /#.*$/,
        Id = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Jd = /^(?:GET|HEAD)$/,
        Kd = /^\/\//,
        pc = /\?/,
        Ld = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Md = /([?&])_=[^&]*/,
        qc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        rc = j.fn.load,
        cb = {},
        sc = {},
        tc = ["*/"] + ["*"];
    try {
        na = Cc.href
    } catch (Vd) {
        na = F.createElement("a"), na.href = "", na = na.href
    }
    sa = qc.exec(na.toLowerCase()) || [];
    j.fn.load = function(c, e, f) {
        if ("string" != typeof c && rc) return rc.apply(this, arguments);
        if (!this.length) return this;
        var l, q, n, p = this,
            v = c.indexOf(" ");
        return 0 <= v && (l = c.slice(v, c.length), c = c.slice(0, v)), j.isFunction(e) ? (f = e, e = d) : e && "object" == typeof e && (q = "POST"), j.ajax({
            url: c,
            type: q,
            dataType: "html",
            data: e,
            complete: function(c, d) {
                f && p.each(f, n || [c.responseText, d, c])
            }
        }).done(function(c) {
            n = arguments;
            p.html(l ? j("<div>").append(c.replace(Ld, "")).find(l) : c)
        }), this
    };
    j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(c, d) {
        j.fn[d] = function(c) {
            return this.on(d, c)
        }
    });
    j.each(["get", "post"], function(c, e) {
        j[e] = function(c, f, l, q) {
            return j.isFunction(f) && (q = q || l, l = f, f = d), j.ajax({
                type: e,
                url: c,
                data: f,
                success: l,
                dataType: q
            })
        }
    });
    j.extend({
        getScript: function(c, e) {
            return j.get(c,
                d, e, "script")
        },
        getJSON: function(c, d, e) {
            return j.get(c, d, e, "json")
        },
        ajaxSetup: function(c, d) {
            return d ? Eb(c, j.ajaxSettings) : (d = c, c = j.ajaxSettings), Eb(c, d), c
        },
        ajaxSettings: {
            url: na,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(sa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": tc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": c.String,
                "text html": !0,
                "text json": j.parseJSON,
                "text xml": j.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: M(cb),
        ajaxTransport: M(sc),
        ajax: function(c, e) {
            function f(c, e, n, z) {
                var t, s, m, y, B, I = e;
                if (2 !== T) {
                    T = 2;
                    v && clearTimeout(v);
                    p = d;
                    q = z || "";
                    L.readyState = 0 < c ? 4 : 0;
                    if (n) {
                        y = u;
                        z = L;
                        var F, P, M, bb, db = y.contents,
                            J = y.dataTypes,
                            N = y.responseFields;
                        for (P in N) P in n && (z[N[P]] = n[P]);
                        for (;
                            "*" === J[0];) J.shift(),
                            F === d && (F = y.mimeType || z.getResponseHeader("content-type"));
                        if (F)
                            for (P in db)
                                if (db[P] && db[P].test(F)) {
                                    J.unshift(P);
                                    break
                                }
                        if (J[0] in n) M = J[0];
                        else {
                            for (P in n) {
                                if (!J[0] || y.converters[P + " " + J[0]]) {
                                    M = P;
                                    break
                                }
                                bb || (bb = P)
                            }
                            M = M || bb
                        }
                        y = n = M ? (M !== J[0] && J.unshift(M), n[M]) : void 0
                    }
                    if (200 <= c && 300 > c || 304 === c)
                        if (u.ifModified && (B = L.getResponseHeader("Last-Modified"), B && (j.lastModified[l] = B), B = L.getResponseHeader("Etag"), B && (j.etag[l] = B)), 304 === c) I = "notmodified", t = !0;
                        else {
                            var K;
                            a: {
                                t = u;
                                s = y;
                                var X, I = t.dataTypes.slice();
                                n =
                                    I[0];
                                F = {};
                                P = 0;
                                t.dataFilter && (s = t.dataFilter(s, t.dataType));
                                if (I[1])
                                    for (K in t.converters) F[K.toLowerCase()] = t.converters[K];
                                for (; m = I[++P];)
                                    if ("*" !== m) {
                                        if ("*" !== n && n !== m) {
                                            K = F[n + " " + m] || F["* " + m];
                                            if (!K)
                                                for (X in F)
                                                    if (B = X.split(" "), B[1] === m && (K = F[n + " " + B[0]] || F["* " + B[0]])) {
                                                        !0 === K ? K = F[X] : !0 !== F[X] && (m = B[0], I.splice(P--, 0, m));
                                                        break
                                                    }
                                            if (!0 !== K)
                                                if (K && t["throws"]) s = K(s);
                                                else try {
                                                    s = K(s)
                                                } catch (Aa) {
                                                    K = {
                                                        state: "parsererror",
                                                        error: K ? Aa : "No conversion from " + n + " to " + m
                                                    };
                                                    break a
                                                }
                                        }
                                        n = m
                                    }
                                K = {
                                    state: "success",
                                    data: s
                                }
                            }
                            t =
                                K;
                            I = t.state;
                            s = t.data;
                            m = t.error;
                            t = !m
                        } else if (m = I, !I || c) I = "error", 0 > c && (c = 0);
                    L.status = c;
                    L.statusText = (e || I) + "";
                    t ? O.resolveWith(C, [s, I, L]) : O.rejectWith(C, [L, I, m]);
                    L.statusCode(A);
                    A = d;
                    D && E.trigger("ajax" + (t ? "Success" : "Error"), [L, u, t ? s : m]);
                    G.fireWith(C, [L, I]);
                    D && (E.trigger("ajaxComplete", [L, u]), --j.active || j.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (e = c, c = d);
            e = e || {};
            var l, q, n, p, v, m, D, y, u = j.ajaxSetup({}, e),
                C = u.context || u,
                E = C !== u && (C.nodeType || C instanceof j) ? j(C) : j.event,
                O = j.Deferred(),
                G = j.Callbacks("once memory"),
                A = u.statusCode || {},
                I = {},
                F = {},
                T = 0,
                P = "canceled",
                L = {
                    readyState: 0,
                    setRequestHeader: function(c, d) {
                        if (!T) {
                            var e = c.toLowerCase();
                            c = F[e] = F[e] || c;
                            I[c] = d
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === T ? q : null
                    },
                    getResponseHeader: function(c) {
                        var e;
                        if (2 === T) {
                            if (!n)
                                for (n = {}; e = Id.exec(q);) n[e[1].toLowerCase()] = e[2];
                            e = n[c.toLowerCase()]
                        }
                        return e === d ? null : e
                    },
                    overrideMimeType: function(c) {
                        return T || (u.mimeType = c), this
                    },
                    abort: function(c) {
                        return c = c || P, p && p.abort(c), f(0, c), this
                    }
                };
            O.promise(L);
            L.success = L.done;
            L.error = L.fail;
            L.complete = G.add;
            L.statusCode = function(c) {
                if (c) {
                    var d;
                    if (2 > T)
                        for (d in c) A[d] = [A[d], c[d]];
                    else d = c[L.status], L.always(d)
                }
                return this
            };
            u.url = ((c || u.url) + "").replace(Hd, "").replace(Kd, sa[1] + "//");
            u.dataTypes = j.trim(u.dataType || "*").toLowerCase().split(ia);
            null == u.crossDomain && (m = qc.exec(u.url.toLowerCase()) || !1, u.crossDomain = m && m.join(":") + (m[3] ? "" : "http:" === m[1] ? 80 : 443) !== sa.join(":") + (sa[3] ? "" : "http:" === sa[1] ? 80 : 443));
            u.data && u.processData && "string" != typeof u.data && (u.data = j.param(u.data,
                u.traditional));
            X(cb, u, e, L);
            if (2 === T) return L;
            D = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !Jd.test(u.type);
            D && 0 === j.active++ && j.event.trigger("ajaxStart");
            if (!u.hasContent && (u.data && (u.url += (pc.test(u.url) ? "&" : "?") + u.data, delete u.data), l = u.url, !1 === u.cache)) {
                m = j.now();
                var M = u.url.replace(Md, "$1_=" + m);
                u.url = M + (M === u.url ? (pc.test(u.url) ? "&" : "?") + "_=" + m : "")
            }(u.data && u.hasContent && !1 !== u.contentType || e.contentType) && L.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (l = l || u.url, j.lastModified[l] &&
                L.setRequestHeader("If-Modified-Since", j.lastModified[l]), j.etag[l] && L.setRequestHeader("If-None-Match", j.etag[l]));
            L.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : u.accepts["*"]);
            for (y in u.headers) L.setRequestHeader(y, u.headers[y]);
            if (!u.beforeSend || !1 !== u.beforeSend.call(C, L, u) && 2 !== T) {
                P = "abort";
                for (y in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) L[y](u[y]);
                if (p = X(sc, u, e, L)) {
                    L.readyState = 1;
                    D && E.trigger("ajaxSend", [L,
                        u
                    ]);
                    u.async && 0 < u.timeout && (v = setTimeout(function() {
                        L.abort("timeout")
                    }, u.timeout));
                    try {
                        T = 1, p.send(I, f)
                    } catch (J) {
                        if (2 > T) f(-1, J);
                        else throw J;
                    }
                } else f(-1, "No Transport");
                return L
            }
            return L.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var uc = [],
        Nd = /\?/,
        Za = /(=)\?(?=&|$)|\?\?/,
        Od = j.now();
    j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var c = uc.pop() || j.expando + "_" + Od++;
            return this[c] = !0, c
        }
    });
    j.ajaxPrefilter("json jsonp", function(e, f, l) {
        var q, n, v, p = e.data,
            m = e.url,
            u = !1 !== e.jsonp,
            D = u && Za.test(m),
            y = u &&
            !D && "string" == typeof p && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Za.test(p);
        if ("jsonp" === e.dataTypes[0] || D || y) return q = e.jsonpCallback = j.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, n = c[q], D ? e.url = m.replace(Za, "$1" + q) : y ? e.data = p.replace(Za, "$1" + q) : u && (e.url += (Nd.test(m) ? "&" : "?") + e.jsonp + "=" + q), e.converters["script json"] = function() {
            return v || j.error(q + " was not called"), v[0]
        }, e.dataTypes[0] = "json", c[q] = function() {
            v = arguments
        }, l.always(function() {
            c[q] = n;
            e[q] &&
                (e.jsonpCallback = f.jsonpCallback, uc.push(q));
            v && j.isFunction(n) && n(v[0]);
            v = n = d
        }), "script"
    });
    j.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(c) {
                return j.globalEval(c), c
            }
        }
    });
    j.ajaxPrefilter("script", function(c) {
        c.cache === d && (c.cache = !1);
        c.crossDomain && (c.type = "GET", c.global = !1)
    });
    j.ajaxTransport("script", function(c) {
        if (c.crossDomain) {
            var e, j = F.head ||
                F.getElementsByTagName("head")[0] || F.documentElement;
            return {
                send: function(f, l) {
                    e = F.createElement("script");
                    e.async = "async";
                    c.scriptCharset && (e.charset = c.scriptCharset);
                    e.src = c.url;
                    e.onload = e.onreadystatechange = function(c, f) {
                        if (f || !e.readyState || /loaded|complete/.test(e.readyState)) e.onload = e.onreadystatechange = null, j && e.parentNode && j.removeChild(e), e = d, f || l(200, "success")
                    };
                    j.insertBefore(e, j.firstChild)
                },
                abort: function() {
                    e && e.onload(0, 1)
                }
            }
        }
    });
    var ta, zb = c.ActiveXObject ? function() {
            for (var c in ta) ta[c](0,
                1)
        } : !1,
        Pd = 0;
    j.ajaxSettings.xhr = c.ActiveXObject ? function() {
        var d;
        if (!(d = !this.isLocal && Da())) a: {
            try {
                d = new c.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (e) {}
            d = void 0
        }
        return d
    } : Da;
    var Ab = j.ajaxSettings.xhr();
    j.extend(j.support, {
        ajax: !!Ab,
        cors: !!Ab && "withCredentials" in Ab
    });
    j.support.ajax && j.ajaxTransport(function(e) {
        if (!e.crossDomain || j.support.cors) {
            var f;
            return {
                send: function(l, q) {
                    var n, v, p = e.xhr();
                    e.username ? p.open(e.type, e.url, e.async, e.username, e.password) : p.open(e.type, e.url, e.async);
                    if (e.xhrFields)
                        for (v in e.xhrFields) p[v] =
                            e.xhrFields[v];
                    e.mimeType && p.overrideMimeType && p.overrideMimeType(e.mimeType);
                    !e.crossDomain && !l["X-Requested-With"] && (l["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (v in l) p.setRequestHeader(v, l[v])
                    } catch (m) {}
                    p.send(e.hasContent && e.data || null);
                    f = function(c, l) {
                        var v, s, m, u, D;
                        try {
                            if (f && (l || 4 === p.readyState))
                                if (f = d, n && (p.onreadystatechange = j.noop, zb && delete ta[n]), l) 4 !== p.readyState && p.abort();
                                else {
                                    v = p.status;
                                    m = p.getAllResponseHeaders();
                                    u = {};
                                    (D = p.responseXML) && D.documentElement && (u.xml = D);
                                    try {
                                        u.text =
                                            p.responseText
                                    } catch (y) {}
                                    try {
                                        s = p.statusText
                                    } catch (B) {
                                        s = ""
                                    }!v && e.isLocal && !e.crossDomain ? v = u.text ? 200 : 404 : 1223 === v && (v = 204)
                                }
                        } catch (C) {
                            l || q(-1, C)
                        }
                        u && q(v, s, u, m)
                    };
                    e.async ? 4 === p.readyState ? setTimeout(f, 0) : (n = ++Pd, zb && (ta || (ta = {}, j(c).unload(zb)), ta[n] = f), p.onreadystatechange = f) : f()
                },
                abort: function() {
                    f && f(0, 1)
                }
            }
        }
    });
    var Ea, $a, Qd = /^(?:toggle|show|hide)$/,
        Rd = RegExp("^(?:([-+])=|)(" + Ia + ")([a-z%]*)$", "i"),
        Sd = /queueHooks$/,
        Fa = [
            function(c, d, e) {
                var f, l, q, n, m, u, D = this,
                    y = c.style,
                    C = {},
                    E = [],
                    O = c.nodeType && v(c);
                e.queue ||
                    (m = j._queueHooks(c, "fx"), null == m.unqueued && (m.unqueued = 0, u = m.empty.fire, m.empty.fire = function() {
                        m.unqueued || u()
                    }), m.unqueued++, D.always(function() {
                        D.always(function() {
                            m.unqueued--;
                            j.queue(c, "fx").length || m.empty.fire()
                        })
                    }));
                1 === c.nodeType && ("height" in d || "width" in d) && (e.overflow = [y.overflow, y.overflowX, y.overflowY], "inline" === j.css(c, "display") && "none" === j.css(c, "float") && (!j.support.inlineBlockNeedsLayout || "inline" === Aa(c.nodeName) ? y.display = "inline-block" : y.zoom = 1));
                e.overflow && (y.overflow = "hidden",
                    j.support.shrinkWrapBlocks || D.done(function() {
                        y.overflow = e.overflow[0];
                        y.overflowX = e.overflow[1];
                        y.overflowY = e.overflow[2]
                    }));
                for (f in d) l = d[f], Qd.exec(l) && (delete d[f], l !== (O ? "hide" : "show") && E.push(f));
                if (l = E.length) {
                    q = j._data(c, "fxshow") || j._data(c, "fxshow", {});
                    O ? j(c).show() : D.done(function() {
                        j(c).hide()
                    });
                    D.done(function() {
                        var d;
                        j.removeData(c, "fxshow", !0);
                        for (d in C) j.style(c, d, C[d])
                    });
                    for (f = 0; f < l; f++) d = E[f], n = D.createTween(d, O ? q[d] : 0), C[d] = q[d] || j.style(c, d), d in q || (q[d] = n.start, O && (n.end = n.start,
                        n.start = "width" === d || "height" === d ? 1 : 0))
                }
            }
        ],
        va = {
            "*": [
                function(c, d) {
                    var e, f, l = this.createTween(c, d),
                        q = Rd.exec(d),
                        n = l.cur(),
                        v = +n || 0,
                        m = 1,
                        u = 20;
                    if (q) {
                        e = +q[2];
                        f = q[3] || (j.cssNumber[c] ? "" : "px");
                        if ("px" !== f && v) {
                            v = j.css(l.elem, c, !0) || e || 1;
                            do m = m || ".5", v /= m, j.style(l.elem, c, v + f); while (m !== (m = l.cur() / n) && 1 !== m && --u)
                        }
                        l.unit = f;
                        l.start = v;
                        l.end = q[1] ? v + (q[1] + 1) * e : e
                    }
                    return l
                }
            ]
        };
    j.Animation = j.extend(Fb, {
        tweener: function(c, d) {
            j.isFunction(c) ? (d = c, c = ["*"]) : c = c.split(" ");
            for (var e, f = 0, l = c.length; f < l; f++) e = c[f], va[e] = va[e] || [], va[e].unshift(d)
        },
        prefilter: function(c, d) {
            d ? Fa.unshift(c) : Fa.push(c)
        }
    });
    j.Tween = U;
    U.prototype = {
        constructor: U,
        init: function(c, d, e, f, l, q) {
            this.elem = c;
            this.prop = e;
            this.easing = l || "swing";
            this.options = d;
            this.start = this.now = this.cur();
            this.end = f;
            this.unit = q || (j.cssNumber[e] ? "" : "px")
        },
        cur: function() {
            var c = U.propHooks[this.prop];
            return c && c.get ? c.get(this) : U.propHooks._default.get(this)
        },
        run: function(c) {
            var d, e = U.propHooks[this.prop];
            return this.options.duration ? this.pos = d = j.easing[this.easing](c, this.options.duration *
                c, 0, 1, this.options.duration) : this.pos = d = c, this.now = (this.end - this.start) * d + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), e && e.set ? e.set(this) : U.propHooks._default.set(this), this
        }
    };
    U.prototype.init.prototype = U.prototype;
    U.propHooks = {
        _default: {
            get: function(c) {
                var d;
                return null == c.elem[c.prop] || c.elem.style && null != c.elem.style[c.prop] ? (d = j.css(c.elem, c.prop, !1, ""), !d || "auto" === d ? 0 : d) : c.elem[c.prop]
            },
            set: function(c) {
                j.fx.step[c.prop] ? j.fx.step[c.prop](c) : c.elem.style &&
                    (null != c.elem.style[j.cssProps[c.prop]] || j.cssHooks[c.prop]) ? j.style(c.elem, c.prop, c.now + c.unit) : c.elem[c.prop] = c.now
            }
        }
    };
    U.propHooks.scrollTop = U.propHooks.scrollLeft = {
        set: function(c) {
            c.elem.nodeType && c.elem.parentNode && (c.elem[c.prop] = c.now)
        }
    };
    j.each(["toggle", "show", "hide"], function(c, d) {
        var e = j.fn[d];
        j.fn[d] = function(f, l, q) {
            return null == f || "boolean" == typeof f || !c && j.isFunction(f) && j.isFunction(l) ? e.apply(this, arguments) : this.animate(Ga(d, !0), f, l, q)
        }
    });
    j.fn.extend({
        fadeTo: function(c, d, e, j) {
            return this.filter(v).css("opacity",
                0).show().end().animate({
                opacity: d
            }, c, e, j)
        },
        animate: function(c, d, e, f) {
            var l = j.isEmptyObject(c),
                q = j.speed(d, e, f);
            d = function() {
                var d = Fb(this, j.extend({}, c), q);
                l && d.stop(!0)
            };
            return l || !1 === q.queue ? this.each(d) : this.queue(q.queue, d)
        },
        stop: function(c, e, f) {
            var l = function(c) {
                var d = c.stop;
                delete c.stop;
                d(f)
            };
            return "string" != typeof c && (f = e, e = c, c = d), e && !1 !== c && this.queue(c || "fx", []), this.each(function() {
                var d = !0,
                    e = null != c && c + "queueHooks",
                    q = j.timers,
                    n = j._data(this);
                if (e) n[e] && n[e].stop && l(n[e]);
                else
                    for (e in n) n[e] &&
                        n[e].stop && Sd.test(e) && l(n[e]);
                for (e = q.length; e--;) q[e].elem === this && (null == c || q[e].queue === c) && (q[e].anim.stop(f), d = !1, q.splice(e, 1));
                (d || !f) && j.dequeue(this, c)
            })
        }
    });
    j.each({
        slideDown: Ga("show"),
        slideUp: Ga("hide"),
        slideToggle: Ga("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(c, d) {
        j.fn[c] = function(c, e, j) {
            return this.animate(d, c, e, j)
        }
    });
    j.speed = function(c, d, e) {
        var f = c && "object" == typeof c ? j.extend({}, c) : {
            complete: e || !e && d || j.isFunction(c) && c,
            duration: c,
            easing: e && d || d && !j.isFunction(d) && d
        };
        f.duration = j.fx.off ? 0 : "number" == typeof f.duration ? f.duration : f.duration in j.fx.speeds ? j.fx.speeds[f.duration] : j.fx.speeds._default;
        if (null == f.queue || !0 === f.queue) f.queue = "fx";
        return f.old = f.complete, f.complete = function() {
            j.isFunction(f.old) && f.old.call(this);
            f.queue && j.dequeue(this, f.queue)
        }, f
    };
    j.easing = {
        linear: function(c) {
            return c
        },
        swing: function(c) {
            return 0.5 - Math.cos(c * Math.PI) / 2
        }
    };
    j.timers = [];
    j.fx = U.prototype.init;
    j.fx.tick = function() {
        for (var c, d = j.timers,
            e = 0; e < d.length; e++) c = d[e], !c() && d[e] === c && d.splice(e--, 1);
        d.length || j.fx.stop()
    };
    j.fx.timer = function(c) {
        c() && j.timers.push(c) && !$a && ($a = setInterval(j.fx.tick, j.fx.interval))
    };
    j.fx.interval = 13;
    j.fx.stop = function() {
        clearInterval($a);
        $a = null
    };
    j.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    j.fx.step = {};
    j.expr && j.expr.filters && (j.expr.filters.animated = function(c) {
        return j.grep(j.timers, function(d) {
            return c === d.elem
        }).length
    });
    var vc = /^(?:body|html)$/i;
    j.fn.offset = function(c) {
        if (arguments.length) return c ===
            d ? this : this.each(function(d) {
                j.offset.setOffset(this, c, d)
            });
        var e, f, l, q, n, p, v, m = {
                top: 0,
                left: 0
            },
            u = this[0],
            D = u && u.ownerDocument;
        if (D) return (f = D.body) === u ? j.offset.bodyOffset(u) : (e = D.documentElement, j.contains(e, u) ? ("undefined" != typeof u.getBoundingClientRect && (m = u.getBoundingClientRect()), l = Gb(D), q = e.clientTop || f.clientTop || 0, n = e.clientLeft || f.clientLeft || 0, p = l.pageYOffset || e.scrollTop, v = l.pageXOffset || e.scrollLeft, {
            top: m.top + p - q,
            left: m.left + v - n
        }) : m)
    };
    j.offset = {
        bodyOffset: function(c) {
            var d = c.offsetTop,
                e = c.offsetLeft;
            return j.support.doesNotIncludeMarginInBodyOffset && (d += parseFloat(j.css(c, "marginTop")) || 0, e += parseFloat(j.css(c, "marginLeft")) || 0), {
                top: d,
                left: e
            }
        },
        setOffset: function(c, d, e) {
            var f = j.css(c, "position");
            "static" === f && (c.style.position = "relative");
            var l = j(c),
                q = l.offset(),
                n = j.css(c, "top"),
                v = j.css(c, "left"),
                m = {},
                u = {},
                D, y;
            ("absolute" === f || "fixed" === f) && -1 < j.inArray("auto", [n, v]) ? (u = l.position(), D = u.top, y = u.left) : (D = parseFloat(n) || 0, y = parseFloat(v) || 0);
            j.isFunction(d) && (d = d.call(c, e, q));
            null !=
                d.top && (m.top = d.top - q.top + D);
            null != d.left && (m.left = d.left - q.left + y);
            "using" in d ? d.using.call(c, m) : l.css(m)
        }
    };
    j.fn.extend({
        position: function() {
            if (this[0]) {
                var c = this[0],
                    d = this.offsetParent(),
                    e = this.offset(),
                    f = vc.test(d[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : d.offset();
                return e.top -= parseFloat(j.css(c, "marginTop")) || 0, e.left -= parseFloat(j.css(c, "marginLeft")) || 0, f.top += parseFloat(j.css(d[0], "borderTopWidth")) || 0, f.left += parseFloat(j.css(d[0], "borderLeftWidth")) || 0, {
                    top: e.top - f.top,
                    left: e.left - f.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var c =
                    this.offsetParent || F.body; c && !vc.test(c.nodeName) && "static" === j.css(c, "position");) c = c.offsetParent;
                return c || F.body
            })
        }
    });
    j.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, e) {
        var f = /Y/.test(e);
        j.fn[c] = function(l) {
            return j.access(this, function(c, l, q) {
                var n = Gb(c);
                if (q === d) return n ? e in n ? n[e] : n.document.documentElement[l] : c[l];
                n ? n.scrollTo(f ? j(n).scrollLeft() : q, f ? q : j(n).scrollTop()) : c[l] = q
            }, c, l, arguments.length, null)
        }
    });
    j.each({
        Height: "height",
        Width: "width"
    }, function(c, e) {
        j.each({
            padding: "inner" +
                c,
            content: e,
            "": "outer" + c
        }, function(f, l) {
            j.fn[l] = function(l, q) {
                var n = arguments.length && (f || "boolean" != typeof l),
                    v = f || (!0 === l || !0 === q ? "margin" : "border");
                return j.access(this, function(e, f, l) {
                    var q;
                    return j.isWindow(e) ? e.document.documentElement["client" + c] : 9 === e.nodeType ? (q = e.documentElement, Math.max(e.body["scroll" + c], q["scroll" + c], e.body["offset" + c], q["offset" + c], q["client" + c])) : l === d ? j.css(e, f, l, v) : j.style(e, f, l, v)
                }, e, n ? l : d, n, null)
            }
        })
    });
    c.jQuery = c.$ = j;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return j
        })
})(window);

function getInternetExplorerVersion() {
    var c = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (c = parseFloat(RegExp.$1));
    return c
}
var ie = getInternetExplorerVersion();

function getQueryVariable(c) {
    for (var d = window.location.search.substring(1).split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]) == c) return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function(c, d) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = d || null;
    this.settings = {};
    for (var e in this.defaults) this.settings[e] = this.defaults[e];
    if ("[object Object]" === Object.prototype.toString.call(c))
        for (var f in c) this.settings[f] = c[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
        this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var c = this,
            d = this.settings,
            e = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (e = jukebox.Manager.features);
        if (!0 === e.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var l = function(d) {
                    c.__addToManager(d)
                };
                this.context.addEventListener("canplaythrough", l, !0);
                window.setTimeout(function() {
                    c.context.removeEventListener("canplaythrough", l, !0);
                    l("timeout")
                }, d.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < e.channels ? !0 === d.autoplay ? this.context.autoplay = !0 : void 0 !== d.spritemap[d.autoplay] && this.play(d.autoplay) : 1 === e.channels && void 0 !== d.spritemap[d.autoplay] && (this.backgroundMusic = d.spritemap[d.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(d.autoplay));
            1 == e.channels && !0 !== d.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== c.isPlaying && (c.pause(), c.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                c.__wasAutoPaused && (c.resume(), delete c._wasAutoPaused)
            }))
        } else if (!0 === e.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            e = ["id=jukebox-flashstream-" + this.id, "autoplay=" + d.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(e);
            !0 === d.autoplay ? this.play(0) : d.spritemap[d.autoplay] && this.play(d.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(c) {
        var d, e = this.settings.flashMediaElement,
            f, l = {
                flashvars: c.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            d = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(d);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            l.movie = e + "?x=" + (Date.now ? Date.now() : +new Date);
            l.flashvars = c.join("&amp;");
            for (f in l) c = document.createElement("param"), c.setAttribute("name", f), c.setAttribute("value", l[f]), m.appendChild(c);
            d.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            d =
                document.createElement("embed");
            d.id = "jukebox-flashstream-" + this.id;
            d.setAttribute("type", "application/x-shockwave-flash");
            d.setAttribute("width", "100");
            d.setAttribute("height", "100");
            l.play = !1;
            l.loop = !1;
            l.src = e + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in l) d.setAttribute(f, l[f]);
            document.getElementsByTagName("body")[0].appendChild(d);
            this.context = d
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var c = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                c, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (c - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(c, d) {
        if (null !== this.isPlaying && !0 !== d) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(c, this.id);
        else {
            var e = this.settings.spritemap,
                f;
            if (void 0 !== e[c]) f = e[c].start;
            else if ("number" === typeof c) {
                f = c;
                for (var l in e)
                    if (f >= e[l].start && f <=
                        e[l].end) {
                        c = l;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(e[c]) && (this.isPlaying = this.settings.spritemap[c], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(c) {
        c = "number" ===
            typeof c ? c : this.__lastPosition;
        if (null !== c) return this.play(c), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(c) {
            this.context.volume = c;
            return 1E-4 > Math.abs(this.context.volume - c) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(c) {
            try {
                return this.context.currentTime = c, !0
            } catch (d) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(c) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(c), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(c) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(c) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(c) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(c))
        for (var e in c) this.settings[e] = c[e];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var c = window.Audio && new Audio;
        if (c && c.canPlayType && !1 === this.settings.useFlash) {
            for (var d = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }],
                e, f, l = 0, m = d.length; l < m; l++)
                if (f = d[l].e, d[l].m.length && "object" === typeof d[l].m)
                    for (var A = 0, n = d[l].m.length; A < n; A++)
                        if (e = d[l].m[A], "" !== c.canPlayType(e)) {
                            this.codecs[f] = e;
                            break
                        } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            c.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(c.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (y) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(c) {
        return this.__players && void 0 !== this.__players[c] ? this.__players[c] : null
    },
    __getClone: function(c, d) {
        for (var e in this.__clones) {
            var f = this.__clones[e];
            if (null === f.isPlaying && f.origin === c) return f
        }
        if ("[object Object]" === Object.prototype.toString.call(d)) {
            e = {};
            for (var l in d) e[l] = d[l];
            e.autoplay = !1;
            l = new jukebox.Player(e, c);
            l.isClone = !0;
            l.wasReady = !1;
            return this.__clones[l.id] = l
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var c = this.__queue[0],
                    d = this.__getPlayerById(c.origin);
                if (null !== d) {
                    var e = this.__getClone(c.origin, d.settings);
                    null !== e && (!0 === this.features.volume && (d = this.__players[c.origin]) && e.setVolume(d.getVolume()), this.add(e), e.play(c.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (e in this.__queue.length && 1 === this.features.channels && (c = this.__queue[0], d = this.__getPlayerById(c.origin), null !== d && d.play(c.pointer, !0), this.__queue.splice(0, 1)), this.__players) c = this.__players[e],
                    d = c.getCurrentTime() || 0, c.isPlaying && !1 === c.wasReady ? c.wasReady = c.setCurrentTime(c.isPlaying.start) : c.isPlaying && !0 === c.wasReady ? d > c.isPlaying.end && (!0 === c.isPlaying.loop ? c.play(c.isPlaying.start, !0) : c.stop()) : c.isClone && null === c.isPlaying ? this.remove(c) : void 0 !== c.backgroundMusic && null === c.isPlaying && d > c.backgroundMusic.end && c.backgroundHackForiOS()
    },
    getPlayableResource: function(c) {
        "[object Array]" !== Object.prototype.toString.call(c) && (c = [c]);
        for (var d = 0, e = c.length; d < e; d++) {
            var f = c[d],
                l = f.match(/\.([^\.]*)$/)[1];
            if (l && this.codecs[l]) return f
        }
        return null
    },
    add: function(c) {
        return c instanceof jukebox.Player && void 0 === this.__players[c.id] ? (this.__playersLength++, this.__players[c.id] = c, !0) : !1
    },
    remove: function(c) {
        return c instanceof jukebox.Player && void 0 !== this.__players[c.id] ? (this.__playersLength--, delete this.__players[c.id], !0) : !1
    },
    addToQueue: function(c, d) {
        return ("string" === typeof c || "number" === typeof c) && void 0 !== this.__players[d] ? (this.__queue.push({
            pointer: c,
            origin: d
        }), !0) : !1
    }
};
(function() {
    var c = {},
        d = null,
        e = !0,
        f = !1;
    try {
        "undefined" !== typeof AudioContext ? d = new AudioContext : "undefined" !== typeof webkitAudioContext ? d = new webkitAudioContext : e = !1
    } catch (l) {
        e = !1
    }
    if (!e)
        if ("undefined" !== typeof Audio) try {
            new Audio
        } catch (m) {
            f = !0
        } else f = !0;
    if (e) {
        var A = "undefined" === typeof d.createGain ? d.createGainNode() : d.createGain();
        A.gain.value = 1;
        A.connect(d.destination)
    }
    var n = function(c) {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = e;
        this.ctx = d;
        this.noAudio = f;
        this._howls = [];
        this._codecs = c;
        this.iOSAutoEnable = !0
    };
    n.prototype = {
        volume: function(c) {
            c = parseFloat(c);
            if (0 <= c && 1 >= c) {
                this._volume = c;
                e && (A.gain.value = c);
                for (var d in this._howls)
                    if (this._howls.hasOwnProperty(d) && !1 === this._howls[d]._webAudio)
                        for (c = 0; c < this._howls[d]._audioNode.length; c++) this._howls[d]._audioNode[c].volume = this._howls[d]._volume * this._volume;
                return this
            }
            return e ? A.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(c) {
            this._muted = c;
            e && (A.gain.value =
                c ? 0 : this._volume);
            for (var d in this._howls)
                if (this._howls.hasOwnProperty(d) && !1 === this._howls[d]._webAudio)
                    for (var f = 0; f < this._howls[d]._audioNode.length; f++) this._howls[d]._audioNode[f].muted = c
        },
        codecs: function(c) {
            return this._codecs[c]
        },
        _enableiOSAudio: function() {
            var c = this;
            if (!d || !c._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                c._iOSEnabled = !1;
                var e = function() {
                    var f = d.createBuffer(1, 1, 22050),
                        l = d.createBufferSource();
                    l.buffer = f;
                    l.connect(d.destination);
                    "undefined" === typeof l.start ?
                        l.noteOn(0) : l.start(0);
                    setTimeout(function() {
                        if (l.playbackState === l.PLAYING_STATE || l.playbackState === l.FINISHED_STATE) c._iOSEnabled = !0, c.iOSAutoEnable = !1, window.removeEventListener("touchend", e, !1)
                    }, 0)
                };
                window.addEventListener("touchend", e, !1);
                return c
            }
        }
    };
    var y = null,
        C = {};
    f || (y = new Audio, C = {
        mp3: !!y.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!y.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!y.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!y.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
            ""),
        aac: !!y.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(y.canPlayType("audio/x-m4a;") || y.canPlayType("audio/m4a;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(y.canPlayType("audio/x-mp4;") || y.canPlayType("audio/mp4;") || y.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!y.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var u = new n(C),
        E = function(c) {
            this._autoplay = c.autoplay || !1;
            this._buffer = c.buffer || !1;
            this._duration = c.duration || 0;
            this._format = c.format || null;
            this._loop = c.loop || !1;
            this._loaded = !1;
            this._sprite = c.sprite || {};
            this._src = c.src || "";
            this._pos3d = c.pos3d || [0, 0, -0.5];
            this._volume = void 0 !== c.volume ? c.volume : 1;
            this._urls = c.urls || [];
            this._rate = c.rate || 1;
            this._model = c.model || null;
            this._onload = [c.onload || function() {}];
            this._onloaderror = [c.onloaderror || function() {}];
            this._onend = [c.onend || function() {}];
            this._onpause = [c.onpause || function() {}];
            this._onplay = [c.onplay || function() {}];
            this._onendTimer = [];
            this._webAudio = e && !this._buffer;
            this._audioNode = [];
            this._webAudio &&
                this._setupAudioNode();
            "undefined" !== typeof d && d && u.iOSAutoEnable && u._enableiOSAudio();
            u._howls.push(this);
            this.load()
        };
    E.prototype = {
        load: function() {
            var d = this,
                e = null;
            if (f) d.on("loaderror", Error("No audio support."));
            else {
                for (var l = 0; l < d._urls.length; l++) {
                    var m, y;
                    if (d._format) m = d._format;
                    else if (y = d._urls[l], (m = /^data:audio\/([^;,]+);/i.exec(y)) || (m = /\.([^.]+)$/.exec(y.split("?", 1)[0])), m) m = m[1].toLowerCase();
                    else {
                        d.on("loaderror", Error("Could not extract format from passed URLs, please add format parameter."));
                        return
                    } if (C[m]) {
                        e = d._urls[l];
                        break
                    }
                }
                if (e) {
                    d._src = e;
                    if (d._webAudio) {
                        var E = e;
                        if (E in c) d._duration = c[E].duration, I(d);
                        else if (/^data:[^;]+;base64,/.test(E)) {
                            e = atob(E.split(",")[1]);
                            l = new Uint8Array(e.length);
                            for (m = 0; m < e.length; ++m) l[m] = e.charCodeAt(m);
                            G(l.buffer, d, E)
                        } else {
                            var A = new XMLHttpRequest;
                            A.open("GET", E, !0);
                            A.responseType = "arraybuffer";
                            A.onload = function() {
                                G(A.response, d, E)
                            };
                            A.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, delete c[E], d.load())
                            };
                            try {
                                A.send()
                            } catch (Ca) {
                                A.onerror()
                            }
                        }
                    } else {
                        var M = new Audio;
                        M.addEventListener("error", function() {
                            M.error && 4 === M.error.code && (n.noAudio = !0);
                            d.on("loaderror", {
                                type: M.error ? M.error.code : 0
                            })
                        }, !1);
                        d._audioNode.push(M);
                        M.src = e;
                        M._pos = 0;
                        M.preload = "auto";
                        M.volume = u._muted ? 0 : d._volume * u.volume();
                        var X = function() {
                            d._duration = Math.ceil(10 * M.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            M.removeEventListener("canplaythrough",
                                X, !1)
                        };
                        M.addEventListener("canplaythrough", X, !1);
                        M.load()
                    }
                    return d
                }
                d.on("loaderror", Error("No codec support for selected audio sources."))
            }
        },
        urls: function(c) {
            return c ? (this.stop(), this._urls = "string" === typeof c ? [c] : c, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(e, f) {
            var l = this;
            "function" === typeof e && (f = e);
            if (!e || "function" === typeof e) e = "_default";
            if (!l._loaded) return l.on("load", function() {
                l.play(e, f)
            }), l;
            if (!l._sprite[e]) return "function" === typeof f && f(), l;
            l._inactiveNode(function(n) {
                n._sprite =
                    e;
                var m = 0 < n._pos ? n._pos : l._sprite[e][0] / 1E3,
                    y = 0;
                l._webAudio ? (y = l._sprite[e][1] / 1E3 - n._pos, 0 < n._pos && (m = l._sprite[e][0] / 1E3 + m)) : y = l._sprite[e][1] / 1E3 - (m - l._sprite[e][0] / 1E3);
                var C = !(!l._loop && !l._sprite[e][2]),
                    E = "string" === typeof f ? f : Math.round(Date.now() * Math.random()) + "",
                    A;
                A = setTimeout(function() {
                    !l._webAudio && C && l.stop(E).play(e, E);
                    l._webAudio && !C && (l._nodeById(E).paused = !0, l._nodeById(E)._pos = 0, l._clearEndTimer(E));
                    !l._webAudio && !C && l.stop(E);
                    l.on("end", E)
                }, 1E3 * (y / l._rate));
                l._onendTimer.push({
                    timer: A,
                    id: E
                });
                if (l._webAudio) {
                    A = l._sprite[e][0] / 1E3;
                    var G = l._sprite[e][1] / 1E3;
                    n.id = E;
                    n.paused = !1;
                    A = [C, A, G];
                    G = l._nodeById(E);
                    G.bufferSource = d.createBufferSource();
                    G.bufferSource.buffer = c[l._src];
                    G.bufferSource.connect(G.panner);
                    G.bufferSource.loop = A[0];
                    A[0] && (G.bufferSource.loopStart = A[1], G.bufferSource.loopEnd = A[1] + A[2]);
                    G.bufferSource.playbackRate.value = l._rate;
                    l._playStart = d.currentTime;
                    n.gain.value = l._volume;
                    "undefined" === typeof n.bufferSource.start ? C ? n.bufferSource.noteGrainOn(0, m, 86400) : n.bufferSource.noteGrainOn(0,
                        m, y) : C ? n.bufferSource.start(0, m, 86400) : n.bufferSource.start(0, m, y)
                } else if (4 === n.readyState || !n.readyState && navigator.isCocoonJS) n.readyState = 4, n.id = E, n.currentTime = m, n.muted = u._muted || n.muted, n.volume = l._volume * u.volume(), setTimeout(function() {
                    n.play()
                }, 0);
                else {
                    l._clearEndTimer(E);
                    var I = e,
                        Da = f,
                        ua = function() {
                            l.play(I, Da);
                            n.removeEventListener("canplaythrough", ua, !1)
                        };
                    n.addEventListener("canplaythrough", ua, !1);
                    return l
                }
                l.on("play");
                "function" === typeof f && f(E);
                return l
            });
            return l
        },
        pause: function(c) {
            var d =
                this;
            if (!d._loaded) return d.on("play", function() {
                d.pause(c)
            }), d;
            d._clearEndTimer(c);
            var e = c ? d._nodeById(c) : d._activeNode();
            if (e)
                if (e._pos = d.pos(null, c), d._webAudio) {
                    if (!e.bufferSource || e.paused) return d;
                    e.paused = !0;
                    "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                } else e.pause();
            d.on("pause");
            return d
        },
        stop: function(c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.stop(c)
            }), d;
            d._clearEndTimer(c);
            var e = c ? d._nodeById(c) : d._activeNode();
            if (e)
                if (e._pos =
                    0, d._webAudio) {
                    if (!e.bufferSource || e.paused) return d;
                    e.paused = !0;
                    "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                } else isNaN(e.duration) || (e.pause(), e.currentTime = 0);
            return d
        },
        mute: function(c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.mute(c)
            }), d;
            var e = c ? d._nodeById(c) : d._activeNode();
            e && (d._webAudio ? e.gain.value = 0 : e.muted = !0);
            return d
        },
        unmute: function(c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() {
                d.unmute(c)
            }), d;
            var e = c ? d._nodeById(c) :
                d._activeNode();
            e && (d._webAudio ? e.gain.value = d._volume : e.muted = !1);
            return d
        },
        volume: function(c, d) {
            var e = this;
            c = parseFloat(c);
            if (0 <= c && 1 >= c) {
                e._volume = c;
                if (!e._loaded) return e.on("play", function() {
                    e.volume(c, d)
                }), e;
                var f = d ? e._nodeById(d) : e._activeNode();
                f && (e._webAudio ? f.gain.value = c : f.volume = c * u.volume());
                return e
            }
            return e._volume
        },
        loop: function(c) {
            return "boolean" === typeof c ? (this._loop = c, this) : this._loop
        },
        sprite: function(c) {
            return "object" === typeof c ? (this._sprite = c, this) : this._sprite
        },
        pos: function(c,
            e) {
            var f = this;
            if (!f._loaded) return f.on("load", function() {
                f.pos(c)
            }), "number" === typeof c ? f : f._pos || 0;
            c = parseFloat(c);
            var l = e ? f._nodeById(e) : f._activeNode();
            if (l) return 0 <= c ? (f.pause(e), l._pos = c, f.play(l._sprite, e), f) : f._webAudio ? l._pos + (d.currentTime - f._playStart) : l.currentTime;
            if (0 <= c) return f;
            for (l = 0; l < f._audioNode.length; l++)
                if (f._audioNode[l].paused && 4 === f._audioNode[l].readyState) return f._webAudio ? f._audioNode[l]._pos : f._audioNode[l].currentTime
        },
        pos3d: function(c, d, e, f) {
            var l = this;
            d = "undefined" ===
                typeof d || !d ? 0 : d;
            e = "undefined" === typeof e || !e ? -0.5 : e;
            if (!l._loaded) return l.on("play", function() {
                l.pos3d(c, d, e, f)
            }), l;
            if (0 <= c || 0 > c) {
                if (l._webAudio) {
                    var n = f ? l._nodeById(f) : l._activeNode();
                    n && (l._pos3d = [c, d, e], n.panner.setPosition(c, d, e), n.panner.panningModel = l._model || "HRTF")
                }
            } else return l._pos3d;
            return l
        },
        fade: function(c, d, e, f, l) {
            var n = this,
                m = Math.abs(c - d),
                u = c > d ? "down" : "up",
                m = m / 0.01,
                y = e / m;
            if (!n._loaded) return n.on("load", function() {
                n.fade(c, d, e, f, l)
            }), n;
            n.volume(c, l);
            for (var C = 1; C <= m; C++)(function() {
                var c =
                    Math.round(1E3 * (n._volume + ("up" === u ? 0.01 : -0.01) * C)) / 1E3;
                setTimeout(function() {
                    n.volume(c, l);
                    c === d && f && f()
                }, y * C)
            })()
        },
        fadeIn: function(c, d, e) {
            return this.volume(0).play().fade(0, c, d, e)
        },
        fadeOut: function(c, d, e, f) {
            var l = this;
            return l.fade(l._volume, c, d, function() {
                e && e();
                l.pause(f);
                l.on("end")
            }, f)
        },
        _nodeById: function(c) {
            for (var d = this._audioNode[0], e = 0; e < this._audioNode.length; e++)
                if (this._audioNode[e].id === c) {
                    d = this._audioNode[e];
                    break
                }
            return d
        },
        _activeNode: function() {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (!this._audioNode[d].paused) {
                    c =
                        this._audioNode[d];
                    break
                }
            this._drainPool();
            return c
        },
        _inactiveNode: function(c) {
            for (var d = null, e = 0; e < this._audioNode.length; e++)
                if (this._audioNode[e].paused && 4 === this._audioNode[e].readyState) {
                    c(this._audioNode[e]);
                    d = !0;
                    break
                }
            this._drainPool();
            if (!d) {
                var f;
                if (this._webAudio) f = this._setupAudioNode(), c(f);
                else {
                    this.load();
                    f = this._audioNode[this._audioNode.length - 1];
                    var l = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                        n = function() {
                            f.removeEventListener(l, n, !1);
                            c(f)
                        };
                    f.addEventListener(l, n, !1)
                }
            }
        },
        _drainPool: function() {
            var c = 0,
                d;
            for (d = 0; d < this._audioNode.length; d++) this._audioNode[d].paused && c++;
            for (d = this._audioNode.length - 1; 0 <= d && !(5 >= c); d--) this._audioNode[d].paused && (this._webAudio && this._audioNode[d].disconnect(0), c--, this._audioNode.splice(d, 1))
        },
        _clearEndTimer: function(c) {
            for (var d = -1, e = 0; e < this._onendTimer.length; e++)
                if (this._onendTimer[e].id === c) {
                    d = e;
                    break
                }
            if (c = this._onendTimer[d]) clearTimeout(c.timer), this._onendTimer.splice(d, 1)
        },
        _setupAudioNode: function() {
            var c = this._audioNode,
                e = this._audioNode.length;
            c[e] = "undefined" === typeof d.createGain ? d.createGainNode() : d.createGain();
            c[e].gain.value = this._volume;
            c[e].paused = !0;
            c[e]._pos = 0;
            c[e].readyState = 4;
            c[e].connect(A);
            c[e].panner = d.createPanner();
            c[e].panner.panningModel = this._model || "equalpower";
            c[e].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            c[e].panner.connect(c[e]);
            return c[e]
        },
        on: function(c, d) {
            var e = this["_on" + c];
            if ("function" === typeof d) e.push(d);
            else
                for (var f = 0; f < e.length; f++) d ? e[f].call(this, d) :
                    e[f].call(this);
            return this
        },
        off: function(c, d) {
            var e = this["_on" + c];
            if (d)
                for (var f = 0; f < e.length; f++) {
                    if (d === e[f]) {
                        e.splice(f, 1);
                        break
                    }
                } else this["_on" + c] = [];
            return this
        },
        unload: function() {
            for (var d = this._audioNode, e = 0; e < this._audioNode.length; e++) d[e].paused || (this.stop(d[e].id), this.on("end", d[e].id)), this._webAudio ? d[e].disconnect(0) : d[e].src = "";
            for (e = 0; e < this._onendTimer.length; e++) clearTimeout(this._onendTimer[e].timer);
            d = u._howls.indexOf(this);
            null !== d && 0 <= d && u._howls.splice(d, 1);
            delete c[this._src]
        }
    };
    if (e) var G = function(e, f, l) {
            d.decodeAudioData(e, function(d) {
                d && (c[l] = d, I(f, d))
            }, function(c) {
                f.on("loaderror", c)
            })
        },
        I = function(c, d) {
            c._duration = d ? d.duration : c._duration;
            0 === Object.getOwnPropertyNames(c._sprite).length && (c._sprite = {
                _default: [0, 1E3 * c._duration]
            });
            c._loaded || (c._loaded = !0, c.on("load"));
            c._autoplay && c.play()
        };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: u,
            Howl: E
        }
    });
    "undefined" !== typeof exports && (exports.Howler = u, exports.Howl = E);
    "undefined" !== typeof window && (window.Howler =
        u, window.Howl = E)
})();
(function(c) {
    Number.prototype.map = function(c, d, e, f) {
        return e + (f - e) * ((this - c) / (d - c))
    };
    Number.prototype.limit = function(c, d) {
        return Math.min(d, Math.max(c, this))
    };
    Number.prototype.round = function(c) {
        c = Math.pow(10, c || 0);
        return Math.round(this * c) / c
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(c) {
        for (var d = this.length; d--;) this[d] === c && this.splice(d, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Array.prototype.unique1 = function(){
    	
		 var res = [this[0]];
		 for(var i = 1; i < this.length; i++){
		  var repeat = false;
		  for(var j = 0; j < res.length; j++){
		   if(this[i] == res[j]){
		    repeat = true;
		    break;
		   }
		  }
		  if(!repeat){
		   res.push(this[i]);
		  }
		 }
		 return res;
	};
    Function.prototype.bind = Function.prototype.bind || function(c) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var d = Array.prototype.slice.call(arguments, 1),
            e = this,
            f = function() {},
            l = function() {
                return e.apply(this instanceof f && c ?
                    this : c, d.concat(Array.prototype.slice.call(arguments)))
            };
        f.prototype = this.prototype;
        l.prototype = new f;
        return l
    };
    c.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: c,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: c.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(c) {
            return "#" == c.charAt(0) ? document.getElementById(c.substr(1)) : document.getElementsByTagName(c)
        },
        $new: function(c) {
            return document.createElement(c)
        },
        copy: function(c) {
            if (!c || "object" != typeof c ||
                c instanceof HTMLElement || c instanceof ig.Class) return c;
            if (c instanceof Array)
                for (var d = [], e = 0, f = c.length; e < f; e++) d[e] = ig.copy(c[e]);
            else
                for (e in d = {}, c) d[e] = ig.copy(c[e]);
            return d
        },
        merge: function(c, d) {
            for (var e in d) {
                var f = d[e];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f) c[e] = f;
                else {
                    if (!c[e] || "object" != typeof c[e]) c[e] = f instanceof Array ? [] : {};
                    ig.merge(c[e], f)
                }
            }
            return c
        },
        ksort: function(c) {
            if (!c || "object" != typeof c) return [];
            var d = [],
                e = [],
                f;
            for (f in c) d.push(f);
            d.sort();
            for (f = 0; f < d.length; f++) e.push(c[d[f]]);
            return e
        },
        setVendorAttribute: function(c, d, e) {
            var f = d.charAt(0).toUpperCase() + d.substr(1);
            c[d] = "undefined" !== typeof c.imageSmoothingEnabled ? c["ms" + f] = c["moz" + f] = c["o" + f] = e : c["ms" + f] = c["moz" + f] = c["webkit" + f] = c["o" + f] = e
        },
        getVendorAttribute: function(c, d) {
            var e = d.charAt(0).toUpperCase() + d.substr(1);
            return "undefined" !== typeof c.imageSmoothingEnabled ? c[d] || c["ms" + e] || c["moz" + e] || c["o" + e] : c[d] || c["ms" + e] || c["moz" + e] || c["webkit" + e] || c["o" + e]
        },
        normalizeVendorAttribute: function(c,
            d) {
            var e = ig.getVendorAttribute(c, d);
            !c[d] && e && (c[d] = e)
        },
        getImagePixels: function(c, d, e, f, l) {
            var m = ig.$new("canvas");
            m.width = c.width;
            m.height = c.height;
            var A = m.getContext("2d");
            ig.System.SCALE.CRISP(m, A);
            var q = ig.getVendorAttribute(A, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(A, "getImageDataHD");
            var v = c.width / q,
                D = c.height / q;
            m.width = Math.ceil(v);
            m.height = Math.ceil(D);
            A.drawImage(c, 0, 0, v, D);
            return 1 === q ? A.getImageData(d, e, f, l) : A.getImageDataHD(d, e, f, l)
        },
        module: function(c) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[c] && ig.modules[c].body) throw "Module '" + c + "' is already defined";
            ig._current = {
                name: c,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[c] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(c) {
            ig._current.body = c;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(c) {
            ig.resources.push(c)
        },
        setNocache: function(c) {
            ig.nocache = c ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(c, d) {
            ig.modules[c] = {
                name: c,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var e = ig.prefix + ig.lib + c.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = e;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() {
                throw "Failed to load module " + c + " at " + e + " required from " + d;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var c = !1, d =
                0; d < ig._loadQueue.length; d++) {
                for (var e = ig._loadQueue[d], f = !0, l = 0; l < e.requires.length; l++) {
                    var m = e.requires[l];
                    ig.modules[m] ? ig.modules[m].loaded || (f = !1) : (f = !1, ig._loadScript(m, e.name))
                }
                f && e.body && (ig._loadQueue.splice(d, 1), e.loaded = !0, e.body(), c = !0, d--)
            }
            if (c) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                c = [];
                for (d = 0; d < ig._loadQueue.length; d++) {
                    f = [];
                    m = ig._loadQueue[d].requires;
                    for (l = 0; l < m.length; l++) e = ig.modules[m[l]], (!e || !e.loaded) && f.push(m[l]);
                    c.push(ig._loadQueue[d].name +
                        " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + c.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                c.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: c.innerWidth,
                height: c.innerHeight
            };
            ig.ua.screen = {
                width: c.screen.availWidth * ig.ua.pixelRatio,
                height: c.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                c || c.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), c.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(c, "requestAnimationFrame");
    if (c.requestAnimationFrame) {
        var d = 1,
            e = {};
        c.ig.setAnimation = function(f, l) {
            var m = d++;
            e[m] = !0;
            var u = function() {
                e[m] && (c.requestAnimationFrame(u, l), f())
            };
            c.requestAnimationFrame(u, l);
            return m
        };
        c.ig.clearAnimation = function(c) {
            delete e[c]
        }
    } else c.ig.setAnimation = function(d) {
        return c.setInterval(d, 1E3 / 60)
    }, c.ig.clearAnimation = function(d) {
        c.clearInterval(d)
    };
    var f = !1,
        l = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        m = 0;
    c.ig.Class = function() {};
    var A = function(c) {
        var d = this.prototype,
            e = {},
            f;
        for (f in c) "function" ==
            typeof c[f] && "function" == typeof d[f] && l.test(c[f]) ? (e[f] = d[f], d[f] = function(c, d) {
                return function() {
                    var f = this.parent;
                    this.parent = e[c];
                    var l = d.apply(this, arguments);
                    this.parent = f;
                    return l
                }
            }(f, c[f])) : d[f] = c[f]
    };
    c.ig.Class.extend = function(d) {
        function e() {
            if (!f) {
                if (this.staticInstantiate) {
                    var c = this.staticInstantiate.apply(this, arguments);
                    if (c) return c
                }
                for (var d in this) "object" == typeof this[d] && (this[d] = ig.copy(this[d]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var C = this.prototype;
        f = !0;
        var u = new this;
        f = !1;
        for (var E in d) u[E] = "function" == typeof d[E] && "function" == typeof C[E] && l.test(d[E]) ? function(c, d) {
            return function() {
                var e = this.parent;
                this.parent = C[c];
                var f = d.apply(this, arguments);
                this.parent = e;
                return f
            }
        }(E, d[E]) : d[E];
        e.prototype = u;
        e.prototype.constructor = e;
        e.extend = c.ig.Class.extend;
        e.inject = A;
        e.classId = u.classId = ++m;
        return e
    };
    c.ImpactMixin && ig.merge(ig, c.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(c) {
            return ig.Image.cache[c] || null
        },
        init: function(c) {
            this.path = c;
            this.load()
        },
        load: function(c) {
            this.loaded ? c && c(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = c || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(c) {
            var d = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                e = this.width * c,
                f = this.height * c,
                l = ig.$new("canvas");
            l.width = e;
            l.height = f;
            for (var m = l.getContext("2d"), A = m.getImageData(0, 0, e, f), n = 0; n < f; n++)
                for (var y = 0; y < e; y++) {
                    var C = 4 * (Math.floor(n / c) * this.width + Math.floor(y / c)),
                        u = 4 * (n * e + y);
                    A.data[u] = d.data[C];
                    A.data[u + 1] = d.data[C + 1];
                    A.data[u + 2] = d.data[C + 2];
                    A.data[u + 3] = d.data[C + 3]
                }
            m.putImageData(A, 0, 0);
            this.data = l
        },
        draw: function(c, d, e, f, l, m) {
            if (this.loaded) {
                var A = ig.system.scale;
                l = (l ? l : this.width) * A;
                m = (m ? m : this.height) * A;
                ig.system.context.drawImage(this.data,
                    e ? e * A : 0, f ? f * A : 0, l, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), l, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function(c, d, e, f, l, m, A) {
            l = l ? l : f;
            if (this.loaded && !(f > this.width || l > this.height)) {
                var n = ig.system.scale,
                    y = Math.floor(f * n),
                    C = Math.floor(l * n),
                    u = m ? -1 : 1,
                    E = A ? -1 : 1;
                if (m || A) ig.system.context.save(), ig.system.context.scale(u, E);
                ig.system.context.drawImage(this.data, Math.floor(e * f) % this.width * n, Math.floor(e * f / this.width) * l * n, y, C, ig.system.getDrawPos(c) * u - (m ? y : 0), ig.system.getDrawPos(d) * E - (A ? C : 0), y, C);
                (m ||
                    A) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var c in ig.Image.cache) ig.Image.cache[c].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(c) {
            this._loadMetrics(this.data);
            this.parent(c)
        },
        widthForString: function(c) {
            if (-1 !== c.indexOf("\n")) {
                c = c.split("\n");
                for (var d = 0, e = 0; e < c.length; e++) d = Math.max(d, this._widthForLine(c[e]));
                return d
            }
            return this._widthForLine(c)
        },
        _widthForLine: function(c) {
            for (var d = 0, e = 0; e < c.length; e++) d += this.widthMap[c.charCodeAt(e) - this.firstChar] +
                this.letterSpacing;
            return d
        },
        heightForString: function(c) {
            return c.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(c, d, e, f) {
            "string" != typeof c && (c = c.toString());
            if (-1 !== c.indexOf("\n")) {
                c = c.split("\n");
                for (var l = this.height + this.lineSpacing, m = 0; m < c.length; m++) this.draw(c[m], d, e + m * l, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) m = this._widthForLine(c), d -= f == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < c.length; m++) f = c.charCodeAt(m),
                    d += this._drawChar(f - this.firstChar, d, e);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += c.length
            }
        },
        _drawChar: function(c, d, e) {
            if (!this.loaded || 0 > c || c >= this.indices.length) return 0;
            var f = ig.system.scale,
                l = this.widthMap[c] * f,
                m = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[c] * f, 0, l, m, ig.system.getDrawPos(d), ig.system.getDrawPos(e), l, m);
            return this.widthMap[c] + this.letterSpacing
        },
        _loadMetrics: function(c) {
            this.height = c.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var d = ig.getImagePixels(c, 0, c.height - 1, c.width, 1), e = 0, f = 0, l = 0; l < c.width; l++) {
                var m = 4 * l + 3;
                127 < d.data[m] ? f++ : 128 > d.data[m] && f && (this.widthMap.push(f), this.indices.push(l - f), e++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(l - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var c = new Audio, d = 0; d < ig.Sound.use.length; d++) {
                    var e = ig.Sound.use[d];
                    if (c.canPlayType(e.mime)) {
                        this.format = e;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(c, d, e) {
            var f = ig.prefix + c.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[c]) {
                if (d && this.clips[c].length < ig.Sound.channels)
                    for (d = this.clips[c].length; d <
                        ig.Sound.channels; d++) {
                        var l = new Audio(f);
                        l.load();
                        this.clips[c].push(l)
                    }
                return this.clips[c][0]
            }
            var m = new Audio(f);
            e && (m.addEventListener("canplaythrough", function n(d) {
                m.removeEventListener("canplaythrough", n, !1);
                e(c, !0, d)
            }, !1), m.addEventListener("error", function(d) {
                e(c, !1, d)
            }, !1));
            m.preload = "auto";
            m.load();
            this.clips[c] = [m];
            if (d)
                for (d = 1; d < ig.Sound.channels; d++) l = new Audio(f), l.load(), this.clips[c].push(l);
            return m
        },
        get: function(c) {
            c = this.clips[c];
            for (var d = 0, e; e = c[d++];)
                if (e.paused || e.ended) return e.ended &&
                    (e.currentTime = 0), e;
            c[0].pause();
            c[0].currentTime = 0;
            return c[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(c, d) {
            if (ig.Sound.enabled) {
                var e = ig.soundManager.load(c instanceof ig.Sound ? c.path : c, !1);
                e.loop = this._loop;
                e.volume = this._volume;
                e.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(e);
                d && (this.namedTracks[d] = e);
                this.currentTrack ||
                    (this.currentTrack = e)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(c) {
            if (c && this.namedTracks[c]) c = this.namedTracks[c], c != this.currentTrack && (this.stop(),
                this.currentTrack = c);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(c) {
            this._loop = c;
            for (var d in this.tracks) this.tracks[d].loop = c
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(c) {
            this._volume = c.limit(0, 1);
            for (var d in this.tracks) this.tracks[d].volume = this._volume
        },
        fadeOut: function(c) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(c), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var c = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= c ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = c
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(c, d) {
            this.path = c;
            this.multiChannel = !1 !== d;
            this.load()
        },
        load: function(c) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, c) : ig.addResource(this) : c && c(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(c, d) {
            this.gameClass = c;
            this.resources = d;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var e = 0; e < this.resources.length; e++) this._unloaded.push(this.resources[e].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var c =
                    0; c < this.resources.length; c++) this.loadResource(this.resources[c]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(c) {
            c.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(c, d) {
            if (d) this._unloaded.erase(c);
            else throw "Failed to load resource: " + c;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(c) {
            this.last = this.base = ig.Timer.time;
            this.target = c || 0
        },
        set: function(c) {
            this.target = c || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var c = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : c
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var c = Date.now();
        ig.Timer.time += Math.min((c - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = c
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,       
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(c, d, e, f, l) {
            this.fps = d;
            this.clock = new ig.Timer;
            this.canvas = ig.$(c);
            this.resize(e, f, l);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(c, d, e) {
            this.width = c;
            this.height = d;
            this.scale = e || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(c) {
            this.running ? this.newGameClass = c : this.setGameNow(c)
        },
        setGameNow: function(c) {
            ig.game = new c;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(c) {
            if ("function" == typeof c.run) this.delegate = c, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(c) {
            this.context.fillStyle = c;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(c) {
            return Math.round(c) * this.scale
        },
        SMOOTH: function(c) {
            return Math.round(c * this.scale)
        },
        SUBPIXEL: function(c) {
            return c * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(c, d) {
            ig.setVendorAttribute(d, "imageSmoothingEnabled", !1);
            c.style.imageRendering = "-moz-crisp-edges";
            c.style.imageRendering = "-o-crisp-edges";
            c.style.imageRendering = "-webkit-optimize-contrast";
            c.style.imageRendering = "crisp-edges";
            c.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(c, d) {
            ig.setVendorAttribute(d, "imageSmoothingEnabled", !0);
            c.style.imageRendering = "";
            c.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var c = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", c, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", c, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(c) {
            var d = this.bindings[0 < (c.wheelDelta ? c.wheelDelta : -1 * c.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            d && (this.actions[d] = !0, this.presses[d] = !0, this.delayedKeyup[d] = !0, c.stopPropagation(), c.preventDefault())
        },
        mousemove: function(c) {
            var d =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (d = ig.system.realWidth);
            var d = ig.system.scale * (d / ig.system.realWidth),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            c = c.touches ? c.touches[0] : c;
            this.mouse.x = (c.clientX - e.left) / d;
            this.mouse.y = (c.clientY - e.top) / d
        },
        contextmenu: function(c) {
            this.bindings[ig.KEY.MOUSE2] && (c.stopPropagation(), c.preventDefault())
        },
        keydown: function(c) {
            var d = c.target.tagName;
            if (!("INPUT" == d || "TEXTAREA" ==
                d))
                if (d = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), d = this.bindings[d]) this.actions[d] = !0, this.locks[d] || (this.presses[d] = !0, this.locks[d] = !0), c.stopPropagation(), c.preventDefault()
        },
        keyup: function(c) {
            var d = c.target.tagName;
            if (!("INPUT" == d || "TEXTAREA" == d))
                if (d = this.bindings["keyup" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[d] = !0, c.stopPropagation(), c.preventDefault()
        },
        devicemotion: function(c) {
            this.accel =
                c.accelerationIncludingGravity
        },
        bind: function(c, d) {
            0 > c ? this.initMouse() : 0 < c && this.initKeyboard();
            this.bindings[c] = d
        },
        bindTouch: function(c, d) {
            var e = ig.$(c),
                f = this;
            e.addEventListener("touchstart", function(c) {
                f.touchStart(c, d)
            }, !1);
            e.addEventListener("touchend", function(c) {
                f.touchEnd(c, d)
            }, !1);
            e.addEventListener("MSPointerDown", function(c) {
                f.touchStart(c, d)
            }, !1);
            e.addEventListener("MSPointerUp", function(c) {
                f.touchEnd(c, d)
            }, !1)
        },
        unbind: function(c) {
            this.delayedKeyup[this.bindings[c]] = !0;
            this.bindings[c] =
                null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(c) {
            return this.actions[c]
        },
        pressed: function(c) {
            return this.presses[c]
        },
        released: function(c) {
            return !!this.delayedKeyup[c]
        },
        clearPressed: function() {
            for (var c in this.delayedKeyup) this.actions[c] = !1, this.locks[c] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(c, d) {
            this.actions[d] = !0;
            this.presses[d] = !0;
            c.stopPropagation();
            c.preventDefault();
            return !1
        },
        touchEnd: function(c,
            d) {
            this.delayedKeyup[d] = !0;
            c.stopPropagation();
            c.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(c, d, e, f, l, m, A) {
        ig.system = new ig.System(c, e, f, l, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(A || ig.Loader)(d, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(c, d, e) {
            this.width = d;
            this.height = e;
            this.image = new ig.Image(c)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(c, d, e, f) {
            this.sheet = c;
            this.pivot = {
                x: c.width / 2,
                y: c.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = d;
            this.sequence = e;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(c) {
            this.timer.set(this.frameTime * -c - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var c = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(c / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : c % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(c, d) {
            var e = Math.max(this.sheet.width, this.sheet.height);
            c > ig.system.width || d > ig.system.height || (0 > c + e || 0 > d + e) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(c, d, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(c + this.pivot.x), ig.system.getDrawPos(d + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(c,d, e) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = c;
            this.pos.y = this.last.y = d;
            ig.merge(this, e)
        },
        reset: function(c, d, e) {
            var f = this.constructor.prototype;
            this.pos.x = c;
            this.pos.y = d;
            this.last.x = c;
            this.last.y = d;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, e)
        },
        addAnim: function(c, d, e, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                c + " to.";
            d = new ig.Animation(this.animSheet, d, e, f);
            this.anims[c] = d;
            this.currentAnim || (this.currentAnim = d);
            return d
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var c = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(c);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(c, d, e, f) {
            return d ? (c + d * ig.system.tick).limit(-f, f) : e ? (d = e * ig.system.tick, 0 < c - d ? c - d : 0 > c + d ? c + d : 0) : c.limit(-f, f)
        },
        handleMovementTrace: function(c) {
            this.standing = !1;
            c.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            c.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (c.collision.slope) {
                var d = c.collision.slope;
                if (0 < this.bounciness) {
                    var e = this.vel.x * d.nx + this.vel.y * d.ny;
                    this.vel.x = (this.vel.x - 2 * d.nx * e) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * d.ny * e) * this.bounciness
                } else e = (this.vel.x * d.x + this.vel.y * d.y) / (d.x * d.x + d.y * d.y), this.vel.x = d.x * e, this.vel.y = d.y * e, d = Math.atan2(d.x, d.y), d > this.slopeStanding.min && d < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = c.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(c) {
            this.health -= c;
            0 >= this.health && this.kill()
        },
        touches: function(c) {
            return !(this.pos.x >= c.pos.x + c.size.x || this.pos.x + this.size.x <= c.pos.x || this.pos.y >= c.pos.y + c.size.y || this.pos.y + this.size.y <= c.pos.y)
        },
        distanceTo: function(c) {
            var d = this.pos.x + this.size.x / 2 - (c.pos.x + c.size.x / 2);
            c = this.pos.y + this.size.y / 2 - (c.pos.y + c.size.y / 2);
            return Math.sqrt(d * d + c * c)
        },
        angleTo: function(c) {
            return Math.atan2(c.pos.y +
                c.size.y / 2 - (this.pos.y + this.size.y / 2), c.pos.x + c.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {	//COLLIDES 碰撞
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8	//接住
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(c, d) {
        c.checkAgainst & d.type && c.check(d);
        d.checkAgainst & c.type && d.check(c);
        c.collides && d.collides && c.collides + d.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(c, d)
    };
    ig.Entity.solveCollision =	//游戏接住食物的方法
        function(c, d) {
            var e = null;
            //console.log(d.collides);	//8
            //console.log(c.collides);	//1
            if (c.collides == ig.Entity.COLLIDES.LITE || d.collides == ig.Entity.COLLIDES.FIXED) e = c;	
            else if (d.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) e = d;
            c.zIndex = -1;	//c为下落的食物 d为底

            c.last.x + c.size.x > d.last.x && 
            c.last.x < d.last.x + d.size.x ? (c.last.y < d.last.y ? ig.Entity.seperateOnYAxis(c, d, e) : ig.Entity.seperateOnYAxis(d, c, e), c.collideWith(d, "y")
            , d.collideWith(c, "y")
            ) : c.last.y + c.size.y > d.last.y && c.last.y < d.last.y + d.size.y && (c.last.x < d.last.x ? ig.Entity.seperateOnXAxis(c, d, e) : ig.Entity.seperateOnXAxis(d,
                c, e), c.collideWith(d, "x"), d.collideWith(c, "x"))
        };
    ig.Entity.seperateOnXAxis = function(c, d, e) {   	
//      var f = c.pos.x + c.size.x - d.pos.x;
//      e ? (e.vel.x = -e.vel.x * e.bounciness + (c === e ? d : c).vel.x, d = ig.game.collisionMap.trace(e.pos.x, e.pos.y, e == c ? -f : f, 0, e.size.x, e.size.y), e.pos.x = d.pos.x) : (e = (c.vel.x - d.vel.x) / 2, c.vel.x = -e, d.vel.x = e, e = ig.game.collisionMap.trace(c.pos.x, c.pos.y, -f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.floor(e.pos.x), c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f / 2, 0, d.size.x, d.size.y), d.pos.x = Math.ceil(c.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(c, d, e) {
//      var f = c.pos.y + c.size.y - d.pos.y;
//      if (e) {
//          d = c === e ? d : c;
//          e.vel.y = -e.vel.y * e.bounciness + d.vel.y;
//          var l = 0;
//          e == c && Math.abs(e.vel.y - d.vel.y) < e.minBounceVelocity && (e.standing = !0, l = d.vel.x * ig.system.tick);
//          c = ig.game.collisionMap.trace(e.pos.x, e.pos.y, l, e == c ? -f : f, e.size.x, e.size.y);
//          e.pos.y = c.pos.y;
//          e.pos.x = c.pos.x
//      } else ig.game.gravity && (d.standing || 0 < c.vel.y) ? (e = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, -(c.pos.y + c.size.y - d.pos.y), c.size.x, c.size.y), c.pos.y = e.pos.y, 0 < c.bounciness &&
//          c.vel.y > c.minBounceVelocity ? c.vel.y *= -c.bounciness : (c.standing = !0, c.vel.y = 0)) : (e = (c.vel.y - d.vel.y) / 2, c.vel.y = -e, d.vel.y = e, l = d.vel.x * ig.system.tick, e = ig.game.collisionMap.trace(c.pos.x, c.pos.y, l, -f / 2, c.size.x, c.size.y), c.pos.y = e.pos.y, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, 0, f / 2, d.size.x, d.size.y), d.pos.y = c.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(c, d) {
            this.tilesize = c;
            this.data = d;
            this.height = d.length;
            this.width = d[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(c, d) {
            var e = Math.floor(c / this.tilesize),
                f = Math.floor(d / this.tilesize);
            return 0 <= e && e < this.width && 0 <= f && f < this.height ? this.data[f][e] : 0
        },
        setTile: function(c, d, e) {
            c = Math.floor(c / this.tilesize);
            d = Math.floor(d /
                this.tilesize);
            0 <= c && c < this.width && 0 <= d && d < this.height && (this.data[d][c] = e)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(c, d, l) {
            this.parent(c, d);
            this.tiledef = l || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef) m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        },
        trace: function(c, d, l, m, A, n) {
            var y = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: c,
                        y: d
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                C = Math.ceil(Math.max(Math.abs(l), Math.abs(m)) / this.tilesize);
            if (1 < C)
                for (var u = l / C, E = m / C, G = 0; G < C && (u || E) && !(this._traceStep(y,
                    c, d, u, E, A, n, l, m, G), c = y.pos.x, d = y.pos.y, y.collision.x && (l = u = 0), y.collision.y && (m = E = 0), y.collision.slope); G++);
            else this._traceStep(y, c, d, l, m, A, n, l, m, 0);
            return y
        },
        _traceStep: function(c, d, l, m, A, n, y, C, u, E) {
            c.pos.x += m;
            c.pos.y += A;
            var G = 0;
            if (m) {
                var I = 0 < m ? n : 0,
                    q = 0 > m ? this.tilesize : 0,
                    G = Math.max(Math.floor(l / this.tilesize), 0),
                    v = Math.min(Math.ceil((l + y) / this.tilesize), this.height);
                m = Math.floor((c.pos.x + I) / this.tilesize);
                var D = Math.floor((d + I) / this.tilesize);
                if (0 < E || m == D || 0 > D || D >= this.width) D = -1;
                if (0 <= m && m < this.width)
                    for (var O =
                        G; O < v && !(-1 != D && (G = this.data[O][D], 1 < G && G <= this.lastSlope && this._checkTileDef(c, G, d, l, C, u, n, y, D, O))); O++)
                        if (G = this.data[O][m], 1 == G || G > this.lastSlope || 1 < G && this._checkTileDef(c, G, d, l, C, u, n, y, m, O)) {
                            if (1 < G && G <= this.lastSlope && c.collision.slope) break;
                            c.collision.x = !0;
                            c.tile.x = G;
                            d = c.pos.x = m * this.tilesize - I + q;
                            C = 0;
                            break
                        }
            }
            if (A) {
                I = 0 < A ? y : 0;
                A = 0 > A ? this.tilesize : 0;
                G = Math.max(Math.floor(c.pos.x / this.tilesize), 0);
                q = Math.min(Math.ceil((c.pos.x + n) / this.tilesize), this.width);
                O = Math.floor((c.pos.y + I) / this.tilesize);
                v = Math.floor((l + I) / this.tilesize);
                if (0 < E || O == v || 0 > v || v >= this.height) v = -1;
                if (0 <= O && O < this.height)
                    for (m = G; m < q && !(-1 != v && (G = this.data[v][m], 1 < G && G <= this.lastSlope && this._checkTileDef(c, G, d, l, C, u, n, y, m, v))); m++)
                        if (G = this.data[O][m], 1 == G || G > this.lastSlope || 1 < G && this._checkTileDef(c, G, d, l, C, u, n, y, m, O)) {
                            if (1 < G && G <= this.lastSlope && c.collision.slope) break;
                            c.collision.y = !0;
                            c.tile.y = G;
                            c.pos.y = O * this.tilesize - I + A;
                            break
                        }
            }
        },
        _checkTileDef: function(c, d, l, m, A, n, y, C, u, E) {
            var G = this.tiledef[d];
            if (!G) return !1;
            d = (G[2] -
                G[0]) * this.tilesize;
            var I = (G[3] - G[1]) * this.tilesize,
                q = G[4];
            y = l + A + (0 > I ? y : 0) - (u + G[0]) * this.tilesize;
            C = m + n + (0 < d ? C : 0) - (E + G[1]) * this.tilesize;
            if (0 < d * C - I * y) {
                if (0 > A * -I + n * d) return q;
                u = Math.sqrt(d * d + I * I);
                E = I / u;
                u = -d / u;
                var v = y * E + C * u,
                    G = E * v,
                    v = u * v;
                if (G * G + v * v >= A * A + n * n) return q || 0.5 > d * (C - n) - I * (y - A);
                c.pos.x = l + A - G;
                c.pos.y = m + n - v;
                c.collision.slope = {
                    x: d,
                    y: I,
                    nx: E,
                    ny: u
                };
                return !0
            }
            return !1
        }
    });
    var c = 1 / 3,
        d = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, d, !0],
        6: [0, d, 1, c, !0],
        7: [0, c, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [d, 1, 1, 0, !0],
        43: [c, 1, d, 0, !0],
        54: [0, 1, c, 0, !0],
        27: [0, 0, 1, c, !0],
        28: [0, c, 1, d, !0],
        29: [0, d, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, c, 1, !0],
        44: [c, 0, d, 1, !0],
        55: [d, 0, 1, 1, !0],
        16: [1, c, 0, 0, !0],
        17: [1, d, 0, c, !0],
        18: [1, 1, 0, d, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [c, 1, 0, 0, !0],
        41: [d, 1, c, 0, !0],
        52: [1, 1, d, 0, !0],
        38: [1, d, 0, 1, !0],
        39: [1, c, 0, d, !0],
        40: [1, 0,
            0, c, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, d, 1, !0],
        42: [d, 0, c, 1, !0],
        53: [c, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(c, d, l, m) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: c + l,
                    y: d + m
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(c, d, e) {
            this.parent(c, d);
            this.setTileset(e)
        },
        setTileset: function(c) {
            this.tilesetName = c instanceof ig.Image ? c.path : c;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(c,
            d) {
            this.scroll.x = c / this.distance;
            this.scroll.y = d / this.distance
        },
        preRenderMapToChunks: function() {
            var c = this.width * this.tilesize * ig.system.scale,
                d = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(c, d), this.chunkSize);
            var e = Math.ceil(c / this.chunkSize),
                f = Math.ceil(d / this.chunkSize);
            this.preRenderedChunks = [];
            for (var l = 0; l < f; l++) {
                this.preRenderedChunks[l] = [];
                for (var m = 0; m < e; m++) this.preRenderedChunks[l][m] = this.preRenderChunk(m, l, m == e - 1 ? c - m * this.chunkSize : this.chunkSize, l == f - 1 ?
                    d - l * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(c, d, e, f) {
            var l = e / this.tilesize / ig.system.scale + 1,
                m = f / this.tilesize / ig.system.scale + 1,
                A = c * this.chunkSize / ig.system.scale % this.tilesize,
                n = d * this.chunkSize / ig.system.scale % this.tilesize;
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            d = Math.floor(d * this.chunkSize / this.tilesize / ig.system.scale);
            var y = ig.$new("canvas");
            y.width = e;
            y.height = f;
            y.retinaResolutionEnabled = !1;
            f = y.getContext("2d");
            ig.System.scaleMode(y, f);
            e = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < l; f++)
                for (var C = 0; C < m; C++)
                    if (f + c < this.width && C + d < this.height) {
                        var u = this.data[C + d][f + c];
                        u && this.tiles.drawTile(f * this.tilesize - A, C * this.tilesize - n, u - 1, this.tilesize)
                    }
            ig.system.context = e;
            return y
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var c = ig.system.getDrawPos(this.scroll.x),
                d = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var e =
                this.width * this.tilesize * ig.system.scale,
                c = (c % e + e) % e,
                e = this.height * this.tilesize * ig.system.scale,
                d = (d % e + e) % e;
            var e = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.max(Math.floor(d / this.chunkSize), 0),
                l = Math.ceil((c + ig.system.realWidth) / this.chunkSize),
                m = Math.ceil((d + ig.system.realHeight) / this.chunkSize),
                A = this.preRenderedChunks[0].length,
                n = this.preRenderedChunks.length;
            this.repeat || (l = Math.min(l, A), m = Math.min(m, n));
            for (var y = 0; f < m; f++) {
                for (var C = 0, u = e; u < l; u++) {
                    var E = this.preRenderedChunks[f % n][u % A],
                        G = -c + u * this.chunkSize - C,
                        I = -d + f * this.chunkSize - y;
                    ig.system.context.drawImage(E, G, I);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(G, I, this.chunkSize, this.chunkSize));
                    this.repeat && E.width < this.chunkSize && G + E.width < ig.system.realWidth && (C += this.chunkSize - E.width, l++)
                }
                this.repeat && E.height < this.chunkSize && I + E.height < ig.system.realHeight && (y += this.chunkSize - E.height, m++)
            }
        },
        drawTiled: function() {
            for (var c = 0, d = null, e = (this.scroll.x / this.tilesize).toInt(),
                f = (this.scroll.y / this.tilesize).toInt(), l = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, A = -l - this.tilesize, l = ig.system.width + this.tilesize - l, n = ig.system.height + this.tilesize - m, y = -1, m = -m - this.tilesize; m < n; y++, m += this.tilesize) {
                var C = y + f;
                if (C >= this.height || 0 > C) {
                    if (!this.repeat) continue;
                    C = (C % this.height + this.height) % this.height
                }
                for (var u = -1, E = A; E < l; u++, E += this.tilesize) {
                    c = u + e;
                    if (c >= this.width || 0 > c) {
                        if (!this.repeat) continue;
                        c = (c % this.width + this.width) % this.width
                    }
                    if (c = this.data[C][c])(d = this.anims[c -
                        1]) ? d.draw(E, m) : this.tiles.drawTile(E, m, c - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(c) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var d = 0; d < c.entities.length; d++) {
                var e = c.entities[d];
                this.spawnEntity(e.type, e.x, e.y, e.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (d = 0; d < c.layer.length; d++)
                if (e = c.layer[d], "collision" == e.name) this.collisionMap = new ig.CollisionMap(e.tilesize, e.data);
                else {
                    var f = new ig.BackgroundMap(e.tilesize, e.data, e.tilesetName);
                    f.anims = this.backgroundAnims[e.tilesetName] || {};
                    f.repeat = e.repeat;
                    f.distance = e.distance;
                    f.foreground = !!e.foreground;
                    f.preRender = !!e.preRender;
                    f.name = e.name;
                    this.backgroundMaps.push(f)
                }
            for (d = 0; d < this.entities.length; d++) this.entities[d].ready()
        },
        loadLevelDeferred: function(c) {
            this._levelToLoad = c
        },
        getMapByName: function(c) {
            if ("collision" == c) return this.collisionMap;
            for (var d = 0; d < this.backgroundMaps.length; d++)
                if (this.backgroundMaps[d].name == c) return this.backgroundMaps[d];
            return null
        },
        getEntityByName: function(c) {
            return this.namedEntities[c]
        },
        getEntitiesByType: function(c) {
            c = "string" === typeof c ? ig.global[c] : c;
            for (var d = [], e = 0; e < this.entities.length; e++) {
                var f = this.entities[e];
                f instanceof c && !f._killed && d.push(f)
            }
            return d
        },
        spawnEntity: function(c, d, e, f) {
            var l = "string" === typeof c ? ig.global[c] : c;
            if (!l) throw "Can't spawn entity of type " + c;
            c = new l(d, e, f || {});
            this.entities.push(c);
            c.name && (this.namedEntities[c.name] = c);
            return c
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(c) {
            c.name &&
                delete this.namedEntities[c.name];
            c._killed = !0;
            c.type = ig.Entity.TYPE.NONE;
            c.checkAgainst = ig.Entity.TYPE.NONE;
            c.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(c)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var c = 0; c < this._deferredKill.length; c++) this._deferredKill[c].erase(), this.entities.erase(this._deferredKill[c]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var d in this.backgroundAnims) {
                var c = this.backgroundAnims[d],
                    e;
                for (e in c) c[e].update()
            }
        },
        updateEntities: function() {
            for (var c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                d._killed || d.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var c;
            for (c = 0; c < this.backgroundMaps.length; c++) {
                var d =
                    this.backgroundMaps[c];
                if (d.foreground) break;
                d.setScreenPos(this.screen.x, this.screen.y);
                d.draw()
            }
            this.drawEntities();
            for (c; c < this.backgroundMaps.length; c++) d = this.backgroundMaps[c], d.setScreenPos(this.screen.x, this.screen.y), d.draw()
        },
        drawEntities: function() {
            for (var c = 0; c < this.entities.length; c++) this.entities[c].draw()
        },
        checkEntities: function() {
            for (var c = {}, d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                if (!(e.type == ig.Entity.TYPE.NONE && e.checkAgainst == ig.Entity.TYPE.NONE && e.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, l = Math.floor(e.pos.y / this.cellSize), m = Math.floor((e.pos.x + e.size.x) / this.cellSize) + 1, A = Math.floor((e.pos.y + e.size.y) / this.cellSize) + 1, n = Math.floor(e.pos.x / this.cellSize); n < m; n++)
                        for (var y = l; y < A; y++)
                            if (c[n])
                                if (c[n][y]) {
                                    for (var C = c[n][y], u = 0; u < C.length; u++) e.touches(C[u]) && !f[C[u].id] && (f[C[u].id] = !0, ig.Entity.checkPair(e, C[u]));
                                    C.push(e)
                                } else c[n][y] = [e];
                else c[n] = {}, c[n][y] = [e]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(c, d) {
            return c.zIndex - d.zIndex
        },
        POS_X: function(c, d) {
            return c.pos.x + c.size.x - (d.pos.x +
                d.size.x)
        },
        POS_Y: function(c, d) {
            return c.pos.y + c.size.y - (d.pos.y + d.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(c, d) {
            d.imageSmoothingEnabled = d.msImageSmoothingEnabled = d.mozImageSmoothingEnabled = d.oImageSmoothingEnabled = !1;
            c.style.imageRendering = "-moz-crisp-edges";
            c.style.imageRendering = "-o-crisp-edges";
            c.style.imageRendering = "-webkit-optimize-contrast";
            c.style.imageRendering = "crisp-edges";
            c.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(c, d) {
            d.imageSmoothingEnabled = d.msImageSmoothingEnabled =
                d.mozImageSmoothingEnabled = d.oImageSmoothingEnabled = !0;
            c.style.imageRendering = "";
            c.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var c = !1;
    try {
        c = window.self !== window.top, !1 === c && (c = 0 < window.frames.length)
    } catch (d) {
        c = !0
    }
    ig.Input.inject({
        keydown: function(d) {
            var f = d.target.tagName;
            if (!("INPUT" == f || "TEXTAREA" == f))
                if (f = "keydown" == d.type ? d.keyCode : 2 == d.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, c && 0 > f && window.focus(), ("touchstart" == d.type || "mousedown" == d.type) && this.mousemove(d), f = this.bindings[f]) this.actions[f] = !0, this.locks[f] || (this.presses[f] = !0, this.locks[f] = !0), d.stopPropagation(), d.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(c, d, e, f) {
            if (this.JQUERYAVAILABLE) c.on(d, e);
            else c.addEventListener(d, e, f)
        },
        create: function(c) {
            return this.JQUERYAVAILABLE ? $("<" + c + ">") : ig.$new(c)
        },
        getElementByClass: function(c) {
            return this.JQUERYAVAILABLE ? $("." + c) : document.getElementsByClassName(c)
        },
        getElementById: function(c) {
            return this.JQUERYAVAILABLE ? 0 < $(c).length ? $(c) : null : ig.$(c)
        },
        appendChild: function(c, d) {
            this.JQUERYAVAILABLE ? c.append(d) : c.appendChild(d)
        },
        appendToBody: function(c) {
            this.JQUERYAVAILABLE ? $("body").append(c) : document.body.appendChild(c)
        },
        resize: function(c, d, e) {
            if (this.JQUERYAVAILABLE) c.width(d.toFixed(2)), c.height(e.toFixed(2));
            else {
                var f = c.style.visibility;
                //d = "width:" + d.toFixed(2) + "px; height:" + e.toFixed(2) + "px;";
                d = "width:" + d.toFixed(2) + "px; height:" + e.toFixed(2) + "px;";
                this.attr(c, "style", d);
                c.style.visibility = f
            }
        },
        resizeOffsetLeft: function(c,
            d, e, f) {
            if (this.JQUERYAVAILABLE) c.width(d.toFixed(2)), c.height(e.toFixed(2)), c.css("left", f);
            else {
                var l = c.style.visibility;
                d = "width:" + d.toFixed(2) + "px; height:" + e.toFixed(2) + "px; left: " + f.toFixed(2) + "px;";
                this.attr(c, "style", d);
                c.style.visibility = l
            }
        },
        css: function(c, d) {
            if (this.JQUERYAVAILABLE) c.css(d);
            else {
                var e = "",
                    f;
                for (f in d) e += f + ":" + d[f] + ";";
                this.attr(c, "style", e)
            }
        },
        getOffsets: function(c) {
            return this.JQUERYAVAILABLE ? (c = c.offset(), {
                left: c.left,
                top: c.top
            }) : {
                left: c.offsetLeft,
                top: c.offsetTop
            }
        },
        attr: function(c,
            d, e) {
            if ("undefined" === typeof e) return this.JQUERYAVAILABLE ? c.attr(d) : c.getAttribute(d);
            this.JQUERYAVAILABLE ? c.attr(d, e) : c.setAttribute(d, e)
        },
        show: function(c) {
            this.JQUERYAVAILABLE ? (c.show(), c.css("visibility", "visible")) : c && (c.style ? c.style.visibility = "visible" : c[0] && (c[0].style.visibility = "visible"))
        },
        hide: function(c) {
            this.JQUERYAVAILABLE ? (c.hide(), c.css("visibility", "hidden")) : c && (c.style ? c.style.visibility = "hidden" : c[0] && (c[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(c) {
            for (var d =
                window.location.search.substring(1).split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]) == c) return decodeURIComponent(f[1])
            }
        },
        forcedDeviceDetection: function() {
            var c = this.getQueryVariable("device");
            if (c) switch (c) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var c = this.getQueryVariable("force-rotate");
            if (c) switch (c) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(c, d) {
            typeof c === this.valType && typeof d === this.valType && (this.x = c, this.y = d)
        },
        row: function(c) {
            typeof c === this.valType && (this.y = c);
            return this.y
        },
        col: function(c) {
            typeof c === this.valType && (this.x = c);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            
        },
        init: function(c) {
            this.domHandler = c;
            if ("undefined" === typeof c) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth,
                window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var c = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / c.x, this.mobile.actualSize.y / c.y);
                var d = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = c.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = c.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize =
                new Vector2(window.innerWidth, window.innerHeight), c = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / c.x, this.desktop.actualSize.y / c.y), d = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = c.x * d, this.desktop.actualSize.y = c.y * d;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var c =
                0; c < this.coreDivsToResize.length; c++) {
                var d = ig.domHandler.getElementById(this.coreDivsToResize[c]);
                ig.ua.mobile ? ig.domHandler.resize(d, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(d, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var e in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" +
                        e),
                    d = ig.domHandler.getElementById("#" + e + "-Box"),
                    f = (window.innerWidth - this.adsToResize[e]["box-width"]) / 2 + "px",
                    l = (window.innerHeight - this.adsToResize[e]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: f,
                    top: l
                })
            }
            for (e in this.dynamicClickableEntityDivs) {
                d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                c = ig.domHandler.getElementById("#" + e);
                if (ig.ua.mobile) var m = this.dynamicClickableEntityDivs[e].entity_pos_x,
                    A = this.dynamicClickableEntityDivs[e].entity_pos_y,
                    l = this.dynamicClickableEntityDivs[e].width,
                    f = this.dynamicClickableEntityDivs[e].height,
                    n = Math.floor(m * this.scaleRatioMultiplier.x) + "px",
                    A = Math.floor(A * this.scaleRatioMultiplier.y) + "px",
                    l = Math.floor(l * this.scaleRatioMultiplier.x) + "px",
                    d = Math.floor(f * this.scaleRatioMultiplier.y) + "px";
                else var f = ig.domHandler.getElementById("#canvas"),
                    f = ig.domHandler.getOffsets(f),
                    n = f.left,
                    y = f.top,
                    m = this.dynamicClickableEntityDivs[e].entity_pos_x,
                    A = this.dynamicClickableEntityDivs[e].entity_pos_y,
                    l = this.dynamicClickableEntityDivs[e].width,
                    f = this.dynamicClickableEntityDivs[e].height,
                    n = Math.floor(n + m * d) + "px",
                    A = Math.floor(y + A * d) + "px",
                    l = Math.floor(l * d) + "px",
                    d = Math.floor(f * d) + "px";
                ig.domHandler.css(c, {
                    "float": "left",
                    position: "absolute",
                    left: n,
                    top: A,
                    width: l,
                    height: d,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var c = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    d = this.domHandler.getElementById("#orientate"),
                    e = this.domHandler.getElementById("#game");
                c ? (this.domHandler.show(d), this.domHandler.hide(e)) : (this.domHandler.show(e), this.domHandler.hide(d))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var c in this.adsToResize) {
                var d = ig.domHandler.getElementById("#" + c),
                    e = ig.domHandler.getElementById("#" + c + "-Box"),
                    f = (window.innerWidth - this.adsToResize[c]["box-width"]) / 2 + "px",
                    l = (window.innerHeight - this.adsToResize[c]["box-height"]) / 2 + "px";
                d && ig.domHandler.css(d, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                e && ig.domHandler.css(e, {
                    left: f,
                    top: l
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(c) {
                c.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(c) {
                c.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(c) {
                c.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            window.addEventListener("orientationchange", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            document.ontouchmove = function(c) {
                window.scrollTo(0, 1);
                c.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
            }
        },
        run: function(c, d) {
            if (this.apiAvailable[c]) this.apiAvailable[c](d)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(c) {
            this.debug && console.log("play sound ", c)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(c) {
            this.debug && console.log("mute");
            "undefined" === typeof c ? this.stayMuteFlag = !0 : c && (this.stayMuteFlag = !0)
        },
        unmute: function(c) {
            this.debug &&
                console.log("unmute");
            "undefined" === typeof c ? this.stayMuteFlag = !1 : c && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(c, d) {
            this.parent(c, d);
            for (var e in c) this.soundList[e] = e, ig.music.add(c[e].path + ".*", e);
            d && d.loop && (ig.music.loop = d.loop)
        },
        play: function(c) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof c ? ig.music.play(c) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(c) {
            console.log("impactmusic:", c);
            ig.music.volume = 0 > c ? 0 : isNaN(c) ? 1 : 1 < c ? 1 : c
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(c) {
            this.parent(c);
            this.bgmPlaying && this.stop()
        },
        unmute: function(c) {
            this.parent(c);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(c, d) {
            this.parent(c, d);
            for (var e in c) {
                var f = new ig.Sound(c[e].path + ".*");
                this.soundList[e] = f
            }
        },
        play: function(c) {
            this.stayMuteFlag || ("object" === typeof c ? (console.log(c + " exists"), c.play()) : "string" === typeof c && this.soundList[c].play())
        },
        stop: function(c) {
            this.parent(c);
            c.stop()
        },
        volume: function(c) {
            ig.soundManager.volume =
                0 > c ? 0 : isNaN(c) ? 1 : 1 < c ? 1 : c
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(c) {
            this.parent(c);
            ig.Sound.enabled = !1
        },
        unmute: function(c) {
            this.parent(c);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(c, d) {
            this.parent(c, d);
            for (var e in c) {
                var f = c[e].path,
                    f = new Howl({
                        urls: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[e] = f
            }
        },
        play: function(c) {
            this.stayMuteFlag || ("object" === typeof c ? c.play() : "string" === typeof c && this.soundList[c].play())
        },
        stop: function(c) {
            this.parent(c);
            c.stop()
        },
        volume: function(c) {
            for (var d in this.soundList) {
                if (0 >
                    c) {
                    this.soundList[d].volume(0);
                    break
                }
                isNaN(c) ? this.soundList[d].volume(1) : 1 < c ? this.soundList[d].volume(1) : this.soundList[d].volume(c)
            }
        },
        getVolume: function() {
            for (var c in this.soundList) return this.soundList[c].volume()
        },
        mute: function(c) {
            this.parent(c);
            Howler.mute()
        },
        unmute: function(c) {
            this.parent(c);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(c, d) {
            this.parent(c, d);
            for (var e in c) {
                var f = c[e].path,
                    f = new Howl({
                        urls: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[e] = f
            }
        },
        play: function(c) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof c) this.bgmPlaying = !0, c.play();
                else if ("string" === typeof c) this.bgmPlaying = !0, this.soundList[c].play();
            else
                for (var d in this.soundList) {
                    this.soundList[d].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(c) {
            this.parent(c);
            if (this.bgmPlaying) {
                for (var d in this.soundList) this.soundList[d].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(c) {
            for (var d in this.soundList) {
                if (0 > c) {
                    this.soundList[d].volume(0);
                    break
                }
                isNaN(c) ? this.soundList[d].volume(1) : 1 < c ? this.soundList[d].volume(1) : this.soundList[d].volume(c)
            }
        },
        getVolume: function() {
            for (var c in this.soundList) return this.soundList[c].volume()
        },
        mute: function(c) {
            this.parent(c);
            Howler.mute()
        },
        unmute: function(c) {
            this.parent(c);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(c, d) {
            this.parent(c, d);
            for (var e in c) {
                this.soundList[e] = e;
                var f = c[e].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [f + "." + ig.Sound.FORMAT.OGG.ext, f + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: c[e].startMp3,
                            end: c[e].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(c) {
            console.log("jukebox:", c);
            0 >= c ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(c) ? this.jukeboxPlayer.setVolume(1) :
                1 < c ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(c)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(c) {
            this.parent(c);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(c) {
            this.parent(c);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(c) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context =
                    new this.AudioContext, this.isSupported = !0
            } catch (d) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (e) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(c));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(c)
        },
        initWebAudio: function(c) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode =
                this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var d = "start",
                e = "stop",
                f = this.webaudio.context.createBufferSource();
            "function" !== typeof f.start && (d = "noteOn");
            this.webaudio.compatibility.start = d;
            "function" !== typeof f.stop && (e = "noteOff");
            this.webaudio.compatibility.stop = e;
            for (var l in c) {
                this.soundList[l] = l;
                d = c[l].path;
                c = d + "." + ig.Sound.FORMAT.MP3.ext;
                var m = d + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS &&
                    (m = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (m = c));
                var A = new XMLHttpRequest;
                A.open("GET", m, !0);
                A.responseType = "arraybuffer";
                A.onload = function() {
                    this.webaudio.context.decodeAudioData(A.response, function(c) {
                        this.webaudio.buffer = c;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + m + '".')
                    })
                }.bind(this);
                A.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio =
                    this.webaudio;
                var c = function() {
                    var d = webaudio.context,
                        e = d.createBuffer(1, 1, 22050),
                        f = d.createBufferSource();
                    f.buffer = e;
                    f.connect(d.destination);
                    "undefined" === typeof f.start ? f.noteOn(0) : f.start(0);
                    setTimeout(function() {
                        (f.playbackState === f.PLAYING_STATE || f.playbackState === f.FINISHED_STATE) && window.removeEventListener("touchend", c, !1)
                    }, 0)
                };
                window.addEventListener("touchend", c, !1)
            }
        },
        initHTML5Audio: function(c) {
            if (this.useHTML5Audio && this.audio) {
                var d = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!d.canPlayType("audio/mpeg;").replace(/^no$/,
                        ""),
                    opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
                        "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff &&
                    (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var e in c) {
                    this.soundList[e] = e;
                    var f = c[e].path,
                        d = f + "." + ig.Sound.FORMAT.OGG.ext,
                        f = f + "." + ig.Sound.FORMAT.MP3.ext,
                        l = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? l = d : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (l = f);
                    if (l) {
                        ig.ua.mobile ? ig.ua.iOS && (l = f) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (l = f));
                        this.audio.addEventListener("error", function() {
                            this.audio.error &&
                                4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = l;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = l;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var m = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", m, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", m, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(c) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(c) && (c = 0, this.pausedTime &&
                                (c = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, c, this.webaudio.buffer.duration - c), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                c));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, c);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var d = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(c) && (c = 0, this.pausedTime && (c = this.pausedTime));
                    var e = this._duration - c;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var c = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = c
                        }
                        this.play()
                    }.bind(this), 1E3 * e + this.playDelay);
                    4 === d.readyState || !d.readyState && navigator.isCocoonJS ? (d.readyState = 4, d.currentTime = c, d.muted = this.muteFlag || d.muted, d.volume = this._volume, setTimeout(function() {
                        d.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var c = function() {
                            this.play();
                            d.removeEventListener("canplaythrough", c, !1)
                        }.bind(this);
                        d.addEventListener("canplaythrough", c, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var c =
                    this.audio;
                this.pausedTime = c.currentTime;
                c.currentTime = 0;
                c.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(c) {
            this.isSupported && (this._volume = c, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function(c) {
            this.parent(c);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(c) {
            this.parent(c);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            bell: {
                path: "media/audio/bell"
            },
            buying: {
                path: "media/audio/buying"
            },
            click: {
                path: "media/audio/click"
            },
            coins: {
                path: "media/audio/coins"
            },
            correct: {
                path: "media/audio/correct"
            },
            done: {
                path: "media/audio/done"
            },
            miss: {
                path: "media/audio/miss"
            },
            pop: {
                path: "media/audio/pop"
            },
            pop2: {
                path: "media/audio/pop2"
            },
            pop3: {
                path: "media/audio/pop3"
            },
            pop4: {
                path: "media/audio/pop4"
            },
            swoosh: {
                path: "media/audio/swoosh"
            },
            swish: {
                path: "media/audio/swish"
            },
            wrong: {
                path: "media/audio/wrong"
            },
            gameover: {
                path: "media/audio/gameover"
            }
        }
//      ,
//      bgm: {
//          background: {
//              path: "media/audio/stb-bgm",
//              startOgg: 0,
//              endOgg: 24.018,
//              startMp3: 0,
//              endMp3: 24.018
//          }
//      }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0
                }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(c) {
            this.sfxPlayer && this.sfxPlayer.mute(c)
        },
        muteBGM: function(c) {
            this.bgmPlayer && this.bgmPlayer.mute(c)
        },
        unmuteSFX: function(c) {
            this.sfxPlayer && this.sfxPlayer.unmute(c)
        },
        unmuteBGM: function(c) {
            this.bgmPlayer && this.bgmPlayer.unmute(c)
        },
        muteAll: function(c) {
            this.muteSFX(c);
            this.muteBGM(c)
        },
        unmuteAll: function(c) {
            this.unmuteSFX(c);
            this.unmuteBGM(c)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1),
                this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var c = this.getHiddenProp();
            c && (c = c.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(c, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var c = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var d = 0; d < c.length; d++)
                if (c[d] + "Hidden" in document) return c[d] + "Hidden";
            return null
        },
        isHidden: function() {
            var c = this.getHiddenProp();
            return !c ? !1 : document[c]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? (ig.ua.mobile && ig.game && ig.game.pauseGame(), ig.soundHandler && ig.soundHandler.forceMuteAll()) : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.forceUnMuteAll())
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var c;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var d = this.bgmPlayer.jukeboxPlayer;
                if (d) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    c = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var e = 0.1;
                    ig.ua.mobile && (e = 0.115, ig.ua.android && (e = 0.45, c && (e = 0.3)));
                    d.settings.spritemap.music && (c = d.settings.spritemap.music.end -
                        e, d.getCurrentTime() >= c && (c = d.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (d.play(c, !0), this.forcelooped = !0, setTimeout(function() {
                            ig.soundHandler.forcelooped = !1
                        }, e)) : d.setCurrentTime(c)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), c = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), e = 0.1, ig.ua.mobile && (e = 0.115, ig.ua.android && (e = 0.45, c && (e = 0.3))), d = 0, "mp3" ==
                    ig.soundManager.format.ext && (d = 0.05), ig.music.currentTrack && (c = ig.music.currentTrack.duration - e, ig.music.currentTrack.currentTime >= c && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = d, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, e)) : ig.music.currentTrack.currentTime = d)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(c) {
            return null !== this.get(c)
        },
        initUnset: function(c, d) {
            null === this.get(c) && this.set(c, d)
        },
        get: function(c) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(c))
            } catch (d) {
                return window.localStorage.getItem(c)
            }
        },
        getInt: function(c) {
            return ~~this.get(c)
        },
        getFloat: function(c) {
            return parseFloat(this.get(c))
        },
        getBool: function(c) {
            return !!this.get(c)
        },
        key: function(c) {
            return this.isCapable() ? window.localStorage.key(c) : null
        },
        set: function(c, d) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(c, JSON.stringify(d))
            } catch (e) {
                console.log(e)
            }
        },
        setHighest: function(c, d) {
            d > this.getFloat(c) && this.set(c, d)
        },
        remove: function(c) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(c)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(c, d) {
            null == this.get(c) && this.set(c, d)
        },
        set: function(c, d) {
            this.tempData[c] = d
        },
        setHighest: function(c, d) {
            d > this.getFloat(c) && this.set(c, d)
        },
        get: function(c) {
            return this.tempData[c]
        },
        getInt: function(c) {
            return ~~this.get(c)
        },
        getFloat: function(c) {
            return parseFloat(this.get(c))
        },
        getBool: function(c) {
            return !!this.get(c)
        },
        isSet: function(c) {
            return null !==
                this.get(c)
        },
        remove: function() {
            delete this.tempData.key
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var c in this.bindings) {
                this[c] = c;
                for (var d = 0; d < this.bindings[c].length; d++) ig.input.bind(this.bindings[c][d], c)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var c = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                d = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else c = ig.input.mouse.x, d = ig.input.mouse.y;
            return new Vector2(c, d)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var c in this.bindings) {
                this[c] = c;
                for (var d = 0; d < this.bindings[c].length; d++) ig.input.bind(this.bindings[c][d], c)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var c = navigator.getGamepads || navigator.webkitGetGamepads;
                c && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = c
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(c) {
            return "object" == typeof c ? c.pressed :
                1 == c
        },
        buttonDown: function(c) {
            if (c = this.bindings[c]) this.states[c] = !0, this.downLocks[c] || (this.presses[c] = !0, this.downLocks[c] = !0)
        },
        buttonUp: function(c) {
            if ((c = this.bindings[c]) && this.downLocks[c] && !this.upLocks[c]) this.states[c] = !1, this.releases[c] = !0, this.upLocks[c] = !0
        },
        clearPressed: function() {
            for (var c in this.releases) this.states[c] = !1, this.downLocks[c] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(c, d) {
            this.bindings[c] = d
        },
        unbind: function(c) {
            this.releases[this.bindings[c]] = !0;
            this.bindings[c] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(c) {
            return this.states[c]
        },
        pressed: function(c) {
            return this.presses[c]
        },
        released: function(c) {
            return this.releases[c]
        },
        clamp: function(c, d, e) {
            return c < d ? d : c > e ? e : c
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var c in this.bindings) {
                    for (var d = !1, e = 0; e < this.list.length; e++) {
                        var f = this.list[e];
                        if (f && f.buttons && this.buttonPressed(f.buttons[c])) {
                            d = !0;
                            break
                        }
                    }
                    d ? this.buttonDown(c) : this.buttonUp(c)
                }
                for (e = 0; e < this.list.length; e++)
                    if ((f = this.list[e]) && f.axes) {
                        c = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var d = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            l = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            f = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(c) ? 0 : c;
                        this.leftStick.y += isNaN(d) ? 0 : d;
                        this.rightStick.x += isNaN(l) ? 0 : l;
                        this.rightStick.y +=
                            isNaN(f) ? 0 : f
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var c in this.bindings)
                for (var d = 0; d < this.bindings[c].length; d++) ig.gamepadInput.bind(this.bindings[c][d], c)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var c = [], d = 0; d < ig.multitouchInput.touches.length; d++) {
                        var e = ig.multitouchInput.touches[d];
                        c.push({
                            x: e.x,
                            y: e.y
                        })
                    }
                    return c
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(c) {
            if (ig.ua.touchDevice) {
                var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    e = parseInt(ig.system.canvas.offsetHeight) ||
                    ig.system.realHeight,
                    d = ig.system.scale * (d / ig.system.realWidth),
                    e = ig.system.scale * (e / ig.system.realHeight);
                if (c.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < c.touches.length && (this.multitouchCapable = !0);
                    var f = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                    for (var l = 0; l < c.touches.length; l++) {
                        var m = c.touches[l];
                        m && this.touches.push({
                            x: (m.clientX - f.left) / d,
                            y: (m.clientY - f.top) / e
                        })
                    }
                } else this.windowMove(c)
            }
        },
        touchdown: function(c) {
            var d =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(c);
            else if (ig.ua.touchDevice && c.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < c.touches.length && (this.multitouchCapable = !0);
                var f = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                for (var l = 0; l < c.touches.length; l++) {
                    var m = c.touches[l];
                    m && this.touches.push({
                        x: (m.clientX - f.left) / d,
                        y: (m.clientY - f.top) / e
                    })
                }
            }
        },
        touchup: function(c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            d = ig.system.scale * (d / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(c);
            else {
                this.lastEventUp = c;
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    c =
                        (c.changedTouches[0].clientX - e.left) / d;
                    for (d = 0; d < this.touches.length; d++) this.touches[d].x >= c - 40 && this.touches[d].x <= c + 40 && this.touches.splice(d, 1)
                }
            }
        },
        windowKeyDown: function(c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var f = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
                c = c.changedTouches ? c.changedTouches : [c];
                for (var l = 0; l < c.length; ++l) {
                    for (var m = c[l], A = "undefined" != typeof m.identifier ? m.identifier : "undefined" != typeof m.pointerId ? m.pointerId : 1, n = (m.clientX - f.left) / d, m = (m.clientY - f.top) / e, y = 0; y < this.touches.length; ++y) this.touches[y].identifier == A && this.touches.splice(y, 1);
                    this.touches.push({
                        x: n,
                        y: m,
                        identifier: A
                    })
                }
                for (d = 0; d < this.touches.length; d++);
            }
        },
        windowKeyUp: function(c) {
            c = "undefined" != typeof c.identifier ? c.identifier : "undefined" != typeof c.pointerId ? c.pointerId :
                1;
            for (var d = 0; d < this.touches.length; ++d) this.touches[d].identifier == c && this.touches.splice(d, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(c) {
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight),
                f = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var l =
                    "undefined" != typeof c.identifier ? c.identifier : "undefined" != typeof c.pointerId ? c.pointerId : 1, m = 0; m < this.touches.length; ++m)
                    if (this.touches[m].identifier == l) {
                        var A = (c.clientY - f.top) / e;
                        this.touches[m].x = (c.clientX - f.left) / d;
                        this.touches[m].y = A
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.fake-storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            this.storage = this._supportsLocalStorage() ? new ig.Storage : new ig.FakeStorage;
            this.storage.initUnset("stb-money", 0);
            this.storage.initUnset("stb-level", 1);
            this.storage.initUnset("stb-sfx", !0);
            this.storage.initUnset("stb-bgm", !0);
            this.storage.initUnset("stb-order-history", [
                [],
                [],
                []
            ]);
            this.storage.initUnset("stb-played-orders", []);
            this.storage.initUnset("stb-tutorial", {
                intro: !0,
                "first-order": !0,
                "game-controls": !0,
                "game-start": !0,
                "game-avoid-bread": !0,
                "game-first-topping-done": !0,
                "game-all-toppings-done": !0,
                "game-finish": !0,
                "game-fail": !0,
                "first-shop": !0,
                "first-endless": !0
            });
            this.storage.initUnset("stb-ingredients", {
                beef: !1,
                egg: !0,
				chaoyue: !0,
				chengshi: !0,
				engan: !0,
				ganen: !0,
				ganxie: !0,
				jingye: !0,
				reqing: !0,
				shouwang: !0,
				tuanjie: !0,
				wennuan: !0,
                cheese: !0,
                chuxin: !0,
                duihua: !0,
                gangwei: !0,
                jianshou: !0,
                shouwang: !0,
                suiyuan: !0,
                touru: !0,
                xingfu: !0,
                zhencheng: !0,
                zhenqing: !0,
                baorong: !0,
                ganen: !0,
                ganji: !0,
                ganxie: !0,
                kuaile: !0,
                mengxiang: !0,
                pingjing: !0,
                xingfu: !0,
                xinnian: !0,
                zhengchang: !0,
                chuancheng: !0,
                huibao: !0,
                jiyi: !0,
                nuli: !0,
                tongxin: !0,
                xiwang: !0,
                zhenxi: !0,
                zhihui: !0,
                zhizhuo: !0,
                tomato: !0,
                dandang: !0,
		        jushou: !0,
		        lixiang: !0,
		        meihao: !0,
		        nanwang: !0,
		        peiban: !0,
		        qibu: !0,
		        qingyi: !0,
		        tiaozhanpng: !0,
		        zhizhuo: !0,
		        xiangshang: !0,
		        guangrong: !0,
		        jiandan: !0,
		        jiankang: !0,
		        pusu: !0,
		        shifang: !0,
		        shouhu: !0,
		        sinian: !0,
		        zeren: !0,
		        benzhen: !0,
		        chengzhang: !0,
		        chuancheng: !0,
		        pinge: !0,
		        tongixn: !0,
		        wenhe: !0,
		        xiangxin: !0,
		        xinnian: !0,
		        zhenai: !0,
		        fenjin: !0,
		        guanai: !0,
		        jianchi: !0,
		        jianshou: !0,
		        kuanghuan: !0,
		        langman: !0,
		        yingxiong: !0,
		        yishu: !0,
		        yuanwang: !0,
		        zhichi: !0,
		        fenjin: !0,
		        gongming: !0,
		        hexie: !0,
		        huibao: !0,
		        jiandan: !0,
		        rongyao: !0,
		        tuanjie: !0,
		        xiangban: !0,
		        xingdong: !0,
		        youya: !0,
		        zhenxi: !0,
		        zhenxi: !0,
		        chuangzao: !0,
		        fanrong: !0,
		        guibao: !0,
		        jianqiang: !0,
		        nuli: !0,
		        qianhe: !0,
		        renke: !0,
		        yikao: !0,
		        zhenqing: !0,		        
		        fuchu: !0,
		        gongxiang: !0,
		        guojia: !0,
		        jiyu: !0,
		        kuanwei: !0,
		        qiji: !0,
		        renmin: !0,
		        tancheng: !0,
		        tuanyuan: !0,
		        zhenxin: !0,
		        fengxian: !0,
		        jiangxin: !0,
		        keku: !0,
		        reai: !0,
		        shouhuo: !0,
		        sikao: !0,
		        tiliang: !0,
		        xinren: !0,
		        yonggan: !0,
		        yuanmeng: !0,
		        gandong: !0,
        gongjin: !0,
        huiyi: !0,
        jianren: !0,
        jingshen: !0,
        jingwei: !0,
        jiqing: !0,
        qingchun: !0,
        wanqiang: !0,
        weihu: !0,
        dongxing: !0,
        fuxing: !0,
        jietuan: !0,
        shoujian: !0,
        xiegan: !0,
        yiji: !0,
        youzi: !0,
        yuantuan: !0,
        yuechao: !0,
        zhuozhi: !0,
        banxiang: !0,
        chijian: !0,
        gepin: !0,
        huankuang: !0,
        kuke: !0,
        lekuai: !0,
        wangnan: !0,
        xianggong: !0,
        xinxiang: !0,
        yihui: !0,
                bundle: !0
            })
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch =
                new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(c) {
            return ig.input.pressed(c) || this.gamepad.press(c) ? !0 : !1
        },
        held: function(c) {
            return ig.input.state(c) || this.gamepad.state(c) ? !0 : !1
        },
        release: function(c) {
            return ig.input.released(c) || this.gamepad.released(c) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(c, d, e, f, l) {
            return c.x > d + f || c.x < d || c.y > e + l || c.y < e ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test",
                    "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (c) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(c) {
            return !this.localStorageSupport ? null : this.storage.isSet(c)
        },
        storageGet: function(c) {
            return !this.localStorageSupport ? null : this.storage.get(c)
        },
        storageSet: function(c, d) {
            if (!this.localStorageSupport) return null;
            this.storage.set(c, d)
        },
        assert: function(c, d, e) {
            if (d !== e) throw "actualValue:" + d + " not equal to testValue:" + e + " at " +
                c;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        sky: new ig.Image("media/graphics/splash/mobile/sky.png"),
        //food: new ig.Image("media/graphics/splash/mobile/ingredients.png"),
        //title: new ig.Image("media/graphics/game/common/title.png"),
        loadingSheet: new ig.AnimationSheet("media/graphics/splash/mobile/loading.png", 59, 60),
        starSheet: new ig.AnimationSheet("media/graphics/splash/mobile/star.png", 27, 26),
        cloudSheet: [new ig.AnimationSheet("media/graphics/splash/mobile/cloud1.png", 317,
            322), new ig.AnimationSheet("media/graphics/splash/mobile/cloud2.png", 251, 161), new ig.AnimationSheet("media/graphics/splash/mobile/cloud3.png", 626, 472), new ig.AnimationSheet("media/graphics/splash/mobile/cloud4.png", 621, 378), new ig.AnimationSheet("media/graphics/splash/mobile/cloud5.png", 606, 237)],
        clouds: [],
        stars: [],
        init: function(c, d) {
            this.parent(c, d);
            this.setupCustomAnimation();
            ig.apiHandler.run("MJSPreroll")
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var c = ig.domHandler.getElementById("#play");
                ig.domHandler.show(c)	//显示加载完毕后的开始按钮
            }
            c = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            c = 0;
            window.setTimeout("ig.system.setGame(MyGame)", c);	//加载游戏开始页面的时间
            window.clearInterval(ig.loadingScreen.animationTimer)
        },
        setupCustomAnimation: function() {
            this.loadingAnim = new ig.Animation(this.loadingSheet, 1, [0]);
            for (var c = this.loadingAnim.currentFrame = 0, d = this.cloudSheet.length; c < d; c++) this.clouds[c] = new ig.Animation(this.cloudSheet[c], 1, [0]), this.clouds[c].currentFrame = 0, this.clouds[c].dir = 1;
            this.clouds[0].pos = {
                x: -34,
                y: -20
            };
            this.clouds[1].pos = {
                x: 300,
                y: -22
            };
            this.clouds[2].pos = {
                x: -34,
                y: 150
            };
            this.clouds[3].pos = {
                x: -34,
                y: 400
            };
            this.clouds[4].pos = {
                x: 100,
                y: 700
            };
            this.clouds[0].scale.x = this.clouds[0].scale.y = 0.8;
            this.clouds[1].scale.x = this.clouds[1].scale.y = 1.2;
            this.clouds[2].scale.x = this.clouds[2].scale.y = 1;
            this.clouds[3].scale.x = this.clouds[3].scale.y = 0.8;
            this.clouds[4].scale.x = this.clouds[4].scale.y = 1.2;
            c = 0;
            for (d = 30; c < d; c++) this.stars[c] = new ig.Animation(this.starSheet, 1, [0]), this.stars[c].currentFrame = 0, this.stars[c].pos = {
                x: 540 * Math.random() - 27,
                y: 960 *
                    Math.random() - 27
            }, this.stars[c].alpha = Math.random() - 0.5 + 0.5, this.stars[c].scale.x = this.stars[c].scale.y = Math.random(), this.stars[c].dir = 1;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.loadingAnim.angle += 0.36;
            for (var c = 0, d = this.stars.length; c < d; c++) this.stars[c].alpha += 0.05 * this.stars[c].dir, 1 < this.stars[c].alpha ? (this.stars[c].dir = -1, this.stars[c].alpha = 1) : 0.5 > this.stars[c].alpha && (this.stars[c].dir = 1, this.stars[c].alpha =
                0.5);
            c = 0;
            for (d = this.clouds.length; c < d; c++) this.clouds[c].scale.x += 0.015 * this.clouds[c].dir, this.clouds[c].scale.y += 0.015 * this.clouds[c].dir, 1.1 < this.clouds[c].scale.x ? (this.clouds[c].dir = -1, this.clouds[c].scale.x = this.clouds[c].scale.y = 1.1) : 0.9 > this.clouds[c].scale.x && (this.clouds[c].dir = 1, this.clouds[c].scale.x = this.clouds[c].scale.y = 0.9)
        },
        draw: function() {
            ig.system.context.font = "1px mikadobold";
            ig.system.context.fillText("mikadobold", -100, -100);
            ig.system.context.font = "1px amaranthbold";
            ig.system.context.fillText("amaranthbold", -100, -100);
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var c = ig.system.scale;
            this.sky.draw(0, 0);
            //for (var d = 0, e = this.clouds.length; d < e; d++) this.clouds[d].draw(this.clouds[d].pos.x, this.clouds[d].pos.y);
            //d = 0;
            //for (e = this.stars.length; d < e; d++) this.stars[d].draw(this.stars[d].pos.x, this.stars[d].pos.y);
            //this.food.draw(0, 0);
            //this.title.draw(117, 220);
            this.loadingAnim.draw(244, 650);
            ig.system.context.fillStyle = "#003348";
            ig.system.context.font = "16px amaranthbold";
            d = _STRINGS.Splash.Loading;
            e = ig.system.width / 2 - ig.system.context.measureText(d).width / 2;
            ig.system.context.fillText(d, e, 650 * c + 80)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(c) {
        for (var d = 0; d < this.length; ++d)
            if (this[d] === c) return d;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var c = [], d = 0; d < this.tweens.length; d++) this.tweens[d].update(), this.tweens[d].complete || c.push(this.tweens[d]);
            this.tweens =
                c
        }
    };
    ig.Entity.prototype.tween = function(c, d, e) {
        c = new ig.Tween(this, c, d, e);
        this.tweens.push(c);
        return c
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].resume()
    };
    ig.Entity.prototype.stopTweens = function(c) {
        for (var d = 0; d < this.tweens.length; d++) this.tweens[d].stop(c)
    };
    ig.Tween = function(c, d, e, f) {
        var l = {},
            m = {},
            A = {},
            n = 0,
            y = !1,
            C = !1,
            u = !1;
        this.duration = e;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onStart = this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(c) {
            u = c
        };
        this.initEnd = function(c, d, e) {
            if ("object" !== typeof d[c]) e[c] = d[c];
            else
                for (subprop in d[c]) e[c] || (e[c] = {}), this.initEnd(subprop, d[c], e[c])
        };
        this.initStart = function(c, d, e, f) {
            if ("object" !== typeof e[c]) "undefined" !== typeof d[c] && (f[c] = e[c]);
            else
                for (subprop in e[c]) f[c] || (f[c] = {}), "undefined" !== typeof d[c] &&
                    this.initStart(subprop, d[c], e[c], f[c])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            n = 0; - 1 == c.tweens.indexOf(this) && c.tweens.push(this);
            C = !0;
            y = new ig.Timer;
            for (var e in d) this.initEnd(e, d, m);
            for (e in m) this.initStart(e, m, c, l), this.initDelta(e, A, c, m);
            if (!this.delay && this.onStart) this.onStart()
        };
        this.initDelta = function(c, d, e, f) {
            if ("object" !== typeof f[c]) d[c] = f[c] - e[c];
            else
                for (subprop in f[c]) d[c] || (d[c] = {}), this.initDelta(subprop, d[c], e[c], f[c])
        };
        this.propUpdate =
            function(c, d, e, f, l) {
                if ("object" !== typeof e[c]) d[c] = "undefined" != typeof e[c] ? e[c] + f[c] * l : d[c];
                else
                    for (subprop in e[c]) this.propUpdate(subprop, d[c], e[c], f[c], l)
            };
        this.propSet = function(c, d, e) {
            if ("object" !== typeof d[c]) e[c] = d[c];
            else
                for (subprop in d[c]) e[c] || (e[c] = {}), this.propSet(subprop, d[c], e[c])
        };
        this.update = function() {
            if (!C) return !1;
            if (this.delay) {
                if (y.delta() < this.delay) return;
                this.delay = 0;
                y.reset();
                if (this.onStart) this.onStart()
            }
            if (this.paused || this.complete) return !1;
            var d = (y.delta() + n) / this.duration,
                d = 1 < d ? 1 : d,
                e = this.easing(d);
            for (property in A) this.propUpdate(property, c, l, A, e);
            if (1 <= d) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    u && u.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in l) this.propSet(property, l, c);
                    n = 0;
                    y.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    d = {};
                    e = {};
                    ig.merge(d, m);
                    ig.merge(e, l);
                    ig.merge(l, d);
                    ig.merge(m, e);
                    for (property in m) this.initDelta(property, A, c, m);
                    n = 0;
                    y.reset(); - 1 != this.loopNum &&
                        this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            n += y.delta()
        };
        this.resume = function() {
            this.paused = !1;
            y.reset()
        };
        this.stop = function(c) {
            c && (this.loop = this.complete = this.paused = !1, n += e, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(c) {
        return c
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(c) {
        return c *
            c
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(c) {
        return -c * (c - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c : -0.5 * (--c * (c - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(c) {
        return c * c * c
    };
    ig.Tween.Easing.Cubic.EaseOut = function(c) {
        return --c * c * c + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c : 0.5 * ((c -= 2) * c * c + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(c) {
        return c * c * c * c
    };
    ig.Tween.Easing.Quartic.EaseOut = function(c) {
        return -(--c * c * c * c - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut =
        function(c) {
            return 1 > (c *= 2) ? 0.5 * c * c * c * c : -0.5 * ((c -= 2) * c * c * c - 2)
        };
    ig.Tween.Easing.Quintic.EaseIn = function(c) {
        return c * c * c * c * c
    };
    ig.Tween.Easing.Quintic.EaseOut = function(c) {
        return (c -= 1) * c * c * c * c + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(c) {
        return 1 > (c *= 2) ? 0.5 * c * c * c * c * c : 0.5 * ((c -= 2) * c * c * c * c + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(c) {
        return -Math.cos(c * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(c) {
        return Math.sin(c * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(c) {
        return -0.5 *
            (Math.cos(Math.PI * c) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(c) {
        return 0 == c ? 0 : Math.pow(2, 10 * (c - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(c) {
        return 1 == c ? 1 : -Math.pow(2, -10 * c) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(c) {
        return 0 == c ? 0 : 1 == c ? 1 : 1 > (c *= 2) ? 0.5 * Math.pow(2, 10 * (c - 1)) : 0.5 * (-Math.pow(2, -10 * (c - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(c) {
        return -(Math.sqrt(1 - c * c) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(c) {
        return Math.sqrt(1 - --c * c)
    };
    ig.Tween.Easing.Circular.EaseInOut =
        function(c) {
            return 1 > (c /= 0.5) ? -0.5 * (Math.sqrt(1 - c * c) - 1) : 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1)
        };
    ig.Tween.Easing.Elastic.EaseIn = function(c) {
        var d, e = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !e || 1 > e ? (e = 1, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(1 / e);
        return -(e * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c - d) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(c) {
        var d, e = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !e || 1 > e ? (e = 1, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(1 / e);
        return e * Math.pow(2, -10 * c) * Math.sin(2 *
            (c - d) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(c) {
        var d, e = 0.1,
            f = 0.4;
        if (0 == c) return 0;
        if (1 == c) return 1;
        f || (f = 0.3);
        !e || 1 > e ? (e = 1, d = f / 4) : d = f / (2 * Math.PI) * Math.asin(1 / e);
        return 1 > (c *= 2) ? -0.5 * e * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c - d) * Math.PI / f) : 0.5 * e * Math.pow(2, -10 * (c -= 1)) * Math.sin(2 * (c - d) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(c) {
        return c * c * (2.70158 * c - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(c) {
        return (c -= 1) * c * (2.70158 * c + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(c) {
        return 1 >
            (c *= 2) ? 0.5 * c * c * (3.5949095 * c - 2.5949095) : 0.5 * ((c -= 2) * c * (3.5949095 * c + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(c) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - c)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(c) {
        return (c /= 1) < 1 / 2.75 ? 7.5625 * c * c : c < 2 / 2.75 ? 7.5625 * (c -= 1.5 / 2.75) * c + 0.75 : c < 2.5 / 2.75 ? 7.5625 * (c -= 2.25 / 2.75) * c + 0.9375 : 7.5625 * (c -= 2.625 / 2.75) * c + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(c) {
        return 0.5 > c ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * c) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * c - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var c = getQueryVariable("webview");
            if (c) switch (c) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (c = getQueryVariable("debug")) switch (c) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(c, d) {
            this.game = c;
            this.levels = [];
            this.currentLevel = 0;
            this.append(d)
        },
        loadLevel: function(c) {
            for (var d in ig.sizeHandler.dynamicClickableEntityDivs) {
                var e = ig.domHandler.getElementById("#" + d);
                ig.domHandler.hide(e)
            }
            this.currentLevel = c;
            this.game.loadLevel(this.levels[c]);
            return !0
        },
        loadLevelWithoutEntities: function(c) {
            this.currentLevel = c;
            this.game.loadLevelWithoutEntities(this.levels[c]);
            return !0
        },
        append: function(c) {
            newLevels = [];
            return "object" === typeof c ? (c.constructor === [].constructor ? newLevels = c : newLevels[0] = c, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(c) {
            var d = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == c && (d = i);
            return 0 <= d ? this.loadLevel(d) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(c) {
            return null !== this.get(c)
        },
        initUnset: function(c, d) {
            null === this.get(c) && this.set(c, d)
        },
        get: function(c) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(c))
            } catch (d) {
                return window.localStorage.getItem(c)
            }
        },
        getInt: function(c) {
            return ~~this.get(c)
        },
        getFloat: function(c) {
            return parseFloat(this.get(c))
        },
        getBool: function(c) {
            return !!this.get(c)
        },
        key: function(c) {
            return this.isCapable() ? window.localStorage.key(c) : null
        },
        set: function(c, d) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(c, JSON.stringify(d))
            } catch (e) {
                console.log(e)
            }
        },
        setHighest: function(c, d) {
            d > this.getFloat(c) && this.set(c, d)
        },
        remove: function(c) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(c)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.entity-scaling").requires("impact.animation").defines(function() {
    ig.Animation.inject({
        scale: {
            x: 1,
            y: 1,
            align: {
                x: !1,
                y: !1
            }
        },
        draw: function(c, d) {
            var e = ig.system.scale;
            ig.system.context.save();
            var f = 0,
                l = 0,
                f = this.scale.align && this.scale.align.x && "left" == this.scale.align.x ? c : this.scale.align && this.scale.align.x && "right" == this.scale.align.x ? c + this.sheet.width : c + this.sheet.width / 2,
                l = this.scale.align && this.scale.align.y && "top" == this.scale.align.y ? d : this.scale.align && this.scale.align.y && "bottom" ==
                this.scale.align.y ? d + this.sheet.height : d + this.sheet.height / 2;
            ig.system.context.translate(f * e, l * e);
            ig.system.context.scale(this.scale.x, this.scale.y);
            ig.system.context.translate(-f * e, -l * e);
            this.parent(c, d);
            ig.system.context.restore()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(c, d, e) {
            this.parent(c, d, e);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            c = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            d = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            c.chain(d);
            c.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(c) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    c) return !0;
            return !1
        },
        checkClickableLayer: function(c, d, e) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", d)) : this.createClickableOutboundLayer(c, d, "media/graphics/misc/invisible.png", e))
        },
        createClickableOutboundLayer: function(c, d, e, f) {
            var l = ig.$new("div");
            l.id = c;
            document.body.appendChild(l);
            l = $("#" + l.id);
            l.css("float", "left");
            l.css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    A = window.innerWidth /
                    mobileWidth;
                l.css("left", this.pos.x * A);
                l.css("top", this.pos.y * m);
                l.css("width", this.size.x * A);
                l.css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, A = h / 2 - destH / 2, console.log(m, A), l.css("left", m + this.pos.x * multiplier), l.css("top", A + this.pos.y * multiplier), l.css("width", this.size.x * multiplier), l.css("height", this.size.y * multiplier);
            f ? l.html("<a target='_blank' href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>") : l.html("<a href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[c].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        state: "",
        enabled: !0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            !ig.global.wm && !isNaN(e.zIndex) && (this.zIndex = e.zIndex);
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            e = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + c + "," + e + "," + d + ",1)"
        },
        clicked: function() {
            throw "no implementation on clicked()";
        },
        clicking: function() {
            throw "no implementation on clicking()";
        },
        released: function() {
            throw "no implementation on released()";
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(c) {
            this.pos = new Vector2(c.pos.x, c.pos.y);
            this.size = new Vector2(c.size.x, c.size.y);
            var d = "more-games",
                e = "www.google.com",
                f = !1;
            c.div_layer_name && (d = c.div_layer_name);
            c.link && (e = c.link);
            c.newWindow && (f = c.newWindow);
            this.createClickableLayer(d, e, f)
        },
        createClickableLayer: function(c,
            d, e) {
            this.identifier = c;
            var f = ig.domHandler.getElementById("#" + c);
            f ? (ig.domHandler.show(f), ig.domHandler.attr(f, "href", d)) : this.createClickableOutboundLayer(c, d, this.invisImagePath, e)
        },
        update: function(c, d) {
            this.pos.x === c && this.pos.y === d || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(c, d, e, f) {
            var l = ig.domHandler.create("div");
            ig.domHandler.attr(l, "id", c);
            var m = ig.domHandler.create("a");
            f ? (ig.domHandler.attr(m, "href", d), ig.domHandler.attr(m, "target", "_blank")) : ig.domHandler.attr(m, "href", d);
            d = ig.domHandler.create("img");
            ig.domHandler.css(d, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(d, "src", e);
            e = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                f = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var A = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                e = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else f = ig.domHandler.getElementById("#canvas"), f = ig.domHandler.getOffsets(f), A = f.top, f = Math.floor(f.left + this.pos.x * e) + "px", A = Math.floor(A + this.pos.y * e) + "px", n = Math.floor(this.size.x *
                e) + "px", e = Math.floor(this.size.y * e) + "px";
            ig.domHandler.css(l, {
                "float": "left",
                position: "absolute",
                left: f,
                top: A,
                width: n,
                height: e,
                "z-index": 3
            });
            ig.domHandler.addEvent(l, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(m, d);
            ig.domHandler.appendChild(l, m);
            ig.domHandler.appendToBody(l);
            ig.sizeHandler.dynamicClickableEntityDivs[c] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[c].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[c].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[c].entity_pos_x =
                this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(c, d, e) {
            this.parent(c, d, e);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, e && e.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                        new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = e.div_layer_name ? e.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var c = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(c)
        },
        hide: function() {
            var c = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(c)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(c, d, e) {
            this.parent(c, d, e);
            if (e) switch (console.log("settings found ... using that div layer name"), c = e.div_layer_name, console.log("settings.centralize:", e.centralize), e.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else c = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: c,
                        centralize: centralize
                    })
                } catch (f) {
                    console.log(f)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 83, 85),
        size: {
            x: 83,
            y: 85
        },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function(c, d, e) {
            this.parent(c, d, e);
            ig.global.wm || (this.div_layer_name = e.div_layer_name ?
                e.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
        },
        show: function() {
            var c = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(c)
        },
        hide: function() {
            var c = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.hide(c)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(c, d, e) {
            this.parent(c, d, e)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (c) {
                        console.log(c)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var c = ig.system.context;
                c.save();
                var d = ig.system.width / 2,
                    e = ig.system.height / 2;
                c.translate(d, e);
                c.rotate(this.move * Math.PI / 180);
                c.beginPath();
                c.moveTo(0, 0);
                for (var f = 0, l = 1; 48 >= l; l += 1) c.lineTo(0 + 800 * Math.cos(2 * l * Math.PI / 48), 0 + 800 * Math.sin(2 * l * Math.PI / 48)), f++, 2 == f && (f = 0, c.lineTo(0, 0));
                c.translate(-d, -e);
                d = c.createRadialGradient(d, e, 100, d, e, 250);
                d.addColorStop(0, "rgba(255,255,255,0.1)");
                d.addColorStop(1, "rgba(0,0,0,0)");
                c.fillStyle = d;
                c.fill();
                c.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(c, d, e) {
            this.parent(c, d, e)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (c) {
                        console.log(c)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var c = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            c.addColorStop(0, "#ffed94");
            c.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = c;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(c) {
            this.objectArray.push(c)
        },
        clickObject: function(c) {
            this.isFirstPressed && "function" == typeof c.clicked && (c.clicked(), this.addToClickedObjectList(c));
            this.isPressed && !this.isReleased && "function" == typeof c.clicking &&
                c.clicking();
            this.isReleased && "function" == typeof c.released && (c.released(), this.removeFromClickedObjectList(c))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var c = null,
                d = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > d && (d = this.objectArray[a].zIndex, c = this.objectArray[a]);
            if (null != c) null != this.hoveringItem ? this.hoveringItem != c && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof c.over &&
                c.over()) : "function" == typeof c.over && c.over(), this.hoveringItem = c, this.clickObject(c), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (c = 0; c < this.clickedObjectList.length; c++) d = this.clickedObjectList[c], "function" == typeof d.releasedOutside && d.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed =
                ig.input.state("click")
        },
        addToClickedObjectList: function(c) {
            this.clickedObjectList.push(c)
        },
        removeFromClickedObjectList: function(c) {
            for (var d = [], e = 0; e < this.clickedObjectList.length; e++) {
                var f = this.clickedObjectList[e];
                f != c && d.push(f)
            }
            this.clickedObjectList = d
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(c, d, e) {
            this.parent(c, d, e)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(c) {
            for (k in dynamicClickableEntityDivs)
                if (k == c) return !0;
            return !1
        },
        checkClickableLayer: function(c,
            d, e) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(c) ? (ig.game.showOverlay([c]), $("#" + c).find("[href]").attr("href", d)) : this.createClickableOutboundLayer(c, d, "media/graphics/misc/invisible.png", e))
        },
        createClickableOutboundLayer: function(c, d, e, f) {
            var l = ig.$new("div");
            l.id = c;
            document.body.appendChild(l);
            $("#" + l.id).css("float", "left");
            $("#" + l.id).css("width", this.size.x * multiplier);
            $("#" + l.id).css("height", this.size.y * multiplier);
            $("#" + l.id).css("position", "absolute");
            var m = w / 2 - destW / 2,
                A = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + l.id).css("left", this.pos.x), $("#" + l.id).css("top", this.pos.y)) : ($("#" + l.id).css("left", m + this.pos.x * multiplier), $("#" + l.id).css("top", A + this.pos.y * multiplier));
            f ? $("#" + l.id).html("<a target='_blank' href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>") : $("#" + l.id).html("<a href='" + d + "'><img style='width:100%;height:100%' src='" + e + "'></a>");
            dynamicClickableEntityDivs[c] = {};
            dynamicClickableEntityDivs[c].width = $("#" + l.id).width();
            dynamicClickableEntityDivs[c].height =
                $("#" + l.id).height();
            dynamicClickableEntityDivs[c].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[c].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var c = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < c.length; i++) c[i] != this && (c[i].isHovering = !1)
        },
        deselectOthers: function() {
            var c = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < c.length; i++) c[i] != this && (c[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.game.food").requires("impact.entity").defines(function() {
    EntityFood = ig.Entity.extend({
        rotVel: 0,
        foodType: "",
        isFalling: !0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.animSheet = ig.game.foods[this.foodType].sheet;
            this.addAnim("idle", 1, [0]);
            this.size.x = this.animSheet.width;
            this.size.y = 15;
            this.anims.idle.pivot.x = 0.5 * this.size.x;
            this.anims.idle.pivot.y = 0.5 * this.size.y;
            this.offset.y = ig.game.foods[this.foodType].offsetY;
            this.switchToFalling()
        },
        switchToHead: function() {
            this.isFalling = !1;
            this.type = ig.Entity.TYPE.B;
            this.checkAgainst = ig.Entity.TYPE.A;
            this.collides = ig.Entity.COLLIDES.FIXED;
            this.collideWith = this.collideWithFalling
        },
        switchToTail: function() {
            this.checkAgainst = this.type = ig.Entity.TYPE.NONE;
            this.collides = ig.Entity.COLLIDES.NEVER;
            this.collideWith = this.collideWithDefault
        },
        switchToFalling: function() {
            this.isFalling = !0;
            this.type = ig.Entity.TYPE.A;
            this.checkAgainst = ig.Entity.TYPE.B;
            this.collides = ig.Entity.COLLIDES.LITE;
            this.collideWith = this.collideWithDefault
        },
        collideWithFalling: function(c,d) {	//控制食物落下的效果
            var e = c.pos.x + 0.3 * c.size.x,
                f = c.pos.x + 0.7 * c.size.x;
            "y" == d ? e > this.pos.x && f < this.pos.x + this.size.x ? ig.game.getEntitiesByType(EntityStack)[0].add(c) : e < this.pos.x ? (c.rotVel = -0.12, c.switchToTail()) : f > this.pos.x + this.size.x && (c.rotVel = 0.12, c.switchToTail()) : "x" == d && (e > this.pos.x + this.size.x ? (c.rotVel = 0.12, c.switchToTail()) : f < this.pos.x && (c.rotVel = -0.12, c.switchToTail()))
        },
        collideWithDefault: function() {},
        update: function() {
            this.parent();
            0 != this.rotVel && (this.currentAnim.angle += this.rotVel)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.spawner").requires("impact.entity", "game.entities.game.food").defines(function() {
    EntitySpawner = ig.Entity.extend({
        alive: [],
        spawnTypes: [],
        size: {
            x: 60,
            y: 70
        },
        random: -1,
        timer: null,
        baseZIndex: 1E4,
        history: [],
        init: function(c, d, e) {
            this.parent(c, d, e)
        },
        setOrder: function(c) {
            var d = ig.game.io.storage.get("stb-ingredients"),
                e = [],
                f;
            //console.log(d);
            for (f in d) d[f] && "bundle" != f && e.push(f);
            // for (d = e.length - 1; 0 <= d; d--) {
            //     f = 0;
            //     for (var l = c.foods.length; f < l; f++)
            //         if (e[d] == c.foods[f].foodType) {
            //             e.splice(d, 1);
            //             break
            //         }
            // }
            // for (; 0 <
            //     e.length && 2 > this.spawnTypes.length;) this.spawnTypes.push(e.splice(Math.floor(Math.random() * e.length), 1)[0]);
            // d = 0;
        	this.spawnTypes = e;
        	//console.log(e);	//有问题
            //for (l = c.foods.length; d < l; d++) this.spawnTypes.push(c.foods[d].foodType), 0 != d && 0 == d % 2 && this.history.push(this.spawnTypes[d]);
            this.history.push("topbuns");
            this.history.push("topbuns")
        },
        start: function() {
            this.timer = new ig.Timer;
            this.timer.set(0.7)
        },
        pause: function() {
            null != this.timer && this.timer.pause()
        },
        unpause: function() {
            null != this.timer && this.timer.unpause()
        },
        update: function() {
            this.parent();
            null != this.timer && 0 < this.timer.delta() && (this.add(), this.timer.reset())
        },
        add: function() {
            var c = 0;
            do var c = Math.floor(Math.random() * this.spawnTypes.length),
                d = this.getCount(this.history, this.spawnTypes[c]); while (2 <= d);
            this.history.shift();
            this.history.push(this.spawnTypes[c]);
            var d = this.size.x * Math.floor(8 * Math.random()),
                e = -this.size.y;
            this.baseZIndex += 2;
            c = ig.game.spawnEntity(EntityFood, d, e, {
                foodType: this.spawnTypes[c],
                zIndex: this.baseZIndex
            });
            //console.log(c);	//为下落的食物
            this.alive.push(c);		//把元素添加到spawner.alive的数组中
            ig.game.sortEntitiesDeferred();
            this.spawnedFood(c)
        },
        remove: function(c) {
            var d = this.alive.indexOf(c); - 1 != d && this.alive.splice(d, 1);
            c.kill()
        },
        getCount: function(c, d) {
            var e = 0,
                f;
            for (f = 0; f < c.length; f++) c[f] === d && e++;
            return e
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.stack").requires("impact.entity", "impact.impact", "game.entities.pointer", "game.entities.game.food").defines(function() {
    EntityStack = ig.Entity.extend({
        size: {
            x: 132,
            y: 130
        },
        foods: [],
        top: null,
        deltaX: 0,
        maxVel: 50,
        type: ig.Entity.TYPE.B,
        isDragged: !1,
        zIndex: 2E4,
        easing: 0.6,
        centerX: 0,
        maxVisible: 10,
        maxMove: 2,
        count: 0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.deltaX = 0.5 * ig.system.width - 50;
            ig.global.wm || (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.centerX = 0.5 * (this.size.x -
                ig.game.foods.lowerbuns.sheet.width-60), this.add(ig.game.spawnEntity(EntityFood, this.pos.x + this.centerX, this.pos.y, {
                foodType: "lowerbuns",
                zIndex: 1E4
            })), ig.game.sortEntitiesDeferred())
        },
        update: function() {
            this.parent();
            if ("play" == this.gm.state) {
                (this.isDragged || ig.ua.mobile) && this.moveFood(this.pointer.pos.x - 0.5 * this.size.x, this.foods[0], this.easing);
                for (var c = 1, d = this.foods.length; c < d; c++) this.moveFood(this.foods[c - 1].pos.x + 0.5 * (this.foods[c - 1].size.x - this.foods[c].size.x), this.foods[c], this.easing - c /
                    100);
                this.pos.x = this.foods[0].pos.x - this.centerX;
                this.pos.y = this.top.pos.y - 180;
                ig.input.pressed("click") && this.pointer.pos.x > this.pos.x && (this.pointer.pos.x < this.pos.x + this.size.x && this.pointer.pos.y > this.pos.y && this.pointer.pos.y < this.pos.y + this.size.y) && (this.isDragged = !0);
                if (ig.input.released("click") || !ig.input.state("click")) this.isDragged = !1
            }
        },
        moveFood: function(c, d, e) {
            0.25 > e && (e = 0.25);
            this.deltaX = c - d.pos.x;
            d.pos.x += this.deltaX.limit(-this.maxVel, this.maxVel) * e;
            d.pos.x = d.pos.x.limit(0, ig.system.width -
                d.size.x)
        },
        moveStack: function() {
            for (var c = this.foods.length > this.maxMove ? this.foods.length - this.maxMove : 0, d = this.foods.length; c < d; c++) this.foods[c].tween({
                pos: {
                    y: this.foods[c].pos.y + this.foods[c].size.y
                }
            }, 0.25).start()
        },
        stop: function() {
            this.isDragged = !1
        },
        add: function(c) {
            null != this.top && (this.top.switchToTail(), c.pos.x = this.top.pos.x + 0.5 * (this.top.size.x - c.size.x), c.pos.y = this.top.pos.y - this.top.size.y + 10, this.impactEffect());
            this.size.y =  15 * this.foods.length;
            this.maxVel -= 1;
            15 > this.maxVel && (this.maxVel =
                15);
            this.top = c;
            this.foods.push(c);
            c.switchToHead();
            "undefined" !== typeof this.stackAdded && this.stackAdded(c);
//          this.foods.length >= this.maxMove && this.foods.shift().kill();
//			null != this.top && (this.foods.reverse().shift().kill(),this.foods.reverse());
            this.count++
        },
        impactEffect: function() {
            for (var c = null, d = null, e = this.foods.length - 1, f = this.foods.length > this.maxMove ? this.foods.length - this.maxMove : 0; e >= f; e--) c = this.foods[0].tween({
                currentAnim: {
                    scale: {
                        x: 1.4,
                        y: 1.4
                    }
                }
            }, 0.1, {
                easing: ig.Tween.Easing.Bounce.EaseIn,
                delay: 0.04 * (this.foods.length - 1 - e)
            }), d = this.foods[0].tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.1, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            }), c.chain(d), c.start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.tick").requires("impact.entity").defines(function() {
    EntityTick = ig.Entity.extend({
        size: {
            x: 30,
            y: 28
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/tick.png", 30, 28),
        zIndex: 41E3,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        },
        animateIn: function() {
            this.currentAnim.scale.x = this.currentAnim.scale.y = 2.5;
            this.currentAnim.alpha = 0.1;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Back.EaseIn
            }).start();
            this.tween({
                    currentAnim: {
                        alpha: 1
                    }
                },
                0.75).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.ingredientui").requires("impact.entity", "game.entities.game.tick").defines(function() {
    EntityIngredientui = ig.Entity.extend({
        size: {
            x: 70,
            y: 60
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/ingredient_cont.png", 70, 60),
        count: 0,
        food: null,
        foodType: "",
        isDone: !1,
        zIndex: 4E4,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.foodSize = {
                x: 64,
                y: 36
            };
            this.xPos = this.pos.x + 0.5 * (this.size.x - this.foodSize.x);
            this.yPos = this.pos.y + 15 - 0.5 * this.foodSize.y
        },
        draw: function() {
            this.parent();
              ig.system.context.drawImage(this.food.data, this.xPos, this.yPos, this.foodSize.x, this.foodSize.y);
              0 < this.count && (ig.system.context.font = "15pt mikadobold", ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "center", ig.system.context.fillText("+"+this.count+"s", this.pos.x + 30, this.pos.y + 53))
        },
        updateCount: function(c) {
            this.isDone || (this.count += c, -1 == c && 0 >= this.count ? (this.count = 0, this.isDone = !0, ig.game.spawnEntity(EntityTick, this.pos.x + 15, this.pos.y + 30).animateIn()) : 1 == c && 99 < this.count && (this.count =
                99, this.isDone = !0, ig.game.spawnEntity(EntityTick, this.pos.x + 15, this.pos.y + 30).animateIn()))
        }
    })
});
ig.baked = !0;
ig.module("plugins.math.utils").defines(function() {
    MathUtils = ig.Class.extend({
        roundToTwoDecimals: function(c) {
            return Math.round(100 * (c + 1E-5)) / 100
        },
        countDecimals: function(c) {
            return Math.floor(c) === c ? 0 : c.toString().split(".")[1].length || 0
        },
        table: function(c, d, e, f, l, m) {
            for (var A = c.length, n = 0, y = 0, C = 0; C < A; C++) n = C % d, y = parseInt(C / d), c[C].pos.x = e + (c[C].size.x + l) * n, c[C].pos.y = f + (c[C].size.y + m) * y
        },
        getRandomProperty: function(c) {
            var d = Object.keys(c);
            return c[d[d.length * Math.random() << 0]]
        },
        hex2rgb: function(c) {
            c =
                c.replace("#", "");
            r = parseInt(c.substring(0, 2), 16);
            g = parseInt(c.substring(2, 4), 16);
            b = parseInt(c.substring(4, 6), 16);
            return result = {
                r: r,
                g: g,
                b: b
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.upperui").requires("impact.entity", "game.entities.game.ingredientui", "plugins.math.utils").defines(function() {
    EntityUpperui = ig.Entity.extend({
//      size: {
//          x: 540,
//          y: 81
//      },
		size: {
            x: 540,
            y: 80
        },
        zIndex: 3E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/upperui.png", 540, 80),
        ingredients: [],
        tip: 0,
        totalTip: 0,
        earn: 0,
        min: 0,
        sec: 20,
        score: 0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        },
        setIngredients: function(c) {
            for (var d = 0, e = c.foods.length; d < e; d++) this.ingredients.push(ig.game.spawnEntity(EntityIngredientui,
                280 + 75 * d, 10, {
                    count: c.foods[d].count,
                    food: ig.game.foods[c.foods[d].foodType].sheet.image,
                    foodType: c.foods[d].foodType
                })), this.totalTip += c.foods[d].count
        },        
        twochar:function (n) {
            return n >= 10 ? n : "0" + n;
        },
        draw: function() {
            this.parent();
            ig.system.context.font = "18pt mikadobold";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText("单词", this.pos.x + 220, this.pos.y + 30);
            ig.system.context.fillText(this.tip+"个", this.pos.x + 220, this.pos.y + 62)
            //ig.system.context.fillText("分数:"+this.tip, this.pos.x + 120, this.pos.y + 60)	//百分值
			ig.system.context.fillText(this.twochar(this.min)+":"+this.twochar(this.sec),this.pos.x + 90, this.pos.y + 50);
        },
        updateTime: function(m,s){
        	this.sec =  s;
        	this.min =  m;
        },
        updateTimeadd: function(m,s){
        	this.sec = this.sec + s;
        	this.min = this.min + m;
        	if(this.sec >=60){
        		this.min += 1;
        		this.sec = this.sec - 60;
        	}
        },
        updateTip: function(c) {
        	var tem = (c=="beef" || c=="egg" || c=="cheese");
        	if(!tem){
        		 this.tip += 1;
        		0 > this.tip && (this.tip = 0)
        	}
//          this.tip += c;
//          0 > this.tip && (this.tip = 0)
        },
        updateEarn: function(c) {
            this.earn += c;
            this.earn = MathUtils.prototype.roundToTwoDecimals(this.earn)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.orderup").requires("impact.entity", "plugins.math.utils").defines(function() {
    EntityOrderup = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: {
            x: 494,
            y: 732
        },
        zIndex: 42E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/order_up.png", 494, 732),
        order: null,
        orderPrice: 0,
        orderNo: 0,
        orderName: "",
        actualTip: 0,
        total: 0,
        money: 0,
        isActive: !1,
        willShowTap: !1,
        tapCont: new ig.Image("media/graphics/game/game/tapcont.png"),
        texts: [],
        init: function(c, d, e) {
            this.parent(c,
                d, e);
            this.addAnim("idle", 1, [0]);
            this.lowerui = ig.game.getEntitiesByType(EntityLowerui)[0];
            this.upperui = ig.game.getEntitiesByType(EntityUpperui)[0]
        },
        draw: function() {
            this.isActive && (this.parent(), ig.system.context.font = "25pt mikadobold", ig.system.context.fillStyle = "#0c3770", ig.system.context.textAlign = "center", ig.system.context.fillText(this.orderName, this.pos.x + 0.5 * this.size.x, this.pos.y + 0.3425 * this.size.y), ig.system.context.fillText(_STRINGS.Win.tip, this.pos.x + 0.175 * this.size.x, this.pos.y + 0.74 * this.size.y),
                ig.system.context.fillText(_STRINGS.Win.total, this.pos.x + 0.175 * this.size.x, this.pos.y + 0.815 * this.size.y), this.willShowTap && (this.tapCont.draw(this.tapCont.x, this.tapCont.y), ig.system.context.font = "25pt mikadobold", ig.system.context.textAlign = "center", ig.system.context.fillText(_STRINGS.Game.tap, 0.5 * ig.system.width, 0.9325 * ig.system.height)))
        },
        update: function() {
            this.parent();
            this.willShowTap && (this.lowerui.money = MathUtils.prototype.roundToTwoDecimals(this.lowerui.money + this.total / 100), this.lowerui.money >
                this.money + this.total && (this.lowerui.money = MathUtils.prototype.roundToTwoDecimals(this.money + this.total)))
        },
        getName: function(c) {
            return ig.game.foods[c].name
        },
        getPrice: function(c) {
            return ig.game.foods[c].price
        },
        setTip: function(c) {
            this.tip = c;
            this.actualTip = this.orderPrice * this.tip / 100;
            this.actualTip = MathUtils.prototype.roundToTwoDecimals(this.actualTip);	//TIP
            this.total = this.actualTip + this.orderPrice;
            this.total = MathUtils.prototype.roundToTwoDecimals(this.total);	//total
            this.money = ig.game.io.storage.get("stb-money");	//总钱数
            ig.game.io.storage.set("stb-money", MathUtils.prototype.roundToTwoDecimals(this.money + this.total))
        },
        show: function(c) {
            this.isActive = !0;
            this.tapCont.x = 0.5 * (ig.system.width - this.tapCont.width);
            this.tapCont.y = 0.9 * ig.system.height;
            this.tween({
                pos: {
                    y: 0.5 * (ig.system.height - this.size.y)
                }
            }, 1, {
                easing: ig.Tween.Easing.Cubic.EaseOut,
                onComplete: function() {
                    this.animateTexts(c)
                }.bind(this)
            }).start();
            ig.soundHandler.sfxPlayer.play("swoosh")
        },
        animateTexts: function(c) {
            for (var d = this.pos.x + 0.275 * this.size.x, e = this.pos.y +
                0.415 * this.size.y, f = 0, l = 0, m = "", A = "", n = 0, y = this.upperui.ingredients.length; n < y; n++) f = this.getPrice(this.upperui.ingredients[n].foodType), l = this.order.foods[n].count, m = this.getName(this.upperui.ingredients[n].foodType), A = 1 == MathUtils.prototype.countDecimals(f) ? "0" : "", this.texts.push(ig.game.spawnEntity(EntityOrderupText, d, e + 31 * n, {
                text: _STRINGS.Win.dollar + f + A + _STRINGS.Win.dash + l + _STRINGS.Win.x + m,
                alpha: 1,
                size: {
                    x: 100,
                    y: 20
                },
                scale: {
                    x: 0,
                    y: 0
                },
                color: "#0c3770"
            })), ig.game.sortEntitiesDeferred(), this.texts[n].tween({
                scale: {
                    x: 1,
                    y: 1
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Elastic.EaseOut,
                delay: 0.25 * n,
                onStart: function() {
                    ig.soundHandler.sfxPlayer.play("pop4")
                },
                onComplete: n == this.order.foods.length - 1 ? function() {
                    var d = ig.game.spawnEntity(EntityOrderupText, this.pos.x + 0.45 * this.size.x, this.pos.y + 0.74 * this.size.y, {
                        text: _STRINGS.Win.dollar + this.actualTip,
                        alpha: 1,
                        size: {
                            x: 100,
                            y: 25
                        },
                        scale: {
                            x: 0,
                            y: 0
                        },
                        color: "#779716"
                    });
                    ig.game.sortEntitiesDeferred();
                    d.tween({
                        scale: {
                            x: 1,
                            y: 1
                        }
                    }, 0.5, {
                        easing: ig.Tween.Easing.Elastic.EaseOut,
                        onStart: function() {
                            ig.soundHandler.sfxPlayer.play("pop2")
                        },
                        onComplete: function() {
                            var d = ig.game.spawnEntity(EntityOrderupText, this.pos.x + 0.45 * this.size.x, this.pos.y + 0.82 * this.size.y, {
                                text: _STRINGS.Win.dollar + this.total,
                                alpha: 1,
                                size: {
                                    x: 100,
                                    y: 30
                                },
                                scale: {
                                    x: 0,
                                    y: 0
                                },
                                color: "#0c3770"
                            });
                            ig.game.sortEntitiesDeferred();
                            d.tween({
                                scale: {
                                    x: 1,
                                    y: 1
                                }
                            }, 0.5, {
                                easing: ig.Tween.Easing.Elastic.EaseOut,
                                onStart: function() {
                                    ig.soundHandler.sfxPlayer.play("pop")
                                },
                                onComplete: function() {
                                    this.willShowTap = !0;
                                    null != c && c();
                                    ig.soundHandler.sfxPlayer.play("buying")
                                }.bind(this)
                            }).start()
                        }.bind(this)
                    }).start()
                }.bind(this) : null
            }).start()
        }
    });
    EntityOrderupText = ig.Entity.extend({
        text: "",
        color: "",
        alpha: 0,
        zIndex: 43E3,
        scale: {
            x: 1,
            y: 1
        },
        origin: {
            x: 0,
            y: 0
        },
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.origin.x = this.pos.x + 0.5 * this.size.x;
            this.origin.y = this.pos.y + 0.5 * this.size.y
        },
        draw: function() {
            this.parent();
            var c = ig.system.scale;
            ig.system.context.save();
            ig.system.context.translate(this.origin.x * c, this.origin.y * c);
            ig.system.context.scale(this.scale.x, this.scale.y);
            ig.system.context.translate(-this.origin.x * c, -this.origin.y * c);
            ig.system.context.font =
                this.size.y + "pt mikadobold";
            ig.system.context.textAlign = "left";
            ig.system.context.fillStyle = this.color;
            ig.system.context.globalAlpha = this.alpha;
            ig.system.context.fillText(this.text, this.pos.x, this.pos.y);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.orderfail").requires("impact.entity", "plugins.tween").defines(function() {
    EntityOrderfail = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: {
            x: 540,
            y: 343
        },
        zIndex: 42E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/orderfail.png", 540, 343),
        orderNo: 0,
        orderName: "",
        tapCont: new ig.Image("media/graphics/game/game/tapcont.png"),
        willShowTap: !1,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        },
        draw: function() {
            this.parent();
            this.willShowTap && (this.tapCont.draw(this.tapCont.x, this.tapCont.y), ig.system.context.font = "25pt mikadobold", ig.system.context.fillStyle = "#0c3770", ig.system.context.textAlign = "center", ig.system.context.fillText(_STRINGS.Game.tap, 0.5 * ig.system.width, this.tapCont.y + 0.7 * this.tapCont.height))
        },
        show: function(c) {
            this.currentAnim.scale.x = this.currentAnim.scale.y = 0.01;
            this.currentAnim.alpha = 0.1;
            this.pos.y = 0.2 * (ig.system.height - this.size.y);
            this.tapCont.x = this.pos.x + 0.5 * (this.size.x - this.tapCont.width);
            this.tapCont.y =
                this.pos.y + 0.9 * this.size.y;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.75, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start();
            this.tween({
                currentAnim: {
                    alpha: 1
                }
            }, 0.5, {
                onComplete: function() {
                    this.willShowTap = !0;
                    null != c && c()
                }.bind(this)
            }).start();
            ig.soundHandler.sfxPlayer.play("gameover")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.puff").requires("impact.entity").defines(function() {
    EntityPuff = ig.Entity.extend({
        size: {
            x: 145,
            y: 72
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/game/puff.png", 145, 72),
        target: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.currentAnim = null
        },
        reinit: function(c) {
            this.target = c;
            this.zIndex = c.zIndex - 1;
            this.currentAnim = this.anims.idle.rewind()
        },
        update: function() {
            this.parent();
            null != this.currentAnim && 1 == this.currentAnim.loopCount &&
                (this.currentAnim = null);
            null != this.target && (this.pos.x = this.target.pos.x + 0.5 * (this.target.size.x - this.size.x), this.pos.y = this.target.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-manager").requires("impact.entity", "game.entities.game.food", "game.entities.game.stack", "game.entities.game.upperui", "game.entities.game.orderup", "game.entities.game.orderfail", "game.entities.game.puff", "plugins.math.utils").defines(function() {
    EntityGameManager = ig.Entity.extend({
        size: {
            x: 50,
            y: 50
        },
        velY: 10,	//控制下落的速度
        zIndex: 5E4,
        level: 0,
        stack: null,
        spawner: null,
        puff: null,
        tutorial: null,
        tutorialType: "",
        tutorialFocus: "",
        _sec: 20,
        _min: 0,
        setInter: null,
        state: "play",
        init: function(c, d, e) {
            this.parent(c, d, e);
            ig.global.wm ||
                (this.level = ig.game.io.storage.get("stb-level"), c = ig.game.order, c.foods.pop(), this.stack = ig.game.getEntitiesByType(EntityStack)[0], this.stack.stackAdded = this.stackAdded.bind(this), this.stack.gm = this, this.spawner = ig.game.getEntitiesByType(EntitySpawner)[0], this.spawner.setOrder(c), this.spawner.spawnedFood = this.spawnedFood.bind(this), c.foods.shift(), this.upperui = ig.game.getEntitiesByType(EntityUpperui)[0], this.upperui.setIngredients(c), this.lowerui = ig.game.getEntitiesByType(EntityLowerui)[0], this.background =
                    ig.game.getEntitiesByType(EntityBackground)[0], this.orderfail = ig.game.spawnEntity(EntityOrderfail, 0.5 * (ig.system.width - 540), -343), this.orderup = ig.game.spawnEntity(EntityOrderup, 0.5 * (ig.system.width - 494), -732, {
                        orderName: c.name
                    }), ig.game.isEndless || (this.orderup.orderPrice = this.getOrderPrice(), this.orderup.order = c), this.puff = ig.game.spawnEntity(EntityPuff, -200, -200), ig.game.isEndless && (this.tipTimer = new ig.Timer, this.tipTimer.set(2)),ig.game.io.storage.get("stb-tutorial")["game-controls"] ? this.startTutorial(0.5,
                        "game-controls", ig.game.getEntitiesByType(EntityFood)[0]) : this.spawner.start(),this.setIn(),ig.game.sortEntitiesDeferred())
        },		//isEndless为boolean
        update: function() {
            this.parent();
            switch (this.state) {
                case "play":
                    this.updateFoodMovement();
                    this.updateTipOnEndless();
                    this.checkTutorial();
//                  this.setIn();
                    break;
                case "gameover":
                
                    ig.game.io.storage.get("stb-tutorial")["game-fail"] ? this.checkTutorial() : ig.input.pressed("click") && 0 == this.orderfail.tweens.length ;
//                  && ig.game.director.jumpTo(LevelMenu);
                    break;
                case "gamewin":
                    ig.game.io.storage.get("stb-tutorial")["game-finish"] ?
                        this.checkTutorial() : ig.input.pressed("click") && 0 == this.orderup.tweens.length && ig.game.director.jumpTo(LevelNeworder)
            }
        },
        clearIn: function(){
        	clearInterval(setInter);
        },
        setIn: function(){       	
        	_sec = this.upperui.sec;
        	_min = this.upperui.min;
        	var upp = this.upperui;
            var _this = this;
            
        	setInter = setInterval(function () {       		
        		if(_sec>0){     			
        			_sec = upp.sec;
        			_min = upp.min;
        			_sec--;
        			upp.updateTime(this._min,this._sec)
        		}else if(_sec==0){	            	
	            	if(_min>0){	            		
		            	_min = _min-1;
		            	_sec = 59;
		            	upp.updateTime(this._min,this._sec);
		            }else{
		            	_this.clearIn();
		            	_this.gameOver();
		            }
	        	}
        		
	        },1000);
		  
        },
        updateFoodMovement: function() {	//控制往下掉
        	if(_sec>25 && _min<1){ 
        		this.velY = 15;
        	}
//      	else if(_min>=1){
//      		this.velY = 15;
//      	} 
            for (var c = this.spawner.alive.length - 1; 0 <= c;) this.spawner.alive[c].isFalling && (this.spawner.alive[c].pos.y += !ig.game.isEndless ? 0.8*this.velY : 1.2 * this.velY, this.spawner.alive[c].pos.y >  1.15* ig.system.height && this.spawner.remove(this.spawner.alive[c])), c--
        },
        updateTipOnEndless: function() {
            //ig.game.isEndless && 0 < this.tipTimer.delta() && (this.upperui.updateTip(-1),this.tipTimer.reset())
        },
        checkTutorial: function() {
            "undefined" !== typeof this.tutorialTimer && 0 < this.tutorialTimer.delta() && (this.state = "pause", this.spawner.pause(), this.tutorialTimer.reset(), this.tutorialTimer.pause(), this.showTutorial())
        },
        spawnedFood: function(c) {
            ig.game.io.storage.get("stb-tutorial")["game-start"] ? this.startTutorial(0.5, "game-start", c) : ig.game.io.storage.get("stb-tutorial")["game-avoid-bread"] && "topbuns" == c.foodType && this.startTutorial(0.5, "avoid-bread", c)
        },
        stackAdded: function(c) {	//控制游戏结束，接住食物
//          if ("topbuns" ==		//topbuns为最上面的汉堡
//              c.foodType) this.allGoalsCompleted() || ig.game.isEndless ? this.gameWin() : this.gameOver(), this.spawner.pause(), this.stack.stop();
//          else{

            if(c.foodType == "yihui"||c.foodType == "engan"||c.foodType == "dongxing"||c.foodType == "fuxing"||c.foodType == "jietuan"||c.foodType == "shoujian"||
            c.foodType == "xiegan"||c.foodType == "yiji"||c.foodType == "youzi"||c.foodType == "yuantuan"||c.foodType == "yuechao"||c.foodType == "zhuozhi"||
            c.foodType == "zhuozhi"||c.foodType == "banxiang"||c.foodType == "chijian"||c.foodType == "gepin"||c.foodType == "wangnan"||c.foodType == "xianggong"||
            c.foodType == "huankuang"||c.foodType == "kuke"||c.foodType == "lekuai"||c.foodType == "xinxiang"){
            	this.gameOver();
            	this.clearIn();
            }else{
                for (var d = !1, e = 0, f = this.upperui.ingredients.length; e < f; e++){
                    if (this.upperui.ingredients[e].foodType == c.foodType && !this.upperui.ingredients[e].isDone) {
                        d = !0;
                        ig.game.isEndless ? (this.upperui.ingredients[e].updateCount(1), this.tipTimer.reset()) : (this.upperui.ingredients[e].updateCount(0), this.upperui.ingredients[e].isDone && ig.game.io.storage.get("stb-tutorial")["game-first-topping-done"] ?
                            this.startTutorial(0.5, "first-topping-done", this.upperui.ingredients[e]) : ig.game.io.storage.get("stb-tutorial")["game-all-toppings-done"] && this.allGoalsCompleted() && this.startTutorial(0.5, "all-toppings-done", null));
//                      this.upperui.ingredients[e].isDone ? ig.soundHandler.sfxPlayer.play("done") : ig.soundHandler.sfxPlayer.play("correct");
                        break
                    }
                }
                result_arr.push(_STRINGS.Food[c.foodType]);
				
                d ? (this.upperui.updateEarn(this.getPrice(c.foodType)), this.upperui.updateTip(c.foodType),this.upperui.updateTimeadd(0,this.getPrice(c.foodType))) : (this.upperui.updateTip(c.foodType), ig.soundHandler.sfxPlayer.play("wrong"));
                ig.game.isEndless ?
                    100 <= this.stack.count ? this.lowerui.starCount = 3 : 50 <= this.stack.count ? this.lowerui.starCount = 2 : 25 <= this.stack.count && (this.lowerui.starCount = 1) : this.upperui.tip == this.upperui.totalTip ? this.lowerui.starCount = 3 : this.upperui.tip > Math.round(0.7 * this.upperui.totalTip) ? this.lowerui.starCount = 2 : this.upperui.tip > Math.round(0.4 * this.upperui.totalTip) && (this.lowerui.starCount = 1);
                this.stack.foods.length > this.stack.maxVisible && (this.background.move(), this.stack.moveStack())
            }
            this.puff.reinit(c);
            ig.game.sortEntitiesDeferred()
        },
        allGoalsCompleted: function() {		//判断游戏是否完成
            for (var c = 0, d = this.upperui.ingredients.length; c < d; c++)	//ingredients为数组
                if (0 < this.upperui.ingredients[c].count) return !1;
            return !0
        },
        gameOver: function() {		//游戏失败窗口
            this.state = "gameover";
            var fc = document.getElementById("endGame");
            fc.style.display = "block";
			var _this = this;
			_this.spawner.pause();
			_this.stack.stop();
            var reus_arr = "";
			var tmp = {};
	        //ret = [];		
		    for (var i = 0, j = result_arr.length; i < j; i++) {
		        if (!tmp[result_arr[i]]) {
		            tmp[result_arr[i]] = 1;
		            ret.push(result_arr[i]);
		        }
		    }
		    for(var i =0;i<ret.length;i++){
		    	if(ret[i]=="牛肉"|| ret[i]=="鸡蛋"|| ret[i]=="芝士"){
		    		ret.splice(i,1);
		    	}
		    }
			// for(var arr = 0;arr < ret.length;arr++)
			// {				
			// 	reus_arr += "<span>"+ret[arr]+"</span>";
			// }
			
			//userResult.innerHTML = reus_arr;
			
            // ig.game.io.storage.set("stb-level", 1);
            // ig.game.io.storage.get("stb-tutorial")["game-fail"] ? this.orderfail.show(function() {
            //     this.startTutorial(0.5, "game-fail", null)
            // }.bind(this)) : this.orderfail.show(null);	//显示窗口
//          this.lowerui.starCount = 0
        },
        gameWin: function() {		//游戏结束弹出窗
            this.state = "gamewin";
            var fc = document.getElementById("timeOut");
            fc.style.display = "block";
            var _spa = this.spawner;
            var _sta = this.stack;
            _spa.spawner.pause();
            _sta.stop();
            // ig.game.io.storage.set("stb-level", ++this.level);
            // ig.game.isEndless &&
            //     (this.orderup.orderPrice = this.getOrderPrice(), this.orderup.order = {
            //         foods: this.upperui.ingredients
            //     });
            // this.orderup.setTip(this.upperui.tip);	//设置分数
            // ig.game.io.storage.get("stb-tutorial")["game-finish"] ? this.orderup.show(function() {
            //     this.startTutorial(0.5, "game-finish", null)
            // }.bind(this)) : this.orderup.show(null)		//显示窗口
        },
        getPrice: function(c) {
            return ig.game.foods[c].price
        },
        getOrderPrice: function() {
            for (var c = 0, d = 0, e = this.upperui.ingredients.length; d < e; d++) c += this.getPrice(this.upperui.ingredients[d].foodType) * this.upperui.ingredients[d].count;
            return MathUtils.prototype.roundToTwoDecimals(c)
        },
        startTutorial: function(c, d, e) {
            this.tutorialTimer = new ig.Timer;
            this.tutorialTimer.set(c);
            this.tutorialType = d;
            this.tutorialFocus = e
        },
        showTutorial: function() {
            var c = ig.game.io.storage.get("stb-tutorial");
            
            null == this.tutorial && (this.tutorial = ig.game.spawnEntity(EntityTutorialOverlay, 0, 0));
            if (null != this.tutorialFocus) {
                var d = this.tutorialFocus.zIndex;
                this.tutorialFocus.zIndex = 51E3;
                ig.game.sortEntitiesDeferred();
                this.tutorial.setPointer(this.tutorialFocus.pos.x +
                    0.5 * this.tutorialFocus.size.x - 32, this.tutorialFocus.pos.y + this.tutorialFocus.size.y + 10, "pointing", "top")
            }
            switch (this.tutorialType) {
                case "game-controls":
                    this.tutorial.setPointer(this.tutorialFocus.pos.x + 0.5 * this.tutorialFocus.size.x - 32, this.tutorialFocus.pos.y - this.tutorial.pointer.size.y, "pointing", "bottom");
                    var e = [{
                        strings: ig.ua.mobile ? [_STRINGS.Tutorial["tut5a-mob"], _STRINGS.Tutorial["tut5b-mob"], _STRINGS.Tutorial["tut5c-mob"], _STRINGS.Tutorial["tut5d-desk"]] : [_STRINGS.Tutorial["tut5a-desk"], _STRINGS.Tutorial["tut5b-desk"],
                            _STRINGS.Tutorial["tut5c-desk"], _STRINGS.Tutorial["tut5d-desk"]
                        ],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "play";
                            this.spawner.start();
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-controls"] = !1;
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this)
                    }];
                    break;
                case "game-start":
                    e = [{
                        strings: [_STRINGS.Tutorial.tut6a, _STRINGS.Tutorial.tut6b, _STRINGS.Tutorial.tut6c, _STRINGS.Tutorial.tut6d],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "play";
                            this.spawner.unpause();
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-start"] = !1;
                            this.setIn();
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this)
                    }];
                    break;
                case "avoid-bread":
                    e = [{
                        strings: [_STRINGS.Tutorial.tut7a, _STRINGS.Tutorial.tut7b, _STRINGS.Tutorial.tut7c, _STRINGS.Tutorial.tut7d],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "play";
                            this.spawner.unpause();
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-avoid-bread"] = !1;
                            ig.game.io.storage.set("stb-tutorial",c)
                        }.bind(this)
                    }];
                    break;
                case "first-topping-done":
                    e = [{
                        strings: [_STRINGS.Tutorial.tut9a, _STRINGS.Tutorial.tut9b, _STRINGS.Tutorial.tut9c]
                    }, {
                        strings: [_STRINGS.Tutorial.tut10a, _STRINGS.Tutorial.tut10b, _STRINGS.Tutorial.tut10c, _STRINGS.Tutorial.tut10d],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "play";
                            this.spawner.unpause();
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-first-topping-done"] = !1;
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this)
                    }];
                    break;
                case "all-toppings-done":
                    e = [{
                        strings: [_STRINGS.Tutorial.tut11a, _STRINGS.Tutorial.tut11b, _STRINGS.Tutorial.tut11c, _STRINGS.Tutorial.tut11d],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "play";
                            this.spawner.unpause();
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-all-toppings-done"] = !1;
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this)
                    }];
                    break;
                case "game-finish":
                    e = [{
                        strings: [_STRINGS.Tutorial.tut12a, _STRINGS.Tutorial.tut12b, _STRINGS.Tutorial.tut12c,
                            _STRINGS.Tutorial.tut12d
                        ]
                    }, {
                        strings: [_STRINGS.Tutorial.tut13a, _STRINGS.Tutorial.tut13b, _STRINGS.Tutorial.tut13c, _STRINGS.Tutorial.tut13d],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "gamewin";
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-finish"] = !1;
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this)
                    }];
                    break;
                case "game-fail":
                    e = [{
                        strings: [_STRINGS.Tutorial.tut14a, _STRINGS.Tutorial.tut14b, _STRINGS.Tutorial.tut14c, _STRINGS.Tutorial.tut14d]
                    }, {
                        strings: [_STRINGS.Tutorial.tut15a,
                            _STRINGS.Tutorial.tut15b, _STRINGS.Tutorial.tut15c, _STRINGS.Tutorial.tut15d
                        ],
                        willHideAll: !0,
                        onEndCallback: function() {
                            this.state = "gameover";
                            null != this.tutorialFocus && (this.tutorialFocus.zIndex = d, ig.game.sortEntitiesDeferred());
                            c["game-fail"] = !1;
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this)
                    }]
            }
            this.tutorial.initSteps(e)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.background").requires("impact.entity", "plugins.tween").defines(function() {
    EntityBackground = ig.Entity.extend({
		size: {
            x: 540,
            y: 957
        },
        zIndex: 0,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/background.png", 540, 957),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        },
        move: function() {
            3 > this.pos.y && this.tween({
                pos: {
                    y: this.pos.y + 3
                }
            }, 0.25).start()
        }
    })
});
//新加的盖住Neworder的图片
ig.baked = !0;
ig.module("game.entities.game.fcimg").requires("impact.entity", "plugins.tween").defines(function() {
    EntityFcimg = ig.Entity.extend({
		size: {
//          x: 494,
//          y: 732
			x: 507,
            y: 709
        },
        zIndex: 1E4,
//      animSheet: new ig.AnimationSheet("media/graphics/game/game/new_order.png", 494, 732),
		animSheet: new ig.AnimationSheet("media/graphics/game/game/new_order.png", 507, 709),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.background").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuBackground = ig.Entity.extend({
		size: {
            x: 540,
            y: 960
        },
        zIndex: 0,
        animSheet: new ig.AnimationSheet("media/graphics/game/menu/background.png", 540, 960),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
   
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.lowerui").requires("impact.entity").defines(function() {
    EntityLowerui = ig.Entity.extend({
        size: {
            x: 540,
            y: 70
        },
        zIndex: 3E4,
        animSheet: new ig.AnimationSheet("media/graphics/game/game/lowerui.png", 540, 70),
        money: 0,
        username: "",
//      stars: [],
        noStars: [],
        willShowStars: !0,
        starCount: 0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.money = ig.game.io.storage.get("stb-money");
            null == this.money && (this.money = 0);
//          for (c = 0; 3 > c; c++) this.noStars.push(new ig.Image("media/graphics/game/game/star2.png")),
//              this.stars.push(new ig.Image("media/graphics/game/game/star.png"))
        },
        draw: function() {
            this.parent();
//          if (this.willShowStars)
//              for (var c = 0; 3 > c; c++) c > this.starCount - 1 ? this.noStars[c].draw(this.pos.x + 0.8 * this.size.x + (this.stars[c].width + 8) * c, this.pos.y + 0.3 * this.size.y) : this.stars[c].draw(this.pos.x + 0.8 * this.size.x + (this.stars[c].width + 8) * c, this.pos.y + 0.3 * this.size.y);
            ig.system.context.font = "20pt mikadobold";
            ig.system.context.fillStyle = "#0c3770";
//          ig.system.context.textAlign = "center";
//          ig.system.context.fillText("$ " +
//              this.money, this.pos.x + 0.5 * this.size.x, this.pos.y + 0.6 * this.size.y);
//          ig.system.context.textAlign = "left";
//          ig.system.context.fillText(this.username, this.pos.x + 0.05 * this.size.x, this.pos.y + 0.6 * this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.burger").requires("impact.entity", "plugins.tween").defines(function() {
    EntityBurger = ig.Entity.extend({
        size: {
            x: 73,
            y: 94
        },
        zIndex: 3E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/burger.png", 73, 94),
        origX: 0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
            this.origX = this.pos.x;
            this.pos.x = ig.system.width
        },
        resetAnim: function() {
            null != this.currentAnim && this.currentAnim.rewind()
        },
        animateIn: function() {
            this.tween({
                pos: {
                    x: this.origX
                }
            }, 1, {
                easing: ig.Tween.Easing.Back.EaseOut
            }).start()
        },
        animateOut: function() {
            this.tween({
                pos: {
                    x: ig.system.width + 35
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Back.EaseOut
            }).start()
        },
        visible: function(c) {
            this.currentAnim = c ? this.anims.idle.rewind() : null
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.racoon").requires("impact.entity", "plugins.tween", "game.entities.common.burger").defines(function() {
    EntityRacoon = ig.Entity.extend({
        size: {
            x: 212,
            y: 308
        },
        zIndex: 2E5,
        idleSheet: new ig.AnimationSheet("media/graphics/game/common/racoon-idle.png", 212, 305),
        talkSheet: new ig.AnimationSheet("media/graphics/game/common/racoon-talk.png", 212, 305),
        burger: null,
        curState: "",
        origX: 0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.switchState("idle");
            this.origX = this.pos.x;
            this.pos.x = ig.system.width +
                35
        },
        update: function() {
            this.parent();
            "talk" == this.curState && 0 < this.currentAnim.loopCount && this.switchState("idle")
        },
        animateIn: function(c) {
            this.tween({
                pos: {
                    x: this.origX
                }
            }, 1, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: c,
                onStart: function() {
                    ig.soundHandler.sfxPlayer.play("swish")
                }
            }).start()
        },
        animateOut: function(c) {
            this.tween({
                pos: {
                    x: ig.system.width + 35
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: c,
                onStart: function() {
                    ig.soundHandler.sfxPlayer.play("swish")
                }
            }).start()
        },
        switchState: function(c) {
            this.curState =
                c;
            "idle" == c ? (this.animSheet = this.idleSheet, this.addAnim("idle", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), this.size.y = 304, this.pos.y += 4, this.currentAnim = this.anims.idle.rewind()) : "talk" == c && (this.animSheet = this.talkSheet, this.size.y = 308, this.pos.y -= 4, this.addAnim("talk", 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), this.currentAnim = this.anims.talk.rewind())
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game.spawner", "game.entities.game.game-manager", "game.entities.common.background", "game.entities.game.lowerui", "game.entities.game.upperui", "game.entities.game.stack", "game.entities.pointer", "game.entities.common.racoon", "game.entities.common.burger").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityPointer",
            x: 548,
            y: 16
        }, {
            type: "EntityBurger",
            x: 350,
            y: 778
        }, {
            type: "EntityRacoon",
            x: 385,
            y: 700
        }, {
            type: "EntitySpawner",
            x: 548,
            y: 48
        }, {
            type: "EntityBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityLowerui",
            x: 0,
            y: 900
        }, {
            type: "EntityUpperui",
            x: 0,
            y: 0
        }, {
            type: "EntityStack",
            x: 220,
            y: 820
        }, {
            type: "EntityGameManager",
            x: 550,
            y: 80
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.menu.helpbtn").requires("game.entities.buttons.button").defines(function() {	//帮助按钮
    EntityHelpbtn = EntityButton.extend({
        size: {
            x: 83,
            y: 85
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/menu/helpbtn.png", 83, 85),
        zIndex: 750,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("click"))
        },
        clicking: function() {},
        released: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function() {
                    ig.game.director.jumpTo(LevelHtp)
                }
            }).start())
        },
        leave: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound-bgm").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSoundBgm = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/bgmbtn.png", 27, 34),
        zIndex: 750,
        size: {
            x: 27,
            y: 34
        },
        mutetest: !1,
        name: "soundtest",
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("unmute", 1, [0]);
            this.addAnim("mute", 1, [1]);
            ig.global.wm || (ig.soundHandler.checkBGM() ? this.currentAnim = this.anims.mute : (this.currentAnim =
                this.anims.unmute, ig.soundHandler.unmuteBGM(!0)))
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            this.enabled && (ig.soundHandler.checkBGM() ? (ig.soundHandler.unmuteBGM(!0), this.currentAnim = this.anims.unmute, ig.game.io.storage.set("stb-bgm", !0)) : (ig.soundHandler.muteBGM(!0), this.currentAnim = this.anims.mute, ig.game.io.storage.set("stb-bgm", !1)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound-sfx").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSoundSfx = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/sfxbtn.png", 34, 28),
        zIndex: 750,
        size: {
            x: 34,
            y: 28
        },
        mutetest: !1,
        name: "soundtest",
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("unmute", 1, [0]);
            this.addAnim("mute", 1, [1]);
            ig.global.wm || (ig.soundHandler.checkSFX() ? this.currentAnim = this.anims.mute : (this.currentAnim =
                this.anims.unmute, ig.soundHandler.unmuteSFX(!0)))
        },
        draw: function() {
            this.parent()
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            this.enabled && (ig.soundHandler.checkSFX() ? (ig.soundHandler.unmuteSFX(!0), this.currentAnim = this.anims.unmute, ig.game.io.storage.set("stb-sfx", !0)) : (ig.soundHandler.muteSFX(!0), this.currentAnim = this.anims.mute, ig.game.io.storage.set("stb-sfx", !1)))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.playbtn").requires("impact.entity","game.entities.buttons.button").defines(function() {	//游戏开始按钮
    EntityPlaybtn = EntityButton.extend({
        zIndex: 750,       
		size: {
            x: 170,
            y: 170
       }, 
		animSheet: new ig.AnimationSheet("media/graphics/game/menu/playbtn.png", 170, 170),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);		//addAnim在6215行
            this.state = "idle";
            this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 1,{	//控制开始按钮动画
            	easing: ig.Tween.Easing.Sinusoidal.EaseInOut
              	,
                loop: ig.Tween.Loop.Reverse
            }).start()
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && (
            	this.state = "clicked", 	//控制点击开始
            	this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("click"))
        },
        clicking: function() {},
        released: function() {	//控制开始跳转页面
        	var _this = this;
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.8,
                        y: 0.8
                    }
                }
            }, 0.025, {
                onComplete: function() {	//控制开始跳转页面
                    ig.game.director.jumpTo(LevelNeworder);	//跳到neworder的页面
                    //ig.game.director.jumpTo(LevelGame);
                   
                }
            }).start())
        },
        leave: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.8,
                        y: 0.8
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.shopbtn").requires("game.entities.buttons.button").defines(function() {	//购物车按钮
    EntityShopbtn = EntityButton.extend({
        zIndex: 750,
        size: {
            x: 83,
            y: 85
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/menu/shopbtn.png", 83, 85),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("click"))
        },
        clicking: function() {},
        released: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function() {
                    ig.game.director.jumpTo(LevelShop)
                }
            }).start())
        },
        leave: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("plugins.screen-fader").requires("impact.timer", "impact.animation").defines(function() {
    ig.ScreenFader = ig.Class.extend({
        defaultOptions: {
            color: {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            },
            fade: "in",
            speed: 1,
            screenWidth: 0,
            screenHeight: 0,
            waitUntilLoaded: !0,
            visible: !0
        },
        init: function(c) {
            this._setOptions(c);
            this._alpha = (c = "out" != this.options.fade) ? 0 : 1;
            this._alphaChange = c ? 1 : -1;
            if (this.options.tileImagePath) {
                if (isNaN(this.options.tileWidth)) throw Error("ScreenFader option for tileWidth is invalid");
                if (isNaN(this.options.tileHeight)) throw Error("ScreenFader option for tileHeight is invalid");
                this._sheet = new ig.AnimationSheet(this.options.tileImagePath, this.options.tileWidth, this.options.tileHeight);
                this._anim = new ig.Animation(this._sheet, 1, [0]);
                this._anim.alpha = this._alpha
            }
            isNaN(this.options.delayBefore) || (c = 0 >= this.options.delayBefore ? 0 : this.options.delayBefore, 0 < c && (this.timerDelayBefore = new ig.Timer(c)))
        },
        draw: function() {
            this.timerDelayAfter && 0 < this.timerDelayAfter.delta() && (delete this.timerDelayAfter, this._callUserCallback());
            if (this.timerDelayBefore) {
                if (0 > this.timerDelayBefore.delta()) return;
                delete this.timerDelayBefore
            }
            this.options.visible && (!this.isFinished && (!this._sheet || this._sheet.image.loaded || !this.options.waitUntilLoaded) && this._fadeAlphaValue(), 0 >= this._alpha || (this._anim ? this.drawImageTiledOnScreen() : this.drawColorOnScreen()))
        },
        drawImageTiledOnScreen: function() {
            for (var c = 0, d = 0, e = this.options.screenWidth, f = this.options.screenHeight, l = this.options.tileWidth, m = this.options.tileHeight; d < f;) {
                for (c = 0; c < e;) this._anim.draw(c, d), c += l;
                d += m
            }
        },
        drawColorOnScreen: function() {
            ig.system.clear(this.getColorCssValue())
        },
        getColorCssValue: function(c) {
            c = c || this.options.color;
            var d = ("undefined" != typeof c.a ? c.a : 1) * this._alpha;
            0 > d ? d = 0 : 1 < d && (d = 1);
            return "rgba(" + c.r + "," + c.g + "," + c.b + "," + d + ")"
        },
        finish: function() {
            if (!this.isFinished && (this._alpha = 0 < this._alphaChange ? 1 : 0, this._anim && (this._anim.alpha = this._alpha), this.isFinished = !0, "function" == typeof this.options.callback)) {
                var c = isNaN(this.options.delayAfter) ? 0 : this.options.delayAfter;
                0 < c ? this.timerDelayAfter = new ig.Timer(c) : this._callUserCallback()
            }
        },
        _callUserCallback: function() {
            this.options.callback.call(this.options.context ||
                (ig.ScreenFader.globalGameIsContext ? ig.game : this))
        },
        _fadeAlphaValue: function() {
            this._alpha += this._alphaChange * this.options.speed * ig.system.tick * ig.ScreenFader.globalSpeedFactor;
            (0 < this._alphaChange && 1 <= this._alpha || 0 > this._alphaChange && 0 >= this._alpha) && this.finish();
            this._anim && (this._anim.alpha = this._alpha)
        },
        _setOptions: function(c) {
            this.options = ig.copy(this.defaultOptions);
            if (isNaN(this.options.screenWidth) || 0 >= this.options.screenWidth) this.options.screenWidth = ig.system.width;
            if (isNaN(this.options.screenHeight) ||
                0 >= this.options.screenHeight) this.options.screenHeight = ig.system.height;
            c && ig.merge(this.options, c)
        }
    });
    ig.ScreenFader.globalSpeedFactor = 2 / 3;
    ig.ScreenFader.globalGameIsContext = !0
});
ig.baked = !0;
ig.module("game.entities.common.screen-fader").requires("impact.entity", "plugins.screen-fader").defines(function() {
    EntityScreenFader = ig.Entity.extend({
        zIndex: 1E5,
        init: function(c, d, e) {
            this.parent(c, d, e);
            EntityScreenFader.prototype.isActive = !0;
            this.screenFader = new ig.ScreenFader({
                fade: "out",
                speed: 2,
                color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                },
                callback: function() {
                    EntityScreenFader.prototype.isActive = !1
                }
            })
        },
        draw: function() {
            this.parent();
            this.screenFader.draw()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.title").requires("impact.entity", "plugins.tween").defines(function() {
    EntityTitle = ig.Entity.extend({
        size: {
            x: 306,
            y: 193
        },
        zIndex: 500,
        animSheet: new ig.AnimationSheet("media/graphics/game/common/title.png", 306, 193),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.currentAnim.angle = -0.12;
            this.tween({
                currentAnim: {
                    angle: 0.12
                }
            }, 1, {
                easing: ig.Tween.Easing.Sinusoidal.EaseInOut,
                loop: ig.Tween.Loop.Reverse
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.okbtn").requires("game.entities.buttons.button").defines(function() {
    EntityOkbtn = EntityButton.extend({
        size: {
            x: 93,
            y: 44
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/common/okbtn.png", 93, 44),
        zIndex: 65E3,
        callback: null,
        basePos: {
            x: 0,
            y: 0
        },
        isActive: !1,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle";
            this.basePos.x = this.pos.x;
            this.basePos.y = this.pos.y
        },
        animateIn: function(c) {
            this.show(!0);
            this.currentAnim.scale.x = this.currentAnim.scale.y =
                0.01;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.75, {
                easing: ig.Tween.Easing.Elastic.EaseOut,
                onStart: function() {
                    ig.soundHandler.sfxPlayer.play("pop3")
                },
                onComplete: function() {
                    null != c && c()
                }.bind(this)
            }).start()
        },
        animateOut: function(c) {
            this.tween({
                currentAnim: {
                    scale: {
                        x: 0,
                        y: 0
                    }
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Back.EaseIn,
                onComplete: function() {
                    this.show(!1);
                    null != c && c()
                }.bind(this)
            }).start()
        },
        show: function(c) {
            (this.isActive = c) ? (this.pos.x = this.basePos.x, this.pos.y = this.basePos.y) : (this.pos.x = -1E3, this.pos.y = -1E3)
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("click"))
        },
        clicking: function() {},
        released: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function() {
                    null != this.callback && (this.enabled = !1, this.callback())
                }.bind(this)
            }).start())
        },
        leave: function() {
            "clicked" ==
            this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.tutorial-dialogue").requires("impact.entity", "game.entities.common.okbtn").defines(function() {
    EntityTutorialDialogue = ig.Entity.extend({
        size: {
            x: 217,
            y: 289
        },
        basePos: {
            x: 0,
            y: 0
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/common/dialoguebox.png", 217, 289),
        zIndex: 48E3,
        texts: null,
        willShowText: !1,
        okBtn: null,
        isActive: !1,
        textBaseY: 0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.pos.x = -1E3;
            this.pos.y = -1E3;
            this.basePos.x = 0.55 * ig.system.width;
            this.basePos.y =
                0.85 * ig.system.width;
            this.okBtn = ig.game.spawnEntity(EntityOkbtn, this.pos.x, this.pos.y);
            this.okBtn.basePos.x = this.basePos.x + 0.5 * (this.size.x - this.okBtn.size.x);
            this.okBtn.basePos.y = this.basePos.y + 0.55 * this.size.y
        },
        reinit: function(c, d) {
            this.texts = c;
            this.textBaseY = 0.15 * this.size.y + 15 * (4 - this.texts.length);
            this.isActive || this.animateIn(d)
        },
        animateIn: function(c) {
            this.show(!0);
            this.currentAnim.scale.align.y = "bottom";
            this.currentAnim.scale.x = this.currentAnim.scale.y = 0.1;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onStart: function() {
                    ig.soundHandler.sfxPlayer.play("pop2")
                },
                onComplete: function() {
                    this.willShowText = !0;
                    this.okBtn.animateIn(c)
                }.bind(this)
            }).start()
        },
        animateOut: function(c) {
            this.willShowText = !1;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 0,
                        y: 0
                    }
                }
            }, 0.25, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.show(!1);
                    c()
                }.bind(this)
            }).start();
            ig.soundHandler.sfxPlayer.play("pop4")
        },
        show: function(c) {
            (this.isActive = c) ? (this.pos.x = this.basePos.x, this.pos.y =
                this.basePos.y) : (this.pos.x = -1E3, this.pos.y = -1E3)
        },
        draw: function() {
            this.parent();
            if (this.willShowText) {
                ig.system.context.fillStyle = "#0c3770";
                ig.system.context.textAlign = "center";
                ig.system.context.font = "18pt mikadobold";
                for (var c = 0, d = this.texts.length; c < d; c++) ig.system.context.fillText(this.texts[c], this.pos.x + 0.5 * this.size.x, this.pos.y + this.textBaseY + 30 * c)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.tutorial-pointer").requires("impact.entity").defines(function() {
    EntityTutorialPointer = ig.Entity.extend({
        size: {
            x: 64,
            y: 98
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/common/tutorial-pointer.png", 64, 98),
        zIndex: 52E3,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.addAnim("clicking", 0.05, [0, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (ig.game.sortEntitiesDeferred(), this.basePosY = this.pos.y)
        },
        switchRotation: function(c) {
            this.rotation =
                c;
            switch (c) {
                case "right":
                    this.currentAnim.angle = Math.PI / 2;
                    break;
                case "bottom":
                    this.currentAnim.angle = Math.PI;
                    break;
                case "top":
                    this.currentAnim.angle = 0
            }
        },
        switchState: function(c) {
            this.type = c;
            switch (c) {
                case "pointing":
                    this.currentAnim = this.anims.idle;
                    this.addTweening();
                    break;
                case "idle":
                    this.currentAnim = this.anims.idle;
                    break;
                case "clicking":
                    this.currentAnim = this.anims.clicking
            }
        },
        addTweening: function() {
            var c = null;
            switch (this.rotation) {
                case "right":
                    c = {
                        pos: {
                            x: this.pos.x - 20
                        }
                    };
                    break;
                case "bottom":
                    c = {
                        pos: {
                            y: this.pos.y -
                                20
                        }
                    };
                    break;
                case "top":
                    c = {
                        pos: {
                            y: this.pos.y + 20
                        }
                    }
            }
            this.tween(c, 0.5, {
                easing: ig.Tween.Easing.Sinusoidal.EaseInOut,
                loop: ig.Tween.Loop.Reverse
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.common.tutorial-overlay").requires("impact.entity", "game.entities.common.tutorial-dialogue", "game.entities.common.tutorial-pointer").defines(function() {
    EntityTutorialOverlay = ig.Entity.extend({
        zIndex: 45E3,
        overlayAlpha: 0,
        steps: null,
        curStep: null,
        willShowRect: !0,
        willShowBurger: !1,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.racoon = ig.game.getEntitiesByType(EntityRacoon)[0];
            this.racoon.zIndex = 46E3;
            this.racoon.switchState("idle");
            this.burger = ig.game.getEntitiesByType(EntityBurger)[0];
            this.burger.zIndex = 47E3;
            this.dialogue = ig.game.spawnEntity(EntityTutorialDialogue, -500, -500);
            this.dialogueOkbtn = ig.game.getEntitiesByType(EntityOkbtn)[0];
            this.dialogueOkbtn.callback = this.nextStep.bind(this);
            this.pointer = ig.game.spawnEntity(EntityTutorialPointer, -500, -500)
        },
        update: function() {
            this.parent();
            0.75 > this.overlayAlpha ? this.overlayAlpha += 2 * ig.system.tick : 0.75 < this.overlayAlpha && (this.overlayAlpha = 0.75, this.racoon.animateIn(this.showDialogue.bind(this)), this.willShowBurger && this.burger.animateIn())
        },
        draw: function() {
            this.parent();
            this.willShowRect && (ig.system.context.save(), ig.system.context.fillStyle = "rgba(25,60,110," + this.overlayAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.restore())
        },
        initSteps: function(c) {
            this.steps = c;
            this.overlayAlpha = 0;
            this.willShowRect = !0
        },
        showDialogue: function() {
            this.curStep = this.steps.shift();
            "undefined" !== typeof this.curStep.showBtn && this.dialogueOkbtn.show(this.curStep.showBtn);
            this.dialogue.reinit(this.curStep.strings,
                "undefined" !== typeof this.curStep.onStartCallback ? this.curStep.onStartCallback : null);
            this.racoon.switchState("talk");
            this.burger.resetAnim();
            this.dialogueOkbtn.enabled = !0
        },
        nextStep: function() {
            if ("undefined" !== typeof this.curStep.onOkCallback) this.curStep.onOkCallback();
            0 < this.steps.length ? this.showDialogue() : "undefined" !== typeof this.curStep.willHideAll && this.curStep.willHideAll && this.hideAll();
            this.pointer.pos.x = -500;
            this.pointer.pos.y = -500;
            this.pointer.stopTweens(!0)
        },
        hideDialogueBox: function(c) {
            this.dialogueOkbtn.isActive ?
                this.dialogueOkbtn.animateOut(function() {
                    this.dialogue.animateOut(function() {
                        c()
                    }.bind(this))
                }.bind(this)) : this.dialogue.animateOut(function() {
                    c()
                }.bind(this))
        },
        hideCharacter: function(c) {
            this.burger.animateOut();
            this.racoon.animateOut(function() {
                c()
            }.bind(this))
        },
        hideAll: function() {
            this.hideDialogueBox(function() {
                this.hideCharacter(function() {
                    this.willShowRect = !1;
                    if ("undefined" !== typeof this.curStep.onEndCallback) this.curStep.onEndCallback()
                }.bind(this))
            }.bind(this))
        },
        setPointer: function(c, d, e, f) {
            this.pointer.pos.x =
                c;
            this.pointer.pos.y = d;
            this.pointer.switchRotation(f);
            this.pointer.switchState(e)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.menu-manager").requires("impact.entity", "game.entities.common.tutorial-overlay").defines(function() {
    EntityMenuManager = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        ftp: !1,
        tutorial: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            ig.global.wm || (ig.game.io.storage.get("stb-tutorial").intro ? (this.tutorial = ig.game.spawnEntity(EntityTutorialOverlay, 0, 0, {
                    willShowBurger: !0
                }), this.playbtn = ig.game.getEntitiesByType(EntityPlaybtn)[0], this.shopbtn = ig.game.getEntitiesByType(EntityShopbtn)[0], this.helpbtn =
                ig.game.getEntitiesByType(EntityHelpbtn)[0], this.playbtn.enabled = !1, this.shopbtn.enabled = !1, this.helpbtn.enabled = !1, c = [{
                    strings: [_STRINGS.Tutorial.tut1a, _STRINGS.Tutorial.tut1b, _STRINGS.Tutorial.tut1c]
                }, {
                    strings: [_STRINGS.Tutorial.tut2a, _STRINGS.Tutorial.tut2b, _STRINGS.Tutorial.tut2c]
                }, {
                    strings: [_STRINGS.Tutorial.tut3a, _STRINGS.Tutorial.tut3b],
                    willHideAll: !1,
                    onOkCallback: function() {
                        this.tutorial.hideDialogueBox(function() {
                            this.playbtn.zIndex = 51E3;
                            this.playbtn.enabled = !0;
                            ig.game.sortEntitiesDeferred();
                            this.tutorial.setPointer(this.playbtn.pos.x + 0.3 * this.playbtn.size.x, this.playbtn.pos.y + 0.6 * this.playbtn.size.y, "clicking", "top");
                            var c = ig.game.io.storage.get("stb-tutorial");
                            c.intro = !1;
                            ig.game.io.storage.set("stb-tutorial", c)
                        }.bind(this))
                    }.bind(this)
                }], this.tutorial.initSteps(c)) : (this.racoon = ig.game.getEntitiesByType(EntityRacoon)[0], this.racoon.switchState("idle"), this.racoon.animateIn(null), this.burger = ig.game.getEntitiesByType(EntityBurger)[0], this.burger.animateIn()))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.menu.helpbtn", "game.entities.buttons.button-sound-bgm", "game.entities.buttons.button-sound-sfx", "game.entities.menu.playbtn", "game.entities.menu.shopbtn", "game.entities.common.screen-fader", "game.entities.common.title", "game.entities.common.racoon", "game.entities.common.burger","game.entities.menu.background", "game.entities.game.menu-manager").defines(function() {
    LevelMenu = {	//菜单的绝对位置
        entities: [
//      {
//          type: "EntityTitle",
//          x: 117,
//          y: 220
//      },
         {
            type: "EntityBurger",
            x: 350,
            y: 790
        }, {
            type: "EntityRacoon",
            x: 385,
            y: 700
        }, {
            type: "EntityButtonMoreGames",
            x: 24,
            y: 840
        }, {
            type: "EntityPointer",
            x: 540,
            y: 0
        }
//      , {
//          type: "EntityHelpbtn",
//          x: 128,
//          y: 840
//      }
//      , {
//          type: "EntityButtonSoundBgm",
//          x: 436,
//          y: 22
//      }
//      , {
//          type: "EntityButtonSoundSfx",
//          x: 490,
//          y: 25
//      }
        , 
        {
            type: "EntityPlaybtn",
            x: 198,
            y: 648
        }
         , 
        {
            type: "EntityMenuBackground",
            x: 0,
            y: 0
        }
//      ,
//      {
//          type: "EntityShopbtn",
//          x: 232,
//          y: 840
//      }
//      , {
//          type: "EntityScreenFader",
//          x: 540,
//          y: 4
//      }
//      , {
//          type: "EntityMenuManager",
//          x: -10,
//          y: -10
//      }
        ]
        ,
        layer: [{
            name: "background",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/game/menu/background.png",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, 32, 33, 34, 35, 36],
                [37, 38, 39, 40, 41, 42, 43, 44, 45],
                [46, 47, 48, 49, 50, 51, 52, 53, 54],
                [55, 56, 57, 58, 59, 60, 61, 62, 63],
                [64, 65, 66, 67, 68, 69, 70, 71, 72],
                [73, 74, 75, 76, 77, 78, 79, 80, 81],
                [82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99],
                [100, 101, 102, 103, 104, 105, 106, 107, 108],
                [109, 110, 111, 112, 113, 114, 115, 116, 117],
                [118, 119, 120, 121, 122, 123, 124, 125, 126],
                [127, 128,129, 130, 131, 132, 133, 134, 135],
                [136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    //LevelMenuResources = [new ig.Image("media/graphics/game/menu/background.png")]
});
ig.baked = !0;
ig.module("game.entities.game.ingredient").requires("impact.entity", "game.entities.game.tick").defines(function() {
    EntityIngredient = ig.Entity.extend({
        size: {
            x: 120,
            y: 70
        },
        count: 0,
        food: null,
        foodType: "",
        zIndex: 2E3,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.animSheet = ig.game.foods[this.foodType].sheet;
            this.addAnim("idle", 1, [0])
        },
        draw: function() {
            this.parent();
            0 < this.count && (ig.system.context.font = "20pt mikadobold", ig.system.context.fillStyle = "#0c3770", ig.system.context.textAlign = "center", ig.system.context.fillText("x" +
                this.count, this.pos.x + this.size.x + 25, this.pos.y + 0.5 * this.size.y + 5))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.neworder").requires("impact.entity", "game.entities.game.ingredient", "plugins.tween", "plugins.math.utils").defines(function() {
    EntityNeworder = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: {
            x: 494,
            y: 732
        },
        zIndex: 1E3,
        orderNo: 0,
        orderName: "",
        animSheet: new ig.AnimationSheet("media/graphics/game/game/jiyi.png", 494, 732),
//      tapCont: new ig.Image("media/graphics/game/game/tapcont.png"),
        enabled: !0,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle",
                1, [0]);
            this.clicked();
            this.size.x = ig.system.width;
            this.size.y = ig.system.height;
            this.offset.x = 0.5 * (494 - this.size.x);
            this.offset.y = 0.5 * (732 - this.size.y);
            if (!ig.global.wm) {
                c = ig.game.io.storage.get("stb-level");
                //console.log(c);	//1
                ig.game.isEndless = 0 == c % 5 ? !0 : !1;
                //console.log(ig.game.isEndless);	//false
                if (ig.game.isEndless) c = this.generateEndlessOrder();
                else {
                    c = this.generateOrder(c);
                    this.orderNo = c.number;
                    this.orderName = c.name;
                    d = [];
                    for (e = 0; e < c.foods.length; e++) d.push(ig.game.spawnEntity(EntityIngredient, -500, -500, {
                        count: c.foods[e].count,
                        foodType: c.foods[e].foodType
                    }));
                    MathUtils.prototype.table(d,
                        2, -this.offset.x + 494 * 0.14, -this.offset.y + 732 * 0.34, 80, 15);
                    d = ig.game.io.storage.get("stb-played-orders"); - 1 == d.indexOf(this.orderNo) && (this.newNotif = {
                        cont: new ig.Image("media/graphics/game/shop/ribbon.png"),
                        pos: {
                            x: 0.76 * this.size.x,
                            y: 0.28 * this.size.y
                        }
                    }, d.push(this.orderNo), ig.game.io.storage.set("stb-played-orders", d))
                }
                ig.game.order = c;
                ig.game.io.storage.get("stb-tutorial")["first-order"] ? (this.tutorial = ig.game.spawnEntity(EntityTutorialOverlay, 0, 0), this.enabled = !1, c = [{
                    strings: [_STRINGS.Tutorial.tut4a,
                        _STRINGS.Tutorial.tut4b, _STRINGS.Tutorial.tut4c
                    ],
                    willHideAll: !0,
                    onOkCallback: function() {
                        this.enabled = !0;
                        var c = ig.game.io.storage.get("stb-tutorial");
                        c["first-order"] = !1;
                        ig.game.io.storage.set("stb-tutorial", c)
                    }.bind(this)
                }], this.tutorial.initSteps(c)) : ig.game.isEndless && ig.game.io.storage.get("stb-tutorial")["first-endless"] ? (this.tutorial = ig.game.spawnEntity(EntityTutorialOverlay, 0, 0), this.enabled = !1, c = [{
                    strings: [_STRINGS.Tutorial.tut18a, _STRINGS.Tutorial.tut18b, _STRINGS.Tutorial.tut18c]
                }, {
                    strings: [_STRINGS.Tutorial.tut19a,
                        _STRINGS.Tutorial.tut19b, _STRINGS.Tutorial.tut19c
                    ]
                }, {
                    strings: [_STRINGS.Tutorial.tut20a, _STRINGS.Tutorial.tut20b, _STRINGS.Tutorial.tut20c, _STRINGS.Tutorial.tut20d],
                    willHideAll: !0,
                    onOkCallback: function() {
                        this.enabled = !0;
                        var c = ig.game.io.storage.get("stb-tutorial");
                        c["first-endless"] = !1;
                        ig.game.io.storage.set("stb-tutorial", c)
                    }.bind(this)
                }], this.tutorial.initSteps(c)) : (this.burger = ig.game.getEntitiesByType(EntityBurger)[0], this.burger.visible(!1), this.racoon = ig.game.getEntitiesByType(EntityRacoon)[0],
                    this.racoon.switchState("idle"), this.racoon.animateIn(null));
                this.screenFader = ig.game.getEntitiesByType(EntityScreenFader)[0];
                //ig.soundHandler.sfxPlayer.play("bell")
            }
        },
        draw: function() {
            this.parent();
//          ig.game.isEndless ? (ig.system.context.font = "30pt mikadobold", ig.system.context.fillStyle = "#0c3770", ig.system.context.textAlign = "center", ig.system.context.fillText(_STRINGS.Game["stack-all-you-want"], 0.5 * this.size.x, 0.5 * this.size.y)) : (ig.system.context.font = "20pt mikadobold", ig.system.context.fillStyle = "#df3c44",
//              ig.system.context.textAlign = "center", ig.system.context.fillText(_STRINGS.Game["order#"] + this.orderNo, 0.5 * this.size.x, 0.27 * this.size.y), ig.system.context.font = "30pt mikadobold", ig.system.context.fillStyle = "#0c3770", ig.system.context.textAlign = "center", ig.system.context.fillText('"' + this.orderName + '"', 0.5 * this.size.x, 0.325 * this.size.y), this.newNotif && (this.newNotif.cont.draw(this.newNotif.pos.x, this.newNotif.pos.y), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "center", ig.system.context.font =
//                  "15pt mikadobold", ig.system.context.fillText(_STRINGS.Game.hot, this.newNotif.pos.x + 0.5 * this.newNotif.cont.width, this.newNotif.pos.y + 0.5 * this.newNotif.cont.width + 7)));
//          this.tapCont.draw(-this.offset.x + 0.5 * (494 - this.tapCont.width), 0.9 * this.size.y);
//          ig.system.context.font = "25pt mikadobold";
//          ig.system.context.fillStyle = "#0c3770";
//          ig.system.context.fillText(_STRINGS.Game.tap, 0.5 * this.size.x, 0.93 * this.size.y)
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && 
            ig.game.director.jumpTo(LevelGame)
        },
        generateOrder: function(c) {
        	//console.log(ig.game.io.storage.get("stb-tutorial")["game-finish"]);	//true
            c = ig.game.io.storage.get("stb-tutorial")["game-finish"] ? ig.game.tutorialOrder : this.getOrderLists(c);
            c.foods.unshift({
                foodType: "topbuns",
                count: 0
            });
            c.foods.push({
                foodType: "lowerbuns",
                count: 0
            });
            c.name = _STRINGS.ORDER["burger_" + c.number];
            return c
        },
        generateEndlessOrder: function() {
            for (var c = {
                number: 0,
                name: _STRINGS.Game["stack-all-you-want"],
                foods: []
            }, d = this.getUnlockedIngredients(), e = 0, f = 6 > d.length ? d.length : 6; e < f; e++) c.foods.push({
                foodType: d.splice(Math.floor(Math.random() * d.length),
                    1)[0],
                count: 0
            });
            
            c.foods.unshift({
                foodType: "topbuns",
                count: 0
            });
            c.foods.push({
                foodType: "lowerbuns",
                count: 0
            });
            return c
        },
        getOrderLists: function(c) {
            var d = null,
                e = null,
                f = 0,
                l = ig.game.io.storage.get("stb-order-history"),
                m = 0,
                f = 5 > c ? 0 : 10 > c ? 1 : 2;
                
            do d = this.getPlayableOrders(f), 0 == d.length && --f; while (0 == d.length);
            do e = d[Math.floor(Math.random() * d.length)], m >= d.length && l[f].splice(0, l[f].length - 1), m++; while (-1 < l[f].indexOf(e.number));
            l[f].push(e.number);
            ig.game.io.storage.set("stb-order-history", l);
            return e
        },
        getPlayableOrders: function(c) {
            var d = [],
                e = this.getUnlockedIngredients();
            c = ig.game.orders[c];
            for (var f = !0, l = 0; l < c.length; l++) {
                for (var f = !0, m = 0; m < c[l].foods.length; m++)
                    if (-1 == e.indexOf(c[l].foods[m].foodType)) {
                        f = !1;
                        break
                    }
                f && d.push(c[l])
            }
            return d
        },
        getUnlockedIngredients: function() {
            var c = ig.game.io.storage.get("stb-ingredients"),
                d = [],           
                e;                               
            for (e in c) c[e] && "bundle" != e && d.push(e);            
            return d;
        }
    })
});
ig.baked = !0;
ig.module("game.levels.neworder").requires("impact.image", "game.entities.common.background", "game.entities.game.neworder", "game.entities.pointer", "game.entities.common.screen-fader", "game.entities.common.racoon", "game.entities.common.burger","game.entities.game.fcimg").defines(function() {
    LevelNeworder = {
        entities: [
        {
            type: "EntityBackground",
			x: 0,
            y: 0
        },
        {
            type: "EntityScreenFader",
            x: 568,
            y: 168
        }, 
        {
            type: "EntityBurger",
            x: 350,
            y: 778
        }, 
        {
            type: "EntityRacoon",
            x: 385,
            y: 700
        },
        {
            type: "EntityFcimg",
			x: 25,
            y: 80
        },
        {
            type: "EntityNeworder",
            x: 0,
            y: 0
        }
        ,
        {
            type: "EntityPointer",
            x: 560,
            y: 132
        }
        ],
        layer: [{
            name: "background",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }]
    }
});
ig.baked = !0;
ig.module("game.entities.shop.backbtn").requires("game.entities.buttons.button").defines(function() {
    EntityBackbtn = EntityButton.extend({
        size: {
            x: 85,
            y: 85
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/shop/backbtn.png", 85, 85),
        zIndex: 1E4,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start(), ig.soundHandler.sfxPlayer.play("click"))
        },
        clicking: function() {},
        released: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function() {
                    ig.game.director.jumpTo(LevelMenu)
                }
            }).start())
        },
        leave: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.smallcont").requires("game.entities.buttons.button").defines(function() {
    EntitySmallcont = EntityButton.extend({
        size: {
            x: 129,
            y: 84
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/shop/smallCont.png", 129, 84),
        zIndex: 2E3,
        food: null,
        foodSheet: null,
        foodPos: {
            x: 0,
            y: 0
        },
        foodType: "",
        price: 0,
        callback: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.foodSheet = ig.game.foods[this.foodType].sheet;
            this.food = new ig.Animation(this.foodSheet, 1, [0]);
            this.food.currentFrame =
                0;
            this.price = ig.game.foods[this.foodType].shopPrice
        },
        draw: function() {
            this.parent();
            this.food.draw(this.foodPos.x, this.foodPos.y)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            this.callback(this, this.price)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.bigcont").requires("game.entities.buttons.button").defines(function() {
    EntityBigcont = EntityButton.extend({
        size: {
            x: 265,
            y: 115
        },
        zIndex: 2E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/shop/bigCont.png", 265, 115),
        foodSheet: new ig.AnimationSheet("media/graphics/game/shop/bundle.png", 195, 81),
        saleCont: new ig.Image("media/graphics/game/shop/ribbon.png"),
        salePos: {
            x: 0,
            y: 0
        },
        foodPos: {
            x: 0,
            y: 0
        },
        foodType: "",
        callback: null,
        food: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle",
                1, [0]);
            this.food = new ig.Animation(this.foodSheet, 1, [0]);
            this.food.currentFrame = 0;
            this.salePos.x = this.pos.x + this.size.x - 0.5 * this.saleCont.width;
            this.salePos.y = this.pos.y - 0.1 * this.saleCont.height;
            this.foodPos.x = this.pos.x + 0.5 * (this.size.x - this.foodSheet.image.width);
            this.foodPos.y = this.pos.y + 0.5 * (this.size.y - this.foodSheet.image.height);
            this.foodType = "bundle"
        },
        draw: function() {
            this.parent();
            this.saleCont.draw(this.salePos.x, this.salePos.y);
            this.food.draw(this.foodPos.x, this.foodPos.y);
            ig.system.context.fillStyle =
                "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.font = "15pt mikadobold";
            ig.system.context.fillText(_STRINGS.Shop.sale, this.salePos.x + 0.5 * this.saleCont.width, this.salePos.y + 0.5 * this.saleCont.height + 7)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {
            this.callback(this, ig.game.bundlePrice)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.foodshop").requires("impact.entity").defines(function() {
    EntityFoodshop = ig.Entity.extend({
        zIndex: 3E3,
        sold: !1,
        init: function(c, d, e) {
            this.parent(c, d, e)
        },
        updateDisplay: function(c, d) {
            this.animSheet = d;
            this.size.x = d.width;
            this.size.y = d.height;
            this.addAnim("idle", 1, [0]);
            this.currentAnim = this.anims.idle.rewind();
            this.currentAnim.scale.x = this.currentAnim.scale.y = 0.01;
            this.tween({
                currentAnim: {
                    scale: {
                        x: 0.9,
                        y: 0.9
                    }
                }
            }, 0.75, {
                easing: ig.Tween.Easing.Elastic.EaseOut
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.shopcont").requires("game.entities.buttons.button", "game.entities.shop.smallcont", "game.entities.shop.bigcont", "plugins.math.utils", "game.entities.shop.foodshop").defines(function() {
    EntityShopcont = ig.Entity.extend({
        size: {
            x: 494,
            y: 740
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/shop/shopCont.png", 493, 740),
        zIndex: 1E3,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.buybtn").requires("game.entities.buttons.button").defines(function() {
    EntityBuybtn = EntityButton.extend({
        size: {
            x: 119,
            y: 55
        },
        animSheet: new ig.AnimationSheet("media/graphics/game/shop/buybtn.png", 119, 55),
        zIndex: 1E4,
        callback: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.addAnim("disabled", 1, [1]);
            this.state = "idle"
        },
        clicked: function() {
            !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start())
        },
        clicking: function() {},
        released: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function() {
                    this.callback()
                }.bind(this)
            }).start())
        },
        leave: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && this.enabled && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        },
        enable: function(c) {
            (this.enabled = c) ? (this.state = "idle",
                this.currentAnim = this.anims.idle) : (this.state = "disabled", this.currentAnim = this.anims.disabled)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.htp.navicon").requires("impact.entity").defines(function() {
    EntityNavicon = ig.Entity.extend({
        size: {
            x: 11,
            y: 11
        },
        zIndex: 4E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/htp/navicon.png", 11, 11),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("off", 1, [0]);
            this.addAnim("on", 1, [1]);
            this.currentAnim = this.anims.off
        },
        toggle: function() {
            this.currentAnim = this.currentAnim == this.anims.off ? this.anims.on : this.anims.off
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop.shop-manager").requires("game.entities.buttons.button", "game.entities.shop.smallcont", "game.entities.shop.bigcont", "game.entities.shop.shopcont", "game.entities.shop.foodshop", "game.entities.htp.navicon", "game.entities.game.tick", "plugins.math.utils").defines(function() {
    EntityShopManager = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        bigCont: null,
        zIndex: 9E3,
        title: "",
        desc: "",
        price: "",
        foodType: "",
        featuredFood: null,
        foodCont: null,
        foodPos: {
            x: 0,
            y: 0
        },
        currentMoney: 0,
        maxPages: 2,
        curIdx: 0,
        prevIdx: 0,
        maxIdx: 1,
        navicons: [],
        pages: [],
        activeTicks: [],
        reservedTicks: [],
        foodTypes: [
//          ["chuancheng", "huibao", "jiyi", "nuli", "tongxin"],
//          ["xiwang", "zhenxi", "zhihui", "zhizhuo", "tomato"]
        ],
        init: function(c, d, e) {
            this.parent(c, d, e);
            if (!ig.global.wm) {
                this.shopCont = ig.game.getEntitiesByType(EntityShopcont)[0];
                for (c = 0; 6 > c; c++) this.reservedTicks.push(ig.game.spawnEntity(EntityTick, -500, -500));
                for (c = 0; c < this.maxPages; c++) {
                    this.pages[c] = [];
                    for (d = 0; 5 > d; d++) this.pages[c].push(ig.game.spawnEntity(EntitySmallcont, 0, 0, {
                            foodType: this.foodTypes[c][d]
                        })),
                        this.pages[c][d].callback = this.updateDisplay.bind(this), 0 < c && (this.pages[c][d].pos.x = this.pages[c][d].pos.y = -500, this.pages[c][d].foodPos.x = this.pages[c][d].foodPos.y = -500)
                }
                MathUtils.prototype.table([this.pages[0][0], this.pages[0][1], this.pages[0][2]], 3, this.shopCont.pos.x + 0.1 * this.shopCont.size.x, this.shopCont.pos.y + 0.5 * this.shopCont.size.y, 5, 5);
                MathUtils.prototype.table([this.pages[0][3], this.pages[0][4]], 2, this.pages[0][0].pos.x + 64.5, this.pages[0][0].pos.y + 84 + 5, 5, 5);
                c = 0;
                for (d = this.pages[0].length; c <
                    d; c++) this.pages[0][c].foodPos.x = this.pages[0][c].pos.x + 0.5 * (this.pages[0][c].size.x - this.pages[0][c].food.sheet.width), this.pages[0][c].foodPos.y = this.pages[0][c].pos.y + 0.5 * (this.pages[0][c].size.y - this.pages[0][c].food.sheet.height), ig.game.io.storage.get("stb-ingredients")[this.pages[0][c].foodType] && this.addTick(this.pages[0][c]);
                this.bigCont = ig.game.spawnEntity(EntityBigcont, this.shopCont.pos.x + 0.5 * (this.shopCont.size.x - 265), this.pages[0][this.pages[0].length - 1].pos.y + 84 + 5);
                this.bigCont.callback =
                    this.updateDisplay.bind(this);
                ig.game.io.storage.get("stb-ingredients")[this.bigCont.foodType] && this.addTick(this.bigCont);
                this.featuredFood = ig.game.spawnEntity(EntityFoodshop, 0, 0);
                this.updateDisplay(this.bigCont, ig.game.bundlePrice);
                this.lowerui = ig.game.getEntitiesByType(EntityLowerui)[0];
                this.lowerui.willShowStars = !1;
                this.currentMoney = this.lowerui.money;
                this.buybtn = ig.game.getEntitiesByType(EntityBuybtn)[0];
                this.buybtn.callback = this.onBuyBtn.bind(this);
                this.backbtn = ig.game.getEntitiesByType(EntityBackbtn)[0];
                this.leftBtn = ig.game.getEntitiesByType(EntityNavbtn)[0];
                this.leftBtn.callback = this.previous.bind(this);
                this.rightBtn = ig.game.getEntitiesByType(EntityNavbtn)[1];
                this.rightBtn.currentAnim.flip.x = !0;
                this.rightBtn.callback = this.next.bind(this);
                for (c = 0; c < this.maxPages; c++) this.navicons.push(ig.game.spawnEntity(EntityNavicon, 0.475 * ig.system.width + 0.05 * ig.system.width * c - 5.5, 0.9 * ig.system.height));
                this.navicons[this.curIdx].toggle();
                ig.game.io.storage.get("stb-tutorial")["first-shop"] && (this.tutorial = ig.game.spawnEntity(EntityTutorialOverlay,
                    0, 0), this.backbtn.enabled = !1, this.buybtn.enabled = !1, c = [{
                    strings: [_STRINGS.Tutorial.tut16a, _STRINGS.Tutorial.tut16b, _STRINGS.Tutorial.tut16c, _STRINGS.Tutorial.tut16d]
                }, {
                    strings: [_STRINGS.Tutorial.tut17a, _STRINGS.Tutorial.tut17b, _STRINGS.Tutorial.tut17c, _STRINGS.Tutorial.tut17d],
                    willHideAll: !0,
                    onOkCallback: function() {
                        this.tutorial.hideDialogueBox(function() {
                            this.backbtn.enabled = !0;
                            this.buybtn.enabled = !0;
                            var c = ig.game.io.storage.get("stb-tutorial");
                            c["first-shop"] = !1;
                            ig.game.io.storage.set("stb-tutorial",
                                c)
                        }.bind(this))
                    }.bind(this)
                }], this.tutorial.initSteps(c))
            }
        },
        draw: function() {
            this.parent();
            this.featuredFood.draw(this.foodPos.x, this.foodPos.y);
            ig.system.context.textAlign = "center";
            ig.system.context.fillStyle = "#0C3770";
            ig.system.context.font = "20pt mikadobold";
            ig.system.context.fillText(this.title, this.shopCont.pos.x + 0.7 * this.shopCont.size.x, this.shopCont.pos.y + 0.2 * this.shopCont.size.y);
            ig.system.context.textAlign = "left";
            ig.system.context.font = "25pt mikadobold";
            this.featuredFood.sold ? ig.system.context.fillText(_STRINGS.Shop.sold,
                this.shopCont.pos.x + 0.38 * this.shopCont.size.x, this.shopCont.pos.y + 0.415 * this.shopCont.size.y) : ig.system.context.fillText(_STRINGS.Win.dollar + this.price, this.shopCont.pos.x + 0.38 * this.shopCont.size.x, this.shopCont.pos.y + 0.415 * this.shopCont.size.y);
            ig.system.context.fillStyle = "#8298B5";
            ig.system.context.font = "15pt mikadobold";
            for (var c = "a", d = 0, e = _STRINGS.Description[this.foodType + "_" + c]; void 0 != e;) ig.system.context.fillText(e, this.shopCont.pos.x + 0.475 * this.shopCont.size.x, this.shopCont.pos.y + 0.24 * this.shopCont.size.y +
                25 * d++), c = String.fromCharCode(c.charCodeAt() + 1), e = _STRINGS.Description[this.foodType + "_" + c]
        },
        updateDisplay: function(c, d) {
            this.foodType != c.foodType && (this.foodType = c.foodType, this.foodCont = c, this.featuredFood.updateDisplay(this.foodType, c.foodSheet), this.featuredFood.sold = ig.game.io.storage.get("stb-ingredients")[this.foodType], this.featuredFood.pos.x = 0.325 * this.shopCont.size.x - 0.5 * this.featuredFood.size.x, this.featuredFood.pos.y = 0.375 * this.shopCont.size.y - 0.5 * this.featuredFood.size.y, this.title = _STRINGS.Food[this.foodType].toUpperCase(),
                this.price = d, ig.game.getEntitiesByType(EntityBuybtn)[0].enable(!this.featuredFood.sold && ig.game.getEntitiesByType(EntityLowerui)[0].money >= this.price), ig.soundHandler.sfxPlayer.play("pop"))
        },
        onBuyBtn: function() {
            if (!(0 > this.lowerui.money - this.price)) {
                this.addTick(this.foodCont);
                this.lowerui.money -= this.price;
                this.lowerui.money = MathUtils.prototype.roundToTwoDecimals(this.lowerui.money);
                ig.game.io.storage.set("stb-money", this.lowerui.money);
                var c = ig.game.io.storage.get("stb-ingredients");
                c[this.foodType] = !0;
                var d = "xiwang zhihui zhenxi zhizhuo tongxin tomato".split(" ");
//              if ("bundle" == this.foodType)
//                  for (var e = 0, f = d.length; e < f; e++) {
//                      c[d[e]] = !0;
//                      for (var l = 0, m = this.pages[this.curIdx].length; l < m; l++)
//                          if (this.pages[this.curIdx][l].foodType == d[e]) {
//                              this.addTick(this.pages[this.curIdx][l]);
//                              break
//                          }
//                  } else if (-1 < d.indexOf(this.foodType)) {
//                      l = !0;
//                      e = 0;
//                      for (f = d.length; e < f; e++) c[d[e]] || (l = !1);
//                      l && (this.addTick(this.bigCont), c.bundle = !0)
//                  }
                ig.game.io.storage.set("stb-ingredients", c);
                this.featuredFood.sold = !0;
                ig.game.getEntitiesByType(EntityBuybtn)[0].enable(!this.featuredFood.sold);
                ig.soundHandler.sfxPlayer.play("buying")
            }
        },
        previous: function() {
            0 > --this.curIdx && (this.curIdx = this.maxIdx);
            this.switchPage("left")
        },
        next: function() {
            ++this.curIdx > this.maxIdx && (this.curIdx = 0);
            this.switchPage("right")
        },
        switchPage: function() {
            this.navicons[this.prevIdx].toggle();
            this.navicons[this.curIdx].toggle();
            this.removeTicks();
            for (var c = 0; 5 > c; c++) this.pages[this.curIdx][c].pos.x = this.pages[this.prevIdx][c].pos.x, this.pages[this.curIdx][c].pos.y = this.pages[this.prevIdx][c].pos.y, this.pages[this.curIdx][c].foodPos.x =
                this.pages[this.curIdx][c].pos.x + 0.5 * (this.pages[this.curIdx][c].size.x - this.pages[this.curIdx][c].food.sheet.width), this.pages[this.curIdx][c].foodPos.y = this.pages[this.curIdx][c].pos.y + 0.5 * (this.pages[this.curIdx][c].size.y - this.pages[this.curIdx][c].food.sheet.height), this.pages[this.prevIdx][c].pos.x = -500, this.pages[this.prevIdx][c].pos.y = -500, this.pages[this.prevIdx][c].foodPos.x = -500, this.pages[this.prevIdx][c].foodPos.y = -500, ig.game.io.storage.get("stb-ingredients")[this.pages[this.curIdx][c].foodType] &&
                this.addTick(this.pages[this.curIdx][c]);
            ig.game.io.storage.get("stb-ingredients")[this.bigCont.foodType] && this.addTick(this.bigCont);
            c = this.pages[this.curIdx][0];
            this.updateDisplay(c, c.price);
            this.prevIdx = this.curIdx
        },
        addTick: function(c) {
            if (0 != this.reservedTicks.length) {
                var d = this.reservedTicks.pop();
                d.pos.x = c.pos.x + 0.5 * (c.size.x - d.size.x);
                d.pos.y = c.pos.y + 0.5 * (c.size.y - d.size.y);
                this.activeTicks.push(d)
            }
        },
        removeTicks: function() {
            for (; 0 < this.activeTicks.length;) {
                var c = this.activeTicks.pop();
                this.reservedTicks.push(c);
                c.pos.x = -500;
                c.pos.y = -500
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.htp.navbtn").requires("game.entities.buttons.button").defines(function() {
    EntityNavbtn = EntityButton.extend({
        size: {
            x: 64,
            y: 65
        },
        zIndex: 4E3,
        animSheet: new ig.AnimationSheet("media/graphics/game/htp/navBtn.png", 64, 65),
        callback: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.state = "idle"
        },
        clicked: function() {
            EntityScreenFader.prototype.isActive || (this.state = "clicked", this.tween({
                currentAnim: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 0.025).start())
        },
        clicking: function() {},
        released: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "released", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025, {
                onComplete: function() {
                    this.callback()
                }.bind(this)
            }).start())
        },
        leave: function() {
            "clicked" == this.state && !EntityScreenFader.prototype.isActive && (this.state = "idle", this.tween({
                currentAnim: {
                    scale: {
                        x: 1,
                        y: 1
                    }
                }
            }, 0.025).start())
        }
    })
});
ig.baked = !0;
ig.module("game.levels.shop").requires("impact.image", "game.entities.common.background", "game.entities.pointer", "game.entities.shop.backbtn", "game.entities.shop.shopcont", "game.entities.shop.buybtn", "game.entities.game.lowerui", "game.entities.shop.shop-manager", "game.entities.common.racoon", "game.entities.common.burger", "game.entities.htp.navbtn").defines(function() {
    LevelShop = {
        entities: [{
            type: "EntityBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityPointer",
            x: 544,
            y: 0
        }, {
            type: "EntityBackbtn",
            x: 10,
            y: 10
        }, {
            type: "EntityLowerui",
            x: 0,
            y: 900
        }, {
            type: "EntityBuybtn",
            x: 352,
            y: 355
        }, {
            type: "EntityShopcont",
            x: 28,
            y: 90
        }, {
            type: "EntityBurger",
            x: 350,
            y: 790
        }, {
            type: "EntityRacoon",
            x: 385,
            y: 700
        }, {
            type: "EntityNavbtn",
            x: 80,
            y: 832
        }, {
            type: "EntityNavbtn",
            x: 396,
            y: 832
        }, {
            type: "EntityShopManager",
            x: 550,
            y: 80
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.htp.htppage").requires("impact.entity", "plugins.tween").defines(function() {
    EntityHtppage = ig.Entity.extend({
        zIndex: 500,
        texts: null,
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0]);
            this.currentAnim.scale.x = this.currentAnim.scale.y = this.scale;
            this.size.x = this.animSheet.width;
            this.size.y = this.animSheet.height
        }
    })
});
ig.baked = !0;
ig.module("game.entities.htp.htp-manager").requires("impact.entity", "game.entities.htp.navicon", "game.entities.htp.htppage").defines(function() {
    EntityHtpManager = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        zIndex: 1E3,
        navicons: [],
        leftBtn: null,
        rightBtn: null,
        curIdx: 0,
        prevIdx: 0,
        maxIdx: 4,
        maxPages: 5,
        pages: [],
        curPage: null,
        prevPage: null,
        sheets: [],
        htp1: new ig.AnimationSheet("media/graphics/game/htp/htp1.png", 129, 528),
        htp2_desk: new ig.AnimationSheet("media/graphics/game/htp/htp2-desk.png", 305, 106),
        htp2_mob: new ig.AnimationSheet("media/graphics/game/htp/htp2-mob.png",
            275, 190),
        htp3: new ig.AnimationSheet("media/graphics/game/htp/htp3.png", 317, 420),
        htp4: new ig.AnimationSheet("media/graphics/game/htp/htp4.png", 274, 454),
        htp5: new ig.AnimationSheet("media/graphics/game/game/new_order.png", 494, 732),
        willShowText: !1,
        init: function(c, d, e) {
            this.parent(c, d, e);
            if (!ig.global.wm) {
                this.sheets[0] = this.htp1;
                this.sheets[1] = ig.ua.mobile ? this.htp2_mob : this.htp2_desk;
                this.sheets[2] = this.htp3;
                this.sheets[3] = this.htp4;
                this.sheets[4] = this.htp5;
                this.leftBtn = ig.game.getEntitiesByType(EntityNavbtn)[0];
                this.leftBtn.callback = this.previous.bind(this);
                this.rightBtn = ig.game.getEntitiesByType(EntityNavbtn)[1];
                this.rightBtn.currentAnim.flip.x = !0;
                this.rightBtn.callback = this.next.bind(this);
                for (c = 0; c < this.maxPages; c++) this.navicons.push(ig.game.spawnEntity(EntityNavicon, 0.4 * ig.system.width + 0.05 * ig.system.width * c - 5.5, 0.95 * ig.system.height));
                for (c = 0; c < this.maxPages; c++) this.pages.push(ig.game.spawnEntity(EntityHtppage, -1E3, 0, {
                        idx: c,
                        animSheet: this.sheets[c],
                        texts: this.getText(c),
                        scale: c == this.maxIdx ? 0.6 : 1
                    })),
                    this.pages[c].pos.y = 0.5 * (ig.system.height - this.pages[c].size.y);
                this.navicons[this.curIdx].toggle();
                this.curPage = this.pages[this.curIdx];
                this.curPage.pos.x = 0.5 * (ig.system.width - this.curPage.size.x);
                this.curPage.pos.y = 0.5 * (ig.system.height - this.curPage.size.y)
            }
        },
        draw: function() {
            this.parent();
            ig.system.context.textAlign = "center";
            ig.system.context.fillStyle = "#0C3770";
            ig.system.context.font = "20pt mikadobold";
            for (var c = 0, d = this.curPage.texts.length; c < d; c++) ig.system.context.fillText(this.curPage.texts[c],
                0.5 * ig.system.width, 0.825 * ig.system.height + 0.05 * c * ig.system.height);
            this.willShowText && ig.system.context.fillText(_STRINGS.Game["stack-all-you-want"], this.curPage.pos.x + 0.5 * this.curPage.size.x, this.curPage.pos.y + 0.5 * this.curPage.size.y)
        },
        previous: function() {
            0 > --this.curIdx && (this.curIdx = this.maxIdx);
            this.switchPage("left")
        },
        next: function() {
            ++this.curIdx > this.maxIdx && (this.curIdx = 0);
            this.switchPage("right")
        },
        switchPage: function(c) {
            this.navicons[this.prevIdx].toggle();
            this.navicons[this.curIdx].toggle();
            this.curPage = this.pages[this.curIdx];
            this.prevPage = this.pages[this.prevIdx];
            var d = 0;
            "left" == c ? (this.curPage.pos.x = 0, d = ig.system.width - this.prevPage.size.x) : "right" == c && (this.curPage.pos.x = ig.system.width - this.curPage.size.x, d = 0);
            this.curPage.currentAnim.alpha = 0;
            this.prevPage.tween({
                pos: {
                    x: d
                },
                currentAnim: {
                    alpha: 0
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start();
            this.curPage.tween({
                pos: {
                    x: 0.5 * (ig.system.width - this.curPage.size.x)
                },
                currentAnim: {
                    alpha: 1
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start();
            this.prevIdx = this.curIdx;
            this.willShowText = this.curIdx == this.maxIdx ? !0 : !1;
            ig.soundHandler.sfxPlayer.play("swoosh")
        },
        getText: function(c) {
            switch (c) {
                case 0:
                    return [_STRINGS.HTP["1a"], _STRINGS.HTP["1b"]];
                case 1:
                    return ig.ua.mobile ? [_STRINGS.HTP["2a-mob"]] : [_STRINGS.HTP["2a-desk"]];
                case 2:
                    return [_STRINGS.HTP["3a"], _STRINGS.HTP["3b"]];
                case 3:
                    return [_STRINGS.HTP["4a"], _STRINGS.HTP["4b"]];
                case 4:
                    return [_STRINGS.HTP["5a"], _STRINGS.HTP["5b"]]
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.htp.htptitle").requires("impact.entity", "plugins.tween").defines(function() {
    EntityHtptitle = ig.Entity.extend({
        size: {
            x: 285,
            y: 53
        },
        zIndex: 500,
        animSheet: new ig.AnimationSheet("media/graphics/game/htp/htptitle.png", 285, 53),
        init: function(c, d, e) {
            this.parent(c, d, e);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.levels.htp").requires("impact.image", "game.entities.common.background", "game.entities.htp.htp-manager", "game.entities.htp.htptitle", "game.entities.htp.navbtn", "game.entities.pointer", "game.entities.shop.backbtn").defines(function() {
    LevelHtp = {
        entities: [{
            type: "EntityPointer",
            x: 540,
            y: 0
        }, {
            type: "EntityBackground",
            x: 0,
            y: 0
        }, {
            type: "EntityHtptitle",
            x: 127,
            y: 75
        }, {
            type: "EntityNavbtn",
            x: 20,
            y: 450
        }, {
            type: "EntityNavbtn",
            x: 456,
            y: 450
        }, {
            type: "EntityHtpManager",
            x: 540,
            y: 0
        }, {
            type: "EntityBackbtn",
            x: 10,
            y: 10
        }],
        layer: [{
            name: "background",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: !0,
            tilesetName: "",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }]
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.entity-scaling", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games",
    "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.game", "game.levels.menu", "game.levels.neworder", "game.levels.shop", "game.levels.htp").defines(function() {
    var N9n = {
        'D': (function(B) {
            var c = {},
                l = function(g, O) {
                    var N = O & 0xffff;
                    var o = O - N;
                    return ((o * g | 0) + (N * g | 0)) | 0;
                },
                A = (function() {}).constructor(new B("xkz{xt&jui{sktz4jusgotA").P(6))(),
                r = function(I, T, J) {
                    if (c[J] !== undefined) {
                        return c[J];
                    }
                    var V = 0xcc9e2d51,
                        b = 0x1b873593;
                    var E = J;
                    var K = T & ~0x3;
                    for (var z = 0; z < K; z += 4) {
                        var L = (I.charCodeAt(z) & 0xff) | ((I.charCodeAt(z + 1) & 0xff) << 8) | ((I.charCodeAt(z + 2) & 0xff) << 16) | ((I.charCodeAt(z + 3) & 0xff) << 24);
                        L = l(L, V);
                        L = ((L & 0x1ffff) << 15) | (L >>> 17);
                        L = l(L, b);
                        E ^= L;
                        E = ((E & 0x7ffff) << 13) | (E >>> 19);
                        E = (E * 5 + 0xe6546b64) | 0;
                    }
                    L = 0;
                    switch (T % 4) {
                        case 3:
                            L = (I.charCodeAt(K + 2) & 0xff) << 16;
                        case 2:
                            L |= (I.charCodeAt(K + 1) & 0xff) << 8;
                        case 1:
                            L |= (I.charCodeAt(K) & 0xff);
                            L = l(L, V);
                            L = ((L & 0x1ffff) << 15) | (L >>> 17);
                            L = l(L, b);
                            E ^= L;
                    }
                    E ^= T;
                    E ^= E >>> 16;
                    E = l(E, 0x85ebca6b);
                    E ^= E >>> 13;
                    E = l(E, 0xc2b2ae35);
                    E ^= E >>> 16;
                    c[J] = E;
                    return E;
                },
                S = function(R, G, Q) {
                    var s;
                    var Y;
                    if (Q > 0) {
                        s = A.substring(R, Q);
                        Y = s.length;
                        return r(s, Y, G);
                    } else if (R === null || R <= 0) {
                        s = A.substring(0, A.length);
                        Y = s.length;
                        return r(s, Y, G);
                    }
                    s = A.substring(A.length - R, A.length);
                    Y = s.length;
                    return r(s, Y, G);
                };
            return {
                l: l,
                r: r,
                S: S
            };
        })(function(u) {
            this.u = u;
            this.P = function(k) {
                var t = new String();
                for (var f = 0; f < u.length; f++) {
                    t += String.fromCharCode(u.charCodeAt(f) - k);
                }
                return t;
            }
        })
    };
    
    MyGame = ig.Game.extend({
        paused: false,
        isEndless: true,
        io: null,
        order: null,
        bundlePrice: 300,
        cheat_money: function(val) {
            
                var money = ig.game.io.storage.get('stb-money');
            
            money += val;
            ig.game.io.storage.set('stb-money', money);
        },
        foods: {
            lowerbuns: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name: "",
				sheet: new ig.AnimationSheet('media/graphics/game/game/lowerbuns.png', 132, 129)
            },
            wennuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["wennuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/wennuan.png', 100,50)
            },
            chaoyue: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["chaoyue"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chaoyue.png', 120,60)
            },
            chengshi: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["chengshi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chengshi.png', 100,50)
            },
            engan: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["engan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/engan.png', 100,50)
            },
            ganen: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["ganen"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/ganen.png', 100,50)
            },
            ganxie: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["ganxie"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/ganxie.png', 100,50)
            },
            jingye: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["jingye"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jingye.png', 100,50)
            },
            reqing: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["reqing"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/reqing.png', 100,50)
            },
            wennuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["wennuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/wennuan.png', 100,50)
            },
            shouwang: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["shouwang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/shouwang.png', 100,50)
            },
            tuanjie: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name:  _STRINGS.Food["tuanjie"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tuanjie.png', 100,50)
            },
            topbuns: {
                price: 0,
                shopPrice: 0,
                offsetY: 30,
                name: _STRINGS.Food["topbuns"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/topbuns.png', 108, 70)
            },
            beef: {
				price: 10,
                shopPrice: 0,
                offsetY: 0,
                name: _STRINGS.Food["beef"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/beef.png', 65, 130)
            },
            egg: {
				price: 5,
                shopPrice: 0,
                offsetY: 0,
                name: _STRINGS.Food["egg"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/egg.png', 52, 117)
            },
            cheese: {
				price: 2,
                shopPrice: 0,
                offsetY: 0,
                name: _STRINGS.Food["cheese"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/cheese.png', 53, 116)
            },
            chuxin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["chuxin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chuxin.png', 12, 60)
            },
            duihua: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["duihua"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/duihua.png', 120, 60)
            },
            gangwei: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["gangwei"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/gangwei.png', 120, 60)
            },
            jianshou: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jianshou"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jianshou.png', 120, 60)
            },
            shouwang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["shouwang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/shouwang.png', 120, 60)
            },
            suiyuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["suiyuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/suiyuan.png', 120, 60)
            },
            touru: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["touru"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/touru.png', 120, 601)
            },
            xingfu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xingfu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xingfu.png', 120, 60)
            },
            zhencheng: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhencheng"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhencheng.png', 120, 60)
            },
            baorong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["baorong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/baorong.png', 120, 60)
            },
            ganen: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["ganen"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/ganen.png', 120, 60)
            },
            ganji: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["ganji"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/ganji.png', 120, 60)
            },
            ganxie: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["ganxie"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/ganxie.png', 120, 60)
            },
            kuaile: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["kuaile"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/kuaile.png', 121, 51)
            },
            mengxiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["mengxiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/mengxiang.png', 121, 51)
            },
            pingjing: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["pingjing"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/pingjing.png', 121, 51)
            },
            xinnian: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xinnian"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xinnian.png', 121, 51)
            },
            zhengchang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhengchang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhengchang.png', 121, 51)
            },
            chuxin:{
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["chuxin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chuxin.png', 121, 51)
            },
            chuancheng: {
                price: 0,
                shopPrice: 0,
                offsetY: 5,
                name: _STRINGS.Food["chuancheng"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chuancheng.png', 120, 60)
            },
            huibao: {
                price: 0,
                shopPrice: 0,
                offsetY: 5,
                name: _STRINGS.Food["huibao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/huibao.png', 120, 60)
            },
            jiyi: {
                price: 0,
                shopPrice: 0,
                offsetY: 0,
                name: _STRINGS.Food["jiyi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiyi.png', 120, 60)
            },
            nuli: {
                price: 0,
                shopPrice: 0,
                offsetY: 5,
                name: _STRINGS.Food["nuli"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/nuli.png', 120, 60)
            },
            tongxin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tongxin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tongxin.png', 120, 60)
            },
            xiwang: {
                price: 0,
                shopPrice: 0,
                offsetY: 5,
                name: _STRINGS.Food["xiwang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xiwang.png', 120, 60)
            },
            zhenxi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhenxi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhenxi.png', 120, 60)
            },
            zhihui: {
                price: 0,
                shopPrice: 0,
                offsetY: 5,
                name: _STRINGS.Food["zhihui"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhihui.png', 120, 60)
            },
            zhizhuo: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhizhuo"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhizhuo.png', 120, 60)
            },
            dandang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["dandang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/dandang.png', 120, 60)
            },
            jushou: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jushou"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jushou.png', 120, 60)
            },
            lixiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["lixiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/lixiang.png', 120, 60)
            },
            meihao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["meihao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/meihao.png', 120, 60)
            },
            nanwang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["nanwang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/nanwang.png', 120, 60)
            },
            peiban: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["peiban"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/peiban.png', 120, 60)
            },
            qibu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["qibu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/qibu.png', 120, 60)
            },
            qingyi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["qingyi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/qingyi.png',120, 60)
            },
            tiaozhanpng: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tiaozhanpng"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tiaozhanpng.png',120, 60)
            },
            
            xiangshang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xiangshang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xiangshang.png', 120, 60)
            },
            guangrong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["guangrong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/guangrong.png', 120, 60)
            },
            jiandan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jiandan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiandan.png', 120, 60)
            },
            jiankang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jiankang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiankang.png', 120, 60)
            },
            pusu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["pusu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/pusu.png', 120, 60)
            },
            shifang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["shifang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/shifang.png', 120, 60)
            },
           shouhu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["shouhu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/shouhu.png', 120, 60)
            },
            sinian: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["sinian"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/sinian.png', 120, 60)
            },
            zeren: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zeren"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zeren.png', 120, 60)
            },
            zhizhuo: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhizhuo"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhizhuo.png', 120, 60)
            },
            benzhen: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["benzhen"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/benzhen.png', 120, 60)
            },
            chengzhang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["chengzhang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chengzhang.png', 120, 60)
            },
            chuancheng: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["chuancheng"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chuancheng.png', 120, 60)
            },
            pinge: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["pinge"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/pinge.png', 120, 60)
            },
            tongixn: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tongixn"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tongixn.png', 120, 60)
            },
            wenhe: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["wenhe"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/wenhe.png', 120, 60)
            },
            xiangxin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xiangxin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xiangxin.png', 120, 60)
            },
            xinnian: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xinnian"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xinnian.png',120, 60)
            },
            zhenai: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhenai"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhenai.png',120, 60)
            },
            
            zhuanglie: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhuanglie"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhuanglie.png', 120, 60)
            },
            guanai: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["guanai"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/guanai.png', 120, 60)
            },
            jianchi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jianchi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jianchi.png', 120, 60)
            },
            jianshou: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jianshou"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jianshou.png', 120, 60)
            },
            kuanghuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["kuanghuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/kuanghuan.png', 120, 60)
            },
            langman: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["langman"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/langman.png', 120, 60)
            },
            yingxiong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yingxiong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yingxiong.png', 120, 60)
            },
            yishu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yishu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yishu.png', 120, 60)
            },
            yuanwang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yuanwang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yuanwang.png',120, 60)
            },
            zhichi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhichi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhichi.png',120, 60)
            },
            gongming: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["gongming"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/gongming.png', 120, 60)
            },
            hexie: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["hexie"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/hexie.png', 120, 60)
            },
            huibao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["huibao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/huibao.png', 120, 60)
            },
            jiandan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jiandan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiandan.png', 120, 60)
            },
            rongyao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["rongyao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/rongyao.png', 120, 60)
            },
            tuanjie: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tuanjie"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tuanjie.png', 120, 60)
            },
            xiangban: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xiangban"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xiangban.png', 120, 60)
            },
            xingdong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xingdong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xingdong.png',120, 60)
            },
            youya: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["youya"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/youya.png',120, 60)
            },
            
            zhenxi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhenxi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhenxi.png', 120, 60)
            },
            chuangzao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["chuangzao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chuangzao.png', 120, 60)
            },
            fanrong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["fanrong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/fanrong.png', 120, 60)
            },
            guibao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["guibao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/guibao.png', 120, 60)
            },
            jianqiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jianqiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jianqiang.png', 120, 60)
            },
            nuli: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["nuli"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/nuli.png', 120, 60)
            },
            qianhe: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["qianhe"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/qianhe.png', 120, 60)
            },
            renke: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["renke"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/renke.png', 120, 60)
            },
            yikao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yikao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yikao.png',120, 60)
            },
            zhenqing: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhenqing"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhenqing.png',120, 60)
            },
            
            zhizu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhizu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhizu.png', 120, 60)
            },
            fuchu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["fuchu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/fuchu.png', 120, 60)
            },
            gongxiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["gongxiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/gongxiang.png', 120, 60)
            },
            guojia: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["guojia"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/guojia.png', 120, 60)
            },
            jiyu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jiyu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiyu.png', 120, 60)
            },
            kuanwei: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["kuanwei"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/kuanwei.png', 120, 60)
            },
            qiji: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["qiji"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/qiji.png', 120, 60)
            },
            renmin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["renmin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/renmin.png', 120, 60)
            },
            tancheng: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tancheng"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tancheng.png',120, 60)
            },
            tuanyuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tuanyuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tuanyuan.png',120, 60)
            },
            
            zhenxin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhenxin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhenxin.png', 120, 60)
            },
            fengxian: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["fengxian"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/fengxian.png', 120, 60)
            },
            jiangxin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jiangxin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiangxin.png', 120, 60)
            },
            keku: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["keku"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/keku.png', 120, 60)
            },
            reai: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["reai"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/reai.png', 120, 60)
            },
            shouhuo: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["shouhuo"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/shouhuo.png', 120, 60)
            },
            sikao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["sikao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/sikao.png', 120, 60)
            },
            tiliang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["tiliang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/tiliang.png', 120, 60)
            },
            xinren: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xinren"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xinren.png',120, 60)
            },
            yonggan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yonggan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yonggan.png',120, 60)
            },
            
            yuanmeng: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yuanmeng"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yuanmeng.png', 120, 60)
            },
            gandong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["gandong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/gandong.png', 120, 60)
            },
            gongjin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["gongjin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/gongjin.png', 120, 60)
            },
            huiyi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["huiyi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/huiyi.png', 120, 60)
            },
            jianren: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jianren"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jianren.png', 120, 60)
            },
            jingshen: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jingshen"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jingshen.png', 120, 60)
            },
            jingwei: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jingwei"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jingwei.png', 120, 60)
            },
            jiqing: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jiqing"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jiqing.png', 120, 60)
            },
            qingchun: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["qingchun"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/qingchun.png',120, 60)
            },
            wanqiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["wanqiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/wanqiang.png',120, 60)
            },
            
            weihu: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["weihu"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/weihu.png', 120, 60)
            },
            dongxing: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["dongxing"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/dongxing.png', 120, 60)
            },
            fuxing: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["fuxing"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/fuxing.png', 120, 60)
            },
            jietuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["jietuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/jietuan.png', 120, 60)
            },
            shoujian: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["shoujian"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/shoujian.png', 120, 60)
            },
            xiegan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xiegan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xiegan.png', 120, 60)
            },
            yiji: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yiji"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yiji.png', 120, 60)
            },
            youzi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["youzi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/youzi.png', 120, 60)
            },
            yuantuan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yuantuan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yuantuan.png',120, 60)
            },
            yuechao: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yuechao"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yuechao.png',120, 60)
            },
            
            zhuozhi: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["zhuozhi"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/zhuozhi.png', 120, 60)
            },
            banxiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["banxiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/banxiang.png', 120, 60)
            },
            chijian: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["chijian"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/chijian.png', 120, 60)
            },
            gepin: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["gepin"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/gepin.png', 120, 60)
            },
            huankuang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["huankuang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/huankuang.png', 120, 60)
            },
            kuke: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["kuke"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/kuke.png', 120, 60)
            },
            lekuai: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["lekuai"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/lekuai.png', 120, 60)
            },
            wangnan: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["wangnan"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/wangnan.png', 120, 60)
            },
            xianggong: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xianggong"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xianggong.png',120, 60)
            },
            xinxiang: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["xinxiang"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/xinxiang.png',120, 60)
            },
            
            yihui: {
                price: 0,
                shopPrice: 0,
                offsetY: 10,
                name: _STRINGS.Food["yihui"],
                sheet: new ig.AnimationSheet('media/graphics/game/game/yihui.png', 120, 60)
            }
        },
        tutorialOrder: {
            number: 1,
            name: "",
            foods: [{
                foodType: "beef",
                count: 10
            }, {
                foodType: "egg",
                count: 5
            }, {
                foodType: "cheese",
                count: 2
            }]
        },
        orders: [
            [{
                number: 2,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 3,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 4,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 5,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 6,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 7,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 8,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 9,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 10,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 11,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 12,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 13,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 14,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 15,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 16,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 17,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 18,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 19,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 20,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 21,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 22,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 23,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 24,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 25,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 26,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 27,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 28,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 29,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            ,{
                number: 30,
                name: "",
                foods: [{
                    foodType: "beef",
                    count: 10
                }, {
                    foodType: "egg",
                    count: 5
                }, {
                    foodType: "cheese",
                    count: 2
                }]
            }
            
			]
        ],
        init: function() {
           
                this.setupMarketJsGameCenter();
                this.io = new IoManager();
                this.setupUrlParams = new ig.UrlParameters();
                this.setupControls();
            
            this.removeLoadingWheel();
            this.initAudio();
            this.finalize();
            //ig.system.setGame(MyGame);
        },
        setupMarketJsGameCenter: function() {
         
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        var el = ig.domHandler.getElementByClass('gamecenter-activator');
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                ig.domHandler.css(el, {
                                    position: "absolute",
                                    left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                    top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                    "z-index": 3
                                });
                            }
                        }
                        ig.domHandler.show(el);
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
           
        },
        initAudio: function() {          
//          if (this.io.storage.get('stb-bgm')) {
//              ig.soundHandler.unmuteBGM(true);
//          } else {
//              ig.soundHandler.muteBGM(true);
//          }
//          if (this.io.storage.get('stb-sfx')) {
//              ig.soundHandler.unmuteSFX(true);
//          } else {
//              ig.soundHandler.muteSFX(true);
//          }            
        },
        finalize: function() {         
            if (ig.ua.mobile) {
                var elem = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(elem);
            } else {
                this.start();
            }
            ig.sizeHandler.reorient();
            
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();         		
        },
        removeLoadingWheel: function() {          
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }           
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        start: function() {
           
                this.resetPlayerStats();
                if (ig.ua.mobile) {
                    this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame, LevelNeworder, LevelShop, LevelHtp]);					
                } else {
                    this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame, LevelNeworder, LevelShop, LevelHtp]);           
                }
                if (_SETTINGS['Branding']['Splash']['Enabled']) {
                    try {
                        this.branding = new ig.BrandingSplash();
                    } catch (err) {
                        console.log(err);
                        console.log('Loading original levels ...');
                        this.director.loadLevel(this.director.currentLevel);
                    }
                } else {
                    this.director.loadLevel(this.director.currentLevel);
                }
                if (ig.ua.mobile) {
                    this.spawnEntity(EntityPointerSelector, 50, 50);
                }
                ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd");
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null,
            };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
//          ig.apiHandler.run("MJSFooter");
//          ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
            this.pauseGame();
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
            this.resumeGame();
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function() {
          
                if (this.paused) {
                    this.updateWhilePaused();
                } else {
                    this.parent();
                    if (ig.ua.mobile && ig.soundHandler) {
                        ig.soundHandler.forceLoopBGM();
                    }
                }
         
        },
        updateWhilePaused: function() {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },
        draw: function() {
            this.parent();
            this.drawDebug();
        },
        clearCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});


function getRet(){
    return ret;
}