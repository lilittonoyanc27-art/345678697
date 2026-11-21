export const MODULE_3 = {
  id: 'mod3',
  navLabel: '4 Экзамена',
  kicker: 'Preparación completa · 1.º ESO — 7-րդ դասարան',
  title: 'Preparación completa para el examen de Lengua Castellana y Literatura',
  subtitle: '1.º ESO — 7-րդ դասարան | Español + Հայերեն · 4 экзамена, фигуры речи, resumen и симулякр',
  introNotes: [
    'По образцу школьной контрольной подготовим новую тренировку. Тексты будут добрыми, но по сложности приближенными к экзамену: с описаниями, литературными выражениями, разными временами и вопросами, на которые нужно отвечать полными предложениями.',
    '<strong>В комплект входят:</strong><br>1. <strong>Texto 1</strong> — Literatura culta, género narrativo. Авторский рассказ.<br>2. <strong>Texto 2</strong> — Literatura popular, género narrativo. Народная история в адаптации.<br>3. <strong>Texto 3</strong> — Género dramático. Театральный текст с диалогами.<br>4. <strong>Texto 4</strong> — Género lírico. Стихотворение с разбором романса, рифмы и слогов.<br>5. <strong>Figuras literarias.</strong> Отдельные экзаменационные упражнения и ответы.<br>Все испанские тексты сопровождаются армянским переводом по клику, а ответы открываются по кнопке «Посмотреть ответ».'
  ],
  sections: [
    {
      id: 'm3-teoria',
      jumpLabel: 'Теория',
      title: 'PARTE 1. Teoría imprescindible — Քննության համար անհրաժեշտ տեսություն',
      blocks: [
        {
          type: 'subtitle',
          es: '1. Literatura culta y popular',
          hy: 'Հեղինակային և ժողովրդական գրականություն'
        },
        {
          type: 'table',
          headers: ['Literatura culta', 'Literatura popular (клик на строку для перевода)'],
          rows: [
            {
              cells: ['Tiene un autor conocido o identificable.', 'Tradicionalmente es anónima.'],
              hy: 'Հեղինակը հայտնի է կամ ճանաչելի։ | Ավանդաբար հեղինակը անհայտ է։'
            },
            {
              cells: ['Suele transmitirse por escrito.', 'Se transmite tradicionalmente de forma oral.'],
              hy: 'Սովորաբար փոխանցվում է գրավոր։ | Ավանդաբար փոխանցվում է բանավոր։'
            },
            {
              cells: ['Es una creación individual.', 'Puede tener distintas versiones.'],
              hy: 'Անհատական ստեղծագործություն է։ | Կարող է ունենալ տարբեր տարբերակներ։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Ejemplo de respuesta para el examen (Culta)',
          es: 'Este texto pertenece a la literatura culta porque tiene un autor identificable, está elaborado por escrito y no procede de una tradición oral anónima.',
          hy: 'Այս տեքստը պատկանում է հեղինակային գրականությանը, որովհետև ունի ճանաչելի հեղինակ, գրավոր մշակված ստեղծագործություն է և չի ծագում անանուն բանավոր ավանդույթից։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo de respuesta para el examen (Popular)',
          es: 'Este relato procede de la literatura popular porque es una historia tradicional, de autor original desconocido, que se ha transmitido oralmente y tiene distintas versiones.',
          hy: 'Այս պատմությունը ծագում է ժողովրդական գրականությունից, որովհետև ավանդական պատմություն է, որի սկզբնական հեղինակը անհայտ է, այն փոխանցվել է բանավոր և ունի տարբեր տարբերակներ։'
        },
        {
          type: 'note',
          html: '<strong>Կարևոր․</strong> Պարզ լեզուն դեռ չի նշանակում <em>literatura popular</em>, իսկ բարդ լեզուն ինքնաբերաբար չի նշանակում <em>literatura culta</em>։ Ամենակարևորը ստեղծագործության ծագումն ու փոխանցման ձևն են։'
        },
        {
          type: 'subtitle',
          es: '2. Géneros literarios',
          hy: 'Գրական սեռեր'
        },
        {
          type: 'table',
          headers: ['Género', 'Cómo reconocerlo (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: ['<strong>Narrativo</strong>', 'Un narrador cuenta una historia con personajes, acciones, tiempo y espacio.'],
              hy: 'Պատմողը ներկայացնում է հերոսների և իրադարձությունների պատմությունը։'
            },
            {
              cells: ['<strong>Lírico</strong>', 'Expresa sentimientos, emociones o impresiones, normalmente en versos.'],
              hy: 'Արտահայտում է զգացմունքներ և տպավորություններ, հաճախ՝ բանաստեղծական տողերով։'
            },
            {
              cells: ['<strong>Dramático</strong>', 'Los personajes hablan directamente; aparecen diálogos y acotaciones para la representación.'],
              hy: 'Հերոսները խոսում են երկխոսություններով, կան բեմական նշումներ։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Una diferencia importante / Կարևոր տարբերություն',
          es: 'Un texto narrativo puede contener diálogos. No todos los textos con diálogos son teatrales.',
          hy: 'Պատմողական տեքստում նույնպես կարող է երկխոսություն լինել։ Դա դեռ չի նշանակում, որ տեքստը դրամատիկական է։'
        },
        {
          type: 'subtitle',
          es: '3. ¿Qué es el lenguaje literario?',
          hy: 'Ի՞նչ է գեղարվեստական լեզուն'
        },
        {
          type: 'bilingual',
          es: 'Es el uso expresivo y creativo del lenguaje para transmitir emociones, crear imágenes y embellecer el texto. Puede incluir metáforas, personificaciones, hipérboles y otras figuras literarias.',
          hy: 'Գեղարվեստական լեզուն բառերի ստեղծագործական և արտահայտիչ օգտագործումն է՝ զգացմունքներ փոխանցելու, պատկերներ ստեղծելու և խոսքն ավելի գեղեցիկ դարձնելու համար։ Այն կարող է ներառել փոխաբերություններ, անձնավորումներ, չափազանցություններ և այլ արտահայտչամիջոցներ։'
        }
      ]
    },
    {
      id: 'm3-exam1',
      jumpLabel: 'Examen 1 (Mapa)',
      title: 'EXAMEN 1 — El mapa de los buenos gestos',
      blocks: [
        {
          type: 'note',
          html: 'Literatura culta · Género narrativo · 6 puntos · <strong>1. Lee el siguiente texto y contesta a las preguntas.</strong>'
        },
        {
          type: 'reading',
          titleEs: 'El mapa de los buenos gestos',
          titleHy: 'Բարի գործերի քարտեզը',
          footerNote: 'Texto original creado para esta preparación. Ejemplo de creación escrita individual, no de tradición oral anónima.',
          paragraphs: [
            {
              es: 'Recuerdo con especial cariño aquel lunes de marzo en el que nuestra profesora, Elena, entró en clase con una caja de cartón y una propuesta inesperada. Nos explicó que, durante una semana, tendríamos que observar los pequeños gestos de amabilidad que ocurrían a nuestro alrededor y escribirlos en unas tarjetas de colores.',
              hy: 'Ես առանձնահատուկ ջերմությամբ եմ հիշում մարտյան այն երկուշաբթին, երբ մեր ուսուցչուհին՝ Էլենան, դասարան մտավ ստվարաթղթե տուփով և անսպասելի առաջարկով։ Նա բացատրեց, որ մեկ շաբաթվա ընթացքում մենք պետք է հետևենք մեր շրջապատում տեղի ունեցող փոքրիկ բարի արարքներին և գրենք դրանք գունավոր քարտերի վրա։'
            },
            {
              es: 'Al principio, algunos compañeros pensaron que sería una actividad aburrida. Sin embargo, pronto descubrimos que las cosas más importantes no siempre suceden delante de muchas personas. A veces, un gesto sencillo puede transformar el día de alguien.',
              hy: 'Սկզբում որոշ դասընկերներ մտածեցին, որ դա ձանձրալի առաջադրանք կլինի։ Սակայն շուտով մենք բացահայտեցինք, որ ամենակարևոր բաները միշտ չէ, որ տեղի են ունենում շատ մարդկանց ներկայությամբ։ Երբեմն մի պարզ արարք կարող է փոխել ինչ-որ մեկի օրը։'
            },
            {
              es: 'El martes, mientras caminaba hacia la biblioteca, vi a Marcos ayudando a una alumna de primero a recoger sus cuadernos. Aquella misma tarde, Ana decidió acompañar a una compañera que solía quedarse sola durante el recreo. Yo escribí los dos acontecimientos en mis tarjetas y las guardé cuidadosamente.',
              hy: 'Երեքշաբթի օրը, երբ գնում էի գրադարան, տեսա, թե ինչպես է Մարկոսը օգնում առաջին դասարանի մի աշակերտուհու հավաքել տետրերը։ Նույն օրը՝ ավելի ուշ, Անան որոշեց դասամիջոցի ընթացքում ընկերակցել մի աղջկա, որը սովորաբար մենակ էր մնում։ Ես գրեցի երկու իրադարձություններն իմ քարտերի վրա և խնամքով պահեցի դրանք։'
            },
            {
              es: 'Durante los días siguientes, la caja comenzó a llenarse de historias. Había tarjetas sobre alumnos que compartían sus apuntes, profesores que escuchaban con paciencia y amigos que ofrecían ayuda sin esperar nada a cambio.',
              hy: 'Հաջորդ օրերի ընթացքում տուփը սկսեց լցվել պատմություններով։ Կային քարտեր աշակերտների մասին, որոնք կիսվում էին իրենց դասի գրառումներով, ուսուցիչների մասին, որոնք համբերատար լսում էին, և ընկերների մասին, որոնք օգնություն էին առաջարկում՝ փոխարենը ոչինչ չսպասելով։'
            },
            {
              es: 'El viernes, nuestra profesora colocó un gran mapa del colegio sobre la pared. Cada uno de nosotros debía pegar sus tarjetas en el lugar donde había ocurrido el gesto que describía.',
              hy: 'Ուրբաթ օրը ուսուցչուհին դպրոցի մեծ քարտեզ փակցրեց պատին։ Մեզանից յուրաքանչյուրը պետք է իր քարտերը փակցներ այն վայրում, որտեղ տեղի էր ունեցել իր նկարագրած բարի արարքը։'
            },
            {
              es: 'Cuando terminamos, el mapa estaba lleno de pequeños papeles de colores. Entonces comprendí que <u>cada gesto de amabilidad era una pequeña semilla de esperanza</u>. Aunque parecieran insignificantes, todos contribuían a crear un ambiente más agradable.',
              hy: 'Երբ ավարտեցինք, քարտեզը լի էր փոքրիկ գունավոր թղթերով։ Այդ պահին ես հասկացա, որ <u>բարության յուրաքանչյուր արարք հույսի մի փոքրիկ սերմ էր</u>։ Թեև այդ արարքները կարող էին աննշան թվալ, բոլորը նպաստում էին ավելի հաճելի միջավայրի ստեղծմանը։'
            },
            {
              es: 'Marcos, que normalmente hablaba poco, levantó la mano y dijo:<br>—Creo que deberíamos continuar con este proyecto durante todo el curso.',
              hy: 'Մարկոսը, որը սովորաբար քիչ էր խոսում, ձեռք բարձրացրեց և ասաց.<br>— Կարծում եմ՝ մենք պետք է շարունակենք այս նախագիծը ամբողջ ուսումնական տարվա ընթացքում։'
            },
            {
              es: 'Todos estuvimos de acuerdo. En aquel momento, <u>las paredes de nuestra clase parecían sonreír de alegría</u>.',
              hy: 'Բոլորը համաձայնեցին։ Այդ պահին <u>մեր դասարանի պատերը կարծես ուրախությունից ժպտում էին</u>։'
            },
            {
              es: 'Desde entonces, aquel mapa nos recuerda que no necesitamos realizar grandes hazañas para mejorar la vida de los demás. A veces, escuchar, compartir o dedicar unos minutos a otra persona puede ser el mejor regalo.',
              hy: 'Այդ օրվանից քարտեզը մեզ հիշեցնում է, որ ուրիշների կյանքը բարելավելու համար պարտադիր չէ մեծ սխրանքներ գործել։ Երբեմն լսելը, կիսվելը կամ ինչ-որ մեկին մի քանի րոպե տրամադրելը կարող է լինել լավագույն նվերը։'
            }
          ]
        },
        {
          type: 'qaList',
          id: 'm3-e1-qa',
          showCounter: true,
          items: [
            {
              id: 'm3-e1-a',
              num: 'A)',
              promptEs: 'Resume el texto. (1 punto)',
              promptHy: 'Ամփոփիր տեքստի բովանդակությունը՝ ներկայացնելով հիմնական իրադարձությունները։',
              answerEs: 'Una profesora propone a sus alumnos observar y escribir los pequeños gestos de amabilidad que ocurren en el colegio. Durante una semana, los estudiantes descubren numerosos ejemplos de solidaridad y los colocan en un mapa. Finalmente, deciden continuar el proyecto porque comprenden la importancia de ayudar a los demás.',
              answerHy: 'Ուսուցչուհին առաջարկում է աշակերտներին նկատել և գրի առնել դպրոցում կատարվող փոքրիկ բարի արարքները։ Մեկ շաբաթվա ընթացքում նրանք բացահայտում են փոխօգնության բազմաթիվ օրինակներ և դրանք տեղադրում քարտեզի վրա։ Վերջում որոշում են շարունակել նախագիծը, քանի որ հասկանում են ուրիշներին օգնելու կարևորությունը։',
              answerExtraHtml: '<div class="note-box"><strong>Բացատրություն․</strong> Resumen-ում չպետք է վերապատմել բոլոր մանրամասները։ Բավական է ներկայացնել երեք հիմնական միտք՝ ինչ առաջադրանք ստացան, ինչ արեցին, ինչ եզրակացության եկան։</div>'
            },
            {
              id: 'm3-e1-b',
              num: 'B)',
              promptEs: 'Justifica si este texto pertenece a la literatura culta o popular y por qué. (1 punto)',
              promptHy: 'Հիմնավորիր՝ տեքստը պատկանում է հեղինակայի՞ն, թե՞ ժողովրդական գրականությանը։ Ինչո՞ւ։',
              answerEs: 'Es un texto de <strong>literatura culta</strong>, porque es una narración escrita de creación individual y su origen no está en una tradición oral anónima.',
              answerHy: 'Սա հեղինակային գրականության օրինակ է, որովհետև անհատական գրավոր ստեղծագործություն է և չի պատկանում անանուն բանավոր ավանդույթին։',
              answerExtraHtml: '<div class="note-box"><strong>Ինչ հիշել․</strong> Culta — autor identificable, creación individual. Popular — tradición oral, generalmente anónima.</div>'
            },
            {
              id: 'm3-e1-c',
              num: 'C)',
              promptEs: 'Explica con tus palabras las dos expresiones que hay subrayadas en el texto. (1 punto)',
              promptHy: 'Քո բառերով բացատրիր տեքստում ընդգծված երկու արտահայտությունները։',
              answerEs: '<strong>1. Cada gesto de amabilidad era una pequeña semilla de esperanza.</strong><br>Significa que una acción buena, aunque sea pequeña, puede producir cambios positivos y dar esperanza a otras personas.<br><br><strong>2. Las paredes de nuestra clase parecían sonreír de alegría.</strong><br>Significa que en la clase había tanta felicidad y entusiasmo que todo el ambiente parecía alegre.',
              answerHy: '<strong>1.</strong> Նշանակում է, որ նույնիսկ փոքրիկ բարի արարքը կարող է դրական փոփոխություններ առաջացնել և հույս ներշնչել ուրիշներին։<br><br><strong>2.</strong> Նշանակում է, որ դասարանում այնքան շատ ուրախություն և ոգևորություն կար, որ ամբողջ միջավայրը կարծես ուրախացել էր։'
            },
            {
              id: 'm3-e1-d',
              num: 'D)',
              promptEs: '¿Dirías que las expresiones que acabas de explicar son figuras literarias? ¿Cuáles? Justifica tu respuesta. (1 punto)',
              promptHy: 'Արդյո՞ք այդ արտահայտությունները գեղարվեստական արտահայտչամիջոցներ են։ Որո՞նք են։ Հիմնավորիր պատասխանդ։',
              answerEs: '<strong>1. Metáfora:</strong> La primera expresión es una metáfora porque identifica un gesto amable con una semilla de esperanza, sin utilizar una comparación directa con «como».<br><br><strong>2. Personificación:</strong> La segunda expresión es una personificación porque atribuye una acción humana, sonreír, a las paredes de la clase.',
              answerHy: '<strong>1. Փոխաբերություն:</strong> Առաջին արտահայտությունը փոխաբերություն է, որովհետև բարի արարքը ներկայացվում է որպես հույսի սերմ՝ առանց «como» բառի օգնությամբ ուղիղ համեմատություն կատարելու։<br><br><strong>2. Անձնավորում:</strong> Երկրորդ արտահայտությունը անձնավորում է, որովհետև դասարանի պատերին վերագրվում է մարդկային գործողություն՝ ժպտալը։'
            },
            {
              id: 'm3-e1-e',
              num: 'E)',
              promptEs: '¿A qué género literario pertenece el texto? Justifica tu respuesta con ejemplos del texto. (1 punto)',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում տեքստը։ Հիմնավորիր օրինակներով։',
              answerEs: 'Pertenece al <strong>género narrativo</strong> porque un narrador cuenta unos acontecimientos protagonizados por alumnos y una profesora. La historia ocurre en el colegio y presenta un inicio, un desarrollo y un final.',
              answerHy: 'Պատկանում է պատմողական գրական սեռին, որովհետև պատմողը ներկայացնում է աշակերտների և ուսուցչուհու հետ կապված իրադարձությունները։ Դեպքերը տեղի են ունենում դպրոցում, իսկ պատմությունն ունի սկիզբ, զարգացում և ավարտ։',
              answerExtraHtml: '<div class="note-box"><strong>Ուշադրություն․</strong> Տեքստում երկխոսություն կա, բայց դա չի փոխում գրական սեռը։ Հիմնականը պատմողի առկայությունն է։</div>'
            },
            {
              id: 'm3-e1-f',
              num: 'F)',
              promptEs: '¿Dirías que este texto tiene lenguaje literario? Justifica tu respuesta. (1 punto)',
              promptHy: 'Կարծո՞ւմ ես, որ տեքստում օգտագործված է գեղարվեստական լեզու։ Հիմնավորիր։',
              answerEs: 'Sí, porque el autor utiliza expresiones imaginativas y figuras literarias, como la metáfora de las semillas de esperanza y la personificación de las paredes. Estos recursos hacen el relato más expresivo.',
              answerHy: 'Այո՛, որովհետև հեղինակը օգտագործում է պատկերավոր արտահայտություններ և գեղարվեստական միջոցներ, օրինակ՝ հույսի սերմերի փոխաբերությունը և պատերի անձնավորումը։ Դրանք պատմությունն ավելի արտահայտիչ են դարձնում։'
            }
          ]
        }
      ]
    },
    {
      id: 'm3-exam2',
      jumpLabel: 'Examen 2 (Sopa)',
      title: 'EXAMEN 2 — La sopa de piedra',
      blocks: [
        {
          type: 'note',
          html: 'Literatura popular · Género narrativo · 6 puntos<br>Այս երկրորդ պատմությունը ժողովրդական հեքիաթի ուսումնական վերապատմություն է։ Աշակերտը պետք է կարողանա հիմնավորել, թե ինչու է պատմության սկզբնական աղբյուրը ժողովրդական գրականությունը։'
        },
        {
          type: 'reading',
          titleEs: 'La sopa de piedra',
          titleHy: 'Քարից ապուրը',
          footerNote: 'Adaptación didáctica del cuento popular tradicional «La sopa de piedra». La narración concreta de esta página está redactada para el ejercicio; la historia tradicional tiene diferentes versiones.',
          paragraphs: [
            {
              es: 'Había una vez un pequeño pueblo rodeado de montañas donde sus habitantes trabajaban desde el amanecer hasta la puesta del sol. Aunque todos eran buenas personas, a veces estaban tan ocupados con sus problemas que olvidaban la importancia de ayudarse unos a otros.',
              hy: 'Լինում է, չի լինում, լեռներով շրջապատված մի փոքրիկ գյուղ է լինում, որի բնակիչներն աշխատում էին լուսաբացից մինչև մայրամուտ։ Թեև բոլորը լավ մարդիկ էին, երբեմն այնքան էին զբաղված իրենց խնդիրներով, որ մոռանում էին միմյանց օգնելու կարևորությունը։'
            },
            {
              es: 'Una tarde de otoño llegó un viajero que llevaba varios días caminando. Estaba cansado y tenía hambre, pero apenas conservaba unas monedas en el bolsillo.',
              hy: 'Աշնանային մի երեկո գյուղ հասավ մի ճանապարհորդ, որը մի քանի օր շարունակ քայլել էր։ Նա հոգնած ու քաղցած էր, իսկ գրպանում ընդամենը մի քանի մետաղադրամ էր մնացել։'
            },
            {
              es: 'Al llegar a la plaza, encontró a una anciana que descansaba junto a una fuente.',
              hy: 'Հրապարակ հասնելով՝ նա հանդիպեց մի տարեց կնոջ, որը հանգստանում էր աղբյուրի մոտ։'
            },
            {
              es: '—Buenas tardes —la saludó—. ¿Podría prestarme una olla con agua? Quiero preparar una deliciosa sopa de piedra.',
              hy: '— Բարի երեկո, — ողջունեց նա։ — Կարո՞ղ եք ինձ ջրով մի կաթսա տալ։ Ուզում եմ համեղ քարե ապուր պատրաստել։'
            },
            {
              es: 'La mujer lo miró sorprendida.<br>—¿Una sopa de piedra? Nunca he oído hablar de semejante comida.',
              hy: 'Կինը զարմացած նայեց նրան։<br>— Քարե ապո՞ւր։ Ես երբեք նման ուտեստի մասին չեմ լսել։'
            },
            {
              es: 'El viajero sonrió y le mostró una pequeña piedra limpia que llevaba en la mano.',
              hy: 'Ճանապարհորդը ժպտաց և ցույց տվեց իր ձեռքում պահած փոքրիկ, մաքուր քարը։'
            },
            {
              es: 'La anciana, llena de curiosidad, fue a buscar una olla. Poco después, varios vecinos se acercaron para observar aquel extraño experimento.',
              hy: 'Հետաքրքրությամբ լցված տարեց կինը գնաց կաթսա բերելու։ Քիչ անց մի քանի հարևան մոտեցան՝ դիտելու այդ տարօրինակ փորձը։'
            },
            {
              es: '—La sopa estará más sabrosa si añadimos una zanahoria —comentó el viajero.',
              hy: '— Ապուրն ավելի համեղ կլինի, եթե մի գազար ավելացնենք, — ասաց ճանապարհորդը։'
            },
            {
              es: 'Una mujer trajo dos zanahorias. Otro vecino ofreció unas patatas. Un niño apareció con un puñado de arroz y una familia compartió algunas verduras de su huerto.',
              hy: 'Մի կին երկու գազար բերեց։ Մեկ ուրիշ հարևան կարտոֆիլ առաջարկեց։ Մի երեխա հայտնվեց մի բուռ բրնձով, իսկ մի ընտանիք կիսվեց իր բանջարանոցից բերած բանջարեղենով։'
            },
            {
              es: 'Pronto, <u>el delicioso aroma de la sopa llamó a todas las puertas del pueblo</u>. Los vecinos colocaron una mesa grande en la plaza y comenzaron a preparar platos para compartir la comida.',
              hy: 'Շուտով <u>ապուրի համեղ բույրը թակեց գյուղի բոլոր դռները</u>։ Հարևանները հրապարակում մեծ սեղան դրեցին և սկսեցին ափսեներ պատրաստել, որպեսզի միասին ճաշեն։'
            },
            {
              es: 'Cuando todos estuvieron sentados, el viajero levantó su cuchara y dijo:<br>—Hoy hemos aprendido que una pequeña aportación de cada persona puede convertirse en algo maravilloso.',
              hy: 'Երբ բոլորը նստեցին, ճանապարհորդը բարձրացրեց գդալը և ասաց.<br>— Այսօր մենք սովորեցինք, որ յուրաքանչյուր մարդու փոքրիկ ներդրումը կարող է վերածվել հրաշալի բանի։'
            },
            {
              es: 'Aquella noche, <u>la mesa fue un puente que unió a todos los vecinos</u>.',
              hy: 'Այդ երեկո <u>սեղանը դարձավ մի կամուրջ, որը միավորեց բոլոր հարևաններին</u>։'
            },
            {
              es: 'Desde entonces, los habitantes del pueblo organizaron una comida comunitaria cada otoño. Y aunque algunos seguían hablando de la misteriosa sopa de piedra, todos sabían que su verdadero ingrediente había sido la generosidad.',
              hy: 'Այդ օրվանից գյուղի բնակիչներն ամեն աշուն կազմակերպում էին համատեղ ճաշկերույթ։ Եվ թեև նրանցից ոմանք շարունակում էին խոսել առեղծվածային քարե ապուրի մասին, բոլորը գիտեին, որ դրա իրական բաղադրիչը առատաձեռնությունն էր։'
            }
          ]
        },
        {
          type: 'qaList',
          id: 'm3-e2-qa',
          showCounter: true,
          items: [
            {
              id: 'm3-e2-a',
              num: 'A)',
              promptEs: 'Resume el texto. (1 punto)',
              promptHy: 'Համառոտ ներկայացրու պատմության բովանդակությունը։',
              answerEs: 'Un viajero llega hambriento a un pueblo y propone preparar una sopa de piedra. Los habitantes, movidos por la curiosidad, aportan diferentes ingredientes y terminan compartiendo una comida. Gracias a esta experiencia, comprenden que la colaboración y la generosidad pueden unir a las personas.',
              answerHy: 'Քաղցած ճանապարհորդը հասնում է մի գյուղ և առաջարկում քարից ապուր պատրաստել։ Հետաքրքրությունից դրդված՝ գյուղացիները տարբեր մթերքներ են բերում և վերջում միասին ճաշում։ Այս փորձառության շնորհիվ նրանք հասկանում են, որ համագործակցությունն ու առատաձեռնությունը կարող են միավորել մարդկանց։',
              answerExtraHtml: '<div class="note-box"><strong>Ինչու է ճիշտ․</strong> Ամփոփման մեջ կան հիմնական գործողությունները, բայց բաց են թողնված երկրորդական մանրամասները, օրինակ՝ քանի գազար կամ կարտոֆիլ բերեցին։</div>'
            },
            {
              id: 'm3-e2-b',
              num: 'B)',
              promptEs: 'Justifica si la historia pertenece a la literatura culta o popular y por qué. (1 punto)',
              promptHy: 'Հիմնավորիր՝ պատմությունն իր ծագմամբ պատկանում է հեղինակայի՞ն, թե՞ ժողովրդական գրականությանը։',
              answerEs: 'La historia procede de la <strong>literatura popular</strong> porque es un cuento tradicional de autor original desconocido, transmitido en diferentes versiones. Este texto es una adaptación escrita de ese relato popular.',
              answerHy: 'Պատմությունը ծագում է ժողովրդական գրականությունից, որովհետև ավանդական հեքիաթ է, որի սկզբնական հեղինակը անհայտ է, և այն փոխանցվել է տարբեր տարբերակներով։ Այս տեքստը ժողովրդական պատմության գրավոր վերապատմություն է։',
              answerExtraHtml: '<div class="note-box"><strong>Կարևոր է տարբերակել․</strong> Սկզբնական ժողովրդական պատմությունը անանուն է, բայց այս կոնկրետ վերապատմությունն ունի կազմող։ Այդ պատճառով քննության մեջ կարող ենք գրել՝ <em>Es una adaptación de un cuento popular</em>։</div>'
            },
            {
              id: 'm3-e2-c',
              num: 'C)',
              promptEs: 'Explica con tus palabras las dos expresiones subrayadas. (1 punto)',
              promptHy: 'Բացատրիր ընդգծված երկու արտահայտությունների իմաստները։',
              answerEs: '<strong>1. El delicioso aroma de la sopa llamó a todas las puertas del pueblo.</strong><br>Significa que el olor agradable de la sopa se extendió por el pueblo y atrajo la atención de sus habitantes.<br><br><strong>2. La mesa fue un puente que unió a todos los vecinos.</strong><br>Significa que la comida compartida permitió que los vecinos se reunieran, hablaran y se sintieran más unidos.',
              answerHy: '<strong>1.</strong> Նշանակում է, որ ապուրի հաճելի բույրը տարածվեց ամբողջ գյուղում և գրավեց բնակիչների ուշադրությունը։<br><br><strong>2.</strong> Նշանակում է, որ համատեղ ճաշը հնարավորություն տվեց հարևաններին հավաքվել, զրուցել և ավելի մտերմանալ։'
            },
            {
              id: 'm3-e2-d',
              num: 'D)',
              promptEs: '¿Son figuras literarias? ¿Cuáles? Justifica tu respuesta. (1 punto)',
              promptHy: 'Դրանք գեղարվեստական արտահայտչամիջոցնե՞ր են։ Որո՞նք են։ Ինչո՞ւ։',
              answerEs: '<strong>1. Personificación:</strong> El aroma no puede llamar literalmente a las puertas. Se le atribuye una acción propia de las personas.<br><br><strong>2. Metáfora:</strong> La mesa se identifica con un puente porque representa la unión entre las personas. No se trata de un puente real.',
              answerHy: '<strong>1. Անձնավորում:</strong> Բույրը չի կարող իրականում դուռ թակել։ Նրան վերագրվում է մարդու կատարած գործողություն։<br><br><strong>2. Փոխաբերություն:</strong> Սեղանը ներկայացվում է որպես կամուրջ, որովհետև խորհրդանշում է մարդկանց միասնությունը։ Խոսքը իրական կամրջի մասին չէ։'
            },
            {
              id: 'm3-e2-e',
              num: 'E)',
              promptEs: '¿A qué género literario pertenece el texto? Justifica con ejemplos. (1 punto)',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում պատմությունը։ Հիմնավորիր։',
              answerEs: 'Pertenece al <strong>género narrativo</strong> porque un narrador cuenta una historia con personajes, como el viajero y los vecinos, que realizan distintas acciones. Los hechos ocurren en un pueblo y siguen un orden temporal.',
              answerHy: 'Պատկանում է պատմողական գրական սեռին, որովհետև պատմողը ներկայացնում է հերոսների՝ ճանապարհորդի և գյուղացիների հետ տեղի ունեցող իրադարձությունները։ Գործողությունները տեղի են ունենում գյուղում և ներկայացվում են ժամանակային հաջորդականությամբ։'
            },
            {
              id: 'm3-e2-f',
              num: 'F)',
              promptEs: '¿Dirías que este texto tiene lenguaje literario? Justifica tu respuesta. (1 punto)',
              promptHy: 'Ունի՞ արդյոք պատմությունը գեղարվեստական լեզու։ Ինչո՞ւ։',
              answerEs: 'Sí, porque utiliza expresiones imaginativas, como la personificación del aroma y la metáfora de la mesa como puente. Además, el relato transmite una enseñanza sobre la generosidad mediante una historia simbólica.',
              answerHy: 'Այո՛, որովհետև օգտագործվում են պատկերավոր արտահայտություններ, օրինակ՝ բույրի անձնավորումը և սեղանի՝ կամրջի հետ փոխաբերական նույնացումը։ Բացի այդ, պատմությունը խորհրդանշական ձևով փոխանցում է առատաձեռնության մասին ուսուցողական միտք։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Diferencia entre el examen 1 y el examen 2',
          hy: 'Տարբերությունը 1-ին և 2-րդ քննությունների միջև'
        },
        {
          type: 'table',
          headers: ['Aspecto', 'Examen 1', 'Examen 2'],
          rows: [
            { cells: ['<strong>Origen</strong>', 'Creación individual escrita', 'Cuento tradicional adaptado'] },
            { cells: ['<strong>Literatura</strong>', 'Culta', 'Popular de origen'] },
            { cells: ['<strong>Género</strong>', 'Narrativo', 'Narrativo'] },
            { cells: ['<strong>Narrador</strong>', 'Primera persona', 'Tercera persona'] },
            { cells: ['<strong>Tema</strong>', 'La amabilidad en el colegio', 'La generosidad y la colaboración'] }
          ]
        },
        {
          type: 'note',
          html: '<strong>Գլխավոր տարբերությունը․</strong> Երկու տեքստերն էլ պատմողական են (<em>narrativos</em>), բայց առաջինը անհատական գրավոր ստեղծագործություն է, իսկ երկրորդի սկզբնաղբյուրը ժողովրդական ավանդույթն է։'
        }
      ]
    },
    {
      id: 'm3-exam3',
      jumpLabel: 'Examen 3 (Teatro)',
      title: 'EXAMEN 3 — La biblioteca de todos',
      blocks: [
        {
          type: 'note',
          html: 'Género dramático · Teatro · 1.º ESO<br>Теперь ученик должен научиться узнавать <strong>género dramático</strong>. Это важно, потому что на экзамене можно получить текст, в котором вместо рассказчика есть реплики персонажей и сценические указания.'
        },
        {
          type: 'reading',
          titleEs: 'La biblioteca de todos',
          titleHy: 'Գրադարանը բոլորի համար',
          paragraphs: [
            {
              es: '<em>(La escena transcurre en la biblioteca del colegio. Tres compañeros están preparando un rincón de lectura. Sobre una mesa hay libros, carteles y lápices de colores.)</em>',
              hy: '<em>(Գործողությունը տեղի է ունենում դպրոցի գրադարանում։ Երեք դասընկեր պատրաստում են ընթերցանության անկյուն։ Սեղանի վրա կան գրքեր, ցուցանակներ և գունավոր մատիտներ։)</em>',
              isStage: true
            },
            {
              es: '<strong>CLARA:</strong> <em>(Observando los libros).</em> Tenemos muchas historias, pero todavía no sabemos cómo organizar nuestro rincón.',
              hy: '<strong>ԿԼԱՐԱ․</strong> <em>(Նայելով գրքերին)։</em> Մենք շատ պատմություններ ունենք, բայց դեռ չգիտենք՝ ինչպես կազմակերպել մեր ընթերցանության անկյունը։'
            },
            {
              es: '<strong>DANIEL:</strong> Podemos separar los libros por temas: aventuras, naturaleza, amistad y ciencia.',
              hy: '<strong>ԴԱՆԻԵԼ․</strong> Կարող ենք գրքերը բաժանել թեմաների՝ արկածներ, բնություն, ընկերություն և գիտություն։'
            },
            {
              es: '<strong>SARA:</strong> Me parece una buena idea, pero también deberíamos pensar en los alumnos que apenas conocen nuestra biblioteca.',
              hy: '<strong>ՍԱՐԱ․</strong> Կարծում եմ՝ լավ գաղափար է, բայց պետք է մտածենք նաև այն աշակերտների մասին, որոնք գրեթե չեն ճանաչում մեր գրադարանը։'
            },
            {
              es: '<strong>CLARA:</strong> ¿Qué propones?',
              hy: '<strong>ԿԼԱՐԱ․</strong> Ի՞նչ ես առաջարկում։'
            },
            {
              es: '<strong>SARA:</strong> Podríamos organizar una pequeña visita cada viernes y recomendar un libro diferente.',
              hy: '<strong>ՍԱՐԱ․</strong> Կարող ենք ամեն ուրբաթ փոքրիկ այցելություն կազմակերպել և տարբեր գրքեր առաջարկել։'
            },
            {
              es: '<strong>DANIEL:</strong> ¡Me encanta! Así los alumnos más pequeños también podrían participar.',
              hy: '<strong>ԴԱՆԻԵԼ․</strong> Շատ լավ է։ Այդպես փոքր աշակերտները նույնպես կկարողանան մասնակցել։'
            },
            {
              es: '<em>(Clara se acerca a la ventana y observa a varios niños jugando en el patio.)</em>',
              hy: '<em>(Կլարան մոտենում է պատուհանին և նայում բակում խաղացող երեխաներին։)</em>',
              isStage: true
            },
            {
              es: '<strong>CLARA:</strong> A veces olvidamos que <u>los libros son ventanas abiertas a otros mundos</u>.',
              hy: '<strong>ԿԼԱՐԱ․</strong> Երբեմն մենք մոռանում ենք, որ <u>գրքերը դեպի այլ աշխարհներ բացվող պատուհաններ են</u>։'
            },
            {
              es: '<strong>SARA:</strong> Exactamente. Y cada persona puede encontrar una historia que le ayude a aprender algo nuevo.',
              hy: '<strong>ՍԱՐԱ․</strong> Ճիշտ է։ Եվ յուրաքանչյուր մարդ կարող է գտնել մի պատմություն, որը կօգնի իրեն նոր բան սովորել։'
            },
            {
              es: '<strong>DANIEL:</strong> <em>(Colocando un cartel sobre la mesa).</em> Entonces escribamos una frase para invitar a todos.',
              hy: '<strong>ԴԱՆԻԵԼ․</strong> <em>(Սեղանի վրա դնելով ցուցանակը)։</em> Այդ դեպքում գրենք մի նախադասություն՝ բոլորին հրավիրելու համար։'
            },
            {
              es: '<strong>CLARA:</strong> ¿Qué os parece esta?: «Cada libro es una aventura que comienza contigo».',
              hy: '<strong>ԿԼԱՐԱ․</strong> Ի՞նչ կասեք այս տարբերակի մասին. «Յուրաքանչյուր գիրք արկած է, որը սկսվում է քեզանից»։'
            },
            {
              es: '<strong>SARA:</strong> ¡Perfecto!',
              hy: '<strong>ՍԱՐԱ․</strong> Հրաշալի է։'
            },
            {
              es: '<em>(Los tres compañeros colocan los libros en las estanterías. En ese momento, <u>el viejo reloj de la biblioteca parece animarlos a continuar</u> con su proyecto.)</em>',
              hy: '<em>(Երեք դասընկերները գրքերը դասավորում են դարակներում։ Այդ պահին <u>գրադարանի հին ժամացույցը կարծես քաջալերում է նրանց շարունակել</u> իրենց նախագիծը։)</em>',
              isStage: true
            },
            {
              es: '<strong>DANIEL:</strong> Ya casi hemos terminado. Mañana podremos enseñar nuestro trabajo.',
              hy: '<strong>ԴԱՆԻԵԼ․</strong> Գրեթե ավարտեցինք։ Վաղը կկարողանանք ցույց տալ մեր աշխատանքը։'
            },
            {
              es: '<strong>CLARA:</strong> Estoy contenta porque hemos preparado algo que todos podrán disfrutar.',
              hy: '<strong>ԿԼԱՐԱ․</strong> Ուրախ եմ, որովհետև պատրաստել ենք մի բան, որից բոլորը կարող են օգտվել։'
            },
            {
              es: '<em>(Los tres sonríen y siguen organizando los libros.)</em>',
              hy: '<em>(Երեքը ժպտում են և շարունակում դասավորել գրքերը։)</em>',
              isStage: true
            }
          ]
        },
        {
          type: 'qaList',
          id: 'm3-e3-qa',
          showCounter: true,
          items: [
            {
              id: 'm3-e3-a',
              num: 'A)',
              promptEs: 'Resume el texto.',
              promptHy: 'Ամփոփիր տեքստը։',
              answerEs: 'Tres compañeros organizan un rincón de lectura en la biblioteca de su colegio. Deciden clasificar los libros y preparar visitas para otros alumnos. Finalmente, terminan su proyecto y se sienten satisfechos porque todos podrán disfrutarlo.',
              answerHy: 'Երեք դասընկեր կազմակերպում են ընթերցանության անկյուն իրենց դպրոցի գրադարանում։ Նրանք որոշում են դասակարգել գրքերը և այցելություններ կազմակերպել մյուս աշակերտների համար։ Վերջում ավարտում են նախագիծը և ուրախանում, որ բոլորը կկարողանան օգտվել դրանից։'
            },
            {
              id: 'm3-e3-b',
              num: 'B)',
              promptEs: '¿Se trata de literatura culta o popular? Justifica tu respuesta.',
              promptHy: 'Հեղինակայի՞ն, թե՞ ժողովրդական գրականություն է։ Հիմնավորիր։',
              answerEs: 'Es un ejemplo de creación escrita individual, propia de la <strong>literatura culta</strong>, porque no procede de una tradición oral anónima.',
              answerHy: 'Սա անհատական գրավոր ստեղծագործության օրինակ է, որը բնորոշ է հեղինակային գրականությանը, քանի որ չի ծագում անանուն բանավոր ավանդույթից։'
            },
            {
              id: 'm3-e3-c',
              num: 'C)',
              promptEs: 'Explica las dos expresiones subrayadas.',
              promptHy: 'Բացատրիր երկու ընդգծված արտահայտությունները։',
              answerEs: '<strong>1. Los libros son ventanas abiertas a otros mundos.</strong><br>Significa que la lectura permite descubrir diferentes lugares, historias, culturas e ideas.<br><br><strong>2. El viejo reloj de la biblioteca parece animarlos a continuar.</strong><br>Significa que el ambiente de la biblioteca parece acompañar y motivar a los alumnos mientras trabajan.',
              answerHy: '<strong>1.</strong> Նշանակում է, որ ընթերցանությունը հնարավորություն է տալիս բացահայտել տարբեր վայրեր, պատմություններ, մշակույթներ և գաղափարներ։<br><br><strong>2.</strong> Նշանակում է, որ գրադարանի միջավայրը կարծես ուղեկցում և ոգևորում է աշակերտներին աշխատանքի ընթացքում։'
            },
            {
              id: 'm3-e3-d',
              num: 'D)',
              promptEs: 'Identifica las figuras literarias y explica por qué.',
              promptHy: 'Գտիր գեղարվեստական միջոցները և բացատրիր։',
              answerEs: '• La primera expresión es una <strong>metáfora</strong>, porque los libros se identifican con ventanas.<br>• La segunda es una <strong>personificación</strong>, porque al reloj se le atribuye la capacidad humana de animar a alguien.',
              answerHy: '• Առաջինը <strong>փոխաբերություն</strong> է, որովհետև գրքերը ներկայացվում են որպես պատուհաններ։<br>• Երկրորդը <strong>անձնավորում</strong> է, որովհետև ժամացույցին վերագրվում է մարդուն բնորոշ կարողություն՝ ուրիշներին քաջալերելը։'
            },
            {
              id: 'm3-e3-e',
              num: 'E)',
              promptEs: '¿A qué género literario pertenece? Busca dos características.',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում։ Նշիր երկու հատկանիշ։',
              answerEs: 'Pertenece al <strong>género dramático</strong> porque la historia se presenta a través de diálogos directos entre los personajes y aparecen acotaciones que indican sus movimientos y acciones.<br><strong>Dos pruebas del texto:</strong><br>• Diálogo: «CLARA: ¿Qué propones?».<br>• Acotación: «(Clara se acerca a la ventana...)».',
              answerHy: 'Պատկանում է դրամատիկական սեռին, որովհետև պատմությունը ներկայացվում է հերոսների անմիջական երկխոսություններով, և կան բեմական նշումներ, որոնք նկարագրում են նրանց շարժումներն ու գործողությունները։'
            },
            {
              id: 'm3-e3-f',
              num: 'F)',
              promptEs: '¿Tiene lenguaje literario? Justifica tu respuesta.',
              promptHy: 'Ունի՞ գեղարվեստական լեզու։ Հիմնավորիր։',
              answerEs: 'Sí, porque utiliza metáforas y personificaciones para expresar la importancia de los libros y dar mayor expresividad al diálogo.',
              answerHy: 'Այո՛, որովհետև օգտագործվում են փոխաբերություններ և անձնավորումներ՝ գրքերի կարևորությունն արտահայտելու և խոսքն ավելի պատկերավոր դարձնելու համար։'
            },
            {
              id: 'm3-e3-g',
              num: 'G)',
              promptEs: '¿Qué son las acotaciones? Escribe dos ejemplos del texto.',
              promptHy: 'Ի՞նչ են բեմական նշումները։ Գտիր երկու օրինակ։',
              answerEs: 'Son indicaciones que explican cómo es el escenario, qué hacen los personajes o cómo deben interpretar una escena. Generalmente aparecen entre paréntesis.<br><strong>Ejemplos:</strong> «(Observando los libros)» y «(Los tres sonríen y siguen organizando los libros)».',
              answerHy: 'Բեմական նշումները ցուցումներ են, որոնք նկարագրում են բեմը, հերոսների գործողությունները կամ նրանց վարքագիծը։ Դրանք սովորաբար գրվում են փակագծերի մեջ։',
              answerExtraHtml: '<div class="note-box"><strong>Para recordar:</strong> Diálogos + acotaciones + representación teatral = género dramático.</div>'
            }
          ]
        }
      ]
    },
    {
      id: 'm3-exam4',
      jumpLabel: 'Examen 4 (Romance)',
      title: 'EXAMEN 4 — Romance de la amistad',
      blocks: [
        {
          type: 'note',
          html: 'Género lírico · Poesía · Métrica y rima<br>Այս բաժնում սովորում ենք ճանաչել քնարական գրականությունը, հաշվել բանաստեղծության վանկերը և ճիշտ գրել 8–, 8a, ինչպես նաև տարբերել rima asonante և rima consonante։'
        },
        {
          type: 'reading',
          titleEs: 'Romance de la amistad',
          titleHy: 'Ընկերության ռոմանսը',
          footerNote: 'Poema original con forma de romance, creado para practicar los versos octosílabos y la rima asonante.',
          paragraphs: [
            {
              es: 'En la plaza de mi barrio<br><u>se despierta la mañana</u>;<br>un abuelo cuenta cuentos<br>y repica la campana.',
              hy: 'Մեր թաղամասի հրապարակում<br><u>արթնանում է առավոտը</u>,<br>մի պապիկ պատմություններ է պատմում,<br>և հնչում է զանգը։'
            },
            {
              es: 'Los pequeños salen juntos<br>con su risa por la plaza;<br>un vecino planta flores<br>para el huerto de la casa.',
              hy: 'Փոքրիկները միասին դուրս են գալիս՝<br>իրենց ծիծաղով լցնելով հրապարակը։<br>Մի հարևան ծաղիկներ է տնկում<br>տան բանջարանոցի համար։'
            },
            {
              es: 'Los amigos dan su ayuda<br>con galletas y manzanas;<br><u>la amistad es un tesoro</u><br>que guardamos en el alma.',
              hy: 'Ընկերներն իրենց օգնությունն են առաջարկում՝<br>թխվածքաբլիթներով և խնձորներով։<br><u>Ընկերությունը մի գանձ է</u>,<br>որը պահում ենք մեր հոգու խորքում։'
            }
          ]
        },
        {
          type: 'qaList',
          id: 'm3-e4-qa',
          showCounter: true,
          items: [
            {
              id: 'm3-e4-a',
              num: 'A)',
              promptEs: 'Resume el contenido del poema.',
              promptHy: 'Ամփոփիր բանաստեղծության հիմնական բովանդակությունը։',
              answerEs: 'El poema describe una mañana alegre en un barrio donde las personas comparten historias, ayudan a los demás y disfrutan de la convivencia. Destaca que la amistad es un valor muy importante.',
              answerHy: 'Բանաստեղծությունը նկարագրում է ուրախ առավոտ մի թաղամասում, որտեղ մարդիկ պատմություններ են պատմում, օգնում են միմյանց և հաճույքով միասին ժամանակ անցկացնում։ Այն ընդգծում է ընկերության կարևորությունը։'
            },
            {
              id: 'm3-e4-b',
              num: 'B)',
              promptEs: '¿Pertenece este poema a la literatura culta o popular? Justifica.',
              promptHy: 'Այս բանաստեղծությունը հեղինակայի՞ն է, թե՞ ժողովրդական։ Ինչո՞ւ։',
              answerEs: 'Este poema es una creación escrita de autor identificable, por lo que corresponde a la <strong>literatura culta</strong> en cuanto a su origen. Sin embargo, imita la forma del romance tradicional, característica de la poesía popular.',
              answerHy: 'Այս բանաստեղծությունը անհատական գրավոր ստեղծագործություն է, հետևաբար իր ծագմամբ հեղինակային գրականության օրինակ է։ Սակայն այն նմանակում է ավանդական ռոմանսի ձևը, որը բնորոշ է ժողովրդական պոեզիային։',
              answerExtraHtml: '<div class="note-box"><strong>Կարևոր․</strong> Միայն ռոմանսի ձև ունենալը չի նշանակում, որ ստեղծագործությունն անպայման ժողովրդական է։ Եթե քննության ժամանակ տրված է ավանդական, անանուն ռոմանս, պատասխանը կարող է լինել <em>literatura popular</em>։</div>'
            },
            {
              id: 'm3-e4-c',
              num: 'C)',
              promptEs: 'Explica estas dos expresiones: «se despierta la mañana» y «la amistad es un tesoro».',
              promptHy: 'Բացատրիր երկու արտահայտությունների իմաստները։',
              answerEs: '<strong>1. Se despierta la mañana:</strong> Significa que comienza un nuevo día y el barrio empieza a llenarse de vida y actividad.<br><br><strong>2. La amistad es un tesoro:</strong> Significa que la amistad es algo muy valioso que debemos cuidar y conservar.',
              answerHy: '<strong>1.</strong> Նշանակում է, որ սկսվում է նոր օրը, և թաղամասը աստիճանաբար լցվում է կյանքով ու ակտիվությամբ։<br><br><strong>2.</strong> Նշանակում է, որ ընկերությունը շատ թանկարժեք բան է, որը պետք է պահպանել և գնահատել։'
            },
            {
              id: 'm3-e4-d',
              num: 'D)',
              promptEs: '¿Qué figuras literarias aparecen?',
              promptHy: 'Ո՞ր գեղարվեստական միջոցներն են օգտագործված։',
              answerEs: '«Se despierta la mañana» es una <strong>personificación</strong>, porque se atribuye a la mañana la acción de despertarse, propia de los seres vivos. «La amistad es un tesoro» es una <strong>metáfora</strong>, porque se identifica la amistad con algo muy valioso.',
              answerHy: '«Արթնանում է առավոտը» արտահայտությունն <strong>անձնավորում</strong> է, որովհետև առավոտին վերագրվում է արթնանալու գործողությունը։ «Ընկերությունը գանձ է» արտահայտությունը <strong>փոխաբերություն</strong> է, որովհետև ընկերությունը ներկայացվում է որպես շատ արժեքավոր բան։'
            },
            {
              id: 'm3-e4-e',
              num: 'E)',
              promptEs: '¿A qué género literario pertenece?',
              promptHy: 'Ո՞ր գրական սեռին է պատկանում։',
              answerEs: 'Pertenece al <strong>género lírico</strong> porque está escrito en versos y expresa sentimientos positivos relacionados con la amistad, la alegría y la convivencia.',
              answerHy: 'Պատկանում է քնարական սեռին, որովհետև գրված է բանաստեղծական տողերով և արտահայտում է ընկերության, ուրախության ու համատեղ կյանքի հետ կապված դրական զգացմունքներ։'
            },
            {
              id: 'm3-e4-f',
              num: 'F)',
              promptEs: '¿Tiene lenguaje literario? Justifica.',
              promptHy: 'Ունի՞ գեղարվեստական լեզու։ Հիմնավորիր։',
              answerEs: 'Sí, porque utiliza un lenguaje poético con personificaciones, metáforas, ritmo y rima para expresar sentimientos.',
              answerHy: 'Այո՛, որովհետև օգտագործվում է բանաստեղծական լեզու՝ անձնավորումներով, փոխաբերություններով, ռիթմով և հանգերով՝ զգացմունքներ արտահայտելու համար։'
            },
            {
              id: 'm3-e4-g',
              num: 'G)',
              promptEs: 'Analiza la métrica y la rima: 1. ¿Cuántos versos tiene? · 2. ¿Cuántas sílabas métricas tiene cada verso? · 3. ¿Arte mayor o menor? · 4. ¿Qué versos tienen rima? · 5. ¿Asonante o consonante? · 6. Escribe el esquema métrico. · 7. ¿Por qué tiene forma de romance?',
              promptHy: '1. Քանի՞ տող ունի։ · 2. Քանի՞ բանաստեղծական վանկ ունի յուրաքանչյուր տողը։ · 3. Կարճաչա՞փ են, թե՞ երկարաչափ։ · 4. Ո՞ր տողերն են հանգավորվում։ · 5. Ասոնանսայի՞ն է, թե՞ կոնսոնանսային։ · 6. Գրի՛ր չափական սխեման։ · 7. Ինչո՞ւ ունի ռոմանսի ձև։',
              answerEs: '1. Tiene <strong>12 versos</strong>.<br>2. Cada verso tiene <strong>8 sílabas métricas</strong> (octosílabos).<br>3. Son de <strong>arte menor</strong>.<br>4. Riman los <strong>versos pares</strong> (2, 4, 6, 8, 10, 12); los impares quedan sueltos.<br>5. La rima es <strong>asonante</strong> (coinciden las vocales a–a en mañana, campana, plaza, casa, manzanas, alma).<br>6. Esquema: <strong>8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a</strong>.<br>7. Tiene forma de romance porque está compuesto por versos octosílabos, con rima asonante en los versos pares y versos impares sueltos.',
              answerHy: '1. Ունի <strong>12 տող</strong>։<br>2. Յուրաքանչյուր տողն ունի <strong>8 բանաստեղծական վանկ</strong>։<br>3. Կարճաչափ են (arte menor)։<br>4. Հանգավորվում են <strong>զույգ տողերը</strong> (2, 4, 6, 8, 10, 12), կենտերը անհանգ են։<br>5. Հանգը <strong>ասոնանսային է</strong> (համընկնում են a–a ձայնավորները)։<br>6. Սխեման՝ 8– / 8a / 8– / 8a...<br>7. Բանաստեղծությունն ունի ռոմանսի ձև, որովհետև բաղկացած է ութվանկ տողերից, զույգ տողերն ունեն ասոնանսային հանգ, իսկ կենտ տողերը անհանգ են։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Análisis detallado de la métrica',
          hy: 'Չափական մանրամասն վերլուծություն'
        },
        {
          type: 'metricCards',
          items: [
            {
              big: '8–',
              titleEs: '8 sílabas',
              descEs: 'Verso sin rima dentro del esquema',
              descHy: '8 վանկ, անհանգ տող'
            },
            {
              big: '8a',
              titleEs: '8 sílabas',
              descEs: 'Verso del grupo de rima «a»',
              descHy: '8 վանկ, «a» հանգախմբի տող'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Atención — Ուշադրություն',
          es: 'La letra «a» no significa que el verso termine en la letra a. Es el nombre del grupo de rima.',
          hy: '«a» տառը չի նշանակում, որ տողը պարտադիր պետք է ավարտվի a տառով։ Այն պարզապես հանգավորման խմբի նշանն է։'
        },
        {
          type: 'bilingual',
          label: '2. Contamos las sílabas — Հաշվում ենք վանկերը',
          es: '<strong>Primer verso:</strong> En / la / pla / za / de / mi / ba / rrio → 8 sílabas métricas → <strong>8–</strong><br><strong>Segundo verso:</strong> se / des / pier / ta / la / ma / ña / na → 8 sílabas métricas → <strong>8a</strong><br><strong>Octavo verso:</strong> pa / ra_el / huer / to / de / la / ca / sa → 8 sílabas métricas → <strong>8a</strong> (Aquí «para el» tiene sinalefa: ra_el cuenta como una sola sílaba métrica.)<br><strong>Undécimo verso:</strong> la_a / mis / tad / es / un / te / so / ro → 8 sílabas métricas → <strong>8–</strong> (También hay sinalefa en «la amistad»: la_a.)',
          hy: '«para el» արտահայտության մեջ ra_el ձայնավորները միանում են մեկ բանաստեղծական վանկի մեջ։ Սա կոչվում է <strong>sinalefa</strong>։ Նույնպես sinalefa կա «la amistad»-ում (la_a)։',
          isHtml: true
        },
        {
          type: 'table',
          headers: ['Verso', 'Palabra final', 'Sílabas', 'Esquema'],
          rows: [
            { cells: ['1', 'barrio', '8', '8–'] },
            { cells: ['2', 'mañana', '8', '<strong>8a</strong>'] },
            { cells: ['3', 'cuentos', '8', '8–'] },
            { cells: ['4', 'campana', '8', '<strong>8a</strong>'] },
            { cells: ['5', 'juntos', '8', '8–'] },
            { cells: ['6', 'plaza', '8', '<strong>8a</strong>'] },
            { cells: ['7', 'flores', '8', '8–'] },
            { cells: ['8', 'casa', '8', '<strong>8a</strong>'] },
            { cells: ['9', 'ayuda', '8', '8–'] },
            { cells: ['10', 'manzanas', '8', '<strong>8a</strong>'] },
            { cells: ['11', 'tesoro', '8', '8–'] },
            { cells: ['12', 'alma', '8', '<strong>8a</strong>'] }
          ]
        },
        {
          type: 'bilingual',
          label: '4. ¿Por qué es rima asonante?',
          es: 'Observamos los finales de los versos pares: <strong>mañana — campana — plaza — casa — manzanas — alma</strong>. Desde la última vocal tónica coinciden las vocales <strong>a–a</strong>, pero no todas las consonantes. La rima es asonante porque coinciden las vocales desde la última vocal acentuada, pero no todos los sonidos.',
          hy: 'Հանգը ասոնանսային է, որովհետև վերջին շեշտված ձայնավորից սկսած համընկնում են ձայնավորները (a–a), բայց ոչ բոլոր հնչյունները։',
          isHtml: true
        },
        {
          type: 'table',
          headers: ['Rima consonante', 'Rima asonante (клик для перевода)'],
          rows: [
            {
              cells: [
                'Coinciden todos los sonidos desde la última vocal tónica.<br><em>canción — corazón</em>',
                'Coinciden las vocales desde la última vocal tónica.<br><em>casa — rama</em>'
              ],
              hy: 'Համընկնում են բոլոր հնչյունները։ | Համընկնում են ձայնավորները։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: '5. ¿Por qué es un romance? (Respuesta modelo)',
          es: 'El poema tiene forma de romance porque está compuesto por versos octosílabos, con rima asonante en los versos pares y versos impares sueltos.',
          hy: 'Բանաստեղծությունն ունի ռոմանսի ձև, որովհետև բաղկացած է ութվանկ տողերից, զույգ տողերն ունեն ասոնանսային հանգ, իսկ կենտ տողերը անհանգ են։'
        },
        {
          type: 'note',
          html: '<strong>Կարևոր լրացում․</strong> Վանկերը հաշվելիս պետք է նաև հաշվի առնել տողի վերջին բառի շեշտը. <em>aguda</em> վերջավորության դեպքում ավելացնում ենք 1 վանկ, <em>esdrújula</em>-ի դեպքում հանում ենք 1, իսկ <em>llana</em>-ի դեպքում թիվը չի փոխվում։ Սա վերաբերում է բանաստեղծական չափին, ոչ թե բառի սովորական վանկերի քանակին։'
        }
      ]
    },
    {
      id: 'm3-figuras',
      jumpLabel: '5. Фигуры',
      title: 'PARTE 5. Figuras literarias — Գեղարվեստական արտահայտչամիջոցներ',
      blocks: [
        {
          type: 'note',
          html: 'Это отдельное задание, как на фотографии экзамена: <strong>«Busca las figuras literarias de las siguientes frases (3 puntos)»</strong>.'
        },
        {
          type: 'table',
          headers: ['Figura literaria', 'Explicación (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: ['<strong>Metáfora</strong>', 'Identifica una cosa con otra.'],
              hy: 'Փոխաբերություն․ մի առարկան ներկայացվում է մեկ ուրիշի միջոցով։'
            },
            {
              cells: ['<strong>Personificación</strong>', 'Atribuye cualidades o acciones humanas a algo no humano.'],
              hy: 'Անձնավորում․ ոչ մարդկային առարկային կամ երևույթին վերագրվում են մարդկային հատկանիշներ կամ գործողություններ։'
            },
            {
              cells: ['<strong>Hipérbole</strong>', 'Exageración expresiva.'],
              hy: 'Չափազանցություն․ միտքը դիտավորյալ չափազանցվում է։'
            },
            {
              cells: ['<strong>Anáfora</strong>', 'Repetición de palabras al comienzo de versos o expresiones.'],
              hy: 'Կրկնություն․ նույն բառի կրկնությունը տողերի կամ արտահայտությունների սկզբում։'
            },
            {
              cells: ['<strong>Ironía</strong>', 'Se expresa algo dando a entender lo contrario.'],
              hy: 'Հեգնանք․ ասում են մի բան, բայց ենթադրում են հակառակ իմաստը։'
            },
            {
              cells: ['<strong>Hipérbaton</strong>', 'Alteración del orden habitual de las palabras.'],
              hy: 'Շրջադասություն․ բառերի սովորական հերթականության փոփոխություն։'
            },
            {
              cells: ['<strong>Comparación o símil</strong>', 'Compara elementos con palabras como «como» o «parece».'],
              hy: 'Համեմատություն․ առարկաները համեմատվում են «como» և նման բառերով։'
            },
            {
              cells: ['<strong>Aliteración</strong>', 'Repetición expresiva de sonidos parecidos.'],
              hy: 'Նման հնչյունների կրկնություն՝ արտահայտչական ազդեցության համար։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio 1 — Identifica las figuras literarias',
          hy: 'Elige una respuesta para cada frase (0/6)'
        },
        {
          type: 'mcqQuiz',
          id: 'm3-fig-ex1',
          checkLabel: 'Проверить ответы (Comprobar respuestas)',
          items: [
            {
              id: 'm3-f1-1',
              num: '1.',
              promptEs: 'El despertador se enfadó conmigo esta mañana.',
              promptHy: 'Զարթուցիչը բարկացավ ինձ վրա այս առավոտ։',
              options: ['Hipérbole', 'Personificación', 'Metáfora', 'Ironía'],
              correctIndex: 1,
              answerEs: '<strong>Personificación</strong> — Se atribuye al despertador una emoción humana (enfadarse).',
              answerHy: '<strong>Անձնավորում</strong> — Զարթուցիչին վերագրվում է մարդկային զգացմունք՝ բարկանալը։'
            },
            {
              id: 'm3-f1-2',
              num: '2.',
              promptEs: 'Te he esperado un millón de años.',
              promptHy: 'Ես քեզ մի միլիոն տարի եմ սպասել։',
              options: ['Hipérbole', 'Anáfora', 'Comparación', 'Hipérbaton'],
              correctIndex: 0,
              answerEs: '<strong>Hipérbole</strong> — Exageración expresiva del tiempo.',
              answerHy: '<strong>Չափազանցություն</strong> — Սպասելու ժամանակի չափազանցում։'
            },
            {
              id: 'm3-f1-3',
              num: '3.',
              promptEs: 'Tus palabras son un refugio para mí.',
              promptHy: 'Քո խոսքերն ապաստան են ինձ համար։',
              options: ['Ironía', 'Personificación', 'Metáfora', 'Aliteración'],
              correctIndex: 2,
              answerEs: '<strong>Metáfora</strong> — Identifica las palabras con un refugio.',
              answerHy: '<strong>Փոխաբերություն</strong> — Խոսքերը ներկայացվում են որպես ապաստան։'
            },
            {
              id: 'm3-f1-4',
              num: '4.',
              promptEs: 'Ni el frío, ni la lluvia, ni el viento pudieron detenernos.',
              promptHy: 'Ոչ ցուրտը, ոչ անձրևը, ոչ քամին չկարողացան մեզ կանգնեցնել։',
              options: ['Comparación', 'Anáfora', 'Ironía', 'Hipérbole'],
              correctIndex: 1,
              answerEs: '<strong>Anáfora</strong> — Repetición de «ni» al comienzo de varias expresiones.',
              answerHy: '<strong>Անաֆորա</strong> — «ni» բառի կրկնություն արտահայտությունների սկզբում։'
            },
            {
              id: 'm3-f1-5',
              num: '5.',
              promptEs: '¡Qué puntual eres!, dijo cuando su amigo llegó una hora tarde.',
              promptHy: '«Ի՜նչ ճշտապահ ես», ասաց նա, երբ ընկերը մեկ ժամ ուշացավ։',
              options: ['Hipérbaton', 'Metáfora', 'Ironía', 'Personificación'],
              correctIndex: 2,
              answerEs: '<strong>Ironía</strong> — Dice lo contrario de lo que realmente piensa.',
              answerHy: '<strong>Հեգնանք</strong> — Ասում է հակառակը՝ ընդգծելու ուշացումը։'
            },
            {
              id: 'm3-f1-6',
              num: '6.',
              promptEs: 'De colores hermosos estaba lleno el jardín.',
              promptHy: 'Գեղեցիկ գույներով էր լցված այգին։',
              options: ['Hipérbaton', 'Aliteración', 'Hipérbole', 'Anáfora'],
              correctIndex: 0,
              answerEs: '<strong>Hipérbaton</strong> — Alteración del orden habitual de las palabras.',
              answerHy: '<strong>Շրջադասություն</strong> — Բառերի սովորական հերթականությունը փոխված է։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio 2 — Practica con otras frases',
          hy: 'Վարժություն 2 — Այլ նախադասություններ'
        },
        {
          type: 'qaList',
          id: 'm3-fig-ex2',
          showCounter: true,
          items: [
            {
              id: 'm3-f2-1',
              num: '1.',
              promptEs: 'La luna nos observaba desde el cielo.',
              promptHy: 'Լուսինը մեզ դիտում էր երկնքից։',
              answerEs: '<strong>Personificación.</strong> Se atribuye a la luna una acción humana: observar.',
              answerHy: '<strong>Անձնավորում։</strong> Լուսնին վերագրվում է մարդու գործողություն՝ դիտելը։'
            },
            {
              id: 'm3-f2-2',
              num: '2.',
              promptEs: 'Estoy tan cansado que podría dormir cien años.',
              promptHy: 'Այնքան հոգնած եմ, որ կարող եմ հարյուր տարի քնել։',
              answerEs: '<strong>Hipérbole.</strong> Se exagera la cantidad de tiempo que una persona podría dormir.',
              answerHy: '<strong>Չափազանցություն։</strong> Չափազանցվում է քնելու հնարավոր ժամանակը։'
            },
            {
              id: 'm3-f2-3',
              num: '3.',
              promptEs: 'Tus ojos brillan como estrellas.',
              promptHy: 'Քո աչքերը փայլում են աստղերի պես։',
              answerEs: '<strong>Comparación o símil.</strong> Se comparan los ojos con estrellas mediante la palabra «como».',
              answerHy: '<strong>Համեմատություն։</strong> Աչքերը համեմատվում են աստղերի հետ՝ «como» բառի օգնությամբ։'
            },
            {
              id: 'm3-f2-4',
              num: '4.',
              promptEs: 'Los suaves susurros sonaban en la sala.',
              promptHy: 'Մեղմ շշուկները հնչում էին դահլիճում։',
              answerEs: '<strong>Aliteración.</strong> Se repite el sonido «s» para crear un efecto sonoro.',
              answerHy: '<strong>Ալիտերացիա։</strong> «s» հնչյունը կրկնվում է՝ ստեղծելով հնչյունային ազդեցություն։'
            },
            {
              id: 'm3-f2-5',
              num: '5.',
              promptEs: 'La esperanza es una luz en el camino.',
              promptHy: 'Հույսը լույս է ճանապարհին։',
              answerEs: '<strong>Metáfora.</strong> La esperanza se identifica con una luz que orienta a las personas.',
              answerHy: '<strong>Փոխաբերություն։</strong> Հույսը ներկայացվում է որպես լույս, որն ուղղորդում է մարդկանց։'
            },
            {
              id: 'm3-f2-6',
              num: '6.',
              promptEs: 'Aquí estudiamos, aquí aprendemos, aquí crecemos.',
              promptHy: 'Այստեղ սովորում ենք, այստեղ յուրացնում ենք, այստեղ մեծանում ենք։',
              answerEs: '<strong>Anáfora.</strong> La palabra «aquí» se repite al comienzo de cada expresión.',
              answerHy: '<strong>Անաֆորա։</strong> «aquí» բառը կրկնվում է յուրաքանչյուր արտահայտության սկզբում։'
            }
          ]
        }
      ]
    },
    {
      id: 'm3-resumen',
      jumpLabel: '6. Resumen',
      title: 'PARTE 6. Cómo escribir un buen resumen — Ինչպես ճիշտ գրել ամփոփում',
      blocks: [
        {
          type: 'note',
          html: 'Սա հատկապես կարևոր է, որովհետև քննության առաջին հարցը հենց <strong>«Resume el texto»</strong> է։'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>Paso 1.</strong> ¿Quiénes son los protagonistas?',
              hy: 'Ովքե՞ր են գլխավոր հերոսները։ Մի՛ թվարկիր բոլոր երկրորդական կերպարներին։'
            },
            {
              es: '<strong>Paso 2.</strong> ¿Cuál es la situación o el problema principal?',
              hy: 'Ո՞րն է հիմնական իրավիճակը կամ խնդիրը։'
            },
            {
              es: '<strong>Paso 3.</strong> ¿Qué hacen los personajes?',
              hy: 'Ի՞նչ են անում հերոսները։ Ներկայացրու միայն հիմնական գործողությունները։'
            },
            {
              es: '<strong>Paso 4.</strong> ¿Cómo termina la historia?',
              hy: 'Ինչպե՞ս է ավարտվում պատմությունը։ Նշիր արդյունքը։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: '¿En qué tiempo verbal escribimos el resumen?',
          es: 'Texto original: «Una tarde <strong>llegó</strong> un viajero al pueblo».<br>Resumen: «Un viajero <strong>llega</strong> al pueblo y propone preparar una sopa».',
          hy: 'Սովորաբար գրական տեքստի ամփոփման համար օգտագործում ենք <strong>presente de indicativo</strong>, երրորդ դեմք։ Սկզբնական տեքստում գործողությունը անցյալում է՝ <em>llegó</em>, բայց ամփոփման մեջ կարող ենք օգտագործել ներկա ժամանակը՝ <em>llega</em>։',
          isHtml: true
        },
        {
          type: 'subtitle',
          es: 'Frases útiles para el examen',
          hy: 'Օգտակար արտահայտություններ քննության համար'
        },
        {
          type: 'list',
          items: [
            { es: 'El texto cuenta la historia de...', hy: 'Տեքստը պատմում է ...-ի պատմությունը։' },
            { es: 'La historia trata de...', hy: 'Պատմությունը ...-ի մասին է։' },
            { es: 'Al principio...', hy: 'Սկզբում...' },
            { es: 'Después...', hy: 'Այնուհետև...' },
            { es: 'Finalmente...', hy: 'Վերջապես...' },
            { es: 'Los protagonistas descubren que...', hy: 'Գլխավոր հերոսները բացահայտում են, որ...' },
            { es: 'El relato termina cuando...', hy: 'Պատմությունն ավարտվում է, երբ...' }
          ]
        },
        {
          type: 'bilingual',
          label: 'Evita — Խուսափիր',
          es: 'Evita copiar frases largas del texto, añadir opiniones personales y contar todos los detalles secundarios.',
          hy: 'Խուսափիր տեքստից երկար նախադասություններ արտագրելուց, անձնական կարծիքներ ավելացնելուց և երկրորդական մանրամասներ պատմելուց։'
        }
      ]
    },
    {
      id: 'm3-simulacro',
      jumpLabel: '7. Симулякр',
      title: 'PARTE 7. Simulacro rápido del examen — Վերջնական ստուգում',
      blocks: [
        {
          type: 'note',
          html: 'Այստեղ աշակերտը կարող է ինքնուրույն ստուգել՝ արդյոք կարողանում է արագ ճանաչել գրական սեռերն ու գեղարվեստական միջոցները։'
        },
        {
          type: 'mcqQuiz',
          id: 'm3-sim',
          checkLabel: 'Проверить экзамен (Corregir examen)',
          items: [
            {
              id: 'm3-s1',
              num: '1.',
              promptEs: 'Un narrador cuenta lo que ocurrió a unos amigos durante una excursión.',
              promptHy: 'Պատմողը ներկայացնում է, թե ինչ է պատահել ընկերների հետ էքսկուրսիայի ժամանակ։',
              options: ['Lírico', 'Narrativo', 'Dramático'],
              correctIndex: 1,
              answerEs: '<strong>Narrativo</strong> — Hay un narrador que cuenta acontecimientos.',
              answerHy: '<strong>Պատմողական (Narrativo)</strong> — Պատմողը ներկայացնում է իրադարձությունները։'
            },
            {
              id: 'm3-s2',
              num: '2.',
              promptEs: 'Un texto está formado por diálogos y acotaciones.',
              promptHy: 'Տեքստը կազմված է երկխոսություններից և բեմական նշումներից։',
              options: ['Dramático', 'Narrativo', 'Lírico'],
              correctIndex: 0,
              answerEs: '<strong>Dramático</strong> — Los diálogos y acotaciones son propios del teatro.',
              answerHy: '<strong>Դրամատիկական (Dramático)</strong> — Երկխոսություններն ու բեմական նշումները թատերական տեքստի հատկանիշներն են։'
            },
            {
              id: 'm3-s3',
              num: '3.',
              promptEs: 'Un poema expresa la alegría y la nostalgia del autor.',
              promptHy: 'Բանաստեղծությունն արտահայտում է հեղինակի ուրախությունն ու կարոտը։',
              options: ['Popular', 'Dramático', 'Lírico'],
              correctIndex: 2,
              answerEs: '<strong>Lírico</strong> — Expresa sentimientos y emociones en verso.',
              answerHy: '<strong>Քնարական (Lírico)</strong> — Արտահայտում է զգացմունքներ և հույզեր։'
            },
            {
              id: 'm3-s4',
              num: '4.',
              promptEs: 'Un cuento tradicional anónimo transmitido de generación en generación.',
              promptHy: 'Անանուն ավանդական հեքիաթ՝ փոխանցված սերնդեսերունդ։',
              options: ['Literatura culta', 'Literatura popular', 'Texto científico'],
              correctIndex: 1,
              answerEs: '<strong>Literatura popular</strong> — Es anónima y de transmisión oral tradicional.',
              answerHy: '<strong>Ժողովրդական գրականություն (Literatura popular)</strong> — Անանուն է և փոխանցվում է բանավոր ավանդույթով։'
            },
            {
              id: 'm3-s5',
              num: '5.',
              promptEs: '«El sol sonreía sobre el colegio». ¿Qué figura aparece?',
              promptHy: '«Արևը ժպտում էր դպրոցի վրա»։ Ո՞ր գեղարվեստական միջոցն է։',
              options: ['Hipérbole', 'Ironía', 'Personificación'],
              correctIndex: 2,
              answerEs: '<strong>Personificación</strong> — Atribuye al sol la acción humana de sonreír.',
              answerHy: '<strong>Անձնավորում</strong> — Արևին վերագրվում է մարդկային գործողություն՝ ժպտալը։'
            },
            {
              id: 'm3-s6',
              num: '6.',
              promptEs: '¿Qué significa «8–» en el esquema de un romance?',
              promptHy: 'Ի՞նչ է նշանակում «8–» ռոմանսի սխեմայում։',
              options: ['Ocho sílabas y verso suelto', 'Ocho palabras y rima consonante', 'Ocho sílabas con rima a'],
              correctIndex: 0,
              answerEs: '<strong>Ocho sílabas y verso suelto</strong> (no participa en la rima regular).',
              answerHy: '<strong>Ութ վանկ և անհանգ տող</strong>։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Qué debe saber el alumno antes de presentarse al examen',
          hy: 'Ի՞նչ պետք է իմանա աշակերտը · Lista de preparación'
        },
        {
          type: 'checklist',
          id: 'm3-checklist',
          title: 'Lista de preparación',
          resetLabel: 'Сбросить список (Reiniciar lista)',
          items: [
            'Resumir un texto en 3–5 frases usando sus propias palabras.',
            'Justificar la diferencia entre literatura culta y popular.',
            'Reconocer los géneros narrativo, lírico y dramático.',
            'Explicar expresiones figuradas con palabras sencillas.',
            'Identificar metáfora, personificación, hipérbole, anáfora, ironía e hipérbaton.',
            'Justificar si un texto utiliza lenguaje literario.',
            'Reconocer las acotaciones en un texto teatral.',
            'Contar sílabas métricas y reconocer la sinalefa.',
            'Diferenciar rima consonante y asonante.',
            'Explicar el esquema 8– / 8a de un romance.'
          ]
        },
        {
          type: 'note',
          html: '<strong>Совет по подготовке:</strong> сначала дайте ученику выполнить экзамен 1 самостоятельно, не заглядывая в ответы. Затем разберите его ответы на испанском с помощью армянских объяснений. На следующем занятии проведите экзамен 2, а после отдельно проверьте стихотворение и литературные средства. Главная цель — научиться не только выбирать правильный термин, но и объяснять ответ на испанском с помощью <strong>«porque»</strong> и примера из текста.'
        }
      ]
    }
  ]
};
