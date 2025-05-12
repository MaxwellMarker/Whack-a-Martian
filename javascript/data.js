export let leaderBoardObjects = [
  {
    name: "MAX",
    score: 200,
  },
  {
    name: "PURPLY",
    score: 160,
  },
  {
    name: "PINKY",
    score: 120,
  },
  {
    name: "GREENY",
    score: 100,
  },
  {
    name: "KEVIN",
    score: 12,
  },
];

export const targetIdsType1Row1 = [
  {
    id: "type1num1",
    startPosition: "translate(-15px, 125px) rotate(15deg)",
    endPosition: "translate(15px, -30px) rotate(15deg)",
    pointValue: 1,
  },
  {
    id: "type1num2",
    startPosition: "translate(-10px, 125px) rotate(3deg)",
    endPosition: "translate(0, 5px) rotate(3deg)",
    pointValue: 1,
  },
  {
    id: "type1num3",
    startPosition: "translate(10px, 125px) rotate(-3deg)",
    endPosition: "translate(0, 5px) rotate(-3deg)",
    pointValue: 1,
  },
  {
    id: "type1num4",
    startPosition: "translate(15px, 125px) rotate(-15deg)",
    endPosition: "translate(-15px, -30px) rotate(-15deg)",
    pointValue: 1,
  },
];

export const targetIdsType1Row2 = [
  {
    id: "type1num5",
    startPosition: "translate(-50px, 125px) rotate(25deg)",
    endPosition: "translate(25px, -40px) rotate(25deg)",
    pointValue: 1,
  },
  {
    id: "type1num6",
    startPosition: "translate(0, 125px) rotate(1deg)",
    endPosition: "translate(0, 0) rotate(1deg)",
    pointValue: 1,
  },
  {
    id: "type1num7",
    startPosition: "translate(0, 125px) rotate(-1deg)",
    endPosition: "translate(0, 0) rotate(-1deg)",
    pointValue: 1,
  },
  {
    id: "type1num8",
    startPosition: "translate(50px, 125px) rotate(-25deg)",
    endPosition: "translate(-25px, -40px) rotate(-25deg)",
    pointValue: 1,
  },
];

export const targetIdsType2Row1 = [
  {
    id: "type2num1",
    startPosition: "translate(-20px, 100px) rotate(8deg)",
    endPosition: "translate(0, 0) rotate(8deg)",
    pointValue: 2,
  },
  {
    id: "type2num2",
    startPosition: "translate(20px, 100px) rotate(-8deg)",
    endPosition: "translate(0, 0) rotate(-8deg)",
    pointValue: 2,
  },
];

export const targetIdsType2Row2 = [
  {
    id: "type2num3",
    startPosition: "translate(-10px, 0) rotate(35deg)",
    endPosition: "translate(50px, -90px) rotate(35deg)",
    pointValue: 2,
  },
  {
    id: "type2num4",
    startPosition: "translate(-20px, 100px) rotate(8deg)",
    endPosition: "translate(0, 0) rotate(8deg)",
    pointValue: 2,
  },
  {
    id: "type2num5",
    startPosition: "translate(20px, 100px) rotate(-8deg)",
    endPosition: "translate(0, 0) rotate(-8deg)",
    pointValue: 2,
  },
  {
    id: "type2num6",
    startPosition: "translate(10px, 0px) rotate(-35deg)",
    endPosition: "translate(-50px, -90px) rotate(-35deg)",
    pointValue: 2,
  },
];

export const targetIdsType2Planet = [
  {
    id: "type2num7",
    startPosition: "translate(100px, 0) rotate(-90deg)",
    endPosition: "translate(-5px, 0) rotate(-90deg)",
    pointValue: 4,
  },
  {
    id: "type2num8",
    startPosition: "translate(100px, -140px) rotate(0deg)",
    endPosition: "translate(100px, -245px) rotate(0deg)",
    pointValue: 4,
  },
  {
    id: "type2num9",
    startPosition: "translate(-40px, 105px) rotate(180deg)",
    endPosition: "translate(-40px, 245px) rotate(180deg)",
    pointValue: 4,
  },
  {
    id: "type2num10",
    startPosition: "translate(-40px, 0) rotate(90deg)",
    endPosition: "translate(65px, 0) rotate(90deg)",
    pointValue: 4,
  },
];

export const targetIdsType3Row1 = [
  {
    id: "type3num1",
    startPosition: "translate(-10px, 0) rotate(25deg)",
    endPosition: "translate(25px, -75px) rotate(25deg)",
    pointValue: 3,
  },
  {
    id: "type3num2",
    startPosition: "translate(0, 85px) rotate(0deg)",
    endPosition: "translate(0, 0) rotate(0deg)",
    pointValue: 3,
  },
  {
    id: "type3num3",
    startPosition: "translate(10px, 0) rotate(-25deg)",
    endPosition: "translate(-25px, -75px) rotate(-25deg)",
    pointValue: 3,
  },
];
export const targetIdsType3Row2 = [
  {
    id: "type3num4",
    startPosition: "translate(-20px, 50px) rotate(20deg)",
    endPosition: "translate(10px, -30px) rotate(20deg)",
    pointValue: 3,
  },
  {
    id: "type3num5",
    startPosition: "translate(20px, 50px) rotate(-20deg)",
    endPosition: "translate(-10px, -30px) rotate(-20deg)",
    pointValue: 3,
  },
];

export const targetIdsType3Planet = [
  {
    id: "type3num6",
    startPosition: "translate(60px, 105px) rotate(-135deg)",
    endPosition: "translate(0px, 165px) rotate(-135deg)",
    pointValue: 5,
  },
  {
    id: "type3num7",
    startPosition: "translate(-80px, -105px) rotate(-45deg)",
    endPosition: "translate(-140px, -165px) rotate(-45deg)",
    pointValue: 5,
  },
  {
    id: "type3num8",
    startPosition: "translate(0px, -105px) rotate(45deg)",
    endPosition: "translate(60px, -165px) rotate(45deg)",
    pointValue: 5,
  },
  {
    id: "type3num9",
    startPosition: "translate(-140px, 105px) rotate(135deg)",
    endPosition: "translate(-80px, 165px) rotate(135deg)",
    pointValue: 5,
  },
];

export const allTargets = [
  ...targetIdsType1Row1,
  ...targetIdsType1Row2,
  ...targetIdsType2Row1,
  ...targetIdsType2Row2,
  ...targetIdsType2Planet,
  ...targetIdsType3Row1,
  ...targetIdsType3Row2,
  ...targetIdsType3Planet,
];
