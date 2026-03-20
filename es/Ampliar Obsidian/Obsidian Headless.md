---
permalink: headless
description: Obsidian Headless es un cliente de línea de comandos para los servicios de Obsidian. Sincroniza tus bóvedas sin la aplicación de escritorio.
---
Obsidian Headless **(beta abierta)** es un cliente sin interfaz gráfica para los servicios de Obsidian. Te permite [[Sync sin interfaz gráfica|sincronizar bóvedas]] desde la línea de comandos sin la aplicación de escritorio, con toda la velocidad, privacidad y beneficios de cifrado de extremo a extremo de [[Introducción a Obsidian Sync|Obsidian Sync]].

Razones por las que podrías usar Obsidian Headless:

- Automatizar copias de seguridad remotas.
- Automatizar la publicación de un sitio web.
- Dar a herramientas agénticas acceso a una bóveda sin acceso a toda tu computadora.
- Sincronizar una bóveda compartida de equipo a un servidor que alimente otras herramientas.
- Ejecutar automatizaciones programadas, por ejemplo, agregar notas diarias en resúmenes semanales, auto-etiquetar, etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controla la aplicación de escritorio de Obsidian desde tu terminal. Obsidian Headless es un cliente independiente que se ejecuta por sí solo, sin necesidad de la aplicación de escritorio.

## Instalar

Obsidian Headless **(beta abierta)** requiere Node.js 22 o posterior. Instálalo desde [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autenticación

### Iniciar sesión

```shell
ob login
```

Si ya has iniciado sesión, `ob login` muestra la información de tu cuenta. Para cambiar de cuenta, pasa `--email` y/o `--password` para iniciar sesión nuevamente.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Todas las opciones son interactivas cuando se omiten — se solicitan el correo electrónico y la contraseña, y la autenticación de dos factores se solicita automáticamente si está habilitada en la cuenta.

Para cerrar sesión y eliminar las credenciales almacenadas:

```shell
ob logout
```

## Servicios

- [[Sync sin interfaz gráfica]]: usa [[Introducción a Obsidian Sync|Obsidian Sync]] desde la línea de comandos sin la aplicación de escritorio.
