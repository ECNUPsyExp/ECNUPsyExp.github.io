05/09/22 DF: 
**Moral Sentiment and Action Tendencies (MSAT) task**
Text-based version of the Moral Sentiment and Action Tendencies (MSAT) task, optimised as part of the Antidepressant Advisor Study. 
Funded by the MRC (ref 2064430). Accompanying paper Duan et al: doi: 10.1101/2022.03.17.22272498.

--PLEASE NOTE THAT THIS VERSION HAS MODIFIED CODE COMPARED TO THE VERSION USED BY DUAN
* the Duan et al version did NOT contain anger/indignation towards self or verbally/physically attacking yourself

--
Description MSAT:
The MSAT was based on the value-related moral sentiment task (VMST), which has been validated in previous studies (Green et al., 2012; Green et al., 2013; Zahn et al., 2007; Zahn et al., 2009; Zahn et al., 2015).
The task investigates the neurocognitive underpinnings of blame-related emotions, presenting short written statement describing hypothetical social behaviours, in which either the participant (self-agency) or their best friend (other-agency) acts counter to social and moral values.

--
This optimised version consists of 54 short written statements. To personalise the statements, participants are asked to name their best friend in the initial set-up.
The following data is collected:

* closeness to friend
Participants rate how close they feel to their best friend on a 7-point visual analogue scale, where 1 = not at all close and 7 = extremely close.

* moral sentiment
Participants are asked to select the emotion that best describes how they would feel given the unpleasant hypothetical situation: guilt, shame, indignation/anger towards self, contempt/disgust towards self, contempt/disgust towards friend, indignation/anger towards friend, or no feeling/other feeling.

* action tendency
Participants are also asked to select the action that they would most strongly feel like doing in the unpleasant hypothetical situation: creating distance from self, verbally or physically attacking/punishing yourself, hiding, apologising, creating distance from friend, verbally or physically attacking/punishing friend, or no action/other action.

* blame attribution
Participants are asked to indicate how strongly they would blame themselves and how strongly they would blame thier friend for the imagined behaviour using a 7-point visual analogue scale, where 1 = not at all and 7 = very much.

--
Description files:
* MSAT_instructions_pavlovia_v2.doc 
Instructions for participants, explaining the task

Under "html":
* index.html
Initialising file for HTML

* msat_sussex.js
Modified Pavlovia code as used in Duan et al. (doi: 10.1101/2022.03.17.22272498)

* msat_sussex-legacy-browsers.js
Modified Pavlovia code to accommodate older browsers

Under "html/resources":
* MSAT_conditions.xls
Experimental design MSAT, called upon by the code to initialise the task