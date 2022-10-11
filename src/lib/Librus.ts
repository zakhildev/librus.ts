import { CookieJar } from 'tough-cookie';
import axios, { AxiosInstance } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import Settings from './Settings';
import Users from '../modules/Users.module';
import Class from '../modules/Class.module';

export default class Librus {
  private username: string;
  private pass: string;
  private jar: CookieJar;
  public api: AxiosInstance;
  public modules = {
    users: new Users(this),
    class: new Class(this),
  };

  constructor(username: string, pass: string) {
    this.username = username;
    this.pass = pass;
    this.jar = new CookieJar();
    this.api = wrapper(axios.create({ jar: this.jar }));
    this.api.defaults.validateStatus = () => {
      return true;
    };
  }

  public async login() {
    await this.api.get('https://api.librus.pl/OAuth/Authorization', {
      params: {
        client_id: '46',
        response_type: 'code',
        scope: 'mydata',
      },
    });

    await this.api.post(
      'https://api.librus.pl/OAuth/Authorization',
      axios.toFormData({
        action: 'login',
        login: this.username,
        pass: this.pass,
      }),
      {
        params: {
          client_id: '46',
        },
      }
    );

    await this.api.get('https://api.librus.pl/OAuth/Authorization/2FA', {
      params: {
        client_id: '46',
      },
    });

    if (
      this.jar.getCookieStringSync(Settings.librusUrl).includes('oauth_token')
    ) {
      return this.jar.getCookies(Settings.librusUrl);
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
