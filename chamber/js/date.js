const date = document.querySelector(".date");
const dateNow = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(dateNow);

date.innerHTML = `<em>${fullDate}</em>`;