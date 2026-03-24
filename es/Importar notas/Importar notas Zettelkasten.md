---
permalink: import/zettelkasten
---
Si has estado utilizando el método Zettelkasten para nombrar y enlazar tus notas, es posible que necesites convertir los enlaces de `[[UID]]` a `[[UID Título de mi nota]]`.

Por ejemplo, si tienes una nota con el nombre `202301011230 Título de mi nota` y la enlazas desde otra nota usando solo el UID, `[[202301011230]]`. Dado que Obsidian usa el nombre completo de la nota para resolver los enlaces internos, enlaces como estos dejarán de funcionar.

Para actualizar todos los enlaces `[[UID]]` en tu bóveda para que usen el nombre completo de la nota, utiliza el [[Conversor de formato]].

1. Abre **[[Configuración]]**.
2. En **Complementos principales**, activa **Importador de formato Markdown** y cierra la ventana de Ajustes.
3. En el menú de cinta, en el lado izquierdo de la ventana de la aplicación, selecciona **Open format convert** ![[lucide-binary.svg#icon]].
4. Activa **Corrector de enlaces de Zettelkasten**.
5. Selecciona **Empezar la conversión**. Esto convertirá todas las notas en toda tu bóveda.

> [!tip] Embellece los enlaces de Zettelkasten
> El [[Conversor de formato]] también puede embellecer tus enlaces eliminando el UID del nombre para mostrar. Por ejemplo, `[[UID]]` se convierte en `[[UID Título de mi nota|Título de mi nota]]`.
>
> Para embellecer tus enlaces Zettelkasten, activa **Embellece los enlaces de Zettelkasten** en la ventana del conversor de formato.

También puedes usar el [[Creador de nota única]] para crear notas Zettelkasten en Obsidian.
