class Hidroponik {
    constructor(id, nama_hidroponik, lokasi_hidroponik,
        pemilik, token_alat) {
            this.id = id;
            this.nama_hidroponik = nama_hidroponik;
            this.lokasi_hidroponik = lokasi_hidroponik;
            // this.lokasi_hidroponik.jalan = jalan;
            // this.lokasi_hidroponik.kelurahan_desa = kelurahan_desa;
            // this.lokasi_hidroponik.kabupaten_kota = kabupaten_kota;
            // this.lokasi_hidroponik.provinsi = provinsi;
            // this.lokasi_hidroponik.latitude = latitude;
            // this.lokasi_hidroponik.longitude = longitude;
            this.pemilik = pemilik;
            this.token_alat = token_alat;
    }
}

module.exports = Hidroponik;