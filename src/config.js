const dev = {
  STRIPE_KEY: "pk_test_51H8AJMJFueysbyYCsBpIgJLTQNrSwhdvVgmCUpqX7FoboicXjgv66P1ZQdfPYk3j45joyyNRHdgx1Aga5s83mfkl00baZcy5za",
  s3: {
    REGION: "us-east-1",
    BUCKET: "tyge-serverless-tutorial"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xclh2p84bj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_B7dbk6a1S",
    APP_CLIENT_ID: "7822hg7t4jqrhlg9rtigq2n4dq",
    IDENTITY_POOL_ID: "us-east-1:6a8b8095-adb7-4bf2-bf07-3b24b276ef14"
  },
  social: {
    FB: "215476723113271"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51H8AJMJFueysbyYCsBpIgJLTQNrSwhdvVgmCUpqX7FoboicXjgv66P1ZQdfPYk3j45joyyNRHdgx1Aga5s83mfkl00baZcy5za",
  s3: {
    REGION: "us-east-1",
    BUCKET: "tyge-serverless-tutorial"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dex30dd1d1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_elEbGSQBM",
    APP_CLIENT_ID: "iqtn4k3kcrsel8h8dpl2jb5b9",
    IDENTITY_POOL_ID: "us-east-1:7a402541-bf13-4545-ba52-2e4b645bc1b9"
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