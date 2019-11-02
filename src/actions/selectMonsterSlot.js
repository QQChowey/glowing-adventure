export const selectMonsterSlot = (monster) => {
    console.log("Clicked on:", monster.card_id, monster.name)

    return {
        type: "MONSTER_SELECTED",
        payload: monster,
    }
}
