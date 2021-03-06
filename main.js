/**
 * Created by JYL on 2014/6/8.
 */
var board = new Array();
var hasConflicted = new Array();
var score = 0;

$(function() {
	initbuju();
	newgame();
	if (!localStorage.maxScore) {
		localStorage.maxScore=0;
	}
	$("#maxScoreText").text(localStorage.maxScore);
});

function initbuju() {
	//	var bu = 0;
	//	document.getElementById("muiseanniu").onclick = function function_name() {
	//		if(bu == 0) {
	//			document.getElementById("bgmuise").play();
	//			bu = 1;
	//		} else {
	//			document.getElementById("bgmuise").pause();
	//			bu = 0;
	//		}
	//	}
	document.getElementById("info").addEventListener("tap", function() {
		mui.openWindow({
			url: 'about.html',
			id: 'about'
		});
	});

}

function newgame() {
	//初始化棋盘格
	init();
	//在随机两个格子生成数字
	generateOneNumber();
	generateOneNumber();
	$("#gameover").remove();
	updateScore(0);
	maxScore ();
//	//添加key-value 数据到 sessionStorage
//	localStorage.setItem("demokey", "10");
//	//通过key来获取value
//	var dt = localStorage.getItem("demokey");
//	//alert(dt);
//	//清空所有的key-value数据。
//	//localStorage.clear();
//	//alert(localStorage.length);
//	//score=dt;
//	alert(dt);
//	score=20;
//	alert(score);
//	$("#score").text(score);
}

function restartgame() {
	$("#gameover").remove();
	updateScore(0);
	newgame();
	maxScore();
}

function maxScore () {
	if (score>localStorage.maxScore) {
		localStorage.maxScore=score;
		$("#maxScoreText").text(localStorage.maxScore);
	}
}
function init() {
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			var gridCell = $("#grid-cell-" + i + "-" + j);
			gridCell.css("top", getPosTop(i, j));
			gridCell.css("left", getPosLeft(i, j));
		}
	}

	for(var i = 0; i < 4; i++) {
		board[i] = new Array();
		hasConflicted[i] = new Array();
		for(var j = 0; j < 4; j++) {
			board[i][j] = 0;
			hasConflicted[i][j] = false;
		}
	}

	updateBoardView();
	score = 0;
}

function updateBoardView() {
	$(".number-cell").remove();
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			$("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
			var numberCell = $("#number-cell-" + i + "-" + j);

			if(board[i][j] == 0) {
				numberCell.css("width", "0px");
				numberCell.css("height", "0px");
				numberCell.css("top", getPosTop(i, j) + 31);
				numberCell.css("left", getPosLeft(i, j) + 31);
			} else {
				numberCell.css("width", "62px");
				numberCell.css("height", "62px");
				numberCell.css("top", getPosTop(i, j));
				numberCell.css("left", getPosLeft(i, j));
				numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
				numberCell.css("color", getNumberColor(board[i][j]));
				numberCell.text(board[i][j]);
			}

			hasConflicted[i][j] = false;
		}
	}

	$(".number-cell").css("line-height", "62px");
	$(".number-cell").css("font-size", "37px");
}

function generateOneNumber() {
	if(nospace(board)) {
		return false;
	}
	//随机一个位置
	var randx = parseInt(Math.floor(Math.random() * 4));
	var randy = parseInt(Math.floor(Math.random() * 4));
	while(true) {
		if(board[randx][randy] == 0) {
			break;
		}
		var randx = parseInt(Math.floor(Math.random() * 4));
		var randy = parseInt(Math.floor(Math.random() * 4));
	}

	//随机一个数字
	var randNumber = Math.random() < 0.5 ? 2 : 4;

	//在随机位置显示随机数字
	board[randx][randy] = randNumber;
	ShowNumberWithAnimation(randx, randy, randNumber);

	return true;
}