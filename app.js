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
  {en:'See you soon!',it:'A presto!',gap:'presto'},
  {en:'Can you repeat, please?',it:'Puoi ripetere, per favore?',gap:'ripetere'},
  {en:'How do you say it in Italian?',it:'Come si dice in italiano?',gap:'italiano'},
  {en:'Speak more slowly, please.',it:'Parla più lentamente, per favore.',gap:'lentamente'},
  {en:'I like being with you.',it:'Mi piace stare con te.',gap:'piace'},
  {en:'Shall I make you a coffee?',it:'Ti preparo un caffè?',gap:'caffè'},
  {en:'What time does it leave?',it:'A che ora parte?',gap:'parte'},
  {en:'Can you help me?',it:'Mi può aiutare?',gap:'aiutare'},
  {en:'Let’s toast to us.',it:'Brindiamo a noi.',gap:'noi'},
  {en:'Shall we go home together?',it:'Andiamo a casa insieme?',gap:'casa'},
  {en:'Thank you for having me.',it:'Grazie per avermi ospitata.',gap:'ospitata'},
  {en:'I had a lot of fun.',it:'Mi sono divertita molto.',gap:'divertita'},
  {en:'See you later!',it:'A dopo!',gap:'dopo'}
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

const stickerRewards=[
  {id:'first-words',title:'First words 💕',hint:'Say 1 phrase out loud',text:'You said your first Italian phrase out loud.',image:'stickers/sticker-1.png',unlocked:()=>state.spoken>=1},
  {id:'daily-five',title:'Daily five 🔥',hint:'Complete the 5-phrase daily mission',text:'Five phrases in one day = one very cute reward.',image:'stickers/sticker-2.png',unlocked:()=> (state.missionsCompleted||0)>=1},
  {id:'quiz-star',title:'Quiz star ⭐',hint:'Get 3 conversation answers right',text:'Freddy is impressed with those smart replies.',image:'stickers/sticker-3.png',unlocked:()=> (state.quizCorrect||0)>=3},
  {id:'practice-pro',title:'Practice pro ✍️',hint:'Complete 6 exercises correctly',text:'Typing and building sentences is paying off.',image:'stickers/sticker-4.png',unlocked:()=> Object.keys(state.practiceWins||{}).length>=6},
  {id:'three-day',title:'Three-day streak 🔥',hint:'Come back 3 days in a row',text:'Consistency looks very good on you, amore.',image:'stickers/sticker-5.png',unlocked:()=> (state.maxStreak||state.streak||1)>=3},
  {id:'love-level',title:'Love level 100 💜',hint:'Reach 100 points',text:'You reached 100 points and unlocked the kiss sticker.',image:'stickers/sticker-6.png',unlocked:()=> (state.points||0)>=100}
];

const defaultState={
  category:'basics',phraseIndex:0,quizIndex:0,points:0,spoken:0,mission:0,
  missionAwards:0,missionDate:null,lastOpen:null,streak:1,quizCorrect:0,
  categoriesUsed:{},practiceMode:'write',practiceIndex:0,practiceCorrect:0,practiceWins:{},quizWins:{},
  missionsCompleted:0,lastMissionCompleteDate:null,maxStreak:1,reminderEnabled:false,reminderTime:'19:00',reminderLastSent:null,
  seenStickerRewards:{}
};
let state=loadState();
let quizLocked=false;
let deferredPrompt=null;
let buildTokens=[];
let selectedGapChoice=null;

const $=id=>document.getElementById(id);
function loadState(){
  try{
    const old=JSON.parse(localStorage.getItem('italianoConFreddyState')||'{}');
    const merged={...defaultState,...old,categoriesUsed:old.categoriesUsed||{},practiceWins:old.practiceWins||{},quizWins:old.quizWins||{},seenStickerRewards:old.seenStickerRewards||{}};
    if((merged.mission||0)>=5 && !(merged.missionsCompleted>0)) merged.missionsCompleted=1;
    merged.maxStreak=Math.max(merged.maxStreak||1,merged.streak||1);
    return merged;
  }catch{return {...defaultState,categoriesUsed:{},practiceWins:{},quizWins:{},seenStickerRewards:{}}}
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
    state.maxStreak=Math.max(state.maxStreak||1,state.streak||1);
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
  $('pointsValue').textContent=state.points;const scorePill=$('scoreTotalPill');if(scorePill)scorePill.textContent=`${state.points} pts`;$('spokenValue').textContent=state.spoken;$('streakValue').textContent=`${state.streak} day${state.streak===1?'':'s'}`;
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
  renderStickerHighlights();
}

function getAchievementData(){
  const cats=Object.keys(state.categoriesUsed||{}).length;
  const practiceKeys=Object.keys(state.practiceWins||{});
  const modes=new Set(practiceKeys.map(k=>k.split(':')[0]));
  return [
    [state.spoken>=1,'🗣️ First words'],
    [(state.missionsCompleted||0)>=1,'🔥 Daily five'],
    [(state.quizCorrect||0)>=3,'⭐ Quiz star'],
    [practiceKeys.length>=1,'✍️ First sentence'],
    [practiceKeys.length>=6,'🧩 Practice pro'],
    [state.points>=50,'💜 50 points'],
    [state.points>=100,'✨ 100 points'],
    [state.points>=250,'🇮🇹 Italian Girlfriend'],
    [(state.maxStreak||state.streak||1)>=3,'🔥 3-day streak'],
    [(state.maxStreak||state.streak||1)>=7,'🏅 7-day streak'],
    [cats>=5,'🌍 Explorer'],
    [modes.size>=3,'👑 Triple threat']
  ];
}
function renderBadges(){
  const badges=getAchievementData();
  const unlocked=badges.filter(([ok])=>ok).length;
  const summary=$('achievementSummary');if(summary)summary.textContent=`${unlocked} / ${badges.length} achievements`;
  const wrap=$('badgeList');wrap.innerHTML='';
  badges.forEach(([unlockedFlag,label])=>{const s=document.createElement('span');s.className='badge'+(unlockedFlag?' unlocked':'');s.textContent=unlockedFlag?label:'🔒 '+label.replace(/^\S+\s/,'');wrap.appendChild(s)});
}
function unlockedStickerRewards(){return stickerRewards.filter(reward=>reward.unlocked())}
function getFeaturedSticker(){const unlocked=unlockedStickerRewards();return unlocked.length?unlocked[unlocked.length-1]:stickerRewards[0]}
function renderStickerHighlights(){
  const homeCount=$('stickerUnlockedCount');
  const galleryCount=$('stickerGalleryCount');
  const unlocked=unlockedStickerRewards();
  if(homeCount)homeCount.textContent=`${unlocked.length} / ${stickerRewards.length} unlocked`;
  if(galleryCount)galleryCount.textContent=`${unlocked.length} / ${stickerRewards.length}`;
  const featured=getFeaturedSticker();
  if($('featuredStickerImg'))$('featuredStickerImg').src=featured.image;
  if($('featuredStickerTitle'))$('featuredStickerTitle').textContent=unlocked.length?featured.title:'First little reward';
  if($('featuredStickerText'))$('featuredStickerText').textContent=unlocked.length?featured.text:`${featured.hint} to unlock your first couple sticker.`;
  renderStickerGallery();
}
function renderStickerGallery(){
  const wrap=$('stickerGallery');
  if(!wrap)return;
  wrap.innerHTML='';
  stickerRewards.forEach(reward=>{
    const unlocked=reward.unlocked();
    const card=document.createElement('article');
    card.className='sticker-tile'+(unlocked?'':' locked');
    card.innerHTML=`<img src="${reward.image}" alt="${reward.title}"><div class="sticker-meta"><span class="sticker-status">${unlocked?'✨ Unlocked':'🔒 Locked'}</span><strong>${reward.title}</strong><small>${unlocked?reward.text:reward.hint}</small></div>`;
    wrap.appendChild(card);
  });
}
function openStickerReward(reward){
  const modal=$('stickerUnlockModal');
  if(!modal)return;
  $('rewardStickerImg').src=reward.image;
  $('rewardStickerTitle').textContent=reward.title;
  $('rewardStickerText').textContent=reward.text;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}
function closeStickerReward(){
  const modal=$('stickerUnlockModal');
  if(!modal)return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}
function maybeShowStickerReward(){
  const next=stickerRewards.find(reward=>reward.unlocked() && !state.seenStickerRewards[reward.id]);
  renderStickerHighlights();
  if(!next)return;
  state.seenStickerRewards[next.id]=true;
  saveState();
  openStickerReward(next);
}

function renderQuiz(){
  state.quizIndex=Math.max(0,Math.min(state.quizIndex,quizzes.length-1));
  const q=quizzes[state.quizIndex];quizLocked=false;$('quizPrompt').textContent=q.prompt;$('quizCount').textContent=`${state.quizIndex+1} / ${quizzes.length}`;$('quizFeedback').textContent='';$('quizFeedback').className='feedback';$('nextQuizBtn').classList.add('hidden');
  const list=$('answerList');list.innerHTML='';
  q.answers.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=a;b.addEventListener('click',()=>checkAnswer(i,b));list.appendChild(b)});
}
function checkAnswer(index,button){
  if(quizLocked)return;quizLocked=true;const q=quizzes[state.quizIndex];const buttons=[...document.querySelectorAll('.answer')];buttons.forEach(b=>b.disabled=true);
  if(index===q.correct){button.classList.add('correct');$('quizFeedback').textContent='✅ '+q.note;$('quizFeedback').classList.add('good');const key=String(state.quizIndex);if(!state.quizWins[key]){state.quizWins[key]=true;state.points+=10;state.quizCorrect=(state.quizCorrect||0)+1;}speak(q.answers[q.correct]);}
  else{button.classList.add('wrong');buttons[q.correct].classList.add('correct');$('quizFeedback').textContent='Almost! Best reply: “'+q.answers[q.correct]+'”';$('quizFeedback').classList.add('bad');}
  saveState();renderStats();maybeShowStickerReward();$('nextQuizBtn').classList.remove('hidden');
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
function gapChoices(item,index){
  const answer=item.gap;
  const pool=[];
  for(let step=1;pool.length<3&&step<practiceItems.length*2;step++){
    const candidate=practiceItems[(index+step*5)%practiceItems.length].gap;
    if(normalizeItalian(candidate)!==normalizeItalian(answer)&&!pool.some(x=>normalizeItalian(x)===normalizeItalian(candidate)))pool.push(candidate);
  }
  const choices=[answer,...pool];
  let seed=(index+11)*7919;
  for(let i=choices.length-1;i>0;i--){seed=(seed*9301+49297)%233280;const j=Math.floor((seed/233280)*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]]}
  return choices;
}
function renderGapChoices(item){
  const list=$('gapChoiceList');list.innerHTML='';selectedGapChoice=null;
  gapChoices(item,state.practiceIndex).forEach(word=>{
    const b=document.createElement('button');b.type='button';b.className='gap-choice';b.textContent=word;
    b.addEventListener('click',()=>{
      selectedGapChoice=word;
      document.querySelectorAll('.gap-choice').forEach(x=>x.classList.toggle('selected',x===b));
      $('practiceFeedback').textContent='';$('practiceFeedback').className='feedback';
    });
    list.appendChild(b);
  });
}
function showPracticeHint(){
  const item=practiceItems[state.practiceIndex%practiceItems.length];
  const mode=effectivePracticeMode();const box=$('practiceHint');box.classList.remove('hidden');
  if(mode==='write'){
    const words=item.it.replace(/[?!.,]/g,'').trim().split(/\s+/);
    box.textContent=`💡 Starts with “${words[0]}” · ${words.length} word${words.length===1?'':'s'} total.`;
  }else if(mode==='gap'){
    const clean=item.gap.replace(/[^A-Za-zÀ-ÿ]/g,'');
    box.textContent=`💡 It starts with “${item.gap.charAt(0).toUpperCase()}” and has ${clean.length} letters. English clue: ${item.en}`;
  }else{
    const first=item.it.replace(/[?!.,]/g,'').trim().split(/\s+/)[0];
    box.textContent=`💡 Start with “${first}”. Then build the rest from the word tiles.`;
  }
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
  if(!state.practiceWins[key]){state.practiceWins[key]=true;state.practiceCorrect=(state.practiceCorrect||0)+1;state.points+=points;saveState();renderStats();maybeShowStickerReward();}
}
function renderPracticeTabs(){
  document.querySelectorAll('.practice-tab').forEach(b=>b.classList.toggle('active',b.dataset.mode===state.practiceMode));
}
function effectivePracticeMode(){
  if(state.practiceMode!=='mix')return state.practiceMode;
  return ['write','gap','build'][state.practiceIndex%3];
}
function renderPractice(){
  const item=practiceItems[state.practiceIndex%practiceItems.length];
  const mode=effectivePracticeMode();
  $('practiceCount').textContent=`${state.practiceIndex+1} / ${practiceItems.length}`;
  $('practiceFeedback').textContent='';$('practiceFeedback').className='feedback';
  $('practiceInput').value='';selectedGapChoice=null;
  $('buildArea').classList.add('hidden');$('gapChoiceArea').classList.add('hidden');$('practiceInputArea').classList.remove('hidden');
  $('practiceHint').classList.add('hidden');$('practiceHint').textContent='';
  renderPracticeTabs();
  const title=$('practiceModeTitle');
  const modeLabel=mode==='write'?'Write it':mode==='gap'?'Choose the word':'Build sentence';
  if(title)title.textContent=state.practiceMode==='mix'?`Mix it up · ${modeLabel}`:modeLabel;
  if(mode==='write'){
    $('practiceInstruction').textContent=state.practiceMode==='mix'?'Mixed challenge · Translate into Italian':'Translate into Italian';$('practicePrompt').textContent=item.en;
    $('practiceInputLabel').textContent='Type the full Italian sentence';$('practiceInput').placeholder='Type in Italian…';
  }else if(mode==='gap'){
    $('practiceInstruction').textContent=state.practiceMode==='mix'?'Mixed challenge · Choose the missing word':'Choose the missing Italian word';$('practicePrompt').textContent=gapPhrase(item);
    $('practiceInputArea').classList.add('hidden');$('gapChoiceArea').classList.remove('hidden');renderGapChoices(item);
  }else{
    $('practiceInstruction').textContent=state.practiceMode==='mix'?'Mixed challenge · Build the sentence':'Build this sentence in Italian';$('practicePrompt').textContent=item.en;
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
  const mode=effectivePracticeMode();
  let answer='',target='',threshold=.9,points=12;
  if(mode==='write'){answer=$('practiceInput').value;target=item.it;threshold=.86;points=15;}
  else if(mode==='gap'){answer=selectedGapChoice||'';target=item.gap;threshold=.99;points=10;}
  else{answer=buildTokens.map(x=>x.w).join(' ');target=item.it;threshold=.98;points=12;}
  if(!normalizeItalian(answer)){showPracticeFeedback(mode==='gap'?'Choose one of the words first 💜':'Type or build an answer first 💜','bad');return}
  if(similarity(answer,target)>=threshold){
    if(mode==='gap')document.querySelectorAll('.gap-choice').forEach(b=>{if(normalizeItalian(b.textContent)===normalizeItalian(target))b.classList.add('correct')});
    showPracticeFeedback('✅ Bravissima! '+item.it,'good');awardPractice(mode,state.practiceIndex,points);speak(item.it);
  }else{
    if(mode==='gap')document.querySelectorAll('.gap-choice').forEach(b=>{if(b.classList.contains('selected'))b.classList.add('wrong')});
    showPracticeFeedback('Almost — try another choice or use the hint 💜','bad');
  }
}
function revealPractice(){
  const item=practiceItems[state.practiceIndex%practiceItems.length];
  showPracticeFeedback(`Answer: ${item.it}`,'');speak(item.it);
}
function nextPractice(){
  state.practiceIndex=(state.practiceIndex+1)%practiceItems.length;saveState();renderPractice();
}
function renderReminder(){
  const input=$('reminderTime');if(input)input.value=state.reminderTime||'19:00';
  const pill=$('reminderPill');const status=$('reminderStatus');
  if(pill)pill.textContent=state.reminderEnabled?(state.reminderTime||'19:00'):'Off';
  if(status){
    if(!state.reminderEnabled)status.textContent='Reminder is off. Choose a time and save it.';
    else status.textContent=`Daily Italian reminder saved for ${state.reminderTime}.`;
  }
  const nb=$('notificationBtn');
  if(nb && 'Notification' in window){
    nb.textContent=Notification.permission==='granted'?'✅ App notifications allowed':'🔔 Allow app notifications';
  }
}
function saveReminder(){
  const value=$('reminderTime').value||'19:00';
  if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)){ $('reminderStatus').textContent='Pick a valid time first.'; return; }
  state.reminderTime=value;state.reminderEnabled=true;saveState();renderReminder();
  $('reminderStatus').textContent=`Saved ❤️ Shazzy’s daily Italian time is ${value}.`;
  scheduleReminderCheck();
}
async function requestNotifications(){
  if(!('Notification' in window)){ $('reminderStatus').textContent='This browser does not support app notifications. Use the calendar reminder instead.'; return; }
  const permission=await Notification.requestPermission();renderReminder();
  $('reminderStatus').textContent=permission==='granted'?'Notifications allowed. Keep the calendar reminder too if you want it to work when the app is fully closed.':'Notification permission was not enabled. The calendar reminder still works.';
}
function disableReminder(){state.reminderEnabled=false;saveState();renderReminder()}
function nextReminderDate(time){
  const [h,m]=String(time||'19:00').split(':').map(Number);const d=new Date();d.setHours(h,m,0,0);if(d<=new Date())d.setDate(d.getDate()+1);return d;
}
function pad2(n){return String(n).padStart(2,'0')}
function icsLocal(dt){return `${dt.getFullYear()}${pad2(dt.getMonth()+1)}${pad2(dt.getDate())}T${pad2(dt.getHours())}${pad2(dt.getMinutes())}00`}
function icsUtc(dt){return `${dt.getUTCFullYear()}${pad2(dt.getUTCMonth()+1)}${pad2(dt.getUTCDate())}T${pad2(dt.getUTCHours())}${pad2(dt.getUTCMinutes())}${pad2(dt.getUTCSeconds())}Z`}
function downloadCalendarReminder(){
  const time=$('reminderTime').value||state.reminderTime||'19:00';state.reminderTime=time;state.reminderEnabled=true;saveState();renderReminder();
  const start=nextReminderDate(time);const uid=`shazzy-italian-${Date.now()}@italiano-con-shazzy`;
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Italiano con Shazzy//Daily Reminder//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:${uid}`,`DTSTAMP:${icsUtc(new Date())}`,`DTSTART:${icsLocal(start)}`,'RRULE:FREQ=DAILY','SUMMARY:Italiano con Shazzy 🇮🇹','DESCRIPTION:Five little minutes of Italian with Freddy ❤️','BEGIN:VALARM','TRIGGER:PT0M','ACTION:DISPLAY','DESCRIPTION:Time for a little Italian 🇮🇹','END:VALARM','END:VEVENT','END:VCALENDAR'];
  const blob=new Blob([lines.join('\r\n')],{type:'text/calendar;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='shazzy-daily-italian-reminder.ics';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  $('reminderStatus').textContent='Calendar reminder created. Open the downloaded file and add it to her calendar.';
}
let reminderTimer=null;
function scheduleReminderCheck(){
  if(reminderTimer)clearInterval(reminderTimer);
  const check=async()=>{
    if(!state.reminderEnabled)return;const now=new Date();const nowTime=`${pad2(now.getHours())}:${pad2(now.getMinutes())}`;const today=localDateKey(now);
    if(nowTime>=state.reminderTime && state.reminderLastSent!==today){
      state.reminderLastSent=today;saveState();
      if('Notification' in window && Notification.permission==='granted' && 'serviceWorker' in navigator){
        try{const reg=await navigator.serviceWorker.ready;await reg.showNotification('Italiano con Shazzy 🇮🇹',{body:'Five little minutes of Italian with Freddy ❤️',icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:'shazzy-daily-italian'});}catch{}
      }
    }
  };
  check();reminderTimer=setInterval(check,30000);
}
function showView(name){
  document.querySelectorAll('.app-view').forEach(v=>v.classList.toggle('active',v.dataset.view===name));
  if(name==='progress')renderStats();
  if(name==='practice')renderPractice();
  if(name==='reminder')renderReminder();
  if(name==='stickers')renderStickerGallery();
  window.scrollTo({top:0,behavior:'smooth'});
}
function setupNavigation(){
  document.querySelectorAll('[data-open-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.openView)));
  document.querySelectorAll('[data-home]').forEach(b=>b.addEventListener('click',()=>showView('home')));
}
function renderAll(){renderWelcome();renderTabs();renderPhrase();renderStats();renderQuiz();renderRescue();renderDailyLove();renderPractice();renderReminder();renderStickerHighlights()}


$('hearBtn').addEventListener('click',()=>speak($('italianPhrase').textContent));
$('revealBtn').addEventListener('click',()=>{const hidden=$('meaningPanel').classList.toggle('hidden');$('revealBtn').textContent=hidden?'Reveal meaning':'Hide meaning'});
$('saidBtn').addEventListener('click',()=>{
  state.spoken++;
  if(state.mission<5){
    state.mission++;
    if((state.missionAwards||0)<state.mission){state.points+=5;state.missionAwards=(state.missionAwards||0)+1;}
    if(state.mission===5 && state.lastMissionCompleteDate!==localDateKey()){state.missionsCompleted=(state.missionsCompleted||0)+1;state.lastMissionCompleteDate=localDateKey();}
  }
  state.categoriesUsed[state.category]=true;saveState();renderStats();maybeShowStickerReward();
});
$('nextPhraseBtn').addEventListener('click',()=>{const n=lessons[state.category].items.length;state.phraseIndex=(state.phraseIndex+1)%n;saveState();renderPhrase()});
$('resetMissionBtn').addEventListener('click',()=>{if(confirm('Reset today’s 5-phrase challenge? Your points and total spoken count will stay.')){state.mission=0;saveState();renderStats()}});

$('nextQuizBtn').addEventListener('click',()=>{state.quizIndex=(state.quizIndex+1)%quizzes.length;saveState();renderQuiz()});
$('restartQuizBtn').addEventListener('click',()=>{state.quizIndex=0;saveState();renderQuiz()});

$('dailyLoveHear').addEventListener('click',()=>speak($('dailyLoveItalian').textContent));
$('dailyLoveReveal').addEventListener('click',()=>{const hidden=$('dailyLoveEnglish').classList.toggle('hidden');$('dailyLoveReveal').textContent=hidden?'Reveal meaning':'Hide meaning'});

document.querySelectorAll('.practice-tab').forEach(b=>b.addEventListener('click',()=>{state.practiceMode=b.dataset.mode;state.practiceIndex=0;saveState();renderPractice()}));
$('checkPracticeBtn').addEventListener('click',checkPractice);
$('hintPracticeBtn').addEventListener('click',showPracticeHint);
$('revealPracticeBtn').addEventListener('click',revealPractice);
$('nextPracticeBtn').addEventListener('click',nextPractice);
$('restartPracticeBtn').addEventListener('click',()=>{state.practiceIndex=0;saveState();renderPractice()});
$('clearBuildBtn').addEventListener('click',clearBuild);
$('practiceInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();checkPractice()}});

$('saveReminderBtn').addEventListener('click',saveReminder);
$('notificationBtn').addEventListener('click',requestNotifications);
$('calendarReminderBtn').addEventListener('click',downloadCalendarReminder);
$('disableReminderBtn').addEventListener('click',disableReminder);
$('closeStickerModal').addEventListener('click',closeStickerReward);
$('rewardStickerCloseBtn').addEventListener('click',closeStickerReward);
$('rewardOpenGalleryBtn').addEventListener('click',()=>{closeStickerReward();showView('stickers')});

$('resetBtn').addEventListener('click',()=>{if(confirm('Reset ALL progress, points, streaks and achievements?')){state={...defaultState,lastOpen:localDateKey(),missionDate:localDateKey(),categoriesUsed:{},practiceWins:{},quizWins:{},seenStickerRewards:{}};saveState();renderAll();closeStickerReward();}});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden')});
$('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('installBtn').classList.add('hidden')});
window.addEventListener('appinstalled',()=>{$('installBtn').classList.add('hidden')});

if('serviceWorker' in navigator){
  let refreshing=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(refreshing)return;refreshing=true;window.location.reload()});
  window.addEventListener('load',()=>{navigator.serviceWorker.register('./service-worker.js',{updateViaCache:'none'}).then(reg=>reg.update()).catch(()=>{})});
}
setupNavigation();updateStreak();renderAll();maybeShowStickerReward();scheduleReminderCheck();
