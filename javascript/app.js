let scoreCount = 0;
const targetIdsType1 = [
    type1num1 = {
        id: 'type1num1',
        startPosition: 'translate(-15px, 125px) rotate(12deg)',
        endPosition: 'translate(15px, -30px) rotate(12deg)'
    },
    type1num2 = {
        id: 'type1num2',
        startPosition: 'translate(-10px, 125px) rotate(3deg)',
        endPosition: 'translate(0, 0) rotate(3deg)'
    },
    type1num3 = {
        id: 'type1num3',
        startPosition: 'translate(10px, 125px) rotate(-3deg)',
        endPosition: 'translate(0, 0) rotate(-3deg)'
    },
    type1num4 = {
        id: 'type1num4',
        startPosition: 'translate(15px, 125px) rotate(-12deg)',
        endPosition: 'translate(-15px, -30px) rotate(-12deg)'
    },
    type1num5 = {
        id: 'type1num5',
        startPosition: 'translate(-50px, 125px) rotate(25deg)',
        endPosition: 'translate(25px, -40px) rotate(25deg)'
    },
    type1num6 = {
        id: 'type1num6',
        startPosition: 'translate(0, 125px) rotate(1deg)',
        endPosition: 'translate(0, 0) rotate(1deg)'
    },
    type1num7 = {
        id: 'type1num7',
        startPosition: 'translate(0, 125px) rotate(-1deg)',
        endPosition: 'translate(0, 0) rotate(-1deg)'
    },
    type1num8 = {
        id: 'type1num8',
        startPosition: 'translate(50px, 125px) rotate(-25deg)',
        endPosition: 'translate(-25px, -40px) rotate(-25deg)'
    }
];
$(() => {
    const clickTarget = (event) => {
        const targ = $(event.currentTarget);
        const ident = targ.attr('id');
        targ.off('click', clickTarget);
        targ.css('transform', window[ident].startPosition);
        scoreCount++;
        $('#scoreCount').text(scoreCount);
        setTimeout(function () {
            targ.on('click', clickTarget);
        }, 600);
    }
    const $clickTarget = () => {
        $('.target').on('click', clickTarget)
    }
    $clickTarget()
})

const revealTarget1 = () => {
    const target = targetIdsType1[(Math.floor(Math.random() * targetIdsType1.length))];
    $(`#${target.id}`).css('transform', target.endPosition)
    setTimeout(() => {
        $(`#${target.id}`).css('transform', target.startPosition)
    }, 1400);
}

setInterval(revealTarget1, 2000);