
export function globalEvents(app, store, $) {

    //возвращение назад при повтором нажатии на таб
    $(document).on('click', '.tab-link', (e) => {                     
        if (app.view.current.index == store.state.appData.view) {
            app.views[app.view.current.index].router.back()

        }
        store.state.appData.view = app.view.current.index
    })


    //эффект при зажатии
    $(document).on('taphold', '.holdEv', function (ev) {
        let el = ev.target
        el.style.transform = 'translateX(-10px)'
        setTimeout(() => {
            el.style.transform = 'translateX(10px)'
        }, 50);
        setTimeout(() => {
            el.style.transform = 'translateX(0px)'
        }, 100);
    });

    //отменяет перетаскивание мышкой ссылок и картинок
    $(document).on("dragstart", 'img, a', function (event) { event.preventDefault(); });


    if (store.state.appData.desktop) {
        app.on('e-appMount', () => {
            
            if (document.querySelector('.menu').offsetWidth > 400) {
                setTimeout(() => {
                    app.emit('e-appMount')
                }, 5);
            }else{
                console.log(document.querySelector('.menu').offsetWidth);
                document.getElementById('appCss97').innerHTML = `
                <style>
                .page-content{
                padding-left:${document.querySelector('.menu').offsetWidth}px
                }
                </style>`
            }
        })
    }

}