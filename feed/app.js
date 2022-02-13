let url = 'https://blog.kasidate.me/feeds/posts/default?alt=rss';
const textarea = document.querySelector('#feed-textarea > ul');
var space = '     ';
const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();

function toThaiDateString(date) {
  let monthNames = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
    "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
    "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ` +
    `${hour}:${minutes}:${second} น.`;
}
let today = new Date();
let date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let date2 = new Date("September 30, 2020 11:28:00");
let date3 = new Date("March 12, 1988 00:00:00");

console.log(toThaiDateString(date));
console.log(toThaiDateString(date2));
console.log(toThaiDateString(date3));



feednami.load(url)
  .then(feed => {
    textarea.value = ''
    console.log(feed);
    for (let entry of feed.entries) {

      //create a list element
      let li = document.createElement('li');
      //add HTML content to list items
      li.innerHTML = `<div class="categories">${entry.categories} </div>
      <a href="${entry.link}" class="newsdisplay"> &nbsp; ${entry.title} </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      `;
      //append HTML content to list 
      textarea.appendChild(li);
    }
  });

