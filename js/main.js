/* Portfólio de Davi Guimarães: interações, tradução para o inglês (objeto EN) e calendário de atividade do GitHub. */
(()=>{
/* ---------- inglês: o português fica no HTML, o inglês vem deste dicionário ---------- */
const EN={
r_edu:'Education',r_sk:'Skills',r_exp:'Experience',r_proj:'Projects',r_cont:'Contact',
m_name:'Davi Guimarães · Data analyst',avail:'Available immediately',m_loc:'Open to remote · São Paulo, SP',pr_r:'Data analyst',pr_av:'Available now',pr_loc:'São Paulo or remote',
lede:'Analyses in <b>SQL, Python and Power BI</b> for people who need to decide: from a well-posed question to the stated limit of every result, with no fine print.',
cite:'George Box, statistician',
b_proj:'See the projects',
cm_d:'The active cell follows your cursor.',cm_m:'The active cell follows your scrolling.',
h_edu:'Education',s_edu:'Degree and certificates',t_deg:'Degree',t_cert:'Certificate',deg:'Associate degree in Systems Analysis and Development',deg_p:'01/2023 to 12/2025',done:'Completed',
c1:'Complete, from basic to advanced',c2:'from basic to advanced',c3:'efficient numerical analysis with Python',
h_sk:'Skills and technologies',s_sk:'Grouped by area',
sk0d:'Main tools',
sk1d:'Analyze data',k_stat:'Statistics (regression)',k_dim:'Dimensional modeling',k_story:'Data storytelling',
sk2d:'Organize and automate data',k_etl:'ETL and automation',
sk3d:'Build systems',k_git:'Git and GitHub',k_test:'Automated testing',
sk4d:'Use AI',k_genai:'Generative AI and LLMs',k_prompt:'Prompt engineering',k_aidev:'AI-assisted development',k_llm:'LLM integration via API',
sknote:'Highlighted: the main tools from the resume title.',
h_exp:'I started in development and moved into data.',
lead_exp:'Three roles, from the most recent to the oldest. Each one has a single sentence and, if you want, the details.',
more:'See details',
tl1_d:'07/2025 to 06/2026',tl1_t:'Developer',tl1_o:'Data that feeds the product: extraction, validation and SQL, with generative AI in the applications.',
tl1_a:'Python routines for extracting, cleaning and validating the data used by product features, with generative AI support for writing and reviewing code.',
tl1_b:'SQL queries that fed reports and analytical screens for other teams, using AI to debug and improve performance.',
tl1_c:'Generative AI features in the applications: LLM integration via API, prompt engineering and response validation.',
tl1_d2:'Main back-end functions in Python and TypeScript (Node.js), with integrations between systems and data APIs.',
tl1_e:'Gathering needs from business teams, viable technical proposals and documented flows, with Git/GitHub version control.',
tl2_d:'12/2024 to 07/2025',tl2_co:'Freelancer, Brazil',tl2_t:'Front-end Developer',tl2_o:'Real-time dashboards and ETL of data from embedded systems.',
tl2_a:'Monitoring dashboards in Angular and React for real-time operational data.',
tl2_b:'ETL routines (Node-RED) and automations to collect, transform and load data from embedded systems (Arduino).',
tl2_c:'Modeling and queries in MongoDB and InfluxDB (time series) that fed the dashboards.',
tl2_e:'Indicators and dashboard layout defined with end users, prioritizing quick reading of metrics and clarity in data communication.',
tl3_d:'07/2023 to 12/2024',tl3_t:'Development Assistant',tl3_o:'Angular interfaces, user support and technical documentation.',
tl3_a:'Interfaces in Angular, HTML/CSS and JavaScript on internal platforms, with AI assistants to speed up coding and debugging.',
tl3_b:'Bug fixing, user support and technical documentation in Markdown, with Git version control; support to other developers on the front end.',
h_proj:'Projects: <span class="nw">MED em números</span> and <span class="nw">Voos em números</span>.',
h_flow:'From data to result',gh:'View on GitHub',
h_q:'Question',h_res:'Result',h_nums:'In numbers',h_chk:'How to check it',h_lim:'What this does not prove',
key1:'BRL 1 of every BRL 100 accepted as fraud',key2:'returned to the victim',
med_n1b:'Central Bank API',med_n1s:'open MED data',med_e1:'automated collection, 44 tests',
med_n2b:'Copy of every response',med_n2s:'stored as received',med_e2:'cleaning and analysis',
med_n3b:'7 notebooks',med_n3s:'Jupyter, documented',med_e3:'validation',
med_n4b:'Checked result',med_n4s:'official formula rebuilt',
med_loop:'GitHub Actions reruns the collection every month',
med_q:'How much of the value accepted as fraud in MED (Mecanismo Especial de Devolução), the Pix refund mechanism, actually goes back to the victim?',
med_big:'About <mark>9%</mark> of the value accepted as fraud goes back to the victim: BRL 2.2 bn out of BRL 24.5 bn.',
med_after:'It was 6% to 9% a year until 2025 and reached 14.5% in Jan to Apr 2026.',
med_k1:'of the accepted value goes back to the victim',med_k2:'tests on the automated collection',
med_k3:'documented notebooks',med_k4:'months in which the value breakdown closes exactly',
med_chk:'The official formula was rebuilt with an error below 0.005 p.p., and the breakdown of the accepted value closes exactly across the 52 months. Every API response is stored, and the collection reruns every month.',
voos_st:'Completed',
voos_n1b:'4 open ANAC datasets',voos_n1s:'2.8 GB, sha256 of every file',voos_e1:'modeling in SQL',
voos_n2b:'Star schema in DuckDB',voos_n2s:'3 fact tables, 5 dimensions, 18 SQL scripts',voos_e2:'54 quality tests',
voos_n3b:'Analysis marts',voos_n3s:'concentration (HHI), merger and punctuality, in SQL',voos_e3:'5 notebooks, with regression',
voos_n4b:'Power BI dashboard',voos_n4s:'5 pages, with the simulated Azul + GOL merger',
voos_loop:'GitHub Actions updates the data on the 3rd of every month',
voos_q:'Does the lack of competition make air fares more expensive in Brazil? The project also asks how many markets would cross the CADE threshold in an Azul and GOL merger, and whether paying more buys punctuality.',
voos_big:'With a single competitor, the fare per km is <mark>27.1% to 39.5%</mark> higher than with three or more, at the same distance.',
voos_after:'The direct 2025 comparison showed only 6.9%. By distance band, the gap reaches 40.6%.',
voos_a2:'<b>Azul + GOL merger.</b> In 2024, 79 of 503 markets would cross the line set in the guide of CADE, the Brazilian competition authority, and they carried 74.8% of passengers.',
voos_a3:'<b>Punctuality.</b> Paying more does not buy punctuality in any consistent way: the association is weak and changes sign from one year to the next.',
voos_k1:'across 4 open ANAC datasets',voos_v1:'2.8 GB',voos_k2:'SQL scripts in DuckDB',
voos_k3:'fact tables and dimensions in the star schema',voos_k4:'quality tests in SQL',
voos_chk:'The database was checked against the figures ANAC publishes, and the 54 SQL tests run on every build of the model. The 5 notebooks open in Colab and read the data from a collection tagged on GitHub, so running them again gives the same outputs.',
voos_lim:'It is an association, not a cause: a carrier enters where it expects to earn. The direct comparison hides part of the gap because markets with fewer competitors are longer, and a long kilometer is cheaper. The registered fare covers about half of the paid passengers, and the merger is a static simulation in which nobody reacts.',
h_outros:'Other projects',outros_w:'Software development, on GitHub',
qd_k:'Chrome extension',
qd_d:'Shows, in a popup inside the page itself, the Portuguese definition of any selected word. A service worker translates the word, queries a dictionary API and returns the result to the popup.',
ev_t:'Product showcase',ev_k:'Front-end technical challenge',
ev_d:'A showcase that reads a JSON file of products, with a side carousel built without a UI library and a details modal that closes on an outside click or with the Esc key. If the API goes down, it uses a local copy of the list.',
py_k:'Python script orchestrator',
py_d:'Schedules and runs Python scripts (cron, interval or a single date) in isolated subprocesses, with a time limit and retries. Logs arrive in real time over WebSocket, and the dashboard keeps the execution history.',
h_gh:'GitHub activity',gh_note:'The GitHub contribution calendar, as it appears on the profile.',gh_prof:'View GitHub profile',
h_cont:'Shall we talk about data?',sub_cont:'Available immediately. São Paulo (SP), open to remote work.'
};
/* barra de fórmulas: cada seção mostra uma fórmula que de fato dá o valor daquela seção */
const FX={
pt:{
  inicio:'=FILTRO(modelos;útil)',
  formacao:'=SE(HOJE()>DATA(2025;12;31);"Concluído";"Em andamento")',
  competencias:'=CONT.SE(Competências[Área];"Analisar dados")',
  experiencia:'=ARRED(DATADIF(DATA(2023;7;1);DATA(2026;6;30);"m")/12;0)',
  projetos:'=SOMA(Devolvido)/SOMA(Aceito)'
},
en:{
  inicio:'=FILTER(models,useful)',
  formacao:'=IF(TODAY()>DATE(2025,12,31),"Completed","In progress")',
  competencias:'=COUNTIF(Skills[Area],"Analyze data")',
  experiencia:'=ROUND(DATEDIF(DATE(2023,7,1),DATE(2026,6,30),"m")/12,0)',
  projetos:'=SUM(Returned)/SUM(Accepted)'
}
};

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)), lerp=(a,b,t)=>a+(b-a)*t;
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const UI={
  pt:{mh:'Não abriu o app de e-mail? O endereço está selecionado, é só copiar.',nav:'Seções',ph:'Retrato de Davi Guimarães',wf:'Grade de 100 quadrados com 9 em destaque: cerca de 9 de cada R$ 100 aceitos como fraude voltam à vítima.'},
  en:{mh:'Mail app did not open? The address is selected, just copy it.',nav:'Sections',ph:'Portrait of Davi Guimarães',wf:'Grid of 100 squares with 9 highlighted: about 9 out of every BRL 100 accepted as fraud goes back to the victim.'}
};
const nodes=$$('[data-t]'); nodes.forEach(n=>{n.dataset.pt=n.innerHTML});
let lang='pt';
try{if(localStorage.getItem('dg-lang')==='en')lang='en'}catch(e){}
const main=$('main'), hh=$('#hh'), ws=$$('.w',hh), sel=$('#sel'), tagEl=$('#seltag');
let introOn=!reduce, started=false, curKey=null;

/* ---------- título: cada palavra chega suja (texto cinza com sublinhado ondulado) e a planilha limpa uma a uma ---------- */
const HW={
  pt:{aria:'“Todos os modelos estão errados, mas alguns são úteis.”',w:['TODOS OS MODELOS','ESTÃO ERRADOS,','mas alguns são úteis.'],d:['tOdOs  os mOdelOs','#VALOR!','mas alguns sao uteis_'],t:['=MAIÚSCULA()','=SEERRO()','=FILTRO()']},
  en:{aria:'“All models are wrong, but some are useful.”',w:['ALL MODELS','ARE WRONG,','but some are useful.'],d:['aLl  mOdElS','#VALUE!','but sme are usefull_'],t:['=UPPER()','=IFERROR()','=FILTER()']}
};
function renderHead(){
  const h=HW[lang]; hh.setAttribute('aria-label',h.aria);
  ws.forEach((w,i)=>{$('.f',w).textContent=h.w[i];$('.d',w).textContent=h.d[i]});
  tagEl.textContent=h.t[h.t.length-1];
}

/* ---------- gráficos de pontos e faixas (valores do currículo) ---------- */
const CD={
  med:{max:16,ticks:[0,4,8,12,16],rows:[{a:6,b:9},{a:14.5,b:14.5,e:1}]},
  voos:{max:45,ticks:[0,15,30,45],rows:[{a:6.9,b:6.9,p:'+'},{a:27.1,b:39.5,p:'+',e:1},{a:40.6,b:40.6,p:'+',up:1}]}
};
const CT={
  pt:{loc:'pt-BR',to:'a',up:'até',view:'Ver como tabela',th:['Medida','Valor'],
    med:{cap:'Parte do valor aceito como fraude que volta à vítima',rows:['Cada ano até 2025','Jan a abr/2026']},
    voos:{cap:'Diferença da tarifa por km: mercados com 1 concorrente contra 3 ou mais',rows:['Comparação direta, 2025','Mesma distância (regressão)','Maior valor por faixa de distância']}},
  en:{loc:'en-US',to:'to',up:'up to',view:'View as table',th:['Measure','Value'],
    med:{cap:'Share of the value accepted as fraud that returns to the victim',rows:['Each year until 2025','Jan to Apr 2026']},
    voos:{cap:'Fare per km difference: markets with 1 competitor vs. 3 or more',rows:['Direct comparison, 2025','Same distance (regression)','Highest value by distance band']}}
};
function renderCharts(){
  const t=CT[lang], f=n=>Number.isInteger(n)?String(n):n.toLocaleString(t.loc,{minimumFractionDigits:1,maximumFractionDigits:1});
  $$('[data-chart]').forEach(fig=>{
    const k=fig.dataset.chart, d=CD[k], tx=t[k];
    const vals=d.rows.map(r=>{const p=r.p||'',s=p+f(r.a)+'%';return (r.up?t.up+' ':'')+(r.b!==r.a?s+' '+t.to+' '+p+f(r.b)+'%':s)});
    const rows=d.rows.map((r,i)=>{
      const pa=r.a/d.max*100,pb=r.b/d.max*100;
      const m=r.b!==r.a?`<span class="sg${r.e?' e':''}" style="left:${pa}%;width:${pb-pa}%"></span>`:`<span class="dt${r.e?' e':''}" style="left:${pa}%"></span>`;
      return `<div class="pr"><div class="pl">${tx.rows[i]}</div><div class="pt">${m}</div><div class="pv">${vals[i]}</div></div>`;
    }).join('');
    const ax=`<div class="ax"><div>${d.ticks.map(v=>`<span style="left:${v/d.max*100}%">${f(v)}%</span>`).join('')}</div></div>`;
    const tb=`<details class="tbl"><summary>${t.view}</summary><table><thead><tr><th scope="col">${t.th[0]}</th><th scope="col">${t.th[1]}</th></tr></thead><tbody>${d.rows.map((r,i)=>`<tr><td>${tx.rows[i]}</td><td>${vals[i]}</td></tr>`).join('')}</tbody></table></details>`;
    fig.innerHTML=`<figcaption>${tx.cap}</figcaption>${rows}${ax}${tb}`;
  });
}

/* ---------- atividade no GitHub: calendário em grade, uma célula por dia ----------
   A página guarda um retrato do calendário (dados reais, até 28/10/2026). Onde a rede deixa, ela pede a versão do dia a uma API pública
   e se atualiza sozinha; dentro do artefato esse pedido é bloqueado, e o retrato continua valendo. */
const GH={api:'https://github-contributions-api.jogruber.de/v4/ivadivad?y=last'};
const GHS={s:'2025-10-26',e:'2026-10-28',d:[["2026-03-05",3,1],["2026-04-02",3,1],["2026-04-12",8,2],["2026-04-13",11,2],["2026-04-14",5,1],["2026-04-15",2,1],["2026-04-16",4,1],["2026-04-17",6,1],["2026-04-19",5,1],["2026-04-21",1,1],["2026-04-22",1,1],["2026-04-23",2,1],["2026-05-22",4,1],["2026-05-25",4,1],["2026-05-29",1,1],["2026-06-03",12,2],["2026-06-04",29,4],["2026-06-08",4,1],["2026-09-03",2,1],["2026-09-10",1,1],["2026-09-25",9,2],["2026-10-01",10,2],["2026-10-03",17,3],["2026-10-05",6,1],["2026-10-06",34,4],["2026-10-07",26,4],["2026-10-08",9,2],["2026-10-13",30,4],["2026-10-14",15,2],["2026-10-15",6,1],["2026-10-16",16,3],["2026-10-17",7,1],["2026-10-18",6,1],["2026-10-19",14,2],["2026-10-20",9,2],["2026-10-21",25,4],["2026-10-22",24,4],["2026-10-23",11,2],["2026-10-25",11,2],["2026-10-26",13,2],["2026-10-27",11,2]]};
const DAY=864e5;
const pd=s=>{const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s);return m?Date.UTC(+m[1],+m[2]-1,+m[3]):NaN};
function ghFromSnap(sn){
  const t0=pd(sn.s), n=Math.round((pd(sn.e)-t0)/DAY)+1, days=Array.from({length:n},(_,i)=>({t:t0+i*DAY,c:0,l:0}));
  sn.d.forEach(([d,c,l])=>{const i=Math.round((pd(d)-t0)/DAY); if(days[i]){days[i].c=c;days[i].l=l}});
  return days;
}
/* o que chega pela rede só entra na página depois de conferido: datas seguidas, contagens inteiras e nível de 0 a 4 */
function ghFromApi(j){
  const a=j&&j.contributions; if(!Array.isArray(a)||a.length<300||a.length>400)return null;
  const days=[]; let prev=NaN;
  for(const x of a){
    if(!x||typeof x.date!=='string')return null;
    const t=pd(x.date), c=x.count, l=x.level;
    if(isNaN(t)||(days.length&&t-prev!==DAY)||!Number.isInteger(c)||c<0||c>1e5||!Number.isInteger(l)||l<0||l>4)return null;
    days.push({t,c,l}); prev=t;
  }
  return days;
}
let ghDays=ghFromSnap(GHS), ghGrid=[], ghAct=null, ghFirst=true, ghHover=null, ghFocus=null;
const GT={
  pt:{wd:['dom','seg','ter','qua','qui','sex','sáb'],wl:['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'],
    ms:['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],ml:['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
    less:'Menos',more:'Mais',view:'Ver como tabela',th:['Mês','Contribuições','Dias com atividade'],tot:'Total',aria:'Calendário de contribuições no GitHub',none:'nenhuma contribuição',
    part:'O primeiro e o último mês estão incompletos.',hint:'Deslize para o lado para ver os meses anteriores.',
    n:c=>c===1?'1 contribuição':c+' contribuições',
    big:(c,a)=>`<mark>${c}</mark> ${c===1?'contribuição':'contribuições'} nos últimos 12 meses, em ${a} ${a===1?'dia':'dias'}.`},
  en:{wd:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],wl:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    ms:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],ml:['January','February','March','April','May','June','July','August','September','October','November','December'],
    less:'Less',more:'More',view:'View as table',th:['Month','Contributions','Days with activity'],tot:'Total',aria:'GitHub contribution calendar',none:'no contributions',
    part:'The first and the last month are incomplete.',hint:'Swipe sideways to see the earlier months.',
    n:c=>c===1?'1 contribution':c+' contributions',
    big:(c,a)=>`<mark>${c}</mark> ${c===1?'contribution':'contributions'} in the last 12 months, across ${a} ${a===1?'day':'days'}.`}
};
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
function fdate(t,long){
  const g=GT[lang], d=new Date(t), w=d.getUTCDay(), m=d.getUTCMonth(), n=d.getUTCDate(), y=d.getUTCFullYear();
  if(lang==='en')return long?`${g.wl[w]}, ${g.ml[m]} ${n}, ${y}`:`${g.wd[w]}, ${g.ms[m]} ${n}, ${y}`;
  return long?`${g.wl[w]}, ${n} de ${g.ml[m]} de ${y}`:`${g.wd[w]}, ${n} ${g.ms[m]} ${y}`;
}
function frange(a,b){
  const f=t=>{const d=new Date(t), p=v=>String(v).padStart(2,'0');
    return lang==='en'?`${GT.en.ms[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`:`${p(d.getUTCDate())}/${p(d.getUTCMonth()+1)}/${d.getUTCFullYear()}`};
  return lang==='en'?`${f(a)} to ${f(b)}`:`${f(a)} a ${f(b)}`;
}
const ghBox=$('#ghbox');
function ghHint(){const w=$('.ghw',ghBox), h=$('.ghh',ghBox); if(w&&h)h.hidden=!(w.scrollWidth>w.clientWidth+1)}
function renderGh(){
  const g=GT[lang], days=ghDays, n=days.length, w0=new Date(days[0].t).getUTCDay(), nc=Math.floor((n-1+w0)/7)+1;
  ghGrid=Array.from({length:7},()=>Array(nc).fill(null));
  let total=0, active=0;
  days.forEach((d,i)=>{const k=i+w0; ghGrid[k%7][(k/7)|0]=d; total+=d.c; if(d.c)active++});
  /* rótulo de mês na primeira coluna em que o mês aparece; o primeiro sai se o seguinte vier logo, e nenhum fica colado na borda direita */
  const labs=[]; let cur=-1;
  for(let c=0;c<nc;c++){const d=ghGrid.map(r=>r[c]).find(Boolean), m=new Date(d.t).getUTCMonth(); if(m!==cur){labs.push({c,m});cur=m}}
  if(labs.length>1&&labs[1].c-labs[0].c<3)labs.shift();
  const mrow=labs.filter(x=>x.c<=nc-3).map(x=>`<span style="grid-column-start:${x.c+2}">${g.ms[x.m]}</span>`).join('');
  const rows=ghGrid.map((row,r)=>`<div class="ghr" role="row"><span class="rh" aria-hidden="true">${r%2?g.wd[r]:''}</span>`+row.map((d,c)=>d?`<div class="hc" role="gridcell" tabindex="-1" data-r="${r}" data-c="${c}"${d.l?` data-l="${d.l}"`:''} style="grid-column-start:${c+2}" aria-label="${fdate(d.t,true)}: ${d.c?g.n(d.c):g.none}"></div>`:'').join('')+'</div>').join('');
  const mon=new Map();
  days.forEach(d=>{const dt=new Date(d.t), k=dt.getUTCFullYear()*100+dt.getUTCMonth(), o=mon.get(k)||{c:0,a:0}; o.c+=d.c; if(d.c)o.a++; mon.set(k,o)});
  const trs=[...mon].map(([k,o])=>`<tr><td>${String(k%100+1).padStart(2,'0')}/${Math.floor(k/100)}</td><td>${o.c}</td><td>${o.a}</td></tr>`).join('');
  const f0=new Date(days[0].t), f1=new Date(days[n-1].t);
  const partial=f0.getUTCDate()!==1||new Date(Date.UTC(f1.getUTCFullYear(),f1.getUTCMonth()+1,0)).getUTCDate()!==f1.getUTCDate();
  const range=frange(days[0].t,days[n-1].t), old=$('.ghw',ghBox), sl=old?old.scrollLeft:0;
  ghBox.innerHTML=
    `<div class="ghw"><div class="ghi" style="--nc:${nc}"><div class="ghm" aria-hidden="true">${mrow}</div><div class="ghg" role="grid" aria-readonly="true" aria-label="${g.aria}, ${range}">${rows}</div></div></div>`+
    `<p class="ghh" hidden>${g.hint}</p>`+
    `<div class="ghf"><div class="ghl" aria-hidden="true"><span>${g.less}</span><i></i><i data-l="1"></i><i data-l="2"></i><i data-l="3"></i><i data-l="4"></i><span>${g.more}</span></div></div>`+
    `<div class="tip" aria-hidden="true"></div>`+
    `<details class="tbl"><summary>${g.view}</summary><table><thead><tr>${g.th.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${trs}</tbody><tfoot><tr><th scope="row">${g.tot}</th><td>${total}</td><td>${active}</td></tr></tfoot></table>${partial?`<p>${g.part}</p>`:''}</details>`;
  $('#ghbig').innerHTML=g.big(total,active); $('#ghrange').textContent=range;
  /* um só ponto de parada do teclado (o último dia); as setas andam pelo calendário */
  let last=null; for(let c=nc-1;c>=0&&!last;c--)for(let r=6;r>=0;r--)if(ghGrid[r][c]){last=[r,c];break}
  ghAct=$(`.hc[data-r="${last[0]}"][data-c="${last[1]}"]`,ghBox); if(ghAct)ghAct.tabIndex=0;
  const w=$('.ghw',ghBox); w.scrollLeft=ghFirst?w.scrollWidth:sl; ghFirst=false;
  ghHover=ghFocus=null; ghHint();
}
function ghShow(){
  const tip=$('.tip',ghBox), el=ghHover||ghFocus; if(!tip)return;
  if(!el||!el.isConnected){tip.classList.remove('on');return}
  const d=ghGrid[+el.dataset.r][+el.dataset.c], g=GT[lang], b=document.createElement('b'), s=document.createElement('span');
  b.textContent=d.c?g.n(d.c):cap(g.none); s.textContent=fdate(d.t,false); tip.textContent=''; tip.append(b,s);
  const bb=ghBox.getBoundingClientRect(), cb=el.getBoundingClientRect(), tw=tip.offsetWidth, th=tip.offsetHeight;
  let x=cb.left-bb.left+cb.width/2-tw/2; x=Math.max(0,Math.min(bb.width-tw,x));
  let y=cb.top-bb.top-th-8; if(y<0)y=cb.bottom-bb.top+8;
  tip.style.left=Math.round(x)+'px'; tip.style.top=Math.round(y)+'px'; tip.classList.add('on');
}
function ghMove(c){if(ghAct&&ghAct!==c&&ghAct.isConnected)ghAct.tabIndex=-1; c.tabIndex=0; ghAct=c}
const ghCell=e=>e.target.closest&&e.target.closest('.hc');
ghBox.addEventListener('pointerover',e=>{if(e.pointerType==='touch')return; ghHover=ghCell(e)||null; ghShow()});
ghBox.addEventListener('pointerleave',()=>{ghHover=null; ghShow()});
ghBox.addEventListener('focusin',e=>{const c=ghCell(e); if(c){ghFocus=c; ghMove(c); ghShow()}});
ghBox.addEventListener('focusout',e=>{if(!(e.relatedTarget&&e.relatedTarget.closest&&e.relatedTarget.closest('.hc'))){ghFocus=null; ghShow()}});
ghBox.addEventListener('click',e=>{const c=ghCell(e); if(c){ghFocus=c; ghMove(c); ghShow()}});
document.addEventListener('pointerdown',e=>{if(!ghBox.contains(e.target)&&(ghFocus||ghHover)){ghFocus=ghHover=null; ghShow()}});
ghBox.addEventListener('keydown',e=>{
  const c=ghCell(e); if(!c)return;
  const r=+c.dataset.r, k=+c.dataset.c, nc=ghGrid[0].length; let nr=r, nk=k;
  switch(e.key){
    case 'ArrowRight':nk=k+1;break; case 'ArrowLeft':nk=k-1;break;
    case 'ArrowDown':nr=r+1;break; case 'ArrowUp':nr=r-1;break;
    case 'Home':nk=0;while(nk<nc&&!ghGrid[r][nk])nk++;break;
    case 'End':nk=nc-1;while(nk>=0&&!ghGrid[r][nk])nk--;break;
    default:return;
  }
  e.preventDefault();
  if(nr>=0&&nr<7&&nk>=0&&nk<nc&&ghGrid[nr][nk]){const t=$(`.hc[data-r="${nr}"][data-c="${nk}"]`,ghBox); if(t)t.focus()}
});
async function ghLive(){
  if(!window.fetch||!window.AbortController)return;
  const ac=new AbortController(), to=setTimeout(()=>ac.abort(),8000);
  try{
    const r=await fetch(GH.api,{signal:ac.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer'});
    if(!r.ok)return;
    const days=ghFromApi(await r.json());
    if(days&&days[days.length-1].t>=pd(GHS.e)){ghDays=days; renderGh()}
  }catch(e){}finally{clearTimeout(to)}
}

/* ---------- barra de fórmulas: a fórmula é digitada e as funções ficam em vermelho, como numa planilha ---------- */
const fxs=$('#fxs'); let fxT=0, fxRes=null;
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function fxHtml(t){
  let o='',i=0,q=false;
  while(i<t.length){
    const c=t[i];
    if(c==='"'){q=!q;o+='&quot;';i++;continue}
    if(!q&&(i===0||!/[A-Za-zÀ-ÿ0-9_]/.test(t[i-1]))){
      const m=/^[A-ZÀ-Ú][A-ZÀ-Ú0-9._]+/.exec(t.slice(i));
      if(m){o+=`<span class="fn">${esc(m[0])}</span>`;i+=m[0].length;continue}
    }
    o+=esc(c);i++;
  }
  return o;
}
function typeFx(text,o={}){
  clearTimeout(fxT); if(fxRes){fxRes();fxRes=null}
  if(o.instant||reduce){fxs.innerHTML=fxHtml(text);return Promise.resolve()}
  return new Promise(res=>{
    fxRes=res; let i=0; fxs.innerHTML=''; const sp=o.speed||14;
    const step=()=>{i++;fxs.innerHTML=fxHtml(text.slice(0,i));if(i<text.length){fxT=setTimeout(step,sp)}else{fxRes=null;res()}};
    fxT=setTimeout(step,sp);
  });
}

/* ---------- idioma ---------- */
const wf=$('#wf');
function setLang(l){
  lang=l; document.documentElement.lang=l==='en'?'en':'pt-BR';
  nodes.forEach(n=>{n.innerHTML=(l==='en'&&EN[n.dataset.t]!=null)?EN[n.dataset.t]:n.dataset.pt});
  $$('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.l===l)));
  $$('.mhint.on').forEach(h=>{h.textContent=UI[l].mh}); wf.setAttribute('aria-label',UI[l].wf); $('#nav').setAttribute('aria-label',UI[l].nav); $('#tabs').setAttribute('aria-label',UI[l].nav); $('#phi').setAttribute('alt',UI[l].ph); renderCharts(); renderGh();
  if(introOn&&started)finishNow();
  renderHead();
  if(!introOn){fixSel();if(curKey)typeFx(FX[l][curKey],{instant:true})}
  try{localStorage.setItem('dg-lang',l)}catch(e){}
}
$$('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.l)));
/* ---------- e-mail: o clique abre o app de e-mail e deixa o endereço selecionado; se nada abrir, um aviso lembra que dá para copiar ---------- */
$$('a[data-mail]').forEach(a=>{
  const hint=a.closest('.mw').querySelector('.mhint'); let t=0, left=false;
  const gone=()=>{left=true};
  a.addEventListener('click',()=>{
    const r=document.createRange(); r.selectNodeContents($('.em',a)); const s=getSelection(); s.removeAllRanges(); s.addRange(r);
    clearTimeout(t); hint.classList.remove('on'); left=false;
    addEventListener('blur',gone,{once:true}); document.addEventListener('visibilitychange',gone,{once:true});
    t=setTimeout(()=>{
      removeEventListener('blur',gone); document.removeEventListener('visibilitychange',gone);
      if(left)return;
      hint.textContent=UI[lang].mh; hint.classList.add('on');
      t=setTimeout(()=>hint.classList.remove('on'),7000);
    },1000);
  });
});

/* ---------- 100 quadrados no projeto MED: cada um vale R$ 1 de cada R$ 100 ---------- */
const ctx=wf.getContext('2d');
const START=[150,156,126], SAGE=[180,189,150], TOM=[201,54,56];
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const R=rng(20261026);
const cells=Array.from({length:100},(_,i)=>({i,c:i%10,r:(i/10)|0,sx:R(),sy:R(),rot:(R()-.5)*1.6,d:R(),s:.55+R()*.35}));
let W=0,H=0,pitch=0,cell=0,gx=0,gy=0;
function layout(){
  const b=wf.getBoundingClientRect(); W=b.width; H=b.height; if(!W||!H)return;
  const dpr=Math.min(devicePixelRatio||1,2);
  wf.width=Math.round(W*dpr); wf.height=Math.round(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
  const size=Math.min(W,H); pitch=size/10; gx=(W-size)/2; gy=(H-size)/2; cell=pitch*.8;
  cells.forEach(c=>{c.px=c.sx*(W-cell); c.py=c.sy*(H-cell)});
}
function rr(x,y,s,r){ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x,y,s,s,r);else ctx.rect(x,y,s,s)}
const mix=(a,b,t)=>a.map((v,i)=>Math.round(lerp(v,b[i],t)));
function drawWf(p){
  if(!W)return; ctx.clearRect(0,0,W,H);
  const u=clamp(p/.6);
  for(const c of cells){
    const t=ease(clamp(u*1.4-c.d*.4));
    const tx=gx+c.c*pitch+(pitch-cell)/2, ty=gy+c.r*pitch+(pitch-cell)/2;
    const x=lerp(c.px,tx,t), y=lerp(c.py,ty,t);
    const h=c.i<9?ease(clamp((p-.62-c.i*.03)/.1)):0;
    const sz=cell*lerp(c.s,1,t)*(1+h*.08);
    const col=mix(mix(START,SAGE,t),TOM,h);
    ctx.save(); ctx.translate(x+cell/2,y+cell/2); ctx.rotate(c.rot*(1-t));
    ctx.globalAlpha=lerp(.6,1,t); ctx.fillStyle=`rgb(${col[0]},${col[1]},${col[2]})`;
    rr(-sz/2,-sz/2,sz,Math.max(2,sz*.12)); ctx.fill();
    if(!h){ctx.lineWidth=1;ctx.strokeStyle='rgba(42,42,33,.3)';ctx.stroke()}
    ctx.restore();
  }
}
const wfP=()=>reduce?1:clamp((innerHeight*.9-wf.getBoundingClientRect().top)/(innerHeight*.55));

/* ---------- letras de coluna e célula sob o mouse (a grade cobre a primeira tela, a Formação e as Competências) ---------- */
const nb=$('#nb'), chrome=$('.chrome'), colsEl=$('.cols'), sheet=$('.sheet'), zone=$('#zona'), fadeBand=$('#competencias'); let RH=28, rowOn=-1;
function readRH(){RH=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--rh'))||28}
const cl=$('.cl'), clEls=cl.children; let CW=120, colOn=-1;
const colName=i=>{let s='';i++;while(i>0){const m=(i-1)%26;s=String.fromCharCode(65+m)+s;i=Math.floor((i-1)/26)}return s};
function buildCols(){
  CW=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--cw'))||120;
  const n=Math.ceil(sheet.getBoundingClientRect().width/CW)+1;
  if(n!==clEls.length)cl.innerHTML=Array.from({length:n},(_,i)=>`<i>${colName(i)}</i>`).join('');
  colOn=-1;
}
const ptr={x:0,y:0,on:false};
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;ptr.x=e.clientX;ptr.y=e.clientY;ptr.on=true;req()},{passive:true});
document.addEventListener('mouseleave',()=>{ptr.on=false;req()});
addEventListener('blur',()=>{ptr.on=false;req()});

/* ---------- abertura ---------- */
const GC='0123456789ABCDEFGHJKLMNPRSTUVXZ#%+=', GI='aeinoscrtuvxzm';
function placeSel(i){
  const w=ws[i]; if(!w)return;
  const fs=parseFloat(getComputedStyle(hh).fontSize)||100, px=fs*.052, py=fs*.028;
  sel.style.left=(w.offsetLeft-px)+'px'; sel.style.top=(w.offsetTop-py)+'px';
  sel.style.width=(w.offsetWidth+2*px)+'px'; sel.style.height=(w.offsetHeight+2*py)+'px';
}
function fixSel(){if(introOn)return;placeSel(ws.length-1);sel.classList.add('on')}
function finishNow(){
  if(hh.classList.contains('done'))return;
  introOn=false; hh.classList.remove('pre'); hh.classList.add('done');
  ws.forEach(w=>{w.classList.remove('sc','ok');w.style.width=''});
  renderHead(); fixSel();
  typeFx(FX[lang][curKey||'inicio'],{instant:true});
  req();
}
function scramble(i){
  const f=$('.f',ws[i]), fin=HW[lang].w[i], n=fin.length, dur=Math.min(560,240+n*34), t0=performance.now();
  return new Promise(res=>{
    const tick=()=>{
      if(!introOn){res();return}
      const p=(performance.now()-t0)/dur;
      if(p>=1){f.textContent=fin;res();return}
      const lock=Math.floor(p*n); let s='';
      const GL=ws[i].classList.contains('ans')?GI:GC; for(let k=0;k<n;k++)s+=(k<lock||fin[k]===' ')?fin[k]:GL[(Math.random()*GL.length)|0];
      f.textContent=s; setTimeout(tick,48);
    };
    tick();
  });
}
async function intro(){
  if(!introOn){finishNow();return}
  started=true;
  ws.forEach(w=>{w.style.width=w.getBoundingClientRect().width+'px'});
  await wait(420); if(!introOn)return;
  typeFx(FX[lang].inicio,{speed:24});
  await wait(520);
  for(let i=0;i<ws.length;i++){
    if(!introOn)return;
    tagEl.textContent=HW[lang].t[i]; placeSel(i); sel.classList.add('on'); ws[i].classList.add('sc');
    await wait(110); if(!introOn)return;
    await scramble(i); if(!introOn)return;
    ws[i].classList.remove('sc'); ws[i].classList.add('ok');
    await wait(70);
  }
  await wait(250);
  finishNow();
}
if(introOn)hh.classList.add('pre'); else hh.classList.add('done');
setTimeout(()=>{if(introOn)finishNow()},9000);
['pointerdown','keydown','wheel','touchstart'].forEach(ev=>addEventListener(ev,()=>{if(introOn&&started)finishNow()},{passive:true}));

/* ---------- rolagem: progresso, navegação, cortina do contato e célula ativa ---------- */
const bar=$('#bar'), navLinks=$$('#nav a,#tabs a'), contact=$('#contato');
/* ---------- celular (até 599 px): abas na base que somem ao descer e voltam ao subir, comentário do retrato ao toque,
   fluxo dos dados recolhido e pontos de posição na fileira de projetos ---------- */
const mq=matchMedia('(max-width:599px)'), tabs=$('#tabs'), ph=$('.ph'), pcs=$('.pcs'), pcd=$$('.pcdots i');
let lastY=scrollY, dirAcc=0, navLock=false, lockT=0, phT=0;
function holdTabs(ms){navLock=true;clearTimeout(lockT);lockT=setTimeout(()=>{navLock=false},ms)}
function tabsAuto(){
  const y=scrollY, d=y-lastY; lastY=y;
  if(!mq.matches||navLock||y<120||y+innerHeight>=document.documentElement.scrollHeight-6){
    if(navLock)holdTabs(260); tabs.classList.remove('hide'); dirAcc=0; return;
  }
  if(d*dirAcc<0)dirAcc=0; dirAcc+=d;
  if(dirAcc>16)tabs.classList.add('hide'); else if(dirAcc<-10)tabs.classList.remove('hide');
}
tabs.addEventListener('focusin',()=>tabs.classList.remove('hide'));
ph.addEventListener('click',()=>{
  if(!mq.matches)return;
  const on=!ph.classList.contains('tp'); ph.classList.toggle('tp',on); clearTimeout(phT); if(on)phT=setTimeout(()=>ph.classList.remove('tp'),5200);
});
ph.addEventListener('focusin',()=>{if(mq.matches&&ph.matches(':focus-visible')){clearTimeout(phT);ph.classList.add('tp')}});
ph.addEventListener('focusout',()=>{if(mq.matches)ph.classList.remove('tp')});
document.addEventListener('pointerdown',e=>{if(ph.classList.contains('tp')&&!ph.contains(e.target))ph.classList.remove('tp')});
$$('.mtog').forEach(b=>b.addEventListener('click',()=>{
  const p=b.closest('.paper'), on=!p.classList.contains('o-fl'); p.classList.toggle('o-fl',on); b.setAttribute('aria-expanded',String(on));
}));
function pcDots(){
  const c=pcs.firstElementChild; if(!c||!pcd.length)return;
  const step=c.offsetWidth+(parseFloat(getComputedStyle(pcs).columnGap)||12), i=clamp(Math.round(pcs.scrollLeft/step),0,pcd.length-1);
  pcd.forEach((d,k)=>d.classList.toggle('on',k===i));
}
pcs.addEventListener('scroll',()=>{if(mq.matches)pcDots()},{passive:true});
mq.addEventListener('change',()=>{tabsAuto();pcDots();ph.classList.remove('tp')});
const SECS=[['inicio',null],['formacao','#formacao h2'],['competencias','#competencias h2'],['experiencia','#experiencia h2'],['projetos','#projetos h2']].map(([id,a])=>({id,el:$('#'+id),an:a?$(a):null}));
let tick=false;
function update(){
  tick=false; const vh=innerHeight;
  drawWf(wfP());
  const max=document.documentElement.scrollHeight-vh;
  bar.style.transform=`scaleX(${max>0?clamp(scrollY/max):0})`;
  const mb=main.getBoundingClientRect().bottom, r=clamp((vh-mb)/Math.min(vh,contact.offsetHeight||vh));
  contact.style.setProperty('--r',r.toFixed(3));
  const th=chrome.offsetHeight+Math.min(vh*.3,160); let cur=SECS[0]; SECS.forEach(s=>{if(s.el.getBoundingClientRect().top<=th)cur=s});
  const act=r>.55?'contato':cur.id;
  navLinks.forEach(a=>{const on=a.dataset.id===act;a.classList.toggle('on',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
  const sb=sheet.getBoundingClientRect(), cb=Math.max(chrome.getBoundingClientRect().bottom,colsEl.getBoundingClientRect().bottom), hb=zone.getBoundingClientRect().bottom; let row=0, col=0;
  if(ptr.on&&ptr.y>=cb&&ptr.y<=hb){row=Math.floor((ptr.y-sb.top)/RH);col=Math.floor((ptr.x-sb.left)/CW)}
  else if(cur.an){const ab=cur.an.getBoundingClientRect();row=Math.floor((ab.top-sb.top)/RH);col=Math.floor((ab.left-sb.left)/CW)}
  row=Math.max(0,row); col=clamp(col,0,clEls.length-1);
  if(row!==rowOn||col!==colOn){
    rowOn=row; if(clEls[colOn])clEls[colOn].classList.remove('on'); clEls[col].classList.add('on'); colOn=col;
    nb.textContent=colName(col)+(row+1);
  }
  /* as letras esmaecem junto com a grade: mesma curva do degradê .fadeo (potência 1,5 de 0 no topo de Competências a 1 em 96% dela),
     lida na linha em que a grade começa, logo abaixo das letras */
  if(colsEl.offsetHeight){const fb=fadeBand.getBoundingClientRect(), yb=chrome.getBoundingClientRect().bottom+colsEl.offsetHeight;
    colsEl.style.setProperty('--k',(1-Math.pow(clamp((yb-fb.top)/(fb.height*.96)),1.5)).toFixed(3))}
  if(introOn&&started&&scrollY>40)finishNow();
  tabsAuto();
  if(cur.id!==curKey){curKey=cur.id;if(!introOn)typeFx(FX[lang][curKey])}
}
const req=()=>{if(!tick){tick=true;requestAnimationFrame(update)}};
addEventListener('scroll',req,{passive:true});
addEventListener('resize',()=>{layout();readRH();buildCols();fixSel();ghHint();req()});
function goTo(id){
  const el=id==='contato'||id==='inicio'?null:$('#'+id);
  const off=chrome.offsetHeight+(el&&zone.contains(el)?colsEl.offsetHeight:0);
  const top=id==='contato'?document.documentElement.scrollHeight:id==='inicio'?0:el.getBoundingClientRect().top+scrollY-off;
  scrollTo({top,behavior:reduce?'auto':'smooth'});
}
$$('#nav a,#tabs a,[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();holdTabs(700);goTo(a.dataset.id||a.dataset.go)}));
setLang(lang); layout(); readRH(); buildCols(); update(); ghLive();
if(window.ResizeObserver){
  new ResizeObserver(()=>{layout();req()}).observe(wf);
  new ResizeObserver(()=>req()).observe(main);
  new ResizeObserver(()=>fixSel()).observe($('.hl'));
}
if(document.fonts&&document.fonts.addEventListener)document.fonts.addEventListener('loadingdone',()=>{fixSel();req()});
const FONTS=['850 100px Archivo','italic 400 100px "Instrument Serif"','500 12px "JetBrains Mono"'];
Promise.race([Promise.all([document.fonts&&document.fonts.ready,...FONTS.map(f=>document.fonts?document.fonts.load(f).catch(()=>0):0)]),wait(1500)]).then(()=>{layout();req();intro()});
})();
