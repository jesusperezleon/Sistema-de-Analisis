# 📊 Sistema de Análisis de Texto

Este proyecto consiste en una aplicación web para el análisis de texto desarrollada con **ASP.NET Core (.NET 9)**.  
El sistema permite introducir un texto desde una interfaz web, procesarlo mediante un **script en Python** y devolver al usuario un conjunto de estadísticas en formato estructurado.

La aplicación sigue una arquitectura sencilla cliente-servidor y está pensada para fines académicos, prácticas o prototipos.

---

## ⚙️ Proceso de instalación

### Requisitos previos

Antes de ejecutar la aplicación, es necesario disponer de los siguientes elementos instalados en el sistema:

- Visual Studio 2022 (versión actualizada)
- .NET SDK 9.0
- Python 3.10 o superior
- Python correctamente configurado en el PATH del sistema

Es recomendable verificar que tanto .NET como Python están disponibles desde la línea de comandos antes de continuar.

---

### Instalación del proyecto

1. Clonar el repositorio desde GitHub en el equipo local.
2. Abrir el archivo de solución (`.sln`) con Visual Studio 2022.
3. Verificar que el framework del proyecto esté configurado como **.NET 9.0**.
4. Ejecutar la aplicación utilizando https de ASP.NET Core.

Una vez iniciado, la aplicación será accesible desde el navegador web mediante la dirección local proporcionada por Visual Studio. Una vez iniciada se mostrará la vista de [index.html](https://github.com/jesusperezleon/Sistema-de-Analisis/blob/master/Sistema%20de%20Analisis/wwwroot/index.html)

---

## 🧩 Estructura y partes del sistema

El sistema se compone de cuatro partes principales que trabajan de forma coordinada.

---

## 1️⃣ Script de análisis en Python

El script en Python es el encargado de realizar el procesamiento del texto.  
Recibe el contenido a analizar como entrada y calcula diferentes métricas relacionadas con el texto, como el número de palabras, caracteres o la frecuencia de aparición de letras y palabras.

Este script se ejecuta desde el backend mediante línea de comandos, lo que permite integrar Python con ASP.NET Core sin necesidad de librerías externas adicionales.  
El resultado del análisis se devuelve en formato JSON, facilitando su posterior tratamiento por el backend.

---

## 2️⃣ Backend ASP.NET Core

El backend está desarrollado con **ASP.NET Core (.NET 9)** y actúa como intermediario entre el frontend y el script de Python.

Sus responsabilidades principales son:

- Recibir el texto enviado desde el cliente web.
- Ejecutar el script de Python pasándole el texto como parámetro.
- Capturar el resultado generado por el script.
- Devolver el resultado al cliente en formato JSON.

El backend expone una API REST sencilla que permite desacoplar la lógica de procesamiento del texto de la interfaz de usuario.

---

## 3️⃣ Modelo de datos

El modelo de datos define la estructura del contenido que se intercambia entre el frontend y el backend.  
En este proyecto, el modelo representa el texto que el usuario desea analizar.

El uso de modelos permite una correcta serialización y deserialización de los datos enviados en formato JSON, facilitando la comunicación entre las distintas capas del sistema.

---

## 4️⃣ Frontend (wwwroot)

El frontend es una interfaz web sencilla desarrollada con HTML y JavaScript.  
Se sirve como contenido estático desde la carpeta `wwwroot`, aprovechando las capacidades nativas de ASP.NET Core para servir archivos estáticos.

Desde esta interfaz, el usuario puede:

- Introducir un texto para analizar.
- Enviar el texto al backend mediante una petición HTTP.
- Visualizar los resultados del análisis devueltos por el sistema.

El archivo principal del frontend se carga automáticamente al acceder a la raíz de la aplicación.

---

## 🔗 Funcionamiento general del sistema

El flujo de funcionamiento de la aplicación es el siguiente:

1. El usuario introduce un texto en la interfaz web.
2. El frontend envía el texto al backend mediante una petición HTTP.
3. El backend ejecuta el script de Python con el texto recibido.
4. El script analiza el contenido y genera un resultado estructurado.
5. El backend devuelve el resultado al frontend.
6. El frontend muestra el análisis al usuario.

---

## ✅ Consideraciones finales

- La integración entre ASP.NET Core y Python se realiza de forma directa mediante ejecución de procesos.
- El proyecto no depende de servicios externos ni bases de datos.
- La arquitectura es sencilla y fácil de extender.
- Está orientado a entornos educativos y de aprendizaje.

---

## 👤 Autor

Proyecto desarrollado utilizando **ASP.NET Core (.NET 9)** y **Python** como sistema de análisis de texto.
