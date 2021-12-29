// Recipe for doubling Ancient Debris to Netherite Scrap
onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('2x minecraft:netherite_scrap'), [
        'minecraft:ancient_debris'
    ]).superheated()
  })
  