export class AppSettings {
    private static SettingsData = {
        Database: {
            Url: "http://localhost:49034/api/",
        },
    };

    public static get Settings() {
        return this.SettingsData;
    }
}