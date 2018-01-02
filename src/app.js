import {http} from './http'
import {ui} from './ui'

//get posts on dom load
document.addEventListener('DOMContentLoaded',getPosts);

//add post to page
document.querySelector('.post-submit').addEventListener('click',submitPost);

//delete post
document.querySelector('#posts').addEventListener('click',deletePost);

//edit post
document.querySelector('#posts').addEventListener('click',editPost);

//cancel update
document.querySelector('.card-body').addEventListener('click',cancelUpdate);


function getPosts(){
    http.get('http://localhost:3000/posts')
    .then( posts => ui.showPosts(posts) )
    .catch(err => console.log(err)); 
}

function submitPost(){
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value; 

    const data = {
        title,
        body
    }

    if(title === '' && body === ''){
        ui.showAlert('Please fill in the form fields','alert alert-danger');
    }else{
        
        if(id === ''){
            console.log("add",id);
            //ADD POST
            http.post('http://localhost:3000/posts', data)
            .then( data =>{
                ui.clearPosts();
                ui.showAlert('Post has been added','alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err));
        }else{
            console.log("edit",id);
            //edit post
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then( data =>{
                ui.changeState('add');
                ui.clearIdInput();
                ui.showAlert('Post has been updated','alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err));
        }
    }
    
}


function deletePost(e){
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;
        console.log(id);

        if(confirm("Do you  really want to delete the post?")){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then( message => {
                ui.showAlert(message,'alert alert-danger');
                getPosts();
            })
            .catch(err => console.log(err));
        }else{
            
        }

    }
}


function editPost(e){
    
    if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        console.log(id);    
    
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        const data = {
            title,
            body,
            id
        } 

        ui.editPost(data);
    }

    e.preventDefault();
}

function cancelUpdate(e){
    
    if(e.target.classList.contains('btn-cancel')){
        ui.changeState('add');
    }
}
