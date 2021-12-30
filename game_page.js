player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("question_turn").innerHTML = "Question Turn : "+player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player2_name;
function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);
    charat1 = word.charAt(1);
    console.log(charat1);
    wordby2 = Math.floor(word.length/2);
    charat2 = word.charAt(wordby2);
    console.log(charat2);
    wordminus1 = word.length-1;
    charat3 = word.charAt(wordminus1);
    console.log(charat3);
    removed1 = word.replace(charat1,"_");
    removed2 = removed1.replace(charat2,"_");
    removed3 = removed2.replace(charat3,"_");
    console.log(removed1 + removed2 + removed3);
    question_word = "<h4 id='question'>Q."+removed3+"</h4><br>";
    input_box = "<input id='answer' placeholder='Type Your Answer Here' type='text'><br><br>";
    button = "<button onclick='compare()' class='btn btn-info'>Check</button>";
    altogether = question_word + input_box + button;
    document.getElementById("output").innerHTML = altogether;
    document.getElementById("word").value = "";
}
question_turn = "player1_name";
answer_turn = "player2_name";
function compare(){
    get_answer = document.getElementById("answer").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if (answer_turn == "player1_name") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }   
    }
    if (question_turn == "player1_name") {
        question_turn = "player2_name";
        document.getElementById("question_turn").innerHTML = "Question Turn : "+player2_name;
        answer_turn = "player1_name";
        document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player1_name;
    } else {
        question_turn = "player1_name";
        document.getElementById("question_turn").innerHTML = "Question Turn : "+player1_name;
        answer_turn = "player2_name";
        document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player2_name;
    }
        document.getElementById("output").innerHTML = "";
}