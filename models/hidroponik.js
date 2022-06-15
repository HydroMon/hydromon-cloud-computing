class Hidroponik {
    constructor(id, nama_hidroponik, lokasi_hidroponik,
        pemilik, token_alat) {
            this.id = id;
            this.nama_hidroponik = nama_hidroponik;
            this.lokasi_hidroponik = lokasi_hidroponik;
            this.pemilik = pemilik;
            this.token_alat = token_alat;
    }
}

module.exports = Hidroponik;