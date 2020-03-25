export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_IckbQvFPD7OksCMlZyyPUd2A00X3AioSVX",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1soo1oai87w4j"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://xutcw8hgmf.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_9opdzle0m",
      APP_CLIENT_ID: "62rdlmfdaveo9b3rgt06i52adl",
      IDENTITY_POOL_ID: "us-east-1:a81e5875-59f1-4719-b297-fa56260dcae3"
    }
};