class User {
    constructor(id, nama_lengkap, email,
        password, username, telepon, role) {
            this.id = id;
            this.nama_lengkap = nama_lengkap;
            this.email = email;
            this.password = password;
            this.username = username;
            this.telepon = telepon;
            this.role = role;
    }
}

module.exports = User;