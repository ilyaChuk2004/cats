
export function waterControl(app, store) {
    app.on('e-goal', (s) => {     ///увеличение стрика
        if (s == "-") {
            store.state.userData.water.streak = store.state.userData.water.yesterdayStreak
            app.emit('e-changeLvl', store.state.appData.xpFromWaterStreak*-1)
        } else {
            store.state.userData.water.streak = store.state.userData.water.yesterdayStreak + 1
            app.emit('e-changeLvl', store.state.appData.xpFromWaterStreak)
        }
        app.emit('e-waterPageChange', '-')
    })
    

    setInterval(() => {
        if (new Date().getDate() !== store.state.userData.water.lastUpdate) {
            

            if (store.state.userData.water.todayMl<store.state.userData.water.goal ||
                new Date().getDate()-1 !== store.state.userData.water.lastUpdate && new Date().getDate()!==1) {
                store.state.userData.water.streak=0
            }
            store.state.userData.water.yesterdayStreak=store.state.userData.water.streak

            store.state.userData.water.lastUpdate=new Date().getDate()

            store.state.userData.water.todayMl=0

            app.emit('e-waterChange')
            app.emit('e-waterPageChange', '-')
            
            app.emit('e-backp') 
        }
    }, 1000);






}