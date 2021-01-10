const StorageController = {
  keys: {
    'token': '@NEST_AUTH:AUTH_TOKEN',
    'id': '@NEST_AUTH:USER_ID',
  },
  saveUserInfo(id: number, token: string) {
    this.saveToken(token);
    this.saveID(id);
  },
  getUserID(): number | undefined {
    const id = localStorage.getItem(this.keys['id']);

    if(id === null) {
      return;
    }

    return Number(id);
  },
  saveID(id: number) {
    localStorage.setItem(this.keys['id'], String(id));
  },
  saveToken(token: string) {
    localStorage.setItem(this.keys['token'], token);
  },
  getToken() {
    const token = localStorage.getItem(this.keys['token']);

    if(token === null) {
      return '';
    }

    return token;
  },
  clearAll() {
    localStorage.clear();
  }
}

export default StorageController;
