// GÜNCEL 2026 EYLÜL TRANSFER SEZONU KADROLARI
const DATABASE = [
    { id: 1, name: "Natus Vincere", pot: "legends", color: "#ffee00", rating: 94, roster: ["Aleksib", "iM", "b1t", "w0nderful", "jL"], mapStats: { Mirage: 88, Inferno: 72, Nuke: 94, Ancient: 80, Anubis: 76, "Dust II": 86, Vertigo: 68 } },
    { id: 2, name: "Team Vitality", pot: "legends", color: "#ffd166", rating: 93, roster: ["apEX", "ZywOo", "flameZ", "ropz", "mezii"], mapStats: { Mirage: 84, Inferno: 95, Nuke: 88, Ancient: 78, Anubis: 92, "Dust II": 82, Vertigo: 65 } },
    { id: 3, name: "G2 Esports", pot: "legends", color: "#ffffff", rating: 92, roster: ["NiKo", "m0NESY", "huNter-", "malbsMd", "Snax"], mapStats: { Mirage: 85, Inferno: 91, Nuke: 78, Ancient: 88, Anubis: 84, "Dust II": 93, Vertigo: 62 } },
    { id: 4, name: "Team Spirit", pot: "legends", color: "#e5e7eb", rating: 92, roster: ["chopper", "sh1ro", "donk", "zont1x", "magixx"], mapStats: { Mirage: 86, Inferno: 68, Nuke: 92, Ancient: 89, Anubis: 91, "Dust II": 95, Vertigo: 66 } },
    { id: 5, name: "MOUZ", pot: "legends", color: "#d90429", rating: 90, roster: ["siuhy", "torzsi", "xertioN", "Jimpphat", "Brollan"], mapStats: { Mirage: 87, Inferno: 75, Nuke: 84, Ancient: 92, Anubis: 79, "Dust II": 72, Vertigo: 90 } },
    { id: 6, name: "FaZe Clan", pot: "legends", color: "#e63946", rating: 89, roster: ["karrigan", "rain", "frozen", "broky", "device"], mapStats: { Mirage: 92, Inferno: 89, Nuke: 82, Ancient: 85, Anubis: 76, "Dust II": 78, Vertigo: 72 } },
    { id: 7, name: "Eternal Fire", pot: "legends", color: "#38bdf8", rating: 88, roster: ["XANTARES", "woxic", "Wicadia", "Calyx", "Woro2k"], mapStats: { Mirage: 82, Inferno: 86, Nuke: 82, Ancient: 90, Anubis: 94, "Dust II": 88, Vertigo: 92 } },
    { id: 8, name: "Heroic", pot: "legends", color: "#dc2626", rating: 87, roster: ["sjuush", "TeSeS", "NertZ", "degster", "kyxsan"], mapStats: { Mirage: 76, Inferno: 74, Nuke: 85, Ancient: 79, Anubis: 72, "Dust II": 68, Vertigo: 74 } },
    { id: 9, name: "Astralis", pot: "challengers", color: "#ef4444", rating: 86, roster: ["stavn", "jabbi", "Staehr", "br0", "blameF"], mapStats: { Mirage: 78, Inferno: 82, Nuke: 91, Ancient: 72, Anubis: 70, "Dust II": 76, Vertigo: 70 } },
    { id: 10, name: "Team Liquid", pot: "challengers", color: "#38bdf8", rating: 85, roster: ["Twistzz", "NAF", "YEKINDAR", "ultimate", "Jorko"], mapStats: { Mirage: 80, Inferno: 76, Nuke: 72, Ancient: 83, Anubis: 78, "Dust II": 85, Vertigo: 64 } },
    { id: 11, name: "The MongolZ", pot: "challengers", color: "#facc15", rating: 85, roster: ["bLitz", "Techno", "Senzu", "mzinho", "910"], mapStats: { Mirage: 94, Inferno: 76, Nuke: 70, Ancient: 89, Anubis: 86, "Dust II": 83, Vertigo: 68 } },
    { id: 12, name: "Complexity", pot: "challengers", color: "#60a5fa", rating: 84, roster: ["JT", "floppy", "grim", "EliGE", "hallzerk"], mapStats: { Mirage: 72, Inferno: 70, Nuke: 79, Ancient: 76, Anubis: 83, "Dust II": 70, Vertigo: 75 } },
    { id: 13, name: "FURIA", pot: "challengers", color: "#f8fafc", rating: 84, roster: ["FalleN", "yuurih", "KSCERATO", "skullz", "exit"], mapStats: { Mirage: 70, Inferno: 75, Nuke: 79, Ancient: 72, Anubis: 68, "Dust II": 76, Vertigo: 82 } },
    { id: 14, name: "Virtus.pro", pot: "challengers", color: "#f97316", rating: 83, roster: ["Jame", "FL1T", "fame", "n0rb3r7", "electroNic"], mapStats: { Mirage: 74, Inferno: 88, Nuke: 68, Ancient: 84, Anubis: 78, "Dust II": 84, Vertigo: 85 } },
    { id: 15, name: "paiN Gaming", pot: "challengers", color: "#f87171", rating: 82, roster: ["biguzera", "nqz", "snow", "vsm", "piriajr"], mapStats: { Mirage: 68, Inferno: 74, Nuke: 72, Ancient: 64, Anubis: 70, "Dust II": 72, Vertigo: 84 } },
    { id: 16, name: "BIG", pot: "challengers", color: "#d1d5db", rating: 81, roster: ["tabseN", "JDC", "faveN", "gr1ks", "blameF"], mapStats: { Mirage: 75, Inferno: 70, Nuke: 78, Ancient: 74, Anubis: 80, "Dust II": 82, Vertigo: 68 } }, 
    { id: 17, name: "MIBR", pot: "contenders", color: "#a3e635", rating: 80, roster: ["drop", "brnz4n", "insani", "saffee", "exit"], mapStats: { Mirage: 72, Inferno: 70, Nuke: 75, Ancient: 68, Anubis: 70, "Dust II": 74, Vertigo: 76 } },
    { id: 18, name: "NIP", pot: "contenders", color: "#d9f99d", rating: 79, roster: ["REZ", "maxster", "r1nkle", "n0te", "MisteM"], mapStats: { Mirage: 70, Inferno: 68, Nuke: 76, Ancient: 74, Anubis: 72, "Dust II": 66, Vertigo: 74 } },
    { id: 19, name: "Aurora", pot: "contenders", color: "#2dd4bf", rating: 79, roster: ["MAJ3R", "Norwi", "Lack1", "KENSI", "r3salt"], mapStats: { Mirage: 70, Inferno: 66, Nuke: 83, Ancient: 73, Anubis: 71, "Dust II": 68, Vertigo: 82 } },
    { id: 20, name: "FlyQuest", pot: "contenders", color: "#14b8a6", rating: 78, roster: ["dexter", "Vexite", "aliStair", "Liazz", "INS"], mapStats: { Mirage: 74, Inferno: 68, Nuke: 72, Ancient: 70, Anubis: 76, "Dust II": 65, Vertigo: 70 } },
    { id: 21, name: "9z Team", pot: "contenders", color: "#8b5cf6", rating: 78, roster: ["max", "dgt", "MartinezSa", "buda", "HUASOPEEK"], mapStats: { Mirage: 76, Inferno: 72, Nuke: 78, Ancient: 75, Anubis: 74, "Dust II": 68, Vertigo: 62 } },
    { id: 22, name: "Wildcard", pot: "contenders", color: "#ef4444", rating: 77, roster: ["stanislaw", "mhL", "reck", "HexT", "phzy"], mapStats: { Mirage: 75, Inferno: 70, Nuke: 74, Ancient: 72, Anubis: 78, "Dust II": 68, Vertigo: 66 } },
    { id: 23, name: "ENCE", pot: "contenders", color: "#fdba74", rating: 76, roster: ["sdy", "podi", "Neityu", "F1KU", "kRaSnaL"], mapStats: { Mirage: 78, Inferno: 68, Nuke: 74, Ancient: 68, Anubis: 79, "Dust II": 66, Vertigo: 74 } },
    { id: 24, name: "FUT Esports", pot: "contenders", color: "#e30f16", rating: 77, roster: ["xfl0ud", "Krabeni", "dem0n", "cmtry", "dziugss"], mapStats: { Mirage: 80, Inferno: 75, Nuke: 70, Ancient: 72, Anubis: 76, "Dust II": 74, Vertigo: 68 } }
];

const MAP_THEMES = {
    "Mirage": "#d97706",
    "Inferno": "#f97316",
    "Nuke": "#3b82f6",
    "Ancient": "#10b981",
    "Anubis": "#facc15",
    "Dust II": "#eab308",
    "Vertigo": "#0ea5e9"
};
const MAP_POOL = Object.keys(MAP_THEMES);
const AWP_PLAYERS = ["ZywOo", "m0NESY", "sh1ro", "torzsi", "broky", "woxic", "degster", "dev1ce", "ultimate", "910", "hallzerk", "FalleN", "Jame", "nqz", "syrsoN", "saffee", "r1nkle", "aliStair", "MartinezSa", "phzy", "podi", "cmtry", "w0nderful", "mhL", "Woro2k"];

const GENERAL_EVENTS = [
    "{team} A sahasına hızlı sızarak kilidi açtı.",
    "{team} B sahasında harika bir savunma kurguladı.",
    "{player} kritik bir bireysel mücadele kazanarak raundu getirdi!",
    "{team} organizasyonu ile rakibe geçit vermedi.",
    "{player} smoke arkasından kusursuz bir sprey atarak ortalığı temizledi.",
    "{team} harita kontrolünü tamamen eline alarak raundu kopardı.",
    "{player} saniyesi saniyesine kusursuz bir zamanlamayla vurdu."
];

const ECO_EVENTS = [
    "{player} Deagle ile mucizevi skorlar çıkardı!",
    "{team} zayıf ekonomisine rağmen eko raundunu zekice kazandı."
];

const AWP_EVENTS = [
    "{player} AWP ile keskin nişancı üstünlüğünü kurdu.",
    "{player} AWP ile rakibin koridor geçişini tamamen kapattı."
];

let allTeams = [];
let userTeam = null;
let currentStage = 1;
let stageTeams = [];
let swissRound = 1;
let currentMatches = [];
let activeUserMatch = null;
let opponentTeam = null;

let remainingMaps = [];
let chosenMap = null;
let isUserVetoTurn = false;
let matchTimer = null;
let matchIsRunning = false;
let currentSpeedMultiplier = 1;
let isBo3Match = false;
let bo3Maps = [];
let bo3MapIndex = 0;
let bo3UserWins = 0;
let bo3OppWins = 0;
let vetoStep = 0;

let playoffBracket = { qf: [], sf: [], gf: [], champ: null };
let currentPlayoffIndex = 0;

const dom = {
    selScreen: document.getElementById("selection-screen"),
    tournScreen: document.getElementById("tournament-screen"),
    stageSubtitle: document.getElementById("stage-subtitle"),
    legendsList: document.getElementById("legends-list"),
    challengersList: document.getElementById("challengers-list"),
    contendersList: document.getElementById("contenders-list"),
    userTeamName: document.getElementById("user-team-name"),
    userTeamRecord: document.getElementById("user-team-record"),
    roundBadge: document.getElementById("tournament-round-badge"),
    hudOppName: document.getElementById("hud-opp-name"),
    hudOppRecord: document.getElementById("hud-opp-record"),
    swissHudBar: document.getElementById("swiss-hud-bar"),
    playoffBroadcastHud: document.getElementById("playoff-broadcast-hud"),
    bcUserName: document.getElementById("bc-user-name"),
    bcUserScore: document.getElementById("bc-user-score"),
    userColorAccent: document.getElementById("user-color-accent"),
    bcOppName: document.getElementById("bc-opp-name"),
    bcOppScore: document.getElementById("bc-opp-score"),
    oppColorAccent: document.getElementById("opp-color-accent"),
    bcStageTitle: document.getElementById("bc-stage-title"),
    bcMatchInfo: document.getElementById("bc-match-info"),
    swissLayout: document.getElementById("swiss-layout"),
    swissView: document.getElementById("swiss-view"),
    standingsBody: document.getElementById("standings-body"),
    bracketView: document.getElementById("bracket-view"),
    qfMatches: document.getElementById("qf-matches"),
    sfMatches: document.getElementById("sf-matches"),
    gfMatches: document.getElementById("gf-matches"),
    champName: document.getElementById("champion-team-name"),
    fixtureView: document.getElementById("fixture-view"),
    bannerUser: document.getElementById("banner-user"),
    bannerOpp: document.getElementById("banner-opp"),
    fixtureCardsGrid: document.getElementById("fixture-cards-grid"),
    vetoView: document.getElementById("veto-view"),
    vetoTurn: document.getElementById("veto-turn-indicator"),
    vetoLog: document.getElementById("veto-log"),
    mapPool: document.getElementById("map-pool-selection"),
    liveView: document.getElementById("live-match-view"),
    sbTeamA: document.getElementById("sb-team-a"),
    sbTeamB: document.getElementById("sb-team-b"),
    sbScoreA: document.getElementById("sb-score-a"),
    sbScoreB: document.getElementById("sb-score-b"),
    activeMapTag: document.getElementById("active-map-name"),
    speedSelect: document.getElementById("speed-select"),
    tickerFeed: document.getElementById("ticker-feed"),
    livePlayBtn: document.getElementById("live-play-btn"),
    liveSkipBtn: document.getElementById("live-skip-btn"),
    liveStatsArea: document.getElementById("live-stats-area"),
    ecoTeamA: document.getElementById("eco-team-a"),
    ecoTeamB: document.getElementById("eco-team-b"),
    tblTeamA: document.getElementById("tbl-team-a"),
    tblTeamB: document.getElementById("tbl-team-b"),
    tblBodyA: document.getElementById("tbl-body-a"),
    tblBodyB: document.getElementById("tbl-body-b"),
    summaryView: document.getElementById("summary-view"),
    summaryTitle: document.getElementById("summary-title"),
    bannerModal: document.getElementById("banner-modal"),
    modalTitle: document.getElementById("modal-title"),
    modalDesc: document.getElementById("modal-description"),
    modalBtn: document.getElementById("modal-btn"),
    modalSecBtn: document.getElementById("modal-sec-btn"),
    regularSummary: document.getElementById("regular-summary"),
    resultsGrid: document.getElementById("results-cards-grid"),
    nextActionBtn: document.getElementById("next-action-btn"),
    introOverlay: document.getElementById("intro-overlay"),
    introTeamA: document.getElementById("intro-team-a"),
    introTeamB: document.getElementById("intro-team-b"),
    confettiContainer: document.getElementById("confetti-container")
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
dom.speedSelect.addEventListener("change", (e) => { currentSpeedMultiplier = parseFloat(e.target.value); });

function initApp() {
    allTeams = JSON.parse(JSON.stringify(DATABASE));
    allTeams.forEach(t => {
        const item = document.createElement("div");
        item.className = "team-item";
        item.style.borderLeft = `3px solid ${t.color}`;
        item.style.setProperty("--team-color", t.color); 
        item.innerHTML = `<strong>${t.name}</strong> <span>${t.rating}</span>`;
        item.onclick = () => onSelectUserTeam(t);
        if (t.pot === "legends") dom.legendsList.appendChild(item);
        else if (t.pot === "challengers") dom.challengersList.appendChild(item);
        else dom.contendersList.appendChild(item);
    });
}

function onSelectUserTeam(team) {
    userTeam = allTeams.find(t => t.id === team.id);
    dom.userTeamName.textContent = userTeam.name; dom.userTeamName.style.color = userTeam.color;
    dom.selScreen.classList.add("hidden"); dom.tournScreen.classList.remove("hidden");
    if (userTeam.pot === "legends") { simulateOpeningStageFully(); startStage(2); } 
    else { startStage(1); }
}

function startStage(stageNumber) {
    currentStage = stageNumber; swissRound = 1; isBo3Match = false;
    dom.swissHudBar.classList.remove("hidden"); dom.playoffBroadcastHud.classList.add("hidden");
    dom.swissLayout.classList.remove("hidden");
    
    if (currentStage === 1) {
        dom.stageSubtitle.textContent = "AŞAMA 1: OPENING STAGE";
        stageTeams = allTeams.filter(t => t.pot === "challengers" || t.pot === "contenders");
    } else if (currentStage === 2) {
        dom.stageSubtitle.textContent = "AŞAMA 2: LEGENDS STAGE";
        const advTeams = allTeams.filter(t => t.status === "adv_opening");
        const legTeams = allTeams.filter(t => t.pot === "legends");
        stageTeams = [...legTeams, ...advTeams];
    }
    stageTeams.forEach(t => { t.wins = 0; t.losses = 0; t.status = "playing"; });
    updateUserBadge(); runSwissRound();
}

function simulateOpeningStageFully() {
    let pool = allTeams.filter(t => t.pot === "challengers" || t.pot === "contenders");
    pool.forEach(t => { t.wins = 0; t.losses = 0; t.status = "playing"; });
    finishSwissStage(pool, "adv_opening", "elm_opening");
}

function runSwissRound() {
    dom.roundBadge.textContent = `RAUNT ${swissRound}`; 
    renderSwissTable();
    
    const pool = stageTeams.filter(t => t.wins < 3 && t.losses < 3);
    const groups = {};
    pool.forEach(t => { let key = `${t.wins}-${t.losses}`; if (!groups[key]) groups[key] = []; groups[key].push(t); });
    
    currentMatches = [];
    Object.keys(groups).forEach(k => {
        let arr = [...groups[k]].sort(() => Math.random() - 0.5);
        while (arr.length >= 2) currentMatches.push({ teamA: arr.pop(), teamB: arr.pop(), scoreA: 0, scoreB: 0, map: "", resolved: false });
    });

    activeUserMatch = currentMatches.find(m => m.teamA.id === userTeam.id || m.teamB.id === userTeam.id);
    if (activeUserMatch) {
        opponentTeam = activeUserMatch.teamA.id === userTeam.id ? activeUserMatch.teamB : activeUserMatch.teamA;
        dom.hudOppName.textContent = opponentTeam.name; dom.hudOppName.style.color = opponentTeam.color;
        dom.hudOppRecord.textContent = `${opponentTeam.wins} - ${opponentTeam.losses}`; dom.hudOppRecord.classList.remove("hidden");
        isBo3Match = false; 
        showFixture();
    }
}

function showFixture() {
    dom.fixtureView.classList.remove("hidden"); 
    dom.vetoView.classList.add("hidden"); 
    dom.liveView.classList.add("hidden"); 
    dom.summaryView.classList.add("hidden");
    dom.swissView.classList.remove("hidden");

    dom.bannerUser.textContent = userTeam.name; dom.bannerUser.style.color = userTeam.color;
    dom.bannerOpp.textContent = opponentTeam.name; dom.bannerOpp.style.color = opponentTeam.color;
    dom.fixtureCardsGrid.innerHTML = "";
    currentMatches.filter(m => m !== activeUserMatch).forEach(m => {
        const div = document.createElement("div"); div.className = "mini-card";
        div.innerHTML = `<span style="color:${m.teamA.color}">${m.teamA.name}</span> <span class="clash-vs">VS</span> <span style="color:${m.teamB.color}">${m.teamB.name}</span>`;
        dom.fixtureCardsGrid.appendChild(div);
    });

    startVeto();
}

function calculateH2H(tA, tB, map) {
    let pA = Math.pow((tA.rating * 0.35) + (tA.mapStats[map] * 0.65), 3);
    let pB = Math.pow((tB.rating * 0.35) + (tB.mapStats[map] * 0.65), 3);
    let pctA = Math.round((pA / (pA + pB)) * 100);
    return { pctA: pctA, pctB: 100 - pctA };
}

function setVetoLog(text, isUserTurn = false, actionType = "") {
    if (!isUserTurn) {
        dom.vetoLog.innerHTML = text;
    } else {
        let color = actionType === "ban" ? "#ef4444" : "#10b981";
        let actionWord = actionType === "ban" ? "YASAKLA (BAN)" : "SEÇ (PICK)";
        dom.vetoLog.innerHTML = `<span style="color:${color}; font-size:14px; font-weight:800;">SIRA SENDE:</span> Haritayı ${actionWord}`;
    }
}

function startVeto() {
    dom.fixtureView.classList.add("hidden");
    dom.vetoView.classList.remove("hidden");
    dom.swissView.classList.add("hidden");

    remainingMaps = [...MAP_POOL]; chosenMap = null; bo3Maps = []; vetoStep = 0;

    if (!isBo3Match) {
        isUserVetoTurn = false; dom.vetoTurn.textContent = "Rakipte";
        setVetoLog(`${opponentTeam.name} düşünüyor...`);
        renderVetoMaps(); setTimeout(opponentBanBO1, 700);
    } else {
        isUserVetoTurn = false; dom.vetoTurn.textContent = "Rakipte";
        setVetoLog(`[BO3] ${opponentTeam.name} 1. yasaklamayı yapıyor...`);
        renderVetoMaps(); setTimeout(opponentVetoStepBO3, 800);
    }
}

function renderVetoMaps() {
    dom.mapPool.innerHTML = "";
    MAP_POOL.forEach(map => {
        const h2h = calculateH2H(userTeam, opponentTeam, map);
        const btn = document.createElement("button"); 
        btn.className = "map-card-btn";
        
        let statusBadge = "", isPicked = bo3Maps.includes(map), isBanned = !remainingMaps.includes(map) && !isPicked;

        if (isPicked) {
            let idx = bo3Maps.indexOf(map);
            btn.classList.add(idx === 2 ? "decider" : "picked"); 
            statusBadge = idx === 2 ? "DECIDER" : `${idx + 1}. HARİTA`; 
            btn.disabled = true;
        } else if (isBanned) {
            btn.classList.add("banned"); 
            statusBadge = "YASAKLANDI"; 
            btn.disabled = true;
        } else {
            btn.disabled = !isUserVetoTurn;
            if (isUserVetoTurn) btn.onclick = () => { if (!isBo3Match) userBanBO1(map); else userVetoActionBO3(map); };
        }
        btn.innerHTML = `<strong>${map}</strong><div class="map-power-bar"><div class="bar-u" style="width:${h2h.pctA}%; background:${userTeam.color};"></div><div class="bar-o" style="width:${h2h.pctB}%; background:${opponentTeam.color};"></div></div><div class="map-stats-text"><span>Sen: %${h2h.pctA}</span><span>Rakip: %${h2h.pctB}</span></div>${statusBadge ? `<span style="font-size:9px; font-weight:800; display:block; margin-top:4px;">${statusBadge}</span>` : ""}`;
        dom.mapPool.appendChild(btn);
    });
}

function opponentBanBO1() {
    if (remainingMaps.length <= 1) return;
    let worst = getWorstMap(opponentTeam, userTeam);
    remainingMaps.splice(remainingMaps.indexOf(worst), 1);
    dom.vetoTurn.textContent = "Senin Sıran"; isUserVetoTurn = true;
    setVetoLog("", true, "ban");
    renderVetoMaps();
    if (remainingMaps.length === 1) endBO1Veto();
}

function userBanBO1(map) {
    if (!isUserVetoTurn) return;
    isUserVetoTurn = false; remainingMaps.splice(remainingMaps.indexOf(map), 1);
    dom.vetoTurn.textContent = "Rakipte"; setVetoLog(`Rakip düşünüyor...`);
    renderVetoMaps();
    if (remainingMaps.length > 1) setTimeout(opponentBanBO1, 700); else endBO1Veto();
}

function endBO1Veto() {
    chosenMap = remainingMaps[0]; 
    let themeColor = MAP_THEMES[chosenMap] || "#38bdf8";
    setVetoLog(`Harita Belirlendi: <span style="color:${themeColor}; font-size:15px; font-weight:900;">${chosenMap}</span>`);
    renderVetoMaps(); setTimeout(startLiveMatch, 1100);
}

function opponentVetoStepBO3() {
    if (vetoStep === 0 || vetoStep === 4) {
        let worst = getWorstMap(opponentTeam, userTeam); remainingMaps.splice(remainingMaps.indexOf(worst), 1);
    } else if (vetoStep === 2) {
        let best = getBestMap(opponentTeam, userTeam); bo3Maps.push(best); remainingMaps.splice(remainingMaps.indexOf(best), 1);
    }
    vetoStep++; isUserVetoTurn = true; dom.vetoTurn.textContent = (vetoStep === 3) ? "Harita Seç" : "Harita Yasakla";
    setVetoLog("", true, (vetoStep === 3) ? "pick" : "ban");
    renderVetoMaps();
}

function userVetoActionBO3(map) {
    if (!isUserVetoTurn) return;
    isUserVetoTurn = false;
    if (vetoStep === 1 || vetoStep === 5) { remainingMaps.splice(remainingMaps.indexOf(map), 1); } 
    else if (vetoStep === 3) { bo3Maps.push(map); remainingMaps.splice(remainingMaps.indexOf(map), 1); }
    vetoStep++; renderVetoMaps();
    if (vetoStep < 6) { dom.vetoTurn.textContent = "Rakipte"; setVetoLog(`Rakip düşünüyor...`); setTimeout(opponentVetoStepBO3, 800); } 
    else {
        let decider = remainingMaps[0]; bo3Maps.push(decider);
        setVetoLog(`Veto Tamamlandı. 1: ${bo3Maps[0]} | 2: ${bo3Maps[1]} | Decider: ${bo3Maps[2]}`);
        renderVetoMaps(); bo3MapIndex = 0; chosenMap = bo3Maps[0]; setTimeout(startLiveMatch, 1400);
    }
}

function getWorstMap(self, enemy) {
    let worst = remainingMaps[0], minD = 9999;
    remainingMaps.forEach(m => { let diff = Math.pow(self.mapStats[m] || 50, 2) - Math.pow(enemy.mapStats[m] || 50, 2); if (diff < minD) { minD = diff; worst = m; } }); return worst;
}
function getBestMap(self, enemy) {
    let best = remainingMaps[0], maxD = -9999;
    remainingMaps.forEach(m => { let diff = Math.pow(self.mapStats[m] || 50, 2) - Math.pow(enemy.mapStats[m] || 50, 2); if (diff > maxD) { maxD = diff; best = m; } }); return best;
}

function updatePlayoffBroadcastHUD() {
    if (!isBo3Match) return;
    dom.swissHudBar.classList.add("hidden"); dom.playoffBroadcastHud.classList.remove("hidden");
    dom.bcUserName.textContent = userTeam.name; dom.userColorAccent.style.setProperty("--team-color", userTeam.color); dom.bcUserScore.textContent = bo3UserWins;
    dom.bcOppName.textContent = opponentTeam ? opponentTeam.name : "TBD"; dom.oppColorAccent.style.setProperty("--team-color", opponentTeam ? opponentTeam.color : "#64748b"); dom.bcOppScore.textContent = bo3OppWins;
    let stageTxt = currentPlayoffIndex === 0 ? "ÇEYREK FİNAL" : (currentPlayoffIndex === 1 ? "YARI FİNAL" : "BÜYÜK FİNAL");
    dom.bcStageTitle.textContent = stageTxt; dom.bcMatchInfo.textContent = chosenMap ? `HARİTA ${bo3MapIndex + 1}/3: ${chosenMap.toUpperCase()}` : "BO3 SERİSİ";
}

function renderScoreboard(tA, rosterA, tB, rosterB, sA, sB) {
    dom.tblTeamA.textContent = tA.name; dom.tblTeamA.style.color = tA.color;
    dom.tblTeamB.textContent = tB.name; dom.tblTeamB.style.color = tB.color;
    let sortedA = [...rosterA].sort((a,b) => b.k - a.k);
    let sortedB = [...rosterB].sort((a,b) => b.k - a.k);
    dom.tblBodyA.innerHTML = "";
    sortedA.forEach((p, idx) => { let mvpClass = (sA >= 13 && sA > sB && idx === 0) ? 'class="mvp-row"' : ''; dom.tblBodyA.innerHTML += `<tr ${mvpClass}><td>${p.name}</td><td>${p.k}</td><td>${p.d}</td></tr>`; });
    dom.tblBodyB.innerHTML = "";
    sortedB.forEach((p, idx) => { let mvpClass = (sB >= 13 && sB > sA && idx === 0) ? 'class="mvp-row"' : ''; dom.tblBodyB.innerHTML += `<tr ${mvpClass}><td>${p.name}</td><td>${p.k}</td><td>${p.d}</td></tr>`; });
}

function distributeStats(winRoster, loseRoster) {
    loseRoster.forEach(p => { if(Math.random() > 0.1) p.d++; }); 
    let killsToGive = 4 + Math.floor(Math.random() * 2); 
    for(let i=0; i<killsToGive; i++) winRoster[Math.floor(Math.random() * 5)].k++;
    let loseKills = Math.floor(Math.random() * 4);
    for(let i=0; i<loseKills; i++) { loseRoster[Math.floor(Math.random() * 5)].k++; winRoster[Math.floor(Math.random() * 5)].d++; }
}

function updateEconomy(ecoWin, ecoLose) { ecoWin.money += 3250; ecoWin.lossStreak = 0; ecoLose.lossStreak++; ecoLose.money += 1400 + (Math.min(ecoLose.lossStreak - 1, 4) * 500); }

function determineBuyState(ecoObj, isOT) {
    if (isOT) return { text: "FULL BUY", color: "#10b981" };
    if (ecoObj.money >= 4300) { ecoObj.money -= 4300; return { text: "FULL BUY", color: "#10b981" }; }
    if (ecoObj.money >= 2000) { ecoObj.money -= 2000; return { text: "FORCE BUY", color: "#facc15" }; }
    return { text: "ECO", color: "#ef4444" };
}

function startLiveMatch() {
    dom.vetoView.classList.add("hidden");
    dom.swissView.classList.add("hidden");

    let tA = isBo3Match ? userTeam : activeUserMatch.teamA;
    let tB = isBo3Match ? opponentTeam : activeUserMatch.teamB;

    const setupMatchUI = () => {
        dom.liveView.classList.remove("hidden");
        dom.sbTeamA.textContent = tA.name; dom.sbTeamA.style.color = tA.color;
        dom.sbTeamB.textContent = tB.name; dom.sbTeamB.style.color = tB.color;
        dom.sbScoreA.textContent = "0"; dom.sbScoreB.textContent = "0"; 
        
        dom.activeMapTag.textContent = `Harita: ${chosenMap}`;
        dom.activeMapTag.style.borderColor = MAP_THEMES[chosenMap] || "#1e2638";
        dom.activeMapTag.style.color = MAP_THEMES[chosenMap] || "#94a3b8";
        
        dom.liveStatsArea.classList.remove("hidden");
        dom.ecoTeamA.textContent = "TABANCA"; dom.ecoTeamA.style.color = "#cbd5e1"; dom.ecoTeamB.textContent = "TABANCA"; dom.ecoTeamB.style.color = "#cbd5e1";
        
        let initRosterA = tA.roster.map(p => ({ name: p, k: 0, d: 0 })); 
        let initRosterB = tB.roster.map(p => ({ name: p, k: 0, d: 0 }));
        renderScoreboard(tA, initRosterA, tB, initRosterB, 0, 0);

        if (isBo3Match) updatePlayoffBroadcastHUD();
        dom.tickerFeed.innerHTML = "<div class='ticker-row'><span class='ticker-event'>Tabanca raundu başlıyor...</span><span class='ticker-round-badge' style='background:#1e293b; color:#fff;'>CS2</span><span class='ticker-opp'>Major</span></div>";
        dom.livePlayBtn.textContent = "Maçı Başlat"; dom.livePlayBtn.disabled = false; dom.livePlayBtn.classList.remove("hidden");
        dom.liveSkipBtn.disabled = false; dom.liveSkipBtn.classList.add("hidden");
    };

    if (isBo3Match && bo3MapIndex > 0) { setupMatchUI(); return; }

    dom.introOverlay.classList.remove("hidden", "fade-out", "clash-shake");
    dom.introOverlay.style.background = `linear-gradient(135deg, ${tA.color}33 0%, #05070a 50%, ${tB.color}33 100%)`;
    
    dom.introTeamA.textContent = tA.name; dom.introTeamA.style.setProperty("--team-color", tA.color);
    dom.introTeamB.textContent = tB.name; dom.introTeamB.style.setProperty("--team-color", tB.color);

    setTimeout(() => { dom.introOverlay.classList.add("clash-shake"); }, 500);
    setTimeout(() => { dom.introOverlay.classList.add("fade-out"); setTimeout(() => { dom.introOverlay.classList.add("hidden"); }, 600); setupMatchUI(); }, 2400); 
}

dom.livePlayBtn.onclick = () => {
    if (dom.livePlayBtn.textContent === "Sonuçlara Geç") { onMatchFinished(parseInt(dom.sbScoreA.textContent), parseInt(dom.sbScoreB.textContent)); return; }

    dom.livePlayBtn.disabled = true; dom.livePlayBtn.classList.add("hidden");
    dom.liveSkipBtn.disabled = false; dom.liveSkipBtn.classList.remove("hidden"); dom.tickerFeed.innerHTML = "";

    let tA = isBo3Match ? userTeam : activeUserMatch.teamA, tB = isBo3Match ? opponentTeam : activeUserMatch.teamB;
    let currentRosterA = tA.roster.map(p => ({ name: p, k: 0, d: 0 })), currentRosterB = tB.roster.map(p => ({ name: p, k: 0, d: 0 }));
    let ecoA = { money: 800, lossStreak: 0 }, ecoB = { money: 800, lossStreak: 0 };
    let pA = Math.pow((tA.rating*0.35)+(tA.mapStats[chosenMap]*0.65), 3), pB = Math.pow((tB.rating*0.35)+(tB.mapStats[chosenMap]*0.65), 3), prob = pA / (pA + pB);
    let sA = 0, sB = 0, r = 1, target = 13; matchIsRunning = true;

    function playRound() {
        if (!matchIsRunning) return;
        let isOT = (sA >= 12 && sB >= 12);
        let isPistolRound = (r === 1 || r === 13) && !isOT;

        if (isPistolRound) {
            ecoA.money = 800; ecoB.money = 800; dom.ecoTeamA.textContent = "TABANCA"; dom.ecoTeamA.style.color = "#cbd5e1"; dom.ecoTeamB.textContent = "TABANCA"; dom.ecoTeamB.style.color = "#cbd5e1";
        } else {
            let stateA = determineBuyState(ecoA, isOT), stateB = determineBuyState(ecoB, isOT);
            dom.ecoTeamA.textContent = stateA.text; dom.ecoTeamA.style.color = stateA.color; dom.ecoTeamB.textContent = stateB.text; dom.ecoTeamB.style.color = stateB.color;
        }

        let win = Math.random() < prob ? tA : tB, loser = (win === tA) ? tB : tA;
        let isEcoWin = false;
        
        if (win === tA) { 
            if (dom.ecoTeamA.textContent === "ECO" && dom.ecoTeamB.textContent === "FULL BUY") isEcoWin = true;
            sA++; distributeStats(currentRosterA, currentRosterB); updateEconomy(ecoA, ecoB); 
        } else { 
            if (dom.ecoTeamB.textContent === "ECO" && dom.ecoTeamA.textContent === "FULL BUY") isEcoWin = true;
            sB++; distributeStats(currentRosterB, currentRosterA); updateEconomy(ecoB, ecoA); 
        }

        dom.sbScoreA.textContent = sA; dom.sbScoreB.textContent = sB;
        renderScoreboard(tA, currentRosterA, tB, currentRosterB, sA, sB);

        let winningRoster = (win === tA) ? currentRosterA : currentRosterB;
        let mvpPlayer = [...winningRoster].sort((a,b) => b.k - a.k)[0];
        
        // GÜVENLİ VE HATASIZ SPİKER AKIŞI (Kilitlenmeleri önlemek için tamamen optimize edildi)
        let poolEvents = [...GENERAL_EVENTS];
        if (isEcoWin) poolEvents = poolEvents.concat(ECO_EVENTS);
        if (AWP_PLAYERS.includes(mvpPlayer.name)) poolEvents = poolEvents.concat(AWP_EVENTS);

        let ev = poolEvents[Math.floor(Math.random()*poolEvents.length)]
                    .replace("{player}", mvpPlayer.name)
                    .replace("{team}", win.name);

        let row = document.createElement("div"); row.className = "ticker-row"; row.style.borderLeftColor = win.color;
        row.innerHTML = `<span class="ticker-event">${ev}</span><span class="ticker-round-badge" style="background:${win.color}; color:#0b0e14; box-shadow: 0 0 10px ${win.color}88;">R${r}</span><span class="ticker-opp" style="color:${loser.color}">${loser.name}</span>`;
        dom.tickerFeed.prepend(row);

        if (sA === target - 1 && sB === target - 1) {
            target += 3; let ot = document.createElement("div"); ot.className = "ticker-row ticker-ot"; ot.textContent = `UZATMALAR (MR3) - YENİ HEDEF: ${target}`; dom.tickerFeed.prepend(ot);
        }

        if (sA === target || sB === target) {
            matchIsRunning = false; dom.liveSkipBtn.classList.add("hidden"); dom.livePlayBtn.textContent = "Sonuçlara Geç"; dom.livePlayBtn.disabled = false; dom.livePlayBtn.classList.remove("hidden"); return;
        }
        r++; let baseDelay = 1100; matchTimer = setTimeout(playRound, baseDelay / currentSpeedMultiplier);
    }
    playRound();

    dom.liveSkipBtn.onclick = () => {
        if (!matchIsRunning) return;
        matchIsRunning = false; clearTimeout(matchTimer);
        while (sA < target && sB < target) {
            let fastWin = Math.random() < prob ? tA : tB;
            if (fastWin === tA) { sA++; distributeStats(currentRosterA, currentRosterB); } else { sB++; distributeStats(currentRosterB, currentRosterA); }
            if (sA === target - 1 && sB === target - 1) target += 3;
        }
        dom.sbScoreA.textContent = sA; dom.sbScoreB.textContent = sB; renderScoreboard(tA, currentRosterA, tB, currentRosterB, sA, sB);
        dom.liveSkipBtn.classList.add("hidden"); dom.livePlayBtn.textContent = "Sonuçlara Geç"; dom.livePlayBtn.disabled = false; dom.livePlayBtn.classList.remove("hidden");
    };
};

function onMatchFinished(sA, sB) {
    if (isBo3Match) {
        if (sA > sB) bo3UserWins++; else bo3OppWins++; updatePlayoffBroadcastHUD();
        if (bo3UserWins === 2 || bo3OppWins === 2) { let userWon = bo3UserWins === 2; onBo3SeriesResolved(userWon); } 
        else { bo3MapIndex++; chosenMap = bo3Maps[bo3MapIndex]; startLiveMatch(); } return;
    }
    
    activeUserMatch.scoreA = sA; activeUserMatch.scoreB = sB; activeUserMatch.map = chosenMap;
    if (sA > sB) { activeUserMatch.teamA.wins++; activeUserMatch.teamB.losses++; } else { activeUserMatch.teamB.wins++; activeUserMatch.teamA.losses++; }
    
    simulateOtherMatchesInstantly(); 
    updateUserBadge(); 
    renderSwissTable(); 
    showSummary();
}

function simulateOtherMatchesInstantly() {
    currentMatches.filter(m => m !== activeUserMatch).forEach(m => {
        let map = MAP_POOL[Math.floor(Math.random()*MAP_POOL.length)];
        let pA = Math.pow((m.teamA.rating*0.35)+(m.teamA.mapStats[map]*0.65), 3), pB = Math.pow((m.teamB.rating*0.35)+(m.teamB.mapStats[map]*0.65), 3), prob = pA / (pA + pB);
        let sA = 0, sB = 0, target = 13; while (sA < target && sB < target) { if (Math.random() < prob) sA++; else sB++; if (sA === target - 1 && sB === target - 1) target += 3; }
        m.scoreA = sA; m.scoreB = sB; m.map = map;
        if (sA > sB) { m.teamA.wins++; m.teamB.losses++; } else { m.teamB.wins++; m.teamA.losses++; }
    });
}

function showSummary() {
    dom.liveView.classList.add("hidden"); 
    dom.summaryView.classList.remove("hidden"); 
    dom.swissView.classList.remove("hidden");
    dom.summaryTitle.textContent = "KARŞILAŞMA SONUÇLARI";
    dom.resultsGrid.innerHTML = "";
    
    currentMatches.forEach(m => {
        let aWon = m.scoreA > m.scoreB;
        dom.resultsGrid.innerHTML += `<div class="mini-card" style="border-left: 3px solid ${aWon ? m.teamA.color : m.teamB.color}"><span style="color:${m.teamA.color}; ${aWon ? 'font-weight:900;' : 'opacity:0.6;'}">${m.teamA.name}</span><span class="mini-score">${m.scoreA} : ${m.scoreB}</span><span style="color:${m.teamB.color}; ${!aWon ? 'font-weight:900;' : 'opacity:0.6;'}">${m.teamB.name}</span></div>`;
    });

    stageTeams.forEach(t => { if (t.wins >= 3) t.status = currentStage === 1 ? "adv_opening" : "adv_playoffs"; if (t.losses >= 3) t.status = currentStage === 1 ? "elm_opening" : "elm_playoffs"; });
    renderSwissTable(); 
    checkStageEnd();
}

function checkStageEnd() {
    let userElim = (currentStage === 1 && userTeam.status === "elm_opening") || (currentStage === 2 && userTeam.status === "elm_playoffs");
    let userAdv = (currentStage === 1 && userTeam.status === "adv_opening") || (currentStage === 2 && userTeam.status === "adv_playoffs");

    if (userElim) {
        dom.swissHudBar.classList.add("hidden"); dom.playoffBroadcastHud.classList.add("hidden"); dom.swissLayout.classList.add("hidden");
        openModal("ELENDİNİZ", `${userTeam.name} 3 mağlubiyet alarak turnuvaya veda etti.`, "Yeniden Başlat", () => location.reload(), "Kalanı Simüle Et", () => autoSimulateToEnd()); return;
    }
    if (userAdv) {
        finishSwissStage(stageTeams, currentStage === 1 ? "adv_opening" : "adv_playoffs", currentStage === 1 ? "elm_opening" : "elm_playoffs");
        if (currentStage === 1) openModal("OPENING STAGE TAMAMLANDI", "Legends Stage aşamasına yükseldiniz.", "Legends Stage'e Geç", () => { closeModal(); startStage(2); });
        else if (currentStage === 2) openModal("PLAY-OFF'A KALDINIZ", "Son 8 takım arasına girdiniz. Play-off eleme ağacı başlıyor!", "Play-off Ağacına Git", () => { closeModal(); setupPlayoffs(); });
        return;
    }

    dom.nextActionBtn.disabled = false;
    dom.nextActionBtn.textContent = "Sonraki Tura Geç";
    dom.nextActionBtn.onclick = () => {
        dom.nextActionBtn.disabled = true;
        swissRound++;
        drawNextRoundPairings();
    };
}

function drawNextRoundPairings() {
    dom.roundBadge.textContent = `RAUNT ${swissRound}`; 
    const pool = stageTeams.filter(t => t.wins < 3 && t.losses < 3);
    const groups = {};
    pool.forEach(t => { let key = `${t.wins}-${t.losses}`; if (!groups[key]) groups[key] = []; groups[key].push(t); });
    
    currentMatches = [];
    Object.keys(groups).forEach(k => {
        let arr = [...groups[k]].sort(() => Math.random() - 0.5);
        while (arr.length >= 2) currentMatches.push({ teamA: arr.pop(), teamB: arr.pop(), scoreA: 0, scoreB: 0, map: "" });
    });

    activeUserMatch = currentMatches.find(m => m.teamA.id === userTeam.id || m.teamB.id === userTeam.id);
    opponentTeam = activeUserMatch.teamA.id === userTeam.id ? activeUserMatch.teamB : activeUserMatch.teamA;
    dom.hudOppName.textContent = opponentTeam.name; dom.hudOppName.style.color = opponentTeam.color;
    dom.hudOppRecord.textContent = `${opponentTeam.wins} - ${opponentTeam.losses}`; dom.hudOppRecord.classList.remove("hidden");
    
    openModal("YENİ RAKİP BELİRLENDİ", `${userTeam.name} (${userTeam.wins}-${userTeam.losses}) vs ${opponentTeam.name} (${opponentTeam.wins}-${opponentTeam.losses})`, "Vetoya Başla", () => {
        closeModal();
        showFixture();
    });
}

function finishSwissStage(pool, advStatus, elmStatus) {
    let safetyCounter = 20;
    while (safetyCounter > 0) {
        let active = pool.filter(t => t.wins < 3 && t.losses < 3); if (active.length < 2) break;
        active.sort((a, b) => (b.wins - b.losses) - (a.wins - a.losses) || (Math.random() - 0.5));
        for (let i = 0; i < active.length - 1; i += 2) {
            let tA = active[i], tB = active[i + 1], pA = Math.pow(tA.rating, 3) / (Math.pow(tA.rating, 3) + Math.pow(tB.rating, 3));
            if (Math.random() < pA) { tA.wins++; tB.losses++; } else { tB.wins++; tA.losses++; }
        } safetyCounter--;
    }
    pool.forEach(t => { if (t.wins >= 3) t.status = advStatus; else if (t.losses >= 3) t.status = elmStatus; });
    let advanced = pool.filter(t => t.status === advStatus);
    if (advanced.length < 8) { let rest = pool.filter(t => t.status !== advStatus).sort((a,b) => b.wins - a.wins || b.rating - a.rating); while (advanced.length < 8 && rest.length > 0) { let p = rest.shift(); p.status = advStatus; advanced.push(p); } } 
    else if (advanced.length > 8) { advanced.sort((a,b) => a.wins - b.wins || a.rating - b.rating); while (advanced.length > 8) { let d = advanced.shift(); d.status = elmStatus; } }
}

function renderSwissTable() {
    dom.standingsBody.innerHTML = "";
    [...stageTeams].sort((a,b) => b.wins - a.wins || a.losses - b.losses).forEach((t, i) => {
        let tag = `<span class="status-pill act">Aktif</span>`;
        if (t.status.startsWith("adv")) tag = `<span class="status-pill adv">Yükseldi (3G)</span>`;
        if (t.status.startsWith("elm")) tag = `<span class="status-pill elm">Elendi (3M)</span>`;
        dom.standingsBody.innerHTML += `<tr><td>${i+1}</td><td><strong style="color:${t.color}">${t.name}</strong></td><td>${t.wins}</td><td>${t.losses}</td><td>${tag}</td></tr>`;
    });
}

function updateUserBadge() { dom.userTeamRecord.textContent = `${userTeam.wins} - ${userTeam.losses}`; }

function setupPlayoffs() {
    currentStage = 3; isBo3Match = true; dom.swissLayout.classList.add("hidden"); dom.bracketView.classList.remove("hidden");
    let qualified = stageTeams.filter(t => t.status === "adv_playoffs").sort(() => Math.random() - 0.5);
    playoffBracket.qf = [ { t1: qualified[0], t2: qualified[1], s1: 0, s2: 0, winner: null }, { t1: qualified[2], t2: qualified[3], s1: 0, s2: 0, winner: null }, { t1: qualified[4], t2: qualified[5], s1: 0, s2: 0, winner: null }, { t1: qualified[6], t2: qualified[7], s1: 0, s2: 0, winner: null } ];
    playoffBracket.sf = [ { t1: null, t2: null, s1: 0, s2: 0, winner: null }, { t1: null, t2: null, s1: 0, s2: 0, winner: null } ];
    playoffBracket.gf = [ { t1: null, t2: null, s1: 0, s2: 0, winner: null } ];
    currentPlayoffIndex = 0; renderBracketTree(); prepareNextPlayoffUserMatch("qf");
}

function renderBracketTree(simulatingIndex = -1, stageKey = "") {
    dom.qfMatches.innerHTML = ""; playoffBracket.qf.forEach((m, idx) => { dom.qfMatches.appendChild(createBracketNode(m, (stageKey === "qf" && idx === simulatingIndex))); });
    dom.sfMatches.innerHTML = ""; playoffBracket.sf.forEach((m, idx) => { dom.sfMatches.appendChild(createBracketNode(m, (stageKey === "sf" && idx === simulatingIndex))); });
    dom.gfMatches.innerHTML = ""; playoffBracket.gf.forEach((m, idx) => { dom.gfMatches.appendChild(createBracketNode(m, (stageKey === "gf" && idx === simulatingIndex))); });
    if (playoffBracket.champ) { dom.champName.textContent = playoffBracket.champ.name; dom.champName.style.color = playoffBracket.champ.color; } else { dom.champName.textContent = "HENÜZ BELLİ DEĞİL"; dom.champName.style.color = "#f8fafc"; }
}

function createBracketNode(match, isSimulating = false) {
    const card = document.createElement("div"); card.className = `bracket-node ${isSimulating ? 'simulating' : ''}`;
    let n1 = match.t1 ? match.t1.name : "TBD", n2 = match.t2 ? match.t2.name : "TBD";
    let c1 = match.winner && match.t1 && match.winner.id === match.t1.id ? "winner" : (match.winner ? "loser" : "");
    let c2 = match.winner && match.t2 && match.winner.id === match.t2.id ? "winner" : (match.winner ? "loser" : "");
    card.innerHTML = `<div class="b-row ${c1}"><span>${n1}</span><span class="b-score">${match.s1}</span></div><div class="b-row ${c2}"><span>${n2}</span><span class="b-score">${match.s2}</span></div>`;
    return card;
}

function prepareNextPlayoffUserMatch(roundKey) {
    let match = null;
    if (roundKey === "qf") match = playoffBracket.qf.find(m => m.t1.id === userTeam.id || m.t2.id === userTeam.id);
    else if (roundKey === "sf") match = playoffBracket.sf.find(m => m.t1 && m.t2 && (m.t1.id === userTeam.id || m.t2.id === userTeam.id));
    else if (roundKey === "gf") match = playoffBracket.gf[0];
    if (!match) return;
    opponentTeam = match.t1.id === userTeam.id ? match.t2 : match.t1;
    bo3UserWins = 0; bo3OppWins = 0; chosenMap = null; updatePlayoffBroadcastHUD();
    let stageName = roundKey === "qf" ? "ÇEYREK FİNAL" : (roundKey === "sf" ? "YARI FİNAL" : "BÜYÜK FİNAL");
    openModal(`${stageName} (BO3)`, `${userTeam.name} vs ${opponentTeam.name}`, "Harita Vetosuna Başla", () => { closeModal(); dom.bracketView.classList.add("hidden"); dom.swissLayout.classList.remove("hidden"); startVeto(); });
}

function simBo3Between(tA, tB) {
    if (!tA || !tB) return { winner: tA || tB || { name: "Bilinmeyen", color: "#fff" }, s1: 2, s2: 0 };
    let pA = Math.pow(tA.rating, 3) / (Math.pow(tA.rating, 3) + Math.pow(tB.rating, 3)), wA = 0, wB = 0;
    while (wA < 2 && wB < 2) { if (Math.random() < pA) wA++; else wB++; } return { winner: wA === 2 ? tA : tB, s1: wA, s2: wB };
}

function triggerConfetti() {
    dom.confettiContainer.innerHTML = "";
    for(let i=0; i<150; i++) {
        let conf = document.createElement("div"); conf.className = "confetti";
        conf.style.left = Math.random() * 100 + "vw"; conf.style.animationDuration = (Math.random() * 2 + 2) + "s"; conf.style.animationDelay = Math.random() * 2 + "s";
        conf.style.backgroundColor = Math.random() > 0.5 ? "#eab308" : (Math.random() > 0.5 ? "#fde047" : "#ca8a04");
        dom.confettiContainer.appendChild(conf);
    }
}

function onBo3SeriesResolved(userWon) {
    dom.liveView.classList.add("hidden"); dom.swissLayout.classList.add("hidden"); dom.bracketView.classList.remove("hidden");
    if (!userWon) {
        dom.swissHudBar.classList.add("hidden"); dom.playoffBroadcastHud.classList.add("hidden");
        if (currentPlayoffIndex === 2) {
            playoffBracket.gf[0].winner = opponentTeam; playoffBracket.gf[0].s1 = playoffBracket.gf[0].t1.id === opponentTeam.id ? 2 : bo3UserWins; playoffBracket.gf[0].s2 = playoffBracket.gf[0].t2.id === opponentTeam.id ? 2 : bo3UserWins;
            playoffBracket.champ = opponentTeam; renderBracketTree(); triggerConfetti();
            openModal(`${opponentTeam.name.toUpperCase()} ŞAMPİYON!`, `${opponentTeam.name} büyük final serisini ${bo3OppWins}-${bo3UserWins} kazanarak Major Şampiyonu oldu!`, "Yeniden Başlat", () => location.reload()); return;
        }
        if (currentPlayoffIndex === 0) { let userQF = playoffBracket.qf.find(m => m.t1.id === userTeam.id || m.t2.id === userTeam.id); userQF.winner = opponentTeam; userQF.s1 = userQF.t1.id === opponentTeam.id ? 2 : bo3UserWins; userQF.s2 = userQF.t2.id === opponentTeam.id ? 2 : bo3UserWins; }
        else if (currentPlayoffIndex === 1) { let userSF = playoffBracket.sf.find(m => m.t1 && m.t2 && (m.t1.id === userTeam.id || m.t2.id === userTeam.id)); userSF.winner = opponentTeam; userSF.s1 = userSF.t1.id === opponentTeam.id ? 2 : bo3UserWins; userSF.s2 = userSF.t2.id === opponentTeam.id ? 2 : bo3UserWins; }
        renderBracketTree(); let stageTxt = currentPlayoffIndex === 0 ? "Çeyrek finalde" : "Yarı finalde";
        openModal("ELENDİNİZ", `${stageTxt} ${opponentTeam.name} takımına mağlup oldunuz.`, "Yeniden Başlat", () => location.reload(), "Kalanı Simüle Et", () => autoSimulateToEnd()); return;
    }
    if (currentPlayoffIndex === 0) {
        let userQF = playoffBracket.qf.find(m => m.t1.id === userTeam.id || m.t2.id === userTeam.id); userQF.winner = userTeam; userQF.s1 = userQF.t1.id === userTeam.id ? 2 : bo3OppWins; userQF.s2 = userQF.t2.id === userTeam.id ? 2 : bo3OppWins;
        playoffBracket.qf.filter(m => m !== userQF).forEach(m => { let res = simBo3Between(m.t1, m.t2); m.winner = res.winner; m.s1 = res.s1; m.s2 = res.s2; });
        playoffBracket.sf[0].t1 = playoffBracket.qf[0].winner; playoffBracket.sf[0].t2 = playoffBracket.qf[1].winner; playoffBracket.sf[1].t1 = playoffBracket.qf[2].winner; playoffBracket.sf[1].t2 = playoffBracket.qf[3].winner;
        currentPlayoffIndex = 1; renderBracketTree(); setTimeout(() => prepareNextPlayoffUserMatch("sf"), 1000);
    } else if (currentPlayoffIndex === 1) {
        let userSF = playoffBracket.sf.find(m => m.t1.id === userTeam.id || m.t2.id === userTeam.id); userSF.winner = userTeam; userSF.s1 = userSF.t1.id === userTeam.id ? 2 : bo3OppWins; userSF.s2 = userSF.t2.id === userTeam.id ? 2 : bo3OppWins;
        let otherSF = playoffBracket.sf.find(m => m !== userSF); let res = simBo3Between(otherSF.t1, otherSF.t2); otherSF.winner = res.winner; otherSF.s1 = res.s1; otherSF.s2 = res.s2;
        playoffBracket.gf[0].t1 = userTeam; playoffBracket.gf[0].t2 = res.winner; currentPlayoffIndex = 2; renderBracketTree(); setTimeout(() => prepareNextPlayoffUserMatch("gf"), 1000);
    } else if (currentPlayoffIndex === 2) {
        dom.swissHudBar.classList.add("hidden"); dom.playoffBroadcastHud.classList.add("hidden"); dom.swissLayout.classList.add("hidden");
        playoffBracket.gf[0].winner = userTeam; playoffBracket.gf[0].s1 = 2; playoffBracket.gf[0].s2 = bo3OppWins; playoffBracket.champ = userTeam; renderBracketTree(); triggerConfetti();
        openModal(`${userTeam.name.toUpperCase()} ŞAMPİYON!`, `Muazzam bir performansla CS2 Major Kupasını müzenize götürdünüz! Tebrikler!`, "Yeniden Başlat", () => location.reload());
    }
}

async function autoSimulateToEnd() {
    closeModal(); dom.swissLayout.classList.add("hidden"); dom.bracketView.classList.remove("hidden");
    dom.stageSubtitle.textContent = "AŞAMA 3: PLAY-OFF (CANLI SİMÜLASYON)"; dom.swissHudBar.classList.add("hidden"); dom.playoffBroadcastHud.classList.add("hidden");
    if (currentStage === 1) {
        finishSwissStage(stageTeams, "adv_opening", "elm_opening"); const advTeams = allTeams.filter(t => t.status === "adv_opening"); const legTeams = allTeams.filter(t => t.pot === "legends");
        stageTeams = [...legTeams, ...advTeams]; stageTeams.forEach(t => { t.wins = 0; t.losses = 0; t.status = "playing"; }); finishSwissStage(stageTeams, "adv_playoffs", "elm_playoffs"); initPlayoffData();
    } else if (currentStage === 2) { finishSwissStage(stageTeams, "adv_playoffs", "elm_playoffs"); initPlayoffData(); }
    await animatePlayoffsStepByStep();
}

function initPlayoffData() {
    let qualified = stageTeams.filter(t => t.status === "adv_playoffs").sort(() => Math.random() - 0.5);
    playoffBracket.qf = [ { t1: qualified[0], t2: qualified[1], s1: 0, s2: 0, winner: null }, { t1: qualified[2], t2: qualified[3], s1: 0, s2: 0, winner: null }, { t1: qualified[4], t2: qualified[5], s1: 0, s2: 0, winner: null }, { t1: qualified[6], t2: qualified[7], s1: 0, s2: 0, winner: null } ];
    playoffBracket.sf = [ { t1: null, t2: null, s1: 0, s2: 0, winner: null }, { t1: null, t2: null, s1: 0, s2: 0, winner: null } ]; playoffBracket.gf = [ { t1: null, t2: null, s1: 0, s2: 0, winner: null } ]; playoffBracket.champ = null;
}

async function animatePlayoffsStepByStep() {
    for (let i = 0; i < playoffBracket.qf.length; i++) { let m = playoffBracket.qf[i]; if (!m.winner && m.t1 && m.t2) { renderBracketTree(i, "qf"); await sleep(650); let res = simBo3Between(m.t1, m.t2); m.winner = res.winner; m.s1 = res.s1; m.s2 = res.s2; renderBracketTree(-1, ""); await sleep(350); } }
    if (!playoffBracket.sf[0].t1) playoffBracket.sf[0].t1 = playoffBracket.qf[0].winner; if (!playoffBracket.sf[0].t2) playoffBracket.sf[0].t2 = playoffBracket.qf[1].winner;
    if (!playoffBracket.sf[1].t1) playoffBracket.sf[1].t1 = playoffBracket.qf[2].winner; if (!playoffBracket.sf[1].t2) playoffBracket.sf[1].t2 = playoffBracket.qf[3].winner; renderBracketTree(-1, ""); await sleep(750);
    for (let i = 0; i < playoffBracket.sf.length; i++) { let m = playoffBracket.sf[i]; if (!m.winner && m.t1 && m.t2) { renderBracketTree(i, "sf"); await sleep(750); let res = simBo3Between(m.t1, m.t2); m.winner = res.winner; m.s1 = res.s1; m.s2 = res.s2; renderBracketTree(-1, ""); await sleep(350); } }
    if (!playoffBracket.gf[0].t1) playoffBracket.gf[0].t1 = playoffBracket.sf[0].winner; if (!playoffBracket.gf[0].t2) playoffBracket.gf[0].t2 = playoffBracket.sf[1].winner; renderBracketTree(-1, ""); await sleep(800);
    let gf = playoffBracket.gf[0]; if (!gf.winner && gf.t1 && gf.t2) { renderBracketTree(0, "gf"); await sleep(900); let res = simBo3Between(gf.t1, gf.t2); gf.winner = res.winner; gf.s1 = res.s1; gf.s2 = res.s2; playoffBracket.champ = res.winner; renderBracketTree(-1, ""); await sleep(600); }
    triggerConfetti(); openModal(`${playoffBracket.champ.name.toUpperCase()} ŞAMPİYON!`, `${playoffBracket.champ.name} büyük finali kazanarak CS2 Major Kupasını kaldırdı!`, "Başa Dön", () => location.reload());
}

function openModal(title, desc, btnText, callback, secBtnText = null, secCallback = null) {
    dom.regularSummary.classList.add("hidden"); dom.bannerModal.classList.remove("hidden"); dom.summaryView.classList.remove("hidden");
    if (title.includes("ŞAMPİYON")) { dom.modalTitle.className = "modal-champion-title"; let team = allTeams.find(t => title.includes(t.name.toUpperCase())); dom.modalTitle.style.color = team ? team.color : "#ffd166"; } 
    else { dom.modalTitle.className = ""; dom.modalTitle.style.color = "#f8fafc"; }
    dom.modalTitle.textContent = title; dom.modalDesc.textContent = desc; dom.modalBtn.textContent = btnText; dom.modalBtn.onclick = callback;
    if (secBtnText) { dom.modalSecBtn.classList.remove("hidden"); dom.modalSecBtn.textContent = secBtnText; dom.modalSecBtn.onclick = secCallback; } 
    else { dom.modalSecBtn.classList.add("hidden"); }
}

function closeModal() { dom.bannerModal.classList.add("hidden"); dom.regularSummary.classList.remove("hidden"); dom.summaryView.classList.add("hidden"); }

initApp();
