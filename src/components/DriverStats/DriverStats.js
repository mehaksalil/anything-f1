import "./DriverStats.css";

export default function DriverStats() {
  const drivers = [
    {
      name: "Max Verstappen",
      team: "Red Bull Racing",
      country: "Netherlands",
      championships: 3,
      wins: 54,
      podiums: 95,
      poles: 36,
      image: "verstappen.png",
    },
    {
      name: "Lewis Hamilton",
      team: "Mercedes-AMG Petronas",
      country: "United Kingdom",
      championships: 7,
      wins: 103,
      podiums: 197,
      poles: 104,
      image: "hamilton.png",
    },
    {
      name: "Charles Leclerc",
      team: "Scuderia Ferrari",
      country: "Monaco",
      championships: 0,
      wins: 5,
      podiums: 30,
      poles: 20,
      image: "leclerc.png",
    },
  ];

  return (
    <div className="driver-stats">
      <h2>Driver Stats</h2>
      <div className="driver-grid">
        {drivers.map((driver, index) => (
          <div key={index} className="driver-card">
            <img src={driver.image} alt={driver.name} className="driver-image" />
            <h3>{driver.name}</h3>
            <p className="team">{driver.team}</p>
            <ul>
              <li><strong>Country:</strong> {driver.country}</li>
              <li><strong>Championships:</strong> {driver.championships}</li>
              <li><strong>Wins:</strong> {driver.wins}</li>
              <li><strong>Podiums:</strong> {driver.podiums}</li>
              <li><strong>Poles:</strong> {driver.poles}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
