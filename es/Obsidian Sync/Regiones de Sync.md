---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mueve tu bóveda de Sync a una región diferente.
---
Cuando creas una [[Bóvedas locales y remotas|bóveda remota]] a través de [[Introducción a Obsidian Sync|Obsidian Sync]], tus datos se cifran y almacenan en uno de los servidores regionales de Sync de Obsidian. Esta guía explica cómo mover tu bóveda de Sync a un servidor regional diferente.

## Regiones disponibles

Las siguientes regiones están disponibles con Obsidian Sync. Recomendamos usar **Automático** o elegir una ubicación cercana a ti para reducir la latencia y hacer que el proceso de sincronización sea más rápido.

![[Obsidian Sync/Seguridad y privacidad#^sync-geo-regions]]

## Cambiar la región de Sync

Para cambiar la región de tu bóveda remota, necesitarás recrear tu bóveda en un servidor de Sync diferente. Ten en cuenta que también puedes cambiar de región utilizando el asistente de migración de [[Actualizar cifrado de Sync]], si tu bóveda remota está en una versión anterior.

> [!danger] Las migraciones son destructivas
> 
> **Siempre [[Respaldar tus archivos de Obsidian|respalda]] tu bóveda antes de proceder con una migración.**
> 
> Cuando migras una bóveda remota, tus datos serán reemplazados. Esto significa:
> 
> 1. Los datos remotos serán eliminados de los servidores de Obsidian, y los datos de la bóveda serán re-subidos en su lugar.
> 2. Todo el [[Historial de versiones|historial de versiones]] de la bóveda se perderá.

![[Configurar Obsidian Sync#Desconectar de una bóveda remota]]

Si estás en el [[Planes y límites de almacenamiento|Plan Estándar]], también necesitarás [[#Eliminar una bóveda remota|eliminar tu bóveda remota]] antes de proceder.

![[Configurar Obsidian Sync#Crear una nueva bóveda remota]]

Además, puedes [[#Eliminar una bóveda remota|eliminar tu antigua bóveda remota]] una vez que hayas confirmado la transición a tu nueva bóveda remota y su región.
