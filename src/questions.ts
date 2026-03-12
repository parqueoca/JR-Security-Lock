import { Question } from './types';

export const questionBank: Question[] = [
  {
    id: 1,
    pregunta: "¿Qué significa la luz roja del semáforo?",
    opciones: ["Continuar con precaución", "Detenerse completamente", "Acelerar", "Girar libremente"],
    correcta: 1,
    explicacion: "La luz roja obliga a detener completamente el vehículo antes de la línea de pare.",
    categoria: "Semáforos"
  },
  {
    id: 2,
    pregunta: "¿Cuál es el límite de velocidad en zonas residenciales si no hay señalización?",
    opciones: ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
    correcta: 1,
    explicacion: "En zonas residenciales y escolares, el límite general es de 30 km/h para garantizar la seguridad de peatones.",
    categoria: "Velocidades"
  },
  {
    id: 3,
    pregunta: "Ante una señal de 'PARE', ¿qué debe hacer el conductor?",
    opciones: ["Disminuir la velocidad y seguir", "Detenerse solo si vienen otros vehículos", "Detenerse completamente y ceder el paso", "Tocar la bocina y pasar"],
    correcta: 2,
    explicacion: "La señal de PARE exige una detención total del vehículo, sin importar si hay tráfico o no.",
    categoria: "Señales de tránsito"
  },
  {
    id: 4,
    pregunta: "¿Quién tiene la prioridad en una rotonda?",
    opciones: ["El vehículo que va a entrar", "El vehículo que ya está circulando dentro", "El vehículo más grande", "El que circule por la derecha"],
    correcta: 1,
    explicacion: "Los vehículos que ya circulan dentro de la rotonda tienen prioridad sobre los que intentan acceder.",
    categoria: "Prioridad de paso"
  },
  {
    id: 5,
    pregunta: "¿Cuál es la distancia mínima de seguridad que se debe mantener con el vehículo de adelante?",
    opciones: ["1 metro", "La regla de los 3 segundos", "5 metros", "No hay distancia mínima"],
    correcta: 1,
    explicacion: "La regla de los 3 segundos permite tener tiempo suficiente para reaccionar ante un frenado repentino.",
    categoria: "Conducción defensiva"
  },
  {
    id: 6,
    pregunta: "¿Qué indica la luz amarilla del semáforo?",
    opciones: ["Acelerar para pasar rápido", "Detenerse si es seguro hacerlo", "Continuar normalmente", "Girar a la izquierda"],
    correcta: 1,
    explicacion: "La luz amarilla indica precaución y que la luz roja aparecerá pronto; el conductor debe detenerse si puede hacerlo con seguridad.",
    categoria: "Semáforos"
  },
  {
    id: 7,
    pregunta: "¿Es obligatorio el uso del cinturón de seguridad para los pasajeros traseros?",
    opciones: ["No, solo para los delanteros", "Solo en autopistas", "Sí, para todos los ocupantes del vehículo", "Solo para niños"],
    correcta: 2,
    explicacion: "La ley de tránsito establece que todos los ocupantes deben usar el cinturón de seguridad.",
    categoria: "Uso de cinturón"
  },
  {
    id: 8,
    pregunta: "¿Qué debe hacer si un vehículo de emergencia viene con sirenas y luces encendidas?",
    opciones: ["Acelerar para no estorbar", "Detenerse en medio del carril", "Ceder el paso moviéndose a la derecha", "Seguir al vehículo de emergencia"],
    correcta: 2,
    explicacion: "Se debe facilitar el paso desplazándose hacia la derecha y deteniéndose si es necesario.",
    categoria: "Vehículos de emergencia"
  },
  {
    id: 9,
    pregunta: "¿Qué efecto tiene el alcohol en la conducción?",
    opciones: ["Mejora los reflejos", "Aumenta el tiempo de reacción", "Ayuda a ver mejor de noche", "No tiene ningún efecto"],
    correcta: 1,
    explicacion: "El alcohol disminuye las capacidades psicofísicas y aumenta el tiempo necesario para reaccionar ante imprevistos.",
    categoria: "Alcohol y conducción"
  },
  {
    id: 10,
    pregunta: "¿Qué significa una línea continua amarilla en el centro de la carretera?",
    opciones: ["Se puede rebasar", "Prohibido rebasar", "Zona de parqueo", "Carril exclusivo de guaguas"],
    correcta: 1,
    explicacion: "La línea continua indica que está prohibido adelantar o rebasar en ese tramo.",
    categoria: "Señales de tránsito"
  },
  {
    id: 11,
    pregunta: "¿A qué distancia de una esquina se permite estacionar?",
    opciones: ["Al menos 5 metros", "Justo en la esquina", "A 1 metro", "Donde no haya letrero"],
    correcta: 0,
    explicacion: "Se debe dejar una distancia mínima de 5 metros desde la esquina para no obstruir la visibilidad.",
    categoria: "Estacionamiento"
  },
  {
    id: 12,
    pregunta: "¿Cuál es el uso correcto de las luces altas?",
    opciones: ["En todo momento de noche", "En zonas urbanas iluminadas", "En carreteras oscuras, bajándolas al ver otro vehículo", "Para avisar que voy rápido"],
    correcta: 2,
    explicacion: "Las luces altas se usan en vías rurales sin iluminación, pero deben cambiarse a bajas al encontrarse con otro vehículo de frente o por detrás.",
    categoria: "Uso de luces"
  },
  {
    id: 13,
    pregunta: "¿Qué debe hacer un conductor al llegar a un paso de peatones?",
    opciones: ["Tocar la bocina", "Acelerar antes de que crucen", "Ceder siempre el paso al peatón", "Pasar si el peatón está lejos"],
    correcta: 2,
    explicacion: "El peatón siempre tiene la prioridad en los pasos de cebra o cruces peatonales.",
    categoria: "Peatones"
  },
  {
    id: 14,
    pregunta: "¿Qué significa la señal de 'CEDA EL PASO'?",
    opciones: ["Detenerse siempre", "Reducir velocidad y dar paso si vienen vehículos", "Ignorar si no hay policías", "Acelerar para entrar primero"],
    correcta: 1,
    explicacion: "Obliga a disminuir la velocidad y detenerse solo si es necesario para dejar pasar a otros vehículos con prioridad.",
    categoria: "Prioridad de paso"
  },
  {
    id: 15,
    pregunta: "En una intersección sin señales, ¿quién tiene la prioridad?",
    opciones: ["El que va más rápido", "El que viene por la derecha", "El que viene por la izquierda", "El vehículo más pesado"],
    correcta: 1,
    explicacion: "En cruces no señalizados, la prioridad de paso la tiene el vehículo que se aproxima por la derecha.",
    categoria: "Intersecciones"
  },
  {
    id: 16,
    pregunta: "¿Cuál es la función principal del apoyacabezas?",
    opciones: ["Comodidad para dormir", "Evitar lesiones cervicales en choques", "Decoración del asiento", "Sujetar el cinturón"],
    correcta: 1,
    explicacion: "El apoyacabezas previene el efecto 'latigazo' en caso de colisión trasera.",
    categoria: "Seguridad pasiva"
  },
  {
    id: 17,
    pregunta: "¿Qué documentos debe portar siempre un conductor?",
    opciones: ["Solo la cédula", "Licencia, matrícula y seguro vigente", "Copia del contrato de compra", "Carnet de la empresa"],
    correcta: 1,
    explicacion: "Es obligatorio portar la licencia de conducir, la matrícula del vehículo y la póliza de seguro al día.",
    categoria: "Documentación vehicular"
  },
  {
    id: 18,
    pregunta: "¿Qué indica una flecha verde en un semáforo?",
    opciones: ["Girar con precaución cediendo el paso", "Paso libre únicamente en la dirección de la flecha", "Detenerse", "Paso libre en todas las direcciones"],
    correcta: 1,
    explicacion: "La flecha verde permite el avance exclusivo en el sentido que indica, incluso si la luz principal está en rojo.",
    categoria: "Semáforos"
  },
  {
    id: 19,
    pregunta: "¿Cuál es la sanción por conducir sin licencia?",
    opciones: ["Una advertencia verbal", "Multa y retención del vehículo", "No hay sanción", "Solo una multa pequeña"],
    correcta: 1,
    explicacion: "Conducir sin licencia es una infracción grave que conlleva multas y la inmovilización del vehículo.",
    categoria: "Documentación vehicular"
  },
  {
    id: 20,
    pregunta: "¿Qué debe hacer si su vehículo sufre una falla en la autopista?",
    opciones: ["Dejarlo en el carril izquierdo", "Moverlo al paseo y colocar triángulos de seguridad", "Caminar por la vía buscando ayuda", "Quedarse dentro sin hacer nada"],
    correcta: 1,
    explicacion: "Se debe retirar el vehículo de la calzada al paseo (arcén) y señalizar con los triángulos a la distancia reglamentaria.",
    categoria: "Accidentes de tránsito"
  },
  // Adding more questions to reach a good number for the demo. 
  // I will generate a mix of topics.
  {
    id: 21,
    pregunta: "¿Qué significa una señal circular con borde rojo y un número 60?",
    opciones: ["Velocidad mínima 60 km/h", "Velocidad máxima 60 km/h", "Distancia de 60 metros", "Peso máximo 60 toneladas"],
    correcta: 1,
    explicacion: "Las señales circulares con borde rojo son reglamentarias; en este caso indica el límite máximo de velocidad.",
    categoria: "Señales de tránsito"
  },
  {
    id: 22,
    pregunta: "¿Cuándo se debe usar la luz direccional?",
    opciones: ["Solo de noche", "Al cambiar de carril o girar", "Para saludar a otro conductor", "Cuando hay mucha lluvia"],
    correcta: 1,
    explicacion: "Las direccionales deben usarse con antelación para avisar cualquier cambio de dirección o carril.",
    categoria: "Uso de luces"
  },
  {
    id: 23,
    pregunta: "¿Qué indica la doble línea amarilla continua?",
    opciones: ["Carril de emergencia", "Prohibición de rebasar en ambos sentidos", "Permitido rebasar con cuidado", "Zona de carga"],
    correcta: 1,
    explicacion: "La doble línea amarilla prohíbe el adelantamiento para los vehículos que circulan en ambos sentidos.",
    categoria: "Señales de tránsito"
  },
  {
    id: 24,
    pregunta: "¿Cuál es la posición correcta de las manos en el volante?",
    opciones: ["Una mano arriba y otra abajo", "Ambas manos en la parte superior", "Posición de las 10 y 10 (o 9 y 3) del reloj", "Con una sola mano es suficiente"],
    correcta: 2,
    explicacion: "Esta posición permite un mejor control y maniobrabilidad del vehículo ante imprevistos.",
    categoria: "Conducción defensiva"
  },
  {
    id: 25,
    pregunta: "¿Qué debe hacer si hay neblina densa?",
    opciones: ["Usar luces altas", "Usar luces bajas y antiniebla si tiene", "Apagar todas las luces", "Acelerar para salir rápido de la zona"],
    correcta: 1,
    explicacion: "Las luces altas rebotan en la niebla y deslumbran; las bajas y antiniebla mejoran la visibilidad del suelo.",
    categoria: "Uso de luces"
  },
  {
    id: 26,
    pregunta: "¿Qué significa un triángulo rojo invertido?",
    opciones: ["Peligro", "Ceda el paso", "Pare", "Zona escolar"],
    correcta: 1,
    explicacion: "Es la forma característica de la señal de Ceda el Paso.",
    categoria: "Señales de tránsito"
  },
  {
    id: 27,
    pregunta: "¿Cuál es la profundidad mínima legal del labrado de las gomas?",
    opciones: ["0.5 mm", "1.6 mm", "3.0 mm", "No importa"],
    correcta: 1,
    explicacion: "Un labrado menor a 1.6 mm compromete seriamente el agarre, especialmente en mojado.",
    categoria: "Mantenimiento"
  },
  {
    id: 28,
    pregunta: "¿Qué indica un agente de tránsito de espaldas a usted?",
    opciones: ["Que puede pasar", "Que debe detenerse", "Que debe acelerar", "Que puede girar"],
    correcta: 1,
    explicacion: "La espalda o el frente del agente equivalen a la luz roja del semáforo.",
    categoria: "Prioridad de paso"
  },
  {
    id: 29,
    pregunta: "¿Cómo se debe cruzar una rotonda si va a salir en la primera salida?",
    opciones: ["Por el carril interior", "Por el carril exterior (derecho)", "Por cualquier carril", "Por el centro"],
    correcta: 1,
    explicacion: "Para salidas próximas (derecha o recto), se debe usar el carril exterior.",
    categoria: "Rotondas"
  },
  {
    id: 30,
    pregunta: "¿Qué debe hacer ante un semáforo con luz roja intermitente?",
    opciones: ["Pasar rápido", "Tratarlo como una señal de PARE", "Esperar a que cambie a verde", "Ignorarlo"],
    correcta: 1,
    explicacion: "La luz roja intermitente obliga a detenerse totalmente y reanudar la marcha solo cuando sea seguro.",
    categoria: "Semáforos"
  },
  {
    id: 31,
    pregunta: "¿Qué significa una señal de color naranja?",
    opciones: ["Información turística", "Zona de obras o mantenimiento", "Reglamentación", "Advertencia permanente"],
    correcta: 1,
    explicacion: "El color naranja se utiliza exclusivamente para señalización temporal por obras en la vía.",
    categoria: "Señales de tránsito"
  },
  {
    id: 32,
    pregunta: "¿Cuál es la distancia mínima para poner la direccional antes de un giro?",
    opciones: ["5 metros", "10 metros", "Al menos 30 metros", "Justo al doblar"],
    correcta: 2,
    explicacion: "Se debe avisar con suficiente antelación (aprox. 30m en ciudad) para que los demás conductores reaccionen.",
    categoria: "Uso de luces"
  },
  {
    id: 33,
    pregunta: "¿Qué debe hacer si el pedal del freno se va al fondo?",
    opciones: ["Apagar el motor de inmediato", "Bombear el pedal y usar el freno de mano gradualmente", "Saltar del vehículo", "Cerrar los ojos"],
    correcta: 1,
    explicacion: "Bombear puede recuperar presión; el freno de mano debe usarse con cuidado para no bloquear las ruedas traseras.",
    categoria: "Conducción defensiva"
  },
  {
    id: 34,
    pregunta: "¿Qué indica una línea blanca discontinua?",
    opciones: ["Separación de carriles en el mismo sentido, se puede cambiar", "Prohibido cambiar de carril", "Vía en doble sentido", "Zona de peatones"],
    correcta: 0,
    explicacion: "Las líneas blancas separan carriles que van en la misma dirección; si es discontinua, permite el cambio de carril.",
    categoria: "Señales de tránsito"
  },
  {
    id: 35,
    pregunta: "¿Quién tiene la prioridad en una pendiente estrecha?",
    opciones: ["El que baja", "El que sube", "El vehículo más rápido", "El que toque la bocina primero"],
    correcta: 1,
    explicacion: "El vehículo que sube tiene prioridad, ya que es más difícil reanudar la marcha en subida.",
    categoria: "Prioridad de paso"
  },
  {
    id: 36,
    pregunta: "¿Qué significa la señal de 'E' con una raya roja encima?",
    opciones: ["Permitido estacionar", "Prohibido estacionar", "Zona de escuela", "Estación de combustible"],
    correcta: 1,
    explicacion: "Es la señal reglamentaria que prohíbe el estacionamiento en ese lugar.",
    categoria: "Señales de tránsito"
  },
  {
    id: 37,
    pregunta: "¿Cuál es la multa por usar el celular mientras conduce?",
    opciones: ["No hay multa", "Multa de varios salarios mínimos", "Solo si causa un accidente", "Una amonestación"],
    correcta: 1,
    explicacion: "El uso de dispositivos distractores está prohibido y conlleva sanciones económicas considerables.",
    categoria: "Conducta del conductor"
  },
  {
    id: 38,
    pregunta: "¿Qué debe hacer si presencia un accidente de tránsito?",
    opciones: ["Seguir de largo para no estorbar", "Detenerse en lugar seguro, señalizar y llamar a emergencias", "Tomar fotos y subirlas a redes", "Mover a los heridos de inmediato"],
    correcta: 1,
    explicacion: "La prioridad es proteger la zona, avisar a las autoridades y socorrer sin agravar lesiones.",
    categoria: "Accidentes de tránsito"
  },
  {
    id: 39,
    pregunta: "¿A qué edad puede un niño viajar en el asiento delantero?",
    opciones: ["5 años", "8 años", "12 años", "Cualquier edad con cinturón"],
    correcta: 2,
    explicacion: "Por seguridad, los menores de 12 años deben viajar siempre en el asiento trasero.",
    categoria: "Conducta del conductor"
  },
  {
    id: 40,
    pregunta: "¿Qué significa el color azul en las señales de tránsito?",
    opciones: ["Advertencia", "Información de servicios", "Reglamentación", "Obras"],
    correcta: 1,
    explicacion: "El azul se usa para señales informativas de servicios como hospitales, gasolineras, etc.",
    categoria: "Señales de tránsito"
  },
  // I will add more questions in a real scenario, but for now I'll provide a solid set.
  // I'll add 10 more to have 50, which is enough to show the randomization.
  {
    id: 41,
    pregunta: "¿Qué debe hacer si un neumático estalla mientras conduce?",
    opciones: ["Frenar a fondo", "Sujetar el volante con fuerza y dejar de acelerar", "Girar bruscamente al lado contrario", "Apagar el motor"],
    correcta: 1,
    explicacion: "Se debe mantener la dirección firme y reducir la velocidad gradualmente sin frenar bruscamente.",
    categoria: "Conducción defensiva"
  },
  {
    id: 42,
    pregunta: "¿Qué indica una luz verde intermitente en algunos semáforos?",
    opciones: ["Que va a cambiar a amarillo", "Que puede acelerar", "Que el semáforo está dañado", "Prioridad para peatones"],
    correcta: 0,
    explicacion: "Avisa que el tiempo de paso está por terminar y cambiará a amarillo.",
    categoria: "Semáforos"
  },
  {
    id: 43,
    pregunta: "¿Cuál es el límite de alcohol permitido en sangre para conductores privados?",
    opciones: ["0.0 g/l", "0.5 g/l", "1.0 g/l", "No hay límite"],
    correcta: 1,
    explicacion: "La ley establece límites estrictos, siendo 0.5 g/l el máximo para conductores no profesionales.",
    categoria: "Alcohol y conducción"
  },
  {
    id: 44,
    pregunta: "¿Qué significa una señal romboidal amarilla?",
    opciones: ["Reglamentación", "Advertencia de peligro", "Información", "Obras"],
    correcta: 1,
    explicacion: "Las señales amarillas con forma de rombo advierten sobre peligros permanentes en la vía.",
    categoria: "Señales de tránsito"
  },
  {
    id: 45,
    pregunta: "¿Cómo se debe entrar a una autopista?",
    opciones: ["A baja velocidad", "Acelerando en el carril de aceleración para igualar el tráfico", "Deteniéndose al final del carril", "Entrando directamente sin mirar"],
    correcta: 1,
    explicacion: "El carril de aceleración sirve para alcanzar la velocidad de la vía y entrar de forma segura.",
    categoria: "Conducción defensiva"
  },
  {
    id: 46,
    pregunta: "¿Qué indica el humo negro por el escape?",
    opciones: ["Falla en el sistema de frenos", "Mala combustión (exceso de combustible)", "Consumo de aceite", "Falta de agua"],
    correcta: 1,
    explicacion: "El humo negro suele indicar que el motor está quemando demasiado combustible.",
    categoria: "Mantenimiento"
  },
  {
    id: 47,
    pregunta: "¿Qué es el 'aquaplaning'?",
    opciones: ["Lavar el carro con presión", "Pérdida de contacto de las gomas con el suelo por una capa de agua", "Conducir por encima de un charco", "Un deporte acuático"],
    correcta: 1,
    explicacion: "Ocurre cuando el agua separa el neumático del asfalto, haciendo que el vehículo flote y pierda dirección.",
    categoria: "Conducción defensiva"
  },
  {
    id: 48,
    pregunta: "¿Qué significa la señal de una flecha que se divide en dos?",
    opciones: ["Camino cerrado", "Bifurcación de la vía", "Retorno", "Curva peligrosa"],
    correcta: 1,
    explicacion: "Indica que la vía se divide en dos direcciones distintas.",
    categoria: "Señales de tránsito"
  },
  {
    id: 49,
    pregunta: "¿Cuál es la función del ABS?",
    opciones: ["Aumentar la potencia", "Evitar que las ruedas se bloqueen al frenar", "Controlar la radio", "Enfriar el motor"],
    correcta: 1,
    explicacion: "El sistema antibloqueo permite mantener el control de la dirección durante una frenada de emergencia.",
    categoria: "Seguridad activa"
  },
  {
    id: 50,
    pregunta: "¿Qué debe hacer si se pasa de la salida en una autopista?",
    opciones: ["Dar reversa por el paseo", "Hacer un giro en U", "Continuar hasta la siguiente salida", "Detenerse y esperar"],
    correcta: 2,
    explicacion: "Nunca se debe retroceder o girar en U en una autopista; se debe buscar el siguiente retorno legal.",
    categoria: "Conducción defensiva"
  },
  {
    id: 51,
    pregunta: "Para realizar un manejo preventivo es importante:",
    opciones: [
      "Observar constantemente lo que ocurre en las vías, anticipar las maniobras de los demás usuarios de la vía y dominar el espacio con una distancia de seguimiento adecuada.",
      "Manejar lo más rápidamente posible para llegar antes a nuestro destino.",
      "Tener siempre activadas las luces largas o de carretera para que los demás usuarios de la vía nos vean."
    ],
    correcta: 0,
    explicacion: "El manejo preventivo se basa en la observación, anticipación y mantenimiento de una distancia de seguridad.",
    categoria: "Conducción defensiva"
  },
  {
    id: 52,
    pregunta: "¿Cuál de los siguientes es uno de los efectos del estrés en la conducción?",
    opciones: [
      "Decisiones más lentas y erróneas.",
      "Disminución de la agresividad.",
      "Menos agotamiento y fatiga."
    ],
    correcta: 0,
    explicacion: "El estrés afecta negativamente la capacidad de juicio y aumenta el tiempo de reacción.",
    categoria: "Salud vial"
  },
  {
    id: 53,
    pregunta: "Para obtener una licencia de conducir de la categoría 02, se requiere el cumplimiento de la siguiente disposición entre otras:",
    opciones: [
      "Ser declarado apto por el INTRANT en las pruebas teóricas específicas y pruebas prácticas de evaluación de aptitudes motoras y/o comportamentales.",
      "Haber manejado un vehículo.",
      "Tener un vehículo propio."
    ],
    correcta: 0,
    explicacion: "La ley exige aprobar tanto el examen teórico como el práctico ante la autoridad competente (INTRANT).",
    categoria: "Reglamentación"
  },
  {
    id: 54,
    pregunta: "La misión de los airbags en caso de accidente es:",
    opciones: [
      "Aumentar el riesgo por cortaduras de cristal, por eso hay que llevarlo siempre apagado.",
      "Proteger en caso de no llevar cinturón.",
      "Que la parte superior del cuerpo no impacte contra el volante, parabrisas o salpicadero."
    ],
    correcta: 2,
    explicacion: "El airbag es un sistema de seguridad pasiva diseñado para amortiguar el impacto de los ocupantes contra las partes rígidas del vehículo.",
    categoria: "Seguridad pasiva"
  },
  {
    id: 55,
    pregunta: "El sistema de iluminación de un vehículo, ¿qué función tiene?",
    opciones: [
      "Hace funcionar la batería.",
      "Proporcionar una fuente de iluminación únicamente para poder ver.",
      "Poder ver, ser vistos y señalizar maniobras."
    ],
    correcta: 2,
    explicacion: "Las luces no solo sirven para que el conductor vea, sino también para que otros usuarios lo identifiquen y entiendan sus intenciones.",
    categoria: "Seguridad activa"
  },
  {
    id: 56,
    pregunta: "Para trazar una curva de manera adecuada:",
    opciones: [
      "Hay que acercarse por la parte interior de la misma y reduciendo la velocidad, en el punto medio acercarse al vértice externo y frenar al salir de la curva.",
      "Hay que acercarse por la parte exterior de la misma y reduciendo la velocidad, en el punto medio acercarse al vértice interno y al salir de la curva acelerar para acercarnos al lado externo de la carretera.",
      "Hay que acelerar al acercarse a la curva y frenar en el punto medio."
    ],
    correcta: 1,
    explicacion: "La técnica correcta implica entrar por fuera, buscar el ápice (interior) y salir aprovechando el ancho de la vía.",
    categoria: "Conducción defensiva"
  },
  {
    id: 57,
    pregunta: "Las señales de tránsito se clasifican en…:",
    opciones: [
      "Verticales, horizontales y semáforos.",
      "Reglamentarias, preventivas e informativas.",
      "Agentes y circunstanciales."
    ],
    correcta: 1,
    explicacion: "Esta es la clasificación principal por su función: obligar (reglamentarias), advertir (preventivas) o guiar (informativas).",
    categoria: "Señales de tránsito"
  },
  {
    id: 58,
    pregunta: "¿Tiene alguna obligación un conductor cuando su vehículo va a ser alcanzado?",
    opciones: [
      "No, la responsabilidad es del vehículo que adelanta.",
      "Sí, moverse a su izquierda lo más posible para permitir prudentemente la maniobra del otro vehículo.",
      "Sí, reducir la velocidad y moverse a su derecha."
    ],
    correcta: 2,
    explicacion: "El conductor que va a ser adelantado debe facilitar la maniobra ciñéndose a la derecha y no aumentando la velocidad.",
    categoria: "Reglamentación"
  },
  {
    id: 59,
    pregunta: "El seguro obligatorio, ¿cubre la responsabilidad civil del conductor que, con motivo de los hechos de la circulación, cause daños a las personas (daños corporales) o a los bienes (daños materiales)?",
    opciones: [
      "Sí, salvo cuando el conductor es el tomador del seguro.",
      "Sí, dentro de unos límites.",
      "No."
    ],
    correcta: 1,
    explicacion: "El seguro de ley cubre daños a terceros hasta los límites establecidos en la póliza contratada.",
    categoria: "Reglamentación"
  },
  {
    id: 60,
    pregunta: "Si el Agente de Tránsito se sitúa de frente y con el brazo verticalmente está indicando una señal…",
    opciones: [
      "De PARE, que obliga a detenerse.",
      "De precaución, el derecho de paso se va a terminar.",
      "De paso, los conductores pueden comenzar a circular."
    ],
    correcta: 0,
    explicacion: "El brazo levantado verticalmente por un agente indica detención obligatoria para todos los usuarios que se aproximen.",
    categoria: "Prioridad de paso"
  },
  {
    id: 61,
    pregunta: "Los vehículos pueden transitar por:",
    opciones: [
      "La plataforma de la vía y los carriles.",
      "La calzada, con exclusión de los paseos.",
      "Los paseos, arcenes o márgenes de la carretera y contenes."
    ],
    correcta: 1,
    explicacion: "Los vehículos deben circular por la calzada; los paseos o arcenes son para emergencias o usuarios específicos.",
    categoria: "Reglamentación"
  },
  {
    id: 62,
    pregunta: "Ante una señal de PARE:",
    opciones: [
      "Los conductores deberán reducir la velocidad de la marcha del vehículo y detenerse antes de entrar en la intersección, pero no cederá el paso a todo vehículo que se acerque por la otra vía.",
      "Los conductores se detendrán lo más cerca posible de la intersección y antes de llegar al paso de peatones.",
      "Los conductores deberán reducir la velocidad de la marcha del vehículo y en caso de que fuera necesario se detendrá antes de entrar en la intersección y cederá el paso a todo vehículo que se acerque por la otra vía."
    ],
    correcta: 1,
    explicacion: "La detención debe ser total y realizarse antes de la línea de pare o el paso peatonal.",
    categoria: "Señales de tránsito"
  },
  {
    id: 63,
    pregunta: "¿De qué color son las marcas de pavimento que indican las líneas centrales de una vía de dos carriles de direcciones opuestas?",
    opciones: [
      "Blancas.",
      "Amarillas.",
      "Azules."
    ],
    correcta: 1,
    explicacion: "El color amarillo se utiliza para separar flujos de tráfico que circulan en direcciones opuestas.",
    categoria: "Señales de tránsito"
  },
  {
    id: 64,
    pregunta: "Los medicamentos y enfermedades pueden afectar a las capacidades básicas a la hora de conducir de forma segura. ¿Qué enfermedades de las siguientes representan un mayor riesgo?",
    opciones: [
      "Los síntomas de la gripe y los resfriados.",
      "Las enfermedades mentales y los trastornos neurológicos.",
      "Las alergias."
    ],
    correcta: 1,
    explicacion: "Los trastornos neurológicos y mentales pueden alterar gravemente la percepción y el control del vehículo.",
    categoria: "Salud vial"
  },
  {
    id: 65,
    pregunta: "A medida que aumenta la velocidad de conducción:",
    opciones: [
      "La capacidad de observar y analizar lo que sucede a nuestro alrededor será menor.",
      "Disminuyen los comportamientos agresivos, lo que implica mayor tensión.",
      "Se decelera la aparición de la fatiga."
    ],
    correcta: 0,
    explicacion: "A mayor velocidad, se produce el 'efecto túnel', reduciendo el campo de visión periférica.",
    categoria: "Velocidades"
  },
  {
    id: 66,
    pregunta: "Los sistemas de seguridad activa:",
    opciones: [
      "Son las habilidades del conductor para evitar el accidente.",
      "Son el conjunto de características técnicas de los vehículos cuyo objetivo es la pérdida de control de su trayectoria y la colisión.",
      "Evitan o disminuyen los daños que se producen en los accidentes."
    ],
    correcta: 2,
    explicacion: "La seguridad activa comprende los elementos que ayudan a evitar que el accidente ocurra (frenos, luces, etc.).",
    categoria: "Seguridad activa"
  },
  {
    id: 67,
    pregunta: "¿De qué color son las luces cortas o de cruce?",
    opciones: [
      "Son de color rojo.",
      "Son de color azul (lateral), verde (traseros) y blanco (delanteros).",
      "Son de color blancas."
    ],
    correcta: 2,
    explicacion: "Las luces delanteras de cruce deben ser de color blanco para iluminar la vía sin deslumbrar.",
    categoria: "Seguridad activa"
  }
];
