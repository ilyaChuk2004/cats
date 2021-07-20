
export function waterControl(app, store) {
    app.on('e-goal', (s) => {     ///увеличение стрика
        if (s == "-") {
            store.state.userData.water.streak = store.state.userData.water.streak - 1
        } else {
            store.state.userData.water.streak = store.state.userData.water.streak + 1
        }
        app.emit('e-waterPageChange')
    })
    

    setInterval(() => {
        if (new Date().getDate() !== store.state.userData.water.lastUpdate) {
            store.state.userData.water.lastUpdate=new Date().getDate()
            console.log('updDay');

            if (store.state.userData.water.todayMl<store.state.userData.water.goal) {
                store.state.userData.water.streak=0
                debugger
            }

            store.state.userData.water.todayMl=0

            app.emit('e-waterChange')
            app.emit('e-waterPageChange')
            
            app.emit('e-backp') 
        }
    }, 1000);






}