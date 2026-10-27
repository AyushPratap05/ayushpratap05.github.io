const $ = (s) => document.querySelector(s);
const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const load = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(u); return r; };
const KN = { edge: '120,160,230', n0: '120,175,255', n1: '255,154,82', pulse: '255,226,196', ls: '255,154,82', dot: '#FFD2A8', pill: 'rgba(11,23,48,.88)', lt: '#FFE9D2' };
let SITE, LIST, view = '';

const nav = (S) => `<nav><a class="brand" href="#top">${esc(S.name)}</a><ul><li><a href="#work">Work</a></li><li><a href="#experience">Experience</a></li><li><a href="#about">About</a></li><li><a href="#contact">Contact</a></li></ul></nav>`;
const shot = (c) => (c.image ? `<div class="shot"><img src="${esc(c.image)}" alt="${esc(c.title)}"></div>` : '');
const ext = (v) => v && /^https?:/.test(v);

function card(c, feat) {
  const m = feat && c.metrics ? '<div class="metrics">' + c.metrics.map((x) => `<div><b>${esc(x.value)}</b><span>${esc(x.label)}</span></div>`).join('') + '</div>' : '';
  return `<a class="tile${feat ? ' feat' : ''}" href="#${esc(c.slug)}"><span class="tag">${esc(c.tag)}</span><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p>${c.mini === 'wave' ? '<canvas class="mini" aria-hidden="true"></canvas>' : c.mini ? `<div class="mm" data-m="${esc(c.mini)}" aria-hidden="true"></div>` : shot(c)}${m}<span class="go">${feat ? 'Open the case study' : 'View'} →</span></a>`;
}

function home(S, list) {
  const L = S.links, ini = S.name.split(' ').map((w) => w[0]).slice(0, 2).join('');
  const steps = ['Discover', 'Define', 'Decide', 'Measure'];
  return nav(S) + `<header class="hero" id="top"><div class="fx"><canvas role="img" aria-label="Interactive 3D brain showing my skills. Drag to rotate, or use the arrow keys."></canvas><span class="hint">Drag to rotate</span></div>
<div class="c"><div class="who"><div class="avatar"><img src="assets/photo.jpg" alt="Photo of ${esc(S.name)}" onerror="this.remove()"><span aria-hidden="true">${esc(ini)}</span></div><span class="badge"><i></i>${esc(S.status)}</span></div>
<p class="role">${esc(S.role)}</p><h1>${esc(S.headline)}</h1><p class="intro">${esc(S.intro)}</p>
<div class="btns"><a class="btn main" href="#work">View case studies</a>${L.resume && !window.PREVIEW ? `<a class="btn" href="${esc(L.resume)}">Download resume</a>` : ''}<a class="btn" href="#contact">Get in touch</a></div></div></header>
<div class="stats">${(S.stats || []).map((x) => `<div class="stat"><b>${esc(x.value)}</b><span>${esc(x.label)}</span></div>`).join('')}</div>
<main id="work"><h2 class="sec">Case studies</h2><div class="grid">${list.map((c, i) => card(c, i === 0)).join('')}<div class="tile process"><h3>How I work</h3><ol>${steps.map((x, i) => `<li>${i + 1}. ${x}</li>`).join('')}</ol></div></div></main>
<section class="block" id="experience"><h2 class="sec">Experience</h2><div class="tl">${(S.experience || []).map((x) => `<div class="xp"><div><h3>${esc(x.role)}</h3><small>${esc(x.org)}${x.when ? ' · ' + esc(x.when) : ''}</small></div><ul>${x.points.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>`).join('')}</div></section>
${(S.certificates || []).length ? `<section class="block" id="certs"><h2 class="sec">Certificates</h2><div class="certs">${S.certificates.map((c) => `<div class="cert"><b>${esc(c.name)}</b><span>${esc(c.issuer)} · ${esc(c.year)}</span>${c.url && (!window.PREVIEW || ext(c.url)) ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">View certificate →</a>` : ''}</div>`).join('')}</div></section>` : ''}
<section class="about" id="about"><h2 class="sec">About me</h2><div><p>${esc(S.about)}</p><ul class="chips">${(S.skills || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div></section>
<section class="block" id="contact"><h2 class="sec">Let’s talk</h2><div class="contact"><div><p class="lead">I’m looking for internships and fresher roles in product management. Tell me about the role or team and I’ll reply by email.</p>${L.email ? `<p class="mail">${esc(L.email)}</p>` : ''}</div>
<form class="form" id="cf"><div><label for="f1">Name</label><input id="f1" name="name" required></div><div><label for="f2">Email</label><input id="f2" name="email" type="email" required></div><div><label for="f3">Company</label><input id="f3" name="company"></div><div><label for="f4">Mobile number</label><input id="f4" name="mobile" type="tel"></div><div class="full"><label for="f5">Message</label><textarea id="f5" name="message" required></textarea></div><div class="full"><button class="btn main" type="submit">Send message</button><span id="fs" role="status"></span></div></form></div></section>
<footer><span>${esc(S.name)}</span><div>${ext(L.github) ? `<a href="${esc(L.github)}">GitHub</a>` : ''}${ext(L.linkedin) ? `<a href="${esc(L.linkedin)}">LinkedIn</a>` : ''}<a href="#contact">Contact</a></div></footer>`;
}

async function casePage(S, c) {
  document.title = c.title + ' | ' + S.name;
  const md = marked.parse(await (await load(`case-studies/${c.slug}/case.md`)).text());
  const links = (c.links || []).filter((l) => !window.PREVIEW || ext(l.url));
  const ul = `<ul class="links">${links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} →</a></li>`).join('')}</ul>`;
  if (!c.story) return nav(S) + `<article class="case"><a class="back" href="#work">← Back</a><p class="tag">${esc(c.tag)}</p><h1>${esc(c.title)}</h1>${shot(c)}${c.deck ? `<iframe src="${esc(c.deck)}" title="Case study deck"></iframe>` : ''}${ul}${md}</article>`;
  const st = c.story, echo = st.panel === 'echo';
  const right = st.panel === 'gh'
    ? `<div class="ghwrap"><div class="sc ghs" id="ghp"></div><p class="cap" id="cap">${esc(st.capProblem)}</p></div>`
    : echo
    ? `<div class="ewrap"><div id="ep"></div><p class="cap" id="cap">${esc(st.capProblem)}</p></div>`
    : `<div class="pwrap"><div class="pframe"><div class="pslot"><div id="pb"></div><div id="ps" hidden></div></div></div><p class="cap" id="cap">The problem, as a user sees it</p><div class="dctl" id="dctl" hidden><b>Demo controls</b><button data-demo2="fresh">Just delivered (24h left)</button><button data-demo2="min">1 minute left</button><button data-demo2="expired">Window expired</button><button data-demo2="restart">Restart</button></div></div>`;
  const item = (s, i) => s.demo
    ? `<li><button class="sitem${i ? '' : ' on'}" data-demo="${esc(s.demo)}"><span class="n">${i + 1}</span><div><b>${esc(s.title)}</b><span class="t">${esc(s.text)}</span></div></button></li>`
    : `<li class="pitem"><span class="n">${i + 1}</span><div><b>${esc(s.title)}</b><span class="t">${esc(s.text)}</span></div></li>`;
  return nav(S) + `<section class="story" id="story"><div class="s-left"><a class="back" href="#work">← Back to case studies</a><p class="tag">${esc(c.tag)}</p><h1>${esc(c.title)}</h1><p class="lead">${esc(st.intro)}</p>
<div class="seg" role="tablist" aria-label="Problem or solution"><button role="tab" id="tab-problem" aria-selected="true" data-view="problem">The problem</button><button role="tab" id="tab-solution" aria-selected="false" data-view="solution">The solution</button></div>
<div class="pane" id="pane-problem" role="tabpanel" aria-labelledby="tab-problem"><h2>What users face</h2><p class="sub">${esc(st.problemSub || 'See what people do in the app on the right.')}</p>
<ol class="plist">${st.problems.map((p, i) => `<li class="pitem"><span class="n">${i + 1}</span><div><b>${esc(p.title)}</b><span class="t">${esc(p.text)}</span></div></li>`).join('')}</ol>
<button class="btn main" data-view="solution">View solution →</button></div>
<div class="pane" id="pane-solution" role="tabpanel" aria-labelledby="tab-solution" hidden><h2>The solution</h2><p class="sub">${esc(st.solutionSub || 'Tap a suggestion to see it work in the app.')}</p>${st.scene ? '<div class="lab2">How the window works</div><div class="sc rt" id="scene"></div>' : ''}
<ul class="slist">${st.solutions.map(item).join('')}</ul>
<button class="btn" data-view="problem">← Back to the problem</button>${ul}</div></div>
<div class="s-right">${right}</div></section>
<section class="full-write wrap-md"><div class="case" style="padding:0">${md}</div></section>`;
}

function initStory(c) {
  const st = c.story, echo = st.panel === 'echo', gh = st.panel === 'gh', live = echo || gh;
  const root = document.querySelector('.story');
  let api = null, scene = false, timer = null, pauseUntil = 0;
  if (echo) api = mountEcho($('#ep'), st.url); else if (gh) api = mountGh($('#ghp')); else mountProblem($('#pb'));
  const idle = echo ? 'noisy' : 'problem';
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const toView = () => { if (matchMedia('(max-width:980px)').matches) $(echo ? '.ewrap' : gh ? '.ghwrap' : '.pwrap').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); };
  const items = () => [...root.querySelectorAll('.sitem')];
  const dur = (i) => (st.stepMs && st.stepMs[i]) || 3800;
  const stop = () => { clearTimeout(timer); timer = null; };
  function activate(i) {
    const list = items(); list.forEach((b) => b.classList.remove('on', 'auto'));
    const b = list[i]; void b.offsetWidth; b.classList.add('on');
    if (!reduce) { b.style.setProperty('--d', dur(i) + 'ms'); b.classList.add('auto'); }
    api.demo(b.dataset.demo);
  }
  function play(i) {
    stop(); if (reduce || !items().length) return;
    timer = setTimeout(() => {
      if (!root.isConnected) return;
      if (Date.now() < pauseUntil) { play(i); return; }
      const n = (i + 1) % items().length; activate(n); play(n);
    }, dur(i));
  }
  const set = (v) => {
    const sol = v === 'solution';
    $('#pane-problem').hidden = sol; $('#pane-solution').hidden = !sol;
    $('#tab-problem').setAttribute('aria-selected', String(!sol)); $('#tab-solution').setAttribute('aria-selected', String(sol));
    if (live) $('#cap').textContent = sol ? st.capSolution : st.capProblem;
    else {
      $('#pb').hidden = sol; $('#ps').hidden = !sol; $('#dctl').hidden = !sol;
      $('#cap').textContent = sol ? 'Interactive prototype: tap through it' : 'The problem, as a user sees it';
      if (sol) { if (!api) api = mountPrototype($('#ps')); if (st.scene && !scene) { scene = true; mountTracker($('#scene')); } }
    }
    if (sol) { activate(0); play(0); } else { stop(); if (live) api.demo(idle); }
    toView();
  };
  root.addEventListener('pointerdown', (e) => { if (e.target.closest('.pframe')) pauseUntil = Date.now() + 10000; });
  root.addEventListener('click', (e) => {
    const v = e.target.closest('[data-view]'), d = e.target.closest('[data-demo]'), d2 = e.target.closest('[data-demo2]');
    if (d2) { pauseUntil = Date.now() + 10000; items().forEach((b) => b.classList.remove('on', 'auto')); api.demo(d2.dataset.demo2); }
    if (v) set(v.dataset.view);
    if (d) { const i = items().indexOf(d); activate(i); play(i); toView(); }
  });
}

async function render() {
  const h = location.hash.slice(1), c = LIST.find((x) => x.slug === h);
  if (!c && view === 'home') { document.getElementById(h || 'top')?.scrollIntoView(); return; }
  view = c ? 'case' : 'home';
  $('#app').innerHTML = c ? await casePage(SITE, c) : home(SITE, LIST);
  if (c) { window.scrollTo(0, 0); if (c.story) initStory(c); }
  else {
    document.title = SITE.name + ' | Product management portfolio';
    const cv = document.querySelector('.hero canvas');
    if (cv) brain(cv, KN, SITE.skills);
    document.querySelectorAll('canvas.mini').forEach(mountMiniWave);
    document.querySelectorAll('.mm').forEach((el) => ({ gh: mountMiniGh2, ret: mountMiniRet2 })[el.dataset.m](el));
    if (h) document.getElementById(h)?.scrollIntoView(); else window.scrollTo(0, 0);
  }
}

document.addEventListener('submit', async (e) => {
  if (e.target.id !== 'cf') return;
  e.preventDefault();
  const f = e.target, s = $('#fs'), d = Object.fromEntries(new FormData(f));
  if (window.PREVIEW) { s.textContent = 'Preview only: the form is not connected to your email yet.'; return; }
  if (SITE.formEndpoint) {
    try {
      const r = await fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error();
      f.reset(); s.textContent = 'Thanks, your message was sent.';
    } catch { s.textContent = 'Could not send. Please try again.'; }
  } else if (SITE.links.email) {
    const body = `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company}\nMobile: ${d.mobile}\n\n${d.message}`;
    location.href = `mailto:${SITE.links.email}?subject=${encodeURIComponent('Portfolio message from ' + d.name)}&body=${encodeURIComponent(body)}`;
  }
});

(async () => {
  try {
    [SITE, LIST] = await Promise.all([load('data/site.json').then((r) => r.json()), load('case-studies/index.json').then((r) => r.json())]);
    addEventListener('hashchange', render);
    await render();
  } catch (e) { console.error(e); $('#app').textContent = 'Could not load the site data. Open it through a local server (see README).'; }
})();

function brain(cv,K,skills){
const c=cv.getContext('2d'),P=[],E=[],U=[],L=[],still=matchMedia('(prefers-reduced-motion:reduce)').matches;
let W,H,yaw=1.45,pitch=.15,vy=still?0:.003,drag=false,lx=0,ly=0,vis=true;
function add(n,cx,cy,cz,rx,ry,rz){for(let i=0;i<n;i++){let x,y,z;do{x=Math.random()*2-1;y=Math.random()*2-1;z=Math.random()*2-1}while(x*x+y*y+z*z>1);const f=(.8+.2*Math.random())/(Math.hypot(x,y,z)||1);P.push([cx+x*f*rx,cy+y*f*ry,cz+z*f*rz,0])}}
add(80,-.28,0,0,.44,.62,.9);add(80,.28,0,0,.44,.62,.9);add(26,0,-.5,-.55,.3,.17,.25);
P.forEach((p,i)=>{p[3]=i%3?0:1});
const N=P.length;
for(let i=0;i<N;i++)for(let j=i+1;j<N;j++)if(Math.hypot(P[i][0]-P[j][0],P[i][1]-P[j][1],P[i][2]-P[j][2])<.3)E.push([i,j]);
for(let k=0;k<22;k++)U.push({e:Math.floor(Math.random()*E.length),p:Math.random(),s:.005+Math.random()*.007});
const used=new Set(),sk=skills||[];
sk.forEach((name,i)=>{const y=sk.length>1?.9-1.8*i/(sk.length-1):0,r=Math.sqrt(1-y*y),a=i*2.4,d=[r*Math.cos(a),y,r*Math.sin(a)];let b=-9,bi=0;P.forEach((p,j)=>{if(used.has(j))return;const s=(p[0]*d[0]+p[1]*d[1]+p[2]*d[2])/(Math.hypot(p[0],p[1],p[2])||1);if(s>b){b=s;bi=j}});used.add(bi);L.push([name,bi])});
function size(){const d=devicePixelRatio||1;W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;c.setTransform(d,0,0,d,0,0)}
size();addEventListener('resize',size);
new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(cv);
const ctr=()=>W>860?[W*.73,H*.5]:[W*.74,H*.5];
const pr=p=>{const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch),x=p[0]*cy+p[2]*sy,z=-p[0]*sy+p[2]*cy,y2=p[1]*cp-z*sp,z2=p[1]*sp+z*cp,s=1/(1.8-z2*.5),k=W>860?Math.min(W,H)*.8:W*.5,o=ctr();return[o[0]+x*k*s,o[1]+y2*k*s,s,z2]};
const rr=(x,y,w,h,r)=>{c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()};
cv.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;ly=e.clientY;cv.setPointerCapture(e.pointerId);cv.style.cursor='grabbing'});
cv.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;yaw+=dx*.008;vy=dx*.008;pitch=Math.max(-.7,Math.min(.7,pitch+dy*.006))});
['pointerup','pointercancel'].forEach(t=>cv.addEventListener(t,()=>{drag=false;cv.style.cursor='grab'}));
cv.tabIndex=0;
cv.addEventListener('keydown',e=>{const m={ArrowLeft:[-.15,0],ArrowRight:[.15,0],ArrowUp:[0,-.1],ArrowDown:[0,.1]}[e.key];if(m){e.preventDefault();yaw+=m[0];pitch=Math.max(-.7,Math.min(.7,pitch+m[1]))}});
function frame(){if(!cv.isConnected)return;if(vis){c.clearRect(0,0,W,H);const Q=P.map(pr);
E.forEach(([i,j])=>{const A=Q[i],B=Q[j];c.strokeStyle='rgba('+K.edge+','+(.1+.2*((A[3]+B[3])/2+1)/2)+')';c.beginPath();c.moveTo(A[0],A[1]);c.lineTo(B[0],B[1]);c.stroke()});
U.forEach(u=>{const A=Q[E[u.e][0]],B=Q[E[u.e][1]],x=A[0]+(B[0]-A[0])*u.p,y=A[1]+(B[1]-A[1])*u.p,g=c.createRadialGradient(x,y,0,x,y,9);g.addColorStop(0,'rgba('+K.pulse+',.95)');g.addColorStop(1,'rgba('+K.pulse+',0)');c.fillStyle=g;c.beginPath();c.arc(x,y,9,0,7);c.fill();if(!still){u.p+=u.s;if(u.p>1){u.p=0;u.e=Math.floor(Math.random()*E.length)}}});
Q.forEach((q,i)=>{c.fillStyle=(P[i][3]?'rgba('+K.n1+',':'rgba('+K.n0+',')+(.4+.5*(q[3]+1)/2)+')';c.beginPath();c.arc(q[0],q[1],1.6+2.4*q[2]*(q[3]+1.2)/2,0,7);c.fill()});
const mob=W<=860;c.font=(mob?11:14)+"px Outfit,system-ui,sans-serif";c.textBaseline='middle';c.textAlign='left';
L.forEach(([n,i])=>{const q=Q[i];if(q[3]<-.35)return;const o=ctr();let dx=q[0]-o[0],dy=q[1]-o[1];const m=Math.hypot(dx,dy)||1;dx/=m;dy/=m;const ex=q[0]+dx*(mob?30:60),ey=q[1]+dy*(mob?24:44),w=c.measureText(n).width+(mob?16:24);let bx=dx<0?ex-w:ex;bx=Math.max(W>860?W*.46:W*.4,Math.min(W-w-4,bx));c.globalAlpha=Math.min(1,.3+(q[3]+.35)*1.1);c.strokeStyle='rgba('+K.ls+',.75)';c.beginPath();c.moveTo(q[0],q[1]);c.lineTo(ex,ey);c.stroke();c.fillStyle=K.dot;c.beginPath();c.arc(q[0],q[1],3.2,0,7);c.fill();c.fillStyle=K.pill;c.beginPath();rr(bx,ey-(mob?10:13),w,mob?20:26,mob?10:13);c.fill();c.stroke();c.fillStyle=K.lt;c.fillText(n,bx+(mob?8:12),ey);c.globalAlpha=1});
if(!drag){vy+=((still?0:.003)-vy)*.03;yaw+=vy;pitch+=(.15-pitch)*.03}}
requestAnimationFrame(frame)}
frame();
}
