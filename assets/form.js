(function(){
  const form=document.getElementById('service-request-form');
  if(!form)return;
  const status=document.getElementById('form-status');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!form.reportValidity())return;
    const cfg=window.LTS_CONFIG||{};
    if((cfg.businessAddress||'').includes('REPLACE BEFORE DEPLOYMENT')){
      status.textContent='Site configuration is incomplete. The professional address must be updated before publication.';
      status.style.color='#a13120'; return;
    }
    const data=new FormData(form);
    const subject=`Service request — ${data.get('service')}`;
    const body=[
      'SERVICE REQUEST — LUKAS TECH SOLUTIONS','',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')||'Not provided'}`,
      `Service: ${data.get('service')}`,
      `Preferred mode: ${data.get('mode')}`,
      `Preferred timeframe: ${data.get('timeframe')}`,'',
      'Requirements:',data.get('message'),'',
      'The requester confirms acceptance of the Privacy Policy, Cookie Policy and General Terms & Conditions through the three required checkboxes on the website.','',
      'This request is pre-contractual. Effective paid service provision is conditional upon the professional being legally authorised to carry out the self-employed activity in Spain.'
    ].join('\n');
    const href=`mailto:${cfg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent='Your email application will open with the request prepared. Please send the email to complete the request.';
    status.style.color='#0c7c59';
    window.location.href=href;
  });
})();
