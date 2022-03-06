// fetch data and set in item 
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "../../src/js/api.json",
    // url: "https://learn.matno.co/wp-json/wp/v2/posts",
    error: function () {
      console.err("data failed");
    },
    success: function (response) {
      loadFilms(response);

      Modal(response);
    },
  });

  function loadFilms(data) {
    const blogList = document.querySelector("#blog--list");
    const hugeSection = document.querySelector("#hugeSection");
    const all = data[0].yoast_head_json.article_modified_time;
    const years = Number(
      data[0].yoast_head_json.article_modified_time.slice(0, 4)
    );
    const day = Number(
      data[0].yoast_head_json.article_modified_time.slice(5, 7)
    );
    const month = data[0].yoast_head_json.article_modified_time.slice(8, 10);

    hugeSection.innerHTML = `<div class="col-12"> 
    <figure class="wrapper--blog"><div class="id">${
      data[0].id
    }</div><a class="wrapper--blog__link" href="javascript:void(0)"> <img class="wrapper--blog__link__img" src="${
      data[0].yoast_head_json.og_image[0].url
    }"   width="${data[0].yoast_head_json.og_image[0].width}" height="${
      data[0].yoast_head_json.og_image[0].height
    }"alt="image"></a>
      <figcaption class="wrapper--blog--caption">
        <div class="wrapper--blog--caption--status flex-center-right">
          <p class="category">طراحی یوآی</p>
          <div class="dot"> </div>
          <div class="data"><span class="data__day">${
            jalaali.toJalaali(years, month, day)["jd"]
          }</span><span class="data__mounth">،${get_persian_month(
      month
    )}  ماه </span><span class="data__years">${
      jalaali.toJalaali(years, month, day)["jy"]
    }</span></div>
        </div><a class="wrapper--blog--caption--title" href="javascript:void(0)"> 
          <p class="wrapper--blog--caption--title__text">${
            data[0].yoast_head_json.og_title
          }</p></a>
        <div class="wrapper--blog--caption--meta">
          <p class="wrapper--blog--caption--meta__discription">${
            data[0].yoast_head_json.og_description
          }</p><a class="wrapper--blog--caption--meta__readMore" href="javascript:void(0)">ادامه مطلب<img src="./src/img/left-ico.svg" alt=""></a>
        </div>
        <div class="wrapper--blog--caption--author flex-center-right"><a class="wrapper--blog--caption--author__link" href="javascript:void(0)"><img class="wrapper--blog--caption--author__link__img" src="./src/img/mohammad-reza.jpg" alt="img-dev"></a>
          <div class="wrapper--blog--caption--author--detail"> 
            <div class="wrapper--blog--caption--author--detail__name">${
              data[0].yoast_head_json.twitter_misc["نوشته شده توسط"]
            }</div>
            <div class="wrapper--blog--caption--author--detail__job">توسعه دهنده</div>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>`;

    blogList.innerHTML = data
      .map(
        (e) => `
    
  <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <figure class="wrapper--blog">
                <div class="id">${
                  e.id
                }</div><a class="wrapper--blog__link" href="javascript:void(0)"> <img class="wrapper--blog__link__img" width="${
          e.yoast_head_json.og_image[0].width
        }" height="${e.yoast_head_json.og_image[0].height}" src="${
          e.yoast_head_json.og_image[0].url
        }" alt="image"></a>
                <figcaption class="wrapper--blog--caption">
                  <div class="wrapper--blog--caption--status flex-center-right">
                    <p class="category">طراحی یوآی</p>
                    <div class="dot"> </div>
                    <div class="data"><span class="data__day">${
                      jalaali.toJalaali(
                        1400,
                        2,
                        Number(
                          e.yoast_head_json.article_modified_time.slice(0, 4)
                        )
                      )["jd"]
                    }</span><span class="data__mounth">${get_persian_month(
          e.yoast_head_json.article_modified_time.slice(5, 7)
        )} ماه</span><span class="data__years">${
          jalaali.toJalaali(
            Number(e.yoast_head_json.article_modified_time.slice(0, 4)),
            2,
            3
          )["jy"]
        }</span></div>
                  </div><a class="wrapper--blog--caption--title" href="javascript:void(0)"> 
                    <p class="wrapper--blog--caption--title__text">${
                      e.yoast_head_json.og_title
                    }</p></a>
                  <div class="wrapper--blog--caption--meta">
                    <p class="wrapper--blog--caption--meta__discription">${
                      e.yoast_head_json.og_description
                    }</p><a class="wrapper--blog--caption--meta__readMore" href="javascript:void(0)">ادامه مطلب<img src="./src/img/left-ico.svg" alt=""></a>
                  </div>
                  <div class="wrapper--blog--caption--author flex-center-right"><a class="wrapper--blog--caption--author__link" href="javascript:void(0)"><img class="wrapper--blog--caption--author__link__img" src="./src/img/mohammad-reza.jpg" alt="img-dev"></a>
                    <div class="wrapper--blog--caption--author--detail"> 
                      <div class="wrapper--blog--caption--author--detail__name">${
                        e.yoast_head_json.twitter_misc["نوشته شده توسط"]
                      }</div>
                      <div class="wrapper--blog--caption--author--detail__job">توسعه دهنده</div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>`
      )
      .join("");
  }
});

function get_persian_month(month) {
  switch (month) {
    case "01":
      return "فروردین";
      break;
    case "02":
      return "اردیبهشت";
      break;
    case "03":
      return "خرداد";
      break;
    case "04":
      return "تیر";
      break;
    case "05":
      return "مرداد";
      break;
    case "06":
      return "شهریور";
      break;
    case "07":
      return "مهر";
      break;
    case "08":
      return "آبان";
      break;
    case "09":
      return "آذر";
      break;
    case "10":
      return "دی";
      break;
    case "11":
      return "بهمن";
      break;
    case "12":
      return "اسفند";
      break;
  }
}


///----------------->>>>>>>>>>>>>>>>>>>> variables
const s = document.querySelector(".modal--body--status");
s.addEventListener("click", function (e) {
  console.log(e.target);
});

// select  and access element DOM
const menuBtn = document.querySelector(".header--page--menu__link");
const closes = document.querySelector(".navigation--contant--btn");
let header = document.querySelector("header"),
  main = document.querySelector("main"),
  footer = document.querySelector("footer");
const menu = document.querySelector("#navigation");

menuBtn.addEventListener("click", function () {
  menu.classList = "show";
  header.classList.add("backdrop");
  main.classList.add("backdrop");
  footer.classList.add("backdrop");
});
closes.addEventListener("click", function (e) {
  menu.classList = "hide";
  header.classList.remove("backdrop");
  main.classList.remove("backdrop");
  footer.classList.remove("backdrop");
});
const openInput = document.querySelector(".header--page--menu__search__img"),
  input = document.querySelector(".input--box"),
  closeInput = document.querySelector(".input--box__remove"),
  col = document.querySelector("#column");
openInput.addEventListener("click", function (e) {
  col.style.position = "absolute";
  col.style.display = "unset";
  input.style.width = "100%";
});
closeInput.addEventListener("click", function (e) {
  input.style.width = "0%";
  col.style.display = "none";
});

const star = document.querySelectorAll(
  ".wrapper--blog--caption--meta__discription"
);

///----------------->>>>>>>>>>>>>>>>>>>> functions

function Modal(data) {
  const img = document.querySelectorAll(".wrapper--blog__link__img");
  const title = document.querySelectorAll(".wrapper--blog--caption--title");

  img.forEach((element) => {
    element.addEventListener("click", function (e) {
      const hasid = e.target.parentElement.parentElement.querySelector(".id");
      const checkId = data.map((e) => {
        if (e.id == hasid.textContent) {
          const parentModal = document.querySelector(".modal-body");
          parentModal.innerHTML = `  <div class="id">${e.id}</div>
        <button class="modal--header--close" data-dismiss="modal"><img src="./src/img/close.svg" alt="close"><a class="modal--header--close__btn" href=""> بستن</a></button>
        <div class="modal--body--status flex-center">
          <p class="category">طراحی یوآی</p>
          <div class="dot"> </div>
          <div class="data"><span class="data__day">${
            jalaali.toJalaali(
              1400,
              2,
              Number(e.yoast_head_json.article_modified_time.slice(0, 4))
            )["jd"]
          }</span><span class="data__mounth">${get_persian_month(
            e.yoast_head_json.article_modified_time.slice(5, 7)
          )} ماه</span><span class="data__years">${
            jalaali.toJalaali(
              Number(e.yoast_head_json.article_modified_time.slice(0, 4)),
              2,
              3
            )["jy"]
          }</span></div>
        </div><a class="modal--body--title" href="javascript:void(0)">
          <p class="modal--body--title__text">${
            e.yoast_head_json.og_title
          }</p></a>
        <div class="modal--body--author flex-center"><a class="modal--body--author__link" href="javascript:void(0)"><img class="modal--body--author__link__img" width="56px" height="56px" src="./src/img/mohammad-reza.jpg" alt="img-dev"></a>
          <div class="modal--body--author--detail"> 
            <div class="modal--body--author--detail__name">${
              e.yoast_head_json.twitter_misc["نوشته شده توسط"]
            }</div>
            <div class="modal--body--author--detail__job">توسعه دهنده</div>
          </div>
        </div><a class="modal--body__links" href="javascript:void(0)"> <img class="modal--body__links__img"  width="${
          e.yoast_head_json.og_image[0].width
        }" height="${e.yoast_head_json.og_image[0].height}" src="${
            e.yoast_head_json.og_image[0].url
          }" alt="image"></a>
        <div class="modal--body--content">
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
          <p class="modal--body--content__title">رنگ های اصلی یا رنگ های درجه اول</p>
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
          <p class="modal--body--content__title">ترکیبات رنگ های اصلی</p>
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
          <p class="modal--body--content__title">رنگ های مکمل چه رنگ هایی هستند؟</p>
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
        </div>
      </div>`;

          $("#exampleModal").modal("show");
        } else {
        }
      });

      console.log(data);

      if (checkId == hasid.textContent) {
        console.log(true);
      } else {
        false;
      }
    });
  });

  title.forEach((element) => {
    element.addEventListener("click", function (e) {
      const hasid =
        e.target.parentElement.parentElement.parentElement.querySelector(".id");
      console.log(hasid);
      const checkId = data.map((e) => {
        if (e.id == hasid.textContent) {
          const parentModal = document.querySelector(".modal-body");
          parentModal.innerHTML = `  <div class="id">${e.id}</div>
        <button class="modal--header--close" data-dismiss="modal"><img src="./src/img/close.svg" alt="close"><a class="modal--header--close__btn" href=""> بستن</a></button>
        <div class="modal--body--status flex-center">
          <p class="category">طراحی یوآی</p>
          <div class="dot"> </div>
          <div class="data"><span class="data__day">${
            jalaali.toJalaali(
              1400,
              2,
              Number(e.yoast_head_json.article_modified_time.slice(0, 4))
            )["jd"]
          }</span><span class="data__mounth">${get_persian_month(
            e.yoast_head_json.article_modified_time.slice(5, 7)
          )} ماه</span><span class="data__years">${
            jalaali.toJalaali(
              Number(e.yoast_head_json.article_modified_time.slice(0, 4)),
              2,
              3
            )["jy"]
          }</span></div>
        </div><a class="modal--body--title" href="javascript:void(0)">
          <p class="modal--body--title__text">${
            e.yoast_head_json.og_title
          }</p></a>
        <div class="modal--body--author flex-center"><a class="modal--body--author__link" href="javascript:void(0)"><img class="modal--body--author__link__img" width="56px" height="56px" src="./src/img/mohammad-reza.jpg" alt="img-dev"></a>
          <div class="modal--body--author--detail"> 
            <div class="modal--body--author--detail__name">${
              e.yoast_head_json.twitter_misc["نوشته شده توسط"]
            }</div>
            <div class="modal--body--author--detail__job">توسعه دهنده</div>
          </div>
        </div><a class="modal--body__links" href="javascript:void(0)"> <img class="modal--body__links__img"  width="${
          e.yoast_head_json.og_image[0].width
        }" height="${e.yoast_head_json.og_image[0].height}" src="${
            e.yoast_head_json.og_image[0].url
          }" alt="image"></a>
        <div class="modal--body--content">
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
          <p class="modal--body--content__title">رنگ های اصلی یا رنگ های درجه اول</p>
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
          <p class="modal--body--content__title">ترکیبات رنگ های اصلی</p>
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
          <p class="modal--body--content__title">رنگ های مکمل چه رنگ هایی هستند؟</p>
          <p class="modal--body--content__discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
        </div>
      </div>`;

          $("#exampleModal").modal("show");
        } else {
        }
      });

      console.log(data);

      if (checkId == hasid.textContent) {
        console.log(true);
      } else {
        false;
      }
    });
  });
}
