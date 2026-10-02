const projects={
zain:{name:'Zain POS',category:'RETAIL OPERATIONS / 01',status:'Live in an active retail business',intro:'A practical system for the rhythm of everyday retail.',challenge:'A clothing shop needs billing, stock tracking, and sales reporting to work together throughout the day.',approach:'Built an end-to-end POS using AI tools, covering daily billing, GST reporting, inventory tracking, and a sales dashboard. The work grew from hands-on retail needs, including barcode printing and visibility into sales.',outcome:'Running in an active retail business. The project continues to evolve around real operational needs and user feedback.'},
pharma:{name:'PharmaFlow',url:'https://pharmaflow.eflybe.com/',category:'DISTRIBUTION SYSTEMS / 02',status:'In active use with one client',intro:'Operational visibility, from inventory flow to delivery.',challenge:'A pharma distribution business needs a clear view of stock movement and deliveries across its daily workflow.',approach:'Built a distribution management application around the client’s actual processes, covering inventory flow, delivery tracking, and operational visibility.',outcome:'In active use with one client, with the solution shaped around real distribution workflows.'},
dpr:{name:'DPR',url:'https://dpr.eflybe.com/',category:'FINANCIAL REPORTING / 03',status:'Publicly accessible · Under refinement',intro:'Turning business inputs into detailed project reports.',challenge:'Preparing a detailed project report for a bank loan application involves organizing business information and financial projections into a coherent report.',approach:'Built a financial reporting tool that generates detailed project reports, with a pay-per-use access model.',outcome:'Core functionality is working and publicly accessible. Projection formulas and financial logic are still being refined for greater accuracy.'},
ganga:{name:'Ganga Cooldrinks',category:'FIELD OPERATIONS / 04',status:'Complete · Ready for deployment',intro:'A daily operations tracker built for a distribution client.',challenge:'The client needed a way to manage daily stock movement and vehicle-based field activity within their specific operating process.',approach:'Built a custom operations tracker tailored to the client’s workflow, connecting stock movement with activity in the field.',outcome:'The application is complete and ready for deployment.'}};
const projectRoles={
  "zain": [
    "Mapped the retail workflow and gathered requirements.",
    "Translated billing, stock and reporting needs into a working system using AI-assisted tools.",
    "Tested workflows and refined usability around operational feedback."
  ],
  "pharma": [
    "Gathered the client’s distribution requirements.",
    "Translated inventory and delivery processes into an AI-assisted business application.",
    "Coordinated delivery and client feedback."
  ],
  "dpr": [
    "Defined the input-to-report workflow.",
    "Built the report generation tool using AI-assisted development.",
    "Continue to refine projection formulas and financial logic for greater accuracy."
  ],
  "ganga": [
    "Understood the client’s stock and field operations requirements.",
    "Translated those requirements into a tailored tracking workflow.",
    "Built the application and prepared it for deployment."
  ]
};
const dialog=document.querySelector('#project-dialog');
function updateProjectLiveLink(project) {
  dialog.querySelector('#project-live-link')?.remove();
  if (!project.url) return;
  const link = document.createElement('a');
  link.id = 'project-live-link';
  link.className = 'button';
  link.href = project.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Open ' + project.name + ' ↗';
  link.setAttribute('aria-label', 'Open ' + project.name + ' (opens in a new tab)');
  link.style.margin = '0 12px 12px 0';
  dialog.querySelector('a.button').before(link);
}

document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[button.dataset.project];for(const [id,key] of [['title','name'],['category','category'],['status','status'],['intro','intro'],['challenge','challenge'],['approach','approach'],['outcome','outcome']])document.querySelector('#dialog-'+id).textContent=p[key];const roleList=document.querySelector('#dialog-role');if(roleList){roleList.replaceChildren(...projectRoles[button.dataset.project].map(text=>{const li=document.createElement('li');li.textContent=text;return li}))}updateProjectLiveLink(p);dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
const menu=document.querySelector('.menu');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.querySelector('header').classList.toggle('menu-open',open);menu.textContent=open?'×':'☰'});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(menu.getAttribute('aria-expanded')==='true')menu.click()}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')menu.click()});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('ajmal17955@gmail.com');status.textContent='Email address copied.'}catch{status.textContent='Email: ajmal17955@gmail.com — select and copy the address above.'}});
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const updateProgress=()=>{const total=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(total>0?scrollY/total*100:0)+'%'};addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
function clock(){document.querySelector('#local-time').textContent='INDIA / '+new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Kolkata'}).format(new Date())+' IST'}clock();setInterval(clock,60000);document.querySelector('#year').textContent=new Date().getFullYear();
