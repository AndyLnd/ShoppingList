ShoppingList
============

A web based, fully responsive shopping list app

# user kann:
listen erstellen
listen abrufen
listen löschen
listen teilen
einträge abrufen
einträge hinzufügen
einträge bearbeiten
status der einträge ändern
einträge löschen

#server:
3 datenbanken
user (id, email, pw)
liste (id, name, timestamp, listendaten)
has (userid, listenid)
user sendet jedes mal email, pw(token), listenid, aktionsid, daten.

#views:
(popup)
ladebildschirm
statisches bild
evtl fortschrittsbalken
log in
input email
input passwort
button log in
link registrieren
listenübersicht
miniaturansichten
klick öffnet die liste
namen als overlay
button löschen
bestätigungspopup

listenansicht
listenname
touchhold > namen ändern
zurück zur Übersicht
Liste teilen
popup mit email feld
einträge
touchhold -> eintrag bearbeiten
button erledigt
neuer eintrag
erledigte einträge
löschen
wieder aufnehmen
