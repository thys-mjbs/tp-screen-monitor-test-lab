import type { Tool } from '@/lib/tools'

type ToolTranslation = Pick<Tool, 'name' | 'shortDescription' | 'metaTitle' | 'metaDesc'>

export const toolTranslations: Record<string, ToolTranslation> = {
  'dead-pixel-test': {
    name: 'Prueba de píxeles muertos',
    shortDescription: 'Cambia entre colores sólidos para detectar píxeles muertos o atascados en tu pantalla.',
    metaTitle: 'Prueba de píxeles muertos: comprobador de monitor gratuito',
    metaDesc: 'Comprueba tu monitor en busca de píxeles muertos al instante. Cambia entre pantallas de colores sólidos para detectar píxeles muertos, atascados o calientes.',
  },
  'stuck-pixel-fixer': {
    name: 'Reparador de píxeles atascados',
    shortDescription: 'Parpadea colores rápidos sobre una zona objetivo para intentar liberar un píxel atascado.',
    metaTitle: 'Reparador de píxeles atascados: herramienta gratuita en línea',
    metaDesc: 'Intenta reparar un píxel atascado mediante el parpadeo rápido de colores sobre la zona afectada. Gratis y sin instalación.',
  },
  'white-screen': {
    name: 'Pantalla blanca',
    shortDescription: 'Un panel blanco en pantalla completa para inspección de píxeles o limpieza del monitor.',
    metaTitle: 'Pantalla blanca: pantalla blanca completa en línea',
    metaDesc: 'Muestra un panel blanco puro en pantalla completa para detectar suciedad, manchas o defectos de píxeles.',
  },
  'black-screen': {
    name: 'Pantalla negra',
    shortDescription: 'Un panel negro sólido en pantalla completa para comprobar el sangrado de luz de fondo y el brillo parásito.',
    metaTitle: 'Pantalla negra: pantalla negra completa en línea',
    metaDesc: 'Rellena tu pantalla con negro puro para detectar sangrado de luz de fondo, brillo IPS y otros defectos.',
  },
  'red-screen': {
    name: 'Pantalla roja',
    shortDescription: 'Rellena la pantalla de rojo para aislar problemas de color y subpíxeles.',
    metaTitle: 'Pantalla roja: pantalla roja completa en línea',
    metaDesc: 'Muestra un panel rojo sólido en pantalla completa para detectar defectos de subpíxeles y problemas de color.',
  },
  'green-screen': {
    name: 'Pantalla verde',
    shortDescription: 'Rellena la pantalla de verde para aislar problemas de píxeles y tonalidad.',
    metaTitle: 'Pantalla verde: pantalla verde completa en línea',
    metaDesc: 'Muestra un panel verde sólido en pantalla completa para detectar defectos de píxeles y problemas de tonalidad.',
  },
  'blue-screen': {
    name: 'Pantalla azul',
    shortDescription: 'Rellena la pantalla de azul para exponer artefactos de pantalla y fallos de subpíxeles.',
    metaTitle: 'Prueba de pantalla azul: pantalla azul completa en línea',
    metaDesc: 'Muestra un panel azul sólido en pantalla completa para detectar artefactos y fallos de subpíxeles.',
  },
  'grey-screen': {
    name: 'Pantalla gris',
    shortDescription: 'Un panel gris neutro para revelar el efecto de pantalla sucia y problemas de uniformidad.',
    metaTitle: 'Pantalla gris: pantalla gris completa en línea',
    metaDesc: 'Muestra un panel gris neutro en pantalla completa para detectar el efecto de pantalla sucia y problemas de uniformidad.',
  },
  'yellow-screen': {
    name: 'Pantalla amarilla',
    shortDescription: 'Usa un panel amarillo para detectar tonalidades y defectos de subpíxeles.',
    metaTitle: 'Pantalla amarilla: pantalla amarilla completa en línea',
    metaDesc: 'Rellena tu pantalla de amarillo para detectar tonalidades y defectos de subpíxeles.',
  },
  'pink-screen': {
    name: 'Pantalla rosa',
    shortDescription: 'Usa un panel rosa para detectar tonalidades y defectos de subpíxeles.',
    metaTitle: 'Pantalla rosa: pantalla rosa completa en línea',
    metaDesc: 'Muestra un panel rosa sólido en pantalla completa para detectar tonalidades y defectos de subpíxeles.',
  },
  'fullscreen-colour-cycle': {
    name: 'Ciclo de colores en pantalla completa',
    shortDescription: 'Cambia automáticamente entre varios colores sólidos en pantalla completa.',
    metaTitle: 'Ciclo de colores en pantalla completa: prueba de color en línea',
    metaDesc: 'Cambia automáticamente entre múltiples colores sólidos en pantalla completa para detectar defectos de pantalla.',
  },
  'gradient-banding-test': {
    name: 'Prueba de bandas en gradiente',
    shortDescription: 'Gradientes suaves que revelan bandas de color y compresión de tonos en tu pantalla.',
    metaTitle: 'Prueba de bandas en gradiente: prueba de monitor gratuita',
    metaDesc: 'Muestra gradientes de color suaves para comprobar si tu monitor tiene bandas de color o compresión de tonos.',
  },
  'backlight-bleed-test': {
    name: 'Prueba de sangrado de luz de fondo',
    shortDescription: 'Usa un panel negro en una habitación oscura para revelar el sangrado de luz alrededor de los bordes de la pantalla.',
    metaTitle: 'Prueba de sangrado de luz de fondo: comprobación de monitor gratuita',
    metaDesc: 'Prueba tu monitor en busca de sangrado de luz de fondo con esta herramienta gratuita.',
  },
  'ips-glow-test': {
    name: 'Prueba de brillo IPS',
    shortDescription: 'Distingue el brillo IPS del sangrado de luz de fondo usando patrones de prueba oscuros.',
    metaTitle: 'Prueba de brillo IPS: comprueba tu monitor en línea',
    metaDesc: 'Usa esta prueba en línea para diferenciar el brillo IPS del sangrado de luz de fondo.',
  },
  'contrast-black-level-test': {
    name: 'Prueba de contraste y nivel de negro',
    shortDescription: 'Patrones de pasos en negro para comprobar el detalle en sombras y la separación del nivel de negro.',
    metaTitle: 'Prueba de nivel de negro: comprobación de contraste del monitor',
    metaDesc: 'Comprueba el nivel de negro y el detalle en sombras de tu monitor con esta herramienta gratuita.',
  },
  'white-saturation-test': {
    name: 'Prueba de saturación de blanco',
    shortDescription: 'Patrones de pasos en blanco para comprobar el detalle en luces y la separación del nivel de blanco.',
    metaTitle: 'Prueba de saturación de blanco: comprobación de luces del monitor',
    metaDesc: 'Comprueba la saturación de blanco y el detalle en luces de tu monitor.',
  },
  'gamma-calibration-check': {
    name: 'Comprobación de calibración de gamma',
    shortDescription: 'Patrones de gamma para estimar la precisión del gamma de tu pantalla sin hardware adicional.',
    metaTitle: 'Prueba de gamma en línea: comprobación de calibración de monitor',
    metaDesc: 'Comprueba la precisión del gamma de tu monitor usando patrones de prueba de gamma estándar.',
  },
  'sharpness-focus-chart': {
    name: 'Gráfico de nitidez y enfoque',
    shortDescription: 'Líneas finas y patrones de texto para revelar suavidad, sobrenitidez o problemas de escalado.',
    metaTitle: 'Prueba de nitidez del monitor: gráfico de enfoque en línea',
    metaDesc: 'Prueba la nitidez y el enfoque de tu monitor usando patrones de líneas finas.',
  },
  'moire-pattern-test': {
    name: 'Prueba de patrón moiré',
    shortDescription: 'Patrones de líneas para revelar moiré, aliasing o artefactos de escalado de píxeles.',
    metaTitle: 'Prueba de patrón moiré: comprobación de artefactos de pantalla',
    metaDesc: 'Detecta patrones moiré, aliasing y artefactos de escalado de píxeles en tu pantalla.',
  },
  'screen-uniformity-test': {
    name: 'Prueba de uniformidad de pantalla',
    shortDescription: 'Detecta el efecto de pantalla sucia y el brillo irregular en tu monitor.',
    metaTitle: 'Prueba de uniformidad de pantalla: comprobación DSE en línea',
    metaDesc: 'Comprueba tu monitor en busca del efecto de pantalla sucia y brillo irregular.',
  },
  'viewing-angle-test': {
    name: 'Prueba de ángulo de visión',
    shortDescription: 'Patrones que facilitan detectar los cambios de color y contraste a diferentes ángulos.',
    metaTitle: 'Prueba de ángulo de visión: comprobación del panel del monitor',
    metaDesc: 'Comprueba los ángulos de visión de tu monitor usando patrones de prueba.',
  },
  'refresh-rate-checker': {
    name: 'Comprobador de frecuencia de actualización',
    shortDescription: 'Lee y muestra la frecuencia de actualización real que detecta tu navegador.',
    metaTitle: 'Comprobador de frecuencia de actualización: prueba los Hz de tu monitor',
    metaDesc: 'Comprueba la frecuencia de actualización real de tu monitor directamente en el navegador.',
  },
  'resolution-checker': {
    name: 'Comprobador de resolución y relación de aspecto',
    shortDescription: 'Informa sobre la resolución de tu pantalla, la relación de aspecto y la densidad de píxeles.',
    metaTitle: 'Comprobador de resolución de pantalla: comprueba la resolución del monitor',
    metaDesc: 'Comprueba al instante la resolución de tu pantalla, la relación de aspecto y la densidad de píxeles.',
  },
  'image-retention-test': {
    name: 'Prueba de retención de imagen',
    shortDescription: 'Comprueba si hay retención de imagen o quemado en tu pantalla OLED o LCD.',
    metaTitle: 'Prueba de retención de imagen: comprobación de quemado en línea',
    metaDesc: 'Prueba tu monitor OLED o LCD en busca de retención de imagen y quemado de pantalla.',
  },
  'screen-clean-mode': {
    name: 'Modo limpieza de pantalla',
    shortDescription: 'Bloquea tu pantalla en un panel liso para que puedas limpiarla con seguridad.',
    metaTitle: 'Modo limpieza de pantalla: herramienta segura para limpiar el monitor',
    metaDesc: 'Bloquea tu monitor en un panel liso para limpiarlo de forma segura.',
  },
  'motion-blur-test': {
    name: 'Prueba de desenfoque de movimiento',
    shortDescription: 'Una barra en movimiento que revela el fantasmeo, el smearing y el tiempo de respuesta de los píxeles.',
    metaTitle: 'Prueba de desenfoque de movimiento: comprueba el fantasmeo del monitor',
    metaDesc: 'Prueba tu monitor en busca de desenfoque de movimiento, fantasmeo y tiempo de respuesta de píxeles.',
  },
  'input-lag-test': {
    name: 'Prueba de retardo de entrada',
    shortDescription: 'Mide tu tiempo de reacción visual y estima el retardo de entrada del monitor con una prueba de clic.',
    metaTitle: 'Prueba de retardo de entrada: comprobación del tiempo de reacción',
    metaDesc: 'Prueba el retardo de entrada y el tiempo de reacción haciendo clic lo más rápido posible.',
  },
  'pwm-flicker-test': {
    name: 'Prueba de parpadeo PWM',
    shortDescription: 'Visualiza el parpadeo PWM de la retroiluminación y compara paneles parpadeantes con los estables.',
    metaTitle: 'Prueba de parpadeo PWM: comprobación del parpadeo de retroiluminación',
    metaDesc: 'Detecta el parpadeo PWM de la retroiluminación en tu monitor.',
  },
  'colour-temperature-test': {
    name: 'Prueba de temperatura de color',
    shortDescription: 'Identifica la tonalidad de color de tu pantalla encontrando qué blanco te parece neutro.',
    metaTitle: 'Prueba de temperatura de color: comprobación del balance de blancos',
    metaDesc: 'Comprueba la temperatura de color y el balance de blancos de tu monitor.',
  },
  'black-smear-test': {
    name: 'Prueba de mancha negra',
    shortDescription: 'Objetos oscuros lentos sobre fondo oscuro para revelar el fantasmeo oscuro-oscuro de los paneles VA.',
    metaTitle: 'Prueba de mancha negra: comprobación de fantasmeo en paneles VA',
    metaDesc: 'Prueba tu monitor VA en busca de mancha negra y fantasmeo oscuro-oscuro.',
  },
  'overdrive-test': {
    name: 'Prueba de sobreimpulso',
    shortDescription: 'Barras de alta velocidad para revelar el fantasmeo inverso y el halo producidos por el sobreimpulso del monitor.',
    metaTitle: 'Prueba de sobreimpulso: comprobación de fantasmeo inverso en línea',
    metaDesc: 'Prueba el sobreimpulso de tu monitor en busca de fantasmeo inverso, coronas y halos.',
  },
  'hdr-test': {
    name: 'Prueba HDR',
    shortDescription: 'Detecta la compatibilidad del navegador con HDR y la gama de color amplia, y evalúa el rango de brillo máximo.',
    metaTitle: 'Prueba de monitor HDR: comprueba la compatibilidad HDR en línea',
    metaDesc: 'Comprueba si tu monitor y navegador son compatibles con HDR.',
  },
}

export const categoryTranslations: Record<string, { label: string; description: string }> = {
  'screen-state': {
    label: 'Estado de pantalla',
    description: 'Paneles de color sólido en pantalla completa para inspección de píxeles, limpieza y comprobaciones de retroiluminación.',
  },
  'visual-test': {
    label: 'Pruebas visuales',
    description: 'Patrones de diagnóstico para detectar píxeles muertos, bandas, sangrado, gamma, nitidez y más.',
  },
  'checker': {
    label: 'Comprobadores y utilidades',
    description: 'Herramientas basadas en el navegador que leen y muestran las propiedades de tu pantalla.',
  },
}
