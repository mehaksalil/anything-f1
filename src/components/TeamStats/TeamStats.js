import "./TeamStats.css";

export default function TeamStats() {
  const teams = [
    {
      name: "Red Bull Racing",
      base: "Milton Keynes, UK",
      championships: 6,
      wins: 118,
      poles: 97,
      fastestLaps: 93,
      image: "redbull.png",
    },
    {
      name: "Mercedes-AMG Petronas",
      base: "Brackley, UK",
      championships: 8,
      wins: 125,
      poles: 135,
      fastestLaps: 98,
      image: "mercedes.png",
    },
    {
      name: "Scuderia Ferrari",
      base: "Maranello, Italy",
      championships: 16,
      wins: 244,
      poles: 249,
      fastestLaps: 259,
      image: "ferrari.png",
    },
  ];

  return (
    <div className="team-stats">
      <h2>Team Stats</h2>
      <div className="team-grid">
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <img src={team.image} alt={team.name} className="team-image" />
            <h3>{team.name}</h3>
            <p className="team-base">Base: {team.base}</p>
            <ul>
              <li><strong>Championships:</strong> {team.championships}</li>
              <li><strong>Wins:</strong> {team.wins}</li>
              <li><strong>Poles:</strong> {team.poles}</li>
              <li><strong>Fastest Laps:</strong> {team.fastestLaps}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
