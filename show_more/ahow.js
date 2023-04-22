const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7ef0b0b876msh873e28768b6b45ep1ed224jsn6e9086c118be",
    "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
  },
};

const call = () => {
  for (let i = 0; i < arr.length; i++) {
    const house = document.createElement("div");
    house.classList.add("house");
    const visible = document.createElement("div");
    visible.classList.add("visible");
    //slider code
    const swiper = document.createElement("div");
    swiper.classList.add("swiper");
    swiper.classList.add("mySwiper");
    const swiper_wrapper = document.createElement("div");
    swiper_wrapper.classList.add("swiper-wrapper");
    for (let j = 0; j < arr[i].images.length; j++) {
      const img = document.createElement("img");
      img.classList.add("swiper-slide");
      img.setAttribute("src", arr[i].images[j]);
      swiper_wrapper.appendChild(img);
    }
    swiper.appendChild(swiper_wrapper);
    const swiper_next_btn = document.createElement("div");
    swiper_next_btn.classList.add("swiper-button-next");
    const swiper_prev_btn = document.createElement("div");
    swiper_prev_btn.classList.add("swiper-button-prev");
    swiper.appendChild(swiper_next_btn);
    swiper.appendChild(swiper_prev_btn);
    var swip = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    visible.appendChild(swiper);

    const visible_content = document.createElement("div");
    visible_content.classList.add("visible_content");
    const visible_content_heading = document.createElement("h1");
    visible_content_heading.classList.add("visible_content_heading");
    visible_content_heading.innerHTML = `a ${arr[i].bedroom_count} appartment is available in ${arr[0].address.locality}`;
    visible_content.appendChild(visible_content_heading);
    const div_info = document.createElement("div");
    div_info.classList.add("div_info");
    //pricing
    const div_info_price = document.createElement("div");
    div_info_price.classList.add("div_info_price");
    const div_info_price_p = document.createElement("p");
    div_info_price_p.innerHTML = "price";
    const div_info_price_h3 = document.createElement("h3");
    div_info_price_h3.innerHTML = arr[i].listing_price;
    div_info_price.appendChild(div_info_price_p);
    div_info_price.appendChild(div_info_price_h3);
    div_info.appendChild(div_info_price);
    //bedroom count
    const div_info_bedroom = document.createElement("div");
    div_info_bedroom.classList.add("div_info_bedroom");
    const div_info_bedroom_p = document.createElement("p");
    div_info_bedroom_p.innerHTML = "bedroom count";
    const div_info_bedroom_h3 = document.createElement("h3");
    div_info_bedroom_h3.innerHTML = arr[i].bedroom_count;
    div_info_bedroom.appendChild(div_info_bedroom_p);
    div_info_bedroom.appendChild(div_info_bedroom_h3);
    div_info.appendChild(div_info_bedroom);
    //amenities
    const div_info_amenities = document.createElement("div");
    div_info_amenities.classList.add("div_info_amenities");
    const div_info_amenities_p = document.createElement("p");
    div_info_amenities_p.innerHTML = "amenities";
    const div_info_amenities_h3 = document.createElement("h3");
    div_info_amenities_h3.innerHTML = arr[i].amenities;
    div_info_amenities.appendChild(div_info_amenities_p);
    div_info_amenities.appendChild(div_info_amenities_h3);
    div_info.appendChild(div_info_amenities);
    //location
    const div_info_city = document.createElement("div");
    div_info_city.classList.add("div_info_city");
    const div_info_city_p = document.createElement("p");
    div_info_city_p.innerHTML = "city";
    const div_info_city_h3 = document.createElement("h3");
    div_info_city_h3.innerHTML = arr[i].address.city;
    div_info_city.appendChild(div_info_city_p);
    div_info_city.appendChild(div_info_city_h3);
    div_info.appendChild(div_info_city);
    visible_content.appendChild(div_info);

    const show_more_btn = document.createElement("button");
    show_more_btn.classList.add("show_more_btn");
    show_more_btn.innerHTML = "show more";
    visible_content.appendChild(show_more_btn);
    visible.appendChild(visible_content);
    const hidden = document.createElement("div");
    hidden.classList.add("hidden");
    hidden.innerHTML = "this is the hidden section";
    const map_add = document.createElement("div");
    map_add.classList.add("map_add");
    //HERE COMES THE MAP
    async function initMap(latitude, longitude) {
      // The location of Uluru
      const position = { lat: latitude, lng: longitude };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

      // The map, centered at Uluru
      let map = new Map(map_add, {
        zoom: 15,
        center: position,
        mapId: "9585128d1e56df8e",
      });

      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
        animation: google.maps.Animation.BOUNCE,
      });
      marker.addListener("click", toggleBounce);
    }
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    fetch(
      `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${arr[i].address.addressLine1}&language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.results[0].location.lat);
        console.log(response.results[0].location.lng);
        initMap(
          response.results[0].location.lat,
          response.results[0].location.lng
        );
      })
      .catch((err) => console.error(err));
    //HERE MAP ENDS
    hidden.appendChild(map_add);
    const show_less_btn = document.createElement("button");
    show_less_btn.classList.add("show_less_btn");
    show_less_btn.innerHTML = "show less";
    hidden.appendChild(show_less_btn);
    house.appendChild(visible);
    house.appendChild(hidden);
    house_list.appendChild(house);
  }
};

const arr = [
  {
    property_type: "house",
    bedroom_count: "3",
    lot_size: "10",
    amenities: "semi-fernished",
    build_year: "1966",
    square_footage: "12356",
    address: {
      addressLine1: "awho twin towers greater noida india",
      county: "India",
      city: "noida",
      street_address: "wrfhyr",
      locality: "awho",
    },
    description: "",
    listing_price: "1700000",
    images: ["house1.jpg", "house1_drawingroom.jpg", "house1_interior.jpg"],
  },
  {
    property_type: "house",
    bedroom_count: "4",
    lot_size: "12",
    amenities: "semi-fernished",
    build_year: "1966",
    square_footage: "12356",
    address: {
      addressLine1: "iiit lucknow uttar pradesh india",
      county: "India",
      city: "lucknow",
      street_address: "wrfhyr",
      locality: "awho",
    },
    description: "",
    listing_price: "1700000",
    images: "house1.jpg",
  },
  {
    property_type: "house",
    bedroom_count: "3",
    lot_size: "10",
    amenities: "semi-fernished",
    build_year: "1966",
    square_footage: "12356",
    address: {
      addressLine1: "awho twin towers greater noida india",
      county: "India",
      city: "noida",
      street_address: "wrfhyr",
      locality: "awho",
    },
    description: "",
    listing_price: "1700000",
    images: ["house1.jpg", "house1_drawingroom.jpg", "house1_interior.jpg"],
  },
  {
    property_type: "house",
    bedroom_count: "3",
    lot_size: "10",
    amenities: "semi-fernished",
    build_year: "1966",
    square_footage: "12356",
    address: {
      addressLine1: "awho twin towers greater noida india",
      county: "India",
      city: "noida",
      street_address: "wrfhyr",
      locality: "awho",
    },
    description: "",
    listing_price: "1700000",
    images: ["house1.jpg", "house1_drawingroom.jpg", "house1_interior.jpg"],
  },
  {
    property_type: "house",
    bedroom_count: "3",
    lot_size: "10",
    amenities: "semi-fernished",
    build_year: "1966",
    square_footage: "12356",
    address: {
      addressLine1: "awho twin towers greater noida india",
      county: "India",
      city: "noida",
      street_address: "wrfhyr",
      locality: "awho",
    },
    description: "",
    listing_price: "1700000",
    images: ["house1.jpg", "house1_drawingroom.jpg", "house1_interior.jpg"],
  },
];
//final code
const submit_btn = document.querySelector("#submit_btn");
const house_list = document.querySelector("#house_list");
submit_btn.addEventListener("click", call);

const show_more = document.querySelector(".show_more_btn");
house_list.addEventListener("click", (e) => {
  if (e.target.className == "show_more_btn") {
    const hidden = e.target.parentElement.parentElement.nextSibling;
    console.log(e.target.parentElement.parentElement.nextSibling);
    console.log(hidden);
    hidden.style.display = "block";
    e.target.style.display = "none";
  }
});
house_list.addEventListener("click", (e) => {
  const show_more =
    e.target.parentElement.previousSibling.querySelector(".show_more_btn");
  console.log(
    e.target.parentElement.previousSibling.querySelector(".show_more_btn")
  );
  if (e.target.className == "show_less_btn") {
    const hidden = e.target.parentElement;
    hidden.style.display = "none";
    show_more.style.display = "block";
  }
});
