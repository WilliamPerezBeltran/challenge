# Challenge
- Ejercicio propuesto por Koibanx

## Stack

- React 17.0.2

### Clone repo

```bash
# Clone repo
$ git clone https://github.com/WilliamPerezBeltran/challenge.git

# Ir al directorio del app
$ cd challenge

# Instalar dependencias 
$ npm install

# Ejecutar app
$ npm start 
```

## Observaciones 
- En la carpeta services hay dos archivos FetchData.js y FetchFilterData.js el cual está comentado y representa el código cuando se utilice la conexión con una api real. 
En estos momentos se utilizaron los archivos que se encuentran en la carpeta json (db.json y dbFilter.json) estos archivos simularon la respuesta de la api. 

- Para pasar los datos entre componentes se utilizo props , no se utilizo redux (lo ideal).
- La paginación no es optima puesto que no es el objectivo de la prueba.


## Qué incluye

```
├───public/
│   ├───favicon.ico
│   ├───index.html
│   ├───logo192.png
│   ├───logo512.png
│   ├───manifest.json
│   └───robots.txt
├───src/
│   ├───js/
│   │   ├───components/
│   │   │   ├───Filter.js
│   │   │   ├───Table.js
│   │   │   ├───filter.css
│   │   │   └───table.css
│   │   ├───json/
│   │   │   ├───db.json
│   │   │   └───dbFilter.json
│   │   ├───services/
│   │   │   ├───FetchData.js
│   │   │   └───FetchFilterData.js
│   │   ├───Constants.js
│   │   └───Main.js
│   ├───App.css
│   ├───App.js
│   ├───App.test.js
│   ├───index.css
│   ├───index.js
│   ├───logo.svg
│   ├───reportWebVitals.js
│   └───setupTests.js
├───README.md
├───package-lock.json
├───package.json
└───yarn.lock
```



## Creador

**William Pérez**

- <https://github.com/WilliamPerezBeltran>

