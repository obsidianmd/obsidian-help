Cuando desee agregar estilos personalizados a su bóveda, hay dos formas principales de hacerlo:

## Estilos de bóveda

### Temas

Los temas le permiten alternar la apariencia de su bóveda con un menú desplegable una vez que se han agregado al directorio de temas de su bóveda.

Esta configuración se puede encontrar en `Configuración`> `Apariencia`>` Temas` sección de la configuración de su bóveda.

### Crea un tema personalizado

Si está creando su propio tema, puede hacerlo de la siguiente manera:

1. Creando su archivo CSS de tema personalizado en el directorio de temas `TU_BÓVEDA/.obsidian/themes/TU_TEMA_PERSONALIZADO.css`
2. Habilitarlo en el menú desplegable de temas en `Configuración`> `Apariencia`>` Temas`

Para obtener más información sobre cómo personalizar los estilos del gráfico, puede encontrar más información en [[vista de gráfico]].

### Utilice temas y/o fragmentos de CSS

Puede encontrar esta configuración en Apariencia en la configuración. Puede elegir un tema de la comunidad o establecer el tema que desarrolló usted mismo. Si configura un tema de la comunidad, se colocará automáticamente en la carpeta correcta. Si desarrolla su propio tema, debe colocarlo usted mismo en la ubicación de la carpeta que se muestra.

Se supone que los fragmentos de CSS son pequeñas piezas de CSS para los pequeños cambios que desea hacer / cosas que desea agregar. Estos fragmentos deben colocarse en el directorio que se muestra.

Puede ir a los directorios respectivos haciendo clic en los botones de carpeta. Si la carpeta aún no se ha creado, lo estará. En caso de que los fragmentos o el tema no aparezcan después de colocarlos allí, puede hacer clic en el botón junto al icono de la carpeta para actualizar la lista.

## Estilos de publicación de Obsidian

En este momento, [[Obsidian Publish]] no puede detectar automáticamente la configuración de la bóveda [[Agregar estilos personalizados#Temas|temas]] y publicar los estilos respectivos.

Una solución alternativa para esta limitación es:

1. Entra en `YOUR_VAULT/.obsidian/themes/CURRENT_THEME_FOLDER`;
2. Copie el archivo CSS principal `CURRENT_THEME.css` en la carpeta;
3. Péguelo en el directorio raíz de su bóveda.(`YOUR_VAULT`);
4. Cambie el nombre del archivo CSS como `publish.css`;
5. En el complemento de publicación, cargue el archivo `publish.css`;
6. Si su CSS no tiene efecto en unos minutos, intente actualizar la caché del navegador, ya que es posible que la CSS obsoleta se haya almacenado en caché.