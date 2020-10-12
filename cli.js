#!/usr/bin/env node
const getToken = require("./server");

const argv = require("yargs")
  .usage("Usage: get-oidc-token [options]")
  .option("authority", {
    alias: "a",
    type: "string",
    demand: true,
    describe: "authority to request the token from",
  })
  .option("clientId", {
    alias: "c",
    type: "string",
    demand: true,
    describe: "id of the oidc client",
  })
  .option("scope", {
    alias: "s",
    type: "array",
    demand: true,
    describe: "list of scopes",
  })
  .option("responseType", {
    alias: "r",
    type: "array",
    demand: false,
    describe: "The response type determines which oidc flow to use. For implicit flow use 'token'",
    default: ["id_token", "token"]
  })
  .option("port", {
    alias: "p",
    type: "number",
    demand: false,
    describe: "local port to use",
    default: 3030,
  })
  .help("h")
  .alias("h", "help").argv;

getToken(argv.authority, argv.clientId, argv.scope.join(" "), argv.responseType.join(" "), argv.port);
