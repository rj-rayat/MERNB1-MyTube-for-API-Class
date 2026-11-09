const loadData = () =>{
    fetch("https://openapi.twoinsoft.com/videos")
    .then(res => res.json())
    .then(data => {
        const all = document.getElementById('all-btn');
        all.classList.add('active');
        const activeBtn = document.querySelectorAll('.category-btn')
        activeBtn.forEach(btn => {
            btn.classList.remove('active');
        })
        showHide('video-container')
        displayData(data)
    });
}

const loadSingleData = (id) =>{
    fetch(`https://openapi.twoinsoft.com/videos/${id}`)
    .then(res => res.json())
    .then(data => showDetails(data))
}
const loadCategories = () =>{
    fetch("https://openapi.twoinsoft.com/categories")
    .then(res => res.json())
    .then(data => showCategories(data))
}

const removeActive = ()=> {
    const all = document.getElementById('all-btn');
    all.classList.remove('active');
    const activeBtn = document.querySelectorAll('.category-btn')
    activeBtn.forEach(btn => {
        btn.classList.remove('active');
    })
}

const video_by_category = (id) =>{
    fetch(`https://openapi.twoinsoft.com/category/${id}`)
    .then(res => res.json())
    .then(data => {
        removeActive();
        const clickBtn = document.getElementById(`category-btn-${id}`)
        clickBtn.classList.add('active');
        displayData(data);
        showHide('video-container')
    } )
}


const watchLater = () =>{
    showHide('watch-later');
}

// {
//     "category_id": "1001",
//     "category_name": "Music",
//     "video_id": "vid013",
//     "thumbnail": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=85",
//     "title": "Acoustic Guitar Practice: 5 Easy Chord Changes",
//     "authors": [
//         {
//             "channel_id": "channel013",
//             "profile_picture": "https://i.pravatar.cc/120?img=13",
//             "profile_name": "Arif Mahbub",
//             "verified": true,
//             "subscribers": "103K"
//         }
//     ],
//     "others": {
//         "views": "92K",
//         "posted_date": "3437400",
//         "duration": "11:28",
//         "likes": "6.4K",
//         "comments": "231"
//     },
//     "description": "Practice five beginner chord transitions with a slow demonstration and a simple daily routine.",
//     "published_at": "2026-09-27T17:10:00Z",
//     "tags": [
//         "acoustic",
//         "tutorial",
//         "beginner"
//     ],
//     "language": "English",
//     "visibility": "public"
// }

const showDetails = (item) =>{
    console.log(item)
    const {
        thumbnail,
        title, 
        authors,
        others,
        description,
        published_at,
        tags,
        language,
        visibility
    } = item;
    const section = document.getElementById('details-page');
    
    section.innerHTML =`
        <!-- YouTube Single Video Details Container (Light Theme) -->
<div class="flex flex-col w-full max-w-4xl  gap-4 font-sans">
  
  <!-- Video Player / Main Thumbnail Box -->
  <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-md">
    <img 
      src="${thumbnail}" 
      alt="Video Thumbnail" 
      class="w-full h-full object-cover"
    />
    <!-- Duration Badge -->
    <span class="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded-md">
      ${others.duration}
    </span>
  </div>

  <!-- Video Title -->
  <h1 class="text-slate-900 font-bold text-xl md:text-2xl leading-snug">
    ${title}
  </h1>

  <!-- Author Info & Actions Bar -->
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-slate-200">
    
    <!-- Channel Profile & Subscribers -->
    <div class="flex items-center gap-3">
      <img 
        src="${authors[0].profile_picture}" 
        alt="Nusrat Jahan" 
        class="w-11 h-11 rounded-full object-cover shadow-sm"
      />
      <div>
        <div class="flex items-center gap-1.5">
          <h3 class="text-slate-900 font-semibold text-base">${authors[0].profile_name}</h3>
          <!-- Verified Badge -->
          <svg class="w-4 h-4 fill-slate-500" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <p class="text-slate-500 text-xs"> ${authors[0].subscribers} subscribers</p>
      </div>
      <!-- Subscribe Button -->
      <button class="ml-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
        Subscribe
      </button>
    </div>

    <!-- Actions (Likes, Views, Share etc.) -->
    <div class="flex items-center gap-2 flex-wrap">
      <!-- Like / Dislike Group -->
      <div class="flex items-center bg-slate-100 hover:bg-slate-200 rounded-full overflow-hidden text-slate-700 text-sm font-medium transition-colors">
        <button  class="flex items-center gap-2 px-4 py-2 border-r border-slate-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
          </svg>
          <span class="">
          ${others.likes}
               
     
          </span>

           

          
          
        </button>
        
        <button class="px-3 py-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.764.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2"></path>
          </svg>
        </button>
      </div>

      <!-- Share Button -->
      <button class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        </svg>
        <span>Share</span>
      </button>
    </div>

  </div>

  <!-- Description Box -->
  <div class="bg-slate-100 hover:bg-slate-200/70 transition-colors p-4 rounded-xl text-sm text-slate-800 flex flex-col gap-2 cursor-pointer">
    <div class="flex items-center gap-3 font-semibold text-slate-900 text-xs">
      <span>${others.views} views</span>
      <span>Published: ${published_at}</span>
    </div>
    <p class="leading-relaxed">
      ${description}
    </p>
    <div class="flex gap-2 mt-1 flex-wrap" id="taglist">
      
    </div>
  </div>

</div>
    `
    
    
}

const showHide = (id) =>
{
    document.getElementById('video-container').classList.add('hidden')
    document.getElementById('details-page').classList.add('hidden')
    document.getElementById('watch-later').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
    console.log(id)
    
}
const displayData = (items) =>{
        const container = document.getElementById('video-container');
        const h1 = document.createElement('h1');
        h1.innerText = "Item not found"
        container.innerHTML = "";

        items.length == 0 ? container.appendChild(h1) :
        
         items.map(element => {
            
             const {
                thumbnail, 
                others,
                authors,
                title,
                category_id,
                video_id,
            
            } = element;
            const div = document.createElement('div');
            
            div.addEventListener('click', ()=>{
                loadSingleData(video_id)
                showHide('details-page')

            })
            

            div.innerHTML = `
                <!-- YouTube Video Card Container (Light Theme) -->
                <div class="flex flex-col gap-3 w-100 cursor-pointer group py-5 " >
                
                <!-- Thumbnail Wrapper -->
                <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100">
                    <img 
                    src="${thumbnail}" 
                    alt="Thumbnail" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <!-- Duration Badge -->
                    <span class="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded-md">
                    ${others.duration}
                    </span>
                </div>

                <!-- Video Details Section -->
                <div class="flex gap-3 items-start">
                    <!-- Channel Profile Picture -->
                    <div class="flex-shrink-0">
                    <img 
                        src="${authors[0].profile_picture}" 
                        alt="Channel Avatar" 
                        class="w-9 h-9 rounded-full object-cover"
                    />
                    </div>

                    <!-- Meta Information -->
                    <div class="flex flex-col flex-1">
                    <!-- Title -->
                    <h3 class="text-slate-900 font-medium text-sm line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                        ${title}
                    </h3>

                    <!-- Channel Name & Verified Badge -->
                    <div class="flex items-center gap-1 mt-1 text-slate-600 text-xs">
                        <span>${authors[0].profile_name}</span>
                        <!-- Verified Checkmark Icon -->
                        

                        ${
                            authors[0].verified ? '<i class="fa-solid fa-circle-check text-blue-500"></i>' : ""
                        }
                    </div>

                    <!-- Views & Time -->
                    <div class="flex items-center gap-2 text-slate-600 text-xs mt-0.5">
                        <span>${others.views} views</span>
                        <span>•</span>
                        <span>${others.posted_date} ago</span>
                    </div>
                    </div>

                    <!-- Options / Three Dots Icon -->
                    <div class="text-slate-600 hover:text-slate-900 dropdown dropdown-top">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>

                    
                    </div>
                </div>

                </div>
            `

            container.appendChild(div);
        });   
}

const showCategories = (categories)=>{
   
    const container = document.getElementById('category-container');
    categories.map(element => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div id="category-btn-${element.category_id}" onclick="video_by_category(${element.category_id})"  class="btn category-btn btn-sm rounded-xl bg-base-200">${element.category}</div>
        `
        container.appendChild(li);
    })
}

// const displayChannels = (channels) =>{
    
//     const container = document.getElementById('channel-box');
//     container.innerHTML = "";
//     channels.map(item => {
//         const {profile_name, profile_picture} = item.authors[0]
//         console.log(item)
//         const li = document.createElement('li')
//         li.innerHTML = 
//         `<div class="h-10 pl-2.5 flex items-center gap-5 rounded-xl  hover:bg-base-200 cursor-pointer"><img class="h-7 w-8=7 rounded-full" src="${profile_picture}" alt=""> ${profile_name} </div>
//         `
//         container.appendChild(li);
//     })
    

    
// }
loadData();
loadCategories();


