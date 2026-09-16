/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'zh';

export interface Speaker {
  id: string;
  name: string;
  nameZh: string;
  role: string;
  roleZh: string;
  company: string;
  companyZh: string;
  bio: string;
  bioZh: string;
  avatar: string; // URL or letter avatar seed
  category: string; // e.g. "Keynote", "Panelist", "Moderator"
  categoryZh: string;
}

export interface AgendaItem {
  id: string;
  startTime: string; // e.g., "09:00"
  endTime: string; // e.g., "09:30"
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  type: 'keynote' | 'panel' | 'networking' | 'ceremony' | 'workshop';
  speakers: string[]; // speaker ids
  location: string;
  locationZh: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionZh: string;
  answer: string;
  answerZh: string;
  category: 'general' | 'registration' | 'venue';
}

export interface Partner {
  id: string;
  name: string;
  category: 'Organiser' | 'Co-organiser' | 'Strategic Partner' | 'Supporting Partner' | 'Media Partner';
  categoryZh: string;
  logoText: string; // Text representation of logo since we don't have static images
  url: string;
}

export interface EventDetails {
  dateEn: string;
  dateZh: string;
  venueEn: string;
  venueZh: string;
  themeEn: string;
  themeZh: string;
}

export interface ConfirmedSession {
  id: string;
  sessionNumber: number;
  sessionTypeEn: string;
  sessionTypeZh: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
}
