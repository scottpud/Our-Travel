function updateLondonTime() {
    const now = new Date()
    const londonTime = now.toLocaleTimeString('en-GB', { 
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
   
    document.getElementById('london-time').textContent = `Current time in London: ${londonTime}`;
}

setInterval(updateLondonTime, 1000);

updateLondonTime();

