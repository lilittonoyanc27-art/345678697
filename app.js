import { MODULE_1 } from './data-module1.js';
import { MODULE_2 } from './data-module2.js';
import { MODULE_3 } from './data-module3.js';
import { MODULE_4 } from './data-module4.js';
import { MODULE_5 } from './data-module5.js';
import { MODULE_6 } from './data-module6.js';
import { MODULE_7 } from './data-module7.js';
import { MODULE_8 } from './data-module8.js';
import { MODULE_9 } from './data-module9.js';
import { MODULE_10 } from './data-module10.js';

const MODULES = [MODULE_1, MODULE_2, MODULE_3, MODULE_4, MODULE_5, MODULE_6, MODULE_7, MODULE_8, MODULE_9, MODULE_10];

const state = {
  activeModuleId: MODULE_1.id,
  fontScale: 1, // Balanced comfortable default font size
  allTranslationsOpen: false,
  allAnswersOpen: false,
  openTranslations: new Set(),
  openAnswers: new Set(),
  mcqSelections: {},
  mcqChecked: {},
  classifySelections: {},
  classifyChecked: {},
  checklists: loadSavedChecklists(),
  guidedInputs: {},
  flashcardIndex: {},
  litSwitcher: {},
};

let renderCounter = 0;

function loadSavedChecklists() {
  try {
    const raw = localStorage.getItem('es_hy_checklists_v1');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveChecklists() {
  try {
    localStorage.setItem('es_hy_checklists_v1', JSON.stringify(state.checklists));
  } catch {
    // Ignore storage errors
  }
}

function applyFontScale() {
  document.documentElement.style.setProperty('--font-scale', String(state.fontScale));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function nextTrId(prefix) {
  renderCounter += 1;
  return `${state.activeModuleId}-${prefix}-${renderCounter}`;
}

function isTrOpen(trId) {
  return state.allTranslationsOpen || state.openTranslations.has(trId);
}

function isAnsOpen(ansId) {
  return state.allAnswersOpen || state.openAnswers.has(ansId);
}

function renderBilingualBlock({ es, hy, label = '', scheme = '', extraClass = '', trId = '' }) {
  const id = trId || nextTrId('tr');
  const open = isTrOpen(id);
  const openClass = open ? ' is-open' : '';
  const cueText = open ? 'Скрыть ↑' : 'Հայերեն ↓';

  return `
    <div class="es-click-block${openClass}${extraClass ? ' ' + extraClass : ''}" data-tr-id="${id}" role="button" tabindex="0" aria-expanded="${open}">
      ${label ? `<div class="meta-line" style="margin-bottom:0.35rem;font-weight:700;color:var(--accent);">${label}</div>` : ''}
      <div class="es-click-header">
        <div class="es-text">
          ${scheme
            ? `<div class="poem-line-row"><span>${es}</span><span class="poem-scheme">${scheme}</span></div>`
            : es}
        </div>
        <span class="tr-cue">${cueText}</span>
      </div>
      <div class="hy-reveal">
        <span class="hy-tag">Հայ․</span>${hy}
      </div>
    </div>
  `;
}

function renderSubtitle(block) {
  if (block.es && block.hy) {
    const id = nextTrId('sub');
    const open = isTrOpen(id);
    const openClass = open ? ' is-open' : '';
    const cueText = open ? 'Скрыть ↑' : 'Հայերեն ↓';
    return `
      <h3 class="subsection-heading">
        <div class="es-click-block${openClass}" data-tr-id="${id}" role="button" tabindex="0" aria-expanded="${open}" style="margin-bottom:0;background:transparent;border-color:transparent;padding:0.25rem 0.45rem;">
          <div class="es-click-header">
            <span class="es-text font-display" style="font-size:1.28rem;font-weight:700;">${block.es}</span>
            <span class="tr-cue">${cueText}</span>
          </div>
          <div class="hy-reveal" style="font-family:'Plus Jakarta Sans','Noto Sans Armenian',sans-serif;font-weight:500;">
            <span class="hy-tag">Հայ․</span>${block.hy}
          </div>
        </div>
      </h3>
    `;
  }
  return `<h3 class="subsection-heading">${block.text || block.es || ''}</h3>`;
}

function renderMetricCards(block) {
  return `
    <div class="metric-grid">
      ${block.items
        .map(
          (item) => `
          <div class="metric-tile">
            <div class="metric-big">${item.big}</div>
            ${renderBilingualBlock({
              es: `<strong>${item.titleEs}</strong> — ${item.descEs}`,
              hy: item.descHy,
              extraClass: 'metric-inner-click'
            })}
          </div>
        `
        )
        .join('')}
    </div>
  `;
}

function renderSchemeStrip(block) {
  return `
    <div style="margin:1.2rem 0;">
      ${renderBilingualBlock({
        es: `<strong>${block.titleEs}</strong>`,
        hy: block.titleHy
      })}
      <div class="scheme-strip">
        ${block.items
          .map(
            (item) => `
            <div class="scheme-cell">
              <div class="code">${item.code}</div>
              <div class="label">${item.label}</div>
            </div>
          `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderWordCompare(block) {
  return `
    <div class="note-box" style="background:#fffdf9;">
      ${renderBilingualBlock({
        es: `<strong>${block.headingEs}</strong>`,
        hy: block.headingHy
      })}
      <div class="metric-grid" style="margin:0.75rem 0;">
        ${block.words
          .map(
            (w) => `
            <div class="metric-tile" style="padding:0.95rem 1.15rem;">
              <div class="font-display" style="font-size:1.6rem;font-weight:700;color:var(--ink-primary);">${w.word}</div>
              <div class="font-mono-num" style="font-size:1.1rem;font-weight:600;color:var(--accent);margin-top:0.2rem;">${w.vowels}</div>
            </div>
          `
          )
          .join('')}
      </div>
      ${renderBilingualBlock({
        es: `<strong>${block.resultEs}</strong>`,
        hy: block.resultHy
      })}
    </div>
  `;
}

function renderTable(block) {
  return `
    <div class="table-wrap">
      <table class="study-table">
        <thead>
          <tr>
            ${block.headers.map((h) => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${block.rows
            .map((row) => {
              const hasHy = Boolean(row.hy);
              const rowId = hasHy ? nextTrId('row') : '';
              const open = hasHy && isTrOpen(rowId);
              return `
                <tr class="${hasHy ? 'clickable-row' + (open ? ' is-open' : '') : ''}" ${hasHy ? `data-tr-id="${rowId}" tabindex="0" role="button"` : ''}>
                  ${row.cells
                    .map((cell, idx) => {
                      const isLast = idx === row.cells.length - 1;
                      if (hasHy && isLast) {
                        return `
                          <td>
                            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.75rem;">
                              <span>${cell}</span>
                              <span class="tr-cue">${open ? 'Скрыть ↑' : 'Հայերեն ↓'}</span>
                            </div>
                            <div class="cell-hy"><span class="hy-tag">Հայ․</span>${row.hy}</div>
                          </td>
                        `;
                      }
                      return `<td>${cell}</td>`;
                    })
                    .join('')}
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderFiguresGrid(block) {
  return `
    <div class="figures-grid">
      ${block.items
        .map(
          (fig) => `
          <div class="figure-card">
            ${renderBilingualBlock({
              es: `<span class="figure-name">${fig.nameEs}</span>`,
              hy: `<strong>${fig.nameHy}</strong>`
            })}
            ${renderBilingualBlock({
              es: fig.defEs,
              hy: fig.defHy
            })}
            ${renderBilingualBlock({
              label: 'Ejemplo',
              es: `<strong>${fig.exampleEs}</strong>`,
              hy: fig.exampleHy
            })}
            ${
              fig.noteEs
                ? renderBilingualBlock({
                    es: `<em>${fig.noteEs}</em>`,
                    hy: fig.noteHy
                  })
                : ''
            }
          </div>
        `
        )
        .join('')}
    </div>
  `;
}

function renderReading(block, blockKey) {
  const titleTrId = `${blockKey}-title`;
  const paragraphIds = block.paragraphs.map((_, idx) => `${blockKey}-p${idx}`);
  const allReadingOpen = [titleTrId, ...paragraphIds].every((id) => isTrOpen(id));

  return `
    <div class="reading-container" data-reading-id="${blockKey}">
      <div class="reading-header">
        <div>
          <h4 class="reading-title">${block.titleEs}</h4>
          <div class="meta-line" style="margin:0.2rem 0 0;">Нажимайте на любой абзац на испанском, чтобы открыть перевод на армянский</div>
        </div>
        <button type="button" class="btn-secondary" data-action="toggle-reading" data-target="${blockKey}">
          ${allReadingOpen ? 'Скрыть перевод текста' : 'Перевод всего текста'}
        </button>
      </div>
      ${renderBilingualBlock({
        es: `<strong>${block.titleEs}</strong>`,
        hy: `<strong>${block.titleHy}</strong>`,
        trId: titleTrId
      })}
      ${block.paragraphs
        .map((p, idx) =>
          renderBilingualBlock({
            es: p.es,
            hy: p.hy,
            scheme: p.scheme || '',
            extraClass: p.isStage ? 'stage-direction' : '',
            trId: paragraphIds[idx]
          })
        )
        .join('')}
      ${
        block.footerNote
          ? `<div class="meta-line" style="margin-top:0.85rem;margin-bottom:0;"><em>${block.footerNote}</em></div>`
          : ''
      }
    </div>
  `;
}

function renderQaList(block) {
  const total = block.items.length;
  const openCount = block.items.filter((item) => isAnsOpen(`ans-${item.id}`)).length;
  return `
    <div class="qa-group" data-qa-group="${block.id}">
      ${
        block.showCounter
          ? `
        <div class="meta-line" style="justify-content:space-between;padding:0.5rem 0 0.75rem;border-bottom:1px solid var(--border-subtle);">
          <span class="font-mono-num" data-qa-counter="${block.id}">${openCount} / ${total} ответов открыто</span>
          <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
            <button type="button" class="btn-secondary" data-action="qa-show-all" data-group="${block.id}">Показать все ответы</button>
            <button type="button" class="btn-secondary" data-action="qa-reset" data-group="${block.id}">Сбросить</button>
          </div>
        </div>
      `
          : ''
      }
      ${block.items
        .map((item) => {
          const ansId = `ans-${item.id}`;
          const open = isAnsOpen(ansId);
          const prefix = item.num ? `<strong>${item.num}</strong> ` : '';
          return `
            <div class="question-item" data-qa-item="${item.id}">
              ${
                item.promptHy
                  ? renderBilingualBlock({
                      es: `${prefix}${item.promptEs}`,
                      hy: item.promptHy
                    })
                  : `<div class="es-text" style="margin-bottom:0.5rem;">${prefix}${item.promptEs}</div>`
              }
              <div class="question-actions">
                <button
                  type="button"
                  class="btn-answer${open ? ' is-open' : ''}"
                  data-action="toggle-answer"
                  data-group="${block.id}"
                  data-target="${ansId}"
                >
                  ${open ? 'Скрыть ответ' : 'Посмотреть ответ'}
                </button>
              </div>
              <div class="answer-panel${open ? ' is-open' : ''}" id="${ansId}">
                <div class="answer-label">Ответ (нажмите на испанский текст для перевода на армянский):</div>
                ${
                  item.answerHy
                    ? renderBilingualBlock({
                        es: item.answerEs,
                        hy: item.answerHy
                      })
                    : `<div class="es-text">${item.answerEs}</div>`
                }
                ${item.answerExtraHtml || ''}
                ${
                  item.copyText
                    ? `<div class="question-actions" style="margin-top:0.75rem;">
                        <button type="button" class="btn-secondary" data-action="copy-text" data-text="${escapeHtml(item.copyText)}">
                          Скопировать (Copiar)
                        </button>
                      </div>`
                    : ''
                }
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;
}

function renderClassifyQuiz(block) {
  const selections = state.classifySelections[block.id] || {};
  const checked = Boolean(state.classifyChecked[block.id]);
  const selectedCount = Object.values(selections).filter(Boolean).length;
  const total = block.items.length;

  let correctCount = 0;
  if (checked) {
    block.items.forEach((it) => {
      if (selections[it.id] === it.correct) correctCount += 1;
    });
  }

  return `
    <div class="quiz-box" data-classify-id="${block.id}">
      <div class="meta-line" style="justify-content:space-between;padding-bottom:0.75rem;border-bottom:1px solid var(--border-subtle);">
        <span class="font-mono-num">${selectedCount} / ${total} выбрано</span>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
          <button type="button" class="btn-primary" data-action="classify-check" data-quiz="${block.id}">Проверить (Comprobar)</button>
          <button type="button" class="btn-secondary" data-action="classify-reset" data-quiz="${block.id}">Сбросить (Reiniciar)</button>
        </div>
      </div>

      ${block.items
        .map((item) => {
          const val = selections[item.id] || '';
          const isCorrect = checked && val === item.correct;
          const isWrong = checked && val !== '' && val !== item.correct;
          const ansId = `ans-cl-${block.id}-${item.id}`;
          const open = isAnsOpen(ansId);

          return `
            <div class="question-item">
              <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.85rem;">
                <div class="es-text" style="font-weight:700;">${item.num} ${item.term}</div>
                <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.65rem;">
                  <select class="quiz-select" data-action="classify-select" data-quiz="${block.id}" data-item="${item.id}" aria-label="${item.term}">
                    <option value="">Elige un nivel</option>
                    ${block.options
                      .map(
                        (opt) => `<option value="${escapeHtml(opt)}" ${val === opt ? 'selected' : ''}>${opt}</option>`
                      )
                      .join('')}
                  </select>
                  <button
                    type="button"
                    class="btn-answer${open ? ' is-open' : ''}"
                    data-action="toggle-answer"
                    data-target="${ansId}"
                  >
                    ${open ? 'Скрыть ответ' : 'Посмотреть ответ'}
                  </button>
                </div>
              </div>
              ${
                checked
                  ? `<div class="feedback-banner ${isCorrect ? 'is-ok' : 'is-err'}">
                      ${
                        isCorrect
                          ? `✓ Верно: ${item.correct}`
                          : isWrong
                            ? `✕ Неверно (выбрано: ${escapeHtml(val)}). Правильный ответ: ${item.correct}`
                            : `✕ Не выбрано. Правильный ответ: ${item.correct}`
                      }
                    </div>`
                  : ''
              }
              <div class="answer-panel${open ? ' is-open' : ''}" id="${ansId}">
                ${renderBilingualBlock({
                  es: `<strong>${item.correct}:</strong> ${item.explanationEs}`,
                  hy: item.explanationHy
                })}
              </div>
            </div>
          `;
        })
        .join('')}

      ${
        checked
          ? `<div class="feedback-banner ${correctCount === total ? 'is-ok' : 'is-err'}" style="margin-top:1.1rem;">
              Результат: <span class="font-mono-num">${correctCount} / ${total}</span>
            </div>`
          : ''
      }
    </div>
  `;
}

function renderMcqQuiz(block) {
  const selections = state.mcqSelections[block.id] || {};
  const checked = Boolean(state.mcqChecked[block.id]);
  const selectedCount = Object.keys(selections).length;
  const total = block.items.length;

  let correctCount = 0;
  if (checked) {
    block.items.forEach((it) => {
      if (selections[it.id] === it.correctIndex) correctCount += 1;
    });
  }

  return `
    <div class="quiz-box" data-mcq-id="${block.id}">
      <div class="meta-line" style="justify-content:space-between;padding-bottom:0.75rem;border-bottom:1px solid var(--border-subtle);">
        <span class="font-mono-num">${selectedCount} / ${total} выбрано</span>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
          <button type="button" class="btn-primary" data-action="mcq-check" data-quiz="${block.id}">${block.checkLabel || 'Проверить ответы'}</button>
          <button type="button" class="btn-secondary" data-action="mcq-reset" data-quiz="${block.id}">Сбросить (Reiniciar)</button>
        </div>
      </div>

      ${block.items
        .map((item) => {
          const picked = selections[item.id];
          const ansId = `ans-mcq-${block.id}-${item.id}`;
          const open = isAnsOpen(ansId);
          return `
            <div class="question-item">
              ${renderBilingualBlock({
                es: `<strong>${item.num}</strong> ${item.promptEs}`,
                hy: item.promptHy || ''
              })}
              <div class="options-grid">
                ${item.options
                  .map((opt, idx) => {
                    let cls = 'option-btn';
                    if (checked) {
                      if (idx === item.correctIndex) cls += ' is-correct';
                      else if (picked === idx) cls += ' is-wrong';
                    } else if (picked === idx) {
                      cls += ' is-selected';
                    }
                    const marker =
                      checked && idx === item.correctIndex
                        ? '✓ '
                        : checked && picked === idx && idx !== item.correctIndex
                          ? '✕ '
                          : '';
                    return `
                      <button
                        type="button"
                        class="${cls}"
                        data-action="mcq-pick"
                        data-quiz="${block.id}"
                        data-item="${item.id}"
                        data-index="${idx}"
                      >
                        ${marker}${opt}
                      </button>
                    `;
                  })
                  .join('')}
              </div>
              <div class="question-actions">
                <button
                  type="button"
                  class="btn-answer${open ? ' is-open' : ''}"
                  data-action="toggle-answer"
                  data-target="${ansId}"
                >
                  ${open ? 'Скрыть ответ' : 'Посмотреть ответ'}
                </button>
              </div>
              <div class="answer-panel${open ? ' is-open' : ''}" id="${ansId}">
                ${renderBilingualBlock({
                  es: item.answerEs,
                  hy: item.answerHy
                })}
              </div>
            </div>
          `;
        })
        .join('')}

      ${
        checked
          ? `<div class="feedback-banner ${correctCount === total ? 'is-ok' : 'is-err'}" style="margin-top:1.1rem;">
              Результат: <span class="font-mono-num">${correctCount} / ${total}</span>
            </div>`
          : ''
      }
    </div>
  `;
}

function renderGuidedResumen(block) {
  const fullVal = state.guidedInputs[block.id + '_full'] || '';
  const modelAnsId = `ans-gd-model-${block.id}`;
  const modelOpen = isAnsOpen(modelAnsId);

  return `
    <div data-guided-id="${block.id}">
      ${block.questions
        .map((q) => {
          const val = state.guidedInputs[q.id] || '';
          const ansId = `ans-gd-${q.id}`;
          const open = isAnsOpen(ansId);
          return `
            <div class="question-item">
              ${renderBilingualBlock({
                es: `<strong>${q.num}</strong> ${q.promptEs}`,
                hy: q.promptHy
              })}
              <input
                type="text"
                class="study-input"
                placeholder="Escribe tu respuesta en español..."
                value="${escapeHtml(val)}"
                data-action="guided-input"
                data-key="${q.id}"
              />
              <div class="question-actions">
                <button
                  type="button"
                  class="btn-answer${open ? ' is-open' : ''}"
                  data-action="toggle-answer"
                  data-target="${ansId}"
                >
                  ${open ? 'Скрыть ответ' : 'Посмотреть ответ'}
                </button>
              </div>
              <div class="answer-panel${open ? ' is-open' : ''}" id="${ansId}">
                ${renderBilingualBlock({
                  es: q.answerEs,
                  hy: q.answerHy
                })}
              </div>
            </div>
          `;
        })
        .join('')}

      <div style="margin-top:1rem;">
        <button type="button" class="btn-secondary" data-action="guided-reset" data-guided="${block.id}">
          Начать заново (Empezar de nuevo)
        </button>
      </div>

      <h3 class="subsection-heading">Escribe ahora el resumen completo</h3>
      <div class="meta-line">Escribe un resumen de 3 o 4 frases. Usa el presente y tus propias palabras.</div>
      <textarea
        class="study-textarea"
        id="textarea-${block.id}"
        placeholder="El texto trata de..."
        data-action="guided-input"
        data-key="${block.id}_full"
      >${escapeHtml(fullVal)}</textarea>

      <div class="question-actions">
        <button type="button" class="btn-secondary" data-action="guided-copy" data-target="textarea-${block.id}">
          Скопировать (Copiar)
        </button>
        <button
          type="button"
          class="btn-answer${modelOpen ? ' is-open' : ''}"
          data-action="toggle-answer"
          data-target="${modelAnsId}"
        >
          ${modelOpen ? 'Скрыть ответ' : 'Посмотреть ответ'}
        </button>
      </div>

      <div class="answer-panel${modelOpen ? ' is-open' : ''}" id="${modelAnsId}">
        <div class="answer-label">Resumen modelo (нажмите на испанский текст для перевода на армянский):</div>
        ${renderBilingualBlock({
          es: block.modelEs,
          hy: block.modelHy
        })}
      </div>
    </div>
  `;
}

function renderChecklist(block) {
  const checkedMap = state.checklists[block.id] || {};
  const count = block.items.filter((_, i) => checkedMap[i]).length;

  return `
    <div data-checklist-id="${block.id}">
      <div class="meta-line" style="justify-content:space-between;margin-bottom:0.85rem;">
        <span><strong>${block.title}</strong> · <span class="font-mono-num">${count} / ${block.items.length}</span></span>
        <button type="button" class="btn-secondary" data-action="checklist-reset" data-list="${block.id}">
          ${block.resetLabel || 'Сбросить список'}
        </button>
      </div>
      ${block.items
        .map((label, idx) => {
          const isChecked = Boolean(checkedMap[idx]);
          return `
            <label class="checklist-item${isChecked ? ' is-checked' : ''}">
              <input
                type="checkbox"
                ${isChecked ? 'checked' : ''}
                data-action="checklist-toggle"
                data-list="${block.id}"
                data-index="${idx}"
              />
              <span>${label}</span>
            </label>
          `;
        })
        .join('')}
    </div>
  `;
}

function renderFlashcards(block) {
  const total = block.items.length;
  const idx = Math.max(0, Math.min(total - 1, state.flashcardIndex[block.id] ?? 0));
  const card = block.items[idx];
  const ansId = `ans-fc-${block.id}-${idx}`;
  const open = isAnsOpen(ansId);

  return `
    <div class="flashcard-box" data-flashcard-id="${block.id}">
      <div class="flashcard-top">
        <span class="font-mono-num" style="font-weight:700;color:var(--accent);">Карточка ${idx + 1} / ${total}</span>
        <div class="flashcard-nav">
          <button
            type="button"
            class="btn-secondary"
            data-action="flashcard-prev"
            data-fc="${block.id}"
            data-total="${total}"
          >
            ← Предыдущая
          </button>
          <button
            type="button"
            class="btn-secondary"
            data-action="flashcard-next"
            data-fc="${block.id}"
            data-total="${total}"
          >
            Следующая →
          </button>
        </div>
      </div>

      ${renderBilingualBlock({
        es: `<strong>${card.qEs}</strong>`,
        hy: card.qHy,
        trId: `fc-q-${block.id}-${idx}`
      })}

      <div class="question-actions">
        <button
          type="button"
          class="btn-answer${open ? ' is-open' : ''}"
          data-action="toggle-answer"
          data-target="${ansId}"
        >
          ${open ? 'Скрыть ответ' : 'Посмотреть ответ'}
        </button>
      </div>

      <div class="answer-panel${open ? ' is-open' : ''}" id="${ansId}">
        <div class="answer-label">Ответ (нажмите на испанский текст для перевода на армянский):</div>
        ${renderBilingualBlock({
          es: card.aEs,
          hy: card.aHy,
          trId: `fc-a-${block.id}-${idx}`
        })}
      </div>
    </div>
  `;
}

function renderLitTypeSwitcher(block) {
  const activeKey = state.litSwitcher[block.id] || block.options[0].key;
  const activeOpt = block.options.find((o) => o.key === activeKey) || block.options[0];

  return `
    <div class="lit-switcher-box" data-switcher-id="${block.id}">
      <div class="segmented-tabs" role="tablist">
        ${block.options
          .map(
            (opt) => `
          <button
            type="button"
            role="tab"
            aria-selected="${opt.key === activeOpt.key}"
            class="seg-btn${opt.key === activeOpt.key ? ' is-active' : ''}"
            data-action="lit-switch"
            data-switcher="${block.id}"
            data-key="${opt.key}"
          >
            ${opt.label}
          </button>
        `
          )
          .join('')}
      </div>
      ${renderBilingualBlock({
        es: activeOpt.es,
        hy: activeOpt.hy,
        trId: `lit-${block.id}-${activeOpt.key}`
      })}
      <div class="question-actions">
        <button type="button" class="btn-secondary" data-action="copy-text" data-text="${escapeHtml(activeOpt.es)}">
          Скопировать (Copiar)
        </button>
      </div>
    </div>
  `;
}

function renderBlock(block, key) {
  switch (block.type) {
    case 'subtitle':
      return renderSubtitle(block);
    case 'bilingual':
      return renderBilingualBlock(block);
    case 'note':
      return `<div class="note-box">${block.html}</div>`;
    case 'list':
      return `<div>${block.items
        .map((item) => renderBilingualBlock({ es: item.es, hy: item.hy }))
        .join('')}</div>`;
    case 'metricCards':
      return renderMetricCards(block);
    case 'schemeStrip':
      return renderSchemeStrip(block);
    case 'wordCompare':
      return renderWordCompare(block);
    case 'table':
      return renderTable(block);
    case 'figuresGrid':
      return renderFiguresGrid(block);
    case 'reading':
      return renderReading(block, key);
    case 'qaList':
      return renderQaList(block);
    case 'classifyQuiz':
      return renderClassifyQuiz(block);
    case 'mcqQuiz':
      return renderMcqQuiz(block);
    case 'guidedResumen':
      return renderGuidedResumen(block);
    case 'checklist':
      return renderChecklist(block);
    case 'flashcards':
      return renderFlashcards(block);
    case 'litTypeSwitcher':
      return renderLitTypeSwitcher(block);
    default:
      return '';
  }
}

function renderApp() {
  applyFontScale();
  renderCounter = 0;
  const activeMod = MODULES.find((m) => m.id === state.activeModuleId) || MODULES[0];

  const html = `
    <header class="top-bar">
      <div class="top-bar-inner">
        <a href="#top" class="brand-mark" data-action="go-home">Español · Հայերեն 7.º</a>
        <nav class="nav-links" aria-label="Разделы подготовки">
          ${MODULES.map(
            (m) => `
              <button
                type="button"
                class="nav-link${m.id === activeMod.id ? ' is-active' : ''}"
                data-action="switch-module"
                data-module="${m.id}"
              >
                ${m.navLabel}
              </button>
            `
          ).join('')}
        </nav>
        <button type="button" class="btn-primary" data-action="toggle-all-translations">
          ${state.allTranslationsOpen ? 'Скрыть переводы' : 'Открыть переводы'}
        </button>
      </div>
    </header>

    <main id="top" class="page-shell">
      <div class="workspace-toolbar">
        <div class="toolbar-hint">
          Нажмите на любой <strong>испанский текст</strong> → откроется перевод на <strong>армянский</strong> · Под вопросами нажмите <strong>«Посмотреть ответ»</strong>
        </div>
        <div class="toolbar-controls">
          <div class="font-switcher" role="group" aria-label="Размер шрифта">
            <button type="button" class="font-btn${state.fontScale === 0.9 ? ' is-active' : ''}" data-action="set-font" data-scale="0.9">A-</button>
            <button type="button" class="font-btn${state.fontScale === 1 ? ' is-active' : ''}" data-action="set-font" data-scale="1">A</button>
            <button type="button" class="font-btn${state.fontScale === 1.1 ? ' is-active' : ''}" data-action="set-font" data-scale="1.1">A+</button>
            <button type="button" class="font-btn${state.fontScale === 1.22 ? ' is-active' : ''}" data-action="set-font" data-scale="1.22">A++</button>
          </div>
          <button type="button" class="btn-secondary" data-action="toggle-all-answers">
            ${state.allAnswersOpen ? 'Скрыть все ответы' : 'Открыть все ответы'}
          </button>
        </div>
      </div>

      <section class="hero-card">
        <div class="hero-kicker">${activeMod.kicker}</div>
        <h1 class="hero-title">${activeMod.title}</h1>
        <p class="hero-sub">${activeMod.subtitle}</p>
        ${
          activeMod.introNotes && activeMod.introNotes.length
            ? `<div style="margin-top:1.15rem;">
                ${activeMod.introNotes.map((n) => `<div class="note-box">${n}</div>`).join('')}
              </div>`
            : ''
        }
      </section>

      <nav class="jump-bar" aria-label="Быстрый переход по разделу">
        ${activeMod.sections
          .map((sec) => `<a class="jump-link" href="#${sec.id}">${sec.jumpLabel}</a>`)
          .join('')}
      </nav>

      ${activeMod.sections
        .map(
          (sec) => `
          <section class="study-section" id="${sec.id}">
            <h2 class="section-heading">${sec.title}</h2>
            ${sec.blocks.map((b, idx) => renderBlock(b, `${sec.id}-b${idx}`)).join('')}
          </section>
        `
        )
        .join('')}
    </main>
  `;

  const root = document.getElementById('app');
  if (root) {
    root.innerHTML = html;
  }
}

function updateQaCounter(groupId) {
  if (!groupId) return;
  const groupEl = document.querySelector(`[data-qa-group="${groupId}"]`);
  const counterEl = document.querySelector(`[data-qa-counter="${groupId}"]`);
  if (!groupEl || !counterEl) return;
  const panels = groupEl.querySelectorAll('.answer-panel');
  const open = groupEl.querySelectorAll('.answer-panel.is-open');
  counterEl.textContent = `${open.length} / ${panels.length} ответов открыто`;
}

function toggleClickBlock(el) {
  const isOpen = el.classList.toggle('is-open');
  el.setAttribute('aria-expanded', String(isOpen));
  const trId = el.dataset.trId;
  if (trId) {
    if (isOpen) state.openTranslations.add(trId);
    else state.openTranslations.delete(trId);
  }
  const cue = el.querySelector(':scope > .es-click-header > .tr-cue');
  if (cue) {
    cue.textContent = isOpen ? 'Скрыть ↑' : 'Հայերեն ↓';
  }
}

function toggleTableRow(row) {
  const isOpen = row.classList.toggle('is-open');
  const trId = row.dataset.trId;
  if (trId) {
    if (isOpen) state.openTranslations.add(trId);
    else state.openTranslations.delete(trId);
  }
  const cue = row.querySelector('.tr-cue');
  if (cue) {
    cue.textContent = isOpen ? 'Скрыть ↑' : 'Հայերեն ↓';
  }
}

document.addEventListener('click', (event) => {
  const actionBtn = event.target.closest('[data-action]');

  if (actionBtn) {
    const action = actionBtn.dataset.action;

    if (action === 'go-home') {
      event.preventDefault();
      state.activeModuleId = MODULE_1.id;
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (action === 'switch-module') {
      state.activeModuleId = actionBtn.dataset.module;
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (action === 'set-font') {
      state.fontScale = Number(actionBtn.dataset.scale) || 1;
      renderApp();
      return;
    }

    if (action === 'toggle-all-translations') {
      state.allTranslationsOpen = !state.allTranslationsOpen;
      if (!state.allTranslationsOpen) {
        state.openTranslations.clear();
      }
      renderApp();
      return;
    }

    if (action === 'toggle-all-answers') {
      state.allAnswersOpen = !state.allAnswersOpen;
      if (!state.allAnswersOpen) {
        state.openAnswers.clear();
      }
      renderApp();
      return;
    }

    if (action === 'toggle-reading') {
      const targetId = actionBtn.dataset.target;
      const box = document.querySelector(`[data-reading-id="${targetId}"]`);
      if (!box) return;
      const blocks = Array.from(box.querySelectorAll('.es-click-block'));
      const anyClosed = blocks.some((b) => !b.classList.contains('is-open'));
      blocks.forEach((b) => {
        b.classList.toggle('is-open', anyClosed);
        b.setAttribute('aria-expanded', String(anyClosed));
        if (b.dataset.trId) {
          if (anyClosed) state.openTranslations.add(b.dataset.trId);
          else state.openTranslations.delete(b.dataset.trId);
        }
        const cue = b.querySelector(':scope > .es-click-header > .tr-cue');
        if (cue) cue.textContent = anyClosed ? 'Скрыть ↑' : 'Հայերեն ↓';
      });
      actionBtn.textContent = anyClosed ? 'Скрыть перевод текста' : 'Перевод всего текста';
      return;
    }

    if (action === 'toggle-answer') {
      const targetId = actionBtn.dataset.target;
      const panel = document.getElementById(targetId);
      if (!panel) return;
      const isOpen = panel.classList.toggle('is-open');
      if (isOpen) state.openAnswers.add(targetId);
      else state.openAnswers.delete(targetId);
      actionBtn.classList.toggle('is-open', isOpen);
      actionBtn.textContent = isOpen ? 'Скрыть ответ' : 'Посмотреть ответ';
      updateQaCounter(actionBtn.dataset.group);
      return;
    }

    if (action === 'qa-show-all') {
      const groupId = actionBtn.dataset.group;
      const groupEl = document.querySelector(`[data-qa-group="${groupId}"]`);
      if (!groupEl) return;
      groupEl.querySelectorAll('.answer-panel').forEach((p) => {
        p.classList.add('is-open');
        state.openAnswers.add(p.id);
      });
      groupEl.querySelectorAll('[data-action="toggle-answer"]').forEach((btn) => {
        btn.classList.add('is-open');
        btn.textContent = 'Скрыть ответ';
      });
      updateQaCounter(groupId);
      return;
    }

    if (action === 'qa-reset') {
      const groupId = actionBtn.dataset.group;
      const groupEl = document.querySelector(`[data-qa-group="${groupId}"]`);
      if (!groupEl) return;
      groupEl.querySelectorAll('.answer-panel').forEach((p) => {
        p.classList.remove('is-open');
        state.openAnswers.delete(p.id);
      });
      groupEl.querySelectorAll('[data-action="toggle-answer"]').forEach((btn) => {
        btn.classList.remove('is-open');
        btn.textContent = 'Посмотреть ответ';
      });
      updateQaCounter(groupId);
      return;
    }

    if (action === 'classify-check') {
      const quizId = actionBtn.dataset.quiz;
      state.classifyChecked[quizId] = true;
      renderApp();
      return;
    }

    if (action === 'classify-reset') {
      const quizId = actionBtn.dataset.quiz;
      state.classifySelections[quizId] = {};
      state.classifyChecked[quizId] = false;
      renderApp();
      return;
    }

    if (action === 'mcq-pick') {
      const quizId = actionBtn.dataset.quiz;
      const itemId = actionBtn.dataset.item;
      const idx = Number(actionBtn.dataset.index);
      if (!state.mcqSelections[quizId]) state.mcqSelections[quizId] = {};
      state.mcqSelections[quizId][itemId] = idx;
      state.mcqChecked[quizId] = false;
      renderApp();
      return;
    }

    if (action === 'mcq-check') {
      const quizId = actionBtn.dataset.quiz;
      state.mcqChecked[quizId] = true;
      renderApp();
      return;
    }

    if (action === 'mcq-reset') {
      const quizId = actionBtn.dataset.quiz;
      state.mcqSelections[quizId] = {};
      state.mcqChecked[quizId] = false;
      renderApp();
      return;
    }

    if (action === 'guided-reset') {
      const guidedId = actionBtn.dataset.guided;
      Object.keys(state.guidedInputs).forEach((k) => {
        if (k.startsWith('m4-d') || k === guidedId + '_full') {
          delete state.guidedInputs[k];
        }
      });
      renderApp();
      return;
    }

    if (action === 'guided-copy') {
      const ta = document.getElementById(actionBtn.dataset.target);
      if (ta && ta.value.trim()) {
        navigator.clipboard?.writeText(ta.value).catch(() => {});
        const prev = actionBtn.textContent;
        actionBtn.textContent = 'Скопировано!';
        setTimeout(() => {
          actionBtn.textContent = prev;
        }, 1500);
      }
      return;
    }

    if (action === 'checklist-reset') {
      const listId = actionBtn.dataset.list;
      state.checklists[listId] = {};
      saveChecklists();
      renderApp();
      return;
    }

    if (action === 'flashcard-prev' || action === 'flashcard-next') {
      const fcId = actionBtn.dataset.fc;
      const total = Number(actionBtn.dataset.total) || 1;
      const cur = state.flashcardIndex[fcId] ?? 0;
      state.flashcardIndex[fcId] =
        action === 'flashcard-next' ? (cur + 1) % total : (cur - 1 + total) % total;
      renderApp();
      return;
    }

    if (action === 'lit-switch') {
      const swId = actionBtn.dataset.switcher;
      state.litSwitcher[swId] = actionBtn.dataset.key;
      renderApp();
      return;
    }

    if (action === 'copy-text') {
      const txt = actionBtn.dataset.text || '';
      if (txt) {
        navigator.clipboard?.writeText(txt).catch(() => {});
        const prev = actionBtn.textContent;
        actionBtn.textContent = 'Скопировано!';
        setTimeout(() => {
          actionBtn.textContent = prev;
        }, 1500);
      }
      return;
    }
  }

  if (event.target.closest('input, textarea, select, button, a')) return;

  const esBlock = event.target.closest('.es-click-block');
  if (esBlock) {
    toggleClickBlock(esBlock);
    return;
  }

  const tableRow = event.target.closest('tr.clickable-row');
  if (tableRow) {
    toggleTableRow(tableRow);
  }
});

document.addEventListener('change', (event) => {
  const el = event.target;
  const action = el.dataset?.action;

  if (action === 'classify-select') {
    const quizId = el.dataset.quiz;
    const itemId = el.dataset.item;
    if (!state.classifySelections[quizId]) state.classifySelections[quizId] = {};
    state.classifySelections[quizId][itemId] = el.value;
    state.classifyChecked[quizId] = false;
    renderApp();
    return;
  }

  if (action === 'checklist-toggle') {
    const listId = el.dataset.list;
    const idx = el.dataset.index;
    if (!state.checklists[listId]) state.checklists[listId] = {};
    state.checklists[listId][idx] = el.checked;
    saveChecklists();
    renderApp();
  }
});

document.addEventListener('input', (event) => {
  const el = event.target;
  if (el.dataset?.action === 'guided-input') {
    state.guidedInputs[el.dataset.key] = el.value;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const target = event.target;
  if (target.matches('.es-click-block')) {
    event.preventDefault();
    toggleClickBlock(target);
  } else if (target.matches('tr.clickable-row')) {
    event.preventDefault();
    toggleTableRow(target);
  }
});

renderApp();
