// 16 TAKIMLI CS2 VERİTABANI
const INITIAL_TEAMS = [
    // Legends
    { id: 1, name: "Natus Vincere", pot: "legends", color: "#ffee00", rating: 92, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 75, Inferno: 50, Nuke: 80, Ancient: 65, Anubis: 55, "Dust II": 70, Vertigo: 40 } },
    { id: 2, name: "Team Vitality", pot: "legends", color: "#ffd166", rating: 93, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 70, Inferno: 80, Nuke: 75, Ancient: 60, Anubis: 85, "Dust II": 65, Vertigo: 30 } },
    { id: 3, name: "FaZe Clan", pot: "legends", color: "#e63946", rating: 90, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 80, Inferno: 75, Nuke: 65, Ancient: 70, Anubis: 60, "Dust II": 55, Vertigo: 35 } },
    { id: 4, name: "G2 Esports", pot: "legends", color: "#ffffff", rating: 89, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 65, Inferno: 85, Nuke: 60, Ancient: 75, Anubis: 70, "Dust II": 80, Vertigo: 20 } },
    { id: 5, name: "MOUZ", pot: "legends", color: "#d90429", rating: 88, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 75, Inferno: 60, Nuke: 70, Ancient: 80, Anubis: 65, "Dust II": 50, Vertigo: 85 } },
    { id: 6, name: "Eternal Fire", pot: "legends", color: "#a8dadc", rating: 87, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 60, Inferno: 80, Nuke: 70, Ancient: 85, Anubis: 90, "Dust II": 75, Vertigo: 90 } },
    { id: 7, name: "Team Spirit", pot: "legends", color: "#2a9d8f", rating: 91, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 70, Inferno: 40, Nuke: 85, Ancient: 75, Anubis: 80, "Dust II": 85, Vertigo: 30 } },
    { id: 8, name: "Virtus.pro", pot: "legends", color: "#f77f00", rating: 86, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 55, Inferno: 70, Nuke: 45, Ancient: 70, Anubis: 60, "Dust II": 65, Vertigo: 75 } },

    // Challengers
    { id: 9, name: "Astralis", pot: "challengers", color: "#e71d36", rating: 85, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 60, Inferno: 65, Nuke: 80, Ancient: 50, Anubis: 45, "Dust II": 55, Vertigo: 40 } },
    { id: 10, name: "Team Liquid", pot: "challengers", color: "#1d3557", rating: 84, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 65, Inferno: 60, Nuke: 55, Ancient: 70, Anubis: 65, "Dust II": 70, Vertigo: 20 } },
    { id: 11, name: "Complexity", pot: "challengers", color: "#003049", rating: 83, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 55, Inferno: 50, Nuke: 65, Ancient: 60, Anubis: 70, "Dust II": 50, Vertigo: 60 } },
    { id: 12, name: "Heroic", pot: "challengers", color: "#ba181b", rating: 84, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 60, Inferno: 55, Nuke: 70, Ancient: 65, Anubis: 50, "Dust II": 45, Vertigo: 55 } },
    { id: 13, name: "The MongolZ", pot: "challengers", color: "#fcbf49", rating: 85, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 80, Inferno: 60, Nuke: 50, Ancient: 75, Anubis: 70, "Dust II": 60, Vertigo: 30 } },
    { id: 14, name: "FURIA", pot: "challengers", color: "#ffffff", rating: 82, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 50, Inferno: 60, Nuke: 65, Ancient: 55, Anubis: 40, "Dust II": 60, Vertigo: 65 } },
    { id: 15, name: "GamerLegion", pot: "challengers", color: "#457b9d", rating: 81, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 55, Inferno: 45, Nuke: 60, Ancient: 65, Anubis: 60, "Dust II": 40, Vertigo: 50 } },
    { id: 16, name: "Aurora", pot: "challengers", color: "#06d6a0", rating: 82, wins: 0, losses: 0, status: "active", mapStats: { Mirage: 60, Inferno: 40, Nuke: 80, Ancient: 60, Anubis: 50, "Dust II": 55, Vertigo: 40 } }
];

let teams = JSON.parse(JSON.stringify(INITIAL_TEAMS));
const MAP_POOL = ["Mirage", "Inferno", "Nuke", "Ancient", "Anubis", "Dust II", "Vertigo"];

const ROUND_EVENTS = [
    "{winner} A bölgesine hızlı giriş yaptı ve alanı temizledi.",
    "{winner} son saniyede bombayı kurmayı başardı.",
    "{winner} kusursuz bir savunma crossfire'ı ile geçit vermedi.",
    "{winner} 2v4 durumdan muhteşem bir clutch ile raundu çevirdi!",
    "{winner} rakibin agresif hamlesini AWP ile cezalandırdı.",
    "{winner} duman içi vuruşlarla rakibi gafil avladı.",
    "{winner} eko rauntta Deagle vuruşlarıyla sürpriz yaptı!"
];

// State (Durum)
let userTeam = null;
let opponentTeam = null;
let currentRoundNumber = 1;
let userCurrentMatch = null;
let currentRoundOtherMatches = [];
let remainingMaps = [...MAP_POOL];
let pickedMap = null;
let matchInterval = null;

// DOM Elemanları
const selectionScreen = document.getElementById("team-selection-screen");
const tournamentScreen = document.getElementById("tournament-screen");
const legendsGrid = document.getElementById("legends-grid");
const challengersGrid = document.getElementById("challengers-grid");
const currentUserTeamEl = document.getElementById("current-user-team");
const userTeamRecordEl = document.getElementById("user-team-record");
const roundIndicatorEl = document.getElementById("tournament-round-indicator");
const standingsBody = document.getElementById("standings-body");

// Fikstür DOM
const fixtureContainer = document.getElementById("fixture-container");
const fixtureUserTeam = document.getElementById("fixture-user-team");
const fixtureOpponentTeam = document.getElementById("fixture-opponent-team");
const roundFixturesList = document.getElementById("round-fixtures-list");
const goToVetoBtn = document.getElementById("go-to-veto-btn");

// Veto DOM
const vetoContainer = document.getElementById("veto-container");
const vetoTurnBadge = document.getElementById("veto-turn-badge");
const vetoStatusText = document.getElementById("veto-status-text");
const mapPoolGrid = document.getElementById("map-pool-grid");

// Canlı Maç DOM
const matchLiveContainer = document.getElementById("match-live-container");
const liveTeamA = document.getElementById("live-team-a");
const liveTeamB = document.getElementById("live-team-b");
const liveTeamAMapStat = document.getElementById("live-team-a-map-stat");
const liveTeamBMapStat = document.getElementById("live-team-b-map-stat");
const liveScoreA = document.getElementById("live-score-a");
const liveScoreB = document.getElementById("live-score-b");
const liveMapBadge = document.getElementById("live-map-badge");
const tickerLog = document.getElementById("ticker-log");
const startMatchBtn = document.getElementById("start-match-btn");
const fastForwardBtn = document.getElementById("fast-forward-btn");

// Tur Sonu DOM
const roundSummaryContainer = document.getElementById("round-summary-container");
const otherMatchesList = document.getElementById("other-matches-list");
const nextRoundBtn = document.getElementById("next-round-btn");
const normalSummaryFlow = document.getElementById("normal-summary-flow");
const tournamentEndBanner = document.getElementById("tournament-end-banner");
const endBannerTitle = document.getElementById("end-banner-title");
const endBannerDesc = document.getElementById("end-banner-desc");
const restartTournamentBtn = document.getElementById("restart-tournament-btn");

// 1. TAKIMLARI SEÇME
function renderTeamPots() {
    legendsGrid.innerHTML = "";
    challengersGrid.innerHTML = "";

    teams.forEach(team => {
        const card = document.createElement("div");
        card.className = "team-card";
        card.style.borderLeft = `4px solid ${team.color}`;
        card.innerHTML = `
            <h4>${team.name}</h4>
            <span>Rating: ${team.rating}</span>
        `;
        card.addEventListener("click", () => selectUserTeam(team));

        if (team.pot === "legends") {
            legendsGrid.appendChild(card);
        } else {
            challengersGrid.appendChild(card);
        }
    });
}

function selectUserTeam(selected) {
    userTeam = teams.find(t => t.id === selected.id);
    currentUserTeamEl.textContent = userTeam.name;
    currentUserTeamEl.style.color = userTeam.color;

    selectionScreen.classList.add("hidden");
    tournamentScreen.classList.remove("hidden");

    currentRoundNumber = 1;
    generateSwissRound();
}

// 2. SWISS SİSTEMİ & EŞLEŞTİRME
function generateSwissRound() {
    roundIndicatorEl.textContent = `RAUNT ${currentRoundNumber}`;
    renderStandings();

    // Aktif takımları skorlarına göre grupla
    const activeTeams = teams.filter(t => t.status === "active");
    const scoreGroups = {};

    activeTeams.forEach(t => {
        const key = `${t.wins}-${t.losses}`;
        if (!scoreGroups[key]) scoreGroups[key] = [];
        scoreGroups[key].push(t);
    });

    const roundMatches = [];
    Object.keys(scoreGroups).forEach(groupKey => {
        const groupTeams = [...scoreGroups[groupKey]];
        groupTeams.sort(() => Math.random() - 0.5);

        while (groupTeams.length >= 2) {
            const teamA = groupTeams.pop();
            const teamB = groupTeams.pop();
            roundMatches.push({ teamA, teamB, played: false, scoreA: 0, scoreB: 0, map: "" });
        }
    });

    userCurrentMatch = roundMatches.find(m => m.teamA.id === userTeam.id || m.teamB.id === userTeam.id);
    currentRoundOtherMatches = roundMatches.filter(m => m !== userCurrentMatch);

    opponentTeam = userCurrentMatch.teamA.id === userTeam.id ? userCurrentMatch.teamB : userCurrentMatch.teamA;

    showFixtureScreen();
}

// 3. FİKSTÜR VE SIRADAKİ RAKİP EKRANI
function showFixtureScreen() {
    fixtureContainer.classList.remove("hidden");
    vetoContainer.classList.add("hidden");
    matchLiveContainer.classList.add("hidden");
    roundSummaryContainer.classList.add("hidden");

    fixtureUserTeam.textContent = userTeam.name;
    fixtureUserTeam.style.color = userTeam.color;

    fixtureOpponentTeam.textContent = opponentTeam.name;
    fixtureOpponentTeam.style.color = opponentTeam.color;

    roundFixturesList.innerHTML = "";
    currentRoundOtherMatches.forEach(m => {
        const item = document.createElement("div");
        item.className = "fixture-card";
        item.innerHTML = `
            <span>${m.teamA.name}</span>
            <span style="color:#e49126; font-size:11px;">VS</span>
            <span>${m.teamB.name}</span>
        `;
        roundFixturesList.appendChild(item);
    });
}

goToVetoBtn.addEventListener("click", () => {
    fixtureContainer.classList.add("hidden");
    initVetoProcess();
});

// 4. VETO AŞAMASI
// State içine sıra kontrol bayrağı ekliyoruz
let isUserTurn = false;

// 4. VETO AŞAMASI (DÜZELTİLMİŞ)
function initVetoProcess() {
    remainingMaps = [...MAP_POOL];
    pickedMap = null;
    isUserTurn = false; // Başlangıçta kullanıcı tıklayamaz

    vetoContainer.classList.remove("hidden");
    vetoStatusText.textContent = `${opponentTeam.name} harita yasaklamaya hazırlanıyor...`;
    vetoTurnBadge.textContent = "Rakip Banlıyor";

    renderMapVetoUI();
    setTimeout(() => opponentSmartBan(), 1000);
}

function renderMapVetoUI() {
    mapPoolGrid.innerHTML = "";
    MAP_POOL.forEach(mapName => {
        const btn = document.createElement("button");
        btn.className = "map-btn";

        const userStat = userTeam.mapStats[mapName] || 50;
        const oppStat = opponentTeam.mapStats[mapName] || 50;

        btn.innerHTML = `
            ${mapName}
            <small>Sen: %${userStat} | Rakip: %${oppStat}</small>
        `;

        if (!remainingMaps.includes(mapName)) {
            btn.classList.add("banned");
            btn.disabled = true;
        } else if (remainingMaps.length === 1) {
            btn.classList.add("selected-map");
            btn.disabled = true;
        } else {
            // Sıra kullanıcıda değilse butonları tık hissi vermemesi için devre dışı bırak
            btn.disabled = !isUserTurn;
            if (isUserTurn) {
                btn.addEventListener("click", () => userBanMap(mapName));
            }
        }

        mapPoolGrid.appendChild(btn);
    });
}

function opponentSmartBan() {
    if (remainingMaps.length <= 1) return;

    let worstMap = remainingMaps[0];
    let minScore = 999;

    remainingMaps.forEach(mapName => {
        const oppWinRate = opponentTeam.mapStats[mapName] || 50;
        const userWinRate = userTeam.mapStats[mapName] || 50;
        const dangerScore = oppWinRate - userWinRate;
        if (dangerScore < minScore) {
            minScore = dangerScore;
            worstMap = mapName;
        }
    });

    const index = remainingMaps.indexOf(worstMap);
    remainingMaps.splice(index, 1);

    // Rakip banını bitirdi, sıra kullanıcıya geçti
    isUserTurn = true;

    vetoStatusText.textContent = `${opponentTeam.name}, [${worstMap}] haritasını yasakladı. Sıra sende!`;
    vetoTurnBadge.textContent = "Senin Sıran";
    renderMapVetoUI();

    checkVetoStatus();
}

function userBanMap(mapName) {
    // Güvenlik kilidi: Sıra kullanıcıda değilse veya tıklama spamlanıyorsa engelle
    if (!isUserTurn) return;

    const index = remainingMaps.indexOf(mapName);
    if (index > -1) {
        // Kullanıcı tıkladığı an sırasını elinden al ve butonları kilitle
        isUserTurn = false;
        remainingMaps.splice(index, 1);

        vetoStatusText.textContent = `Sen [${mapName}] haritasını yasakladın. ${opponentTeam.name} düşünüyor...`;
        vetoTurnBadge.textContent = "Rakip Banlıyor";
        renderMapVetoUI();

        if (remainingMaps.length > 1) {
            setTimeout(() => opponentSmartBan(), 1000);
        } else {
            checkVetoStatus();
        }
    }
}

function checkVetoStatus() {
    if (remainingMaps.length === 1) {
        isUserTurn = false;
        pickedMap = remainingMaps[0];
        vetoStatusText.textContent = `Veto bitti! Seçilen Harita: [${pickedMap}]`;
        vetoTurnBadge.textContent = "Veto Tamam";
        renderMapVetoUI();

        setTimeout(setupLiveMatchScreen, 1200);
    }
}

// 5. YAVAŞ & OKUNABİLİR CANLI MAÇ
function setupLiveMatchScreen() {
    vetoContainer.classList.add("hidden");
    matchLiveContainer.classList.remove("hidden");

    const teamA = userCurrentMatch.teamA;
    const teamB = userCurrentMatch.teamB;

    liveTeamA.textContent = teamA.name;
    liveTeamA.style.color = teamA.color;
    liveTeamAMapStat.textContent = `WR: %${teamA.mapStats[pickedMap]}`;

    liveTeamB.textContent = teamB.name;
    liveTeamB.style.color = teamB.color;
    liveTeamBMapStat.textContent = `WR: %${teamB.mapStats[pickedMap]}`;

    liveScoreA.textContent = "0";
    liveScoreB.textContent = "0";
    liveMapBadge.textContent = `📍 Harita: ${pickedMap}`;
    tickerLog.innerHTML = `<p class="ticker-placeholder">Maç başladı! Rauntlar oynanıyor...</p>`;

    startMatchBtn.disabled = false;
    startMatchBtn.classList.remove("hidden");
    fastForwardBtn.classList.add("hidden");
}

startMatchBtn.addEventListener("click", () => {
    startMatchBtn.disabled = true;
    startMatchBtn.classList.add("hidden");
    fastForwardBtn.classList.remove("hidden");
    tickerLog.innerHTML = "";

    const teamA = userCurrentMatch.teamA;
    const teamB = userCurrentMatch.teamB;

    const statA = (teamA.rating * 0.5) + (teamA.mapStats[pickedMap] * 0.5);
    const statB = (teamB.rating * 0.5) + (teamB.mapStats[pickedMap] * 0.5);
    const probA = statA / (statA + statB);

    let scoreA = 0;
    let scoreB = 0;
    let roundNum = 1;

    // Hız 1100 ms yapıldı: Rahat okunur
    matchInterval = setInterval(() => {
        const roundWinner = Math.random() < probA ? teamA : teamB;
        if (roundWinner === teamA) scoreA++; else scoreB++;

        liveScoreA.textContent = scoreA;
        liveScoreB.textContent = scoreB;

        const eventText = ROUND_EVENTS[Math.floor(Math.random() * ROUND_EVENTS.length)].replace("{winner}", roundWinner.name);
        const row = document.createElement("div");
        row.className = "ticker-row";
        row.style.borderLeftColor = roundWinner.color;
        row.innerHTML = `
            <span class="ticker-round-num">R${roundNum}</span>
            <span>${eventText}</span>
            <span class="ticker-mvp">MVP: ${roundWinner.name.split(" ")[0]}</span>
        `;
        tickerLog.prepend(row);
        roundNum++;

        if (scoreA === 13 || scoreB === 13) {
            clearInterval(matchInterval);
            fastForwardBtn.classList.add("hidden");
            finishMatch(scoreA, scoreB);
        }
    }, 1100);

    // Hızlı bitir butonu desteği
    fastForwardBtn.onclick = () => {
        clearInterval(matchInterval);
        fastForwardBtn.classList.add("hidden");

        while (scoreA < 13 && scoreB < 13) {
            if (Math.random() < probA) scoreA++; else scoreB++;
        }
        liveScoreA.textContent = scoreA;
        liveScoreB.textContent = scoreB;
        finishMatch(scoreA, scoreB);
    };
});

function finishMatch(scoreA, scoreB) {
    userCurrentMatch.scoreA = scoreA;
    userCurrentMatch.scoreB = scoreB;
    userCurrentMatch.map = pickedMap;
    userCurrentMatch.played = true;

    if (scoreA > scoreB) {
        userCurrentMatch.teamA.wins++;
        userCurrentMatch.teamB.losses++;
    } else {
        userCurrentMatch.teamB.wins++;
        userCurrentMatch.teamA.losses++;
    }

    simulateOtherMatches();
    userTeamRecordEl.textContent = `${userTeam.wins} - ${userTeam.losses}`;
    renderStandings();

    setTimeout(showRoundSummary, 1200);
}

// 6. DİĞER MAÇLARI SİMÜLE ETME VE SONUÇLAR
function simulateOtherMatches() {
    currentRoundOtherMatches.forEach(m => {
        const randomMap = MAP_POOL[Math.floor(Math.random() * MAP_POOL.length)];
        const statA = (m.teamA.rating * 0.5) + (m.teamA.mapStats[randomMap] * 0.5);
        const statB = (m.teamB.rating * 0.5) + (m.teamB.mapStats[randomMap] * 0.5);
        const probA = statA / (statA + statB);

        m.map = randomMap;
        m.played = true;

        if (Math.random() < probA) {
            m.scoreA = 13;
            m.scoreB = Math.floor(Math.random() * 8) + 4;
            m.teamA.wins++;
            m.teamB.losses++;
        } else {
            m.scoreB = 13;
            m.scoreA = Math.floor(Math.random() * 8) + 4;
            m.teamB.wins++;
            m.teamA.losses++;
        }
    });
}

function showRoundSummary() {
    matchLiveContainer.classList.add("hidden");
    roundSummaryContainer.classList.remove("hidden");
    otherMatchesList.innerHTML = "";

    // Kendi maçımız da sonuç listesinde şık şekilde görünsün
    const allPlayedMatches = [userCurrentMatch, ...currentRoundOtherMatches];

    allPlayedMatches.forEach(m => {
        const item = document.createElement("div");
        const winnerIsA = m.scoreA > m.scoreB;
        item.className = `fixture-card ${winnerIsA ? 'winner-a' : 'winner-b'}`;
        item.innerHTML = `
            <span style="font-weight:${winnerIsA ? 'bold' : 'normal'}">${m.teamA.name}</span>
            <span class="fixture-score">${m.scoreA} : ${m.scoreB}</span>
            <span style="font-weight:${!winnerIsA ? 'bold' : 'normal'}">${m.teamB.name}</span>
            <span style="color:#e49126; font-size:11px;">📍 ${m.map}</span>
        `;
        otherMatchesList.appendChild(item);
    });

    teams.forEach(team => {
        if (team.wins === 3) team.status = "advanced";
        if (team.losses === 3) team.status = "eliminated";
    });

    renderStandings();

    // Turnuva bitti mi kontrolü
    if (userTeam.status === "advanced") {
        normalSummaryFlow.classList.add("hidden");
        tournamentEndBanner.classList.remove("hidden");
        endBannerTitle.textContent = "🏆 ŞAMPİYON! PLAY-OFF'A YÜKSELDİNİZ!";
        endBannerTitle.style.color = "#06d6a0";
        endBannerDesc.textContent = `${userTeam.name} 3 galibiyet alarak Major Swiss aşamasını başarıyla tamamladı.`;
    } else if (userTeam.status === "eliminated") {
        normalSummaryFlow.classList.add("hidden");
        tournamentEndBanner.classList.remove("hidden");
        endBannerTitle.textContent = "❌ ELENDİNİZ!";
        endBannerTitle.style.color = "#e63946";
        endBannerDesc.textContent = `${userTeam.name} 3 mağlubiyet alarak turnuvaya veda etti.`;
    } else {
        normalSummaryFlow.classList.remove("hidden");
        tournamentEndBanner.classList.add("hidden");
    }
}

nextRoundBtn.addEventListener("click", () => {
    currentRoundNumber++;
    generateSwissRound();
});

// 7. YENİDEN BAŞLATMA
restartTournamentBtn.addEventListener("click", () => {
    teams = JSON.parse(JSON.stringify(INITIAL_TEAMS));
    tournamentScreen.classList.add("hidden");
    selectionScreen.classList.remove("hidden");
    renderTeamPots();
});

// 8. SWISS SIRALAMASINI ÇİZME
function renderStandings() {
    standingsBody.innerHTML = "";
    const sortedTeams = [...teams].sort((a, b) => b.wins - a.wins || a.losses - b.losses);

    sortedTeams.forEach(t => {
        const tr = document.createElement("tr");
        let statusBadge = `<span class="status-active">Devam Ediyor</span>`;
        if (t.status === "advanced") statusBadge = `<span class="status-advanced">Play-off'ta</span>`;
        if (t.status === "eliminated") statusBadge = `<span class="status-eliminated">Elendi</span>`;

        tr.innerHTML = `
            <td><strong style="color:${t.color}">${t.name}</strong> ${t.id === userTeam?.id ? "(Sen)" : ""}</td>
            <td>${t.wins}</td>
            <td>${t.losses}</td>
            <td>${statusBadge}</td>
        `;
        standingsBody.appendChild(tr);
    });
}

renderTeamPots();