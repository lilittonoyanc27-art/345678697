export const MODULE_6 = {
  id: 'mod6',
  navLabel: 'Метрика',
  kicker: 'Lengua Castellana y Literatura · 1.º ESO (7-րդ դասարան) · Español + Հայերեն',
  title: 'El romance y la métrica española — Ռոմանսը և իսպանական բանաստեղծության չափը',
  subtitle: 'Մանրամասն ուղեցույց՝ romance, վանկերի հաշվարկ, sinalefa, aguda/llana/esdrújula, 8– / 8a / 8b, arte menor / mayor և վարժություններ։',
  introNotes: [
    'Այս թեման նախատեսված է 7-րդ դասարանի իսպաներենի քննությանը պատրաստվելու համար։ Մանրամասն կսովորենք՝ ինչ է <strong>romance</strong>, ինչպես հաշվել վանկերը, ինչ են նշանակում <strong>8–, 8a, 8b</strong>, ինչպես որոշել հանգը և ճիշտ հիմնավորել պատասխանը քննության ժամանակ։'
  ],
  sections: [
    {
      id: 'm6-que-es',
      jumpLabel: '1. Романс',
      title: '1. ¿Qué es un romance? — Ի՞նչ է ռոմանսը',
      blocks: [
        {
          type: 'bilingual',
          es: 'El romance es una composición poética tradicional formada por una serie de versos de ocho sílabas métricas. Los versos pares tienen rima asonante y los impares quedan sueltos, es decir, no riman.',
          hy: 'Ռոմանսը իսպանական ավանդական բանաստեղծական ձև է, որը բաղկացած է ութվանկ տողերի շարքից։ Զույգ տողերն ունեն ասոնանսային հանգ, իսկ կենտ տողերը անհանգ են։'
        },
        {
          type: 'subtitle',
          es: 'Las tres características principales',
          hy: 'Երեք հիմնական հատկանիշ'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>1. Versos octosílabos</strong>',
              hy: 'Տողերը սովորաբար ունեն 8 բանաստեղծական վանկ։'
            },
            {
              es: '<strong>2. Rima asonante en los versos pares</strong>',
              hy: 'Զույգ տողերն ունեն ասոնանսային հանգ։'
            },
            {
              es: '<strong>3. Versos impares sueltos</strong>',
              hy: 'Կենտ տողերը չեն հանգավորվում։'
            }
          ]
        },
        {
          type: 'bilingual',
          es: 'Los romances tradicionales pertenecen a menudo a la literatura popular, ya que muchos se transmitían oralmente y eran anónimos. Sin embargo, también existen romances escritos por autores conocidos.',
          hy: 'Ավանդական ռոմանսները հաճախ պատկանում են ժողովրդական գրականությանը, քանի որ շատերը փոխանցվել են բանավոր, և նրանց հեղինակներն անհայտ են։ Սակայն հայտնի հեղինակներն էլ են գրել ռոմանսներ։'
        }
      ]
    },
    {
      id: 'm6-esquema',
      jumpLabel: '2. 8–, 8a, 8b',
      title: '2. ¿Qué significan 8–, 8a y 8b?',
      blocks: [
        {
          type: 'note',
          html: 'Սա քննության ամենակարևոր հարցերից մեկն է։'
        },
        {
          type: 'metricCards',
          items: [
            {
              big: '8–',
              titleEs: 'Sin rima',
              descEs: 'El número 8 significa que el verso tiene ocho sílabas métricas. El guion indica que ese verso no rima con los demás versos del esquema.',
              descHy: '8 վանկ, անհանգ։ 8 թիվը ցույց է տալիս, որ տողն ունի ութ բանաստեղծական վանկ։ Գծիկը ցույց է տալիս, որ այդ տողը չի հանգավորվում մյուս տողերի հետ։'
            },
            {
              big: '8a',
              titleEs: 'Rima «a»',
              descEs: 'El verso tiene ocho sílabas métricas y pertenece al primer grupo de rima, representado por la letra «a».',
              descHy: '8 վանկ, «a» հանգախումբ։ Տողն ունի ութ բանաստեղծական վանկ և պատկանում է առաջին հանգախմբին, որը նշվում է «a» տառով։'
            },
            {
              big: '8b',
              titleEs: 'Rima «b»',
              descEs: 'El verso tiene ocho sílabas métricas, pero pertenece a otro grupo de rima diferente, representado por la letra «b».',
              descHy: '8 վանկ, այլ հանգախումբ։ Տողն ունի ութ բանաստեղծական վանկ, սակայն պատկանում է մեկ այլ հանգախմբի, որը նշվում է «b» տառով։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: '¡Muy importante! — Շատ կարևոր է',
          es: 'La letra «a» no significa que el verso termine en «a», ni indica por sí sola que la rima sea asonante. Solo identifica un grupo de rima.',
          hy: '«a» տառը չի նշանակում, որ տողը պետք է ավարտվի «a» տառով, և ինքնին չի նշանակում ասոնանսային հանգ։ Այն պարզապես ցույց է տալիս հանգավորման խումբը։'
        }
      ]
    },
    {
      id: 'm6-silabas',
      jumpLabel: '3. Слоги и sinalefa',
      title: '3. ¿Cómo contar las sílabas métricas? — Ինչպե՞ս հաշվել վանկերը',
      blocks: [
        {
          type: 'subtitle',
          es: 'Regla 1. Dividir las palabras en sílabas',
          hy: 'Բառերը բաժանել վանկերի'
        },
        {
          type: 'schemeStrip',
          titleEs: 'Ejemplo: En la plaza de mi barrio (Total: 8 sílabas → 8–)',
          titleHy: 'Օրինակ՝ Մեր թաղամասի հրապարակում (Ընդամենը՝ 8 վանկ → 8–)',
          items: [
            { code: 'En', label: '1' },
            { code: 'la', label: '2' },
            { code: 'pla', label: '3' },
            { code: 'za', label: '4' },
            { code: 'de', label: '5' },
            { code: 'mi', label: '6' },
            { code: 'ba', label: '7' },
            { code: 'rrio', label: '8' }
          ]
        },
        {
          type: 'bilingual',
          es: 'Contamos ocho sílabas. El verso es octosílabo.',
          hy: 'Հաշվում ենք ութ վանկ։ Սա ութվանկ տող է՝ <em>verso octosílabo</em>։ Բայց միայն բառերի սովորական վանկերը հաշվելը միշտ բավարար չէ։ Պետք է իմանալ նաև հետևյալ կանոնները։'
        },
        {
          type: 'subtitle',
          es: 'Regla 2. La sinalefa',
          hy: 'Ձայնավորների միացում'
        },
        {
          type: 'bilingual',
          es: 'La sinalefa se produce cuando una palabra termina en sonido vocálico y la siguiente comienza también con un sonido vocálico. Normalmente, esos sonidos se cuentan dentro de una sola sílaba métrica.',
          hy: 'Sinalefa-ն տեղի է ունենում, երբ մի բառ ավարտվում է ձայնավոր հնչյունով, իսկ հաջորդը սկսվում է ձայնավոր հնչյունով։ Սովորաբար այդ հնչյունները միասին հաշվվում են որպես մեկ բանաստեղծական վանկ։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo: Para el huerto de la casa',
          es: '<strong>Sin sinalefa:</strong> pa / ra / el / huer / to / de / la / ca / sa → <strong>9 sílabas gramaticales</strong><br><strong>Con sinalefa:</strong> ra_el = una sílaba métrica → <strong>Resultado: 8 sílabas métricas</strong>',
          hy: '«para el» արտահայտության մեջ <em>ra</em> և <em>el</em> հնչյունային մասերը միանում են մեկ բանաստեղծական վանկի։ Ուստի 9-ի փոխարեն ստանում ենք 8։'
        },
        {
          type: 'schemeStrip',
          titleEs: 'Con sinalefa: Para el huerto de la casa (8 sílabas métricas)',
          titleHy: 'Սինալեֆայով՝ տան բանջարանոցի համար (8 բանաստեղծական վանկ)',
          items: [
            { code: 'pa', label: '1' },
            { code: 'ra_el', label: '2 (sinalefa)' },
            { code: 'huer', label: '3' },
            { code: 'to', label: '4' },
            { code: 'de', label: '5' },
            { code: 'la', label: '6' },
            { code: 'ca', label: '7' },
            { code: 'sa', label: '8' }
          ]
        },
        {
          type: 'table',
          headers: ['Expresión (Otros ejemplos)', 'Sinalefa (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['la amiga', '<strong>la_amiga</strong>'], hy: 'ընկերուհին (la_a միանում է)' },
            { cells: ['mi amigo', '<strong>mi_amigo</strong>'], hy: 'իմ ընկերը (mi_a միանում է)' },
            { cells: ['una historia', '<strong>una_historia</strong>'], hy: 'մի պատմություն (h-ը չի արտասանվում, a_i միանում է)' },
            { cells: ['para el niño', '<strong>para_el niño</strong>'], hy: 'երեխայի համար (ra_el միանում է)' },
            { cells: ['la escuela', '<strong>la_escuela</strong>'], hy: 'դպրոցը (la_e միանում է)' }
          ]
        },
        {
          type: 'bilingual',
          label: 'Atención — Ուշադրություն',
          es: 'La letra «h» no se pronuncia en palabras como <em>historia</em>, por eso no impide la sinalefa. La sinalefa es habitual, pero en poesía puede evitarse en determinadas condiciones expresivas o por una pausa marcada.',
          hy: '«h» տառը <em>historia</em> բառի նման դեպքերում չի արտասանվում և չի խանգարում ձայնավորների միացմանը։ Սակայն բանաստեղծության մեջ որոշ դեպքերում հնչյունները կարող են նաև առանձին արտասանվել։'
        }
      ]
    },
    {
      id: 'm6-acento',
      jumpLabel: '4. Ударение слова',
      title: '4. La regla de la última palabra — Վերջին բառի շեշտի կանոնը',
      blocks: [
        {
          type: 'note',
          html: 'Սա երկրորդ ամենակարևոր կանոնն է։ Երբ հաշվել ենք վանկերը և sinalefa-ն, նայում ենք տողի վերջին բառի շեշտին։'
        },
        {
          type: 'table',
          headers: ['Última palabra', 'Regla (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['<strong>Aguda</strong>', '<strong>+1 sílaba</strong>'], hy: 'Ավելացնում ենք 1 վանկ։' },
            { cells: ['<strong>Llana</strong>', '<strong>No cambia</strong>'], hy: 'Վանկերի թիվը չի փոխվում։' },
            { cells: ['<strong>Esdrújula</strong>', '<strong>–1 sílaba</strong>'], hy: 'Հանում ենք 1 վանկ։' }
          ]
        },
        {
          type: 'subtitle',
          es: 'A) Palabra aguda',
          hy: 'Վերջին վանկի շեշտ'
        },
        {
          type: 'bilingual',
          es: 'Si la última palabra del verso es aguda, añadimos una sílaba métrica.',
          hy: 'Եթե տողի վերջին բառի շեշտը վերջին վանկի վրա է, ավելացնում ենք մեկ բանաստեղծական վանկ։'
        },
        {
          type: 'schemeStrip',
          titleEs: 'Ejemplo: Mis amigos van al mar (Mis / a / mi / gos / van / al / mar)',
          titleHy: 'Օրինակ՝ Իմ ընկերները գնում են ծով',
          items: [
            { code: '7', label: 'sílabas' },
            { code: '+1', label: 'aguda' },
            { code: '= 8', label: 'métricas' }
          ]
        },
        {
          type: 'bilingual',
          es: '«Mar» es monosílaba y, al final del verso, cuenta como final agudo. Por eso sumamos una sílaba.',
          hy: '«Mar» բառը միավանկ է։ Տողի վերջում այն հաշվվում է վերջին վանկի շեշտի կանոնով, ուստի ավելացնում ենք մեկ վանկ։'
        },
        {
          type: 'subtitle',
          es: 'B) Palabra llana',
          hy: 'Նախավերջին վանկի շեշտ'
        },
        {
          type: 'bilingual',
          es: 'Si la última palabra es llana, el número de sílabas no cambia.',
          hy: 'Եթե վերջին բառի շեշտը նախավերջին վանկի վրա է, վանկերի թիվը չի փոխվում։'
        },
        {
          type: 'bilingual',
          label: 'Ejemplo: En la plaza de mi barrio',
          es: 'En / la / pla / za / de / mi / ba / rrio → <strong>8 sílabas → 8 sílabas métricas</strong>. «Barrio» es una palabra llana. No añadimos ni quitamos ninguna sílaba.',
          hy: '«Barrio» բառի շեշտը նախավերջին վանկի վրա է։ Ոչ ավելացնում ենք, ոչ հանում։'
        },
        {
          type: 'subtitle',
          es: 'C) Palabra esdrújula',
          hy: 'Նախանախավերջին վանկի շեշտ'
        },
        {
          type: 'bilingual',
          es: 'Si la última palabra es esdrújula, restamos una sílaba métrica.',
          hy: 'Եթե վերջին բառի շեշտը նախանախավերջին վանկի վրա է, հանում ենք մեկ բանաստեղծական վանկ։'
        },
        {
          type: 'schemeStrip',
          titleEs: 'Ejemplo: Mi vecino toca música (Mi / ve / ci / no / to / ca / mú / si / ca)',
          titleHy: 'Օրինակ՝ Իմ հարևանը երաժշտություն է նվագում',
          items: [
            { code: '9', label: 'sílabas' },
            { code: '–1', label: 'esdrújula' },
            { code: '= 8', label: 'métricas' }
          ]
        },
        {
          type: 'bilingual',
          es: '«Música» es esdrújula, porque la sílaba tónica es «mú». Restamos una sílaba.',
          hy: '«Música» բառը շեշտվում է նախանախավերջին՝ «mú» վանկի վրա։ Այդ պատճառով հանում ենք մեկ վանկ։'
        },
        {
          type: 'bilingual',
          label: 'Resumen de esta regla · Orden correcto para contar',
          es: '<strong>Aguda → +1 · Llana → 0 · Esdrújula → –1</strong><br>Primero dividimos las palabras en sílabas; después aplicamos la sinalefa y finalmente ajustamos el resultado según la última palabra.',
          hy: 'Ճիշտ հերթականությունն է՝ նախ բաժանել վանկերի, հետո կիրառել sinalefa-ն և վերջում հաշվի առնել վերջին բառի շեշտը։'
        }
      ]
    },
    {
      id: 'm6-rima',
      jumpLabel: '5. Рифмы',
      title: '5. Rima asonante y consonante — Հանգի երկու տեսակները',
      blocks: [
        {
          type: 'subtitle',
          es: 'Rima consonante',
          hy: 'Լրիվ հանգ'
        },
        {
          type: 'bilingual',
          es: 'Coinciden todos los sonidos, vocales y consonantes, desde la última vocal tónica. <strong>Ejemplo: canción — corazón</strong> (coinciden todos los sonidos desde la vocal tónica: <strong>-ón</strong>).',
          hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են բոլոր հնչյունները՝ և՛ ձայնավորները, և՛ բաղաձայնները։ Օրինակ՝ canción — corazón (-ón)։'
        },
        {
          type: 'subtitle',
          es: 'Rima asonante',
          hy: 'Ասոնանսային հանգ'
        },
        {
          type: 'bilingual',
          es: 'Coinciden las vocales desde la última vocal tónica, pero no necesariamente las consonantes.',
          hy: 'Վերջին շեշտված ձայնավորից սկսած համընկնում են ձայնավորները, բայց պարտադիր չէ, որ բաղաձայնները համընկնեն։'
        },
        {
          type: 'wordCompare',
          headingEs: 'Ejemplo: casa — rama — plaza',
          headingHy: 'Օրինակ՝ casa — rama — plaza',
          words: [
            { word: 'casa', vowels: 'a – a' },
            { word: 'rama', vowels: 'a – a' },
            { word: 'plaza', vowels: 'a – a' }
          ],
          resultEs: 'Las vocales de la rima coinciden: a–a.',
          resultHy: 'Բոլոր երեք բառերի հանգավորման հատվածում ձայնավորները «a–a» են, բայց բաղաձայնները տարբեր են։'
        },
        {
          type: 'table',
          headers: ['Rima consonante', 'Rima asonante (клик для перевода на հայերեն)'],
          rows: [
            {
              cells: ['canción — corazón<br>Coinciden todos los sonidos de la rima.', 'casa — rama<br>Coinciden las vocales de la rima.'],
              hy: 'Համընկնում են բոլոր հնչյունները։ | Համընկնում են ձայնավորները։'
            }
          ]
        },
        {
          type: 'bilingual',
          label: 'Atención',
          es: 'Para saber si existe rima, no basta con mirar la última letra. Debemos localizar la última vocal tónica de cada palabra y comparar los sonidos desde ahí.',
          hy: 'Հանգը որոշելու համար բավարար չէ նայել միայն բառի վերջին տառին։ Պետք է գտնել վերջին շեշտված ձայնավորը և համեմատել դրանից սկսվող հնչյունները։'
        }
      ]
    },
    {
      id: 'm6-ejemplo',
      jumpLabel: '6. Пример романса',
      title: '6. Ejemplo completo de romance — Ռոմանսի ամբողջական օրինակ',
      blocks: [
        {
          type: 'reading',
          titleEs: 'Romance de la plaza',
          titleHy: 'Հրապարակի ռոմանսը',
          footerNote: 'Poema original para practicar el examen. Los versos pares comparten la rima asonante a–a.',
          paragraphs: [
            { es: 'En la plaza de mi barrio', hy: 'Մեր թաղամասի հրապարակում', scheme: '8–' },
            { es: 'se despierta la mañana;', hy: 'արթնանում է առավոտը։', scheme: '8a' },
            { es: 'un abuelo cuenta cuentos', hy: 'Մի պապիկ պատմություններ է պատմում,', scheme: '8–' },
            { es: 'y repica la campana.', hy: 'և հնչում է զանգը։', scheme: '8a' },
            { es: 'Los pequeños salen juntos', hy: 'Փոքրիկները միասին դուրս են գալիս՝', scheme: '8–' },
            { es: 'con su risa por la plaza;', hy: 'ծիծաղով լցնելով հրապարակը։', scheme: '8a' },
            { es: 'un vecino planta flores', hy: 'Մի հարևան ծաղիկներ է տնկում', scheme: '8–' },
            { es: 'para el huerto de la casa.', hy: 'տան բանջարանոցի համար։', scheme: '8a' }
          ]
        },
        {
          type: 'subtitle',
          es: 'Análisis métrico paso a paso',
          hy: 'Քայլ առ քայլ չափական վերլուծություն'
        },
        {
          type: 'table',
          headers: ['Verso', 'División métrica', 'Resultado'],
          rows: [
            { cells: ['1', 'En / la / pla / za / de / mi / ba / rrio', '<strong>8–</strong>'] },
            { cells: ['2', 'se / des / pier / ta / la / ma / ña / na', '<strong>8a</strong>'] },
            { cells: ['3', 'un / a / bue / lo / cuen / ta / cuen / tos', '<strong>8–</strong>'] },
            { cells: ['4', 'y / re / pi / ca / la / cam / pa / na', '<strong>8a</strong>'] },
            { cells: ['5', 'Los / pe / que / ños / sa / len / jun / tos', '<strong>8–</strong>'] },
            { cells: ['6', 'con / su / ri / sa / por / la / pla / za', '<strong>8a</strong>'] },
            { cells: ['7', 'un / ve / ci / no / plan / ta / flo / res', '<strong>8–</strong>'] },
            { cells: ['8', 'pa / ra_el / huer / to / de / la / ca / sa', '<strong>8a</strong>'] }
          ]
        },
        {
          type: 'bilingual',
          label: '¿Por qué el verso 8 tiene ocho sílabas?',
          es: '«Para el huerto de la casa» tiene nueve sílabas gramaticales, pero «ra_el» forma una sinalefa. Por tanto, tiene ocho sílabas métricas.',
          hy: '«Para el huerto de la casa» տողը սովորական հաշվարկով ունի 9 վանկ, բայց «ra_el» հատվածում կա sinalefa։ Հետևաբար բանաստեղծական հաշվարկով ստացվում է 8 վանկ։'
        },
        {
          type: 'bilingual',
          label: '¿Qué versos riman? — Ո՞ր տողերն են հանգավորվում',
          es: 'Los versos <strong>2, 4, 6 y 8</strong>: mañana, campana, plaza, casa. Todas estas palabras comparten las vocales <strong>a–a</strong> desde la última vocal tónica. Como no coinciden todos los sonidos en todas las terminaciones, la rima general es asonante.',
          hy: '2-րդ, 4-րդ, 6-րդ և 8-րդ տողերը՝ mañana, campana, plaza, casa։ Այս բառերում վերջին շեշտված ձայնավորից սկսած համընկնում են «a–a» ձայնավորները։ Քանի որ բոլոր բառերի վերջավորություններում բոլոր հնչյունները չեն համընկնում, ընդհանուր հանգավորումը ասոնանսային է։'
        },
        {
          type: 'bilingual',
          label: 'Esquema métrico: 8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a',
          es: 'Es un romance porque tiene versos octosílabos, los pares riman en asonante y los impares quedan sueltos.',
          hy: 'Սա ռոմանս է, որովհետև ունի ութվանկ տողեր, զույգ տողերն ունեն ասոնանսային հանգ, իսկ կենտ տողերը անհանգ են։'
        }
      ]
    },
    {
      id: 'm6-arte',
      jumpLabel: '7–8. Arte menor/mayor',
      title: '7. Arte menor y arte mayor · 8. Otras reglas',
      blocks: [
        {
          type: 'note',
          html: 'Քննության ժամանակ կարող են նաև հարցնել՝ <em>¿Los versos son de arte menor o de arte mayor?</em>'
        },
        {
          type: 'table',
          headers: ['Tipo', 'Número de sílabas', 'Letras (клик для перевода на հայերեն)'],
          rows: [
            { cells: ['<strong>Arte menor</strong>', '2–8', 'a, b, c...'], hy: '2–8 վանկ, փոքրատառ նշումներ' },
            { cells: ['<strong>Arte mayor</strong>', '9 o más', 'A, B, C...'], hy: '9 և ավելի վանկ, մեծատառ նշումներ' }
          ]
        },
        {
          type: 'bilingual',
          es: 'Un romance tradicional tiene versos de arte menor porque sus versos son octosílabos.',
          hy: 'Ավանդական ռոմանսը փոքրաչափ տողերից է կազմված, որովհետև յուրաքանչյուր տող ունի 8 վանկ։'
        },
        {
          type: 'list',
          items: [
            { es: '<strong>8a</strong> — Ocho sílabas, rima a, arte menor.', hy: 'Ութ վանկ, a հանգ, փոքրաչափ (arte menor)։' },
            { es: '<strong>8b</strong> — Ocho sílabas, rima b, arte menor.', hy: 'Ութ վանկ, b հանգ, փոքրաչափ (arte menor)։' },
            { es: '<strong>11A</strong> — Once sílabas, rima A, arte mayor.', hy: 'Տասնմեկ վանկ, A հանգ, երկարաչափ (arte mayor)։' },
            { es: '<strong>11–</strong> — Once sílabas, verso sin rima.', hy: 'Տասնմեկ վանկ, անհանգ տող։' }
          ]
        },
        {
          type: 'note',
          html: '<strong>Կարևոր․</strong> 8a և 8A նույնը չեն. մեծատառը սովորաբար կիրառվում է <em>arte mayor</em>-ի համար, հետևաբար 8 վանկի դեպքում գրում ենք փոքրատառ՝ <strong>8a</strong>։'
        },
        {
          type: 'subtitle',
          es: '8. Otras reglas que debes conocer',
          hy: 'Այլ կարևոր կանոններ'
        },
        {
          type: 'list',
          items: [
            {
              es: '<strong>Diptongo:</strong> Dos vocales que se pronuncian en una sola sílaba dentro de una palabra. Ejemplo: <em>cielo</em> → cie / lo (2 sílabas).',
              hy: '<strong>Երկբարբառ:</strong> Երկու ձայնավոր, որոնք միևնույն բառի ներսում արտասանվում են մեկ վանկում։ Օրինակ՝ <em>cielo</em> → cie / lo։'
            },
            {
              es: '<strong>Hiato:</strong> Dos vocales contiguas que se pronuncian en sílabas diferentes dentro de una palabra. Ejemplo: <em>río</em> → rí / o (2 sílabas).',
              hy: '<strong>Ձայնավորների բաժանում:</strong> Իրար կողքի գտնվող երկու ձայնավորներ, որոնք արտասանվում են տարբեր վանկերում։ Օրինակ՝ <em>río</em> → rí / o։'
            },
            {
              es: '<strong>Hiato métrico:</strong> En poesía, a veces se evita una sinalefa y las vocales de palabras consecutivas se cuentan en sílabas métricas distintas.',
              hy: '<strong>Բանաստեղծական հիատ:</strong> Բանաստեղծության մեջ երբեմն sinalefa չի կատարվում, և հարևան բառերի ձայնավորները հաշվվում են առանձին բանաստեղծական վանկերում։'
            },
            {
              es: '<strong>Diéresis y sinéresis:</strong> La diéresis separa en dos sílabas métricas vocales que normalmente formarían un diptongo. La sinéresis reúne en una sola sílaba métrica vocales de una palabra que normalmente formarían un hiato.',
              hy: '<strong>Հատուկ բանաստեղծական միջոցներ:</strong> <em>Diéresis</em>-ը բաժանում է այն ձայնավորները, որոնք սովորաբար մեկ վանկ կկազմեին։ <em>Sinéresis</em>-ը մեկ վանկի մեջ միավորում է նույն բառի այն ձայնավորները, որոնք սովորաբար առանձին վանկեր կկազմեին։'
            }
          ]
        },
        {
          type: 'note',
          html: 'Սրանք ավելի հատուկ կանոններ են։ 7-րդ դասարանի սովորական վարժություններում առաջին հերթին պետք է լավ իմանալ <strong>sinalefa</strong>, վերջին բառի շեշտի կանոնը և հանգի տեսակները։'
        }
      ]
    },
    {
      id: 'm6-ejercicios',
      jumpLabel: '9. Упражнения',
      title: '9. Ejercicios para el examen — Քննական վարժություններ',
      blocks: [
        {
          type: 'subtitle',
          es: 'Ejercicio 1. Cuenta las sílabas métricas',
          hy: 'Վարժություն 1. Հաշվիր բանաստեղծական վանկերը'
        },
        {
          type: 'mcqQuiz',
          id: 'm6-ex1',
          checkLabel: 'Проверить (Comprobar)',
          items: [
            {
              id: 'm6-e1-1',
              num: '1.',
              promptEs: 'En la plaza de mi barrio',
              promptHy: 'Մեր թաղամասի հրապարակում',
              options: ['7', '8', '9'],
              correctIndex: 1,
              answerEs: '<strong>8 sílabas métricas</strong>: En / la / pla / za / de / mi / ba / rrio («barrio» es llana → 8).',
              answerHy: '<strong>8 վանկ</strong> («barrio» բառը llana է, վանկերի թիվը չի փոխվում)։'
            },
            {
              id: 'm6-e1-2',
              num: '2.',
              promptEs: 'Mis amigos van al mar',
              promptHy: 'Իմ ընկերները գնում են ծով',
              options: ['7', '8', '9'],
              correctIndex: 1,
              answerEs: '<strong>8 sílabas métricas</strong>: Mis / a / mi / gos / van / al / mar = 7 + 1 (aguda: mar) = 8.',
              answerHy: '<strong>8 վանկ</strong> (7 + 1, քանի որ «mar» բառը միավանկ է և տողի վերջում հաշվվում է որպես aguda)։'
            },
            {
              id: 'm6-e1-3',
              num: '3.',
              promptEs: 'Mi vecino toca música',
              promptHy: 'Իմ հարևանը երաժշտություն է նվագում',
              options: ['7', '8', '9'],
              correctIndex: 1,
              answerEs: '<strong>8 sílabas métricas</strong>: Mi / ve / ci / no / to / ca / mú / si / ca = 9 – 1 (esdrújula: música) = 8.',
              answerHy: '<strong>8 վանկ</strong> (9 – 1, քանի որ «música» բառը esdrújula է)։'
            },
            {
              id: 'm6-e1-4',
              num: '4.',
              promptEs: 'Para el huerto de la casa',
              promptHy: 'Տան բանջարանոցի համար',
              options: ['7', '8', '9'],
              correctIndex: 1,
              answerEs: '<strong>8 sílabas métricas</strong>: pa / ra_el / huer / to / de / la / ca / sa (sinalefa en «ra_el»).',
              answerHy: '<strong>8 վանկ</strong> («ra_el» հատվածում կա sinalefa)։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio 2. Identifica la rima',
          hy: 'Վարժություն 2. Որոշիր հանգի տեսակը'
        },
        {
          type: 'mcqQuiz',
          id: 'm6-ex2',
          checkLabel: 'Проверить (Comprobar)',
          items: [
            {
              id: 'm6-e2-1',
              num: '1.',
              promptEs: 'casa — rama',
              promptHy: 'տուն — ճյուղ',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 0,
              answerEs: '<strong>Asonante</strong> — Coinciden solo las vocales <strong>a–a</strong> desde la vocal tónica.',
              answerHy: '<strong>Ասոնանսային</strong> — Համընկնում են միայն a–a ձայնավորները։'
            },
            {
              id: 'm6-e2-2',
              num: '2.',
              promptEs: 'canción — corazón',
              promptHy: 'երգ — սիրտ',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 1,
              answerEs: '<strong>Consonante</strong> — Coinciden todos los sonidos desde la última vocal tónica (<strong>-ón</strong>).',
              answerHy: '<strong>Կոնսոնանսային (լրիվ)</strong> — Համընկնում են բոլոր հնչյունները (-ón)։'
            },
            {
              id: 'm6-e2-3',
              num: '3.',
              promptEs: 'plaza — casa',
              promptHy: 'հրապարակ — տուն',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 0,
              answerEs: '<strong>Asonante</strong> — Coinciden solo las vocales <strong>a–a</strong>.',
              answerHy: '<strong>Ասոնանսային</strong> — Համընկնում են միայն a–a ձայնավորները։'
            },
            {
              id: 'm6-e2-4',
              num: '4.',
              promptEs: 'cielo — pelota',
              promptHy: 'երկինք — գնդակ',
              options: ['Asonante', 'Consonante', 'Sin rima'],
              correctIndex: 2,
              answerEs: '<strong>Sin rima</strong> — En «cielo» (e–o) y «pelota» (o–a) no coinciden las vocales desde la vocal tónica.',
              answerHy: '<strong>Անհանգ (Sin rima)</strong> — Շեշտված ձայնավորից սկսած ձայնավորները տարբեր են (e–o ≠ o–a)։'
            }
          ]
        }
      ]
    },
    {
      id: 'm6-responder',
      jumpLabel: '10. Как отвечать',
      title: '10. ¿Cómo responder en el examen? — Ինչպես պատասխանել քննության ժամանակ',
      blocks: [
        {
          type: 'qaList',
          id: 'm6-q10',
          showCounter: true,
          items: [
            {
              id: 'm6-p1',
              num: 'Pregunta 1.',
              promptEs: '¿Cuántas sílabas métricas tienen los versos?',
              promptHy: 'Քանի՞ բանաստեղծական վանկ ունեն տողերը։',
              answerEs: 'Los versos tienen ocho sílabas métricas. Por lo tanto, son octosílabos.',
              answerHy: 'Տողերն ունեն ութ բանաստեղծական վանկ, հետևաբար դրանք ութվանկ են։'
            },
            {
              id: 'm6-p2',
              num: 'Pregunta 2.',
              promptEs: '¿Qué tipo de rima tiene el poema?',
              promptHy: 'Ի՞նչ տեսակի հանգ ունի բանաստեղծությունը։',
              answerEs: 'Tiene rima asonante porque coinciden las vocales desde la última vocal tónica, pero no todas las consonantes.',
              answerHy: 'Ունի ասոնանսային հանգ, որովհետև վերջին շեշտված ձայնավորից սկսած համընկնում են ձայնավորները, բայց ոչ բոլոր բաղաձայնները։'
            },
            {
              id: 'm6-p3',
              num: 'Pregunta 3.',
              promptEs: '¿Qué versos riman?',
              promptHy: 'Ո՞ր տողերն են հանգավորվում։',
              answerEs: 'Riman los versos pares: el segundo, el cuarto, el sexto y el octavo. Los versos impares quedan sueltos.',
              answerHy: 'Հանգավորվում են զույգ տողերը՝ երկրորդը, չորրորդը, վեցերորդը և ութերորդը։ Կենտ տողերը անհանգ են։'
            },
            {
              id: 'm6-p4',
              num: 'Pregunta 4.',
              promptEs: '¿Cuál es el esquema métrico?',
              promptHy: 'Ո՞րն է չափական սխեման։',
              answerEs: 'El esquema métrico es <strong>8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a</strong>.',
              answerHy: 'Չափական սխեման է՝ 8– / 8a / 8– / 8a / 8– / 8a / 8– / 8a։'
            },
            {
              id: 'm6-p5',
              num: 'Pregunta 5.',
              promptEs: '¿Por qué es un romance?',
              promptHy: 'Ինչո՞ւ է սա ռոմանս։',
              answerEs: 'Es un romance porque está formado por versos octosílabos, tiene rima asonante en los versos pares y los impares quedan sueltos.',
              answerHy: 'Սա ռոմանս է, որովհետև կազմված է ութվանկ տողերից, զույգ տողերն ունեն ասոնանսային հանգ, իսկ կենտ տողերը անհանգ են։'
            },
            {
              id: 'm6-p6',
              num: 'Pregunta 6.',
              promptEs: '¿Pertenece a la literatura popular o culta?',
              promptHy: 'Պատկանում է ժողովրդական, թե՞ հեղինակային գրականությանը։',
              answerEs: 'Si se trata de un romance tradicional anónimo transmitido oralmente, pertenece a la literatura popular. Si es una obra original de un autor conocido, pertenece a la literatura culta, aunque utilice la forma del romance.',
              answerHy: 'Եթե ռոմանսը ավանդական, անանուն ստեղծագործություն է, որը փոխանցվել է բանավոր, պատկանում է ժողովրդական գրականությանը։ Իսկ եթե այն հայտնի հեղինակի անհատական ստեղծագործությունն է, պատկանում է հեղինակային գրականությանը, նույնիսկ եթե գրված է ռոմանսի ձևով։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Resumen final para memorizar',
          hy: 'Ամենակարևոր կանոնները'
        },
        {
          type: 'list',
          items: [
            { es: 'Romance: versos octosílabos.', hy: 'Ռոմանս՝ ութվանկ տողեր։' },
            { es: 'Los versos pares tienen rima asonante.', hy: 'Զույգ տողերն ունեն ասոնանսային հանգ։' },
            { es: 'Los versos impares quedan sueltos.', hy: 'Կենտ տողերն անհանգ են։' },
            { es: '8–: ocho sílabas sin rima.', hy: '8–՝ ութ վանկ, անհանգ։' },
            { es: '8a: ocho sílabas, grupo de rima a.', hy: '8a՝ ութ վանկ, a հանգախումբ։' },
            { es: '8b: ocho sílabas, grupo de rima b.', hy: '8b՝ ութ վանկ, b հանգախումբ։' },
            { es: 'Aguda: se suma una sílaba.', hy: 'Aguda՝ ավելացնում ենք մեկ վանկ։' },
            { es: 'Llana: no cambia el número.', hy: 'Llana՝ թիվը չի փոխվում։' },
            { es: 'Esdrújula: se resta una sílaba.', hy: 'Esdrújula՝ հանում ենք մեկ վանկ։' },
            { es: 'Sinalefa: unión de sonidos vocálicos entre palabras.', hy: 'Sinalefa՝ հարևան բառերի ձայնավոր հնչյունների միացում։' },
            { es: 'Arte menor: hasta ocho sílabas.', hy: 'Arte menor՝ մինչև ութ վանկ։' },
            { es: 'Arte mayor: nueve o más sílabas.', hy: 'Arte mayor՝ ինը և ավելի վանկ։' }
          ]
        },
        {
          type: 'note',
          html: '<strong>Հիմնականը, որ աշակերտը պետք է կարողանա անել ինքնուրույն․</strong> Սկզբում հաշվել յուրաքանչյուր տողի վանկերը՝ կիրառելով sinalefa-ն և վերջին բառի շեշտի կանոնը։ Հետո դիտել տողերի վերջին բառերը, գտնել հանգավորվող տողերը և որոշել՝ հանգը ասոնանսային է, թե կոնսոնանսային։ Վերջում գրել <strong>8– / 8a</strong> սխեման և բացատրել, թե ինչու է բանաստեղծությունը ռոմանս։'
        }
      ]
    }
  ]
};
