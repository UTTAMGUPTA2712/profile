/*
 * resume-render.js — turns the master data in resume-data.js into CV / cover-letter HTML.
 * Shared by builder.html (Resume Studio) and cv.html so both always render identically.
 */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  function presetKeys(data) {
    return Object.keys(data.presets);
  }

  function resolvePreset(data, key) {
    return data.presets[key] ? key : data.defaultPreset;
  }

  // Ids shown by default for a preset (Zenmonk/Buck/Maity bullets + projects).
  function defaultActiveIds(data, key) {
    const p = data.presets[key];
    const ids = new Set(p.projects || []);
    Object.values(p.bullets || {}).forEach(list => list.forEach(id => ids.add(id)));
    return ids;
  }

  // Bullets of a job in display order: preset order first, then the rest in master order.
  function orderedBullets(job, preset) {
    const order = (preset.bullets && preset.bullets[job.id]) || [];
    const byId = Object.fromEntries(job.bullets.map(b => [b.id, b]));
    const first = order.map(id => byId[id]).filter(Boolean);
    const rest = job.bullets.filter(b => !order.includes(b.id));
    return first.concat(rest);
  }

  function orderedProjects(data, preset) {
    const order = preset.projects || [];
    const byId = Object.fromEntries(data.projects.map(p => [p.id, p]));
    const first = order.map(id => byId[id]).filter(Boolean);
    const rest = data.projects.filter(p => !order.includes(p.id));
    return first.concat(rest);
  }

  function titleLine(job) {
    if (!job.titles || !job.titles.length) return esc(job.role || '');
    const current = job.titles[job.titles.length - 1];
    return esc(current.title);
  }

  function progressionLine(job) {
    if (!job.titles || job.titles.length < 2) return '';
    return job.titles.map(t => `${esc(t.title)} <span class="prog-date">(${esc(t.from)})</span>`).join(' &rarr; ');
  }

  function contactHtml(b) {
    return `
      <span><i class="fa-solid fa-location-dot"></i> ${esc(b.location)}</span> |
      <span><i class="fa-solid fa-phone"></i> ${esc(b.phone)}</span> |
      <a href="mailto:${esc(b.email)}"><i class="fa-solid fa-envelope"></i> ${esc(b.email)}</a> |
      <a href="https://${esc(b.portfolio)}" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> ${esc(b.portfolio)}</a> |
      <a href="https://${esc(b.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> ${esc(b.github)}</a> |
      <a href="${esc(b.linkedinUrl || 'https://' + b.linkedin)}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> ${esc(b.linkedin)}</a>`;
  }

  function headerHtml(data, preset) {
    return `
      <header class="cv-header">
        <h1>${esc(data.basics.name)}</h1>
        <div class="role-title">${esc(preset.title)}</div>
        <div class="contact-info">${contactHtml(data.basics)}</div>
      </header>`;
  }

  /*
   * Full CV markup for one preset.
   * active: Set of bullet/project ids to show (defaults to the preset's own lists).
   * summary: optional override (Resume Studio's AI tailoring).
   */
  function cvHtml(data, key, active, summary) {
    key = resolvePreset(data, key);
    const preset = data.presets[key];
    active = active || defaultActiveIds(data, key);

    const skillsHtml = (preset.skills || Object.keys(data.skills))
      .filter(g => data.skills[g])
      .map(g => `<div class="skill-category"><strong>${esc(g)}:</strong> ${esc(data.skills[g])}</div>`)
      .join('');

    const expHtml = data.experience.map(job => {
      const visible = orderedBullets(job, preset).filter(b => active.has(b.id));
      if (!visible.length) return '';
      const lis = visible.map(b => `<li><strong>${esc(b.lead)}:</strong> ${b.text}</li>`).join('');
      const url = job.url
        ? ` &middot; <a href="${esc(job.url)}" target="_blank" rel="noopener" class="live-link">${esc(job.url.replace(/^https?:\/\//, ''))}</a>`
        : '';
      const prog = progressionLine(job);
      return `
        <div class="experience-item">
          <div class="exp-header">
            <div>
              <h3>${titleLine(job)}</h3>
              <div class="company">${esc(job.company)}${url}</div>
            </div>
            <span class="date">${esc(job.dates)}</span>
          </div>
          ${prog ? `<div class="progression">${prog}</div>` : ''}
          <ul class="exp-details">${lis}</ul>
        </div>`;
    }).join('');

    const projects = orderedProjects(data, preset).filter(p => active.has(p.id));
    const projHtml = projects.map(p => {
      const tech = p.tech ? ` <span class="tech-tag">[${esc(p.tech)}]</span>` : '';
      const href = p.github || p.url;
      const label = p.github ? '<i class="fa-brands fa-github"></i> Source' : '<i class="fa-solid fa-arrow-up-right-from-square"></i> Live';
      const link = href ? ` <span class="project-links"><a href="${esc(href)}" target="_blank" rel="noopener">${label}</a></span>` : '';
      return `<li><strong>${esc(p.name)}</strong>${tech}: ${p.text}${link}</li>`;
    }).join('');

    const edu = data.education[0];
    const cert = (data.certificates || []).find(c => c.show !== false);
    const eduHtml = `
      <div class="edu-cert-row">
        <div class="edu-cert-item">
          <strong>${esc(edu.studyType)}, ${esc(edu.area)}</strong> — ${esc(edu.institution)}
          <div class="edu-meta">${esc(edu.dates)} · ${esc(edu.score)}</div>
        </div>
        ${cert ? `
        <div class="edu-cert-item" style="text-align: right;">
          <strong>${esc(cert.name)}</strong> — ${esc(cert.issuer)}
          <div class="edu-meta">${esc(cert.date)}</div>
        </div>` : ''}
      </div>`;

    return `
      ${headerHtml(data, preset)}
      <section class="cv-section">
        <h2>Professional Summary</h2>
        <p>${esc(summary || preset.summary)}</p>
      </section>
      <section class="cv-section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">${skillsHtml}</div>
      </section>
      <section class="cv-section">
        <h2>Professional Experience</h2>
        ${expHtml}
      </section>
      ${projHtml ? `
      <section class="cv-section">
        <h2>${esc(preset.projectsHeading || 'Selected Projects')}</h2>
        <ul class="projects-list">${projHtml}</ul>
      </section>` : ''}
      <section class="cv-section">
        <h2>${cert ? 'Education &amp; Certification' : 'Education'}</h2>
        ${eduHtml}
      </section>`;
  }

  // Cover-letter text pieces for one preset. hook = the "why this company" line.
  function coverLetterParts(data, key, { role, company, hook } = {}) {
    key = resolvePreset(data, key);
    const preset = data.presets[key];
    const cl = preset.coverLetter;
    role = role || preset.title;
    company = company || '[Company]';
    const fill = s => s.replace(/\{role\}/g, role).replace(/\{company\}/g, company);
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const paras = [
      fill(cl.intro),
      fill(cl.body),
      hook || `[Add one specific reason you want to work at ${company} here — a product, engineering challenge, or mission. Do not send this letter without it.]`,
      fill(cl.close),
      'Sincerely,',
      data.basics.name,
    ];
    return { b: data.basics, preset, role, company, date, subject: `Application for ${role} at ${company}`, paras };
  }

  window.ResumeRender = {
    esc, presetKeys, resolvePreset, defaultActiveIds, orderedBullets, orderedProjects,
    headerHtml, cvHtml, coverLetterParts,
  };
})();
