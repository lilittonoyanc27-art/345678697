export const MODULE_1 = {
  id: 'mod1',
  navLabel: 'Основы и романс',
  kicker: 'Preparación para el examen · 7.º curso',
  title: 'Preparación para el examen – 7.º curso',
  subtitle: 'Քննության նախապատրաստում · Իսպաներեն և հայերեն',
  sections: [
    {
      id: 'm1-temas',
      jumpLabel: 'Темы',
      title: 'Temas / Թեմաներ',
      blocks: [
        {
          type: 'list',
          items: [
            {
              es: '1. Figuras literarias y sus niveles',
              hy: 'Գրական պատկերավորման միջոցները և դրանց մակարդակները։'
            },
            {
              es: '2. El romance y la métrica',
              hy: 'Ռոմանս և բանաստեղծական տողերի վանկերի հաշվարկ։'
            },
            {
              es: '3. Rima asonante y consonante',
              hy: 'Ասոնանսային և կոնսոնանսային հանգավորում։'
            },
            {
              es: '4. El mito, la leyenda y el cuento',
              hy: 'Առասպել, լեգենդ և պատմվածք։'
            },
            {
              es: '5. Ejercicios de examen',
              hy: 'Քննական վարժություններ։'
            }
          ]
        }
      ]
    },
    {
      id: 'm1-romance',
      jumpLabel: '1. Романс',
      title: 'PARTE 1. El romance — Ռոմանս',
      blocks: [
        {
          type: 'subtitle',
          es: '1. ¿Qué es un romance?',
          hy: 'Ի՞նչ է ռոմանսը։'
        },
        {
          type: 'bilingual',
          es: 'El romance es una composición poética que normalmente cuenta una historia. Tiene unas características especiales:',
          hy: 'Ռոմանսը բանաստեղծական ստեղծագործություն է, որը սովորաբար պատմում է որևէ դեպք կամ պատմություն։'
        },
        {
          type: 'list',
          items: [
            {
              es: 'Sus versos son octosílabos: tienen 8 sílabas métricas.',
              hy: 'Տողերը սովորաբար ունեն 8 բանաստեղծական վանկ։'
            },
            {
              es: 'Los versos pares (2, 4, 6, 8...) tienen rima asonante.',
              hy: 'Զույգ տողերը (2, 4, 6, 8...) ունեն ասոնանսային հանգավորում։'
            },
            {
              es: 'Los versos impares (1, 3, 5, 7...) quedan sueltos, es decir, no siguen la rima común.',
              hy: 'Կենտ տողերը (1, 3, 5, 7...) չեն մասնակցում ընդհանուր հանգավորման սխեմային։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '2. ¿Qué significan 8– y 8a?',
          hy: 'Սա ամենակարևոր մասն է քննության համար։'
        },
        {
          type: 'metricCards',
          items: [
            {
              big: '8–',
              titleEs: 'Verso suelto',
              descEs: '8 sílabas, sin rima en el esquema',
              descHy: '8 վանկ, առանց ընդհանուր հանգավորման'
            },
            {
              big: '8a',
              titleEs: 'Verso con rima',
              descEs: '8 sílabas, rima del grupo a',
              descHy: '8 վանկ, «a» խմբի հանգավորում'
            }
          ]
        },
        {
          type: 'schemeStrip',
          titleEs: 'Esquema habitual del romance',
          titleHy: 'Ռոմանսի սովորական սխեման',
          items: [
            { code: '8–', label: 'Verso 1' },
            { code: '8a', label: 'Verso 2' },
            { code: '8–', label: 'Verso 3' },
            { code: '8a', label: 'Verso 4' }
          ]
        },
        {
          type: 'bilingual',
          label: 'Muy importante / Շատ կարևոր',
          es: 'La letra <strong>a</strong> no significa obligatoriamente que la palabra termine en «a». Es el nombre que damos a un grupo de rima.',
          hy: '<strong>a</strong> տառը պարզապես հանգավորման խմբի նշանն է։ Պարտադիր չէ, որ բառը վերջանա a տառով։',
          isHtml: true
        },
        {
          type: 'subtitle',
          es: '3. Analizamos exactamente el romance de la imagen',
          hy: 'Վերլուծում ենք նկարի ռոմանսը'
        },
        {
          type: 'reading',
          titleEs: 'Romance de ejemplo',
          titleHy: 'Օրինակ ռոմանս',
          paragraphs: [
            { es: '1. Por la tarde leo cuentos,', hy: '1. Կեսօրից հետո պատմվածքներ եմ կարդում,', scheme: '8–' },
            { es: '2. y paseo por la plaza.', hy: '2. և զբոսնում եմ հրապարակով։', scheme: '8a' },
            { es: '3. Mis amigos ríen juntos,', hy: '3. Իմ ընկերները միասին ծիծաղում են,', scheme: '8–' },
            { es: '4. caminamos hasta casa.', hy: '4. քայլում ենք մինչև տուն։', scheme: '8a' }
          ]
        },
        {
          type: 'bilingual',
          label: '¿Por qué «cuentos» y «juntos» tienen 8– aunque se parecen?',
          es: 'Para reconocer una rima, no basta con mirar las últimas letras. Hay que comparar los sonidos <strong>desde la última vocal tónica</strong>.',
          hy: 'Սա հենց այն հարցն է, որը կարող է շփոթեցնել աշակերտին։ Հանգավորումը որոշելու համար բավարար չէ նայել բառերի վերջին տառերին։ Պետք է համեմատել հնչյունները՝ սկսած վերջին շեշտված ձայնավորից։',
          isHtml: true
        },
        {
          type: 'wordCompare',
          headingEs: 'Versos 1 y 3',
          headingHy: '1-ին և 3-րդ տողեր',
          words: [
            { word: 'cuentos', vowels: 'e – o' },
            { word: 'juntos', vowels: 'u – o' }
          ],
          resultEs: 'e–o ≠ u–o → No riman',
          resultHy: 'Թեև երկու բառերն էլ ավարտվում են «-tos»-ով, շեշտված ձայնավորները տարբեր են։ Հետևաբար այս բառերը չեն հանգավորվում։'
        },
        {
          type: 'wordCompare',
          headingEs: 'Versos 2 y 4',
          headingHy: '2-րդ և 4-րդ տողեր',
          words: [
            { word: 'plaza', vowels: 'a – a' },
            { word: 'casa', vowels: 'a – a' }
          ],
          resultEs: 'a–a = a–a → Rima asonante',
          resultHy: 'Երկու բառերում էլ շեշտված ձայնավորից սկսած համընկնում են a–a ձայնավորները։ Դրանք ունեն ասոնանսային հանգավորում։'
        },
        {
          type: 'bilingual',
          label: 'Conclusión / Եզրակացություն',
          es: 'En un romance, los versos impares se marcan normalmente con un guion (–), porque no participan en la rima regular de los versos pares. Incluso si dos versos impares coincidieran casualmente en sus sonidos, no cambiaríamos automáticamente el esquema del romance.',
          hy: 'Ռոմանսում կենտ տողերը սովորաբար նշվում են գծիկով (–), քանի որ չեն մասնակցում զույգ տողերի կանոնավոր հանգավորմանը։ Նույնիսկ եթե երկու կենտ տող պատահաբար նման հնչյուններ ունենան, դա ինքնաբերաբար չի փոխում ռոմանսի հիմնական սխեման։'
        },
        {
          type: 'subtitle',
          es: '4. Cómo contar las sílabas',
          hy: 'Ինչպե՞ս հաշվել վանկերը։ Ահա նկարում եղած 4 տողերի բաժանումը։'
        },
        {
          type: 'table',
          headers: ['Verso', 'División en sílabas', 'Total'],
          rows: [
            { cells: ['Por la tarde leo cuentos', 'Por / la / tar / de / le / o / cuen / tos', '<strong>8</strong>'] },
            { cells: ['y paseo por la plaza', 'y / pa / se / o / por / la / pla / za', '<strong>8</strong>'] },
            { cells: ['Mis amigos ríen juntos', 'Mis / a / mi / gos / rí / en / jun / tos', '<strong>8</strong>'] },
            { cells: ['caminamos hasta casa', 'ca / mi / na / mos / has / ta / ca / sa', '<strong>8</strong>'] }
          ]
        },
        {
          type: 'bilingual',
          label: 'Reglas adicionales',
          es: 'Reglas adicionales (haz clic en cada regla para ver la traducción al armenio)',
          hy: 'Լրացուցիչ կանոններ (սեղմիր յուրաքանչյուր կանոնի վրա՝ հայերենը տեսնելու համար)'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>Sinalefa:</strong> cuando una palabra termina en vocal y la siguiente empieza por vocal, normalmente se cuentan juntas en una sola sílaba métrica.',
              hy: '<strong>Սինալեֆա:</strong> երբ մի բառ ավարտվում է ձայնավորով, իսկ հաջորդը սկսվում է ձայնավորով, դրանք սովորաբար հաշվվում են որպես մեկ բանաստեղծական վանկ։'
            },
            {
              es: '<strong>Palabra aguda:</strong> si el verso termina en palabra aguda, se suma 1 sílaba.',
              hy: 'Եթե տողը ավարտվում է վերջին վանկի վրա շեշտ ունեցող բառով, ավելացնում ենք 1 վանկ։'
            },
            {
              es: '<strong>Palabra llana:</strong> no se suma ni se resta nada.',
              hy: 'Եթե շեշտը նախավերջին վանկի վրա է, վանկերի թիվը չի փոխվում։'
            },
            {
              es: '<strong>Palabra esdrújula:</strong> si termina en palabra esdrújula, se resta 1 sílaba.',
              hy: 'Եթե շեշտը վերջից երրորդ վանկի վրա է, հանում ենք 1 վանկ։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Ejemplo de sinalefa / Սինալեֆայի օրինակ',
          es: '«mi amigo»: mi + a se unen en una sola sílaba métrica → <em>mia-mi-go</em>.',
          hy: '«mi amigo» արտահայտությունում mi և a ձայնավորները միանում են, և ստացվում է 3 բանաստեղծական վանկ։',
          isHtml: true
        },
        {
          type: 'subtitle',
          es: '5. Rima asonante y consonante',
          hy: 'Ասոնանսային և կոնսոնանսային հանգավորում'
        },
        {
          type: 'table',
          headers: ['Tipo', 'Explicación en español (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: [
                '<strong>Rima asonante</strong>',
                'Coinciden solo las vocales desde la última vocal tónica. Ej.: plaza / casa.'
              ],
              hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են միայն ձայնավորները։'
            },
            {
              cells: [
                '<strong>Rima consonante</strong>',
                'Coinciden todos los sonidos desde la última vocal tónica. Ej.: canción / corazón.'
              ],
              hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են բոլոր հնչյունները։'
            },
            {
              cells: [
                '<strong>Verso suelto</strong>',
                'No participa en la rima regular del poema o de la estrofa.'
              ],
              hy: 'Չի մասնակցում բանաստեղծության կամ տան կանոնավոր հանգավորմանը։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Para el examen / Քննության համար հիշիր',
          es: 'El romance combina versos octosílabos, rima asonante en los versos pares y versos impares sueltos.',
          hy: 'Ռոմանսը ունի 8-վանկանի տողեր, զույգ տողերում՝ ասոնանսային հանգավորում, իսկ կենտ տողերը հանգավորման ընդհանուր սխեմայից դուրս են։'
        }
      ]
    },
    {
      id: 'm1-figuras',
      jumpLabel: '2. Фигуры речи',
      title: 'PARTE 2. Figuras literarias y sus niveles',
      blocks: [
        {
          type: 'subtitle',
          es: '1. Los tres niveles',
          hy: 'Երեք մակարդակները · Քննության ժամանակ պետք է որոշել՝ գրական պատկերավորման միջոցը որ մակարդակին է պատկանում։'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>Nivel fónico:</strong> Se relaciona con los sonidos de las palabras. <em>Pregunta clave: ¿Qué sonidos escucho?</em>',
              hy: '<strong>Հնչյունային մակարդակ:</strong> Կապված է բառերի հնչյունների, դրանց նմանության և կրկնության հետ։ <em>Հիմնական հարց՝ Ի՞նչ հնչյուններ եմ լսում։</em>'
            },
            {
              es: '<strong>Nivel morfosintáctico:</strong> Se relaciona con el orden, la repetición y la organización de las palabras. <em>Pregunta clave: ¿Cómo está construida la frase?</em>',
              hy: '<strong>Ձևաբանական-շարահյուսական մակարդակ:</strong> Կապված է բառերի դասավորության, կրկնության, բացթողման և նախադասության կառուցվածքի հետ։ <em>Հիմնական հարց՝ Ինչպե՞ս է կառուցված նախադասությունը։</em>'
            },
            {
              es: '<strong>Nivel semántico:</strong> Se relaciona con el significado de las palabras y las expresiones. <em>Pregunta clave: ¿Qué significa realmente?</em>',
              hy: '<strong>Իմաստային մակարդակ:</strong> Կապված է բառերի և արտահայտությունների իմաստի, փոխաբերական նշանակության ու պատկերավոր արտահայտման հետ։ <em>Հիմնական հարց՝ Ի՞նչ է իրականում նշանակում։</em>'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '2. Nivel fónico',
          hy: 'Հնչյունային մակարդակ'
        },
        {
          type: 'figuresGrid',
          items: [
            {
              nameEs: 'Aliteración',
              nameHy: 'Հնչյունների կրկնություն',
              defEs: 'Repetición de un mismo sonido o de sonidos parecidos para crear un efecto especial.',
              defHy: 'Նույն կամ նման հնչյունների կրկնություն՝ հատուկ հնչողություն ստեղծելու համար։',
              exampleEs: 'Sofía susurra suavemente.',
              exampleHy: 'Սոֆիան մեղմ շշնջում է։',
              noteEs: 'Se repite el sonido «s».',
              noteHy: 'Կրկնվում է «s» հնչյունը։'
            },
            {
              nameEs: 'Onomatopeya',
              nameHy: 'Ձայնանմանություն',
              defEs: 'Palabra que imita un sonido real, como el de un animal, un objeto o la naturaleza.',
              defHy: 'Բառ, որը նմանակում է կենդանու, առարկայի կամ բնության իրական ձայնը։',
              exampleEs: 'El reloj hace tic-tac.',
              exampleHy: 'Ժամացույցը տիկ-տակ է անում։',
              noteEs: '«Tic-tac» imita el sonido del reloj.',
              noteHy: '«Տիկ-տակ»-ը նմանակում է ժամացույցի ձայնը։'
            },
            {
              nameEs: 'Paronomasia',
              nameHy: 'Նմանահունչ բառերի խաղ',
              defEs: 'Uso de palabras que tienen sonidos muy parecidos, pero significados diferentes.',
              defHy: 'Նման հնչողությամբ, բայց տարբեր իմաստներով բառերի օգտագործում։',
              exampleEs: 'El hombre tenía hambre.',
              exampleHy: 'Տղամարդը քաղցած էր։',
              noteEs: '«Hombre» y «hambre» suenan parecido.',
              noteHy: '«Hombre» և «hambre» բառերը նման են հնչում։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '3. Nivel morfosintáctico',
          hy: 'Ձևաբանական-շարահյուսական մակարդակ'
        },
        {
          type: 'figuresGrid',
          items: [
            {
              nameEs: 'Anáfora',
              nameHy: 'Սկզբնային կրկնություն',
              defEs: 'Repetición de una o varias palabras al principio de varias frases o versos.',
              defHy: 'Միևնույն բառի կամ բառերի կրկնություն մի քանի նախադասությունների կամ բանաստեղծական տողերի սկզբում։',
              exampleEs: '<strong>Cada día</strong> estudio. <strong>Cada día</strong> aprendo. <strong>Cada día</strong> mejoro.',
              exampleHy: 'Ամեն օր սովորում եմ։ Ամեն օր նոր բան եմ յուրացնում։ Ամեն օր առաջադիմում եմ։',
              noteEs: 'Se repite «Cada día» al principio.',
              noteHy: '«Cada día»-ն կրկնվում է նախադասությունների սկզբում։'
            },
            {
              nameEs: 'Polisíndeton',
              nameHy: 'Շաղկապների բազմակի կրկնություն',
              defEs: 'Repetición intencionada de conjunciones, especialmente «y», más veces de lo necesario.',
              defHy: 'Շաղկապների, հատկապես «y» շաղկապի դիտավորյալ և ավելորդ կրկնություն։',
              exampleEs: '<strong>Y</strong> canta <strong>y</strong> ríe <strong>y</strong> baila <strong>y</strong> salta.',
              exampleHy: 'Եվ երգում է, և ծիծաղում է, և պարում է, և ցատկում է։',
              noteEs: 'Se repite la conjunción «y».',
              noteHy: 'Կրկնվում է «y» շաղկապը։'
            },
            {
              nameEs: 'Asíndeton',
              nameHy: 'Շաղկապների բացթողում',
              defEs: 'Eliminación de conjunciones que normalmente podrían unir palabras o frases.',
              defHy: 'Շաղկապների դիտավորյալ բացթողում բառերի կամ նախադասությունների միջև։',
              exampleEs: 'Llegué, miré, sonreí.',
              exampleHy: 'Եկա, նայեցի, ժպտացի։',
              noteEs: 'No aparece la conjunción «y».',
              noteHy: '«y» շաղկապը բացակայում է։'
            },
            {
              nameEs: 'Hipérbaton',
              nameHy: 'Բառերի սովորական դասավորության փոփոխություն',
              defEs: 'Alteración del orden habitual de las palabras en una oración.',
              defHy: 'Նախադասության բառերի սովորական շարադասության փոփոխություն։',
              exampleEs: '<strong>Orden habitual:</strong> Los niños llegaron de la montaña.<br><strong>Hipérbaton:</strong> De la montaña llegaron los niños.',
              exampleHy: 'Սովորական՝ Երեխաները եկան լեռից։<br>Շրջադասություն՝ Լեռից եկան երեխաները։',
              noteEs: 'El significado se mantiene, pero cambia el orden de las palabras.',
              noteHy: 'Իմաստը պահպանվում է, սակայն բառերի դասավորությունը փոխվում է։'
            },
            {
              nameEs: 'Enumeración',
              nameHy: 'Թվարկում',
              defEs: 'Presentación sucesiva de varios elementos, ideas, objetos o acciones.',
              defHy: 'Մի քանի առարկաների, գաղափարների կամ գործողությունների հաջորդական թվարկում։',
              exampleEs: 'Compré <strong>pan, leche, queso, fruta y arroz</strong>.',
              exampleHy: 'Ես գնեցի հաց, կաթ, պանիր, միրգ և բրինձ։',
              noteEs: 'Se mencionan varios elementos.',
              noteHy: 'Թվարկվում են մի քանի առարկաներ։'
            },
            {
              nameEs: 'Pleonasmo',
              nameHy: 'Ավելորդ, բայց շեշտադրող բառերի օգտագործում',
              defEs: 'Uso de palabras que repiten una información que ya está expresada, normalmente para dar énfasis.',
              defHy: 'Արդեն արտահայտված իմաստի կրկնություն լրացուցիչ բառերով՝ միտքն ընդգծելու համար։',
              exampleEs: 'Lo vi con mis propios ojos.',
              exampleHy: 'Ես դա տեսա իմ սեփական աչքերով։',
              noteEs: '«Con mis propios ojos» refuerza la idea de ver.',
              noteHy: '«Իմ սեփական աչքերով» արտահայտությունը ընդգծում է տեսնելու փաստը։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '4. Nivel semántico',
          hy: 'Իմաստային մակարդակ'
        },
        {
          type: 'figuresGrid',
          items: [
            {
              nameEs: 'Metáfora',
              nameHy: 'Փոխաբերություն',
              defEs: 'Identificación de una cosa con otra por alguna semejanza, sin usar necesariamente «como».',
              defHy: 'Մի առարկայի կամ երևույթի պատկերավոր ներկայացում մեկ ուրիշի միջոցով՝ դրանց նմանության հիման վրա։',
              exampleEs: 'Tus ojos son estrellas.',
              exampleHy: 'Քո աչքերը աստղեր են։',
              noteEs: 'Los ojos no son estrellas de verdad.',
              noteHy: 'Աչքերն իրականում աստղեր չեն։'
            },
            {
              nameEs: 'Personificación',
              nameHy: 'Անձնավորում',
              defEs: 'Atribuir cualidades, sentimientos o acciones humanas a animales, objetos o elementos de la naturaleza.',
              defHy: 'Կենդանիներին, առարկաներին կամ բնության երևույթներին մարդկային հատկություններ և գործողություններ վերագրել։',
              exampleEs: 'El viento cantaba entre los árboles.',
              exampleHy: 'Քամին երգում էր ծառերի միջով։',
              noteEs: 'El viento no canta como una persona.',
              noteHy: 'Քամին մարդու պես չի երգում։'
            },
            {
              nameEs: 'Hipérbole',
              nameHy: 'Չափազանցություն',
              defEs: 'Exageración intencionada de una situación, cantidad o sentimiento.',
              defHy: 'Իրավիճակի, քանակի կամ զգացմունքի դիտավորյալ չափազանցում։',
              exampleEs: 'Te he llamado mil veces.',
              exampleHy: 'Ես քեզ հազար անգամ զանգել եմ։',
              noteEs: 'No significa que realmente haya llamado mil veces.',
              noteHy: 'Դա չի նշանակում, որ մարդն իրականում հազար անգամ զանգել է։'
            },
            {
              nameEs: 'Ironía',
              nameHy: 'Հեգնանք',
              defEs: 'Decir algo dando a entender lo contrario, normalmente para expresar humor o una crítica.',
              defHy: 'Արտահայտել մի բան, բայց իրականում ակնարկել հակառակ իմաստը՝ հաճախ հումորի կամ քննադատության նպատակով։',
              exampleEs: 'Un estudiante llega una hora tarde y el profesor dice: <strong>«¡Qué puntual eres!»</strong>',
              exampleHy: 'Աշակերտը մեկ ժամ ուշանում է, իսկ ուսուցիչն ասում է. «Ի՜նչ ճշտապահ ես»։',
              noteEs: 'El profesor quiere decir que el alumno no es puntual.',
              noteHy: 'Ուսուցիչն իրականում նկատի ունի, որ աշակերտը ճշտապահ չէ։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '5. Resumen para memorizar',
          hy: 'Ամփոփում՝ անգիր սովորելու համար'
        },
        {
          type: 'table',
          headers: ['Nivel (клик для перевода)', 'Figuras literarias'],
          rows: [
            {
              cells: ['<strong>Fónico</strong>', 'Aliteración, Onomatopeya, Paronomasia'],
              hy: 'Հնչյունային մակարդակ'
            },
            {
              cells: ['<strong>Morfosintáctico</strong>', 'Anáfora, Polisíndeton, Asíndeton, Hipérbaton, Enumeración, Pleonasmo'],
              hy: 'Շարահյուսական (Ձևաբանական-շարահյուսական) մակարդակ'
            },
            {
              cells: ['<strong>Semántico</strong>', 'Metáfora, Personificación, Hipérbole, Ironía'],
              hy: 'Իմաստային մակարդակ'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Cómo distinguirlas rápidamente / Ինչպե՞ս արագ տարբերել',
          es: '• Repetición de sonidos → Aliteración.<br>• Repetición al principio de frases → Anáfora.<br>• Muchas conjunciones «y» → Polisíndeton.<br>• Ausencia de conjunciones → Asíndeton.<br>• Orden de palabras cambiado → Hipérbaton.<br>• Lista de elementos → Enumeración.<br>• Exageración → Hipérbole.<br>• Objeto que hace algo humano → Personificación.',
          hy: '• Հնչյունների կրկնություն → Aliteración<br>• Կրկնություն նախադասությունների սկզբում → Anáfora<br>• Շատ «y» շաղկապներ → Polisíndeton<br>• Շաղկապների բացակայություն → Asíndeton<br>• Բառերի փոխված դասավորություն → Hipérbaton<br>• Տարրերի թվարկում → Enumeración<br>• Չափազանցություն → Hipérbole<br>• Առարկան կատարում է մարդկային գործողություն → Personificación',
          isHtml: true
        },
        {
          type: 'bilingual',
          es: '<em>Una misma expresión puede contener más de una figura literaria. En un examen hay que fijarse en qué característica destaca la pregunta.</em>',
          hy: 'Նույն արտահայտության մեջ երբեմն կարող են լինել մի քանի պատկերավորման միջոցներ։ Քննության ժամանակ պետք է ուշադրություն դարձնել, թե հարցը հատկապես ինչ հատկանիշի մասին է։',
          isHtml: true
        }
      ]
    },
    {
      id: 'm1-mito',
      jumpLabel: '3. Миф, легенда, сказка',
      title: 'PARTE 3. El mito, la leyenda y el cuento',
      blocks: [
        {
          type: 'subtitle',
          es: '1. El mito',
          hy: 'Առասպել'
        },
        {
          type: 'bilingual',
          es: 'Un mito es una narración tradicional que intenta explicar el origen del mundo, de los fenómenos naturales o de algunas creencias. Normalmente aparecen dioses, seres sobrenaturales o héroes extraordinarios.',
          hy: 'Առասպելը ավանդական պատմություն է, որը փորձում է բացատրել աշխարհի, բնության երևույթների կամ որոշ հավատալիքների ծագումը։ Սովորաբար այնտեղ հանդիպում են աստվածներ, գերբնական էակներ կամ արտասովոր հերոսներ։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo',
          es: 'Un dios crea las estrellas para iluminar la noche. <em>(La historia explica el origen de las estrellas.)</em>',
          hy: 'Մի աստված ստեղծում է աստղերը, որպեսզի լուսավորի գիշերը։ <em>(Պատմությունը բացատրում է աստղերի ծագումը։)</em>',
          isHtml: true
        },
        {
          type: 'subtitle',
          es: '2. La leyenda',
          hy: 'Լեգենդ / ավանդազրույց'
        },
        {
          type: 'bilingual',
          es: 'Una leyenda es una narración tradicional que mezcla elementos reales con hechos fantásticos o sobrenaturales. Normalmente está relacionada con un lugar, una persona o un acontecimiento.',
          hy: 'Լեգենդը ավանդական պատմություն է, որտեղ իրական տարրերը միախառնվում են երևակայական կամ գերբնական իրադարձությունների հետ։ Հաճախ կապված է որոշակի վայրի, մարդու կամ դեպքի հետ։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo',
          es: 'Los habitantes de un pueblo cuentan que por las noches aparece una luz misteriosa junto a un antiguo castillo.',
          hy: 'Գյուղի բնակիչները պատմում են, որ գիշերները հին ամրոցի մոտ խորհրդավոր լույս է հայտնվում։'
        },
        {
          type: 'subtitle',
          es: '3. El cuento',
          hy: 'Պատմվածք / հեքիաթ'
        },
        {
          type: 'bilingual',
          es: 'Un cuento es una narración breve, generalmente en prosa, que cuenta una historia realista o fantástica. Tiene pocos personajes y una acción principal.',
          hy: 'Պատմվածքը կարճ արձակ պատմողական ստեղծագործություն է։ Այն կարող է լինել իրականությանը մոտ կամ երևակայական։ Սովորաբար ունի քիչ հերոսներ և մեկ հիմնական իրադարձություն։'
        },
        {
          type: 'bilingual',
          label: 'Partes del cuento / Պատմվածքի մասերը',
          es: '<strong>Inicio:</strong> se presentan los personajes y el lugar.<br><strong>Nudo:</strong> aparece el problema.<br><strong>Desenlace:</strong> se resuelve la historia.',
          hy: '<strong>Ներածություն (Inicio):</strong> ներկայացվում են հերոսներն ու վայրը։<br><strong>Հանգույց (Nudo):</strong> առաջանում է խնդիրը։<br><strong>Ավարտ / հանգուցալուծում (Desenlace):</strong> պատմությունը հանգուցալուծվում է։',
          isHtml: true
        },
        {
          type: 'subtitle',
          es: '4. Comparación',
          hy: 'Համեմատություն'
        },
        {
          type: 'table',
          headers: ['Tipo', 'Características (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: ['<strong>Mito</strong>', 'Dioses, orígenes, fenómenos naturales'],
              hy: 'Աստվածներ, ծագում, բնության երևույթներ'
            },
            {
              cells: ['<strong>Leyenda</strong>', 'Tradición, lugares conocidos, elementos fantásticos'],
              hy: 'Ավանդություն, իրական վայրեր, երևակայական տարրեր'
            },
            {
              cells: ['<strong>Cuento</strong>', 'Historia breve, personajes, inicio, nudo y desenlace'],
              hy: 'Կարճ պատմություն, հերոսներ, սկիզբ, զարգացում և ավարտ'
            },
            {
              cells: ['<strong>Romance</strong>', 'Narración en versos octosílabos, rima asonante en los pares'],
              hy: '8-վանկանի բանաստեղծական տողեր, զույգ տողերի ասոնանսային հանգավորում'
            }
          ]
        }
      ]
    },
    {
      id: 'm1-ejercicios',
      jumpLabel: '4. Упражнения',
      title: 'PARTE 4. Ejercicios para el examen — Քննական վարժություններ',
      blocks: [
        {
          type: 'subtitle',
          es: 'Ejercicio 1. Identifica la figura literaria',
          hy: 'Հրահանգ՝ Կարդա նախադասությունները և որոշիր պատկերավորման միջոցն ու մակարդակը։'
        },
        {
          type: 'bilingual',
          es: '<strong>Instrucción:</strong> Lee las frases e identifica la figura literaria y su nivel. (13 preguntas)',
          hy: '<strong>Հրահանգ․</strong> Կարդա նախադասությունները և որոշիր պատկերավորման միջոցն ու մակարդակը։ (13 հարց)',
          isHtml: true
        },
        {
          type: 'qaList',
          id: 'm1-ex1',
          showCounter: true,
          items: [
            {
              id: 'm1-ex1-1',
              num: '1.',
              promptEs: 'El viento me abrazó suavemente.',
              promptHy: 'Քամին ինձ մեղմ գրկեց։',
              answerEs: '<strong>Personificación</strong> (Nivel semántico) — Se atribuye al viento una acción humana: abrazar.',
              answerHy: '<strong>Անձնավորում</strong> (Իմաստային մակարդակ) — Քամուն վերագրվում է մարդկային գործողություն՝ գրկելը։'
            },
            {
              id: 'm1-ex1-2',
              num: '2.',
              promptEs: 'Nunca dejo de soñar. Nunca dejo de aprender.',
              promptHy: 'Երբեք չեմ դադարում երազել։ Երբեք չեմ դադարում սովորել։',
              answerEs: '<strong>Anáfora</strong> (Nivel morfosintáctico) — Se repite «Nunca dejo de» al principio de las frases.',
              answerHy: '<strong>Սկզբնային կրկնություն / Անաֆորա</strong> (Ձևաբանական-շարահյուսական մակարդակ) — «Nunca dejo de»-ն կրկնվում է նախադասությունների սկզբում։'
            },
            {
              id: 'm1-ex1-3',
              num: '3.',
              promptEs: 'Suenan suaves susurros.',
              promptHy: 'Հնչում են մեղմ շշուկներ։',
              answerEs: '<strong>Aliteración</strong> (Nivel fónico) — Se repite el sonido «s».',
              answerHy: '<strong>Հնչյունների կրկնություն / Ալիտերացիա</strong> (Հնչյունային մակարդակ) — Կրկնվում է «s» հնչյունը։'
            },
            {
              id: 'm1-ex1-4',
              num: '4.',
              promptEs: 'Y ríe y juega y canta.',
              promptHy: 'Եվ ծիծաղում է, և խաղում է, և երգում է։',
              answerEs: '<strong>Polisíndeton</strong> (Nivel morfosintáctico) — Repetición intencionada de la conjunción «y».',
              answerHy: '<strong>Շաղկապների բազմակի կրկնություն / Պոլիսինդետոն</strong> (Ձևաբանական-շարահյուսական մակարդակ) — Կրկնվում է «y» շաղկապը։'
            },
            {
              id: 'm1-ex1-5',
              num: '5.',
              promptEs: '¡Pum! La pelota cayó al suelo.',
              promptHy: 'Բա՛խ։ Գնդակը ընկավ գետնին։',
              answerEs: '<strong>Onomatopeya</strong> (Nivel fónico) — «¡Pum!» imita el sonido real de un golpe.',
              answerHy: '<strong>Ձայնանմանություն / Օնոմատոպեա</strong> (Հնչյունային մակարդակ) — «¡Pum!»-ը նմանակում է հարվածի ձայնը։'
            },
            {
              id: 'm1-ex1-6',
              num: '6.',
              promptEs: 'Sus manos eran dos flores.',
              promptHy: 'Նրա ձեռքերը երկու ծաղիկներ էին։',
              answerEs: '<strong>Metáfora</strong> (Nivel semántico) — Se identifican las manos con flores sin usar «como».',
              answerHy: '<strong>Փոխաբերություն / Մետաֆորա</strong> (Իմաստային մակարդակ) — Ձեռքերը ներկայացվում են որպես ծաղիկներ՝ առանց «como» բառի։'
            },
            {
              id: 'm1-ex1-7',
              num: '7.',
              promptEs: 'Lo escuché con mis propios oídos.',
              promptHy: 'Ես դա լսեցի իմ սեփական ականջներով։',
              answerEs: '<strong>Pleonasmo</strong> (Nivel morfosintáctico) — «Con mis propios oídos» repite y refuerza la idea de escuchar.',
              answerHy: '<strong>Պլեոնազմ</strong> (Ձևաբանական-շարահյուսական մակարդակ) — «Իմ սեփական ականջներով»-ը շեշտում է լսելու փաստը։'
            },
            {
              id: 'm1-ex1-8',
              num: '8.',
              promptEs: 'Corrí, salté, llegué.',
              promptHy: 'Վազեցի, ցատկեցի, հասա։',
              answerEs: '<strong>Asíndeton</strong> (Nivel morfosintáctico) — Eliminación de conjunciones («y») entre acciones.',
              answerHy: '<strong>Ասինդետոն</strong> (Ձևաբանական-շարահյուսական մակարդակ) — «y» շաղկապը բաց է թողնված։'
            },
            {
              id: 'm1-ex1-9',
              num: '9.',
              promptEs: 'Te he esperado cien años.',
              promptHy: 'Ես քեզ հարյուր տարի եմ սպասել։',
              answerEs: '<strong>Hipérbole</strong> (Nivel semántico) — Exageración intencionada del tiempo de espera.',
              answerHy: '<strong>Չափազանցություն / Հիպերբոլա</strong> (Իմաստային մակարդակ) — Սպասելու ժամանակի դիտավորյալ չափազանցում։'
            },
            {
              id: 'm1-ex1-10',
              num: '10.',
              promptEs: '«¡Qué temprano has llegado!», le dijo a quien llegó una hora tarde.',
              promptHy: '«Ի՜նչ շուտ ես եկել», ասաց նա նրան, ով մեկ ժամ ուշացել էր։',
              answerEs: '<strong>Ironía</strong> (Nivel semántico) — Dice «temprano» dando a entender lo contrario (tarde).',
              answerHy: '<strong>Հեգնանք / Իրոնիա</strong> (Իմաստային մակարդակ) — Ասում է «շուտ», բայց նկատի ունի հակառակը։'
            },
            {
              id: 'm1-ex1-11',
              num: '11.',
              promptEs: 'De la montaña bajaron los niños.',
              promptHy: 'Լեռից իջան երեխաները։',
              answerEs: '<strong>Hipérbaton</strong> (Nivel morfosintáctico) — Alteración del orden habitual («Los niños bajaron de la montaña»).',
              answerHy: '<strong>Շրջադասություն / Հիպերբատոն</strong> (Ձևաբանական-շարահյուսական մակարդակ) — Բառերի սովորական դասավորությունը փոխված է։'
            },
            {
              id: 'm1-ex1-12',
              num: '12.',
              promptEs: 'En el jardín había rosas, tulipanes, margaritas y lirios.',
              promptHy: 'Այգում կային վարդեր, կակաչներ, երիցուկներ և շուշաններ։',
              answerEs: '<strong>Enumeración</strong> (Nivel morfosintáctico) — Presentación sucesiva de varios elementos.',
              answerHy: '<strong>Թվարկում / Էնումերացիա</strong> (Ձևաբանական-շարահյուսական մակարդակ) — Թվարկվում են մի քանի ծաղիկներ։'
            },
            {
              id: 'm1-ex1-13',
              num: '13.',
              promptEs: 'El hombre tenía hambre.',
              promptHy: 'Տղամարդը քաղցած էր։',
              answerEs: '<strong>Paronomasia</strong> (Nivel fónico) — Uso de palabras de sonido muy parecido y distinto significado («hombre» y «hambre»).',
              answerHy: '<strong>Նմանահունչ բառերի խաղ / Պարոնոմազիա</strong> (Հնչյունային մակարդակ) — «Hombre» և «hambre» բառերը նման են հնչում, բայց տարբեր իմաստ ունեն։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio 2. Clasifica las figuras por niveles',
          hy: 'Ընտրիր յուրաքանչյուրի ճիշտ մակարդակը։'
        },
        {
          type: 'classifyQuiz',
          id: 'm1-ex2',
          options: ['Nivel fónico', 'Nivel morfosintáctico', 'Nivel semántico'],
          items: [
            {
              id: 'c1',
              num: '1.',
              term: 'Aliteración',
              correct: 'Nivel fónico',
              explanationEs: 'Nivel fónico — repetición de sonidos.',
              explanationHy: 'Հնչյունային մակարդակ — հնչյունների կրկնություն։'
            },
            {
              id: 'c2',
              num: '2.',
              term: 'Hipérbaton',
              correct: 'Nivel morfosintáctico',
              explanationEs: 'Nivel morfosintáctico — cambio del orden de las palabras.',
              explanationHy: 'Ձևաբանական-շարահյուսական մակարդակ — բառերի դասավորության փոփոխություն։'
            },
            {
              id: 'c3',
              num: '3.',
              term: 'Metáfora',
              correct: 'Nivel semántico',
              explanationEs: 'Nivel semántico — relación de significado figurado.',
              explanationHy: 'Իմաստային մակարդակ — փոխաբերական իմաստ։'
            },
            {
              id: 'c4',
              num: '4.',
              term: 'Onomatopeya',
              correct: 'Nivel fónico',
              explanationEs: 'Nivel fónico — imitación de sonidos reales.',
              explanationHy: 'Հնչյունային մակարդակ — իրական ձայների նմանակում։'
            },
            {
              id: 'c5',
              num: '5.',
              term: 'Personificación',
              correct: 'Nivel semántico',
              explanationEs: 'Nivel semántico — cualidades humanas a lo no humano.',
              explanationHy: 'Իմաստային մակարդակ — մարդկային հատկություններ ոչ մարդկային առարկաներին։'
            },
            {
              id: 'c6',
              num: '6.',
              term: 'Anáfora',
              correct: 'Nivel morfosintáctico',
              explanationEs: 'Nivel morfosintáctico — repetición al principio de frases o versos.',
              explanationHy: 'Ձևաբանական-շարահյուսական մակարդակ — կրկնություն նախադասությունների սկզբում։'
            },
            {
              id: 'c7',
              num: '7.',
              term: 'Polisíndeton',
              correct: 'Nivel morfosintáctico',
              explanationEs: 'Nivel morfosintáctico — repetición de conjunciones.',
              explanationHy: 'Ձևաբանական-շարահյուսական մակարդակ — շաղկապների կրկնություն։'
            },
            {
              id: 'c8',
              num: '8.',
              term: 'Ironía',
              correct: 'Nivel semántico',
              explanationEs: 'Nivel semántico — decir lo contrario de lo que se piensa.',
              explanationHy: 'Իմաստային մակարդակ — հակառակ իմաստի ակնարկում։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio 3. Mito, leyenda, cuento o romance',
          hy: 'Lee y elige / Կարդա և ընտրիր ճիշտ պատասխանը։'
        },
        {
          type: 'mcqQuiz',
          id: 'm1-ex3',
          checkLabel: 'Проверить ответы (Comprobar respuestas)',
          items: [
            {
              id: 'm1-ex3-1',
              num: '1.',
              promptEs: 'Una historia explica cómo los dioses crearon el mar.',
              promptHy: 'Մի պատմություն բացատրում է, թե ինչպես են աստվածները ստեղծել ծովը։',
              options: ['Mito', 'Leyenda', 'Cuento', 'Romance'],
              correctIndex: 0,
              answerEs: '<strong>Mito</strong> — Explica el origen de fenómenos naturales y aparecen dioses.',
              answerHy: '<strong>Առասպել (Mito)</strong> — Բացատրում է բնության երևույթների ծագումը և մասնակցում են աստվածներ։'
            },
            {
              id: 'm1-ex3-2',
              num: '2.',
              promptEs: 'En un castillo antiguo aparece cada noche un caballero misterioso.',
              promptHy: 'Հին ամրոցում ամեն գիշեր խորհրդավոր ասպետ է հայտնվում։',
              options: ['Mito', 'Leyenda', 'Cuento', 'Romance'],
              correctIndex: 1,
              answerEs: '<strong>Leyenda</strong> — Mezcla un lugar real (un castillo antiguo) con un hecho fantástico o misterioso.',
              answerHy: '<strong>Լեգենդ (Leyenda)</strong> — Իրական վայրը միախառնվում է խորհրդավոր, երևակայական իրադարձության հետ։'
            },
            {
              id: 'm1-ex3-3',
              num: '3.',
              promptEs: 'Una niña pierde su perro, lo busca y finalmente lo encuentra.',
              promptHy: 'Մի աղջիկ կորցնում է իր շանը, փնտրում է նրան և վերջապես գտնում է։',
              options: ['Mito', 'Leyenda', 'Cuento', 'Romance'],
              correctIndex: 2,
              answerEs: '<strong>Cuento</strong> — Narración breve con inicio, nudo y desenlace.',
              answerHy: '<strong>Պատմվածք (Cuento)</strong> — Կարճ պատմություն՝ սկզբով, զարգացմամբ և ավարտով։'
            },
            {
              id: 'm1-ex3-4',
              num: '4.',
              promptEs: 'Un poema narrativo tiene versos de ocho sílabas y rima asonante en los pares.',
              promptHy: 'Պատմողական բանաստեղծությունն ունի ութվանկ տողեր և զույգ տողերում ասոնանսային հանգավորում։',
              options: ['Mito', 'Leyenda', 'Cuento', 'Romance'],
              correctIndex: 3,
              answerEs: '<strong>Romance</strong> — Versos octosílabos con rima asonante en los pares y versos impares sueltos.',
              answerHy: '<strong>Ռոմանս (Romance)</strong> — 8-վանկանի տողեր, զույգ տողերում ասոնանսային հանգ, կենտերը՝ անհանգ։'
            }
          ]
        }
      ]
    },
    {
      id: 'm1-preguntas',
      jumpLabel: '5. Важные вопросы',
      title: 'PARTE 5. Preguntas importantes para el examen',
      blocks: [
        {
          type: 'qaList',
          id: 'm1-p5',
          showCounter: true,
          items: [
            {
              id: 'm1-q1',
              num: '1.',
              promptEs: '¿Qué es un verso?',
              promptHy: 'Ի՞նչ է բանաստեղծական տողը (verso)։',
              answerEs: 'Cada línea de un poema.',
              answerHy: 'Բանաստեղծության յուրաքանչյուր տողը։'
            },
            {
              id: 'm1-q2',
              num: '2.',
              promptEs: '¿Qué es una estrofa?',
              promptHy: 'Ի՞նչ է բանաստեղծական տունը (estrofa)։',
              answerEs: 'Un conjunto de versos.',
              answerHy: 'Բանաստեղծական տողերի խումբ։'
            },
            {
              id: 'm1-q3',
              num: '3.',
              promptEs: '¿Qué es un verso octosílabo?',
              promptHy: 'Ի՞նչ է ութվանկ տողը (verso octosílabo)։',
              answerEs: 'Un verso de ocho sílabas métricas.',
              answerHy: '8 բանաստեղծական վանկ ունեցող տող։'
            },
            {
              id: 'm1-q4',
              num: '4.',
              promptEs: '¿Qué es la rima asonante?',
              promptHy: 'Ի՞նչ է ասոնանսային հանգավորումը։',
              answerEs: 'La coincidencia de las vocales desde la última vocal tónica.',
              answerHy: 'Վերջին շեշտված ձայնավորից սկսած ձայնավորների համընկնում։'
            },
            {
              id: 'm1-q5',
              num: '5.',
              promptEs: '¿Qué significa 8–?',
              promptHy: 'Ի՞նչ է նշանակում 8–։',
              answerEs: 'Ocho sílabas y verso suelto.',
              answerHy: '8 վանկ և ընդհանուր հանգավորմանը չմասնակցող տող։'
            },
            {
              id: 'm1-q6',
              num: '6.',
              promptEs: '¿Qué significa 8a?',
              promptHy: 'Ի՞նչ է նշանակում 8a։',
              answerEs: 'Ocho sílabas y rima del grupo a.',
              answerHy: '8 վանկ և «a» խմբի հանգավորում։'
            },
            {
              id: 'm1-q7',
              num: '7.',
              promptEs: '¿Qué nivel estudia los sonidos?',
              promptHy: 'Ո՞ր մակարդակն է ուսումնասիրում հնչյունները։',
              answerEs: 'El nivel fónico.',
              answerHy: 'Հնչյունային մակարդակը։'
            },
            {
              id: 'm1-q8',
              num: '8.',
              promptEs: '¿Qué nivel estudia la estructura?',
              promptHy: 'Ո՞ր մակարդակն է ուսումնասիրում կառուցվածքը։',
              answerEs: 'El nivel morfosintáctico.',
              answerHy: 'Ձևաբանական-շարահյուսական մակարդակը։'
            },
            {
              id: 'm1-q9',
              num: '9.',
              promptEs: '¿Qué nivel estudia los significados?',
              promptHy: 'Ո՞ր մակարդակն է ուսումնասիրում իմաստները։',
              answerEs: 'El nivel semántico.',
              answerHy: 'Իմաստային մակարդակը։'
            }
          ]
        },
        {
          type: 'note',
          html: '<strong>La regla más importante para el alumno:</strong><br><span class="font-mono-num" style="font-size:1.35rem;font-weight:700;color:var(--accent);">Romance = 8– / 8a / 8– / 8a</span><br><br>Պետք է հիշի, որ <strong>8-ը վանկերի քանակն է</strong>, իսկ <strong>գծիկը կամ տառը ցույց են տալիս հանգավորման սխեման</strong>։ Երկրորդ քայլով արդեն պետք է կարողանա ինքնուրույն հաշվել վանկերը և տարբերել հանգավորվող բառերը։'
        }
      ]
    }
  ]
};
