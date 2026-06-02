import n from "noty";
const r = typeof window < "u", i = {
  layout: "bottomRight",
  theme: "mint",
  timeout: 5e3,
  progressBar: !0,
  closeWith: ["click"]
};
class s {
  constructor(t = {}) {
    this.defaultOptions = {
      ...i,
      ...t
    };
  }
  _notify(t) {
    if (!r) return null;
    const e = {
      type: "alert",
      ...this.defaultOptions,
      ...t
    };
    return new n(e).show();
  }
  create(t = {}) {
    return this._notify(t);
  }
  show(t, e = {}) {
    return this._notify({ type: "alert", text: t, ...e });
  }
  success(t, e = {}) {
    return this._notify({ type: "success", text: t, ...e });
  }
  error(t, e = {}) {
    return this._notify({ type: "error", text: t, ...e });
  }
  warning(t, e = {}) {
    return this._notify({ type: "warning", text: t, ...e });
  }
  info(t, e = {}) {
    return this._notify({ type: "info", text: t, ...e });
  }
  closeAll() {
    r && n.closeAll();
  }
}
const c = {
  install(o, t = {}) {
    const e = new s(t);
    o.config.globalProperties.$noty = e, o.provide("noty", e);
  }
};
export {
  s as NotyService,
  c as default,
  c as plugin
};
