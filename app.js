const lessons={
  basics:{label:'Basics',emoji:'👋',items:[
    ['Ciao! Come stai?','Hi! How are you?','chow • KOH-meh stai'],
    ['Sto bene, grazie.','I am well, thank you.','stoh BEH-neh • GRAH-tsyeh'],
    ['Mi chiamo…','My name is…','mee KYAH-moh'],
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
    ['Andiamo a cena insieme?','Shall we go for dinner together?','an-DYAH-moh ah CHEH-nah een-SYEH-meh']
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
  ]}
};
const quizzes=[
  {prompt:'Buongiorno! Come stai?',answers:['Sto bene, grazie!','Il conto, per favore.','Mi chiamo caffè.'],correct:0,note:'Perfetto — “Sto bene, grazie!” means “I’m well, thank you!”'},
  {prompt:'Hai fame?',answers:['Sì, ho fame.','A domani.','Non mi chiamo.'],correct:0,note:'Bravissima — “Sì, ho fame” means “Yes, I’m hungry.”'},
  {prompt:'Andiamo a prendere un caffè?',answers:['Volentieri!','Quanto ti chiami?','Sono acqua.'],correct:0,note:'“Volentieri!” means “Gladly / I’d love to!”'},
  {prompt:'Ti voglio bene.',answers:['Anch’io ti voglio bene.','Il bagno è lì.','Vorrei pagare.'],correct:0,note:'❤️ “Anch’io ti voglio bene” means “I love/care about you too.”'},
  {prompt:'A domani!',answers:['A domani!','Ho fame.','Quanto costa?'],correct:0,note:'Exactly — “A domani!” means “See you tomorrow!”'}
];
const rescue=[
  ['Puoi ripetere, per favore?','Can you repeat, please?'],
  ['Come si dice in italiano?','How do you say it in Italian?'],
  ['Non ho capito.','I didn’t understand.'],
  ['Parla più lentamente, per favore.','Speak more slowly, please.']
];
const defaultState={category:'basics',phraseIndex:0,quizIndex:0,points:0,spoken:0,mission:0,lastOpen:null,streak:1};
let state=loadState();
let quizLocked=false;
let deferredPrompt=null;

const $=id=>document.getElementById(id);
function loadState(){
  try{return {...defaultState,...JSON.parse(localStorage.getItem('italianoConFreddyState')||'{}')}}catch{return {...defaultState}}
}
function saveState(){localStorage.setItem('italianoConFreddyState',JSON.stringify(state))}
function todayKey(){return new Date().toISOString().slice(0,10)}
function updateStreak(){
  const today=todayKey();
  if(!state.lastOpen){state.lastOpen=today;state.streak=1;saveState();return}
  if(state.lastOpen===today)return;
  const prev=new Date(state.lastOpen+'T00:00:00Z');
  const curr=new Date(today+'T00:00:00Z');
  const days=Math.round((curr-prev)/86400000);
  state.streak=days===1?state.streak+1:1;
  state.lastOpen=today;state.mission=0;saveState();
}
function speak(text){
  if(!('speechSynthesis' in window)){alert('Italian audio is not available in this browser.');return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang='it-IT';u.rate=.82;
  const voices=speechSynthesis.getVoices();const it=voices.find(v=>v.lang&&v.lang.toLowerCase().startsWith('it'));
  if(it)u.voice=it;speechSynthesis.speak(u);
}
function renderTabs(){
  const wrap=$('categoryTabs');wrap.innerHTML='';
  Object.entries(lessons).forEach(([key,val])=>{
    const b=document.createElement('button');b.type='button';b.className='tab'+(state.category===key?' active':'');
    b.textContent=`${val.emoji} ${val.label}`;b.addEventListener('click',()=>{state.category=key;state.phraseIndex=0;saveState();renderAll()});wrap.appendChild(b)
  })
}
function renderPhrase(){
  const items=lessons[state.category].items;state.phraseIndex=Math.max(0,Math.min(state.phraseIndex,items.length-1));
  const [it,en,pron]=items[state.phraseIndex];$('italianPhrase').textContent=it;$('englishPhrase').textContent=en;$('pronunciation').textContent=pron;$('lessonCount').textContent=`${state.phraseIndex+1} / ${items.length}`;$('meaningPanel').classList.add('hidden');$('revealBtn').textContent='Reveal meaning'
}
function renderStats(){
  $('pointsValue').textContent=state.points;$('spokenValue').textContent=state.spoken;$('streakValue').textContent=`${state.streak} day${state.streak===1?'':'s'}`;
  $('missionText').textContent=`${state.mission} / 5`;$('missionBar').style.width=`${Math.min(100,state.mission*20)}%`;$('saidBtn').textContent=state.mission>=5?'🎉 Mission complete':'✓ I said it aloud'
}
function renderQuiz(){
  const q=quizzes[state.quizIndex];quizLocked=false;$('quizPrompt').textContent=q.prompt;$('quizCount').textContent=`${state.quizIndex+1} / ${quizzes.length}`;$('quizFeedback').textContent='';$('quizFeedback').className='feedback';$('nextQuizBtn').classList.add('hidden');
  const list=$('answerList');list.innerHTML='';q.answers.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=a;b.addEventListener('click',()=>checkAnswer(i,b));list.appendChild(b)})
}
function checkAnswer(index,button){
  if(quizLocked)return;quizLocked=true;const q=quizzes[state.quizIndex];const buttons=[...document.querySelectorAll('.answer')];buttons.forEach(b=>b.disabled=true);
  if(index===q.correct){button.classList.add('correct');$('quizFeedback').textContent='✅ '+q.note;$('quizFeedback').classList.add('good');state.points+=10;speak(q.answers[q.correct])}
  else{button.classList.add('wrong');buttons[q.correct].classList.add('correct');$('quizFeedback').textContent='Almost! Best reply: “'+q.answers[q.correct]+'”';$('quizFeedback').classList.add('bad')}
  saveState();renderStats();$('nextQuizBtn').classList.remove('hidden')
}
function renderRescue(){
  const wrap=$('rescueList');wrap.innerHTML='';rescue.forEach(([it,en])=>{const b=document.createElement('button');b.type='button';b.className='rescue';b.innerHTML=`<strong>${it}</strong><span>${en}</span>`;b.addEventListener('click',()=>speak(it));wrap.appendChild(b)})
}
function renderAll(){renderTabs();renderPhrase();renderStats();renderQuiz();renderRescue()}

$('hearBtn').addEventListener('click',()=>speak($('italianPhrase').textContent));
$('revealBtn').addEventListener('click',()=>{const hidden=$('meaningPanel').classList.toggle('hidden');$('revealBtn').textContent=hidden?'Reveal meaning':'Hide meaning'});
$('saidBtn').addEventListener('click',()=>{state.spoken++;if(state.mission<5){state.mission++;state.points+=5}saveState();renderStats()});
$('nextPhraseBtn').addEventListener('click',()=>{const n=lessons[state.category].items.length;state.phraseIndex=(state.phraseIndex+1)%n;saveState();renderPhrase()});
$('nextQuizBtn').addEventListener('click',()=>{state.quizIndex=(state.quizIndex+1)%quizzes.length;saveState();renderQuiz()});
$('resetBtn').addEventListener('click',()=>{if(confirm('Reset all progress?')){state={...defaultState,lastOpen:todayKey()};saveState();renderAll()}});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden')});
$('installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('installBtn').classList.add('hidden')});
window.addEventListener('appinstalled',()=>{$('installBtn').classList.add('hidden')});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}
updateStreak();renderAll();
