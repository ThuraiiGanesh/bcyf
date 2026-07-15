==================================================
   BUSINESS CHINA YOUTH FORUM (BCYF) 2026
   Premium Landing Page — Package
==================================================

CONTENTS
--------
  index.html        → the full website (open in any browser)
  photos/           → drop speaker/VIP headshots here
  README.txt        → this file


--------------------------------------------------
1. HOW TO PREVIEW
--------------------------------------------------
  • Double-click  index.html
    It opens in Chrome / Edge / Safari. No internet
    needed (except for Google Maps + web fonts).


--------------------------------------------------
2. HOW TO SHARE IT
--------------------------------------------------
  Email / WhatsApp / Drive :
     Just send this whole folder (or the .zip).

  Public web link (recommended for VIPs) :
     1. Go to  https://app.netlify.com/drop
     2. Drag the "bcyf-2026-package" folder onto the page
     3. You get a live https:// link in ~10 seconds


--------------------------------------------------
3. ADDING REAL SPEAKER / VIP PHOTOS
--------------------------------------------------
  1. Save headshots into the  photos/  folder, e.g.
        photos/goh.jpg
        photos/wei.jpg

  2. Open index.html in a text editor (Notepad, VS Code)

  3. Find the avatar you want to update, e.g.
        <div class="goh-avatar">GH</div>

     and add  data-photo="photos/goh.jpg" :
        <div class="goh-avatar" data-photo="photos/goh.jpg">GH</div>

     The initials ("GH") become the fallback if the
     photo is missing. Repeat for every speaker/VIP.


--------------------------------------------------
4. REPLACING PLACEHOLDER TEXT
--------------------------------------------------
  Search the file for these and replace with real info:

     [Guest of Honour Name]
     [Ministerial Title / Ministry]
     [Speaker Name]          (8 of these)
     [Keynote Speaker A/B/C]

  Tip: in Notepad press Ctrl+H to find & replace.


--------------------------------------------------
5. WIRING THE REGISTRATION FORM
--------------------------------------------------
  Right now the form shows a success message but does
  not save data. To collect real registrations, connect
  it to one of:

     • Google Forms   (easiest — paste form URL)
     • Formspree.io   (free, no backend)
     • Your own server / API

  In index.html search for:
     // NOTE: wire this to your backend
  and replace that line with your submit code.


--------------------------------------------------
6. EDITING THE DATE / VENUE
--------------------------------------------------
  Current setting: 21–22 November 2026, Temasek Polytechnic
  To change, search index.html for:
     2026-11-21       (countdown target)
     21–22 NOV 2026   (displayed date)


--------------------------------------------------
7. SPONSORS / PARTNERS
--------------------------------------------------
  In the #partners section, replace the chip names
  (Temasek Polytechnic, DBS, Huawei, etc.) with your
  real partners. To use real logos instead of letter
  chips, swap the <div class="s-logo">TP</div> for an
  <img src="photos/yourlogo.svg" alt="...">


==================================================
  Built for Business China Youth Forum 2026
  Questions? Email: hello@bcyf2026.sg
==================================================
