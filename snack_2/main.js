/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0. */

const teams = [
    {
        teamName: 'Inter',
        points: 0,
        faults: 0
    },

    {
        teamName: 'Juventus',
        points: 0,
        faults: 0
    },

    {
        teamName: 'Milan',
        points: 0,
        faults: 0
    },

    {
        teamName: 'Lazio',
        points: 0,
        faults: 0
    }
]

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];

    team.points = Math.floor(Math.random() * 100) + 1
    team.faults = Math.floor(Math.random() * 20) + 1

}

console.log(teams);