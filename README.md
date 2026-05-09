# Andreas Schmitt Photographie – Website

## Projektstruktur

```
schmitt-foto.de/
├── index.html              ← Homepage
├── ueber-mich.html         ← Über mich
├── kontakt.html            ← Kontakt & Formular
├── hochzeitsfotos.html     ← Hochzeitsfotos (Beispiel-Unterseite)
├── galerie.html            ← Portfolio (TODO)
├── businessfotos.html      ← Businessfotos (TODO)
├── videos-und-filme.html   ← Videos (TODO)
├── portraits.html          ← Portraits (TODO)
├── faq.html                ← FAQ (TODO)
├── css/
│   └── style.css           ← Gesamtes Stylesheet
├── js/
│   └── main.js             ← Navigation, Animationen, Counter
├── images/                 ← Ihre Fotos hier ablegen
│   └── uploads/            ← CMS-Uploads
├── admin/
│   ├── index.html          ← Decap CMS Editor
│   └── config.yml          ← CMS Konfiguration
└── netlify.toml            ← Netlify Konfiguration
```

---

## Deployment auf Netlify (Schritt für Schritt)

### 1. GitHub-Repository anlegen
1. Gehen Sie zu https://github.com/new
2. Repository-Name: `schmitt-foto-website`
3. Privat ✓
4. Erstellen

### 2. Dateien hochladen
- Alle Dateien dieses Projekts in das Repository hochladen
- Oder: GitHub Desktop App verwenden

### 3. Netlify verbinden
1. https://app.netlify.com → Ihr Team `a-schmitt-as`
2. "Add new site" → "Import an existing project"
3. GitHub auswählen → Repository wählen
4. Build settings:
   - Build command: (leer lassen)
   - Publish directory: `.`
5. Deploy

### 4. Netlify Identity aktivieren
1. Site settings → Identity → Enable Identity
2. Registration: Invite only
3. External providers: Google (optional)
4. Git Gateway: Services → Git Gateway → Enable

### 5. Admin-Zugang einrichten
1. Identity → Invite users → Ihre E-Mail eingeben
2. E-Mail-Einladung bestätigen
3. CMS unter `ihre-domain.netlify.app/admin` erreichbar

### 6. Domain umzeigen (schmitt-foto.de)
Bei IONOS DNS-Einstellungen:
```
Typ: A
Name: @
Wert: 75.2.60.5   (Netlify IP)

Typ: CNAME
Name: www
Wert: ihre-site.netlify.app
```

### 7. Domain in Netlify eintragen
Site settings → Domain management → Add custom domain → `schmitt-foto.de`

---

## CMS verwenden

Nach dem Setup unter `schmitt-foto.de/admin`:
- Login mit Netlify Identity
- Texte, Bilder und Pakete direkt bearbeiten
- Änderungen werden automatisch veröffentlicht

---

## Bilder einbinden

Ersetzen Sie die Platzhalter `.image-placeholder` durch echte `<img>` Tags:

```html
<!-- Vorher (Platzhalter): -->
<div class="image-placeholder"><span>Ihr Bild hier</span></div>

<!-- Nachher (echtes Bild): -->
<img src="images/ihr-foto.jpg" alt="Beschreibung" loading="lazy">
```

---

## Farben & Fonts

```css
--bg:         #f8f6f3   (Hintergrund)
--gold:       #b8963e   (Akzentfarbe)
--text:       #797979   (Textfarbe)
--text-dark:  #3d3830   (Dunkler Text)

Font Headings: Poppins
Font Body:     Manrope
```

---

## Kontakt & Support

info@schmitt-foto.de  
01525 · 35 76 266
