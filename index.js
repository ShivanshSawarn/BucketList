function toggle(el) {
    el.classList.toggle('done');
    const check = el.querySelector('.nb-check');
    const tag   = el.querySelector('.nb-tag');
    const isDone = el.classList.contains('done');
    check.textContent = isDone ? '✓' : '';
    tag.textContent   = isDone ? 'done!' : (tag.dataset.orig || 'goal');
  }