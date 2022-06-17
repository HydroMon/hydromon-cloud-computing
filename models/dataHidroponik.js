class DataHidroponik {
    constructor(id, token_alat, date, time, tds, ph,
        ec, humidity, temperature, light_intense, label, accuracy, action, action_taken) {
            this.id = id;
            this.token_alat = token_alat;
            this.date = date;
            this.time = time;
            this.tds = tds;
            this.ph = ph;
            this.ec = ec;
            this.humidity = humidity;
            this.temperature = temperature;
            this.light_intense = light_intense;
            this.label = label;
            this.accuracy = accuracy;
            this.action = action;
            this.action_taken = action_taken;
    }
}

module.exports = DataHidroponik;