const awsx = require("@pulumi/awsx")

// Create an API endpoint
const endpoint = new awsx.apigateway.API("hello-gatsby", {
  routes: [{ path: "/", localPath: "public" }],
})

exports.url = endpoint.url
