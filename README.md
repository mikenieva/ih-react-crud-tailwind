# Documentación


## Instalación

- Para instalar el proyecto en tu computadora:

```shell
npm install
npm run start
```

## Instalación de TailwindCSS


1. Instalar TailwindCSS con sus últimas actualizaciones. Posteriormente generar el archivo de `tailwind.config.js`

```shell
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

2. Instalamos Craco

```shell
npm install @craco/craco
```

3. Realizamos los cambios en `package.json`

```javascript
  {
    "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```

4. Creamos un archivo llamado `craco.config.js` y pasamos esta configuración:

```javascript
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

5. Desinstalar la última versión de Tailwind y generar el proceso de compatibilidad

```shell
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```


6. Hacer un cambio en la línea de `purge` para realizar el `input` y el `output` del preprocesamiento.

```javascript
  // tailwind.config.js
  module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

7. Incluir Tailwind dentro de `index.css`, en nuestra sección raiz de la aplicación.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```







## FAQs

**Si tengo un error de compatilibidad con Node, ¿cuál usar?**

Se está utilizando la versión `v.14.16.0`


**Tuve el error: `Cannot find module 'autoprefixer'`**

Link a issue: [](https://github.com/tailwindlabs/tailwindcss/issues/2831)


**¿ Cómo instalar TailwindCSS en Linux Arch?

```shell
 npm install -D -f tailwindcss@latest
```



