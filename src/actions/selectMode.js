export const selectMode = (mode) => {
    console.log("Selected:", mode)

    return {
        type: "MODE_SELECTED",
        payload: mode,
    }
}
