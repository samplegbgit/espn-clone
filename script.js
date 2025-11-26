const scores = [
  { team1: "IND", team2: "NZ", score: "310/7", status: "Final" },
  { team1: "LAL", team2: "GSW", score: "102 - 98", status: "Live" }
];

const scoreContainer = document.getElementById("score-container");

scores.forEach(s => {
  scoreContainer.innerHTML += `
    <div class="card">
      <h3>${s.team1} vs ${s.team2}</h3>
      <p><strong>Score:</strong> ${s.score}</p>
      <p><strong>Status:</strong> ${s.status}</p>
    </div>
  `;
});
const news = [
  { title: "India wins by 50 runs", desc: "Dominating performance in ODI series." },
  { title: "LeBron scores 40 points", desc: "Another big night for Lakers star." }
];

const newsContainer = document.getElementById("news-container");

news.forEach(n => {
  newsContainer.innerHTML += `
    <div class="card">
      <h3>${n.title}</h3>
      <p>${n.desc}</p>
    </div>
  `;
});
