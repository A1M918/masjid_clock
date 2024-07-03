let namazTimings;

setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    // updateTimeZones();
    }, 1000);

    function updateTimes(prayerTimings) {
        const tbody = document.getElementById('prayer-times');
            prayerTimings.forEach(prayer => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const timeCell = document.createElement('td');
        
                nameCell.textContent = prayer.name.toUpperCase();
                timeCell.textContent = prayer.time;
        
                row.appendChild(nameCell);
                row.appendChild(timeCell);
                tbody.appendChild(row);
            });             
    }

    const namazNames = ['asr', 'fajr', 'isha', 'maghrib', 'zuhr'];

    // updateTimeZones(); // Initial call to set the time zones

    async function getNamazTimings() {
        const {data: {data: namaTimings}} = await axios.get('https://masjidal.com/api/v1/time/range?masjid_id=zKzoboLO');
        
        const salah = Object.keys(namaTimings.salah[0]).map((k) => {
            if(namazNames.indexOf(k)>=0){
                return {name: k, time: namaTimings.salah[0][k]}
            }
        }).filter((x) => x)
        console.log(salah);
        console.log(namaTimings);
        updateTimes(salah);
    }
    getNamazTimings()
    // initTime();