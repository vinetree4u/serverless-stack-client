const dev = {
    STRIPE_KEY: "pk_test_IckbQvFPD7OksCMlZyyPUd2A00X3AioSVX",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-wmcidbwlnne9"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://fob6srkgp3.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_lirRsDdzj",
      APP_CLIENT_ID: "2mmprled6rohc02bm7m18eiofj",
      IDENTITY_POOL_ID: "us-east-1:95bb85f1-a5b2-4901-a0d6-c052caaed12b"
    }
};

const prod = {
  STRIPE_KEY: "pk_test_IckbQvFPD7OksCMlZyyPUd2A00X3AioSVX",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1wkqaafpjky3s"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://w4ay4hy2m9.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HlNx3rA2m",
    APP_CLIENT_ID: "21q582h1895ct6i5ehodmaj6ri",
    IDENTITY_POOL_ID: "us-east-1:daba1eed-e0cc-47c6-a485-3ccafa691235"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};