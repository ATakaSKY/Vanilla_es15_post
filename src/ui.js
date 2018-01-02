class UI{
    constructor(){
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.postSubmit = document.querySelector('.post-submit');
        this.idInput = document.querySelector('#id');
        this.formState = 'add';
    }

    showPosts(posts){
        let output = '';

        posts.forEach( (post,index) =>{
            output += `
                
                <div class="card mb-3 p-4">
                    <div class="card-block">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>

            `
        })

        this.post.innerHTML = output;
    }

    editPost(post){
        console.log(post);
        this.titleInput.value = post.title;
        this.bodyInput.value = post.body;
        this.idInput.value = post.id;

        this.changeState('edit');
    }

    changeState(state){
        if(state === 'edit'){
            
            this.postSubmit.textContent = "Update Post";
            this.postSubmit.className = "post-submit btn btn-warning btn-block";

            const div = document.createElement('div');
            div.className = "btn-cancel btn btn-light btn-block";
            div.appendChild(document.createTextNode('Cancel'));

            const container = document.querySelector('.card-body');
            const formEnd = document.querySelector('.form-end');

            container.insertBefore(div, formEnd);

        }else{

            this.postSubmit.textContent = "Post It";
            this.postSubmit.className = "post-submit btn btn-primary btn-block";

            if(document.querySelector('.btn-cancel')){
                document.querySelector('.btn-cancel').remove();
            }
            this.clearPosts();
        }
    }

    clearIdInput(){
        this.idInput.value = '';
    }

    clearPosts(){
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    showAlert(message, className){
        this.clearAlert();

        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.postsContainer');

        container.insertBefore(div, this.post);

        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }

    clearAlert(){
        if(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }
    }
}

export const ui = new UI();