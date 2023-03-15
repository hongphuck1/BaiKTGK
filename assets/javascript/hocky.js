const radioCheck = document.querySelectorAll(".radio-answer");
const answerCheck = document.querySelectorAll(".answer-checked");

let nameAge = 0;
let nameInput = 0;
let idlable = 0;
let time = 60;

const nameAnswer = {
  name: "Đề thi HK1 môn Toán 12 năm 2022-2023",
  title: "Trường THPT Hùng Vương",
};

const valueAnswer = [
  {
    name: "Câu 1",
    title:
      "Thời gian thực dân Pháp tiến hành khai thác thuộc địa lần thứ nhất ở Việt Nam khi nào?",
    answers3: [
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "1858-1884",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "1884-1896",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "1896-1913",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "1914-1918",
      },
    ],
  },
  {
    name: "Câu 2",
    title:
      "Trong đợt khai thác thuộc địa lần thứ nhất của thực dân Pháp ở nước ta có giai cấp mới nào được hình thành?",
    nameInput: nameInput++,
    answers3: [
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,

        name: "Giai cấp tư sản",
      },
      {
        nameInput: `age${nameInput}`,

        idlable: idlable++,

        name: "Giai cấp tư sản và công nhân",
      },
      {
        nameInput: `age${nameInput}`,

        idlable: idlable++,

        name: "Giai cấp công nhân",
      },
      {
        nameInput: `age${nameInput}`,

        idlable: idlable++,

        name: "Giai cấp tiểu tư sản",
      },
    ],
  },
  {
    name: "Câu 3",
    title:
      "Trước Chiến tranh thế giới thứ nhất, ở Việt Nam có những giai cấp nào?",
    nameInput: nameInput++,
    answers3: [
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Địa chủ phong kiến và nông dân",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Địa chủ phong kiến, nông dân, tư sản, tiểu tư sản và công nhân",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Địa chủ phong kiến, nông dân và công nhân",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Địa chủ phong kiến, nông dân và tiểu tư sản",
      },
    ],
  },
  {
    name: "Câu 4",
    title:
      "Dưới chế độ thực dân phong kiến, giai cấp nông dân Việt Nam có yêu cầu bức thiết nhất là gì?",
    nameInput: nameInput++,
    answers3: [
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Độc lập dân tộc",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Ruộng đất",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Quyền bình đẳng nam, nữ",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Được giảm tô, giảm tức",
      },
    ],
  },
  {
    name: "Câu 5",
    title:
      "Mâu thuẫn cơ bản và chủ yếu ở Việt Nam đầu thế kỷ XX là mâu thuẫn nào?",
    nameInput: nameInput++,
    answers3: [
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Mâu thuẫn giữa giai cấp nông dân với giai cấp địa chủ phong kiến",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Mâu thuẫn giữa giai cấp công nhân với giai cấp tư sản",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Mâu thuẫn giữa công nhân và nông dân với đế quốc và phong kiến",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Mâu thuẫn giữa dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng",
      },
    ],
  },
  {
    name: "Câu 6",
    title: "Đặc điểm ra đời của giai cấp công nhân Việt Nam như thế nào?",
    nameInput: nameInput++,
    answers3: [
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Ra đời trước giai cấp tư sản, trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp.",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Phần lớn xuất thân từ nông dân.",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Chịu sự áp bức và bóc lột của đế quốc, phong kiến và tư sản.",
      },
      {
        nameInput: `age${nameInput}`,
        idlable: idlable++,
        name: "Cả a, b và c  ",
      },
    ],
  },
];

const valueContact = [
  {
    icon: '<i class="fa-regular fa-square-check"></i>',
    title: `${valueAnswer.length} Câu`,
  },
  {
    icon: '<i class="fa-regular fa-clock"></i>',
    title: `60 phút`,
  },
  {
    icon: '<i class="fa-regular fa-clock"></i>',
    title: "602 lượt thi",
  },
];

const main = document.querySelector(".main");
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const contact = document.querySelector(".contact");

// render thông tin ra màn hinh
const renderMain = () => {
  return `
    <div class="header">
        <div class="header-name">${nameAnswer.name}</div>
        <div class="header-title">${nameAnswer.title}</div>
    </div>

    <div class="contact">
        ${renderContact(valueContact)}
    </div>

    <div class="container">
        ${renderAnswer(valueAnswer)}
    </div>

    <input type="submit" class="btn success" onclick="handleClick()" value="Gửi Bài"></input>

    
    `;
};

const toasts = {
  success: {
    icon: '<i class="fas fa-check-circle"></i>',
    msg: "Bạn đã gửi bài kiểm tra !",
  },
  error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    msg: "This is a error message !",
  },
  warning: {
    icon: '<i class="fas fa-exclamation-circle"></i>',
    msg: "This is a warning message !",
  },
};

const handleClick = (e) => {
  createToast("success");
  //   location.reload();
  setTimeout(function () {
    location.reload();
    // window.location = `${location.origin}`;
  }, 4000);
};

// sử lý toast
function createToast(status) {
  console.log(toasts[status]);
  let toast = document.createElement("div");
  toast.className = `toast ${status}`;

  toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `;
  document.querySelector("#toasts").appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "hide_slide 1s ease forwards";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}

// Phần contact
const renderContact = (value) => {
  value.map((item) => {
    // console.log(item);
  });

  return `
  ${value
    .map((item) => {
      return `
            <div class="contact-question">
                ${item.icon}
                <span>${item.title}</span>
            </div>
        `;
    })
    .join("")}

    `;
};

// phần câu hỏi
const renderAnswer = (value) => {
  return `

  ${value
    .map((item) => {
      // console.log(item.answers);
      return `
        <div class="question">
        <div class="question-name">${item.name}</div>
        <div class="question-title">
            ${item.title}
        </div>
        <ul class="question-form">
            <li class="question-form__answer">
            
                    ${item.answers3
                      .map((item1) => {
                        return `
                        
                            <input
                                class="radio-answer"
                                type="radio"
                                id="${item1.idlable}"
                                name="${item1.nameInput}"
                                value=""
                            />
                            <label class="answer-checked" for="${item1.idlable}">${item1.name}</label>
                            <br />
                            
                        `;
                      })
                      .join("")}

            </li>
        </ul>
    </div>
        `;
    })
    .join("")}
          
    `;
};

main.innerHTML = renderMain();
