import DB from './db';

export default {
    login(req, cb) {
        const hasCallback = (typeof cb === 'function');

        if (localStorage.token) {
            if (hasCallback) {
                cb(true);
            }
        } else {
            pretendRequest(req, (res) => {
                if (res.error) {
                    if (hasCallback) {
                        cb(false, res);
                    }
                } else {
                    localStorage.token = res.token;
                    if (hasCallback) {
                        cb(true);
                    }
                    this.onChange(true);
                }
            });
        }
    },
    logout(cb) {
        localStorage.removeItem('token');
        if (typeof cb === 'function') {
            cb();
        }
        this.onChange(false);
    },
    getToken() {
        return localStorage.token;
    },
    loggedIn() {
        return !!this.getToken();
    },
    username() {
        let userData = DB.get('users', this.getToken());
        return userData ? userData.username : null;
    },
    userId(){
        let userData = DB.get('users', this.getToken());
        return userData ? userData.id : null;
    },

    onChange(authenticated) {
        this.onChangeTriggers(authenticated);
        return authenticated;
    },

    onChangeTriggersData: [],
    onChangeTriggers(result) {
        this.onChangeTriggersData.forEach((fn) => {
            fn(result);
        });
    }
};

function pretendRequest(req, cb) {
    let users;
    let authenticated = false;
    let token = false;
    let lastUserID = 0;

    if (!req.username) {
        return cb({
            error: 'Please enter username'
        });
    }

    if (!req.password) {
        return cb({
            error: 'Please enter password'
        });
    }

    users = DB.get('users');

    for (let key in users) {
        if (users[key].username === req.username) {
            if (users[key].password === req.password) {
                authenticated = true;
                token = key;
                break;
            } else {
                return cb({
                    error: 'Invalid password!'
                });
            }
        }
    }

    if (!authenticated) {
        lastUserID = DB.getLastID('users');
        token = DB.uniq();

        DB.set('users', {
            [token]: {
                id: lastUserID + 1,
                username: req.username,
                password: req.password
            }
        });
    }

    cb({
        token: token
    });
}
