// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

// console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

// Listen to player login event
onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  event.player.give('minecraft:stone_sword')
	  event.player.give('minecraft:stone_pickaxe')
	  event.player.give('minecraft:stone_axe')
	  event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:potato"}'))
	  event.player.give('30x minecraft:apple')
	}
  })