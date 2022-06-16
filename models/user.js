class User {
    constructor(id, id_hidroponik, nama_lengkap, email,
        password, username, telepon, role) {
            this.id = id;
            this.id_hidroponik = id_hidroponik;
            this.nama_lengkap = nama_lengkap;
            this.email = email;
            this.password = password;
            this.username = username;
            this.telepon = telepon;
            this.role = role;
    }
}

module.exports = User;