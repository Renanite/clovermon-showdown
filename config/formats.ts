// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Clovermon Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Clover Only Singles",
	},
	{
		name: "[Gen 8 Clover Only] Random Battle",
		mod: 'clover',
		team: 'random',
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: '[Gen 8 Clover Only] Ultimate Blobbos Metronome Showdown DX',
		mod: 'clover',
		team: 'randomBlobbosMetronome',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8 Clover Only] OU",
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: "[Gen 8 Clover Only] Ubers",
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 8 Clover Only] UU",
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] OU'],
		banlist: ['OU'],
	},
	{
		name: "[Gen 8 Clover Only] RU",
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] UU'],
		banlist: ['UU'],
	},
	{
		name: "[Gen 8 Clover Only] LC",
		mod: 'clover',
		ruleset: [
			'Little Cup',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: [
			'Moody', 'Baton Pass', 'Dragon Rage', 'Sonic Boom',
			'Wedgard', 'Chompest', 'Masdawg', 'Flowre', 'Charagon', 'Ayylamo', 'Ninoop', 'Embortion', 'Nutjobber',
		],
	},
	{
		name: "[Gen 8 Clover Only] Monotype",
		mod: 'clover',
		ruleset: [
			'Same Type Clause',
			'Standard NatDex',
			'Dynamax Clause',
			'Sleep Clause Mod',
			'Evasion Moves Clause',
			'Species Clause',
			'OHKO Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		name: "[Gen 8 Clover Only] Anything Goes",
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Clover Only',
			'Blobbos Clause',
		],
	},
	{
		name: "[Gen 8 Clover Only] CAP",
		rated: false,
		mod: 'clover',
		ruleset: ['[Gen 8 Clover Only] OU', '+CAP'],
	},
	{
		name: "[Gen 8 Clover Only] Balanced Hackmons",
		mod: 'clover',
		ruleset: ['Clover Only', '-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash', 'Toke', 'Adesign', 'Any Ability',
		],
	},
	{
		section: "Clover Only Doubles",
	},
	{
		name: "[Gen 8 Clover Only] Doubles OU",
		mod: 'clover',
		gameType: 'doubles',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Species Clause',
			'OHKO Clause',
			'Swagger Clause',
			'Gravity Sleep Clause',
			'Evasion Moves Clause',
			'Clover Only',
			'Blobbos Clause',
		],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Wonder Guard'],
	},
	{
		section: "Clover National Dex Singles",
	},
	{
		name: "[Gen 8 Clover National Dex] AG",
		mod: 'clover',
		ruleset: [
			'Standard NatDex',
			'Originality Clause',
		],
	},
	{
		section: 'Atlas Only Singles',
	},
	{
		name: "[Gen 8 Atlas Only] Anything Goes",
		mod: 'atlas',
		ruleset: [
			'Standard NatDex',
			'Dynamax Clause',
			'Atlas Only',
		],
	},
];
