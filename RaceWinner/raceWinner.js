

const ex = [
    { name: 'Samuel', time: '05:42:14' },
    { name: 'Fred', time: '05:12:53' },
    { name: 'Fred2', time: 'dnf' },
    { name: 'Cynthia', time: 'dnf' }
]

const getMilliseconds = (h, m, s) => ((h * 60 * 60 + m * 60 + s) * 1000)

const convertMsToTime = (ms) => {

    console.log({ ms })

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
        seconds,
    )}`;
}

const raceWinner = (racers) => {
    const sortedRacers = racers.sort((racer1, racer2) => {

        if (racer1.time === 'dnf') return 1

        const splitTime1 = racer1.time.split(":")
        const splitTime2 = racer2.time.split(":")

        const racer1Time = getMilliseconds(splitTime1[0], splitTime1[1], splitTime1[2])
        const racer2Time = getMilliseconds(splitTime2[0], splitTime2[1], splitTime2[2])

        return racer1Time - racer2Time
    })

    if (sortedRacers.every(racer => racer.time === "dnf")) return "There is no winner"

    if (sortedRacers.filter(racer => racer.time !== "dnf").length === 1) {
        const winner = sortedRacers.find(racer => racer.time !== "dnf")
        return `${winner.name} won by no contest`
    }


    const firstPos = sortedRacers[0]
    const secondPos = sortedRacers[1]

    const firstPosTime = firstPos.time.split(":")
    const secondPosTime = secondPos.time.split(":")

    const timeDif = getMilliseconds(secondPosTime[0], secondPosTime[1], secondPosTime[2]) - getMilliseconds(firstPosTime[0], firstPosTime[1], firstPosTime[2])

    return `${firstPos.name} won by ${convertMsToTime(timeDif)}`
}

console.log(raceWinner(ex))