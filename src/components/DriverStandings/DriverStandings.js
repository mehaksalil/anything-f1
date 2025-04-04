import React, { useState } from 'react';

const CombinedStandings = () => {
  const [activeTab, setActiveTab] = useState('drivers');
  
  const driverData = [
    { 
      position: 1, 
      driver: "Max Verstappen", 
      country: "🇳🇱", 
      team: "Red Bull Racing", 
      points: 395,
      wins: 12
    },
    { 
      position: 2, 
      driver: "Lewis Hamilton", 
      country: "🇬🇧", 
      team: "Mercedes", 
      points: 318,
      wins: 3
    },
    { 
      position: 3, 
      driver: "Lando Norris", 
      country: "🇬🇧", 
      team: "McLaren", 
      points: 302,
      wins: 2
    },
    { 
      position: 4, 
      driver: "Charles Leclerc", 
      country: "🇲🇨", 
      team: "Ferrari", 
      points: 295,
      wins: 3
    },
    { 
      position: 5, 
      driver: "Carlos Sainz", 
      country: "🇪🇸", 
      team: "Ferrari", 
      points: 243,
      wins: 1
    },
    { 
      position: 6, 
      driver: "Oscar Piastri", 
      country: "🇦🇺", 
      team: "McLaren", 
      points: 237,
      wins: 2
    },
    { 
      position: 7, 
      driver: "Sergio Perez", 
      country: "🇲🇽", 
      team: "Red Bull Racing", 
      points: 231,
      wins: 1
    },
    { 
      position: 8, 
      driver: "George Russell", 
      country: "🇬🇧", 
      team: "Mercedes", 
      points: 226,
      wins: 1
    },
    { 
      position: 9, 
      driver: "Fernando Alonso", 
      country: "🇪🇸", 
      team: "Aston Martin", 
      points: 86,
      wins: 0
    },
    { 
      position: 10, 
      driver: "Lance Stroll", 
      country: "🇨🇦", 
      team: "Aston Martin", 
      points: 48,
      wins: 0
    }
  ];

  // Sample team standings data
  const teamData = [
    { 
      position: 1, 
      team: "Red Bull Racing", 
      points: 626,
      wins: 13,
      color: "#0600EF"
    },
    { 
      position: 2, 
      team: "Ferrari", 
      points: 538,
      wins: 4,
      color: "#DC0000"
    },
    { 
      position: 3, 
      team: "McLaren", 
      points: 539,
      wins: 4,
      color: "#FF8700"
    },
    { 
      position: 4, 
      team: "Mercedes", 
      points: 544,
      wins: 4,
      color: "#00D2BE"
    },
    { 
      position: 5, 
      team: "Aston Martin", 
      points: 134,
      wins: 0,
      color: "#006F62"
    },
    { 
      position: 6, 
      team: "Alpine", 
      points: 45,
      wins: 0,
      color: "#0090FF"
    },
    { 
      position: 7, 
      team: "Williams", 
      points: 21,
      wins: 0,
      color: "#005AFF"
    },
    { 
      position: 8, 
      team: "Racing Bulls", 
      points: 16,
      wins: 0,
      color: "#2B4562"
    },
    { 
      position: 9, 
      team: "Stake F1 Team", 
      points: 10,
      wins: 0,
      color: "#900000"
    },
    { 
      position: 10, 
      team: "Haas F1 Team", 
      points: 8,
      wins: 0,
      color: "#FFFFFF"
    }
  ];

  // Function to get team color
  const getTeamColor = (team) => {
    const teamColors = {
      "Red Bull Racing": "#0600EF",
      "Mercedes": "#00D2BE",
      "Ferrari": "#DC0000",
      "McLaren": "#FF8700",
      "Aston Martin": "#006F62",
      "Alpine": "#0090FF",
      "Williams": "#005AFF",
      "AlphaTauri": "#2B4562",
      "Alfa Romeo": "#900000",
      "Haas F1 Team": "#FFFFFF"
    };
    return teamColors[team] || "#333333";
  };

  return (
    <div className="standings-container">
      <h2 className="standings-title">F1 Standings</h2>
      
      <div className="standings-tab-container">
        <div className="standings-tabs">
          <button 
            className={`tab-button ${activeTab === 'drivers' ? 'active' : ''}`}
            onClick={() => setActiveTab('drivers')}
          >
            Drivers
          </button>
          <button 
            className={`tab-button ${activeTab === 'teams' ? 'active' : ''}`}
            onClick={() => setActiveTab('teams')}
          >
            Constructors
          </button>
        </div>
      </div>
      
      <div className="standings-table-container">
        {activeTab === 'drivers' ? (
          <table className="standings-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {driverData.map((driver) => (
                <tr key={driver.position}>
                  <td className="position">{driver.position}</td>
                  <td className="driver">
                    <span className="country-flag">{driver.country}</span>
                    {driver.driver}
                  </td>
                  <td>
                    <span 
                      className="team-indicator" 
                      style={{ backgroundColor: getTeamColor(driver.team) }}
                    ></span>
                    {driver.team}
                  </td>
                  <td className="points">{driver.points}</td>
                  <td className="wins">{driver.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="standings-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Team</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((team) => (
                <tr key={team.position}>
                  <td className="position">{team.position}</td>
                  <td className="team">
                    <span 
                      className="team-color" 
                      style={{ backgroundColor: team.color }}
                    ></span>
                    {team.team}
                  </td>
                  <td className="points">{team.points}</td>
                  <td className="wins">{team.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CombinedStandings;