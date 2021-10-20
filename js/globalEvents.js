import lottie from 'lottie-web'
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
        el.style.transform = 'translateX(-4px)'
        setTimeout(() => {
            el.style.transform = 'translateX(4px)'
        }, 70);
        setTimeout(() => {
            el.style.transform = ''
        }, 140);
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

    app.on('e-updColors', (col, colRgb)=>{
        document.getElementById('appCss97Color').innerHTML = `
        <style>
                :root {
                  --f7-theme-color: ${col};
                  --f7-theme-color-rgb: ${colRgb};
                  --f7-theme-color-shade: ${col};
                  --f7-theme-color-tint: ${col};
                }
                </style>`
    })


    app.on('e-writeMood', (mood)=>{

        console.log('here');
        let toast = app.toast.create({
            icon: '<div id="thumbAni"></div>',
            text: 'Настроение записано',
            position: 'center',
            horizontalPosition: 'center',
            closeTimeout: 2000
          })
        
          
        
          
        
              // animation.play()
              // animation.pause()
        
          if (store.state.appData.thumbAniTime+2300<+new Date) {
            toast.open()
        
            let animation = lottie.loadAnimation({
                container: document.querySelector('#thumbAni'), // Required
                path: 'static/thumb.json', // Required
                renderer: 'svg', // Required
                loop: false,
                autoplay: true, // Optional
              })
        
              store.state.appData.thumbAniTime=+new Date
          }
          
          store.state.gf.vibrate('big success')
        
          store.state.userData.teach.doubleClickEmoji=true
        
          if(store.state.userData.mood.lastMoodWrite !== new Date().getDate()){
            app.emit('e-changeLvl', 100)

            store.state.userData.mood.days.push(
              {
                date:+new Date,
                moods:[{
                  ...mood,
                  time:+new Date
                }
                ]
              }
            )

            store.state.userData.mood.lastMoodWrite=new Date().getDate()
            app.emit('e-backp')
          }else{
            store.state.userData.mood.days[store.state.userData.mood.days.length-1].moods.push(
              {
                ...mood,
                  time:+new Date
              }
            )
          }
          app.emit('e-backp')
        
          app.emit('e-moodWrited')
        })

}