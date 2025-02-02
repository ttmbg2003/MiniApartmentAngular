import { environment } from '../../environment/environment';
import { HttpHeaders } from '@angular/common/http';

export class AppConstants {
    private static API_BASE_URL = environment.apiBaseUrl;
    // private static OAUTH2_URL = AppConstants.API_BASE_URL + "oauth2/authorization/";
    public static API_URL = AppConstants.API_BASE_URL + "api/";
    public static AUTH_API = AppConstants.API_URL + "auth/";
    // public static GOOGLE_AUTH_URL = AppConstants.OAUTH2_URL + "google" + AppConstants.REDIRECT_URL;
    // public static FACEBOOK_AUTH_URL = AppConstants.OAUTH2_URL + "facebook" + AppConstants.REDIRECT_URL;
    // public static GITHUB_AUTH_URL = AppConstants.OAUTH2_URL + "github" + AppConstants.REDIRECT_URL;
    // public static LINKEDIN_AUTH_URL = AppConstants.OAUTH2_URL + "linkedin" + AppConstants.REDIRECT_URL;
	public static httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
}