    // JavaScript code to fetch and display video links
    fetch('/class11/videos.json')
      .then(response => response.json())
      .then(data => {
        const videoListContainer = document.getElementById('videoList');
        let html = '';
        data.sort(function(a,b){return new Date(b.date) - new Date(a.date);});
        // Iterate through the video data
        data.forEach(video => {  
          // Generate HTML for each video link
          html += `
            <div>
              <h3>${video.title}</h3>
              <p>Date: ${video.date}</p>
              <p>Chapter: ${video.chapter}</p>
              <a href="${video.link}">Watch Video</a>
            </div>
          `;
        });

        // Insert the generated HTML into the container element
        videoListContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });




// FUNCTION FOR SORT
const dropdown = document.getElementById('dropdown');

function dropdownSort() {
    fetch('/class11/videos.json')
    .then(response => response.json())
    .then(data => {
      const videoListContainer = document.getElementById('videoList');
      var chiki = [];
      let html = '';
      
        // Iterate through the video data
        for (let i = 0; i<(data.length); i++){      
          console.log(data[i])

            if (data[i].chapter == dropdown.value){
                let s = data[i]
                chiki.push(s)                
            }else {
              console.log("dadsad")
            }


        chiki.forEach(video => {
        // Generate HTML for each video link
        html += `
        <div>
            <h3>${video.title}</h3>
            <p>Date: ${video.date}</p>
            <p>Chapter: ${video.chapter}</p>
            <a href="${video.link}">Watch Video</a>
        </div>
        `;
        });
    }
      videoListContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching video data:', error);
    });
    
    console.log(dropdown.value);
}
