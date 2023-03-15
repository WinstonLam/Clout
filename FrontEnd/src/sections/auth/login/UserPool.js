import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {

    UserPoolId: "us-east-1_Of0d4Ym2B",
    ClientId: "6tqamlblb4lvqmc4r8hnbm1ds9"
  
  }

  export default new CognitoUserPool(poolData);