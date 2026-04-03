/* ============================================================
   Virtual iPod — script.js
   Public domain music from openmusicarchive.org
   ============================================================ */

'use strict';

// ─── Song Library ────────────────────────────────────────────
const SONGS = [
  // ── Blues ──────────────────────────────────────────────────
  {
    id: 1,
    title: "Court House Blues",
    artist: "Clara Smith",
    album: "Blues Classics",
    year: "1925",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Court_House_Blues_Take_1.mp3",
    color: ["#1a0533", "#6b21a8"],
    emoji: "🎵"
  },
  {
    id: 2,
    title: "Pinetop's Boogie Woogie",
    artist: "Pine Top Smith",
    album: "Boogie & Blues",
    year: "1928",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Pinetops_Boogie_Woogie.mp3",
    color: ["#1a1000", "#b45309"],
    emoji: "🎹"
  },
  {
    id: 7,
    title: "One Dime Blues",
    artist: "Blind Lemon Jefferson",
    album: "Country Blues",
    year: "1927",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/One_Dime_Blues.mp3",
    color: ["#1a0800", "#991b1b"],
    emoji: "🎙️"
  },
  {
    id: 9,
    title: "Deep Blue Sea Blues",
    artist: "Clara Smith",
    album: "Blues Classics",
    year: "1923",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Deep_Blue_Sea_Blues.mp3",
    color: ["#001020", "#0369a1"],
    emoji: "🌊"
  },
  {
    id: 10,
    title: "Evil Minded Blues",
    artist: "Virginia Liston",
    album: "Classic Blues",
    year: "1926",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Evil_Minded_Blues.mp3",
    color: ["#200010", "#9d174d"],
    emoji: "😈"
  },
  {
    id: 11,
    title: "Jump Steady Blues",
    artist: "Pine Top Smith",
    album: "Boogie & Blues",
    year: "1928",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Jump_Steady_Blues.mp3",
    color: ["#1a0a00", "#c2410c"],
    emoji: "🦘"
  },
  {
    id: 12,
    title: "Pinetop's Blues",
    artist: "Pine Top Smith",
    album: "Boogie & Blues",
    year: "1928",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Pinetops_Blues.mp3",
    color: ["#0a1500", "#15803d"],
    emoji: "🌲"
  },
  {
    id: 13,
    title: "Six Cold Feet In The Ground",
    artist: "Leroy Carr",
    album: "Indiana Avenue Blues",
    year: "1934",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Six_Cold_Feet_In_The_Ground.mp3",
    color: ["#0f0f0f", "#374151"],
    emoji: "⚰️"
  },
  {
    id: 14,
    title: "Poor Me Blues",
    artist: "Edna Hicks",
    album: "Classic Blues",
    year: "1923",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Poor_Me_Blues.mp3",
    color: ["#1a0020", "#7e22ce"],
    emoji: "💔"
  },
  {
    id: 15,
    title: "Rolls Royce Papa",
    artist: "Virginia Liston",
    album: "Classic Blues",
    year: "1925",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Rolls_Royce_Papa.mp3",
    color: ["#100800", "#d97706"],
    emoji: "🚗"
  },
  {
    id: 16,
    title: "Titanic Blues",
    artist: "Virginia Liston",
    album: "Classic Blues",
    year: "1926",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Titanic_Blues.mp3",
    color: ["#001020", "#1d4ed8"],
    emoji: "🚢"
  },
  {
    id: 17,
    title: "I'm Sober Now",
    artist: "Pine Top Smith",
    album: "Boogie & Blues",
    year: "1928",
    genre: "Blues",
    url: "https://openmusicarchive.org/audio/Im_Sober_Now.mp3",
    color: ["#100a00", "#a16207"],
    emoji: "🥤"
  },
  // ── Jazz ───────────────────────────────────────────────────
  {
    id: 3,
    title: "Don't Go 'Way Nobody",
    artist: "George Lewis & His New Orleans Stompers",
    album: "New Orleans Jazz",
    year: "1944",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/Dont_Go_Way_Nobody.mp3",
    color: ["#001a1a", "#0d9488"],
    emoji: "🎷"
  },
  {
    id: 4,
    title: "In The Dark (Flashes)",
    artist: "Jess Stacy",
    album: "Piano Jazz",
    year: "1939",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/In_The_Dark_Flashes.mp3",
    color: ["#0a0a1a", "#3730a3"],
    emoji: "🌙"
  },
  {
    id: 18,
    title: "April Kisses",
    artist: "Eddie Lang",
    album: "Jazz Guitar",
    year: "1927",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/April_Kisses.mp3",
    color: ["#1a0a10", "#be185d"],
    emoji: "🌸"
  },
  {
    id: 19,
    title: "Eddie's Twister",
    artist: "Eddie Lang",
    album: "Jazz Guitar",
    year: "1927",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/Eddies_Twister.mp3",
    color: ["#001a10", "#059669"],
    emoji: "🌀"
  },
  {
    id: 20,
    title: "Little Bits",
    artist: "Johnny Dodds Trio",
    album: "Chicago Jazz",
    year: "1927",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/Little_Bits.mp3",
    color: ["#0a0020", "#6d28d9"],
    emoji: "🎺"
  },
  {
    id: 21,
    title: "Struggling",
    artist: "Johnny Dodds Trio",
    album: "Chicago Jazz",
    year: "1927",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/Struggling.mp3",
    color: ["#1a1000", "#92400e"],
    emoji: "💪"
  },
  {
    id: 22,
    title: "Umbrellas to Mend",
    artist: "Frisco Jass Band",
    album: "Early Jazz 1917",
    year: "1917",
    genre: "Jazz",
    url: "https://openmusicarchive.org/audio/Umbrellas_To_Mend.mp3",
    color: ["#001520", "#0c4a6e"],
    emoji: "☂️"
  },
  // ── Folk / Country ─────────────────────────────────────────
  {
    id: 5,
    title: "Ragtime Annie",
    artist: "Charlie Poole & The North Carolina Ramblers",
    album: "Old-Time Folk",
    year: "1926",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Ragtime_Annie.mp3",
    color: ["#0f1a00", "#4d7c0f"],
    emoji: "🎸"
  },
  {
    id: 8,
    title: "Frankie",
    artist: "Mississippi John Hurt",
    album: "Folk Blues",
    year: "1928",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Frankie%20by%20Mississippi%20John%20Hurt.mp3",
    color: ["#001a0a", "#065f46"],
    emoji: "🌿"
  },
  {
    id: 23,
    title: "Goodbye Booze",
    artist: "Charlie Poole & The NC Ramblers",
    album: "Old-Time Folk",
    year: "1930",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Goodbye_Booze.mp3",
    color: ["#100a00", "#78350f"],
    emoji: "🍺"
  },
  {
    id: 24,
    title: "Waiting For A Train",
    artist: "Jimmie Rodgers",
    album: "Country Classics",
    year: "1928",
    genre: "Country",
    url: "https://openmusicarchive.org/audio/Waiting_For_A_Train.mp3",
    color: ["#0f0800", "#b45309"],
    emoji: "🚂"
  },
  {
    id: 25,
    title: "White House Blues",
    artist: "Charlie Poole & The NC Ramblers",
    album: "Old-Time Folk",
    year: "1926",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Whitehouse_Blues.mp3",
    color: ["#0a1000", "#166534"],
    emoji: "🏛️"
  },
  {
    id: 26,
    title: "Sugar Baby",
    artist: "Dock Boggs",
    album: "Mountain Music",
    year: "1927",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Sugar%20Baby%20by%20Dock%20Boggs.mp3",
    color: ["#1a0010", "#9f1239"],
    emoji: "🍬"
  },
  {
    id: 27,
    title: "Old Dog Blue",
    artist: "Jim Jackson",
    album: "Folk Blues",
    year: "1928",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Old%20Dog%20Blue%20by%20Jim%20Jackson.mp3",
    color: ["#0a0f00", "#3f6212"],
    emoji: "🐕"
  },
  {
    id: 28,
    title: "Drunkard's Special",
    artist: "Coley Jones",
    album: "Texas Folk Blues",
    year: "1929",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Drunkards%20Special%20by%20Coley%20Jones.mp3",
    color: ["#100a00", "#a16207"],
    emoji: "🥃"
  },
  {
    id: 29,
    title: "Dry Bones",
    artist: "Bascom Lamar Lunsford",
    album: "Mountain Folk",
    year: "1928",
    genre: "Folk",
    url: "https://openmusicarchive.org/audio/Dry%20Bones%20by%20Bascom%20Lamar%20Lunsford.mp3",
    color: ["#0f0f00", "#ca8a04"],
    emoji: "🦴"
  },
  // ── Classical / Instrumental ───────────────────────────────
  {
    id: 6,
    title: "Introduction & Tarantelle",
    artist: "Mischa Elman",
    album: "Classical Violin",
    year: "1910",
    genre: "Classical",
    url: "https://openmusicarchive.org/audio/Intro_And_Tarantelle.mp3",
    color: ["#1a0a00", "#92400e"],
    emoji: "🎻"
  },
  // ── Vocal / Music Hall ─────────────────────────────────────
  {
    id: 30,
    title: "Daddy Wouldn't Buy Me A Bow Wow",
    artist: "Silas Leachman",
    album: "Music Hall Rarities",
    year: "1892",
    genre: "Music Hall",
    url: "https://openmusicarchive.org/audio/Daddy_Wouldnt_Buy_Me_A_Bow_Wow.mp3",
    color: ["#100020", "#5b21b6"],
    emoji: "🎩"
  },
  {
    id: 31,
    title: "For Months And Months And Months",
    artist: "Jack Norworth",
    album: "Tin Pan Alley",
    year: "1910",
    genre: "Vocal Pop",
    url: "https://openmusicarchive.org/audio/For_Months_And_Months_And_Months.mp3",
    color: ["#001010", "#0f766e"],
    emoji: "📅"
  },
  {
    id: 32,
    title: "At The Ball That's All",
    artist: "Mayo & Tally",
    album: "Tin Pan Alley",
    year: "1913",
    genre: "Vocal Pop",
    url: "https://openmusicarchive.org/audio/At_The_Ball_Thats_All.mp3",
    color: ["#100010", "#86198f"],
    emoji: "🎊"
  },
  // ── World ──────────────────────────────────────────────────
  {
    id: 33,
    title: "Oi Ya Nestchastay",
    artist: "Alexander Sashko & A. Iranova",
    album: "World Music",
    year: "1920s",
    genre: "World",
    url: "https://openmusicarchive.org/audio/Oi_ya_nestchastay.mp3",
    color: ["#0a0020", "#1e3a5f"],
    emoji: "🌍"
  }
];

// ─── Player State ─────────────────────────────────────────────
const state = {
  songs: [...SONGS],
  userSongs: [],
  currentIndex: 0,
  isPlaying: false,
  shuffle: false,
  repeat: false,       // 'none' | 'one' | 'all'
  repeatMode: 'none',
  volume: 0.7,
  eq: 'Off',
  holdOn: false,
  screenOn: true,
  batteryLevel: 3,    // 0–3 bars
};

// ─── Audio Engine ─────────────────────────────────────────────
const audio = new Audio();
audio.crossOrigin = "anonymous";
audio.volume = state.volume;
audio.preload = "none";

let audioCtx = null;
let eqNodes = {};

function initAudioContext() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(audio);
    // EQ chain: bass shelf → mid peak → treble shelf
    const bass = audioCtx.createBiquadFilter();
    bass.type = 'lowshelf';
    bass.frequency.value = 250;

    const mid = audioCtx.createBiquadFilter();
    mid.type = 'peaking';
    mid.frequency.value = 2000;
    mid.Q.value = 1.5;

    const treble = audioCtx.createBiquadFilter();
    treble.type = 'highshelf';
    treble.frequency.value = 8000;

    source.connect(bass);
    bass.connect(mid);
    mid.connect(treble);
    treble.connect(audioCtx.destination);

    eqNodes = { bass, mid, treble };
    applyEQ(state.eq);
  } catch (e) {
    console.warn('AudioContext unavailable:', e);
  }
}

const EQ_PRESETS = {
  'Off':        { bass: 0,  mid: 0,  treble: 0  },
  'Rock':       { bass: 4,  mid: -2, treble: 4  },
  'Jazz':       { bass: 2,  mid: 3,  treble: -1 },
  'Pop':        { bass: -1, mid: 2,  treble: 4  },
  'Electronic': { bass: 6,  mid: -2, treble: 3  },
  'Classical':  { bass: 1,  mid: 0,  treble: 2  },
  'Bass Boost': { bass: 8,  mid: 0,  treble: -1 },
};

function applyEQ(preset) {
  state.eq = preset;
  if (!eqNodes.bass) return;
  const p = EQ_PRESETS[preset] || EQ_PRESETS['Off'];
  eqNodes.bass.gain.setTargetAtTime(p.bass, audioCtx.currentTime, 0.05);
  eqNodes.mid.gain.setTargetAtTime(p.mid, audioCtx.currentTime, 0.05);
  eqNodes.treble.gain.setTargetAtTime(p.treble, audioCtx.currentTime, 0.05);
}

function allSongs() {
  return [...state.songs, ...state.userSongs];
}

function currentSong() {
  const list = allSongs();
  return list[state.currentIndex] || list[0];
}

function loadSong(idx) {
  const list = allSongs();
  if (!list.length) return;
  state.currentIndex = ((idx % list.length) + list.length) % list.length;
  const song = currentSong();
  audio.src = song.url;
  audio.load();
  updatePlayIcon();
  render();
}

function playSong(idx) {
  initAudioContext();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  loadSong(idx);
  audio.play().then(() => {
    state.isPlaying = true;
    updatePlayIcon();
    render();
  }).catch(err => {
    console.warn('Playback error:', err);
    state.isPlaying = false;
    render();
  });
}

function togglePlay() {
  initAudioContext();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
  } else {
    if (!audio.src || audio.src === window.location.href) {
      playSong(state.currentIndex);
      return;
    }
    audio.play().then(() => {
      state.isPlaying = true;
      updatePlayIcon();
      render();
    }).catch(() => {
      playSong(state.currentIndex);
    });
  }
  updatePlayIcon();
  render();
}

function nextTrack() {
  const list = allSongs();
  if (!list.length) return;
  let next;
  if (state.repeatMode === 'one') {
    next = state.currentIndex;
  } else if (state.shuffle) {
    do { next = Math.floor(Math.random() * list.length); }
    while (next === state.currentIndex && list.length > 1);
  } else {
    next = (state.currentIndex + 1) % list.length;
  }
  playSong(next);
}

function prevTrack() {
  const list = allSongs();
  if (!list.length) return;
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  let prev;
  if (state.shuffle) {
    do { prev = Math.floor(Math.random() * list.length); }
    while (prev === state.currentIndex && list.length > 1);
  } else {
    prev = ((state.currentIndex - 1) + list.length) % list.length;
  }
  playSong(prev);
}

function cycleRepeat() {
  const modes = ['none', 'all', 'one'];
  const idx = modes.indexOf(state.repeatMode);
  state.repeatMode = modes[(idx + 1) % modes.length];
  render();
}

// Audio events
audio.addEventListener('ended', () => {
  if (state.repeatMode === 'one') {
    audio.currentTime = 0;
    audio.play();
  } else if (state.repeatMode === 'all' || allSongs().length > 1) {
    nextTrack();
  } else {
    state.isPlaying = false;
    updatePlayIcon();
    render();
  }
});

audio.addEventListener('timeupdate', () => {
  if (currentView === 'now_playing') {
    renderNowPlaying();
  }
});

audio.addEventListener('play', () => {
  state.isPlaying = true;
  updatePlayIcon();
});

audio.addEventListener('pause', () => {
  state.isPlaying = false;
  updatePlayIcon();
});

// ─── Menu System ──────────────────────────────────────────────
let menuStack = [];     // history of [viewName, data]
let currentView = 'splash';
let menuIndex = 0;      // selected item index
let menuOffset = 0;     // scroll offset for list

const MAX_VISIBLE = 6;  // rows visible in list

const MAIN_MENU = [
  { label: 'Music',        icon: '🎵', action: 'push', target: 'music_menu'    },
  { label: 'Extras',       icon: '⚙️', action: 'push', target: 'extras_menu'   },
  { label: 'Settings',     icon: '🔧', action: 'push', target: 'settings_menu' },
  { label: 'Shuffle Songs',icon: '🔀', action: 'shuffle'                        },
  { label: 'Now Playing',  icon: '▶', action: 'go',   target: 'now_playing'   },
];

const MUSIC_MENU = [
  { label: 'Songs',   icon: '♪',  action: 'push', target: 'songs_list'   },
  { label: 'Artists', icon: '👤', action: 'push', target: 'artists_list' },
  { label: 'Albums',  icon: '💿', action: 'push', target: 'albums_list'  },
  { label: 'Genres',  icon: '🎼', action: 'push', target: 'genres_list'  },
  { label: 'Upload',  icon: '📂', action: 'upload'                        },
];

const EXTRAS_MENU = [
  { label: 'About',   icon: 'ℹ️', action: 'go', target: 'about_view' },
];

const SETTINGS_MENU = [
  { label: 'Volume',  icon: '🔊', action: 'go',   target: 'volume_view' },
  { label: 'EQ',      icon: '🎚️', action: 'push',  target: 'eq_menu'    },
  { label: 'Shuffle', icon: '🔀', action: 'toggle_shuffle' },
  { label: 'Repeat',  icon: '🔁', action: 'toggle_repeat'  },
];

function currentMenuItems() {
  switch (currentView) {
    case 'main_menu':     return MAIN_MENU;
    case 'music_menu':    return MUSIC_MENU;
    case 'extras_menu':   return EXTRAS_MENU;
    case 'settings_menu': return SETTINGS_MENU;
    case 'songs_list':    return buildSongsList();
    case 'artists_list':  return buildArtistsList();
    case 'albums_list':   return buildAlbumsList();
    case 'genres_list':   return buildGenresList();
    case 'eq_menu':       return buildEQMenu();
    default: return [];
  }
}

function buildSongsList() {
  return allSongs().map((s, i) => ({
    label: s.title,
    sub: s.artist,
    action: 'play_song',
    index: i,
    isPlaying: state.currentIndex === i && state.isPlaying,
  }));
}

function buildArtistsList() {
  const artists = [...new Set(allSongs().map(s => s.artist))].sort();
  return artists.map(a => {
    const count = allSongs().filter(s => s.artist === a).length;
    return {
      label: a,
      sub: `${count} song${count !== 1 ? 's' : ''}`,
      icon: '👤',
      action: 'push',
      target: 'artist_songs',
      artist: a,
    };
  });
}

function buildAlbumsList() {
  const albums = [...new Set(allSongs().map(s => s.album))].sort();
  return albums.map(al => {
    const songs = allSongs().filter(s => s.album === al);
    return {
      label: al,
      sub: songs[0]?.artist || '',
      icon: '💿',
      action: 'push',
      target: 'album_songs',
      album: al,
    };
  });
}

function buildGenresList() {
  const genreOrder = ['Blues', 'Jazz', 'Folk', 'Country', 'Classical', 'Vocal Pop', 'Music Hall', 'World', 'Folk / Ragtime', 'User Upload'];
  const present = [...new Set(allSongs().map(s => s.genre))];
  const sorted = [
    ...genreOrder.filter(g => present.includes(g)),
    ...present.filter(g => !genreOrder.includes(g)).sort(),
  ];
  return sorted.map(g => {
    const count = allSongs().filter(s => s.genre === g).length;
    const icons = { Blues:'🎵', Jazz:'🎷', Folk:'🎸', Country:'🚂', Classical:'🎻', 'Vocal Pop':'🎤', 'Music Hall':'🎩', World:'🌍' };
    return {
      label: g,
      sub: `${count} song${count !== 1 ? 's' : ''}`,
      icon: icons[g] || '🎼',
      action: 'push',
      target: 'genre_songs',
      genre: g,
    };
  });
}

function buildEQMenu() {
  return Object.keys(EQ_PRESETS).map(name => ({
    label: name,
    selected: state.eq === name,
    action: 'set_eq',
    eq: name,
  }));
}

function navigate(direction) {
  // direction: 1 = down, -1 = up
  const items = currentMenuItems();
  if (!items.length) return;
  menuIndex = Math.max(0, Math.min(items.length - 1, menuIndex + direction));
  // adjust scroll offset
  if (menuIndex < menuOffset) menuOffset = menuIndex;
  if (menuIndex >= menuOffset + MAX_VISIBLE) menuOffset = menuIndex - MAX_VISIBLE + 1;
  render();
}

function selectItem() {
  const items = currentMenuItems();
  if (!items.length) return;
  const item = items[menuIndex];
  if (!item) return;
  handleAction(item);
}

function handleAction(item) {
  switch (item.action) {
    case 'push':
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      currentView = item.target;
      menuIndex = 0;
      menuOffset = 0;
      render();
      break;

    case 'go':
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      currentView = item.target;
      render();
      break;

    case 'play_song':
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      playSong(item.index);
      currentView = 'now_playing';
      render();
      break;

    case 'shuffle': {
      // Shuffle all songs, play first
      const list = allSongs();
      const shuffled = [...list].sort(() => Math.random() - 0.5);
      // rebuild order
      state.songs = shuffled.filter(s => s.id !== undefined);
      state.userSongs = shuffled.filter(s => s.id === undefined);
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      playSong(0);
      currentView = 'now_playing';
      render();
      break;
    }

    case 'upload':
      document.getElementById('fileInput').click();
      break;

    case 'toggle_shuffle':
      state.shuffle = !state.shuffle;
      render();
      break;

    case 'toggle_repeat':
      cycleRepeat();
      break;

    case 'set_eq':
      applyEQ(item.eq);
      render();
      break;

    case 'artist_songs': {
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      currentView = 'artist_songs_' + item.artist;
      menuIndex = 0; menuOffset = 0;
      render();
      break;
    }

    case 'album_songs': {
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      currentView = 'album_songs_' + item.album;
      menuIndex = 0; menuOffset = 0;
      render();
      break;
    }

    case 'genre_songs': {
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      currentView = 'genre_songs_' + item.genre;
      menuIndex = 0; menuOffset = 0;
      render();
      break;
    }
  }
}

function goBack() {
  if (currentView === 'now_playing') {
    const prev = menuStack.pop();
    if (prev) {
      currentView = prev.view;
      menuIndex = prev.index;
      menuOffset = prev.offset;
    } else {
      currentView = 'main_menu';
      menuIndex = 0; menuOffset = 0;
    }
    render();
    return;
  }
  if (menuStack.length > 0) {
    const prev = menuStack.pop();
    currentView = prev.view;
    menuIndex = prev.index;
    menuOffset = prev.offset;
  } else {
    currentView = 'main_menu';
    menuIndex = 0;
    menuOffset = 0;
  }
  render();
}

// ─── Screen Renderer ─────────────────────────────────────────
const screenBody = document.getElementById('screenBody');
const statusTime = document.getElementById('statusTime');
const batteryIcon = document.getElementById('batteryIcon');

function render() {
  updateStatusBar();
  switch (currentView) {
    case 'splash':        renderSplash();      break;
    case 'now_playing':   renderNowPlaying();  break;
    case 'volume_view':   renderVolume();      break;
    case 'about_view':    renderAbout();       break;
    default:
      if (currentView.startsWith('artist_songs_')) {
        renderFilteredSongs('artist', currentView.replace('artist_songs_', ''));
      } else if (currentView.startsWith('album_songs_')) {
        renderFilteredSongs('album', currentView.replace('album_songs_', ''));
      } else if (currentView.startsWith('genre_songs_')) {
        renderFilteredSongs('genre', currentView.replace('genre_songs_', ''));
      } else {
        renderMenu();
      }
  }
}

function updateStatusBar() {
  const now = new Date();
  statusTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const bars = '▮'.repeat(state.batteryLevel) + '▯'.repeat(3 - state.batteryLevel);
  batteryIcon.textContent = bars;
}

function renderSplash() {
  screenBody.innerHTML = `
    <div class="splash-view">
      <div class="splash-apple">🍎</div>
      <div class="splash-text">iPod</div>
    </div>`;
}

function getMenuTitle() {
  const titles = {
    main_menu: 'iPod', music_menu: 'Music', extras_menu: 'Extras',
    settings_menu: 'Settings', songs_list: 'Songs', artists_list: 'Artists',
    albums_list: 'Albums', genres_list: 'Genres', eq_menu: 'EQ', about_view: 'About',
  };
  if (currentView.startsWith('artist_songs_')) return currentView.replace('artist_songs_', '');
  if (currentView.startsWith('album_songs_'))  return currentView.replace('album_songs_', '');
  if (currentView.startsWith('genre_songs_'))  return currentView.replace('genre_songs_', '');
  return titles[currentView] || 'iPod';
}

function renderMenu() {
  const items = currentMenuItems();
  const title = getMenuTitle();

  const rows = items.slice(menuOffset, menuOffset + MAX_VISIBLE).map((item, i) => {
    const globalIdx = i + menuOffset;
    const isSelected = globalIdx === menuIndex;
    const hasArrow = ['push', 'go', 'artist_songs', 'genre_songs'].includes(item.action);
    const playDot = item.isPlaying ? '♪ ' : '';
    const checkmark = item.selected ? ' ✓' : '';
    return `
      <div class="menu-item${isSelected ? ' selected' : ''}">
        <span class="item-label">${playDot}${escHtml(item.icon || '')} ${escHtml(item.label)}${checkmark}</span>
        ${hasArrow ? '<span class="item-arrow">›</span>' : ''}
      </div>`;
  }).join('');

  screenBody.innerHTML = `
    <div class="menu-view">
      <div class="menu-title-bar">${escHtml(title)}</div>
      <div class="menu-items">${rows}</div>
    </div>`;
}

function renderFilteredSongs(type, value) {
  const filtered = allSongs()
    .map((s, i) => ({ ...s, origIndex: i }))
    .filter(s => {
      if (type === 'artist') return s.artist === value;
      if (type === 'album')  return s.album  === value;
      return s.genre === value;
    });

  const rows = filtered.slice(menuOffset, menuOffset + MAX_VISIBLE).map((s, i) => {
    const globalIdx = i + menuOffset;
    const isSelected = globalIdx === menuIndex;
    const playDot = state.currentIndex === s.origIndex && state.isPlaying ? '♪ ' : '';
    return `
      <div class="menu-item${isSelected ? ' selected' : ''}" data-idx="${s.origIndex}">
        <span class="item-label">${playDot}${escHtml(s.title)}</span>
        <span class="item-arrow">›</span>
      </div>`;
  }).join('');

  screenBody.innerHTML = `
    <div class="menu-view">
      <div class="menu-title-bar">${escHtml(value)}</div>
      <div class="menu-items">${rows || '<div class="menu-item">No songs</div>'}</div>
    </div>`;

  // Patch selectItem for this view
  state._filteredSongs = filtered;
}

function renderNowPlaying() {
  const song = currentSong();
  if (!song) { renderMenu(); return; }

  const elapsed = audio.currentTime || 0;
  const total = audio.duration || 0;
  const pct = total > 0 ? (elapsed / total) * 100 : 0;
  const fmtTime = t => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const shuffleOn = state.shuffle ? 'active' : '';
  const repeatIcon = state.repeatMode === 'one' ? '🔂' : state.repeatMode === 'all' ? '🔁' : '↩';
  const repeatOn = state.repeatMode !== 'none' ? 'active' : '';
  const playIcon = state.isPlaying ? '⏸' : '▶';

  const art = `background: linear-gradient(135deg, ${song.color[0]}, ${song.color[1]})`;
  const trackNum = `${state.currentIndex + 1} of ${allSongs().length}`;

  screenBody.innerHTML = `
    <div class="now-playing-view">
      <div class="np-title-bar">Now Playing</div>
      <div class="np-art" style="${art}">${song.emoji || '♪'}</div>
      <div class="np-info">
        <div class="np-track-title" title="${escHtml(song.title)}">${escHtml(truncate(song.title, 22))}</div>
        <div class="np-track-artist">${escHtml(truncate(song.artist, 24))}</div>
        <div class="np-track-num">${trackNum}</div>
      </div>
      <div class="np-controls">
        <span class="np-control-btn ${shuffleOn}" id="npShuffle" title="Shuffle">⇌</span>
        <span class="np-control-btn ${repeatOn}" id="npRepeat" title="Repeat">${repeatIcon}</span>
      </div>
      <div class="np-progress-area">
        <div class="np-progress-bar" id="npProgressBar">
          <div class="np-progress-fill" style="width:${pct.toFixed(1)}%"></div>
        </div>
      </div>
      <div class="np-time-row">
        <span>${fmtTime(elapsed)}</span>
        <span>${total > 0 ? fmtTime(total) : '--:--'}</span>
      </div>
    </div>`;

  // Bind now-playing controls
  document.getElementById('npShuffle')?.addEventListener('click', e => {
    e.stopPropagation();
    state.shuffle = !state.shuffle;
    render();
  });
  document.getElementById('npRepeat')?.addEventListener('click', e => {
    e.stopPropagation();
    cycleRepeat();
  });
  document.getElementById('npProgressBar')?.addEventListener('click', e => {
    if (audio.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    }
  });
}

function renderVolume() {
  const pct = Math.round(state.volume * 100);
  screenBody.innerHTML = `
    <div class="volume-view">
      <div class="volume-title">Volume</div>
      <div class="volume-body">
        <div class="volume-label">${pct}%</div>
        <div class="volume-icons">
          <span>🔈</span>
          <span>🔊</span>
        </div>
        <div class="volume-track">
          <div class="volume-fill" style="width:${pct}%"></div>
        </div>
        <div style="font-size:10px;color:#888;margin-top:4px;">Scroll wheel to adjust</div>
      </div>
    </div>`;
}

function renderAbout() {
  const list = allSongs();
  screenBody.innerHTML = `
    <div class="menu-view">
      <div class="menu-title-bar">About</div>
      <div class="menu-items">
        <div class="menu-item"><span class="item-label" style="font-size:10px">Virtual iPod v1.0</span></div>
        <div class="menu-item"><span class="item-label" style="font-size:10px">Songs: ${list.length}</span></div>
        <div class="menu-item"><span class="item-label" style="font-size:10px">EQ: ${state.eq}</span></div>
        <div class="menu-item"><span class="item-label" style="font-size:10px">Shuffle: ${state.shuffle ? 'On' : 'Off'}</span></div>
        <div class="menu-item"><span class="item-label" style="font-size:10px">Repeat: ${state.repeatMode}</span></div>
        <div class="menu-item"><span class="item-label" style="font-size:10px">Music: Public Domain</span></div>
      </div>
    </div>`;
}

// ─── Click Wheel ──────────────────────────────────────────────
const wheelRing = document.getElementById('wheelRing');
const btnSelect = document.getElementById('btnSelect');
const btnMenu   = document.getElementById('btnMenu');
const btnPlay   = document.getElementById('btnPlay');
const btnPrev   = document.getElementById('btnPrev');
const btnNext   = document.getElementById('btnNext');
const playBtnIcon = document.getElementById('playBtnIcon');

let wheelDrag = false;
let wheelLastAngle = null;
let wheelAccum = 0;
const SCROLL_THRESHOLD = 25; // degrees per scroll step

function getWheelAngle(e) {
  const rect = wheelRing.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const { clientX, clientY } = e.touches ? e.touches[0] : e;
  return Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
}

function angleDiff(a, b) {
  let d = a - b;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
}

wheelRing.addEventListener('mousedown', e => {
  if (state.holdOn) return;
  if (isInsideCenter(e)) return;  // handled by center button
  wheelDrag = true;
  wheelLastAngle = getWheelAngle(e);
  wheelAccum = 0;
  e.preventDefault();
});

wheelRing.addEventListener('touchstart', e => {
  if (state.holdOn) return;
  if (isInsideCenter(e)) return;
  wheelDrag = true;
  wheelLastAngle = getWheelAngle(e);
  wheelAccum = 0;
  e.preventDefault();
}, { passive: false });

document.addEventListener('mousemove', e => {
  if (!wheelDrag) return;
  const angle = getWheelAngle(e);
  const diff = angleDiff(angle, wheelLastAngle);
  wheelAccum += diff;
  wheelLastAngle = angle;
  while (wheelAccum > SCROLL_THRESHOLD) {
    wheelAccum -= SCROLL_THRESHOLD;
    onWheelScroll(1);
  }
  while (wheelAccum < -SCROLL_THRESHOLD) {
    wheelAccum += SCROLL_THRESHOLD;
    onWheelScroll(-1);
  }
});

document.addEventListener('touchmove', e => {
  if (!wheelDrag) return;
  const angle = getWheelAngle(e);
  const diff = angleDiff(angle, wheelLastAngle);
  wheelAccum += diff;
  wheelLastAngle = angle;
  while (wheelAccum > SCROLL_THRESHOLD) {
    wheelAccum -= SCROLL_THRESHOLD;
    onWheelScroll(1);
  }
  while (wheelAccum < -SCROLL_THRESHOLD) {
    wheelAccum += SCROLL_THRESHOLD;
    onWheelScroll(-1);
  }
  e.preventDefault();
}, { passive: false });

document.addEventListener('mouseup',  () => { wheelDrag = false; });
document.addEventListener('touchend', () => { wheelDrag = false; });

function isInsideCenter(e) {
  const center = btnSelect.getBoundingClientRect();
  const { clientX, clientY } = e.touches ? e.touches[0] : e;
  const r = center.width / 2;
  const dx = clientX - (center.left + r);
  const dy = clientY - (center.top + r);
  return dx * dx + dy * dy < r * r;
}

function onWheelScroll(dir) {
  if (currentView === 'volume_view') {
    state.volume = Math.max(0, Math.min(1, state.volume + dir * 0.05));
    audio.volume = state.volume;
    renderVolume();
    return;
  }
  if (currentView === 'now_playing') {
    // scroll changes volume in now playing
    state.volume = Math.max(0, Math.min(1, state.volume + dir * 0.05));
    audio.volume = state.volume;
    return;
  }
  navigate(dir);
}

// ─── Button Clicks ────────────────────────────────────────────
function wakeScreen() {
  if (currentView === 'splash') {
    currentView = 'main_menu';
    menuIndex = 0;
    menuStack = [];
    render();
  }
}

btnSelect.addEventListener('click', e => {
  e.stopPropagation();
  if (state.holdOn) return;
  wakeScreen();
  if (currentView === 'now_playing') return; // clicks handled inside
  // For filtered song views
  if (currentView.startsWith('artist_songs_') || currentView.startsWith('album_songs_') || currentView.startsWith('genre_songs_')) {
    const filtered = state._filteredSongs || [];
    const song = filtered[menuIndex];
    if (song) {
      menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
      playSong(song.origIndex);
      currentView = 'now_playing';
      render();
    }
    return;
  }
  btnSelect.classList.add('pressed');
  setTimeout(() => btnSelect.classList.remove('pressed'), 120);
  selectItem();
});

btnMenu.addEventListener('click', e => {
  e.stopPropagation();
  if (state.holdOn) return;
  if (currentView === 'splash') { wakeScreen(); return; }
  flashBtn(btnMenu);
  goBack();
});

btnPlay.addEventListener('click', e => {
  e.stopPropagation();
  if (state.holdOn) return;
  wakeScreen();
  flashBtn(btnPlay);
  togglePlay();
});

btnPrev.addEventListener('click', e => {
  e.stopPropagation();
  if (state.holdOn) return;
  wakeScreen();
  flashBtn(btnPrev);
  prevTrack();
  if (currentView !== 'now_playing') {
    menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
    currentView = 'now_playing';
    render();
  }
});

btnNext.addEventListener('click', e => {
  e.stopPropagation();
  if (state.holdOn) return;
  wakeScreen();
  flashBtn(btnNext);
  nextTrack();
  if (currentView !== 'now_playing') {
    menuStack.push({ view: currentView, index: menuIndex, offset: menuOffset });
    currentView = 'now_playing';
    render();
  }
});

function flashBtn(el) {
  el.classList.add('pressed');
  setTimeout(() => el.classList.remove('pressed'), 150);
}

function updatePlayIcon() {
  if (!playBtnIcon) return;
  playBtnIcon.innerHTML = state.isPlaying
    ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
    : '<path d="M8 5v14l11-7z"/>';
}

// ─── Hold Switch ──────────────────────────────────────────────
const holdSwitch = document.getElementById('holdSwitch');
holdSwitch.addEventListener('click', () => {
  state.holdOn = !state.holdOn;
  holdSwitch.classList.toggle('on', state.holdOn);
  if (state.holdOn) {
    screenBody.innerHTML = `
      <div class="splash-view">
        <div style="font-size:14px;color:#666">🔒 Hold</div>
        <div style="font-size:10px;color:#444">Slide to unlock</div>
      </div>`;
  } else {
    render();
  }
});

// ─── File Upload ──────────────────────────────────────────────
document.getElementById('fileInput').addEventListener('change', function () {
  const files = Array.from(this.files);
  if (!files.length) return;

  files.forEach(file => {
    const url = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, '');
    state.userSongs.push({
      title: name,
      artist: 'Unknown Artist',
      album: 'My Music',
      year: new Date().getFullYear().toString(),
      genre: 'User Upload',
      url,
      color: ['#1a1a1a', '#374151'],
      emoji: '🎵',
    });
  });

  // Navigate to songs list
  menuStack = [];
  currentView = 'songs_list';
  menuIndex = allSongs().length - files.length;
  menuOffset = Math.max(0, menuIndex - 2);
  render();

  // Auto-play first uploaded song
  if (files.length > 0) {
    const idx = state.songs.length + state.userSongs.length - files.length;
    playSong(idx);
    currentView = 'now_playing';
    render();
  }

  this.value = '';
});

// ─── Keyboard Shortcuts ───────────────────────────────────────
document.addEventListener('keydown', e => {
  if (state.holdOn) return;
  wakeScreen();
  switch (e.code) {
    case 'Space':       e.preventDefault(); togglePlay(); break;
    case 'ArrowUp':     e.preventDefault(); navigate(-1); break;
    case 'ArrowDown':   e.preventDefault(); navigate(1);  break;
    case 'ArrowLeft':   e.preventDefault(); prevTrack();  break;
    case 'ArrowRight':  e.preventDefault(); nextTrack();  break;
    case 'Enter':       e.preventDefault(); selectItem(); break;
    case 'Escape':      e.preventDefault(); goBack();     break;
  }
});

// ─── Clock ────────────────────────────────────────────────────
setInterval(updateStatusBar, 10000);

// ─── Helpers ─────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function truncate(str, len) {
  return str.length > len ? str.slice(0, len - 1) + '…' : str;
}

// ─── Boot ─────────────────────────────────────────────────────
render();

// Auto-transition from splash after 1.8s
setTimeout(() => {
  if (currentView === 'splash') {
    currentView = 'main_menu';
    menuIndex = 0;
    render();
  }
}, 1800);
