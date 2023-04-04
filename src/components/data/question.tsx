// type MainQuestion={

// }
// type SubQuestion={

// }
// type Data={
//   type:string;
//   text:string;
//   option:string;
// }
// type Choice={
//   text:string;
//   group:string;
// }
export const question = {
  q1: {
    data: { type: "fill", text: "เธอชื่ออะไร ?", option: "", bgpath: "./assets/bgquiz/BG-Cloud.gif" },
    type: "question",
  },

  q2: {
    data: {
      type: "fill",
      text: "แล้วเธอ...\nมีสิ่งที่กลัวบ้างไหม ?",
      option: "",
      bgpath: "./assets/bgquiz/BG-Cloud.gif"
    },
    type: "./assets/card/card1.jpg",
  },

  q3: {
    data: {
      type: "choice",
      text: "ถ้าคะแนนความมั่นใจ\nเต็ม 5 คะแนน\nเธอให้ตัวเองเท่าไหร ?",
      option: [
        { text: "1", group: "1" },
        { text: "2", group: "2" },
        { text: "3", group: "3" },
        { text: "4", group: "4" },
        { text: "5", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG-Cloud.gif"
    },
    type: "question",
  },

  q4: {
    data: {
      type: "choice",
      text: "แล้วเธอเคยมีความรู้สึก\nไม่มั่นใจในของตัวเองไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q5: {
    data: {
      type: "choice",
      text: "ฉันว่าคำพูดของคนอื่น\nมันส่งผลต่อจิตใจมากจริง ๆ\nเธอคิดเหมือนกันไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q6: {
    data: {
      type: "choice",
      text: "แล้วเธอคิดว่า...\nรูปร่างหน้าตาส่งผลต่อ\nโอกาสด้านอื่น ๆ ด้วยไหม?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q7: {
    data: {
      type: "choice",
      text: "แค่หน้าตาดีก็มีชัยกว่าครึ่ง\nเธอเห็นด้วยไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q8: {
    data: {
      type: "choice",
      text: "เธอเคยเกิดความคิดที่ไม่ดี\nหรือโทษแต่ตัวเอง\nเหมือนกับที่ฉันเคยคิดไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q9: {
    data: {
      type: "choice",
      text: "ถ้าเธอเคยคิดที่อยากจะทำ\nศัลยกรรมหรือหัตถกรรม\nความงามบ้างไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q10: {
    data: {
      type: "choice",
      text: "หากเธอต้องทำศัลยกรรม\nหรือหัตถกรรมความงาม\nเธอจะใช้เวลาตัดสินใจนานไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q11: {
    data: {
      type: "choice",
      text: "ถ้าเธอเจอกับเหตุการณ์แบบนี้\nเธอจะรู้สึกเป็นกังวลไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Orange.gif",
    },
    type: "question",
  },

  q12: {
    data: {
      type: "fill",
      text: "เธอลองสำรวจตัวเองดูนะ\nว่าตัวเธอเองเป็นคนแบบไหน ?",
      option: "",
      bgpath: "./assets/bgquiz/BG-Cloud.gif"
    },
    type: "question",
  },

  q13: {
    data: {
      type: "fill",
      text: "เรามาส่งต่อ\nพลังความมั่นใจ\nให้แก่กันเถอะ",
      option: "",
      bgpath: "./assets/bgquiz/BG_Green.gif"
    },
    type: "question",
  },

  q14: {
    data: {
      type: "choice",
      text: "สุดท้ายนี้...\nเธอรู้สึกมั่นใจในตัวเองเพิ่มขึ้น\nจากตอนแรกบ้างไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
      bgpath: "./assets/bgquiz/BG_Green.gif"
    },
    type: "question",
  },
};
