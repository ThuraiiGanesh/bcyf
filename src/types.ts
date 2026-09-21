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

export interface GOHPerson {
  nameEn: string;
  nameZh: string;
  postEn: string;
  postZh: string;
  mpEn: string;
  mpZh: string;
  photoUrl: string;
  fullPhotoUrl: string;
  bioEn: string;
  bioZh: string;
  dualRoleNoteEn: string;
  dualRoleNoteZh: string;
}

export interface CEOPerson {
  nameEn: string;
  nameZh: string;
  postEn: string;
  postZh: string;
  appointmentEn: string;
  appointmentZh: string;
  photoUrl: string;
  bioEn: string;
  bioZh: string;
  fullBioEn: string[];
  fullBioZh: string[];
}

export interface TimelineItem {
  id: string;
  time: string;
  titleEn: string;
  titleZh: string;
  type: 'registration' | 'exhibition' | 'admin' | 'ceremony' | 'keynote' | 'session' | 'break';
  isMajorSession?: boolean;
  sessionNumber?: number;
  subtitleEn?: string;
  subtitleZh?: string;
  descriptionEn?: string;
  descriptionZh?: string;
  speakerEn?: string;
  speakerZh?: string;
  speakerRoleEn?: string;
  speakerRoleZh?: string;
  speakerPhoto?: string;
  moderatorPending?: boolean;
  panelistsPending?: boolean;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  thumb: string;
  alt: string;
}

