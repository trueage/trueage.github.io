/**
 * TrueAge | Exact Age Calculator & Milestone Tracker
 * High-Performance Vanilla ES6 Date Engine & 60FPS UI
 * Author: Kishara Dilshan (https://buymeacoffee.com/kisharadilz)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Planetary Constants & Astrological Data
  // =========================================================================
  const PLANETS = [
    { id: 'mercury', name: 'Mercury', period: 0.2408467, sphereClass: 'sphere-mercury' },
    { id: 'venus',   name: 'Venus',   period: 0.61519726, sphereClass: 'sphere-venus' },
    { id: 'mars',    name: 'Mars',    period: 1.8808158,  sphereClass: 'sphere-mars' },
    { id: 'jupiter', name: 'Jupiter', period: 11.862615,  sphereClass: 'sphere-jupiter' },
    { id: 'saturn',  name: 'Saturn',  period: 29.447498,  sphereClass: 'sphere-saturn' },
    { id: 'uranus',  name: 'Uranus',  period: 84.016846,  sphereClass: 'sphere-uranus' },
    { id: 'neptune', name: 'Neptune', period: 164.79132,  sphereClass: 'sphere-neptune' }
  ];

  const ZODIAC_SIGNS = [
    { sign: 'Capricorn', icon: '♑', endMonth: 1, endDay: 19 },
    { sign: 'Aquarius',  icon: '♒', endMonth: 2, endDay: 18 },
    { sign: 'Pisces',    icon: '♓', endMonth: 3, endDay: 20 },
    { sign: 'Aries',     icon: '♈', endMonth: 4, endDay: 19 },
    { sign: 'Taurus',    icon: '♉', endMonth: 5, endDay: 20 },
    { sign: 'Gemini',    icon: '♊', endMonth: 6, endDay: 20 },
    { sign: 'Cancer',    icon: '♋', endMonth: 7, endDay: 22 },
    { sign: 'Leo',       icon: '♌', endMonth: 8, endDay: 22 },
    { sign: 'Virgo',     icon: '♍', endMonth: 9, endDay: 22 },
    { sign: 'Libra',     icon: '♎', endMonth: 10, endDay: 22 },
    { sign: 'Scorpio',   icon: '♏', endMonth: 11, endDay: 21 },
    { sign: 'Sagittarius', icon: '♐', endMonth: 12, endDay: 21 },
    { sign: 'Capricorn', icon: '♑', endMonth: 12, endDay: 31 }
  ];

  const CHINESE_ZODIAC = [
    { name: 'Rat', icon: '🐀' },
    { name: 'Ox', icon: '🐂' },
    { name: 'Tiger', icon: '🐅' },
    { name: 'Rabbit', icon: '🐇' },
    { name: 'Dragon', icon: '🐉' },
    { name: 'Snake', icon: '🐍' },
    { name: 'Horse', icon: '🐎' },
    { name: 'Goat', icon: '🐐' },
    { name: 'Monkey', icon: '🐒' },
    { name: 'Rooster', icon: '🐓' },
    { name: 'Dog', icon: '🐕' },
    { name: 'Pig', icon: '🐖' }
  ];

  const DAYS_OF_WEEK = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  // =========================================================================
  // 2. DOM Elements Cache (Prevents repetitive querySelector thrashing)
  // =========================================================================
  const DOM = {
    // Form & Controls
    dobInput: document.getElementById('dob'),
    birthTimeInput: document.getElementById('birthTime'),
    btnCalculate: document.getElementById('btnCalculate'),
    btnExample: document.getElementById('btnExample'),
    btnReset: document.getElementById('btnReset'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    langSelect: document.getElementById('langSelect'),
    resultsContainer: document.getElementById('resultsContainer'),

    // Live Digital Counters
    valYears: document.getElementById('valYears'),
    valMonths: document.getElementById('valMonths'),
    valDays: document.getElementById('valDays'),
    valHours: document.getElementById('valHours'),
    valMinutes: document.getElementById('valMinutes'),
    valSeconds: document.getElementById('valSeconds'),

    // Birthday Info
    valNextBdayCountdown: document.getElementById('valNextBdayCountdown'),
    valNextBdayDay: document.getElementById('valNextBdayDay'),

    // Cumulative Statistics
    statTotalDays: document.getElementById('statTotalDays'),
    statTotalHours: document.getElementById('statTotalHours'),
    statTotalMinutes: document.getElementById('statTotalMinutes'),
    statTotalSeconds: document.getElementById('statTotalSeconds'),
    statTotalBreaths: document.getElementById('statTotalBreaths'),
    statTotalHeartbeats: document.getElementById('statTotalHeartbeats'),

    // Dynamic Lists & Cards
    milestonesGrid: document.getElementById('milestonesGrid'),
    planetsGrid: document.getElementById('planetsGrid'),

    // Astrological Profile
    iconZodiac: document.getElementById('iconZodiac'),
    valZodiacSign: document.getElementById('valZodiacSign'),
    iconChineseZodiac: document.getElementById('iconChineseZodiac'),
    valChineseZodiac: document.getElementById('valChineseZodiac'),
    valDayBorn: document.getElementById('valDayBorn'),
    valGeneration: document.getElementById('valGeneration'),

    // Action Toolbar
    btnCopySummary: document.getElementById('btnCopySummary'),
    btnCopyLink: document.getElementById('btnCopyLink'),
    btnShareWhatsApp: document.getElementById('btnShareWhatsApp'),
    btnShareTwitter: document.getElementById('btnShareTwitter'),
    btnPrint: document.getElementById('btnPrint'),

    // Footer
    currentYear: document.getElementById('currentYear')
  };

  // State
  let activeBirthDate = null;
  let rafId = null;
  let lastSecondValue = -1;

  // =========================================================================
  // 3. High-Precision Calendar Math
  // =========================================================================
  /**
   * Returns exact days in a given month of a given year (1-indexed month)
   */
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  /**
   * High-precision exact age difference accounting for Gregorian month lengths & leap years
   * @param {Date} birthDate 
   * @param {Date} now 
   * @returns {Object} { years, months, days, hours, minutes, seconds, milliseconds, totalMs }
   */
  function calculateExactAge(birthDate, now) {
    if (!birthDate || now < birthDate) {
      return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, totalMs: 0 };
    }

    let bYear = birthDate.getFullYear();
    let bMonth = birthDate.getMonth(); // 0-indexed
    let bDay = birthDate.getDate();
    let bHours = birthDate.getHours();
    let bMinutes = birthDate.getMinutes();
    let bSeconds = birthDate.getSeconds();
    let bMs = birthDate.getMilliseconds();

    let nYear = now.getFullYear();
    let nMonth = now.getMonth();
    let nDay = now.getDate();
    let nHours = now.getHours();
    let nMinutes = now.getMinutes();
    let nSeconds = now.getSeconds();
    let nMs = now.getMilliseconds();

    // Milliseconds
    let diffMs = nMs - bMs;
    if (diffMs < 0) {
      diffMs += 1000;
      nSeconds--;
    }

    // Seconds
    let diffSeconds = nSeconds - bSeconds;
    if (diffSeconds < 0) {
      diffSeconds += 60;
      nMinutes--;
    }

    // Minutes
    let diffMinutes = nMinutes - bMinutes;
    if (diffMinutes < 0) {
      diffMinutes += 60;
      nHours--;
    }

    // Hours
    let diffHours = nHours - bHours;
    if (diffHours < 0) {
      diffHours += 24;
      nDay--;
    }

    // Days & Months with exact previous month length borrowing
    let diffDays = nDay - bDay;
    if (diffDays < 0) {
      // Days in previous month relative to `now`
      const prevMonthDays = getDaysInMonth(nYear, nMonth === 0 ? 12 : nMonth);
      diffDays += prevMonthDays;
      nMonth--;
    }

    // Months
    let diffMonths = nMonth - bMonth;
    if (diffMonths < 0) {
      diffMonths += 12;
      nYear--;
    }

    // Years
    let diffYears = nYear - bYear;

    return {
      years: diffYears,
      months: diffMonths,
      days: diffDays,
      hours: diffHours,
      minutes: diffMinutes,
      seconds: diffSeconds,
      milliseconds: diffMs,
      totalMs: now.getTime() - birthDate.getTime()
    };
  }

  // =========================================================================
  // 4. Milestone Engine
  // =========================================================================
  /**
   * Returns calculated life milestones with status, countdown, and progress percentage
   */
  function calculateMilestones(birthDate, now) {
    const birthMs = birthDate.getTime();
    const nowMs = now.getTime();

    // Next Half-Birthday Calculation
    let bMonth = birthDate.getMonth();
    let bDay = birthDate.getDate();
    let halfMonth = (bMonth + 6) % 12;
    let targetYear = now.getFullYear();

    // Check half-birthday for this year
    let maxDays = getDaysInMonth(targetYear, halfMonth + 1);
    let clampedDay = Math.min(bDay, maxDays);
    let halfBdayDate = new Date(targetYear, halfMonth, clampedDay, birthDate.getHours(), birthDate.getMinutes());

    if (halfBdayDate.getTime() <= nowMs) {
      targetYear++;
      maxDays = getDaysInMonth(targetYear, halfMonth + 1);
      clampedDay = Math.min(bDay, maxDays);
      halfBdayDate = new Date(targetYear, halfMonth, clampedDay, birthDate.getHours(), birthDate.getMinutes());
    }

    const milestoneDefinitions = [
      {
        id: '10k_days',
        name: '10,000th Day Alive',
        subtitle: '~27 Years & 4.5 Months',
        targetMs: birthMs + (10000 * 86400000)
      },
      {
        id: '500m_sec',
        name: '500 Million Seconds',
        subtitle: '~15 Years & 10 Months',
        targetMs: birthMs + (500000000 * 1000)
      },
      {
        id: '1b_sec',
        name: '1 Billion Seconds',
        subtitle: '~31 Years & 8.5 Months',
        targetMs: birthMs + (1000000000 * 1000)
      },
      {
        id: '20k_days',
        name: '20,000th Day Alive',
        subtitle: '~54 Years & 9 Months',
        targetMs: birthMs + (20000 * 86400000)
      },
      {
        id: '100k_hours',
        name: '100,000 Hours Alive',
        subtitle: '~11 Years & 5 Months',
        targetMs: birthMs + (100000 * 3600000)
      },
      {
        id: '250k_hours',
        name: '250,000 Hours Alive',
        subtitle: '~28 Years & 6 Months',
        targetMs: birthMs + (250000 * 3600000)
      },
      {
        id: 'next_half_bday',
        name: 'Next Half-Birthday',
        subtitle: '6-Month Midpoint Celebration',
        targetMs: halfBdayDate.getTime()
      }
    ];

    return milestoneDefinitions.map(m => {
      const isAchieved = nowMs >= m.targetMs;
      const targetDate = new Date(m.targetMs);
      let progress = 0;
      let daysRemaining = 0;

      if (isAchieved) {
        progress = 100;
      } else {
        const totalDuration = m.targetMs - birthMs;
        const elapsed = nowMs - birthMs;
        progress = Math.max(0, Math.min(99.9, (elapsed / totalDuration) * 100));
        daysRemaining = Math.ceil((m.targetMs - nowMs) / 86400000);
      }

      return {
        ...m,
        dateFormatted: targetDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
        isAchieved,
        progress: progress.toFixed(1),
        daysRemaining
      };
    });
  }

  // =========================================================================
  // 5. Planetary Age Engine
  // =========================================================================
  function calculatePlanetaryAges(totalDaysAlive) {
    const earthYears = totalDaysAlive / 365.2422;

    return PLANETS.map(planet => {
      const planetaryAge = earthYears / planet.period;
      // Next planetary birthday (e.g. next integer turn)
      const nextTurn = Math.ceil(planetaryAge);
      const remainingPlanetaryFraction = nextTurn - planetaryAge;
      const daysUntilNext = Math.round(remainingPlanetaryFraction * planet.period * 365.2422);

      return {
        ...planet,
        age: planetaryAge.toFixed(2),
        daysUntilNext
      };
    });
  }

  // =========================================================================
  // 6. Astrological & Generation Insights
  // =========================================================================
  function getZodiacSign(month, day) {
    // month is 1-12
    for (const z of ZODIAC_SIGNS) {
      if (month < z.endMonth || (month === z.endMonth && day <= z.endDay)) {
        return { sign: z.sign, icon: z.icon };
      }
    }
    return { sign: 'Capricorn', icon: '♑' };
  }

  function getChineseZodiac(year) {
    // 1900 was year of the Rat (index 0)
    const baseYear = 1900;
    const index = (year - baseYear) % 12;
    const normalizedIndex = index >= 0 ? index : index + 12;
    return CHINESE_ZODIAC[normalizedIndex];
  }

  function getGeneration(year) {
    if (year <= 1945) return 'Silent Generation (<= 1945)';
    if (year <= 1964) return 'Baby Boomer (1946–1964)';
    if (year <= 1980) return 'Generation X (1965–1980)';
    if (year <= 1996) return 'Millennial (1981–1996)';
    if (year <= 2012) return 'Generation Z (1997–2012)';
    if (year <= 2024) return 'Generation Alpha (2013–2024)';
    return 'Generation Beta (2025+)';
  }

  // =========================================================================
  // 7. Next Birthday Countdown
  // =========================================================================
  function getNextBirthdayInfo(birthDate, now) {
    const bMonth = birthDate.getMonth();
    const bDay = birthDate.getDate();
    let targetYear = now.getFullYear();

    let maxDays = getDaysInMonth(targetYear, bMonth + 1);
    let clampedDay = Math.min(bDay, maxDays);
    let nextBday = new Date(targetYear, bMonth, clampedDay, birthDate.getHours(), birthDate.getMinutes(), birthDate.getSeconds());

    if (nextBday.getTime() <= now.getTime()) {
      targetYear++;
      maxDays = getDaysInMonth(targetYear, bMonth + 1);
      clampedDay = Math.min(bDay, maxDays);
      nextBday = new Date(targetYear, bMonth, clampedDay, birthDate.getHours(), birthDate.getMinutes(), birthDate.getSeconds());
    }

    const diffMs = nextBday.getTime() - now.getTime();
    const days = Math.floor(diffMs / 86400000);
    const hours = Math.floor((diffMs % 86400000) / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);
    const dayOfWeek = DAYS_OF_WEEK[nextBday.getDay()];

    return {
      days,
      hours,
      minutes,
      seconds,
      dayOfWeek,
      formattedCountdown: `${days}d ${hours}h ${minutes}m ${seconds}s`
    };
  }

  // =========================================================================
  // 8. 60FPS Render Loop (requestAnimationFrame with Zero Layout Thrashing)
  // =========================================================================
  function safeSetText(element, value) {
    if (element && element.textContent !== value) {
      element.textContent = value;
    }
  }

  const requestAnimFrame = typeof requestAnimationFrame !== 'undefined'
    ? requestAnimationFrame
    : (callback) => setTimeout(callback, 1000 / 60);

  const cancelAnimFrame = typeof cancelAnimationFrame !== 'undefined'
    ? cancelAnimationFrame
    : (id) => clearTimeout(id);

  function startRealtimeTicker() {
    if (rafId) {
      cancelAnimFrame(rafId);
    }

    function tick() {
      if (!activeBirthDate) return;

      const now = new Date();
      const age = calculateExactAge(activeBirthDate, now);

      // Mutate digital age counters only when changed
      safeSetText(DOM.valYears, age.years.toString());
      safeSetText(DOM.valMonths, age.months.toString());
      safeSetText(DOM.valDays, age.days.toString());
      safeSetText(DOM.valHours, String(age.hours).padStart(2, '0'));
      safeSetText(DOM.valMinutes, String(age.minutes).padStart(2, '0'));
      safeSetText(DOM.valSeconds, String(age.seconds).padStart(2, '0'));

      // Update seconds-level cumulative stats once per second to conserve CPU
      if (age.seconds !== lastSecondValue) {
        lastSecondValue = age.seconds;
        updateCumulativeStats(activeBirthDate, now, age.totalMs);
        updateBirthdayCountdown(activeBirthDate, now);
      }

      rafId = requestAnimFrame(tick);
    }

    rafId = requestAnimFrame(tick);
  }

  function updateCumulativeStats(birthDate, now, totalMs) {
    const totalDays = Math.floor(totalMs / 86400000);
    const totalHours = Math.floor(totalMs / 3600000);
    const totalMinutes = Math.floor(totalMs / 60000);
    const totalSeconds = Math.floor(totalMs / 1000);
    const totalBreaths = Math.floor((totalMs / 60000) * 16);
    const totalHeartbeats = Math.floor((totalMs / 60000) * 75);

    safeSetText(DOM.statTotalDays, totalDays.toLocaleString());
    safeSetText(DOM.statTotalHours, totalHours.toLocaleString());
    safeSetText(DOM.statTotalMinutes, totalMinutes.toLocaleString());
    safeSetText(DOM.statTotalSeconds, totalSeconds.toLocaleString());
    safeSetText(DOM.statTotalBreaths, totalBreaths.toLocaleString());
    safeSetText(DOM.statTotalHeartbeats, totalHeartbeats.toLocaleString());
  }

  function updateBirthdayCountdown(birthDate, now) {
    const bdayInfo = getNextBirthdayInfo(birthDate, now);
    safeSetText(DOM.valNextBdayCountdown, bdayInfo.formattedCountdown);
    safeSetText(DOM.valNextBdayDay, `Celebration falls on a ${bdayInfo.dayOfWeek}`);
  }

  // =========================================================================
  // 9. Static Card Renderers (Milestones, Planets, Profile)
  // =========================================================================
  function renderMilestones(birthDate, now) {
    const milestones = calculateMilestones(birthDate, now);
    if (!DOM.milestonesGrid) return;

    let html = '';
    milestones.forEach(m => {
      const badgeClass = m.isAchieved ? 'badge-achieved' : 'badge-upcoming';
      const badgeText = m.isAchieved ? '✓ Achieved' : `${m.daysRemaining.toLocaleString()} days left`;
      
      html += `
        <div class="milestone-card">
          <div class="milestone-header">
            <div>
              <div class="milestone-name">${m.name}</div>
              <div class="milestone-date">${m.subtitle} • ${m.dateFormatted}</div>
            </div>
            <span class="milestone-badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="progress-track" aria-label="Progress: ${m.progress}%">
            <div class="progress-fill" style="width: ${m.progress}%;"></div>
          </div>
          <div class="progress-meta">
            <span>${m.isAchieved ? 'Milestone Completed' : 'Progress to date'}</span>
            <span>${m.progress}%</span>
          </div>
        </div>
      `;
    });

    DOM.milestonesGrid.innerHTML = html;
  }

  function renderPlanets(birthDate, now) {
    const totalDays = Math.floor((now.getTime() - birthDate.getTime()) / 86400000);
    const planets = calculatePlanetaryAges(totalDays);
    if (!DOM.planetsGrid) return;

    let html = '';
    planets.forEach(p => {
      html += `
        <div class="planet-card">
          <div class="planet-sphere ${p.sphereClass}"></div>
          <div class="planet-name">${p.name}</div>
          <div class="planet-age">${p.age}</div>
          <div class="planet-sub">Planetary Years</div>
          <div class="progress-meta" style="width: 100%; margin-top: 0.25rem;">
            <span>Next orbit:</span>
            <span>${p.daysUntilNext.toLocaleString()} Earth days</span>
          </div>
        </div>
      `;
    });

    DOM.planetsGrid.innerHTML = html;
  }

  function renderProfile(birthDate) {
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    const year = birthDate.getFullYear();

    const zodiac = getZodiacSign(month, day);
    const chinese = getChineseZodiac(year);
    const dayOfWeek = DAYS_OF_WEEK[birthDate.getDay()];
    const generation = getGeneration(year);

    safeSetText(DOM.iconZodiac, zodiac.icon);
    safeSetText(DOM.valZodiacSign, zodiac.sign);
    safeSetText(DOM.iconChineseZodiac, chinese.icon);
    safeSetText(DOM.valChineseZodiac, chinese.name);
    safeSetText(DOM.valDayBorn, dayOfWeek);
    safeSetText(DOM.valGeneration, generation);
  }

  // =========================================================================
  // 10. URL State Management (Reading & Writing Parameters)
  // =========================================================================
  function updateUrlParams(dobStr, timeStr) {
    try {
      const url = new URL(window.location.href);
      if (dobStr) {
        url.searchParams.set('dob', dobStr);
      } else {
        url.searchParams.delete('dob');
      }

      if (timeStr && timeStr !== '00:00:00' && timeStr !== '00:00') {
        url.searchParams.set('time', timeStr);
      } else {
        url.searchParams.delete('time');
      }

      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      console.warn('Unable to update URL state:', e);
    }
  }

  function loadFromUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      const dobParam = params.get('dob');
      const timeParam = params.get('time');

      if (dobParam && /^\d{4}-\d{2}-\d{2}$/.test(dobParam)) {
        DOM.dobInput.value = dobParam;
        if (timeParam) {
          DOM.birthTimeInput.value = timeParam;
        }
        executeCalculation();
        return true;
      }
    } catch (e) {
      console.warn('Error reading URL params:', e);
    }
    return false;
  }

  // =========================================================================
  // 11. Core Calculation Execution
  // =========================================================================
  function executeCalculation() {
    const dobValue = DOM.dobInput.value;
    if (!dobValue) {
      DOM.dobInput.focus();
      return;
    }

    const timeValue = DOM.birthTimeInput.value || '00:00:00';
    const [year, month, day] = dobValue.split('-').map(Number);
    const [hours, minutes, seconds = 0] = timeValue.split(':').map(Number);

    const birth = new Date(year, month - 1, day, hours, minutes, seconds);
    const now = new Date();

    if (isNaN(birth.getTime())) {
      alert('Please enter a valid date of birth.');
      return;
    }

    if (birth > now) {
      alert('Birth date cannot be in the future.');
      return;
    }

    activeBirthDate = birth;
    updateUrlParams(dobValue, timeValue);

    // Initial render of static and dynamic components
    const totalMs = now.getTime() - birth.getTime();
    updateCumulativeStats(birth, now, totalMs);
    updateBirthdayCountdown(birth, now);
    renderMilestones(birth, now);
    renderPlanets(birth, now);
    renderProfile(birth);

    // Launch 60FPS animation loop
    startRealtimeTicker();

    // Notify i18n / SEO schema listeners if attached
    if (window.TrueAge_onCalculate) {
      window.TrueAge_onCalculate(birth);
    }
  }

  // =========================================================================
  // 12. Action Toolbar Features: Copy, Share, Print
  // =========================================================================
  function showToast(message) {
    let toast = document.getElementById('trueage-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'trueage-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.backgroundColor = '#0F172A';
      toast.style.color = '#92EEFF';
      toast.style.border = '1px solid #30AFFF';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '8px';
      toast.style.fontWeight = '700';
      toast.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
      toast.style.zIndex = '9999';
      toast.style.transition = 'opacity 0.3s ease';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2800);
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      alert('Failed to copy to clipboard.');
    }
    document.body.removeChild(textArea);
  }

  function copyAgeSummary() {
    if (!activeBirthDate) {
      showToast('Please calculate your age first!');
      return;
    }
    const age = calculateExactAge(activeBirthDate, new Date());
    const totalDays = DOM.statTotalDays.textContent;
    const totalHours = DOM.statTotalHours.textContent;
    const totalSeconds = DOM.statTotalSeconds.textContent;
    const zodiac = DOM.valZodiacSign.textContent;
    const shareUrl = window.location.href;

    const summary = [
      `🌟 TrueAge Summary Report 🌟`,
      `📅 Born: ${activeBirthDate.toLocaleDateString()}`,
      `⏱️ Exact Age: ${age.years} Years, ${age.months} Months, ${age.days} Days, ${age.hours} Hours, ${age.minutes} Minutes`,
      `📊 Total Days: ${totalDays} | Total Hours: ${totalHours}`,
      `⚡ Total Seconds Alive: ${totalSeconds}`,
      `✨ Zodiac: ${zodiac}`,
      `🔗 Calculate yours: ${shareUrl}`
    ].join('\n');

    copyTextToClipboard(summary, '✓ Age summary copied to clipboard!');
  }

  function copyShareLink() {
    copyTextToClipboard(window.location.href, '✓ Shareable URL copied to clipboard!');
  }

  function shareWhatsApp() {
    if (!activeBirthDate) {
      showToast('Please calculate your age first!');
      return;
    }
    const age = calculateExactAge(activeBirthDate, new Date());
    const text = encodeURIComponent(
      `I am exactly ${age.years} years, ${age.months} months, and ${age.days} days old (${DOM.statTotalDays.textContent} total days)! Check your exact age on TrueAge: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  function shareTwitter() {
    if (!activeBirthDate) {
      showToast('Please calculate your age first!');
      return;
    }
    const age = calculateExactAge(activeBirthDate, new Date());
    const text = encodeURIComponent(
      `I have been alive for ${DOM.statTotalDays.textContent} days (${age.years} years, ${age.months} months)! Track your exact chronological age in real-time:`
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }

  // =========================================================================
  // 13. Theme Switcher & Initialization
  // =========================================================================
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('trueage_theme', newTheme);
    } catch (e) {
      console.warn('LocalStorage unavailable:', e);
    }
  }

  function setupEventListeners() {
    // Calculator Form Submit & Buttons
    if (DOM.btnCalculate) {
      DOM.btnCalculate.addEventListener('click', executeCalculation);
    }

    if (DOM.dobInput) {
      // Set max date to today
      const todayIso = new Date().toISOString().split('T')[0];
      DOM.dobInput.setAttribute('max', todayIso);
      DOM.dobInput.addEventListener('change', () => {
        if (DOM.dobInput.value) {
          executeCalculation();
        }
      });
    }

    if (DOM.birthTimeInput) {
      DOM.birthTimeInput.addEventListener('change', () => {
        if (DOM.dobInput.value) {
          executeCalculation();
        }
      });
    }

    if (DOM.btnExample) {
      DOM.btnExample.addEventListener('click', () => {
        DOM.dobInput.value = '2000-01-01';
        DOM.birthTimeInput.value = '12:00:00';
        executeCalculation();
      });
    }

    if (DOM.btnReset) {
      DOM.btnReset.addEventListener('click', () => {
        if (rafId) cancelAnimFrame(rafId);
        activeBirthDate = null;
        DOM.dobInput.value = '';
        DOM.birthTimeInput.value = '00:00:00';
        updateUrlParams(null, null);

        safeSetText(DOM.valYears, '--');
        safeSetText(DOM.valMonths, '--');
        safeSetText(DOM.valDays, '--');
        safeSetText(DOM.valHours, '--');
        safeSetText(DOM.valMinutes, '--');
        safeSetText(DOM.valSeconds, '--');
        safeSetText(DOM.statTotalDays, '--');
        safeSetText(DOM.statTotalHours, '--');
        safeSetText(DOM.statTotalMinutes, '--');
        safeSetText(DOM.statTotalSeconds, '--');
        safeSetText(DOM.statTotalBreaths, '--');
        safeSetText(DOM.statTotalHeartbeats, '--');
        safeSetText(DOM.valNextBdayCountdown, '--');
        safeSetText(DOM.valNextBdayDay, 'Upcoming celebration day');
        if (DOM.milestonesGrid) DOM.milestonesGrid.innerHTML = '';
        if (DOM.planetsGrid) DOM.planetsGrid.innerHTML = '';
        safeSetText(DOM.valZodiacSign, '--');
        safeSetText(DOM.valChineseZodiac, '--');
        safeSetText(DOM.valDayBorn, '--');
        safeSetText(DOM.valGeneration, '--');
      });
    }

    // Theme Switcher
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Action Toolbar
    if (DOM.btnCopySummary) DOM.btnCopySummary.addEventListener('click', copyAgeSummary);
    if (DOM.btnCopyLink) DOM.btnCopyLink.addEventListener('click', copyShareLink);
    if (DOM.btnShareWhatsApp) DOM.btnShareWhatsApp.addEventListener('click', shareWhatsApp);
    if (DOM.btnShareTwitter) DOM.btnShareTwitter.addEventListener('click', shareTwitter);
    if (DOM.btnPrint) DOM.btnPrint.addEventListener('click', () => window.print());

    // Update footer year dynamically
    if (DOM.currentYear) {
      DOM.currentYear.textContent = new Date().getFullYear();
    }
  }

  // =========================================================================
  // 14. Initialization
  // =========================================================================
  function init() {
    setupEventListeners();

    // Check URL parameters for prefilled dob
    const hasParams = loadFromUrlParams();

    // If no params, prefill with a nice default (e.g. 2000-01-01) so user immediately sees live 60fps ticking
    if (!hasParams) {
      DOM.dobInput.value = '2000-01-01';
      DOM.birthTimeInput.value = '08:30:00';
      executeCalculation();
    }
  }

  // Expose global methods for i18n hook
  window.TrueAgeEngine = {
    calculateExactAge,
    calculateMilestones,
    calculatePlanetaryAges,
    getActiveBirthDate: () => activeBirthDate,
    recalculate: executeCalculation
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
