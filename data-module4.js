export const MODULE_4 = {
  id: 'mod4',
  navLabel: 'Resumen',
  kicker: '1.º ESO — 7-րդ դասարան · Español + Հայերեն',
  title: 'Cómo hacer un resumen paso a paso — Ինչպես գրել տեքստի ամփոփում քայլ առ քայլ',
  subtitle: 'Այս դասի նպատակն է սովորեցնել աշակերտին ինքնուրույն գրել resumen, նույնիսկ եթե սկզբում դժվարանում է։',
  introNotes: [
    'Այս դասի նպատակն է սովորեցնել աշակերտին <strong>ինքնուրույն գրել resumen</strong>, նույնիսկ եթե սկզբում դժվարանում է։ Կսկսենք կարճ և պարզ տեքստից, հետո քայլ առ քայլ կսովորենք առանձնացնել հիմնական մտքերը և դրանցից կազմել ամփոփում։'
  ],
  sections: [
    {
      id: 'm4-que-es',
      jumpLabel: '1. Что такое resumen',
      title: '1. ¿Qué es un resumen? — Ի՞նչ է ամփոփումը',
      blocks: [
        {
          type: 'bilingual',
          es: 'Un resumen es un texto breve que recoge las ideas más importantes de otro texto, utilizando nuestras propias palabras.',
          hy: 'Ամփոփումը կարճ տեքստ է, որը ներկայացնում է սկզբնական տեքստի ամենակարևոր մտքերը՝ մեր սեփական բառերով։'
        },
        {
          type: 'subtitle',
          es: 'Reglas importantes',
          hy: 'Կարևոր կանոններ'
        },
        {
          type: 'list',
          items: [
            { es: 'No copiar todo el texto.', hy: 'Չարտագրել ամբողջ տեքստը։' },
            { es: 'No incluir detalles innecesarios.', hy: 'Չներառել ավելորդ մանրամասներ։' },
            { es: 'No dar opiniones personales.', hy: 'Չավելացնել անձնական կարծիք։' },
            { es: 'Escribir con nuestras propias palabras.', hy: 'Գրել սեփական բառերով։' },
            { es: 'Mantener el orden de los acontecimientos.', hy: 'Պահպանել դեպքերի հերթականությունը։' },
            { es: 'Usar preferentemente la tercera persona y el presente.', hy: 'Նախընտրելի է օգտագործել երրորդ դեմք և ներկա ժամանակ։' }
          ]
        }
      ]
    },
    {
      id: 'm4-lucia',
      jumpLabel: '2. La sorpresa de Lucía',
      title: '2. Lectura — La sorpresa de Lucía',
      blocks: [
        {
          type: 'note',
          html: 'Nivel 1.º ESO · Texto breve para practicar el resumen. Нажимайте на испанские абзацы для перевода на армянский.'
        },
        {
          type: 'reading',
          titleEs: 'La sorpresa de Lucía',
          titleHy: 'Լուսիայի անակնկալը',
          paragraphs: [
            {
              es: 'Una mañana de primavera, Lucía llegó al colegio y descubrió que su mejor amiga, Marta, estaba triste porque había perdido su cuaderno favorito.',
              hy: 'Գարնանային մի առավոտ Լուսիան եկավ դպրոց և նկատեց, որ իր լավագույն ընկերուհին՝ Մարտան, տխուր էր, որովհետև կորցրել էր իր սիրելի տետրը։'
            },
            {
              es: 'Durante el recreo, Lucía decidió ayudarla. Juntas buscaron el cuaderno en la biblioteca, en el patio y en el aula, pero no lo encontraron.',
              hy: 'Դասամիջոցի ընթացքում Լուսիան որոշեց օգնել նրան։ Նրանք միասին տետրը փնտրեցին գրադարանում, բակում և դասարանում, բայց չգտան։'
            },
            {
              es: 'Cuando regresaron a clase, el profesor les explicó que había encontrado un cuaderno cerca de la entrada y lo había guardado.',
              hy: 'Երբ վերադարձան դասարան, ուսուցիչը բացատրեց, որ մուտքի մոտ մի տետր էր գտել և պահել էր այն։'
            },
            {
              es: 'Marta recuperó su cuaderno y agradeció a Lucía su ayuda. Las dos amigas comprendieron que los pequeños gestos de amistad pueden convertir un día difícil en uno maravilloso.',
              hy: 'Մարտան հետ ստացավ իր տետրը և շնորհակալություն հայտնեց Լուսիային օգնության համար։ Երկու ընկերուհիները հասկացան, որ ընկերության փոքրիկ դրսևորումները կարող են դժվար օրը վերածել հրաշալի օրվա։'
            }
          ]
        }
      ]
    },
    {
      id: 'm4-pasos',
      jumpLabel: '3–4. Шаги и образец',
      title: '3. Cómo hacer el resumen — Քայլ առ քայլ',
      blocks: [
        {
          type: 'subtitle',
          es: 'Paso 1. ¿Quién es el protagonista?',
          hy: 'Սկզբում որոշում ենք՝ ով է գլխավոր հերոսը։'
        },
        {
          type: 'bilingual',
          es: 'Primero, identificamos quién es el personaje principal.',
          hy: 'Սկզբում որոշում ենք՝ ով է գլխավոր հերոսը։'
        },
        {
          type: 'qaList',
          id: 'm4-paso1',
          items: [
            {
              id: 'm4-p1-q',
              promptEs: '¿Quién es la protagonista de la historia?',
              promptHy: 'Ո՞վ է պատմության գլխավոր հերոսուհին։',
              answerEs: '<strong>Lucía.</strong><br>Primera frase: <em>La historia trata de una niña llamada Lucía y de su amiga Marta.</em>',
              answerHy: '<strong>Լուսիան։</strong><br>Առաջին նախադասությունը՝ <em>Պատմությունը Լուսիա անունով աղջկա և նրա ընկերուհու՝ Մարտայի մասին է։</em> Այս նախադասությունը արդեն կարող է լինել մեր ամփոփման սկիզբը։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Paso 2. ¿Cuál es el problema?',
          hy: 'Այնուհետև գտնում ենք պատմության հիմնական խնդիրը։'
        },
        {
          type: 'bilingual',
          es: 'Después, buscamos el problema principal de la historia.',
          hy: 'Այնուհետև գտնում ենք պատմության հիմնական խնդիրը։'
        },
        {
          type: 'qaList',
          id: 'm4-paso2',
          items: [
            {
              id: 'm4-p2-q',
              promptEs: '¿Qué le pasa a Marta?',
              promptHy: 'Ի՞նչ է պատահում Մարտային։',
              answerEs: '<strong>Marta pierde su cuaderno favorito.</strong><br>Unimos las dos ideas: <em>La historia trata de Lucía, una niña que decide ayudar a su amiga Marta porque ha perdido su cuaderno favorito.</em>',
              answerHy: '<strong>Մարտան կորցնում է իր սիրելի տետրը։</strong><br>Միացնում ենք առաջին երկու մտքերը՝ <em>Պատմությունը Լուսիայի մասին է, որը որոշում է օգնել իր ընկերուհի Մարտային, որովհետև վերջինս կորցրել է իր սիրելի տետրը։</em> Տեսնո՞ւմ ես՝ երկու հարցի պատասխաններից արդեն ստացվեց ամփոփման առաջին նախադասությունը։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Paso 3. ¿Qué hacen los personajes?',
          hy: 'Հիմա առանձնացնում ենք գլխավոր գործողությունը։ Պետք չէ նշել բոլոր մանրամասները։'
        },
        {
          type: 'bilingual',
          es: 'Ahora identificamos la acción principal. No necesitamos contar todos los detalles.',
          hy: 'Հիմա առանձնացնում ենք գլխավոր գործողությունը։ Պետք չէ նշել բոլոր մանրամասները։ Սկզբնական տեքստում նշված է, թե որտեղ են փնտրում՝ գրադարանում, բակում և դասարանում։ Բայց resumen-ում այդ բոլոր վայրերը թվարկելու կարիք չկա։'
        },
        {
          type: 'qaList',
          id: 'm4-paso3',
          items: [
            {
              id: 'm4-p3-q',
              promptEs: '¿Qué hacen Lucía y Marta?',
              promptHy: 'Ի՞նչ են անում Լուսիան և Մարտան։',
              answerEs: '<strong>Buscan el cuaderno juntas.</strong><br>Frase para el resumen: <em>Las dos amigas buscan el cuaderno por el colegio.</em>',
              answerHy: '<strong>Նրանք միասին փնտրում են տետրը։</strong><br>Ամփոփման նախադասություն՝ <em>Երկու ընկերուհիները տետրը փնտրում են դպրոցում։</em>'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Paso 4. ¿Cómo termina la historia?',
          hy: 'Վերջում բացատրում ենք՝ ինչպես է լուծվում խնդիրը։'
        },
        {
          type: 'bilingual',
          es: 'Finalmente, explicamos cómo se soluciona el problema.',
          hy: 'Վերջում բացատրում ենք՝ ինչպես է լուծվում խնդիրը։'
        },
        {
          type: 'qaList',
          id: 'm4-paso4',
          items: [
            {
              id: 'm4-p4-q',
              promptEs: '¿Quién encuentra el cuaderno? ¿Cómo termina la historia?',
              promptHy: 'Ո՞վ է գտնում տետրը։ Ինչպե՞ս է ավարտվում պատմությունը։',
              answerEs: '<strong>El profesor encuentra el cuaderno.</strong> Marta recupera su cuaderno y agradece a Lucía su ayuda.<br>Frase para el resumen: <em>Finalmente, el profesor les devuelve el cuaderno y Marta agradece a su amiga su ayuda.</em>',
              answerHy: '<strong>Ուսուցիչը։</strong> Մարտան հետ է ստանում տետրը և շնորհակալություն է հայտնում Լուսիային օգնության համար։<br>Ամփոփման նախադասություն՝ <em>Վերջում ուսուցիչը վերադարձնում է տետրը, և Մարտան շնորհակալություն է հայտնում ընկերուհուն օգնության համար։</em>'
            }
          ]
        },
        {
          type: 'subtitle',
          es: '4. Unimos las frases — RESUMEN MODELO',
          hy: 'Միավորում ենք նախադասությունները — ՊԱՏՐԱՍՏ ԱՄՓՈՓՈՒՄ'
        },
        {
          type: 'bilingual',
          label: 'RESUMEN MODELO — ՊԱՏՐԱՍՏ ԱՄՓՈՓՈՒՄ',
          es: 'La historia trata de Lucía, una niña que decide ayudar a su amiga Marta porque ha perdido su cuaderno favorito. Las dos amigas buscan el cuaderno por el colegio. Finalmente, el profesor se lo devuelve y Marta agradece a Lucía su ayuda.',
          hy: 'Պատմությունը Լուսիայի մասին է, որը որոշում է օգնել իր ընկերուհի Մարտային, որովհետև նա կորցրել է իր սիրելի տետրը։ Երկու ընկերուհիները տետրը փնտրում են դպրոցում։ Վերջում ուսուցիչը վերադարձնում է այն, և Մարտան շնորհակալություն է հայտնում Լուսիային օգնության համար։'
        },
        {
          type: 'note',
          html: 'Սա արդեն լավ <strong>resumen</strong> է 7-րդ դասարանի համար։ <strong>Ինչո՞ւ է ճիշտ.</strong><br>• Ներկայացված են գլխավոր հերոսները։<br>• Նշված է հիմնական խնդիրը։<br>• Նկարագրված է գլխավոր գործողությունը։<br>• Ներկայացված է ավարտը։<br>• Չկան ավելորդ մանրամասներ կամ անձնական կարծիքներ։'
        }
      ]
    },
    {
      id: 'm4-tiempo',
      jumpLabel: '5. Глагольное время',
      title: '5. ¿Qué tiempo verbal utilizamos? — Ի՞նչ ժամանակով գրել',
      blocks: [
        {
          type: 'note',
          html: 'Քննության համար շատ հարմար է օգտագործել <strong>Presente de indicativo</strong>՝ պատմությունը ներկայացնելով երրորդ դեմքով։'
        },
        {
          type: 'table',
          headers: ['Texto original — Սկզբնական տեքստ', 'Resumen — Ամփոփում'],
          rows: [
            { cells: ['Lucía <strong>llegó</strong> al colegio.', 'Lucía <strong>llega</strong> al colegio.'] },
            { cells: ['Marta <strong>había perdido</strong> su cuaderno.', 'Marta <strong>pierde</strong> su cuaderno.'] },
            { cells: ['Lucía <strong>decidió</strong> ayudarla.', 'Lucía <strong>decide</strong> ayudarla.'] },
            { cells: ['Las amigas <strong>buscaron</strong> el cuaderno.', 'Las amigas <strong>buscan</strong> el cuaderno.'] },
            { cells: ['El profesor <strong>encontró</strong> el cuaderno.', 'El profesor <strong>encuentra</strong> el cuaderno.'] },
            { cells: ['Marta <strong>agradeció</strong> su ayuda.', 'Marta <strong>agradece</strong> su ayuda.'] }
          ]
        },
        {
          type: 'note',
          html: '<strong>HY:</strong> Սկզբնական պատմությունը կարող է գրված լինել անցյալ ժամանակով, բայց ամփոփման մեջ սովորաբար օգտագործում ենք ներկա ժամանակ՝ գործողությունները հակիրճ ներկայացնելու համար։ Սա կոչվում է <em>presente histórico</em> կամ <em>presente narrativo</em>։'
        }
      ]
    },
    {
      id: 'm4-daniel',
      jumpLabel: '6. Практика (Daniel)',
      title: '6. Ahora tú — Հիմա փորձիր ինքնուրույն',
      blocks: [
        {
          type: 'note',
          html: 'Ահա մի նոր, կարճ տեքստ։ Այս անգամ աշակերտը պետք է ինքը կազմի resumen-ը։'
        },
        {
          type: 'reading',
          titleEs: 'Lectura 2 — El regalo de Daniel',
          titleHy: 'Դանիելի նվերը',
          paragraphs: [
            {
              es: 'Daniel era un niño al que le encantaba dibujar. Un día descubrió que su abuelo cumplía setenta años y decidió prepararle un regalo especial.',
              hy: 'Դանիելը մի տղա էր, որը շատ էր սիրում նկարել։ Մի օր նա իմացավ, որ իր պապիկը դառնում է յոթանասուն տարեկան, և որոշեց նրա համար հատուկ նվեր պատրաստել։'
            },
            {
              es: 'Durante varios días, Daniel dibujó los lugares que su abuelo más quería: el jardín de su casa, la plaza del pueblo y el pequeño parque donde paseaban juntos.',
              hy: 'Մի քանի օր շարունակ Դանիելը նկարեց այն վայրերը, որոնք պապիկն ամենաշատն էր սիրում՝ տան այգին, գյուղի հրապարակը և փոքրիկ զբոսայգին, որտեղ նրանք միասին զբոսնում էին։'
            },
            {
              es: 'Cuando llegó el cumpleaños, Daniel le entregó un álbum con todos sus dibujos. Su abuelo se emocionó y le dio un fuerte abrazo.',
              hy: 'Երբ եկավ ծննդյան օրը, Դանիելը պապիկին նվիրեց իր բոլոր նկարներով ալբոմը։ Պապիկը հուզվեց և ամուր գրկեց նրան։'
            },
            {
              es: 'Daniel comprendió que los regalos más valiosos no siempre son los más caros, sino aquellos que se preparan con cariño.',
              hy: 'Դանիելը հասկացավ, որ ամենաթանկարժեք նվերները միշտ չէ, որ ամենաթանկն են, այլ նրանք, որոնք պատրաստված են սիրով։'
            }
          ]
        },
        {
          type: 'subtitle',
          es: 'Ejercicio guiado — Responde en español',
          hy: 'Ուղղորդված վարժություն — Պատասխանիր իսպաներեն'
        },
        {
          type: 'guidedResumen',
          id: 'm4-daniel-guided',
          questions: [
            {
              id: 'm4-d1',
              num: '1.',
              promptEs: '¿Quién es el protagonista?',
              promptHy: 'Ո՞վ է գլխավոր հերոսը։',
              answerEs: 'El protagonista es <strong>Daniel</strong>, un niño al que le encanta dibujar.',
              answerHy: 'Գլխավոր հերոսը <strong>Դանիելն է</strong>՝ մի տղա, որը շատ է սիրում նկարել։'
            },
            {
              id: 'm4-d2',
              num: '2.',
              promptEs: '¿Qué quiere hacer?',
              promptHy: 'Ի՞նչ է նա ցանկանում անել։',
              answerEs: 'Quiere preparar un regalo especial para el cumpleaños de su abuelo.',
              answerHy: 'Նա ցանկանում է հատուկ նվեր պատրաստել իր պապիկի ծննդյան օրվա համար։'
            },
            {
              id: 'm4-d3',
              num: '3.',
              promptEs: '¿Qué hace para conseguirlo?',
              promptHy: 'Ի՞նչ է անում իր նպատակին հասնելու համար։',
              answerEs: 'Dibuja los lugares favoritos de su abuelo y prepara un álbum con sus dibujos.',
              answerHy: 'Նկարում է պապիկի սիրելի վայրերը և պատրաստում է նկարների ալբոմ։'
            },
            {
              id: 'm4-d4',
              num: '4.',
              promptEs: '¿Cómo termina la historia?',
              promptHy: 'Ինչպե՞ս է ավարտվում պատմությունը։',
              answerEs: 'Le entrega el álbum a su abuelo, quien se emociona mucho, y Daniel comprende que los regalos hechos con cariño son los más valiosos.',
              answerHy: 'Նվիրում է ալբոմը պապիկին, պապիկը հուզվում է, և Դանիելը հասկանում է, որ սիրով պատրաստված նվերներն ամենաարժեքավորն են։'
            }
          ],
          modelEs: 'El texto trata de un niño llamado Daniel que quiere sorprender a su abuelo por su cumpleaños. El protagonista prepara un álbum con dibujos de los lugares que su abuelo más quiere. Después, se lo entrega el día de su cumpleaños y su abuelo se emociona mucho. Finalmente, Daniel comprende que los regalos hechos con cariño son los más valiosos.',
          modelHy: 'Տեքստը Դանիել անունով տղայի մասին է, որը ցանկանում է ծննդյան օրվա առթիվ անակնկալ մատուցել իր պապիկին։ Գլխավոր հերոսը պատրաստում է ալբոմ՝ պապիկի ամենասիրելի վայրերի նկարներով։ Այնուհետև ծննդյան օրը նվիրում է այն պապիկին, և պապիկը շատ է հուզվում։ Վերջում Դանիելը հասկանում է, որ սիրով պատրաստված նվերներն ամենաարժեքավորն են։'
        }
      ]
    },
    {
      id: 'm4-plantilla',
      jumpLabel: '7. Шаблон и чек-лист',
      title: '7. Plantilla fácil para el examen — Հեշտ ձևանմուշ քննության համար',
      blocks: [
        {
          type: 'note',
          html: 'Եթե աշակերտը դժվարանում է սկսել ամփոփումը, կարող է օգտագործել այս ձևանմուշը.'
        },
        {
          type: 'list',
          items: [
            { es: '<strong>1.</strong> El texto trata de...', hy: 'Տեքստը ...-ի մասին է։' },
            { es: '<strong>2.</strong> El protagonista...', hy: 'Գլխավոր հերոսը...' },
            { es: '<strong>3.</strong> Después...', hy: 'Այնուհետև...' },
            { es: '<strong>4.</strong> Finalmente...', hy: 'Վերջում...' }
          ]
        },
        {
          type: 'bilingual',
          label: 'Ejemplo con la plantilla',
          es: 'El texto trata de un niño que quiere sorprender a su abuelo. El protagonista prepara un álbum con dibujos de lugares especiales. Después, se lo entrega el día de su cumpleaños. Finalmente, comprende que los regalos hechos con amor son muy valiosos.',
          hy: 'Տեքստը մի տղայի մասին է, որը ցանկանում է անակնկալ մատուցել իր պապիկին։ Գլխավոր հերոսը պատրաստում է հատուկ վայրերի նկարներով ալբոմ։ Այնուհետև ծննդյան օրը նվիրում է այն պապիկին։ Վերջում հասկանում է, որ սիրով պատրաստված նվերները շատ արժեքավոր են։'
        },
        {
          type: 'subtitle',
          es: 'Qué debe comprobar antes de entregar el examen',
          hy: 'Ինչ ստուգել քննությունը հանձնելուց առաջ'
        },
        {
          type: 'checklist',
          id: 'm4-check6',
          title: 'Comprobación del resumen',
          resetLabel: 'Сбросить (Reiniciar)',
          items: [
            '¿He escrito quién es el protagonista?',
            '¿He explicado el problema o la situación principal?',
            '¿He incluido las acciones importantes?',
            '¿He explicado cómo termina?',
            '¿He utilizado mis propias palabras?',
            '¿He evitado opiniones y detalles innecesarios?'
          ]
        },
        {
          type: 'note',
          html: '<strong>Ամենակարևոր խորհուրդը աշակերտին․</strong> Ամփոփում գրելիս սկզբում մտքում պատասխանիր չորս հարցի՝ <strong>ո՞վ, ի՞նչ է պատահում, ի՞նչ են անում, ինչպե՞ս է ավարտվում</strong>։ Հետո այդ պատասխանները միացրու 3–4 պարզ իսպաներեն նախադասությամբ։ Պետք չէ անգիր սովորել ամբողջ պատմությունը. անհրաժեշտ է հասկանալ գլխավոր միտքը և կարողանալ այն արտահայտել սեփական բառերով։'
        }
      ]
    }
  ]
};
