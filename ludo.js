let ludo1=`

<div id="ludo_mat_page">
<button  id="dice" onclick="on_dice()">6</button>

<div id="ludo_mat">
 <div class="player p_1"></div>    
 <div class="player p_2"></div>
 <div class="player p_3"></div>
 <div class="player p_4"></div>


 <div id="mat_a">
    <table>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td style="background-color: rgb(246, 145, 145)"></td><td style="background-color: rgb(246, 145, 145);">*</td></tr>
        <tr><td style="background-color: pink;">*</td><td style="background-color: rgb(246, 145, 145)"></td><td></td></tr>
        <tr><td></td><td style="background-color: rgb(246, 145, 145)"></td><td></td></tr>
        <tr><td></td><td style="background-color: rgb(246, 145, 145)"> </td><td></td></tr>
        <tr><td></td><td style="background-color: rgb(246, 145, 145)"></td><td></td></tr>
    
    </table>
    <div class="win_home"></div>
    <table>
        <tr><td></td><td style="background-color:  rgb(156, 242, 156)"></td><td></td></tr>
        <tr><td></td><td style="background-color:  rgb(156, 242, 156)"></td><td></td></tr>
        <tr><td></td><td style="background-color:  rgb(156, 242, 156)"></td><td></td></tr>
        <tr><td></td><td style="background-color:  rgb(156, 242, 156)"></td><td style="background-color:pink">*</td></tr>
        <tr><td style="background-color:  rgb(156, 242, 156)">*</td><td style="background-color:  rgb(156, 242, 156)"></td><td></td></tr>
        <tr><td></td><td ></td><td></td></tr>
    
    </table>
    
</div>
<div id="mat_b">
<table>
    <tr><td></td ><td></td><td></td></tr>
    <tr><td></td ><td style="background-color: rgb(149, 149, 249)"></td><td style="background-color:rgb(149, 149, 249)">*</td></tr>
  <tr><td style="background-color:pink">*</td ><td style="background-color: rgb(149, 149, 249)" ></td><td></td></tr>
    <tr><td></td><td style="background-color: rgb(149, 149, 249) "></td><td></td></tr>
    <tr><td></td><td style="background-color: rgb(149, 149, 249) "></td><td></td></tr>
    <tr><td></td><td style="background-color: rgb(149, 149, 249)"></td><td></td></tr>

</table>
<div class="win_home"></div>
<table>
    <tr><td></td><td  style="background-color:rgb(250, 250, 166);"></td><td></td></tr>
    <tr><td></td><td style="background-color:rgb(250, 250, 166);"></td><td></td></tr>
    <tr><td></td><td style="background-color:rgb(250, 250, 166);"></td><td></td></tr>
    <tr><td></td><td style="background-color:rgb(250, 250, 166);"></td><td style="background-color:pink;">*</td></tr>
  <tr><td style="background-color:rgb(250, 250, 166);" >*</td><td style="background-color:rgb(250, 250, 166);"></td><td></td></tr>
    <tr><td></td><td ></td><td></td></tr>

</table>

</div>
</div>

</div>


`
{

    let playing_music = new Audio("https://ik.imagekit.io/sbhtechhub/ludo%20effect/playing1.mp3");
    let input_play = new Audio("https://ik.imagekit.io/sbhtechhub/ludo%20effect/input.mp3");
    let _m = 0;
    let _s = 1;
    function _music() {
        let a = document.getElementById("music_");
        if (_m) {
            playing_music.pause();
            a.style = "background-color:#b6cbcb ;box-shadow:none;"
            _m = 0;
        }
        else {
            playing_music.play();
            a.style = "background-color:aqua ;box-shadow:1px 1px 1px #28f7f7,-1px -1px 2px #28f7f7,1px -1px 2px #28f7f7,-1px -1px 2px #28f7f7;"
            _m = 1;

        }
    }






function g_play() {
     _music();
    playing_music.loop = true;
    let sound_box_ = document.getElementById("s_m_box").style = "display:flex";

    let frame_b_ = document.getElementById("_frame_b_").style = "display:none";
    let frame_b_a = document.getElementById("_frame_b_a")
    frame_b_a.style = "display:flex";

frame_b_a.innerHTML=ludo1;
console.log(ludo1)


console.log("new sbh \n\n\n\n");


for (let i = 1; i <= 4; i++) {
    player();
}
   


}





// music& sound control


    function _s_sound() {
        let a = document.getElementById("sound_");
        if (_s) {
            a.style = "background-color:#b6cbcb ;box-shadow:none;"
            _s = 0;

        }
        else {
            a.style = "background-color:aqua ;box-shadow:1px 1px 1px #28f7f7,-1px -1px 2px #28f7f7,1px -1px 2px #28f7f7,-1px -1px 2px #28f7f7;"
            _s = 1;

        }
    }
    function _sound() {
        if (_s) input_play.play();

    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//////////

let contorl={


    
}






// control unit 

    let player_count = 0;                   // for tack distribution
    let x = [4];                // for player tack x position       i.e x[2][3] means x position of  2nd no. player's 3rd tack 
    let y = [4];                // for player tack y position    i.e y[2][3] means y position of  2nd no. player's 3rd tack 

    let tack = [4];
    let _count = [4];               // for Home _count[playerNumber][tackNumber] will be equal to 57
    let p = 40;
    let r = 100;

    let on_p = 1;               // for active player number
    let winner_count = 0;           //  for tracking winner number who is 1st and second...
    let winner_no = [];                 // for store the winner number of the player 
    let dice;
    let dice_check = true;                  // for enabling and disabling the dice
    let tic = new Audio("https://ik.imagekit.io/sbhtechhub/ludo%20effect/input.mp3");
    let dice_voice = new Audio("https://ik.imagekit.io/sbhtechhub/ludo%20effect/dice.mp3");
    for (let i = 1; i <= 4; i++) {
        x[i] = [];
        y[i] = [];
        tack[i] = [];
        _count[i] = [];   // start from 0;

    }





function player() {                 // for tack distribution  during start the game
    player_count++;
    let cn = -1;
    let pp = document.getElementsByClassName("player");             // present player for tack distribution
    for (let i = 0; i < 4; i++) {
        _count[player_count][i] = 0;                            // for root(path) creation  id= tack_playerNumber_tackNumber
        pp[player_count - 1].innerHTML += '<div  class="_tack tack_' + player_count + '" id="tack_' + player_count + '_' + i + '"></div';

    }
    cn++; x[player_count][cn] = "t"; y[player_count][cn] = "t";     // inilizing the each player tack  position 


    // taking x po 
    switch (player_count) {
        // path setting for player controller
        case 1:
            for (let i = 1, j = 6; i <= 5; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 6, j = 5; j >= 0; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 7 * p + r; y[player_count][cn] = 0 * p + r;

            for (let i = 8, j = 0; j <= 5; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 9, j = 6; i <= 14; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 14 * p + r; y[player_count][cn] = 7 * p + r;



            for (let i = 14, j = 8; i >= 9; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 8, j = 9; j <= 14; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 7 * p + r; y[player_count][cn] = 14 * p + r;

            for (let i = 6, j = 14; j >= 9; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 5, j = 8; i >= 0; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            for (let i = 0, j = 7; i <= 6; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            break;
        case 2:
            for (let i = 8, j = 1; j <= 5; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 9, j = 6; i <= 14; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 14 * p + r; y[player_count][cn] = 7 * p + r;



            for (let i = 14, j = 8; i >= 9; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 8, j = 9; j <= 14; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 7 * p + r; y[player_count][cn] = 14 * p + r;

            for (let i = 6, j = 14; j >= 9; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 5, j = 8; i >= 0; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 0 * p + r; y[player_count][cn] = 7 * p + r;


            for (let i = 0, j = 6; i <= 5; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 6, j = 5; j >= 0; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            for (let i = 7, j = 0; j <= 6; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            break;
        case 3:

            for (let i = 13, j = 8; i >= 9; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 8, j = 9; j <= 14; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 7 * p + r; y[player_count][cn] = 14 * p + r;

            for (let i = 6, j = 14; j >= 9; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 5, j = 8; i >= 0; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 0 * p + r; y[player_count][cn] = 7 * p + r;


            for (let i = 0, j = 6; i <= 5; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 6, j = 5; j >= 0; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 7 * p + r; y[player_count][cn] = 0 * p + r;

            for (let i = 8, j = 0; j <= 5; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 9, j = 6; i <= 14; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            for (let i = 14, j = 7; i >= 8; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }


            break;
        case 4:


            for (let i = 6, j = 13; j >= 9; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 5, j = 8; i >= 0; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 0 * p + r; y[player_count][cn] = 7 * p + r;


            for (let i = 0, j = 6; i <= 5; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 6, j = 5; j >= 0; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 7 * p + r; y[player_count][cn] = 0 * p + r;

            for (let i = 8, j = 0; j <= 5; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 9, j = 6; i <= 14; i++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            cn++; x[player_count][cn] = 14 * p + r; y[player_count][cn] = 7 * p + r;




            for (let i = 14, j = 8; i >= 9; i--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }
            for (let i = 8, j = 9; j <= 14; j++) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            for (let i = 7, j = 14; j >= 8; j--) { cn++; x[player_count][cn] = i * p + r; y[player_count][cn] = j * p + r; }

            break;

    }



}




async function run(pl, tt) {

    let a = document.getElementById("tack_" + pl + "_" + tt);               // a= tack  to be run 
    let dice_2 = dice;
    dice = -1;
 
    if (dice_2 == 6 && _count[pl][tt] == 0) {              // if tack have to open the tack

        _count[pl][tt]++; tic.play();
        a.style = "position:fixed;top:" + y[pl][_count[pl][tt]] + "px;left:" + x[pl][_count[pl][tt]] + "px;";
        makeDouble(pl, tt);
        player_changer(1, 1);           // calling change player where 1st argument says dont change player just give next chance 

    }



    else if (dice_2 != -1 && _count[pl][tt] > 0) {
        rmoveDouble();
        await delay(300);
        for (let i = 1; i <= dice_2; i++) {
            _count[pl][tt]++; tic.play();
            a.style = "position:fixed;top:" + y[pl][_count[pl][tt]] + "px;left:" + x[pl][_count[pl][tt]] + "px;";
            await delay(300);

        }



        if (makeDouble(pl, tt,1) || dice_2 == 6 || _count[pl][tt] == 57) {         // for next chance condition
            if (_count[pl][tt] == 57) winner_check(pl);

            player_changer(1, 1);
        }
        else player_changer(0, 1);
    }



}


async function run_back(pl, tt) {
    let a = document.getElementById("tack_" + pl + "_" + tt);
    for (; _count[pl][tt] >= 1; _count[pl][tt]--) {
        tic.play();
        a.style = "position:fixed;top:" + y[pl][_count[pl][tt]] + "px;left:" + x[pl][_count[pl][tt]] + "px;";

        await delay(100);
    }
    _count[pl][tt]--;
    a.style = "";

}



function rmoveDouble() {

    for (let i = 1; i <= 4; i++) {

        for (let j = 0; j <= 3; j++) {
            if (_count[i][j] > 0 && _count[i][j] < 57) {
                document.getElementById("tack_" + i + "_" + j).style = "position:fixed;top:" + y[i][_count[i][j]] + "px;left:" + x[i][_count[i][j]] + "px;";
                console.log(i + " = " + _count[i][j]);
            }

        }

    }

}



function makeDouble(pl,tt){

    let tit = 0;
    for (let i = 1; i <= 4; i++) {

        for (let j = 0; j <= 3; j++) {

if(i==pl && tt==j)check_double(i,j,1);
else check_double(i,j,0);
        }



}


}



function check_double(pl, tt,temp) {   // pl= player no. 1-4 , and tt= tack no. 0-3    temp for telling it not to be cut if it 0

    let tit = 0;
    for (let i = 1; i <= 4; i++) {

        for (let j = 0; j <= 3; j++) {



            if ((i != pl || (i == pl && j != tt)) && _count[i][j] > 0 && (x[pl][_count[pl][tt]] == x[i][_count[i][j]] && y[pl][_count[pl][tt]] == y[i][_count[i][j]])) {

                if (temp==0||(i == pl && j != tt) || ((_count[pl][tt] == 1 || _count[pl][tt] == 9 || _count[pl][tt] == 14 || _count[pl][tt] == 22 || _count[pl][tt] == 27 || _count[pl][tt] == 35 || _count[pl][tt] == 40 || _count[pl][tt] == 48) && !(pl == i && tt == j))) {

                    tit += 5;
                    let a = document.getElementById("tack_" + pl + "_" + tt).style = "height:25px;width:25px; position:fixed;top:" + y[pl][_count[pl][tt]] + "px;left:" + (x[pl][_count[pl][tt]] - 5) + "px;";
                    let b = document.getElementById("tack_" + i + "_" + j).style = "height:25px;width:25px; position:fixed;top:" + y[i][_count[i][j]] + "px;left:" + (x[i][_count[i][j]] + tit) + "px;";


                }
                else {
                    if (i != pl) { run_back(i, j); return 1; }

                }

            }
        }


    }

    return 0;
}




let g = 0;
async function on_dice() {
    if (dice_check) {
        let d = document.getElementById("dice");
        dice_voice.play();                  // for dice sound play
        let k = d.style.cssText;                //  k for pre css
        d.style = k + "animation-name: dice_ani;";
        await delay(1000);
        d.style = k;
        dice_check = false;                     // for dice disable

        g++;                             // for testing with dice number------
        /* switch (g) {
             case 1: dice = 6; break;
             case 2: dice = 6; break;
             case 3: dice = 6; break;
             case 4: dice = 6; break;
             case 5: dice = 6; break;
             case 6: dice = 6; break;
             case 7: dice = 6; break;
             case 8: dice = 6; break;
             case 9: dice = 6; break;
             case 9: dice = 6; break;

         } */
        ///////-------

        do {                                                             // for random dice point
            dice = parseInt(9999999999 * Math.random());
            dice = dice % 7;
        } while (!dice);


        d.innerHTML = dice;                                              // to print number on dice

        let t = document.getElementsByClassName("tack_" + on_p);        // t= tack array of active player, on_p  = active player
        let t_c = 0;                                // locally just for any tack is open or not
        let tt;                                     // it is used for run tack automatically if there is only one tack open
        for (let i = 0; i < 4; i++) {                           //  To make tack active(clickable) of active(on_p) player tack
            if ((dice + _count[on_p][i]) <= 57 && _count[on_p][i] > 0 || dice == 6) { 
                
                t[i].setAttribute("onclick", "run(" + on_p + "," + i + ")"); t_c++; tt = i;
                t[i].classList.add("active_tack")


             }
        }

        if (t_c == 1) run(on_p, tt);            //  condition for running automatically

        else if (!t_c) player_changer(0, 0);             // it will true only when there is no any tack open,  it change the player

    }

    return;
}

// function for making tack clickable and unclikable








// n= it is  for  next chance       m = will false only if there is no active tack of the player
async function player_changer(n, m) {

    let d = document.getElementById("dice");            // dice here it change it coloraccording to the acitve player

    let t = document.getElementsByClassName("tack_" + on_p);                // for active player tack
    if (m) {
        for (let i = 0; i < 4; i++) {               //loop to make active tack disable(unclickable)

            if (_count[on_p][i] <= 57 && n || _count[on_p][i] > 0) t[i].removeAttribute("onclick", "run(" + on_p + "," + i + ")");
t[i].classList.remove("active_tack");
        }
    }

    if (!n) {     // it will false only when the  player have next chance
        await delay(1500);             /// to change the player
        if (on_p == 1) { on_p = 2; d.style = "background-color:red;top:40px;left:660px;"; }
        else if (on_p == 2) { on_p = 3; d.style = "background-color:blue;top:710px;left:660px;"; }
        else if (on_p == 3) { on_p = 4; d.style = "background-color:green;top:710px;left:90px;"; }
        else if (on_p == 4) { on_p = 1; d.style = ""; }
    }


    dice_check = true;                  // to make dice enable




}




// for winner test
function winner_check(pl) {

    let a = 1;
    for (let i = 1; i <= 4; i++) {
        if (_count[pl][i] != 57) { a--; break; }
    }
    if (a) {
        winner_count++;
        winner_no[pl] = winner_count;
    }



}




