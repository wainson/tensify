// Last element - past participle
// Last - 1 element - past simple
// All elements before are present
var irregular_verbs = [
	['am', 'was', 'been'],
	['are', 'were', 'been'],
	['awake', 'awoke', 'awoken'],
	['bear', 'bore', 'born'],
	['beat', 'beat', 'beat'],
	['become', 'became', 'become'],
	['begin', 'began', 'begun'],
	['bend', 'bent', 'bent'],
	['beset', 'beset', 'beset'],
	['bet', 'bet', 'bet'],
	['bid', 'bid', 'bid'],
	['bind', 'bound', 'bound'],
	['bite', 'bit', 'bitten'],
	['bleed', 'bled', 'bled'],
	['blow', 'blew', 'blown'],
	['break', 'broke', 'broken'],
	['breed', 'bred', 'bred'],
	['bring', 'brought', 'brought'],
	['broadcast', 'broadcast', 'broadcast'],
	['build', 'built', 'built'],
	['burn', 'burned', 'burned'],
	['burst', 'burst', 'burst'],
	['buy', 'bought', 'bought'],
	['cast', 'cast', 'cast'],
	['catch', 'caught', 'caught'],
	['choose', 'chose', 'chosen'],
	['cling', 'clung', 'clung'],
	['come', 'came', 'come'],
	['cost', 'cost', 'cost'],
	['creep', 'crept', 'crept'],
	['cut', 'cut', 'cut'],
	['deal', 'dealt', 'dealt'],
	['dig', 'dug', 'dug'],
	['dive', 'dove', 'dived'],
	['do', 'did', 'done'],
	['draw', 'drew', 'drawn'],
	['dream', 'dreamed', 'dreamed'],
	['drive', 'drove', 'driven'],
	['drink', 'drank', 'drunk'],
	['eat', 'ate', 'eaten'],
	['fall', 'fell', 'fallen'],
	['feed', 'fed', 'fed'],
	['feel', 'felt', 'felt'],
	['fight', 'fought', 'fought'],
	['find', 'found', 'found'],
	['fit', 'fit', 'fit'],
	['flee', 'fled', 'fled'],
	['fling', 'flung', 'flung'],
	['fly', 'flew', 'flown'],
	['forbid', 'forbade', 'forbidden'],
	['forget', 'forgot', 'forgotten'],
	['forego', 'forewent', 'foregone'],
	['forgo', 'forwent', 'forgone'],
	['forgive', 'forgave', 'forgiven'],
	['forsake', 'forsook', 'forsaken'],
	['freeze', 'froze', 'frozen'],
	['get', 'got', 'gotten'],
	['give', 'gave', 'given'],
	['go', 'went', 'gone'],
	['grind', 'ground', 'ground'],
	['grow', 'grew', 'grown'],
	['hang', 'hung', 'hung'],
	['hear', 'heard', 'heard'],
	['hide', 'hid', 'hidden'],
	['hit', 'hit', 'hit'],
	['hold', 'held', 'held'],
	['hurt', 'hurt', 'hurt'],
	['is', 'was', 'been'],
	['keep', 'kept', 'kept'],
	['kneel', 'knelt', 'knelt'],
	['knit', 'knit', 'knit'],
	['know', 'knew', 'known'],
	['lay', 'laid', 'laid'],
	['lead', 'led', 'led'],
	['leap', 'leaped', 'leaped'],
	['learn', 'learned', 'learned'],
	['leave', 'left', 'left'],
	['lend', 'lent', 'lent'],
	['let', 'let', 'let'],
	['lie', 'lay', 'lain'],
	['light', 'lit', 'lighted'],
	['lose', 'lost', 'lost'],
	['make', 'made', 'made'],
	['mean', 'meant', 'meant'],
	['meet', 'met', 'met'],
	['misspell', 'misspelled', 'misspelled'],
	['mistake', 'mistook', 'mistaken'],
	['mow', 'mowed', 'mowed'],
	['overcome', 'overcame', 'overcome'],
	['overdo', 'overdid', 'overdone'],
	['overtake', 'overtook', 'overtaken'],
	['overthrow', 'overthrew', 'overthrown'],
	['pay', 'paid', 'paid'],
	['plead', 'pled', 'pled'],
	['prove', 'proved', 'proved'],
	['put', 'put', 'put'],
	['quit', 'quit', 'quit'],
	['read', 'read', 'read'],
	['reset', 'reset', 'reset'],
	['rid', 'rid', 'rid'],
	['ride', 'rode', 'ridden'],
	['ring', 'rang', 'rung'],
	['rise', 'rose', 'risen'],
	['run', 'ran', 'run'],
	['saw', 'sawed', 'sawed'],
	['say', 'said', 'said'],
	['see', 'saw', 'seen'],
	['seek', 'sought', 'sought'],
	['sell', 'sold', 'sold'],
	['send', 'sent', 'sent'],
	['set', 'set', 'set'],
	['sew', 'sewed', 'sewed'],
	['shake', 'shook', 'shaken'],
	['shave', 'shaved', 'shaved'],
	['shear', 'shore', 'shorn'],
	['shed', 'shed', 'shed'],
	['shine', 'shone', 'shone'],
	['shoe', 'shoed', 'shoed'],
	['shoot', 'shot', 'shot'],
	['show', 'showed', 'showed'],
	['shrink', 'shrank', 'shrunk'],
	['shut', 'shut', 'shut'],
	['sing', 'sang', 'sung'],
	['sink', 'sank', 'sunk'],
	['sit', 'sat', 'sat'],
	['sleep', 'slept', 'slept'],
	['slay', 'slew', 'slain'],
	['slide', 'slid', 'slid'],
	['sling', 'slung', 'slung'],
	['slit', 'slit', 'slit'],
	['smite', 'smote', 'smitten'],
	['sow', 'sowed', 'sowed'],
	['speak', 'spoke', 'spoken'],
	['speed', 'sped', 'sped'],
	['spend', 'spent', 'spent'],
	['spill', 'spilled', 'spilled'],
	['spin', 'spun', 'spun'],
	['spit', 'spit', 'spit'],
	['split', 'split', 'split'],
	['spread', 'spread', 'spread'],
	['spring', 'sprang', 'sprung'],
	['stand', 'stood', 'stood'],
	['steal', 'stole', 'stolen'],
	['stick', 'stuck', 'stuck'],
	['sting', 'stung', 'stung'],
	['stink', 'stank', 'stunk'],
	['stride', 'strod', 'stridden'],
	['strike', 'struck', 'struck'],
	['string', 'strung', 'strung'],
	['strive', 'strove', 'striven'],
	['swear', 'swore', 'sworn'],
	['sweep', 'swept', 'swept'],
	['swell', 'swelled', 'swelled '],
	['swim', 'swam', 'swum'],
	['swing', 'swung', 'swung'],
	['take', 'took', 'taken'],
	['teach', 'taught', 'taught'],
	['tear', 'tore', 'torn'],
	['tell', 'told', 'told'],
	['think', 'thought', 'thought'],
	['thrive', 'thrived', 'thrived'],
	['throw', 'threw', 'thrown'],
	['thrust', 'thrust', 'thrust'],
	['tread', 'trod', 'trodden'],
	['understand', 'understood', 'understood'],
	['uphold', 'upheld', 'upheld'],
	['upset', 'upset', 'upset'],
	['wake', 'woke', 'woken'],
	['wear', 'wore', 'worn'],
	['weave', 'wove', 'woven'],
	['wed', 'wed', 'wed'],
	['weep', 'wept', 'wept'],
	['wind', 'wound', 'wound'],
	['win', 'won', 'won'],
	['withhold', 'withheld', 'withheld'],
	['withstand', 'withstood', 'withstood'],
	['wring', 'wrung', 'wrung'],
	['write', 'wrote', 'written']
];

// Returns array [past_simple, past_participle]
var find = function(verb) {
	for (var i in irregular_verbs) {
		if (irregular_verbs[i].indexOf(verb) !== -1) {
			return irregular_verbs[i].slice(-2);
		}
	}

	return false;
};

module.exports = find;
