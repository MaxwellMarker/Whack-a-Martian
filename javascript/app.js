let scoreCount = 0;
const targetIds = ['r1t1','r1t2','r1t3'];
$(()=>{
    const clickTarget = (event) => {
        $(event.currentTarget).off('click', clickTarget);
        $(event.currentTarget).css('transform', 'translate(0, 125px)')
        scoreCount++
        $('#scoreCount').text(scoreCount);
        setTimeout( function () {$(event.currentTarget).on('click', clickTarget);}, 600);
    }
    const $clickTarget = () =>{
        $('button').on('click', clickTarget)
    } 
    $clickTarget()
})
const randomNumber = (maxNum) =>{

}
const revealTarget = () => {
    const idNum = (Math.floor(Math.random()*3));
    $(`#${targetIds[idNum]}`).css('transform', 'translate(0, 0)')
    setTimeout(() => {$(`#${targetIds[idNum]}`).css('transform', 'translate(0, 125px)')}, 1200);
}

setInterval(revealTarget, 4000);