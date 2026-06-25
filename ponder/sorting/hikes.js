// -----------------------------------------------------------------------
// Notes
// -----------------------------------------------------------------------

people = [
    {name: "Matthew", age: 9},
    {name: "Josh", age: 18},
    {name: "James", age: 40},
    {name: "Eric", age: 32},
    {name: "Bob", age: 102}
]

people.sort(sortPeopleByName);

console.log(people);

// Custom callback function for the .sort function
// Expects -1 if first arg should be before the second; 1 if after; 0 if equal.
function sortPeopleByName(a, b) {
    // console.log("A: " + a.name);
    // console.log("B: " + b.name);
    // console.log("------");
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
    } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
    } else {
        return 0;
    }
}


// -----------------------------------------------------------------------
// Actual code for the ponder assignment
// -----------------------------------------------------------------------


const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];

const searchBar = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const hikeContainer = document.getElementById('hike-container');


searchBtn.addEventListener('click', e => {
    // Retrieve the user input
    let searchText = searchBar.value.toLowerCase();
    console.log(searchText);

    // Filter the hike list based on the user input
    let filteredHikes = hikes.filter(hike => {
        // return true if there's a match in the name or the tags
        return hike.name.toLowerCase().includes(searchText)
            || hike.description.toLowerCase().includes(searchText)
            || searchHikeTags(searchText, hike.tags);
    });

    // Sort the results by difficulty
    filteredHikes.sort(sortHikesByDifficulty);

    // Insert the sorted results into the DOM
    filteredHikes.forEach(filteredHike => {
        hikeContainer.innerHTML += makeHikeCard(filteredHike);
    });
})

// Function which returns true if any of the tags contain the target text
function searchHikeTags(target, tags) {
    tags.forEach(tag => {
        if (tag.includes(target)) {
            return true;
        }
    })
    return false;
}

// Sort hikes with lowest difficulty first
function sortHikesByDifficulty(a, b) {
    return a.difficulty - b.difficulty;
}

function makeHikeCard(hike) {
    let hikeTags = '';
    hike.tags.forEach(tag => {
        hikeTags += `<button>${tag}</button>`
    });
    let hikeRating = ``;
    for(i = 0; i < 5; i++) {
        hikeRating += `<span class="rating" aria-hidden="true">${(i < hike.difficulty) ? '🥾' : '▫️'}</span>`;
    }
    console.log(hikeRating);

    return `
        <div class="hike-card">
            <div class="hike-content">
                <h2>${hike.name}</h2>
                <div class="hike-tags">
                    ${hikeTags}
                </div>
                <p>${hike.description}</p>
                <p>Difficulty: ${hikeRating}</p>
            </div>
        </div>
    `
}

                