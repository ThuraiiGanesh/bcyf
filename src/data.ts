import { EventDetails, ConfirmedSession, Speaker, AgendaItem, FAQItem, Partner } from './types';

export const EVENT_BASICS_2026: EventDetails = {
  dateEn: '24 October 2026 (Saturday), 11:00am – 6:00pm',
  dateZh: '2026年10月24日（星期六），上午11:00 – 下午6:00',
  venueEn: 'Temasek Polytechnic Auditorium 1, 21 Tampines Ave 1, Singapore 529757',
  venueZh: '淡马锡理工学院第一大礼堂，新加坡淡马锡大道21号，邮编529757',
  themeEn: 'Riding the New Wave: Future of Work Reimagined',
  themeZh: '乘风破浪：共创未来新职场'
};

export const FORUM_THEME_2026 = {
  en: {
    badge: 'FORUM THEME',
    title: 'Riding the New Wave: Future of Work Reimagined',
    paragraphs: [
      'Global events and rapid advances in technology are changing the way we live, work and build our careers. New industries are emerging, jobs are evolving, and the skills needed to succeed are constantly changing. Instead of asking, "What is the right first job?" Today\'s youths are increasingly asking, "How do I stay relevant in a world that keeps changing?"',
      '"Riding the New Wave: Future of Work Reimagined" invites youths to explore this question together. The forum encourages participants to move beyond traditional career paths and build the adaptability, digital confidence and cross-border experiences needed to thrive in the future. Through discussions on emerging industries, overseas opportunities, entrepreneurship and regional trends, youths will gain fresh perspectives, practical insights and meaningful connections to navigate new opportunities across Singapore, China and the wider region.'
    ]
  },
  zh: {
    badge: '论坛主题',
    title: '乘风破浪：共创未来新职场',
    paragraphs: [
      '当今世界正处于百年不遇之变局中，无论是国际形势风向的变幻更迭还是新兴科技与产业的颠覆重塑，皆是你我青年能把握的机遇与待应对的挑战。前者在暴露现有国际合作脆弱性的同时却也催生了跨界融合及多元发展的新契机；而后者虽然为青年带来新赛道和新舞台，但也同时加速了技术和技能迭代，为青年带来了保持自身核心竞争力的挑战。',
      '本次论坛主题《乘风破浪：共创未来新职场》，正是向每一位在时代洪流中前行的青年发出的诚挚邀约。我们呼吁青年跳出传统线性职业规划的框架，主动、大胆地构想未来职场与个人发展的新可能性。我们期待与各位青年共同探讨，如何在拥抱最新趋势的同时磨炼出难以被替代的适应力、技术敏锐度与跨文化协同力，并在时代的浪潮中不断地拓宽自身认知和能力边界。愿每一位青年都能乘新趋势之浪，破逆境之风，在充满变局的世界中实现自己对未来的美好构想。'
    ]
  }
};

export const CONFIRMED_SESSIONS_2026: ConfirmedSession[] = [
  {
    id: 'session-1',
    sessionNumber: 1,
    sessionTypeEn: 'Fireside Chat',
    sessionTypeZh: '炉边对话',
    titleEn: 'Fireside Chat: Navigating the New Business Landscape and Way of Working',
    titleZh: '与陈国明高级政务部长共探商业新格局与工作新范式',
    descriptionEn: 'Technological disruption, demographic changes, and deeper regional connectivity are reshaping the way work is defined across Asia. For young individuals, this equates to entering a landscape where jobs are rapidly being redesigned. This fireside chat with SMS Desmond Tan will explore what this changing environment means for the next generation, and what questions young people should be asking as they prepare for the future.',
    descriptionZh: '本区域内的工作范式正深受技术变革、人口结构变化及区域互联互通深化等因素的影响而持续重塑。本次与总理公署高级政务部长陈国明先生的炉边对话，将聚焦这一变动环境对下一代所带来的启示，并探讨青年在面向未来时应提出哪些关键问题。'
  },
  {
    id: 'session-2',
    sessionNumber: 2,
    sessionTypeEn: 'Panel',
    sessionTypeZh: '专题讨论',
    titleEn: 'Panel: Understanding How Emerging Frontiers in Technology Are Reshaping Industry',
    titleZh: '智能时代的"工作革命"：价值重构与青年机遇',
    descriptionEn: 'Emerging technologies and their associated industries are often indicative of future economic transformations. This panel explores three transformations — Future Media, Future Health and Future Connectivity — through cross-industry case studies, helping youths identify transferable competencies and adaptive mindsets for future-ready careers.',
    descriptionZh: '新兴科技及相关产业往往是经济模式转型的风向指标。本论坛将围绕未来媒体、未来健康与未来互联三大转型方向，通过跨行业案例研讨，帮助青年提炼可迁移的核心职业能力。'
  },
  {
    id: 'session-3',
    sessionNumber: 3,
    sessionTypeEn: 'Grand Debate',
    sessionTypeZh: '青年大辩论',
    titleEn: 'Grand Debate: This House Believes That AI-Driven Empowerment Has Exacerbated Structural Inequalities for Youths in the Workforce',
    titleZh: 'AI赋能：缩小差距，还是加剧青年职场不平等？',
    descriptionEn: 'Artificial intelligence is rapidly transforming how young people learn, work and build their careers. This Grand Debate asks: is AI truly democratising opportunity, or deepening existing inequalities? Format: 3 vs 3, Asian/Australasian Debate Format, 60 minutes.',
    descriptionZh: '人工智能正迅速改变青年的学习、工作方式与职业发展。本场青年大辩论将探讨：AI究竟是在打破机会壁垒，还是正在形成新的数字鸿沟？辩论形式：三对三，亚洲/澳亚式辩论赛制，共60分钟。'
  }
];

export const ABOUT_US_2026 = {
  en: {
    badge: 'ABOUT US',
    mainTitle: 'About Us',
    bcyfTitle: 'About Business China Youth Forum',
    bcyfDesc: 'The Business China Youth Forum (BCYF) is held annually in tandem with the FutureChina Global Forum (FCGF). With the motto "By Youth, For Youth," this forum is organised by a dedicated group of enthusiastic young individuals, who curate discussions and sharing sessions with industry experts and academia on trending topics relevant to youth. Since 2019, the hybrid event has attracted close to 3000 youth participants from all over the world.',
    bcTitle: 'About Business China',
    bcDesc: 'Launched in November 2007 by Founding Patron and Singapore\'s Founding Prime Minister, Mr Lee Kuan Yew, Business China aims to nurture a core pool of Singaporean bilingual and bicultural talents, and enterprises who can engage deeply in economic opportunities with China. Our work helps to foster mutual understanding, trust, and cooperation between Singapore and China, and deepen Singapore\'s role in bridging the world and China.'
  },
  zh: {
    badge: '关于我们',
    mainTitle: '关于我们',
    bcyfTitle: '关于通商中国青年论坛',
    bcyfDesc: '通商中国青年论坛（BCYF）每年与慧眼中国环球论坛（FCGF）同期举行。本着"由青年，为青年"的宗旨，此论坛由一群才华洋溢的青年负责筹划，针对当下青年关心的热点课题与行业专家及学者展开深入的讨论与分享。自2019年以来，此活动已吸引了来自世界各地近3000名青年参与。',
    bcTitle: '关于通商中国',
    bcDesc: '通商中国由创会赞助人新加坡建国总理李光耀先生在2007年11月启动，旨在凝聚一批核心的新加坡双语双文化人才和企业，作为推动与中国进行深层次经贸合作的中流砥柱。我们的活动项目致力于促进新加坡与中国人民之间的相互了解、信任和长期合作。'
  }
};

export const WATCH_2026 = {
  featured: {
    year: '2025',
    titleEn: 'BCYF 2025 Highlight Video',
    titleZh: '2025年通商中国青年论坛精彩回顾',
    youtubeUrl: 'https://youtu.be/tjdejMr7g1M',
    embedUrl: 'https://www.youtube-nocookie.com/embed/tjdejMr7g1M'
  },
  pastEditions: [
    {
      year: '2024',
      titleEn: 'BCYF 2024 Highlights',
      titleZh: '2024年通商中国青年论坛精彩回顾',
      placeholderText: 'Event Highlight 2024'
    },
    {
      year: '2023',
      titleEn: 'BCYF 2023 Highlights',
      titleZh: '2023年通商中国青年论坛精彩回顾',
      placeholderText: 'Event Highlight 2023'
    },
    {
      year: '2022',
      titleEn: 'BCYF 2022 Highlights',
      titleZh: '2022年通商中国青年论坛精彩回顾',
      placeholderText: 'Event Highlight 2022'
    }
  ]
};

// Kept for backward compatibility or empty skeletons
export const SPEAKERS: Speaker[] = [];
export const AGENDA_ITEMS: AgendaItem[] = [];
export const FAQ_ITEMS: FAQItem[] = [];
export const PARTNERS: Partner[] = [];

export const TRANSLATIONS = {
  en: {
    navHome: 'Home',
    navTheme: 'Theme',
    navHighlights: 'Highlights',
    navAgenda: 'Agenda',
    navAbout: 'About Us',
    navWatch: 'Watch',
    navGallery: 'Gallery',
    navPartners: 'Partners',
    navYouthForum: 'Youth Forum',
    navFcgf: 'FCGF',
    
    registerBtn: 'Register Now',
    registrationPending: 'Registration link pending confirmation. Opening soon!',
    registerModalTitle: 'Delegate Registration',
    registerModalPendingDesc: 'Official registration for BCYF 2026 will open shortly. Please stay tuned for announcement on ticketing tiers and registration deadlines.',
    closeBtn: 'Close',

    highlightsBadge: 'HIGHLIGHTS',
    gohBadge: 'Guest-of-Honour',
    vipBadge: 'VIP / Business China CEO',
    speakersBadge: 'SPEAKERS',
    speakersTbc: 'Speaker Shortlist (Pending Final Confirmation)',
    pendingPhoto: 'PHOTO PENDING',
    pendingName: 'Name to be announced',
    pendingTitle: 'Title / Organisation to be confirmed',
    
    agendaBadge: 'AGENDA',
    agendaSubtitle: 'Programme layout for BCYF 2026. Official session timings and opening run-of-show are being finalized.',
    agendaTimingPending: 'Timing TBC',
    agendaSpeakerChipPending: 'Speaker / Moderator (TBC)',
    agendaFootnote: '*Programme subjected to changes.',

    watchBadge: 'WATCH',
    watchSubtitle: 'Watch highlights from previous editions of the Business China Youth Forum.',
    featuredVideo: 'Featured Video',
    pastVideos: 'Past Editions',

    galleryBadge: '2025 PHOTO GALLERY',
    gallerySubtitle: 'Photos from the previous forum edition (Publicity team will upload 2026 photos after event).',
    
    partnersBadge: 'Partners & Sponsors',
    strategicPartners: 'Strategic Partners',
    singaporePartners: 'Singapore Partners',
    chinaPartners: 'China Partners',
    sponsors: 'Sponsors',
    hostPartnerNote: 'Temasek Polytechnic is confirmed as host/partner for BCYF 2026.',
    logoPending: 'LOGO PENDING',
    
    footerCopyright: '© 2026 Business China. All rights reserved. Business China (通商中国) is a non-profit organization.',
    footerSlogan: 'Nurturing bilingual and bicultural leadership for a connected world.'
  },
  zh: {
    navHome: '首页',
    navTheme: '论坛主题',
    navHighlights: '亮点聚焦',
    navAgenda: '论坛议程',
    navAbout: '关于我们',
    navWatch: '精彩回顾',
    navGallery: '精彩照片',
    navPartners: '合作伙伴',
    navYouthForum: '青年论坛',
    navFcgf: 'FCGF',
    
    registerBtn: '立即报名',
    registrationPending: '报名通道即将开放，敬请期待！',
    registerModalTitle: '参会代表报名',
    registerModalPendingDesc: '2026年通商中国青年论坛官方报名通道即将正式开启。请持续关注票务级别及报名截止日期的官方发布。',
    closeBtn: '关闭',

    highlightsBadge: '亮点聚焦',
    gohBadge: '主礼嘉宾',
    vipBadge: '特邀贵宾 / 通商中国总经理',
    speakersBadge: '演讲嘉宾',
    speakersTbc: '演讲嘉宾阵容（待最终确认）',
    pendingPhoto: '照片待更新',
    pendingName: '嘉宾姓名待公布',
    pendingTitle: '职务与机构待确认',
    
    agendaBadge: '论坛议程',
    agendaSubtitle: '2026年通商中国青年论坛议程架构。详细时间节点与开幕流程正进一步核实中。',
    agendaTimingPending: '时间待定',
    agendaSpeakerChipPending: '嘉宾 / 主持人（待定）',
    agendaFootnote: '*议程可能变动，以现场实际安排为准。',

    watchBadge: '精彩回顾',
    watchSubtitle: '观看往届通商中国青年论坛的高光精彩时刻。',
    featuredVideo: '精选回顾视频',
    pastVideos: '往届回顾',

    galleryBadge: '2025 精彩照片集锦',
    gallerySubtitle: '往届论坛活动精彩瞬间（2026年现场照片将在活动后由宣传组更新）。',
    
    partnersBadge: '合作伙伴与赞助机构',
    strategicPartners: '战略合作伙伴',
    singaporePartners: '新加坡合作伙伴',
    chinaPartners: '中国合作伙伴',
    sponsors: '赞助机构',
    hostPartnerNote: '淡马锡理工学院为2026年通商中国青年论坛官方场地合作方。',
    logoPending: '标志待更新',
    
    footerCopyright: '© 2026 通商中国。版权所有。通商中国（Business China）为非营利机构。',
    footerSlogan: '架设双语双文化桥梁，培育连接全球的杰出领袖。'
  }
};
