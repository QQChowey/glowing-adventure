export const selectMonster = (monster) => {
    console.log("Clicked on:", monster.id, monster.name)

    return {
        type: "MONSTER_SELECTED",
        payload: monster,
    }
}
