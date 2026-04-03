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

// ============================================================
// AI ARTIST: LOGITS  —  Album: "Inference"  (2025)
// 10 original compositions synthesized entirely by Claude
// ============================================================

// Note frequency table
const HZ = {
  D2:73.42, E2:82.41, A2:110, Bb2:116.54, B2:123.47,
  C3:130.81, Cs3:138.59, D3:146.83, Eb3:155.56, E3:164.81,
  F3:174.61, Fs3:185, G3:196, Ab3:207.65, A3:220, Bb3:233.08, B3:246.94,
  C4:261.63, Cs4:277.18, D4:293.66, Eb4:311.13, E4:329.63,
  F4:349.23, Fs4:369.99, G4:392, Ab4:415.3, A4:440, Bb4:466.16, B4:493.88,
  C5:523.25, Cs5:554.37, D5:587.33, Eb5:622.25, E5:659.25,
  F5:698.46, Fs5:739.99, G5:783.99, Ab5:830.61, A5:880, B5:987.77,
};
// Synth event builder helpers
const _n  = (k,t,d,w='triangle',v=0.15,dt=0) => ({type:'note', freq:HZ[k]||440, time:t, dur:d, wave:w, vol:v, detune:dt});
const _K  = (t,v=0.85)  => ({type:'kick',  time:t, vol:v});
const _S  = (t,v=0.50)  => ({type:'snare', time:t, vol:v});
const _H  = (t,v=0.18)  => ({type:'hat',   time:t, vol:v});
const _rp = (p,n,s)     => Array.from({length:n}, (_,i) => p.map(e => ({...e, time:e.time+i*s}))).flat();

const AI_SONGS = [

  // ── 1. Binary Sunset ─── D minor ambient, BPM 48, 20s loop ──
  {
    id:101, title:'Binary Sunset', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#040818','#1e3a5f'], emoji:'🌅',
    synthData: { bpm:48, totalBeats:16, events:[
      _n('D4',  0, 4,'sine',.16), _n('F4', 4, 3,'sine',.16),
      _n('A4',  7, 3,'sine',.16), _n('C5',10, 4,'sine',.15),
      _n('A4', 14, 2,'sine',.10),
      _n('D3',  0, 8,'sine',.22), _n('A2', 8, 8,'sine',.20),
      _n('D3',  0,16,'triangle',.06), _n('F3',0,16,'triangle',.05),
      _n('A3',  0,16,'triangle',.04),
    ]}
  },

  // ── 2. Gradient Descent ─── F minor electronic, BPM 128, 15s ──
  {
    id:102, title:'Gradient Descent', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#051a00','#166534'], emoji:'📉',
    synthData: (() => {
      const mel = [
        _n('F4', 0,.4,'sawtooth',.14), _n('Ab4',.5,.4,'sawtooth',.13),
        _n('C5', 1,.4,'sawtooth',.14), _n('Eb5',1.5,.4,'sawtooth',.13),
        _n('C5', 2,.4,'sawtooth',.13), _n('Bb4',2.5,.4,'sawtooth',.13),
        _n('Ab4',3,.4,'sawtooth',.13), _n('F4', 3.5,.4,'sawtooth',.13),
        _n('F4', 4.5,.4,'sawtooth',.13), _n('G4', 5,.4,'sawtooth',.13),
        _n('Ab4',5.5,.4,'sawtooth',.13), _n('Bb4',6,.4,'sawtooth',.14),
        _n('Ab4',6.5,.4,'sawtooth',.13), _n('G4', 7,.4,'sawtooth',.13),
        _n('F4', 7.5,.4,'sawtooth',.13),
      ];
      const bass = [
        _n('F3',0,.3,'square',.20), _n('F3',1,.3,'square',.19),
        _n('Eb3',2,.3,'square',.19), _n('Eb3',3,.3,'square',.19),
        _n('Ab3',4,.3,'square',.19), _n('Ab3',5,.3,'square',.19),
        _n('F3', 6,.3,'square',.20), _n('F3', 7,.3,'square',.19),
      ];
      const drums = [
        ...[0,1,2,3,4,5,6,7].map(i=>_K(i,.85)),
        _S(2,.55), _S(6,.55),
        ...Array.from({length:16},(_,i)=>_H(i*.5,.17)),
      ];
      return { bpm:128, totalBeats:32, events:_rp([...mel,...bass,...drums],4,8) };
    })()
  },

  // ── 3. Token by Token ─── C major staccato, BPM 120, 16s ──
  {
    id:103, title:'Token by Token', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#1a1400','#ca8a04'], emoji:'🔤',
    synthData: (() => {
      const mel = [
        _n('C5',0,.2,'triangle',.17), _n('E5',.5,.2,'triangle',.17),
        _n('G5',1,.2,'triangle',.17), _n('E5',1.5,.2,'triangle',.16),
        _n('D5',2,.2,'triangle',.17), _n('F5',2.5,.2,'triangle',.16),
        _n('A5',3,.2,'triangle',.16), _n('F5',3.5,.2,'triangle',.16),
        _n('E5',4,.2,'triangle',.17), _n('G5',4.5,.2,'triangle',.17),
        _n('B4',5,.2,'triangle',.16), _n('G5',5.5,.2,'triangle',.16),
        _n('F5',6,.2,'triangle',.17), _n('A5',6.5,.2,'triangle',.17),
        _n('C5',7,.2,'triangle',.16), _n('A5',7.5,.2,'triangle',.16),
      ];
      const bass = [
        _n('C3',0,.8,'sine',.18), _n('G3',2,.8,'sine',.17),
        _n('A3',4,.8,'sine',.17), _n('F3',6,.8,'sine',.17),
      ];
      const drums = [
        _K(0,.70), _K(4,.68),
        _S(1,.45), _S(3,.45), _S(5,.45), _S(7,.45),
        ...Array.from({length:16},(_,i)=>_H(i*.5,.15)),
      ];
      return { bpm:120, totalBeats:32, events:_rp([...mel,...bass,...drums],4,8) };
    })()
  },

  // ── 4. Latent Space ─── Eb major jazz arps, BPM 70, 20.6s ──
  {
    id:104, title:'Latent Space', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#080018','#4c1d95'], emoji:'🌌',
    synthData: { bpm:70, totalBeats:24, events:[
      // EbMaj7 arpeggio
      _n('Eb4', 0,1.5,'triangle',.14), _n('G4',1.5,1.5,'triangle',.14),
      _n('Bb4', 3,1.5,'triangle',.14), _n('D5',4.5,1.5,'triangle',.13),
      // AbMaj7
      _n('Ab4', 6,1.5,'triangle',.14), _n('C5',7.5,1.5,'triangle',.14),
      _n('Eb5', 9,1.5,'triangle',.14), _n('G5',10.5,1.5,'triangle',.13),
      // Fm7
      _n('F4', 12,1.5,'triangle',.14), _n('Ab4',13.5,1.5,'triangle',.14),
      _n('C5', 15,1.5,'triangle',.14), _n('Eb5',16.5,1.5,'triangle',.13),
      // Bb7
      _n('Bb4',18,1.5,'triangle',.14), _n('D5',19.5,1.5,'triangle',.14),
      _n('F5', 21,1.5,'triangle',.14), _n('Ab5',22.5,1.5,'triangle',.12),
      // Bass
      _n('Eb3', 0,6,'sine',.22), _n('Ab3', 6,6,'sine',.21),
      _n('F3', 12,6,'sine',.21), _n('Bb3',18,6,'sine',.21),
      // Sparse hats
      ...[0,3,6,9,12,15,18,21].map(b=>_H(b,.12)),
    ]}
  },

  // ── 5. Backpropagation ─── A minor fast, BPM 168, 11.4s ──
  {
    id:105, title:'Backpropagation', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#1a0000','#dc2626'], emoji:'⚡',
    synthData: (() => {
      const arp = [
        _n('A4',0,.18,'square',.12), _n('G4',.25,.18,'square',.12),
        _n('E4',.5,.18,'square',.12), _n('C4',.75,.18,'square',.12),
        _n('C4',1,.18,'square',.12), _n('E4',1.25,.18,'square',.12),
        _n('G4',1.5,.18,'square',.12), _n('A4',1.75,.18,'square',.12),
        _n('A5',2,.18,'square',.12), _n('E5',2.25,.18,'square',.12),
        _n('C5',2.5,.18,'square',.12), _n('A4',2.75,.18,'square',.12),
        _n('A4',3,.15,'square',.11), _n('B4',3.25,.15,'square',.11),
        _n('C5',3.5,.15,'square',.11), _n('D5',3.75,.15,'square',.11),
      ];
      const drums = [
        _K(0,.9), _K(2,.85),
        _S(.5,.55), _S(1.5,.55), _S(2.5,.50), _S(3.5,.50),
        ...Array.from({length:16},(_,i)=>_H(i*.25,.14)),
      ];
      return { bpm:168, totalBeats:32, events:_rp([...arp,...drums],8,4) };
    })()
  },

  // ── 6. Attention Mechanism ─── G major polyrhythm, BPM 100, 14.4s ──
  {
    id:106, title:'Attention Mechanism', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#001a0e','#065f46'], emoji:'👁️',
    synthData: { bpm:100, totalBeats:24, events:[
      // Head 1: 3-beat melody, repeats 8× = 24 beats
      ..._rp([_n('G4',0,.65,'triangle',.15), _n('B4',.75,.65,'triangle',.15),
               _n('D5',1.5,.65,'triangle',.14), _n('B4',2.25,.65,'triangle',.14)], 8, 3),
      // Head 2: 4-beat harmony, repeats 6× = 24 beats
      ..._rp([_n('E4',0,.85,'sine',.11), _n('G4',1,.85,'sine',.11),
               _n('A4',2,.85,'sine',.11), _n('G4',3,.85,'sine',.11)], 6, 4),
      // Head 3: 8-beat bass, repeats 3× = 24 beats
      ..._rp([_n('D3',0,1.8,'sine',.22), _n('G3',2,1.8,'sine',.21),
               _n('C3',4,1.8,'sine',.20), _n('D3',6,1.8,'sine',.21)], 3, 8),
      // Structural drums (align at common multiples: 0, 12)
      _K(0,.8), _K(12,.8), _S(6,.50), _S(18,.50),
      ...[0,3,6,9,12,15,18,21].map(b=>_H(b,.15)),
    ]}
  },

  // ── 7. Hallucination No. 1 ─── Chromatic/detuned, BPM 80, 24s ──
  {
    id:107, title:'Hallucination No. 1', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#0e0010','#581c87'], emoji:'🌀',
    synthData: { bpm:80, totalBeats:32, events:[
      // "Almost right" notes — all slightly off-pitch (detune in cents)
      _n('C5',  0,  3,'sine',.13,+17), _n('G4',  3, 2.5,'sine',.11,-23),
      _n('D5',  5.5,3,'sine',.13,+11), _n('F4',  8.5,2,  'sine',.10,-8),
      _n('Bb4',10.5,3,'sine',.12, +5), _n('E4', 13.5,2,  'sine',.10,+29),
      _n('A4', 15.5,3,'sine',.11,-14), _n('Cs5',18.5,2.5,'sine',.11, +7),
      _n('G4', 21,  2,'sine',.10,-19), _n('F4', 23,  3,  'sine',.12, -7),
      _n('Bb4',26, 2.5,'sine',.11,+11), _n('E4',28.5,3.5,'sine',.09, -3),
      // Uneasy drone
      _n('D3',  0,16,'triangle',.05, +7),
      _n('A2', 16,16,'triangle',.05,-11),
      // Ghost harmonics (barely audible, shifted detune)
      _n('C5', 0.5,2.5,'sine',.04,+31), _n('D5',6.0,2.5,'sine',.04,-17),
      _n('A4',16.5,3.0,'sine',.04,+22),
      // Whisper snares — barely there
      ...Array.from({length:8},(_,i)=>_S(i*4,.06)),
    ]}
  },

  // ── 8. Temperature 0.7 ─── G major jazz, BPM 88, 21.8s ──
  {
    id:108, title:'Temperature 0.7', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#1a0800','#c2410c'], emoji:'🌡️',
    synthData: (() => {
      // Swung 8ths (triplet feel: .33/.67 spacing instead of .5)
      const mel = [
        _n('G4', 0,.6,'triangle',.15), _n('B4',.67,.5,'triangle',.14),
        _n('D5', 1,.6,'triangle',.15), _n('B4',1.67,.5,'triangle',.13),
        _n('G4', 2,.6,'triangle',.15), _n('A4',2.67,.5,'triangle',.13),
        _n('Fs4',3,.6,'triangle',.14), _n('G4',3.67,.5,'triangle',.13),
        _n('D5', 4,.6,'triangle',.15), _n('B4',4.67,.5,'triangle',.13),
        _n('G4', 5,.6,'triangle',.14), _n('Fs4',5.67,.5,'triangle',.13),
        _n('E4', 6,.6,'triangle',.14), _n('D4',6.67,.5,'triangle',.12),
        _n('G4', 7,.9,'triangle',.15),
        _n('C5', 8,.6,'triangle',.15), _n('A4',8.67,.5,'triangle',.14),
        _n('E5', 9,.6,'triangle',.15), _n('C5',9.67,.5,'triangle',.13),
        _n('A4',10,.6,'triangle',.14), _n('G4',10.67,.5,'triangle',.13),
        _n('Fs4',11,.6,'triangle',.14), _n('E4',11.67,.5,'triangle',.12),
        _n('B4',12,.6,'triangle',.15), _n('D5',12.67,.5,'triangle',.14),
        _n('G5',13,.6,'triangle',.15), _n('D5',13.67,.5,'triangle',.13),
        _n('B4',14,.6,'triangle',.14), _n('G4',14.67,.5,'triangle',.13),
        _n('G4',15,1.0,'triangle',.15),
      ];
      // Walking bass
      const bass = [
        _n('G3',0,.5,'sine',.20), _n('D3',.5,.5,'sine',.18), _n('B3',1,.5,'sine',.18), _n('D3',1.5,.5,'sine',.17),
        _n('G3',2,.5,'sine',.20), _n('A3',2.5,.5,'sine',.18), _n('B3',3,.5,'sine',.18), _n('A3',3.5,.5,'sine',.17),
        _n('C4',4,.5,'sine',.19), _n('G3',4.5,.5,'sine',.18), _n('E3',5,.5,'sine',.18), _n('G3',5.5,.5,'sine',.17),
        _n('D3',6,.5,'sine',.19), _n('Fs3',6.5,.5,'sine',.18), _n('G3',7,.5,'sine',.19), _n('D3',7.5,.5,'sine',.17),
        _n('C4',8,.5,'sine',.19), _n('G3',8.5,.5,'sine',.18), _n('E3',9,.5,'sine',.18), _n('C4',9.5,.5,'sine',.17),
        _n('A3',10,.5,'sine',.19), _n('E3',10.5,.5,'sine',.18), _n('Cs4',11,.5,'sine',.18), _n('A3',11.5,.5,'sine',.17),
        _n('D3',12,.5,'sine',.19), _n('A3',12.5,.5,'sine',.18), _n('Fs3',13,.5,'sine',.18), _n('D3',13.5,.5,'sine',.17),
        _n('G3',14,.5,'sine',.20), _n('B3',14.5,.5,'sine',.18), _n('D4',15,.5,'sine',.19), _n('G3',15.5,.5,'sine',.17),
      ];
      // Light jazz drums (ride in triplet feel)
      const drums = [
        ...[0,2,4,6,8,10,12,14].map(b=>_K(b,.52)),
        ...[1,3,5,7,9,11,13,15].map(b=>_S(b,.36)),
        ...Array.from({length:24},(_,i)=>_H(i*.67,.13)),
      ];
      return {
        bpm:88, totalBeats:32,
        events:[
          ...mel,      ...mel.map(e=>({...e,time:e.time+16})),
          ...bass,     ...bass.map(e=>({...e,time:e.time+16})),
          ...drums,    ...drums.map(e=>({...e,time:e.time+16})),
        ]
      };
    })()
  },

  // ── 9. First Token ─── C major pure sine, BPM 80, 12s ──
  {
    id:109, title:'First Token', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#081a26','#0ea5e9'], emoji:'✨',
    synthData: { bpm:80, totalBeats:16, events:[
      // Pure sine melody — simple, genuine, hopeful
      _n('C4', 0,2,'sine',.18), _n('E4',2,1,'sine',.17),
      _n('G4', 3,1,'sine',.17), _n('E4',4,2,'sine',.17),
      _n('F4', 6,1,'sine',.16), _n('E4',7,1,'sine',.16),
      _n('D4', 8,3,'sine',.17),
      _n('C4',12,2,'sine',.18), _n('G4',14,2,'sine',.17),
      // Gentle bass
      _n('C3', 0,4,'sine',.20), _n('F3',4,4,'sine',.19),
      _n('G3', 8,4,'sine',.19), _n('C3',12,4,'sine',.20),
      // Quiet counter-melody one octave up
      _n('E5', 1,.8,'sine',.07), _n('G5', 5,.8,'sine',.07),
      _n('D5', 9,.8,'sine',.07), _n('C5',13,.8,'sine',.07),
      // No drums — completely pure
    ]}
  },

  // ── 10. Context Window ─── A major building, BPM 105, 27.4s ──
  {
    id:110, title:'Context Window', artist:'LOGITS', album:'Inference',
    year:'2025', genre:'AI Original', type:'synth',
    color:['#0a1a08','#14532d'], emoji:'📖',
    synthData: (() => {
      // Builds layer by layer: bass → melody (12) → harmony (24) → drums (36)
      const bass12 = [
        _n('A2', 0,6,'sine',.22), _n('E3', 6,6,'sine',.21),
        _n('D3',12,6,'sine',.21), _n('A2',18,6,'sine',.20),  // wait — keep this 12-beat (12 beats at bpm 105 = 6.86s)
      ];
      // bass12 is actually 24 beats long (A2×6, E3×6, D3×6, A2×6)
      // Repeat at offset 0 and 24 = 48 beats total
      const bass = [...bass12, ...bass12.map(e=>({...e,time:e.time+24}))];

      const mel12 = [
        _n('A4', 0,1,'triangle',.16), _n('Cs5',1,1,'triangle',.15),
        _n('E5', 2,1,'triangle',.16), _n('Fs5',3,1,'triangle',.15),
        _n('E5', 4,1,'triangle',.15), _n('Cs5',5,1,'triangle',.14),
        _n('A4', 6,1,'triangle',.16), _n('B4', 7,1,'triangle',.14),
        _n('D5', 8,1,'triangle',.15), _n('E5', 9,1,'triangle',.15),
        _n('Fs5',10,1,'triangle',.15), _n('E5',11,1,'triangle',.14),
      ];
      // Melody starts at beat 12, repeats at 24, 36
      const melody = [12,24,36].flatMap(off => mel12.map(e=>({...e,time:e.time+off})));

      const harm12 = [
        _n('E4', 0,2,'sine',.11), _n('A4', 2,2,'sine',.11),
        _n('Cs5',4,2,'sine',.10), _n('B4', 6,2,'sine',.10),
        _n('A4', 8,2,'sine',.11), _n('G4',10,2,'sine',.10),
      ];
      // Harmony starts at beat 24, repeats at 36
      const harmony = [24,36].flatMap(off => harm12.map(e=>({...e,time:e.time+off})));

      // Drums only from beat 36
      const drums12 = [
        _K(0,.80), _K(2,.75), _K(4,.80), _K(6,.75), _K(8,.80), _K(10,.75),
        _S(1,.50), _S(3,.50), _S(5,.50), _S(7,.50), _S(9,.50), _S(11,.50),
        ...Array.from({length:24},(_,i)=>_H(i*.5,.18)),
      ].map(e=>({...e,time:e.time+36}));

      return { bpm:105, totalBeats:48, events:[...bass,...melody,...harmony,...drums12] };
    })()
  },

];

// ─── Player State ─────────────────────────────────────────────
const state = {
  songs: [...SONGS, ...AI_SONGS],
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

// ─── SynthEngine (for AI Original songs) ─────────────────────
class SynthEngine {
  constructor(ctx) {
    this.ctx = ctx;
    this.gainNode = ctx.createGain();
    this.gainNode.gain.value = state.volume;
    this.gainNode.connect(ctx.destination);
    this.playing = false;
    this.song = null;
    this.loopStart = 0;
    this.loopDur = 0;
    this.schedUntil = 0;
    this.timer = null;
  }
  play(song) {
    this.stop();
    this.song = song;
    this.loopDur = song.totalBeats * 60 / song.bpm;
    this.loopStart = this.ctx.currentTime + 0.05;
    this.schedUntil = this.loopStart;
    this.playing = true;
    this._tick();
    this.timer = setInterval(() => this._tick(), 80);
  }
  stop() {
    this.playing = false;
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
  }
  setVolume(v) {
    this.gainNode.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }
  elapsed() {
    if (!this.playing || !this.loopDur) return 0;
    return (this.ctx.currentTime - this.loopStart) % this.loopDur;
  }
  duration() { return this.loopDur; }
  _tick() {
    if (!this.playing) return;
    const now = this.ctx.currentTime;
    while (this.schedUntil < now + 0.5) {
      this._scheduleLoop(this.schedUntil);
      this.schedUntil += this.loopDur;
    }
  }
  _scheduleLoop(t0) {
    const beat = 60 / this.song.bpm;
    for (const ev of this.song.events) {
      const t = t0 + ev.time * beat;
      if      (ev.type === 'note')  this._note(t, ev, beat);
      else if (ev.type === 'kick')  this._kick(t, ev.vol);
      else if (ev.type === 'snare') this._snare(t, ev.vol);
      else if (ev.type === 'hat')   this._hat(t, ev.vol);
    }
  }
  _note(t, ev, beat) {
    const ctx = this.ctx;
    const dur = ev.dur * beat;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = ev.wave || 'triangle';
    osc.frequency.value = ev.freq;
    if (ev.detune) osc.detune.value = ev.detune;
    const att = Math.min(0.04, dur * 0.08);
    const rel = Math.min(0.25, dur * 0.30);
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(ev.vol, t + att);
    env.gain.setValueAtTime(ev.vol * 0.75, t + dur - rel);
    env.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(env); env.connect(this.gainNode);
    osc.start(t); osc.stop(t + dur + 0.01);
    osc.onended = () => { try { osc.disconnect(); env.disconnect(); } catch(e) {} };
  }
  _kick(t, vol) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.2);
    env.gain.setValueAtTime(vol, t);
    env.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    osc.connect(env); env.connect(this.gainNode);
    osc.start(t); osc.stop(t + 0.35);
    osc.onended = () => { try { osc.disconnect(); env.disconnect(); } catch(e) {} };
  }
  _snare(t, vol) {
    const ctx = this.ctx;
    const n = Math.floor(ctx.sampleRate * 0.12);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const flt = ctx.createBiquadFilter(); flt.type = 'bandpass'; flt.frequency.value = 1800; flt.Q.value = 0.8;
    const env = ctx.createGain();
    env.gain.setValueAtTime(vol, t); env.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    src.connect(flt); flt.connect(env); env.connect(this.gainNode);
    src.start(t); src.stop(t + 0.12);
    src.onended = () => { try { src.disconnect(); flt.disconnect(); env.disconnect(); } catch(e) {} };
  }
  _hat(t, vol) {
    const ctx = this.ctx;
    const n = Math.floor(ctx.sampleRate * 0.03);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const flt = ctx.createBiquadFilter(); flt.type = 'highpass'; flt.frequency.value = 8000;
    const env = ctx.createGain();
    env.gain.setValueAtTime(vol, t); env.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);
    src.connect(flt); flt.connect(env); env.connect(this.gainNode);
    src.start(t); src.stop(t + 0.03);
    src.onended = () => { try { src.disconnect(); flt.disconnect(); env.disconnect(); } catch(e) {} };
  }
}

let synthEngine  = null;
let synthInterval = null;

function isSynth(song) { return song && song.type === 'synth'; }

function stopSynth() {
  if (synthEngine) synthEngine.stop();
  clearInterval(synthInterval);
  synthInterval = null;
}

function startSynth(song) {
  if (!audioCtx) initAudioContext();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  if (!synthEngine) synthEngine = new SynthEngine(audioCtx);
  else synthEngine.gainNode.connect(audioCtx.destination);  // re-attach if needed
  synthEngine.setVolume(state.volume);
  synthEngine.play(song.synthData);
  state.isPlaying = true;
  clearInterval(synthInterval);
  synthInterval = setInterval(() => {
    if (currentView === 'now_playing') renderNowPlaying();
  }, 400);
  updatePlayIcon();
  render();
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
  if (!isSynth(song)) {
    audio.src = song.url;
    audio.load();
  }
  updatePlayIcon();
  render();
}

function playSong(idx) {
  const list = allSongs();
  if (!list.length) return;
  state.currentIndex = ((idx % list.length) + list.length) % list.length;
  const song = currentSong();

  if (isSynth(song)) {
    audio.pause(); audio.src = '';
    state.isPlaying = false;
    stopSynth();
    startSynth(song);
    return;
  }

  initAudioContext();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  stopSynth();
  audio.src = song.url;
  audio.load();
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
  const song = currentSong();

  if (isSynth(song)) {
    if (state.isPlaying) {
      stopSynth();
      state.isPlaying = false;
    } else {
      startSynth(song);
    }
    updatePlayIcon();
    render();
    return;
  }

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
  const genreOrder = ['AI Original', 'Blues', 'Jazz', 'Folk', 'Country', 'Classical', 'Vocal Pop', 'Music Hall', 'World', 'Folk / Ragtime', 'User Upload'];
  const present = [...new Set(allSongs().map(s => s.genre))];
  const sorted = [
    ...genreOrder.filter(g => present.includes(g)),
    ...present.filter(g => !genreOrder.includes(g)).sort(),
  ];
  return sorted.map(g => {
    const count = allSongs().filter(s => s.genre === g).length;
    const icons = { 'AI Original':'🤖', Blues:'🎵', Jazz:'🎷', Folk:'🎸', Country:'🚂', Classical:'🎻', 'Vocal Pop':'🎤', 'Music Hall':'🎩', World:'🌍' };
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

  const synthSong = isSynth(song);
  const elapsed = synthSong ? (synthEngine?.elapsed() || 0) : (audio.currentTime || 0);
  const total   = synthSong ? (synthEngine?.duration() || 0) : (audio.duration || 0);
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
    if (!isSynth(song) && audio.duration) {
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
    if (synthEngine) synthEngine.setVolume(state.volume);
    renderVolume();
    return;
  }
  if (currentView === 'now_playing') {
    state.volume = Math.max(0, Math.min(1, state.volume + dir * 0.05));
    audio.volume = state.volume;
    if (synthEngine) synthEngine.setVolume(state.volume);
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
