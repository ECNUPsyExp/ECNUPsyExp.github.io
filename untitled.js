/***************** 
 * Untitled *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcome_sentenceRoutineBegin());
flowScheduler.add(welcome_sentenceRoutineEachFrame());
flowScheduler.add(welcome_sentenceRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcome_sentenceClock;
var welcome;
var key_resp;
var trialClock;
var fix;
var pre;
var cue;
var margin;
var square;
var reponse_time;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome_sentence"
  welcome_sentenceClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: '欢迎参加！本实验（实验一）中您的的任务如下：\n\n当您看到【+】符号时，请集中注意力\n随后屏幕中央会呈现一个带有颜色的方块\n然后会随机呈现红或蓝色方块\n\n接着第一次方块再次出现\n\n随后随机出现红或蓝色方块\n\n此时请立刻根据最后呈现的颜色作出反应\n\n如果您看到的是红色方块，\n请按下【←】键（方向左键）\n如果您看到的是蓝色方块，\n请按下【→】键（方向右键）\n如果您没有看到红或蓝方块，\n请不要按任何键\n\n请确保您已理解以上内容\n按下【空格】键后实验将正式开始',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  pre = new visual.Rect ({
    win: psychoJS.window, name: 'pre', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.7255, (- 0.8431), (- 0.5294)]),
    fillColor: new util.Color([0.7255, (- 0.8431), (- 0.5294)]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  cue = new visual.Rect ({
    win: psychoJS.window, name: 'cue', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  margin = new visual.Rect ({
    win: psychoJS.window, name: 'margin', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.7255, (- 0.8431), (- 0.5294)]),
    fillColor: new util.Color([0.7255, (- 0.8431), (- 0.5294)]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  square = new visual.Rect ({
    win: psychoJS.window, name: 'square', 
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  reponse_time = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var welcome_sentenceComponents;
function welcome_sentenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_sentence' ---
    t = 0;
    welcome_sentenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcome_sentence.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    welcome_sentenceComponents = [];
    welcome_sentenceComponents.push(welcome);
    welcome_sentenceComponents.push(key_resp);
    
    for (const thisComponent of welcome_sentenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcome_sentenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_sentence' ---
    // get current time
    t = welcome_sentenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcome_sentenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_sentenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_sentence' ---
    for (const thisComponent of welcome_sentenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome_sentence.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "welcome_sentence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _reponse_time_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    cue.setFillColor(new util.Color(cue_color));
    cue.setLineColor(new util.Color(cue_color));
    square.setFillColor(new util.Color(square_color));
    square.setLineColor(new util.Color(square_color));
    reponse_time.keys = undefined;
    reponse_time.rt = undefined;
    _reponse_time_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fix);
    trialComponents.push(pre);
    trialComponents.push(cue);
    trialComponents.push(margin);
    trialComponents.push(square);
    trialComponents.push(reponse_time);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    
    // *pre* updates
    if (t >= 0.5 && pre.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pre.tStart = t;  // (not accounting for frame time here)
      pre.frameNStart = frameN;  // exact frame index
      
      pre.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pre.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pre.setAutoDraw(false);
    }
    
    // *cue* updates
    if (t >= 1 && cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue.tStart = t;  // (not accounting for frame time here)
      cue.frameNStart = frameN;  // exact frame index
      
      cue.setAutoDraw(true);
    }
    
    frameRemains = 1 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue.setAutoDraw(false);
    }
    
    // *margin* updates
    if (t >= 1.9 && margin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      margin.tStart = t;  // (not accounting for frame time here)
      margin.frameNStart = frameN;  // exact frame index
      
      margin.setAutoDraw(true);
    }
    
    frameRemains = 1.9 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (margin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      margin.setAutoDraw(false);
    }
    
    // *square* updates
    if (t >= 2.8 && square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square.tStart = t;  // (not accounting for frame time here)
      square.frameNStart = frameN;  // exact frame index
      
      square.setAutoDraw(true);
    }
    
    frameRemains = 2.8 + appearance_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (square.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square.setAutoDraw(false);
    }
    
    // *reponse_time* updates
    if (t >= 2.8 && reponse_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reponse_time.tStart = t;  // (not accounting for frame time here)
      reponse_time.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reponse_time.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reponse_time.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reponse_time.clearEvents(); });
    }
    
    frameRemains = 2.8 + appearance_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reponse_time.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reponse_time.status = PsychoJS.Status.FINISHED;
        }
      
    if (reponse_time.status === PsychoJS.Status.STARTED) {
      let theseKeys = reponse_time.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _reponse_time_allKeys = _reponse_time_allKeys.concat(theseKeys);
      if (_reponse_time_allKeys.length > 0) {
        reponse_time.keys = _reponse_time_allKeys[_reponse_time_allKeys.length - 1].name;  // just the last key pressed
        reponse_time.rt = _reponse_time_allKeys[_reponse_time_allKeys.length - 1].rt;
        reponse_time.duration = _reponse_time_allKeys[_reponse_time_allKeys.length - 1].duration;
        // was this correct?
        if (reponse_time.keys == 'corrAns') {
            reponse_time.corr = 1;
        } else {
            reponse_time.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (reponse_time.keys === undefined) {
      if (['None','none',undefined].includes('corrAns')) {
         reponse_time.corr = 1;  // correct non-response
      } else {
         reponse_time.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(reponse_time.corr, level);
    }
    psychoJS.experiment.addData('reponse_time.keys', reponse_time.keys);
    psychoJS.experiment.addData('reponse_time.corr', reponse_time.corr);
    if (typeof reponse_time.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('reponse_time.rt', reponse_time.rt);
        psychoJS.experiment.addData('reponse_time.duration', reponse_time.duration);
        routineTimer.reset();
        }
    
    reponse_time.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
