import { openBlock as c, createElementBlock as u, createElementVNode as i, withDirectives as f, vModelCheckbox as h, Fragment as y, renderList as b, toDisplayString as g, createApp as v } from "vue";
import a from "noty";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) l(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && l(r);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function s(n) {
    const o = {};
    return n.integrity && (o.integrity = n.integrity), n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? o.credentials = "include" : n.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function l(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = s(n);
    fetch(n.href, o);
  }
})();
const w = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, n] of t)
    s[l] = n;
  return s;
}, A = {
  data: () => ({
    themes: [
      "mint",
      "sunset",
      "relax",
      "metroui",
      "semanticui",
      "light",
      "bootstrap-v3",
      "bootstrap-v4"
    ],
    selThemes: [],
    isThemesAll: !1,
    isUpdatingAll: !1
  }),
  watch: {
    isThemesAll(e) {
      this.isUpdatingAll || (e ? this.selThemes = [...this.themes] : this.selThemes = []);
    },
    selThemes: {
      handler(e) {
        this.isUpdatingAll = !0, this.isThemesAll = e.length === this.themes.length, setTimeout(() => {
          this.isUpdatingAll = !1;
        }, 100);
      },
      deep: !0
    }
  },
  methods: {
    notify(e = "alert") {
      this.selThemes.length === 0 && this.$noty.warning("select a least one theme!", {
        timeout: 3e3,
        progressBar: !0,
        theme: "bootstrap-v3"
      });
      for (const t of this.selThemes)
        this.$noty[e](`${e} (${t} theme)`, {
          timeout: 4e3,
          progressBar: !0,
          theme: t
        });
    },
    notifyAll() {
      const e = ["show", "info", "warning", "success", "error"];
      for (const t of e) this.notify(t);
    },
    closeAll() {
      this.$noty.closeAll();
    }
  },
  mounted() {
    this.isThemesAll = !0;
  }
}, T = { class: "container py-2" }, k = { class: "row" }, _ = { class: "col text-center" }, O = { class: "row mt-3 justify-content-center" }, C = { class: "col-3" }, $ = { class: "form-check form-switch" }, N = { class: "form-check form-switch" }, B = ["id", "value"], S = ["for"], L = { class: "row mt-3" }, P = { class: "col text-center" };
function U(e, t, s, l, n, o) {
  return c(), u("div", T, [
    i("div", k, [
      i("div", _, [
        i("button", {
          class: "btn btn-primary m-1",
          onClick: t[0] || (t[0] = (r) => o.notify("show"))
        }, "Show"),
        i("button", {
          class: "btn btn-info m-1",
          onClick: t[1] || (t[1] = (r) => o.notify("info"))
        }, "Info"),
        i("button", {
          class: "btn btn-warning m-1",
          onClick: t[2] || (t[2] = (r) => o.notify("warning"))
        }, "Warning"),
        i("button", {
          class: "btn btn-success m-1",
          onClick: t[3] || (t[3] = (r) => o.notify("success"))
        }, "Success"),
        i("button", {
          class: "btn btn-danger m-1",
          onClick: t[4] || (t[4] = (r) => o.notify("error"))
        }, "Error"),
        i("button", {
          class: "btn btn-secondary m-1",
          onClick: t[5] || (t[5] = (r) => o.notifyAll())
        }, "All")
      ])
    ]),
    i("div", O, [
      i("div", C, [
        i("div", $, [
          f(i("input", {
            class: "form-check-input",
            type: "checkbox",
            role: "switch",
            id: "switchThemeAll",
            "onUpdate:modelValue": t[6] || (t[6] = (r) => e.isThemesAll = r)
          }, null, 512), [
            [h, e.isThemesAll]
          ]),
          t[9] || (t[9] = i("label", {
            class: "form-check-label",
            for: "switchThemeAll"
          }, "All", -1))
        ]),
        (c(!0), u(y, null, b(e.themes, (r) => (c(), u("div", N, [
          f(i("input", {
            class: "form-check-input",
            type: "checkbox",
            role: "switch",
            id: "switchTheme" + r,
            "onUpdate:modelValue": t[7] || (t[7] = (p) => e.selThemes = p),
            value: r
          }, null, 8, B), [
            [h, e.selThemes]
          ]),
          i("label", {
            class: "form-check-label",
            for: "switchTheme" + r
          }, g(r), 9, S)
        ]))), 256))
      ])
    ]),
    i("div", L, [
      i("div", P, [
        i("button", {
          class: "btn btn-secondary m-1",
          onClick: t[8] || (t[8] = (r) => o.closeAll())
        }, "Close All Visible Noty's")
      ])
    ])
  ]);
}
const E = /* @__PURE__ */ w(A, [["render", U]]), m = typeof window < "u", V = {
  layout: "bottomRight",
  theme: "mint",
  timeout: 5e3,
  progressBar: !0,
  closeWith: ["click"]
};
class x {
  constructor(t = {}) {
    this.defaultOptions = {
      ...V,
      ...t
    };
  }
  _notify(t) {
    if (!m) return null;
    const s = {
      type: "alert",
      ...this.defaultOptions,
      ...t
    };
    return new a(s).show();
  }
  show(t, s = {}) {
    return this._notify({ type: "alert", text: t, ...s });
  }
  success(t, s = {}) {
    return this._notify({ type: "success", text: t, ...s });
  }
  error(t, s = {}) {
    return this._notify({ type: "error", text: t, ...s });
  }
  warning(t, s = {}) {
    return this._notify({ type: "warning", text: t, ...s });
  }
  info(t, s = {}) {
    return this._notify({ type: "info", text: t, ...s });
  }
  closeAll() {
    m && a.closeAll();
  }
}
const I = {
  install(e, t = {}) {
    const s = new x(t);
    e.config.globalProperties.$noty = s, e.provide("noty", s);
  }
}, d = v(E);
a.setMaxVisible(8);
d.use(I, {
  layout: "bottomRight",
  timeout: 1e3,
  progressBar: !1
});
d.mount("#app");
