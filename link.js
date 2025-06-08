 
//adding a mode changing button
let btn=document.querySelector("#btnn");
let currMode="light";
let body= document.querySelector("body");
btn.addEventListener("click",()=>{
   if(currMode==="light"){
    currMode="dark";
   body.classList.add("dark");
   body.classList.remove("light");
   }else{
    currMode="light";   
    body.classList.add("light");
    body.classList.remove("dark");
   }
})


  

document.addEventListener("DOMContentLoaded", function () {
    const postLikeButton = document.querySelector(".post-actions .like-button");
    const postLikeCountSpan = document.querySelector(".post-reactions span.count");

    if (postLikeButton && postLikeCountSpan) {
        postLikeButton.addEventListener("click", function () {
            let count = Number(postLikeCountSpan.textContent.trim());
            postLikeCountSpan.textContent = count + 1;
        });
    }

    const lineLikeButton = document.querySelector(".line-row .like-button");
    const lineLikeCountSpan = document.querySelector(".line-row span.count");

    if (lineLikeButton && lineLikeCountSpan) {
        lineLikeButton.addEventListener("click", function () {
            let count = Number(lineLikeCountSpan.textContent.trim());
            lineLikeCountSpan.textContent = count + 1;
        });
    }

    const blockLikeButton = document.querySelector(".block .like-button");
    const blockLikeCountSpan = document.querySelector(".block span.count");

    if (blockLikeButton && blockLikeCountSpan) {
        blockLikeButton.addEventListener("click", function () {
            let count = Number(blockLikeCountSpan.textContent.trim());
            blockLikeCountSpan.textContent = count + 1;
        });
    }
});

const postInput = document.querySelector('.post-input');
const mainContent = document.querySelector('.main-content');
const postComposer = document.querySelector('.post-composer');

// User profile data
const userProfile = {
    name: 'Apdesh Kumar',
    title: 'Attended Indian Institute of Technology Jodhpur',
    location: 'Jodhpur, Rajasthan',
    profileImage: 'ak.jpg',
    verified: true
};

// Function to get current timestamp
function getTimeAgo() {
    return 'now';
}

// Function to create a new post element
function createPost(content) {
    const postElement = document.createElement('div');
    postElement.className = 'linkedin-post';
    
    const currentTime = getTimeAgo();
    
    postElement.innerHTML = `
        <!-- Header -->
        <div class="post-header">
            <img src="${userProfile.profileImage}" alt="Profile" class="profile-img">
            <div class="post-info">
                <div class="name">
                    ${userProfile.name}
                    ${userProfile.verified ? '<i class="fa-solid fa-circle-check" style="color: #0a66c2; font-size: 14px; margin-left: 4px;"></i>' : ''}
                </div>
                <div class="meta">${userProfile.title} • ${currentTime} <span>🌐</span></div>
            </div>
        </div>
        
        <!-- Text -->
        <div class="post-text">
            ${content}
        </div>

        <!-- Reactions (initially empty) -->
        <div class="post-reactions" style="display: none;">
            <span>👍 ❤️</span> <span class="count">0</span>
        </div>

        <!-- Comments and shares (initially empty) -->
        <div class="post-stats" style="display: none;">
            <span>0 comments</span> • <span>0 reposts</span>
        </div>

        <!-- Actions -->
        <div class="post-actions">
            <button class="like-button" onclick="toggleLike(this)">👍 Like</button>
            <button onclick="showCommentBox(this)">💬 Comment</button>
            <button onclick="repost(this)">🔁 Repost</button>
            <button onclick="sendPost(this)">📩 Send</button>
        </div>
    `;
    
    return postElement;
}

// Function to handle post submission
function handlePostSubmission() {
    const content = postInput.value.trim();
    
    if (content === '' || content === 'Start a post') {
        alert('Please write something before posting!');
        return;
    }
    

    const newPost = createPost(content);
    
    // Insert the new post right after the post composer
    mainContent.insertBefore(newPost, postComposer.nextSibling);
    
   
    postInput.value = '';
    postInput.placeholder = 'Start a post';
    
    newPost.style.opacity = '0';
    newPost.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        newPost.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        newPost.style.opacity = '1';
        newPost.style.transform = 'translateY(0)';
    }, 100);
    
    console.log('New post created:', content);
}

// Function to toggle like on posts
function toggleLike(button) {
    const post = button.closest('.linkedin-post, .post, .wrapper-box');
    const reactionsDiv = post.querySelector('.post-reactions');
    const countSpan = reactionsDiv.querySelector('.count');
    
    if (button.textContent.includes('👍 Like')) {
        button.innerHTML = '👍 Liked';
        button.style.color = '#0a66c2';
        
        reactionsDiv.style.display = 'block';
        
        // Update count
        let currentCount = parseInt(countSpan.textContent) || 0;
        countSpan.textContent = currentCount + 1;
    } else {
        button.innerHTML = '👍 Like';
        button.style.color = '#666';
        
        // Update count
        let currentCount = parseInt(countSpan.textContent) || 1;
        if (currentCount <= 1) {
            reactionsDiv.style.display = 'none';
        } else {
            countSpan.textContent = currentCount - 1;
        }
    }
}


function showCommentBox(button) {
    alert('Comment functionality coming soon!');
}


function repost(button) {
    alert('Repost functionality coming soon!');
}

function sendPost(button) {
    alert('Send functionality coming soon!');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {

    postInput.addEventListener('click', function() {
        if (this.value === '' || this.placeholder === 'Start a post') {
            this.placeholder = 'What do you want to talk about?';
        }
    });
    
    postInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handlePostSubmission();
        }
    });

    postInput.addEventListener('blur', function() {
        if (this.value.trim() !== '') {

        } else {
            this.placeholder = 'Start a post';
        }
    });
    
    // Add a submit button to the post composer 
    const postOptions = document.querySelector('.post-options');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Post';
    submitButton.className = 'post-submit-btn';
    submitButton.style.cssText = `
        background: #0a66c2;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-left: auto;
        transition: background-color 0.3s ease;
    `;
    
    submitButton.addEventListener('click', handlePostSubmission);
    submitButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#004182';
    });
    submitButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#0a66c2';
    });
    
    // Add the submit button to post options
    postOptions.appendChild(submitButton);
    
    // Enhanced existing like buttons functionality
    const existingLikeButtons = document.querySelectorAll('.like-button');
    existingLikeButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleLike(this);
        });
    });
});

const additionalStyles = `
    .linkedin-post {
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .post-submit-btn:hover {
        background-color: #004182 !important;
    }
    
    .post-input:focus {
        border-color: #0a66c2;
        box-shadow: 0 0 0 2px rgba(10, 102, 194, 0.1);
    }
    
    .like-button.liked {
        color: #0a66c2 !important;
        font-weight: 600;
    }
`;

//  add additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);