import { a as __toESM, i as require_react, t as require_jsx_runtime } from "./index-Aa4bgBu_.js";
import { currentSession, onSessionChange, signIn } from "./online-BkYMYvYb.js";
// src/SignIn.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SignInGate({ children }) {
	const [state, setState] = (0, import_react.useState)("checking");
	(0, import_react.useEffect)(() => {
		currentSession().then((s) => setState(s ? "in" : "out"));
		const sub = onSessionChange((s) => setState(s ? "in" : "out"));
		return () => sub.unsubscribe();
	}, []);
	if (state === "checking") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "signin-wrap",
		"aria-busy": "true"
	});
	if (state === "out") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function SignIn() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "signin-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "signin",
			onSubmit: async (e) => {
				e.preventDefault();
				setBusy(true);
				setError(null);
				try {
					await signIn(email.trim(), password);
				} catch (err) {
					setError(err.message);
					setBusy(false);
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "signin-logo",
					children: "🧴"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Lotion" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "muted",
					children: "Sign in to your notes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					autoComplete: "username",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value),
					autoFocus: true
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					autoComplete: "current-password",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value)
				})] }),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "signin-error",
					role: "alert",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn primary",
					disabled: busy,
					children: busy ? "Signing in…" : "Sign in"
				})
			]
		})
	});
}
export { SignInGate };
