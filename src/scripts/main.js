AOS.init();

const dataOfTheEvent =  new Date('Jul 18, 2024 00:00:00');
const endOfEventTime = dataOfTheEvent.getTime();

const hourCounter = setInterval(function() {
    const now = new Date();
    const currentTime = now.getTime(); 

    const distanceToTheEvent = endOfEventTime - currentTime;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysUntilTheEvent = Math.floor(distanceToTheEvent / dayInMs)
    console.log(daysUntilTheEvent);
    const hoursUntilTheEvent = Math.floor((distanceToTheEvent % dayInMs) / hourInMs);
    console.log(hoursUntilTheEvent);
    const minutesUntilTheEvent = Math.floor(distanceToTheEvent % hourInMs / minuteInMs);
    console.log(minutesUntilTheEvent);
    const secondsUntilTheEvent = Math.floor((distanceToTheEvent % minuteInMs) / 1000);
    console.log(secondsUntilTheEvent);

    document.getElementById('contador').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`

    if (daysUntilTheEvent < 0) {
        clearInterval(hourCounter)
        document.getElementById('contador').innerHTML = `Evento expirado!!`;
    };
}, 1000);