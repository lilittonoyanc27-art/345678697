export const MODULE_10 = {
  id: 'mod10',
  navLabel: 'El Romance',
  kicker: 'Lengua Castellana y Literatura · 1.º ESO (7-րդ դասարան) · Teoría, análisis métrico y preparación para el examen',
  title: 'EL ROMANCE — ԻՍՊԱՆԱԿԱՆ ՌՈՄԱՆՍ',
  subtitle: 'Teoría, análisis métrico («Romance del conde Olinos»), ejercicios interactivos y resumen para el examen.',
  introNotes: [
    'Այս թեման մանրամասն կբացատրենք իսպաներեն և հայերեն, որպեսզի աշակերտը կարողանա ինքնուրույն կարդալ ցանկացած <em>romance</em>, հաշվել վանկերը, որոշել հանգը և ճիշտ գրել <strong>8-, 8a</strong>։',
    'Հատկապես կարևոր է հասկանալ՝ ինչու ենք երբեմն գրում <strong>8-</strong>, նույնիսկ եթե երկու տողի վերջավորությունները նման են կամ համընկնում են։'
  ],
  sections: [
    {
      id: 'm10-que-es',
      jumpLabel: '1. Что такое романс',
      title: '1. ¿Qué es un romance? — Ի՞նչ է ռոմանսը',
      blocks: [
        {
          type: 'bilingual',
          es: 'Un romance es una composición poética formada tradicionalmente por una serie de versos octosílabos. Los versos pares tienen rima asonante y los impares quedan sueltos.',
          hy: 'Ռոմանսը իսպանական բանաստեղծական ստեղծագործություն է, որի տողերը սովորաբար ունեն 8 բանաստեղծական վանկ։ Զույգ համարներով տողերն ունեն ասոնանսային հանգ, իսկ կենտ համարներով տողերը չունեն պարտադիր հանգավորման սխեմա։'
        },
        {
          type: 'note',
          html: 'Ռոմանսները հաճախ պատմում են որևէ պատմություն, և շատ ավանդական ռոմանսներ պատկանում են ժողովրդական գրականությանը։ Սակայն գոյություն ունեն նաև հայտնի հեղինակների գրած ռոմանսներ։'
        },
        {
          type: 'subtitle',
          es: 'Las cuatro reglas principales',
          hy: 'Չորս հիմնական կանոնները'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>1. Versos octosílabos:</strong> cada verso tiene ocho sílabas métricas.',
              hy: 'Յուրաքանչյուր տողն ունի 8 բանաստեղծական վանկ։'
            },
            {
              es: '<strong>2. Rima asonante:</strong> coinciden las vocales desde la última vocal tónica.',
              hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են ձայնավորները։'
            },
            {
              es: '<strong>3. Versos pares:</strong> riman entre sí (2, 4, 6, 8...).',
              hy: 'Զույգ համարներով տողերը հանգավորվում են։'
            },
            {
              es: '<strong>4. Versos impares:</strong> quedan sueltos (1, 3, 5, 7...).',
              hy: 'Կենտ համարներով տողերը չունեն պարտադիր հանգ։'
            }
          ]
        }
      ]
    },
    {
      id: 'm10-esquema',
      jumpLabel: '2. 8-, 8a, 8-, 8a',
      title: '2. ¿Qué significan 8-, 8a, 8-, 8a?',
      blocks: [
        {
          type: 'schemeStrip',
          titleEs: 'Esquema métrico del romance: 8- 8a 8- 8a',
          titleHy: 'Ռոմանսի չափածո սխեման՝ 8- 8a 8- 8a (1-ից 8-րդ տողեր)',
          items: [
            { code: '8-', label: '1.º verso · Impar · Suelto' },
            { code: '8a', label: '2.º verso · Par · Rima a' },
            { code: '8-', label: '3.º verso · Impar · Suelto' },
            { code: '8a', label: '4.º verso · Par · Rima a' },
            { code: '8-', label: '5.º verso · Impar · Suelto' },
            { code: '8a', label: '6.º verso · Par · Rima a' },
            { code: '8-', label: '7.º verso · Impar · Suelto' },
            { code: '8a', label: '8.º verso · Par · Rima a' }
          ]
        },
        {
          type: 'subtitle',
          es: '¿Qué significa cada símbolo?',
          hy: 'Ի՞նչ է նշանակում յուրաքանչյուր նշանը'
        },
        {
          type: 'table',
          headers: ['Símbolo', 'Español (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['<strong>8</strong>', 'Ocho sílabas métricas.'], hy: '8 բանաստեղծական վանկ։' },
            { cells: ['<strong>-</strong>', 'Verso suelto, sin rima asignada.'], hy: 'Տող, որին հանգի տառ չի տրվում։' },
            { cells: ['<strong>a</strong>', 'Primera rima identificada.'], hy: 'Առաջին հանգային խմբի նշանը։' },
            { cells: ['<strong>8-</strong>', 'Ocho sílabas y verso suelto.'], hy: '8 վանկ, պարտադիր հանգավորման սխեմայից դուրս։' },
            { cells: ['<strong>8a</strong>', 'Ocho sílabas y rima «a».'], hy: '8 վանկ, պատկանում է «a» հանգային խմբին։' }
          ]
        },
        {
          type: 'note',
          html: '<strong>Muy importante — Շատ կարևոր</strong><br><strong>8-</strong> չի նշանակում 8-ից հանել ինչ-որ թիվ։<br>Գծիկը չի նշանակում, որ տողի վերջում ոչ մի ձայնավոր չի համընկնում մյուս տողերի հետ։ Այն նշանակում է, որ այդ տողը ռոմանսի պարտադիր հանգավորման սխեմայում չի մասնակցում զույգ տողերի հանգին։<br>Իսկ <strong>a</strong>-ն ուղղակի հանգային խմբի անունն է, ոչ թե պարտադիր «a» ձայնավորը։ Օրինակ՝ եթե զույգ տողերն ավարտվում են <em>vida, herida, salida</em>, կարող ենք նշել <strong>8a</strong>, որովհետև դրանք ունեն նույն հանգը՝ չնայած շեշտված ձայնավորների հաջորդականությունը <strong>í-a</strong> է։'
        }
      ]
    },
    {
      id: 'm10-rima',
      jumpLabel: '3. Рифмы',
      title: '3. Rima asonante y consonante — Ասոնանսային և լրիվ հանգ',
      blocks: [
        {
          type: 'subtitle',
          es: 'A. Rima asonante',
          hy: 'Ասոնանսային հանգ'
        },
        {
          type: 'bilingual',
          es: 'Coinciden las vocales desde la última vocal acentuada, pero no es necesario que coincidan las consonantes.',
          hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են ձայնավորները, իսկ բաղաձայնները կարող են տարբեր լինել։'
        },
        {
          type: 'wordCompare',
          headingEs: 'Ejemplo de rima asonante (vocales a-a)',
          headingHy: 'Ասոնանսային հանգի օրինակ (a-a ձայնավորներ)',
          words: [
            { word: 'casa', vowels: 'a-a' },
            { word: 'rama', vowels: 'a-a' },
            { word: 'plaza', vowels: 'a-a' }
          ],
          resultEs: 'Las vocales que riman son a-a, pero las consonantes son distintas.',
          resultHy: 'Շեշտված ձայնավորից սկսած բոլոր օրինակներում կա a-a։ Բաղաձայնները պարտադիր չէ, որ համընկնեն։'
        },
        {
          type: 'subtitle',
          es: 'B. Rima consonante',
          hy: 'Լրիվ հանգ'
        },
        {
          type: 'bilingual',
          es: 'Coinciden todos los sonidos desde la última vocal tónica: vocales y consonantes.',
          hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները։'
        },
        {
          type: 'list',
          items: [
            { es: '<strong>canción — emoción</strong> → -ón', hy: 'Համընկնում են և՛ ձայնավորը, և՛ բաղաձայնը (-ón)։' },
            { es: '<strong>camino — destino</strong> → -ino', hy: 'Համընկնում են բոլոր հնչյունները (-ino)։' },
            { es: '<strong>flor — amor</strong> → -or', hy: 'Համընկնում են բոլոր հնչյունները (-or)։' }
          ]
        },
        {
          type: 'subtitle',
          es: 'Diferencia fundamental',
          hy: 'Հիմնական տարբերությունը'
        },
        {
          type: 'table',
          headers: ['Asonante', 'Consonante (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['Coinciden las vocales.', 'Coinciden vocales y consonantes.'], hy: 'Համընկնում են ձայնավորները։ | Համընկնում են բոլոր համապատասխան հնչյունները։' },
            { cells: ['casa — rama', 'canción — emoción'], hy: 'Ասոնանսային օրինակ | Կոնսոնանսային (լրիվ) օրինակ' }
          ]
        },
        {
          type: 'bilingual',
          es: 'Atención: si dos palabras tienen rima consonante, también coinciden sus vocales. Pero en un romance tradicional se analiza el patrón general de los versos pares, que normalmente es asonante.',
          hy: 'Ուշադրություն․ եթե երկու բառ ունեն լրիվ (կոնսոնանսային) հանգ, նրանց ձայնավորները նույնպես համընկնում են։ Բայց ավանդական ռոմանսում դիտարկվում է զույգ տողերի ընդհանուր օրինաչափությունը, որը սովորաբար ասոնանսային է։'
        }
      ]
    },
    {
      id: 'm10-silabas',
      jumpLabel: '4. Подсчёт слогов',
      title: '4. CÓMO CONTAR LAS SÍLABAS — ԻՆՉՊԵՍ ՀԱՇՎԵԼ ՎԱՆԿԵՐԸ',
      blocks: [
        {
          type: 'note',
          html: 'Սա քննության ամենակարևոր մասն է։'
        },
        {
          type: 'bilingual',
          es: 'Para medir un verso no basta con contar las sílabas normales. Hay que aplicar las reglas de la métrica.',
          hy: 'Բավարար չէ պարզապես բառերը բաժանել վանկերի։ Պետք է հաշվի առնել բանաստեղծական վանկերի հաշվման հատուկ կանոնները։'
        },
        {
          type: 'subtitle',
          es: 'Paso 1. Divide las palabras en sílabas',
          hy: 'Քայլ 1. Բաժանիր բառերը վանկերի'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo',
          es: '<strong>Las flores brillan de noche.</strong> → 1 + 2 + 2 + 1 + 2 = <strong>8</strong> (Verso octosílabo)',
          hy: 'Ծաղիկները փայլում են գիշերը։ Ութվանկանի տող (բայց միշտ այսքան պարզ չի լինում)։'
        },
        {
          type: 'table',
          headers: ['Palabra', 'Sílabas'],
          rows: [
            { cells: ['Las', 'Las = 1'] },
            { cells: ['flores', 'flo-res = 2'] },
            { cells: ['brillan', 'bri-llan = 2'] },
            { cells: ['de', 'de = 1'] },
            { cells: ['noche', 'no-che = 2'] }
          ]
        },
        {
          type: 'subtitle',
          es: 'Paso 2. Aplica la sinalefa',
          hy: 'Քայլ 2. Կիրառիր սինալեֆա'
        },
        {
          type: 'bilingual',
          es: 'La sinalefa se produce cuando una palabra termina en vocal y la siguiente empieza por vocal, o por «h» muda seguida de vocal. Normalmente se cuentan como una sola sílaba métrica.',
          hy: 'Երբ մի բառը վերջանում է ձայնավորով, իսկ հաջորդը սկսվում է ձայնավորով (կամ չարտասանվող h-ով և ձայնավորով), այդ հարևան վանկերը սովորաբար միավորվում են մեկ բանաստեղծական վանկի մեջ։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo 1 — Mi amigo tiene una casa.',
          es: '<strong>Sin sinalefa:</strong> Mi / a / mi / go / tie / ne / u / na / ca / sa → 10 sílabas gramaticales<br><strong>Con sinalefa:</strong> Mi‿a / mi / go / tie / ne‿u / na / ca / sa → <strong>8 sílabas métricas</strong>',
          hy: 'Այստեղ միանում են՝ <strong>Mi + amigo → Mi‿a</strong> և <strong>tiene + una → ne‿u</strong>։ 10 սովորական վանկից ստանում ենք 8 բանաստեղծական վանկ։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo 2 — Con «h»',
          es: '<strong>La luna ilumina el horizonte.</strong> → ilumina + el → <strong>a‿el</strong> · la hermosa → <strong>la‿her</strong>',
          hy: 'Երբ կա չարտասանվող h, այն նույնպես կարող է թույլ տալ սինալեֆա՝ օրինակ <em>la hermosa</em>։<br><em>Կարևոր․</em> Կետադրական նշանը միշտ չէ, որ արգելում է սինալեֆան, իսկ արտասանության և բանաստեղծական ռիթմի պատճառով երբեմն սինալեֆա չի կատարվում։'
        },
        {
          type: 'subtitle',
          es: 'Paso 3. Observa la última palabra',
          hy: 'Քայլ 3. Վերջին բառի կանոնը'
        },
        {
          type: 'note',
          html: 'Իսպաներենում տողի վերջում գտնվող բառի շեշտադրությունը ազդում է վանկերի հաշվարկի վրա։'
        },
        {
          type: 'table',
          headers: ['Última palabra', 'Regla (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['<strong>Aguda</strong>', '+1 sílaba'], hy: 'Վերջին վանկը շեշտված է → գումարում ենք 1' },
            { cells: ['<strong>Llana</strong>', 'No se cambia'], hy: 'Նախավերջին վանկը շեշտված է → չենք փոխում' },
            { cells: ['<strong>Esdrújula</strong>', '-1 sílaba'], hy: 'Երրորդ վանկը վերջից շեշտված է → հանում ենք 1' }
          ]
        },
        {
          type: 'bilingual',
          label: 'A. Palabra aguda — +1',
          es: '<strong>mañanita de San Juan</strong><br>ma / ña / ni / ta / de / San / Juan → <strong>7 + 1 = 8</strong><br><em>Juan es una palabra monosílaba y tónica.</em>',
          hy: 'Սկզբում ստանում ենք 7, բայց քանի որ տողն ավարտվում է շեշտված միավանկ բառով (Juan), գումարում ենք մեկ բանաստեղծական վանկ։'
        },
        {
          type: 'bilingual',
          label: 'B. Palabra llana — Sin cambios',
          es: '<strong>Las flores brillan de noche.</strong><br>las / flo / res / bri / llan / de / no / che → <strong>8 = 8</strong>',
          hy: '<em>noche</em> բառի շեշտը նախավերջին վանկի վրա է։ Ոչինչ չենք գումարում կամ հանում։'
        },
        {
          type: 'bilingual',
          label: 'C. Palabra esdrújula — -1',
          es: '<strong>En el bosque canta un pájaro.</strong><br>Sin sinalefa: 10 sílabas · canta‿un (sinalefa: -1) · pájaro (esdrújula: -1) → <strong>10 - 1 - 1 = 8</strong>',
          hy: 'Առանց սինալեֆայի կա 10 սովորական վանկ։ <em>canta un</em> → կա սինալեֆա, ուստի մնում է 9։ <em>pájaro</em> → esdrújula է, ուստի հանում ենք ևս 1։ Այսպիսով, կրկին ստանում ենք ութվանկանի տող։'
        }
      ]
    },
    {
      id: 'm10-conde-olinos',
      jumpLabel: '5. Conde Olinos',
      title: '5. ANÁLISIS COMPLETO DE UN ROMANCE REAL («Romance del conde Olinos»)',
      blocks: [
        {
          type: 'note',
          html: 'Այժմ կվերցնենք իրական ավանդական ռոմանսի առաջին ութ տողերը՝ <em>Romance del conde Olinos</em>։ Սա անանուն ժողովրդական ռոմանս է, որը պահպանվել է տարբեր տարբերակներով։'
        },
        {
          type: 'reading',
          titleEs: '«Romance del conde Olinos» (Fragmento tradicional)',
          titleHy: '«Կոմս Օլինոսի ռոմանսը» (Ավանդական հատված)',
          paragraphs: [
            { es: '1. Madrugaba el conde Olinos,', hy: '1. Վաղ արթնանում էր կոմս Օլինոսը,', scheme: '8-' },
            { es: '2. mañanita de San Juan,', hy: '2. Սուրբ Հովհաննեսի առավոտյան,', scheme: '8a' },
            { es: '3. a dar agua a su caballo', hy: '3. իր ձիուն ջուր տալու համար', scheme: '8-' },
            { es: '4. a las orillas del mar.', hy: '4. ծովի ափերին։', scheme: '8a' },
            { es: '5. Mientras el caballo bebe', hy: '5. Մինչ ձին ջուր է խմում,', scheme: '8-' },
            { es: '6. canta un hermoso cantar:', hy: '6. մի գեղեցիկ երգ է երգում․', scheme: '8a' },
            { es: '7. las aves que iban volando', hy: '7. թռչող թռչունները', scheme: '8-' },
            { es: '8. se paraban a escuchar;', hy: '8. կանգ էին առնում՝ լսելու։', scheme: '8a' }
          ]
        },
        {
          type: 'subtitle',
          es: 'Análisis de cada verso',
          hy: 'Յուրաքանչյուր տողի վերլուծություն (Ստորև _ նշանը ցույց է տալիս սինալեֆան)'
        },
        {
          type: 'table',
          headers: ['Verso', 'División métrica', 'Resultado'],
          rows: [
            { cells: ['1', 'Ma / dru / ga / ba_el / con / de_O / li / nos', '<strong>8-</strong>'] },
            { cells: ['2', 'ma / ña / ni / ta / de / San / Juan', '<strong>7 + 1 = 8a</strong>'] },
            { cells: ['3', 'a / dar / a / gua_a / su / ca / ba / llo', '<strong>8-</strong>'] },
            { cells: ['4', 'a / las / o / ri / llas / del / mar', '<strong>7 + 1 = 8a</strong>'] },
            { cells: ['5', 'Mien / tras / el / ca / ba / llo / be / be', '<strong>8-</strong>'] },
            { cells: ['6', 'can / ta_un / her / mo / so / can / tar', '<strong>7 + 1 = 8a</strong>'] },
            { cells: ['7', 'las / a / ves / que_i / ban / vo / lan / do', '<strong>8-</strong>'] },
            { cells: ['8', 'se / pa / ra / ban / a_es / cu / char', '<strong>7 + 1 = 8a</strong>'] }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ahora analizamos la rima',
          hy: 'Հիմա որոշում ենք հանգը (նայում ենք միայն զույգ համարներով տողերին)'
        },
        {
          type: 'table',
          headers: ['Verso', 'Palabra final', 'Vocales de la rima', 'Esquema'],
          rows: [
            { cells: ['2', 'San Juan', 'a', '<strong>8a</strong>'] },
            { cells: ['4', 'mar', 'a', '<strong>8a</strong>'] },
            { cells: ['6', 'cantar', 'a', '<strong>8a</strong>'] },
            { cells: ['8', 'escuchar', 'a', '<strong>8a</strong>'] }
          ]
        },
        {
          type: 'bilingual',
          es: 'Desde la última vocal tónica coincide la vocal «a». Por eso, los versos pares tienen rima asonante.',
          hy: 'Բոլոր զույգ տողերում վերջին շեշտված ձայնավորից սկսած համընկնում է <strong>a</strong> ձայնավորը։ Բաղաձայնների ամբողջական համընկնում պարտադիր չէ։ Դրա համար բոլոր զույգ տողերին տալիս ենք նույն <strong>a</strong> նշանը։'
        }
      ]
    },
    {
      id: 'm10-por-que-8',
      jumpLabel: '6. Почему 8-?',
      title: '6. ¿Por qué escribimos 8- si algunas terminaciones coinciden?',
      blocks: [
        {
          type: 'note',
          html: 'Սա այն հարցն է, որը շատ հաճախ շփոթեցնում է աշակերտներին։ Վերադառնանք մեր ռոմանսին։'
        },
        {
          type: 'wordCompare',
          headingEs: 'Verso 3: a dar agua a su caballo (8-) · Verso 7: las aves que iban volando (8-)',
          headingHy: 'Երկու կենտ տողի վերջավորություններն էլ ունեն a-o ասոնանս, բայց երկուսն էլ 8- են',
          words: [
            { word: 'caballo', vowels: 'a-o (verso 3 → 8-)' },
            { word: 'volando', vowels: 'a-o (verso 7 → 8-)' }
          ],
          resultEs: 'En el romance, los versos impares no están obligados a seguir una rima fija. Aunque dos versos impares coincidan casualmente en sus vocales finales, siguen marcándose como versos sueltos dentro del esquema métrico del romance.',
          resultHy: 'Ռոմանսում կենտ տողերը չունեն պարտադիր և կանոնավոր հանգավորման կառուցվածք։ Եթե երկու կենտ տողերի վերջավորությունները պատահաբար համընկնում են, դա դեռ չի նշանակում, որ պետք է նրանց հանգային տառ տանք։'
        },
        {
          type: 'metricCards',
          items: [
            {
              big: '8- 8- 8- 8-',
              titleEs: '1, 3, 5, 7 → Versos impares',
              descEs: 'Quedan sueltos en el esquema del romance.',
              descHy: 'Կենտ տողերը ռոմանսի ավանդական սխեմայում մնում են անհանգ (8-)։'
            },
            {
              big: '8a 8a 8a 8a',
              titleEs: '2, 4, 6, 8 → Versos pares',
              descEs: 'Llevan la misma rima asonante.',
              descHy: 'Զույգ տողերը կրում են նույն ասոնանսային հանգը (8a)։'
            }
          ]
        },
        {
          type: 'note',
          html: 'Սա վերաբերում է ռոմանսի ավանդական սխեմային։ Այլ բանաստեղծական ձևերում հանգի տառերը որոշում ենք տվյալ ստեղծագործության իրական հանգավորման կառուցվածքի համաձայն։'
        }
      ]
    },
    {
      id: 'm10-reconocer',
      jumpLabel: '7. Как узнать на экзамене',
      title: '7. CÓMO RECONOCER UN ROMANCE EN EL EXAMEN',
      blocks: [
        {
          type: 'note',
          html: 'Եթե ուսուցիչը տա անծանոթ բանաստեղծություն և հարցնի՝ <strong>«¿Es un romance? Justifica tu respuesta»</strong>, աշակերտը պետք է կատարի հետևյալ քայլերը։'
        },
        {
          type: 'list',
          items: [
            { es: '<strong>1. Cuenta los versos.</strong>', hy: 'Հաշվիր տողերը։ Տողերը համարակալիր 1, 2, 3, 4 և այդպես շարունակ։' },
            { es: '<strong>2. Cuenta las sílabas métricas.</strong>', hy: 'Հաշվիր բանաստեղծական վանկերը։ Հաշվի առ sinalefa-ն և վերջին բառի շեշտադրությունը։ Ավանդական ռոմանսում յուրաքանչյուր տող պետք է ունենա 8 վանկ։' },
            { es: '<strong>3. Observa los versos pares.</strong>', hy: 'Նայիր զույգ տողերին։ Համեմատի՛ր 2-րդ, 4-րդ, 6-րդ, 8-րդ տողերի վերջին շեշտված ձայնավորից սկսվող հնչյունները։' },
            { es: '<strong>4. Comprueba la rima asonante.</strong>', hy: 'Ստուգիր ասոնանսային հանգը։ Եթե զույգ տողերում համընկնում են համապատասխան ձայնավորները, նշիր նույն հանգային տառը։' },
            { es: '<strong>5. Escribe el esquema.</strong>', hy: 'Գրիր սխեման։ Եթե բոլոր կանոնները համապատասխանում են, գրիր 8- 8a 8- 8a... և հիմնավորիր։' }
          ]
        },
        {
          type: 'bilingual',
          label: 'Respuesta modelo para el examen',
          es: 'Es un romance porque está formado por versos octosílabos, tiene rima asonante en los versos pares y los impares quedan sueltos. Su esquema métrico es 8-, 8a, 8-, 8a.',
          hy: 'Սա ռոմանս է, որովհետև ունի ութվանկանի տողեր, զույգ տողերում ասոնանսային հանգ, իսկ կենտ տողերը չունեն պարտադիր հանգ։ Սխեման է՝ 8- 8a 8- 8a։'
        }
      ]
    },
    {
      id: 'm10-resuelto',
      jumpLabel: '8. Разобранное упр.',
      title: '8. EJERCICIO RESUELTO — ՎԱՐԺՈՒԹՅՈՒՆ ԲԱՑԱՏՐՈՒԹՅԱՄԲ',
      blocks: [
        {
          type: 'reading',
          titleEs: 'Lee estos versos',
          titleHy: 'Կարդա՛ այս տողերը (Ejemplo original para practicar métrica)',
          paragraphs: [
            { es: 'Caminaba por el bosque,', hy: 'Քայլում էր անտառով,', scheme: '8-' },
            { es: 'bajo la luz de la luna;', hy: 'լուսնի լույսի տակ,', scheme: '8a' },
            { es: 'el viento movía ramas', hy: 'քամին շարժում էր ճյուղերը,', scheme: '8-' },
            { es: 'y buscaba su fortuna.', hy: 'և փնտրում էր իր բախտը։', scheme: '8a' }
          ]
        },
        {
          type: 'qaList',
          id: 'm10-resuelto-qa',
          showCounter: true,
          items: [
            {
              id: 'm10-r1',
              num: 'Pregunta 1.',
              promptEs: '¿Cuántas sílabas tiene cada verso?',
              promptHy: 'Քանի՞ վանկ ունի յուրաքանչյուր տողը։',
              answerEs: 'Todos los versos tienen <strong>8 sílabas</strong>.',
              answerHy: 'Բոլոր տողերն ունեն 8 վանկ։',
              answerExtraHtml: '<div class="table-wrap"><table class="study-table"><thead><tr><th>Verso</th><th>Separación</th><th>Resultado</th></tr></thead><tbody><tr><td>Caminaba por el bosque</td><td>Ca / mi / na / ba / por / el / bos / que</td><td><strong>8</strong></td></tr><tr><td>bajo la luz de la luna</td><td>ba / jo / la / luz / de / la / lu / na</td><td><strong>8</strong></td></tr><tr><td>el viento movía ramas</td><td>el / vien / to / mo / ví / a / ra / mas</td><td><strong>8</strong></td></tr><tr><td>y buscaba su fortuna</td><td>y / bus / ca / ba / su / for / tu / na</td><td><strong>8</strong></td></tr></tbody></table></div>'
            },
            {
              id: 'm10-r2',
              num: 'Pregunta 2.',
              promptEs: '¿Qué versos tienen rima asonante?',
              promptHy: 'Ո՞ր տողերն ունեն ասոնանսային հանգ։',
              answerEs: 'Los versos pares (2 y 4): <strong>luna</strong> (u-a) y <strong>fortuna</strong> (u-a).',
              answerHy: 'Նայենք զույգ տողերին՝ <strong>luna → u-a</strong>, <strong>fortuna → u-a</strong>։ Համընկնում են ձայնավորները, հետևաբար կա ասոնանսային հանգ։'
            },
            {
              id: 'm10-r3',
              num: 'Pregunta 3.',
              promptEs: 'Escribe el esquema métrico.',
              promptHy: 'Գրի՛ր չափածո սխեման։',
              answerEs: '1: <strong>8-</strong> · 2: <strong>8a</strong> · 3: <strong>8-</strong> · 4: <strong>8a</strong>',
              answerHy: '1 → 8- · 2 → 8a · 3 → 8- · 4 → 8a'
            },
            {
              id: 'm10-r4',
              num: 'Pregunta 4.',
              promptEs: '¿Es un romance?',
              promptHy: 'Սա ռոմա՞նս է։',
              answerEs: 'El fragmento presenta el esquema de un romance porque sus versos son octosílabos y los pares tienen rima asonante, mientras que los impares quedan sueltos.',
              answerHy: 'Այս հատվածն ունի ռոմանսին բնորոշ կառուցվածք։ Չորս տողից կազմված հատվածը կարող է լինել ռոմանսի մաս, բայց միայն այդ հատվածով միշտ չէ, որ հնարավոր է որոշել ամբողջ ստեղծագործության ձևը։'
            }
          ]
        }
      ]
    },
    {
      id: 'm10-practica',
      jumpLabel: '9. Практика',
      title: '9. PRÁCTICA DE EXAMEN — ԻՆՔՆՈՒՐՈՒՅՆ ԱՇԽԱՏԱՆՔ',
      blocks: [
        {
          type: 'subtitle',
          es: 'Ejercicio A. Comprueba si has entendido las reglas (0 / 6)',
          hy: 'Վարժություն A. Ստուգիր՝ արդյոք հասկացել ես կանոնները'
        },
        {
          type: 'mcqQuiz',
          id: 'm10-quiz-a',
          checkLabel: 'Проверить (Comprobar respuestas)',
          items: [
            {
              id: 'm10-qa1',
              num: '1.',
              promptEs: '¿Cuántas sílabas tiene normalmente cada verso de un romance?',
              promptHy: 'Քանի՞ վանկ ունի սովորաբար ռոմանսի յուրաքանչյուր տողը։',
              options: ['6', '7', '8', '11'],
              correctIndex: 2,
              answerEs: '<strong>8</strong> — Los versos del romance son octosílabos.',
              answerHy: '<strong>8</strong> — Ռոմանսի տողերը ութվանկանի են (octosílabos)։'
            },
            {
              id: 'm10-qa2',
              num: '2.',
              promptEs: '¿Qué versos tienen rima asonante en un romance?',
              promptHy: 'Ո՞ր տողերն ունեն ասոնանսային հանգ ռոմանսում։',
              options: ['Los impares', 'Los pares', 'Todos tienen rima consonante', 'Ninguno'],
              correctIndex: 1,
              answerEs: '<strong>Los pares</strong> (2, 4, 6, 8...).',
              answerHy: '<strong>Զույգ տողերը (los pares)</strong> — 2, 4, 6, 8...'
            },
            {
              id: 'm10-qa3',
              num: '3.',
              promptEs: '¿Qué significa el guion en «8-»?',
              promptHy: 'Ի՞նչ է նշանակում գծիկը «8-» նշման մեջ։',
              options: ['Restar una sílaba', 'Rima consonante', 'Verso suelto', 'Palabra aguda'],
              correctIndex: 2,
              answerEs: '<strong>Verso suelto</strong> (sin rima asignada en el esquema).',
              answerHy: '<strong>Անհանգ տող (verso suelto)</strong> — պարտադիր հանգավորման սխեմայից դուրս։'
            },
            {
              id: 'm10-qa4',
              num: '4.',
              promptEs: 'Si dos versos impares coinciden casualmente en las vocales, ¿dejan de ser sueltos?',
              promptHy: 'Եթե երկու կենտ տող պատահաբար համընկնում են ձայնավորներով, դրանք դադարո՞ւմ են անհանգ լինել։',
              options: ['Sí, siempre', 'No, mantienen el esquema del romance'],
              correctIndex: 1,
              answerEs: '<strong>No, mantienen el esquema del romance</strong> (se siguen marcando como 8-).',
              answerHy: '<strong>Ոչ, պահպանում են ռոմանսի սխեման</strong> — շարունակում են նշվել 8-։'
            },
            {
              id: 'm10-qa5',
              num: '5.',
              promptEs: 'Si un verso tiene siete sílabas y termina en una palabra aguda, ¿cuántas sílabas métricas tiene?',
              promptHy: 'Եթե տողն ունի 7 վանկ և ավարտվում է aguda բառով, քանի՞ բանաստեղծական վանկ ունի։',
              options: ['6', '7', '8', '9'],
              correctIndex: 2,
              answerEs: '<strong>8</strong> — Palabra aguda al final del verso: 7 + 1 = 8.',
              answerHy: '<strong>8</strong> — Քանի որ վերջին բառը aguda է, գումարում ենք +1 (7 + 1 = 8)։'
            },
            {
              id: 'm10-qa6',
              num: '6.',
              promptEs: '¿Cuál es el esquema de un romance tradicional?',
              promptHy: 'Ո՞րն է ավանդական ռոմանսի սխեման։',
              options: ['8a 8b 8a 8b', '8- 8a 8- 8a', '11A 11B 11A 11B'],
              correctIndex: 1,
              answerEs: '<strong>8- 8a 8- 8a</strong> — Versos octosílabos, impares sueltos y pares con rima asonante.',
              answerHy: '<strong>8- 8a 8- 8a</strong> — Ութվանկանի տողեր, կենտերը՝ անհանգ, զույգերը՝ «a» հանգով։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio B. Reconoce la rima',
          hy: 'Վարժություն B. Ճանաչիր հանգը (Եթե բոլոր հնչյուններն են համընկնում, ընտրիր «Consonante»)'
        },
        {
          type: 'mcqQuiz',
          id: 'm10-quiz-b',
          checkLabel: 'Проверить (Corregir)',
          items: [
            {
              id: 'm10-qb1',
              num: '1.',
              promptEs: 'casa — rama',
              promptHy: 'տուն — ճյուղ',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 0,
              answerEs: '<strong>Asonante</strong> — Coinciden solo las vocales (a-a); las consonantes (s / m) son distintas.',
              answerHy: '<strong>Ասոնանսային (Asonante)</strong> — Համընկնում են միայն ձայնավորները (a-a)։'
            },
            {
              id: 'm10-qb2',
              num: '2.',
              promptEs: 'canción — emoción',
              promptHy: 'երգ — հույզ',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 1,
              answerEs: '<strong>Consonante</strong> — Coinciden todos los sonidos desde la vocal tónica (-ón).',
              answerHy: '<strong>Կոնսոնանսային (Consonante)</strong> — Համընկնում են բոլոր հնչյունները (-ón)։'
            },
            {
              id: 'm10-qb3',
              num: '3.',
              promptEs: 'camino — suspiro',
              promptHy: 'ճանապարհ — հառաչանք',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 0,
              answerEs: '<strong>Asonante</strong> — Coinciden las vocales (i-o), pero las consonantes (n / r) son diferentes.',
              answerHy: '<strong>Ասոնանսային (Asonante)</strong> — Համընկնում են ձայնավորները (i-o), բաղաձայնները տարբեր են։'
            },
            {
              id: 'm10-qb4',
              num: '4.',
              promptEs: 'flor — amor',
              promptHy: 'ծաղիկ — սեր',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 1,
              answerEs: '<strong>Consonante</strong> — Coinciden vocales y consonantes (-or).',
              answerHy: '<strong>Կոնսոնանսային (Consonante)</strong> — Համընկնում են և՛ ձայնավորը, և՛ բաղաձայնը (-or)։'
            },
            {
              id: 'm10-qb5',
              num: '5.',
              promptEs: 'luna — fortuna',
              promptHy: 'լուսին — բախտ',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 1,
              answerEs: '<strong>Consonante</strong> — Coinciden todos los sonidos desde la última vocal tónica (-una).',
              answerHy: '<strong>Կոնսոնանսային (Consonante)</strong> — Քանի որ համընկնում են բոլոր հնչյունները (-una), դասակարգվում է որպես լրիվ (consonante) հանգ։'
            }
          ]
        }
      ]
    },
    {
      id: 'm10-resumen',
      jumpLabel: '10. Итоговая памятка',
      title: '10. RESUMEN DE TEORÍA — ԻՆՉ ՊԵՏՔ Է ՀԻՇԵԼ',
      blocks: [
        {
          type: 'table',
          headers: ['Concepto', 'Regla que debe recordar el alumno (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['<strong>Romance</strong>', 'Serie de versos octosílabos con rima asonante en los pares.'], hy: 'Ութվանկանի տողերի շարք՝ զույգ տողերում ասոնանսային հանգով։' },
            { cells: ['<strong>Octosílabo</strong>', 'Verso de 8 sílabas métricas.'], hy: '8 բանաստեղծական վանկ ունեցող տող։' },
            { cells: ['<strong>8-</strong>', '8 sílabas, verso suelto.'], hy: '8 վանկ, անհանգ տող։' },
            { cells: ['<strong>8a</strong>', '8 sílabas, pertenece a la rima «a».'], hy: '8 վանկ, պատկանում է «a» հանգին։' },
            { cells: ['<strong>Rima asonante</strong>', 'Coinciden las vocales desde la última vocal tónica.'], hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են ձայնավորները։' },
            { cells: ['<strong>Rima consonante</strong>', 'Coinciden todos los sonidos desde la última vocal tónica.'], hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են բոլոր հնչյունները։' },
            { cells: ['<strong>Sinalefa</strong>', 'Unión de vocales de palabras contiguas en una sola sílaba métrica.'], hy: 'Հարևան բառերի ձայնավորների միավորում մեկ բանաստեղծական վանկում։' },
            { cells: ['<strong>Aguda</strong>', 'Se suma una sílaba.'], hy: 'Գումարվում է 1 վանկ (+1)։' },
            { cells: ['<strong>Llana</strong>', 'No se suma ni se resta.'], hy: 'Ոչինչ չի գումարվում և չի հանվում (=)։' },
            { cells: ['<strong>Esdrújula</strong>', 'Se resta una sílaba.'], hy: 'Հանվում է 1 վանկ (-1)։' }
          ]
        },
        {
          type: 'subtitle',
          es: 'Respuesta completa que puede memorizar el alumno',
          hy: 'Ամբողջական պատասխան, որը աշակերտը կարող է անգիր սովորել'
        },
        {
          type: 'bilingual',
          es: 'El romance es una composición poética formada por una serie de versos octosílabos. Presenta rima asonante en los versos pares y los impares quedan sueltos. Su esquema métrico es 8-, 8a, 8-, 8a, 8-, 8a. Para medir los versos, debemos tener en cuenta la sinalefa y la acentuación de la última palabra.',
          hy: 'Ռոմանսը բանաստեղծական ձև է, որտեղ տողերն ունեն 8 վանկ։ Զույգ տողերում ձայնավորներով հանգ կա, իսկ կենտ տողերը չունեն պարտադիր հանգ։ Վանկերը հաշվելիս պետք է ուշադրություն դարձնել սինալեֆային և տողի վերջին բառի շեշտադրությանը։'
        },
        {
          type: 'note',
          html: '<strong>Ամենակարևոր տարբերությունը՝</strong> <strong>8</strong> թիվը վերաբերում է վանկերին, իսկ <strong>-</strong> և <strong>a</strong> նշանները՝ հանգին։ Այդ երկու բաները միշտ որոշում ենք առանձին։'
        }
      ]
    }
  ]
};
