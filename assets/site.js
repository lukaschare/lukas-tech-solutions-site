(function(){
  const cfg = window.LTS_CONFIG || {};
  const by = (k) => document.querySelectorAll(`[data-config="${k}"]`);
  Object.keys(cfg).forEach(k => by(k).forEach(el => { if(el.tagName === 'A' && k === 'email') el.href = `mailto:${cfg[k]}`; if(el.tagName === 'A' && k === 'phone') el.href = `tel:${String(cfg[k]).replace(/\s/g,'')}`; if(el.tagName === 'A' && k === 'linkedin') el.href = cfg[k]; el.textContent = cfg[k]; }));
  const warn = document.getElementById('config-warning');
  if(cfg.businessAddress && cfg.businessAddress.includes('REPLACE BEFORE DEPLOYMENT')) warn?.classList.add('show');
  const menu = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  menu?.addEventListener('click',()=>links.classList.toggle('open'));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
