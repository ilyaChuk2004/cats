
export function dataControl(app, store) {
    if (localStorage.userData !== undefined && localStorage.userData !== '') {
        store.state.userData=JSON.parse(localStorage.userData)
        console.log('loaded');  
    }

    app.on('e-backp', ()=>{
        localStorage.userData=JSON.stringify(store.state.userData)
    console.log('saved');
    
    })
  }