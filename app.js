const lessons={
  basics:{label:'Basics',emoji:'👋',items:[
    ['Ciao! Come stai?','Hi! How are you?','chow • KOH-meh stai'],
    ['Sto bene, grazie.','I am well, thank you.','stoh BEH-neh • GRAH-tsyeh'],
    ['Mi chiamo Shazzy.','My name is Shazzy.','mee KYAH-moh SHAZ-zee'],
    ['Piacere di conoscerti.','Nice to meet you.','pyah-CHEH-reh dee koh-NOH-sher-tee'],
    ['Non capisco.','I do not understand.','non kah-PEE-skoh'],
    ['A dopo!','See you later!','ah DOH-poh']
  ]},
  love:{label:'Love',emoji:'❤️',items:[
    ['Mi sei mancato.','I missed you. (to a man)','mee say man-KAH-toh'],
    ['Sono felice con te.','I am happy with you.','SOH-noh feh-LEE-cheh con teh'],
    ['Ti voglio bene.','I love/care about you.','tee VOH-lyoh BEH-neh'],
    ['Sei bellissimo.','You are very handsome.','say bel-LEE-see-moh'],
    ['Vieni qui, dammi un bacio.','Come here, give me a kiss.','VYEH-nee kwee • DAM-mee oon BAH-choh'],
    ['Buonanotte, amore mio.','Good night, my love.','bwoh-nah-NOT-teh • ah-MOH-reh MEE-oh']
  ]},
  us:{label:'Us',emoji:'🥰',items:[
    ['Vieni qui, amore mio.','Come here, my love.','VYEH-nee kwee • ah-MOH-reh MEE-oh'],
    ['Mi fai sorridere.','You make me smile.','mee fai sor-REE-deh-reh'],
    ['Mi piace stare con te.','I like being with you.','mee PYAH-cheh STAH-reh con teh'],
    ['Ti preparo un caffè?','Shall I make you a coffee?','tee preh-PAH-roh oon kaf-FEH'],
    ['Facciamo una passeggiata insieme?','Shall we take a walk together?','fah-CHAH-moh OO-nah pas-sej-JAH-tah een-SYEH-meh'],
    ['Sono felice quando sono con te.','I am happy when I am with you.','SOH-noh feh-LEE-cheh KWAN-doh SOH-noh con teh']
  ]},
  cafe:{label:'Caffè',emoji:'☕',items:[
    ['Vorrei un caffè, per favore.','I would like a coffee, please.','vor-RAY oon kaf-FEH • pehr fah-VOH-reh'],
    ['Quanto costa?','How much does it cost?','KWAN-toh KOS-tah'],
    ['Il conto, per favore.','The bill, please.','eel KON-toh • pehr fah-VOH-reh'],
    ['È buonissimo!','It is delicious!','eh bwo-NEES-see-moh'],
    ['Posso avere dell’acqua?','Can I have some water?','POS-soh ah-VEH-reh del-LAH-kwah'],
    ['Prendiamo un aperitivo?','Shall we have an aperitivo?','pren-DYAH-moh oon ah-peh-ree-TEE-voh']
  ]},
  everyday:{label:'Everyday',emoji:'🌤️',items:[
    ['Che cosa facciamo oggi?','What are we doing today?','keh KOH-zah fah-CHAH-moh OJ-jee'],
    ['Ho fame.','I am hungry.','oh FAH-meh'],
    ['Sono stanca.','I am tired. (female speaker)','SOH-noh STAN-kah'],
    ['Aspettami!','Wait for me!','ah-SPET-tah-mee'],
    ['Dove andiamo?','Where are we going?','DOH-veh an-DYAH-moh'],
    ['Che bello!','How lovely!','keh BEL-loh']
  ]},
  travel:{label:'Travel',emoji:'✈️',items:[
    ['Dov’è la stazione?','Where is the station?','doh-VEH lah stah-TSYOH-neh'],
    ['Un biglietto, per favore.','One ticket, please.','oon bee-LYET-toh • pehr fah-VOH-reh'],
    ['A che ora parte?','What time does it leave?','ah keh OH-rah PAR-teh'],
    ['Dov’è il bagno?','Where is the bathroom?','doh-VEH eel BAH-nyoh'],
    ['Mi può aiutare?','Can you help me?','mee pwo ah-yoo-TAH-reh'],
    ['Siamo arrivati?','Have we arrived?','SYAH-moh ar-ree-VAH-tee']
  ]},
  date:{label:'Date night',emoji:'🍝',items:[
    ['Sei pronto per uscire?','Are you ready to go out? (to a man)','say PRON-toh pehr oo-SHEE-reh'],
    ['Dove vuoi andare?','Where do you want to go?','DOH-veh vwoi an-DAH-reh'],
    ['Brindiamo a noi.','Let’s toast to us.','breen-DYAH-moh ah noi'],
    ['Questa serata è bellissima.','This evening is beautiful.','KWES-tah seh-RAH-tah eh bel-LEE-see-mah'],
    ['Vuoi ballare con me?','Do you want to dance with me?','vwoi bal-LAH-reh con meh'],
    ['Andiamo a casa insieme?','Shall we go home together?','an-DYAH-moh ah KAH-zah een-SYEH-meh']
  ]},
  family:{label:'Family',emoji:'🏡',items:[
    ['Che piacere vederti!','It is lovely to see you!','keh pyah-CHEH-reh VEH-der-tee'],
    ['Grazie per avermi ospitata.','Thank you for having me.','GRAH-tsyeh pehr ah-VEHR-mee oh-spee-TAH-tah'],
    ['È tutto buonissimo.','Everything is delicious.','eh TOOT-toh bwo-NEES-see-moh'],
    ['Posso aiutare?','Can I help?','POS-soh ah-yoo-TAH-reh'],
    ['Mi sono divertita molto.','I had a lot of fun.','mee SOH-noh dee-vehr-TEE-tah MOL-toh'],
    ['A presto!','See you soon!','ah PRES-toh']
  ]}
};

const quizzes=[
  {prompt:'Buongiorno! Come stai?',answers:['Sto bene, grazie!','Il conto, per favore.','Mi chiamo caffè.'],correct:0,note:'Perfetto — “Sto bene, grazie!” means “I’m well, thank you!”'},
  {prompt:'Hai fame?',answers:['Sì, ho fame.','A domani.','Non mi chiamo.'],correct:0,note:'Bravissima — “Sì, ho fame” means “Yes, I’m hungry.”'},
  {prompt:'Andiamo a prendere un caffè?',answers:['Volentieri!','Quanto ti chiami?','Sono acqua.'],correct:0,note:'“Volentieri!” means “Gladly / I’d love to!”'},
  {prompt:'Ti voglio bene.',answers:['Anch’io ti voglio bene.','Il bagno è lì.','Vorrei pagare.'],correct:0,note:'❤️ “Anch’io ti voglio bene” means “I love/care about you too.”'},
  {prompt:'Dov’è la stazione?',answers:['È vicino al centro.','Sono stanca.','Un caffè grande.'],correct:0,note:'Great — “È vicino al centro” means “It’s near the centre.”'},
  {prompt:'Vuoi ballare con me?',answers:['Sì, volentieri!','Dov’è il bagno?','Ho un biglietto.'],correct:0,note:'💃 “Sì, volentieri!” = “Yes, I’d love to!”'},
  {prompt:'Il conto, per favore.',answers:['Certo, subito.','Buonanotte.','Mi chiamo Shazzy.'],correct:0,note:'“Certo, subito” means “Of course, right away.”'},
  {prompt:'A domani!',answers:['A domani!','Ho fame.','Quanto costa?'],correct:0,note:'Exactly — “A domani!” means “See you tomorrow!”'},
  {prompt:'Posso aiutare?',answers:['Sì, grazie.','Sono un biglietto.','Buon caffè.'],correct:0,note:'“Sì, grazie” means “Yes, thank you.”'},
  {prompt:'Dove vuoi andare?',answers:['Andiamo al mare.','Mi chiamo stazione.','È un conto.'],correct:0,note:'🌊 “Andiamo al mare” means “Let’s go to the sea.”'},
  {prompt:'Che piacere vederti!',answers:['Anche per me!','Quanto costa il bagno?','Ho sonno caffè.'],correct:0,note:'“Anche per me!” means “Same for me!”'},
  {prompt:'Buonanotte, amore mio.',answers:['Buonanotte, tesoro.','Un biglietto, grazie.','Dov’è il centro?'],correct:0,note:'❤️ “Buonanotte, tesoro” means “Good night, darling.”'}
];

const practiceItems=[
  {en:'I am hungry.',it:'Ho fame.',gap:'fame'},
  {en:'I am tired.',it:'Sono stanca.',gap:'stanca'},
  {en:'Where are we going?',it:'Dove andiamo?',gap:'andiamo'},
  {en:'I would like a coffee, please.',it:'Vorrei un caffè, per favore.',gap:'caffè'},
  {en:'The bill, please.',it:'Il conto, per favore.',gap:'conto'},
  {en:'I do not understand.',it:'Non capisco.',gap:'capisco'},
  {en:'Good night, my love.',it:'Buonanotte, amore mio.',gap:'amore'},
  {en:'You make me smile.',it:'Mi fai sorridere.',gap:'sorridere'},
  {en:'Where is the bathroom?',it:'Dov’è il bagno?',gap:'bagno'},
  {en:'Can I help?',it:'Posso aiutare?',gap:'aiutare'},
  {en:'Everything is delicious.',it:'È tutto buonissimo.',gap:'buonissimo'},
  {en:'See you soon!',it:'A presto!',gap:'presto'}
];

const rescue=[
  ['Puoi ripetere, per favore?','Can you repeat, please?'],
  ['Come si dice in italiano?','How do you say it in Italian?'],
  ['Non ho capito.','I didn’t understand.'],
  ['Parla più lentamente, per favore.','Speak more slowly, please.']
];

const dailyLove=[
  ['Sei il mio sorriso preferito.','You are my favourite smile.'],
  ['Mi fai stare bene.','You make me feel good.'],
  ['Con te, tutto è più bello.','With you, everything is more beautiful.'],
  ['Mi piace ogni momento con te.','I like every moment with you.'],
  ['Un bacio per Shazzy.','A kiss for Shazzy.'],
  ['Buongiorno, amore mio.','Good morning, my love.'],
  ['Sei speciale per me.','You are special to me.'],
  ['Non vedo l’ora di vederti.','I can’t wait to see you.'],
  ['Mi fai ridere sempre.','You always make me laugh.'],
  ['Vieni qui, ho bisogno di un bacio.','Come here, I need a kiss.']
];

const levels=[
  {min:0,max:50,name:'Principiante',emoji:'🌱',next:'Coraggiosa 💪'},
  {min:50,max:120,name:'Coraggiosa',emoji:'💪',next:'Conversatrice 🗣️'},
  {min:120,max:250,name:'Conversatrice',emoji:'🗣️',next:'Italian Girlfriend Mode 😏🇮🇹'},
  {min:250,max:null,name:'Italian Girlfriend Mode',emoji:'😏🇮🇹',next:null}
];

const defaultState={
  category:'basics',phraseIndex:0,quizIndex:0,points:0,spoken:0,mission:0,
  missionAwards:0,missionDate:null,lastOpen:null,streak:1,quizCorrect:0,
  categoriesUsed:{},practiceMode:'write',practiceIndex:0,practiceCorrect:0,practiceWins:{}
};
let state=loadState();
let quizLocked=false;
let deferredPrompt=null;
let buildTokens=[];

const $=id=>document.getElementById(id);
function loadState(){
  try{
    const old=JSON.parse(localStorage.getItem('italianoConFreddyState')||'{}');
    return {...defaultState,...old,categoriesUsed:old.categoriesUsed||{},practiceWins:old.practiceWins||{}};
  }catch{return {...defaultState,categoriesUsed:{},practiceWins:{}}}
}
function saveState(){localStorage.setItem('italianoConFreddyState',JSON.stringify(state))}
function localDateKey(d=new Date()){
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function dateFromKey(k){
  const [y,m,d]=String(k||'').split('-').map(Number);
  return y&&m&&d?new Date(y,m-1,d):null;
}
function updateStreak(){
  const today=localDateKey();
  if(!state.lastOpen){state.lastOpen=today;state.streak=1;state.missionDate=today;saveState();return}
  if(state.missionDate!==today){state.mission=0;state.missionAwards=0;state.missionDate=today}
  if(state.lastOpen!==today){
    const prev=dateFromKey(state.lastOpen),curr=dateFromKey(today);
    const days=prev&&curr?Math.round((curr-prev)/86400000):99;
    state.streak=days===1?(state.streak||1)+1:1;
    state.lastOpen=today;
  }
  saveState();
}
function speak(text){
  if(!('speechSynthesis' in window)){alert('Italian audio is not available in this browser.');return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang='it-IT';u.rate=.82;
  const voices=speechSynthesis.getVoices();
  const it=voices.find(v=>v.lang&&v.lang.toLowerCase().startsWith('it'));
  if(it)u.voice=it;
  speechSynthesis.speak(u);
}
function renderWelcome(){
  const h=new Date().getHours();
  const greeting=h<12?'Buongiorno':h<18?'Buon pomeriggio':'Buonasera';
  $('welcomeLine').textContent=`${greeting}, Shazzy ❤️ Listen, repeat and make a little Italian yourself.`;
}
function renderTabs(){
  const wrap=$('categoryTabs');wrap.innerHTML='';
  Object.entries(lessons).forEach(([key,val])=>{
    const b=document.createElement('button');b.type='button';b.className='tab'+(state.category===key?' active':'');
    b.textContent=`${val.emoji} ${val.label}`;
    b.addEventListener('click',()=>{state.category=key;state.phraseIndex=0;state.categoriesUsed[key]=true;saveState();renderTabs();renderPhrase();renderStats()});
    wrap.appendChild(b);
  });
}
function renderPhrase(){
  const items=lessons[state.category].items;
  state.phraseIndex=Math.max(0,Math.min(state.phraseIndex,items.length-1));
  const [it,en,pron]=items[state.phraseIndex];
  $('italianPhrase').textContent=it;$('englishPhrase').textContent=en;$('pronunciation').textContent=pron;
  $('lessonCount').textContent=`${state.phraseIndex+1} / ${items.length}`;
  $('meaningPanel').classList.add('hidden');$('revealBtn').textContent='Reveal meaning';
}
function getLevel(){return levels.find(l=>state.points>=l.min&&(l.max===null||state.points<l.max))||levels[levels.length-1]}
function renderStats(){
  $('pointsValue').textContent=state.points;$('spokenValue').textContent=state.spoken;$('streakValue').textContent=`${state.streak} day${state.streak===1?'':'s'}`;
  const level=getLevel();$('levelValue').textContent=level.name;
  $('missionText').textContent=`${state.mission} / 5`;$('missionBar').style.width=`${Math.min(100,state.mission*20)}%`;
  $('saidBtn').textContent=state.mission>=5?'🎉 Mission complete':'✓ I said it aloud';
  $('levelTitle').textContent=`${level.name} ${level.emoji}`;
  if(level.max===null){$('levelPoints').textContent=`${state.points} pts`;$('levelBar').style.width='100%';$('levelHint').textContent='You made it. Italian Girlfriend Mode unlocked 😂❤️';}
  else{
    const span=level.max-level.min,progress=Math.max(0,state.points-level.min);
    $('levelPoints').textContent=`${progress} / ${span}`;$('levelBar').style.width=`${Math.min(100,(progress/span)*100)}%`;
    $('levelHint').textContent=`Next stop: ${level.next}`;
  }
  renderBadges();
}
function renderBadges(){
  const cats=Object.keys(state.categoriesUsed||{}).length;
  const practiceCount=Object.keys(state.practiceWins||{}).length;
  const badges=[
    [state.spoken>=1,'🗣️ First words'],
    [state.mission>=5,'🔥 Daily mission'],
    [state.quizCorrect>=3,'⭐ Quiz star'],
    [practiceCount>=1,'✍️ First sentence'],
    [practiceCount>=6,'🧩 Practice pro'],
    [state.points>=50,'💜 50 points'],
    [state.streak>=3,'🔥 3-day streak'],
    [cats>=5,'🌍 Explorer']
  ];
  const wrap=$('badgeList');wrap.innerHTML='';
  badges.forEach(([unlocked,label])=>{const s=document.createElement('span');s.className='badge'+(unlocked?' unlocked':'');s.textContent=unlocked?label:'🔒 '+label.replace(/^\S+\s/,'');wrap.appendChild(s)});
}
function renderQuiz(){
  state.quizIndex=Math.max(0,Math.min(state.quizIndex,quizzes.length-1));
  const q=quizzes[state.quizIndex];quizLocked=false;$('quizPrompt').textContent=q.prompt;$('quizCount').textContent=`${state.quizIndex+1} / ${quizzes.length}`;$('quizFeedback').textContent='';$('quizFeedback').className='feedback';$('nextQuizBtn').classList.add('hidden');
  const list=$('answerList');list.innerHTML='';
  q.answers.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=a;b.addEventListener('click',()=>checkAnswer(i,b));list.appendChild(b)});
}
function checkAnswer(index,button){
  if(quizLocked)return;quizLocked=true;const q=quizzes[state.quizIndex];const buttons=[...document.querySelectorAll('.answer')];buttons.forEach(b=>b.disabled=true);
  if(index===q.correct){button.classList.add('correct');$('quizFeedback').textContent='✅ '+q.note;$('quizFeedback').classList.add('good');state.points+=10;state.quizCorrect=(state.quizCorrect||0)+1;speak(q.answers[q.correct]);}
  else{button.classList.add('wrong');buttons[q.correct].classList.add('correct');$('quizFeedback').textContent='Almost! Best reply: “'+q.answers[q.correct]+'”';$('quizFeedback').classList.add('bad');}
  saveState();renderStats();$('nextQuizBtn').classList.remove('hidden');
}
function renderRescue(){
  const wrap=$('rescueList');wrap.innerHTML='';
  rescue.forEach(([it,en])=>{const b=document.createElement('button');b.type='button';b.className='rescue';b.innerHTML=`<strong>${it}</strong><span>${en}</span>`;b.addEventListener('click',()=>speak(it));wrap.appendChild(b)});
  document.querySelectorAll('.sardinian').forEach(b=>b.addEventListener('click',()=>speak(b.dataset.say)));
}
function renderDailyLove(){
  const dayNumber=Math.floor(Date.now()/86400000);
  const [it,en]=dailyLove[dayNumber%dailyLove.length];
  $('dailyLoveItalian').textContent=it;$('dailyLoveEnglish').textContent=en;$('dailyLoveEnglish').classList.add('hidden');$('dailyLoveReveal').textContent='Reveal meaning';
}
function normalizeItalian(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim()}
function levenshtein(a,b){
  const m=a.length,n=b.length,dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++)dp[i][0]=i;for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  return dp[m][n];
}
function similarity(a,b){a=normalizeItalian(a);b=normalizeItalian(b);if(!a||!b)return 0;return 1-levenshtein(a,b)/Math.max(a.length,b.length)}
function gapPhrase(item){
  const rx=new RegExp(item.gap.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i');
  return item.it.replace(rx,'_____');
}
function shuffledWords(text,index){
  const words=text.trim().split(/\s+/);const arr=words.map((w,i)=>({w,id:i}));
  let seed=(index+1)*9973+words.length*37;
  for(let i=arr.length-1;i>0;i--){seed=(seed*9301+49297)%233280;const j=Math.floor((seed/233280)*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}
  if(arr.length>1&&arr.every((x,i)=>x.id===i))[arr[0],arr[1]]=[arr[1],arr[0]];
  return arr;
}
function practiceKey(mode,index){return `${mode}:${index}`}
function awardPractice(mode,index,points){
  const key=practiceKey(mode,index);
  if(!state.practiceWins[key]){state.practiceWins[key]=true;state.practiceCorrect=(state.practiceCorrect||0)+1;state.points+=points;saveState();renderStats();}
}
function renderPracticeTabs(){
  document.querySelectorAll('.practice-tab').forEach(b=>b.classList.toggle('active',b.dataset.mode===state.practiceMode));
}
function renderPractice(){
  const item=practiceItems[state.practiceIndex%practiceItems.length];
  $('practiceCount').textContent=`${state.practiceIndex+1} / ${practiceItems.length}`;
  $('practiceFeedback').textContent='';$('practiceFeedback').className='feedback';
  $('practiceInput').value='';$('buildArea').classList.add('hidden');$('practiceInputArea').classList.remove('hidden');
  renderPracticeTabs();
  if(state.practiceMode==='write'){
    $('practiceInstruction').textContent='Translate into Italian';$('practicePrompt').textContent=item.en;
    $('practiceInputLabel').textContent='Type the full Italian sentence';$('practiceInput').placeholder='Type in Italian…';
  }else if(state.practiceMode==='gap'){
    $('practiceInstruction').textContent='Type the missing Italian word';$('practicePrompt').textContent=gapPhrase(item);
    $('practiceInputLabel').textContent=`Hint: ${item.en}`;$('practiceInput').placeholder='Missing word…';
  }else{
    $('practiceInstruction').textContent='Build this sentence in Italian';$('practicePrompt').textContent=item.en;
    $('practiceInputArea').classList.add('hidden');$('buildArea').classList.remove('hidden');
    buildTokens=[];renderWordBank(item);
  }
}
function renderWordBank(item){
  const bank=$('wordBank');bank.innerHTML='';
  const shuffled=shuffledWords(item.it,state.practiceIndex);
  shuffled.forEach(token=>{
    const b=document.createElement('button');b.type='button';b.className='word-chip';b.textContent=token.w;b.dataset.id=String(token.id);
    b.addEventListener('click',()=>{if(b.disabled)return;b.disabled=true;b.classList.add('used');buildTokens.push(token);renderBuiltSentence()});
    bank.appendChild(b);
  });
  renderBuiltSentence();
}
function renderBuiltSentence(){
  const box=$('builtSentence');
  box.textContent=buildTokens.length?buildTokens.map(x=>x.w).join(' '):'Your sentence will appear here…';
  box.classList.toggle('placeholder',buildTokens.length===0);
}
function clearBuild(){
  buildTokens=[];document.querySelectorAll('#wordBank .word-chip').forEach(b=>{b.disabled=false;b.classList.remove('used')});renderBuiltSentence();
}
function showPracticeFeedback(text,type){
  $('practiceFeedback').textContent=text;$('practiceFeedback').className='feedback '+(type||'');
}
function checkPractice(){
  const item=practiceItems[state.practiceIndex%practiceItems.length];
  let answer='',target='',threshold=.9,points=12;
  if(state.practiceMode==='write'){answer=$('practiceInput').value;target=item.it;threshold=.86;points=15;}
  else if(state.practiceMode==='gap'){answer=$('practiceInput').value;target=item.gap;threshold=.9;points=10;}
  else{answer=buildTokens.map(x=>x.w).join(' ');target=item.it;threshold=.98;points=12;}
  if(!normalizeItalian(answer)){showPracticeFeedback('Type or build an answer first 💜','bad');return}
  if(similarity(answer,target)>=threshold){
    showPracticeFeedback('✅ Bravissima! '+item.it,'good');awardPractice(state.practiceMode,state.practiceIndex,points);speak(item.it);
  }else{
    showPracticeFeedback('Nearly — have another go, or tap “Show answer”.','bad');
  }
}
function revealPractice(){
  const item=practiceItems[state.practiceIndex%practiceItems.length];
  showPracticeFeedback(`Answer: ${item.it}`,'');speak(item.it);
}
function nextPractice(){
  state.practiceIndex=(state.practiceIndex+1)%practiceItems.length;saveState();renderPractice();
}
function renderAll(){renderWelcome();renderTabs();renderPhrase();renderStats();renderQuiz();renderRescue();renderDailyLove();renderPractice()}

$('hearBtn').addEventListener('click',()=>speak($('italianPhrase').textContent));
$('revealBtn').addEventListener('click',()=>{const hidden=$('meaningPanel').classList.toggle('hidden');$('revealBtn').textContent=hidden?'Reveal meaning':'Hide meaning'});
$('saidBtn').addEventListener('click',()=>{
  state.spoken++;
  if(state.mission<5){
    state.mission++;
    if((state.missionAwards||0)<state.mission){state.points+=5;state.missionAwards=(state.missionAwards||0)+1;}
  }
  state.categoriesUsed[state.category]=true;saveState();renderStats();
});
$('nextPhraseBtn').addEventListener('click',()=>{const n=lessons[state.category].items.length;state.phraseIndex=(state.phraseIndex+1)%n;saveState();renderPhrase()});
$('resetMissionBtn').addEventListener('click',()=>{if(confirm('Reset today’s 5-phrase challenge? Your points and total spoken count will stay.')){state.mission=0;saveState();renderStats()}});

$('nextQuizBtn').addEventListener('click',()=>{state.quizIndex=(state.quizIndex+1)%quizzes.length;saveState();renderQuiz()});
$('restartQuizBtn').addEventListener('click',()=>{state.quizIndex=0;saveState();renderQuiz()});

$('dailyLoveHear').addEventListener('click',()=>speak($('dailyLoveItalian').textContent));
$('dailyLoveReveal').addEventListener('click',()=>{const hidden=$('dailyLoveEnglish').classList.toggle('hidden');$('dailyLoveReveal').textContent=hidden?'Reveal meaning':'Hide meaning'});

document.querySelectorAll('.practice-tab').forEach(b=>b.addEventListener('click',()=>{state.practiceMode=b.dataset.mode;state.practiceIndex=0;saveState();renderPractice()}));
$('checkPracticeBtn').addEventListener('click',checkPractice);
$('revealPracticeBtn').addEventListener('click',revealPractice);
$('nextPracticeBtn').addEventListener('click',nextPractice);
$('restartPracticeBtn').addEventListener('click',()=>{state.practiceIndex=0;saveState();renderPractice()});
$('clearBuildBtn').addEventListener('click',clearBuild);
$('practiceInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();checkPractice()}});

$('resetBtn').addEventListener('click',()=>{if(confirm('Reset ALL progress, points, streaks and achievements?')){state={...defaultState,lastOpen:localDateKey(),missionDate:localDateKey(),categoriesUsed:{},practiceWins:{}};saveState();renderAll()}});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden')});
$('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('installBtn').classList.add('hidden')});
window.addEventListener('appinstalled',()=>{$('installBtn').classList.add('hidden')});

if('serviceWorker' in navigator){
  let refreshing=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(refreshing)return;refreshing=true;window.location.reload()});
  window.addEventListener('load',()=>{navigator.serviceWorker.register('./service-worker.js',{updateViaCache:'none'}).then(reg=>reg.update()).catch(()=>{})});
}
updateStreak();renderAll();
