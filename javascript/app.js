let scoreCount = 0;
let gameTimer = 0;
let leaderBoardObjects = [{
        name: 'MAX',
        score: 200
    },
    {
        name: 'PURPLY',
        score: 160
    },
    {
        name: 'PINKY',
        score: 120
    },
    {
        name: 'GREENY',
        score: 100
    },
    {
        name: 'CHAD',
        score: 12
    }
];
const scoreSorter = (a, b) => {
    return b.score - a.score;
}
const targetIdsType1Row1 = [
    type1num1 = {
        id: 'type1num1',
        startPosition: 'translate(-15px, 125px) rotate(15deg)',
        endPosition: 'translate(15px, -30px) rotate(15deg)',
        pointValue: 1
    },
    type1num2 = {
        id: 'type1num2',
        startPosition: 'translate(-10px, 125px) rotate(3deg)',
        endPosition: 'translate(0, 5px) rotate(3deg)',
        pointValue: 1
    },
    type1num3 = {
        id: 'type1num3',
        startPosition: 'translate(10px, 125px) rotate(-3deg)',
        endPosition: 'translate(0, 5px) rotate(-3deg)',
        pointValue: 1
    },
    type1num4 = {
        id: 'type1num4',
        startPosition: 'translate(15px, 125px) rotate(-15deg)',
        endPosition: 'translate(-15px, -30px) rotate(-15deg)',
        pointValue: 1
    }
];
const targetIdsType1Row2 = [
    type1num5 = {
        id: 'type1num5',
        startPosition: 'translate(-50px, 125px) rotate(25deg)',
        endPosition: 'translate(25px, -40px) rotate(25deg)',
        pointValue: 1
    },
    type1num6 = {
        id: 'type1num6',
        startPosition: 'translate(0, 125px) rotate(1deg)',
        endPosition: 'translate(0, 0) rotate(1deg)',
        pointValue: 1
    },
    type1num7 = {
        id: 'type1num7',
        startPosition: 'translate(0, 125px) rotate(-1deg)',
        endPosition: 'translate(0, 0) rotate(-1deg)',
        pointValue: 1
    },
    type1num8 = {
        id: 'type1num8',
        startPosition: 'translate(50px, 125px) rotate(-25deg)',
        endPosition: 'translate(-25px, -40px) rotate(-25deg)',
        pointValue: 1
    }
];
const targetIdsType2Row1 = [
    type2num1 = {
        id: 'type2num1',
        startPosition: 'translate(-20px, 100px) rotate(8deg)',
        endPosition: 'translate(0, 0) rotate(8deg)',
        pointValue: 2
    },
    type2num2 = {
        id: 'type2num2',
        startPosition: 'translate(20px, 100px) rotate(-8deg)',
        endPosition: 'translate(0, 0) rotate(-8deg)',
        pointValue: 2
    }
];
const targetIdsType2Row2 = [
    type2num3 = {
        id: 'type2num3',
        startPosition: 'translate(-10px, 0) rotate(35deg)',
        endPosition: 'translate(50px, -90px) rotate(35deg)',
        pointValue: 2
    },
    type2num4 = {
        id: 'type2num4',
        startPosition: 'translate(-20px, 100px) rotate(8deg)',
        endPosition: 'translate(0, 0) rotate(8deg)',
        pointValue: 2
    },
    type2num5 = {
        id: 'type2num5',
        startPosition: 'translate(20px, 100px) rotate(-8deg)',
        endPosition: 'translate(0, 0) rotate(-8deg)',
        pointValue: 2
    },
    type2num6 = {
        id: 'type2num6',
        startPosition: 'translate(10px, 0px) rotate(-35deg)',
        endPosition: 'translate(-50px, -90px) rotate(-35deg)',
        pointValue: 2
    }
];
const targetIdsType2Planet = [
    type2num7 = {
        id: 'type2num7',
        startPosition: 'translate(100px, 0) rotate(-90deg)',
        endPosition: 'translate(-5px, 0) rotate(-90deg)',
        pointValue: 4
    },
    type2num8 = {
        id: 'type2num8',
        startPosition: 'translate(100px, -140px) rotate(0deg)',
        endPosition: 'translate(100px, -245px) rotate(0deg)',
        pointValue: 4
    },
    type2num9 = {
        id: 'type2num9',
        startPosition: 'translate(-40px, 105px) rotate(180deg)',
        endPosition: 'translate(-40px, 245px) rotate(180deg)',
        pointValue: 4
    },
    type2num10 = {
        id: 'type2num10',
        startPosition: 'translate(-40px, 0) rotate(90deg)',
        endPosition: 'translate(65px, 0) rotate(90deg)',
        pointValue: 4
    }
];
const targetIdsType3Row1 = [
    type3num1 = {
        id: 'type3num1',
        startPosition: 'translate(-10px, 0) rotate(25deg)',
        endPosition: 'translate(25px, -75px) rotate(25deg)',
        pointValue: 3
    },
    type3num2 = {
        id: 'type3num2',
        startPosition: 'translate(0, 85px) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    },
    type3num3 = {
        id: 'type3num3',
        startPosition: 'translate(10px, 0) rotate(-25deg)',
        endPosition: 'translate(-25px, -75px) rotate(-25deg)',
        pointValue: 3
    }
];
const targetIdsType3Row2 = [
    type3num4 = {
        id: 'type3num4',
        startPosition: 'translate(-20px, 50px) rotate(20deg)',
        endPosition: 'translate(10px, -30px) rotate(20deg)',
        pointValue: 3
    },
    type3num5 = {
        id: 'type3num5',
        startPosition: 'translate(20px, 50px) rotate(-20deg)',
        endPosition: 'translate(-10px, -30px) rotate(-20deg)',
        pointValue: 3
    }
];
const targetIdsType3Planet = [
    type3num6 = {
        id: 'type3num6',
        startPosition: 'translate(60px, 105px) rotate(-135deg)',
        endPosition: 'translate(0px, 165px) rotate(-135deg)',
        pointValue: 5
    },
    type3num7 = {
        id: 'type3num7',
        startPosition: 'translate(-80px, -105px) rotate(-45deg)',
        endPosition: 'translate(-140px, -165px) rotate(-45deg)',
        pointValue: 5
    },
    type3num8 = {
        id: 'type3num8',
        startPosition: 'translate(0px, -105px) rotate(45deg)',
        endPosition: 'translate(60px, -165px) rotate(45deg)',
        pointValue: 5
    },
    type3num9 = {
        id: 'type3num9',
        startPosition: 'translate(-140px, 105px) rotate(135deg)',
        endPosition: 'translate(-80px, 165px) rotate(135deg)',
        pointValue: 5
    }
]
$(() => {
    const sortLeaderboard = () => {
        leaderBoardObjects.sort(scoreSorter);
        $('#leaderOne').text(`-${leaderBoardObjects[0].score}- ${leaderBoardObjects[0].name}`);
        $('#leaderTwo').text(`-${leaderBoardObjects[1].score}- ${leaderBoardObjects[1].name}`);
        $('#leaderThree').text(`-${leaderBoardObjects[2].score}- ${leaderBoardObjects[2].name}`);
        $('#leaderFour').text(`-${leaderBoardObjects[3].score}- ${leaderBoardObjects[3].name}`);
        $('#leaderFive').text(`-${leaderBoardObjects[4].score}- ${leaderBoardObjects[4].name}`);
    }
    sortLeaderboard();
    const infoOpen = () => {
        $('#infoBox').css('top', '0');
        $('#infoButton').off('click', infoOpen);
        $('#infoButton').on('click', infoClose);
        $('#infoButton').css({
            'background-image': 'radial-gradient(rgb(25, 36, 196), rgb(51, 50, 138))',
            'box-shadow': '0 0 30px 0 blue',
            'border': 'solid 5px rgb(44, 45, 112)'
        })
    }
    const infoClose = () => {
        $('#infoBox').css('top', '-420px');
        $('#infoButton').off('click', infoClose);
        $('#infoButton').on('click', infoOpen);
        $('#infoButton').css({
            'background-image': 'radial-gradient(rgb(12, 11, 83), rgb(42, 32, 179))',
            'box-shadow': '10px 15px 15px 1px rgba(0, 0, 0, .7)',
            'border': 'solid 5px rgb(40, 41, 99)'
        })
    }
    $('#infoButton').on('click', infoOpen);
    const clickTarget = (event) => {
        const targ = $(event.currentTarget);
        const ident = targ.attr('id');
        targ.off('click', clickTarget);
        targ.css('transform', window[ident].startPosition);
        scoreCount += window[ident].pointValue;
        $('#scoreCount').text(scoreCount);
    }
    const revealTarget = (targetArray, timeout) => {
        const targetToReveal = targetArray[(Math.floor(Math.random() * targetArray.length))];
        $(`#${targetToReveal.id}`).on('click', clickTarget);
        $(`#${targetToReveal.id}`).css('transform', targetToReveal.endPosition)
        setTimeout(() => {
            $(`#${targetToReveal.id}`).css('transform', targetToReveal.startPosition)
            $(`#${targetToReveal.id}`).off('click', clickTarget);
        }, timeout);
    }
    const startRound = () => {
        scoreCount = 0;
        $('#startButton').css({
            'background-image': 'radial-gradient(rgb(209, 8, 8), rgb(138, 50, 50))',
            'box-shadow': '0 0 30px 0 red',
            'border': 'solid 4px rgb(138, 50, 50)'
        });
        $('#scoreCount').text(scoreCount);
        $('#startButton').off('click', startRound);
        $('.titleWords').text(' ');
        setTimeout(() => {
            $('#lineTwo').text('3');
            $('#lineTwo').css('font-size', '70px');
        }, 1000);
        setTimeout(() => {
            $('#lineTwo').text('2');
        }, 2000);
        setTimeout(() => {
            $('#lineTwo').text('1');
        }, 3000);
        setTimeout(() => {
            $('#lineTwo').css('font-size', '40px');
            $('#lineOne').text('0');
            $('#lineTwo').text('0');
            $('#lineThree').text('0');
        }, 4000);
        setTimeout(() => {
            $('#lineOne').text('00');
            $('#lineTwo').text('00');
            $('#lineThree').text('00');
        }, 4250);
        setTimeout(() => {
            $('#lineOne').text('000');
            $('#lineTwo').text('000');
            $('#lineThree').text('000');
        }, 4500);
        setTimeout(() => {
            $('#lineOne').text('0000');
            $('#lineTwo').text('0000');
            $('#lineThree').text('0000');
        }, 4750);
        setTimeout(() => {
            $('#lineOne').text('WHACK');
        }, 5000);
        setTimeout(() => {
            $('#lineTwo').text('-A-');
        }, 5250);
        setTimeout(() => {
            $('#lineThree').text('MARTIAN');
        }, 5500);
        setTimeout(() => {
            $('.titleWords').text('');
            $('.titleWords').css('font-size', '70px');
        }, 6000);
        let gameplay1;
        let gameplay2;
        let gameplay3;
        let gameplay4;
        let gameplay5;
        let gameplay6;
        let gameplay7;
        let gameplay8;
        let gameplay9;
        let gameplay10;
        let gameplay11;
        setTimeout(() => {
            gameTimer = 80;
            gameplay1 = setInterval(() => {
                $('#lineTwo').text(`${gameTimer}`);
                gameTimer--;
            }, 1000);
        }, 5000);

        gameplay2 = setInterval(function () {
            revealTarget(targetIdsType1Row2, 2000);
        }, 5000);

        setTimeout(() => {
            gameplay3 = setInterval(function () {
                revealTarget(targetIdsType1Row1, 2000);
            }, 5000);
        }, 2500);

        setTimeout(() => {
            $('#planetContainer').css('top', '-250px');
            gameplay4 = setInterval(function () {
                revealTarget(targetIdsType2Row1, 1750);
            }, 5000);
        }, 10750);

        setTimeout(() => {
            gameplay5 = setInterval(function () {
                revealTarget(targetIdsType2Row2, 1750);
            }, 5000);
        }, 13250);

        setTimeout(() => {
            gameplay6 = setInterval(function () {
                revealTarget(targetIdsType2Planet, 3000);
            }, 5000);
        }, 13750);

        setTimeout(() => {
            gameplay7 = setInterval(function () {
                revealTarget(targetIdsType3Row1, 1500);
            }, 5000);
        }, 22000);

        setTimeout(() => {
            gameplay8 = setInterval(function () {
                revealTarget(targetIdsType3Row2, 1500);
            }, 5000);
        }, 24500);

        setTimeout(() => {
            gameplay9 = setInterval(function () {
                revealTarget(targetIdsType3Planet, 3000);
            }, 5000);
        }, 28500);

        setTimeout(() => {
            gameplay10 = setInterval(function () {
                revealTarget(targetIdsType1Row1, 2000);
            }, 5000);
        }, 31000);

        setTimeout(() => {
            gameplay11 = setInterval(function () {
                revealTarget(targetIdsType1Row2, 2000);
            }, 5000);
        }, 33000);
        endGame = setTimeout(() => {
            clearInterval(gameplay1);
            clearInterval(gameplay2);
            clearInterval(gameplay3);
            clearInterval(gameplay4);
            clearInterval(gameplay5);
            clearInterval(gameplay6);
            clearInterval(gameplay7);
            clearInterval(gameplay8);
            clearInterval(gameplay9);
            clearInterval(gameplay10);
            clearInterval(gameplay11);
            $('#planetContainer').css('top', '-700px');
            $('.titleWords').css('font-size', '40px');
            $('#lineOne').text('0000');
            $('#lineTwo').text('0000');
            $('#lineThree').text('0000');
            setTimeout(() => {
                $('#lineOne').text('ENTER');
            }, 1000);
            setTimeout(() => {
                $('#lineTwo').text('NAME');
            }, 2000);
            setTimeout(() => {
                $('#lineThree').text('==>');
                $('#nameEnterInput').val('YOUR NAME HERE')
                $('#nameEnterButton').on('click', enterName = () => {
                    const playerFinalObject = {
                        name: `${$('#nameEnterInput').val().toUpperCase()}`,
                        score: scoreCount
                    };
                    leaderBoardObjects.push(playerFinalObject);
                    $('#startButton').css({
                        'background-image': 'radial-gradient(rgb(54, 13, 13), rgb(117, 43, 43))',
                        'box-shadow': '10px 15px 15px 1px rgba(0, 0, 0, .7)',
                        'border': 'solid 5px rgb(109, 42, 42)'
                    });
                    sortLeaderboard();
                    $('#nameEnterButton').off('click', enterName);
                    $('#nameEnterInput').val('');
                    setTimeout(() => {
                        $('#lineOne').text('WHACK');
                    }, 1000);
                    setTimeout(() => {
                        $('#lineTwo').text('-A-');
                    }, 2000);
                    setTimeout(() => {
                        $('#lineThree').text('MARTIAN');
                        $startButtonListener();
                    }, 3000);
                })
            }, 3000);
        }, 86500);
    }
    const $startButtonListener = () => {
        $('#startButton').on('click', startRound);
    }
    $startButtonListener();
})