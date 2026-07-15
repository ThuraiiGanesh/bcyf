// app.js

// Initialize components on load
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  renderAll();
  startCountdown();
  setupEventListeners();
  initLucide();
});

// Helper to initialize Lucide icons
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 1. STATE & LOCAL STORAGE DATABASE
// ==========================================
let db = null;

const DEFAULT_BANNER = {
  headline: "Business China",
  highlight: "Youth Forum 2026",
  subtitle: "Where the next generation of leaders convene to shape the future of Sino-Singapore business relations, innovation, and bilateral opportunity.",
  targetDate: "2026-09-30T09:00:00",
  location: "Temasek Polytechnic · Singapore"
};

const DEFAULT_SPEAKERS = [
  {
    id: "speaker-tan",
    name: "Mr. Tan Wei Liang",
    role: "Minister of Trade & Industry",
    org: "Government of Singapore (China Economic Affairs)",
    bio: "Tan Wei Liang is Singapore's Minister of Trade & Industry. He has spearheaded bilateral trade pacts and tech co-innovation corridors with major Chinese cities for over a decade.",
    iconClass: "fa-solid fa-user-tie",
    tag: "VIP Keynote",
    tier: "vip"
  },
  {
    id: "speaker-chen",
    name: "Amb. Chen Liying",
    role: "Cultural & Business Counsellor",
    org: "Embassy of the PRC (Singapore)",
    bio: "Chen Liying is the Cultural Counsellor at the Chinese Embassy. She facilitates academic exchange, business dialogue, and regional connectivity across the ASEAN block.",
    iconClass: "fa-solid fa-building-user",
    tag: "Opening Address",
    tier: "vip"
  },
  {
    id: "speaker-lim",
    name: "Dr. Lim Boon Keng",
    role: "Chairman, Business China",
    org: "Business China Youth Chapter",
    bio: "Dr. Lim is a senior connectivity consultant advising on startup landing policies. He champions young professionals bridging Singapore and GBA ecosystems.",
    iconClass: "fa-solid fa-graduation-cap",
    tag: "Plenary Chair",
    tier: "vip"
  },
  {
    id: "speaker-evelyn",
    name: "Dr. Evelyn Lim",
    role: "Director of Venture Capital",
    org: "Aether Capital Group (Singapore)",
    bio: "Evelyn is a venture capitalist with over 15 years of experience funding early-stage deep tech and consumer enterprise software startups across Southeast Asia and the Yangtze River Delta.",
    iconClass: "fa-solid fa-chart-line",
    tag: "Tech Panelist",
    tier: "general"
  },
  {
    id: "speaker-zhang",
    name: "Zhang Wei",
    role: "Co-Founder & CTO",
    org: "NexusTech AI (Shanghai)",
    bio: "Zhang Wei is an AI architect specializing in distributed language model computing infrastructures and scalable enterprise APIs. He has led technical engineering divisions in Shanghai and Singapore.",
    iconClass: "fa-solid fa-microchip",
    tag: "AI Speaker",
    tier: "general"
  },
  {
    id: "speaker-yiwen",
    name: "Ms. Zhang Yiwen",
    role: "CEO",
    org: "SinoTech Ventures (Shanghai)",
    bio: "Zhang Yiwen is a veteran tech entrepreneur specializing in deep tech and cross-border SaaS products. She manages early-stage seed funds for regional accelerators.",
    iconClass: "fa-solid fa-laptop-code",
    tag: "Tech Entrepreneur",
    tier: "general"
  },
  {
    id: "speaker-kevin",
    name: "Mr. Kevin Ong",
    role: "MD",
    org: "Vertex Holdings (Singapore)",
    bio: "Kevin leads regional private equity investments in tech and infrastructure. He manages bilateral incubation hubs supporting ASEAN-China SaaS founders.",
    iconClass: "fa-solid fa-wallet",
    tag: "Finance Leader",
    tier: "general"
  }
];

const DEFAULT_AGENDA = [
  {
    id: "session-1",
    stream: "singapore",
    time: "09:00 - 09:30",
    badge: "Opening Address",
    title: "Dual-Hub Co-innovation Keynote",
    desc: "Fostering collaboration between Singapore and the Greater Bay Area / Yangtze River Delta startup ecosystems.",
    speakerId: "speaker-tan"
  },
  {
    id: "session-2",
    stream: "singapore",
    time: "10:30 - 12:00",
    badge: "Digital Economy",
    title: "China–ASEAN Digital Economy 2030 Panel",
    desc: "Breaking down complex cloud computing systems, AI toolchains, and digital interfaces pushing corporate expansion.",
    speakerId: "speaker-evelyn"
  },
  {
    id: "session-3",
    stream: "shanghai",
    time: "09:30 - 10:30",
    badge: "AI Infrastructure",
    title: "AI Infrastructure and Cross-border SaaS",
    desc: "Unpacking the technology demands, cloud compliance, and logistics solutions for SaaS startups entering international waters.",
    speakerId: "speaker-zhang"
  },
  {
    id: "session-4",
    stream: "shanghai",
    time: "11:00 - 12:30",
    badge: "Bilateral Trade",
    title: "Digital Brand Engagement & Personal Architecture",
    desc: "How to navigate content marketing flow, launch frameworks, and maintain consistency in high-value youth campaigns.",
    speakerId: "speaker-yiwen"
  }
];

const DEFAULT_SPONSORS = [
  { id: "sponsor-1", name: "Business China", icon: "fa-solid fa-building-columns", tier: "platinum" },
  { id: "sponsor-2", name: "Temasek Poly", icon: "fa-solid fa-graduation-cap", tier: "platinum" },
  { id: "sponsor-3", name: "MTI Singapore", icon: "fa-solid fa-landmark", tier: "gold" },
  { id: "sponsor-4", name: "EnterpriseSG", icon: "fa-solid fa-globe", tier: "gold" },
  { id: "sponsor-5", name: "Aether Capital", icon: "fa-solid fa-chart-pie", tier: "gold" },
  { id: "sponsor-6", name: "NexusTech.AI", icon: "fa-solid fa-network-wired", tier: "silver" }
];

function initDatabase() {
  const localData = localStorage.getItem('bcyf_database');
  if (localData) {
    try {
      db = JSON.parse(localData);
    } catch (e) {
      console.error("Failed to parse database. Reinitializing defaults.", e);
    }
  }
  
  if (!db) {
    db = {
      banner: DEFAULT_BANNER,
      speakers: DEFAULT_SPEAKERS,
      agenda: DEFAULT_AGENDA,
      sponsors: DEFAULT_SPONSORS
    };
    saveDatabase();
  }
}

function saveDatabase() {
  localStorage.setItem('bcyf_database', JSON.stringify(db));
}

// ==========================================
// 2. DYNAMIC RENDERING FUNCTIONS
// ==========================================
function renderAll() {
  renderBanner();
  renderSpeakers();
  renderAgenda();
  renderSponsors();
  populateSpeakerSelects();
  renderAdminLists();
}

function renderBanner() {
  const banner = db.banner;
  // Hero Headline
  const h1 = document.getElementById('hero-headline');
  if (h1) {
    h1.innerHTML = `${banner.headline}<br/><span style="background: linear-gradient(135deg, #4f46e5, #05d9e8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${banner.highlight}</span>`;
  }
  
  // Hero Subtitle
  const p = document.getElementById('hero-subtitle');
  if (p) {
    p.textContent = banner.subtitle;
  }
  
  // Hero Location Tag
  const locationTag = document.getElementById('hero-location-tag');
  if (locationTag) {
    locationTag.textContent = banner.location;
  }

  // Pre-fill Admin Banner settings forms
  const adminHeadline = document.getElementById('admin-hero-headline');
  if (adminHeadline) adminHeadline.value = banner.headline;
  const adminHighlight = document.getElementById('admin-hero-highlight');
  if (adminHighlight) adminHighlight.value = banner.highlight;
  const adminSubtitle = document.getElementById('admin-hero-subtitle');
  if (adminSubtitle) adminSubtitle.value = banner.subtitle;
  const adminLocation = document.getElementById('admin-hero-location');
  if (adminLocation) adminLocation.value = banner.location;
  const adminTargetDate = document.getElementById('admin-hero-target-date');
  if (adminTargetDate) adminTargetDate.value = banner.targetDate;
}

function renderSpeakers() {
  const vipGrid = document.getElementById('vip-speakers-grid');
  const generalGrid = document.getElementById('general-speakers-grid');
  
  if (vipGrid) vipGrid.innerHTML = '';
  if (generalGrid) generalGrid.innerHTML = '';
  
  db.speakers.forEach(speaker => {
    const card = document.createElement('div');
    
    if (speaker.tier === 'vip') {
      // VIP / Keynote Card
      card.className = "glass-vip speaker-card rounded-3xl p-8 border border-white/10 hover:border-cyan/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center cursor-pointer";
      card.setAttribute('onclick', `openSpeakerModal('${speaker.id}')`);
      card.innerHTML = `
        <div class="relative group">
          <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyberCyan to-neonBlue opacity-50 group-hover:opacity-100 blur transition duration-1000"></div>
          <div class="relative w-36 h-36 rounded-2xl overflow-hidden bg-slate-800 border border-white/10 flex items-center justify-center">
            <i class="${speaker.iconClass || 'fa-solid fa-user-tie'} text-5xl text-cyan"></i>
          </div>
        </div>
        <div class="space-y-3 flex-1 text-center sm:text-left">
          <span class="inline-block px-3 py-1 bg-cyan/10 border border-cyan/30 text-cyan rounded-full text-[10px] uppercase font-bold tracking-widest">${speaker.tag || 'VIP'}</span>
          <h3 class="text-xl font-bold text-white">${speaker.name}</h3>
          <p class="text-xs text-slate-400 uppercase tracking-wider">${speaker.role}</p>
          <p class="text-xs text-slate-300 leading-relaxed font-light">${speaker.org}</p>
        </div>
      `;
      if (vipGrid) vipGrid.appendChild(card);
    } else {
      // General Speaker Card
      card.className = "glass-panel speaker-card rounded-2xl p-6 border border-white/10 hover:scale-[1.03] hover:border-cyan/30 transition-all duration-300 group cursor-pointer";
      card.setAttribute('onclick', `openSpeakerModal('${speaker.id}')`);
      card.innerHTML = `
        <div class="w-full aspect-square rounded-xl bg-slate-800 border border-white/5 mb-4 flex items-center justify-center overflow-hidden relative">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-tr from-cyberCyan to-neonBlue opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
          <i class="${speaker.iconClass || 'fa-solid fa-microchip'} text-4xl text-cyan group-hover:scale-110 transition-transform"></i>
        </div>
        <div class="space-y-1">
          <span class="text-xs font-semibold uppercase tracking-wider text-cyan">${speaker.tag || 'PANELIST'}</span>
          <h4 class="text-lg font-bold text-white">${speaker.name}</h4>
          <p class="text-xs text-slate-400 font-light">${speaker.role}</p>
          <p class="text-xs text-slate-400 font-medium">${speaker.org}</p>
        </div>
      `;
      if (generalGrid) generalGrid.appendChild(card);
    }
  });
}

function renderAgenda() {
  const sgTrack = document.getElementById('track-singapore');
  const shTrack = document.getElementById('track-shanghai');
  
  if (sgTrack) sgTrack.innerHTML = '';
  if (shTrack) shTrack.innerHTML = '';
  
  const sgSessions = db.agenda.filter(s => s.stream === 'singapore');
  const shSessions = db.agenda.filter(s => s.stream === 'shanghai');
  
  const renderSessionItem = (session, index) => {
    const speaker = db.speakers.find(sp => sp.id === session.speakerId);
    const item = document.createElement('div');
    item.className = "relative pl-8 group cursor-pointer";
    item.setAttribute('onclick', `setActiveAgenda('${session.id}')`);
    
    const isFirst = index === 0;
    const dotClass = isFirst 
      ? "absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-cyan pulse-active"
      : "absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-white/30 group-hover:bg-cyan transition-colors";
      
    const cardClass = isFirst
      ? "glass-panel p-6 rounded-2xl border border-cyan/30 hover:border-cyan/60 transition-all duration-300 shadow-[0_0_20px_rgba(5,217,232,0.05)]"
      : "glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan/30 transition-all duration-300";

    const timeClass = isFirst
      ? "text-sm font-bold text-cyan text-glow-cyan"
      : "text-sm font-bold text-slate-400";
      
    item.innerHTML = `
      <!-- Indicator dot -->
      <div class="${dotClass}" id="dot-${session.id}"></div>
      
      <!-- Time tag absolute on desktop -->
      <div class="hidden md:block absolute left-[-140px] top-0 text-right w-24">
        <span class="${timeClass}" id="time-${session.id}">${session.time}</span>
        <span class="block text-[10px] text-slate-400 uppercase tracking-widest">${session.badge || 'SESSION'}</span>
      </div>
      
      <!-- Card content -->
      <div class="${cardClass}" id="card-${session.id}">
        <span class="md:hidden block text-xs font-bold ${isFirst ? 'text-cyan' : 'text-slate-400'} mb-1">${session.time} - ${session.badge || 'Session'}</span>
        <h4 class="text-lg font-bold text-white">${session.title}</h4>
        <p class="text-sm text-slate-300 mt-2 font-light">${session.desc}</p>
        ${speaker ? `
          <div class="mt-4 flex items-center gap-3">
            <div class="w-6 h-6 rounded-full bg-cyan/15 flex items-center justify-center text-cyan text-xs">
              <i class="${speaker.iconClass || 'fa-solid fa-user'}"></i>
            </div>
            <span class="text-xs text-white/50">Speaker: ${speaker.name} (${speaker.role})</span>
          </div>
        ` : ''}
      </div>
    `;
    return item;
  };
  
  if (sgSessions.length === 0) {
    if (sgTrack) {
      sgTrack.innerHTML = `
        <div class="glass-panel p-6 rounded-2xl border border-white/5 text-center text-slate-400">
          <p class="text-sm">Awaiting Session Schedule details for Singapore Stream...</p>
        </div>
      `;
    }
  } else {
    sgSessions.forEach((s, idx) => {
      if (sgTrack) sgTrack.appendChild(renderSessionItem(s, idx));
    });
  }
  
  if (shSessions.length === 0) {
    if (shTrack) {
      shTrack.innerHTML = `
        <div class="glass-panel p-6 rounded-2xl border border-white/5 text-center text-slate-400">
          <p class="text-sm">Awaiting Session Schedule details for Shanghai Stream...</p>
        </div>
      `;
    }
  } else {
    shSessions.forEach((s, idx) => {
      if (shTrack) shTrack.appendChild(renderSessionItem(s, idx));
    });
  }
}

function renderSponsors() {
  const platGrid = document.getElementById('platinum-sponsors-grid');
  const goldGrid = document.getElementById('gold-sponsors-grid');
  const silverGrid = document.getElementById('silver-sponsors-grid');
  
  if (platGrid) platGrid.innerHTML = '';
  if (goldGrid) goldGrid.innerHTML = '';
  if (silverGrid) silverGrid.innerHTML = '';
  
  const platinumList = db.sponsors.filter(s => s.tier === 'platinum');
  const goldList = db.sponsors.filter(s => s.tier === 'gold');
  const silverList = db.sponsors.filter(s => s.tier === 'silver');
  
  const renderSponsorCard = (sponsor) => {
    const card = document.createElement('div');
    card.className = "glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-cyan/30 transition-all duration-300";
    card.innerHTML = `
      <i class="${sponsor.icon || 'fa-solid fa-building'} text-slate-400 text-3xl mb-1"></i>
      <span class="font-space font-semibold text-white/40 text-sm tracking-tight">${sponsor.name}</span>
    `;
    return card;
  };
  
  platinumList.forEach(s => { if (platGrid) platGrid.appendChild(renderSponsorCard(s)); });
  goldList.forEach(s => { if (goldGrid) goldGrid.appendChild(renderSponsorCard(s)); });
  silverList.forEach(s => { if (silverGrid) silverGrid.appendChild(renderSponsorCard(s)); });
}

function populateSpeakerSelects() {
  const select = document.getElementById('admin-session-speaker');
  if (!select) return;
  select.innerHTML = '<option value="">No Speaker Assigned</option>';
  db.speakers.forEach(speaker => {
    const opt = document.createElement('option');
    opt.value = speaker.id;
    opt.textContent = speaker.name;
    select.appendChild(opt);
  });
}

function renderAdminLists() {
  // Speakers list manager table inside drawer
  const spList = document.getElementById('admin-speakers-list');
  if (spList) {
    spList.innerHTML = '';
    db.speakers.forEach(speaker => {
      const row = document.createElement('div');
      row.className = "flex items-center justify-between p-3 glass-panel rounded-xl border border-white/5 text-xs";
      row.innerHTML = `
        <div class="flex flex-col">
          <span class="font-bold text-white">${speaker.name}</span>
          <span class="text-slate-400 text-[10px]">${speaker.role} · ${speaker.org}</span>
        </div>
        <button onclick="deleteSpeaker('${speaker.id}')" class="text-rose-400 hover:text-rose-600 transition-colors p-1" title="Delete Speaker">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      `;
      spList.appendChild(row);
    });
  }

  // Agenda list manager
  const agList = document.getElementById('admin-agenda-list');
  if (agList) {
    agList.innerHTML = '';
    db.agenda.forEach(session => {
      const row = document.createElement('div');
      row.className = "flex items-center justify-between p-3 glass-panel rounded-xl border border-white/5 text-xs";
      row.innerHTML = `
        <div class="flex flex-col">
          <span class="font-bold text-white">${session.title}</span>
          <span class="text-slate-400 text-[10px] uppercase">${session.stream} Stream · ${session.time}</span>
        </div>
        <button onclick="deleteAgendaSession('${session.id}')" class="text-rose-400 hover:text-rose-600 transition-colors p-1" title="Delete Session">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      `;
      agList.appendChild(row);
    });
  }

  // Sponsors list manager
  const snList = document.getElementById('admin-sponsors-list');
  if (snList) {
    snList.innerHTML = '';
    db.sponsors.forEach(sponsor => {
      const row = document.createElement('div');
      row.className = "flex items-center justify-between p-3 glass-panel rounded-xl border border-white/5 text-xs";
      row.innerHTML = `
        <div class="flex flex-col">
          <span class="font-bold text-white">${sponsor.name}</span>
          <span class="text-slate-400 text-[10px] uppercase">${sponsor.tier} Partner</span>
        </div>
        <button onclick="deleteSponsor('${sponsor.id}')" class="text-rose-400 hover:text-rose-600 transition-colors p-1" title="Delete Sponsor">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      `;
      snList.appendChild(row);
    });
  }
}

// ==========================================
// 3. EVENT TIMER & LOGIC CONTROLLERS
// ==========================================
function startCountdown() {
  function updateTimer() {
    const targetDateStr = db.banner.targetDate;
    const targetDate = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Modals Trigger Functions
function openSpeakerModal(speakerId) {
  const speaker = db.speakers.find(s => s.id === speakerId);
  if (!speaker) return;

  const modalName = document.getElementById('modal-speaker-name');
  const modalRole = document.getElementById('modal-speaker-role');
  const modalOrg = document.getElementById('modal-speaker-org');
  const modalBio = document.getElementById('modal-speaker-bio');
  const modalSessions = document.getElementById('modal-speaker-sessions');
  const modalIcon = document.getElementById('modal-speaker-icon');
  
  if (modalName) modalName.textContent = speaker.name;
  if (modalRole) modalRole.textContent = speaker.role;
  if (modalOrg) modalOrg.textContent = speaker.org;
  if (modalBio) modalBio.textContent = speaker.bio;
  if (modalIcon) modalIcon.className = `${speaker.iconClass || 'fa-solid fa-user-tie'} text-5xl text-cyan`;

  // Render assigned sessions inside modal
  if (modalSessions) {
    modalSessions.innerHTML = '';
    const sessions = db.agenda.filter(s => s.speakerId === speakerId);
    if (sessions.length === 0) {
      modalSessions.innerHTML = `<p class="text-xs text-slate-500 italic">No public sessions assigned yet.</p>`;
    } else {
      sessions.forEach(session => {
        const div = document.createElement('div');
        div.className = "modal-session-card p-4 glass-panel rounded-xl border border-white/5 text-xs text-left";
        div.innerHTML = `
          <div class="text-cyan font-bold tracking-wider uppercase mb-1">${session.time} | ${session.stream} Stream</div>
          <div class="text-white font-semibold mb-1">${session.title}</div>
          <div class="text-slate-400 font-light">${session.desc}</div>
        `;
        modalSessions.appendChild(div);
      });
    }
  }

  const modal = document.getElementById('speaker-modal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
  }
}

// Speaker Modal Close
function closeSpeakerModal() {
  const modal = document.getElementById('speaker-modal');
  if (modal) {
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
  }
}

// Lightbox controller
function openLightbox(videoId) {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxMedia = document.getElementById('lightbox-media');
  
  if (!lightbox || !lightboxMedia) return;
  
  // Load beautiful flight preview loop (Aether hub visuals)
  lightboxMedia.innerHTML = `
    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1" 
      width="100%" height="100%" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen style="border: none; display: block; border-radius: 12px;"></iframe>
  `;
  
  lightbox.classList.remove('hidden');
  setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxMedia = document.getElementById('lightbox-media');
  
  if (lightbox) {
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      if (lightboxMedia) lightboxMedia.innerHTML = '';
    }, 300);
  }
}

// Active agenda state toggles
function setActiveAgenda(id) {
  const session = db.agenda.find(s => s.id === id);
  if (!session) return;
  
  // Reset other sessions in the same stream
  db.agenda.forEach(s => {
    const dot = document.getElementById(`dot-${s.id}`);
    const card = document.getElementById(`card-${s.id}`);
    const time = document.getElementById(`time-${s.id}`);
    
    if (dot) dot.className = "absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-white/30 hover:bg-cyan transition-colors";
    if (card) card.className = "glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan/30 transition-all duration-300";
    if (time) time.className = "text-sm font-bold text-slate-400";
  });
  
  // Highlight active selected item
  const currentDot = document.getElementById(`dot-${id}`);
  const currentCard = document.getElementById(`card-${id}`);
  const currentTime = document.getElementById(`time-${id}`);
  
  if (currentDot) currentDot.className = "absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-cyberCyan pulse-active";
  if (currentCard) currentCard.className = "glass-panel p-6 rounded-2xl border border-cyan/30 hover:border-cyan/60 transition-all duration-300 shadow-[0_0_20px_rgba(5,217,232,0.05)]";
  if (currentTime) currentTime.className = "text-sm font-bold text-cyan text-glow-cyan";
}

// Registration Modal Logic
function openRegisterModal() {
  const modal = document.getElementById('register-modal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
  }
}

function closeRegisterModal() {
  const modal = document.getElementById('register-modal');
  if (modal) {
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      const notification = document.getElementById('success-notification');
      if (notification) notification.classList.add('hidden');
      const form = document.getElementById('registration-form');
      if (form) form.reset();
    }, 300);
  }
}

function handleRegistrationSubmit(event) {
  event.preventDefault();
  const notification = document.getElementById('success-notification');
  if (notification) {
    notification.classList.remove('hidden');
  }
  setTimeout(() => {
    closeRegisterModal();
  }, 2500);
}

// ==========================================
// 4. ADMIN ACTIONS (DATABASE MUTATIONS)
// ==========================================
function saveBannerSettings(event) {
  event.preventDefault();
  const headline = document.getElementById('admin-hero-headline').value.trim();
  const highlight = document.getElementById('admin-hero-highlight').value.trim();
  const subtitle = document.getElementById('admin-hero-subtitle').value.trim();
  const location = document.getElementById('admin-hero-location').value.trim();
  const targetDate = document.getElementById('admin-hero-target-date').value.trim();
  
  if (!headline || !highlight || !subtitle || !location || !targetDate) return;
  
  db.banner = { headline, highlight, subtitle, location, targetDate };
  saveDatabase();
  renderBanner();
  startCountdown();
  showAdminToast("Banner details updated successfully!");
}

function addSpeaker(event) {
  event.preventDefault();
  const name = document.getElementById('admin-speaker-name').value.trim();
  const role = document.getElementById('admin-speaker-role').value.trim();
  const org = document.getElementById('admin-speaker-org').value.trim();
  const bio = document.getElementById('admin-speaker-bio').value.trim();
  const tag = document.getElementById('admin-speaker-tag').value.trim() || "Panelist";
  const tier = document.getElementById('admin-speaker-tier').value;
  const icon = document.getElementById('admin-speaker-icon').value;
  
  if (!name || !role || !org || !bio) return;
  
  const id = `speaker-${Date.now()}`;
  db.speakers.push({
    id, name, role, org, bio, tag, tier,
    iconClass: icon || "fa-solid fa-user"
  });
  
  saveDatabase();
  renderSpeakers();
  populateSpeakerSelects();
  renderAdminLists();
  
  document.getElementById('add-speaker-form').reset();
  showAdminToast("Speaker added successfully!");
}

function deleteSpeaker(id) {
  db.speakers = db.speakers.filter(s => s.id !== id);
  // Remove reference from any sessions too
  db.agenda.forEach(s => {
    if (s.speakerId === id) s.speakerId = "";
  });
  
  saveDatabase();
  renderSpeakers();
  renderAgenda();
  populateSpeakerSelects();
  renderAdminLists();
  showAdminToast("Speaker deleted!");
}

function addAgendaSession(event) {
  event.preventDefault();
  const stream = document.getElementById('admin-session-stream').value;
  const time = document.getElementById('admin-session-time').value.trim();
  const badge = document.getElementById('admin-session-badge').value.trim() || "SESSION";
  const title = document.getElementById('admin-session-title').value.trim();
  const desc = document.getElementById('admin-session-desc').value.trim();
  const speakerId = document.getElementById('admin-session-speaker').value;
  
  if (!time || !title || !desc) return;
  
  const id = `session-${Date.now()}`;
  db.agenda.push({ id, stream, time, badge, title, desc, speakerId });
  
  saveDatabase();
  renderAgenda();
  renderAdminLists();
  
  document.getElementById('add-agenda-form').reset();
  showAdminToast("Session added to agenda!");
}

function deleteAgendaSession(id) {
  db.agenda = db.agenda.filter(s => s.id !== id);
  saveDatabase();
  renderAgenda();
  renderAdminLists();
  showAdminToast("Session deleted!");
}

function addSponsor(event) {
  event.preventDefault();
  const name = document.getElementById('admin-sponsor-name').value.trim();
  const tier = document.getElementById('admin-sponsor-tier').value;
  const icon = document.getElementById('admin-sponsor-icon').value;
  
  if (!name) return;
  
  const id = `sponsor-${Date.now()}`;
  db.sponsors.push({
    id, name, tier,
    icon: icon || "fa-solid fa-building"
  });
  
  saveDatabase();
  renderSponsors();
  renderAdminLists();
  
  document.getElementById('add-sponsor-form').reset();
  showAdminToast("Sponsor added!");
}

function deleteSponsor(id) {
  db.sponsors = db.sponsors.filter(s => s.id !== id);
  saveDatabase();
  renderSponsors();
  renderAdminLists();
  showAdminToast("Sponsor deleted!");
}

function showAdminToast(msg) {
  const toast = document.getElementById('admin-toast');
  if (toast) {
    toast.textContent = msg;
    toast.classList.remove('hidden', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('opacity-0');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2500);
  }
}

// ==========================================
// 5. CHATBOT INTELLIGENT MATCHING (DYNAMIC)
// ==========================================
function submitChatMessage() {
  const inputEl = document.getElementById('chat-input');
  const messageText = inputEl.value.trim();
  if (!messageText) return;

  appendMessage(messageText, 'user');
  inputEl.value = '';

  appendTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    let reply = "";
    const textLower = messageText.toLowerCase();

    if (textLower.includes('speaker') || textLower.includes('who is speaking') || textLower.includes('voices')) {
      const vips = db.speakers.filter(s => s.tier === 'vip').map(s => s.name);
      const generals = db.speakers.filter(s => s.tier === 'general').map(s => s.name);
      reply = `We have confirmed a stellar speaker lineup! <br/><br/>
        <strong>VIP Keynotes & Guests of Honour:</strong> ${vips.join(', ')}<br/><br/>
        <strong>Panelists & Leaders:</strong> ${generals.join(', ')}<br/><br/>
        Click on any speaker's card to view their full profile, background, and sessions.`;
    } 
    else if (textLower.includes('agenda') || textLower.includes('schedule') || textLower.includes('time') || textLower.includes('program')) {
      const sg = db.agenda.filter(s => s.stream === 'singapore').map(s => `<li>[${s.time}] <strong>${s.title}</strong></li>`).join('');
      const sh = db.agenda.filter(s => s.stream === 'shanghai').map(s => `<li>[${s.time}] <strong>${s.title}</strong></li>`).join('');
      
      reply = `The forum is hosted with dual hubs:<br/><br/>
        <strong>Singapore Hub Stream:</strong><ul class="list-disc pl-4 space-y-1 mt-1 text-xs">${sg}</ul><br/>
        <strong>Shanghai Hub Stream:</strong><ul class="list-disc pl-4 space-y-1 mt-1 text-xs">${sh}</ul><br/>
        Use the "Singapore Stream" and "Shanghai Stream" switcher in the Agenda section to explore topics.`;
    } 
    else if (textLower.includes('where') || textLower.includes('venue') || textLower.includes('location') || textLower.includes('host') || textLower.includes('coordinate')) {
      reply = `The Business China Youth Forum 2026 is hosted physically at the <strong>Temasek Polytechnic</strong> campus in Singapore, with digital stream tie-ins to hubs in China.`;
    } 
    else if (textLower.includes('register') || textLower.includes('sign up') || textLower.includes('pass') || textLower.includes('ticket')) {
      reply = `To secure your delegate pass, simply click the <strong>"Register Now"</strong> button in the navigation header or the floating action bar to launch the registration forms.`;
    } 
    else if (textLower.includes('sponsor') || textLower.includes('partner')) {
      const sponsors = db.sponsors.map(s => s.name).join(', ');
      reply = `We are proud to work alongside leading organizations. Current partners: ${sponsors}.`;
    }
    else {
      reply = `I am the Dimension Coordinator. You can ask me about:
        <ul class="list-disc pl-4 mt-2 text-xs space-y-1">
          <li><strong>Speakers</strong> currently scheduled</li>
          <li>Forum <strong>agenda</strong> times & topics</li>
          <li><strong>Venue</strong> locations</li>
          <li>How to <strong>register</strong></li>
        </ul>`;
    }

    appendMessage(reply, 'bot');
  }, 800);
}

function sendQuickPrompt(promptText) {
  appendMessage(promptText, 'user');
  appendTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    let reply = "";
    const textLower = promptText.toLowerCase();

    if (textLower.includes('speaker')) {
      const vips = db.speakers.filter(s => s.tier === 'vip').map(s => s.name);
      reply = `Currently, we have VIPs like <strong>${vips.join(', ')}</strong>, alongside dynamic venture builders and tech founders. Select any speaker card to view their biography and panel details.`;
    } else if (textLower.includes('agenda') || textLower.includes('schedule')) {
      const sgCount = db.agenda.filter(s => s.stream === 'singapore').length;
      const shCount = db.agenda.filter(s => s.stream === 'shanghai').length;
      reply = `We have <strong>${sgCount} Singapore sessions</strong> and <strong>${shCount} Shanghai sessions</strong> scheduled. Type "agenda" to view the full list, or check the Agenda section on the homepage!`;
    } else if (textLower.includes('hosted') || textLower.includes('where') || textLower.includes('venue')) {
      reply = `The main physical hub is located at <strong>Temasek Polytechnic</strong>, Singapore. Virtual tracks will connect Singapore, Shanghai, and GBA delegates in real-time.`;
    } else {
      reply = `How can I help you coordinate? Type details on speakers, panels, or hubs.`;
    }

    appendMessage(reply, 'bot');
  }, 800);
}

function appendMessage(text, sender) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = `<p>${text}</p>`;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function appendTypingIndicator() {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const indicator = document.createElement('div');
  indicator.className = "chat-bubble typing";
  indicator.id = "chat-typing-indicator";
  indicator.innerHTML = "<span></span><span></span><span></span>";
  container.appendChild(indicator);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('chat-typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// ==========================================
// 6. ADAPTERS & COMPONENT TRIGGERS
// ==========================================
function setupEventListeners() {
  // Mobile nav toggler
  const menuBtn = document.getElementById('menu-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('hidden')) {
          icon.className = "fa-solid fa-bars-staggered";
        } else {
          icon.className = "fa-solid fa-xmark";
        }
      }
    });
  }

  // Stream Tab Switching
  const streamTabs = document.querySelectorAll('.track-tab');
  streamTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      streamTabs.forEach(t => {
        t.classList.remove('active', 'bg-gradient-to-r', 'from-cyberCyan', 'to-neonBlue', 'text-midnight');
        t.classList.add('text-slate-300', 'hover:text-white');
      });
      tab.classList.add('active', 'bg-gradient-to-r', 'from-cyberCyan', 'to-neonBlue', 'text-midnight');
      tab.classList.remove('text-slate-300', 'hover:text-white');
      
      const stream = tab.getAttribute('data-track');
      const tracks = document.querySelectorAll('.timeline-track-content');
      tracks.forEach(t => t.classList.add('hidden'));
      const target = document.getElementById(`track-${stream}`);
      if (target) target.classList.remove('hidden');
    });
  });

  // Admin Drawer overlay slide-out toggling
  const openAdminBtn = document.getElementById('open-admin-btn');
  const closeAdminBtn = document.getElementById('close-admin-btn');
  const adminOverlay = document.getElementById('admin-drawer');

  if (openAdminBtn && closeAdminBtn && adminOverlay) {
    openAdminBtn.addEventListener('click', () => {
      adminOverlay.classList.remove('hidden');
      setTimeout(() => {
        adminOverlay.classList.remove('opacity-0');
        adminOverlay.querySelector('.admin-drawer').classList.remove('translate-x-full');
      }, 10);
    });

    const closeHandler = () => {
      adminOverlay.classList.add('opacity-0');
      adminOverlay.querySelector('.admin-drawer').classList.add('translate-x-full');
      setTimeout(() => adminOverlay.classList.add('hidden'), 300);
    };

    closeAdminBtn.addEventListener('click', closeHandler);
    adminOverlay.addEventListener('click', (e) => {
      if (e.target === adminOverlay) closeHandler();
    });
  }

  // Admin tab navigation inside drawer
  const adminTabs = document.querySelectorAll('.admin-tab');
  adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      adminTabs.forEach(t => {
        t.classList.remove('active', 'border-cyan', 'text-cyan');
        t.classList.add('border-transparent', 'text-slate-400');
      });
      tab.classList.add('active', 'border-cyan', 'text-cyan');
      tab.classList.remove('border-transparent', 'text-slate-400');

      const tabId = tab.getAttribute('data-admin-tab');
      const contents = document.querySelectorAll('.admin-tab-content');
      contents.forEach(c => c.classList.add('hidden'));
      const target = document.getElementById(`admin-tab-${tabId}`);
      if (target) target.classList.remove('hidden');
    });
  });

  // Chat Widget toggling
  const chatTrigger = document.getElementById('chatbot-trigger-btn');
  const chatWindow = document.getElementById('chat-window');
  const closeChatBtn = document.getElementById('close-chat-btn');

  if (chatTrigger && chatWindow) {
    chatTrigger.addEventListener('click', () => {
      chatWindow.classList.toggle('hidden');
      const restIcon = chatTrigger.querySelector('.chat-trigger-icon.rest');
      const closeIcon = chatTrigger.querySelector('.chat-trigger-icon.close-icon');
      
      if (!chatWindow.classList.contains('hidden')) {
        restIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        restIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    if (closeChatBtn) {
      closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
        chatTrigger.querySelector('.chat-trigger-icon.rest').classList.remove('hidden');
        chatTrigger.querySelector('.chat-trigger-icon.close-icon').classList.add('hidden');
      });
    }
  }

  // Header background on Scroll
  window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('bg-midnight/70', 'backdrop-blur-md', 'shadow-lg');
      } else {
        header.classList.remove('bg-midnight/70', 'backdrop-blur-md', 'shadow-lg');
      }
    }
  });

  // Overlay click dismissals for general modals
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        if (overlay.id === 'lightbox-modal') {
          closeLightbox();
        } else if (overlay.id === 'register-modal') {
          closeRegisterModal();
        } else {
          closeSpeakerModal();
        }
      }
    });
  });
}
