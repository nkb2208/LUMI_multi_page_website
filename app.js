const userState = {
  hair: {},
  face: {},
  outfit: {},
  body: {}
};

function selectPill(el, group, category) {
  const parent = el.closest('.pills');
  parent.querySelectorAll('.pill').forEach(x => x.classList.remove('selected'));
  el.classList.add('selected');
  
  const value = el.getAttribute('data-val');
  if(category && value) {
      userState[category][group] = value;
  }
}

// Map tags for display
const TAG_NAMES = {
  "round": "Round", "v-line": "V-line", "square": "Square",
  "thin": "Thin Hair", "thick": "Thick Hair", "frizzy": "Frizzy Hair",
  "natural": "Natural", "party": "Party",
  "hourglass": "Hourglass", "rectangle": "Rectangle", "triangle": "Triangle",
  "elegant": "Elegant", "casual": "Casual",
  "curves": "Curves", "balance": "Balance"
};

function renderCard(item) {
  const tagsHtml = Object.values(item.tags).flat().map(tag => `<span class="tag">${TAG_NAMES[tag] || tag}</span>`).join('');
  return `
    <a class="result card" href="tutorial.html?id=${item.id}">
      <div class="look-img" style="background: url('${item.imageUrl}') center/cover; color: transparent;">
         <img src="${item.imageUrl}" style="display:none;" onerror="this.parentElement.style.background='#d8b4a8'; this.parentElement.innerHTML='<div style=\\\'color:white;text-align:center;font-size:14px;padding:20px;\\\'><br>Image error<br>Cannot load</div>';"/>
      </div>
      <h3 style="margin-top:15px">${item.name}</h3>
      <p>${item.description}</p>
      <div style="margin-top:10px">${tagsHtml}</div>
    </a>
  `;
}

function submitSurvey(category, resultId) {
  const requiredGroups = {
      hair: ['faceShape', 'hairType'],
      face: ['faceShape', 'makeupStyle'],
      outfit: ['bodyShape', 'style'],
      body: ['goal', 'bodyShape']
  };
  
  const reqs = requiredGroups[category];
  if(reqs) {
      for(let r of reqs) {
          if(!userState[category][r]) {
              alert("Please answer all questions to get the most accurate recommendations!");
              return;
          }
      }
  }
  
  const results = getRecommendations(category, userState[category]);
  const container = document.getElementById(resultId);
  if(!container) return;
  
  container.style.display = 'block';
  
  const exactMatches = results.filter(r => r.score === r.totalCriteria);
  const partialMatches = results.filter(r => r.score < r.totalCriteria);
  
  let html = '';
  
  if(exactMatches.length > 0) {
      html += `
          <div class="section-title">
              <div><div class="eyebrow">Perfect match for you (${exactMatches[0].score}/${exactMatches[0].totalCriteria} points)</div><h2>100% Features Matched</h2></div>
          </div>
          <div class="grid grid-3">
              ${exactMatches.map(renderCard).join('')}
          </div>
      `;
  } else {
      html += `
          <div class="section-title">
              <div><div class="eyebrow">No perfect match found</div><h2>But you might like</h2></div>
          </div>
      `;
  }
  
  if(partialMatches.length > 0) {
      if(exactMatches.length > 0) {
          html += `
              <div class="section-title" style="margin-top:50px">
                  <div><div class="eyebrow">Alternative choices</div><h2>You might also like</h2></div>
              </div>
          `;
      }
      html += `
          <div class="grid grid-3">
              ${partialMatches.map(renderCard).join('')}
          </div>
      `;
  }
  
  if(results.length === 0) {
      html = `<p style="text-align:center; padding: 50px 0; color: #756b66;">No matching results found. Please try changing your selections.</p>`;
  }
  
  container.innerHTML = html;
  container.scrollIntoView({behavior:'smooth', block:'start'});
}

function initTutorial() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  if(!id) return;
  
  const data = getTutorial(id);
  if(!data) {
    document.querySelector('main.container').innerHTML = `<h1>Content not found</h1>`;
    return;
  }
  
  // Fill data
  document.getElementById('t-name').textContent = data.name;
  
  const imgBox = document.getElementById('t-image');
  imgBox.style.background = `url('${data.imageUrl}') center/cover`;
  
  // Create tags
  const tagsHtml = Object.values(data.tags).flat().map(tag => `<span class="tag">${TAG_NAMES[tag] || tag}</span>`).join('');
  document.getElementById('t-tags').innerHTML = tagsHtml;
  
  // Match reasons
  const reasonsHtml = data.tutorial.matchReasons.map(r => `<li>${r}</li>`).join('');
  document.getElementById('t-reasons').innerHTML = `<ul>${reasonsHtml}</ul>`;
  
  // Steps
  const stepsHtml = data.tutorial.steps.map((s, i) => `
    <div class="step">
      <div><b>Step ${i+1}: ${s.title}</b><p>${s.desc}</p></div>
    </div>
  `).join('');
  document.getElementById('t-steps').innerHTML = stepsHtml;
  
  // Video
  const videoBox = document.getElementById('t-video');
  if(data.tutorial.videoId) {
    const embedUrl = getYouTubeEmbedUrl(data.tutorial.videoId);
    videoBox.innerHTML = `
      <iframe src="${embedUrl}" width="100%" height="100%" style="min-height:330px; border:none;" frameborder="0" allowfullscreen></iframe>
    `;
    document.getElementById('t-source-btn').href = `https://www.youtube.com/watch?v=${data.tutorial.videoId}`;
  } else {
    videoBox.innerHTML = `<div style="padding:40px; text-align:center;">Video is being updated</div>`;
    document.getElementById('t-source-btn').style.display = 'none';
  }
}
