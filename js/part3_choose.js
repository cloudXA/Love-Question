/*
 * @Date: 2019-10-20 21:12:47
 * @LastEditors: Cloud
 * @LastEditTime: 2019-10-21 17:05:08
 */
// 收藏按钮,题目集合
var collectionStar = document.getElementsByClassName('nav_star')[0].children[0] || null;
var questionLists = document.getElementsByClassName('question_list')[0] || null;
var analysisButton = document.getElementById('analysis') || null;
var analysisContent = document.getElementsByClassName('analysis')[0] || null;
var likeButton = document.getElementsByClassName('like') || null;
var emtionList = document.getElementsByClassName('emtion_control')[0].children[0] || null;
var commentSubmit = document.getElementsByClassName('comment_submit')[0] || null;
var commentUser = document.getElementsByClassName('comment_users')[0] || null;
var commentList = document.getElementsByClassName('comment_lists')[0] || null;
var times = new Date().getMinutes();

window.onload = function() {
    if(this.questionLists !== null) {
        this.addQuestion();
    }
    // if(this.an)
    this.addComment(); 
    this.addAnalysis();
    
    this.addCollection();
    this.addLike();
}
function addCollection() {
    // 点击收藏星星，他能够改变颜色并提示已经收藏
    collectionStar.addEventListener('click',function() {
        if(this.style.color === 'orange') {
            this.style.color = 'gray';
            alert('你取消了收藏');
        } else {
            this.style.color = 'orange';
            alert('你已收藏了');
        }
    },false);
}

// TODO:判断存在于否,此刻并不存在questionLists,就该不执行
function addQuestion() {
    // 点击选项，该选项颜色为#586AEA，再次点击取消颜色，不明觉厉
    for(var i=0; i<questionLists.children.length;i++) {
        questionLists.children[i].style.color = 'black';
        questionLists.children[i].addEventListener('click',function(e) {
            debugger;
            if(this.style.color === 'black') {
                this.style.color = 'blue';
            } else {
                this.style.color = 'black';
            }
        },false)
    }
}


function addAnalysis() {
    // 委托机制出现莫名的bug,解析答案
    analysisButton.onclick = function() {
        if(this.value === '解析') {
            this.value = '隐藏';
            analysisContent.style.display = 'block';
        } else {
            this.value = '解析';
            analysisContent.style.display = 'none';
        }
        
    }
}


function addComment() {
    // 评论添加
    commentSubmit.onclick = function() {
        var current = new Date().getMinutes();
        var textarea = document.getElementById('textarea');
        var newComment = commentUser.cloneNode(true);
        newComment.childNodes[1].childNodes[3].innerHTML = textarea.value;
        commentList.appendChild(newComment);
        textarea.value = null;
        newComment.children[0].children[0].children[1].children[0].innerText = `${times}`-`${current}`+'分钟之前';
        newComment.children[0].children[0].children[1].children[2].innerText = '0';
    }
}

// 对按钮进行绑定
function addLike() {
    // 点赞按钮+1,再次点击取消点赞
    for(var i=0;i<likeButton.length;i++) {
        likeButton[i].addEventListener('click',function(e) {
            if(this.src.slice(-8) === 'like.png') {
                var likeNumber = Number(this.nextSibling.nextSibling.innerText);
                this.nextSibling.nextSibling.innerHTML = likeNumber-1;
                this.src = 'images/likegray.png';
            } else {
                this.src = 'images/like.png';
                var likeNumber = Number(this.nextSibling.nextSibling.innerText);
                this.nextSibling.nextSibling.innerHTML = likeNumber+1;
            }
        },false);
    }
}
