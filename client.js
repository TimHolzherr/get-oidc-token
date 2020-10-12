const client = new Oidc.OidcClient(settings);
if (!window.location.hash && !window.location.search) {
  client.createSigninRequest().then((req) => {
    window.location = req.url;
  });
} else {
  new Oidc.UserManager({
    response_mode: settings.response_type.indexOf("code") >= 0 ? "query" : null,
  })
    .signinRedirectCallback()
    .then((response) => {
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
