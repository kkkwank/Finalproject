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
  "q1":{
    data: { type: "fill", text: "เธอชื่ออะไร", option: "" },
    type: "question",
  },

  "q2":{
    data: {
      type: "fill",
      text: "ฉันอยากรู้จักเธอมากกว่านี้ เธออายุเท่าไร",
      option: "",
    },
    type: "question"
  },


  "q3":{
    data: {
      type: "fill",
      text: "แล้วเธอหล่ะ มีหน้าตาเป็นยังไงหรอ เล่าให้ฉันฟังหน่อย ฉันอยากรู้จักเธอมากขึ้น?",
      option: "",
    },
    type: "question"
  },
  "q4":{
    data: {
      type: "choice",
      text: "เธอว่ารูปร่างหน้าตาของเธอตรงตามมาตรฐานความงามในสังคมไหม?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q5":{
    data: {
      type: "choice",
      text: "ถ้าให้ความมั่นใจในรูปร่างหน้าตาเต็ม 5 คะแนน เธอให้คะแนนตัวเธออยู่ระดับไหน? (เรียงลำดับจากน้อยไปมาก)",
      option: [
        { text: "1", group: "1" },
        { text: "2", group: "2" },
        { text: "3", group: "3" },
        { text: "4", group: "4" },
        { text: "5", group: "4" },
      ],
    },
    type: "question"
  },
  "q6":{
    data: {
      type: "choice",
      text: "เธอว่าหน้าตาส่งผลต่อโอกาสด้านการทำงานไหม?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q7":{
    data: {
      type: "choice",
      text: "ถ้าเธอถูกทักแบบฉัน เธอคิดว่าความมั่นใจในรูปร่างหน้าตาจะลดลงไหม?",
      option: [
        { text: "Yes", group: "1" },
        { text: "No", group: "2" },
      ],
    },
    type: "question"
  },
  "q8":{
    data: {
      type: "choice",
      text: "แล้วเธอว่าคำพูดของคน สามารถส่งผลกระทบต่อความมั่นใจไหม?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q9":{
    data: {
      type: "choice",
      text: "แล้วเธอว่า ถ้าฉันหน้าตาตรงตามมาตรฐานความงาม ญาติจะพูดกับฉันต่างจากเดิมมากไหม?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q10":{
    data: {
      type: "fill",
      text: "เธอว่าผู้ชายคนนั้นจะมีท่าทียังไงหลังเขาเห็นฉัน?",
      option: "",
    },
    type: "question"
  },
  "q11":{
    data: {
      type: "choice",
      text: "ถ้าเธอเจอสถานการณ์เหมือนฉันในตอนนี้เธอรับได้มากน้อยแค่ไหน?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q12":{
    data: {
      type: "choice",
      text: "เธอคิดเหมือนฉันไหมว่าเพราะบรรบุรุษนี่แหละที่ทำให้เราหน้าตาแย่ ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q13":{
    data: {
      type: "choice",
      text: "ถ้าเธอเจอสถานการณ์เหมือนฉันในตอนนี้เธอรับได้มากน้อยแค่ไหน?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q14":{
    data: {
      type: "choice",
      text: "แล้วเธอรู้สึกพึงพอใจกับชีวิตตอนนี้ไหม?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q15":{
    data: {
      type: "choice",
      text: "เธอเคยคิดจะทำศัลยกรรมหรือหัตถกรรมความงามเหมือนฉันไหม ?",
      option: [
        { text: "ไม่เลย", group: "1" },
        { text: "เล็กน้อย", group: "2" },
        { text: "มาก", group: "3" },
        { text: "มากที่สุด", group: "4" },
      ],
    },
    type: "question"
  },
  "q16":{
    data: {
      type: "choice",
      text: "แล้วเธอมีความรู้เกี่ยวกับการทำศัลยกรรมหรือหัตถกรรมความงามมากน้อยแค่ไหน ?",
      option: [
        { text: "1", group: "1" },
        { text: "2", group: "2" },
        { text: "3", group: "3" },
        { text: "4", group: "4" },
        { text: "5", group: "4" },
      ],
    },
    type: "question"
  },
  "q17":{
    data: {
      type: "choice",
      text: "ถ้าเธอรู้สึกไม่มั่นใจ เธอมีวิธีขจัดความรู้สึกนั้นไหม?",
      option: [
        { text: "ไม่", group: "1" },
        { text: "ใช่", group: "2", next: true },
      ],
    },
    type: "question"
  },
  "q18":{
    data: {
      type: "fill",
      text: "มีใครเคยชมว่าเธอเก่งอะไรไหม",
      option: "",
    },
    type: "question"
  },
  "q19":{
    data: {
      type: "fill",
      text: "สุดท้ายนี้ฉันอยากให้เธอให้กำลังใจคนที่ขาดความมั่นใจเหมือนฉันเมื่อก่อนหน่อย",
      option: "",
    },
    type: "question"
  },
};
