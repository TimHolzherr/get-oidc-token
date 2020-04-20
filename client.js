const client = new Oidc.OidcClient(settings);
if (!window.location.hash) {
  client.createSigninRequest().then((req) => {
    window.location = req.url;
  });
} else {
  client.processSigninResponse().then((response) => {
    fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: response.access_token }),
    }).then(() => {
      window.location = "https://www.google.ch";
    });
  });
}
