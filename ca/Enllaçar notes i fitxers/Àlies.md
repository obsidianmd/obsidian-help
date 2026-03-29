---
permalink: aliases
cssclasses:
  - soft-embed
---
Si vols fer referència a un fitxer utilitzant noms diferents, considera afegir _àlies_ a la nota. Un àlies és un nom alternatiu per a una nota.

Utilitza àlies per a coses com acrònims, sobrenoms o per referir-te a una nota en un idioma diferent.

Si només vols canviar l'aparença d'un enllaç en un lloc concret, consulta com [[Enllaços interns#Canviar el text de visualització de l'enllaç|Canviar el text de visualització de l'enllaç]].

![[Enllaços interns#^callout-internal-links-link-text]]

## Afegir un àlies a una nota

Per afegir un àlies a una nota, afegeix la propietat `aliases` a les [[Propietats]] de la nota. Els àlies sempre s'han de formatar com una llista en YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Enllaçar a una nota utilitzant un àlies

Per enllaçar a una nota utilitzant un àlies:

1. Comença a escriure l'àlies en un [[Enllaços interns|enllaç intern]]. Qualsevol àlies apareixerà a la llista de suggeriments, amb una icona de fletxa corbada al costat.
2. Prem `Enter` per seleccionar l'àlies.

Obsidian crea l'enllaç amb l'àlies com a text de visualització personalitzat, per exemple `[[Artificial Intelligence|AI]]`.

> [!note] Nota
> En lloc d'utilitzar simplement l'àlies com a destinació de l'enllaç (`[[AI]]`), Obsidian utilitza el format d'enllaç `[[Artificial Intelligence|AI]]` per assegurar la interoperabilitat amb altres aplicacions que utilitzen el format d'enllaç wiki.

## Trobar mencions sense enllaçar per a un àlies

Utilitzant els [[Retroenllaços]], pots trobar mencions sense enllaçar dels àlies.

Per exemple, després d'establir "AI" com a àlies per a "Artificial intelligence", pots veure les mencions de "AI" en altres notes.

Si enl laces una menció sense enllaçar a un àlies, Obsidian converteix la menció en un [[Enllaços interns|enllaç intern]] amb l'àlies com a text de visualització.
