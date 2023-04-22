const continue_btn = document.querySelector("#continue_btn");
const personal_info = document.querySelector("#personal_info");
const property_info = document.querySelector("#property_info");
const back_btn = document.querySelector("#back_btn");
const submit_btn = document.querySelector("#submit_btn");
continue_btn.addEventListener("click", () => {
  personal_info.style.display = "none";
  property_info.style.display = "block";
});

back_btn.addEventListener("click", () => {
  personal_info.style.display = "block";
  property_info.style.display = "none";
});
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const ph_number = document.querySelector("#ph_number").value;
  const city = document.querySelector("#city").value;
  const min_price = document.querySelector("#min_price").value;
  const max_price = document.querySelector("#max_price").value;
  const room_count = document.querySelector("#bedroom_count").value;
  const foot_size = document.querySelector("#foot_size").value;
  console.log(name);
  console.log(email);
  console.log(ph_number);
  console.log(city);
  console.log(min_price);
  console.log(max_price);
  console.log(room_count);
  console.log(foot_size);
});
