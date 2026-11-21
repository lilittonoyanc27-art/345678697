export const MODULE_2 = {
  id: 'mod2',
  navLabel: 'Экзамены 1–2',
  kicker: '1.º ESO (7.º класс) · Español + Հայերեն',
  title: 'Preparación para el examen de Lengua Castellana y Literatura — 1.º ESO',
  subtitle: 'Քննության նախապատրաստություն՝ 7-րդ դասարան · Castaño, La plaza, Teatro и Figuras',
  introNotes: [
    'Подготовила задания по образцу настоящей контрольной на фотографиях. Будут <strong>два основных экзаменационных текста</strong>, а также дополнительный небольшой театральный текст, чтобы ученик научился различать все три литературных жанра.',
    'Материал включает чтение, resumen, literatura culta y popular, géneros literarios, lenguaje literario, figuras literarias и анализ стихотворения с рифмой <strong>8– / 8a</strong>. Нажимайте на испанские тексты для перевода на армянский и кнопку <strong>«Посмотреть ответ»</strong> под каждым вопросом.'
  ],
  sections: [
    {
      id: 'm2-teoria',
      jumpLabel: 'Теория',
      title: '1. Теория перед экзаменом — Տեսություն քննությունից առաջ',
      blocks: [
        {
          type: 'subtitle',
          es: 'Literatura culta y literatura popular',
          hy: 'Հեղինակային և ժողովրդական գրականություն'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>Literatura culta</strong> — Tiene un autor conocido y suele transmitirse por escrito.',
              hy: '<strong>Հեղինակային գրականություն</strong> — Ունի հայտնի հեղինակ և սովորաբար փոխանցվում է գրավոր։'
            },
            {
              es: '<strong>Literatura popular</strong> — Suele ser anónima y transmitirse oralmente de generación en generación.',
              hy: '<strong>Ժողովրդական գրականություն</strong> — Սովորաբար անանուն է և բանավոր փոխանցվում է սերնդեսերունդ։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Importante — Կարևոր է',
          es: 'La literatura popular también puede tener un lenguaje muy bonito y elaborado. No debemos decidir solo por la dificultad de las palabras.',
          hy: 'Ժողովրդական գրականությունը նույնպես կարող է ունենալ գեղեցիկ և պատկերավոր լեզու։ Չպետք է որոշել միայն բառերի բարդությամբ։'
        },
        {
          type: 'subtitle',
          es: 'Los tres géneros literarios',
          hy: 'Գրական երեք սեռերը'
        },
        {
          type: 'table',
          headers: ['Género', 'Explicación en español (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: ['<strong>Narrativo</strong>', 'Un narrador cuenta acontecimientos que viven unos personajes.'],
              hy: 'Պատմողը ներկայացնում է հերոսների հետ տեղի ունեցող իրադարձությունները։'
            },
            {
              cells: ['<strong>Lírico</strong>', 'Expresa sentimientos, emociones o impresiones. Suele estar escrito en verso.'],
              hy: 'Արտահայտում է զգացմունքներ, հույզեր կամ տպավորություններ։ Հաճախ գրված է չափածո։'
            },
            {
              cells: ['<strong>Dramático o teatral</strong>', 'La historia se presenta mediante diálogos y acciones de los personajes, para ser representada.'],
              hy: 'Պատմությունը ներկայացվում է հերոսների երկխոսություններով և գործողություններով՝ բեմադրության համար։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Ojo / Ուշադրություն',
          es: 'Un texto narrativo también puede incluir diálogos. Eso no significa que sea necesariamente teatral.',
          hy: 'Պատմողական տեքստը նույնպես կարող է պարունակել երկխոսություններ։ Դա չի նշանակում, որ այն անպայման թատերական է։'
        }
      ]
    },
    {
      id: 'm2-exam1',
      jumpLabel: 'Examen 1 (Castaño)',
      title: 'EXAMEN 1 — El secreto del viejo castaño',
      blocks: [
        {
          type: 'note',
          html: 'Nivel 1.º ESO · 7.º դասարան · Texto original elaborado para practicar el examen. <strong>1. Lee el siguiente texto y contesta a las preguntas (6 puntos).</strong>'
        },
        {
          type: 'reading',
          titleEs: 'El secreto del viejo castaño',
          titleHy: 'Հին շագանակենու գաղտնիքը',
          paragraphs: [
            {
              es: 'Recuerdo perfectamente aquella mañana de abril en la que llegó una nueva alumna a nuestra clase. Se llamaba Inés y parecía una chica tranquila, aunque sus ojos mostraban una curiosidad que intentaba ocultar. Nadie sabía entonces que su llegada cambiaría nuestra manera de entender la amistad.',
              hy: 'Ես շատ լավ հիշում եմ ապրիլյան այն առավոտը, երբ մեր դասարան եկավ մի նոր աշակերտուհի։ Նրա անունը Ինես էր։ Նա հանգիստ աղջիկ էր թվում, թեև նրա աչքերում հետաքրքրասիրություն կար, որը փորձում էր թաքցնել։ Այն ժամանակ ոչ ոք չգիտեր, որ նրա գալուստը փոխելու էր ընկերության մասին մեր պատկերացումները։'
            },
            {
              es: 'Durante las semanas anteriores, mis compañeros y yo habíamos preparado una exposición sobre los árboles de nuestro barrio. Habíamos buscado fotografías antiguas, entrevistado a nuestros abuelos y dibujado los lugares que más nos gustaban. Sin embargo, todavía nos faltaba alguien que se atreviera a presentar nuestro trabajo delante de las familias.',
              hy: 'Նախորդ շաբաթների ընթացքում ես և իմ դասընկերները պատրաստել էինք ցուցադրություն մեր թաղամասի ծառերի մասին։ Մենք գտել էինք հին լուսանկարներ, հարցազրույցներ էինք անցկացրել մեր տատիկների ու պապիկների հետ և նկարել էինք այն վայրերը, որոնք ամենաշատն էինք սիրում։ Սակայն դեռ մեզ պակասում էր մեկը, ով կհամարձակվեր մեր աշխատանքը ներկայացնել ընտանիքների առջև։'
            },
            {
              es: 'En el recreo encontré a Inés sentada cerca del viejo castaño del patio. Tenía un cuaderno entre las manos y observaba atentamente las ramas.',
              hy: 'Դասամիջոցի ժամանակ ես Ինեսին գտա բակի հին շագանակենու մոտ նստած։ Նրա ձեռքին տետր կար, և նա ուշադիր նայում էր ճյուղերին։'
            },
            {
              es: '—¿Te gustan los árboles? —le pregunté.',
              hy: '— Դու սիրո՞ւմ ես ծառերը, — հարցրի ես։'
            },
            {
              es: '—Mucho —respondió—. Mi abuelo me enseñó a reconocerlos por sus hojas. Cuando vivíamos en mi antiguo pueblo, cuidábamos juntos un pequeño jardín.',
              hy: '— Շատ, — պատասխանեց նա։ — Պապիկս ինձ սովորեցրել է ճանաչել դրանք տերևներով։ Երբ ապրում էինք իմ նախկին գյուղում, միասին խնամում էինք մի փոքրիկ այգի։'
            },
            {
              es: 'Le expliqué nuestro proyecto y le pregunté si quería ayudarnos. Al principio dudó, pero finalmente aceptó con una sonrisa.',
              hy: 'Ես նրան պատմեցի մեր նախագծի մասին և հարցրի՝ արդյոք կցանկանա՞ օգնել մեզ։ Սկզբում նա տատանվեց, բայց վերջապես ժպտալով համաձայնեց։'
            },
            {
              es: 'Los días siguientes descubrimos que Inés sabía contar historias maravillosas. No hablaba demasiado, pero cuando lo hacía, todos queríamos escucharla. Gracias a sus ideas, decidimos preparar también un pequeño libro con recuerdos y dibujos de los vecinos.',
              hy: 'Հաջորդ օրերին մենք բացահայտեցինք, որ Ինեսը հրաշալի պատմություններ պատմելու կարողություն ունի։ Նա շատ չէր խոսում, բայց երբ սկսում էր խոսել, բոլորս ցանկանում էինք լսել նրան։ Նրա գաղափարների շնորհիվ որոշեցինք նաև պատրաստել փոքրիկ գիրք՝ հարևանների հիշողություններով և նկարներով։'
            },
            {
              es: 'Llegó el día de la exposición. La biblioteca estaba llena de alumnos, profesores y familias. Inés respiró profundamente y empezó a hablar. Mientras la escuchábamos, comprendí que <u>la biblioteca se había convertido en un faro para todos nosotros</u>.',
              hy: 'Եկավ ցուցադրության օրը։ Գրադարանը լի էր աշակերտներով, ուսուցիչներով և ընտանիքներով։ Ինեսը խորը շունչ քաշեց և սկսեց խոսել։ Մինչ նրան լսում էինք, ես հասկացա, որ <u>գրադարանը բոլորիս համար վերածվել էր մի փարոսի</u>։'
            },
            {
              es: 'Al terminar, los aplausos llenaron la sala. Desde la ventana, parecía que <u>las hojas del viejo castaño aplaudían nuestra alegría</u>.',
              hy: 'Երբ նա ավարտեց, դահլիճը լցվեց ծափահարություններով։ Պատուհանից թվում էր, թե <u>հին շագանակենու տերևները ծափահարում էին մեր ուրախությանը</u>։'
            },
            {
              es: 'Aquella tarde aprendí que la amistad no consiste solamente en acompañar a alguien cuando todo va bien, sino también en ayudarlo a descubrir todo lo que es capaz de hacer.',
              hy: 'Այդ երեկո ես հասկացա, որ ընկերությունը միայն այն չէ, երբ ամեն ինչ լավ է, կողքին լինես։ Ընկերությունը նաև նշանակում է օգնել մեկին բացահայտելու, թե ինչի է նա ընդունակ։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Preguntas del examen (Responde en español)',
          hy: 'Քննական հարցեր (Պատասխանիր իսպաներեն)'
        },
        {
          type: 'qaList',
          id: 'm2-ex1-qa',
          showCounter: true,
          items: [
            {
              id: 'm2-e1-a',
              num: 'A)',
              promptEs: 'Resume el texto. (1 punto)',
              promptHy: 'Համառոտ ներկայացրու տեքստի բովանդակությունը՝ ընդգծելով հիմնական իրադարձությունները։',
              answerEs: 'Un día llega Inés, una nueva alumna, a una clase que está preparando una exposición sobre los árboles. Sus compañeros descubren que sabe contar historias y la invitan a participar en el proyecto. Gracias a su ayuda, la exposición tiene éxito y todos aprenden el valor de la amistad.',
              answerHy: 'Մի օր դասարան է գալիս նոր աշակերտուհի Ինեսը։ Դասարանը ծառերի մասին ցուցադրություն է պատրաստում։ Դասընկերները բացահայտում են, որ Ինեսը կարողանում է հետաքրքիր պատմություններ պատմել և նրան առաջարկում են մասնակցել նախագծին։ Նրա օգնությամբ ցուցադրությունը հաջողվում է, և բոլորը հասկանում են ընկերության արժեքը։',
              answerExtraHtml: '<div class="note-box"><strong>Ինչպե՞ս սովորեցնել resumen գրել։</strong><br>• <strong>Primero:</strong> ¿Quién es el personaje principal? — Ո՞վ է գլխավոր հերոսը։<br>• <strong>Después:</strong> ¿Qué ocurre? — Ի՞նչ է տեղի ունենում։<br>• <strong>Finalmente:</strong> ¿Cómo termina la historia? — Ինչպե՞ս է ավարտվում պատմությունը։<br><br>Ուշադրություն․ Resumen-ը սովորաբար գրում ենք երրորդ դեմքով և <em>presente de indicativo</em> ժամանակով, նույնիսկ եթե պատմությունը անցյալ ժամանակով է։</div>'
            },
            {
              id: 'm2-e1-b',
              num: 'B)',
              promptEs: 'Justifica si este texto pertenece a la literatura culta o popular y por qué. (1 punto)',
              promptHy: 'Հիմնավորիր՝ տեքստը պատկանո՞ւմ է հեղինակային, թե՞ ժողովրդական գրականությանը։ Բացատրիր՝ ինչու։',
              answerEs: 'El texto presenta características de la literatura culta porque es un relato de autor creado por escrito, con un lenguaje elaborado y una estructura organizada.',
              answerHy: 'Տեքստն ունի հեղինակային գրականության հատկանիշներ, որովհետև այն գրավոր ստեղծված հեղինակային պատմվածք է՝ մշակված լեզվով և հստակ կառուցվածքով։'
            },
            {
              id: 'm2-e1-c',
              num: 'C)',
              promptEs: 'Explica con tus palabras las dos expresiones que hay subrayadas en el texto. (1 punto)',
              promptHy: 'Քո բառերով բացատրիր տեքստում ընդգծված երկու արտահայտությունների իմաստը։',
              answerEs: '<strong>1. La biblioteca se había convertido en un faro para todos nosotros.</strong><br>Significa que la biblioteca era un lugar importante que unía, orientaba y animaba a los alumnos.<br><br><strong>2. Las hojas del viejo castaño aplaudían nuestra alegría.</strong><br>Significa que las hojas parecían acompañar y celebrar la felicidad de los alumnos.',
              answerHy: '<strong>1.</strong> Նշանակում է, որ գրադարանը դարձել էր կարևոր վայր, որը միավորում, ուղղորդում և ոգևորում էր աշակերտներին։<br><br><strong>2.</strong> Նշանակում է, որ շագանակենու տերևները կարծես մասնակցում էին աշակերտների ուրախությանը և տոնում այն։'
            },
            {
              id: 'm2-e1-d',
              num: 'D)',
              promptEs: '¿Dirías que las expresiones que acabas de explicar son figuras literarias? ¿Cuáles? Justifica tu respuesta. (1 punto)',
              promptHy: 'Կարծո՞ւմ ես, որ այդ արտահայտությունները գեղարվեստական արտահայտչամիջոցներ են։ Որո՞նք են։ Հիմնավորիր պատասխանդ։',
              answerEs: 'La primera expresión es una <strong>metáfora</strong>, porque compara la biblioteca con un faro sin utilizar «como». La segunda es una <strong>personificación</strong>, porque atribuye a las hojas una acción humana: aplaudir.',
              answerHy: 'Առաջինը փոխաբերություն է՝ <em>metáfora</em>, որովհետև գրադարանը ներկայացվում է որպես փարոս՝ առանց «como» բառի։<br>Երկրորդը անձնավորում է՝ <em>personificación</em>, որովհետև տերևներին վերագրվում է մարդկային գործողություն՝ ծափահարելը։'
            },
            {
              id: 'm2-e1-e',
              num: 'E)',
              promptEs: '¿A qué género literario pertenece el texto? Justifica tu respuesta con ejemplos del texto. (1 punto)',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում տեքստը։ Հիմնավորիր պատասխանդ՝ բերելով օրինակներ տեքստից։',
              answerEs: 'Pertenece al <strong>género narrativo</strong> porque un narrador cuenta una historia sobre varios personajes, en un lugar y un tiempo determinados. Además, los acontecimientos tienen un principio, un desarrollo y un final.',
              answerHy: 'Պատկանում է պատմողական գրական սեռին, որովհետև պատմողը ներկայացնում է հերոսների հետ տեղի ունեցող իրադարձությունները որոշակի վայրում և ժամանակում։ Պատմությունն ունի սկիզբ, զարգացում և ավարտ։'
            },
            {
              id: 'm2-e1-f',
              num: 'F)',
              promptEs: '¿Dirías que este texto tiene lenguaje literario? Justifica tu respuesta. (1 punto)',
              promptHy: 'Կասե՞ս, որ այս տեքստն ունի գեղարվեստական լեզու։ Հիմնավորիր պատասխանդ։',
              answerEs: 'Sí, porque utiliza expresiones imaginativas y figuras literarias, como la metáfora y la personificación, para transmitir emociones y hacer la historia más expresiva.',
              answerHy: 'Այո՛, որովհետև տեքստում օգտագործվում են պատկերավոր արտահայտություններ և գեղարվեստական միջոցներ, օրինակ՝ փոխաբերություն և անձնավորում, որոնք փոխանցում են զգացմունքներ և պատմությունն ավելի արտահայտիչ են դարձնում։'
            }
          ]
        }
      ]
    },
    {
      id: 'm2-exam2',
      jumpLabel: 'Examen 2 (La plaza)',
      title: 'EXAMEN 2 — La plaza de las palabras',
      blocks: [
        {
          type: 'note',
          html: 'Poema original de estilo popular, creado para practicar la poesía tradicional y el romance. <strong>1. Lee el siguiente poema y contesta a las preguntas (6 puntos).</strong>'
        },
        {
          type: 'reading',
          titleEs: 'La plaza de las palabras',
          titleHy: 'Բառերի հրապարակը',
          paragraphs: [
            {
              es: 'Hoy los niños van al río,<br>con sus risas por la plaza,<br>llevan panes y sonrisas,<br>ya repica la campana.',
              hy: 'Այսօր երեխաները գնում են գետի մոտ,<br>իրենց ծիծաղով անցնում են հրապարակով,<br>տանում են հացեր ու ժպիտներ,<br>արդեն հնչում է զանգը։'
            },
            {
              es: 'El abuelo cuenta cuentos<br>bajo el sol de nuestra casa,<br>las amigas se reúnen<br><u>y la calle nos abraza</u>.',
              hy: 'Պապիկը հեքիաթներ է պատմում<br>մեր տան արևի ջերմության տակ,<br>ընկերուհիները հավաքվում են,<br><u>իսկ փողոցը կարծես գրկում է մեզ</u>։'
            },
            {
              es: 'Todos cantan muy contentos<br>y celebran la mañana,<br><u>los libros son mil caminos</u><br>junto a la vieja ventana.',
              hy: 'Բոլորը շատ ուրախ երգում են<br>և տոնում են առավոտը,<br><u>գրքերը հազարավոր ճանապարհներ են</u><br>հին պատուհանի մոտ։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Preguntas del examen',
          hy: 'Քննական հարցեր'
        },
        {
          type: 'qaList',
          id: 'm2-ex2-qa',
          showCounter: true,
          items: [
            {
              id: 'm2-e2-a',
              num: 'A)',
              promptEs: 'Resume el texto. (1 punto)',
              promptHy: 'Համառոտ ներկայացրու բանաստեղծության հիմնական բովանդակությունը։',
              answerEs: 'El poema describe un ambiente alegre en el que los niños, los amigos y un abuelo comparten momentos agradables. También destaca la importancia de los libros, la convivencia y la alegría.',
              answerHy: 'Բանաստեղծությունը նկարագրում է ուրախ միջավայր, որտեղ երեխաները, ընկերները և պապիկը միասին հաճելի պահեր են անցկացնում։ Այն նաև ընդգծում է գրքերի, համատեղ կյանքի և ուրախության կարևորությունը։'
            },
            {
              id: 'm2-e2-b',
              num: 'B)',
              promptEs: 'Justifica si este texto presenta características de la literatura culta o popular y por qué. (1 punto)',
              promptHy: 'Բացատրիր՝ տեքստը հեղինակային, թե ժողովրդական գրականության հատկանիշներ ունի։ Հիմնավորիր։',
              answerEs: 'El poema imita la literatura popular porque presenta un lenguaje sencillo, musicalidad, versos octosílabos y rima asonante en los versos pares, como los romances tradicionales.',
              answerHy: 'Բանաստեղծությունը նմանակում է ժողովրդական գրականության ոճը, որովհետև ունի պարզ լեզու, երաժշտականություն, ութվանկ տողեր և զույգ տողերի ասոնանսային հանգ, ինչպես ավանդական ռոմանսները։',
              answerExtraHtml: '<div class="note-box"><strong>Nota para el profesor:</strong> Este poema es una creación didáctica original, no una obra tradicional anónima. Por eso, la respuesta correcta habla de características del estilo popular, no de una transmisión oral histórica comprobada.</div>'
            },
            {
              id: 'm2-e2-c',
              num: 'C)',
              promptEs: 'Explica con tus palabras las dos expresiones subrayadas. (1 punto)',
              promptHy: 'Քո բառերով բացատրիր երկու ընդգծված արտահայտությունների իմաստը։',
              answerEs: '<strong>1. Y la calle nos abraza.</strong><br>Significa que la calle parece un lugar acogedor donde las personas se sienten felices y acompañadas.<br><br><strong>2. Los libros son mil caminos.</strong><br>Significa que los libros nos permiten descubrir muchas historias, experiencias y mundos diferentes.',
              answerHy: '<strong>1.</strong> Նշանակում է, որ փողոցը ջերմ և հյուրընկալ վայր է թվում, որտեղ մարդիկ իրենց ուրախ ու շրջապատված են զգում։<br><br><strong>2.</strong> Նշանակում է, որ գրքերը հնարավորություն են տալիս բացահայտել բազմաթիվ պատմություններ, փորձառություններ և տարբեր աշխարհներ։'
            },
            {
              id: 'm2-e2-d',
              num: 'D)',
              promptEs: '¿Qué figuras literarias aparecen en esas expresiones? Justifica tu respuesta. (1 punto)',
              promptHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցներն են օգտագործված այդ արտահայտություններում։ Հիմնավորիր։',
              answerEs: 'La primera expresión es una <strong>personificación</strong>, porque la calle realiza una acción humana: abrazar. La segunda es una <strong>metáfora</strong>, porque identifica los libros con caminos que permiten descubrir nuevas experiencias.',
              answerHy: 'Առաջինը անձնավորում է, որովհետև փողոցին վերագրվում է մարդկային գործողություն՝ գրկելը։ Երկրորդը փոխաբերություն է, որովհետև գրքերը համեմատվում են ճանապարհների հետ, որոնք օգնում են բացահայտել նոր փորձառություններ։'
            },
            {
              id: 'm2-e2-e',
              num: 'E)',
              promptEs: '¿A qué género literario pertenece el texto? Justifica tu respuesta. (1 punto)',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում այս տեքստը։ Ինչո՞ւ։',
              answerEs: 'Pertenece al <strong>género lírico</strong> porque está escrito en versos y expresa una visión alegre y afectuosa de la vida cotidiana.',
              answerHy: 'Պատկանում է քնարական գրական սեռին, որովհետև գրված է չափածո և արտահայտում է ուրախ ու ջերմ վերաբերմունք առօրյա կյանքի նկատմամբ։'
            },
            {
              id: 'm2-e2-f',
              num: 'F)',
              promptEs: '¿Tiene lenguaje literario? Explica por qué. (1 punto)',
              promptHy: 'Արդյո՞ք տեքստն ունի գեղարվեստական լեզու։ Բացատրիր։',
              answerEs: 'Sí, porque utiliza un lenguaje expresivo, imágenes poéticas, personificaciones y metáforas. Además, los versos tienen ritmo y rima.',
              answerHy: 'Այո՛, որովհետև օգտագործվում են պատկերավոր արտահայտություններ, անձնավորումներ և փոխաբերություններ։ Բացի այդ, տողերն ունեն ռիթմ և հանգ։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Preguntas adicionales de métrica y rima — G) Contesta a las siguientes preguntas',
          hy: 'Չափի և հանգի լրացուցիչ հարցեր'
        },
        {
          type: 'qaList',
          id: 'm2-ex2-g',
          showCounter: true,
          items: [
            {
              id: 'm2-g1',
              num: '1.',
              promptEs: '¿Cuántas sílabas métricas tienen los versos?',
              promptHy: 'Քանի՞ բանաստեղծական վանկ ունեն տողերը։',
              answerEs: 'Tienen <strong>8 sílabas métricas</strong> (son versos octosílabos).',
              answerHy: 'Տողերն ունեն <strong>8 բանաստեղծական վանկ</strong> (ութվանկ տողեր են)։'
            },
            {
              id: 'm2-g2',
              num: '2.',
              promptEs: '¿Los versos son de arte mayor o de arte menor?',
              promptHy: 'Տողերը երկարաչա՞փ են, թե՞ կարճաչափ։',
              answerEs: 'Son de <strong>arte menor</strong>, porque tienen 8 sílabas o menos.',
              answerHy: '<strong>Կարճաչափ են (arte menor)</strong>, քանի որ ունեն 8 կամ պակաս վանկ։'
            },
            {
              id: 'm2-g3',
              num: '3.',
              promptEs: '¿La rima es consonante o asonante?',
              promptHy: 'Հանգը լրիվ համընկնո՞ւմ է, թե՞ միայն ձայնավորներն են համընկնում։',
              answerEs: 'La rima es <strong>asonante</strong>: en plaza, campana, casa, abraza, mañana, ventana coinciden solo las vocales <strong>a–a</strong> desde la vocal tónica.',
              answerHy: 'Հանգավորումը <strong>ասոնանսային է</strong>․ բոլոր զույգ տողերի վերջավորություններում շեշտված ձայնավորից սկսած համընկնում են միայն <strong>a–a</strong> ձայնավորները։'
            },
            {
              id: 'm2-g4',
              num: '4.',
              promptEs: '¿Qué versos riman?',
              promptHy: 'Ո՞ր տողերն են հանգավորվում։',
              answerEs: 'Riman los <strong>versos pares</strong> (2, 4, 6, 8, 10, 12); los impares quedan libres (sueltos).',
              answerHy: 'Հանգավորվում են <strong>զույգ տողերը</strong> (2, 4, 6, 8, 10, 12), իսկ կենտ տողերը մնում են անհանգ։'
            },
            {
              id: 'm2-g5',
              num: '5.',
              promptEs: 'Escribe el esquema métrico.',
              promptHy: 'Գրիր բանաստեղծության չափական սխեման։',
              answerEs: '<strong>8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a</strong>',
              answerHy: '8– (անհանգ), 8a («a» խմբի ասոնանսային հանգ) ամբողջ 12 տողերի համար։'
            },
            {
              id: 'm2-g6',
              num: '6.',
              promptEs: '¿Por qué este poema tiene forma de romance?',
              promptHy: 'Ինչո՞ւ այս բանաստեղծությունն ունի ռոմանսի ձև։',
              answerEs: 'Porque utiliza versos de ocho sílabas métricas y rima asonante en los pares, mientras los impares quedan libres.',
              answerHy: 'Որովհետև բաղկացած է ութվանկ տողերից, զույգ տողերում ունի ասոնանսային հանգ, իսկ կենտ տողերը անհանգ են։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '6. Explicación de la métrica — 8– y 8a',
          hy: 'Սա հատկապես կարևոր է ռոմանսի վերաբերյալ քննության համար։'
        },
        {
          type: 'metricCards',
          items: [
            {
              big: '8–',
              titleEs: 'Ocho sílabas, sin rima',
              descEs: 'Verso suelto (8–)',
              descHy: '8 վանկ, չի հանգավորվում'
            },
            {
              big: '8a',
              titleEs: 'Ocho sílabas, rima a',
              descEs: 'Pertenece al grupo de rima a',
              descHy: '8 վանկ, պատկանում է a հանգախմբին'
            }
          ]
        },
        {
          type: 'bilingual',
          es: 'La letra <strong>a</strong> indica el grupo de rima, no que la rima sea necesariamente consonante.',
          hy: '<strong>a</strong> տառը ցույց է տալիս հանգավորման խումբը, ոչ թե պարտադիր լրիվ հանգավորումը։',
          isHtml: true
        },
        {
          type: 'table',
          headers: ['N.º', 'Verso (Análisis del poema)', 'Esquema'],
          rows: [
            { cells: ['1.', 'Hoy los niños van al río', '8–'] },
            { cells: ['2.', 'con sus risas por la plaza', '<strong>8a</strong>'] },
            { cells: ['3.', 'llevan panes y sonrisas', '8–'] },
            { cells: ['4.', 'ya repica la campana', '<strong>8a</strong>'] },
            { cells: ['5.', 'El abuelo cuenta cuentos', '8–'] },
            { cells: ['6.', 'bajo el sol de nuestra casa', '<strong>8a</strong>'] },
            { cells: ['7.', 'las amigas se reúnen', '8–'] },
            { cells: ['8.', 'y la calle nos abraza', '<strong>8a</strong>'] },
            { cells: ['9.', 'Todos cantan muy contentos', '8–'] },
            { cells: ['10.', 'y celebran la mañana', '<strong>8a</strong>'] },
            { cells: ['11.', 'los libros son mil caminos', '8–'] },
            { cells: ['12.', 'junto a la vieja ventana', '<strong>8a</strong>'] }
          ]
        },
        {
          type: 'bilingual',
          label: '¿Por qué es rima asonante?',
          es: 'Observa las palabras finales de los versos pares: <strong>plaza — campana — casa — abraza — mañana — ventana</strong>. Todas tienen las vocales <strong>a–a</strong> desde la vocal tónica, aunque las consonantes no coinciden en todas. Por eso el esquema es: <strong>8– / 8a / 8– / 8a / 8– / 8a...</strong>',
          hy: 'Բոլոր զույգ տողերի վերջավորություններում շեշտված ձայնավորից սկսած համընկնում են <strong>a–a</strong> ձայնավորները, բայց բաղաձայնները բոլոր բառերում նույնը չեն։ Հետևաբար ընդհանուր հանգավորումը ասոնանսային է։',
          isHtml: true
        },
        {
          type: 'bilingual',
          es: 'Este poema tiene la forma métrica del <strong>romance</strong>, porque utiliza versos de ocho sílabas métricas y rima asonante en los pares, mientras los impares quedan libres. <em>Recuerda: «romance» es una forma poética. Un romance puede narrar acontecimientos o expresar sentimientos; no todos pertenecen automáticamente al género lírico.</em>',
          hy: 'Այս բանաստեղծությունն ունի <strong>ռոմանսի</strong> չափական ձևը, քանի որ ունի 8-վանկանի տողեր և զույգ տողերում ասոնանսային հանգ, իսկ կենտերը անհանգ են։ Հիշիր՝ «ռոմանսը» բանաստեղծական ձև է, որը կարող է և՛ պատմել, և՛ զգացմունք արտահայտել։',
          isHtml: true
        }
      ]
    },
    {
      id: 'm2-teatro',
      jumpLabel: '3. Театр',
      title: '3. Práctica adicional — El género dramático',
      blocks: [
        {
          type: 'note',
          html: 'Այս փոքրիկ հատվածը նախատեսված է երրորդ գրական սեռը՝ <strong>género dramático</strong>, ճանաչելու համար։'
        },
        {
          type: 'reading',
          titleEs: 'Texto 3 — Una sorpresa en clase',
          titleHy: 'Անակնկալ դասարանում',
          paragraphs: [
            {
              es: '<em>(En el aula. Sobre la mesa hay una caja llena de libros. Los alumnos se acercan con curiosidad.)</em>',
              hy: '<em>(Դասարանում։ Սեղանի վրա գրքերով լի մի արկղ կա։ Աշակերտները հետաքրքրությամբ մոտենում են։)</em>',
              isStage: true
            },
            {
              es: '<strong>MARTA:</strong> ¿De quién son todos estos libros?',
              hy: '<strong>ՄԱՐՏԱ․</strong> Ո՞ւմ են պատկանում այս բոլոր գրքերը։'
            },
            {
              es: '<strong>PABLO:</strong> Los hemos traído para organizar una biblioteca de intercambio.',
              hy: '<strong>ՊԱԲԼՈ․</strong> Մենք դրանք բերել ենք, որպեսզի գրքերի փոխանակման գրադարան կազմակերպենք։'
            },
            {
              es: '<strong>MARTA:</strong> ¡Qué buena idea! Así podremos leer historias diferentes sin comprar libros nuevos.',
              hy: '<strong>ՄԱՐՏԱ․</strong> Ի՜նչ լավ գաղափար է։ Այդպես կկարողանանք տարբեր պատմություններ կարդալ՝ առանց նոր գրքեր գնելու։'
            },
            {
              es: '<strong>SOFÍA:</strong> <em>(Sonríe mientras abre la caja).</em> Yo he traído mi novela favorita. Me gustaría que alguien la leyera.',
              hy: '<strong>ՍՈՖԻԱ․</strong> <em>(Ժպտում է՝ բացելով արկղը։)</em> Ես բերել եմ իմ սիրելի վեպը։ Կցանկանայի, որ ինչ-որ մեկն այն կարդար։'
            },
            {
              es: '<strong>PABLO:</strong> Entonces, ¿qué os parece si cada viernes intercambiamos un libro?',
              hy: '<strong>ՊԱԲԼՈ․</strong> Այդ դեպքում ի՞նչ կասեք, եթե ամեն ուրբաթ մի գիրք փոխանակենք։'
            },
            {
              es: '<strong>MARTA:</strong> ¡Perfecto! Y después podemos contar qué parte nos ha gustado más.',
              hy: '<strong>ՄԱՐՏԱ․</strong> Հրաշալի է։ Իսկ հետո կարող ենք պատմել, թե գրքի որ հատվածն է մեզ ամենաշատը դուր եկել։'
            },
            {
              es: '<em>(Los tres compañeros colocan los libros sobre una mesa y empiezan a preparar pequeños carteles de colores.)</em>',
              hy: '<em>(Երեք դասընկերները գրքերը դասավորում են սեղանին և սկսում գունավոր փոքրիկ ցուցանակներ պատրաստել։)</em>',
              isStage: true
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Preguntas — Respuestas del texto dramático',
          hy: 'Հարցեր դրամատիկական տեքստի վերաբերյալ'
        },
        {
          type: 'qaList',
          id: 'm2-teatro-qa',
          showCounter: true,
          items: [
            {
              id: 'm2-t1',
              num: '1.',
              promptEs: '¿A qué género literario pertenece este texto?',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում։',
              answerEs: 'Pertenece al <strong>género dramático</strong> porque los personajes hablan directamente mediante diálogos y aparecen acotaciones.',
              answerHy: 'Պատկանում է դրամատիկական սեռին, որովհետև հերոսները անմիջապես խոսում են երկխոսություններով, և կան բեմական նշումներ։'
            },
            {
              id: 'm2-t2',
              num: '2.',
              promptEs: '¿Hay un narrador que cuente los acontecimientos?',
              promptHy: 'Կա՞ պատմող, որը ներկայացնում է իրադարձությունները։',
              answerEs: 'No hay un narrador que cuente la historia. Los personajes expresan sus ideas directamente.',
              answerHy: 'Չկա պատմող, որը պատմում է իրադարձությունները։ Հերոսներն իրենք են անմիջապես ներկայացնում իրենց մտքերը։'
            },
            {
              id: 'm2-t3',
              num: '3.',
              promptEs: '¿Qué son las acotaciones? Busca dos ejemplos.',
              promptHy: 'Ի՞նչ են բեմական նշումները։ Գտիր երկու օրինակ։',
              answerEs: 'Son indicaciones sobre los movimientos, los gestos o el escenario. Ejemplos: «(Sonríe mientras abre la caja)» y «(En el aula. Sobre la mesa hay una caja llena de libros...)».',
              answerHy: 'Դրանք նշումներ են, որոնք նկարագրում են հերոսների շարժումները, ժեստերը կամ բեմը։ Օրինակ՝ «(Ժպտում է՝ բացելով արկղը)»։'
            },
            {
              id: 'm2-t4',
              num: '4.',
              promptEs: '¿Qué diferencia hay entre este texto y el primer texto?',
              promptHy: 'Ի՞նչ տարբերություն կա այս և առաջին տեքստերի միջև։',
              answerEs: 'En el primer texto, un narrador cuenta los hechos. En el texto dramático, la acción se presenta principalmente mediante los diálogos y las acotaciones.',
              answerHy: 'Առաջին տեքստում պատմողը ներկայացնում է դեպքերը։ Դրամատիկական տեքստում գործողությունը հիմնականում ներկայացվում է երկխոսությունների և բեմական նշումների միջոցով։'
            }
          ]
        }
      ]
    },
    {
      id: 'm2-figuras',
      jumpLabel: '4. Фигуры и шпаргалка',
      title: '4. Figuras literarias — Ejercicio como en el examen (3 puntos)',
      blocks: [
        {
          type: 'bilingual',
          es: 'Busca las figuras literarias de las siguientes frases. (3 puntos)',
          hy: 'Գտիր գեղարվեստական արտահայտչամիջոցները հետևյալ նախադասություններում։ (3 միավոր)'
        },
        {
          type: 'qaList',
          id: 'm2-fig6',
          showCounter: true,
          items: [
            {
              id: 'm2-f1',
              num: '1.',
              promptEs: 'El despertador se enfadó conmigo a las siete.',
              promptHy: 'Զարթուցիչը բարկացավ ինձ վրա ժամը յոթին։',
              answerEs: '<strong>Personificación</strong> — Se atribuye al despertador un sentimiento humano: enfadarse.',
              answerHy: '<strong>Անձնավորում</strong> — Զարթուցիչին վերագրվում է մարդկային զգացմունք՝ բարկանալը։'
            },
            {
              id: 'm2-f2',
              num: '2.',
              promptEs: 'He esperado un millón de años para que empezara el recreo.',
              promptHy: 'Ես մի միլիոն տարի եմ սպասել, որ դասամիջոցը սկսվի։',
              answerEs: '<strong>Hipérbole</strong> — Exageración expresiva del tiempo de espera.',
              answerHy: '<strong>Չափազանցություն</strong> — Սպասելու ժամանակի դիտավորյալ չափազանցում։'
            },
            {
              id: 'm2-f3',
              num: '3.',
              promptEs: 'El aula era un océano de ideas.',
              promptHy: 'Դասարանը գաղափարների օվկիանոս էր։',
              answerEs: '<strong>Metáfora</strong> — Identifica el aula con un océano de ideas sin usar «como».',
              answerHy: '<strong>Փոխաբերություն</strong> — Դասարանը նույնացվում է գաղափարների օվկիանոսի հետ՝ առանց «como» բառի։'
            },
            {
              id: 'm2-f4',
              num: '4.',
              promptEs: 'Ni el viento, ni la lluvia, ni el frío borraron sus sonrisas.',
              promptHy: 'Ոչ քամին, ոչ անձրևը, ոչ ցուրտը չջնջեցին նրանց ժպիտները։',
              answerEs: '<strong>Anáfora</strong> (y polisíndeton) — Se repite «ni» al principio de cada elemento.',
              answerHy: '<strong>Անաֆորա</strong> (կրկնություն) — «ni» բառը կրկնվում է յուրաքանչյուր արտահայտության սկզբում։'
            },
            {
              id: 'm2-f5',
              num: '5.',
              promptEs: '«¡Qué suerte tengo!», dijo cuando se rompió su paraguas bajo la lluvia.',
              promptHy: '«Ի՜նչ բախտավոր եմ», ասաց նա, երբ անձրևի տակ հովանոցը կոտրվեց։',
              answerEs: '<strong>Ironía</strong> — Dice que tiene suerte cuando en realidad ocurre algo malo.',
              answerHy: '<strong>Հեգնանք</strong> — Ասում է, թե բախտավոր է, մինչդեռ իրականում տհաճ բան է պատահել։'
            },
            {
              id: 'm2-f6',
              num: '6.',
              promptEs: 'De blancas flores se llenó el jardín.',
              promptHy: 'Սպիտակ ծաղիկներով լցվեց այգին։',
              answerEs: '<strong>Hipérbaton</strong> — Se altera el orden habitual de las palabras («El jardín se llenó de blancas flores»).',
              answerHy: '<strong>Շրջադասություն</strong> — Փոխված է նախադասության բառերի սովորական հերթականությունը։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '8. Tabla final para memorizar antes del examen',
          hy: 'Քննությունից առաջ հիշելու վերջնական աղյուսակ'
        },
        {
          type: 'table',
          headers: ['Pregunta del examen', 'Qué hay que recordar (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: ['<strong>Resume el texto</strong>', 'Personajes + hechos principales + final.'],
              hy: 'Հերոսներ + հիմնական դեպքեր + ավարտ։'
            },
            {
              cells: ['<strong>¿Culta o popular?</strong>', 'Autor y transmisión escrita / tradición oral y anonimato.'],
              hy: 'Հեղինակային գրավոր ստեղծագործություն / անանուն բանավոր ավանդույթ։'
            },
            {
              cells: ['<strong>Explica la expresión</strong>', 'Decir su significado con palabras sencillas.'],
              hy: 'Պարզ բառերով բացատրել իմաստը։'
            },
            {
              cells: ['<strong>¿Qué figura literaria?</strong>', 'Identificarla y explicar por qué.'],
              hy: 'Անվանել և հիմնավորել։'
            },
            {
              cells: ['<strong>¿Qué género literario?</strong>', 'Narrativo / lírico / dramático.'],
              hy: 'Պատմողական / քնարական / դրամատիկական։'
            },
            {
              cells: ['<strong>¿Lenguaje literario?</strong>', 'Figuras, emociones e imágenes expresivas.'],
              hy: 'Գեղարվեստական միջոցներ, զգացմունքներ, պատկերավոր լեզու։'
            },
            {
              cells: ['<strong>¿Qué es un romance?</strong>', 'Versos octosílabos; pares con rima asonante; impares libres.'],
              hy: 'Ութվանկ տողեր, զույգերը՝ ասոնանսային հանգով, կենտերը՝ անհանգ։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Consejo para el alumno — Խորհուրդ աշակերտին',
          es: 'En el examen no basta con escribir «Es narrativo» o «Es una metáfora». Siempre hay que añadir <strong>porque...</strong> y una explicación o un ejemplo del texto.',
          hy: 'Քննության ժամանակ բավարար չէ միայն գրել «Պատմողական է» կամ «Փոխաբերություն է»։ Միշտ պետք է ավելացնել <strong>porque...</strong> և տալ բացատրություն կամ օրինակ տեքստից։',
          isHtml: true
        }
      ]
    }
  ]
};
