---
permalink: community-directory
description: Was die öffentliche Eintragsseite eines Plugins oder Themes im Obsidian-Community-Verzeichnis anzeigt.
---
Jede Erweiterung und jedes Thema hat eine öffentliche Eintragsseite im [Obsidian Community-Verzeichnis](https://community.obsidian.md). Wähle eine Erweiterung unter [[Community-Erweiterungen#Community-Erweiterungen durchsuchen|Durchsuchen]] oder ein Thema unter [[Themen#Themen durchsuchen|Durchsuchen]] in Obsidian aus, oder durchstöbere [community.obsidian.md](https://community.obsidian.md) direkt, um die jeweilige Eintragsseite zu öffnen.

Diese Seite hilft dir zu verstehen, was die einzelnen Bereiche bedeuten – aus der Perspektive eines Obsidian-Nutzers.

> [!tip]- Bist du Erweiterungs- oder Thema-Entwickler?
> Erfahre in der [Community-Verzeichnis-Dokumentation](https://docs.obsidian.md/community-directory), wie du eigene Erweiterungen und Themen einreichst und verwaltest.

## Kopfbereich

Der Kopfbereich zeigt das Symbol und den Namen des Eintrags mit einem **Official**-Badge, falls er von den ursprünglichen Entwicklern der Erweiterung oder des Themas erstellt wurde, zusammen mit dem Symbol und Namen des Autors sowie der Gesamtzahl der Downloads.

Wähle **Add to Obsidian**, um den Eintrag direkt in Obsidian zu öffnen und zu installieren.

## Übersicht

Der Tab **Overview** zeigt die Screenshots des Eintrags, seine ausführliche Beschreibung, einen Auszug aus der README-Datei sowie ein Raster verwandter Erweiterungen oder Themen in derselben Kategorie.

## Scorecard

Der Tab **Scorecard** zeigt automatisierte Gesundheits- und Bewertungsmetriken für den Eintrag.

Eine Gesamtbewertung der Gesundheit, wie z. B. Excellent, wird aufgeschlüsselt in Hygiene (ob eine README-Datei, Lizenz, Beitragsrichtlinien und Beschreibung vorhanden sind), Wartung (aktuelle Commit- und Release-Aktivität), Reaktionsfähigkeit (wie viele Issues geschlossen wurden und wie viele Mitwirkende kürzlich aktiv waren) und Verbreitung (Installations- und Sternezahlen).

Der Bewertungsbereich zeigt das Ergebnis des letzten automatisierten Scans, wie z. B. Passed, gruppiert in bestandene Prüfungen (zum Beispiel keine bekannten verwundbaren Abhängigkeiten, kein verschleierter Quelltext, verifizierte GitHub-Artefakt-Attestierungen und welche Obsidian-APIs der Eintrag nutzt, wie Vault Read oder Vault Write), Offenlegungen (Dinge, die der Eintrag tut, die nicht unbedingt Probleme darstellen, aber die du kennen solltest, wie den Zugriff auf deine Zwischenablage oder Anfragen an externe Domains) und sonstige Hinweise (wie die Nutzung von Browser-Speicher anstelle von Obsidians Erweiterungsdaten-APIs).

> [!info]+ Eine niedrigere Bewertung interpretieren
> Eine Erweiterung oder ein Thema mit einer niedrigeren Gesundheits- oder Bewertungsnote ist nicht zwangsläufig unsicher, aber es lohnt sich, die Offenlegungen vor der Installation genauer anzuschauen. Stell es dir wie eine Ampel vor:
> - 🟢 Wenige oder keine Offenlegungen bedeuten geringes Risiko
> - 🟡 Eine Handvoll Offenlegungen, es lohnt sich zu prüfen, ob z. B. Zwischenablage- oder Netzwerkzugriff dabei ist
> - 🔴 Mehrere Offenlegungen oder Warnungen bedeuten, dass du sorgfältig prüfen solltest, was der Eintrag tut, bevor du ihn installierst.

## Aktualisierungen

Der Tab **Updates** listet den Release-Verlauf des Eintrags mit Version und Datum jedes Releases auf. Wähle **View all releases on GitHub**, um den vollständigen Verlauf im Repository des Eintrags zu sehen.

## Seitenleiste

Neben den Tabs zeigt die Seitenleiste Zusammenfassungen von Gesundheit und Bewertung passend zum Scorecard-Tab, die ausführliche Beschreibung des Eintrags sowie Details wie die aktuelle Version, wann er zuletzt aktualisiert und erstellt wurde, die Anzahl der Aktualisierungen und Downloads, die kompatible Obsidian-Version, unterstützte Plattformen und die Lizenz. Falls der Eintrag nicht kostenlos ist, erklärt ein Zahlungsbereich, wie die Preisgestaltung funktioniert, zum Beispiel kostenpflichtige Stufen oder Nutzungslimits. Wenn der Autor Funding-Links hinzugefügt hat, erscheint hier auch ein Support-Link, zusammen mit dem Symbol und Namen des Autors oder der Organisation und Links zu deren anderen Profilen.

## Häufig gestellte Fragen

**Was ist der Unterschied zwischen Free, Optional payment und Paid bei einem Eintrag?**
Free bedeutet, dass keine Zahlungen anfallen. Optional payment bedeutet, dass der Eintrag auf einen kostenpflichtigen Drittanbieterdienst angewiesen ist oder bestimmte Funktionen hinter einer Bezahlung sperrt, aber grundsätzlich kostenlos nutzbar bleibt. Paid bedeutet, dass der Eintrag nur gegen Bezahlung zugänglich ist.

Schau dir den Zahlungsbereich in der Seitenleiste des Eintrags an, um Details zur Preisgestaltung eines bestimmten Eintrags zu erfahren.

**Warum kann ich eine Erweiterung oder ein Thema, das ich anderswo erwähnt gesehen habe, nicht finden oder installieren?**
Der Autor hat es möglicherweise archiviert. Durch Archivierung wird ein Eintrag aus dem Community-Verzeichnis entfernt und neue Installationen werden verhindert.

**Was ist der Unterschied zwischen den Gesundheits- und Bewertungsnoten bei einem Eintrag?**
Gesundheit spiegelt die laufende Hygiene und Wartung des Eintrags wider, wie aktuelle Commits und die Reaktionsfähigkeit bei Issues. Bewertung spiegelt das Ergebnis des letzten automatisierten Scans eines Releases wider.
