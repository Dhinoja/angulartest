export class AppSettings {
  private constructor() {}

  // private static ApiRootUrl = 'http://localhost:49034/api/';
  private static ApiRootUrl = "http://localhost:49034/api/";
  private static SettingsData = {
    Api: {
      RootUrl: AppSettings.ApiRootUrl,
      CategoriesApiUrl: AppSettings.ApiRootUrl + "categories",
      ItemsApiUrl: AppSettings.ApiRootUrl + "items",
      ItemCategoriesApiUrl: AppSettings.ApiRootUrl + "itemcategories"
    }
  };

  public static get Settings() {
    return this.SettingsData;
  }
}
