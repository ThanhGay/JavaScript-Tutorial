// // log bug
function createLogger(namespace) {
    logger = (message) => console.log(`[${namespace}] ${message}`);
    
    return logger;
}


var logger1 = createLogger('Info');

// ==================== App ========================

// Register.js
const infoLogger = createLogger('Info');

infoLogger('Start send email');
infoLogger('Failed 1, resend...');
infoLogger('Send mail success!');

// ForgotPassword.js
const errorLogger = createLogger('Error');

errorLogger('Start to send mail');
errorLogger('Failed 1, resend...');
errorLogger('Send successful to user xxx!');



// lưu vào local storage
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        },
    }

    return storage;

}

// Profile.js
const ProfileSetting = createStorage('profile_setting')

ProfileSetting.set('fullname', 'Duc Thanh')
ProfileSetting.set('age', 21)
ProfileSetting.set('address', 'Ha Noi')

ProfileSetting.remove('address')

