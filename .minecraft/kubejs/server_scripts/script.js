// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    // Add shaped recipe for chests
    event.shaped('4x minecraft:chest', [
        'WWW',
        'W W',
        'WWW'
    ], {
        W: '#minecraft:logs'
    })

    // Add shapeless recipe for Create Potato book
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:potato"}'), ['minecraft:book', 'minecraft:potato'])

    // Add shapeless recipe for making sticks from logs
    event.shapeless('16x minecraft:stick', [
        '#minecraft:logs', '#minecraft:logs'
    ])

    // Add shapeless recipe for oak slab to oak planks
    event.shapeless('minecraft:oak_planks', ['minecraft:oak_slab', 'minecraft:oak_slab'])

    // Add shapeless recipe for cobblestone slabs to cobblestone
    event.shapeless('minecraft:cobblestone', ['minecraft:cobblestone_slab', 'minecraft:cobblestone_slab'])    

})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})