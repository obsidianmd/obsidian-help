---
permalink: sync/faq
publish: true
mobile: true
description: Aquesta pàgina enumera algunes de les preguntes habituals relacionades amb qüestions i limitacions d'Obsidian Sync.
---
Aquesta pàgina enumera algunes de les preguntes comunes relacionades amb preguntes i limitacions d'[[Introducció a Obsidian Sync|Obsidian Sync]].

## General

### Quins sistemes operatius suporta Obsidian Sync?

Obsidian Sync suporta totes les plataformes on Obsidian pot funcionar. Actualment, això inclou Windows, macOS, Linux, Android i iOS.

### Obsidian funciona amb el mode de bloqueig d'Apple?

Obsidian es pot utilitzar en [mode de bloqueig](https://support.apple.com/en-us/105120) sempre que Obsidian s'afegeixi com a exclusió.

### Quin tipus de dades se sincronitzen?

Per defecte, se sincronitzen les teves notes d'Obsidian, les imatges i la teva [[Carpeta de configuració]].

Pots afegir opcions addicionals de sincronització de PDFs, fitxers d'àudio, fitxers de vídeo i altres fitxers quan [[Configuració de Sync i sincronització selectiva|configuris la sincronització selectiva]].

### Quant d'emmagatzematge tinc?

El límit d'emmagatzematge depèn del teu [[Plans i límits d'emmagatzematge#Plans|pla de Sync]] d'Obsidian. La quantitat màxima d'emmagatzematge és de 100 GB. Aquest límit d'emmagatzematge inclou l'[[Historial de versions|historial de versions]].

Pots veure la **Mida de l'arca** a l'aplicació Obsidian anant a **[[Configuració]] → Sync**.

### Quantes cambres remotes puc tenir?

El nombre de cambres remotes que pots tenir es determina segons el teu [[Plans i límits d'emmagatzematge#Plans|pla de Sync]]. El pla Standard inclou 1 cambra forta, el pla Plus inclou 10 cambres fortes. Les arques compartides amb tu no compten per al teu límit de cambres fortes.

### Com de gran pot ser cada cambra remota?

No hi ha límit per cambra forta. El límit d'emmagatzematge està vinculat al teu compte utilitzat i es pot aplicar a totes les teves cambres fortes.

### Amb quantes persones puc compartir una cambra remota?

Pots [[Col·laborar en una cambra cuirassada compartida|compartir una cambra remota]] amb fins a 20 persones.

### Com de gran pot ser cada fitxer?

La mida màxima del fitxer depèn del teu [[Plans i límits d'emmagatzematge|pla d'Obsidian Sync]]. Per al pla Standard el límit és de 5 MB. Per al pla Plus el límit és de 200 MB per fitxer.

### Les meves dades se sincronitzen en segon pla?

No, els fitxers només se sincronitzen quan Obsidian s'està executant.

### Obsidian Sync recarrega la configuració en temps real?

Obsidian Sync pot recarregar automàticament certs paràmetres, però hi ha algunes limitacions. Per a més detalls, consulta [[Configuració de Sync i sincronització selectiva#Recàrrega de la configuració|Recàrrega de la configuració]].

### Puc utilitzar una sincronització de tercers amb Obsidian Sync?

No recomanem utilitzar un servei de sincronització de tercers juntament amb Obsidian Sync. Utilitzar un servei de tercers i Obsidian Sync en múltiples dispositius pot provocar conflictes, resultant en fitxers duplicats o corromputs.

Els serveis d'emmagatzematge al núvol com OneDrive i Dropbox ofereixen funcions de "Fitxers sota demanda" o "Fitxers només en línia", que descarreguen els fitxers només quan es necessiten i els eliminen localment per estalviar espai. No obstant això, com que aquests fitxers no sempre estan disponibles localment, Obsidian Sync els interpretarà com a eliminats, provocant la seva eliminació de la teva cambra remota.

Per evitar aquests problemes, desactiva les descàrregues sota demanda quan utilitzis Obsidian Sync amb serveis com OneDrive o Dropbox. Hauràs d'assegurar-te que la configuració del servei de tercers estigui configurada per mantenir sempre els fitxers al dispositiu.

## Retenció de dades

Aquestes són preguntes freqüents sobre la retenció de dades d'Obsidian. Per a respostes més detallades, consulta [[Seguretat i privacitat|Seguretat i privacitat]].

### Quant de temps conserveu l'historial de versions?

L'[[Historial de versions]] depèn del teu [[Plans i límits d'emmagatzematge|pla d'Obsidian Sync]]. Amb el pla Standard les teves notes es conserven durant 1 mes. Amb el pla Plus les teves notes es conserven durant 12 mesos. Després d'aquest període de temps, les versions més antigues s'eliminen.

Les versions més antigues dels [[Fitxers adjunts|fitxers adjunts]] s'emmagatzemen durant dues setmanes.

### Quant de temps conserveu les meves dades després que caduqui la meva subscripció?

Conservem les dades a les teves cambres remotes, inclòs l'historial de versions, durant un mes després que caduqui la teva subscripció. Les cambres fortes locals als teus dispositius no es veuen afectades.

Sempre que renovis dins d'un mes, no hauria d'haver-hi cap impacte en el teu ús. Si renoves després d'un mes, quan les teves cambres remotes hagin estat eliminades, pots [[Configurar Obsidian Sync|crear una nova cambra remota]] i connectar la teva cambra forta local.

### Conserveu les meves dades si reemborso el meu servei de subscripció?

No. Les dades s'eliminen immediatament dels servidors d'Obsidian Sync. Les dades a la teva [[Cambres cuirassades locals i remotes|cambra forta local]] no es veuen afectades.
