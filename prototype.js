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
function mountProblem(el){
 const steps=['Orders three outfits for a weekend event.','Wears one of them to the event.','Taps Return and picks “Changed my mind”.','Gets a full refund. The seller gets back a worn item.'];
 let i=0;
 const draw=()=>{el.innerHTML=`<div class="pb"><div class="pb-sb"><span>9:41</span><span>5G &nbsp;▂▄▆ &nbsp;🔋</span></div><div class="pb-h"><b>Returns</b></div>
 <div class="pb-policy"><small>EXAMPLE OF A LAX POLICY</small><b>Easy returns, any time</b><p>Full refund. No questions asked. No time limit.</p></div>
 <div class="pb-t">What some people do</div><ol class="pb-steps">${steps.slice(0,i+1).map((s,k)=>`<li class="${k===i?'now':''}"><span>${k+1}</span>${s}</li>`).join('')}</ol>
 ${i<steps.length-1?'<button class="pb-b" data-pb="next">Next step →</button>':'<div class="pb-loss"><b>The seller carries the loss.</b> A worn item can’t be resold, and honest customers end up paying for it.</div><button class="pb-b ghost" data-pb="again">Replay</button>'}</div>`};
 el.addEventListener('click',(e)=>{const b=e.target.closest('[data-pb]');if(!b)return;i=b.dataset.pb==='next'?i+1:0;draw()});
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
