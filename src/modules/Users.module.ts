import Me from '../apiTypes/Me';
import Student from '../apiTypes/Student';
import User from '../apiTypes/User';
import Module from '../lib/Module';
import Settings from '../lib/Settings';

export default class Users extends Module {
  public async getUsers(): Promise<User[] | undefined> {
    const res = await this.librus.api.get(Settings.apiUrl + 'Users');
    
    switch (res.status) {
      case 404:
        return undefined;
      case 401:
        await this.librus.login();
        return await this.getUsers();
      default:
        break;
    }


    const users = res.data['Users'] as [];
    const newUsers: User[] = [];
    users.forEach((user) => {
      const newUser = new User(
        user['Id'],
        user['AccountId'],
        user['FirstName'],
        user['LastName'],
        user['IsEmployee']
      );
      newUsers.push(newUser);
    });
    return newUsers;
  }

  public async getUser(id: number): Promise<User | undefined> {
    const res = await this.librus.api.get(Settings.apiUrl + 'Users/' + id);

    switch (res.status) {
      case 404:
        return undefined;
      case 401:
        await this.librus.login();
        return await this.getUser(id);
      default:
        break;
    }

    const userData = res.data['User'];
    if (userData['Class'] != undefined) {
      const newUser = new Student(
        userData['Id'],
        userData['AccountId'],
        userData['FirstName'],
        userData['LastName'],
        userData['IsEmployee'],
        userData['Class']['Id'],
        userData['Unit']['Id'],
        userData['ClassRegisterNumber']
      );
      return newUser;
    }
    const newUser = new User(
      userData['Id'],
      userData['AccountId'],
      userData['FirstName'],
      userData['LastName'],
      userData['IsEmployee']
    );
    return newUser;
  }

  public async getSelf(): Promise<Me | undefined> {
    const res = await this.librus.api.get(Settings.apiUrl + 'Me');
    
    switch (res.status) {
      case 404:
        return undefined;
      case 401:
        await this.librus.login();
        return await this.getSelf();
      default:
        break;
    }

    const selfData = res.data['Me'];
    const me = new Me(
      selfData['Account']['Id'],
      selfData['Account']['UserId'],
      selfData['Account']['FirstName'],
      selfData['Account']['LastName'],
      selfData['Account']['Email'],
      selfData['Account']['Login'],
      selfData['Account']['IsPremium'],
      selfData['Account']['IsPremiumDemo'],
      selfData['Account']['ExpiredPremiumDate'],
      selfData['Class']['Id']
    );
    return me;
  }
}
