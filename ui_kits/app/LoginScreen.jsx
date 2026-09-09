const { Button, TextField, Checkbox, Icon } = window.LoftyDesignSystem_491d68;

function LoginScreen({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [error, setError] = React.useState(false);
  const [stay, setStay] = React.useState(true);
  function submit() {
    if (!email.includes("@")) { setError(true); return; }
    onLogin();
  }
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flex: "0 0 46%", background: "var(--lofty-foundation-black)", padding: "var(--space-48)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "var(--space-48)" }}>
        <img src="../../assets/brand/lofty-logo-white.png" alt="Lofty" style={{ height: 28, alignSelf: "flex-start" }} />
        <div>
          <div style={{ font: "var(--font-display-m)", letterSpacing: "var(--letter-spacing-brand-heading)", color: "#fff" }}>Every job, every crew, one schedule.</div>
          <p style={{ font: "var(--font-text1-normal)", color: "rgba(255,255,255,.9)", marginTop: "var(--space-16)", maxWidth: 380 }}>Sign in to see this week's work.</p>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--primary-background-color)" }}>
        <div style={{ width: 340, display: "flex", flexDirection: "column", gap: "var(--space-16)" }}>
          <h1 style={{ font: "var(--font-h2-bold)", letterSpacing: "var(--letter-spacing-h2-bold)" }}>Sign in</h1>
          <TextField label="Work email" placeholder="you@lofty.com.au" value={email} onChange={e => { setEmail(e.target.value); setError(false); }}
            validation={error ? "error" : undefined} message={error ? "Enter a valid work email" : undefined} />
          <TextField label="Password" type="password" value={pw} onChange={e => setPw(e.target.value)} />
          <Checkbox label="Keep me signed in" checked={stay} onChange={() => setStay(v => !v)} />
          <Button size="large" onClick={submit}>Sign in</Button>
          <Button kind="tertiary" leftIcon={<Icon name="Key" size={16} />}>Use single sign-on</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen });
