import type { FC } from 'react'

// ─── 1. Píxeles muertos ───────────────────────────────────────────────────────

function DeadPixelPostES() {
  return (
    <>
      <p>
        Los píxeles muertos son uno de los defectos de pantalla más comunes, y detectarlos a
        tiempo es importante porque muchas garantías de monitor tienen una política de defectos
        de píxeles con un plazo desde la compra. Unos minutos de prueba con paneles de colores
        sólidos en pantalla completa pueden revelar problemas que son invisibles durante el uso
        normal del ordenador.
      </p>

      <h2 className="text-lg font-bold text-fg">Tipos de defectos de píxeles</h2>
      <p>
        No todos los defectos de píxeles son iguales. Un <strong className="text-fg">píxel muerto</strong> es
        aquel que no recibe ninguna señal y permanece apagado de forma permanente, apareciendo como
        un punto negro sobre cualquier color de fondo. Un <strong className="text-fg">píxel atascado</strong> es
        aquel cuyos subpíxeles están bloqueados al máximo brillo, apareciendo como un punto brillante
        persistente en rojo, verde, azul o blanco. Un <strong className="text-fg">píxel caliente</strong> se
        comporta como un píxel atascado, pero siempre muestra blanco independientemente de la señal.
        Los píxeles muertos no suelen poder repararse; los píxeles atascados a veces pueden liberarse
        con el ciclo rápido de colores.
      </p>

      <h2 className="text-lg font-bold text-fg">Cómo realizar la prueba</h2>
      <p>
        El método más eficaz consiste en llenar toda la pantalla con un único color sólido en modo
        de pantalla completa y examinar cada zona del panel de forma metódica. Hay que probar como
        mínimo cinco colores: blanco, negro, rojo, verde y azul. El blanco revela los píxeles
        muertos (puntos negros). El negro revela los píxeles atascados o calientes (puntos brillantes).
        El rojo, el verde y el azul revelan defectos de subpíxeles que pueden no ser visibles
        únicamente con el blanco o el negro.
      </p>
      <p>
        Utiliza la herramienta de prueba de píxeles muertos de este sitio para un ciclo estructurado
        por todos los colores de prueba. Activa la pantalla completa y desplaza la vista lentamente
        por toda la pantalla, de una esquina a la otra. Tómate tu tiempo con cada color. Los defectos
        son pequeños y fáciles de pasar por alto a primera vista, especialmente en pantallas de alta
        resolución donde los píxeles individuales son muy pequeños.
      </p>

      <h2 className="text-lg font-bold text-fg">Iluminación y distancia</h2>
      <p>
        Reduce la iluminación ambiental de la habitación antes de realizar la prueba. El sangrado
        de luz de fondo y el deslumbramiento de las luces del techo pueden enmascarar defectos
        sutiles de píxeles. Siéntate a tu distancia de visión habitual y evita inclinar la pantalla
        o verla desde ángulos extremos, lo que también puede ocultar defectos o crear apariencias
        falsas. Si observas lo que parece un píxel atascado, pruébalo con varios colores sólidos
        antes de concluir que es un defecto y no polvo sobre la superficie de la pantalla.
      </p>

      <h2 className="text-lg font-bold text-fg">Garantía y devoluciones</h2>
      <p>
        La mayoría de los fabricantes de monitores utilizan la norma ISO 13406-2 o similar para
        clasificar los defectos de píxeles aceptables. Según estas normas, un pequeño número de
        píxeles defectuosos está permitido incluso en monitores nuevos. El umbral aceptable varía
        según la clase y el fabricante. Si encuentras un defecto, comprueba la documentación de
        tu garantía de inmediato. Muchos distribuidores tienen un plazo de devolución estricto,
        a veces de tan solo siete a catorce días, para reclamaciones por defectos de píxeles en
        monitores nuevos.
      </p>
      <p>
        Documenta tus hallazgos con fotografías tomadas en el ángulo correcto antes de ponerte en
        contacto con el distribuidor o fabricante. Una foto tomada directamente frente a la
        superficie del panel en una habitación con poca luz es la más útil a efectos de garantía.
      </p>

      <h2 className="text-lg font-bold text-fg">Prueba de un monitor ya en uso</h2>
      <p>
        Las pruebas de píxeles no son útiles únicamente en monitores nuevos. Si notas un punto
        inusual durante el uso normal, una prueba completa de píxeles muertos confirma si se trata
        de un defecto de píxel, polvo en la pantalla o un artefacto de software. Realizar la prueba
        periódicamente también es útil antes de vender un monitor de segunda mano, ya que aporta
        confianza al comprador sobre el estado del panel.
      </p>

      <h2 className="text-lg font-bold text-fg">Píxeles muertos en portátiles y pantallas de teléfono</h2>
      <p>
        La misma prueba de colores en pantalla completa se aplica a las pantallas de portátil,
        teléfonos inteligentes y tabletas. En las pantallas de portátil, vale la pena comprobar
        los píxeles muertos inmediatamente después de la compra, ya que la mayoría de los
        fabricantes aplican las mismas políticas de tolerancia de defectos ISO que en los monitores
        de escritorio. Un defecto no notificado dentro del plazo de devolución raramente queda
        cubierto después. Los píxeles muertos en la pantalla de un portátil no se extienden a
        los píxeles vecinos con el tiempo; cada píxel falla de forma independiente, por lo que
        el recuento no es probable que aumente a menos que haya daño físico en el panel.
      </p>
      <p>
        En iPhones, teléfonos Android y tabletas, los píxeles muertos y atascados ocurren por las
        mismas razones físicas que en las pantallas de escritorio. Las pantallas AMOLED utilizadas
        en muchos dispositivos Samsung Galaxy y Android son especialmente fáciles de probar, ya que
        cada píxel produce su propia luz, lo que hace que un píxel muerto o atascado en una pantalla
        móvil sea inmediatamente visible sobre un fondo brillante. Si notas un píxel muerto en la
        pantalla de un teléfono, confírmalo en al menos tres colores sólidos antes de concluir que
        es un defecto, ya que el polvo o la suciedad debajo de un protector de pantalla puede verse
        muy similar. Comprueba los términos de la garantía del fabricante en cuanto encuentres un
        defecto y documéntalo con una foto frontal en una habitación con poca luz.
      </p>
    </>
  )
}

// ─── 2. Sangrado de luz de fondo ─────────────────────────────────────────────

function BacklightBleedPostES() {
  return (
    <>
      <p>
        El sangrado de luz de fondo es uno de los defectos de monitor más buscados, y también uno
        de los más malentendidos. Cierto grado de sangrado de luz de fondo está presente en prácticamente
        todos los monitores LCD. La pregunta no es si existe, sino si es lo suficientemente grave como
        para afectar al uso real de la pantalla.
      </p>

      <h2 className="text-lg font-bold text-fg">Qué causa el sangrado de luz de fondo</h2>
      <p>
        Los paneles LCD funcionan haciendo pasar una luz de fondo a través de una capa de cristal
        líquido que controla cuánta luz pasa. La retroiluminación en sí es una fuente uniforme detrás
        del panel, y la capa LCD actúa como mecanismo de control. Debido a que el chasis de retroiluminación
        y los bordes del panel son físicamente imprecisos con las tolerancias de fabricación, la luz
        se filtra por los bordes donde el marco del monitor se une al panel. Este es el sangrado de
        luz de fondo: luz que elude el bloqueo previsto y atraviesa el panel incluso cuando la capa
        LCD intenta mostrar negro.
      </p>

      <h2 className="text-lg font-bold text-fg">Brillo IPS frente a sangrado de luz de fondo</h2>
      <p>
        El sangrado de luz de fondo a veces se confunde con el brillo IPS, pero son fenómenos
        diferentes. El sangrado de luz de fondo es un defecto de borde causado por la fuga de luz
        en los bordes del panel. Aparece como manchas brillantes cerca de las esquinas y los bordes
        de la pantalla al mostrar contenido negro. El brillo IPS es una característica inherente de
        la tecnología de panel IPS donde la sensibilidad al ángulo de visión de la capa de cristal
        líquido provoca un brillo nebuloso, dorado o amarillento visible en posiciones de visión
        oblicua. El brillo IPS está presente en todos los paneles IPS en cierta medida y no es un
        defecto. El sangrado de luz de fondo es una variación de fabricación que va de insignificante
        a significativa.
      </p>

      <h2 className="text-lg font-bold text-fg">Cómo hacer la prueba de sangrado de luz de fondo</h2>
      <p>
        La prueba de sangrado de luz de fondo es sencilla pero requiere las condiciones adecuadas.
        Apaga todas las luces de la habitación y espera a que tus ojos se adapten a la poca luz
        ambiental. Abre la herramienta de prueba de sangrado de luz de fondo de este sitio y muestra
        un panel negro sólido en pantalla completa. Mira la pantalla de frente desde tu distancia
        de visión habitual sentado. Las manchas brillantes o las zonas que brillan cerca de los
        bordes y las esquinas visibles sobre el fondo negro sólido son sangrado de luz de fondo.
      </p>
      <p>
        Es importante no realizar la prueba con las luces encendidas, ya que los reflejos del techo
        y la luz ambiental mezclada con la pantalla darán resultados engañosos. Asegúrate también
        de que la pantalla esté limpia antes de realizar la prueba; las manchas pueden dispersar la
        luz y parecerse al sangrado.
      </p>

      <h2 className="text-lg font-bold text-fg">¿Es aceptable tu sangrado de luz de fondo?</h2>
      <p>
        Cierto sangrado es casi invisible en el uso real y solo es evidente en una habitación a
        oscuras durante una prueba específica. El sangrado grave que aparece durante las escenas
        oscuras de películas o juegos, o que es claramente visible desde tu distancia de visión
        normal con las luces encendidas, merece reclamarse en garantía.
      </p>
      <p>
        La prueba práctica es ver contenido cinematográfico oscuro en tu entorno de visión habitual.
        Si notas el sangrado durante el uso real, está afectando a tu experiencia. Si solo lo ves
        durante una prueba de pantalla negra en una habitación completamente oscura, es poco probable
        que afecte a tu uso diario.
      </p>

      <h2 className="text-lg font-bold text-fg">Paneles VA y OLED</h2>
      <p>
        Los paneles VA suelen tener menos sangrado de luz de fondo que los IPS debido a su mayor
        relación de contraste nativa y mejor bloqueo de luz al mostrar negro. Los paneles OLED no
        tienen retroiluminación en absoluto; cada píxel produce su propia luz y se apaga por completo
        al mostrar negro, por lo que el sangrado de luz de fondo es imposible en OLED. Si el sangrado
        de luz de fondo es una preocupación para tu uso, los paneles VA u OLED son la mejor opción.
      </p>

      <h2 className="text-lg font-bold text-fg">Sangrado de luz de fondo en portátiles</h2>
      <p>
        El sangrado de luz de fondo en portátiles es extremadamente común porque las pantallas de
        portátil usan paneles delgados con iluminación de borde y marcos ajustados que aumentan la
        probabilidad de fuga de luz en los bordes. Los modelos MacBook Pro, los portátiles gaming
        y los ultrabooks de gama baja muestran esto en distintos grados. El método de prueba es
        idéntico al de un monitor de escritorio: atenúa la habitación, muestra una imagen negra
        sólida en pantalla completa y escanea los bordes. Las pantallas de portátil también pueden
        mostrar la fuga de luz de forma más prominente cuando la tapa se abre en ciertos ángulos,
        ya que la presión del marco sobre el panel cambia con la posición de la bisagra. El término
        nublado de retroiluminación se refiere al mismo fenómeno donde la luz se acumula en parches
        irregulares por la superficie del panel en lugar de solo en los bordes.
      </p>
      <p>
        No existe una solución de software fiable para el sangrado de luz de fondo. Las sugerencias
        sobre apretar los tornillos del marco o aplicar presión en el borde del panel conllevan un
        riesgo real de romper la pantalla y anular la garantía. Si el sangrado es lo suficientemente
        grave como para afectar al uso en el mundo real, el camino correcto es una sustitución en
        garantía. El sangrado leve que solo aparece en un entorno de prueba a oscuras no suele estar
        cubierto por las políticas del fabricante.
      </p>
      <p>
        Un error común es creer que las pantallas OLED pueden desarrollar sangrado de luz de fondo.
        No pueden. Lo que la gente a veces describe como sangrado de pantalla OLED suele ser un
        envejecimiento irregular de los píxeles o la identificación errónea de un defecto completamente
        diferente. Dado que los píxeles OLED emiten su propia luz individualmente, no hay retroiluminación
        que pueda filtrarse.
      </p>
    </>
  )
}

// ─── 3. Frecuencia de actualización ──────────────────────────────────────────

function RefreshRatePostES() {
  return (
    <>
      <p>
        La frecuencia de actualización es una de las especificaciones más destacadas en el sector
        de los monitores, y también una de las más importantes en la práctica para ciertos usos.
        Comprender qué hace realmente la frecuencia de actualización y cómo verificar a qué
        frecuencia funciona tu monitor es esencial antes de gastar dinero en una actualización.
      </p>

      <h2 className="text-lg font-bold text-fg">Qué significa la frecuencia de actualización</h2>
      <p>
        La frecuencia de actualización, medida en Hercios (Hz), es el número de veces por segundo
        que tu monitor redibuja la imagen en pantalla. A 60 Hz, la pantalla se actualiza 60 veces
        por segundo. A 144 Hz, se actualiza 144 veces por segundo. Una frecuencia de actualización
        más alta significa que la pantalla puede mostrar más fotogramas únicos por segundo, lo que
        produce un movimiento más fluido en todo lo que se mueve: juegos, desplazamiento, vídeo,
        movimiento del cursor y animaciones.
      </p>
      <p>
        La frecuencia de actualización del monitor es una propiedad de hardware del panel. Sin
        embargo, para que el beneficio sea visible, tu ordenador también necesita producir fotogramas
        a esa frecuencia o por encima de ella. Un monitor de 144 Hz ejecutando un juego a 40 fotogramas
        por segundo no se ve diferente de uno de 60 Hz en términos de fluidez de movimiento, porque
        la GPU es el cuello de botella.
      </p>

      <h2 className="text-lg font-bold text-fg">Cómo comprobar tu frecuencia de actualización real</h2>
      <p>
        Tu monitor puede estar clasificado a 144 Hz pero funcionar realmente a 60 Hz debido a
        la configuración o las limitaciones del cable. El comprobador de frecuencia de actualización
        de este sitio mide la frecuencia de fotogramas real que usa tu navegador, lo que refleja
        la frecuencia de actualización operativa real, no el máximo del hardware.
      </p>
      <p>
        La razón más común por la que un monitor de alta frecuencia funciona a 60 Hz es una
        configuración incorrecta del sistema operativo. En Windows, haz clic derecho en el escritorio,
        selecciona Configuración de pantalla, luego Configuración avanzada de pantalla y comprueba
        el menú desplegable de frecuencia de actualización. En macOS, ve a Configuración del sistema
        y luego a Pantallas. Configura siempre esto al valor más alto que admita tu monitor.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitaciones de ancho de banda del cable</h2>
      <p>
        El cable que conecta tu monitor al ordenador también limita la frecuencia de actualización.
        HDMI 1.4, que viene con muchos monitores, no puede transportar 1920x1080 a 144 Hz ni 2560x1440
        a ninguna frecuencia de actualización alta. HDMI 2.0 admite 1440p a 144 Hz. DisplayPort 1.2
        admite 1440p a 165 Hz. DisplayPort 1.4 admite 4K a 144 Hz. Si tu monitor muestra 60 Hz a
        pesar de la configuración correcta del sistema operativo, prueba primero con un cable diferente.
      </p>

      <h2 className="text-lg font-bold text-fg">60 Hz vs 120 Hz vs 144 Hz en la práctica</h2>
      <p>
        El salto de 60 Hz a 120 Hz o 144 Hz es claramente perceptible para la mayoría de los usuarios,
        especialmente en la fluidez del movimiento del ratón y el movimiento en los juegos. El
        desplazamiento de texto y las animaciones de la interfaz se sienten notablemente más fluidos.
        La mayoría de los usuarios que usan un monitor de 144 Hz durante una semana informan de que
        volver a 60 Hz se nota visualmente entrecortado.
      </p>
      <p>
        El salto de 144 Hz a 240 Hz es menor en términos perceptuales, aunque los jugadores
        competitivos se benefician de la reducción de la latencia de pantalla. Superar los 240 Hz
        proporciona un beneficio adicional marginal para la mayoría de los usuarios. Para consumo
        de contenido y productividad general, 60 Hz es completamente funcional; 120 Hz o 144 Hz
        es una mejora significativa para juegos y desplazamiento rápido.
      </p>

      <h2 className="text-lg font-bold text-fg">Sincronización adaptativa: VSync, G-Sync, FreeSync</h2>
      <p>
        A una frecuencia de actualización fija, si tu GPU produce menos fotogramas que la frecuencia
        de actualización del monitor, es posible que veas desgarro de pantalla o tartamudeo. Las
        tecnologías de sincronización adaptativa (G-Sync de NVIDIA, FreeSync de AMD) ajustan
        dinámicamente la frecuencia de actualización del monitor para que coincida con la salida
        de la GPU dentro de un rango compatible, eliminando tanto el desgarro como la latencia de
        entrada del VSync tradicional. Si vas a comprar un monitor de alta frecuencia para gaming,
        vale la pena priorizar el soporte de sincronización adaptativa.
      </p>

      <h2 className="text-lg font-bold text-fg">Monitores CRT y altas frecuencias de actualización</h2>
      <p>
        Antes de que los paneles LCD se convirtieran en estándar, los monitores CRT funcionaban
        habitualmente a frecuencias de actualización muy superiores a 60 Hz. Dado que las pantallas
        CRT redibujaban la imagen escaneando físicamente un haz de electrones por una superficie de
        fósforo, el parpadeo era perceptible a bajas frecuencias. Esto impulsó los objetivos de Hz
        de los monitores CRT a 85 Hz, 100 Hz y más para un uso cómodo. Algunos monitores CRT gaming
        de alta gama admitían 144 Hz a resoluciones reducidas, lo que explica por qué ciertas
        comunidades de gaming competitivo usaban hardware CRT mucho después de que los paneles LCD
        se convirtieran en dominantes.
      </p>

      <h2 className="text-lg font-bold text-fg">Frecuencia de actualización en consolas</h2>
      <p>
        La frecuencia de actualización de las consolas depende tanto del hardware de la consola
        como de la pantalla a la que esté conectada. PlayStation 4 emite a 60 Hz para la mayoría
        de los títulos y no admite salida a 120 Hz. PlayStation 5 admite hasta 120 Hz para títulos
        compatibles, pero la configuración de Hz de PS5 debe habilitarse en la configuración del
        sistema de la consola y la pantalla debe aceptar HDMI 2.1. El Xbox Series X funciona igual:
        120 Hz requiere HDMI 2.1 tanto en la salida de la consola como en la entrada de la pantalla.
        La mayoría de los monitores gaming y televisores vendidos desde 2021 incluyen HDMI 2.1,
        pero las pantallas más antiguas están limitadas a 60 Hz independientemente de la
        configuración de la consola. Usa el comprobador de frecuencia de actualización de este
        sitio para confirmar a qué frecuencia funciona realmente tu pantalla tras conectar una consola.
      </p>
    </>
  )
}

// ─── 4. Píxeles atascados ─────────────────────────────────────────────────────

function StuckPixelsPostES() {
  return (
    <>
      <p>
        Los píxeles atascados son uno de los defectos de pantalla más frustrantes porque se
        sitúan justo en el límite entre lo que es y lo que no es reparable. Comprender el
        mecanismo que hay detrás de ellos ayuda a establecer expectativas realistas antes de
        intentar cualquier solución.
      </p>

      <h2 className="text-lg font-bold text-fg">Píxeles muertos frente a píxeles atascados</h2>
      <p>
        Los dos términos se usan a menudo indistintamente, pero se refieren a fallos diferentes.
        Un píxel muerto ha perdido su capacidad de recibir o responder a una señal. El transistor
        que lo controla ha fallado, dejándolo permanentemente apagado. Aparece como un punto negro
        sobre cualquier color de fondo y no puede repararse por ningún método de software.
      </p>
      <p>
        Un píxel atascado tiene un transistor funcional, pero uno o más de sus subpíxeles rojo,
        verde o azul están bloqueados en un estado fijo. El píxel recibe alimentación y señal,
        pero no responde correctamente. Los píxeles atascados aparecen como puntos de colores
        brillantes (rojo, verde, azul, blanco, cian, magenta o amarillo, según qué subpíxeles
        estén atascados) sobre cualquier fondo. Dado que el transistor subyacente es funcional,
        existe alguna posibilidad de que el estado atascado pueda interrumpirse.
      </p>

      <h2 className="text-lg font-bold text-fg">Por qué se atascan los píxeles</h2>
      <p>
        Los subpíxeles LCD están controlados por moléculas de cristal líquido que rotan en
        respuesta a un campo eléctrico. En un píxel atascado, el material de cristal líquido
        en un subpíxel se ha vuelto inmóvil, normalmente debido a la variación de fabricación,
        la presión física o la visualización prolongada de contenido estático. Las moléculas ya
        no rotan con la señal, por lo que el píxel permanece en un estado fijo.
      </p>

      <h2 className="text-lg font-bold text-fg">Cómo funciona el ciclo rápido de colores</h2>
      <p>
        La teoría detrás de los reparadores de píxeles atascados es que alternar rápidamente el
        voltaje aplicado a las moléculas de cristal líquido atascadas puede generar suficiente
        agitación para liberar las moléculas de su posición bloqueada y restaurar la capacidad
        de respuesta normal. La técnica consiste en ciclar entre rojo, verde, azul, blanco y
        negro a muy alta velocidad, normalmente varias veces por segundo, sobre la zona afectada.
      </p>
      <p>
        El reparador de píxeles atascados de este sitio hace exactamente eso. Posicionas una
        zona objetivo sobre el píxel atascado y ejecutas el ciclado durante un período de tiempo.
        Las duraciones recomendadas oscilan entre 10 minutos y varias horas para los píxeles
        persistentemente atascados. Algunos usuarios también informan de éxito con una presión
        suave aplicada a través de un paño suave, aunque esto conlleva el riesgo de crear marcas
        de presión en los paneles LCD y debe hacerse con precaución.
      </p>

      <h2 className="text-lg font-bold text-fg">Tasas de éxito y expectativas realistas</h2>
      <p>
        No hay datos fiables sobre la tasa de éxito de las técnicas de ciclado de píxeles atascados,
        ya que los resultados dependen en gran medida del modo de fallo específico, el tipo de panel
        y cuánto tiempo lleva atascado el píxel. De forma anecdótica, los píxeles que han estado
        atascados poco tiempo en paneles IPS responden con más frecuencia que los que llevan meses
        atascados en paneles más antiguos. Los píxeles muertos, como se ha descrito, no responderán
        a esta técnica.
      </p>
      <p>
        Si el ciclado no funciona después de varias horas, es probable que el píxel esté muerto en
        lugar de atascado, o que el modo de fallo específico no responda a esta técnica. En ese
        momento, el siguiente paso adecuado es una reclamación de garantía si el monitor sigue
        dentro del período de garantía.
      </p>

      <h2 className="text-lg font-bold text-fg">Retención de imagen y quemado</h2>
      <p>
        La retención de imagen es un problema relacionado pero distinto. Ocurre cuando una imagen
        estática mostrada durante un período prolongado deja un fantasma temporal en el panel. Esto
        es habitual en los paneles IPS y normalmente es temporal. El contenido estático prolongado
        puede causar quemado permanente en las pantallas OLED. La prueba de retención de imagen de
        este sitio ayuda a identificar si hay imágenes fantasma en tu panel.
      </p>

      <h2 className="text-lg font-bold text-fg">Píxeles atascados en teléfonos y tabletas</h2>
      <p>
        Los píxeles atascados ocurren en las pantallas de teléfonos y tabletas por las mismas
        razones que en los monitores de escritorio. Un píxel atascado en un iPhone aparece como
        un punto brillante persistente que no cambia de color con el fondo. Los píxeles atascados
        en un iPad, teléfono Android o pantalla AMOLED se comportan de forma idéntica. El enfoque
        de ciclo rápido de colores usado por los reparadores de píxeles atascados puede ayudar en
        las pantallas móviles, aunque es más difícil posicionar una región de ciclado con precisión
        en la pantalla de un teléfono en comparación con un monitor de escritorio.
      </p>
      <p>
        Las pantallas de teléfono OLED presentan una diferencia específica: dado que cada píxel
        produce su propia luz, un píxel atascado es visible incluso con bajo brillo, lo que
        facilita su confirmación. Si el ciclado no resuelve un píxel atascado en la pantalla de
        un MacBook Pro, un iPhone o un dispositivo Android después de varias horas, el siguiente
        paso adecuado es una reclamación de garantía. La mayoría de los fabricantes tratan los
        defectos persistentes de píxeles brillantes como fallos de hardware con derecho a reparación
        o sustitución dentro del período de garantía.
      </p>
    </>
  )
}

// ─── 5. Tipos de panel ────────────────────────────────────────────────────────

function PanelTypesPostES() {
  return (
    <>
      <p>
        La tecnología del panel de un monitor afecta a casi todas las características visuales:
        contraste, precisión del color, ángulo de visión, tiempo de respuesta y precio. Comprender
        las diferencias prácticas te ayuda a elegir el monitor adecuado para tu caso de uso e
        interpretar los resultados de tus pruebas con precisión.
      </p>

      <h2 className="text-lg font-bold text-fg">Paneles IPS</h2>
      <p>
        Los paneles IPS (In-Plane Switching, conmutación en plano) alinean los cristales líquidos
        horizontalmente, lo que produce amplios ángulos de visión con reproducción de color
        consistente al verlos desde el lateral. Los paneles IPS ofrecen típicamente el color más
        preciso de los tipos de panel LCD, por lo que son la elección estándar para la edición
        fotográfica, el diseño gráfico y el trabajo profesional con color.
      </p>
      <p>
        La contrapartida es que los paneles IPS tienen una relación de contraste nativa inferior
        a los paneles VA, típicamente 1000:1, y son susceptibles al brillo IPS: un brillo nebuloso
        de tono dorado visible cerca de las esquinas al ver contenido oscuro en ángulos oblicuos.
        El sangrado de luz de fondo también es más notorio en IPS que en VA. Los paneles IPS
        modernos han eliminado en gran medida los tiempos de respuesta más lentos que eran una
        limitación anterior.
      </p>

      <h2 className="text-lg font-bold text-fg">Paneles VA</h2>
      <p>
        Los paneles VA (Vertical Alignment, alineación vertical) utilizan cristales líquidos
        alineados verticalmente que proporcionan relaciones de contraste nativas mucho más altas
        que IPS, típicamente de 3000:1 a 6000:1. Esto hace que los paneles VA sean significativamente
        mejores para mostrar negros profundos, especialmente en gaming en habitación oscura y uso
        de home cinema. Las escenas oscuras en películas y juegos se ven notablemente más inmersivas
        en un panel VA que en IPS.
      </p>
      <p>
        Los paneles VA tienen su propio defecto característico: la mancha negra. Los objetos oscuros
        que se mueven rápido dejan una mancha o estela visible en los paneles VA debido al tiempo de
        respuesta más lento de la capa de cristal líquido al transitar entre estados oscuros. Esto
        es más visible en juegos de ritmo rápido que en el uso típico del escritorio. Los paneles
        VA también tienen ángulos de visión más estrechos que los IPS.
      </p>

      <h2 className="text-lg font-bold text-fg">Paneles OLED</h2>
      <p>
        Los paneles OLED (Organic Light-Emitting Diode, diodo orgánico emisor de luz) producen su
        propia luz por píxel, eliminando por completo la retroiluminación. Cada píxel puede apagarse
        completamente al mostrar negro, produciendo una relación de contraste real teóricamente
        infinita. Los paneles OLED tienen una precisión de color sobresaliente, amplios ángulos de
        visión y tiempos de respuesta extremadamente rápidos sin manchas.
      </p>
      <p>
        La principal desventaja es el riesgo de quemado permanente por contenido estático mostrado
        durante períodos prolongados. Los monitores OLED son más adecuados para contenido variado
        que para cargas de trabajo con elementos de interfaz persistentes como la barra de tareas
        del escritorio. Los paneles OLED también son más caros y, en tamaños de monitor, relativamente
        nuevos en el mercado. Dado que los píxeles OLED emiten su propia luz, las pruebas de sangrado
        de luz de fondo y brillo IPS que se aplican a los paneles LCD no son relevantes para OLED.
      </p>

      <h2 className="text-lg font-bold text-fg">Quemado en OLED: qué lo causa y cómo reducir el riesgo</h2>
      <p>
        El quemado en OLED ocurre cuando píxeles específicos se iluminan a gran brillo durante
        períodos prolongados, haciendo que el material orgánico emisor de luz se degrade más rápido
        que los píxeles circundantes. Esto produce un fantasma permanente tenue del elemento estático.
        Varios patrones específicos causan esto en el uso real. El quemado de subtítulos aparece en
        televisores y monitores OLED tras miles de horas de contenido subtitulado. El quemado de
        bandas negras proviene de las barras negras en contenido no panorámico. El quemado de logo
        lo causan los logotipos persistentes de canales o elementos HUD estáticos en los juegos.
      </p>
      <p>
        Prevenir el quemado en OLED implica gestionar cómo se muestra el contenido estático. Activa
        el desplazamiento de píxeles y la reducción de luminancia de logos en la configuración de
        pantalla si estas funciones están disponibles. Mantén el brillo máximo por debajo del máximo
        para el uso diario, ya que un brillo más bajo ralentiza la degradación del material orgánico.
        Evita dejar imágenes estáticas en pantalla cuando la pantalla esté desatendida. Las pantallas
        QLED, que son paneles LCD con mejora de color de punto cuántico en lugar de OLED verdadero,
        no tienen el mismo riesgo de quemado. La prueba de retención de imagen de este sitio puede
        ayudar a identificar la retención de imagen en una fase temprana antes de que progrese a un
        quemado permanente.
      </p>

      <h2 className="text-lg font-bold text-fg">Qué tipo de panel elegir</h2>
      <p>
        Para trabajo con color preciso, IPS sigue siendo el estándar profesional. Para gaming en
        habitación oscura y cine, los paneles VA ofrecen el mejor contraste sin el riesgo de quemado
        del OLED. Para el gaming de mayor rendimiento con la mejor calidad visual y cuando el precio
        no es un impedimento, el OLED proporciona la mejor combinación de tiempo de respuesta,
        contraste y color. Para trabajo de oficina general y productividad, cualquier tipo de panel
        es adecuado al precio correspondiente.
      </p>
    </>
  )
}

// ─── 6. Resolución y DPI ─────────────────────────────────────────────────────

function ResolutionPostES() {
  return (
    <>
      <p>
        La resolución, la densidad de píxeles y el escalado se confunden con frecuencia entre sí.
        La misma resolución puede verse completamente diferente en dos monitores distintos, y una
        resolución más baja puede verse más nítida que una más alta dependiendo del tamaño del panel.
        Comprender cómo interactúan estos factores te ayuda a interpretar lo que informa el comprobador
        de resolución.
      </p>

      <h2 className="text-lg font-bold text-fg">Resolución de pantalla: píxeles CSS</h2>
      <p>
        Cuando miras la configuración de pantalla de tu sistema operativo o navegador, la resolución
        que se muestra se expresa en píxeles lógicos o CSS. Este es el espacio de coordenadas que
        usan tus aplicaciones. En una pantalla estándar, un píxel CSS corresponde a un píxel de
        hardware físico en el panel. En una pantalla HiDPI o Retina, el sistema operativo escala
        la interfaz para que un píxel CSS corresponda a dos o más píxeles físicos.
      </p>
      <p>
        Este escalado existe para que los elementos de la interfaz permanezcan a un tamaño físico
        cómodo en paneles de alta densidad. Sin él, un monitor 4K en un portátil de 15 pulgadas
        mostraría texto e iconos a una fracción de su tamaño normal y sería inutilizable. El
        comprobador de resolución muestra tanto la resolución en píxeles CSS como el recuento de
        píxeles físicos derivado de la relación de píxeles del dispositivo.
      </p>

      <h2 className="text-lg font-bold text-fg">Relación de píxeles del dispositivo (DPR)</h2>
      <p>
        La relación de píxeles del dispositivo es el multiplicador entre los píxeles CSS y los
        píxeles físicos. Un DPR de 1 significa densidad estándar: un píxel CSS por píxel físico.
        Un DPR de 2 significa que cada píxel CSS está respaldado por una cuadrícula de 2x2 píxeles
        físicos, que es el estándar Retina en las pantallas de Apple. Un DPR de 1,5 o 1,25 es
        común en los portátiles Windows donde el sistema operativo aplica escalado fraccionado.
      </p>
      <p>
        El DPR afecta a cómo se muestran las imágenes y los gráficos web. Las imágenes servidas
        sin una versión de alto DPR aparecen borrosas en las pantallas Retina. Las imágenes
        correctamente responsivas y los gráficos vectoriales permanecen nítidos con cualquier DPR.
        Los desarrolladores web usan el DPR para determinar qué resolución de imagen servir a
        cada dispositivo.
      </p>

      <h2 className="text-lg font-bold text-fg">Píxeles por pulgada y nitidez percibida</h2>
      <p>
        Los píxeles por pulgada (PPI) miden cuántos píxeles caben en una pulgada de la superficie
        del panel. Un PPI más alto significa píxeles individuales más pequeños y, por tanto, más
        detalle. Un panel de 1920x1080 a 24 pulgadas tiene aproximadamente 92 PPI. La misma
        resolución a 27 pulgadas tiene aproximadamente 82 PPI. Un panel de 2560x1440 a 27 pulgadas
        tiene aproximadamente 109 PPI.
      </p>
      <p>
        Para monitores de escritorio vistos a la distancia típica de un brazo (60 a 80 cm),
        aproximadamente 95 a 110 PPI es el punto en el que los píxeles individuales se vuelven
        difíciles de distinguir en condiciones de visión normales. Por encima de 140 PPI, la densidad
        adicional aporta poco beneficio visible a distancias de visión normales.
      </p>

      <h2 className="text-lg font-bold text-fg">Resolución nativa y escalado</h2>
      <p>
        Cada panel tiene una resolución nativa, que es el recuento de píxeles físicos con el que
        fue fabricado. Ejecutar una pantalla a su resolución nativa produce la imagen más nítida.
        Ejecutar a una resolución más baja, o a una resolución escalada mediante la configuración
        de DPI del sistema operativo, aplica interpolación que puede reducir la nitidez. Para la
        mejor calidad de imagen, ejecuta siempre tu monitor a su resolución nativa y usa el escalado
        del sistema operativo para el tamaño de la interfaz.
      </p>

      <h2 className="text-lg font-bold text-fg">Nombres de resolución comunes y qué significan</h2>
      <p>
        Los nombres de resolución de pantalla se usan de forma inconsistente en los materiales de
        marketing. Full HD (FHD) se refiere a 1920x1080 y es la resolución más común para monitores,
        portátiles y televisores en todo el mundo. Quad HD (QHD), también etiquetado como 2K en
        muchos listados de productos, se refiere a 2560x1440, que proporciona un detalle notablemente
        más nítido a 27 pulgadas sin requerir la elevada carga de GPU del 4K. 4K UHD se refiere a
        3840x2160. WUXGA se refiere a 1920x1200, una relación 16:10 que proporciona más espacio
        vertical de pantalla que FHD y es común en portátiles de empresa y monitores profesionales.
      </p>
      <p>
        La resolución del monitor gaming implica una compensación entre el detalle visual y la
        frecuencia de fotogramas alcanzable. A 1080p, una GPU de gama media puede mantener 144 Hz
        o más con mucha más facilidad que a 1440p o 4K. Muchos jugadores competitivos prefieren
        1080p a alta frecuencia de actualización sobre paneles de mayor resolución a menor frecuencia
        de fotogramas, ya que la claridad de movimiento importa más que la densidad de píxeles en
        los juegos rápidos.
      </p>
    </>
  )
}

// ─── 7. Gamma ─────────────────────────────────────────────────────────────────

function GammaPostES() {
  return (
    <>
      <p>
        El gamma es una de las propiedades fundamentales de la calibración de pantalla y una de
        las más frecuentemente malentendidas. Un gamma incorrecto hace que las imágenes parezcan
        planas y lavadas, o excesivamente oscuras con detalles perdidos en las sombras. Probar el
        gamma de tu monitor no requiere hardware de calibración costoso.
      </p>

      <h2 className="text-lg font-bold text-fg">Qué es el gamma</h2>
      <p>
        El gamma describe la relación entre el valor numérico de un píxel en un archivo de imagen
        y el brillo que produce la pantalla para ese píxel. Se expresa como un exponente en una
        curva de potencia. Un gamma de 2,2 significa que un valor de píxel de 128 (a mitad de
        camino entre 0 y 255) debería producir aproximadamente el 22% del brillo máximo de la
        pantalla, no el 50%. Esta curva no lineal imita cómo la visión humana percibe las
        diferencias de brillo.
      </p>
      <p>
        El estándar de color sRGB, que rige la mayoría de los monitores de consumo y la mayoría
        de las imágenes digitales, apunta a un gamma general de aproximadamente 2,2. Las pantallas
        profesionales a veces se configuran a 2,4 para trabajo de cine y difusión. Una pantalla
        con gamma 1,8 parecerá lavada y excesivamente brillante. Una pantalla con gamma 2,6
        parecerá demasiado oscura con detalles perdidos en las sombras.
      </p>

      <h2 className="text-lg font-bold text-fg">Cómo probar el gamma sin hardware</h2>
      <p>
        La comprobación de calibración de gamma de este sitio usa una técnica llamada tramado de
        tablero de ajedrez. Un patrón de tablero de ajedrez blanco y negro al 50%, visto desde
        cierta distancia, aparece como un tono gris medio uniforme. El brillo de ese gris aparente
        corresponde a lo que hace la pantalla al nivel del 50% del tablero. Colocando una muestra
        de gris sólido de referencia junto al patrón tramado, puedes comparar si tu pantalla está
        renderizando el tono medio correctamente para un objetivo de gamma dado.
      </p>
      <p>
        La herramienta proporciona cuatro grises de referencia correspondientes a valores de gamma
        de 1,8, 2,0, 2,2 y 2,4. La muestra de gris que más se acerque al brillo aparente del
        patrón de tablero indica el ajuste de gamma aproximado de tu monitor.
      </p>

      <h2 className="text-lg font-bold text-fg">Corrección del gamma</h2>
      <p>
        Si el gamma de tu monitor parece demasiado alto o demasiado bajo, el primer paso es
        comprobar el menú de visualización en pantalla del propio monitor. Muchos monitores
        incluyen una configuración de gamma directamente en sus controles de imagen, a menudo
        preconfigurado en 1,8, 2,0, 2,2 o 2,4. Configúralo a 2,2 para trabajo sRGB estándar.
        Si tu monitor no tiene control de gamma, la herramienta de calibración de pantalla de tu
        sistema operativo (Calibrar color de pantalla en Windows, o Asistente de calibración de
        pantalla en macOS) puede aplicar una corrección de gamma por software a través de la
        tarjeta de vídeo.
      </p>

      <h2 className="text-lg font-bold text-fg">Gamma y bandas en gradiente</h2>
      <p>
        Un gamma incorrecto puede agravar las bandas en gradiente, donde una transición tonal
        suave en una imagen muestra pasos visibles en lugar de una gradación suave. La prueba
        de bandas en gradiente de este sitio revela con qué eficacia maneja tu pantalla los
        gradientes lineales suaves. Las bandas significativas en una pantalla correctamente
        configurada de otro modo pueden indicar que el panel del monitor tiene profundidad
        tonal limitada en ciertas regiones tonales.
      </p>
    </>
  )
}

// ─── 8. Uniformidad de pantalla ───────────────────────────────────────────────

function UniformityPostES() {
  return (
    <>
      <p>
        La uniformidad de pantalla describe con qué consistencia un monitor reproduce el mismo
        color y nivel de brillo en toda la superficie del panel. Una uniformidad perfecta significa
        que un campo gris sólido se ve idéntico desde la esquina superior izquierda hasta la
        inferior derecha. En la práctica, todos los monitores tienen cierto grado de no uniformidad;
        la pregunta es qué tan significativa es para tu caso de uso.
      </p>

      <h2 className="text-lg font-bold text-fg">Qué causa los problemas de uniformidad</h2>
      <p>
        En los monitores LCD, la no uniformidad tiene dos fuentes principales. La primera es la
        no uniformidad de la retroiluminación: los paneles con iluminación de borde usan LED
        posicionados en los bordes del panel, y la luz se difunde por la superficie del panel.
        Esto produce variaciones sutiles de brillo, típicamente más brillante en los bordes donde
        están los LED. Los paneles con retroiluminación de matriz completa y atenuación local tienen
        mejor uniformidad porque los LED están distribuidos por toda la superficie trasera.
      </p>
      <p>
        La segunda fuente es el propio panel LCD. Las variaciones en la alineación del cristal
        líquido, la consistencia del recubrimiento polarizador y las tolerancias de fabricación
        del panel crean variaciones sutiles de color o brillo en la superficie del panel. Un campo
        gris puede parecer ligeramente más frío (con tono azul) en una esquina y más cálido
        (amarillo o naranja) en otra. Esto se llama desviación delta E y se mide en las revisiones
        de pantallas profesionales usando equipos de colorimetría.
      </p>

      <h2 className="text-lg font-bold text-fg">Cómo probar la uniformidad de pantalla</h2>
      <p>
        La prueba de uniformidad de pantalla de este sitio muestra un panel gris sólido en pantalla
        completa en tres tonos de gris: gris oscuro, gris medio y gris claro. Viendo estos paneles
        en una habitación con poca luz, escanea la pantalla metódicamente. Busca áreas donde el
        brillo parezca mayor o menor que el área circundante, o donde el tono se desplace del gris
        neutro hacia el azul, el amarillo o el verde.
      </p>
      <p>
        La herramienta divide la pantalla en una cuadrícula de referencia de 3x3 para ayudarte a
        describir qué zona de la pantalla muestra variación. Esto es útil al documentar una
        reclamación de garantía. Ten en cuenta que los problemas de uniformidad son más fáciles de
        ver en el gris medio que en el gris oscuro o claro, porque el ojo es más sensible a las
        diferencias de luminancia en los tonos medios.
      </p>

      <h2 className="text-lg font-bold text-fg">Cuánta no uniformidad es aceptable</h2>
      <p>
        Para uso general de oficina y gaming, una variación leve de brillo en el panel que solo
        sea visible en campos de prueba de gris sólido es poco probable que afecte a tu experiencia
        durante el uso normal. Para fotografía, edición de vídeo o cualquier trabajo crítico con
        color, incluso una variación de uniformidad moderada es significativa porque significa que
        un color que parece correcto en un área del panel parecerá diferente en otra.
      </p>
      <p>
        Los monitores profesionales de ciertos fabricantes incluyen datos de calibración de
        uniformidad de panel individual, compensando las variaciones medidas. Para trabajo crítico
        con color, esta característica vale la pena priorizarla sobre una mayor resolución o
        frecuencia de actualización.
      </p>

      <h2 className="text-lg font-bold text-fg">Uniformidad y tamaño de pantalla</h2>
      <p>
        Los problemas de uniformidad escalan con el tamaño de la pantalla. Un monitor de 27 pulgadas
        o más tiene un camino de luz más largo desde el LED hasta el centro del panel, dando más
        oportunidad para la variación. Los paneles ultraanchos son especialmente difíciles de
        fabricar con una uniformidad consistente. Si estás comprando un monitor grande para trabajo
        crítico con color, los resultados de pruebas de uniformidad en revisiones profesionales son
        una especificación importante a investigar antes de comprar.
      </p>
    </>
  )
}

// ─── 9. Limpieza de pantalla ──────────────────────────────────────────────────

function CleaningPostES() {
  return (
    <>
      <p>
        La mayoría de las personas limpian mal la pantalla de su monitor, y el daño a menudo no
        es visible de inmediato. Los recubrimientos de los paneles de pantalla modernos son lo
        suficientemente duraderos para una limpieza regular, pero se dañan fácilmente con los
        materiales o la técnica incorrectos. Hacerlo bien no cuesta nada extra y preserva la
        calidad de imagen de tu monitor durante toda su vida útil.
      </p>

      <h2 className="text-lg font-bold text-fg">El único material que necesitas</h2>
      <p>
        Un paño de microfibra limpio y seco es todo lo que se necesita para la limpieza rutinaria
        del monitor. Los paños de microfibra usan fibras más finas que el cabello humano, lo que
        significa que levantan el polvo y los aceites de la superficie sin rayar ni manchar. Los
        mismos paños que se usan para las gafas son apropiados para los monitores. No uses toallas
        de papel, pañuelos, camisetas viejas de algodón ni ningún tejido áspero. Estos materiales
        contienen fibras abrasivas que rayarán permanentemente los recubrimientos antirreflectantes
        y antibrillo con el tiempo.
      </p>

      <h2 className="text-lg font-bold text-fg">Líquidos y disolventes que debes evitar</h2>
      <p>
        Nunca rocíes ningún líquido directamente sobre la pantalla de un monitor. El líquido que
        entre por el borde del marco puede penetrar en el conjunto del panel y causar daños internos
        permanentes. Si necesitas un líquido, aplica una cantidad muy pequeña de agua destilada al
        paño, no a la pantalla, y asegúrate de que el paño esté solo ligeramente húmedo antes de
        limpiar.
      </p>
      <p>
        Evita todo lo siguiente en cualquier panel de monitor: limpiacristales, spray multiusos
        doméstico, alcohol, amoníaco, acetona, lejía o cualquier producto comercializado para
        limpiar ventanas o superficies duras. Estos disolventes eliminan los recubrimientos del
        panel que proporcionan propiedades antibrillo y antirreflectantes, dejando la pantalla
        permanentemente turbia o con daños visibles.
      </p>

      <h2 className="text-lg font-bold text-fg">Uso del modo de limpieza de pantalla</h2>
      <p>
        La herramienta de modo de limpieza de pantalla de este sitio rellena tu pantalla con un
        panel blanco o negro sólido y bloquea la pantalla durante 15 segundos, evitando la entrada
        accidental de tu paño de limpieza en dispositivos con pantalla táctil. El blanco es el
        color de limpieza más útil porque hace que el polvo, las manchas y las huellas dactilares
        sean claramente visibles para que puedas identificar cada área que necesita atención.
        Después de limpiar, ver el panel en blanco confirma que has eliminado todas las marcas
        visibles.
      </p>

      <h2 className="text-lg font-bold text-fg">Consideraciones según el tipo de panel</h2>
      <p>
        Los paneles LCD e IPS tienen un recubrimiento de vidrio o plástico duro que es relativamente
        tolerante a la limpieza suave. Limpia con pasadas rectas horizontales o verticales con
        presión ligera. Los paneles OLED son físicamente más finos y frágiles que los paneles LCD.
        Usa menos presión en OLED y asegúrate de que el paño esté completamente libre de partículas
        que puedan rayar la superficie. Las pantallas de portátil y los monitores portátiles con
        recubrimientos brillantes se limpian más fácilmente con una sola pasada en seco. Los
        recubrimientos mate antibrillo tienen una superficie texturizada que puede atrapar manchas;
        aplica una presión ligeramente más firme con un paño seco trabajando en una dirección.
      </p>

      <h2 className="text-lg font-bold text-fg">Con qué frecuencia limpiar</h2>
      <p>
        Quita el polvo de la pantalla ligeramente con un paño de microfibra seco cuando se produzca
        acumulación visible, típicamente cada una o dos semanas en un entorno de oficina normal.
        Limpia las huellas dactilares y las manchas según sea necesario. Una limpieza ligera regular
        es mejor que una limpieza pesada poco frecuente, ya que evita que el aceite de las manchas
        se adhiera más firmemente a la superficie con el tiempo.
      </p>
    </>
  )
}

// ─── 10. Relaciones de aspecto ────────────────────────────────────────────────

function AspectRatiosPostES() {
  return (
    <>
      <p>
        La relación de aspecto del monitor es la relación proporcional entre el ancho y el alto de
        la superficie de la pantalla. Afecta a cuánto contenido cabe horizontalmente y verticalmente,
        qué tan inmersiva es la experiencia en juegos y vídeo, y cómo se organiza tu flujo de trabajo
        de productividad. Elegir la relación de aspecto correcta para tu caso de uso principal es
        tan importante como elegir la resolución correcta.
      </p>

      <h2 className="text-lg font-bold text-fg">16:9: la relación panorámica estándar</h2>
      <p>
        La relación de aspecto 16:9 es el estándar global actual para monitores, televisores y
        contenido de vídeo. Fue adoptada como estándar para la difusión HDTV y ha permanecido
        dominante para todas las pantallas de consumo y comerciales desde entonces. Prácticamente
        todo el contenido de vídeo, los juegos y los servicios de streaming se producen para 16:9.
        Las resoluciones 16:9 comunes incluyen 1920x1080 (Full HD), 2560x1440 (Quad HD), 3840x2160
        (4K UHD) y 5120x2880 (5K).
      </p>
      <p>
        Para gaming, consumo de contenido y productividad general, 16:9 es la elección más práctica
        debido a la compatibilidad universal con el software.
      </p>

      <h2 className="text-lg font-bold text-fg">16:10: la panorámica más alta</h2>
      <p>
        La relación 16:10 proporciona más espacio vertical de pantalla que 16:9 para el mismo ancho.
        Esto la hace popular para portátiles de empresa y monitores de productividad. Las resoluciones
        comunes incluyen 1920x1200 y 2560x1600. Las pantallas MacBook Pro y MacBook Air usan
        relaciones 16:10. Para leer documentos, escribir y programar, el espacio vertical adicional
        reduce la necesidad de desplazarse y cabe más contenido en pantalla simultáneamente.
      </p>

      <h2 className="text-lg font-bold text-fg">21:9: ultra panorámica</h2>
      <p>
        La relación de aspecto 21:9 es el estándar para los monitores ultraanchos. Las resoluciones
        comunes son 2560x1080 y 3440x1440. Las pantallas ultraanchas proporcionan espacio horizontal
        que permite que dos ventanas de aplicación estén una al lado de la otra sin superposición,
        lo que se adapta tanto a la multitarea profesional como al gaming cinematográfico donde el
        campo de visión más amplio es una ventaja significativa. Muchas películas se ruedan en
        relaciones de aspecto cercanas a 21:9, por lo que las pantallas ultraanchas eliminan las
        barras negras visibles en las pantallas 16:9.
      </p>

      <h2 className="text-lg font-bold text-fg">32:9: super ultra panorámica</h2>
      <p>
        La relación 32:9, con resoluciones como 5120x1440 y 3840x1080, reemplaza efectivamente
        dos monitores 16:9 en un único panel sin espacio entre marcos. Este formato se adapta a
        los profesionales que necesitan monitorizar múltiples fuentes o aplicaciones simultáneamente.
        La extensión horizontal es visualmente inmersiva en los juegos que la admiten, aunque la
        curvatura común en los paneles 32:9 también ayuda a la usabilidad en estos anchos extremos.
      </p>

      <h2 className="text-lg font-bold text-fg">Comprobación de tu relación de aspecto</h2>
      <p>
        El comprobador de resolución de este sitio calcula y muestra tu relación de aspecto
        automáticamente a partir de las dimensiones de pantalla reportadas, junto con el nombre
        común de tu relación donde corresponda. Si la relación mostrada no coincide con la
        especificada de tu monitor, es posible que estés ejecutando a una resolución no nativa,
        o que la relación de aspecto en tu monitor se haya configurado incorrectamente a través
        de una opción de escalado del sistema operativo.
      </p>
    </>
  )
}

export const POST_CONTENT_ES: Record<string, FC> = {
  'how-to-test-monitor-dead-pixels': DeadPixelPostES,
  'what-is-backlight-bleed': BacklightBleedPostES,
  'refresh-rate-60hz-vs-144hz': RefreshRatePostES,
  'stuck-pixels-causes-and-fixes': StuckPixelsPostES,
  'monitor-panel-types-ips-va-oled': PanelTypesPostES,
  'understanding-monitor-resolution-dpi': ResolutionPostES,
  'gamma-calibration-guide': GammaPostES,
  'screen-uniformity-test-guide': UniformityPostES,
  'how-to-clean-monitor-screen': CleaningPostES,
  'monitor-aspect-ratios-explained': AspectRatiosPostES,
}
