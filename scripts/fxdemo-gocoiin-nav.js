document.addEventListener('DOMContentLoaded',function(){
 const menu=document.getElementById('fxGocoiinMenu'),toggle=document.querySelector('.fx-gocoiin-toggle'),header=document.querySelector('.fx-gocoiin-header');
 if(!menu||!header)return;
 const descriptions={
  'Markets':'Explore global markets and understand the instruments available to you.',
  'Trading':'Review account choices, pricing and the practical details of trading.',
  'Platforms':'Find a trading workspace for your preferred device and workflow.',
  'Accounts':'Compare account information and review terms before applying.',
  'Tools':'Use market information and learning resources to support your research.',
  'Company':'Learn more about FXDemo and how to get in touch.'
 };
 const closeAll=()=>menu.querySelectorAll('.fx-gocoiin-item').forEach(item=>{item.classList.remove('is-open');item.querySelector('.fx-gocoiin-trigger')?.setAttribute('aria-expanded','false')});
 const prepare=btn=>{
  const item=btn.closest('.fx-gocoiin-item'),dropdown=item.querySelector('.fx-gocoiin-dropdown');
  if(!dropdown||dropdown.dataset.prepared)return;
  const title=btn.textContent.replace('⌄','').trim();
  const intro=document.createElement('div');intro.className='fx-gocoiin-mega-intro';
  const eyebrow=document.createElement('span');eyebrow.textContent='FXDEMO';eyebrow.className='fx-gocoiin-mega-eyebrow';
  const heading=document.createElement('h2');heading.textContent=title;
  const desc=document.createElement('p');desc.textContent=descriptions[title]||'Explore information, resources and services from FXDemo.';
  intro.append(eyebrow,heading,desc);
  const links=document.createElement('div');links.className='fx-gocoiin-link-grid';
  [...dropdown.children].forEach(child=>links.appendChild(child));
  dropdown.append(intro,links);dropdown.dataset.prepared='true';
 };
 menu.querySelectorAll('.fx-gocoiin-trigger').forEach(btn=>{
  const item=btn.closest('.fx-gocoiin-item');
  prepare(btn);
  btn.addEventListener('click',()=>{const open=!item.classList.contains('is-open');closeAll();if(open){item.classList.add('is-open');btn.setAttribute('aria-expanded','true');positionDropdown(item)}});
  item.addEventListener('mouseenter',()=>{if(window.matchMedia('(min-width: 901px)').matches){closeAll();item.classList.add('is-open');btn.setAttribute('aria-expanded','true');positionDropdown(item)}});
  item.addEventListener('mouseleave',()=>{if(window.matchMedia('(min-width: 901px)').matches){item.classList.remove('is-open');btn.setAttribute('aria-expanded','false')}});
  btn.addEventListener('focus',()=>{if(window.matchMedia('(min-width: 901px)').matches){closeAll();item.classList.add('is-open');btn.setAttribute('aria-expanded','true');positionDropdown(item)}});
 });
 function positionDropdown(item){const dropdown=item.querySelector('.fx-gocoiin-dropdown');if(dropdown&&window.matchMedia('(min-width: 901px)').matches){dropdown.style.top=Math.round(header.getBoundingClientRect().bottom)+'px'}}
 toggle?.addEventListener('click',()=>{const open=!menu.classList.contains('is-open');menu.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');if(!open)closeAll()});
 window.addEventListener('resize',()=>{const active=menu.querySelector('.fx-gocoiin-item.is-open');if(active)positionDropdown(active)});
 document.addEventListener('click',e=>{if(!e.target.closest('.fx-gocoiin-header'))closeAll()});
});