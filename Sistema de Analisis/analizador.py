import sys
import json
from collections import Counter
import string

def analizar_texto(texto):
    texto_lower = texto.lower()
    
    # Lista de palabras
    palabras = texto_lower.split()
    
    num_palabras = len(palabras)
    
    num_caracteres = len(texto.replace(" ", ""))
    
    # Contar frecuencia de palabras
    contador_palabras = Counter(palabras)
    mas_frecuentes = contador_palabras.most_common(5)
    palabras_mas_frecuentes = [p[0] for p in mas_frecuentes]
    
    # Contar letras (solo a-z)
    letras = [c for c in texto_lower if c in string.ascii_lowercase]
    total_letras = len(letras)
    
    contador_letras = dict(Counter(letras))
    
    # Longitud media de palabras
    longitud_media = sum(len(p) for p in palabras) / num_palabras if num_palabras > 0 else 0
    
    # Construir JSON de salida
    resultado = {
        "num_palabras": num_palabras,
        "num_caracteres": num_caracteres,
        "palabras_mas_frecuentes": palabras_mas_frecuentes,
        "total_letras": len(contador_letras),
        "conteo_por_letra": contador_letras,
        "longitud_media": round(longitud_media, 2)
    }
    
    return resultado


if __name__ == "__main__":

    # Comprobamos que no sea vacio
    if len(sys.argv) > 1:
        entrada = sys.argv[1]
        datos_procesados = analizar_texto(entrada)
        
        print(json.dumps(datos_procesados))
