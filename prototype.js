const PROTO_CSS=".screen{background:#fff;color:#1f2937;border-radius:36px;height:100%;overflow:hidden;display:flex;flex-direction:column;position:relative}\n.sb{display:flex;justify-content:space-between;align-items:center;padding:12px 24px 6px;font-size:12px;font-weight:700}\n.view{display:none;flex:1;flex-direction:column;overflow-y:auto;padding-bottom:16px}\n.view.on{display:flex}\n.ah{display:flex;align-items:center;gap:10px;padding:8px 16px 12px;border-bottom:1px solid #eee;font-size:16px}\n.bk{font-size:24px;line-height:1;cursor:pointer;color:#374151;padding:0 4px}\n.sec{padding:14px 16px 0}\n.item{display:flex;gap:12px;align-items:center;padding:12px;border:1px solid #eee;border-radius:14px}\n.thumb{width:62px;height:62px;border-radius:12px;background:#fbe9e3;display:flex;align-items:center;justify-content:center;flex:0 0 auto}\n.item b{font-size:14px;display:block}.item span{font-size:12px;color:#6b7280;display:block;margin-top:2px}\n.steps{display:flex;justify-content:space-between;margin-top:14px;position:relative}\n.steps::before{content:\"\";position:absolute;top:6px;left:8%;right:8%;height:2px;background:#c8553d}\n.st{flex:1;text-align:center;font-size:10px;color:#6b7280;position:relative}\n.st i{display:block;width:14px;height:14px;border-radius:50%;background:#c8553d;margin:0 auto 5px;border:3px solid #fff;box-shadow:0 0 0 1px #c8553d}\n.st.last{color:#1f2937;font-weight:700}\n.tcard{margin:16px 16px 0;padding:16px;border-radius:16px;background:#fff6f2;border:1px solid #f3d5cb;text-align:center}\n.tcard.x{background:#f3f4f6;border-color:#e5e7eb}\n.tl{font-size:12px;color:#6b7280}\n.tt{font-size:38px;font-weight:800;letter-spacing:.02em;color:#c8553d;font-variant-numeric:tabular-nums;margin:4px 0 10px}\n.tcard.x .tt{color:#9ca3af}\n.bar{height:6px;background:#f1d9d0;border-radius:6px;overflow:hidden}\n.bar i{display:block;height:100%;width:0;background:#c8553d;border-radius:6px}\n.tcard.x .bar i{background:#9ca3af}\n.pill{display:inline-block;margin-top:12px;padding:5px 12px;border-radius:20px;font-size:11.5px;font-weight:700;color:#fff;background:#2e8b57}\n.pill.x{background:#b7791f}\n.tn{font-size:11.5px;color:#6b7280;margin:10px 0 0;line-height:1.4}\n.btn{margin:16px 16px 0;padding:14px;border-radius:12px;border:0;background:#c8553d;color:#fff;font-size:15px;font-weight:700;cursor:pointer}\n.btn.sec2{background:#fff;color:#1f2937;border:1px solid #d1d5db;margin-top:10px}\n.btn[disabled]{background:#e5e7eb;color:#9ca3af;cursor:not-allowed}\n.strip{margin:12px 16px 0;padding:9px 12px;border-radius:10px;background:#fff6f2;font-size:12px;display:flex;justify-content:space-between;color:#6b7280}\n.strip b{color:#c8553d;font-variant-numeric:tabular-nums}\n.strip.x{background:#f3f4f6}.strip.x b{color:#9ca3af}\nh4{margin:0 0 8px;font-size:13px}\n.opt{display:flex;align-items:center;gap:10px;width:100%;padding:11px 12px;margin-bottom:8px;border:1px solid #e5e7eb;border-radius:12px;background:#fff;font-size:13.5px;text-align:left;cursor:pointer;color:#1f2937}\n.opt .r{width:18px;height:18px;border-radius:50%;border:2px solid #c9ced6;flex:0 0 auto}\n.opt.sel{border-color:#c8553d;background:#fff6f2}.opt.sel .r{border-color:#c8553d;background:radial-gradient(#c8553d 45%,#fff 50%)}\n.opt small{display:block;color:#6b7280;font-size:11.5px;margin-top:2px}\n.opt[disabled]{opacity:.55;cursor:not-allowed}\n.photo{border:1.5px dashed #d1a89c;border-radius:12px;padding:12px;font-size:12.5px;color:#6b7280;display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}\n.photo button{border:0;background:#c8553d;color:#fff;padding:7px 12px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer}\n.photo.done{border-color:#2e8b57;color:#2e8b57;font-weight:700}\n.ok-wrap{display:flex;flex-direction:column;align-items:center;text-align:center;padding:40px 24px 0}\n.chk{width:72px;height:72px;border-radius:50%;background:#2e8b57;color:#fff;font-size:38px;display:flex;align-items:center;justify-content:center;margin-bottom:16px}\n.ok-wrap h2{margin:0 0 8px;font-size:20px}.ok-wrap p{margin:0 0 6px;font-size:13.5px;color:#6b7280;line-height:1.5}\n:host{display:block;height:100%;font-family:-apple-system,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif}*{box-sizing:border-box}.screen{border-radius:0}.bk{cursor:pointer}";
const PROTO_HTML="<div class=\"screen\">\n  <div class=\"sb\"><span>9:41</span><span>5G &nbsp;\u2582\u2584\u2586 &nbsp;\ud83d\udd0b</span></div>\n\n  <div class=\"view on\" id=\"v1\">\n   <div class=\"ah\"><span class=\"bk\">\u2039</span><b>Order details</b></div>\n   <div class=\"sec\"><div class=\"item\">\n     <div class=\"thumb\"><svg width=\"44\" height=\"44\" viewBox=\"0 0 64 64\"><path d=\"M22 8l-14 8 6 10 6-3v31h24V23l6 3 6-10-14-8c-2 5-6 7-10 7s-8-2-10-7z\" fill=\"#c8553d\"/></svg></div>\n     <div><b>Cotton Kurta Set</b><span>Size M \u00b7 Qty 1</span><span>\u20b91,299 \u00b7 Order #4821</span></div></div>\n     <div class=\"steps\">\n      <div class=\"st\"><i></i>Ordered</div><div class=\"st\"><i></i>Shipped</div><div class=\"st\"><i></i>Out for delivery</div><div class=\"st last\"><i></i>Delivered</div>\n     </div>\n   </div>\n   <div class=\"tcard\" id=\"tc\">\n    <div class=\"tl\" id=\"tl\">Refund window closes in</div>\n    <div class=\"tt\" id=\"t1\">24:00:00</div>\n    <div class=\"bar\"><i id=\"bar\"></i></div>\n    <span class=\"pill\" id=\"pill\">Refund or exchange available</span>\n    <p class=\"tn\" id=\"tn\">Report any issue within 24 hours of delivery. After that, exchange only.</p>\n   </div>\n   <button class=\"btn\" data-a=\"show\" data-v=\"v2\">Return or exchange</button>\n   <button class=\"btn sec2\">Need help with this order</button>\n  </div>\n\n  <div class=\"view\" id=\"v2\">\n   <div class=\"ah\"><span class=\"bk\" role=\"button\" tabindex=\"0\" aria-label=\"Back\" data-a=\"show\" data-v=\"v1\">\u2039</span><b>Return or exchange</b></div>\n   <div class=\"strip\" id=\"strip\"><span>Refund window</span><b id=\"t2\">24:00:00</b></div>\n   <div class=\"sec\"><h4>Why are you returning this?</h4><div id=\"reasons\"></div>\n    <div id=\"photoBox\"></div>\n    <h4 style=\"margin-top:6px\">What would you like?</h4><div id=\"choices\"></div>\n   </div>\n   <button class=\"btn\" id=\"go\" data-a=\"submit\" disabled>Continue</button>\n  </div>\n\n  <div class=\"view\" id=\"v3\">\n   <div class=\"ok-wrap\"><div class=\"chk\">\u2713</div><h2 id=\"okh\">Request placed</h2><p id=\"okp\"></p><p>Pickup will be scheduled within 1 to 2 days.</p></div>\n   <button class=\"btn\" data-a=\"restartApp\">Done</button>\n  </div>\n </div>";

function mountPrototype(host){
 const root=host.attachShadow({mode:'open'});
 root.innerHTML='<style>'+PROTO_CSS+'</style>'+PROTO_HTML;
 const H=3600000,DAY=24*H,$=(i)=>root.getElementById(i);
 let deadline=Date.now()+DAY-4000,reason=null,photo=false,choice=null;
 const REASONS=[['fit','Wrong size or fit'],['wrong','Wrong item received'],['defect','Damaged or defective'],['quality','Poor quality'],['other','Changed my mind']];
 const left=()=>Math.max(0,deadline-Date.now());
 const fmt=(ms)=>{const s=Math.floor(ms/1000);return [Math.floor(s/3600),Math.floor(s%3600/60),s%60].map((n)=>String(n).padStart(2,'0')).join(':')};
 const needPhoto=()=>reason==='wrong'||reason==='defect';
 const refundOK=()=>left()>0||(needPhoto()&&photo);
 function show(id){['v1','v2','v3'].forEach((v)=>$(v).classList.toggle('on',v===id));if(id==='v2')draw()}
 function reset(ms){reason=null;photo=false;choice=null;deadline=Date.now()+ms}
 function submit(){$('okh').textContent=choice==='refund'?'Refund requested':'Exchange requested';$('okp').textContent=choice==='refund'?'Your money goes back to the original payment method after pickup.':'We will send your replacement once we pick up the item.';show('v3')}
 function draw(){
  const l=left(),x=l===0;
  $('t1').textContent=fmt(l);$('t2').textContent=fmt(l);$('bar').style.width=(100-l/DAY*100)+'%';
  $('tc').className='tcard'+(x?' x':'');$('tl').textContent=x?'Refund window closed':'Refund window closes in';
  $('pill').className='pill'+(x?' x':'');$('pill').textContent=x?'Exchange only':'Refund or exchange available';
  $('tn').textContent=x?'Refunds are closed. You can still exchange, or report a defect with photos.':'Report any issue within 24 hours of delivery. After that, exchange only.';
  $('strip').className='strip'+(x?' x':'');
  if(!refundOK()&&choice==='refund')choice=null;
  $('reasons').innerHTML=REASONS.map((r)=>'<button class="opt'+(reason===r[0]?' sel':'')+'" data-a="pick" data-v="'+r[0]+'"><span class="r"></span>'+r[1]+'</button>').join('');
  $('photoBox').innerHTML=needPhoto()?(photo?'<div class="photo done">✓ 2 photos added</div>':'<div class="photo"><span>Photos are required for this reason</span><button data-a="photo">Add photos</button></div>'):'';
  const ok=refundOK();
  $('choices').innerHTML='<button class="opt'+(choice==='refund'?' sel':'')+'" '+(ok?'':'disabled ')+'data-a="choose" data-v="refund"><span class="r"></span><span>Refund<small>'+(ok?'Back to your original payment method':'Window closed. Defects and wrong items with photos still qualify.')+'</small></span></button><button class="opt'+(choice==='exchange'?' sel':'')+'" data-a="choose" data-v="exchange"><span class="r"></span><span>Exchange<small>Swap for another size or item</small></span></button>';
  $('go').disabled=!(reason&&(!needPhoto()||photo)&&choice);
 }
 root.addEventListener('click',(e)=>{const t=e.target.closest('[data-a]');if(!t||t.disabled)return;const v=t.dataset.v;const A={show:()=>show(v),pick:()=>{reason=v;if(!needPhoto())photo=false;choice=null;draw()},photo:()=>{photo=true;draw()},choose:()=>{choice=v;draw()},submit,restartApp:()=>{reset(left());show('v1');draw()}};A[t.dataset.a]&&A[t.dataset.a]()});
 root.addEventListener('keydown',(e)=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('span[data-a]')){e.preventDefault();e.target.click()}});
 draw();const iv=setInterval(()=>{host.isConnected?draw():clearInterval(iv)},1000);
 let seq = 0;
 const later = (ms, fn) => { const my = seq; setTimeout(() => { if (my === seq && host.isConnected) fn(); }, ms); };
 return{demo(k){
  seq++;
  if(k==='fresh'){reset(DAY-4000);show('v1')}
  else if(k==='expired'){reset(0);show('v1')}
  else if(k==='defect'){reset(0);reason='defect';show('v2');later(1400,()=>{photo=true;draw()});later(2600,()=>{choice='refund';draw()})}
  else if(k==='reasons'){reset(DAY-4000);show('v2');later(1000,()=>{reason='fit';draw()});later(2000,()=>{choice='exchange';draw()})}
  else if(k==='min'){reset(65000);show('v1')}
  else if(k==='restart'){reset(DAY-4000);show('v1')}
  draw()}};
}
function mountProblem(el, cfg) {
 const C = Object.assign({ head: 'Returns', tag: 'EXAMPLE OF A LAX POLICY', title: 'Easy returns, any time', text: 'Full refund. No questions asked. No time limit.', stepsTitle: 'What some people do',
  steps: ['Orders three outfits for a weekend event.', 'Wears one of them to the event.', 'Taps Return and picks “Changed my mind”.', 'Gets a full refund. The seller gets back a worn item.'],
  loss: '<b>The seller carries the loss.</b> A worn item can’t be resold, and honest customers end up paying for it.' }, cfg || {});
 let i = 0;
 const draw = () => { el.innerHTML = `<div class="pb"><div class="pb-sb"><span>9:41</span><span>5G &nbsp;▂▄▆ &nbsp;🔋</span></div><div class="pb-h"><b>${C.head}</b></div>
 <div class="pb-policy"><small>${C.tag}</small><b>${C.title}</b><p>${C.text}</p></div>
 <div class="pb-t">${C.stepsTitle}</div><ol class="pb-steps">${C.steps.slice(0, i + 1).map((s, k) => `<li class="${k === i ? 'now' : ''}"><span>${k + 1}</span>${s}</li>`).join('')}</ol>
 ${i < C.steps.length - 1 ? '<button class="pb-b" data-pb="next">Next step →</button>' : `<div class="pb-loss">${C.loss}</div><button class="pb-b ghost" data-pb="again">Replay</button>`}</div>`; };
 el.addEventListener('click', (e) => { const b = e.target.closest('[data-pb]'); if (!b) return; i = b.dataset.pb === 'next' ? i + 1 : 0; draw(); });
 draw();
}

function mountEcho(el, url) {
 el.innerHTML = `<div class="ew"><a class="et" href="${url}" target="_blank" rel="noopener">Echo Shield</a><p class="etag">Don’t let AI steal your identity.</p><a class="eb" href="${url}" target="_blank" rel="noopener">Detect Deepfake Audio →</a><canvas role="img" aria-label="Animated sound wave"></canvas><span class="echip"></span></div>`;
 const cv = el.querySelector('canvas'), c = cv.getContext('2d'), chip = el.querySelector('.echip');
 const TXT = { noisy: 'Real or fake?', input: 'Step 1 · Upload or record audio', features: 'Step 2 · MFCC features and the BiLSTM model', result: 'Step 3 · Real or fake, with a confidence score', assistant: 'Step 4 · Transcript and AI assistant' };
 let W, H, t = 0, m = 'noisy', vis = true;
 const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
 const size = () => { const d = devicePixelRatio || 1; W = cv.clientWidth; H = cv.clientHeight; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); };
 size(); addEventListener('resize', size);
 new IntersectionObserver((e) => { vis = e[0].isIntersecting; }).observe(cv);
 const api = { mode(x) { m = TXT[x] ? x : 'input'; chip.textContent = TXT[m]; } };
 api.demo = api.mode; api.mode('noisy');
 const rr = (x, y, w, h, r) => { c.beginPath(); if (c.roundRect) c.roundRect(x, y, w, h, r); else c.rect(x, y, w, h); };
 function frame() {
  if (!cv.isConnected) return;
  if (vis) {
   c.clearRect(0, 0, W, H);
   const cy = H * .42, noisy = m === 'noisy';
   [[1, .9, 'rgba(167,139,250,.95)', 2], [1.7, .6, 'rgba(139,92,246,.7)', 1.3], [2.6, .35, 'rgba(196,181,253,.5)', 1.2]].forEach(([f, a, col, lw], k) => {
    c.strokeStyle = col; c.lineWidth = lw; c.beginPath();
    for (let x = 0; x <= W; x += 3) {
     const u = x / W, env = Math.min(1, u * 3) * Math.min(1, (1 - u) * 4), n = noisy ? (Math.sin(x * .9 - t * 9 + k) * .35 + Math.sin(x * .37 + t * 7) * .3) : 0;
     const y = cy + Math.sin(u * 14 * f - t * (1.6 + k * .5)) * H * .15 * a * env + n * H * .05 * env;
     x ? c.lineTo(x, y) : c.moveTo(x, y);
    }
    c.stroke();
   });
   if (m === 'noisy' || m === 'input' || m === 'result') {
    const n = 9, bw = Math.max(8, W * .028), gap = bw * 1.6, x0 = W * .78 - (n * gap) / 2;
    c.shadowColor = 'rgba(139,92,246,.9)'; c.shadowBlur = 18; c.fillStyle = 'rgba(167,139,250,.95)';
    for (let i = 0; i < n; i++) {
     const env = 1 - Math.abs(i - (n - 1) / 2) / ((n - 1) / 2) * .75, h = H * .3 * env * (.45 + .55 * Math.abs(Math.sin(t * 1.8 + i * .7)));
     rr(x0 + i * gap, cy - h / 2, bw, h, bw / 2); c.fill();
    }
    c.shadowBlur = 0;
   }
   if (m === 'features') {
    const cols = 28, rows = 5, gx = W * .06, cw = W * .88 / cols, top = H * .72, rh = H * .24 / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { c.fillStyle = 'rgba(167,139,250,' + (.15 + .75 * Math.abs(Math.sin(i * .5 + j * 1.3 + t * 2))) + ')'; c.fillRect(gx + i * cw + 1, top + j * rh + 1, cw - 2, rh - 2); }
   }
   if (m === 'assistant') {
    const p = (t * .4) % 1.3;
    [.9, .7, .8].forEach((w, j) => { c.fillStyle = 'rgba(196,181,253,.7)'; rr(W * .06, H * .72 + j * H * .08, W * .84 * w * Math.max(0, Math.min(1, p * 1.6 - j * .4)), 8, 4); c.fill(); });
   }
   if (m === 'result') {
    const act = Math.floor(t / 2.2) % 2;
    ['Real', 'Fake'].forEach((s, i) => { const x = W * .06 + i * 90, y = H * .78; c.fillStyle = i === act ? 'rgba(154,115,247,.95)' : 'rgba(124,77,235,.18)'; rr(x, y, 78, 30, 15); c.fill(); c.fillStyle = i === act ? '#fff' : '#BFB2EA'; c.font = '600 14px Outfit,sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(s, x + 39, y + 15); });
   }
   if (!still) t += .016;
  }
  if (!still) requestAnimationFrame(frame);
 }
 frame();
 return api;
}

function mountMiniWave(cv) {
 const c = cv.getContext('2d'); let W, H, t = 0, vis = true;
 const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
 const size = () => { const d = devicePixelRatio || 1; W = cv.clientWidth; H = cv.clientHeight; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); };
 size(); addEventListener('resize', size);
 new IntersectionObserver((e) => { vis = e[0].isIntersecting; }).observe(cv);
 function frame() {
  if (!cv.isConnected) return;
  if (vis) {
   c.clearRect(0, 0, W, H);
   [[1, 'rgba(167,139,250,.95)', 2], [1.8, 'rgba(139,92,246,.6)', 1.3]].forEach(([f, col, lw], k) => {
    c.strokeStyle = col; c.lineWidth = lw; c.beginPath();
    for (let x = 0; x <= W; x += 2) { const u = x / W, y = H / 2 + Math.sin(u * 18 * f - t * (2 + k)) * H * .34 * Math.sin(Math.PI * u) * (.6 + .4 * Math.sin(t * .8 + u * 5)); x ? c.lineTo(x, y) : c.moveTo(x, y); }
    c.stroke();
   });
   if (!still) t += .03;
  }
  if (!still) requestAnimationFrame(frame);
 }
 frame();
}

const _still = () => matchMedia('(prefers-reduced-motion:reduce)').matches;
const _sleep = (ms) => (_still() ? Promise.resolve() : new Promise((r) => setTimeout(r, ms)));
const _SEARCH = '<div class="ghbar"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="7" cy="7" r="5" fill="none" stroke="#8B949E" stroke-width="1.6"/><path d="M11 11l4 4" stroke="#8B949E" stroke-width="1.6" stroke-linecap="round"/></svg><span class="ghq"></span><i class="cur"></i></div>';

function mountGh(el) {
 el.innerHTML = _SEARCH + '<div class="ghf"><span>Updated within</span><i>6 months</i><i class="sel">1 year</i><i>2 years</i></div><div class="ghmode"></div><div class="ghrows"></div>';
 const q = el.querySelector('.ghq'), mode = el.querySelector('.ghmode'), box = el.querySelector('.ghrows'), filt = el.querySelector('.ghf');
 box.innerHTML = [['chatbot-starter', '9.1k', '3 years ago'], ['nlp-chat-demo', '4.2k', '2 years ago'], ['py-chatbot-ai', '1.2k', '4 days ago']].map(([n, s, u], i) => `<div class="ghr"><b>${n}</b><div class="m"><span class="ghdot"></span>Python<span>★ ${s}</span><span>updated ${u}</span><i class="rtag"></i></div>${i === 2 ? '<div class="why">Why: strong match for “python chatbot”, updated 4 days ago, active commits</div>' : ''}</div>`).join('');
 const rows = [...box.children];
 const tag = (r, txt, cls) => { const t = r.querySelector('.rtag'); t.textContent = txt || ''; t.className = 'rtag' + (txt ? ' on ' + cls : ''); };
 const place = (order, big) => { let y = 0; order.forEach((ri) => { rows[ri].style.transform = `translateY(${y}px)`; y += (big && ri === 2 ? 84 : 60) + 8; }); };
 let tok = 0;
 async function apply(m) {
  const my = ++tok, star = m === 'problem' || m === 'query';
  filt.style.display = m === 'filter' ? 'flex' : 'none';
  rows.forEach((r) => { r.classList.remove('win', 'dim', 'gone', 'big', 'showwhy'); r.classList.toggle('show', m !== 'query'); });
  mode.textContent = star ? 'Sorted by relevance and stars' : 'Sorted by relevance + freshness'; mode.style.color = star ? '' : '#FF9A52';
  rows.forEach((r) => tag(r, ''));
  if (m === 'query') {
   place([0, 1, 2]); q.textContent = '';
   for (const ch of 'python chatbot') { if (tok !== my) return; q.textContent += ch; await _sleep(60); }
   for (const r of rows) { if (tok !== my) return; await _sleep(250); r.classList.add('show'); }
   return;
  }
  q.textContent = 'python chatbot';
  if (m === 'problem') { tag(rows[0], 'Outdated', 'old'); tag(rows[1], 'Outdated', 'old'); place([0, 1, 2]); return; }
  tag(rows[0], 'Outdated', 'old'); tag(rows[1], 'Outdated', 'old'); tag(rows[2], 'Recommended', 'new');
  rows[2].classList.add('win'); rows[0].classList.add(m === 'filter' ? 'gone' : 'dim'); rows[1].classList.add(m === 'filter' ? 'gone' : 'dim');
  if (m === 'why') { rows[2].classList.add('big', 'showwhy'); }
  place([2, 1, 0], m === 'why');
 }
 apply('problem');
 return { demo: (k) => apply(k) };
}

async function mountTracker(el) {
 const S = ['Ordered', 'Shipped', 'Out for delivery', 'Delivered'], pad = (n) => String(n).padStart(2, '0');
 do {
  if (!el.isConnected) return;
  el.innerHTML = '<div class="ra"><div class="trk"><div class="line"><i></i></div><div class="stp">' + S.map((s) => `<div><span></span>${s}</div>`).join('') + '</div></div><div class="rchip"></div><p class="rnote"></p><div class="rdef">Damaged item? The refund stays open with photos.</div></div>';
  const fill = el.querySelector('.line i'), st = [...el.querySelectorAll('.stp div')], chip = el.querySelector('.rchip'), note = el.querySelector('.rnote'), def = el.querySelector('.rdef');
  st[0].classList.add('on'); await _sleep(500);
  for (let i = 1; i < 4; i++) { fill.style.width = (i / 3 * 100) + '%'; await _sleep(550); st[i].classList.add('on'); await _sleep(450); }
  chip.classList.add('on'); note.textContent = 'Refund window starts now';
  for (let k = 0; k <= 60; k++) { const s = Math.round(86400 * (1 - k / 60)); chip.textContent = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s % 3600 / 60)) + ':' + pad(s % 60); await _sleep(70); }
  chip.className = 'rchip on x'; chip.textContent = 'Exchange only'; note.textContent = 'Refund window closed';
  await _sleep(700); def.classList.add('on'); await _sleep(2600);
  await _sleep(700);
 } while (!_still());
}

const _SHIRT = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M8 3 3 6l2 4 3-1v12h8V9l3 1 2-4-5-3c-.5 1.5-2 2.5-4 2.5S8.5 4.5 8 3z"/></svg>';

async function mountMiniGh2(el) {
 el.innerHTML = '<div class="mmgh"><div class="sb"><svg width="13" height="13" viewBox="0 0 16 16"><circle cx="7" cy="7" r="5" fill="none" stroke="#8B949E" stroke-width="1.6"/><path d="M11 11l4 4" stroke="#8B949E" stroke-width="1.6" stroke-linecap="round"/></svg>python chatbot</div><div class="rw"><b>chatbot-starter</b><span>★ 9.1k · updated 3 years ago</span><i></i></div><div class="rw"><b>py-chatbot-ai</b><span>★ 1.2k · updated 4 days ago</span><i></i></div></div>';
 const [o, f] = el.querySelectorAll('.rw'), rows = [o, f];
 const tag = (r, txt, cls) => { const i = r.querySelector('i'); i.textContent = txt; i.className = cls || ''; };
 const A = () => { rows.forEach((r) => { r.style.transition = 'none'; r.style.opacity = 0; r.className = 'rw'; }); o.style.transform = 'translateY(0)'; f.style.transform = 'translateY(46px)'; tag(o, 'Outdated', 'old'); tag(f, ''); el.offsetHeight; rows.forEach((r) => { r.style.transition = ''; r.style.opacity = ''; }); };
 const B = () => { o.style.transform = 'translateY(46px)'; f.style.transform = 'translateY(0)'; f.classList.add('win'); tag(f, 'Recommended', 'new'); o.classList.add('dim'); };
 do {
  if (!el.isConnected) return;
  A(); await _sleep(1800); B(); await _sleep(3800); await _sleep(300);
 } while (!_still());
}

async function mountMiniRet2(el) {
 el.innerHTML = `<div class="mmret"><div class="o">${_SHIRT}<div><b>Cotton Kurta Set</b><span>Delivered</span></div></div><div class="bar"><i></i></div><div class="r"><span class="l"></span><b></b></div></div>`;
 const root = el.firstChild, bar = el.querySelector('.bar i'), l = el.querySelector('.l'), b = el.querySelector('.r b'), pad = (n) => String(n).padStart(2, '0');
 do {
  if (!el.isConnected) return;
  root.classList.remove('x'); l.textContent = 'Refund window left';
  for (let k = 0; k <= 60; k++) { const s = Math.round(86400 * (1 - k / 60)); b.textContent = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s % 3600 / 60)) + ':' + pad(s % 60); bar.style.width = (100 - k / 60 * 100) + '%'; await _sleep(70); }
  root.classList.add('x'); l.textContent = 'Window closed'; b.textContent = 'Exchange only'; bar.style.width = '100%';
  await _sleep(2400);
 } while (!_still());
}

const HUD_CSS = ":host{--bg:#fff;--fg:#161616;--mut:#595959;--card:#F4F1EC;--line:#E0DAD2;--rt:#C8202F;--grn:#1A7F43;--pb:#161616;--pf:#fff;--brand:#C8202F;display:block;height:100%;color:var(--fg);font:16px/1.4 'Space Grotesk',system-ui,-apple-system,'Segoe UI',sans-serif}*{box-sizing:border-box}.hs{position:relative;height:100%;background:var(--brand)}.sb{display:flex;position:absolute;top:0;left:0;right:0;height:44px;padding:14px 28px 0;justify-content:space-between;background:var(--brand);color:#fff;font-size:14px;font-weight:700;z-index:2;pointer-events:none}#app{height:100%;overflow-y:auto;padding-top:44px;display:flex;flex-direction:column;scrollbar-width:none}#app::-webkit-scrollbar{display:none}.top{color:#fff;padding:22px 22px 24px}.eyebrow{font-size:15px;font-weight:500}.mid{font-size:32px;font-weight:700;line-height:1.05;letter-spacing:-1px;margin:6px 0 16px}.big{font-size:80px;font-weight:700;line-height:1;letter-spacing:-4px;margin:6px 0 10px}.sub{font-size:14px;margin-bottom:14px}\n.segs{display:flex;gap:8px}.segs span{flex:1;height:8px;border-radius:4px;background:rgba(255,255,255,.35)}.segs .on{background:#fff}\n.sheet{flex:1 0 auto;background:var(--bg);border-radius:28px 28px 0 0;padding:22px 20px 40px}\nh3{margin:18px 0 8px;font-size:17px}\n.chips{display:flex;gap:6px;flex-wrap:wrap}.chip{border:1px solid var(--line);background:none;color:var(--fg);padding:8px 14px;border-radius:999px;font:500 14px \"Space Grotesk\",sans-serif}.chip.on{background:var(--pb);color:var(--pf);border-color:var(--pb)}\n.mut,small{color:var(--mut)}\n.row{display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid var(--line)}.g{flex:1}\n.dot{width:14px;height:14px;border:2px solid;border-radius:3px;position:relative;flex:none}.dot:after{content:\"\";position:absolute;inset:2px;border-radius:50%;background:currentColor}.dot.v{color:var(--grn)}.dot.n{color:var(--rt)}\n.q{width:32px;height:32px;border-radius:50%;border:1px solid var(--line);background:none;color:var(--fg);font-size:18px}\n.card{background:var(--card);border-radius:16px;padding:14px;margin:10px 0}.warn{border:2px solid var(--rt)}\n.btn{display:block;width:100%;padding:14px;margin:8px 0;border-radius:999px;border:1px solid var(--line);background:none;color:var(--fg);font:700 16px \"Space Grotesk\",sans-serif;min-height:48px}\n.btn.pri{background:var(--pb);border-color:var(--pb);color:var(--pf)}.btn.s{display:inline-block;width:auto;padding:8px 20px;margin:6px 0 0 8px;min-height:40px}.btn:disabled{opacity:.4}.btn.ol{color:var(--rt);border-color:var(--rt)}\n.lnk{background:none;border:0;color:var(--mut);text-decoration:underline;padding:10px 0;font:14px \"Space Grotesk\",sans-serif}\n.ok{color:var(--grn);font-weight:700}\ninput{width:100%;box-sizing:border-box;padding:13px;margin:5px 0;border:1px solid var(--line);border-radius:14px;background:var(--card);color:var(--fg);font:16px \"Space Grotesk\",sans-serif}.err{color:var(--rt);font-size:13px;min-height:16px}.dim{opacity:.55}\n.stk{display:inline-block;border:3px dashed var(--fg);border-radius:10px;padding:8px 10px;margin:4px 6px 4px 0;font-size:13px;min-width:130px}.stk b{display:block}\n.bill div{display:flex;justify-content:space-between;padding:2px 0}\n.top{flex:none}\n\n.sheet{padding-bottom:56px}.tagp{background:var(--card);border-radius:999px;padding:4px 12px;font-size:13px;font-weight:700}";

function mountHuddle(host) {
 const root = host.attachShadow({ mode: 'open' });
 root.innerHTML = '<style>' + HUD_CSS + '</style><div class="hs"><div class="sb"><span>9:41</span><span>5G · 100%</span></div><div id="app"></div></div>';
 const $ = (i) => root.getElementById(i);
 function C() {}

const MENU=[{id:"pbm",n:"Paneer Butter Masala",p:240,v:1},{id:"dal",n:"Dal Makhani",p:200,v:1},{id:"bc",n:"Butter Chicken",p:320,v:0},{id:"bir",n:"Chicken Biryani",p:280,v:0},{id:"naan",n:"Tandoori Naan",p:45,v:1},{id:"jr",n:"Jeera Rice",p:120,v:1}];
const FEES=(40+8+15)*1.18;
const SAMPLES=[{pbm:1,naan:2},{bc:1,naan:1},{dal:1,jr:1}];
let S,BRAND="Zomato";const BRANDS={"Zomato":"#C8202F","Swiggy":"#B84E00","Zepto":"#5B2A9E","Blinkit":"#0C831F","Any app":"#1F2A44"};
function init(){clearInterval(S&&S.timer);S={step:"join",mem:[],as:null,inn:{},cart:{},paid:{},left:60,timer:null,noshow:[],err:""}}
init();
const act=()=>S.mem.filter(m=>!m.out);
const SHARE=()=>FEES/Math.max(1,act().length);
const dish=k=>MENU.find(m=>m.id==k);
const nm=id=>S.mem.find(m=>m.id==id).n;
const mask=p=>p.slice(0,2)+"••••••"+p.slice(-2);
const sub=id=>Object.entries(S.cart[id]||{}).reduce((s,[k,q])=>s+dish(k).p*q,0);
const tot=id=>sub(id)*1.05+SHARE();
const fm=x=>"₹"+x.toFixed(2);
function addM(n,ph){const id="m"+S.mem.length+Date.now();S.mem.push({id,n,ph,out:0});S.cart[id]={};return id}
function join(){const n=$("nm").value.trim(),ph=$("ph").value.trim();
 if(!n){S.err="Enter your name.";return R()}if(!/^\d{10}$/.test(ph)){S.err="Enter a 10-digit phone number.";return R()}
 S.err="";addM(n,ph);R()}
function addDemo(){["Rahul","Priya"].forEach((n,i)=>{if(!S.mem.some(m=>m.n==n))addM(n,i?"9123456780":"9876543210")});R()}
function add(id,k,d){const c=S.cart[id];c[k]=Math.max(0,(c[k]||0)+d);if(!c[k])delete c[k];R()}
function leave(id){const m=S.mem.find(x=>x.id==id);m.out=1;S.cart[id]={};delete S.inn[id];R()}
function rejoin(id){S.mem.find(x=>x.id==id).out=0;R()}
function demo(){act().forEach((m,i)=>{S.cart[m.id]={...SAMPLES[i%3]};S.inn[m.id]=1});R()}
function start(){S.step="pay";S.left=60;S.timer=setInterval(()=>{if(!host.isConnected){clearInterval(S.timer);return}S.left--;if(S.left<=0)expire();else R()},1000);R()}
function pay(id){S.paid[id]=1;if(act().every(m=>S.paid[m.id])){clearInterval(S.timer);S.step="labels"}R()}
function expire(){clearInterval(S.timer);S.noshow=act().filter(m=>!S.paid[m.id]);S.as=(act().find(m=>S.paid[m.id])||act()[0]).id;S.step="labels";R()}
function vJoin(){
 let h=`<div class="card"><small>Invite link (share it on WhatsApp)</small><br><b>huddle.link/x7Kp2</b></div><h3>${S.mem.length?"Join with your details":"Create the group as host"}</h3><p class="mut">In the real app your name and number come from your Zomato account. Here you type them.</p><input id="nm" placeholder="Name"><input id="ph" placeholder="Phone number" inputmode="numeric" maxlength="10"><div class="err">${S.err}</div><button class="btn pri" onclick="with(HUD){join()}">${S.mem.length?"Join group":"Create group"}</button>`;
 if(S.mem.length)h+=`<h3>In this group</h3>`+S.mem.map((m,i)=>`<div class="row"><div class="g">${m.n}${i?"":" (host)"}<br><small>${mask(m.ph)}</small></div></div>`).join("");
 return h+`<button class="lnk" onclick="with(HUD){addDemo()}">Add Rahul and Priya for the demo</button><button class="btn" ${S.mem.length>1?"":"disabled"} onclick="with(HUD){S.step='order';S.as=S.mem[0].id;R()}">Continue to order</button>`}
function vOrder(){
 const id=S.as,m=S.mem.find(x=>x.id==id),c=S.cart[id],lock=S.inn[id];
 let h=`<div class="chips">${S.mem.map(x=>`<button class="chip ${x.id==id?"on":""} ${x.out?"dim":""}" onclick="with(HUD){S.as='${x.id}';R()}">${x.n}${x.out?" (left)":S.inn[x.id]?" ✓":""}</button>`).join("")}</div>`;
 if(m.out)return h+`<div class="card">${m.n} left this group order and won’t pay anything. Fees are split among the ${act().length} people still in.</div><button class="btn" onclick="with(HUD){rejoin('${id}')}">Rejoin the group</button>`;
 h+=`<p class="mut">Viewing as ${m.n}. Pick your own items.</p>`;
 MENU.forEach(d=>{const q=c[d.id]||0;h+=`<div class="row"><span class="dot ${d.v?"v":"n"}"></span><div class="g">${d.n}<br><small>₹${d.p}</small></div>${lock?"":`<button class="q" onclick="with(HUD){add('${id}','${d.id}',-1)}">−</button>`}<b>${q}</b>${lock?"":`<button class="q" onclick="with(HUD){add('${id}','${d.id}',1)}">+</button>`}</div>`});
 h+=`<div class="card">Your total: <b>${fm(tot(id))}</b><br><small>${fm(sub(id))} items + 5% GST + ${fm(SHARE())} equal share of delivery and fees (${act().length} people)</small></div>`;
 h+=`<button class="btn" ${sub(id)==0||lock?"disabled":""} onclick="with(HUD){S.inn['${id}']=1;R()}">${lock?"You’re in ✓":"I’m in"}</button><button class="btn ol" onclick="with(HUD){leave('${id}')}">Not ordering? Leave group</button>`;
 const ok=act().length>1&&act().every(x=>S.inn[x.id]);
 return h+`<button class="btn pri" ${ok?"":"disabled"} onclick="with(HUD){start()}">Start pay timer</button><button class="lnk" onclick="with(HUD){demo()}">Fill sample orders for everyone in</button>`}
function vPay(){
 let h=`<p class="mut">The order is placed only when everyone has paid. Leaving is closed now, so skipping payment counts as a no-show. Demo timer is 60 seconds.</p>`;
 act().forEach(m=>{h+=`<div class="card"><b>${m.n}</b> <small>${mask(m.ph)}</small> ${S.paid[m.id]?'<span class="ok">Paid ✓</span>':""}<br><small>Items ${fm(sub(m.id))} · GST ${fm(sub(m.id)*.05)} · Shared fees ${fm(SHARE())}</small><br><b>${fm(tot(m.id))}</b>${S.paid[m.id]?"":`<button class="btn s" onclick="with(HUD){pay('${m.id}')}">Pay</button>`}</div>`});
 return h+`<button class="lnk" onclick="with(HUD){expire()}">Skip ahead: let the timer run out</button>`}
function vMissed(id){const cl=S.fp&&S.fp[id];return `<div class="card warn"><b>You missed the pay window</b><p class="mut">The order went ahead without your items, so nothing else is charged. You owe ${fm(SHARE())} for your share of delivery and fees. It is saved to your account and added to your next order.</p></div>${cl?'<p class="ok">Fee paid ✓</p>':`<button class="btn pri" onclick="with(HUD){S.fp=S.fp||{};S.fp['${id}']=1;R()}">Pay ${fm(SHARE())} now</button>`}`}
function vLabels(){
 const ps=act().filter(m=>S.paid[m.id]);
 if(!ps.length)return `<div class="card warn">Nobody paid in time, so the order was cancelled. Each member owes ${fm(SHARE())} in shared charges on their next order.</div><button class="btn" onclick="with(HUD){init();R()}">Start over</button>`;
 if(!act().some(m=>m.id==S.as))S.as=act()[0].id;
 let h=`<div class="chips">${act().map(m=>`<button class="chip ${m.id==S.as?"on":""}" onclick="with(HUD){S.as='${m.id}';R()}">${m.n}${S.paid[m.id]?"":" (missed)"}</button>`).join("")}</div><p class="mut">Viewing as ${nm(S.as)}.</p>`;
 if(!S.paid[S.as])return h+vMissed(S.as);
 const id=S.as,it=sub(id);
 h+=`<h3>Your bill</h3><div class="card bill">${Object.entries(S.cart[id]).map(([k,q])=>`<div><span>${dish(k).n}${q>1?" ×"+q:""}</span><span>${fm(dish(k).p*q)}</span></div>`).join("")}<div><span>GST on items (5%)</span><span>${fm(it*.05)}</span></div><div><span>Your share of delivery and fees</span><span>${fm(SHARE())}</span></div><div><b>Paid</b><b>${fm(tot(id))}</b></div></div><p class="ok">Order confirmed. Your items are in the group order.</p>`;
 return h+`<button class="btn pri" onclick="with(HUD){S.step='rest';R()}">See what the restaurant received</button><button class="btn" onclick="with(HUD){init();R()}">Start over</button>`}
function vRest(){
 const ps=act().filter(m=>S.paid[m.id]),rows=[];
 ps.forEach(m=>Object.entries(S.cart[m.id]).forEach(([k,q])=>rows.push({m,d:dish(k),q})));
 const it=ps.reduce((s,m)=>s+sub(m.id),0),n=rows.reduce((s,r)=>s+r.q,0);
 let h=`<div class="card"><b>New order #x7Kp2</b><br><small>Group order · ${ps.length} people · ${n} items · paid in full</small></div><h3>Items</h3>`;
 rows.forEach(r=>{h+=`<div class="row"><span class="dot ${r.d.v?"v":"n"}"></span><div class="g">${r.d.n}${r.q>1?" ×"+r.q:""}</div><span class="tagp">${r.m.n}</span></div>`});
 h+=`<div class="card bill"><div><span>Items</span><span>${fm(it)}</span></div><div><span>GST on items (5%)</span><span>${fm(it*.05)}</span></div><div><span>Delivery, platform, packaging + GST</span><span>${fm(FEES)}</span></div><div><b>Order total</b><b>${fm(it*1.05+FEES)}</b></div></div><h3>Stickers to print and stick</h3>`;
 rows.forEach(r=>{h+=`<div class="stk"><span class="dot ${r.d.v?"v":"n"}" style="display:inline-block"></span> <small>${r.d.v?"VEG":"NON-VEG"}</small><b>${r.d.n}${r.q>1?" ×"+r.q:""}</b>${r.m.n}</div>`});
 return h+`<button class="btn" onclick="with(HUD){S.step='labels';R()}">Back to customer view</button>`}
function T(x){return String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")}
function R(){
 host.style.setProperty("--brand",BRANDS[BRAND]);
 const keys=["join","order","pay","labels","rest"],i=keys.indexOf(S.step);
 const H={join:["Huddle on "+BRAND,"Join the huddle"],order:["Step 2 of 4","Pick your own food"],pay:["Time left to pay",""],labels:["Order placed","Your bill"],rest:["Restaurant view","Order received"]}[S.step];
 const n=act().filter(m=>S.paid[m.id]).length;
 const big=S.step=="pay"?`<div class="big">${T(S.left)}</div><div class="sub">${n} of ${act().length} paid. The order goes through when all pay.</div>`:`<div class="mid">${H[1]}</div>`;
 $("app").innerHTML=`<div class="top"><div class="eyebrow">${H[0]}</div>${big}<div class="segs">${keys.map((k,j)=>`<span class="${j<=i?"on":""}"></span>`).join("")}</div></div><div class="sheet">`+(S.step=="join"?vJoin():S.step=="order"?vOrder():S.step=="pay"?vPay():S.step=="rest"?vRest():vLabels())+`</div>`;C()}
function setup(){if(S.step=="labels"||S.step=="rest")init();if(S.step=="pay")return;if(!S.mem.length)addM("You","9812345670");addDemo();demo();S.step="order";S.as=S.mem[0].id;R()}
function go1(){setup()}
function go2(){setup();if(S.step!="pay")start()}
function go3(){go2();S.left=10;R()}
function go5(){go2();act().forEach(m=>pay(m.id));S.step="rest";R()}
function go4(){go2();const a=act();pay(a[0].id);pay(a[2].id);expire()}
function setBrand(b){BRAND=b;R()}
function setTheme(){}

 window.HUD = { get S() { return S; }, R, init, join, addDemo, add, leave, rejoin, demo, start, pay, expire, go1, go2, go3, go4, go5, setBrand };
 let seq = 0;
 const later = (ms, fn) => { const my = seq; setTimeout(() => { if (my === seq && host.isConnected) fn(); }, ms); };
 const top = () => { const a = $('app'); if (a) a.scrollTop = 0; };
 R();
 return {
  brand(b) { BRAND = b; R(); },
  demo(k) {
   seq++;
   init();
   if (k === 'join') { R(); later(1000, () => { addM('You', '9812345670'); R(); }); later(2200, () => { addDemo(); R(); }); }
   else if (k === 'order') { go1(); }
   else if (k === 'timer') { go2(); later(1800, () => pay(act()[0].id)); later(3400, () => pay(act()[1].id)); }
   else if (k === 'noshow') { go4(); later(2200, () => { const m = S.noshow[0]; if (m) { S.as = m.id; R(); } }); }
   else if (k === 'restaurant') { go5(); later(2000, () => { const a = $('app'); if (a) a.scrollTo({ top: a.scrollHeight, behavior: 'smooth' }); }); }
   top();
  }
 };
}

async function mountMiniHud(el) {
 const P = [['Rahul', '₹371'], ['Priya', '₹408'], ['You', '₹361']];
 el.innerHTML = '<div class="mmhud"><div class="top"><span>Time left to pay</span><b>00:60</b></div><div class="rowz">' + P.map(([n, a]) => `<div class="pr"><span>${n}</span><em>${a}</em><i></i></div>`).join('') + '</div></div>';
 const t = el.querySelector('.top b'), rows = [...el.querySelectorAll('.pr')], st = (r, txt, cls) => { const i = r.querySelector('i'); i.textContent = txt; i.className = cls || ''; };
 const pad = (n) => String(n).padStart(2, '0');
 do {
  if (!el.isConnected) return;
  rows.forEach((r) => { st(r, ''); r.classList.remove('miss'); });
  for (let k = 0; k <= 60; k++) { const left = 60 - k; t.textContent = '00:' + pad(left); if (k === 14) st(rows[0], 'Paid ✓', 'ok'); if (k === 30) st(rows[1], 'Paid ✓', 'ok'); await _sleep(75); }
  st(rows[2], 'Missed · owes ₹25', 'bad'); rows[2].classList.add('miss');
  await _sleep(2600);
 } while (!_still());
}
