document.addEventListener("DOMContentLoaded", function() {

  function showVisit(card, index) {
    var id = card.id.replace("card-", "");
    var jsonEl = document.getElementById("visits-json-" + id);
    var visits = JSON.parse(jsonEl.textContent);

    index = (index + visits.length) % visits.length;
    var visit = visits[index];

    // Compute duration in weeks
    var startDate = new Date(visit.start);
    var endDate = new Date(visit.end);
    var durationWeeks = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24 * 7));
    var durationText = durationWeeks > 0 ? `${durationWeeks} week${durationWeeks > 1 ? 's' : ''}` : '';

    card.querySelector('.visit-page').innerHTML = `
      <div class="visit-line"><strong>Visit:</strong> ${visit.start} → ${visit.end}</div>
      <div class="visit-line"><strong>Duration:</strong> ${durationText}</div>
      ${visit.talk ? `<div class="visit-talk"><strong>Talk:</strong> ${visit.talk}</div>` : ''}
      ${visit.program ? `<div class="visit-program"><strong>Program:</strong> ${visit.program}</div>` : ''}
    `;

    // Update active dot
    card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    var activeDot = card.querySelector('.dot[data-index="' + index + '"]');
    if (activeDot) activeDot.classList.add('active');
  }

  // Initialize all cards
  document.querySelectorAll('.visitor-card').forEach(card => showVisit(card, 0));

  // Attach dot click events
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
      var card = document.getElementById(dot.dataset.person);
      showVisit(card, parseInt(dot.dataset.index));
    });
  });

});