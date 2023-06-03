// self.addEventListener('install', (event)=>{
//     console.log('install');
// });

// self.addEventListener('activate', (event)=>{
//     console.log('activate');
// })

// self.addEventListener('fetch',(event)=>{
    
// });

// self.addEventListener('push',(event)=>{
//     console.log('push', event)
// })

const STATIC_CACHE_NAME = 'static-file-v-1';
const DINAMIC_CACHES_NAME = 'dinamic-cache-name';
const ASSET_URLS = [
    //  '/',
    //  '/catalog',
    // '/wishlist',
    // '/offline.html',
    // '/favicon.ico ',
    // '/catalog?is_in_stock=true&page=1',
    // '/catalog?is_new=true&page=1',
    // '/catalog?is_bestseller=true&page=1',
    // '/catalog?is_closeout=true&page=1',
    // '/cart',
    // '/profile',
    // '/orders',
    // '/notifications',
    // '/balance',
    // '/my_reviews',
    // '/about',
    // '/news',
    // '/for_partners',
    // '/information/juridical',
    // '/information/delivery',
    // '/information/exchange',
    // '/information/payment',
    // '/information/how_to',
    // '/information/reviews',
    // '/contacts',
    // '/static/media/arrowTopNoFill.74f69abe.svg',
    // '/static/media/delivery.2ad05e5a.svg',
    // '/static/media/feedback.e4a6096f.svg',
]

self.addEventListener('install', async ()=>{
    try{
        const cache = await caches.open(STATIC_CACHE_NAME);
        await cache.addAll(ASSET_URLS);
    }catch(err){
        console.log('Error: ', err)
    }
})

self.addEventListener('activate', async (event)=>{
// чистим хранилище от старого кэша
const cacheNames = await caches.keys();
// подождём пока выполнится промис
// через метод All мы передаём массив промисов и ждём пока они все выполняться
// удаляем все кэши кроме статических
await Promise.all(
   cacheNames
       .filter(name=>name !== STATIC_CACHE_NAME)
       .filter(name=>name !== DINAMIC_CACHES_NAME)
       .map(name=>caches.delete(name))
)
    //включает сервис вокер на сайте немедленно
    self.clients.claim()
})

self.addEventListener('fetch', async (event)=>{
    
    const {request} = event;
    // console.log('--------------event =', request)
    const url = new URL(request.url);
    if(request.method === 'GET'){
        // console.log('--------------url =', url.pathname.split('.').pop())
        if( url.pathname.split('.').pop() === 'woff2' || url.pathname.split('.').pop() === 'woff' || url.pathname.split('.').pop() === 'svg' || 
        url.pathname.split('.').pop() === 'png' || url.pathname.split('.').pop() === 'gif' || url.pathname.split('.').pop() === 'ico' || 
        url.pathname.split('.').pop() === 'jpeg' || url.pathname.split('.').pop() === 'jpg' 
        // || url.pathname.split('.').pop() === 'js' 
        ){
            event.respondWith(cacheFirst(request));
        }
    }
    // console.log('--------------url =', url)
    // console.log('-------origin url =', location.origin)
    if(url.origin === location.origin){
    //    event.respondWith(cacheFirst(request));
    }else{
    //   event.respondWith(networkFirst(request));
    }
})

async function cacheFirst(request){
    try{
        const cached = await caches.match(request);
        // ?? - иначе
        return cached ?? await networkFirst(request)
    }catch(err){console.log('Erroe: ',err)};
}

async function networkFirst(request){
    const cache = await caches.open(DINAMIC_CACHES_NAME)

    try{ 
        const response = await fetch(request)
        // мы заносим данные в кэш которые получили с response, через метод put, клонируя данные
        if(request.method !== "POST" && request.method !== "DELETE" ) await cache.put(request, response.clone())
        return response
    }
    catch(err){
        // если у нас не получается получить данные с сети то получаем их с кэша
        if(request.method !== "POST" && request.method !== "DELETE"){
            const cached = await cache.match(request);
            return cached ?? await caches.match('/offline.html');
        }else{
            return await fetch(request);
        }
    }
}


self.addEventListener('push', (event)=>{

  const deleteTag = (data) => data.replace(/<a.*?>|<\/a>/isg,'');

        let title = "Fashion Town";
        let message = 'Good day for purchase';
        let message_tag = "";

        try {
                // Push is a JSON                
                const response_json = event.data.json();//JSON.parse(event.data);//
                 title = response_json.title || title;
                 message = deleteTag(response_json.body);
                 message_tag = response_json.tag || message_tag;
                 url = response_json.url !== '#' ? response_json.url : 'https://ftownpl.com/notifications'
        } catch (err) {
                // Push is a simple text
                const response_text = event.data.text();//JSON.parse(event.data);//
                 message = deleteTag(event.data.text());
        }


        const options = {
                    body: message,
                    icon: './favicon.ico',
                    vibrate: [200, 100, 200,200, 100, 80,200, 100, 50,200, 100, 200],
                    image: './icon-512x512.png',
                };



                    event.waitUntil(            
                        self.clients.matchAll().then(async (clientList) => {
                            if (clientList.length > 0) {
                                for(let j = 0; j < clientList.length; j++){
                                    let res = clientList[j].visibilityState;
                                    if (res === "visible") {//focused: true
                                        const client = await clientList[j]
                                        const idClient = await clientList[j].id
                                        if (!client) return
                                        client.postMessage({
                                            notification: options,
                                        })
                                        console.log('client list > 0 and browser active this good!!! ')
                                    } else {        
                                        console.log('client list > 0 and browser no active ')
                                        return event.waitUntil(self.registration.showNotification(title, options));           
                                    }
                                }
                            }else{
                                return self.registration.showNotification(title, options);
                            }
                        })
                    );


})


self.addEventListener('notificationclick', (event) => {
    // Android doesn't close the notification when you click on it  
    // See: http://crbug.com/463146  
    try{
    event.notification.close();
  
    var targetUrl = 'https://ftownpl.com/';
    if (event.action) {
        targetUrl += event.action;
    }else{
        targetUrl += 'notifications';
    }
  
    // if custom action
    if (event.action && self.notificationActions && self.notificationActions.hasOwnProperty(event.action)) {
      event.waitUntil(
        Promise.all([
          fetch(targetUrl, { headers: new Headers({'Accept': 'application/json'}) }),
          self.notificationActions[event.action](event.notification.data.custom)
            .catch(function(err) {
              console.log('A custom action has been invoked but it has raised an exception: ' + err);
            })
        ])
      );
    // else open target url
    } else {
      event.waitUntil(
        clients.openWindow(targetUrl)
      );
    }
    }catch(err){
        throw new Error('Error click on message');
        console.log('err message', err.message)
    }
  });