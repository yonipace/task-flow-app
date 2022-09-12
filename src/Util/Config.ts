// general configuration for any environment
class Config {}

// development environment
class DevelopmentConfig extends Config {
  baseUrl = "http://localhost:8080/";
  loginUrl = "http://localhost:8080/login/";
  userSignupUrl = "http://localhost:8080/signup/user/";
  companySignupUrl = "http://localhost:8080/signup/company/";
  userUrl = "http://localhost:8080/user/";
  productUrl = "http://localhost:8080/product";
  stationUrl = "http://localhost:8080/station";
  tourUrl = "http://localhost:8080/tour/";
  adminUrl = "http://localhost:8080/admin/";
}

// production environment
class ProductionConfig extends Config {
  baseUrl = "/";
  loginUrl = "/login/";
  userSignupUrl = "/signup/user/";
  companySignupUrl = "/signup/company/";
  userUrl = "/user/";
  productUrl = "/product/";
  stationUrl = "/station";
  tourUrl = "/tour/";
  adminUrl = "/admin/";
}

const appConfig =
  process.env.NODE_ENV === "development"
    ? new DevelopmentConfig()
    : new ProductionConfig();

export default appConfig;
