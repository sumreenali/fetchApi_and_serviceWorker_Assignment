document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('getApiDataTable').addEventListener('click',getApiDataTable);
function getText(){
	fetch('sample.txt')
	// .then(function(res){
	// 	return res.text();
	// })
	// .then(function(data){
	// 	console.log(data);
	// });

	fetch('sample.txt')
	.then((res) => res.text())
	.then((data) => {
		document.getElementById('output').innerHTML = data;
	})
	.catch((err) => console.log(err))
}

function getUsers(){
	fetch('users.json')
	.then((res) => res.json())
	.then((data) =>{
		let output = '<h2>Users</h2>';
		data.forEach(function(user){
			output +=`
			<ul>
				<li>ID: ${user.id}</li>
				<li>Name: ${user.name}</li>
				<li>Email: ${user.email}</li>
			</ul>`;
		});
		document.getElementById('output').innerHTML = output;
	})
}

function getPosts(){
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res) => res.json())
	.then((data) =>{
		let output = '<h2>Posts</h2>';
		data.forEach(function(post){
			output +=`
			<div>
				<h3> <sub>${post.id} </sub>${post.title}</h3>
				<p>${post.body}</p>
			</div>
			`;
		});
		document.getElementById('output').innerHTML = output;
	})
}

function getApiDataTable(){
	fetch('https://api.github.com/users')
	.then((res) =>res.json())
	.then((data)=> {
		let output = `<h2>Git API Users Data</h2>
		
		<table class="table table-hover table-stripped">
	 <thead>
	 <tr>
      <th>User ID</th>
      <th>login</th>
      <th>Node ID</th>
    </tr>
    </thead>
    <tbody id="myTable">
    </tbody>

  `;
  document.getElementById('output').innerHTML = output;
  	let	row='';
		data.forEach(function(users){
			
			row +=`		
  		    <tr>
     		 <th scope="row">${users.id}</th>
     		 <td>${users.login}</td>
      		<td>${users.node_id}</td>
   			 </tr>
  			`;
		});
		document.getElementById('myTable').innerHTML = row;
	})
}
