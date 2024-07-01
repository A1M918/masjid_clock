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

    updateTimeZones();
    }, 1000);


    function updateTimeZones() {
        const timeZones = [
            { id: 'new-york', timeZone: 'America/New_York' },
            { id: 'london', timeZone: 'Europe/London' },
            { id: 'tokyo', timeZone: 'Asia/Tokyo' },
            { id: 'sydney', timeZone: 'Australia/Sydney' },
            { id: 'paris', timeZone: 'Europe/Paris' },
            { id: 'mumbai', timeZone: 'Asia/Kolkata' },
            { id: 'los-angeles', timeZone: 'America/Los_Angeles' }
        ];
    
        timeZones.forEach(zone => {
            const now = new Date().toLocaleTimeString('en-US', { timeZone: zone.timeZone });
            document.getElementById(zone.id).textContent = now;
        });
    }

    updateTimeZones(); // Initial call to set the time zones