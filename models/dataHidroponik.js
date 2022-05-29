class DataHidroponik {
    constructor(id, id_hidroponik, waktu, tds, ph,
        ec, humidity, temperature, light_intense, action, action_taken) {
            this.id = id;
            this.id_hidroponik = id_hidroponik;
            this.waktu = waktu;
            this.tds = tds;
            this.ph = ph;
            this.ec = ec;
            this.humidity = humidity;
            this.temperature = temperature;
            this.light_intense = light_intense;
            this.action = action;
            this.action_taken = action_taken;
    }
}

module.exports = DataHidroponik;