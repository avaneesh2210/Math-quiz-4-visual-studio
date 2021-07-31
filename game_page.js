function send() {
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    console.log("number1 = " + get_number1);
    console.log("number2 = " + get_number2);
    into = "x";
    question_number = "<h4 id='number_display'> Q. " + get_number1 + into + get_number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    actual_answer = get_number1 * get_number2;
}

player1_score = 0;
player2_score = 0;

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        document.getElementById("player_question").innerHTML = "questioner - i couldn't beat my partner😥";
        document.getElementById("player_answer").innerHTML = "answerer -yay i won🥳";
    } else {
        document.getElementById("player_question").innerHTML = "questioner - yay i won🥳";
        document.getElementById("player_answer").innerHTML = "answerer - i couldn't beat my partner😥";
    }
    if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } 
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
}
