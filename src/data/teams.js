export const teams = [
    {
      id: 1,
      name: "Red Bull Racing",
      fullName: "Oracle Red Bull Racing",
      base: "Milton Keynes, United Kingdom",
      teamPrincipal: "Christian Horner",
      powerUnit: "Honda RBPT",
      firstTeamEntry: 2005,
      championships: 6,
      wins: 115,
      polePositions: 96,
      fastestLaps: 93,
      currentDrivers: [
        { id: 1, name: "Max Verstappen", number: 1 },
        { id: 11, name: "Sergio Perez", number: 11 }
      ],
      logo: "/assets/teams/red_bull.png",
      carImage: "/assets/cars/red_bull.png",
      seasonResults: [
        { year: 2023, position: 1, points: 860, wins: 21 },
        { year: 2022, position: 1, points: 759, wins: 17 },
        { year: 2021, position: 1, points: 585.5, wins: 11 }
      ],
      colors: {
        primary: "#0600EF",
        secondary: "#1E41FF"
      }
    },
    {
      id: 2,
      name: "Ferrari",
      fullName: "Scuderia Ferrari",
      base: "Maranello, Italy",
      teamPrincipal: "Frédéric Vasseur",
      powerUnit: "Ferrari",
      firstTeamEntry: 1950,
      championships: 16,
      wins: 243,
      polePositions: 240,
      fastestLaps: 259,
      currentDrivers: [
        { id: 3, name: "Charles Leclerc", number: 16 },
        { id: 55, name: "Carlos Sainz", number: 55 }
      ],
      logo: "/assets/teams/ferrari.png",
      carImage: "/assets/cars/ferrari.png",
      seasonResults: [
        { year: 2023, position: 3, points: 406, wins: 1 },
        { year: 2022, position: 2, points: 554, wins: 4 },
        { year: 2021, position: 3, points: 323.5, wins: 0 }
      ],
      colors: {
        primary: "#DC0000",
        secondary: "#500000"
      }
    },
    {
      id: 3,
      name: "Mercedes",
      fullName: "Mercedes-AMG Petronas F1 Team",
      base: "Brackley, United Kingdom",
      teamPrincipal: "Toto Wolff",
      powerUnit: "Mercedes",
      firstTeamEntry: 1970,
      championships: 8,
      wins: 125,
      polePositions: 129,
      fastestLaps: 99,
      currentDrivers: [
        { id: 2, name: "Lewis Hamilton", number: 44 },
        { id: 63, name: "George Russell", number: 63 }
      ],
      logo: "/assets/teams/mercedes.png",
      carImage: "/assets/cars/mercedes.png",
      seasonResults: [
        { year: 2023, position: 2, points: 409, wins: 1 },
        { year: 2022, position: 3, points: 515, wins: 1 },
        { year: 2021, position: 1, points: 613.5, wins: 9 }
      ],
      colors: {
        primary: "#00D2BE",
        secondary: "#00A09B"
      }
    }
  ];
  