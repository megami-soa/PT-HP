
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
});


$('#g-nav a,#footer a').click(function () {

   var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	$(elmHash).css("position","relative");//idの上部の距離を取得するために1時的にstickyを無効にする
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$(elmHash).css("position","sticky");//stickyを有効に戻す
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;

});



// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	// 4-7 にゅーん（滑らかに変形して出現）

	$('.smoothTrigger').each(function(){ //smoothTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smooth');// 画面内に入ったらsmoothというクラス名を追記
		}else{
		$(this).removeClass('smooth');// 画面外に出たらsmoothというクラス名を外す
		}
		});
}



// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
function SmoothTextAnime() {
	$('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
		}else{
		$(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
		}
		});
}



function particleTextAnime() {

$("#particle").particleText({
		text: "C G    C L U B", // 表示させたいテキスト。改行の場合は<br>追加
		colors:["#cccccc"], // パーティクルの色を複数指定可能
		speed: "high",  // slow, middle, high の3つから粒子が集まる速さを選択
	});
}


//SVGの初期設定

var logoVivus1;//1つめのSVG設定
var logoVivus2;//2つめのSVG設定
var logoVivus3;//3つめのSVG設定

//1～3のSVG初期設定
function VivusInit(){
	//1つめのSVG初期設定
	logoVivus1 = new Vivus('logo',
		{
			start: 'autostart',//アニメーションの自動再生
			type: 'scenario',// アニメーションのタイプを設定
			pathTimingFunction: Vivus.EASE,//動きの加速減速設定
		},
		function(obj){
			$("#logo").attr("class", "done");//描画が終わったらdoneというクラスを追加
		}
	);
	logoVivus1.stop();

	//2つめのSVG初期設定
	logoVivus2 = new Vivus('logo2',
		{
			start: 'autostart',//アニメーションの自動再生
			duration: 80 ,//アニメーションの時間設定。数字が小さくなるほど速い
			type: 'scenario-sync',// アニメーションのタイプを設定
			pathTimingFunction: Vivus.EASE_OUT,//動きの加速減速設定
		},
		function(obj){
			$("#logo2").attr("class", "done");//描画が終わったらdoneというクラスを追加
		}
	);
	logoVivus2.stop();

	//3つめのSVG初期設定
	logoVivus3 = new Vivus('logo3',
		{
			start: 'autostart',//アニメーションの自動再生
			type: 'oneByOne',// アニメーションのタイプを設定
			pathTimingFunction: Vivus.EASE,//動きの加速減速設定
		},
		function(obj){
			$("#logo3").attr("class", "done");//描画が終わったらdoneというクラスを追加
		}
	);
	logoVivus3.stop();

}


//スクロールをしたらSVGが出現する設定
function VivusAnime(){
	//スクロールをしたら1つめのSVGが出現する設定
	var elemPos = $('#logo').offset().top - 50;//要素より、50px上の位置まで来たら出現
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus1.play(2);//描画される速さ。数が大きくなるほど速い
	}

	//スクロールをしたら2つめのSVGが出現する設定
	var elemPos = $('#logo2').offset().top - 50;//要素より、50px上の位置まで来たら出現
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus2.play(5);//描画される速さ。数が大きくなるほど速い
	}

	//スクロールをしたら3つめのSVGが出現する設定
	var elemPos = $('#logo3').offset().top - 50;//要素より、50px上の位置まで来たら出現
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
		logoVivus3.play(2);//描画される速さ。数が大きくなるほど速い
	}
}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();//最低限おぼえておきたい動きの関数を呼ぶ
	SmoothTextAnime();//テキストが滑らかに出現の関数を呼ぶ
	VivusAnime();//SVG アニメーションの関数を呼ぶ
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        VivusInit(); //SVG アニメーションの初期設定
        VivusAnime();//SVG アニメーションの関数を呼ぶ
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() {
    fadeAnime();//最低限おぼえておきたい動きの関数を呼ぶ
	SmoothTextAnime();//テキストが滑らかに出現の関数を呼ぶ
    particleTextAnime();//粒子が集まってテキストになる関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});// ここまでページが読み込まれたらすぐに動かしたい場合の記述
